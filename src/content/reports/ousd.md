---
asset: "OUSD"
slug: "ousd"
aliases: ["OUSD", "Origin Dollar"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "light"
date: "2026-03-29"
last_verified: "2026-03-29"
peg_mechanism_score: 5.5
backing_score: 4.5
liquidity_score: 5.0
issuer_score: 6.0
overall_score: 5.0
issuer: "Origin Protocol"
audited_reserves: false
market_cap_approx: 7500000
production: true
---

# OUSD — Asset Risk Assessment (Light)

**Category:** Stablecoin | **Peg Mechanism:** Hybrid (USDC-backed, yield-deployed) | **Issuer:** Origin Protocol

**Live data:** [OUSD Backing Dashboard](https://todayindefi.github.io/backing-monitor/?asset=ousd) — hourly on-chain supply, collateral ratio, and strategy breakdown.

## Summary

Origin Dollar (OUSD) is a yield-bearing rebasing stablecoin launched in 2020 by Origin Protocol. It is backed 100% by USDC, which the protocol deploys into Morpho lending markets and Curve liquidity pools to generate yield. OUSD rebases daily — holder balances increase automatically without staking or compounding. The protocol uses an AMO (Algorithmic Market Operations) strategy that mints OUSD into Curve pools to amplify capital efficiency. As of March 2026, total supply is ~$7.55M with a 100.14% collateral ratio and 5.1% APY.

**Peg performance** (TID PegTracker, 740 hourly samples): avg **−7 bps** from $1.00, median −6 bps. Tight on average — primary redemption to USDC is open to any holder at NAV (10 min typical, 24h max under stress), which is what keeps secondary discounts arbed away. For comparison: crvUSD median −9 bps, thBILL median −32 bps.

## Backing & Strategy Breakdown

| Strategy | Value | % of Backing | Notes |
|----------|-------|-------------|-------|
| Morpho OUSD Vault | $3,693,328 | 65.31% | USDC lent on Ethereum mainnet |
| Curve AMO | $1,361,273 | 24.07% | Real USDC side only (ex-POL) |
| Morpho Base Vault | $586,559 | 10.37% | Cross-chain via CCTP to Base |
| Morpho Hyper Vault | $10,007 | 0.18% | Small allocation |
| Vault Idle | $3,740 | 0.07% | Undeployed buffer |

**Supply composition:** 74.5% TVL (user deposits) / 25.5% POL (self-minted OUSD in Curve pools).

## Morpho Collateral Exposure

OUSD's USDC is lent on Morpho against borrower collateral. The collateral composition introduces indirect risk:

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

### 2. AMO Circularity (HIGH)

43% of total reported backing ($3.27M) is circular — protocol-minted OUSD sitting in Curve pools. Only the USDC side ($1.36M) represents real backing. The ex-POL collateral ratio is 100.19%, meaning the real surplus against user deposits is thin.

### 3. Thin Collateral Margin (ELEVATED)

Only $10,760 surplus on $7.55M supply (0.14%). Any strategy loss — a Morpho bad debt event, Curve exploit, or bridge failure — could immediately push OUSD undercollateralized. No meaningful buffer exists.

### 4. Liquidity Constraints (ELEVATED)

Utilization rates across Morpho markets are 88-93%, leaving only ~$3.5M of $5.65M in assets immediately liquid. The vault can process redemptions with a 10-minute delay normally, but up to 24 hours if liquidity must be withdrawn from strategies. For a $7.5M stablecoin, this is tight.

### 5. Cross-Chain Bridge Risk (MODERATE)

$586K (10.4%) is bridged to Base via CCTP for Morpho lending. Adds Circle bridge dependency and cross-chain smart contract risk.

### 6. Small Scale

$7.5M market cap is very small for a stablecoin. Limited secondary market liquidity — primary exit is direct redemption via the Origin dapp.

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
| Peg Mechanism | 5.5 | USDC-backed with rebasing is sound, but AMO circularity (25.5% POL) complicates the picture. Redemption works but can take up to 24h. |
| Backing | 4.5 | 100% USDC backing is good on paper, but 62% of lending collateral is OETH (self-referential), surplus is only $10.8K, and high utilization limits liquidity. |
| Liquidity | 5.0 | Small market cap ($7.5M). Direct redemption available but potentially delayed. DEX liquidity is thin — Curve pool is the main venue. |
| Issuer | 6.0 | Origin Protocol is established (2020), VC-backed, doxxed team, multiple audits. Shared codebase across 4 products reduces isolated risk but increases correlated risk. |
| **Overall** | **5.0** | **Moderate-to-elevated risk. Sound underlying design (USDC-backed, conservative strategies, proven rebasing) undermined by self-referential collateral exposure, thin surplus, and small scale.** |

## Comparison vs Portfolio Stablecoins

| Factor | OUSD | eUSD | crvUSD | msUSD | USDC |
|--------|------|------|--------|-------|------|
| Mechanism | USDC + yield deploy | RToken basket | Algorithmic (LLAMMA) | Delta-neutral | Fiat-backed |
| Market cap | $7.5M | $22M | $264M | $30M | $40B+ |
| Yield | 5.1% | 0% (to RSR stakers) | 0% | Variable | 0% |
| Key risk | OETH self-reference | RLUSD concentration | LLAMMA complexity | Funding rates | Regulatory |
| Score | **5.0** | **6.0** | **5.0** | **5.0** | **9.0** |

## Recommendations

1. **Monitor OETH health** — OUSD's largest risk is correlated with OETH. If OETH depegs, OUSD's Morpho lending takes losses. Watch OETH collateral ratio alongside OUSD.
2. **Track collateral ratio via backing monitor** — the $10.8K surplus is razor-thin. Any drift below 100% is a red flag.
3. **Test redemption path** — verify the 10-minute redemption flow works for your position size before relying on it as an exit.
4. **Position sizing** — given the self-referential risk, avoid concentrating too heavily in OUSD relative to other stablecoins.

## Sources

- [Origin Docs — OUSD](https://docs.originprotocol.com/yield-bearing-tokens/origin-dollar-ousd)
- [Origin Analytics — OUSD Collateral](https://analytics.originprotocol.com/ousd/collateral)
- [TID Backing Monitor — OUSD](https://todayindefi.github.io/backing-monitor/?asset=ousd)
