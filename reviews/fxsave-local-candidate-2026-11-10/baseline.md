---
axis_frame: six
asset: "fxSAVE"
slug: "fxsave"
aliases: ["fxSAVE", "f(x) USD Saving", "fxSave", "fx Save"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["fxSP", "fxUSD", "USDC"]
yield_bearing: true
assessment_type: "light"
date: "2026-09-22"
last_verified: "2026-09-22"
last_revised: "2026-10-21"
issuer: "f(x) Protocol (AladdinDAO)"
market_cap_approx: 73330000
volatility_score: 5.0
backing_score: 4.5
liquidity_score: 3.5
underlying_score: 4.5
structural_score: 4.0
issuer_score: 5.5
# Timelock role history (axis 5) — end state verified on-chain here; the event
# history is riskAnalyst's Etherscan read, pinned to the hardening tx
# 0x8449887472c310415b1b17f5daff8ab72511a76616cb257ccc02605f48e027af (block
# 24,920,489, 2026-04-20: EXECUTOR -> 0x0, TIMELOCK_ADMIN revoked from the Safe
# and from 0xa1d0027ca4c0cb79f9403d06a29470abc7b0a468). Deployment grants:
# 0x4be19268a0f6a7e08f10fdf0afcb665acc9135c5f28b7db0d1870d4d4499970f and
# 0x1e535204641e8fb44a97b357490e9cc9caeae2d1752a309479ef24ecdee14a28 (2026-04-06).
# Public RPCs refuse historical eth_getLogs, so grant histories cannot be
# re-derived from this desk; they come from whoever holds an Etherscan key.
# redemption_score is retained as the evidence for axis 3 and is not rendered on
# the six-axis frame: Liquidity & Exit is scored on the WORSE leg, and the worse
# leg includes the fxUSD -> USDC market exit; fxSP also returns USDC directly.
# October 21 is a partial refresh; all scores await a full review.
redemption_score: 7.0
overall_score: 4.5
featured: false
production: false
---

# fxSAVE — Risk Report

**Elevated risk · 4.5/10**

**Category:** Vault share | **Underlying:** fxSP (the f(x) Stability Pool), which redeems into fxUSD + USDC | **Issuer:** f(x) Protocol (AladdinDAO)

## Summary

fxSAVE is an ERC-4626 vault share issued by f(x) Protocol on Ethereum. It is widely described as "saved fxUSD", and that description is wrong in a way that matters: the vault's `asset()` is not fxUSD but **fxSP, the f(x) Stability Pool token**. The Stability Pool is the protocol's liquidation backstop — it absorbs collateral from liquidated positions in exchange for burning fxUSD, and pays depositors for taking that role. fxSAVE is therefore a yield-bearing claim on a loss-absorbing pool, and its worst day arrives on the same day as the worst day for the collateral behind fxUSD.

At Ethereum block 26,239,340 on October 21, 2026, one fxSAVE represented **1.113778 fxSP**. The vault held 72.622m fxSP against 65.203m shares; onchain NAV was **$1.124641**, implying about **$73.33m** of share value on that date. fxSP redemption returns **both fxUSD and USDC**. Per fxSAVE, the queued preview was **1.072408 fxUSD + 0.052772 USDC**; a simulated instant exit returned about **1.061684 fxUSD + 0.052245 USDC** after the 1% fee, before gas and market impact.

Morpho Blue held **24.370m fxSAVE, 37.38% of supply**, about $27.41m at NAV. That exceeds the 30% score-review trigger. The **4.5/10** overall and all axis scores remain unchanged pending a full concentration and direct exit-depth review. This is a partial refresh: last verification remains September 22. The current direct fxSAVE exit ladder is unmeasured.

## 1 · Stability — 5.0

fxSAVE is a NAV token rather than a pegged one. Each share represents a growing claim on fxSP: `convertToAssets` of one share returned 1.113778 fxSP on 2026-10-21 (1.108142 in the September 22 read), and the rate rises as Stability Pool rewards accrue. Deviation from one dollar is the wrong lens for it; the relevant questions are whether the NAV moves monotonically and what the NAV is a claim on. On the first, the mechanism is functioning as designed and the rate has only risen.

On the second, fxSP is not a stablecoin. The Stability Pool exists to absorb collateral from liquidated f(x) positions, burning fxUSD to do so. In calm conditions that is a source of yield; in stress it is a conversion of the depositor's dollar-denominated claim into the volatile collateral that was just liquidated. The value a fxSAVE holder carries is a claim on a buffer that is drawn down precisely when the protocol's collateral is under pressure.

**Risks and limitations.** The pool deliberately absorbs liquidation risk; stress performance remains untested. At September archive block 26,031,531, `previewRedeem(1 fxSP)` returned **0.976412 fxUSD + 0.033807 USDC**, about $1.0102 combined at par. Both return values must be decoded. This preview provides no evidence of a below-par loss or an unidentified fee.

## 2 · Backing — 4.5

fxSAVE's assets were 72,621,668.88 fxSP against 65,202,993.12 shares at October 21 block 26,239,340. fxSP in turn is a claim on the Stability Pool's holdings, which convert into fxUSD and USDC on redemption, and fxUSD is over-collateralised by wstETH and WBTC held against leveraged positions in f(x)'s CDP markets. So the backing passes through two layers before it reaches any external asset, and the external asset is volatile crypto collateral rather than a reserve.

The bookkeeping between the layers is exact. fxSAVE holds no fxSP directly; its assets sit in a segregated custody contract whose balance of fxSP gauge tokens matched `totalAssets()` to the wei on 2026-09-22, and the gauge held 99.68% of all fxSP (78,721,590.46 of 78,971,349.16). Nothing is unaccounted for, and confirming it requires only balance reads.

**Risks and limitations.** The collateral behind fxUSD is pledged against leveraged positions rather than held idle, so the backing's worst day and fxSAVE's worst day are the same event. The Stability Pool converts into that collateral by design during imbalance — that is the risk a depositor is paid to carry, not a defect, but it means fxSAVE cannot be read as a claim on stablecoins. The fxUSD leg remains exposed to its collateral: the October 21 producer read gives a 136.743% aggregate collateral ratio, with 88.2% of debt in the WBTC pool at 132.19%. Backing remains 4.5 pending full review; the two-output preview does not establish a loss.

## 3 · Liquidity & Exit — 3.5

A holder can sell fxSAVE directly or redeem through fxSP. The historical September 22 direct venue snapshot showed $535,283 TVL in Curve fxSAVE/scrvUSD, 0.69% of the then market capitalisation; the other listed pairs held effectively nothing. TVL is not executable depth, and **the current direct fxSAVE exit ladder remains unmeasured**.

September 22 holder simulations redeemed 1m fxSAVE into 1,108,141.67 fxSP and 10m into 11,081,416.68 fxSP. A burn-address control reverted with `ERC4626ExceededMaxRedeem`; `maxRedeem` returned Morpho Blue's full historical 18,751,881.70-share balance. These establish the wrapper path at that date, not current market proceeds.

At October 21 block 26,239,340, `previewRedeem(1 fxSP)` returned **0.962856 fxUSD + 0.047381 USDC**. One fxSAVE represented 1.113778 fxSP, giving a queued preview of **1.072408 fxUSD + 0.052772 USDC**. The queue was one hour. A funded-gauge `eth_call` simulated **1.061684 fxUSD + 0.052245 USDC per fxSAVE** after the **1% fee on each leg**. Onchain fxSAVE NAV was $1.124641; the simulated instant basket was about $1.1135 at near-par marks, before gas and market impact. These are contract outputs, not settled proceeds. The September archive preview also returned two assets: **0.976412 fxUSD + 0.033807 USDC per fxSP**.

The fxUSD portion still needs a dollar market exit (see the [fxUSD report](/reports/fxusd/)). The **October 20 fxUSD→USDC routed quotes** crossed **−50 bps around $3.37m–$3.39m** and **−200 bps around $3.95m–$3.99m**, with observed USDC proceeds peaking near **$4.27m**. These are dated routed quotes for the fxUSD leg, not a ceiling on all fxSAVE redemption proceeds: fxSP pays USDC directly as a second leg.

**Risks and limitations.** Morpho Blue held **24,370,111.29 fxSAVE, 37.38% of supply**, on October 21, above the 30% score-review trigger. A full queued redemption previews roughly **26.13m fxUSD + 1.29m USDC**, before market impact or the instant fee. That fxUSD flow far exceeds the dated route's quoted size. Direct USDC is additional; no full-position executable dollar exit is established. Refresh the direct fxSAVE ladder and review concentration before treating the unchanged liquidity score as a new full assessment.

## 4 · Dependencies — 4.5

Five contracts sit between a fxSAVE holder and a stablecoin, and the ERC-4626 interface shows only the first:

| Layer | Contract | What it holds (2026-09-22) |
|---|---|---|
| Share | fxSAVE `0x7743e50F534a7f9F1791DdE7dCD89F7783Eefc39` | no tokens directly |
| Custody | vault `0x4bFc5292DA18e32ED2354350e07e417cE4796f9C` (EIP-1167 minimal proxy, 45 bytes) | 76,974,259.94 fxSP-gauge tokens |
| Gauge | fxSP-Gauge `0xEd92dDe3214c24Ae04F5f96927E3bE8f8DbC3289` | 78,721,590.46 fxSP (99.68% of supply) |
| Pool | fxSP `0x65C9A641afCEB9C0E6034e558A319488FA0FA3be` | the Stability Pool |
| fxUSD leg | fxUSD `0x085780639CC2cACd35E474e71f4d000e2405d8f6` | reached via `previewRedeem` / `instantRedeem` |
| USDC leg | USDC `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48` | returned directly as the second output |

The Stability Pool pays a mixed fxUSD/USDC basket. fxUSD is the larger redemption leg and needs market liquidity for an independent dollar exit; the USDC leg is paid directly and adds USDC issuer and transfer-control dependencies. The wrapper, custody and gauge remain f(x)'s own plumbing.

**Risks and limitations.** fxSAVE and fxUSD share one ProxyAdmin and one timelock (see Contract & Admin), so a holder who treats them as separate legs is counting diversification that does not exist — a single control failure reaches both. fxSP itself has no independent market: at the September snapshot, 99.68% of it sat in one gauge, and most of that gauge is fxSAVE's own custody contract, so its value is only ever realised through the redemption path described above.

## 5 · Contract & Admin — 4.0

The fxSAVE share is an upgradeable proxy. Its EIP-1967 implementation slot resolves to `0xe4031e271809d20074e4bef1caeefec5f710e8a6` and its admin slot to a ProxyAdmin at `0x9b54b7703551d9d0ced177a78367560a8b2edda4`, whose `owner()` is an OpenZeppelin TimelockController at `0x68863fb8855b04509a835082478D6E3D0bE4E61a` with a minimum delay of 259,200 seconds — 72 hours. Every address here was read from a call that returned it, and the timelock's role table was read off the contract: proposer and canceller authority is held solely by a Gnosis Safe v1.3.0 at `0x26b2ec4E02ebe2F54583af25b647b1D619e67BbF` requiring **6 of 9 signatures**, all nine owners externally-owned accounts; the timelock is its own only administrator — the Safe and one deployer address held that role from deployment on 2026-04-06 until both were revoked on 2026-04-20 (block 24,920,489, transaction `0x8449887472c310415b1b17f5daff8ab72511a76616cb257ccc02605f48e027af`), in the same action that granted the executor role to the zero address. That action tightened the timelock's own administration and nothing else. Shortening the delay is itself subject to it — `updateDelay` succeeds only when called by the timelock, so a reduction must be scheduled and wait the full 72 hours in public.

The delay covers code upgrades, and that is the extent of it. The fxSAVE contract's own `DEFAULT_ADMIN` role has a second holder beside the timelock: Safe `0xa0fb1b11cca5871fb0225b64308e249b97804e99`, a 6-of-9 whose owners are the same nine accounts, granted on 2025-04-02 and untouched by the April 2026 change. Its reach is bounded — it can change the treasury and harvester addresses, the expense ratio and the claim-for role (a simulated `updateTreasury` to an arbitrary address succeeds from it) but not principal or the implementation. Below the wrapper, the contracts fxSAVE's value passes through carry undelayed emergency authority: the main Safe and a 3-of-4 Safe (`0x28c921adac4c1072658eb01a28da06b5f651ef62`, owners a subset of the nine) hold emergency roles on the PoolManager, both collateral pools and the Stability Pool, including `updatePriceOracle` with no validation; the deployer key `0xa1d0027ca4c0cb79f9403d06a29470abc7b0a468` alone still holds `EMERGENCY_ROLE` on the WBTC pool that carried 89.7% of fxUSD debt in September (88.2% in the October 21 producer read); and both collateral oracles are owned by the main Safe directly, with the transfer to the timelock scheduled on 2026-04-20 and never executed. The oracle decides what gets liquidated into the Stability Pool that fxSAVE holds. Changing what the code reads is instant; changing the code takes three days.

Custody is segregated: assets sit in a bare 45-byte minimal proxy with no admin of its own, and its gauge balance reconciled to `totalAssets()` exactly. A bug bounty is published at docs.aladdin.club, paying up to $500,000 for critical findings. Two audits are published, and the one serious finding on record — a double-flash-loan access-control bypass in the router peripheral, found by ChainSecurity in April 2025 with over $2M at risk — was responsibly disclosed, fixed, and never exploited.

**Risks and limitations.** Three contracts sit between the share and the Stability Pool, none visible through the ERC-4626 interface, and the audited perimeter stops at the first of them. The fxSAVE implementation is byte-identical to the May 2025 OpenZeppelin audited commit, and the fxUSD implementation differs from it by three lines matching a later published patch; but the PoolManager, both collateral pools, the Stability Pool and the PoolConfiguration contract were deployed between October 2025 and April 2026 and differ from the audited commit by roughly 1,500 lines. SECBIT's March 2026 report names two of them but scopes itself to a deployment on a different chain, so no published audit covers this rework — and those four contracts custody the collateral, run the liquidation logic, hold the Stability Pool that is fxSAVE's entire asset, and determine whether fxUSD redemption is open. That is a statement about coverage, not about a defect: private review may exist, and nothing here says the code is wrong. The oracle path compounds with an audit finding — OpenZeppelin's H-02, price manipulation through a single low-TVL spot source, is acknowledged and unresolved, and both live oracles are non-upgradeable contracts from March 2025 carrying the pre-fix formula. The same ProxyAdmin, timelock and emergency keys govern fxUSD, so the share and the stablecoin beneath it are one administrative leg, and nine key-holders with no external governance check remain the ultimate authority. f(x)'s public v2 deployment manifest (AladdinDAO/fx-protocol-contracts) names the ProxyAdmin and the base pool at the addresses measured here, and is silent on the TimelockController, the proposer Safe and the fxSAVE token itself — the authority structure above the ProxyAdmin is verifiable on-chain but not documented by the issuer. Chains read: Ethereum. Re-check by 2026-12-22, or on a new deployment of any of the four contracts, a published audit naming the rework, or the combined fxUSD-plus-USDC redemption basket marking below par or either output leg failing. Arbitrum, Base, Optimism and BSC carry no code at the fxSAVE address; Polygon was not read; and a same-address check cannot rule out a different-address deployment elsewhere.

## 6 · Issuer — 5.5

f(x) Protocol is built and operated by AladdinDAO and has run on Ethereum since 2023. Protocol TVL was $134.3M on 2026-09-22, Ethereum only; two audits are published and a self-hosted bug bounty pays up to $500,000. When ChainSecurity disclosed the router vulnerability in April 2025, the team fixed it under responsible disclosure and published the report on 2025-06-17; the distinction between a vulnerability that existed and funds that were lost is worth keeping, because the first is often quoted as the second. fxUSD marked $0.99966 on 2026-09-22 and no depeg event surfaced.

**Risks and limitations.** This is a small DAO with no external check on its governance, operating a complex multi-contract system with no regulated wrapper. The disclosure response is evidence of engagement, not of the absence of further issues.

## Who this is for

- Depositors who understand fxSAVE as a paid position in f(x)'s liquidation backstop and expect to redeem through fxSP into **fxUSD plus USDC**.
- USDC lenders against fxSAVE or PT-fxSAVE on Morpho who assess both payout legs, the 1% instant fee, market impact on fxUSD and concentrated liquidation flow. Morpho Blue's October 21 position was 24.370m fxSAVE, 37.38% of supply; lender headroom needs a fresh exit-depth review.

## Who should avoid it

- Anyone who reads "saved fxUSD" as a stablecoin savings product. The underlying is a loss-absorbing pool, not a reserve.
- Anyone who needs a dollar exit at size. Redemption pays fxUSD plus USDC, but the larger fxUSD leg faces limited routed liquidity and direct fxSAVE depth is unmeasured.
- Anyone counting fxSAVE and fxUSD as two separate exposures. They share a ProxyAdmin, a timelock and the same undelayed emergency keys.
- Anyone who reads the 72-hour timelock as covering the collateral. It covers the code; the price feed that decides what gets liquidated into the Stability Pool can be repointed without delay, and on the WBTC pool by one key.

## What to watch

- Both fxSP output legs and their combined marked value; the September preview was 0.976412 fxUSD + 0.033807 USDC, not a one-asset shortfall.
- The one-hour queue, 1% instant fee and any failure of either output leg. October 21 simulated instant output was 1.061684 fxUSD + 0.052245 USDC per fxSAVE.
- A current direct fxSAVE ladder and the dated fxUSD route: October 20 −50 bps at $3.37m–$3.39m, −200 bps at $3.95m–$3.99m, observed proceeds peak near $4.27m for that leg only.
- Morpho Blue concentration: 24.370m fxSAVE, 37.38% on October 21, already above the 30% score-review trigger. Complete the concentration and direct exit-depth review.
- `MinDelayChange` on the timelock at `0x68863fb8855b04509a835082478D6E3D0bE4E61a`, any change to the proposer Safe's 6-of-9 owner set or threshold, and any implementation change on the fxSAVE or fxUSD proxies — one queue governs both.
- Any `updatePriceOracle` call on either collateral pool; whether the deployer key is ever removed from `EMERGENCY_ROLE` on the WBTC pool; and whether the oracles' pending transfer to the timelock is ever accepted.
- The vault's gauge balance against `totalAssets()`; they matched to the wei and should continue to.

## Revision history

*2026-10-21 — Partial refresh from the October 21 producer draft. Corrected the two-output fxSP decoder: the September 2.4% shortfall and 4.3% instant redemption gap were false because USDC was omitted. Removed the loss-versus-fee question and lender-cushion calculation. Added block 26,239,340 share accounting, NAV, queued and simulated instant baskets, October 20 routed quotes and Morpho Blue's 37.38% concentration above the 30% review trigger. All scores and production: false remain unchanged pending full review; last_verified remains 2026-09-22.*

*2026-09-22 (latest) — Contract & Admin 5.0 → 4.0; overall held at 4.5. A second `DEFAULT_ADMIN` holder on the fxSAVE contract (a 6-of-9 Safe with the same owners, bounded to treasury, harvester, expense ratio and claim-for) read alongside the timelock; undelayed emergency authority on the contracts beneath the wrapper, including a single deployer key on the WBTC pool and unvalidated oracle repointing; both collateral oracles owned directly by the main Safe. Bytecode matched: the fxSAVE implementation is byte-identical to the audited commit; the collateral machinery is not covered by any published audit. Bounty confirmed at $500,000.*

*2026-09-22 (later) — Liquidity & Exit 4.0 → 3.5, overall held at 4.5. The fxUSD → USDC leg measured: proceeds peak at $4,648,576 USDC, 2% crossing at $4.25M–$4.30M, 33 Curve pools enumerated and no Uniswap, SushiSwap or Balancer venue; fxUSD's own redemption confirmed refused, so the leg is DEX-only; 90.55% of fxUSD locked in the Stability Pool.*

*2026-09-22 — first staged publication. Custody chain, share supply, `totalAssets`, `convertToAssets`, the Morpho Blue balance, the proxy implementation and admin slots, the ProxyAdmin owner, the timelock delay and its role holders, and the proposer Safe's owners and threshold read on-chain; redemption paths established by `eth_call` simulation with a burn-address control; venue TVL from Curve's stable-ng factory listing. Admin addresses reconciled against the issuer's v2 deployment manifest and the OpenZeppelin audit scope. Not done at first publication: a depth ladder on fxUSD/USDC, matching the deployed implementation to the audited commit, and a Polygon read.*
