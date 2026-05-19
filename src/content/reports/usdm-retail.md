---
asset: "USDm"
slug: "usdm"
aliases: ["USDm", "Mento USD"]
chains: ["celo", "monad", "eth"]
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usdm"
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

**Live data:** [USDm Backing Dashboard](https://tidresearch.com/dashboards/?asset=usdm) — hourly Monad on-chain reserve composition, ReserveV2 coverage ratio, API↔RPC drift, and Celo vs Monad side-by-side. Independent integrity check on top of Mento's own analytics API.

| Yield | Exit method | Primary redemption | Age (V3) | Chains |
|---|---|---|---|---|
| None on USDm itself; Merkl rewards via LP | Mento FPMM pool swap only | None for users — keeper-only via Reserve | ~3 months on Monad, ~1 year on Celo | Celo, Ethereum, Monad |

## Summary

USDm is the USD-pegged stablecoin issued by [Mento Protocol](https://www.mento.org), the FX-on-chain platform that originated on Celo in 2020 (as the stability layer behind cUSD/cEUR) and rewrote its core into the V3 architecture through 2024-2026. In V3, USDm is **Reserve-backed 1:1 by a basket of other fiat stablecoins** — USDC, USDT, and USDS per the canonical design, with the actual realization on each chain depending on what's available locally.

USDm is one of only two Reserve-backed stables in Mento V3 (alongside EURm); every other Mento FX synthetic (GBPm, JPYm, CHFm) is documented as a Liquity-V2-style CDP using **USDm as collateral**. **The CDP infrastructure is currently live on Celo only; on Monad the FX synthetics are pre-minted bootstrap pool liquidity with no operational CDP system yet.** So USDm sits at the base of the V3 synthetic stack as designed — a USDm depeg would cascade through the operational FX system on Celo. On Monad, that cascade is currently architectural rather than operational (per the on-chain audit referenced in the dashboard).

Total USDm circulation is small (~$1.7M on Monad, ~$0.8M on Celo) and the asset has no CEX listings and no external DEX depth — it lives almost entirely inside Mento's own oracle-priced FPMM pools.

**The 5.5/10 score reflects a sound design with several structural weaknesses:** the underlying Reserve is overcollateralized 1.92× on Celo and runs at ~85% gross / ~270% ex-POL on Monad (the ~15% gross "gap" is Mento-owned seed liquidity in its own FPMM pools, not user-claimable supply — see backing section and live dashboard), users cannot directly redeem USDm to the Reserve, peg defense depends entirely on Chainlink oracles plus keeper-driven rebalancing, and the Monad deployment is governed by a 4-of-7 multisig with **no timelock** while the Celo deployment has a full 2-day Timelock plus Watchdog Veto.

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

Monad Reserve total: **$1,409,818**. Against $1,730,180 USDm gross supply that's 81.5% gross coverage — but ~70% of that supply (~$1.21M) is Protocol-Owned Liquidity in Mento-controlled FPMM pools. Against the ~$517K of USDm actually in user hands, the Reserve over-collateralizes ~272% (ex-POL).

The 18.5% gross "gap" is **Protocol-Owned Liquidity, not operational under-collateralization**. Mento pre-minted ~$1.21M of USDm to seed its own FPMM pools — both sides of the OLS-managed FX-synthetic pools and one side of the RLS-managed stablecoin pools. That USDm satisfies the strict "outstanding supply" definition the gross-coverage formula uses, but it does not represent a user redemption claim — Mento can burn or rebalance it at will.

On-chain audit confirms three structural facts on Monad as of 2026-05-18:

- **The V3 CDP system is not yet deployed.** The Liquity V2 / Bold CDP contracts (CollateralRegistry, StabilityPool, BorrowerOperations) referenced in Mento's source code are not on Monad. The `OpenLiquidityStrategy` that manages the FX-synthetic pools is a plain rebalancer, not a CDP strategy.
- **The FX synthetics (GBPm, EURm, JPYm, CHFm) are pre-minted seed liquidity, not CDP-collateralized.** 98–99.97% of each FX synthetic's supply sits inside its own FPMM pool, paired with seeded USDm. There is effectively zero retail circulation of these tokens on Monad, and no live minter authority on them.
- **EURm on Monad is not Reserve-backed despite the canonical Mento V3 model.** The Monad ReserveV2 holds zero EUROC.

What this means for USDm holders: in a worst-case mass-exit, the Reserve-backed pools' USDC inventory ($317K direct + $1.28M from the Reserve via keeper rebalancing) absorbs up to ~$1.4M of USDm-to-USDC flow — against ~$517K of user-circulating USDm, the buffer is comfortable (~2.7×). Against gross supply, it covers most but not all — ~$330K of POL-turned-user-USDm would be unable to exit cleanly if a run somehow surfaced all POL into user hands.

**Caveat on the ex-POL framing:** POL converts to user-held supply whenever someone swaps USDC→USDm in the FPMM (pool USDC drains, pool-held USDm exits to user). So the ex-POL buffer is the instant-snapshot read; it erodes toward the gross number as adoption grows. Monitor this drift over time.

**Wormhole NTT cross-chain backing reconciliation also remains announced-not-operational**, so the Monad Reserve cannot fall back on Celo's overcollateralization in any on-chain-enforceable way. Mento is in deployment ramp on Monad; the gross-vs-ex-POL gap is a function of the protocol seeding its own pools ahead of organic user demand.

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

> **In the Mento V3 design, every FX synthetic (GBPm, JPYm, CHFm) is a CDP collateralized by USDm. The CDP infrastructure is currently live on Celo; on Monad these synthetics are pre-minted bootstrap pool liquidity, with the CDP system not yet deployed.**

This creates bidirectional risk coupling:

- **Demand sink (Celo-operational):** each new GBPm/JPYm/CHFm CDP on Celo needs USDm collateral, which adds structural demand for USDm. On Monad, this dynamic is currently inactive (no operational CDPs).
- **Cascade risk (Celo-operational):** if USDm depegs even temporarily, every operational V3 FX-synthetic CDP on Celo becomes simultaneously under-collateralized; liquidations would force-sell USDm back into the FPMM, deepening the depeg. The cascade is structural on chains where CDPs are live.
- **Single point of failure (by design):** USDm is the entire collateral foundation for V3 FX-on-chain as designed. A USDC depeg propagates Reserve → USDm → all FX synthetics on any chain where the CDP system is operational (currently Celo only).

This recursive structure is **inherent to the V3 design**. Today it is operationally instantiated on Celo (where the CDP system is live); on Monad it remains architectural — the FX synthetics exist as tokens but the CDP-based minting/collateralization mechanism that creates the recursion isn't deployed yet.

## What's our concern, plainly?

Six structural weaknesses combine to put USDm meaningfully below USDC/AUSD/USDT in risk-adjusted terms:

1. **No atomic user-direct redemption.** Exit depends on FPMM pool liquidity and keeper-driven rebalancing — there is no PSM, no instant-swap, no institutional fiat redemption.
2. **81.5% gross / ~272% ex-POL Reserve coverage on Monad.** The 18.5% gross "gap" is Protocol-Owned Liquidity (Mento-owned seed in its own FPMM pools), not user-claimable supply. Against ~$517K of user-circulating USDm, the Reserve over-collateralizes ~2.7×. The gross number is the stress-case read; ex-POL coverage erodes toward gross as adoption grows. Wormhole NTT cross-chain backing reconciliation is also announced-not-operational, so the Monad Reserve cannot fall back on Celo.
3. **Recursive collateral role** for the entire V3 FX synthetic stack means any USDm stress cascades through GBPm/JPYm/CHFm.
4. **Single-oracle dependence** (Chainlink only) for peg defense — no dual-oracle or fallback feed.
5. **No CEX listings, no external DEX depth** — USDm is a Mento-native stablecoin with no off-Mento liquidity.
6. **Monad admin = bare 4-of-7 Safe, no timelock** — meaningfully weaker than the Celo deployment's 2-day Timelock + Watchdog stack.

## Scoring rationale

| Category | Score | Notes |
|---|---|---|
| Peg Mechanism | 7.0 | Reserve-backed fiat-stable basket is sound; oracle-priced FPMM holds peg at oracle rate; but no atomic user redemption, single-source Chainlink dependence. |
| Backing | 5.0 (Monad: 4.0, Celo: 7.0) | Aggregate Celo Reserve is overcollateralized (1.92× for USDm) and entirely fiat-stable. **Aggregate USDm coverage: ~1.08× gross / ~1.35× ex-POL** (~$3.36M / ~20% of $16.73M supply is POL). **Monad: 81.5% gross / ~272% ex-POL** — Reserve $1.41M against $1.73M gross supply or ~$517K user-circulating (the other ~$1.21M is Mento-owned seed liquidity in OLS + RLS pools). On-chain audit confirms the V3 CDP infrastructure is not yet deployed on Monad; Wormhole NTT also not yet operational. The 5.0 score is binding on structural factors — no atomic redemption, single-oracle peg, seed-stage deployment, AUSD adds 9% Agora issuer credit (not Circle-tier), USDT0 adds 0.4% LayerZero bridge dependency — not on coverage shortfall (which is fine ex-POL). |
| Liquidity | 5.0 (Monad: 4.5, Celo: 5.5) | FPMM-only exit, no CEX, no external DEX. Monad pools thinnest. |
| Issuer | 6.5 | Doxxed Mento Labs + cLabs lineage + 6-year clean V1/V2 track record. Strong audit roster (ChainSecurity, Macro, Sherlock, Hats). Docked for Monad bare 4-of-7 Safe admin model. |
| **Overall** | **5.5** (Monad: 5.0, Celo: 6.5) | **Above-average risk for a fiat-backed stablecoin** — meaningfully below USDC (9.0), AUSD (7.5), USDT (7.5). The fundamental design is sound (Reserve-backed by Tier-1 fiat-stables, conservative V1/V2 track record, strong audit roster) but practical exposure on Monad carries: the V3 system is in seed/bootstrap stage with the CDP infrastructure and Wormhole NTT both announced-not-operational; no user-direct redemption; oracle-driven peg with single-source dependence; and a bare 4-of-7 Safe admin without timelock. Coverage itself is fine ex-POL (~272% on Monad, ~1.35× aggregate) but tight on gross (81.5% Monad, 1.08× aggregate) because the protocol pre-minted seed liquidity ahead of organic demand. Usable for small positions during the bootstrap phase but not a USDC-substitute. |

## Bottom line

USDm is a reasonably-engineered stablecoin from a credible team with a strong audit history and conservative fiat-stable-only backing on its Reserve. But it carries a stack of structural weaknesses that put it well below USDC, AUSD, and USDT: no user-direct redemption, oracle-only peg defense with no fallback, recursive role as V3 collateral (operationally on Celo, architecturally on Monad), no external liquidity, and on Monad specifically a bare multisig admin without a timelock. The Monad on-chain gross coverage of 81.5% looks alarming at face value but is ~70% Protocol-Owned Liquidity (Mento-owned seed in its own FPMM pools, not user-claimable); against user-circulating USDm the Reserve over-collateralizes ~2.7×. Wormhole NTT cross-chain backing reconciliation is announced but not yet operational, so the Monad Reserve cannot fall back on Celo.

**Practical usage guidance**

- Acceptable for small positions, particularly LP exposure on the Mento USDC/USDm pool when Merkl yields justify the structural risk.
- Not a USDC substitute. Don't model USDm as fungible with USDC in portfolio composition.
- Avoid as collateral for leveraged positions on third-party protocols until (a) the V3 CDP infrastructure (CollateralRegistry/StabilityPool/BorrowerOperations) is deployed on Monad and the FX synthetics start trading on user-deposited collateral instead of pre-minted seed liquidity, (b) Wormhole NTT activates for cross-chain backing reconciliation, and (c) the Monad admin migrates to a timelock.
- Monitor: Reserve composition top-ups (closing the 18.5% gross gap), **POL → user-circulating drift** (ex-POL coverage erodes toward gross as users buy USDm in the FPMM — flag any month where ex-POL coverage falls below 1.5×), CDP infrastructure deployment, retail circulation of GBPm/EURm/JPYm/CHFm (currently ~0), Wormhole NTT activation, MGP-15+ governance migration, any depeg-band events on the FPMM, Merkl renewal cadence.

---

*Updated 2026-05-18: corrections applied per a full on-chain authority and supply audit. The V3 CDP system and Wormhole NTT cross-chain backing are both announced-not-operational on Monad as of report date. Scores adjusted accordingly (overall 6.0 → 5.5; Monad 5.5 → 5.0).*

*Updated 2026-05-19: POL-aware coverage. The 18.5% Monad gross "gap" is Protocol-Owned Liquidity in Mento-controlled FPMM pools, not operational under-collateralization. Ex-POL coverage is ~272% on Monad / ~1.35× aggregate. Scores unchanged — the 5.0 backing score is binding on structural factors (no atomic redemption, single-oracle, seed-stage, third-party credit pass-through), not on coverage shortfall.*

*This report is based on public Mento documentation, on-chain reads via Monad mainnet RPC and MonadScan, and `reserve.mento.org` as of 2026-05-18. Live values for Monad Reserve composition, ReserveV2 coverage, API↔RPC drift, and Celo vs Monad side-by-side are on the [live dashboard](https://tidresearch.com/dashboards/?asset=usdm). Mento Labs operates governance and certain off-chain operational components; corrections and clarifications are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*
