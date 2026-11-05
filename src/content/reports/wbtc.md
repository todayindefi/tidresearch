---
asset: WBTC
slug: wbtc
aliases:
- WBTC
- Wrapped Bitcoin
chains:
- eth
category: wrapped-token
underlying_assets:
- btc
assessment_type: light
axis_frame: six
date: '2026-11-05'
last_revised: '2026-11-05'
yield_bearing: false
issuer: BiT Global announced custody; approved merchants; effective obligor/control
  unresolved
volatility_score: 6.5
backing_score: 6.0
liquidity_score: 6.5
underlying_score: 5.0
structural_score: 5.5
issuer_score: 4.5
overall_score: 5.5
verification_scope: bounded
production: false
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-evidence-snapshot="sha256:8cddb8ad40138d1e95c76ed192bb7e5d2b11eaa17f39a3f16d93cede7cad59c2" data-assessment-snapshot="sha256:c03da1cb0c0519a2e39988cb41c6ceff64958311226a24d7e673691648f38ce9" data-assessment-status="provisional" data-canonical-project="bit-global" data-canonical-component="wbtc">

# WBTC — Risk Report

**Elevated risk · 5.5/10 · Provisional, Ethereum only**

## Summary

WBTC represents Bitcoin held through a custody and approved-merchant system. Published reserve addresses independently match indexed Bitcoin balances, while ordinary holders generally rely on secondary markets or merchant access for exit. Custody accountability, complete liabilities and enforceable holder rights remain material uncertainties.

The assessed Ethereum token is [WBTC](https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599), `0x2260fac5e5542a773aa44fbcfedf7c193bc2c599`.

## 1 · Stability — 6.5

WBTC’s tracking mechanism combines Bitcoin custody with merchant minting and redemption, alongside secondary trading. Sampled Ethereum routes support a functioning market link to BTC. Stability measures the wrapper’s BTC-relative tracking, not Bitcoin’s dollar-price volatility.

A continuous, independently accepted BTC-relative stress history was unavailable. Merchant access and custody continuity can limit arbitrage when market prices diverge from the claim.

## 2 · Backing — 6.0

The publisher’s November 4 API update at **15:40:07 UTC** reported **116,492.03385674 BTC** in reserves and **116,479.19176143 WBTC** in native supply. Independent indexed confirmed balances matched all **109** published reserve addresses; the checks were received at **15:45:08 UTC**.

The **12.84209531 BTC** difference is not proven surplus. Complete liabilities, reserve ownership, encumbrances and bridge conservation remain unresolved. The indexer’s stable tip does not establish a common per-address block pin or legal title. [Published reserves](https://www.wbtc.network/api/v2/assets)

## 3 · Liquidity & Exit — 6.5

Ethereum holders can sell WBTC on secondary markets. Primary BTC settlement depends on approved merchants; an ordinary token holder does not have a universal direct BTC payout endpoint. [Merchant model](https://www.wbtc.network/faq)

November 4 routes captured at **14:37:07–10 UTC** quoted **1,001,937.606733 USDC** and **9,875,061.77382 USDC** for token inputs sized at $1 million and $10 million using dated market marks. Added average-rate deterioration was **17.51 bps** and **161.29 bps** against the $100,000 sample. Gas is additional.

These indicative quotes are neither executed fills nor guaranteed capacity. Proceeds above an older market mark do not establish arbitrage. Merchant eligibility, settlement performance and actual BTC delivery were not established by the routes.

## 4 · Dependencies — 5.0

WBTC depends on custody and Bitcoin keyholders, approved merchants and Ethereum administration. These roles concentrate settlement and continuity risk even when the token trades across several venues.

The announced custody transition does not independently establish completed key-control transfer or the effective repayment obligor. Complete cross-chain conservation and merchant performance remain unresolved.

## 5 · Contract & Admin — 5.5

At Ethereum block **26,342,414**, November 4 **15:41:47 UTC**, the token’s runtime matched the reviewed source, it was unpaused and minting was not finished. The Controller owner had a nominal **6-of-10** threshold and `dailyLimit` was **0**.

Complete Members authority was not resolved. The Ethereum threshold does not establish the Bitcoin custody-key quorum, and source/runtime agreement alone does not prove the full privileged surface safe or independently audited. These are pinned observations, not current-state assurances.

## 6 · Issuer — 4.5

The documented model assigns custody and merchant roles, with BiT Global named in the announced custody arrangement. Holders’ access to BTC settlement depends on the applicable merchant relationship and terms. [Terms](https://www.wbtc.network/terms-of-service)

A universal holder repayment obligor, enforceable reserve title, insolvency priority and current signed financial assurance remain unresolved. The provisional issuer judgment uses these documentary inputs; it does not treat an announced transition as completed control or legal assurance.

## Evidence dates and scope

Scores were authored **November 5, 2026**, using November 3–4 evidence. No whole-report verification date is asserted. Ethereum supply reads use block **26,340,868**, November 4 **10:31:35 UTC**; security observations use the later block **26,342,414**, November 4 **15:41:47 UTC**. Documentary sources were reread November 5; that reading is not a fresh financial capture or independent assurance of publisher assertions.

All nine cross-asset Dex samples were indicative GET routes with independent dated market marks. Gas, stale or zero pool hints, asynchronous clocks, absent enforceable minimum-out/expiry and unsimulated execution limit interpretation. A later visit to a linked live API does not update these dated observations.

This provisional assessment covers only the exact Ethereum token above. Other chains, remote deployments and lending-vault approvals are outside the grade. Pinned flags and quotes do not establish present reopening, actual BTC delivery, complete custody or full liability assurance. Unavailable evidence remains unavailable, rather than zero or fresh data.

The six scores are higher-is-safer. Overall is a holistic assessment, not a required arithmetic average; redemption considerations are included in Liquidity & Exit, without a seventh score. Reassessment requires closure of the backing, authority, settlement and holder-rights gaps described above.

## Revision history

- **November 5, 2026:** Initial provisional Ethereum staging assessment.

</div>
