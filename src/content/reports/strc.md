---
asset: STRC
slug: strc
aliases:
- STRC
- Stretch
- Strategy Variable Rate Preferred
- Series A Perpetual Strategy Preferred Stock
chains: []
category: tradfi-equity
assessment_type: dependency
date: '2026-05-29'
last_verified: '2026-08-24'
last_revised: "2026-11-02"
issuer: Strategy Inc.
underlying_assets:
- mstr
volatility_score: 5.0
liquidity_score: 7.0
counterparty_score: 3.0
redemption_score: 5.0
overall_score: 3.0
yield_bearing: true
production: true
featured: false
live_dashboard_url: https://tidresearch.com/dashboards/?asset=strc
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-strategy-scoped-report>

# STRC — Risk Report

**Elevated risk · 3.0/10**

Strategy variable-rate perpetual preferred stock · raw Nasdaq-listed security

[Live dashboard](https://tidresearch.com/dashboards/?asset=strc)

## Summary

STRC is Strategy's perpetual, variable-rate preferred stock. Its market price, dividend terms and issuer funding determine holder outcomes. The $100 stated amount is a contractual reference, not an ordinary holder's guaranteed exit price.

Strategy resumed common issuance in the November 2 filing while continuing STRC buybacks. General cash still declined to $132.7M. This assessment covers the listed security; token wrappers add separate custody, access and liquidity risks.

## 1 · Volatility and par behavior — 5.0

STRC can trade below its $100 stated amount despite issuer support. The historical October 28 dataset showed a recent-month mean around **$99.23**, versus **$97.25** across its 90-day window. Those samples include repeated closed-market quotes and are not current execution prices.

Strategy may adjust dividends and repurchase shares. Its support is discretionary, not a promise to lift the rate whenever price falls or buy every offered share at par. The historical recorded rate was 12%; the November weekly filing establishes neither a new rate nor effective daily payments. Future price behavior under any payment change remains a separate observation.

## 2 · Liquidity and exit — 7.0

Holders generally sell on Nasdaq through eligible brokerage accounts. Market access, trading sessions, spreads and order size affect the proceeds. The issuer's average buyback execution is evidence of its own bid, not an executable offer to all holders.

No current order-book or size-by-size executable ladder for raw STRC was measured in this review. The listed security's venue/access rating must not be transferred to STRCx or DeFi reserve tokens; their token venues and redemption permissions differ. Sale cost relative to market value is distinct from the discount to $100.

## 3 · Counterparty and support durability — 3.0

STRC depends on Strategy's willingness and ability to service preferred claims. Its BTC assets and funding routes provide capacity, while concentrated assets and discretionary support expose holders to correlated stress. The prior ranking assessment places STRC behind debt and STRF; legal priority terms retain their original verification scope.

Strategy's [November 2 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526442707/mstr-20261102.htm) reports **1,178,552 common shares sold for $164.0M net**, with **$65.5M used for BTC purchases** and **$98.5M allocated to general USD Cash**. STRC buybacks cost **$208.2M**, so general cash still fell from **$242.4M to $132.7M**, a **45.3% decline**. Common-equity access resumed, but the disclosed cash allocation did not cover buyback spending. This is financing access, not sustained cash rebuilding.

The separate USD Reserve ended at **$4.79B**, down from the prior rounded $4.83B, after **$43.4M of preferred dividend payments**. Those payments are not identified as STRC-only. Remaining preferred repurchase authorization is **$748.6M**: permission to spend, not available cash or a guaranteed par exit. No preferred ATM sales were reported.

The filing discloses **2,092,035 STRC shares repurchased**. Repurchases do not alone establish retirement/cancellation or a current outstanding count, so no revised service-burden or runway estimate is inferred. Continued near-par trading while the issuer buys does not prove the price would persist if support slowed. The [MSTR report](/reports/mstr/) supplies the issuer funding assessment.

## 4 · Redemption and holder rights — 5.0

STRC is perpetual preferred equity, without an ordinary holder right to redeem at $100 on demand. Issuer redemption rights and contingent investor remedies have specific legal conditions; they are not an everyday cash exit. Neither the designated USD Reserve nor repurchase authorization is ring-fenced holder collateral.

Dividend declarations, payment cadence and effective amendments need their own legal evidence. A payment-frequency proposal does not increase annual entitlement or establish that a downstream wrapper has received or accrued cash. The weekly 8-K does not replace that review.

## What to watch

- General-cash rebuilding versus ongoing STRC buybacks and the source of financing.
- Preferred/interest service resources separately from discretionary support cash.
- Current legal terms, investor remedies and evidence of outstanding shares after repurchases.
- Price and executable stock-market liquidity during a reduction in issuer support.

## Downstream boundary

[STRCx](/reports/strcx/) adds Backed custody, accrual and token-market constraints. Apyx reserves and Ethereum Saturn sUSDat have identified STRC routes, with their own reserves and settlement rules. Strata senior shares and PTs add further conversion and loss-waterfall terms. USDat's separate PYUSDx route is not direct STRC backing.

## Sources and review scope

The November 2 filing is incorporated from retained SEC HTML and issuer-hosted PDF evidence checked against DeFiAnalyst's source hashes. The filing includes shares sold but not yet settled as of October 30. [Issuer-hosted filing copy](https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/blte93fe0f1dbd00c0c/6ae80aa9f59c3f3fd5ce7aac/form-8-k_11-02-2026.pdf). Live SEC retrieval was unsuccessful during review; it is not represented as a fresh successful fetch. [Filing observations and provenance](/data/strategy/2026-11-02/filing-observations.json) identify the source, activity period and balance date.

The October 28 shared dashboard snapshot below is historical. Its financial anchor is October 26; its prices, mNAV windows, payment-cadence field and modeled service values are not November 2 measurements. The daily-dividend proposal requires separate vote and legal-effectiveness evidence. No new approval, rate or effective payment schedule is inferred from this weekly filing. A new share count or service-burden estimate awaits retirement/cancellation and outstanding-share evidence. Cash and Reserve are distinct and neither is ring-fenced STRC collateral.

The June 30 filed base of 104,894,705 STRC shares and the October 28 reconciliation of 20,980,508 cumulative retirements produced a historical derived count of 83,914,197 through the October 26 filing. Those values are not advanced by subtracting newly reported repurchases without confirming their treatment. Historical October 5 repurchases were $102.6M for September 28–30 and $73.7M for October 1–4; the archived mixed-period cell remains withheld. [Reconciliation evidence](/data/strategy/reconciliation-2026-10-28/sources.json).

The model's mNAV is enterprise value divided by BTC reserve value, using its debt, preferred and cash assumptions; it is not common market capitalization divided by gross BTC. Historical means include repeated closed-market quotes and depend on provisional share-count inputs. No precise cash-exhaustion, service-life or default date is established. Live model publication may retain an older financial anchor until its own producer review is complete; the primary filing facts above do not depend on that refresh.


The filing covers activity **October 26–November 1**, with ending balances **November 1**. It reports **811 BTC purchased** and **849,327 BTC held**, while the increase over the prior 848,517 is **810 BTC**. The difference remains unreconciled; no sale, loss or rounding explanation is assumed. The weekly 8-K establishes no new dividend rate, daily-dividend effectiveness or wrapper pass-through. Repurchases alone do not establish cancellation, current outstanding shares or a revised dividend-service burden.

Scores are unchanged: Counterparty **3.0**, Overall **3.0**. Full verification remains **August 24, 2026**; November 2 is a scoped filing revision.

## Scoring Rationale

| Category | Score | Notes |
|---|---|---|
| Volatility | 5.0 | Sustained recovery toward par in the shared history, but a discretionary anchor and a history of substantial discounts. |
| Liquidity | 7.0 | Listed-market infrastructure and brokerage access; no order-book depth claim or substitution of a wrapper ladder. |
| Counterparty | 3.0 | Repeated general-cash depletion behind discretionary support; intact service reserve and reduced future coupons provide counterevidence. |
| Redemption | 5.0 | Perpetual instrument without routine holder redemption at par; event-driven rights do not create an everyday exit guarantee. |
| Overall | 3.0 | The four-axis mean is 5.0; Overall is 2.0 below the mean and equal to Counterparty. Strong secondary-market access cannot average away the binding issuer risk. |

## Historical shared evidence — October 28

<details>
<summary>Historical snapshot, ending October 28; not current filing or market terms</summary>

<!-- strategy-shared-evidence:start -->
Shared dashboard feed: **2026-10-28T06:50:13Z**. Financial observations retain their filing dates; a fresh feed does not make an older filing or market close new.

| Shared-history measure | Last 7 days | Last 30 days | Last 90 days |
|---|---:|---:|---:|
| STRC observed marks | 211 | 903 | 2717 |
| Mean STRC price | $99.21 | $99.23 | $97.25 |
| Observed STRC price range | $98.65–$99.65 | $97.70–$99.92 | $87.51–$99.92 |
| Compatible v2 mNAV observations | 211 | 903 | 2717 |
| Mean producer mNAV (EV/BTC) | 1.118× | 1.128× | 1.094× |

Window end: **2026-10-28T06:50:13Z**. The 90-day sample starts **2026-07-30T07:49:58Z**; largest gap between observations within it is **2.21 hours**. These are arithmetic means of retained observations, not time-weighted prices or trading-day closes. Repeated closed-market stock quotes are included, so counts are not independent trades. mNAV includes only rows explicitly labelled v2; older unversioned values are excluded. Historical mNAV inherits the producer's historical share-count and preferred-value assumptions.

| Filing date | General USD Cash | USD Reserve | STRC repurchased in disclosed period |
|---|---:|---:|---:|
| 2026-10-05 | $833.4M | $4.88B | Withheld: mixed-period extraction corrected after this snapshot |
| 2026-10-13 | $640.5M | $4.88B | $192.4M |
| 2026-10-19 | $447.3M | $4.83B | $193.1M |
| 2026-10-26 | $242.4M | $4.83B | $204.9M |

Amounts are discrete filing observations, not a daily cash series. Disclosed periods differ in length. The archived October 5 repurchase event mixed two tables and is withheld here; see the subsequent reconciliation note. No interpolation or annualized weekly buyback burn is used.

Latest filing: **0001193125-26-431146**, filed **2026-10-26**. Unspent preferred repurchase authorization: **$956.8M**; BTC held: **848,517**. Authorization is not cash.

Observed STRC rate: **12.00%**, current recorded payment cadence **semi-monthly**. Proposed November daily terms are separately conditional; do not count both replacement schedules.

**Model-quality limit:** the source flags `STRC_OUTSTANDING_BASE_AGED`. Its derived share count, absolute service obligations, preferred-value inputs and runway are provisional. No precise modeled service life is endorsed by this report.
<!-- strategy-shared-evidence:end -->

</details>

## Revision history

- **2026-11-02:** Updated common issuance, cash allocation, buybacks and Reserve use, while retaining share-count and dividend-effectiveness gaps. Scores and full-verification date unchanged. Reorganized presentation to the reader-first format.
- **2026-10-28:** Shared-source review and historical share-count reconciliation. The October 28 quantitative snapshot retains its original dates.

</div>
