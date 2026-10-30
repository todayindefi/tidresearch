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
last_revised: "2026-10-30"
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
# Financial review: 2026-10-29; authority walk: 2026-09-06; assurance: 2026-10-03.
# Legacy redemption_score remains evidence for Liquidity & Exit, not a seventh displayed axis.
# PARKED: issuer recourse/principals/entity-financial-audit inputs need review; 5.5 carried from riskAnalyst [owner: riskAnalyst] [since: 2026-10-13]
---

# syrupUSDC — Risk Report

**Moderate-to-low risk · 6.5/10**

Assessed October 29, 2026. syrupUSDC is a USDC-denominated share in Maple’s institutional credit and non-credit strategies. Yield accrues into NAV; credit losses, collateral/custody failure, strategy losses or underlying-token disruption can reduce value. It is not a $1 stablecoin. [syrupUSDT](/reports/syrupusdt/) shares governance and overlapping borrowers, not independent diversification.

The [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc) shows current conditions; this report interprets the **same selected sources and definitions** over time. The public [backing feed](https://todayindefi.github.io/backing-monitor/data/syrupusdc_backing.json), [retained history](https://todayindefi.github.io/backing-monitor/data/syrupusdc_backing_history.json) and [family feed](https://todayindefi.github.io/backing-monitor/data/syrup_family.json) provide the shared financial inputs. Source clocks differ; the assessment uses an archived selected generation. This assessment uses the selected **01:49:29 UTC** source, not an independently substituted newer financial series.

This is a **targeted financial and dependency revision**, not a fresh authority or contract audit. Published last_verified remains September 6; last_revised is October 29. The source internal assessment retains its separate October 13 verification date. Authority observations remain September 6 and component assurance October 3. No USDC-specific new route/hook verification, executed exit or primary-latency measurement is claimed.

## Financial update — October 30, 2026

At **13:45:31 UTC**, canonical pool assets are **$937.17M**, 1.26% below the prior assessed snapshot. Credit principal remains **$898.72M**, with largest-borrower/top-three shares **22.25% / 53.97%**. Principal enumeration reconciles with zero residual. No impairment, call or default is reported; these flags do not independently verify borrower solvency or collateral custody.

The broader cash-plus-accrued-interest measure is **$2.30M / 0.245%** of assets. Direct pool USDC is only **$9,186.70**. Accrued strategy interest is not immediately available cash. The queue has **26 request-ID slots**; its dollar amount and request-to-fill timing are unavailable. Slot counts are not unique waiting holders or measured delays.

The indicative CoinGecko market/NAV discount is **-17.01bps**. The Ethereum $250K KyberSwap quote has **-8.20bps baseline-relative impact**, versus **-1.23bps signed all-in return against market-sized notional**. These are separate measures; neither is an executed fill or total cost against NAV. Source headline APY is **4.99%**, observed October 29 at 00:00 UTC; the October 30 backing clock does not make it a new yield observation.

Maple's [CCIP 2.0 rollout](https://maple.finance/insights/syrupusd-assets-are-upgrading-to-chainlink-ccip-2-0) replaces token pools through Q4. Replacement-pool authority, lock/liability reconciliation and migration status require verification; the announcement does not establish native mint/redeem availability outside Ethereum. The [IRACE banking relationship](https://maple.finance/insights/maple-finance-selects-irace-digital-bank-for-institutional-banking-and-fiat-settlement) adds an institutional settlement dependency, but per-pool bank balances/exposure are unestablished. The reviewed [governance forum](https://community.maple.finance/latest) concerns SYRUP buybacks and migration rather than a newly established change to these pool controls.

**Scores remain unchanged.** Thin cash and unresolved custody/collateral, bridge and execution assurance remain material. The dated sections below retain their original financial snapshots and historical statistics; the October 30 observations above supersede their spot balances, cash and queue descriptions. Authority and assurance dates are unchanged.

## 1 · Stability — 8.5

The selected price series remains CoinGecko market against **peg_theoretical_price** from the backing history. Accounting NAV and the separate peg-history export do not replace that reference. At the selected snapshot the indicative discount is **−11.52bps**. The month has **701 valid paired observations** from **719 hourly samples**, mean **−8.72bps**, range **−48.35 to +15.55bps**. Latest-week paired mean is **−12.31bps**. All retained accounting observations report zero recognized unrealized losses; that does not independently validate custody or lifetime loss performance.

**Stability stays 8.5.** Observed secondary deviations remain small relative to the accruing NAV; the classification change does not alter price behavior or create a new stablecoin peg. These samples do not prove executable prices, exact time at an extreme or behavior between observations. No 90-day conclusion is drawn from ~30 days of retained data. Sustained material discounts, impairment or a new loss channel can warrant immediate review without waiting for an average to deteriorate.

## 2 · Backing — 6.5

Canonical pool assets are **$949.13M**. All **33** manager positions sum to **$934.87M principal**, matching principalOut with **zero residual**. This verifies enumeration, not off-chain collateral or recovery value.

Version **issuer_economic_usdc_v1_2026-10-29** now identifies **24 credit records / $898.72M**, **nine non-credit strategy records / $36.15M** and no unknown principal in this snapshot. Credit requires the exact reviewed issuer loan address and matching borrower; strategies require exact address/borrower and matched metadata. Unknown/new/mismatched rows remain unknown. The sole changed membership is **$5 USDtb**, moved from the legacy heuristic loan bucket to Treasury strategy. That is a definition improvement, not economically meaningful diversification or a reason to change a score. Prior rows were not relabelled into a continuous new economic series.

**25/33 rows have numeric collateral valuations**, covering **94.28% of all principal and 96.27% of classified credit principal**. Credit priced principal is **$865.22M / $898.72M**; a **$33.5M WBTC valuation remains missing**, so full-credit collateral ratio is explicitly unavailable. Object presence or numeric availability is not independent custody, loan allocation, liquidation value or enforcement assurance.

Available row collateral sums to **$1,103.83M**, versus a **reported $1,612.24M aggregate / 172.46% ratio**. The dashboard uses the reported aggregate as its current measure; this report does not silently substitute a row-sum ratio as a new solvency metric. Scope, allocation and observation clocks remain unreconciled. Accounting PCR 100% checks agreement of vault components against totalAssets, not the amount held by each off-chain custodian.

**Seven material low collateral readings cover $355M of credit principal**. A direct below-par diagnostic also catches a separate **$5 USTB dust position**; it is not an eighth material credit-health incident. The field investigation materially narrows the ambiguity: issuer figures appear consistent with GraphQL **assetAmount**, while the producer values **currentAssetAmount** at its retained prices and scales. The report does not choose either field as recovery truth. Matched loan/custodian allocation and the meaning of the quantities remain unresolved. Zero recognized losses and zero impairment/call/default flags do not prove that low readings are artifacts; the low readings alone do not establish a proved shortfall or a loss amount.

The **$36.15M non-credit principal** is **$20M DEX LP wrappers, $16.15M PYUSD Treasury exposure and $10 combined USTB/USDtb dust**. The compatibility label liquidity means non-credit strategies, not parked cash or immediate exit capacity. Exact subtype is retained even where different roles share a token symbol; exit readiness is unmeasured. Shared-wallet balances are not independent allocations for every loan and must not be counted repeatedly.

The accessible [Network Firm summary](https://dashboard.ledgerlens.io/c/maple) is combined two-pool evidence dated October 27 01:00 UTC, not a matched per-USDC/per-loan attestation. It does not fill the WBTC null or reconcile the row/aggregate mismatch. **Funded delegate cover remains $0**.

**Backing stays 6.5 after explicit review.** Exact classification and complete principal enumeration remove earlier definition uncertainty, but the classification delta is only $5 and does not improve custody/recovery assurance. The unresolved $355M readings, unpriced WBTC, aggregate mismatch, discretionary realization and no funded first-loss cover prevent an upgrade. The amount-field conflict provides a concrete alternative explanation to economic loss but does not resolve it. No newly corroborated shortfall establishes a specific loss-based cut now. This is a confidence-limited hold, not an assumption that loss recognition must occur before a downgrade: corroborated collateral insufficiency, unusable source evidence or an impaired withdrawal can justify immediate reassessment.

## 3 · Liquidity & Exit — 7.0

The canonical source remains **KyberSwap / Ethereum / sell to USDC / market-sized notional**. The actual served merge preserves that exact exit_mark beside the venue-only inventory. The supplemental source investigation does not replace the ladder with a new quote provider, NAV anchor, par-cost series or venue TVL.

At **$250K**, selected quote **01:33:04 UTC** has **−7.60bps baseline-relative impact** and **−5.95bps all-in signed return versus market notional**. These answer different questions; neither is full cost versus NAV. The stable-valued **50bps depth is a ≥$1M floor**, ladder_exhausted, not an exact crossing. The separate 200bps field is not the primary threshold.

Retained history now has **220 distinct successful quotes per institutional rung over 27.52 days**. The $250K all-in median is **−7.83bps**, IQR **3.18bps**; the $1M median is **−12.65bps**, IQR **3.16bps**. Maximum retained quote gap is six hours. Count, duration and quoted-cost quality requirements for considering 7.5 are met, but a successful quote is not a trade, a failure-rate denominator or a primary fill-latency distribution.

Current cash-plus-interest free liquidity is **$14.26M / 1.50%**, with **$11.57M immediately held pool USDC**. The latest week has **168 hourly samples**, cushion median **1.34%**, **164/168 below 2%**. Month median is **1.69%**. A larger cash observation than yesterday does not establish a durable buffer improvement; it does not measure DEX capacity or guarantee primary processing speed. The current queue is empty with a recent fill, but neither queue pointers nor last-fill age measure a request-to-fill distribution.

[Maple’s legal disclosure](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks) describes liquidity-dependent FIFO withdrawals, a claimed sub-24h average and no guaranteed maximum. The earlier five-minute claim has not been independently timed at size. Cross-chain token enumeration and syrupUSDT’s exact zero-hook pool finding do not establish USDC’s route controls, local executable exits, fills or settlement.

**Liquidity stays 7.0.** The retained low-cost Ethereum quote distribution supports this rating, while primary latency, persistent thin observed buffer and unproved executable/local-chain settlement prevent 7.5. The refreshed source package closes neither leg by inference. Reconsider on measured primary settlement at size and comparable executable-route evidence. Cut-review triggers remain $250K all-in median worse than −25bps, dispersion above 50bps, observed primary delay beyond 24h or loss of usable canonical evidence. The $250K median here is a signed market-notional quote measure, not the impact column.

## 4 · Dependencies — 5.5

Current producer concentration declares explicit exact membership. All-position **$934.87M** has **top-1 21.39%, top-3 51.88%, top-5 72.91%, HHI 1290**, across **17 addresses**. Classified credit **$898.72M** has **top-1 22.25%, top-3 53.97%, HHI 1388**, across **15 addresses**. Addresses are not independently identified firms. The source’s reviewed economic labels do not establish independent counterparties, custodians or security control.

Credit collateral labels are **BTC 79.87%, WBTC 3.73%, XRP 10.75%, ETH 5.65%**. BTC-linked principal remains **83.60%**. The $5 membership correction cannot explain meaningful risk improvement; contraction/composition and the definition break must be separated before trend claims. There is no continuous comparable borrower/custody/valuation history in the export.

Both family books now have declared per-pool economic versions. On **$1,247.63M all-position principal**, family top-1/top-3/top-5 are **16.03% / 43.03% / 59.06%**, HHI **938**. On **$1,113.77M classified-credit principal**, they are **17.96% / 48.20% / 66.15%**, HHI **1111**. The earlier mixed legacy-USDC/versioned-USDT label is superseded for this current snapshot; it remains true of the old archive, not a reason to relabel history. Issuer/metadata membership is still not independently verified economic/custody allocation, and incomplete family credit collateral ratios remain unavailable.

**Dependencies stays 5.5.** Concentrated BTC-linked collateral, common keys/custody channels and overlapping borrowers remain load-bearing. Exact address labels remove a definition gap without establishing diversification or a new independent risk layer; the updated concentration level does not warrant an additional half-point move. Collateral-field uncertainty is assessed on Backing rather than charged a second time here. Reopen for verified new counterparty/custody linkage, materially changed exposure or a resolved economic classification that changes the actual population rather than metadata alone.

## 5 · Contract & Admin — 4.5

The pools share MapleGlobals, governor, securityAdmin and permission infrastructure; delegate EOAs differ. Current named governor/securityAdmin/delegate addresses match the earlier record. That is not a fresh membership, module, role or bypass-path audit. The **September 6 authority walk** remains the basis for the two-governor-role-EOA path, recorded three-day delay, undelayed securityAdmin manager route to registered implementations, and differing delegate manager/withdrawal powers. A shared control path is not diversified by holding both pools.

**Contract & Admin stays 4.5.** The **October 3 component-assurance work** does not prove full audited-build-to-live-bytecode assurance. Historical bounty and audit scope are not re-dated by this financial review and cannot offset surviving privileged paths. The USDT exit-pool zero-hook result is not a USDC pool finding. No new USDC route/hook audit, executable swap or Maple role walk was performed.

All **nine declared USDC networks** now return supply observations: Ethereum, Solana, Arbitrum, Base, Monad, Ink, Tempo, Robinhood and Arc. Canonical Ethereum shares include bridge locks; remote tokens are representations. Additive totals, chain-resident percentages and reconciliation ratios stay unavailable/incomplete. Successful asynchronous token reads do not prove current bridge locks/liabilities, replacement-pool authority, migration completeness or in-flight settlement. Supply enumeration adds coverage information, not executable exits or control assurance.

## 6 · Issuer — 5.5

Maple International Operations SPC acts for Secured Loan Segregated Portfolio 1; Syrup Ltd operates the interface. **Issuer stays 5.5** on underwriting/custody/realization discretion, operating record and Maple’s v1 credit-loss history. Versioned issuer/metadata labels and the combined collateral summary are useful evidence of disclosure, not an independently audited balance sheet, custody allocation or guaranteed recourse. Legal portfolio separation does not segregate shared operating keys. Contract audits and bounty receive no issuer-score credit; no new full entity-financial or legal-recovery assurance is established in this targeted revision.


## Shared quantitative evidence — October 29, 2026

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
| Free-liquidity measure / pool cash | $14.26M / $11.57M | Cash plus interest / held USDC; not DEX capacity |

| Window | Raw / hourly / valid peg samples | Covered days | Peg mean / min / max (bps) | Cushion median / minimum (%) | Below 2% samples | Largest gap (hours) |
|---|---:|---:|---:|---:|---:|---:|
| 7d | 169 / 168 / 168 | 6.96 | -12.31 / -48.35 / -7.09 | 1.34 / 0.27 | 164 / 168 | 1.10 |
| 30d | 720 / 719 / 701 | 29.96 | -8.72 / -48.35 / 15.55 | 1.69 / 0.21 | 465 / 719 | 2.00 |

Month window **2026-09-29T02:45:03Z–2026-10-29T01:49:29Z**. Newest row per UTC hour; unweighted sample means/empirical quantiles. Market/reference NAV uses peg_market_price / peg_theoretical_price, not accounting nav. The 90-day request has only this retained 29.96-day window. Samples do not establish exact stress duration or intrahour behavior.

| Ethereum market-sized sell | Latest impact (bps) | Latest all-in signed return (bps) | Retained all-in median / IQR (bps) | Successful distinct quotes / elapsed days |
|---|---:|---:|---:|---:|
| $150,000 | -5.90 | -4.26 | -5.90 / 3.48 | 220 / 27.52 |
| $250,000 | -7.60 | -5.95 | -7.83 / 3.18 | 220 / 27.52 |
| $500,000 | -9.60 | -8.00 | -9.93 / 3.20 | 220 / 27.52 |
| $1,000,000 | -12.30 | -10.71 | -12.65 / 3.16 | 220 / 27.52 |

Impact is slippage_bps versus the smallest $1K venue rung; all-in return is (fill_ratio−1)×10,000 versus market-sized notional. Negative means cost. Neither is full loss versus NAV. Source identity stays KyberSwap / Ethereum / USDC / market anchor; quotes are deduplicated by measured_at, not producer runs. Success-only history has no failure denominator and proves neither fills nor primary latency. Primary 50bps depth is a ≥$1M floor, ladder_exhausted, not an exact crossing.

| Current address concentration | All positions | Classified credit |
|---|---:|---:|
| Principal denominator | $934.87M | $898.72M |
| Addresses | 17 | 15 |
| Top-1 | 21.39% | 22.25% |
| Top-3 | 51.88% | 53.97% |
| Top-5 | 72.91% | 75.84% |
| HHI | 1290 | 1388 |

Classification changes prospectively; old rows were not relabelled or backfilled. The sole membership change is $5 USDtb. Current economic membership is address-specific issuer/metadata evidence, not verified independent firms/custody. No per-loan collateral, custody or economic-concentration trend is invented from the unversioned history.


## Score interpretation

Overall **6.5** is held. The six displayed axes average **6.25**; the retained legacy Redemption component (7.5) gives a seven-field mean **6.4286**. The existing owner ruling is due for review November 1 or on a premise change. Legacy Redemption is folded into Liquidity & Exit, not a seventh displayed axis.

## Open evidence and review triggers

- Resolve currentAssetAmount versus assetAmount semantics and matched loan/custodian allocation, missing WBTC valuation and aggregate scope before claiming proved recovery coverage. Do not infer artifact or safety from PCR/zero recognized losses.
- Measure primary request-to-fill latency and USDC-specific route execution/fills/settlement/local-chain coverage. USDT evidence does not close USDC route risk.
- Reconcile bridge locks/liabilities, active registration, migration and in-flight balances across separately timed chains; totalSupply enumeration is not completeness.
- Preserve the economic-definition boundary and source clocks. Do not manufacture per-loan valuation/custody/borrower histories or replace canonical financial sources to fill a gap.

## Revision history

- **2026-10-29 — BM-led common-source assessment.** Exact versioned address membership, nine-chain observation scope and retained source/history package accepted after replay. All scores held after explicit axis review. Retired stale unreviewed-classification and mixed-current-family claims; amount-field/custody, bridge, executable exits and primary latency remain unresolved. No fresh Maple role/code or USDC hook audit performed.
- **2026-10-28 — Prior common-source review.** Its financial magnitudes are historical; the earlier immutable evidence archive remains retained.
