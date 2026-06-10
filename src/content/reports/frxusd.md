---
asset: "frxUSD"
slug: "frxusd"
aliases: ["frxUSD", "Frax USD", "FRXUSD"]
chains: ["eth", "fraxtal", "sonic", "arbitrum", "optimism", "base", "bsc", "avax", "polygon", "linea", "solana"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
audience: "retail"
date: "2026-06-10"
last_verified: "2026-06-08"
peg_mechanism_score: 6.5
backing_score: 6.5
liquidity_score: 5.5
issuer_score: 5.0
overall_score: 5.5
issuer: "Frax Finance"
audited_reserves: false
market_cap_approx: 124000000
featured: false
---

# Frax USD (frxUSD) — Retail Risk Report

**Moderate risk · 5.5/10 · Strong Treasury backing, undercut by unaudited upgradeable contracts**

> **This report covers frxUSD (`0xCAcd6fd2…586E29`), Frax Finance's current flagship stablecoin — NOT Legacy FRAX (`0x853d955a…1b99e`).** They are separate assets with separate balance sheets and separate contracts. The 1:1 FRAX→frxUSD migration was closed in April 2025 (FIP-430). If you're looking at the deprecated, under-collateralized predecessor, see the Legacy FRAX report instead.

frxUSD is Frax Finance's flagship payment stablecoin, launched April 2025 as part of the "North Star" upgrade. It is backed 1:1 by tokenized US Treasuries held with regulated custodians, and it replaced legacy FRAX as the primary Frax dollar. The asset itself has performed well — the peg has held tightly since launch — but the structural risks sit on the contract and exit side, not the backing.

| Peg | Yield | Exit | Status | Chains |
|---|---|---|---|---|
| $1.00 (trades ≈$0.9997) | None (stake to sfrxUSD for yield) | Per-custodian redemption; USDC exit gated by a ≈$10M buffer | Active flagship | Ethereum + 10 chains (LayerZero OFT) |

## Backing & reserves

**The backing is genuinely high-quality — tokenized US Treasuries — but concentrated and not independently audited at the token level.**

frxUSD is collateralized by a basket of tokenized Treasury products: **BlackRock BUIDL** (via Securitize), **Superstate USTB and USCC**, **WisdomTree WTGXX**, plus USDC (Circle), AUSD (Agora), and JTRSY (Centrifuge). Per LlamaRisk's July 2025 review the collateral ratio was about **103.7%**, and despite the BlackRock-forward marketing, **Superstate funds (USTB + USCC) represented over 90% of backing in aggregate** at that time. T-bill quality is excellent; the concentration in a single fund manager is the risk vector. The current public framing emphasizes custodian diversification, but the live split could not be independently re-verified on this pass — treat the ≈90% Superstate figure as the last confirmed reading, not a guarantee of today's mix.

**A consolidated proof-of-reserves feed now exists, but it isn't currently readable.** frxUSD integrated **Chaos Labs Proof of Reserves** in late 2025 to publish on-chain collateralization attestations as the token expands cross-chain. This is a real transparency improvement over launch — but when checked on 2026-06-08, the frxUSD PoR card on the Chaos dashboard rendered empty ("—") while sibling feeds (USDe, AUSD, USDT0) populated normally. So the PoR "exists but is currently unverified"; the fallback remains the underlying-fund attestations (EY for USTB/WTGXX, PwC for BUIDL). **There is no third-party audit of the frxUSD stablecoin contracts themselves** (see Contracts below) — the audits cover the underlying funds, not the token.

## Exit liquidity & redemption

**This is the most underappreciated risk: redemption is fragmented, and clean USDC exit at scale is shallower than the headline suggests.**

Redemptions run through Frax's deposit/redemption coordinator, and they are **non-fungible across custodians** — each custodian redeems into its own asset (BUIDL → BUIDL, USTB → USTB, and so on). A retail holder who wants to exit to **USDC** is funneled through a **≈$10M Superstate USDC buffer**. Beyond that buffer, large redemptions push you into BUIDL/USTB shares and a separate institutional off-ramp. In practice, USDC-at-par exit liquidity is much thinner than the ≈$124M float implies.

On the secondary market, liquidity has improved but is still mid-tier:

| Venue | Notes |
|---|---|
| Curve (Ethereum) | The DEX center of gravity, but paired more against FRAX / sUSDS than USDC — so deep USDC-exit-at-scale is the residual constraint. |
| Aave V4 | frxUSD became a **default borrowable asset on Aave V4 on 2026-04-06**, adding a major lending venue and on-chain depth. |
| Cross-chain (LayerZero OFT) | Expanding across 10+ chains, which broadens reach but fragments depth. |
| Tier-1 CEX | **None yet.** No major centralized listing. |

Daily volume is now about **$10.8M** (roughly 3.7× the ≈$2.9M seen in April), so the trajectory is improving — but for a sized exit, the binding constraint is still the USDC-pairing depth, not the headline TVL.

## Peg performance

**frxUSD has held its peg tightly since launch — this is the strongest part of the picture.** Per LlamaRisk, the maximum deviation has been about **$0.00985**, with only one wick beyond 0.5% (June 26, 2025) that recovered within hours. Hourly volatility has been tighter than USDe. Current price is about **$0.9997**. The risks in this report are structural (contracts, redemption), not operational — the token has done what a stablecoin should so far.

## Contracts & admin

**This is where the score is lost.** Three things compound:

- **No third-party audit of the frxUSD stablecoin contracts.** LlamaRisk states this explicitly. The contracts are **upgradeable proxies**. Frax's in-house "Security Cartel" reviewed the FIP-430 upgrade path, and ChainSecurity audited the FXB-side upgrade — but the frxUSD ERC-20 itself has no public third-party audit report. For an upgradeable stablecoin, that is the single biggest contract-level risk.
- **A 3-of-5 multisig with no timelock controls upgrades.** The owner (`0xB174…3f27`, re-verified on-chain 2026-06-08: 3 of 5 signers, unchanged) can pause, upgrade the implementation, and modify parameters with **zero delay**. Combine that with "upgradeable + unaudited" and you have a high-trust configuration.
- **An unconfirmed December 2025 "stealth patch" allegation.** A single-source Medium post (Donnyoregon) claims Frax silently deployed a contract patch between Dec 5–16, 2025 to fix a zero-value-ticket vulnerability without crediting the bounty submitter, with on-chain bytecode reportedly diverging from the verified Etherscan source; Token Sniffer flagged it. No Frax public response has surfaced. **We can't confirm the specific claim** — but the 3-of-5 / no-timelock / upgradeable / unaudited setup is exactly what would *enable* such an action silently, which is why it's worth flagging.

Frax Finance itself is an established team (Sam Kazemian, 5+ years, active development on frxUSD, Fraxtal L2, and frxETH) — the issuer-level track record is real. The contract-trust profile is the offsetting concern.

## Growth & adoption

frxUSD has **plateaued**: ≈$65M (Jul 2025) → ≈$125M (Apr 2026) → ≈$124M (Jun 2026) circulating. Supply is essentially flat over the last two months, and more than a year after launch it remains a sub-top-50 stablecoin — well behind newer entrants like USDS and USDe. Integration (Aave V4, OFT chains) is broadening faster than the float is growing.

## Who it's for · Who should avoid

**Reasonable for:**
- Frax-ecosystem users who want Treasury-backed dollar exposure and value the tight peg, sized to the ≈$10M USDC-buffer reality (i.e. not relying on instant at-par USDC exit for a large position).
- Holders comfortable with the contract-trust trade-off in exchange for high-quality T-bill backing.

**Avoid / size down if:**
- You need deep, instant, at-par **USDC** exit for a sized position — the redemption fragmentation and ≈$10M buffer are the binding constraint.
- You weight unaudited upgradeable contracts under a no-timelock 3-of-5 multisig heavily — that is the structural risk here.
- You're confusing it with Legacy FRAX — they are different assets (see the disambiguation note at the top).

## What to watch

- **Chaos PoR feed.** If the frxUSD card on the Chaos dashboard starts populating with live numbers, that closes the current "exists but unverified" gap and is a genuine backing-transparency uplift.
- **Backing concentration.** The ≈90% Superstate exposure (USTB + USCC) vs the "diversified custodians" marketing — watch for the live split to be re-confirmed either way.
- **Multisig / upgrades.** The 3-of-5 owner (`0xB174…3f27`) can upgrade with no delay. Any implementation upgrade, or resolution of the Dec 2025 patch allegation, would be material.
- **USDC-exit depth.** The Superstate USDC buffer and Curve USDC-pairing depth are the real exit constraint — more than headline float.
- **FXB redemption asset.** Note that Frax Bonds (FXBs) currently redeem to *Legacy FRAX* on mainnet, not frxUSD — the Fraxtal upgrade making frxUSD the FXB underlying was still being audited at last check. Verify before relying on it.

---

*This report describes frxUSD as of June 2026, based on public Frax/LlamaRisk documentation and on-chain reads (multisig re-verified 2026-06-08). Frax Finance has not engaged on this report. The backing sits partly off-chain with regulated custodians and tokenized-fund issuers; figures rely on those issuers' attestations plus on-chain data. Corrections welcome at info@tidresearch.com.*
