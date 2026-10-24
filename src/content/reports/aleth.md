---
asset: "alETH"
slug: "aleth"
aliases: ["alETH", "Alchemix ETH"]
chains: ["eth"]
# Site schema uses wrapped-token for the authored non-dollar token axes.
# Economic product: synthetic ETH debt token, not an ETH receipt.
category: "wrapped-token"
underlying_assets: ["WETH", "Alchemix ETH MYT"]
assessment_type: "light"
date: "2026-10-24"
last_verified: "2026-10-23"
volatility_score: 6.0
liquidity_score: 4.5
structural_score: 4.5
redemption_score: 4.5
issuer_score: 4.5
overall_score: 4.5
yield_bearing: false
issuer: "Alchemix DAO"
# check_sources: >-
#   Ethereum block 26255429, 2026-10-23 12:49 UTC: alETH totalSupply;
#   v3 Alchemist totalDebt, totalSyntheticsIssued, getTotalUnderlyingValue,
#   getTotalLockedUnderlyingValue,
#   collateralization parameters and pauses; v3 Transmuter cap, active deposits,
#   fees and term; ETH MYT totalAssets; alETH/WETH Curve balances and get_dy
#   quotes; Alchemist proxy admin and Safe threshold. Recheck strategy allocations,
#   other routes and L2 markets before treating this as a full verification.
axis_frame: six
axis_exemptions:
  - axis: "2 Backing"
    reason: "No backing score authored; total supply reconciliation and MYT strategy withdrawal checks remain open."
  - axis: "4 Dependencies"
    reason: "No dependency score authored; MYT strategy allocations and stress withdrawal capacity remain unchecked."
featured: false
production: false
# Source: riskAnalyst/assets/aleth.md at 5aadeb0.
# The five authored axes and provisional overall are unchanged. Redemption is
# retained as supporting evidence rather than a separate six-axis headline.
---

# alETH — Risk Report

**Elevated risk · 4.5/10**

**Category:** Synthetic ETH debt token | **Underlying:** WETH via Alchemix ETH MYT | **Issuer:** Alchemix DAO

## Summary

alETH is Alchemix's ETH-denominated debt token. Borrowers pledge WETH-denominated Mix-Yield Token (MYT) shares and mint alETH; strategy yield reduces their debt. A holder owns neither an ETH staking receipt nor an unconditional right to exchange every token immediately for 1 ETH.

On October 23 at Ethereum block **26,255,429**, ERC-20 supply was **8,260.601 alETH**, while the measured v3 Alchemist had issued **6,356.141 alETH**. The difference remains unresolved. Deposited collateral marked at **10,592.592 WETH, 166.65% of v3 issuance**; the separate 7,064.342 WETH / 111.14% figure is the minimum required locked portion, not total deposits. Neither ratio establishes system-wide backing or stress withdrawal capacity.

The v3 Transmuter offers a scheduled route to underlying value, subject to cap room, a roughly **152-day** term, MYT withdrawal liquidity and possible pro-rata bad-debt reductions. Immediate market exits carry a discount: the October 23 mark was about **2.21% below ETH**, and a direct Curve quote returned only **175.65 WETH for 200 alETH**. The provisional overall score is **4.5/10** pending supply reconciliation, strategy allocation and full exit-depth checks.

**Scope: Ethereum only.** Alchemix also has v3 alETH markets on **Optimism and Arbitrum**. Their contracts, terms, caps and liquidity have not been assessed here. This report remains staged.

## 1 · Stability — 6.0

alETH targets an ETH unit of value rather than a dollar. Debt and collateral are ETH-denominated, so an ETH/USD decline alone does not cause liquidation. The alETH/ETH market price can still diverge as holders price the time, capacity and strategy risks of the scheduled exit.

At the October 23 price read, DefiLlama marked alETH at **$2,346.79** and WETH at
**$2,399.80**, a **2.21% ETH discount**. That is broadly consistent with the onchain
alETH/WETH pool's 1-alETH quote of 0.97797 WETH. The discount is an observable market
price, not evidence by itself of a loss of collateral. It compensates holders for time,
capacity, strategy and exit risk. [DefiLlama token prices](https://coins.llama.fi/prices/current/ethereum:0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6,ethereum:0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2).

**Risks and limitations.** A fresh peg time series across stress episodes is still needed. The October 23 discount is a dated observation, not a promise of an executable price at size.

## 2 · Backing — Not separately scored

Borrowers deposit WETH-denominated Mix-Yield Token (MYT) shares and mint alETH against them.
The ETH MYT is a strategy vault, built on Morpho Vault V2 infrastructure, whose underlying
WETH is allocated across DAO-selected yield strategies. Yield reduces borrower debt, but
strategy loss can reduce backing. There is no liquidation merely because ETH falls in USD:
both the debt and the collateral are denominated in ETH. A strategy loss can trigger a
liquidation or bad-debt condition. [Alchemix v3 overview](https://docs.alchemix.fi/),
[Nethermind MYT review](https://docs.alchemix.fi/assets/files/v3-nethermind-3195e302f55244d130f49ec41e6d1539.pdf).

| Ethereum read at block 26,255,429 | Value | Meaning |
|---|---:|---|
| alETH ERC-20 total supply | 8,260.601 alETH | Includes supply outside the measured v3 Alchemist issuance |
| v3 Alchemist total synthetics issued | 6,356.141 alETH | Its outstanding issued-synthetic ledger |
| v3 Alchemist total debt | 6,357.908 alETH | Borrower debt ledger; not identical to issued supply |
| v3 total deposited underlying value | 10,592.592 WETH | **166.65%** of v3 issued synthetics at the current MYT mark |
| v3 minimum locked underlying value | 7,064.342 WETH | **111.14%** of issued synthetics; the rule-required locked portion, not all deposits |
| v3 minimum collateralization | 111.111% | Corresponds to a 90% maximum loan-to-value ratio |
| v3 global minimum collateralization | 105.263% | Protocol-wide floor setting, not a reserve cushion |
| ETH MYT total assets | 10,702.946 WETH | Whole strategy vault, including shares not pledged to this Alchemist |
| Deposits / loans paused | false / false | Both entry controls were open at the read |

The **166.65%** ratio is the current aggregate deposited value against v3 issuance. The
**111.14%** figure is the *minimum portion contractually locked* to support debt at the
current mark; borrowers may withdraw collateral above that floor. Neither marked value
proves that all MYT strategies can return WETH in a stress exit. The MYT's 10,703 WETH
also includes shares outside the Alchemist, so counting the entire vault would overstate
backing. The difference between the 8,261-token ERC-20 supply and the v3 issuance ledger
needs reconciliation across legacy and other token mechanisms before a system-wide
coverage ratio can be asserted.

**Risks and limitations.** Backing has no separately authored score. Total token supply reconciliation, live strategy allocations and stress withdrawal capacity remain open; the v3 issuance ratio must not be applied to the entire ERC-20 supply.

## 3 · Liquidity & Exit — 4.5

A holder can sell alETH on the market or enter the capped, fixed-term Transmuter. The latter schedules a claim rather than providing immediate WETH liquidity.

The main Ethereum [Curve alETH/WETH pool](https://etherscan.io/address/0x8eFD02a0a40545F32DbA5D664CbBC1570D3FedF6)
held about **1,331.87 alETH and 209.09 WETH** at the read. Its direct `get_dy` calls gave:

| alETH sold | WETH returned | WETH per alETH | Discount to 1:1 |
|---:|---:|---:|---:|
| 1 | 0.9780 | 0.9780 | 2.20% |
| 10 | 9.7702 | 0.9770 | 2.30% |
| 50 | 48.5804 | 0.9716 | 2.84% |
| 100 | 96.0196 | 0.9602 | 3.98% |
| 200 | 175.6477 | 0.8782 | 12.18% |

These are **single-pool onchain quotes**, not executed trades or a best-route aggregate.
There is also an alETH/frxETH Curve pool and other smaller venues; an ETH exit through
frxETH inherits frxETH's own redemption and market risk. The direct pool demonstrates
that immediate WETH depth is much smaller than its headline ~$3.6m TVL suggests. A
full routed ladder across venues is still needed before revising the liquidity score.

### Scheduled redemption — supporting score 4.5

Any holder can deposit alETH into the v3 Transmuter **while cap room remains**, receive a
position NFT, and claim the underlying at the end of the term. The claim is paid in MYT
shares; the app attempts to unwrap them to WETH in the same transaction. If the vault lacks
immediate withdrawal liquidity or the unwrap has too much slippage, a holder can receive MYT
instead and withdraw later. Early exit returns the vested portion and the unvested portion
as alETH minus the early-exit fee. If the Alchemist has bad debt, the matured payout can be
scaled down pro rata. These are material qualifications to a 1:1 redemption claim.
[Alchemix fixed-yield guide](https://docs.alchemix.fi/user/tutorials/redeem-alassets),
[v3 Transmuter code](https://github.com/alchemix-finance/v3/blob/master/src/Transmuter.sol).

| Ethereum Transmuter setting at block 26,255,429 | Value |
|---|---:|
| Active deposit cap | 2,377 alETH |
| Active deposits | 1,785.027 alETH |
| Remaining active-cap room | **591.973 alETH** |
| Total locked, including no-longer-active positions | 2,021.852 alETH |
| Configured term | 1,095,750 Ethereum blocks, about **152 days** at 12 seconds/block |
| Early-exit fee setting | 100 basis points on the unvested portion |
| Transmutation fee setting | 0 |

The time estimate varies with actual block cadence. The cap is a point-in-time admission
limit, not a guarantee of room when a holder arrives. Borrowers can also repay their own
alETH debt at face value, but that use does not give an unrelated holder an immediate
WETH redemption.

**Risks and limitations.** The redemption score is provisional and remains 4.5. Cap room, term, MYT payout form and bad-debt scaling qualify the scheduled route; no immediate unconditional 1:1 WETH exit is established.

## 4 · Dependencies — Not separately scored

alETH's underlying value passes through the v3 Alchemist, the ETH MYT vault and its DAO-selected WETH strategies. The MYT uses Morpho Vault V2 infrastructure. A matured Transmuter claim may pay MYT shares before a WETH unwrap, so the holder also depends on strategy withdrawal liquidity. Market exits depend on external AMMs; an exit through frxETH adds that asset's redemption and market risks.

**Risks and limitations.** No dependency score has been authored. Current MYT strategy allocations, adapter exposures and stress withdrawal capacity remain unchecked. Neither a marked vault balance nor the 166.65% v3 issuance ratio proves immediate WETH availability.

## 5 · Contract & Admin — 4.5

The Ethereum v3 Alchemist at
[`0xfa995b6a…6bee26b`](https://etherscan.io/address/0xfa995b6abc387376c3e7de5f6d394ab5b6bee26b)
is an upgradeable proxy. Its EIP-1967 admin slot resolves to ProxyAdmin
`0x28f521e15ae61f4809f99de22cbfd9f3b1e9e339`, whose `owner()` is
`0xf56d660138815fc5d7a06cd0e1630225e788293d`. The same address is the Alchemist
and Transmuter `admin()` and MYT `owner()`; it is a **3-of-7 Safe** by live
`getThreshold()` and `getOwners()` reads. There is no timelock contract in this
observed upgrade path. Alchemix's own governance documentation says onchain governance
is being introduced incrementally and multisig execution remains the current model.
[Alchemix governance documentation](https://github.com/alchemix-finance/alchemix-v3-docs/blob/main/docs/governance/intro.md).

The March 2026 [yAudit v3 report](https://docs.alchemix.fi/assets/files/v3-yearn-e44c37454c3ba188ea81d6d583c399aa.pdf)
identified 3 high and 5 medium findings and reports substantial remediation. A separate
[Nethermind MYT strategy review](https://docs.alchemix.fi/assets/files/v3-nethermind-3195e302f55244d130f49ec41e6d1539.pdf)
is published as an initial report, listing 2 critical and 6 high findings with every
finding marked unresolved in that document. This is a **publication-status gap**, not
proof those issues remain in live bytecode. The deployed implementation and live MYT
adapters have not been reconciled against final audited commits in this pass.

**Risks and limitations.** The observed 3-of-7 control path provides no timelock reaction window. Audit publication status must be distinguished from deployed-code status; neither unresolved findings in an initial document nor remediation reported elsewhere establishes the state of the live MYT adapters.

## 6 · Issuer — 4.5

Alchemix DAO operates the alETH borrowing and Transmuter system and selects the MYT strategy set. Its published v3 documentation and reviews provide evidence for the design, while execution in the observed Ethereum path remains under multisig control.

The July 2023 Curve alETH/ETH pool exploit caused an alETH backing and liquidity
disruption. Alchemix later reported that alETH was rebacked in early 2024; the
incident still shows how heavily the peg can depend on an external AMM and DAO
response. [Alchemix 2023 financial report](https://docs.alchemix.fi/Alchemix_Q3_2023_Financial_Report.pdf),
[Alchemix incident/rebacking account](https://forum.arbitrum.foundation/t/alchemix-ltipp-application-final/21395).

**Risks and limitations.** The rebacking response is evidence of a past recovery, not a guarantee against future strategy loss or liquidity disruption. The 2023 incident, present multisig authority and incomplete audit-to-deployment reconciliation remain relevant.

## Who this is for

- ETH-denominated investors who understand alETH as debt backed through yield strategies and can assess the capped scheduled exit alongside market liquidity.
- Borrowers who can repay their own alETH debt at face value, while distinguishing that use from an unrelated holder's redemption rights.

## Who should avoid it

- Anyone who needs immediate, unconditional 1:1 WETH redemption or reads alETH as a staking receipt.
- Anyone relying on the Ethereum measurements as an assessment of Optimism or Arbitrum.
- Anyone treating minimum required locked collateral as total deposits or the v3 collateral ratio as system-wide coverage.

## What to watch

reconcile ERC-20 supply against v3, migration and cross-chain issuance;
enumerate current ETH MYT strategy allocations and withdrawal constraints; simulate a
multi-venue alETH→WETH ladder; match the live Alchemist/MYT/strategy bytecode to
published final audits; and measure Optimism and Arbitrum terms, caps and liquidity
independently. [Alchemix deployment/indexer documentation](https://docs.alchemix.fi/dev/indexer-api).

Monitor the Transmuter active-cap room, term and early-exit fee; the MYT-versus-WETH claim outcome and any bad-debt scaling; and changes to the observed 3-of-7 Safe or upgrade path. Repeat market quotes at relevant sizes before relying on dated depth.

## Revision history

*2026-10-23 — Ethereum assessment from source commit `5aadeb0`, staged here on October 24. Provisional overall 4.5; authored volatility 6.0, liquidity 4.5, structural 4.5, redemption 4.5 and issuer 4.5 unchanged. Backing and Dependencies are explicitly unscored. Supply reconciliation, strategy allocations, stress withdrawal capacity, full routed exits, audit-to-deployment matching and L2 checks remain open. The source note began June 7; its October refresh establishes the measured v3 fixed-term route.*
