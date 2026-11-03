---
protocol: Aave V3
slug: aave-v3
aliases:
- Aave
- aave
- Aave v3
- AaveV3
- Aave Protocol
- Aave Lending
chains:
- eth
- arbitrum
- optimism
- polygon
- avalanche
- base
- gnosis
- metis
- scroll
- bnb
- zksync
assessment_type: full
date: '2026-04-12'
last_verified: '2026-11-02'
last_revised: '2026-11-03'
category: protocol
protocol_category: lending
audience: retail
production: false
published: true
featured: true
contract_score: 9.0
economic_score: 8.0
project_score: 8.0
overall_score: 8.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="aave-v3">

# Aave V3 — Risk Report

**Low risk · 8.0/10 · provisional**

Pooled overcollateralized lending

## Summary

Aave V3 pools supplied assets for overcollateralized lending. Borrowers pay interest and can be liquidated when collateral falls below configured thresholds. Efficiency mode, isolation mode and asset-level caps constrain risk but cannot ensure the backing or market liquidity of accepted collateral.

The assessed family scope includes multiple established deployments. **Monad and Plasma are officially documented but remain unassessed here**. Their address-book entries do not confer a live authority or credit grade, and neither is added to scored chains.

## 1 · Smart Contract — 9.0

Aave uses upgradeable pools, governance execution and separate emergency and delegated risk roles. Published technical reviews and formal-verification work provide substantial assurance. The historical review described roughly one-day routine and seven-day structural execution paths, emergency pause powers and bounded risk-steward adjustments. Those descriptions are dated scope, not newly measured controls for every current market.

The November 3 address-book review identifies Monad and Plasma pool, configurator, ACL and oracle pointers. Current implementations, guardian/steward reach, cross-chain execution, effective delays and pending actions still require deployment-specific verification. Published pointers and family audit coverage do not prove those permissions or every deployed-code binding.

## 2 · Economic — 8.0

Collateral limits, oracles, liquidators and available pool cash determine supplier and borrower outcomes. Correlated-asset efficiency mode can improve capital efficiency while exposing loops to small price or rate discrepancies. High aggregate scale does not guarantee a specific reserve can repay withdrawals during stress.

The **April 2026 KelpDAO rsETH bridge incident** created unbacked collateral and approximately **$200 million Aave bad debt**. The historical review records resolution by June without supplier haircuts. The approximately **$50 million Umbrella buffer** did not cover the entire loss; recovery and discretionary coalition support mattered. This was external collateral failure rather than an established Aave contract exploit, and that resolution is not guaranteed insurance against another event.

The **July 28 provider snapshot** reported approximately **$24.6 billion gross supplied**, **$10.84 billion borrowed** and **$13.75 billion net TVL**. These are historical figures with different denominators, not current market cash.

Aave's October 29 announcement described a precautionary freeze after the Binance incident. Its October 30 update reported unfreezing with withdrawals/repayments continuing, while some collateral remained at zero LTV for new borrowing. October 31 brought tBTC deposit/borrow restrictions following Threshold maintenance. These are attributed operational statements, not a new per-market state sweep or proof every restriction ended.

Monad and Plasma require current oracle/staleness checks, eMode and reserve thresholds, caps, pause/freeze state, collateral quality and liquidation/withdrawal capacity. Family scores do not establish safe buffers for individual leveraged strategies.

## 3 · Project — 8.0

AAVE governance, public proposals and specialized development, security, risk and treasury providers distribute operating responsibilities. Cross-chain governance introduces messaging and execution dependencies. Public governance and an established organization do not create an unconditional depositor repayment promise.

The retained rating reflects the earlier assessment. Current legal recovery rights, financial assurance, provider dependence and deployment-specific execution still require evidence; historical treasury scale is not a measured current rescue commitment.

## What to watch

Reserve-level restrictions, collateral quality and liquidation depth, Umbrella coverage relative to tail exposure, and verified Monad/Plasma authority and market parameters.

## Sources, scores and review scope

- [Monad address book](https://github.com/aave-dao/aave-address-book/blob/main/src/AaveV3Monad.sol)
- [Plasma address book](https://github.com/aave-dao/aave-address-book/blob/main/src/AaveV3Plasma.sol)
- [Core technical paper](https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf)
- [Published core audits](https://github.com/aave/aave-v3-core/tree/master/audits)
- [Governance forum](https://governance.aave.com/)
- [October 29 statement](https://x.com/aave/status/2115937863162339637)
- [October 30 statement](https://x.com/aave/status/2116167595237720167)
- [October 31 statement](https://x.com/aave/status/2116479695424192605)

Original assessment: **2026-04-12**. The source last-verification field is **November 2, 2026**, limited to a targeted documentary/news review; it is not a renewed whole-report security, financial or market audit. **November 3** adds deployment-scope context without new chain grades. Historical control, balance and incident evidence retains its own dates. Scores remain provisional for the retained scope. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 9.0 | 8.0 | 8.0 | 8.0 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
