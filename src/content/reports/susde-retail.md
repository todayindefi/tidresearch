---
asset: "sUSDe"
slug: "susde"
aliases: ["sUSDe", "Staked USDe", "Ethena Staked USDe"]
chains: ["eth", "arbitrum", "base", "optimism", "bsc", "mantle", "blast", "fraxtal"]
category: "vault-share"
underlying_assets: ["USDe"]
assessment_type: "full"
audience: "retail"
date: "2026-05-22"
last_verified: "2026-07-15"
featured: false
production: true
issuer: "Ethena Labs"
yield_bearing: true
volatility_score: 6.5
liquidity_score: 7.0
structural_score: 7.0
redemption_score: 6.5
overall_score: 6.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susde"
---

# sUSDe — Retail Risk Report

**Moderate risk · 6.5/10**

> **Issuer-published dashboard:** [app.ethena.fi/dashboards/transparency](https://app.ethena.fi/dashboards/transparency) — Ethena's own real-time transparency page covers both USDe and sUSDe (vault balance, supply, yield). Verified by **Chaos Labs Edge Proof of Reserves**, **LlamaRisk**, **Chainlink Proof of Reserves**, and **HT Digital** (monthly attestation). For independent risk monitoring including sUSDe-specific metrics (cooldown queue, coverage ratios), see [LlamaRisk's Ethena portal](https://portal.llamarisk.com/ethena/overview). **tidresearch also runs an independent on-chain tracker of Ethena's reserve wallets** ([live dashboard](https://tidresearch.com/dashboards/?asset=susde)) — the issuer transparency page and Risk Committee feeds above remain the backing source of record.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~3.72% APY (Q1-2026 anchor — verify live) | Dynamic 1–7-day cooldown (1 day today) OR secondary (Curve, Pendle) | Dynamic cooldown silo to USDe | ~29 months | Ethereum + 7 L2s/sidechains |

## Summary

sUSDe is the staked, yield-bearing form of [USDe](/reports/usde/). It's an ERC-4626 vault where holders deposit USDe and receive sUSDe shares whose value accrues as Ethena's reserve portfolio distributes yield to stakers. Launched alongside USDe in February 2024, sUSDe was originally a pure derivatives-yield product — perpetual funding rates and stETH staking flowing to stakers, producing yields in the 8–40% range depending on the funding regime.

Following the Q1 2026 architecture pivot in the underlying USDe (perp share dropped from ~93% to ~11%; ~89% now in liquid stables + institutional overcollateralized loans + RWAs — see the [USDe retail report](/reports/usde/) for the full reframing), **sUSDe's yield source has diversified materially**. APY was ~3.72% as of Q1 2026 — lower than the pre-pivot peaks but with substantially lower variance and much-reduced tail risk of yield going negative. Treat that figure as a Q1-2026 anchor rather than a current quote; the rate moves with the reserve portfolio, so check a live source before sizing a position.

Redemption to USDe runs through a **cooldown silo** — sUSDe holders cannot exit instantly to the primary path. The big change since this report's last revision: **Ethena has shipped the dynamic cooldown** (proposal #759). The fixed 7-day wait is gone, replaced by a **coverage-tiered 1 / 3 / 5 / 7-day** duration that tracks USDe's liquid backing — short when coverage is comfortable, longer when it thins — plus an auto-extend safeguard for stress. **Verified on-chain 2026-07-15, the live duration is 1 day**, the mechanism's floor. During whatever cooldown applies, the position stays non-transferable; it cannot be sold or used as collateral. This materially relaxes the wrapper's binding constraint and is why the Redemption score moves from 5.5 to 6.5 in this revision.

Secondary markets are deep: Curve sUSDe/USDe and sUSDe/USDC pools, plus Pendle PT-sUSDe and YT-sUSDe markets. Historical secondary discount data is small: **mean -0.168% from fair value, maximum -1.270%** (per LlamaRisk Aave-forum analysis). The October 10, 2025 stress event produced brief sUSDe secondary detachment but no structural NAV loss; the cooldown silo functioned as designed under $1B+ unstaking pressure.

The 6.5/10 score matches USDe (which is the floor — sUSDe cannot meaningfully be safer than its underlying) and reflects (a) the improved post-pivot profile, (b) successful navigation of October 2025, and (c) deep, well-functioning secondary markets — counterbalanced by (a) a cooldown that, while now much shorter, can still step back toward 7 days if coverage thins and (b) massive Aave / Morpho / Pendle loop concentration that structurally exceeds USDe's float on a leveraged basis.

## What you actually earn

sUSDe distributes yield via NAV growth on the ERC-4626 vault share — no rebasing. Each share's `convertToAssets()` value grows over time as Ethena's reserve portfolio distributes yield to stakers.

The yield source has changed materially since the architecture pivot:

| Era | Source | Typical APY | Tail risk |
|---|---|---|---|
| Feb 2024 – Sep 2025 (basis-trade dominant) | Perp funding + stETH staking | 8–15%, peaks 30–40% | Yield can plateau or go negative in sustained negative funding |
| **Q1 2026 onward (post-pivot)** | Institutional lending + stable spreads + RWA yield + 11% residual basis | **~3.72%** (March 2026) | Materially reduced — credit yield is durable, not funding-dependent |

The Reserve Fund (the loss-absorption buffer underlying USDe — see the [USDe retail report](/reports/usde/) §"What October 10, 2025 actually proved" for context) is currently ~9× overcapitalized versus Risk Committee floor recommendations. There's an active proposal to redirect USDtb interest earnings from the Reserve Fund to sUSDe holders rather than build the fund further — if implemented, that lifts sUSDe APY modestly.

**A note on the pre-pivot peak yields**: Many DeFi loopers and content creators reference sUSDe APYs from 2024–2025 when funding regimes were high and the basis trade dominated. Those numbers reflect a different system. The post-pivot reality is a single-digit rate — ~3.72% was the Q1-2026 print, and it is used throughout this report as an anchor for the *shape* of post-pivot yield, not as a live quote. Check Ethena's dashboard for the current rate. The Risk Committee's view (per March 2026 Reserve Fund subcommittee post) is that the structurally lower yield with much-reduced variance is the right shape for the new architecture.

## How exit works

The redemption profile is the binding wrapper-specific constraint.

**1. Primary redemption — dynamic 1–7-day cooldown to USDe (1 day today).**

Mechanism:

1. Call `cooldownShares()` or `cooldownAssets()` on the sUSDe vault. Your USDe is transferred from the vault to the cooldown silo (`0x8DE5a6Db4a0bA0d8Ca7Cba5cea2A65d345ed1671`) under a per-user claim.
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

The deeper secondary market is the alternative to waiting out the cooldown:

- **Curve** sUSDe/USDe pool (deep)
- **Curve** sUSDe/USDC pool
- **Pendle** PT-sUSDe markets (multiple maturities) — the highest-leverage sUSDe wrapper, used for fixed-yield exposure and loop strategies
- **Pendle** YT-sUSDe markets — pure yield-token exposure
- Various Morpho / Euler / Aave LP-style positions

Historical secondary discount (per LlamaRisk March 2026 Aave-forum analysis):

- Mean deviation from fair value: **-0.168%** (about 17bps below `convertToAssets()` NAV)
- Maximum observed discount: **-1.270%** (about 127bps)
- No sustained -5%+ detachment in 27 months of operation

The ~17bps mean discount reflects the time-value of waiting through the cooldown — a holder willing to wait it out earns NAV; a holder needing immediate exit pays a small premium for liquidity. Note that this discount history was accumulated under the old fixed 7-day regime; a 1-day cooldown gives holders less reason to pay up for immediacy, so the mean discount may compress from here. That's a reasonable expectation, not an observed fact yet.

**Important — exit asymmetry note.** sUSDe has time-asymmetric exit (instant via secondary at small discount, primary at NAV after the dynamic 1–7-day cooldown — 1 day today) but **no access-asymmetric exit** — no KYC, no gating, no jurisdictional restriction on holding or staking. This is structurally better than tokenized RWAs that have gated primary redemption (like the cousin product reUSDe from Re Protocol, which is non-U.S. KYC only — see that report for the contrast).

## What October 10, 2025 actually proved for sUSDe specifically

The defining stress event for the underlying USDe (see [USDe retail report](/reports/usde/)) was also a real test of the sUSDe wrapper layer:

- $1B+ unstaking pressure within hours
- Cooldown silo absorbed flows without operational issues
- sUSDe secondary briefly detached from NAV (peak observed discount in this window: well within the historical -127bps max)
- No NAV loss to stakers who held through
- Per LlamaRisk's back-test, during the October 10–11 window specifically, dynamic-cooldown calculations would have **driven cooldown duration to its minimum** because liquid coverage actually *spiked* to 2.43× the 3-day threshold as nervous holders unstaked. This is the inverse of a bank-run dynamic. (That back-test was run against the proposed model, which contemplated a 0-day floor; the mechanism Ethena actually shipped floors at 1 day.)

The wrapper layer survived its first major stress at scale. The cooldown silo did its job; secondary markets absorbed the discount-seekers; NAV held. Worth being precise about what this does and doesn't tell you: October 2025 tested the **fixed 7-day** silo, since that's what was deployed at the time. The dynamic mechanism that governs exits today has not yet been through a comparable stress event — the back-test above is a simulation of how it would have behaved, not a record of how it did.

## What the contracts are doing

sUSDe is a standard ERC-4626 vault at `0x9D39A5DE30e57443BfF2A8307A4256c8797A3497` on Ethereum, with deployments on the same chains as USDe (LayerZero OFT). The vault:

- Accepts USDe deposits → mints sUSDe shares at current `convertToAssets()` NAV
- Pays yield by accumulating USDe in the vault — `convertToAssets()` grows over time, share price rises
- Routes withdrawals through the cooldown silo at `0x8DE5a6Db4a0bA0d8Ca7Cba5cea2A65d345ed1671`, for the duration returned by `cooldownDuration()` (dynamic 1–7 days; 86400s = 1 day as of 2026-07-15)

The cooldown silo is a thin escrow contract — minor additional surface beyond the core vault, no known vulnerabilities. The dynamic cooldown adds a governance-set duration parameter on top; `cooldownDuration()` is the authoritative read for what your exit will actually cost in time.

For lending protocols that use sUSDe as collateral (Aave, Morpho, Pendle PT integrations), the standard pricing is `convertToAssets()` — i.e., the oracle reads NAV, not secondary market price. This has a subtle structural consequence: during a sUSDe secondary discount window, the collateral oracle keeps reading NAV (so loopers don't get prematurely liquidated), but the realized exit price is the secondary discount (so lenders may eat the gap if the cooldown queue blows out). Verify oracle source per lending market before sizing leveraged sUSDe positions.

## Audits & security

Inherits the USDe audit stack:

| Firm | Tier |
|---|---|
| Spearbit | Top-tier |
| Cantina | Top-tier |
| Quantstamp | Mid-tier |
| Pashov Audit Group | Mid-tier |
| ChainSecurity | Mid-tier |

Plus multiple competitive audits. Among the most-reviewed ERC-4626 implementations in production. No known exploits across 27+ months.

Live monitoring: the same Risk Committee infrastructure that monitors USDe covers sUSDe — **Chaos Labs Edge Proof of Reserves**, **LlamaRisk Risk Monitor Portal**, **Chainlink Proof of Reserves**, **HT Digital** monthly attestation, **Kraken Custody** weekly PoR (since January 2026). The sUSDe-specific metrics worth tracking are cooldown queue depth, vault TVL, and the live secondary discount on Curve / Pendle — all visible on the dashboards above.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 6.5 | NAV-accruing share with no directional peg. Architecture pivot in underlying USDe materially reduces tail risk of yield going negative — basis trade no longer dominant return engine. Current ~3.72% APY is compressed vs pre-pivot range but with much lower variance. Survived October 2025 without share-price loss; secondary discount peaked at -127bps and resolved within hours. |
| Liquidity | 7.0 | Deep Curve sUSDe/USDe and sUSDe/USDC pools + Pendle PT/YT markets. Retail can exit secondary at near-NAV in normal conditions (-17bps mean, -127bps max historical discount). Time-asymmetric exit (instant secondary vs the dynamic 1–7-day primary, 1 day today) but no access-asymmetric gating. |
| Structural | 7.0 | ERC-4626 vault + cooldown silo, extensively audited (Spearbit, Cantina, Quantstamp, Pashov, ChainSecurity, plus competitive audits). Among the most-reviewed ERC-4626 implementations in production. The shipped dynamic cooldown adds modest mechanism complexity (a coverage-keyed duration parameter plus auto-extend) but materially improves risk responsiveness — net unchanged. |
| Redemption | 6.5 | **Raised from 5.5 — the dynamic cooldown shipped** (proposal #759; verified on-chain 2026-07-15 at `cooldownDuration()` = 1 day). The fixed 7-day silo is replaced by a coverage-tiered 1/3/5/7-day duration with a stress auto-extend safeguard (daily unstaking > 2× 14d-avg *and* 3-day coverage < 1.5× → +1 day). No gating, no KYC, no fees. The wrapper's dominant binding constraint is now much smaller. Capped at 6.5 rather than 7.0 because the duration can still step back to 7 days under thin coverage, and sUSDe stays floored by USDe. |
| **Overall** | **6.5** | Moderate risk — matches USDe floor; cannot meaningfully be safer than its underlying |

## Who it's for

DeFi users who want yield exposure to Ethena's post-pivot reserve portfolio and can tolerate (a) a cooldown on primary exit that is 1 day today but can lengthen to as much as 7 under thin coverage, (b) reliance on secondary markets for time-sensitive exits, (c) the same institutional credit + RWA + 11% residual basis risk profile as USDe at the underlying level, (d) systemic exposure via the Aave / Morpho / Pendle loop concentration. Comfortable with reading external Risk Committee dashboards (LlamaRisk Portal, Chaos Labs Edge PoR, Ethena Transparency Dashboard) rather than direct on-chain reserve verification.

## Who should avoid

- Anyone who needs instant guaranteed exit at NAV — the cooldown is real even at 1 day, it is not guaranteed to stay at 1 day, and during stress the secondary discount can widen meaningfully
- Anyone whose mental model of sUSDe is anchored on pre-pivot APY (8–40%) — post-pivot yield is a single-digit rate (~3.72% as of Q1 2026)
- Anyone uncomfortable with the systemic exposure that sUSDe stress would cascade through Aave / Morpho / Pendle loops
- Anyone using sUSDe as collateral on lending markets without first verifying the oracle source (NAV-based protects loopers from premature liquidation but transfers risk to lenders during prolonged cooldown queues)

## What to watch

- **The live cooldown duration.** Now the single most useful number to check before an exit, because it moves. Read `cooldownDuration()` on the vault directly (1 day / 86400s as of 2026-07-15); a step up to 3, 5, or 7 days is the mechanism telling you USDe's liquid coverage has thinned. Background on the design: the [LlamaRisk Aave-forum post](https://governance.aave.com/t/llamarisk-insights-ethena-susde-dynamic-cooldown/24305) and the [Ethena governance forum](https://gov.ethenafoundation.com).
- **Cooldown silo depth.** Mass-redemption signal. Etherscan reads at `0x8DE5a6Db4a0bA0d8Ca7Cba5cea2A65d345ed1671`.
- **Secondary market discount.** Mean -17bps / max -127bps historically. Sustained widening beyond -200bps is the early-warning indicator for stress.
- **sUSDe APY trend.** ~3.72% as of March 2026, used here as an anchor rather than a live quote — verify the current rate on Ethena's dashboard. Sustained sub-3% prints would suggest reserve-portfolio yield compression beyond expectations.
- **Reserve Fund composition + USDtb interest redirect proposal.** If/when shipped, lifts sUSDe APY modestly. Tracked in monthly [Reserve Fund subcommittee posts](https://gov.ethenafoundation.com).
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

*Revision history: 2026-07-15 — dynamic cooldown confirmed SHIPPED (Ethena proposal #759): fixed 7-day silo replaced by a coverage-tiered 1/3/5/7-day duration with stress auto-extend, verified on-chain at 1 day. Redemption re-scored 5.5 → 6.5; overall held at 6.5 (USDe-floored). Reconciled underlying USDe float to ~$4.5B (June 2026) and reframed the ~3.72% APY as a Q1-2026 anchor. 2026-07-14 — initial production publish.*
