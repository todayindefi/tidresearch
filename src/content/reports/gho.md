---
asset: "GHO"
slug: "gho"
aliases: ["GHO", "Aave GHO"]
chains: ["eth", "arb", "base"]
category: "stablecoin"
peg_mechanism: "crypto-overcollateralized"
assessment_type: "full"
audience: "retail"
date: "2026-06-07"
last_verified: "2026-08-29"
featured: false
production: true
issuer: "Aave DAO"
audited_reserves: false
market_cap_approx: 699000000
peg_mechanism_score: 5.5
backing_score: 6.0
liquidity_score: 6.0
issuer_score: 6.5
overall_score: 5.5
---

# GHO — Risk Report

**Moderate risk · 5.5/10**

GHO is Aave DAO's overcollateralized stablecoin. It is minted by a set of authorised **facilitators**, each with a governance-set cap — a "bucket" — that bounds how much GHO it may issue. Supply is **699,000,000.00** across eight facilitator levels.

## The largest facilitator is not what its label says

⚠️ **This corrects how this coverage described GHO, not only how the market does.**

The single largest facilitator holds **310,000,000 GHO — 44.3% of all supply** — and is labelled **"GhoDirectFacilitator GSMs Mainnet"**. That name implies a GHO Stability Module: fiat-stable collateral swapped at a fixed price, the arrangement that makes a large minting bucket comfortable to reason about.

**Its bytecode implements no such thing.** Selectors enumerated from the deployed contract at `0xE9ac5231…27d2` rather than inferred from the name:

```
PRESENT   GHO_TOKEN() · mint(address,uint256) · burn(uint256) · AccessControl roles
ABSENT    GSM() · gsm() · getGsmList() · UNDERLYING_ASSET() · POOL() · VAULT()
ABSENT    getRoleMember() · getRoleMemberCount()
```

**Every GSM accessor is missing.** ⚠️ **And the last line is the one that matters most: without `getRoleMember()` or `getRoleMemberCount()`, the addresses holding the mint role cannot be listed from chain state at all.**

**So the accurate description is this: 44.3% of GHO is minted by a role-gated contract whose authorised callers cannot be enumerated on-chain.** ⚠️ **GSM-minted GHO is often described as backed by fiat-stables swapped at a fixed price. That describes an architecture this contract does not implement.**

### The cap is the mitigation, and omitting it would overstate the finding

⚠️ **The bucket is at its ceiling: 310,000,000 minted against a 310,000,000 cap. Zero headroom.**

**It cannot mint one more GHO without a governance action raising the capacity.** That is a real constraint, publicly visible, and it bounds the exposure the authority gap creates. **A page that states the enumeration problem without stating the cap would be describing a larger risk than exists.**

### What is not established — and that is different from unknowable

⚠️ **Two things are unresolved and this report says so plainly rather than filling them in.**

- **Where the 310M was minted to.** Not traced.
- **Who holds the mint role.** Not enumerable through the standard accessors, which is why it has not been listed.

**The contract was deployed by an address holding zero bytes of code — an EOA — at `0x3765a685…3a91`, checked rather than assumed to be an Aave executor.** ⚠️ **But deployment does not establish who holds a role afterwards, and this report does not claim it does.** *"The authorised callers cannot be enumerated"* is supported. *"It is controlled by an EOA"* is not, and would be an accusation the evidence does not carry.

**Both have resolution paths** — role-grant events and mint destinations are traceable with the right log queries. **They are unestablished, not unknowable**, and the distinction is the difference between a gap in this coverage and a property of the system.

## The peg's defence mechanism is wound down

⚠️ **This is a driver of the scores below and the page previously did not state it.** The facilitator finding above is about who may *issue* GHO. This one is about whether the peg has a working *defence* — which is closer to the question a holder is actually asking.

**Both of Aave's mainnet GHO Stability Modules are seized** — first verified on-chain **2026-08-13** and **re-verified unchanged on 2026-08-29**:

```
0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578   getIsSeized() TRUE   getIsFrozen() FALSE
   GHO 0.0 · exposureCap 0 · UNDERLYING_ASSET() 0xa0b86991…eb48 = USDC
0x686F8D21520f4ecEc7ba577be08354F4d1EB8262   getIsSeized() TRUE   getIsFrozen() FALSE
   GHO 0.0 · exposureCap 0 · UNDERLYING_ASSET() 0xdac17f95…31ec7 = USDT
GHO PegKeeper 0x53876B157DeCf04389eEd66c7C29d73863f8C50b   debt() 0.00
```

⚠️ **Note how each module's identity is established here: by reading `UNDERLYING_ASSET()`, not by trusting its name.** That is the same discipline this report applies to the facilitator above, and for the same reason — **on this asset, labels have already proven to be the least reliable thing on the contract.**

**Sixteen days unchanged is the more useful fact than either reading alone.** A module that is merely seized today could be mid-incident; **one that has held seized, unfrozen, empty and capped at zero across sixteen days is behaving like a decommissioned component**, which is what makes the wind-down reading below an observation rather than an inference.

⚠️ **`seized = true` alongside `frozen = false` is the signature of a wind-down, not a pause pending restart.** Freezing is what you do to halt a module you intend to restart; seizure is the GSM's terminal emergency action. **Neither module can swap GHO against USDC or USDT**, so the mechanism that would arbitrage a sub-$1 GHO back toward par is not available.

**And Curve's Emergency DAO set the GHO PegKeeper debt ceiling to 0.** That keeper can now neither mint nor burn, so it contributes nothing to peg defence in either direction. ⚠️ **Note what has *not* stopped: the GHO/crvUSD pool still exists and still provides DEX depth.** What ended is its role as a defence mechanism, not its role as liquidity.

**The two facts are connected and the connection is legible: with no functioning GSM there is no reliable route from sub-par GHO back to $1, so a PegKeeper accumulating GHO would have been holding something it could not exit.** The reported trigger for the GSM impairment is the April 2026 rsETH bridge exploit.

⚠️ **Sourcing, because these have different standing.** The seizure states and the zero ceiling are **direct on-chain reads, taken 2026-08-13 and confirmed unchanged 2026-08-29.** **The Curve governance action itself is reported rather than read:** the Emergency DAO decision, its date and ID remain unverified, since `gov.curve.finance` returns HTTP 403 from two separate environments. See the [crvUSD report](/reports/crvusd/) for the full treatment.

## Supply is frozen, not merely slow

Eight facilitator levels sum to **699,000,000.00** against a `totalSupply` of **699,000,000.00** — **zero delta**, which is the reconciliation working.

⚠️ **More striking: every level is identical to the 2026-08-13 read. Not approximately — exactly.**

```
2026-08-13   699,000,000.00   (prior pass recorded +7.7% growth over the preceding week)
2026-08-29   699,000,000.00   +0.0% over 16 days
```

**A growth rate that went from +7.7% in a week to exactly zero over sixteen days is a state change, not a slowdown.** **65.8% of supply sits at hard caps**, so a substantial part of the float is structurally unable to expand without governance raising ceilings.

**That cuts both ways for a holder**, which is why it does not move a score on its own: caps that bind are a constraint on uncontrolled issuance, and they are equally a constraint on the asset's ability to meet demand.

## Scores

| Axis | Score |
|---|---|
| Peg mechanism | 5.5 |
| Backing | 6.0 |
| Liquidity | 6.0 |
| Issuer | 6.5 |
| **Overall** | **5.5** |

⚠️ **Held unchanged, deliberately, because the new facts point in both directions.** An unenumerable mint role over 44.3% of supply is worse than the previous framing implied. A bucket pinned at its cap with zero headroom constrains exactly that risk. **Neither is measured well enough to move a number, and moving one on a direction rather than a measurement is how a score stops meaning anything.**

**Re-score trigger, written so it is checkable rather than a matter of judgement: any governance action raising the `0xE9ac5231…27d2` bucket above 310M.** That would remove the constraint currently bounding the authority gap, and this report should move when it happens.

## Who should avoid this

- **Anyone who needs to know who can mint.** For 44.3% of supply, that list is not readable from chain.
- **Anyone treating the "GSM" label as a description of backing.** It is a name, not an implementation.
- **Anyone sizing on growth.** Supply has not moved in sixteen days and most of it is at ceilings.

## What to watch

- ⚠️ **Any capacity raise on the 310M bucket.** This is the re-score trigger and the single most consequential thing that could change here.
- **Whether the mint role is ever made enumerable**, by a facilitator upgrade or by governance publishing the holders.
- **Whether supply moves at all.** Sixteen days of exactly zero is unusual enough that a resumption is itself information.
- **Mint destinations for the 310M**, if traced — the open question with the clearest resolution path.

---

*Revision history: 2026-08-29 (third) — **GSM findings re-verified and the sourcing sharpened; no score change.** Both Stability Modules re-read on 2026-08-29 and **unchanged across sixteen days** — `getIsSeized()` true, `getIsFrozen()` false, zero GHO, exposure caps 0 — with the GHO PegKeeper at `0x53876B15…C50b` confirming `debt()` of 0.00. ⚠️ **Stated as "verified 2026-08-13, unchanged 2026-08-29" rather than simply re-dated to today, because persistence is the more informative claim here.** A module seized today might be mid-incident; **one that has held seized, unfrozen, empty and capped across sixteen days is behaving like a decommissioned component**, which turns the wind-down reading from an inference into an observation. ⚠️ **Each module's identity is now established by reading `UNDERLYING_ASSET()` rather than by trusting its name** — the same discipline this report applies to the facilitator, and for the same reason: **on this asset the labels have already proven the least reliable thing on the contract.** The Curve governance action remains **reported rather than read**. 2026-08-29 (second) — ⚠️ **A driver of these scores was missing from the page: both mainnet GHO Stability Modules are seized, and Curve's GHO PegKeeper debt ceiling is 0.** No score change — the marks already reflected this; **the page simply did not say so, which is worse than it sounds, because nothing about it looked incomplete.** **The facilitator finding above concerns issuance authority; this one concerns whether the peg has a working defence**, and that is the more retail-relevant half. `seized = true` with `frozen = false` is a **wind-down rather than a pause** — freezing is what you do to a module you intend to restart. **Both hold zero GHO and zero underlying with exposure caps of 0**, so no route exists to arbitrage sub-par GHO back toward $1, which is what makes Curve's decision legible rather than assumed. ⚠️ **Dated, not current: the seizure states and the zero ceiling are on-chain reads taken 2026-08-13 and not re-read since.** The Curve governance action connecting them is **reported rather than read** — `gov.curve.finance` returns 403 from two environments. **Sourced from this site's own [crvUSD report](/reports/crvusd/), which already carried the finding with full contract addresses.** ⚠️ **The internal source could not re-verify it because its own record stored those addresses truncated, and a reconstructed address that answers is not evidence about the contract you meant** — so the addresses were recovered from the published page rather than guessed. 2026-08-29 — **first publication of GHO on this site, staged pending a publication decision.** ⚠️ **The central finding corrects this coverage's own prior framing:** the largest facilitator, holding **310,000,000 GHO or 44.3% of supply**, is labelled *"GhoDirectFacilitator GSMs Mainnet"* and **implements no GSM machinery at all** — every GSM accessor is absent from its bytecode, enumerated rather than inferred. **Previous descriptions of GSM-minted GHO as fiat-stable-backed at a fixed price describe an architecture this contract does not have, and are withdrawn.** ⚠️ **`getRoleMember()` and `getRoleMemberCount()` are also absent, so the addresses authorised to mint cannot be listed from chain state** — the accurate statement is that 44.3% of GHO is minted by a role-gated contract whose callers are not enumerable. **The cap is carried with equal weight because omitting it would overstate the finding: the bucket is at 310M of 310M with zero headroom and cannot mint further without a governance capacity raise.** **Two items are recorded as not established rather than unknowable** — where the 310M was minted to, and who holds the role — and both have resolution paths; **the deploying address is a zero-byte EOA, but deployment does not establish role-holding and no such claim is made.** **Supply is frozen: eight facilitator levels sum to exactly 699,000,000.00 against the same `totalSupply`, every level identical to the 2026-08-13 read, against +7.7% growth in the preceding week — 0.0% over 16 days with 65.8% of supply at hard caps.** **Scores held at 5.5** because the new facts point both ways and neither is measured well enough to move a number; **re-score trigger is any governance action raising that bucket above 310M.***
