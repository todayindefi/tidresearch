---
asset: "USG"
slug: "usg"
aliases: ["USG", "Tangent USD", "Tangent USG"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "light"
audience: "retail"
date: "2026-08-27"
last_verified: "2026-08-27"
peg_mechanism_score: 5.0
backing_score: 5.0
liquidity_score: 3.5
issuer_score: 4.0
overall_score: 4.0
issuer: "Tangent Finance"
audited_reserves: false
market_cap_approx: 4340566
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usg"
production: false
---

# USG — Asset Risk Assessment (Light)

**Category:** Stablecoin | **Peg Mechanism:** Hybrid (CDP + PegKeepers) | **Issuer:** Tangent Finance

**Live data:** [USG Backing Dashboard](https://tidresearch.com/dashboards/?asset=usg) — hourly per-market collateral, liquidation headroom, oracle divergence, and PegKeeper state.

USG is a crvUSD fork issued by Tangent Finance on Ethereum. Users mint it against collateral in isolated lending markets, and a pair of PegKeepers defends the dollar in Curve pools. Every unit is collateralised on-chain, there is no off-chain reserve, and no attestation is required to verify it — the entire book can be read from contracts. That is the strongest thing about this asset, and it is why this report can be specific where reports on custodial stablecoins cannot.

**The headline is healthy and the distribution is not.** At 2026-08-27 the aggregate collateral ratio is **131.56% conservative / 155.48% inclusive**, with **zero bad debt in any of the sixteen markets**. Read alone, that describes a comfortable book.

## The aggregate is a debt-weighted mean, and two markets carry it

Recomputing the aggregate from the per-market data returns **131.56%** — it *is* the debt-weighted mean of the individual markets, which is exactly why it conceals their spread.

| market | debt | CR | headroom to liquidation |
|---|---:|---:|---:|
| StakeDao — reUSD/sDOLA | $248,410 | 119.5% | **1.55%** |
| StakeDao — frxUSD/OUSD | $65,542 | 114.9% | **1.95%** |
| StakeDao — frxUSD/sDOLA | $351,293 | 120.0% | **2.27%** |
| Convex FXN — reUSD/fxUSD | $230,947 | 121.0% | **2.73%** |
| Curve — RLUSD/USDC | $473,015 | 114.7% | 4.68% |
| StakeDao — BOLD/USDC | $499,496 | 115.4% | 5.05% |
| Convex FXN — fxUSD/USDC | $699,999 | 116.1% | 5.64% |
| StakeDao — USDT/crvUSD | $181,373 | 127.1% | 7.72% |
| StakeDao — frxUSD/sUSDS | $500,690 | 120.3% | 8.89% |
| StakeDao — reUSD/scrvUSD | $247,806 | 144.1% | 18.37% |
| Curve — PYUSD/USDC | $500,490 | 134.6% | 18.82% |
| StakeDao — cbBTC/WBTC | $65,386 | 180.5% | 33.85% |
| StakeDao — msETH/WETH | $276,112 | 261.6% | 49.87% |

**$3,250,770 — 74.9% of the $4.34M book — sits within 10% of its liquidation threshold. $1,369,209, or 31.5%, sits within 5%.**

The two markets at the bottom of the table are the reason the average clears 130%. **msETH/WETH and cbBTC/WBTC together are $341,498 — 7.9% of debt.** Strip them and the remaining 92% of the book averages **121.74%**, against a debt-weighted liquidation floor of **113.15%**. A single aggregate ratio of 131.56% describes a portfolio in which almost no individual position is that comfortable.

One qualification that runs against the borrower: these are **market-wide aggregates**, verified against the contracts — `totalCollateral()` and `totalDebtShares()` reproduce the published figures exactly. Each row is the distance to that market's *average* LTV reaching its threshold. Individual borrowers above the market average are closer, and some may already be liquidatable. **The table understates how soon the first liquidation lands, not how late.**

## reUSD is the concentration, and there are two tokens with that ticker

Three markets are collateralised by pools containing **reUSD** — reUSD/sDOLA, reUSD/scrvUSD, and reUSD/fxUSD, totalling **$727,162, or 16.8% of the book**. Two of them are among the four thinnest positions USG holds, and **the single thinnest market in the entire book, at 1.55% headroom, is reUSD/sDOLA.**

The protocol's own monitoring flags this: *"reUSD depeg −1.02% — USG collateral cascade leading indicator."* That is the correct reading. USG's collateral is not the stablecoins themselves but **Curve LP tokens containing them**, and an LP position holding a depegging asset does not lose half its value — arbitrageurs sell the broken leg into the pool, so the pool accumulates it and the loss approaches the full position.

**The reUSD in question is Resupply's, at `0x57aB1E0003F623289CD798B1824Be09a793e4Bec`.** It is not Re Protocol's reUSD, a structurally unrelated NAV-accruing reinsurance token that shares the ticker. Anyone assessing this exposure by symbol will reach the wrong asset. Resupply's reUSD is itself a CDP stablecoin, so USG's collateral here is another protocol's debt token — a second layer of the same risk shape.

Aggregating all thirteen active markets by underlying asset, **USDC touches 50.1% of the book**, fxUSD 21.4%, frxUSD 21.1%, reUSD 16.8%, sDOLA 13.8%. Seventeen distinct assets in total. These sum past 100% because each market has two legs and either can impair it.

## The peg is defended by pools that are already skewed, with no keeper capacity

USG trades at **$0.99534, a −0.466% discount**. The mechanism meant to close that is the PegKeeper pair, and **its deployable defence capacity is currently $0** — both keepers report `debt() = 0`, meaning no POL-minted USG is outstanding to burn.

Meanwhile the Curve pools they operate in are **73.56% USG on the worst side**, against 50% at balance. A pool that heavy on one asset is one where sellers have already moved through, and the counter-side inventory — **$1,038,555 of USDC and frxUSD** — is LP-owned, not protocol-deployable. It is exit liquidity for USG holders, which matters, but it is not peg defence and should not be counted as such.

**No executable depth ladder is quoted for USG at any venue.** Pool TVL is $3.9M, but TVL is not depth, and this report does not treat it as such. The liquidity score of 3.5 reflects observed exit capacity — a single-venue, skewed pool with roughly $1.0M of counter-side inventory — not the headline TVL.

## Supply reads ten times larger than it is

`totalSupply()` returns **$44,340,302**. Real circulating supply is **$4,340,566**. The difference is the pre-minted PegKeeper ceiling buffer — a crvUSD inheritance in which the contract mints its own ceiling up front and holds it. Any tool that reads `totalSupply()` on a crvUSD fork and divides will understate the collateral ratio by an order of magnitude. Real supply equals CDP debt exactly; with POL deployment at zero, **100% of circulating USG is CDP-backed**. Staked USG (sUSG) holds $1,064,103, a subset of circulating supply rather than an addition to it.

## Oracles and paused markets

USG prices collateral through per-market oracles, and the dashboard independently recomputes each pool's NAV from its underlying balances to compare against them. **At this reading no market exceeds the 1% divergence threshold: zero divergent markets, with a maximum observed overvaluation of 0.57%.**

That is a genuine improvement rather than a quiet one — earlier the same day, two markets were divergent with a maximum overvaluation of 1.11%, the largest in StakeDao's msETH/WETH pool. Divergence at that scale is not alarming in a market carrying 49.87% headroom. It matters because **the same oracle design serves markets with under 2% headroom**, where a 1% overvaluation is most of the remaining buffer. The check is worth watching precisely when it reads clean, because that is when the thin markets are being priced on the same basis as the comfortable ones.

Two of the sixteen markets are paused. Tangent's paused-settings semantics let existing positions persist while new borrowing stops, so **a pause is a freeze rather than a wind-down** — the collateral stays, the exposure stays, and the market can be reopened. Neither paused market carries debt today.

## Issuer

Tangent Finance is a small, pseudonymous-adjacent team with no published reserve attestation — none is needed, since backing is fully on-chain, but there is also no third-party review of the market parameters that decide when liquidations trigger. Admin control over market creation, liquidation thresholds, and oracle assignment is the binding governance surface. The issuer score of 4.0 reflects a protocol whose *data* is unusually transparent and whose *governance* is not.

## How this compares to its parent

USG inherits crvUSD's architecture, and the differences are mostly ones of scale and collateral quality. crvUSD's collateral is majority blue-chip — ETH, WBTC, staked ETH derivatives — priced by an AMM designed to liquidate continuously rather than at a cliff. **USG's collateral is almost entirely other protocols' stablecoin LP tokens.** That trades one risk for another: USG's book is far less exposed to crypto beta, and much more exposed to a single peer stablecoin breaking.

The practical consequence is that USG's failure mode is not a market crash. It is one upstream issuer having a bad week. A 20% ETH drawdown would barely touch this book; a 3% reUSD depeg would put three markets at their thresholds at once.

The second inherited difference is defensive capacity. crvUSD's PegKeepers currently carry substantial debt and therefore substantial burn capacity. **USG's carry none**, which means the peg is being held by market-making and redemption arbitrage rather than by the mechanism the design nominates for it. At a −0.47% discount that is working. It is untested at a wider one.

## What holding USG involves

USG is small — **$4.34M of real supply** — and concentrated in a single Curve venue. That combination sets the practical position size well below what the collateral ratio alone would suggest. A holder large enough to matter to the pool is a holder who cannot exit it quickly, and at 73.56% USG on the worst side, some of that exit has already happened.

The staking wrapper, sUSG, holds $1,064,103 — about 24.5% of supply. Staking does not change the underlying collateral risk; it adds a wrapper layer and a yield source on top of the same book.

## Scores

| axis | score | reasoning |
|---|---:|---|
| Peg mechanism | 5.0 | CDP + PegKeeper is proven in crvUSD, but keeper capacity is $0 and pools are 73.6% skewed |
| Backing | 5.0 | Fully on-chain and verifiable, zero bad debt — but 74.9% of the book is within 10% of liquidation |
| Liquidity | 3.5 | One venue, no quoted depth, ~$1.0M counter-side inventory against $4.34M supply |
| Issuer | 4.0 | Transparent data, unreviewed parameters, concentrated admin control |
| **Overall** | **4.0** | |

## What would change this view

**Upward:** liquidation headroom widening across the thin markets rather than through new comfortable ones; PegKeeper debt becoming non-zero, giving real burn capacity; a second liquidity venue; independent review of market parameters.

**Downward:** a reUSD depeg deepening past ~2%, which would put the three reUSD markets at their thresholds simultaneously; pool skew above ~85%; any market entering bad debt, which would show that liquidations are not clearing at these headroom levels.

**The thing to watch is not the collateral ratio.** It is the gap between the aggregate and the thinnest markets. That gap has been widening while the headline stayed flat, and the headline is where most monitoring stops.

*Figures measured 2026-08-27 from on-chain contract reads. Zero bad debt confirmed across all sixteen markets. Live figures on the dashboard linked above.*
