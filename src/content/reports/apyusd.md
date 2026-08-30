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
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#   backing_score 2.0 is NEW and is the LOWEST axis on this report. Inherited
#     from apxUSD, whose reserve this share's value rests on: below par on both
#     of the issuer's published bases, roughly 74% STRC family net of inventory,
#     ~13% reflexive POL. ⚠️ This report had no backing axis at all, so the one
#     thing actually driving the 3.0 was scored nowhere.
#   underlying_score 3.0 is RETAINED and now renders as DEPENDENCIES, tracking
#     apxUSD's OVERALL rather than its reserve — a different question from
#     Backing, and the reason the two differ by a point. The chain is
#     apyUSD -> apxUSD -> STRC -> MSTR -> BTC, and holding apxUSD alongside
#     this does not diversify.
#   liquidity_score 3.5 unchanged; both legs land together and the binding
#     constraint is named in the axis prose — BOTH exits terminate in a
#     below-par asset, which is what holds the axis down rather than depth.
#   structural_score 5.0 is Contract & Admin already. volatility_score is the
#     Stability key. issuer_score unchanged at 5.0.
# ⚠️ `redemption_score: 3.5` is RETAINED but no longer rendered: it is the
# evidence for axis 3, and both legs are stated in prose under that heading.
axis_frame: six
volatility_score: 6.5
backing_score: 2.0
liquidity_score: 3.5
underlying_score: 3.0
structural_score: 5.0
issuer_score: 5.0
redemption_score: 3.5
overall_score: 3.0
---

# apyUSD — Risk Report

**Significant risk · 3.0/10**

## What this actually is

apyUSD is the yield-bearing wrapper around [apxUSD](/reports/apxusd/) — deposit apxUSD, receive apyUSD shares, and the share value grows as Apyx's STRC-backed collateral pays dividends. Ongoing yield is **≈13% APY**, within STRC's 11-15% indicated-rate range. Where apxUSD holders forgo yield for stablecoin functionality, apyUSD holders accept an exit window — a **3-to-20-day unlock with a declining fee** — in exchange for the dividend pass-through, or take a DEX two-hop for retail-scale exits in minutes.

⚠️ **The vault's own mechanics are sound. The asset underneath it is not.** apxUSD is below par on both of its issuer's published bases, and apyUSD trades at a discount to its NAV. **Everything that makes this report a 3.0 comes from one layer down.**

| Yield | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ≈13% APY ongoing | DEX two-hop (retail) or 3-to-20-day unlock window (institutional) | Minutes (sub-$1M via DEX) or 3–20 days (canonical) | ≈3 months | Ethereum, Base |

## 1 · Stability

**Reference: NAV, denominated in apxUSD.** apyUSD has no $1 peg — it is a NAV-accruing vault share, and the NAV is the apxUSD-per-share ratio, growing as the STRC backing pays dividends.

⚠️ **Which is why a healthy NAV here is not a healthy position.** The NAV is measured in a unit that is itself below par, so **the share can accrue perfectly while what it accrues in loses value.** apyUSD has traded at a **meaningful discount to NAV — mid-single-digit to about −9%** during stress. Treat the specific discount as a moving figure and read it live on the [dashboard](https://tidresearch.com/dashboards/?asset=apyusd).

⚠️ **A units trap worth naming, because the obvious calculation gives a badly wrong answer.** Published supply is denominated in **shares** (131,316,281); published backing is in **dollars** ($185,967,679). Dividing one by the other returns **141.6%**, which reads as a $54.7M surplus. **That surplus does not exist.** The correct comparison is backing against supply *valued at NAV* — $185,967,679 against $185,967,679 — **a vault-share identity that is true whatever apxUSD is worth, and says nothing about solvency.** **If you are checking this vault's numbers yourself, confirm the units before dividing.**

**On the headline yield:** NAV jumped **≈33% in week 1** (Feb 20-27, 2026) from a one-time launch-seed event — donation-pattern apxUSD inflows from a small set of addresses. Since week 2 it has grown smoothly at roughly **13% APY**. ⚠️ **A new buyer earns the ongoing rate and does not capture the launch jump**, and at the current collateral ratio that 13% does not compensate for the backing and exit risk underneath it.

## 2 · Backing

⚠️ **The vault is 100% collateralized by construction and that fact is meaningless.** It is denominated in apxUSD, so shares always equal the assets they represent. **The collateral ratio that matters to an apyUSD holder is apxUSD's**, and it is below par.

**Two ratios circulate and they are the same book measured two ways — both the issuer's:**

| basis | ratio | what it excludes |
|---|---:|---|
| **netted** — the headline attestation | **98.0177%** | protocol-owned liquidity ($50.20M) and minted-but-unsold inventory ($39.92M), removed from *both* sides |
| **gross** | **98.5901%** | nothing — reserves over supply |

⚠️ **This is not a disagreement and not a gap between the issuer and us.** Both are published by Accountable, and the netted figure reconciles exactly: `(reserves − POL − inventory) / (supply − POL − inventory)` returns 98.017743%, matching the attested headline to four decimal places.

**Our independent lower bound is 98.5289%**, computed gross after stripping the roughly **$190,970** premium at which on-chain STRCx trades over the underlying STRC NAV. **Against the issuer's gross figure that is 0.06pp stricter** — what a conservative bound should be, and exactly the size of the premium removed.

**The shortfall is one number, not two: $4,399,857.64** against supply of **$312,073,514.82**, read 2026-08-23. That is Accountable's own `surplus_usd`, and it is simply supply minus reserves of $307,673,657.18.

⚠️ **The composition is worse than the ratio suggests.** Net of the Inventory line — minted-but-unsold apxUSD, an asset offset by a burnable liability rather than real backing — the reserve is roughly **three-quarters STRC family (≈74%)**, more concentrated than a gross reading implies, plus ≈13% cash and ≈13% **reflexive POL** deployed against Apyx's own assets and capped at 15% of reserves. **STRC currently sits at about 60% of reserves, above the 55% single-issuer threshold this coverage flags elsewhere.**

**Backing is 2.0, inherited from [apxUSD](/reports/apxusd/) and the lowest axis here.** ⚠️ **The portion we can check independently marks better than the attestation; the portion we cannot check is the larger one.**

## 3 · Liquidity & Exit

**Two exit paths, and which binds depends on size. The axis takes the worse one — here they land together at 3.5, and the binding constraint is that both terminate in a below-par asset.**

**Retail-scale, sub-$1M — DEX two-hop, minutes to cash.** Sell apyUSD → apxUSD on Curve, then apxUSD → USDC. ⚠️ **Both legs price the apxUSD discount in**, so the cash received reflects the below-par value, not NAV. Trading on the apyUSD/apxUSD pool is sporadic and market-maker driven, and **Apyx pulls its own depth off-hours by design.** Backup venues exist on PancakeSwap V3 and smaller Uniswap V4 pools. **Depth on the Jupiter-routed STRCx venue is thin at roughly $180K**, which bears directly on the arithmetic one layer down.

**Canonical — a 3-to-20-day window with a declining fee.** Burn apyUSD, enter the UnlockToken window, and **exit faster by paying more: the fee declines linearly from ≈3.5% at about 3 days to ≈0.1% at the full ≈20 days.** It is **not** a flat 20-day cooldown. The max window was shortened from 30 to 20 days by the Apyx admin on 2026-04-15, verified on-chain, and remains admin-mutable subject to a 72-hour visibility window.

⚠️ **The window is both an exit cost and the protocol's anti-bank-run feature** — Apyx's June post-mortem credits it with preventing a run by disincentivizing the simultaneous exits that would have forced more STRC selling. **For institutional sizing it binds, and it exposes the holder to several more days of collateral drift before the terminal apxUSD is even received.**

Because the canonical path terminates in apxUSD, this asset inherits the underlying's redemption model. Apyx's "Apyx 2.0" plan to move apxUSD mint/redeem to a single Redemption Value floor would improve the terminal asset — **but it is blog-only, not in docs or on-chain, and it changes nothing about this vault's own window.**

## 4 · Dependencies

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

## 5 · Contract & Admin

**The vault itself is clean.** A source review against a Sourcify full match confirms **no privileged share-mint backdoor** — issuance follows the standard ERC-4626 deposit path, with apxUSD transferred in before shares mint. **The inherited risk comes from what depositors bring in, not from the wrapper.** Three audits back the protocol (Quantstamp, Zellic, and Certora with formal verification); **there is no bug bounty.** The vault has had one observable implementation upgrade, about a month after launch, and future upgrades carry a 3-day window for the guardian role to cancel.

⚠️ **The admin finding is not in any single row. It is in the intersection.** Measured on Ethereum, three separate Safes govern the Apyx surface — and **all three owner sets are identical: six shared, zero exclusive to any of them.**

| Safe | Threshold | Function |
|---|---|---|
| [`0xABdd8c8e…65e96`](https://etherscan.io/address/0xABdd8c8eE69e5F5180eb9352AEFFC5CeeAD65e96) | **4 of 6** | Token governance (AccessManager admin), behind the 72-hour timelock |
| `0xf9862EfC…3cE2` | **3 of 6** | Cross-chain bridge governor, no delay |
| [`0x37b0779a…a555`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555) | **3 of 6** | STRCx collateral custody (≈$76M), no delay |

⚠️ **So the 72-hour timelock is not a control over these people. It is a control over one of the three doors they hold.** Four of the six move the token and wait three days. **Any three of the same six move tokens across chains, or move the STRCx collateral, and wait for nothing.** **A delay is only a delay if the people it binds have no faster door.**

⚠️ **Read the evidence boundary before weighting this.** **The owner-set identity and the thresholds are measured on-chain and are the hard fact.** **Which function sits at which address is the softer half** — the bridge attribution is read from a 2026-08-22 walk rather than re-derived, and the custody attribution comes from this coverage's own STRCx records. **If a role label here is wrong the concentration finding is unaffected**, because three identical owner sets is what drives it, and that is the measured part.

⚠️ **This is the same shape as the [frxUSD](/reports/frxusd/) finding, and it generalises: per-contract rows can each be correct while the composite is the risk, and the composite exists only in the comparison.** Three rows reading 4-of-6, 3-of-6 and 3-of-6 tell you nothing about how many distinct people stand behind them. **That number appears only when you intersect the sets, and nothing in any row prompts you to.** Here the intersection returns six — **the honest count of people standing between an attacker and all three layers is not twelve. It is six.**

## 6 · Issuer

**Same protocol, same team, same admin as [apxUSD](/reports/apxusd/), and the axis carries the same 5.0.**

**In its favour:** DFDV (Nasdaq-listed) backing with tier-1 investors including ParaFi and Pantera; **Wolf & Company AICPA-standards attestations published monthly**; a continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi); and **Alpaca** named as the brokerage. The issuer named on the Wolf attestation is **Preference Foundation**, with Director Carolyn Kelly signing — Apyx as a legal entity appears separate from DFDV, a standard offshore-RWA structure.

⚠️ **Against, and this is what steps the axis down to 5.0:** **Wolf is mid-tier rather than Big-4, and the April 2026 engagement narrowed to securities only** — cash dropped from scope and may return. **The June depeg exposed manual off-chain plumbing too slow to defend the peg, secondary depth discretionarily pulled off-hours, and lagging communications.**

**What the same event validated**, and why the overall score sits *at* apxUSD's level rather than below it: **the apyUSD/apxUSD Morpho market took zero liquidations** — its oracle keys off the redemption rate rather than spot — **the one-way yield ratchet held, and no Morpho market booked bad debt.** Demonstrated vault-level resilience against inherited backing damage; the two roughly cancel. *(Separately, some other Morpho markets ran a stale self-managed oracle that lagged as apxUSD left $1, and are migrating to Chainlink.)*

## Who should avoid

- **Anyone treating this as a stablecoin substitute.** It is a yield-bearing vault share, currently trading at a discount to NAV (axis 1).
- **Anyone sizing above what secondary depth absorbs.** Above ≈$1M, slippage on the two-hop may force the 3-to-20-day window — and the terminal asset is below par (axis 3).
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

- **2026-08-30 — correction carried forward from the body; no score change.** An earlier pass on 2026-08-23 stated that our independent bound read **higher** than the issuer's attested ratio, and concluded the portion we can check marks better than the attestation. ⚠️ **That was an artifact of comparing our gross bound against the issuer's netted ratio** — a +0.51pp illusion, not a finding. Like for like, our bound is **0.06pp stricter**, as designed. The same pass published a second, larger shortfall of about **$6.2M**, derived by multiplying the netted ratio by gross supply; **that figure does not exist on any basis and is withdrawn.** The single correct figure is **$4,399,857.64**. **The terminal asset remains below par either way**, so nothing re-rates.
- **2026-08-25 — signer concentration measured; scores held at 3.0.** Three Safes govern the Apyx surface: token governance `0xABdd8c8e…65e96` (**4 of 6**, behind the 72h timelock), bridge governor `0xf9862EfC…3cE2` (**3 of 6**, no delay), and STRCx custody `0x37b0779a…a555` (**3 of 6**, no delay, about $76M). ⚠️ **All three owner sets are identical — six shared, none exclusive to any of them.** Six people holding three hats, so **any three of the six move tokens cross-chain or move the collateral with no delay**, and the timelock governs one of the three paths rather than the people. Owner-set identity and thresholds are measured; the role attributions are read from records.
- **2026-08-23 — apxUSD collateral basis clarified; scores held (Overall 3.0 / Underlying 3.0).** The attested collateral ratio of **98.017743%** is a **netted** figure, excluding **$50.20M of protocol-owned liquidity and $39.92M of minted-but-unsold inventory from both sides**, and is published alongside gross totals. The shortfall on gross supply is **$4,399,857.64**. An independent lower bound reads **98.5289%**, computed gross after stripping the STRCx premium over STRC NAV. **The terminal asset remains below par**, and the recovery gate — par or better on the attested feed, sustained — is unmet.
- **2026-06-29 — STRC soft-floor reframe.** See the [apxUSD report](/reports/apxusd/) for the reserve and team-trust write-up this inherits.
