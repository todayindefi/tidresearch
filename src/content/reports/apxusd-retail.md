---
asset: "apxUSD"
slug: "apxusd"
aliases: ["apxUSD", "Apyx USD", "apxusd-retail"]
chains: ["eth", "base", "bnb"]
category: "stablecoin"
peg_mechanism: "rwa-synthetic"
assessment_type: "light"
audience: "retail"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=apxusd"
trust_disclaimer: true
date: "2026-04-10"
last_verified: "2026-08-18"
featured: false
production: true
# issuer: withheld pending review — this report states the issuing entity is
# Preference Foundation, and describes Apyx as "appearing separate" from DFDV as
# a legal entity. "Apyx (DFDV-affiliated)" therefore names neither the entity the
# report identifies as the issuer nor a relationship the report asserts. Restore
# only with the legal issuer confirmed against the body.
peg_mechanism_score: 2.5
backing_score: 2.0
liquidity_score: 3.0
issuer_score: 5.0
underlying_score: 5.0
overall_score: 3.0
audited: true
audit_count: 3
audit_firms: ["Quantstamp", "Zellic", "Certora"]
audited_reserves: true
bug_bounty: false
team_doxxed: false
incident_history: true
is_fork: false
---

# apxUSD — Risk Report

**Significant risk · 3.0/10**

apxUSD is a $1-target stablecoin from Apyx, a young protocol (live since Feb 2026) backed primarily by **Strategy's STRC perpetual preferred shares**, plus a cash sleeve and protocol-owned liquidity. The yield from the backing flows to Apyx's sibling token apyUSD; apxUSD holders forgo yield in exchange for stablecoin functionality. Supply grew rapidly into the hundreds of millions after launch.

**apxUSD broke its peg in June 2026 and is currently below par collateralization.** That event reshapes most of this report — see *The June 2026 depeg* directly below. Live peg, reserves, and collateralization are on the [dashboard](https://tidresearch.com/dashboards/?asset=apxusd).

> **Update (2026-08-18) — the gap has closed most of the way, and the scores do not move. Peg 2.5 / Backing 2.0 / Liquidity 3.0 / Issuer 5.0 / Overall 3.0, all held.**
>
> The figures in the sections below describe a materially worse position than the current one, and the correction matters in both directions. **Current state:** the attested collateral ratio is roughly **97%** (about **97.8%** on our stricter independent lower bound, which re-marks the on-chain STRCx slice at the underlying STRC value instead of its wrapper price), against a supply of about **$312M**. apxUSD trades around **$0.94, roughly 6% below par.** The collateral shortfall is on the order of **$7M**, versus tens of millions at the June trough.
>
> **Read that as recovery, and read it accurately.** Three things keep it from being a bigger story than it is:
>
> 1. **The move since our last stated figure is about +4.7 percentage points, not +13.** The June trough (about 84% collateral ratio, apxUSD near $0.82) is the number in the older sections below, but it was superseded on 2026-08-01, when the ratio had already recovered to roughly 92% headline / 94% on the lower bound. Measure from there. Most of the repair happened in July, not in the last two weeks.
> 2. **The recovery gate is still not met, which is why nothing re-rates.** The condition set out below is STRC recovering toward about $95 **and** Apyx restoring collateralization to 100% or better on the attested feed **for a sustained window**. STRC has done its half. Apyx has not: the ratio is still below par, and a scoring recovery needs it above par and holding, not approaching from underneath.
> 3. **The collateral leg is improving and wobbling at the same time.** STRC — about 61% of Apyx's reserves, or roughly 69% once the net-zero inventory line is stripped out — has re-rated from the June lows to around **$95**. But it slipped back *below* the $95 line in mid-August **despite Strategy's largest weekly buyback yet ($132.2M)**, and our tracker carries a live soft-floor-watch flag on it. Strategy is spending more each week for less price response, and only about $653M of its $1.0B buyback authorization remains — roughly five weeks at that pace. Coverage improved; the asset underneath it is not yet stable. See the [STRCx report](/reports/strcx/) for the detail.
>
> Reserve composition has also drifted since the sections below were written: net of the inventory line the reserve is now roughly **69% STRC family, 19% protocol-owned liquidity, and 12% cash** — the STRC concentration is a little lower than the 74% described below, but the shift went into POL, which is reflexive backing rather than cash, not into the cash sleeve.

> **Update (2026-06-29/30) — scores cut to current: Peg 3.5 → 2.5, Backing 2.5 → 2.0, Liquidity 3.5 → 3.0, Overall 3.6 → 3.0 (Issuer held 5.0). Plus: the STRC collateral now carries a discretionary soft floor.** Two things this catch-up reflects. **(1) The depeg deepened through late June.** What earlier sections describe as a "low-90s on the dollar / mid-90s% collateral ratio" was the *first-week trough*, not the current state — apxUSD has since traded as low as **~$0.82 (≈−18%)** and Apyx's attestation feed fell to a collateral ratio of **~84%** (a ~16% buffer deficit vs par), sustained for weeks. That drives the score cuts to the levels above (live values on the [dashboard](https://tidresearch.com/dashboards/?asset=apxusd)). **(2) Strategy's 06-29 8-K put a soft floor under STRC.** The "Digital Credit Capital Framework" changed how Strategy defends STRC — from a reflexive "hike the dividend if STRC trades sub-$95" ratchet to a **discretionary soft floor** (Strategy may buy STRC back via a $1.0B STRC-priority program, or draw a near-doubled $2.55B reserve, but makes no commitment to return STRC to par). For apxUSD's ~74%-net STRC basket this is **modestly stabilizing, not score-improving**: a discretionary issuer bid now cushions STRC's mark, but it does **not** restock Apyx's reserve or lift the ~84% collateral ratio. Mark the STRC sleeve to its live secondary price *with that floor beneath it*, not to a par-defense recovery. The old "watch for STRC back above ~$95" recovery trigger is superseded — recovery now tracks STRC re-rating on the soft-floor bid plus Apyx restoring collateral ≥100%.

| Peg | Yield | Exit | Age | Chains |
|---|---|---|---|---|
| $1 target, RWA-backed synthetic (broke peg June 2026) | None (yield routes to apyUSD) | DEX (Curve) or Apyx USDC settlement (opaque) | about 6 months | Ethereum, Base, BNB Chain |

## The June 2026 depeg

apxUSD broke peg in the first week of June 2026. Two things happened at once:

- **The collateral de-anchored.** Strategy's STRC preferred — the dominant reserve asset — fell well below its $100 par, to an all-time low around $74.57 in late June. That is a direct mark-to-market hit to a reserve that is **mostly STRC**. (STRC has since recovered to around $95 — see the 2026-08-18 update box above for where that leaves things.) (Note: STRC's old "drift below ~$95 forces a dividend hike to defend par" reflex was itself removed by Strategy's 06-29 framework — par defense is now a discretionary soft floor; see the update box at the top.)
- **Holders headed for the exit.** A meaningful share of supply was redeemed/sold over the same window, so reserves shrank faster than supply.

The result: apxUSD traded at a material discount and Apyx's own attestation feed went to a **persistent, issuer-attested sub-100% collateral ratio** — where it has remained ever since. The first-week trough was into the **low-90s on the dollar and a mid-90s% collateral ratio**; through late June the dislocation *deepened* to about **$0.82 (roughly −18%) with a collateral ratio near 84%**. That was never the transient mark-to-market wobble earlier versions of this report told readers to ignore; it was a real shortfall, and it has now run for months rather than weeks. It has substantially repaired — see the 2026-08-18 update box above for the current figures — but it has not closed. Because apxUSD has **no atomic on-chain redemption** — no contract you can call to swap one apxUSD for a dollar of collateral — there is no built-in arbitrage to force the price back to $1. Recovery depends on STRC re-rating (now on the soft-floor bid) and on Apyx restocking reserves through its off-chain pipeline.

Treat the specific discount and collateral ratio as a **moving event, not a fixed number** — check the [live dashboard](https://tidresearch.com/dashboards/?asset=apxusd) for the current values. (One caveat: Apyx pulls its own secondary-market depth off-hours by design, so weekend snapshots overstate the steady-state dislocation.)

## Backing & solvency

**Backing is verifiable through two layers.** (a) A continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi) signs each snapshot from a secure enclave with a key registered on-chain. (b) Monthly third-party CPA-firm attestations by **Wolf & Company, P.C.** (Boston; AICPA examination standards) published at [`docs.apyx.fi`](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) — March 2026 and April 2026 reports both signed. The live dashboard shows reserves, supply, and collateralization; as of this revision the attested ratio is **below 100%** (see *The June 2026 depeg* above).

**Reserve composition — STRC-heavy on a net basis (corrected June 2026).** Apyx's June post-mortem clarified that the Accountable feed breaks reserves into five buckets: **STRC family, Cash & Equivalents, Protocol Owned Liquidity (POL), Inventory, and SATA**. Apyx's *public* dashboard had been folding POL and Inventory into "Cash," which made the basket look more cash-heavy than it is. Reading it correctly:

- **Inventory nets to zero and is not backing.** It's apxUSD that Apyx has minted but not yet sold — an asset offset by an equal burnable liability. Stripping it out is the honest way to count reserves.
- **Net of that Inventory line, the reserve is STRC-dominant** — about **69% STRC family**, plus roughly 19% POL and 12% cash on the current feed (it was closer to 74% / 13% / 13% when this correction was first made). Either way the point holds: net of inventory the basket is *more* STRC-concentrated than the gross figure suggests, and the drift since has moved weight into POL rather than into cash.
- **POL is reflexive.** It's protocol-owned DEX liquidity plus USDC lent into Apyx-collateralized Morpho markets, capped at **15% of reserves**. It's liquid, but it is deployed against Apyx's own assets, so it is lower-quality backing than plain cash.

That correction — more STRC concentration than previously scored, and a thinner true-cash cushion — combined with a collateral ratio that has been below par continuously since June is why the **Backing axis sits at 2.0**. A 50% STRC writedown would still leave the cash and POL portion, but that cushion is thinner than the gross numbers implied. Strategy's buyback program has since lifted the STRC *mark* substantially, which has carried the attested ratio back up to roughly 97% — real repair, and the reason the trajectory reads as recovery. It does not lift this axis, for two reasons: the ratio is still below par rather than sustainably above it, and the improvement came from an issuer bid on the collateral rather than from Apyx restocking its own reserve. The recovery here is borrowed from Strategy's balance sheet, and Strategy's buyback authorization is finite.

**The qualifiers worth knowing:**
- The "Cash & Equivalents" line is not itemized in the Accountable feed — could be bank deposits, T-bills, USDC, or some mix. Not disclosed publicly.
- **Wolf is mid-tier, not Big-4.** Solid AICPA examination engagement (named auditor, professional liability) but a tier below Deloitte / PwC / EY / KPMG.
- **The April Wolf engagement narrowed scope to securities only** — cash, stablecoin, and dividends-in-motion (covered in March) all dropped out. **The narrowing has held.** Wolf's June 2026 examination, signed 2026-07-22, covers $193.3M of STRC/STRCx securities at 06-30 and again **excludes cash**. So no CPA firm has attested the cash sleeve for any date after 2026-03-31, and this now reads as the standing arrangement rather than a one-month transition.
- **apxUSD is issuer-push, not user-pull.** Mints do not atomically pull USDC from a depositor — Apyx mints apxUSD to itself and sells it on Curve / CoW Protocol for USDC. The proceeds are swept from Apyx's operational multisig to a **Kraken** deposit address (Kraken is a US-licensed exchange — the team uses it as a USDC→USD off-ramp), then routed off-chain to Apyx's brokerage at Alpaca for STRC / SATA purchases. The pipeline is institutionally normal; the disclosure gap is that Apyx hasn't published the off-ramp arrangement, and the June depeg showed this manual leg is too slow to defend the peg under a real run.
- STRC + SATA are held at Alpaca brokerage in the name of Preference Foundation (or a subsidiary). STRCx (the on-chain tokenized form of STRC) sits in [`0x37b0779a…323a555`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555), a 3-of-6 Gnosis Safe with the same six owners as Apyx's other admin Safes (identified on-chain; the 4/30 balance matches the Wolf attestation within 1%). The Safe has no time-delay on transactions — same admin gap as the cross-chain bridge layer.
- The Accountable TEE feed proves what Apyx feeds the enclave; it does not audit the custodian or the wallet keys themselves. Wolf's monthly examinations close part of that gap on the securities balances, but no examination opines on the on-chain wallet's key-management posture.

**A note on "solvent."** In its post-mortem Apyx says it "remained solvent throughout — reserves exceeded the *market* value of supply." That is a weaker claim than reserves covering supply at **par ($1)**. By the stricter, standard measure — collateral ratio versus par — apxUSD has been below 100%. Both framings are true; the par-based one is the conservative one, and it's the one that matters when you're holding a token that's supposed to be worth a dollar.

## Exit liquidity

**Entry:** Mint at Apyx (manual, EIP-712 signed order workflow) or buy on the Curve apxUSD/USDC pool on Ethereum. The Curve pool is the realistic retail entry and exit venue.

**Exit:**
- **Retail size:** Sell on Curve apxUSD/USDC (live depth on the dashboard's Secondary Liquidity panel). During the June depeg, observed exit cost rose sharply and the pool traded at a discount to par — the "institutional-grade, $100K clears under 25 bps" depth described in earlier revisions did **not** survive the stress event. Apyx pulls its own secondary depth off-hours by design, so depth and slippage swing with the time of day and the stress state; check the live panel before sizing.
- **Larger size:** Apyx offers redemption in USDC, but the mechanism isn't publicly documented — no published timeline, no PSM, no on-chain guarantee. Effectively trusts Apyx to liquidate STRC into USDC and pay out when requested.

The durable finding on this axis is that secondary depth is **variable and issuer-discretionary**, not the dependable book earlier scores implied — which, together with a peg that has been dislocated continuously since June (currently around $0.94, having been as low as about $0.82, with KyberSwap aggregator depth rather than weekend pool depth the canonical exit mark), is why the **Liquidity axis sits at 3.0**. The narrowing discount improves the *level* of the exit mark without changing the finding: depth still varies with the issuer's own participation and the time of day. Two related constraints live on other axes: **coordinated-run capacity** (secondary depth is a small fraction of supply, a backing/buffer concern) and **redemption-mechanism opacity** (the undocumented off-chain settlement path, a peg-mechanism concern).

## Peg & yield dynamics

**apxUSD is designed to trade at $1 — and in June 2026 it didn't.** Peg integrity rests on three things, all of which the depeg tested:

1. **STRC + cash backing holds its value.** STRC fell well below par, directly cutting reserve value. As of 06-29, Strategy defends STRC value with a discretionary soft floor (buyback / reserve) rather than a reflexive sub-$95 dividend hike — a bid under the price, not a peg. STRC is a ≈1-year-old instrument, not yet tested through a prolonged BTC drawdown or an MSTR equity-raise pause.
2. **The Alpaca brokerage and the STRCx Safe hold what's reported.** Wolf's monthly CPA examinations independently verify the securities sleeve at two snapshot dates per month, and the STRCx Safe at [`0x37b0779a…`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555) is verifiable on-chain in real time. Wolf does not opine on the cash sleeve after the April scope narrowing.
3. **Secondary depth absorbs flows.** It did not absorb the June redemption wave at par — that's the realized version of the stress this report previously said "would test this."

**What broke the peg, and what restores it:** STRC de-anchoring on a concentrated reserve plus a redemption wave pushed collateralization below par, and with no atomic redemption there's no automatic arbitrage to close the gap. The path back to $1 requires STRC to re-rate up — now on Strategy's discretionary soft-floor bid (the $1.0B STRC-priority buyback plus a cash reserve that has since built to a record $4.80B), not the old forced sub-$95 dividend hike — and Apyx to restore the collateral ratio to ≥100% on the attested feed for a sustained window. As of August 2026 the first half has largely happened and the second has not, which is why the scores are unchanged.

**"Apyx 2.0" — an announced redemption redesign (June 15, 2026).** In a follow-up to the post-mortem, Apyx outlined a reworked mint/redeem model intended to fix a flaw the June event exposed. Everyone — in calm and in stress — would mint and redeem at a single **Redemption Value**, a floor price carrying a small spread, with the dashboard's headline NAV relabeled **Total Collateral Value** so the gap between the two reads directly as the overcollateralization buffer (their worked example: $1.02 of collateral behind a $1.00 redemption floor). Approved counterparties would quote against the reserve through a structured **RFQ**. Apyx frames the redesign as closing the prior "free put option" — under the old NAV-redemption logic, the first redeemers in a drawdown could arbitrage the buffer at the expense of everyone who stayed, exactly the dynamic that played out in June; under Redemption Value the buffer instead accrues to long-term holders. The intent is a genuine improvement in the redemption logic. **The important caveat: this is blog-only as of this revision.** Apyx's own docs at [`docs.apyx.fi`](https://docs.apyx.fi) still describe the old mechanism (apxUSD "settled in USDC / not directly redeemable"), no contract, PSM, or cooldown change has been disclosed, and redemption stays off-chain and is now explicitly gated to "approved counterparties." Redemption Value is an announced pricing *policy*, not an enforceable on-chain mechanism — so it doesn't change the no-atomic-redemption reality behind the Peg and Backing scores, and the scores are unchanged. Read it as a credible fix that is **pending adoption into the docs and on-chain confirmation**, not as a live guarantee that Apyx now redeems at a floor.

## Audits, admin & team

**Backers + audits + contract layer are solid; the June depeg exposed the operations:**

- **Backed by DeFi Development Corp (DFDV)**, a Nasdaq-listed company. Joseph Onorati (DFDV CEO) is publicly named. Investors include ParaFi, Pantera, Kraken Ventures, Wintermute Ventures, GSR.
- **Three audits:** Quantstamp (Feb 2026), Certora (Mar 2026 — formal verification, 1 high-severity finding fixed), Zellic (Mar 2026). Solid stack.
- **Admin posture (verified on-chain):** A 4-of-6 Gnosis Safe controls the protocol, with a **72-hour timelock** on sensitive actions and a distributed guardian role that can cancel scheduled operations. Token-side admin is materially better than typical young-protocol baseline.

**The post-mortem is two-sided — both halves matter:**
- **What Apyx admitted went wrong:** overnight/weekend liquidity was pulled (a TradFi/DeFi off-hours mismatch), the manual mint/redeem plumbing was too slow to defend the peg at scale, communications lagged, and *Apyx's own dashboard briefly showed an inflated NAV from a STRCx pricing bug.* These confirm the operational fragility the depeg surfaced — and are why the **Issuer axis steps down to 5.0** (behavior, not the contract layer).
- **What actually held:** the apyUSD unlock window prevented a bank run, redemptions were processed proportionally (so the remaining basket didn't concentrate into the illiquid leg), the apyUSD yield ratchet held, and **no Morpho lending market booked bad debt** — the apyUSD/apxUSD Morpho market took zero liquidations because its oracle keys off the redemption rate, not the spot price. This demonstrated resilience is why the overall score lands in the mid-3s rather than lower despite the backing markdown.

**Caveats:**
- Apyx as a legal entity appears separate from DFDV (US/EU/EEA users are geo-blocked). In a solvency event, holders' claims may route through an unnamed offshore entity rather than the Nasdaq-listed DFDV. Standard offshore-RWA structure but worth understanding.
- No Apyx team members are individually doxxed beyond DFDV's CEO. The issuer entity is Preference Foundation (Director Carolyn Kelly signs the Wolf attestation). Brokerage is Alpaca; the bank(s) holding cash are not named.
- The cross-chain bridge (audited Chainlink CCIP; Ethereum ↔ Base, with **BNB Chain contracts added in mid-2026** — a third chain means a third bridge and admin surface) is governed by a **smaller 3-of-6 multisig with no time-delay** — weaker than token governance. Separately, some Morpho markets ran a **stale self-managed price oracle** that lagged as apxUSD left $1; Apyx is migrating those to Chainlink.
- No bug bounty program.

## Who it's for · Who should avoid

**For:** Risk-tolerant DeFi users who want exposure to MSTR/STRC dividend yield via a stablecoin wrapper, understand they're effectively making a leveraged bet on Strategy's ability to keep paying STRC dividends, and are comfortable holding a token that has **already broken peg once** and depends on off-chain RWA custody and opaque redemption mechanics.

**Avoid if:**
- Treating this as a "core" stablecoin allocation. apxUSD is a thin wrapper around a single off-chain security that has traded below par; the on-chain ticker reading $1 doesn't remove concentration risk.
- Needing instant guaranteed exit at $1 — the documented redemption mechanism is opaque, secondary depth is issuer-discretionary, and the token is currently below par.
- Needing a Big-4 audited financial statement — what's published is a monthly Wolf & Company AICPA examination (real CPA-firm opinion, but mid-tier and currently scoped to securities only), not a full financial-statement audit.

## What to watch

- **Collateral ratio back to ≥100%, sustained.** The single most important recovery signal — live on the dashboard's Backing panel. A sustained return to par (not a one-snapshot blip) is what would justify re-rating.
- **STRC price + the soft-floor bid — specifically, how much of the bid is left.** apxUSD's backing recovers if STRC re-rates up, now via Strategy's discretionary buyback/reserve soft floor (the $1.0B STRC-priority program plus a record $4.80B reserve) rather than the old forced sub-$95 dividend hike. That bid has done most of the work in apxUSD's recovery, so its runway is now the relevant signal: **about $653M of the $1.0B remains, roughly five weeks at the mid-August pace, and the price response per dollar spent is deteriorating.** Whether Strategy re-authorizes when the program is exhausted matters directly to apxUSD's collateral ratio.
- **Wolf attestations — whether cash ever returns to scope.** The June 2026 examination (signed 07-22) again covered securities only. Each further securities-only report leaves the cash sleeve without CPA coverage for longer; a return to the March full-balance scope would restore the disclosure stack to its high-water mark.
- **Curve apxUSD/USDC pool depth and discount** (live on dashboard). Recovering depth and a narrowing discount = healing; widening = renewed stress.
- **MSTR / BTC drawdowns.** A severe BTC crash compresses MSTR equity → threatens STRC dividends → degrades apxUSD backing further.

## A note on the apyUSD sibling

If you're considering the yield-bearing apyUSD wrapper, see the [apyUSD report](/reports/apyusd/). apyUSD captures the dividend stream (≈13% APY ongoing) but exits through a **3-to-20-day unlock window with a declining fee** (and now sits on top of the same below-par collateral). The two products are claims against the same Apyx + STRC backing — holding both doesn't diversify.

## Revision history

- **2026-08-18 — collateral and peg figures refreshed; all scores held (Peg 2.5 / Backing 2.0 / Liquidity 3.0 / Issuer 5.0 / Overall 3.0).** No score change, but most of this report's stated figures had rotted. The attested collateral ratio is now roughly **97%** (about 97.8% on our independent lower bound) against about **$312M** of supply, and apxUSD trades around **$0.94 (about −6%)** — versus the ~84% / ~$0.82 June trough described in the older sections. Measured from our last published figure rather than the trough, that is about **+4.7 percentage points** since 2026-08-01. The recovery gate — STRC recovering toward $95 *and* Apyx holding collateralization at 100% or better for a sustained window — is still **not met** on the Apyx leg, so nothing re-rates. Also refreshed: reserve mix net of inventory drifted from about 74/13/13 STRC/cash/POL to about **69% STRC / 19% POL / 12% cash**; Wolf's June 2026 examination again **excluded cash**, so the April scope narrowing is now the standing arrangement; BNB Chain added as a third deployment; and STRC's soft floor re-described in terms of what remains of it (about $653M of the $1.0B authorization, with the price response per dollar deteriorating).
- **2026-07-13 — STRC weekly-8-K anchor refresh (scores held).** Strategy's cash reserve behind the STRC soft floor hit a record **$3.0B** (from $2.55B); STRC recovered to **~$87.48** (07-12, ~−12.5% to par), off its **$76 all-time low**, and Strategy funded the week's dividends with **no Bitcoin sold** (last week's 3,588-BTC sale was a one-week event) while resuming common ATM. Upstream mNAV slipped back just below 1.0 (~0.97–0.98) — a **watch, not a break**, as the reserve is building. apxUSD's own peg and ~84% collateral ratio are Apyx-side and **unchanged**; this is a look-through STRC-anchor refresh only.
- **2026-06-29 — STRC soft-floor reframe (Strategy 8-K):** scores held. Strategy's "Digital Credit Capital Framework" converts STRC's par defense from a reflexive sub-$95 dividend ratchet into a discretionary soft floor (a $1.0B STRC-priority buyback + a near-doubled $2.55B reserve). Stabilizes the STRC *mark* in apxUSD's basket but does not restock Apyx's reserve or lift the ~84% collateral ratio — modestly stabilizing, not score-improving.
- **2026-06-25 — depeg deepened:** peg mechanism 3.5 → 2.5, backing 2.5 → 2.0, liquidity 3.5 → 3.0, overall 3.6 → 3.0 (issuer held 5.0). The first-week trough (low-90s price / mid-90s% CR) hardened into a sustained ~$0.82 (≈−18%) dislocation with the attested collateral ratio down to ~84% — a ~16% buffer deficit vs par, on the same ~74%-STRC concentrated reserve with no atomic redemption to close it.
- **2026-06 — STRC drawdown / apxUSD depeg:** overall 5.2 → 3.6, liquidity 8.0 → 3.5, peg mechanism 4.5 → 3.5, issuer 5.5 → 5.0. apxUSD broke peg as STRC de-anchored on a concentrated reserve and a redemption wave drove collateralization below par; the previously scored "institutional-grade" secondary depth did not survive the stress.
- **2026-06 — reserve-composition correction (net-of-inventory):** backing 4.2 → 2.5. Apyx's post-mortem confirmed the public dashboard had lumped Protocol Owned Liquidity and the net-zero Inventory line into "Cash"; net of Inventory the reserve is ≈74% STRC (vs ≈66% gross), with reflexive POL — more concentrated and lower-quality than previously scored.

---

*This report describes Apyx as of mid-2026. Live values for supply, reserves, collateralization, Curve depth, and bridge conservation are on the [live dashboard](https://tidresearch.com/dashboards/?asset=apxusd). Some information (cash composition, redemption mechanics, on-chain wallet keys) remains issuer-attested only. Securities balances and brokerage are CPA-attested by Wolf & Company under AICPA standards. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
