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
last_verified: "2026-05-04"
featured: false
production: true
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 436000000
tvl_gross: 436000000
peg_mechanism_score: 7.0
backing_score: 6.5
liquidity_score: 6.0
issuer_score: 5.5
overall_score: 6.0
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

**Moderate risk · 6.0/10 · Sibling product to [syrupUSDC](/reports/syrupusdc/)**

| Yield | Exit method | Primary redemption | Pool size | Chains |
|---|---|---|---|---|
| ~4.5–5% live (organic loan interest) | DEX aggregator (sub-minute) or queue | Permissionless (no KYC) | ~$436M (smaller than syrupUSDC's ~$1.22B) | Ethereum primary |

## Summary

syrupUSDT is the USDT-denominated sibling of syrupUSDC in Maple Finance's "Syrup" institutional credit product line. Same Maple architecture, same Pool Delegate firm, same Maple Labs entity — but materially smaller pool (~$436M vs syrupUSDC's $1.22B). Yield is real (interest paid by real institutional borrowers), zero principal losses since launch, and the product runs on the same audited v2 contract codebase as its USDC sibling.

**Pool composition (verified 2026-05-04 against Maple's own AUM Details page)**: $379M Loans (87% — third-party institutional credit, 84% BTC + 16% XRP at 125–150% init level) + $43M Liquidity (10% — pool-owned PYUSD/USDC-AMM/USDT-AMM positions). The Liquidity layer is at-par with the underlying asset and routes through Maple's lending infrastructure as accounting wrapper, but is functionally pool-owned strategy custody, NOT third-party credit. "Overcollateralized at all times" applies to the loan book; the Liquidity layer is intentionally at par.

The catch: **syrupUSDT is more concentrated than syrupUSDC at the per-pool level, AND it shares borrowers with syrupUSDC.** The largest single loan in syrupUSDT is $175M / **~41% of the pool** — vs the largest loan in syrupUSDC at $200M / 16% of that pool. A single borrower default in syrupUSDT writes down ~40% of the principal in one event. And because the same borrowers borrow from BOTH pools, holding both syrupUSDC and syrupUSDT together does NOT diversify your credit exposure to those entities — it concentrates them.

## What you actually earn

**~4.5–5% APY** (verified live from Maple's GraphQL `syrupGlobals.apyTimeSeries`). Same yield mechanics as syrupUSDC: borrower interest, net of Maple's protocol fee + 3.33% delegate fee.

At ~4.5–5%, syrupUSDT sits **above the comparable USD-yield set**: 3-month T-bills are around 3.7–4.0% (US Treasury fiscal data, March 2026 average 3.70%), tokenized T-bill products (BUIDL, USTB, USYC, Ondo USDY) net ~3.5–4.0% after management fees, and onchain stablecoin lending on Aave V3 / Morpho is in the 3.5–4.5% range (currently elevated from the mid-April rsETH/Kelp DAO incident, and still under 5%). That's a ~50–100 bp spread above T-bills — appropriate compensation for institutional credit risk rather than a yield-chase number.

## Cross-pool concentration: one product, two denominations

Maple presents syrupUSDC and syrupUSDT as a single Syrup credit line offered in two stable denominations — not two independent credit baskets. A Syrup loan is offered to one institutional borrower across the family rather than partitioned per pool, so the borrower set is **shared by design**. Choosing syrupUSDT vs syrupUSDC is a choice of denomination, not an independent credit pick.

That makes the right sizing unit the **family loan book**, not the per-pool number. Syrup runs a small borrower set (4 in syrupUSDT, 13 in syrupUSDC, mostly overlapping), so expect single-counterparty concentration above the ~10%-per-counterparty limit common in institutional credit frameworks. That's the structural product feature, not a temporary state — borrower turnover happens but the small-set + overlap pattern persists.

**Illustration (snapshot 2026-05-04, recomputed Loans-only basis; live numbers shift as the loan book turns over):**

| Family borrower | syrupUSDT | syrupUSDC | Combined | % of family loan book ($1.27B) |
|---|---|---|---|---|
| `0x8669f3...f1e9` (XRP + BTC) | $62.1M | $181.9M | $244.0M | 19.3% |
| `0x09b8...6B8a` (BTC) | — | $200M | $200M | 15.8% |
| `0xb62446...d505` (BTC) | $62.0M | $67.6M | $129.6M | 10.2% |

Top-3 family borrowers ~49% of the family loan book; single-largest ~19% — both above the 10%-per-counterparty institutional credit framework limit. The Liquidity layer (PYUSD/AMM custody) is also shared across the family — a Maple-firm-level custody event affects both pools.

**Sizing implication:** treat a combined syrupUSDC + syrupUSDT position as one Syrup-family allocation against one shared borrower set, and apply per-counterparty exposure limits at the family level rather than per-pool. Independent per-pool sizing systematically under-weights the real per-borrower concentration. Live family concentration: see the per-pool dashboards linked below for current borrower breakdown.

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
| Backing | 6.5 | Two-bucket: 87% Loans (BTC/XRP overcollateralized at 125–150%) + 10% Liquidity (pool-owned PYUSD/USDC-AMM/USDT-AMM). Per-pool concentration significantly higher than syrupUSDC (largest single loan ~41% of pool vs 16%). |
| Liquidity | 6.0 | $436M Ethereum pool. Smaller depth than syrupUSDC; expect higher aggregator slippage and longer queue cadence at institutional sizing. **Permissionless mint/redeem at the vault layer is the same as syrupUSDC** — no KYC gating. The smaller pool caps the score below syrupUSDC's 7.5 but the access pattern is still a meaningful advantage over KYC-gated peers. |
| Issuer | 5.5 | Same Maple Labs Cayman entity as syrupUSDC, same audit profile, ~3-year clean record across the Syrup product line. |
| **Overall** | **6.0** | Slightly worse than syrupUSDC's 6.75 — primarily due to higher per-pool concentration and shallower exit liquidity |

## Who it's for

Allocators who already hold or are sizing into syrupUSDC and want USDT-denominated exposure to the same Maple credit framework. Comfortable for retail and low-institutional positions willing to accept higher per-pool concentration than syrupUSDC. Not a yield-chase product — competing with USD-benchmark T-bills on yield while accepting credit + custody + governance risks.

## Who should avoid

- Anyone holding syrupUSDC and looking for a "diversification" sister product — the cross-pool borrower overlap means it concentrates rather than diversifies for the family's biggest borrowers
- Position sizes above the low-MM range without explicit queue tolerance — the smaller pool is queue-bound earlier than syrupUSDC at proportional sizes
- Anyone needing the largest single-borrower exposure to stay below 20% of pool — syrupUSDT's largest loan is 41% of pool

## What to watch

- **Per-pool concentration.** Largest single loan is 41% of pool. Watch the live dashboard for changes.
- **Cross-pool concentration if you also hold syrupUSDC.** Top-3 cross-pool borrowers carry ~48.8% of the family loan book; single-largest carries ~19.3%. Liquidity layer custody is also shared between pools. Compute combined per-borrower exposure rather than treating the pools as independent.
- **Pool Delegate roster changes.** Same Pool Delegate firm runs both pools but with different operational EOAs.

## Live dashboard

A live monitoring view is available at [todayindefi.github.io/backing-monitor/?asset=syrupusdt](https://todayindefi.github.io/backing-monitor/?asset=syrupusdt) — refreshed hourly from on-chain reads. Separate **Loan Book** and **Liquidity Layer** panels show third-party credit health vs pool-owned strategy custody, with the shared custody addresses surfaced. The Cross-Pool Family panel (also rendered on the syrupUSDC page) surfaces cross-pool concentration metrics live on a Loans-only basis. Sister page: [syrupUSDC dashboard](https://todayindefi.github.io/backing-monitor/?asset=syrupusdc).

## A note on Maple's history

Maple v1 (2021–2022) lent on an undercollateralized basis and lost LPs ~$50M+ during the 2022 credit cycle. The Syrup product line is Maple's structural response — overcollateralized loans on the third-party credit book, vetted Pool Delegates, active margin calls. Same legal entity (Maple Labs, Cayman Islands), same broader team. The v2 Syrup product has run cleanly for ~3 years through May 2026. This report treats it as background context rather than a leading risk factor. See [syrupUSDC retail report](/reports/syrupusdc/) for the same context (applies equally to both pools).

---

For institutional-grade risk analysis — Pool Delegate identities, contract addresses, custody EOA inventory, on-chain monitoring patterns — the [institutional version](/reports/syrupusdt-full/) is available.
