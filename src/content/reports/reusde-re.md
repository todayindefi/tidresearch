---
asset: "reUSDe (Re Protocol)"
slug: "reusde-re"
aliases: ["reUSDe (Re Protocol)", "Resilience reUSDe", "REUSDE"]
chains: ["eth", "bera"]
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
market_cap_approx: 21169000
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

[Issuer dashboard](https://app.re.xyz/reusde) · [Independent backing monitor](https://todayindefi.github.io/backing-monitor/?asset=reusde-re)

## Summary

reUSDe is Re Protocol's mezzanine reinsurance tranche. It absorbs underwriting losses after Re capital and before [senior reUSD](/reports/reusd-re/). Both tokens share an issuer, reinsurance book and much of their technical stack, but reUSDe accepts a more exposed loss position and conditional quarterly redemption.

Re's later API NAV was **$1.4303863564**, dated October 13 03:00:07.725 UTC. Ethereum supply at block **26,181,033** gives approximately **$21.169M of claims**, within about $1.43 of reported TVL. TVL is dated October 12 and its supply scope is uncertain, so numerical agreement does not establish a synchronised global reconciliation. Published seven-day simple APY was **11.81%**, and issuer-reported reUSDe TVL was **6.59% of reUSD TVL**.

Exit is the binding constraint: primary redemption is conditional and pro-rata, the first measured window fulfilled 28.1% of requests, U.S. holders lack primary access, and the full secondary dollar route remains unmeasured. Re documents deployments and infrastructure on Ethereum and Berachain.

## 1 · Stability — 3.5

reUSDe is designed to absorb underwriting losses through NAV. Its mark generally accrues smoothly, but impairment can occur when losses exhaust Re capital. The later October 13 API NAV was **$1.4303863564**, and Re annualises the seven-day change linearly for its **11.81%** simple APY.

An apparent 1.55% down-step at the June 2025 quarter boundary reversed the next day. It is treated as a bad or restated datapoint rather than evidence of a realised underwriting loss.

**Risks and limitations.** The mark is issuer-defined and secondary liquidity is thin. Aggregator text fields have produced false extremes; current market discounts require timestamped venue or chart observations against a corresponding NAV. The 3.5 score reflects mezzanine impairment exposure rather than a current loss event.

## 2 · Backing — 5.5

The shared reinsurance book is supported by licensed insurers, a U.S. §114 trust structure, institutional custody, daily attestations and financial audit. The loss order is premiums, Re capital, reUSDe and reUSD.

Re's October 12 API reported **$233.248M on-chain capital** and **$183.122M off-chain capital**. Subtracting the two token TVLs leaves approximately **$73.909M residual non-tokenised capital**. This supports a balance-sheet reading but does not establish the contractual thickness of the layer beneath reUSDe.

**Risks and limitations.** Tranche-attributed reserves and the current first-loss capital layer remain unestablished. The historical $20M scenario layer and approximately $77M June balance-sheet figure cannot be substituted for present contractual subordination. No standalone reUSDe collateral ratio follows from combined-program capital.

## 3 · Liquidity & Exit — 2.0

Eligible non-U.S. holders can request primary redemption during announced windows. Re assesses support quarterly from regulatory collateral requirements and released contract capital. Windows fill pro-rata; unfilled tokens are returned and continue earning yield. The policy establishes no guaranteed quarterly capacity.

The first measured window received **3,842,277.362017 reUSDe**, valued at **$5,348,015.30** at window NAV. Funding was **1,213,000 sUSDe**, fulfillment was **28.122622%**, and **1,209,832.348034 sUSDe** had been claimed. Demand exceeded available capital in benign conditions.

The October 12 23:48:44 UTC Curve reUSDe→sUSDe ladder brackets **2% marginal execution-rate deterioration at $18,613.28–$18,789.06**, relative to a $100 baseline. The lower bound is a clearing size. The venue is [Curve's REUSDE/sUSDe pool](https://etherscan.io/address/0x43b98EEA5C689F0036918f590a4B55f22D853734).

**Risks and limitations.** Quote outputs are **sUSDe tokens**. Reading them as dollars produces a false roughly 20% baseline discount. A complete dollar exit requires a timestamped sUSDe dollar valuation and an executable sUSDe→USD leg; neither the full dollar route nor a direct Uniswap route is established by this measurement. U.S. holders have no primary channel. First-window state is September-vintage, and current window availability was not independently re-read during the follow-up.

## 4 · Dependencies — 4.0

reUSDe depends on Re's book and capital beneath it, senior reUSD above it, custody and attestation, NAV infrastructure, and settlement assets and venues. Ethena exposure enters through sUSDe holdings and secondary settlement; impairment of sUSDe can affect both capital and exit independently of the reinsurance book.

DefiLlama's combined Re program TVL was **$414.963M** at October 13 02:37:59 UTC: **sUSDe 51.96%**, **USDC-labelled assets 46.55%**, **USDT 1.14%**, and **USDe 0.35%**. The USDC category includes off-chain-assets oracle value.

**Risks and limitations.** The categories are not tranche-specific allocations, and the USDC label cannot be interpreted as on-chain cash. No reUSDe-only coverage ratio follows from them. Subordination to reUSD adds exposure beyond the shared custody and settlement stack.

## 5 · Contract & Admin — 4.0

The canonical Ethereum token is [`0xdDC0f880ff6e4e22E4B74632fBb43Ce4DF6cCC5a`](https://etherscan.io/address/0xdDC0f880ff6e4e22E4B74632fBb43Ce4DF6cCC5a). It shares implementation logic and the Ethereum **48-hour TimelockController** with reUSD. Re's registry identifies its NAV oracle, Ethereum/Berachain CRE and CCIP oracle pairs, ICLs, CCIP pools and controller wallets.

Re documents that the Safe can grant itself ICL upgrade authority without delay and owns CCIP pools whose configuration is not timelocked. WindowRedemption holds burn authority. These documented modules broaden authority beyond the token-upgrade path; mutable roles and implementations were not independently re-read on both chains in October.

The issuer lists **Sherlock's July 2026 review**, **Certora's September 2025 formal verification**, and **Hacken engagements covering NAV Oracle (March 2025), core contracts (November 2024) and DeFi contracts (August 2024)**.

**Risks and limitations.** Engagement names do not establish deployed-code coverage. Audited-commit linkage and coverage of privileged roles, upgrade paths, current WindowRedemption, tranche accounting and Berachain components remain unestablished. Public bug-bounty coverage of these authorities is unverified. The current evidence does not establish the absence of a reUSDe-specific audit.

## 6 · Issuer — 5.5

Re's product and legal disclosures identify **Resilience BVI Ltd.**, a BVI FSC-regulated issuer using institutional custody, bank accounts and daily attestation. Holders have an **unsecured, limited-recourse claim**, rather than direct ownership of §114 trust assets.

**Risks and limitations.** The trust bank, carrier and cedent counterparties are not publicly identified. Accountable principals, governing-law details and dispute procedures were not independently refreshed in this follow-up. The offshore structure and limited recourse constrain accountability. Issuer 5.5 is carried from the existing assessment rather than re-derived from a new legal review.

## Suitability

reUSDe suits a small allocation for a holder who accepts mezzanine reinsurance losses and potentially multiple quarters to exit. It is unsuitable as cash, liquid collateral or a position whose plan assumes prompt redemption. U.S. holders depend on a secondary route that has not been measured end to end. Re Points provide optional marketing value rather than measured yield.

## What to watch

- Contractual capital immediately below reUSDe and its size relative to the underwriting book.
- Announcements, demand and fulfillment for each new redemption window.
- Executable reUSDe→sUSDe→USD depth and material Berachain liquidity.
- Implementations, mutable roles and oracle paths on both declared chains.
- Tranche-attributed reserves and audit scope linked to deployed components.

## Revision history

- **2026-10-13 — targeted follow-up; scores unchanged.** Adopted the $1.4303863564 later API NAV, approximately $21.169M Ethereum claims and timestamp/scope caveats. Updated Curve-leg depth to $18.613K–$18.789K, clarified sUSDe quote units, removed unsupported current dollar-discount and $100K-route claims, corrected DefiLlama classifications, and restored audit engagement detail with coverage limits. Removed the unsupported absolute claim that no reUSDe-specific audit exists. First-window state remains September-vintage. Overall remains 3.0; whole-body verification remains 2026-05-18.
- **2026-10-13 — content-first refresh.** Updated supply, APY, TVL and control/redemption documentation; placed revisions in history.
- **2026-09-20 — first-window evidence reconciled.** Measured $5.348M demand and 28.122622% fulfillment; retired fixed quarterly-cap extrapolation and narrowed secondary-route evidence.
- **2026-09-06 — Liquidity & Exit 1.5→2.0.** A then-observed multi-venue route supported a better secondary assessment; that route has not been reproduced in the current measurements.
- **2026-09-03 — Overall 3.5→3.0, driven by exit.** Curve depth was measured against the thin venue.
- **2026-08-27 — supply, holder count, APY convention and price-source artifacts reviewed.**
- **2026-08-05 — first-window claims settled.** Burn events established settlement but not request demand or a standing quarterly capacity.
- **2026-05-18 — initial assessment.**
