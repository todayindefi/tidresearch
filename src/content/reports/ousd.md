---
asset: "OUSD"
slug: "ousd"
aliases: ["OUSD", "Origin Dollar"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "light"
date: "2026-07-13"
last_verified: "2026-07-13"
peg_mechanism_score: 5.5
backing_score: 4.5
liquidity_score: 5.0
issuer_score: 6.0
overall_score: 5.0
issuer: "Origin Protocol"
audited_reserves: false
market_cap_approx: 6940000
production: false
---

# OUSD — Asset Risk Assessment (Light)

**Category:** Stablecoin | **Peg Mechanism:** Hybrid (USDC-backed, yield-deployed) | **Issuer:** Origin Protocol

**Live data:** [OUSD Backing Dashboard](https://tidresearch.com/dashboards/?asset=ousd) — hourly on-chain supply, collateral ratio, and strategy breakdown.

## Summary

Origin Dollar (OUSD) is a yield-bearing rebasing stablecoin launched in 2020 by Origin Protocol. It is backed 100% by USDC, which the protocol deploys into Morpho lending markets and Curve liquidity pools to generate yield. OUSD rebases daily — holder balances increase automatically without staking or compounding. The protocol uses an AMO (Algorithmic Market Operations) strategy that mints OUSD into Curve pools to amplify capital efficiency. As of July 13, 2026, total supply is ≈$6.94M (of which ≈$0.62M is protocol-owned POL, leaving ≈$6.32M circulating/user supply) with backing of ≈$6.35M — a **100.47% collateral ratio** against circulating supply (≈$29.5K surplus) and ≈5% APY.

**Peg performance** (TID PegTracker, 740 hourly samples): avg **−7 bps** from $1.00, median −6 bps. Tight on average — primary redemption to USDC is open to any holder at NAV (10 min typical, 24h max under stress), which is what keeps secondary discounts arbed away. For comparison: crvUSD median −9 bps, thBILL median −32 bps.

**Composition drift since the March review:** the strategy mix reshuffled materially. The Morpho leg migrated to a **Morpho V2** vault, the Curve AMO shrank sharply (24.1% → 6.2% of backing), the Base cross-chain leg grew (10.4% → 21.3%), and a **new unclassified contract holding ≈$0.88M (13.9%) appeared** (labelled "Unknown" by the backing monitor — see §Backing & Strategy Breakdown). Net collateralization is marginally healthier than March (surplus $10.8K → $29.5K; POL share 25.5% → ≈9%), but the strategy and Morpho-collateral detail below was re-pulled and the Morpho V2 collateral basket still needs first-party re-derivation.

## Backing & Strategy Breakdown

**Live, July 13, 2026** (CR is measured against circulating/ex-POL supply):

| Strategy | Value | % of Backing | Notes |
|----------|-------|-------------|-------|
| Morpho V2 | $3,703,637 | 58.3% | USDC lent via a Morpho **V2** vault (`0x3643…fF6e`) — migrated from the prior "OUSD Vault" |
| Cross-Chain Master | $1,351,986 | 21.3% | USDC bridged via CCTP to Base (`0xB1d6…0866`) |
| Curve AMO (USDC only) | $394,623 | 6.2% | Real USDC side only (ex-POL); pool position holds ≈$1.02M USDC total |
| Unknown (`0xE0228DB1…`) | $880,476 | 13.9% | **Unclassified** contract holding USDC — new since March; not yet labelled/attributed. Flag for identification. |
| Vault Idle | $17,205 | 0.3% | Undeployed buffer (the immediately-liquid on-hand USDC) |

**Supply composition:** ≈91% circulating (user) / ≈9% POL (self-minted OUSD in Curve pools) — POL down from 25.5% in March as the Curve AMO position was reduced.

## Morpho Collateral Exposure

OUSD's USDC is lent on Morpho against borrower collateral. The collateral composition introduces indirect risk.

> **⚠ Staleness note (2026-07-13):** the table below is the **March 2026** snapshot of the *old* Morpho OUSD Vault. The Morpho leg has since migrated to a **Morpho V2** vault (`0x3643…fF6e`), whose collateral basket has **not** been re-derived this cycle. Treat the OETH-concentration figure as indicative of the historical risk shape, not the current live basket — the self-referential-OETH exposure must be re-confirmed against the V2 vault before relying on it.

| Collateral | % of Morpho | Utilization | Risk Note |
|------------|-------------|-------------|-----------|
| **OETH** | 62.26% | 88.75% | Another Origin product — self-referential |
| stcUSD | 21.61% | 92.98% | |
| syrupUSDC | 7.74% | 90.86% | |
| PT-cUSD-23JUL2026 | 3.13% | 90.39% | Fixed-term, illiquid until maturity |
| LBTC | 2.89% | 90.99% | |
| weETH | 1.24% | 91.11% | |
| tBTC | 0.65% | 90.80% | |
| PT-stcUSD-23JUL2026 | 0.48% | 90.42% | Fixed-term |

## Key Risk Factors

### 1. Self-Referential Collateral Risk (CRITICAL)

62% of Morpho lending is collateralized by OETH — Origin's own ETH yield product. If OETH depegs or suffers an exploit, the largest source of OUSD's yield takes losses simultaneously. This is correlated risk within a single team's product suite.

### 2. AMO Circularity (MODERATE — reduced since March)

The Curve AMO position was cut sharply this cycle. It now holds ≈$1.02M USDC total, of which only the ≈$0.39M ex-POL USDC side counts as real backing; the remaining ≈$0.62M is protocol-minted (POL) OUSD. POL fell from 25.5% to ≈9% of supply, so the circular component is materially smaller than the March "$3.27M / 43%". The CR reported here (100.47%) is already measured against ex-POL circulating supply, so it reflects real surplus, not the inflated gross figure.

### 3. Thin Collateral Margin (ELEVATED)

Only ≈$29,461 surplus on ≈$6.32M circulating supply (0.47%). Improved from the March razor-thin $10,760/0.14%, but still a negligible buffer: any strategy loss — a Morpho bad-debt event, Curve exploit, or bridge failure — could immediately push OUSD undercollateralized. No meaningful equity cushion exists.

### 4. Liquidity Constraints (ELEVATED)

The immediately on-hand buffer (Vault Idle) is only ≈$17K; the rest of the ≈$6.35M backing is deployed in the Morpho V2 vault, the Base cross-chain leg, the Curve AMO, and the unclassified holding. Withdrawing from those depends on Morpho utilization (88–93% in the March snapshot; not re-derived for the V2 vault this cycle). The vault can process redemptions with a 10-minute delay normally, but up to 24 hours if liquidity must be pulled from strategies. For a ≈$6.94M stablecoin, this is tight.

### 5. Cross-Chain Bridge Risk (MODERATE — grew)

≈$1.35M (21.3%) is now routed via CCTP to Base (the "Cross-Chain Master" strategy), up from $586K/10.4% in March. Cross-chain exposure has roughly doubled as a share of backing, increasing Circle-bridge dependency and cross-chain smart-contract risk.

### 6. Unclassified Strategy Allocation (MODERATE — new)

≈$0.88M (13.9% of backing) sits in an unlabelled contract (`0xE0228DB13F8C4Eb00fD1e08e076b09eF5cD0EA1e`, holding USDC) that the backing monitor tags "Unknown." It is a contract (not an EOA) but does not expose a `name()`, so it is not yet attributed to a known Morpho market or strategy adapter. A double-digit-percent allocation to an unidentified venue is a transparency gap that should be resolved before the strategy breakdown is treated as fully vetted.

### 7. Small Scale

≈$6.94M market cap is very small for a stablecoin, down slightly from March. Limited secondary market liquidity — primary exit is direct redemption via the Origin dapp.

## Positive Factors

- **Simplified to USDC-only backing** (Nov 2025) — removed multi-stablecoin complexity
- **Battle-tested codebase** — shared with OETH, superOETH, OS; launched 2020
- **Peg stability** — currently at $1.00, rebasing mechanism is proven
- **Multiple audits** via Origin Protocol (OpenZeppelin, Trail of Bits, Solidified, Certora)
- **Transparent analytics** — Origin provides detailed collateral dashboard
- **Conservative strategies** — Morpho lending and Curve LP only, no exotic yield

## Scoring Rationale

| Category | Score | Notes |
|----------|-------|-------|
| Peg Mechanism | 5.5 | USDC-backed with rebasing is sound. AMO circularity is reduced (POL down to ≈9% from 25.5%), a mild positive. Redemption works but can take up to 24h. |
| Backing | 4.5 | 100% USDC backing on paper, and surplus improved to ≈$29.5K (0.47%) from $10.8K. Offsetting: the self-referential OETH exposure (62% of the old Morpho basket) is unverified after the Morpho V2 migration, and 13.9% now sits in an unclassified contract. Held at 4.5 — the buffer improvement is cancelled by the new attribution gap and V2 re-derivation debt. |
| Liquidity | 5.0 | Small market cap (≈$6.94M). Direct redemption available but potentially delayed; on-hand idle buffer only ≈$17K. DEX liquidity is thin — Curve pool is the main venue. |
| Issuer | 6.0 | Origin Protocol is established (2020), VC-backed, doxxed team, multiple audits. Shared codebase across 4 products reduces isolated risk but increases correlated risk. |
| **Overall** | **5.0** | **Moderate-to-elevated risk, unchanged. Sound underlying design (USDC-backed, conservative strategies, proven rebasing) still undermined by self-referential collateral exposure, a thin surplus, and small scale. This cycle's changes roughly net out: healthier surplus and less AMO circularity vs. a grown cross-chain leg, a Morpho V2 migration whose collateral basket is unre-derived, and a new 13.9% unclassified allocation. Re-confirm the V2 OETH exposure and identify `0xE0228DB1…` before the next review.** |

## Comparison vs Portfolio Stablecoins

| Factor | OUSD | eUSD | crvUSD | msUSD | USDC |
|--------|------|------|--------|-------|------|
| Mechanism | USDC + yield deploy | RToken basket | Algorithmic (LLAMMA) | Delta-neutral | Fiat-backed |
| Market cap | $6.94M | $23M | $220M | $22M (depegged ≈$0.30) | $40B+ |
| Yield | ≈5% | 0% (to RSR stakers) | 0% | Variable | 0% |
| Key risk | OETH self-reference | RLUSD concentration | LLAMMA complexity | Funding rates | Regulatory |
| Score | **5.0** | **6.0** | **5.0** | **2.5** | **9.0** |

## Recommendations

1. **Monitor OETH health** — OUSD's largest risk is correlated with OETH. If OETH depegs, OUSD's Morpho lending takes losses. Watch OETH collateral ratio alongside OUSD.
2. **Track collateral ratio via backing monitor** — the ≈$29.5K surplus is razor-thin. Any drift below 100% is a red flag.
3. **Test redemption path** — verify the 10-minute redemption flow works for your position size before relying on it as an exit.
4. **Position sizing** — given the self-referential risk, avoid concentrating too heavily in OUSD relative to other stablecoins.

## Sources

- [Origin Docs — OUSD](https://docs.originprotocol.com/yield-bearing-tokens/origin-dollar-ousd)
- [Origin Analytics — OUSD Collateral](https://analytics.originprotocol.com/ousd/collateral)
- [TID Backing Monitor — OUSD](https://tidresearch.com/dashboards/?asset=ousd)

## Revision history

- **2026-07-13 — weekly refresh + strategy re-pull:** supply ≈$7.55M → ≈$6.94M, CR restated against ex-POL circulating supply (100.47%, surplus $10.8K → ≈$29.5K), POL 25.5% → ≈9%. Strategy mix re-pulled: Morpho leg migrated to a **Morpho V2** vault, Curve AMO cut (24.1% → 6.2%), Base cross-chain leg grew (10.4% → 21.3%), and a new **unclassified ≈$0.88M (13.9%)** contract (`0xE0228DB1…`) appeared. The Morpho V2 collateral basket was **not** re-derived — the 62% OETH-concentration table is retained with a staleness note and must be re-confirmed against the V2 vault. Added a risk factor for the unclassified allocation. Scores unchanged (peg 5.5, backing 4.5, liquidity 5.0, issuer 6.0, overall 5.0) — the healthier surplus is offset by the V2 re-derivation debt and the new attribution gap.
