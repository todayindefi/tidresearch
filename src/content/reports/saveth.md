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
last_verified: "2026-06-14"
featured: false
production: false
issuer: "Avant Protocol"
volatility_score: 6.0
structural_score: 4.5
redemption_score: 4.0
liquidity_score: 3.5
issuer_score: 4.0
underlying_score: 4.5
overall_score: 4.5
live_dashboard_url: "https://app.avantprotocol.com/transparency"
---

# savETH — Retail Risk Report

**Moderate-elevated risk · 4.5/10**

| Yield target | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ETH-denominated strategy yield accruing into ERC-4626 share value | Unstake to avETH, then redeem avETH to ETH through Avant | 24-hour unstake plus up to 7-day avETH redemption | Young protocol | Ethereum |

## Summary

savETH is the yield-bearing senior staked tranche of Avant Protocol's [avETH](/reports/aveth/) system. Users stake avETH into a clean ERC-4626 vault and receive savETH shares. The share exchange rate accrues from Avant's ETH-denominated strategy returns; on-chain verification on 2026-06-14 showed `asset()` pointing to avETH and `convertToAssets(1e18)` at about 1.044 avETH.

The key retail framing is simple: savETH is ETH exposure plus Avant strategy risk plus a two-stage exit. It is not a stablecoin and not a liquid ETH wrapper. The reason to hold it over avETH is the senior-tranche yield and loss-buffer position. The cost is an extra 24-hour unstake cooldown before the holder even reaches avETH's own request-based redemption path.

The 4.5/10 score is level with avETH. The senior-tranche buffer and yield offset the longer exit, but not enough to move savETH into a safer tier. It still inherits Avant's active-strategy backing, young-protocol risk, thin liquidity, issuer-run transparency, and single-EOA visible admin surface.

## Backing & solvency

savETH is backed by avETH, and avETH is backed by Avant's ETH-denominated active strategy book. The important look-through risk is therefore the same as the base token: backing is not idle ETH custody, and public backing figures currently come from Avant's own transparency page rather than an independent TID Research dashboard.

savETH's structural advantage is seniority. Avant's ETH suite is designed as avETH base receipt, savETH senior staked tranche, and avETHx junior tranche. Losses should hit the Reserve Fund and junior tranche before savETH. That is useful protection, but it is not an absolute guarantee. A large enough strategy loss can still impair the senior tranche.

The underlying score is 4.5 because savETH's direct underlying is avETH, the 4.5-rated base asset. The issuer score is the same 4.0 as avETH because both depend on the same Avant admin and operational stack.

## Exit liquidity

This is the binding risk for retail holders. There is no meaningful secondary-market shortcut. avETH is unlisted, and the savETH public pool observed in June 2026 was effectively negligible. The real exit is a two-stage process:

1. **savETH to avETH:** initiate an unstake request, wait 24 hours, then withdraw avETH. No yield accrues during cooldown. Starting a second unstake while one is in cooldown resets the timer on the whole pending balance, so tranching the exit can backfire.
2. **avETH to ETH:** submit an Avant redemption request. Avant describes this as often completed within a few hours, but up to 7 days depending on market liquidity and other conditions. A fee may apply and is shown in the app.

In the worst normal case, savETH holders should think in terms of about an 8-day route to ETH: one day to leave savETH, then as much as 7 days for avETH redemption. The window that matters most is stress, because that is when strategy liquidity and redemption processing are most likely to matter.

## Yield dynamics

savETH yield is not paid as a separate token stream. It accrues into the ERC-4626 exchange rate: each savETH share should become redeemable for more avETH over time when Avant's ETH strategy book performs as intended.

That exchange rate is the main signal to watch. There is no reliable market peg signal today because there is no meaningful public market. A flat or falling `convertToAssets` rate would be more important than a small pool print.

## Audits, admin & issuer

The savETH vault itself reads as a standard ERC-4626 wrapper over avETH, and the 2026-06-14 on-chain check confirmed the expected underlying asset and accruing exchange rate. The broader admin and issuer risk is inherited from avETH.

Avant lists Omniscia and Dedaub audits, Trail of Bits operational security work, Hypernative monitoring, Chainlink CCIP, and a planned Chainlink Proof-of-Reserve path. The security bench is real, but the visible admin posture still carries a material caveat: the relevant owner address reads on-chain as a plain EOA, with no Safe or timelock visible at the token level. Avant documents Fireblocks MPC custody and multi-signature controls, but that mapping is not independently proven by the contract surface.

## Who this is for

- ETH yield seekers who understand that the yield comes from Avant's active strategy book, not native ETH staking alone.
- Holders comfortable with a senior-tranche position that may have better loss absorption than the junior tranche but still inherits issuer and strategy risk.

## Who this is NOT for

- Anyone needing same-day liquid ETH exit at size.
- Anyone looking for a mature LST or simple ETH wrapper.
- Anyone unwilling to accept an issuer-run transparency source until independent monitoring is available.

## What to watch

- `convertToAssets(1e18)` and any stall or decline in the savETH exchange rate.
- The size of the avETHx junior buffer protecting savETH.
- Avant transparency page changes in Reserve Fund strategy allocation.
- Redemption delays or fee increases during periods of market stress.
- Admin-owner migration to a publicly verifiable Safe or timelock.

## Live dashboard

Avant's issuer-run transparency page is the current live data source for portfolio composition, strategy allocation, and historical performance: [app.avantprotocol.com/transparency](https://app.avantprotocol.com/transparency). TID Research does not yet operate an independent savETH dashboard, so backing and performance figures should be treated as Avant-reported until independent monitoring is added.

## Sibling

- [avETH](/reports/aveth/) — Avant's base ETH receipt and the asset savETH unwraps into before ETH redemption.

## Corrections

This report is based on Avant Protocol public documentation and on-chain reads only. It does not incorporate non-public disclosures. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
