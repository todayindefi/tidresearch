---
asset: "STRCx"
slug: "strcx"
aliases: ["STRCx", "STRC.x", "Backed STRC", "Strategy PP Variable xStock"]
chains: ["eth", "solana", "arbitrum", "bnb", "mantle"]
category: "wrapped-token"
assessment_type: "light"
date: "2026-06-02"
last_verified: "2026-09-13"
# ⚠️ 2026-09-08: retracted the "bid fades as it nears par" clause. mstr.md had
# already amended it on four weeks of filings while this page still carried it —
# two of our own pages disagreeing on a shared subject, with the evidence
# sitting on the corrected one. `last_verified` HOLDS; nothing was re-measured.
# ⚠️ 2026-09-08 8-K (accession 0001193125-26-384402): DCS authorisation doubled
# $1.0B -> $2.0B. ISSUER-FILED via riskAnalyst; this desk has not read the filing
# directly. Dated weekly-update blocks left as the records they are — only live
# prose describing the CURRENT mechanism was changed.
# ⚠️ 2026-09-09: backing_score 4.0 authored — absent on BOTH surfaces, so an
# added axis rather than a re-scope. Migrated to the frame because the
# wrapped-token rubric has no Backing row. `last_verified` HOLDS.
last_revised: "2026-11-02"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=strcx"
featured: false
production: true
issuer: "Backed Assets (JE) Limited (Jersey)"
# ⚠️ RESOLVED 2026-09-13. This field was withheld pending review because the body
# called Backed a "Swiss DLT issuer" twice and never mentioned Jersey. The review
# is done: the product's own Final Terms (Nr. 134, ISIN CH1500008482) name
# `Backed Assets (JE) Limited`, a Jersey private limited company, corroborated by
# the JFSC registration and Kraken's xStocks legal page. `Backed Finance AG` is
# Swiss and in the group; the EU base prospectus is approved by the Liechtenstein
# FMA. ⚠️ The withheld flag sat in a comment for weeks while the WRONG claim
# stayed in the body — a correct call recorded where no reader looks.
yield_bearing: true
underlying_assets: ["STRC"]
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. ⚠️ THE ABSENT-FIELD KIND, like zchf: backing_score
# was missing on BOTH surfaces, so nothing is silently re-scoped and no value is
# contested. ⚠️ And the existing underlying_score 3.0 already argues PASSTHROUGH
# ("the STRC credit / mNAV / BTC-bid risk flows through 1:1"), so relabelling it
# Dependencies is consistent with the rationale rather than replacing it —
# riskAnalyst's authored value agrees at 3.0.
#   backing_score 4.0 is NEW. STRCx is a 1:1 wrapper, so backing reduces to "is
#     the STRC there and can anyone check". ⚠️ Held on VERIFIABILITY, not on
#     collateral quality: the attestation is FAMILY-LEVEL, and multiplier() is
#     issuer-controlled rather than deterministic — two unverifiable inputs.
axis_frame: six
volatility_score: 4.5
backing_score: 4.0
liquidity_score: 2.5
structural_score: 6.0
# ⚠️ `redemption_score` fold status is UNDECLARED. It renders nowhere under the
# frame (SIX_AXES has no Redemption row), but whether the SCORE was folded into
# axis 3 under the worse-link rule, or is retained as a legacy supplemental
# component, is riskAnalyst's call and has not been stated. Do not infer either
# from this silence — 17 of our 20 six-axis reports state it and this one does not.
redemption_score: 3.0
underlying_score: 3.0
issuer_score: 6.0
overall_score: 3.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-strategy-scoped-report>

# STRCx — Risk Report

**Significant risk · 3.0/10**

Tokenized Strategy preferred stock · Backed xStock wrapper

[Live wrapper dashboard](https://tidresearch.com/dashboards/?asset=strcx)

## Summary

STRCx represents exposure to Strategy's raw STRC preferred shares through Backed's custody and token structure. The underlying security is perpetual preferred equity, rather than a stablecoin or a claim on segregated BTC. The token adds issuer-controlled accrual, custody and restricted primary access to the underlying issuer risk.

Strategy's renewed common issuance shows access to funding, but general cash still fell after STRC buybacks. A better funding route does not independently verify STRCx reserves, dividend receipt or holder exits.

## 1 · Stability — 4.5

STRCx's value follows raw STRC and its accrual multiplier. STRC targets trading near its $100 stated amount through variable dividends and discretionary support, but holders have no ordinary guaranteed exit at par. Both the share price and accrued token value can change.

Quoted token prices must use the same scale as the multiplier. At the historical October 26 15:32 UTC snapshot, the multiplier was **1.09728611**. Jupiter's scaled mark was **$99.4614**, while CoinGecko's **$109.04 prescaled** quote corresponded to approximately **$99.3724 scaled**. Directly comparing the two raw quotes would misstate divergence. [Historical wrapper data](/data/strategy/2026-10-26/strc_backing.json).

The historical 12% underlying annual rate is not a guaranteed future return. Rate changes, dividend suspension, market repricing and issuer-controlled multiplier updates can affect token value. The weekly Strategy filing does not establish a new rate or a change in wrapper accrual cadence.

## 2 · Backing — 4.0

The wrapper represents STRC held through Backed's custody structure. Backing quality depends on whether the underlying shares are present and enforceably held for the token structure, separately from Strategy's creditworthiness.

The reviewed product terms identify **Backed Assets (JE) Limited**, a Jersey private limited company, as issuer. They name Swiss custodians **Maerki Baumann & Co. AG** and **InCore Bank AG**. Family-level proof-of-reserve/NAV reporting is not a continuous independent verification of this token's position. The multiplier is issuer-controlled, so observed accrual does not alone prove receipt of the underlying dividends.

The November 2 filing remeasures neither custody nor token reserves. A new Strategy cash balance cannot be used as collateral held for STRCx.

## 3 · Liquidity & Exit — 2.5

Holders can sell through available token venues. Primary minting/redemption is restricted to eligible whitelisted Authorised Participants after KYC/AML; ordinary retail access is not established by holding the token. The reviewed distribution terms excluded US persons from that primary route.

The historical October 26 producer reported **$260,864.37** in routed Jupiter venue liquidity. It is not a size-by-size execution guarantee. A separate September 13 review found **$849,405** across twenty Solana pools, with **$576,167** paired against USDC; the remaining pairs required another sale to reach dollars. Those are different dated measurements and must not be treated as a current outflow series or summed as independent depth.

Reviewed Final Terms Nr. 134, ISIN **CH1500008482**, describe an investor put for Authorised Participants, no fixed maturity, an investor fee up to 0.5% with a **$100 minimum per leg**, and management fees up to 0.25% annually. The $5,000 subscription minimum is not an established redemption minimum. Issuer termination/redemption is discretionary, rather than an ordinary holder's cash-out option.

Thin token-market liquidity, primary eligibility, fees, custody settlement and chain access can constrain exit even when raw STRC trades normally. The listed security's Nasdaq liquidity rating does not transfer to this wrapper.

## 4 · Dependencies — 3.0

The path is **STRCx → Backed custody/accrual → raw STRC → Strategy**. There is no direct contractual redemption into BTC. Holding related reserve tokens alongside STRCx may preserve the same terminal issuer exposure.

Strategy's [November 2 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526442707/mstr-20261102.htm) reports **1,178,552 common shares sold for $164.0M net**, with **$65.5M used for BTC purchases** and **$98.5M allocated to general USD Cash**. STRC buybacks cost **$208.2M**, so general cash still fell from **$242.4M to $132.7M**, a **45.3% decline**. Common-equity access resumed, but the disclosed cash allocation did not cover buyback spending. This is financing access, not sustained cash rebuilding.

The separate USD Reserve ended at **$4.79B**, down from the prior rounded $4.83B, after **$43.4M of preferred dividend payments**. Those payments are not identified as STRC-only. Remaining preferred repurchase authorization is **$748.6M**: permission to spend, not available cash or a guaranteed par exit. No preferred ATM sales were reported.

The [MSTR issuer assessment](/reports/mstr/) and [raw STRC assessment](/reports/strc/) describe the funding and instrument risks. Wrapper rights, holdings, accrual and exits require separate evidence. The weekly filing does not supply a current reserve allocation, custody attestation or executable redemption path.

Apyx's STRC/STRCx reserve route and Ethereum Saturn's Ondo STRCon route are distinct wrappers. USDat's separate PYUSDx route is not direct STRC backing; it does not inherit this funding update merely because it shares a product family.

## 5 · Contract & Admin — 6.0

The Ethereum token **`0x1aad217b8f78dba5e6693460e8470f8b1a3977f3`** uses Backed-controlled mint/burn and accrual permissions. The wrapper depends on issuer administration in addition to the off-chain share custody. A token balance alone does not constrain how those permissions are exercised.

The prior review described deployments on Ethereum, Solana, Arbitrum, BNB and Mantle. Current signer independence, complete per-chain authority reach, code/audit correspondence and privileged-role bounty coverage were not reverified by the November filing. No multisig threshold or timelock is inferred from an administrative address's format or from general custody marketing.

## 6 · Issuer — 6.0

Backed Assets (JE) Limited is the reviewed Jersey issuer; the Swiss custodians are separate entities. Issuer operations, custody fulfillment and the applicable product documents determine practical accountability, not the raw STRC market's performance.

The legal-entity and product-term observations are inherited from the September review. Beneficial ownership, current financial assurance, governing law, dispute remedies and direct holder enforcement were not independently refreshed here. The issuer rating is carried, rather than re-derived from a new legal assessment.

## What to watch

- Verified underlying custody and reconciliation of multiplier accrual to actual dividend handling.
- Fresh token exit quotes, primary eligibility and settlement costs on the holder's chain.
- Strategy's actual cash rebuilding, funding mix and the availability of its discretionary bid.

## Sources and review scope

The [November 2 Strategy filing](https://www.sec.gov/Archives/edgar/data/1050446/000119312526442707/mstr-20261102.htm) covers October 26–November 1, with balances as of November 1. It reports 811 BTC purchased and ending holdings of 849,327, a 810 BTC increase over the prior balance. Both figures remain unreconciled. This filing establishes no new token holdings, reserve weights, custody assurance, redemption eligibility, dividend rate, daily-dividend effectiveness or wrapper pass-through. Its $748.6M preferred buyback authorization is permission, not cash. No new outstanding-share, service-burden or runway estimate is inferred from repurchases alone.

[Retained filing observations and provenance](/data/strategy/2026-11-02/filing-observations.json) distinguish the primary filing from older dashboard snapshots. Retained source HTML/PDF hashes were checked; live SEC retrieval was unsuccessful. The filing facts do not depend on the monitoring producer adopting a new financial anchor. Changing rates, marks, queues and quotes belong on the dashboard; dated observations below are not current executable offers.

The historical wrapper and Final Terms observations retain their September/October dates; they were not reverified by the filing. [MSTR](/reports/mstr/) covers issuer funding and [raw STRC](/reports/strc/) covers the listed instrument. Scores, including Dependencies **3.0** and Overall **3.0**, are unchanged. Full verification remains **September 13, 2026**; November 2 records this scoped revision.

## Revision history

- **2026-11-02:** Updated the Strategy funding dependency and product boundaries. Reorganized the report into the reader-first format; scores and full-verification date unchanged.
- **2026-10-26:** Retained dated multiplier, mark and venue-liquidity observations.
- **2026-09-13:** Reviewed product terms, issuer/custodian identity and Solana pool composition.

</div>
