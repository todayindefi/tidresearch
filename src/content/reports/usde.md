---
asset: "USDe"
slug: "usde"
aliases: ["USDe", "Ethena USDe", "Ethena Synthetic Dollar"]
chains: ["eth", "arbitrum", "optimism", "bsc", "avalanche", "solana", "mantle", "base", "blast", "fraxtal", "xlayer", "zircuit", "morph", "ink", "ton", "berachain", "hyperevm", "plasma", "monad", "megaeth", "aptos", "ethereal"]
category: "stablecoin"
peg_mechanism: "Hybrid managed reserve with derivatives overlay"
assessment_type: "full"
date: "2026-06-10"
last_revised: "2026-10-29"
last_verified: "2026-10-11"
featured: false
production: true
issuer: "Ethena Labs"
peg_mechanism_score: 6.5
backing_score: 6.5
liquidity_score: 7.0
underlying_score: 6.0
structural_score: 5.5
axis_frame: six
issuer_score: 7.0
overall_score: 6.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usde"
---

# USDe — Risk Report

**Moderate risk · 6.5/10**

## Summary

USDe is a dollar-pegged claim on a managed reserve portfolio. It began as a predominantly
delta-neutral crypto basis trade, but its current structure combines liquid assets, institutional
custody and credit, tokenized real-world assets, and a residual CEX hedge book. The description
**“managed credit portfolio with a derivatives overlay” remains accurate**. The September 30 Risk
Committee breakdown resolves the broad mix into 74% liquid cash, 17% hedged BTC/ETH positions and
6% JAAA/STAC RWAs. The October 11 hourly feed's 79.55% liquid/unallocated and 20.45% CEX
delta-hedge collateral are dated, differently defined categories; posted collateral is not hedge
notional. Borrower-level and current asset-level exposures remain unresolved.

The September attestation is the latest integrated custodian snapshot and reconciles $4.953bn of
backing against $4.949bn supply, plus a $62.095m Reserve Fund, for 101.34% coverage including the
fund. A separate [Risk Committee quarterly update](https://gov.ethenafoundation.com/t/ethena-s-july-september-2026-governance-update/857),
published October 13, reports 101.43% including a $62.57m fund as of October 12. These are
different dated measurements. The hourly LlamaRisk overview URL began returning HTTP 404 by the
October 20 producer run; coverage and fund fields are null in the archived October 29 feed. Ethena's
[issuer dashboard API](https://app.ethena.fi/api/collateralization/status) separately reported
$4.560198405bn backing, $62.059527m Reserve Fund and $4.542907916bn supply at October 29 05:59:28 UTC:
100.3806% before and 101.7467% after the fund. This is an issuer-reported snapshot, not an
independent verification of offchain backing. The October 11 feed's 99.1682% excluding and
100.4590% including the fund are historical readings.

The overall score is 6.5. The normal peg and institutional exit work well, and the system
survived the October 2025 stress event. The constraints are a permissioned primary exit, incomplete
look-through into the managed portfolio, concentrated operational roles, and governance that can
redirect revenue without USDe-holder consent.

This is a targeted October 29 evidence and rationale revision. The last full six-axis verification remains **October 11**. Authority observations retain their October 11 scope; no new role audit, execution test or settlement-latency measurement is claimed. The [dashboard](https://tidresearch.com/dashboards/?asset=usde) and this assessment use the repaired source generation and selected route definitions described below. The source repair and dashboard publication were verified on **October 29 at 08:00:03.667 UTC** by executing the actual public renderer against freshly fetched public inputs. This verifies source ingestion, consumer selection and generated display labels; it is not independent custody verification or a visual browser review.

The October 29 archived backing files have unavailable headline coverage, and their histories end **October 14**: USDe at **14:49:58 UTC** and sUSDe at **14:50:00 UTC**, with **2,180 rows each**. This gap cannot support current backing trends. The separate peg exports extend through **October 29 05:18:41 UTC**; the daily oracle statistics end **October 28 18:18:20 UTC**. Price observations do not verify backing or execution. The issuer snapshot is separately attributed evidence. The later served generation below restores issuer observations without filling the missing interval or independently verifying custody.

The shared public inputs are the [backing feed](https://todayindefi.github.io/backing-monitor/data/usde_backing.json), [backing history](https://todayindefi.github.io/backing-monitor/data/usde_backing_history.json) and [liquidity overlay](https://todayindefi.github.io/backing-monitor/data/usde_liquidity.json). Live files can advance beyond this dated assessment.

## 1 · Stability — 6.5

The daily cache computed October 28 19:05:01 UTC has a 30-day Chainlink distribution ending
October 28 18:18:20 UTC: latest -3.05bps, range -6.51bps to 0bps, mean -3.14bps, and no sampled
breach below -50bps. Its 715 hourly rows contain only 32 distinct values. Five recorded gaps of
two to three hours limit coverage. Repeated oracle/index marks do not prove executable prices or depth.

The primary peg loop is institutional. EthenaMintingV2 supports USDC, USDT, PYUSD, USDtb, USDm,
USDG and DAI, with per-block caps. Direct users must be whitelisted; the archived October 28
measurement found 622 whitelisted benefactors and 20 minter and 20 redeemer role holders. There is no global
pause selector, but the gatekeeper can disable activity by setting caps to zero or removing roles.

The older October assessment's thirty-day executed-order sample supported near-zero-cost USDC pricing: median USDC mint spread
was +0.03bps and median redemption spread -0.09bps. This is realized behavior, not an onchain fee
guarantee; each RFQ carries its own signed terms.

## 2 · Backing — 6.5

USDe is backed by a managed mix of liquid assets, custody and credit claims, tokenized RWAs and hedged positions. Dated custody totals and issuer snapshots have different scopes.

### September 27 attestation

| Component | Amount |
|---|---:|
| Copper | $668.0m |
| Ceffu | $675.0m |
| Anchorage Digital Bank | $657.0m |
| Kraken Custody | $0.042m |
| Ethena × FalconX SPV | $236.0m |
| Ethena onchain-wallet bucket | $2.620bn |
| Ripple Prime FCM margin | $7.9m |
| Mint/redeem inventory | $89.23m |
| **Total backing** | **$4.953bn** |
| Reserve Fund | $62.095m |
| USDe supply | $4.949bn |

The attestation establishes custody totals and reconciliation, not every underlying instrument.
The FalconX SPV is held across Anchorage, BitGo and Kraken; Ripple Prime is exchange margin rather
than custody. The September 30 Risk Committee report subsequently identifies JAAA/STAC as a $0.28bn
combined RWA sleeve. Institutional-credit terms, borrower concentrations, current sleeve weights
and derivatives notional remain unresolved.

The October 12 Risk Committee update puts the Reserve Fund at $62.57m, or 1.314% of supply, against
a $45.7m recommended size (1.4 times). The recommendation rose from $2.84m in May as the framework
added an RWA buffer and a $20m PSM buffer and reflected a larger perp book. The Risk Committee's 101.43% backing
ratio has a different source and timestamp from the hourly feed. Restored hourly coverage uses the separately labelled October 29 issuer source, not that committee snapshot.
The October 29 issuer snapshot has about 2.62% less supply and 0.3177 percentage points higher
including-fund coverage than the October 21 issuer snapshot. This does not establish improved
portfolio safety, a loss, fund-flow attribution or a new Reserve Fund adequacy assessment. In the initial archived generation, producer onchain supply agreed with issuer supply to rounding; the dashboard’s separate supply RPC call returned 403. That failed probe is not the later successful canonical supply measurement documented below, whose time and denominator differ from the issuer snapshot.

The published fee-switch average reproduces exactly from 340 observations between September 30
15:50:05 and October 14 14:49:58 UTC. Its October 28 19:13:40 UTC runtime is not the window end.
Current milestone status must remain stale/unavailable until a complete wall-clock-anchored window
is supplied; governance activation additionally requires authoritative evidence. The historical
proposal review found no ratified reserve-adequacy condition. The producer's threshold citation is
secondary reporting, not an authoritative governance-state check.

The October 29 archive tracks all **13 disclosed reserve accounts**, approximately **$2.147bn** in aggregate. This is an incomplete backing population. The approximately **$42.019m onchain Reserve Fund subset** is not the full issuer-reported $62.060m fund; the difference alone is not a shortfall. Seven accounts lack September 27 reconstruction, so historical drift is unmeasured.

## 3 · Liquidity & Exit — 7.0

USDe has a permissioned primary mint/redeem path and a permissionless secondary market. The
October 28 19:13:37 UTC measurement found nonzero mint/redeem caps. This is configuration evidence,
not a new realized-fill or settlement-latency test; historical USDC RFQ pricing remains dated above.

The archived October 29 **04:30:22 UTC** Ethereum USDe→USDC base ladder tests through $5m, with a nested 50-bps
result clearing that rung. This is a sampled floor, not a located crossing. Its legacy top-level
depth description still uses 200 bps; this metadata discrepancy requires producer reconciliation.
The venue-only USDe liquidity overlay does not replace the base ladder in the saved dashboard consumer.
The base quote provider is KyberSwap. Legacy impact is total fill impact against the venue’s smallest quoted rung, excluding that rung’s own spread; all-in signed return uses output USD divided by notional. Both the legacy 200-bps and nested 50-bps results use total fill impact; neither is a marginal-impact crossing. Their threshold labels must remain separate. The saved overlay inventory is dated October 29 00:10:21 UTC and does not replace the base quote clock.

The older inventory enumerated 55 dollar-exit pools across ten chains. Venue TVL is not executable
depth or chain-local capacity. Liquidity 7.0 is carried unchanged while source-level threshold definitions remain under review; the evidence does not establish a fresh capacity limit or execution assurance. Quotes are
not simulations, fills or settlement proof.

## 4 · Dependencies — 6.0

USDe depends on a bounded but overlapping set: stablecoin settlement assets, institutional
custodians, off-exchange providers, institutional borrowers, tokenization platforms and CEX venues.
Role overlap reduces effective diversification because some firms appear in custody, credit,
execution or distribution roles simultaneously.

The September attestation refreshed custody totals. The October 13 Risk Committee update adds a
September 30 broad asset split and reports that institutional lending reached 8% of liquid cash,
while Binance represented the largest hedge venue. It does not provide borrower-level exposure.
Dependencies remains 6.0: the set is named and credible, but only partly substitutable and not fully
enumerable by exposure.

The October 11 review recorded 21 configured LayerZero peers beyond Ethereum. Aptos, TON and Ethereal supplies are
unmeasured; together with in-flight amounts they sit inside a $534.9m unattributed portion of the
adapter-locked balance. They are not recorded as zero.

## 5 · Contract & Admin — 5.5

The October 11 authority review found that on Ethereum, USDe is not upgradeable: implementation, admin and beacon slots are zero and verified
code exposes no upgrade path. Full-reach owner and EthenaMintingV2 administration passes through a
24-hour TimelockController. Its proposer and sole canceller are the same 5-of-10 Dev Safe, so the
delay provides notice but no independent veto.

The Dev Safe also has an immediate whitelisted-execution path limited to listed negative-control
and benefactor selectors. Operational roles act immediately but remain bounded by signed orders,
supported collateral, tolerances and caps. Contract/Admin remains 5.5.

Several newly enumerated peers do not yet have authority walks; no authority is inferred by analogy.

The [published audit library](https://docs.ethena.fi/resources/audits) documents code-review activity. Exact privileged-role/deployed-version and bounty-exclusion coverage was not re-established in this targeted revision; full path-by-path documentation reconciliation remains incomplete.

## 6 · Issuer — 7.0

Ethena has a public team, institutional partners, repeated attestations, mature monitoring, and a
demonstrated response to the October 2025 stress event. Those support 7.0.

Snapshot proposal `0xcb6b9ed95bf0c64b6101ff7d3a770af86e07701d8419b541cf91a6894022f2a3`
replaced the Risk Committee's earlier fee-switch parameters. It passed with 17.786m votes, no
opposition and 88 voters; one account exceeded quorum alone. The schedule diverts 5% of gross
protocol revenue at $7.5bn supply, rising to 20% at $20bn. These are historical proposal terms;
current activation is not established by the stale measured average. USDe holders do not vote
in that body. This update does not constitute a new governance or authority audit.

The [USDe terms](https://docs.ethena.fi/resources/usde-terms-and-conditions) name **Ethena BVI Limited** as issuer and distinguish onboarded Mint Users from ordinary Holding Users, who have no direct issuer-redemption right. Current principals, corporate financial-audit coverage, governing-law/dispute provisions and comprehensive conduct history were not freshly investigated. Protocol attestations are not a corporate financial audit.

## Served-source observations — October 29

The publicly served **07:02:10 UTC generation** contains the same **05:59:28 UTC issuer snapshot** used above: $4,560,198,405.35 backing, $62,059,526.94 Reserve Fund and $4,542,907,916.34008 issuer-USD supply denominator. Coverage is **100.3806% excluding / 101.7467% including the fund**. These are issuer-reported amounts, not independently verified offchain custody.

Canonical USDe supply is separately **4,543,971,515.530076 USDe tokens** at Ethereum block **26,296,767**, block time **07:01:23 UTC**. It includes adapter-locked tokens; remote supplies must not be added. The approximately **0.0234% difference** from the older issuer denominator has different clocks and units, not an independently established backing shortfall. Coverage uses the issuer's own same-snapshot denominator.

At that block, sUSDe has **951,705,614.5658604 shares**, **1,194,804,931.2529356 USDe assets** and **1.255435412974809 USDe/share NAV**. This later observation is separate from the earlier 05:53:11 UTC vault snapshot and from the unchanged oracle and realized-growth clocks. Missing executable dollar prices remain unavailable; neither NAV nor par substitutes for an executable dollar mark.

Both served backing histories retain their **2,180 original rows** and append **two acquired rows**, at **07:00:29 and 07:02:10 UTC**. The source transition is explicit; the interval from the October 14 endpoint remains missing. No history was interpolated or backfilled. The served fee-switch result is **insufficient_history**, with mean and milestone verdict unavailable. Two new samples cannot establish a trailing 14-day average, and governance activation remains independently unverified.

The repaired public payloads match the reviewed producer package. The dashboard verification records the selected **USDe→USDC** quote clock as **October 29 00:10:21 UTC**, with the **200-bps headline ≥$5m floor** and separate **50-bps ≥$5m floor**. The selected **sUSDe→USDe** quote clock is **October 28 23:49:20 UTC**, with its **50-bps $1m–$10m unresolved bracket**; the legacy approximately $3.32m result remains **200 bps**. These quote clocks are separate from producer generation and issuer observation times. The published dashboard’s selected inputs and generated display were verified against the public code on **October 29 at 08:00:03.667 UTC**: issuer attribution, separate observation clocks and units, unknown allocation, explicit history breaks, unavailable fee-switch verdict and selected liquidity definitions are visible. This closes the source-repair and dashboard-publication checks, while route-definition, precision, execution and settlement limitations remain unresolved.

## Scoring Rationale

The six displayed axes average **6.4167**. Overall remains **6.5** under the existing nearest-half-point convention. This targeted revision does not establish a new full verification.

| Axis | Score | Basis |
|---|---:|---|
| Stability / Peg | 6.5 | Stable 30-day oracle history and proven stress performance; primary arb remains permissioned and RFQ-based. |
| Backing | 6.5 | September attestation remains historical; October 29 issuer API reports 100.3806% excluding / 101.7467% including the fund. Repaired issuer-backed headlines and their dashboard display are verified; the October 14–29 acquisition gap remains. Offchain backing and current exposures remain independently unverified; score carried unchanged. |
| Liquidity & Exit | 7.0 | Nonzero primary caps and a sampled $5m Ethereum floor; legacy 200-bps metadata needs reconciliation with nested 50-bps results. No new execution or chain-local assurance; score carried unchanged. |
| Dependencies | 6.0 | Named institutional set with meaningful role overlap and incomplete exposure weights. |
| Contract & Admin | 5.5 | Immutable Ethereum token and 24-hour full-reach path, offset by no independent veto and bounded immediate roles. |
| Issuer | 7.0 | Strong operating record and verification ecosystem, offset by concentrated token governance and holder/governance misalignment. |
| **Overall** | **6.5** | Nearest half-point to the 6.42 six-axis mean. |

## Open measurements

- Independently corroborate offchain custody and allocation. Verified issuer ingestion, coverage arithmetic and onchain supply observations do not establish independently verified backing.
- Reconstruct September 27 balances for six added EVM accounts and the second Solana wallet. Current coverage of 13 disclosed accounts does not complete this historical comparison.
- Obtain an asset-level current split for loans, RWAs and derivatives notional if
  Ethena publishes one.
- Reconcile top-level 200-bps and nested 50-bps fields, preserve route and
  cost conventions, and locate a crossing only where valid. Add material chain-local ladders.
- Retain the explicit source transition and October 14–29 acquisition gap as history resumes prospectively. A complete current 14-day fee-switch window is still required; fresh computation time does not validate missing observations or establish governance activation.
- Walk newly enumerated deployments when target addresses are registered.

The October 14–29 gap prevents a continuous current coverage trend. Restored issuer observations do not independently verify offchain coverage. The dated
issuer API snapshot, attestation and Risk Committee readings remain reportable with their own scope
and timestamps.

## Revision history

| Date | Change |
|---|---|
| 2026-10-29 | Source-repair and dashboard-publication reconciliation: replaced pending-repair language with verified repaired ingestion, consumer selection and generated display; retained acquisition gap, issuer provenance, insufficient fee history and liquidity/execution limits. Scores, chain overrides and October 11 full-verification scope unchanged. |
| 2026-10-29 | Targeted shared-evidence update: dated issuer coverage, stale history and fee-window correction, current oracle statistics, route/threshold limitations. All scores held; no new full verification. |
| 2026-10-21 | Added the timestamped Ethena issuer API backing snapshot and separated it from independent producer verification. Scores held; full six-axis verification remains October 11. |
| 2026-10-20 | Partial evidence update: recorded the LlamaRisk hourly overview HTTP 404 and null live coverage, October 19 peg and fee-switch checks, and the October 13 Risk Committee publication's September 30 composition and October 12 Reserve Fund sizing. Scores held pending restored live coverage; full six-axis verification remains October 11. |
| 2026-10-11 | Completed live Solana coverage after the Solana monitoring update: the second Solana reserve wallet was $261.21m across JAAA, STAC and USDG, bringing live onchain-wallet tracking to 13/13 accounts. September 27 history remains incomplete. |
| 2026-10-11 | Closed the EVM reserve-wallet tracking gap after the EVM monitoring update: Reserve 2 restored Aave Horizon RLUSD ($152.577m) and Aave V4 ($5.931m), bringing its live total to $1.106751bn. One disclosed Solana account and six snapshot-history reads remain outside coverage. |
| 2026-10-11 | Comprehensive six-axis refresh. Ingested September attestation, multichain supply, mint/redeem measurements and authority walk. Scores held. |
| 2026-10-11 | Corrected JAAA treatment: an approved cap and fund issuance do not prove a USDe holding. Recast the old 11% derivatives figure as a dated Q1 measurement. |
| 2026-09-10 | Fee-switch vote and revenue-denominator correction completed; Issuer held at 7.0. |
| 2026-09-09 | Contract/Admin established at 5.5 from the Ethereum authority walk. |
