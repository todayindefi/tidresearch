---
asset: tBTC
slug: tbtc
aliases:
- tBTC
- Threshold Bitcoin
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
issuer: Threshold DAO and authorized operators; no universal corporate BTC repayment
  obligor established
volatility_score: 5.5
backing_score: 5.0
liquidity_score: 4.0
underlying_score: 4.0
structural_score: 4.0
issuer_score: 4.0
overall_score: 4.5
verification_scope: bounded
production: false
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-evidence-snapshot="sha256:33dc96b76d5e86a163bba4cbaf0e661a1dc4406344fee1f3411dc3628e937858" data-assessment-snapshot="sha256:616ea56860364d204e39d4fd42ae525dc8b2fd6a359570ca483a9c9631ac174d" data-assessment-status="provisional" data-canonical-project="threshold-network" data-canonical-component="tbtc">

# tBTC — Risk Report

**High risk · 4.5/10 · Provisional, Ethereum only**

## Summary

tBTC is a Bitcoin representation whose minting and redemption use distributed Bitcoin signers and Ethereum bridge infrastructure. Ethereum market exits were quoted, but independent wallet-to-liability reconciliation and end-to-end BTC delivery remain unresolved. Its optimistic mint path was paused at the reviewed block; canonical minting and redemption have separate conditions.

The assessed Ethereum token is [tBTC](https://etherscan.io/token/0x18084fba666a33d37592fa2633fd49a74dd93a88), `0x18084fba666a33d37592fa2633fd49a74dd93a88`.

## 1 · Stability — 5.5

tBTC links an Ethereum claim to Bitcoin through signer-operated wallets and bridge mint/redemption rules. Secondary trading offers a separate route to adjust exposure. Stability concerns BTC-relative claim tracking rather than Bitcoin’s dollar price.

Continuous independent tracking history and demonstrated arbitrage under stressed settlement conditions were unavailable. Operational gates can weaken the link between market value and BTC delivery.

## 2 · Backing — 5.0

Ethereum supply was **4,185.15515226 tBTC** at block **26,340,868**, November 4 **10:31:35 UTC**. This is an Ethereum token-supply observation, not a complete global liability measure.

Complete Bitcoin wallet reserves, pending claims and remote liabilities were not independently reconciled. Verified net backing is unavailable; the missing reconciliation is not a measured zero or proven reserve loss.

## 3 · Liquidity & Exit — 4.0

Holders can sell on Ethereum or use the conditional Bitcoin redemption route. Canonical minting, optimistic minting and Bitcoin redemption have separate eligibility and operational gates. [Redemption guide](https://docs.threshold.network/app-development/tbtc-sdk/guides/unmint-and-redeem.md)

At block **26,342,414**, November 4 **15:41:47 UTC**, both new optimistic requests and pending optimistic finalization reverted while paused. This does not establish a blanket pause of canonical redemption. Canonical minting and new or pending redemption remained conditional; successful end-to-end BTC delivery was not established. Three sampled October 30–31 redemption requests were still pending at the pin, a sample rather than the full queue.

November 4 **14:37:12–15 UTC** routes quoted **1,003,976.462992 USDC** and **9,624,568.400054 USDC** for $1 million and $10 million inputs sized using dated token marks. Added average-rate deterioration was **16.19 bps** and **429.08 bps** against the $100,000 sample, before gas. These were indicative routes, not fills, maximum capacity or BTC-delivery evidence.

## 4 · Dependencies — 4.0

tBTC relies on Bitcoin signers, SPV maintainers, Bank/Bridge/Vault contracts, guardians and governance. The documentary **51-of-100** signing threshold describes signer seats, not 100 independently controlled operators.

Operator concentration, route availability and complete wallet/liability conservation remain unresolved. Multiple technical roles do not by themselves demonstrate independent control or settlement continuity.

## 5 · Contract & Admin — 4.0

The reviewed runtime matched the source at Ethereum block **26,342,414**, November 4 **15:41:47 UTC**. The Vault owner had a nominal **6-of-9** threshold and the Bridge upgrade delay was **86,400 seconds**. [Contract registry](https://docs.threshold.network/contract-addresses/tbtc.md)

Immediate authority paths also exist, and critical authority enumeration remained incomplete. The delay is not a guarantee that every consequential action is delayed. Source matching does not resolve all privileged paths, signer control or operational BTC delivery.

## 6 · Issuer — 4.0

The protocol coordinates Bitcoin custody and delivery through its signer and bridge arrangements. Published terms describe the service framework, but they do not establish a universal corporate BTC repayment obligation to every Ethereum holder. [Terms](https://www.threshold.network/terms-of-use)

Enforceable holder recourse and the complete accountable counterparty perimeter remain unresolved. The provisional issuer judgment reflects the available documentary framework and these gaps, rather than inferring legal protection from distributed signing.

## Evidence dates and scope

Scores were authored **November 5, 2026**, using November 3–4 evidence. No whole-report verification date is asserted. Ethereum supply reads use block **26,340,868**, November 4 **10:31:35 UTC**; security observations use the later block **26,342,414**, November 4 **15:41:47 UTC**. Documentary sources were reread November 5; that reading is not a fresh financial capture or independent assurance of publisher assertions.

All nine cross-asset Dex samples were indicative GET routes with independent dated market marks. Gas, stale or zero pool hints, asynchronous clocks, absent enforceable minimum-out/expiry and unsimulated execution limit interpretation. A later visit to a linked live API does not update these dated observations.

This provisional assessment covers only the exact Ethereum token above. Other chains, remote deployments and lending-vault approvals are outside the grade. Pinned flags and quotes do not establish present reopening, actual BTC delivery, complete custody or full liability assurance. Unavailable evidence remains unavailable, rather than zero or fresh data.

The six scores are higher-is-safer. Overall is a holistic assessment, not a required arithmetic average; redemption considerations are included in Liquidity & Exit, without a seventh score. Reassessment requires closure of the backing, authority, settlement and holder-rights gaps described above.

## Revision history

- **November 5, 2026:** Initial provisional Ethereum staging assessment.

</div>
