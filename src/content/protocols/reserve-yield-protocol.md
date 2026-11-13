---
protocol: Reserve Yield Protocol
slug: reserve-yield-protocol
aliases:
- Reserve Yield Protocol
- Reserve RTokens
chains:
- eth
- base
- arb
assessed_chains: []
assessment_type: architecture_review
date: '2026-11-13'
last_revised: '2026-11-13'
score_status: unscored_shared_architecture_no_deployment_clearance
assessment_version: reserve-yield-protocol-architecture-2026-11-13-v1
selected_evidence_version: reserve-eusd-documentary-2026-11-13-v1
report_role: component
parent_protocol: reserve-protocol
related_assets:
- eusd
- usd3
- ethplus
category: protocol
protocol_category: basket-infrastructure
verification_scope: bounded
production: false
published: true
audience: retail
source_commit: 15a278e97b8d55c8d987fbe1dda3627e2f29f62d
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto [&_th]:min-w-[8rem] [&_td]:min-w-[8rem]">

# Reserve Yield Protocol — Risk Report

## Summary

Reserve Yield creates RTokens backed by governance-selected baskets of collateral receipts. Plugins define collateral behavior, auctions support basket changes and recovery, and each fund has its own eligible RSR stake. The returned receipts retain their underlying lending, issuer and withdrawal risks. eUSD, USD3 and ETH+ are Yield products; their baskets and exits require separate asset assessments.

This is an unscored documentary architecture review. Current deployment authority and reviewed-runtime equivalence remain incomplete; the documented chain list supplies no verified chain grades.

## Contract and authority risk

Yield's collateral adapters, accounting, auctions, revenue routing and emergency controls form an additional dependency stack. Review the exact plugin for each receipt asset: exchange-rate behavior, feed validity, default thresholds/delay, reward handling and upstream withdrawal restrictions. An adapter can correctly implement a faulty assumption about the underlying asset. Review common libraries and dependencies for correlated failures across otherwise separate DTFs.

The [published security inventory](https://docs.reserve.org/core-components/yield-dtfs/security) contains multiple historical core and version-specific reviews. This is positive evidence of a security process, but audit counts are not a safety score. Acceptance requires a binding from installed implementation and plugins to reviewed commits, changes since review and remediation evidence. This report does not assert that a current release or all newly introduced plugins have been audited, or claim a complete clean incident history.

[Index auction, fee and role implementations](/protocols/reserve-index-protocol/) require their own review. Yield core audits do not automatically cover Folio/Index code, its governor, voting vault, auction integration or external assets. A release being published is not evidence a given DTF installed it.

### Authority evidence and remaining gaps

**Admin not on-chain verified — high uncertainty**, except for the narrowly identified eUSD documentary owner observations below. There is no family-wide admin or uniform timelock to certify from one product.

| Address / scope | Role | Type | Threshold / signers | Delay and current authority coverage |
|---|---|---|---|---|
| `0x96dC1C14D3D5e2dDAa52368aDfe6E6b20b976832`, Ethereum eUSD only | Observed Governor Anastasius | Governor contract identity | Voting/quorum and full privilege paths not certified here; Safe signer count not applicable to the governor identity | Observed at block 26403326; not a complete authority walk |
| `0xd979Cf15F7275a3dF838513AB911587d23b6d29e`, Ethereum eUSD only | Observed governor timelock | Timelock identity | Proposer/executor/canceller roles and upstream authority not fully certified here | Exact current delay, bypasses and migration receipt unresolved |
| Yield Main, registries, plugins, upgrades, pausers and freezers for other DTFs/chains | Deployment-specific control paths | Unknown until exact deployment checked | Unknown; no inherited signer topology | Unknown; no inherited eUSD timelock |

The eUSD identity observation is at **Ethereum block 26403326, November 13 03:23:35 UTC**, recorded in the November 13 documentary assessment. It does not establish when migration occurred. A documented legacy address or default delay must not replace current control evidence. The most critical paths to verify are owner/upgrade authority → implementation and registry/plugin replacement, governor → timelock → basket/fee changes, and any independent emergency pause/freeze or auction authority. Signer independence, modules, guards, delegates and bypass paths remain unknown where applicable.

Pinned [pause/freeze specifications](https://raw.githubusercontent.com/reserve-protocol/protocol/244a16ee130d11a18c19ff7471c750213a32d543/docs/pause-freeze-states.md) distinguish issuance pause, trading pause and freeze. The document labels its function table as release 3.1.0: it is a historical behavior specification, **not a current-version deployment matrix**. In that table freeze blocks redemption while some pause modes preserve it. Confirm the installed version rather than promising universal redemption during emergencies.


## Economic and recovery risk

For Yield, distinguish governance's prime basket, the derived required reference/collateral basket and actual inventory. Adequate marked aggregate value does not prove possession of the correct receipt quantities. A basket change can produce a period of trading, concentration and exit risk before physical holdings converge. A plugin's healthy status is evidence about its configured tests, not proof that all upstream loans, reserves or managers are solvent.

The [recollateralization design](https://raw.githubusercontent.com/reserve-protocol/protocol/244a16ee130d11a18c19ff7471c750213a32d543/docs/recollateralization.md) explicitly permits reducing basket obligations when capital is insufficient. Thus a successful recovery process may still impose a holder haircut. Its reasoning includes simplified price/supply assumptions and trade-size considerations; those are review targets under simultaneous defaults and volatile trading, not evidence of guaranteed recovery.

Stress recovery requires the whole sequence: recognize impairment → select replacement basket → sell recoverable assets and eligible RSR → acquire the needed basket → restore redemption capacity. Separate detection delay, auction delay, sale discount and permanent loss. Simultaneous upstream losses and RSR price/liquidity deterioration can weaken protection precisely when it is needed. Independent token symbols do not imply independent issuers, lending markets, curators, bridges or liquidity providers.

Only fund-specific eligible stake is relevant to the RSR first-loss calculation. An RSR contract balance can include economically distinct balances and is not automatically active, available or realizable protection. Do not sum all RSR, use a fixed historical percentage, or count the same buffer twice. Current measured accounting and realizable backstop capacity require a separate asset assessment.

### Exit and income boundaries

The [operations documentation](https://docs.reserve.org/core-components/yield-dtfs/protocol-operations) describes configurable throttles, auctions, fund-specific staking and revenue routing. Parameters and recipients must be read per DTF. A documentation default is not today's available redemption capacity or a stress settlement commitment.

For each asset, distinguish secondary-market sale, native basket redemption, constituent receipt withdrawal and conversion to the desired cash/ETH token. Separately quoted stages are not proof a combined route executes at the same price. A returned Aave, Compound or Morpho claim still carries its upstream risks. A lossless basket transfer can coexist with a loss or delay in the holder's final cash exit.

Revenue distribution is also product-specific. Never infer that all collateral yield goes to all DTF holders, all RSR stakers or one corporate beneficiary. Governance can alter routing and economic incentives; changes can affect demand for first-loss capital without directly changing backing inventory.


## Governance and legal context

The [interface terms](https://reserve.org/terms-and-conditions/) identify ABC Labs' service role and disclaim guaranteed/insured deposits and responsibility for independently created DTFs. They do not establish a corporate obligation to repay every Reserve token, product-specific insolvency priority or independent financial assurance. A code audit and visible onchain inventory answer different questions from reserve assurance and legal rights.

Current governance activity should be classified by lifecycle, with payload scope and source clocks:

- **eUSD:** the bundled October basket/methodology proposal executed October 13; this does not establish settlement of every rebalance trade. Both November revenue/mandate proposals were Active at the November 13 pin. Do not treat a revised proposal as cancellation or deadline passage as execution. See the [basket proposal](https://forum.reserve.org/t/1656) and [revenue discussion](https://forum.reserve.org/t/1726).

Burn/unlock policies and reported treasury actions require their own execution ledger; they are not immutable contractual protection for DTF holders. Exchange custody events involving RSR are not automatically Reserve-contract exploits, but their effects on RSR price and realizable support may matter. This report does not assert complete incident attribution or compensation.


## Reassessment and acceptance

Review the shared report when a material implementation/plugin vulnerability or fix emerges, a new release changes accounting/auction/emergency controls, an authority or optimistic-governance path changes, an actual recovery imposes a haircut, or legal/operating responsibility materially changes. A product-specific basket rotation, RSR coverage change or liquidity deterioration primarily triggers that asset's review unless it reveals a shared weakness.

Before any scored deployment assessment, require: exact chain/token/component/version and current implementation identity; audit/change binding; complete critical authority and exception paths; oracle/plugin and auction configuration; and evidence of the relevant holder exit path. Before assigning asset economic grades, additionally require accepted current backing, dependency, realizable backstop and exit evidence. Missing evidence remains unknown rather than a healthy score.

This November 13 documentary architecture assessment does not confer a numerical grade, live security certification or deployment clearance. A later scored assessment requires additional accepted evidence.

</div>
