---
asset: "USDm"
slug: "usdm"
aliases: ["USDm", "Mento USD"]
chains: ["celo", "monad", "eth"]
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=usdm"
category: "stablecoin"
peg_mechanism: "Reserve-backed (fiat-stable basket)"
assessment_type: "light"
audience: "retail"
date: "2026-05-18"
last_verified: "2026-05-18"
featured: false
issuer: "Mento Labs (Germany)"
audited_reserves: true
market_cap_approx: 1730000
peg_mechanism_score: 7.0
backing_score: 5.0
liquidity_score: 5.0
issuer_score: 6.5
overall_score: 5.5
chain_overrides:
  monad:
    backing_score: 4.0
    liquidity_score: 4.5
    overall_score: 5.0
  celo:
    backing_score: 7.0
    liquidity_score: 5.5
    overall_score: 6.5
---

# USDm — Retail Risk Report

**Moderate-elevated risk · 5.5/10** (5.0/10 on Monad, 6.5/10 on Celo)

**Live data:** [USDm Backing Dashboard](https://todayindefi.github.io/backing-monitor/?asset=usdm) — hourly Monad on-chain reserve composition, ReserveV2 coverage ratio, API↔RPC drift, and Celo vs Monad side-by-side. Independent integrity check on top of Mento's own analytics API.

| Yield | Exit method | Primary redemption | Age (V3) | Chains |
|---|---|---|---|---|
| None on USDm itself; Merkl rewards via LP | Mento FPMM pool swap only | None for users — keeper-only via Reserve | ~3 months on Monad, ~1 year on Celo | Celo, Ethereum, Monad |

## Summary

USDm is the USD-pegged stablecoin issued by [Mento Protocol](https://www.mento.org), the FX-on-chain platform that originated on Celo in 2020 (as the stability layer behind cUSD/cEUR) and rewrote its core into the V3 architecture through 2024-2026. In V3, USDm is **Reserve-backed 1:1 by a basket of other fiat stablecoins** — USDC, USDT, and USDS per the canonical design, with the actual realization on each chain depending on what's available locally.

USDm is one of only two Reserve-backed stables in Mento V3 (alongside EURm); every other Mento FX synthetic (GBPm, JPYm, CHFm) is a Liquity-V2-style CDP that uses **USDm itself as collateral**. So USDm sits at the base of the V3 synthetic stack — a USDm depeg cascades through the entire V3 FX system.

Total USDm circulation is small (~$1.7M on Monad, ~$0.8M on Celo) and the asset has no CEX listings and no external DEX depth — it lives almost entirely inside Mento's own oracle-priced FPMM pools.

**The 6.0/10 score reflects a sound design with several structural weaknesses:** the underlying Reserve is overcollateralized 1.92× on Celo and 81.5% on-chain on Monad (with the gap filled by a cross-chain Wormhole bridge claim), but users cannot directly redeem USDm to the Reserve, peg defense depends entirely on Chainlink oracles plus keeper-driven rebalancing, and the Monad deployment is governed by a 4-of-7 multisig with **no timelock** while the Celo deployment has a full 2-day Timelock plus Watchdog Veto.

## What you actually earn

**Nothing on USDm itself** — it's a pure $1-peg stablecoin with no yield accrual. The yield that retail users encounter comes from **LPing USDm against USDC** in Mento's FPMM pools, paid via Merkl reward campaigns (currently around 13% APR on the Monad USDC/USDm pool, though the campaign expiry and renewal cadence aren't published in advance and base swap fees are sub-1%).

For pure stablecoin exposure (not LP), USDm earns nothing. For LP exposure, the FPMM design means **you don't take traditional impermanent loss** (the pool quotes the oracle rate, not a curve), but you do absorb oracle-vs-market divergence whenever the Chainlink feed lags the real market.

## What backs USDm

Mento V3 splits its stablecoin program into two backing models:

- **Reserve-backed (1:1 fiat-stable):** USDm and EURm only. The Reserve holds USDC/USDT/USDS for USDm; EUROC for EURm.
- **CDP-backed (Liquity V2-style, collateralized by USDm):** GBPm, JPYm, CHFm and other FX synthetics.

This means USDm is **insulated from CELO/BTC/ETH volatility** — the volatile-asset bucket visible on [reserve.mento.org](https://reserve.mento.org) backs only the legacy Celo V1 stables (cUSD/cEUR/cReal), not V3 USDm.

The per-chain Reserve composition on **Monad** (verified on-chain 2026-05-18):

| Asset | Issuer | $ Value | % of Reserve | Risk tier |
|---|---|---|---|---|
| USDC (Circle native CCTP) | Circle | $1,275,900 | 90.5% | Tier 1 — top-tier issuer |
| AUSD (Agora Finance) | Agora Bermuda Ltd | $127,129 | 9.0% | Tier 2 — newer, VanEck-managed |
| USDT0 (LayerZero OFT) | LayerZero/Tether | $6,790 | 0.5% | Tier 3 — wrapped USDT, bridge dep |

Monad Reserve total: **$1,409,818 against $1,730,180 USDm in circulation = 81.5% on-chain coverage**.

The remaining 18.5% (~$320,000) is **genuine operational under-collateralization at the seed stage of the V3 deployment**. On-chain audit confirms three structural facts on Monad as of 2026-05-18:

- **The V3 CDP system is not yet deployed.** The Liquity V2 / Bold CDP contracts (CollateralRegistry, StabilityPool, BorrowerOperations) referenced in Mento's source code are not on Monad. The `OpenLiquidityStrategy` that manages the FX-synthetic pools is a plain rebalancer, not a CDP strategy.
- **The FX synthetics (GBPm, EURm, JPYm, CHFm) are pre-minted seed liquidity, not CDP-collateralized.** 98–99.97% of each FX synthetic's supply sits inside its own FPMM pool, paired with seeded USDm. There is effectively zero retail circulation of these tokens on Monad, and no live minter authority on them.
- **EURm on Monad is not Reserve-backed despite the canonical Mento V3 model.** The Monad ReserveV2 holds zero EUROC.

What this means for USDm holders: in a worst-case mass-exit scenario, the Reserve-backed pools' USDC inventory ($317K direct + $1.28M from the Reserve via keeper rebalancing) absorbs up to ~$1.4M of USDm-to-USDC flow. **~$330K of USDm would be unable to exit cleanly through the Reserve** — that's the 18.5% on-chain shortfall made concrete.

**Wormhole NTT cross-chain backing reconciliation also remains announced-not-operational**, so the Monad Reserve cannot fall back on Celo's overcollateralization in any on-chain-enforceable way. The most charitable framing of the gap is "Mento is in deployment ramp; Reserve top-ups will follow as user demand develops." The less charitable framing is "USDm-Monad has been minted faster than Reserve assets have been deposited." Either way, the operational under-collateralization is real.

## How the peg works

USDm uses **oracle-priced pricing, not arbitrage-defended pricing**. Mento V3's Functional Polynomial Market Maker (FPMM) quotes the Chainlink oracle rate ± fees directly. The pool maintains an invariant of "value per LP share at the oracle price" rather than a curve.

This has three practical implications:

1. **No traditional impermanent loss for LPs** — composition can drift but value-per-share is preserved at oracle price.
2. **LPs absorb oracle-vs-market divergence** — if Chainlink lags real market price, the pool transacts at the stale rate.
3. **No retail PSM-style redemption** — users cannot directly burn USDm at the Reserve to receive USDC. Exit is via the FPMM pool, with inventory replenished by allowlisted keeper-rebalancing strategies that mint/burn USDm against the Reserve when pools drift.

Compared to peer stables:
- **USDC:** atomic on-chain redemption to USD for whitelisted institutions; billions of secondary depth for retail
- **AUSD:** zero-fee atomic AUSD↔USDC/USDT instant swap for everyone via Agora's Stable Swap
- **DAI / crvUSD:** atomic PSM for anyone
- **USDm:** no direct redemption — only pool swap, dependent on FPMM liquidity + keeper-driven rebalancing

This is a meaningful structural weakness versus every major fiat-backed stable.

## Peg history

- **USDm V3 has not depegged** since launch (~3 months on Monad, ~1 year on Celo).
- **Mento V1/V2 stablecoins (cUSD/cEUR/cReal)** ran for ~6 years on Celo with no exploits and no socialized losses. cUSD briefly traded outside its band during the May 2022 Terra/UST collapse but recovered. However V3 USDm uses a different mechanism (FPMM + Reserve-backed) than V1 cUSD (constant-product AMM + CELO Reserve), so V1 track record only partially generalizes.
- **The BreakerBox circuit-breaker system has triggered twice in production** on Celo (2023-05-07 USDC spike, 2023-08-17 CELO drop) — both halts contained losses successfully.

## Smart contract & audit posture

Mento V3's audit roster is **strong**:
- **ChainSecurity** — Mento Core V3 (FPMM + CDP), Feb 2026 (top-tier)
- **0xMacro** — multiple engagements on governance and locking
- **Sherlock** — three competitive audit contests (Feb 2024, Oct 2024, Apr 2025)
- **Hats Finance** — audit competition, Apr 2025

The novel FPMM design itself has had only one professional review (ChainSecurity) plus contest coverage, so it's roughly 3 months audit-fresh as a piece of running code. The governance and locking layer is more mature.

## Issuer

[Mento Labs](https://www.mento.org) is a German entity led by CEO **Markus Franke** (doxxed). The team spun out of cLabs (the core developer of Celo) in 2022 with direct lineage to the original cUSD developers, and raised **$10M Series A in October 2024** from Hashkey Capital, Verda Ventures, w3.fund, Flori Ventures, plus former Citigroup CEO Richard Parsons as an angel.

Mento Labs operates the Reserve contracts and the multisig that governs USDm on each chain. The on-chain admin model differs sharply across chains:

- **Celo:** veMENTO holders → Governor → 2-day Timelock → contracts, with a Watchdog Multisig retaining veto power. Mature.
- **Monad:** 4-of-7 Gnosis Safe `0x58099b74…ba458` directly owns every core contract (USDm token, Reserve, FPMM pools, oracle adapter, breaker box). **No timelock, no DAO check.** Per Mento governance proposal MGP-14, this was framed as a temporary state during deployment; as of report date, ~10 weeks post-launch, the migration to a timelock has not happened.

## Liquidity

USDm has **no CEX listings** and **no external DEX depth** that we've located. All trading happens inside Mento's own FPMM pools:

| Pool | Chain | Approximate TVL | Incentives |
|---|---|---|---|
| Mento USDC/USDm | Monad | ~$570K | Merkl ~13% APR (campaign expiring; renewal cadence not public) |
| Mento AUSD/USDm | Monad | Smaller, not measured | — |
| Mento USDC/USDm | Celo | Larger but <$5M | — |

Aggregate USDm circulation (~$2.5M across Monad and Celo) is small enough that institutional-scale positions cannot exit cleanly. The instant-swap and institutional-redemption mechanisms that backfill liquidity for AUSD or USDC do not exist for USDm.

## Recursive role — USDm as base collateral

This is the most important structural feature of USDm that does not appear in any other major stablecoin:

> **Every Mento V3 FX synthetic (GBPm, JPYm, CHFm) is a CDP collateralized by USDm.**

This creates bidirectional risk coupling:

- **Demand sink:** each new GBPm/JPYm/CHFm CDP needs USDm collateral, which adds structural demand for USDm
- **Cascade risk:** if USDm depegs even temporarily, every V3 FX-synthetic CDP becomes simultaneously under-collateralized; liquidations force-sell USDm back into the FPMM, deepening the depeg
- **Single point of failure:** USDm is the entire collateral foundation for V3 FX-on-chain. A USDC depeg propagates Reserve → USDm → all FX synthetics in a single chain

This recursive structure is **inherent to the V3 design** and not unique to any specific chain.

## What's our concern, plainly?

Six structural weaknesses combine to put USDm meaningfully below USDC/AUSD/USDT in risk-adjusted terms:

1. **No atomic user-direct redemption.** Exit depends on FPMM pool liquidity and keeper-driven rebalancing — there is no PSM, no instant-swap, no institutional fiat redemption.
2. **81.5% on-chain Reserve coverage on Monad — genuine operational under-collateralization at seed stage.** The V3 CDP system is not yet deployed on Monad (FX synthetics are pre-minted pool seed liquidity, not CDP-collateralized), so the 18.5% gap is real, not offset. Wormhole NTT cross-chain backing reconciliation is also announced-not-operational. Worst-case mass-exit leaves ~$330K of USDm unable to exit cleanly.
3. **Recursive collateral role** for the entire V3 FX synthetic stack means any USDm stress cascades through GBPm/JPYm/CHFm.
4. **Single-oracle dependence** (Chainlink only) for peg defense — no dual-oracle or fallback feed.
5. **No CEX listings, no external DEX depth** — USDm is a Mento-native stablecoin with no off-Mento liquidity.
6. **Monad admin = bare 4-of-7 Safe, no timelock** — meaningfully weaker than the Celo deployment's 2-day Timelock + Watchdog stack.

## Scoring rationale

| Category | Score | Notes |
|---|---|---|
| Peg Mechanism | 7.0 | Reserve-backed fiat-stable basket is sound; oracle-priced FPMM holds peg at oracle rate; but no atomic user redemption, single-source Chainlink dependence. |
| Backing | 5.0 (Monad: 4.0, Celo: 7.0) | Aggregate Celo Reserve is overcollateralized (1.92× for USDm) and entirely fiat-stable. On Monad specifically, 81.5% on-chain coverage ($1.28M USDC + $127K AUSD + $6.8K USDT0 vs $1.73M supply). On-chain audit confirms the V3 CDP infrastructure is **not yet deployed on Monad** — FX synthetics (GBPm/EURm/JPYm/CHFm) are pre-minted as inert pool seed liquidity, not CDP-collateralized; and Wormhole NTT is also not yet operational. The 18.5% gap is therefore **genuine operational under-collateralization at seed stage** — ~$330K of USDm cannot exit cleanly through the Reserve in worst-case. AUSD adds 9% Agora issuer credit (not Circle-tier); USDT0 adds 0.4% LayerZero bridge dependency. |
| Liquidity | 5.0 (Monad: 4.5, Celo: 5.5) | FPMM-only exit, no CEX, no external DEX. Monad pools thinnest. |
| Issuer | 6.5 | Doxxed Mento Labs + cLabs lineage + 6-year clean V1/V2 track record. Strong audit roster (ChainSecurity, Macro, Sherlock, Hats). Docked for Monad bare 4-of-7 Safe admin model. |
| **Overall** | **5.5** (Monad: 5.0, Celo: 6.5) | **Above-average risk for a fiat-backed stablecoin** — meaningfully below USDC (9.0), AUSD (7.5), USDT (7.5). The fundamental design is sound (Reserve-backed by Tier-1 fiat-stables, conservative V1/V2 track record, strong audit roster) but practical exposure on Monad carries: the V3 system is in seed/bootstrap stage with the CDP infrastructure and Wormhole NTT both announced-not-operational; an 18.5% on-chain Reserve gap that is genuine operational under-collateralization (not offsetting CDP collateral); no user-direct redemption; oracle-driven peg with single-source dependence; and a bare 4-of-7 Safe admin without timelock. Usable for small positions during the bootstrap phase but not a USDC-substitute. |

## Bottom line

USDm is a reasonably-engineered stablecoin from a credible team with a strong audit history and conservative fiat-stable-only backing on its Reserve. But it carries a stack of structural weaknesses that put it well below USDC, AUSD, and USDT: no user-direct redemption, oracle-only peg defense with no fallback, recursive role as V3 collateral, no external liquidity, and on Monad specifically a bare multisig admin without a timelock plus an 18.5% backing gap that depends on a Wormhole bridge claim.

**Practical usage guidance**

- Acceptable for small positions, particularly LP exposure on the Mento USDC/USDm pool when Merkl yields justify the structural risk.
- Not a USDC substitute. Don't model USDm as fungible with USDC in portfolio composition.
- Avoid as collateral for leveraged positions on third-party protocols until (a) the V3 CDP infrastructure (CollateralRegistry/StabilityPool/BorrowerOperations) is deployed on Monad and the FX synthetics start trading on user-deposited collateral instead of pre-minted seed liquidity, (b) Wormhole NTT activates for cross-chain backing reconciliation, and (c) the Monad admin migrates to a timelock.
- Monitor: Reserve composition top-ups (will the 18.5% gap close as Mento adds Reserve assets?), CDP infrastructure deployment, retail circulation of GBPm/EURm/JPYm/CHFm (currently ~0), Wormhole NTT activation, MGP-15+ governance migration, any depeg-band events on the FPMM, Merkl renewal cadence.

---

*Updated 2026-05-18: corrections applied per a full on-chain authority and supply audit. The V3 CDP system and Wormhole NTT cross-chain backing are both announced-not-operational on Monad as of report date; the 18.5% Reserve coverage gap is genuine operational under-collateralization at the seed/bootstrap stage of the V3 deployment, not offsetting CDP collateral or a cross-chain claim. Scores adjusted accordingly (overall 6.0 → 5.5; Monad 5.5 → 5.0).*

*This report is based on public Mento documentation, on-chain reads via Monad mainnet RPC and MonadScan, and `reserve.mento.org` as of 2026-05-18. Live values for Monad Reserve composition, ReserveV2 coverage, API↔RPC drift, and Celo vs Monad side-by-side are on the [live dashboard](https://todayindefi.github.io/backing-monitor/?asset=usdm). Mento Labs operates governance and certain off-chain operational components; corrections and clarifications are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*
