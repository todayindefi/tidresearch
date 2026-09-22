---
axis_frame: six
asset: "fxUSD"
slug: "fxusd"
aliases: ["fxUSD", "f(x) USD", "fx USD", "f(x) Protocol fxUSD"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "Overcollateralised CDP: wstETH and WBTC pledged against leveraged positions, with a Stability Pool; redemption opens only below $0.998"
assessment_type: "full"
date: "2026-09-22"
last_verified: "2026-09-22"
issuer: "f(x) Protocol (AladdinDAO)"
audited_reserves: false
market_cap_approx: 85400000
# Redemption refusal (axis 1/3) reproduced from this desk 2026-09-22: PoolManager
# redeem(address,uint256,uint256) from the Stability Pool (77.3M fxUSD) on the
# wstETH pool reverted 0x43ccee0a = ErrorRedeemNotAllowed(); the burn address on
# the WBTC pool reverted 0x1e226974 = ErrorRedeemExceedBalance(), so the pair
# discriminates. riskAnalyst reproduced the holder refusal on the WBTC pool too.
# The re-enable condition is NOT established; "never used" is NOT measured.
# Timelock role history shares the fxSAVE frontmatter note: end state verified
# here; grant/revoke history per tx
# 0x8449887472c310415b1b17f5daff8ab72511a76616cb257ccc02605f48e027af.
peg_mechanism_score: 5.5
backing_score: 5.0
liquidity_score: 4.5
underlying_score: 5.0
structural_score: 4.0
issuer_score: 5.5
overall_score: 4.5
featured: false
production: false
---

# fxUSD — Risk Report

**Elevated risk · 4.5/10**

**Category:** Stablecoin | **Peg Mechanism:** Overcollateralised CDP with a Stability Pool; redemption opens only below $0.998 | **Issuer:** f(x) Protocol (AladdinDAO)

## Summary

fxUSD is the dollar stablecoin of f(x) Protocol, built by AladdinDAO and live on Ethereum since 2023. It is minted against wstETH and WBTC that users pledge to open leveraged long positions, so the collateral behind it is not idle but working — and 89.7% of the debt is against WBTC, a custodial asset. Supply was 85,378,866 on 2026-09-22, up 8.6% in sixteen days, at a price of $0.99966 — a market capitalisation of about $85.4M — and 90.55% of it sits inside the protocol's own Stability Pool, leaving about 1.87M fxUSD of free float.

The design carries two peg defences. One is redemption: a holder may exchange fxUSD for collateral at one dollar, taking it from the most-leveraged positions first, for a 0.5% fee. The other is a Stability Pool that holds fxUSD — 77.3M of it on 2026-09-22 — and arbitrages the Curve market while absorbing liquidated collateral. The Stability Pool is active. Redemption is not an at-will exit: the protocol opens it only while fxUSD's Curve price sits below $0.998, so at $0.99966 it is closed on both pools. It is an arbitrage that caps the downside near $0.998, not a floor at par.

Code upgrades sit behind a 72-hour timelock whose only proposer is a 6-of-9 Safe. What the code reads does not: the price oracles that decide liquidations and whether redemption opens can be repointed instantly by a Safe, and on the WBTC pool — nine-tenths of the debt — by a single deployer key. The contracts that custody the collateral also fall outside the published audit. The exit is a DEX with a measured ceiling of about $4.65M of USDC at any size. The **4.5/10** overall score reflects an over-collateralised stablecoin at modest scale with a tight peg record, whose collateral's worst day is its own and whose delay protects the code but not the marks.

> ⚠️ **Redemption is not an at-will exit.** On 2026-09-22, `redeem(address,uint256,uint256)` on the f(x) PoolManager (`0x250893CA4Ba5d05626C785e8da758026928FCD24`) reverted with `ErrorRedeemNotAllowed()` from the Stability Pool — a holder of 77.3M fxUSD — on both the wstETH pool (`0x6ecfa38fee8a5277b91efda204c235814f0122e8`) and the WBTC pool (`0xab709e26fa6b0a30c119d8c55b887ded24952473`); a control call from the burn address reverted with a different error, so the refusal is the protocol's. The gate is `isRedeemAllowed()` on the PoolConfiguration contract (`0x16b334f2644cc00b85DB1A1efF0C2C395e00C28d`), which opens redemption only while the Curve EMA price of fxUSD is below $0.998 — at $0.99883 it returned `false`, with borrowing open. There is no admin switch. **A holder cannot use redemption as a floor at par**: it is an arbitrage that becomes available once the price has already fallen about 20 basis points, and it caps the downside near $0.998 rather than at one dollar. f(x)'s public security page states that redemption is "enabled (as always)" — that page describes the protocol's first version and does not apply to fxUSD.

## 1 · Stability — 5.5

fxUSD is designed to hold one dollar through two mechanisms. Redemption lets any holder exchange fxUSD for collateral at par, drawing from the highest-leverage positions first, which both defends the peg from below and de-risks the protocol at the same time. The Stability Pool holds fxUSD deposited by users, absorbs collateral from positions that are liquidated, and arbitrages the Curve pool when fxUSD trades away from par. On 2026-09-22 fxUSD traded at $0.99966, about 3 basis points below par, and the Stability Pool held 77,309,256 fxUSD and was active. The record is tight: across 8,073 hourly observations from 2025-08-01 to 2026-09-22, 99.58% fell within ±1% of par and 99.93% within ±2%; the deepest excursion was −3.54% on 2026-07-01, lasting four hours; 24 episodes below −1% occurred, all short, and the distribution is symmetric (0.46% of readings above +1%). The mean over the last 90 days is 0.99981.

The two defences operate in different price regions. The Stability Pool works continuously. Redemption is gated by `isRedeemAllowed()` on the PoolConfiguration contract, which opens it only while the Curve EMA price is below $0.998 — so above that line the peg rests on the Stability Pool and secondary-market arbitrage, and below it redemption at par becomes the mechanism that pulls the price back. That is a designed two-sided defence, and the refusal a holder sees at $0.9988 is the mechanism in its closed state rather than a switched-off feature.

**Risks and limitations.** That record describes a small market. 90.55% of supply sits inside the Stability Pool and 7.3% in Curve pools, so the free float is about 1.87M fxUSD — 2.2% of supply — and holding a band on that float is a far easier problem than the supply figure suggests; every ratio struck against supply overstates the tradeable asset by roughly 45 times. The observations are hourly aggregator prints, so a four-hour excursion is not trade-verified. And the record predates a regime change that cannot be dated: redemption is refused today and it is not known when that began, so the thirteen months may describe a system with two defences where today's has one. The regime change the record may span is therefore not an admin action but a price one — redemption has been closed whenever fxUSD traded above $0.998, which the record says is nearly always. Whether redemption has ever been used could not be determined — a sample of PoolManager logs and transactions showed no redemption, but a sample is not a history, and if the contract emits no dedicated event its absence carries no information.

## 2 · Backing — 5.0

fxUSD is minted against wstETH and WBTC. Users deposit one of the two, open a leveraged long position on it, and receive fxUSD as the stable side of that position; the collateral stays pledged against the position for as long as the fxUSD exists. Read from the two pools on 2026-09-22:

| Pool | Collateral | Value | Debt (fxUSD) | Collateral ratio |
|---|---:|---:|---:|---:|
| wstETH `0x6ecfa38fee8a5277b91efda204c235814f0122e8` | 6,661.71 wstETH at $3,391.66 | $22,594,258 | 8,786,912 | 257.1% |
| WBTC `0xab709e26fa6b0a30c119d8c55b887ded24952473` | 1,292.12 WBTC at $85,224.68 | $110,120,544 | 76,591,690 | **143.8%** |
| **Aggregate** | | **$132,714,802** | **85,378,602** | **155.4%** |

The two pool debts sum to 85,378,602 against a token `totalSupply()` of 85,378,866 — 264 apart — so the debt ledger and the token reconcile independently. The collateral side was checked a different way: the $132.7M computed from the pools' raw collateral and spot prices sits within 1.2% of an independent third-party TVL aggregation for the protocol ($134.3M), so quantities, prices and the 18-decimal normalisation of the WBTC figure (the token itself carries 8) agree across two unrelated paths. Supply was 78,600,047.69 on 2026-09-06.

The headline is not the 155.4%. **89.7% of all fxUSD debt is against WBTC**, at the lower of the two ratios. "Backed by wstETH and WBTC" implies a balance that does not exist: this is overwhelmingly a WBTC-backed stablecoin, and WBTC is a custodial asset.

Because the collateral is working rather than idle, the backing has a specific shape. In calm markets it is over-collateralised crypto held in the protocol's own pools. In a sharp ETH or BTC drawdown the same positions are the ones under liquidation, and the Stability Pool — which is also the asset behind fxSAVE — absorbs the collateral that gets liquidated. The mechanism is built for this; redemption, when available, attacks the most-leveraged position first for exactly that reason.

**Risks and limitations.** fxUSD's worst day and its collateral's worst day are the same event, by construction, and that day is a bitcoin day far more than an ether day. The WBTC leg carries BitGo's custody as an off-chain counterparty behind nine-tenths of the debt. Public material disagrees on the collateral set — older sources describe stETH-only backing, current sources wstETH and WBTC — which is a version split rather than a contradiction, and the live PoolManager is the only reliable source. Supply grew 8.6% in sixteen days, so the ratios above are dated to the block they were read at.

## 3 · Liquidity & Exit — 4.5

A holder has, in principle, two exits: redeem against the protocol at par, or sell on a DEX. The first opens only below $0.998, so at par the second is the exit. Thirty-three Curve pools were enumerated by contract address, and no Uniswap V2, Uniswap V3, SushiSwap or Balancer venue for fxUSD exists. The pools with material TVL on 2026-09-22:

| Pool | TVL |
|---|---:|
| **USDC/fxUSD** | **$10,003,381** |
| reUSD/fxUSD | $1,386,719 |
| USDnr/fxUSD | $711,153 |
| msUSD/fxUSD | $431,309 |
| fxUSD/frxUSD · alUSD/fxUSD · GHO/fxUSD · eUSD/fxUSD | $163,257 · $153,097 · $112,237 · $42,195 |
| **Total** | **about $13.0M — 15.2% of market capitalisation** |

The USDC pool is the only dollar exit of size; the rest pair fxUSD against other stablecoins, several of which are thinner than fxUSD itself.

**The binding leg is the DEX, because nothing sits beneath it until $0.998.** The market was measured end to end on 2026-09-22 with a routed sell ladder. The profile: $100,000 of fxUSD sells at 0.20 bps of impact, $1,000,000 at 2.37 bps, the price falls 0.5% at between $3.72M and $3.74M, 2% at between **$4.25M and $4.30M**, and **proceeds peak at $4,648,576 USDC** — past that size the router starts selling fxUSD for ETH instead, and total USDC received falls. About **$4.65M is the most USDC obtainable at any size.** The 0.5% crossing is roughly twice the entire free float, so every unlocked fxUSD can exit under 50 bps; the ceiling is what binds any size beyond the float. That ceiling is not a slippage figure: above it a seller does not pay more, they get nothing more.

**Risks and limitations.** The ceiling is small against the claims on it. Free float is about 1.87M fxUSD, which the market absorbs; but the Stability Pool holds 77.3M, and the largest concentrated claim sits one layer up: Morpho Blue holds 18.75M fxSAVE as collateral, whose liquidation would convert locked fxUSD into roughly 20.1M of float against a $4.65M ceiling (see the [fxSAVE report](/reports/fxsave/)). The ladder is a point-in-time router measurement and moves with pool balances.

## 4 · Dependencies — 5.0

fxUSD's value passes through three things: the collateral it is minted against, the oracles that price it, and the Curve pool that carries its peg arbitrage. The collateral is wstETH (Lido's staked-ETH wrapper) and WBTC (BitGo's custodial wrapped bitcoin); both are priced by oracles for liquidation and redemption purposes. The Stability Pool that now carries the whole peg defence is the same contract whose deposits back fxSAVE.

**Risks and limitations.** WBTC is custodial, so one of the two collateral legs carries an off-chain counterparty. Both legs are volatile assets under leverage, and stress in either reaches fxUSD through liquidation rather than being insulated from it. Because the Stability Pool backs fxSAVE and defends fxUSD at the same time, stress in fxSAVE and stress in fxUSD are not independent events.

## 5 · Contract & Admin — 4.0

fxUSD is an upgradeable proxy (implementation `0xf729422d68c2cf00574fb5712972454cf402a9b1`) whose admin slot resolves to a ProxyAdmin at `0x9b54b7703551d9d0ced177a78367560a8b2edda4`, owned by an OpenZeppelin TimelockController at `0x68863fb8855b04509a835082478D6E3D0bE4E61a` with a minimum delay of 259,200 seconds — 72 hours. These are the same two contracts that govern fxSAVE. The role table was read off the timelock: proposer and canceller authority is held solely by a Gnosis Safe v1.3.0 at `0x26b2ec4E02ebe2F54583af25b647b1D619e67BbF` requiring 6 of 9 signatures, all nine owners externally-owned accounts; the timelock is its own only administrator; and because the zero address holds the executor role alongside the Safe, a scheduled operation cannot be blocked once its delay elapses. The Safe and one deployer address held the timelock's own admin role from deployment on 2026-04-06 until both were revoked on 2026-04-20 (transaction `0x8449887472c310415b1b17f5daff8ab72511a76616cb257ccc02605f48e027af`), in the same action that opened execution; that action tightened the timelock and nothing else. The delay protects itself — `updateDelay` succeeds only when called by the timelock, so shortening the 72 hours must itself be scheduled and wait the full 72 hours in public.

The delay covers code upgrades. It does not cover what the code reads, and four undelayed paths sit beside it, read at block 26,031,531 with live role checks and sender-pair simulations. The main Safe holds emergency and asset-manager roles directly on the PoolManager, both collateral pools and the Stability Pool. A second Safe, `0x28c921adac4c1072658eb01a28da06b5f651ef62`, a 3-of-4 whose owners are a subset of the nine, holds emergency roles across the same contracts, including `updatePriceOracle(address)` with no validation and no delay. The deployer key `0xa1d0027ca4c0cb79f9403d06a29470abc7b0a468` — a single externally-owned account — still holds `EMERGENCY_ROLE` on the WBTC pool, which carries 89.7% of all fxUSD debt: a simulated `updatePriceOracle` to an arbitrary address succeeds from that key on the WBTC pool and reverts on the wstETH pool. And both live collateral oracles (`0x0C5C61025f047cB7e3e85852dC8eAFd7b9a4Abfb` for wstETH, `0xb3c90e64EB6f456A5F5C17Aa99b6aecA6f4a6390` for WBTC) are owned by the main Safe directly; a transfer to the timelock was scheduled as its first operation on 2026-04-20 and is the only scheduled operation never executed. The oracle decides what liquidates and whether redemption opens. Changing what the code reads is instant; changing the code takes three days.

A bug bounty is published at docs.aladdin.club, paying up to $500,000 for critical findings. Two audits are published, and the one serious finding on record — a double-flash-loan access-control bypass in the router peripheral, found by ChainSecurity in April 2025 with over $2M at risk — was responsibly disclosed, fixed and never exploited.

**Risks and limitations.** The oracle path compounds with an audit finding: OpenZeppelin's H-02 — price manipulation through a single low-TVL spot source — is acknowledged and not resolved, and M-06 is marked resolved while both live oracles were deployed on 2025-03-17, are not upgradeable, and carry the pre-fix formula. The audited perimeter is also not the machine. The fxUSD implementation differs from the May 2025 audited commit by three lines, matching a later published patch, and the fxSAVE implementation is byte-identical to it; but the PoolManager, both collateral pools, the Stability Pool and the PoolConfiguration contract were deployed between October 2025 and April 2026 and differ from the audited commit by roughly 1,500 lines. SECBIT's March 2026 report names two of them but scopes itself to a deployment on a different chain, so no published audit covers this rework — and those four contracts custody the collateral, run the liquidation logic, hold the Stability Pool and determine whether redemption is open. That is a statement about coverage, not about a defect: private review may exist, and nothing here says the code is wrong. Nine key-holders with no external governance check remain the ultimate authority, and the same authority governs fxSAVE, so the two are not independent legs. f(x)'s public v2 deployment manifest (AladdinDAO/fx-protocol-contracts) names the ProxyAdmin, the fxUSD token, the PoolManager and the base pool at the addresses measured here, and is silent on the TimelockController and the proposer Safe — the authority structure above the ProxyAdmin is verifiable on-chain but not documented by the issuer. Chains read: Ethereum only. Re-check by 2026-12-22, or on a new deployment of any of the four contracts, a published audit naming the rework, or the Stability Pool's redemption rate widening below par.

## 6 · Issuer — 5.5

f(x) Protocol is built and operated by AladdinDAO and has run on Ethereum since 2023, with $134.3M of protocol TVL on 2026-09-22, two published audits and a self-hosted bug bounty paying up to $500,000. When ChainSecurity disclosed the router vulnerability in April 2025, the team fixed it under responsible disclosure and published the report on 2025-06-17. The distinction between a vulnerability that existed and funds that were lost is worth keeping; the first is often quoted as the second.

**Risks and limitations.** This is a small DAO with no external check on its governance, operating a complex multi-contract system with no regulated wrapper. The public security documentation still describes the first version of the protocol, and the audit record covers the wrapper contracts rather than the current collateral machinery. The disclosure response is evidence of engagement, not of the absence of further issues.

## Who this is for

- Holders who understand fxUSD as the stable side of a leveraged ETH/BTC position, expect to exit through the Curve USDC pool, and accept that there is no protocol redemption floor beneath that market today.
- Anyone assessing an asset that depends on fxUSD — fxSAVE holders, lenders against fxSAVE on Morpho, and holders of pools where fxUSD is the dominant leg — for whom the refused redemption and the single $10.0M exit are the facts that matter.

## Who should avoid it

- Anyone who needs a redemption right at par. Redemption opens only below $0.998; above that line the exit is the DEX.
- Anyone who reads "overcollateralised" as insulation from ETH and BTC. The collateral is pledged against leveraged positions, and its stress is fxUSD's stress.
- Anyone counting fxUSD and fxSAVE as separate exposures. They share a Stability Pool, a ProxyAdmin, a timelock and the same undelayed emergency keys.
- Anyone who reads the 72-hour timelock as covering the oracle. It covers the code; the price feed that decides liquidations can be repointed without delay, and on the WBTC pool by one key.

## What to watch

- `isRedeemAllowed()` on the PoolConfiguration contract flipping to `true`, which happens when the Curve EMA price falls below $0.998 — the point at which the redemption arbitrage opens.
- Any `updatePriceOracle` call on either collateral pool, and whether the deployer key `0xa1d0027ca4c0cb79f9403d06a29470abc7b0a468` is ever removed from `EMERGENCY_ROLE` on the WBTC pool, or the oracles' pending transfer to the timelock is ever accepted.
- fxUSD's price against $1 and the Stability Pool's fxUSD balance (77.3M on 2026-09-22) — with redemption refused, the pool is the whole defence.
- The USDC ceiling on the sell ladder ($4.65M peak proceeds on 2026-09-22) and the USDC/fxUSD Curve pool's balance.
- Supply (85,378,866 on 2026-09-22), the share held by the Stability Pool (90.55%), and the WBTC share of debt (89.7%) — growth without a redemption path widens the gap between supply and exit, and the collateral mix is nine-tenths one custodial asset.
- `MinDelayChange` on the timelock at `0x68863fb8855b04509a835082478D6E3D0bE4E61a`, any change to the proposer Safe's 6-of-9 owner set or threshold, and any implementation change on the fxUSD or fxSAVE proxies — one queue governs both.

## Revision history

*2026-09-22 (latest) — Contract & Admin 6.0 → 4.0, Stability 5.0 → 5.5, Liquidity & Exit 4.0 → 4.5; overall 5.0 → 4.5. Redemption's gate located: `isRedeemAllowed()` on PoolConfiguration, opening below a $0.998 Curve EMA — a price mechanism, not an admin switch. Four undelayed authority paths read beside the timelock: main-Safe and 3-of-4-Safe emergency roles on the PoolManager, pools and Stability Pool with unvalidated `updatePriceOracle`; the deployer key's `EMERGENCY_ROLE` on the WBTC pool (simulated repoint succeeds); both oracles owned by the main Safe with the transfer to the timelock never accepted; a second fxSAVE admin. Exit scored on the full ladder profile. Bytecode matched: token implementations audited, the collateral machinery not covered by any published audit. Bounty confirmed at $500,000.*

*2026-09-22 (later) — assessment widened to full; Liquidity & Exit 4.5 → 4.0, overall held at 5.0. Aggregate collateral ratio read from both pools (155.4%; 89.7% of debt against WBTC at 143.8%), pool debts reconciled to supply within 264 fxUSD; peg record of 8,073 hourly observations since 2025-08-01 examined, with the 90.55% Stability Pool share and 2.2% free float stated beside it; USDC exit ladder measured — proceeds peak at $4,648,576, 2% crossing at $4.25M–$4.30M, 33 Curve pools enumerated and no Uniswap, SushiSwap or Balancer venue. Still open: the control that refuses redemption, and the deployed bytecode against the audited commit.*

*2026-09-22 — first staged publication. Supply, price, Stability Pool balance, the redemption fee ratio and the redemption refusal on both pools established by on-chain read and `eth_call` simulation with a burn-address control; proxy implementation and admin slots, ProxyAdmin owner, timelock delay and role holders, and the proposer Safe's owners and threshold read on-chain; venue TVL from Curve's stable-ng factory listing. Admin addresses reconciled against the issuer's v2 deployment manifest and the OpenZeppelin audit scope. Not done at first publication: a depth ladder, the aggregate collateral ratio, a stress episode, the condition that re-enables redemption, and matching the deployed implementation to the audited commit.*
