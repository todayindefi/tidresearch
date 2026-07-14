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
last_verified: "2026-05-22"
featured: false
production: true
issuer: "Ethena Labs"
yield_bearing: true
volatility_score: 6.5
liquidity_score: 7.0
structural_score: 7.0
redemption_score: 5.5
overall_score: 6.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susde"
---

# sUSDe — Retail Risk Report

**Moderate risk · 6.5/10**

> **Issuer-published dashboard:** [app.ethena.fi/dashboards/transparency](https://app.ethena.fi/dashboards/transparency) — Ethena's own real-time transparency page covers both USDe and sUSDe (vault balance, supply, yield). Verified by **Chaos Labs Edge Proof of Reserves**, **LlamaRisk**, **Chainlink Proof of Reserves**, and **HT Digital** (monthly attestation). For independent risk monitoring including sUSDe-specific metrics (cooldown queue, coverage ratios), see [LlamaRisk's Ethena portal](https://portal.llamarisk.com/ethena/overview). **tidresearch also runs an independent on-chain tracker of Ethena's reserve wallets** ([live dashboard](https://tidresearch.com/dashboards/?asset=susde)) — the issuer transparency page and Risk Committee feeds above remain the backing source of record.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~3.72% APY | 7-day cooldown OR secondary (Curve, Pendle) | 7-day cooldown silo to USDe | ~27 months | Ethereum + 7 L2s/sidechains |

## Summary

sUSDe is the staked, yield-bearing form of [USDe](/reports/usde/). It's an ERC-4626 vault where holders deposit USDe and receive sUSDe shares whose value accrues as Ethena's reserve portfolio distributes yield to stakers. Launched alongside USDe in February 2024, sUSDe was originally a pure derivatives-yield product — perpetual funding rates and stETH staking flowing to stakers, producing yields in the 8–40% range depending on the funding regime.

Following the Q1 2026 architecture pivot in the underlying USDe (perp share dropped from ~93% to ~11%; ~89% now in liquid stables + institutional overcollateralized loans + RWAs — see the [USDe retail report](/reports/usde/) for the full reframing), **sUSDe's yield source has diversified materially**. Current APY is ~3.72% — lower than the pre-pivot peaks but with substantially lower variance and much-reduced tail risk of yield going negative.

Redemption to USDe runs through a **7-day cooldown silo** — sUSDe holders cannot exit instantly to the primary path. During the cooldown the position is non-transferable; it cannot be sold or used as collateral. Active governance work (LlamaRisk-authored, debated on Aave forums in March 2026) would migrate from the fixed 7-day cooldown to a **dynamic cooldown length** keyed on the liquid backing coverage ratio. Per LlamaRisk's back-test, current coverage is exceptional — **1-day 8.40× / 7-day 6.88× vs the 1.5× safety threshold** — meaning a well-implemented dynamic model could drop cooldown duration toward 0 days during normal conditions and lengthen automatically during stress.

Secondary markets are deep: Curve sUSDe/USDe and sUSDe/USDC pools, plus Pendle PT-sUSDe and YT-sUSDe markets. Historical secondary discount data is small: **mean -0.168% from fair value, maximum -1.270%** (per LlamaRisk Aave-forum analysis). The October 10, 2025 stress event produced brief sUSDe secondary detachment but no structural NAV loss; the cooldown silo functioned as designed under $1B+ unstaking pressure.

The 6.5/10 score matches USDe (which is the floor — sUSDe cannot meaningfully be safer than its underlying) and reflects (a) the improved post-pivot profile, (b) successful navigation of October 2025, and (c) deep, well-functioning secondary markets — counterbalanced by (a) the 7-day cooldown until dynamic ships and (b) massive Aave / Morpho / Pendle loop concentration that structurally exceeds USDe's float on a leveraged basis.

## What you actually earn

sUSDe distributes yield via NAV growth on the ERC-4626 vault share — no rebasing. Each share's `convertToAssets()` value grows over time as Ethena's reserve portfolio distributes yield to stakers.

The yield source has changed materially since the architecture pivot:

| Era | Source | Typical APY | Tail risk |
|---|---|---|---|
| Feb 2024 – Sep 2025 (basis-trade dominant) | Perp funding + stETH staking | 8–15%, peaks 30–40% | Yield can plateau or go negative in sustained negative funding |
| **Q1 2026 onward (post-pivot)** | Institutional lending + stable spreads + RWA yield + 11% residual basis | **~3.72%** (March 2026) | Materially reduced — credit yield is durable, not funding-dependent |

The Reserve Fund (the loss-absorption buffer underlying USDe — see the [USDe retail report](/reports/usde/) §"What October 10, 2025 actually proved" for context) is currently ~9× overcapitalized versus Risk Committee floor recommendations. There's an active proposal to redirect USDtb interest earnings from the Reserve Fund to sUSDe holders rather than build the fund further — if implemented, that lifts sUSDe APY modestly.

**A note on the pre-pivot peak yields**: Many DeFi loopers and content creators reference sUSDe APYs from 2024–2025 when funding regimes were high and the basis trade dominated. Those numbers reflect a different system. The current ~3.72% is the post-pivot reality, and the Risk Committee's view (per March 2026 Reserve Fund subcommittee post) is that the structurally lower yield with much-reduced variance is the right shape for the new architecture.

## How exit works

The redemption profile is the binding wrapper-specific constraint.

**1. Primary redemption — 7-day cooldown to USDe.**

Mechanism:

1. Call `cooldownShares()` or `cooldownAssets()` on the sUSDe vault. Your USDe is transferred from the vault to the cooldown silo (`0x8DE5a6Db4a0bA0d8Ca7Cba5cea2A65d345ed1671`) under a per-user claim.
2. Wait 7 days.
3. Call `unstake()` to claim the USDe from the silo.

During cooldown, the position is non-transferable. You cannot sell it, use it as collateral, or accelerate the timer.

**Active dynamic cooldown proposal**: LlamaRisk has authored a governance proposal (debated on Aave forums in March 2026) to migrate from fixed 7-day to a **dynamic cooldown length** tied to the liquid backing coverage ratio at a 1.5× safety factor. Per LlamaRisk:

- Current 1-day coverage: **8.40×** (vs 1.5× threshold)
- Current 7-day coverage: **6.88×** (vs 1.5× threshold)
- Historical back-test: median queue pressure 0.51×, 99th percentile 8.86×
- 11.8% of days exceed 2.0× queue pressure

LlamaRisk explicitly concludes that **no fixed cooldown of any duration is risk-defensible** under historical p99 flow data — including the alternate 3-day fixed proposal. Only the dynamic model is justified. Under the dynamic model, cooldown could drop toward 0 days during good liquid-coverage windows and lengthen automatically during stress. Implementation timing is not yet confirmed as of May 2026; if/when shipped, this lifts the wrapper's exit profile materially.

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

The ~17bps mean discount reflects the time-value of waiting through the cooldown — a holder willing to wait 7 days earns NAV; a holder needing immediate exit pays a small premium for liquidity. This is a healthy, well-functioning secondary market.

**Important — exit asymmetry note.** sUSDe has time-asymmetric exit (instant via secondary at small discount, 7-day primary at NAV) but **no access-asymmetric exit** — no KYC, no gating, no jurisdictional restriction on holding or staking. This is structurally better than tokenized RWAs that have gated primary redemption (like the cousin product reUSDe from Re Protocol, which is non-U.S. KYC only — see that report for the contrast).

## What October 10, 2025 actually proved for sUSDe specifically

The defining stress event for the underlying USDe (see [USDe retail report](/reports/usde/)) was also a real test of the sUSDe wrapper layer:

- $1B+ unstaking pressure within hours
- Cooldown silo absorbed flows without operational issues
- sUSDe secondary briefly detached from NAV (peak observed discount in this window: well within the historical -127bps max)
- No NAV loss to stakers who held through
- Per LlamaRisk's back-test, during the October 10–11 window specifically, dynamic-cooldown calculations would have **dropped cooldown duration to 0 days** because liquid coverage actually *spiked* to 2.43× the 3-day threshold as nervous holders unstaked. This is the inverse of a bank-run dynamic.

The wrapper layer survived its first major stress at scale. The cooldown silo did its job; secondary markets absorbed the discount-seekers; NAV held.

## What the contracts are doing

sUSDe is a standard ERC-4626 vault at `0x9D39A5DE30e57443BfF2A8307A4256c8797A3497` on Ethereum, with deployments on the same chains as USDe (LayerZero OFT). The vault:

- Accepts USDe deposits → mints sUSDe shares at current `convertToAssets()` NAV
- Pays yield by accumulating USDe in the vault — `convertToAssets()` grows over time, share price rises
- Routes withdrawals through the 7-day cooldown silo at `0x8DE5a6Db4a0bA0d8Ca7Cba5cea2A65d345ed1671`

The cooldown silo is a thin escrow contract — minor additional surface beyond the core vault, no known vulnerabilities.

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
| Liquidity | 7.0 | Deep Curve sUSDe/USDe and sUSDe/USDC pools + Pendle PT/YT markets. Retail can exit secondary at near-NAV in normal conditions (-17bps mean, -127bps max historical discount). Time-asymmetric exit (instant secondary vs 7-day primary) but no access-asymmetric gating. |
| Structural | 7.0 | ERC-4626 vault + cooldown silo, extensively audited (Spearbit, Cantina, Quantstamp, Pashov, ChainSecurity, plus competitive audits). Among the most-reviewed ERC-4626 implementations in production. Active dynamic-cooldown proposal would add modest mechanism complexity but materially improve risk responsiveness. |
| Redemption | 5.5 | Binding wrapper-specific constraint above the underlying floor. 7-day cooldown silo. No gating, no KYC, no fees. Active dynamic-cooldown governance proposal (LlamaRisk-authored, Aave-forum analyzed) could improve this materially — potentially down to 0 days during good liquid-coverage windows — but not yet implemented. Forward signal: a well-designed dynamic-cooldown deployment lifts this to 6.5–7.0. |
| **Overall** | **6.5** | Moderate risk — matches USDe floor; cannot meaningfully be safer than its underlying |

## Who it's for

DeFi users who want yield exposure to Ethena's post-pivot reserve portfolio and can tolerate (a) the 7-day cooldown on instant primary exit, (b) reliance on secondary markets for time-sensitive exits, (c) the same institutional credit + RWA + 11% residual basis risk profile as USDe at the underlying level, (d) systemic exposure via the Aave / Morpho / Pendle loop concentration. Comfortable with reading external Risk Committee dashboards (LlamaRisk Portal, Chaos Labs Edge PoR, Ethena Transparency Dashboard) rather than direct on-chain reserve verification.

## Who should avoid

- Anyone who needs instant guaranteed exit at NAV — the 7-day cooldown is real, and during stress the secondary discount can widen meaningfully
- Anyone whose mental model of sUSDe is anchored on pre-pivot APY (8–40%) — the current ~3.72% is the post-pivot reality
- Anyone uncomfortable with the systemic exposure that sUSDe stress would cascade through Aave / Morpho / Pendle loops
- Anyone using sUSDe as collateral on lending markets without first verifying the oracle source (NAV-based protects loopers from premature liquidation but transfers risk to lenders during prolonged cooldown queues)

## What to watch

- **Dynamic cooldown governance status.** Active LlamaRisk-authored proposal could lift the Redemption score from 5.5 toward 6.5–7.0 when implemented. Watch the [Ethena governance forum](https://gov.ethenafoundation.com) and the [LlamaRisk Aave-forum post](https://governance.aave.com/t/llamarisk-insights-ethena-susde-dynamic-cooldown/24305).
- **Cooldown silo depth.** Mass-redemption signal. Etherscan reads at `0x8DE5a6Db4a0bA0d8Ca7Cba5cea2A65d345ed1671`.
- **Secondary market discount.** Mean -17bps / max -127bps historically. Sustained widening beyond -200bps is the early-warning indicator for stress.
- **sUSDe APY trend.** ~3.72% as of March 2026. Drops below ~3% or sustained sub-3% prints would suggest reserve-portfolio yield compression beyond expectations.
- **Reserve Fund composition + USDtb interest redirect proposal.** If/when shipped, lifts sUSDe APY modestly. Tracked in monthly [Reserve Fund subcommittee posts](https://gov.ethenafoundation.com).
- **Aave / Morpho / Pendle loop concentration.** $6.4B+ leveraged exposure against $5.9B underlying USDe float — structurally larger than unit supply. Pendle PT-sUSDe is the primary growth vector per Chaos Labs Aave-forum debate.

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

The Aave-Ethena footprint of **$6.4–6.6B** (as of April 2026) is primarily this loop. Against ~$5.9B USDe total float, the loop exposure structurally exceeds unit supply on a leveraged basis. Chaos Labs has explicitly debated USDe risk caps and looping concentrations on Aave governance forums — see the underlying USDe retail report and the live [Aave governance forum](https://governance.aave.com) for the ongoing risk-parameter conversation.

For retail sUSDe holders not actively running these loops, the practical implication is **systemic risk transmission**: a USDe stress event would cascade through Aave / Morpho / Pendle liquidations at scale, propagating into broader DeFi well before USDe itself would solvency-fail. This is the largest tail risk for the broader ecosystem, not for sUSDe holders directly — but it's worth understanding the system you're connected to.

PT-sUSDe instruments themselves (specific maturities, fixed-yield discounts) are not covered in this report; they're treated under tidresearch's Pendle PT framework if/when retail coverage is added.

---

*This report is based on Ethena Labs' public documentation, the Ethena transparency dashboard, third-party Risk Committee analysis (LlamaRisk, Blockworks Advisory, Chaos Labs), on-chain reads of the sUSDe vault and cooldown silo, and reporting through 2026-05-22. Some information depends on Ethena's self-disclosures (institutional loan book composition, OES margining state, off-chain trade execution) that are continuously verified by the Risk Committee but not atomically reconcilable on-chain. The 7-day cooldown duration is governance-set and subject to change (see active dynamic-cooldown proposal). Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
