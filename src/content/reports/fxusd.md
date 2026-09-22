---
axis_frame: six
asset: "fxUSD"
slug: "fxusd"
aliases: ["fxUSD", "f(x) USD", "fx USD", "f(x) Protocol fxUSD"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "Overcollateralised CDP: wstETH and WBTC pledged against leveraged positions, with a Stability Pool; protocol redemption currently refused"
assessment_type: "light"
date: "2026-09-22"
last_verified: "2026-09-22"
issuer: "f(x) Protocol (AladdinDAO)"
audited_reserves: false
market_cap_approx: 85300000
# Redemption refusal (axis 1/3) reproduced from this desk 2026-09-22: PoolManager
# redeem(address,uint256,uint256) from the Stability Pool (77.3M fxUSD) on the
# wstETH pool reverted 0x43ccee0a = ErrorRedeemNotAllowed(); the burn address on
# the WBTC pool reverted 0x1e226974 = ErrorRedeemExceedBalance(), so the pair
# discriminates. riskAnalyst reproduced the holder refusal on the WBTC pool too.
# The re-enable condition is NOT established; "never used" is NOT measured.
# Timelock role history shares the fxSAVE frontmatter note: end state verified
# here; grant/revoke history per tx
# 0x8449887472c310415b1b17f5daff8ab72511a76616cb257ccc02605f48e027af.
peg_mechanism_score: 5.0
backing_score: 5.0
liquidity_score: 4.5
underlying_score: 5.0
structural_score: 6.0
issuer_score: 5.5
overall_score: 5.0
featured: false
production: false
---

# fxUSD — Risk Report

**Moderate risk · 5.0/10**

**Category:** Stablecoin | **Peg Mechanism:** Overcollateralised CDP with a Stability Pool; protocol redemption currently refused | **Issuer:** f(x) Protocol (AladdinDAO)

## Summary

fxUSD is the dollar stablecoin of f(x) Protocol, built by AladdinDAO and live on Ethereum since 2023. It is minted against wstETH and WBTC that users pledge to open leveraged long positions, so the collateral behind it is not idle but working. Supply was 85,334,217.48 on 2026-09-22, up 8.6% in sixteen days, at a price of $0.99966 — a market capitalisation of about $85.3M.

The design carries two peg defences. One is redemption: a holder may exchange fxUSD for collateral at one dollar, taking it from the most-leveraged positions first, for a 0.5% fee. The other is a Stability Pool that holds fxUSD — 77.3M of it on 2026-09-22 — and arbitrages the Curve market while absorbing liquidated collateral. The Stability Pool is active. The redemption path is not: the protocol refuses it on both collateral pools, and the condition that would restore it is not established.

fxUSD's governance is the strongest part of the picture — a 72-hour timelock whose only proposer is a 6-of-9 Safe and which cannot shorten its own delay without waiting it out. Its exit is the weakest: with redemption refused, the only way out is the DEX, and the only sizeable venue is a $10.0M Curve pool against USDC. The **5.0/10** overall score reflects a competently governed, over-collateralised stablecoin at modest scale whose documented dollar floor is not currently available and whose collateral's worst day is its own.

> ⚠️ **Redemption is refused.** On 2026-09-22, `redeem(address,uint256,uint256)` on the f(x) PoolManager (`0x250893CA4Ba5d05626C785e8da758026928FCD24`) reverted with `ErrorRedeemNotAllowed()` from the Stability Pool — a holder of 77.3M fxUSD — on both the wstETH pool (`0x6ecfa38fee8a5277b91efda204c235814f0122e8`) and the WBTC pool (`0xab709e26fa6b0a30c119d8c55b887ded24952473`). A control call from the burn address reverted with a different error, `ErrorRedeemExceedBalance()`, so the refusal is the protocol's, not the caller's. `getRedeemFeeRatio()` returns a configured 0.5%, so this is a live feature that is switched off, not a vestige. **A holder should not assume a $1 floor exists.** The circumstance under which redemption is re-enabled has not been established. f(x)'s public security page states that redemption is "enabled (as always)" — that page describes the protocol's first version and does not apply to fxUSD.

## 1 · Stability — 5.0

fxUSD is designed to hold one dollar through two mechanisms. Redemption lets any holder exchange fxUSD for collateral at par, drawing from the highest-leverage positions first, which both defends the peg from below and de-risks the protocol at the same time. The Stability Pool holds fxUSD deposited by users, absorbs collateral from positions that are liquidated, and arbitrages the Curve pool when fxUSD trades away from par. On 2026-09-22 fxUSD traded at $0.99966, about 3 basis points below par, and the Stability Pool held 77.3M fxUSD and was active.

Of the two defences only the second is currently working. The redemption call is refused on both pools, as set out in the warning above, so the peg rests on the Stability Pool and on secondary-market arbitrage alone.

**Risks and limitations.** The peg reading is a calm-conditions one: no stress episode has been examined, and the current price says nothing about how the remaining defence performs when collateral is being liquidated. The condition that re-enables redemption is not established. Whether redemption has ever been used could not be determined either — a sample of PoolManager logs and transactions showed no redemption, but a sample is not a history, and if the contract emits no dedicated event its absence carries no information.

## 2 · Backing — 5.0

fxUSD is minted against wstETH and WBTC. Users deposit one of the two, open a leveraged long position on it, and receive fxUSD as the stable side of that position; the collateral stays pledged against the position for as long as the fxUSD exists. Supply was 85,334,217.48 on 2026-09-22 against 78,600,047.69 on 2026-09-06.

Because the collateral is working rather than idle, the backing has a specific shape. In calm markets it is over-collateralised crypto held in the protocol's own pools. In a sharp ETH or BTC drawdown the same positions are the ones under liquidation, and the Stability Pool — which is also the asset behind fxSAVE — absorbs the collateral that gets liquidated. The mechanism is built for this; redemption, when available, attacks the most-leveraged position first for exactly that reason.

**Risks and limitations.** fxUSD's worst day and its collateral's worst day are the same event, by construction. Public material disagrees on the collateral set — older sources describe stETH-only backing, current sources wstETH and WBTC — which is a version split rather than a contradiction, and the live PoolManager is the only reliable source. The aggregate collateral ratio was not read. Supply grew 8.6% in sixteen days, so any ratio carried from an earlier date is stale.

## 3 · Liquidity & Exit — 4.5

A holder has, in principle, two exits: redeem against the protocol at par, or sell on a DEX. The first is refused at present, so the second is the exit. On Curve's stable-ng factory the fxUSD venues on 2026-09-22 were:

| Pool | TVL |
|---|---:|
| **USDC/fxUSD** | **$10,003,381** |
| reUSD/fxUSD | $1,386,719 |
| USDnr/fxUSD | $711,153 |
| msUSD/fxUSD | $431,309 |
| fxUSD/frxUSD · alUSD/fxUSD · GHO/fxUSD · eUSD/fxUSD | $163,257 · $153,097 · $112,237 · $42,195 |
| **Total** | **about $13.0M — 15.2% of market capitalisation** |

The USDC pool is the only dollar exit of size; the rest pair fxUSD against other stablecoins, several of which are thinner than fxUSD itself.

**The binding leg is the DEX, because there is nothing beneath it.** With redemption refused there is no protocol floor under the market price, and the market is one $10.0M pool.

**Risks and limitations.** Those figures are pool TVL from Curve's factory listing, not depth at a slippage bound; no ladder has been run, so the score is a cap rather than a measurement. Only Curve's stable-ng factory was enumerated — Uniswap and Balancer were not — so $13.0M is a floor on venue TVL rather than a total. The largest concentrated claim on this exit sits one layer up: Morpho Blue holds 18.75M fxSAVE as collateral, and a liquidation of that book would put roughly 20.1M fxUSD into the $10.0M USDC pool at once (see the [fxSAVE report](/reports/fxsave/)).

## 4 · Dependencies — 5.0

fxUSD's value passes through three things: the collateral it is minted against, the oracles that price it, and the Curve pool that carries its peg arbitrage. The collateral is wstETH (Lido's staked-ETH wrapper) and WBTC (BitGo's custodial wrapped bitcoin); both are priced by oracles for liquidation and redemption purposes. The Stability Pool that now carries the whole peg defence is the same contract whose deposits back fxSAVE.

**Risks and limitations.** WBTC is custodial, so one of the two collateral legs carries an off-chain counterparty. Both legs are volatile assets under leverage, and stress in either reaches fxUSD through liquidation rather than being insulated from it. Because the Stability Pool backs fxSAVE and defends fxUSD at the same time, stress in fxSAVE and stress in fxUSD are not independent events.

## 5 · Contract & Admin — 6.0

fxUSD is an upgradeable proxy (implementation `0xf729422d68c2cf00574fb5712972454cf402a9b1`) whose admin slot resolves to a ProxyAdmin at `0x9b54b7703551d9d0ced177a78367560a8b2edda4`, owned by an OpenZeppelin TimelockController at `0x68863fb8855b04509a835082478D6E3D0bE4E61a` with a minimum delay of 259,200 seconds — 72 hours. These are the same two contracts that govern fxSAVE. The role table was read off the timelock: proposer and canceller authority is held solely by a Gnosis Safe v1.3.0 at `0x26b2ec4E02ebe2F54583af25b647b1D619e67BbF` requiring 6 of 9 signatures, all nine owners externally-owned accounts; the timelock is its own only administrator; and because the zero address holds the executor role alongside the Safe, a scheduled operation cannot be blocked once its delay elapses. That state was reached deliberately — the Safe and one deployer address held the admin role from deployment on 2026-04-06 until both were revoked on 2026-04-20 (transaction `0x8449887472c310415b1b17f5daff8ab72511a76616cb257ccc02605f48e027af`), in the same action that opened execution. The current role state was verified on-chain; the event history is cited from that transaction.

The delay protects itself. `updateDelay` succeeds only when called by the timelock, and neither the Safe nor any outside party holds the timelock's admin role, so shortening the 72 hours is itself an operation that must be scheduled and wait the full 72 hours in public. Two audits are published, and the one serious finding on record — a double-flash-loan access-control bypass in the router peripheral, found by ChainSecurity in April 2025 with over $2M at risk — was responsibly disclosed, fixed and never exploited.

**Risks and limitations.** Nine key-holders with no external governance check remain the ultimate authority over what gets scheduled, and the same authority governs fxSAVE, so the two are not independent legs. f(x)'s public v2 deployment manifest (AladdinDAO/fx-protocol-contracts) names the ProxyAdmin, the fxUSD token, the PoolManager and the base pool at the addresses measured here, and is silent on the TimelockController and the proposer Safe — so the authority structure above the ProxyAdmin is verifiable on-chain but not documented by the issuer. OpenZeppelin's May 2025 audit of f(x) v2 covers the PoolManager and the fxUSD token implementation but does not cover the ProxyAdmin, the timelock, or privileged-role configuration, and the deployed implementation has not been matched to the audited commit. Chains read: Ethereum only.

## 6 · Issuer — 5.5

f(x) Protocol is built and operated by AladdinDAO and has run on Ethereum since 2023, with $134.3M of protocol TVL on 2026-09-22 and two published audits. When ChainSecurity disclosed the router vulnerability in April 2025, the team fixed it under responsible disclosure and published the report on 2025-06-17. The distinction between a vulnerability that existed and funds that were lost is worth keeping; the first is often quoted as the second.

**Risks and limitations.** This is a small DAO with no external check on its governance, operating a complex multi-contract system with no regulated wrapper. The redemption refusal described above is a protocol-level state that the issuer controls and has not publicly explained, and the public security documentation still describes the first version of the protocol. The disclosure response is evidence of engagement, not of the absence of further issues.

## Who this is for

- Holders who understand fxUSD as the stable side of a leveraged ETH/BTC position, expect to exit through the Curve USDC pool, and accept that there is no protocol redemption floor beneath that market today.
- Anyone assessing an asset that depends on fxUSD — fxSAVE holders, lenders against fxSAVE on Morpho, and holders of pools where fxUSD is the dominant leg — for whom the refused redemption and the single $10.0M exit are the facts that matter.

## Who should avoid it

- Anyone who needs a redemption right against the protocol. It exists in the design and is refused in practice, for reasons not established.
- Anyone who reads "overcollateralised" as insulation from ETH and BTC. The collateral is pledged against leveraged positions, and its stress is fxUSD's stress.
- Anyone counting fxUSD and fxSAVE as separate exposures. They share a Stability Pool, a ProxyAdmin and a timelock.

## What to watch

- Whether `redeem` on the PoolManager stops reverting with `ErrorRedeemNotAllowed()`, on either pool. That is the single event that restores the dollar floor.
- fxUSD's price against $1 and the Stability Pool's fxUSD balance (77.3M on 2026-09-22) — with redemption refused, the pool is the whole defence.
- USDC/fxUSD Curve pool TVL ($10.0M) and any measured depth ladder on it.
- Supply (85,334,217.48 on 2026-09-22) — growth without a redemption path widens the gap between supply and exit.
- `MinDelayChange` on the timelock at `0x68863fb8855b04509a835082478D6E3D0bE4E61a`, any change to the proposer Safe's 6-of-9 owner set or threshold, and any implementation change on the fxUSD or fxSAVE proxies — one queue governs both.

## Revision history

*2026-09-22 — first staged publication. Supply, price, Stability Pool balance, the redemption fee ratio and the redemption refusal on both pools established by on-chain read and `eth_call` simulation with a burn-address control; proxy implementation and admin slots, ProxyAdmin owner, timelock delay and role holders, and the proposer Safe's owners and threshold read on-chain; venue TVL from Curve's stable-ng factory listing. Admin addresses reconciled against the issuer's v2 deployment manifest and the OpenZeppelin audit scope. Not done: a depth ladder on USDC/fxUSD, the aggregate collateral ratio, a stress episode, the condition that re-enables redemption, and matching the deployed implementation to the audited commit.*
