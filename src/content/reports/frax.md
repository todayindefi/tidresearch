---
asset: "FRAX"
slug: "frax"
aliases: ["FRAX", "Legacy Frax Dollar", "Legacy FRAX", "L-FRAX"]
chains: ["eth", "fraxtal", "arbitrum", "optimism", "avax", "bsc", "polygon"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "light"
audience: "retail"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=frax"
date: "2026-06-01"
last_verified: "2026-06-01"
peg_mechanism_score: 4.0
backing_score: 2.0
liquidity_score: 3.0
issuer_score: 5.0
overall_score: 2.5
issuer: "Frax Finance"
audited_reserves: false
market_cap_approx: 132000000
featured: false
---

# Legacy Frax Dollar (FRAX) — Retail Risk Report

**High risk · 2.5/10 · Wind-down asset, existing holders should exit**

> **This report covers Legacy Frax Dollar (FRAX, `0x853d955a…1b99e`), NOT frxUSD.** They are separate assets with separate balance sheets and separate contracts. The 1:1 FRAX→frxUSD migration path was closed in April 2025 (FIP-430). frxUSD is Frax Finance's current flagship; L-FRAX is deprecated.

Legacy FRAX is the original Frax stablecoin (launched Dec 2020), now in wind-down. Following the April 2025 "North Star" upgrade, Frax Finance separated the L-FRAX balance sheet from frxUSD and stopped offering the 1:1 swap that used to exit legacy holders into the successor. Today L-FRAX sits with **~$132M circulating supply, a 91% collateral ratio, a -$16M deficit, and only $24M of real (non-FRAX-denominated) backing** — the rest of the "backing" is the protocol holding its own token.

| Peg | Yield | Exit | Status | Chains |
|---|---|---|---|---|
| $1 nominal (trades persistently ~$0.99) | None | Curve frxUSD/FRAX pool — $4.1M depth, frxUSD-denominated (not USDC) | Wind-down (legacy) | Ethereum + 6 chains |

## Backing & solvency

**L-FRAX is under-collateralized, and the realistic backing is shrinking.**

| Metric | Value (June 1, 2026) |
|---|---|
| Headline collateral ratio | 90.99% |
| External-only CR (non-FRAX backing only) | **13.5%** |
| Net deficit | -$16.3M |
| Circular treasury (protocol holding its own token) | 77% of "backing" |
| Real external assets | $24.4M |

The headline 91% CR moves slowly, but the **External-only CR** — the share of backing that is *not* L-FRAX, sFRAX, or Frax-ecosystem tokens — has fallen from 15.8% in March to 13.5% in June. The real external assets went from $28.6M → $24.4M in two months while supply contracted less. The deficit is widening on the axis that matters.

**The on-chain CR oracle is frozen.** The on-chain `collateral_ratio()` value reads 94.5% and has not changed since **June 19, 2023** — predating the "100% CR" vote and the North Star upgrade entirely. Any protocol reading this oracle for risk parameters is consuming a 3-year-old value with no relationship to current state. The actual CR (90.99%) is 3.5 percentage points below the stale read.

**There is no reserves audit.** The balance sheet is on-chain and publicly visible via the [live dashboard](https://tidresearch.com/dashboards/?asset=frax) and [Frax Facts](https://facts.frax.finance/frxusd/lfrax-balance-sheet), but no third-party CPA firm attests to the AMO positions, and S&P rated FRAX 5/5 (Weak) in December 2023 — the worst score among the eight stablecoins it assessed at the time.

## Exit liquidity

**The primary exit venue is Curve, the depth is thin, and the quote is in frxUSD, not USDC.**

| Venue | Depth | Notes |
|---|---|---|
| Curve frxUSD/FRAX (Ethereum) | $4.11M total ($3.87M frxUSD, $248K FRAX) | The main price-setting pool. Most FRAX has been drained to the buy side. A $1M+ sell moves the pool meaningfully. |
| Bridged FRAX on other chains | Varies, mostly thin | Cross-chain inventory exists on Fraxtal, Arbitrum, Optimism, Polygon, BSC, Avalanche via FraxFerry. Bridging back to Ethereum to exit is the practical path. |
| CEX | None to speak of | Not a listed asset on major centralized venues. |

Exit takes **two hops** for USDC: FRAX → frxUSD (Curve) → USDC (further DEX route). Each hop carries slippage, and the $4.1M Curve pool is the binding constraint — exiting a sized FRAX position pushes price through that pool before reaching frxUSD, then through frxUSD's own liquidity to reach USDC.

Practical guidance: **exit in small tranches**. The pool is already below the $5M depth threshold where round-trip slippage becomes material for retail-scale positions.

## Peg dynamics

L-FRAX has traded at a **persistent ~$0.99 discount** for months. From the Feb–Mar 2026 PegTracker window, FRAX averaged $0.9914 with the price below $0.995 for **95.8% of all hourly readings**. The price has not recovered since.

**The peg is held by passive inertia, not active defense.** The AMO Minter contract — the system designed to mint and deploy new FRAX into peg-stabilizing positions — has been **dormant since February 2023** (3+ years). Today's price is the equilibrium between existing legacy LP positions (about $55M in a Convex FRAX/USDe pool, $37M in a Compound borrow position, and a handful of smaller LPs) absorbing marginal trading flow. Nobody is actively rebalancing or defending the peg.

Governance has been clear about the priority. Every AMO-related proposal since mid-2025 has been frxUSD/sfrxUSD-specific (FIP-434, 437, 439, 443, 444). The only L-FRAX-touching governance is a May 2026 TempCheck for *early withdrawal* of inactive Convex pools — i.e. proposals about *unwinding* L-FRAX positions, not defending them.

## Admin & multisig

The FRAX token contracts and AMO comptroller are controlled by the same **Frax 3-of-5 multisig with no timelock** (`0xB1748C79…3f27`) that runs frxUSD. The multisig is active (last transaction May 28, 2026) but its activity does not prove L-FRAX peg defense — it manages both ecosystems and the policy direction is firmly toward frxUSD.

There are no new audits of the legacy AMO stack. The original CertiK audit (Oct 2020, 39 issues — 3 critical, 8 major — all addressed) predates most current deployments.

## Who it's for · Who should avoid

**For (genuinely no one in good conscience):**
- Holders with existing positions that need to be exited methodically — see Exit liquidity above.
- Specialized fixed-income operators evaluating the related **Frax Bonds (FXBs)**, which are zero-coupon claims on L-FRAX at specific future dates and trade at discounts. The wrapper isolates from new-issuance risk but inherits L-FRAX credit risk at maturity. FXBs require their own per-maturity assessment.

**Avoid if (the general case):**
- Looking for a stablecoin allocation. The 13.5% external-only CR and the absence of any active peg defense mean L-FRAX should not be treated as a $1-pegged asset in any sized position.
- Holding L-FRAX as collateral inside a third-party protocol that reads the on-chain CR oracle. The oracle is frozen at 94.5% from June 2023 — your protocol may be using a value that overstates actual collateralization by ~3.5 percentage points.
- Considering FRAX as a frxUSD substitute. They are different assets; the 1:1 migration is closed.

## What to watch

- **External-only CR.** Currently 13.5% and falling (about $1.5M/month of external assets disappearing). If it drops another $5M without supply contraction, the realistic backing position becomes meaningfully worse.
- **Curve frxUSD/FRAX pool depth.** Live on the [dashboard](https://tidresearch.com/dashboards/?asset=frax). If pool depth drops below $3M, exit liquidity is in a different regime.
- **Comptroller multisig activity.** Track the [comptroller address](https://etherscan.io/address/0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27) for sudden large withdrawals from the Convex FRAX/USDe position (~$55M) or the Curve frxUSD/FRAX LP — those are the legacy peg-support positions, and there's no governance lock preventing their reallocation to frxUSD.
- **Governance proposals touching L-FRAX.** The May 2026 TempCheck for early Convex pool withdrawal is the only L-FRAX-touching governance currently in motion. Any FIP proposing further balance-sheet separation or accelerated wind-down would be material.
- **Compound AMO leverage.** $20M USDT borrowed against $37M sFRAX collateral. The position has been steady for 2 months; a sudden change (forced unwind, liquidation pressure) would worsen the deficit.

## A note on Frax Bonds (FXBs)

L-FRAX has a related instrument worth disambiguating: **FXBs** (Frax Bonds) are zero-coupon ERC-20 tokens that redeem for exactly 1 L-FRAX at specific future dates (2026-12-31, 2027-12-31, 2029-12-31, 2055-12-31). The L-FRAX collateral is locked inside each FXB contract at mint, so redemption is contract-guaranteed for already-issued FXBs — but the asset you receive at maturity is L-FRAX, with all of the risk described above. FXBs trade at discounts that price in the L-FRAX trajectory. They are a separate decision from holding L-FRAX directly; the per-maturity dynamics matter.

---

*This report describes Legacy FRAX as of June 1, 2026. Live balance sheet, CR, AMO positions, and Curve pool depth are on the [live dashboard](https://tidresearch.com/dashboards/?asset=frax). Frax Finance has not engaged on this report; figures are sourced from on-chain reads, the Frax Facts API, and the Frax governance forum. Corrections welcome at info@tidresearch.com.*
