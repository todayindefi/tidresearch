---
vault: Re7 WETH (Optimism)
symbol: Re7WETH
slug: re7-weth-optimism
category: lending-vault
protocol: Morpho
chain: optimism
vault_address: '0x3d63934715b6d4c4dfbbc1a00fe2a2145079dd76'
strategy_address: '0x2821a2c8e4bea8fd7613d7dd27cab9f1e5b03041'
denomination: WETH
assessment_status: reviewed
risk_summary: Single-market wstETH-backed lending with borrower concentration, a rate-only
  oracle and a matured alternative-exit penalty proposal; sampled ordinary exits succeed.
date: '2026-11-16'
last_verified: '2026-11-16'
snapshot_block: 159608313
snapshot_at: '2026-11-16T07:50:03+00:00'
total_assets: 1125.1620913954307
idle_assets: 0
largest_allocation_pct: 100
overall_score: 5.5
assessment_version: re7-weth-optimism-2026-11-16-v1
production: false
chain_id: 10
control_snapshot_block: 159608179
control_snapshot_at: '2026-11-16T07:45:35+00:00'
top_borrower_pct: 64.55
market_cash: 225.155793331152
force_deallocation_penalty_pct: 0
pending_force_deallocation_penalty_pct: 1
published: true
evidence_version: re7-selected-evidence-2026-11-16-v1
aggregate_version: bm-re7-weth-optimism-2026-11-16-aggregate-v2
aggregate_sha256: f15e92e7f99be290be5ebe09324547252f6835ac70c68cbcfa23a94c5a70fd81
---

# Re7 WETH — Risk Report

## Summary

**5.5/10 — higher means safer.** Re7 WETH is an Optimism WETH-denominated Morpho Vault V2 share. Its current portfolio is one wstETH-backed WETH lending market, not a diversified ETH strategy or a corporate Re7 deposit. Exposure combines collateral and oracle risk, borrower concentration, market liquidity, vault control and Optimism settlement dependencies.

The measured book’s largest borrower address represents **64.55% of market debt**, and the **rate-only wstETH/stETH oracle** has no separate stETH/ETH price leg. At the control observation, the force-deallocation penalty is **0%**, while a mature **1%** proposal remains pending and can be executed permissionlessly; ordinary withdrawals are a separate route.

## 1. Where the capital is

At Optimism block 159608313, November 16 2026 07:50:03 UTC, the vault’s accrued accounting assets were 1,125.162091395431 WETH. Native idle WETH was zero. The sole adapter’s accrued supplied claim reconciled to the same total with zero raw-unit residual. This is an accounting reconciliation, not independent liquidation NAV.

| Layer | Identity | Accounting role |
|---|---|---|
| Vault | `0x3d63934715b6d4c4dfbbc1a00fe2a2145079dd76` | Re7WETH shares; WETH asset |
| Adapter | `0x2821a2c8e4bea8fd7613d7dd27cab9f1e5b03041` | Entire funded portfolio |
| Morpho core | `0xce95afbb8ea029495c66020883f87aae8864af92` | Underlying market supply claim |
| Market | `0xba3c3f6e38c5767a2c288fe5d8bb2bd493a8de3b573e7f0d3c17eddd6b6ac861` | WETH lending against wstETH, 94.5% LLTV |

Approved capabilities and an indexer’s historical/zero-balance market entries are not additional funded exposures. Allocation is the adapter’s native supply-share claim valued with the market’s accrued share conversion, divided by the outer vault’s accrued total assets. Borrower collateral is pledged behind loans; it is not WETH or wstETH owned outright by vault shareholders.

The block hash was rechecked. Its header time was about 4.78 seconds ahead of the recorded initial RPC receipt; this preserves the sequencer/header clock discrepancy rather than claiming synchronized wall clocks or L1 finality. Financial, authority, indexer and return observations have separate clocks.

## 2. What secures deployed capital

The accrued market snapshot has 1,125.162149784954 WETH supplied and 900.006356453802 WETH borrowed: utilization is 79.9890%. The vault’s attributable supply represents essentially the entire market, with a small other-supplier balance. The outer vault’s feed-level zero borrow/utilization does not describe this underlying loan book.

The collateral is Optimism wstETH; the market uses oracle `0x2c2c8f5438b2d867088cfcc1b2f3de0052a44316` and IRM `0x8cd70a8f399428456b29546bc5dbe10ab6a06ef6`. LLTV is a liquidation threshold, not current borrower leverage, borrower health or a 5.5% first-loss cushion for depositors. All 16 positive-debt borrower positions were read at the same native pin. Their summed borrow shares equal the market’s full native borrow-share total. The largest address accounts for 64.55% of market debt and the largest five for 94.18%; address coverage does not identify ultimate beneficial owners. The minimum oracle HF is 1.01753; 16.90% of debt has HF ≤1.05. No position is oracle-liquidatable or oracle-underwater at that snapshot.

The sole feed, `0xe59eba0d492ca53c6f46015eea00517f2707dc77`, describes a **wstETH-stETH Exchange Rate** of 1.249306133740130361. Quote feeds and vault conversion legs are zero, so the configured price effectively treats stETH at WETH parity. It does not independently price stETH/ETH or secondary wstETH/WETH discounts. Its round update was 19.46 hours old at the pin; the allowed heartbeat was not verified, so the age is not by itself a heartbeat violation. Reported borrower HFs therefore have a material basis blind spot. [Configured oracle](https://optimistic.etherscan.io/address/0x2c2c8f5438b2d867088cfcc1b2f3de0052a44316).

## 3. Loss transmission

A wstETH impairment, adverse wstETH/WETH realizable basis, stale or unsuitable oracle mark, or failed liquidation can leave borrower debt unrecovered. Remaining bad debt is borne by market suppliers and therefore this vault. A borrower becoming liquidatable is not itself a realized loss; recovery depends on sale proceeds, costs, execution and available liquidators.

Common exposure to wstETH and one oracle means additional borrower addresses do not diversify the main collateral or valuation dependency. Conversely, an ordinary ETH/USD move is not automatically a wstETH/WETH collateral loss. Sequencer disruption, bridge/settlement and token implementation risks can affect access and realization even when nominal WETH accounting is unchanged.

A static sensitivity applies a fully transmitted collateral-value markdown while holding debt and collateral quantities fixed, with no top-ups, liquidation or execution costs:

| Assumed oracle-value markdown | Market debt becoming liquidatable |
|---|---:|
| 2% | 7.39% |
| 5% | 16.90% |
| 10% | 96.99% |

These are exposures crossing a liquidation threshold, not projected losses. Under the same artificial 10% mark shock, debt exceeding gross marked collateral sums to about 2.34 WETH before recovery costs and actions; actual liquidation outcomes can be better or worse. A secondary-market discount need not transmit into this rate-only oracle at all.

## 4. Withdrawals

Available underlying market cash was 225.155793331152 WETH, approximately 20.0110% of vault accounting NAV. It is shared market liquidity, not cash reserved for one holder. The core’s total WETH balance is larger and spans other market obligations; it must not be assigned entirely to this vault’s exit.

The deployed vault has a configured liquidity adapter and data for the funded market. Ordinary withdrawal uses idle assets and that configured route, rather than automatically iterating every strategy. A separate force-deallocation route exists, with zero measured penalty for this adapter; access, allowance, supplied data and current gates still matter. The standard V2 maximum getters return zero by design and cannot establish that withdrawals are closed. Three independent ordinary `withdraw` calls, from an indexed funded public EOA with itself as receiver and share owner, succeeded at the financial pin without state overrides:

| Indicative USD size | WETH requested | Result |
|---|---:|---|
| $10,000 | 5.540898 | Success |
| $50,000 | 27.704491 | Success |
| $100,000 | 55.408982 | Success |

USD sizing uses a separately observed, unpinned API NAV-derived reference of about $1,804.76/WETH. Native WETH amounts define the actual test. Each result returned the expected burned-share amount. These are separate snapshot simulations, not a cumulative reservation, broadcast transaction, holder-independent eligibility proof or measured maximum depth. No secondary share sale or collateral-liquidation execution was tested. [Vault contract](https://optimistic.etherscan.io/address/0x3d63934715b6d4c4dfbbc1a00fe2a2145079dd76).

## 5. Controls and code assurance

At the separate November 16 control pin, owner and curator were the same Safe-compatible address, `0xd8b0f4e54a8dac04e0a57392f5a630cedb99c940`, with nominal threshold 2-of-4. The measured enabled-module list was empty and guard storage zero; human signer independence is unverified. The performance-fee recipient is also a listed Safe owner. These facts do not establish an independent governance check.

Four configured gates were zero. The receive-assets, receive-shares and send-shares setters were abdicated in the measured selector scope; the send-assets gate setter remained available with zero configured delay. Current allocator appointment and fee changes also had zero configured delays; adapter addition had three days. The owner can replace curator/sentinel without a universal notice period. Reducing an existing selector delay follows that selector’s existing delay, even though the generic decrease-selector mapping is zero.

Vault, adapter, core, registry and Safe singleton runtime records were checked against retrieved compiler-verified sources within the security review’s scope. That is not an independent local rebuild, proof of audit remediation, full deployed-system audit correspondence or universal formal assurance. The role and pending-operation review scanned deployment-to-pin event history in 905 contiguous chunks for each of vault and adapter, with failed requests retried and no uncovered ranges. Current allocator `0x0d0c99daf35daf2cfc50cf6a437e1c49fdf4f167` was rechecked true and the former allocator false. No sentinel-setting event was found in that source-defined history. The owner retains the ability to appoint one; this is not proof that a permanently independent guardian exists.

**Current force-deallocation penalty is zero, but a submitted 1% penalty change is already mature and remains pending.** A separate mature proposal would reduce the penalty setter’s delay to zero. Exact submitted calldata can be executed permissionlessly after maturity under the deployed source. Therefore the nominal three-day setting does not provide a new three-day warning for these operations. The penalty burns the exiting holder’s shares and retains assets in the vault; it is not a curator payment or a charge on the ordinary withdrawal route. Ordinary withdrawal simulations used the current state. [Vault code and events](https://optimistic.etherscan.io/address/0x3d63934715b6d4c4dfbbc1a00fe2a2145079dd76#code).

The asset-sending gate applies to deposits; the share-sending and asset-receiving gates used by ordinary exits have zero addresses and abdicated setters. This restricts direct withdrawal-gating changes, but does not guarantee the configured liquidity route remains usable. The allocator can change that route and manage funded exposures.

Applicable allocation scopes permit 100% relative exposure. The wstETH collateral scope has a finite 2,000 WETH loan-asset allocation cap; adapter-wide and exact-market scopes have maximum-uint128 absolute caps. These are overlapping permission scopes over the same allocation, not three separate asset balances or a diversification mandate. Only the one measured market is currently funded.

The adapter’s curator can propose a skim recipient with zero configured delay; the current recipient is zero. Skimming adapter-held balances is distinct from taking the core’s tracked supplied claim. Its three-day `burnShares` power can reset internal tracked market shares and create accounting/recovery consequences without itself burning the core’s supply shares. No nonzero pending adapter operation was found among reconstructed submissions at the control pin.

Core and registry share an immediate owner with nominal 5-of-9 Safe getters. The checked core owner can enable market parameters and set bounded fees; that does not establish arbitrary seizure or replacement of this market’s oracle. Registry admission powers affect permitted adapters, not automatic ownership of their assets. Upstream Safe modules, subregistry topology, human independence and complete audit/build correspondence remain unverified; the report credits no universal control or audit guarantee.

### Assurance limits

| Assurance question | What is established |
|---|---|
| Exact source/runtime | Compiler-verified records match queried runtimes for the bounded vault/adapter/core/registry/Safe components. |
| Applicable named audits and live admin coverage | Complete engagement scope, remediation and coverage of every live privileged path were not established; no blanket audit premium is credited. |
| Audited/deployed equivalence | No independent full compiler/dependency rebuild or audit-commit-to-deployment proof. |
| Bounty | Deployment-specific scope, exclusions and privileged-key coverage not established. |
| Formal proof and tests | Applicable complete proof scope and deployed-configuration test coverage not established. |

## 6. Return and fees

Measured performance fee is 10%; management fee is zero. Fees accrue through share/accounting mechanics, so a quoted gross rate must not be presented as an investor’s fee-adjusted return. The indexed snapshot separates about 0.94% net lending APY from a roughly 3.32 percentage-point incentive contribution to 4.26% quoted total APY. OP rewards introduce token-price, campaign and claim/distribution risk; reward yield is neither WETH credit interest nor guaranteed to continue. The indexed API return observation was retrieved November 16 at 07:49:50 UTC; its financial indexer observation time is not independently pinned. The separately retained October 17/November 16 daily share-price marks imply about **0.1085% WETH-denominated PPS growth** across those dated observations, excluding separately distributed incentives and holder gas. Their naive collection timestamps are not relabeled UTC, and comparable PPS marks are not a full realized investor-return ledger. Campaign continuation, claims and reward-token liquidation are unverified. The market fee was zero at the native pin; that is separate from the vault performance fee.

Re7’s documented role is noncustodial curation and risk-parameter service. The canonical documentary review dated November 3 found that published terms disclaim custody, fiduciary and asset-recovery duties. They do not provide a corporate redemption guarantee for Morpho vault shares. [Re7 terms](https://www.re7labs.xyz/terms).

## Risk judgment

The 5.5 overall grade reflects a functioning but concentrated lending vault with material oracle-basis and governance dependencies. Accounting reconciles, all positive-debt borrower shares are covered, sampled ordinary exits succeed, and ordinary withdrawal-gate setter abdications provide a meaningful protection. These support a middle-range grade rather than treating unknown recovery as a failed vault.

The grade is constrained by one collateral/oracle/market exposure, 64.55% of debt at one borrower address, narrow buffers for part of the book, and an exchange-rate mark that can miss a realizable stETH discount. Current liquidity covers only a fraction of all shareholders’ claims. A small nominal owner/curator quorum, immediately changeable fee/allocator settings, trusted adapter accounting powers and an already-matured alternative-exit penalty proposal add control and execution risk.

This is an authored overall vault judgment, not an inherited Morpho or wstETH grade, a numerical average of invented component scores, or a forecast of loss. Confidence is medium for pinned accounting and the tested ordinary exit path, and lower for stressed liquidation recovery, upstream control assurance and durable incentive returns. Unknown heartbeat bounds, signer independence and complete audited-build correspondence remain explicit constraints in the judgment.

## Evidence coverage

| Question | Evidence scope | Material limit |
|---|---|---|
| Capital | Native vault, idle, sole adapter and accrued market claim reconcile | Accounting claim, not independently realized recovery NAV |
| Loan book | 16 borrowers, 100% native borrow-share reconciliation | Address identity and actual collateral-sale proceeds unverified |
| Oracle | Exact rate, feed configuration and round at financial pin | No secondary stETH/ETH price leg; heartbeat bound unverified |
| Withdrawals | Three independent funded-holder ordinary eth_calls | Snapshot execution, not reservation or a tested maximum |
| Controls | Exact source/runtime scope, role history, pending operations and funded-cap reads | Not all upstream control paths or audit remediation independently proven |
| Return | Current net/incentive API split, native fees and dated PPS comparison | No complete investor reward-claim/fee/gas ledger |

Financial observations use **block 159608313 / 07:50:03 UTC**. Control history and configuration use **159608179 / 07:45:35 UTC**. The API values and daily PPS marks retain their separate clocks; the figures are not one atomic all-source snapshot. Finalized-head coverage of the financial pin was not established in the recorded follow-up. [Public vault](https://optimistic.etherscan.io/address/0x3d63934715b6d4c4dfbbc1a00fe2a2145079dd76).

An existing lending-data collector and oracle-topology producer cover this product. This assessment does not install a comprehensive vault monitor, new dashboard, control alert or recurring borrower scan.

## Review triggers

Review funded-market or collateral/oracle changes, rising utilization or failed exits, adverse borrower health or bad debt, significant borrower concentration changes, fee/gate/role/pending-operation changes, source/runtime changes, oracle problems and incentive expiry or material organic-return decline.

## Revision history

2026-11-16: initial vault assessment with native accounting, full positive-debt borrower-share reconciliation, ordinary withdrawal simulations, exact control-history review, fees and separately dated return evidence.
