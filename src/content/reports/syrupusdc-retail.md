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
last_verified: "2026-05-04"
featured: true
production: true
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
| ~4.7% live (organic loan interest) | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | ~2 years | Ethereum, Solana, Arbitrum, Base, Plasma |

## Summary

syrupUSDC is Maple Finance's onchain yield-bearing stablecoin. You deposit USDC, you receive syrupUSDC, and the price slowly accrues yield. As of May 2026, the Ethereum pool holds roughly $1.22B; the sibling syrupUSDT pool holds about $436M. Maple's "Syrup" product line has reported zero principal losses across ~3 years. Yield is real (interest paid by real institutional borrowers), not emissions.

**Important framing — verified 2026-05-04 against Maple's own AUM Details page**: the pool actually has two structurally different components, which Maple itself splits as **Loans (79% of family AUM, $1.27B) + Liquidity (21%, $347M)**:

- **Loans** = third-party institutional credit (BTC/XRP/cbBTC/HYPE collateral at 125–333% — overcollateralized in the traditional sense). This is the "Maple lending pool" that the marketing describes.
- **Liquidity** = pool-owned positions in stablecoin and tokenized T-bill yield strategies (PYUSD, USTB, USDC/USDT in DEX pools). At-par with the underlying asset, NOT third-party credit. Risk axis: issuer/RWA/AMM, not borrower default.

The "overcollateralized at all times" framing in Maple's marketing applies to the Loans bucket. The Liquidity bucket is intentionally at par — it's not collateralized credit, it's pool-owned strategies parking capital in yield-generating positions while remaining nominally redeemable. Largest Liquidity positions: $152.7M PYUSD strategy, $105M USTB position (Superstate's tokenized T-bill).

## What you actually earn

**~4.7% APY** (verified live from Maple's GraphQL `syrupGlobals.apyTimeSeries` over the past week). This is the durable yield from institutional borrowers paying interest on their loans, net of Maple's protocol take and 3.33% delegate fee. It varies by loan-book composition and rate environment; ~3–9% range across individual loans, weighted-avg currently ~4.7–5%.

For a depositor holding plain syrupUSDC at par, that's been *below* the 3-month USD benchmark (~5.2-6.5%) on most days this week. The Maple value proposition is "real institutional credit yield, ~4.7%, with the risk profile of overcollateralized loans + at-par Liquidity strategies" — not a yield-chase product. Allocators sizing into syrupUSDC should evaluate the credit-quality-vs-T-bill thesis rather than chasing a headline rate.

## How exit works

Two paths, both permissionless (no KYC required for either):

**1. DEX aggregator (preferred for retail):** Use KyberSwap, 1inch, or any DEX aggregator. Empirical exit cost as of 2026-04-25: about **12 basis points flat** at sizes from $1K to $100K. Sub-minute settlement. Aggregators route across Uniswap v3/v4, Balancer, and other listed pools — significantly more depth than the strict "Uniswap+Balancer pool TVL" headline implies.

**2. Direct redemption:** Submit a redemption request to the vault contract; the WithdrawalManager processes it. Maple claims average withdrawal time under 5 minutes during normal markets. This is the path for sizes that exceed aggregator-route depth.

The honest qualifier: aggregator routing is excellent in normal market conditions but less reliable during stress. If many holders try to exit at once (a credit event, a crypto-cycle drawdown that hits institutional borrowers simultaneously), aggregator slippage widens and the redemption queue becomes the binding constraint. Queue speed depends on free USDC in the pool versus outstanding loan principal — if loans are fully deployed, the queue lengthens until borrowers repay or get margin-called.

## What the contracts are doing

syrupUSDC is an ERC-4626 vault (the standard "deposit → get share token" pattern). The Ethereum deployment is canonical; the multi-chain versions (Solana, Arbitrum, Base, Plasma) are bridged extensions of the same product.

What sits behind the scenes:
- Borrowers post collateral that's held off-chain by custodians under Pool Delegate policy. The smart contract itself does not hold or price the collateral — Maple's GraphQL exposes the asset, amount, and required collateralization level per loan
- A single Pool Delegate (an institutional credit firm vetted by Maple) sets all loan terms, monitors borrower health, and has the right to call any loan with a 24-hour notice + 48-hour grace period before default
- The smart contracts handle loan accounting, payment scheduling, and the time-based default trigger — but the credit-relevant decisions (who to lend to, on what terms, when to call) are human-discretionary
- WithdrawalManager handles the redemption queue; LoanManager tracks per-loan principal and payment state

The Pool Delegate model is the structural difference from purely algorithmic protocols (like Aave). It adds discretionary credit risk — a delegate's bad loan, a delegate-borrower conflict of interest, or a delegate mistake during a fast-moving market can produce losses that algorithmic protocols wouldn't face. The delegate is also a single externally-owned address (single private key) and Maple's first-loss cover requirement for the pool is currently $0 — meaning no on-chain protocol equity absorbs losses before depositors. Mitigated by: Maple's delegate vetting, public delegate identity, and Maple Labs' reputational stake.

## Audits & security

Strong by DeFi-stablecoin standards:

- **8+ audits** total. The current v2/Syrup contracts specifically reviewed by **Spearbit** and **Trail of Bits** (both top-tier), plus Three Sigma and Peckshield.
- **$1M+ Immunefi bug bounty** active.
- ERC-4626 standard architecture; well-understood pattern.

Caveats:
- Multi-chain bridging uses **Chainlink CCIP** with the **CCT (Cross-Chain Token) standard** — burn-and-mint native deployments on each chain (Ethereum canonical + Solana, Arbitrum, Base, Plasma), not a wrapped/lockbox model. **This is structurally a different attack class from the April 2026 LayerZero OFT incidents (rsETH, Drift, Volo)** — those exploits hit single-DVN OFT configurations and admin-key compromises that don't map to CCIP's architecture. CCIP has a clean track record at scale through April 2026 (no public exploits since 2023 launch) with a Risk Management Network as an anti-fraud backstop. What you trade off vs LayerZero: concentrated trust in Chainlink as a single (mature) provider, rather than distributed quorum across DVNs. Per-chain DD still warranted: verify CCT pool addresses on Chainlink's CCIP directory and check per-chain pool depth before sizing on non-Ethereum venues.
- The Pool Delegate roster is what you're trusting at the credit-judgment layer. Maple publishes current delegates; cross-check that they're active and reputable before sizing institutional positions.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg mechanism | 7.0 | NAV-accruing, organic yield from loan interest, no rebase, no losses to date in Syrup |
| Backing | 6.5 | Two-bucket: 79% Loans (BTC/XRP overcollateralized third-party credit) + 21% Liquidity (pool-owned PYUSD/USTB/AMM strategies, at par with underlying). Pool Delegate discretion + off-chain custody + $0 first-loss cover are the binding risk surfaces. |
| Liquidity | 6.5 | $1.2B pool TVL; aggregator route empirically ~12 bps slippage to $100K; stress-case binds at pool depth |
| Issuer | 5.5 | Maple Labs Cayman, doxxed team, 8+ audits, $1M bounty. ~3-year clean record on the Syrup product line. |
| **Overall** | **6.25** | Moderate risk |

## Who it's for

DeFi-comfortable users who want yield well above stablecoin-savings rates and are comfortable with the trade-offs: real institutional credit risk on the loan book (overcollateralized but discretionary at the underwriting layer), Maple-controlled custody on the Liquidity layer, and no bankruptcy remoteness. Good fit for sizing where ~12 bps exit slippage is acceptable and a queue-tolerant fallback is OK during stress windows.

## Who should avoid

- Anyone needing instant guaranteed exit at NAV regardless of market conditions — DEX-route slippage is bounded in normal markets but can widen during stress
- Position sizing above the low-MM range without explicit queue tolerance — for institutional sizes during correlated outflows, the redemption queue is the binding path

## What to watch

- **Peg discount on DEX pools.** A widening (>50 bps) discount on syrupUSDC vs NAV is the leading indicator that aggregator routing is deteriorating and queue exit is becoming binding.
- **Liquidity layer issuer events.** ~21% of family AUM is in pool-owned PYUSD/USTB/AMM positions. These don't have a crypto-cycle buffer — their stress is the collateral asset's own peg/issuer event (Paxos for PYUSD, Superstate for USTB, Circle for USDC). Different stress scenarios bind differently across the book.
- **Loans below their initial collateral level.** As of May 2026, 5 BTC-collateralized loans (~$82M, ~9% of loan book) are running below their funding-time required collateral level — the delegate has the right to call them but has not. Monitor whether the count grows.
- **Multi-chain bridge surface.** syrupUSDC bridges via Chainlink CCIP (different attack class from the April 2026 LayerZero OFT incidents). Still verify per-chain CCT pool addresses on Chainlink's CCIP directory and check per-chain pool depth before sizing on non-Ethereum venues — depth thins fast outside Ethereum.
- **Pool Delegate roster changes.** Delegate identity is the structural credit-judgment trust assumption.
- **Cross-pool concentration if you also hold syrupUSDT.** Maple's sibling pool (~$436M) shares the same Pool Delegate firm and several of its largest loan-book borrowers. Verified 2026-05-04 on Loans-only basis: top three cross-pool borrowers carry ~48.8% of the family loan book ($1.27B); the single largest at ~19.3%. Holding both syrupUSDC and syrupUSDT does **not** diversify credit risk for those borrowers — it concentrates it. If you allocate across both, compute combined exposure to each borrower rather than treating the pools as independent.

## Live dashboard

A live monitoring view is available at [todayindefi.github.io/backing-monitor/?asset=syrupusdc](https://todayindefi.github.io/backing-monitor/?asset=syrupusdc) — refreshed hourly from on-chain reads. It shows pool backing, separate **Loan Book** and **Liquidity Layer** health panels (status flags + buffer to initial collateral level + custody addresses), peg deviation, and exit-liquidity tiers. The signals worth watching listed above all map to specific panels there.

## A note on Maple's history

Maple v1 (2021–2022) lent on an undercollateralized basis and lost LPs ~$50M+ during the 2022 credit cycle (Orthogonal Trading default, M11 Credit / Babel Finance defaults). The Syrup product line is Maple's structural response — overcollateralized loans on the third-party credit book, vetted Pool Delegates, active margin calls. Same legal entity (Maple Labs, Cayman Islands), same broader team. The v2 Syrup product has run cleanly for ~3 years through May 2026. Some institutional risk frameworks dock entity-track-record regardless of product changes; this report treats it as background context rather than a leading risk factor.

---

For institutional-grade risk analysis — Pool Delegate identities, specific contract addresses, custody EOA inventory, on-chain monitoring patterns — the [institutional version](/reports/syrupusdc-full/) is available.
