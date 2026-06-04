---
asset: "apyUSD"
slug: "apyusd"
aliases: ["apyUSD", "Apyx USD Yield"]
chains: ["eth", "base"]
category: "vault-share"
underlying_assets: ["apxUSD"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=apyusd"
trust_disclaimer: true
date: "2026-05-07"
last_verified: "2026-06-04"
featured: false
production: true
volatility_score: 7.0
structural_score: 5.7
redemption_score: 4.5
liquidity_score: 5.5
issuer_score: 5.5
underlying_score: 4.5
overall_score: 4.2
audited_reserves: true
---

# apyUSD — Retail Risk Report

**Moderate-elevated risk · 4.2/10**

apyUSD is the yield-bearing wrapper around [apxUSD](/reports/apxusd/) — deposit apxUSD, receive apyUSD shares, and the share value grows over time as Apyx's STRC-backed collateral pays dividends. Ongoing yield is **~13% APY** (within STRC's 11-15% indicated-rate range). Where apxUSD holders forgo yield in exchange for stablecoin functionality, apyUSD holders accept a **20-day cooldown** on the canonical exit path (or use a DEX two-hop for retail-scale exits in minutes).

| Yield | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ~13% APY ongoing | DEX two-hop (retail) or 20-day UnlockToken cooldown (institutional) | Minutes (sub-$1M via DEX) or 20+ days (canonical) | ~3 months | Ethereum, Base |

## Backing & solvency

apyUSD inherits everything that drives the [apxUSD reliability axis](/reports/apxusd/): mixed Cash + STRC family (brokerage-held STRC at Alpaca + new on-chain STRCx) + small SATA backing; a continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi); monthly Wolf & Company AICPA-standards examinations published at [`docs.apyx.fi`](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) (March 2026 full scope + April 2026 securities-only — cash dropped from April scope, may return in May report); STRC family as the largest single-issuer concentration without being the totality. Live reserves, collateralization, and reserves composition are on the [live dashboard](https://tidresearch.com/dashboards/?asset=apyusd).

The effective bottom-of-stack collateral is ~56% cash + ~42% STRC + ~2% SATA — meaningfully diversified versus a pure-STRC product like [sUSDat](/reports/susdat/) (which holds ~81% STRC directly). That diversification is reflected in the **Underlying axis at 4.5**, sitting above sUSDat's 4.0 but well below a pure-cash-equivalent wrapper. The 42% STRC slice remains the binding-risk weight on the editorial overall — single-issuer Strategy preferred dividend exposure with MSTR-cycle correlation.

**apyUSD-specific reliability concern:** the vault contract has had one observable implementation upgrade since launch (about a month after going live). Future upgrades have a 3-day visibility window for the guardian role to cancel, but the upgrade path itself is a live risk surface.

**Inherited issuer-push framing (new 2026-06-04).** apxUSD is issuer-push — Apyx mints apxUSD to itself and sells secondary-market for USDC, then routes proceeds through Kraken → bank → Alpaca → STRC purchases. apyUSD shares themselves are cleanly issued: a 2026-06-04 source review of the apyUSD vault implementation (Sourcify full match) confirmed there is NO privileged share-mint backdoor — share issuance follows the standard ERC-4626 deposit path with apxUSD transferred in before shares mint. But every apxUSD that a depositor brings to the vault inherits the apxUSD primary-issuance pattern, which is a different shape than user-pull stablecoins like USDC or DAI. See the [apxUSD retail report](/reports/apxusd/) "Backing & solvency" for the full pipeline.

## Exit liquidity

apyUSD has **two exit paths**, and which one binds depends on size:

**Retail-scale (sub-$1M): DEX two-hop, minutes to cash.**
1. Sell apyUSD → apxUSD on Curve (the main pool has depth typically in the low-to-mid tens of millions of dollars)
2. Sell apxUSD → USDC on the Curve apxUSD/USDC pool (also tens of millions of USDC depth)
3. Done

Trading on the apyUSD/apxUSD pool is sporadic (market-maker driven rather than continuous retail flow), so slippage at any given moment depends on the pool's balance state. Backup venues exist on PancakeSwap V3 (Ethereum + Base) and several smaller Uniswap V4 pools.

**Institutional-scale (above ~$1M): 20-day UnlockToken cooldown.**
1. Burn apyUSD → enter the UnlockToken cooldown vault
2. Wait 20 days
3. Receive apxUSD
4. Then exit apxUSD via the same paths as above

Effective time-to-cash for institutional sizing is **20 days minimum + apxUSD's own settlement window**. The cooldown was shortened from 30 → 20 days by the Apyx admin on 2026-04-15 (verified on-chain); it remains admin-mutable subject to a 72-hour visibility window, so any future change is observable about three days in advance. The UnlockToken queue has been small relative to total supply but isn't stress-tested at scale.

## Peg & yield dynamics

apyUSD doesn't have a $1 peg — it's a **NAV-accruing vault share**. The NAV is the apxUSD-per-share ratio, and it grows as Apyx's STRC backing pays dividends.

**Important: the headline NAV growth has a one-time component.** apyUSD's NAV jumped ~33% in week 1 (Feb 20-27, 2026) from a one-time launch-seed event — donation-pattern apxUSD inflows from a small set of addresses, likely Apyx pre-collecting STRC dividends or strategic seeding. Since week 2, NAV has grown smoothly at roughly **13% APY annualized** — within STRC's indicated-rate range and entirely consistent with the dividend pass-through mechanism.

**For new buyers entering today: you earn the ~13% ongoing rate going forward.** You do NOT capture the week-1 launch jump.

What could break the trajectory: anything that breaks STRC's dividend stream — a severe BTC drawdown that compresses MSTR equity, an MSTR convertible-debt event (STRC is junior), STRC's variable rate resetting much lower in stress.

## Audits, admin & team

Same answer as for apxUSD — same protocol, same audits, same admin:
- DFDV (Nasdaq-listed) backing + tier-1 investors (ParaFi, Pantera, etc.)
- Three audits (Quantstamp, Zellic, Certora w/ formal verification)
- 4-of-6 Safe admin + 72-hour timelock + distributed guardian role
- Apyx as legal entity appears separate from DFDV — standard offshore-RWA structure; the issuer named on the Wolf attestation is **Preference Foundation** (Director Carolyn Kelly signs).
- **Wolf & Company AICPA attestations now published monthly** (March + April 2026); **Alpaca** named as the brokerage. Wolf is mid-tier (not Big-4) and the April scope narrowed to securities only — see the [apxUSD retail report](/reports/apxusd/) "Backing & solvency" section for the full disclosure-stack write-up.
- No bug bounty.
- Cross-chain bridge (audited Chainlink CCIP, Ethereum ↔ Base) is governed by a smaller 3-of-6 multisig with no time-delay — weaker than token governance. Worth noting but not disqualifying for retail-scale exposure.

See the [apxUSD retail report](/reports/apxusd/) for the full team-trust write-up.

## Who it's for · Who should avoid

**For:** Retail or institutional users who want the dividend pass-through from Apyx's STRC backing AND are comfortable holding for ~20 days at the institutional scale. Retail-scale users can effectively use the DEX two-hop and exit in minutes, but the cooldown is the canonical path. Same risk appetite as apxUSD plus willingness to accept the vault-wrapper layer.

**Avoid if:**
- Sizing above what secondary DEX depth can absorb without invoking the cooldown. Above ~$1M, slippage on the two-hop route may force the 20-day cooldown path; build that into your exit plan.
- Treating this as a "stablecoin substitute" — apyUSD is a yield-bearing vault share, not a stablecoin.
- Uncomfortable with the launch-NAV-jump structure. Early holders captured a one-time ~33% NAV bump that new buyers do not. This is disclosed but is unusual relative to standard ERC-4626 launches.

## What to watch

- **Wolf May 2026 attestation — cash scope re-inclusion** (same as apxUSD; the April engagement narrowed to securities only)
- **STRC ex-dividend dates** (~mid-month) — NAV trajectory should be smooth; visible step-changes or pauses would be a yield-mechanic anomaly worth investigating
- **Curve apyUSD/apxUSD pool depth** (live on dashboard) — the dominant secondary exit. Depth shrinking or persistent imbalance would push more flow into the 20-day cooldown
- **MSTR / BTC drawdowns** — STRC dividends compress in stress
- **MAINTAINER USDC float vs Accountable CR.** Same flag as apxUSD — Apyx's operational multisig accumulates USDC pending sweep to Kraken (about $8M typical, oscillates with multi-week sweep cadence). Persistent climb above historical highs without a sweep would indicate off-chain pipeline stress; transient sub-100% CR readings are STRC mark-to-market noise, not a backing alarm.

## A note on the apxUSD companion

The [apxUSD retail report](/reports/apxusd/) covers the non-yield-bearing sibling. apxUSD has same-day exit at any size (Curve DEX or USDC settlement) but earns no yield. apyUSD has comparable retail-exit speed via the two-hop DEX route but adds the dividend pass-through; the cooldown becomes binding only at institutional sizing. The two products are structurally linked: apxUSD bears residual collateral risk; apyUSD captures the dividend stream. Holding both does not diversify, since both are claims against the same Apyx + STRC backing.

---

*This report describes Apyx as of mid-2026. Live values for NAV, supply, collateralization, secondary pool depths, and bridge conservation are on the [live dashboard](https://tidresearch.com/dashboards/?asset=apyusd). Some information (cash composition, redemption mechanics, on-chain wallet keys) remains issuer-attested only. Securities balances and brokerage are CPA-attested by Wolf & Company under AICPA standards (March + April 2026, April scope securities-only). The week-1 launch NAV trajectory was reconstructed from on-chain Transfer events. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
