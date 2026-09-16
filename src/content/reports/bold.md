---
asset: "BOLD"
slug: "bold"
aliases: ["BOLD", "Liquity BOLD", "Liquity v2"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "overcollateralized CDP with permissionless redemption"
assessment_type: "full"
date: "2026-09-15"
last_verified: "2026-09-15"
peg_mechanism_score: 7.0
backing_score: 7.5
liquidity_score: 5.5
underlying_score: 7.0
structural_score: 8.5
issuer_score: 8.0
overall_score: 6.5
axis_frame: six
issuer: "Liquity (immutable protocol, no issuer counterparty)"
market_cap_approx: 34464706
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=bold"
production: false
---

# BOLD — Risk Report

**Moderate risk · 6.5/10**

**Category:** Stablecoin | **Peg Mechanism:** Overcollateralized CDP with permissionless redemption | **Issuer:** Liquity — an immutable protocol with no issuer counterparty

[View the live BOLD six-axis risk dashboard](https://todayindefi.github.io/backing-monitor/?asset=bold) for peg history, collateral branches, secondary liquidity, size-dependent redemption, Stability Pool coverage, dependencies, contract authority and counterparty assessment.

## Summary

BOLD is the stablecoin of Liquity v2. It is created when borrowers deposit WETH, wstETH or rETH in collateralized debt positions called troves. Holders can redeem BOLD directly against that collateral without an allowlist, queue or issuer approval.

The core protocol is immutable. The BOLD token has no owner or proxy administrator, and the collateral registry is permanently limited to its three existing assets. This removes the administrator and issuer risks common to many stablecoins, but it also means faulty code cannot be upgraded or paused.

BOLD's main constraint is exit capacity rather than ordinary retail execution. Small sales have low measured slippage, while larger sales encounter a sharply nonlinear liquidity curve and increasingly expensive redemptions. Its **6.5/10** overall score reflects strong contract and issuer characteristics alongside more limited liquidity and correlated ETH-based backing.

> **Critical token-identification warning:** the current token uses the symbol `BOLD`, while the abandoned February 2025 deployment uses `Bold`. Some systems match symbols without respecting case. Identify the live token by its Ethereum address: `0x6440f144b7e50D6a8439336510312d2F54beB01D`.

## 1 · Stability — 7.0

BOLD targets one dollar through permissionless redemption against Liquity's collateral. When BOLD trades below one dollar, a buyer can purchase it in the market and redeem it for collateral of greater stated value. The mechanism operates through the contracts rather than an issuer treasury or discretionary market-making commitment.

Redemption has no KYC requirement, allowlist or scheduled window. This gives every holder access to the primary peg mechanism and lets arbitrageurs act whenever the market price moves below the value available through redemption.

**Risks and limitations.** Redemption remains available at size, but its variable fee becomes expensive as the redeemed share of supply grows. Measurements on 2026-09-15 produced fees of **0.94% at $100,000, 3.54% at $1,000,000 and 29.6% at $10,000,000**. All three collateral assets are also exposed to ETH: WETH, wstETH and rETH are correlated in a market drawdown, so the branches do not provide independent sources of stability.

## 2 · Backing — 7.5

BOLD is backed by collateral deposited in three separate Liquity branches. Each branch records its own debt, collateral and Stability Pool, while the same BOLD token represents debt across the system. On-chain readings on 2026-09-15 showed total BOLD supply of **34,464,705.66** against summed branch debt of **34,465,713.32**, a difference of **1,007.66 BOLD, or 0.0029%**.

| branch | debt (BOLD) | collateral (units) | shutdown |
|---|---:|---:|---|
| WETH | 11,314,751.96 | 10,493.68 WETH | none |
| wstETH | 18,972,630.47 | 16,953.87 wstETH | none |
| rETH | 4,178,330.89 | 5,769.65 rETH | none |
| **total** | **34,465,713.32** | | |

Collateral is shown in native units because converting it to dollars would introduce an external market price into the protocol accounting. This distinction is particularly important for wstETH, whose exchange rate to ETH rises over time; a decline in wstETH units does not by itself describe the change in dollar value.

Liquity reported system collateralization of approximately **279.8%** on about **$96.8 million** of collateral, using its own oracle inputs. Stability Pool deposits covered approximately **53%** of outstanding debt. Direct reads of `shutdownTime()` returned zero for all three branches, meaning none had entered shutdown.

**Risks and limitations.** Supply grew approximately **14.9% over 55 days**, with growth concentrated in the WETH branch, whose **110% minimum collateral ratio** is the lowest of the three. In the largest branch, wstETH debt rose about **6.9%** while collateral declined about **19.1% in units**. Although units and value are not interchangeable, the combination indicates higher leverage in the branch responsible for most BOLD debt.

## 3 · Liquidity & Exit — 5.5

BOLD can be exited through decentralized exchanges or redeemed through Liquity. Exchange liquidity is efficient for small transactions: a measured **$100,000** sale moved the price by approximately **0.8 basis points** on 2026-09-15. Permissionless redemption provides a second route when market liquidity is insufficient, although its fee rises with redemption size.

The executable liquidity curve becomes materially weaker above seven figures. The measured 2% price-impact crossing was approximately **$4.3–4.4 million**. Total output peaked near an **$8 million** input and then declined, meaning that beyond the peak a larger sale could return fewer dollars in total, not merely a worse rate per token.

Published pool totals require deduplication. Convex, StakeDAO, Yearn and Beefy BOLD-USDC entries are wrappers around the same underlying Curve position, so adding them together counts the same liquidity more than once. Aggregator entries labelled `liquity-v2` BOLD represent Stability Pool deposits rather than tradable market depth.

**Risks and limitations.** The measured executable ceiling declined approximately **34% over 55 days**, while BOLD supply grew **14.9%** and aggregate reported DEX TVL increased. Pool TVL therefore did not reflect the exit a seller could actually execute. Router quotes change intraday, so the important finding is the curve's shape and turnover point rather than a permanently fixed dollar threshold. Redemption remained available but was more expensive than the AMM route at every measured size the AMM could serve.

## 4 · Dependencies — 7.0

BOLD depends on the solvency and liquidation of troves backed by WETH, wstETH and rETH, together with Chainlink price feeds and the exchange-rate mechanisms used for the liquid-staking tokens. The core system has no off-chain reserve custodian, issuer treasury, attestation process or native bridge.

Chainlink feeds determine collateral values and therefore influence borrowing, liquidation, redemption and branch shutdown. A stale or failed feed can cause its associated branch to shut down. Because the deployed core cannot be upgraded, shutdown retires the branch rather than pausing it for an administrator to repair.

sBOLD (`0x50bd66d59911f5e086ec87ae43c811e0d059dd11`) is a separate ERC-4626 product that allocates BOLD among Liquity Stability Pools. Its `asset()` function points to the live BOLD token. On 2026-09-15 it held **4,535,649.05 BOLD**, equal to **13.16% of supply** and approximately one-quarter of all Stability Pool deposits.

**Risks and limitations.** The three collateral branches share ETH market exposure, and an oracle failure has an irreversible branch-level consequence. sBOLD also has a different control model from BOLD itself: its owner is a **2-of-3 Gnosis Safe** at `0x2dF68EA583B8394A8Cc71EeBcd4fA7c6746027D5`, and the wrapper can be paused. These controls belong to the optional third-party wrapper rather than the BOLD core, but holders using sBOLD are exposed to them.

## 5 · Contract & Admin — 8.5

BOLD's core contracts are non-upgradeable and have no administrator capable of pausing the token, changing its parameters or expanding its collateral set. The following Ethereum reads were reproduced on 2026-09-15:

```
BOLD.owner()              0x0000000000000000000000000000000000000000   renounced
EIP-1967 impl slot        0x0           not a proxy
EIP-1967 admin slot       0x0           no upgrade admin
CollateralRegistry.getToken(3)  0x0000000000000000000000000000000000000000   collateral set closed
```

The authority walk covered five layers and thirty contracts. The registry's `boldToken()` function returned the same live token address, confirming that the registry examined was the one governing this BOLD deployment. No core EOA, Safe, timelock, proxy upgrade path, manual pause or parameter setter was found.

[Liquity's own risk disclosure](https://docs.liquity.org/v2-documentation/risk-disclosure) agrees with these measurements: it describes the core as immutable, lists no upgradeable code or parameters, states that no manual pause or freeze exists, and limits BOLD's native deployment to Ethereum mainnet. The same disclosure points to DeDaub and ChainSecurity audits for smart-contract risk. It does not establish on the page that those audits covered every authority path walked here or map each report to the exact deployed bytecode, so audit scope is not used as proof of the absence of control. This assessment covers the native Ethereum deployment; Liquity identifies no current native cross-chain deployment.

**Risks and limitations.** Immutability prevents both hostile administrative changes and corrective upgrades. A bug in a live branch has no patch path; the available response is permanent branch shutdown, followed by urgent redemptions using `lastGoodPrice`, a 0% fee and a 2% collateral bonus. This is a wind-down mechanism rather than a repair.

That limitation became concrete in February 2025, when a critical Stability Pool issue was found in the initial Liquity v2 deployment after six audit firms and formal verification had reviewed the base code. The deployment could not be patched in place, so Liquity abandoned it and asked users to migrate to a new deployment. The root cause has not been published, **202,029.51 legacy BOLD** remained outstanding on 2026-09-15, and the standing bug bounty caps critical findings at **$125,000**.

## 6 · Issuer — 8.0

BOLD has no issuer counterparty holding reserves or promising redemption from a corporate balance sheet. No entity can freeze an address, stop token transfers or decide whether a holder may redeem. The peg and collateral claims are implemented by the Ethereum contracts rather than guaranteed by Liquity AG or another company.

LQTY governance directs protocol incentives. It operates in seven-day epochs with a six-day voting cutoff, and approved payouts arrive no earlier than the following epoch. Its authority does not extend to upgrading the core contracts, changing the collateral registry or pausing BOLD.

**Risks and limitations.** LQTY voter concentration was not measured, so the cost of controlling incentive allocation is unknown. Governance of the Chainlink feeds was also outside the contract-authority walk, despite the importance of those feeds to irreversible branch shutdown. Cumulative redemption volume beyond approximately 82 days could not be measured without an archive node.

## Two tokens, and the symbols differ only by case

The live and abandoned deployments use symbols that differ only by capitalization:

| | address | `symbol()` | supply |
|---|---|---|---:|
| **live** | `0x6440f144b7e50D6a8439336510312d2F54beB01D` | `BOLD` | 34,464,705.66 |
| legacy | `0xb01dd87B29d187F3E3a4Bf6cdAebfb97F3D9aB98` | `Bold` | 202,029.51 |

Case-insensitive ticker matching can resolve either token. The legacy token belongs to the abandoned February 2025 deployment, and its remaining supply did not migrate. Use the full contract address rather than the symbol when selecting BOLD. CoinGecko identifies the live asset as `liquity-bold-2`.

## Who this is for

- **Holders who want a dollar with no issuer**, and who value that enough to accept a thinner exit than a centralised stablecoin offers.
- **Anyone who wants to verify rather than trust.** The immutability, the collateral set, the branch debts and the reconciliation are all readable directly, without an attestation.

## Who this is NOT for

- **Anyone who may need to exit above seven figures quickly.** The ladder turns over near $8M and redemption at $10M costs 29.6%.
- **Anyone who wants a recoverable failure mode.** There is no patch path, by design.
- **Anyone relying on published TVL** as a measure of how much can be sold.

## What to watch

- **The wstETH branch's leverage** — debt rising against falling collateral units is the live adverse trend.
- **Where the liquidity ladder peaks**, rather than the headline size of the pools. Reported TVL and executable capacity have moved in opposite directions.
- **Growth concentrating in the 110% MCR branch.**
- **sBOLD's share of supply**, and any change to what its 2-of-3 Safe can do.
- **Any branch `shutdownTime()` moving off zero** — that is one-way.

## Revision history

*2026-09-15 — first publication. Immutability verified on-chain: `owner()` zero, both EIP-1967 slots zero, `getToken(3)` zero against a registry whose `boldToken()` returns the token itself. Branch debts read per-branch and reconciled against `totalSupply` at 0.0029%. sBOLD identified by `asset()` and its owner read as a 2-of-3 Safe. Both token addresses confirmed by `symbol()` and supply.*
