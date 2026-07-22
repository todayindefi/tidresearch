---
asset: "USDai"
slug: "usdai"
aliases: ["USDai", "USD.AI", "USD AI", "Permian USDai"]
chains: ["arb"]
category: "stablecoin"
peg_mechanism: "fiat-backed via PYUSD on M0's PYUSDx rails"
assessment_type: "light"
audience: "retail"
companion_report: "susdai"
date: "2026-05-28"
last_verified: "2026-07-23"
featured: false
production: true
issuer: "Permian Labs"
audited_reserves: false
market_cap_approx: 155000000
peg_mechanism_score: 7.0
backing_score: 7.5
underlying_score: 7.5
liquidity_score: 4.5
issuer_score: 6.0
overall_score: 6.5
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=usdai"
---

# USDai — Retail Risk Report

**Moderate risk · 6.5/10**

USDai is the synthetic-dollar peg leg of the USD.AI protocol by Permian Labs, built on M0's PYUSDx stablecoin platform. Every USDai is backed 1-for-1 by **PYUSD** (PayPal's regulated, Paxos-issued, T-bill-backed stablecoin) held directly in the USDai contract on Arbitrum. The yield-bearing, credit-risk-bearing leg is **sUSDai** — covered separately. If you're here for the headline "≈7% yield on GPU loans," that's sUSDai's report, not this one. USDai itself carries no GPU-loan exposure.

## What makes it interesting

Most stablecoins ask you to trust a monthly attestation. USDai is **100% on-chain verifiable in two RPC reads**: the USDai contract literally holds 156.9M PYUSD against 154.8M USDai supply (≈101.4% coverage, re-verified July 2026). You don't need to wait for a quarterly report — you can refresh the live dashboard. That class of verifiability is rare in our coverage; the only peer is Saturn USDat. And the underlying PYUSD is itself regulated, NYDFS-supervised, and attested by Paxos.

USDai's supply has roughly halved since May (≈283M → ≈155M) as holders rotated into the staked sUSDai leg for yield; PYUSD coverage held above 100% throughout (re-verified on-chain at 101.4%, 156.9M PYUSD vs 154.8M supply), so this is a capital rotation, not a redemption-stress event.

## Why it's not higher

Three real constraints keep this from being a top-tier rating:

- **Thin secondary market.** USDai/USDC on Curve sits below about $2M against a ~$155M supply. There's no centralized-exchange listing. Direct 1-for-1 PYUSD redemption is available, but only to KYC'd authorized market makers and institutions from Q2 2026 onward — retail holders are routed through the thin secondary market by default.
- **Short track record.** Roughly ten months live, with a single security audit (Cantina/Spearbit, 0 critical, 0 high). No stress event has tested the operating model.
- **The reserve sits in an upgradeable contract.** Today's PYUSD coverage is genuinely on-chain at 101.4%, but the contract is governed by a 48-hour timelock and a 3-of-3 multisig. A malicious or buggy upgrade is visible on-chain for 48 hours before it can land — that gives holders a real exit window — but it's not the same as a non-upgradable, trustless reserve.

## How holders actually exit

Three paths, in practice:

1. **You're an onboarded MM / institutional depositor** — direct 1:1 PYUSD redemption at the contract. The cleanest exit.
2. **You're a retail holder** — your practical exit is the thin secondary market. In calm conditions arbitrageurs keep the price near peg (live around $1.0007). Under stress, the secondary depth is what carries you, and there isn't much of it.
3. **You stake into sUSDai instead** — different risk profile, different report.

The exit asymmetry between (1) and (2) is the single biggest retail-relevant risk on this asset.

## Governance — a relative strength

USDai is upgradeable, but well-governed for an asset of its age. Upgrades flow through an OpenZeppelin TimelockController with a **48-hour minimum delay**, controlled by a **3-of-3 Safe multisig** (three known signers). Operational permissions on the token sit with a sibling 3-of-3 multisig. No role revocations have happened since deployment. This is meaningfully stronger than single-key peers in the same age cohort.

## Who this is for

USDai is suitable as a transactional / transfer-rail dollar in the USD.AI ecosystem — moving in or out of sUSDai, paying flows on Arbitrum, or holding a PYUSD-backed position with on-chain reserve verifiability. It is **not** a substitute for USDC or USDT for size: secondary depth and the retail redemption gate make exit fragile above retail size.

## Live dashboard

Live PYUSD coverage, the on-chain proof-of-reserves panel (with the actual cast commands to reproduce the reads yourself), peg behavior, secondary-market depth, slippage tiers, and a live pending-upgrade watch on the 48-hour timelock are all on the embedded dashboard below.

---

*This report is built from publicly available documentation and on-chain reads only. We hold no privileged information about the issuer. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-23 — freshness re-verify: PYUSD coverage re-confirmed on-chain at 101.4% (156.9M PYUSD vs 154.8M supply); supply roughly halved since May as capital rotated into staked sUSDai; all scores unchanged. Initial production publish 2026-05-28.*
