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
last_revised: "2026-09-06"
last_verified: "2026-07-02"
production: true
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 436000000
legal_jurisdiction: "Cayman Islands"
bankruptcy_remote: false
yield_bearing: true

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
  governor: "Maple GovernorTimelock (custom, not OZ), 3d delay / 2d window, 24h MIN_DELAY floor (0x2eFFf887...426b — same contract as syrupUSDC)"
  operationalAdmin: "Safe v1.3.0, 3-of-5 (same as syrupUSDC)"
  securityAdmin: "Safe v1.3.0, 3-of-6 (same as syrupUSDC)"
  poolDelegate: "EOA, single-key (0x93aA06F8...501A — distinct from syrupUSDC's 0xC1e1...49f)"


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

> **2026-09-06 scoped update — the loan book is reconciled and the concentration figures are corrected downward; no score changed.** The loan-discovery step behind these figures was enumerating from a factory event cache that had silently advanced its checkpoint across failed block ranges, so **seven active syrupUSDT positions worth $144,645,910.05 were missing** and every concentration ratio divided by a short denominator. Enumerating from the loan manager's `PaymentAdded` events reconciles the book to `principalOut()` exactly: **18 loans, 9 borrowers, $392,718,462.42, zero residual.** ⚠️ **Largest borrower 24.19%, not 41%; top-3 66.77%, not ~74%; HHI 1,876.** The pool is still the more concentrated of the two, by a narrower margin, and the distribution is flatter rather than thinner. ⚠️ **The reconciliation established existence and principal, not collateral** — see the coverage limit under *Methodology & Disclosure Limits*. `last_verified` remains 2026-07-02: this was a scoped correction, not a fresh verification of every structural section.

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

> *Overall score (6.0) is composite over Contract / Credit / Liquidity / Operational. Weighted ~10pp lower than syrupUSDC's 6.75 — the gap is primarily concentration (largest borrower **24.19%** against 22.32%, HHI **1,876** against 1,354, 9 borrowers against 16) and shallower exit liquidity at proportional sizing.*

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

Shared with syrupUSDC (Maple-protocol-level): MapleGlobals, Governor (Maple `GovernorTimelock`, 3d delay / 2d window, 24h floor — the *same contract* at `0x2eFFf887…426b`, verified 2026-08-23), Operational Admin Safe (3-of-5), Security Admin Safe (3-of-6), OpenTermLoanFactory.

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
| Loans | **35** | **18** |
| Unique loan-book borrowers | **16** | **9** |
| Largest borrower | **22.32% of pool** | **24.19% of pool** |
| Top-3 borrower share of pool | **53.61%** | **66.77%** |
| Herfindahl index | **1,354** | **1,876** |
| Loans:Liquidity split | ~75–80 : ~20–25 | ~85–90 : ~10–15 |

*(Counts and per-position dollars drift with the book and are live on the dashboard; the durable fact is that syrupUSDT runs the more concentrated book of the two.)*

**The largest borrower in syrupUSDT is 24.19% of the pool, against 22.32% in syrupUSDC.** ⚠️ **On the single-name measure the two pools are about two points apart, not the wide gap this report previously carried.** What separates them is the spread of the borrower set: **HHI 1,876 against 1,354, and 9 borrowers against 16 on a pool 41% the size.** A single-borrower default here writes down roughly a quarter of pool principal in one event.

⚠️ **The distribution is flat, not thin.** The ladder runs 24.19 / 23.49 / 19.10 / 14.05 / 12.73 — removing the largest loan leaves eight borrowers and a new top name at 23.5%. **This is several comparable exposures rather than one dominant loan above a thin remainder**, and it is a materially different failure shape from the one a top-heavy reading implies.

### Borrower set — 9 borrowers, 18 loans, measured 2026-09-06

```
0xb99a2c4C..bcF5   1 loan    $95,000,000.00   24.19%   BTC, 4.25%   ← cross-pool, family #3
0x8fee157C..2628   3 loans   $92,230,000.00   23.49%   5.60–5.70%
0x0767BFa6..E3d4   1 loan    $75,000,000.00   19.10%
0x8669F318..f1e9   1 loan    $55,186,488.37   14.05%   XRP          ← cross-pool with syrupUSDC
0x1Af652b5..BAA5   1 loan    $50,000,000.00   12.73%   0.75%
0xB62446A8..D505   1 loan    $12,000,000.00    3.06%                ← cross-pool with syrupUSDC
0xFbA4BC92..5C81   5 loans    $8,250,000.00    2.10%
0x6C806A5F..93Ac   1 loan     $2,636,059.00    0.67%
0x8DF6721F..6122   4 loans    $2,415,915.05    0.62%
                             ---------------
                             $392,718,462.42   100.00%
```

**Enumerated from the loan manager's `PaymentAdded` events and reconciling to `principalOut()` exactly — zero residual.** All loans read `isImpaired=false`, `isCalled=false`, `isInDefault=false`.

### Cross-pool concentration: one product, two denominations

Maple presents the Syrup product line as a single institutional credit product offered in two stable denominations (USDC and USDT). A Syrup loan is offered to one institutional borrower across the family rather than partitioned per pool. The two pools share Pool Delegate firm, MapleGlobals governance, audit corpus, and v2 contract codebase; what differs is the underlying asset, the operational delegate EOA, and (consequently) the active loan book composition. **The borrower overlap between syrupUSDC and syrupUSDT is a structural product feature, not an unmarked side effect** — but it IS the most consequential sizing axis for an allocator holding both pools, because the right unit of analysis shifts from per-pool to family.

The Syrup family runs a small borrower set (**9 in syrupUSDT, 16 in syrupUSDC**, partly overlapping), so expect single-counterparty concentration above the ~10%-per-counterparty limit common in institutional credit frameworks. The family-borrower-set size and approximate top-3 share have been structurally stable across the snapshots reviewed; loan-book turnover changes the names and dollar amounts, not the small-set + overlap pattern.

**Measured 2026-09-06 — both legs enumerated from their loan managers' payment events, each reconciling to its pool's deployed principal with zero residual. Family loan book $1,351,476,236.26.**

| Family borrower | syrupUSDT | syrupUSDC | Combined | % of family loan book |
|---|---:|---:|---:|---:|
| `0x198aEC3c…529A` | — | $214.0M | **$214.0M** | **15.83%** |
| `0x09b845bb…6B8a` | — | $200.0M | **$200.0M** | **14.80%** |
| `0xb99a2c4C…bcF5` | **$95.0M** | **$100.0M** | **$195.0M** | **14.43%** |
| `0x8669F318…f1e9` | $55.2M | $96.6M | $151.8M | 11.23% |
| `0x282B6cca…b30c` | — | $100.0M | $100.0M | 7.40% |
| `0x8fee157C…2628` | $92.2M | — | $92.2M | 6.82% |
| `0xB62446A8…D505` | $12.0M | $65.5M | $77.5M | 5.73% |

**Top-3 family borrowers about 45% of the family loan book; single-largest 15.83%. Both above the 10%-per-counterparty limit common in institutional credit frameworks.** A credit event at any of these entities damages both pools simultaneously.

⚠️ **`0xb99a2c4C…bcF5` is the exposure per-pool sizing hides.** It is syrupUSDT's largest borrower at **24.19% of that pool** and separately holds **$100M in syrupUSDC**, tying for third there at 10.43%. **Combined, 14.43% of the family book.** An allocator reading the two pages independently sees a 24% exposure and a 10% exposure and never sees the 14.4%.

⚠️ **Three of the four syrupUSDC loans recovered in this reconciliation went to borrowers already on the list**, so the correction *lowered* per-pool concentration while *raising* measured cross-pool exposure. **The direction of a correction is not uniform across the readings it touches.**

**For combined-allocation sizing:** compute per-borrower exposure across both pools on a Loans-only basis and apply per-counterparty limits at the family level, not per-pool. Independent per-pool sizing systematically under-weights the real per-borrower concentration. The Liquidity layer custody is also shared between pools (same Maple-controlled custody addresses hold both pools' PYUSD and AMM positions), so the family is effectively a single risk surface for both credit and custody axes.

*Denominator note:* the family figures above divide by each pool's **full deployed principal** as enumerated from its loan manager's payment events, which reconciles to `principalOut()` on both legs with zero residual. ⚠️ **Concentration figures are only as good as the enumeration behind the denominator, and the arithmetic gives no sign when the denominator is short** — a ratio computed over two-thirds of a book looks exactly like a ratio computed over all of it.

### Liquidity layer is shared with syrupUSDC

The two cross-pool addresses that hold the Liquidity layer (`0x1fcc47ee...` for the loan-record borrower of PYUSD/USTB positions, and `0x2570fa...` for the AMM operator) are the same on both pools. Maple's GraphQL classifies these positions with `loanMeta.type` = `"amm"` or `"strategy"`. Per the analysis on the syrupUSDC side, these are pool-owned Liquidity strategies routed through Strategy 0's LoanManager as accounting wrapper, NOT third-party credit. syrupUSDT holds the *smaller* slice of a larger shared cross-pool PYUSD strategy custodied at `0xe7F0...657b` (per Maple 2026-05-04, all custody addresses are MPC wallets + strict policy under Maple operational control); the per-pool split between syrupUSDC and syrupUSDT is a point-in-time allocation, live on the dashboard. The USTB slice on syrupUSDT is **not a static holding** — it has appeared and unwound across days-to-weeks windows as composition drifts under delegate discretion, so any single-snapshot USTB figure should be read as point-in-time, not a standing position.

### Loss waterfall

Same as syrupUSDC: depositors are first-loss; Maple's `Globals.minCoverAmount[PoolManager] = 0` for syrupUSDT, and the PoolDelegateCover contract (`0x610d99d8...15A1`) holds zero USDT. Borrower default → off-chain custodian liquidates collateral → liquidation proceeds applied to principal+interest → any shortfall hits `unrealizedLosses` → reduces NAV pro-rata for syrupUSDT holders. **No on-chain first-loss cover absorbs losses before depositors.**

### Yield mechanics

Same architecture as syrupUSDC: borrower interest, net of Maple's protocol fee + 3.33% delegate fee. Live `coreApy` from Maple's `syrupGlobals.apyTimeSeries` runs ~4.5-5%; `boostApy = 0`. The historical Drips/Seasons incentive layer (active 2024 → Feb 18, 2026) ended for both pools on the same date — see syrupUSDC institutional report §II APY profile for the full historical context.

**Credit Risk Score: 5.5/10** — Lower than syrupUSDC's 6.0 primarily due to (a) higher per-pool concentration, though ⚠️ **on the single-name measure the gap is about two points — 24.19% against 22.32% — rather than the wide margin this rationale was originally written against**; what carries it is the borrower-set spread, **HHI 1,876 against 1,354**, (b) smaller loan-book borrower set (**9 against 16**, on a pool 41% the size), (c) cross-pool concentration with syrupUSDC for the family's biggest loan-book borrowers — top-3 cross-pool borrowers persistently run well above the 10%-per-counterparty norm on a Loans-only basis (~half the family loan book). Mitigants same as syrupUSDC: ~3-year clean credit record across the Syrup product line, active margin-call infrastructure, vetted Pool Delegate firm (Maven 11). Bumped from prior 5.0 to 5.5 reflecting cleaner separation of Pool Delegate concerns into Operational (institutional MPC + policy custody) — Credit now reflects loan-book quality + Liquidity-layer issuer mix without Pool Delegate single-key leakage. Same shared Maple-controlled custody as syrupUSDC (cross-pool risk axis — see §IV.6).

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

Same governance topology as syrupUSDC — and "same" is literal, not analogous. Verified on-chain 2026-08-23: this pool's manager (`0x0cda32e0…e21a`) is distinct from syrupUSDC's (`0x7ad5ffa5…158f`), but `governor()` on both returns the same address, `0x2eFFf887…426b`, and the two pool tokens are byte-identical (11,660 bytes, codehash `366717596a09`). That governor is Maple's own `GovernorTimelock`, not an OpenZeppelin one: operative delay **3 days** with a 2-day execution window, and a **24-hour `MIN_DELAY` floor** it cannot be set below. Alongside it sit the 3-of-5 Operational Admin Safe and 3-of-6 Security Admin Safe, all shared at the MapleGlobals layer. **The practical consequence for an allocator: holding both Syrup pools diversifies operator risk and not governance risk** — one governance action reaches both at once.

⚠️ **And the contract governing how holders get their money out has no delay at all, which is only visible when the two upgrade paths are compared.** Measured 2026-08-22/23, and because the two pools share one implementation these figures describe both:

| contract | upgrade caller | delay |
|---|---|---|
| `MaplePoolManager` | `poolDelegate` | **7 days** — `globals.isValidScheduledCall` |
| `MaplePoolManager` | `securityAdmin` | **none** — no scheduled-call requirement |
| `WithdrawalManager` | `poolDelegate` **or** `securityAdmin` | **none on either** |

⚠️ **So the pool contract imposes a week on one party and nothing on the other, while the withdrawal contract imposes nothing on anybody.** The `securityAdmin` that bypasses the delegate's seven days is a **3-of-6 Safe** (`0x6b1A78C1…0818`). **Neither row is alarming read alone — the finding exists only in the comparison**, and the layer with no delay is the one standing between a holder and their exit.

⚠️ **Base is governed by a different population, not the recurring one.** Base runs its own MCMS instances: all **nine** MCMS known from Ethereum, Monad and Plasma were `hasRole`-tested against Base's timelock — **five roles against nine addresses — and none holds any role there.** ⚠️ **The count was eight until a ninth inventory MCMS was found; the bound on this negative is wider than first published, not narrower.**

⚠️ **And the Ethereum authority over the Syrup pools is a THIRD population, not the MCMS set seen from another chain.** The 4-of-7 Safe `0xd6d4bcde…a196` that holds `ROLE_ADMIN` and governs pool permissions across both pools has **zero owner overlap with either MCMS signer set.** **Verifying one tells you nothing about the other**, and the two must not be read as one authority reaching three chains. Base's `RBACTimelock` delay is **3 hours**, execution is **permissionless** through a 621-byte CallProxy, and a **`BYPASSER` role** is held by a single MCMS. **A reader who has verified the Ethereum signer set has verified nothing about Base.** ⚠️ **Read that as a LIMIT on every shared-authority claim in this report, not as a footnote to one** — the shared-population result over-generalises without it, and an unstated negative does not travel the way a stated positive does.

⚠️ **On Monad the delay can be skipped entirely, and it is a property of the contract rather than a setting.** Verified live **2026-08-30** on the Monad `RBACTimelock` (`0x0c43bb1a…b17e2`), whose `getMinDelay()` is **10,800 seconds — three hours**. **Two MCMS contracts hold `BYPASSER_ROLE`**, and the two entry points do not take the same arguments:

```
bypasserExecuteBatch((address,uint256,bytes)[])                    0x0db866b1
scheduleBatch((address,uint256,bytes)[],bytes32,bytes32,uint256)   0xa944142d
```

**The bypass path takes the calls array and nothing else — no delay, no predecessor, no salt.** ⚠️ **So it cannot be delayed by configuration, because there is no parameter to set.** Raising `getMinDelay()` hardens the scheduled path and does **nothing** to this one. **That makes it a structural property of the deployed contract rather than a misconfiguration** — more durable than a settings finding, and **not fixable by a governance action short of revoking the role.**

**For sizing, the signature counts on the Monad MCMS set, measured 2026-08-30:**

| Action | Signatures required |
|---|---|
| **Propose** a scheduled action | **4** (of a 42-key set) |
| **Cancel** a scheduled action | **2** (of a 69-key set) |
| **Bypass** the delay entirely | **8** (of a 69-key set) |

`CANCELLER_ROLE` is held by all five MCMS contracts, including both that hold `PROPOSER_ROLE` — so **the delay is notice rather than interruption**, in the sense that the parties who schedule an action are also the ones able to cancel it. **This is the norm rather than an outlier:** Sky's 48-hour GSM behaves the same way, and an independently-held cancel is rare across the category. **Noted for what the window actually gives a holder — visibility — rather than flagged as a defect.**

**Method note, because the numbers are easy to get wrong:** the minimums are solved by recursively costing each group in the decoded configuration tree, not by reading the top-level quorum. For one bypasser the tree is `3 of [g1=3, g18=1, g19=4]`, which costs **8** — **a root quorum of 3 does not mean three signatures.**

**Two things this does not establish:** off-chain signer identity — the 69-key and 42-key sets are byte-identical across Ethereum, Monad and Plasma and intersect in exactly 40 keys, but **that is an address-overlap measurement, not a custody one** — and any dollar figure of exposure, which the verification did not cover.

**Sourcing:** measured by our security analysis with a discriminating control and a negative control. The role assignments on the five MCMS contracts are their reads; what was re-checked here is the deployed bytecode and the control behaviour.

**Two limits, because both halves of this are easy to over-read:**

- ⚠️ **The number of signatures behind those MCMS contracts is an undisclosed multisig threshold and is deliberately not quoted here.** A figure exists upstream; it has not been independently derived, and this report does not print unverified counts.
- ⚠️ **`PROPOSER_ROLE` and `BYPASSER_ROLE` are disjoint on Monad**, confirmed in both directions against a discriminating control. **So "the proposers can bypass the delay" is NOT what the chain says**, and the two findings must not be merged into it.

**That shared timelock carries two bare single keys in its own role set**, enumerated on-chain 2026-08-23: `ROLE_ADMIN` is held by a 4-of-7 Safe (`0xd6d4bcde…a196`) plus a bare EOA, and `EXECUTOR_ROLE` by a 3-of-5 Safe plus a second bare EOA, both granted in one batch roughly 9,500 blocks after deployment rather than at it. The same 4-of-7 Safe also governs pool permissions across both pools. Because the timelock is literally shared, **this exposure is common to syrupUSDT and syrupUSDC alike** — it is not a syrupUSDC-specific finding. The full role table, the detection-versus-veto distinction, and the reason conventional tooling reports an empty role set here are set out in the [syrupUSDC institutional report](/reports/syrupusdc-full/). Two points carry over directly: a key holding `ROLE_ADMIN` must still wait the full three days in the open, so this is a **detection** window; and whether it is also veto-backed depends on a cancellation carve-out neither report has verified. The only governance difference is the **Pool Delegate EOA: `0x93aA06F8a7bB4da3Eb0DD5A5a38C01A7EB35501A` (single-key)** — a different operational key than syrupUSDC's `0xC1e1...49f`, but the same Pool Delegate firm operates both.

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

1. **Treat concentration as the primary risk axis, and measure it at the family level.** The largest borrower is **24.19% of this pool** — above what is typical for institutional credit pools — and a default there writes down roughly a quarter of pool principal before any margin-call liquidation effects. ⚠️ **The larger number is the cross-pool one: that same borrower is 14.43% of the $1.35B family book**, which neither pool's own page shows. Live figures on the dashboard.

2. **For combined Syrup-family sizing, compute per-borrower exposure across both pools on a Loans-only basis.** Top-3 cross-pool borrowers persistently run well above the 10%-per-counterparty norm (~half the family loan book); single-largest near ~1/5 (recomputed 2026-05-04 on a true Loans-only basis — earlier framing understated it by including Liquidity custody addresses as if they were borrowers). Frameworks with single-counterparty limits should explicitly aggregate across pools on Loans-only basis; live figures on the dashboard.

3. **Evaluate sizing on credit-quality-vs-benchmark, not historical headline APY.** Plain syrupUSDT pays ~4.5-5% (`coreApy` from `syrupGlobals.apyTimeSeries`), which sits ~50–100 bp above the live 3-month T-bill (~3.7–4.0%, US Treasury fiscal data) and above comparable onchain stablecoin lending (Aave V3 / Morpho USDC + USDT supply ~3.5–4.5%, currently elevated from the mid-April rsETH/Kelp DAO incident). The historical Drips/Seasons incentive layer (active 2024 → Feb 18, 2026) ended for both pools.

4. **Smaller pool, scaled-down stress assumptions.** Free liquidity buffer is typically <$25M. Plan for queue latency of weeks rather than days for institutional positions above ~$50M during correlated outflow stress.

5. **Pool Delegate firm identity.** Same as syrupUSDC — Maven 11 Capital per Maple's published delegate disclosures + verified analyzer lookup. Same firm runs both pools, different operational EOA per pool.

6. **Shared Maple-controlled Liquidity custody.** The two cross-pool Liquidity custody addresses (`0xe7F0...657b` for PYUSD, `0x2570...3e08` for AMM operations) hold both pools' Liquidity positions. Per Maple 2026-05-04 these are MPC wallets + strict policy controls (institutional-grade primitive); on-chain reads cannot independently verify MPC vs single-key. A Maple-firm-level operational event affects both pools simultaneously.

6. **No on-chain first-loss cover.** Same structural feature as syrupUSDC. Depositors absorb losses pro-rata via `unrealizedLosses`.

7. **Cross-pool concentration is invisible from either pool's standalone view.** The dashboard's Cross-Pool Family panel surfaces the concentration metrics. Use it before sizing into both pools.

---

## VII. Methodology & Disclosure Limits

⚠️ **Collateral coverage is not the same as principal coverage, and only one of them is complete.** The 2026-09-06 reconciliation established that every loan exists and what its principal is — `principalOut()` reconciles exactly, zero residual. **It did not establish collateral.** Per-loan collateral is sourced from Maple's GraphQL API, which **returns no records for the seven recovered loans**, and the open-term loan contracts carry no on-chain collateral field. **So per-loan collateral is priced over 63.2% of syrupUSDT's book and about 90.8% of syrupUSDC's**, and any headline collateral ratio is computed over those visible subsets.

**That changes what the uncovered portion means rather than how large it is:** it is now *seen, and healthy on the on-chain risk flags, but unpriced for collateral* — not *unknown to exist*. All seven recovered loans read `isImpaired=false`, `isCalled=false`, `isInDefault=false`. ⚠️ **A collateral ratio quoted for syrupUSDT covers a materially smaller share of its book than the same ratio quoted for syrupUSDC, so the two are not directly comparable on that metric.**

**Verified on-chain via cast + Maple GraphQL `poolV2(id:"0x356b8d89...")` queries 2026-05-03.** Pool ID is case-sensitive in GraphQL — must be lowercase.

**Same data anomalies apply as syrupUSDC's institutional report §VIII:**
- `currentAssetAmount` broken for the at-par USDC + USDT loans in this pool (likely same root cause as syrupUSDC's USTB + USDC at-par anomaly)
- `aumTimeSeries.collateralUsd` shows correlated day-over-day variance from same root cause
- `borrowerMeta(ethereumAddress:).contactName` returns "N/A" — Maple does not publish borrower identities through this endpoint

**Cross-pool aggregate accuracy note:** the family aggregator (`syrup_family_analyzer.py` in PegTracker) computes cross-pool overlap from per-pool `loan_book.loans[]` arrays which are truncated to top-25 by principal. Cross-pool overlap totals are exact for the 4 cross-pool borrowers (all of whom have positions large enough to survive truncation). `unique_borrowers` count may slightly underestimate true family-wide unique borrowers if any singleton borrowers exist below the top-25 threshold in either pool.

**Note on `syrupGlobals.loansValue` reconciliation:** earlier reports flagged a `syrupGlobals.loansValue` vs per-pool-sum discrepancy as a Maple data inconsistency. Verified 2026-05-04: NOT a bug — `loansValue` returns the Loans-only total, the per-pool sum is Loans + Liquidity. Reconciles cleanly per Maple's own AUM Details split (~75–80% Loans / ~20–25% Liquidity).

---

## Bottom Line

syrupUSDT is the smaller sibling of syrupUSDC — same architecture, same Pool Delegate firm (Maven 11 Capital), same governance, same audit corpus, **same shared Liquidity-layer custody addresses (MPC-controlled per Maple 2026-05-04)**, but materially different at the pool-composition level. **Per-pool concentration is the risk axis specific to syrupUSDT**, though ⚠️ **on the single-name measure the two pools are close — 24.19% against 22.32%.** The real separation is the borrower-set spread: HHI 1,876 against 1,354, across 9 borrowers against 16. **For combined Syrup-family allocations the cross-pool overlap is the binding axis:** top-3 family borrowers are about 45% of the $1.35B family loan book and the single largest is 15.83%, both above the 10%-per-counterparty norm — and **one borrower sits at 24.19% of syrupUSDT and 10.43% of syrupUSDC simultaneously, for 14.43% of the family book.** Holding both pools concentrates rather than diversifies for those entities. Live figures on the dashboard.

**Architectural framing verified against Maple's own AUM Details page**: syrupUSDT's TVL splits as **~85–90% Loans (third-party institutional credit, BTC-heavy + XRP)** + **~10–15% Liquidity (pool-owned PYUSD/USDC-AMM/USDT-AMM positions, a thinner Liquidity layer than syrupUSDC)** — live magnitudes on the dashboard. The Liquidity layer routes through Strategy 0's LoanManager as accounting wrapper but is functionally pool-owned strategy custody, NOT third-party credit. Earlier "Set A overcollateralized + Set B at-par" framing collapsed both into a single mixed loan book — incorrect.

The 6.0/10 score reflects the inherited Maple-family risks (Pool Delegate discretion, $0 first-loss cover, consolidated Maple operational control of all custody — ≥5 EOA-shaped addresses controlling effectively all family-wide capital per Maple's MPC + policy attestation), plus the syrupUSDT-specific axes: (i) elevated per-pool concentration; (ii) shallower exit liquidity; (iii) cross-pool concentration with syrupUSDC for both credit-book borrowers AND Liquidity-layer custody. Maple v1's bad-debt history is documented context (see syrupUSDC report §IV) but carries small score weight given the v2 clean ~3-year record.

**For sizing:** plain syrupUSDT today is institutional credit yield priced ~50–100 bp above live T-bills (~3.7–4.0%) and above comparable onchain stablecoin lending (~3.5–4.5%), not a yield-chase number. Comfortable for retail and low-institutional positions willing to accept higher concentration than syrupUSDC. Larger institutional sizers should treat the a **24.19%** largest-borrower position and an HHI of **1,876** as the dominant risk axis, plan for materially longer queue cadence than syrupUSDC, and compute combined family exposure across both pools if also holding syrupUSDC — one borrower is 14.43% of the family book.

**Live dashboard:** [tidresearch.com/dashboards/?asset=syrupusdt](https://tidresearch.com/dashboards/?asset=syrupusdt) — refreshed hourly. Headline metric above the fold is **Pool Collateral Ratio (Loans-only)** (recently in the mid-140s% range, live on the dashboard — structurally below syrupUSDC's mid-160s% because syrupUSDT's loan book is more BTC-concentrated at lower init levels, 125–138%) with PCR demoted to a small status pill. Dashboard now splits into two distinct sections: **Loan Book** (a handful of third-party loans, BTC/XRP-collateralized) and **Liquidity Layer** (a handful of pool-owned positions, with custody addresses + EOA badges + issuer labels); loan counts and dollar figures shift with the book and are surfaced live rather than pinned here. Borrower Concentration computed Loans-only basis. **Trust Stack panel** surfaces all custody addresses (per-pool: 3 addresses touching syrupUSDT — own Pool Delegate + shared PYUSD custody + shared AMM operator; per Maple all are MPC + policy controls). Pool Coverage 7d chart at top. Cross-Pool Family panel reconciles concentration with syrupUSDC on a Loans-only basis. Treat PCR as a binary loss-recognition alarm rather than a metric.

**Companion report:** [syrupUSDC institutional report](/reports/syrupusdc-full/) — covers shared contract architecture, audit profile, supply integrity (CCIP+CCT bridge), governance topology, and v1 bad-debt history. Treat this report and the syrupUSDC report as complementary rather than independent.

---

*Correction 2026-08-23 — governance timelock restated, no score change. This report described the shared Maple governor as a "24h Timelock." It is Maple's own `GovernorTimelock` (not OpenZeppelin) with an operative delay of **3 days** (259,200s) and a 2-day execution window; the 86,400s value previously reported as the delay is the **`MIN_DELAY` floor** it cannot be set below. Re-read on-chain 2026-08-23 with a positive control. Both corrections favour the protocol — a longer window than stated, and the only governance timelock with a floor among five measured across this coverage in August 2026. The shared-governance claim is now verified directly rather than inferred from a common permission manager: this pool's manager (`0x0cda32e0…e21a`) differs from syrupUSDC's (`0x7ad5ffa5…158f`), but `governor()` on both returns `0x2eFFf887…426b` and the two pool tokens are byte-identical. The practical reading is that holding both Syrup pools diversifies operator risk and not governance risk. **The shared timelock's role holders were also enumerated for the first time**, and because the contract is shared the result applies to this pool identically: `ROLE_ADMIN` and `EXECUTOR_ROLE` each include a bare single key alongside their Safe, both granted after deployment in one batch, and the 4-of-7 Safe holding `ROLE_ADMIN` and `PROPOSER_ROLE` is the same one governing pool permissions across both pools. A key holding `ROLE_ADMIN` must still wait the full three days in the open, so this is a **detection** window; whether it is also veto-backed depends on a cancellation carve-out that is **not** verified and is deliberately not asserted here in either direction. Full role table and reasoning in the [syrupUSDC institutional report](/reports/syrupusdc-full/). No axis moved on this pass; a scoring decision is deferred until the cancellation question can travel with it. `last_verified` is not bumped; this body still carries its 2026-07-02 pool figures.*

*Update 2026-08-27 — **admin topology measured 2026-08-22/23; scores unchanged.** ⚠️ **The contract governing how holders exit has no upgrade delay, while the pool contract imposes seven days on one party — a finding that exists only in the comparison.** `MaplePoolManager.upgrade` requires a 7-day scheduled call from `poolDelegate` and **nothing from `securityAdmin`** (a 3-of-6 Safe, `0x6b1A78C1…0818`); `WithdrawalManager.upgrade` requires **nothing from either.** Neither row is alarming alone, and **the layer with no delay is the one standing between a holder and their exit.** ⚠️ **Base is governed by a different signer population than Ethereum, Monad and Plasma:** all eight MCMS known from those chains were `hasRole`-tested against Base's timelock and **none holds a role there.** Base's `RBACTimelock` is **3 hours**, execution is **permissionless** via a 621-byte CallProxy, and a **`BYPASSER`** role sits with a single MCMS — **so verifying the Ethereum signer set verifies nothing about Base.** Both findings describe **both pools**, since the two PoolManager implementations are byte-identical and share one `MapleGlobals`. `last_verified` is unchanged: this was an admin-layer measurement, and the reserve, loan-book and liquidity material has not been re-read.*

*Update 2026-08-30 — **Monad admin path measured; scores unchanged.** ⚠️ **The Monad `RBACTimelock` carries an execution path that cannot be delayed by configuration.** `bypasserExecuteBatch` takes the calls array and nothing else — no delay, no predecessor, no salt — while `scheduleBatch` takes a delay, so **raising `getMinDelay()` (10,800s / 3h) hardens the scheduled path and does nothing to the bypass.** Two MCMS contracts hold `BYPASSER_ROLE`, verified with a discriminating control and a negative control. **This is a structural property of the deployed contract, not a setting**, and is not fixable short of revoking the role. ⚠️ **Two things are deliberately NOT asserted:** the signature threshold behind those MCMS contracts is undisclosed and unverified here, and `PROPOSER_ROLE` and `BYPASSER_ROLE` are **disjoint** on Monad — so this is not a claim that proposers can bypass. **No axis moved:** the finding is real but the exploitability depends on the threshold, which is exactly the figure not established. `last_verified` is unchanged — this was an admin-layer measurement and the reserve, loan-book and liquidity material has not been re-read.*
