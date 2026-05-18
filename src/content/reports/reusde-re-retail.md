---
asset: "reUSDe (Re Protocol)"
slug: "reusde-re"
aliases: ["reUSDe (Re Protocol)", "Resilience reUSDe", "REUSDE"]
chains: ["eth"]
category: "vault-share"
assessment_type: "full"
audience: "retail"
date: "2026-05-18"
last_verified: "2026-05-18"
featured: false
issuer: "Resilience BVI Ltd."
audited_reserves: true
market_cap_approx: 19110000
volatility_score: 3.5
liquidity_score: 2.5
structural_score: 4.5
redemption_score: 2.5
overall_score: 3.5
live_dashboard_url: "https://app.re.xyz/reusde"
---

# reUSDe (Re Protocol) — Retail Risk Report

**Significant risk · 3.5/10**

> **Issuer-published dashboard:** [app.re.xyz/reusde](https://app.re.xyz/reusde) — this is **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, historical charts, capital tranching diagram, and Chainlink Proof of Reserves links. It is the canonical source for live metrics on this asset. tidresearch does not currently run an independent dashboard for reUSDe.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~12.0% APY | Curve REUSDE/sUSDe pool | Quarterly windows (72h), 40-day min hold, pro-rata | ~11 months | Ethereum |

## Summary

reUSDe is the **mezzanine tranche** of Re Protocol's reinsurance capital structure — the junior sibling of [reUSD](/reports/reusd-re/). It earns a higher spread (8.5% over the risk-free rate, currently ~12% APY) in exchange for absorbing reinsurance losses **before reUSD does**.

In the three-tier waterfall: Re Protocol's own equity is the first loss, **reUSDe is the second loss**, and reUSD is protected until reUSDe is fully depleted. The structural premise is that reUSDe holders are paid to be contingent capital in a real insurance program.

As of 2026-05-18, reUSDe has **$19.11M TVL** across 14.24M tokens on Ethereum only (no multi-chain deployment, no CEX listing). NAV has grown from $1.00 at inception to $1.33 — a ~33% lifetime appreciation reflecting the higher spread plus sUSDe yield on idle capital.

The 3.5/10 score is **1.5 points below sibling reUSD** for structural reasons that are not preferences:

1. **Junior position** — reUSDe absorbs losses before reUSD
2. **Quarterly-gated redemption** — request windows open only in the first 72 hours of each fiscal quarter, with a 40-day minimum hold before any redemption eligibility, and pro-rata gating if requests exceed available surplus
3. **Thin secondary liquidity** — one Curve pool, ~$59K/day, no CEX listing, 327 holders. Worst-case time-to-exit can extend across multiple quarters under stress.

This is not a yield-bump variant of reUSD. It is a different risk-class instrument — closer to a tokenized private credit position than a yield-bearing stable.

## What you actually earn

Mezzanine-tranche reinsurance yield: **risk-free rate + 8.5% spread** (vs reUSD's 2.5%), currently around 12% APY (live on dashboard). Re Protocol publishes historical realized returns of 16–25% — yield can run materially higher than current spot when reinsurance deployment is well-priced. Yield accrues via NAV growth; no rebasing.

**Important:** the 12% is contractual / target yield. Realized yield CAN go negative if a reinsurance loss event exhausts Re Protocol's equity buffer and hits the mezzanine. That has not happened yet — but the design says it can, and 11 months in market is not long enough to draw conclusions either way about underwriting outcomes.

## How exit works

The redemption profile is the binding constraint on the assessment:

**1. Primary redemption (non-U.S. KYC only):**
- **Request window:** First **72 hours** of each fiscal quarter
- **Minimum hold:** **40 days** from mint before any redemption eligibility
- **Gate:** End-of-quarter actuarial review + regulator approval before settlement
- **Settlement:** Up to 5 business days post-approval, **pro-rata** if requests exceed surplus
- **Rollover:** Unfilled balance queues for the next quarter
- **Worst case:** A non-U.S. holder who narrowly misses a quarter-open window AND faces a pro-rata gate could wait multiple quarters — potentially 6–9 months — for full capital return

**2. Secondary market (the only path for U.S. persons, and thin for everyone):**
- Single Curve REUSDE/sUSDe pool on Ethereum
- ~$59K daily volume (per CoinGecko, May 2026)
- No CEX listing
- No multi-chain deployment
- 327 total holders

A retail-size exit of $50–100K is roughly one day's volume. **Pricing has already shown wide variance not tied to NAV:** all-time high $1.64 (Aug 2025), all-time low $1.05 (Jul 2025) — a 56% peak-to-trough spread inside a window where NAV likely moved less than 5%. This is reflexive thin-market pricing, both directions. Forward, the same illiquidity that drove that variance is what defines stress-exit pricing.

## What the contracts are doing

- **Token contract:** ERC-1967 upgradeable proxy at `0xdDC0f880ff6e4e22E4B74632fBb43Ce4DF6cCC5a` (Ethereum only)
- **Same implementation logic as reUSD** (`0xb5276c43...DEb4a21D4`) — shared codebase, shared risk surface
- **Custody:** Fireblocks MPC multisig + U.S. trust bank §114 Reinsurance Trust Account (same stack as reUSD)
- **Attestations:** Daily off-chain reserve attestations by The Network Firm; **Chainlink Proof of Funds** feed published 24/7
- **Annual audit:** Grant Thornton (Cayman) — same as reUSD

## Audits & security

- **Hacken (Aug 2024)** is the only published audit, covering an earlier version of the shared implementation. ~21 months stale on current logic.
- **No reUSDe-specific audit** has been published. reUSDe and reUSD share implementation logic but differ materially in redemption mechanics and tranche accounting, so a shared audit may not cover the divergent reUSDe-specific code paths.
- **No Etherscan-submitted audit** for the current implementation
- **Upgrade authority** gated by AccessControl roles managed through Fireblocks MPC multisig; on-chain timelock not visible on the proxy interface

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 3.5 | NAV is structurally exposed to underwriting losses (drawdowns are designed, not anomalous). Secondary price has a 56% historical spread (ATH $1.64 / ATL $1.05) on thin volume. |
| Liquidity | 2.5 | ~$59K daily volume on one Curve pool, single chain, no CEX listing, 327 holders. Primary redemption is quarterly-gated with 40-day minimum hold. |
| Structural | 4.5 | Same ERC-1967 proxy + Fireblocks MPC + stale Hacken audit as reUSD. Junior-tranche position adds asymmetric risk. No reUSDe-specific audit despite divergent code paths. |
| Redemption | 2.5 | **Binding constraint.** Quarterly windows + 40-day minimum hold + pro-rata gating + U.S.-person exclusion + thin secondary venue. Worst-case time-to-full-exit measured in quarters. |
| **Overall** | **3.5** | Significant risk — credibly engineered for the asset class, but a tokenized mezzanine reinsurance tranche with quarterly liquidity is structurally different from a yield-bearing stablecoin. |

## Who it's for

- **Non-U.S. yield-seekers** comfortable with multi-quarter exit horizons who treat this as an illiquid private-credit allocation, not a cash equivalent. Size as 2–5% portfolio sleeve maximum.
- Investors specifically seeking **reinsurance underwriting yield** as portfolio diversification (low correlation to crypto / equity drawdowns, high correlation to insurance loss events).

## Who should avoid

- **U.S. persons at any meaningful size.** No primary redemption + thin secondary pool = no realistic exit at NAV. Exploratory amounts only.
- **Anyone using this as collateral in a leveraged position.** A $50K secondary sell can move the Curve pool meaningfully; market-priced oracles are structurally unsafe for this asset.
- **Anyone needing predictable quarterly liquidity.** Pro-rata gating + 40-day minimum hold + rollover means worst-case scenarios involve multiple quarters of waiting.
- **Anyone who wants the senior reinsurance exposure with better liquidity.** [reUSD](/reports/reusd-re/) (the senior sibling) is the appropriate product if you want Re Protocol exposure without the mezzanine constraints.

## What to watch

- **[Re Protocol's issuer dashboard](https://app.re.xyz/reusde)** for current APY, TVL, supply. Yield chart is essentially flat at the contractual rate (12% as of 2026-05-18); meaningful deviations would signal an underwriting event.
- **NAV trajectory.** A real claim event will show here first. Sudden NAV drawdown is the bottom-up signal that the equity buffer has been exhausted and the mezzanine is absorbing losses.
- **Curve REUSDE/sUSDe pool depth.** ~$59K daily is thin; pool drainage or sustained imbalance is the leading signal that secondary exit is deteriorating.
- **Primary redemption fill rates** after each quarterly window. Pro-rata fills <100% indicate stress on the surplus capital pool.
- **Carrier counterparty disclosures.** Specific reinsurance carriers are not publicly named. Any disclosure (or independent identification) is a material risk-information upgrade.

## A note on the tranche structure

reUSDe sits between Re Protocol's own equity (first loss) and reUSD (senior, last loss). The structure means:
- "Normal" underwriting losses are absorbed by Re Protocol equity — reUSDe is untouched
- "Moderate" losses hit reUSDe — NAV drops, reUSD is still protected
- "Catastrophic" losses exhausting reUSDe then hit reUSD

The relative sizing of equity, reUSDe, and reUSD vs the underlying reinsurance book is the key solvency question, and it is **not publicly disclosed in granular form**. The mezzanine premium exists because reUSDe holders accept this layered exposure with imperfect visibility into the layer thicknesses.

If you want senior protection at lower yield: see [reUSD](/reports/reusd-re/).

---

*This report is based on Re Protocol's public documentation, on-chain reads, and the live transparency dashboard at [app.re.xyz](https://app.re.xyz) through 2026-05-18. Some information depends on issuer disclosures (specific trust bank counterparty, individual reinsurance carriers, tranche sizing relative to underwriting book) that are not yet independently verified. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
