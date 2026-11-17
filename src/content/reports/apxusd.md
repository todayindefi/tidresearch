---
asset: "apxUSD"
slug: "apxusd"
aliases: ["apxUSD", "Apyx USD", "apxusd-retail"]
chains: ["eth", "base", "bnb"]
category: "stablecoin"
peg_mechanism: "rwa-synthetic"
assessment_type: "light"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=apxusd"
trust_disclaimer: false
date: "2026-04-10"
last_verified: "2026-08-25"
# Scope-limited pass on the 2026-08-31 Strategy 8-K. ⚠️ `last_verified` is
# deliberately NOT bumped — it stamps a whole-body re-read and this was the
# buyback/runway material only.
# ⚠️ 2026-09-09: bridge Safe re-read on-chain — 3-of-6 -> 4-of-7 at block
# 25,877,589 (2026-08-31). The 08-25 owner-set-identity finding was CORRECT WHEN
# WRITTEN; the asset moved under it. `last_verified` HOLDS.
last_revised: "2026-11-17"
featured: false
production: true
# issuer: withheld pending review — this report states the issuing entity is
# Preference Foundation, and describes Apyx as "appearing separate" from DFDV as
# a legal entity. "Apyx (DFDV-affiliated)" therefore names neither the entity the
# report identifies as the issuer nor a relationship the report asserts. Restore
# only with the legal issuer confirmed against the body.
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer.
#   structural_score 4.5 is NEW. ⚠️ It is NOT a re-scope off Issuer — Issuer's
#     5.0 explicitly prices BEHAVIOUR ("not the contract layer"), so the control
#     surface was scored nowhere rather than scored twice.
#   ⚠️ underlying_score 5.0 -> 3.0, and the published 5.0 was UNSOURCED — no
#     rationale row existed anywhere on this page, only the frontmatter field.
#     Adopting riskAnalyst's authored 3.0 rather than defending an unargued
#     number. Contrast usdat, whose 5.5 IS argued.
#   ⚠️ Migrating changes what underlying_score MEANS here — off-frame it is
#     collateral quality, on-frame it is Dependencies — so the value had to be
#     decided WITH the migration.
axis_frame: six
peg_mechanism_score: 3.5
backing_score: 3.0
liquidity_score: 3.5
issuer_score: 5.0
underlying_score: 3.0
structural_score: 4.5
overall_score: 3.5
# audited_reserves: withheld — the reserves are only partly examined, and the
# unexamined part is the one this report keeps flagging. Wolf's engagement narrowed
# to securities-only after 2026-03-31 and the June 2026 report "again excluded cash",
# so the largest reserve component has had no CPA coverage for months; the body also
# states this is "not a full financial-statement audit". `true` asserts the opposite.
assessment_version: "strategy-downstream-2026-11-17-v1"
evidence_version: "strategy-nov16-bm-selected-v2"
selected_evidence_sha256: "ec132f7471123d8deb6122a01290a5bcfa6e461e73d0a645bd5dd68009d95a67"
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-strategy-scoped-report data-strategy-assessment="strategy-downstream-2026-11-17-v1" data-strategy-accession="0001193125-26-462151" data-strategy-review-date="2026-11-17" data-evidence-version="strategy-nov16-bm-selected-v2" data-issuer-deltas-sha256="1c85fd5446ae481ad5fbf627695c40f421f84181363d5726760519a907378537">

# apxUSD — Risk Report

**Significant risk · 3.5/10**

Apyx synthetic dollar · preferred-equity reserve exposure

[Live dashboard](https://tidresearch.com/dashboards/?asset=apxusd)

## Summary

apxUSD is Apyx’s non-yield-bearing dollar token, supported by cash/equivalents and preferred-security exposure including raw or wrapped STRC. apyUSD is the separate yield-bearing wrapper. The amount, valuation and custody of each reserve sleeve require their own dated evidence; this issuer-filing update does not establish current coverage or revalue the reserves.

## 1 · Stability — 3.5

apxUSD targets one dollar through reserve backing, eligible-participant issuance/redemption and market arbitrage. Reserve coverage and the secondary price answer different questions: a reported surplus does not force the token to trade at par.

The October 4 historical window contained 722 price readings, with maximum **$0.994716**, despite reported coverage recovering above par from September 17. This is evidence of a standing discount within that window, not an all-time or current price claim. June stress included a substantially deeper discount and a reserve shortfall.

Official [token](https://docs.apyx.fi/product-overview/apxusd-overview) and [peg-model](https://docs.apyx.fi/solution-overview/peg-stability-model) documentation distinguish Redemption Value from Total Collateral Value and describe an approved-counterparty RFQ process. Primary participation remains restricted to eligible whitelisted participants in permitted jurisdictions, with USDC settlement.

Documentation adoption is not proof of an executable permissionless primary apxUSD→USDC endpoint, an enforceable price floor or a settlement deadline. The November 2 scoped endpoint review found no supported direct on-chain cash endpoint in its declared scope; it did not exclude unlisted or off-chain facilities. Technical token permissions and holding a receipt do not establish primary cash entitlement.

## 2 · Backing — 3.0

Preferred-share values, cash, inventory and protocol-owned liquidity determine reported coverage. Inventory/POL netting changes both sides of the comparison; a netted ratio cannot be combined with gross liabilities. A cash balance or token-unit reconciliation is not independent proof of realizable collateral.

The October 26 **14:47:09 UTC** reserve snapshot reported **$289,398,701.50** against **$289,073,514.82** gross liabilities, a **$325,186.68 surplus**. Gross coverage was **100.1125%**. Removing $70,086,365.30 inventory and $67,445,338.96 protocol-owned liquidity from both sides gave **$151,866,997.24 assets / $151,541,810.56 liabilities**, or **100.2146%** netted coverage.

The **$127,437,270.44 STRC bucket** was **44.04% gross**, **58.11% excluding inventory** and approximately **83.91% of netted assets**. The tokenized slice is part of that bucket, not another reserve. The implied raw-share balance and mark were not independently verified brokerage positions. At fixed netted liabilities and other marks, a 1% loss on the bucket gives approximately **99.37%** coverage; a 5% loss gives **96.01%**. These are dated static sensitivities, not observed losses or forecasts. [Historical reserve evidence](/data/strategy/2026-10-26/apxusd_backing.json).

A thin surplus can be consumed by small mark changes. The November 16 Strategy filing does not measure current Apyx weights, revalue custody positions or establish a new backing deficit.

## 3 · Liquidity & Exit — 3.5

Ordinary holders can sell apxUSD through secondary routes such as Curve apxUSD/USDC. Eligible primary participants have a separate issuer/RFQ route; a larger position does not itself confer that access.

The October 26 **14:52:29 UTC** reviewed market-notional quotes returned **$49,857.89 on $50K** and **$99,644.08 on $100K**. These are indicative quotes at market value, include route effects and fees, and do not promise redemption at $1. Gas and actual execution conditions remain separate.

Depth depends on venue liquidity, market-maker participation, time of day and stress. Historical issuer-provided liquidity could be withdrawn off-hours; a snapshot ladder is not a committed book. A depeg, collateral loss or primary-access restriction can affect both expected proceeds and the ability to realize them.

## 4 · Dependencies — 3.0

**Documented route:** apxUSD reserve exposure through raw STRC and/or STRCx → Strategy; these are look-through paths, not additive independent backing. Current reserve weights are not remeasured here.

The [November 16 Strategy 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526462151/mstr-20261116.htm) reports November 9–15 activity and November 15 balances: **$151.2m general USD Cash**, **$4.75bn service USD Reserve**, and **850,849 BTC**. General cash rose $5.0m this week and $18.5m across two successive filings. The latest two periods show modest rebuilding. Continued access to funding remains important. The separate service reserve is not a ring-fenced STRC collateral pool.

Common ATM net proceeds of **$244.7m** funded $33.4m BTC purchases, $206.3m STRC repurchases and $5.0m general cash. A further **$21.8m of earned interest** funded the rest of the **$228.1m** repurchases; these amounts must not be deducted again from reported ending cash. BTC purchases of 485 match the current holdings increase. Actual capital access is positive evidence, while market-dependent funding and discretionary support remain risks. [MSTR issuer report](/reports/mstr/), [raw STRC report](/reports/strc/).

The board’s November 14 declaration and November 15 rate announcement establish **31 December calendar-day records totaling $1.00 per raw STRC share at a 12% annual rate**, scheduled for payment December 2, 2026–January 4, 2027. Calendar entitlements, DTC/broker settlement and actual payment receipts differ. This does not establish wrapper receipts, multiplier accrual, reserve cash recognition, daily token payout or guaranteed yield. Daily and replaced semi-monthly streams must not be counted twice.

MSTR’s issuer-dependency score is 3.5 and raw STRC’s is 3.0. Current STRC outstanding shares, verified cancellations, forward burden and STRC-only runway remain unavailable. Announced MSCI common-share exclusion effective November 30 close is a funding-demand risk; it does not by itself establish a preferred-payment failure, forced BTC sale or a change in this product’s rights.

This propagation applies to the identified preferred-equity reserve exposure, not Apyx's separate aptUSD/alqUSD Treasury products. It does not supply new recovery rights or establish current cash accrual.

## 5 · Contract & Admin — 4.5

Apyx's token, custody and bridge controls govern different parts of the asset. A delay on token governance does not delay movement of off-chain-backed reserve tokens through another administrative route.

Historical Ethereum observations identify three distinct administrative paths:

| Role | Observed control | Timing |
|---|---|---|
| Token governance / AccessManager | 4-of-6 Safe | 72-hour token-governance delay |
| STRCx reserve custody | 3-of-6 Safe | No measured delay |
| Bridge governance | 4-of-7 Safe after August 31 | No measured delay |

At the September 9 observation, the token and custody Safes shared the same six owners; the bridge Safe contained those six plus one. Lower custody quorum and the undelayed bridge route remain separate from the token timelock. Signer independence is not established by separate Safe addresses.

[Token governance](https://etherscan.io/address/0xABdd8c8eE69e5F5180eb9352AEFFC5CeeAD65e96), [reserve custody](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555), [bridge governor](https://etherscan.io/address/0xf9862EfC1704aC05e687f66E5cD8c130E5663cE2).

These are dated observations, not November live-role attestations or full per-chain coverage. Audit disclosures do not alone establish current deployed-code or privileged-role coverage. The earlier published audits and formal-verification claims were not rebound to every current implementation, and current bounty coverage was not established in this refresh.

## 6 · Issuer — 5.0

The reviewed Wolf attestation identifies **Preference Foundation**, with director **Carolyn Kelly** signing; **Alpaca** is named as brokerage. This distinguishes the attested entity and brokerage from DFDV's public-company relationship to Apyx. That relationship does not create a guarantee of token liabilities.

The [attestation documents](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) provide a securities-balance examination rather than a complete financial-statement audit. The reviewed June examination, signed July 22, excluded cash/stablecoins and liabilities from its securities-only scope. The [Accountable feed](https://accountable.apyx.fi) reports inputs through a TEE; it does not independently audit brokerage assets, custody practices or wallet keys.

Entity jurisdiction, enforceable holder recourse, governing law/disputes and a complete current financial audit remain unestablished here. Issuer 5.0 is carried from the earlier assessment, rather than derived from a new legal review.

## What to watch

- Consistently defined reserve coverage, independent marks and changes in STRC concentration.
- Fresh secondary quotes, market discount and evidence of actual primary settlement access.
- Attestation scope, custody assurance and Strategy cash rebuilding versus support spending.

## Sources and review scope

The upstream [November 16 Strategy filing](https://www.sec.gov/Archives/edgar/data/1050446/000119312526462151/mstr-20261116.htm) covers **November 9–15 activity** and **November 15 balances**. The declaration is dated **November 14**, the rate announcement **November 15**, and the filing **November 16**. TID Research adopted the accepted issuer facts on **November 17, 2026**. Filing acceptance UTC remains unknown; a synthetic event midnight is not an acceptance timestamp.

This update does not remeasure reserves, coverage, custody, trading depth, queues, receipt mechanics or settlement. Corporate record dates, actual STRC receipts and wrapper pass-through remain separate. The selected evidence is an isolated producer successor; no live-source activation is implied. [Selected public evidence](/evidence/strategy-2026-11-16/selected-evidence-v2.json) · [Declared calendar](/evidence/strategy-2026-11-16/dividend-calendar-v1.json).

Product scores and the existing TID Research full-verification date, **2026-08-25**, remain unchanged. Earlier product measurements retain their original source dates. Current STRC outstanding shares, verified cancellations, complete future service burden and STRC-only runway remain unavailable.

The separately reviewed [October 29 STRC certificate](https://www.sec.gov/Archives/edgar/data/1050446/000119312526437776/mstr-ex3_2.htm) states effectiveness **November 1 at 00:01 Eastern**, with **November 3** as the first new regular payment date. That legal schedule is distinct from evidence that an individual STRC payment, wrapper receipt or downstream pass-through occurred. Daily and replaced semi-monthly distributions must not be added together.

## Revision history

- **2026-11-17 — scoped issuer-fact adoption.** Incorporated the November 16 filing, November 15 financial balances and declared December calendar. Product scores, full-verification dates and prior product measurement clocks are unchanged; no corporate-calendar-to-wrapper-payout inference or live-source activation.

- **2026-11-10:** Reviewed the November 9 filing, common-funded buybacks and modest cash rebuild; retained scores, full-verification dates and older product/source clocks.

- **2026-11-02:** Incorporated the Strategy funding update and clarified product boundaries. Consolidated redemption documentation and historical evidence into descriptive axes; scores and full-verification date unchanged.
- **2026-10-26:** Retained dated reserve, concentration and secondary-quote observations.
- **2026-10-04:** Recorded reserve recovery and the historical discount window; no new price window is inferred here.

</div>
