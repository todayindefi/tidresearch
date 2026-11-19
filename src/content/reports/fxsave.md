---
asset: fxSAVE
slug: fxsave
aliases:
- fxSAVE
- f(x) USD Saving
- fx Save
- fxSave
chains:
- ethereum
category: vault-share
underlying_assets:
- fxSP
- fxUSD
- USDC
assessment_type: full
date: '2026-09-22'
last_verified: '2026-11-17'
last_revised: '2026-11-17'
assessment_version: fxsave-six-axis-2026-11-17-v2
evidence_version: BM:closure-batch1-selected-inputs-v3;Security:lending-batch1-security-2026-11-17-v1;DA:batch-1-v1
volatility_score: 5.0
backing_score: 4.5
liquidity_score: 3.5
underlying_score: 4.5
structural_score: 4.0
issuer_score: 5.5
overall_score: 4.5
yield_bearing: true
score_status: assessed
score_assessed: '2026-11-17'
production: true
trust_disclaimer: false
selected_evidence_sha256: 820284af19d35fe5eaf129174c083ce8aaa4199bad831c525c1a9b6d86585a61
token_address: '0x7743e50f534a7f9f1791dde7dcd89f7783eefc39'
axis_frame: six
assessment_status: complete
axis_assessment_status:
  volatility_score: assessed
  backing_score: assessed
  liquidity_score: assessed
  underlying_score: assessed
  structural_score: assessed
  issuer_score: assessed
chain_overrides: {}
unassessed_chains: []
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_th]:min-w-[8rem] [&_td:not(:first-child)]:whitespace-nowrap" data-selected-report="lending-closure-2026-11-17">

# fxSAVE — Risk Report

**High risk · 4.5/10**

## Summary

fxSAVE is an Ethereum ERC-4626 claim on **fxSP stability-pool shares**, not a dollar deposit or a simple fxUSD savings balance. Returns compensate for stability-pool, collateral-management, contract and exit risks. Current share accounting reconciles; this does not establish loss-free liquidation recovery or unconditional dollar redemption.

## 1 · Stability — 5.0

fxSAVE's reference is an accruing share NAV, not a fixed $1 peg. At **November 17 04:47:11 UTC, Ethereum block 26432468**, protocol NAV was **$1.1308200669 per share**, using a conversion rate of **1.11924209816777 fxSP** and fxSP NAV **$1.0103444722**. Their product reconciles; these are protocol marks rather than independently executable cash prices.

The separate **04:17 UTC** route study used block 26432319 for basket sizing and independently timed router/oracle references. Its smallest direct-sale quote was close to NAV, while larger sales were materially worse. That is measured size-dependent exit behavior, not evidence of a uniform share depeg. No synchronized independent same-block basket valuation or complete time series was established. A stable mark can coexist with losses, constrained exits or gross-NAV liquidation pricing.

## 2 · Backing — 4.5

The direct token is fxSP `0x65c9a641afceb9c0e6034e558a319488fa0fa3be`. BM's accounting pin records about **43.0891m fxSAVE shares** against **48.2271m fxSP assets**; exact custody assets equal reported wrapper assets, with zero measured direct idle fxSP. The custody proxy is `0x4bfc5292da18e32ed2354350e07e417ce4796f9c`; the gauge is `0xed92dde3214c24ae04f5f96927e3be8f8dbc3289`. Native integer supply/rate/custody values reconcile. This verifies the wrapper claim and accounting perimeter, not independent market value, strategy liquidity or a corporate reserve audit.

fxSP participates in peg maintenance, rebalancing and liquidation-related operations. It is a variable loss-bearing pool claim supported by fxUSD/USDC and the system's collateral/position mechanics, not an unconditional fixed basket. Current primary queued output per fxSAVE share was approximately **0.2669054984 fxUSD plus 0.864181 USDC**. Composition can change, including much greater fxUSD exposure. Dollar basket values are withheld without matching token marks; adding nominal token units at par cannot resolve collateral or solvency risk.

## 3 · Liquidity & Exit — 3.5

A real holder can redeem its own fxSAVE shares into fxSP; an executor acting for another owner needs the proper share allowance. The wrapper itself calls its owned staking proxy, satisfying the proxy's owner check. Public fxSP instant redemption then burns the caller's available, unreserved fxSP and pays **fxUSD plus USDC**, currently less **1% on both components, once**. The separate queued route uses a **one-hour cooldown** and a subsequent claim; queue records, settings and actual asset availability matter.

At the accounting pin, indicative instant output per share was **0.2642364434 fxUSD plus 0.855540 USDC**. Source-level transfer logic can depend on configured underlying strategies when direct inventory is insufficient. Function returns and contract-context simulations therefore do not establish actual receiver balance changes, current strategy capacity or final USDC settlement. fxSAVE redemption alone yields fxSP, not USDC; a cash-only outcome also needs a successful fxUSD sale. The composed permissionless route is established in source, while sized funded execution remains unmeasured.

The **04:17 UTC** indicative ladder below retains its own block 26432319 and quote clocks. USD sizes use protocol NAV, not synchronized firm dollars. Output units are USDC and all full-path gas is excluded.

| Protocol-NAV input | Direct fxSAVE sale | Instant basket plus fxUSD-sale arithmetic |
|---|---:|---:|
| $1,000 | 999.13 USDC | 990.22 USDC |
| $10,000 | 9,981.70 USDC | 9,902.12 USDC |
| $100,000 | 99,324.08 USDC | 99,018.88 USDC |
| $1m | 716,503.22 USDC | 990,174.66 USDC |
| $10m | Not measured after direct-route termination | 9,899,792.77 USDC |

The direct million-dollar discount is not the only possible recovery route. Conversely, basket arithmetic is not demonstrated executable capacity. The standing 1% fee is already reflected in the instant legs and must not be deducted again or applied to direct-sale quotes. Coarse rungs do not locate an exact threshold crossing. Vendor HTTP 429 diagnostics are availability limits, not zero liquidity; unmeasured routes remain unknown. Quotes are indicative and independently cached, not reserved proceeds or completed liquidations.

At 04:47, Morpho custody held **21.5271m fxSAVE, about 49.96% of supply**, above the selected 30% review trigger. This is token custody concentration, not a count of independent beneficial owners, outstanding withdrawal requests or proven bad debt. Correlated borrower liquidations can pressure the same underlying exits.

## 4 · Dependencies — 4.5

The direct chain is **fxSAVE → custody/staking/gauge → fxSP → variable fxUSD/USDC exposures and f(x) collateral/position management**. Wrapper compounding, rewards, keepers, oracles, underlying strategies and payout swaps add operational dependencies. USDC transfer/issuer controls and fxUSD's collateral, keeper and peg mechanisms remain relevant after nominal basket redemption. The pool's common protocol and collateral dependencies limit diversification between its token legs.

This axis assesses the dependency chain; it does not imply a newly audited reserve or an independent score for every fxSP accounting layer. fxSP is analyzed here as the directly held loss-bearing pool claim. Pendle PT/SY and lending-vault layers are separately assessed instruments; their grades and exit paths are not inherited backward into direct fxSAVE.

The canonical profile records the operator's February 2025 keeper/RPC disruption and an April 2025 access-control vulnerability disclosure with a reported fix. Those dated accounts establish operational and code-risk examples, not independently verified current redundancy, actual loss amounts or a complete clean incident history. No fresh adverse event was established by this bounded documentary refresh.

## 5 · Contract & Admin — 4.0

At the separate Security pin **block 26432647, November 17 05:23:11 UTC**, the fxSAVE/fxSP proxies and installed implementations match retrieved verified-source records. The shared ProxyAdmin owner is source-bound timelock `0x68863fb8855b04509a835082478d6e3d0be4e61a`, with a measured **72-hour minimum**. This delays the checked upgrade route, not all effective controls.

A separate **6-of-9 Safe** remains a tested fxSAVE DEFAULT_ADMIN candidate alongside the timelock, supplying undelayed role/settings reach. The main Safe is nominally **6-of-9**, emergency Safe **3-of-4**; selected PoolManager emergency/asset-management paths remain active. Threshold counts do not establish independent humans or keys, and sampled role candidates do not constitute complete membership. The two selected wstETH/WBTC pool oracle owner getters point to the 72-hour timelock with pending owner zero. The tested historical deployer candidate does not hold the selected WBTC emergency role at this pin; that narrow negative does not certify every authority branch.

Source review establishes the holder redemption path and internal ownership gate. It is not a whole gauge/strategy audit, actual transfer demonstration, independent build or audited-commit/remediation match. The public audit index and bounty policy provide bounded assurance context; neither proves full deployed coverage, adequate tests, formal verification or loss insurance. Comprehensive live-role, pending-history and signer-custody assurance remains incomplete and constrains this score.

The direct fxSAVE lending oracle uses gross protocol NAV; it does not deduct instant fees or price liquidation size. This is primarily a lending-market valuation risk rather than a dollar redemption promise by the token. Privileged settings, strategy funding and actual payout transfers remain material even when the NAV getter succeeds.

## 6 · Issuer — 5.5

f(x)/AladdinDAO maintains documentation, public source/deployments, audits and governance information. Current interface terms remain dated **March 5,2026**, describe community contributors, disclaim fiduciary/insured guarantees and restrict interface access in named jurisdictions. These are published positions, not an independent finding that no legal entity or possible remedy can exist. No exact-token corporate dollar repayment obligation, signed financial assurance or independently established holder priority was found in the bounded review.

Token governance, interface terms and live administrative control are different evidence layers. Reputation, protocol revenue and advertised rewards do not establish a guarantee. Institutional signer independence, legal recovery and complete governance/conduct history remain uncertain. The score reflects observable disclosure and functioning public mechanisms alongside those limits.

## Escalation triggers and monitoring

Reassess on custody/accounting mismatch, loss or adverse fxUSD/USDC/underlying collateral marks, missing payout transfers or strategy releases, changed fee/cooldown/role/code, rising correlated custody or liquidation pressure, persistent exit-quote deterioration, failed ordinarily funded redemption, material keeper failure, or sourced adverse governance/security developments. Better funded-route or assurance evidence can also improve confidence.

BM's maintained producer exposes current accounting, basket configuration, concentration and matched route observations. Exact cash execution, comprehensive authority history and continuous borrower-health monitoring are not established by that producer. 

## Sources and clocks

Financial, exit, source/control and documentary observations retain the dates stated above. Product documentation was reviewed November 17. Current source review does not renew the dates of older incident accounts, audit reports or legal terms. These separately timed sources are not an atomic cash-recovery proof.

- fxSAVE integration
- Stability-pool mechanics
- [Interface terms](https://fx.aladdin.club/terms-of-use)
- Audit index
- [Installed wrapper source](https://sourcify.dev/server/v2/contract/1/0xe4031e271809d20074e4bef1caeefec5f710e8a6?fields=all)

## Revision history

2026-11-17: whole current report refreshed into the maintained six-axis format; overall4.5 retained as a completed judgment. Added an explicit Dependencies score and current source/control, basket, fee, queue and concentration evidence. Replaced the legacy standalone Redemption score with the integrated Liquidity & Exit assessment. Historical explanations, corrected source interpretations and obsolete role assertions are retained in the frozen review baseline rather than the main analysis. Creation date remains September 22.

2026-11-10: targeted six-axis/concentration and exit-evidence review; prior assessment and complete historical text retained in the review archive.

2026-11-17: current status/version fields exported for evidence-drift detection; grade unchanged. Editorial revision wording confined to history.

</div>
