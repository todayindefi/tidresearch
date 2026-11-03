---
protocol: Zama
slug: zama
aliases:
- Zama
- Zama Protocol
- Zama FHEVM
chains:
- ethereum
assessment_type: full
date: '2026-11-03'
last_verified: '2026-11-03'
last_revised: '2026-11-03'
category: protocol
protocol_category: confidential-computing
audience: retail
production: false
published: true
featured: false
contract_score: 5.0
economic_score: 4.5
project_score: 5.5
overall_score: 5.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-protocol-report="zama">

# Zama — Risk Report

**Moderate risk · 5.0/10 · provisional**

Confidential-computing and vault infrastructure

## Summary

Zama enables encrypted computation on public chains. A confidential vault wraps an investment position while adding confidential balances, batching and decryption dependencies. Encryption does not insure principal or remove the underlying strategy's losses and liquidity restrictions.

This assessment covers Ethereum confidential-vault infrastructure. It distinguishes base **cUSDT**, which wraps USDT, from a **confidential strategy-share wrapper**, which represents a yield-vault position. It does not grade every Zama application or an individual investment account.

## 1 · Smart Contract — 5.0

The confidential-vault design gives each vault deposit/redeem batchers and a confidential share. Bounded reads at Ethereum block **26,334,223, November 3, 2026, 12:17:59 UTC**, corroborated the Flowdesk confidential share's registered underlying yield vault and base cUSDT's USDT underlying. This establishes identity edges rather than underlying asset quality or solvency.

The sampled Flowdesk batchers had zero standard implementation/admin slots, consistent with their documented plain deployment; zero slots alone do not prove immutability. The confidential share, cUSDT and registry had **nonzero implementation slots** and resolved ownership to the documented Protocol DAO. A batcher's non-upgradeable design does not make the shared wrappers and registry immutable.

Governance documentation separates operator voting, Ethereum administration, cross-chain messages and fallback multisigs. Future voting targets are not measured current quorums. Operator-triggered emergency pausing and governance restoration are separate paths. Specialist technical reviews are published, but current vault audit/version binding, DAO permissions, fallback reach, delays and operator independence remain incomplete.

## 2 · Economic — 4.5

The registered Flowdesk High Yield USDT product uses an underlying **[Morpho Vault V2](/protocols/morpho/)**. Flowdesk's curation, vault assets, adapters, caps, oracle choices and liquidity require their own assessment. Neither Zama nor Morpho guarantees repayment through integration.

User-driven batch progression, cancellation/refunds before dispatch and claims after finalization provide recovery mechanisms. A dispatched batch still needs aggregate decryption, and an asynchronous underlying can delay fulfillment. Permissionless calls cannot replace missing liquidity or eliminate operator-system dependence. Sampled batchers were unpaused at the stated block; that is not a guarantee of continued service or a complete permission audit.

Public and confidential withdrawal paths differ in privacy, timing and dependencies. No complete withdrawal or universal settlement ceiling was established. **Private balances were not decrypted**, and no current private holding or payout value is asserted.

## 3 · Project — 5.5

Legal disclosures distinguish **Zama SAS**, the Swiss ZAMA-token issuer and application terms. Public technical and management disclosures support accountability, while the exact application repayment counterparty, enforceable holder recourse and financial assurance remain incomplete. Developer or token-issuer identity is not a corporate promise to repay a strategy share.

The November 3 provider snapshot reported **$122.49 million TVL**, separately from staking. It is not a private account balance or freely redeemable collateral. Funded strategy weights, corporate profitability, protocol-fee coverage and a complete incident review were not established. Limited balance visibility remains unknown rather than zero.

## What to watch

- Wrapper, registry and operator authority; audit/version coverage and decryption liveness.
- Underlying Morpho allocations, limits, collateral and executable liquidity.
- Recovery outcomes, application terms and legal obligations.

## Sources, scores and review scope

- [vault architecture](https://docs.zama.org/protocol/confidential-vault)
- [deployment register](https://docs.zama.org/protocol/confidential-vault/reference/addresses)
- [documented trust model](https://docs.zama.org/protocol/confidential-vault/concepts/trust-model)
- [withdrawal guide](https://docs.zama.org/protocol/confidential-vault/guides/withdraw)
- [Ethereum register](https://docs.zama.org/protocol/protocol-apps/addresses/mainnet/ethereum)
- [current governance description](https://docs.zama.org/protocol/protocol-apps/governance/governance)
- [Emergency pausing](https://docs.zama.org/protocol/protocol-apps/governance/pausing)
- [audit disclosure](https://www.zama.org/post/zama-protocol-testnet-update-mpc-partners-better-performance-audits-and-new-features)
- [Legal notice](https://www.zama.org/legal/legal-notice)
- [App terms](https://www.zama.org/legal/zama-app-terms)
- [DefiLlama snapshot](https://api.llama.fi/protocol/zama)

Initial assessment and last verification: **November 3, 2026**. This is a provisional, bounded documentary and sampled-chain review, not a complete security or financial audit. Provider TVL figures, where cited, are dated observations rather than live balances, net flows or proof of exit capacity. No new live dashboard or account measurement is implied.

Higher scores mean safer on a 1–10 scale. Overall is an authored protocol judgment rather than a separate asset, parent-protocol or underlying-vault rating. It may differ from the arithmetic mean of the three axes.

| Smart Contract | Economic | Project | Overall |
|---:|---:|---:|---:|
| 5.0 | 4.5 | 5.5 | 5.0 |

## Revision history

- **2026-11-03:** Initial bounded protocol assessment; scores provisional.

</div>
