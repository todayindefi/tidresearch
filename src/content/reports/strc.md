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
last_revised: '2026-10-28'
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

# strc — Risk Report

**Elevated risk · 3.0/10**

STRC is Strategy's perpetual, variable-rate preferred stock. This is the **raw listed security**, distinct from the Backed STRCx wrapper and DeFi reserve tokens. Its [dashboard](https://todayindefi.github.io/backing-monitor/?asset=strc) and this report share `strc_backing.json`, `strc_backing_history.json` and `strategy_events.json`. The report interprets repeated behavior and contractual structure; the dashboard supplies current observations. Four instrument-specific axes are retained.

## Summary

STRC is Strategy’s perpetual, variable-rate preferred stock. Its recent trading is closer to its $100 stated amount, while the durability of issuer support and dividend funding remains the central risk. This report covers the raw listed security.

## 1 · Volatility and par behavior — 5.0

**There has been a meaningful recovery toward par, without a contractual $100 exit.** The shared history's recent-month mean is around $99.23, above the approximately $97.25 mean over the retained 90-day window. The latest-week mean remains close to that recent-month level. This is stronger evidence of sustained near-par trading than one favorable quote, although the observations include repeated closed-market prices and are not independent executed trades.

The issuer can adjust the dividend rate and repurchase shares, but the current policy is a discretionary soft floor, not an automatic promise to raise the rate whenever the price falls. The recorded annual rate has remained 12% across several months while buybacks continued. Rate stability avoids the immediate compounding of service costs that further hikes would create; it does not guarantee that buyers will always accept the stock near par.

**Volatility scores 5.0.** The recent recovery deserves credit, while the wider history demonstrates that a perpetual preferred can trade substantially below its stated amount. Par is a contractual reference, not a stablecoin peg or an ordinary holder redemption price. Proposed daily payments may alter timing effects if implemented, but improved price stability from that change is not yet established.

## 2 · Liquidity and exit — 7.0

**A Nasdaq listing and normal brokerage access are materially stronger exit infrastructure than the thin wrapper venues.** This assessment belongs to raw STRC. It must not be transferred to STRCx, Apyx, Saturn or a PT simply because they inherit the same issuer risk.

**Liquidity scores 7.0** as a venue/access assessment. The shared STRC dataset does not contain an order-book or routed size-by-size executable ladder for the listed security, so this report does not invent a dollar depth threshold or import the wrapper's DEX ladder. Typical venue accessibility does not establish how much stock can be sold during a stressed session. Market closure, brokerage access, spreads and execution price remain relevant. The issuer's average repurchase execution is evidence about its own bid, not a holder's executable quote.

For market execution, compare proceeds with the prevailing market value; use the separate par-behavior axis to discuss the standing discount to $100. An unexplained difference between those two references must not become a second liquidity penalty.

## 3 · Counterparty and support durability — 3.0

**The key vulnerability is a strengthening market price alongside weakening cash funding for support.** The shared filing history shows repeated general-cash declines while STRC repurchases persist. The latest filing has no new ATM sales and no BTC transaction; it explicitly funds repurchases from general cash. The separate service reserve has held flat in the latest two observations, so exhaustion of the general buyback pocket is not equivalent to running out of funds for dividends.

Repurchases reduce outstanding shares and future dividends, which is constructive. They also consume cash that might otherwise replenish liquidity. Expanding repurchase authorization creates permission to spend, not funds or a binding floor. A near-par price reached while the issuer is buying cannot establish that external demand would sustain the same price after support slows.

The issuer has substantial BTC assets and additional funding choices. STRC nevertheless carries a preferred claim on residual corporate assets, not a security interest in a ring-fenced BTC reserve. Debt and senior preferred claims compete ahead of it, and the ability or willingness to pay depends on decisions and market conditions. The prior ranking assessment places STRC behind debt and STRF; precise legal rights retain their original verification scope.

**Counterparty scores 3.0.** The October 26 cut reflects persistent cash depletion and the severity of the latest contraction, balanced against the intact service reserve, a stable rate, lower future coupon burden and multiple funding options. The same source's aged outstanding-count warning means modeled multi-decade runway is not proof of safety. Restoration needs actual cash rebuilding and sustained pricing with less issuer support, not a temporary stock-price improvement alone. The [MSTR issuer report](/reports/mstr/) supplies the underlying funding analysis.

## 4 · Redemption and holder rights — 5.0

**STRC is perpetual; an ordinary holder cannot require $100 back on demand.** Selling on exchange is a market exit, not redemption at par. Issuer-call provisions and specific event-driven repurchase rights are distinct from an unconditional holder put. Their exact exercise conditions need the governing security documents; the weekly capital update does not newly verify them.

**Redemption scores 5.0** on the instrument's documented rights, with the absence of a routine par exit explicit. Payment cadence also does not create a redemption right. The current recorded cadence is semi-monthly. The proposed daily transition requires approval and effectiveness; calendar-day entitlement and next-business-day payment are different concepts. Wrapper accrual or settlement does not automatically follow the issuer's cadence.

## Shared quantitative evidence

The figures below are generated from the same base feed, history and filing-event stream used by the dashboards. They are supporting evidence for the longer-term assessment, not a new score for each market tick.

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
| 2026-10-05 | $833.4M | $4.88B | $73.7M |
| 2026-10-13 | $640.5M | $4.88B | $192.4M |
| 2026-10-19 | $447.3M | $4.83B | $193.1M |
| 2026-10-26 | $242.4M | $4.83B | $204.9M |

Amounts are discrete filing observations, not a daily cash series. Disclosed periods differ in length; the October 5 repurchase observation covers September 28–30. No interpolation or annualized weekly buyback burn is used.

Latest filing: **0001193125-26-431146**, filed **2026-10-26**. Unspent preferred repurchase authorization: **$956.8M**; BTC held: **848,517**. Authorization is not cash.

Observed STRC rate: **12.00%**, current recorded payment cadence **semi-monthly**. Proposed November daily terms are separately conditional; do not count both replacement schedules.

**Model-quality limit:** the source flags `STRC_OUTSTANDING_BASE_AGED`. Its derived share count, absolute service obligations, preferred-value inputs and runway are provisional. No precise modeled service life is endorsed by this report.
<!-- strategy-shared-evidence:end -->

## Scoring Rationale

| Category | Score | Notes |
|---|---|---|
| Volatility | 5.0 | Sustained recovery toward par in the shared history, but a discretionary anchor and a history of substantial discounts. |
| Liquidity | 7.0 | Listed-market infrastructure and brokerage access; no order-book depth claim or substitution of a wrapper ladder. |
| Counterparty | 3.0 | Repeated general-cash depletion behind discretionary support; intact service reserve and reduced future coupons provide counterevidence. |
| Redemption | 5.0 | Perpetual instrument without routine holder redemption at par; event-driven rights do not create an everyday exit guarantee. |
| Overall | 3.0 | The four-axis mean is 5.0; Overall is 2.0 below the mean and equal to Counterparty. Strong secondary-market access cannot average away the binding issuer risk. |

## What would change the assessment

- **Up:** cash rebuilding over multiple filings, sustainable financing and continued near-par trading with less issuer support. A stronger bid alone is insufficient.
- **Down:** further depletion without refill, weaker service capacity, a material loss of the issuer bid, adverse funding substitution or verified impairment of holder rights.
- **Event review:** confirm the vote, legal effectiveness and declared replacement payments before changing cadence; do not count both daily and replaced semi-monthly dividends.

## Downstream boundary

STRCx adds wrapper/custody and token-market constraints. Apyx and Saturn add their own reserve composition and redemption rules; senior tranches add a loss waterfall, and PTs add maturity and first-leg execution mechanics. None inherits raw STRC's Liquidity 7.0 automatically. USDat itself is M0-backed, so STRC exposure must not be assigned to it merely because sUSDat sits in the family. Their distinct custody, collateral and exit risks require separate assessment.

## Source agreement and review scope

The [source definitions](/data/strategy/2026-10-28/source-contract.txt) identifies the exact fields and definitions. [Saved sources and hashes](/data/strategy/2026-10-28/sources.json) preserve the dashboard inputs used in this refresh. Contractual and governance facts retain their prior verification scope; `last_revised` records this refresh and the older `last_verified` is intentionally preserved.

Current filing and market data were re-read from the shared source on October 28. The latest event stream still anchors the weekly financial facts to the [October 26 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526431146/mstr-20261026.htm). The [official STRC description](https://www.strategy.com/strc/learn) continues to show a 12% variable annual rate and semi-monthly payments. The [daily-dividend proposal](https://www.strategy.com/mstr/vote) remains conditional in the reviewed evidence. The October 28 10:00 a.m. Eastern meeting is **14:00 UTC / 22:00 Taipei**, later than this review's source check. No vote result or effective amendment is assumed.

The issuer webpage exposes a different STRC notional from the producer model, without a usable observation timestamp for reconciliation. It is recorded as a cross-check, not substituted into the shared dataset. A new authoritative count and a reconciled producer update are needed before absolute service/runway figures can be certified. Similarly, the dashboard's coarse stated-maturity ladder is not a fresh legal review of investor put dates; refinancing analysis must not assume all cash demands wait until stated maturity.

This pass covers MSTR and raw STRC only.

## Revision history

- **2026-10-28:** Refreshed the longer-term assessment using shared dashboard sources and 7/30/90-day context. Preserved the four instrument-specific axes, provisional outstanding-count and runway limits, and conditional dividend terms. The review preceded the scheduled October 28 vote; no approval or effectiveness is assumed.
