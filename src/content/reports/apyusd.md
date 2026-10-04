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
# ⚠️ 2026-09-09: bridge Safe re-read on-chain — 3-of-6 -> 4-of-7 at block
# 25,877,589 (2026-08-31). The 08-25 measurement was CORRECT WHEN WRITTEN; the
# asset moved under it. ⚠️ The custody Safe is STILL 3-of-6 on the same six as
# token governance, so the quorum gap survives there. `last_verified` HOLDS.
last_revised: "2026-10-04"
last_verified: "2026-08-25"
featured: false
production: true
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#   backing_score 2.0 is NEW and is the LOWEST axis on this report. Inherited
#     from apxUSD, whose reserve this share's value rests on. ⚠️ 2026-10-04: no longer
#     below par — 101.5602% netted, continuously at or above par since 2026-09-17. roughly 74% STRC family net of inventory,
#     ~13% reflexive POL. ⚠️ This report had no backing axis at all, so the one
#     thing actually driving the 3.0 was scored nowhere.
#     ⚠️ PREMISE CHANGED — apxUSD's collateral ratio crossed back above par and
#     HOLDS since 2026-09-17 (NOT 09-11: it crossed 21 times between 09-04 and 09-17)
#     ABOVE par and has held since, on the netted basis, the gross basis and an
#     independent conservative re-mark. The score has NOT been re-derived: the
#     concentration half of the rationale is unchanged, and the margin is thin
#     (~25bp median) and days old. Noted HERE because nothing renders a comment,
#     so no sweep of published prose reaches it — the strcx shape, where a right
#     finding sat in a comment while the body stayed wrong for weeks.
#   underlying_score 3.0 is RETAINED and now renders as DEPENDENCIES, tracking
#     apxUSD's OVERALL rather than its reserve — a different question from
#     Backing, and the reason the two differ by a point. The chain is
#     apyUSD -> apxUSD -> STRC -> MSTR -> BTC, and holding apxUSD alongside
#     this does not diversify.
#   liquidity_score 3.5 unchanged; both legs land together and the binding
#     constraint is named in the axis prose — BOTH exits terminate in a
#     asset that trades below $1 — now a MARKET fact, not a backing one, since the
#     collateral ratio recovered and the discount did not. That is what holds the
#     axis down rather than depth.
#   structural_score 5.0 is Contract & Admin already. volatility_score is the
#     Stability key. issuer_score unchanged at 5.0.
# ⚠️ `redemption_score: 3.5` is RETAINED but no longer rendered: it is the
# evidence for axis 3, and both legs are stated in prose under that heading.
axis_frame: six
volatility_score: 5.5
backing_score: 3.0
liquidity_score: 3.5
underlying_score: 3.0
structural_score: 4.5
issuer_score: 5.0
# ✅ FOLD DECLARED 2026-10-04 (riskAnalyst): redemption folds into axis 3. No number
# moved on the fold — redemption 3.5 against liquidity 3.5, so neither was the worse link.
# ⚠️ NOT DROPPED: `category: vault-share` resolves to `wrappedAxes`, where this field is
# REQUIRED; deleting it fails the build. Retiring it needs the shared schema relaxed for
# all 31 reports carrying it, while riskAnalyst's own migration is incomplete.
# PARKED: retire once the schema change is scoped [owner: tidr] [since: 2026-10-04]
redemption_score: 3.5
overall_score: 4.0
---

# apyUSD — Risk Report

**Significant risk · 4.0/10**

## What this actually is

apyUSD is the yield-bearing wrapper around [apxUSD](/reports/apxusd/) — deposit apxUSD, receive apyUSD shares, and the share value grows as Apyx's STRC-backed collateral pays dividends. Ongoing yield is **≈13% APY**, within STRC's 11-15% indicated-rate range. Where apxUSD holders forgo yield for stablecoin functionality, apyUSD holders accept an exit window — a **3-to-20-day unlock with a declining fee** — in exchange for the dividend pass-through, or take a DEX two-hop for retail-scale exits in minutes.

⚠️ **The vault's own mechanics are sound; the question is what sits underneath it.** ⚠️ **apxUSD has held at or above par continuously since 2026-09-17**, 393 consecutive hourly readings — ⚠️ **and not since 2026-09-11, which is what a headline reading suggests: the ratio crossed par 21 times between 09-04 and 09-17**, with 49% of readings in that window still below 100% — above 100% on the netted collateral ratio, on the gross basis, and on an independent conservative re-mark. ⚠️ **Read the level carefully: it runs roughly 100.0–101.0%, with a median around 100.25% — about 25 basis points of surplus.** **That is a recovery, not a buffer**, it is three days old, and it sits on a book that was in deficit the week before. ✅ **What it removes is the realised undercollateralisation; it does not remove the backing concern**, which rests on concentration and on what the reserve is made of rather than on the ratio alone. apyUSD trades at a discount to its NAV. **Everything that makes this report a 3.0 comes from one layer down.**

| Yield | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ≈13% APY ongoing | DEX two-hop (retail) or 3-to-20-day unlock window (institutional) | Minutes (sub-$1M via DEX) or 3–20 days (canonical) | ≈3 months | Ethereum, Base |

## 1 · Stability — 5.5
**Reference: NAV, denominated in apxUSD.** apyUSD has no $1 peg — it is a NAV-accruing vault share, and the NAV is the apxUSD-per-share ratio, growing as the STRC backing pays dividends.

⚠️ **Which is why a healthy NAV here is not a healthy position.** ⚠️ **The NAV is measured in apxUSD rather than in dollars, so the share can accrue perfectly while the unit it accrues in moves independently.** **Through the summer that unit was below par and the effect was real; apxUSD has been above par continuously since 2026-09-17**, now attesting a 1.56% surplus. ⚠️ **But the collateral ratio and the market price are different quantities and only one of them recovered: apxUSD still trades about 1.10% below $1, and has never traded at or above $1.00 in 722 readings.** **The unit this share accrues in is sound on the balance sheet and discounted in the market**, which is what an asset with no atomic redemption looks like.

⚠️⚠️ **And the axis is cut rather than raised, with every figure behind the old number having improved.** The discount narrowed from about −9% to −1.34%, NAV rose 1.376 → 1.436830 and is strictly monotonic across 722 readings, and the underlying ratio went from roughly 95% to 101.56%. ✅ **The cut is because the smoothness was never evidence.** **apyUSD's NAV *is* `total_assets / shares`, so zero drawdown across 722 readings is a property of the formula as much as of the assets** — a share count divided into the assets it represents cannot fall out of step with itself. ⚠️ **And the mark behind those assets is thin three measured ways:** 52.18% of the STRC bucket ($80,169,860) is marked at an undisclosed issuer price; the verifiable 47.82% is marked off a venue holding about **$371K against a $70.8M position**; and this NAV has already been inflated once from this exact source — the June post-mortem records an inflated dashboard NAV from a STRCx pricing bug. ⚠️ **The only independent price signal has never agreed with it: 0 of 722 readings at or above NAV on the DEX measure, 0 of 702 on CoinGecko.** **The exposure is to whatever apxUSD is worth, in either direction — which is why the concentration below matters more than the ratio on any one day.** apyUSD has traded at a **meaningful discount to NAV — mid-single-digit to about −9%** during stress. Treat the specific discount as a moving figure and read it live on the [dashboard](https://tidresearch.com/dashboards/?asset=apyusd).

⚠️ **A units trap worth naming, because the obvious calculation gives a badly wrong answer.** Published supply is denominated in **shares** (131,316,281); published backing is in **dollars** ($185,967,679). Dividing one by the other returns **141.6%**, which reads as a $54.7M surplus. **That surplus does not exist.** The correct comparison is backing against supply *valued at NAV* — $185,967,679 against $185,967,679 — **a vault-share identity that is true whatever apxUSD is worth, and says nothing about solvency.** **If you are checking this vault's numbers yourself, confirm the units before dividing.**

**On the headline yield:** NAV jumped **≈33% in week 1** (Feb 20-27, 2026) from a one-time launch-seed event — donation-pattern apxUSD inflows from a small set of addresses. Since week 2 it has grown smoothly at roughly **13% APY**. ⚠️ **A new buyer earns the ongoing rate and does not capture the launch jump**, and at the current collateral ratio that 13% does not compensate for the backing and exit risk underneath it.

## 2 · Backing — 3.0
⚠️ **The vault is 100% collateralized by construction and that fact is meaningless.** It is denominated in apxUSD, so shares always equal the assets they represent. **The collateral ratio that matters to an apyUSD holder is apxUSD's**, and it ran below par from June until the autumn. **It has held at or above par continuously since 2026-09-17, now attesting a 1.56% surplus** — ⚠️ **while apxUSD itself still trades about 1.10% below $1.**

**Two ratios circulate and they are the same book measured two ways — both the issuer's:**

| basis | ratio | what it excludes |
|---|---:|---|
| **netted** — the headline attestation | **101.5602%** (2026-10-04) | protocol-owned liquidity and minted-but-unsold inventory, removed from *both* sides |
| **netted**, earlier reading | 98.0177% (2026-08-23) | same basis — shown so the move is dated on both ends |

⚠️ **This is not a disagreement and not a gap between the issuer and us.** Both are published by Accountable, and the netted figure reconciles exactly: `(reserves − POL − inventory) / (supply − POL − inventory)` reproduces the attested headline from the raw bucket split, to within 2.6e-05 pp across **723 of 723 readings**. ⚠️ **That tests the arithmetic, not the inputs.** It is an internal-consistency check on a single feed, not a second source — which is why the trust banner above still stands.

**Our independent lower bound is 98.5289%**, computed gross after stripping the roughly **$190,970** premium at which on-chain STRCx trades over the underlying STRC NAV. **Against the issuer's gross figure that is 0.06pp stricter** — what a conservative bound should be, and exactly the size of the premium removed.

**The shortfall is one number, not two: $4,399,857.64** against supply of **$312,073,514.82**, read 2026-08-23. That is Accountable's own `surplus_usd`, and it is simply supply minus reserves of $307,673,657.18.

⚠️ **The composition is worse than the ratio suggests.** Net of the Inventory line — minted-but-unsold apxUSD, an asset offset by a burnable liability rather than real backing — the reserve is roughly **three-quarters STRC family (≈74%)**, more concentrated than a gross reading implies, plus ≈13% cash and ≈13% **reflexive POL** deployed against Apyx's own assets and capped at 15% of reserves. **STRC currently sits at about 60% of reserves, above the 55% single-issuer threshold this coverage flags elsewhere.**

**Backing is 2.0, inherited from [apxUSD](/reports/apxusd/) and the lowest axis here.** ⚠️ **The portion we can check independently marks better than the attestation; the portion we cannot check is the larger one.**

## 3 · Liquidity & Exit — 3.5
**Two exit paths, and which binds depends on size. The axis takes the worse one — here they land together at 3.5, and the binding constraint is that both terminate in an asset that trades below $1**, which is a market fact and no longer a backing one.

**Retail-scale, sub-$1M — DEX two-hop, minutes to cash.** Sell apyUSD → apxUSD on Curve, then apxUSD → USDC. ⚠️ **Both legs price the apxUSD discount in**, so the cash received reflects the below-par value, not NAV. Trading on the apyUSD/apxUSD pool is sporadic and market-maker driven, and **Apyx pulls its own depth off-hours by design.** Backup venues exist on PancakeSwap V3 and smaller Uniswap V4 pools. **Depth on the Jupiter-routed STRCx venue is thin at roughly $180K**, which bears directly on the arithmetic one layer down.

**Canonical — a 3-to-20-day window with a declining fee.** Burn apyUSD, enter the UnlockToken window, and **exit faster by paying more: the fee declines linearly from ≈3.5% at about 3 days to ≈0.1% at the full ≈20 days.** It is **not** a flat 20-day cooldown. The max window was shortened from 30 to 20 days by the Apyx admin on 2026-04-15, verified on-chain, and remains admin-mutable subject to a 72-hour visibility window.

⚠️ **The window is both an exit cost and the protocol's anti-bank-run feature** — Apyx's June post-mortem credits it with preventing a run by disincentivizing the simultaneous exits that would have forced more STRC selling. **For institutional sizing it binds, and it exposes the holder to several more days of collateral drift before the terminal apxUSD is even received.**

Because the canonical path terminates in apxUSD, this asset inherits the underlying's redemption model. Apyx's "Apyx 2.0" plan to move apxUSD mint/redeem to a single Redemption Value floor would improve the terminal asset — **but it is blog-only, not in docs or on-chain, and it changes nothing about this vault's own window.**

## 4 · Dependencies — 3.0
⚠️ **This is a chain, not a diversified book, and every link is the same story.**

```
apyUSD  ->  apxUSD  ->  STRC  ->  MSTR  ->  BTC
 vault      the unit    ~74% of    the      the
 share      it is       reserve    issuer   collateral
            denominated
            in
```

- **apxUSD** — 100% of what this share is worth. Its overall score is what this axis tracks.
- **STRC family** — roughly **74% of the reserve** net of inventory, and about **60% on the issuer's own live figure**, above the 55% single-issuer threshold flagged elsewhere in this coverage.
- **MSTR, then BTC** — STRC is a preferred instrument junior to MSTR's convertible debt. **A severe BTC drawdown compresses MSTR equity, which compresses the dividend stream this vault exists to pass through.**

**Strategy's 2026-06-29 "Digital Credit Capital Framework"** converts STRC's par defence from a reflexive sub-$95 dividend ratchet into a **discretionary soft floor** — a $1.0B STRC-priority buyback plus a near-doubled $2.55B reserve. ⚠️ **That is a bid under STRC, not a peg**, and it stabilises the trajectory at the root without restoring par or restocking Apyx's reserve.

⚠️ **Holding apxUSD and apyUSD together does not diversify.** They are two claims against the same Apyx and STRC backing.

## 5 · Contract & Admin — 4.5
⚠️ **This axis is set equal to [apxUSD](/reports/apxusd/), and the reason is that it is literally the same admin surface.** The three Safes described below are Apyx's, not the vault's — **the wrapper adds a vault, and the vault adds no admin exposure of its own.** ✅ **A wrapper cannot be safer on admin than the thing it wraps when both answer to one set of keys**, so this sits at apxUSD's number rather than above it. **The vault's own cleanliness is real and is described below; it earns no uplift here because there is nothing to uplift past.**

**The vault itself is clean.** A source review against a Sourcify full match confirms **no privileged share-mint backdoor** — issuance follows the standard ERC-4626 deposit path, with apxUSD transferred in before shares mint. **The inherited risk comes from what depositors bring in, not from the wrapper.** Three audits back the protocol (Quantstamp, Zellic, and Certora with formal verification); **there is no bug bounty.** The vault has had one observable implementation upgrade, about a month after launch, and future upgrades carry a 3-day window for the guardian role to cancel.

⚠️ **The admin finding is not in any single row. It is in the intersection.** Measured on Ethereum, three separate Safes govern the Apyx surface — and **all three owner sets are identical: six shared, zero exclusive to any of them.**

| Safe | Threshold | Function |
|---|---|---|
| [`0xABdd8c8e…65e96`](https://etherscan.io/address/0xABdd8c8eE69e5F5180eb9352AEFFC5CeeAD65e96) | **4 of 6** | Token governance (AccessManager admin), behind the 72-hour timelock |
| [`0xf9862EfC…3cE2`](https://etherscan.io/address/0xf9862EfC1704aC05e687f66E5cD8c130E5663cE2) | **4 of 7** | Cross-chain bridge governor, no delay |
| [`0x37b0779a…a555`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555) | **3 of 6** | STRCx collateral custody — **705,956 STRCx**, read on-chain 2026-09-09, no delay |

⚠️ **So the 72-hour timelock is not a control over these people. It is a control over one of the three doors they hold.** Four of the six move the token and wait three days. ⚠️ **Any THREE of those same six move the STRCx collateral and wait for nothing** — the custody Safe is 3-of-6 on an owner set identical to the token admin's. **A delay is only a delay if the people it binds have no faster door.**

⚠️ **The size of that custody door is stated in tokens rather than dollars, deliberately.** The Safe holds **705,956 STRCx — 42.0% of STRCx supply** — read on-chain 2026-09-09. **A dollar mark on it depends on which STRC price you use and on the date you use it**, and a USD figure for this position can silently pick up a separate off-chain raw-STRC balance. **The token count is the durable number; a USD figure for this door should be quoted with its price basis and its date or not at all.**

⚠️ **The bridge leg was the same shape until 2026-08-31 and is no longer.** That Safe moved from **3-of-6 to 4-of-7** at block 25,877,589 — one owner added and the threshold raised — so **crossing chains now needs the same four signatures as moving the token, not three.** ✅ **On the bridge specifically the quorum gap is closed and what remains is a delay gap: the token side waits 72 hours, the bridge waits for nothing.** **The custody leg is where the quorum gap still lives**, and it guards the larger number.

⚠️ **Read the evidence boundary before weighting this.** **The owner-set identity and the thresholds are measured on-chain and are the hard fact.** **Which function sits at which address is the softer half** — the bridge attribution is read from a 2026-08-22 walk rather than re-derived, and the custody attribution comes from this coverage's own STRCx records. **If a role label here is wrong the concentration finding is unaffected**, because three identical owner sets is what drives it, and that is the measured part.

⚠️ **This is the same shape as the [frxUSD](/reports/frxusd/) finding, and it generalises: per-contract rows can each be correct while the composite is the risk, and the composite exists only in the comparison.** Three rows reading 4-of-6, 4-of-7 and 3-of-6 tell you nothing about how many distinct people stand behind them. **That number appears only when you intersect the sets, and nothing in any row prompts you to.**

**Read on-chain 2026-09-09, the token-admin and custody Safes hold the identical six owners, and the bridge Safe holds those same six plus one more.** So the union is seven and ⚠️ **the intersection is still six — and those six reach all three doors**, because four of them satisfy the token Safe, three of them satisfy custody, and four of them satisfy the bridge. **The honest count of people standing between an attacker and all three layers is not nineteen. It is six.** The seventh owner adds a signer to the bridge; he does not add a door that the six cannot open.

## 6 · Issuer — 5.0
**Same protocol, same team, same admin as [apxUSD](/reports/apxusd/), and the axis carries the same 5.0.** ⚠️ **That is an inherited figure, not an independent judgement: if apxUSD's Issuer score moves, this must move with it.** **The condition is stated because a borrowed score with no stated condition does not age into vagueness — it ages into a confident wrong number that still reads like a considered one.**

**In its favour:** DFDV (Nasdaq-listed) backing with tier-1 investors including ParaFi and Pantera; **Wolf & Company AICPA-standards attestations published monthly**; a continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi); and **Alpaca** named as the brokerage. The issuer named on the Wolf attestation is **Preference Foundation**, with Director Carolyn Kelly signing — Apyx as a legal entity appears separate from DFDV, a standard offshore-RWA structure.

⚠️ **Against, and this is what steps the axis down to 5.0:** **Wolf is mid-tier rather than Big-4, and the April 2026 engagement narrowed to securities only** — cash dropped from scope and may return. **The June depeg exposed manual off-chain plumbing too slow to defend the peg, secondary depth discretionarily pulled off-hours, and lagging communications.**

**What the same event validated**, and why the overall score sits *at* apxUSD's level rather than below it: **the apyUSD/apxUSD Morpho market took zero liquidations** — its oracle keys off the redemption rate rather than spot — **the one-way yield ratchet held, and no Morpho market booked bad debt.** Demonstrated vault-level resilience against inherited backing damage; the two roughly cancel. *(Separately, some other Morpho markets ran a stale self-managed oracle that lagged as apxUSD left $1, and are migrating to Chainlink.)*

## Who should avoid

- **Anyone treating this as a stablecoin substitute.** It is a yield-bearing vault share, currently trading at a discount to NAV (axis 1).
- **Anyone sizing above what secondary depth absorbs.** Above ≈$1M, slippage on the two-hop may force the 3-to-20-day window — and the terminal asset still trades below $1 even though its collateral ratio no longer does (axis 3).
- **Anyone uncomfortable with the launch-NAV structure.** Early holders captured a one-time ≈33% bump that new buyers do not (axis 1).
- **Anyone holding apxUSD already.** The two do not diversify — same backing, same issuer (axis 4).

## What to watch

- **apxUSD collateral ratio back to ≥100%, sustained.** Recovery here tracks recovery there (axes 2 and 4).
- **apyUSD discount to NAV** — narrowing is healing, widening is renewed stress (axis 1).
- **STRC price and the soft-floor bid.** Both the dividend stream and the backing recover if STRC re-rates (axis 4).
- **The Wolf attestation's cash scope**, which narrowed to securities only in April (axis 6).
- **MSTR and BTC drawdowns** — STRC dividends compress in stress (axis 4).

## A note on the apxUSD companion

The [apxUSD report](/reports/apxusd/) covers the non-yield-bearing sibling — the asset this vault wraps. apxUSD exits faster at any size, via Curve or USDC settlement, but earns no yield; apyUSD adds the dividend pass-through and the unlock window. ⚠️ **The two are claims against the same Apyx and STRC backing. Holding both does not diversify.**

## Revision history

- **2026-10-04 — the underlying's backing recovered and Stability was cut anyway; Stability 6.5 → 5.5, Backing 2.0 → 3.0, Overall 3.0 → 4.0 (Liquidity & Exit 3.5, Dependencies 3.0, Contract & Admin 4.5, Issuer 5.0 held).** apxUSD's attested collateral ratio holds **101.5602%** continuously since 2026-09-17, which carries Backing. ⚠️ **Stability moves the other way, and not for deterioration:** the discount narrowed to −1.34%, NAV rose to 1.436830 strictly monotonically, and the underlying ratio reached 101.56% — **every figure behind the previous number improved.** The cut is because NAV smoothness on a `total_assets / shares` definition is **substantially definitional**, the mark under it is 52.18% issuer-priced with the verifiable remainder struck against about $371K of venue liquidity, and **no independent price measure has ever printed at or above NAV** — 0 of 722 on the DEX, 0 of 702 on CoinGecko. **Redemption folds into axis 3; no number moved, redemption 3.5 against liquidity 3.5.**
- **2026-08-30 — correction carried forward from the body; no score change.** An earlier pass on 2026-08-23 stated that our independent bound read **higher** than the issuer's attested ratio, and concluded the portion we can check marks better than the attestation. ⚠️ **That was an artifact of comparing our gross bound against the issuer's netted ratio** — a +0.51pp illusion, not a finding. Like for like, our bound is **0.06pp stricter**, as designed. The same pass published a second, larger shortfall of about **$6.2M**, derived by multiplying the netted ratio by gross supply; **that figure does not exist on any basis and is withdrawn.** The single correct figure is **$4,399,857.64**. ⚠️ **The terminal asset's concentration is unchanged either way, so nothing re-rates on this** — and the collateral ratio, which was below par when this was written, has since crossed back above it without the concentration moving.
- **2026-08-25 — signer concentration measured; scores held at 3.0.** Three Safes govern the Apyx surface: token governance `0xABdd8c8e…65e96` (**4 of 6**, behind the 72h timelock), bridge governor `0xf9862EfC…3cE2` (**3 of 6**, no delay), and STRCx custody `0x37b0779a…a555` (**3 of 6**, no delay, about the STRCx custody Safe). ⚠️ **All three owner sets are identical — six shared, none exclusive to any of them.** Six people holding three hats, so **any three of the six move tokens cross-chain or move the collateral with no delay**, and the timelock governs one of the three paths rather than the people. Owner-set identity and thresholds are measured; the role attributions are read from records.
- **2026-08-23 — apxUSD collateral basis clarified; scores held (Overall 3.0 / Underlying 3.0).** The attested collateral ratio of **98.017743%** is a **netted** figure, excluding **$50.20M of protocol-owned liquidity and $39.92M of minted-but-unsold inventory from both sides**, and is published alongside gross totals. The shortfall on gross supply is **$4,399,857.64**. An independent lower bound reads **98.5289%**, computed gross after stripping the STRCx premium over STRC NAV. **The terminal asset's recovery gate is par or better on the attested feed, sustained.** ⚠️ **The ratio crossed above par on 2026-09-11 and has held across 48 consecutive readings, none below 100%** — running roughly 100.0–101.0%, median about 100.25%. ⚠️ **Whether three days at a ~25bp margin satisfies "sustained" is a scoring judgement and the score has not been re-derived on it.** **What can be said is that the condition has started being met rather than remaining unmet.**
- **2026-06-29 — STRC soft-floor reframe.** See the [apxUSD report](/reports/apxusd/) for the reserve and team-trust write-up this inherits.
