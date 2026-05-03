---
asset: "syrupUSDT"
slug: "syrupusdt"
aliases: ["syrupUSDT", "SYRUPUSDT", "Syrup USDT", "Maple Syrup USDT"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "nav-accruing"
assessment_type: "light"
audience: "retail"
companion_report: "syrupusdc"
date: "2026-05-03"
last_verified: "2026-05-03"
featured: false
production: true
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 436000000
tvl_gross: 436000000
peg_mechanism_score: 7.0
backing_score: 6.0
liquidity_score: 5.0
issuer_score: 5.5
overall_score: 5.75
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

# syrupUSDT — Retail Risk Report

**Moderate risk · 5.75/10 · Sibling product to [syrupUSDC](/reports/syrupusdc/)**

| Yield | Exit method | Primary redemption | Pool size | Chains |
|---|---|---|---|---|
| ~4.5–5% live (organic loan-interest only; Drips/Seasons program ended Feb 2026) | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | ~$436M (smaller than syrupUSDC's ~$1.22B) | Ethereum primary |

## Summary

syrupUSDT is the USDT-denominated sibling of syrupUSDC in Maple Finance's "Syrup" institutional credit product line. Same Maple architecture, same Pool Delegate firm, same Maple Labs entity — but materially smaller pool (~$436M vs syrupUSDC's $1.22B), with 12 active loans rather than 28. Yield is real (interest paid by real institutional borrowers), zero principal losses since launch, and the product runs on the same audited v2 contract codebase as its USDC sibling.

The catch: **syrupUSDT is more concentrated than syrupUSDC at the per-pool level, AND it shares borrowers with syrupUSDC.** The largest single loan in syrupUSDT is $175M / 41% of the pool — vs the largest loan in syrupUSDC at $200M / 16% of that pool. A single borrower default in syrupUSDT writes down ~40% of the principal in one event. And because the same borrowers borrow from BOTH pools, holding both syrupUSDC and syrupUSDT together does NOT diversify your credit exposure to those entities — it concentrates them.

**One framing correction important to make upfront:** like syrupUSDC, the loan book is a mix of crypto-overcollateralized loans (~90% of syrupUSDT's principal — BTC + XRP at 125-150% collateral) and at-par stablecoin/RWA collateralized loans (~10% — PYUSD + USDC + USDT at 1:1). The "overcollateralized at all times" framing in Maple's marketing is true for the 90% but not for the at-par fraction.

## What you actually earn

**Today: organic loan interest only — ~4.5–5% APY** (verified live from Maple's GraphQL `syrupGlobals.apyTimeSeries`). Same yield mechanics as syrupUSDC: borrower interest, net of Maple's protocol fee + 3.33% delegate fee.

**Important framing correction (as of May 2026):** The Drips program ended on February 18, 2026 — final claim window for Season 12 was Jan 18 → Feb 18, 2026. Plain syrupUSDT holders today earn `coreApy` only with no programmatic boost. Replacement is partner-distributed Merkl rewards (`app.merkl.xyz/?search=syrup`), which require deploying syrupUSDT into specific partner protocols and carry the partner's risk surface, not syrupUSDT's. The historical "16-20% headline APY" framing is no longer applicable.

For a depositor holding plain syrupUSDT at par, expect ~4.5-5% — and notably, that's been *below* the 3-month USD benchmark (~5.2-6.5%) on most days. The compelling-yield story that defined syrupUSDT's retail framing in 2024–2025 has materially changed, just like syrupUSDC's.

## Cross-pool concentration with syrupUSDC

This is what makes syrupUSDT structurally different from a typical "diversification" candidate alongside syrupUSDC. **All four syrupUSDT borrowers also have positions in syrupUSDC.** Verified 2026-05-03:

| Borrower | syrupUSDT | syrupUSDC | Combined | % of family |
|---|---|---|---|---|
| `0x8669f3...f1e9` | $62.1M (XRP) | $181.9M | $244.0M | **15.1%** |
| `0xb62446...d505` | $62.0M (BTC) | $67.6M | $129.6M | 8.0% |
| `0x1fcc47ee...` | $29.5M (PYUSD) | $267.7M | **$297.2M** | **18.4%** |
| `0x2570fa...c8a0` | $12.2M (at-par) | $36.5M | $48.7M | 3.0% |

Top-3 cross-pool borrowers carry **~42% of the combined Syrup family book** ($1.61B). The single largest exposure is 18.4% of family — materially above standard institutional credit framework limits (10%).

**Sizing implication:** if you allocate to BOTH syrupUSDC and syrupUSDT, compute combined per-borrower exposure rather than treating them as independent products. The pools concentrate rather than diversify your credit risk for the cross-pool borrowers.

## How exit works

Two paths, same mechanics as syrupUSDC, but smaller pool depth:

**1. DEX aggregator (preferred for retail).** Use KyberSwap, 1inch, or any DEX aggregator. Smaller pool means materially shallower DEX depth than syrupUSDC's empirical ~12 bps to $100K — expect higher slippage at any given notional size.

**2. Direct redemption.** Submit to the WithdrawalManager; processed at NAV from free pool USDT. Same cycle-based queue as syrupUSDC.

For sizing above the low retail range (~$50K+), you'll likely use the queue. Stress-case redemption depth is bound by loan-repayment cadence on the smaller $422M principal base — expect queue latency of weeks rather than days for institutional sizes during correlated outflow stress.

## What the contracts are doing

Same architecture as syrupUSDC. ERC-4626 vault. Borrowers post collateral that's held off-chain by custodians under Pool Delegate policy. The smart contract handles loan accounting, payment scheduling, and time-based default triggering — but the credit-relevant decisions (who to lend to, on what terms, when to call) are human-discretionary at the Pool Delegate level.

The Pool Delegate is a single externally-owned address (`0x93aA06F8...501A`, single key) — different EOA from syrupUSDC's (`0xC1e1...49f`), but the same firm runs both. Maple's first-loss cover requirement for the pool is currently $0; depositors absorb credit losses directly.

## Audits & security

Same audit profile as syrupUSDC: 8+ audits, Spearbit + Trail of Bits on the v2/Syrup contracts, $1M+ Immunefi bounty, ERC-4626 standard architecture. Both pools run on the same audited contract codebase.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg mechanism | 7.0 | NAV-accruing, organic yield, no losses to date |
| Backing | 6.0 | Mixed collateral (90% crypto-overcollateralized + 10% at-par stablecoin/RWA). Per-pool concentration significantly higher than syrupUSDC (largest single loan 41% of pool vs 16%). |
| Liquidity | 5.0 | $436M Ethereum pool. Smaller depth than syrupUSDC; expect higher aggregator slippage and longer queue cadence at institutional sizing. |
| Issuer | 5.5 | Same Maple Labs Cayman entity as syrupUSDC. v1 bad-debt history applies equally to both pools. |
| **Overall** | **5.75** | Slightly worse than syrupUSDC's 6.25 — primarily due to higher per-pool concentration and shallower exit liquidity |

## Who it's for

Allocators who already hold or are sizing into syrupUSDC and want USDT-denominated exposure to the same Maple credit framework. Comfortable for retail and low-institutional positions willing to accept higher per-pool concentration than syrupUSDC. Generally NOT a yield-chase product post-Drips — competing with USD-benchmark T-bills on yield while accepting credit + custody + governance risks.

## Who should avoid

- Anyone holding syrupUSDC and looking for a "diversification" sister product — the cross-pool borrower overlap means it concentrates rather than diversifies for the family's biggest borrowers
- Anyone treating "16–20% APY" as the durable return — the Season-incentive component ended Feb 2026
- Position sizes above the low-MM range without explicit queue tolerance — the smaller pool is queue-bound earlier than syrupUSDC at proportional sizes
- Anyone needing the largest single-borrower exposure to stay below 20% of pool — syrupUSDT's largest loan is 41% of pool

## What to watch

- **Yield reality check.** As of May 2026, Drips/Seasons are ended and there is NO yield boost on plain syrupUSDT holding — only ~4.5-5% organic. If you see "16-20% APY" claims for syrupUSDT anywhere, those are stale.
- **Per-pool concentration.** Largest single loan is 41% of pool. Watch the live dashboard for changes.
- **Cross-pool concentration if you also hold syrupUSDC.** Top-3 cross-pool borrowers carry ~42% of the combined family book. Compute combined per-borrower exposure rather than treating the pools as independent.
- **Pool Delegate roster changes.** Same Pool Delegate firm runs both pools but with different operational EOAs.

## Live dashboard

A live monitoring view is available at [todayindefi.github.io/backing-monitor/?asset=syrupusdt](https://todayindefi.github.io/backing-monitor/?asset=syrupusdt) — refreshed hourly from on-chain reads. The Cross-Pool Family panel (also rendered on the syrupUSDC page) surfaces cross-pool concentration metrics live. Sister page: [syrupUSDC dashboard](https://todayindefi.github.io/backing-monitor/?asset=syrupusdc).

---

For internal-grade risk analysis — Pool Delegate identities, contract addresses, on-chain monitoring patterns — the institutional version is in development.
