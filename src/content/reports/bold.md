---
asset: "BOLD"
slug: "bold"
aliases: ["BOLD", "Liquity BOLD", "Liquity v2"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "overcollateralized CDP with permissionless redemption"
assessment_type: "full"
date: "2026-09-15"
last_verified: "2026-09-15"
last_revised: "2026-11-11"
peg_mechanism_score: 7.0
backing_score: 7.5
liquidity_score: 5.5
underlying_score: 7.0
structural_score: 8.5
issuer_score: 8.0
overall_score: 6.5
axis_frame: six
issuer: "Liquity protocol; no corporate repayment guarantor established"
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=bold"
production: true
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-assessment-version="bold-targeted-six-axis-2026-11-11-v1" data-evidence-snapshot="sha256:fcd0016ee3ef904d103f0bbcea036b7d1e8ffb524f672d25de2904a60d5601d9" data-canonical-project="liquity" data-canonical-component="bold">

# BOLD — Risk Report

**Moderate risk · 6.5/10 · Provisional**

Ethereum stablecoin · ETH-related collateral branches · Permissionless collateral redemption

[View the BOLD dashboard](https://todayindefi.github.io/backing-monitor/?asset=bold)

## Summary

BOLD is Liquity v2's stablecoin, issued when borrowers deposit WETH, wstETH or rETH into collateralized debt positions called troves. Holders can redeem against protocol collateral without an issuer's approval. This is a collateral exit with variable fees, not an unconditional cash-dollar repayment promise.

The checked core is fixed and has little discretionary administrative reach. That reduces administrative-change risk but prevents in-place repair of faulty code. Correlated ETH backing, oracle-driven shutdown, unequal branch Stability Pool coverage and nonlinear cash exits remain material risks. Overall **6.5**, Backing **7.5** and Issuer **8.0** retain provisional confidence.

The assessed Ethereum token is [current BOLD](https://etherscan.io/token/0x6440f144b7e50d6a8439336510312d2f54beb01d), `0x6440f144b7e50d6a8439336510312d2f54beb01d`. Legacy `Bold` at `0xb01dd87B29d187F3E3a4Bf6cdAebfb97F3D9aB98` is a different deployment. Resolve by exact address rather than symbol capitalization. sBOLD is a separately controlled wrapper and does not inherit this assessment.

## 1 · Stability — 7.0

BOLD targets one dollar through collateral redemption and market arbitrage. A below-par buyer may redeem for collateral, but fees, collateral prices and onward execution determine whether that trade is profitable. Permissionless access does not guarantee cash proceeds or protection from a discount.

The November 10 **14:38:12 UTC** aggregate market mark was **$0.9963576**, about **36.42 bps below $1**. This is one dated aggregate observation, not a persistent-depeg finding or a new long-window peg study. The financial batch's **0.7625%** small-size redemption rate implies only a $1-minus-fee reference; it excludes collateral pricing, allocation, swaps and gas and is not a realizable dollar floor.

All three collateral branches share ETH risk. A severe market move or oracle-triggered branch shutdown can weaken arbitrage and liquidation protection even without an administrator controlling redemption.

## 2 · Backing — 7.5

BOLD debt is distributed across three collateral branches, each with its own Stability Pool. The financial batch assembled **November 10 14:38:13 UTC** reports **37.901845 million BOLD supply** and **37.902017 million summed branch debt**, a residual of **172.68 BOLD**. Its cause is not established; sequential reads do not prove exact same-block equality or a loss.

| Branch | Debt, BOLD | Collateral, native units | Model collateral/debt | Stability Pool / branch debt |
|---|---:|---:|---:|---:|
| WETH | 12.445090m | 9,774.478316 WETH | 163.20% | 83.91% |
| wstETH | 21.418682m | 17,987.724136 wstETH | 217.94% | **31.54%** |
| rETH | 4.038245m | 5,573.244091 rETH | 337.11% | 114.40% |

The aggregate **212.67% is a qualified accounting-model ratio**, using approximately $80.605 million modeled collateral divided by $37.902 million branch debt. It uses ETH/USD and canonical LST conversion rates. It treats stETH at ETH parity and does not apply rETH's liquidation-price minimum of market and canonical rates. It is **not exact protocol liquidation collateralization, a current borrower buffer or executable cash value**.

The batch used sequential `latest` calls. Reported block **26,385,157** was read after the branch calls and does **not pin** them. Original oracle source age and round validity are unknown, decimals were assumed by the reader, and no coherent block hash or read window is established. The later security pin does not repair these financial-source limitations.

Stability Pools held **21.818715 million BOLD, 57.57% of token supply**. The branch percentages above instead divide by the same branch's debt. The largest debt branch, wstETH, has **31.54%** coverage, below the existing 35% monitoring threshold. This limits local debt absorption; it is not proof of insolvency. Surplus coverage in another branch does not guarantee a transfer to wstETH, and Stability Pool BOLD is not independent external backing or USDC cash.

Inspectable collateral and debt support the backing framework, but correlated collateral, unknown price-source freshness and unmeasured borrower-level liquidation exposure constrain assurance. The older 279.8% figure does not provide a comparable basis for a precise deterioration percentage.

## 3 · Liquidity & Exit — 5.5

Holders can sell BOLD on secondary markets or redeem for branch collateral. Both paths have size-dependent costs. The retained secondary quotes are dated **November 9 23:45 UTC**, with individual requests from **23:45:01–23:45:46 UTC**; they were not recollected for the November 11 review.

The quote basis is **$1 per BOLD and $1 per USDC**. The $1,000 baseline returned **998.495185 USDC**, a total signed return of **−15.04815 bps**. Baseline-adjusted impact measures average-rate deterioration against that rung, excluding its standing spread.

| BOLD input at par | USDC output | Total signed return | Baseline-adjusted impact |
|---|---:|---:|---:|
| $100,000 | 99,659.695068 | −34.03 bps | −18.98 bps |
| $1 million | 996,130.269698 | −38.70 bps | −23.65 bps |

The **50-bps adjusted-impact** crossing is bracketed at **$4,093,750–$4,128,906.25**, with re-quoted endpoints and its precision requirement met. This is a dated interval rather than exact capacity or guaranteed current proceeds. The separate **200-bps stress bracket remains $1 million–$10 million**, with nonmonotonic interior probes and **precision not met**. Its uncertainty does not invalidate the independently checked 50-bps bracket.

Sampled proceeds reached **6.238397 million USDC at $10 million input**, followed by lower output at $20 million. That demonstrates sampled turnover, not a located global ceiling. The September ladder used a $100 baseline rather than the current $1,000 baseline, so it does not establish a like-for-like capacity trend. The complete venue inventory remains dated **September 14**. Wrapper positions around one pool and Stability Pool deposits must not be added as independent market liquidity.

Separately timed `latest` primary fee views returned **95.17, 332.56, 596.34 and 2,706.53 bps** at **100,000, 1 million, 2 million and 10 million BOLD** respectively. Each rate divides the returned fee **amount** by requested BOLD; the raw return is not a percentage word. These are not USDC payout quotes or successful holder redemptions.

Gas, approvals, firm expiry and settlement are excluded. Route metadata spans mixed older blocks. No complete funded collateral-to-cash path, actual holder redemption or persistent execution capacity was demonstrated. A protocol fee floor is not a dollar-cash floor.

## 4 · Dependencies — 7.0

WETH, wstETH and rETH form one correlated ETH exposure. Lido/stETH and Rocket Pool add their own rate, market and operating dependencies. Chainlink feeds influence borrowing, liquidation, redemption and irreversible branch shutdown.

At the separate security pin, **block 26,385,182, November 10 14:43:11 UTC**, all three branches reported primary pricing and no shutdown. The observed positive rounds met their strict age limits:

| Branch | Ordinary/liquidation price | Observed source age / strict maximum |
|---|---|---|
| WETH | ETH/USD | 420 / 86,400 seconds |
| wstETH | stETH/USD × canonical wrapping rate | 3,276 / 86,400 seconds; ETH/USD also required live |
| rETH | ETH/USD × min(market, canonical rETH/ETH rate) | 67,428 / 172,800 seconds; ETH/USD also required live |

These source-validity observations belong to that pin, not the earlier financial batch. They do not demonstrate that a state-updating `fetchPrice()` call executed.

Invalid shared ETH/USD pricing can shut branches and leave stored last-good pricing. If ETH/USD and canonical rates remain usable but an LST market feed fails, the affected branch shuts down and uses a **downward-bounded canonical fallback**, capped by stored `lastGoodPrice`. That path cannot recover upward after shutdown; if necessary inputs fail, stored pricing remains. This is a conditional wind-down fallback, not a healthy independent alternate feed.

Redemption-specific maximum-pricing rules near parity have separate 1%/2% conditions for wstETH/rETH. They are not liquidation prices or the accounting model used above. External feed-proxy governance and cross-branch failure propagation remain outside complete current assurance. Optional sBOLD ownership, pause and allocation risks remain separate from BOLD's core controls.

## 5 · Contract & Admin — 8.5

The retained core authority review found BOLD ownerless, non-upgradeable and unpausable, with a closed three-collateral set. The full upstream authority walk is dated **September 14**; TIDR's page baseline is **September 15**. These findings reduce discretionary administrative reach but leave no in-place code repair mechanism.

The November 10 bounded subset found no changed checked oracle bindings, thresholds, shutdown state or allocator reach. Current pinned runtime matched verified deployed source for BOLD, Governance, three feeds and three TroveManagers. BOLD's match tolerates source-verification metadata; the other seven are exact. This is source correspondence, not a new full audit, rebuild or complete authority walk. Historical September runtime retrieval returned HTTP 403, leaving the direct old/new runtime-hash comparison **unknown**.

LQTY-weighted governance allocates initiative incentives rather than changing the checked core collateral, oracle or minting set. Payments are capped at the lower of entitlement and the allocator's own BOLD balance. Snapshots pay in the following epoch; vote increases stop in the final day, while reductions and vetoes remain possible. This reaction window is not a conventional execution timelock. Voter concentration, majority cost and continuous veto effectiveness remain unmeasured.

The first deployment's Stability Pool defect and subsequent redeployment show the cost of immutable remediation. Historical audit breadth, accepted findings and bounty caps are dated evidence rather than renewed security assurance. [Liquity's risk disclosure](https://docs.liquity.org/v2-documentation/risk-disclosure) describes the fixed core and lack of manual pause; it does not prove complete audit-to-deployment correspondence. External feed governance and sBOLD's separately controlled wrapper are not made immutable by the BOLD core.

## 6 · Issuer — 8.0

BOLD is protocol debt against on-chain collateral rather than a claim on an off-chain corporate reserve manager. Liquity AG is the software/website entity; no corporate repayment guarantee or independently established holder-recovery undertaking was identified. Protocol collateral redemption does not create a fiat repayment right.

This limits one form of discretionary issuer exposure, but does not eliminate developer conduct, frontend, oracle, LST, code or governance risks. Owner renunciation belongs to Contract & Admin rather than providing an additional issuer-credit uplift. No broad conclusion that all potential legal liability is absent follows from the lack of a corporate redeemer.

The [official redeployment chronology](https://www.liquity.org/blog/liquity-v2-redeployment) records the 2025 Stability Pool issue, public warnings and patched May 19 relaunch. The operator's statement that no users were impacted is a historical reported outcome, not an independent loss reconciliation or proof of no later incidents. Full current incident, root-cause, bounty-payment and legal-recovery searches were not repeated. Issuer **8.0** is retained provisionally within a protocol-side counterparty rubric.

## What to watch

Reassess on branch shutdown or primary-price failure, weaker branch Stability Pool absorption, borrower-level evidence of thinner liquidation protection, materially changed comparable cash quotes or proven redemption failure. Code, deployment, authority or corroborated incident changes also warrant review. Accounting-model ratios alone cannot certify or dismiss a liquidation condition.

## Sources, scores and review scope

**TIDR's September 15, 2026 verification baseline is retained**, alongside its September 22 historical quote revision. The upstream source report's whole-report date remains **July 21**, reflecting a different source scope; September delta checks did not renew all of its historical sections. Neither date substitutes for the other. **November 11 is the targeted assessment/revision date**, not a whole-report verification renewal.

The financial model was assembled **November 10 14:38:13 UTC** from sequential latest calls, with reported block **26,385,157 not a coherent pin**. Quote summary and saved payload clocks are **November 9 23:45:09 and 23:45:46 UTC**, within the per-request window above. Security uses **November 10 14:43:11 UTC / block 26,385,182**. The retained complete venue inventory is **September 14 10:32:23 UTC**; documentary context was checked November 2. New files do not refresh underlying observations.

All scores are unchanged: Stability **7.0**, Backing **7.5**, Liquidity & Exit **5.5**, Dependencies **7.0**, Contract & Admin **8.5**, Issuer **8.0**, Overall **6.5**. Backing, Issuer and Overall retain provisional confidence. Overall is holistic rather than the **7.25** mean of the six axes.

No coherent same-block liquidation valuation, borrower-loss stress result, complete current venue census, executed cash redemption or full current authority/audit/incident clearance is established. Unknown financial-source clocks remain unknown. Ethereum current BOLD is the scope; legacy Bold, sBOLD and other-chain deployments are not newly graded.

## Revision history

- **November 11, 2026:** Targeted model, oracle/fallback, dated exit and counterparty review; scores and TIDR's September 15 baseline retained.
- **September 22, 2026:** Historical secondary-quote revision and production publication.
- **September 16, 2026:** Intrinsic code and administrative risk presentation revised without changing scores or verification date.
- **September 15, 2026:** Initial TIDR publication and authority/accounting review.

</div>
