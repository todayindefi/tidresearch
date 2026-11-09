---
protocol: SwanDAO
slug: swan-dao
chains:
- eth
assessment_type: full
date: '2026-11-07'
last_verified: '2026-11-07'
last_revised: '2026-11-07'
aliases:
- SwanDAO
- Swan USD
- swanUSD
- sSwanUSD
contract_score: 5.5
economic_score: 5.0
project_score: 4.5
overall_score: 5.0
category: protocol
protocol_category: cdp-lending
production: false
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-swan-dao-report>

# SwanDAO — Risk Report

**Moderate risk · 5.0/10 · Bounded Ethereum assessment**

Collateralized stablecoin issuance · Monolith instance with DAO policy and rewards

## Summary

SwanDAO issues swanUSD through collateral-backed borrowing and a USDS peg-stability module. Its sSwanUSD vault accrues underlying borrower interest and returns swanUSD on exit, while separate SWAN incentives and staked-SWAN governance revenue have their own rules. Measured reserve exposure and inspectable contracts support confidence, but partial collateral redeemability, reachable manager powers and limited operating history constrain it.

This covers the exact Ethereum SwanDAO deployment, documented as launched **October 22, 2026**. It is distinct from Swan Chain. The assessment does not clear all Monolith deployments or FiRM positions, or establish an Inverse repayment guarantee. No separate asset grade for swanUSD, sSwanUSD or SWAN follows from the protocol score.

| Component | Exact Ethereum contract |
|---|---|
| swanUSD Coin | [0x9bf2b2f57a2968a0e81546ed50cbbbb7c9d6e05e](https://etherscan.io/token/0x9bf2b2f57a2968a0e81546ed50cbbbb7c9d6e05e) |
| sSwanUSD vault | [0xfa80c7349cc2357c42a64c2954b24b1a61c29435](https://etherscan.io/token/0xfa80c7349cc2357c42a64c2954b24b1a61c29435) |
| Lender / PSM | [0x4ed5c72816abc1b67ac31ddabe31cff4a8c56a15](https://etherscan.io/address/0x4ed5c72816abc1b67ac31ddabe31cff4a8c56a15#code) |

## 1 · Smart Contract — 5.5

The exact SwanDAO deployment combines a Coin, Lender/PSM, sSwanUSD vault and DAO/rewards contracts. Core immutability and fixed clone targets coexist with reachable policy controls and mutable upstream dependencies. Control observations use Ethereum **26,361,087, November 7 06:08:23 UTC**. [Core source](https://github.com/MonolithMarket/Monolith/tree/3511ab54c7532efde0fe19423cb3753ea469a805) · [Governance source](https://github.com/MonolithMarket/GovernanceFactory/tree/36cb2803234bd9ae2ee201ede0ea7aaa739214c2)

### Reachable policy and governance controls

The RevenueRouter is the lender operator, owned by Swan's **two-day timelock**. A separate **3-of-6 manager Safe** can change half-life, free-debt target band, redemption fee and borrow-rounding tolerance directly before the deadline. These authorized actions do not require a Swan vote or delay. The manager Safe's captured modules are empty and guard zero; beneficial key independence remains unknown. This is a live control distinction, not an exploit finding.

The deadline is **October 21, 2030 at 15:59:35 UTC**. It locks selected monetary-policy controls and PSM buying, while local interest-fee changes, manager rotation and other defined fee/routing powers remain. Current local/global interest fees are **50% / 0%**; caps are **50% / 10%** respectively, on borrower interest rather than principal. The global factory path has a separate Inverse two-day governance timelock. The [immutability documentation](https://docs.monolith.market/protocol/immutability-deadline) does not establish removal of all privileged powers.

The router exposes no arbitrary call/delegatecall or operator-rotation forwarding, so a nominal setter in core is not automatically usable by the current router. Manager self-rotation remains possible. Reachable implementation paths matter more than generic permission labels.

Ten DAO clones were bound to eight immutable implementations. Implementation runtime matched explorer-supplied runtime; primary source matched the inspected governance commit except a router comment-only change. This is not a locally reproduced complete compiler build. The rewards contract stakes sSwanUSD and pays SWAN; its renounced ownership/fixed funder schedule does not establish reward-token value or future yield.

The immutable wstETH wrapper combines Lido conversion with mutable stETH/ETH and ETH/USD proxies. The lender uses a **30-hour** staleness threshold and subsequent reduction behavior; it is not a strict short-heartbeat cash mark. Both upstream proxy owners share a **4-of-9 Safe with an enabled confirmed-transaction module**. That module is a qualified additional execution route, not proof an executor can invent arbitrary actions. Executor allowlists, pending confirmations, complete OCR configuration, Lido and Sky control graphs remain outside this bounded review.

### Audit applicability

The [public audit inventory](https://docs.monolith.market/security/audits) includes historical Monolith core human reviews that are meaningful but cannot be counted as full current Swan stack assurance. The deployed Lender and InterestModel differ from ChainSecurity's April 14 final reviewed commit and later May source. Against the later source, Lender expands the local interest-fee cap from 10% to 50%; InterestModel adds an empty-market guard. These changes are not alleged vulnerabilities; they are unreviewed applicability gaps.

Coin/Vault primary files match reviewed source, without establishing dependency-wide full-build equality. Historical accepted writeoff debt-share inflation residuals remain relevant; no independent deployed remediation reproduction was performed. The [March-named ChainSecurity PDF](https://monolith-public-files.vercel.app/audits/ChainSecurity-Monolith-Re-Audit-Report-March-2026.pdf) bears DRAFT markings and lists an April final reviewed version. Broad audit-index claims that findings were addressed cannot replace report-specific accepted/partial outcomes. Governance AI findings and source tests are distinct from independent human audits, executed tests or a proven fix.

No independent current human CoinDAO audit was established. Bounty scope rows/prose conflict, exact instance coverage is incomplete and accepted-issue exclusions remain. A bounty is not insurance.

## 2 · Economic — 5.0

SwanUSD issuance combines collateral-backed free and paid borrower debt with PSM issuance against USDS reserve exposure. Eligible free debt can be redeemed into borrower collateral, while the PSM provides a separate reference-asset route. Neither route is an unconditional bank-dollar cash claim.

### Dated reserves and borrower exposure

The following measurements use **November 7, 2026, 05:17:11 UTC**, Ethereum block **26,360,833**; retrieval at **05:52:49 UTC** is separate.

At the financial pin, supply of **2.023320 million swanUSD** exactly reconciles to stored free debt **259,993.046564**, stored paid debt **339,793.131366**, accounted PSM assets **1,423,533.866691 USDS**, less accrued local reserves **0.412311 swanUSD**, with zero raw residual. Stored debt includes accrued amounts; this is a consistency check rather than independent reserve assurance. Pending unminted interest has a different perimeter.

PSM assets represent about **70.36% of supply** on that accounting basis. Idle USDS is zero; reserves are **1,276,180.536712 sUSDS shares**, converting to **1,423,552.587349 USDS**, matching reported lender-specific maxWithdraw. The **18.720658 USDS** excess over accounted assets is unaccrued vault gain. A vault's reported withdrawal limit and accounted reserve are useful bounds, not proof of execution, dollar settlement or a guaranteed run buffer. No verified global collateral ratio is claimed.

The direct lender balance is **350.897760 wstETH**, with a configured-oracle mark around **$982,071** and collateral factor **85%**. This is an oracle-valued aggregate, not independent sale proceeds. Borrower concentration, liquidation-distance distribution, full writeoff history and independently measured bad debt remain unavailable. No WrittenOff event in one 50-log page is not evidence of zero historical losses.

Free debt is redeemable into eligible borrower collateral at the oracle less the current **175bps** fee; paid debt is not. Actual borrower-by-borrower eligible capacity remains unknown. The protocol's **83.20% free ratio includes PSM assets**, so it must not be described as free borrower debt or an independently executable cash percentage. The rate controller can incentivize switching/repayment but cannot guarantee immediate cash. The [official redemption terms](https://docs.monolith.market/protocol/redemptions) explicitly describe partial redeemability.

The [PSM documentation](https://docs.monolith.market/protocol/peg-stability-module) separates PSM selling into its reference asset from collateral redemption. Swan's reference asset is USDS with sUSDS vault dependence; that retains Sky risks and is not bank-dollar redemption. PSM sell has no percentage fee in the documented code path; the collateral redemption fee is separate.

sSwanUSD assets are **1,953,469.968518 swanUSD**, comprising held Coin plus **0.224305 swanUSD** pending net borrower interest; one share converts to **1.000164550165 swanUSD**. Exit returns swanUSD. Holder-specific maxWithdraw/maxRedeem were not measured. SWAN incentives are separate: no realized APR, historical payouts or dollar value of future emissions has been established. A promotional combined APR is not recurring borrower earnings.

Small quotes returned **100.005122 / 999.962344 USDC** for **100 / 1,000 swanUSD** before gas/settlement uncertainty. They establish neither institutional depth nor stressed execution. Provider token-not-found failures for sSwanUSD do not establish zero liquidity or a failed ERC4626 exit. The quoted swanUSD→USDS route uses secondary USDC plus Sky LitePSM; it is not a tested Swan PSM withdrawal. SWAN reward-token quotes remain separate from stablecoin backing.

A severe ETH/wstETH move, stale or impaired feeds, limited liquidation execution and withdrawal pressure can compound. The [documented writeoff mechanism](https://docs.monolith.market/security/risks) increases effective debt of remaining borrowers. It does not guarantee repayment or establish that holders cannot lose value. These gaps prevent stronger economic confidence despite the observed reserve accounting.

## 3 · Project — 4.5

The reviewed public material identifies a governance brand but does not establish a registered Swan repayment obligor or enforceable corporate redemption/insolvency priority within the bounded source set. Public source availability improves inspectability, while the October 22 launch leaves very limited observed stress history. Inverse development involvement supplies neither a corporate guarantee nor inherited security clearance. Absence of an incident in sampled sources is not an exhaustive clean-history finding.

Current Swan proposal threshold and quorum are each **10,000 SWAN vote units**; the voting token is staked SWAN, not sSwanUSD. Delay/period are **7,200 / 36,000 blocks**, followed by the timelock; calendar-day translations are estimates. The governor is proposer/canceller, timelock self-admin, executor open. Open execution can execute already-scheduled matured operations, not schedule arbitrary operations. Current delegation/concentration and pending operations were not reconstructed.

Staked SWAN governance revenue, SWAN rewards for staking sSwanUSD, and the borrower-interest accrual inside sSwanUSD are distinct paths. Plain staked-SWAN withdrawal can omit pending upstream revenue, and harvest-and-withdraw can fail during upstream harvesting. That is not an established sSwanUSD withdrawal defect. Neither promotional combined APR nor reward-token pricing establishes realized recurring borrower earnings.

Current beneficial ownership and voting concentration remain unresolved. No registered repayment obligor or enforceable corporate exit right is inferred from the protocol branding, public code or Inverse development involvement. [Official SwanUSD site](https://www.swanusd.com/)

## What to watch

- Borrower concentration, liquidation distances, writeoffs and independently evidenced bad debt.
- PSM reserve conversion and actual exits at material size, including stressed collateral conditions.
- Manager policy changes, deadline behavior, fee/routing controls and voting concentration.
- Deployed-version human audit applicability, remediation and external Sky/Lido/OCR/module controls.

## Sources, scores and review scope

The **November 7, 2026** assessment uses finite pinned accounting, exact core/DAO authority and historical/version-specific review evidence. Financial observations are Ethereum **26,360,833 / 05:17:11 UTC**, retrieved **05:52:49 UTC**. Small quote collection ran **06:06:43–06:07:01 UTC**, with provider timestamps sometimes leading receipt by seconds. Security observations are **26,361,087 / 06:08:23 UTC**, with the pin fetched **06:25:37 UTC**. Documentary checks and publication do not refresh those clocks or historical audit versions.

Scores are higher-is-safer: **Smart Contract 5.5, Economic 5.0, Project 4.5, Overall 5.0**. Overall equals the three-axis mean. The rating balances meaningful reserve accounting and inspectability against contract/control, execution and track-record uncertainty; it is not a cash-equivalent classification or a grade for a separate asset or lending position.

No full borrower census, loss-history reconciliation, independently reproduced compiler build, large executable exit, global collateral ratio, external Sky/Lido/OCR authority closure or complete governance-concentration review is established. Source/runtime matching, accepted historical findings, DRAFT report markings and bounty exclusions remain relevant rather than becoming comprehensive assurance. Provider failures remain unavailable observations, not measured zero liquidity or failed holder withdrawals.

## Revision history

- **November 7, 2026:** Initial bounded Ethereum SwanDAO protocol assessment for staging.

</div>
