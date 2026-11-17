---
asset: "apyUSD"
slug: "apyusd"
aliases: ["apyUSD", "Apyx USD Yield"]
chains: ["eth", "base"]
category: "vault-share"
underlying_assets: ["apxUSD"]
yield_bearing: true
assessment_type: "light"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=apyusd"
trust_disclaimer: false
date: "2026-05-07"
# ⚠️ 2026-09-09: bridge Safe re-read on-chain — 3-of-6 -> 4-of-7 at block
# 25,877,589 (2026-08-31). The 08-25 measurement was CORRECT WHEN WRITTEN; the
# asset moved under it. ⚠️ The custody Safe is STILL 3-of-6 on the same six as
# token governance, so the quorum gap survives there. `last_verified` HOLDS.
last_revised: "2026-11-17"
last_verified: "2026-08-25"
featured: false
production: true
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#   backing_score 2.0 is NEW and is the LOWEST axis on this report. Inherited
#     from apxUSD, whose reserve this share's value rests on. ⚠️ 2026-10-04: no longer
#     below par — 101.5602% netted, continuously at or above par since 2026-09-17. roughly 74% STRC family net of inventory,
#     ~13% reflexive POL. ⚠️ This report had no backing axis at all, so the one
#     thing actually driving the 3.0 was scored nowhere.
#     ⚠️ PREMISE CHANGED — apxUSD's collateral ratio crossed back above par and
#     HOLDS since 2026-09-17 (NOT 09-11: it crossed 21 times between 09-04 and 09-17)
#     ABOVE par and has held since, on the netted basis, the gross basis and an
#     independent conservative re-mark. The score has NOT been re-derived: the
#     concentration half of the rationale is unchanged, and the margin is thin
#     (~25bp median) and days old. Noted HERE because nothing renders a comment,
#     so no sweep of published prose reaches it — the strcx shape, where a right
#     finding sat in a comment while the body stayed wrong for weeks.
#   underlying_score 3.0 is RETAINED and now renders as DEPENDENCIES, tracking
#     apxUSD's OVERALL rather than its reserve — a different question from
#     Backing, and the reason the two differ by a point. The chain is
#     apyUSD -> apxUSD -> STRC -> MSTR -> BTC, and holding apxUSD alongside
#     this does not diversify.
#   liquidity_score 3.5 unchanged; both legs land together and the binding
#     constraint is named in the axis prose — BOTH exits terminate in a
#     asset that trades below $1 — now a MARKET fact, not a backing one, since the
#     collateral ratio recovered and the discount did not. That is what holds the
#     axis down rather than depth.
#   structural_score 5.0 is Contract & Admin already. volatility_score is the
#     Stability key. issuer_score unchanged at 5.0.
# ⚠️ `redemption_score: 3.5` is RETAINED but no longer rendered: it is the
# evidence for axis 3, and both legs are stated in prose under that heading.
axis_frame: six
volatility_score: 5.5
backing_score: 3.0
liquidity_score: 3.5
underlying_score: 3.0
structural_score: 4.5
issuer_score: 5.0
# ✅ FOLD DECLARED 2026-10-04 (riskAnalyst): redemption folds into axis 3. No number
# moved on the fold — redemption 3.5 against liquidity 3.5, so neither was the worse link.
# ⚠️ NOT DROPPED: `category: vault-share` resolves to `wrappedAxes`, where this field is
# REQUIRED; deleting it fails the build. Retiring it needs the shared schema relaxed for
# all 31 reports carrying it, while riskAnalyst's own migration is incomplete.
# PARKED: retire once the schema change is scoped [owner: tidr] [since: 2026-10-04]
redemption_score: 3.5
overall_score: 4.0
assessment_version: "strategy-downstream-2026-11-17-v1"
evidence_version: "strategy-nov16-bm-selected-v2"
selected_evidence_sha256: "ec132f7471123d8deb6122a01290a5bcfa6e461e73d0a645bd5dd68009d95a67"
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-strategy-scoped-report data-editorial-revision="strategy-style-2026-11-17-v1" data-strategy-assessment="strategy-downstream-2026-11-17-v1" data-strategy-accession="0001193125-26-462151" data-strategy-review-date="2026-11-17" data-evidence-version="strategy-nov16-bm-selected-v2" data-issuer-deltas-sha256="1c85fd5446ae481ad5fbf627695c40f421f84181363d5726760519a907378537">

# apyUSD — Risk Report

**Significant risk · 4.0/10**

Apyx yield-bearing vault share · apxUSD underlying

[Live dashboard](https://tidresearch.com/dashboards/?asset=apyusd)

## Summary

apyUSD is Apyx’s yield-bearing share over apxUSD. Its share value depends on apxUSD’s backing and the wrapper’s accounting and exit mechanics. Receipt claims, fees, payout in apxUSD and any final USDC settlement are distinct steps. The underlying corporate dividend calendar is not a promise of daily wrapper cash delivery.

## 1 · Stability — 5.5

apyUSD's reference value is apxUSD per share. Both that exchange rate and the dollar value of apxUSD matter to a holder. NAV can accrue while the market price of the unit it is measured in remains discounted.

The October 4 historical review observed monotonic share NAV across 722 readings, yet no DEX reading at or above NAV within that window. A formula based on assets per share cannot independently validate the assets' own marks. The June incident record also included a dashboard NAV error linked to STRCx pricing, so smoothness alone is weak reserve evidence.

A one-time launch-seed jump of approximately 33% in February was distinct from the roughly 13% annualized ongoing accrual reported later in the historical observations. Neither figure is a current promised yield. New dividend cadence or issuer proceeds do not automatically establish wrapper receipt and pass-through.

## 2 · Backing — 3.0

apyUSD holds apxUSD, so shares multiplied by their exchange rate are an accounting identity, not a separate reserve cushion. The parent reserve's asset quality, marks and liabilities pass through.

The October 26 **14:47:09 UTC** reserve snapshot reported **$289,398,701.50** against **$289,073,514.82** gross liabilities, a **$325,186.68 surplus**. Gross coverage was **100.1125%**. Removing $70,086,365.30 inventory and $67,445,338.96 protocol-owned liquidity from both sides gave **$151,866,997.24 assets / $151,541,810.56 liabilities**, or **100.2146%** netted coverage.

The **$127,437,270.44 STRC bucket** was **44.04% gross**, **58.11% excluding inventory** and approximately **83.91% of netted assets**. The tokenized slice is part of that bucket, not another reserve. The implied raw-share balance and mark were not independently verified brokerage positions. At fixed netted liabilities and other marks, a 1% loss on the bucket gives approximately **99.37%** coverage; a 5% loss gives **96.01%**. These are dated static sensitivities, not observed losses or forecasts. [Historical reserve evidence](/data/strategy/2026-10-26/apxusd_backing.json).

These are historical parent-reserve measurements. They do not remeasure current vault holdings, apxUSD redemption eligibility or the amount of cash ultimately recoverable.

## 3 · Liquidity & Exit — 3.5

There are two routes: sell the share through secondary markets, or redeem through the receipt path into apxUSD and then arrange a separate sale or eligible primary settlement. The applicable constraint depends on size, current venue depth, fees and access to the terminal leg.

At the October 26 reviewed observation, the share rate was **1.448195 apxUSD**, the CoinGecko discount **−2.6630%** versus timed NAV, and the $50K market-notional routed quote returned **$49,759.98**. That quote is not a recovery-at-NAV offer. Market discount and execution cost are distinct and must not be deducted twice.

At Ethereum block **26,324,501**, November 2 **03:47:59 UTC**, new withdraw/redeem requests used an **Unlock Receipt NFT**. The measured terms were a **0.1% upfront, non-refundable vault fee**, plus a separate receipt fee of **2.5% through day 3**, declining **nonlinearly to zero at day 20** with curvature **0.75** and fee amounts rounded up. Claims begin after 259,200 seconds (three days) and pay **apxUSD, not USDC**. Waiting until day 20 removes the receipt fee, not the upfront charge. Configuration is mutable and chain-specific availability was not established universally.

The [unlocking documentation](https://docs.apyx.fi/technical-overview/unlocking) mixes legacy UnlockToken and receipt descriptions; its linear approximately 3.5%→0.1% example does not describe that measured active configuration. At block **26,326,100**, November 2 **09:08:35 UTC**, the accepted receipt snapshot reconciled 1,304 IDs, 183 live receipts and 171 time-eligible receipts, with face liabilities equal to held apxUSD units. Time eligibility and token coverage are not universal claim-execution or fiat-solvency attestations. [Receipt contract](https://etherscan.io/address/0x9bf51f33955ec70f87c4b5c49441815589043237).

Official [token](https://docs.apyx.fi/product-overview/apxusd-overview) and [peg-model](https://docs.apyx.fi/solution-overview/peg-stability-model) documentation distinguish Redemption Value from Total Collateral Value and describe an approved-counterparty RFQ process. Primary participation remains restricted to eligible whitelisted participants in permitted jurisdictions, with USDC settlement.

Documentation adoption is not proof of an executable permissionless primary apxUSD→USDC endpoint, an enforceable price floor or a settlement deadline. The November 2 scoped endpoint review found no supported direct on-chain cash endpoint in its declared scope; it did not exclude unlisted or off-chain facilities. Technical token permissions and holding a receipt do not establish primary cash entitlement.

Pendle PT maturity does not automatically deliver cash. A market's accounting unit and SY conversion determine the underlying amount, so one PT need not equal one apyUSD share. PT conversion, receipt claims into apxUSD and final USDC settlement have separate conditions. No mandatory pre-maturity roll or exit deadline was established for the reviewed Apyx PT. [Pendle PT documentation](https://docs.pendle.finance/pendle-v2/ProtocolMechanics/YieldTokenization/PT).

## 4 · Dependencies — 3.0

apyUSD depends on apxUSD’s reserve, including raw STRC/STRCx exposure to Strategy. The receipt claim pays apxUSD; primary eligibility and final USDC settlement remain separate from the underlying preferred-share income.

Strategy’s [November 16 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526462151/mstr-20261116.htm), covering November 9–15 activity and November 15 balances, reports **$151.2m general cash**, a separate **$4.75bn service Reserve** and **850,849 BTC**. General cash rose $5.0m for the week and $18.5m across two filings. Common proceeds and earned interest funded the buybacks without a second deduction from ending cash. Access to market financing and discretionary support still matter; the Reserve is not ring-fenced STRC collateral.

The board’s November 14 declaration and November 15 rate announcement set **31 December calendar-day records, totaling $1.00 per raw STRC share at 12% annually**, with payments scheduled **December 2, 2026–January 4, 2027**. These entitlements do not establish wrapper receipts, multiplier accrual, reserve cash recognition, daily token payments or guaranteed yield. DTC/broker settlement and actual receipts remain separate; daily and replaced semi-monthly streams must not be added together.

MSCI’s announced common-share exclusion, effective November 30 close, can affect funding demand. It does not establish a preferred-payment failure, forced BTC sale or changed wrapper rights.

Apyx’s separate aptUSD/alqUSD Treasury products have different reserve exposures. Preferred-share income does not establish current token cash accrual or new holder recovery rights.

## 5 · Contract & Admin — 4.5

The vault share, active receipt contract and parent token/custody controls form one execution chain. Standard ERC-4626 share issuance does not remove parent-asset or administrative risk. The dated share-source inspection found no privileged share-mint backdoor; assurance for the current redemption implementation remains separate.

Historical Ethereum observations identify three distinct administrative paths:

| Role | Observed control | Timing |
|---|---|---|
| Token governance / AccessManager | 4-of-6 Safe | 72-hour token-governance delay |
| STRCx reserve custody | 3-of-6 Safe | No measured delay |
| Bridge governance | 4-of-7 Safe after August 31 | No measured delay |

At the September 9 observation, the token and custody Safes shared the same six owners; the bridge Safe contained those six plus one. Lower custody quorum and the undelayed bridge route remain separate from the token timelock. Signer independence is not established by separate Safe addresses.

[Token governance](https://etherscan.io/address/0xABdd8c8eE69e5F5180eb9352AEFFC5CeeAD65e96), [reserve custody](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555), [bridge governor](https://etherscan.io/address/0xf9862EfC1704aC05e687f66E5cD8c130E5663cE2).

These are dated observations, not November live-role attestations or full per-chain coverage. Audit disclosures do not alone establish current deployed-code or privileged-role coverage. A complete current implementation match to the published audits and formal-verification claims, and applicable bounty coverage, remain unestablished.

## 6 · Issuer — 5.0

apyUSD uses the same Apyx issuer and reserve infrastructure as apxUSD, so the two products share issuer and reserve risks.

The reviewed Wolf attestation identifies **Preference Foundation**, with director **Carolyn Kelly** signing; **Alpaca** is named as brokerage. This distinguishes the attested entity and brokerage from DFDV's public-company relationship to Apyx. That relationship does not create a guarantee of token liabilities.

The [attestation documents](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) provide a securities-balance examination rather than a complete financial-statement audit. The reviewed June examination, signed July 22, excluded cash/stablecoins and liabilities from its securities-only scope. The [Accountable feed](https://accountable.apyx.fi) reports inputs through a TEE; it does not independently audit brokerage assets, custody practices or wallet keys.

Entity jurisdiction, enforceable holder recourse, governing law/disputes and a complete current financial audit remain unestablished.

## What to watch

- Parent reserve coverage and independently verifiable STRC/STRCx custody and marks.
- Receipt configuration changes, claim execution and fresh secondary-route quotes.
- Actual Strategy cash replenishment and wrapper-specific evidence of dividend receipt/accrual.

## Sources and review scope

The upstream [November 16 Strategy filing](https://www.sec.gov/Archives/edgar/data/1050446/000119312526462151/mstr-20261116.htm) covers **November 9–15 activity** and **November 15 balances**. The declaration is dated **November 14**, the rate announcement **November 15**, and the filing **November 16**. TID Research adopted the accepted issuer facts on **November 17, 2026**. Filing acceptance UTC remains unknown; a synthetic event midnight is not an acceptance timestamp.

Reserve, coverage, custody, trading-depth, queue, receipt and settlement observations retain their own dates; the issuer filing does not renew them. Corporate record dates, actual STRC receipts and wrapper pass-through remain separate. Immutable filing evidence and live monitoring are distinct sources. [Selected public evidence](/evidence/strategy-2026-11-16/selected-evidence-v2.json) · [Declared calendar](/evidence/strategy-2026-11-16/dividend-calendar-v1.json).

Full-verification date: **2026-08-25**. Product measurement dates are shown beside the observations. Current STRC outstanding shares, verified cancellations, complete future service burden and STRC-only runway remain unavailable.

The separately reviewed [October 29 STRC certificate](https://www.sec.gov/Archives/edgar/data/1050446/000119312526437776/mstr-ex3_2.htm) states effectiveness **November 1 at 00:01 Eastern**, with **November 3** as the first new regular payment date. That legal schedule is distinct from evidence that an individual STRC payment, wrapper receipt or downstream pass-through occurred. Daily and replaced semi-monthly distributions must not be added together.

### Dated issuer funding details

The November 16 filing reports November 9–15 activity and November 15 balances. The following figures describe Strategy, not assets held in the token reserve.

| Observation | Disclosed amount / meaning |
|---|---|
| General cash / service Reserve | $151.2m / $4.75bn; separate balances |
| BTC holdings / purchases | 850,849 BTC / 485 BTC; purchases match the holdings increase |
| General-cash change | +$5.0m for the week; +$18.5m across two successive filings |
| Common ATM proceeds and allocation | $244.7m = $33.4m BTC + $206.3m STRC repurchases + $5.0m general cash |
| STRC repurchase funding | $228.1m = $206.3m common proceeds + $21.8m earned interest; not a second deduction from ending cash |

The [MSTR issuer assessment](/reports/mstr/) is 3.5 and the [raw STRC assessment](/reports/strc/) is 3.0. Neither is a wrapper custody, liquidity or distribution guarantee. Current outstanding shares, verified cancellations, forward service burden and STRC-only runway remain unavailable.

## Revision history

- **2026-11-17 — editorial cleanup.** Replaced score-carrying and report-history commentary in the axes with current mechanism and risk explanations; shortened repeated issuer background and moved supporting detail to the end. Numerical judgments, financial facts, original observation clocks and full-verification dates are unchanged.

- **2026-11-17 — scoped issuer-fact adoption.** Incorporated the November 16 filing, November 15 financial balances and declared December calendar. Product scores, full-verification dates and prior product measurement clocks are unchanged; no corporate-calendar-to-wrapper-payout inference or live-source activation.

- **2026-11-10:** Reviewed the November 9 filing, common-funded buybacks and modest cash rebuild; retained scores, full-verification dates and older product/source clocks.

- **2026-11-02:** Updated Strategy funding and clarified the inherited reserve path. Retained active receipt fees, apxUSD payout, eligibility and PT conversion limits. Reorganized main content into descriptive axes without routine alerts; scores and full-verification date unchanged.
- **2026-10-26:** Retained dated parent-reserve, share-rate and exit observations.
- **2026-10-04:** Recorded historical NAV and market-discount evidence; those windows are not restamped as current.

</div>
