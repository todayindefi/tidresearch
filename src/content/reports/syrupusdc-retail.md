---
asset: "syrupUSDC"
slug: "syrupusdc"
aliases: ["syrupUSDC", "SYRUPUSDC", "syrupUSD", "Syrup USDC", "Maple Syrup"]
chains: ["eth", "sol", "arb", "base", "plasma"]
category: "vault-share"
underlying_assets: ["USDC"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
date: "2026-04-25"
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
market_cap_approx: 1066000000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Migrated at this refresh, per the refresh-driven
# policy. ⚠️ backing_score was MISSING ENTIRELY and could not render on the old
# vault-share rubric — adding it without the frame would have been schema-legal
# and invisible.
#   backing_score 6.5 is NEW. ⚠️ Capped by COLLATERAL VISIBILITY, not by the
#     collateral ratio: per-loan collateral comes from Maple GraphQL, which
#     returns nothing for the loans recovered in the 2026-09-06 reconciliation,
#     and OpenTermLoan carries no on-chain collateral field. Existence and
#     principal are fully verified; collateral is not.
#   underlying_score 7.0 -> 5.5 renders as DEPENDENCIES.
#   ⚠️ structural_score 6.5 -> 4.5 IS A RE-SCOPE, NOT A DETERIORATION.
#     The old number spanned THREE axes — it also priced per-pool loan
#     concentration (axis 4) and Maple Labs as an entity (axis 6), both already
#     scored separately, so it was double-counting positives that live
#     elsewhere. ⚠️ BOTH POOLS SCORE 4.5 BY MEASUREMENT, NOT ASSUMPTION: the
#     authority walk returns the same six Ethereum paths with the same
#     thresholds and the same delay flags on both. Do not split axis 5 per pool.
# ⚠️ `redemption_score: 7.5` is RETAINED but no longer rendered: it is the
# evidence for axis 3, scored on the WORSE leg. Both legs are named in prose.
# ⚠️ OVERALL 6.75 IS HELD AND IS NOW ABOVE ITS OWN AXIS MEAN (6.33, +0.42),
# contrary to the corpus at-or-below convention. That is deliberate and stated
# on the page: the re-scope lowered the mean, no one has re-derived the overall,
# and inventing a number here would publish something nobody computed.
axis_frame: six
volatility_score: 8.5
backing_score: 6.5
structural_score: 4.5
redemption_score: 7.5
underlying_score: 5.5
liquidity_score: 7.5
issuer_score: 5.5
overall_score: 6.75
---

# syrupUSDC — Risk Report

**Moderate-to-low risk · 6.75/10**

*Live pool backing, peg deviation, and exit-liquidity tiers are on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc).*

> ⚠️ **What is current and what is not, because this page carries two dates.** **Re-measured 2026-09-06:** the loan book, enumerated from the loan manager's own payment events and reconciling to deployed principal with zero residual — **35 loans, 16 borrowers, $958,757,773.84** — every concentration figure computed on that denominator, and the **admin and authority topology**, hand-walked on-chain, which is what sets Contract & Admin. **Still dating from 2026-08-18 and not re-read:** the NAV mechanism, yield and APY, the liquidity depth ladders, the audit corpus, and the withdrawal-queue mechanics. ⚠️ **So `verified through` is the older date deliberately** — the concentration and authority material is today's; the description of how the vault works is August's.

> *What's pinned in this report is structural risk — architecture, the issuer menu, the risk axes, and the scores. Current magnitudes (pool split, per-issuer allocation, collateral ratio, concentration, exit tiers) drift weekly and are live on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc). This report is written to stay correct across that drift.*

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~4.5–5% live (organic loan interest) | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | ~2 years | Ethereum, Solana, Arbitrum, Base, Plasma |

## Summary

syrupUSDC is Maple Finance's onchain yield-bearing stablecoin. You deposit USDC, you receive syrupUSDC, and the price slowly accrues yield. The Ethereum pool holds roughly $1B+, with the syrupUSDT sibling materially smaller; live TVL on the dashboard. Maple's "Syrup" product line has reported zero principal losses across ~3 years. Yield is real (interest paid by real institutional borrowers), not emissions.

**Important framing — verified against Maple's own AUM Details page**: the pool actually has two structurally different components, which Maple itself splits as **Loans (~75–80% of pool) + Liquidity (~20–25%)** — live split on the dashboard:

- **Loans** = third-party institutional credit (BTC/XRP/cbBTC/HYPE collateral at 125–333% — overcollateralized in the traditional sense). This is the "Maple lending pool" that the marketing describes.
- **Liquidity** = pool-owned positions in stablecoin and tokenized T-bill yield strategies (PYUSD, USTB, USDC/USDT in DEX pools). At-par with the underlying asset, NOT third-party credit. Risk axis: issuer/RWA/AMM, not borrower default.

The "overcollateralized at all times" framing in Maple's marketing applies to the Loans bucket. The Liquidity bucket is intentionally at par — it's not collateralized credit, it's pool-owned strategies parking capital in yield-generating positions while remaining nominally redeemable. The Pool Delegate rotates this layer across a menu of issuers — Paxos (PYUSD), Superstate (USTB, a NAV-accruing tokenized T-bill), Circle/Tether (USDC/USDT AMM-LP) — and the mix drifts under discretion within days, with no governance gate. Through 2026 the layer rotated substantially out of USTB into PYUSD; **any single issuer can come to dominate the layer** (recently ~90%+ Paxos PYUSD). Current per-issuer allocation is live on the dashboard; the durable facts are the issuer menu, that the mix is delegate-discretionary, and that single-issuer concentration inside the layer can run high.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 8.5 | NAV-accruing share, organic yield from loan interest, no rebase, and zero principal losses to date across the Syrup product line. The share price only climbs in normal operation; the path to a drawdown is a credit loss on the loan book, which is scored under Underlying. |
| Backing | 6.5 | The loan book is fully enumerated and reconciles to the pool's deployed principal exactly — 35 loans, 16 borrowers, $958,757,773.84, zero residual — with zero impaired, called or defaulted. ⚠️ **The cap on this axis is collateral VISIBILITY, not the collateral ratio.** Per-loan collateral comes from Maple's GraphQL API, which returns nothing for the four loans recovered in the 2026-09-06 reconciliation, and the loan contracts carry no on-chain collateral field — **so collateral is priced over about 90.8% of the book and the headline ratio is computed on that subset.** Existence and principal are verified; collateral is not. Half a point above syrupUSDT on both the coverage share and a less crypto-concentrated visible book. |
| Liquidity & Exit | 7.5 | **Scored on the worse of the two legs, and here they land together at 7.5.** Venue depth: a $1B+ pool with aggregator routes in the single-digit-to-low-double-digit bps range in the base case. Primary redemption: permissionless mint and redeem at the vault layer, no KYC, processed at NAV from free pool USDC. Neither leg is the constraint the other is; the binding risk on this pool is credit, not exit. |
| Dependencies | 5.5 | Maple Labs as operator, the Pool Delegate's discretion over origination, the shared Liquidity-layer custody addresses common to both pools, and Maple's GraphQL as the only source of per-loan collateral. ⚠️ **Cross-pool: one borrower holds $100M here and is simultaneously syrupUSDT's largest at 24.19%, for 14.43% of the family loan book** — an exposure neither pool's standalone view shows. |
| Contract & Admin | 4.5 | ERC-4626 standard, 8+ audits including Spearbit and Trail of Bits, $1M+ Immunefi bounty. ⚠️ **The 3-day governance delay is a detection window, not a gate, and two faster paths sit beside it.** A hand-walk of the authority topology returns six Ethereum paths. **The `pause` layer is the pool delegate's own EOA — threshold 1, no delay — over the contract that processes every redemption**, and it does not need to be compromised to bite: **inaction is enough.** ⚠️ **The multisig path is the fast one, which is the opposite of the usual shape:** the `securityAdmin` Safe (3-of-6) upgrades the PoolManager **undelayed**, while the single-key route waits 7 days. And a role update is the one class the canceller may not cancel, so the 3-day delay tells you a change is coming rather than stopping it. ✅ **What holds this at 4.5 rather than lower: upgrades are capped to Maple-published implementations** — registering a new one is `onlyGovernor` — alongside 8+ audits and a $1M+ bug bounty. ⚠️ **The code half does not lift it. Audits do not offset an authority path**; they reduce the chance the code is wrong, not the chance someone with a key uses it. |
| Issuer | 5.5 | Maple Labs Cayman, doxxed team, 8+ audits, $1M bounty. ~3-year clean record on the Syrup product line. This axis scores the **entity**, so it is deliberately identical to [syrupUSDT](/reports/syrupusdt/) — Maple curates both. Per-pool differences belong under Contract & Admin. |
| **Overall** | **6.75** | ⚠️ **Held, and under review.** The Contract & Admin re-scope lowered the axis mean to **6.33**, so this number now sits **+0.42 above its own axes** — contrary to the at-or-below convention applied elsewhere in this coverage. **It is held rather than adjusted because no one has re-derived it, and inventing a figure here would publish something nobody computed.** The axes above are current; this cell is the one to treat as pending |

**A note on the axes.** This report scores on the six-axis core — **Stability · Backing · Liquidity & Exit · Dependencies · Contract & Admin · Issuer** — the same frame as every other vault-share report on this site.

⚠️ **Two things about that frame matter for reading the table.** **Backing is newly scored here**: the earlier rubric had no reserve axis at all, so the loan book that constitutes the entire asset was graded on everything except itself. And **Liquidity & Exit covers both exit paths and is scored on the worse one, never the average** — venue depth and primary redemption are stated separately in that row, because averaging them would hide which half set the number. `redemption_score` is retained as the evidence behind that axis rather than rendered as its own row.

## 1 · Stability — 8.5

### What you actually earn

**~4.5–5% APY** (verified live from Maple's GraphQL `syrupGlobals.apyTimeSeries` over the past week). This is the durable yield from institutional borrowers paying interest on their loans, net of Maple's protocol take and 3.33% delegate fee. It varies by loan-book composition and rate environment; ~3–9% range across individual loans, weighted-avg currently ~4.5–5%.

At ~4.5–5%, syrupUSDC is currently **competitive with or above the comparable yield set**: 3-month T-bills are around 3.7–4.0% (US Treasury fiscal data, March 2026 average 3.70%), tokenized T-bill products (BUIDL, USTB, USYC) net ~3.5–4.0% after management fees, and onchain USDC lending on Aave V3 / Morpho is in the 3.5–4.5% range. The Maple value proposition is "real institutional credit yield, ~4.5–5%, with the risk profile of overcollateralized loans + at-par Liquidity strategies." That's a ~70–100 bp spread above T-bills, which is appropriate compensation for institutional credit risk rather than a yield-chase number.

syrupUSDC also has a structural advantage that pure tokenized-T-bill products don't: it's accepted as collateral on Morpho, Euler, and other DeFi lending markets, so a holder can borrow against it and lever the yield if the borrow rate is favorable. That makes it more capital-efficient than locked T-bill exposure, and is a meaningful part of the value proposition for allocators with a use for the borrowed capital.

## 2 · Backing — 6.5

**The credit read, as at the August 2026 check, is reassuring.** The loans-only collateral ratio across the Syrup family came in at **175%**, above the 145–170% band this report describes as typical. Pool collateral ratio is 100%, unrealized losses are **zero**, and no loan is impaired, called, or in default. Deployment runs around 97% and the pool is using roughly two-fifths of its liquidity cap. Live figures are on the dashboard; the durable read is that the loan book is comfortably overcollateralized and the loss-recognition signal is clean.

That matters for how you read the rest of this report and the August rubric change: **nothing about credit deteriorated.** The change was that redemption got its own dial.

**Two things do belong on the debit side, and they are about verification rather than credit.**

**The collateral is off-chain.** Borrowers post collateral to custodians under Pool Delegate policy. The smart contract does not hold it and does not price it. What you can read is what Maple publishes — asset, amount, and required collateralization per loan — so your assurance runs through Maple's reporting and the delegate's monitoring, not through an on-chain balance you can check yourself. This is normal for institutional credit and abnormal for DeFi, and it is the main reason the Dependencies axis sits at 5.5 rather than higher.

**Maple's public loan data has a known artifact, and it is not small.** A subset of loans periodically read *below* 100% collateralization in Maple's public GraphQL while every authoritative signal says they are fine — unrealized losses zero, none impaired, none called, none defaulted. At the August 2026 check that subset covered about 39% of the loan book, up from roughly a quarter in July. Read it correctly: **the artifact grew, the credit did not deteriorate.** The pool collateral ratio is the authoritative figure and it is clean. But a reader trying to verify this book independently should know that the most obvious public data source disagrees with the authoritative one on a material share of it, and that the discrepancy is a reporting issue rather than a solvency one.

**One live indicator is worth naming.** A single loan of about $25M — under 3% of the book — sat in the 100–120% collateralization range at the August check. That is the "tightest loan approaching par" signal working as designed at small size against a 175% book. It is the indicator firing, not a credit event; what would matter is many loans compressing toward par at once.

## 3 · Liquidity & Exit — 7.5

Two paths, both permissionless (no KYC required for either):

**1. DEX aggregator (preferred for retail):** Use KyberSwap, 1inch, or any DEX aggregator. Empirical exit cost is **single-digit-to-low-double-digit bps** at retail-to-low-institutional notional; live tiered slippage on the dashboard. Sub-minute settlement. Aggregators route across Uniswap v3/v4, Balancer, and other listed pools — significantly more depth than the strict "Uniswap+Balancer pool TVL" headline implies.

**2. Direct redemption:** Submit a redemption request to the vault contract; the WithdrawalManager processes it. Maple claims average withdrawal time under 5 minutes during normal markets. This is the path for sizes that exceed aggregator-route depth.

The honest qualifier: aggregator routing is excellent in normal market conditions but less reliable during stress. If many holders try to exit at once (a credit event, a crypto-cycle drawdown that hits institutional borrowers simultaneously), aggregator slippage widens and the redemption queue becomes the binding constraint. Queue speed depends on free USDC in the pool versus outstanding loan principal — if loans are fully deployed, the queue lengthens until borrowers repay or get margin-called.

## 4 · Dependencies — 5.5

**What these pools depend on, as distinct from what backs them.** The operator is **Maple Labs**; origination is at the **Pool Delegate's discretion**; the **Liquidity-layer custody addresses are shared across both pools**; and **Maple's GraphQL is the only source of per-loan collateral data**, so collateral visibility depends on a single off-chain endpoint.

⚠️ **The cross-pool exposure is the part neither pool's standalone view shows.** One borrower holds **$100M here** and is simultaneously **syrupUSDT's largest at 24.19%** — **14.43% of the family loan book** across the two pools.

## 5 · Contract & Admin — 4.5

### What the contracts are doing

syrupUSDC is an ERC-4626 vault (the standard "deposit → get share token" pattern). The Ethereum deployment is canonical; the multi-chain versions (Solana, Arbitrum, Base, Plasma) are bridged extensions of the same product.

What sits behind the scenes:
- Borrowers post collateral that's held off-chain by custodians under Pool Delegate policy. The smart contract itself does not hold or price the collateral — Maple's GraphQL exposes the asset, amount, and required collateralization level per loan
- A single Pool Delegate (an institutional credit firm vetted by Maple) sets all loan terms, monitors borrower health, and has the right to call any loan with a 24-hour notice + 48-hour grace period before default
- The smart contracts handle loan accounting, payment scheduling, and the time-based default trigger — but the credit-relevant decisions (who to lend to, on what terms, when to call) are human-discretionary
- WithdrawalManager handles the redemption queue; LoanManager tracks per-loan principal and payment state

The Pool Delegate model is the structural difference from purely algorithmic protocols (like Aave). It adds discretionary credit risk — a delegate's bad loan, a delegate-borrower conflict of interest, or a delegate mistake during a fast-moving market can produce losses that algorithmic protocols wouldn't face. The delegate is also a single externally-owned address (single private key) and Maple's first-loss cover requirement for the pool is currently $0 — meaning no on-chain protocol equity absorbs losses before depositors. Mitigated by: Maple's delegate vetting, public delegate identity, and Maple Labs' reputational stake.

## 6 · Issuer — 5.5

### Audits & security

Strong by DeFi-stablecoin standards:

- **8+ audits** total. The current v2/Syrup contracts specifically reviewed by **Spearbit** and **Trail of Bits** (both top-tier), plus Three Sigma and Peckshield.
- **$1M+ Immunefi bug bounty** active.
- ERC-4626 standard architecture; well-understood pattern.

Caveats:
- Multi-chain bridging uses **Chainlink CCIP** with the **CCT (Cross-Chain Token) standard** — burn-and-mint native deployments on each chain (Ethereum canonical + Solana, Arbitrum, Base, Plasma), not a wrapped/lockbox model. **This is structurally a different attack class from the April 2026 LayerZero OFT incidents (rsETH, Drift, Volo)** — those exploits hit single-DVN OFT configurations and admin-key compromises that don't map to CCIP's architecture. CCIP has a clean track record at scale through April 2026 (no public exploits since 2023 launch) with a Risk Management Network as an anti-fraud backstop. What you trade off vs LayerZero: concentrated trust in Chainlink as a single (mature) provider, rather than distributed quorum across DVNs. Per-chain DD still warranted: verify CCT pool addresses on Chainlink's CCIP directory and check per-chain pool depth before sizing on non-Ethereum venues.
- The Pool Delegate roster is what you're trusting at the credit-judgment layer. Maple publishes current delegates; cross-check that they're active and reputable before sizing institutional positions.

## Who it's for

DeFi-comfortable users who want yield well above stablecoin-savings rates and are comfortable with the trade-offs: real institutional credit risk on the loan book (overcollateralized but discretionary at the underwriting layer), Maple-controlled custody on the Liquidity layer, and no bankruptcy remoteness. Good fit for sizing where low-bps base-case exit slippage is acceptable and a queue-tolerant fallback is OK during stress windows.

## Who should avoid

- Anyone needing instant guaranteed exit at NAV regardless of market conditions — DEX-route slippage is bounded in normal markets but can widen during stress
- Position sizing above the low-MM range without explicit queue tolerance — for institutional sizes during correlated outflows, the redemption queue is the binding path

## What to watch

- **Peg discount on DEX pools.** A widening (>50 bps) discount on syrupUSDC vs NAV is the leading indicator that aggregator routing is deteriorating and queue exit is becoming binding.
- **Liquidity layer issuer events.** ~20–25% of the pool is the Liquidity layer, across the Paxos (PYUSD) / Superstate (USTB) / Circle-Tether (AMM) issuer menu; the delegate rotates the mix under discretion and any one issuer can come to dominate (recently ~90%+ Paxos PYUSD). These positions don't have a crypto-cycle buffer — the stress is the dominant issuer's own peg/issuer event. Live per-issuer mix on the dashboard.
- **Loan collateral approaching par.** The health signal to watch is how close a loan's *current* collateral sits to **par (100%)** — the point where it stops covering the loan — not how far it has drifted below its funding-time level (a loan can be "below init" and still hugely overcollateralized, so that on its own tells you little). Watch for the tightest loan nearing par, and for many crypto-collateralized loans compressing toward par together (a correlated-drawdown warning). The delegate has the right but not the obligation to call these loans; current counts are shown live on the dashboard.
- **Multi-chain bridge surface.** syrupUSDC bridges via Chainlink CCIP (different attack class from the April 2026 LayerZero OFT incidents). Still verify per-chain CCT pool addresses on Chainlink's CCIP directory and check per-chain pool depth before sizing on non-Ethereum venues — depth thins fast outside Ethereum.
- **Pool Delegate roster changes.** Delegate identity is the structural credit-judgment trust assumption.
**A note on what the pool is allowed to hold next.** On **2026-09-02 Maple announced three new allocation types** for the Syrup line: lending against **rated securities**, **asset-backed securitisations**, and a **CME/prime-broker spot-futures basis trade**. Each begins capped at **5% of the overall deposit base**, and Maple says rollout starts in **syrupUSDT**, not here.

⚠️ **What the on-chain record supports is narrower than "none of this is happening", and the distinction is the point.** All eleven loans recovered in the 2026-09-06 reconciliation were funded between **2026-06-23 and 2026-08-25** — none on or after the announcement — and all from the already-configured loan factory. **So no post-announcement funding of those strategies appears in the recovered set.** But the loan contracts expose no collateral description or borrower name, and Maple's GraphQL returns nothing for these loans, **so the pre-announcement loans cannot be classified either way.** ⚠️ **That is an absence of evidence about a specific window, not evidence of absence across the book.** The announcement widens future Pool Delegate discretion; it has not yet changed what this pool holds.

⚠️ **Concentration, measured 2026-09-06 against the pool's fully enumerated deployed principal of $958.76M.** The largest borrower is **22.32%** (22.83% on the loans-only basis, which excludes the $21.5M Liquidity bucket) and the **top three are 53.61%**, across **16 borrowers** and 35 loans. The Herfindahl index is **1,354 including the Liquidity bucket, or 1,412 loans-only** — "unconcentrated" to "moderate" on the standard bands. **Quote either figure with its basis**; the two differ because the Liquidity bucket is in one and not the other.

⚠️ **And the reconciliation fixed existence and principal, not collateral.** Per-loan collateral comes from Maple's GraphQL API, which **returns no records for the four recovered loans**, and the loan contracts carry no on-chain collateral field. **So per-loan collateral is priced over about 90.8% of syrupUSDC's book — and only 63.2% of syrupUSDT's**, which is worth knowing before the two pools' collateral ratios are compared. The uncovered portion is now *seen and healthy on the on-chain risk flags but unpriced for collateral*, rather than unknown to exist: all four recovered loans read `isImpaired=false`, `isCalled=false`, `isInDefault=false`.

⚠️ **Say which denominator, always.** These figures divide by the principal the pool has actually deployed, reconciled to the loan manager's own accounting with zero residual. **A concentration ratio computed over part of a book looks exactly like one computed over all of it** — the arithmetic gives no sign that the denominator is short.

For context on the sibling: [syrupUSDT](/reports/syrupusdt/) runs an HHI of **1,876** across **nine** borrowers, with its top three at **66.77%** and its largest at **24.19%**. **syrupUSDC is the better-diversified of the two — but on the single-name measure the gap is about two points, not the wide margin these reports have previously drawn.** The difference between the pools is the spread of the borrower set, not one dominant loan.

⚠️ **Why the scores do not move on this, stated rather than left to inference.** The obvious argument for a cut is that the Underlying rationale never counted concentration at all — it names off-chain custody and Maple's reporting artifact as the two things holding it below an 8, and concentration is not among them. By the test used elsewhere in this coverage that would make it an uncounted drag. **It is not being treated as one, because the measurement does not support it:** an HHI of 1,354–1,412 is unconcentrated-to-moderate on its own bands, credit quality is clean — **zero impaired, zero called, zero defaulted** — and the Underlying axis here is deliberately scoped to what the collateral *is* and whether it can be verified, with delegate discretion explicitly priced under Contract & Admin and Issuer instead. **Cutting a score for a book that measures unconcentrated would be scoring the prose error rather than the asset.**

**What would change that, so the hold is checkable rather than a judgement call:** the top-3 share rising materially from 53.61%, the loans-only HHI crossing into the 2,500 "concentrated" band, or any credit event at all against the current zero. The single-borrower figure alone is the least informative of the three.

- **Cross-pool concentration if you also hold syrupUSDT.** Maple's materially smaller sibling pool shares the same Pool Delegate firm and several of its largest loan-book borrowers. On a Loans-only basis the top-3 cross-pool borrowers run persistently well above the 10%-per-counterparty institutional norm, with the single largest near ~1/5 of the family loan book. Holding both syrupUSDC and syrupUSDT does **not** diversify credit risk for those borrowers — it concentrates it. If you allocate across both, compute combined exposure to each borrower rather than treating the pools as independent; live figures on the dashboard.

## Contracts, and what a loss actually falls on

**The addresses that matter, read on Ethereum:**

```
Pool (ERC-4626)      0x80ac24aA929eaF5013f6436cdA2a7ba190f5Cc0b
PoolManager          0x7aD5fFa5fdF509E30186F4609c2f6269f4B6158F
OpenTermLoanManager  0x6ACEb4cAbA81Fa6a8065059f3A944fb066A10fAc
WithdrawalManager    0x1bc47a0Dd0FdaB96E9eF982fdf1F34DC6207cfE3
Pool Delegate (EOA)  0xC1e18FFD8825FfB286D177DDEbeba345EC70B49f   ← the undelayed pause key
```

⚠️ **Depositors are first-loss, and the cover contract is empty.** Maple's `minCoverAmount` for this pool is **0** and `PoolDelegateCover` holds nothing — so there is no delegate capital standing between a borrower default and the pool's NAV. **A default writes down depositors directly.** That is the design rather than a lapse, and it is what makes per-borrower concentration a binding number rather than an abstract one.

## Live dashboard

A live monitoring view is available at [tidresearch.com/dashboards/?asset=syrupusdc](https://tidresearch.com/dashboards/?asset=syrupusdc) — refreshed hourly from on-chain reads. It shows pool backing, separate **Loan Book** and **Liquidity Layer** health panels (status flags + distance to par / current collateralization + custody addresses), peg deviation, and exit-liquidity tiers. The signals worth watching listed above all map to specific panels there.

## A note on Maple's history

Maple v1 (2021–2022) lent on an undercollateralized basis and lost LPs ~$50M+ during the 2022 credit cycle (Orthogonal Trading default, M11 Credit / Babel Finance defaults). The Syrup product line is Maple's structural response — overcollateralized loans on the third-party credit book, vetted Pool Delegates, active margin calls. Same legal entity (Maple Labs, Cayman Islands), same broader team. The v2 Syrup product has run cleanly for ~3 years through May 2026. Some institutional risk frameworks dock entity-track-record regardless of product changes; this report treats it as background context rather than a leading risk factor.

## Revision history

- **2026-09-06 — the authority topology is walked, and the 3-day governance delay is a detection window rather than a gate.** ⚠️ **The `pause` layer is the Pool Delegate's own EOA — threshold 1, no delay — over the contract that processes every redemption, and it needs no compromise to bite: inaction is enough.** ⚠️ **The multisig path is the faster one:** the `securityAdmin` Safe (3-of-6) upgrades the PoolManager **undelayed**, while the single-key route waits 7 days. A role update is the one class the canceller may not cancel. ✅ Upgrades are capped to Maple-published implementations (`registerImplementation` is `onlyGovernor`), which with 8+ audits and a $1M+ bounty is what holds Contract & Admin at 4.5 rather than lower. **Both pools measure the same on this axis — same six paths, same thresholds, same delay flags.** Dependencies moves to 5.5 and Backing is scored for the first time at 6.5, capped by collateral visibility rather than by the collateral ratio.
- **2026-09-06 — the loan book is reconciled and the concentration figures are corrected downward; no score change.** The loan-discovery step behind these figures had been enumerating from a cache that silently advanced its checkpoint across failed block ranges, so **four active syrupUSDC positions worth $88,500,000 were missing** and every ratio divided by a short denominator. Enumerating from the loan manager's `PaymentAdded` events reconciles the book exactly: **35 loans, 16 borrowers, $958,757,773.84, zero residual.** Largest borrower **22.32%** (was 24.59% on the short book), top-3 **53.61%** (was 59.06%), HHI **1,354** inclusive / **1,412** loans-only. ⚠️ **Three of the four recovered loans went to borrowers already on the list**, so the recovery raised their measured totals rather than only widening the denominator — `0xb99a2c4C…bcF5` moves from $50M to **$100M**, tying for third at 10.43%.
- **2026-08-23 — borrower concentration measured; no score change.** ⚠️ Those figures were computed over an incomplete enumeration and were too high; see the entry above. **16 borrowers in syrupUSDC against 9 in syrupUSDT**, with shared names across both pools, so the sizing unit is the family loan book rather than the per-pool number.
- **2026-08-18 — moved onto the correct scoring rubric; no score changed.**
