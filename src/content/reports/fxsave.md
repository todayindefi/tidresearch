---
axis_frame: six
asset: "fxSAVE"
slug: "fxsave"
aliases: ["fxSAVE", "f(x) USD Saving", "fxSave", "fx Save"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["fxSP", "fxUSD"]
yield_bearing: true
assessment_type: "light"
date: "2026-09-22"
last_verified: "2026-09-22"
issuer: "f(x) Protocol (AladdinDAO)"
market_cap_approx: 77700000
volatility_score: 5.0
backing_score: 4.5
liquidity_score: 4.0
underlying_score: 4.5
structural_score: 5.0
issuer_score: 5.5
# redemption_score is retained as the evidence for axis 3 and is not rendered on
# the six-axis frame: Liquidity & Exit is scored on the WORSE leg, and the worse
# leg here is the unmeasured fxUSD -> USDC hop, not redemption.
redemption_score: 7.0
overall_score: 4.5
featured: false
production: false
---

# fxSAVE — Risk Report

**Elevated risk · 4.5/10**

**Category:** Vault share | **Underlying:** fxSP (the f(x) Stability Pool), which redeems into fxUSD | **Issuer:** f(x) Protocol (AladdinDAO)

## Summary

fxSAVE is an ERC-4626 vault share issued by f(x) Protocol on Ethereum. It is widely described as "saved fxUSD", and that description is wrong in a way that matters: the vault's `asset()` is not fxUSD but **fxSP, the f(x) Stability Pool token**. The Stability Pool is the protocol's liquidation backstop — it absorbs collateral from liquidated positions in exchange for burning fxUSD, and pays depositors for taking that role. fxSAVE is therefore a yield-bearing claim on a loss-absorbing pool, and its worst day arrives on the same day as the worst day for the collateral behind fxUSD.

The token has no peg. One fxSAVE was worth 1.108142 fxSP on 2026-09-22 and the exchange rate rises as the pool accrues. At a quoted price of $1.1189 and 69,462,472 shares outstanding, the market capitalisation is about $77.7M. Redemption is immediate, permissionless and uncapped, and the accounting reconciles exactly — but it pays out in fxUSD, whose only sizeable venue is a $10.0M Curve pool against USDC, and an instant redemption realises about 4.3% less than the quoted price.

Roughly 27% of all fxSAVE — about $21.0M — sits in Morpho Blue as collateral for USDC loans at 86% and 91.5% loan-to-value. The **4.5/10** overall score reflects a well-constructed wrapper around a pool designed to lose value under stress, whose exit is only as good as the pool it lands in.

## 1 · Stability — 5.0

fxSAVE is a NAV token rather than a pegged one. Each share represents a growing claim on fxSP: `convertToAssets` of one share returned 1.108142 fxSP on 2026-09-22, and the rate rises as Stability Pool rewards accrue. Deviation from one dollar is the wrong lens for it; the relevant questions are whether the NAV moves monotonically and what the NAV is a claim on. On the first, the mechanism is functioning as designed and the rate has only risen.

On the second, fxSP is not a stablecoin. The Stability Pool exists to absorb collateral from liquidated f(x) positions, burning fxUSD to do so. In calm conditions that is a source of yield; in stress it is a conversion of the depositor's dollar-denominated claim into the volatile collateral that was just liquidated. The value a fxSAVE holder carries is a claim on a buffer that is drawn down precisely when the protocol's collateral is under pressure.

**Risks and limitations.** fxSP already redeems below par: `previewRedeem` of one fxSP returned 0.976407 fxUSD on 2026-09-22, about 2.4% under, and the instant path returns 0.966643. Whether that discount is a base fee or accumulated liquidation losses has not been established, and the two readings imply materially different things about how much the pool has already absorbed. That question is open.

## 2 · Backing — 4.5

fxSAVE's assets are 76,974,259.94 fxSP against 69,462,472.31 shares (2026-09-22). fxSP in turn is a claim on the Stability Pool's holdings, which convert into fxUSD on redemption, and fxUSD is over-collateralised by wstETH and WBTC held against leveraged positions in f(x)'s CDP markets. So the backing passes through two layers before it reaches any external asset, and the external asset is volatile crypto collateral rather than a reserve.

The bookkeeping between the layers is exact. fxSAVE holds no fxSP directly; its assets sit in a segregated custody contract whose balance of fxSP gauge tokens matched `totalAssets()` to the wei on 2026-09-22, and the gauge held 99.68% of all fxSP (78,721,590.46 of 78,971,349.16). Nothing is unaccounted for, and confirming it requires only balance reads.

**Risks and limitations.** The collateral behind fxUSD is pledged against leveraged positions rather than held idle, so the backing's worst day and fxSAVE's worst day are the same event. The Stability Pool converts into that collateral by design during imbalance — that is the risk a depositor is paid to carry, not a defect, but it means fxSAVE cannot be read as a claim on stablecoins. The 2.4% sub-par redemption on fxSP is unseparated between fee and absorbed loss, and that is the reason the score sits half a notch below fxUSD's own backing.

## 3 · Liquidity & Exit — 4.0

A holder can leave two ways. The spot route is thin: a single Curve pool, fxSAVE/scrvUSD at `0xb6E4821c6fCABe32f5F452dfD3Ef20Ce2A3a48E2`, held $535,283 of TVL on 2026-09-22 — 0.69% of market capitalisation — and three other listed pairs (DOLA, litUSD, sUSDaf) held effectively nothing. Those figures are pool TVL from Curve's stable-ng factory listing, not depth at a slippage bound.

The redemption route is strong, and it was simulated rather than assumed. On 2026-09-22, `redeem` of 1,000,000 fxSAVE from a real holder returned 1,108,141.67 fxSP and 10,000,000 returned 11,081,416.68 — linear, uncapped, with the same call from the burn address reverting on `ERC4626ExceededMaxRedeem` as it should. `maxRedeem` for Morpho Blue's entire 18,751,881.70 balance returned the full amount. From fxSP, `instantRedeem` into fxUSD returned 966,643.36 on 1,000,000 and 9,666,433.62 on 10,000,000, again linear; a second, delayed path (`requestRedeem`) also succeeds.

**The binding leg is neither of those. It is the last hop, fxUSD to USDC**, which runs through a single Curve pool carrying $10,003,381 of TVL. Every other fxUSD venue on Curve is smaller — reUSD, USDnr and msUSD pairs at $1.39M, $0.71M and $0.43M, and four more under $0.2M — for about $13.0M of fxUSD venue TVL in total. Redemption converts a fxSAVE position into a fxUSD position, and fxUSD's depth is what a seller then meets.

**Risks and limitations.** That leg is unmeasured: no slippage ladder has been run on it, and pool TVL is not executable size. The 4.0 is a cap carried over from fxUSD's own liquidity rather than a measurement of this asset, and it moves if a ladder shows the pool deeper or shallower than its TVL implies. The sizing problem is concrete: Morpho Blue's 18,751,881.70 fxSAVE (27.0% of supply) would produce roughly 20.1M fxUSD on unwind, against a $10.0M primary pool, with every liquidator arriving at the same pool at once. Only Curve's stable-ng factory was enumerated; Uniswap and Balancer were not, so the $13.0M venue total is a floor. And the instant path costs about 1.0% more than the patient one.

## 4 · Dependencies — 4.5

Five contracts sit between a fxSAVE holder and a stablecoin, and the ERC-4626 interface shows only the first:

| Layer | Contract | What it holds (2026-09-22) |
|---|---|---|
| Share | fxSAVE `0x7743e50F534a7f9F1791DdE7dCD89F7783Eefc39` | no tokens directly |
| Custody | vault `0x4bFc5292DA18e32ED2354350e07e417cE4796f9C` (EIP-1167 minimal proxy, 45 bytes) | 76,974,259.94 fxSP-gauge tokens |
| Gauge | fxSP-Gauge `0xEd92dDe3214c24Ae04F5f96927E3bE8f8DbC3289` | 78,721,590.46 fxSP (99.68% of supply) |
| Pool | fxSP `0x65C9A641afCEB9C0E6034e558A319488FA0FA3be` | the Stability Pool |
| Stablecoin | fxUSD `0x085780639CC2cACd35E474e71f4d000e2405d8f6` | reached via `instantRedeem` |

fxUSD is the terminal dependency: it is what the Stability Pool pays out, what the only exit pool is quoted against, and what the collateral ultimately backs. Everything above it is f(x)'s own plumbing.

**Risks and limitations.** fxSAVE and fxUSD share one ProxyAdmin and one timelock (see Contract & Admin), so a holder who treats them as separate legs is counting diversification that does not exist — a single control failure reaches both. fxSP itself has no independent market: 99.68% of it sits in one gauge, and most of that gauge is fxSAVE's own custody contract, so its value is only ever realised through the redemption path described above.

## 5 · Contract & Admin — 5.0

The fxSAVE share is an upgradeable proxy. Its EIP-1967 implementation slot resolves to `0xe4031e271809d20074e4bef1caeefec5f710e8a6` and its admin slot to a ProxyAdmin at `0x9b54b7703551d9d0ced177a78367560a8b2edda4`, whose `owner()` is an OpenZeppelin TimelockController at `0x68863fb8855b04509a835082478D6E3D0bE4E61a` with a minimum delay of 259,200 seconds — 72 hours. Every address here was read from a call that returned it, and the role table was read off the contract: proposer and canceller authority is held solely by a Gnosis Safe v1.3.0 at `0x26b2ec4E02ebe2F54583af25b647b1D619e67BbF` requiring **6 of 9 signatures**, all nine owners externally-owned accounts; the timelock is its own only administrator and the Safe holds no admin role; and because the zero address holds the executor role alongside the Safe, a scheduled operation cannot be blocked once its delay elapses. Shortening the delay is itself subject to it — `updateDelay` succeeds only when called by the timelock, so a reduction must be scheduled and wait the full 72 hours in public.

Custody is segregated: assets sit in a bare 45-byte minimal proxy with no admin of its own, and its gauge balance reconciled to `totalAssets()` exactly. Two audits are published, and the one serious finding on record — a double-flash-loan access-control bypass in the router peripheral, found by ChainSecurity in April 2025 with over $2M at risk — was responsibly disclosed, fixed, and never exploited.

**Risks and limitations.** Three contracts sit between the share and the Stability Pool, none visible through the ERC-4626 interface. The same ProxyAdmin and timelock govern fxUSD — fxUSD's own admin slot resolves to the same ProxyAdmin, whose owner is the same timelock — so the share and the stablecoin beneath it are one administrative leg. Nine key-holders with no external governance check remain the ultimate authority over what gets scheduled. Two things were not read: whether the admin addresses agree with f(x)'s own documentation and repositories, and whether either audit covers the privileged-role surface. Chains read: Ethereum. Arbitrum, Base, Optimism and BSC carry no code at the fxSAVE address; Polygon was not read; and a same-address check cannot rule out a different-address deployment elsewhere.

## 6 · Issuer — 5.5

f(x) Protocol is built and operated by AladdinDAO and has run on Ethereum since 2023. Protocol TVL was $134.3M on 2026-09-22, Ethereum only, and two audits are published. When ChainSecurity disclosed the router vulnerability in April 2025, the team fixed it under responsible disclosure and published the report on 2025-06-17; the distinction between a vulnerability that existed and funds that were lost is worth keeping, because the first is often quoted as the second. fxUSD marked $0.99966 on 2026-09-22 and no depeg event surfaced.

**Risks and limitations.** This is a small DAO with no external check on its governance, operating a complex multi-contract system with no regulated wrapper. The disclosure response is evidence of engagement, not of the absence of further issues.

## Who this is for

- Depositors who understand fxSAVE as a paid position in f(x)'s liquidation backstop — a claim that earns in calm markets and converts into liquidated collateral in stressed ones — and who expect to exit through redemption into fxUSD rather than through a spot market.
- USDC lenders into the Morpho Blue markets that accept fxSAVE and PT-fxSAVE as collateral, for whom the number that matters is not the price but what an instant redemption realises. On 2026-09-22 one fxSAVE redeemed to 1.0712 fxUSD (1.108142 × 0.966643), about $1.0708 against a $1.1189 mark — a gap of roughly 4.3%. At 86% LTV that gap alone consumes about a third of the 14% cushion before oracle lag, liquidation incentive or slippage; at 91.5% it consumes more than half.

## Who should avoid it

- Anyone who reads "saved fxUSD" as a stablecoin savings product. The underlying is a loss-absorbing pool, not a reserve.
- Anyone who needs a dollar exit at size. Redemption is uncapped, but it terminates in fxUSD, and fxUSD's exit is one $10.0M pool with no measured depth.
- Anyone counting fxSAVE and fxUSD as two separate exposures. They share a ProxyAdmin and a timelock.

## What to watch

- The fxSP redemption rate against par (0.976407 patient, 0.966643 instant on 2026-09-22). A widening discount is the pool absorbing losses; whether the current 2.4% is fee or loss is the open question that decides how to read it.
- The gap between fxSAVE's quoted price and its instant-realisable value, currently about 4.3%. This is the figure a Morpho lender's cushion has to survive.
- USDC/fxUSD Curve pool TVL ($10.0M) and any measured depth ladder on it. A ladder would replace the cap on axis 3 with a measurement.
- Morpho Blue's fxSAVE balance (18,751,881.70, 27.0% of supply) relative to that pool.
- `MinDelayChange` on the timelock at `0x68863fb8855b04509a835082478D6E3D0bE4E61a`, any change to the proposer Safe's 6-of-9 owner set or threshold, and any implementation change on the fxSAVE or fxUSD proxies — one queue governs both.
- The vault's gauge balance against `totalAssets()`; they matched to the wei and should continue to.

## Revision history

*2026-09-22 — first staged publication. Custody chain, share supply, `totalAssets`, `convertToAssets`, the Morpho Blue balance, the proxy implementation and admin slots, the ProxyAdmin owner, the timelock delay and its role holders, and the proposer Safe's owners and threshold read on-chain; redemption paths established by `eth_call` simulation with a burn-address control; venue TVL from Curve's stable-ng factory listing. Not done: a depth ladder on fxUSD/USDC, separation of fxSP's sub-par redemption into fee and loss, documentation reconciliation of the admin addresses, audit coverage of privileged roles, and a Polygon read.*
