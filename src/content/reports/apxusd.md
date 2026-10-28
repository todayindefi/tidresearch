---
asset: "apxUSD"
slug: "apxusd"
aliases: ["apxUSD", "Apyx USD", "apxusd-retail"]
chains: ["eth", "base", "bnb"]
category: "stablecoin"
peg_mechanism: "rwa-synthetic"
assessment_type: "light"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=apxusd"
trust_disclaimer: true
date: "2026-04-10"
last_verified: "2026-08-25"
# Scope-limited pass on the 2026-08-31 Strategy 8-K. ⚠️ `last_verified` is
# deliberately NOT bumped — it stamps a whole-body re-read and this was the
# buyback/runway material only.
# ⚠️ 2026-09-09: bridge Safe re-read on-chain — 3-of-6 -> 4-of-7 at block
# 25,877,589 (2026-08-31). The 08-25 owner-set-identity finding was CORRECT WHEN
# WRITTEN; the asset moved under it. `last_verified` HOLDS.
last_revised: "2026-10-26"
featured: false
production: true
# issuer: withheld pending review — this report states the issuing entity is
# Preference Foundation, and describes Apyx as "appearing separate" from DFDV as
# a legal entity. "Apyx (DFDV-affiliated)" therefore names neither the entity the
# report identifies as the issuer nor a relationship the report asserts. Restore
# only with the legal issuer confirmed against the body.
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer.
#   structural_score 4.5 is NEW. ⚠️ It is NOT a re-scope off Issuer — Issuer's
#     5.0 explicitly prices BEHAVIOUR ("not the contract layer"), so the control
#     surface was scored nowhere rather than scored twice.
#   ⚠️ underlying_score 5.0 -> 3.0, and the published 5.0 was UNSOURCED — no
#     rationale row existed anywhere on this page, only the frontmatter field.
#     Adopting riskAnalyst's authored 3.0 rather than defending an unargued
#     number. Contrast usdat, whose 5.5 IS argued.
#   ⚠️ Migrating changes what underlying_score MEANS here — off-frame it is
#     collateral quality, on-frame it is Dependencies — so the value had to be
#     decided WITH the migration.
axis_frame: six
peg_mechanism_score: 3.5
backing_score: 3.0
liquidity_score: 3.5
issuer_score: 5.0
underlying_score: 3.0
structural_score: 4.5
overall_score: 3.5
# audited_reserves: withheld — the reserves are only partly examined, and the
# unexamined part is the one this report keeps flagging. Wolf's engagement narrowed
# to securities-only after 2026-03-31 and the June 2026 report "again excluded cash",
# so the largest reserve component has had no CPA coverage for months; the body also
# states this is "not a full financial-statement audit". `true` asserts the opposite.
---

# apxUSD — Risk Report

**Significant risk · 3.5/10**

apxUSD is a $1-target stablecoin from Apyx, a young protocol (live since Feb 2026) backed primarily by **Strategy's STRC perpetual preferred shares**, plus a cash sleeve and protocol-owned liquidity. The yield from the backing flows to Apyx's sibling token apyUSD; apxUSD holders forgo yield in exchange for stablecoin functionality. Supply grew rapidly into the hundreds of millions after launch.

apxUSD broke its peg in June 2026. At the dated **October 26 14:47:09 UTC** review, attested coverage was **100.2146% netted / 100.1125% gross**, with only **$325,186.68 surplus**. That snapshot does not restore a guaranteed $1 exit. [Live dashboard](https://tidresearch.com/dashboards/?asset=apxusd).

| Peg | Yield | Exit | Age | Chains |
|---|---|---|---|---|
| $1 target, RWA-backed synthetic (broke peg June 2026) | None (yield routes to apyUSD) | DEX (Curve) or Apyx USDC settlement (opaque) | about 6 months | Ethereum, Base, BNB Chain |

## Score breakdown

Every axis now states its reason.

| Dimension | Score | Notes |
|---|---:|---|
| Stability | 3.5 | The June 2026 depeg is the record and the post-mortem is on the page above, but the recovery gate this report set has been met on both legs. ⚠️ **It stops at 3.5 on a measurement, not a judgement: apxUSD has never traded at or above $1.00 in 722 readings** (maximum $0.994716) |
| Backing | 3.0 | October 26 attested CR 100.2146% netted, 100.1125% gross; surplus $325,186.68. A 1%/5% STRC-bucket haircut gives matched-netted CR 99.3736%/96.0099%; raw custody and marks remain incompletely verified. |
| Liquidity & Exit | 3.5 | October 26 14:52:29 UTC market-notional quotes: $50K → $49,857.89; $100K → $99,644.08. Issuer redemption reachability remains unmeasured. These are execution quotes, not $1 recovery guarantees. |
| Dependencies | 3.0 | October 26 STRC share 44.04% gross, 58.11% excluding inventory and approximately 83.91% on netted assets. Raw STRC Overall 3.0; common issuer and custody dependencies remain concentrated. |
| **Contract & Admin** | **4.5** | **Three Safes: token governance 4-of-6 behind 72h, STRCx custody 3-of-6 with no delay, bridge 4-of-7 with no delay.** ⚠️ **The custody leg binds** — same owner set as governance, no wait, over the reserve asset. Argued under [5 · Contract & Admin](#5--contract--admin--45) |
| Issuer | 5.0 | Unchanged, and deliberately about **behaviour rather than the contract layer** — the June operational failures are what stepped it down |
| **Overall** | **3.5** | ⚠️ **Deliberately below the 3.75 axis mean.** The mean is lifted by Contract & Admin 4.5 and Issuer 5.0 — the axes this asset is strongest on — while the binding constraint for a dollar-denominated token is the par it has not reached |

## 1 · Stability — 3.5

*The peg-history measurements below retain their October 4 observation window. They are historical context; October 26 reserve and issuer facts are dated separately in Backing and Dependencies.*

### The June 2026 depeg

apxUSD broke peg in the first week of June 2026. Two things happened at once:

- **The collateral de-anchored.** Strategy's STRC preferred — the dominant reserve asset — fell well below its $100 par, to an all-time low around $74.57 in late June. That is a direct mark-to-market hit to a reserve that is **mostly STRC**. (This is historical price context; the October 26 underlying marks are dated in Backing.) (Note: STRC's old "drift below ~$95 forces a dividend hike to defend par" reflex was itself removed by Strategy's 06-29 framework — par defense is now a discretionary soft floor; see the update box at the top.)
- **Holders headed for the exit.** A meaningful share of supply was redeemed/sold over the same window, so reserves shrank faster than supply.

The result: apxUSD traded at a material discount and Apyx's own attestation feed went to a **persistent, issuer-attested sub-100% collateral ratio**, where it stayed for months. ✅ **That condition has now cleared: the ratio has held at or above par continuously since 2026-09-17**, 393 consecutive hourly readings, attested 101.5602%. The first-week trough was into the **low-90s on the dollar and a mid-90s% collateral ratio**; through late June the dislocation *deepened* to about **$0.82 (roughly −18%) with a collateral ratio near 84%**. That is not a transient mark-to-market wobble; it is a real shortfall, and it has now run for months rather than weeks. The October 26 snapshot has coverage above 100%; the remaining surplus is thin. Because apxUSD has **no atomic on-chain redemption** — no contract you can call to swap one apxUSD for a dollar of collateral — there is no built-in arbitrage to force the price back to $1. Recovery depends on STRC re-rating (now on the soft-floor bid) and on Apyx restocking reserves through its off-chain pipeline.

Treat the specific discount and collateral ratio as a **moving event, not a fixed number** — check the [live dashboard](https://tidresearch.com/dashboards/?asset=apxusd) for the current values. (One caveat: Apyx pulls its own secondary-market depth off-hours by design, so weekend snapshots overstate the steady-state dislocation.)

### Peg & yield dynamics

**apxUSD is designed to trade at $1 — and in June 2026 it didn't.** Peg integrity rests on three things, all of which the depeg tested:

1. **STRC + cash backing holds its value.** STRC fell well below par, directly cutting reserve value. As of 06-29, Strategy defends STRC value with a discretionary soft floor (buyback / reserve) rather than a reflexive sub-$95 dividend hike — a bid under the price, not a peg. STRC is a ≈1-year-old instrument, not yet tested through a prolonged BTC drawdown or an MSTR equity-raise pause.
2. **The Alpaca brokerage and the STRCx Safe hold what's reported.** Wolf's monthly CPA examinations independently verify the securities sleeve at two snapshot dates per month, and the STRCx Safe at [`0x37b0779a…`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555) is verifiable on-chain in real time. Wolf does not opine on the cash sleeve after the April scope narrowing.
3. **Secondary depth absorbs flows.** It did not absorb the June redemption wave at par.

**What broke the peg, and what restores it:** STRC de-anchoring on a concentrated reserve plus a redemption wave pushed collateralization below par, and with no atomic redemption there was no automatic arbitrage to close the gap. ⚠️ **The collateral gap closed through the reserve recovering rather than through any redemption mechanism, and it closed for good on 2026-09-17** — which is the point: the same absence of arbitrage that let it open means nothing holds it shut. The path back to $1 depends on reserve value and functioning exit arbitrage. Strategy’s discretionary repurchases can support STRC’s mark but do not refill Apyx reserves or guarantee redemption. October 26 coverage is above 100% with a thin surplus, as detailed in Backing.

**"Apyx 2.0" — an announced redemption redesign (June 15, 2026).** In a follow-up to the post-mortem, Apyx outlined a reworked mint/redeem model intended to fix a flaw the June event exposed. Everyone — in calm and in stress — would mint and redeem at a single **Redemption Value**, a floor price carrying a small spread, with the dashboard's headline NAV relabeled **Total Collateral Value** so the gap between the two reads directly as the overcollateralization buffer (their worked example: $1.02 of collateral behind a $1.00 redemption floor). Approved counterparties would quote against the reserve through a structured **RFQ**. Apyx frames the redesign as closing the prior "free put option" — under the old NAV-redemption logic, the first redeemers in a drawdown could arbitrage the buffer at the expense of everyone who stayed, exactly the dynamic that played out in June; under Redemption Value the buffer instead accrues to long-term holders. The intent is a genuine improvement in the redemption logic. **The important caveat: this is blog-only as of this revision.** Apyx's own docs at [`docs.apyx.fi`](https://docs.apyx.fi) still describe the old mechanism (apxUSD "settled in USDC / not directly redeemable"), no contract, PSM, or cooldown change has been disclosed, and redemption stays off-chain and is now explicitly gated to "approved counterparties." Redemption Value is an announced pricing *policy*, not an enforceable on-chain mechanism — so it doesn't change the no-atomic-redemption reality behind the Peg and Backing scores, and the scores are unchanged. Read it as a credible fix that is **pending adoption into the docs and on-chain confirmation**, not as a live guarantee that Apyx now redeems at a floor.

## 2 · Backing — 3.0

The **October 26 14:47:09 UTC** Accountable snapshot reports **$289,398,701.50 reserves** against **$289,073,514.82 supply**, a **$325,186.68 surplus**. The two ratios use different, explicitly matched denominators:

| Basis | Assets | Liabilities | Collateral ratio |
|---|---:|---:|---:|
| Gross | $289,398,701.50 | $289,073,514.82 | 100.1125% |
| Attested, inventory and POL netted from both sides | $151,866,997.24 | $151,541,810.56 | 100.2146% |

The netted basis removes **$70,086,365.30 inventory** and **$67,445,338.96 protocol-owned liquidity** from both assets and liabilities. The **$127,437,270.44 STRC bucket** is **44.04% of gross reserves**, **58.11% excluding inventory**, and approximately **83.91% of netted assets**. The tokenized slice is part of that bucket, not an additional reserve.

The custody Safe held **696,380.0148426428 STRCx**, market-valued at **$69,125,066.55** using $99.2634. The remaining **$58,312,203.89 raw STRC** is an implied residual, not an independently verified brokerage position. The multiplier was **1.0972861058** and underlying STRC mark **$99.17** at this snapshot; the later $99.4099 producer quote is a separate observation. The feed's **100.09% independent CR lower bound** does not verify the raw STRC mark or custody.

On fixed netted liabilities and other reserve marks, **1% / 5% losses on the STRC bucket** produce collateral ratios of **99.3736% / 96.0099%**. A **0.2552%** loss on that bucket consumes the surplus. These are static mark sensitivities, not observed losses or guaranteed realizations. Netted starting coverage is never combined with gross liabilities. [Dated reserve evidence](/data/strategy/2026-10-26/apxusd_backing.json).

**Backing 3.0** reflects the thin surplus, concentrated STRC exposure and incomplete independent verification. The October 26 snapshot establishes no realized backing deficit. Confirmed sub-100% coverage, an adverse verified reserve mark or failed exit would warrant review.

**Backing is verifiable through two layers.** (a) A continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi) signs each snapshot from a secure enclave with a key registered on-chain. (b) Monthly third-party CPA-firm attestations by **Wolf & Company, P.C.** (Boston; AICPA examination standards) published at [`docs.apyx.fi`](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) — March 2026 and April 2026 reports both signed. The live dashboard shows reserves, supply, and collateralization; as of this revision the attested ratio is **below 100%** (see *The June 2026 depeg* above).

**Reserve composition — STRC-heavy on a net basis (corrected June 2026).** Apyx's June post-mortem clarified that the Accountable feed breaks reserves into five buckets: **STRC family, Cash & Equivalents, Protocol Owned Liquidity (POL), Inventory, and SATA**. Apyx's *public* dashboard had been folding POL and Inventory into "Cash," which made the basket look more cash-heavy than it is. Reading it correctly:

- **Inventory nets to zero and is not backing.** It's apxUSD that Apyx has minted but not yet sold — an asset offset by an equal burnable liability. Stripping it out is the honest way to count reserves.
- **Net of that Inventory line, the reserve is STRC-dominant** — about **69% STRC family**, plus roughly 19% POL and 12% cash on the current feed (it was closer to 74% / 13% / 13% when this correction was first made). Either way the point holds: net of inventory the basket is *more* STRC-concentrated than the gross figure suggests, and the drift since has moved weight into POL rather than into cash.
- **POL is reflexive.** It's protocol-owned DEX liquidity plus USDC lent into Apyx-collateralized Morpho markets, capped at **15% of reserves**. It's liquid, but it is deployed against Apyx's own assets, so it is lower-quality backing than plain cash.

The October 26 reserve snapshot leaves only $325,186.68 surplus against concentrated STRC exposure. Backing remains 3.0 on thin coverage and incomplete independent verification. Historical recovery from the summer shortfall does not establish a durable buffer.

**The qualifiers worth knowing:**
- The "Cash & Equivalents" line is not itemized in the Accountable feed — could be bank deposits, T-bills, USDC, or some mix. Not disclosed publicly.
- **Wolf is mid-tier, not Big-4.** Solid AICPA examination engagement (named auditor, professional liability) but a tier below Deloitte / PwC / EY / KPMG.
- **The April Wolf engagement narrowed scope to securities only** — cash, stablecoin, and dividends-in-motion (covered in March) all dropped out. **The narrowing has held.** Wolf's June 2026 examination, signed 2026-07-22, covers $193.3M of STRC/STRCx securities at 06-30 and again **excludes cash**. So no CPA firm has attested the cash sleeve for any date after 2026-03-31, and this now reads as the standing arrangement rather than a one-month transition.
- **apxUSD is issuer-push, not user-pull.** Mints do not atomically pull USDC from a depositor — Apyx mints apxUSD to itself and sells it on Curve / CoW Protocol for USDC. The proceeds are swept from Apyx's operational multisig to a **Kraken** deposit address (Kraken is a US-licensed exchange — the team uses it as a USDC→USD off-ramp), then routed off-chain to Apyx's brokerage at Alpaca for STRC / SATA purchases. The pipeline is institutionally normal; the disclosure gap is that Apyx hasn't published the off-ramp arrangement, and the June depeg showed this manual leg is too slow to defend the peg under a real run.
- STRC + SATA are held at Alpaca brokerage in the name of Preference Foundation (or a subsidiary). STRCx (the on-chain tokenized form of STRC) sits in [`0x37b0779a…323a555`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555), a 3-of-6 Gnosis Safe with the same six owners as Apyx's other admin Safes (identified on-chain; the 4/30 balance matches the Wolf attestation within 1%). ⚠️ **That sameness was re-measured on 2026-08-25 and is exact, across three Safes rather than two:** this custody Safe, the 4-of-6 token-governance Safe [`0xABdd8c8e…65e96`](https://etherscan.io/address/0xABdd8c8eE69e5F5180eb9352AEFFC5CeeAD65e96), and the bridge governor [`0xf9862EfC…3cE2`](https://etherscan.io/address/0xf9862EfC1704aC05e687f66E5cD8c130E5663cE2). ⚠️ **Re-read on-chain 2026-09-09, that sameness is no longer exact and the bridge is the reason:** the token-governance and custody Safes still hold the **identical six owners**, but the bridge Safe moved to **4-of-7** at block 25,877,589 on 2026-08-31 — one owner added, threshold raised — so it now holds those six **plus one exclusive signer**.

**Six people still hold three hats.** Four of them satisfy token governance, **three of them satisfy this custody Safe**, and four of them satisfy the bridge, so **the six reach all three doors and the seventh signer opens none they cannot.** ⚠️ **The 3-of-6 custody hat is now the only one with both a low quorum and no delay: any three of those six can move this collateral without touching the 72-hour delay that governs the token.** The bridge closed its quorum gap on 08-31 and keeps its delay gap. The owner-set identity and thresholds are measured on-chain; the role attributions are read from this coverage's records. See the [apyUSD report](/reports/apyusd/) for the full write-up and the correction history behind it. The Safe has no time-delay on transactions — same admin gap as the cross-chain bridge layer.
- The Accountable TEE feed proves what Apyx feeds the enclave; it does not audit the custodian or the wallet keys themselves. Wolf's monthly examinations close part of that gap on the securities balances, but no examination opines on the on-chain wallet's key-management posture.

**A note on "solvent."** In its post-mortem Apyx says it "remained solvent throughout — reserves exceeded the *market* value of supply." That is a weaker claim than reserves covering supply at **par ($1)**. By the stricter, standard measure — collateral ratio versus par — apxUSD has been below 100%. Both framings are true; the par-based one is the conservative one, and it's the one that matters when you're holding a token that's supposed to be worth a dollar.

## 3 · Liquidity & Exit — 3.5

At **October 26 14:52:29 UTC**, the reviewed market-notional route returned **$49,857.89 on $50K** and **$99,644.08 on $100K**. Fees and route effects are included; these are indicative market-value executions, not recovery at $1. Issuer redemption reachability remains unmeasured. The shared backing feed supplies this ladder; the separate venue-inventory feed supplies no executable depth.

**Entry:** Mint at Apyx (manual, EIP-712 signed order workflow) or buy on the Curve apxUSD/USDC pool on Ethereum. The Curve pool is the realistic retail entry and exit venue.

**Exit:**
- **Retail size:** Sell on Curve apxUSD/USDC (live depth on the dashboard's Secondary Liquidity panel). During the June depeg, observed exit cost rose sharply and the pool traded at a discount to par — the "institutional-grade, $100K clears under 25 bps" depth described in earlier revisions did **not** survive the stress event. Apyx pulls its own secondary depth off-hours by design, so depth and slippage swing with the time of day and the stress state; check the live panel before sizing.
- **Larger size:** Apyx offers redemption in USDC, but the mechanism isn't publicly documented — no published timeline, no PSM, no on-chain guarantee. Effectively trusts Apyx to liquidate STRC into USDC and pay out when requested.

The durable finding on this axis is that secondary depth is **variable and issuer-discretionary**, not the dependable book earlier scores implied — which, together with a peg that has been dislocated continuously since June (currently around $0.94, having been as low as about $0.82, with KyberSwap aggregator depth rather than weekend pool depth the canonical exit mark), is why the **Liquidity axis sits at 3.0**. The narrowing discount improves the *level* of the exit mark without changing the finding: depth still varies with the issuer's own participation and the time of day. Two related constraints live on other axes: **coordinated-run capacity** (secondary depth is a small fraction of supply, a backing/buffer concern) and **redemption-mechanism opacity** (the undocumented off-chain settlement path, a peg-mechanism concern).

## 4 · Dependencies — 3.0

The dominant path is **apxUSD → raw STRC or STRCx → Strategy**. Apyx’s STRC bucket is **44.04% gross / 58.11% excluding inventory / approximately 83.91% of netted assets** in the October 26 snapshot. These bases answer different questions; protocol inventory and POL do not diversify the terminal issuer. Holding apxUSD and apyUSD together does not diversify this exposure.

Strategy's [October 26 8-K](https://www.sec.gov/Archives/edgar/data/1050446/000119312526431146/mstr-20261026.htm), accession **0001193125-26-431146**, covers October 19–25. General USD Cash fell **$447.3M → $242.4M (−45.8%)**, funding **$204.9M / 2,068,459 STRC shares** of repurchases. The separate USD Reserve held **$4.83B** at disclosed precision. Preferred repurchase authorization remaining was **$956.8M** under the existing $3B program. There were **no ATM share sales and no BTC purchases or sales**; holdings remained **848,517 BTC**. Authorization is permission to spend, rather than funded liquidity or a contractual price floor.

The repeated depletion without refill underlies [MSTR](/reports/mstr/) Funding **3.0**, Overall **3.5**, and [raw STRC](/reports/strc/) Counterparty and Overall **3.0**. The unchanged service reserve, effective 12% rate, lower future coupon burden and functioning near-par bid provide counterevidence. Depletion of the buyback cash pocket is distinct from exhaustion of dividend-service funds. The aged STRC outstanding-count base makes derived share counts, absolute service totals and runway **provisional**; no precise modeled service life or dividend-default date is established.

November daily STRC dividends at 12% remained **conditional in this pre-vote review**: the October 28 vote, approval by October 31 at 17:00 New York time, and designation effectiveness by November 1 at 00:01 Eastern were still required. The October 26 filing does not establish approval or effectiveness. Replacement daily dividends and the November 15 dividend must not be added together. Neither declaration nor a cadence change automatically establishes wrapper receipt, accrual or pass-through.

**Dependencies 3.0** reflects the existing concentrated exposure and verification limits. The lower raw-STRC credit assessment now equals that dependency anchor; no additional score change or new custody assurance is implied.

## 5 · Contract & Admin — 4.5

**Three Safes, not one.** Token governance is **4-of-6 behind a 72-hour timelock**; STRCx custody is **3-of-6 with no delay**; the bridge is **4-of-7 with no delay**.

⚠️ **The binding constraint is the custody leg: three keys and no wait, over the reserve asset, on an owner set identical to token governance.** **A delay is only a delay if the people it binds have no faster door**, and here they do.

✅ **Held at 4.5 rather than lower** on a genuine audit stack — Quantstamp, Certora formal verification and Zellic — and a guardian role that can cancel scheduled operations.

## 6 · Issuer — 5.0

**Backers + audits + contract layer are solid; the June depeg exposed the operations:**

- **Backed by DeFi Development Corp (DFDV)**, a Nasdaq-listed company. Joseph Onorati (DFDV CEO) is publicly named. Investors include ParaFi, Pantera, Kraken Ventures, Wintermute Ventures, GSR.
- **Three audits:** Quantstamp (Feb 2026), Certora (Mar 2026 — formal verification, 1 high-severity finding fixed), Zellic (Mar 2026). Solid stack.
- **Admin posture (verified on-chain):** Token governance is a **4-of-6 Safe behind a 72-hour timelock**, with a distributed guardian role that can cancel scheduled operations. ⚠️ **Read that as one of three doors rather than as the admin posture.** The same six people also hold a **3-of-6 custody Safe over the STRCx collateral with no delay at all**, and a **4-of-7 bridge Safe**, also undelayed. **The binding constraint is not four keys plus 72 hours — it is three keys and no wait, over the reserve asset.** See the topology above; this is what Contract & Admin scores.

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
- Needing instant guaranteed exit at $1 — the documented redemption mechanism is opaque, secondary depth is issuer-discretionary, and although the collateral ratio has held par or better since 2026-09-17, **the market price has not: apxUSD has never traded at or above $1.00 in 722 readings.**
- Needing a Big-4 audited financial statement — what's published is a monthly Wolf & Company AICPA examination (real CPA-firm opinion, but mid-tier and currently scoped to securities only), not a full financial-statement audit.

## What to watch

- **Collateral ratio back to ≥100%, sustained.** The single most important recovery signal — live on the dashboard's Backing panel. A sustained return to par (not a one-snapshot blip) is what would justify re-rating.
- **STRC price and funding of the discretionary bid.** October 26 general cash was $242.4M, service reserve $4.83B and unused authorization $956.8M. Authorization does not replenish cash; monitor actual refill, funding mix and repurchases.
- **Wolf attestations — whether cash ever returns to scope.** The June 2026 examination (signed 07-22) again covered securities only. Each further securities-only report leaves the cash sleeve without CPA coverage for longer; a return to the March full-balance scope would restore the disclosure stack to its high-water mark.
- **Curve apxUSD/USDC pool depth and discount** (live on dashboard). Recovering depth and a narrowing discount = healing; widening = renewed stress.
- **MSTR / BTC drawdowns.** A severe BTC crash compresses MSTR equity → threatens STRC dividends → degrades apxUSD backing further.

## A note on the apyUSD sibling

If you're considering the yield-bearing apyUSD wrapper, see the [apyUSD report](/reports/apyusd/). apyUSD captures the dividend stream (≈13% APY ongoing) but exits through a **3-to-20-day unlock window with a declining fee** (and now sits on top of the same below-par collateral). The two products are claims against the same Apyx + STRC backing — holding both doesn't diversify.



**October 26 targeted scope:** inherited filing, dated reserve/quote facts and active dependency rationale only. Full verification dates, scores and publication status are unchanged. Governance, custody and primary redemption were not re-audited. [Reviewed source snapshots](/data/strategy/2026-10-26/sources.json).

## Revision history

- **2026-10-26 — factual dependency propagation.** Incorporated accession 0001193125-26-431146, dated reserve and exit observations, provisional outstanding-count/runway limits and conditional November dividends. Scores and full verification dates unchanged. Broader shared-source/history-format migration remains deferred.

> **Update (2026-08-18) — the gap has closed most of the way, and the scores do not move. Peg 2.5 / Backing 2.0 / Liquidity 3.0 / Issuer 5.0 / Overall 3.0, all held.**
>
> The figures in the sections below describe a materially worse position than the current one, and the correction matters in both directions. **Current state, re-read 2026-08-23 (feed timestamp 09:45:59Z)** there is **one shortfall, not two: $4,399,857.64** against supply of **$312,073,514.82**. That is Accountable's own `surplus_usd` figure, and it is simply supply minus reserves of $307,673,657.18.

> **Update (2026-06-29/30) — scores cut to current: Peg 3.5 → 2.5, Backing 2.5 → 2.0, Liquidity 3.5 → 3.0, Overall 3.6 → 3.0 (Issuer held 5.0). Plus: the STRC collateral now carries a discretionary soft floor.** Two things this catch-up reflects. **(1) The depeg deepened through late June.** What earlier sections describe as a "low-90s on the dollar / mid-90s% collateral ratio" was the *first-week trough*, not the current state — apxUSD has since traded as low as **~$0.82 (≈−18%)** and Apyx's attestation feed fell to a collateral ratio of **~84%** (a ~16% buffer deficit vs par), sustained for weeks. That drives the score cuts to the levels above (live values on the [dashboard](https://tidresearch.com/dashboards/?asset=apxusd)). **(2) Strategy's 06-29 8-K put a soft floor under STRC.** The "Digital Credit Capital Framework" changed how Strategy defends STRC — from a reflexive "hike the dividend if STRC trades sub-$95" ratchet to a **discretionary soft floor** (Strategy may buy STRC back via a $1.0B STRC-priority program, or draw a near-doubled $2.55B reserve, but makes no commitment to return STRC to par). For apxUSD's ~74%-net STRC basket this is **modestly stabilizing, not score-improving**: a discretionary issuer bid now cushions STRC's mark, but it does **not** restock Apyx's reserve or lift the ~84% collateral ratio. Mark the STRC sleeve to its live secondary price *with that floor beneath it*, not to a par-defense recovery. The old "watch for STRC back above ~$95" recovery trigger is superseded — recovery now tracks STRC re-rating on the soft-floor bid plus Apyx restoring collateral ≥100%.

- **2026-10-04 — the recovery gate is met; Stability 2.5 → 3.5, Backing 2.0 → 3.0, Liquidity & Exit 3.0 → 3.5, Overall 3.0 → 3.5 (Dependencies 3.0, Contract & Admin 4.5, Issuer 5.0 held).** The attested collateral ratio holds **101.5602%**, a $2,749,710 surplus, at or above par continuously since 2026-09-17 across **393 hourly readings**, and STRC marks **$99.41**. ⚠️ **Three things hold the re-rate down and are not incidental.** apxUSD has **never traded at or above $1.00 in 722 readings** (max $0.994716), so the discount outlived the backing recovery — which is what no atomic redemption looks like. **Backing's gain comes from the divisor:** the coverage hole and the "no buffer" condition both dropped out, while the look-through baseline **fell 5.7 → 4.71** as the collateral's own score weakened. And **in the October 4 observation window, measured depth was flat** — derived mean 5.613 before 09-22 against 5.570 after — with both ladders censored at $100,000 (`is_floor: true`), so Liquidity moves half a notch for a removed distortion rather than for depth gained.
- **2026-08-23 — collateral figures re-read; scores held (Peg 2.5 / Backing 2.0 / Liquidity 3.0 / Issuer 5.0).** The attested collateral ratio reads **98.017743%** — a **netted** figure excluding **$50.20M of protocol-owned liquidity and $39.92M of minted-but-unsold inventory from both sides**, published beside gross totals. The shortfall on gross supply is **$4,399,857.64**; an independent lower bound reads 98.57%. **The recovery gate is par or better on the attested feed, sustained.** ⚠️ **That gate was not met at this date, and the early readings that looked like it were noise: the ratio crossed par 21 times between 09-04 and 09-17.** The clean break is 2026-09-17 — see the 2026-10-04 entry. **What can be said is that the condition has started being met rather than remaining unmet.**
- **2026-08-18 — collateral and peg figures refreshed; scores held.**
- **2026-07-13 — STRC weekly 8-K anchor refresh; scores held.**
- **2026-06-29 — STRC soft-floor reframe** following Strategy's 8-K.
- **2026-06-25 — depeg deepened.**
