---
protocol: Euler
slug: euler
aliases:
- Euler
- Euler V2
- Euler Finance
- euler
- euler finance
- euler v2
chains:
- eth
assessment_type: full
date: '2026-03-18'
last_verified: '2026-11-02'
last_revised: '2026-11-03'
category: protocol
protocol_category: lending
audience: retail
production: false
published: true
featured: false
contract_score: 8.0
economic_score: 7.0
project_score: 7.0
overall_score: 7.5
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="euler">

# Euler — Risk Report

**Low–moderate risk · 7.5/10 · provisional**

Modular credit and allocation vaults

## Summary

Euler V2 builds modular credit vaults with the Euler Vault Kit (EVK) and connects accounts and collateral through the Ethereum Vault Connector (EVC). Euler Earn adds allocation and withdrawal dependencies over constituent markets. A leverage loop adds liquidation and correlated-price risk beyond passive supply.

The scored scope remains **Ethereum**. **Monad is officially documented but unassessed here**; its registry does not establish current per-vault permissions, credit quality or liquidity. It is not added to scored chains.

## 1 · Smart Contract — 8.0

EVK vaults can have different governance and upgrade choices. The EVC supports batching, delegated operators and deferred checks, making account permissions and final health validation important. Fixed code and finalized governance must be established for the exact vault rather than inferred from the family name.

The prior review records extensive specialist audits and formal verification of an account-health property under stated assumptions. These are scoped assurance, not a proof against every oracle, application or configuration failure. Historical descriptions of dual timelocks, 48-hour minimum delays and bounded emergency roles do not establish current controls for every third-party vault or Monad deployment.

The **March 2023 Euler V1 exploit of approximately $197 million** and subsequent return of funds are historical. V2 is a rebuilt architecture launched in 2024; the V1 recovery neither guarantees future recovery nor establishes current V2 solvency.

Monad requires implementation/beacon or immutable-code identity, EVC/operator permissions, governor/curator/guardian reach and pending configuration checks. Current audit-to-deployment binding and effective delays remain incomplete for that scope.

## 2 · Economic — 7.0

Each credit vault selects collateral, oracles, interest rates and risk limits. Liquidation depends on valuation, incentives, market liquidity and execution. Suppliers can face utilization-driven withdrawal restrictions even when their own asset is a liquid stablecoin.

An Earn vault inherits constituent credit and liquidity exposure; leveraged wstETH/WETH routes additionally depend on price correlation and margin. Current caps, collateral/LTV settings, oracle bounds and cash availability need per-vault measurements. Zero, near-zero or stale marks require explicit failure handling rather than being treated as safe defaults.

The historical aggregate TVL/borrow figures are not carried into current liquidity claims. The scoped refresh does not measure funded allocations, supplier cash or executable stress exits on Monad.

## 3 · Project — 7.0

Public management, governance and post-V1 technical disclosures provide accountability. The January 2026 leadership transition to **Jonathan Han** is corroborated by Euler's Q1 retrospective; founder Michael Bentley's changed role is distinct from a protocol-control audit.

The EUL documentation reviewed November 2 states **Fee Flow is inactive and protocol fees are 0%**. A possible future EUL auction does not establish active fee revenue or token burning. Financial runway, current profitability and a corporate depositor repayment guarantee were not established by this documentary review.

## What to watch

Current vault governance and operators, oracle/zero-mark handling, funded allocations, liquidity and liquidation stress; Monad-specific controls and any change in fee activation or leadership responsibilities.

## Sources, scores and review scope

- [Deployment documentation](https://docs.euler.finance/developers/contract-addresses/)
- [Monad registry](https://github.com/euler-xyz/euler-interfaces/tree/master/addresses/143)
- [EUL utility](https://docs.euler.finance/EUL/overview/)
- [Q1 retrospective](https://www.euler.finance/blog/euler-q1-2026)
- [Euler Vault Kit](https://github.com/euler-xyz/euler-vault-kit)
- [Ethereum Vault Connector](https://github.com/euler-xyz/ethereum-vault-connector)

Original assessment: **2026-03-18**. The source last-verification field is **November 2, 2026**, limited to a targeted documentary/news review; it is not a renewed whole-report security, financial or market audit. **November 3** adds deployment-scope context without new chain grades. Historical control, balance and incident evidence retains its own dates. Scores remain provisional for the retained scope. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 8.0 | 7.0 | 7.0 | 7.5 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
