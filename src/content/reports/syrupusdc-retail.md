---
asset: syrupUSDC
slug: syrupusdc
aliases:
- syrupUSDC
- SYRUPUSDC
- syrupUSD
- Syrup USDC
- Maple Syrup
- msyrupUSDp underlying
category: vault-share
underlying_assets:
- USDC
date: '2026-04-25'
last_verified: '2026-10-13'
last_revised: '2026-11-16'
yield_bearing: true
assessment_version: syrup-pair-transparency-correction-2026-11-16-v3
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
  backing_score: assessed
  liquidity_score: assessed
  underlying_score: assessed
  structural_score: assessed
  issuer_score: assessed
score_sensitive_findings:
- id: custody-allocation-net-recovery
  axes:
  - backing_score
  - issuer_score
  status: open_risk_limit_not_incomplete_score
  current_treatment: Current assessed grades incorporate unverified exclusive custody/control/priority,
    publisher valuation timestamps and net realization. No collateral cure/solvency
    guarantee inferred.
  reassess_with: Independent matched loan-level collateral allocation/control/title,
    dated valuation, realized servicing/recovery or a new credit event.
confidence_scope: Medium confidence on five axes; low confidence on Backing. The source-model
  mapping issue is resolved; custody and recovery limits are incorporated in assessed
  grades.
assessment_type: full
redemption_score: 6.0
volatility_score: 8.5
backing_score: 6.5
liquidity_score: 6.0
underlying_score: 5.5
structural_score: 4.5
issuer_score: 5.5
overall_score: 6.0
chains:
- eth
axis_frame: six
production: true
featured: false
audience: retail
verification_scope: bounded
issuer: Maple International Operations SPC
---
# syrupUSDC — Risk Report

## Summary

**6.0/10 — assessment complete.** syrupUSDC is a USDC-denominated Maple credit-pool share. All six scores are current assessed judgments with confidence shown separately; low-confidence Backing reflects unverified custody and net recovery, not unfinished analysis.

The issuer publishes 156.42% aggregate credit-value coverage, which is not independently verified collateral or pool solvency. The old undercollateralization model is withdrawn. Actual native pool cash was 130,550 USDC against 2.79m queued exit NAV at the dated financial pin, so immediate liquidity remains a separate constraint.

## Key Risks

- **Credit and recovery:** issuer-reported collateral values do not prove exclusive custody, secured priority or realizable proceeds (Axis 2).
- **Realization:** native cash, LP/DeFi unwindability, queue processing and final underlying conversion are separate legs (Axis 3).
- **Common dependencies and control:** borrower/custody concentration, settlement-token issuers and administrative exceptions can transmit loss (Axes 4–6).

## 1. Stability / Peg


**Score 8.5/10; confidence medium; assessed.** The share reference accrues in USDC; a stable reference is the share's dated NAV, not a fixed $1. The primary USD price/reference history binds the exact Ethereum token and retains varying dated reference values, rather than applying today's NAV backward.

The paired record covers 2025-10-07 to 2026-11-16: **8,951 valid price/reference observations over 404.3 days**. The reference changes from 1.12918629 to 1.19329000. Current registry metadata identifies CoinGecko market and Pyth reference inputs; it does not establish every historical source version. Early market marks are cent-rounded, and upstream observation clocks are not comprehensively retained. Those limitations are distinct from pool accounting. The last paired tracker row is 2026-11-16T00:17:30.537394+00:00 (UTC); this is not independently synchronized upstream vendor observation time.

| Paired observation window | Rows | Median market–reference gap | Worst sampled discount | Largest sampled premium |
|---|---:|---:|---:|---:|
| 30 days | 682 | -11.80 bps | -48.35 bps | 15.55 bps |
| 90 days | 2077 | -7.60 bps | -48.35 bps | 15.55 bps |

The latest sampled discount is -7.28 bps; the same-sign sampled run starts 2026-10-19 and spans 27.08 days. A small standing discount is not by itself an instability event. These are sampled marks: no continuity between samples, independent quote freshness or executable recovery is implied. The long sampled same-sign interval includes a roughly 32-hour data gap; it is not a continuous-discount duration. Legacy naive tracker timestamps are treated as UTC for this bounded review, and cached marks may repeat.

The sampled record spans over a year and contains a historical gap of about 20.7 days; it is not a continuously observed year. The evidenced span exceeds a year, but this review does not establish a stress episode and successful defence. **A long calm record is not evidence of resilience.** The 8.5 grade is therefore the calm-record ceiling, not demonstrated crisis performance.

Reported NAV may lag an unrecognized credit loss, and market marks are not cash exits. The measured secondary ladder belongs in Axis 3; the worst primary/secondary exit link governs that axis.

## 2. Backing and claims

**Score 6.5/10; confidence low; assessed.** The issuer's credit valuations are available for every loan in its Lending table. Availability is distinct from independent custody, exclusive allocation, legal priority and net recoverability, which remain unverified and constrain this grade.

syrupUSDC is a pool claim supported by institutional credit and supporting strategies, not a 1:1 USDC reserve receipt. Pool lenders bear net losses. Impairment can reduce pending exits; under published terms, an exiting impaired lender forfeits later recoveries on the affected loan. [Risk disclosures](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks).

### Pool accounting perimeter

The following native observations share Ethereum **block 26424095, November 16 2026 00:48:23 UTC**, with the block hash rechecked. Amounts are underlying-token units, not independently marked bank dollars.

| Observation | USDC or stated unit |
|---|---:|
| Pool accounting assets | 884,066,256.413682 |
| Actual underlying cash | 130,550.281789 |
| Cash / accounting assets | 0.0148% |
| Current LoanManager principal | 881,731,520.690000 |
| Recognized pool unrealized losses | 0 |
| Cash plus pool-specific claims minus accounting assets | 0 raw units |

The listed current principal reconciles exactly to the pool’s LoanManager. Shared strategy holdings are measured with `assetsOf(poolManager)`; global manager AUM is not assigned to every registered pool. These identities verify accounting ownership and arithmetic, **not independently recoverable credit NAV**. Accrued interest is not immediately available pool cash.

### Issuer-reported credit collateral

The upgraded [official product page](https://maple.finance/transparency/products/syrupusdc) was fetched at **2026-11-16T05:36:06.974758+00:00**. Its upstream collateral/price observation time is **not published**; fetch time is not the valuation clock. Exact loan addresses and principal amounts were matched to the separately pinned native roster.

| Issuer credit-table measure | Published value |
|---|---:|
| Matched credit rows | 24 |
| Credit principal denominator | 866,721,505.69 USDC |
| Summed issuer collateral values | 1,355,742,234.15 USD |
| Issuer-value / stated credit-principal ratio | 156.42% |

This is **complete publisher-value coverage**, not an independently verified reserve ratio or realizable credit NAV. The publisher's nominal USD/underlying valuation basis is retained. Loan claims, collateral, deposits, LP positions and headline AUM must not be added together as separate backing.

| Selected exact loan | Principal USDC | Issuer collateral USD | Issuer coverage |
|---|---:|---:|---:|
| `0x7f110947d89204d674c38eb0ed97f82ce5005fd6` | 200,000,000 | 313,530,354.82 | 156.77% |
| `0x63ea10531e976a7890f7eaef80f51da5498f9287` | 33,500,000 | 47,623,092.52 | 142.16% |
| `0x7669d26440804fbc7af8d8e660083e80176ce9a5` | 30,000,000 | 37,166,287.44 | 123.89% |
| `0x3ac7badb967dc12d5423a472b3bbfff082903043` | 25,000,000 | 31,415,819.51 | 125.66% |
| `0xbd331e5fd515e3ce4bdadccbefa0eebc05e2fb3f` | 16,500,000 | 22,947,613.57 | 139.08% |

The previously thin-model 25m ETH loan `0xeB1284bf810631eFa9AC913944095b5d8180D9F5` has an issuer-published value of 38,184,957.15 USD / 152.74%; its old 118.06% calculation is not retained as a financial observation.

All 24 issuer credit rows report at least 123.89% coverage at the page's unestablished valuation time. Four same-borrower 25m rows each publish about 31.42m USD / 125.66%; their values do not independently establish four exclusive pledges. The issuer Lending classification now includes a 10m row previously unclassified; this is a source classification, not newly funded principal or proof of legal ownership.

### Source-model correction and historical comparability

An earlier scalar model valued the GraphQL field `currentAssetAmount`. That field does not reproduce the official collateral measure. All 30 USDC/USDT issuer credit rows instead numerically reproduce `assetAmount` with common asset-specific inferred price scalars. Those scalars are a diagnostic reproduction, not independently observed prices or a universal interpretation of every strategy field. Current adoption uses the exact issuer collateral values directly.

**The six 146.5m below-par readings, the 25m thin-buffer reading, the 200m/WBTC missing-value inferences and the 475→65 BTC deterioration inference are withdrawn as misbound-model financial evidence.** This removes an unsupported penalty; it does not prove a borrower posted new collateral or that independent recovery improved.

Correct-field history also changes: the 16.5m loan's raw `assetAmount` moves from 58,500,000,000 to 35,500,000,000 across the retained November 11/16 records—compatible with 585→355 BTC under the diagnostic 8-decimal model. Physical custody movement, substitution or permitted collateral release has not been established. The current issuer value is 22.95m USD / 139.08%; the invalid old ratio must not be treated as a historical custody series or replaced with a claim that nothing changed.

Coverage above 100% does not establish compliance with a loan's actual maintenance margin. Initial target levels, live cure thresholds, waivers and enforceable liquidation rights were not verified from executed loan terms.

### Servicing and recovery limits

Native impairment, call and default flags were false at the financial pin. Recorded losses were zero. Those are protocol lifecycle/accounting observations, not independent credit clearance. Eight affected-instrument payment samples were reviewed: one successful receipt and incoming underlying transfer were independently matched; seven historical receipts were unavailable. Null receipts do not establish failed payments, and a successful sample does not certify the other loans.

Generic borrower-MLA documentation describes legal remedies and costs before pro-rata principal and interest. A historically source-bound LoanManager code path distributes recovered funds under its own rules. Neither establishes title, first priority, deliverable collateral or net recovery from an offchain custodian for these exact loans. Executed agreements, allocation/control records, substitution rights and liquidation timing/costs remain necessary evidence. [Borrower MLA](https://docs.maple.finance/legal/borrower-mla).

## 3. Liquidity & Exit


**Score 6.0/10; confidence medium; assessed.** Primary processing and secondary sale are separate exits. Their worse link governs the grade; inexpensive quotes do not average away queue or eligibility constraints.


At the native pin, the 22-ID queue pointer span contained **21 positive requests and one zero-share record**. Their shares reconcile exactly to total queued shares. Queued exit NAV was **2,793,909.076351 USDC**; actual pool cash covered about **4.67%** of that amount. All 21 creation times were matched to the existing event sample; the oldest had waited **21.93 hours**. This establishes constrained immediate liquidity, not a failed withdrawal or predicted completion time.

The separate 2.334m “cash plus accrued interest” display is not spendable cash. Against the November 11 baseline, actual cash fell from 18.145m USDC and the queue changed from empty to positive. Stock differences alone do not attribute withdrawals, lending or cash receipts.

| Latest seven-day linked completed requests | Observation |
|---|---:|
| Completed automatic, noncancelled requests | 216 |
| Request-count median | 3.00 minutes |
| Request-count 90th percentile | 20.43 hours |
| Maximum observed wait | 47.47 hours |

These are creation-to-full-processing waits for completed, linked requests, not outstanding-request survival estimates, share-weighted waits, independently settled cash or a guarantee for new requests. The indexer export crossed the 30-day boundary; cancelled and missing-creation scopes remain separate.

FIFO redemption requires liquidity and authorized processing. Legal disclosures establish **no guaranteed maximum withdrawal period**, despite FAQ wording mentioning 30 days. Market sales, bridges and subsequent underlying-token conversion introduce separate costs and dependencies. Current pool cash and prior indicative DEX quotes are not holder-specific executable capacity. [Withdrawal terms](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks).

### Measured secondary exit ladder

The exact-token Ethereum KyberSwap quote ladder was observed **2026-11-15T22:31:36Z**. Inputs are sized using the producer’s **market sizing reference**, 1.191447679549 USD per share, not the later pool NAV. The upstream observation time of that sizing reference was not retained; quote-call times do not establish reference freshness. Output below is native USDC; the price of USDC is not independently assumed to be an executable bank-dollar redemption.

| Market-reference input notional | Quoted underlying output | Shortfall versus input notional |
|---|---:|---:|
| $10,000 | 10,005.256498 USDC | -5.26 bps |
| $50,000 | 50,018.740162 USDC | -3.75 bps |
| $100,000 | 100,018.630890 USDC | -1.86 bps |
| $500,000 | 499,777.839989 USDC | 4.44 bps |
| $1,000,000 | 999,216.842832 USDC | 7.83 bps |

Shortfall is `(input notional − quoted native output) / input notional`; negative values mean output above the sizing reference, not free profit or negative execution risk. Raw input/output amounts and individual request/receive clocks are retained by the producer. Gas and unestablished net fees are excluded. Quotes are neither fills nor a located slippage crossing; failed larger rungs remain unavailable. Remote-chain inventory, bridges, eligibility and the underlying's final cash conversion were not made fungible by these Ethereum quotes.

### Issuer liquidity projection

The publisher labels about 15.18m USDC “instant,” but that includes about 15.05m of multi-chain LP and only 133.57k displayed cash. It is not 15.18m of verified Ethereum pool cash.

LP/DeFi receipt ownership, withdrawal limits, unwind liquidity, transport/bridges and fees are not independently verified. Scheduled principal and interest are projections, not cash received. The page's combined “Next call / Maturity” date and term label are issuer descriptions, not a fresh deployed-contract type, a guaranteed repayment date or the native payment-due field.

## 4. Dependencies


**Score 5.5/10; confidence medium; assessed.** Backing asks what assets support the claim; this axis asks which counterparties and systems transmit value or failure.

| Dependency | Role and risk transmission |
|---|---|
| Institutional borrowers | Repayment and collateral recovery support the pool; address concentration is not an independently consolidated legal-entity census. |
| Custodians, security agents and managed strategies | Allocation, exclusive pledge, control, liquidation and net recovery may rely on offchain contracts and operators. |
| Maple operators and shared control | Underwriting, servicing, loss recognition and operational authority are common dependencies across separate portfolios. |
| USDC / Circle | Pool denomination and settlement; issuer, banking, freeze and redemption eligibility affect final realization. |
| Remote token and bridge systems | A remote holder may need local sale or transfer to the Ethereum redemption path. Ethereum depth does not certify that chain's exit. |

The currently reviewed books share borrower address `0x8669f3189ea2318d28c7183a971d65e0c352f1e9`: 96.61001384m USDC principal and 55.18648837m USDT principal at the financial pin. Those native units are kept separate. The overlap is not proof of a shared legal book, ultimate beneficial identity or cross-pledged collateral.

Supporting-strategy registration is not funded exposure, withdrawable cash or diversification. Chain-specific historical grades are archived and suppressed from active inheritance until the remote deployment is assessed.

The upgraded source separates lending, Treasury, DeFi, trading, LP and idle allocations. Published headline AUM has a different perimeter from pool accounting assets and deposits; borrower collateral is not an additional pool-owned reserve. Parent Treasury, revenue, buybacks and other financial-page totals are not verified pool first-loss cover. [Issuer financials](https://maple.finance/transparency/financials).

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

The issuer is Maple International Operations SPC acting for Secured Loan Segregated Portfolio 1; Syrup Ltd operates the interface. The pool funds institutional credit and supporting yield strategies. Published terms limit claims to the relevant portfolio and allocate net loan losses proportionally to lenders. Portfolio segregation is a disclosed legal structure, not independent proof of perfected collateral rights or recovery priority.


LedgerLens identifies The Network Firm Tech & Services LLC as a technology provider and expressly excludes audit, review, attest and assurance services; its source accuracy/completeness is not independently confirmed. The reviewed USDC/USDT pool observations are dated **November 13 17:11 UTC**. Pool totals and a dashboard badge do not establish per-loan custody, title, allocation or actual servicing. [LedgerLens](https://dashboard.ledgerlens.io/c/maple).

The November 16 document comparison found five key document texts substantively unchanged since November 11. Unchanged disclosures do not independently establish custody, control, priority or net recovery. Executed security/custodian-control schedules, priority, segregation and actual recoverable collateral remain unavailable at loan level. Those facts constrain the current Backing and Issuer judgments without turning ordinary offchain uncertainty into an unfinished assessment. Source-value availability is not an assurance upgrade.

## Scoring Rationale

| Axis | Score | Basis |
|---|---:|---|
| Stability | 8.5 | See “1. Stability / Peg.” |
| Backing | 6.5 | See “2. Backing and claims.” |
| Liquidity & Exit | 6.0 | See “3. Liquidity & Exit.” |
| Dependencies | 5.5 | See “4. Dependencies.” |
| Contract & Admin | 4.5 | See “5. Contract & Admin.” |
| Issuer | 5.5 | See “6. Issuer.” |
| **Overall** | **6.0** | See “Composite judgment.” Six-axis mean 6.0833; overall does not exceed it. |

### Composite judgment

The unsupported model penalty on Backing is removed: the corrected 6.5 grade reflects institutional-credit and recovery risk under issuer-supplied values, rather than the invalid below-par calculation. Overall remains 6.0 against mean 6.0833 because exit and administrative constraints remain material. No above-mean exception is needed.

All six score decisions are assessed. Backing confidence remains low because valuation clocks, custody/control, exclusive allocation and net recovery are not independently verified. Completion records finished analytical work, not certainty. A matched adverse credit or recovery event can reopen these scores.

| Axis | Confidence | Decision status |
|---|---|---|
| Stability | Medium | Assessed against the evidenced record and reference. |
| Backing | Low | Assessed; wrong-field model resolved, recovery limits incorporated. |
| Liquidity & Exit | Medium | Assessed from dated primary state, cohorts and secondary ladder. |
| Dependencies | Medium | Assessed with ultimate-entity and exclusive-pledge limits. |
| Contract & Admin | Medium | Assessed within current finite and prior dated verification. |
| Issuer | Medium | Assessed with documentary and assurance limits. |

## Open finding and escalation triggers

Assessment `syrup-pair-transparency-correction-2026-11-16-v3` retains the financial baseline `sha256:c86253f8e5339cbebdc8747f960c181b40579240cd8abee00a588c3afde08944` for native pool accounting, loans and queues, and uses the separately hash-pinned upgraded-source correction for issuer credit values. Publisher pages were fetched November 16, but their upstream valuation time is unknown. Source-code, native, price-history, GraphQL and documentary clocks are not renewed by rebuilding the reports.

Reassess on independently matched collateral/custody/control evidence, missed payment beyond its actual grace period, failed margin cure, impairment/default, custody/priority loss, stale or misbound prices, growing or aging queues or failed exit execution. Do not revive the withdrawn old-field ratios as current evidence, or infer guaranteed recovery from the replacement issuer ratios.

Historical remote grades remain archived and suppressed from active inheritance. Exact account HFs and leverage sensitivity are position-specific; these asset grades neither approve a leveraged loop nor establish an emergency credit event.
