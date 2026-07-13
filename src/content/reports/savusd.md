---
asset: "savUSD"
slug: "savusd"
aliases: ["savUSD", "Staked avUSD", "Avant savUSD"]
chains: ["avax"]
category: "vault-share"
underlying_assets: ["avUSD"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
companion_report: "avusd"
date: "2026-07-04"
last_verified: "2026-07-04"
featured: false
production: false
issuer: "Avant Protocol"
volatility_score: 7.5
structural_score: 4.5
redemption_score: 4.0
liquidity_score: 3.5
issuer_score: 4.0
underlying_score: 4.5
overall_score: 4.5
live_dashboard_url: "https://app.avantprotocol.com/transparency"
---

# savUSD — Retail Risk Report

**Moderate risk · 4.5/10 · No reduce/exit flag**

| Yield target | Exit methods | Effective time-to-cash | Size | Chains |
|---|---|---|---|---|
| USD strategy yield accruing into ERC-4626 share value (~8% APY) | Unstake to avUSD, then redeem avUSD | 24-hour unstake plus request-based avUSD redemption | ~$91M senior assets | Avalanche |

## Summary

savUSD is the yield-bearing senior staked tranche of Avant Protocol's [avUSD](/reports/avusd/) stablecoin — the USD-side analogue of [savETH](/reports/saveth/). Holders stake avUSD and receive savUSD shares whose ERC-4626 exchange rate accrues from Avant's market-neutral strategy book. savUSD sits senior to the avUSDx junior tranche, which absorbs losses first (after the Reserve Fund). All backing, admin and peg-mechanism risk is inherited from **[avUSD](/reports/avusd/) — read that report for the canonical analysis**; this one covers the staking-tranche layer.

**The one distinction that matters versus its ETH sibling: savUSD has no currency mismatch.** It is a USD claim backed by USD-denominated assets, so it does *not* carry [savETH](/reports/saveth/)'s synthetic-ETH problem, where mostly-dollar collateral has to manufacture ETH exposure through an undisclosed off-chain hedge. That single difference is why savUSD sits a notch above savETH and **carries no reduce/exit flag** — it is a normal, if opaque, active-strategy yield stablecoin rather than a synthetic wrapper. The 4.5/10 still reflects a heavy Ethena USDe concentration underneath, thin liquidity, off-EVM backing opacity, and a single-EOA admin.

## Backing & solvency

savUSD is backed by avUSD, and avUSD's backing is roughly **77% Ethena USDe** plus Maple syrup, with about **16% of backing off-EVM and unverifiable** (Solana/Kamino, Bitcoin/Stacks via Zest). Overcollateralization is marginal — around 101% on a private Pennyworks NAV. The USDe concentration is the binding look-through risk: savUSD is a re-wrapper of a re-wrapper of the Ethena basis trade.

savUSD's structural advantage is seniority. Losses hit the Reserve Fund (order of ~$1M), then the avUSDx junior tranche (roughly 13% of the senior book), before savUSD's NAV. So there is a meaningful subordinated buffer under the senior — but it is *relative* protection via tranche subordination, **not** overcollateralization, and a large enough strategy drawdown still impairs the senior NAV. Backing scores 4.5, inherited from avUSD. The underlying score is 4.5, reflecting avUSD's moderate active-strategy quality.

savUSD is also **circular with the ETH side** — avUSD/savUSD is a majority of savETH's backing — so the two Avant suites are not independent.

## Exit liquidity

avUSD is CoinGecko-listed near $1.001 and has a deeper secondary market than avETH, but savUSD itself is a redemption-only vault share; depth is thin and ecosystem-led. The exit is two-stage:

1. **savUSD to avUSD:** 24-hour unstake cooldown. Starting a second unstake while one is pending resets the whole timer, so unstake in one action.
2. **avUSD redemption:** request-based against the strategy book.

It is a multi-day, team-processed path with no atomic or liquid-market exit at size — but less punitive than savETH's, because avUSD has a deeper market than avETH and there is no ~7-day ETH-redemption leg with an off-chain hedge to unwind behind it.

## Yield dynamics

savUSD yield accrues into the ERC-4626 exchange rate rather than as a separate token stream — recently around 8% APY. The `convertToAssets` rate is the health signal: it should only ratchet **up** in normal operation, so any flat or falling reading is the clearest sign of senior impairment. There is no reliable market-peg signal because savUSD has no meaningful independent market.

## Volatility & currency match

Unlike savETH, savUSD is a USD claim on USD assets, so it carries no ETH price exposure and no synthetic-currency overlay — hence the higher (safer) volatility score. Residual volatility risk is the active-strategy de-peg tail (a market-neutral blow-up or a USDe dislocation impairing NAV), not directional price risk.

## Audits, admin & issuer

The savUSD wrapper reads as a standard, non-paused ERC-4626 senior tranche. Admin and audit posture is inherited from avUSD: Omniscia and Dedaub (audits), Trail of Bits (operational security), Hypernative (monitoring), Chainlink CCIP and planned Proof-of-Reserve — a strong bench — offset by a token owner (`0xd4d2…57cb`, shared across the suite) that reads on-chain as a plain EOA with no timelock. Avant documents Fireblocks MPC custody, but that is not confirmable from the contract and is not a timelock. Issuer score 4.0, held consistent across the four Avant reports.

## Who this is for

- Yield-dollar holders comfortable with concentrated Ethena USDe exposure two wrappers deep, some off-EVM backing they cannot verify, and a multi-day request-based exit.
- Users who want the senior tranche's subordinated buffer and NAV-accrual yield and can monitor the `convertToAssets` rate.

## Who this is NOT for

- Anyone who wants a fiat- or T-bill-backed stablecoin, or a liquid same-day exit at size.
- Anyone who cannot tolerate USDe concentration, marginal overcollateralization, or single-EOA admin.

## What to watch

- `convertToAssets(1e18)` — any stall or decline signals senior impairment.
- The avUSDx junior buffer and the USDe share of backing.
- Health of Ethena USDe underneath, and the off-EVM legs (Solana/Kamino, Stacks/Zest).
- Chainlink Proof-of-Reserve going live, and admin migration to a verifiable Safe or timelock.

## Live dashboard

Avant's issuer-run transparency page is the current live data source: [app.avantprotocol.com/transparency](https://app.avantprotocol.com/transparency). TID Research now runs an independent exit-watch monitor over savUSD and savETH (NAV redemption rate, junior buffer, staking ratio, backing coverage, custody). Backing figures should be treated as Avant-reported until independent monitoring fully verifies them.

## Sibling

- [avUSD](/reports/avusd/) — the base avUSD receipt (canonical backing and admin analysis).
- [savETH](/reports/saveth/) — the ETH-side senior tranche, which **does** carry a synthetic-ETH currency mismatch and a reduce/exit flag savUSD does not.

## Corrections

This report is based on Avant Protocol public documentation, its transparency dashboard, and on-chain reads (Avalanche + Ethereum) only. These are issuer-run, off-chain-strategy assets: figures are Avant-reported until independent monitoring fully verifies them. It does not incorporate non-public disclosures. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
