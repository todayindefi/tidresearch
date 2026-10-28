---
asset: MSTR
slug: mstr
aliases:
- MSTR
- Strategy
- Strategy Inc
- MicroStrategy
chains: []
category: tradfi-equity
assessment_type: dependency
date: '2026-05-30'
last_verified: '2026-08-26'
last_revised: '2026-10-28'
issuer: Strategy Inc. (formerly MicroStrategy Incorporated)
balance_sheet_score: 5.0
funding_model_score: 3.0
refinancing_capacity_score: 4.5
governance_score: 4.5
overall_score: 3.5
yield_bearing: false
underlying_assets:
- btc
production: true
featured: false
live_dashboard_url: https://tidresearch.com/dashboards/?asset=mstr
---

# mstr — Risk Report

**Elevated risk · 3.5/10**

**Scope:** issuer analysis for STRC and its downstream holders. This is not an investment assessment of MSTR common stock. The [MSTR dashboard](https://todayindefi.github.io/backing-monitor/?asset=mstr) and [STRC dashboard](https://todayindefi.github.io/backing-monitor/?asset=strc) use the same `strc_backing.json` dataset with different views. This report uses that dataset, its referenced market history and the same filing-event stream; it retains Strategy's four issuer-risk axes rather than forcing a six-axis DeFi schema.

## Summary

Strategy is a Bitcoin treasury company financed through common equity, debt and preferred stock. This assessment covers its reliability as the issuer behind STRC and downstream claims, rather than the investment merits of common stock.

## 1 · Balance sheet quality — 5.0

**Asset scale provides capacity, but concentration determines resilience.** Strategy's economic asset base remains overwhelmingly BTC, while debt and preferred claims create dollar-denominated demands on that base. A rising BTC mark improves measured coverage without producing cash until assets are sold or financed. A falling BTC mark can weaken asset coverage and access to new funding together.

The issuer's two cash categories answer different questions. The **USD Reserve** is designated for preferred dividends and interest, subject to the applicable board policy; **general USD Cash** is available for broader treasury uses, including repurchases. They must not be collapsed into a single buyback budget or mistaken for segregated collateral securing STRC. The latest filing records a large service reserve alongside a much thinner general-cash balance.

Over the retained filings the reserve built substantially during the summer, then stopped growing and eased below its late-August peak. The latest two disclosures hold it flat, which is better than continuing service-reserve depletion but is not evidence that general liquidity is being replenished. **Balance Sheet scores 5.0** on meaningful assets and service capacity, offset by BTC concentration and senior claims. The share-count model's aged anchor limits precise liability and runway calculations.

## 2 · Funding model durability — 3.0

**Repeated cash depletion, rather than a single threshold breach, is the binding adverse evidence.** The October disclosures show general cash declining through several observations while repurchases continue. Across the three most recent disclosed full periods, STRC repurchases remain near $200M per period. Common issuance was small in the earlier two periods and absent in the latest filing; that latest filing also reports no BTC buying or selling. Cash-funded price support has therefore continued without a matching refill of general liquidity.

Strategy can raise common equity, issue other securities, monetize BTC or reduce discretionary spending. These are available choices, not guaranteed demand or an obligation to continue buybacks. Funding dividends by selling BTC reduces the asset base, whereas issuing new preferreds creates future service obligations. Repurchases can reduce future dividends while consuming present cash. Both sides of that trade matter.

The shared producer's **mNAV is EV/BTC**, with its stated debt, preferred and cash assumptions. It is distinct from common market capitalization divided by gross BTC holdings and from net asset value per common share. The retained 7/30/90-day compatible history averages above 1, providing counterevidence to a claim that the modeled premium has simply disappeared. A premium may help financing flexibility, but it does not establish actual issuance proceeds or prove that general cash has rebuilt.

**Funding scores 3.0.** The October 26 cut reflected the severity of repeated depletion without refill, not a second penalty merely for being below $500M. A static weeks-of-buybacks sensitivity is not a forecast or a dividend-default clock and is no longer the headline argument. Restoration requires actual rebuilding and a durable funding mix over subsequent disclosures.

## 3 · Refinancing capacity — 4.5

**Capital-market access is cyclical and can weaken with the asset base.** Conversions, common issuance, new preferred issuance, BTC sales and reductions in discretionary spending provide several ways to meet liabilities. Their availability and cost are correlated: weaker BTC and equity demand can reduce the attractiveness of more than one route at once.

Do not assume a convertible removes a cash obligation simply because settlement in shares is possible under some conditions. Investor put rights can bring cash demands forward relative to stated maturities. A weekly cash filing does not re-certify precise tranche and strike tables; the aggregate maturity view does not replace the legal terms. **Refinancing scores 4.5** on multiple financing routes but uncertain future market access, timing and cost. No newly verified refinancing transaction in this refresh justifies a separate score change.

## 4 · Governance — 4.5

**Concentrated decision-making makes funding policy durable in one sense and changeable in another.** The prior governance assessment identifies controlling influence and a discretionary treasury policy. The same flexibility that permits cash rebuilding also permits continued repurchases, BTC sales, new obligations or a change in dividend-support strategy. Policy intentions are not creditor protections.

**Governance scores 4.5.** This refresh does not re-verify the voting register or infer a governance improvement from a scheduled shareholder vote. Moving dividend payments to a different cadence, if approved and made effective, would not by itself strengthen the balance sheet, increase the annual payout or independently validate wrapper pass-through.

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
| Balance sheet quality | 5.0 | Substantial BTC assets and designated service liquidity, offset by concentration, senior claims and provisional liability-model precision. |
| Funding model durability | 3.0 | Repeated general-cash depletion and ongoing discretionary support without a matching refill; modeled premium and other funding options remain counterevidence. |
| Refinancing capacity | 4.5 | Several financing routes, but correlated market access and potentially earlier investor cash demands; no new legal maturity certification. |
| Governance | 4.5 | Concentrated control and discretionary treasury choices; policy intentions do not create enforceable holder protections. |
| Overall | 3.5 | The four-axis mean is 4.25; Overall is 0.75 below the mean and 0.5 above Funding. Funding durability is the binding dependency, rather than an arithmetic average of asset marks. |

## What would change the assessment

- **Up:** repeated disclosures of actual cash rebuilding, a sustainable funding mix and reduced dependence on issuer-funded price support. A stronger market mark alone is insufficient.
- **Down:** further material depletion without refill, impaired access to funding, adverse liability substitution or verified acceleration of cash claims.
- **Evidence review:** reconcile preferred outstanding counts, preserve the distinction between general cash and the service reserve, and check the daily-dividend vote and effective legal terms after the scheduled meeting.

## Dependency boundary

The economic path is **Strategy issuer → raw STRC → wrappers, reserve holders and tranches**. MSTR common equity is not a reserve token held by those downstream products. Their own collateral, subordination, custody and exits still need separate assessment. This focused refresh does not automatically change downstream scores. See [STRC](/reports/strc/) for the instrument-level assessment.

## Source agreement and review scope

The [source definitions](/data/strategy/2026-10-28/source-contract.txt) identifies the exact fields and definitions. [Saved sources and hashes](/data/strategy/2026-10-28/sources.json) preserve the dashboard inputs used in this refresh. Contractual and governance facts retain their prior verification scope; `last_revised` records this refresh and the older `last_verified` is intentionally preserved.

Current filing and market data were re-read from the shared source on October 28. The latest event stream still anchors the weekly financial facts to the [October 26 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526431146/mstr-20261026.htm). The [official STRC description](https://www.strategy.com/strc/learn) continues to show a 12% variable annual rate and semi-monthly payments. The [daily-dividend proposal](https://www.strategy.com/mstr/vote) remains conditional in the reviewed evidence. The October 28 10:00 a.m. Eastern meeting is **14:00 UTC / 22:00 Taipei**, later than this review's source check. No vote result or effective amendment is assumed.

The issuer webpage exposes a different STRC notional from the producer model, without a usable observation timestamp for reconciliation. It is recorded as a cross-check, not substituted into the shared dataset. A new authoritative count and a reconciled producer update are needed before absolute service/runway figures can be certified. Similarly, the dashboard's coarse stated-maturity ladder is not a fresh legal review of investor put dates; refinancing analysis must not assume all cash demands wait until stated maturity.

This pass covers MSTR and raw STRC only.

## Revision history

- **2026-10-28:** Refreshed the longer-term assessment using shared dashboard sources and 7/30/90-day context. Preserved the four instrument-specific axes, provisional outstanding-count and runway limits, and conditional dividend terms. The review preceded the scheduled October 28 vote; no approval or effectiveness is assumed.
