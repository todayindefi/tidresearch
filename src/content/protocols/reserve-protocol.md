---
protocol: Reserve Protocol
slug: reserve-protocol
aliases:
- Reserve Protocol
chains:
- eth
- base
- arb
assessed_chains: []
assessment_type: architecture_review
date: '2026-11-13'
last_revised: '2026-11-13'
score_status: unscored_shared_architecture_no_deployment_clearance
assessment_version: reserve-protocol-architecture-2026-11-13-v2
selected_evidence_version: reserve-eusd-documentary-2026-11-13-v1
report_role: family
child_protocols:
- reserve-yield-protocol
- reserve-index-protocol
category: protocol
protocol_category: basket-infrastructure
verification_scope: bounded
production: false
published: true
audience: retail
source_commit: 15a278e97b8d55c8d987fbe1dda3627e2f29f62d
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto [&_th]:min-w-[8rem] [&_td]:min-w-[8rem]">

# Reserve Protocol — Risk Report

Shared Yield and Index infrastructure

## Summary

Reserve provides two distinct basket-token systems. **Yield** uses RTokens, collateral plugins, recovery auctions and fund-specific RSR staking. **Index** uses proportional ERC-20 baskets, rebalancing auctions and its own governance and fee machinery. A token's basket, controls and exit conditions must be assessed in the appropriate system.

The family and both component reports are **unscored documentary architecture reviews**. No family, asset or chain grade is inherited. Current implementation/audit binding and complete live authority verification remain unresolved for exact deployments.

| Component | Architecture | Related products |
|---|---|---|
| [Reserve Yield Protocol](/protocols/reserve-yield-protocol/) | RToken basket accounting, collateral plugins, recovery and fund-specific RSR | [USD3](/reports/usd3/); eUSD and ETH+ asset reports are unavailable / pending |
| [Reserve Index Protocol](/protocols/reserve-index-protocol/) | Proportional baskets, rebalancing auctions, fees and Index governance | No individual Index asset assessment is included |

## Different mechanisms and protections

| Feature | Yield Protocol | Index Protocol |
|---|---|---|
| Exposure | Governance-selected yield-bearing receipts and reference-unit accounting | Proportional ERC-20 basket with auction-based rebalancing |
| Impairment response | Plugin default rules, backup baskets and recollateralization | Holdings and auction/rebalance rules; Yield default machinery is not assumed |
| RSR protection | Fund-specific eligible RSR can support recovery, subject to sale and realization | No assumed Yield-style RSR recapitalization guarantee |
| Valuation | Wrapper exchange rates, collateral plugins and feeds | Basket accounting differs; constituent and integration risks remain |
| Governance | Per-product roles, staking, governor and timelock configuration | Per-product roles and potentially optimistic governance; exact installed permissions matter |
| Exit | Basket receipts subject to protocol conditions, then constituent exits | Basket redemption followed by any swaps, fees and constituent restrictions |

The official [Yield overview](https://docs.reserve.org/core-components/yield-dtfs/overview) and [Index overview](https://docs.reserve.org/core-components/index-dtfs/overview) describe these systems. Permissionless creation and an interface listing do not establish uniform controls. A shared implementation vulnerability can affect several products, while a bad collateral allocation need not affect every basket.

## Governance and holder rights

ABC Labs' interface/development role does not establish a corporate repayment guarantee or product-specific insolvency priority. The [interface terms](https://reserve.org/terms-and-conditions/) and each product's exact disclosures define different questions from visible on-chain inventory and code audits. Shared RSR branding is not a universal pooled backstop.

Current effective admins, installed implementations, plugins, emergency exceptions and execution paths remain deployment-specific. **Admin not on-chain verified — high uncertainty.** Narrow eUSD governor/timelock identity observations in the Yield report do not certify its complete authority graph or other products.

## Sources and review scope

The November 13, 2026 documentary assessment separates shared architecture from product financial and security evidence. Exact code/audit binding, complete current authority, backing, realizable recovery and holder exits are not certified here. The separate eUSD dashboard and asset refresh are incomplete commissions; this family hierarchy does not establish their completion. Original component observations retain their own dates.

</div>
