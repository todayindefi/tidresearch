---
asset: "USDC"
slug: "usdc"
aliases: ["USDC", "USD Coin", "USDC.e"]
chains: ["eth", "arb", "base", "solana", "polygon", "avalanche", "optimism", "monad"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
audience: "retail"
date: "2026-07-08"
last_verified: "2026-07-08"
featured: false
production: true
issuer: "Circle"
audited_reserves: true
market_cap_approx: 75500000000
peg_mechanism_score: 9.0
backing_score: 9.0
liquidity_score: 9.5
issuer_score: 8.5
overall_score: 9.0
---

# USDC — Retail Risk Report

**Low risk · 9.0/10**

> **The regulated dollar that sets the bar.** USDC is the fiat-backed stablecoin every other stablecoin gets measured against — fully reserved in cash and short-dated US Treasuries, attested monthly by a Big-Four firm, backed by an SEC-registered reserve fund with *daily* public portfolio reporting, and now formally compliant under the US GENIUS Act stablecoin law. It's deeply liquid on every major chain and redeemable 1:1 with a regulated issuer. Two things keep it just short of a perfect score: Circle can freeze addresses on-chain — a compliance feature that is also a centralization vector — and USDC briefly broke its peg in March 2023 when $3.3 billion of reserves were stuck at the failing Silicon Valley Bank, recovering only after a federal backstop.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None | Sell on any CEX/DEX at peg; institutional 1:1 redemption via Circle Mint | Mint/redeem 1:1 with Circle (business accounts); retail exits via the secondary market | Since 2018 | Ethereum, Arbitrum, Base, Solana, Polygon, Avalanche, Optimism + more (native issuance) |

## Summary

USDC is Circle's fully fiat-backed stablecoin, roughly $75.5 billion in supply. Its reserves are cash plus short-dated US Treasuries, with the majority held in the **Circle Reserve Fund (USDXX) — an SEC-registered 2a-7 government money-market fund** with daily independent portfolio reporting, administered by BlackRock — plus **monthly Deloitte attestations**. USDC is **GENIUS Act-compliant**: fully reserved, Big-Four attested, and operating under a federal framework.

It is also the most widely integrated regulated stablecoin in DeFi. In Q2 2026, USDC overtook USDT in adjusted on-chain transaction volume, cementing its role as the default settlement and collateral dollar. The 9.0 is the ceiling of our stablecoin set — held just below a perfect score by the freeze capability and the SVB precedent, both covered below.

## What you actually earn

**Nothing** — plain USDC pays no yield. Any return comes from lending it or holding a wrapped or savings product built on top of it, not from the token itself. Holding USDC is for people who want a liquid, regulated, DeFi-native dollar rather than yield.

## How exit works

This is one of USDC's strongest dimensions — best-in-class for a regulated dollar. Retail holders exit through the secondary market at near-zero slippage on every major chain. Businesses with Circle Mint accounts redeem 1:1 directly with Circle. The combination of regulated 1:1 redemption and deep secondary liquidity gives USDC an extremely tight arbitrage leash: any meaningful discount gets bought up and redeemed at $1, which is why the peg holds so reliably under normal conditions.

## What backs it

USDC is backed 100% by cash plus short-dated US Treasuries, with no unsecured credit exposure. The majority sits in the SEC-registered Circle Reserve Fund, which publishes its portfolio **daily** — a more granular disclosure regime than any monthly-attestation-only peer, and well above USDT, which has no on-chain proof of reserves and only quarterly attestations. This is the cleanest reserve profile of any major stablecoin: you can see, day by day, exactly what stands behind the token.

## The freeze and centralization caveat

This is the one durable knock. Circle, as a regulated issuer, can **freeze USDC held at specific addresses** in response to law-enforcement orders. It is a compliance feature — it protects the issuer and can help recover stolen funds — but it is also a censorship and centralization surface: your USDC is freezable by the issuer in a way that an immutable, permissionless dollar is not. In practice the capability has been used sparingly and only under legal process, but it is a real property to understand before holding at size.

## The March 2023 SVB precedent

This is the one historical stress event worth knowing. In March 2023, USDC briefly depegged to about $0.87 when roughly $3.3 billion of reserves were trapped at the collapsing Silicon Valley Bank. It recovered within days, once the FDIC backstopped SVB deposits. The lesson Circle took from it: reserves are now concentrated in the SEC-registered money-market fund and Treasuries rather than uninsured bank deposits, materially reducing — though not eliminating — single-bank exposure. It is the one time USDC has broken peg, it was a dated event rather than a live state, and it recovered fully.

## Audits & security

Reserves are attested **monthly by Deloitte**, a Big-Four firm, with **daily** Circle Reserve Fund portfolio reporting layered on top — the strongest transparency stack in the category. The token contracts are mature, heavily audited, and battle-tested since 2018, with no reserve-opacity or contract-bug issues of note. The residual risk here is issuer and centralization risk — the freeze capability and the dependence on a regulated entity — not smart-contract bugs or hidden reserves.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 9.0 | Direct 1:1 fiat redemption with a regulated issuer; the tightest arbitrage leash in the category. One historical depeg (SVB, 2023), fully recovered. |
| Backing | 9.0 | 100% cash + short-dated Treasuries via an SEC-registered 2a-7 money-market fund; Deloitte monthly attestations plus daily public portfolio reporting. Cleanest reserve profile of any major stablecoin. |
| Liquidity | 9.5 | Deepest regulated-stablecoin liquidity across every major chain; the default DeFi settlement and collateral asset. Near-zero slippage at any realistic size. |
| Issuer | 8.5 | Circle — regulated, GENIUS Act-compliant, transparent, publicly listed. Docked only for the on-chain address-freeze capability (compliance-driven, but a centralization vector) and regulated-entity dependence. |
| **Overall** | **9.0** | The gold standard for fiat-backed stablecoins — fully reserved, Big-Four attested, federally regulated, deeply liquid. Not a perfect 10 because of the freeze capability and the SVB depeg precedent. This is the reference point the rest of the stablecoin set is scored against. |

## Who it's for

Anyone who wants the most regulated, transparent, deeply liquid dollar in crypto and is comfortable with a regulated issuer that can freeze addresses under legal process. USDC is the default choice for most holders and the DeFi settlement standard — if you're not sure which dollar to hold, this is the benchmark.

## Who should avoid

- Anyone who needs a censorship-resistant, unfreezable dollar — USDC is freezable by the issuer; prefer an overcollateralized or immutable alternative.
- Anyone who wants zero single-issuer dependence — that is Circle, a regulated but centralized counterparty.

## What to watch

- **GENIUS Act implementation.** US rules are due 2026-07-18. USDC is already compliant in substance, so this is a positive-to-neutral catalyst, but track the formal designation.
- **Reserve composition.** The daily Circle Reserve Fund reporting is the live transparency layer; watch for any drift away from the money-market-fund and Treasury concentration.
- **Banking exposure.** Post-SVB, watch which banks hold the cash sleeve — concentration at any single institution is the historical failure channel.
- **Freeze activity.** Usage remains rare and legal-process-driven; a change in that posture would matter for censorship-sensitive holders.

## A note on chains

USDC is natively issued across Ethereum, Arbitrum, Base, Solana, Polygon, Avalanche, Optimism and more, with liquidity that is deep on all of the major deployments. Newer or smaller-footprint chains — for example Monad — carry thinner secondary liquidity than the established networks, so exit slippage there can be wider even though the underlying token and redemption path are the same. If you hold size on a newer chain, size your exits to that chain's local depth rather than the aggregate.

---

*This report is based on Circle's public attestations, GENIUS Act disclosures, the Circle Reserve Fund daily reporting, and on-chain data through 2026-07-08. USDC's freeze capability is a live issuer feature and reserve composition shifts over time. Corrections and attestation links welcome at info@tidresearch.com.*
