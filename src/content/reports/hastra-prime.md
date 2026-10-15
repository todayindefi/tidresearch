---
asset: "Hastra PRIME"
slug: "hastra-prime"
aliases: ["PRIME", "Hastra PRIME", "Staked wYLDS"]
chains: ["solana", "ethereum"]
category: "vault-share"
underlying_assets: ["wYLDS", "YLDS"]
assessment_type: "light"
companion_report: "wylds"
date: "2026-07-25"
last_verified: "2026-09-11"
last_revised: "2026-10-15"
# October 15 working RiskAnalyst refresh: Backing and Overall 4.5.
# Source changes were uncommitted in the upstream workspace when reviewed.
# Partial pass: current balance reconstruction, Figure API and later AUTO review.
# No fresh recursive authority walk, independent full exit ladder or new SEC filing verification.
# issuer omitted: Figure/FCC and Hastra are distinct counterparties; Provenance is a chain.
# market_cap_approx is indicative supply x issuer NAV x assumed $1 wYLDS, not a market-price capitalization.
# PARKED: derive merged Liquidity & Exit against current primary-route evidence; 7.0 carried from September secondary assessment, legacy redemption 6.0 [owner: riskAnalyst] [since: 2026-10-15]
# PARKED: re-derive Issuer with Hastra legal principals and recourse; 6.5 is inherited and chiefly supported by FCC disclosure [owner: riskAnalyst] [since: 2026-10-15]
featured: false
production: true
yield_bearing: true
axis_frame: six
volatility_score: 6.0
backing_score: 4.5
structural_score: 5.0
# Legacy field is required by the vault-share schema; primary redemption is discussed in axis 3.
redemption_score: 6.0
underlying_score: 5.5
liquidity_score: 7.0
issuer_score: 6.5
overall_score: 4.5
market_cap_approx: 585983795
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=hastra-prime"
---

# Hastra PRIME — Risk Report

**Moderate-elevated risk · 4.5/10**

Yield-bearing wYLDS staking share · Figure-operated private-credit facilities · Ethereum and Solana.

[Live backing, yield and liquidity dashboard](https://tidresearch.com/dashboards/?asset=hastra-prime)

## Summary

PRIME is Hastra's staking token: deposit [wYLDS](/reports/wylds/) and receive a share whose value accrues in wYLDS. Its income comes from Figure's lending facilities. Although the underlying YLDS certificate is backed by Treasury and repo assets, the reserve supporting wYLDS includes lending-pool receipts. A PRIME holding therefore depends on credit recovery, receipt valuation and an operational conversion process as well as the certificate underneath.

The **October 15 03:52 UTC** snapshot reports **550.420M PRIME** across Ethereum and Solana at a reference NAV of **1.0646117 wYLDS per PRIME**. That implies approximately **$585.984M at NAV**, assuming wYLDS equals $1; it is not a measured secondary-market capitalization. The contemporaneous issuer rate is **5.659%**, distinct from longer-window NAV accrual.

The **4.5 overall score is below the six-axis mean of 5.75**. The score reflects a narrower Home Equity facility cushion, concentrated operating dependencies and limited transparency over recovery and settlement. Only Backing and Overall were reassessed in the October 15 research; the other axes retain their dated assessment bases.

## 1 · Stability — 6.0

PRIME accrues through its exchange rate rather than targeting a fixed $1 market price. At the retained snapshot, Ethereum supply was **431.731M PRIME** and Solana supply **118.690M**. The reference NAV was **1.0646117 wYLDS**; Ethereum assets divided by shares independently reproduced **1.0646038** in the producer's reads. These are different valuation observations with a small reconciliation difference, not a guarantee of redeemability. [Dated measurements](/evidence/hastra-prime/refresh-2026-10-15.json)

The issuer rate of **5.659%** was collected at **03:00 UTC**. Trailing NAV accrual annualized to **6.129% over seven days** and **6.171% over 30 days**. The windows differ, and the NAV is issuer-administered. Hastra describes a utilization-driven pool rate less a 50-basis-point platform fee. The separately claimable wYLDS yield should not be added to PRIME's rate. [Rate explanation](https://help.hastra.io/537c06bd5c2e82d398e0014be2ff02b2), [yield treatment](https://help.hastra.io/wylds/claim-your-yields)

**Risks and limitations.** NAV accrual is a reported valuation symptom rather than an independent credit-impairment test. Loan losses, valuation changes or weaker utilization can reduce returns; no minimum yield or permanent upward NAV path is established. Stability 6.0 is retained from the earlier assessment, not a freshly reconstructed market-history result.

## 2 · Backing — 4.5

The reserve reconstructed behind **680.683M wYLDS** is **$681.950M**, giving **100.18615% reported coverage** and a surplus of **$1.267M, or 18.61 basis points of wYLDS supply**. This ratio covers the wYLDS reserve layer. PRIME's staking-vault coverage, facility collateral and FCC's certificate reserve are separate obligations and denominators.

| Component | Reconstructed claim / face value | Share of total backing |
|---|---:|---:|
| Home Equity pool receipt HEYLDS | $585.987M | 85.928% |
| Automobile pool receipt AUTOYLDS | $90.626M | 13.289% |
| SMB receipt | $337 | Less than 0.001% |
| Crypto-backed loan receipt | $0 | 0% |
| Direct YLDS, redeem vault plus sweep | $5.338M | 0.783% |

Receipt claims and direct YLDS reconcile to reported backing in the **03:52 UTC** snapshot. Zero crypto-backed receipt value is a measured zero in that snapshot. Broader underlying collateral weights are not inferred from it. Receipts use indexed underlying-equivalent accounting; a receipt-token count cannot universally be valued at a fixed 1:1 conversion. [Reserve observations](/evidence/hastra-prime/refresh-2026-10-15.json)

### Home Equity facility cushion

The independently retrieved Figure API at **04:54 UTC** reports **$403,802,790.94 debt against $424,377,735.26 pledged collateral**. The resulting cushion is **4.848% of reported collateral**, or **95.152% debt-to-collateral**. The earlier monitoring snapshot measured **4.834%**, reflecting a different retrieval time.

At the direct API reading, debt exceeds **95% of reported collateral by approximately $643,942**. This falls short of the cushion implied by the 95% advance reference, but remains below the separate **98% margin-call** and **100% liquidation** ratios. The smaller margin on the dominant backing exposure supports **Backing 4.5**. [Figure API response](/evidence/hastra-prime/figure-pools-2026-10-15.json)

The Home Equity pool includes HELOC, non-qualified HELOC, residential transition and DSCR collateral classes. Their relative dollar weights were not established because marker decimals remain unresolved. Its originator-reported statistics include **67.94% utilization**, weighted-average credit score **749.5** and CLTV **59.81%**. These describe Home Equity, not Automobile or the aggregate reserve. Property-level equity and the facility's advance cushion protect different obligations; they cannot be added together.

### Automobile exposure

Later sequential Provenance reads found Hastra's Automobile claim at approximately **91.496M underlying-equivalent YLDS**, or **45.59% of that pool's receipt claims**. This is ownership of the Automobile pool, not its share of the full wYLDS reserve. The pool held **32.298M shared idle YLDS**; that is not cash reserved solely for Hastra.

The Automobile review concerns non-prime consumer receivables and does not establish current loan-level performance or recoverability. Its approximately **13.00% gross-value cushion** incorporates a **91.57% collateral discount factor** before the **95% margin reference**. It is not 13% spare headroom above the lending rule. Later receipt and pool reads use different clocks from the reserve table. [Retained component measurements](/evidence/hastra-prime/refresh-2026-10-15.json)

**Risks and limitations.** Receipt accounting does not independently verify loan collections or realizable collateral value. The Home Equity advance-reference excess is an observed measurement, not proof of contractual default, failed margin enforcement or realized loss; interest accrual, timing and enforcement conventions need reconciliation. Restoration of the prior backing assessment requires sustained, reconciled compliance and an explanation of the excess. The thin reserve surplus, common Figure operator and unresolved collateral quality remain material.

## 3 · Liquidity & Exit — 7.0

Holders can sell PRIME on secondary markets or unstake into wYLDS and request conversion into USDC. The primary route requires operational fulfillment and YLDS realization; receipt ownership and a positive reserve ratio alone do not establish settlement capacity for a specific ticket.

The October 15 feed retains an **Ethereum PRIME→USDC inventory ceiling of $7.400M**, timestamped **03:24:25 UTC**, up **21.07% over seven days**. This is a ceiling on observed counter-token output, not $7.4M of low-slippage execution. It must not be added to Solana inventory as one executable exit.

The producer payload includes these quote estimates, which were not independently rerun in the October 15 assessment:

| Dollar notional offered | Estimated USDC received | All-in loss against notional |
|---|---:|---:|
| $100,000 | $99,978.02 | 2.20 basis points |
| $1,000,000 | $999,640.40 | 3.60 basis points |
| $5,000,000 | $4,995,097.51 | 9.80 basis points |
| $6,700,000 | $6,691,664.21 | 12.44 basis points |
| $9,500,000 | $7,399,796.95 | 22.11% |
| $14,000,000 | $7,399,796.95 | 47.14% |

Proceeds are the feed's dollar-notional estimates, excluding gas. Saturating output does not locate a size-responsive 2% crossing. The feed's inventory-to-market-cap percentage uses an old $457M denominator and is unsuitable as a current percentage. The same ceiling is approximately **1.263% of the current indicative PRIME NAV value**, a separately stated denominator. [Quote and ceiling snapshot](/evidence/hastra-prime/refresh-2026-10-15.json)

### Primary redemption

The direct redeem vault holds approximately **$4.697M**, comprising **4.696M YLDS and $1,392 USDC**. Hastra's **03:48 UTC** PoR observation reports **827,398 wYLDS pending redemption** and **710,121 YLDS pending sale**. These are issuer-reported fields, not a chain-verified outstanding queue.

Persistent Solana request records have no fulfilled flag, request timestamp or status. Summing them cannot establish currently outstanding requests, so an independent queue-coverage multiple is **unavailable**. Low USDC inventory is also not settlement throughput: YLDS sales and subsequent fulfillment matter.

**Risks and limitations.** Liquidity & Exit 7.0 is carried from the September 12 secondary-market assessment. The legacy primary-redemption assessment was 6.0; the combined score has not been re-derived against the corrected queue evidence. Current estimates do not establish a new executable end-to-end ladder or a stress fill. Campaign-supported Ethereum inventory, Solana transfer-fee/read failures and operator-mediated settlement limit confidence. No current combined cross-chain depth or guaranteed redemption deadline is established.

## 4 · Dependencies — 5.5

PRIME passes through **Hastra → wYLDS receipt reserves → Figure-operated lending facilities**, with FCC-issued YLDS providing the settlement certificate layer. The Home Equity and Automobile pools broaden collateral classes but retain significant common operator, infrastructure and settlement dependence.

FCC's **June 30, 2026 unaudited interim filing** reported **$561.627M qualified assets against a $557.494M certificate reserve**, approximately **100.74% coverage**. Those certificate figures do not verify the current lending-pool claims, PRIME's staking ratio or the latest reserve mix. FCC's audited annual accounts and interim accounts have different assurance levels. [wYLDS assessment](/reports/wylds/)

Figure's broader loans-held-for-sale delinquency was **5.055% at June 30**, a historical issuer proxy rather than current Home Equity pool delinquency. No newer SEC filing was verified in this refresh. The October 6 ABS-15G securitization-proxy date is filing activity, not proof that these particular pledged loans turned over. [Figure assessment](/reports/figure/)

Lending integrations can value PRIME from an accrued exchange rate rather than an immediately executable sale price. A market discount can therefore coexist with a higher collateral mark; a genuine NAV loss can force liquidations into the same limited secondary inventory. Current integration limits and aggregate posted collateral were not remeasured.

**Risks and limitations.** Hastra relies on Figure infrastructure and a disclosed related-party/software relationship, including an inherited 50-basis-point royalty description. Contract continuity, reserve segregation and legal recovery remain unverified at the current pool level. Dependencies 5.5 is retained; adding an Automobile position does not establish an independent counterparty or eliminate the common settlement path.

## 5 · Contract & Admin — 5.0

The token stack spans Ethereum and Solana, while much of the reserve accounting and lending-pool control sits on Provenance. These are distinct authority surfaces.

| Component | Identifier | Measurement scope |
|---|---|---|
| PRIME, Ethereum | `0x19ebb35279A16207Ec4ba82799CC64715065F7F6` | Proxy and asset relationship reviewed September 11 |
| Ethereum implementation | `0x881fe0e5e91c54fabbf0198a1bb2fc6e5747d4c5` | Historical September observation, not freshly source-matched |
| PRIME, Solana | `3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7` | Mint/freeze addresses checked against producer expectations October 15 |
| Provenance pool/receipt admin | `pb1qu33dukugzgvvez44a3gp9ltq6kzl3e8u6e9rj` | Later Automobile review; code parity and complete upstream control remain unresolved |

Historical Ethereum analysis identified a **one-day TimelockController**. It constrains its EVM path, not every backing movement or Provenance contract migration. Earlier custody analysis found a shared account allowing one authorized party to act, alongside separate certificate forced-transfer permissions. An EOA-format or BaseAccount address establishes no on-chain signing quorum; it does not establish one human-held private key.

The later Automobile review records pool and receipt migrations at **block 34,047,022**. Code replacement is an exercised power on those components. Its current legal succession and deployed-code equivalence remain unresolved. These facts cannot be generalized into either a clean current audit for all pools or a claim that their migration authority has never been used.

Hastra publishes Informal Systems and Sherlock audits; historical review reported remediations and no critical/high findings in the subsequent review. Their exact coverage of current deployed token, pool, oracle, custody and migration permissions was not re-established. [Informal Systems report](https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf), [Sherlock report](https://hastra.io/sherlock-hastra-audit.pdf)

**Risks and limitations.** Provenance custody, marker seizure authority and contract replacement are separate powers; the Ethereum delay cannot be treated as protection for all three. YLDS transfers are permissioned to approved accounts, which constrains destinations but does not guarantee recovery after a control failure. No fresh recursive authority walk, current audit parity or bug-bounty scope was established. Contract & Admin 5.0 is retained with these verification limits.

## 6 · Issuer — 6.5

Hastra operates PRIME above Figure's lending and certificate infrastructure. Historical research identifies Signum Ltd. as the Hastra operator; it is not established here as a Figure-controlled subsidiary. FCC is the separate SEC-reporting certificate issuer. Its annual KPMG-audited accounts provide stronger financial disclosure than an unaudited reserve claim, while its interim filings remain unaudited.

At June 30, parent and parent-controlled entities held approximately **85.9% of fully paid YLDS certificates**. FCC also depended on parent support for operating expenses. Those are dated certificate-issuer observations, not proof of Hastra ownership or the current composition of PRIME holders. [Figure and FCC context](/reports/figure/)

**Risks and limitations.** Hastra's current legal principals, jurisdiction, governing law, dispute mechanism and a PRIME holder's enforceable claim against the operator were not re-established. A current financial audit of Hastra itself and pool-specific recovery rights remain unverified. **Issuer 6.5 is carried**, chiefly supported by the inherited Figure/FCC disclosure assessment, rather than re-derived against complete Hastra entity-and-recourse inputs. Contract audit evidence is assessed under Contract & Admin.

## Who this is for

PRIME fits an allocation to operator-mediated private credit for holders who can tolerate loan risk, changing income, a limited secondary exit and an administrative redemption process. It is poorly suited to a cash reserve, a direct Treasury mandate or a position whose whole value must be immediately realizable on one venue.

## What to watch

- Home Equity debt versus collateral, including advance-reference compliance and the distinct margin-call/liquidation thresholds.
- Receipt composition and independently reconciled borrower performance for each pool; Home Equity statistics do not describe Automobile.
- PRIME NAV and its valuation basis separately from wYLDS coverage and FCC's certificate reserve.
- Actual redemption processing and pending-request reconciliation, rather than sums of persistent request records.
- Executable quotes at the intended size, incentive durability and independently verified Solana exits.
- Deployed pool migrations, current audit coverage, custody controls and contractual recovery rights.

## Evidence and scope

The October 15 update uses working research and retained producer/API observations. The backing snapshot is **03:52:38 UTC**, the issuer pending figures **03:48 UTC**, issuer rate **03:00 UTC** and Ethereum ceiling **03:24 UTC**. The direct Figure API was retrieved at **04:54 UTC**; later Automobile observations use their own clocks. These are not one pinned multichain balance sheet.

[Retained refresh evidence](/evidence/hastra-prime/refresh-2026-10-15.json) and [independent Figure API retrieval](/evidence/hastra-prime/figure-pools-2026-10-15.json) preserve numerical bases and source hashes. Contract calls, quotes and redemption execution were not independently rerun here; no newer SEC filing was verified. Backing was refreshed on October 15; broader contract, legal and historical-liquidity assessments retain their older verification bases.

## Revision history

- **2026-10-15 — backing reassessment and content refresh.** Backing 5.0 → 4.5; Overall 5.0 → 4.5. Incorporated the advance-reference excess, current reserve mix, supply/NAV and rate observations, corrected queue interpretation and later Automobile findings. Other axes retain their dated bases. Integrated qualifications into the six axes and consolidated revision history.
- **2026-09-11–12 — supply, controls and secondary liquidity reviewed.** Established dated staking relationships and Ethereum quote evidence; Liquidity 7.0.
- **2026-09-08 — six-axis backing assessment adopted.** Added Backing 5.0 and documented concentrated receipt exposure.
- **2026-08-23–27 — FCC interim filing and control observations incorporated.**
- **2026-07-30–31 — earlier credit, redemption and authority reassessments.** Overall 5.0, Dependencies 5.5, Redemption 6.0 and Contract & Admin 5.0.
