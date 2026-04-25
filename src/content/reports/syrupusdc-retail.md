---
asset: "syrupUSDC"
slug: "syrupusdc"
aliases: ["syrupUSDC", "SYRUPUSDC", "syrupUSD", "Syrup USDC", "Maple Syrup"]
chains: ["eth", "sol", "arb", "base", "plasma"]
category: "stablecoin"
peg_mechanism: "nav-accruing"
assessment_type: "light"
audience: "retail"
date: "2026-04-25"
last_verified: "2026-04-25"
featured: true
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 1066000000
tvl_gross: 1066000000
peg_mechanism_score: 7.0
backing_score: 6.5
liquidity_score: 6.5
issuer_score: 5.5
overall_score: 6.25
audited: true
audit_count: 8
audit_firms: ["Spearbit", "Trail of Bits", "Three Sigma", "Peckshield"]
bug_bounty: true
bug_bounty_amount: 1000000
bug_bounty_platform: "Immunefi"
team_doxxed: true
incident_history: true
is_fork: false
live_since: "2024"
underlying_managers:
  - "Maple Labs"
  - "Pool Delegates (vetted institutional credit firms)"
---

# syrupUSDC — Retail Risk Report

**Moderate risk · 6.25/10**

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~5–9% base, ~16% with Season incentives | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | ~2 years | Ethereum, Solana, Arbitrum, Base, Plasma |

## Summary

syrupUSDC is Maple Finance's onchain yield-bearing stablecoin. You deposit USDC, you receive syrupUSDC, and the price slowly accrues yield as Maple lends the deposits out to vetted institutional borrowers — crypto trading firms, market makers, centralized lenders — who post BTC, ETH, or other liquid crypto as collateral. As of late April 2026, the Ethereum pool holds about $1.066B and the sibling syrupUSDT pool is similar size. Maple's "Syrup" product line has reported zero principal losses in roughly two years of operation. Yield is real (interest paid by real borrowers), not emissions.

The catch: Maple's earlier v1 product (2021–2022) lost LPs more than $50M when undercollateralized borrowers defaulted during the 2022 credit cycle (Orthogonal Trading, M11 Credit). Syrup is a structural reset — overcollateralized only, vetted Pool Delegates, active margin calls — and runs on the same legal entity (Maple Labs, Cayman Islands) with the same team. The v2 product has performed cleanly so far but hasn't been stress-tested through a full crypto bear market.

## What you actually earn

Two separate yield components:

- **Base yield (5–9%):** Real interest from institutional borrowers paying ~5–9% on overcollateralized loans, minus Maple's protocol take. This is the durable component — it's there as long as Syrup is operating.
- **Syrup Seasons (additional ~5–10%):** Point-and-incentive programs that have historically pushed headline APY into the 16–20% range. Seasons end and change structure; when they do, headline APY drops sharply without anything actually changing about the underlying loans.

Plan around base yield (5–9%), not headline yield (16–20%). The Season component is bonus, not baseline.

## How exit works

Two paths, both permissionless (no KYC required for either):

**1. DEX aggregator (preferred for retail):** Use KyberSwap, 1inch, or any DEX aggregator. Empirical exit cost as of 2026-04-25: about **12 basis points flat** at sizes from $1K to $100K. Sub-minute settlement. Aggregators route across Uniswap v3/v4, Balancer, and other listed pools — significantly more depth than the strict "Uniswap+Balancer pool TVL" headline implies.

**2. Direct redemption:** Submit a redemption request to the vault contract; the WithdrawalManager processes it. Maple claims average withdrawal time under 5 minutes during normal markets. This is the path for sizes that exceed aggregator-route depth.

The honest qualifier: aggregator routing is excellent in normal market conditions but less reliable during stress. If many holders try to exit at once (a credit event, a crypto-cycle drawdown that hits institutional borrowers simultaneously), aggregator slippage widens and the redemption queue becomes the binding constraint. Queue speed depends on free USDC in the pool versus outstanding loan principal — if loans are fully deployed, the queue lengthens until borrowers repay or get margin-called.

## What the contracts are doing

syrupUSDC is an ERC-4626 vault (the standard "deposit → get share token" pattern). The Ethereum deployment is canonical; the multi-chain versions (Solana, Arbitrum, Base, Plasma) are bridged extensions of the same product.

What sits behind the scenes:
- Borrowers post collateral and request loans
- Pool Delegates — institutional credit firms vetted by Maple — review and approve loans, set terms, and manage active margin calls as collateral values move
- The smart contracts enforce overcollateralization and auto-margin-call execution; borrower selection itself is human-discretionary
- WithdrawalManager handles redemption queue; LoanManager handles loan accounting

The Pool Delegate model is the structural difference from purely algorithmic protocols (like Aave). It adds discretionary credit risk — a delegate's bad loan, a delegate-borrower conflict of interest, or a delegate mistake during a fast-moving market can produce losses that algorithmic protocols wouldn't face. Mitigated by: Maple's delegate vetting, public delegate identity, and Maple Labs' reputational stake.

## Audits & security

Strong by DeFi-stablecoin standards:

- **8+ audits** across the v1 and v2 lifecycle. v2/Syrup specifically reviewed by **Spearbit** and **Trail of Bits** (both top-tier), plus Three Sigma and Peckshield.
- **$1M+ Immunefi bug bounty** active.
- ERC-4626 standard architecture; well-understood pattern.
- v2 was a ground-up rewrite explicitly motivated by the v1 failures — the team published transparent post-mortems.

Caveats:
- Multi-chain expansion (Solana, Arbitrum, Base, Plasma) likely uses bridge adapter contracts deployed after the canonical audits. The April 2026 cross-chain incident class (rsETH OFT exploit, Drift admin compromise) is a relevant calibration — verify per-chain audit coverage before sizing on any non-Ethereum venue.
- The Pool Delegate roster is what you're trusting at the credit-judgment layer. Maple publishes current delegates; cross-check that they're active and reputable before sizing institutional positions.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg mechanism | 7.0 | NAV-accruing, organic yield from loan interest, no rebase, no losses to date in Syrup |
| Backing | 6.5 | Overcollateralized institutional loans with active margin calls; Pool Delegate discretion is the binding risk surface |
| Liquidity | 6.5 | $1B+ pool TVL; aggregator route empirically ~12 bps slippage to $100K; stress-case binds at pool depth |
| Issuer | 5.5 | Maple Labs Cayman, doxxed team, 8+ audits, $1M bounty — but v1's 2022 $50M+ bad-debt history under same entity is a real institutional-memory mark |
| **Overall** | **6.25** | Moderate risk |

## Who it's for

DeFi-comfortable users who want yield well above stablecoin-savings rates and are comfortable with the trade-offs: real institutional credit risk (overcollateralized, but discretionary at the underwriting layer), no bankruptcy remoteness, and a v1 incident history that's relevant context even though Syrup is a structurally different product. Good fit for sizing where ~12 bps exit slippage is acceptable and a queue-tolerant fallback is OK during stress windows.

## Who should avoid

- Anyone needing instant guaranteed exit at NAV regardless of market conditions — DEX-route slippage is bounded in normal markets but can widen during stress
- Anyone treating "16–20% APY" as the durable return — the Season-incentive component is programmatic and will compress when seasons change
- Position sizing above the low-MM range without explicit queue tolerance — for institutional sizes during correlated outflows, the redemption queue is the binding path

## What to watch

- **Peg discount on DEX pools.** A widening (>50 bps) discount on syrupUSDC vs NAV is the leading indicator that aggregator routing is deteriorating and queue exit is becoming binding.
- **Season transitions.** When Seasons end or restructure, headline APY drops. Plan around base yield, not headline.
- **Multi-chain bridge surface.** Don't deploy on a non-Ethereum venue without checking that chain's bridge adapter audit coverage. April 2026 had three multi-million cross-chain incidents.
- **Pool Delegate roster changes.** Delegate identity is the structural credit-judgment trust assumption.

---

For internal-grade risk analysis — Pool Delegate identities, specific contract addresses, on-chain monitoring patterns, and the methodology limits this report can't enumerate — the institutional version is in development.
