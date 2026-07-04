---
asset: "avUSD"
slug: "avusd"
aliases: ["avUSD", "Avant USD"]
chains: ["avax", "eth"]
category: "stablecoin"
peg_mechanism: "Active market-neutral strategy book (USDe-heavy)"
assessment_type: "light"
peg_mechanism_score: 5.5
backing_score: 4.5
issuer_score: 4.0
liquidity_score: 4.0
overall_score: 4.5
audience: "retail"
companion_report: "savusd"
date: "2026-07-04"
last_verified: "2026-07-04"
featured: false
production: false
issuer: "Avant Protocol"
audited_reserves: false
market_cap_approx: 108000000
live_dashboard_url: "https://app.avantprotocol.com/transparency"
---

# avUSD — Retail Risk Report

**Moderate risk · 4.5/10**

| Backing | Peg | Exit methods | Size | Chains |
|---|---|---|---|---|
| Active market-neutral strategy book — roughly 77% Ethena USDe plus Maple syrup; ~101% NAV (Pennyworks, private) | Holding, ~$1.001 | Mint/redeem against the strategy book; CoinGecko-listed, ecosystem depth | ~$108M | Avalanche (native), Ethereum, Linea |

## Summary

avUSD is Avant Protocol's base USD token — the dollar-side analogue of [avETH](/reports/aveth/). It is the non-yield base receipt; yield accrues in the staked wrapper [savUSD](/reports/savusd/), with avUSDx as the junior tranche that absorbs losses first (after the Reserve Fund). Despite the "stablecoin" label, avUSD is **not** a fiat- or T-bill-backed dollar. Avant's docs describe the backing as a diversified basket of yield-generating, market-neutral assets — so avUSD is an active-strategy stablecoin in the same economic class as Ethena's USDe or Resolv's USR, not a cash-reserve coin.

The peg has held tightly (about $1.001) at roughly $108M in supply, most of it staked into savUSD. The 4.5/10 score reflects a heavy concentration in Ethena USDe underneath, only marginal overcollateralization on a privately-computed NAV, a slice of backing that lives off-EVM and cannot be independently verified, and a single-EOA admin surface — offset by a genuinely strong audit and monitoring bench.

## Backing & solvency

On Avant's transparency page the disclosed asset mix is roughly **USDe 77%, syrupUSDT 10%, syrupUSDC 8%, USDC 3%**, with small amounts of USDH and wsrUSD. The binding fact is the first number: **avUSD is largely a re-wrapper of Ethena's USDe**, plus Maple syrup credit. It therefore inherits Ethena's basis-trade risk as a single-point concentration, layered one wrapper deeper. If USDe wobbles, avUSD wobbles.

Collateralization is thin. Third-party NAV (Pennyworks, weekly) came in around $109.9M against roughly $108.3M of supply — about **101%, i.e. barely over par**, not a robust buffer. And that NAV report is **private**: Avant publishes the headline figure only, with no public position-level breakdown.

About **16% of backing is off-EVM and unverifiable** from standard on-chain tools — positions on chains that aggregators under-index, plus Solana (Kamino) and Bitcoin/Stacks via Zest Protocol. On-chain reads of the visible EVM strategy wallets cover roughly 84% of supply as a lower bound; the rest is operator-disclosed only.

avUSD is also **circular with the ETH side**: avUSD/savUSD makes up a majority of [avETH](/reports/aveth/)'s backing, so the two Avant suites are not independent bets. avUSD's protection is tranche subordination (Reserve Fund plus junior avUSDx), not a >100% collateral buffer, so backing scores 4.5.

## Exit liquidity

avUSD is CoinGecko-listed near $1.001 and has more real tradeable depth than its ETH sibling, but exit at size still leans on the primary mint/redeem path against the strategy book plus ecosystem and CCIP-bridged liquidity, rather than deep independent CEX/DEX markets. Precise primary-redemption mechanics, any gating, and KYC are lightly documented. The 24-hour cooldown applies to the savUSD→avUSD unstake leg, not to holding avUSD itself.

## Yield dynamics

avUSD itself is non-yield-bearing. The yield product is [savUSD](/reports/savusd/), the senior staked tranche, whose ERC-4626 share value accrues from the strategy book (recently around 8% APY). Holding avUSD instead of savUSD avoids the unstake cooldown but gives up the yield while keeping the same backing and issuer risk.

## Audits, admin & issuer

Avant lists Omniscia and Dedaub (smart-contract audits), Trail of Bits (ongoing operational security), Hypernative (monitoring), Chainlink CCIP, and a planned Chainlink Proof-of-Reserve. That is a stronger third-party bench than most young active-strategy stablecoins.

The admin caveat matches the rest of the suite: the token `owner()` (`0xd4d2…57cb`, shared with avETH) reads on-chain as a plain EOA, not a Safe or timelock. Avant documents Fireblocks MPC-CMP custody, multi-signature authorization for external transfers, and RBAC policy controls — materially better than a raw hot key if applied to the relevant wallets, but the mapping is not confirmable from the contract, and MPC is not a timelock. The issuer score is 4.0, held consistent across the four Avant reports.

## Who this is for

- Users who want an active-strategy yield-dollar and understand they are taking concentrated Ethena USDe risk one wrapper deeper, plus some off-EVM backing they cannot verify.
- Holders who prefer the base receipt's simpler exit and plan to stake into savUSD later.

## Who this is NOT for

- Anyone who wants a fiat- or T-bill-backed stablecoin. avUSD is an active-strategy dollar, mostly USDe underneath.
- Anyone who cannot tolerate a single-point concentration on Ethena, marginal (~101%) overcollateralization, or off-chain-verified backing.

## What to watch

- The USDe share of backing and the health of Ethena itself.
- Pennyworks NAV versus supply — any drift below par.
- The off-EVM legs (Solana/Kamino, Stacks/Zest), currently a coverage blind spot.
- Chainlink Proof-of-Reserve going live, and admin migration to a verifiable Safe or timelock.

## Live dashboard

Avant's issuer-run transparency page is the current live data source for composition and NAV: [app.avantprotocol.com/transparency](https://app.avantprotocol.com/transparency). TID Research now runs an independent exit-watch monitor over the staked Avant tranches. Backing figures should be treated as Avant-reported until independent monitoring fully verifies them.

## Sibling

- [savUSD](/reports/savusd/) — the yield-bearing senior staked tranche of avUSD.
- [avETH](/reports/aveth/) / [savETH](/reports/saveth/) — the ETH-side suite (which, unlike avUSD, carries a synthetic-ETH currency mismatch).

## Corrections

This report is based on Avant Protocol public documentation, its transparency dashboard, and on-chain reads (Avalanche + Ethereum) only. These are issuer-run, off-chain-strategy assets: figures are Avant-reported until independent monitoring fully verifies them. It does not incorporate non-public disclosures. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
