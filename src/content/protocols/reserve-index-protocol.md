---
protocol: Reserve Index Protocol
slug: reserve-index-protocol
aliases:
- Reserve Index Protocol
- Reserve Index DTFs
chains:
- eth
- base
- arb
assessed_chains: []
assessment_type: architecture_review
date: '2026-11-13'
last_revised: '2026-11-13'
score_status: unscored_shared_architecture_no_deployment_clearance
assessment_version: reserve-index-protocol-architecture-2026-11-13-v1
selected_evidence_version: reserve-eusd-documentary-2026-11-13-v1
report_role: component
parent_protocol: reserve-protocol
related_assets: []
category: protocol
protocol_category: basket-infrastructure
verification_scope: bounded
production: false
published: true
audience: retail
source_commit: 15a278e97b8d55c8d987fbe1dda3627e2f29f62d
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto [&_th]:min-w-[8rem] [&_td]:min-w-[8rem]">

# Reserve Index Protocol — Risk Report

## Summary

Reserve Index, also called Folio, represents proportional ERC-20 baskets with auction-based rebalancing, configurable fees and product-specific governance. Its accounting and protection mechanisms differ from the Yield system behind eUSD, USD3 and ETH+. Each exact Index portfolio requires its own holdings, authority and exit assessment.

This is an unscored documentary architecture review. Current deployment authority and reviewed-runtime equivalence remain incomplete; the documented chain list supplies no verified chain grades.

## Contract and economic risk

The [Index documentation](https://docs.reserve.org/core-components/index-dtfs/overview) describes proportional ERC-20 basket accounting, auction-based rebalancing, configurable fees and per-product governance. The core model differs from Yield collateral plugins, default replacement and RSR recapitalization. Do not import a Yield audit, plugin status or staked-RSR cushion as Index protection.

Assess the installed Folio version, auction/solver integrations, asset behavior, fee dilution, role scope, governance and voting-vault versions. Proportional accounting is not protection against a constituent's collapse, transfer restrictions or failed redemption. External lenders using Index shares as collateral add their own oracle and liquidation risks.

## Governance and authority

**Admin not on-chain verified — high uncertainty.** Exact DTF, Folio, auction, governor and voting-vault addresses and critical permission paths are not certified in this documentary scope. Thresholds, signers, modules, delay, exception paths and optimistic veto rights remain unknown until the exact deployment is checked. eUSD's observed governor and timelock do not govern Index products by inference.

The [governor 1.1.0 release](https://github.com/reserve-protocol/reserve-governor/releases/tag/r1.1.0) and [staged upgrade discussion](https://forum.reserve.org/t/1661) are distinct from installation evidence. A reported shared-vault upgrade does not establish all DTF-governor upgrades. Standard and optimistic rebalance permissions must be checked separately; no universal family voting threshold is asserted.

November 12 [CLX](https://forum.reserve.org/t/1766), [DFX](https://forum.reserve.org/t/1767), [DGI](https://forum.reserve.org/t/1768) and [BGCI](https://forum.reserve.org/t/1769) deprecation RFCs are proposals, not completed shutdowns. If executed, verify role removal, mint/rebalance restrictions, continued basket redemption and later voting-vault retirement separately.

## Holder rights and exit

Basket redemption is distinct from selling each returned asset for cash. Assess constituent restrictions, auction settlement, supply and management fees, share dilution, liquidity and the actual redemption route. A marketed portfolio policy or liquid reference price is not an executable exit quote. ABC Labs' [interface terms](https://reserve.org/terms-and-conditions/) do not establish a corporate repayment guarantee for each Index DTF.

## Evidence and future scoring

This November 13 documentary assessment assigns no numerical grade. No Yield audit, asset score or chain clearance is inherited.

A scored assessment requires exact deployment/runtime and audit/change binding, complete authority paths, auction/fee configuration and a verified relevant exit path. An individual Index asset additionally requires current holdings and dependency evidence. Reassess for material implementation/control changes, auction failures, realized losses or executed deprecations. Published code or a passed proposal alone does not close these checks.

</div>
