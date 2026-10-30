---
asset: "GHO"
slug: "gho"
aliases: ["GHO", "Aave GHO"]
chains: ["eth", "arb", "base"]
category: "stablecoin"
peg_mechanism: "crypto-overcollateralized"
assessment_type: "full"
date: "2026-06-07"
last_verified: "2026-08-29"
last_revised: "2026-10-30"
featured: false
production: true
issuer: "Aave DAO"
audited_reserves: false
market_cap_approx: 699000000
axis_frame: six
peg_mechanism_score: 5.5
backing_score: 6.0
liquidity_score: 6.0
underlying_score: 6.0
structural_score: 6.0
issuer_score: 6.5
overall_score: 5.5
---

# GHO — Risk Report

**Moderate risk · 5.5/10**

[Live dashboard](https://tidresearch.com/dashboards/?asset=gho)

## Summary

GHO is Aave DAO’s dollar-targeting stablecoin, issued through authorized facilitators with capacity buckets. Issuance routes, collateral claims, wrapper inventory and holder exits have different economic scopes.

At the October 30 authority pin, the **2-of-3 Risk Council can increase the mainnet direct facilitator’s bucket and then mint without a DAO payload or execution timelock**. The DAO’s separate one-day delay and guardian cancellation do not gate that Council route. Current registry-discovered RemoteGSMs differ from the legacy seized modules; their presence does not itself establish an executable par exit or independently realizable backing.

This is a targeted October 30 authority and architecture revision, not a new full verification. **Last verified remains August 29. Contract & Admin 6.0 is a historical rating, pending current reassessment; it is not newly endorsed.** The current authority findings are accepted with gaps; deployed-component code-risk review, full financial assessment and live execution remain incomplete.

## 1 · Stability — 5.5

GHO targets one dollar through lending repayment, facilitator issuance and stability-module mechanisms. Their effectiveness depends on current module configuration, available inventory and holder-specific execution.

GHO’s current registry-discovered RemoteGSMs are distinct from the previously seized legacy GSMs. Current Ethereum modules are:

| Underlying wrapper | Current module | Frozen / seized at authority pin |
|---|---|---|
| waEthUSDC | `0x3A3868898305f04beC7FEa77BecFf04C13444112` | false / false |
| waEthUSDT | `0x882285E62656b9623AF136Ce3078c6BdCc33F5E3` | false / false |

The authority review reported approximately **0.029227 USDC-wrapper units** and **24,396,388.692988 USDT-wrapper units** available in these modules. Wrapper units are not verified dollar exit capacity. Live module identity and unfrozen getters do not prove an executable holder swap, sufficient inventory at size or complete peg defence. Older legacy seizure and PegKeeper observations remain dated history, not current fleet-wide absence claims.

The selected common backing source records a $0.99850861 mark, but its upstream price timestamp is unavailable; the source write time does not establish mark freshness. No current peg-performance upgrade or downgrade is inferred. The historical mechanism rating remains 5.5 pending the complete financial review. Current module identities do not support a blanket claim that mainnet peg defence is absent.

## 2 · Backing — 6.0

The selected common backing source at Ethereum block **26,303,132**, October 30 04:18:59 UTC, reconciles **699m origin GHO supply** to facilitator levels. It records **239m** in lending routes, **310m** mainnet direct-facilitator allocation and **150m** origin allocations associated with three remote reserves. These describe issuance routes, not independently realizable collateral. Remote representations are not added to origin supply.

TokenLogic’s dated pro-rata collateral model and remote reserve accounting reconciliation do not establish a complete, same-time, realizable-dollar backing ratio. The selected independent coverage fields remain null. Module-held wrapper inventory, outstanding loans, idle GHO and remote allocations cannot be added as independent backing without eliminating internal claims. A GSM-labelled allocation is not proof of fiat-stablecoin backing swapped at par.

No verified backing shortfall or new loss is established by this authority package. Equally, source reconciliation is not proof of solvency. Backing 6.0 is historical, pending financial assessment. Current GSM identities are established; economic coverage and execution gaps remain.

## 3 · Liquidity & Exit — 6.0

Current module discovery corrects the earlier architecture description; it is not a new executed exit measurement. Primary eligibility, wrapper redemption, module direction/capacity/fees and secondary trade execution remain separate checks. Market-notional quote proceeds are not par-redemption proceeds, and venue TVL is not executable depth. No universal legal holder right to redeem GHO for one dollar is established here.

Monad and Plasma have material reserve/module usage at distinct October 30 chain pins: Monad used **47.20m of a 50m GHO entity limit**, Plasma **43.02m of 50m**. Those limits differ from **49m wrapper-unit exposure caps**. Idle reserve GHO supports a different swap direction and is not automatically dollar liquidity for GHO sellers. September’s near-unused Monad observation is superseded. Local holder execution and settlement remain unverified.

For GHO borrowers, market availability, repayment-token acquisition, interest, collateral oracle values and liquidation permissions determine practical exit risk. A GHO discount does not by itself establish a safe or executable repayment route.

## 4 · Dependencies — 6.0

Dependencies include the Aave lending/oracle/liquidation stack, stablecoin issuers and their wrappers, and CCIP/remote-chain infrastructure. The largest facilitator’s **310m / 699m = 44.35%** is issuance concentration, not a collateral allocation. Different facilitators under shared ecosystem controls do not establish independent counterparty diversification.

The current dependency review retains 6.0 with incomplete per-reserve oracle and downstream mapping disclosed. The Council minting authority belongs under Contract & Admin; it does not create an additional independent dependency. The six measured/identified paths are not an exhaustive inventory or an additive portfolio.

## 5 · Contract & Admin — 6.0

At Ethereum block **26,304,162**, October 30 **07:45:11 UTC**, the **2-of-3 Risk Council** is a MINTER_ROLE holder on mainnet direct facilitator `0xE9ac5231fAecb633dA0Fe85Fcb2785b8363427d2`. Its bucket was full at **310m GHO level / 310m capacity**. The same Council can use the bucket steward to raise capacity and then mint to an arbitrary recipient without a DAO payload or execution timelock.

The authority producer’s stateful local fork increased capacity from **310m to 620m**, then minted **one wei to the existing reserve**. Supply and reserve balance each rose by one wei. Increasing beyond twice current capacity, decreasing capacity and repeating an update inside the cooldown reverted. No forward time jump was used. The arbitrary-recipient conclusion comes from matched source permissions; the demonstrated recipient was the reserve. The accepted evidence consists of archived proofs and hashes; the fork was not independently repeated for this report. The actor was impersonated on the local fork, not signed on the public network.

**310m additional headroom is the next eligible increase, not a lifetime ceiling.** Subsequent increases require more than 86,400 seconds between updates and can expand capacity again. A full bucket therefore does not provide a durable barrier against this Council path. This is a permission consequence, not evidence of key compromise, unauthorized issuance or realized loss.

The Council also has guardian paths on three lending direct minters. Those mint into configured pools rather than an arbitrary Council-selected recipient. Their reach is different from the mainnet direct facilitator and must remain separate.

**Admin and access control.** The authority producer reconstructed Ethereum role histories for eight contracts, checked 37 historical-holder memberships and 14 transaction receipts, and validated the staged topology. The reconstruction still relies on indexer completeness; receipt checks validate returned events, not absence of omitted events.

The material constraint is the verified **undelayed 2-of-3 Council core mint route**, not merely a bounded reserve parameter path. Ordinary DAO paths have a currently enforced **one-day execution floor** under the matched controllers; the seven-day level-2 configuration is not the governing delay for these GHO paths. Controllers are upgradeable and roles can be regranted, so that floor is mutable.

Distinct **5-of-9 guardians** can cancel unexecuted DAO payloads. They cannot pre-cancel an immediate Council transaction. Different signer addresses do not prove independent human operators or key custody.

The **Ethereum GHO token has fixed implementation code**: the complete source/runtime binding found no delegatecall, UUPS, beacon or implementation setter. Token roles remain administrable, and surrounding facilitators, reserves, GSMs and controllers include upgradeable components. Fixed token code does not make GHO’s economic authority immutable.

On the named remote reserve paths the Council can immediately change existing registered-entity limits, subject to inventory and module mechanics. LIMIT_MANAGER alone does not grant arbitrary reserve transfers or origin minting. GSM steward update cooldowns are not queued notice or timelocks. Remaining remote holder history, CCIP/emergency delivery, some remote token implementation and token ProxyAdmin source/permission paths stay explicitly unresolved.

**Smart-contract security.** The official security catalogue contains GHO audit/review links. Catalogue presence and source/runtime matches do not establish audit coverage of all current deployed components, closure of findings, incident completeness, effective bounty scope or integration invariants. The deployed-code/audit/bounty/remediation assessment remains outstanding. Audit volume cannot offset the Council’s immediate minting authority.

**Score disposition:** the stored 6.0 is historical, pending current reassessment. The staged current structural assessment is withheld until code-risk review and the combined judgment are complete. An unrated current review is not a finding that all code is unsafe. The stored historical number does not endorse the superseded rationale.

**Score status: historical 6.0, pending current reassessment.** The source correction does not apply a new structural rating.

## 6 · Issuer — 6.5

GHO is governed by Aave DAO, with public proposals/voting and delegated operational stewards. The current staged issuer review retains 6.5 on the established governance organization, public decision record and disclosed operating framework. It does not establish a legal guarantor, independently audited issuer finances or universal holder par-redemption rights. Audits, bounty size, signer thresholds and technical timelocks receive no separate issuer credit. Handling legacy seized modules is not a current standalone issuer rationale.

## Source dates and scope

| Evidence | Observation |
|---|---|
| Selected common backing / issuance reconciliation | Ethereum block 26,303,132; October 30 04:18:59 UTC |
| Ethereum authority and current module identities | Block 26,304,162; October 30 07:45:11 UTC |
| Monad authority/module observation | Block 117,842,055; October 30 07:45:18 UTC |
| Plasma authority/module observation | Block 36,404,497; October 30 07:45:19 UTC |
| Arbitrum authority/module observation | Block 519,615,002; October 30 07:45:18 UTC |
| Selected price mark | $0.99850861; upstream price timestamp unavailable |

These are distinct chain and source clocks, not a single atomic global balance sheet. Source write/review time does not refresh a missing market observation. Local fork behavior establishes the tested permission consequence at the pinned state, not possession of Council keys, a public-network transaction or a realized loss.

Official context: [GHO](https://aave.com/docs/ecosystem/gho), [governance](https://www.aave.com/docs/ecosystem/governance), and the [security catalogue](https://aave.com/security). Current authority conclusions rely on pinned source/runtime and role-history evidence, not general documentation alone. Governance documentation and current deployment permissions must be distinguished: the documented DAO process does not gate the separately established immediate Council path. Human operator independence and key custody are unverified.

## Open evidence and review triggers

- Complete deployed-component code/audit/bounty/remediation review and the combined Contract & Admin reassessment. Historical 6.0 is not a current endorsement.
- Bound remote role-history completeness, CCIP/emergency delivery, remaining remote token implementation and token ProxyAdmin source/permission paths.
- Reconcile complete realizable backing and current collateral/liability scope, eliminating internal and wrapper claims. Issuance reconciliation alone does not establish solvency.
- Measure holder-specific primary eligibility, module direction, wrapper conversion, fees, trade execution, settlement and latency at size.
- Reassess on changed Council permissions, repeated eligible capacity increases, altered DAO controllers/guardian powers, corroborated collateral shortfalls or materially impaired executable exits. No exploit or realized loss is inferred from a permission path alone.

## Score interpretation

Overall **5.5** and all stored axis values are unchanged. Contract & Admin **6.0 is historical, pending current reassessment**. This targeted revision does not calculate a new overall or re-endorse the earlier authority rationale. Dependencies 6.0 and Issuer 6.5 retain their staged editorial judgments with the disclosed evidence gaps.

## Revision history

- **2026-10-30 — Targeted authority and architecture correction.** Incorporated the accepted authority evidence and selected common financial source from the source assessment at commit `7c76bf6`. Distinguished the immediate 2-of-3 Council mint path from delayed DAO execution and guardian cancellation; fixed Ethereum token implementation from administrable/upgradeable surrounding components; and current RemoteGSMs from legacy seized modules. Issuance reconciliation and wrapper inventory are not independently realizable backing. All numeric scores and the August 29 full-verification date remain unchanged; Contract & Admin 6.0 is historical and pending reassessment.
- **2026-09-08 — Historical supply/facilitator observation.** Archived with the earlier report; its module/authority rationale is superseded by the dated evidence above.
