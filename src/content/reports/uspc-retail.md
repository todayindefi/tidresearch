---
asset: "USPC"
slug: "uspc"
aliases: ["USPC", "USPC Vault", "iUSPC", "Institutional USPC", "Coinshift USPC"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["iUSPC", "BlackRock ICS USD MMF", "Fidelity ILF USD MMF", "Apollo ACRED"]
assessment_type: "light"
audience: "retail"
date: "2026-05-28"
last_verified: "2026-05-27"
featured: false
production: false
issuer: "Shift Capital Ltd (BVI) / Coinshift"
yield_bearing: true
volatility_score: 6.0
liquidity_score: 2.5
structural_score: 4.0
redemption_score: 3.0
underlying_score: 8.5
issuer_score: 5.0
overall_score: 4.0
market_cap_approx: 6770000
---

# USPC (Coinshift) — Retail Risk Report

**Moderate-to-elevated risk · 4.0/10**

> **Blue-chip collateral wrapped in a brand-new, ≈$6.8M, near-illiquid token behind an upgradeable single-key (36h-timelocked) proxy.** USPC's underlying funds are about as good as on-chain RWA gets — BlackRock and Fidelity AAA money-market funds plus Apollo's tokenized credit fund, managed by a FINMA-licensed Swiss manager and custodied by an FCA-regulated UK custodian. The risk is everything *around* the assets: a product less than four months old, a single ≈$580K Curve pool with no trading as the only retail exit, primary redemption that is institutional/KYC-gated with **US-person eligibility publicly undisclosed**, and both token contracts being upgradeable proxies whose admin keys resolve to one EOA behind a 36-hour timelock. Size any position to your on-chain exit, not to the backing quality.

| Yield (current) | Exit method | Primary redemption | Age | Chain |
|---|---|---|---|---|
| Accrues in the note (NAV-bearing) | Single Curve pool (frxUSD pair) | Institutional/KYC-gated; US-person status undisclosed | ≈4 months | Ethereum |

## Summary

USPC is Coinshift's new institutional-credit product (distinct from its csUSDL/csUSDC line). It tokenizes access to a discretionary portfolio of two AAA money-market funds (BlackRock ICS USD Liquidity, Fidelity ILF USD) plus Apollo's tokenized credit fund (ACRED), wrapped as a transferable BVI structured note ("iUSPC") and an ERC-4626 share ("USPC") that DeFi protocols can compose. It is live on Curve paired with Frax's frxUSD and on Spectra as a fixed-rate market maturing 02 Jul 2026.

The collateral quality and regulatory wrapper (FINMA manager, FCA custodian) are materially stronger than typical on-chain "synthetic dollars." The risk for an on-chain holder is everything *around* the assets: a ≈$6.8M product less than four months old, a single ≈$580K Curve pool with no trading as the only retail exit, primary redemption that is institutional/gated and 20%-quarterly-liquid, and both token contracts being upgradeable proxies whose admin keys ultimately resolve to one EOA behind a 36-hour timelock.

The 4.0/10 score is sized to the on-chain exit path, not to the backing quality. An eligible institution that can KYC and redeem at NAV through the primary path sees a fundamentally different risk profile than an on-chain holder relying on the secondary pool — for that institution, the 8.5/10 Underlying axis is the dominant one. This report is written for the latter.

**Frame check:** USPC is a vault share by category, but unlike most vault shares it wraps its underlying note **exactly 1:1** on-chain (`convertToAssets(1e6) = 1e6`) — yield is realized at the note layer / at redemption, not in the wrapper share price. So the wrapper price tracks $1, and a "depeg" is more accurately a secondary detachment in the thin Curve pool rather than NAV drift.

## What you actually earn

USPC tracks $1 at the wrapper layer; yield is realized in the underlying iUSPC note (the structured note layer) or at redemption. The portfolio earns a blended return from:

- **50% BlackRock ICS USD Liquidity** (AAA, daily-liquid government money-market fund)
- **30% Fidelity ILF USD** (AAA, daily-liquid government money-market fund)
- **20% Apollo ACRED** (tokenized private credit fund, quarterly liquidity)

So roughly 80% is in Tier-1 short-duration government MMFs and 20% is in private credit with longer settlement. The exact realized yield depends on the manager's allocation and on whether yield is distributed at the note level or simply accrued into the NAV — neither mechanic is documented in detail in public materials. Don't infer a specific APY from this report; check Coinshift's own product page for the current advertised rate.

## How exit works

Two paths, very different profiles:

**1. Primary redemption (institutional, KYC-gated):** Belongs to the **note layer** (Shift Capital BVI / Archax custody) and is gated. Eligibility, minimums, fees, and — critically — **US-person treatment are not publicly documented**. The 80% MMF sleeve supports daily liquidity at the underlying level; the 20% Apollo ACRED sleeve clears on a quarterly cadence, so a large redemption wave is throttled by that bucket. Eligible institutions can redeem at NAV; for everyone else this path is functionally unavailable.

**2. DEX secondary market (the only path for retail / non-KYC'd holders):** USPC trades in a single Curve `frxUSD/USPC` pool: ≈345K frxUSD + ≈234K USPC, total liquidity ≈**$580K**, imbalanced toward frxUSD, and **$0 24h volume**. There is no CEX listing and no second DEX pool. Aggregate secondary depth is roughly the size of a small retail position — not the size of a meaningful institutional one. USPC's secondary print is currently around $0.994, slightly below $1 in the imbalanced pool.

A separate Spectra `sw-USPC` ERC-4626 wrapper holds ≈$2.2M and provides a fixed-rate PT/YT market maturing 02 Jul 2026, but that wraps spot USPC — it is not additional exit liquidity, and PT/YT mechanics differ from holding spot.

**Effective exit for size:** gated primary redemption. **Effective exit for retail (especially US-person retail):** the single $580K Curve pool, which means a six-figure exit moves the price hard and a seven-figure exit is not realistically possible without a queue.

**Counterparty pairing:** secondary liquidity is denominated in **frxUSD**, not USDC — USPC's on-chain "peg" inherits a slice of frxUSD's own peg/issuer risk.

## What the contracts are doing

- **USPC wrapper (the composable ERC-4626 token):** `0xbF4e3fbE8B60062A00C7a6B1D97d0d49c2971A19` — UUPS upgradeable proxy. Token name `"USPC Vault"`, symbol `USPC`, 6 decimals. `asset()` returns iUSPC.
- **iUSPC note (the asset USPC wraps):** `0xdc807c3a618B6B1248481783def7ED76700B9eC6` — upgradeable proxy. This is the on-chain representation of the BVI structured note.
- **Admin (both tokens):** DEFAULT_ADMIN_ROLE + MINTER_ROLE held by a **TimelockController** at `0x6cf256f6649999f4be43a462e4094b008ff9657f` with `getMinDelay() = 129,600 seconds (36 hours)`.
- **Timelock control:** PROPOSER + EXECUTOR + CANCELLER are all held by **one EOA** `0xc48f9af1ef7b14380073d00ac9af02cbb9d1ac50` (no code — single key, not a Safe multisig). Public execution is not open. There is no on-chain evidence either way of an MPC or policy layer behind that EOA.
- **Pause:** PAUSER_ROLE is held **directly by the same EOA**, un-timelocked — meaning the contract can be paused instantly, with no 36h warning.
- **Admin migration:** the deployer EOA self-granted all roles at deploy, then renounced — admin now routes through the timelock as described.

The thing to internalize: **the smart contract doesn't hold the money-market funds.** Those are off-chain instruments held by Archax for Shift Capital BVI. On-chain you hold a 1:1 claim on a note. Solvency rests on the manager + custodian + the underlying funds, none of which publish on-chain proof-of-reserves for USPC.

## Audits & security

- **No public audit of USPC or iUSPC contracts** has been located. No published reserve attestation specific to USPC.
- The off-chain stack (FINMA-regulated manager, FCA-regulated custodian, BlackRock + Fidelity AAA money-market funds, Apollo ACRED) carries its own regulatory and audit posture independent of the smart contracts — but that posture protects the **fund layer**, not the on-chain wrapper layer.
- **Contract layer is effectively un-audited from a public-disclosure standpoint.** That is a meaningful gap for a contract that is upgradeable.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 6.0 | Wrapper tracks $1 by construction (1:1 to note); NAV dominated by AAA MMF. Detachment risk lives in the thin secondary pool (≈$0.994 print today). |
| Liquidity | 2.5 | Single ≈$580K Curve pool, $0 24h volume, imbalanced; no CEX, no second DEX. Effective exit for any meaningful size is gated primary redemption. Worst axis. |
| Structural | 4.0 | Both tokens upgradeable proxies. Admin routes through a real 36h timelock — better than raw single-key peers — but timelock control is one EOA (not a Safe), and PAUSER is direct/un-timelocked. Multi-layer wrapping (note → ERC-4626 → Spectra) adds surface. |
| Redemption | 3.0 | Institutional/KYC-gated primary; **US-person treatment undisclosed**; 80% daily / 20% quarterly backing liquidity. Retail effectively secondary-only → exit-path asymmetry under stress. |
| Underlying | 8.5 | **Strongest axis.** BlackRock ICS + Fidelity ILF (AAA daily-liquid MMF) at 80% of the portfolio, Apollo ACRED at 20%. FINMA-licensed manager, FCA-regulated custodian. Capped below 9 by the 20% private-credit sleeve and the one-layer indirection (you hold a claim on a note, not the funds directly). |
| Issuer | 5.0 | Regulated entity stack (Shift Capital BVI / AM Switzerland FINMA / Archax FCA) and a blue-chip underlying — strong frame. Tempered by ~$6.8M scale, <4-month history, undisclosed US-person treatment, KYC gating without published eligibility, no public audit or POR attestation, and no MPC/policy layer disclosed for the controlling EOA. |
| **Overall** | **4.0** | Moderate-to-elevated. Backing quality is genuinely strong; the on-chain risks (exit, wrapper control, audit absence) are what set the score. Size to the secondary pool, not to the backing. |

## Who it's for

- **Eligible institutional / KYC'd non-US holders** comfortable with regulated RWA exposure who want tokenized exposure to AAA MMFs plus a private-credit kicker, and who can access primary redemption at NAV. For this cohort the binding-risk axis is Underlying (8.5), not Liquidity (2.5) — a very different read.
- DeFi users who specifically want a small-sleeve, NAV-tracking position with blue-chip underlying funds and are comfortable with single-pool secondary exit and an upgradeable wrapper.

## Who should avoid

- **Retail / US-person users looking for a redeem-at-par stablecoin substitute.** Primary redemption eligibility is undisclosed for US persons; exit is effectively the single $580K Curve pool. The §II.4 exit-asymmetry that has produced -5% to -15% detachments on other tokenized RWAs has not yet materialized for USPC, but the setup is in place and the product has no stress-event history (deployed ≈2026-02-03).
- **Anyone leveraging on a venue using a market-priced oracle.** A secondary-market detachment in the thin Curve pool would trigger liquidations even if the underlying NAV is unimpaired. NAV-priced oracle is the only defensible configuration.
- **Anyone who needs a fully on-chain trustless instrument.** USPC has substantial off-chain dependencies (Shift Capital BVI, AM Switzerland AG, Archax, BlackRock and Fidelity MMFs, Apollo ACRED, no on-chain POR).
- **Anyone sizing the position to the backing quality rather than the exit path.** Backing is 8.5/10 quality; the realizable position cap for a retail on-chain holder is the secondary pool depth.

## What to watch

- **Secondary depth.** A second DEX pool or a non-zero 24h volume on the existing Curve pool would materially improve the Liquidity axis. Watch the `frxUSD/USPC` pool at `0x96bca2cea58a8e08e7da5c9d68b8acbb28419d1d`.
- **Audit publication.** Either a contract audit (for USPC + iUSPC) or a reserve attestation (POR for the iUSPC note) would close a meaningful disclosure gap.
- **US-person redemption-eligibility disclosure.** If Coinshift / Shift Capital publish clear US-person treatment for primary redemption, the Redemption axis re-rates upward materially for that cohort.
- **Admin-layer change.** A migration from the single-key timelock proposer/executor to a multisig (or a disclosed MPC layer behind the EOA) would lift Structural materially.
- **Supply growth.** Crossing into low-tens-of-millions with secondary depth scaling proportionally would be a different conversation than today's ~$6.8M and $0 volume.

## A note on the underlying

The "looks safe, isn't necessarily retail-suitable" trap is the whole point of this report. The fund layer (BlackRock ICS + Fidelity ILF + Apollo ACRED, FINMA manager, FCA custodian) is genuinely strong. The on-chain wrapper around that fund layer is a brand-new, small, single-pool-exit token controlled by an upgradeable contract with a single-key (timelocked) admin. Those are two different products with two different risk profiles; USPC the token gives you 1:1 economic claim on the first but exposes you to the second.

---

*This report is based on Coinshift / Shift Capital public materials and on-chain reads through 2026-05-27. Several material disclosures (US-person redemption eligibility, fees, contract audit, reserve attestation specific to USPC) are not publicly available and would need to be obtained directly from Coinshift. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
