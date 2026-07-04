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
last_verified: "2026-07-04"
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
| Marketed as 1:1 ETH, but on Avant's own transparency page it is roughly 78% USD stablecoins and only about 14% spot ETH | Avant app redemption request; no meaningful secondary market | Often a few hours, up to 7 days depending on strategy liquidity | Young protocol | Ethereum |

## Summary

avETH is Avant Protocol's base ETH receipt. Users deposit ETH or WETH, receive avETH, and can either hold it as the non-yield leg or stake it into [savETH](/reports/saveth/) for yield. It is marketed as 1:1 ETH-backed, but the real risk is not the same as a simple wrapped ETH token: Avant's docs describe the backing as an ETH-denominated active, market-neutral strategy book held through its Reserve Fund.

A closer look at that book on 2026-07-04 (Avant's transparency page plus on-chain reads) shows something more specific and more important: **avETH is not actually backed mostly by ETH.** On Avant's own numbers the avETH suite is roughly 78% USD stablecoins (savUSD, avUSD and RLUSD) and only about 14% spot ETH (WETH plus wstETH). That means the "ETH-ness" of avETH is largely **reconstructed synthetically** — the protocol holds mostly dollars and must manufacture the ETH price exposure through an off-chain hedge. It is the mirror image of a synthetic dollar like Ethena's USDe, only pointed at ETH instead of USD.

The 4.5/10 score reflects a credible but early issuer with named audit and monitoring vendors, paired with thin liquidity, a backing mix that contradicts the "1:1 ETH" marketing, request-based redemption, and a token owner that reads on-chain as a single EOA with no timelock, even though Avant documents institutional MPC custody.

## Backing & solvency

avETH is not best understood as idle ETH sitting in a vault, and it is also not the mostly-ETH book the marketing implies. On Avant's transparency page the avETH suite breaks down roughly as:

- **savUSD ~35% and avUSD ~22%** — about 57% is Avant's *own* USD stablecoin tokens, i.e. recursive exposure to its sibling product.
- **RLUSD ~21%** — another USD stablecoin.
- **WETH ~7% and wstETH ~7%** — only about 14% is actually ETH.

So an "ETH-denominated" token is roughly 78% backed by dollars. Three things follow that a retail holder should sit with:

1. **The composition contradicts the docs.** Avant markets avETH as "fully backed 1:1 by ETH," which does not match its own ~78%-USD disclosure. The ETH price delta has to be produced by an off-chain hedge (most likely a long-ETH overlay against the USD collateral). No public doc discloses that hedge, its venue, or its size.
2. **The hedge is unverifiable.** The avETH strategy wallet shows only lending and LP positions on-chain — no perpetual-futures venue. Any ETH hedge lives off-chain (a CEX or OTC desk) and cannot be seen or monitored. The synthetic-hedge reading is the most likely explanation, but a partially unhedged mismatch cannot be fully ruled out from public data.
3. **It is circular.** The dollar side of avETH's backing (savUSD / avUSD) is itself roughly 77% Ethena USDe underneath. So avETH stacks: ETH claim → off-chain ETH hedge → Avant's own USD stablecoin → Ethena's USDe basis trade. A problem in USDe or savUSD is also an avETH problem.

Third-party NAV is computed weekly by Pennyworks and sits near par, which is reassuring but is **a private number, not verification** — Avant publishes the headline NAV figure only, with no public position-level report and no disclosure of the hedge venues.

The senior/junior tranche design still matters: avETH is the base receipt, savETH is the senior staked tranche, and avETHx is the junior tranche designed to absorb losses after the Reserve Fund. That structure can protect savETH relative to the junior tranche, but it does not make avETH equivalent to native ETH custody.

The underlying score is held at 4.0 because the collateral is an opaque, mostly-USD active-strategy book with a synthetic ETH overlay, not a directly verifiable ETH balance.

## Exit liquidity

The exit story is the most important retail constraint. avETH has no meaningful public secondary market; the practical path out is an Avant app redemption request back to ETH.

Avant describes redemptions as often completed within a few hours, but potentially taking up to 7 days depending on market liquidity and other conditions. A redemption fee may apply and is shown in the app rather than fixed in the public report surface. Requests can be cancelled or adjusted before finalization.

For an avETH holder, that means the real exit is primary and strategy-liquidity-dependent. It is better than a staked position because there is only one leg, but it is not an atomic on-chain unwrap and should not be treated as same-block liquidity.

## Yield dynamics

avETH itself is non-yield-bearing. The yield product is [savETH](/reports/saveth/), where avETH is deposited into an ERC-4626 vault and share value accrues from Avant's ETH strategy returns.

Holding avETH instead of savETH reduces exit friction by avoiding the savETH unstake cooldown, but it gives up the staking yield and still carries the same issuer, backing-composition, hedge, and ETH exposure.

## Audits, admin & issuer

Avant lists Omniscia and Dedaub for smart-contract audits, Trail of Bits for ongoing operational security work, Hypernative monitoring, Chainlink CCIP, and a planned Chainlink Proof-of-Reserve path. That is a stronger security bench than many young active-strategy issuers.

The binding admin caveat is that the avETH `owner()` address reads on-chain as an EOA, not a Safe or timelocked contract. Avant's public security materials describe Fireblocks MPC-CMP custody, RBAC, policy controls, and multi-signature authorization for external asset transfers. Those controls are materially better than a raw hot key if applied to the relevant owner and reserve wallets, but the mapping is not independently confirmable from the token contract itself. MPC custody also does not create an on-chain reaction window for users.

The issuer score is 4.0, held consistent across all four Avant reports (avUSD, savUSD, avETH, savETH): real vendors and a documented security program, offset by youth, limited transparency, unverifiable custody mapping, and no visible timelock.

## Who this is for

- ETH holders who want exposure to Avant's ETH-denominated strategy ecosystem and understand that the ETH exposure is manufactured through an off-chain hedge, not held as spot ETH.
- Users who may later stake into savETH but want the shorter one-leg exit of the base receipt.

## Who this is NOT for

- Anyone looking for a pure ETH wrapper like WETH or a mature LST. avETH is roughly 78% dollars with a synthetic ETH overlay, plus strategy and issuer risk.
- Anyone needing liquid market exit. The practical route is Avant's redemption process, not DEX depth.
- Anyone who cannot tolerate a multi-day redemption window during stress.

## What to watch

- Avant transparency page changes in the USD-vs-ETH backing mix and strategy allocation.
- Any disclosure of the off-chain ETH hedge (venue, size, counterparty) — currently invisible.
- Health of Ethena USDe and Avant's own savUSD, which sit underneath the dollar backing.
- Redemption delays approaching the 7-day upper bound.
- Admin-owner migration to a publicly verifiable Safe or timelocked control path, and Chainlink Proof-of-Reserve going live.

## Live dashboard

Avant's issuer-run transparency page is the current live data source for portfolio composition, strategy allocation, and historical performance: [app.avantprotocol.com/transparency](https://app.avantprotocol.com/transparency). TID Research now runs an independent exit-watch monitor over the Avant suite (NAV redemption rate, junior buffer, backing coverage, custody), but backing figures should still be treated as Avant-reported until fuller independent verification of the off-chain hedge is possible.

## Sibling

- [savETH](/reports/saveth/) — Avant's yield-bearing senior staked tranche for avETH, with an extra 24-hour unstake leg before avETH redemption.
- [avUSD](/reports/avusd/) — the USD-side base receipt from the same issuer.

## Corrections

This report is based on Avant Protocol public documentation, its transparency dashboard, and on-chain reads only. These are issuer-run, off-chain-strategy assets: figures are Avant-reported until independent monitoring fully verifies them. It does not incorporate non-public disclosures. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
