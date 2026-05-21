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
last_verified: "2026-05-20"
featured: false
production: true
issuer: "Saturn Labs"
volatility_score: 6.0
structural_score: 4.5
redemption_score: 4.0
liquidity_score: 5.0
issuer_score: 5.0
underlying_score: 4.0
overall_score: 4.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susdat"
---

# sUSDat — Retail Risk Report

**Moderate-elevated risk · 4.5/10**

| Yield target | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ~11% APY target via STRC dividends (realized rate currently below target — verify on dashboard) | Curve SUSDAT/USDC (retail) or onboarded primary redemption | Minutes via Curve at retail sizes; longer via withdrawal queue + onboarded redeem | ~3 months | Ethereum |

## Summary

sUSDat is the yield-bearing ERC-4626 staking wrapper for Saturn's [USDat](/reports/usdat/) stablecoin. Users stake USDat 1:1 and receive sUSDat shares whose NAV grows from the dividend stream on **STRC** (Strategy's variable-rate perpetual preferred — Bitcoin-collateralized). The vault runs a **dynamic reserve** that rotates between on-chain USDat and off-chain STRC based on a published LTV rule tied to Strategy's Bitcoin net asset value.

The 4.5/10 score reflects a real audit set (Certora ×2 + Three Sigma), a credible ERC-4626 design with anti-sniping 30-day yield vesting, a designed proof-of-reserves pipeline (Accountable + Chainlink NAV oracle — though the feed is not yet live for Saturn), and the same shared issuer infrastructure as USDat — offset by single-cashflow-source exposure to MSTR/STRC, ~81% of vault NAV held off-chain at the custodian (with only the on-chain USDat buffer directly verifiable), gated primary redemption that asymmetrically favors onboarded holders, and the shared Saturn-represented Fireblocks 2-of-3 MPC admin key (no on-chain timelock, unverifiable infrastructure).

## Backing & solvency

This is the dimension where sUSDat differs most sharply from its sibling — **only a fraction of vault NAV is directly verifiable on-chain.**

The vault holds USDat as an on-chain "liquidity buffer" that anyone can read with a single `balanceOf` call. That buffer typically runs around one-fifth of total assets. The remaining four-fifths is held off-chain as STRC at the custodian; the contract's `totalAssets()` reports the combined value, but the off-chain leg currently relies on the contract's own report (oracle-attested but not yet pipelined through Accountable + Chainlink as designed).

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

At low LTV (currently the case, with Bitcoin well above stress levels), the reserve is heavily STRC-weighted and fully exposed to MSTR dividend and equity risk. The rule only meaningfully de-risks once LTV breaches 33–40%+; useful as a circuit-breaker, not as protection against mild-to-moderate STRC stress.

A live MSTR/Strategy NAV input is not yet wired into the dashboard — the LTV-band table is shown but the current band indicator is deferred until a free MSTR NAV feed is identified.

## Exit liquidity

Three paths, each with material trade-offs:

**Curve SUSDAT/USDC (retail).** The dominant secondary venue. Per-trade exit cost is competitive — a $500K exit clears at roughly 14.5 bps once capped to a 5%-of-TVL tier (about $176K of effective single-trade depth against ~$3.5M pool TVL), and discount-to-NAV has stayed inside a tight band. The live dashboard surfaces tier slippage at $1K / $10K / $100K / $500K. The binding capacity constraint is **pool-to-supply ratio** (about 3.4% of sUSDat supply sits in the Curve pool), not per-trade slippage — that's what the 5.0 Liquidity score is anchored to. Headline metric on the panel is **discount-to-NAV**, not absolute price vs $1 — important because sUSDat's NAV is north of $1 by design and absolute price comparisons mask the true discount.

**Withdrawal queue (ERC-4626 unstake).** Standard 4626 queue-based unstake into USDat. Useful as a backstop if secondary depth thins or for sizes the AMM can't absorb; 10 USDat minimum, queue cadence governed by vault state.

**Onboarded primary redemption.** Onboarded users redeem 1:1 against USDC through Saturn's app — the strongest path but only available to KYC'd holders. For non-onboarded users this path doesn't exist and exit is secondary-market or queue only.

The on-chain USDat buffer effectively serves as an instant-exit cushion: if secondary depth thins during stress, the queue can still service redemptions from the buffer without needing to liquidate STRC at the custodian. That's the design intent of the buffer, and the live dashboard surfaces the current buffer ratio.

## Peg & yield dynamics

**Discount-to-NAV.** sUSDat trades essentially flat to NAV on Curve — a tight discount band, with the dashboard showing the current value. Per vault-share convention, the headline metric is `(NAV - price) / NAV`, not absolute price vs $1 (sUSDat's NAV grows over time by design, so absolute-price-vs-dollar comparisons drift artificially).

**Yield.** Headline target is **~11% APY** via STRC dividend pass-through, vesting linearly into share NAV over 30 days (the anti-sniping mechanism that prevents deposit-before-dividend attacks). As of report date, the **realized accrual rate is materially below the headline target** — could reflect 30-day vesting lag on recent inflows, in-flight STRC ex-dividend cycle, or simply a low-yield period spanning a long verification window. The live dashboard renders the realized 7-day and 30-day APY against the 11% target line; verify against your own holding period before extrapolating.

The yield delivery mechanism is **STRC dividends accruing into share NAV**. You don't receive periodic payments; your shares grow in USDat-equivalent value over time. Tax treatment of this NAV growth is your problem to figure out.

## Audits, admin & team

**Audits:** shared with USDat — Three Sigma (Audit #1) and Certora (Audits #2 and #3). The ERC-4626 implementation includes Pausable + ReentrancyGuard plus the 30-day linear yield vesting design. Pause is itself an admin power held by the same key controlling the rest of the system.

**Admin posture is shared with USDat.** The same address holds DEFAULT_ADMIN_ROLE on both contracts and owns the USDat ProxyAdmin. **Saturn represents this address as a Fireblocks 2-of-3 MPC wallet** — on-chain reads cannot distinguish MPC from single-key EOA (the address shows no contract code, low outbound nonce). Taking the representation at face value, the raw single-key-compromise vector is eliminated: a 2-of-3 quorum is required for any admin action. But the same three caveats from the USDat sibling apply — signers are internal to Saturn's custody process, there is no on-chain timelock so admin actions land immediately once signed, and Fireblocks doesn't publish customer-verifiable infrastructure proofs. A coordinated MPC-quorum action still affects both assets simultaneously: it could drain the on-chain USDat buffer of sUSDat, upgrade share-accounting logic, or pause both contracts. Same residual risk class as Apyx's admin posture.

**Proof-of-reserves pipeline** is designed but not live. Documentation describes off-chain STRC attestation via Accountable plus a Chainlink NAV oracle consuming the feed; as of report date no feed is responding at the obvious endpoints. Until the feed activates, the 81% of NAV held off-chain depends on the contract's own `totalAssets()` reporting — a trust-the-oracle leg that is the binding monitoring gap on this asset.

**Implementation has been stable** for roughly the last 7 weeks since the post-launch upgrade. The dashboard's Trust Stack panel surfaces the current implementation address with a tier-1 alert wired into the Telegram alerter for any change.

## Who this is for

- **Yield-seekers comfortable with single-issuer Strategy/STRC exposure** who specifically want the published LTV-rotation defense and audited ERC-4626 mechanics — sUSDat is structurally better-engineered than the apxUSD/apyUSD peer cohort.
- **Onboarded institutional users** with primary-redemption access — the gated 1:1 USDC redemption path materially improves exit liquidity for this audience.

## Who this is NOT for

- **Anyone needing the strongest verifiable backing.** Only ~19% of NAV is directly on-chain-verifiable; the rest is oracle-attested. The pipeline is designed but not live.
- **Core stable allocations.** This is a speculative yield sleeve at best, not a substitute for sDAI, scrvUSD, or sUSDe in a defensive position. Single-cashflow-source (STRC) plus Saturn-represented Fireblocks 2-of-3 MPC admin (signers internal, no on-chain timelock) plus young protocol (~3 months).
- **Anyone wanting Bitcoin exposure indirectly** — STRC is Strategy's preferred-equity layer, not their common stock; this is fixed-income-shaped exposure to the Strategy capital stack, not a Bitcoin proxy.

## What to watch

- **NAV stall or regression.** The 30-day vesting design means NAV should monotonically rise; a flat or declining `nav_per_share` is a tier-1 signal (NAV regression implies an STRC loss event the vault is absorbing).
- **On-chain buffer ratio.** Watch for sustained drift below 10% — would imply either heavy STRC rotation under the LTV rule or a structural shift in how the vault manages liquidity.
- **Accountable PoR feed going live.** When the Saturn endpoint activates, the off-chain 81% leg gets a real attestation pipeline; that would materially upgrade the verifiability story (Contract & Admin axis).
- **Strategy/MSTR stress.** sUSDat's economic engine is MSTR's preferred-dividend service; sustained Bitcoin drawdown plus MSTR equity-side stress is the scenario where the LTV-rotation rule actually kicks in. Until the live LTV indicator ships on the dashboard, monitor MSTR independently.

## Live dashboard

Live reserve composition, NAV trajectory vs 11% APY target, discount-to-NAV, slippage tiers, admin status: [tidresearch.com/dashboards/?asset=susdat](https://tidresearch.com/dashboards/?asset=susdat) — refreshed hourly.

## Sibling

- [USDat](/reports/usdat/) — Saturn's non-yield leg, ~99% T-bill-backed via $M, 100% on-chain verifiable

## Corrections

This report is based on public Saturn documentation and on-chain reads only. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
