---
asset: "syrupUSDC"
slug: "syrupusdc"
aliases: ["syrupUSDC", "SYRUPUSDC", "syrupUSD", "Syrup USDC", "Maple Syrup"]
chains: ["eth", "sol", "arb", "base", "plasma"]
category: "stablecoin"
peg_mechanism: "nav-accruing"
assessment_type: "light"
audience: "retail"
companion_report: "syrupusdc-full"
date: "2026-04-25"
last_verified: "2026-07-02"
featured: false
production: true
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 1066000000
tvl_gross: 1066000000
peg_mechanism_score: 7.0
backing_score: 7.0
liquidity_score: 7.5
issuer_score: 5.5
overall_score: 6.75
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

**Moderate-to-low risk · 6.75/10**

*Live pool backing, peg deviation, and exit-liquidity tiers are on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc).*

> *What's pinned in this report is structural risk — architecture, the issuer menu, the risk axes, and the scores. Current magnitudes (pool split, per-issuer allocation, collateral ratio, concentration, exit tiers) drift weekly and are live on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc). This report is written to stay correct across that drift.*

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~4.5–5% live (organic loan interest) | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | ~2 years | Ethereum, Solana, Arbitrum, Base, Plasma |

## Summary

syrupUSDC is Maple Finance's onchain yield-bearing stablecoin. You deposit USDC, you receive syrupUSDC, and the price slowly accrues yield. The Ethereum pool holds roughly $1B+, with the syrupUSDT sibling materially smaller; live TVL on the dashboard. Maple's "Syrup" product line has reported zero principal losses across ~3 years. Yield is real (interest paid by real institutional borrowers), not emissions.

**Important framing — verified against Maple's own AUM Details page**: the pool actually has two structurally different components, which Maple itself splits as **Loans (~75–80% of pool) + Liquidity (~20–25%)** — live split on the dashboard:

- **Loans** = third-party institutional credit (BTC/XRP/cbBTC/HYPE collateral at 125–333% — overcollateralized in the traditional sense). This is the "Maple lending pool" that the marketing describes.
- **Liquidity** = pool-owned positions in stablecoin and tokenized T-bill yield strategies (PYUSD, USTB, USDC/USDT in DEX pools). At-par with the underlying asset, NOT third-party credit. Risk axis: issuer/RWA/AMM, not borrower default.

The "overcollateralized at all times" framing in Maple's marketing applies to the Loans bucket. The Liquidity bucket is intentionally at par — it's not collateralized credit, it's pool-owned strategies parking capital in yield-generating positions while remaining nominally redeemable. The Pool Delegate rotates this layer across a menu of issuers — Paxos (PYUSD), Superstate (USTB, a NAV-accruing tokenized T-bill), Circle/Tether (USDC/USDT AMM-LP) — and the mix drifts under discretion within days, with no governance gate. Through 2026 the layer rotated substantially out of USTB into PYUSD; **any single issuer can come to dominate the layer** (recently ~90%+ Paxos PYUSD). Current per-issuer allocation is live on the dashboard; the durable facts are the issuer menu, that the mix is delegate-discretionary, and that single-issuer concentration inside the layer can run high.

## What you actually earn

**~4.5–5% APY** (verified live from Maple's GraphQL `syrupGlobals.apyTimeSeries` over the past week). This is the durable yield from institutional borrowers paying interest on their loans, net of Maple's protocol take and 3.33% delegate fee. It varies by loan-book composition and rate environment; ~3–9% range across individual loans, weighted-avg currently ~4.5–5%.

At ~4.5–5%, syrupUSDC is currently **competitive with or above the comparable yield set**: 3-month T-bills are around 3.7–4.0% (US Treasury fiscal data, March 2026 average 3.70%), tokenized T-bill products (BUIDL, USTB, USYC) net ~3.5–4.0% after management fees, and onchain USDC lending on Aave V3 / Morpho is in the 3.5–4.5% range. The Maple value proposition is "real institutional credit yield, ~4.5–5%, with the risk profile of overcollateralized loans + at-par Liquidity strategies." That's a ~70–100 bp spread above T-bills, which is appropriate compensation for institutional credit risk rather than a yield-chase number.

syrupUSDC also has a structural advantage that pure tokenized-T-bill products don't: it's accepted as collateral on Morpho, Euler, and other DeFi lending markets, so a holder can borrow against it and lever the yield if the borrow rate is favorable. That makes it more capital-efficient than locked T-bill exposure, and is a meaningful part of the value proposition for allocators with a use for the borrowed capital.

## How exit works

Two paths, both permissionless (no KYC required for either):

**1. DEX aggregator (preferred for retail):** Use KyberSwap, 1inch, or any DEX aggregator. Empirical exit cost is **single-digit-to-low-double-digit bps** at retail-to-low-institutional notional; live tiered slippage on the dashboard. Sub-minute settlement. Aggregators route across Uniswap v3/v4, Balancer, and other listed pools — significantly more depth than the strict "Uniswap+Balancer pool TVL" headline implies.

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
| Backing | 7.0 | Two-bucket: ~75–80% Loans (BTC/XRP overcollateralized at 125–333% init) + ~20–25% Liquidity (pool-owned PYUSD/USTB/AMM strategies, at par with underlying); Loans-only Pool CR typically ~150–170% (live on dashboard). Pool Delegate discretion is real but lives in Structural/Issuer score, not in backing quality itself. |
| Liquidity | 7.5 | $1B+ pool; aggregator route single-digit-to-low-double-digit bps in the base case (live tiers); **permissionless mint/redeem at the vault layer** (no KYC gating) is a meaningful advantage over RWA peers like KYC-gated thBILL — anyone retail or institutional can enter/exit at NAV without slippage on the primary path. Stress-case binds at pool depth (queue-bound), but the base case is excellent. |
| Issuer | 5.5 | Maple Labs Cayman, doxxed team, 8+ audits, $1M bounty. ~3-year clean record on the Syrup product line. |
| **Overall** | **6.75** | Moderate-to-low risk |

## Who it's for

DeFi-comfortable users who want yield well above stablecoin-savings rates and are comfortable with the trade-offs: real institutional credit risk on the loan book (overcollateralized but discretionary at the underwriting layer), Maple-controlled custody on the Liquidity layer, and no bankruptcy remoteness. Good fit for sizing where low-bps base-case exit slippage is acceptable and a queue-tolerant fallback is OK during stress windows.

## Who should avoid

- Anyone needing instant guaranteed exit at NAV regardless of market conditions — DEX-route slippage is bounded in normal markets but can widen during stress
- Position sizing above the low-MM range without explicit queue tolerance — for institutional sizes during correlated outflows, the redemption queue is the binding path

## What to watch

- **Peg discount on DEX pools.** A widening (>50 bps) discount on syrupUSDC vs NAV is the leading indicator that aggregator routing is deteriorating and queue exit is becoming binding.
- **Liquidity layer issuer events.** ~20–25% of the pool is the Liquidity layer, across the Paxos (PYUSD) / Superstate (USTB) / Circle-Tether (AMM) issuer menu; the delegate rotates the mix under discretion and any one issuer can come to dominate (recently ~90%+ Paxos PYUSD). These positions don't have a crypto-cycle buffer — the stress is the dominant issuer's own peg/issuer event. Live per-issuer mix on the dashboard.
- **Loan collateral approaching par.** The health signal to watch is how close a loan's *current* collateral sits to **par (100%)** — the point where it stops covering the loan — not how far it has drifted below its funding-time level (a loan can be "below init" and still hugely overcollateralized, so that on its own tells you little). Watch for the tightest loan nearing par, and for many crypto-collateralized loans compressing toward par together (a correlated-drawdown warning). The delegate has the right but not the obligation to call these loans; current counts are shown live on the dashboard.
- **Multi-chain bridge surface.** syrupUSDC bridges via Chainlink CCIP (different attack class from the April 2026 LayerZero OFT incidents). Still verify per-chain CCT pool addresses on Chainlink's CCIP directory and check per-chain pool depth before sizing on non-Ethereum venues — depth thins fast outside Ethereum.
- **Pool Delegate roster changes.** Delegate identity is the structural credit-judgment trust assumption.
- **Cross-pool concentration if you also hold syrupUSDT.** Maple's materially smaller sibling pool shares the same Pool Delegate firm and several of its largest loan-book borrowers. On a Loans-only basis the top-3 cross-pool borrowers run persistently well above the 10%-per-counterparty institutional norm, with the single largest near ~1/5 of the family loan book. Holding both syrupUSDC and syrupUSDT does **not** diversify credit risk for those borrowers — it concentrates it. If you allocate across both, compute combined exposure to each borrower rather than treating the pools as independent; live figures on the dashboard.

## Live dashboard

A live monitoring view is available at [tidresearch.com/dashboards/?asset=syrupusdc](https://tidresearch.com/dashboards/?asset=syrupusdc) — refreshed hourly from on-chain reads. It shows pool backing, separate **Loan Book** and **Liquidity Layer** health panels (status flags + distance to par / current collateralization + custody addresses), peg deviation, and exit-liquidity tiers. The signals worth watching listed above all map to specific panels there.

## A note on Maple's history

Maple v1 (2021–2022) lent on an undercollateralized basis and lost LPs ~$50M+ during the 2022 credit cycle (Orthogonal Trading default, M11 Credit / Babel Finance defaults). The Syrup product line is Maple's structural response — overcollateralized loans on the third-party credit book, vetted Pool Delegates, active margin calls. Same legal entity (Maple Labs, Cayman Islands), same broader team. The v2 Syrup product has run cleanly for ~3 years through May 2026. Some institutional risk frameworks dock entity-track-record regardless of product changes; this report treats it as background context rather than a leading risk factor.

---

For institutional-grade risk analysis — Pool Delegate identities, specific contract addresses, custody EOA inventory, on-chain monitoring patterns — the [institutional version](/reports/syrupusdc-full/) is available.
