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
last_verified: "2026-06-30"
featured: false
production: true
volatility_score: 6.5
structural_score: 5.0
redemption_score: 3.5
liquidity_score: 3.5
issuer_score: 5.0
underlying_score: 3.0
overall_score: 3.0
audited_reserves: true
---

# apyUSD — Retail Risk Report

**Significant risk · 3.0/10**

apyUSD is the yield-bearing wrapper around [apxUSD](/reports/apxusd/) — deposit apxUSD, receive apyUSD shares, and the share value grows over time as Apyx's STRC-backed collateral pays dividends. Ongoing yield is **≈13% APY** (within STRC's 11-15% indicated-rate range). Where apxUSD holders forgo yield in exchange for stablecoin functionality, apyUSD holders accept an exit window — a **3-to-20-day unlock with a declining fee** — in exchange for the dividend pass-through (or use a DEX two-hop for retail-scale exits in minutes).

**The vault's own mechanics are fine — but the asset underneath it broke peg in June 2026.** apxUSD is currently below par collateralization, and apyUSD trades at a meaningful discount to its NAV. That reshapes the exit and backing picture below; live values are on the [dashboard](https://tidresearch.com/dashboards/?asset=apyusd).

> **Update (2026-06-29/30) — Overall 3.4 → 3.0 (a wrapper-can't-score-above-what-it-wraps fix), Underlying 3.6 → 3.0; sub-axes held.** Two upstream moves, both now reflected. **(1) The asset apyUSD wraps got worse.** apxUSD was cut to Overall 3.0 (collateral ratio down to ~84%, apxUSD ~$0.82 / ≈−18% — see the [apxUSD report](/reports/apxusd/)); the terminal asset behind apyUSD's unlock window is now **~84%-collateralized, not ~95%**. Because apyUSD wraps apxUSD and *adds* risk (the 3-to-20-day unlock + exit asymmetry), it must score **at or below apxUSD** — holding 3.4 while apxUSD fell to 3.0 had inverted that, so apyUSD's Overall is corrected to **3.0**. **(2) STRC gained a discretionary soft floor (06-29 8-K).** Strategy's "Digital Credit Capital Framework" converts STRC's par defense from a reflexive sub-$95 dividend ratchet into a discretionary soft floor (a $1.0B STRC-priority buyback + a near-doubled $2.55B reserve) — a bid *under* STRC, not a peg. For apyUSD's inherited backing this **stabilizes the trajectory at the root** but does not restore par or restock Apyx's reserve. The validated June post-mortem design (zero Morpho liquidations, the one-way yield ratchet held, the redemption-rate oracle insulated looped users) is what holds apyUSD *at* apxUSD's level rather than below it — the added vault risk and the demonstrated vault resilience roughly cancel. Path back up: STRC re-rating on the soft-floor bid + apxUSD collateral ≥100% sustained.

| Yield | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ≈13% APY ongoing | DEX two-hop (retail) or 3-to-20-day unlock window (institutional) | Minutes (sub-$1M via DEX) or 3–20 days (canonical) | ≈3 months | Ethereum, Base |

## The June 2026 depeg (inherited)

apyUSD's NAV is mechanically sound — it accrues normally and the vault is 100% collateralized *by construction*, because it's denominated in apxUSD. The problem is what apxUSD is worth. In June 2026 the underlying apxUSD **broke peg**: Strategy's STRC preferred de-anchored below par on a mostly-STRC reserve, a redemption wave hit, and apxUSD's issuer-attested collateral ratio fell **below 100%** — into the mid-90s% in the first week, then deepening to **~84%** through late June (apxUSD ~$0.82 / ≈−18%; see the [apxUSD report](/reports/apxusd/)).

For an apyUSD holder that means both exit routes now end in a discounted or below-par asset:
- The **canonical** route (unlock window → receive apxUSD → exit apxUSD) delivers an apxUSD that is currently *below par* at the end of the wait — and exposes you to several more days of STRC/collateral drift before you even receive it.
- The **secondary** route (sell apyUSD on a DEX) realizes apyUSD's discount to NAV immediately — apyUSD has traded at a **meaningful discount (mid-single-digit to ≈−9% range)** during the event.

Treat the specific discount as a **moving event, not a fixed number** — check the [live dashboard](https://tidresearch.com/dashboards/?asset=apyusd) for the current value. This is the asymmetric-exit risk this report always flagged, now active.

## Backing & solvency

apyUSD inherits everything that drives the [apxUSD reliability picture](/reports/apxusd/): a continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi); monthly Wolf & Company AICPA-standards examinations published at [`docs.apyx.fi`](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) (March 2026 full scope + April 2026 securities-only — cash dropped from April scope, may return in May report); and STRC family as the largest single-issuer concentration. Live reserves and collateralization are on the [dashboard](https://tidresearch.com/dashboards/?asset=apyusd).

**The inherited backing got worse on inspection (June 2026).** Apyx's post-mortem corrected the reserve composition: its public dashboard had been folding **Protocol Owned Liquidity (POL)** and a **net-zero Inventory line** (minted-but-unsold apxUSD — an asset offset by a burnable liability, not real backing) into "Cash." Net of that Inventory, the reserve is roughly **three-quarters STRC family (≈74%)** — *more* concentrated than the ≈66% gross figure suggested — plus ≈13% cash and ≈13% reflexive POL (capped at 15% of reserves, deployed against Apyx's own assets, so lower-quality than cash). Combined with the deepened depeg (apxUSD's attested collateral ratio down to ~84%), that drops apxUSD's Backing axis to **2.0** and its Overall to **3.0**, and apyUSD's **Underlying axis to 3.0** (it tracks apxUSD's overall score, since the vault is a near pass-through onto apxUSD). Strategy's 06-29 soft floor steadies the STRC mark beneath all of this but does not restock Apyx's reserve. See the [apxUSD retail report](/reports/apxusd/) "Backing & solvency" for the full reserve breakdown.

**apyUSD-specific reliability concern:** the vault contract has had one observable implementation upgrade since launch (about a month after going live). Future upgrades have a 3-day visibility window for the guardian role to cancel, but the upgrade path itself is a live risk surface.

**Share issuance is clean.** A source review of the apyUSD vault implementation (Sourcify full match) confirmed there is **no privileged share-mint backdoor** — share issuance follows the standard ERC-4626 deposit path with apxUSD transferred in before shares mint. The inherited backing risk comes from the apxUSD that depositors bring in, not from the vault wrapper itself.

## Exit liquidity

apyUSD has **two exit paths**, and which one binds depends on size:

**Retail-scale (sub-$1M): DEX two-hop, minutes to cash.**
1. Sell apyUSD → apxUSD on Curve (the main pool has depth typically in the low-to-mid tens of millions of dollars)
2. Sell apxUSD → USDC on the Curve apxUSD/USDC pool
3. Done — but note both legs currently price the apxUSD discount in, so the cash you receive reflects the below-par apxUSD value, not NAV.

Trading on the apyUSD/apxUSD pool is sporadic (market-maker driven rather than continuous retail flow), so slippage at any given moment depends on the pool's balance state, and Apyx pulls its own depth off-hours by design. Backup venues exist on PancakeSwap V3 (Ethereum + Base) and several smaller Uniswap V4 pools.

**Canonical (UnlockToken): a 3-to-20-day window with a declining fee.**
1. Burn apyUSD → enter the UnlockToken window
2. Wait — exit faster by paying more: the redemption fee **declines linearly from ≈3.5% (early, ≈3 days) to ≈0.1% (full ≈20 days)**. It is *not* a flat 20-day cooldown.
3. Receive apxUSD
4. Then exit apxUSD via the same paths as above

This window is both an **exit cost** and the protocol's **anti-bank-run feature** — Apyx's June post-mortem credits it with preventing a run during the depeg by disincentivizing the simultaneous exits that would have forced more STRC selling. The max window was shortened from 30 → 20 days by the Apyx admin on 2026-04-15 (verified on-chain); it remains admin-mutable subject to a 72-hour visibility window. For institutional sizing the window is binding, and it now also exposes the holder to days of further collateral drift before the (below-par) terminal asset is received — which is why the **Liquidity and Redemption axes both sit at 3.5**.

Because the canonical path terminates in apxUSD, apyUSD inherits the underlying's redemption model: Apyx's June-15 "Apyx 2.0" announcement to move apxUSD mint/redeem to a single **Redemption Value** floor (via an approved-counterparty RFQ), closing the prior first-mover "free put option," would improve the *terminal* apxUSD you receive — but it is blog-only as of this revision (not yet in docs or on-chain) and it does **not** change apyUSD's own 3-to-20-day unlock window or any of its scores. See the [apxUSD retail report](/reports/apxusd/) for the full Apyx 2.0 detail.

## Peg & yield dynamics

apyUSD doesn't have a $1 peg — it's a **NAV-accruing vault share**. The NAV is the apxUSD-per-share ratio, and it grows as Apyx's STRC backing pays dividends. The catch in June 2026 is that NAV is denominated in apxUSD, and apxUSD itself is below par — so a healthy-looking NAV sits on top of an impaired underlying.

**Important: the headline NAV growth has a one-time component.** apyUSD's NAV jumped ≈33% in week 1 (Feb 20-27, 2026) from a one-time launch-seed event — donation-pattern apxUSD inflows from a small set of addresses, likely Apyx pre-collecting STRC dividends or strategic seeding. Since week 2, NAV has grown smoothly at roughly **13% APY annualized** — within STRC's indicated-rate range and consistent with the dividend pass-through mechanism.

**For new buyers entering today: you earn the ≈13% ongoing rate going forward.** You do NOT capture the week-1 launch jump. And at the current collateral ratio, that ≈13% does not compensate for the realized backing and exit risk underneath it.

What could break the trajectory further: anything that breaks STRC's dividend stream — a severe BTC drawdown that compresses MSTR equity, an MSTR convertible-debt event (STRC is junior), or STRC's variable rate resetting much lower in stress.

## Audits, admin & team

Same protocol, same audits, same admin as apxUSD — and the same two-sided June post-mortem:
- DFDV (Nasdaq-listed) backing + tier-1 investors (ParaFi, Pantera, etc.)
- Three audits (Quantstamp, Zellic, Certora w/ formal verification)
- 4-of-6 Safe admin + 72-hour timelock + distributed guardian role
- Apyx as legal entity appears separate from DFDV — standard offshore-RWA structure; issuer named on the Wolf attestation is **Preference Foundation** (Director Carolyn Kelly signs).
- **Wolf & Company AICPA attestations published monthly** (March + April 2026); **Alpaca** named as the brokerage. Wolf is mid-tier (not Big-4) and the April scope narrowed to securities only.
- **What the depeg validated for apyUSD specifically:** the apyUSD/apxUSD Morpho lending market took **zero liquidations** (its oracle keys off the redemption rate, not spot price), the one-way yield ratchet held, and no Morpho market booked bad debt — demonstrated vault-level resilience that is why the overall score lands at 3.0 (at apxUSD's level), not below it, despite the inherited backing markdown. (Separately, some *other* Morpho markets ran a stale self-managed oracle that lagged as apxUSD left $1 — migrating to Chainlink.)
- **What it exposed:** the issuer's manual off-chain plumbing was too slow to defend the peg, secondary depth is discretionarily pulled off-hours, and comms lagged — the **Issuer axis steps down to 5.0** (matching apxUSD; same Apyx).
- No bug bounty.
- Cross-chain bridge (audited Chainlink CCIP, Ethereum ↔ Base) is governed by a smaller 3-of-6 multisig with no time-delay — weaker than token governance.

See the [apxUSD retail report](/reports/apxusd/) for the full team-trust and reserve write-up.

## Who it's for · Who should avoid

**For:** Users who want the dividend pass-through from Apyx's STRC backing, understand that the underlying apxUSD has **already broken peg**, and are comfortable holding a yield-bearing share whose value tracks a currently-below-par asset. Same risk appetite as apxUSD plus the vault-wrapper and unlock-window layers.

**Avoid if:**
- Treating this as a "stablecoin substitute" — apyUSD is a yield-bearing vault share, not a stablecoin, and it currently trades at a discount to NAV.
- Sizing above what secondary DEX depth can absorb without invoking the unlock window. Above ≈$1M, slippage on the two-hop route may force the 3-to-20-day window — and the terminal apxUSD is below par.
- Uncomfortable with the launch-NAV-jump structure. Early holders captured a one-time ≈33% NAV bump that new buyers do not.

## What to watch

- **apxUSD collateral ratio back to ≥100%, sustained.** apyUSD's recovery tracks apxUSD's — a sustained return to par on the attested feed is the key signal (live on dashboard).
- **apyUSD discount to NAV** (live on dashboard) — narrowing = healing; widening = renewed stress.
- **STRC price + the soft-floor bid** — the dividend stream and apxUSD backing both recover if STRC re-rates up, now via Strategy's discretionary buyback/reserve soft floor (06-29 framework) rather than the old forced sub-$95 dividend hike.
- **Wolf May 2026 attestation — cash scope re-inclusion** (same as apxUSD; the April engagement narrowed to securities only).
- **MSTR / BTC drawdowns** — STRC dividends compress in stress.

## A note on the apxUSD companion

The [apxUSD retail report](/reports/apxusd/) covers the non-yield-bearing sibling, which broke peg in June 2026 and is the asset apyUSD wraps. apxUSD has faster exit at any size (Curve DEX or USDC settlement) but earns no yield; apyUSD adds the dividend pass-through and the 3-to-20-day unlock window. The two products are claims against the same Apyx + STRC backing — holding both does not diversify.

## Revision history

- **2026-06-29 — inversion fix + STRC soft-floor reframe:** overall 3.4 → 3.0, underlying 3.6 → 3.0 (sub-axes held). apxUSD's 06-25 cut to Overall 3.0 (collateral ratio ~84%) meant apyUSD — which wraps apxUSD and adds the unlock + exit-asymmetry risk — could no longer score *above* it; corrected to 3.0. Strategy's 06-29 8-K reframes STRC's par defense as a discretionary soft floor (buyback + reserve), stabilizing the inherited backing at the root without restoring par; the validated post-mortem design holds apyUSD *at* apxUSD's level rather than below.
- **2026-06 — STRC drawdown / apxUSD depeg:** overall 4.2 → 3.4, liquidity 5.5 → 3.5, redemption 4.5 → 3.5, volatility 7.0 → 6.5, structural 5.7 → 5.0, issuer 5.5 → 5.0. The wrapped apxUSD broke peg and fell below par collateralization; apyUSD traded at a meaningful discount to NAV, and both exit routes now end in a below-par asset. Held in the mid-3s (not lower) because the unlock window prevented a run and the redemption-rate Morpho oracle took zero liquidations.
- **2026-06 — reserve-composition correction (net-of-inventory):** underlying 4.5 → 3.6 (tracking apxUSD's overall). Net of the zero-netting Inventory line the inherited reserve is ≈74% STRC (vs ≈66% gross), with reflexive POL — more concentrated and lower-quality than previously scored.

---

*This report describes Apyx as of mid-2026. Live values for NAV, supply, collateralization, secondary pool depths, and bridge conservation are on the [live dashboard](https://tidresearch.com/dashboards/?asset=apyusd). Some information (cash composition, redemption mechanics, on-chain wallet keys) remains issuer-attested only. Securities balances and brokerage are CPA-attested by Wolf & Company under AICPA standards (March + April 2026, April scope securities-only). The week-1 launch NAV trajectory was reconstructed from on-chain Transfer events. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
