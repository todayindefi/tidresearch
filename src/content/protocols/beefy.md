---
protocol: Beefy
slug: beefy
aliases:
- Beefy
- Beefy Finance
chains:
- eth
- arb
- avax
- bsc
- monad
assessment_type: light
date: '2026-03-15'
last_verified: '2026-03-15'
last_revised: '2026-11-03'
category: protocol
protocol_category: aggregator
audience: retail
production: false
published: true
featured: false
contract_score: 6.5
economic_score: 6.0
project_score: 6.0
overall_score: 6.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="beefy">

# Beefy — Risk Report

**Moderate risk · 6.0/10 · provisional**

Automated yield strategies

## Summary

Beefy automates yield strategies through vault receipt shares, reward harvesting and compounding. It is a wrapper and execution layer over investments rather than the issuer of underlying LP assets or a guarantee of redemption.

Strategy identity matters: an ETH+/WETH Curve/Convex route, a Monad Morpho/Steakhouse WETH vault and an Aave WETH strategy have different risk chains. A lending strategy without borrowing is not automatically a leverage loop.

## 1 · Smart Contract — 6.5

Vaults can use replaceable strategies. A minimal proxy with fixed code can still send capital to a different authorized strategy; fixed wrapper code does not establish an immutable mandate.

Official documentation describes multisig and timelock controls. Captured descriptions disagree on signer counts, so no count is promoted to a current onchain observation. A documented strategy-change delay is also distinct from underlying venue governance. Exact vault owners, approval delays, panic permissions, pending changes and code/audit bindings need deployment-specific verification.

Published reviews provide assurance within their scope, without proving every current strategy. A lack of an oracle in Beefy's own code does not eliminate inherited oracle, price-manipulation or reward-swap risk.

## 2 · Economic — 6.0

Compounding sells rewards and reinvests principal. Returns depend on the underlying investments, reward prices and execution costs. Share accounting, liquidity, withdrawal/deleveraging constraints and bridge exposure are product-specific.

An ETH+/WETH route combines Beefy, [Convex](/protocols/convex/), Curve pool composition and Reserve ETH+'s LST basket. A Monad Morpho route adds curator/adapters, borrower collateral, oracle and chain assumptions; Aave uses a different credit and withdrawal model. Brand-level APY or a protocol grade cannot substitute for those layers.

The November 3 provider snapshot reported **$98.30 million TVL**. It is provider-valued capital rather than revenue, liquid reserves or measured net flows. Current per-vault returns, losses and actual withdrawal outcomes were not refreshed.

## 3 · Project — 6.0

A long-running multichain operation, public contracts, documented controls and a maintained API provide useful operating disclosure. A vault-specific legal repayment obligor and independent financial assurance remain unestablished. Token governance and strategy review are not insurance. Fees require the relevant vault configuration rather than a universal brand schedule.

## What to watch

Current wrapper/strategy identity, live permissions and effective delays, underlying funded allocations, reward liquidity and measured withdrawals.

## Sources, scores and review scope

- [Vault documentation](https://docs.beefy.finance/beefy-products/vaults)
- [strategy documentation](https://docs.beefy.finance/beefy-products/strategies)
- [controls page](https://docs.beefy.finance/safety/contracts-and-timelocks)
- [DefiLlama snapshot](https://api.llama.fi/protocol/beefy)

Original assessment: **2026-03-15**. Last whole-review date remains **2026-03-15**; **November 3, 2026** is a scoped documentary, product-identity and business-context revision. Scores are retained provisionally pending current deployment evidence. Complete authority, code/audit binding, funded allocations and executable exits were not reverified. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

The historical **Monad assessment was Contract 5.0 / Economic 4.5 / Project 5.0 / Overall 4.5**. It remains provisional within its older scope, not a fresh blanket grade for current Monad strategies.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 6.5 | 6.0 | 6.0 | 6.0 |

## Revision history

- **2026-11-03:** Scoped product/deployment and documentary revision; scores and earlier verification scope preserved.

</div>
