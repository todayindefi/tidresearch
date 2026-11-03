---
protocol: Convex Finance
slug: convex
aliases:
- Convex
- convex
- Convex Finance
- convex finance
- CVX
chains:
- eth
assessment_type: full
date: '2026-03-18'
last_verified: '2026-03-18'
last_revised: '2026-11-03'
category: protocol
protocol_category: yield-aggregator
audience: retail
production: false
published: true
featured: false
contract_score: 7.0
economic_score: 7.0
project_score: 6.5
overall_score: 7.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="convex">

# Convex Finance — Risk Report

**Low–moderate risk · 7.0/10 · provisional**

Boosted yield and governance aggregation

## Summary

Convex aggregates boosted rewards and voting power around underlying yield positions. A Curve strategy can combine Convex staking with pool-asset risk and additional wrappers such as Beefy. Convex does not establish the backing of ETH+ or the safety of a separate wrapper.

## 1 · Smart Contract — 7.0

Published reviews distinguish general contracts, wrappers, Frax and sidechain components. Audit coverage must match the staking/reward implementation; this refresh did not establish current audited-commit identity or findings closure for every route.

The official admin-rights disclosure describes deposit shutdown, configurable fees, reward-infrastructure changes and Curve voting authority. It describes a **3-of-5 multisig** and withdrawal availability after specified shutdowns. These are documentary statements, not fresh threshold, module, guard or selector measurements. Restrictions on direct deposit access do not remove indirect reward, accounting or availability risks.

## 2 · Economic — 7.0

Boosted returns depend on pool assets and trades, emissions, governance allocations and reward-token prices. Convex cannot prevent Curve imbalance, an LST impairment, Reserve basket loss, a wrapper failure or inadequate exit liquidity.

The published Curve schedule takes **17% of earned CRV rewards**, rather than 17% of deposited principal. Underlying trading costs, gas, wrapper fees and other product branches have separate economics. Current contract fee settings and realized net yield were not measured.

The November 3 provider snapshot reported **$506.47 million TVL**, separately from staking. It is not an audited company balance sheet or evidence of withdrawal at NAV. Dollar-TVL changes can reflect prices and methodology rather than net user flows.

## 3 · Project — 6.5

Long-running integrations, governance disclosure and external technical reviews provide context. They do not establish a corporate repayment guarantee, financial audit or current census of deployed authority. Voting outcomes require execution evidence. Curve-linked emissions and infrastructure create correlated business risk even when routine rewards operate normally.

## What to watch

Route-specific audit/code coverage, live admin permissions, reward and fee accounting, underlying pool composition and executable exits. Ethereum is the assessed scope; provider totals elsewhere do not extend it.

## Sources, scores and review scope

- [audit index](https://docs.convexfinance.com/convexfinance/faq/audits)
- [multisig rights disclosure](https://docs.convexfinance.com/convexfinance/faq/multisig-admin-rights)
- [risk disclosure](https://docs.convexfinance.com/convexfinance/faq/risks)
- [published Curve fee schedule](https://docs.convexfinance.com/convexfinance/faq/fees)
- [DefiLlama snapshot](https://api.llama.fi/protocol/convex-finance)

Original assessment: **2026-03-18**. Last whole-review date remains **2026-03-18**; **November 3, 2026** is a scoped documentary, product-identity and business-context revision. Scores are retained provisionally pending current deployment evidence. Complete authority, code/audit binding, funded allocations and executable exits were not reverified. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 7.0 | 7.0 | 6.5 | 7.0 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
