---
asset: "GHO"
slug: "gho"
aliases: ["GHO", "Aave GHO", "Fluid Lending GHO"]  # FarmTracker labels a Fluid GHO supply position "Fluid Lending GHO"; asset-axis risk is GHO's peg (Fluid market/protocol risk is captured at the protocol layer).
chains: ["eth", "arb", "base"]
category: "stablecoin"
peg_mechanism: "crypto-overcollateralized"
assessment_type: "light"
date: "2026-06-07"
last_verified: "2026-08-29"
last_revised: "2026-10-30"
underlying_assets: ["Aave collateral basket"]
yield_bearing: false
peg_mechanism_score: 5.5
backing_score: 6.0
underlying_score: 6.0
liquidity_score: 6.0
structural_score: 6.0
issuer_score: 6.5
overall_score: 5.5
issuer: "Aave DAO"
audited_reserves: false
governance_dao: aave
check_sources: >-
  SA producer-approved staged authority return, October 30 07:45 UTC chain pins,
  copied under data/reviews/gho-score-review-2026-10-30/sa-authority-receipt/.
  BM-selected PegTracker staged backing source and reconciliation, October 30.
verification_scope: >-
  Targeted authority and architecture correction; SA findings accepted with gaps.
  No independent fork replay, full code-risk review, live exit execution or new
  score endorsement. last_verified remains August 29; numeric ratings held.
---

# GHO — Asset Risk Assessment (Light)

**Revised October 30, 2026. Numeric ratings unchanged; the historical Contract & Admin 6.0 is pending reassessment, not newly endorsed.** This revision incorporates security_analyst’s producer-approved staged authority return and BM’s selected source package. It corrects older claims about core mint permissions, token upgrades and legacy GSM identities. No public report or dashboard publication is performed by this edit.

## Current finding: immediate Council authority over core issuance

At Ethereum block **26,304,162**, October 30 **07:45:11 UTC**, the **2-of-3 Risk Council** is a MINTER_ROLE holder on mainnet direct facilitator `0xE9ac5231fAecb633dA0Fe85Fcb2785b8363427d2`. Its bucket was full at **310m GHO level / 310m capacity**. The same Council can use the bucket steward to raise capacity and then mint to an arbitrary recipient without a DAO payload or execution timelock.

SA’s stateful local fork increased capacity from **310m to 620m**, then minted **one wei to the existing reserve**. Supply and reserve balance each rose by one wei. Increasing beyond twice current capacity, decreasing capacity and repeating an update inside the cooldown reverted. No forward time jump was used. The arbitrary-recipient conclusion comes from matched source permissions; the demonstrated recipient was the reserve. This review checked the archived proof and hashes, not an independently repeated fork.

**310m additional headroom is the next eligible increase, not a lifetime ceiling.** Subsequent increases require more than 86,400 seconds between updates and can expand capacity again. A full bucket therefore does not provide a durable barrier against this Council path. This is a permission consequence, not evidence of key compromise, unauthorized issuance or realized loss.

The Council also has guardian paths on three lending direct minters. Those mint into configured pools rather than an arbitrary Council-selected recipient. Their reach is different from the mainnet direct facilitator and must remain separate.

## Stability and peg mechanism — historical 5.5 retained

The earlier blanket statement that mainnet peg defence is absent is withdrawn. The previously seized legacy GSMs are not today’s registry-discovered RemoteGSMs. Current Ethereum modules are:

| Underlying wrapper | Current module | Frozen / seized at SA pin |
|---|---|---|
| waEthUSDC | `0x3A3868898305f04beC7FEa77BecFf04C13444112` | false / false |
| waEthUSDT | `0x882285E62656b9623AF136Ce3078c6BdCc33F5E3` | false / false |

SA reported approximately **0.029227 USDC-wrapper units** and **24,396,388.692988 USDT-wrapper units** available in these modules. Wrapper units are not verified dollar exit capacity. Live module identity and unfrozen getters do not prove an executable holder swap, sufficient inventory at size or complete peg defence. Older legacy seizure and PegKeeper observations remain dated history, not current fleet-wide absence claims.

BM’s selected source records a $0.99850861 mark, but its upstream price timestamp is unavailable; the source write time does not establish mark freshness. No current peg-performance upgrade or downgrade is inferred. The numeric mechanism rating is held pending the complete financial review; the former “all stability tooling is gone” rationale is superseded.

## Backing and claims — historical 6.0 retained

The selected PegTracker source at Ethereum block **26,303,132**, October 30 04:18:59 UTC, reconciles **699m origin GHO supply** to facilitator levels. It records **239m** in lending routes, **310m** mainnet direct-facilitator allocation and **150m** origin allocations associated with three remote reserves. These describe issuance routes, not independently realizable collateral. Remote representations are not added to origin supply.

TokenLogic’s dated pro-rata collateral model and remote reserve accounting reconciliation do not establish a complete, same-time, realizable-dollar backing ratio. The selected independent coverage fields remain null. Module-held wrapper inventory, outstanding loans, idle GHO and remote allocations cannot be added as independent backing without eliminating internal claims. The old inference that all GSM-labelled issuance is presently backed by fiat stablecoins swapped at par is withdrawn.

No verified backing shortfall or new loss is established by this authority package. Equally, source reconciliation is not proof of solvency. The historical Backing 6.0 remains unchanged pending financial assessment; the current GSM identity gap is closed, while economic coverage and execution gaps remain.

## Liquidity and exit — historical 6.0 retained

Current module discovery corrects the earlier architecture description; it is not a new executed exit measurement. Primary eligibility, wrapper redemption, module direction/capacity/fees and secondary trade execution remain separate checks. Market-notional quote proceeds are not par-redemption proceeds, and venue TVL is not executable depth. No universal legal holder right to redeem GHO for one dollar is established here.

Monad and Plasma have material reserve/module usage at SA’s distinct chain pins: Monad used **47.20m of a 50m GHO entity limit**, Plasma **43.02m of 50m**. Those limits differ from **49m wrapper-unit exposure caps**. Idle reserve GHO supports a different swap direction and is not automatically dollar liquidity for GHO sellers. September’s near-unused Monad observation is superseded. Local holder execution and settlement remain unverified.

For GHO borrowers, market availability, repayment-token acquisition, interest, collateral oracle values and liquidation permissions determine practical exit risk. A GHO discount does not by itself establish a safe or executable repayment route.

## Dependencies — 6.0 retained after staged editorial review

Dependencies include the Aave lending/oracle/liquidation stack, stablecoin issuers and their wrappers, and CCIP/remote-chain infrastructure. The largest facilitator’s **310m / 699m = 44.35%** is issuance concentration, not a collateral allocation. Different facilitators under shared ecosystem controls do not establish independent counterparty diversification.

The current dependency review retains 6.0 with incomplete per-reserve oracle and downstream mapping disclosed. The Council minting authority is assessed on Contract & Admin, not charged again here. The six measured/identified paths are not an exhaustive inventory or an additive portfolio.

## Contract & Admin — historical 6.0 retained; current reassessment incomplete

**Admin and access control.** SA reconstructed Ethereum role histories for eight contracts, checked 37 historical-holder memberships and 14 transaction receipts, and validated the staged topology. This supersedes the old claim that failed enumeration leaves core role holders unresolvable. The reconstruction still relies on indexer completeness; receipt checks validate returned events, not absence of omitted events.

The material constraint is the verified **undelayed 2-of-3 Council core mint route**, not merely a bounded reserve parameter path. Ordinary DAO paths have a currently enforced **one-day execution floor** under the matched controllers; the seven-day L 2 configuration is not the governing delay for these GHO paths. Controllers are upgradeable and roles can be regranted, so that floor is mutable.

Distinct **5-of-9 guardians** can cancel unexecuted DAO payloads. They cannot pre-cancel an immediate Council transaction. Different signer addresses do not prove independent human operators or key custody.

The **Ethereum GHO token has fixed implementation code**: SA’s complete source/runtime binding found no delegatecall, UUPS, beacon or implementation setter. This closes the prior “unknown upgrade path because EIP-1967 slots are zero” claim. Token roles remain administrable, and surrounding facilitators, reserves, GSMs and controllers include upgradeable components. Fixed token code does not make GHO’s economic authority immutable.

On the named remote reserve paths the Council can immediately change existing registered-entity limits, subject to inventory and module mechanics. LIMIT_MANAGER alone does not grant arbitrary reserve transfers or origin minting. GSM steward update cooldowns are not queued notice or timelocks. Remaining remote holder history, CCIP/emergency delivery, some remote token implementation and token ProxyAdmin source/permission paths stay explicitly unresolved.

**Smart-contract security.** The official security catalogue contains GHO audit/review links. Catalogue presence and source/runtime matches do not establish audit coverage of all current deployed components, closure of findings, incident completeness, effective bounty scope or integration invariants. Our deployed-code/audit/bounty/remediation assessment remains outstanding. Audit volume cannot offset the Council’s immediate minting authority.

**Score disposition:** the stored 6.0 is historical and unchanged by instruction. The staged current structural score remains null until our code-risk work and combined judgment are complete. “Unrated current review” is not a finding that all code is unsafe, and retaining the stored number is not approval of its superseded rationale.

## Issuer — 6.5 retained after staged editorial review

GHO is governed by Aave DAO, with public proposals/voting and delegated operational stewards. The current staged issuer review retains 6.5 on the established governance organization, public decision record and disclosed operating framework. It does not establish a legal guarantor, independently audited issuer finances or universal holder par-redemption rights. Audits, bounty size, signer thresholds and technical timelocks receive no separate issuer credit. The former rationale based primarily on handling legacy seized modules is superseded.

## Overall and remaining work

**Overall 5.5 and all stored axis numbers remain unchanged.** This targeted correction does not re-endorse the old overall rationale, calculate a new overall, or claim a completed financial/code review. The verified Council path is a material finding for that reassessment; no actual exploit or Binance-caused GHO loss is established by this evidence.

Next: finish riskAnalyst’s deployed-component security assessment; author the combined Axis 5 judgment; close or bound remote bridge/token/history gaps; complete current peg/backing/executable-exit assessment using BM’s common sources. No further blanket authority handoff is required for the measured paths.

## Evidence and revision provenance

- [SA approved authority report and explicit gaps](../data/reviews/gho-score-review-2026-10-30/sa-authority-receipt/REPORT.md), [topology](../data/reviews/gho-score-review-2026-10-30/sa-authority-receipt/topology/assets/gho.yaml), and [acceptance receipt](../data/reviews/gho-score-review-2026-10-30/sa-authority-receipt/receipt.json). All 326 SA manifest entries matched at review; no independent fork rerun claimed.
- [BM staged handoff](../data/dashboard_pending/gho-axes-456/HANDOFF.md), [selected backing source](../data/dashboard_pending/gho-axes-456/sources/backing.json), and [staged editorial score review](../data/reviews/gho-score-review-2026-10-30/review.json). Observation clocks remain distinct; earlier source files are not rebased to SA’s later pin.
- [Pre-revision report archive](../data/reviews/gho-score-review-2026-10-30/gho-before-authority-update.md) preserves the June–September history and superseded rationales. It must not be consumed as today’s assessment.
- Official context: [GHO](https://aave.com/docs/ecosystem/gho), [governance](https://www.aave.com/docs/ecosystem/governance), [security catalogue](https://aave.com/security). Current authority conclusions are bounded by the pinned SA evidence, not inferred from these general pages.

October 30: targeted authority/architecture correction; last_verified stays August 29 because this is not a full independent asset verification. No score changes, automatic overlay activation, publication or schedule changes.
