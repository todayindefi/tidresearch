---
asset: "wYLDS"
slug: "wylds"
aliases: ["wYLDS", "Wrapped YLDS", "Hastra Wrapped YLDS"]
chains: ["solana"]
category: "wrapped-token"
assessment_type: "light"
audience: "retail"
date: "2026-07-24"
last_verified: "2026-07-25"
featured: false
production: true
yield_bearing: true
underlying_assets: ["YLDS"]
issuer: "Hastra (wrapper) / Figure Certificate Company (backing)"
market_cap_approx: 200000000
volatility_score: 7.0
liquidity_score: 4.0
structural_score: 6.5
redemption_score: 6.5
underlying_score: 7.5
overall_score: 6.5
companion_report: "hastra-prime"
---

# wYLDS — Retail Risk Report

**Lower-to-moderate risk · 6.5/10**

wYLDS is Hastra's on-chain, 1:1 wrapper of Figure's SEC-registered YLDS, and it is the layer [Hastra PRIME](/reports/hastra-prime) actually redeems into. If you hold PRIME and unstake, you land in wYLDS — not YLDS — so this report covers that base layer on its own, with the YLDS backing folded in rather than split into a separate file.

## What it is

wYLDS is a non-appreciating, yield-bearing wrapper. You mint it by swapping USDC 1:1 — instant, on-chain, and with no KYC — and Hastra uses that USDC to buy YLDS from Figure Markets and hold it 1:1 in reserve. The yield (around 3.27%, sourced from the underlying YLDS Treasuries) is paid monthly as additional wYLDS tokens, so the token targets a price of about $1 rather than appreciating the way PRIME does. It trades close to $0.9998 — a tight peg, held there by full backing and redeemability rather than by market depth. wYLDS is Solana-first: the canonical SPL mint is `8fr7WGTVFszfyNWRMXj6fRjZZAnDwmXwEpCrtzmUkdih`, and CoinGecko lists it as Solana-only.

## The backing (YLDS, folded in)

Each wYLDS is backed 1:1 by YLDS, a blockchain-native face-amount certificate — the first SEC-registered yield-bearing stablecoin, and legally a registered security rather than a payment stablecoin. It is issued by Figure Certificate Company under Section 28 of the Investment Company Act of 1940 (an affiliate of Nasdaq-listed Figure Technology Solutions, FIGR), backed by short-dated U.S. Treasuries and Treasury repo yielding roughly SOFR minus 35 basis points, with reserves managed by a registered investment advisor (Figure Investment Advisors) and custodied at UMB Bank. Hastra's live Proof-of-Reserves dashboard shows wYLDS about 100.31% backed, with the reserve wallets verifiable on-chain.

YLDS itself is KYC and accredited-gated through Figure Markets — but a wYLDS holder never touches it. Hastra is the KYC'd party that mints and redeems YLDS on your behalf, which is what gives retail "regulated yield without direct YLDS ownership." This backing is the strongest part of the stack; on its own it would score around 7.5.

## How you exit (the honest picture)

There are two exit paths, both no-KYC.

- **Primary redemption (wYLDS → USDC):** a permissionless `request_redeem` ticket, followed by an admin-fulfilled completion in which Hastra sells YLDS to source the USDC. This is not instant and not trustless — but on-chain evidence over the trailing eight days shows it genuinely works: about 6 redemptions a day, 1:1 to the cent, with a median turnaround near 49 minutes and most clearing within the hour, and nothing stuck in transit. Off-hours requests can wait until the next business morning, but in normal conditions this is a reliable sub-hour 1:1 burn.
- **Secondary market (sell on a Solana DEX):** Raydium or Kamino give an instant exit, but the pool is thin and single-venue (roughly $27K to $80K of 24h volume), so this path only works for small size.

## Why it scores 6.5 (not higher)

The collateral is excellent, and the primary redemption is better than a raw "pending until liquid" queue would suggest. What holds wYLDS below its backing quality is the wrapper and access layer: shallow secondary DEX liquidity (the weakest axis, 4.0); an admin-mediated redemption with a single fulfiller that is market-hours-dependent and stress-untested; and Hastra as a newer operator that carries account-freeze authority stacked on top of Figure. Excellent collateral, with reliable-but-not-trustless access to it.

## Who this is for

Holders who want tokenized short-duration Treasury yield on Solana, with a fast primary redemption, and who are comfortable with a shallow DEX and an admin in the loop on the redeem. It is not for anyone who needs deep instant secondary depth or a fully trustless burn.

## Score rationale

| Category | Score | Notes |
|---|---:|---|
| Volatility | 7.0 | Par-targeting Treasury wrapper (yield paid as tokens, not price). Tight peg near $0.9998; roughly a −2 to −3% drawdown band on thin books. |
| Liquidity | 4.0 | Weakest axis. Single-venue Solana DEX, about $27K to $80K of 24h volume — you can't exit size on-chain. A fast primary redeem mitigates the reliance, but the axis scores observed depth. |
| Structural | 6.5 | Open-source vault, two audits (Informal Systems — a Critical found and fixed; Sherlock — 0 Critical/High), live Proof-of-Reserves at 100.31%, Squads v4 upgrade authority. Below 7 by Hastra's freeze authority, the wrapper layer, and operator newness. |
| Redemption | 6.5 | Instant permissionless mint; an admin-mediated redeem that is on-chain-verified active, 1:1, and near 49-minute median, with no KYC. Below 7+ by the single fulfiller, market-hours and off-chain dependency, and a stress-untested sample. |
| Underlying | 7.5 | Figure's SEC-registered, Treasury-backed YLDS — pristine, regulated collateral. |
| **Overall** | **6.5** | Excellent Treasury backing plus a working, fast 1:1 primary redemption, gated only by a shallow DEX and an admin in the loop. The clean regulated base of the wYLDS → PRIME stack. |

---

*This report is built from public documentation, third-party market data, the open-source Hastra vault repo, two published audits, and a live on-chain Proof-of-Reserves. We fold in the YLDS backing (formerly a standalone report) as wYLDS's collateral. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-25 — published (replaces the standalone YLDS report, now folded in here as backing). wYLDS 6.5: SEC-registered Treasury backing via Figure's YLDS, on-chain-verified sub-hour 1:1 redemption; held below its backing quality by shallow Solana DEX liquidity and an admin-mediated (not trustless) redeem.*
