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
last_verified: "2026-10-24"
last_revised: "2026-10-24"
issuer: "f(x) Protocol (AladdinDAO)"
audited_reserves: false
market_cap_approx: 78220000
# October 24 review: source files are local reviewed drafts, not yet committed.
# underlying_score retains the existing Dependencies assessment; no replacement
# dependency score was authored in the October 24 source overlays.
peg_mechanism_score: 5.5
backing_score: 5.0
liquidity_score: 4.5
underlying_score: 5.0
structural_score: 5.0
issuer_score: 5.5
overall_score: 5.0
featured: false
production: true
---

# fxUSD — Risk Report

**Moderate risk · 5.0/10**

**Category:** Stablecoin | **Mechanism:** wstETH/WBTC-backed CDP with a Stability Pool | **Issuer:** f(x) Protocol (AladdinDAO)

## Summary

fxUSD is f(x) Protocol's dollar stablecoin on Ethereum. Users mint it against wstETH or WBTC pledged to leveraged long positions. A Stability Pool supports the peg and absorbs liquidations; direct redemption for collateral opens only when the Curve EMA price falls below $0.998. Near par, holders depend on secondary-market liquidity.

The October 24 review marked fxUSD at **$0.999903**, with a **132.51% aggregate collateral ratio**. WBTC carried **87.61% of debt at 128.35% collateralization**, so the backing is predominantly exposed to bitcoin and its custodian. The October 23 routed sale crossed −50 bps between **$4.445m and $4.480m** of fxUSD input, much smaller than the 26.13m fxUSD leg previewed for a full Morpho Blue fxSAVE queued exit on October 21.

Code upgrades and both collateral oracles' owner functions sit behind a **72-hour timelock**. The main 6-of-9 Safe and emergency 3-of-4 Safe can still change pool oracle pointers without waiting, and a public audit matching the later Ethereum pool rework has not been established. The **5.0/10** overall judgement weighs these remaining controls and exit constraints against the near-dollar peg and verified governance safeguards.

## 1 · Stability — 5.5

fxUSD uses two peg mechanisms. The Stability Pool holds deposited fxUSD, arbitrages the Curve market and absorbs collateral from liquidated positions. Protocol redemption lets holders exchange fxUSD for collateral from the most leveraged positions, subject to a price gate and a configured 0.5% fee.

`isRedeemAllowed()` on [PoolConfiguration](https://etherscan.io/address/0x16b334f2644cc00b85DB1A1efF0C2C395e00C28d) opens redemption only when the Curve EMA is below $0.998. It remained **false on October 24**. September holder simulations on both collateral pools reverted with `ErrorRedeemNotAllowed()`; a no-balance control failed with a different error. The gate creates a conditional arbitrage opportunity, not an at-will redemption right or guaranteed price floor.

The October 24 price was $0.999903. Historical hourly observations from August 2025 through September 22, 2026 showed 99.58% within ±1% of par; the deepest reported excursion was −3.54%, lasting four hours.

**Risks and limitations.** The historical peg series uses aggregator prints rather than trade-verified execution. At Ethereum block 26,259,353 on October 24, **90.12% of supply was in fxSP**. A tight peg on the smaller circulating float does not establish that a large release from the Stability Pool can exit near par.

## 2 · Backing — 5.0

Collateral remains pledged against leveraged positions in f(x)'s CDP markets. The October 24 producer snapshot at Ethereum block **26,259,353** gives:

| Collateral pool | Share of debt | Collateral ratio |
|---|---:|---:|
| WBTC | **87.61%** | **128.35%** |
| wstETH | 12.39% | 161.96% |
| Aggregate | 100% | **132.51%** |

The aggregate ratio is collateral value divided by pool debt, with both legs marked at the observation. It compares with **136.743% on October 21** and the corrected **150.6% on September 22**. October 24 token supply was about 78.22m fxUSD, implying a market capitalization of about $78.22m at the near-dollar mark.

**Risks and limitations.** WBTC is a custodial asset and carries most debt at the lower collateral ratio. Falling BTC or ETH prices pressure leveraged borrowers and their backing together. The aggregate ratio conceals that concentration; wstETH's higher ratio protects a relatively small share of debt.

## 3 · Liquidity & Exit — 4.5

A holder can sell fxUSD on a DEX or use protocol redemption when its price gate opens. While direct redemption remains gated, immediate dollar exits depend on market routes, principally the Curve USDC/fxUSD venue and additional stablecoin hops.

The **October 23, 23:48 UTC fxUSD→USDC routed quote** crossed **−50 bps between $4.445m and $4.480m of input**, with observed USDC proceeds peaking near **$5.31m** across tested routes. These are indicative dated quotes, not guaranteed execution, a permanent market ceiling or settled proceeds. Pool TVL is not executable depth.

The concentrated stress case sits in [fxSAVE](/reports/fxsave/). On October 21, Morpho Blue held 24.370m fxSAVE, 37.38% of supply. A full queued redemption previewed roughly **26.13m fxUSD plus 1.29m USDC**, before market impact. The fxUSD leg alone materially exceeds the routed crossing. **fxSP returns USDC directly as a second leg**, so a route's fxUSD proceeds peak does not cap the complete fxSAVE payout.

**Risks and limitations.** Quotes change with balances and routing. The October 21 redemption preview and October 23 market ladder are separate observations, not an atomic full-position execution. A current direct fxSAVE exit ladder and a concentration review remain open; the fxUSD liquidity score stays 4.5.

## 4 · Dependencies — 5.0

fxUSD depends on WBTC's custody, Lido's wstETH, collateral price oracles and Curve liquidity. The [USDC/fxUSD pool](https://etherscan.io/address/0x5018BE882DccE5E3F2f3B0913AE2096B9b3fB61f) is both a major exit venue and the source of the EMA used by the redemption gate. Market liquidity and the condition for protocol redemption therefore share a dependency.

The Stability Pool also backs fxSAVE. Its redemption can release fxUSD into the market, and both assets share the same ProxyAdmin and timelock. They are correlated protocol and governance exposures.

**Risks and limitations.** The WBTC custodian dominates the collateral mix. Oracle or Curve disruption can affect marks, liquidations, redemption access and market exits at the same time. The Dependencies score is the existing authored 5.0; this review updates its factual basis without assigning a new score.

## 5 · Contract & Admin — 5.0

The [fxUSD proxy](https://etherscan.io/address/0x085780639CC2cACd35E474e71f4d000e2405d8f6) uses implementation `0xf729422d68c2cf00574fb5712972454cf402a9b1`. Its admin slot resolves to [ProxyAdmin](https://etherscan.io/address/0x9b54b7703551d9d0ced177a78367560a8b2edda4), owned by the [72-hour TimelockController](https://etherscan.io/address/0x68863fb8855b04509a835082478D6E3D0bE4E61a). The sole proposer and canceller is the [main 6-of-9 Safe](https://etherscan.io/address/0x26b2ec4E02ebe2F54583af25b647b1D619e67BbF). The timelock administers itself, execution is open, and shortening its delay must itself wait the full delay.

The October 24 authority review distinguishes four paths:

| Path | Current control |
|---|---|
| Code upgrades | 72-hour timelock |
| Owner-only configuration of both collateral oracles | Ownership transferred to the timelock on **October 5**, block 26,126,801; [ownership transaction](https://etherscan.io/tx/0x6d44a5bb025cf28b04ac093cb42a4f15bc0824e770de8fd09f044c75e6984d61) |
| Deployer EOA emergency access to the WBTC pool | **Revoked October 10**, block 26,158,898; [revocation transaction](https://etherscan.io/tx/0x411a0c518e1f7ff73182081cf447c24fca08cf430eec9bc3db745249fc9dca17) |
| Pool oracle-pointer replacement | Main 6-of-9 Safe and [emergency 3-of-4 Safe](https://etherscan.io/address/0x28c921adac4c1072658eb01a28da06b5f651ef62) retain undelayed `EMERGENCY_ROLE` on both pools |

Archive boundary reads and current reads on two RPCs confirmed the ownership transfers and role revocation. The remaining `updatePriceOracle(address)` path has no address validation: either Safe can replace a pool's oracle immediately, affecting position marks, liquidations and the redemption gate. The emergency Safe also retains asset-management authority on PoolManager and fxSP; that role is not defined on the collateral pools.

**Audit and documentation coverage.** The issuer's [v2 deployment manifest](https://github.com/AladdinDAO/fx-protocol-contracts/blob/main/ignition/deployments/ethereum/deployed_addresses.json) agrees with the measured token, PoolManager, fxSP and ProxyAdmin addresses. It is silent on the timelock and proposer Safe. The fxUSD implementation matches the audited generation plus a small published patch, but a public audit matching the later Ethereum PoolManager, pool, fxSP and PoolConfiguration rework has not been established. The OpenZeppelin review did not cover the ProxyAdmin, timelock or privileged-role configuration. A [self-hosted bounty](https://docs.aladdin.club/security-bounty) advertises up to $500,000 for critical findings; its text does not establish coverage of the privileged-role surface.

**Risks and limitations.** Oracle ownership protections do not delay oracle-pointer replacement. OpenZeppelin H-02's single low-TVL price-source risk was acknowledged, and the non-upgradeable live oracles retain the pre-fix M-06 formula. The unmatched pool audit is a coverage gap, not evidence of a defect. This authority assessment covers Ethereum; other chains were not reviewed.

## 6 · Issuer — 5.5

f(x) Protocol is built and operated by AladdinDAO and has operated on Ethereum since 2023. Its response to the April 2025 ChainSecurity router finding provides a dated conduct example: the issue was responsibly disclosed, fixed and reported publicly on June 17, with no reported exploitation. The published $134.3m protocol TVL observation is from September 22, not a current figure.

**Risks and limitations.** Issuer 5.5 is carried from the existing assessment rather than re-derived from a new legal review. The operator's legal entity, jurisdiction, accountable principals, financial audit, governing law and holder dispute or recourse terms were not verified in this pass. The incident-response record is established; enforceable holder recourse remains unverified.

## Who this is for

Holders who understand fxUSD as the stable side of leveraged crypto positions and can size an exit against dated market depth. The same constraints matter to fxSAVE holders and lenders against fxSAVE, who must assess both fxUSD and direct USDC payout legs.

Anyone needing unconditional redemption at par, a diversified collateral reserve or independently governed fxUSD/fxSAVE exposures should avoid relying on those properties here.

## What to watch

- WBTC's share of debt and pool collateral ratio, alongside the aggregate ratio.
- The redemption gate, fresh routed USDC quotes and Morpho Blue's fxSAVE concentration.
- Any pool `updatePriceOracle` call or change to the remaining Safe emergency roles.
- Timelock delay, Safe threshold or implementation changes, and a public audit naming the deployed Ethereum pool rework.

## Revision history

*2026-10-24 — Overall 4.5 → 5.0 and Contract & Admin 4.0 → 5.0 after verification of the October 5 oracle-ownership transfers and October 10 WBTC deployer-role revocation. Other scores unchanged. Updated price, collateral mix, routed depth and redemption status from the reviewed local source files. Reorganized the body around current asset facts and consolidated historical corrections. Staging status preserved.*

*2026-10-21 — Partial refresh corrected fxSP's two-output redemption model, added the larger Morpho Blue position and dated routed quotes. The supposed 2.4% fxSP shortfall and 4.3% fxSAVE instant gap were decoding errors caused by omitting USDC.*

*2026-09-22 — First staged assessment. Established the redemption gate, custody and authority paths, peg history and routed exit evidence. Historical aggregate collateral ratio corrected from 155.4% to 150.6% because raw wstETH collateral was already stETH-equivalent.*
