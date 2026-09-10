---
asset: "syrupUSDT"
slug: "syrupusdt"
aliases: ["syrupUSDT", "SYRUPUSDT", "Syrup USDT", "Maple Syrup USDT"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["USDT"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
date: "2026-05-03"
# ⚠️ `last_verified` HOLDS at 2026-08-18 DELIBERATELY — do not bump on a sweep.
# The 2026-09-06 pass re-measured the loan book, the concentration denominator
# and the admin/authority topology; it did NOT re-read the NAV mechanism, yield,
# the depth ladders, the audit corpus or the withdrawal-queue mechanics. The
# body states that split at the top. ⚠️ riskAnalyst moved THEIR copy to
# 2026-09-07 under their own rule (last_verified moves when SOMETHING was
# re-measured). The conventions differ on purpose: their field ranks a refresh
# queue, ours tells a reader how old a claim is, and our card already renders
# BOTH dates so holding conceals nothing.
last_verified: "2026-08-18"
last_revised: "2026-09-06"
featured: false
production: true
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 436000000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Migrated at this refresh, per the refresh-driven
# policy. ⚠️ backing_score was MISSING ENTIRELY and could not render on the old
# vault-share rubric — adding it without the frame would have been schema-legal
# and invisible.
#   backing_score 6.0 is NEW. ⚠️ Capped by COLLATERAL VISIBILITY, not by the
#     collateral ratio: per-loan collateral comes from Maple GraphQL, which
#     returns nothing for the loans recovered in the 2026-09-06 reconciliation,
#     and OpenTermLoan carries no on-chain collateral field. Existence and
#     principal are fully verified; collateral is not.
#   underlying_score 6.5 -> 5.0 renders as DEPENDENCIES.
#   ⚠️ structural_score 6.0 -> 4.5 IS A RE-SCOPE, NOT A DETERIORATION.
#     The old number spanned THREE axes — it also priced per-pool loan
#     concentration (axis 4) and Maple Labs as an entity (axis 6), both already
#     scored separately, so it was double-counting positives that live
#     elsewhere. ⚠️ BOTH POOLS SCORE 4.5 BY MEASUREMENT, NOT ASSUMPTION: the
#     authority walk returns the same six Ethereum paths with the same
#     thresholds and the same delay flags on both. Do not split axis 5 per pool.
# ⚠️ `redemption_score: 6.5` is RETAINED but no longer rendered: it is the
# evidence for axis 3, scored on the WORSE leg. Both legs are named in prose.
# ⚠️ OVERALL 6.0 IS HELD AND IS NOW ABOVE ITS OWN AXIS MEAN (5.92, +0.08),
# contrary to the corpus at-or-below convention. That is deliberate and stated
# on the page: the re-scope lowered the mean, no one has re-derived the overall,
# and inventing a number here would publish something nobody computed.
axis_frame: six
volatility_score: 8.5
backing_score: 6.0
structural_score: 4.5
redemption_score: 6.5
underlying_score: 5.0
liquidity_score: 6.0
issuer_score: 5.5
overall_score: 6.0
---

# syrupUSDT — Risk Report

**Moderate risk · 6.0/10 · Sibling product to [syrupUSDC](/reports/syrupusdc/)**

*Live pool backing, peg deviation, and free-liquidity / withdrawal-queue state are on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt).* ⚠️ **No tiered exit ladder is published for syrupUSDT** — unlike [syrupUSDC](/reports/syrupusdc/), which carries one. **Exit sizing here has to come from the free-liquidity share and the queue, not from a slippage table.**

> ⚠️ **What is current and what is not, because this page carries two dates.** **Re-measured 2026-09-06:** the loan book, enumerated from the loan manager's own payment events and reconciling to deployed principal with zero residual — **18 loans, 9 borrowers, $392,718,462.42** — every concentration figure computed on that denominator, and the **admin and authority topology**, hand-walked on-chain, which is what sets Contract & Admin. **Still dating from 2026-08-18 and not re-read:** the NAV mechanism, yield and APY, the liquidity depth ladders, the audit corpus, and the withdrawal-queue mechanics. ⚠️ **So `verified through` is the older date deliberately** — the concentration and authority material is today's; the description of how the vault works is August's.

> *What's pinned in this report is structural risk — architecture, the issuer menu, the risk axes, and the scores. Current magnitudes (pool split, per-issuer allocation, collateral ratio, concentration, exit tiers) drift weekly and are live on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt). This report is written to stay correct across that drift.*

| Yield | Exit method | Primary redemption | Pool size | Chains |
|---|---|---|---|---|
| ~4.5–5% live (organic loan interest) | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | Materially smaller than syrupUSDC (live on the dashboard) | Ethereum primary |

## Summary

syrupUSDT is the USDT-denominated sibling of syrupUSDC in Maple Finance's "Syrup" institutional credit product line. Same Maple architecture, same Pool Delegate firm, same Maple Labs entity — but materially smaller pool than syrupUSDC (live sizes on the dashboards). Yield is real (interest paid by real institutional borrowers), zero principal losses since launch, and the product runs on the same audited v2 contract codebase as its USDC sibling.

**Pool composition (structure verified against Maple's own AUM Details page)**: roughly 85–90% Loans (third-party institutional credit, BTC-heavy + XRP at 125–150% init level) + roughly 10–15% Liquidity (pool-owned PYUSD/USDC-AMM/USDT-AMM positions, a thinner Liquidity layer than syrupUSDC); the dollar magnitudes shift with the book and are surfaced live on the dashboard rather than pinned here. Note the 125–150% figure is each loan's *funding* collateral level, not a live health reading — the buffer that matters is how close current collateralization sits to par (100%), which the dashboard tracks. The Liquidity layer is at-par with the underlying asset and routes through Maple's lending infrastructure as accounting wrapper, but is functionally pool-owned strategy custody, NOT third-party credit. "Overcollateralized at all times" applies to the loan book; the Liquidity layer is intentionally at par.

The catch: **syrupUSDT is more concentrated than syrupUSDC at the per-pool level, AND it shares borrowers with syrupUSDC.** ⚠️ **Measured 2026-09-06 against the pool's full deployed principal of $392.72M: the largest borrower is 24.19%, against 22.32% in syrupUSDC.** **The conclusion is unchanged — syrupUSDT is the more concentrated pool — but the margin is about two points, not a double-digit gap.** A single borrower default here writes down roughly a quarter of the principal in one event.

**The shape of that concentration is flat rather than thin.** syrupUSDT's Herfindahl index is **1,876** — "moderate" on its own bucket labels — with the top three borrowers at **66.77% across nine**. The ladder runs **24.19% / 23.49% / 19.10% / 14.05% / 12.73%**: removing the largest loan leaves eight borrowers and a new top name at 23.5%, so this is a pool with several comparable exposures rather than one dominant loan above a thin remainder. syrupUSDC's equivalent is **1,354 including the Liquidity bucket**, across 16 borrowers. **syrupUSDT remains the more concentrated of the two, by a smaller margin than a single-name comparison suggests — the HHI gap is wider than the top-1 gap, and it is the honest one.**

**The buffer compounds it.** syrupUSDT's Liquidity bucket is about **3.3%** of book against syrupUSDC's **6.1%** — so the more concentrated pool carries roughly half the relative cushion. That is a comparison of *relative size only*: as both reports are careful to say, the Liquidity bucket is pool-owned strategy positions, nominally redeemable, **not idle cash**.

✅ **Worth stating plainly alongside all of that: credit quality is clean on both pools — zero impaired, zero called, zero defaulted.** The concentration described here is a structural exposure, not a problem currently manifesting. And because the same borrowers borrow from BOTH pools, holding both syrupUSDC and syrupUSDT together does NOT diversify your credit exposure to those entities — it concentrates them.

**Loan count is the other half of the picture, and it is larger than a headline concentration figure suggests.** Measured 2026-09-06, syrupUSDT's book is **18 loans across 9 borrowers**, against **35 loans across 16 borrowers** for syrupUSDC — on a pool roughly 41% the size. So syrupUSDT carries about half the borrowers on 41% of the principal: **more concentrated per dollar, but not a handful of loans.** Fewer borrowers still means fewer repayment events arriving to refill the queue that services redemptions, and it is part of why this report's **Underlying, Liquidity and Redemption axes all sit below syrupUSDC's** despite identical contracts, identical audits and the same curator. **Loan counts turn over; the smaller-book pattern is the durable feature**, and current counts are live on the dashboard.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 8.5 | NAV-accruing share, organic yield, zero principal losses to date across the Syrup product line. Same as syrupUSDC — the share price only climbs in normal operation, and the path to a drawdown is a credit loss, scored under Underlying. |
| Backing | 6.0 | Loan book fully enumerated and reconciling to deployed principal exactly, with zero impaired or defaulted. ⚠️ **The cap is collateral VISIBILITY, not the collateral ratio.** Argued under [2 · Backing](#2--backing--60) |
| Liquidity & Exit | 6.0 | **Scored on the worse of the two legs.** Venue depth is the binding one at 6.0: a materially smaller Ethereum pool than syrupUSDC, higher aggregator slippage and longer queue cadence at institutional sizing. The primary leg — permissionless mint and redeem at the vault layer, no KYC — scores 6.5 and is not what sets the axis. Free liquidity has been running under 2%, where our monitor flags exits as forced into the queue. |
| Dependencies | 5.0 | Maple Labs as operator, the Pool Delegate's discretion over origination, the shared Liquidity-layer custody addresses common to both pools, and Maple's GraphQL as the only source of per-loan collateral. ⚠️ **Cross-pool: one borrower is 24.19% of this pool and 10.43% of syrupUSDC, for 14.43% of the family loan book** — an exposure neither pool's standalone view shows. |
| Contract & Admin | 4.5 | ERC-4626 standard, 8+ audits including Spearbit and Trail of Bits, $1M+ Immunefi bounty. ⚠️ **The 3-day governance delay is a detection window, not a gate, and two faster paths sit beside it.** A hand-walk of the authority topology returns six Ethereum paths. **The `pause` layer is the pool delegate's own EOA — threshold 1, no delay — over the contract that processes every redemption**, and it does not need to be compromised to bite: **inaction is enough.** ⚠️ **The multisig path is the fast one, which is the opposite of the usual shape:** the `securityAdmin` Safe (3-of-6) upgrades the PoolManager **undelayed**, while the single-key route waits 7 days. And a role update is the one class the canceller may not cancel, so the 3-day delay tells you a change is coming rather than stopping it. ✅ **What holds this at 4.5 rather than lower: upgrades are capped to Maple-published implementations** — registering a new one is `onlyGovernor` — alongside 8+ audits and a $1M+ bug bounty. ⚠️ **The code half does not lift it. Audits do not offset an authority path**; they reduce the chance the code is wrong, not the chance someone with a key uses it. |
| Issuer | 5.5 | Same Maple Labs Cayman entity as syrupUSDC, same audit profile, ~3-year clean record across the Syrup product line. This axis scores the **entity**, so it is deliberately identical to [syrupUSDC](/reports/syrupusdc/); per-pool differences belong under Contract & Admin. |
| **Overall** | **6.0** | ⚠️ **Held, and under review.** The Contract & Admin re-scope lowered the axis mean to **5.92**, so this number now sits **+0.08 above its own axes** — contrary to the at-or-below convention applied elsewhere in this coverage. **It is held rather than adjusted because no one has re-derived it, and inventing a figure here would publish something nobody computed.** The axes above are current; this cell is the one to treat as pending |

**A note on the axes.** This report scores on the six-axis core — **Stability · Backing · Liquidity & Exit · Dependencies · Contract & Admin · Issuer** — the same frame as every other vault-share report on this site.

⚠️ **Two things about that frame matter for reading the table.** **Backing is newly scored here**: the earlier rubric had no reserve axis at all, so the loan book that constitutes the entire asset was graded on everything except itself. And **Liquidity & Exit covers both exit paths and is scored on the worse one, never the average** — venue depth and primary redemption are stated separately in that row, because averaging them would hide which half set the number. `redemption_score` is retained as the evidence behind that axis rather than rendered as its own row.

## 1 · Stability — 8.5

### What you actually earn

**~4.5–5% APY** (verified live from Maple's GraphQL `syrupGlobals.apyTimeSeries`). Same yield mechanics as syrupUSDC: borrower interest, net of Maple's protocol fee + 3.33% delegate fee.

At ~4.5–5%, syrupUSDT sits **above the comparable USD-yield set**: 3-month T-bills are around 3.7–4.0% (US Treasury fiscal data, March 2026 average 3.70%), tokenized T-bill products (BUIDL, USTB, USYC, Ondo USDY) net ~3.5–4.0% after management fees, and onchain stablecoin lending on Aave V3 / Morpho is in the 3.5–4.5% range (currently elevated from the mid-April rsETH/Kelp DAO incident, and still under 5%). That's a ~50–100 bp spread above T-bills — appropriate compensation for institutional credit risk rather than a yield-chase number.

## 2 · Backing — 6.0

The loan book is fully enumerated and reconciles to the pool's deployed principal exactly — 18 loans, 9 borrowers, $392,718,462.42, zero residual — with zero impaired, called or defaulted. ⚠️ **The cap on this axis is collateral VISIBILITY, not the collateral ratio.** Per-loan collateral comes from Maple's GraphQL API, which returns nothing for the seven loans recovered in the 2026-09-06 reconciliation, and the loan contracts carry no on-chain collateral field — **so collateral is priced over 63.2% of the book and the headline ratio is computed on that subset.** Existence and principal are verified; collateral is not. The visible book is also **96.7% crypto** (BTC 74.4%, XRP 22.3%), which is half a point below syrupUSDC on the same axis.

## 3 · Liquidity & Exit — 6.0

Two paths, same mechanics as syrupUSDC, but smaller pool depth:

**1. DEX aggregator (preferred for retail).** Use KyberSwap, 1inch, or any DEX aggregator. Smaller pool means materially shallower DEX depth than syrupUSDC's low-bps base case — expect higher slippage at any given notional size.

**2. Direct redemption.** Submit to the WithdrawalManager; processed at NAV from free pool USDT. Same cycle-based queue as syrupUSDC.

For sizing above the low retail range (~$50K+), you'll likely use the queue. Stress-case redemption depth is bound by loan-repayment cadence on the smaller principal base — expect queue latency of weeks rather than days for institutional sizes during correlated outflow stress.

**Free liquidity is the number that decides how quickly the queue clears, and this pool runs it thinner than syrupUSDC.** Both pools sit around 97% deployed into loans, so the uncommitted cash available to settle redemptions immediately is a low single-digit percentage of the pool in both cases. But syrupUSDT has been running at the bottom of that range — under 2% — where our monitor flags exits as *forced into the queue*, while syrupUSDC has been sitting in the 2–5% band where the flag reads only that large exits will queue. Live figures on the dashboard; the durable point is that the same architecture, run on a smaller pool with a five-loan book, leaves less cash standing between a redemption request and a wait.

**The credit read itself is reassuring, and worth separating from the exit question.** At the August 2026 check the Syrup family's loans-only collateral ratio came in at **175%** — above the 145–170% band these reports describe as typical — with pool collateral ratio at 100% and **zero** unrealized losses. No loan is impaired, called, or in default. Nothing about the loan book deteriorated; what this report changed in August is that redemption finally has a score of its own.

## 4 · Dependencies — 5.0

**What these pools depend on, as distinct from what backs them.** The operator is **Maple Labs**; origination is at the **Pool Delegate's discretion**; the **Liquidity-layer custody addresses are shared across both pools**; and **Maple's GraphQL is the only source of per-loan collateral data**, so collateral visibility depends on a single off-chain endpoint.

⚠️ **The cross-pool exposure is the part neither pool's standalone view shows.** One borrower is **24.19% of this pool** and **10.43% of syrupUSDC** — **14.43% of the family loan book** across the two pools.

### Cross-pool concentration: one product, two denominations

Maple presents syrupUSDC and syrupUSDT as a single Syrup credit line offered in two stable denominations — not two independent credit baskets. A Syrup loan is offered to one institutional borrower across the family rather than partitioned per pool, so the borrower set is **shared by design**. Choosing syrupUSDT vs syrupUSDC is a choice of denomination, not an independent credit pick.

That makes the right sizing unit the **family loan book**, not the per-pool number. Syrup runs a small borrower set (**9 in syrupUSDT, 16 in syrupUSDC** as at 2026-09-06; the overlap is discussed below), so expect single-counterparty concentration above the ~10%-per-counterparty limit common in institutional credit frameworks. That's the structural product feature, not a temporary state — borrower turnover happens but the small-set + overlap pattern persists.

**Measured 2026-09-06, on a family loan book of $1.35B** — $392.72M in syrupUSDT plus $958.76M in syrupUSDC, each reconciling exactly to its pool's deployed principal with zero residual:

| Family borrower | syrupUSDT | syrupUSDC | Combined | % of $1.35B family book |
|---|---:|---:|---:|---:|
| `0x198aEC3c…529A` | — | $214.0M | **$214.0M** | **15.83%** |
| `0x09b845bb…6B8a` | — | $200.0M | **$200.0M** | **14.80%** |
| `0xb99a2c4C…bcF5` | **$95.0M** | **$100.0M** | **$195.0M** | **14.43%** |
| `0x8669F318…f1e9` | $55.2M | $96.6M | $151.8M | 11.23% |
| `0x282B6cca…b30c` | — | $100.0M | $100.0M | 7.40% |
| `0x8fee157C…2628` | $92.2M | — | $92.2M | 6.82% |
| `0xB62446A8…D505` | $12.0M | $65.5M | $77.5M | 5.73% |

**Top-three family borrowers are about 45% of the family loan book, and the single largest is 15.83%** — both above the 10%-per-counterparty limit common in institutional credit frameworks.

⚠️ **The row that matters most for anyone holding both pools is the third.** `0xb99a2c4C…bcF5` is **syrupUSDT's single largest borrower at 24.19% of that pool**, and separately holds **$100M in syrupUSDC**, where it ties for third at 10.43%. **Combined it is 14.43% of the family book — a number neither pool's own page shows.** Per-pool sizing reads this as a 24% exposure and a 10% exposure; it is one counterparty at 14.4% of everything.

⚠️ **Note which direction each figure moved.** The reconciliation *lowered* concentration inside each pool and *raised* the visible cross-pool exposure, because three of the four recovered syrupUSDC loans went to borrowers already on the list. **A correction is not automatically good news for every reading of the book.**

The Liquidity layer (PYUSD/AMM custody) is also shared across the family — a Maple-firm-level custody event affects both pools.

**Sizing implication:** treat a combined syrupUSDC + syrupUSDT position as one Syrup-family allocation against one shared borrower set, and apply per-counterparty exposure limits at the family level rather than per-pool. Independent per-pool sizing systematically under-weights the real per-borrower concentration. Live family concentration: see the per-pool dashboards linked below for current borrower breakdown.

## 5 · Contract & Admin — 4.5

### What the contracts are doing

Same architecture as syrupUSDC. ERC-4626 vault. Borrowers post collateral that's held off-chain by custodians under Pool Delegate policy. The smart contract handles loan accounting, payment scheduling, and time-based default triggering — but the credit-relevant decisions (who to lend to, on what terms, when to call) are human-discretionary at the Pool Delegate level.

The Pool Delegate is a single externally-owned address (`0x93aA06F8...501A`, single key) — different EOA from syrupUSDC's (`0xC1e1...49f`), but the same firm runs both. Maple's first-loss cover requirement for the pool is currently $0; depositors absorb credit losses directly.

## 6 · Issuer — 5.5

### Audits & security

Same audit profile as syrupUSDC: 8+ audits, Spearbit + Trail of Bits on the v2/Syrup contracts, $1M+ Immunefi bounty, ERC-4626 standard architecture. Both pools run on the same audited contract codebase.

## Who it's for

Allocators who already hold or are sizing into syrupUSDC and want USDT-denominated exposure to the same Maple credit framework. Comfortable for retail and low-institutional positions willing to accept higher per-pool concentration than syrupUSDC. Not a yield-chase product — competing with USD-benchmark T-bills on yield while accepting credit + custody + governance risks.

## Who should avoid

- Anyone holding syrupUSDC and looking for a "diversification" sister product — the cross-pool borrower overlap means it concentrates rather than diversifies for the family's biggest borrowers
- Position sizes above the low-MM range without explicit queue tolerance — the smaller pool is queue-bound earlier than syrupUSDC at proportional sizes
- Anyone needing the largest single-borrower exposure to stay below 20% of pool — syrupUSDT's largest borrower is **24.19%** of pool

## What to watch

- **Per-pool concentration.** Largest borrower is **24.19%** of pool, HHI **1,876** across 9 borrowers. Watch the live dashboard for changes.
- **Cross-pool concentration if you also hold syrupUSDC.** The largest cross-pool borrower is **14.43% of the family loan book** and the family top-three about **45%**, both above the 10%-per-counterparty norm (live figures on the dashboard). Liquidity layer custody is also shared between pools. Compute combined per-borrower exposure rather than treating the pools as independent.
- **Pool Delegate roster changes.** Same Pool Delegate firm runs both pools but with different operational EOAs.

## What the collateral figures do and do not cover

⚠️ **The loan-book reconciliation established existence and principal. It did not establish collateral.** Per-loan collateral is sourced from Maple's GraphQL API, which **returns no records for the seven recovered loans**, and the open-term loan contracts carry no on-chain collateral field. **So per-loan collateral is priced on 63.2% of syrupUSDT's book, and about 90.8% of syrupUSDC's**, and the headline collateral ratios are computed over those visible subsets.

**That changes what the uncovered portion means rather than how large it is.** It is now *seen and flagged healthy on the on-chain risk flags, but unpriced for collateral* — not *unknown to exist*. All seven recovered loans read `isImpaired=false`, `isCalled=false` and `isInDefault=false`. **A collateral ratio quoted for this pool describes the part of the book Maple's API will describe, and that is worth knowing before it is compared against a pool with fuller coverage.**

## Contracts, and what a loss actually falls on

**The addresses that matter, read on Ethereum:**

```
Pool (ERC-4626)      0x356B8d89c1e1239Cbbb9dE4815c39A1474d5BA7D
PoolManager          0x0cdA32E08B48bFDDbc7eE96B44b09cf286F9E21a
OpenTermLoanManager  0x616022E54324eF9c13B99c229Dac8ea69AF4FAFf   100% of pool TVL
Pool Delegate (EOA)  0x93aA06F8a7bB4da3Eb0DD5A5a38C01A7EB35501A   ← the undelayed pause key
PoolDelegateCover    0x610d99d86d48b385b2ed17a0063e53B5c98E15A1   balance $0
Underlying           0xdAC17F958D2ee523a2206206994597C13D831ec7   USDT
```

⚠️ **Depositors are first-loss, and the cover contract is empty.** Maple's `minCoverAmount` for this pool is **0**, and `PoolDelegateCover` holds **zero USDT** — so there is no delegate capital standing between a borrower default and the pool's NAV. **A default writes down depositors directly.** That is the design, not a lapse, but it is the fact that makes per-borrower concentration the binding number rather than an abstract one.

## Live dashboard

A live monitoring view is available at [tidresearch.com/dashboards/?asset=syrupusdt](https://tidresearch.com/dashboards/?asset=syrupusdt) — refreshed hourly from on-chain reads. Separate **Loan Book** and **Liquidity Layer** panels show third-party credit health vs pool-owned strategy custody, with the shared custody addresses surfaced. The Cross-Pool Family panel (also rendered on the syrupUSDC page) surfaces cross-pool concentration metrics live on a Loans-only basis. Sister page: [syrupUSDC dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc).

## A note on Maple's history

Maple v1 (2021–2022) lent on an undercollateralized basis and lost LPs ~$50M+ during the 2022 credit cycle. The Syrup product line is Maple's structural response — overcollateralized loans on the third-party credit book, vetted Pool Delegates, active margin calls. Same legal entity (Maple Labs, Cayman Islands), same broader team. The v2 Syrup product has run cleanly for ~3 years through May 2026. This report treats it as background context rather than a leading risk factor. See [syrupUSDC retail report](/reports/syrupusdc/) for the same context (applies equally to both pools).

## Revision history

- **2026-09-06 — the authority topology is walked, and the 3-day governance delay is a detection window rather than a gate.** ⚠️ **The `pause` layer is the Pool Delegate's own EOA — threshold 1, no delay — over the contract that processes every redemption, and it needs no compromise to bite: inaction is enough.** ⚠️ **The multisig path is the faster one:** the `securityAdmin` Safe (3-of-6) upgrades the PoolManager **undelayed**, while the single-key route waits 7 days. A role update is the one class the canceller may not cancel. ✅ Upgrades are capped to Maple-published implementations (`registerImplementation` is `onlyGovernor`), which with 8+ audits and a $1M+ bounty is what holds Contract & Admin at 4.5 rather than lower. **Both pools measure the same on this axis — same six paths, same thresholds, same delay flags.** Dependencies moves to 5.0 and Backing is scored for the first time at 6.0, capped by collateral visibility rather than by the collateral ratio.
- **2026-09-06 — the concentration figures were measured against an incomplete loan book and were too high in the risk-increasing direction.** Enumerating from the loan manager's `PaymentAdded` events reconciles the book to the pool's deployed principal exactly, with zero residual: **18 active loans across 9 borrowers totalling $392,718,462.42**, where the previous read saw 11 loans, 7 borrowers and $248.07M. Seven active positions worth **$144,645,910.05** were missing. **Largest borrower 24.19% (published as 38.3%), top-3 66.77% (published as 90.77%), HHI 1,876 (published as 2,911).** ⚠️ **The ladder is flatter than described, not thinner:** 24.19 / 23.49 / 19.10 / 14.05 / 12.73, so removing the largest loan leaves eight borrowers and a 23.5% top name. syrupUSDT is still the more concentrated of the two pools; the sibling gap on the largest borrower is about **two points, not the fifteen or twenty-five previously published**. ⚠️ **This is the second correction on this claim in the same direction.** Scores unchanged: the axes that cited concentration are held on the measured borrower-set spread, which is now what carries them. The largest cross-pool borrower is **$195M, 14.43% of the $1.35B family loan book** — a figure neither pool's own page shows.
- **2026-08-18 — moved onto the correct scoring rubric; no score changed.** This report was filed as a stablecoin and rendered the stablecoin axes (peg mechanism, backing). syrupUSDT is a **vault share**, and the practical cost was that the stablecoin rubric has **no redemption axis** — so for a vault roughly 97% deployed into loans, and one running free liquidity thinner than its sibling, the binding retail question was discussed in prose but never scored. The page now carries Stability 8.5 / Contract & Admin 6.0 / **Redemption 6.5** / Underlying 6.5 / Liquidity 6.0 / Issuer 5.5, Overall unchanged at **6.0**. Stability, Contract & Admin and Redemption are newly *visible*, not newly *assigned*; every axis published on both sides already agreed. Backing 6.5 became Underlying 6.5, which now also carries the verifiability question backing used to answer. Figures refreshed to the August 2026 check: the credit read is **reassuring** — loans-only collateral ratio 175%, above its band, pool collateral ratio 100%, zero unrealized losses — and the structural fact behind this pool's Underlying, Liquidity and Redemption axes sitting below its sibling's is its smaller borrower set on a smaller pool.


---

*Revision history: 2026-08-23 — concentration figures measured and quantified; no score change on either pool. ⚠️ Those figures were computed against an incomplete enumeration of the loan book and were too high; see the 2026-09-06 entry above for the measured replacements. Credit quality was clean on both pools at that read — zero impaired, zero called, zero defaulted — and remains so. syrupUSDT's Liquidity bucket is about **3.3% of book against syrupUSDC's 6.1%**, the more concentrated pool carrying roughly half the relative cushion, stated as relative size only since that bucket is pool-owned strategy positions rather than idle cash. ⚠️ **Unre-verified rather than refuted:** whether the named cross-pool borrowers are the same legal entities has not been checked — the overlap claim stands unchecked, not disproved. `last_verified` is not bumped; only the concentration metrics were read.*
