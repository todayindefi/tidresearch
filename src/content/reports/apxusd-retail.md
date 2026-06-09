---
asset: "apxUSD"
slug: "apxusd"
aliases: ["apxUSD", "Apyx USD", "apxusd-retail"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "rwa-synthetic"
assessment_type: "light"
audience: "retail"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=apxusd"
trust_disclaimer: true
date: "2026-04-10"
last_verified: "2026-06-09"
featured: false
production: true
issuer: "Apyx (DFDV-affiliated)"
peg_mechanism_score: 3.5
backing_score: 2.5
liquidity_score: 3.5
issuer_score: 5.0
underlying_score: 5.0
overall_score: 3.6
audited: true
audit_count: 3
audit_firms: ["Quantstamp", "Zellic", "Certora"]
audited_reserves: true
bug_bounty: false
team_doxxed: false
incident_history: true
is_fork: false
---

# apxUSD — Retail Risk Report

**Significant risk · 3.6/10**

apxUSD is a $1-target stablecoin from Apyx, a young protocol (live since Feb 2026) backed primarily by **Strategy's STRC perpetual preferred shares**, plus a cash sleeve and protocol-owned liquidity. The yield from the backing flows to Apyx's sibling token apyUSD; apxUSD holders forgo yield in exchange for stablecoin functionality. Supply grew rapidly into the hundreds of millions after launch.

**apxUSD broke its peg in June 2026 and is currently below par collateralization.** That event reshapes most of this report — see *The June 2026 depeg* directly below. Live peg, reserves, and collateralization are on the [dashboard](https://tidresearch.com/dashboards/?asset=apxusd).

| Peg | Yield | Exit | Age | Chains |
|---|---|---|---|---|
| $1 target, RWA-backed synthetic (broke peg June 2026) | None (yield routes to apyUSD) | DEX (Curve) or Apyx USDC settlement (opaque) | ≈3 months | Ethereum, Base |

## The June 2026 depeg

apxUSD broke peg in the first week of June 2026. Two things happened at once:

- **The collateral de-anchored.** Strategy's STRC preferred — the dominant reserve asset — fell below its $100 par and under the level where Strategy is contractually pushed to raise the dividend. That is a direct mark-to-market hit to a reserve that is **mostly STRC**.
- **Holders headed for the exit.** A meaningful share of supply was redeemed/sold over the same window, so reserves shrank faster than supply.

The result: apxUSD traded at a material discount — into the **low-90s on the dollar** at the worst of the week — and Apyx's own attestation feed now shows a **persistent, issuer-attested sub-100% collateral ratio** (into the **mid-90s%** at the trough, recovering since but not fully back to par). This is no longer the transient mark-to-market wobble earlier versions of this report told you to ignore; it is a sustained shortfall that has lasted several days. Because apxUSD has **no atomic on-chain redemption** — no contract you can call to swap one apxUSD for a dollar of collateral — there is no built-in arbitrage to force the price back to $1. Recovery depends on STRC recovering and on Apyx restocking reserves through its off-chain pipeline.

Treat the specific discount and collateral ratio as a **moving event, not a fixed number** — check the [live dashboard](https://tidresearch.com/dashboards/?asset=apxusd) for the current values. (One caveat: Apyx pulls its own secondary-market depth off-hours by design, so weekend snapshots overstate the steady-state dislocation.)

## Backing & solvency

**Backing is verifiable through two layers.** (a) A continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi) signs each snapshot from a secure enclave with a key registered on-chain. (b) Monthly third-party CPA-firm attestations by **Wolf & Company, P.C.** (Boston; AICPA examination standards) published at [`docs.apyx.fi`](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) — March 2026 and April 2026 reports both signed. The live dashboard shows reserves, supply, and collateralization; as of this revision the attested ratio is **below 100%** (see *The June 2026 depeg* above).

**Reserve composition — STRC-heavy on a net basis (corrected June 2026).** Apyx's June post-mortem clarified that the Accountable feed breaks reserves into five buckets: **STRC family, Cash & Equivalents, Protocol Owned Liquidity (POL), Inventory, and SATA**. Apyx's *public* dashboard had been folding POL and Inventory into "Cash," which made the basket look more cash-heavy than it is. Reading it correctly:

- **Inventory nets to zero and is not backing.** It's apxUSD that Apyx has minted but not yet sold — an asset offset by an equal burnable liability. Stripping it out is the honest way to count reserves.
- **Net of that Inventory line, the reserve is roughly three-quarters STRC family (≈74%)**, plus about ≈13% cash and ≈13% POL — *more* STRC-concentrated than the ≈66% gross figure suggested.
- **POL is reflexive.** It's protocol-owned DEX liquidity plus USDC lent into Apyx-collateralized Morpho markets, capped at **15% of reserves**. It's liquid, but it is deployed against Apyx's own assets, so it is lower-quality backing than plain cash.

That correction — more STRC concentration than previously scored, and a thinner true-cash cushion — is the core reason the **Backing axis sits at 2.5**. A 50% STRC writedown would still leave the cash and POL portion, but that cushion is thinner than the gross numbers implied.

**The qualifiers worth knowing:**
- The "Cash & Equivalents" line is not itemized in the Accountable feed — could be bank deposits, T-bills, USDC, or some mix. Not disclosed publicly.
- **Wolf is mid-tier, not Big-4.** Solid AICPA examination engagement (named auditor, professional liability) but a tier below Deloitte / PwC / EY / KPMG.
- **The April Wolf engagement narrowed scope to securities only** — cash, stablecoin, and dividends-in-motion (covered in March) all dropped out. The largest reserve component (cash) has no CPA-firm attestation for any date after 2026-03-31. Whether this is transitional or permanent will be visible in the May 2026 report (expected mid-to-late June 2026).
- **apxUSD is issuer-push, not user-pull.** Mints do not atomically pull USDC from a depositor — Apyx mints apxUSD to itself and sells it on Curve / CoW Protocol for USDC. The proceeds are swept from Apyx's operational multisig to a **Kraken** deposit address (Kraken is a US-licensed exchange — the team uses it as a USDC→USD off-ramp), then routed off-chain to Apyx's brokerage at Alpaca for STRC / SATA purchases. The pipeline is institutionally normal; the disclosure gap is that Apyx hasn't published the off-ramp arrangement, and the June depeg showed this manual leg is too slow to defend the peg under a real run.
- STRC + SATA are held at Alpaca brokerage in the name of Preference Foundation (or a subsidiary). STRCx (the on-chain tokenized form of STRC) sits in [`0x37b0779a…323a555`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555), a 3-of-6 Gnosis Safe with the same six owners as Apyx's other admin Safes (identified on-chain; the 4/30 balance matches the Wolf attestation within 1%). The Safe has no time-delay on transactions — same admin gap as the cross-chain bridge layer.
- The Accountable TEE feed proves what Apyx feeds the enclave; it does not audit the custodian or the wallet keys themselves. Wolf's monthly examinations close part of that gap on the securities balances, but no examination opines on the on-chain wallet's key-management posture.

**A note on "solvent."** In its post-mortem Apyx says it "remained solvent throughout — reserves exceeded the *market* value of supply." That is a weaker claim than reserves covering supply at **par ($1)**. By the stricter, standard measure — collateral ratio versus par — apxUSD has been below 100%. Both framings are true; the par-based one is the conservative one, and it's the one that matters when you're holding a token that's supposed to be worth a dollar.

## Exit liquidity

**Entry:** Mint at Apyx (manual, EIP-712 signed order workflow) or buy on the Curve apxUSD/USDC pool on Ethereum. The Curve pool is the realistic retail entry and exit venue.

**Exit:**
- **Retail size:** Sell on Curve apxUSD/USDC (live depth on the dashboard's Secondary Liquidity panel). During the June depeg, observed exit cost rose sharply and the pool traded at a discount to par — the "institutional-grade, $100K clears under 25 bps" depth described in earlier revisions did **not** survive the stress event. Apyx pulls its own secondary depth off-hours by design, so depth and slippage swing with the time of day and the stress state; check the live panel before sizing.
- **Larger size:** Apyx offers redemption in USDC, but the mechanism isn't publicly documented — no published timeline, no PSM, no on-chain guarantee. Effectively trusts Apyx to liquidate STRC into USDC and pay out when requested.

The durable finding on this axis is that secondary depth is **variable and issuer-discretionary**, not the dependable book earlier scores implied — which, together with the depeg, is why the **Liquidity axis sits at 3.5**. Two related constraints live on other axes: **coordinated-run capacity** (secondary depth is a small fraction of supply, a backing/buffer concern) and **redemption-mechanism opacity** (the undocumented off-chain settlement path, a peg-mechanism concern).

## Peg & yield dynamics

**apxUSD is designed to trade at $1 — and in June 2026 it didn't.** Peg integrity rests on three things, all of which the depeg tested:

1. **STRC + cash backing holds its value.** STRC fell below par and below its dividend-bump trigger, directly cutting reserve value. STRC is a ≈1-year-old instrument, not yet tested through a prolonged BTC drawdown or an MSTR equity-raise pause.
2. **The Alpaca brokerage and the STRCx Safe hold what's reported.** Wolf's monthly CPA examinations independently verify the securities sleeve at two snapshot dates per month, and the STRCx Safe at [`0x37b0779a…`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555) is verifiable on-chain in real time. Wolf does not opine on the cash sleeve after the April scope narrowing.
3. **Secondary depth absorbs flows.** It did not absorb the June redemption wave at par — that's the realized version of the stress this report previously said "would test this."

**What broke the peg, and what restores it:** STRC de-anchoring on a concentrated reserve plus a redemption wave pushed collateralization below par, and with no atomic redemption there's no automatic arbitrage to close the gap. The path back to $1 requires STRC to recover (back above its dividend-bump level) and Apyx to restore the collateral ratio to ≥100% on the attested feed for a sustained window.

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
- The cross-chain bridge (Ethereum ↔ Base, audited Chainlink CCIP) is governed by a **smaller 3-of-6 multisig with no time-delay** — weaker than token governance. Separately, some Morpho markets ran a **stale self-managed price oracle** that lagged as apxUSD left $1; Apyx is migrating those to Chainlink.
- No bug bounty program.

## Who it's for · Who should avoid

**For:** Risk-tolerant DeFi users who want exposure to MSTR/STRC dividend yield via a stablecoin wrapper, understand they're effectively making a leveraged bet on Strategy's ability to keep paying STRC dividends, and are comfortable holding a token that has **already broken peg once** and depends on off-chain RWA custody and opaque redemption mechanics.

**Avoid if:**
- Treating this as a "core" stablecoin allocation. apxUSD is a thin wrapper around a single off-chain security that has traded below par; the on-chain ticker reading $1 doesn't remove concentration risk.
- Needing instant guaranteed exit at $1 — the documented redemption mechanism is opaque, secondary depth is issuer-discretionary, and the token is currently below par.
- Needing a Big-4 audited financial statement — what's published is a monthly Wolf & Company AICPA examination (real CPA-firm opinion, but mid-tier and currently scoped to securities only), not a full financial-statement audit.

## What to watch

- **Collateral ratio back to ≥100%, sustained.** The single most important recovery signal — live on the dashboard's Backing panel. A sustained return to par (not a one-snapshot blip) is what would justify re-rating.
- **STRC price vs its dividend-bump level.** apxUSD's backing recovers if STRC recovers above the level where Strategy is pushed to raise the dividend.
- **Wolf May 2026 attestation — cash scope re-inclusion.** Expected mid-to-late June 2026. If cash returns to scope, the disclosure stack is back at the March high-water mark; if not, the largest reserve component stays without CPA coverage.
- **Curve apxUSD/USDC pool depth and discount** (live on dashboard). Recovering depth and a narrowing discount = healing; widening = renewed stress.
- **MSTR / BTC drawdowns.** A severe BTC crash compresses MSTR equity → threatens STRC dividends → degrades apxUSD backing further.

## A note on the apyUSD sibling

If you're considering the yield-bearing apyUSD wrapper, see the [apyUSD retail report](/reports/apyusd/). apyUSD captures the dividend stream (≈13% APY ongoing) but exits through a **3-to-20-day unlock window with a declining fee** (and now sits on top of the same below-par collateral). The two products are claims against the same Apyx + STRC backing — holding both doesn't diversify.

## Revision history

- **2026-06 — STRC drawdown / apxUSD depeg:** overall 5.2 → 3.6, liquidity 8.0 → 3.5, peg mechanism 4.5 → 3.5, issuer 5.5 → 5.0. apxUSD broke peg as STRC de-anchored on a concentrated reserve and a redemption wave drove collateralization below par; the previously scored "institutional-grade" secondary depth did not survive the stress.
- **2026-06 — reserve-composition correction (net-of-inventory):** backing 4.2 → 2.5. Apyx's post-mortem confirmed the public dashboard had lumped Protocol Owned Liquidity and the net-zero Inventory line into "Cash"; net of Inventory the reserve is ≈74% STRC (vs ≈66% gross), with reflexive POL — more concentrated and lower-quality than previously scored.

---

*This report describes Apyx as of mid-2026. Live values for supply, reserves, collateralization, Curve depth, and bridge conservation are on the [live dashboard](https://tidresearch.com/dashboards/?asset=apxusd). Some information (cash composition, redemption mechanics, on-chain wallet keys) remains issuer-attested only. Securities balances and brokerage are CPA-attested by Wolf & Company under AICPA standards. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
