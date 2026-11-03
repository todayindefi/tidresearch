---
protocol: Morpho
slug: morpho
aliases:
- Morpho
- Morpho Blue
- morpho
- morpho blue
- MetaMorpho
- Morpho Labs
chains:
- eth
- base
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
contract_score: 8.5
economic_score: 7.0
project_score: 8.0
overall_score: 7.5
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="morpho">

# Morpho — Risk Report

**Low–moderate risk · 7.5/10 · provisional**

Isolated lending and curated vaults

## Summary

Morpho combines the immutable Blue lending core with permissionless isolated markets and curated vaults. Vaults allocate depositor assets across chosen markets or adapters. Core code, managed-vault permissions, collateral quality and chain execution are distinct risk layers.

The scored scope remains **Ethereum and Base**. **Monad, Optimism and HyperEVM deployments remain unassessed**; official listings and product identities do not extend the family grade to them. Felix feUSDC is also distinct from a Frontier-vault assessment.

## 1 · Smart Contract — 8.5

Blue's fixed core limits upgrade discretion, while externally chosen oracles and curated vaults introduce separate permissions and failure modes. Published audits and formal verification support code assurance, not guaranteed correct market creation or coverage of every vault/adapter version. Immutability does not make code unexploitable.

Vault owner, curator, guardian and allocator powers, caps, queues, timelocks and abdication semantics depend on version and configuration. Core governance can affect permitted settings such as fees; the DAO Safe is not every vault's administrator.

At Ethereum **block 26,324,343 on November 2**, a bounded recheck observed the DAO Safe at **6-of-10**, corroborating an earlier block observation. MIP 133 had approved that target; the read establishes sampled threshold and owner count beyond the vote alone. Signer identity/independence, custody, other Safes and all permissions remain unresolved. It does not establish a six-key threshold for curator vaults or upgrade power over the immutable core.

Historical reports distinguish a recovered frontend approval error from a permissionless market's oracle misconfiguration. Neither makes every deployment secure. A current comprehensive incident census was not completed in this refresh.

## 2 · Economic — 7.0

Each Blue market specifies its loan asset, collateral, liquidation threshold, oracle and rate model. Market accounting is isolated, but a vault can combine losses from several markets and shared collateral/oracle dependencies. Curator choice determines funded exposure; labels or attractive APYs do not establish conservative allocation.

Withdrawals depend on unborrowed liquidity and actual routes through underlying markets/adapters. Aggregate TVL is not reserved cash. Near-zero or stale oracle marks, concentrated collateral, liquidator capacity and borrower utilization require market-level stress checks.

Optimism Re7 WETH, Monad Steakhouse Prime ETH routes and HyperEVM Felix/Gauntlet vault families need exact version/adapter identity, live permissions, funded allocations, collateral/oracles and liquidation/withdrawal capacity. The November 3 documentary review does not supply those control or credit grades.

## 3 · Project — 8.0

Public founders, maintained documentation and governance records support operating transparency. Governance approval and onchain execution are separate evidence. Named developers and curators do not automatically provide a corporate repayment guarantee or audited financial solvency.

Curator discretion, governance concentration and financial/holder-recourse evidence remain material. Historical fundraising or business scale does not demonstrate current cash, profitability or compensation available after a loss.

## What to watch

Vault-specific authority and pending changes, actual funded allocations, collateral/oracle limits and cash exits, alongside completion of Monad/Optimism/HyperEVM deployment reviews.

## Sources, scores and review scope

- [Contract and deployment register](https://docs.morpho.org/developers/contracts/addresses/)
- [MIP 133 vote](https://snapshot.box/#/s:morpho.eth/proposal/0xa9fcf1d33d68f3b978e8e572e98825842bf9acebf055f680fa38507bcfb8ddfc)
- [Blue source code](https://github.com/morpho-org/morpho-blue)
- [Vaults V2 source code](https://github.com/morpho-org/vault-v2)

Original assessment: **2026-03-18**. The source last-verification field is **November 2, 2026**, limited to a targeted documentary/news review; it is not a renewed whole-report security, financial or market audit. **November 3** adds deployment-scope context without new chain grades. Historical control, balance and incident evidence retains its own dates. Scores remain provisional for the retained scope. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 8.5 | 7.0 | 8.0 | 7.5 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
