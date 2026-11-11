---
asset: syrupUSDC
slug: syrupusdc
aliases:
- syrupUSDC
- SYRUPUSDC
- syrupUSD
- Syrup USDC
- Maple Syrup
chains:
- eth
- sol
- arb
- base
- monad
- ink
- tempo
- robinhood
- arc
category: vault-share
underlying_assets:
- USDC
yield_bearing: true
assessment_type: light
audience: retail
date: '2026-04-25'
last_verified: '2026-09-06'
last_revised: '2026-11-11'
featured: false
production: true
issuer: Maple International Operations SPC
axis_frame: six
volatility_score: 8.5
backing_score: 5.5
structural_score: 4.5
redemption_score: 6.0
underlying_score: 5.5
liquidity_score: 6.0
issuer_score: 5.5
overall_score: 6.0
chain_overrides:
  sol:
    volatility_score: 8.5
    backing_score: 6.5
    liquidity_score: 7.0
    underlying_score: 5.5
    structural_score: 4.5
    issuer_score: 5.5
    redemption_score: 7.5
    overall_score: 6.5
  arb:
    volatility_score: 8.5
    backing_score: 6.5
    liquidity_score: 7.0
    underlying_score: 5.5
    structural_score: 4.5
    issuer_score: 5.5
    redemption_score: 7.5
    overall_score: 6.5
  base:
    volatility_score: 8.5
    backing_score: 6.5
    liquidity_score: 7.0
    underlying_score: 5.5
    structural_score: 4.5
    issuer_score: 5.5
    redemption_score: 7.5
    overall_score: 6.5
  monad:
    volatility_score: 8.5
    backing_score: 6.5
    liquidity_score: 7.0
    underlying_score: 5.5
    structural_score: 4.5
    issuer_score: 5.5
    redemption_score: 7.5
    overall_score: 6.5
  ink:
    volatility_score: 8.5
    backing_score: 6.5
    liquidity_score: 7.0
    underlying_score: 5.5
    structural_score: 4.5
    issuer_score: 5.5
    redemption_score: 7.5
    overall_score: 6.5
  tempo:
    volatility_score: 8.5
    backing_score: 6.5
    liquidity_score: 7.0
    underlying_score: 5.5
    structural_score: 4.5
    issuer_score: 5.5
    redemption_score: 7.5
    overall_score: 6.5
  robinhood:
    volatility_score: 8.5
    backing_score: 6.5
    liquidity_score: 7.0
    underlying_score: 5.5
    structural_score: 4.5
    issuer_score: 5.5
    redemption_score: 7.5
    overall_score: 6.5
  arc:
    volatility_score: 8.5
    backing_score: 6.5
    liquidity_score: 7.0
    underlying_score: 5.5
    structural_score: 4.5
    issuer_score: 5.5
    redemption_score: 7.5
    overall_score: 6.5
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-assessment-version="syrup-pair-six-axis-2026-11-11-v1" data-evidence-snapshot="sha256:54e6abc3d98e5a0db31757660213ad9bc2f1821a1b156955575ee5fd443b2d5b" data-canonical-project="maple" data-canonical-component="syrupusdc" data-assessment-scope="eip155:1">

# syrupUSDC — Risk Report

**Moderate risk · 6.0/10 · Provisional · Ethereum**

USDC-denominated Maple pool share · Institutional credit and supporting strategies

[Dashboard — current conditions](https://tidresearch.com/dashboards/?asset=syrupusdc)

## Summary

syrupUSDC is a share in Maple's USDC-denominated lending pool. Income accrues into share NAV, while borrowers, collateral recovery, custody, strategy performance and USDC settlement determine realized value. Pending withdrawals can absorb impairment or default losses before processing. Withdrawals completed during impairment forfeit later recovery on that impaired position.

The November 11 Ethereum observation shows an empty queue and **2.0015% cash against accounting assets**. Completed withdrawals nevertheless have a roughly two-day share-weighted 90th-percentile processing time. Thin cash, conditional processing and incomplete collateral assurance constrain the provisional **6.0** assessment. No new borrower default or realized loss is established.

The exact assessed Ethereum token is `0x80ac24aa929eaf5013f6436cda2a7ba190f5cc0b`. Listed remote representations retain historical grades and separate bridge, control and exit risks. [syrupUSDT](/reports/syrupusdt/) shares important operating dependencies.

## 1 · Stability — 8.5

syrupUSDC follows an accruing USDC share NAV. Credit or strategy losses can reduce that value, while market prices can trade at a discount. Stability describes tracking of the share reference rather than credit quality or protection against a pool loss.

Retained indicative observations support close historical NAV tracking. The selected thirty-day $1 million quote history contains **235/238 successful quote keys**, a median approximate NAV shortfall of **22.55 bps** and a worst of **25.48 bps**. Failures remain failures. Historical native inputs and routes were not retained, and market/NAV clocks differ, limiting interpretation as a continuous executable-price series.

Current sampled swaps support their particular sizes and times. They do not independently establish recoverable NAV, intraperiod behavior or a synchronized stress-loss history.

## 2 · Backing — 5.5

Capital funds institutional credit and supporting strategies. Repayment depends on borrowers and enforceable collateral recovery. Pool-specific loan-manager and strategy claims determine accounting ownership; global strategy AUM cannot be assigned in full to each registered pool.

At Ethereum **block 26,389,831, November 11 06:16:59 UTC**, the selected observations are:

| Pool accounting, native USDC units | Observation |
|---|---:|
| Held underlying cash | 18,145,243.363236 |
| Accounting pool assets | 906,578,605.150992 |
| Cash / accounting assets | 2.0015% |
| Queued shares / queued assets | 0 / 0 |
| Cash + pool-specific manager claims − accounting assets | 0 raw units |

One shared Strategy Manager contributes a pool-specific claim of **4,010.404753 USDC**; the other five registered shared-manager claims are zero. Registered or active managers do not establish funded exposure, usable liquidity or diversification. The reconciliation verifies accounting identity rather than independently recoverable NAV.

The separate producer book, metadata **November 11 05:41:36 UTC** and assembly **05:42:25 UTC**, enumerates **886,721,520.69 USDC principal** with zero principal residual. It records zero defaulted, called or impaired rows and zero unrealized losses. Independent borrower principal/interest receipts, delinquency, collateral custody/title and immediately withdrawable strategy cash remain unknown.

A 200 million-principal row lacks a usable source collateral value. Total classified-credit principal with missing valuation is **233.5 million USDC**. Six further rows totaling **155 million USDC** retain uncorroborated below-par source levels. These are confidence and measurement limits, without an independently established credit loss. The missing classified-credit valuation covers **233.5 million USDC principal**. Null is unavailable evidence, rather than zero collateral or repayment. A source corroboration flag on missing-valued rows only identifies their exclusion from a particular below-par check. Aggregate badges do not supply loan-level collateral allocation or assurance.

## 3 · Liquidity & Exit — 6.0

Holders can sell on secondary markets or request a FIFO primary withdrawal. Primary processing depends on available cash, repayments or realizations and operator actions. Both queues were empty at the financial pin, including zero reconstructed manual residual shares. That observation does not promise immediate processing of future demand.

The FAQ's stated 30-day maximum conflicts with legal risk section 2.3, which gives **no guaranteed maximum**. The legal qualification governs the assessment of timing risk. [Withdrawal risk disclosures](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks)

| Latest seven-day completed automatic-request cohort | Observation |
|---|---:|
| Linked noncancelled completions | 170 |
| Request-count median | 4.40 minutes |
| Request-count p90 | 24.69 hours |
| Share-weighted median | 6.72 hours |
| Share-weighted p90 | 47.47 hours |
| Completed requests exceeding 24 hours | 20/170 |

These are processing-completion cohorts starting at on-chain request inclusion. They exclude cancelled, manual and pending requests, and their share weights do not independently measure settled cash. Current and November 7 rolling windows overlap. Transfer samples matched **5 of 5**; the indexer crossed the 30-day boundary without a complete independent RPC-log census. These checks do not establish whole-period payment assurance.

### Dated secondary quotes

Exact-token Ethereum swaps collected **November 11 06:16:44–06:16:58 UTC** use dated share NAV from **05:42:25 UTC**.

| NAV-sized input | Nominal USDC output | Shortfall versus dated NAV |
|---|---:|---:|
| 10,000 | 9,990.118604 | 9.88 bps |
| 50,000 | 49,949.277283 | 10.14 bps |
| 100,000 | 99,895.265405 | 10.47 bps |
| 500,000 | 499,344.799570 | 13.10 bps |
| 1,000,000 | 998,384.367005 | 16.16 bps |

Outputs exclude gas and remain indicative router responses, with mixed pool-state hints. Nominal USDC units are not independently marked bank dollars. These quotes establish neither fills nor maximum executable capacity. The current $10,000 own-rate baseline differs from November 7's $1,000 baseline, preventing a direct comparison of those impact measures.

Measured primary tails and thin cash constrain the exit grade despite inexpensive sampled secondary routes and currently empty queues. The grade incorporates primary-latency evidence omitted from October's report. It does **not** assert that withdrawals worsened since November 7.

## 4 · Dependencies — 5.5

The pool depends on Maple underwriting, borrowers, custody, servicing, enforcement, strategy operators and USDC. The two Syrup portfolios have distinct loan managers but share operational controls. Current books include one overlapping borrower address, without proving legal firm identity or common collateral title.

Historical concentration and strategy classifications retain their October source dates. Credit and non-credit labels do not independently establish separate counterparties, recoverability or liquid cash. Basis, Treasury, DeFi and LP strategies carry broker, venue, funding, issuer and contract risks where actually funded. Registration alone does not prove a current portfolio allocation.

Remote representations additionally depend on their exact token and bridge pools, permissions and local liquidity. Ethereum cash and quotes do not establish destination-chain access or reconcile canonical escrow with remote liabilities.

## 5 · Contract & Admin — 4.5

The Ethereum pools share governance and security administration. Current pinned PoolManager implementation **version 500** is `0x47feaa096efe5d44ed9378a29705c47c60ffc3b5`; WithdrawalManager **version 201** is `0x9dafee2bfc8eeb46c4fa80c998bc0c7e4804c644`. Current pool/manager/queue bindings were checked at the common pin. The queue runtime matches the accepted November 7 endpoints, without establishing every intervening action or a November 7 PoolManager comparison.

PoolManager upgrades are security-admin-only. WithdrawalManager delegate upgrades require a scheduled literal `WM:UPGRADE` call, currently seven days plus a two-day execution window. Security-admin upgrades bypass that schedule. The shared security admin has a nominal **3-of-6 Safe** threshold. The governor's default is three days plus a two-day window, with method-specific and role-update cancellation exceptions.

Sampled PM500→400 and WM201→200 rollback paths are disabled. Known ROLE_ADMIN and EXECUTOR EOAs remain positive. Delegates and operators retain immediate processing, manual-withdrawal and request-removal powers. Removal returns shares, rather than paying cash. Both pools use FUNCTION_LEVEL permission mode 1. Sampled request/redeem bitmaps are zero, while deposit/removeShares require bit 16. These settings do not establish universal legal eligibility. Sampled relevant pause flags were false.

The current architecture includes this pool's loan manager and six shared managers. Across the pair, thirteen wrappers bind to eleven Allocation Strategy and two Aave underlyings. Six principal source files match Cantina's final references byte for byte. Full compiler/dependency/configuration equivalence, complete role membership, Safe modules, signer independence and all function overrides remain open. No current Sky strategy was identified. [Official security and audits](https://docs.maple.finance/technical-resources/security/security)

## 6 · Issuer — 5.5

Maple International Operations SPC acts for **Secured Loan Segregated Portfolio 1**, while Syrup Ltd operates the interface. Recourse is portfolio-limited under the disclosures. Independently tested insolvency priority, perfected collateral title and recoverable portfolio value remain unestablished. Segregated portfolios still share operating dependencies. [Product risk disclosures](https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-risks)

LedgerLens identifies **The Network Firm Tech & Services, LLC**, a non-CPA technology provider. Its captured disclaimer excludes audit, review, agreed-upon procedures, attest and assurance services, and says source completeness and accuracy are not independently confirmed. The Network Firm LLP did not perform or supervise the service. Its badge is not a signed comprehensive financial, liability, custody or title opinion. [Service disclosure](https://dashboard.ledgerlens.io/c/maple)

Current loan flags do not establish lifetime loss performance or borrower servicing. Maple's earlier credit-loss history remains relevant. The bounded documentary review found core USDC/USDT terms substantively unchanged from November 7. A November 10 SYRUP buyback/reporting discussion does not establish enacted pool policy. Complete execution chronology and exact fee changes remain unknown.

## syrupUSDG comparison

syrupUSDG's provisional grades remain **4.0 on Ethereum and 3.5 on Arbitrum**. Its Stability **5.5** lacks matching measured secondary-price/NAV history and a comparable sized quote ladder. The difference from the pair's **8.5** is **uncalibrated**, so it cannot support a clean numerical stability ranking. Missing history establishes neither healthy markets nor deterioration. USDG's cross-pool, credit-recovery and remote-control/exit gaps remain separately relevant.

## Sources, assessment dates and chain scope

The targeted Ethereum assessment is **November 11, 2026**. TIDR's existing full-verification date remains **September 6**; the upstream internal assessment retains its separate **October 13** clock. Neither is renewed by this targeted review. Financial state uses **November 11 06:16:59 UTC / block 26,389,831**, distinct from loan metadata/assembly and the quote window above. LedgerLens badge clocks are **November 10 18:25 UTC for USDC and 18:42 UTC for USDT**. Historical authority/assurance and October measurements retain their original scope.

Ethereum's six axes are **8.5 / 5.5 / 6.0 / 5.5 / 4.5 / 5.5**, with Overall **6.0**, provisionally assessed. Overall is the nearest half-point to the six-axis mean **5.9167**. Legacy Redemption follows Liquidity & Exit and is excluded as a seventh scored axis. The exit grade incorporates measured primary tails missing from the older assessment, without inferring a new default or deterioration since November 7.

**Solana, Arbitrum, Base, Monad, Ink, Tempo, Robinhood and Arc** retain the historical overrides below and were **not reassessed**. Bridge, control, eligibility and cash-settlement assurance must be established per deployment. Ethereum's new grades must not silently replace those historical values.

| Historical remote scope | Stability | Backing | Liquidity & Exit | Dependencies | Contract & Admin | Issuer | Overall |
|---|---:|---:|---:|---:|---:|---:|---:|
| Solana, Arbitrum, Base, Monad, Ink, Tempo, Robinhood and Arc | 8.5 | 6.5 | 7.0 | 5.5 | 4.5 | 5.5 | 6.5 |

Independent custody/recovery, borrower servicing, actual delinquency, full authority/build equivalence and complete remote representation coverage remain unresolved. Current supplied books and finite source matches do not close them. Reassess on impairment/default, growing aged queues, cash shortfalls, persistent sized discounts, changed control/loss recognition or independently matched custody and servicing evidence.

## Revision history

- **November 11, 2026:** Targeted Ethereum assessment updates collateral confidence, primary completion tails, current controls and assurance interpretation. Overall 6.5→6.0; historical remote overrides and original verification dates retained.


- **2026-10-31 — Structural review.** Added the expanded mandate and correct overall-deposit, per-new-strategy launch-cap basis; strategy-specific risks; CCIP replacement-pool verification gaps; and Zodia/IRACE dependencies. Routine daily cash, queue, APY and allocation observations remain dashboard/evidence material. Historical assessment windows, scores and verification/authority/assurance dates are unchanged.

- **2026-10-30 — Financial update and snapshot chronology.** Refreshed spot assets, direct cash versus accrued interest, queue observations, quotes and dependency notes. Historical axis figures and quote/history windows retain their October 29 basis and are explicitly distinguished from the October 30 update. Numeric scores, production status and verification/authority/assurance dates unchanged.

- **2026-10-29 — BM-led common-source assessment.** Exact versioned address membership, nine-chain observation scope and retained source/history package accepted after replay. All scores held after explicit axis review. Retired stale unreviewed-classification and mixed-current-family claims; amount-field/custody, bridge, executable exits and primary latency remain unresolved. No fresh Maple role/code or USDC hook audit performed.
- **2026-10-28 — Prior common-source review.** Its financial magnitudes are historical; the earlier immutable evidence archive remains retained.

</div>
