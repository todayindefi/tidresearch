---
asset: LBTC
slug: lbtc
aliases:
- LBTC
- Lombard Bitcoin
chains:
- eth
category: wrapped-token
underlying_assets:
- btc
assessment_type: light
axis_frame: six
date: '2026-11-05'
last_revised: '2026-11-05'
yield_bearing: true
issuer: LF Operations Inc. (Panama); conditional eligible Direct User obligation
volatility_score: 5.0
backing_score: 3.5
liquidity_score: 4.0
underlying_score: 3.5
structural_score: 4.0
issuer_score: 3.0
overall_score: 3.5
verification_scope: bounded
production: false
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-evidence-snapshot="sha256:1af01e1381cd22b8eb781f5b973e0f5728a3560eb0ccf6f55f907c0b0d403d5d" data-assessment-snapshot="sha256:48e04e19d417bec5b229a58d4ad92404d9183b437b135b62add52ebaa5ba474d" data-assessment-status="provisional" data-canonical-project="lombard-finance" data-canonical-component="lombard-lbtc">

# LBTC — Risk Report

**High risk · 3.5/10 · Provisional, Ethereum only**

## Summary

LBTC is a changing-value Bitcoin covered-call strategy claim. Its BTC conversion can change with strategy performance; it is neither a passive guaranteed 1:1 BTC claim nor solely Babylon staking exposure. Published gross backing and strategy totals provide useful context, but independently reconciled net option value and holder recovery remain unresolved.

The assessed Ethereum token is [LBTC](https://etherscan.io/token/0x8236a87084f8b84306f72007f36f2618a5634494), `0x8236a87084f8b84306f72007f36f2618a5634494`.

## 1 · Stability — 5.0

LBTC’s BTC conversion reflects strategy performance, including covered-call exposure. BTC-denominated losses are possible even when Bitcoin itself is unchanged in dollar terms. [Yield strategy](https://docs.lombard.finance/use/lbtc/yield-strategy)

No independent market-to-net-NAV history was accepted. Comparing one LBTC with one BTC does not establish a verified NAV discount or guaranteed par entitlement. Stability measures BTC-relative claim tracking, not Bitcoin’s dollar-price risk.

## 2 · Backing — 3.5

The publisher reported **7,076.47468652 BTC** gross backing and **7,039.30342452 LBTC** global supply, with an **as-of November 4 00:00 UTC** clock. The report was created at **08:12:24 UTC** and received at **13:08:18 UTC**. These are first-party gross figures, not independently reconciled net strategy backing. [Publisher report](https://api.lombard.finance/v2/transparency/reports/latest)

A separate active-strategy observation, **as of November 3 21:00 UTC**, reported **1,958.60342841 BTC** NAV and **1,359.46328604 BTC** across listed accounts. The **599.14014237 BTC** residual has an unexplained accounting basis; it is not a proven loss, surplus or measured options liability.

Independent options valuation and net liabilities, complete net NAV and residual Babylon exposure remain unavailable. Gross backing minus the differently timed strategy figure cannot establish measured passive allocation.

## 3 · Liquidity & Exit — 4.0

Ethereum holders can sell LBTC on secondary markets. Primary redemption is available to eligible Direct Users, can be suspended and uses processing-time value. Published processing of up to **10 days** is not a guaranteed delivery deadline. [Product terms](https://docs.lombard.finance/resources/lbtc-product-terms)

November 4 **14:37:17–20 UTC** routes quoted **1,000,654.79115 USDC** and **9,392,578.828917 USDC** for $1 million and $10 million inputs sized using dated market marks. Added average-rate deterioration was **52.72 bps** and **663.05 bps** against the $100,000 sample, before gas.

These indicative quotes do not establish executed fills, maximum capacity, strategy NAV or actual BTC delivery. Primary eligibility and changing settlement value add separate exit uncertainty.

## 4 · Dependencies — 3.5

The structure depends on the issuer and affiliates, Bitwise as manager, active custodians, the consortium and potentially residual legacy Babylon exposure. Strategy management and custody introduce financial and settlement dependencies beyond an Ethereum token contract.

Published active/passive targets are not measured holdings. The complete counterparty and mandate perimeter, and residual Babylon participation, remain unresolved.

## 5 · Contract & Admin — 4.0

At Ethereum block **26,342,414**, November 4 **15:41:47 UTC**, runtime matched the reviewed source, pause flags were false and redemption was enabled. Named administrative paths had an **86,400-second** delay.

Multiple minters and separate operational roles exist. Consortium quorum, minter limits and Bascule/remote settlement semantics remained unresolved. A delay on named paths and enabled flags do not prove every privileged action delayed or redemption successfully delivered.

## 6 · Issuer — 3.0

The product terms name **LF Operations Inc. (Panama)** and distinguish passive holders from eligible Direct Users. Backing title transfers, commingling and pledging are permitted, and holders receive no property or trust rights in that backing. [Product terms](https://docs.lombard.finance/resources/lbtc-product-terms)

Segregated custody for the issuer does not establish holder insolvency priority. Restrictions, enforcement uncertainty and the difference between holding a token and having a Direct User relationship limit recovery assurance. The provisional issuer judgment uses these legal terms rather than treating a named entity as sufficient accountability.

## Evidence dates and scope

Scores were authored **November 5, 2026**, using November 3–4 evidence. No whole-report verification date is asserted. Ethereum supply reads use block **26,340,868**, November 4 **10:31:35 UTC**; security observations use the later block **26,342,414**, November 4 **15:41:47 UTC**. Documentary sources were reread November 5; that reading is not a fresh financial capture or independent assurance of publisher assertions.

All nine cross-asset Dex samples were indicative GET routes with independent dated market marks. Gas, stale or zero pool hints, asynchronous clocks, absent enforceable minimum-out/expiry and unsimulated execution limit interpretation. A later visit to a linked live API does not update these dated observations.

This provisional assessment covers only the exact Ethereum token above. Other chains, remote deployments and lending-vault approvals are outside the grade. Pinned flags and quotes do not establish present reopening, actual BTC delivery, complete custody or full liability assurance. Unavailable evidence remains unavailable, rather than zero or fresh data.

The six scores are higher-is-safer. Overall is a holistic assessment, not a required arithmetic average; redemption considerations are included in Liquidity & Exit, without a seventh score. Reassessment requires closure of the backing, authority, settlement and holder-rights gaps described above.

## Revision history

- **November 5, 2026:** Initial provisional Ethereum staging assessment.

</div>
