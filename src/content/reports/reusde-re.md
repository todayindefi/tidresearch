---
asset: "reUSDe (Re Protocol)"
slug: "reusde-re"
aliases: ["reUSDe (Re Protocol)", "Resilience reUSDe", "REUSDE"]
chains: ["eth"]
category: "vault-share"
assessment_type: "full"
date: "2026-05-18"
# ⚠️ `last_verified` HOLDS at 2026-05-18 deliberately. The figures on this page
# have been re-measured repeatedly since, but the structural material —
# contract architecture, audit posture, custody, redemption mechanics — still
# dates from May and has not been re-read. Do not bump this on a sweep; the
# body says plainly which half is current.
last_verified: "2026-05-18"
last_revised: "2026-09-06"
featured: false
# MOVED BACK TO STAGING 2026-08-31, deliberately — do not re-promote on a
# freshness or completeness sweep. ⚠️ The site owner's rule is that THIS REPORT
# AND ITS DASHBOARD PROMOTE TOGETHER, gated on a puppeteer verification pass.
# See reusd-re.md for the full gate. The reUSD monitor's axis 5 now renders,
# but its collateral ratio is a permanent honest blank (Re publishes combined
# reUSD + reUSDe reserves with no asset-attributed denominator), and
# `?asset=reusde-re` is registered but still awaiting its producer feed.
# TO PROMOTE: both dashboards complete and verified IN A BROWSER, then flip
# both reports together. Checked before demoting: no `production: true` report
# links here, so nothing 404s on prod (only frax.md links in, and it is staged).
production: false
issuer: "Resilience BVI Ltd."
market_cap_approx: 19852000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#   ⚠️ UNLIKE reusd-re, THE MOVE HERE IS A GENUINE DOWNGRADE AND READS AS ONE.
#     `liquidity_score` 2.5 -> 1.5 and `overall_score` 3.5 -> 3.0 because the
#     exit ladder was MEASURED rather than estimated: 2% depth $15,461 on the
#     single Curve venue (executable `get_dy`, block 25894848, 2026-09-03)
#     against a tranche near $19.85M. The 2.5 had been priced off about
#     $59K/day of May volume. A measurement replaced an estimate and it was
#     worse. This one DOES belong in the revision history.
#   ⚠️ UNRECONCILED, and the body says so: a multi-venue aggregator route
#     measured $100K to USDC at -0.677% on 2026-08-27, which is far better
#     than a $15,461 2%-depth venue implies. Different dates, different
#     methods, not reconciled. The axis is set on the conservative one.
#   backing_score 5.5 is NEW and is the SAME capital pool as reUSD, hence the
#     same score. ⚠️ Subordination is NOT priced here — it sits on axis 1 and
#     axis 3, and scoring seniority again here would double-count it.
#   ⚠️ NO attachment point is published for reUSDe and reUSD's 9.66% MUST NOT
#     be copied onto this page: that figure measures the equity AND this
#     mezzanine sitting beneath the SENIOR. The senior's cushion is not the
#     mezzanine's.
#   underlying_score 4.0 is NEW and renders as DEPENDENCIES: everything reUSD
#     depends on, plus subordination to reUSD itself.
#   structural_score 4.5 -> 4.0 is a minor re-scope onto Contract & Admin only.
#   issuer_score 5.5 is NEW and is SHARED WITH reusd-re — same entity, so two
#     pages showing 5.5 is correct, not duplication.
# ⚠️ `redemption_score: 2.0` (tightened from 2.5) is RETAINED but no longer
# rendered: it is the evidence for axis 3, and both exit legs are stated in
# prose under that heading.
axis_frame: six
volatility_score: 3.5
backing_score: 5.5
liquidity_score: 1.5
underlying_score: 4.0
structural_score: 4.0
issuer_score: 5.5
redemption_score: 2.0
overall_score: 3.0
# ⚠️ POINTS AT OUR OWN MONITOR, not the issuer's — see reusd-re.md for the
# reasoning. ⚠️ This target is not merely unfinished, it is EMPTY: registered
# and reachable but awaiting its producer feed, so it renders a staged
# placeholder. The body says so plainly. Acceptable only while this report is
# staged alongside it; the two promote together.
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=reusde-re"
---

# reUSDe (Re Protocol) — Retail Risk Report

**Significant risk · 3.0/10**

> ⚠️ **What is current and what is not, because this page carries two dates.** The exit ladder and venue depth were measured **2026-09-03**; supply, NAV, TVL, chain footprint, price-versus-NAV, APY, holder count and the July redemption window were measured **2026-08-27**. **The structural material — contract architecture, audit posture, custody, and the redemption mechanics themselves — still dates from 2026-05-18 and has not been re-read.** That is why the card shows *revised 2026-09-06, verified through 2026-05-18*: **the figures are current; the description of how the thing works is May's.**

> **Issuer-published dashboard:** [app.re.xyz/reusde](https://app.re.xyz/reusde) — **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, historical charts, capital tranching diagram, and Chainlink Proof of Reserves links. It is the canonical source for live metrics on this asset.
>
> **Independent monitor (staged, no data yet):** [tidresearch backing monitor — reUSDe](https://todayindefi.github.io/backing-monitor/?asset=reusde-re) — the page is registered and reachable but is **awaiting its producer feed**, so it currently renders a staged placeholder rather than figures. ⚠️ **There is nothing to read there yet.** It is linked because this report and that monitor promote together, and the link is what makes the pairing checkable while both are unfinished. The sibling [reUSD monitor](https://todayindefi.github.io/backing-monitor/?asset=reusd-re) does carry data, with its own stated gaps.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| 12.27% APY (Re's own simple annualisation, 7d to 2026-08-27) | Curve REUSDE/sUSDe pool | Quarterly windows (72h), 40-day min hold, pro-rata | about 17 months (contract created 2025-03-31) | Ethereum (measured: 12 chains probed, code on Ethereum only) |

## Summary

reUSDe is the **mezzanine tranche** of Re Protocol's reinsurance capital structure — the junior sibling of [reUSD](/reports/reusd-re/). It earns a higher spread (8.5% over the risk-free rate, currently around 12% APY) in exchange for absorbing reinsurance losses **before reUSD does**.

In the three-tier waterfall, Re Protocol's own equity is the first loss, **reUSDe is the second**, and reUSD is protected until reUSDe is fully depleted. The structural premise is that reUSDe holders are paid to be contingent capital in a real insurance programme. **This is not a yield-bump variant of reUSD.** It is a different risk class — closer to a tokenised private-credit position than to a yield-bearing stable.

**Sized on-chain 2026-08-27:** **$19.85M TVL** across **14,094,070 tokens** at a NAV of **1.408519**, Ethereum only — no multi-chain deployment, no CEX listing — contract [`0xddc0f880…cc5a`](https://etherscan.io/address/0xddc0f880ff6e4e22e4b74632fbb43ce4df6ccc5a). **The NAV is not issuer-reported:** Re's own `/tvl` implies 1.408519 against measured supply, and **CoinGecko independently prints $1.41**, 0.03% apart. That is **9.14% of the senior tranche**, which stands at **$217.2M on Ethereum**. Supply is above every intermediate reading taken since May, so the tranche has been growing on net.

**This report scores on six axes** — Stability, Backing, Liquidity & Exit, Dependencies, Contract & Admin, Issuer. Contract & Admin covers upgrade authority, key custody and the shared implementation *only*; the legal and entity questions sit on Issuer, and the reinsurance and Ethena stack on Dependencies.

⚠️ **The binding constraint is exit, and measured against an executable quote it is severe.** The single Curve venue absorbs **$15,461 before 2% price impact** — measured with an executable `get_dy` quote at Ethereum block 25894848 on 2026-09-03, against a tranche near $19.85M. **The pool is effectively exhausted by about $2M, and a $500K sale prices at roughly -39%.** The primary path is quarterly-gated and cleared **$1.5M in its first window, about 7.6% of the tranche.** **Neither leg is a route out at size, and for a U.S. person only the thin one exists at all.**

## 1 · Stability

reUSDe is a vault share, so the metric is NAV and deviation from it, not a dollar peg. **NAV is structurally exposed to underwriting losses: drawdowns here are designed, not anomalous.** That is the product.

Secondary price sits at **$1.40907 against NAV 1.408519 — a premium of 0.04%, essentially at NAV.** But pricing has shown wide variance not tied to NAV. Over the twelve months to 2026-08-27 the daily series bottoms at **$1.049009 (2026-06-26)** against a reported all-time high of **$1.64 (2025-08-23)** — a peak-to-trough spread of about **56%** on a token trading a few thousand dollars a day.

⚠️ **Two provenance notes.** The **$1.64 high is aggregator-reported and unverified**: the daily series available to us begins 2025-08-28, five days after that date, so it cannot see the print, and the highest value the series itself contains is **$1.411855**. The 56% spread inherits that caveat. ⚠️ **And the low has not gone below par: there are zero daily closes under $1.00 across the full year.** An aggregator's `atl` text field reports $0.968123, which its own daily chart contradicts — a check that stops at that field will conclude the token has broken par. **This is reflexive thin-market pricing in both directions**, and the same illiquidity that produced it is what defines stress-exit pricing going forward.

**Held at 3.5** — the loss exposure is by design and the record is clean, but 17 months is short for a book whose losses are back-loaded, and price behaviour is set by the thinness of the venue rather than by NAV.

## 2 · Backing

reUSDe draws on **the same capital pool as reUSD**: fully-collateralised reinsurance contracts written through licensed insurers, held in a U.S. §114 Reinsurance Trust Account, alongside an on-chain liquid sleeve. **Verification is the same stack** — daily reserve attestations by The Network Firm, a Chainlink Proof of Funds feed publishing 24/7, and an annual Grant Thornton (Cayman) audit.

⚠️ **The sleeve's mandate and its holdings are different things.** Re is permitted to run it as an Ethena sUSDe basis trade **or** a T-Bill strategy. **Measured 2026-09-06 it is 99.05% sUSDe with $0 of T-Bills** — 99.98% Ethena-derived. **The collateral is good in quality and it is not diversified**, and that concentration is priced on axis 4 rather than twice.

⚠️ **No collateral ratio is derivable for this asset, and that is a permanent blank rather than a pending measurement.** Re's reserve dashboard reports reUSD and reUSDe **combined**, with no reUSDe-attributable denominator. Anyone quoting a coverage ratio for reUSDe alone has invented the denominator.

⚠️ **And reUSD's first-loss attachment point does not apply here.** That figure measures Re's equity *and this mezzanine* sitting beneath the senior tranche. reUSDe has only Re's equity beneath it, over a denominator the issuer does not attribute per-tranche. **The senior's cushion is not the mezzanine's, and copying the number across would overstate this tranche's protection.**

**5.5** — the same score as reUSD because it is the same book, the same custody and the same attestation stack. **Subordination is deliberately not priced here**; it is what axes 1 and 3 are measuring, and charging for it twice would misrepresent the reserve.

## 3 · Liquidity & Exit

This axis covers **both** exit paths and is scored on the **worse** one. ⚠️ **For a U.S. holder there is only one leg, so 1.5 is the whole picture rather than the worse half of two.**

**Secondary market — the binding leg, and now measured rather than estimated.** One **Curve REUSDE/sUSDe twocrypto pool** [`0x43b98EEA…3734`](https://etherscan.io/address/0x43b98EEA5C689F0036918f590a4B55f22D853734) on Ethereum, TVL **$559,165**. No CEX listing, and the single-chain footprint is measured rather than asserted — twelve chains were probed and code exists on Ethereum alone.

- **2% depth is $15,461** — an executable `get_dy` quote at block 25894848, 2026-09-03. Against a tranche near $19.85M that is **about 0.08%.**
- **The pool is effectively exhausted by about $2M, and a $500K sale prices at roughly -39%.**
- **24h volume $21,767** on 2026-09-03; $7,209 on 2026-08-27; about $59K/day in May. **The venue is 2.82% of the tranche, and the reUSDe side alone is 0.99% of it.**
- The pool holds reUSDe **$197,234** against sUSDe **$362,438**. ⚠️ **Do not read the 35/65 split as imbalance** — this is a cross-currency twocrypto pool and the ratio is the FX rate, not skew.
- **Holder count is roughly 520** (Ethplorer 517, Blockscout 519, both against a `totalSupply` matching the on-chain read). Quoted as a range because indexers count holders differently.

⚠️ **One measurement points the other way and has not been reconciled.** Routed through an aggregator to USDC on **2026-08-27**, a **$10K exit cost -0.161%, $50K -0.482% and $100K -0.677%** — far better than a venue with $15,461 of 2% depth implies, and the route contained **no ERC-4626 leg**, so it did not pass through a gated instrument. **The two readings are six days apart and use different methods, and no reconciliation has been established.** ⚠️ **The axis is set on the conservative one**, because the figure that decides whether a position can be closed is the executable depth of the only venue that quotes this token, not a route measured on a quieter day.

**Primary redemption — non-U.S. KYC only, and quarterly.** The request window is the first **72 hours** of each fiscal quarter, after a **40-day minimum hold** from mint. Settlement follows an end-of-quarter actuarial review and regulator approval, up to 5 business days, **pro-rata** if requests exceed surplus, with unfilled balances queuing to the next quarter. **Worst case, a holder who narrowly misses a window and then faces a pro-rata gate can wait multiple quarters — 6 to 9 months — for full capital return.**

⚠️ **The first window was capped, and it filled its cap exactly.** The `WindowRedemption` contract [`0xD2e077d9…A389A`](https://etherscan.io/address/0xD2e077d945Ec77B45Fbe4622E01F4C79e4bA389A) burned **1,077,727 reUSDe across 72 claims** between 2026-07-23 and 2026-08-05. At the window-close NAV of $1.391887 that is **$1,500,074 against Re's announced $1.5M pool — the ceiling to within 0.005%.** **Landing exactly on the cap means the window was rationed: requests met or exceeded the pool.** ⚠️ **The precise fill percentage is not recoverable** — unfilled reUSDe is returned in the same transaction, so burns cannot separate requested from filled. **"Capped and rationed" is the finding; a percentage would be an invention.**

⚠️ **The number to carry is capacity, not fill rate: $1.5M against a $19.85M tranche is about 7.6% per quarter.** Held flat, **fully exiting this tranche through the primary channel would take about 3.3 years** — and the cap is set by surplus released under regulatory approval, so **it does not scale with demand.** Re's documentation anticipates "expected 100% fill" in a normal year; the first window, under benign conditions, cleared under 8% of the tranche.

**1.5.** The primary path is materially better than the venue for size, and it is available only to non-U.S. persons who can wait quarters. **For everyone else the whole exit is a pool that absorbs $15,461 before moving 2%.**

## 4 · Dependencies

**reUSDe inherits every dependency reUSD has, and adds subordination to reUSD itself.**

The shared stack is the reinsurance book — off-chain contracts and trust assets that are **not measurable from Ethereum state** — plus Ethena, which reaches this asset through the on-chain sleeve (measured 99.98% Ethena-derived) and through the sUSDe leg of the only secondary venue. ⚠️ **Note what that second channel means here: the pool that constitutes this token's entire secondary market is priced against sUSDe, so a sUSDe dislocation moves the exit price of reUSDe directly, independent of anything happening to the reinsurance book.** Custody, attestation and audit dependencies — Fireblocks, The Network Firm, Chainlink, Grant Thornton, the unnamed trust bank — are the same as the senior tranche.

**On top of that sits the tranche position itself.** reUSDe is junior to reUSD within the same book, so it carries all of the senior's exposures *and* absorbs losses first. **4.0** rather than reUSD's 5.0 for exactly that increment.

## 5 · Contract & Admin

- **Token contract:** ERC-1967 upgradeable proxy at `0xdDC0f880ff6e4e22E4B74632fBb43Ce4DF6cCC5a`, Ethereum only.
- **Same implementation logic as reUSD** (`0xb5276c43…DEb4a21D4`) — shared codebase, shared risk surface.
- **Upgrade authority:** gated by AccessControl roles. The admin role on both the reUSD and reUSDe proxies is held by an OpenZeppelin `TimelockController` at [`0x69dDEa33…7FCA93`](https://etherscan.io/address/0x69dDEa332723cF5407151aAF68B9b076557FCA93) with a 172,800-second minimum delay — **a real 48-hour delay.** ⚠️ **A single Safe holds the proposer, executor and canceller roles, so it is a public notice window, not an independent second approval.**
- **Custody:** Fireblocks MPC multisig plus the U.S. trust bank §114 account — the same stack as reUSD, with the same day-to-day controller wallets.

⚠️ **The audit position is materially weaker than the senior tranche's.** **Hacken (August 2024)** is the only published audit, and it covers an earlier version of the shared implementation. **No reUSDe-specific audit has been published.** reUSD's current engagements — Sherlock (July 2026) and Certora (September 2025) — cover the shared implementation, which is genuine coverage of most of this code. But **reUSDe and reUSD diverge materially in redemption mechanics and tranche accounting**, and those are precisely the paths a shared audit is least likely to have exercised. **There is no publicly disclosed bug bounty.**

**4.0** — the same proxy, timelock and custody posture as the senior tranche, marked down for divergent code paths that no published engagement is known to cover.

## 6 · Issuer

**The same issuer as [reUSD](/reports/reusd-re/), and the same score: 5.5.** Resilience BVI Ltd. is a named, licensed entity operating under a BVI securities exemption — which is also why **U.S. persons are excluded from primary redemption.** Control quality is genuine: Grant Thornton (Cayman) as annual auditor, The Network Firm on daily attestations, Fireblocks MPC custody, a Chainlink Proof-of-Funds feed. **The model is trust-the-operator rather than trust-the-code**, and the issuer writes the NAV its own holders are marked against.

**The disclosure gaps are the same.** The trust bank custodian is not publicly named; the **reinsurance carrier and cedent counterparties are not disclosed**, so a holder cannot know whose book they are backing; and Re publishes two different junior-capital figures without saying which governs the attachment schedule. ⚠️ **On this page that last gap bites harder than it does on the senior**, because the layer beneath reUSDe *is* that equity — there is nothing else between this tranche and the loss.

## What you actually earn

Mezzanine-tranche reinsurance yield, calculated daily as a **deployment-weighted blend**: deployed capital earns reinsurance programme premiums plus a fixed 8.5% spread, undeployed capital earns the sUSDe rate plus the same spread. Yield accrues via NAV growth; there is no rebasing.

**Measured 2026-08-27, Re reports 12.27%** against a NAV move of 1.405028 → 1.408333 over seven days. ⚠️ **Quote that number with its convention, because the convention changes the sentence.** Re annualises **simple** (× 365/7), and their arithmetic reproduces to within 0.005pp on that basis; **compounding the same seven days gives 13.03% instead.** Against the 12% contractual target that is **+0.27pp on Re's basis and +1.03pp on a compounded one** — "slightly above target" and "comfortably above target", from identical data. Neither is wrong; only one is Re's. ⚠️ **It is also a seven-day window annualised, so it amplifies whatever that week did**, and no long-run realised figure can be derived: price history over 30/90/180/365 days returns 67% / 26% / 70% / 14%, which is **noise on a token trading a few thousand dollars a day, not yield.**

**The cleanest risk statement is the spread between the tranches rather than either number alone: 12.27% mezzanine against 6.42% senior is 5.85pp** — that gap is the compensation for standing in front of the loss. Re publishes a historical realised band of 16–25%. **Realised yield can go negative** if a reinsurance loss event exhausts Re Protocol's equity buffer and reaches the mezzanine. That has not happened — but the design says it can, and 17 months in market is not long enough to conclude either way about underwriting outcomes.

## Who it's for

- **Non-U.S. yield-seekers** comfortable with multi-quarter exit horizons who treat this as an illiquid private-credit allocation, not a cash equivalent. **Size as a 2–5% sleeve at most.**
- Investors specifically seeking **reinsurance underwriting yield** as diversification — low correlation to crypto and equity drawdowns, high correlation to insurance loss events.

## Who should avoid

- **U.S. persons at any meaningful size.** No primary redemption, and a secondary venue that absorbs $15,461 before 2% impact. **Exploratory amounts only.**
- **Anyone using this as collateral in a leveraged position.** For an asset whose entire secondary venue absorbs $15,461 before 2% impact, **market-priced oracles are structurally unsafe** — a liquidation of any size would be pricing itself. NAV-priced is the only defensible configuration.
- **Anyone needing predictable quarterly liquidity.** Pro-rata gating, a 40-day minimum hold and rollover mean worst cases run multiple quarters.
- **Anyone who wants senior reinsurance exposure with better liquidity.** [reUSD](/reports/reusd-re/) is the appropriate product.

## What to watch

- **[Re Protocol's issuer dashboard](https://app.re.xyz/reusde)** for current APY, TVL and supply. The yield chart runs essentially flat at the contractual rate; **meaningful deviation would signal an underwriting event.**
- **NAV trajectory.** A real claim event shows here first: a sudden drawdown is the signal that the equity buffer is exhausted and the mezzanine is absorbing losses.
- **Curve pool depth and the executable exit ladder.** ⚠️ **Depth, not volume** — volume is what the token trades, depth is what a seller actually meets, and on this venue the two tell different stories.
- **Primary redemption fills after each quarterly window.** The cap, not the fill rate, is the constraint: it is set by regulator-approved surplus and does not scale with demand.
- **Carrier counterparty disclosures.** Specific reinsurance carriers are not publicly named. Any disclosure, or independent identification, is a material risk-information upgrade.

## A note on the tranche structure

reUSDe sits between Re Protocol's own equity (first loss) and reUSD (senior, last loss):

- "Normal" underwriting losses are absorbed by Re Protocol equity — reUSDe is untouched
- "Moderate" losses hit reUSDe — NAV drops, reUSD is still protected
- "Catastrophic" losses exhausting reUSDe then hit reUSD

**Beneath both tranches sits about $96.00M of subordinated capital**, and Re's non-tokenised capital has never been below **$55.1M**. ⚠️ **But two different equity figures circulate and they are different quantities, not competing snapshots:** about **$20M** is the loss-waterfall capital, and about **$77M** is balance-sheet capital per Re's docs, "as of June 2026". **Use the waterfall figure for waterfall statements** — see the [reUSD report](/reports/reusd-re/) for the full reconciliation and the combined-ratio attachment ladder.

**The relative sizing of equity, reUSDe and reUSD against the underlying reinsurance book is the key solvency question**, and Re does not disclose it in per-tranche granular form. The mezzanine premium exists because reUSDe holders accept a layered exposure with imperfect visibility into the layer thicknesses.

## A note on Re Points

Re Protocol runs a loyalty points program surfaced on the reUSDe dashboard; current multipliers are Pendle YT 30x, Pendle LP 30x and **Curve LP (reUSDe/sUSDe) 20x**. Points have no published conversion mechanism for this asset and no expiry disclosure. **Treat as marketing optionality, not yield.** For reUSDe specifically the Curve LP multiplier creates an incentive for liquidity provision, which marginally improves secondary depth — worth tracking, since thin Curve liquidity is this asset's largest exit-side risk.

---

*This report is based on Re Protocol's public documentation, on-chain reads, and the live transparency dashboard at [app.re.xyz](https://app.re.xyz). Structural material — contract architecture, audit posture, custody and redemption mechanics — is verified through 2026-05-18; figures are dated individually. Some information depends on issuer disclosures (the trust bank counterparty, individual reinsurance carriers, tranche sizing relative to the underwriting book) that are not independently verified. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

---

## Revision history

- **2026-09-03 — Liquidity & Exit 2.5 → 1.5, overall 3.5 → 3.0, on a measured exit ladder.** The single Curve venue absorbs **$15,461 before 2% price impact** (executable `get_dy`, block 25894848) against a tranche near $19.85M — **about 0.08%.** The pool is effectively exhausted by about $2M and a $500K sale prices at roughly **-39%**; 24h volume $21,767. ⚠️ **Liquidity was scored 2.5 on May volume of about $59K/day until this date; measured depth is the harder constraint and it is worse.** ⚠️ **Unreconciled and stated on the page:** an aggregator route measured $100K to USDC at **-0.677%** on 2026-08-27, six days earlier by a different method.
- **2026-08-27 — first publication.** TVL **$19.85M** across **14,094,070 tokens** at NAV **1.408519**, Ethereum only (twelve chains probed, code on one). The tranche is **9.14% of the senior**, which stands at **$217.2M on Ethereum**. Beneath both sits about **$96.00M of subordinated capital**, with non-tokenised capital never below **$55.1M**. Holders number roughly **520**; price sits **0.04% above NAV**.
- **2026-08-05 — the first quarterly redemption window closed, capped and rationed.** It burned **1,077,727 reUSDe across 72 claims** from 07-23, **$1,500,074 at the window-close NAV against an announced $1.5M pool** — the ceiling to within 0.005%. That is **about 7.6% of the tranche per quarter, roughly 3.3 years for a full primary exit**, on a cap set by regulator-approved surplus that does not scale with demand.
- **Yield: Re reports 12.27%**, a **simple** annualisation of a 7-day NAV move; compounding the same data gives 13.03%, against a 12% contractual target. The **mezzanine-to-senior spread is 5.85pp** (12.27% against 6.42%).
- **Not established:** whether any claim event has touched the mezzanine. Re's `/price` series begins 2025-04-01 at 1.165906, one day after contract creation, so it is **not par-indexed** and no lifetime-appreciation figure derives from it.
