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
volatility_score: 7.0
liquidity_score: 5.0
structural_score: 5.0
redemption_score: 6.5
# Overall is deliberately 5.0 — one notch BELOW frxUSD's 5.5. A wrapper cannot
# outrank the asset it holds. ⚠️ If frxUSD is ever re-scored, this must move
# with it; leaving sfrxUSD above its own underlying would be incoherent.
overall_score: 5.0
---

# sfrxUSD — Risk Report

**Moderate risk · 5.0/10**

sfrxUSD is the staked form of [frxUSD](/reports/frxusd/), Frax Finance's flagship dollar. You deposit frxUSD, you receive sfrxUSD, and the share price accrues yield. frxUSD itself pays nothing — **staking here is the only way to earn on it.**

⚠️ **The first thing worth knowing is how much of frxUSD lives in here.** The vault holds **36,232,343.43 frxUSD against a total frxUSD supply of 101,827,130.47 — 35.58%.** Better than a third of the stablecoin's float sits inside this one contract, which means **a reader looking only at frxUSD's supply is looking at a number that is substantially a claim on this vault.**

| Yield | Underlying | Exit | Hard yield ceiling | Chains |
|---|---|---|---|---|
| Accrues in share price | frxUSD | Unstake, then frxUSD's own redemption path | **≈4.69%/yr, contract-enforced** | Ethereum, Fraxtal (different addresses) |

## The accessor called `timelockAddress()` is not a timelock

⚠️ **This is the finding, and the naming is the dangerous half of it.**

`timelockAddress()` resolves to `0x4b45d73b…1bc1`. Read directly, that address is:

```
Gnosis Safe v1.4.1
getThreshold()      3
getOwners()         6
getMinDelay()       reverts
MINIMUM_DELAY()     reverts
```

**A 3-of-6 multisig with no execution delay of any kind.**

⚠️ **And `owner()` reverts on the vault, so the name of that accessor is the only signal anyone gets about what governs it.** A reviewer — human or automated — who reads `timelockAddress()` and records "timelocked" has been given a wrong answer by the interface itself, and has no second accessor to check it against.

⚠️ **Read this as review being defeated, not as concealment.** It has the shape of an accessor kept for interface compatibility after the address behind it changed, and **nothing here supports an accusation of intent.** The honest version is also the more useful one: **the risk is that a standard admin check returns "protected" and stops, on a vault holding over a third of frxUSD's supply.**

**Three signatures, no delay, and no way to notice from the interface.** That is what the Structural axis at 5.0 is pricing.

## The yield has a ceiling written into the contract

`maxDistributionPerSecondPerAsset` is **1.486668756e-09**, which annualises to about **4.69%**.

⚠️ **The vault cannot pay out faster than that, whatever the strategies earn.** It is a hard cap in the contract, not a target or a current rate.

**Which gives a reader a test rather than a score: any advertised sfrxUSD yield above roughly 4.69% is not coming from this contract.** It is coming from somewhere else — an incentive programme, a points scheme, a different product, or a number computed on a different basis. **That does not make it fake, but it does mean it is not the vault's own distribution**, and it will not behave like it under stress.

## Where the assets are being sent

Two Frax governance proposals allocate this vault's assets:

| proposal | destination | cap |
|---|---|---|
| **FIP-450** | Gearbox Institutional RWA market | **$5,000,000** |
| **FIP-451** | Royco SLP — stated purpose "enhance redemption liquidity" | **1,000,000 frxUSD** |

**Together that is roughly 16.6% of the vault, authorised.**

⚠️ **Those are authorisations, not balances, and this report does not claim otherwise.** *Up to* $5M is permitted into Gearbox; **how much is actually deployed has not been read.** Establishing the real redemption impact means reading current utilisation against those caps, and **that measurement has not been done** — so what is published here is the permission, not the position.

⚠️ **Both proposals allocate sfrxUSD assets, not FRAX or frxUSD treasury.** Frax runs three adjacent tickers and the conflation is easy and expensive; this was confirmed before writing.

## Exit

**Unstaking returns frxUSD, and then you are in frxUSD's redemption path** — per-custodian, with the USDC exit gated by a buffer of roughly $10M. **So the exit is two-step, and the second step is not this vault's to control.**

⚠️ **Liquidity is scored at 5.0 on the redemption path and frxUSD's own profile. Secondary DEX depth for sfrxUSD has not been measured.** That is a stated limit, not an implied finding — **a reader should not take the 5.0 as evidence that secondary depth is adequate, because it was not looked at.**

## Chains

The Ethereum deployment is not the whole asset. ⚠️ **The Ethereum address holds 0 bytes of code on Fraxtal — Frax's own home chain — which means a different address there, not the absence of a deployment.**

**So the Ethereum supply figure is not a global one**, and this report does not present it as such, nor describe sfrxUSD as Ethereum-only. The Fraxtal leg is unmeasured here.

## Who it's for · who should avoid

**For:** holders who already want frxUSD exposure and want the yield on it, and who are comfortable that the governing multisig can act without delay.

**Avoid if:**

- **You are relying on a timelock.** There isn't one, whatever the accessor is called.
- **You are buying an advertised yield above ~4.69%.** The contract cannot pay it; find out what is.
- **You need a fast exit.** Two steps, and the second is gated by a buffer you don't control.
- **You read frxUSD's supply as diversified holders.** Over a third of it is this vault.

## What to watch

- **Actual utilisation against the FIP-450 and FIP-451 caps.** The authorisations are known; the positions are not, and that is the gap that matters for redemption.
- **Whether `timelockAddress()` ever points at something with a delay.** Cheap to check, and the single largest improvement available here.
- **The vault's share of frxUSD supply.** 35.58% today — rising concentration makes the two assets one risk rather than two.
- **Any yield quoted above the 4.69% ceiling**, and where it is said to come from.

---

*Revision history: 2026-08-29 — **first publication, staged.** sfrxUSD had no coverage on this site despite holding **36,232,343.43 frxUSD — 35.58% of total frxUSD supply.** ⚠️ **The central finding is that `timelockAddress()` does not resolve to a timelock:** it points at a Gnosis Safe v1.4.1 with `getThreshold()` 3 of 6 owners, and both `getMinDelay()` and `MINIMUM_DELAY()` revert. **Because `owner()` also reverts, that accessor's name is the only governance signal the interface offers** — so a review keying on it records "timelocked" and stops. **Written as review being defeated rather than as concealment**, since the shape is consistent with an accessor kept for compatibility after the address behind it changed, and intent is not supportable from what was measured. **The most useful retail takeaway is a test rather than a score:** `maxDistributionPerSecondPerAsset` of 1.486668756e-09 annualises to a **hard ceiling of about 4.69%**, so **any advertised yield above that is not coming from this contract.** FIP-450 ($5M, Gearbox Institutional RWA) and FIP-451 (1M frxUSD, Royco SLP) are recorded as **authorisations rather than balances** — roughly 16.6% of the vault permitted, with actual utilisation **not read**, and the report says so rather than implying deployment. **Overall 5.0 is deliberately one notch below frxUSD's 5.5**, because a wrapper cannot outrank its underlying; **if frxUSD moves, this must move with it.** **Liquidity 5.0 is scored on the redemption path with secondary DEX depth explicitly not measured.** The Ethereum address holds no code on Fraxtal, which indicates **a different address rather than no deployment**, so the Ethereum supply is not presented as global.*
