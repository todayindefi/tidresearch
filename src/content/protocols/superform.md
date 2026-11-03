---
protocol: Superform
slug: superform
aliases:
- Superform
- superform.xyz
- SuperformRouter
- SuperPositions
- SuperVaults
- Super Positions
- UP
- $UP
chains:
- eth
- base
- arbitrum
- polygon
- optimism
- bsc
- avalanche
- fantom
- blast
- linea
assessment_type: full
date: '2026-04-28'
last_verified: '2026-05-13'
last_revised: '2026-11-03'
category: protocol
protocol_category: yield-aggregator-cross-chain
audience: retail
production: false
published: true
featured: false
contract_score: 7.0
economic_score: 6.5
project_score: 7.0
overall_score: 7.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="superform">

# Superform — Risk Report

**Low–moderate risk · 7.0/10 · provisional**

Cross-chain routing and managed vaults

## Summary

Superform provides routing infrastructure and managed SuperVaults. These are different risk surfaces: approved execution, validator-signed share prices and a standard vault interface do not guarantee investment quality or liquidity.

The reviewed **PT-superWETH-26NOV2026** route uses the **Ethereum Flagship WETH vault**. The newer **Base superWETH** shares a symbol but is a different deployment. A PT route's accounting unit is not automatically one vault share; conversion and final cash settlement require their own checks.

## 1 · Smart Contract — 7.0

Current v2 security documentation describes dual Merkle authorization, signed PPS validation, role controls and emergency actions. Its review list does not establish that the older Ethereum implementation or every deployment matches those versions.

The documented v2 hook-root delay defaults to **15 minutes and is governance-configurable**. Other parameters have different delays. This is not a universal multiday timelock. Manager/validator membership, active roots, oracle configuration and bypasses remain unverified for the reviewed Ethereum route.

Fixed contract code, mutable hook authorization and investment-management authority are distinct. Current Base/v2 documentary controls are not substituted for measured controls of the older Ethereum vault.

## 2 · Economic — 6.5

SuperVaults combine managed allocations, oracle-valued shares and asynchronous request/fulfillment. An empty withdrawal limit while waiting need not mean no shares. Ownership, fulfillment and available underlying liquidity are separate; queues, stale PPS, failed hooks and validator availability can delay exit.

The Ethereum identity observations identify **19 configured yield sources**, not 19 funded positions or their weights. The sampled strategy reported a **15% performance fee** and zero in its entry/management interface field. These do not define every product's fees or guarantee future terms. Underlying fees are additional.

The November 3 provider snapshot reported **$12.74 million aggregate TVL**. It is not the Ethereum vault's NAV. A dollar decline alone does not establish withdrawals, losses or insolvency. Current funded weights, liquidation exposure, share solvency and complete PT-to-cash execution remain unmeasured.

## 3 · Project — 7.0

Interface terms identify **ZeroPoint Labs Inc. dba Superform Labs**, distinct from vault and investment counterparties. The terms do not guarantee a payout. Public documentation and review disclosures support the retained grade, while migrations, complex operating roles and incomplete financial/holder assurance constrain confidence.

## What to watch

Ethereum-specific manager/governor/validator authority and code identity, funded investments, PPS and withdrawal handling, and the exact PT/SY conversion and cash-exit route.

## Sources, scores and review scope

- [security documentation](https://docs.superform.xyz/security)
- [SuperVault design](https://docs.superform.xyz/learn/supervaults)
- [transaction lifecycle](https://docs.superform.xyz/learn/supervaults/transaction-lifecycle)
- [DefiLlama snapshot](https://api.llama.fi/protocol/superform)
- [Interface terms](https://www.superform.xyz/terms-of-service)

Original assessment: **2026-04-28**. Last whole-review date remains **2026-05-13**; **November 3, 2026** is a scoped documentary, product-identity and business-context revision. Scores are retained provisionally pending current deployment evidence. Complete authority, code/audit binding, funded allocations and executable exits were not reverified. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 7.0 | 6.5 | 7.0 | 7.0 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
