---
asset: "crvUSD"
slug: "crvusd"
aliases: ["crvUSD", "CRVUSD"]
chains: ["eth", "arb", "op", "fraxtal", "bsc", "avax", "fantom"]
category: "stablecoin"
peg_mechanism: "algorithmic"
assessment_type: "full"
date: "2026-03-28"
last_verified: "2026-08-23"
peg_mechanism_score: 6.0
backing_score: 4.5
liquidity_score: 6.0
issuer_score: 6.0
overall_score: 4.5
issuer: "Curve Finance"
market_cap_approx: 225000000
production: true
---

# crvUSD — Asset Risk Assessment (Full)

**Category:** Stablecoin | **Peg Mechanism:** Algorithmic (LLAMMA + PegKeepers) | **Issuer:** Curve Finance

**Live data:** [crvUSD Backing Dashboard](https://tidresearch.com/dashboards/?asset=crvusd) — hourly on-chain supply, collateral, PegKeeper debt, and YieldBasis utilization.

⚠️ **Operating regime — restated 2026-08-23, and every range below was breached within ten days of publication.**

| | published as durable range (2026-08-13) | measured 2026-08-23 |
|---|---|---|
| Total supply | mid $200Ms | **$300.5M** |
| Conservative CR (symmetric) | 105–115% | **101.96%** — below the floor |
| Inclusive CR | 110–120% | **92.21%** — below par |
| YieldBasis share | 60–80%, trending toward the 80% danger line | **47.1%** — moved the opposite way |
| PegKeeper debt | $33.75M (all USDT keeper) | ⚠️ **$98.60M — tripled** |

**The PegKeeper move is the finding.** This report states the position plainly elsewhere: PegKeeper crvUSD is protocol-minted and protocol-owned, and **it is not backed by collateral**. At $33.75M that was roughly a tenth of supply. At **$98.60M it is 32.8%** — so **about a third of crvUSD is now uncollateralized supply**, and the implicit backing has not kept pace: PK pool stables stand at **$71.24M against $98.60M of debt, a $27.35M gap**.

⚠️ **This is not a depeg and should not be read as one.** PegKeeper minting *is* the peg mechanism functioning as designed — keepers mint into pools above a dollar and burn below. crvUSD trades at **$1.0009**, the minting market's collateral ratio is **230.7%**, and the $98.6M of burn capacity is real, deployable defence. **What changed is composition, not solvency:** the peg is being defended by expanding uncollateralized supply, at three times the scale this report described.

**A definitional note, because this report warns about it and it would silently corrupt every figure above.** The supply figure used here is **`total_supply` at $300.5M, not `totalSupply()` at $2,104.8M** — the latter includes pre-minted ceiling buffer that was never issued. Every ratio on this page uses the former.

⚠️ **And the headline collateral ratio now rests on a basis this coverage changed after publication.** Our feed records a CR basis change on **2026-08-18**, five days after this report was last verified. The 101.96% above is the **deployed** basis; on the **minted** basis the same book reads **99.17% — below par**. A reader comparing this report's 105–115% against the live dashboard is therefore comparing across a definitional change that was never disclosed. **This report takes no view on which basis is correct** — that is a question for the monitoring side — but it should not be possible to meet the two numbers without being told they are not measured the same way.

⚠️ **One lesson about this report's own format, which is otherwise good practice.** This report publishes **durable ranges rather than point-in-time anchors**, and says so, precisely so that daily movement does not make it stale. That remains the right choice. But it carries a failure mode worth naming: **a stale point figure looks stale next to a live value, whereas a breached range still looks authoritative — because a range reads as having already accounted for movement.** No drift check can compare a live number against "105–115%". Four ranges here were breached in ten days, and the YieldBasis one moved *opposite* to the direction this report explicitly called. **A range needs a re-check date the way a point figure needs its date**, and this one is dated 2026-08-23.

PegKeeper debt remains entirely in the USDT keeper; the GHO keeper is decommissioned at a 0 ceiling. **Numbers move daily — the dashboard is the source of truth**, and the ranges above are re-checked as of 2026-08-23 rather than assumed to outlive the interval between passes.

## Summary

crvUSD is Curve Finance's native stablecoin, launched May 14, 2023. Users mint crvUSD by depositing crypto collateral into specialized lending markets. The core innovation is LLAMMA (Lending-Liquidating AMM Algorithm), which replaces traditional discrete liquidations with continuous, gradual soft-liquidation via a band-based AMM. Peg stability is maintained by PegKeepers (automated minting/burning into stablecoin pools) and a variable-rate monetary policy.

crvUSD's supply architecture is complex and often misunderstood. There is no single authoritative "circulating supply" number:

- **`totalSupply()`** returns ~$2B+ but includes pre-minted ceiling buffers — **not a meaningful metric**.
- **StablecoinLens** only tracks original minting market (CDP) debt + PegKeeper debt. It does **not** include YieldBasis. It predates YB and was never updated.
- **CoinGecko** reports a "circulating" figure (low $200Ms range) via an unknown methodology (not StablecoinLens).
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

PegKeepers are Curve's AMO (Algorithmic Market Operations) — automated contracts that stabilize crvUSD's peg through Curve stablecoin pools. Read on-chain 2026-08-13 from the PegKeeperRegulator (`0x36a04CAffc681fa179558B2Aaba30395CDdd855f`) plus `ControllerFactory.debt_ceiling()`:

| Keeper | Pool | PK debt | Debt ceiling | Status |
|---|---|---:|---:|---|
| `0x9201da…E340` | USDC/crvUSD | 0 | 135M | Active, idle |
| `0xFb726F…F9F3` | USDT/crvUSD | **98.60M** (2026-08-23; was 33.75M on 08-13) | 135M | **Active — holds all current PK debt** |
| `0x3fA20e…e09C` | PYUSD/crvUSD | 0 | 45M | Active, idle |
| `0x338Cb2…1f9D` | frxUSD/crvUSD | 0 | 9M | Active, idle |
| `0x53876B…C50b` | GHO/crvUSD | 0 | **0** | **Decommissioned — cannot mint** |

The **GHO keeper's debt ceiling is 0**, so it can neither mint nor (having no debt) burn. It contributes nothing to peg defense in either direction and belongs with the dormant USDM/USDP/TUSD keepers rather than the active set. Note the distinction: the **GHO/crvUSD Curve pool still exists and still contributes DEX depth** — what has stopped is its role as a peg-defense mechanism.

**Why it was zeroed — the condition behind the decision is now verified.** The 0 ceiling is a direct on-chain read, and so is the state that explains it: both of Aave's mainnet GHO Stability Modules — `0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578` (USDC) and `0x686F8D21520f4ecEc7ba577be08354F4d1EB8262` (USDT) — are **seized** as of 2026-08-13, holding zero GHO and zero underlying with exposure caps of 0. Seizure is the GSM's terminal emergency action, and `seized = true` alongside `frozen = false` is the signature of a wind-down rather than a pause pending restart; neither module can swap GHO against USDC or USDT. That makes Curve's decision legible rather than assumed — with no functioning GSM there is no reliable arbitrage of sub-$1 GHO back toward par, so a PegKeeper accumulating GHO would have been holding something it could not exit. The reported trigger for the impairment is the April 2026 rsETH bridge exploit.

**What is still reported rather than read** is the Curve governance action itself: the Emergency DAO decision to zero the keeper, its date and ID, and the LlamaRisk proposal to drop GHO from crvUSD's aggregate monetary-policy pricing that reportedly passed unanimously. `gov.curve.finance` and `news.curve.finance` both return HTTP 403 to us — now reproduced from two separate environments, so it is a block on the forum rather than a local failure — and the governance thread on the GHO PegKeeper review (`/t/crvusd-gho-pegkeeper-review/11003`) remains unread. Two independently verified facts sit at either end of this chain, a dead GSM and a zero ceiling; the vote connecting them is the one link we still cannot check.

How the active keepers work:

- **Price > $1:** PegKeepers **mint crvUSD** and deposit into pools, adding supply to push price down
- **Price < $1:** PegKeepers **withdraw and burn** previously deposited crvUSD, removing supply to push price up
- **Asymmetric capacity:** Upside defense (minting) is unlimited up to the ceiling. Downside defense (burning) is capped by current PK debt — they can only burn what they previously minted.
- PK debt fluctuates constantly with market conditions. **Check the dashboard for current PK debt.**

PegKeeper crvUSD is protocol-minted and protocol-owned. It is not backed by collateral — it is implicitly backed by the counterpart stablecoins (USDC/USDT/frxUSD/PYUSD) in the pool. Over time, PK minting and burning should net to zero.

**⚠️ Monitoring note:** High PK debt = healthy downside buffer (more burn capacity). Zero PK debt = no downside defense available. PK debt relative to circulating supply indicates how actively the peg mechanism is working.

**⚠️ The entire burn buffer sits in one keeper (re-verified 2026-08-23).** PK activity was already concentrated in the **USDT keeper** through Q2 2026; it is not merely dominant but exclusive — the USDT keeper holds **98.60M crvUSD, 100% of all PegKeeper debt**, up from 33.75M on 2026-08-13. ⚠️ **Note the ceiling:** at 98.60M against a 135M cap, the single active keeper is now roughly 73% drawn, where it was about a quarter drawn ten days earlier. The USDC, PYUSD and frxUSD keepers are all at zero, and the GHO keeper is decommissioned.

Why that matters more than "concentration" usually does: downside defense is the asymmetric side of this mechanism. The other keepers can still *mint* against their ceilings, but a keeper with no debt has nothing to *burn*. So a USDT-specific disruption — a depeg, a freeze, a pool drain — would remove crvUSD's only active downside defense at exactly the moment it stressed the pool. The remaining keepers would be able to push the price down and not up.

Downside defense is still two-layered: (a) the USDT keeper's burn buffer, now **98.60M** (2026-08-23) against 33.75M ten days earlier — larger in absolute terms, though it is uncollateralized supply rather than reserves — and (b) the reserve-pool stables (USDC, USDT, frxUSD, PYUSD sitting opposite crvUSD across the active keeper pools) accessible via arbitrage. The reserve stables in aggregate still exceed the typical depeg event size for a token of this market cap — but the burn buffer, the faster and more reliable of the two, now has a single point of failure. **Check the dashboard for current per-keeper debt.**

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
| **Minting markets (CDP)** | Original mechanism | Users deposit collateral (WBTC, WETH, wstETH, etc.), mint crvUSD as debt. Over-collateralized. 8 markets deployed, of which **6 are active and 2 are winding down** (sfrxETH, LBTC — both at $0 debt ceiling, residual debt only). |
| **YieldBasis credit line** | Dominant source since Sep 2025 | $1B ceiling from ControllerFactory. YB factory (`0x370a...`) receives pre-minted crvUSD, deploys it into BTC/crvUSD Curve pools as users deposit BTC. Pre-minted balance includes idle buffer — actual deployment depends on BTC deposits. |
| **PegKeepers** | Peg defense | Four active keepers (crvUSD/USDC, crvUSD/USDT, crvUSD/frxUSD, pyUSD/crvUSD) mint crvUSD into stable pools when price > $1 and burn when price < $1; the GHO/crvUSD keeper is decommissioned at a 0 debt ceiling. **All current PK debt sits in the USDT keeper.** Protocol-owned, not collateral-backed. |
| **CurveLendOperator** | DAO-minted lending liquidity (Oct 2025) | Governance-approved operator (`0x21862...eCD`) receives debt ceiling from ControllerFactory and mints fresh crvUSD into specific LlamaLend vaults as protocol-owned liquidity. Tracks `mintedAmount` — **$15M minted as of 2026-07-28**, up from the original 5M sreUSD-market ceiling. This line has grown 3x and is no longer a rounding error. **Precedent-setting** — the DAO can create new operators to mint into any LlamaLend market. |

**LlamaLend and supply accounting:**

Standard LlamaLend markets (OneWayLendingFactory) accept user-deposited crvUSD — the factory itself has no minting authority. Only the CurveLendOperator (**$15M** as of 2026-07-28) mints fresh crvUSD into LlamaLend. The remaining ~$26M of LlamaLend debt is crvUSD that was originally minted elsewhere (CDP, YB, or PK), bought by users on DEXes, and then deposited into LlamaLend vaults as lending liquidity.

**Two supply definitions — do not mix them.** The distinction matters because one of them is the denominator of every collateral ratio we publish.

- **Issuance-side (authoritative here, and what the dashboard reports):**
  **`mint market debt + PK debt + YB AMM crvUSD + CurveLendOperator minted`**
  This counts each crvUSD token exactly once, at the point it was created. It is the only
  definition that can legitimately sit under a collateral ratio: CR compares collateral
  against the crvUSD that *exists*, not against how many times it was re-lent.
- **Deployment-based (DefiLlama):** substitutes *all* LlamaLend debt for the operator
  line, tracking where crvUSD is actively in use. This is a valid but **different and
  larger** number — the ~$26M of non-operator LlamaLend debt is crvUSD already counted
  once at its CDP/YB/PK origin and then counted again when a second borrower draws it
  from a lending vault. Useful as a utilization measure; **not comparable to backing**,
  and never to be used as a CR denominator.

Everything outside the operator line is therefore **recirculation**, not supply — the
dashboard breaks it out under that heading (LlamaLend borrowed, scrvUSD savings) precisely
so it can be seen without being added in.

Q2–Q3 2026: the issuance-side number ran in the mid $200Ms including PK debt, and reads **$300.5M at 2026-08-23**.

**The universal minting gate:** `set_debt_ceiling` on ControllerFactory is the only way to authorize new crvUSD creation. Any address that receives a ceiling can mint. The DAO controls who gets ceilings via governance votes. To monitor for new supply sources, enumerate all `set_debt_ceiling` events on ControllerFactory — this is the complete list of entities that can create crvUSD.

**What does NOT count as supply:**
- **scrvUSD vault:** Users deposit existing crvUSD to earn yield. Holds crvUSD, doesn't create it. **However** (V3, see §IV), YieldBasis HybridVaults now route about 55% of their TVL *into* scrvUSD as a stablecoin sleeve — this still doesn't create new crvUSD, but it makes scrvUSD a structural *destination* of crvUSD supply: a peg-defense buffer when calm, a crvUSD-outflow lever on mass V3 redemption. Tracked as a first-class line item on the dashboard.
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
| weETH | ETH LST | 2025 | ether.fi wrapped eETH — see the [weETH report](/reports/weeth/). Was an LRT when added; ether.fi removed restaking on 2026-08-06, moving it to the separate opt-in weETHs token. |
| LBTC | BTC | 2025 | Lombard BTC. **Wind-down** ($0 ceiling). |

**Structural trend:** CDP minting has declined from hundreds of millions to tens of millions in active debt, while YieldBasis has become the dominant supply source. BTC-denominated collateral (WBTC, tBTC, cbBTC) now dominates CDP markets by debt value. Check the dashboard for current per-market debt, CR, and utilization.

### Collateral Ratio

**Total crvUSD supply (issuance-side, the CR denominator)** = mint market debt + PK debt + YB AMM crvUSD + CurveLendOperator minted. This counts each token once at creation and matches the dashboard's methodology. Do not use `totalSupply()` (includes ceiling buffers) or StablecoinLens (misses YB and operators); CoinGecko's undocumented figure is a cross-check only, never a source.

Two coherent CR readings, both symmetric:

**Conservative CR (primary metric; 105–115% through Q2 2026, and **101.96% at 2026-08-23** — below that band):**
```
CR = (mint market collateral + YB pool BTC) / (mint debt + YB AMM crvUSD + operator-minted)
```
This drops PegKeeper-minted crvUSD from supply AND PegKeeper pool stables from collateral. The rationale: PK supply and the stables sitting opposite it in the pools are a paired position — in any depeg the PK withdraws crvUSD and consumes the paired stables together, so the conservative reading removes the pair from both sides rather than asymmetrically penalizing one. Treating PK supply as real debt while ignoring its paired stables (or vice versa) produces a metric that doesn't correspond to any realistic state.

**Inclusive CR (reference metric; 110–120% through Q2 2026, and **92.21% at 2026-08-23** — below par):**
```
CR = (mint market collateral + YB pool BTC + PK reserve pool stables) / (mint debt + PK debt + YB AMM crvUSD + operator-minted)
```
This is also symmetric, but in the opposite direction: PK debt enters supply and PK reserve pool stables (USDC/USDT/frxUSD/PYUSD sitting opposite PK crvUSD across the active keeper pools — the decommissioned GHO keeper holds no PK position on either side) enter collateral. Because PK debt and PK stables are similar in magnitude in steady state, conservative and inclusive CR sit within a few percentage points of each other — that proximity is the correctness signal that the two framings agree.

**What backs each supply source:**

| Supply Source | Collateral | CR Character |
|--------------|-----------|-------------|
| Mint markets (CDP) | BTC, ETH, LSTs at ~190% CR | Traditional overcollateralized CDP |
| YieldBasis | BTC side of 50/50 BTC/crvUSD pools (~100% CR) | Credit-line-backed, BTC-denominated |
| LlamaLend | Borrower collateral in lending vaults | Mix of user-deposited crvUSD (recirculated) and operator-minted (fresh). Collateral varies by market. |
| PegKeepers | None directly; USDC/USDT/frxUSD/PYUSD sit opposite in pools as paired counterparts (GHO no longer — that keeper is decommissioned) | Protocol-minted, reserve-pool-backed. Conservative CR drops both PK debt and PK stables; inclusive CR counts both. |

**Key monitoring metrics (check dashboard for live values):**
1. **Conservative CR** — the primary health indicator
2. **% of supply from YieldBasis** — concentration risk
3. **PK reserve pool sizes** — downside defense capacity (stables available to buy crvUSD dips)
4. **PK debt** — current burn capacity for downside peg defense

### Supply Measurement Problem

No single contract or API gives an accurate crvUSD supply:

| Metric | What It Shows | What It Misses |
|--------|--------------|----------------|
| `totalSupply()` | Mint *authorization* capacity (~$2.09B, 2026-07-28) | Meaningless as supply — includes all undeployed ceiling buffers |
| StablecoinLens `circulating_supply` | CDP debt + PK debt only ($69.95M, 2026-07-28) | YieldBasis and operator mints entirely. Predates YB, never updated. |
| CoinGecko | "circulating" ($212.5M, 2026-07-28) | Methodology undocumented. Cross-check only — never a source. Currently reads ~6.5% below our issuance-side figure; the gap is tracked in the dashboard's reconciliation block. |
| YB factory `balanceOf` | Pre-minted allocation | Doesn't distinguish deployed vs idle buffer |
| **Mint + PK + YB AMMs + operator minted** | **Authoritative issuance-side supply — the CR denominator** ($226.2M, 2026-07-28) | Requires querying multiple contracts — see dashboard |
| Mint + PK + YB AMMs + *all* LlamaLend debt | DefiLlama's deployment-based figure | Double-counts re-lent crvUSD. Utilization measure, not a backing denominator. |

All figures above are **Ethereum-scoped, and that is complete**: Ethereum is crvUSD's canonical chain, and every other deployment is lock-and-mint through the native L2 bridges or the LayerZero FastBridge. Cross-chain crvUSD was minted on Ethereum first and is already inside the issuance-side number — adding chain balances on top would double-count.

**⚠️ This opacity is itself a risk factor.** Unlike USDC (clear attestations) or DAI (Dai Stats dashboard), there is no authoritative crvUSD supply dashboard from Curve itself. Our [backing dashboard](https://tidresearch.com/dashboards/?asset=crvusd) attempts to fill this gap by querying on-chain primitives directly.

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

YieldBasis (YB) is a protocol by Michael Egorov designed to eliminate impermanent loss for AMM liquidity providers. Launched September 2025 on Curve infrastructure. Originally BTC-only; ETH/WETH markets have since been added.

### Mechanism (V1/V2)

1. User deposits collateral (WBTC, cbBTC, tBTC, or WETH)
2. YB draws from its pre-minted crvUSD allocation (matching the collateral value)
3. Both collateral + crvUSD enter a Curve pool as a 50/50 position
4. Continuous rebalancing maintains 2x leverage — user's share tracks the asset price 1:1 while earning trading fees
5. When users withdraw, the paired crvUSD returns to the YB factory as idle buffer

### V3 restructuring (live May 21, 2026)

YB V3 restructured the user product into per-user **HybridVaults**. Instead of a bare leveraged-LP position, each hybrid vault holds two sleeves: the **leveraged BTC/ETH LP sleeve** (the V1/V2 market above) *plus* a **crvUSD-vault sleeve — default about 55%** of vault value — deployed into **scrvUSD** so the stable half of the position earns the crvUSD savings rate rather than sitting idle. The YB UI lists each asset twice (a standard market and a "Hybrid" variant over the *same* underlying market); the Hybrid row is that same collateral pool wrapped with the added stable sleeve, not a separate pool.

Why this matters for crvUSD: every dollar of net-new V3 TVL routes ≈$0.55 into scrvUSD — i.e. into crvUSD held in the savings vault. This is a new, growing structural source of crvUSD demand living *inside* V3 — a peg-defense buffer when calm, but a crvUSD-outflow lever if V3 unwinds fast (mass redemption → scrvUSD redemption → crvUSD leaves the savings vault). The `stablecoin_fraction` (default 55%) is an ADMIN-settable lever. Aggregate scrvUSD parked through HybridVaults is tracked on the dashboard via the HybridVaultFactory's `crvusd_vault_total_required` reading.

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

The crvUSD FastBridge consists of **six LayerZero OApps** — three `VaultMessengerLZ` contracts on Ethereum (one per supported L2) and three `L2MessengerLZ` contracts on Arbitrum, Optimism, and Fraxtal. On-chain DVN-config audit (PegTracker `oft_audit.py`, 2026-04-25) confirms all configured pathways require **2 DVNs (LayerZero Labs + Google Cloud)**, point-to-point peer config, and consistent ownership through Curve's `OWNERSHIP_DAO`. **The bridge is not rsETH-shaped: zero exposed-and-peered pathways across all six OApps.** The April 19, 2026 manual pause was precautionary, not a response to a discovered DVN hole.

### Bridge contract topology

| Role | Chain | Address |
|---|---|---|
| `VaultMessengerLZ` (Arbitrum pathway) | Ethereum | `0x15945526b5C32D963391343e9Bc080838fe3e6d9` |
| `VaultMessengerLZ` (Optimism pathway) | Ethereum | `0x4A10d0FF9e394f3A3dCdb297973Db40Ce304b44f` |
| `VaultMessengerLZ` (Fraxtal pathway) | Ethereum | `0xEC0e1c5Cc900D87b1FA44584310C43f82F75870F` |
| `L2MessengerLZ` | Arbitrum | `0x14e11C1B8F04A7dE306a7B5bf21bbca0D5cF79ff` |
| `L2MessengerLZ` | Optimism | `0x7a1f2f99B65f6c3B2413648c86C0326CfF8D8837` |
| `L2MessengerLZ` | Fraxtal | `0x672C38258729060bF443BA28FaEF4F2db154C6fC` |

Sourced from the [`curvefi/fast-bridge`](https://github.com/curvefi/fast-bridge) deployment artifacts. Each verified as a proper LayerZero OApp (peers responding, delegate set to `OWNERSHIP_DAO`, ownership readable). Source-of-truth references: [Curve fast-bridge docs](https://docs.curve.finance/fast-bridge/overview/), [VaultMessengerLZ](https://docs.curve.finance/fast-bridge/VaultMessengerLZ/), [L2MessengerLZ](https://docs.curve.finance/fast-bridge/L2MessengerLZ/).

### Two bridges — slow vs fast

**Slow bridge — native L2 messaging.** For L2 deployments (Arbitrum, Optimism, Fraxtal), Curve uses each chain's canonical native bridge:

- L2 → Ethereum: standard L2 native withdrawal periods (~1 week for Arbitrum)
- Ethereum → L2: fast deposit (minutes)
- Trust assumption: Ethereum security + the L2's native bridge architecture
- No third-party verifiers; same trust model as bridging USDC or any other ERC-20 via canonical L2 bridges

**Fast bridge — LayerZero OApp.** Used for L2 fast paths and for the L1 deployments (BSC, Avalanche, Fantom, Etherlink) where native L2 messaging doesn't apply:

- Trust assumption: LayerZero infrastructure (Endpoint, MessageLibrary), 2 DVNs per peered pathway (LayerZero Labs + Google Cloud), and Curve's messenger contracts
- Audited 2026-04-25: DVN config clean, all peered pathways pass the rsETH-class check (see audit findings below)

### Bridge audit findings (2026-04-25)

| Layer | Status |
|---|---|
| 1. DVN count per peered pathway | ✓ Checked — 2 DVNs minimum on all six OApps |
| 2. DVN identity / collusion | ✓ Checked — no single-operator pathways; LayerZero Labs + Google Cloud (independent operators) |
| 3. MessageLibrary version | ✓ Checked — all default UlnV302 |
| 4. Peer configuration | ✓ Checked — point-to-point, exactly one peer per messenger contract |
| 5. OApp pause / kill switch | ⚠ Gap — messenger contracts don't expose `paused()` directly; emergency pause routes through `FastBridgeVault` per `EMERGENCY_DAO`. Curve's April 19 manual pause is documented and the architecture supports it. |
| 6. Endpoint trust | ✓ Checked — owner readable, delegate set to `OWNERSHIP_DAO` |
| 7. OApp admin / governance | ⚠ Partial — owner resolved as Curve's `OWNERSHIP_DAO` (`0x40907540d8a6C65c637785e8f8B742ae6b0b9968`), a Vyper admin contract rather than a Gnosis Safe. Governance-path detail (signers, threshold, voting parameters) requires a Vyper-aware reader and is unaudited here. |

**Out-of-scope gaps** consistent across any LayerZero OApp audit:

- DVN RPC infrastructure (off-chain operator detail; vendor cooperation required)
- Formal adapter contract audit coverage (per-protocol manual review)
- Real-world signer identity at the governance layer (not on-chain)
- Per-pathway rate limits (non-standardized; not exposed by the messenger contracts)

A note on the "exposed pathways" picture: 8–11 EXPOSED rows show up per-OApp on the Blockaid-style read, but **all are LayerZero defaults for unpeered EIDs** (Sei, Shimmer, Bitlayer, Blast, Etherlink, Katana, Monad, etc.). Forged messages from those chains hit a zero-peer check at the OApp layer and are rejected before DVN config matters. Layer-4 peer-config readability is what lets us draw this distinction — the original rsETH-style DVN-only audit could not.

### One configuration footnote — Fraxtal burn-address DVN

Fraxtal's `L2MessengerLZ` has its inbound-from-Ethereum DVN configured as a single DVN at `0x000000000000000000000000000000000000dEaD` — the burn address. Effect: Ethereum → Fraxtal control messages cannot verify and cannot deliver. **Not exploitable today** — nothing passes the verification, including attackers. **Becomes a 1-DVN hole** if LayerZero ever updates the Fraxtal default to a real single DVN. Independent of the April 19 LayerZero pause; worth flagging to Curve as a defense-in-depth cleanup item.

### Curve's response to rsETH (April 19, 2026)

Curve paused the LayerZero fast bridge — affecting CRV transfers from BSC, Sonic, and Avalanche, and crvUSD fast bridging across all LayerZero-supported chains. **The L2 slow bridge remained operational throughout.** This was a precautionary measure during root-cause investigation, not a confirmed exploit of Curve's bridge — and the on-chain audit (above) confirms there was no exploitable DVN-config hole to find.

**Operational signal:** Curve's response demonstrated active monitoring and a credible pause mechanism. Holders relying on the slow bridge were unaffected. This is a positive operational observation: an LP-led precautionary pause in the same architectural class within 24 hours of the rsETH disclosure.

**Status as of report date:** Verify current pause status before initiating any LayerZero-routed bridge transaction. Pause/unpause status varies as Curve completes its investigation.

### Practical guidance for cross-chain crvUSD users

- **Both bridges are audited as clean.** Slow bridge inherits Ethereum's native security; fast bridge is multi-DVN via LayerZero Labs + Google Cloud, audit-verified 2026-04-25.
- **For larger sizes, the slow bridge is still architecturally simpler** — fewer trust assumptions to evaluate per cycle. But the fast bridge is no longer "unaudited surface" the way it was before today's audit.
- **L1 deployments (BSC, Avalanche, Fantom, Etherlink) only have the LayerZero fast bridge available** — slow-bridge fallback doesn't exist for non-EVM-rollup L1s. These chains carry unavoidable LayerZero dependency.
- **Verify the fast bridge is currently active** before transacting (post-rsETH pause status varies).

### Cross-chain dependency summary for portfolio construction

| Chain | crvUSD bridge model | Bridge-class trust assumption |
|---|---|---|
| Ethereum | Canonical (no bridge) | Curve smart contracts |
| Arbitrum, Optimism, Fraxtal | Slow (native L2) + Fast (LayerZero, audited 2026-04-25) | L2 native bridge OR LayerZero (user choice) |
| BSC, Avalanche, Fantom, Etherlink | Fast only (LayerZero, audited 2026-04-25) | LayerZero (no fallback) |

Note that crvUSD on a non-canonical chain inherits its bridge's security model on top of crvUSD's own protocol risks. For users sizing on Ethereum, none of this section applies; for users sizing elsewhere, the bridge-layer exposure is real but verified clean (with the Fraxtal footnote above) as of 2026-04-25.

---

## Scoring Rationale

| Category | Score | Notes |
|----------|-------|-------|
| Peg Mechanism | 6.0 | LLAMMA + PegKeepers + monetary policy is a sophisticated system with a $0.9997 average peg, and TID PegTracker (2,985 hourly samples) confirms a median −9 bps deviation from $1.00 — at the top end of decentralized stables, tighter than thBILL by ~3× and only marginally looser than OUSD. YieldBasis flows did increase peg volatility 66% in mean absolute deviation post-Sep-2025 launch, and rate swings between 0% and 12%+ remain a structural feature, but elevated volatility hasn't broken the peg through Q2 2026. PK downside defense capacity fluctuates with deployment — depleted PK debt means no active burn buffer, while concentrated deployment (as currently sits in the USDT keeper) exposes the protocol to that pool's liquidity if a depeg arrives — but the realized tightness through the YB era carries the score. |
| Backing | **4.5** | **Cut from 5.0 on 2026-08-23 — a finding, not a recalibration: these are dated moves since 2026-08-13.** Blended system: CDP markets at ~190% CR (small), YB pools at ~100% CR (BTC-backed), PK supply paired against reserve pool stables. ⚠️ **PegKeeper debt tripled $33.75M → $98.60M in ten days and is now 32.8% of supply**, so roughly a third of crvUSD is protocol-minted and uncollateralized, against about a tenth when this axis was last set. Conservative CR is **101.96%**, below the 105–115% band published here; inclusive CR is **92.21%**, below par and below its 110–120% band. ⚠️ **And this rationale's own reasoning has broken:** it held that the two CR readings stay within a few points of each other because PK debt and PK stables are similar in magnitude — PK stables are **$71.24M against $98.60M of debt**, a $27.35M gap, and the two readings are now about ten points apart. Supply measurement still requires querying multiple contracts, with no single authoritative source. |
| Liquidity | 6.0 | Deep Curve pool liquidity, strong DEX integration. YB pools add significant depth but also directional flow risk proportional to BTC volatility. PK pools (USDC, USDT, frxUSD as the heavyweights, plus PYUSD) provide additional stablecoin liquidity, and the GHO/crvUSD pool still adds DEX depth even though its keeper no longer backstops the peg; the USDT pool is the largest by reserves and holds all current PK debt. |
| Issuer | 6.0 | Curve is one of DeFi's most established protocols (10+ audit firms, $2B+ TVL history). CRV tokenomics add governance complexity. Egorov's dual Curve/YB role creates concentrated influence over crvUSD's supply architecture. |
| **Overall** | **4.5** | **Cut from 5.0 on 2026-08-23, following Backing.** This composite tracks its weakest axis — it sat at 5.0 when Backing was 5.0 and every other axis was 6.0 — and Backing is again the floor at 4.5. The peg, liquidity and issuer axes are untouched: crvUSD traded at $1.0009 through this, and the PegKeeper expansion *is* the peg mechanism working. **Elevated risk — well-engineered stablecoin with strong peg mechanics and deep liquidity, but structurally dependent on YieldBasis for supply and volume. The supply architecture is opaque (no authoritative circulating supply metric, unknown YB deployed-vs-idle split, outdated StablecoinLens). CDP minting is structurally small. BTC correlation via YB rebalancing and rate instability are ongoing concerns.** |

## Comparison vs Other Stablecoins in Portfolio

| Factor | crvUSD | USDC | eUSD | USD3 | msUSD |
|--------|--------|------|------|------|-------|
| Type | Algo (LLAMMA) + YB credit line | Fiat-backed | RToken basket | RToken basket | Main Street Finance |
| Circulating | low $200Ms (Q2 2026 range) | $40B+ | $22M | $7–50M | $15–29M |
| Liquidity | Deep (Curve native + YB pools) | Deep | Thin pool, ok aggregated | Moderate | Thin |
| Backing | CDP + YB credit line + PK (opaque mix) | USD reserves (attested) | Yield-bearing stables → RLUSD | 4-asset DeFi basket | Options arbitrage |
| Supply transparency | Poor (no authoritative metric) | Strong (attestations) | Moderate (on-chain basket) | Moderate | Poor |
| Key risk | YB dominance + BTC correlation | Centralized | RLUSD concentration | Basket complexity | Opacity |
| Audits | 10+ firms (Curve) | Regulated, attested | 7 firms (Reserve) | Reserve Protocol | Unknown |
| Score | **5.0** | **9.0** | **6.0** | **7.0** | **5.0** |

## Recommendations

### Supply & Collateral Monitoring
1. **Track conservative CR** — symmetric: (mint markets + YB pool BTC) / (mint debt + YB + operator), dropping PK debt and PK stables from both sides. Primary health indicator. Cross-check against inclusive CR (PK in both); the two should sit within a few points of each other.
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

- **Live dashboard:** [tidresearch.com/dashboards/?asset=crvusd](https://tidresearch.com/dashboards/?asset=crvusd) — hourly on-chain supply, per-market CR, PK debt, YB utilization
- **On-chain contracts:** ControllerFactory, Controllers, LLAMMA AMMs, PegKeepers, AggMonetaryPolicy, OneWayLendingFactory, YB Factory (`0x370a...`)
- **LlamaRisk API:** `https://api.llamarisk.com/protocols/curve/graphql/` — market health scores, unhealthy user positions, soft-liquidation data
- **LlamaRisk Portal:** [portal.llamarisk.com/curve/markets](https://portal.llamarisk.com/curve/markets) — 7-factor market health scores
- **Cross-checks:** CoinGecko (circulating), DefiLlama (TVL), Curve Monitor (curvemonitor.com)

## Bottom Line

crvUSD is a well-engineered stablecoin with one of the tightest pegs among decentralized alternatives ($0.9997 average) and deep native Curve liquidity. The LLAMMA soft-liquidation mechanism and PegKeeper system are genuinely innovative. However, the September 2025 launch of YieldBasis fundamentally changed crvUSD's character. YB now dominates crvUSD's supply infrastructure (largest pre-minted allocation from a $1B ceiling) and volume dynamics (>36% of all crvUSD volume). Traditional CDP minting has declined to tens of millions while YB's allocation is hundreds of millions. The exact composition of circulating supply is opaque — StablecoinLens is outdated, CoinGecko's methodology is unknown, and the split between YB pool-deployed and idle crvUSD is not tracked. The 5.0/10 score reflects strong engineering weighed against structural YB dependency, BTC correlation exposure, rate instability, and supply opacity.

---

*Revision history: 2026-08-23 — **Backing 5.0 → 4.5, Overall 5.0 → 4.5. A finding, not a recalibration:** every figure below is a dated move since 2026-08-13. **PegKeeper debt tripled, $33.75M → $98.60M in ten days, and now stands at 32.8% of supply.** This report states elsewhere that PegKeeper crvUSD is protocol-minted, protocol-owned and **not backed by collateral** — so **roughly a third of crvUSD is now uncollateralized supply, against about a tenth when the axis was last set** — and the implicit backing has not kept pace: PK pool stables **$71.24M against $98.60M of debt, a $27.35M gap**. ⚠️ **Explicitly not a depeg.** PegKeeper minting *is* the peg mechanism operating as designed; crvUSD traded at **$1.0009**, the minting market's CR is 230.7%, and the $98.6M of burn capacity is real. **The change is compositional — the peg is being defended by expanding uncollateralized supply, at three times the described scale.** Peg, liquidity and issuer axes are untouched; Overall follows Backing because this composite tracks its weakest axis. ⚠️ **Every durable range in the operating-regime paragraph was breached inside ten days**, three of them downward: supply mid-$200Ms → **$300.5M**; conservative CR 105–115% → **101.96%**; inclusive CR 110–120% → **92.21%, below par**; and YieldBasis share 60–80% "trending toward the 80% danger line" → **47.1%, moving the opposite way to the trend this report called.** **The Backing rationale's own reasoning also broke** — it held that the two CR readings stay within a few points of each other because PK debt and PK stables are similar in magnitude; they are now about ten points apart. **A definitional control, stated rather than assumed:** supply here is `total_supply` at $300.5M, **not** `totalSupply()` at $2,104.8M, which carries pre-minted ceiling buffer this report warns about; every ratio uses the former. ⚠️ **And a disclosure this report owes its readers rather than a judgement it makes:** our feed records a **CR basis change on 2026-08-18**, five days after the previous verification. The headline 101.96% is the **deployed** basis; the same book on the **minted** basis reads **99.17%, below par**. A reader comparing this report's published band against the live dashboard is comparing across a definitional change nobody disclosed. **This report takes no view on which basis is correct** — that belongs to the monitoring side — but the two numbers should not be meetable without being told they are measured differently. ⚠️ **One lesson about this report's own format.** It publishes **durable ranges rather than point-in-time anchors**, deliberately and correctly, so that daily movement does not make it stale. But **a stale point figure looks stale beside a live value, whereas a breached range still reads as authoritative — because a range implies it has already accounted for movement** — and no drift check can compare a live number against "105–115%". Four ranges breached in ten days. **A range needs a re-check date the way a point figure needs its date**, and these are now dated 2026-08-23. `last_verified` **is** bumped: supply, collateral ratios, PegKeeper debt and pool stables were all re-read. 2026-08-13 (later same day) — verified on-chain that both mainnet Aave GHO Stability Modules are seized (zero GHO, zero underlying, exposure cap 0, `frozen = false`), promoting the GSM impairment behind the GHO keeper's retirement from reported to verified. The Curve Emergency DAO vote, its date and ID, and the LlamaRisk monetary-policy proposal remain unread — the Curve forum returns HTTP 403 from two separate environments. No conclusions or scores changed. 2026-08-13 — PegKeeper set re-read on-chain from the PegKeeperRegulator and `ControllerFactory.debt_ceiling()`. The GHO/crvUSD keeper is corrected from active to **decommissioned** (debt ceiling 0, no debt); its Curve pool still provides DEX depth but no peg defense. Added the verified finding that the USDT keeper now holds **100% of PegKeeper debt** (33.75M), making it a single point of failure for downside defense. weETH reclassified from ETH LRT to ETH LST in the collateral table following ether.fi's 2026-08-06 restaking removal. Scores unchanged at 5.0. 2026-07-28 — supply reconciliation and YieldBasis dependency refresh.*
