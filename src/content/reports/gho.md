---
asset: "GHO"
slug: "gho"
aliases: ["GHO", "Aave GHO"]
chains: ["eth", "arb", "base"]
category: "stablecoin"
peg_mechanism: "crypto-overcollateralized"
assessment_type: "full"
date: "2026-06-07"
last_verified: "2026-08-29"
featured: false
production: true
issuer: "Aave DAO"
audited_reserves: false
market_cap_approx: 699000000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
# ⚠️ Two axes ADDED by riskAnalyst's internal pass (83d64e7); NO existing score
# moved, and this page reflects their analysis rather than re-deriving it:
#   underlying_score 6.0 renders as DEPENDENCIES. GHO's dependencies concentrate
#     in Aave itself — pool, collateral basket and all eight facilitators are
#     Aave-governed. ⚠️ That is not diversification; it is ONE mature
#     counterparty. Docked for 44.3% of supply in a single facilitator, above
#     the 25% single-name line. ⚠️ The seized GSMs and zeroed PegKeeper are
#     scored in Stability and DELIBERATELY NOT re-punished here — same failure,
#     counted once.
#   structural_score 6.0 renders as CONTRACT & ADMIN. Targeted `hasRole` checks
#     settled what enumeration could not: the deployer EOA holds DEFAULT_ADMIN
#     on NEITHER the 310M facilitator nor the token; the Aave Governance v3
#     Executor holds it on BOTH. ⚠️ A NARROWING, NOT A CLEARANCE — three bounds
#     are on the page and must not be dropped: "the executor holds it" is not
#     "only the executor holds it" (getRoleMemberCount reverts); DEFAULT_ADMIN
#     GRANTS the mint role rather than being it; and impl/admin reading 0x0 on
#     8,046 bytes is NOT immutability — the upgrade path is simply not where it
#     is normally found and has not been located.
axis_frame: six
peg_mechanism_score: 5.5
backing_score: 6.0
liquidity_score: 6.0
underlying_score: 6.0
structural_score: 6.0
issuer_score: 6.5
overall_score: 5.5
---

# GHO — Risk Report

**Moderate risk · 5.5/10**

## What this actually is

GHO is Aave DAO's overcollateralized stablecoin. It is minted by a set of authorised **facilitators**, each with a governance-set cap — a "bucket" — that bounds how much GHO it may issue. Supply is **699,000,000.00** across eight facilitator levels.

⚠️ **Two things dominate this report and neither is about collateral quality.** The peg's defence mechanism is wound down (axis 1), and **44.3% of supply is minted by a contract whose authorised callers cannot be listed from chain state** (axis 5).

## 1 · Stability

**Reference: a $1 par target.** ⚠️ **The mechanism that would defend it is wound down.**

**Both of Aave's mainnet GHO Stability Modules are seized** — first verified on-chain **2026-08-13**, re-verified unchanged **2026-08-30**:

```
0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578   getIsSeized() TRUE   getIsFrozen() FALSE
   GHO 0.0 · exposureCap 0 · UNDERLYING_ASSET() 0xa0b86991…eb48 = USDC
0x686F8D21520f4ecEc7ba577be08354F4d1EB8262   getIsSeized() TRUE   getIsFrozen() FALSE
   GHO 0.0 · exposureCap 0 · UNDERLYING_ASSET() 0xdac17f95…31ec7 = USDT
GHO PegKeeper 0x53876B157DeCf04389eEd66c7C29d73863f8C50b   debt() 0.00
```

⚠️ **Note how each module's identity is established: by reading `UNDERLYING_ASSET()`, not by trusting its name.** Same discipline as axis 5 below, and for the same reason — **on this asset, labels have already proven the least reliable thing on the contract.**

⚠️ **`seized = true` alongside `frozen = false` is the signature of a wind-down, not a pause pending restart.** Freezing halts a module you intend to restart; **seizure is the GSM's terminal emergency action.** Neither module can swap GHO against USDC or USDT, **so the mechanism that would arbitrage a sub-$1 GHO back toward par is not available.**

**Seventeen days unchanged is the more useful fact than either reading alone.** A module seized today could be mid-incident; **one that has held seized, unfrozen, empty and capped at zero across seventeen days is behaving like a decommissioned component** — which makes this an observation rather than an inference.

**And Curve's Emergency DAO set the GHO PegKeeper debt ceiling to 0**, so that keeper can neither mint nor burn and contributes nothing in either direction. ⚠️ **What has not stopped: the GHO/crvUSD pool still exists and still provides DEX depth.** **What ended is its role as a defence mechanism, not its role as liquidity** — see axis 3.

**The two facts connect legibly:** with no functioning GSM there is no reliable route from sub-par GHO back to $1, **so a PegKeeper accumulating GHO would have been holding something it could not exit.** The reported trigger for the GSM impairment is the April 2026 rsETH bridge exploit.

⚠️ **Sourcing, because these have different standing.** The seizure states and the zero ceiling are **direct on-chain reads.** **The Curve governance action itself is reported rather than read** — the Emergency DAO decision, its date and ID remain unverified, since `gov.curve.finance` returns HTTP 403 from two separate environments. See the [crvUSD report](/reports/crvusd/).

## 2 · Backing

**GHO is overcollateralized and minted against Aave's collateral basket**, with each facilitator bounded by a governance-set bucket. **The reconciliation works:** eight facilitator levels sum to **699,000,000.00** against a `totalSupply` of **699,000,000.00** — **zero delta.**

⚠️ **Supply is frozen, not merely slow, and every level is identical to the 2026-08-13 read. Not approximately — exactly.**

```
2026-08-13   699,000,000.00   (prior pass recorded +7.7% growth over the preceding week)
2026-08-30   699,000,000.00   +0.0% over 17 days
```

**A growth rate that went from +7.7% in a week to exactly zero over seventeen days is a state change, not a slowdown.** **65.8% of supply sits at hard caps**, so a substantial part of the float is structurally unable to expand without governance raising ceilings.

⚠️ **That cuts both ways for a holder, which is why it does not move this axis on its own.** Caps that bind are a constraint on uncontrolled issuance, and they are equally a constraint on the asset's ability to meet demand.

## 3 · Liquidity & Exit

**Both exit paths, and the axis takes the worse one.** ⚠️ **The binding leg here is the PRIMARY route, and it closed** — stated explicitly so the axis does not read as a comment on depth.

**Primary — the fixed-price swap is gone.** A GSM let a holder swap GHO against USDC or USDT at a fixed price. **Both modules are seized with `exposureCap` at zero** (axis 1), so **that route is not available at any size.** What remains on the primary side is repaying an Aave borrow position, which is only an exit for someone who minted.

**Secondary — intact.** The GHO/crvUSD pool still exists and still provides DEX depth. ⚠️ **The PegKeeper's zeroed ceiling ended its role as a defence mechanism, not the pool's role as liquidity**, and conflating the two would understate the exit.

⚠️ **So the shape is: a working secondary market and a closed primary one.** For a holder who did not mint, **a DEX is now the exit**, and the fixed-price backstop that would have bounded its worst case is not there.

## 4 · Dependencies

⚠️ **GHO's dependencies concentrate in Aave itself, and that is not diversification — it is one mature counterparty.** The lending pool, the collateral basket and **all eight facilitators are Aave-governed.** A governance failure or a protocol-level incident reaches every leg at once.

⚠️ **Docked specifically for concentration inside that: 44.3% of supply sits in a single facilitator**, above the 25% single-name line this coverage applies elsewhere.

⚠️ **The seized GSMs and the zeroed PegKeeper are scored under axis 1 and are deliberately NOT re-punished here.** Same failure, counted once. **A reader comparing this axis against the peg axis should not read the 6.0 as disagreement — it is the absence of a double-count.**

**What the concentration is not:** the counterparty is a long-lived, heavily audited protocol with public governance, which is why this axis sits at 6.0 rather than lower. **The finding is that there is one of it.**

## 5 · Contract & Admin

⚠️ **The largest facilitator is not what its label says.**

It holds **310,000,000 GHO — 44.3% of all supply** — and is labelled **"GhoDirectFacilitator GSMs Mainnet"**. That name implies a GHO Stability Module: fiat-stable collateral swapped at a fixed price, the arrangement that makes a large minting bucket comfortable to reason about. **Its bytecode implements no such thing.** Selectors enumerated from the deployed contract at `0xE9ac5231…27d2`:

```
PRESENT   GHO_TOKEN() · mint(address,uint256) · burn(uint256) · AccessControl roles
ABSENT    GSM() · gsm() · getGsmList() · UNDERLYING_ASSET() · POOL() · VAULT()
ABSENT    getRoleMember() · getRoleMemberCount()
```

**Every GSM accessor is missing**, and ⚠️ **the last line matters most: without `getRoleMember()` or `getRoleMemberCount()`, the addresses holding the mint role cannot be listed from chain state at all.** **So: 44.3% of GHO is minted by a role-gated contract whose authorised callers cannot be enumerated on-chain.**

### What targeted checks did settle

⚠️ **Enumeration reverts, but `hasRole` answers. Measured 2026-08-30:**

```
hasRole(DEFAULT_ADMIN_ROLE, X)      310M facilitator     GHO token
  Aave Governance v3 Executor L1          TRUE               TRUE
  0x3765a685… (the deployer EOA)          false              false
  GHO token (negative control)            false                —
```

✅ **The deployer EOA holds `DEFAULT_ADMIN` on neither.** ✅ **The Aave DAO executor holds it on both**, so authority over the token and over the 44.3% facilitator sits with governance rather than a bare key.

⚠️ **Three bounds, and this is a narrowing rather than a clearance:**

1. ⚠️ **"The executor holds it" is not "only the executor holds it."** `getRoleMemberCount` reverts on both contracts, so the holder set is **confirmed non-empty and cannot be closed.**
2. ⚠️ **`DEFAULT_ADMIN` grants the mint role — it is not the mint role.** Who currently holds mint was not tested.
3. ⚠️ **The token is not at the standard EIP-1967 slots** — impl and admin both read `0x0` on 8,046 bytes of code. **That is not immutability. The upgrade path is simply not where it is normally found, and has not been located.**

### The cap is the mitigation, and omitting it would overstate the finding

⚠️ **The bucket is at its ceiling: 310,000,000 minted against a 310,000,000 cap. Zero headroom.** It cannot mint one more GHO without a governance action raising capacity. **That is a real constraint, publicly visible, and it bounds the exposure the authority gap creates.** A page stating the enumeration problem without stating the cap would describe a larger risk than exists.

**Still unestablished, and that is different from unknowable:** where the 310M was minted to, not traced; and who holds the mint role, not enumerable through the standard accessors. **Both have resolution paths** — role-grant events and mint destinations are traceable with the right log queries.

**Re-score trigger, written to be checkable by anyone rather than a matter of judgement: any governance action raising the `0xE9ac5231…27d2` bucket above 310M.** That would remove the constraint currently bounding the authority gap.

## 6 · Issuer

**Aave DAO** — one of the longest-running and most heavily audited protocols in the category, with public governance, on-chain voting and a mature executor structure. **Authority over both the token and the largest facilitator sits with the governance executor**, verified above rather than assumed.

⚠️ **What holds this axis at 6.5 rather than higher is disclosure rather than conduct.** The mint-role holders are not published anywhere and are not readable from chain; a facilitator carries a name that does not describe what it implements; and the upgrade path on the token is not at the standard slots and has not been located. **None of that is misconduct. All of it means a holder must take on trust things that could be made checkable.**

## Who should avoid this

- **Anyone who needs to know who can mint.** For 44.3% of supply, that list is not readable from chain — narrowed by the `hasRole` checks above, but not closed (axis 5).
- **Anyone treating the "GSM" label as a description of backing.** It is a name, not an implementation (axis 5).
- **Anyone relying on a fixed-price exit.** Both stability modules are seized; a DEX is the exit (axes 1 and 3).
- **Anyone sizing on growth.** Supply has not moved in seventeen days and most of it is at ceilings (axis 2).

## What to watch

- ⚠️ **Any capacity raise on the 310M bucket.** This is the re-score trigger and the single most consequential thing that could change here (axis 5).
- **Whether either GSM is unseized**, which would restore the par-defence route and the fixed-price exit together (axes 1 and 3).
- **Whether the mint role is ever made enumerable**, by a facilitator upgrade or by governance publishing the holders (axis 5).
- **Whether supply moves at all.** Seventeen days of exactly zero is unusual enough that a resumption is itself information (axis 2).
- **Mint destinations for the 310M**, if traced — the open question with the clearest resolution path (axis 5).
---

*Revision history: 2026-08-29 (third) — **GSM findings re-verified and the sourcing sharpened; no score change.** Both Stability Modules re-read on 2026-08-29 and **unchanged across sixteen days** — `getIsSeized()` true, `getIsFrozen()` false, zero GHO, exposure caps 0 — with the GHO PegKeeper at `0x53876B15…C50b` confirming `debt()` of 0.00. ⚠️ **Stated as "verified 2026-08-13, unchanged 2026-08-29" rather than simply re-dated to today, because persistence is the more informative claim here.** A module seized today might be mid-incident; **one that has held seized, unfrozen, empty and capped across sixteen days is behaving like a decommissioned component**, which turns the wind-down reading from an inference into an observation. ⚠️ **Each module's identity is now established by reading `UNDERLYING_ASSET()` rather than by trusting its name** — the same discipline this report applies to the facilitator, and for the same reason: **on this asset the labels have already proven the least reliable thing on the contract.** The Curve governance action remains **reported rather than read**. 2026-08-29 (second) — ⚠️ **A driver of these scores was missing from the page: both mainnet GHO Stability Modules are seized, and Curve's GHO PegKeeper debt ceiling is 0.** No score change — the marks already reflected this; **the page simply did not say so, which is worse than it sounds, because nothing about it looked incomplete.** **The facilitator finding above concerns issuance authority; this one concerns whether the peg has a working defence**, and that is the more retail-relevant half. `seized = true` with `frozen = false` is a **wind-down rather than a pause** — freezing is what you do to a module you intend to restart. **Both hold zero GHO and zero underlying with exposure caps of 0**, so no route exists to arbitrage sub-par GHO back toward $1, which is what makes Curve's decision legible rather than assumed. ⚠️ **Dated, not current: the seizure states and the zero ceiling are on-chain reads taken 2026-08-13 and not re-read since.** The Curve governance action connecting them is **reported rather than read** — `gov.curve.finance` returns 403 from two environments. **Sourced from this site's own [crvUSD report](/reports/crvusd/), which already carried the finding with full contract addresses.** ⚠️ **The internal source could not re-verify it because its own record stored those addresses truncated, and a reconstructed address that answers is not evidence about the contract you meant** — so the addresses were recovered from the published page rather than guessed. 2026-08-29 — **first publication of GHO on this site, staged pending a publication decision.** ⚠️ **The central finding corrects this coverage's own prior framing:** the largest facilitator, holding **310,000,000 GHO or 44.3% of supply**, is labelled *"GhoDirectFacilitator GSMs Mainnet"* and **implements no GSM machinery at all** — every GSM accessor is absent from its bytecode, enumerated rather than inferred. **Previous descriptions of GSM-minted GHO as fiat-stable-backed at a fixed price describe an architecture this contract does not have.** ⚠️ **`getRoleMember()` and `getRoleMemberCount()` are also absent, so the addresses authorised to mint cannot be listed from chain state** — the accurate statement is that 44.3% of GHO is minted by a role-gated contract whose callers are not enumerable. **The cap is carried with equal weight because omitting it would overstate the finding: the bucket is at 310M of 310M with zero headroom and cannot mint further without a governance capacity raise.** **Two items are recorded as not established rather than unknowable** — where the 310M was minted to, and who holds the role — and both have resolution paths; **the deploying address is a zero-byte EOA, but deployment does not establish role-holding and no such claim is made.** **Supply is frozen: eight facilitator levels sum to exactly 699,000,000.00 against the same `totalSupply`, every level identical to the 2026-08-13 read, against +7.7% growth in the preceding week — 0.0% over 16 days with 65.8% of supply at hard caps.** **Scores held at 5.5** because the new facts point both ways and neither is measured well enough to move a number; **re-score trigger is any governance action raising that bucket above 310M.***
