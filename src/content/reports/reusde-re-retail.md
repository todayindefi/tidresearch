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
last_revised: "2026-08-27"
featured: false
production: true
issuer: "Resilience BVI Ltd."
market_cap_approx: 19852000
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

**Sized as at 2026-08-27, both legs measured on-chain:** reUSDe is **9.14% of the senior tranche** — senior reUSD stands at **$217.2M on Ethereum** (198,103,604 tokens at NAV 1.096411, contract [`0x5086bf35…0c72`](https://etherscan.io/address/0x5086bf358635b81d8c47c66d1c8b9e567db70c72)). Re's `/tvl` endpoint reports **$233.7M all-chain**, which is **issuer-reported** and labelled as such. **The ordering is what a holder should carry:** Re Protocol's equity absorbs losses first, this tranche second, and the senior is protected until this one is exhausted. **Beneath both sits about $96.00M of subordinated capital** — and an apparent $77M-versus-$20M contradiction in that layer is resolved: those are **two different quantities, not competing snapshots**, and the non-tokenised capital has never been below **$55.1M**, so the conservative reading is the correct one. ⚠️ **An earlier reading of Re's disclosures appeared to put the junior layer at either about $77M or about $20M, and that looked like competing snapshots. It was not — they are different quantities**, resolved against Re's own TVL history: **the non-tokenised capital has never been below $55.1M.** **The conservative reading is the correct one, and it is what the loss-buffer story rests on** — so the figures above are the ones to carry, not the $20M reading.

Re-measured on-chain **2026-08-27**: reUSDe has **$19.85M TVL** across **14,094,070 tokens** at a NAV of **1.408519**, on Ethereum only (no multi-chain deployment, no CEX listing) — contract [`0xddc0f880…cc5a`](https://etherscan.io/address/0xddc0f880ff6e4e22e4b74632fbb43ce4df6ccc5a). **The NAV is not issuer-reported:** Re's own `/tvl` implies 1.408519 against measured supply and **CoinGecko independently prints $1.41**, 0.03% apart. NAV has grown from $1.00 at inception — about **41% lifetime appreciation**, on Ethereum only (no multi-chain deployment, no CEX listing). NAV has grown from $1.00 at inception — a **40% lifetime appreciation** reflecting the higher spread plus sUSDe yield on idle capital.

⚠️ **The total barely moved since the May read and the composition did, which matters more for a loss buffer than the headline.** In May this was $19.11M across 14.24M tokens at about $1.34. **Supply fell about 4.7% while NAV rose about 4.5%, so the product held near $19M while the tranche itself shrank.** **An unchanged number is not evidence of an unchanged instrument:** fewer tokens at a higher NAV is a different thing from more tokens at a lower one, and it means **redemption pressure has already run through this tranche.**

The 3.5/10 score is **1.5 points below sibling reUSD** for structural reasons that are not preferences:

1. **Junior position** — reUSDe absorbs losses before reUSD
2. **Quarterly-gated redemption** — request windows open only in the first 72 hours of each fiscal quarter, with a 40-day minimum hold before any redemption eligibility, and pro-rata gating if requests exceed available surplus
3. **Thin secondary liquidity** — one Curve pool, no CEX listing, and a small holder base. Worst-case time-to-exit can extend across multiple quarters under stress. ⚠️ **The depth and holder figures behind this point are from 2026-05-18 and were not re-measured in the 08-24 pass — see the liquidity section, where they are labelled.**

This is not a yield-bump variant of reUSD. It is a different risk-class instrument — closer to a tokenized private credit position than a yield-bearing stable.

## What you actually earn

Mezzanine-tranche reinsurance yield, calculated daily as a **deployment-weighted blend**:

- **Deployed capital** earns reinsurance program premiums + an 8.5% fixed spread
- **Undeployed capital** earns the sUSDe rate + the same 8.5% spread

Per Re's published yield model: "reUSDe accrues daily from blended deployed and undeployed capital returns, plus a fixed spread." Current dashboard APY is ~12%; Re publishes a historical realized band of 16–25% — yield can run materially higher than current spot when reinsurance deployment is well-priced. Yield accrues via NAV growth; no rebasing.

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

⚠️ **A window has run since this report was first written, and it moved the tranche.** Measured 2026-08-24: **the July window executed and supply fell from 14.24M to 13,568,423 tokens through it** — roughly **4.7% of the tranche leaving**. ⚠️ **The fill rate is NOT measured, and it is the number that matters.** A pro-rata fill below 100% would mean requests exceeded available surplus, which is a **scoring event rather than a data point**. **It cannot be inferred from the supply drop**, because redemptions and mint-side changes both move supply and the two are not separable from the total alone. **Recorded as unmeasured rather than estimated**, and it is the first thing to check at the next window.

**2. Secondary market (the only path for U.S. persons, and thin for everyone):**
- Single Curve REUSDE/sUSDe pool on Ethereum
- **Not re-measured since 2026-05-18**, when daily volume was about **$59K** (CoinGecko) and there were **327 holders**
- No CEX listing
- No multi-chain deployment

⚠️ **Read those two figures as dated, not current.** The 2026-08-24 pass re-measured supply, NAV and the tranche ratios and **did not reach Curve depth, volume or holder count.** They are published here because a stale liquidity picture on an asset this thin is still more useful to a reader than silence — **but a figure that has not been re-checked is not evidence about today**, and the Liquidity axis below rests on them.

On the May volume figure, a retail-size exit of $50–100K was roughly one day's volume. **Pricing has shown wide variance not tied to NAV.** Measured 2026-08-27: all-time high **$1.64 (2025-08-23), unchanged**; all-time low **$0.968123**; current price **$1.41**. ⚠️ **Correcting this report: it previously published the low as $1.05 and the peak-to-trough spread as 56%. Both were wrong. The measured spread is about 69%** — and the correction is not only a magnitude. ⚠️ **The low is below par.** At $0.968 the secondary market priced this token beneath its $1.00 issue price, at a time when NAV was above it — so the gap between market price and NAV has been wider, and in a worse direction, than this report described. **A holder needing to exit at the wrong moment has historically faced a discount to NAV of more than 30%, not the ~20% the old figures implied.** This is reflexive thin-market pricing, both directions. Forward, the same illiquidity that drove that variance is what defines stress-exit pricing.

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
| Volatility | 3.5 | NAV is structurally exposed to underwriting losses (drawdowns are designed, not anomalous). Measured 2026-08-27: peak-to-trough spread about **69%** (ATH $1.64 / ATL **$0.968**) on thin volume — **wider than the 56% this report previously published, and with the low below par.** ⚠️ **Held at 3.5, not cut:** the rationale already priced reflexive thin-market pricing and designed NAV drawdowns, so the corrected extremes make the existing mark better-supported rather than revealing an unpriced drag. **A hold on a corrected input, stated as a hold.** |
| Liquidity | 2.5 | One Curve pool, single chain, no CEX listing, small holder base. Primary redemption is quarterly-gated with a 40-day minimum hold. ⚠️ **The depth, volume and holder inputs to this axis date from 2026-05-18 and were not re-measured on 08-24** — the axis is held rather than re-derived, and a re-read could move it in either direction. |
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

reUSDe sits between Re Protocol's own equity (which Re labels "junior tranche capital", first loss) and reUSD (senior, last loss). The structure means:
- "Normal" underwriting losses are absorbed by Re Protocol equity — reUSDe is untouched
- "Moderate" losses hit reUSDe — NAV drops, reUSD is still protected
- "Catastrophic" losses exhausting reUSDe then hit reUSD

The relative sizing of equity, reUSDe, and reUSD vs the underlying reinsurance book is the key solvency question, and it is **not publicly disclosed in granular form**. The mezzanine premium exists because reUSDe holders accept this layered exposure with imperfect visibility into the layer thicknesses.

If you want senior protection at lower yield: see [reUSD](/reports/reusd-re/).

## A note on Re Points

Re Protocol runs a loyalty points program surfaced on the reUSDe asset dashboard. Current multipliers for reUSDe strategies: Pendle YT 30x, Pendle LP 30x, **Curve LP (reUSDe/sUSDe) 20x**. Points have no current token, no published conversion mechanism, and no expiry disclosure. **Treat as marketing optionality, not yield.** For reUSDe specifically, the Curve LP multiplier creates incentive for liquidity provision, which marginally improves secondary depth — worth tracking, since thin Curve liquidity is reUSDe's largest exit-side risk.

---

*This report is based on Re Protocol's public documentation, on-chain reads, and the live transparency dashboard at [app.re.xyz](https://app.re.xyz) through 2026-05-18. Some information depends on issuer disclosures (specific trust bank counterparty, individual reinsurance carriers, tranche sizing relative to underwriting book) that are not yet independently verified. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

---

*Revision history: 2026-08-27 — **first publication, after a refresh that held once and then resolved.** ⚠️ **The refresh surfaced two figures contradicting the live [reUSD report](/reports/reusd-re/) — senior-tranche size and this token's own supply — and publication was held rather than settled by picking the newer file.** **That was the right call: the newer file was the wrong one, by 23.5%.** Both legs were then re-measured on-chain on 2026-08-27 and the contradiction resolved in favour of the reading this coverage already carried. ⚠️ **The lesson is worth more than the numbers: a contradiction is not resolvable by timestamp.** The stale figure sat in the file with the *later* stamp, because a date records when a file was touched, not when its contents were measured. Written 2026-05-18 and held unpublished since. ⚠️ **It is published now because the live [reUSD report](/reports/reusd-re/) describes this tranche as its loss buffer and had five links to a page that returned 404** — a reader checking whether the buffer beneath them was real could not reach it. Those links were removed on 2026-08-26 as a stopgap; this restores them properly. **Refreshed rather than date-bumped.** Measured 2026-08-24: TVL **$19.00M** across **13,568,423 tokens** at NAV **$1.400**; **10.83% of the senior tranche**, with senior reUSD at **$175.5M on Ethereum** and **$96.00M of subordinated capital** beneath both. ⚠️ **The headline barely moved and the tranche did.** May read $19.11M across 14.24M tokens at about $1.34; supply fell about 4.7% while NAV rose about 4.5%, so the product held near $19M. **An unchanged number is not evidence of a checked number** — and the composition change is the finding, because **the July redemption window executed and roughly 4.7% of the tranche left through it.** ⚠️ **Published as unmeasured rather than estimated:** the July window's **pro-rata fill rate** (a sub-100% fill is a scoring event, and it cannot be inferred from the supply drop, since mints move supply too), Curve pool depth and daily volume, holder count, realized APY against the 12% contractual target, whether the ATH/ATL extremes still stand, and any claim event touching the mezzanine. **The Liquidity axis rests on the May inputs and is held rather than re-derived.** **Also resolved and carried in:** an apparent $77M-versus-$20M contradiction in the junior layer was not competing snapshots but two different quantities — non-tokenised capital has never been below $55.1M, and the conservative reading is correct. **Provenance, since it is scoring-relevant on a private-credit asset with no third-party monitor:** supply, NAV and the tranche ratios are independent on-chain reads; Re's `/tvl` endpoint is the source for the all-chain senior figure and is labelled where used. **Scores unchanged from the staged draft** (Volatility 3.5 / Liquidity 2.5 / Structural 4.5 / Redemption 2.5 / Overall 3.5) — nothing measured moved an axis. `last_verified` stays **2026-05-18** because the liquidity layer was not re-read; `last_revised` is 2026-08-27. **The card will show both, which is the honest summary of this page: a solvency picture measured three days ago and a liquidity picture measured in May.** *
