---
asset: "syrupUSDT"
slug: "syrupusdt"
aliases: ["syrupUSDT", "SYRUPUSDT", "Syrup USDT", "Maple Syrup USDT"]
chains: ["eth", "plasma"]
category: "vault-share"
underlying_assets: ["USDT"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
date: "2026-05-03"
last_verified: "2026-09-06"
last_revised: "2026-10-13"
featured: false
production: true
issuer: "Maple International Operations SPC"
market_cap_approx: 304360000
axis_frame: six
volatility_score: 8.5
backing_score: 6.0
structural_score: 4.5
redemption_score: 6.5
underlying_score: 4.0
liquidity_score: 6.0
issuer_score: 5.5
overall_score: 6.0
# Financial review: 2026-10-13; authority walk: 2026-09-06; assurance: 2026-10-03.
# Legacy redemption_score remains evidence for Liquidity & Exit, not a seventh displayed axis.
# PARKED: issuer recourse/principals/entity-financial-audit inputs need review; 5.5 carried from riskAnalyst [owner: riskAnalyst] [since: 2026-10-13]
---

# syrupUSDT — Risk Report

**Moderate risk · 6.0/10**

syrupUSDT is a USDT-denominated vault share in Maple’s institutional lending and supporting-strategy portfolio.

[Live backing and exit dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt)

## Summary

Depositing USDT buys a share whose net asset value (NAV) accrues yield. syrupUSDT is not a dollar-pegged stablecoin: credit losses, supporting-strategy losses or an underlying-token depeg can reduce its value. It shares governance, custody dependencies and some borrowers with [its sibling](/reports/syrupusdc/), while the pools have different delegate addresses.

Financial data and retained quote history were reviewed on **October 13, 2026**. Authority measurements remain **September 6** and contract assurance **October 3**; no new live role enumeration or timed redemption supports this review. The verified-through date reflects the oldest retained authority evidence.

Producer snapshot **2026-10-13T09:44:22Z**; collateral records dated **2026-10-13T09:44:20Z**. Financial figures are from the dated producer snapshot; live magnitudes can differ.

| Metric | October 13 snapshot | Basis |
|---|---:|---|
| Pool assets | $304.36M | Canonical totalAssets; not the sum of chain supplies |
| NAV | 1.147779 | Underlying token per share |
| Enumerated principal | $285.26M | All active positions, including pool-owned liquidity |
| Loan / liquidity records | 8 / 10 | Loan / pool-owned strategy classification |
| Loan-classified principal | $226.11M | Includes at-par loans; category is not collateral quality |
| Numeric collateral coverage | 62.07% / 78.30% | All-principal / loan-classified-principal denominators |
| Free liquidity | 6.27% | Cash plus accrued strategy interest; not all instantly spendable cash |
| Pool cash | $18,863,161.66 | Underlying held in canonical pool |
| Current discount to NAV | -9.18 bps | Market price vs contemporaneous NAV |
| Core APY | 5.27% | Maple GraphQL; separate 7-day NAV estimate 5.33% |
| Impaired / called / defaulted | 0 / 0 / 0 | Current producer flags; recognized losses $0 |

## 1 · Stability — 8.5

Yield accrues into the share price rather than being distributed through a rebase. Core APY was **5.27%** at the October 13 snapshot, principally from lending and supporting strategies; rates vary with the portfolio. Market discounts to NAV are distinct from a stablecoin depeg.

**Risks and limitations.** The snapshot reports zero impaired, called or defaulted positions and no recognized losses. These are current accounting observations, not independent proof of lifetime loss-free performance or adequate collateral on every loan. A default can write down NAV, and yield can fall or turn negative.

## 2 · Backing — 6.0

The deployed principal is fully enumerated, with listed rows reconciling to principalOut and **$0 residual**. Collateral valuation coverage is **62.07% / 78.30%**, measured as principal on rows with a finite numeric collateral USD value divided by all enumerated principal / loan-classified principal respectively. Only **7 of 18 records** have numeric valuations. A collateral record object alone does not establish valuation or independent custody assurance.

The $49.06M USDtb loan has no valuation; the seven priced crypto loans have no below-120% flag. Off-chain evidence and $0 delegate cover remain. Numeric presence is weaker than independently verified custody and recoverability. Closing principal enumeration or adding collateral record objects does not justify a higher score while valuation gaps and discretionary enforcement survive. Conversely, nulls and uncorroborated readings alone do not establish a loss or force an automatic cut. Persistent material evidence deterioration can still justify a lower score before loss recognition.

The $108.21M of unpriced principal consists of **$59.15M pool-owned liquidity plus a $49.06M USDtb loan**. USDtb is classified as a loan at 100% initial collateralization, not pool-owned liquidity. At-par exposure is therefore **37.93% of all principal**, while liquidity is only **20.74%**. At-par exposure includes this loan as well as the liquidity layer.

On loan-classified principal, BTC is **53.90%**, XRP **24.41%**, and USDtb **21.70%**. USDtb adds an issuer/reserve dependency; its name is not USDT. [Ethena's description](https://docs.ethena.fi/usdtb) identifies Treasury products and stablecoin reserves. The snapshot has no USD valuation for this position; no independent collateral or custody assurance is inferred from the label.

The pool-owned layer is **$50M USDC, $9.15M USDT and $15 of residual issuer positions**. USDC is **84.53% of the layer**. Address-level custody balances for these rows are not available in the snapshot. This is an evidence gap, not a zero-balance finding.

Loans are delegated underwriting with custodied collateral; OpenTermLoan principal is on-chain, but collateral valuation comes from Maple GraphQL. Margin calls and realization depend on operator action. Notice periods vary by loan: **1–60 days**, followed by the recorded 48-hour grace.

[Maple's September 2 mandate expansion](https://maple.finance/insights/allocation-strategies) includes securities-backed credit, securitization and basis trading, initially staged through syrupUSDT. A collateral token or loan wrapper does not identify strategy: the $49.06M USDtb position neither proves nor excludes basis-trade exposure. No strategy allocation is inferred from unknown loan metadata.

**Risks and limitations.** Collateral is held off-chain under delegate policy. The reported aggregate collateral ratio is 142.13%, but available row valuations and the reported aggregate ($297.78M / $405.44M) do not reconcile in scope or valuation convention. Neither is an independently verified solvency buffer. The 100% pool accounting-reconciliation ratio checks vault components against totalAssets; it does not verify off-chain collateral. Zero recognized losses does not resolve anomalous collateral readings. Both pools have **zero funded delegate cover**, so depositors bear losses without a funded delegate first-loss buffer.

## 3 · Liquidity & Exit — 6.0

Holders can sell through a DEX route or request primary redemption through an operator-processed queue. Secondary exits incur market execution costs; primary settlement depends on available liquidity and queue processing. This axis covers both legs and is constrained by the weaker one.

The latest Ethereum ladder is **2026-10-13T07:31:15Z**, selling into USDT. Cost uses **(fill_ratio − 1) × 10,000**. The rung notional is market-priced, so these figures are all-in **against market notional, not NAV**. A NAV discount is a separate cost; slippage_bps removes the smallest rung's spread and must not be substituted for holder cost.

| Notional | Latest all-in bps | History median bps | History IQR bps |
|---|---:|---:|---:|
| $150,000 | -11.42 | -11.64 | 17.78 |
| $250,000 | -11.82 | -12.04 | 17.78 |
| $500,000 | -12.82 | -13.04 | 17.77 |
| $1,000,000 | -14.81 | -15.03 | 17.77 |

Retained history: **95 distinct timestamps per rung**, 2026-10-01T13:09:32Z to 2026-10-13T07:31:15Z (**11.77 elapsed days**), deduplicated on measured_at, not tracker runs. These are successful quotes only: a quote is not a trade, and the missing failure denominator prevents an execution success-rate estimate. Execution variability and an unmeasured primary route limit the rating.

The queue is empty at the financial snapshot. That establishes current queue state, not request-to-fill latency. The withdrawal watch contains an old single watched wallet, not a current latency distribution. [Maple's current disclosure](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks) describes FIFO processing, liquidity-dependent delays and no guaranteed maximum period. The historical “under five minutes” claim is not independently verified; the integration guide's 30-day wording is not treated as an enforceable maximum.

The 721 hourly buckets over September 13–October 13 have median free liquidity **2.54%**, with a trailing seven-day median **4.30%**. This is an observation over the available window, not a permanent buffer. Accrued interest is included; spendable cash is narrower.

The $250K median exit cost is higher than syrupUSDC’s, with materially larger variability. Reconsider an upgrade after sustained improvement in that market-relative distribution and measured primary latency; reconsider a cut on persistent quote deterioration, widening NAV discount, unavailable routes or prolonged actual redemption.

## 4 · Dependencies — 4.0

The pool depends on its underlying stablecoin issuer, Maple’s underwriting and reporting, collateral custodians, supporting-strategy issuers and the venues used to exit. Borrower addresses identify on-chain exposure, without independently identifying firms or proving that firms are unrelated.

| Concentration | All enumerated principal | Loan-classified principal |
|---|---:|---:|
| Denominator | $285.26M | $226.11M |
| Borrower addresses | 9 | 6 |
| Top-1 | 32.33% | 40.79% |
| Top-3 | 69.21% | 86.89% |
| Top-5 | 91.66% | 98.83% |
| HHI | 2075 | 2804 |

Addresses are not independently identified firms; operator/accounting addresses are included where positions use them. The [USDT dependency](/reports/usdt/) carries a 4.0 Dependencies score, setting a ceiling for a pool that adds counterparties to that underlying exposure. Loan-classified top-1/top-3 are 40.79%/86.89%; the at-par USDtb loan adds a distinct issuer/reserve dependency. The enumerated Circle position and measurable pool legs support the ceiling, not an upgrade above it. Borrower concentration contributes to Dependencies; collateral evidence quality contributes to Backing.

Family concentration is independently recomputed from both complete loan exports: **top-1 15.16%, top-3 40.70%, top-5 55.86%, HHI 871 on $1,318.97M all-enumerated principal**; **16.99%, 45.61%, 62.61%, HHI 1,044 on $1,176.82M loan-classified principal**.

The shared XRP borrower **0x8669f3189ea2318d28c7183a971d65e0c352f1e9** has $151.80M across both pools: **11.51% of all-enumerated family principal / 12.90% of loan-classified family principal**. It accounts for the entire XRP bucket, and is the **third-largest family borrower**. A combined allocation retains this correlated counterparty/collateral exposure and shared governance/custody risk.

## 5 · Contract & Admin — 4.5

The canonical pools share MapleGlobals, the governor, securityAdmin and the permission Safe. Their Pool Delegate EOAs differ. Holding both pools therefore separates delegate keys but retains common governance and securityAdmin exposure. The snapshot reports both pools active and unpaused, with **zero delegate cover and minCoverAmount = 0**. Depositors have no funded delegate first-loss buffer.

The **September 6 authority walk** remains the source for role reach, thresholds and delays: two governor-role EOAs can schedule/execute role changes after three days; securityAdmin has a three-signature undelayed manager-upgrade route, bounded to governor-registered implementations; the delegate's manager-upgrade path waits seven days, while its withdrawal-manager route can bypass that wait. The October 13 review compares the named governor/securityAdmin/delegate addresses with the current producer snapshot; it does not re-enumerate Safe membership or re-walk bridge authorities. The authority evidence covers canonical Ethereum pools; destination-chain authorities were not re-walked.

Reusable V2 code reviews, withdrawal/timelock reviews and Syrup entry-path reviews have distinct scopes. The October 3 security brief establishes strong source-file matches to the December 2024 review, not a complete audited-build-to-live-bytecode proof. The recorded Maple bounty maximum is $500,000, with privileged-key/centralization exclusions; it is not a dedicated full-pool coverage guarantee. Code assurance does not offset the authority path. syrupUSDT-specific instance coverage remains unestablished.

**Documentation and coverage.** Maple’s [risk disclosures](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks) agree that upgrades require authorized actors and approved versions. They do not specify the complete live holder set, thresholds or each bypass delay; those particulars rely on the dated authority walk. An EOA proves the absence of an on-chain quorum, while private key custody arrangements remain unverified. Code assurance does not establish that the live privileged-role topology was audited.

## 6 · Issuer — 5.5

The named issuer is **Maple International Operations SPC**, acting for **Maple USDT Segregated Portfolio 1**; Syrup Ltd operates the interface. The issuer vehicle is a segregated portfolio company. Entity identification and portfolio structure are established in Maple’s [issuer disclosure](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks). Lender recourse is limited to the relevant portfolio’s assets. Cross-portfolio ring-fencing does not diversify shared operational exposure.

The entity assessment considers underwriting and custody discretion and Maple’s v1 credit-loss history. The current snapshot establishes no recognized loss now; independent lifetime Syrup loss history is not verified. The **5.5** issuer score is carried from the October 13 research assessment, rather than independently re-derived here.

**Risks and limitations.** Governing law and the dispute mechanism were not verified in this review. Current accountable principals and entity financial-audit coverage were not independently checked. Naming the issuer does not establish those inputs or guarantee recovery.

## Cross-chain exposure

[Maple's September 28 announcement](https://maple.finance/insights/syrupusd-assets-are-upgrading-to-chainlink-ccip-2-0) starts a staged CCIP 2.0 rollout on September 29. Token addresses stay fixed while bridge pools change. The article describes native non-Ethereum mint/redeem as future functionality. The receiver integration guide also documents cross-chain messages settled on Ethereum; that is not proof of locally settled redemption on every chain. No score credit is added for an announced future exit route.

Use the [current per-asset registry](https://docs.maple.finance/integrate/crosschain/syrupusd-crosschain.md) to locate deployments. Its wider network menu is not evidence of material supply on every network, and a family announcement alone does not establish a per-asset deployment. Old pool addresses and authority walks need reconciliation as migration reaches each chain. The measured exit ladder is **Ethereum-only**: it establishes no executable exit on Monad, Plasma or Solana.

The supply panel sums Ethereum $304.36M and Plasma $57.92M to $362.28M (119.03% of canonical assets). Ethereum canonical supply already includes locked bridged shares, so this is double-counting, not excess issuance evidence. Use $304.36M canonical totalAssets. Plasma token-pool versions and addresses require reconciliation during CCIP migration; no new lock-balance proof was taken in this refresh.

## Score interpretation and monitoring

The overall score is **6.0**. The six displayed axes average **5.75**, so overall sits **+0.25 above its own axis mean**. The source assessment retains its legacy seven-field convention, including Redemption (6.5), whose mean is **5.8571**; rounding that mean to the nearest half-point gives the overall score. Redemption is evidence for Liquidity & Exit rather than a seventh displayed axis. The aggregation convention is due for review by November 1 or when an axis changes.

Watch for recognized impairment or default, corroborated collateral shortfalls, unresolved valuation gaps, strategy or authority changes, widening NAV discounts and sustained exit deterioration. Match pool-owned strategy positions to custody balances at one block before treating an unmatched balance as a loss. An empty queue does not establish redemption latency.

## Revision history

- **2026-10-13:** Refreshed financial snapshots, collateral valuation coverage, allocations, concentration and retained exit history from the October 13 research review. Removed the 100%-priced claim, unsupported universal default lag and stale six-times exit comparison. Updated issuer identity and scoped evidence dates. Overall and all axis scores unchanged; syrupUSDC’s liquidity upgrade remains conditional on duration and measured primary redemption latency.
