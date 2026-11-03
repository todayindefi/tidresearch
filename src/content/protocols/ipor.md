---
protocol: IPOR
slug: ipor
aliases:
- IPOR
- IPOR Labs
- IPOR Fusion
- ipor
- ipor fusion
chains:
- eth
- arbitrum
- base
assessment_type: light
date: '2026-04-07'
last_verified: '2026-07-04'
last_revised: '2026-11-03'
category: protocol
protocol_category: vault-infra
audience: retail
production: false
published: true
featured: false
contract_score: 4.0
economic_score: 5.0
project_score: 5.0
overall_score: 4.5
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="ipor">

# IPOR Fusion — Risk Report

**Elevated risk · 4.5/10 · provisional**

Configurable vault infrastructure

## Summary

IPOR Fusion provides configurable vault infrastructure and external strategy integrations. Its Fusion vaults differ from IPOR's historical interest-rate derivatives. Risk depends on each curator's authority, execution permissions and underlying venues.

IPOR Labs AG is the disclosed developer. Developer identity is distinct from the Atomist/curator, Alpha and underlying counterparties, and does not establish a vault-specific repayment promise.

## 1 · Smart Contract — 4.0

The governance model separates Owner, Atomist, Alpha, Guardian and other configurable roles. Per-account delays can differ within a role: a cold signer and an operational account need not have the same effective delay. Timelock support does not prove a mandatory delay or independent guardian on a particular vault.

The security index covers Fusion, fuses, access management and oracle middleware. The publisher's claim of live-code coverage is not independent bytecode binding. Internal automated review is separate from third-party assurance. Earlier privileged-role and fuse-incident work informs the retained assessment; no new exploit or fresh incident-free finding is asserted.

Historical vault walks found different controls across strategies. The obsolete 1-of-3 description is not presented as current. Effective roles, delays, bypasses and audited implementations require a new deployment walk.

## 2 · Economic — 5.0

Separating custody/accounting from external fuses does not remove collateral, oracle, liquidation, swap and liquidity risks. **Base TAU cbETH Dynamic Looping** is a configured cbETH/WETH loop mandate; target leverage is not measured current leverage. The **Ethereum rETH Liquity LP Carry** vault uses WETH as accounting/deposit asset. Its name and eligible rETH substrate do not prove funded rETH exposure.

Withdrawals depend on idle funds, fuse/underlying redemption and request/release processes. Fees are vault-specific. APY, an emergency mechanism or a historical unwind does not establish a current same-block exit at face value.

The November 3 Fusion provider snapshot reported **$80.95 million TVL**. That is not realized return, developer revenue or available liquidity. Current allocations, leverage, expenses and stress coverage remain unmeasured.

## 3 · Project — 5.0

Public developer identity, modular documentation and technical-review disclosures improve transparency. Key management and strategy-operator dependence remain material. A developer's legal identity does not establish each curator's obligations or give depositors a corporate repayment claim. Operator context and technical authority require separate evidence.

## What to watch

Current vault roles and delays, fuse/market allowlists, funded leverage and allocations, oracle failure handling, withdrawal stress and fee accounting.

## Sources, scores and review scope

- [Governance/control documentation](https://ipor.io/docs/fusion-for-institutions/governance-and-operational-control)
- [security index](https://ipor.io/docs/build-on-fusion/developer-guide/security-and-audits)
- [institutional architecture](https://ipor.io/docs/fusion-for-institutions/institutional-grade-infrastructure)
- [IPOR Fusion provider snapshot](https://api.llama.fi/protocol/ipor-fusion)

Original assessment: **2026-04-07**. Last whole-review date remains **2026-07-04**; **November 3, 2026** is a scoped documentary, product-identity and business-context revision. Scores are retained provisionally pending current deployment evidence. Complete authority, code/audit binding, funded allocations and executable exits were not reverified. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 4.0 | 5.0 | 5.0 | 4.5 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
