---
asset: syrupUSDT
slug: syrupusdt
aliases:
- syrupUSDT
- SYRUPUSDT
- Syrup USDT
- Maple Syrup USDT
category: vault-share
underlying_assets:
- USDT
date: '2026-05-03'
last_verified: '2026-10-13'
last_revised: '2026-11-16'
issuer: Maple International Operations SPC
yield_bearing: true
assessment_version: syrup-pair-six-axis-2026-11-16-v2
evidence_version: sha256:c86253f8e5339cbebdc8747f960c181b40579240cd8abee00a588c3afde08944
score_assessed: '2026-11-16'
score_status: assessed
assessment_status: complete
axis_confidence:
  volatility_score: medium
  backing_score: low
  liquidity_score: medium
  underlying_score: medium
  structural_score: medium
  issuer_score: medium
axis_assessment_status:
  volatility_score: assessed
  backing_score: provisional
  liquidity_score: assessed
  underlying_score: assessed
  structural_score: assessed
  issuer_score: assessed
score_sensitive_findings:
- id: collateral-meaning-allocation-recovery
  axes:
  - backing_score
  current_treatment: Backing grade under review; overall remains the current assessed
    judgment with low-confidence backing sensitivity. No healthy-from-zero-loss inference.
  materiality: 50m USDC-labelled initial-par exposure has no current verified recoverable
    collateral value; attributable title/control/amount evidence could materially
    change backing.
  reassess_with: Dated per-loan field definitions and exclusive custody allocation/security/control
    records, movement reconciliation and independent servicing/recovery evidence.
confidence_scope: Medium evidence confidence except low-confidence Backing; confidence
  is distinct from assessment completion and numerical grade.
axis_frame: six
assessment_type: full
redemption_score: 5.5
volatility_score: 7.5
backing_score: 6.0
liquidity_score: 5.5
underlying_score: 4.0
structural_score: 4.5
issuer_score: 5.5
overall_score: 5.5
chains:
- eth
production: true
featured: false
audience: retail
verification_scope: bounded
---

# syrupUSDT — Risk Report

## Summary

**5.5/10 — assessment complete.** This is the current Ethereum pool judgment, with confidence shown by axis. Backing has a specific unresolved score-decision input; it does not mean the assessment or dashboard is half-finished. The overall grade incorporates that uncertainty and can be reassessed if matched collateral evidence changes the conclusion.

syrupUSDT is a USDT-denominated Maple lending-pool share, not a guaranteed bank-dollar or one-to-one stablecoin reserve claim. Credit losses, conditional exits, concentrated control and dependencies can affect a holder before formal default is recognized.

The 50m USDC-at-initial-par loan has no verified current collateral value. The largest listed loan is 70m and largest borrower group 92.23m; initial-par exposure is not the largest overall loan. Cash is 8.91m USDT with an empty queue at the pin, which is no future settlement guarantee.

## Key Risks

- **Credit evidence:** collateral field meaning, exclusive allocation and enforceable recovery remain unresolved; zero recorded losses does not clear the finding (Axis 2).
- **Realization:** queue processing, secondary size, eligibility and final underlying conversion have different limits (Axis 3).
- **Common dependencies and control:** borrower/custody concentration, stablecoin issuers and administrative exceptions can transmit losses across otherwise separate pools (Axes 4–6).

## 1. Stability / Peg

**Score 7.5/10; confidence medium; assessed.** The share reference accrues in USDT; a stable reference is the share's dated NAV, not a fixed $1. The primary USD price/reference history binds the exact Ethereum token and retains varying dated reference values, rather than applying today's NAV backward.

The paired record covers 2025-12-23 to 2026-11-16: **7,671 valid price/reference observations over 327.4 days**. The reference changes from 1.10870900 to 1.15296700. Current registry metadata identifies CoinGecko market and Pyth reference inputs; it does not establish every historical source version. Early market marks are cent-rounded, and upstream observation clocks are not comprehensively retained. Those limitations are distinct from pool accounting. The last paired tracker row is 2026-11-16T00:17:30.537394+00:00 (UTC); this is not independently synchronized upstream vendor observation time.

| Paired observation window | Rows | Median market–reference gap | Worst sampled discount | Largest sampled premium |
|---|---:|---:|---:|---:|
| 30 days | 681 | -11.55 bps | -65.64 bps | 32.38 bps |
| 90 days | 2076 | -9.70 bps | -73.82 bps | 83.62 bps |

The latest sampled discount is -5.23 bps; the same-sign sampled run starts 2026-11-07 and spans 8.92 days. A small standing discount is not by itself an instability event. These are sampled marks: no continuity between samples, independent quote freshness or executable recovery is implied. The long sampled same-sign interval includes a roughly 32-hour data gap; it is not a continuous-discount duration. Legacy naive tracker timestamps are treated as UTC for this bounded review, and cached marks may repeat.

The evidenced paired record is under a year. **The 90–365-day stability ceiling is 7.5.** No accepted older matched record is established in the selected sources. This evidence ceiling does not assert a new depeg, loss or credit deterioration; older independently evidenced history can reopen the cap.

Reported NAV may lag an unrecognized credit loss, and market marks are not cash exits. The measured secondary ladder belongs in Axis 3; the worst primary/secondary exit link governs that axis.

## 2. Backing and claims

**Score 6.0/10; confidence low; this axis's score is provisional for the named collateral finding.** The assessment work is complete. Resolving whether the reported collateral is missing, substituted, shared or misinterpreted could materially change this grade; routine offchain uncertainty alone is not the reason for that status.

syrupUSDT is a pool claim backed by institutional credit and supporting strategies. It is not a 1:1 USDT reserve receipt. Impairment can reduce redemption proceeds before formal default. A pending withdrawal can be haircut, and an exiting impaired lender forfeits later recoveries on that impaired loan under the disclosed terms. [Maple risk disclosures](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks).


The following native observations share Ethereum **block 26424095, November 16 2026 00:48:23 UTC**, with the block hash rechecked. Amounts are underlying-token units, not independently marked bank dollars.

| Observation | USDT or stated unit |
|---|---:|
| Pool accounting assets | 247,670,669.248997 |
| Actual underlying cash | 8,913,342.952633 |
| Cash / accounting assets | 3.5989% |
| Current LoanManager principal | 238,402,567.370000 |
| Recognized pool unrealized losses | 0 |
| Cash plus pool-specific claims minus accounting assets | 0 raw units |

The listed current principal reconciles exactly to the pool’s LoanManager. Shared strategy holdings are measured with `assetsOf(poolManager)`; global manager AUM is not assigned to every registered pool. These identities verify accounting ownership and arithmetic, **not independently recoverable credit NAV**. Accrued interest is not immediately available pool cash.

### Concentration and initial-par exposures

The normal producer’s metadata clock is November 16 00:43:30 UTC, with assembly at 00:43:38 UTC. The 50m loan `0x01a30dE2836Db8E3Fce3168e33215018601C728F` is **20.97% of enumerated principal**, or about 20.19% of pool accounting assets. Its borrower address is `0x1Af652b5e28fB0d113aDf0803cCF8F34862bBAA5`; no ultimate legal identity is inferred.

Its 100% label is the initial collateral term. The current source quantity is anomalous and its current collateral valuation is null, as it was on November 11. No matched custody allocation, security/control agreement, exclusive pledge, liquidation access or net recovery has been established. Stablecoin labels and assumed $1 prices do not prove enforceable collateral value.

The largest listed loan is **70m USDT**, BTC-labelled collateral, at `0x8a44ff7b9E755A9eA6a4ee0708b7D46c79eAcE4f` (29.36% of principal). The largest borrower address group totals **92.23m USDT, 38.69% of principal**. A separate XRP-labelled loan is 55.186m; the fresh XRP price read failed and remains unavailable in the staged valuation model. Largest-loan and largest-borrower measures describe different concentration risks.

Set B consists of **12 initially-at-par positions totaling 88.350020m USDT, 37.06% of enumerated principal**. It includes supporting strategies as well as credit. The earlier ratio was 103.550020m / 268.60256737m = 38.55%; principal reductions and the changed denominator explain the displayed 39% → 37%. These stock differences are not independently verified cash repayments or evidence of improved collateral quality.

USDC, PYUSD, USDT and tokenized-asset exposures add issuer, freeze, eligibility, custody and conversion risks. Repayment is denominated in USDT while some collateral is denominated in another asset; initial par supplies no buffer for an adverse basis, liquidation expenses or senior recovery costs. Independent full-book recoverable coverage remains unknown.

### Servicing and recovery limits

Native impairment, call and default flags were false at the financial pin. Recorded losses were zero. Those are protocol lifecycle/accounting observations, not independent credit clearance. Eight affected-instrument payment samples were reviewed: one successful receipt and incoming underlying transfer were independently matched; seven historical receipts were unavailable. Null receipts do not establish failed payments, and a successful sample does not certify the other loans.

Generic borrower-MLA documentation describes legal remedies and costs before pro-rata principal and interest. A historically source-bound LoanManager code path distributes recovered funds under its own rules. Neither establishes title, first priority, deliverable collateral or net recovery from an offchain custodian for these exact loans. Executed agreements, allocation/control records, substitution rights and liquidation timing/costs remain necessary evidence. [Borrower MLA](https://docs.maple.finance/legal/borrower-mla).

## 3. Liquidity & Exit

**Score 5.5/10; confidence medium; assessed.** Primary processing and secondary sale are separate exits. Their worse link governs the grade; inexpensive quotes do not average away queue or eligibility constraints.


The native queue had zero positive requests and zero queued shares at the financial pin; oldest request age is not applicable, not a measured zero wait. Actual cash increased from about 5.116m USDT in the November 11 baseline to 8.913m. That improves this snapshot but does not establish future withdrawal capacity or final cash settlement.

| Latest seven-day linked completed requests | Observation |
|---|---:|
| Completed automatic, noncancelled requests | 153 |
| Request-count median | 3.00 minutes |
| Request-count 90th percentile | 0.09 hours |
| Maximum observed wait | 2.39 hours |

These are creation-to-full-processing waits for completed, linked requests, not outstanding-request survival estimates, share-weighted waits, independently settled cash or a guarantee for new requests. The indexer export crossed the 30-day boundary; cancelled and missing-creation scopes remain separate.

FIFO redemption requires liquidity and authorized processing. Legal disclosures establish **no guaranteed maximum withdrawal period**, despite FAQ wording mentioning 30 days. Market sales, bridges and subsequent underlying-token conversion introduce separate costs and dependencies. Current pool cash and prior indicative DEX quotes are not holder-specific executable capacity. [Withdrawal terms](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks).

### Measured secondary exit ladder

The exact-token Ethereum KyberSwap quote ladder was observed **2026-11-15T22:31:47Z**. Inputs are sized using the producer’s **market sizing reference**, 1.151892952670 USD per share, not the later pool NAV. The upstream observation time of that sizing reference was not retained; quote-call times do not establish reference freshness. Output below is native USDT; the price of USDT is not independently assumed to be an executable bank-dollar redemption.

| Market-reference input notional | Quoted underlying output | Shortfall versus input notional |
|---|---:|---:|
| $10,000 | 9,987.924356 USDT | 12.08 bps |
| $50,000 | 49,938.476616 USDT | 12.30 bps |
| $100,000 | 99,874.090468 USDT | 12.59 bps |
| $500,000 | 499,255.971350 USDT | 14.88 bps |
| $1,000,000 | Unavailable | Quote failed (http_530); capacity unmeasured |

Shortfall is `(input notional − quoted native output) / input notional`; negative values mean output above the sizing reference, not free profit or negative execution risk. Raw input/output amounts and individual request/receive clocks are retained by the producer. Gas and unestablished net fees are excluded. Quotes are neither fills nor a located slippage crossing; failed larger rungs remain unavailable. Remote-chain inventory, bridges, eligibility and the underlying's final cash conversion were not made fungible by these Ethereum quotes.

## 4. Dependencies

**Score 4.0/10; confidence medium; assessed.** Backing asks what assets support the claim; this axis asks which counterparties and systems transmit value or failure.

| Dependency | Role and risk transmission |
|---|---|
| Institutional borrowers | Repayment and collateral recovery support the pool; address concentration is not an independently consolidated legal-entity census. |
| Custodians, security agents and managed strategies | Allocation, exclusive pledge, control, liquidation and net recovery may rely on offchain contracts and operators. |
| Maple operators and shared control | Underwriting, servicing, loss recognition and operational authority are common dependencies across separate portfolios. |
| USDT plus USDC, PYUSD and tokenized collateral | USDT repayment can depend on a different collateral issuer/peg/custodian. Cross-asset basis, freeze and redemption restrictions survive nominal initial par. |
| Remote token and bridge systems | A remote holder may need local sale or transfer to the Ethereum redemption path. Ethereum depth does not certify that chain's exit. |

The currently reviewed books share borrower address `0x8669f3189ea2318d28c7183a971d65e0c352f1e9`: 96.61001384m USDC principal and 55.18648837m USDT principal at the financial pin. Those native units are kept separate. The overlap is not proof of a shared legal book, ultimate beneficial identity or cross-pledged collateral.

Supporting-strategy registration is not funded exposure, withdrawable cash or diversification. Chain-specific historical grades are archived and suppressed from active inheritance until the remote deployment is assessed.

## 5. Contract & Admin

**Score 4.5/10; confidence medium; assessed.** This axis covers code and administrative authority, not borrower quality or issuer credit.


Security’s separate November 16 block 26424185 source/runtime check found both PoolManagers still using implementation `0x47feaa096efe5d44ed9378a29705c47c60ffc3b5`. Its block time was 01:06:23 UTC, about 5.92 seconds ahead of the local retrieval clock; no separate finality/hash recheck was recorded for that Security observation. This does not renew every loan or queue control check.

The source-bound `hasSufficientCover()` returns constant true because delegate cover is deprecated. The current cover getter reverts. Neither is evidence of a funded first-loss cushion, a measured zero balance, an enforceable minimum or a replacement guarantee. Historical delegate-cover descriptions cannot be carried across versions without qualification.

The broader **November 11** finite authority review found security-admin-only PoolManager upgrades and an immediate security-admin exception to the queue delegate’s scheduled upgrade path. It reported concentrated shared authority, operational queue powers and permission gating. Those role/module/permission and queue observations retain their original dates; complete signer independence, all execution exceptions and full audited-build correspondence remain unresolved. Source-file audit matches are narrower than deployment-level assurance. [Security documentation](https://docs.maple.finance/technical-resources/security/security).


### Code assurance coverage

| Required assurance question | Established scope and limit |
|---|---|
| Named engagement applicable to deployed components | The November 11 finite source review matched six principal files to Cantina final references. Full engagement applicability to every deployed component is not established. |
| Upgrade-path and admin-role audit coverage | Coverage of every live upgrade, pause, permission and emergency path is not established by those file matches. |
| Audited commit versus deployed code | Current PoolManager runtime/source correspondence is checked within its stated scope; complete audited compiler, dependency and deployment-build equivalence remains unestablished. |
| Bounty scope and exclusions | Current applicable scope, exclusions and privileged-key coverage were not established in this review; no bounty protection is credited. |
| Formal verification | No applicable system-wide proof scope is established here; this does not assert that no component was ever verified. |
| Published test coverage | Coverage applicable to the deployed configuration was not established; no test-coverage premium is credited. |

### Authority, delay and key cost

The following fuller authority observations are dated **November 11**, separate from the November 16 finite PoolManager check.

| Path | Observed control and timing | Important limit |
|---|---|---|
| PoolManager upgrade | Security-admin-only; known admin nominally a 3-of-6 Safe. No universal notice period is established. | Complete modules, signer independence and effective minimum key cost are not verified. |
| WithdrawalManager delegate upgrade | Scheduled `WM:UPGRADE` path had a seven-day default and two-day execution window. | SecurityAdmin can bypass that schedule; holders cannot rely on seven-day notice for every upgrade. |
| Queue processing and request handling | Authorized actors have operational processing, manual-withdrawal and removal powers. | Returning shares on removal is not payment; current complete pause/permission and holder eligibility checks were not renewed. |

Strong source assurance cannot offset a cheaper emergency authority path. These limitations constrain the 4.5 Contract & Admin judgment; they do not imply a newly observed exploit or governance change.

## 6. Issuer

**Score 5.5/10; confidence medium; assessed.** Documentary transparency and named accountable entities support a judgment, but are not a financial guarantee. Limits to independent assurance are incorporated into this grade.

The issuer is Maple International Operations SPC acting for Maple USDT Segregated Portfolio 1; Syrup Ltd operates the interface. The pool funds institutional credit and supporting yield strategies. Published terms limit claims to the relevant portfolio and allocate net loan losses proportionally to lenders. Portfolio segregation is a disclosed legal structure, not independent proof of perfected collateral rights or recovery priority.


LedgerLens identifies The Network Firm Tech & Services LLC as a technology provider and expressly excludes audit, review, attest and assurance services; its source accuracy/completeness is not independently confirmed. The reviewed USDC/USDT pool observations are dated **November 13 17:11 UTC**. Pool totals and a dashboard badge do not establish per-loan custody, title, allocation or actual servicing. [LedgerLens](https://dashboard.ledgerlens.io/c/maple).

DA’s November 16 comparison found five key document texts substantively unchanged since November 11. That documentary result does not clear the collateral discrepancies. Executed security/custodian-control schedules, priority, segregation and actual recoverable collateral remain unavailable at loan level. Those facts are tracked as the material Backing finding; generic issuer opacity is not counted twice or used to leave the whole report perpetually unfinished.

## Scoring Rationale

| Axis | Score | Basis |
|---|---:|---|
| Stability | 7.5 | See “1. Stability / Peg.” |
| Backing | 6.0 | See “2. Backing and claims.” |
| Liquidity & Exit | 5.5 | See “3. Liquidity & Exit.” |
| Dependencies | 4.0 | See “4. Dependencies.” |
| Contract & Admin | 4.5 | See “5. Contract & Admin.” |
| Issuer | 5.5 | See “6. Issuer.” |
| **Overall** | **5.5** | See “Composite judgment.” Six-axis mean 5.5000; overall does not exceed it. |

### Composite judgment

The 5.5 overall equals the six-axis mean 5.5 after applying the evidenced-record ceiling to Stability. This correction is about the support for Axis 1, not a new loan loss. The legacy redemption field mirrors Axis 3 and is not a seventh conceptual risk axis.

A completed assessment is not a claim of complete knowledge. “Assessed” means the current judgment has been made under stated limits; confidence describes strength of evidence. The provisional Backing grade names the unresolved decision input rather than treating routine offchain uncertainty as an unfinished report.

| Axis | Confidence | Decision status |
|---|---|---|
| Stability | Medium | Assessed against the evidenced record and stated reference. |
| Backing | Low | Score under review for the named collateral finding. |
| Liquidity & Exit | Medium | Assessed using dated primary state, cohorts and secondary ladder. |
| Dependencies | Medium | Assessed; ultimate entities and exclusive pledges remain limited. |
| Contract & Admin | Medium | Assessed within current finite and prior dated verification scopes. |
| Issuer | Medium | Assessed; disclosure and assurance limitations are incorporated. |

## Open finding and escalation triggers

50m USDC-labelled initial-par exposure has no current verified recoverable collateral value; attributable title/control/amount evidence could materially change backing. Dated per-loan field definitions and exclusive custody allocation/security/control records, movement reconciliation and independent servicing/recovery evidence.


Assessment `syrup-pair-six-axis-2026-11-16-v2` uses financial evidence snapshot `sha256:c86253f8e5339cbebdc8747f960c181b40579240cd8abee00a588c3afde08944`, with separately recorded price-history and valuation-provenance reviews. The history analysis has a November 16 00:48:23 UTC cutoff; original pool accounting, loan metadata, GraphQL retrieval, upstream price rounds, deployed-contract checks and documentary dates remain separate. A later calculation or export does not renew those observations. BTC/ETH round times were retained; fresh XRP pricing failed, and source-specific heartbeat limits are not comprehensively verified.

Reassess urgently on independently corroborated collateral release without replacement, failed margin cure, payment beyond actual grace, impairment/default, custody or priority loss, stale/misbound valuation, growing or aging withdrawals, or failed exit execution. Missing data must stay unknown, and zero recognized losses must not dismiss a collateral discrepancy. This is an exact Ethereum assessment with explicit limits; historical remote overrides are not freshly certified.
