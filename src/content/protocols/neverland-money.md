---
protocol: Neverland Money
slug: neverland-money
aliases:
- Neverland
- neverland money
chains:
- monad
assessment_type: full
date: '2026-03-12'
last_verified: '2026-07-05'
last_revised: '2026-11-03'
category: protocol
protocol_category: lending
audience: retail
production: false
published: true
featured: false
contract_score: 4.5
economic_score: 6.5
project_score: 4.0
overall_score: 5.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="neverland-money">

# Neverland Money — Risk Report

**Moderate risk · 5.0/10 · provisional**

Pooled lending on Monad

## Summary

Neverland Money is a Monad pooled-lending deployment derived from [Aave V3](/protocols/aave-v3/). Suppliers earn interest and incentives while borrowers post collateral. Its own code changes, listings, oracles, parameters, controls and chain dependencies require separate assessment; it does not inherit Aave's grade.

## 1 · Smart Contract — 4.5

Historical control observations through **July 5, 2026** found a **24-hour execution timelock**, with a proposing/cancelling Safe that did not itself administer the delay. A sampled July operation took approximately **30.5 hours** against that minimum. This is dated evidence, not a November quorum, delay or no-bypass finding.

Current pool/provider implementations, ACL roles, emergency paths, wrappers, oracle settings, caps and pending changes need rechecking at a stated block. Published fork provenance and review disclosure do not prove that every deployed modification is covered. Missing current evidence does not establish that the older protection disappeared or that a new exploit occurred.

## 2 · Economic — 6.5

Suppliers face collateral impairment, oracle error, liquidator capacity, utilization spikes and concentrated liquidity. Borrowing loops add leverage and require a usable reverse route. DUST/veDUST incentives are separate from organic borrower interest and can weaken as subsidies or token prices change.

The November 3 provider snapshot reported **$5.689 million net TVL**, **$8.978 million borrowed** and approximately **$14.668 million gross supplied** on its matching basis. Net TVL is not gross deposits; borrowed amounts must not be counted twice. These are dated business-scale measures rather than current cash available in individual markets. Dollar changes alone do not establish outflows, defaults or losses.

Market-level cash, utilization, collateral concentration, caps and executable liquidation/withdrawal stress were not measured in this refresh.

## 3 · Project — 4.0

Terms identify **Neverland Foundation in Cayman** and describe governing-law/dispute arrangements. Registry/director corroboration and a receipt-token repayment guarantee remain unresolved. A foundation name does not establish a bank licence, segregated reserves or audited corporate solvency.

Young-chain infrastructure and active permission/risk management remain dependencies. No current team/bounty or clean-incident conclusion is inferred from missing news or older metadata.

## What to watch

Current authority and pending operations, deployed code/review bindings, reserve liquidity, collateral/oracle limits, incentives and any bad debt or operating incident.

## Sources, scores and review scope

- [DefiLlama snapshot](https://api.llama.fi/protocol/neverland)
- [terms](https://neverland.money/terms-of-service)

Original assessment: **2026-03-12**. Last whole-review date remains **2026-07-05**; **November 3, 2026** is a scoped documentary, product-identity and business-context revision. Scores are retained provisionally pending current deployment evidence. Complete authority, code/audit binding, funded allocations and executable exits were not reverified. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 4.5 | 6.5 | 4.0 | 5.0 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
