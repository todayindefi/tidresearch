---
asset: "sDOLA"
slug: "sdola"
aliases: ["sDOLA", "Staked DOLA", "Inverse sDOLA"]
chains: ["eth", "base", "arb", "optimism", "berachain"]
category: "vault-share"
underlying_assets: ["DOLA"]
assessment_type: "light"
audience: "retail"
date: "2026-07-01"
last_verified: "2026-07-01"
featured: false
issuer: "Inverse Finance DAO"
yield_bearing: true
volatility_score: 5.5
structural_score: 5.5
redemption_score: 5.0
underlying_score: 4.5
liquidity_score: 5.0
issuer_score: 5.0
overall_score: 4.5
---

# sDOLA — Retail Risk Report

**Moderate risk · 4.5/10**

> **The savings version of DOLA — and it can't be safer than DOLA.** sDOLA is a wrapper you get by staking DOLA. It quietly earns yield from Inverse's lending market and grows in value against DOLA over time — no lockup, unwrap whenever you like. The mechanics are clean. The catch is simple: sDOLA *is* DOLA underneath, so it carries all of DOLA's risks — the heavy Ethena/sUSDe backing and the old bad debt — plus a wrapper on top. One extra wrinkle showed up in March 2026, when attackers exploited sDOLA's rising exchange rate as a price feed in a *different* lending market (sDOLA itself worked correctly, but it's a reminder that its value is a moving number others rely on).

| What you hold | How you earn | Exit method | Lockup | Chains |
|---|---|---|---|---|
| An ERC-4626 vault share worth a growing amount of DOLA | sDOLA's DOLA value rises as lending revenue compounds in weekly | Unwrap to DOLA anytime, then sell DOLA on a DEX | None | Ethereum + Base / Arbitrum / Optimism / Berachain (rate synced by Chainlink CCIP) |

## Summary

sDOLA is the **yield-bearing version of [DOLA](/reports/dola/)**. You stake DOLA, receive sDOLA, and from then on each sDOLA is redeemable for a slowly-increasing amount of DOLA. The yield comes from **FiRM**, Inverse's fixed-rate lending market: borrowing revenue (collected through a DBR→DOLA auction) is streamed into the vault on a weekly cycle and compounds automatically. There's no lockup — you can unwrap back to DOLA at any time — and the exchange rate is kept in sync across chains (Base, Optimism, Arbitrum, Berachain) using Chainlink's CCIP bridge.

The APY floats: it has no floor or cap and rises and falls with how much borrowing demand FiRM sees. The yield is "organic" DeFi lending revenue, not Treasury-bill interest — which means no off-chain custody risk, but full dependence on Inverse's lending market staying healthy.

## The one thing to understand first

**sDOLA is only as safe as DOLA, and DOLA is a 4.5/10.** Everything in the [DOLA report](/reports/dola/) applies here at the underlying level: about half of DOLA's backing is Ethena's sUSDe, its deepest exit pool is also DOLA/sUSDe, and the protocol carries roughly $3.4M of legacy bad debt. sDOLA adds a wrapper and a bridge on top of that — it cannot be *safer* than the dollar it's built from. That's why its Underlying axis is scored at DOLA's overall (4.5).

## How exit works

Two legs:

1. **Unwrap sDOLA → DOLA.** Instant and atomic, no lockup. You always get back the current DOLA value of your shares.
2. **Then exit DOLA.** From there you're in DOLA's shoes — sell on a DEX, where the deepest pool (DOLA/sUSDe) overlaps with DOLA's main collateral. So the "real" exit still depends on DOLA's thin-ish liquidity.

If you hold sDOLA on Base, Optimism, Arbitrum, or Berachain rather than Ethereum, there's an extra dependency: the cross-chain versions rely on the **Chainlink CCIP bridge** to stay in sync. Convenient, but it's one more moving part than holding on mainnet.

## The March 2026 oracle episode (what it was, what it wasn't)

In March 2026, attackers ran a flash-loan "donation" trick against an **external** lending market on Curve's LlamaLend that used **sDOLA as collateral**. By briefly inflating sDOLA's redemption rate (from about 1.188 to about 1.358 DOLA per sDOLA), they distorted the price feed that particular market relied on and liquidated positions for around $240K.

Two things matter for a holder:
- **sDOLA's own contract behaved correctly.** Inverse's contracts weren't broken; the loss fell on borrowers in a third-party market that was configured with a manipulable price source. This was not a DOLA or sDOLA solvency event.
- **But it's a real, demonstrated surface.** sDOLA's whole design is a number (the exchange rate) that only goes up — and other protocols use that number as an oracle. When the sDOLA circulating outside a given market is thin, that number can be pushed around. If you use sDOLA as collateral elsewhere, check how that market prices it.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 5.5 | Tracks DOLA via a rising NAV; inherits DOLA's peg behavior, mild discount, and backing concentration. |
| Contract & Admin | 5.5 | Clean, well-documented ERC-4626 vault — but its rising exchange rate is a demonstrated oracle-manipulation surface for external markets, and cross-chain copies add a CCIP bridge dependency. |
| Redemption | 5.0 | Unwrap to DOLA is instant with no lockup; the real exit then depends on DOLA's thin liquidity. |
| Underlying | 4.5 | This is DOLA — sUSDe-heavy backing, legacy bad debt, small size. sDOLA can't be safer than its underlying. |
| Liquidity | 5.0 | Somewhat better than most niche wrappers, still thin; the DOLA-leg exit is correlated with sUSDe. |
| Issuer | 5.0 | Established, transparent Inverse DAO — but exploit-scarred and still servicing legacy bad debt. |
| **Overall** | **4.5** | A well-built, no-lockup DeFi savings wrapper with organic yield — but capped at the DOLA underlying, with an added (demonstrated) oracle-manipulation surface and a cross-chain bridge dependency. Reasonable for users who already accept DOLA's risks and want the savings rate; not a low-risk yield parking spot. |

## Who it's for

Users who already understand and accept [DOLA's](/reports/dola/) risks (especially the Ethena/sUSDe concentration) and want Inverse's organic lending yield with no lockup. Best held on Ethereum to avoid the extra bridge layer.

## Who should avoid

- Anyone who wouldn't hold DOLA — sDOLA is DOLA plus a wrapper, not a safer alternative.
- Anyone wanting a low-risk, T-bill-style yield dollar — this yield is DeFi lending revenue, variable and protocol-dependent.
- Anyone planning to use sDOLA as collateral without checking how the venue prices its exchange rate.

## What to watch

- **Everything on the [DOLA watch list](/reports/dola/)** — above all Ethena/sUSDe, since it drives the underlying.
- **FiRM borrowing demand.** The yield floats with it; a collapse in demand means a lower rate.
- **How third-party markets price sDOLA** if you post it as collateral (the March 2026 lesson).
- **Bridge/CCIP status** if you hold a non-Ethereum copy.

---

*This report is based on Inverse Finance's public documentation and transparency portal and public on-chain information, through 2026-07-01. sDOLA inherits DOLA's risks, which shift over time; figures here are point-in-time. Corrections or additional disclosures welcome at info@tidresearch.com.*
