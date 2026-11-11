---
asset: "syrupUSDC"
slug: "syrupusdc"
aliases: ["syrupUSDC", "SYRUPUSDC", "syrupUSD", "Syrup USDC", "Maple Syrup"]
chains: ["eth", "sol", "arb", "base", "monad", "ink", "tempo", "robinhood", "arc"]
category: "vault-share"
underlying_assets: ["USDC"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
date: "2026-04-25"
last_verified: "2026-09-06"
last_revised: "2026-10-31"
featured: false
production: true
issuer: "Maple International Operations SPC"
market_cap_approx: 937168430
axis_frame: six
volatility_score: 8.5
backing_score: 6.5
structural_score: 4.5
redemption_score: 7.5
underlying_score: 5.5
liquidity_score: 7.0
issuer_score: 5.5
overall_score: 6.5
# Structural review: 2026-10-31; historical financial update: 2026-10-30; assessment basis: 2026-10-29; authority walk: 2026-09-06; assurance: 2026-10-03.
# Legacy redemption_score remains evidence for Liquidity & Exit, not a seventh displayed axis.
# PARKED: issuer recourse/principals/entity-financial-audit inputs need review; 5.5 carried from riskAnalyst [owner: riskAnalyst] [since: 2026-10-13]
---

# syrupUSDC — Risk Report

**Moderate-to-low risk · 6.5/10**

[Dashboard — current conditions](https://tidresearch.com/dashboards/?asset=syrupusdc)

## Summary

syrupUSDC is a USDC-denominated share in Maple’s institutional credit and non-credit strategies. Yield accrues into NAV; credit losses, collateral/custody failure, strategy losses or underlying-token disruption can reduce value. It is not a $1 stablecoin. [syrupUSDT](/reports/syrupusdt/) shares governance and overlapping borrowers, not independent diversification.

## 1 · Stability — 8.5

syrupUSDC follows an accruing USDC net asset value rather than a fixed $1 price. Yield increases the amount of USDC represented by a share; credit or strategy losses can reduce it. A discount to NAV is therefore a different risk from a dollar stablecoin losing its peg.

The retained month of observations showed relatively small market deviations, with an average discount of 8.72 basis points. That supports close historical tracking, but sampled prices do not establish executable sale prices or behavior between observations. A prolonged discount, an impairment or disruption to USDC could change the share’s exit value.

## 2 · Backing — 6.5

The portfolio combines institutional credit with non-credit strategies. Repayment depends on borrowers, collateral realization and strategy performance; complete principal accounting does not prove that the underlying assets can be recovered at their recorded values.

Maple’s [expanded allocation mandate](https://maple.finance/insights/allocation-strategies) permits securities-backed institutional lending, receivables securitizations and spot/futures basis trading, starting with syrupUSDT. Each new strategy starts with a **5% launch cap measured against overall Maple deposits**. That is a policy limit, rather than independently verified immutable enforcement; it is neither a per-pool cap nor a combined limit on all non-credit investments. An announced strategy is not necessarily a funded position.

Securities and receivables add obligor, originator, servicing, valuation and legal-priority risks. Treasury and LP positions are investments with their own exit terms, rather than spare pool cash. Announced strategy types should not be treated as funded USDC exposure without position-level evidence.

Collateral evidence remains incomplete. The historical assessment lacked a valuation for a material WBTC-backed position, and row-level values did not reconcile to the reported aggregate. Disputed quantity definitions also affect several low collateral readings. Neither zero recognized losses nor those low readings alone resolves the custody and recovery question. There is no funded delegate first-loss buffer.

## 3 · Liquidity & Exit — 7.0

Holders can sell on secondary markets or request a primary withdrawal. Ethereum quotes have historically offered relatively efficient exits at institutional sizes, but a quote is not a completed trade. The retained successful-quote history cannot measure failed attempts, fill probability or settlement speed, and Ethereum results do not establish equivalent liquidity on other chains.

Primary withdrawals depend on cash becoming available from repayments or investment realizations and on operator processing. Accrued interest is not the same as spendable cash. The historical week ending October 29 had a median cash-plus-interest cushion of 1.34%, with 164 of 168 observations below 2%; that supports a persistent thin-buffer concern without describing today’s queue or proving a withdrawal freeze.

[Issuer disclosures](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks) describe liquidity-dependent FIFO processing and a claimed average below 24 hours, with no guaranteed maximum. Actual request-to-fill latency at size remains unmeasured. The separate syrupUSDT zero-hook finding does not establish syrupUSDC route safety or execution.

## 4 · Dependencies — 5.5

The portfolio depends on a concentrated set of borrowers and BTC-linked collateral, alongside USDC, lending infrastructure and custodians. Different borrower addresses do not necessarily represent independent firms or recovery channels. Shared borrowers and operational controls also mean syrupUSDC and syrupUSDT are not independent diversification legs.

A decline in BTC-linked collateral values can coincide with borrower distress and more difficult liquidation. USDC, PYUSD and other strategy assets add their own issuer and contract dependencies; a stablecoin label does not make a loan or investment equivalent to pool cash.

[Zodia Interchange](https://maple.finance/insights/zodia-custody-opens-interchange-to-maple) keeps pledged assets in the borrower’s segregated custody environment, with Maple relying on enforcement of its security interest. The [IRACE relationship](https://maple.finance/insights/maple-finance-selects-irace-digital-bank-for-institutional-banking-and-fiat-settlement) adds banking and fiat-settlement dependencies; Maple’s accounts do not have deposit-insurance protection. Actual loan-level custody and per-pool bank exposures are not independently mapped. Neither partnership by itself establishes safer backing or more reliable recovery.

## 5 · Contract & Admin — 4.5

Maple’s pools share important governance and administrative infrastructure. The governor can change roles through a delayed path, while securityAdmin can upgrade managers to registered implementations without the same wait. The delegate’s withdrawal-manager powers also differ from its delayed manager-upgrade path. Buying both Syrup pools therefore does not diversify these common controls.

[CCIP migration](https://maple.finance/insights/syrupusd-assets-are-upgrading-to-chainlink-ccip-2-0) changes bridge token pools while retaining token addresses. Replacement pools need their own checks of active registration, permissions, owners, delays and message-security settings. Canonical locked shares and remote liabilities must also reconcile; token supply reads alone do not prove that bridge accounting is complete. A receiver listing or roadmap does not establish working native redemption outside Ethereum.

Component audits provide evidence about reviewed code, but do not establish that every current deployment, privileged path or replacement bridge pool is covered. Emergency powers and shared operational keys remain material even where the code has been reviewed. SyrupUSDT-specific deployment assurance cannot be assumed to cover this pool, or vice versa.

## 6 · Issuer — 5.5

Maple International Operations SPC acts for Secured Loan Segregated Portfolio 1, while Syrup Ltd operates the interface. Holders rely on underwriting, custody arrangements, portfolio management and the practical enforcement of claims. Segregated legal portfolios do not segregate shared operating keys.

Maple’s operating history and disclosures provide useful context, including its earlier credit-loss experience. A combined collateral summary is not a complete entity financial audit or proof of recovery for every loan. Current loss flags do not establish a loss-free lifetime record, and contract audits do not guarantee the issuer’s creditworthiness.

## Supporting evidence — October 29, 2026

Generated from the selected public inputs linked above, using the same fields, clocks and definitions as the dashboard. The source archive is a dated review input, not a perpetual live snapshot.

Backing **2026-10-29T01:49:29Z**; collateral **2026-10-29T01:48:45Z**; quote **2026-10-29T01:33:04Z**. Instrumented collateral-field diagnostics are a separate generation and are not substituted into these financial values.

| Supporting snapshot | Value | Scope |
|---|---:|---|
| Canonical assets / NAV | $949.13M / 1.190346 | Vault accounting; USDC per share |
| All-position principal | $934.87M | 33 rows, zero principal residual |
| Credit / non-credit rows | 24 / 9 | Exact versioned address membership, not independent custody assurance |
| Classified credit principal | $898.72M | Economic version issuer_economic_usdc_v1_2026-10-29 |
| Numeric row coverage | 25/33; 94.28% / 96.27% | Principal-weighted all / classified-credit availability |
| Credit priced / full ratio | $865.22M / unavailable | $33.5M WBTC valuation missing; incomplete scope |
| Row collateral / reported aggregate | $1,103.83M / $1,612.24M | Unreconciled allocation/time/value conventions |

| Window | Raw / hourly / valid peg samples | Covered days | Peg mean / min / max (bps) | Cushion median / minimum (%) | Below 2% samples | Largest gap (hours) |
|---|---:|---:|---:|---:|---:|---:|
| 7d | 169 / 168 / 168 | 6.96 | -12.31 / -48.35 / -7.09 | 1.34 / 0.27 | 164 / 168 | 1.10 |
| 30d | 720 / 719 / 701 | 29.96 | -8.72 / -48.35 / 15.55 | 1.69 / 0.21 | 465 / 719 | 2.00 |

Month window **2026-09-29T02:45:03Z–2026-10-29T01:49:29Z**. Newest row per UTC hour; unweighted sample means/empirical quantiles. Market/reference NAV uses peg_market_price / peg_theoretical_price, not accounting nav. The 90-day request has only this retained 29.96-day window. Samples do not establish exact stress duration or intrahour behavior.

| Ethereum market-sized sell | October 29 impact (bps) | October 29 all-in signed return (bps) | Retained all-in median / IQR (bps) | Successful distinct quotes / elapsed days |
|---|---:|---:|---:|---:|
| $150,000 | -5.90 | -4.26 | -5.90 / 3.48 | 220 / 27.52 |
| $250,000 | -7.60 | -5.95 | -7.83 / 3.18 | 220 / 27.52 |
| $500,000 | -9.60 | -8.00 | -9.93 / 3.20 | 220 / 27.52 |
| $1,000,000 | -12.30 | -10.71 | -12.65 / 3.16 | 220 / 27.52 |

Impact is slippage_bps versus the smallest $1K venue rung; all-in return is (fill_ratio−1)×10,000 versus market-sized notional. Negative means cost. Neither is full loss versus NAV. Source identity stays KyberSwap / Ethereum / USDC / market anchor; quotes are deduplicated by measured_at, not producer runs. Success-only history has no failure denominator and proves neither fills nor primary latency. Primary 50bps depth is a ≥$1M floor, ladder_exhausted, not an exact crossing.

| October 29 address concentration | All positions | Classified credit |
|---|---:|---:|
| Principal denominator | $934.87M | $898.72M |
| Addresses | 17 | 15 |
| Top-1 | 21.39% | 22.25% |
| Top-3 | 51.88% | 53.97% |
| Top-5 | 72.91% | 75.84% |
| HHI | 1290 | 1388 |

Classification changes prospectively; old rows were not relabelled or backfilled. The sole membership change is $5 USDtb. Current economic membership is address-specific issuer/metadata evidence, not verified independent firms/custody. No per-loan collateral, custody or economic-concentration trend is invented from the unversioned history.


### Collateral interpretation

The October 29 assessment had **$33.5M** of unpriced WBTC-related principal. Seven material low collateral readings covered **$355M** of credit principal; a separate **$5 USTB** dust reading was not an eighth material credit incident. Issuer figures appeared consistent with `assetAmount`, while producer valuations used `currentAssetAmount`. Neither field was independently established as matched loan/custodian recovery value. The combined Network Firm summary dated October 27 covered both pools and did not fill per-loan or per-pool valuation gaps.

## Score interpretation

Overall **6.5** is held. The six displayed axes average **6.25**; the retained legacy Redemption component (7.5) gives a seven-field mean **6.4286**. The existing owner ruling is due for review November 1 or on a premise change. Legacy Redemption is folded into Liquidity & Exit, not a seventh displayed axis.

## Open evidence and review triggers

- Verify enforcement and subsequent changes to the per-new-strategy, overall-deposit launch-cap policy; distinguish new announcements from funded positions.
- Confirm loan-level custody allocation, pledged-collateral enforcement and per-pool IRACE account exposure; partnership names do not establish protection.
- Resolve currentAssetAmount versus assetAmount semantics and matched loan/custodian allocation, missing WBTC valuation and aggregate scope before claiming proved recovery coverage. Do not infer artifact or safety from PCR/zero recognized losses.
- Measure primary request-to-fill latency and USDC-specific route execution/fills/settlement/local-chain coverage. USDT evidence does not close USDC route risk.
- Reconcile bridge locks/liabilities, active registration, migration and in-flight balances across separately timed chains; totalSupply enumeration is not completeness.
- Preserve the economic-definition boundary and source clocks. Do not manufacture per-loan valuation/custody/borrower histories or replace canonical financial sources to fill a gap.

## Sources and review scope

Structural review: October 31, 2026; historical assessment basis: October 29.

The [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc) shows current conditions; this report interprets the **same selected sources and definitions** over time. The public [backing feed](https://todayindefi.github.io/backing-monitor/data/syrupusdc_backing.json), [retained history](https://todayindefi.github.io/backing-monitor/data/syrupusdc_backing_history.json) and [family feed](https://todayindefi.github.io/backing-monitor/data/syrup_family.json) provide the shared financial inputs. Source clocks differ. The dated October 29 assessment uses the selected **01:49:29 UTC** generation. Current cash, queues, APY, allocations and quote ladders are on the dashboard; historical assessment statistics retain their original windows.

This is a **targeted structural and dependency revision**, not a fresh authority or contract audit. Published last_verified remains September 6; last_revised is October 31. The source internal assessment retains its separate October 13 verification date. Authority observations remain September 6 and component assurance October 3. No USDC-specific new route/hook verification, executed exit or primary-latency measurement is claimed.

**Report scope.** The October 31 structural review covers mandate, funded strategy types, custody/settlement dependencies and migration risk. Routine cash, queue, APY and allocation readings belong on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc). Verified incidents, persistent deterioration or changed risk judgments warrant report updates; a single daily observation does not establish them.

**Historical assessment basis — October 29, 2026.** The six axes retain clearly dated baseline evidence and history windows where they support the assessment; those figures are not current dashboard readings. Authority observations remain September 6 and component assurance October 3.

## Revision history

- **2026-10-31 — Structural review.** Added the expanded mandate and correct overall-deposit, per-new-strategy launch-cap basis; strategy-specific risks; CCIP replacement-pool verification gaps; and Zodia/IRACE dependencies. Routine daily cash, queue, APY and allocation observations remain dashboard/evidence material. Historical assessment windows, scores and verification/authority/assurance dates are unchanged.

- **2026-10-30 — Financial update and snapshot chronology.** Refreshed spot assets, direct cash versus accrued interest, queue observations, quotes and dependency notes. Historical axis figures and quote/history windows retain their October 29 basis and are explicitly distinguished from the October 30 update. Numeric scores, production status and verification/authority/assurance dates unchanged.

- **2026-10-29 — BM-led common-source assessment.** Exact versioned address membership, nine-chain observation scope and retained source/history package accepted after replay. All scores held after explicit axis review. Retired stale unreviewed-classification and mixed-current-family claims; amount-field/custody, bridge, executable exits and primary latency remain unresolved. No fresh Maple role/code or USDC hook audit performed.
- **2026-10-28 — Prior common-source review.** Its financial magnitudes are historical; the earlier immutable evidence archive remains retained.
