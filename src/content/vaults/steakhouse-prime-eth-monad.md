---
vault: Steakhouse Prime ETH (Monad)
symbol: steakETH
slug: steakhouse-prime-eth-monad
category: lending-vault
protocol: Morpho
chain: monad
vault_address: '0xbeef04b01e0275d4ac2e2986256bb14e3ff6ef42'
strategy_address: '0xa6b6155b214e1b378344987b6de5e79eae828e35'
denomination: WETH
assessment_status: reviewed
risk_summary: Single-market wstETH credit with thin borrower buffers, shared withdrawal
  liquidity and unresolved exact oracle/source and control-history assurance.
date: '2026-11-16'
last_verified: '2026-11-16'
snapshot_block: 122691043
snapshot_at: '2026-11-16T08:18:58+00:00'
total_assets: 10102.961570387855
idle_assets: 0
largest_allocation_pct: 100
overall_score: 5.0
assessment_version: steakhouse-prime-monad-direct-2026-11-16-v1
production: false
chain_id: 143
control_snapshot_block: 122690990
top_borrower_pct: 34.6
thin_buffer_debt_pct: 74.02
market_cash: 1705.999857
force_deallocation_penalty_pct: 0.001
published: true
evidence_version: LMT:lmt-monad-v1-public-core; Security:v1-v4-oracle; DA:sha256:729d98aed6532da72ddb67e5216eb7cfe061d1b55a6397f8826e874a151b5340
---

# Steakhouse Prime ETH (Monad) — Risk Report

## Summary

**5.0/10 — higher means safer.** Steakhouse Prime ETH is a WETH-denominated Morpho Vault V2 share on Monad. Its capital is concentrated in one wstETH-backed lending market. Accounting and the full positive-debt borrower roster reconcile, and sampled ordinary withdrawals succeed. The grade is constrained by thin borrower buffers, one collateral/oracle exposure, shared liquidity and incomplete exact oracle and deployment-control assurance.

This report covers the direct vault. A Beefy strategy supplies into the same vault, adding another contract, control, fee and withdrawal layer. Direct shares and Beefy moo shares are different instruments; this grade does not certify that wrapper’s exit. WETH on Monad is neither native MON nor an independently verified Ethereum cash-redemption claim.

## 1. Where the capital is

At **Monad block 122691043, November 16 2026 08:18:58 UTC**, accrued vault assets were **10,102.961570387855 WETH**. Idle WETH was zero. One adapter’s accrued market claim equals the vault total with zero raw-unit residual.

| Layer | Exact identity | Funded role |
|---|---|---|
| Direct vault | `0xbeef04b01e0275d4ac2e2986256bb14e3ff6ef42` | steakETH share claim |
| Adapter | `0xa6b6155b214e1b378344987b6de5e79eae828e35` | 100% of current vault accounting assets |
| Morpho core | `0xd5d960e8c380b724a48ac59e2dff1b2cb4a1eaee` | Market accounting and lending |
| Funded market | `0x8bdb7d2c5024d349772884afb3c5c409bc8de58ed63d79618bf48fb57b595060` | WETH loans against wstETH; 94.5% LLTV |

Allocation is the adapter’s supply shares converted using accrued market assets/shares, divided by outer accrued total assets. This verifies accounting ownership and arithmetic, not independent liquidation NAV. Borrower wstETH is pledged collateral behind loans, not an additional reserve owned outright by vault shareholders. [Vault contract](https://monadscan.com/address/0xbeef04b01e0275d4ac2e2986256bb14e3ff6ef42).

The vault represents about **78.70% of market supply shares**. Its attributable credit exposure is pooled pro-rata supply risk; the market’s entire debt must not be presented as extra assets or solely this vault’s loans. Beefy’s inner share claim is already included in direct-vault assets, so adding wrapper NAV to this TVL double-counts capital.

## 2. What secures deployed capital

| Accrued native market measure | Observation |
|---|---:|
| Total supply | 12,837.962822 WETH |
| Total debt | 11,131.962965 WETH |
| Utilization | 86.71% |
| Available market cash | 1,705.999857 WETH |
| Positive-debt borrowers | 16 |
| Native borrow-share coverage | 100% |
| Largest borrower address / debt | 34.60% |
| Largest five addresses / debt | 81.22% |
| Minimum oracle HF | 1.00475 |
| Debt with HF ≤1.05 | 74.02% |

All discovered borrower positions were reread at the financial pin; their borrow shares equal the market’s full native borrow-share denominator. No borrower was oracle-liquidatable or oracle-underwater at that observation. Address-level coverage does not establish independent beneficial owners, absence of economic bad debt, or proceeds from an actual liquidation. LLTV is a liquidation threshold, not current borrower LTV or a 5.5% first-loss cushion for depositors.

### Oracle and collateral valuation

The market oracle is `0xbb16f6b3c5422209ee1d9b0f63761f159c136694`, with one nonzero base feed, `0x026864bee872e81a205feb21266991c2890926e6`. Quote feeds and ERC-4626 conversion vaults were zero. The leaf reported 18 decimals and answer **1.249306133740130361**, with an update age of **541 seconds** at the financial pin.

The leaf’s exact source, economic basis, writer authority, origin/bridge clock and enforced heartbeat were not established. Metadata/role probes reverted and the exact source record was unavailable. The numeric rate alone does not prove a staking-conversion, market-price or cross-chain-feed interpretation. No independent secondary-price basis was verified. A recent-looking `updatedAt` is not independent proof of origin freshness or robust liquidation pricing. The later leaf review used a separate pin and did not renew the financial snapshot.

Accordingly, borrower HFs are conditional on the configured mark. They are not independently verified secondary-market collateral recovery values. wstETH token, bridge, custody and settlement dependencies remain relevant; the symbol and Ethereum product reputation do not establish exact Monad redemption guarantees.

## 3. What loss can reach the depositor

Collateral impairment, adverse realizable wstETH/WETH basis, an unsuitable or compromised oracle, or liquidation failure can leave debt unrecovered. Market suppliers bear the resulting shortfall, including this vault through its supply share. Shared collateral and one oracle limit diversification despite multiple borrower addresses.

The following static sensitivity holds debt and collateral quantities fixed, applies a fully transmitted oracle-value markdown, and assumes no top-ups, liquidation or execution costs:

| Assumed collateral-mark reduction | Market debt becoming liquidatable |
|---|---:|
| 2% | 39.41% |
| 5% | 74.39% |
| 10% | 74.44% |

These are threshold-crossing exposures, **not predicted losses**. Under the same artificial 10% shock, market debt above gross marked collateral totals about 254.67 WETH before actions and costs. That is a market-wide modeled shortfall, not a direct-vault loss forecast. A real secondary-market discount may transmit differently or not at all through the unresolved oracle basis.

An ordinary ETH/USD move is not automatically a wstETH/WETH credit loss. Conversely, correlated assets do not remove slashing, token/bridge impairment, liquidity or valuation risk.

## 4. How holders withdraw

Ordinary withdrawal uses idle assets and the configured liquidity adapter/data for the funded market. Standard V2 maximum getters returned zero by implementation convention; that does not establish withdrawal closure. Actual funded-holder calls are more informative.

| Indicative size | Native WETH requested | Independent ordinary `withdraw` call |
|---|---:|---|
| $10,000 | 5.499538 | Success |
| $50,000 | 27.497689 | Success |
| $100,000 | 54.995379 | Success |
| $1,000,000 | 549.953785 | Success |
| Market cash plus 1 WETH | 1,706.999857 | Reverted: insufficient liquidity |

The public test holder had sufficient shares, including for the failed larger call. Tests used the same native pin, self receiver/share owner and no state overrides. The USD sizing reference was about $1,818.33/WETH from a separately timed, unpinned API observation. Native amounts define the tests; they are independent simulations, not cumulative reservations or executed transactions.

Market cash is shared by every supplier and exit route. It is about **16.89% of direct-vault accounting NAV**, not cash reserved for this vault, Beefy, or any individual holder. The vault’s idle balance is zero. Simulated exits do not establish future cash availability, collateral-sale liquidity, bridge execution or final off-chain cash settlement.

The alternative force-deallocation penalty was **0.001%** at the pin. Its setter had zero configured delay and was not abdicated; this is not a permanent cost guarantee. Alternative deallocation has its own data, permission/share and penalty conditions. It must not be conflated with an ordinary withdrawal fee. [Morpho V2 mechanics](https://docs.morpho.org/developers/contracts/morpho-vaults-v2/).

## 5. Who can change or operate the vault

Control observations use the separate **block 122690990** pin. They are not one atomic observation with the financial tables.

| Path | Measured state | Important limit |
|---|---|---|
| Owner | `0x0a0e559bc3b0950a7e448f0d4894db195b9cf8dd`, nominal Safe 5-of-10 | Human independence and full source/controller assurance unverified |
| Curator | `0x827e86072b06674a077f592a531dce4590adecdb`, nominal Safe 3-of-9 | Lower nominal quorum can control curator operations |
| Safe modules/guard | Both sampled module lists empty/terminal; guard storage zero | Not universal audited-build or signer-independence proof |
| Fees and allocator appointment | Zero configured selector delays; not abdicated | No universal seven-day warning |
| Adapter addition/removal | Seven-day sampled selector delays | Does not delay every privileged operation |
| Ordinary exit gates | Current gates zero; share-sending and asset-receiving setters abdicated | Meaningful narrow protection, not a liquidity guarantee |
| Deposit gate | Asset-sending setter remains available with seven-day delay | Deposit eligibility differs from withdrawal-recipient gating |

Generic Prime marketing describes a seven-day/Aragon guardian setup, but does not establish that mechanism for this exact Monad V2 vault. V2 alone also does not make the product a Turbo vault. The brand’s canonical product component and deployed selector observations are kept separate.

Adapter-reported cap IDs were read directly: all three relative ceilings were 100%; absolute ceilings were 1 trillion WETH and 50 million WETH twice. They are overlapping allocation permission scopes, not separate holdings or meaningful present diversification constraints. Exact adapter source was unavailable, so scope names are not inferred from a different deployment.

### Assurance coverage

| Question | Established scope and limit |
|---|---|
| Exact source/runtime | Direct VaultV2 and underlying core runtimes match retrieved compiler-verified records within the finite review. |
| Adapter, registry and oracle source | Exact records unavailable; getters/addresses do not certify code or all effective powers. |
| Current role/pending census | Full deployment-to-pin history not reconstructed under available RPC/indexer limits; complete exclusive membership and pending changes remain unknown. |
| Audit/build and admin coverage | No independent full audited-commit/build/remediation match or complete live privileged-path audit coverage established. |
| Bounty/formal proof/tests | Applicable deployment-specific coverage, exclusions, proof scope and deployed test coverage not established; no blanket protection credited. |

Historical source attempts and RPC range limits are recorded. These gaps constrain confidence and the grade; they do not establish that a price exploit, hidden role or adverse proposal exists. Outer-source verification does not certify the adapter, oracle, registry, bridge or an external wrapper.

## 6. What return is earned

Native vault performance fee was **10%**, with zero management fee. The separately retrieved Morpho API observation at **November 16 08:18:54 UTC** quoted about **1.23% net APY excluding rewards** and **2.42% total net APY**. Its approximately 1.19 percentage-point incentive component is not organic WETH interest or guaranteed to persist; reward-price, campaign, claiming and execution risk remain separate.

Dated producer share-price marks imply **0.0230% over seven calendar days, 0.0461% over fourteen and 0.1129% over thirty**. These are WETH-denominated share-price ratios, not full investor returns including reward claims, gas or every fee. Naive collection timestamps retain their provenance and are not silently labeled UTC or converted into precise elapsed-time annualized returns.

Vault-service terms name Carniceria Tropical SA as the service counterparty and disclaim custody/fiduciary duties and parent responsibility. No exact-vault corporate principal guarantee or financial assurance was established. Contract access, service restrictions and legal recovery are different questions. [Vault-service terms](https://www.steakhouse.financial/docs/documents/disclaimers/vaults).

## Risk judgment

The **5.0** grade is an authored direct-vault judgment, not an inherited Morpho/Steakhouse/wstETH score or an average of invented component grades. Reconciled accounting, complete native debt-share coverage, tested exits and narrow gate protections support a functioning-vault assessment. They do not compensate fully for a single collateral/oracle market, a large thin-buffer debt share, shared exit cash, low-delay curator powers and material oracle/source/history assurance limits.

Financial snapshot confidence is medium; confidence in stressed realizable recovery and comprehensive control assurance is low. Those limitations are incorporated into the current judgment. This general-holder grade does not certify a leveraged position or the Beefy wrapper.

## Coverage and review triggers

All six vault questions are addressed within the stated measurement scope. Source verification is finite, not universal assurance. The financial block hash was rechecked; the initial header time was 12.05 seconds ahead of the recorded client receipt. Later safe/finalized heads cover the height, which is not an independent proof of every upstream source or economic valuation.

Existing lending and oracle-topology collectors cover this product; this review does not install a comprehensive control/borrower monitor, dashboard, schedule or alert.

Reassess on material borrower-health/concentration changes, impairment/bad debt, oracle source/writer/origin or mark problems, rising utilization/failed exits, new funded markets/collateral, changed fees/gates/roles/penalties or code, verified adverse governance, or material incentive/organic-return changes. Improved source, audit or recovery evidence can also change confidence and scores.

## Revision history

2026-11-16: initial dedicated vault report, replacing reliance on the older light asset assessment for current direct-vault analysis. The previously unenumerated lending book is now measured; source clocks and remaining oracle/control assurance limits are explicit. The separate Beefy wrapper and private custody checks remain outside this direct report’s completed scope.
