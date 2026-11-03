---
protocol: Pendle V2
slug: pendle-v2
aliases:
- Pendle
- pendle
- Pendle Finance
- Pendle V2
- pendle-v2
chains:
- eth
- arbitrum
- bsc
- optimism
- mantle
assessment_type: full
date: '2026-04-12'
last_verified: '2026-05-14'
last_revised: '2026-11-03'
category: protocol
protocol_category: yield
audience: retail
production: false
published: true
featured: false
contract_score: 7.0
economic_score: 7.0
project_score: 7.5
overall_score: 7.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="pendle-v2">

# Pendle V2 — Risk Report

**Low–moderate risk · 7.0/10 · provisional**

Principal and yield token markets

## Summary

Pendle V2 separates yield-bearing assets into principal tokens (PT) and yield tokens (YT), traded through a maturity-aware AMM. Holders depend on the exact underlying asset, Standardized Yield (SY) conversion and settlement route. [Boros](/protocols/boros/) is a separately assessed rate-margin product.

## 1 · Smart Contract — 7.0

The shared core connects heterogeneous yield sources through SY adapters. A reviewed core does not make every new wrapper equally reviewed or every underlying secure. Router approvals, conversion logic, collateral-oracle integration and deployment version need product-specific binding.

Historical reviews inform the retained rating. This refresh does not establish current audited-code identity or enumerate every live authority path. A smoothly converging price does not establish correct external lender parameters or executable depth.

## 2 · Economic — 7.0

PT provides a claim through its specified SY/underlying mechanism at maturity. **Maturity is not automatically cash**, and one PT is not universally one vault share. Before maturity, sale value also depends on remaining yield, rates and liquidity. YT and LP positions carry different cash-flow, expiry and inventory risks.

Product boundaries matter:

- **apyUSD:** SY output is apyUSD; cash conversion can still require Apyx's unlock/claim process or a secondary sale. No mandatory pre-maturity roll/exit deadline was established for the reviewed Apyx PT.
- **Re reUSD:** the issuer and contract must be distinguished from Resupply reUSD.
- **srUSDat:** Saturn and Strata introduce different layers. Positive USDat secondary liquidity does not establish the conditional upstream share/bridge/queue route.
- **[superWETH / Superform](/protocols/superform/):** the reviewed route uses the Ethereum Flagship WETH vault, not Base's newer namesake; PT accounting units require explicit conversion to vault shares.

The November 3 provider snapshot reported **$1.029 billion TVL**, including approximately **$145.66 million on Monad**. These are provider business figures, not net flows, profit or verified control scope. **Monad remains unassessed** and is not added to scored chains by this documentary review. Underlying funded allocations, live conversion rates and cash execution require separate measurements.

## 3 · Project — 7.5

October 1 interface terms identify **Univerum Innovations Inc. in Panama**, Singapore law and SIAC arbitration. The interface operator is distinct from underlying issuers and does not guarantee redemption. The established ecosystem and reviewed core provide context, while operator permissions, finances and underlying solvency remain separate questions.

The November 2 review records an attributed Pendle statement about a related infrastructure incident. That statement is not a complete forensic assurance that every product or user was unaffected.

## What to watch

SY/core version and permissions, oracle and maturity handling, exact underlying claims, executable exits and Monad's unassessed deployment controls.

## Sources, scores and review scope

- [V2 introduction](https://docs.pendle.finance/pendle-v2/Introduction)
- [DefiLlama snapshot](https://api.llama.fi/protocol/pendle)
- [October 1 interface terms](https://docs.pendle.finance/pendle-v2/TermsOfUse)

Original assessment: **2026-04-12**. Last whole-review date remains **2026-05-14**; **November 3, 2026** is a scoped documentary, product-identity and business-context revision. Scores are retained provisionally pending current deployment evidence. Complete authority, code/audit binding, funded allocations and executable exits were not reverified. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 7.0 | 7.0 | 7.5 | 7.0 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
