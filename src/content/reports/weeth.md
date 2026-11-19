---
asset: weETH
slug: weeth
aliases:
- weETH
- Wrapped eETH
- ether.fi weETH
- etherfi weETH
chains:
- eth
- base
- arbitrum
- optimism
- monad
category: wrapped-token
underlying_assets:
- ETH
date: '2026-05-26'
yield_bearing: true
assessment_type: full
denomination: ETH
last_verified: '2026-11-17'
last_revised: '2026-11-17'
score_status: assessed
score_assessed: '2026-11-17'
issuer: Ether.Fi SEZC (service operator); separate wrapper repayment guarantor not
  established
chain_overrides:
  base:
    volatility_score: null
    backing_score: null
    liquidity_score: null
    underlying_score: null
    structural_score: null
    issuer_score: null
    redemption_score: null
    overall_score: null
  arbitrum:
    volatility_score: null
    backing_score: null
    liquidity_score: null
    underlying_score: null
    structural_score: null
    issuer_score: null
    redemption_score: null
    overall_score: null
  optimism:
    volatility_score: null
    backing_score: null
    liquidity_score: null
    underlying_score: null
    structural_score: null
    issuer_score: null
    redemption_score: null
    overall_score: null
  monad:
    volatility_score: 5.0
    backing_score: 5.5
    liquidity_score: 3.0
    underlying_score: 4.5
    structural_score: 3.5
    issuer_score: 6.5
    redemption_score: null
    overall_score: 4.5
unassessed_chains:
- base
- arbitrum
- optimism
volatility_score: 7.5
backing_score: 7.5
liquidity_score: 6.5
underlying_score: 5.5
structural_score: 6.5
issuer_score: 7.0
overall_score: 6.5
axis_frame: six
assessment_status: complete
axis_assessment_status:
  volatility_score: assessed
  backing_score: assessed
  liquidity_score: assessed
  underlying_score: assessed
  structural_score: assessed
  issuer_score: assessed
production: true
trust_disclaimer: false
assessment_version: weeth-six-axis-2026-11-17-v1
evidence_version: BM:bm-phase1-staking-selected-six-axis-v1;DA:staking-operating-delta-v2;TokenAnalyst:staking-token-rights-v1;Security:staking-assets-security-v1
selected_evidence_sha256: d84ac811f77b2c924e3879d6bcaf0c2bd97a23d9064063d42a8f0c0237fd0baf
token_address: '0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee'
assessment_scope: Ethereum native token. Other deployments keep independent grades
  and evidence dates; unreviewed representations are ungraded.
chain_assessments:
  monad:
    assessment_version: weeth-monad-overlay-2026-11-17-v1
    evidence_version: BM:closure-batch2-selected-inputs-v3;DA:batch-2-v1;Security:lending-batch2-security-2026-11-17-v1
    source_sha256: 0f9d1c234cdcf283691beef88b84965217a79e7e27733a1923d4e797c908a3cf
    token_address: '0xa3d68b74bf0528fdd07263c60d6488749044914b'
    last_verified: '2026-11-17'
    report_url: /reports/weeth/monad/
    denomination: ETH
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_th]:min-w-[8rem] [&_td:not(:first-child)]:whitespace-nowrap" data-staking-refresh="2026-11-17-v1">

# weETH — Risk Report

**Moderate risk · 6.5/10 · Ethereum**

## Summary

weETH is a nonrebasing claim on eETH staking shares, not a fixed amount of immediately available ETH. Current wrapper accounting reconciles and finite Ethereum market quotes support ordinary tradability at the tested sizes. The binding risks are staking and oracle losses, conditional primary withdrawals, partly unmeasured underlying composition/restaking transition, and mutable operating controls. A ten-day upgrade path does not prevent separate shorter operating, pause or blacklist actions. The selected evidence does not establish a new material realized loss.

The separately assessed **Monad deployment remains 4.5/10**, with its own transport/control and exit scope. Its independently scoped assessment is separate; Ethereum liquidity and governance are not inherited by other remote representations.

## 1 · Stability — 7.5

The reference is **eETH per weETH and the economic ETH value of that staking claim**, not USD 1. ETH/USD investment moves are unscored. At Ethereum block **26,434,080, November 17 around 10:10 UTC**, the accounting rate was **1.108341313177078471 eETH/weETH**. It is not a guaranteed ETH sale price. A separately updated oracle ratio retained its **04:46:23 UTC** source time; fetching it later does not make its original report newer.

The maintained oracle/index series has **168 usable observations over seven days and 719 over thirty**, ending November 17 09:26 UTC. Median discounts to its reference were approximately **0.0365% / 0.0249%**, respectively. The source uses Chainlink/Pyth-derived observations, not a continuous trade tape; underlying market update clocks and per-observation code versions were not preserved. Repeated marks and roughly one-to-two-hour maximum sampling gaps limit stress inference. This supports ordinary reference tracking, not guaranteed convergence during slashing, withdrawal or market stress.

## 2 · Backing — 7.5

At the native pin, **1,991,609.027029 weETH** represented the eETH share claim at the rate above. The wrapper eETH balance reconciles to that claim with a **895,647 eETH base-unit residual**, far below one token. Approximately **96.8599%** of eETH supply was wrapped. Wrapper and eETH balances overlap; adding them would invent extra reserves.

The derived liquidity pool `0x308861a430be4cce5502d0a12724771fc6daf216` reported approximately **2,278,944.557382 ETH accounted**, while its sampled native ETH balance was **32.865706 ETH**. November 11's corresponding native balance was about **5,066.58 ETH**. This is a material buffer observation, not proof of lost staking assets, a withdrawal halt or the full instant-redemption capacity. Assets and reserved cash can reside in different contracts, and the maintained reader did not reconcile every instant-output bucket or queue liability.

Current issuer documentation says eETH/weETH no longer bundle EigenLayer restaking. Earlier disclosures described less than 1% residual capital in August and Q3/Q4 retirement targets. **Current residual capital, AVS exposure and retired validator withdrawal credentials were not independently measured**. A passed deadline or active EigenPod permission proves neither funded restaking nor its complete elimination. Similarly, stETH accepted into the system can transmit Lido impairment, but its current share of backing remains unmeasured. These limits constrain the backing grade despite the sound wrapper-accounting identity. [Product disclosure](https://etherfi.gitbook.io/etherfi/products/staking/eeth.md).

## 3 · Liquidity & Exit — 6.5

There are three materially different paths: **unwrap to eETH**, **instant redemption through a configured output-token bucket**, and **queued NFT withdrawal followed by finalization and claim**. Unwrap is not ETH cash. Instant redemption depends on the chosen ETH/stETH output, its buffer/watermark, rate limits, fees and pause/blacklist state. The available evidence does not establish current complete ordinary-holder instant capacity or a fixed queue SLA.

Indicative Ethereum quotes requested **November 17 10:11:01–04 UTC** returned:

| Input size, accounting-NAV USD equivalent | weETH input | Gross WETH output | Cost versus accounting ETH, before gas |
|---|---:|---:|---:|
| 10,000 | 5.022497 | 5.563169 | 6.24 bps |
| 100,000 | 50.224973 | 55.629712 | 6.59 bps |
| 500,000 | 251.124863 | 278.118402 | 7.68 bps |

Sizing used **ETH/USD 1,796.4154**, with its own 10:08:35 UTC oracle timestamp, and eETH=ETH accounting parity. Inputs/outputs are native 18-decimal units. Routes included Curve and, at larger sizes, other venues. Provider gas estimates were roughly **$0.14/$0.20/$0.55**; complete approval, execution and primary costs are not independently verified. These are quotes, not funded settlement or a maximum depth. There was no fresh USD 1,000 anchor; the first tested size was USD 10,000. Carried pool blocks have separate/partly unknown original clocks.

Queued requests are documented as fee-free but still need finalization and a later ETH claim. Source-bound current contracts impose per-request minimum **0.001 ETH** and maximum **1,000 ETH**, subject to applicable checks; they do not establish total capacity. Finalized NFT ETH is segregated from the pool's native balance. A separately measured priority route is **whitelisted**, with a one-hour minimum delay; it is not a public one-hour cash guarantee. Claim invalidation and privileged handling of invalidated requests remain material. [Integration guide](https://etherfi.gitbook.io/etherfi/developers/contracts-and-integrations/integration-guide.md).

## 4 · Dependencies — 5.5

Value passes through eETH share accounting, pooled validators, execution/consensus rewards, reporting/oracle machinery and withdrawal administration. Deposited stETH adds a Lido dependency; unmeasured residual EigenLayer capital or credential paths cannot be treated as zero merely from a product label. Optional restaking and Liquid vault products are separate, but the claimed separation still needs appropriate live verification.

Secondary realization also depends on venue liquidity and WETH; primary realization depends on actual available/segregated ETH, reporting and claim processing. A quoted route does not insure those paths. Lending against weETH adds the lender's exact price feed and liquidation mechanics, which are not certified by this asset-level accounting rate. Remote OFT representations add separate messaging, peer, verifier, custody and local-market risks.

## 5 · Contract & Admin — 6.5

At **Ethereum block 26,434,079 / November 17 10:10:35 UTC**, the source review bound runtime records for weETH proxy/current logic, eETH, the liquidity pool, RoleRegistry, Blacklister and selected withdrawal contracts. The implementation remains `0xa6ca0607190d03cf16fe6f2865cf40c3d160ccf3`. Exact retrieved source/runtime correspondence is useful identity evidence, not an independently reproduced audited build or complete remediation/history certificate.

The normal upgrade role/RoleRegistry owner points to a **ten-day timelock**; the operating timelock is **two days**. A measured **4-of-7 operating Safe** also holds several operational and guardian roles. A separate **1-of-6 super-guardian Safe** can perform bounded pausing; it shares four owners with the operating Safe. This does not make the one-signature guardian an upgrade authority, but it defeats an assumption of fully independent operating safeguards. Full current ten-day proposer/executor/canceller membership and pending operations were not exhaustively enumerated.

weETH's configured temporary pause is **eight hours**, under a broader bounded policy; other core contracts had one-day configured pauses. Blacklist powers include temporary guardian restrictions and operating-multisig extensions/permanent entries. Selected paused getters were false at the pin, not a future liveness guarantee. Ordinary recovery explicitly rejects eETH, so it is not a general backing-token sweep; code upgrades and privileged handling of invalidated withdrawal requests are separate powers. No blanket ten-day holder reaction window is credited. [Published control model](https://etherfi.gitbook.io/etherfi/security/security-and-risks/multisigs-and-controls.md).

## 6 · Issuer — 7.0

The service terms identify **Ether.Fi SEZC**, Cayman Islands. They describe staking revenue after socialized slashing penalties and a **90% allocation of staking rewards to stakers** in the price plan; this is not a fixed yield, principal guarantee or instant-redemption fee. Ownership language does not independently establish segregated title or insolvency priority.

The operator publishes controls and incident accounts. Its November 5 precautionary pause was attributed to an external EigenLayer event, with no ether.fi user loss reported by the issuer; this is a dated conduct disclosure, not independent all-time loss certification. Current operating history and disclosures support the grade, while unresolved retirement measurements, composition, legal recourse and exact implementation/audit mapping prevent stronger assurance. Broader Cash, card, stock or Liquid-product announcements are not weETH backing improvements. [Service terms](https://etherfi.gitbook.io/etherfi/legal/ether.fi-legal/terms-of-use.md).

## Score summary

| Axis | Score | Basis |
|---|---:|---|
| Stability / Peg | 7.5 | Section 1: ETH/share tracking and sampled history. |
| Backing | 7.5 | Section 2: wrapper reconciliation versus recoverable staking assets. |
| Liquidity & Exit | 6.5 | Section 3: finite sales and conditional primary paths. |
| Dependencies | 5.5 | Section 4: staking, composition, reporting and exit dependencies. |
| Contract & Admin | 6.5 | Section 5: delayed upgrades versus operating and restriction powers. |
| Issuer | 7.0 | Section 6: operator conduct, terms and recourse. |
| **Overall** | **6.5** | Authored judgment at or below the six-axis mean. |

## Confidence, coverage and triggers

Confidence is medium in native accounting, finite quotes and selected source/control identities, lower in full composition/restaking retirement, complete authority history and stressed cash recovery. The overall grade is below the six-axis mean.

Reassess on material staking or stETH losses, contrary restaking/credential evidence, failed ordinary claims, sustained independently measured ETH-relative discounts, exhausted instant buckets, new restrictions or adverse controller/code/oracle changes. A lower sampled pool balance alone is not a loss finding. Historical primary/quote observations retain their own dates.

The Monad assessment retains its separate grade and evidence dates. Base, Arbitrum and Optimism do not receive a renewed or inherited current grade from this Ethereum review; their prior data remains in the archived baseline.

## Source clocks and selected evidence

BM phase1 selected six-axis evidence binds native November 17 accounting/quotes/history, canonical DA project context, tokenAnalyst holder terms and the approved Security public fields. Financial block 26,434,080, control block 26,434,079, oracle update times and quote requests differ. Header timestamps were about 13–15 seconds ahead of local control receipts; the last successful hash recheck preceded a later rate-limited Safe phase. Missing reads are unknown, not zero. The quoted routes are not demonstrated funded exits.

## Revision history

2026-11-17: full Ethereum six-axis refresh from BM's selected owner package. Overall 7.0 → 6.5 incorporates current backing/composition, exit and conduct limits and retires the expired above-mean rounding exception; no new realized loss is asserted. Legacy redemption is incorporated into Liquidity & Exit, not a seventh score. The independently assessed Monad 4.5 section/version is preserved; unreviewed remote grades are explicitly withheld. Prior substantive/control observations remain archived with their source dates. Creation date preserved.

</div>
