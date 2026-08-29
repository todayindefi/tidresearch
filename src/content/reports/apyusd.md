---
asset: "apyUSD"
slug: "apyusd"
aliases: ["apyUSD", "Apyx USD Yield"]
chains: ["eth", "base"]
category: "vault-share"
underlying_assets: ["apxUSD"]
yield_bearing: true
assessment_type: "light"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=apyusd"
trust_disclaimer: true
date: "2026-05-07"
last_verified: "2026-08-25"
featured: false
production: true
volatility_score: 6.5
structural_score: 5.0
redemption_score: 3.5
liquidity_score: 3.5
issuer_score: 5.0
underlying_score: 3.0
overall_score: 3.0
---

# apyUSD — Risk Report

**Significant risk · 3.0/10**

apyUSD is the yield-bearing wrapper around [apxUSD](/reports/apxusd/) — deposit apxUSD, receive apyUSD shares, and the share value grows over time as Apyx's STRC-backed collateral pays dividends. Ongoing yield is **≈13% APY** (within STRC's 11-15% indicated-rate range). Where apxUSD holders forgo yield in exchange for stablecoin functionality, apyUSD holders accept an exit window — a **3-to-20-day unlock with a declining fee** — in exchange for the dividend pass-through (or use a DEX two-hop for retail-scale exits in minutes).

**The vault's own mechanics are fine — but the asset underneath it broke peg in June 2026.** apxUSD is currently below par collateralization, and apyUSD trades at a meaningful discount to its NAV. That reshapes the exit and backing picture below; live values are on the [dashboard](https://tidresearch.com/dashboards/?asset=apyusd).

> **Update (2026-06-29/30) — Overall 3.4 → 3.0 (a wrapper-can't-score-above-what-it-wraps fix), Underlying 3.6 → 3.0; sub-axes held.** Two upstream moves, both now reflected. **(1) The asset apyUSD wraps got worse.** apxUSD was cut to Overall 3.0 (collateral ratio down to ~84%, apxUSD ~$0.82 / ≈−18% — see the [apxUSD report](/reports/apxusd/)); the terminal asset behind apyUSD's unlock window fell to **~84%-collateralized, from ~95%** (see the current-state note directly below — it has since recovered substantially). Because apyUSD wraps apxUSD and *adds* risk (the 3-to-20-day unlock + exit asymmetry), it must score **at or below apxUSD** — holding 3.4 while apxUSD fell to 3.0 had inverted that, so apyUSD's Overall is corrected to **3.0**. **(2) STRC gained a discretionary soft floor (06-29 8-K).** Strategy's "Digital Credit Capital Framework" converts STRC's par defense from a reflexive sub-$95 dividend ratchet into a discretionary soft floor (a $1.0B STRC-priority buyback + a near-doubled $2.55B reserve) — a bid *under* STRC, not a peg. For apyUSD's inherited backing this **stabilizes the trajectory at the root** but does not restore par or restock Apyx's reserve. The validated June post-mortem design (zero Morpho liquidations, the one-way yield ratchet held, the redemption-rate oracle insulated looped users) is what holds apyUSD *at* apxUSD's level rather than below it — the added vault risk and the demonstrated vault resilience roughly cancel. Path back up: STRC re-rating on the soft-floor bid + apxUSD collateral ≥100% sustained.

> **Current state (2026-08-23) — the ~84% above is a June figure and the collateral has recovered a long way since. No score change.** For apxUSD, read at 2026-08-23T09:45:59Z, there is **one shortfall, not two: $4,399,857.64** against supply of **$312,073,514.82**. That is Accountable's own `surplus_usd` figure, and it is simply supply minus reserves of $307,673,657.18.

**The two collateral ratios in circulation are the same book measured two ways, and both are the issuer's:**

| basis | ratio | what it excludes |
|---|---:|---|
| **netted** — the headline attestation | **98.0177%** | protocol-owned liquidity ($50.20M) and minted-but-unsold inventory ($39.92M), removed from *both* sides |
| **gross** | **98.5901%** | nothing — reserves over supply |

⚠️ **This is not a disagreement, and not a gap between the issuer and us.** Both figures are published by Accountable, and the netted one reconciles exactly: `(reserves − POL − inventory) / (supply − POL − inventory)` returns 98.017743%, matching the attested headline to four decimal places.

**Our independent lower bound is 98.5289%**, computed gross after stripping the roughly **$190,970** premium at which on-chain STRCx trades over the underlying STRC NAV. Against the issuer's **gross** figure that is **0.06pp stricter** — exactly what a conservative bound should be, and exactly the size of the premium removed.

⚠️ **A correction this report owes its readers.** Earlier on 2026-08-23 this page claimed our independent bound read *higher* than the issuer's attested ratio, and concluded from it that the portion we can check independently marks better than the attestation. **That was an artifact of comparing our gross bound against the issuer's netted ratio** — a +0.51pp illusion, not a finding. Like for like, our bound is stricter, as designed. The same pass also published a second, larger shortfall of about $6.2M, derived by multiplying the netted ratio by gross supply; **that figure does not exist on any basis and has been removed.** **That is still below par, so the sentence above this block stands** — the terminal asset remains under-collateralized and the recovery gate (par or better, sustained) is not met, which is why nothing re-rates. **The direction is the news, not the level.** **The portion we can check independently marks better than the attestation; the portion we cannot check is the larger one.** Two live conditions this report's older sections do not carry: STRC sits at about **60% of Apyx's reserves**, above the 55% single-issuer threshold we flag elsewhere; and depth on the Jupiter-routed STRCx venue is thin at roughly **$180K**, which bears directly on the exit arithmetic below. Live figures on the [dashboard](https://tidresearch.com/dashboards/?asset=apyusd).

| Yield | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ≈13% APY ongoing | DEX two-hop (retail) or 3-to-20-day unlock window (institutional) | Minutes (sub-$1M via DEX) or 3–20 days (canonical) | ≈3 months | Ethereum, Base |

## The June 2026 depeg (inherited)

apyUSD's NAV is mechanically sound — it accrues normally and the vault is 100% collateralized *by construction*, because it's denominated in apxUSD. ⚠️ **Do not read that 100% as a backing statement.** It is a vault-share identity — shares measured against the assets they represent — and it is true whatever apxUSD is worth. **The collateral ratio that matters to an apyUSD holder is apxUSD's, above**, and it is below par on both of the issuer's bases.

⚠️ **And there is a specific arithmetic trap here worth naming, because the obvious calculation gives a badly wrong answer.** apyUSD's published supply is denominated in **shares** (131,316,281) while its published backing is in **dollars** ($185,967,679). Dividing one by the other returns **141.6%**, which reads as a $54.7M surplus. **That surplus does not exist.** The correct comparison is backing against supply *valued at NAV* — $185,967,679 against $185,967,679, which is the 100% identity above and says nothing about solvency. **If you are checking this vault's numbers yourself, confirm the units before dividing.** The problem is what apxUSD is worth. In June 2026 the underlying apxUSD **broke peg**: Strategy's STRC preferred de-anchored below par on a mostly-STRC reserve, a redemption wave hit, and apxUSD's issuer-attested collateral ratio fell **below 100%** — into the mid-90s% in the first week, then deepening to **~84%** through late June (apxUSD ~$0.82 / ≈−18%; see the [apxUSD report](/reports/apxusd/)).

For an apyUSD holder that means both exit routes now end in a discounted or below-par asset:
- The **canonical** route (unlock window → receive apxUSD → exit apxUSD) delivers an apxUSD that is currently *below par* at the end of the wait — and exposes you to several more days of STRC/collateral drift before you even receive it.
- The **secondary** route (sell apyUSD on a DEX) realizes apyUSD's discount to NAV immediately — apyUSD has traded at a **meaningful discount (mid-single-digit to ≈−9% range)** during the event.

Treat the specific discount as a **moving event, not a fixed number** — check the [live dashboard](https://tidresearch.com/dashboards/?asset=apyusd) for the current value. This is the asymmetric-exit risk this report always flagged, now active.

## Backing & solvency

apyUSD inherits everything that drives the [apxUSD reliability picture](/reports/apxusd/): a continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi); monthly Wolf & Company AICPA-standards examinations published at [`docs.apyx.fi`](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) (March 2026 full scope + April 2026 securities-only — cash dropped from April scope, may return in May report); and STRC family as the largest single-issuer concentration. Live reserves and collateralization are on the [dashboard](https://tidresearch.com/dashboards/?asset=apyusd).

**The inherited backing got worse on inspection (June 2026).** Apyx's post-mortem corrected the reserve composition: its public dashboard had been folding **Protocol Owned Liquidity (POL)** and a **net-zero Inventory line** (minted-but-unsold apxUSD — an asset offset by a burnable liability, not real backing) into "Cash." Net of that Inventory, the reserve is roughly **three-quarters STRC family (≈74%)** — *more* concentrated than the ≈66% gross figure suggested — plus ≈13% cash and ≈13% reflexive POL (capped at 15% of reserves, deployed against Apyx's own assets, so lower-quality than cash). Combined with the deepened depeg (apxUSD's attested collateral ratio down to ~84%), that drops apxUSD's Backing axis to **2.0** and its Overall to **3.0**, and apyUSD's **Underlying axis to 3.0** (it tracks apxUSD's overall score, since the vault is a near pass-through onto apxUSD). Strategy's 06-29 soft floor steadies the STRC mark beneath all of this but does not restock Apyx's reserve. See the [apxUSD report](/reports/apxusd/) "Backing & solvency" for the full reserve breakdown.

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

Because the canonical path terminates in apxUSD, apyUSD inherits the underlying's redemption model: Apyx's June-15 "Apyx 2.0" announcement to move apxUSD mint/redeem to a single **Redemption Value** floor (via an approved-counterparty RFQ), closing the prior first-mover "free put option," would improve the *terminal* apxUSD you receive — but it is blog-only as of this revision (not yet in docs or on-chain) and it does **not** change apyUSD's own 3-to-20-day unlock window or any of its scores. See the [apxUSD report](/reports/apxusd/) for the full Apyx 2.0 detail.

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
- Cross-chain bridge (audited Chainlink CCIP; Ethereum ↔ Base, with **BNB Chain contracts added in mid-2026**) is governed by a smaller 3-of-6 multisig with no time-delay — weaker than token governance.

⚠️ **These are not three groups of people. They are six people holding three hats.** Measured on Ethereum, three separate Safes govern the Apyx surface — and **all three owner sets are identical: six shared, zero exclusive to any of them.**

| Safe | Threshold | Function |
|---|---|---|
| [`0xABdd8c8e…65e96`](https://etherscan.io/address/0xABdd8c8eE69e5F5180eb9352AEFFC5CeeAD65e96) | **4 of 6** | Token governance (AccessManager admin), behind the 72-hour timelock |
| `0xf9862EfC…3cE2` | **3 of 6** | Cross-chain bridge governor, no delay |
| [`0x37b0779a…a555`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555) | **3 of 6** | STRCx collateral custody (~$76M), no delay |

⚠️ **So the 72-hour timelock is not a control over these people. It is a control over one of the three doors they hold.** Four of the six move the token, and wait three days. **Any three of the same six move tokens across chains, or move the STRCx collateral, and wait for nothing.** The delay governs the slowest path; the two fastest paths are open to a smaller subset of the identical roster. **A delay is only a delay if the people it binds have no faster door.**

⚠️ **Read the evidence boundary before you weight this, because this finding has already been wrong twice in two days.** **The owner-set identity and the thresholds are measured on-chain and are the hard fact.** **Which function sits at which address is the softer half** — the bridge attribution is read from a 2026-08-22 walk rather than re-derived (a later `getCCIPAdmin()` re-check used a wrong selector and returned nothing), and the custody attribution comes from this coverage's own STRCx records. **If a role label here is wrong, the concentration finding is unaffected**: three identical owner sets is what drives it, and that is the part that is measured.

⚠️ **This is the same shape as the [frxUSD](/reports/frxusd/) finding, and it generalises: per-contract rows can each be correct while the composite is the risk, and the composite exists only in the comparison.** Three rows reading 4-of-6, 3-of-6 and 3-of-6 tell you nothing about how many distinct people stand behind them. **That number appears only when you intersect the sets, and nothing in any row prompts you to.** Here the intersection returns six, and the honest count of people standing between an attacker and all three layers is not twelve. **It is six.**

See the [apxUSD report](/reports/apxusd/) for the full team-trust and reserve write-up.

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

The [apxUSD report](/reports/apxusd/) covers the non-yield-bearing sibling, which broke peg in June 2026 and is the asset apyUSD wraps. apxUSD has faster exit at any size (Curve DEX or USDC settlement) but earns no yield; apyUSD adds the dividend pass-through and the 3-to-20-day unlock window. The two products are claims against the same Apyx + STRC backing — holding both does not diversify.

## Revision history

- **2026-08-25 — signer concentration measured; scores held at 3.0.** Three Safes govern the Apyx surface: token governance `0xABdd8c8e…65e96` (**4 of 6**, behind the 72h timelock), bridge governor `0xf9862EfC…3cE2` (**3 of 6**, no delay), and STRCx custody `0x37b0779a…a555` (**3 of 6**, no delay, about $76M). ⚠️ **All three owner sets are identical — six shared, none exclusive to any of them.** Six people holding three hats, so **any three of the six move tokens cross-chain or move the collateral with no delay**, and the timelock governs one of the three paths rather than the people. Owner-set identity and thresholds are measured; the role attributions are read from records.
- **2026-08-23 — apxUSD collateral basis clarified; scores held (Overall 3.0 / Underlying 3.0).** The attested collateral ratio of **98.017743%** is a **netted** figure, excluding **$50.20M of protocol-owned liquidity and $39.92M of minted-but-unsold inventory from both sides**, and is published alongside gross totals. The shortfall on gross supply is **$4,399,857.64**. An independent lower bound reads 98.57%. **The terminal asset remains below par**, and the recovery gate — par or better on the attested feed, sustained — is unmet.
- **2026-06-29 — STRC soft-floor reframe.** See the [apxUSD report](/reports/apxusd/) for the reserve and team-trust write-up this inherits.
