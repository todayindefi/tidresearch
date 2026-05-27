---
asset: "STRCx"
slug: "strcx"
aliases: ["STRCx", "STRC.x", "Backed STRC", "Strategy PP Variable xStock"]
chains: ["eth", "solana", "arbitrum", "bnb", "mantle"]
category: "wrapped-token"
assessment_type: "light"
audience: "retail"
date: "2026-05-27"
last_verified: "2026-05-27"
featured: false
production: true
issuer: "Backed Finance (Backed Assets JE Ltd.)"
yield_bearing: true
underlying_assets: ["STRC"]
volatility_score: 6.0
liquidity_score: 3.0
structural_score: 6.0
redemption_score: 3.0
underlying_score: 4.5
issuer_score: 6.0
overall_score: 4.0
---

# STRCx — Retail Risk Report

**Elevated risk · 4.0/10**

STRCx is **Backed Finance's tokenized form of STRC** — Strategy's (formerly MicroStrategy) Variable-Rate Series A Perpetual "Stretch" Preferred Stock (Nasdaq: STRC). It is one of Backed's "xStocks," issued 1:1 against a real STRC share held with Backed's qualified custodian. You are not buying a stablecoin and you are not buying common stock — you are buying an on-chain claim on a novel, high-yield preferred share whose price is engineered to sit near its $100 par value, with the dividend accruing into your token balance automatically.

| Tracks | Yield | Exit | Age | Chains |
|---|---|---|---|---|
| STRC (≈$100-par preferred) | ≈11.5% via rebasing (net of US withholding) | Non-US AP redemption, or Solana DEX | ≈4 months (live early 2026) | Ethereum + 4 (Solana, Arbitrum, BNB, Mantle) |

## What you actually hold

The underlying STRC is a **variable-rate perpetual preferred stock**. Three features define its risk:

- **It targets $100 par via a monthly dividend reset.** Strategy adjusts STRC's dividend rate each month to nudge the secondary price back toward $100. As of May 2026 the rate is **11.5%**, held flat for the third consecutive month, and STRC has traded slightly **below par (≈$99.75) since mid-April**. The anchor mostly holds, but it is not a hard peg — Strategy chose to let STRC drift just under par rather than ratchet the rate up to defend it.
- **It is perpetual.** STRC has no fixed redemption date, and Strategy is under no obligation to ever return your principal. Strategy can redeem partially only while at least $250M of STRC remains outstanding, or in full on certain corporate/tax events.
- **Its dividend is ultimately Strategy/Bitcoin-dependent.** STRC's payments lean on Strategy's continued ability to raise capital (its equity-issuance cadence), which in turn tracks Bitcoin. STRC is barely a year old and has **not been tested through a prolonged BTC drawdown or a capital-raise pause.** That novelty is the core of the **Underlying score (4.5)** — a genuine SEC-registered, Nasdaq-listed security, but a single, untested, credit-linked one.

STRCx the wrapper does nothing to soften any of this. Whatever happens to STRC happens 1:1 to STRCx.

## What you earn

STRCx is a **rebasing token.** The contract carries a multiplier (currently **≈1.0413**) that grows your balance to reflect the accrued STRC dividend, **net of US withholding tax**. So the ≈11.5% yield reaches you as a slowly rising token count rather than a cash payment — no claim step, no separate yield token. (Your wallet balance already reflects the multiplier.)

One caveat: the multiplier is **updated by the issuer**, so its accuracy depends on Backed's accrual process rather than an on-chain formula. This is standard for Backed's yield-bearing xStocks, but it is a trust point, not a trustless mechanism.

## How exit works

This is where most of the risk sits, and it depends heavily on **who you are and which chain you're on.**

**Primary redemption (mint/burn at Backed):** restricted to whitelisted **Authorized Participants** — accredited, KYC'd institutions, **non-US persons only**. Retail buyers and US persons have no primary path. This is the single biggest constraint and drives the **Redemption score (3.0)**.

**Secondary market:** Like Backed's other xStocks (TSLAx, COINx, NVDAx), STRCx's tradeable depth lives on **Solana** (Raydium/Orca), where xStocks trade 24/7. STRCx is a **niche preferred**, far thinner than the flagship equity xStocks, and its specific Solana pool depth is not something we independently verified — assume it is real but shallow. On **Ethereum** there is effectively no DEX depth, and the on-chain float is highly concentrated (two addresses hold ≈68% of the Ethereum supply).

**Bottom line on exit:**
- A **non-US holder trading on Solana** has a working, if thin, secondary market.
- A **US person, or anyone holding on Ethereum only**, should treat STRCx as **near one-way liquidity** — easy to get into, hard to get out of at size.

## What the contract is doing

- **Ethereum contract:** `0x1aad217b8f78dba5e6693460e8470f8b1a3977f3` — rebasing ERC-20, 18 decimals, "Strategy PP Variable xStock."
- **Multi-chain:** live on five chains (Ethereum primary, plus Solana, Arbitrum, BNB Chain, Mantle), ≈1,072 holders, roughly $132–205M total notional (rwa.xyz, May 2026).
- **Admin:** on-chain `owner()` and `minter()` are Backed-controlled addresses with mint/burn and multiplier-update authority. This is a single point of issuer trust — standard for the Backed model, but it means Backed (not code) ultimately governs supply and the accrual multiplier.
- **Backing & attestation:** 1:1 against STRC shares at Backed's qualified custodian. Backed publishes NAV/proof-of-reserves at the **issuer level**, not as a continuous per-token on-chain feed — so backing verification leans on Backed's reports plus the custodian arrangement.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 6.0 | STRC engineered near $100 par via monthly resets; more stable than a normal equity wrapper but not pegged. Currently ≈$99.75 (mildly below par) with a flat 11.5% rate — minor, in-design. Sensitive to Strategy credit / BTC stress, rate-cap or suspension events. |
| Liquidity | 3.0 | Multi-chain with ≈1,072 holders; tradeable depth on Solana, thin for this niche preferred and unverified pool-by-pool. Ethereum DEX depth ≈zero with ≈68% of the ETH float in two addresses. Below average. |
| Structural | 6.0 | Mature Backed wrapper (Swiss DLT-regulated since 2021). Rebasing ERC-20, whitelist-gated mint/burn. Held back by issuer mint/burn + multiplier authority, off-chain custodian dependency, and no continuous per-token on-chain PoR. |
| Redemption | 3.0 | **Binding constraint.** Primary redemption is non-US, accredited-AP-only. A non-US holder has a working Solana secondary exit; a US person or Ethereum-only holder faces worst-case exit asymmetry. Underlying STRC is perpetual with no obligation to return principal. |
| Underlying | 4.5 | STRC: a real Nasdaq/SEC-registered preferred with a functioning ≈11.5% dividend and par-anchor, but a single, novel, Bitcoin/Strategy-credit-linked security, untested through a BTC drawdown or capital-raise pause. |
| Issuer | 6.0 | Backed Finance — established Swiss DLT issuer, multiple live xStocks, established custody + attestation cadence. Single-issuer dependency, off-chain custodian, and issuer-level (not per-token) PoR keep it from scoring higher. |
| **Overall** | **4.0** | **Elevated risk.** For a non-US holder able to trade on Solana, STRCx is a reasonable yield-capturing on-chain proxy for STRC, carrying Backed counterparty + custodian risk on top of STRC's own novelty. For a US person or Ethereum-only holder, it is a thin, effectively one-way trade. |

## Who it's for

- **Non-US holders who want STRC's ≈11.5% preferred yield on-chain** and can trade on Solana, treating STRCx as an illiquid, single-name credit allocation rather than a cash equivalent.
- Holders specifically seeking **Strategy/Bitcoin-linked preferred income** with the convenience of a composable, auto-accruing token.

## Who should avoid

- **US persons at any meaningful size.** No primary redemption + thin secondary = no realistic exit at NAV.
- **Anyone holding only on Ethereum.** The Ethereum float is concentrated and has no DEX depth; exit is near one-way.
- **Anyone treating this as a stablecoin.** It tracks a $100 preferred, not $1, and the par-anchor is a soft mechanism, not a guarantee.
- **Anyone using STRCx as leveraged collateral.** Thin secondary depth makes market-priced oracles unsafe for this asset.

## What to watch

- **STRC's price vs par and the monthly rate reset.** Sustained drift below par or a rate cut signals stress in the anchor mechanism; a rate cut directly lowers your yield.
- **Strategy / Bitcoin drawdowns.** A severe BTC crash compressing Strategy's equity-raise capacity is the real test of STRC's dividend durability — the scenario the instrument has never faced.
- **Solana pool depth for STRCx.** This is the only realistic retail exit; drainage or persistent imbalance is the leading signal that exit is deteriorating.
- **The rebasing multiplier's cadence.** It is issuer-updated — track whether it keeps pace with the ≈11.5% net dividend over time.

## Related reports

STRCx is the on-chain STRC sleeve behind Apyx's stablecoins. If you're looking at those, see the [apxUSD report](/reports/apxusd/) (the $1 wrapper, yield routed away) and the [apyUSD report](/reports/apyusd/) (the yield-bearing sibling). Both carry STRC exposure indirectly; STRCx is the direct, undiluted version.

---

*This report is based on Backed Finance's public documentation, on-chain reads, and third-party data (rwa.xyz, CoinDesk) through 2026-05-27. STRCx is an off-chain-backed real-world asset: backing is verified via Backed's issuer-level reports and qualified-custodian arrangement, not a continuous on-chain feed, and some details (named custodian for STRC, exact Solana pool depth) are not independently verified here. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
