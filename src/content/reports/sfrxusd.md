---
asset: "sfrxUSD"
slug: "sfrxusd"
aliases: ["sfrxUSD", "Staked frxUSD", "Staked Frax USD"]
chains: ["eth", "fraxtal"]
category: "vault-share"
assessment_type: "full"
date: "2026-08-29"
last_verified: "2026-08-29"
featured: false
production: true
issuer: "Frax Finance"
underlying_assets: ["frxUSD"]
yield_bearing: true
market_cap_approx: 36232343
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
# Three axes are NEW; none is a re-judgement of anything already scored:
#   backing_score 6.5   inherited from frxUSD. This vault holds frxUSD and
#     nothing else, so it is the same reserve. ⚠️ Inherited, not judged: if
#     frxUSD's backing moves, this must.
#   underlying_score 4.5 — ⚠️ OPEN. Authored at this desk and NOT derived, and
#     it cannot be shortcut the way backing 6.5 and issuer 5.0 were: those were
#     checked against `frxusd.md` before adoption, but ⚠️ FRXUSD CARRIES NO
#     DEPENDENCIES AXIS, so there is no parent value to inherit or verify
#     against. Deriving this means first establishing frxUSD's OWN dependency
#     set, which has never been done. ⚠️ IF YOU ARE REFRESHING EITHER ASSET,
#     THAT IS THE PREREQUISITE — this axis has no other scheduled moment.
#     It renders as DEPENDENCIES and is the lowest axis
#     here on purpose. 100% through frxUSD, and the concentration runs BOTH
#     ways — this vault holds 35.58% of all frxUSD, so the two are one
#     exposure, not two. On top of that, FIP-450 (Gearbox, $5M) and FIP-451
#     (Royco, 1M frxUSD) authorise ~16.6% of the vault outward, and actual
#     utilisation against those caps has NOT been read.
#   issuer_score 5.0    inherited from frxUSD — same issuer, same claim.
#   liquidity_score 5.0 unchanged: worse-leg scoring picks the redemption path
#     (two steps, second one gated by frxUSD's ~$10M buffer) over the unread
#     secondary leg. ⚠️ Secondary depth is UNMEASURED, which is neither thin
#     nor deep — the report says so rather than letting 5.0 imply adequacy.
#   structural_score 5.0 is Contract & Admin already. volatility_score is the
#     Stability key for a NAV-referenced share.
# ⚠️ `redemption_score: 6.5` is RETAINED but no longer rendered: it is the
# evidence for axis 3, and both legs are stated in prose under that heading.
# Overall is deliberately 5.0 — one notch BELOW frxUSD's 5.5. A wrapper cannot
# outrank the asset it holds. ⚠️ If frxUSD is ever re-scored, this must move
# with it; leaving sfrxUSD above its own underlying would be incoherent.
axis_frame: six
volatility_score: 7.0
backing_score: 6.5
liquidity_score: 5.0
underlying_score: 4.5
structural_score: 5.0
issuer_score: 5.0
redemption_score: 6.5
overall_score: 5.0
---

# sfrxUSD — Risk Report

**Moderate risk · 5.0/10**

## What this actually is

sfrxUSD is the staked form of [frxUSD](/reports/frxusd/), Frax Finance's flagship dollar. You deposit frxUSD, you receive sfrxUSD, and the share price accrues yield. frxUSD itself pays nothing — **staking here is the only way to earn on it.**

⚠️ **The first thing worth knowing is how much of frxUSD lives in here.** The vault holds **36,232,343.43 frxUSD against a total frxUSD supply of 101,827,130.47 — 35.58%.** Better than a third of the stablecoin's float sits inside this one contract, which means **a reader looking only at frxUSD's supply is looking at a number that is substantially a claim on this vault.**

| Yield | Underlying | Exit | Hard yield ceiling | Chains |
|---|---|---|---|---|
| Accrues in share price | frxUSD | Unstake, then frxUSD's own redemption path | **≈4.69%/yr, contract-enforced** | Ethereum, Fraxtal (different addresses) |

## 1 · Stability

**Reference: NAV.** sfrxUSD accrues in share price rather than holding a peg, so the question is not deviation from a dollar but whether the share keeps its claim on frxUSD.

⚠️ **The yield has a ceiling written into the contract.** `maxDistributionPerSecondPerAsset` is **1.486668756e-09**, which annualises to about **4.69%**. **The vault cannot pay out faster than that, whatever the strategies earn** — it is a hard cap, not a target or a current rate.

**That gives a reader a test rather than a score: any advertised sfrxUSD yield above roughly 4.69% is not coming from this contract.** It is coming from somewhere else — an incentive programme, a points scheme, a different product, or a number computed on a different basis. **That does not make it fake, but it will not behave like the vault's own distribution under stress.**

## 2 · Backing

**The reserve is frxUSD's, inherited whole.** This vault holds frxUSD and nothing else, so a share is worth what frxUSD is backed by, and the composition, coverage and attestation questions all belong to the [frxUSD report](/reports/frxusd/).

⚠️ **The axis is 6.5, inherited rather than judged separately** — the same reserve, so the same score. **If frxUSD's backing moves, this must move with it.**

## 3 · Liquidity & Exit

**Both exit paths, and the axis takes the worse one.**

**Primary — two steps, and the second is not this vault's to control.** Unstaking returns frxUSD, and then you are in **frxUSD's own redemption path**: per-custodian, with the USDC exit gated by a buffer of roughly **$10M**.

⚠️ **Secondary — not measured, and that is a stated limit rather than an implied finding.** **Secondary DEX depth for sfrxUSD has not been looked at.** **A reader should not take the 5.0 as evidence that secondary depth is adequate**, because nobody checked. The axis is scored on the redemption path and frxUSD's own profile.

⚠️ **Unmeasured is not the same as thin, and it is not the same as deep.** It is the third outcome, and it is what this axis is carrying.

## 4 · Dependencies

⚠️ **100% of this asset's value passes through frxUSD — and the concentration runs in both directions.** This vault holds **35.58% of all frxUSD**, so the two are not two exposures. A stress in either shows up in the other.

**Beyond frxUSD, two Frax governance proposals allocate this vault's assets outward:**

| proposal | destination | cap |
|---|---|---|
| **FIP-450** | Gearbox Institutional RWA market | **$5,000,000** |
| **FIP-451** | Royco SLP — stated purpose "enhance redemption liquidity" | **1,000,000 frxUSD** |

**Together that is roughly 16.6% of the vault, authorised.**

⚠️ **Those are authorisations, not balances, and this report does not claim otherwise.** *Up to* $5M is permitted into Gearbox; **how much is actually deployed has not been read.** Establishing the real redemption impact means reading current utilisation against those caps, **and that measurement has not been done** — so what is published here is the permission, not the position.

⚠️ **Both proposals allocate sfrxUSD assets, not FRAX or frxUSD treasury.** Frax runs three adjacent tickers and the conflation is easy and expensive; this was confirmed before writing.

## 5 · Contract & Admin

⚠️ **The accessor called `timelockAddress()` is not a timelock, and the naming is the dangerous half of it.**

`timelockAddress()` resolves to `0x4b45d73b…1bc1`. Read directly, that address is:

```
Gnosis Safe v1.4.1
getThreshold()      3
getOwners()         6
getMinDelay()       reverts
MINIMUM_DELAY()     reverts
```

**A 3-of-6 multisig with no execution delay of any kind.**

⚠️ **And `owner()` reverts on the vault, so the name of that accessor is the only signal anyone gets about what governs it.** A reviewer — human or automated — who reads `timelockAddress()` and records "timelocked" **has been given a wrong answer by the interface itself**, and has no second accessor to check it against.

⚠️ **Read this as review being defeated, not as concealment.** It has the shape of an accessor kept for interface compatibility after the address behind it changed, and **nothing here supports an accusation of intent.** The honest version is also the more useful one: **the risk is that a standard admin check returns "protected" and stops, on a vault holding over a third of frxUSD's supply.**

**Three signatures, no delay, and no way to notice from the interface. That is what this axis is pricing at 5.0.**

**One deployment note:** the Ethereum address **holds 0 bytes of code on Fraxtal** — Frax's own home chain — which means **a different address there, not the absence of a deployment.** So the Ethereum supply figure is not a global one, and the Fraxtal leg is unmeasured here.

## 6 · Issuer

**Frax Finance**, and the axis carries **5.0 — the same as [frxUSD](/reports/frxusd/)**, because it is the same issuer and a holder's claim runs to the same place.

⚠️ **Frax runs three products with adjacent tickers** — FRAX, frxUSD and sfrxUSD — and the conflation has cost readers before. **Governance allocates this vault's assets by proposal**, as FIP-450 and FIP-451 show, so the issuer's decisions reach the collateral directly rather than only the parameters.

## Who should avoid

- **Anyone relying on a timelock.** There isn't one, whatever the accessor is called (axis 5).
- **Anyone buying an advertised yield above ≈4.69%.** The contract cannot pay it; find out what is (axis 1).
- **Anyone who needs a fast exit.** Two steps, and the second is gated by a buffer you don't control (axis 3).
- **Anyone reading frxUSD's supply as diversified holders.** Over a third of it is this vault (axis 4).

## What to watch

- **Actual utilisation against the FIP-450 and FIP-451 caps.** The authorisations are known; the positions are not, and that is the gap that matters for redemption (axis 4).
- **Whether `timelockAddress()` ever points at something with a delay.** Cheap to check, and the single largest improvement available here (axis 5).
- **The vault's share of frxUSD supply.** 35.58% today — rising concentration makes the two assets one risk rather than two (axis 4).
- **Any yield quoted above the 4.69% ceiling**, and where it is said to come from (axis 1).
- **Secondary DEX depth**, which nobody has measured (axis 3).
---

*Revision history: 2026-08-29 — **first publication, staged.** sfrxUSD had no coverage on this site despite holding **36,232,343.43 frxUSD — 35.58% of total frxUSD supply.** ⚠️ **The central finding is that `timelockAddress()` does not resolve to a timelock:** it points at a Gnosis Safe v1.4.1 with `getThreshold()` 3 of 6 owners, and both `getMinDelay()` and `MINIMUM_DELAY()` revert. **Because `owner()` also reverts, that accessor's name is the only governance signal the interface offers** — so a review keying on it records "timelocked" and stops. **Written as review being defeated rather than as concealment**, since the shape is consistent with an accessor kept for compatibility after the address behind it changed, and intent is not supportable from what was measured. **The most useful retail takeaway is a test rather than a score:** `maxDistributionPerSecondPerAsset` of 1.486668756e-09 annualises to a **hard ceiling of about 4.69%**, so **any advertised yield above that is not coming from this contract.** FIP-450 ($5M, Gearbox Institutional RWA) and FIP-451 (1M frxUSD, Royco SLP) are recorded as **authorisations rather than balances** — roughly 16.6% of the vault permitted, with actual utilisation **not read**, and the report says so rather than implying deployment. **Overall 5.0 is deliberately one notch below frxUSD's 5.5**, because a wrapper cannot outrank its underlying; **if frxUSD moves, this must move with it.** **Liquidity 5.0 is scored on the redemption path with secondary DEX depth explicitly not measured.** The Ethereum address holds no code on Fraxtal, which indicates **a different address rather than no deployment**, so the Ethereum supply is not presented as global.*
