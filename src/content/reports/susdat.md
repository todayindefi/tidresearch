---
asset: "sUSDat"
slug: "susdat"
aliases: ["sUSDat", "Saturn sUSDat", "staked USDat"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["STRC (off-chain claim)", "USDat (on-chain buffer)"]
yield_bearing: true
assessment_type: "light"
companion_report: "usdat"
date: "2026-05-20"
last_verified: "2026-10-13"
last_revised: "2026-11-10"
# Partial refresh: October 14 measurements and public-document reconciliation.
# The live implementation has not been independently source-matched or diffed.
# PARKED: deployed implementation source match, audit coverage and privileged-role walk [owner: securityAnalyst] [since: 2026-10-04]
# PARKED: retire redemption_score once shared vault-share schema migration is scoped [owner: tidr] [since: 2026-10-04]
# PARKED: issuer 5.0 carried; re-derive against current BVI terms and disclosures [owner: riskAnalyst] [since: 2026-10-14]
# Redemption is folded into axis 3; field remains required by shared schema.
featured: false
production: true
issuer: "Saturn Labs"
axis_frame: six
volatility_score: 3.5
backing_score: 2.5
structural_score: 3.5
redemption_score: 3.5
liquidity_score: 2.0
issuer_score: 5.0
underlying_score: 2.5
overall_score: 3.0
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susdat"
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-strategy-scoped-report data-strategy-assessment="strategy-8k-2026-11-09-v1" data-strategy-accession="0001193125-26-452693" data-strategy-review-date="2026-11-10">

# sUSDat — Risk Report

**Significant risk · 3.0/10**

Yield-bearing vault share · Predominantly off-chain STRC exposure · Saturn Labs.

[Live reserve, NAV and exit dashboard](https://tidresearch.com/dashboards/?asset=susdat)

## Summary

sUSDat is Saturn's ERC-4626 share token. Users deposit [USDat](/reports/usdat/). The identified Ethereum preferred-share route is through Ondo STRCon to STRC, Strategy's variable-rate perpetual preferred stock. A smaller on-chain USDat balance provides liquidity. The share's value reflects the reserve's reported value and vested income, so STRC losses can reduce principal as well as yield.


## 1 · Stability — 3.5

sUSDat accrues value in USDat rather than maintaining a fixed dollar peg. At the October 14 observation, reported share value was **1.046723 USDat** and the measured secondary price **$1.036051**, a **1.02% discount**. The October 26 feed reports NAV **1.046447 USDat per share**. Comparing price with NAV measures the share discount; comparing either with the original one-dollar issuance reference answers a separate question. [Dated observations](/evidence/saturn/susdat-2026-10-14.json)

The historical NAV reached approximately **0.8930 USDat in July**, a 10.7% decline against the issuance reference, as STRC lost value. Its subsequent recovery demonstrates that the wrapper passes through reserve revaluation in both directions. A higher exchange rate does not independently verify the assets behind it.

Saturn's published design vests income over 30 days and adds it to the share exchange rate. The historically quoted approximately 11% yield target is not a current realized rate or a guaranteed return. [Vault overview](https://saturncredit.gitbook.io/saturn-docs/solution/susdat-overview)

Most reported NAV rests on an off-chain mark. STRC dividends, its market price, reserve allocation and withdrawals all affect share value. Positive NAV and a narrow market discount do not establish capital protection or uninterrupted exit.

## 2 · Backing — 2.5

The reserve consists of a directly measured USDat balance and the remainder of the vault's reported asset value. The **October 26 14:48:53 UTC** split is:

| Reserve component | Value | Share of reported assets | Evidence basis |
|---|---:|---:|---|
| On-chain USDat | $325,554.99 | 0.7134% | Token balance |
| Implied off-chain STRC claim | $45,309,060.27 | 99.2866% | Reported assets minus USDat balance |
| Total reported assets | $45,634,615.25 | 100% | Vault reporting |

The off-chain figure is a **residual valuation**, not an independently counted holding or a live third-party attestation. It does not identify the custodian's exact positions, cash or other assets. Multiplying NAV by shares reproduces reported assets, but that accounting identity does not establish solvency. [October 26 reserve snapshot](/data/strategy/2026-10-26/susdat_backing.json)

Historical reserve material described Strategy-LTV target weights intended to reduce STRC exposure during issuer stress. A current target band, complete boundary table and evidence of implementation were not independently established. The current [digital-credit strategy overview](https://saturncredit.gitbook.io/saturn-docs/solution/susdat-overview/digital-credit-strategy) describes STRCon/STRC exposure; that documentation alone does not verify the vault's actual allocation or automatic risk reduction.

Saturn describes Accountable proof-of-reserves work and a Chainlink NAV feed. A functioning independent attestation covering the current off-chain reserve was not established. [Transparency documentation](https://saturncredit.gitbook.io/saturn-docs/operations-and-governance/transparency-and-audits)

STRC is preferred equity with discretionary income and market-value risk. The 99.2866% residual cannot be treated as independently verified dollar reserves. USDat’s separate M0/PYUSDx backing applies to the buffer, not to the STRC position. A 5% STRC markdown removes **4.9643% of gross assets**; there is no junior capital inside sUSDat. Strata senior protection belongs to a separate tranche structure. The carried 2.5 reflects concentration, custody dependence and incomplete reserve assurance.

## 3 · Liquidity & Exit — 2.0

Holders can sell shares on secondary markets or request conversion back to USDat through Saturn's withdrawal process. Exiting into USDC can require a further USDat conversion. Current primary-route eligibility, processing time and size limits were not simulated; historical fills establish that withdrawals have occurred, not that any present holder has an immediate right to settle.

At the dated October 14 venue observation, the two Ethereum Curve pools held **$59,685.84 combined**: about $29.9K in sUSDat/USDC and $29.8K in sUSDat/frxUSD. The USDC pool recorded approximately **$13,889 of 24-hour volume**. Indicative router quotes are:

| October 26 market notional offered | Quoted USDC proceeds |
|---|---:|
| $10,000 | $10,008.29 |
| $100,000 | $56,305.48 |

The October 26 quote input is dollar notional converted to sUSDat at the measured market price, rather than a count of shares or a valuation at NAV. Proceeds are indicative, include route swap effects and exclude gas. They should not be multiplied by NAV or have the separately quoted NAV discount deducted again. The 2% price-impact crossing lies between the $10K passing rung and $100K failing rung; an exact capacity was not located. Poor large quotes establish a size constraint, rather than an absolute maximum output or guaranteed fill. [October 26 quote snapshot](/data/strategy/2026-10-26/susdat_backing.json)

The **October 26 buffer was $325,554.99 / 0.7134% of $45,634,615.25 reported assets**, down **65.1%** from October 19’s $932,829.21. It funds shared redemptions, rather than protecting principal. The displayed zero percentile is not relied upon: the feed’s reported 30-day minimum of 0.4804% is below the snapshot’s 0.7134%. The quoted cliff lies between $10K and $100K; it is not interpolated into a precise capacity. Current primary-router reachability remains **unmeasured**, and historical fills do not establish current access. [October 26 snapshot](/data/strategy/2026-10-26/susdat_backing.json).

Historically observed withdrawals of approximately $0.37M–$0.43M were paid from the liquid reserve. Those events do not establish that the current implementation bypasses the documented asynchronous queue. Saturn's current repository describes queued withdrawal requests and processing. Once withdrawals require the off-chain reserve, settlement also depends on asset realization and operator action. [Vault repository](https://github.com/saturn-organization/saturn-yield-dollar)

Secondary execution is the measured binding constraint for a holder without a verified primary route. Primary access remains unmeasured. Buffer size is potential liquidity, not proof of a successful redemption. Large secondary sales suffer severe quoted losses, and no guaranteed settlement deadline was established for off-chain realization.


For the separate srUSDat senior-share/PT route, dated November 2 USDat→USDC quotes on Ethereum and Monad support secondary sale liquidity at tested sizes. Local share conversion, LayerZero delivery, any applicable queue and the composed cash route remain conditional. srUSDat is distinct from this sUSDat vault and from USDat itself; its LayerZero share bridge is not the Saturn token CCIP migration. A share preview is not completed redemption, and a quote is not a fill.

PT maturity does not automatically deliver cash, and one PT need not equal one vault share. Accounting units and conversion determine the underlying delivered. Upstream settlement and the final USDat sale remain separate steps.

## 4 · Dependencies — 2.5

The identified Ethereum preferred-share path is **sUSDat → Ondo STRCon → STRC → Strategy**. STRC is a corporate preferred claim rather than a direct BTC redemption instrument. Ondo's wrapper, Saturn reserve reporting and withdrawal processing add separate dependencies. The **USDat → PYUSDx → PYUSD** buffer path is a different reserve exposure; it does not pass through STRC.

Strategy’s [November 9 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526452693/mstr-20261109.htm), covering November 2–8 with balances as of November 8, reports **$283.8M common proceeds** funding **$188.3M STRC buybacks**, $81.9M BTC purchases and $13.6M general-cash allocation. General cash rose **$132.7M → $146.2M**, or **10.17%**. The common-funded buybacks are not a second deduction from cash. A **$0.1M rounded allocation/balance residual** remains unresolved. One positive week does not establish sustained cash rebuilding.

The separate USD Reserve fell from **$4.79B to $4.77B**, with **$21.1M of aggregate preferred dividend payments**, not an identified STRC-only payment. Remaining preferred repurchase authorization is **$560.3M**: permission to spend, not cash or a guaranteed holder exit. No preferred ATM sales were reported.

The [MSTR issuer assessment](/reports/mstr/) and [raw STRC assessment](/reports/strc/) describe the funding and instrument risks. Wrapper rights, holdings, accrual and exits require separate evidence. The weekly filing does not supply a current reserve allocation, custody attestation or executable redemption path.

The preferred-share route must not be applied to every Saturn deployment or to USDat merely because the products share a name. Strata srUSDat adds its own senior/junior waterfall, bridge and exit conditions where this underlying route applies. The filing does not measure that protection, reverify token holdings or guarantee final payout.

## 5 · Contract & Admin — 3.5

The Ethereum vault is a UUPS deployment. Its reported admin role resolves to the same SaturnTimelock that administers USDat. Retained authority observations show a **five-day minimum delay**, self-administration and permissionless execution of matured operations. UUPS upgrade authorization runs through the vault's roles; a zero proxy-admin slot does not mean the contract is immutable.

| Component | Ethereum address |
|---|---|
| sUSDat vault | `0xD166337499E176bbC38a1FBd113Ab144e5bd2Df7` |
| USDat returned by the vault's asset accessor | `0x23238f20b894f29041f48D88eE91131C395Aaa71` |
| October 14 observed vault implementation | `0x2b7074cf6681382b70e239063931ebe83c0f4e0a` |
| Implementation listed in issuer repository | `0x2005e0ca201a37694125ff267ae57872bea0a0ce` |
| SaturnTimelock | `0xfD5782E3BFF366601da3973aE30C583dE4F08A67` |
| Observed proposer and canceller | `0x610182581C93687Ca03F4a8E7f124f8cEC616820` |

At the October 14 comparison, the issuer repository differed from the observed implementation address. Its reproducible audited-code proof names the older implementation; it does not establish the current implementation's source identity. The live implementation has not been independently source-matched, diffed against the published one or mapped to a current audit. [Issuer repository](https://github.com/saturn-organization/saturn-yield-dollar), [retained observations](/evidence/saturn/susdat-2026-10-14.json)

Saturn publishes contract audit materials. Their presence does not establish current deployed-code coverage, and privileged-role coverage and bug-bounty coverage remain unverified. The documented architecture includes a separately upgradeable withdrawal queue and privileged processing/compliance roles; that complete authority surface has not been walked for the current deployment.

The same observed address can propose and cancel operations. No on-chain signing quorum is visible; the inherited Fireblocks 2-of-3 representation cannot be verified from an EOA-format address. Candidate checks do not enumerate all role holders. Five days is a setting that can itself be changed through a delayed action, and its usefulness depends on exit availability. Ethereum findings do not assess documented BNB or Monad deployments. The unmatched implementation is not evidence of malicious code or an observed exploit.

## 6 · Issuer — 5.0

Saturn Labs is the project name. Its interface operator is **Saturn Global Capital Investments Ltd., a British Virgin Islands limited company**. BVI law governs; the terms generally require confidential, single-arbitrator BVI IAC arbitration after a 60-day informal process. Class actions are waived and a six-month claim-filing limit applies, subject to exceptions. [Terms, §§21–22](https://saturn.credit/legal/terms-conditions)

The product depends on the operator's reserve disclosures and fulfillment of withdrawals. Public information distinguishes on-chain USDat from the off-chain STRC claim, but independent reserve assurance remains incomplete. Historical fulfilled transactions establish operational activity rather than universal holder recourse.

Accountable legal principals, beneficial ownership, entity financial audit and an enforceable direct reserve claim remain unverified.  Contract audits and administrative controls are assessed under Contract & Admin.

## Who this is for

Eligible holders seeking Strategy preferred-stock income exposure who can accept principal drawdowns, custody dependence and operational withdrawal risk. It is poorly suited to a cash reserve, a large position requiring immediate secondary liquidation, or a holder who needs independently verified assets and a guaranteed settlement date.

## What to watch

- The dollar buffer and buffer/total-assets ratio together; deposits and withdrawals can move both rapidly.
- Quotes at the intended exit size, and a primary withdrawal simulation for the actual holder.
- A source match and independent review of the live implementation, including queue and compliance authority.
- Independently attested custody positions and a functioning reserve/NAV feed.
- Strategy's dividend decisions, STRC market price, buyback authorization and the distinct Cash and Reserve balances.
- Timelock operations and whether settlement can complete within the notice period.

## Sources and review scope

October 14 numerical observations are retained at **03:45:41 UTC** in the [snapshot](/evidence/saturn/susdat-2026-10-14.json). They were read from the public dashboard; contract calls, code verification and withdrawal simulations were not independently rerun. The October 13 assessment supplies the authored scores and implementation finding; the drift flag was already present on October 19 and is not evidence of a new upgrade from this filing. Historical withdrawal and NAV observations are inherited. Public repositories and terms were read on October 14; off-chain assets, legal recourse and remote controls remain incompletely assessed.



The [November 9 Strategy filing](https://www.sec.gov/Archives/edgar/data/1050446/000119312526452693/mstr-20261109.htm) covers November 2–8, balances November 8. This is a targeted issuer-dependency review on **November 10**. It does not refresh token holdings, reserve weights, custody, multipliers, waterfall protection, redemption eligibility or executable cash routes. Repurchases do not establish current outstanding shares, dividend-service burden or runway. The separately reviewed [October 29 STRC certificate](https://www.sec.gov/Archives/edgar/data/1050446/000119312526437776/mstr-ex3_2.htm) states effectiveness **November 1 at 00:01 Eastern**, with **November 3** as the first new regular payment date. That legal schedule is distinct from evidence that an individual STRC payment, wrapper receipt or downstream pass-through occurred. Daily and replaced semi-monthly distributions must not be added together.

The November 9 funding facts use retained primary filing evidence checked against documentary source hashes. [Selected public filing observations](/data/strategy/2026-11-09/filing-observations.json) distinguish that anchor from historical October reserve/quote readings. The filing does not remeasure current reserves or executable exits.

The Overall **3.0** remains below the six-axis mean of **3.17**. All scores and the full-verification date, **October 13, 2026**, are unchanged. Issuer **5.0** is carried rather than re-derived against current legal/financial inputs. November 10 records the targeted funding review.

## Revision history

- **2026-11-10:** Reviewed the November 9 filing, common-funded buybacks and modest cash rebuild; retained scores, full-verification dates and older product/source clocks.

- **2026-11-02:** Updated the Ethereum STRCon/STRC dependency and Strategy funding narrative, keeping USDat and other deployment routes separate. Consolidated review notes at the end; scores and full-verification date unchanged.

- **2026-10-26 — factual dependency propagation.** Incorporated accession 0001193125-26-431146, dated reserve and exit observations, provisional outstanding-count/runway limits and conditional November dividends. Scores and full verification dates unchanged.

- **2026-10-14 — measurements and presentation refreshed.** Updated NAV, reserve split, buffer distribution and secondary quotes. Separated the STRC and USDat dependency paths, consolidated contract assurance under axis 5, and added the BVI operator and recourse terms. Scores unchanged.
- **2026-10-13 — implementation assessment updated.** Contract & Admin 4.0 → 3.5; Overall 3.0. Incorporated the unmatched live implementation and October 12 STRC disclosure.
- **2026-10-04 — buffer and exit assessment refreshed.** Recorded buffer recovery and implementation-address change; Liquidity & Exit remained 2.0.
- **2026-09-09 — six-axis assessment adopted.** Added Backing 2.5 and Dependencies 2.5.
- **2026-08-23–24 — reserve and withdrawal observations refreshed.** Issuer 5.0; recorded substantial recovery from July's NAV drawdown and a buffer-funded withdrawal.
- **2026-07-13 — drawdown assessment updated.** Recorded NAV approximately 10.7% below issuance reference.

</div>
