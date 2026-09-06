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
companion_report: "syrupusdt-full"
date: "2026-05-03"
last_verified: "2026-08-18"
last_revised: "2026-09-06"
featured: false
production: true
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 436000000
volatility_score: 8.5
structural_score: 6.0
redemption_score: 6.5
underlying_score: 6.5
liquidity_score: 6.0
issuer_score: 5.5
overall_score: 6.0
---

# syrupUSDT — Retail Risk Report

**Moderate risk · 6.0/10 · Sibling product to [syrupUSDC](/reports/syrupusdc/)**

*Live pool backing, peg deviation, and exit-liquidity tiers are on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt).*

> *What's pinned in this report is structural risk — architecture, the issuer menu, the risk axes, and the scores. Current magnitudes (pool split, per-issuer allocation, collateral ratio, concentration, exit tiers) drift weekly and are live on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt). This report is written to stay correct across that drift.*

| Yield | Exit method | Primary redemption | Pool size | Chains |
|---|---|---|---|---|
| ~4.5–5% live (organic loan interest) | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | Materially smaller than syrupUSDC (live on the dashboard) | Ethereum primary |

## Summary

syrupUSDT is the USDT-denominated sibling of syrupUSDC in Maple Finance's "Syrup" institutional credit product line. Same Maple architecture, same Pool Delegate firm, same Maple Labs entity — but materially smaller pool than syrupUSDC (live sizes on the dashboards). Yield is real (interest paid by real institutional borrowers), zero principal losses since launch, and the product runs on the same audited v2 contract codebase as its USDC sibling.

**Pool composition (structure verified against Maple's own AUM Details page)**: roughly 85–90% Loans (third-party institutional credit, BTC-heavy + XRP at 125–150% init level) + roughly 10–15% Liquidity (pool-owned PYUSD/USDC-AMM/USDT-AMM positions, a thinner Liquidity layer than syrupUSDC); the dollar magnitudes shift with the book and are surfaced live on the dashboard rather than pinned here. Note the 125–150% figure is each loan's *funding* collateral level, not a live health reading — the buffer that matters is how close current collateralization sits to par (100%), which the dashboard tracks. The Liquidity layer is at-par with the underlying asset and routes through Maple's lending infrastructure as accounting wrapper, but is functionally pool-owned strategy custody, NOT third-party credit. "Overcollateralized at all times" applies to the loan book; the Liquidity layer is intentionally at par.

The catch: **syrupUSDT is more concentrated than syrupUSDC at the per-pool level, AND it shares borrowers with syrupUSDC.** ⚠️ **Measured 2026-09-06 against the pool's full deployed principal of $392.72M: the largest borrower is 24.19%, against 22.32% in syrupUSDC.** **The conclusion is unchanged — syrupUSDT is the more concentrated pool — but the margin is about two points, not the double-digit gap this comparison has previously carried.** A single borrower default here writes down roughly a quarter of the principal in one event.

**The shape of that concentration is flat rather than thin.** syrupUSDT's Herfindahl index is **1,876** — "moderate" on its own bucket labels — with the top three borrowers at **66.77% across nine**. The ladder runs **24.19% / 23.49% / 19.10% / 14.05% / 12.73%**: removing the largest loan leaves eight borrowers and a new top name at 23.5%, so this is a pool with several comparable exposures rather than one dominant loan above a thin remainder. syrupUSDC's equivalent is **1,354 including the Liquidity bucket**, across 16 borrowers. **syrupUSDT remains the more concentrated of the two, by a smaller margin than a single-name comparison suggests — the HHI gap is wider than the top-1 gap, and it is the honest one.**

**The buffer compounds it.** syrupUSDT's Liquidity bucket is about **3.3%** of book against syrupUSDC's **6.1%** — so the more concentrated pool carries roughly half the relative cushion. That is a comparison of *relative size only*: as both reports are careful to say, the Liquidity bucket is pool-owned strategy positions, nominally redeemable, **not idle cash**.

✅ **Worth stating plainly alongside all of that: credit quality is clean on both pools — zero impaired, zero called, zero defaulted.** The concentration described here is a structural exposure, not a problem currently manifesting. And because the same borrowers borrow from BOTH pools, holding both syrupUSDC and syrupUSDT together does NOT diversify your credit exposure to those entities — it concentrates them.

**Loan count is the other half of the picture, and it is larger than a headline concentration figure suggests.** Measured 2026-09-06, syrupUSDT's book is **18 loans across 9 borrowers**, against **35 loans across 16 borrowers** for syrupUSDC — on a pool roughly 41% the size. So syrupUSDT carries about half the borrowers on 41% of the principal: **more concentrated per dollar, but not a handful of loans.** Fewer borrowers still means fewer repayment events arriving to refill the queue that services redemptions, and it is part of why this report's **Underlying, Liquidity and Redemption axes all sit below syrupUSDC's** despite identical contracts, identical audits and the same curator. **Loan counts turn over; the smaller-book pattern is the durable feature**, and current counts are live on the dashboard.

## What you actually earn

**~4.5–5% APY** (verified live from Maple's GraphQL `syrupGlobals.apyTimeSeries`). Same yield mechanics as syrupUSDC: borrower interest, net of Maple's protocol fee + 3.33% delegate fee.

At ~4.5–5%, syrupUSDT sits **above the comparable USD-yield set**: 3-month T-bills are around 3.7–4.0% (US Treasury fiscal data, March 2026 average 3.70%), tokenized T-bill products (BUIDL, USTB, USYC, Ondo USDY) net ~3.5–4.0% after management fees, and onchain stablecoin lending on Aave V3 / Morpho is in the 3.5–4.5% range (currently elevated from the mid-April rsETH/Kelp DAO incident, and still under 5%). That's a ~50–100 bp spread above T-bills — appropriate compensation for institutional credit risk rather than a yield-chase number.

## Cross-pool concentration: one product, two denominations

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

## How exit works

Two paths, same mechanics as syrupUSDC, but smaller pool depth:

**1. DEX aggregator (preferred for retail).** Use KyberSwap, 1inch, or any DEX aggregator. Smaller pool means materially shallower DEX depth than syrupUSDC's low-bps base case — expect higher slippage at any given notional size.

**2. Direct redemption.** Submit to the WithdrawalManager; processed at NAV from free pool USDT. Same cycle-based queue as syrupUSDC.

For sizing above the low retail range (~$50K+), you'll likely use the queue. Stress-case redemption depth is bound by loan-repayment cadence on the smaller principal base — expect queue latency of weeks rather than days for institutional sizes during correlated outflow stress.

**Free liquidity is the number that decides how quickly the queue clears, and this pool runs it thinner than syrupUSDC.** Both pools sit around 97% deployed into loans, so the uncommitted cash available to settle redemptions immediately is a low single-digit percentage of the pool in both cases. But syrupUSDT has been running at the bottom of that range — under 2% — where our monitor flags exits as *forced into the queue*, while syrupUSDC has been sitting in the 2–5% band where the flag reads only that large exits will queue. Live figures on the dashboard; the durable point is that the same architecture, run on a smaller pool with a five-loan book, leaves less cash standing between a redemption request and a wait.

**The credit read itself is reassuring, and worth separating from the exit question.** At the August 2026 check the Syrup family's loans-only collateral ratio came in at **175%** — above the 145–170% band these reports describe as typical — with pool collateral ratio at 100% and **zero** unrealized losses. No loan is impaired, called, or in default. Nothing about the loan book deteriorated; what this report changed in August is that redemption finally has a score of its own.

## What the contracts are doing

Same architecture as syrupUSDC. ERC-4626 vault. Borrowers post collateral that's held off-chain by custodians under Pool Delegate policy. The smart contract handles loan accounting, payment scheduling, and time-based default triggering — but the credit-relevant decisions (who to lend to, on what terms, when to call) are human-discretionary at the Pool Delegate level.

The Pool Delegate is a single externally-owned address (`0x93aA06F8...501A`, single key) — different EOA from syrupUSDC's (`0xC1e1...49f`), but the same firm runs both. Maple's first-loss cover requirement for the pool is currently $0; depositors absorb credit losses directly.

## Audits & security

Same audit profile as syrupUSDC: 8+ audits, Spearbit + Trail of Bits on the v2/Syrup contracts, $1M+ Immunefi bounty, ERC-4626 standard architecture. Both pools run on the same audited contract codebase.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 8.5 | NAV-accruing share, organic yield, zero principal losses to date across the Syrup product line. Same as syrupUSDC — the share price only climbs in normal operation, and the path to a drawdown is a credit loss, scored under Underlying. |
| Contract & Admin | 6.0 | Same audit profile, ERC-4626 standard and governance timelock as syrupUSDC — literally the same timelock contract, a 3-day delay with a 24-hour floor beneath it — and the same Pool Delegate discretion with $0 first-loss cover. **Half a notch below syrupUSDC on per-pool concentration**, though ⚠️ **that margin is now about two points on the largest borrower — 24.19% against 22.32% — rather than the wide gap this axis was originally set against.** What still separates the two pools is the borrower-set spread (HHI 1,876 against 1,354) and the thinner liquidity cushion, not a dominant single loan. Custody addresses are shared with syrupUSDC under Maple operational control. |
| Redemption | 6.5 | **Newly visible on this page — see the note below.** Same two permissionless paths as syrupUSDC, no KYC on either, but against a smaller principal base. That is the whole difference: with a thinner pool and a thinner Liquidity layer, free cash available to settle the queue is smaller, so the queue binds sooner and for longer. At retail size the aggregator route works; at institutional size expect queue latency measured in weeks rather than days during correlated outflows. |
| Underlying | 6.5 | The collateral is the loan book: roughly 85–90% Loans (institutional credit against BTC-heavy plus XRP collateral at 125–150% funding-time level) plus a thinner 10–15% Liquidity layer of pool-owned PYUSD/USDC-AMM/USDT-AMM positions held at par. Loans-only collateral ratio was **above** its 145–170% band at the August 2026 check, with zero unrealized losses. Held half a notch below syrupUSDC's 7.0 on **measured concentration** — HHI **1,876 against 1,354**, and **9 borrowers against 16** on a pool 41% the size — so a single borrower default writes down a larger share of principal in one event. ⚠️ **The gap is narrower than this axis has previously rested on, and it is now carried by the borrower-set spread rather than by a dominant single loan.** Same off-chain-custody and public-data caveats as syrupUSDC, plus the collateral-visibility limit noted below. |
| Liquidity | 6.0 | Materially smaller Ethereum pool than syrupUSDC. Smaller depth; expect higher aggregator slippage and longer queue cadence at institutional sizing. **Permissionless mint/redeem at the vault layer is the same as syrupUSDC** — no KYC gating. The smaller pool caps the score below syrupUSDC's 7.5 but the access pattern is still a meaningful advantage over KYC-gated peers. |
| Issuer | 5.5 | Same Maple Labs Cayman entity as syrupUSDC, same audit profile, ~3-year clean record across the Syrup product line. This axis scores the **entity**, so it is deliberately identical to [syrupUSDC](/reports/syrupusdc/); per-pool differences belong under Contract & Admin. |
| **Overall** | **6.0** | Slightly worse than syrupUSDC's 6.75 — primarily due to higher per-pool concentration and shallower exit liquidity |

**A note on the axes, because they changed in August 2026.** This report used to score on the stablecoin rubric — peg mechanism and backing — which was the wrong lens. syrupUSDT is not a pegged dollar; it is a **share in a lending vault** whose price tracks NAV, and it now scores on the same six axes as every other vault-share report on this site.

The concrete cost of the old rubric was that **it had no redemption axis.** For a vault about 97% deployed into loans, "can I get my money out, and how fast?" is the binding question, and on this pool more so than on syrupUSDC. The material was always here in prose; it just never reached a score. **Redemption 6.5 is not a new judgement — it is a number that existed internally and was never shown.** No score was changed to fit the new table; every axis published on both sides already agreed. The old backing axis became **Underlying**, which owns collateral quality and now also carries the verifiability question backing used to answer.

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

## Live dashboard

A live monitoring view is available at [tidresearch.com/dashboards/?asset=syrupusdt](https://tidresearch.com/dashboards/?asset=syrupusdt) — refreshed hourly from on-chain reads. Separate **Loan Book** and **Liquidity Layer** panels show third-party credit health vs pool-owned strategy custody, with the shared custody addresses surfaced. The Cross-Pool Family panel (also rendered on the syrupUSDC page) surfaces cross-pool concentration metrics live on a Loans-only basis. Sister page: [syrupUSDC dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc).

## A note on Maple's history

Maple v1 (2021–2022) lent on an undercollateralized basis and lost LPs ~$50M+ during the 2022 credit cycle. The Syrup product line is Maple's structural response — overcollateralized loans on the third-party credit book, vetted Pool Delegates, active margin calls. Same legal entity (Maple Labs, Cayman Islands), same broader team. The v2 Syrup product has run cleanly for ~3 years through May 2026. This report treats it as background context rather than a leading risk factor. See [syrupUSDC retail report](/reports/syrupusdc/) for the same context (applies equally to both pools).

## Revision history

- **2026-09-06 — the concentration figures were measured against an incomplete loan book and were too high in the risk-increasing direction.** Enumerating from the loan manager's `PaymentAdded` events reconciles the book to the pool's deployed principal exactly, with zero residual: **18 active loans across 9 borrowers totalling $392,718,462.42**, where the previous read saw 11 loans, 7 borrowers and $248.07M. Seven active positions worth **$144,645,910.05** were missing. **Largest borrower 24.19% (published as 38.3%), top-3 66.77% (published as 90.77%), HHI 1,876 (published as 2,911).** ⚠️ **The ladder is flatter than described, not thinner:** 24.19 / 23.49 / 19.10 / 14.05 / 12.73, so removing the largest loan leaves eight borrowers and a 23.5% top name. syrupUSDT is still the more concentrated of the two pools; the sibling gap on the largest borrower is about **two points, not the fifteen or twenty-five previously published**. ⚠️ **This is the second correction on this claim in the same direction.** Scores unchanged: the axes that cited concentration are held on the measured borrower-set spread, which is now what carries them. The largest cross-pool borrower is **$195M, 14.43% of the $1.35B family loan book** — a figure neither pool's own page shows.
- **2026-08-18 — moved onto the correct scoring rubric; no score changed.** This report was filed as a stablecoin and rendered the stablecoin axes (peg mechanism, backing). syrupUSDT is a **vault share**, and the practical cost was that the stablecoin rubric has **no redemption axis** — so for a vault roughly 97% deployed into loans, and one running free liquidity thinner than its sibling, the binding retail question was discussed in prose but never scored. The page now carries Stability 8.5 / Contract & Admin 6.0 / **Redemption 6.5** / Underlying 6.5 / Liquidity 6.0 / Issuer 5.5, Overall unchanged at **6.0**. Stability, Contract & Admin and Redemption are newly *visible*, not newly *assigned*; every axis published on both sides already agreed. Backing 6.5 became Underlying 6.5, which now also carries the verifiability question backing used to answer. Figures refreshed to the August 2026 check: the credit read is **reassuring** — loans-only collateral ratio 175%, above its band, pool collateral ratio 100%, zero unrealized losses — and the structural fact behind this pool's Underlying, Liquidity and Redemption axes sitting below its sibling's is its smaller borrower set on a smaller pool.

---

For institutional-grade risk analysis — Pool Delegate identities, contract addresses, custody EOA inventory, on-chain monitoring patterns — the [institutional version](/reports/syrupusdt-full/) is available.

---

*Revision history: 2026-08-23 — concentration figures measured and quantified; no score change on either pool. ⚠️ Those figures were computed against an incomplete enumeration of the loan book and were too high; see the 2026-09-06 entry above for the measured replacements. Credit quality was clean on both pools at that read — zero impaired, zero called, zero defaulted — and remains so. syrupUSDT's Liquidity bucket is about **3.3% of book against syrupUSDC's 6.1%**, the more concentrated pool carrying roughly half the relative cushion, stated as relative size only since that bucket is pool-owned strategy positions rather than idle cash. ⚠️ **Unre-verified rather than refuted:** whether the named cross-pool borrowers are the same legal entities has not been checked — the overlap claim stands unchecked, not disproved. `last_verified` is not bumped; only the concentration metrics were read.*
