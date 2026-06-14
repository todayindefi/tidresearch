---
asset: "avETH"
slug: "aveth"
aliases: ["avETH", "Avant ETH"]
chains: ["eth"]
category: "wrapped-token"
underlying_assets: ["ETH"]
yield_bearing: false
assessment_type: "light"
audience: "retail"
companion_report: "saveth"
date: "2026-06-14"
last_verified: "2026-06-14"
featured: false
production: false
issuer: "Avant Protocol"
volatility_score: 6.0
structural_score: 4.5
redemption_score: 4.5
liquidity_score: 3.5
issuer_score: 4.0
underlying_score: 4.0
overall_score: 4.5
live_dashboard_url: "https://app.avantprotocol.com/transparency"
---

# avETH — Retail Risk Report

**Moderate-elevated risk · 4.5/10**

| Backing | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ETH-denominated active strategy book reported by Avant, not idle ETH custody | Avant app redemption request; no meaningful secondary market | Often a few hours, up to 7 days depending on strategy liquidity | Young protocol | Ethereum |

## Summary

avETH is Avant Protocol's base ETH receipt. Users deposit ETH or WETH, receive avETH, and can either hold it as the non-yield leg or stake it into [savETH](/reports/saveth/) for yield. It is marketed as 1:1 ETH-backed, but the real risk is not the same as a simple wrapped ETH token: Avant's docs describe the backing as an ETH-denominated active, market-neutral strategy book held through its Reserve Fund.

That means avETH keeps full ETH price exposure while adding protocol, strategy, redemption, and admin risk. If ETH falls, avETH holders still have ETH exposure. If Avant's strategy book underperforms or becomes hard to unwind, avETH can also de-anchor from ETH even if ETH itself is functioning normally.

The 4.5/10 score reflects a credible but early issuer with named audit and monitoring vendors, paired with thin liquidity, limited public reserve detail, request-based redemption, and a token owner that reads on-chain as a single EOA with no timelock, even though Avant documents institutional MPC custody.

## Backing & solvency

avETH is not best understood as idle ETH sitting in a vault. The backing claim depends on Avant's ETH-denominated Reserve Fund and the strategies inside it. Avant reports the portfolio composition and historical performance on its transparency page, but those figures are issuer-run and not yet reproduced by a TID Research live dashboard.

The senior/junior tranche design matters. avETH is the base receipt for the ETH suite, while savETH is the senior staked tranche and avETHx is the junior tranche designed to absorb losses after the Reserve Fund. That structure can protect savETH relative to the junior tranche, but it does not make avETH equivalent to native ETH custody.

The underlying score is held at 4.0 because the collateral is an opaque active-strategy ETH book, not a directly verifiable ETH balance. This is stronger than a purely unaudited promise, but weaker than a simple on-chain reserve or a mature liquid staking token with broad market validation.

## Exit liquidity

The exit story is the most important retail constraint. avETH has no meaningful public secondary market; the practical path out is an Avant app redemption request back to ETH.

Avant describes redemptions as often completed within a few hours, but potentially taking up to 7 days depending on market liquidity and other conditions. A redemption fee may apply and is shown in the app rather than fixed in the public report surface. Requests can be cancelled or adjusted before finalization.

For an avETH holder, that means the real exit is primary and strategy-liquidity-dependent. It is better than a staked position because there is only one leg, but it is not an atomic on-chain unwrap and should not be treated as same-block liquidity.

## Yield dynamics

avETH itself is non-yield-bearing. The yield product is [savETH](/reports/saveth/), where avETH is deposited into an ERC-4626 vault and share value accrues from Avant's ETH strategy returns.

Holding avETH instead of savETH reduces exit friction by avoiding the savETH unstake cooldown, but it gives up the staking yield and still carries the same issuer, Reserve Fund, and ETH exposure.

## Audits, admin & issuer

Avant lists Omniscia and Dedaub for smart-contract audits, Trail of Bits for ongoing operational security work, Hypernative monitoring, Chainlink CCIP, and a planned Chainlink Proof-of-Reserve path. That is a stronger security bench than many young active-strategy issuers.

The binding admin caveat is that the avETH `owner()` address reads on-chain as an EOA, not a Safe or timelocked contract. Avant's public security materials describe Fireblocks MPC-CMP custody, RBAC, policy controls, and multi-signature authorization for external asset transfers. Those controls are materially better than a raw hot key if applied to the relevant owner and reserve wallets, but the mapping is not independently confirmable from the token contract itself. MPC custody also does not create an on-chain reaction window for users.

The issuer score is therefore 4.0: real vendors and a documented security program, offset by youth, limited transparency, unverifiable custody mapping, and no visible timelock.

## Who this is for

- ETH holders who want exposure to Avant's ETH-denominated strategy ecosystem and can tolerate issuer and strategy risk on top of ETH volatility.
- Users who may later stake into savETH but want the shorter one-leg exit of the base receipt.

## Who this is NOT for

- Anyone looking for a pure ETH wrapper like WETH or a mature LST. avETH adds strategy and issuer risk.
- Anyone needing liquid market exit. The practical route is Avant's redemption process, not DEX depth.
- Anyone who cannot tolerate a multi-day redemption window during stress.

## What to watch

- Avant transparency page changes in Reserve Fund composition and strategy allocation.
- Any evidence of avETH trading away from ETH if an independent market develops.
- Redemption delays approaching the 7-day upper bound.
- Admin-owner migration to a publicly verifiable Safe or timelocked control path.
- Chainlink Proof-of-Reserve or equivalent independent reserve attestation going live.

## Live dashboard

Avant's issuer-run transparency page is the current live data source for portfolio composition, strategy allocation, and historical performance: [app.avantprotocol.com/transparency](https://app.avantprotocol.com/transparency). TID Research does not yet operate an independent avETH dashboard, so backing figures should be treated as Avant-reported until independent monitoring is added.

## Sibling

- [savETH](/reports/saveth/) — Avant's yield-bearing senior staked tranche for avETH, with an extra 24-hour unstake leg before avETH redemption.

## Corrections

This report is based on Avant Protocol public documentation and on-chain reads only. It does not incorporate non-public disclosures. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
