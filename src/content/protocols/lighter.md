---
protocol: Lighter
slug: lighter
aliases:
- Lighter
- Lighter Exchange
- zkLighter
chains:
- ethereum
- lighter
assessment_type: full
date: '2026-11-03'
last_verified: '2026-11-03'
last_revised: '2026-11-03'
category: protocol
protocol_category: perpetual-exchange
audience: retail
production: false
published: true
featured: false
contract_score: 5.0
economic_score: 4.0
project_score: 5.0
overall_score: 4.5
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="lighter">

# Lighter — Risk Report

**Elevated risk · 4.5/10 · provisional**

Perpetual exchange and liquidity backstop

## Summary

Lighter is an order-book trading system with verifiable execution. Its public pools let approved operators trade pooled capital; LLP additionally provides inventory and liquidation backstop capacity. Pool shares participate in trading outcomes rather than representing insured dollar savings.

The principal risks are trading losses, stressed liquidation capacity and authority over the Ethereum bridge. This protocol assessment does not assign an asset-level LLP grade or establish current withdrawable cash.

## 1 · Smart Contract — 5.0

The Ethereum bridge is upgradeable. Bounded reads at Ethereum block **26,334,223, November 3, 2026, 12:17:59 UTC**, found nonzero implementation and admin slots. The sampled admin's owner getter reverted. That failed selector does not establish ownerlessness, a signer threshold or an execution delay.

The official security index publishes contract and circuit reviews. Their disclosure does not establish findings closure or correspondence between audited commits and the sampled live implementation. The vulnerability-disclosure policy says there is **no public bug-bounty program unless separately announced**; discretionary rewards are a different commitment.

The complete bridge/governor authority, verifier-change powers, pending changes and forced-exit or censorship escape path remain unresolved. Proof-verified accounting cannot prevent a correctly executed losing trade.

## 2 · Economic — 4.0

The liquidation waterfall can transfer distressed positions to LLP. Losses beyond available backstop capacity can reach opposite-side traders through automatic deleveraging. LLP therefore takes inventory, execution and liquidation losses. Documentary strategy buckets allocate capital within one LLP account; they do not establish independently incorporated funds or legally segregated insolvency protection.

The documentation describes a **five-minute LLP cooldown on Lighter**, with none on Robinhood Chain. A separate LIT access rule allows up to 10 USDC of LLP deposits per staked LIT and describes **three-day LIT unstaking**. These apply to different assets and do not guarantee a complete cash-exit time. Account eligibility and live configuration were not measured.

Direct Ethereum transfers and third-party bridge routes have different custody and settlement dependencies. Sequencer/prover availability, collateral, oracle inputs, market depth and current pool capital matter during an exit. Current bucket allocations, concentration, stress losses and executable withdrawals remain unmeasured.

## 3 · Project — 5.0

Service terms identify **Elliot Technologies, Inc.**, eligibility restrictions and dispute provisions. An identified interface provider is not an established separately capitalized LLP repayment obligor or insurance provider. Registry corroboration and independent financial assurance remain incomplete.

The November 3 provider snapshot reported **$788.20 million aggregate TVL** across network/product entries. It is neither LLP NAV, available insurance nor company cash. Fee-to-pool reconciliation, incentive-adjusted earnings, expenses/runway and a comprehensive incident history were not established.

## What to watch

- Verified bridge authority and escape paths, live audit/version binding and pending changes.
- LLP positions, liquidation losses, collateral concentration and executable withdrawals.
- Operator, access-policy, legal or material incident changes.

## Sources, scores and review scope

- [public-pool documentation](https://docs.lighter.xyz/trading/public-pools)
- [liquidation waterfall](https://docs.lighter.xyz/trading/liquidations-and-llp-insurance-fund)
- [Strategy buckets](https://docs.lighter.xyz/trading/liquidations-and-llp-insurance-fund/llp-strategies)
- [LIT utility](https://docs.lighter.xyz/about-lighter/lit-utility)
- [deposit/withdrawal integration guide](https://docs.lighter.xyz/developers/integration-guides/deposits-transfers-and-withdrawals)
- [security-audit index](https://docs.lighter.xyz/security/security-audits)
- [disclosure policy](https://docs.lighter.xyz/security/security-vulnerability-disclosure-policy)
- [Service terms](https://lighter.xyz/terms)
- [DefiLlama provider snapshot](https://api.llama.fi/protocol/lighter)

Initial assessment and last verification: **November 3, 2026**. This is a provisional, bounded documentary and sampled-chain review, not a complete security or financial audit. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 5.0 | 4.0 | 5.0 | 4.5 |

## Revision history

- **2026-11-03:** Initial bounded protocol assessment; scores provisional.

</div>
