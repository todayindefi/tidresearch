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
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=apyusd"
trust_disclaimer: true
date: "2026-05-07"
last_verified: "2026-05-11"
featured: false
production: true
volatility_score: 7.0
structural_score: 5.5
redemption_score: 4.5
liquidity_score: 5.5
issuer_score: 6.0
overall_score: 4.5
---

# apyUSD — Retail Risk Report

**Moderate-elevated risk · 4.5/10**

apyUSD is the yield-bearing wrapper around [apxUSD](/reports/apxusd/) — deposit apxUSD, receive apyUSD shares, and the share value grows over time as Apyx's STRC-backed collateral pays dividends. Ongoing yield is **~13% APY** (within STRC's 11-15% indicated-rate range). Where apxUSD holders forgo yield in exchange for stablecoin functionality, apyUSD holders accept a **30-day cooldown** on the canonical exit path (or use a DEX two-hop for retail-scale exits in minutes).

| Yield | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ~13% APY ongoing | DEX two-hop (retail) or 30-day UnlockToken cooldown (institutional) | Minutes (sub-$1M via DEX) or 30+ days (canonical) | ~3 months | Ethereum, Base |

## Backing & solvency

apyUSD inherits everything that drives the [apxUSD reliability axis](/reports/apxusd/): mixed Cash + STRC + small SATA backing, off-chain RWA custody at an unnamed broker, a real third-party TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi) (cryptographic attestation, not a PCAOB-firm audit), and STRC as the largest single-issuer concentration without being the totality. Live reserves, collateralization, and reserves composition are on the [live dashboard](https://todayindefi.github.io/backing-monitor/?asset=apyusd).

**apyUSD-specific reliability concern:** the vault contract has had one observable implementation upgrade since launch (about a month after going live). Future upgrades have a 3-day visibility window for the guardian role to cancel, but the upgrade path itself is a live risk surface.

## Exit liquidity

apyUSD has **two exit paths**, and which one binds depends on size:

**Retail-scale (sub-$1M): DEX two-hop, minutes to cash.**
1. Sell apyUSD → apxUSD on Curve (the main pool has depth typically in the low-to-mid tens of millions of dollars)
2. Sell apxUSD → USDC on the Curve apxUSD/USDC pool (also tens of millions of USDC depth)
3. Done

Trading on the apyUSD/apxUSD pool is sporadic (market-maker driven rather than continuous retail flow), so slippage at any given moment depends on the pool's balance state. Backup venues exist on PancakeSwap V3 (Ethereum + Base) and several smaller Uniswap V4 pools.

**Institutional-scale (above ~$1M): 30-day UnlockToken cooldown.**
1. Burn apyUSD → enter the UnlockToken cooldown vault
2. Wait 30 days (per contract source; Apyx docs cite 20 days — the code is authoritative)
3. Receive apxUSD
4. Then exit apxUSD via the same paths as above

Effective time-to-cash for institutional sizing is **30 days minimum + apxUSD's own settlement window**. The UnlockToken queue has been small relative to total supply but isn't stress-tested at scale.

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
- Apyx as legal entity appears separate from DFDV — standard offshore-RWA structure
- Custodian unnamed, no PCAOB-firm audit yet, no bug bounty
- Cross-chain bridge (audited Chainlink CCIP, Ethereum ↔ Base) is governed by a smaller 3-of-6 multisig with no time-delay — weaker than token governance. Worth noting but not disqualifying for retail-scale exposure.

See the [apxUSD retail report](/reports/apxusd/) for the full team-trust write-up.

## Who it's for · Who should avoid

**For:** Retail or institutional users who want the dividend pass-through from Apyx's STRC backing AND are comfortable holding for ~30 days at the institutional scale. Retail-scale users can effectively use the DEX two-hop and exit in minutes, but the cooldown is the canonical path. Same risk appetite as apxUSD plus willingness to accept the vault-wrapper layer.

**Avoid if:**
- Sizing above what secondary DEX depth can absorb without invoking the cooldown. Above ~$1M, slippage on the two-hop route may force the 30-day cooldown path; build that into your exit plan.
- Treating this as a "stablecoin substitute" — apyUSD is a yield-bearing vault share, not a stablecoin.
- Uncomfortable with the launch-NAV-jump structure. Early holders captured a one-time ~33% NAV bump that new buyers do not. This is disclosed but is unusual relative to standard ERC-4626 launches.

## What to watch

- **First PCAOB-firm attestation** (still missing, same as apxUSD)
- **STRC ex-dividend dates** (~mid-month) — NAV trajectory should be smooth; visible step-changes or pauses would be a yield-mechanic anomaly worth investigating
- **Curve apyUSD/apxUSD pool depth** (live on dashboard) — the dominant secondary exit. Depth shrinking or persistent imbalance would push more flow into the 30-day cooldown
- **MSTR / BTC drawdowns** — STRC dividends compress in stress

## A note on the apxUSD companion

The [apxUSD retail report](/reports/apxusd/) covers the non-yield-bearing sibling. apxUSD has same-day exit at any size (Curve DEX or USDC settlement) but earns no yield. apyUSD has comparable retail-exit speed via the two-hop DEX route but adds the dividend pass-through; the cooldown becomes binding only at institutional sizing. The two products are structurally linked: apxUSD bears residual collateral risk; apyUSD captures the dividend stream. Holding both does not diversify, since both are claims against the same Apyx + STRC backing.

---

*This report describes Apyx as of mid-2026. Live values for NAV, supply, collateralization, secondary pool depths, and bridge conservation are on the [live dashboard](https://todayindefi.github.io/backing-monitor/?asset=apyusd). Some information depends on issuer disclosures (custody arrangements, attestations, redemption mechanics) that are not yet independently verified. The week-1 launch NAV trajectory was reconstructed from on-chain Transfer events. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
