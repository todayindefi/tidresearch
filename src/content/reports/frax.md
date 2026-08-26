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
last_revised: "2026-08-23"
peg_mechanism_score: 4.0
backing_score: 2.0
liquidity_score: 3.0
issuer_score: 5.0
overall_score: 2.5
issuer: "Frax Finance"
market_cap_approx: 132000000
featured: false
---

# Legacy Frax Dollar (FRAX) — Risk Report

**High risk · 2.5/10 · Wind-down asset, existing holders should exit**

> **This report covers Legacy Frax Dollar (FRAX, `0x853d955a…1b99e`), NOT frxUSD.** They are separate assets with separate balance sheets and separate contracts. The 1:1 FRAX→frxUSD migration path was closed in April 2025 (FIP-430). frxUSD is Frax Finance's current flagship; L-FRAX is deprecated.

Legacy FRAX is the original Frax stablecoin (launched Dec 2020), now in wind-down. Following the April 2025 "North Star" upgrade, Frax Finance separated the L-FRAX balance sheet from frxUSD and stopped offering the 1:1 swap that used to exit legacy holders into the successor. Today L-FRAX sits with **~$132M circulating supply, a 91% collateral ratio, a -$16M deficit, and only $24M of real (non-FRAX-denominated) backing** — the rest of the "backing" is the protocol holding its own token.

| Peg | Yield | Exit | Status | Chains |
|---|---|---|---|---|
| $1 nominal (trades persistently ~$0.99) | None | Curve frxUSD/FRAX pool — $4.1M depth, frxUSD-denominated (not USDC) | Wind-down (legacy) | Ethereum + 6 chains |

## Backing & solvency

**L-FRAX is under-collateralized, and the realistic backing is shrinking.**

| Metric | June 1, 2026 | **August 23, 2026** |
|---|---|---|
| Headline collateral ratio | 90.99% | **91.05%** |
| External-only CR (non-FRAX backing only) | **13.5%** | **17.1%** |
| Net deficit | −$16.3M | **−$10.88M** |
| Circular treasury (protocol holding its own token) | 77% of "backing" | **70.7%** |
| Real external assets | $24.4M | **$20.84M** |
| Total liabilities | ~$180.8M | **$121.57M** |

The headline 91% CR moves slowly, but the **External-only CR** — the share of backing that is *not* L-FRAX, sFRAX, or Frax-ecosystem tokens — fell from 15.8% in March to 13.5% in June, as real external assets went from $28.6M → $24.4M while supply contracted less.

⚠️ **Updated 2026-08-23, and the ratio has since reversed — for a reason that is not good news.** External-only CR is now **17.1%**, up from 13.5%. **But external assets did not grow. They fell again, $24.4M → $20.84M, another 14.6%.** The ratio improved because **liabilities collapsed faster: ~$180.8M → $121.57M, down 32.8% in twelve weeks.**

**Read the numerator across all three readings and the picture is unambiguous:**

| | March | June | August |
|---|---:|---:|---:|
| Real external assets | $28.6M | $24.4M | **$20.84M** |
| period change | — | **−14.7%** | **−14.6%** |
| External-only CR | 15.8% | 13.5% | **17.1%** |

**External backing has fallen by essentially the same proportion in each of two consecutive periods — about 15% a quarter, 27% since March — while the ratio measuring it fell, then rose.** The reversal is entirely a denominator effect.

**So the sentence this report previously ended on — "the deficit is widening on the axis that matters" — needs restating rather than deleting.** In dollar terms the external asset base is still shrinking, steadily and at a consistent rate, which is what that sentence was pointing at. But the *metric* it cited has moved the other way, and a reader checking the External-only CR today would find it improving and conclude the report was wrong. **Both facts are true and they point in opposite directions; the numerator is the one that describes the asset.**

⚠️ **What that adds up to is a book retiring, not one recovering or deteriorating.** Liabilities down a third, deficit down a third, circular share falling from 77% to 70.7% — every ratio improving, on a backing base that is still about **71% the protocol's own tokens**. This report already describes L-FRAX as in wind-down; what is new is that **the wind-down is now visible in the ratios themselves, and the improving ratios are a symptom of it rather than evidence against it.** A holder should not read the improvement as repair.

⚠️ **Provenance, stated because it bears on how much weight these figures carry:** they come from the issuer's API plus on-chain reads, and the independent third-party cross-check is **21.7 days old and was not attempted on this run** — it runs monthly. **These numbers are not independently corroborated**, unlike most figures in this coverage.

**The on-chain CR oracle is frozen.** The on-chain `collateral_ratio()` value reads 94.5% and has not changed since **June 19, 2023** — predating the "100% CR" vote and the North Star upgrade entirely. Any protocol reading this oracle for risk parameters is consuming a value more than three years old with no relationship to current state. The actual CR was 90.99% at the June reading — 3.5 percentage points below the stale figure — and **91.05% at 2026-08-23, a gap of 3.4 points.** ✅ **That re-read strengthens this finding rather than ageing it:** across 83 days in which liabilities fell by a third and every other ratio on this page moved, **the oracle did not move at all and the gap stayed within a tenth of a point.** It is not drifting toward correctness; it is simply frozen, and the passage of time keeps making that more demonstrable.

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

L-FRAX has traded at a **persistent discount to par** for months and has been **widening in late May**. Over the last 30 days (May 2 – Jun 1, 2026, 710 hourly PegTracker readings), the average price was $0.9928 (-0.72% deviation), with 92% of readings below $0.995 and 5.2% below $0.990. The week of May 25 alone had 17% of readings below $0.990 — the worst concentration since the Feb-Mar baseline window — and the latest reading on Jun 1 was $0.9908 (-0.92%). The discount is widening as the balance sheet's external-CR slide (15.16% → 13.5% in two months) gets repriced; the peg is the market's running estimate of real backing.

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

*This report describes Legacy FRAX as of June 1, 2026, with balance-sheet figures re-read 2026-08-23. Live balance sheet, CR, AMO positions, and Curve pool depth are on the [live dashboard](https://tidresearch.com/dashboards/?asset=frax). Frax Finance has not engaged on this report; figures are sourced from on-chain reads, the Frax Facts API, and the Frax governance forum. Corrections welcome at info@tidresearch.com.*

*Revision history: 2026-08-23 — **balance sheet re-read after 83 days; no score change.** Liabilities **~$180.8M → $121.57M (−32.8%)**, real external assets **$24.4M → $20.84M (−14.6%)**, net deficit **−$16.3M → −$10.88M**, circular treasury **77% → 70.7%**, and External-only CR **13.5% → 17.1%**. ⚠️ **The ratio improved and the thing it measures did not.** External backing fell again, by almost exactly the rate it fell the previous period — **−14.7% March→June, −14.6% June→August, −27% since March** — while liabilities collapsed twice as fast. **The reversal is a denominator effect**, and this is the fourth figure in this coverage to move favourably for a reason that does not mean what it looks like, after [Figure](/reports/figure/), [wYLDS](/reports/wylds/) and [reUSD](/reports/reusd-re/). **When a ratio moves in your favour, check which side of it moved.** "
"**The previous conclusion — "the deficit is widening on the axis that matters" — is restated rather than deleted:** the dollar external base is still shrinking steadily, which is what that sentence was pointing at, but the *metric* it cited has reversed, and a reader checking the External-only CR today would find it improving and conclude the report was wrong. The numerator is the figure that describes the asset. "
"**The reading this adds is that the book is retiring rather than recovering or deteriorating** — every ratio improving on a backing base still about 71% the protocol's own tokens. This report already described L-FRAX as in wind-down; what is new is that the wind-down is now visible in the ratios, and the improving ratios are a symptom of it. "
"✅ **And the frozen on-chain oracle finding strengthens:** `collateral_ratio()` still reads 94.5% against a computed 91.05%, a gap of 3.4 points — **unchanged within a tenth of a point across 83 days in which liabilities fell by a third.** Not drifting toward correctness; frozen, and more demonstrably so with time. "
"⚠️ **Provenance caveat, stated on the page:** these figures come from the issuer's API plus on-chain reads, with the independent third-party cross-check **21.7 days old and not attempted on this run** — it runs monthly. **They are not independently corroborated**, unlike most figures in this coverage. "
"**No axis moves:** Backing 2.0 is near the floor of the scale, and a wind-down is not obviously better for a holder than a widening deficit — the exit remains the same and the backing base remains overwhelmingly circular. `last_verified` is **not** bumped: the balance sheet was re-read but the peg series, AMO positions and Curve depth in this body still date from the 2026-06-01 pass. **This report remains staging-only** — it carries no `production` flag and is not published — though it is the analytical reference behind a public dashboard.*
