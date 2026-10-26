---
protocol: "f(x) Protocol"
slug: "fx-protocol"
aliases: ["f(x) Protocol", "fx Protocol", "fxProtocol", "Aladdin f(x)", "FX Protocol"]
chains: ["eth"]
category: "protocol"
protocol_category: "stablecoin-cdp"
assessment_type: "full"
date: "2026-10-26"
last_verified: "2026-10-26"
featured: false
production: false
contract_score: 5.5
economic_score: 4.5
project_score: 5.5
overall_score: 5.0
score_weights:
  contract: 0.5
  economic: 0.3
  project: 0.2
tvl_gross: 122516293
audited: true
audit_firms: ["OpenZeppelin", "SECBIT", "Trail of Bits"]
bug_bounty: true
bug_bounty_amount: 500000
team_doxxed: false
incident_history: true
is_fork: false
live_since: "2023-08"
# Source: riskAnalyst/reports/fx-protocol.md, local October 26 reviewed draft.
# Evidence: data/reviews/fx-protocol-2026-10-26/ and fxsave-48h-2026-10-26/.
# Protocol scores do not replace fxUSD or fxSAVE asset-axis judgments.
---

# f(x) Protocol — Risk Report

**Moderate risk · 5.0/10**

Crypto-backed dollar issuance and leveraged positions · Ethereum core assessment · October 26, 2026

## Summary

f(x) combines leveraged WBTC/wstETH positions, the fxUSD stablecoin and the fxSP stability pool. fxSAVE wraps a staked claim on fxSP and compounds rewards. The system's safety depends on collateral coverage, timely liquidation and rebalancing, price feeds and the liquidity available when holders exit.

The October 26 snapshot showed **$119.83m of oracle-valued collateral against $89.10m of long-pool debt**, or **134.49% coverage**, with **89.09% of debt in WBTC**. fxSAVE custody accounting reconciled and funded-holder simulations succeeded. Those observations support functioning claims; they do not establish that every claim can exit immediately for independent dollars.

The immediate liquidity layer is strained. Peg-support swaps consumed fxSP's remaining USDC, leaving **zero USDC inventory** and an **all-fxUSD redemption basket** at the snapshot. Separately, the 91.5%-LLTV fxSAVE/USDC Morpho market reached **100% utilization**, with no lendable USDC and about **12.83% borrow APY** in a nearby API read. These conditions can hurt leveraged holders without establishing a collateral shortfall or exploit.

Overall is **5.0/10**, with medium confidence. The scope is Ethereum v2/v2.1 core, fxSP and fxSAVE; legacy v1, other chains and complete router/strategy authority were not independently reassessed. The separate [fxUSD report](/reports/fxusd/) was reviewed October 24; the [fxSAVE report](/reports/fxsave/) retains its October 21 partial refresh. Their asset scores are unchanged.

## 1 · Smart Contract — 5.5

The protocol uses upgradeable core contracts, a stability pool, price oracles and external execution infrastructure. fxSAVE adds a wrapper, custody vault and gauge. Its ERC-4626 interface exposes a claim on fxSP, rather than a directly held stablecoin reserve.

### Controls and authority

Named roles, Safe thresholds, proxy slots and read-only simulations were refreshed at Ethereum block **26,274,924**, October 26 at **05:58:47 UTC**. This was a named-path review, not a complete new role-event replay.

| Path | Current Ethereum control |
|---|---|
| Core proxy upgrades | Shared ProxyAdmin owned by a **72-hour timelock**; reducing its delay must itself wait |
| Governance and proposer | [Safe A](https://etherscan.io/address/0x26b2ec4e02ebe2f54583af25b647b1d619e67bbf), **6-of-9**, also holding operational roles |
| Pool oracle-pointer replacement | [Safe C](https://etherscan.io/address/0x28c921adac4c1072658eb01a28da06b5f651ef62), **3-of-4**, with immediate `updatePriceOracle(address)` authority on long pools |
| fxSAVE fee/reward/treasury and claim-role administration | [Safe B](https://etherscan.io/address/0xa0fb1b11cca5871fb0225b64308e249b97804e99), **6-of-9**, immediate bounded wrapper powers |
| Collateral-oracle owner functions | Timelock-owned; pending owners zero |

A and B share the same nine owners; C's four owners are drawn from that set. Distinct addresses do not establish independent people or custody. The core upgrade path runs through [ProxyAdmin](https://etherscan.io/address/0x9b54b7703551d9d0ced177a78367560a8b2edda4) and [TimelockController](https://etherscan.io/address/0x68863fb8855b04509a835082478d6e3d0be4e61a). Oracle-owner transfers and removal of the deployer EOA's long-pool emergency role are confirmed improvements, but do not close immediate oracle-pointer replacement.

The authorized emergency Safe's dummy-address oracle update simulation succeeded while a negative control reverted. No interface validation protected that setter. Safe B's claim path is bounded to assets in the redemption cooldown, rather than arbitrary gauge principal, but redirected unlocked proceeds still matter to a holder using that route. Strategy-management powers add destination and withdrawal-liquidity dependencies. The Safe-owned operations router's complete facet reach remains unreviewed.

### Audit coverage and deployed versions

| Review | Established coverage | Limit |
|---|---|---|
| [OpenZeppelin v2, March–May 2025](https://blog.openzeppelin.com/fx-v2-audit) | Core, pools, oracles, asset management and SavingFxUSD; Critical and both High findings currently labelled resolved | Earlier generation; excluded router facets and several integrations |
| [SECBIT fxSAVE/USDC strategy, March 2025](https://github.com/AladdinDAO/aladdin-v3-contracts/blob/main/audit-reports/SECBIT_f(x)_fxSAVE_And_StabilityPoolUSDCStrategy_Report_v1.1_20250317.pdf) | Wrapper, reward/custody modules and Aave USDC strategy | Specific component scope |
| [SECBIT v2.1, August 2025 revision](https://github.com/AladdinDAO/audit-reports/blob/main/SECBIT_FX_V2.1_Report_v1.2_20250813.pdf) | Long/short pools, PoolManager, configuration, PegKeeper, oracles and periphery; lock addendum | Exact equality with current deployments remains unestablished |
| [SECBIT Limit Order/fxMINT, November 2025 revision](https://github.com/AladdinDAO/audit-reports/blob/main/SECBIT_FX_LimitOrder_fxMint_Report_v1.1_20251128.pdf) | Explicit later stability-pool and core modifications | Incremental coverage, not a full current-code guarantee |

Later Ethereum architecture did receive review. The remaining concern is complete source/fix-to-runtime binding, rather than an absence of later audits. The retained fxSAVE source matches its OZ-reviewed file after whitespace normalization; several later named commits were unavailable in the tested public repository. Finding resolution in a report does not prove every deployed remediation. The [Katana review](https://github.com/AladdinDAO/aladdin-v3-contracts/blob/main/audit-reports/SECBIT_f(x)_2.0_Katana_Report_v1.1_2026_03_09.pdf) is chain-specific, and earlier Trail of Bits/SECBIT work is historical coverage.

The [AladdinDAO bounty](https://docs.aladdin.club/security-bounty) advertises up to $500,000 for Critical findings. Funding and eligibility of every current deployment were not verified; it is not insurance.

**Risks and limitations.** Immediate oracle changes, shared keys and external strategies remain material. Full router/facet authority, Safe guard/fallback execution and external Aave/Convex/Curve/Chainlink governance are outside this refresh. Exact later build binding remains incomplete.

## 2 · Economic — 4.5

Borrower equity provides an initial cushion against collateral declines. Rebalancing and liquidation reduce stressed exposure, but depend on callers, settlement assets and execution prices. fxSP holds fxUSD claims on this same collateral system; counting them again as independent dollar reserves would double-count protection. It is not a guaranteed junior insurance tranche that must absorb every loss before external fxUSD holders.

### Coverage and concentration

| At block 26,274,924 | WBTC pool | wstETH pool | Combined |
|---|---:|---:|---:|
| Debt | $79.379m | $9.717m | **$89.097m** |
| Debt share | **89.09%** | 10.91% | 100% |
| Oracle-valued collateral | $104.170m | $15.658m | **$119.828m** |
| Collateral/debt | **131.23%** | **161.14%** | **134.49%** |

Token supply was 89.096608m fxUSD, reconciling with pool debt within approximately 73.71 fxUSD. Raw collateral in the wstETH pool is stETH-equivalent; applying the wrapping rate again would overstate coverage. Small outstanding short-pool credit notes add settlement dependencies, and a short-side settlement path can reduce long-pool collateral.

A frozen-balance sensitivity illustrates concentration: a 25% BTC decline with ETH unchanged takes WBTC coverage to about 98.4% while aggregate coverage remains about 105.3%. This excludes liquidation, rebalancing, gaps, costs and all protocol responses. It is neither a forecast nor a safe-drawdown allowance; position/tick thresholds are different from aggregate ratios.

### Peg support and the changing payout basket

At the pinned block, fxSP held **78.693m fxUSD**, 88.32% of supply, and **zero recorded or directly held USDC**. The final depletion was traced to two peg-support swaps at [10:08 Taiwan time](https://etherscan.io/tx/0x1f68575a4320938cce9bcbd383c48e97045ff577ef800a999d8ff03cd0aafc9b) and [10:11](https://etherscan.io/tx/0xbec970628b5eec377dca67053d78a58ebc0f36f0d5e7641d04b46a7f6eb00e0c). USDC was exchanged for fxUSD; this is evidence of peg-defence activity, not missing assets or a pure depositor withdrawal.

The redemption interface still has **fxUSD and USDC output legs**, but the USDC leg was zero and the current basket entirely fxUSD. Funded-holder read-only simulations at **05:46:59 UTC** succeeded and custody accounting reconciled. fxSAVE→fxSP→basket remains a functioning token exit, subject to a **one-hour fxSP queue** or an ordinary **1% instant fee** on each output leg. It does not establish an immediate dollar exit.

Direct fxUSD redemption into collateral remained **gated**, with `isRedeemAllowed()` false and the fxUSD oracle mark at **$0.998930**. Source opens that route when the EMA is strictly below $0.998, with a configured 0.5% fee and other execution conditions. Neither $1 nor $0.995 is an unconditional executable floor.

Concentration-linked long-pool funding was about **4.49% annualized** even though the separate depeg-funding flag was false. This is applied to long collateral accounting; it is neither the Morpho borrow rate nor a guaranteed fxSAVE depositor yield. The checked ReservePool had modest token balances and no USDC, rather than unlimited principal insurance.

### Dollar exits and external leverage

The main Curve pool held about **2.777m USDC and 6.414m fxUSD**. That is AMM inventory, not protocol cash or sellable size at par. A dated October 26 basket-route sample crossed an additional 50 bps cost between **$2m and $3m**, and 200 bps between **$3m and $3.25m**. Those are coarse incremental costs relative to the smallest rung, with the instant fee already included—not total NAV haircuts or atomic quotes against the later snapshot. Direct fxSAVE exits were thinner in that sample.

In the **91.5%-LLTV fxSAVE/USDC Morpho market**, two-day supply fell **$27.55m→$16.75m** while debt rose **$16.52m→$16.75m**, with about **$10.80m net lender outflows**. Utilization reached **100%**, available loan assets zero and nearby API borrow APY **12.83%** at **05:44:47 UTC**. The API reported zero bad debt. RockawayX's broader vault retained some liquidity and must not be conflated with this empty market.

Lenders need repayments or new supply to withdraw. Borrowers can still repay and release eligible collateral, but refinancing is constrained. Higher funding can motivate collateral sales; the measured window did not establish broad borrower deleveraging or a causal link between lender exits and fxUSD sellers.

fxSAVE NAV combines fxSP units per share with fxSP dollar NAV. A measured earlier 25-hour window showed units rising about 0.0133% while underlying NAV fell 0.0730%, producing roughly **−0.0597%** overall. A positive token accrual rate therefore need not mean a positive dollar return. The later direct NAV was **$1.124859**, not a fixed dollar promise.

**Risks and limitations.** Coverage is an oracle/accounting measure, not stress liquidation proceeds. The system can retain collateral above debt while fxUSD trades below par and leveraged fxSAVE equity loses money. Different simulation, API, quote and NAV clocks are not a synchronized whole-position exit. Position concentration, keeper execution capacity and full bad-debt reconciliation remain open.

## 3 · Project — 5.5

AladdinDAO has operated f(x) since 2023, alongside Concentrator and CLever, with public development, security reviews and measurable fees. October 26 reported Ethereum TVL was **$122.52m**, excluding separately reported Pool2. Its adapter includes legacy and strategy holdings: TVL, core collateral and fxSP holdings must not be added as separate capital buffers.

| Complete window through October 25 | Fees | Change versus preceding equal window | Reported revenue |
|---|---:|---:|---:|
| 7 days | $111,869 | −26.0% | $46,804 |
| 30 days | $696,033 | +6.3% | $208,241 |
| 90 days | $1,714,444 | +47.9% | $495,496 |

The [DefiLlama fee adapter](https://github.com/DefiLlama/dimension-adapters/blob/master/fees/fx-protocol.ts) mixes v1/v2 snapshots, while revenue reads a particular wstETH distribution. These are activity indicators, not audited operating profit, fxSAVE-only income or a complete allocation waterfall. Treasury resources, expenses, runway and incentive-adjusted retention remain unverified. FXN rewards can attract deposits while introducing token-price and incentive-retention risk.

Operational history includes a January 2025 production-accounting patch reviewed by SECBIT, and the team's [February keeper/RPC failure account](https://medium.com/@protocol_fx_667/reflections-on-the-february-2nd-liquidation-event-139002d132b8) reporting 95 xPOSITION liquidations. Its claims that fxUSD and stability-pool depositors were protected are issuer-reported; present keeper independence and uptime were not verified. [ChainSecurity's June disclosure](https://www.chainsecurity.com/blog/f-x-protocol-circumventing-access-control-with-a-double-flash-loan-attack) describes an April live router vulnerability, responsibly disclosed and fixed, with no established realized theft. It was not a commissioned audit.

**Risks and limitations.** Operating history and responsive fixes support continuity, but shared key control and keeper dependence remain. A reimbursement promise, controlling operators' independence and enforceable holder recourse were not established. Higher quoted rewards or TVL growth do not independently resolve exhausted dollar liquidity.

## Exposure and monitoring

| Exposure | Additional holder risks |
|---|---|
| fxUSD | Collateral/settlement gaps, price feeds, authority and near-peg market exits |
| Unleveraged fxSAVE | fxSP basket changes, wrapper/custody/reward controls, delay and redemption costs |
| Leveraged fxSAVE | Borrow interest, liquidation and unwind execution; NAV changes amplified on equity |

| Protocol axis | Score | Weight |
|---|---:|---:|
| Smart Contract | 5.5 | 50% |
| Economic | 4.5 | 30% |
| Project | 5.5 | 20% |
| **Overall** | **5.0** | Weighted result 5.2, rounded to a half-point |

Scores are comparative judgements, not loss probabilities. Asset-axis scores do not change automatically with this protocol review.

Priority checks are later audit/build binding, stressed position/tick settlement capacity, keeper/RPC resilience, complete router/strategy authority, reconciled revenue and incentives, and synchronized basket-to-dollar exits. Proposed review triggers include persistent zero USDC inventory, worsening fixed-size quotes, WBTC coverage approaching 120%, settlement failures, sustained Morpho funding stress and authority changes. **120% is an analyst review level, not a liquidation threshold. These proposals are not newly installed alerts.**

## Revision history

*2026-10-26 — First staged protocol page from the reviewed local assessment. Contract 5.5, Economic 4.5, Project 5.5; weighted Overall 5.0. Records USDC depletion through peg-support swaps, current all-fxUSD basket, Morpho funding stress and broader later audit coverage. The two-output interface is unchanged; the USDC leg is measured at zero. Separate asset reports and scores remain unchanged. No production promotion or alert installation.*
