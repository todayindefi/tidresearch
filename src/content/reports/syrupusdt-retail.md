---
asset: "syrupUSDT"
slug: "syrupusdt"
aliases: ["syrupUSDT", "SYRUPUSDT", "Syrup USDT", "Maple Syrup USDT"]
chains: ["eth", "plasma", "mantle", "bsc", "ink"]
category: "vault-share"
underlying_assets: ["USDT"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
date: "2026-05-03"
last_verified: "2026-09-06"
last_revised: "2026-10-31"
featured: false
production: true
issuer: "Maple International Operations SPC"
market_cap_approx: 298172891
axis_frame: six
volatility_score: 8.5
backing_score: 6.0
structural_score: 4.5
redemption_score: 6.5
underlying_score: 4.0
liquidity_score: 6.0
issuer_score: 5.5
overall_score: 6.0
# Structural review: 2026-10-31; historical financial update: 2026-10-30; assessment basis: 2026-10-28; authority walk: 2026-09-06; assurance: 2026-10-03.
# Legacy redemption_score remains evidence for Liquidity & Exit, not a seventh displayed axis.
# PARKED: issuer recourse/principals/entity-financial-audit inputs need review; 5.5 carried from riskAnalyst [owner: riskAnalyst] [since: 2026-10-13]
---

# syrupUSDT — Risk Report

**Moderate risk · 6.0/10**

Structural review: October 31, 2026; historical assessment basis: October 28. syrupUSDT is a USDT-denominated share in Maple’s lending and supporting-strategy portfolio. It accrues yield into NAV and is not a dollar-pegged stablecoin. Borrower default, strategy losses, collateral/custody failure and underlying-token disruption can reduce value. [syrupUSDC](/reports/syrupusdc/) shares governance and overlapping borrower addresses; it is not an independent diversification leg.

The [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt) shows current conditions. This report assesses persistence and structure from the **same selected files, price references and liquidity conventions**, from the public [base feed](https://todayindefi.github.io/backing-monitor/data/syrupusdt_backing.json), [retained history](https://todayindefi.github.io/backing-monitor/data/syrupusdt_backing_history.json) and [family feed](https://todayindefi.github.io/backing-monitor/data/syrup_family.json). Source times differ; these are dated review inputs.

The October 28 corrected shared inputs use address-specific issuer/metadata classifications and keep canonical supply separate from remote representations. Credit collateral coverage and bridge reconciliation remain incomplete. The classification change is a definition break, not a historical improvement or deterioration in the same population.

The published verification date remains **September 6**, with this structural revision dated **October 31**. The historical assessment below retains its October 28 evidence basis. Authority observations remain September 6 and component assurance October 3. No timed redemption or fresh Maple role walk was performed. A subsequent dated exit-pool check establishes zero hook for the exact sampled Ethereum pool.

**Report scope.** The October 31 structural review covers mandate, funded strategy types, custody/settlement dependencies and migration risk. Routine cash, queue, APY and allocation readings belong on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt). Verified incidents, persistent deterioration or changed risk judgments warrant report updates; a single daily observation does not establish them.

**Historical assessment basis — October 28, 2026.** The six axes below retain clearly dated baseline evidence and history windows where they support the assessment; those figures are not current dashboard readings. Authority observations remain September 6 and component assurance October 3.

## 1 · Stability — 8.5

The dashboard selects the public backing history’s **peg_market_price / peg_theoretical_price**, with no accounting-NAV substitution. The October 28 corrected snapshot has market price **1.145003**, reference NAV **1.150159** and a **−44.83bps discount**; accounting NAV is separately **1.150163**. These price and accounting clocks need not coincide. The source APY is an observation, not a guaranteed rate.

The retained month has **701 valid paired observations**, mean discount **−12.62bps**, range **−65.64 to −1.07bps**. The latest week has 169 valid hourly pairs, mean **−17.33bps**. The largest observed discount exceeds 50bps, so the report does not describe every observed price as inside that level. These indicative samples do not establish sustained duration at the worst price, executable fills or behavior between reads. All retained accounting observations show zero recognized unrealized losses; that does not independently verify collateral or lifetime loss performance.

**Stability stays 8.5.** The share accrues yield and the observed deviations are relatively small discounts to a moving NAV, not loss of a $1 peg. A sustained material discount, impairment or new loss channel can require immediate review; unavailable 90-day history is not inferred from the month retained here.

## 2 · Backing — 6.0

Maple's [expanded allocation mandate](https://maple.finance/insights/allocation-strategies), announced September 2, 2026, adds securities-backed institutional lending, receivables securitizations and spot/futures basis trading, starting with syrupUSDT. The initial limit is **5% per new strategy of overall Maple deposits**, not 5% of each pool or all non-credit assets combined. This is announced policy, not independently verified immutable enforcement. Announcement alone does not prove a strategy is funded.

Securities and receivables introduce obligor/originator, valuation, servicing, SPV priority and legal-recovery risks. Basis trading introduces broker/venue custody, margin funding, basis compression and forced-unwind risk. A directionally hedged position can still lose money or delay realization. LP and Treasury strategy balances are invested assets whose exit terms matter; the dashboard's historical “liquidity” classification must not be read as immediately available pool cash.

The reviewed USDT book establishes a funded basis-trading sleeve, so its risks belong in this report rather than only in a roadmap discussion. Its metadata reports a 30-day notice term; contractual and operational confirmation remains required. This is a position-level liquidity term, not a holder withdrawal SLA or a proved lock on the entire pool. Assess broker/venue identities, gross leverage, margin arrangements and enforceable unwind rights before treating it as cash-like backing. Metadata identifies a BTC basis trade associated with CME/Coinbase; that is issuer/metadata attribution, not independent confirmation of the complete broker, custody or margin chain. Funding needs, counterparty failure, adverse basis moves and liquidation timing can constrain realization despite a directional hedge.

Canonical pool assets were **$318.67M** at **2026-10-28T15:03:04Z**. Enumerated principal is **$312.76M**, reconciling to principalOut with **$0 residual**. Complete principal accounting does not verify custody or recovery value.

**Seven of 18 records have numeric collateral USD values**, covering **59.17% of all enumerated principal** and **76.75% of classified credit principal**. Unpriced principal is **$127.71M**, including the $50M USDC credit position and non-credit wrappers. The credit coverage field is explicitly incomplete: **$165.05M of $215.05M** credit principal has valuations; the full-credit collateral ratio stays unavailable. Numeric presence does not verify custodian balances, enforceability or realizable collateral.

Available row valuations sum to **$290.91M**, versus the source’s **$418.54M aggregate / 133.82% reported collateral ratio**. Scope, missing values and conventions remain unreconciled. The aggregate is not an independently proved credit recovery buffer. Zero recognized losses and zero current impairment/call/default flags do not settle that discrepancy. The accounting PCR of 100% checks vault components against totalAssets, not off-chain collateral.

**The corrected classification is address-specific but is not independent economic verification.** Version **issuer_economic_v2_2026-10-28** assigns **$215.05M / seven records to credit** and **$97.71M / eleven records to non-credit strategies**, with no unknown principal in this snapshot. The compatibility label liquidity includes Treasuries, trading, DeFi, LP and intercompany positions; it does not mean immediately withdrawable cash. [Maple’s transparency](https://maple.finance/transparency/products/syrupusdt) and exact position metadata support the $50M USDC credit classification, USDtb Treasury classification and BTC basis-strategy classification. Current position amounts are available on the dashboard. Issuer assertions and metadata are not independently verified custody evidence. The old heuristic history is not relabelled using today’s membership.

The at-par Set B is **47.23% of all enumerated principal**. This initial-collateral-level grouping is separate from economic categories and the non-credit-strategy share. Collateral posted at 100% provides no initial overcollateralization cushion; a stablecoin label does not make the claim pool cash.

A [Network Firm summary](https://dashboard.ledgerlens.io/c/maple) is now readable, dated **October 27, 01:00 UTC**, and describes **$2.11B combined collateral for both pools**. This retires the blanket claim that a current summary cannot be retrieved. It is not a retrieved per-loan attestation, matched per-pool allocation or proof that all unvalued positions are covered. No additional per-pool coverage credit is awarded from its headline alone.

**Backing stays 6.0.** Complete principal accounting and limited positive collateral evidence remain, while substantial unpriced principal, incomplete credit coverage, operator-controlled realization and **$0 funded delegate cover** constrain confidence. The classification correction does not establish a new loss or justify an upgrade. Corroborated shortfalls or persistent loss of usable evidence can justify a cut before formal default; differently defined snapshots do not independently measure custody deterioration.

## 3 · Liquidity & Exit — 6.0

The shared source is the backing feed’s **KyberSwap Ethereum exit_mark, selling into USDT at a market anchor**. The separate venue overlay supplies inventory and disclaims replacement depth, primary exit and rating. The dashboard retains the backing feed’s exact ladder. Venue TVL is not executable depth.

At the October 28 corrected snapshot’s **$250K** rung, the **13:32:15 UTC** quote has baseline-relative impact **−1.0bps**, while all-in signed return versus market-sized notional is **+5.57bps**. The venue baseline/fair-value spread explains the difference. Neither is full cost versus NAV. The **50bps depth is a floor ≥$1M**, with ladder_exhausted status; no exact crossing was located. The separate 200bps threshold is not substituted for the primary one.

The pre-correction archive ending October 28 at 08:45 UTC retains **214 distinct successful quotes per institutional rung over 26.77 days**, maximum retained quote gap six hours. The **$250K all-in median is −10.81bps, IQR 9.57bps**; the **$1M median is −13.80bps, IQR 9.56bps**. Relative to the October 13 distribution, typical market-relative costs and spread are better, but market-anchor gaps also affect all-in returns: this is not proof that the pool curve itself deepened. The successful-quote store lacks a failure denominator; quotes are not trades or a fill-success distribution.

**October 28 route assurance supersedes the October 1-only routing gap.** The quote producer retained eight Ethereum and eight Plasma quote responses at 15:49:22–15:49:35 UTC, with raw-body hashes and exact input/output units. All sampled Ethereum sizes, including $150K–$1M, use the same single v4 pool. Independent chain verification reconstructed its PoolKey and matched the exact pool ID, zero hook, initialized state and positive active liquidity at Ethereum block **26,292,233**. StateView and direct PoolManager storage reads agree. **No nonzero-hook security review is required for this exact pool.** This is a dated route/state observation, not perpetual route exclusivity, router/token security or proof of executable depth.

Plasma has direct local quote availability through the $1M size label, with no top-level bridge hop. At Plasma block **36,261,171**, the main quoted pool’s token identities/decimals, fee, factory registration, initialized state and token custody were checked. The quotes contain unresolved nested `_ss`/buffer metadata and differing pool block references. **Executable local exit remains unproven**: exact built-route simulation, transfer/allowance behavior, fills and settlement were not established. Quote outputs are native USDT or USDT0 units before gas, not guaranteed USD amounts; no new financial ladder or NAV-based metric replaces the dashboard source. The quote and chain observations retain separate clocks and assurance scopes.

The primary route remains a liquidity-dependent withdrawal queue. The dashboard distinguishes direct cash from accrued interest and supplies current queue measurements. Cash can require replenishment from loan repayments or strategy realizations; funding, operator processing and holder priority remain separate from nominal portfolio value. Request-to-fill latency has not been independently measured. A single funding deficit or queue observation does not establish a freeze, excessive request age or changed withdrawal rights.

In the pre-correction archive ending 08:45 UTC, the month’s median cushion is **3.05%**; the latest week’s is **2.63%**, with **42/169 samples below 2%** and a **0.19% minimum**. That is a variable buffer rather than a reliably immediate primary exit. [Issuer disclosure](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks) describes FIFO processing and a claimed sub-24h average with no guaranteed maximum; the historical five-minute claim has not been independently timed.

**Liquidity stays 6.0.** Current and retained quotes support reasonably efficient Ethereum secondary exits, so “no institutional measurement” is not a valid cap. The remaining limits are primary-latency evidence, single-venue route concentration and unproved execution/settlement, alongside observed buffer variability. The improved distribution alone does not remove those constraints or justify copying syrupUSDC’s 7.0. Reassess after exact route execution assurance, measured primary settlement and continued comparable quote quality; cut on persistent deterioration, unavailable routes or prolonged measured redemptions.

## 4 · Dependencies — 4.0

[Zodia Interchange](https://maple.finance/insights/zodia-custody-opens-interchange-to-maple) separates custody from credit and relies on enforcement against pledged collateral. The [IRACE banking relationship](https://maple.finance/insights/maple-finance-selects-irace-digital-bank-for-institutional-banking-and-fiat-settlement) adds banking/settlement dependencies without deposit-insurance protection for Maple's accounts. Actual per-loan custody and per-pool bank exposures remain unestablished, so partnership announcements receive no automatic score credit.

The October 28 assessment uses the published **classified-credit concentration**: **top-1 42.89%, top-3 91.80%, top-5 100%, HHI 3089**, denominator **$215.05M**, five borrower addresses across seven credit records. Membership follows the corrected address-specific source definition; addresses are not independently identified firms. All-enumerated concentration remains separately available: **top-1 29.49%, top-3 74.81%, top-5 95.59%, HHI 2233**, denominator **$312.76M**, eight addresses including non-credit strategies.

The former loan-filtered diagnostic is superseded by the published companion table. The dashboard uses that table’s five borrowers and leaves the incomplete credit collateral ratio unavailable. Older heuristic concentration figures are historical diagnostics, not a continuous issuer-economic credit series. The October 13 all-enumerated top-3 of 69.21% remains comparable in scope to the all-position table, rather than to the new credit subset.

On the corrected credit denominator, collateral labels are **BTC 51.09%, XRP 25.66%, USDC 23.25%**. These are labels, not independently verified custody allocations. USDT, USDC, USDtb, PYUSD and aUSDT introduce distinct issuer/reserve/contract exposures. Family all-position top-1/top-3 are **15.76% / 42.31%** on **$1,268.83M**; classified-credit top-1/top-3 are **17.56% / 47.14%** on **$1,138.77M**. This October 28 family snapshot combines reviewed USDT membership with legacy unreviewed USDC heuristics and is explicitly a mixed definition. The October 29 family snapshot used in the [syrupUSDC assessment](/reports/syrupusdc/) supersedes that label for current evidence: both books now have exact versioned economic membership. The figures here retain their October 28 scope and are not relabelled or backfilled. Family credit collateral coverage stays unavailable; strategy principal is not subtracted from aggregate collateral to manufacture a credit ratio.

**Dependencies stays 4.0.** The USDT dependency bound and concentrated operator/credit/issuer exposures remain load-bearing. This review explicitly declines an extra half-point cut for the top-3 move: the existing low rating already recognizes concentrated, correlated exposure, and the current evidence mixes economic categories without an independently established new loss path. It also declines a diversification upgrade based on the lower all-enumerated top-1. Revisit after membership reconciliation or independently identified new counterparty/custody concentration. This closes the old “concentration never reviewed” backlog premise without claiming the concentration reverted or charging it to Backing a second time.

## 5 · Contract & Admin — 4.5

The [CCIP 2.0 migration](https://maple.finance/insights/syrupusd-assets-are-upgrading-to-chainlink-ccip-2-0) replaces bridge token pools while retaining token addresses. Older authority observations do not verify replacement-pool permissions, delays, verification settings or matched locks and remote liabilities. Native mint/redeem outside Ethereum remains unverified; neither the announcement nor a listed receiver address proves an operational primary exit.

The pools share MapleGlobals, governor, securityAdmin and permission infrastructure; their delegate EOAs differ. Current named governor/securityAdmin/delegate addresses match the earlier financial record, but this is not a new membership or role enumeration. The **September 6 walk** remains the authority evidence: two governor-role EOAs can reach role changes after the recorded delay; securityAdmin has an undelayed manager-upgrade route to governor-registered implementations; the delegate’s manager path does not impose the same wait on withdrawal-manager control. The recorded floor and shared authority do not diversify by buying both pools.

**Contract & Admin stays 4.5.** The **October 3** component/source-assurance work is not a full audited-build-to-live-bytecode proof, and syrupUSDT-specific instance coverage remains unestablished. Historically recorded bounty and audits are not re-verified today and cannot offset privileged routes. The exact sampled Ethereum exit pool has a verified zero hook; this closes the conditional nonzero-hook referral, not router/token safety or proof of executed swaps.

The October 28 supply observations cover **Ethereum, Plasma, Mantle, BNB and Ink**. Canonical totalAssets was **$318.67M**; Ethereum totalSupply includes bridge locks, while remote supplies are representations. The additive chain total, percentages and resident decomposition are unavailable, and reconciliation remains **incomplete**. Current documented pool identities and an Ethereum lock balance were probed separately; those asynchronous reads do not prove active router/admin registration, migration completeness, matched-block liabilities or in-flight-message reconciliation. Supply enumeration does not establish exit depth or replacement-pool authority coverage. Older authority observations cannot verify the replacement pools.

## 6 · Issuer — 5.5

The legal issuer is **Maple International Operations SPC** acting for the **Maple USDT Segregated Portfolio 1**; **Syrup Ltd** operates the interface. Issuer **5.5** remains based on operator underwriting, custody/strategy discretion, enforcement dependence, operating record and Maple’s v1 loss history. Portfolio legal separation does not segregate shared operational keys. The newly readable combined collateral summary is limited evidence, not a full entity financial audit or enforceable recovery guarantee. Contract audits and bounty are not issuer credit. Current zero recognized losses is not independent proof of loss-free history.


## Shared dashboard evidence — October 28, 2026

Corrected financial snapshot **2026-10-28T15:03:04Z**; family **2026-10-28T15:03:39Z**; Ethereum quote **2026-10-28T13:32:15Z**. The separately retained historical statistics below end at **08:45:18Z**. The classification definition changed; no classified history was spliced or backfilled.

| Supporting snapshot | Value | Definition |
|---|---:|---|
| Pool assets / NAV | $318.67M / 1.150163 | Canonical vault accounting; USDT per share |
| Enumerated principal | $312.76M | All active positions; $0 principal residual |
| Credit / non-credit strategy records | 7 / 11 | Address-specific classification version issuer_economic_v2_2026-10-28 |
| Credit / non-credit strategy principal | $215.05M / $97.71M | Non-credit does not mean immediately available cash |
| Numeric valuation coverage | 59.17% / 76.75% | Numeric collateral USD / all principal and classified credit principal |
| Numeric valuation records | 7 / 18 | Numeric presence does not verify custody |
| Unpriced principal | $127.71M | Null valuation is unknown, not zero |
| Credit collateral ratio | Unavailable | Incomplete: $165.05M of $215.05M credit principal priced |
| Global chain sum / resident shares | Unavailable | Canonical includes locked shares; remote representations are non-additive |

The following history window and statistics retain the original pre-correction archive:

| Window | Hourly samples / covered days | Discount to NAV, mean / min / max (bps) | Free liquidity, median / min (%) | Samples below 2% | Largest gap (hours) |
|---|---:|---:|---:|---:|---:|
| 7d | 169 (169 peg) / 7.00 | -17.33 / -65.64 / -6.36 | 2.63 / 0.19 | 42 / 169 | 1.10 |
| 30d | 719 (701 peg) / 30.00 | -12.62 / -65.64 / -1.07 | 3.05 / 0.06 | 137 / 719 | 2.00 |

Backing history spans **2026-09-28T08:47:09Z–2026-10-28T08:45:18Z**. Keep the newest observation per UTC hour, then use unweighted sample statistics. Peg uses **peg_market_price / peg_theoretical_price − 1**, never accounting NAV as a substitute reference. All 719 retained hourly samples show zero recognized unrealized losses; this does not verify collateral or intrahour conditions. The 90-day request has only the same 30.00 days of retained backing history; no 90-day conclusion is made.

| Ethereum sell size | October 28 impact (bps) | October 28 all-in return (bps) | Historical all-in median / IQR (bps; archive ending 08:45 UTC) | Distinct successful quotes / days |
|---|---:|---:|---:|---:|
| $150,000 | -0.60 | 5.97 | -10.41 / 9.57 | 214 / 26.77 |
| $250,000 | -1.00 | 5.57 | -10.81 / 9.57 | 214 / 26.77 |
| $500,000 | -2.00 | 4.57 | -11.80 / 9.57 | 214 / 26.77 |
| $1,000,000 | -4.00 | 2.57 | -13.80 / 9.56 | 214 / 26.77 |

Impact is the dashboard’s **slippage_bps**, relative to the venue’s smallest $1,000 rung. All-in signed return is **(fill_ratio − 1) × 10,000**, versus market-sized notional; negative means cost. Neither is a NAV-based exit loss. Historical all-in and impact are kept separate. Deduplicate by quote measured_at, with source/chain/pair/market-anchor identity fixed. Successful quotes do not measure execution success or fill latency.

The producer’s **50bps depth is a floor of at least $1M**, with ladder_exhausted status; it is not an exact crossing. The separate 200bps field is not the stable-valued primary threshold. The venue inventory’s venue-only overlay deliberately publishes no depth, primary exit or rating; BM retains the backing feed’s ladder.

| Borrower address concentration | All enumerated principal | Published classified credit |
|---|---:|---:|
| Denominator | $312.76M | $215.05M |
| Addresses | 8 | 5 |
| Top-1 | 29.49% | 42.89% |
| Top-3 | 74.81% | 91.80% |
| Top-5 | 95.59% | 100.00% |
| HHI | 2233 | 3089 |

The corrected companion declares exact included and excluded position addresses. Concentration is recomputed against those members and checked against the served source. This is a definition break from the earlier heuristic diagnostic; no retrospective economic reclassification or per-position trend is implied. Addresses are not independently identified legal counterparties.

## Score interpretation

Overall **6.0** is held. The six displayed axes average **5.75**; the retained legacy Redemption component (6.5) gives a seven-field mean of **5.8571**. The existing exception is due for review November 1 or when its axis premises change. Legacy Redemption is folded into Liquidity & Exit, not a seventh displayed axis.

## Open evidence and review triggers

- Verify enforcement and subsequent changes to the per-new-strategy, overall-deposit launch-cap policy; distinguish new announcements from funded positions.
- Confirm loan-level custody allocation, pledged-collateral enforcement and per-pool IRACE account exposure; partnership names do not establish protection.
- Confirm basis-position gross leverage, margin funding/custody and contractual notice/unwind rights; its reported 30-day notice is not a holder withdrawal SLA.
- Independently corroborate custody, issuer metadata and basis-position counterparties, margin arrangements and unwind rights. Preserve the historical classification boundary; current family membership is versioned for both pools.
- Reconcile current locks, remote liabilities and in-flight transfers at aligned blocks; verify active replacement-pool registration.
- Verify exact built-route execution, transfer/allowance behavior, fills and settlement on Ethereum and Plasma; monitor route changes and liveness. The sampled Ethereum pool has verified zero hook; reassess hook/callback permissions if the route changes. Indexed TVL is not a fill measurement.
- Measure primary request-to-fill latency at size; obtain scoped collateral attestation/custody records rather than using a combined headline to fill nulls.
- Reassess on recognized impairment/default, corroborated shortfall, changed mandate/authority, unusable common evidence or persistent exit deterioration.

## Revision history

- **2026-10-31 — Structural review.** Added the expanded mandate and correct overall-deposit, per-new-strategy launch-cap basis; strategy-specific risks; CCIP replacement-pool verification gaps; and Zodia/IRACE dependencies. Funded basis-trading and position-level notice/unwind risks are explicit. Routine daily cash, queue, APY and allocation observations remain dashboard/evidence material. Historical assessment windows, scores and verification/authority/assurance dates are unchanged.

- **2026-10-30 — Financial update and snapshot chronology.** Refreshed spot assets, direct cash versus accrued interest, queue observations, quotes and dependency notes. Historical axis figures and quote/history windows retain their October 28 basis and are explicitly distinguished from the October 30 update. Numeric scores, production status and verification/authority/assurance dates unchanged.

- **2026-10-28 — Route-assurance wording update.** Exact sampled Ethereum pool verified with zero hook; October 1-only routing gap superseded. Plasma local quotes and dated pool checks do not establish execution or settlement. Primary-latency limitations, scores, production status and published verification dates unchanged.

- **2026-10-28 — Financial revision.** Scores unchanged. Corrected common classifications, loan-only concentration and non-additive five-chain supply fields incorporated. Earlier history retains its own observation window and classification definition. Principal accounting reconciles; credit coverage and bridge reconciliation remain incomplete. No fresh authority/hook walk or timed redemption is claimed.
- **2026-10-13 — Prior financial review.** Its magnitudes and categorical claims are historical where superseded above.
