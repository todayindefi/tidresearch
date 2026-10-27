---
vault: "Superform Flagship WETH SuperVault"
symbol: "superWETH"
slug: "superweth"
aliases: ["superETH", "Superform ETH", "Flagship WETH SuperVault"]
protocol: "Superform"
chain: "ethereum"
vault_address: "0xa036823b9a24f63c32553367bf181ee04229c3ac"
strategy_address: "0x1199a6b2587ed96446e76dee3fb660bb8fcfd0b2"
denomination: "WETH"
assessment_status: "partial"
risk_summary: "Concentrated Morpho/LST credit exposure with manager-dependent withdrawals and a 2-of-4 governance root."
date: "2026-10-27"
last_verified: "2026-10-27"
snapshot_block: 26280873
snapshot_at: "2026-10-27T01:52:23+00:00"
total_assets: 904.604262099
idle_assets: 47.458794995
largest_allocation_pct: 77.078223
production: false
---

## Assessment

**Concentrated ETH lending strategy; withdrawals require manager execution. Initial review, with no numeric rating assigned.** This is the Ethereum **superWETH** vault, also called superETH, not its Pendle PT and not Superform's governance token. At block **26,280,873**, October 27, 2026 **01:52:23 UTC**, it reported **904.604262 WETH**. Roughly **77.08%** was in Gauntlet WETH Prime and **94.75%** in three Morpho Vault V2 sources. Three curator brands provide limited economic diversification: **73.01% of the outer vault** traces to wstETH-backed loans, including two markets using the same oracle.

All five funded Morpho markets and **205 borrower positions** were examined. Their reread balances reconcile to **100% of each market's borrow shares**. No position was oracle-liquidatable or unsecured after modeled interest accrual at this block. That is a snapshot result, not a guarantee: the smallest health factor is approximately **1.00028**, and substantial debt sits within 5% of the liquidation line. Secondary collateral-sale execution, oracle construction and complete control paths remain incomplete; a numeric rating would overstate review completeness.

## Where the WETH is

The current strategy pointer was read from the vault; it was not assumed from the old watch wallet. Nineteen sources are approved, but only three had nonzero share balances. All reported funded sources use WETH as their asset.

| Holding | Address | WETH value | Outer allocation |
|---|---|---:|---:|
| Gauntlet WETH Prime | `0x43fcd85e8d9d003d515f886891b7c742ac9f92da` | 697.252887 | 77.0782% |
| KPK ETH Prime | `0xbb50a5341368751024ddf33385ba8cf61fe65ff9` | 146.986499 | 16.2487% |
| Steakhouse Prime ETH | `0xbeef0046fcab1de47e41fb75bb3dc4dfc94108e3` | 12.906161 | 1.4267% |
| Idle strategy WETH | `0x1199a6b2587ed96446e76dee3fb660bb8fcfd0b2` | 47.458795 | 5.2464% |

Measured holdings plus strategy cash sum to **904.604342 WETH**, **0.00007953 WETH above** the outer reported figure. This tiny residual is shown rather than forced to zero. The outer contract computes `totalAssets` from supply × **stored oracle PPS**, not a fresh liquidation of every strategy holding. Agreement is useful reconciliation, not independent proof of executable NAV.

The separate `getEscrowedAssets()` getter reads the actual WETH balance, **0.586347 WETH**, at escrow `0x41941100b24765ea0f31bcc95094c5874d27c93d`. It is cash already held at the outer escrow, whose user-claim obligations were not enumerated, and is **not added** to the funded-holdings table as free cash. Its full pending/claimable liability split was not enumerated. Approved-but-empty sources are permission scope, not current exposure.

Compared with the October 26 07:23:59 UTC allocation snapshot, the same three holdings remain funded and weights are approximately unchanged. This supports one comparable observation over about 18½ hours, not a 7-/30-day history or proof of daily monitoring.

## Backing: five markets behind three curators

The underlying shares are claims on WETH supplied into overcollateralized Morpho markets. Borrowers owe WETH; the collateral below secures those loans. The vault does **not** directly own that amount of wstETH, weETH, rETH or cbBTC.

Attribution is **outer strategy's source shares ÷ source total supply × adapter expected supplied assets in each market**. It is pro-rata pooled credit exposure. Identical market IDs are combined across all three sources. Small residual source cash and accounting/accrual effects remain separate; they are not allocated artificially to collateral.

| Collateral | LLTV | Attributable WETH | Outer weight | Stored utilisation | Accrued minimum HF | Borrow debt with HF ≤1.05 |
|---|---:|---:|---:|---:|---:|---:|
| wstETH | 96.5% | 343.415533 | 37.9631% | 84.09% | 1.000280 | 53.60% |
| wstETH | 94.5% | 317.010700 | 35.0441% | 83.49% | 1.001473 | 90.32% |
| weETH | 94.5% | 113.922779 | 12.5937% | 80.60% | 1.005220 | 93.97% |
| rETH | 94.5% | 82.788201 | 9.1519% | 89.99% | 3.639414 | 0.00% |
| cbBTC | 91.5% | 0.004223 | 0.0005% | 78.96% | 1.299423 | 0.00% |

Aggregate collateral exposure is **wstETH 73.0072%**, **weETH 12.5937%**, **rETH 9.1519%** and **cbBTC 0.00047%** of the outer vault. Idle cash is **5.2464%**. Market look-through covers essentially the entire invested book; approximately **0.00403 WETH** outside these market allocations remains in source cash/rounding/accrual differences.

### Concentration and shared failure modes

- The two wstETH markets differ in LLTV but use the **same oracle**, `0xbd60a6770b27e084e8617335dde769241b0e71d8`. Curator diversification does not diversify that collateral/oracle failure.
- ETH-related collateral can be economically correlated while still suffering different withdrawal, liquidity or contract problems. A lending wrapper does not remove collateral issuer risk.
- The rETH market's approximately 90% utilisation restricts idle lending liquidity despite much stronger borrower health. Credit safety and withdrawal capacity are different measurements.
- The tiny cbBTC allocation is a BTC/ETH collateral mismatch, but its current size is immaterial to the portfolio. Approved mandates could change future exposure.

## Borrower health and loss transmission

Morpho API supplied **candidate identities only**. Each candidate's position, each market's balances and each oracle price were reread onchain at the report block. Candidate pagination returned 205 of 205 positions; summed borrow shares match every funded market's total borrow shares. The resulting health calculations therefore do not assume that a sample of large borrowers represents the full book.

Interest was projected to the block timestamp using the market IRM's `borrowRateView`, Morpho's three-term Taylor compounding and rounded-up share conversion. Health factor is **oracle collateral value × LLTV ÷ accrued debt**. The minimum is not a forecast of liquidation, and the table's last column is the percentage of **market-wide borrow debt**, not the percentage of superWETH expected to be lost.

No oracle-liquidatable or unsecured position was found in this calculation. Morpho API's separately timed cross-check also returned zero current and realized bad-debt amounts for the five markets; these API states have different timestamps/blocks and are corroboration, **not pinned-block proof of no historical loss**. Previously crystallized losses would already affect current supply accounting and require event/history reconciliation to establish independently.

### Static collateral-price stress

The following uniform shocks reduce each oracle collateral value against WETH, with no borrower response, repayments or liquidations. These are **market-wide** amounts across the five markets, not losses attributable to this vault.

| Oracle collateral haircut | Borrow debt crossing liquidation line | Unsecured debt if nobody liquidates |
|---|---:|---:|
| 1% | 7,781.07 WETH | 0.00 WETH |
| 3% | 21,527.82 WETH | 0.00 WETH |
| 5% | 24,464.06 WETH | 59.14 WETH |

Crossing the liquidation line is **not bad debt**: liquidators can repay debt and seize collateral while a borrower is still overcollateralized. Conversely, zero modeled unsecured debt at a small shock does not establish safe liquidation execution. The 5% no-liquidation result excludes auction/DEX slippage, liquidator incentives, oracle lag and collateral-specific liquidity. No probability or expected-loss claim is attached.

## Withdrawals: cash, managed release and user claims

This is an **ERC-7540 asynchronous redemption** vault. The outer contract accepts `requestRedeem`, escrows shares, and relies on a manager to fulfil the request. Only then does the holder have a claimable WETH amount for `withdraw`/`redeem`. `maxWithdraw` reflects a user's **claimable amount**, not total strategy liquidity. Stored `convertToAssets` is accounting NAV, not an executable withdrawal promise.

| Layer | Measurement at the report block | Holder implication |
|---|---|---|
| Idle WETH at strategy | **47.458795 WETH / 5.2464%** | Warm cash, still behind manager fulfilment; not atomic holder redemption |
| Steakhouse source | Full **12.906161 WETH** share redemption succeeded in read-only simulation from the strategy | One demonstrated source release at the snapshot, before outer fulfilment |
| KPK source | Full redemption reverted with arithmetic panic `0x11` | This route/size failed; no inference of insolvency or permanent closure |
| Gauntlet source | Full redemption reverted (`0xace2a47e`); configured liquidity adapter was zero | Allocator/manager deallocation is needed or another configured path must be established |
| Outer escrow | **0.586347 WETH** reported escrowed assets | WETH cash at escrow; pending/claimable/controller obligations unresolved; not free strategy cash |

A key trap: **Morpho Vault V2 intentionally returns zero from `maxWithdraw` and `maxRedeem`** as a gross underestimate. All three sources returned zero, yet the Steakhouse redemption simulation succeeded. Zero getters must not be reported as a freeze. Conversely, a successful `convertToAssets` call does not establish a withdrawal route.

Observed strategy cash plus the successful Steakhouse release equals **60.364956 WETH / about 6.67%** before shared claims, fees and outer fulfilment. This is a demonstrated cash/source-release subtotal, **not a certified immediately withdrawable amount for a new depositor**. Unreserved user-callable outer liquidity remains unmeasured. The majority of the book requires manager/allocator work and underlying market liquidity; no settlement-time guarantee is inferred.

Stored market liquidity is approximately **4,508.50 WETH** in wstETH/96.5% LLTV, **1,575.96 WETH** in wstETH/94.5%, **1,024.02 WETH** in weETH, **28.85 WETH** in rETH and **6.18 WETH** in cbBTC. These are unique market-wide balances shared by all suppliers, **not amounts dedicated to this vault**. They are not summed across curators or substituted for an executable deallocation sequence. A dedicated same-block allocator simulation and queue/controller inventory are required to certify larger cash-outs.

There is no mandatory DEX slippage ladder here: managed redemption is the relevant path. A future report should add secondary liquidity only if a material holder exit actually uses it. The Pendle PT has its own trading and maturity risks and is outside this vault report.

## Control and execution risk

The current SuperVault and strategy use SuperGovernor `0xB5396ef2bF8CA360cEB4166b77AFb2bed20e74d4` and aggregator `0x10ac0b33e1c4501cf3ec1cb1ae51ebfdbd2d4698`. This report does not inherit the old protocol report's 7.0 rating or its May authority description.

| Observed role | Address / authority | Evidence and limit |
|---|---|---|
| Governor DEFAULT_ADMIN and SUPER_GOVERNOR roles | Safe `0x89226a5Fd572f380991Bb17c20c96ba91F98aD2e`, **2-of-4** | RoleGranted candidates rechecked with `hasRole`; threshold and all owners read onchain |
| Main strategy manager | `0xb3dcdaa89b0a43bcc59a9bdeeb5583ec2071066c`, **no runtime code** | EOA-form execution address; custody/key architecture not established |
| Secondary managers | **Four addresses** returned by aggregator | They are execution permissions, not four independent vetoes; full classification pending |
| Gauntlet owner / curator | **4-of-7 / 3-of-7 Safes**, same seven owner addresses | Correlated authority at the dominant source; distinct thresholds, not independent teams |
| KPK owner / curator | **5-of-8 / 2-of-5 Safes** | One curator owner is the owner Safe; effective control needs the full nested path |
| Steakhouse curator | **3-of-9 Safe** | Owner is a custom contract; its full authority/timelock chain remains unresolved |

A read-only probe of `grantRole(SUPER_GOVERNOR_ROLE, test_address)` **succeeded directly from the 2-of-4 root Safe** and reverted from an unrelated address. This establishes a direct role-grant path without a separate intervening timelock requirement on that call. No Safe modules were returned by complete one-page module enumeration. One secondary manager, `0xc11e18919c9b6a47e90ca5bcd91a8d8fcb08c235`, is also a root Safe owner, so these operational and root-governance permissions are not address-disjoint. Guard/policy configuration, organizational independence and all other change paths were not fully walked. Two owner approvals are the measured Safe threshold, not a universal claim about every effective exploit path.

The main manager can execute approved hooks and fulfil redemptions under source-defined validation. Its EOA-form address is an operational concentration, **not proof it can transfer arbitrarily to itself**: hook whitelists/Merkle proofs and other checks constrain execution, and their current full scope was not enumerated. Governor-, oracle-, guardian-, gas- and bank-manager roles also exist; several current operational holders have no runtime code. Public source contains timelocked parameter flows, but this does not make every privileged action delayed.

PPS was last updated **176 seconds** before the snapshot; maximum configured staleness was **86,400 seconds**, minimum update interval **3,600 seconds**, and strategy pause was **false**. No pending primary-manager replacement was returned. These are point observations, not evidence that a change monitor is running.

The public v2-periphery audit directory contains Cantina, GetRecon, 0xMacro and Octane reports dated 2025. This review did **not** establish a full audited-commit/compiler/deployed-bytecode match for the live clones, aggregator, governor, hooks and all Morpho adapters. Audits and current control observations must remain separate. Root powers, source-specific timelocks and oracle construction require further verification before assigning a numeric control score.

## Fees and return quality

The strategy currently reports **15% performance fee**, **0% management fee**, fee recipient `0x6fcc6a6a825fc14e6e56fd14978fc6b97acb5d15`. Stored PPS is **1.0151600981 WETH/share**. This share price is not an independently reconstructed realized investor return and says nothing about the current secondary-market price.

Underlying sources add a second fee layer: Gauntlet and KPK report zero performance/management rates at this snapshot; Steakhouse reports a **5% performance rate** and zero management fee. Those rates are WAD-scaled underlying contract fields, not basis points. Fees apply at their own layers and should not simply be added into a universal 20% charge.

Organic earnings come from WETH borrower interest and remaining cash deployment, while the outer vault's performance fee applies under its high-water-mark logic. Separately timed Morpho API supply APYs are point estimates, not a realized outer yield series. No verified reward APR or 7-/30-day fee-adjusted investor return was established. These fields are **unmeasured**, not zero. Do not replace them with a Pendle fixed APY.

## Coverage and review priorities

| Area | Review state |
|---|---|
| Identity, current strategy, funded source balances and fees | Measured at one pinned block |
| Funded market and shared collateral/oracle look-through | All three funded sources, five unique markets |
| Borrower position coverage | 205 positions; **100% borrow-share reconciliation** in each market |
| Borrower health | Accrued oracle-based calculation; executable collateral liquidation not measured |
| Root and key source authorities | Direct roles/Safe reads and role-grant probe; full role/guard/timelock paths incomplete |
| Withdrawals | Outer async mechanism, idle cash and three full-source simulations; complete allocator release and user-claim coverage incomplete |
| Realized returns and automated tracking | Not established; no schedule or alerts enabled |

Priority follow-ups are the dominant **Gauntlet release path**, KPK redemption failure, outer pending/claimable liabilities, current hook/oracle scopes, and root/curator timelock/independence analysis. Track the two wstETH markets as one shared collateral/oracle concentration rather than awarding diversification credit for curator names. Preserve the distinction between **close-to-liquidation debt** and **loss already reaching vault NAV**.

**Rating status:** no numeric overall until the unresolved control and withdrawal paths are sufficiently established. This does not label the vault safe or insolvent. The measured evidence supports a specific judgement: concentrated LST-backed lending with a functioning accounting/manager system, tight borrower margins in material markets, and meaningful operational withdrawal dependence.

## Sources and reproducibility

- [Vault contract](https://etherscan.io/address/0xa036823b9a24f63c32553367bf181ee04229c3ac), [strategy](https://etherscan.io/address/0x1199a6B2587Ed96446E76Dee3FB660bb8fCfd0b2), [snapshot block](https://etherscan.io/block/26280873).
- [SuperVault source](https://github.com/superform-xyz/v2-periphery/blob/main/src/SuperVault/SuperVault.sol), [strategy source](https://github.com/superform-xyz/v2-periphery/blob/main/src/SuperVault/SuperVaultStrategy.sol), [aggregator source](https://github.com/superform-xyz/v2-periphery/blob/main/src/SuperVault/SuperVaultAggregator.sol), [governor source](https://github.com/superform-xyz/v2-periphery/blob/main/src/SuperGovernor.sol).
- [Morpho Vault V2 source](https://github.com/morpho-org/vault-v2/blob/main/src/VaultV2.sol); [Morpho API](https://api.morpho.org/graphql) for candidate enumeration and separately timed cross-checks. Onchain reads are the measurement source for the pinned-block findings.
- [Published v2 audit directory](https://github.com/superform-xyz/v2-periphery/tree/main/audits). Public branch sources were inspected; exact deployment/audit correspondence remains a stated limitation.

Durable evidence is retained in the research repository under `data/reviews/superweth-2026-10-27/`: vault snapshot, source/adapter look-through, complete borrower reads, interest projection, controls, role probe and derivations. All simulations used read-only calls; no approvals or transactions were submitted.

[Download the aggregate market and collateral snapshot](/data/vaults/superweth/2026-10-27/risk.json). This is a dated research snapshot, not a live monitor.
