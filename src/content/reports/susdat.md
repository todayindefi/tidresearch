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
last_verified: "2026-08-18"
featured: false
production: true
issuer: "Saturn Labs"
volatility_score: 3.5
structural_score: 4.5
redemption_score: 3.5
liquidity_score: 3.5
issuer_score: 5.5
underlying_score: 3.5
overall_score: 3.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susdat"
---

# sUSDat — Retail Risk Report

**Significant risk · 3.5/10**

| Yield target | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| About 11% APY target via STRC dividends — realized share value has been below par since June 2026; live figure on the dashboard | Curve sUSDat/USDC (retail) or onboarded primary redemption | Minutes via Curve at retail sizes; Saturn documents about 3–7 days for the unstaking queue, executed when market conditions permit | About 6 months | Ethereum |

## Summary

sUSDat is the yield-bearing ERC-4626 staking wrapper for Saturn's [USDat](/reports/usdat/) stablecoin. Users stake USDat 1:1 and receive sUSDat shares whose value grows from the dividend stream on **STRC** — Strategy's variable-rate perpetual preferred, ultimately Bitcoin-collateralized. The vault runs a **dynamic reserve** that rotates between on-chain USDat and off-chain STRC according to a published LTV rule tied to Strategy's Bitcoin net asset value.

**A sUSDat share is currently worth less than the USDat that was staked for it.** STRC de-anchored from its $100 par during the June 2026 Bitcoin drawdown, bottoming near $76, and because roughly 98% of this vault's assets are STRC held off-chain, that mark flowed almost undiluted into the share price. Share value fell to about 11% below par in July and has since recovered a good part of that as Strategy's buyback bid lifted STRC back toward the mid-$90s. The direction to understand is structural, not the day's number: **this vault absorbs STRC drawdowns directly into share value, not merely as foregone yield.** The 11% headline is a target conditional on the STRC mark, never a floor.

The 3.5/10 score reflects a genuinely good piece of engineering wrapped around a concentrated credit bet. In its favour: a real audit set (Certora twice plus Three Sigma), a credible ERC-4626 design with 30-day anti-sniping yield vesting, a published LTV-rotation defense, a designed proof-of-reserves pipeline, and an admin surface that — as of June 2026 — sits behind the same 5-day on-chain timelock as USDat. Against it: a single cash-flow source in STRC, about 98% of vault value held off-chain at a custodian and visible only through the vault's own reporting, an on-chain buffer near depletion, and a primary redemption path gated to onboarded holders.

## Backing & solvency

This is the dimension where sUSDat differs most sharply from its sibling — **only a fraction of vault value is directly verifiable on-chain.**

The vault holds USDat as an on-chain "liquidity buffer" that anyone can read with a single `balanceOf` call. That buffer has been running in the low single digits as a share of assets since midsummer — oscillating in a roughly 1.4% to 2.3% band across recent reads, against roughly one-fifth back in May — as the reserve rotated further into STRC. The remaining **about 98–99% is held off-chain as STRC plus T-bills at the custodian**. The contract's `totalAssets()` reports the combined value, but the off-chain leg currently rests on the contract's own reporting rather than on the Accountable attestation and Chainlink NAV oracle the documentation describes.

The live dashboard makes this asymmetry visually explicit: the reserve-split panel renders the on-chain leg as solid green (directly verifiable) and the off-chain STRC leg as striped amber (trust-the-oracle). This is not a "the assets aren't there" signal — by all available evidence the off-chain STRC is held and accruing dividends as advertised — but it is a structural reminder that the verifiability story for sUSDat is materially weaker than for USDat itself, and it is the reason STRC's price moves land in the share price almost one-for-one.

**Dynamic LTV rule** (published, defensive against severe Strategy stress):

| Strategy LTV | Target STRC allocation |
|---|---|
| < 28.57% | 100% |
| < 33.33% | 80% |
| < 40.00% | 60% |
| < 50.00% | 40% |
| < 66.67% | 20% |
| > 100% | 0% |

Strategy's LTV has stayed below the first rotation threshold throughout the events of 2026, so the reserve has sat STRC-dominant the entire time. That is exactly why the de-anchoring flowed straight through: the rule only meaningfully de-risks once LTV breaches the 33–40% region, which makes it a circuit-breaker against severe stress rather than protection against the moderate stress actually witnessed. Treat it as insurance against a catastrophe, not as a hedge.

A live Strategy NAV input is not yet wired into the dashboard — the LTV-band table is shown, but the current-band indicator is deferred until a free feed is identified.

## Exit liquidity

Three paths, each with material trade-offs:

**Curve sUSDat/USDC (retail).** The dominant secondary venue, and a thin one: the pool holds well under a tenth of a percent of sUSDat supply. The live dashboard surfaces market-basis slippage at $1K / $10K / $100K / $500K, measuring exit cost against the live market price so that pool depth is isolated from the discount to NAV. Since June the secondary has traded at a **discount to net asset value in the region of one percent**, on top of a NAV that is itself below par. A non-onboarded holder exiting here pays both. The binding constraint is pool-to-supply capacity rather than per-trade slippage at retail size — there simply is not much pool.

**Withdrawal queue (ERC-4626 unstake).** The standard 4626 queue-based unstake into USDat, with a 10 USDat minimum. Saturn documents an expectation of **about 3–7 days, executed when market conditions permit**, with an improvement flagged for a future vault version. Read that phrasing carefully: it is a discretionary settlement window, not a contractual deadline, and the discretion exists because filling the queue at size means selling STRC at the custodian.

**Onboarded primary redemption.** Onboarded users redeem 1:1 against USDC through Saturn's app — the strongest path, but only available to KYC'd holders. For everyone else it does not exist.

The on-chain USDat buffer is designed to be the instant-exit cushion: if secondary depth thins during stress, the queue can service redemptions from the buffer without liquidating STRC. **With that buffer running around 1.4% of assets, the cushion is close to nominal**, and a coordinated exit now depends almost entirely on selling STRC at the custodian into whatever market exists that week. The dashboard surfaces the current buffer ratio, and it is one of the two or three numbers on this asset actually worth checking.

**Exits are being paid out of that buffer, and that concentrates whoever stays.** This is the one genuinely new thing to report, and it is not visible in the headline figures. Between 2026-07-28 and 08-17:

| | 2026-07-28 | 2026-08-17 |
|---|---|---|
| Share supply | 89.16M | **80.32M** (−9.91%) |
| NAV per share | 0.9063 | **0.9795** (+8.08%) |
| On-chain buffer | $8.65M | **$1.13M** (−86.98%) |
| Total assets | $80.80M | **$78.67M** (−2.64%) |
| Buffer ÷ off-chain STRC | 11.98% | **1.45%** |

**Total assets barely moved — down 2.6% — because the 8.08% rise in share value almost exactly offset a 9.91% outflow of shares.** If you were watching total assets alone, you would have seen a vault holding steady through a recovery. What actually happened is that roughly a tenth of the shares left, and they were paid from the instantly-liquid slice.

That is the mechanism that matters. Redemptions are served from the on-chain buffer first, because it is the only part of the vault that can pay immediately. So **every exit leaves the remaining holders more concentrated in the off-chain STRC leg, with less cushion behind them** — the people who go first take the liquid part, and the people who stay are left holding a higher proportion of the illiquid part. This is the classic first-mover dynamic in any fund with a liquidity sleeve, and it is operating here in plain sight.

Two things to keep in proportion. The 2026-07-28 buffer peak was a **transient spike**, not a normal level — measured against this report's own earlier readings (about 1.8% in July, about 2.3% in August) the current 1.4% is a modest move within the band this vault has oscillated in for months, not a collapse. And the off-chain STRC figure is a **residual** — total assets minus the on-chain buffer — not an independently attested number. It confirms that the buffer fell; it is not evidence of what was bought with it.

## Peg & yield dynamics

**Discount to NAV.** Per vault-share convention the headline metric is `(NAV − price) / NAV`, not the absolute price against a dollar — sUSDat's NAV moves by design, so dollar comparisons drift artificially. The discount has held around one percent since June, out from the roughly flat band it kept through spring.

**Share value against par.** Distinct from the discount, and more important: shares are worth less USDat than was staked for them. The vault reached about 11% below par in July, and the subsequent STRC recovery into the mid-$90s has lifted it back to roughly 2–3% below par. This is the dynamic-reserve thesis playing out in public — dividends add to share value and STRC mark-downs subtract from it, symmetrically.

**Yield.** The headline target is **about 11% APY** via STRC dividend pass-through, vesting linearly into share value over 30 days — an anti-sniping mechanism that prevents deposit-before-dividend attacks and is a genuinely good design choice often skipped in newer vaults. You do not receive periodic payments; your shares grow in USDat-equivalent value. The dashboard renders realized 7-day and 30-day APY against the 11% target line. Tax treatment of that growth is your problem to figure out.

**The upstream cash flow is stronger than the mark suggests, with a caveat.** Strategy's ability to *pay* the STRC dividend improved materially through 2026: its Q2 filing confirmed a large and growing cash reserve — on the order of several billion dollars, covering years of preferred dividends — and a discretionary buyback program has been supporting the STRC price directly. The caveat is that this bid is **Bitcoin-funded and finite**: recent repurchases were paid for by selling BTC, the program has a stated size, and at the pace seen through August it is on track to be exhausted around late September 2026. A price recovery driven by an expiring issuer bid is not the same thing as a durable re-rating, and the LTV rule that is supposed to protect this vault keys off the very Bitcoin holdings being sold to fund it.

## Audits, admin & team

**Audits:** shared with USDat — Three Sigma (Audit #1) and Certora (Audits #2 and #3). The ERC-4626 implementation includes Pausable and ReentrancyGuard alongside the 30-day linear yield vesting. Pause is itself an admin power. The implementation contract has been stable since the post-launch upgrade, verified unchanged on-chain.

**Admin control sits behind a 5-day on-chain timelock, shared with USDat.** `DEFAULT_ADMIN_ROLE` on sUSDat is held by the same `TimelockController` that administers USDat and owns its ProxyAdmin — minimum delay 432,000 seconds, exactly five days, verified independently on-chain on 2026-08-11. The migration from the previous single-key admin took place in early June 2026. Execution of a queued action is permissionless (the executor role is held by the zero address), and the timelock administers itself, so the delay cannot be shortened and roles cannot be regranted without first passing through the five days.

For a holder, the practical benefit is an observation window: an admin action against this vault — a logic upgrade, a pause, a change to share accounting — becomes visible five days before it can take effect. The residual is that **Saturn remains the sole proposer and sole canceller**, so it alone decides what enters the queue, and it continues to represent the proposer key as a Fireblocks 2-of-3 MPC wallet — a claim on-chain reads cannot verify, since an MPC wallet and an ordinary key look identical from outside. A single admin surface still gates both Saturn assets at once; what changed is that it now moves slowly and in public.

The Issuer axis scores Saturn Labs the company, so it is deliberately identical to the one on [USDat](/reports/usdat/): the same entity, the same timelock, the same custody representation, and the same KYC-permissioned holder universe, which sUSDat inherits by wrapping a permissioned token. It is the one axis on this report that does not describe the vault itself.

**Proof-of-reserves pipeline is designed but not live.** Documentation describes off-chain STRC attestation via Accountable plus a Chainlink NAV oracle consuming the feed; no feed is responding at the obvious endpoints. Until it activates, the roughly 98% of value held off-chain depends on the contract's own `totalAssets()` reporting. This is the binding monitoring gap on the asset, and it has widened as the reserve rotated deeper into STRC.

**Deployments beyond Ethereum.** Saturn documents BNB Chain and Monad deployments. This assessment covers the Ethereum deployment, which is where the liquidity and the verifiable reserve sit; treat other chains as unassessed until a separate read is published.

## Who this is for

- **Yield-seekers comfortable with single-issuer Strategy/STRC exposure** who specifically want the published LTV-rotation defense and audited ERC-4626 mechanics — sUSDat is structurally better-engineered than the apxUSD/apyUSD peer cohort.
- **Onboarded institutional users** with primary-redemption access — the gated 1:1 USDC redemption path materially improves exit for that audience and is unavailable to everyone else.

## Who this is NOT for

- **Anyone needing verifiable backing.** Only about 1–2% of value is directly on-chain-verifiable; the rest is off-chain STRC plus T-bills, reported by the vault itself. The attestation pipeline is designed, not live.
- **Core stable allocations.** This is a speculative yield sleeve, not a substitute for sDAI, scrvUSD, or sUSDe in a defensive position. Single cash-flow source, near-empty on-chain buffer, thin secondary, gated primary redemption, and a share price that has spent months below par.
- **Anyone who needs a predictable exit date.** The queue settles in a documented 3–7 days *when market conditions permit*, and the buffer that would otherwise absorb a rush is around 1.4% of assets — and is itself being consumed by the exits ahead of you.
- **Anyone wanting indirect Bitcoin exposure** — STRC is Strategy's preferred-equity layer, not its common stock. This is fixed-income-shaped exposure to the Strategy capital stack, with Bitcoin risk arriving through the issuer's balance sheet rather than through a price link.

## What to watch

- **Share value against par, and the direction of travel.** Under normal accrual the 30-day vesting design lifts it steadily; a flat or falling figure means an STRC mark is being absorbed. The recovery from the July trough is real but incomplete, and it is driven by a buyback with a finite budget.
- **The on-chain buffer ratio.** Around 1.4% of assets, and being drawn down by redemptions rather than rebuilt. Whether vault management restores it is the clearest available signal about how seriously Saturn treats stress-period exit.
- **Share supply, separately from total assets.** Total assets can sit flat while a tenth of the shares leave, because a rising share value offsets the outflow. Supply is the number that shows you whether holders are exiting; assets alone will not.
- **The Accountable proof-of-reserves feed going live.** That would convert the 98% off-chain leg from self-reported to attested, and is the single change that would most improve this asset's structural score.
- **Strategy's buyback runway.** The STRC-supporting bid is Bitcoin-funded and, at the pace seen through August 2026, on track to run out around late September. What STRC does after it stops is the real test of the recovery.
- **Anything queued in the shared timelock.** Scheduled admin actions are visible for five days before they can execute — for this vault that includes pause, upgrade, and share-accounting changes.

## Live dashboard

Live reserve composition, share-value trajectory against the 11% APY target, discount to NAV, slippage tiers, and admin status: [tidresearch.com/dashboards/?asset=susdat](https://tidresearch.com/dashboards/?asset=susdat) — refreshed hourly.

## Sibling

- [USDat](/reports/usdat/) — Saturn's non-yield leg, effectively 100% T-bill-backed via $M, 100% on-chain verifiable, and unaffected by STRC

---

*This report is based on public Saturn and Strategy documentation and independent on-chain reads, most recently on 2026-08-18. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).*

*Revision history: 2026-08-18 — all scores held; one new structural finding. **Redemptions are being paid out of the on-chain buffer, and total assets conceal it.** Between 2026-07-28 and 08-17 share supply fell 89.16M → 80.32M (−9.91%) while total assets moved only $80.80M → $78.67M (−2.64%), because an +8.08% rise in share value offset the outflow — so the headline asset figure looked stable through a meaningful exit. Over the same window the on-chain buffer fell $8.65M → $1.13M and the buffer-to-off-chain-STRC ratio went 11.98% → 1.45%. The durable point is the first-mover dynamic: exits take the instantly-liquid slice, leaving remaining holders more concentrated in the off-chain STRC leg with less cushion. Two proportion checks recorded alongside it — the 07-28 buffer peak was a transient spike rather than a baseline, so against this report's own earlier readings (about 1.8% in July, about 2.3% on 08-11) the current level is a modest move inside the observed band; and the off-chain STRC figure is a residual, not an attested balance, so it evidences that the buffer fell but not what was bought. Figures refreshed: buffer to around 1.4% of assets, share value to roughly 2–3% below par. No axis moved — the concentration, off-chain reserve and depleted buffer that set the existing scores are unchanged, and this finding sharpens the description of them rather than altering it. 2026-06-09 — the June 2026 Bitcoin drawdown pushed STRC off its $100 par and through the vault's concentrated reserve into share value; overall 4.5 → 4.0. Inherited from the collateral, not from any change to Saturn's engineering. 2026-07-13 — volatility, liquidity and redemption 4.0 → 3.5, structural 5.0 → 4.5, overall 4.0 → 3.5. The drawdown was realized in the share price at about 11% below par, the on-chain liquidity buffer had collapsed to roughly 2% of assets, and total assets had fallen about 28%. Capped at one notch because Strategy's capacity to keep paying the STRC dividend strengthened over the same window. 2026-08-11 — issuer 5.0 → 5.5, overall held at 3.5. **Corrected the statement that the vault's admin has no on-chain timelock**: `DEFAULT_ADMIN_ROLE` moved in early June 2026 to a self-administered `TimelockController` with a 5-day minimum delay and permissionless execution, shared with USDat and verified on-chain, so admin actions no longer land without warning. Refreshed the headline figures, which had been carrying the July trough: share value has recovered from about 11% below par to within a few percent on Strategy's STRC buyback, total assets have risen rather than fallen, and the on-chain buffer sits near 2%. Added the documented 3–7 day unstaking window, the finite Bitcoin-funded nature of the STRC buyback bid, and the BNB Chain and Monad deployments. The issuer move carries the same admin finding as USDat and keeps both assets on one number for one company; every other axis is unchanged, because the admin improvement does not touch the single-cash-flow concentration, the off-chain reserve, or the depleted buffer that set them. Initial publish 2026-05-20.*
