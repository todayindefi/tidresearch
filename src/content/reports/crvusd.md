---
asset: "crvUSD"
slug: "crvusd"
aliases: ["crvUSD", "CRVUSD"]
chains: ["eth", "arb", "op", "fraxtal", "bsc", "avax", "fantom"]
category: "stablecoin"
peg_mechanism: "algorithmic"
assessment_type: "full"
date: "2026-03-28"
# ⚠️ HOLDS at 2026-08-23. The 2026-09-08 pass re-derived the Backing axis from
# the PegKeeper daily series and nothing else — the peg mechanism, liquidity and
# issuer work were not re-read. Bumping it would claim a full re-verification
# that did not happen and would reset the 90-day staleness budget.
last_verified: "2026-08-23"
last_revised: "2026-09-08"
peg_mechanism_score: 6.0
backing_score: 5.0
liquidity_score: 6.0
issuer_score: 6.0
overall_score: 5.0
underlying_score: 4.5
structural_score: 5.5
axis_frame: six
issuer: "Curve Finance"
market_cap_approx: 225000000
production: true
---# crvUSD — Risk Report

**Category:** Stablecoin | **Peg Mechanism:** Algorithmic (LLAMMA + PegKeepers) | **Issuer:** Curve Finance

**Live data:** [crvUSD Backing Dashboard](https://tidresearch.com/dashboards/?asset=crvusd) — hourly on-chain supply, collateral, PegKeeper debt, and YieldBasis utilization.

## Summary

crvUSD is Curve Finance's native stablecoin, launched May 14, 2023. Users mint crvUSD by depositing crypto collateral into specialized lending markets. The core innovation is LLAMMA (Lending-Liquidating AMM Algorithm), which replaces traditional discrete liquidations with continuous, gradual soft-liquidation via a band-based AMM. Peg stability is maintained by PegKeepers (automated minting/burning into stablecoin pools) and a variable-rate monetary policy.

crvUSD's supply architecture is complex and often misunderstood. There is no single authoritative "circulating supply" number:

- **`totalSupply()`** returns ~$2B+ but includes pre-minted ceiling buffers — **not a meaningful metric**.
- **StablecoinLens** only tracks original minting market (CDP) debt + PegKeeper debt. It does **not** include YieldBasis. It predates YB and was never updated.
- **CoinGecko** reports a "circulating" figure (low $200Ms range) via an unknown methodology (not StablecoinLens).
- **YieldBasis factory** holds hundreds of millions in pre-minted crvUSD, but this includes idle buffer alongside actually-deployed pool liquidity. The split is opaque.

All crvUSD is minted through a single contract: the ControllerFactory (`0xC9332fdCB1C491Dcc683bAe86Fe3cb70360738BC`).

---

## Score breakdown

| Category | Score | Notes |
|----------|-------|-------|
| Peg Mechanism | 6.0 | LLAMMA + PegKeepers + monetary policy is a sophisticated system with a $0.9997 average peg, and TID PegTracker (2,985 hourly samples) confirms a median −9 bps deviation from $1.00 — at the top end of decentralized stables, tighter than thBILL by ~3× and only marginally looser than OUSD. YieldBasis flows did increase peg volatility 66% in mean absolute deviation post-Sep-2025 launch, and rate swings between 0% and 12%+ remain a structural feature, but elevated volatility hasn't broken the peg through Q2 2026. PK downside defense capacity fluctuates with deployment — depleted PK debt means no active burn buffer, while concentrated deployment (as currently sits in the USDT keeper) exposes the protocol to that pool's liquidity if a depeg arrives — but the realized tightness through the YB era carries the score. |
| Backing | **5.0** | **Set on a level rather than a snapshot, because a single reading was measured at the peak of a four-day transient.** PegKeeper debt ran 14.07% → 34.56% → 14.0% of supply between 08-19 and 09-07 while **the peg never deviated more than 0.049% from par** — keepers absorbing pool imbalance, not a solvency event. Blended system: CDP markets at high CR (small), YB pools near 100% CR (BTC-backed), and a PegKeeper leg that is uncollateralized by construction and currently **14.0% of supply**. ⚠️ **The trigger for the next cut is a LEVEL, not a reading: below 5.0 only if the ratio holds above 25% for more than five consecutive daily readings.** The August episode lasted four and would deliberately not have fired — a four-day excursion with the peg at par is the mechanism working, and a rule that fired on it would re-make this mistake |
| Liquidity | 6.0 | Deep Curve pool liquidity, strong DEX integration. YB pools add significant depth but also directional flow risk proportional to BTC volatility. PK pools (USDC, USDT, frxUSD as the heavyweights, plus PYUSD) provide additional stablecoin liquidity, and the GHO/crvUSD pool still adds DEX depth even though its keeper no longer backstops the peg; the USDT pool is the largest by reserves and holds all current PK debt. |
| Issuer | 6.0 | Curve is one of DeFi's most established protocols (10+ audit firms, $2B+ TVL history). CRV tokenomics add governance complexity. Egorov's dual Curve/YB role creates concentrated influence over crvUSD's supply architecture. |
| Dependencies | **4.5** | **YieldBasis holds a $1B line, 100% drawn — roughly 47.5% of all crvUSD minted to one counterparty.** ⚠️ **The idle $669.3M is allocated by YieldBasis's own DAO, which Curve cannot direct**, and that DAO's seven-day duration is **early execution** rather than a delay. ✅ **But Curve's 5-of-9 emergency Safe is also the YieldBasis factory's `emergency_admin`, so it can kill the market immediately.** Expansion is slow and public; contraction is fast. Argued under [4 · Dependencies](#4--dependencies--45) |
| Contract & Admin | **5.5** | ✅ **The token cannot be replaced** — 3,572 bytes of Vyper with all three EIP-1967 slots reading zero, re-verified 2026-09-09. **Mint capacity moves through a Curve DAO vote, not a key.** ⚠️ **Docked for the 5-of-9 emergency Safe, which carries no execution delay, and for the bridged legs, which answer to each chain's own operators rather than to Curve.** Argued in full under [5 · Contract & Admin](#5--contract--admin--55) |
| **Overall** | **5.0** | **This composite tracks its weakest axis, and the axis that pulled it down was measured at the peak of a four-day PegKeeper excursion rather than at a level. With Backing back at 5.0 the composite follows it. ⚠️ **What has not changed is the structure:** the PegKeeper leg is uncollateralized by construction, and a sustained rise in its share of supply is still the thing that would cut this — on the level trigger recorded above, not on a single reading |

## 1 · Stability — 6.0


✅ **The peg did not move while that happened, which is what says the mechanism was working rather than failing.** Across the entire excursion crvUSD never deviated more than **0.049%** from par — 0.99999, 0.99993 and 0.99991 on 08-21, 08-22 and 08-23, at the very moment PegKeeper debt tripled. **Keepers absorbing pool imbalance is what this looks like from the outside; a solvency event looks nothing like it.** The implicit backing tracks the same way: `PegKeeper debt − pool stables` was **+$32.80M** at the peak and **−$2.58M** on 2026-09-07, and it read **−$6.65M** on 08-19 — it oscillates around zero as a matter of course rather than widening.

**How the peg is defended, and how well it has held.**

### LLAMMA Mechanism

#### How Bands Work

When opening a crvUSD loan, the borrower selects between **4 and 50 bands** — narrow price intervals across which their collateral is distributed equally. Together, all bands define the borrower's liquidation range.

- More bands = wider liquidation range = smoother, more gradual liquidation with lower losses
- Positions with 50 bands have remained in soft liquidation for months while losing only a small percentage of health
- Fewer bands = tighter range = more aggressive conversion but concentrated loss

#### Soft Liquidation vs Hard Liquidation

**Soft liquidation:** When the collateral price enters a band, the LLAMMA AMM progressively converts collateral → crvUSD. If the price recovers, the reverse happens — crvUSD repurchases collateral. This is continuous and automatic, not a discrete event. Losses accumulate in both directions while inside the range due to rebalancing fees, slippage, and price movement.

**Hard liquidation:** Only triggered when health reaches **0%** (not simply when price hits the bottom of the range). Any external user can repay the debt and claim remaining collateral at a discount. The borrower loses collateral but keeps their borrowed crvUSD.

Key loss factors during soft liquidation: band count (more = less loss), market volatility (sudden moves are worse), and liquidity depth within the AMM.

#### Architecture Components

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

### Peg Maintenance

#### PegKeeper System

PegKeepers are Curve's AMO (Algorithmic Market Operations) — automated contracts that stabilize crvUSD's peg through Curve stablecoin pools. Read on-chain 2026-08-13 from the PegKeeperRegulator (`0x36a04CAffc681fa179558B2Aaba30395CDdd855f`) plus `ControllerFactory.debt_ceiling()`:

| Keeper | Pool | PK debt | Debt ceiling | Status |
|---|---|---:|---:|---|
| `0x9201da…E340` | USDC/crvUSD | 0 | 135M | Active, idle |
| `0xFb726F…F9F3` | USDT/crvUSD | **36.98M** (2026-09-07; peaked at 98.60M on 08-24) | 135M | **Active — holds all current PK debt** |
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

Downside defense is still two-layered: (a) the USDT keeper's burn buffer, **36.98M** at 2026-09-07 after peaking near 98.60M during the August excursion — real deployable capacity, though it is uncollateralized supply rather than reserves — and (b) the reserve-pool stables (USDC, USDT, frxUSD, PYUSD sitting opposite crvUSD across the active keeper pools) accessible via arbitrage. The reserve stables in aggregate still exceed the typical depeg event size for a token of this market cap — but the burn buffer, the faster and more reliable of the two, now has a single point of failure. **Check the dashboard for current per-keeper debt.**

#### Monetary Policy

The monetary policy contract (AggMonetaryPolicy) functions as a system-wide algorithmic rate controller with three inputs:

1. **Target rate (rate0):** Baseline rate when crvUSD = $1 and no PK debt exists
2. **Price oracle:** Measures deviation from $1 peg
3. **PegKeeper debt share:** Proportion of PK debt vs total crvUSD debt

The rate is uniform across all minting markets (not per-market). Higher rates encourage borrowers to repay (bullish for peg); lower rates incentivize new borrowing.

**Structural issue:** YieldBasis's large credit line has caused rate volatility — rates spike above 12% and drop near 0% driven by YB's BTC rebalancing flows rather than organic lending market dynamics. Two monetary policy reform proposals (LlamaRisk Target Fraction adjustment, Egorov 3-week EMA smoothing) aim to address this.

#### Peg Performance

Average peg of **$0.9997** — one of the tightest for a decentralized stablecoin. Peg volatility increased **66% in mean absolute deviation** after YieldBasis launched (Sep 2025), though the average peg stayed above $0.9997.

**TID PegTracker** (2,985 hourly samples, multi-DEX): avg **−13 bps**, median **−9 bps** from $1.00. Tighter than thBILL (median −32 bps) by ~3×, slightly looser than OUSD (median −6 bps) — reflecting the trade-off between algorithmic complexity (LLAMMA + PegKeepers + YB-induced rate volatility) and OUSD's simpler USDC-redemption model.

---

## 2 · Backing — 5.0


**Current operating regime, measured 2026-08-23 unless dated otherwise.**

| | measured |
|---|---|
| Total supply | **$300.5M** |
| Conservative CR (symmetric) | **101.96%** |
| Inclusive CR | **92.21%** — below par |
| YieldBasis share | **47.1%** |
| PegKeeper debt | **$36.98M — 14.0% of supply** (2026-09-07) |

⚠️ **These are point measurements on a system that moves daily**, and the [dashboard](https://tidresearch.com/dashboards/?asset=crvusd) is the source of truth between passes.

**PegKeeper debt is the number to watch here, and the way to read it is as a level rather than a snapshot.** PegKeeper crvUSD is protocol-minted and protocol-owned, and **it is not backed by collateral** — so the share of supply it represents is the share that is uncollateralized. **Measured 2026-09-07 it is $36.98M against $263.29M of supply — 14.0%**, and it has held between 13.9% and 16.7% for the ten days to that date.

⚠️ **It does not sit still, and a single reading of it is not a state.** Between 2026-08-19 and 2026-08-24 the ratio ran **14.07% → 20.35% → 32.72% → 34.56%**, then decayed back through 23.68% and 15.68% to the level above. **A reading taken on 08-24 would have described a third of supply as uncollateralized; three days before the spike it was 14.07%, and three days after the peak it was on its way back there.**

⚠️ **This is not a depeg and should not be read as one.** PegKeeper minting *is* the peg mechanism functioning as designed — keepers mint into pools above a dollar and burn below. crvUSD trades at **$1.0009**, the minting market's collateral ratio is **230.7%**, and the $98.6M of burn capacity is real, deployable defence. **What changed is composition, not solvency:** the peg is being defended by expanding uncollateralized supply, at three times the scale this report described.

**A definitional note, because this report warns about it and it would silently corrupt every figure above.** The supply figure used here is **`total_supply` at $300.5M, not `totalSupply()` at $2,104.8M** — the latter includes pre-minted ceiling buffer that was never issued. Every ratio on this page uses the former.

⚠️ **And the headline collateral ratio now rests on a basis this coverage changed after publication.** Our feed records a CR basis change on **2026-08-18**, five days after this report was last verified. The 101.96% above is the **deployed** basis; on the **minted** basis the same book reads **99.17% — below par**. A reader comparing this report's 105–115% against the live dashboard is therefore comparing across a definitional change that was never disclosed. **This report takes no view on which basis is correct** — that is a question for the monitoring side — but it should not be possible to meet the two numbers without being told they are not measured the same way.

PegKeeper debt remains entirely in the USDT keeper; the GHO keeper is decommissioned at a 0 ceiling. **Numbers move daily — the dashboard is the source of truth**, and the ranges above are re-checked as of 2026-08-23 rather than assumed to outlive the interval between passes.

**What creates crvUSD, and what stands behind each source.**

### Supply Architecture

#### Sources of crvUSD (what creates new supply)

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
- **scrvUSD vault:** Users deposit existing crvUSD to earn yield. Holds crvUSD, doesn't create it. **However** (V3, see §IV), YieldBasis HybridVaults route **45%** of their TVL *into* scrvUSD as a stablecoin sleeve (`stablecoin_fraction()` on HybridVaultFactory `0xBdC32268…dC5b`, read 2026-09-09) — this still doesn't create new crvUSD, but it makes scrvUSD a structural *destination* of crvUSD supply: a peg-defense buffer when calm, a crvUSD-outflow lever on mass V3 redemption. Tracked as a first-class line item on the dashboard.
- **DEX trading / wallet transfers:** Moves crvUSD, doesn't create it.
- **YB factory idle buffer:** Pre-minted but not deployed — excluded from supply (only YB AMM pool balances count).

#### Supported Collateral Types (Minting Markets)

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

#### Collateral Ratio

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

#### Supply Measurement Problem

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

#### Historical Evolution

1. **May 2023:** Launched with sfrxETH as sole collateral
2. **Mid-2023:** Added wstETH, WBTC, WETH, tBTC
3. **2024:** Matured with 150M debt ceiling for wstETH; sfrxETH v1 phased out for v2
4. **2025:** Added cbBTC, weETH, LBTC; supply grew 3x from <$100M to >$361M (ATH)
5. **Sep 2025:** YieldBasis launched — 60M → 300M → $1B credit line, fundamentally changing supply dynamics
6. **2025–2026:** CDP minting declined to tens of millions while YB became dominant supply source

---

## 3 · Liquidity & Exit — 6.0

**crvUSD's exit is its strongest practical feature and it is native rather than borrowed.** Curve's own pools give it deep on-chain depth, and three distinct pool families contribute: the **PegKeeper pools** (USDC, USDT and frxUSD as the heavyweights, plus PYUSD), the **YieldBasis BTC pools**, and the **GHO/crvUSD pool** — which still adds DEX depth even though its keeper no longer backstops the peg, a distinction worth keeping separate because a decommissioned keeper is not a drained pool.

⚠️ **The YieldBasis pools cut both ways on this axis.** They add significant depth, and that depth is **directionally correlated with BTC volatility** — the flow that would test an exit is the same flow that thins those pools. ✅ **The USDT PegKeeper pool is the largest by reserves and is the practical backstop**, which is also why its concentration is a Backing concern above rather than a Liquidity one here.

**6.0 rather than higher** because depth is concentrated in pools the protocol itself seeded, and **rather than lower** because that depth is real, on-chain and measurable today.

## 4 · Dependencies — 4.5

**crvUSD's largest dependency is a single counterparty, and the size of it is the finding.** YieldBasis holds a **$1,000,000,000 credit line that is 100% drawn** — **$669.3M idle and $330.8M deployed** — against a **$2.105B** total supply and a **$76.8M** CDP book. ⚠️ **One counterparty has been minted roughly 47.5% of all crvUSD in existence.**

⚠️ **The idle $669.3M is allocated by YieldBasis's own governance, and Curve cannot direct it.** The allocation authority sits with YieldBasis's Aragon OSx DAO rather than the Curve DAO, and the Curve Ownership Agent's permission over that DAO is **measured as absent rather than assumed**.

✅ **But Curve can stop the market, and that is a different power from directing it.** **The YieldBasis factory's `emergency_admin()` is `0x467947ee…1e0c` — the very same 5-of-9 Safe that is crvUSD's own emergency admin**, verified on-chain with the factory's `admin()` answering in the same pass. **Curve's emergency Safe can kill a YieldBasis market and force emergency withdrawal**, through the leveraged-token and gauge logic that gates on that address. ⚠️ **The factory itself only stores and sets the address; the enforcement sits one layer down in the market contracts**, so the reach is specific rather than general — it is a stop, not a steering wheel.

**So the asymmetry runs in both directions.** ⚠️ **Curve cannot say where the money goes**, and ✅ **it can shut the position down immediately, with no delay, by two independent levers** — `reduce_debt_ceiling`, which is one-way, and the kill path above. **The exposure is 47.5% of supply either way; the containment is better than the allocation picture alone suggests.**

⚠️ **That DAO's seven-day voting duration is not a delay, and the distinction matters more than the number.** Its voting mode is **early execution**: a proposal clearing **55% support at 30% participation executes immediately**, before the seven days elapse. ✅ **"Seven-day governance" would be a true sentence and a misleading one** — the duration is a ceiling on how long a vote may take, not a floor on how fast it can act. **The minimum proposing power is one token.**

✅ **What holds this at 4.5 rather than lower is that every contraction lever is fast while every expansion lever is slow.** Expanding the line requires a **7-day Curve DAO vote with a genuine floor**; `reduce_debt_ceiling` is **one-way and immediate** for the 5-of-9 emergency Safe. **Expansion is slow and public; contraction is fast.** ⚠️ **Two items remain unscored — the stablecoin fraction and the unwind path — and both can only move this axis down.**

**The two dependencies this axis is scored on are set out below.**

### YieldBasis Dependency (KEY RISK)

#### What is YieldBasis?

YieldBasis (YB) is a protocol by Michael Egorov designed to eliminate impermanent loss for AMM liquidity providers. Launched September 2025 on Curve infrastructure. Originally BTC-only; ETH/WETH markets have since been added.

#### Mechanism (V1/V2)

1. User deposits collateral (WBTC, cbBTC, tBTC, or WETH)
2. YB draws from its pre-minted crvUSD allocation (matching the collateral value)
3. Both collateral + crvUSD enter a Curve pool as a 50/50 position
4. Continuous rebalancing maintains 2x leverage — user's share tracks the asset price 1:1 while earning trading fees
5. When users withdraw, the paired crvUSD returns to the YB factory as idle buffer

#### V3 restructuring (live May 21, 2026)

YB V3 restructured the user product into per-user **HybridVaults**. Instead of a bare leveraged-LP position, each hybrid vault holds two sleeves: the **leveraged BTC/ETH LP sleeve** (the V1/V2 market above) *plus* a **crvUSD-vault sleeve — currently 45%** of vault value — deployed into **scrvUSD** so the stable half of the position earns the crvUSD savings rate rather than sitting idle. The YB UI lists each asset twice (a standard market and a "Hybrid" variant over the *same* underlying market); the Hybrid row is that same collateral pool wrapped with the added stable sleeve, not a separate pool.

Why this matters for crvUSD: every dollar of net-new V3 TVL routes **≈$0.45** into scrvUSD — i.e. into crvUSD held in the savings vault. This is a new, growing structural source of crvUSD demand living *inside* V3 — a peg-defense buffer when calm, but a crvUSD-outflow lever if V3 unwinds fast (mass redemption → scrvUSD redemption → crvUSD leaves the savings vault). ⚠️ **`stablecoin_fraction()` reads 45% today and is an ADMIN-settable lever with no reaction window** — `set_stablecoin_fraction` is gated on an ADMIN that resolves to YieldBasis's own DAO, the one with early execution and a minimum proposing power of one token. **A third party can change how much crvUSD demand exists, immediately.** ⚠️ **It is a parameter, not a constant, and a figure quoted as a default does not announce when it stops being one.**

⚠️ **But size the lever before pricing it.** The savings vault holds **15,992,069.55 crvUSD** — verified two ways on 2026-09-09, since `scrvUSD.totalAssets()` and `crvUSD.balanceOf(scrvUSD)` return the same figure to the wei — which is **0.76% of supply**. **A vault can only release what it holds**, so that is the ceiling on this path whoever owns the shares. ✅ **Redemption is instant — `cooldownDuration()` and `withdrawalQueue()` both revert, so there is no queue** — which makes this **a shock rather than a drain, and a small one.** **Both halves belong in the sentence: immediate, and bounded at well under one percent of supply.** Aggregate scrvUSD parked through HybridVaults is tracked on the dashboard via the HybridVaultFactory's `crvusd_vault_total_required` reading.

#### Credit Line (Structural — governance decisions)

| Date | Ceiling | Notes |
|------|---------|-------|
| Sep 24, 2025 | 60M crvUSD | Initial approval — pools filled within minutes |
| Oct 7–14, 2025 | 300M crvUSD | Expanded after rapid fill |
| Late 2025 | $1B | Current ceiling |

The ControllerFactory pre-mints crvUSD into the YB factory up to the ceiling. The factory then deploys into pools on demand as users deposit BTC. **The factory balance includes both deployed and idle crvUSD — check the dashboard for current figures.**

#### Structural Risk Factors

1. **Volume dominance:** YB accounts for >36% of all crvUSD volume (>60% during high BTC volatility). This is structural — YB's rebalancing mechanism generates crvUSD trades with every BTC price movement.
2. **Bidirectional BTC correlation:** YB's rebalancing flows are proportional to BTC price moves in both directions. A +1% BTC move causes ~$3.5M in crvUSD flow. This creates BTC correlation in what is supposed to be a USD stablecoin.
3. **Rate instability:** YB-induced flows cause borrow rates to swing between near-0% and 12%+, driven by PegKeeper debt ratio changes rather than organic lending demand. This cascades to scrvUSD yield volatility.
4. **Single protocol concentration:** One protocol controls the largest crvUSD allocation and the majority of volume. A YB exploit or failure would cascade directly to crvUSD.
5. **Dual-role governance:** Michael Egorov is both Curve founder and YB creator. This creates alignment but concentrates influence over crvUSD's dominant supply source.
6. **Correlation amplifier in drawdowns:** A sharp BTC decline simultaneously: (a) triggers YB rebalancing flows that pressure crvUSD, (b) drops collateral value in CDP minting markets, (c) spikes borrow rates. These are correlated, not independent risks.

#### Mitigants

- Credit line is factory-bound with irrevocable minter controls
- Emergency DAO multisig can intervene
- crvUSD within YB pools is paired with BTC — not free-floating
- Monetary policy smoothing (3-week EMA) proposal addresses rate volatility
- YB rebalancing is bidirectional — BTC up = buy crvUSD, BTC down = sell crvUSD

---

### Cross-Chain Architecture

The crvUSD FastBridge consists of **six LayerZero OApps** — three `VaultMessengerLZ` contracts on Ethereum (one per supported L2) and three `L2MessengerLZ` contracts on Arbitrum, Optimism, and Fraxtal. On-chain DVN-config audit (PegTracker `oft_audit.py`, 2026-04-25) confirms all configured pathways require **2 DVNs (LayerZero Labs + Google Cloud)**, point-to-point peer config, and consistent ownership through Curve's `OWNERSHIP_DAO`. **The bridge is not rsETH-shaped: zero exposed-and-peered pathways across all six OApps.** The April 19, 2026 manual pause was precautionary, not a response to a discovered DVN hole.

#### Bridge contract topology

| Role | Chain | Address |
|---|---|---|
| `VaultMessengerLZ` (Arbitrum pathway) | Ethereum | `0x15945526b5C32D963391343e9Bc080838fe3e6d9` |
| `VaultMessengerLZ` (Optimism pathway) | Ethereum | `0x4A10d0FF9e394f3A3dCdb297973Db40Ce304b44f` |
| `VaultMessengerLZ` (Fraxtal pathway) | Ethereum | `0xEC0e1c5Cc900D87b1FA44584310C43f82F75870F` |
| `L2MessengerLZ` | Arbitrum | `0x14e11C1B8F04A7dE306a7B5bf21bbca0D5cF79ff` |
| `L2MessengerLZ` | Optimism | `0x7a1f2f99B65f6c3B2413648c86C0326CfF8D8837` |
| `L2MessengerLZ` | Fraxtal | `0x672C38258729060bF443BA28FaEF4F2db154C6fC` |

Sourced from the [`curvefi/fast-bridge`](https://github.com/curvefi/fast-bridge) deployment artifacts. Each verified as a proper LayerZero OApp (peers responding, delegate set to `OWNERSHIP_DAO`, ownership readable). Source-of-truth references: [Curve fast-bridge docs](https://docs.curve.finance/fast-bridge/overview/), [VaultMessengerLZ](https://docs.curve.finance/fast-bridge/VaultMessengerLZ/), [L2MessengerLZ](https://docs.curve.finance/fast-bridge/L2MessengerLZ/).

#### Two bridges — slow vs fast

**Slow bridge — native L2 messaging.** For L2 deployments (Arbitrum, Optimism, Fraxtal), Curve uses each chain's canonical native bridge:

- L2 → Ethereum: standard L2 native withdrawal periods (~1 week for Arbitrum)
- Ethereum → L2: fast deposit (minutes)
- Trust assumption: Ethereum security + the L2's native bridge architecture
- No third-party verifiers; same trust model as bridging USDC or any other ERC-20 via canonical L2 bridges

**Fast bridge — LayerZero OApp.** Used for L2 fast paths and for the L1 deployments (BSC, Avalanche, Fantom, Etherlink) where native L2 messaging doesn't apply:

- Trust assumption: LayerZero infrastructure (Endpoint, MessageLibrary), 2 DVNs per peered pathway (LayerZero Labs + Google Cloud), and Curve's messenger contracts
- Audited 2026-04-25: DVN config clean, all peered pathways pass the rsETH-class check (see audit findings below)

#### Bridge audit findings (2026-04-25)

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

#### One configuration footnote — Fraxtal burn-address DVN

Fraxtal's `L2MessengerLZ` has its inbound-from-Ethereum DVN configured as a single DVN at `0x000000000000000000000000000000000000dEaD` — the burn address. Effect: Ethereum → Fraxtal control messages cannot verify and cannot deliver. **Not exploitable today** — nothing passes the verification, including attackers. **Becomes a 1-DVN hole** if LayerZero ever updates the Fraxtal default to a real single DVN. Independent of the April 19 LayerZero pause; worth flagging to Curve as a defense-in-depth cleanup item.

#### Curve's response to rsETH (April 19, 2026)

Curve paused the LayerZero fast bridge — affecting CRV transfers from BSC, Sonic, and Avalanche, and crvUSD fast bridging across all LayerZero-supported chains. **The L2 slow bridge remained operational throughout.** This was a precautionary measure during root-cause investigation, not a confirmed exploit of Curve's bridge — and the on-chain audit (above) confirms there was no exploitable DVN-config hole to find.

**Operational signal:** Curve's response demonstrated active monitoring and a credible pause mechanism. Holders relying on the slow bridge were unaffected. This is a positive operational observation: an LP-led precautionary pause in the same architectural class within 24 hours of the rsETH disclosure.

**Status as of report date:** Verify current pause status before initiating any LayerZero-routed bridge transaction. Pause/unpause status varies as Curve completes its investigation.

#### Practical guidance for cross-chain crvUSD users

- **Both bridges are audited as clean.** Slow bridge inherits Ethereum's native security; fast bridge is multi-DVN via LayerZero Labs + Google Cloud, audit-verified 2026-04-25.
- **For larger sizes, the slow bridge is still architecturally simpler** — fewer trust assumptions to evaluate per cycle. But the fast bridge is no longer "unaudited surface" the way it was before today's audit.
- **L1 deployments (BSC, Avalanche, Fantom, Etherlink) only have the LayerZero fast bridge available** — slow-bridge fallback doesn't exist for non-EVM-rollup L1s. These chains carry unavoidable LayerZero dependency.
- **Verify the fast bridge is currently active** before transacting (post-rsETH pause status varies).

#### Cross-chain dependency summary for portfolio construction

| Chain | crvUSD bridge model | Bridge-class trust assumption |
|---|---|---|
| Ethereum | Canonical (no bridge) | Curve smart contracts |
| Arbitrum, Optimism, Fraxtal | Slow (native L2) + Fast (LayerZero, audited 2026-04-25) | L2 native bridge OR LayerZero (user choice) |
| BSC, Avalanche, Fantom, Etherlink | Fast only (LayerZero, audited 2026-04-25) | LayerZero (no fallback) |

Note that crvUSD on a non-canonical chain inherits its bridge's security model on top of crvUSD's own protocol risks. For users sizing on Ethereum, none of this section applies; for users sizing elsewhere, the bridge-layer exposure is real but verified clean (with the Fraxtal footnote above) as of 2026-04-25.

---

## 5 · Contract & Admin — 5.5

**crvUSD's contract risk and its authority risk point in opposite directions, and the score is the average of a strong half and a weaker one.**

✅ **The token itself cannot be replaced.** Mainnet crvUSD is **3,572 bytes of Vyper with all three EIP-1967 slots — implementation, admin and beacon — reading zero**, re-verified on-chain 2026-09-09. That is positive evidence rather than a missing accessor: the code is present and the proxy slots are empty. **There is no upgrade path over the token**, which removes the single largest contract risk most stablecoins carry.

**Issuance authority is a chain of contracts, and it is not key-shaped at the top.** `minter()` is the ControllerFactory `0xc9332fdc…738bc`; the factory's `admin()` is `0xb7400d2e…afb79`, which exposes a **`dao()`** — the Curve Ownership Agent `0x40907540…9968` — alongside an **`emergency()`** Safe `0x467947ee…1e0c` measured at **5-of-9**. ⚠️ **Raising mint capacity runs through a DAO vote rather than a key**, so the attack on that path is economic (veCRV) rather than key material.

⚠️ **What holds the score at 5.5 is the emergency Safe and the bridged legs.** The Safe carries **no execution delay**, and the non-Ethereum deployments do not answer to Curve at all — each inherits the authority of that chain's own bridge operators, a different counterparty per chain and weaker than the mainnet arrangement on at least one of them. **This axis is scored on the Ethereum leg, where the mechanism and the great majority of supply sit.**

### Smart Contract Security

#### Audits

crvUSD has been audited by **10+ firms** across multiple engagements as part of Curve's broader audit program. Key audits include reviews of LLAMMA, Controller, PegKeeper, and Factory contracts. Curve is one of the most audited DeFi protocols.

#### Notable Incident

**July 2023 Vyper re-entrancy exploit** (~$70M lost across Curve ecosystem). While this did not directly exploit crvUSD contracts, it demonstrated cascade risk within the Curve ecosystem and temporarily destabilized CRV markets, which indirectly affected crvUSD confidence.

---

## 6 · Issuer — 6.0

**Curve is one of DeFi's most established protocols** — a decade-scale deployment history, ten-plus audit firms across its contracts, and a track record through multiple market cycles. ✅ **On longevity and transparency this is close to the top of what a decentralised issuer can offer.**

⚠️ **What holds it at 6.0 is concentration rather than competence.** CRV tokenomics add governance complexity, and **Michael Egorov's dual role across Curve and YieldBasis creates concentrated influence over crvUSD's supply architecture specifically** — the same person is central to the protocol that issues the asset and to the counterparty holding its largest credit line. **That is a governance fact, not an allegation**, and it is priced here rather than on Dependencies because it is about who decides, not about what the asset passes through.

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

*Revision history: 2026-09-08 — **Backing 4.5 → 5.0, Overall 4.5 → 5.0.** The 2026-08-23 cut was measured at the peak of a four-day PegKeeper excursion and read a swing as a level. Daily series: **14.07% (08-18) → 32.72% (08-21) → 34.56% (08-24) → 23.68% (08-25) → 15.68% (08-28) → 14.0% (09-07)**, ten days stable. ⚠️ **The peg was at par throughout** — never beyond **0.049%** deviation, with 0.99999 / 0.99993 / 0.99991 on 08-21/22/23 at the moment the debt tripled. `PegKeeper debt − pool stables` was **+$32.80M** at the peak, **−$6.65M** on 08-19 and **−$2.58M** on 09-07: it oscillates around zero rather than widening. A level-based trigger now replaces the snapshot: cut below 5.0 only if the ratio holds above 25% for more than five consecutive daily readings.*

*Revision history: 2026-08-23 — **Backing 5.0 → 4.5, Overall 5.0 → 4.5. A finding, not a recalibration:** every figure below is a dated move since 2026-08-13. **PegKeeper debt tripled, $33.75M → $98.60M in ten days, and now stands at 32.8% of supply.** This report states elsewhere that PegKeeper crvUSD is protocol-minted, protocol-owned and **not backed by collateral** — so **roughly a third of crvUSD is now uncollateralized supply, against about a tenth when the axis was last set** — and the implicit backing has not kept pace: PK pool stables **$71.24M against $98.60M of debt, a $27.35M gap**. ⚠️ **Explicitly not a depeg.** PegKeeper minting *is* the peg mechanism operating as designed; crvUSD traded at **$1.0009**, the minting market's CR is 230.7%, and the $98.6M of burn capacity is real. **The change is compositional — the peg is being defended by expanding uncollateralized supply, at three times the described scale.** Peg, liquidity and issuer axes are untouched; Overall follows Backing because this composite tracks its weakest axis. ⚠️ **Every durable range in the operating-regime paragraph was breached inside ten days**, three of them downward: supply mid-$200Ms → **$300.5M**; conservative CR 105–115% → **101.96%**; inclusive CR 110–120% → **92.21%, below par**; and YieldBasis share 60–80% "trending toward the 80% danger line" → **47.1%, moving the opposite way to the trend this report called.** **The Backing rationale's own reasoning also broke** — it held that the two CR readings stay within a few points of each other because PK debt and PK stables are similar in magnitude; they are now about ten points apart. **A definitional control, stated rather than assumed:** supply here is `total_supply` at $300.5M, **not** `totalSupply()` at $2,104.8M, which carries pre-minted ceiling buffer this report warns about; every ratio uses the former. ⚠️ **And a disclosure this report owes its readers rather than a judgement it makes:** our feed records a **CR basis change on 2026-08-18**, five days after the previous verification. The headline 101.96% is the **deployed** basis; the same book on the **minted** basis reads **99.17%, below par**. A reader comparing this report's published band against the live dashboard is comparing across a definitional change nobody disclosed. **This report takes no view on which basis is correct** — that belongs to the monitoring side — but the two numbers should not be meetable without being told they are measured differently. ⚠️ **One lesson about this report's own format.** It publishes **durable ranges rather than point-in-time anchors**, deliberately and correctly, so that daily movement does not make it stale. But **a stale point figure looks stale beside a live value, whereas a breached range still reads as authoritative — because a range implies it has already accounted for movement** — and no drift check can compare a live number against "105–115%". Four ranges breached in ten days. **A range needs a re-check date the way a point figure needs its date**, and these are now dated 2026-08-23. `last_verified` **is** bumped: supply, collateral ratios, PegKeeper debt and pool stables were all re-read. 2026-08-13 (later same day) — verified on-chain that both mainnet Aave GHO Stability Modules are seized (zero GHO, zero underlying, exposure cap 0, `frozen = false`), promoting the GSM impairment behind the GHO keeper's retirement from reported to verified. The Curve Emergency DAO vote, its date and ID, and the LlamaRisk monetary-policy proposal remain unread — the Curve forum returns HTTP 403 from two separate environments. No conclusions or scores changed. 2026-08-13 — PegKeeper set re-read on-chain from the PegKeeperRegulator and `ControllerFactory.debt_ceiling()`. The GHO/crvUSD keeper is corrected from active to **decommissioned** (debt ceiling 0, no debt); its Curve pool still provides DEX depth but no peg defense. Added the verified finding that the USDT keeper now holds **100% of PegKeeper debt** (33.75M), making it a single point of failure for downside defense. weETH reclassified from ETH LRT to ETH LST in the collateral table following ether.fi's 2026-08-06 restaking removal. Scores unchanged at 5.0. 2026-07-28 — supply reconciliation and YieldBasis dependency refresh.*
