---
asset: "USDat"
slug: "usdat"
aliases: ["USDat", "Saturn USDat"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "fiat-backed via tokenized T-bills"
assessment_type: "light"
audience: "retail"
companion_report: "susdat"
date: "2026-05-20"
last_verified: "2026-05-20"
featured: false
production: true
issuer: "Saturn Labs"
audited_reserves: true
market_cap_approx: 105000000
peg_mechanism_score: 6.5
backing_score: 7.0
underlying_score: 5.5
liquidity_score: 7.5
issuer_score: 4.5
overall_score: 5.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usdat"
---

# USDat — Retail Risk Report

**Moderate risk · 5.5/10**

| Backing | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ~99% $M (T-bills via M0) + ~1% USDC, 100% on-chain verifiable | 1:1 USDC redemption (onboarded only) or Curve USDAT/USDC (anyone) | Same-day for onboarded; minutes via Curve for retail | ~3 months | Ethereum |

## Summary

USDat is Saturn Labs' permissioned, non-yield stablecoin. Reserves are held directly in the USDat smart contract itself — roughly 99% as **$M** (M0's federated tokenized US Treasuries) plus a thin USDC float for the redemption gateway. Onboarded users mint and redeem 1:1 against either USDC or $M through Saturn's app; non-onboarded holders are restricted to secondary-market exit (primarily Curve USDAT/USDC, which clears several million dollars of daily volume).

The 5.5/10 score reflects the single strongest backing story in our coverage — **every dollar of USDat supply is matched by tokens you can verify with three on-chain calls, no oracle required** — paired with material drags: an **issuer-design choice to restrict the holder universe to onboarded users** (the permissioning constraint that limits general DeFi composability), a young protocol (~3 months mainnet), a Saturn-represented Fireblocks 2-of-3 MPC admin key with no on-chain timelock, and a roadmap that discloses a future rotation toward digital-credit (STRC) exposure that would change the risk profile if/when it happens.

## Backing & solvency

USDat's distinguishing claim — and verifiably so — is that **all capital sits directly in the USDat smart contract address**. There is no off-chain treasury, no custodian wallet, no separate reserve manager contract; just the token contract holding $M and USDC. The published claim ("all USDat capital is held directly in the USDat smart contract, verifiable onchain at any time") was verified true at $100M+ supply scale on 2026-05-20.

Reserve composition runs roughly **99% $M / 1% USDC**, with backing ratio sitting just above 100%. The live dashboard surfaces the current numbers (supply, $M held, USDC held, backing ratio, net buffer) updated hourly, along with copy-able `cast` commands a reader can run to independently reproduce the read.

The "two-layer wrapping" caveat: USDat is on-chain-verifiable down to $M, but $M itself is backed by US Treasury bills held by M0's federation of authorized minters. That second layer is not directly on-chain-verifiable; it depends on M0's protocol and minter posting. M0 is a reputable tokenized-RWA product, but the trust chain stops at $M, not at the T-bill itself.

Forward risk worth tracking: Saturn's documentation describes possible future allocations toward digital-credit exposure (most plausibly STRC, MicroStrategy/Strategy's variable-rate perpetual preferred — see the [sUSDat report](/reports/susdat/) for what that backing class looks like). As of report date, no such drift has appeared on-chain; the treasury holds only $M, USDC, and 1 wei of HEX dust. The live dashboard's drift-probe panel watches for any non-allowlist token appearing in the treasury — the day that flips, the backing-risk profile steps up materially.

## Exit liquidity

Two paths, very different audiences:

**For onboarded users:** mint and redeem 1:1 against USDC through Saturn's web app. This is the canonical strong exit — same-day, no slippage, no AMM tax. But it requires completing Saturn's KYC/onboarding, which makes USDat effectively an institutional/whitelisted instrument from the issuer side.

**For non-onboarded users:** secondary market only, dominated by the Curve USDAT/USDC pool. This pool carries the bulk of USDat's price-discovery and exit liquidity for non-onboarded holders, and runs healthy daily volume relative to TVL. **Observed depth is institutional-grade — a $500K exit through KyberSwap routing clears under 2 bps on Curve**; the live dashboard surfaces slippage tiers at $1K / $10K / $100K / $500K against the current pool state, and the peg band has stayed inside single-digit bps over the verification window.

What gets rated lower is the *addressable holder universe*, not the depth: USDat is unusable for most DeFi smart contracts (most can't hold it without being onboarded), which truncates the universe of secondary venues that can host it and concentrates meaningful DEX depth in one pool. That's an issuer-design constraint and is captured in the Issuer axis (4.5). The Liquidity axis (7.5) reflects what observed depth actually looks like once you're already in the addressable universe — strong by stablecoin-cohort standards, with a single-venue penalty applied.

## Peg & yield dynamics

**Peg.** USDat has held a tight band against USDC since launch. Brief launch-day prints outside that band were seed-pool noise, not stress. The live dashboard renders the current Curve-implied price + deviation from the dollar peg.

**Yield.** USDat is **non-yield-bearing by design.** The $M reserves accrue T-bill yield, but that yield is captured by Saturn's protocol revenue vault, not passed to USDat holders. Users seeking yield stake into [sUSDat](/reports/susdat/), Saturn's sibling vault that carries the STRC-dividend pass-through.

This makes USDat structurally analogous to USDC or USDT on the holder side — a stable unit of account, no yield, with the protocol monetizing the float. The trade-off is that USDat's float is institutional-permissioned rather than general-purpose.

## Audits, admin & team

**Audits:** three reports published — Three Sigma (Audit #1) and Certora (Audits #2 and #3). Certora is a top-tier formal-verification shop; two Certora reports plus one Three Sigma is a real audit package for a sub-one-year-old protocol. Individual finding severities are not surfaced in this review.

**Admin posture is the binding contract-side risk.** USDat is a TransparentUpgradeableProxy whose upgrade path routes through an OZ ProxyAdmin contract owned by an address that **Saturn represents as a Fireblocks 2-of-3 MPC wallet**. That address also holds the DEFAULT_ADMIN_ROLE on the USDat token contract directly. On-chain reads cannot distinguish an MPC wallet from a single-key EOA — the address shows the same shape either way (no contract code, low outbound transaction count). Taking Saturn's representation at face value, this materially upgrades the custody posture versus a raw single key — no individual signer device compromise can rewrite USDat token logic or pause the contract; a 2-of-3 quorum is required. But three caveats remain binding:

- All three MPC signers are internal to Saturn's custody process — not multi-party / multi-org. Different from a Safe with external co-signers.
- There is no on-chain timelock. Admin actions land immediately once the MPC quorum signs; users have no observation window before changes take effect.
- Fireblocks does not publish per-customer attestations we can independently verify. The representation is taken in good faith pending an independent infrastructure proof.

Same residual risk class as Apyx's admin posture. Saturn shares this admin address with sUSDat — see the [sibling report](/reports/susdat/) for the cross-asset implication: a single MPC quorum gates both assets simultaneously.

**Team and backers:** named team with prior experience at Artemis and M31 Capital. $800K raised January 2026 from YZi Labs and Sora Ventures. Named institutional depositors disclosed (Flowdesk, Galaxy — ~$10M aggregate). Operational partners include Galaxy, Securitize, and Clear Street.

## Who this is for

- **Onboarded institutional desks** wanting an on-chain T-bill-equivalent cryptodollar with direct 1:1 USDC redemption and verifiable backing — USDat does this well.
- **DeFi users who specifically want the cleanest on-chain backing claim available**, and who don't need general DeFi composability — USDat is usable as a passive holding via the Curve pool, but not as collateral in most lending markets (the permissioning blocks most smart-contract holders).

## Who this is NOT for

- Anyone needing general-purpose DeFi composability (lending collateral, LP-paired assets across many venues) — the permissioned holder universe is the wrong shape.
- Anyone who needs the strongest possible admin-key posture — Saturn-represented Fireblocks 2-of-3 MPC (signers internal to Saturn, no on-chain timelock, no Fireblocks-published verification) is the binding residual risk; better-administered stables exist.
- Yield-seekers — USDat is non-yield by design; [sUSDat](/reports/susdat/) is the yield-bearing sibling (with materially different risk profile).

## What to watch

- **Non-{$M, USDC} token in the treasury.** The disclosed-but-not-yet rotation toward STRC or other digital-credit exposure. The drift-probe panel on the live dashboard fires the moment any new token appears.
- **Backing ratio drift below 100%.** Currently sits at ~100.01% with a small positive buffer; sustained drift below 99.5% would be a tier-1 signal.
- **Admin MPC outbound activity.** The shared admin EOA has low historical activity; any new outbound transaction is signal worth investigating (could be routine role-grant, could be a Safe-migration prelude, could be unauthorized).
- **Implementation upgrade.** A change to the USDat or sUSDat implementation slot is tier-1 — both contracts have been stable for several weeks since the last upgrade.

## Live dashboard

Live backing composition, peg, slippage tiers, admin status, and drift-probe results: [tidresearch.com/dashboards/?asset=usdat](https://tidresearch.com/dashboards/?asset=usdat) — refreshed hourly.

## Sibling

- [sUSDat](/reports/susdat/) — Saturn's yield-bearing wrapper for USDat (~11% target APY via STRC-dividend pass-through, materially different risk profile)

## Corrections

This report is based on public Saturn documentation and on-chain reads only. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).
