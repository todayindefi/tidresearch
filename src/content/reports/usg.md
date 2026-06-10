---
asset: "USG"
slug: "usg"
aliases: ["USG", "Tangent USD", "Tangent USG"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "light"
audience: "retail"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usg"
date: "2026-06-10"
last_verified: "2026-06-10"
peg_mechanism_score: 5.0
backing_score: 5.0
liquidity_score: 3.5
issuer_score: 4.0
overall_score: 4.0
issuer: "Tangent Finance"
audited_reserves: false
market_cap_approx: 3210000
featured: false
---

# Tangent USG — Retail Risk Report

**Higher risk · 4.0/10 · Early-stage crvUSD fork — genuinely backed, but tiny, thinly traded, and weakly governed**

> **Early-stage asset.** USG launched around May 14, 2026 and is roughly 4 weeks old, with about $3.2M of real supply. It is genuinely collateral-backed, but it has almost no track record. Size your exposure to that reality. Live, hourly on-chain figures are on the [USG backing dashboard](https://tidresearch.com/dashboards/?asset=usg).

USG is Tangent Finance's decentralized stablecoin — a from-scratch Solidity reimplementation of Curve's **crvUSD** design (LLAMMA-style CDP markets, PegKeeper pools, and dynamic interest rates). Borrowers mint USG against **productive stablecoin LP collateral** (Curve LPs wrapped through StakeDAO, Convex-FXN, or Curve gauges), and the peg is supported by two PegKeeper pools (USG/USDC and USG/frxUSD) plus rate adjustments. It is a sound, well-audited *architecture* running as a very small, very young *instance*.

| Peg | Yield | Exit | Status | Chain |
|---|---|---|---|---|
| $1.00 (trades ≈$0.9977, −0.23%) | Stake to sUSG | PegKeeper Curve pools (≈$1.28M stable depth); no CEX | Live, early-stage (~4 weeks) | Ethereum |

## Backing & collateral

**As of June 10, 2026, USG is essentially 100% backed by over-collateralized borrower debt — a genuine improvement over a month ago.**

When we first assessed USG in late May, roughly **half** its backing was "protocol-owned liquidity" (POL) — USG that the protocol itself minted into the PegKeeper pools, backed only by the USDC/frxUSD sitting on the other side. That crutch has now **fully unwound to zero**: the PegKeepers currently have no USG minted into them, and **100% of circulating USG is backed by real borrower CDP positions** at about a **121% collateral ratio**. Borrower debt roughly doubled over the fortnight (from ≈$1.6M to ≈$3.2M) while total supply held flat — genuine borrowing replaced the protocol-minted POL. Bad debt is $0, and the collateral oracles are reading cleanly (no markets over-valuing collateral).

| Metric (June 10, 2026) | Value |
|---|---|
| Real circulating supply | ≈$3.21M |
| Collateral ratio (CDP only, conservative) | ≈121% |
| Collateral ratio (inclusive of standby keeper stables) | ≈161% |
| PegKeeper POL (protocol-minted USG) | **$0 (fully unwound)** |
| Bad debt | $0 |
| Live CDP markets | 12 |

**A backing caveat worth knowing:** USG's on-chain `totalSupply()` reads about **43 million**, but that is a pre-minted PegKeeper *ceiling buffer*, not real circulating supply — the same quirk crvUSD has. The real number is ≈$3.2M. Never size USG off `totalSupply()`.

**The collateral has a recursive, exotic tail.** USG is backed by Curve LPs, and some of those LPs themselves contain other CDP or exotic stablecoins. The 12 markets are now fairly evenly sized (the top six are each ≈$370K). The most reputable legs — RLUSD/USDC, frxUSD/sUSDS, PYUSD/USDC, fxUSD/USDC, USDT/crvUSD — carry most of the debt, but a roughly-quarter tail includes **Resupply's reUSD** (a recursive-CDP token we rate 3.5/10, ≈$250K across two markets), plus eUSD, OUSD, BOLD and sDOLA/scrvUSD legs. Tangent deliberately tiers these exotic legs to the lowest 84% borrow limit while reputable legs get 90%. All of them trade within about 0.18% of par today. The cascade risk — a stablecoin backed by LPs of other stablecoins — is concretely present but small.

## Peg performance

USG trades at about **$0.9977 (−0.23%)**. That's a touch softer than the near-perfect peg it held at launch (≈$0.9996), but notably it held near par *through* the full POL withdrawal — the keepers and rates defended the peg without needing protocol-minted liquidity, which is mildly reassuring for the mechanism. Still, this is ≈4 weeks of history on a ≈$3.2M asset; the peg has not been tested by a real stress event or a large exit.

## Exit liquidity

**This is the thinnest part of the picture, and it got slightly thinner as POL unwound.** USG's exit liquidity is essentially the two PegKeeper Curve pools, which now hold about **$1.28M** of USDC + frxUSD counter-side stables (down from ≈$2.6M a month ago). There is no meaningful CEX listing and no aggregator depth for USG itself. The peg has held near par so far, but **exit capacity is small and untested in stress** — a sized holder trying to leave quickly would move the price. Treat USG as a position you can only exit in small increments.

## Governance & contracts

**Strong audit posture, weak live governance.** USG has four independent audits — Egis, a Sherlock contest (#1073, which surfaced 2 High / 14 Medium valid findings), and two Pashov reviews plus Zerocool — which is above the median for a protocol this young. That's the main positive on the issuer axis.

The offsets are real:
- **A 3-of-4 multisig with no timelock** controls mint authority, market creation, and the fee treasury (`0x461B…27Ca`; re-verified on-chain June 10, 2026 — threshold 3, 4 owners, unchanged). All four signers are plain EOAs, and one is the protocol deployer, which reduces signer independence. Changes can be made with no delay.
- **The documented 40M mint cap is not enforced at the contract level** — it's a stated policy, not a coded constraint.
- **No live DAO yet** — vsTAN governance is not operational.
- **A latent oracle weakness:** the Sherlock findings clustered on Pendle PT collateral oracle mispricing. No Pendle PT market is live today (all 12 collaterals are Curve LPs), so this risk is dormant — but it's a documented weak spot to watch if PT collateral is ever added.

## Who it's for · Who should avoid

**Reasonable for:**
- DeFi users who want exposure to a crvUSD-style CDP stablecoin and are comfortable with a tiny, early-stage protocol — sized accordingly (small position, exit-in-increments mindset).
- Borrowers who want to mint a stablecoin against productive stablecoin-LP collateral and understand the 84–90% borrow limits and 20% liquidation fee.

**Avoid / size down if:**
- You need deep, reliable exit liquidity — the ≈$1.28M keeper-pool depth is the binding constraint, and there's no CEX backstop.
- You weight governance heavily — a 3-of-4 no-timelock multisig of EOAs with no live DAO and a non-enforced mint cap is a meaningful trust assumption.
- You want a battle-tested stablecoin — USG is ≈4 weeks old with ≈$3.2M supply and no stress history.

## What to watch

- **Supply growth and peg.** A move above ≈$5M supply with continued near-par peg over more weeks would be the clearest re-rate signal. Watch the peg on the [live dashboard](https://tidresearch.com/dashboards/?asset=usg) — a sustained drop below ≈$0.995 on this thin liquidity would matter.
- **Governance upgrade.** Migration to a timelock-gated, higher-quorum multisig (e.g. 4-of-6 + 48h) or a live vsTAN DAO would directly lift the issuer score.
- **Exotic collateral tail.** The Resupply reUSD legs especially — any depeg there could test the thin liquidation buffers (liquidation thresholds sit only ~1.2–1.5% above the borrow limit). Bad debt is $0 today; watch it.
- **Oracle integrity.** The dashboard runs an independent NAV cross-check against each market's oracle. Watch for any market flagged as over-valuing its collateral, and for any addition of Pendle PT collateral (the latent oracle weakness).
- **Keeper-pool depth.** Now ≈$1.28M of counter-side stables. If it shrinks further, exit liquidity degrades.

---

*This report describes Tangent USG as of June 10, 2026, based on public Tangent documentation, the project's audits, and on-chain reads (admin Safe and backing composition re-verified June 10, 2026). Tangent Finance has not engaged on this report. USG is an early-stage, small protocol; figures move quickly — the [live dashboard](https://tidresearch.com/dashboards/?asset=usg) carries current values. Corrections welcome at info@tidresearch.com.*
