---
asset: "syrupUSDT"
slug: "syrupusdt-full"
aliases: ["syrupUSDT", "SYRUPUSDT", "Syrup USDT", "Maple Syrup USDT"]
chains: ["eth"]
category: "lending-vault"
assessment_type: "full"
audience: "institutional"
companion_report: "syrupusdt"
date: "2026-05-03"
last_verified: "2026-05-03"
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 436000000
tvl_gross: 436000000
legal_jurisdiction: "Cayman Islands"
live_since: "2024-08"
bankruptcy_remote: false
yield_bearing: true
underlying_assets: ["USDT"]
underlying_managers:
  - "Maple Labs (protocol operator)"
  - "Pool Delegate (operator EOA 0x93aA...501A — same firm as syrupUSDC, different operational key)"

contract_score: 7.0
credit_score: 5.0
liquidity_score: 5.0
operational_score: 6.0
supply_integrity_score: 6.5
overall_score: 5.75
score_weights:
  contract: 0.25
  credit: 0.35
  liquidity: 0.20
  operational: 0.20

multisig_configs:
  governor: "OZ-style Timelock, 24h MIN_DELAY (0x2eFFf887...426b — same as syrupUSDC)"
  operationalAdmin: "Safe v1.3.0, 3-of-5 (same as syrupUSDC)"
  securityAdmin: "Safe v1.3.0, 3-of-6 (same as syrupUSDC)"
  poolDelegate: "EOA, single-key (0x93aA06F8...501A — distinct from syrupUSDC's 0xC1e1...49f)"

audited: true
audit_count: 8
audit_firms: ["Spearbit", "Trail of Bits", "Three Sigma", "Peckshield"]
bug_bounty: true
bug_bounty_amount: 1000000
bug_bounty_platform: "Immunefi"
team_doxxed: true
incident_history: true
is_fork: false

supply_integrity_flags:
  - "pool-delegate-credit-discretion"
  - "lending-vault-rehypothecation"
  - "withdrawal-queue-pool-depth-bound"
  - "no-bankruptcy-remoteness"
  - "permissioned-pool-delegate-role"
  - "pool-delegate-eoa-not-multisig"
  - "zero-pool-delegate-first-loss-cover"
  - "v1-bad-debt-history-2022"
  - "borrower-identity-non-public"
  - "single-loan-pool-concentration-41pct"
  - "cross-pool-borrower-overlap-with-syrupusdc"
---

# syrupUSDT — Risk Assessment Report

**Companion to [syrupUSDC institutional report](/reports/syrupusdc-full/).** Most of the contract architecture, audit profile, governance topology, and Pool Delegate model is shared between the two pools; this report focuses on what's pool-specific to syrupUSDT and on the cross-pool concentration that emerges only when both pools are considered together.

| | |
|---|---|
| **Asset** | syrupUSDT (Maple Finance Syrup product line — USDT pool) |
| **Issuer** | Maple Labs (Cayman Islands) — same legal entity as syrupUSDC |
| **Launch** | August 2024 |
| **Jurisdiction** | Cayman Islands; no bankruptcy remoteness for token holders |
| **Underlying exposure** | Mixed institutional loans (~90% crypto-overcollateralized + ~10% at-par stablecoin/RWA), USDT-denominated |
| **Type** | Yield-bearing ERC-4626 lending vault share |
| **Primary access** | Permissionless deposit/redeem; no KYC at the vault layer |
| **Total assets (2026-05-03)** | ~$436M USDT |
| **Active loans (2026-05-03)** | 12 (loan principal $421.9M) |
| **NAV** | ~$1.13 USDT per syrupUSDT |
| **Sibling pool** | syrupUSDC — ~$1.22B assets / 28 active loans / shared Pool Delegate firm |

> *Overall score (5.75) is composite over Contract / Credit / Liquidity / Operational. Weighted ~10pp lower than syrupUSDC's 6.2 — the gap is primarily per-pool concentration (largest single loan = 41% of pool) and shallower exit liquidity at proportional sizing.*

---

## Protocol Summary

syrupUSDT is the USDT-denominated sibling of syrupUSDC. **Same Maple Labs entity, same MapleGlobals governance contract, same Pool Delegate firm, same audit corpus, same v2 contract codebase.** The only structurally distinct elements are (a) the underlying asset (USDT vs USDC), (b) a different Pool Delegate operational EOA (`0x93aA06F8...501A` vs `0xC1e1...49f`), and (c) a different active loan book.

For the **contract architecture, governance topology, audit profile, supply integrity (CCIP+CCT bridge surface), and v1 bad-debt history,** see the [syrupUSDC institutional report §I, §I.5, §IV](/reports/syrupusdc-full/) — those sections apply equally to both pools.

This report focuses on **what's distinct about syrupUSDT:**

1. Smaller pool at higher per-pool concentration
2. More BTC-dominant Set A composition
3. Smaller proportional Set B (at-par) fraction
4. **Cross-pool borrower overlap with syrupUSDC** — the structural risk axis specific to combined Syrup-family allocations

---

## I. Pool-specific addresses (verified 2026-05-03)

```
Pool (4626):           0x356B8d89c1e1239Cbbb9dE4815c39A1474d5BA7D
PoolManager:           0x0cdA32E08B48bFDDbc7eE96B44b09cf286F9E21a
WithdrawalManager:     <fetch via PoolManager.withdrawalManager()>
Strategy 0 (LM):       0x616022E54324eF9c13B99c229Dac8ea69AF4FAFf  ← OpenTermLoanManager, 100% of pool TVL
Strategy 1 (idle):     <unused — presumably FixedTerm>
Strategy 2 (Aave):     <dormant — MapleAaveStrategy wrapper for USDT>
Strategy 3 (Sky):      <dormant — MapleSkyStrategy wrapper>
PoolDelegate (EOA):    0x93aA06F8a7bB4da3Eb0DD5A5a38C01A7EB35501A
PoolDelegateCover:     0x610d99d86d48b385b2ed17a0063e53B5c98E15A1  (balance: $0)
Underlying USDT:       0xdAC17F958D2ee523a2206206994597C13D831ec7  (Tether)
```

Shared with syrupUSDC (Maple-protocol-level): MapleGlobals, Governor (24h timelock), Operational Admin Safe (3-of-5), Security Admin Safe (3-of-6), OpenTermLoanFactory.

---

## II. Credit & Counterparty — 5.0/10 (lower than syrupUSDC's 5.5)

### Loan-book composition (verified GraphQL 2026-05-03)

| Asset | Loans | Principal | % of pool | Init level | Set |
|---|---|---|---|---|---|
| BTC | 5 | $317.0M | 75.1% | 125–138% | A |
| XRP | 1 | $62.1M | 14.7% | 150% | A |
| PYUSD | 1 | $29.5M | 7.0% | **100% at par** | B |
| USDC | 1 | $10.0M | 2.4% | **100% at par** | B |
| USDT | 4 | $3.2M | 0.8% | **100% at par** | B |

Set A (crypto-overcollateralized): 6 loans / $379.1M / **89.8% of pool**
Set B (at-par stablecoin/RWA): 6 loans / $42.7M / **10.2% of pool**

### Per-pool concentration is the binding risk vs syrupUSDC

| Metric | syrupUSDC | **syrupUSDT** |
|---|---|---|
| Active loans | 28 | **12** |
| Unique borrowers | 13 | **4** |
| Largest single loan | $200M / 16% of pool | **$175M / 41% of pool** |
| Top-3 loans share of pool | ~36% | **~74%** |
| Set A:Set B split | 75:25 | 90:10 |

**The largest single loan in syrupUSDT is 41% of the pool.** A single-borrower default writes down ~40% of pool principal in one event. This is materially worse than syrupUSDC's per-pool concentration, where the same metric is 16%. **Per-pool concentration is the binding credit risk axis specific to syrupUSDT.**

### Borrower set (4 unique borrowers — small)

```
0xb99a2c...bcf5    1 loan  $175.0M    BTC, 125% init, 4.00% rate     ← largest single position
0x0767bf...e3d4    1 loan   $75.0M    BTC, 133% init
0x8669f3...f1e9    1 loan   $62.1M    XRP, 150% init                  ← cross-pool with syrupUSDC
0x1fcc47ee...      1 loan   $29.5M    PYUSD, 100% init at par         ← cross-pool with syrupUSDC
0xb62446...d505    2 loans  $62.0M    BTC, 125% init                  ← cross-pool with syrupUSDC
0x2570fa...c8a0    6 loans  $13.2M    USDC + USDT at par              ← cross-pool with syrupUSDC
0x6c806a...93ac    1 loan    $5.0M    BTC, 138% init
```

(Total $421.9M principal across 12 loans / 7 distinct addresses; the larger 4 borrowers carry the majority. Some borrowers have multiple at-par loans grouped under one borrower.)

### Cross-pool concentration with syrupUSDC — the structural feature specific to combined family allocations

**This is the most consequential risk axis for an allocator considering both pools.** All four major syrupUSDT borrowers also have positions in syrupUSDC (verified 2026-05-03):

| Borrower | syrupUSDT exposure | syrupUSDC exposure | Combined | % of family |
|---|---|---|---|---|
| `0x8669f3...f1e9` | $62.1M (XRP) | $181.9M (XRP + BTC) | **$244.0M** | **15.1%** |
| `0xb62446...d505` | $62.0M (BTC) | $67.6M (BTC) | **$129.6M** | **8.0%** |
| `0x1fcc47ee...` | $29.5M (PYUSD) | $267.7M (PYUSD + USTB) | **$297.2M** | **18.4%** |
| `0x2570fa...c8a0` | $12.2M (USDC + USDT at-par) | $36.5M (USDC at-par) | $48.7M | 3.0% |

**Combined family principal: $1,614.3M. Top three cross-pool borrowers = ~42% of family book.** A credit event at any of these entities damages BOTH pools simultaneously. **Holding syrupUSDT alongside syrupUSDC does NOT diversify** at the borrower level for these positions — it concentrates them. The single-largest cross-pool borrower (`0x1fcc47ee...`) carries 18.4% of family exposure, materially above standard institutional credit framework limits (10%).

For combined-allocation sizing, **compute per-borrower exposure across both pools rather than treating them as independent products.** A typical allocator framework with single-counterparty limits at 10% of book would need to either reduce exposure to syrupUSDT-and-syrupUSDC together or accept single-counterparty exposure that exceeds those limits.

### Set B is materially Maple-affiliated (same pattern as syrupUSDC)

Maple's GraphQL classifies syrupUSDT's at-par loans with `loanMeta.type` = `"amm"` (the multi-loan USDC/USDT borrower) or `"strategy"` (the PYUSD position). Per the analysis on the syrupUSDC side, these are likely Maple-affiliated liquidity facilities or market-maker funding rather than third-party institutional credit. The PYUSD borrower in syrupUSDT (`0x1fcc47ee...`, $29.5M) is the same entity as the $152.7M PYUSD position in syrupUSDC — same trust assumption.

### Loss waterfall

Same as syrupUSDC: depositors are first-loss; Maple's `Globals.minCoverAmount[PoolManager] = 0` for syrupUSDT, and the PoolDelegateCover contract (`0x610d99d8...15A1`) holds zero USDT. Borrower default → off-chain custodian liquidates collateral → liquidation proceeds applied to principal+interest → any shortfall hits `unrealizedLosses` → reduces NAV pro-rata for syrupUSDT holders. **No on-chain first-loss cover absorbs losses before depositors.**

### Yield mechanics

Same architecture as syrupUSDC: borrower interest, net of Maple's protocol fee + 3.33% delegate fee. Live `coreApy` from Maple's `syrupGlobals.apyTimeSeries` runs ~4.5-5%; `boostApy = 0` since Drips ended Feb 18, 2026. The Drips/Seasons program ENDED for both pools on the same date.

**Credit Risk Score: 5.0/10** — Lower than syrupUSDC's 5.5 primarily due to (a) materially higher per-pool concentration (largest single loan 41% of pool vs 16%), (b) smaller borrower set (4 unique borrowers vs 13), (c) cross-pool concentration with syrupUSDC for the family's biggest borrowers — top 3 cross-pool borrowers carry 42% of family book. Mitigants are the same as syrupUSDC: 21+ months clean credit record, active margin-call infrastructure, vetted Pool Delegate firm. Same structural deductions: Pool Delegate single-key EOA, no on-chain first-loss cover, off-chain custody, ~10% Set B Maple-affiliated at-par fraction with named-issuer risk (Paxos/Circle/Tether).

---

## III. Liquidity & Redemption — 5.0/10 (lower than syrupUSDC's 6.5)

Same architecture as syrupUSDC (DEX aggregator + queue redemption), but materially smaller pool depth.

```
Pool TVL:                      ~$436M  (vs syrupUSDC's $1.22B — 36% the size)
Free USDT buffer:              <observe live on dashboard>  (typically <$25M during deployment cycles)
Stress redemption depth:       ~$25M instant via aggregator + queue
                               Beyond that → loan-repayment cadence on $422M base
                               Avg payment cadence ~30-60 days for major loans
```

**Stress quantification:**

| Outflow scenario | Time to clear |
|---|---|
| 5% / ~$22M | Sub-minute via aggregator + queue |
| 10% / ~$44M | Hours-to-days; queue cadence |
| 25% / ~$110M | Weeks; bound by loan-repayment cadence on smaller base |
| 50%+ | Indeterminate; bound by collateral DEX depth (which thins under stress) |

For institutional sizing above ~$50M, expect queue latency of weeks rather than days under correlated outflow stress. **Queue cadence at proportional sizing is materially worse than syrupUSDC** because the principal base is 36% the size with similar payment-cadence distribution.

**Liquidity & Redemption Score: 5.0/10** — Smaller pool depth than syrupUSDC at proportional sizing. Same architecture, same exit paths, but stress cadence is materially worse.

---

## IV. Operational & Governance — 6.0/10 (same as syrupUSDC)

Same governance topology as syrupUSDC: 24h Timelock governor, 3-of-5 Operational Admin Safe, 3-of-6 Security Admin Safe — all shared at the MapleGlobals layer. The only governance difference is the **Pool Delegate EOA: `0x93aA06F8a7bB4da3Eb0DD5A5a38C01A7EB35501A` (single-key)** — a different operational key than syrupUSDC's `0xC1e1...49f`, but the same Pool Delegate firm operates both.

**Implication for combined-pool risk:**
- Compromise of the syrupUSDT delegate key does NOT automatically compromise syrupUSDC (good — separation of operational keys)
- BUT firm-level events (operational failure, key-management process compromise, corporate event at the delegate firm) would affect both pools simultaneously (bad — same firm-level dependency)

For governance dependencies and v1 incident history details, see [syrupUSDC institutional report §IV](/reports/syrupusdc-full/) — applies equally.

**Operational & Governance Score: 6.0/10** — Same as syrupUSDC. Inherited from the shared MapleGlobals + audit + delegate-firm framework.

---

## V. Overall Risk Score — 5.75/10

| Axis | Score | Weight | Contribution |
|---|---|---|---|
| Smart Contract | 7.0 | 0.25 | 1.75 |
| Credit & Counterparty | 5.0 | 0.35 | 1.75 |
| Liquidity & Redemption | 5.0 | 0.20 | 1.00 |
| Operational & Governance | 6.0 | 0.20 | 1.20 |
| **Composite** | **5.75** | 1.0 | **5.70** |
| *Supply Integrity (callout)* | *6.5* | — | *(not in composite)* |

**Why 5.75 vs syrupUSDC's 6.2:** the 0.5pt gap is the per-pool concentration (-0.5 on Credit) + shallower exit liquidity at proportional sizing (-1.5 on Liquidity vs syrupUSDC). All other axes inherit from the shared Maple framework and score the same.

---

## VI. Key Recommendations

1. **Treat per-pool concentration as the primary risk axis.** $175M / 41% of pool in a single BTC loan to a single borrower is materially above what's typical for institutional credit pools. A single-borrower default at this position would trigger ~40% of pool principal write-down before any margin-call liquidation effects.

2. **For combined Syrup-family sizing, compute per-borrower exposure across both pools.** Top-3 cross-pool borrowers carry 42% of combined book; the single largest carries 18.4% of family. Frameworks with single-counterparty limits should explicitly aggregate across pools.

3. **Yield reality check (same as syrupUSDC).** Plain syrupUSDT pays ~4.5-5% (`coreApy` from `syrupGlobals.apyTimeSeries`). Below the 3-month USD benchmark on most days. Drips/Seasons ENDED Feb 18, 2026.

4. **Smaller pool, scaled-down stress assumptions.** Free liquidity buffer is typically <$25M. Plan for queue latency of weeks rather than days for institutional positions above ~$50M during correlated outflow stress.

5. **Pool Delegate firm identity.** Same as syrupUSDC — TBD verify via Maple IR (likely Maven 11 per published delegate roster). Same firm runs both pools.

6. **No on-chain first-loss cover.** Same structural feature as syrupUSDC. Depositors absorb losses pro-rata via `unrealizedLosses`.

7. **Cross-pool concentration is invisible from either pool's standalone view.** The dashboard's Cross-Pool Family panel surfaces the concentration metrics. Use it before sizing into both pools.

---

## VII. Methodology & Disclosure Limits

**Verified on-chain via cast + Maple GraphQL `poolV2(id:"0x356b8d89...")` queries 2026-05-03.** Pool ID is case-sensitive in GraphQL — must be lowercase.

**Same data anomalies apply as syrupUSDC's institutional report §VIII:**
- `currentAssetAmount` broken for the at-par USDC + USDT loans in this pool (likely same root cause as syrupUSDC's USTB + USDC at-par anomaly)
- `aumTimeSeries.collateralUsd` shows correlated day-over-day variance from same root cause
- `borrowerMeta(ethereumAddress:).contactName` returns "N/A" — Maple does not publish borrower identities through this endpoint

**Cross-pool aggregate accuracy note:** the family aggregator (`syrup_family_analyzer.py` in PegTracker) computes cross-pool overlap from per-pool `loan_book.loans[]` arrays which are truncated to top-25 by principal. Cross-pool overlap totals are exact for the 4 cross-pool borrowers (all of whom have positions large enough to survive truncation). `unique_borrowers` count may slightly underestimate true family-wide unique borrowers if any singleton borrowers exist below the top-25 threshold in either pool.

**Maple's own `syrupGlobals.loansValue` field returns ~$1.27B which doesn't reconcile to the per-pool sum of ~$1.61B.** Maple-side data inconsistency. Family aggregates in this report and on the dashboard are computed from per-pool data, not from `syrupGlobals.loansValue`.

---

## Bottom Line

syrupUSDT is the smaller sibling of syrupUSDC — same architecture, same Pool Delegate firm, same governance, same audit corpus, but materially different at the pool-composition level. **Per-pool concentration is the binding risk axis specific to syrupUSDT alone:** the largest single loan is 41% of pool (vs 16% for syrupUSDC). For combined Syrup-family allocations, the **cross-pool borrower overlap is the binding risk axis** — top-3 cross-pool borrowers carry 42% of combined book; holding both pools concentrates rather than diversifies for those entities.

The 5.75/10 score reflects the inherited Maple-family risks (Pool Delegate single-key EOA, $0 first-loss cover, off-chain custody, GraphQL data anomalies, v1 bad-debt history under the same legal entity, ~10% Set B Maple-affiliated at-par fraction), plus the syrupUSDT-specific axes: (i) elevated per-pool concentration; (ii) shallower exit liquidity; (iii) cross-pool concentration with syrupUSDC.

**For sizing:** plain syrupUSDT today is institutional credit yield priced near or below T-bills, not a yield-chase product. Comfortable for retail and low-institutional positions willing to accept higher concentration than syrupUSDC. Larger institutional sizers should treat the $175M single-position concentration as the dominant risk axis, plan for materially longer queue cadence than syrupUSDC, and compute combined family exposure if also holding syrupUSDC.

**Live dashboard:** [todayindefi.github.io/backing-monitor/?asset=syrupusdt](https://todayindefi.github.io/backing-monitor/?asset=syrupusdt) — refreshed hourly. The Cross-Pool Family panel (rendered identically on both syrupUSDC and syrupUSDT pages) surfaces cross-pool concentration metrics live.

**Companion report:** [syrupUSDC institutional report](/reports/syrupusdc-full/) — covers shared contract architecture, audit profile, supply integrity (CCIP+CCT bridge), governance topology, and v1 bad-debt history. Treat this report and the syrupUSDC report as complementary rather than independent.
