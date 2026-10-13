---
asset: "reUSDe (Re Protocol)"
slug: "reusde-re"
aliases: ["reUSDe (Re Protocol)", "Resilience reUSDe", "REUSDE"]
chains: ["eth"]
category: "vault-share"
assessment_type: "full"
date: "2026-05-18"
#  `last_verified` HOLDS at 2026-05-18 deliberately. The figures on this page
# have been re-measured repeatedly since, but the structural material —
# contract architecture, audit posture, custody, redemption mechanics — still
# dates from May and has not been re-read. Do not bump this on a sweep; the
# body says plainly which half is current.
last_verified: "2026-05-18"
last_revised: "2026-10-13"
featured: false
# MOVED BACK TO STAGING 2026-08-31, deliberately — do not re-promote on a
# freshness or completeness sweep.  The site owner's rule is that THIS REPORT
# AND ITS DASHBOARD PROMOTE TOGETHER, gated on a puppeteer verification pass.
# See reusd-re.md for the full gate. The reUSD monitor's axis 5 now renders,
# but its collateral ratio is a permanent honest blank (Re publishes combined
# reUSD + reUSDe reserves with no asset-attributed denominator), and
#  `?asset=reusde-re` RENDERS — confirmed by backing-monitor in a browser
# 2026-10-04, six axes, axis 3 showing Authored 2/10. Feed landed 01:11.
#  But it is NOT listed on their index grid: visibility is gated by
# `published: true`, which this slug does not carry, so the page is reachable
# by direct link only. `report_status` tracks OUR report's availability and
# gates nothing — the earlier inference was right, now confirmed by bm.
# TO PROMOTE: both dashboards complete and verified IN A BROWSER, then flip
# both reports together. Checked before demoting: no `production: true` report
# links here, so nothing 404s on prod (only frax.md links in, and it is staged).
production: false
issuer: "Resilience BVI Ltd."
market_cap_approx: 21162000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#  UNLIKE reusd-re, THE MOVE HERE IS A GENUINE DOWNGRADE AND READS AS ONE.
# `overall_score` 3.5 -> 3.0, driven by exit. This one DOES belong in the
# revision history.
#  `liquidity_score` 2.0, and the path there is worth knowing before
# editing this axis. It went 2.5 -> 1.5 on a Curve `get_dy` measurement
# ($15,461 of 2% depth), then 1.5 -> 2.0 when the tension the page had
# STATED RATHER THAN RESOLVED was reconciled: there is a DIRECT
# reUSDe/USDC market on Uniswap v4 that the original ladder never
# enumerated, and it carries 90.751% of a $100K exit against Curve's
# 9.249%.  THE 1.5 WAS WRONG-HARSH — it measured one venue and published
# it as the exit, and a wrong-harsh liquidity score argues for exiting into
# a thin market that is not the market.
#  IT RISES ONLY TO 2.0 BECAUSE AXIS 3 IS THE WORSE LEG. Redemption is 2.0
# and did not move: no continuously available primary route, pro-rata
# announced windows and no primary channel for U.S. persons. A BETTER
# SECONDARY MARKET DOES NOT CREATE A PRIMARY EXIT. That is the finding.
#  STATED LIMITS, do not smooth them: full-route 2% depth is UNMEASURED and
# bounded BELOW by about $100K, not established at it. And the historical
# per-hop split is UNRECOVERABLE — the 2026-08-27 script discarded the
# route summary, so any per-hop table asserted for it now would be invented.
# backing_score 5.5 is NEW and is the SAME capital pool as reUSD, hence the
# same score.  Subordination is NOT priced here — it sits on axis 1 and
# axis 3, and scoring seniority again here would double-count it.
#  NO attachment point is published for reUSDe and reUSD's 9.66% MUST NOT
# be copied onto this page: that figure measures the equity AND this
# mezzanine sitting beneath the SENIOR. The senior's cushion is not the
# mezzanine's.
# underlying_score 4.0 is NEW and renders as DEPENDENCIES: everything reUSD
# depends on, plus subordination to reUSD itself.
# structural_score 4.5 -> 4.0 is a minor re-scope onto Contract & Admin only.
# issuer_score 5.5 is NEW and is SHARED WITH reusd-re — same entity, so two
# pages showing 5.5 is correct, not duplication.
#  `redemption_score: 2.0` (tightened from 2.5) is RETAINED but no longer
# rendered: it is the evidence for axis 3, and both exit legs are stated in
# prose under that heading.
axis_frame: six
volatility_score: 3.5
backing_score: 5.5
liquidity_score: 2.0
underlying_score: 4.0
structural_score: 4.0
issuer_score: 5.5
redemption_score: 2.0
overall_score: 3.0
#  POINTS AT OUR OWN MONITOR, not the issuer's — see reusd-re.md for the
# reasoning.  It renders: confirmed in a browser by backing-monitor
# 2026-10-04, six axes.  Reachable by DIRECT LINK ONLY — not on their index
# grid, because visibility needs `published: true` which this slug lacks.
# Whether it gets listed is bm's owner's call.
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=reusde-re"
---

# reUSDe (Re Protocol) — Risk Report

**Significant risk · 3.0/10**

Mezzanine NAV-accruing reinsurance tranche issued by Resilience BVI Ltd.

> **Issuer-published dashboard:** [app.re.xyz/reusde](https://app.re.xyz/reusde) — **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, historical charts, capital tranching diagram, and Chainlink Proof of Reserves links. It is the canonical source for live metrics on this asset.
>
> **Independent monitor:** [reUSDe backing monitor](https://todayindefi.github.io/backing-monitor/?asset=reusde-re) — six-axis monitoring with current market and backing data.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| 11.81% APY (7-day simple, 2026-10-13) | Curve leg measured; complete USD route unresolved | Quarterly assessment; announced windows pro-rata | about 19 months (contract created 2025-03-31) | Ethereum (measured); Berachain documented architecture |

## Summary

reUSDe is the **mezzanine tranche** of Re Protocol's reinsurance capital structure — the junior sibling of [reUSD](/reports/reusd-re/). It earns a higher spread (8.5% over the risk-free rate, currently around 12% APY) in exchange for absorbing reinsurance losses **before reUSD does**.

In the three-tier waterfall, Re Protocol's own equity is the first loss, **reUSDe is the second**, and reUSD is protected until reUSDe is fully depleted. The structural premise is that reUSDe holders are paid to be contingent capital in a real insurance programme. **This is not a yield-bump variant of reUSD.** It is a different risk class — closer to a tokenised private-credit position than to a yield-bearing stable.

As of 2026-10-13, Re reports **14,799,533 reUSDe** at NAV **1.429924**, or **$21.162M supply × NAV**, closely matching **$21.169M TVL**. That is **6.59% of reported reUSD TVL**. The canonical Ethereum contract is [`0xddc0f880…cc5a`](https://etherscan.io/address/0xddc0f880ff6e4e22e4b74632fbb43ce4df6ccc5a).

Exit is the binding constraint. The current measurement reproduces only about **$20.5K–$20.7K of 2% depth** on the Curve reUSDe→sUSDe leg and does not complete the path into dollars. Primary support is assessed quarterly, windows are pro-rata when announced, and none is currently open. The first measured window fulfilled **28.1% of $5.348M requested**.

## 1 · Stability — 3.5

reUSDe is a vault share, so the metric is NAV and deviation from it, not a dollar peg. **NAV is structurally exposed to underwriting losses: drawdowns here are designed, not anomalous.** That is the product.

Secondary price sits at **$1.40907 against NAV 1.408519 — a premium of 0.04%, essentially at NAV.** But pricing has shown wide variance not tied to NAV. Over the twelve months to 2026-08-27 the daily series bottoms at **$1.049009 (2026-06-26)** against a reported all-time high of **$1.64 (2025-08-23)** — a peak-to-trough spread of about **56%** on a token trading a few thousand dollars a day.

**Two provenance notes.** The **$1.64 high is aggregator-reported and unverified**: the daily series available to us begins 2025-08-28, five days after that date, so it cannot see the print, and the highest value the series itself contains is **$1.411855**. The 56% spread inherits that caveat.  **And the low has not gone below par: there are zero daily closes under $1.00 across the full year.** An aggregator's `atl` text field reports $0.968123, which its own daily chart contradicts — a check that stops at that field will conclude the token has broken par. **This is reflexive thin-market pricing in both directions**, and the same illiquidity that produced it is what defines stress-exit pricing going forward.

The 3.5 score reflects loss exposure by design, a short history for a back-loaded insurance book, and secondary pricing governed by thin liquidity rather than NAV.

## 2 · Backing — 5.5

reUSDe draws on **the same capital pool as reUSD**: fully-collateralised reinsurance contracts written through licensed insurers, held in a U.S. §114 Reinsurance Trust Account, alongside an on-chain liquid sleeve. **Verification is the same stack** — daily reserve attestations by The Network Firm, a Chainlink Proof of Funds feed publishing 24/7, and an annual Grant Thornton (Cayman) audit.

Re may run the sleeve as an Ethena sUSDe basis trade or a T-Bill strategy. The tranche-level sleeve measured on 2026-09-06 was **99.05% sUSDe with $0 of T-Bills**, or 99.98% Ethena-derived. The collateral is high quality but concentrated.

Re's reserve dashboard reports reUSD and reUSDe **combined**, with no reUSDe-attributable denominator, so no standalone collateral ratio is derivable for this asset.

reUSD's first-loss attachment point does not apply here: it measures Re's equity and the mezzanine together beneath the senior tranche. reUSDe has only Re's equity beneath it, over a denominator the issuer does not attribute per tranche.

The 5.5 score reflects the same reinsurance book, custody and attestation stack as reUSD. Mezzanine subordination is reflected in Stability and Liquidity & Exit.

## 3 · Liquidity & Exit — 2.0

reUSDe has conditional primary redemption for eligible non-U.S. holders and a thin secondary market. U.S. holders have only the secondary path.

**Secondary market.** The latest executable run reproduced Curve reUSDe→sUSDe, with the 2% crossing bracketed around **$20.5K–$20.7K**. It did not reproduce a direct Uniswap v4 route or price the required sUSDe→USD leg, so current complete dollar depth is unmeasured.

The Curve REUSDE/sUSDe twocrypto pool [`0x43b98EEA…3734`](https://etherscan.io/address/0x43b98EEA5C689F0036918f590a4B55f22D853734) had **$559,165 TVL** and **$15,461 of 2% depth** at block 25894848 on 2026-09-03. A $500K sale into that pool alone priced near **-39%**. These figures describe only the reUSDe→sUSDe venue, not a complete dollar exit.

- **24h volume $21,767** on 2026-09-03; $7,209 on 2026-08-27; about $59K/day in May. **The Curve venue is 2.82% of the tranche, and the reUSDe side alone is 0.99% of it.**
- **No CEX listing**, and the single-chain footprint is measured rather than asserted — twelve chains were probed and code exists on Ethereum alone.
- The pool held reUSDe **$197,234** against sUSDe **$362,438**. Because this is a cross-currency twocrypto pool, the 35/65 token split reflects the exchange rate rather than pool imbalance.
- **Holder count is roughly 520** (Ethplorer 517, Blockscout 519, both against a `totalSupply` matching the on-chain read). Quoted as a range because indexers count holders differently.

**Risks and limitations.** The Curve-only bracket does not establish a current whole-route dollar scalar.

**Primary redemption — non-U.S. KYC only, with support assessed quarterly.** The old Q3 page no longer exists. Current documentation says regulatory collateral requirements and contract releases determine whether a window is supported; announced windows are **pro-rata**, and unfilled tokens are returned and continue earning yield. It does not currently promise a standing 72-hour window, a 40-day minimum hold, or a fixed quarterly capacity. No window is currently open.

The first measured window was heavily rationed: requests totalled **$5.348M**, fulfillment was **28.122622%**, and about **$1.5M** settled.

Current policy makes support contingent on regulatory collateral and contract releases, so the observed settlement is evidence about one window rather than a guaranteed quarterly allowance.

The 2.0 score reflects the absence of a dependable current exit: the complete secondary path has not been reproduced, primary windows are conditional and pro-rata, no window is open, and U.S. persons have no primary channel.

## 4 · Dependencies — 4.0

**reUSDe inherits every dependency reUSD has, and adds subordination to reUSD itself.**

The shared stack is the reinsurance book — off-chain contracts and trust assets that are **not measurable from Ethereum state** — plus Ethena, which reaches this asset through the on-chain sleeve (measured 99.98% Ethena-derived) and through the sUSDe leg of the only secondary venue.  **Note what that second channel means here: the pool that constitutes this token's entire secondary market is priced against sUSDe, so a sUSDe dislocation moves the exit price of reUSDe directly, independent of anything happening to the reinsurance book.** Custody, attestation and audit dependencies — Fireblocks, The Network Firm, Chainlink, Grant Thornton, the unnamed trust bank — are the same as the senior tranche.

**On top of that sits the tranche position itself.** reUSDe is junior to reUSD within the same book, so it carries all of the senior's exposures *and* absorbs losses first. **4.0** rather than reUSD's 5.0 for exactly that increment.

## 5 · Contract & Admin — 4.0

- **Token contract:** ERC-1967 upgradeable proxy at `0xdDC0f880ff6e4e22E4B74632fBb43Ce4DF6cCC5a`, Ethereum only.
- **Same implementation logic as reUSD** (`0xb5276c436f65913cd5332de745d04fedeb4a21d4`) — shared codebase, shared risk surface.
- **Upgrade authority:** gated by AccessControl roles. The admin role on both the reUSD and reUSDe proxies is held by an OpenZeppelin `TimelockController` at [`0x69dDEa33…7FCA93`](https://etherscan.io/address/0x69dDEa332723cF5407151aAF68B9b076557FCA93) with a 172,800-second minimum delay — **a real 48-hour delay.**  **A single Safe holds the proposer, executor and canceller roles, so it is a public notice window, not an independent second approval.**
- **Custody:** Fireblocks MPC multisig plus the U.S. trust bank §114 account — the same stack as reUSD, with the same day-to-day controller wallets.

Re's current registry documents a reUSDe NAV oracle, Ethereum and Berachain CRE/CCIP pairs, ICL and CCIP-pool addresses, and controller/timelock structures on both chains. It also describes an ICL path through which the Safe can grant itself `UPGRADER_ROLE` without delay and CCIP-pool ownership/configuration outside a timelock. These mutable roles and implementations were not independently re-read in October.

**The audit position is materially weaker than the senior tranche's.** **Hacken (August 2024)** is the only published audit, and it covers an earlier version of the shared implementation. **No reUSDe-specific audit has been published.** reUSD's current engagements — Sherlock (July 2026) and Certora (September 2025) — cover the shared implementation, which is genuine coverage of most of this code. But **reUSDe and reUSD diverge materially in redemption mechanics and tranche accounting**, and those are precisely the paths a shared audit is least likely to have exercised. **There is no publicly disclosed bug bounty.**

**4.0** — the same proxy, timelock and custody posture as the senior tranche, marked down for divergent code paths that no published engagement is known to cover.

## 6 · Issuer — 5.5

Resilience BVI Ltd. is a named, licensed entity operating under a BVI securities exemption, which is also why **U.S. persons are excluded from primary redemption.** Grant Thornton (Cayman) performs the annual audit, The Network Firm publishes daily attestations, Fireblocks provides MPC custody, and Chainlink carries the Proof-of-Funds feed. The model remains trust-the-operator rather than trust-the-code, and the issuer writes the NAV used to mark holders.

The trust bank custodian is not publicly named, and the reinsurance carrier and cedent counterparties are not disclosed. Re also publishes different balance-sheet and waterfall capital figures without a current contractual amount beneath reUSDe. That gap is material because Re equity is the only layer between this tranche and the first underwriting loss.

## What you actually earn

Mezzanine-tranche reinsurance yield, calculated daily as a **deployment-weighted blend**: deployed capital earns reinsurance programme premiums plus a fixed 8.5% spread, undeployed capital earns the sUSDe rate plus the same spread. Yield accrues via NAV growth; there is no rebasing.

Re reports **11.81%** on a seven-day simple annualisation as of 2026-10-13. The simple convention (×365/7) differs from compounding and amplifies short-window changes, so it is not a long-run realised return.

The yield premium over reUSD compensates holders for standing ahead of the senior tranche in the loss waterfall. **Realised yield can go negative** if a reinsurance loss exhausts Re Protocol's equity buffer and reaches the mezzanine. No such impairment has been documented, but the operating history remains short for underwriting outcomes.

## Who it's for

- **Non-U.S. yield-seekers** comfortable with multi-quarter exit horizons who treat this as an illiquid private-credit allocation, not a cash equivalent. **Size as a 2–5% sleeve at most.**
- Investors specifically seeking **reinsurance underwriting yield** as diversification — low correlation to crypto and equity drawdowns, high correlation to insurance loss events.

## Who should avoid

- **U.S. persons at any meaningful size.** No primary redemption at all, so the secondary market is the only channel — workable at retail scale, and **unmeasured above about $100,000.** Size to the channel you actually have.
- **Anyone using this as collateral in a leveraged position.**  **A market-priced oracle reading the Curve pool would be pricing a venue that carries under a tenth of an executable exit** — a liquidation of any size would be pricing itself. NAV-priced is the only defensible configuration.
- **Anyone needing predictable liquidity.** Windows are conditional, pro-rata when announced, and no standing quarterly capacity is promised.
- **Anyone who wants senior reinsurance exposure with better liquidity.** [reUSD](/reports/reusd-re/) is the appropriate product.

## What to watch

- **[Re Protocol's issuer dashboard](https://app.re.xyz/reusde)** for current APY, TVL and supply. The yield chart runs essentially flat at the contractual rate; **meaningful deviation would signal an underwriting event.**
- **NAV trajectory.** A real claim event shows here first: a sudden drawdown is the signal that the equity buffer is exhausted and the mezzanine is absorbing losses.
- **The executable exit ladder across the complete reUSDe→sUSDe→USD route.** The current 2% measurement covers only the first leg.
- **Primary redemption announcements and fulfillment.** Support is assessed quarterly from regulatory collateral and contract releases; no standing capacity is promised.
- **Carrier counterparty disclosures.** Specific reinsurance carriers are not publicly named. Any disclosure, or independent identification, is a material risk-information upgrade.

## A note on the tranche structure

reUSDe sits between Re Protocol's own equity (first loss) and reUSD (senior, last loss):

- "Normal" underwriting losses are absorbed by Re Protocol equity — reUSDe is untouched
- "Moderate" losses hit reUSDe — NAV drops, reUSD is still protected
- "Catastrophic" losses exhausting reUSDe then hit reUSD

**Beneath both tranches sits about $96.00M of subordinated capital**, and Re's non-tokenised capital has never been below **$55.1M**.  **But two different equity figures circulate and they are different quantities, not competing snapshots:** about **$20M** is the loss-waterfall capital, and about **$77M** is balance-sheet capital per Re's docs, "as of June 2026". **Use the waterfall figure for waterfall statements** — see the [reUSD report](/reports/reusd-re/) for the full reconciliation and the combined-ratio attachment ladder.

**The relative sizing of equity, reUSDe and reUSD against the underlying reinsurance book is the key solvency question**, and Re does not disclose it in per-tranche granular form. The mezzanine premium exists because reUSDe holders accept a layered exposure with imperfect visibility into the layer thicknesses.

## A note on Re Points

Re Protocol runs a loyalty points program surfaced on the reUSDe dashboard; current multipliers are Pendle YT 30x, Pendle LP 30x and **Curve LP (reUSDe/sUSDe) 20x**. Points have no published conversion mechanism for this asset and no expiry disclosure. **Treat as marketing optionality, not yield.** For reUSDe specifically the Curve LP multiplier creates an incentive for liquidity provision, which marginally improves secondary depth — worth tracking, since thin Curve liquidity is this asset's largest exit-side risk.

---

*Sources include Re Protocol's public documentation, on-chain reads, and the live transparency dashboard at [app.re.xyz](https://app.re.xyz). Contract architecture, audit posture, custody and redemption mechanics are verified through 2026-05-18; later figures are dated individually. The trust bank counterparty, individual reinsurance carriers and tranche sizing relative to the underwriting book depend on issuer disclosure.*

---

## Revision history

- **2026-10-13 — current quantities, redemption policy and documented authority refreshed; scores held.** Re reports **14.800M reUSDe**, NAV **$1.429924**, **11.81%** seven-day simple APY and **$21.169M** TVL versus **$21.162M supply × NAV**. The tranche is **6.59% of reUSD TVL**. The old Q3 redemption page is gone; current policy promises only quarterly assessment and pro-rata announced windows. The first window's measured result is **28.122622% fulfillment on $5.348M requested**. Current executable evidence reproduced only the Curve reUSDe→sUSDe leg near **$20.5K–$20.7K of 2% depth**, not the older direct Uniswap route or the complete dollar exit. Re's expanded registry documents new oracle/CRE/CCIP, ICL, pool, controller and timelock paths, including untimelocked upgrade-grant and pool-configuration routes. `last_verified` holds because mutable roles, complete liquidity and Berachain state were not independently re-measured.

- **2026-09-06 — Liquidity & Exit 2.0. A direct reUSDe/USDC market on Uniswap v4 carries the exit, not the Curve pool.** On a $100,000 order **Uniswap v4 fills 90.751% and Curve 9.249%**, clearing at **-0.677% against NAV**.  **Liquidity was scored 1.5 on the Curve pool's $15,461 of 2% depth until this date; that figure describes one leg and was published as though it described the exit.** Full-route 2% depth remains **unmeasured, bounded below by about $100,000.**  **The axis rises only to 2.0 because redemption is the worse leg and did not move — a better secondary market does not shorten a quarterly queue.** Overall holds at 3.0.
- **2026-09-03 — overall 3.5 → 3.0, driven by exit.** Curve 2% depth measured at **$15,461** (executable `get_dy`, block 25894848) against a tranche near $19.85M; the pool is effectively exhausted by about $2M and a $500K sale into it alone prices at roughly **-39%**; 24h volume $21,767. **Liquidity had been scored on May volume of about $59K/day until this date.**
- **2026-08-27 — first publication.** TVL **$19.85M** across **14,094,070 tokens** at NAV **1.408519**, Ethereum only (twelve chains probed, code on one). The tranche is **9.14% of the senior**, which stands at **$217.2M on Ethereum**. Beneath both sits about **$96.00M of subordinated capital**, with non-tokenised capital never below **$55.1M**. Holders number roughly **520**; price sits **0.04% above NAV**.
- **2026-08-05 — the first quarterly redemption window closed, capped and rationed.** It burned **1,077,727 reUSDe across 72 claims** from 07-23, **$1,500,074 at the window-close NAV against an announced $1.5M pool** — the ceiling to within 0.005%. That is **about 7.6% of the tranche per quarter, roughly 3.3 years for a full primary exit**, on a cap set by regulator-approved surplus that does not scale with demand.
- **Yield: Re reports 12.27%**, a **simple** annualisation of a 7-day NAV move; compounding the same data gives 13.03%, against a 12% contractual target. The **mezzanine-to-senior spread is 5.85pp** (12.27% against 6.42%).
- **Not established:** whether any claim event has touched the mezzanine. Re's `/price` series begins 2025-04-01 at 1.165906, one day after contract creation, so it is **not par-indexed** and no lifetime-appreciation figure derives from it.
