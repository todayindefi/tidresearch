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

[Dashboard — current conditions](https://tidresearch.com/dashboards/?asset=syrupusdt)

## Summary

syrupUSDT is a USDT-denominated share in Maple’s lending and supporting-strategy portfolio. It accrues yield into NAV and is not a dollar-pegged stablecoin. Borrower default, strategy losses, collateral/custody failure and underlying-token disruption can reduce value. [syrupUSDC](/reports/syrupusdc/) shares governance and overlapping borrower addresses; it is not an independent diversification leg.

## 1 · Stability — 8.5

syrupUSDT is an accruing USDT-denominated share, not a dollar-pegged stablecoin. Its market price can trade above or below NAV, while borrower defaults, investment losses or a USDT disruption can reduce what the share is worth.

The retained month showed modest average discounts, although the largest sampled discount exceeded 50 basis points. These observations support historical NAV tracking; they do not guarantee that a holder can sell at the observed mark, or that a discount will remain small during stress. Accounting values and market prices can also have different observation times.

## 2 · Backing — 6.0

The portfolio combines institutional credit with Treasury, trading, DeFi and LP strategies. Loan balances can reconcile exactly while collateral custody, enforcement and recovery values remain uncertain. Non-credit investments are not necessarily immediately withdrawable cash.

Maple’s [expanded allocation mandate](https://maple.finance/insights/allocation-strategies) permits securities-backed institutional lending, receivables securitizations and spot/futures basis trading, starting with syrupUSDT. Each new strategy starts with a **5% launch cap measured against overall Maple deposits**. That is a policy limit, rather than independently verified immutable enforcement; it is neither a per-pool cap nor a combined limit on all non-credit investments. An announced strategy is not necessarily a funded position.

A **funded basis-trading sleeve** makes broker and venue failure, margin funding, basis compression and forced unwinds actual portfolio risks rather than just roadmap considerations. A directional hedge does not eliminate financing or realization risk. Position metadata describes a BTC basis trade associated with CME/Coinbase, but does not independently establish the complete counterparty, custody and margin chain. Its reported **30-day notice** needs contractual and operational confirmation; it is a position-level term, not an automatic lock or withdrawal promise for every holder.

The historical assessment had substantial unpriced principal and incomplete credit-collateral coverage. Available row valuations also failed to reconcile to the reported aggregate. The missing information cannot be treated as either zero collateral or a verified recovery cushion. There is no funded delegate first-loss buffer.

## 3 · Liquidity & Exit — 6.0

Ethereum secondary quotes have historically supported reasonably efficient sales into USDT. That evidence is narrower than a guaranteed exit: quoted prices can change, successful quotes do not reveal a failure rate, and neither venue inventory nor TVL establishes executable depth.

The exact Ethereum pool sampled on October 28 had a verified **zero hook**. That removes a nonzero-hook concern for that pool, while leaving router and token behavior, later route changes, fills and settlement to be established. Plasma had local quotes and pool-state evidence, but a complete executable local exit was not proved. An Ethereum ladder does not measure every destination-chain holder’s exit.

Primary withdrawals are a liquidity-dependent queue. Cash can require replenishment from loan repayments or strategy unwinds, and processing remains operator-dependent. Historical buffer variability and the basis sleeve’s notice/unwind terms can create a mismatch with holder demand. [Issuer disclosures](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks) give a claimed average below 24 hours but no guaranteed maximum; actual request-to-fill latency remains unmeasured. A single queue or cash reading does not establish a freeze or a persistent delay.

## 4 · Dependencies — 4.0

Credit exposure is concentrated among a small set of borrower addresses and is tied heavily to BTC, XRP and stablecoin collateral. Addresses are not independently identified firms, and apparently different loans can share custody, funding or recovery channels. Common keys and overlapping borrowers reduce the diversification gained from holding both Syrup pools.

The basis sleeve adds broker, exchange, margin-custody and financing dependencies. Treasury and DeFi positions add distinct issuer, protocol and liquidity risks. Their economic labels help identify the exposures but do not independently verify where assets are held or whether counterparties are separate.

[Zodia Interchange](https://maple.finance/insights/zodia-custody-opens-interchange-to-maple) keeps pledged assets in the borrower’s segregated custody environment, with Maple relying on enforcement of its security interest. The [IRACE relationship](https://maple.finance/insights/maple-finance-selects-irace-digital-bank-for-institutional-banking-and-fiat-settlement) adds banking and fiat-settlement dependencies; Maple’s accounts do not have deposit-insurance protection. Actual loan-level custody and per-pool bank exposures are not independently mapped. Neither partnership by itself establishes safer backing or more reliable recovery.

## 5 · Contract & Admin — 4.5

Maple’s pools share important governance and administrative infrastructure. The governor can change roles through a delayed path, while securityAdmin can upgrade managers to registered implementations without the same wait. The delegate’s withdrawal-manager powers also differ from its delayed manager-upgrade path. Buying both Syrup pools therefore does not diversify these common controls.

[CCIP migration](https://maple.finance/insights/syrupusd-assets-are-upgrading-to-chainlink-ccip-2-0) changes bridge token pools while retaining token addresses. Replacement pools need their own checks of active registration, permissions, owners, delays and message-security settings. Canonical locked shares and remote liabilities must also reconcile; token supply reads alone do not prove that bridge accounting is complete. A receiver listing or roadmap does not establish working native redemption outside Ethereum.

Component audits provide evidence about reviewed code, but do not establish that every current deployment, privileged path or replacement bridge pool is covered. Emergency powers and shared operational keys remain material even where the code has been reviewed. SyrupUSDT-specific audited-build-to-live-instance coverage remains unestablished; neither sibling-pool reviews nor the sampled exit pool’s zero hook closes that gap.

## 6 · Issuer — 5.5

Maple International Operations SPC acts for Maple USDT Segregated Portfolio 1, and Syrup Ltd operates the interface. Portfolio outcomes depend on underwriting, custody and strategy decisions, servicing and enforcement. Legal separation between portfolios does not remove common operational authority.

Maple’s record includes earlier credit losses as well as ongoing institutional operations and disclosure. A combined collateral headline does not guarantee recovery for this portfolio, and zero currently recognized losses do not independently establish lifetime loss performance. Complete entity-financial and legal-recovery assurance remains unestablished; code audits and bounty arrangements do not substitute for it.

## Supporting evidence — October 28, 2026

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

### Collateral and route-assurance detail

At the October 28 baseline, available row collateral values summed to **$290.91M**, versus the reported **$418.54M / 133.82%** aggregate. Their scope and conventions remained unreconciled; vault component accounting was not offchain custody verification. The combined two-pool Network Firm summary dated October 27 did not establish matched per-pool allocation or cover every unvalued position.

The October 28 route assurance observations are scoped to the sampled pools and source clocks. The quote producer retained eight Ethereum and eight Plasma quote responses at 15:49:22–15:49:35 UTC, with raw-body hashes and exact input/output units. All sampled Ethereum sizes, including $150K–$1M, use the same single v4 pool. Independent chain verification reconstructed its PoolKey and matched the exact pool ID, zero hook, initialized state and positive active liquidity at Ethereum block **26,292,233**. StateView and direct PoolManager storage reads agree. **No nonzero-hook security review is required for this exact pool.** This is a dated route/state observation, not perpetual route exclusivity, router/token security or proof of executable depth.

Plasma has direct local quote availability through the $1M size label, with no top-level bridge hop. At Plasma block **36,261,171**, the main quoted pool’s token identities/decimals, fee, factory registration, initialized state and token custody were checked. The quotes contain unresolved nested `_ss`/buffer metadata and differing pool block references. **Executable local exit remains unproven**: exact built-route simulation, transfer/allowance behavior, fills and settlement were not established. Quote outputs are native USDT or USDT0 units before gas, not guaranteed USD amounts; no new financial ladder or NAV-based metric replaces the dashboard source. The quote and chain observations retain separate clocks and assurance scopes.

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

## Sources and review scope

Structural review: October 31, 2026; historical assessment basis: October 28.

The [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt) shows current conditions. This report assesses persistence and structure from the **same selected files, price references and liquidity conventions**, from the public [base feed](https://todayindefi.github.io/backing-monitor/data/syrupusdt_backing.json), [retained history](https://todayindefi.github.io/backing-monitor/data/syrupusdt_backing_history.json) and [family feed](https://todayindefi.github.io/backing-monitor/data/syrup_family.json). Source times differ; these are dated review inputs.

The October 28 corrected shared inputs use address-specific issuer/metadata classifications and keep canonical supply separate from remote representations. Credit collateral coverage and bridge reconciliation remain incomplete. The classification change is a definition break, not a historical improvement or deterioration in the same population.

The published verification date remains **September 6**, with this structural revision dated **October 31**. The historical assessment retains its October 28 evidence basis. Authority observations remain September 6 and component assurance October 3. No timed redemption or fresh Maple role walk was performed. A subsequent dated exit-pool check establishes zero hook for the exact sampled Ethereum pool.

**Report scope.** The October 31 structural review covers mandate, funded strategy types, custody/settlement dependencies and migration risk. Routine cash, queue, APY and allocation readings belong on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdt). Verified incidents, persistent deterioration or changed risk judgments warrant report updates; a single daily observation does not establish them.

**Historical assessment basis — October 28, 2026.** The six axes retain clearly dated baseline evidence and history windows where they support the assessment; those figures are not current dashboard readings. Authority observations remain September 6 and component assurance October 3.

## Revision history

- **2026-10-31 — Structural review.** Added the expanded mandate and correct overall-deposit, per-new-strategy launch-cap basis; strategy-specific risks; CCIP replacement-pool verification gaps; and Zodia/IRACE dependencies. Funded basis-trading and position-level notice/unwind risks are explicit. Routine daily cash, queue, APY and allocation observations remain dashboard/evidence material. Historical assessment windows, scores and verification/authority/assurance dates are unchanged.

- **2026-10-30 — Financial update and snapshot chronology.** Refreshed spot assets, direct cash versus accrued interest, queue observations, quotes and dependency notes. Historical axis figures and quote/history windows retain their October 28 basis and are explicitly distinguished from the October 30 update. Numeric scores, production status and verification/authority/assurance dates unchanged.

- **2026-10-28 — Route-assurance wording update.** Exact sampled Ethereum pool verified with zero hook; October 1-only routing gap superseded. Plasma local quotes and dated pool checks do not establish execution or settlement. Primary-latency limitations, scores, production status and published verification dates unchanged.

- **2026-10-28 — Financial revision.** Scores unchanged. Corrected common classifications, loan-only concentration and non-additive five-chain supply fields incorporated. Earlier history retains its own observation window and classification definition. Principal accounting reconciles; credit coverage and bridge reconciliation remain incomplete. No fresh authority/hook walk or timed redemption is claimed.
- **2026-10-13 — Prior financial review.** Its magnitudes and categorical claims are historical where superseded above.
