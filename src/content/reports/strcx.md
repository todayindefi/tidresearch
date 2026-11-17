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
last_revised: "2026-11-17"
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
assessment_version: "strategy-downstream-2026-11-17-v1"
evidence_version: "strategy-nov16-bm-selected-v2"
selected_evidence_sha256: "ec132f7471123d8deb6122a01290a5bcfa6e461e73d0a645bd5dd68009d95a67"
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-strategy-scoped-report data-strategy-assessment="strategy-downstream-2026-11-17-v1" data-strategy-accession="0001193125-26-462151" data-strategy-review-date="2026-11-17" data-evidence-version="strategy-nov16-bm-selected-v2" data-issuer-deltas-sha256="1c85fd5446ae481ad5fbf627695c40f421f84181363d5726760519a907378537">

# STRCx — Risk Report

**Significant risk · 3.0/10**

Tokenized Strategy preferred stock · Backed xStock wrapper

[Live wrapper dashboard](https://tidresearch.com/dashboards/?asset=strcx)

## Summary

STRCx is a tracker certificate issued by **Backed Assets (JE) Limited**, with **Backed Finance AG** as tokenizer. It references Strategy’s STRC preferred equity. Wrapper holders receive the product’s economic exposure and contractual wrapper rights; direct STRC shareholder rights, independently verified custody and unrestricted cash redemption do not follow automatically.

## 1 · Stability — 4.5

STRCx's value follows raw STRC and its accrual multiplier. STRC targets trading near its $100 stated amount through variable dividends and discretionary support, but holders have no ordinary guaranteed exit at par. Both the share price and accrued token value can change.

Quoted token prices must use the same scale as the multiplier. At the historical October 26 15:32 UTC snapshot, the multiplier was **1.09728611**. Jupiter's scaled mark was **$99.4614**, while CoinGecko's **$109.04 prescaled** quote corresponded to approximately **$99.3724 scaled**. Directly comparing the two raw quotes would misstate divergence. [Historical wrapper data](/data/strategy/2026-10-26/strc_backing.json).

The historical 12% underlying annual rate is not a guaranteed future return. Rate changes, dividend suspension, market repricing and issuer-controlled multiplier updates can affect token value. The December declaration establishes raw STRC terms; it does not establish a change in wrapper accrual cadence or verified dividend receipt.

## 2 · Backing — 4.0

The wrapper represents STRC held through Backed's custody structure. Backing quality depends on whether the underlying shares are present and enforceably held for the token structure, separately from Strategy's creditworthiness.

The reviewed product terms identify **Backed Assets (JE) Limited**, a Jersey private limited company, as issuer. They name Swiss custodians **Maerki Baumann & Co. AG** and **InCore Bank AG**. Family-level proof-of-reserve/NAV reporting is not a continuous independent verification of this token's position. The multiplier is issuer-controlled, so observed accrual does not alone prove receipt of the underlying dividends.

The November 16 filing remeasures neither custody nor token reserves. A new Strategy cash balance cannot be used as collateral held for STRCx.

## 3 · Liquidity & Exit — 2.5

Holders can sell through available token venues. Primary minting/redemption is restricted to eligible whitelisted Authorised Participants after KYC/AML; ordinary retail access is not established by holding the token. The reviewed distribution terms excluded US persons from that primary route.

The historical October 26 producer reported **$260,864.37** in routed Jupiter venue liquidity. It is not a size-by-size execution guarantee. A separate September 13 review found **$849,405** across twenty Solana pools, with **$576,167** paired against USDC; the remaining pairs required another sale to reach dollars. Those are different dated measurements and must not be treated as a current outflow series or summed as independent depth.

Reviewed Final Terms Nr. 134, ISIN **CH1500008482**, describe an investor put for Authorised Participants, no fixed maturity, an investor fee up to 0.5% with a **$100 minimum per leg**, and management fees up to 0.25% annually. The $5,000 subscription minimum is not an established redemption minimum. Issuer termination/redemption is discretionary, rather than an ordinary holder's cash-out option.

Thin token-market liquidity, primary eligibility, fees, custody settlement and chain access can constrain exit even when raw STRC trades normally. The listed security's Nasdaq liquidity rating does not transfer to this wrapper.

## 4 · Dependencies — 3.0

**Documented route:** STRCx → raw STRC → Strategy; Backed wrapper issuer, custody, multiplier/accrual and holder exits are separate.

The [November 16 Strategy 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526462151/mstr-20261116.htm) reports November 9–15 activity and November 15 balances: **$151.2m general USD Cash**, **$4.75bn service USD Reserve**, and **850,849 BTC**. General cash rose $5.0m this week and $18.5m across two successive filings. The latest two periods show modest rebuilding. Continued access to funding remains important. The separate service reserve is not a ring-fenced STRC collateral pool.

Common ATM net proceeds of **$244.7m** funded $33.4m BTC purchases, $206.3m STRC repurchases and $5.0m general cash. A further **$21.8m of earned interest** funded the rest of the **$228.1m** repurchases; these amounts must not be deducted again from reported ending cash. BTC purchases of 485 match the current holdings increase. Actual capital access is positive evidence, while market-dependent funding and discretionary support remain risks. [MSTR issuer report](/reports/mstr/), [raw STRC report](/reports/strc/).

The board’s November 14 declaration and November 15 rate announcement establish **31 December calendar-day records totaling $1.00 per raw STRC share at a 12% annual rate**, scheduled for payment December 2, 2026–January 4, 2027. Calendar entitlements, DTC/broker settlement and actual payment receipts differ. This does not establish wrapper receipts, multiplier accrual, reserve cash recognition, daily token payout or guaranteed yield. Daily and replaced semi-monthly streams must not be counted twice.

MSTR’s issuer-dependency score is 3.5 and raw STRC’s is 3.0. Current STRC outstanding shares, verified cancellations, forward burden and STRC-only runway remain unavailable. Announced MSCI common-share exclusion effective November 30 close is a funding-demand risk; it does not by itself establish a preferred-payment failure, forced BTC sale or a change in this product’s rights.

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

The upstream [November 16 Strategy filing](https://www.sec.gov/Archives/edgar/data/1050446/000119312526462151/mstr-20261116.htm) covers **November 9–15 activity** and **November 15 balances**. The declaration is dated **November 14**, the rate announcement **November 15**, and the filing **November 16**. TID Research adopted the accepted issuer facts on **November 17, 2026**. Filing acceptance UTC remains unknown; a synthetic event midnight is not an acceptance timestamp.

This update does not remeasure reserves, coverage, custody, trading depth, queues, receipt mechanics or settlement. Corporate record dates, actual STRC receipts and wrapper pass-through remain separate. The selected evidence is an isolated producer successor; no live-source activation is implied. [Selected public evidence](/evidence/strategy-2026-11-16/selected-evidence-v2.json) · [Declared calendar](/evidence/strategy-2026-11-16/dividend-calendar-v1.json).

Product scores and the existing TID Research full-verification date, **2026-09-13**, remain unchanged. Earlier product measurements retain their original source dates. Current STRC outstanding shares, verified cancellations, complete future service burden and STRC-only runway remain unavailable.

The separately reviewed [October 29 STRC certificate](https://www.sec.gov/Archives/edgar/data/1050446/000119312526437776/mstr-ex3_2.htm) states effectiveness **November 1 at 00:01 Eastern**, with **November 3** as the first new regular payment date. That legal schedule is distinct from evidence that an individual STRC payment, wrapper receipt or downstream pass-through occurred. Daily and replaced semi-monthly distributions must not be added together.

## Revision history

- **2026-11-17 — scoped issuer-fact adoption.** Incorporated the November 16 filing, November 15 financial balances and declared December calendar. Product scores, full-verification dates and prior product measurement clocks are unchanged; no corporate-calendar-to-wrapper-payout inference or live-source activation.

- **2026-11-10:** Reviewed the November 9 filing, common-funded buybacks and modest cash rebuild; retained scores, full-verification dates and older product/source clocks.

- **2026-11-02:** Updated the Strategy funding dependency and product boundaries. Reorganized the report into the reader-first format; scores and full-verification date unchanged.
- **2026-10-26:** Retained dated multiplier, mark and venue-liquidity observations.
- **2026-09-13:** Reviewed product terms, issuer/custodian identity and Solana pool composition.

</div>
