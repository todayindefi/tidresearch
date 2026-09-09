---
asset: "USDm"
slug: "usdm"
aliases: ["USDm", "Mento USD"]
# ⚠️ `eth` REMOVED 2026-09-09. USDm IS NOT DEPLOYED ON ETHEREUM, and this key had
# carried it as though it were. `chains:` records where the ASSET IS DEPLOYED, not
# where its collateral or its authority sits — the Mento Reserve holds an Ethereum
# leg and the admin walk crosses Ethereum, and BOTH belong in the body rather than
# here. A listed-but-absent chain is the mirror of usdg's missing Mantle: that one
# read as zero, this one reads as a deployment that does not exist.
chains: ["celo", "monad"]
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usdm"
category: "stablecoin"
peg_mechanism: "Reserve-backed (fiat-stable basket)"
assessment_type: "light"
date: "2026-05-29"
last_verified: "2026-07-23"
last_revised: "2026-09-07"
featured: false
production: true
issuer: "Mento Labs (Germany)"
market_cap_approx: 16575377
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Migrated at this refresh, per the refresh-driven
# policy. ⚠️ structural_score CANNOT RENDER without the frame — the historical
# stablecoin rubric has no Contract & Admin row at all, so adding the field
# alone would have been schema-legal and invisible.
#   underlying_score 4.0 is NEW and renders as DEPENDENCIES. ⚠️ It prices
#     PASSTHROUGH AND CONCENTRATION, deliberately NOT collateral quality — the
#     stable-only ratio already excludes the volatile bucket, so scoring CELO on
#     both axes would double-count. ⚠️ content.config.ts used to name usdm as
#     the canonical OMIT case for this field; that entry was the off-frame
#     meaning and has been corrected there.
#   structural_score 4.0 is NEW. ⚠️ THE BINDING FACT IS THREE SIGNATURES AND NO
#     DELAY ON THE RESERVE-SPEND PATH OF EVERY CHAIN. That path MOVES ASSETS —
#     it is not a liveness lever, which is why three keys here reads worse than
#     three keys over a redemption queue. The 2-day timelock covers 2 of 9
#     layers, both Celo.
# ⚠️ CELO OVERRIDE overall 6.0 -> 5.5 AND liquidity 5.5 -> 6.0. The premium's
# stated reason was "2-day Timelock + Watchdog Veto"; three of five Celo layers
# are undelayed, including the spend path. Backing HELD at 6.0 — that prices the
# reserve, which this walk does not touch. Monad HELD at 4.5.
# ⚠️ `last_verified` HOLDS at 2026-07-23 — this pass re-measured the reserve
# basis, the admin topology across 9 layers, and the Celo liquidity ladder; it
# did NOT re-read the peg mechanism, the CDP/synthetic architecture, the audit
# posture or the issuer material. The body states that split at the top.
axis_frame: six
peg_mechanism_score: 7.0
backing_score: 4.5
liquidity_score: 5.0
underlying_score: 4.0
structural_score: 4.0
issuer_score: 6.5
overall_score: 5.0
chain_overrides:
  monad:
    backing_score: 3.0
    liquidity_score: 4.5
    overall_score: 4.5
  celo:
    backing_score: 6.0
    liquidity_score: 6.0
    overall_score: 5.5
---

# USDm — Risk Report

**Moderate-elevated risk · 5.0/10** (4.5/10 on Monad, 5.5/10 on Celo)

> ⚠️ **What is current and what is not, because this page carries two dates.** **Re-measured 2026-09-07:** the reserve, swept on-chain rather than taken from the issuer's API, and every coverage figure computed on that basis; the **admin and authority topology**, nine layers hand-walked across Celo, Monad and Ethereum; and the Celo liquidity ladder. **Still dating from 2026-07-23 and not re-read:** the peg mechanism, the CDP and FX-synthetic architecture, the audit posture, and the issuer material. **So `verified through` is the older date deliberately.**

**Live data:** [USDm Backing Dashboard](https://tidresearch.com/dashboards/?asset=usdm) — hourly Monad on-chain reserve composition, Monad ReserveV2 coverage, aggregate stable-only coverage, API↔RPC drift, and Celo vs Monad side-by-side. The dashboard now shows on-chain-verified reserve composition and corrected gross/stable-only coverage as primary, cross-checked against Mento's analytics API.

| Yield | Exit method | Primary redemption | Age (V3) | Chains |
|---|---|---|---|---|
| None on USDm itself; Merkl rewards via LP | Mento FPMM pool swap only | None for users — keeper-only via Reserve | ≈3 months on Monad, ≈1 year on Celo | Celo, Ethereum, Monad |

## Summary

USDm is the USD-pegged stablecoin issued by [Mento Protocol](https://www.mento.org), the FX-on-chain platform that originated on Celo in 2020 (as the stability layer behind cUSD/cEUR) and rewrote its core into the V3 architecture through 2024-2026. In V3, USDm is **Reserve-backed 1:1 by a basket of other fiat stablecoins** — USDC, USDT, and USDS per the canonical design, with the actual realization on each chain depending on what's available locally.

USDm is one of only two Reserve-backed stables in Mento V3 (alongside EURm); every other Mento FX synthetic (GBPm, JPYm, CHFm) is documented as a Liquity-V2-style CDP using **USDm as collateral**. **The CDP infrastructure is currently live on Celo only; on Monad the FX synthetics are pre-minted bootstrap pool liquidity with no operational CDP system yet.** So USDm sits at the base of the V3 synthetic stack as designed — a USDm depeg would cascade through the operational FX system on Celo. On Monad, that cascade is currently architectural rather than operational (per the on-chain audit referenced in the dashboard).

Total USDm circulation is now roughly mid-$15M aggregate — about $2M on Monad plus the larger Celo balance (the Celo balance is the rebranded cUSD supply; Mento's Nov 2025 governance proposal changed the cUSD contract's `symbol()` getter to "USDm" without touching the address, supply, or authority chain, so the historical cUSD circulation now sits under the USDm ticker). The asset has no CEX listings and no external DEX depth — it lives almost entirely inside Mento's own oracle-priced FPMM pools.

**The 5.0/10 score reflects a sound design with a thin backing cushion.**

⚠️ **Retraction, 2026-08-28: this report cut Backing to 4.0 on 2026-08-27 and the cut was wrong. It is reversed, and the finding underneath it is withdrawn.**

The report stated that **$1,200,803 of stable collateral left the Ethereum leg and had not returned.** ⚠️ **It never left.** It was converted into **EUROP**, a euro stablecoin — 1,000,000 units at $1.1647, held in the Reserve Safe in cold custody — and **the reserve reader did not recognise the ticker.** Its bucket map knew EURC, AXLEUROC and EUROC; EUROP fell through to `other`, and `other` was not counted as backing.

**Measured against 08-24: the Ethereum leg is down $1,190,902, EUROP sits outside that leg at $1,164,727, leaving a residual of $26,175.** The money moved **between assets, not out of the reserve.**

⚠️ **Measured 2026-09-07, stable-only coverage is 0.9120 — and that is a different finding from the one retracted above, arriving by a different route.** The August cut was wrong because a euro stablecoin fell through a classifier and was excluded from backing; **that remains wrong and the EUROP holding is real.** This figure comes from the opposite end: **the reserve total was being read from Mento's own API, which overstated an on-chain balance sweep by $1,377,289 on the Ethereum leg — about 11.8%** — and by a further 8% on Monad. Swept on-chain, the reserve is **$18,618,906, not $20,094,988**, and coverage on the same stable-only basis moves **0.9955 → 0.9120**.

⚠️ **State the denominator, because two very different numbers live on this asset.** The rated 0.9120 is **stable-only reserve against all Mento stablecoin debt** — $13.81M over $15.14M. Against total Mento stablecoin *supply* of about $19.6M the same reserve is **70.4%**, and gross reserve against USDm's own supply is **111%**. **Three ratios, three denominators, and the field names do not say which is which.**

⚠️ **`backing_score` is HELD at 4.5, and the reason matters more than the number: 0.912 is essentially the 0.909 that drove the July cut to 4.5 in the first place.** The correction **restores the basis the score was set on** rather than changing the score. But **"just below par and recovering" and "at the level that triggered a downgrade" are different sentences**, and this page had been telling readers the first one.

**On the August retraction itself:** EUROP is worth **7.55pp of coverage** and the restated daily closes read **0.9877 (08-25)** and **0.9846 (08-26)** — **both above the 0.98 line the cut was conditioned on.** Corrected stable-only coverage is **99.27%, not 91.73%**, and any statement on this page that it sits in the low-0.90s was true as measured and false as reality.

⚠️ **The mechanism is worth keeping, because the reasoning that produced this error was sound in general: `other` in that feed named the classifier's ignorance, not the asset's quality.** Two independent readers concluded an unclassified bucket should not count as backing. **That is a good prior and it was wrong here** — and a reader who acted on the cut deserves to see both halves withdrawn rather than quietly amended.

**What this does not change, so the correction does not overshoot:** CELO reflexivity, the absence of a liquidation mechanism, no user-direct redemption, Monad's roughly 61.6% local coverage and its Tier-1 USDC share near 19.6%. **Backing returns to 4.5 — the pre-trigger value — not higher.** The condition for restoring it to 5.0 remains unmet.

USDm-on-Monad now sits in the ≈40% gross / ≈65% ex-POL Reserve-coverage range, so the Monad Reserve no longer fully covers even user-held USDm. USDm-on-Celo draws against the **joint Mento Reserve** that backs every Mento stablecoin; aggregate stable-only coverage is **0.9120×** measured on-chain, while gross coverage remains above par because the Reserve includes a volatile CELO + stETH bucket that is roughly 27% of it. Users cannot directly redeem USDm to the Reserve, peg defense depends entirely on Chainlink oracles plus keeper-driven rebalancing, and the Monad deployment is governed by a 4-of-7 multisig with **no timelock** while ⚠️ **the Celo deployment's 2-day Timelock covers two of its five layers and not the reserve-spend path** — it has a Timelock plus Watchdog Veto.

## Score breakdown

| Category | Score | Notes |
|---|---|---|
| Stability | 7.0 | Reserve-backed fiat-stable basket is sound; oracle-priced FPMM holds peg at oracle rate; but no atomic user redemption, single-source Chainlink dependence. |
| Backing | 4.5 (Monad: 3.0, Celo: 6.0) | **Aggregate Mento Reserve covers all Mento stablecoins** (USDm + EURm + FX synthetics) at **1.1114× gross against USDm supply / 0.9120× stable-only** — measured on-chain 2026-09-07, after the reserve total was found to be taken from Mento's API, which overstated an on-chain sweep by about 11.8% on Ethereum. ⚠️ **Held at 4.5 rather than cut: 0.912 is essentially the 0.909 the July cut was set on, so the measurement restores that basis rather than moving past it.** Separately restated 2026-08-28 after a euro-stablecoin holding (EUROP) was found misclassified as unbacked. ⚠️ **The 0.91× this row briefly carried was a classifier artifact, not a measurement.** ⚠️ **Watch the denominator: the dashboard's headline `collateral_ratio` of 1.2237 divides the reserve by *all* Mento stablecoin debt ($15.43M), not by USDm supply ($16.58M).** Reserve-to-USDm-supply is **1.1388×** — the two differ by about 8.5pp and are not interchangeable. Figures below are against USDm supply unless stated, with the exact current value on the live dashboard. Stable-only coverage is the load-bearing fiat-comparable measure and has recently slipped below par; gross coverage remains above par because it includes a volatile CELO + stETH bucket now around one-fifth of the Reserve. **Monad:** coverage is now in the ≈40% gross / ≈65% ex-POL range, and retail-held USDm exceeds the Monad Reserve. Monad reserve composition also inverted to majority Tier-2 AUSD, with roughly one-fifth Circle USDC and one-fifth USDT0. On-chain audit confirms the V3 CDP infrastructure is not yet deployed on Monad; Wormhole NTT also not yet operational. |
| Liquidity & Exit | 5.0 (Monad: 4.5, Celo: 6.0) | FPMM-only exit, no CEX, no external DEX. Monad pools thinnest; USDC/USDm TVL is roughly $0.5M, incentivized, and currently lightly traded despite near-par quotes. |
| Dependencies | 4.0 | **New axis, and it prices passthrough and concentration rather than collateral quality** — the stable-only ratio already excludes the volatile bucket, so grading CELO here as well would count it twice. Three things this asset passes through to. ⚠️ **One shared reserve backs every Mento stablecoin, not USDm alone:** USDm is roughly 85% of about $19.6M of Mento stablecoin supply drawing on an $18.6M reserve, so **a cEUR problem is a USDm problem.** ⚠️ **About 27% of that reserve is the issuer's own token** (volatile bucket $5.02M, largely CELO) — reflexive collateral that falls in value exactly when it is needed. ⚠️ **And the chain legs are not fungible:** NTT is not operational, so Monad USDm cannot reach Celo. **"The reserve" is one pool in the accounting and three pools from a holder's position.** |
| Contract & Admin | 4.0 | **New axis, on a nine-layer hand-walk across Celo, Monad and Ethereum.** ⚠️ **The binding fact is three signatures and no delay on the reserve-spend path of every chain.** One Safe holds reserve-v2-spend on Celo and Monad and reserve-custody on Ethereum — 3-of-8 on Celo, 3-of-6 on Monad and Ethereum, no delay on any of them. **That path moves the assets.** It is not a liveness lever, which is why three keys here reads worse than three keys over a redemption queue. ⚠️ **And the multi-chain structure buys no authority independence: two Safes govern all three legs**, so the chain spread is not diversification at this layer. **The 2-day timelock covers 2 of the 9 layers** — reserve-config and governance, both Celo. |
| Issuer | 6.5 | Doxxed Mento Labs + cLabs lineage + 6-year clean V1/V2 track record. Strong audit roster (ChainSecurity, Macro, Sherlock, Hats). Docked for Monad bare 4-of-7 Safe admin model. |
| **Overall** | **5.0** (Monad: 4.5, Celo: 5.5) | **Above-average risk for a fiat-backed stablecoin** — meaningfully below USDC (9.0), AUSD (7.5), USDT (7.5). The fundamental design is sound and the on-chain peg remains at par, but backing has deteriorated: aggregate stable-only coverage is below par, Monad coverage no longer covers retail-held USDm, and Monad's reserve quality is now majority Tier-2 AUSD rather than Circle USDC. Those factors sit on top of the existing structural weaknesses: no user-direct redemption, oracle-driven peg with single-source dependence, seed/bootstrap-stage Monad deployment, Wormhole NTT announced-not-operational, and bare 4-of-7 Safe admin without timelock. Usable for small positions during the bootstrap phase but not a USDC-substitute. |

## 1 · Stability — 7.0

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

### Peg history

- **USDm V3 has not depegged** since launch (≈3 months on Monad, ≈1 year on Celo).
- **Mento V1/V2 stablecoins (cUSD/cEUR/cReal)** ran for ≈6 years on Celo with no exploits and no socialized losses. cUSD briefly traded outside its band during the May 2022 Terra/UST collapse but recovered. **USDm-on-Celo is the rebranded cUSD contract** (Mento changed the token's `symbol()` getter from "cUSD" to "USDm" in Nov 2025; the address, supply, authority chain, Reserve registration, and minter setup are unchanged, with the mechanism upgraded over time from V1's constant-product AMM through V2's stability layer to today's V3 FPMM). The 6-year Celo track record therefore generalizes directly to USDm-on-Celo. The fresh-deployment caveat applies only to **USDm-on-Monad** (≈$1.7M supply, deployed 2026-03-11 at a separate contract address).
- **The BreakerBox circuit-breaker system has triggered twice in production** on Celo (2023-05-07 USDC spike, 2023-08-17 CELO drop) — both halts contained losses successfully.

## 2 · Backing — 4.5

Mento V3 splits its stablecoin program into two backing models:

- **Reserve-backed (1:1 fiat-stable):** USDm and EURm only. The Reserve holds USDC/USDT/USDS for USDm; EUROC for EURm.
- **CDP-backed (Liquity V2-style, collateralized by USDm):** GBPm, JPYm, CHFm and other FX synthetics.

Backing splits cleanly **per chain**, and is not symmetric:

- **USDm-on-Monad** has chain-local USD-stable Reserve backing — USDC + AUSD + USDT0, no volatile exposure. Its current issue is not crypto collateral, but too little local Reserve versus retail-circulating USDm and a reserve mix now anchored by AUSD rather than USDC (see Monad table below).
- **USDm-on-Celo** draws against the **aggregate Mento Reserve** that backs every Mento stablecoin. That Reserve currently holds fiat-stable assets (USD + EUR stables) **plus a volatile CELO + stETH bucket** that is now roughly one-fifth of the Reserve. The fiat-stable portion alone has recently slipped just below full coverage of user-circulating Mento stablecoin debt; including the volatile collateral, gross coverage remains above par. Volatile-bucket value moves with crypto markets, so the **stable-only** read is the conservative one and is what the live dashboard surfaces.

⚠️ **And the Celo leg carries a chain override of 6.0 on Backing that this pass did not re-derive, which is worth stating rather than leaving implied.** Celo USDm draws on the **joint Mento Reserve — the same reserve that lost $1,128,385 on 2026-08-27.** **Whatever weakened the aggregate weakened the pool Celo depends on**, so the case for Celo's Backing sitting two full points above the headline is weaker today than when that override was set. **It is carried unchanged because re-scoring Celo was not the decision this pass, not because it survived scrutiny** — treat 6.0 as the least-supported number on this page and expect it to be re-derived.

A note on Celo-side contract continuity: USDm-on-Celo lives at the same address that previously issued cUSD; Mento's Nov 2025 governance proposal changed only the token's `symbol()` getter from "cUSD" to "USDm", leaving the supply, authority, and Reserve registration unchanged. For backing purposes, USDm-on-Celo and the historical cUSD supply are the same liability against the same Reserve.

The Reserve also enforces a per-asset **5%/day spending cap** (`dailySpendingRatio`), rate-limiting any single day's outflow to roughly $1M total across the collateral basket. This is a defense-in-depth against a coordinated mass-exit — it slows a run, it does not cure below-par stable-only coverage.

The per-chain Reserve composition on **Monad** has inverted. At the latest re-read it is majority Tier-2 Agora AUSD, with roughly one-fifth Circle USDC and one-fifth USDT0; exact values rotate and are live on the dashboard's Monad Reserve Composition panel.

| Asset | Issuer | $ Value | % of Reserve | Risk tier |
|---|---|---|---|---|
| USDC (Circle native CCTP) | Circle | Live on dashboard | ~one-fifth | Tier 1 — top-tier issuer |
| AUSD (Agora Finance) | Agora Bermuda Ltd | Live on dashboard | ≈60% / majority | Tier 2 — newer, VanEck-managed |
| USDT0 (LayerZero OFT) | LayerZero/Tether | Live on dashboard | ~one-fifth | Tier 3 — wrapped USDT, bridge dep |

The Monad Reserve's anchor asset is now Agora AUSD, not Circle USDC. That raises single-issuer concentration on Monad, because an AUSD impairment now directly hits the majority of local backing.

Monad Reserve coverage has fallen into the ≈40% gross / ≈65% ex-POL range. Protocol-Owned Liquidity is still meaningful, around one-third of Monad float, but it no longer explains the whole gap: retail-held USDm now exceeds the Monad Reserve. The chain-local Reserve therefore no longer fully covers even user-held USDm.

On-chain audit confirms three structural facts on Monad as of 2026-05-18:

- **The V3 CDP system is not yet deployed.** The Liquity V2 / Bold CDP contracts (CollateralRegistry, StabilityPool, BorrowerOperations) referenced in Mento's source code are not on Monad. The `OpenLiquidityStrategy` that manages the FX-synthetic pools is a plain rebalancer, not a CDP strategy.
- **The FX synthetics (GBPm, EURm, JPYm, CHFm) are pre-minted seed liquidity, not CDP-collateralized.** 98–99.97% of each FX synthetic's supply sits inside its own FPMM pool, paired with seeded USDm. There is effectively zero retail circulation of these tokens on Monad, and no live minter authority on them.
- **EURm on Monad is not Reserve-backed despite the canonical Mento V3 model.** The Monad ReserveV2 holds zero EUROC.

What this means for USDm holders: the on-chain FPMM currently quotes near par for tested sizes, but the structural Reserve cushion behind a full user exit is gone on Monad. A mass exit now depends on pool inventory, keeper rebalancing, and Mento operationally topping up local reserves; the Monad-local Reserve alone does not fully cover retail-circulating USDm.

**Caveat on the ex-POL framing:** POL converts to user-held supply whenever someone swaps USDC→USDm in the FPMM (pool USDC drains, pool-held USDm exits to user). So the ex-POL buffer is the instant-snapshot read; it erodes toward the gross number as adoption grows. Monitor this drift over time.

**Wormhole NTT cross-chain backing reconciliation also remains announced-not-operational**, so the Monad Reserve cannot fall back on Celo's overcollateralization in any on-chain-enforceable way. Mento is in deployment ramp on Monad; the gross-vs-ex-POL gap is a function of the protocol seeding its own pools ahead of organic user demand.

## 3 · Liquidity & Exit — 5.0

USDm has **no CEX listings** and **no external DEX depth** that we've located. All trading happens inside Mento's own FPMM pools:

| Pool | Chain | Approximate TVL | Incentives |
|---|---|---|---|
| Mento USDC/USDm | Monad | ≈$0.5M | Merkl incentives around the mid-teens APY at last read; 24h swap volume currently negligible |
| Mento AUSD/USDm | Monad | Smaller, not measured | — |
| Mento USDC/USDm | Celo | Larger but <$5M | — |

Aggregate USDm circulation is still small enough that institutional-scale positions cannot exit cleanly. The instant-swap and institutional-redemption mechanisms that backfill liquidity for AUSD or USDC do not exist for USDm. The Monad USDC/USDm pool remains deep at par on current quotes, but lightly traded and fully dependent on Mento's own FPMM plus keeper rebalancing.

## 4 · Dependencies — 4.0

### USDm as base collateral — the recursive role

This is the most important structural feature of USDm that does not appear in any other major stablecoin:

> **In the Mento V3 design, every FX synthetic (GBPm, JPYm, CHFm) is a CDP collateralized by USDm. The CDP infrastructure is currently live on Celo; on Monad these synthetics are pre-minted bootstrap pool liquidity, with the CDP system not yet deployed.**

This creates bidirectional risk coupling:

- **Demand sink (Celo-operational):** each new GBPm/JPYm/CHFm CDP on Celo needs USDm collateral, which adds structural demand for USDm. On Monad, this dynamic is currently inactive (no operational CDPs).
- **Cascade risk (Celo-operational):** if USDm depegs even temporarily, every operational V3 FX-synthetic CDP on Celo becomes simultaneously under-collateralized; liquidations would force-sell USDm back into the FPMM, deepening the depeg. The cascade is structural on chains where CDPs are live.
- **Single point of failure (by design):** USDm is the entire collateral foundation for V3 FX-on-chain as designed. A USDC depeg propagates Reserve → USDm → all FX synthetics on any chain where the CDP system is operational (currently Celo only).

This recursive structure is **inherent to the V3 design**. Today it is operationally instantiated on Celo (where the CDP system is live); on Monad it remains architectural — the FX synthetics exist as tokens but the CDP-based minting/collateralization mechanism that creates the recursion isn't deployed yet.

## 5 · Contract & Admin — 4.0

Mento V3's audit roster is **strong**:
- **ChainSecurity** — Mento Core V3 (FPMM + CDP), Feb 2026 (top-tier)
- **0xMacro** — multiple engagements on governance and locking
- **Sherlock** — three competitive audit contests (Feb 2024, Oct 2024, Apr 2025)
- **Hats Finance** — audit competition, Apr 2025

The novel FPMM design itself has had only one professional review (ChainSecurity) plus contest coverage, so it's roughly 3 months audit-fresh as a piece of running code. The governance and locking layer is more mature.

## 6 · Issuer — 6.5

[Mento Labs](https://www.mento.org) is a German entity led by CEO **Markus Franke** (doxxed). The team spun out of cLabs (the core developer of Celo) in 2022 with direct lineage to the original cUSD developers, and raised **$10M Series A in October 2024** from Hashkey Capital, Verda Ventures, w3.fund, Flori Ventures, plus former Citigroup CEO Richard Parsons as an angel.

Mento Labs operates the Reserve contracts and the multisig that governs USDm on each chain. The on-chain admin model differs sharply across chains:

- **Celo:** veMENTO holders → Governor → 2-day Timelock → contracts, with a Watchdog Multisig retaining veto power. Mature.
- **Monad:** 4-of-7 Gnosis Safe `0x58099b74…ba458` directly owns every core contract (USDm token, Reserve, FPMM pools, oracle adapter, breaker box). **No timelock, no DAO check.** Per Mento governance proposal MGP-14, this was framed as a temporary state during deployment; as of report date, ≈10 weeks post-launch, the migration to a timelock has not happened.

## What you actually earn

**Nothing on USDm itself** — it's a pure $1-peg stablecoin with no yield accrual. The yield that retail users encounter comes from **LPing USDm against USDC** in Mento's FPMM pools, paid via Merkl reward campaigns (currently around 13% APR on the Monad USDC/USDm pool, though the campaign expiry and renewal cadence aren't published in advance and base swap fees are sub-1%).

For pure stablecoin exposure (not LP), USDm earns nothing. For LP exposure, the FPMM design means **you don't take traditional impermanent loss** (the pool quotes the oracle rate, not a curve), but you do absorb oracle-vs-market divergence whenever the Chainlink feed lags the real market.

## What's our concern, plainly?

Six structural weaknesses combine to put USDm meaningfully below USDC/AUSD/USDT in risk-adjusted terms:

1. **No atomic user-direct redemption.** Exit depends on FPMM pool liquidity and keeper-driven rebalancing — there is no PSM, no instant-swap, no institutional fiat redemption.
2. **The backing cushion is thin on both the aggregate and Monad-local reads.** Aggregate stable-only coverage is **0.9120×, measured on-chain 2026-09-07** — stable-only reserve against all Mento stablecoin debt. ⚠️ **That is at the level that triggered the July downgrade, not just below par.** A separate low-0.90s figure published in August *was* a misclassification, not a decline — while gross coverage remains above par only because it includes CELO + stETH. On Monad, Reserve coverage has fallen into the ≈40% gross / ≈65% ex-POL range; retail-held USDm now exceeds the Monad Reserve. Wormhole NTT cross-chain backing reconciliation is also announced-not-operational, so the Monad Reserve cannot fall back on Celo.
3. **Recursive collateral role** for the entire V3 FX synthetic stack means any USDm stress cascades through GBPm/JPYm/CHFm.
4. **Single-oracle dependence** (Chainlink only) for peg defense — no dual-oracle or fallback feed.
5. **No CEX listings, no external DEX depth** — USDm is a Mento-native stablecoin with no off-Mento liquidity.
6. **Monad admin = bare 4-of-7 Safe, no timelock** — meaningfully weaker than the Celo deployment's 2-day Timelock + Watchdog stack.

## Bottom line

USDm is a reasonably-engineered stablecoin from a credible team with a strong audit history. But it carries a stack of structural weaknesses that put it well below USDC, AUSD, and USDT: no user-direct redemption, oracle-only peg defense with no fallback, recursive role as V3 collateral (operationally on Celo, architecturally on Monad), no external liquidity, and on Monad specifically a bare multisig admin without a timelock. The backing read has also weakened: aggregate stable-only Reserve coverage has slipped just below par, gross coverage is supported by a volatile CELO + stETH bucket, and Monad Reserve coverage is now only in the ≈40% gross / ≈65% ex-POL range. Retail-held USDm on Monad exceeds the Monad Reserve, and the local reserve mix is now majority AUSD rather than Circle USDC. Wormhole NTT cross-chain backing reconciliation is announced but not yet operational, so the Monad Reserve cannot fall back on Celo.

**Practical usage guidance**

- Acceptable for small positions, particularly LP exposure on the Mento USDC/USDm pool when Merkl yields justify the structural risk.
- Not a USDC substitute. Don't model USDm as fungible with USDC in portfolio composition.
- Avoid as collateral for leveraged positions on third-party protocols until (a) the V3 CDP infrastructure (CollateralRegistry/StabilityPool/BorrowerOperations) is deployed on Monad and the FX synthetics start trading on user-deposited collateral instead of pre-minted seed liquidity, (b) Wormhole NTT activates for cross-chain backing reconciliation, and (c) the Monad admin migrates to a timelock.
- Monitor: Reserve composition top-ups, whether Monad retail coverage returns above par, **POL → user-circulating drift**, aggregate stable-only coverage on the live dashboard, CDP infrastructure deployment, retail circulation of GBPm/EURm/JPYm/CHFm (currently ≈0), Wormhole NTT activation, MGP-15+ governance migration, any depeg-band events on the FPMM, Merkl renewal cadence.

---

## Revision History

*⚠️ **2026-09-07 — the reserve total was being read from the issuer's API, and the API overstated it. Stable-only coverage 0.9955 → 0.9120; backing HELD at 4.5.** The analyzer measured both an on-chain balance sweep and Mento's API total, published the divergence, and then used the API anyway — its correction was `max(api_total, candidate)`, and a max() can only ever raise, so with the API reading high the correction was a **silent no-op** and every corrected field equalled its uncorrected twin. Swept on-chain the reserve is **$18,618,906, not $20,094,988** — the API overstated the Ethereum leg by **$1,377,289 (about 11.8%)** and Monad by a further 8%. ⚠️ **0.912 is essentially the 0.909 that drove the July cut to 4.5, so this restores the basis the score was set on rather than changing the score** — but the page had been saying "just below par" for a figure that is at the downgrade level. ⚠️ **This is not a reversal of the 2026-08-28 EUROP retraction**, which stands: that was a classifier excluding a real holding, and this is a total read from the wrong source.*

*⚠️ **2026-09-07 — Dependencies 4.0 and Contract & Admin 4.0 added; Celo override 6.0 → 5.5, liquidity 5.5 → 6.0.** The authority topology was hand-walked across nine layers on Celo, Monad and Ethereum, replacing a generator file that carried one. ⚠️ **Three signatures and no delay sit on the reserve-spend path of every chain** — one Safe holds reserve-v2-spend on Celo and Monad and reserve-custody on Ethereum, and that path moves the assets rather than pausing them. **Two Safes govern all three legs, so the chain spread buys no authority independence**, and the 2-day timelock covers 2 of the 9 layers. **Celo's premium was stated as "2-day Timelock + Watchdog Veto"; three of its five layers are undelayed, including the spend path** — cut half a point, not more, because the rest of the premium is real: 5+ years of chain age and a USDm contract that is the rebranded cUSD with a clean multi-year record. Celo backing held at 6.0, which prices the reserve this walk does not touch; Monad held at 4.5 with three of its four legs re-verified from chain.*

*Updated 2026-05-18: corrections applied per a full on-chain authority and supply audit. The V3 CDP system and Wormhole NTT cross-chain backing are both announced-not-operational on Monad as of report date. Scores adjusted accordingly (overall 6.0 → 5.5; Monad 5.5 → 5.0).*

*Updated 2026-05-19: POL-aware coverage. The 18.5% Monad gross "gap" is Protocol-Owned Liquidity in Mento-controlled FPMM pools, not operational under-collateralization. Ex-POL coverage is ≈272% on Monad / ≈1.35× aggregate. Scores unchanged — the 5.0 backing score is binding on structural factors (no atomic redemption, single-oracle, seed-stage, third-party credit pass-through), not on coverage shortfall.*

*⚠️ **2026-08-28 — RETRACTION. Backing 4.0 → 4.5, Overall 4.5 → 5.0, Monad Overall 4.0 → 4.5. Yesterday's cut is reversed and the finding beneath it is withdrawn.** This report published that **$1,200,803 of stable collateral left the Ethereum leg and had not returned.** **It never left.** It was converted into **EUROP**, a euro stablecoin — 1,000,000 units at $1.1647, in the Reserve Safe in cold custody — and **the reserve reader's bucket map did not know the ticker.** It knew EURC, AXLEUROC and EUROC; EUROP fell through to `other`, and `other` was not counted as backing. Measured against 08-24: the Ethereum leg is down **$1,190,902**, EUROP sits outside that leg at **$1,164,727**, residual **$26,175**. **The money moved between assets, not out of the reserve.** ⚠️ **The trigger therefore fired on a classification gap.** EUROP is worth **7.55pp of coverage**; restated, the closes read **0.9877 (08-25)** and **0.9846 (08-26)**, **both above the 0.98 line the cut was conditioned on**, and corrected stable-only coverage is **99.27%, not 91.73%.** ⚠️ **Recorded prominently rather than quietly amended, because a reader may have acted on it.** A published score cut, on a stated trigger, on a specific dollar figure, is the kind of claim someone sizes a position against — **and both halves were wrong for about a day.** **The reasoning that produced it was sound in general and wrong here: `other` named the classifier's ignorance, not the asset's quality.** Two readers independently concluded an unclassified bucket should not count as backing. **A good prior, and the failure mode of a good prior is that nobody re-examines it.** **Deliberately not overshooting:** CELO reflexivity, no liquidation mechanism, no user-direct redemption, Monad's ≈61.6% local coverage and ≈19.6% Tier-1 USDC share are all unchanged. **Backing returns to its pre-trigger 4.5, not higher**, and the restore condition to 5.0 remains unmet. **Also corrected: `last_verified` was bumped to 2026-08-27 in that pass and should not have been** — only the reserve and coverage layers were re-read. It is restored to **2026-07-23**, with `last_revised` carrying **2026-08-28**.*

*⚠️ **RETRACTED 2026-08-28 — the cut described in this entry was reversed and the finding under it withdrawn. See the entry above. Retained for the record rather than deleted.** Updated 2026-08-27: **Backing 4.5 → 4.0, Overall 5.0 → 4.5, Monad Overall 4.5 → 4.0. A pre-committed trigger firing, not a re-judgement** — this coverage had stated it would cut to 4.0 if stable-only coverage closed below 0.98× again, and it closed 0.9122 and 0.9091 on 08-25 and 08-26 against 0.9860 at the last review. ⚠️ **Total backing fell $1,128,385 (−5.64%) while supply rose 0.54%, and the Ethereum leg alone accounts for 100.9% of the drop.** It was stable collateral rather than a mark-to-market swing — stable-only excludes the volatile bucket — and the API-versus-on-chain delta held steady at about −$212K across the step, so both sources moved together and it is not a reconciliation artifact. ⚠️ **Where the money went is NOT established: redemption, rebalance into the volatile bucket and a custody move are all consistent with what is observable, and the prior collateral split is not in the available history. The movement is measured; the cause is not.** ⚠️ **Also corrected, and it matters more than the prose: the dashboard's headline `collateral_ratio` of 1.2237 is not USDm's ratio** — it divides the reserve by *all* Mento stablecoin debt ($15.43M) rather than USDm supply ($16.58M). **Reserve-to-USDm-supply is 1.1388×, about 8.5pp lower**, and a ≈1.16× reading uses a different denominator. Both figures are published by the dashboard; only one answers "how well is USDm covered". **Monad's Backing is deliberately held at 3.0:** its own coverage improved across the step (0.6064 → 0.6157) and its reserve rose, so cutting it would attribute Ethereum's deterioration to the wrong chain. Its Overall moves because the aggregate it partly depends on weakened. **Celo's Backing override of 6.0 is carried unchanged and flagged as the least-supported number on the page** — Celo draws on the joint Reserve that lost the $1.2M, so the case for it sitting two points above the headline is weaker than when it was set. It was not re-derived this pass.*

*Updated 2026-05-29: Reserve composition re-verified on-chain via direct RPC reads (Celo + Ethereum + Monad). **Stable-only coverage framing added alongside gross coverage** to reflect the volatile-bucket question raised by readers — the joint Mento Reserve covers all-stablecoin debt at ≈1.21× gross / ≈1.01× stable-only / ≈0.80× against gross supply ($14.36M USD-stable + $3.05M EUR-stable + $3.40M Volatile + $0 Other against ≈$17.2M aggregate stablecoin debt / ≈$26M gross supply). **Corrected** the prior "USDm insulated from CELO volatility" framing — that applies to USDm-on-Monad only; USDm-on-Celo shares the joint Reserve which includes ≈$3.4M of CELO + stETH (≈16% of Reserve). **Also corrected** the V1/V3-mechanism framing in Track Record: USDm-on-Celo IS the rebranded cUSD contract (Nov 2025 `symbol()` change), so the 6-year cUSD V1/V2 track record at the same address generalizes directly. **Supply figures also corrected** as a downstream consequence of the cUSD-rebrand finding: the prior published USDm-on-Celo figure (≈$0.8M) was the small fresh V3-USDm contract from before the rebrand; post-rebrand the Celo USDm balance is the rebranded cUSD supply (≈$16.0M), making aggregate USDm circulation ≈$17.65M rather than ≈$2.5M. Scores unchanged — the 5.0 backing remains binding on structural factors, and the corrected coverage framing is tighter than the prior "1.35× ex-POL" claim but doesn't change the structural read.*

*2026-07-23 — backing deterioration: overall 5.5 → 5.0 (Monad 5.0 → 4.5, Celo 6.5 → 6.0; backing 5.0 → 4.5). Over ≈7 weeks, aggregate stable-only Reserve coverage slipped below par (≈1.01× → low-0.90s×), Monad reserve coverage roughly halved (gross ≈81% → ≈42%; ex-POL ≈272% → ≈65%, so retail-held USDm now exceeds the Monad Reserve), and the Monad reserve composition inverted to majority Agora AUSD (≈61%) from ≈90% Circle USDC. On-chain peg held at par throughout; peg-mechanism, liquidity, and issuer scores unchanged. Mento's API reserve undercount (Ethereum AUSD) resolved upstream; dashboard renderer dual-display shipped.*

*This report is based on public Mento documentation, on-chain reads via Monad mainnet RPC and MonadScan, Mento analytics APIs, and `reserve.mento.org`; figures were re-verified on 2026-07-23. Live values for Monad Reserve composition, ReserveV2 coverage, API↔RPC drift, stable-only coverage, and Celo vs Monad side-by-side are on the [live dashboard](https://tidresearch.com/dashboards/?asset=usdm). Mento Labs operates governance and certain off-chain operational components; corrections and clarifications are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*
