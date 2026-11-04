---
asset: "USG"
slug: "usg"
aliases: ["USG", "Tangent USD", "Tangent USG"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "light"
date: "2026-08-05"
last_verified: "2026-10-28"
peg_mechanism_score: 5.0
backing_score: 5.0
liquidity_score: 3.5
underlying_score: 4.0
structural_score: 3.5
issuer_score: 4.0
overall_score: 4.0
issuer: "Tangent Finance"
audited_reserves: false
market_cap_approx: 3874908
axis_frame: six
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usg"
production: true
last_revised: "2026-11-04"
---

# USG — Risk Report

**Elevated risk · 4.0/10**

## Summary

USG is Tangent Finance’s Ethereum stablecoin, borrowed against productive collateral in isolated markets. PegKeepers and borrower incentives support its dollar peg. Holders have no direct redemption into borrower collateral; practical exits depend on secondary liquidity. Correlated LP collateral, persistent historical discounts and concentrated administration drive risk.

## 1 · Stability — 5.0

USG targets $1 through PegKeepers and borrower incentives. In the shared dashboard history USG is below par in every retained observation. Its seven-day and approximately 30-day mean prices both sit around $0.996, so the recent behavior has not restored a reliable $1 exit. The same history includes a more pronounced discount episode on October 3: five observations were below $0.99, and pool counter-side inventory fell sharply alongside it. The reported minimum was about $0.982. These are pool-derived observations, not independently reconstructed executed fills; they establish a reported stress episode without proving its precise duration or a universal executable price.

USG uses a crvUSD-derived CDP/PegKeeper architecture and offers **no redemption for borrower collateral**. HEC and LEC markets use price-responsive rewards deductions or interest to encourage repayment when USG weakens. FIR markets charge fixed interest, so not every borrower faces the same price-responsive incentive. The retained history shows no outstanding keeper POL: with keeper debt at zero, the keepers cannot withdraw and burn previously issued USG to support a discount. Their upside minting function is a different capability.

The design has continued to operate, but the parent's maturity does not transfer to this much smaller deployment. **Peg scores 5.0** on the mechanism and observed record, with persistent sub-par pricing limiting confidence. A lasting improvement in peg behavior would matter more than a single near-par observation. Price source, reference value, history series and timestamps are taken from the dashboard's peg block; the pool-derived source also limits claims of independent price discovery.

## 2 · Backing — 5.0

USG is backed by on-chain collateral in isolated borrower markets. The shared history puts average conservative CR around 130% over the retained month and around 129% over the latest week. That softer recent average merits attention, but one month is insufficient to establish a durable deterioration. No retained observation reports bad debt. Both the clean record and its limited length matter.

Borrower collateral is largely productive Curve LP exposure, held through StakeDAO, Convex-FXN or Curve gauges. The conservative CR counts borrower collateral against debt. The inclusive CR adds LP-owned stables in keeper pools, which do not belong to borrower collateral and should not be treated as a solvency backstop. Raw ERC-20 supply also includes idle keeper buffers; circulating supply is the relevant denominator. The recent reduction of those buffers is not a comparable fall in circulating supply.

Stable-LP borrowing parameters leave narrow gaps to liquidation thresholds, so an aggregate ratio near 130% does not describe the first borrower's liquidation distance. Repeated dated market checks have found substantial debt in markets with thin aggregate headroom. The latest <5% bucket increased largely because the largest market crossed that bucket boundary, rather than every borrower becoming proportionally riskier. The shared retained history does **not** contain per-market headroom series, so no monthly average or trend in those buckets is asserted. **Backing scores 5.0**: measured collateral and a clean monitored record are offset by correlated collateral and thin liquidation margins.

## 3 · Liquidity & Exit — 3.5

**USG's long-term exit constraint is reliance on two keeper pools with limited counter-side inventory.** Their stables are LP-owned exit liquidity, not deployable protocol defense. The shared history shows inventory varies materially: the recent weekly average is somewhat above the retained-month average, while the October 3 episode demonstrates that this inventory can contract abruptly. This does not support describing every recent inventory move as deterioration or treating the current balance as permanent capacity.

The report uses **the exact shared liquidity feed ladder consumed by the dashboard**, including market-price input sizing, inventory-proportional allocation and its displayed added-impact field. Small-trade execution is efficient in the archived ladder, while impact increases sharply at larger sizes. The current ladder documents that shape at its observation time. Only one snapshot of this version of the shared ladder is archived here, so a sustained improvement or deterioration in executable depth is **not established**. Older independently measured ladders have different conventions and are not spliced into a trend.

The standing discount belongs in the Peg axis. Added price impact measures execution-rate deterioration relative to the producer's small-trade baseline; total cost versus market value includes that baseline spread. Neither is measured against a hypothetical $1 USG entry price. **Liquidity scores 3.5.** The shared market-priced ladder shows low small-trade impact and roughly $445K clearing within 50 bps of added impact. Two concentrated exit pools, sharply increasing large-size impact and uncertain stressed depth still limit the score. More comparable history is needed to establish how depth behaves over time and under stress.

sUSG is a holder of circulating USG, not a separate backing source. Wrapper withdrawals can feed demand into the same exit venues. The dedicated [sUSG report](/reports/susg/) covers wrapper mechanics; this refresh does not re-audit its strategies or redemption behavior.

## 4 · Dependencies — 4.0

**A book of many LP markets is still a book of shared protocols and constituent issuers.** Exposure passes through market contracts, wrappers, Curve pools and underlying tokens. For stable-LP collateral, minimum-coin-price marking allows the weaker leg to affect the whole collateral mark. That limits the diversification a reader might infer from a two-asset pool.

Resupply reUSD remains an important recursive constituent: USG is a CDP stablecoin lending against LPs containing another CDP stablecoin. Dated October checks put reUSD-linked markets at roughly one-fifth of debt; these are discrete composition observations, not a measured monthly average. Resupply reUSD is distinct from Re Protocol's identically named asset. The history's weakest-exotic deviation averages around a 1% discount, but the historical field does not record which token was weakest in every observation; it cannot be presented as a continuous reUSD-only price series.

Volatile LP collateral adds ETH/BTC and issuer or wrapper dependencies. Both msETH markets remain closed to new deposits, borrowing and leverage under the documented pause semantics; existing debt remains liquidatable. These are USG borrowing-market permissions, distinct from Metronome’s synth-swap path. The [bounded Ethereum msETH assessment](/reports/mseth/) is provisionally 2.5/10: November 4 funded-holder simulations found msETH-to-msUSD swaps callable at a 10% fee, without native ETH redemption. This does not establish that USG’s paused markets reopened or change USG’s scores. Newly listed frxUSD/DUSD and frxUSD/crvUSD markets have no debt in the reviewed dashboard snapshot, so current debt exposure is not attributed to them. Activation would require review. **Dependencies scores 4.0** on layered and correlated exposure; neither the number of listed markets nor a one-day weight change alone changes that judgement.

## 5 · Contract & Admin — 3.5

USG’s asset permissions and risk parameters are administered through a shared multisig authority. The shared dashboard's authority topology documents a 3-of-5 Safe over asset permissions, parameters and governance paths. The September authority walk demonstrated undelayed collateral-oracle and risk-parameter changes. The keeper's delay for replacing its admin does not delay those other actions.

October read-only verification corroborated the same owner set, threshold and keeper/ControlTower control relationships, with no enabled Safe modules. One owner continues to use an EIP-7702 delegate whose logic is unreviewed, and another remains an unused signing account. Signer independence and custody cannot be established from these observations. These independent checks validate the shared authority record; they do not replace it with a different score or source chain.

**Contract & Admin scores 3.5.** A nonce increase is evidence of activity, not improved governance quality. An enforceable delay on load-bearing powers, or a verified change in authority structure, would justify reassessment. The full September setter simulations were not repeated; those findings retain their original verification date. Ethereum is the verified chain; other-chain authority paths were not examined. [Official documentation](https://docs.tangent.finance/docs/usg/overview_usg) says parameters may be updated by DAO-approved decisions, but does not establish signer custody or an enforced delay on the measured powers. Current token-governance status remains unverified. Historical Egis, Sherlock, Pashov and Zerocool audits are recorded in the shared contract overlay; per-finding remediation, coverage of these privileged paths, deployed-version correspondence and applicable bug-bounty coverage were not established by this refresh.

## 6 · Issuer — 4.0

Tangent Finance is the documented protocol identity. Its short operating record, public product disclosures and discretionary revenue delivery provide a limited accountability record. A registered operator, controllers, jurisdiction, holder recourse and enforceable revenue obligations remain unresolved. The predecessor Convergence exploit is material operating lineage; it is not established as an exploit of USG. Legacy Convergence or Snapshot venues need continuity review before they can establish current governance or executed policy.

## Shared quantitative evidence

These figures are generated from the archived dashboard payloads. They support the assessment without turning each new observation into a score change. The dashboard remains the place for current values.

<div role="region" aria-label="Shared history table" tabindex="0" style="max-width:100%;overflow-x:auto;">

<!-- usg-shared-evidence:start -->
Shared dashboard history: **2026-09-28T06:36:51Z–2026-10-28T05:37:14Z**. The 30-day column uses the available retained window, slightly shorter than 30 full days. Means are arithmetic means of observed samples, not time-weighted returns or guaranteed execution prices.

| Shared-history measure | Last 7 days | Retained 30-day window |
|---|---:|---:|
| Observed samples | 168 | 717 |
| Mean peg price | $0.995792 | $0.995599 |
| Mean discount to $1 | 42.1 bps | 44.0 bps |
| Samples below par | 168/168 | 717/717 |
| Samples below $0.99 | 0 | 5 |
| Mean conservative collateral ratio | 129.10% | 130.45% |
| Mean circulating supply | 3.88M USG | 3.93M USG |
| Mean counter-side pool inventory | $909,580 | $872,047 |
| Samples reporting bad debt / outstanding keeper POL | 0 / 0 | 0 / 0 |

Largest gap between retained observations: **6.00 hours**. Lowest reported peg: **$0.981727**, at **2026-10-03T21:36:54Z**. Sample counts describe observations, not time spent at those levels. The pool-derived historical marks have not been independently reconstructed as executable fills.

Liquidity source: shared liquidity feed **2026-10-27T23:51:16Z**, market-price anchor **$0.995731** (2026-10-27T23:37:14Z). Only one snapshot of this ladder is archived in this review; no average depth or depth trend is inferred.

| Market-valued trade size | Dashboard added price impact | Total cost versus market value |
|---:|---:|---:|
| $1,000 | 0.05 bps | 4.94 bps |
| $10,000 | 0.60 bps | 5.48 bps |
| $100,000 | 6.64 bps | 11.53 bps |
| $1,000,000 | 1252.56 bps | 1257.44 bps |

50-bps added-impact crossing: **$444,531.25–$448,046.88**. The lower bound clears; it is not the exact crossing.

200-bps added-impact crossing: **$732,812.50–$739,843.75**. The lower bound clears; it is not the exact crossing.
<!-- usg-shared-evidence:end -->

</div>

## Sources and assessment scope

November 4, 2026 is a bounded documentary issuer review. The full-verification date remains **2026-10-28**. Older balances, security findings and executable-exit observations keep their original dates; no live capacity, authority or complete incident-history verification was renewed. Undated document source dates below are observation dates, not asserted legal effective dates.

Numeric assessments are carried across this documentary review, rather than newly derived from a complete current assessment. Current governance-import coverage gaps do not establish absent governance or a clean operating history.

Next reassessment: Registered operator/controllers, holder recourse and actual governance/revenue accountability.

- [Overview_usg](https://docs.tangent.finance/docs/usg/overview_usg): source as of 2026-11-04; checked 2026-11-04.
- [Peg stability](https://docs.tangent.finance/docs/usg/peg-stability): source as of 2026-11-04; checked 2026-11-04.
- [Governance](https://docs.tangent.finance/docs/dao/governance): source as of 2026-11-04; checked 2026-11-04.
- [Docs.tangent.finance](https://docs.tangent.finance/llms.txt): source as of 2026-11-04; checked 2026-11-04.
- [History](https://docs.tangent.finance/docs/faq/history): source as of 2026-11-04; checked 2026-11-04.
- [Audits](https://docs.tangent.finance/docs/faq/audits): source as of 2026-11-04; checked 2026-11-04.

## Revision history

- **2026-11-04 — documentary issuer review.** Updated holder rights, assurance and product scope; numerical scores and full-verification date unchanged.

- **2026-10-28 — Liquidity basis correction:** Liquidity corrected from 3.0 to 3.5; overall remains 4.0, with a six-axis mean of 4.17. The previous par-based assessment counted the standing peg discount as execution cost. The shared market-priced ladder supports the correction; it does not establish a recent improvement in market conditions.

- **2026-10-28:** Aligned all six axes with the shared dashboard evidence and internal assessment. Added seven-day and retained-month history, the canonical shared liquidity feed ladder and dated authority verification. Liquidity changed from 3.5 to the shared 3.0 assessment; overall remains 4.0. September setter simulations retain their original date.
- **2026-09-06:** Added the Contract & Admin axis and separated authority risk from issuer assessment.
