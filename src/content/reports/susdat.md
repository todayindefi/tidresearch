---
asset: "sUSDat"
slug: "susdat"
aliases: ["sUSDat", "Saturn sUSDat", "staked USDat"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["USDat"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
companion_report: "usdat"
date: "2026-05-20"
last_verified: "2026-07-13"
featured: false
production: true
issuer: "Saturn Labs"
volatility_score: 3.5
structural_score: 4.5
redemption_score: 3.5
liquidity_score: 3.5
issuer_score: 5.0
underlying_score: 3.5
overall_score: 3.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susdat"
---

# sUSDat — Retail Risk Report

**Significant risk · 3.5/10**

> **2026-07-13 update (canonical re-score) — cut one notch to 3.5/10 (Stability, Liquidity, Redemption 4.0→3.5; Contract & Admin 5.0→4.5). The STRC drawdown is now realized in the share price, and the on-chain cushion is nearly gone.** A fresh on-chain read (2026-07-13) shows the late-June STRC de-anchor flowed all the way into the share price: **a sUSDat share is now worth about 0.8930 USDat — −10.7% below par** (not just "less yield," an actual ~10% markdown), tracking STRC's fall to a $76 all-time low and partial recovery to about $87.48. The **on-chain USDat liquidity buffer has collapsed to about 1.8% of assets** (about $1.36M of $75.4M — down from about 7% in June and about 19% in May), so about 98% of NAV is now off-chain and a rush to exit would depend on selling STRC at the custodian. Total assets fell about 28% ($104.5M → $75.4M) on the NAV decline plus redemptions. **Why it's one notch and not more:** upstream, Strategy's ability to *pay* the STRC dividend actually strengthened — a record **$3.0B cash reserve** (about 20 months of dividend coverage) plus a discretionary STRC buyback now sit under the income stream, so the collateral's income is more durable even though its price mark is still sub-par. Net: still a speculative yield sleeve, now **3.5/10**, not a core-stable holding. Saturn's engineering (Certora audits, LTV-gated reserve, PoR design) is unchanged — this is a collateral look-through cut, not a Saturn failure. Watch item: Strategy's mNAV has slipped just below 1.0 (about 0.98); a *sustained* sub-1.0 with the reserve drawing down would pressure this further.

> **June 2026 STRC drawdown update (2026-06-09) — look-through, not a Saturn failure.** A about 16% Bitcoin drawdown (and about −21% in MSTR) pushed **STRC** — sUSDat's yield-bearing reserve — off its $100 par to about $93.4, breaking its $95 dividend-bump trigger. Because sUSDat now holds **about 93% of its assets as offchain STRC** (about $87.3M of about $94.3M, up from about 81% in May), its NAV-bearing reserve tracks that move almost 1:1, and the on-chain liquidity buffer has thinned to about 7%. This report's overall score moves **4.5 → 4.0**. The downgrade is inherited from the collateral (STRC) de-anchoring under Bitcoin stress, not from any change to Saturn's engineering (Certora audits, LTV-gated reserve, and the designed PoR pipeline are unchanged). sUSDat is the most STRC-concentrated asset we cover, so the cascade hits it hardest of the STRC wrappers — that is the point. Its companion **[USDat](/reports/usdat/) is M-backed (0% STRC) and is unaffected by this event.** **Update (2026-06-09):** the drawdown has now flowed through to the share NAV itself — sUSDat's NAV has reversed below its $1-par issuance and secondary has moved from flat to a low-single-digit discount-to-NAV; the tier-1 "NAV regression" signal this report flagged has fired.

| Yield target | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ≈11% APY target via STRC dividends (realized share NAV about 0.893 / −10.7% below par as of 2026-07-13 — live on dashboard) | Curve SUSDAT/USDC (retail) or onboarded primary redemption | Minutes via Curve at retail sizes; longer via withdrawal queue + onboarded redeem | about 3 months | Ethereum |

## Summary

sUSDat is the yield-bearing ERC-4626 staking wrapper for Saturn's [USDat](/reports/usdat/) stablecoin. Users stake USDat 1:1 and receive sUSDat shares whose NAV grows from the dividend stream on **STRC** (Strategy's variable-rate perpetual preferred — Bitcoin-collateralized). The vault runs a **dynamic reserve** that rotates between on-chain USDat and off-chain STRC based on a published LTV rule tied to Strategy's Bitcoin net asset value.

The 3.5/10 score reflects a real audit set (Certora ×2 + Three Sigma), a credible ERC-4626 design with anti-sniping 30-day yield vesting, a designed proof-of-reserves pipeline (Accountable + Chainlink NAV oracle — though the feed is not yet live for Saturn), and the same shared issuer infrastructure as USDat — offset by single-cashflow-source exposure to MSTR/STRC, about 98% of vault NAV held off-chain at the custodian as STRC + T-bills (up from about 81% in May, as the on-chain buffer drained; only the on-chain USDat buffer is directly verifiable), gated primary redemption that asymmetrically favors onboarded holders, and the shared Saturn-represented Fireblocks 2-of-3 MPC admin key (no on-chain timelock, unverifiable infrastructure). The 2026-07-13 cut to **3.5** reflects the STRC look-through moving lower plus a realized −10.7% share-NAV drawdown and a near-depleted on-chain buffer — see the dated callout above.

## Backing & solvency

This is the dimension where sUSDat differs most sharply from its sibling — **only a fraction of vault NAV is directly verifiable on-chain.**

The vault holds USDat as an on-chain "liquidity buffer" that anyone can read with a single `balanceOf` call. As of the 2026-07-13 on-chain read that buffer has **collapsed to about 1.8% of total assets** (about $1.36M against about $75.4M total) — down from about 7% in June and roughly one-fifth in May, as the reserve rotated further into STRC and total assets contracted about 28%. The remaining about 98% is held off-chain as STRC + T-bills at the custodian; the contract's `totalAssets()` reports the combined value, but the off-chain leg currently relies on the contract's own report (oracle-attested but not yet pipelined through Accountable + Chainlink as designed). This concentration is the reason the STRC de-anchoring flows almost undiluted into sUSDat's NAV — and with the buffer near zero, the instant-redemption cushion is nearly gone.

The live dashboard makes this asymmetry visually explicit: the reserve-split panel renders the on-chain leg as solid green (directly verifiable) and the off-chain STRC leg as striped amber (trust-the-oracle). This is not a "the assets aren't there" signal — by all available evidence the off-chain STRC is held and accruing dividends as advertised — but it is a structural reminder that the verifiability story for sUSDat is materially weaker than for USDat itself.

**Dynamic LTV rule** (published, defensive against severe MSTR stress):

| Strategy LTV | Target STRC allocation |
|---|---|
| < 28.57% | 100% |
| < 33.33% | 80% |
| < 40.00% | 60% |
| < 50.00% | 40% |
| < 66.67% | 20% |
| > 100% | 0% |

At low LTV (still the case even after the June 2026 drawdown — Strategy's LTV remains below the rotation thresholds, so the reserve sits STRC-dominant, with only about 1.8% on-chain and about 98% off-chain as STRC + T-bills), the reserve is heavily STRC-weighted and fully exposed to MSTR dividend and equity risk. This is exactly why the de-anchoring flowed straight through: the rule only meaningfully de-risks once LTV breaches 33–40%+, so it is useful as a circuit-breaker, not as protection against the mild-to-moderate STRC stress just witnessed.

A live MSTR/Strategy NAV input is not yet wired into the dashboard — the LTV-band table is shown but the current band indicator is deferred until a free MSTR NAV feed is identified.

## Exit liquidity

Three paths, each with material trade-offs:

**Curve SUSDAT/USDC (retail).** The dominant secondary venue. The live dashboard surfaces market-basis tier slippage at $1K / $10K / $100K / $500K — measuring exit cost against the live market price, which isolates pool depth from the discount-to-NAV. As of the June drawdown, discount-to-NAV has **widened to a low-single-digit discount below NAV** (out from the flat band it held through spring). The binding capacity constraint is **pool-to-supply ratio** (about 3.4% of sUSDat supply sits in the Curve pool), not per-trade slippage; the widened secondary discount plus the near-total collapse of the on-chain liquidity buffer (to about 1.8%) are what moved the Liquidity score to **3.5** — secondary exit now prices below NAV, and a coordinated exit depends almost entirely on STRC liquidation at the custodian. Headline metric on the panel is **discount-to-NAV**, not absolute price vs $1 — important because sUSDat's NAV moves independently of $1 (it accrued above par through spring, and in the June drawdown has fallen **below** par), so absolute price comparisons mask the true discount.

**Withdrawal queue (ERC-4626 unstake).** Standard 4626 queue-based unstake into USDat. Useful as a backstop if secondary depth thins or for sizes the AMM can't absorb; 10 USDat minimum, queue cadence governed by vault state.

**Onboarded primary redemption.** Onboarded users redeem 1:1 against USDC through Saturn's app — the strongest path but only available to KYC'd holders. For non-onboarded users this path doesn't exist and exit is secondary-market or queue only.

The on-chain USDat buffer effectively serves as an instant-exit cushion: if secondary depth thins during stress, the queue can still service redemptions from the buffer without needing to liquidate STRC at the custodian. That's the design intent of the buffer, and the live dashboard surfaces the current buffer ratio.

## Peg & yield dynamics

**Discount-to-NAV.** sUSDat now trades at a **low-single-digit discount to NAV** on Curve (out from the flat band it held through spring), with the dashboard showing the current value. Per vault-share convention, the headline metric is `(NAV - price) / NAV`, not absolute price vs $1 (sUSDat's NAV moves over time by design, so absolute-price-vs-dollar comparisons drift artificially).

**Yield.** Headline target is **≈11% APY** via STRC dividend pass-through, vesting linearly into share NAV over 30 days (the anti-sniping mechanism that prevents deposit-before-dividend attacks). As of the 2026-07-13 on-chain read, **cumulative NAV has reversed to about 0.893 (−10.7% below par)** — net accrual since launch is now negative, because the vault absorbs STRC mark-downs directly into share NAV, not merely as foregone yield. The 11% headline is STRC-mark-dependent and is never a floor: a drawdown in the STRC reserve subtracts from NAV the same way dividends add to it. The live dashboard renders the realized 7-day and 30-day APY against the 11% target line; verify against your own holding period before extrapolating.

The yield delivery mechanism is **STRC dividends accruing into share NAV**. You don't receive periodic payments; your shares grow in USDat-equivalent value over time. Tax treatment of this NAV growth is your problem to figure out.

## Audits, admin & team

**Audits:** shared with USDat — Three Sigma (Audit #1) and Certora (Audits #2 and #3). The ERC-4626 implementation includes Pausable + ReentrancyGuard plus the 30-day linear yield vesting design. Pause is itself an admin power held by the same key controlling the rest of the system.

**Admin posture is shared with USDat.** The same address holds DEFAULT_ADMIN_ROLE on both contracts and owns the USDat ProxyAdmin. **Saturn represents this address as a Fireblocks 2-of-3 MPC wallet** — on-chain reads cannot distinguish MPC from single-key EOA (the address shows no contract code, low outbound nonce). Taking the representation at face value, the raw single-key-compromise vector is eliminated: a 2-of-3 quorum is required for any admin action. But the same three caveats from the USDat sibling apply — signers are internal to Saturn's custody process, there is no on-chain timelock so admin actions land immediately once signed, and Fireblocks doesn't publish customer-verifiable infrastructure proofs. A coordinated MPC-quorum action still affects both assets simultaneously: it could drain the on-chain USDat buffer of sUSDat, upgrade share-accounting logic, or pause both contracts. Same residual risk class as Apyx's admin posture.

**Proof-of-reserves pipeline** is designed but not live. Documentation describes off-chain STRC attestation via Accountable plus a Chainlink NAV oracle consuming the feed; as of report date no feed is responding at the obvious endpoints. Until the feed activates, the about 98% of NAV now held off-chain depends on the contract's own `totalAssets()` reporting — a trust-the-oracle leg that is the binding monitoring gap on this asset, and one that has grown as the reserve rotated deeper into STRC and the on-chain buffer drained to about 1.8%.

**Implementation has been stable** for roughly the last 11 weeks since the post-launch upgrade (impl unchanged, verified on-chain 2026-07-13). The dashboard's Trust Stack panel surfaces the current implementation address with a tier-1 alert wired into the Telegram alerter for any change.

## Who this is for

- **Yield-seekers comfortable with single-issuer Strategy/STRC exposure** who specifically want the published LTV-rotation defense and audited ERC-4626 mechanics — sUSDat is structurally better-engineered than the apxUSD/apyUSD peer cohort.
- **Onboarded institutional users** with primary-redemption access — the gated 1:1 USDC redemption path materially improves exit liquidity for this audience.

## Who this is NOT for

- **Anyone needing the strongest verifiable backing.** Only about 1.8% of NAV is directly on-chain-verifiable (2026-07-13, down from about 7% in June and about 19% in May as the reserve rotated into STRC and the buffer drained); the rest is oracle-attested off-chain STRC + T-bills. The pipeline is designed but not live.
- **Core stable allocations.** This is a speculative yield sleeve at best, not a substitute for sDAI, scrvUSD, or sUSDe in a defensive position. Single-cashflow-source (STRC) plus Saturn-represented Fireblocks 2-of-3 MPC admin (signers internal, no on-chain timelock) plus young protocol (~3 months).
- **Anyone wanting Bitcoin exposure indirectly** — STRC is Strategy's preferred-equity layer, not their common stock; this is fixed-income-shaped exposure to the Strategy capital stack, not a Bitcoin proxy.

## What to watch

- **NAV stall or regression (fired, and deepened).** Under normal accrual the 30-day vesting design lifts NAV steadily; a flat or declining `nav_per_share` is a tier-1 signal that an STRC loss event is being absorbed into NAV. This signal **fired** in the June drawdown and has since **deepened to about 0.893 (−10.7% below par, on-chain 2026-07-13)**. Watch the dashboard's `nav_per_share` trajectory for whether it stabilizes on STRC's recovery or continues lower.
- **On-chain buffer ratio.** Has **collapsed to about 1.8%** (2026-07-13, from about 7% in June and about 19% in May) — the instant-exit cushion is nearly depleted, so a stress-period exit now has to liquidate STRC at the custodian. Watch whether the LTV rule or vault management rebuilds it.
- **Accountable PoR feed going live.** When the Saturn endpoint activates, the now-about-98% off-chain leg gets a real attestation pipeline; that would materially upgrade the verifiability story (Contract & Admin axis).
- **Strategy/MSTR stress (live).** sUSDat's economic engine is MSTR's preferred-dividend service. STRC de-anchored to a $76 all-time low in late June and has since recovered to about $87.48 (−12.5% to par), with the mark flowing straight through this concentrated reserve. At current low Strategy LTV the rotation rule has *not* yet de-risked the reserve — it only meaningfully kicks in above 33–40% LTV. The offset is that Strategy's dividend-paying capacity strengthened (record $3.0B reserve, discretionary STRC buyback). Until the live LTV indicator ships on the dashboard, monitor STRC independently; Strategy's mNAV has now slipped just below 1.0 (about 0.98), and a *sustained* sub-1.0 with the reserve drawing down would pressure this further.

## Live dashboard

Live reserve composition, NAV trajectory vs 11% APY target, discount-to-NAV, slippage tiers, admin status: [tidresearch.com/dashboards/?asset=susdat](https://tidresearch.com/dashboards/?asset=susdat) — refreshed hourly.

## Sibling

- [USDat](/reports/usdat/) — Saturn's non-yield leg, ~99% T-bill-backed via $M, 100% on-chain verifiable

## Corrections

This report is based on public Saturn documentation and on-chain reads only. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
