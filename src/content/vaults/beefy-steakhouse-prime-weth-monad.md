---
vault: Beefy Steakhouse Prime WETH (Monad)
symbol: mooMorphoMonadSteakhousePrimeWETH
slug: beefy-steakhouse-prime-weth-monad
category: lending-vault-wrapper
protocol: Beefy / Morpho
chain: monad
vault_address: '0x83b0a383c3d1b94f28a453735c692d166b561681'
strategy_address: '0x11de2d5cf186654f0b9fa3883dd4bfb4a6837467'
denomination: WETH
assessment_status: reviewed
risk_summary: Auto-compounding wrapper over a concentrated wstETH-backed lending vault;
  tested WETH exits succeed, with additional strategy/beacon and fee/source assurance
  limits.
date: '2026-11-16'
last_verified: '2026-11-16'
snapshot_block: 122691043
snapshot_at: '2026-11-16T08:18:58+00:00'
total_assets: 26.504172274317806
idle_assets: 0
largest_allocation_pct: 100
overall_score: 4.5
assessment_version: beefy-steakhouse-prime-weth-monad-2026-11-16-v1
evidence_version: LMT:lmt-monad-v1-public-core+lmt-monad-v2-custody+lmt-monad-v3-wrapper-exit;
  Security:v1-v4-oracle; DA:2026-11-16 exact-component
production: false
chain_id: 143
control_snapshot_block: 122690990
top_borrower_pct: 34.6
thin_buffer_debt_pct: 74.02
market_cash: 1705.999857
force_deallocation_penalty_pct: 0.001
published: true
inner_vault_address: '0xbeef04b01e0275d4ac2e2986256bb14e3ff6ef42'
aggregate_version: bm-beefy-monad-public-evidence-2026-11-16-v2
aggregate_sha256: 089edcf299138309c3deed9273002b89797a1d29ce9e1317f8780d930e6850c4
---

# Beefy Steakhouse Prime WETH (Monad) — Risk Report

## Summary

**4.5/10 — higher means safer.** This Beefy vault compounds yield from Steakhouse Prime ETH on Monad. Depositors hold moo shares; the strategy holds shares of the inner Morpho Vault V2, which lends WETH against wstETH. The wrapper adds code, operating authority, harvesting and fee dependencies to the inner lending exposure.

Native accounting reconciles and tested ordinary withdrawals returned the full accounting amount in **WETH**. These results support a functioning exit path at the snapshot. They do not remove the inner market’s thin borrower buffers, shared liquidity or unresolved oracle assurance, nor establish complete source/audit equivalence and upgrade-delay coverage for the Beefy strategy.

## 1. Where the capital is

Observations use **Monad block 122691043, November 16 2026 08:18:58 UTC**, unless a separate clock is stated. Amounts below are WETH accounting units.

| Layer | Exact identity | Role |
|---|---|---|
| Beefy share vault | `0x83b0a383c3d1b94f28a453735c692d166b561681` | moo share accounting and user entry/exit |
| Current strategy | `0x11de2d5cf186654f0b9fa3883dd4bfb4a6837467` | Holds inner vault shares and compounds returns |
| Inner Morpho vault | `0xbeef04b01e0275d4ac2e2986256bb14e3ff6ef42` | Steakhouse Prime ETH lending claim |
| Want asset | `0xee8c0e9f1bffb4eb878d8f15f368a02a35481242` | WETH accepted and returned, not an inner receipt or MON |

The current strategy’s `vault()`, `want()` and `erc4626()` getters bind the layers. Its measured inner balance is **26.221974548217 shares**; the Beefy share vault holds no inner shares directly. Wrapper and strategy idle WETH are zero.

| Accounting measure | WETH |
|---|---:|
| Wrapper reported balance | 26.504172274318 |
| Strategy stored pool balance | 26.504763330566 |
| Reported locked profit | 0.000591056248 |
| Inner shares at current conversion | 26.504897961679 |
| Current inner conversion above stored pool | 0.000134631113 |

Stored pool balance minus reported locked profit equals the wrapper’s reported balance exactly in raw units. This is getter/arithmetic reconciliation, not independent proof of the full deployed smoothing formula. The current inner conversion and stored pool value have different accounting treatments; their small difference is not assigned as a loss or free spendable cash. Locked profit must not be added again to NAV.

All funded capital follows this one strategy/inner-vault route. Gross inner accounting can exceed the outer balance because of stored and locked-profit treatment; “100% route concentration” does not make those overlapping measures additive. [Beefy product registry](https://api.beefy.finance/vaults).

## 2. What secures deployed capital

The wrapper holds the inner vault’s supply claim, not borrower collateral outright. The underlying analysis is in the [Steakhouse Prime ETH vault report](/vaults/steakhouse-prime-eth-monad/).

At the shared financial pin, the inner vault has **10,102.96 WETH** of assets and one funded wstETH/WETH market, with **94.5% LLTV**. The market has **12,837.96 WETH supplied**, **11,131.96 WETH borrowed**, **86.71% utilization** and **1,706.00 WETH available cash**.

All **16 borrowers** reconcile to the market’s entire native borrow-share denominator. The largest address represents **34.60% of debt** and the largest five **81.22%**. Minimum oracle HF is **1.00475**; **74.02% of debt has HF ≤1.05**. No borrower is oracle-liquidatable or oracle-underwater at the pin. Those observations do not establish actual liquidation proceeds, independent beneficial borrowers or absence of economic bad debt.

The wrapper’s market attribution follows its inner shares divided by inner supply, then the inner vault’s share of the funded market. The wrapper’s underlying claim is already included in inner-vault TVL. Shared market cash is counted once, not separately for Beefy and direct holders.

The exact oracle leaf’s economic basis, writer authority, origin/bridge clock and enforced heartbeat remain unresolved after bounded source/getter attempts. The observed single-base-feed configuration does not independently establish realizable secondary wstETH/WETH pricing. Numeric similarity to another chain’s staking rate is insufficient to classify this feed. HFs remain conditional on the configured mark.

## 3. What loss can reach the depositor

Unrecovered underlying debt reduces market supply claims, then the inner share value and the wrapper’s backing. No wrapper first-loss guarantee was established. A secondary collateral discount, impairment, unsuitable or compromised oracle, failed liquidation or token/bridge problem can propagate through both share layers.

For the same fixed borrower positions and fully transmitted oracle-value shock, a **2% markdown makes 39.41% of market debt liquidatable**, and a **5% markdown makes 74.39% liquidatable**. These are threshold sensitivities, not expected wrapper losses. A real market discount may not transmit in that way through an unresolved oracle basis; liquidation prices, costs, top-ups and timing alter outcomes.

Beefy introduces separate strategy/implementation, privileged-operation, harvesting and reward-swap risks. A successful ordinary exit does not test every emergency, upgrade, partial-return or loss-accounting branch. Pure ETH/USD price moves are distinct from WETH-denominated credit loss; WETH on Monad still carries chain and settlement dependencies.

## 4. How holders withdraw

The route is **moo share burn → strategy withdrawal → inner vault redemption → market WETH release → WETH delivered to the holder**. Want is WETH, so receiving an inner receipt alone would not close the tested exit.

A funded ordinary `withdraw(uint256)` simulation at the financial pin requested approximately **$10,000**, using **5.340992216306 moo shares**. Both `eth_call` and the call trace succeeded. Successful transfer calls trace **5.499537854813 WETH** through the core, adapter, inner vault, strategy and Beefy vault to the receiver—exactly the accounting payout for the requested shares. A separate funded-balance test also succeeded and matched its accounting WETH payout.

The standardized USD test uses a separately timed, unpinned API sizing reference of about **$1,818.33/WETH**. The native share input and WETH output define the measurement. Calls were independent simulations without state overrides or broadcast transactions. They do not reserve liquidity or guarantee future payment, another holder’s eligibility, a maximum exit amount or final off-chain settlement.

The **entire wrapper balance is about 26.5 WETH**, below the native equivalents of $50k/$100k at that reference. Funded tests at those sizes cannot be claimed; insufficient share funding is not a demonstrated liquidity failure. The underlying direct vault separately passed larger funded tests, but that does not substitute for testing the wrapper.

The inner market’s cash is shared. Wrapper idle cash is zero, and liquidity depends on the strategy reaching that market. Current deposit and withdrawal fee getters are zero; sampled exits showed no deduction from the accounting payout. Source-incomplete alternative loss/emergency paths remain outside that result.

## 5. Who can change or operate the vault

Finite control observations use **block 122690990** and retain their separate source/retrieval clocks.

| Layer/path | Observed state | Important limit |
|---|---|---|
| Wrapper runtime | Clone-like runtime targets `0x91bb303e972995ebe5f593bcddbb6f5ef49dbcbd` | Exact implementation source/audit correspondence unavailable |
| Wrapper owner | `0xf2eec1bac39306c0761c816d1d33cf7c9ad6c0fe` | Tested Safe getters revert; controller type, threshold and effective delay are not thereby established |
| Strategy | `0x11de2d5cf186654f0b9fa3883dd4bfb4a6837467`; paused false | Snapshot status does not guarantee future exits or every emergency path |
| Strategy replacement | `approvalDelay()` reports **21,600 seconds / six hours** | Does not prove the same delay covers every strategy implementation change |
| Strategy beacon-like target | `0x5cd439197f79ca1cae11e38fecebae337f8016f8`; implementation `0x578eb289fa56cce159fbe4191ce66fbeb939e8ea` | Actual tested traces use this implementation path; a zero EIP-1967 implementation slot does not establish immutability |
| Beacon owner | `0xe6e5732245b3e886dd8897a93d21d29bb652d683` | Effective controller/upgrade-delay enforcement unresolved |
| Strategy owner | `0x09d19184f46a32213df06b981122e06882b61309` | No presumed EOA, multisig quorum or universal delay from failed metadata probes |

Inner owner and curator powers, selector delays, caps and gate protections also apply through the share claim. A separate inner curator nominally uses a 3-of-9 Safe and owner a 5-of-10 Safe. Some inner fee/allocator functions have zero delay; generic seven-day Prime policy is not universal exact-deployment protection.

### Assurance limits

Direct inner-vault and core source/runtime checks are narrower than the wrapper stack. Exact Beefy implementation, adapter, registry and oracle source bindings were unavailable in the bounded source review. Generic V7/strategy repositories and API “verified/audited/timelocked” flags are not deployed-bytecode or audited-commit proof.

Complete role/pending-history reconstruction, full upstream controller reach, exact fee/smoothing/emergency formulas and deployment-specific audit remediation were not established. Applicable bounty coverage, formal-proof scope and deployed-configuration test coverage were not independently verified. These limits constrain the grade; they do not establish an exploit or imply that no audits exist. The measured six-hour replacement delay must not be advertised as comprehensive beacon-upgrade protection.

## 6. What return is earned

The inner vault charges **10% performance and zero management fees** at the native pin. The Beefy fee tuple and official API report **9.5% performance, zero deposit and zero withdrawal fees**. Beefy’s performance fee concerns strategy harvested gains/rewards, while inner lending performance is a separate layer. The two percentages must not be added into 19.5% of principal or treated as a verified universal deduction from all yield; exact deployed fee-base formulas remain incompletely source-bound.

The official Beefy breakdown retrieved **November 16 08:24:56 UTC** quotes **2.20% total APY**, with fields labeled approximately **1.08% vault APR** and **1.11% lending APR**, and 2,190 modeled compoundings per year. These are publisher labels and assumptions, not independently realized WETH returns or a certified organic/incentive attribution. [Beefy yield breakdown](https://api.beefy.finance/apy/breakdown).

Harvesting rewards into WETH adds token-price, swap, route and execution dependencies. Current PPFS is an accounting ratio; an independently comparable wrapper realized PPS/reward/fee/gas history was not collected. Missing history is unknown, not zero return, and an advertised compounding schedule is not proof it occurred. The inner vault’s dated PPS history is not the outer wrapper’s investor performance.

## Risk judgment

The **4.5** grade is an authored wrapper judgment, below the direct vault’s **5.0**. It reflects the same concentrated credit/oracle risks plus a separate implementation/beacon/control and harvesting layer whose full safeguards are not established. The difference is tied to those additional risks, not an automatic penalty for any wrapper.

Exact accounting reconciliation and tested WETH payouts support a functioning route at the snapshot. They do not independently verify every code, upgrade, emergency or stressed-recovery path. Confidence is medium for pinned accounting and tested ordinary exits, and low for comprehensive control assurance, stressed realizable recovery and a durable fee-adjusted return history. These limits are incorporated in the completed current judgment.

## Coverage and review triggers

All accounting, borrower and test amounts retain their original financial pin; later retrieval and trace-review dates do not renew the snapshot. The block hash was rechecked. Header time was about 12.05 seconds ahead of the initial client receipt; later safe/finalized heads cover the height, without certifying every upstream source. Documentary facts and the later oracle-leaf check retain separate clocks.

Existing shared producers supply lending, registry and return observations. This report installs no comprehensive wrapper/control monitor, dashboard, schedule or alert.

Reassess on failed or short ordinary payouts, strategy/beacon/owner/fee/paused-state changes, funded-route changes, oracle/provider/writer or mark problems, deteriorating borrower buffers/bad debt, persistently tighter market liquidity, or verified source/audit/control evidence that changes the assurance picture.

## Revision history

2026-11-16: initial dedicated Beefy-wrapper assessment. Native custody reconciliation and funded ordinary-withdrawal traces complete the commissioned measurement scope. Pinned tests are not transactions; original source clocks and remaining code/control/oracle/history limits are retained.
