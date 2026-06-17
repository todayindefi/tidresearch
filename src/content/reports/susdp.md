---
asset: "sUSDp"
slug: "susdp"
aliases: ["sUSDp", "Staked USDp", "Savings USDp"]
chains: ["sonic", "hyperevm", "avax", "eth", "base"]
category: "vault-share"
underlying_assets: ["usdp-parallel"]
assessment_type: "light"
audience: "retail"
date: "2026-06-17"
last_verified: "2026-06-17"
featured: false
production: false
issuer: "Parallel Protocol DAO"
yield_bearing: true
volatility_score: 6.0
structural_score: 5.0
redemption_score: 4.5
liquidity_score: 3.5
issuer_score: 5.0
underlying_score: 5.0
overall_score: 4.5
---

# sUSDp — Retail Risk Report

**Elevated risk · 4.5/10**

sUSDp is the yield-bearing savings version of [USDp](/reports/usdp-parallel/), Parallel V3's overcollateralized dollar. You deposit USDp into an ERC-4626 savings vault and receive sUSDp, whose value grows as the protocol routes fees to savers. It is live on Ethereum, Base, Sonic, HyperEVM (via HypurrFi's yield cluster) and Avalanche.

| Yield source | Exit method | Primary redemption | Wrapper | Chains |
|---|---|---|---|---|
| 70% of protocol fees (mint/redeem, bridging, flash-loans) | Unwrap to USDp, then redeem USDp | ERC-4626 redeem to USDp at share price | Standard ERC-4626 vault | ETH, Base, Sonic, HyperEVM, Avalanche |

## Summary

sUSDp captures **70% of the fees** the Parallel codebase generates across its Parallelizer (mint/redeem), bridging, and flash-loan modules. Deposits and withdrawals are fee-free and continuous, and the share price accrues over time rather than paying a rebasing balance. The yield rate is **keeper-managed** (Cooper Labs and Mimo Labs).

This is a fee-revenue product, not a reserve-carry product — your yield depends on how much minting, bridging, and flash-loan activity the protocol actually does. At USDp's current size (about $3.25M), that fee throughput is small, so headline yields can compress quickly if activity slows.

## Key risks

- **It inherits all of USDp's risk.** sUSDp is only as safe as USDp's reserve whitelist — including the third-party *curated lending vaults* (e.g. Silo mevUSDC, scUSD vaults) that sit in the backing. The November 2025 Stream/xUSD episode is the live example: a curated reserve (mevUSDC) had lent into the failed xUSD, and Parallel's Guardians + Keepers swapped it out for USDC before any loss reached USDp — and therefore before it reached sUSDp. A slower swap-out is exactly how a backing loss would flow through to the sUSDp share price. See the [USDp report](/reports/usdp-parallel/) for the full backing picture.
- **A USDp reserve loss is socialized into the share price.** Unlike holding USDp directly, sUSDp holders sit one layer further out and absorb protocol losses through the vault's exchange rate.
- **Wrapper mechanics.** Standard ERC-4626, but per-chain share-price/oracle integrations need monitoring; the real exit is unwrap-to-USDp, then redeem USDp into collateral.
- **Thin liquidity.** Multi-chain availability does not mean deep exit markets. Don't assume you can sell sUSDp on a DEX at par in size.

## Bottom line

A reasonable native savings layer over a competently-built but niche stablecoin, from a seasoned team with proven emergency response. The extra return comes with extra risk: you take on USDp's curated-vault backing exposure *plus* a layer of vault and fee-revenue dependency. Size it as a higher-risk yield position, not a cash equivalent — and read the [USDp report](/reports/usdp-parallel/) first, because that's where the load-bearing risk lives.

---

*This report is based on public documentation and on-chain data only. Corrections welcome: info@tidresearch.com*
