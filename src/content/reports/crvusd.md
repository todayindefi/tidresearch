---
asset: "crvUSD"
slug: "crvusd"
aliases: ["crvUSD", "CRVUSD"]
chains: ["eth", "arb", "op", "fraxtal", "bsc", "avax", "fantom"]
category: "stablecoin"
peg_mechanism: "algorithmic"
assessment_type: "full"
date: "2026-03-28"
last_verified: "2026-04-25"
peg_mechanism_score: 5.5
backing_score: 5.0
liquidity_score: 6.0
issuer_score: 6.0
overall_score: 5.0
issuer: "Curve Finance"
audited_reserves: false
market_cap_approx: 264000000
---

# crvUSD — Asset Risk Assessment (Full)

**Category:** Stablecoin | **Peg Mechanism:** Algorithmic (LLAMMA + PegKeepers) | **Issuer:** Curve Finance

**Live data:** [crvUSD Backing Dashboard](https://todayindefi.github.io/backing-monitor/?asset=crvusd) — hourly on-chain supply, collateral, PegKeeper debt, and YieldBasis utilization.

## Summary

crvUSD is Curve Finance's native stablecoin, launched May 14, 2023. Users mint crvUSD by depositing crypto collateral into specialized lending markets. The core innovation is LLAMMA (Lending-Liquidating AMM Algorithm), which replaces traditional discrete liquidations with continuous, gradual soft-liquidation via a band-based AMM. Peg stability is maintained by PegKeepers (automated minting/burning into stablecoin pools) and a variable-rate monetary policy.

crvUSD's supply architecture is complex and often misunderstood. There is no single authoritative "circulating supply" number:

- **`totalSupply()`** returns ~$2B+ but includes pre-minted ceiling buffers — **not a meaningful metric**.
- **StablecoinLens** only tracks original minting market (CDP) debt + PegKeeper debt. It does **not** include YieldBasis. It predates YB and was never updated.
- **CoinGecko** reports ~$264M circulating via an unknown methodology (not StablecoinLens).
- **YieldBasis factory** holds hundreds of millions in pre-minted crvUSD, but this includes idle buffer alongside actually-deployed pool liquidity. The split is opaque.

All crvUSD is minted through a single contract: the ControllerFactory (`0xC9332fdCB1C491Dcc683bAe86Fe3cb70360738BC`).

---

## I. LLAMMA Mechanism

### How Bands Work

When opening a crvUSD loan, the borrower selects between **4 and 50 bands** — narrow price intervals across which their collateral is distributed equally. Together, all bands define the borrower's liquidation range.

- More bands = wider liquidation range = smoother, more gradual liquidation with lower losses
- Positions with 50 bands have remained in soft liquidation for months while losing only a small percentage of health
- Fewer bands = tighter range = more aggressive conversion but concentrated loss

### Soft Liquidation vs Hard Liquidation

**Soft liquidation:** When the collateral price enters a band, the LLAMMA AMM progressively converts collateral → crvUSD. If the price recovers, the reverse happens — crvUSD repurchases collateral. This is continuous and automatic, not a discrete event. Losses accumulate in both directions while inside the range due to rebalancing fees, slippage, and price movement.

**Hard liquidation:** Only triggered when health reaches **0%** (not simply when price hits the bottom of the range). Any external user can repay the debt and claim remaining collateral at a discount. The borrower loses collateral but keeps their borrowed crvUSD.

Key loss factors during soft liquidation: band count (more = less loss), market volatility (sudden moves are worse), and liquidity depth within the AMM.

### Architecture Components

| Contract | Function |
|----------|----------|
| Controller (V1-V3) | User-facing — loan creation, management, repayment |
| LLAMMA (AMM) | Per-market liquidation engine with band-based soft-liquidation |
| ControllerFactory | Market creation, debt ceilings, single minter for all crvUSD |
| Monetary Policy | Interest rate calculation and adjustment |
| PegKeepers | Automated peg stability via mint/burn into stablecoin pools |
| Price Aggregator | Aggregates crvUSD price across Curve pools using EMAs |
| FlashLender | Flash loans denominated in crvUSD |
| StablecoinLens | Circulating supply calculator — **outdated, does not include YieldBasis** |

---

## II. Peg Maintenance

### PegKeeper System

PegKeepers are Curve's AMO (Algorithmic Market Operations) — automated contracts that stabilize crvUSD's peg through Curve stablecoin pools (crvUSD/USDC, crvUSD/USDT, crvUSD/USDM):

- **Price > $1:** PegKeepers **mint crvUSD** and deposit into pools, adding supply to push price down
- **Price < $1:** PegKeepers **withdraw and burn** previously deposited crvUSD, removing supply to push price up
- **Asymmetric capacity:** Upside defense (minting) is unlimited up to the ceiling. Downside defense (burning) is capped by current PK debt — they can only burn what they previously minted.
- PK debt fluctuates constantly with market conditions. **Check the dashboard for current PK debt.**

PegKeeper crvUSD is protocol-minted and protocol-owned. It is not backed by collateral — it is implicitly backed by the counterpart stablecoins (USDC/USDT/USDM) in the pool. Over time, PK minting and burning should net to zero.

**⚠️ Monitoring note:** High PK debt = healthy downside buffer (more burn capacity). Zero PK debt = no downside defense available. PK debt relative to circulating supply indicates how actively the peg mechanism is working.

### Monetary Policy

The monetary policy contract (AggMonetaryPolicy) functions as a system-wide algorithmic rate controller with three inputs:

1. **Target rate (rate0):** Baseline rate when crvUSD = $1 and no PK debt exists
2. **Price oracle:** Measures deviation from $1 peg
3. **PegKeeper debt share:** Proportion of PK debt vs total crvUSD debt

The rate is uniform across all minting markets (not per-market). Higher rates encourage borrowers to repay (bullish for peg); lower rates incentivize new borrowing.

**Structural issue:** YieldBasis's large credit line has caused rate volatility — rates spike above 12% and drop near 0% driven by YB's BTC rebalancing flows rather than organic lending market dynamics. Two monetary policy reform proposals (LlamaRisk Target Fraction adjustment, Egorov 3-week EMA smoothing) aim to address this.

### Peg Performance

Average peg of **$0.9997** — one of the tightest for a decentralized stablecoin. Peg volatility increased **66% in mean absolute deviation** after YieldBasis launched (Sep 2025), though the average peg stayed above $0.9997.

**TID PegTracker** (2,985 hourly samples, multi-DEX): avg **−13 bps**, median **−9 bps** from $1.00. Tighter than thBILL (median −32 bps) by ~3×, slightly looser than OUSD (median −6 bps) — reflecting the trade-off between algorithmic complexity (LLAMMA + PegKeepers + YB-induced rate volatility) and OUSD's simpler USDC-redemption model.

---

## III. Supply Architecture

### Sources of crvUSD (what creates new supply)

Four mechanisms create new crvUSD. DefiLlama also counts LlamaLend debt as supply (explained below).

| Source | Structural Role | How It Works |
|--------|----------------|-------------|
| **Minting markets (CDP)** | Original mechanism | Users deposit collateral (WBTC, WETH, wstETH, etc.), mint crvUSD as debt. Over-collateralized. 8 active markets, 2 in wind-down (sfrxETH, LBTC have $0 ceiling). |
| **YieldBasis credit line** | Dominant source since Sep 2025 | $1B ceiling from ControllerFactory. YB factory (`0x370a...`) receives pre-minted crvUSD, deploys it into BTC/crvUSD Curve pools as users deposit BTC. Pre-minted balance includes idle buffer — actual deployment depends on BTC deposits. |
| **PegKeepers** | Peg defense | 4+ keepers mint crvUSD into stable pools (crvUSD/USDC, crvUSD/USDT, crvUSD/USDM, crvUSD/frxUSD, crvUSD/GHO, etc.) when price > $1, burn when price < $1. Debt fluctuates constantly. Protocol-owned, not collateral-backed. |
| **CurveLendOperator** | DAO-minted lending liquidity (Oct 2025) | Governance-approved operator (`0x21862...eCD`) receives debt ceiling from ControllerFactory and mints fresh crvUSD into specific LlamaLend vaults as protocol-owned liquidity. Currently small (5M ceiling for sreUSD market). Tracks `mintedAmount`. **Precedent-setting** — the DAO can create new operators to mint into any LlamaLend market. |

**LlamaLend and supply accounting:**

Standard LlamaLend markets (OneWayLendingFactory) accept user-deposited crvUSD — the factory itself has no minting authority. Only the CurveLendOperator (~5M) mints fresh crvUSD into LlamaLend. The remaining ~$30M+ of LlamaLend debt is crvUSD that was originally minted elsewhere (CDP, YB, or PK), bought by users on DEXes, and then deposited into LlamaLend vaults as lending liquidity.

DefiLlama counts **all** LlamaLend debt as supply. This is a **deployment-based** methodology — it tracks where crvUSD is actively in use, not where it was originally minted. There is no double-counting because each component measures crvUSD in different contracts:
- Mint market debt = crvUSD outstanding from CDP borrowers
- PK debt = crvUSD sitting in PegKeeper stable pools (protocol-owned)
- YB AMM = crvUSD paired with BTC in YieldBasis Curve pools
- LlamaLend = crvUSD borrowed from lending vaults

This methodology produces ~$250M total and cross-checks against DefiLlama.

**Total supply = mint market debt + PK debt + YB AMM crvUSD + LlamaLend debt**

**The universal minting gate:** `set_debt_ceiling` on ControllerFactory is the only way to authorize new crvUSD creation. Any address that receives a ceiling can mint. The DAO controls who gets ceilings via governance votes. To monitor for new supply sources, enumerate all `set_debt_ceiling` events on ControllerFactory — this is the complete list of entities that can create crvUSD.

**What does NOT count as supply:**
- **scrvUSD vault:** Users deposit existing crvUSD to earn yield. Holds crvUSD, doesn't create it.
- **DEX trading / wallet transfers:** Moves crvUSD, doesn't create it.
- **YB factory idle buffer:** Pre-minted but not deployed — excluded from supply (only YB AMM pool balances count).

### Supported Collateral Types (Minting Markets)

| Collateral | Category | Added | Notes |
|-----------|----------|-------|-------|
| sfrxETH | ETH LST | May 2023 | Launch collateral (v1 → v2). **Wind-down** ($0 ceiling). |
| wstETH | ETH LST | Mid-2023 | Lido — historically largest market |
| WBTC | BTC | Mid-2023 | Currently dominant by debt |
| WETH | ETH | Mid-2023 | Native Ethereum — most loans by count |
| tBTC | BTC | Mid-2023 | Threshold Network |
| cbBTC | BTC | 2025 | Coinbase wrapped BTC |
| weETH | ETH LRT | 2025 | EtherFi wrapped eETH |
| LBTC | BTC | 2025 | Lombard BTC. **Wind-down** ($0 ceiling). |

**Structural trend:** CDP minting has declined from hundreds of millions to tens of millions in active debt, while YieldBasis has become the dominant supply source. BTC-denominated collateral (WBTC, tBTC, cbBTC) now dominates CDP markets by debt value. Check the dashboard for current per-market debt, CR, and utilization.

### Collateral Ratio

**Total crvUSD supply** = mint market debt + PK debt + YB AMM crvUSD + LlamaLend debt. This matches DefiLlama's methodology (~$250M as of March 2026) and cross-checks accurately. Do not use `totalSupply()` (includes ceiling buffers), StablecoinLens (misses YB and operators), or CoinGecko (unknown methodology).

**Conservative CR (primary metric):**
```
CR = collateral (mint markets + YB pool BTC + LlamaLend collateral) / total supply (mint + PK + YB + LlamaLend)
```
This treats PK-minted crvUSD as unbacked debt. PegKeeper crvUSD is protocol-minted into stable pools without external collateral — the strictest view excludes the pool counterparts from the collateral side.

**Inclusive CR (reference metric, ~140%):**
```
CR = collateral (mint markets + YB pool BTC + LlamaLend collateral + PK reserve pool stables) / total supply
```
This counts the USDC/USDT/USDM/frxUSD/GHO sitting opposite PK crvUSD in the stable pools as backing. The logic: if crvUSD depegs below $1, PegKeepers withdraw and burn their crvUSD, and arbitrageurs buy crvUSD cheaply using those reserve stables. The stables function as a peg defense reserve — not locked collateral, but market-accessible backing.

**What backs each supply source:**

| Supply Source | Collateral | CR Character |
|--------------|-----------|-------------|
| Mint markets (CDP) | BTC, ETH, LSTs at ~190% CR | Traditional overcollateralized CDP |
| YieldBasis | BTC side of 50/50 BTC/crvUSD pools (~100% CR) | Credit-line-backed, BTC-denominated |
| LlamaLend | Borrower collateral in lending vaults | Mix of user-deposited crvUSD (recirculated) and operator-minted (fresh). Collateral varies by market. |
| PegKeepers | None directly (USDC/USDT/USDM/frxUSD/GHO sit opposite in pools) | Protocol-minted, reserve-pool-backed. Excluded from conservative CR. |

**Key monitoring metrics (check dashboard for live values):**
1. **Conservative CR** — the primary health indicator
2. **% of supply from YieldBasis** — concentration risk
3. **PK reserve pool sizes** — downside defense capacity (stables available to buy crvUSD dips)
4. **PK debt** — current burn capacity for downside peg defense

### Supply Measurement Problem

No single contract or API gives an accurate crvUSD supply:

| Metric | What It Shows | What It Misses |
|--------|--------------|----------------|
| `totalSupply()` | All ceiling capacity (~$2B+) | Meaningless — includes all undeployed buffers |
| StablecoinLens | CDP debt + PK debt only | YieldBasis entirely. Predates YB, never updated. |
| CoinGecko | ~$264M "circulating" | Methodology unknown. Likely excludes contract-held crvUSD. |
| YB factory `balanceOf` | Pre-minted allocation | Doesn't distinguish deployed vs idle buffer |
| **Mint + PK + YB AMMs + LlamaLend** | **Authoritative total supply (~$250M, matches DefiLlama)** | Requires querying multiple contracts — see dashboard |

**⚠️ This opacity is itself a risk factor.** Unlike USDC (clear attestations) or DAI (Dai Stats dashboard), there is no authoritative crvUSD supply dashboard from Curve itself. Our [backing dashboard](https://todayindefi.github.io/backing-monitor/?asset=crvusd) attempts to fill this gap by querying on-chain primitives directly.

### Historical Evolution

1. **May 2023:** Launched with sfrxETH as sole collateral
2. **Mid-2023:** Added wstETH, WBTC, WETH, tBTC
3. **2024:** Matured with 150M debt ceiling for wstETH; sfrxETH v1 phased out for v2
4. **2025:** Added cbBTC, weETH, LBTC; supply grew 3x from <$100M to >$361M (ATH)
5. **Sep 2025:** YieldBasis launched — 60M → 300M → $1B credit line, fundamentally changing supply dynamics
6. **2025–2026:** CDP minting declined to tens of millions while YB became dominant supply source

---

## IV. YieldBasis Dependency (KEY RISK)

### What is YieldBasis?

YieldBasis (YB) is a protocol by Michael Egorov designed to eliminate impermanent loss for BTC AMM liquidity providers. Launched September 2025 on Curve infrastructure.

### Mechanism

1. User deposits BTC (WBTC, cbBTC, or tBTC)
2. YB draws from its pre-minted crvUSD allocation (matching the BTC value)
3. Both BTC + crvUSD enter a Curve pool as a 50/50 position
4. Continuous rebalancing maintains 2x leverage — user's share tracks BTC price 1:1 while earning trading fees
5. When users withdraw BTC, the paired crvUSD returns to the YB factory as idle buffer

### Credit Line (Structural — governance decisions)

| Date | Ceiling | Notes |
|------|---------|-------|
| Sep 24, 2025 | 60M crvUSD | Initial approval — pools filled within minutes |
| Oct 7–14, 2025 | 300M crvUSD | Expanded after rapid fill |
| Late 2025 | $1B | Current ceiling |

The ControllerFactory pre-mints crvUSD into the YB factory up to the ceiling. The factory then deploys into pools on demand as users deposit BTC. **The factory balance includes both deployed and idle crvUSD — check the dashboard for current figures.**

### Structural Risk Factors

1. **Volume dominance:** YB accounts for >36% of all crvUSD volume (>60% during high BTC volatility). This is structural — YB's rebalancing mechanism generates crvUSD trades with every BTC price movement.
2. **Bidirectional BTC correlation:** YB's rebalancing flows are proportional to BTC price moves in both directions. A +1% BTC move causes ~$3.5M in crvUSD flow. This creates BTC correlation in what is supposed to be a USD stablecoin.
3. **Rate instability:** YB-induced flows cause borrow rates to swing between near-0% and 12%+, driven by PegKeeper debt ratio changes rather than organic lending demand. This cascades to scrvUSD yield volatility.
4. **Single protocol concentration:** One protocol controls the largest crvUSD allocation and the majority of volume. A YB exploit or failure would cascade directly to crvUSD.
5. **Dual-role governance:** Michael Egorov is both Curve founder and YB creator. This creates alignment but concentrates influence over crvUSD's dominant supply source.
6. **Correlation amplifier in drawdowns:** A sharp BTC decline simultaneously: (a) triggers YB rebalancing flows that pressure crvUSD, (b) drops collateral value in CDP minting markets, (c) spikes borrow rates. These are correlated, not independent risks.

### Mitigants

- Credit line is factory-bound with irrevocable minter controls
- Emergency DAO multisig can intervene
- crvUSD within YB pools is paired with BTC — not free-floating
- Monetary policy smoothing (3-week EMA) proposal addresses rate volatility
- YB rebalancing is bidirectional — BTC up = buy crvUSD, BTC down = sell crvUSD

---

## V. Smart Contract Security

### Audits

crvUSD has been audited by **10+ firms** across multiple engagements as part of Curve's broader audit program. Key audits include reviews of LLAMMA, Controller, PegKeeper, and Factory contracts. Curve is one of the most audited DeFi protocols.

### Notable Incident

**July 2023 Vyper re-entrancy exploit** (~$70M lost across Curve ecosystem). While this did not directly exploit crvUSD contracts, it demonstrated cascade risk within the Curve ecosystem and temporarily destabilized CRV markets, which indirectly affected crvUSD confidence.

---

## VI. Cross-Chain Architecture

crvUSD is canonically issued on Ethereum mainnet. Curve provides **two distinct bridges** for moving crvUSD between Ethereum and other chains, with materially different security models.

### Slow Bridge — Native L2 messaging

For L2 deployments (**Arbitrum, Optimism, Fraxtal**), Curve uses each chain's canonical native bridge:

- L2 → Ethereum: standard L2 native withdrawal periods (~1 week for Arbitrum)
- Ethereum → L2: fast deposit (minutes)
- Trust assumption: Ethereum security + the L2's native bridge architecture
- No third-party verifiers; same trust model as bridging USDC or any other ERC-20 via canonical L2 bridges

### Fast Bridge — LayerZero OApp

For both L2 fast paths and L1 chains (**BSC, Avalanche, Fantom, Etherlink**), Curve uses LayerZero's OApp standard with custom messenger contracts:

- `VaultMessengerLZ` on Ethereum mainnet — receives LayerZero messages from origin chains, triggers crvUSD minting from the Curve vault
- `L2MessengerLZ` on each origin chain — sends fast cross-chain messages back to Ethereum
- Bridge contract on Ethereum: `0x0A92Fd5271dB1C41564BD01ef6b1a75fC1db4d4f`
- Trust assumption: LayerZero infrastructure (Endpoint contracts, MessageLibrary), DVN providers per pathway, and Curve's messenger contracts themselves
- Source: [Curve fast-bridge docs](https://docs.curve.finance/fast-bridge/overview/), [VaultMessengerLZ](https://docs.curve.finance/fast-bridge/VaultMessengerLZ/), [L2MessengerLZ](https://docs.curve.finance/fast-bridge/L2MessengerLZ/)

### LayerZero exposure and the rsETH-class incident calibration

crvUSD's fast bridge uses the same architectural class (LayerZero OApp) that the rsETH exploit (April 18, 2026, $292M) hit via single-DVN configurations. **The DVN configuration of crvUSD's specific pathways has not been independently audited as part of this report** (a Blockaid script for OFT/OApp DVN audit was published in response to rsETH and could be applied; not yet done for crvUSD).

**Curve's response to rsETH (April 19, 2026):** Curve paused the LayerZero fast bridge — affecting CRV transfers from BSC, Sonic, and Avalanche, and crvUSD fast bridging across all LayerZero-supported chains. **The L2 slow bridge remained operational throughout.** This was a precautionary measure during root-cause investigation, not a confirmed exploit of Curve's bridge.

**Operational signal:** Curve's response demonstrated active monitoring and a credible pause mechanism. Holders relying on the slow bridge were unaffected. This is a positive operational observation: an LP's-not-the-developer pause-precedent in the same architectural class within 24 hours of the rsETH disclosure.

**Status as of report date:** Verify current pause status before initiating any LayerZero-routed bridge transaction. Pause/unpause status varies as Curve completes its investigation.

### Practical guidance for cross-chain crvUSD users

- **For amounts and time tolerance that allow it, prefer the slow bridge** — it inherits Ethereum's native security model rather than adding LayerZero-specific trust assumptions
- **If using the fast bridge**, verify it's currently active (pause status varies post-rsETH) and check the destination chain's pool depth and audit coverage
- **L1 versions (BSC, Avalanche, Fantom, Etherlink)** only have the LayerZero fast bridge available — slow-bridge alternatives don't exist for non-EVM-rollup L1s. Sizing on these chains carries unavoidable LayerZero dependency.
- **DVN-config audit gap:** A formal audit of crvUSD's specific LayerZero pathway DVN configurations (analogous to the audit thBILL completed 2026-04-21) has not been performed. Worth requesting from Curve or running independently before institutional sizing on a fast-bridge route.

### Cross-chain dependency summary for portfolio construction

| Chain | crvUSD bridge model | Bridge-class trust assumption |
|---|---|---|
| Ethereum | Canonical (no bridge) | Curve smart contracts |
| Arbitrum, Optimism, Fraxtal | Slow (native L2) + Fast (LayerZero) | L2 native bridge OR LayerZero (user choice) |
| BSC, Avalanche, Fantom, Etherlink | Fast only (LayerZero) | LayerZero (no fallback) |

Note that crvUSD on a non-canonical chain inherits its bridge's security model on top of crvUSD's own protocol risks. For users sizing on Ethereum, none of this section applies; for users sizing elsewhere, the bridge-layer exposure is real and adds to the score footprint analyzed in §V.

---

## Scoring Rationale

| Category | Score | Notes |
|----------|-------|-------|
| Peg Mechanism | 5.5 | LLAMMA + PegKeepers + monetary policy is a sophisticated system with a $0.9997 average peg. But YieldBasis flows have increased peg volatility 66% and cause rate swings between 0% and 12%+. PK downside defense capacity fluctuates — zero PK debt means zero burn capacity. |
| Backing | 5.0 | Blended system: CDP markets at ~190% CR (small), YB pools at ~100% CR (BTC-backed, dominant), PK supply backed indirectly by reserve pool stables. Conservative CR (excluding PK reserves) is the primary metric. Inclusive CR was ~140% at last check. Supply measurement requires querying multiple contracts — no single authoritative source exists. |
| Liquidity | 6.0 | Deep Curve pool liquidity, strong DEX integration. YB pools add significant depth but also directional flow risk proportional to BTC volatility. PK pools (crvUSD/USDC, crvUSD/USDT, crvUSD/USDM) provide additional stablecoin liquidity. |
| Issuer | 6.0 | Curve is one of DeFi's most established protocols (10+ audit firms, $2B+ TVL history). CRV tokenomics add governance complexity. Egorov's dual Curve/YB role creates concentrated influence over crvUSD's supply architecture. |
| **Overall** | **5.0** | **Elevated risk — well-engineered stablecoin with strong peg mechanics and deep liquidity, but structurally dependent on YieldBasis for supply and volume. The supply architecture is opaque (no authoritative circulating supply metric, unknown YB deployed-vs-idle split, outdated StablecoinLens). CDP minting is structurally small. BTC correlation via YB rebalancing and rate instability are ongoing concerns.** |

## Comparison vs Other Stablecoins in Portfolio

| Factor | crvUSD | USDC | eUSD | USD3 | msUSD |
|--------|--------|------|------|------|-------|
| Type | Algo (LLAMMA) + YB credit line | Fiat-backed | RToken basket | RToken basket | Main Street Finance |
| Circulating | ~$264M (CoinGecko) | $40B+ | $22M | $7–50M | $15–29M |
| Liquidity | Deep (Curve native + YB pools) | Deep | Thin pool, ok aggregated | Moderate | Thin |
| Backing | CDP + YB credit line + PK (opaque mix) | USD reserves (attested) | Yield-bearing stables → RLUSD | 4-asset DeFi basket | Options arbitrage |
| Supply transparency | Poor (no authoritative metric) | Strong (attestations) | Moderate (on-chain basket) | Moderate | Poor |
| Key risk | YB dominance + BTC correlation | Centralized | RLUSD concentration | Basket complexity | Opacity |
| Audits | 10+ firms (Curve) | Regulated, attested | 7 firms (Reserve) | Reserve Protocol | Unknown |
| Score | **5.0** | **9.0** | **6.0** | **7.0** | **5.0** |

## Recommendations

### Supply & Collateral Monitoring
1. **Track conservative CR** — collateral (mint markets + YB pool BTC + LlamaLend collateral) / total supply (mint + PK + YB + LlamaLend). Primary health indicator.
2. **Track PK debt over time** — PK debt is the peg defense indicator. Store historical readings. Zero debt = zero downside burn capacity. High debt = healthy buffer.
3. **Enumerate all `set_debt_ceiling` recipients** — pull all events from ControllerFactory to discover any new supply sources added by governance.

### YieldBasis-Specific Monitoring
4. **YB pool balance ratios** — each YB pool should be ~50/50 BTC/crvUSD. If a pool skews heavily toward crvUSD (BTC withdrawn), YB is selling crvUSD during a BTC decline. A sustained skew away from 50/50 means rebalancing is failing — this is the leading indicator for the Oct 2025 flash crash scenario repeating.
5. **YB credit line utilization** — deployed crvUSD (sum of `crvUSD.balanceOf(pool)` across YB pools) vs $1B ceiling. Higher utilization = more crvUSD tied to BTC correlation. Watch for governance proposals to raise ceiling.
6. **Net crvUSD flow direction** — is YB net buying or selling crvUSD? BTC up = buy (peg support), BTC down = sell (peg pressure). Magnitude scales with BTC volatility × pool size. Correlate with PK activity and peg deviations.
7. **YB supply concentration** — YB deployed as % of total crvUSD supply. If YB represents 80%+, a single bad BTC day could overwhelm PegKeeper capacity.

### System-Wide
8. **Monitor rate volatility** — the AggMonetaryPolicy rate is the system-wide signal. Sustained high rates (>10%) indicate PK/YB stress; near-zero rates indicate excess crvUSD supply. Cascades to scrvUSD yield.
9. **Model BTC drawdown scenarios** — quantify the correlated impact of a 20%+ BTC decline on YB pool ratios, rebalancing health, CDP collateral values, PK deployment, and borrow rates simultaneously.

## Data Sources

- **Live dashboard:** [todayindefi.github.io/backing-monitor/?asset=crvusd](https://todayindefi.github.io/backing-monitor/?asset=crvusd) — hourly on-chain supply, per-market CR, PK debt, YB utilization
- **On-chain contracts:** ControllerFactory, Controllers, LLAMMA AMMs, PegKeepers, AggMonetaryPolicy, OneWayLendingFactory, YB Factory (`0x370a...`)
- **LlamaRisk API:** `https://api.llamarisk.com/protocols/curve/graphql/` — market health scores, unhealthy user positions, soft-liquidation data
- **LlamaRisk Portal:** [portal.llamarisk.com/curve/markets](https://portal.llamarisk.com/curve/markets) — 7-factor market health scores
- **Cross-checks:** CoinGecko (circulating), DefiLlama (TVL), Curve Monitor (curvemonitor.com)

## Bottom Line

crvUSD is a well-engineered stablecoin with one of the tightest pegs among decentralized alternatives ($0.9997 average) and deep native Curve liquidity. The LLAMMA soft-liquidation mechanism and PegKeeper system are genuinely innovative. However, the September 2025 launch of YieldBasis fundamentally changed crvUSD's character. YB now dominates crvUSD's supply infrastructure (largest pre-minted allocation from a $1B ceiling) and volume dynamics (>36% of all crvUSD volume). Traditional CDP minting has declined to tens of millions while YB's allocation is hundreds of millions. The exact composition of circulating supply is opaque — StablecoinLens is outdated, CoinGecko's methodology is unknown, and the split between YB pool-deployed and idle crvUSD is not tracked. The 5.0/10 score reflects strong engineering weighed against structural YB dependency, BTC correlation exposure, rate instability, and supply opacity.
