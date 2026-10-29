---
asset: "sUSDe"
slug: "susde"
aliases: ["sUSDe", "Staked USDe", "Ethena Staked USDe"]
chains: ["eth", "arbitrum", "base", "optimism", "bsc", "mantle", "blast", "fraxtal", "monad", "plasma"]
category: "vault-share"
underlying_assets: ["USDe"]
assessment_type: "full"
date: "2026-05-22"
last_revised: "2026-10-29"
last_verified: "2026-10-11"
featured: false
production: true
issuer: "Ethena Labs"
yield_bearing: true
volatility_score: 6.5
backing_score: 6.5
liquidity_score: 7.0
underlying_score: 6.0
structural_score: 5.5
axis_frame: six
issuer_score: 7.0
# Legacy supplemental field; its substance is folded into Liquidity & Exit.
redemption_score: 6.5
overall_score: 6.5
chain_overrides:
  arbitrum:
    liquidity_score: 5.0
  plasma:
    liquidity_score: 5.0
  blast:
    liquidity_score: 4.0
  base:
    liquidity_score: 2.5
  bsc:
    liquidity_score: 2.5
  fraxtal:
    liquidity_score: 2.0
  optimism:
    liquidity_score: 2.0
  mantle:
    liquidity_score: 2.0
  monad:
    liquidity_score: 2.0
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susde"
---

# sUSDe — Risk Report

**Moderate risk · 6.5/10**

## Summary

sUSDe is a yield-bearing claim on USDe. It has no independent reserve portfolio: Backing,
Dependencies and Issuer inherit from the USDe assessment. Wrapper risk comes from its
exchange rate, cooldown, secondary liquidity, administrative roles and use as leveraged collateral.

At Ethereum block 26,296,428 (October 29 05:53:11 UTC), the vault held 1.194843340bn USDe against
951.742305m shares, for 1.255427372 USDe per share. `totalAssets / totalSupply` matched
`convertToAssets(1e18)` at the same block. The latest daily oracle sample, October 28 18:18:20 UTC,
was 5.43bps below NAV; no sampled 30-day breach below -50bps was recorded. These are not executable prices.

The live cooldown is one day, but the contract-level maximum is **90 days**. The commonly described
1/3/5/7-day operating policy is not a hard contract cap. Delayed governance can set a longer
cooldown, while a 5-of-10 Safe has bounded immediate restriction authority.

The overall score is 6.5. Current selected Ethereum liquidity has
an unresolved broad bracket; this does not support a trend claim against older routes. Other-chain
scores remain venue-inventory judgments. The historical 52.1% Aave/Morpho/Pendle concentration is
not a current census against the newly measured share supply.

This is a targeted October 29 evidence and rationale revision. The last full six-axis verification remains **October 11**. Authority observations retain their October 11 scope; no new role audit, execution test or settlement-latency measurement is claimed. The [dashboard](https://tidresearch.com/dashboards/?asset=susde) and this assessment share the archived source observations and route definitions described below; verification against repaired live inputs is pending. Verification of the repaired source and actual served dashboard inputs remains pending; local agreement alone does not establish synchronization.

The October 29 archived backing files have unavailable headline coverage, and their histories end **October 14**: USDe at **14:49:58 UTC** and sUSDe at **14:50:00 UTC**, with **2,180 rows each**. This gap cannot support current backing trends. The separate peg exports extend through **October 29 05:18:41 UTC**; the daily oracle statistics end **October 28 18:18:20 UTC**. Price observations do not verify backing or execution. The issuer snapshot is separately attributed evidence. The later served generation below restores issuer observations without filling the missing interval or independently verifying custody.

The shared public inputs are the [backing feed](https://todayindefi.github.io/backing-monitor/data/susde_backing.json), [backing history](https://todayindefi.github.io/backing-monitor/data/susde_backing_history.json) and [liquidity overlay](https://todayindefi.github.io/backing-monitor/data/susde_liquidity.json). Live files can advance beyond this dated assessment.

## 1 · Stability — 6.5

sUSDe tracks accruing USDe NAV, not $1. The daily cache computed October 28 19:05:01 UTC has a
30-day oracle/index distribution ending October 28 18:18:20 UTC: range -9.10 to -1.67bps versus
NAV, mean -5.21bps, latest -5.43bps and no sampled breach below -50bps. Its 715 hourly samples
contain only 31 distinct values and five two-to-three-hour gaps; this is not continuous market
coverage or an executable-price distribution.

| Measure at block 26,296,428 | Value |
|---|---:|
| Shares outstanding | 951,742,304.5658604 |
| `totalAssets()` | 1,194,843,340.0313458 USDe |
| NAV | 1.2554273717783055 USDe/share |
| USDe in cooldown silo | 9,293,742.649529113 |
| Live cooldown | 1 day |
| Contract maximum | 90 days |

The vault observation was acquired October 29 05:53:28 UTC, block time 05:53:11 UTC. The same-block
ratio check supports share accounting, not dollar backing. Valid nested share measurements exist
despite null legacy share-supply fields in the archived feed; repaired summary wiring requires served verification.

## 2 · Backing — 6.5

sUSDe holds USDe and has no independent reserve portfolio. **Backing 6.5 is inherited from [USDe](/reports/usde/)**. Same-block share accounting verifies USDe per share, not underlying dollar solvency.

Ethena's [issuer API](https://app.ethena.fi/api/collateralization/status) at October 29 05:59:28 UTC
reports 100.3806% before and 101.7467% after the Reserve Fund. It is separately attributed issuer
evidence, not restored producer coverage or independent custody verification. September attestation
and October 12 Risk Committee readings remain historical. The wrapper creates no second cushion.
The disclosed wallet and onchain fund subsets are not complete backing or fund populations.

## 3 · Liquidity & Exit — 7.0

Users may initiate cooldown and later redeem for USDe. The path is not KYC-gated but is delayed.
The October 29 vault read confirms one day and a 90-day maximum. The previously verified owner
can change duration after the 24-hour delay; restriction roles can block affected holders. This
update does not newly audit roles or prove end-to-end redemption and settlement latency.

The saved dashboard consumer selects the October 28 23:49:49 UTC canonical liquidity overlay,
which explicitly publishes depth, over the base feed's direct-USDC ladder. Its route is
**sUSDe→USDe**, not a complete stablecoin exit. At the primary 50-bps marginal threshold:

- last clearing sampled rung: $1m at -4.08bps;
- first failing sampled rung: $10m at approximately -6,550.97bps;
- bracket width: $9m; precision obligation not met;
- bisection refused because the ladder is non-monotonic.

The $1m value is a clearing rung, not a located capacity limit. The same overlay's approximately
$3.32m legacy result uses 200 bps. The older October 11 approximately $3.30m 50-bps crossing and
the base feed's ≥$2m direct-USDC floor are different measurements, not interchangeable current
results. No liquidity deterioration or improvement can be inferred from this comparison.

The KyberSwap exact-input quotes return USDe units. Marginal impact is signed execution-rate deterioration from the smallest successful **$100** rung; it excludes that rung’s own spread. The separate dollar sizing anchor is same-observation NAV times a USDe/USD mark (**October 28 23:49:15 UTC**), not the impact reference. Quote metadata is dated **23:49:20 UTC**. Marginal impact, total impact, baseline spread and all-in dollar return are distinct measures. The separate USDe→USDC
ladder tests through $5m, but combining two quotes is non-atomic and does not establish a current
complete-exit crossing. Simulation, fills and settlement remain unproven.

Historical venue inventory found $0.68m independently fiat-backed counter inventory versus $44m
circular inventory, mostly DOLA. Those are dated context, not current measured depth; some Fluid
and Uniswap v4 balances are not directly readable at pool addresses. Non-Ethereum overrides remain
conservative venue judgments. Liquidity 7.0 and every chain override are carried unchanged pending
route, threshold and precision reconciliation.

## 4 · Dependencies — 6.0

sUSDe is a pure wrapper whose sole economic upstream is USDe. Backing and Dependencies therefore
equal USDe at 6.5 and 6.0. Aave, Morpho and Pendle are downstream forced-seller channels, not reserve
assets, so they do not inflate the upstream set.

## 5 · Contract & Admin — 5.5

The October 11 authority review found the Ethereum vault owner to be the same 24-hour TimelockController used by USDe. Its proposer and
canceller are the same 5-of-10 Dev Safe, leaving no independent veto. The timelock controls full
administration and cooldown changes.

The same Safe holds immediate bounded blacklist/restriction authority. Rewarder roles are held by
the Dev Safe and a separate 3-of-10 Payout Fund Safe.

Cross-chain OFTs differ. Arbitrum, Base, Optimism, BNB, Mantle and Monad have measured 24-hour owner
timelocks. Blast and Fraxtal are controlled directly by 5-of-10 Safes without delay. Monad's proposer
remains unresolved. Structural stays 5.5, with chain differences stated rather than averaged away.

These remain dated authority observations. Plasma's authority path and Monad's proposer are unresolved; exact deployed privileged-path audit coverage and bounty exclusions were not re-established. No control result is inferred for unread paths.

## 6 · Issuer — 7.0

Issuer 7.0 is inherited from USDe because the same Ethena entity, governance and operating record
stand behind both assets. Wrapper administration is scored under Contract/Admin.

The [USDe terms](https://docs.ethena.fi/resources/usde-terms-and-conditions) identify Ethena BVI Limited and distinguish onboarded Mint Users from ordinary holders. Permissionless vault redemption returns USDe, not direct dollar-redemption eligibility. Current principals, corporate financial audit, legal recourse beyond that eligibility distinction and conduct history were not freshly investigated for the wrapper. Current fee-switch milestone and activation status remain unverified; the September 30–October 14 average cannot establish them.

## Yield source

Yield appears as increases in USDe per share:

| Actual elapsed window | Growth | Annualized |
|---|---:|---:|
| 7.021 days | 0.094777% | 5.0484% |
| 30.101 days | 0.398851% | 4.9452% |
| 90.340 days | 1.130024% | 4.6446% |

These are realized exchange-rate changes, not advertised APY or forward returns. The measurement
is as of October 28 19:13:40 UTC at block 26,293,250; starting blocks are 26,242,850, 26,077,250
and 25,645,250 respectively. The daily cache was generated at 19:05:01 UTC and its submeasurement
has its own clock; daily cadence is separate from frozen backing history.

The economic source is USDe's managed portfolio after protocol allocations and Reserve Fund
policy. The October 13 Risk Committee publication says stakers received 27% of fee allocation at
September 30, down from 34% in July. The fee-switch average is stale: its 340 observations end
October 14 despite an October 28 computation timestamp. It cannot establish current milestone or
activation status, and current spot supply cannot substitute for the required average.

## Aave, Morpho and Pendle concentration

The October 11 concentration review recorded the following shares of its contemporaneous supply:

| Holder | Chain | Share |
|---|---|---:|
| Aave v3 | Plasma | 16.46% |
| Aave v3 | Ethereum | 10.76% |
| Morpho Blue | Ethereum | 9.52% |
| Aave v3 | Mantle | 7.36% |
| Pendle SY | Plasma | 3.51% |
| Pendle SY | Ethereum | 2.64% |
| Pendle SY | Monad | 1.85% |

These are potential sellers during deleveraging, not liquidity. The enumeration excludes Aave v4,
Euler, Fluid, Venus, FiRM and Fraxlend, so 52.1% was not a complete DeFi-use census and is not updated by the new vault denominator.

At the October 11 venue snapshot, three Pendle markets were live: Monad $22.35m and Plasma $3.39m
maturing October 22, and Ethereum $3.82m maturing November 26. Matured markets are not counted as
exit venues; these balances require a new read after maturity.

## Served-source observations — October 29

The publicly served **07:02:10 UTC generation** contains the same **05:59:28 UTC issuer snapshot** used above: $4,560,198,405.35 backing, $62,059,526.94 Reserve Fund and $4,542,907,916.34008 issuer-USD supply denominator. Coverage is **100.3806% excluding / 101.7467% including the fund**. These are issuer-reported amounts, not independently verified offchain custody.

Canonical USDe supply is separately **4,543,971,515.530076 USDe tokens** at Ethereum block **26,296,767**, block time **07:01:23 UTC**. It includes adapter-locked tokens; remote supplies must not be added. The approximately **0.0234% difference** from the older issuer denominator has different clocks and units, not an independently established backing shortfall. Coverage uses the issuer's own same-snapshot denominator.

At that block, sUSDe has **951,705,614.5658604 shares**, **1,194,804,931.2529356 USDe assets** and **1.255435412974809 USDe/share NAV**. This later observation is separate from the earlier 05:53:11 UTC vault snapshot and from the unchanged oracle and realized-growth clocks. Missing executable dollar prices remain unavailable; neither NAV nor par substitutes for an executable dollar mark.

Both served backing histories retain their **2,180 original rows** and append **two acquired rows**, at **07:00:29 and 07:02:10 UTC**. The source transition is explicit; the interval from the October 14 endpoint remains missing. No history was interpolated or backfilled. The served fee-switch result is **insufficient_history**, with mean and milestone verdict unavailable. Two new samples cannot establish a trailing 14-day average, and governance activation remains independently unverified.

These served payloads match the reviewed producer package. **End-to-end dashboard selection and display verification remains pending the dashboard verification**; file delivery does not close route, precision, execution or settlement limitations.

## Scoring Rationale

The six displayed axes average **6.4167**; the retained seven-component convention including legacy Redemption averages **6.4286**. Redemption is evidence within Liquidity & Exit, not a seventh displayed axis. The existing overall rounding-review exception was due October 22; this revision does not extend it.

| Axis | Score | Basis |
|---|---:|---|
| Stability / Peg | 6.5 | Tight NAV tracking and consistent accrual; ultimately exposed to USDe's changing portfolio. |
| Backing | 6.5 | Equal to USDe; no independent reserve or cushion. October 29 issuer coverage is separately labelled; the archived feed has null headlines and backing history ending October 14. Score carried unchanged. |
| Liquidity & Exit | 7.0 | Score carried unchanged pending reconciliation: selected 50-bps route has a broad $1m–$10m bracket, not a located crossing. One-day primary cooldown can rise to 90 days; complete stablecoin execution and L2 ladders remain unproven. |
| Dependencies | 6.0 | Pure-wrapper equality with USDe. |
| Contract & Admin | 5.5 | 24-hour full-reach path but no independent veto, bounded immediate restrictions, and weaker OFT legs. |
| Issuer | 7.0 | Equal to USDe. |
| Redemption *(legacy)* | 6.5 | Live one-day cooldown improves normal exit, but the contract permits 90 days and restriction roles remain. |
| **Overall** | **6.5** | Nearest half-point to the 6.43 legacy seven-component mean. |

## Open measurements

- USDe live reserve-wallet coverage is complete at 13 of 13 disclosed accounts. Seven accounts
  still lack reconstructed September 27 balances, which limits the inherited historical comparison
  but not current monitoring.
- Verify restored upstream issuer ingestion with explicit source labels and onchain supply checks. The archived LlamaRisk-backed hourly feed has null backing and Reserve Fund headlines.
- Non-Ethereum executable ladders remain unmeasured.
- Monad proposer remains unresolved.
- Re-read Pendle balances and venues after the elapsed October 22 maturities; refresh concentration
  on a common denominator.
- Reconcile selected sUSDe→USDe overlay versus base direct-USDC
  ladder, primary 50-bps versus legacy 200-bps outputs, and unresolved bracket precision.
- Preserve the backing-history gap, expose stale fee-window endpoints and guards,
  and verify actual served common inputs before claiming report/dashboard synchronization.

Restored issuer observations do not independently verify inherited offchain coverage. Current fee-switch activation and complete-exit execution remain unverified.
Issuer-reported and other dated measurements remain reportable with their scope and timestamps.

## Revision history

| Date | Change |
|---|---|
| 2026-10-29 | Targeted shared-evidence update: same-block vault/NAV, realized growth and oracle marks; inherited issuer/source gap; stale fee-switch and elapsed maturity corrections; selected liquidity bracket and execution limits. All scores and chain overrides held. |
| 2026-10-21 | Added inherited, timestamped Ethena issuer API coverage while retaining the independent producer gap. Scores held; full six-axis verification remains October 11. |
| 2026-10-20 | Partial evidence update: refreshed vault state, NAV growth and oracle discount; recorded inherited USDe live backing outage and the October 12 Risk Committee coverage reading. Scores held; full six-axis verification remains October 11. |
| 2026-10-11 | Inherited completion of USDe live Solana reserve tracking; only the September 27 historical comparison remains incomplete. Scores held. |
| 2026-10-11 | Inherited corrected USDe live coverage and reserve-wallet scope after the production reserve-wallet monitor Aave migration. Scores held. |
| 2026-10-11 | Comprehensive refresh after USDe closure. Scores held. Added exact vault state, realized NAV growth, 90-day maximum, located $3.30m Ethereum crossing, Plasma deployment, current concentration and authority. |
| 2026-10-11 | Corrected the prior 1/3/5/7-day framing: it describes operating policy, not the 90-day contract cap. |
| 2026-10-04 | Identified that whole-pool TVL had been called depth; correction completed using absorbing-side balances. |
| 2026-10-02 | Previous backing/liquidity pass held scores and introduced chain overrides. |
| 2026-09-09 | Contract/Admin reduced to 5.5 after the shared authority terminal was measured. |
