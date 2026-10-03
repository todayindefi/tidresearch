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
# 2026-09-24 pass re-measured the book (contracted 37.9% to $244,037,062.37) and
# re-cut concentration on a CORRECTED basis — by distinct borrower on the lending
# subset, not by position on the inclusive book. ⚠️ Those figures are NOT
# comparable with the 2026-09-06 ones: different construction AND a book that
# shrank by more than a third. Do not diff them. Per-loan collateral WAS also
# re-measured on 2026-09-24 and is now priced on 100% of positions. The body states
# that split at the top. ⚠️ riskAnalyst moved THEIR copy to
# 2026-09-07 under their own rule (last_verified moves when SOMETHING was
# re-measured). The conventions differ on purpose: their field ranks a refresh
# queue, ours tells a reader how old a claim is, and our card already renders
# BOTH dates so holding conceals nothing.
last_verified: "2026-08-18"
last_revised: "2026-10-03"
featured: false
production: true
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 436000000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Migrated at this refresh, per the refresh-driven
# policy. ⚠️ backing_score was MISSING ENTIRELY and could not render on the old
# vault-share rubric — adding it without the frame would have been schema-legal
# and invisible.
#   backing_score 6.0. ⚠️ CAPPED BY COLLATERAL CONCENTRATION, NOT VISIBILITY.
#     The old visibility cap (63.2% coverage) is VOID: the 2026-09-24 read
#     prices collateral on 100% of positions, summing to principal_total to
#     the cent. What holds the axis down now is that the lending book stands
#     on TWO crypto assets — BTC 70.48% and XRP 29.49% of principal_loans_only
#     — so the loans do not fail independently. ⚠️ Ruling ae33d05 (riskAnalyst,
#     2026-09-24): 6.0 HOLDS, because the 49.30% borrower is BTC-collateralised
#     at 157.9%. Borrower concentration is not loss concentration in a secured
#     book. ⚠️ Do NOT compare the crypto share to 2026-09-06: coverage moved
#     63.2 -> 100 AND the book shrank 37.9%. Two confounds, no trend.
#   underlying_score -> 4.0 renders as DEPENDENCIES. ⚠️ A BOUND, NOT A NEW
#     MEASUREMENT: this counterparty set CONTAINS USDT's, so it may not score
#     above USDT's own axis-4 4.0. Owner ruling 2026-10-03, riskAnalyst b304eb0.
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
# PARKED: six borrower addresses rendered as Borrower A-F — the truncated forms were unfalsifiable and no full forms are held [owner: riskAnalyst] [since: 2026-10-03]
underlying_score: 4.0
liquidity_score: 6.0
# PARKED: issuer_score 5.5 has never been independently derived — the audit/bounty facts removed from this row were never permitted to bear on it under the anti-halo rule, so withdrawing them exposed that the number itself is unsourced [owner: riskAnalyst] [since: 2026-10-03]
issuer_score: 5.5
overall_score: 6.0
---

# syrupUSDT — Risk Report

**Moderate risk · 6.0/10 · Sibling product to [syrupUSDC](/reports/syrupusdc/)**

*Live pool backing, peg deviation, and free-liquidity / withdrawal-queue state are on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt).* ⚠️ **A tiered exit ladder now exists for this pool, and it is expensive at every size.** All-in cost runs about **16.5 bps at $1,000 and 20.5 bps at $1,000,000** — roughly **six times** [syrupUSDC](/reports/syrupusdc/)'s at comparable notional. **The cost is nearly flat in size, so this is an execution-level problem rather than a depth one.**

> ⚠️ **What is current and what is not, because this page carries several dates.** **Re-measured 2026-09-24:** the loan book, enumerated from the loan manager's own payment events and reconciling to deployed principal with zero residual — **17 positions totalling $244,037,062.37**, of which **$187,087,047.37 is lending across 8 loan positions and six distinct borrowers**, and **$56,950,015.00 sits in 9 liquidity positions** — with every borrower-concentration figure below computed on the lending side, and the **admin and authority topology**, re-walked on-chain and unchanged, which is what sets Contract & Admin. **Also re-measured 2026-09-24:** per-loan collateral, priced on **100% of positions**. **Still dating from 2026-08-18 and not re-read:** the NAV mechanism, yield and APY, the liquidity depth ladders, the audit corpus, and the withdrawal-queue mechanics. ⚠️ **So `verified through` is the oldest date deliberately** — the concentration and authority material is current; the description of how the vault works is August's.

> *What's pinned in this report is structural risk — architecture, the issuer menu, the risk axes, and the scores. Current magnitudes (pool split, per-issuer allocation, collateral ratio, concentration, exit tiers) drift weekly and are live on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt). This report is written to stay correct across that drift.*

| Yield | Exit method | Primary redemption | Pool size | Chains |
|---|---|---|---|---|
| ~4.5–5% live (organic loan interest) | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | Materially smaller than syrupUSDC (live on the dashboard) | Ethereum primary |

## Summary

syrupUSDT is the USDT-denominated sibling of syrupUSDC in Maple Finance's "Syrup" institutional credit product line. Same Maple architecture, same Pool Delegate firm, same Maple Labs entity — but materially smaller pool than syrupUSDC (live sizes on the dashboards). Yield is real (interest paid by real institutional borrowers), zero principal losses since launch, and the product runs on the same audited v2 contract codebase as its USDC sibling.

**Pool composition (structure verified against Maple's own AUM Details page)**: roughly 85–90% Loans (third-party institutional credit, BTC-heavy + XRP at 125–150% init level) + roughly 10–15% Liquidity (pool-owned PYUSD/USDC-AMM/USDT-AMM positions, a thinner Liquidity layer than syrupUSDC); the dollar magnitudes shift with the book and are surfaced live on the dashboard rather than pinned here. Note the 125–150% figure is each loan's *funding* collateral level, not a live health reading — the buffer that matters is how close current collateralization sits to par (100%), which the dashboard tracks. The Liquidity layer is at-par with the underlying asset and routes through Maple's lending infrastructure as accounting wrapper, but is functionally pool-owned strategy custody, NOT third-party credit. "Overcollateralized at all times" applies to the loan book; the Liquidity layer is intentionally at par.

The catch: **syrupUSDT's lending is highly concentrated, AND it shares borrowers with syrupUSDC.** ⚠️ **Measured 2026-09-24 across distinct borrowers rather than individual loans: six borrowers hold the pool's $187,087,047.37 of lending, the largest at 49.30% and the top three at 92.16%.** A single default by the largest borrower writes down close to half the pool's lending in one event. ⚠️ **These figures are not comparable with syrupUSDC's published concentration.** At this read the two pools' numbers are built on different constructions, so a like-for-like sibling comparison is not available and none is drawn here.

**The shape of that concentration is one dominant exposure above a short tail.** Across distinct borrowers the ladder runs **49.30% / 29.50% / 13.36% / 6.41% / 1.41% / 0.02%**, and the Herfindahl index is **3,522** — **"highly concentrated"** on the standard bands. ⚠️ **The largest borrower's position is three separate loans**, so any view that ranks individual loans rather than counterparties understates it: removing that borrower leaves five, with the next at 29.50% of the lending book. ⚠️ **A further $56,950,015.00 sits in nine liquidity positions — 23.3% of the pool's total book.** Those are pool-owned strategy positions rather than loans, and folding them into a concentration ratio dilutes it heavily. **Quote which side of that line any syrupUSDT concentration figure is computed on.**

**The buffer compounds it.** syrupUSDT's Liquidity bucket is about **3.3%** of book against syrupUSDC's **6.1%** — so the more concentrated pool carries roughly half the relative cushion. That is a comparison of *relative size only*: as both reports are careful to say, the Liquidity bucket is pool-owned strategy positions, nominally redeemable, **not idle cash**.

✅ **Worth stating plainly alongside all of that: credit quality is clean on both pools — zero impaired, zero called, zero defaulted.** The concentration described here is a structural exposure, not a problem currently manifesting. And because the same borrowers borrow from BOTH pools, holding both syrupUSDC and syrupUSDT together does NOT diversify your credit exposure to those entities — it concentrates them.

**Position count is the other half of the picture, and it cuts against the headline rather than softening it.** Measured 2026-09-24, syrupUSDT's book is **17 positions — 8 loans and 9 liquidity positions** — but the lending sits with only **six distinct borrowers**, because the largest holds three separate loans. ⚠️ **Counting positions rather than counterparties makes this pool look better diversified than it is.** Few borrowers also means few repayment events arriving to refill the queue that services redemptions, and it is part of why this report's **Dependencies, Liquidity and Redemption axes all sit below syrupUSDC's** despite identical contracts, identical audits and the same curator. ⚠️ **syrupUSDC's counts are deliberately not quoted alongside these** — at this read the two pools' figures are built on different constructions and the comparison would not be like-for-like. **Position counts turn over; the small-borrower-set pattern is the durable feature**, and current counts are live on the dashboard.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 8.5 | NAV-accruing share, organic yield, zero principal losses to date across the Syrup product line. Same as syrupUSDC — the share price only climbs in normal operation, and the path to a drawdown is a credit loss, scored under Underlying. |
| Backing | 6.0 | Loan book fully enumerated and reconciling to deployed principal exactly, with zero impaired or defaulted, and collateral priced on **100% of positions**. ⚠️ **The cap is collateral CONCENTRATION: the lending book stands on two crypto assets, BTC 70.48% and XRP 29.49%.** Argued under [2 · Backing](#2--backing--60) |
| Liquidity & Exit | 6.0 | **Scored on the worse of the two legs.** The primary leg — permissionless mint and redeem at the vault layer, no KYC — scores 6.5 and is not what sets the axis. Venue depth is the binding one at 6.0. ⚠️ **Measured 2026-10-01, the exit is expensive at every size: all-in cost runs −16.50 bps at $1,000 and −20.52 bps at $1,000,000**, against syrupUSDC's +0.90 and −7.68 on the same convention in the same minute — roughly **six times costlier** at mid notional. ⚠️ **The cost barely responds to size** (about 4 bps across a 1000x range, better than syrupUSDC's 8.6), **so the binding problem is the execution level, not depth** — 2% and 50bps depth both floor at $1,000,000. ⚠️ **Every rung routes through a single Uniswap v4 pool** of roughly $5.0M reserve whose hook has not been inspected. ⚠️ **The cushion runs thin and variable:** a median of **0.89%** across 352 readings since 2026-09-11, under 2% in **61% of hours**, and **0.18% at the most recent reading**. **The 6.0 is unchanged** — the ladder confirmed what this axis already said rather than revising it. |
| Dependencies | 4.0 | ⚠️ **A bound, not a measurement: this counterparty set contains USDT's, so it cannot score above USDT's own Dependencies of 4.0** — itself an unenumerability score, since no full Tether audit has been completed and no custodian or banking counterparty is nameable. This pool stacks a second unenumerable set on top: no published borrower identities, collateral held off-chain by the delegate's custodian. ✅ **At the ceiling rather than below it** — ~19.74% of the book is a $50M at-par USDC position, so a fifth of the set is Circle rather than Tether, and this pool's own shares enumerate at 100% with $0.00 residual. Maple Labs as operator, the Pool Delegate's discretion over origination, the shared Liquidity-layer custody addresses common to both pools, and Maple's GraphQL as the only source of per-loan collateral. ⚠️ **Cross-pool: three of this pool's six borrowers also borrow from syrupUSDC, $304.3M between them and 26.25% of family lending** — an exposure neither pool's standalone view shows. |
| Contract & Admin | 4.5 | ERC-4626 standard. ⚠️ **The audit record does not reach this pool as deployed** — see below; **Trail of Bits should not be cited here**, having reviewed the V2 upgrade mechanism only to understand it and stating it did not look for security flaws. ⚠️ **The 3-day governance delay is a detection window, not a gate, and two faster paths sit beside it.** A hand-walk of the authority topology returns six Ethereum paths. **The `pause` layer is the pool delegate's own EOA — threshold 1, no delay — over the contract that processes every redemption**, and it does not need to be compromised to bite: **inaction is enough.** ⚠️ **The multisig path is the fast one, which is the opposite of the usual shape:** the `securityAdmin` Safe (3-of-6) upgrades the PoolManager **undelayed**, while the single-key route waits 7 days. And a role update is the one class the canceller may not cancel, so the 3-day delay tells you a change is coming rather than stopping it. ✅ **What holds this at 4.5 rather than lower: upgrades are capped to Maple-published implementations** — registering a new one is `onlyGovernor` — alongside 8+ audits and a $1M+ bug bounty. ⚠️ **The code half does not lift it. Audits do not offset an authority path**; they reduce the chance the code is wrong, not the chance someone with a key uses it. |
| Issuer | 5.5 | Same Maple Labs Cayman entity as syrupUSDC, ~3-year clean record across the Syrup product line. ⚠️ **Audits and the bounty are not credited here** — they are assurance about the code and belong to Contract & Admin. This axis scores the **entity**, so it is deliberately identical to [syrupUSDC](/reports/syrupusdc/); per-pool differences belong under Contract & Admin. |
| **Overall** | **6.0** | ⚠️ **Held, and under review.** The Contract & Admin re-scope lowered the axis mean to **5.92**, so this number now sits **+0.08 above its own axes** — contrary to the at-or-below convention applied elsewhere in this coverage. **It is held rather than adjusted because no one has re-derived it, and inventing a figure here would publish something nobody computed.** The axes above are current; this cell is the one to treat as pending |

**A note on the axes.** This report scores on the six-axis core — **Stability · Backing · Liquidity & Exit · Dependencies · Contract & Admin · Issuer** — the same frame as every other vault-share report on this site.

⚠️ **Two things about that frame matter for reading the table.** **Backing is newly scored here**: the earlier rubric had no reserve axis at all, so the loan book that constitutes the entire asset was graded on everything except itself. And **Liquidity & Exit covers both exit paths and is scored on the worse one, never the average** — venue depth and primary redemption are stated separately in that row, because averaging them would hide which half set the number. `redemption_score` is retained as the evidence behind that axis rather than rendered as its own row.

## 1 · Stability — 8.5

### What you actually earn

**~4.5–5% APY** (verified live from Maple's GraphQL `syrupGlobals.apyTimeSeries`). Same yield mechanics as syrupUSDC: borrower interest, net of Maple's protocol fee + 3.33% delegate fee.

At ~4.5–5%, syrupUSDT sits **above the comparable USD-yield set**: 3-month T-bills are around 3.7–4.0% (US Treasury fiscal data, March 2026 average 3.70%), tokenized T-bill products (BUIDL, USTB, USYC, Ondo USDY) net ~3.5–4.0% after management fees, and onchain stablecoin lending on Aave V3 / Morpho is in the 3.5–4.5% range (currently elevated from the mid-April rsETH/Kelp DAO incident, and still under 5%). That's a ~50–100 bp spread above T-bills — appropriate compensation for institutional credit risk rather than a yield-chase number.

## 2 · Backing — 6.0

The loan book is fully enumerated and reconciles to the pool's deployed principal exactly — **17 positions, $244,037,062.37, zero residual**, measured 2026-09-24 — with zero impaired, called or defaulted. **That total is $187,087,047.37 of lending across six borrowers, plus $56,950,015.00 held in nine liquidity positions.** ✅ **Collateral is priced on 100% of positions**, the per-asset rows summing to deployed principal to the cent.

⚠️ **What that fuller view shows is the reason this axis is capped, and it is concentration rather than visibility. The lending book stands on two crypto assets and no others:**

| Collateral | Amount | Share of lending |
|---|---:|---:|
| BTC | $131,866,059 | **70.48%** |
| XRP | $55,176,780 | **29.49%** |
| US T-bills | $34,500 | 0.02% |

⚠️ **There is no third collateral asset**, so these loans do not fail independently — a BTC drawdown stresses six borrowers at once. ⚠️ **And the XRP leg is a single borrower:** the entire XRP collateral base is **Borrower C**, whose lending share is the same 29.50%. **The second-largest borrower and the whole non-BTC collateral base are one exposure**, which neither a per-borrower nor a per-asset view reveals on its own.

✅ **This is also why a 49.30% single borrower sits under a 6.0 rather than something lower.** That borrower's **$92,230,000 is fully BTC-collateralised at 157.9%** across three loans — 1,294.83 + 370.37 + 58.69 BTC, worth $145,636,426, at current levels of 156.3%, 156.4% and 222.3%. A default there is a liquidation of $145.6M of BTC, not a $92.2M credit loss, and **BTC would have to fall about 37% before the position is bare.** Borrower concentration is not loss concentration in a secured book.

⚠️ **What would move this score, so the hold is checkable rather than a judgement call.** Backing goes to 5.5 on any of: **BTC above 75%** of lending principal (today 70.48%), **any loan's current level below 120%** (today the lowest is 156.3%), or **the top borrower's coverage below 130%** (today 157.9%). None of the three is met.

## 3 · Liquidity & Exit — 6.0

Two paths, same mechanics as syrupUSDC, but smaller pool depth:

**1. DEX aggregator (preferred for retail).** Use KyberSwap, 1inch, or any DEX aggregator. ⚠️ **Measured 2026-10-01 across eight rungs, the all-in cost is higher than syrupUSDC's at every size tested** — **−16.50 bps at $1,000, −16.93 at $100,000, −17.13 at $150,000 and −20.52 at $1,000,000**, against syrupUSDC's **+0.90, −1.93, −2.85 and −7.68** on the same convention in the same minute. ⚠️ **Note what shape that is: the cost is a floor, not a slope.** It barely moves across a thousandfold range, so the penalty is paid on the smallest trade as much as the largest, and depth is not the constraint — both 2% and 50bps depth floor at $1,000,000.

⚠️⚠️ **Two cost conventions exist and they rank the two pools in opposite directions.** On *price impact* — the figure that strips out the venue's own spread — this pool reads **−4.0 bps at $1,000,000** against syrupUSDC's **−8.6**, which makes it look like the cheaper exit. On *all-in cost*, what a holder actually receives, it is nearly three times worse at that size and six times worse at mid notional. **A reader comparing the two pools on the impact figure would choose the costlier exit while reading a better number.** Quote the all-in cost.

⚠️ **One venue, and an uninspected one.** Every rung from $1,000 to $1,000,000 routes through a single Uniswap v4 syrupUSDT/USDT pool holding roughly $5.0M, with about $190K of daily volume. Its hook has not been inspected, and a hook can gate or tax the swap path — so an unverified mechanism sits underneath the only measured exit this pool has. Venues on Plasma exist but traded essentially nothing in the last day.

**2. Direct redemption.** Submit to the WithdrawalManager; processed at NAV from free pool USDT. Same cycle-based queue as syrupUSDC.

For sizing above the low retail range (~$50K+), you'll likely use the queue. Stress-case redemption depth is bound by loan-repayment cadence on the smaller principal base — expect queue latency of weeks rather than days for institutional sizes during correlated outflow stress.

**Free liquidity is the number that decides how quickly the queue clears, and this pool runs it thin and variable.** The measure is uncommitted cash over total assets; the Liquidity bucket counts as deployed, since those are strategy positions rather than settleable cash. ⚠️ **Across 352 hour-bucketed readings since 2026-09-11 the median is 0.89%, the pool sits under 2% in 61% of hours, and the range runs 0.16% to 15.10%.** A reading of **3.39%** on 2026-09-24 is near the top of that range, not typical of it; **at the most recent reading the cushion was 0.18%, close to the floor.** ⚠️ **No ordering against syrupUSDC survives the series.** The two pools swap places depending on the statistic: hours-below is a coin flip at 50%, and on the **median syrupUSDC is the better-cushioned of the two** at 1.19% against 0.89%. **Any single hour's comparison is an artifact of when it was taken.** Live figures on the dashboard; the durable point is that a small borrower set means few repayment events arriving to refill the cushion.

**The credit read itself is reassuring, and worth separating from the exit question.** At the August 2026 check the Syrup family's loans-only collateral ratio came in at **175%** — above the 145–170% band these reports describe as typical — with pool collateral ratio at 100% and **zero** unrealized losses. No loan is impaired, called, or in default. Nothing about the loan book deteriorated; what this report changed in August is that redemption finally has a score of its own.

## 4 · Dependencies — 4.0

**What these pools depend on, as distinct from what backs them.** The operator is **Maple Labs**; origination is at the **Pool Delegate's discretion**; the **Liquidity-layer custody addresses are shared across both pools**; and **Maple's GraphQL is the only source of per-loan collateral data**, so collateral visibility depends on a single off-chain endpoint.

⚠️ **This axis is set by a bound rather than by a measurement, and the bound is USDT.** syrupUSDT's counterparty set **contains** USDT's — every holder of this share is exposed to Tether's counterparties before reaching Maple's — so it **cannot score above USDT's own Dependencies**, which is **4.0**. That 4.0 is itself an unenumerability score: **no full audit of Tether has ever been completed, so not one custodian or banking counterparty is nameable** for a book of roughly $183.64B.

⚠️ **This pool then stacks a second unenumerable set on top.** Maple publishes no borrower identities, the loan records carry no counterparty name, and collateral is held off-chain by the delegate's custodian. **Two unenumerable sets, so 4.0 is a ceiling rather than a midpoint.**

✅ **It sits at that ceiling rather than below it, on two measured offsets.** About **19.74% of the book is a $50M at-par USDC position**, so Tether is roughly **80%** of the set and the remaining fifth is Circle, which scores materially better on this axis. And **this pool's own shares are enumerated at 100% with a residual of $0.00** — the thing that cannot be named at the Tether layer *can* be named here.

⚠️ **The cross-pool exposure is the part neither pool's standalone view shows.** Three of this pool's six borrowers also borrow from syrupUSDC — **$304,296,502 between them, 26.25% of family lending.** The largest, **Borrower C**, is **29.50% of this pool's lending and 9.94% of syrupUSDC's**, which is **13.09% of the family book** as one counterparty.

### Cross-pool concentration: one product, two denominations

Maple presents syrupUSDC and syrupUSDT as a single Syrup credit line offered in two stable denominations — not two independent credit baskets. A Syrup loan is offered to one institutional borrower across the family rather than partitioned per pool, so the borrower set is **shared by design**. Choosing syrupUSDT vs syrupUSDC is a choice of denomination, not an independent credit pick.

That makes the right sizing unit the **family loan book**, not the per-pool number. Syrup runs a small borrower set (**6 in syrupUSDT, 16 in syrupUSDC** as at 2026-09-24; the overlap is set out below), so expect single-counterparty concentration above the 10%-per-counterparty limit common in institutional credit frameworks. That's the structural product feature, not a temporary state.

**Measured 2026-09-24, on a family lending book of $1,159,344,816.21** — $187,087,047.37 in syrupUSDT plus $972,257,768.84 in syrupUSDC, each reconciling exactly to its pool's enumerated lending with zero residual. ⚠️ **Liquidity-bucket positions are excluded from both sides**, because the two pools hold them in very different proportion (23.3% of book against 2.0%) and including them would make the halves incomparable:

| Family borrower | syrupUSDT | syrupUSDC | Family total | % of family lending | In both pools |
|---|---:|---:|---:|---:|:---:|
| **Borrower A** | — | $214.0M | **$214.0M** | **18.46%** | |
| **Borrower B** | — | $200.0M | **$200.0M** | **17.25%** | |
| **Borrower C** | $55.19M | $96.61M | **$151.80M** | **13.09%** | ⚠️ **yes** |
| **Borrower D** | $92.23M | — | $92.23M | 7.96% | |
| **Borrower E** | $12.0M | $65.5M | $77.5M | 6.68% | ⚠️ yes |
| **Borrower F** | $25.0M | $50.0M | $75.0M | 6.47% | ⚠️ yes |

**The family's top three borrowers are 48.80% of family lending and the single largest is 18.46%** — both far above the 10%-per-counterparty limit common in institutional credit frameworks.

⚠️ **Three of syrupUSDT's six borrowers also borrow from syrupUSDC — $304,296,502 between them, 26.25% of family lending.** The largest is **Borrower C** at **$151.80M across both pools, 13.09% of the family book**: per-pool sizing reads that as a 29.50% exposure in one pool and a 9.94% exposure in the other, when it is one counterparty at 13.09% of everything. **Holding both pools does not diversify these three — it doubles them.**

⚠️ **Do not merge this with the concentration figures above.** syrupUSDT's largest borrower — the one at **49.30%** of its lending — is **Borrower D**, and it is **syrupUSDT-only**. The most concentrated borrower and the largest cross-pool borrower are different entities, and so are the two risks.

The Liquidity layer (PYUSD/AMM custody) is also shared across the family — a Maple-firm-level custody event affects both pools.

**Sizing implication:** treat a combined syrupUSDC + syrupUSDT position as one Syrup-family allocation against one shared borrower set, and apply per-counterparty exposure limits at the family level rather than per-pool. Independent per-pool sizing systematically under-weights the real per-borrower concentration. Live family concentration: see the per-pool dashboards linked below for current borrower breakdown.

## 5 · Contract & Admin — 4.5

### What the contracts are doing

Same architecture as syrupUSDC. ERC-4626 vault. Borrowers post collateral that's held off-chain by custodians under Pool Delegate policy. The smart contract handles loan accounting, payment scheduling, and time-based default triggering — but the credit-relevant decisions (who to lend to, on what terms, when to call) are human-discretionary at the Pool Delegate level.

The Pool Delegate is a single externally-owned address (`0x93aA06F8a7bB4da3Eb0DD5A5a38C01A7EB35501A`, single key) — different EOA from syrupUSDC's (`0xC1e1...49f`), but the same firm runs both. Maple's first-loss cover requirement for the pool is currently $0; depositors absorb credit losses directly.

## 6 · Issuer — 5.5

### Audits & security

Both pools run on the same contract codebase, and the audit record is the same — ⚠️ **including the same limits.** "8+ audits" is a count of **Maple protocol** reviews, not of engagements covering this pool: the December 2022 and June 2023 reviews predate syrupUSDC entirely, and ⚠️ **the temporal argument binds harder here, because syrupUSDT is the newer pool.** Which engagements post-date it has not been established. ⚠️ **Trail of Bits does not belong on the list** — it reviewed the V2 upgrade mechanism only to understand it and states it did not look for security flaws. ⚠️ **The bug bounty is the Immunefi MAPLE program — a $500,000 maximum, read at its 2026-04-21 version across 43 listed assets — not $1M**, and its terms do not make it a mitigant for the authority paths this axis scores.

## Who it's for

Allocators who already hold or are sizing into syrupUSDC and want USDT-denominated exposure to the same Maple credit framework. Comfortable for retail and low-institutional positions willing to accept higher per-pool concentration than syrupUSDC. Not a yield-chase product — competing with USD-benchmark T-bills on yield while accepting credit + custody + governance risks.

## Who should avoid

- Anyone holding syrupUSDC and looking for a "diversification" sister product — the cross-pool borrower overlap means it concentrates rather than diversifies for the family's biggest borrowers
- Position sizes above the low-MM range without explicit queue tolerance — the smaller pool is queue-bound earlier than syrupUSDC at proportional sizes
- Anyone needing the largest single-borrower exposure to stay below 20% of pool — syrupUSDT's largest borrower is **49.30%** of the pool's lending

## What to watch

- **Per-pool concentration.** Six borrowers hold the pool's lending: the largest at **49.30%**, the top three at **92.16%**, and a Herfindahl index of **3,522** — ⚠️ **"highly concentrated" on the standard bands.** A further 23.3% of the total book sits in nine liquidity positions, which are not lending. Watch the live dashboard for changes.
- **Cross-pool concentration if you also hold syrupUSDC.** Three of this pool's six borrowers also borrow from syrupUSDC — **26.25% of family lending**, the largest single counterparty at **13.09%** — and the family top-three are **48.80%**, all above the 10%-per-counterparty norm (live figures on the dashboard). Liquidity-layer custody is shared between the pools as well. Compute combined per-borrower exposure rather than treating the pools as independent.
- **Pool Delegate roster changes.** Same Pool Delegate firm runs both pools but with different operational EOAs.

## What the collateral figures do and do not cover

⚠️ **The loan-book reconciliation established existence and principal. It did not establish collateral.** Per-loan collateral is sourced from Maple's GraphQL API, which **returns no records for the seven recovered loans**, and the open-term loan contracts carry no on-chain collateral field. At 2026-09-24 collateral is priced on **100% of positions in both pools**, each summing to deployed principal to the cent, so the headline ratios are computed over the whole book rather than a visible subset.

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

- **2026-10-02 — an exit ladder now exists for this pool and it is expensive at every size; no score changed.** Measured 2026-10-01 across eight rungs, all-in cost runs **−16.50 bps at $1,000** rising only to **−20.52 bps at $1,000,000**, against syrupUSDC's **+0.90** and **−7.68** on the same convention in the same minute — roughly **six times costlier** at mid notional. ⚠️ **The cost is a floor rather than a slope:** it moves about 4 bps across a thousandfold range, less than syrupUSDC's 8.6, so **depth is not the binding constraint — the execution level is.** Both the 2% and 50bps depth thresholds floor at $1,000,000. ⚠️⚠️ **The two cost conventions rank the pools oppositely:** on price impact this pool reads −4.0 bps at $1,000,000 against syrupUSDC's −8.6 and looks cheaper, while on all-in cost it is far worse. **A reader using the impact figure would pick the costlier exit.** ⚠️ **Every rung routes through one Uniswap v4 pool** of roughly $5.0M reserve whose hook has not been inspected. **Liquidity & Exit stays at 6.0:** the measurement confirmed what the axis already said rather than revising it.
- **2026-09-26 — the cushion is restated on its series and the cross-pool ordering is withdrawn; no score changed.** ⚠️ **A single reading was carrying a general claim.** Free liquidity of **3.39%** on 2026-09-24 sits near the top of this pool's range, not in the middle of it. Across **352 hour-bucketed readings since 2026-09-11** the median is **0.89%**, the pool is under 2% in **61% of hours**, and the range runs **0.16% to 15.10%**. ⚠️ **At the most recent reading the cushion was 0.18%, close to the floor.** ⚠️ **No ordering against syrupUSDC survives the series:** hours-below is a coin flip at 50%, and on the median syrupUSDC is the better-cushioned pool at 1.19% against 0.89%. **Any claim that either pool holds the larger cushion is an artifact of when it was sampled.** Separately, syrupUSDC's exit ladder is sourced and measured to $100,000; neither pool has a depth measurement at institutional notional, and no ladder is published for this pool at all.
- **2026-09-24 — the loan book contracted by 37.9%, and borrower concentration is re-measured on a corrected basis.** Deployed principal fell from **$392.72M to $244,037,062.37** in eighteen days, cross-checked on-chain where the pool's total assets read **$252.59M**, so the book cannot be the larger figure. That total splits into **$187,087,047.37 of lending across 8 loan positions** and **$56,950,015.00 across 9 liquidity positions**, the liquidity bucket being **23.3% of the book**. ⚠️ **Measured across distinct borrowers rather than positions, the lending is highly concentrated: six borrowers, the largest at 49.30%, the top three at 92.16%, and a Herfindahl index of 3,522.** The largest borrower's position is spread across three separate loans, which a position-level view understates. ⚠️ **These figures cannot be set against the September measurement.** The book contracted by more than a third in the interval and the earlier figures were computed on a different construction, so no statement about whether concentration rose or fell is supportable and none is made here. ✅ Credit quality is unchanged — **zero impaired, zero called, zero in default** across all 17 positions — and free liquidity is **3.34%**. ✅ **Ruled 2026-09-24: Backing 6.0 and Dependencies 5.0 hold**, because the 49.30% borrower is BTC-collateralised at 157.9% and borrower concentration is not loss concentration in a secured book. ⚠️ **Collateral was re-measured in the same pass and is priced on 100% of positions, superseding the 63.2% coverage previously published:** the lending book stands on **BTC 70.48% and XRP 29.49%** and no third asset, which is now what caps the Backing axis. ⚠️ **Whether the contraction reflects healthy repayment or weaker borrower demand is not established.**
- **2026-10-03 — Dependencies 5.0 → 4.0; Overall held at 6.0.** ⚠️ **A bound, not a deterioration — nothing about this pool got worse.** syrupUSDT's counterparty set **contains** USDT's, so it may not score above USDT's own Dependencies of **4.0**, which is an unenumerability score: **no full Tether audit has ever been completed**, so not one custodian or banking counterparty is nameable for a book of roughly **$183.64B**. This pool adds its own unenumerable set — no published borrower identities, collateral held off-chain by the delegate's custodian — and **two unenumerable sets stacked make 4.0 a ceiling.** ✅ **It sits at the ceiling rather than below**, on two measured offsets: about **19.74%** of the book is a **$50M at-par USDC** position, so roughly a fifth of the set is Circle rather than Tether; and this pool's own shares are **enumerated at 100% with $0.00 residual**, where Tether's counterparties cannot be named at all. **Overall holds at 6.0**, the nearer point on the 0.5 grid.
- **2026-09-06 — the authority topology is walked, and the 3-day governance delay is a detection window rather than a gate.** ⚠️ **The `pause` layer is the Pool Delegate's own EOA — threshold 1, no delay — over the contract that processes every redemption, and it needs no compromise to bite: inaction is enough.** ⚠️ **The multisig path is the faster one:** the `securityAdmin` Safe (3-of-6) upgrades the PoolManager **undelayed**, while the single-key route waits 7 days. A role update is the one class the canceller may not cancel. ✅ Upgrades are capped to Maple-published implementations (`registerImplementation` is `onlyGovernor`), which with 8+ audits and a $1M+ bounty is what holds Contract & Admin at 4.5 rather than lower. **Both pools measure the same on this axis — same six paths, same thresholds, same delay flags.** Dependencies moves to 5.0 and Backing is scored for the first time at 6.0, capped by collateral visibility rather than by the collateral ratio.
- **2026-09-06 — the concentration figures were measured against an incomplete loan book and were too high in the risk-increasing direction.** Enumerating from the loan manager's `PaymentAdded` events reconciles the book to the pool's deployed principal exactly, with zero residual: **18 active loans across 9 borrowers totalling $392,718,462.42**, where the previous read saw 11 loans, 7 borrowers and $248.07M. Seven active positions worth **$144,645,910.05** were missing. **Largest borrower 24.19% (published as 38.3%), top-3 66.77% (published as 90.77%), HHI 1,876 (published as 2,911).** ⚠️ **The ladder is flatter than described, not thinner:** 24.19 / 23.49 / 19.10 / 14.05 / 12.73, so removing the largest loan leaves eight borrowers and a 23.5% top name. syrupUSDT is still the more concentrated of the two pools; the sibling gap on the largest borrower is about **two points, not the fifteen or twenty-five previously published**. ⚠️ **This is the second correction on this claim in the same direction.** Scores unchanged: the axes that cited concentration are held on the measured borrower-set spread, which is now what carries them. The largest cross-pool borrower is **$195M, 14.43% of the $1.35B family loan book** — a figure neither pool's own page shows.
- **2026-08-18 — moved onto the correct scoring rubric; no score changed.** This report was filed as a stablecoin and rendered the stablecoin axes (peg mechanism, backing). syrupUSDT is a **vault share**, and the practical cost was that the stablecoin rubric has **no redemption axis** — so for a vault roughly 97% deployed into loans, and one running free liquidity thinner than its sibling, the binding retail question was discussed in prose but never scored. The page now carries Stability 8.5 / Contract & Admin 6.0 / **Redemption 6.5** / Underlying 6.5 / Liquidity 6.0 / Issuer 5.5, Overall unchanged at **6.0**. Stability, Contract & Admin and Redemption are newly *visible*, not newly *assigned*; every axis published on both sides already agreed. Backing 6.5 became Underlying 6.5, which now also carries the verifiability question backing used to answer. Figures refreshed to the August 2026 check: the credit read is **reassuring** — loans-only collateral ratio 175%, above its band, pool collateral ratio 100%, zero unrealized losses — and the structural fact behind this pool's Underlying, Liquidity and Redemption axes sitting below its sibling's is its smaller borrower set on a smaller pool.


---

*Revision history: 2026-08-23 — concentration figures measured and quantified; no score change on either pool. ⚠️ Those figures were computed against an incomplete enumeration of the loan book and were too high; see the 2026-09-06 entry above for the measured replacements. Credit quality was clean on both pools at that read — zero impaired, zero called, zero defaulted — and remains so. syrupUSDT's Liquidity bucket is about **3.3% of book against syrupUSDC's 6.1%**, the more concentrated pool carrying roughly half the relative cushion, stated as relative size only since that bucket is pool-owned strategy positions rather than idle cash. ⚠️ **Unre-verified rather than refuted:** whether the named cross-pool borrowers are the same legal entities has not been checked — the overlap claim stands unchecked, not disproved. `last_verified` is not bumped; only the concentration metrics were read.*
