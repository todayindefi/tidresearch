---
asset: "savETH"
slug: "saveth"
aliases: ["savETH", "Staked avETH", "Avant savETH"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["avETH"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
companion_report: "aveth"
date: "2026-06-14"
last_verified: "2026-07-04"
featured: false
production: false
issuer: "Avant Protocol"
volatility_score: 6.0
structural_score: 4.0
redemption_score: 4.0
liquidity_score: 3.5
issuer_score: 4.0
underlying_score: 4.0
overall_score: 4.0
live_dashboard_url: "https://app.avantprotocol.com/transparency"
---

# savETH — Retail Risk Report

**Elevated risk · 4.0/10 · Position view: reduce / exit while calm**

| Yield target | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ETH-denominated strategy yield accruing into ERC-4626 share value (~5.65% senior APY) | Unstake to avETH, then redeem avETH to ETH through Avant | 24-hour unstake plus up to 7-day avETH redemption (~8 days) | Young protocol | Ethereum |

## Summary

savETH is the yield-bearing senior staked tranche of Avant Protocol's [avETH](/reports/aveth/) system. Users stake avETH into a clean ERC-4626 vault and receive savETH shares. The share exchange rate accrues from Avant's ETH-denominated strategy returns; on-chain verification showed `asset()` pointing to avETH and `convertToAssets(1e18)` accruing above 1.04 avETH.

The key retail framing has sharpened since the June draft. savETH is not simply "ETH plus strategy risk plus a slow exit." On Avant's own transparency page the avETH suite is roughly **78% USD stablecoins and only about 14% spot ETH** — so savETH is really a **synthetic-ETH wrapper**: mostly dollars, with the ETH price exposure manufactured through an **off-chain hedge that Avant does not disclose and that contradicts its own "1:1 backed by ETH" documentation**. That hedge cannot be seen or monitored on-chain, and the dollar collateral underneath is circular (Avant's own savUSD/avUSD, which is roughly 77% Ethena USDe).

We have **lowered savETH to 4.0/10 and set a reduce/exit view.** Nothing is broken today — NAV is accruing, coverage is near par, there are no custody red flags — so this is an *exit-while-calm* call rather than a fire alarm. The reasoning is that the senior tranche is not paid enough (~5.65% APY) to compensate for a stacked, unverifiable risk tower when near-riskless wstETH pays about 3%, and the ~8-day two-stage exit is smallest exactly when stress would hit.

## Backing & solvency

savETH is backed by avETH, and avETH is backed by Avant's active strategy book. That book is **not mostly ETH.** On Avant's transparency page the avETH suite breaks down roughly as savUSD ~35%, avUSD ~22%, RLUSD ~21%, WETH ~7% and wstETH ~7% — about 78% dollars, about 14% ETH. Three consequences:

- **Synthetic and undisclosed.** Because the collateral is mostly USD, the ETH exposure has to be reconstructed via an off-chain long-ETH hedge. Avant's docs say avETH is "fully backed 1:1 by ETH," which the composition directly contradicts, and no doc discloses the hedge or its venue.
- **Unverifiable.** The strategy wallet holds only lending and LP positions on-chain (no perp venue). Any hedge is off-chain and invisible — an on-chain monitor would catch a break late.
- **Circular.** savETH ≈ savUSD in another denomination; avUSD underneath is about 77% Ethena USDe. A savUSD or USDe problem is a savETH problem.

Third-party NAV (Pennyworks, weekly) sits near par, but it is **a private number, not verification**: Avant publishes only the headline figure, with no public position-level report and no hedge-venue disclosure. Backing also spans several chains that on-chain aggregators under-index, so full backing is not independently verifiable.

savETH's structural advantage is still seniority: losses should hit the small Reserve Fund and the avETHx junior tranche before savETH. But the junior buffer is thin (on the order of low-teens percent of the senior book) and the Reserve Fund is tiny, so a large enough strategy loss still impairs the senior NAV. The underlying score is 4.0, matching the base [avETH](/reports/aveth/) which now carries the synthetic-composition discount.

## Exit liquidity

This is the binding risk for retail holders and the practical reason behind the reduce/exit view. There is no meaningful secondary-market shortcut. avETH is unlisted, and the savETH pool observed in mid-2026 was effectively negligible (a low-double-digit-dollar Uniswap V4 pool). The real exit is a two-stage process:

1. **savETH to avETH:** initiate an unstake request, wait 24 hours, then withdraw avETH. No yield accrues during cooldown. Starting a second unstake while one is in cooldown resets the timer on the whole pending balance, so tranching the exit can backfire — unstake in one action.
2. **avETH to ETH:** submit an Avant redemption request. Avant describes this as often completed within a few hours, but up to 7 days depending on market liquidity and other conditions. A fee may apply and is shown in the app.

In the worst normal case, savETH holders should think in terms of about an **8-day route to ETH**. The window that matters most is stress, because that is when strategy liquidity, the off-chain hedge, and redemption processing are all most likely to matter — and it is the same moment the exit door is narrowest.

## Yield dynamics

savETH yield is not paid as a separate token stream. It accrues into the ERC-4626 exchange rate: each savETH share should become redeemable for more avETH over time when Avant's ETH strategy book performs as intended. Senior APY has run around 5.65%, versus about 9% paid to the avETHx junior tranche that actually absorbs the risk — the senior is not paid for the risk stacked under it.

That exchange rate is the main signal to watch. There is no reliable market peg signal today because there is no meaningful public market. A flat or falling `convertToAssets` rate would be the clearest sign of senior impairment.

## Position view — reduce / exit (while calm)

Risk-adjusted, the senior tranche does not get paid for what sits under it: an unverifiable off-chain ETH hedge, a circular dependence on savUSD and Ethena USDe, off-chain and off-EVM backing legs, and a slow exit. About 2.6% of excess yield over near-riskless wstETH does not compensate for that tower. Nothing is broken today, so exiting is cheap now: you realize the accrued NAV over roughly 8 days, minus a possible small fee.

Practical guidance: start the two-stage redemption; if you want to keep some ETH-carry exposure, trim to a small toe-in you would accept losing entirely. Conditions that would justify holding again: a live independent Proof-of-Reserve that includes the hedge legs, a liquid secondary exit, timelocked or multisig admin, and a senior yield that actually pays for the risk — none of which exist today.

## Audits, admin & issuer

The savETH vault itself reads as a standard, non-paused ERC-4626 wrapper over avETH. The broader admin and issuer risk is inherited from avETH: the relevant owner address reads on-chain as a plain EOA with no Safe or timelock visible at the token level. Avant documents Fireblocks MPC custody and multi-signature controls, but that mapping is not independently proven by the contract surface, and MPC is not a timelock.

Avant lists Omniscia and Dedaub audits, Trail of Bits operational security work, Hypernative monitoring, Chainlink CCIP, and a planned Chainlink Proof-of-Reserve path. The issuer score is 4.0, held consistent across the four Avant reports.

## Who this is for

- At 4.0 with a reduce/exit view, this is not a report recommending accumulation. It is for existing holders deciding how to size down, and for anyone who insists on ETH-carry exposure and can accept that the ETH-ness rests on an unverifiable off-chain hedge.

## Who this is NOT for

- Anyone needing same-day liquid ETH exit at size.
- Anyone looking for a mature LST or simple ETH wrapper — savETH is mostly a dollar book with a synthetic ETH overlay.
- Anyone who cannot monitor and accept off-chain-hedge, USDe-concentration, and single-EOA-admin tails.

## What to watch

- `convertToAssets(1e18)` — any stall or decline is the clearest senior-impairment signal.
- The avETHx junior buffer protecting savETH, and any change in the USD-vs-ETH backing mix.
- Health of Ethena USDe and Avant's own savUSD underneath the dollar collateral.
- Redemption delays or fee increases during market stress.
- Admin-owner migration to a publicly verifiable Safe or timelock, and Proof-of-Reserve going live.

## Live dashboard

Avant's issuer-run transparency page is the current live data source for portfolio composition and performance: [app.avantprotocol.com/transparency](https://app.avantprotocol.com/transparency). TID Research now runs an independent exit-watch monitor over savETH and savUSD (NAV redemption rate, junior buffer, staking ratio, backing coverage, custody). Backing and hedge figures should still be treated as Avant-reported until independent verification of the off-chain legs is possible.

## Sibling

- [avETH](/reports/aveth/) — Avant's base ETH receipt and the asset savETH unwraps into before ETH redemption.
- [savUSD](/reports/savusd/) — the USD-side senior tranche, which has **no currency mismatch** and therefore no reduce/exit flag.

## Corrections

This report is based on Avant Protocol public documentation, its transparency dashboard, and on-chain reads only. These are issuer-run, off-chain-strategy assets: figures are Avant-reported until independent monitoring fully verifies them. It does not incorporate non-public disclosures. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
