---
protocol: Boros
slug: boros
aliases:
- Boros
- Pendle Boros
- Boros Finance
chains:
- arbitrum
assessment_type: full
date: '2026-11-03'
last_verified: '2026-11-03'
last_revised: '2026-11-03'
category: protocol
protocol_category: rate-derivatives
audience: retail
production: false
published: true
featured: false
contract_score: 5.0
economic_score: 4.0
project_score: 6.0
overall_score: 5.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="boros">

# Boros — Risk Report

**Moderate risk · 5.0/10 · provisional**

Margined rate derivatives

## Summary

Boros trades fixed versus floating rates on margin. Yield Units exchange rate cash flows through maturity; Funding Markets and Spread Markets expose users to different rate sources. This is a separate product from [Pendle V2's PT/YT system](/protocols/pendle-v2/).

A funding hedge can still fail through collateral timing, adverse mark rates, settlement interruption, liquidation, loss sharing or failure of a separate exchange. Notional yield exposure can be much larger than deposited margin.

## 1 · Smart Contract — 5.0

At Arbitrum block **520,870,454, November 3, 2026, 12:17:59 UTC**, four sampled Router, MarketHub, MarketFactory and AccessController proxy paths had nonzero implementation/admin slots. Their ProxyAdmin owners resolved to the **same 2-of-3 Safe**. The sampled module list was empty. This establishes concentrated direct upgrade ownership for those four paths, without an interposed owner timelock; guards, signer independence, pending operations, other roles and downstream paths remain unverified.

The live MarketHub implementation differed from the older deployment metadata. That is a version-reconciliation gap, not evidence of a malicious or unaudited upgrade. Published ChainSecurity, Spearbit and WatchPug reviews cover different components, but findings closure and audited-commit binding to the sampled live versions were not established.

## 2 · Economic — 4.0

Margin includes unrealized PnL, while periodic settlement changes collateral. Requirements depend on notional, time and rates, with applicable floors. Favorable expected terminal carry does not prevent liquidation before maturity. Cross-margin within a collateral zone does not make external hedge collateral available to that zone.

Settlement depends on external rate observations, submission, validation and cumulative accounting. Oracle/feed availability, epoch alignment and missed settlements are operational dependencies. Current market factors, limits, exemptions and stress coverage were not freshly measured.

Protective mechanisms can restrict orders/trading and force opposite-side closes with bad-debt sharing. A profitable counterparty can incur a forced loss, and restrictive modes can obstruct normal exits. Withdrawal requests and finalization are distinct; maturity is not guaranteed immediate USDC or fiat settlement. Current cooldown and account-specific collateral availability were not measured.

CrossEx automation uses separate exchange accounts. Exchange custody, credentials, execution, basis and synchronization remain additional risks. Matching ETH delta does not guarantee matching funding periods, adequate margin on each venue or transferable cash during stress.

## 3 · Project — 6.0

Pendle's terms include Boros and identify **Univerum Innovations Inc. in Panama**, Singapore law and SIAC arbitration. They are service/interface terms rather than guarantees of rate positions or exchange deposits. The shared development context is relevant, but Boros does not inherit Pendle V2's grades.

The November 3 provider snapshot reported **$7.77 million TVL**. This measures collateral/accounting scale rather than yield notional, insurance or profitability. Fee income, concentration, liquidation liquidity, expenses and any enforceable recapitalization commitment remain unreconciled.

## What to watch

- Complete role/guard/delay checks and audit-to-live-version bindings.
- Rate observations, settlement reliability, market restrictions and loss sharing.
- Market-specific margin, stress exits and separate hedge-venue risk.

## Sources, scores and review scope

- [overview](https://docs.pendle.finance/boros-docs/Introduction)
- [Margin mechanics](https://docs.pendle.finance/boros-docs/boros-systems/margin-and-liquidations)
- [rate-settlement design](https://docs.pendle.finance/boros-docs/about-boros/rate-settlement)
- [Protective mechanisms](https://docs.pendle.finance/boros-docs/boros-systems/protective-mechanism)
- [Router documentation](https://docs.pendle.finance/boros-dev/Contracts/Router)
- [CrossEx risk disclosures](https://docs.pendle.finance/boros-docs/arbitrage-with-crossex/risks-and-security)
- [documented Router, MarketHub, MarketFactory and AccessController](https://github.com/pendle-finance/boros-core-public/blob/main/deployments/core.json)
- [audit repository](https://github.com/pendle-finance/boros-core-public/tree/main/audits)
- [Pendle's terms](https://docs.pendle.finance/pendle-v2/TermsOfUse)
- [DefiLlama snapshot](https://api.llama.fi/protocol/boros)

Initial assessment and last verification: **November 3, 2026**. This is a provisional, bounded documentary and sampled-chain review, not a complete security or financial audit. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 5.0 | 4.0 | 6.0 | 5.0 |

## Revision history

- **2026-11-03:** Initial bounded protocol assessment; scores provisional.

</div>
