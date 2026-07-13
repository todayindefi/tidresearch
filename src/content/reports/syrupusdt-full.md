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
last_verified: "2026-07-02"
production: true
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
credit_score: 5.5
liquidity_score: 6.0
operational_score: 6.5
supply_integrity_score: 6.5
overall_score: 6.0
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

*Live pool backing, peg deviation, and exit-liquidity tiers are on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt).*

> *What's pinned in this report is structural risk — architecture, the issuer menu, the risk axes, and the scores. Current magnitudes (pool split, per-issuer allocation, collateral ratio, concentration, exit tiers) drift weekly and are live on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt). This report is written to stay correct across that drift.*

**Companion to [syrupUSDC institutional report](/reports/syrupusdc-full/).** Most of the contract architecture, audit profile, governance topology, and Pool Delegate model is shared between the two pools; this report focuses on what's pool-specific to syrupUSDT and on the cross-pool concentration that emerges only when both pools are considered together.

| | |
|---|---|
| **Asset** | syrupUSDT (Maple Finance Syrup product line — USDT pool) |
| **Issuer** | Maple Labs (Cayman Islands) — same legal entity as syrupUSDC |
| **Launch** | August 2024 |
| **Jurisdiction** | Cayman Islands; no bankruptcy remoteness for token holders |
| **Underlying exposure** | Two-bucket per Maple's AUM Details: ~85–90% Loans (third-party institutional credit, BTC/XRP-collateralized) + ~10–15% Liquidity (pool-owned PYUSD/USDC-AMM/USDT-AMM strategies); USDT-denominated |
| **Type** | Yield-bearing ERC-4626 lending vault share |
| **Primary access** | Permissionless deposit/redeem; no KYC at the vault layer |
| **Total assets** | Materially smaller than syrupUSDC; live TVL on the dashboard |
| **Active loans** | A handful; live count + principal on the dashboard |
| **NAV** | Slowly accruing above 1.00 USDT; live on the dashboard |
| **Deposit cap** | liquidityCap = $2.0B governance parameter; utilization well below cap — live headroom on the dashboard (see syrupUSDC institutional report §I.5 for mechanics) |
| **Sibling pool** | syrupUSDC — materially larger; shared Pool Delegate firm (live size/counts on its dashboard) |

> *Overall score (6.0) is composite over Contract / Credit / Liquidity / Operational. Weighted ~10pp lower than syrupUSDC's 6.75 — the gap is primarily per-pool concentration (largest single loan = 41% of pool) and shallower exit liquidity at proportional sizing.*

---

## Protocol Summary

syrupUSDT is the USDT-denominated sibling of syrupUSDC. **Same Maple Labs entity, same MapleGlobals governance contract, same Pool Delegate firm, same audit corpus, same v2 contract codebase.** The only structurally distinct elements are (a) the underlying asset (USDT vs USDC), (b) a different Pool Delegate operational EOA (`0x93aA06F8...501A` vs `0xC1e1...49f`), and (c) a different active loan book.

For the **contract architecture, governance topology, audit profile, supply integrity (CCIP+CCT bridge surface), and v1 bad-debt history,** see the [syrupUSDC institutional report §I, §I.5, §IV](/reports/syrupusdc-full/) — those sections apply equally to both pools.

This report focuses on **what's distinct about syrupUSDT:**

1. Smaller pool at higher per-pool concentration
2. More BTC-dominant Loan book composition
3. Smaller proportional Liquidity layer (~10–15% vs syrupUSDC's ~20–25%)
4. **Cross-pool borrower overlap with syrupUSDC** — the structural risk axis specific to combined Syrup-family allocations
5. **Shared Liquidity-layer custody** — same Maple-controlled custody addresses hold both pools' PYUSD and AMM positions

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

## II. Credit & Counterparty — 5.5/10 (lower than syrupUSDC's 6.0)

### Pool composition (verified 2026-05-04 against Maple's AUM Details)

**Loans (third-party institutional credit, ~85–90% of pool):**

| Asset | Loans | Principal | % of loan book | Init level |
|---|---|---|---|---|
| BTC | 5 | $317.0M | 83.6% | 125–138% |
| XRP | 1 | $62.1M | 16.4% | 150% |

**Liquidity (pool-owned strategies, ~10–15% of pool):**

| Asset | Issuer | Positions | Principal | Custody (chain) |
|---|---|---|---|---|
| PYUSD | Paxos | 1 | $29.5M | `0xe7F0...657b` (Ethereum, **shared with syrupUSDC**) |
| USDC | Circle (asset, AMM venue) | 1 | $10.0M | `0x2570...3e08` (Ethereum, AMM-LP-pair, shared) |
| USDT | Tether (asset, AMM venue) | 4 | $3.2M | `0x2570...3e08` (Ethereum, AMM-LP-pair, shared) |

The Liquidity positions route through Strategy 0's OpenTermLoanManager as accounting wrapper but are functionally pool-owned strategy custody, NOT third-party credit. The earlier "Set A overcollateralized + Set B at-par" framing collapsed both into a single mixed loan book — that framing was incorrect.

*On reading the init-level column:* the init level is each loan's *funding* collateralization, a durable structural range (125–150% across this book), not a live health metric. The health yardstick that actually binds is **distance to par** — how close a loan's *current* collateralization sits to 100%, where collateral stops covering principal — which drifts continuously with collateral price under Pool Delegate discretion. "Below init" on its own carries almost no information (a loan can fall well below its funding level and still be wildly overcollateralized); clustering of *current* levels toward par is the signal. Current per-loan buffers are point-in-time and surfaced live on the dashboard, not pinned here.

### Per-pool concentration is the binding risk vs syrupUSDC

| Metric | syrupUSDC | **syrupUSDT** |
|---|---|---|
| Loans | ~two dozen | **a handful** |
| Unique loan-book borrowers | ~a dozen | **small set (~4)** |
| Largest single loan | ~mid-teens % of pool | **~40%+ of pool** |
| Top-3 loans share of pool | ~36% | **~74%** |
| Loans:Liquidity split | ~75–80 : ~20–25 | ~85–90 : ~10–15 |

*(Exact loan/borrower counts and per-position dollars drift with the book and are live on the dashboard; the durable fact is the structural concentration gap — syrupUSDT runs a far more concentrated book than syrupUSDC.)*

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

### Cross-pool concentration: one product, two denominations

Maple presents the Syrup product line as a single institutional credit product offered in two stable denominations (USDC and USDT). A Syrup loan is offered to one institutional borrower across the family rather than partitioned per pool. The two pools share Pool Delegate firm, MapleGlobals governance, audit corpus, and v2 contract codebase; what differs is the underlying asset, the operational delegate EOA, and (consequently) the active loan book composition. **The borrower overlap between syrupUSDC and syrupUSDT is a structural product feature, not an unmarked side effect** — but it IS the most consequential sizing axis for an allocator holding both pools, because the right unit of analysis shifts from per-pool to family.

The Syrup family runs a small borrower set (4 unique in syrupUSDT, 13 in syrupUSDC, mostly overlapping), so expect single-counterparty concentration above the ~10%-per-counterparty limit common in institutional credit frameworks. The family-borrower-set size and approximate top-3 share have been structurally stable across the snapshots reviewed; loan-book turnover changes the names and dollar amounts, not the small-set + overlap pattern.

**Snapshot illustration (recomputed Loans-only basis, 2026-05-04 — live numbers shift as loans mature and originate):**

| Family borrower | syrupUSDT Loans | syrupUSDC Loans | Combined | % of family loan book ($1.27B) |
|---|---|---|---|---|
| `0x8669f3...f1e9` (XRP + BTC) | $62.1M | $181.9M | **$244.0M** | **19.3%** |
| `0x09b8...6B8a` (BTC) | — | $200M | $200M | 15.8% |
| `0xb62446...d505` (BTC) | $62.0M | $67.6M | **$129.6M** | **10.2%** |

Top-3 family borrowers ~49% of the family loan book; single-largest ~19%. **Both above the 10%-per-counterparty limit common in institutional credit frameworks.** A credit event at any of these entities damages both pools simultaneously. Live numbers via the dashboard linked at the end of this report.

**For combined-allocation sizing:** compute per-borrower exposure across both pools on a Loans-only basis and apply per-counterparty limits at the family level, not per-pool. Independent per-pool sizing systematically under-weights the real per-borrower concentration. The Liquidity layer custody is also shared between pools (same Maple-controlled custody addresses hold both pools' PYUSD and AMM positions), so the family is effectively a single risk surface for both credit and custody axes.

*Recomputation methodology note:* earlier reports cited "top-3 = 42% / top-1 = 18.4%" using a combined Loans+Liquidity denominator that included Liquidity custody addresses (`0x1fcc47ee...`, `0x2570fa...`) as if they were borrowers. The current numbers (top-3 ~49% / top-1 ~19%) are recomputed on a true Loans-only basis. Removing Liquidity custodies from the denominator concentrates the remaining loan-book borrowers — a real understatement in the prior framing, not a definitional one.

### Liquidity layer is shared with syrupUSDC

The two cross-pool addresses that hold the Liquidity layer (`0x1fcc47ee...` for the loan-record borrower of PYUSD/USTB positions, and `0x2570fa...` for the AMM operator) are the same on both pools. Maple's GraphQL classifies these positions with `loanMeta.type` = `"amm"` or `"strategy"`. Per the analysis on the syrupUSDC side, these are pool-owned Liquidity strategies routed through Strategy 0's LoanManager as accounting wrapper, NOT third-party credit. syrupUSDT holds the *smaller* slice of a larger shared cross-pool PYUSD strategy custodied at `0xe7F0...657b` (per Maple 2026-05-04, all custody addresses are MPC wallets + strict policy under Maple operational control); the per-pool split between syrupUSDC and syrupUSDT is a point-in-time allocation, live on the dashboard. The USTB slice on syrupUSDT is **not a static holding** — it has appeared and unwound across days-to-weeks windows as composition drifts under delegate discretion, so any single-snapshot USTB figure should be read as point-in-time, not a standing position.

### Loss waterfall

Same as syrupUSDC: depositors are first-loss; Maple's `Globals.minCoverAmount[PoolManager] = 0` for syrupUSDT, and the PoolDelegateCover contract (`0x610d99d8...15A1`) holds zero USDT. Borrower default → off-chain custodian liquidates collateral → liquidation proceeds applied to principal+interest → any shortfall hits `unrealizedLosses` → reduces NAV pro-rata for syrupUSDT holders. **No on-chain first-loss cover absorbs losses before depositors.**

### Yield mechanics

Same architecture as syrupUSDC: borrower interest, net of Maple's protocol fee + 3.33% delegate fee. Live `coreApy` from Maple's `syrupGlobals.apyTimeSeries` runs ~4.5-5%; `boostApy = 0`. The historical Drips/Seasons incentive layer (active 2024 → Feb 18, 2026) ended for both pools on the same date — see syrupUSDC institutional report §II APY profile for the full historical context.

**Credit Risk Score: 5.5/10** — Lower than syrupUSDC's 6.0 primarily due to (a) materially higher per-pool concentration (largest single loan ~41% of pool vs 16%), (b) smaller loan-book borrower set (4 unique borrowers vs 13), (c) cross-pool concentration with syrupUSDC for the family's biggest loan-book borrowers — top-3 cross-pool borrowers persistently run well above the 10%-per-counterparty norm on a Loans-only basis (~half the family loan book). Mitigants same as syrupUSDC: ~3-year clean credit record across the Syrup product line, active margin-call infrastructure, vetted Pool Delegate firm (Maven 11). Bumped from prior 5.0 to 5.5 reflecting cleaner separation of Pool Delegate concerns into Operational (institutional MPC + policy custody) — Credit now reflects loan-book quality + Liquidity-layer issuer mix without Pool Delegate single-key leakage. Same shared Maple-controlled custody as syrupUSDC (cross-pool risk axis — see §IV.6).

---

## III. Liquidity & Redemption — 6.0/10 (lower than syrupUSDC's 7.5)

Same architecture as syrupUSDC (DEX aggregator + queue redemption), but materially smaller pool depth.

```
Pool TVL:                      Materially smaller than syrupUSDC (~1/3 the size); live on dashboard
Free USDT buffer:              <observe live on dashboard>  (typically thin during deployment cycles)
Stress redemption depth:       free-USDC buffer instant via aggregator + queue (live)
                               Beyond that → loan-repayment cadence on the pool's principal base
                               Avg payment cadence ~30-60 days for major loans
```

**Stress quantification:**

| Outflow scenario | Time to clear |
|---|---|
| ~5% outflow | Sub-minute via aggregator + queue |
| ~10% outflow | Hours-to-days; queue cadence |
| ~25% outflow | Weeks; bound by loan-repayment cadence on smaller base |
| 50%+ | Indeterminate; bound by collateral DEX depth (which thins under stress) |

For institutional sizing above ~$50M, expect queue latency of weeks rather than days under correlated outflow stress. **Queue cadence at proportional sizing is materially worse than syrupUSDC** because the principal base is ~1/3 the size with similar payment-cadence distribution.

**Liquidity & Redemption Score: 6.0/10** — Smaller pool depth than syrupUSDC at proportional sizing. Same architecture, same exit paths, but stress cadence is materially worse. **Permissionless mint/redeem at the vault layer is the same as syrupUSDC** — no KYC gating, anyone (retail or institutional) can deposit USDT at NAV and submit redemption requests at NAV. This access-pattern advantage over KYC-gated peers (thBILL T+4) is real even at smaller pool depth. Bumped from prior 5.0 to fold in the permissionless mint/redeem advantage; smaller pool caps the score below syrupUSDC's 7.5.

---

## IV. Operational & Governance — 6.5/10 (slightly lower than syrupUSDC's 7.0)

Same governance topology as syrupUSDC: 24h Timelock governor, 3-of-5 Operational Admin Safe, 3-of-6 Security Admin Safe — all shared at the MapleGlobals layer. The only governance difference is the **Pool Delegate EOA: `0x93aA06F8a7bB4da3Eb0DD5A5a38C01A7EB35501A` (single-key)** — a different operational key than syrupUSDC's `0xC1e1...49f`, but the same Pool Delegate firm operates both.

**Implication for combined-pool risk:**
- Compromise of the syrupUSDT delegate key does NOT automatically compromise syrupUSDC (good — separation of operational keys)
- BUT firm-level events (operational failure, key-management process compromise, corporate event at the delegate firm) would affect both pools simultaneously (bad — same firm-level dependency)

For governance dependencies and v1 incident history details, see [syrupUSDC institutional report §IV](/reports/syrupusdc-full/) — applies equally.

**Operational & Governance Score: 6.5/10** — Same governance topology as syrupUSDC. Same MapleGlobals + audit + delegate-firm framework. Bumped from prior 6.0 (matching syrupUSDC's bump from MPC + policy custody attestation), but ~0.5 below syrupUSDC because of the **shared Liquidity-layer custody** (a Maple-firm-level operational event affects both pools simultaneously, not just one in isolation — cross-pool risk axis specific to syrupUSDT alongside syrupUSDC).

---

## V. Overall Risk Score — 6.0/10

| Axis | Score | Weight | Contribution |
|---|---|---|---|
| Smart Contract | 7.0 | 0.25 | 1.75 |
| Credit & Counterparty | 5.5 | 0.35 | 1.93 |
| Liquidity & Redemption | 6.0 | 0.20 | 1.20 |
| Operational & Governance | 6.5 | 0.20 | 1.30 |
| **Composite** | **6.0** | 1.0 | **6.18** |
| *Supply Integrity (callout)* | *6.5* | — | *(not in composite)* |

**Why 6.0 vs syrupUSDC's 6.75:** the gap is the per-pool concentration (-0.5 on Credit) + shallower exit liquidity at proportional sizing (-1.5 on Liquidity vs syrupUSDC) + cross-pool shared custody concentration (-0.5 on Operational). Smart Contract and Supply Integrity axes inherit identically from the shared Maple framework. **What changed in this scoring update (2026-05-04):** prior framework was 5.75/10. Bumped to 6.0/10 mirroring syrupUSDC's reweighting — Pool Delegate concerns properly contained in Operational, permissionless mint/redeem advantage explicitly priced in Liquidity, MPC + policy custody attestation reducing the single-key custody discount.

---

## VI. Key Recommendations

1. **Treat per-pool concentration as the primary risk axis.** A single BTC loan at ~40%+ of the pool to a single borrower is materially above what's typical for institutional credit pools. A single-borrower default at this position would trigger ~40% of pool principal write-down before any margin-call liquidation effects. Live figure on the dashboard.

2. **For combined Syrup-family sizing, compute per-borrower exposure across both pools on a Loans-only basis.** Top-3 cross-pool borrowers persistently run well above the 10%-per-counterparty norm (~half the family loan book); single-largest near ~1/5 (recomputed 2026-05-04 on a true Loans-only basis — earlier framing understated it by including Liquidity custody addresses as if they were borrowers). Frameworks with single-counterparty limits should explicitly aggregate across pools on Loans-only basis; live figures on the dashboard.

3. **Evaluate sizing on credit-quality-vs-benchmark, not historical headline APY.** Plain syrupUSDT pays ~4.5-5% (`coreApy` from `syrupGlobals.apyTimeSeries`), which sits ~50–100 bp above the live 3-month T-bill (~3.7–4.0%, US Treasury fiscal data) and above comparable onchain stablecoin lending (Aave V3 / Morpho USDC + USDT supply ~3.5–4.5%, currently elevated from the mid-April rsETH/Kelp DAO incident). The historical Drips/Seasons incentive layer (active 2024 → Feb 18, 2026) ended for both pools.

4. **Smaller pool, scaled-down stress assumptions.** Free liquidity buffer is typically <$25M. Plan for queue latency of weeks rather than days for institutional positions above ~$50M during correlated outflow stress.

5. **Pool Delegate firm identity.** Same as syrupUSDC — Maven 11 Capital per Maple's published delegate disclosures + verified analyzer lookup. Same firm runs both pools, different operational EOA per pool.

6. **Shared Maple-controlled Liquidity custody.** The two cross-pool Liquidity custody addresses (`0xe7F0...657b` for PYUSD, `0x2570...3e08` for AMM operations) hold both pools' Liquidity positions. Per Maple 2026-05-04 these are MPC wallets + strict policy controls (institutional-grade primitive); on-chain reads cannot independently verify MPC vs single-key. A Maple-firm-level operational event affects both pools simultaneously.

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

**Note on `syrupGlobals.loansValue` reconciliation:** earlier reports flagged a `syrupGlobals.loansValue` vs per-pool-sum discrepancy as a Maple data inconsistency. Verified 2026-05-04: NOT a bug — `loansValue` returns the Loans-only total, the per-pool sum is Loans + Liquidity. Reconciles cleanly per Maple's own AUM Details split (~75–80% Loans / ~20–25% Liquidity).

---

## Bottom Line

syrupUSDT is the smaller sibling of syrupUSDC — same architecture, same Pool Delegate firm (Maven 11 Capital), same governance, same audit corpus, **same shared Liquidity-layer custody addresses (MPC-controlled per Maple 2026-05-04)**, but materially different at the pool-composition level. **Per-pool concentration is the binding risk axis specific to syrupUSDT alone:** the largest single loan is ~41% of pool (vs mid-teens % for syrupUSDC). For combined Syrup-family allocations, the **cross-pool borrower overlap is the binding risk axis** — on a Loans-only basis the top-3 cross-pool borrowers persistently run well above the 10%-per-counterparty norm (~half the family loan book), single-largest near ~1/5; holding both pools concentrates rather than diversifies for those entities. Live figures on the dashboard.

**Architectural framing verified against Maple's own AUM Details page**: syrupUSDT's TVL splits as **~85–90% Loans (third-party institutional credit, BTC-heavy + XRP)** + **~10–15% Liquidity (pool-owned PYUSD/USDC-AMM/USDT-AMM positions, a thinner Liquidity layer than syrupUSDC)** — live magnitudes on the dashboard. The Liquidity layer routes through Strategy 0's LoanManager as accounting wrapper but is functionally pool-owned strategy custody, NOT third-party credit. Earlier "Set A overcollateralized + Set B at-par" framing collapsed both into a single mixed loan book — incorrect.

The 6.0/10 score reflects the inherited Maple-family risks (Pool Delegate discretion, $0 first-loss cover, consolidated Maple operational control of all custody — ≥5 EOA-shaped addresses controlling effectively all family-wide capital per Maple's MPC + policy attestation), plus the syrupUSDT-specific axes: (i) elevated per-pool concentration; (ii) shallower exit liquidity; (iii) cross-pool concentration with syrupUSDC for both credit-book borrowers AND Liquidity-layer custody. Maple v1's bad-debt history is documented context (see syrupUSDC report §IV) but carries small score weight given the v2 clean ~3-year record.

**For sizing:** plain syrupUSDT today is institutional credit yield priced ~50–100 bp above live T-bills (~3.7–4.0%) and above comparable onchain stablecoin lending (~3.5–4.5%), not a yield-chase number. Comfortable for retail and low-institutional positions willing to accept higher concentration than syrupUSDC. Larger institutional sizers should treat the ~40%+ single-position concentration as the dominant risk axis, plan for materially longer queue cadence than syrupUSDC, and compute combined family exposure on a Loans-only basis if also holding syrupUSDC.

**Live dashboard:** [tidresearch.com/dashboards/?asset=syrupusdt](https://tidresearch.com/dashboards/?asset=syrupusdt) — refreshed hourly. Headline metric above the fold is **Pool Collateral Ratio (Loans-only)** (recently in the mid-140s% range, live on the dashboard — structurally below syrupUSDC's mid-160s% because syrupUSDT's loan book is more BTC-concentrated at lower init levels, 125–138%) with PCR demoted to a small status pill. Dashboard now splits into two distinct sections: **Loan Book** (a handful of third-party loans, BTC/XRP-collateralized) and **Liquidity Layer** (a handful of pool-owned positions, with custody addresses + EOA badges + issuer labels); loan counts and dollar figures shift with the book and are surfaced live rather than pinned here. Borrower Concentration computed Loans-only basis. **Trust Stack panel** surfaces all custody addresses (per-pool: 3 addresses touching syrupUSDT — own Pool Delegate + shared PYUSD custody + shared AMM operator; per Maple all are MPC + policy controls). Pool Coverage 7d chart at top. Cross-Pool Family panel reconciles concentration with syrupUSDC on a Loans-only basis. Treat PCR as a binary loss-recognition alarm rather than a metric.

**Companion report:** [syrupUSDC institutional report](/reports/syrupusdc-full/) — covers shared contract architecture, audit profile, supply integrity (CCIP+CCT bridge), governance topology, and v1 bad-debt history. Treat this report and the syrupUSDC report as complementary rather than independent.
