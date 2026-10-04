---
asset: "sUSDe"
slug: "susde"
aliases: ["sUSDe", "Staked USDe", "Ethena Staked USDe"]
chains: ["eth", "arbitrum", "base", "optimism", "bsc", "mantle", "blast", "fraxtal", "monad"]
category: "vault-share"
underlying_assets: ["USDe"]
assessment_type: "full"
date: "2026-05-22"
last_revised: "2026-10-03"
last_verified: "2026-08-25"
featured: false
production: true
issuer: "Ethena Labs"
yield_bearing: true
volatility_score: 6.5
backing_score: 6.5
underlying_score: 6.0
issuer_score: 7.0
# ✅ 2026-10-04 MEASURED by our own read of pool 0x744793b5110f6ca9cc7cdfe1ce16677c3eb192ef:
# coins(0)=DOLA, coins(1)=sUSDe, two coins only, so DexTracker's pair label is correct.
# balances: DOLA 48,555,836.38 | sUSDe 14,382,947.61 shares x 1.251308 USDe/share =
# 17,997,504.59. At $1 per leg that is $66,553,341 total — DOLA 72.96%, sUSDe 27.04%.
# (+0.13% vs DexTracker's $66,468,390; +2.55% vs the $64.9M published below.)
# ✅ 2026-10-04 RULED by riskAnalyst: the convention is NOT deliberate — their
# specs/liquidity-ladder-spec.md §94 forbids it outright ("Pool TVL is NEVER substituted
# for depth, and a field's NAME may not claim more than its basis"). So it was relabelled,
# not labelled. TVL now reads as TVL in all three places, and the measured DOLA/sUSDe
# split is published. ⚠️ Their Liquidity 7.0 does not move and neither does ours — both
# rest on the routed $2M-inside-50bps ladder, with the pool figure recorded as a fact and
# never priced as a deduction.
# ⚠️ PARKED: the "$13.5M of non-DOLA" clause is the stated basis for withdrawing the
# DOLA-concentration deduction, and it is TVL — the absorbing side of those pools is
# necessarily smaller and NONE has been read leg by leg. The withdrawal may still be
# right (the sUSDe/USDT pairs absorb in USDT, unaffected in kind) but the reason as
# written is weaker than it reads [owner: riskAnalyst] [since: 2026-10-02]
# ⚠️ PARKED: one-sided absorbing-side capacity is the correct quantity for this axis and
# NO page in either corpus carries it for any asset. Unmeasured here: sDAI, reUSD,
# scrvUSD, frxUSD, crvUSD, reUSDe [owner: riskAnalyst] [since: 2026-10-04]
# PARKED: our DOLA assessment (last_verified 2026-07-01, staging-only) is the source for "roughly half of DOLA backing is sUSDe" — Tier 4 in the refresh queue [owner: riskAnalyst] [since: 2026-10-02]
axis_frame: six
liquidity_score: 7.0
structural_score: 5.5
# `redemption_score` is a LEGACY SUPPLEMENTAL component, NOT folded into axis 3 here.
# Axis 3 holds on its own measured basis (secondary depth measured, primary leg
# permissionless and deliberately not measured as depth) rather than on
# min(liquidity, redemption) — that minimum would cross two rubrics. It renders
# nowhere under the frame; riskAnalyst's publish_feed / portfolio_risk read it.
redemption_score: 6.5
overall_score: 6.5
# Venue-derived (TVL + pool count per chain, enumerated 2026-10-02), NOT
# ladder-derived — the depth ladder was measured on Ethereum only. These render
# nowhere in this repo; the numbers reach a reader through §3 prose.
chain_overrides:
  arbitrum:
    liquidity_score: 5.0
  blast:
    liquidity_score: 4.0
  base:
    liquidity_score: 2.5
  bsc:
    liquidity_score: 2.5
  fraxtal:
    liquidity_score: 2.0
  optimism:
    liquidity_score: 2.0
  mantle:
    liquidity_score: 2.0
  monad:
    liquidity_score: 2.0
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susde"
---

# sUSDe — Risk Report

**Moderate risk · 6.5/10**

> **Issuer-published dashboard:** [app.ethena.fi/dashboards/transparency](https://app.ethena.fi/dashboards/transparency) — Ethena's own real-time transparency page covers both USDe and sUSDe (vault balance, supply, yield). Verified by **Chaos Labs Edge Proof of Reserves**, **LlamaRisk**, **Chainlink Proof of Reserves**, and **HT Digital** (monthly attestation). For independent risk monitoring including sUSDe-specific metrics (cooldown queue, coverage ratios), see [LlamaRisk's Ethena portal](https://portal.llamarisk.com/ethena/overview). **tidresearch also runs an independent on-chain tracker of Ethena's reserve wallets** ([live dashboard](https://tidresearch.com/dashboards/?asset=susde)) — the issuer transparency page and Risk Committee feeds above remain the backing source of record.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~3.72% APY (Q1-2026 anchor — verify live) | Dynamic 1–7-day cooldown (1 day today) OR secondary (Curve — 95.5% of DEX depth) | Dynamic cooldown silo to USDe | ~29 months | Ethereum + 8 L2s/sidechains |

## Summary

sUSDe is the staked, yield-bearing form of [USDe](/reports/usde/). It's an ERC-4626 vault where holders deposit USDe and receive sUSDe shares whose value accrues as Ethena's reserve portfolio distributes yield to stakers. Launched alongside USDe in February 2024, sUSDe was originally a pure derivatives-yield product — perpetual funding rates and stETH staking flowing to stakers, producing yields in the 8–40% range depending on the funding regime.

Following the Q1 2026 architecture pivot in the underlying USDe (perp share dropped from ~93% to ~11%; ~89% now in liquid stables + institutional overcollateralized loans + RWAs — see the [USDe retail report](/reports/usde/) for the full reframing), **sUSDe's yield source has diversified materially**. APY was ~3.72% as of Q1 2026 — lower than the pre-pivot peaks but with substantially lower variance and much-reduced tail risk of yield going negative. Treat that figure as a Q1-2026 anchor rather than a current quote; the rate moves with the reserve portfolio, so check a live source before sizing a position.

Redemption to USDe runs through a **cooldown silo** — sUSDe holders cannot exit instantly to the primary path. **Ethena has shipped the dynamic cooldown** (proposal #759). The fixed 7-day wait is gone, replaced by a **coverage-tiered 1 / 3 / 5 / 7-day** duration that tracks USDe's liquid backing — short when coverage is comfortable, longer when it thins — plus an auto-extend safeguard for stress. **Verified on-chain 2026-07-15, the live duration is 1 day**, the mechanism's floor. During whatever cooldown applies, the position stays non-transferable; it cannot be sold or used as collateral. This materially relaxes the wrapper's binding constraint.

Secondary markets on Ethereum are deep, and they are concentrated: **$2M clears inside 50bps** as a measured floor, Curve holds **95.5%** of $78.39M of indexed DEX **swap TVL**, and one pool — **DOLA/sUSDe** — is 82.8% of it. ⚠️ **TVL is not exit depth and is not used as it here** — a pool counts both its legs, and only the leg opposite sUSDe can absorb an sUSDe seller. ⚠️ **There is no Curve sUSDe/USDe pool.** The pair usually cited under that name is Synthetix's **sUSD/sUSDe**: one letter apart, a different issuer. Historical secondary discount data is small: **mean -0.168% from fair value, maximum -1.270%** (per LlamaRisk Aave-forum analysis). The October 10, 2025 stress event produced brief sUSDe secondary detachment but no structural NAV loss; the cooldown silo functioned as designed under $1B+ unstaking pressure.

The 6.5/10 score matches USDe (which is the floor — sUSDe cannot meaningfully be safer than its underlying) and reflects (a) the improved post-pivot profile, (b) successful navigation of October 2025, and (c) deep, well-functioning secondary markets — counterbalanced by (a) a cooldown that, while now much shorter, can still step back toward 7 days if coverage thins and (b) massive Aave / Morpho / Pendle loop concentration that structurally exceeds USDe's float on a leveraged basis.

## 1 · Stability — 6.5

The defining stress event for the underlying USDe (see [USDe retail report](/reports/usde/)) was also a real test of the sUSDe wrapper layer:

- $1B+ unstaking pressure within hours
- Cooldown silo absorbed flows without operational issues
- sUSDe secondary briefly detached from NAV (peak observed discount in this window: well within the historical -127bps max)
- No NAV loss to stakers who held through
- Per LlamaRisk's back-test, during the October 10–11 window specifically, dynamic-cooldown calculations would have **driven cooldown duration to its minimum** because liquid coverage actually *spiked* to 2.43× the 3-day threshold as nervous holders unstaked. This is the inverse of a bank-run dynamic. (That back-test was run against the proposed model, which contemplated a 0-day floor; the mechanism Ethena actually shipped floors at 1 day.)

The wrapper layer survived its first major stress at scale. The cooldown silo did its job; secondary markets absorbed the discount-seekers; NAV held. Worth being precise about what this does and doesn't tell you: October 2025 tested the **fixed 7-day** silo, since that's what was deployed at the time. The dynamic mechanism that governs exits today has not yet been through a comparable stress event — the back-test above is a simulation of how it would have behaved, not a record of how it did.

## 2 · Backing — 6.5

⚠️ **This is inherited from USDe and is not an independent measurement of sUSDe.** sUSDe holds USDe and has no reserve of its own — **its collateral *is* USDe's reserve** — so a wrapper cannot outrank its underlying on the underlying's own axis. ✅ **The same rule governs the Contract & Admin row below**, which is set equal to USDe's for the same reason — one rule applied on every axis where the wrapper inherits, rather than on one.

⚠️ **The published collateral ratio is understated, and that is the unusual direction.** The live feed reads **103.58%** on a **$1,368,057,913** book — but it embeds Ethena's **July 23** snapshot, while the **August 26** attestation (the 21st, published 2026-09-03) is live. **The gap moves the central figure roughly 16 points in Ethena's favour.** So a reader comparing this ratio against Ethena's own disclosure will find ours the more conservative of the two, not the other way round.

⚠️ **And the loss-absorption layer has a single dependency.** The Reserve Fund is **100% USDtb**, and USDtb is **more than 90% BUIDL-backed** — so the buffer that is supposed to absorb a shortfall in the reserve concentrates into one instrument and, behind it, one issuer.

## 3 · Liquidity & Exit — 7.0

The redemption profile is the binding wrapper-specific constraint.

**1. Primary redemption — dynamic 1–7-day cooldown to USDe (1 day today).**

Mechanism:

1. Call `cooldownShares()` or `cooldownAssets()` on the sUSDe vault. Your USDe is transferred from the vault to the cooldown silo under a per-user claim. **Read the silo's address from the vault itself — `silo()` on sUSDe — rather than trusting any address written down elsewhere, including here.** It resolves to `0x7fc7c91d556b400afa565013e3f32055a0713425` as of 2026-08-23.
2. Wait out the **current `cooldownDuration()`** — no longer a fixed 7 days, but one of **1 / 3 / 5 / 7 days** depending on how comfortable USDe's liquid backing is when you start. **Verified on-chain 2026-07-15: 1 day.**
3. Call `unstake()` to claim the USDe from the silo.

During cooldown, the position is non-transferable. You cannot sell it, use it as collateral, or accelerate the timer.

**The dynamic cooldown has shipped.** Ethena implemented it via governance proposal #759, following LlamaRisk's Aave-forum analysis. It replaces the fixed 7-day silo with a duration that scales inversely to USDe's liquid backing coverage: comfortable coverage means a short wait, thinning coverage lengthens it automatically. On top of the tiers there's a **stress auto-extend safeguard** — if daily unstaking runs above 2× the 14-day average *while* 3-day coverage falls below 1.5×, the cooldown extends by a day. That's what stops the 1-day floor from becoming a run vector.

The coverage backdrop behind today's 1-day setting (LlamaRisk, March 2026):

- 1-day coverage: **8.40×** (vs the 1.5× threshold)
- 7-day coverage: **6.88×** (vs the 1.5× threshold)
- Historical back-test: median queue pressure 0.51×, 99th percentile 8.86×
- 11.8% of days exceed 2.0× queue pressure

LlamaRisk's underlying conclusion was that **no fixed cooldown of any duration is risk-defensible** under historical p99 flow data — including the alternate 3-day fixed proposal — and that only a dynamic model is justified. That is now the deployed mechanism.

What this means practically: in a normal regime like today's, exiting to primary costs you a day rather than a week. But the duration is a live variable, not a guarantee — **check `cooldownDuration()` before you rely on a number**, because the tier you get is the tier in force when you start the cooldown, and a stressed regime is exactly when it will be longer.

**2. Secondary market.**

The deeper secondary market is the alternative to waiting out the cooldown. Enumerated 2026-10-02 across 140 indexed Ethereum pools holding **$78.39M**:

| Venue | Pools | TVL | Share |
|---|---|---|---|
| Curve | 19 | $74,858,412 | 95.5% |
| Uniswap v4 | 88 | $2,061,896 | 2.6% |
| Fluid | 2 | $1,356,881 | 1.7% |
| Uniswap v2/v3 | 17 | $76,047 | 0.1% |

**Curve is the venue — but not the pair most people name.** ⚠️ **There is no Curve sUSDe/USDe pool.** The pool routinely cited under that name is Synthetix's **sUSD/sUSDe**; `sUSD` and `USDe` are one letter apart and belong to different issuers. A **Curve sUSDe/USDC** pool does exist and holds **$723.26** — dust, not a venue. The pools that actually carry the depth:

- **DOLA/sUSDe — $66.55M**, which is **82.8%** of all indexed Ethereum swap TVL. ⚠️ **Read directly on 2026-10-04, and only $18.0M of it is sUSDe:** `coins(0)` is DOLA at **48,555,836** and `coins(1)` is sUSDe at **14,382,947 shares** (×1.251308 USDe/share = **$18.00M**), two coins and no more. ✅ **So the side that can absorb an sUSDe seller is the DOLA leg, $48.56M — 72.96% of the pool** — and the sUSDe already in it is inventory on the seller's own side.
- Then, on Curve: sDAI $3.74M · reUSD $2.30M · scrvUSD $1.67M · frxUSD $822K · crvUSD $697K · reUSDe $564K
- Direct dollar pairs away from Curve: **sUSDe/USDT** on Uniswap v4 ($894K and $594K) and on Fluid ($576K), plus **GHO/sUSDe** on Fluid ($781K)

⚠️ **The DOLA concentration is a fact worth knowing and it is not a reason the score is lower.** About **$13.5M of non-DOLA swap TVL** sits across the pairs above — ⚠️ **and the absorbing side of those pools is necessarily smaller than $13.5M, because none of them has been read leg by leg.** The direction of the argument survives that, because the direct sUSDe/USDT pairs are a clean one-hop exit into dollars rather than a second swap, and their absorbing side is USDT — unaffected in kind, though not in magnitude; and the measured ladder below routes across all venues rather than through DOLA alone. ⚠️ **But the $13.5M as written is the weaker half of that case, and it is stated here rather than relied on.**

⚠️ **But the counter-asset in that pool is not independent of sUSDe.** Our own DOLA assessment — a light review, **last verified 2026-07-01 and not re-verified since** — finds roughly half of DOLA's backing is sUSDe, and that DOLA/sUSDe is also DOLA's own deepest exit pool. If that still holds, the largest venue in the table above is partly a claim on the same underlying, so under correlated stress it is not independent exit capacity. **Two things keep this stated rather than priced into the score.** The 7.0 rests on a **routed** ladder, which measures what actually clears across all venues regardless of which one supplies the depth. And **the headline is a two-sided pool figure** — a Curve pool's TVL counts both legs. ✅ **That is now measured rather than inferred, and the measurement runs the other way:** the **DOLA** side is the larger one at **$48.56M against $18.00M** of sUSDe, so the absorbing side is bigger than a reading from DOLA's supply would suggest, not smaller. ⚠️ **One pool's DOLA balance alone exceeds the roughly $39M figure circulating for DOLA's total supply**, so that supply figure is stale or wrong, and nothing here rests on it.

**Measured depth, 2026-10-02.** USD-denominated and marginal, with the first rung subtracted: ⚠️ **$2M clears inside 50bps, as a FLOOR** — $2M is the largest size the measurement reached and cleared, not a located limit. Read it as *at least this much*, never as *this is where it runs out*. ⚠️ **The 50bps gate is set by the unit of account, not the category:** a dollar-denominated, par-or-accruing NAV asset is measured against a tighter threshold than an ETH-denominated one, so this floor is not comparable with one quoted at a looser tier.

⚠️ **Coverage: this is a DEX census, not a market census.** Enumeration runs over GeckoTerminal and DexScreener, and **centralised venues are deliberately uncounted**. Every figure here is therefore a floor on coverage — real tradeable depth is at least this much, and the shares between venues are exact only within DEX.

Alongside the spot book:

- **Pendle** — ⚠️ **2 of 17 markets are live; 15 have matured.** The two live are **Ethereum $4.02M, maturing 2026-11-26** and **Monad $20.92M, maturing 2026-10-22**. ⚠️ **For a PT, maturity is binding**, and the Monad market is twenty days out — larger on its own than every non-Ethereum chain's spot venues combined, on a chain whose own spot pool holds **$247**. PT-sUSDe remains the highest-leverage sUSDe wrapper, used for fixed-yield exposure and loop strategies; YT-sUSDe is pure yield-token exposure.
- Various Morpho / Euler / Aave LP-style positions

Historical secondary discount (per LlamaRisk March 2026 Aave-forum analysis):

- Mean deviation from fair value: **-0.168%** (about 17bps below `convertToAssets()` NAV)
- Maximum observed discount: **-1.270%** (about 127bps)
- No sustained -5%+ detachment in 27 months of operation

The ~17bps mean discount reflects the time-value of waiting through the cooldown — a holder willing to wait it out earns NAV; a holder needing immediate exit pays a small premium for liquidity. Note that this discount history was accumulated under the old fixed 7-day regime; a 1-day cooldown gives holders less reason to pay up for immediacy, so the mean discount may compress from here. That's a reasonable expectation, not an observed fact yet.

**Important — exit asymmetry note.** sUSDe has time-asymmetric exit (instant via secondary at small discount, primary at NAV after the dynamic 1–7-day cooldown — 1 day today) but **no access-asymmetric exit** — no KYC, no gating, no jurisdictional restriction on holding or staking. This is structurally better than tokenized RWAs that have gated primary redemption (like the cousin product reUSDe from Re Protocol, which is non-U.S. KYC only — see that report for the contrast).

**3. Chain by chain — the mainnet score does not travel.**

sUSDe is deployed on nine chains and essentially all of the depth is on one. Venue TVL by chain, enumerated 2026-10-02:

| Chain | Liquidity | Venue TVL | Pools |
|---|---|---|---|
| Ethereum | **7.0** | $78.39M | 140 |
| Arbitrum | 5.0 | $1.04M | 15 |
| Blast | 4.0 | $200K | 8 |
| Base | 2.5 | $33.8K | 17 |
| BSC | 2.5 | $18.5K | 8 |
| Fraxtal | 2.0 | $4.9K | 3 |
| Optimism | 2.0 | $2.3K | 4 |
| Mantle | 2.0 | $424 | 6 |
| Monad | 2.0 | $247 | 1 |

⚠️ **The eight non-Ethereum scores are venue-derived, not ladder-derived.** The depth ladder was measured on Ethereum only; the other chains were enumerated for venue TVL and pool count and are **explicitly unmeasured for crossing size**. They describe what is deployed there, not an exit anyone has tested.

The practical reading: away from Ethereum the secondary route is not an exit for size. On the four chains scoring 2.0 the entire local book is four figures or less, and the honest exit is the bridge or the cooldown, not the pool.

## 4 · Dependencies — 6.0

✅ **Set equal to USDe's 6.0, because sUSDe is a pure wrapper — its only asset is USDe.** The dependency book arrives **undiluted**: there is nothing at this layer that diversifies it, and nothing that can make the wrapper safer than the thing it holds. **This axis prices the counterparty set — how many, how concentrated, how substitutable** — while whether the backing can be *verified* stays on Backing above, so the two do not charge twice for one fact.

⚠️ **Inherited, not independently derived: it moves when USDe's Dependencies score moves.** What sits inside it is argued on the [USDe report](/reports/usde/) — the Coinbase concentration across custody, perpetuals venue and distribution, and the lending book whose two largest borrowers are the two largest custodians.

✅ **Measured against Ethena's August 26 attestation**, which shows the custody set **re-diversifying** rather than concentrating — Coinbase 73.09% → 57.19%, Ceffu 0.68% → 9.62%, and a sixth arrangement appearing. **That is better data than the dashboard currently holds**, which still embeds the July snapshot.

## 5 · Contract & Admin — 5.5

sUSDe is a standard ERC-4626 vault at `0x9D39A5DE30e57443BfF2A8307A4256c8797A3497` on Ethereum, with deployments on the same chains as USDe (LayerZero OFT). The vault:

- Accepts USDe deposits → mints sUSDe shares at current `convertToAssets()` NAV
- Pays yield by accumulating USDe in the vault — `convertToAssets()` grows over time, share price rises
- Routes withdrawals through the cooldown silo — the address `silo()` returns on the vault, `0x7fc7c91d556b400afa565013e3f32055a0713425` as of 2026-08-23 — for the duration returned by `cooldownDuration()` (dynamic 1–7 days; 86400s = 1 day as of 2026-07-15)

⚠️ **The audit position, stated rather than implied.** Three engagements are **confirmed to have covered the sUSDe vault**: Quantstamp, a Cantina-managed/Spearbit-labelled review, and Pashov. ⚠️ **ChainSecurity's coverage of sUSDe is not establishable**, so the "five firms" framing this asset is usually described with overstates what is known. ⚠️ **No located report establishes that an audited version is the deployed one.** ⚠️ **And the Immunefi bounty is not a mitigant for this axis:** its 2026-08-11 terms **exclude centralisation risk, leaked-key attacks and unmodified privileged-address actions** — which is exactly what this axis measures, so it underwrites none of it.

⚠️ **Documentation outcome: DISAGREE, with a split.** Ethena's current narrative documentation is **silent** on how the upgrade authority is held — the common case, and not the adverse one. But their **archived bounty repository names "our ethena multisig" as `DEFAULT_ADMIN_ROLE`**, where the walk measures a **24-hour `TimelockController`** holding it with the multisig downstream. **That is a contradiction inside the issuer's own corpus**, not between us and them: a stale document still describing a pre-timelock arrangement.

✅ **None of this moves the score.** Contract & Admin is set by the admin half — the authority topology — and assurance can never lift it past what the keys allow.

The cooldown silo is a thin escrow contract — minor additional surface beyond the core vault, no known vulnerabilities. The dynamic cooldown adds a governance-set duration parameter on top; `cooldownDuration()` is the authoritative read for what your exit will actually cost in time.

For lending protocols that use sUSDe as collateral (Aave, Morpho, Pendle PT integrations), the standard pricing is `convertToAssets()` — i.e., the oracle reads NAV, not secondary market price. This has a subtle structural consequence: during a sUSDe secondary discount window, the collateral oracle keeps reading NAV (so loopers don't get prematurely liquidated), but the realized exit price is the secondary discount (so lenders may eat the gap if the cooldown queue blows out). Verify oracle source per lending market before sizing leveraged sUSDe positions.

## 6 · Issuer — 7.0

⚠️ **Inherited from USDe and held equal, because this axis scores the entity.** It is identical across everything Ethena issues, and deriving it twice would create a second surface for one judgement.

**What it rests on:** a doxxed team, top-tier investors, active regulatory engagement, a broad verification ecosystem (Reserve Fund subcommittee, LlamaRisk, Blockworks, Chaos Labs, Chainlink) — and, most of all, **behaviour proven through the October 2025 stress event** rather than asserted in advance.

⚠️ **Two things about Ethena governance that are easy to get backwards.** **ENA-token voting exists** — it is not a Risk-Committee-only structure. And the Risk Committee is **not** the senior body: ENA voting's first material use, a Snapshot vote closed **2026-09-02**, **superseded a Risk Committee parameter.** So the committee is a review layer that tokenholder governance can override, not a compensating control standing in place of a vote.

## What you actually earn

sUSDe distributes yield via NAV growth on the ERC-4626 vault share — no rebasing. Each share's `convertToAssets()` value grows over time as Ethena's reserve portfolio distributes yield to stakers.

The yield source has changed materially since the architecture pivot:

| Era | Source | Typical APY | Tail risk |
|---|---|---|---|
| Feb 2024 – Sep 2025 (basis-trade dominant) | Perp funding + stETH staking | 8–15%, peaks 30–40% | Yield can plateau or go negative in sustained negative funding |
| **Q1 2026 onward (post-pivot)** | Institutional lending + stable spreads + RWA yield + 11% residual basis | **~3.72%** (March 2026) | Materially reduced — credit yield is durable, not funding-dependent |

The Reserve Fund (the loss-absorption buffer underlying USDe — see the [USDe retail report](/reports/usde/) §"What October 10, 2025 actually proved" for context) is currently ~9× overcapitalized versus Risk Committee floor recommendations. There's an active proposal to redirect USDtb interest earnings from the Reserve Fund to sUSDe holders rather than build the fund further — if implemented, that lifts sUSDe APY modestly.

**A note on the pre-pivot peak yields**: Many DeFi loopers and content creators reference sUSDe APYs from 2024–2025 when funding regimes were high and the basis trade dominated. Those numbers reflect a different system. The post-pivot reality is a single-digit rate — ~3.72% was the Q1-2026 print, and it is used throughout this report as an anchor for the *shape* of post-pivot yield, not as a live quote. Check Ethena's dashboard for the current rate. The Risk Committee's view (per March 2026 Reserve Fund subcommittee post) is that the structurally lower yield with much-reduced variance is the right shape for the new architecture.

## Audits & security

⚠️ **"Inherits the USDe audit stack" is the claim to be careful with** — sUSDe is a separate ERC-4626 vault contract, so an engagement on USDe does not automatically cover it. Scope checked per firm:

| Engagement | Tier | Covered the sUSDe vault? |
|---|---|---|
| Cantina-managed, Spearbit-labelled | Top-tier | ✅ confirmed |
| Quantstamp | Mid-tier | ✅ confirmed |
| Pashov Audit Group | Mid-tier | ✅ confirmed |
| ChainSecurity | Mid-tier | ⚠️ **not establishable** |

Plus multiple competitive audits. No known exploits across 27+ months.

⚠️ **Two limits that stop this reading as assurance.** **No located report establishes that an audited version is the deployed one.** And the **Immunefi bounty excludes centralisation risk, leaked-key attacks and unmodified privileged-address actions** (terms of 2026-08-11) — so it underwrites nothing on the Contract & Admin axis and is not a mitigant there.

Live monitoring: the same Risk Committee infrastructure that monitors USDe covers sUSDe — **Chaos Labs Edge Proof of Reserves**, **LlamaRisk Risk Monitor Portal**, **Chainlink Proof of Reserves**, **HT Digital** monthly attestation, **Kraken Custody** weekly PoR (since January 2026). The sUSDe-specific metrics worth tracking are cooldown queue depth and vault TVL — both on the dashboards above — plus the live secondary discount, which in practice means **Curve, and specifically DOLA/sUSDe**, the pool holding 82.8% of indexed Ethereum depth. ⚠️ **Pendle is a thinner watch than it was: 2 of its 17 sUSDe markets are live, and the larger of the two matures 2026-10-22.**

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 6.5 | NAV-accruing share with no directional peg. Architecture pivot in underlying USDe materially reduces tail risk of yield going negative — basis trade no longer dominant return engine. Current ~3.72% APY is compressed vs pre-pivot range but with much lower variance. Survived October 2025 without share-price loss; secondary discount peaked at -127bps and resolved within hours. |
| Backing | 6.5 | ⚠️ **Inherited from USDe, not independently measured** — sUSDe holds USDe and has no reserve of its own, so the wrapper cannot outrank its underlying on the underlying's own axis. ⚠️ **The published collateral ratio, 103.58% on a $1,368,057,913 book, embeds Ethena's 23 July snapshot** while the 26 August attestation is live, which makes this figure the more conservative of the two rather than the other way round. ⚠️ **The Reserve Fund is 100% USDtb, and USDtb is more than 90% BUIDL-backed** — the layer meant to absorb a shortfall concentrates into one instrument and, behind it, one issuer. |
| Liquidity & Exit | 7.0 | Measured 2026-10-02: **$2M clears inside 50bps on Ethereum, as a floor** rather than a located limit. Curve holds **95.5%** of $78.39M indexed Ethereum DEX depth across 140 pools, concentrated in **DOLA/sUSDe at 82.8%**, with about $13.5M outside it including direct sUSDe/USDT pairs on Uniswap v4 and Fluid. ⚠️ **DOLA is not independent of sUSDe** — roughly half its backing is sUSDe per our 2026-07-01 assessment, unverified since — but that is stated rather than priced, because the ladder is routed across all venues and $64.9M is a two-sided pool figure. ⚠️ **No Curve sUSDe/USDe pool exists** — the pair cited under that name is Synthetix's sUSD/sUSDe. **Pendle is 2 of 17 markets live.** Retail can exit secondary at near-NAV in normal conditions (-17bps mean, -127bps max historical discount). Time-asymmetric exit (instant secondary vs the dynamic 1–7-day primary, 1 day today) but no access-asymmetric gating. ⚠️ **Scored on Ethereum. L2 depth runs from $1.04M on Arbitrum to $247 on Monad** — Arbitrum 5.0, Blast 4.0, Base and BSC 2.5, Fraxtal, Optimism, Mantle and Monad 2.0, all venue-derived rather than ladder-measured. Enumeration is DEX-only; centralised venues uncounted. **The primary leg is permissionless mint/redeem at NAV, ungated, currently one day** — deliberately not measured as depth, since a time-delayed gate claims no percentage. ⚠️ **Neither leg binds this score in calm conditions; the correlation does** — the cooldown lengthens when coverage thins, and thinning coverage is the same condition that drains secondary depth. |
| Dependencies | 6.0 | ✅ **Set equal to USDe's 6.0, because sUSDe is a pure wrapper — its only asset is USDe.** The dependency book arrives undiluted: nothing at this layer diversifies it, and nothing can make the wrapper safer than the thing it holds. This axis prices the counterparty set — how many, how concentrated, how substitutable — while whether the backing can be *verified* stays on Backing above, so the two do not charge twice for one fact. |
| Contract & Admin | **5.5** | ✅ **sUSDe's own surface is genuinely strong** — an ERC-4626 vault plus cooldown silo, with Quantstamp, a Cantina-managed/Spearbit-labelled review and Pashov **confirmed to have covered the sUSDe vault** (ChainSecurity's coverage of it is not establishable). ⚠️ **But this axis scores the authority a holder is actually exposed to, and sUSDe wraps USDe** — a wrapper is scored equal to its underlying on the underlying's own axis rather than above it, so the wrapper's audit quality cannot lift it past what it wraps. ✅ **USDe has no upgrade path at all:** its three EIP-1967 slots read zero against **7,567 bytes** of deployed code, with `totalSupply()` answering **4,464,043,236** in the same pass — a measured absence rather than an unread contract, and rarer than any delay. ⚠️ **Two distinct authority paths sit beneath it and must not be merged into one:** `owner → setMinter` has **full reach behind a real 24-hour timelock floor**, while `minter → EthenaMintingV2` is **undelayed but bounded**. **Neither path is both full-reach and undelayed**, and a summary that composes the worst half of each describes a shape that does not exist. ⚠️ **The Dev Safe is 5-of-10 and holds proposer, executor and canceller** — the party that schedules is the party that executes and the only party that could cancel. ⚠️ **Scored on Ethereum.** USDe declares eight chains and sUSDe nine, and neither publishes supply by chain, so the share left unread cannot be stated as a number |
| Issuer | 7.0 | ⚠️ **Inherited from USDe and set equal, because this axis scores the entity** — it is identical across everything Ethena issues, and deriving it twice would create a second surface for one judgement. Rests on a doxxed team, top-tier investors, active regulatory engagement, a broad verification ecosystem (Reserve Fund subcommittee, LlamaRisk, Blockworks, Chaos Labs, Chainlink) and, most of all, behaviour proven through the October 2025 stress event rather than asserted in advance. ⚠️ **ENA-token voting exists and outranks the Risk Committee** — a Snapshot vote closed 2026-09-02 superseded a committee parameter, so the committee is a review layer that governance can override, not a substitute for a vote. |
| **Overall** | **6.5** | Moderate risk, and it sits at USDe's floor rather than above it — a wrapper cannot meaningfully be safer than the thing it holds. The post-pivot reserve profile, the October 2025 record and a measured secondary book are set against a cooldown that lengthens under exactly the conditions that thin that book. |

## Who it's for

DeFi users who want yield exposure to Ethena's post-pivot reserve portfolio and can tolerate (a) a cooldown on primary exit that is 1 day today but can lengthen to as much as 7 under thin coverage, (b) reliance on secondary markets for time-sensitive exits, (c) the same institutional credit + RWA + 11% residual basis risk profile as USDe at the underlying level, (d) systemic exposure via the Aave / Morpho / Pendle loop concentration. Comfortable with reading external Risk Committee dashboards (LlamaRisk Portal, Chaos Labs Edge PoR, Ethena Transparency Dashboard) rather than direct on-chain reserve verification.

## Who should avoid

- Anyone who needs instant guaranteed exit at NAV — the cooldown is real even at 1 day, it is not guaranteed to stay at 1 day, and during stress the secondary discount can widen meaningfully
- Anyone whose mental model of sUSDe is anchored on pre-pivot APY (8–40%) — post-pivot yield is a single-digit rate (~3.72% as of Q1 2026)
- Anyone uncomfortable with the systemic exposure that sUSDe stress would cascade through Aave / Morpho / Pendle loops
- Anyone using sUSDe as collateral on lending markets without first verifying the oracle source (NAV-based protects loopers from premature liquidation but transfers risk to lenders during prolonged cooldown queues)

## The fee switch, and what it replaced

Ethena tokenholders have approved a **fee switch**: once USDe supply reaches a stated milestone, **95% of the Ethena Foundation's net revenue** — the Foundation's own cut, not the protocol's — is directed to **ENA buybacks**.

⚠️ **The denominator is the whole story here, and the proposal's own milestone table supplies it.** The schedule is expressed as a take rate against **gross** protocol revenue, and it reconciles with the 95% figure exactly:

| USDe supply | $7.5B | $10B | $15B | $20B | $25B+ |
|---|---:|---:|---:|---:|---:|
| Gross protocol APY (assumed) | 6.0% | 6.0% | 6.0% | 6.0% | 6.0% |
| Annualized gross revenue | $450m | $600m | $900m | $1,200m | — |
| **Net revenue take rate for buybacks** | **5%** | 10% | 15% | 20% | 25% |
| Annualized buyback volume | **$22.5m** | $60m | $135m | $240m | — |

✅ **So at the first milestone the buyback is $22.5m against $450m of gross protocol revenue — 5%.** The Foundation's net is about **5.3%** of protocol revenue, and 95% of *that* is what goes to buybacks. ⚠️ **Read without the denominator, "95% of net revenue" suggests almost all protocol economics leave. They do not** — the figure a USDe holder forgoes at that milestone is about **0.50% of a $4.47B book per year.**

⚠️ **Two limits the table states about itself.** It holds protocol APY constant at **6.0%**, which the proposal says is **below** Ethena's realised gross APY since inception, *"in order to isolate the effect of the supply milestones"* — so it is a schedule illustration, not a revenue forecast. And it calls the figures **illustrative**, varying with realised rewards and the composition of the USDe backing.

⚠️ **It is dormant, and this report is not treating it as a deterioration.** USDe supply is **$4,468,386,035** — read on-chain today — against a first milestone of **$7.5B**, so activation needs **+67.8%** growth from here. ⚠️ **That gap has narrowed: supply is up 9.86% in twelve days.** ✅ **Stated as arithmetic on a single window rather than as a forecast** — at that trailing rate the milestone is roughly two months out, and a twelve-day window is not a trend. **Nothing is being diverted today**, and a reader should not take this as a change to current yield or current backing.

⚠️ **The part worth knowing is what the schedule displaced.** The proposal's own text states that these milestones *"would replace any suggested parameters previously suggested by the Risk Committee"* — **and the Risk Committee thread is where the reserve-fund protections lived**: a monthly adequacy assessment gating activation, and a stated priority ordering of **Reserve Fund capitalization first**, then competitive sUSDe yields, then sENA.

**Those are explicitly superseded, and the replacement text carries no reserve-fund condition of its own.** So the commitment that revenue would top up the loss-absorption buffer before being routed elsewhere has been replaced by a supply schedule that does not restate it.

⚠️ **Two things this report has not read, and does not source to itself.** The milestone table is an **IPFS-embedded image**, and the Risk Committee's supporting analysis sits in the proposal's replies — **either could reinstate a reserve-fund test as a gate on activation, and neither has been retrieved.** Tier figures circulating in press coverage (5% above $7.5B, 10% at $10B, 15% at $15B) are **second-hand and are used here for no judgement.**

**The honest summary is structural rather than immediate, and smaller than the headline percentage suggests: the protocol has committed by tokenholder vote to routing a rising share of revenue outward as it scales — 5% of gross at the first milestone, stepping to 25% above $25B — and the reserve-fund-first ordering that previously governed that decision no longer applies in the text that replaced it.**

## What to watch

- **The live cooldown duration.** Now the single most useful number to check before an exit, because it moves. Read `cooldownDuration()` on the vault directly (1 day / 86400s as of 2026-07-15); a step up to 3, 5, or 7 days is the mechanism telling you USDe's liquid coverage has thinned. Background on the design: the [LlamaRisk Aave-forum post](https://governance.aave.com/t/llamarisk-insights-ethena-susde-dynamic-cooldown/24305) and the [Ethena governance forum](https://gov.ethenafoundation.com).
- **Cooldown silo depth.** Mass-redemption signal. Resolve the address with `silo()` on the sUSDe vault, then read its USDe balance — it held roughly $25M at a 2026-08-23 check. Resolving it each time rather than reusing a saved address is the point: the silo can be redeployed, and a stale address reads as an empty contract rather than as an error.
- **Secondary market discount.** Mean -17bps / max -127bps historically. Sustained widening beyond -200bps is the early-warning indicator for stress.
- **sUSDe APY trend.** ~3.72% as of March 2026, used here as an anchor rather than a live quote — verify the current rate on Ethena's dashboard. Sustained sub-3% prints would suggest reserve-portfolio yield compression beyond expectations.
- ✅ **ANSWERED — no reserve-fund test gates the fee switch, and it resolved against the reserve fund.** The ratified proposal and its milestone table were read in full: **activation gates on USDe supply milestones only.** The body records that the schedule was *"signed off by the Risk Committee"* — ⚠️ **sign-off on a schedule is not a surviving test**, and no reserve-fund condition appears in the text that was approved. ✅ **The vote is final and was uncontested: 17,786,102.45 FOR, 0 AGAINST, 0 abstaining, 88 voters, against a 5,000,000 quorum — 3.56× cleared.** ⚠️ **One thread remains genuinely open:** the Risk Committee's supporting analysis sits in the proposal replies and has not been retrieved, and it could carry a condition the ratified text does not.
- **Aave / Morpho / Pendle loop concentration.** $6.4B+ leveraged exposure against a ~$4.5B underlying USDe float (June 2026) — structurally larger than unit supply, and the gap widens as supply contracts. Pendle PT-sUSDe is the primary growth vector per Chaos Labs Aave-forum debate.

## A note on the architecture pivot

The single most important update to a pre-2026 mental model of sUSDe: **the underlying USDe is now ~89% conventional credit-style assets and only ~11% basis trade**. Pre-pivot, sUSDe was almost entirely a derivatives-yield product. Post-pivot, it's a managed credit portfolio with a residual derivatives overlay.

This is a structurally better product for risk-adjusted yield — lower mean APY but materially lower variance and much-reduced tail risk of yield going negative. The full architectural shift is covered in the [USDe retail report](/reports/usde/) §"A note on the architecture pivot" — sUSDe holders inherit all of it at the underlying level, plus the wrapper-specific cooldown and concentration considerations layered on top.

## A note on Pendle PT-sUSDe and the Aave loop

Pendle PT-sUSDe is the highest-leverage sUSDe wrapper. The typical loop:

1. Buy PT-sUSDe at a discount to face value (fixed-yield exposure)
2. Use PT-sUSDe as collateral on Aave or Morpho
3. Borrow USDC against it
4. Buy more PT-sUSDe
5. Repeat — up to whatever LTV the lending market allows

The Aave-Ethena footprint of **$6.4–6.6B** (as of April 2026) is primarily this loop. Against a ~$4.5B USDe total float (June 2026), the loop exposure structurally exceeds unit supply on a leveraged basis — and because the float has been contracting while the loop has not, that gap is widening rather than closing. Chaos Labs has explicitly debated USDe risk caps and looping concentrations on Aave governance forums — see the underlying USDe retail report and the live [Aave governance forum](https://governance.aave.com) for the ongoing risk-parameter conversation.

For retail sUSDe holders not actively running these loops, the practical implication is **systemic risk transmission**: a USDe stress event would cascade through Aave / Morpho / Pendle liquidations at scale, propagating into broader DeFi well before USDe itself would solvency-fail. This is the largest tail risk for the broader ecosystem, not for sUSDe holders directly — but it's worth understanding the system you're connected to.

PT-sUSDe instruments themselves (specific maturities, fixed-yield discounts) are not covered in this report; they're treated under tidresearch's Pendle PT framework if/when retail coverage is added.

---

*This report is based on Ethena Labs' public documentation, the Ethena transparency dashboard, third-party Risk Committee analysis (LlamaRisk, Blockworks Advisory, Chaos Labs), on-chain reads of the sUSDe vault and cooldown silo, and reporting through 2026-07-15. Some information depends on Ethena's self-disclosures (institutional loan book composition, OES margining state, off-chain trade execution) that are continuously verified by the Risk Committee but not atomically reconcilable on-chain. The cooldown duration is governance-set, coverage-tiered, and changes without notice — `cooldownDuration()` on the vault is the authoritative read. The ~3.72% APY figure is a Q1-2026 anchor, not a live quote. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

## Revision history

- **2026-10-03 — audit scope and documentation outcome established; Contract & Admin held at 5.5.** ⚠️ **Documentation outcome is DISAGREE, with a split:** Ethena's current narrative docs are **silent** on how the upgrade authority is held, but their **archived bounty repository names "our ethena multisig" as `DEFAULT_ADMIN_ROLE`** where the measured arrangement is a **24-hour `TimelockController`** with the multisig downstream — a contradiction inside the issuer's own corpus rather than between us and them. ⚠️ **Audit scope corrected:** Quantstamp, a Cantina-managed/Spearbit-labelled review and Pashov are **confirmed on the sUSDe vault**; **ChainSecurity's coverage of it is not establishable**, so the five-firm framing overstated what is known, and sUSDe is a separate contract from USDe rather than an inheritor of its stack. **No located report establishes that an audited version is the deployed one.** ⚠️ **The Immunefi bounty excludes centralisation risk, leaked-key attacks and unmodified privileged-address actions** (2026-08-11 terms), so it underwrites nothing this axis measures. ✅ **None of it moves the score** — the axis is set by the admin half, and assurance cannot lift it past what the keys allow.
- **2026-10-02 — venues enumerated and Ethereum depth measured; no score moves.** Ethereum depth is a **floor of $2M inside 50bps**, marginal with the first rung subtracted. Curve holds **95.5% of $78.39M** across 140 indexed Ethereum pools; **DOLA/sUSDe alone is $64.9M, 82.8%** of it, with about $13.5M outside DOLA including direct sUSDe/USDT pairs on Uniswap v4 ($894K, $594K) and Fluid ($576K). ⚠️ **There is no Curve sUSDe/USDe pool** — the pair commonly cited under that name is Synthetix's sUSD/sUSDe, a different issuer's asset; a Curve sUSDe/USDC pool exists at **$723.26**. ⚠️ **Pendle has 2 of 17 markets live and 15 matured** — Ethereum $4.02M to 2026-11-26, Monad $20.92M to 2026-10-22. Per-chain liquidity, **venue-derived rather than ladder-measured**: Arbitrum 5.0, Blast 4.0, Base 2.5, BSC 2.5, Fraxtal 2.0, Optimism 2.0, Mantle 2.0, Monad 2.0. Nine chains, Monad included. Liquidity & Exit held at 7.0, Overall at 6.5. Enumeration is DEX-only — centralised venues uncounted, so every venue figure is a floor on coverage.
- **2026-08-29 — fee switch recorded; no score change.** Ethena tokenholders have approved directing **95% of the Ethena Foundation's net revenue** to ENA buybacks once a USDe supply milestone is reached — **$22.5m against $450m of gross protocol revenue, 5%, at the first milestone.** **It is dormant: supply is **$4,468,386,035** against a first milestone of **$7.5B — 67.8% away**.** ⚠️ **The schedule replaces the Risk Committee parameters that previously governed it** — a monthly adequacy assessment gating activation, and an ordering of Reserve Fund capitalization first, then sUSDe yields, then sENA. **The replacement text carries no reserve-fund condition.** The milestone table is an IPFS-embedded image and the supporting analysis sits in unretrieved replies; press-reported tiers are second-hand.
- **2026-08-25 — re-verified; scores held at 6.5.**
- **2026-08-23 — cooldown silo address corrected.**
- **2026-07-15 — dynamic cooldown shipped** (Ethena proposal #759): the fixed 7-day silo is replaced.
- **2026-07-14 — initial production publication.**
