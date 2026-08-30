---
asset: "ONyc"
slug: "onyc"
aliases: ["ONyc", "Onyx", "OnRe Tokenized Reinsurance", "Onchain Yield Coin"]
chains: ["solana"]
category: "vault-share"
underlying_assets: ["sUSDe", "reinsurance premium float"]
assessment_type: "light"
date: "2026-07-23"
last_verified: "2026-07-23"
last_revised: "2026-08-23"
featured: false
production: true
issuer: "OnRe (Bermuda SAC)"
yield_bearing: true
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#   backing_score 4.0 — ⚠️ CHECKED, NOT DERIVED. Authored at this desk;
#     riskAnalyst read it against the report's content and found it CONSISTENT,
#     which is a weaker statement than agreeing with it. ⚠️ THE DISTINCTION
#     MATTERS AND SHOULD SURVIVE: a rationale can be constructed for 3.5 or 4.5
#     just as easily, so consistency is not derivation. ⚠️ IF YOU ARE
#     REFRESHING THIS ASSET, DERIVE THIS AXIS PROPERLY — it is the open item
#     that has no other scheduled moment.
#     This report had no backing axis, which was a real
#     hole on an asset whose reserve is an underwriting book. It prices a
#     genuine institutional wrapper — Bermuda SAC, Class IIGB/F licensing,
#     Coinbase Prime custody, Guy Carpenter and Howden — against the fact that
#     ⚠️ NOTHING here is independently verified: NAV is operator-posted and
#     every figure is OnRe's disclosure. Below Dependencies at 4.5 on purpose:
#     the yield source is real, the look-through is not available.
#   underlying_score 4.5 is RETAINED and now renders as DEPENDENCIES — the
#     stacking is the finding. First-loss reinsurance AND sUSDe underneath it,
#     which are two independent ways to lose rather than one.
#   liquidity_score 3.5 unchanged; worse-leg scoring does not bite because both
#     legs are equally constrained — a 2.5%/period KYC-gated queue bounded by
#     94.65% utilisation, against ~1.1% of the book in secondary depth.
#   structural_score 4.0 is Contract & Admin already. volatility_score is the
#     Stability key. issuer_score unchanged at 5.0.
# ⚠️ `redemption_score: 3.5` is RETAINED but no longer rendered: it is the
# evidence for axis 3, and both legs are stated in prose under that heading.
axis_frame: six
volatility_score: 5.0
backing_score: 4.0
liquidity_score: 3.5
underlying_score: 4.5
structural_score: 4.0
issuer_score: 5.0
redemption_score: 3.5
overall_score: 4.0
---

# ONyc — Retail Risk Report

**High risk · 4.0/10**

## What this actually is

ONyc is OnRe's tokenized reinsurance yield coin on Solana — a proportional claim on a **Bermuda-regulated segregated account** that underwrites short-duration insurance and reinsurance contracts. The reported yield, **11.64% APY (OnRe, July 2026 review)**, comes from real reinsurance premium income plus collateral yield on an sUSDe float. **That makes the return source genuinely less correlated to crypto than most DeFi yield products.**

⚠️ **The catch is equally important: ONyc holders are the first-loss insurance capital.** If catastrophe claims or underwriting losses exceed premiums and reserves, **NAV falls directly. There is no senior tranche sitting above holders.** The book is roughly one year old and **has not been tested through a major loss year.**

**Disambiguation.** "Onyx" is spelled **ONyc** and reads like "onyx." The OnRe sibling token **ONe** is a legacy structured-LP product and is not covered here — if you hold something labelled "ONe," confirm its current status directly with OnRe.

⚠️ **A scope note that governs every figure below: ONyc is Solana-only and this coverage does not currently run an independent read of it.** Every number here is **OnRe's own disclosure**, not a measurement of ours. That is a gap in what we monitor for this asset specifically, **not an absence of Solana-reading capability** — our tooling reads Solana for other assets.

## 1 · Stability

**Reference: NAV.** ONyc is not a stablecoin and should not be evaluated as a fixed $1 peg. It is a NAV-tracking vault share, and **NAV has moved from about $1.00 to about $1.13**, with the token recently trading close to it.

⚠️ **That smooth history reflects a young, calm period rather than a tested loss cycle.** Holders are first-loss underwriting capital: the mechanism by which NAV falls is a claims year, and there has not been one yet. **A flat line on a one-year-old first-loss instrument is an absence of evidence, not evidence of stability.**

⚠️ **NAV is operator-posted**, which is a further reason not to read the smoothness as independently confirmed.

## 2 · Backing

**What stands behind a share is a reinsurance book plus a collateral float**, held inside a Bermuda Segregated Accounts Company. OnRe cites **Class IIGB insurance and Class F digital-asset business licensing**, **Coinbase Prime custody**, and top-tier reinsurance brokers including **Guy Carpenter and Howden**. **That institutional wrapper is real and it is the strongest thing about this asset.**

⚠️ **What is missing is verification.** NAV is **operator-posted**, the reserves are not independently attested here, and **capital managed on-chain — $245.81M (OnRe, 2026-07-31) — is a disclosure rather than a read.** A regulated wrapper constrains behaviour; it does not substitute for a look-through.

⚠️ **One figure from the same source is deliberately omitted.** The July review's **"$357.21M across OnRe DeFi Markets"** against $245.81M managed on-chain **cannot be reconciled from public disclosure** — gross-of-recycled, cumulative-deployed and notional readings are all consistent with it — and **a number that large reads as scale when it may be a measure of leverage.** It will not appear here until it can be explained.

## 3 · Liquidity & Exit

**Both exit paths, and here both are constrained. The axis takes the worse one, and they are close.**

**Primary — gated, and bounded by something you can watch.** KYC and accredited-investor status required, **about 2.5% of NAV per period** into a pending queue, settling in USDC or USDG when liquidity allows, **filled at the prevailing NAV at fulfilment** — so if NAV moves while you are pending, you bear it. **The protocol does not force-unwind live reinsurance contracts to meet withdrawals.**

⚠️ **That last point is what makes capital utilisation the binding constraint.** OnRe reports **utilisation at 94.65% (2026-07-31)** — roughly **5% of the book is uncommitted capital**, and redemptions are served from that free slice. **The 2.5% gate is not an arbitrary throttle; it is calibrated to sit inside a thin slice.**

**In normal conditions this works** — 5% free against a 2.5% period draw is roughly two periods of cover, and the queue clears. ⚠️ **Under stress the arithmetic tightens from both ends at once:** redemption demand rises exactly when utilisation is highest, and new premium income is the main thing that replenishes the free slice. **A rise in utilisation is an early-warning signal on exit, and it moves before the queue visibly slows** — and unlike the queue, OnRe publishes it.

**Secondary — thin.** Roughly **$2.7M across Kamino, Orca, Raydium and Loopscale against $245.81M** managed on-chain — **about 1.1% of the book** — with **no centralized-exchange listing.**

⚠️ **This is severe exit asymmetry, and under stress the primary queue and secondary depth can tighten at the same time.** **Treat ONyc as an illiquid, long-hold credit / insurance position, not a cash-equivalent yield token.**

## 4 · Dependencies

⚠️ **Two risks are stacked here, and the stacking is the finding — neither one is the whole story.**

**1. Reinsurance underwriting — the core exposure and the source of the yield.** Premiums are earned up front, but large claims hit NAV, and **holders absorb them first.** Reinsurance is a large, established market and the exposure is genuinely uncorrelated to crypto. **That is the good half.**

**2. ⚠️ The collateral float is sUSDe, so Ethena sits underneath the insurance book.** Idle and reserve capital earns through sUSDe, which brings **Ethena's basis-trade, funding and peg risks** beneath everything above. **A holder is exposed to a bad claims year and to a funding-rate regime change, and those two have nothing to do with each other** — which means diversification between them, but two independent ways to lose rather than one.

**Add the operational dependency:** the whole position runs through **a single Solana program** and OnRe's own marking of NAV.

## 5 · Contract & Admin

⚠️ **On-chain control is single-key, and this is the sharpest gap between the legal wrapper and the code.**

Solana reads from **2026-07-22** show the **program upgrade authority and freeze authority are each a single plain wallet** — **no multisig, no timelock.** **One key can redeploy the mint and redemption logic, or freeze holder tokens.**

The token is a classic Solana SPL mint, 9 decimals, roughly **213.5M supply** as of that verification. Minting is mediated by an OnRe program PDA, **but the program itself is upgradeable by that single wallet.** A **Quantstamp audit** exists for the OnRe Solana implementation.

⚠️ **The Bermuda regulated wrapper is a real legal backstop, but it is off-chain. It does not remove the on-chain key risk**, and an audit describes the code as written rather than who may replace it.

## 6 · Issuer

**OnRe, a Bermuda Segregated Accounts Company.** ⚠️ **The institutional wrapper and partners are meaningful positives** — Class IIGB and Class F licensing, Coinbase Prime custody, Guy Carpenter and Howden as brokers, and a segregated-account structure that legally ring-fences the book.

⚠️ **What holds this axis at 5.0 rather than higher is that the on-chain reality does not match the off-chain one.** Single-key upgrade and freeze authority, operator-posted NAV, and **a disclosure set that this coverage cannot independently verify.** **Institutional legal wrapper, centralized on-chain trust** — the two halves point in opposite directions and the score sits between them.

## Who should avoid

- **Anyone who needs redeemable-at-par liquidity, a permissionless primary exit, or deep secondary markets.** The practical retail exit is thin DEX liquidity unless you can satisfy KYC and accreditation (axis 3).
- **Anyone who requires multisig or timelock governance before taking token risk.** Upgrade and freeze are single-key (axis 5).
- **Anyone who does not want first-loss insurance exposure, or stacked Ethena exposure** (axis 4).
- **Anyone reading the yield as a savings rate.** It is compensation for catastrophe risk, sUSDe collateral risk, a redemption gate and single-key trust (axes 1 and 4).

**ONyc is best sized, if at all, as a small long-hold sleeve for investors who explicitly want reinsurance-premium exposure and can tolerate delayed or impaired exit.**

## What to watch

- **Capital utilisation.** 94.65% at 2026-07-31, and **it moves before the queue visibly slows** — the single best early warning on exit (axis 3).
- **Whether upgrade and freeze authority ever move to a multisig or timelock.** The largest available improvement (axis 5).
- **A first real claims year.** The book is untested, and that is what the yield is paid for (axes 1 and 4).
- **Whether the $357.21M figure is ever reconciled against the $245.81M managed on-chain** (axis 2).
- **Ethena's funding regime**, which sits underneath the collateral float (axis 4).
---

*This report is built from publicly available documentation, third-party market data, and independent Solana RPC reads dated 2026-07-22. We hold no privileged information about OnRe, its contracts, or its insurance book. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-08-23 — capital utilization added; figures attributed and dated; all scores held. **The substantive gap was that this report explained the redemption gate without ever naming the constraint behind it** — the word "utilization" did not appear anywhere in it. OnRe's July 2026 review reports ONyc utilization at **94.65% as of 2026-07-31**, so roughly 5% of the book is uncommitted capital, and that free slice is what redemptions are paid from given the report's own statement that OnRe does not force-unwind live reinsurance contracts. The 2.5%-per-period queue is calibrated to sit inside it. **No axis moved:** Redemption 3.5 already priced a gated, capacity-limited exit, and this is the missing evidence for that score rather than a reason to change it. Figures refreshed and attributed: reported yield stated as **11.64% (OnRe, July 2026 review)** rather than "around 11%", which rounded the wrong way; capital managed on-chain stated as **$245.81M (OnRe, 2026-07-31)**, replacing "roughly $240M" in two places. Two figures were checked and deliberately **left alone**: NAV "about $1.13" is accurate against $1.1294, and the roughly 213.5M supply is explicitly dated to the July verification and remains correct as a dated fact. **One figure from the same source is deliberately omitted:** the review's "$357.21M across OnRe DeFi Markets" against $245.81M managed on-chain cannot be reconciled from public disclosure — gross-of-recycled, cumulative-deployed and notional readings are all consistent with it — and a number that large reads as scale when it may be a measure of leverage. It will not appear here until it can be explained. ONyc is Solana-only and this coverage does not currently run an independent read of it, so every figure in this report is OnRe's disclosure rather than a measurement of ours; `last_verified` is **not** bumped, since nothing here was independently verified. To be precise about why: this is a gap in what we monitor for ONyc specifically, not an absence of Solana-reading capability — our tooling does read Solana for other assets. 2026-07-23 — initial retail publish: new ONyc report; overall 4.0 with six-axis vault-share scoring; first-loss reinsurance exposure, sUSDe collateral stacking, single-key upgrade/freeze control, KYC/accredited redemption gate, and thin secondary liquidity are the binding risks.*
