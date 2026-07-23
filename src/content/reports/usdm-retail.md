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
date: "2026-05-29"
last_verified: "2026-07-23"
featured: false
issuer: "Mento Labs (Germany)"
audited_reserves: true
market_cap_approx: 15820000
peg_mechanism_score: 7.0
backing_score: 4.5
liquidity_score: 5.0
issuer_score: 6.5
overall_score: 5.0
chain_overrides:
  monad:
    backing_score: 3.0
    liquidity_score: 4.5
    overall_score: 4.5
  celo:
    backing_score: 6.0
    liquidity_score: 5.5
    overall_score: 6.0
---

# USDm — Retail Risk Report

**Moderate-elevated risk · 5.0/10** (4.5/10 on Monad, 6.0/10 on Celo)

**Live data:** [USDm Backing Dashboard](https://tidresearch.com/dashboards/?asset=usdm) — hourly Monad on-chain reserve composition, Monad ReserveV2 coverage, aggregate stable-only coverage, API↔RPC drift, and Celo vs Monad side-by-side. The dashboard now shows on-chain-verified reserve composition and corrected gross/stable-only coverage as primary, cross-checked against Mento's analytics API.

| Yield | Exit method | Primary redemption | Age (V3) | Chains |
|---|---|---|---|---|
| None on USDm itself; Merkl rewards via LP | Mento FPMM pool swap only | None for users — keeper-only via Reserve | ~3 months on Monad, ~1 year on Celo | Celo, Ethereum, Monad |

## Summary

USDm is the USD-pegged stablecoin issued by [Mento Protocol](https://www.mento.org), the FX-on-chain platform that originated on Celo in 2020 (as the stability layer behind cUSD/cEUR) and rewrote its core into the V3 architecture through 2024-2026. In V3, USDm is **Reserve-backed 1:1 by a basket of other fiat stablecoins** — USDC, USDT, and USDS per the canonical design, with the actual realization on each chain depending on what's available locally.

USDm is one of only two Reserve-backed stables in Mento V3 (alongside EURm); every other Mento FX synthetic (GBPm, JPYm, CHFm) is documented as a Liquity-V2-style CDP using **USDm as collateral**. **The CDP infrastructure is currently live on Celo only; on Monad the FX synthetics are pre-minted bootstrap pool liquidity with no operational CDP system yet.** So USDm sits at the base of the V3 synthetic stack as designed — a USDm depeg would cascade through the operational FX system on Celo. On Monad, that cascade is currently architectural rather than operational (per the on-chain audit referenced in the dashboard).

Total USDm circulation is now roughly mid-$15M aggregate — about $2M on Monad plus the larger Celo balance (the Celo balance is the rebranded cUSD supply; Mento's Nov 2025 governance proposal changed the cUSD contract's `symbol()` getter to "USDm" without touching the address, supply, or authority chain, so the historical cUSD circulation now sits under the USDm ticker). The asset has no CEX listings and no external DEX depth — it lives almost entirely inside Mento's own oracle-priced FPMM pools.

**The 5.0/10 score reflects a sound design whose backing cushion has weakened:** USDm-on-Monad now sits in the ~40% gross / ~65% ex-POL Reserve-coverage range, so the Monad Reserve no longer fully covers even user-held USDm. USDm-on-Celo draws against the **joint Mento Reserve** that backs every Mento stablecoin; aggregate stable-only coverage has recently slipped just below par into the low-0.90s× range, while gross coverage remains above par because the Reserve includes a volatile CELO + stETH bucket. Users cannot directly redeem USDm to the Reserve, peg defense depends entirely on Chainlink oracles plus keeper-driven rebalancing, and the Monad deployment is governed by a 4-of-7 multisig with **no timelock** while the Celo deployment has a full 2-day Timelock plus Watchdog Veto.

## What you actually earn

**Nothing on USDm itself** — it's a pure $1-peg stablecoin with no yield accrual. The yield that retail users encounter comes from **LPing USDm against USDC** in Mento's FPMM pools, paid via Merkl reward campaigns (currently around 13% APR on the Monad USDC/USDm pool, though the campaign expiry and renewal cadence aren't published in advance and base swap fees are sub-1%).

For pure stablecoin exposure (not LP), USDm earns nothing. For LP exposure, the FPMM design means **you don't take traditional impermanent loss** (the pool quotes the oracle rate, not a curve), but you do absorb oracle-vs-market divergence whenever the Chainlink feed lags the real market.

## What backs USDm

Mento V3 splits its stablecoin program into two backing models:

- **Reserve-backed (1:1 fiat-stable):** USDm and EURm only. The Reserve holds USDC/USDT/USDS for USDm; EUROC for EURm.
- **CDP-backed (Liquity V2-style, collateralized by USDm):** GBPm, JPYm, CHFm and other FX synthetics.

Backing splits cleanly **per chain**, and is not symmetric:

- **USDm-on-Monad** has chain-local USD-stable Reserve backing — USDC + AUSD + USDT0, no volatile exposure. Its current issue is not crypto collateral, but too little local Reserve versus retail-circulating USDm and a reserve mix now anchored by AUSD rather than USDC (see Monad table below).
- **USDm-on-Celo** draws against the **aggregate Mento Reserve** that backs every Mento stablecoin. That Reserve currently holds fiat-stable assets (USD + EUR stables) **plus a volatile CELO + stETH bucket** that is now roughly one-fifth of the Reserve. The fiat-stable portion alone has recently slipped just below full coverage of user-circulating Mento stablecoin debt; including the volatile collateral, gross coverage remains above par. Volatile-bucket value moves with crypto markets, so the **stable-only** read is the conservative one and is what the live dashboard surfaces.

A note on Celo-side contract continuity: USDm-on-Celo lives at the same address that previously issued cUSD; Mento's Nov 2025 governance proposal changed only the token's `symbol()` getter from "cUSD" to "USDm", leaving the supply, authority, and Reserve registration unchanged. For backing purposes, USDm-on-Celo and the historical cUSD supply are the same liability against the same Reserve.

The Reserve also enforces a per-asset **5%/day spending cap** (`dailySpendingRatio`), rate-limiting any single day's outflow to roughly $1M total across the collateral basket. This is a defense-in-depth against a coordinated mass-exit — it slows a run, it does not cure below-par stable-only coverage.

The per-chain Reserve composition on **Monad** has inverted. At the latest re-read it is majority Tier-2 Agora AUSD, with roughly one-fifth Circle USDC and one-fifth USDT0; exact values rotate and are live on the dashboard's Monad Reserve Composition panel.

| Asset | Issuer | $ Value | % of Reserve | Risk tier |
|---|---|---|---|---|
| USDC (Circle native CCTP) | Circle | Live on dashboard | ~one-fifth | Tier 1 — top-tier issuer |
| AUSD (Agora Finance) | Agora Bermuda Ltd | Live on dashboard | ~60% / majority | Tier 2 — newer, VanEck-managed |
| USDT0 (LayerZero OFT) | LayerZero/Tether | Live on dashboard | ~one-fifth | Tier 3 — wrapped USDT, bridge dep |

The Monad Reserve's anchor asset is now Agora AUSD, not Circle USDC. That raises single-issuer concentration on Monad, because an AUSD impairment now directly hits the majority of local backing.

Monad Reserve coverage has fallen into the ~40% gross / ~65% ex-POL range. Protocol-Owned Liquidity is still meaningful, around one-third of Monad float, but it no longer explains the whole gap: retail-held USDm now exceeds the Monad Reserve. The chain-local Reserve therefore no longer fully covers even user-held USDm.

On-chain audit confirms three structural facts on Monad as of 2026-05-18:

- **The V3 CDP system is not yet deployed.** The Liquity V2 / Bold CDP contracts (CollateralRegistry, StabilityPool, BorrowerOperations) referenced in Mento's source code are not on Monad. The `OpenLiquidityStrategy` that manages the FX-synthetic pools is a plain rebalancer, not a CDP strategy.
- **The FX synthetics (GBPm, EURm, JPYm, CHFm) are pre-minted seed liquidity, not CDP-collateralized.** 98–99.97% of each FX synthetic's supply sits inside its own FPMM pool, paired with seeded USDm. There is effectively zero retail circulation of these tokens on Monad, and no live minter authority on them.
- **EURm on Monad is not Reserve-backed despite the canonical Mento V3 model.** The Monad ReserveV2 holds zero EUROC.

What this means for USDm holders: the on-chain FPMM currently quotes near par for tested sizes, but the structural Reserve cushion behind a full user exit is gone on Monad. A mass exit now depends on pool inventory, keeper rebalancing, and Mento operationally topping up local reserves; the Monad-local Reserve alone does not fully cover retail-circulating USDm.

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
- **Mento V1/V2 stablecoins (cUSD/cEUR/cReal)** ran for ~6 years on Celo with no exploits and no socialized losses. cUSD briefly traded outside its band during the May 2022 Terra/UST collapse but recovered. **USDm-on-Celo is the rebranded cUSD contract** (Mento changed the token's `symbol()` getter from "cUSD" to "USDm" in Nov 2025; the address, supply, authority chain, Reserve registration, and minter setup are unchanged, with the mechanism upgraded over time from V1's constant-product AMM through V2's stability layer to today's V3 FPMM). The 6-year Celo track record therefore generalizes directly to USDm-on-Celo. The fresh-deployment caveat applies only to **USDm-on-Monad** (~$1.7M supply, deployed 2026-03-11 at a separate contract address).
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
| Mento USDC/USDm | Monad | ~$0.5M | Merkl incentives around the mid-teens APY at last read; 24h swap volume currently negligible |
| Mento AUSD/USDm | Monad | Smaller, not measured | — |
| Mento USDC/USDm | Celo | Larger but <$5M | — |

Aggregate USDm circulation is still small enough that institutional-scale positions cannot exit cleanly. The instant-swap and institutional-redemption mechanisms that backfill liquidity for AUSD or USDC do not exist for USDm. The Monad USDC/USDm pool remains deep at par on current quotes, but lightly traded and fully dependent on Mento's own FPMM plus keeper rebalancing.

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
2. **Backing cushion has weakened on both the aggregate and Monad-local reads.** Aggregate stable-only coverage has slipped just below par into the low-0.90s× range, while gross coverage remains above par only because it includes CELO + stETH. On Monad, Reserve coverage has fallen into the ~40% gross / ~65% ex-POL range; retail-held USDm now exceeds the Monad Reserve. Wormhole NTT cross-chain backing reconciliation is also announced-not-operational, so the Monad Reserve cannot fall back on Celo.
3. **Recursive collateral role** for the entire V3 FX synthetic stack means any USDm stress cascades through GBPm/JPYm/CHFm.
4. **Single-oracle dependence** (Chainlink only) for peg defense — no dual-oracle or fallback feed.
5. **No CEX listings, no external DEX depth** — USDm is a Mento-native stablecoin with no off-Mento liquidity.
6. **Monad admin = bare 4-of-7 Safe, no timelock** — meaningfully weaker than the Celo deployment's 2-day Timelock + Watchdog stack.

## Scoring rationale

| Category | Score | Notes |
|---|---|---|
| Peg Mechanism | 7.0 | Reserve-backed fiat-stable basket is sound; oracle-priced FPMM holds peg at oracle rate; but no atomic user redemption, single-source Chainlink dependence. |
| Backing | 4.5 (Monad: 3.0, Celo: 6.0) | **Aggregate Mento Reserve covers all Mento stablecoins** (USDm + EURm + FX synthetics) at roughly **~1.16× gross / low-0.90s× stable-only** against debt, with the exact current value on the live dashboard. Stable-only coverage is the load-bearing fiat-comparable measure and has recently slipped below par; gross coverage remains above par because it includes a volatile CELO + stETH bucket now around one-fifth of the Reserve. **Monad:** coverage is now in the ~40% gross / ~65% ex-POL range, and retail-held USDm exceeds the Monad Reserve. Monad reserve composition also inverted to majority Tier-2 AUSD, with roughly one-fifth Circle USDC and one-fifth USDT0. On-chain audit confirms the V3 CDP infrastructure is not yet deployed on Monad; Wormhole NTT also not yet operational. |
| Liquidity | 5.0 (Monad: 4.5, Celo: 5.5) | FPMM-only exit, no CEX, no external DEX. Monad pools thinnest; USDC/USDm TVL is roughly $0.5M, incentivized, and currently lightly traded despite near-par quotes. |
| Issuer | 6.5 | Doxxed Mento Labs + cLabs lineage + 6-year clean V1/V2 track record. Strong audit roster (ChainSecurity, Macro, Sherlock, Hats). Docked for Monad bare 4-of-7 Safe admin model. |
| **Overall** | **5.0** (Monad: 4.5, Celo: 6.0) | **Above-average risk for a fiat-backed stablecoin** — meaningfully below USDC (9.0), AUSD (7.5), USDT (7.5). The fundamental design is sound and the on-chain peg remains at par, but backing has deteriorated: aggregate stable-only coverage is below par, Monad coverage no longer covers retail-held USDm, and Monad's reserve quality is now majority Tier-2 AUSD rather than Circle USDC. Those factors sit on top of the existing structural weaknesses: no user-direct redemption, oracle-driven peg with single-source dependence, seed/bootstrap-stage Monad deployment, Wormhole NTT announced-not-operational, and bare 4-of-7 Safe admin without timelock. Usable for small positions during the bootstrap phase but not a USDC-substitute. |

## Bottom line

USDm is a reasonably-engineered stablecoin from a credible team with a strong audit history. But it carries a stack of structural weaknesses that put it well below USDC, AUSD, and USDT: no user-direct redemption, oracle-only peg defense with no fallback, recursive role as V3 collateral (operationally on Celo, architecturally on Monad), no external liquidity, and on Monad specifically a bare multisig admin without a timelock. The backing read has also weakened: aggregate stable-only Reserve coverage has slipped just below par, gross coverage is supported by a volatile CELO + stETH bucket, and Monad Reserve coverage is now only in the ~40% gross / ~65% ex-POL range. Retail-held USDm on Monad exceeds the Monad Reserve, and the local reserve mix is now majority AUSD rather than Circle USDC. Wormhole NTT cross-chain backing reconciliation is announced but not yet operational, so the Monad Reserve cannot fall back on Celo.

**Practical usage guidance**

- Acceptable for small positions, particularly LP exposure on the Mento USDC/USDm pool when Merkl yields justify the structural risk.
- Not a USDC substitute. Don't model USDm as fungible with USDC in portfolio composition.
- Avoid as collateral for leveraged positions on third-party protocols until (a) the V3 CDP infrastructure (CollateralRegistry/StabilityPool/BorrowerOperations) is deployed on Monad and the FX synthetics start trading on user-deposited collateral instead of pre-minted seed liquidity, (b) Wormhole NTT activates for cross-chain backing reconciliation, and (c) the Monad admin migrates to a timelock.
- Monitor: Reserve composition top-ups, whether Monad retail coverage returns above par, **POL → user-circulating drift**, aggregate stable-only coverage on the live dashboard, CDP infrastructure deployment, retail circulation of GBPm/EURm/JPYm/CHFm (currently ~0), Wormhole NTT activation, MGP-15+ governance migration, any depeg-band events on the FPMM, Merkl renewal cadence.

---

## Revision History

*Updated 2026-05-18: corrections applied per a full on-chain authority and supply audit. The V3 CDP system and Wormhole NTT cross-chain backing are both announced-not-operational on Monad as of report date. Scores adjusted accordingly (overall 6.0 → 5.5; Monad 5.5 → 5.0).*

*Updated 2026-05-19: POL-aware coverage. The 18.5% Monad gross "gap" is Protocol-Owned Liquidity in Mento-controlled FPMM pools, not operational under-collateralization. Ex-POL coverage is ~272% on Monad / ~1.35× aggregate. Scores unchanged — the 5.0 backing score is binding on structural factors (no atomic redemption, single-oracle, seed-stage, third-party credit pass-through), not on coverage shortfall.*

*Updated 2026-05-29: Reserve composition re-verified on-chain via direct RPC reads (Celo + Ethereum + Monad). **Stable-only coverage framing added alongside gross coverage** to reflect the volatile-bucket question raised by readers — the joint Mento Reserve covers all-stablecoin debt at ~1.21× gross / ~1.01× stable-only / ~0.80× against gross supply ($14.36M USD-stable + $3.05M EUR-stable + $3.40M Volatile + $0 Other against ~$17.2M aggregate stablecoin debt / ~$26M gross supply). **Corrected** the prior "USDm insulated from CELO volatility" framing — that applies to USDm-on-Monad only; USDm-on-Celo shares the joint Reserve which includes ~$3.4M of CELO + stETH (~16% of Reserve). **Also corrected** the V1/V3-mechanism framing in Track Record: USDm-on-Celo IS the rebranded cUSD contract (Nov 2025 `symbol()` change), so the 6-year cUSD V1/V2 track record at the same address generalizes directly. **Supply figures also corrected** as a downstream consequence of the cUSD-rebrand finding: the prior published USDm-on-Celo figure (~$0.8M) was the small fresh V3-USDm contract from before the rebrand; post-rebrand the Celo USDm balance is the rebranded cUSD supply (~$16.0M), making aggregate USDm circulation ~$17.65M rather than ~$2.5M. Scores unchanged — the 5.0 backing remains binding on structural factors, and the corrected coverage framing is tighter than the prior "1.35× ex-POL" claim but doesn't change the structural read.*

*2026-07-23 — backing deterioration: overall 5.5 → 5.0 (Monad 5.0 → 4.5, Celo 6.5 → 6.0; backing 5.0 → 4.5). Over ~7 weeks, aggregate stable-only Reserve coverage slipped below par (~1.01× → low-0.90s×), Monad reserve coverage roughly halved (gross ~81% → ~42%; ex-POL ~272% → ~65%, so retail-held USDm now exceeds the Monad Reserve), and the Monad reserve composition inverted to majority Agora AUSD (~61%) from ~90% Circle USDC. On-chain peg held at par throughout; peg-mechanism, liquidity, and issuer scores unchanged. Mento's API reserve undercount (Ethereum AUSD) resolved upstream; dashboard renderer dual-display shipped.*

*This report is based on public Mento documentation, on-chain reads via Monad mainnet RPC and MonadScan, Mento analytics APIs, and `reserve.mento.org`; figures were re-verified on 2026-07-23. Live values for Monad Reserve composition, ReserveV2 coverage, API↔RPC drift, stable-only coverage, and Celo vs Monad side-by-side are on the [live dashboard](https://tidresearch.com/dashboards/?asset=usdm). Mento Labs operates governance and certain off-chain operational components; corrections and clarifications are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*
