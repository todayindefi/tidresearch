---
asset: "JAAA"
slug: "jaaa"
aliases: ["JAAA", "Janus Henderson Anemoy AAA CLO Fund", "JAAAon"]
chains: ["eth", "base", "arb", "avax", "bnb", "solana", "monad", "stellar"]
category: "vault-share"
assessment_type: "light"
audience: "retail"
date: "2026-06-30"
last_verified: "2026-06-30"
featured: false
production: false
issuer: "Anemoy (manager) / Janus Henderson (sub-advisor) / Centrifuge"
audited_reserves: true
market_cap_approx: 686000000
yield_bearing: true
underlying_assets: ["AAA-rated CLO tranches", "Janus Henderson AAA CLO strategy"]
volatility_score: 7.5
liquidity_score: 4.5
structural_score: 5.5
redemption_score: 5.5
issuer_score: 6.5
overall_score: 6.0
---

# JAAA (Janus Henderson Anemoy AAA CLO Fund) — Retail Risk Report

**Moderate risk · 6.0/10**

> **Frame check:** JAAA is a **vault share, not a stablecoin.** Its NAV grows with yield (≈$1.04 today, up from $1.00 at launch) — the right metric for stress is *discount-to-NAV*, not price vs $1.00. There is **no public secondary market**; this is a permissioned, redeem-at-NAV institutional fund token, not a freely tradable asset.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ≈3.4% APY (30d) | Primary redemption only | Daily at NAV, zero min, no fee | ≈14 months | Ethereum, Base, Arbitrum, Avalanche, BNB, Solana, Monad, Stellar |

## Summary

JAAA is the tokenized **Janus Henderson Anemoy AAA CLO Fund** — a native-onchain fixed-income fund holding a managed portfolio of **AAA-rated collateralized loan obligation (CLO) tranches**. It is run by the same team behind Janus Henderson's roughly $21B AAA CLO ETF (Janus Henderson is sub-advisor; **Anemoy** is the manager, via a BVI fund for **non-US professional investors**), and it is tokenized on **Centrifuge V3** using the ERC-7540 asynchronous-vault standard.

As of 2026-06-30: **about $686M AUM**, NAV ≈ **$1.04/token**, about 656M tokens, **32 holders**, ≈3.4% 30-day yield, **0.40% management fee** and no performance fee. NAV has held a tight **$1.01–$1.04** band since launch (≈14 months). The fund has attracted heavyweight institutional backing — a **$1B allocation from Grove/Sky**, a **$200M Ethena allocation on Solana** — and is now offered through **Kraken Custody** for institutions.

The 6.0/10 reflects high-quality institutional RWA credit — above tokenized private credit, below tokenized T-bills — capped by four structural realities: it is **structured credit, not Treasuries**; access is **permissioned** (no retail wallet can hold or redeem without KYC); there is **no secondary market** (exit is primary-redemption only); and the multichain footprint is abstracted **entirely over the Wormhole bridge**.

## What you actually earn

AAA-CLO yield, net of a 0.40% management fee, accruing into NAV (no rebasing). CLOs are **floating-rate** structured credit, so the headline rate moves with short-term base rates — recent 30-day yield is ≈3.4%. The AAA tranche sits at the top of the CLO capital stack and has a historically very strong default record, but it is *credit*, not cash: in a credit-spread stress event, CLO secondary markets can gap and NAV marks can move in ways a T-bill fund's would not.

This is the same underlying strategy as Janus Henderson's large AAA CLO ETF — the tokenized fund brings that exposure onchain rather than inventing a new strategy.

## How exit works

JAAA has **one realistic exit: primary redemption.** There is no DEX pool and no CEX listing — onchain trading volume is effectively **zero** because the token is permissioned (whitelisted wallets only) and NAV-accruing rather than traded.

**Primary redemption (whitelisted, non-US professional investors only):** submitted via the Centrifuge app — **daily, zero minimum, no redemption fee, settled at NAV.** As redeem-at-NAV mechanics go, this is strong: no cooldown queue, no exit penalty, no minimum block size disclosed. The binding constraint is **eligibility**, not mechanics — you must clear KYC as a non-US professional investor to hold or redeem at all.

**For everyone else:** there is no path. Unlike a tokenized RWA with a DEX fallback, JAAA has no public secondary venue, so a non-eligible wallet cannot acquire or exit the token. This removes the usual retail "trapped behind secondary-only exit" asymmetry — because retail simply isn't in the asset — but it also means holders are **fully dependent on the permissioning gatekeeper and KYC rails staying open.**

## What the contracts are doing

- **Standard:** Centrifuge V3, ERC-7540 asynchronous tokenized-vault standard; ERC-20 share token with onchain transfer permissioning (whitelist).
- **Token addresses:** `0x5a0f93d040de44e78f251b03c43be9cf317dcf64` (Ethereum, Base); `0x58f93d6b1ef2f44ec379cb975657c132cbed3b6b` (Avalanche, BNB); `0xad48f183e586e92a591a610397ebf534609df797` (Monad); `AAAJXeGjpKu7W3X4QTSU4pm1Wbj4G2LPcdg7A6xJLLyG` (Solana). Verify against the Centrifuge app before transacting.
- **Multichain:** abstracted **exclusively over Wormhole** — a single cross-chain messaging dependency spans all eight chains. Wormhole liveness/security is therefore a shared dependency, not a per-chain one.
- **NAV & operations are off-chain.** Daily NAV and subscription/redemption settlement run through off-chain fund administration. The onchain token is a **claim on the off-chain fund**, not self-custodied collateral. You are trusting Anemoy, Janus Henderson, the fund administrator, custodian, and the BVI legal wrapper.

## Audits & security

- **Centrifuge V3 contracts are immutable and audited**, with audit coverage including a Sherlock V3.1 contest. The protocol layer is materially more mature than a typical single-issuer RWA wrapper.
- **Residual surface is operational, not contract-level:** off-chain NAV computation, fund-admin/custody continuity, the permissioning gatekeeper, and the Wormhole bridge. These are the things to watch, not a reentrancy bug.
- **Holder concentration:** about 32 holders against $686M. Large-block redemption behavior under stress is unproven at this asset's scale.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 7.5 | Low-duration, floating-rate AAA CLO; NAV tightly banded $1.01–$1.04 across ≈14 months. Residual credit-spread / market-gap risk in a credit stress event keeps it below "very tight." |
| Liquidity | 4.5 | No secondary market (≈$0 volume) — daily primary NAV redemption is the only exit. No trapped-retail dynamic (retail isn't in the asset), but a single exit path plus ≈32-holder concentration caps the score. |
| Structural | 5.5 | ERC-7540 async, immutable audited Centrifuge V3 contracts on the plus side; offset by the 8-chain Wormhole cross-chain surface and off-chain NAV/admin dependency. |
| Redemption | 5.5 | Daily, zero-minimum, no-fee redemption **at NAV** is strong mechanics; gated to non-US professional / KYC-whitelisted investors, which is the binding constraint. |
| Issuer | 6.5 | Janus Henderson (global regulated manager, ≈$21B AAA CLO ETF) as sub-advisor + Anemoy (BVI) + Centrifuge; clean ≈14-month record; Kraken Custody; deep institutional adoption (Grove/Sky $1B, Ethena $200M). |
| **Overall** | **6.0** | High-quality institutional RWA credit — above tokenized private credit, below tokenized T-bills. Binding constraints: permissioned-only access, no secondary depth, structured-credit stress behavior, holder concentration, Wormhole dependency. |

## Who it's for

- **KYC'd non-US professional / institutional allocators** who want onchain, AAA-rated structured-credit yield from a brand-name asset manager, with daily NAV redemption and multichain settlement.
- Treasuries and protocols (the Grove/Sky and Ethena allocations are the template) sizing an institutional RWA credit sleeve where redeem-at-NAV and a regulated manager matter more than secondary tradability.

## Who should avoid

- **Anyone without non-US professional KYC eligibility.** You cannot hold or redeem JAAA — there is no permissionless secondary market to buy or exit through.
- **Anyone wanting a redeem-at-par stablecoin substitute.** This is a NAV-accruing credit fund, not a peg; read it as discount-to-NAV, not price vs $1.00.
- **Anyone wanting a fully trustless, onchain-collateralized instrument.** JAAA's backing, NAV, and operations are off-chain; the token is a claim on a TradFi CLO fund.

## What to watch

- **NAV trajectory and any discount-to-NAV at redemption** — the relevant stress metric for a vault share.
- **CLO credit-spread environment** — AAA tranches are resilient but not immune; widening spreads mark NAV down and can thin CLO secondary liquidity.
- **Holder concentration and large redemptions** — about 32 holders; watch for whether daily redemption holds up against a large-block exit.
- **Wormhole health** — the single cross-chain dependency across all eight deployments.
- **Permissioning / KYC continuity** — eligibility is the only gate to entry and exit; any change to the whitelist regime is material.

---

*This report is based on Janus Henderson / Anemoy / Centrifuge public documentation, RWA.xyz and CoinGecko data, and onchain reads through 2026-06-30. JAAA is a permissioned RWA fund — backing, NAV, fund administration, and custody are off-chain and depend on issuer disclosures that are not all independently verifiable onchain. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
