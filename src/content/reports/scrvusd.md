---
asset: "scrvUSD"
slug: "scrvusd"
aliases: ["scrvUSD", "SCRVUSD", "Savings crvUSD"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["crvUSD"]
assessment_type: "full"
production: true
date: "2026-06-08"
last_verified: "2026-10-17"
last_revised: "2026-10-17"
featured: false
issuer: "Curve DAO"
yield_bearing: true
market_cap_approx: 14823682
axis_frame: six
volatility_score: 6.0
backing_score: 5.0
liquidity_score: 8.0
underlying_score: 4.5
structural_score: 5.5
issuer_score: 6.0
redemption_score: 8.0
overall_score: 5.0
---

# scrvUSD — Risk Report

**Moderate-elevated risk · 5.0/10**

Curve's Ethereum savings vault: an ERC-4626 share that earns rewards in crvUSD.

## Summary

scrvUSD is a savings share backed by [crvUSD](/reports/crvusd/). Depositors receive shares whose redemption value grows as rewards accrue. It is a NAV-accruing vault share, rather than a separate dollar-pegged stablecoin: one share currently redeems for **1.109939538 crvUSD**, and its dollar value also depends on crvUSD's market price.

At Ethereum block **26,211,046**, measured October 17, the vault held **14.824M crvUSD**, all idle, with no allocated strategy debt. Read-only redemption simulations succeeded through **100K crvUSD-equivalent**; separate indicative routes quoted approximately **99,871 USDC for 100K crvUSD**. The vault currently adds little exit friction, but it cannot protect holders from impairment of crvUSD.

The assessed contract is **`0x0655977FEb2f289A4aB78af67BAB0d17aAb84367`** on Ethereum. This assessment covers the savings share itself; holding it through an LP or another vault adds separate withdrawal and counterparty risks.

## 1 · Stability — 6.0

scrvUSD's reference value is its redemption NAV in crvUSD. Rewards are reflected in the value of each share rather than paid through a rebasing balance. A share price above one dollar is therefore expected as rewards accumulate; it does not make scrvUSD a stablecoin with a broken peg.

The October 17 snapshot measured **13,355,395.75 effective shares** and **1.109939538 crvUSD per share**, with `convertToAssets` and `previewRedeem` agreeing. Dollar value is that conversion multiplied by crvUSD's dollar price.

**Risks and limitations.** NAV appreciation in crvUSD does not guarantee dollar stability or principal protection. A crvUSD depeg passes through the share, and accounting, reward or strategy losses can affect its value. Future rewards are variable.

## 2 · Backing — 5.0

The vault currently holds its underlying directly. At the pinned block, `totalAssets`, `totalIdle` and actual crvUSD custody all matched at **14,823,681.79 crvUSD**. `totalDebt` was **zero**, and the default strategy queue was empty. There was no separate deployed lending strategy in this measurement.

Full backing in crvUSD units is different from an independent dollar reserve. The ultimate collateral assessment is the [crvUSD parent report](/reports/crvusd/): scrvUSD inherits the parent's backing risk rather than gaining diversification by wrapping it. Backing **5.0** follows the October parent assessment.

**Risks and limitations.** Idle custody is a dated condition, not an irrevocable policy. The vault has permissions for future strategy and configuration changes. crvUSD's borrower collateral, PegKeeper pools and YieldBasis exposures can affect its principal and peg; posted borrower equity is not a separate cash buffer owned by scrvUSD holders. A disruption to those systems can affect principal as well as yield.

## 3 · Liquidity & Exit — 8.0

The primary exit is **scrvUSD → crvUSD at vault NAV**, followed by a market sale of crvUSD for cash-like assets. At the pinned block, the vault was not shut down, its withdrawal-limit module was zero, and its assets were idle. Direct redemption depends on the owner's share balance and available vault assets.

Read-only `eth_call` simulations of `redeem` from an actual share-owning pool address succeeded at **1K, 10K, 50K and 100K crvUSD-equivalent**, matching NAV apart from rounding. No transaction was signed or submitted. An owner-specific `maxRedeem` result is not a vault-wide liquidity ceiling; an address holding only LP tokens may correctly have no directly redeemable scrvUSD shares.

Indicative KyberSwap routes for the second leg used nominal crvUSD inputs:

| crvUSD input | Quoted USDC output | Deviation from nominal par |
|---|---:|---:|
| 1,000 | 998.73 | −12.65 bps |
| 10,000 | 9,987.31 | −12.69 bps |
| 50,000 | 49,935.92 | −12.82 bps |
| 100,000 | 99,871.17 | −12.88 bps |
| 1,000,000 | 998,675.01 | −13.25 bps |

The crvUSD-to-USDC market leg constrains the measured two-step exit; the vault itself did not add material friction at the simulated sizes. Liquidity **8.0** follows that measured path and the parent's current liquidity assessment. Separate scrvUSD secondary-market depth was not established, so this score relies on primary redemption followed by the underlying's market exit.

**Risks and limitations.** Quotes were collected later than the pinned vault snapshot, exclude gas and can change before execution. Deviations include crvUSD's market discount, route fees and size effects, rather than pure marginal slippage. No 2% depth crossing was located, and the whole vault was not shown to be liquidatable at those rates. LP unstaking and removal require separate checks.

## 4 · Dependencies — 4.5

All principal value passes through crvUSD. The savings wrapper adds Yearn V3 vault code, Curve's reward-distribution contracts and operational role management. Curve DAO is shared with the parent; Yearn supplies code rather than an independent issuer guarantee.

The reward pipeline is **controller fees → FeeSplitter → RewardsHandler → vault**. Donations to the handler can also become rewards. At the snapshot, the handler requested **16.29%** of eligible fees against a **50% cap**. Requested weight uses a two-day time-weighted average, a scaling factor and a minimum; it is distinct from the seven-day release of profits inside the vault. The [RewardsHandler source](https://github.com/curvefi/scrvusd/blob/main/contracts/RewardsHandler.vy) documents the allocation calculation.

**Risks and limitations.** Fee generation, reward allocation, distribution timing and the amount staked all affect returns. The handler's approximately **2,860.58 crvUSD** awaiting distribution was outside the vault's idle assets and is not already-recognized principal. Changes in crvUSD collateral or revenue can affect both the underlying and the savings rate. Dependencies **4.5** inherits the parent's risk chain alongside these wrapper dependencies.

## 5 · Contract & Admin — 5.5

The Ethereum vault is a **45-byte EIP-1167 clone** with fixed implementation **`0xd8063123bba3b480569244ae66bfe72b6c84b00d`**. The measured runtime matches the canonical clone pattern, so the clone has no mutable upgrade pointer. It still has an operational role system.

The current role manager is Curve DAO Ownership Agent **`0x40907540d8a6c65c637785e8f8b742ae6b0b9968`**, with no pending manager transfer. The manager grants roles; its own zero role mask does not mean it lacks authority. FeeSplitter has the same owner, and the Agent holds the handler's rate-manager role. The handler has vault role mask **2080** for report/profit-release operations.

Role permissions can change deposit and withdrawal modules, strategy configuration and other vault settings. The deposit limit was uncapped; accountant, deposit-limit module and withdrawal-limit module were all zero. The measured **604,800-second / seven-day period is profit unlocking**, not an admin timelock. Permissioned reward setters have role checks rather than an embedded seven-day scheduling delay.

The [published implementation repository](https://github.com/curvefi/scrvusd) and [ChainSecurity audit](https://github.com/curvefi/scrvusd/blob/main/audits/ChainSecurity_Curve_scrvUSD_audit.pdf) document the reward and vault integration. The reference handler's permissioned setters agree with the presence of operational administration; neither the measured profit-unlock setting nor those setters establishes a universal seven-day governance delay.

**Risks and limitations.** Other rate-manager holders and the complete operational role set were not enumerated. DAO execution timing must be checked for each authority path, including delegated roles. Structural **5.5** is inherited from the current assessment rather than increased for clone immutability. The exact deployed-version match, privileged-role audit coverage and applicable bounty exclusions were not established here. Measurements cover Ethereum mainnet; cross-chain verifier integrations and resolution of the historical L2 timestamp finding were not verified.

## 6 · Issuer — 6.0

Curve DAO is the governance organization associated with scrvUSD and its underlying. The issuer assessment is shared with crvUSD; Yearn's code contribution is not a separate promise to redeem or compensate holders.

The public [Curve repository](https://github.com/curvefi/scrvusd) and [savings statistics](https://prices.curve.finance/v1/crvusd/savings/statistics) provide checkable product and rate disclosures. October's review independently measured specified vault balances, configuration and redemption behavior. Those observations establish product behavior, rather than legal recourse.

**Risks and limitations.** Issuer **6.0 is carried from the parent assessment**, not newly derived from a complete issuer investigation. A specific legal obligor, jurisdiction, governing law, dispute mechanism and enforceable holder claim were not established in this refresh. Principals, current financial-audit coverage and comprehensive conduct history were not independently reverified. Holders can use the currently available contract redemption path; a corporate guarantee, insured principal or bankruptcy-remote claim should not be assumed.

## Yield and monitoring

Curve's statistics snapshot at **2026-10-17 08:20:11**, block **26,211,039**, reported **2.591% projected APY**. It is a modelled current rate, not a fixed coupon or a realized return promised for the next year. Rewards depend on fees, allocation, donations and the number of shares participating.

Monitor actual custody against accounting, idle assets, strategy debt, withdrawal modules, shutdown state, role changes and reward distribution. Recheck the full **redemption → crvUSD → USDC** route at the intended size. For LP holders, separately assess the other pool asset, composition, wrappers and withdrawal mechanics. A parent crvUSD score change or new vault strategy should trigger a savings-share review.

## Revision history

**2026-10-17 — first external report**, adapted from the updated dedicated assessment. Overall **5.0**, Stability **6.0**, Backing **5.0**, Liquidity & Exit **8.0**, Dependencies **4.5**, Contract & Admin **5.5**, Issuer **6.0**. The internal liquidity assessment increased from **5.5 to 8.0** on fresh redemption simulations and cash-out quotes. Verification covers the pinned Ethereum vault state, specified permissions, reward configuration and quoted exit path; inherited parent and issuer judgments retain the limitations stated above. Private portfolio positions are excluded.
