---
asset: "syzUSD"
slug: "syzusd"
aliases: ["syzUSD", "Staked Yuzu USD", "Staked Yuzu Money", "sYuzu USD"]
chains: ["plasma", "monad", "sei", "pharos", "eth", "berachain", "hyperevm"]
category: "vault-share"
assessment_type: "light"
date: "2026-06-08"
last_verified: "2026-06-08"
last_revised: "2026-08-29"
featured: false
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=syzusd"
# HELD IN STAGING DELIBERATELY — do not promote on a freshness or
# completeness sweep. The site owner's condition (2026-08-29) is that yzUSD
# and syzUSD ship as a report+dashboard set. ⚠️ THE DASHBOARD HALF NOW EXISTS
# AND RENDERS — syzUSD's missing peg chart was a null `peg.history_ref` in
# backing-monitor's feed and was fixed 2026-08-29 — so the ORIGINAL hold reason
# is spent. The owner raised the bar the same day and that is the live gate:
# EVERY TILE MUST BE FILLED before production. Unfilled as of 2026-08-29 —
# syzUSD: liquidity axis "Not rated", 2% depth / max-≤25bps / exit ladder all
# n/a, no collateral-ratio history block (no syzusd_backing_history.json).
# Both: max-≤25bps n/a, redemption reachability unprobed ("not probed in v1"),
# downstream not tracked, and 48.3% of yzUSD's upstream deps render "No
# dashboard" while we run live monitors for them (usde, susde, syrupusdc,
# syrupusdt). Filling these is backing-monitor / PegTracker / DexTracker work,
# NOT ours. "No report linked" clears on publication and is not a blocker.
# ⚠️ Re-verify the RENDERED dashboard in a browser before proposing promotion;
# feed properties are not evidence that a renderer drew anything.
production: false
issuer: "Yuzu Money"
underlying_assets: ["yzUSD"]
yield_bearing: true
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
# ⚠️ What moved, and what only changed name:
#   backing_score 4.5 is NEW. This report had no backing axis at all, which was a
#     real hole: a syzUSD share is a claim on yzUSD, so the reserve IS the risk.
#     Inherited from yzUSD because the vault is pass-through — it holds yzUSD
#     directly and does not lever it. ⚠️ Inherited, NOT independently judged: if
#     yzUSD's backing moves, this must.
#   underlying_score 2.5 is NEW and renders as DEPENDENCIES. ⚠️ It is WORSE than
#     yzUSD's 3.0 and that is the point of the axis: this vault carries yzUSD's
#     entire dependency book — Ethena, the levered loops, the recursive yzPRIME —
#     AND adds a single point of failure of its own, since 100% of its value
#     passes through one asset. Concentration on top of concentration.
#   liquidity_score 3.0. ⚠️ CORRECTED 2026-08-30 — an earlier merge took 2.5 as
#     the worse leg on the belief that redemption was gated at THIS layer. It is
#     not: the ERC-4626 unwrap is permissionless (maxRedeem == balanceOf on every
#     address tested, including 0x…dEaD, which nobody allowlists; paused() false;
#     previewRedeem NAV-consistent). With redemption at 4.0 the worse leg is the
#     VENUE leg at 3.0. ⚠️ THE BINDING LEG IS NAMED IN THE AXIS PROSE: a merged
#     axis otherwise hides which half set the number, and a wrong leg then sets
#     the whole axis silently. That is the cost of the worse-leg rule and this
#     is the mitigation.
#   structural_score 2.0 is Contract & Admin already — no change, no re-judging.
#   volatility_score is the Stability key for a NAV-referenced share.
# ⚠️ `redemption_score` is RETAINED in frontmatter but no longer rendered: it is
# the input to the worse-leg rule above, and deleting it would erase the evidence
# for why Liquidity & Exit is 2.5 rather than 3.0.
axis_frame: six
volatility_score: 3.0
backing_score: 4.5
liquidity_score: 3.0
underlying_score: 2.5
structural_score: 2.0
issuer_score: 4.0
# 4.0, not higher: the exit terminates in yzUSD rather than cash.
redemption_score: 4.0
overall_score: 3.0
chain_overrides:
  monad:
    volatility_score: 3.0
    # Unchanged by the 2026-08-30 redemption correction: there is no Monad-side
    # yzUSD to redeem into, so the open Plasma unwrap does not reach this leg.
    liquidity_score: 2.0
    structural_score: 1.5
    redemption_score: 2.0
    # Stays 2.0 — Structural 1.5 binds here, not the exit.
    overall_score: 2.0
---

# syzUSD — Risk Report

**High risk · 3.0/10** (2.0/10 on Monad)

> ⚠️ **What is current and what is not.** The vault identification, NAV, supply and authority findings below were measured **2026-08-29**. The rest of the body dates from **2026-06-08** and has not been re-read. The card shows both dates.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| Accrues in NAV — 1.078123 per share, measured 2026-08-29 | Secondary only for retail | KYC-gated, best-effort, via [yzUSD](/reports/yzusd/) | ~12 months | Plasma (canonical vault), Monad (OFT mirror) |

## What this actually is

**A real ERC-4626 vault on Plasma holding yzUSD, with its shares mirrored outward as a LayerZero OFT.** It holds **99.1% of all yzUSD**, so it is where nearly the whole system's value sits — and it is the layer that travels, while [yzUSD](/reports/yzusd/) itself stays on Plasma.

⚠️ **Its risk is yzUSD's risk plus this contract, and almost nothing else.** The vault does not lever, does not allocate, and holds no reserve of its own. **Read this page for the wrapper and the exit; read the underlying for what actually backs a share.**

## 1 · Stability

**Reference: NAV, not a dollar.** syzUSD is an ERC-4626 share and accrues; it has no peg to break. What it can do is trade away from what it can be redeemed for.

```
syzUSD vault (Plasma)   0xC8A8DF9B210243c55D31c73090F06787aD0A1Bf6   793 bytes, ERC-4626
  totalAssets            57,919,341.98 yzUSD
  totalSupply            53,722,377.33 syzUSD
  NAV per share                1.078123      <- never previously recorded
  holds                  57,990,876.97 yzUSD = 99.1% of ALL yzUSD supply
```

⚠️ **NAV is readable on the canonical vault and not on the Monad deployment, and reading the wrong one gives a wrong answer that looks like a right one.** On the Monad proxy `0x484be054…`, `asset()` and `convertToAssets()` both **revert** — because that contract is an **OFT mirror**, and a mirror has no underlying to report. Its `token()` returns its own address, which is the signature of an OFT rather than an OFTAdapter. ⚠️ **A revert on the mirror is not evidence that syzUSD is not a vault.** It is the expected behaviour of the wrong contract, and the canonical ERC-4626 above is where the question is answered.

**Live deviation is small and measured against the right thing:** market **1.0756** against NAV **1.0782**, a **−0.247% discount**. ⚠️ **That is a discount to a redemption value, not a stablecoin off its peg** — a distinction a tile on this asset previously got wrong by dividing a 30-hour-old price into a live accruing NAV and reporting −2.84%.

⚠️ **And the deviation is struck on almost no turnover** — 24h volume of **$995** — so it is weak evidence about fair value and strong evidence about exit cost. Both readings belong; see axis 3.

## 2 · Backing

⚠️ **This vault has no reserve of its own, and that is the whole finding.** `totalAssets` is yzUSD held directly, one-for-one, not borrowed against. **The vault is not looping.** So whatever risk attaches to yzUSD's backing passes straight through — it is neither amplified nor buffered here.

**On its own basis the underlying runs CR 108.98%**, read 2026-08-30. ⚠️ **But roughly 70% of that reserve sits in levered loop positions, Ethena exposure is about 4.2× the surplus, and 4.8% is the issuer's own `yzPRIME`.** **So a syzUSD share is a claim on yzUSD at a readable NAV, and yzUSD is a claim on a levered book with a thin cushion.** The composition itself is axis 4; the coverage is here. Full treatment in the [yzUSD report](/reports/yzusd/).

⚠️ **Sourcing note that governs every backing figure on this page and on the underlying: Accountable's founder is an investor in Yuzu.** That feed is a related-party disclosure channel, not independent verification. The on-chain reads — supply, NAV, the wei-exact conservation under axis 5 — stand on their own.

⚠️ **One thing to know before reading the live dashboard: its BACKING tile shows yzUSD's collateral ratio, not syzUSD's.** This vault publishes share supply, NAV per share and yield, and no coverage ratio. That is the right number to care about, since a share is a claim on yzUSD — **but it is not a measure of this contract.**

## 3 · Liquidity & Exit

**Both exit paths, and the axis takes the worse one.** ⚠️ **The binding leg here is SECONDARY VENUE DEPTH, not redemption** — stated explicitly, because a merged axis otherwise hides which half set the number.

⚠️ **The unwrap is open, and this is three legs rather than one.** Reading them as a single gated path is the error to avoid:

| Leg | State |
|---|---|
| **syzUSD → yzUSD** (Plasma vault) | ✅ **Permissionless, instant, no cooldown** |
| **yzUSD → dollars** (primary) | ⚠️ KYC-gated, accredited, best-effort — **the real gate** |
| **syzUSD on Monad → anything** | ⚠️ No redeem path; bridge via the bare-EOA adapter, or sell |

**Only the second and third are gated.** Verified on the canonical vault `0xC8A8DF9B…`, 2026-08-30:

```
asset()               0x6695c0f8…  = yzUSD
paused()              false
previewRedeem(1e18)   1.078340 yzUSD        NAV-consistent
maxRedeem(holder)  == balanceOf(holder)     exactly, for every address tested
                                            including 0x…dEaD, which nobody allowlists
```

⚠️ **`maxRedeem` equalling `balanceOf` on an arbitrary address is the proof there is no whitelist and no per-user cap.** **So the wrapper unwraps freely. What it unwraps INTO is yzUSD, not cash** — which is why this axis is 3.0 rather than higher, and why the gate belongs to the [underlying](/reports/yzusd/) rather than to this contract.

**Secondary — the better leg, and stronger than the pool list suggests.** Routed across every venue an aggregator can reach, **$100,000 of syzUSD sells into csUSDC inside 10 bps**, with the 2% crossing between $100k and $250k:

| Size sold | Total execution cost |
| --- | --- |
| $10,000 | −0.8 bps |
| $25,000 | −2.4 bps |
| $50,000 | −4.3 bps |
| $100,000 | −9.6 bps |
| $250,000 | −334 bps |
| $500,000 | −4,924 bps |

*syzUSD → csUSDC on Monad, best available route, measured 2026-08-29. Cost is total, not marginal: what leaves the wallet against what arrives. Sizes below $10k are omitted because at that scale the figure is dominated by the pricing marks on each side rather than by depth.*

⚠️ **A single-pool ladder is not the asset's exit, and reading one as the other is the error this table replaces.** The route filled from four venue types — two Balancer pools, a Kuru order book and Uniswap v4 — so **the $483K of swap TVL enumerated across two pools is a floor on the venue set, not a census of it.** Any ratio built on that denominator overstates the crowding.

**What survives is where the claims sit relative to the venues, and it deserves stating without severity attached:** $11.0M of issuer vault sits on Monad, while **Sei ($9.9M) and Ethereum ($753K) hold vault TVL with no local swap venue at all.** ⚠️ **That is a distance between a claim and a place to sell it — not a bottleneck.** Retail and mid-size exits clear in single-digit bps; the cost is a large-holder problem past $100k and severe past $250k.

⚠️ **The Plasma leg of the underlying still clears $250,000 inside 13 bps**, so beyond about $100k the constraint sits with **this wrapper** rather than with yzUSD — but below that size neither leg is binding.

⚠️ **Where this asset actually lives matters more than either ladder: Sei ($9.19M) and Pharos ($2.86M) together hold 52% of all mirrored supply**, and neither has a CEX presence or mature tooling. Sei carries the highest-yielding syzUSD venue anywhere — a Feather loop at 28.44% APY — and **no local way out.** A reader told "Plasma, Monad and Ethereum" would badly misjudge this.

## 4 · Dependencies

⚠️ **100% of this asset's value passes through one other asset.** There is no diversification at this layer and none is possible: the vault holds yzUSD and nothing else.

**So the dependency book is yzUSD's, inherited whole:**

| Exposure | Share of the underlying's backing | Why it is a dependency and not just an asset |
|---|---|---|
| **Ethena** (USDe + sUSDe loops) | ~34.6% — $22,046,996 | Roughly **4.2× the $5,250,790 surplus** — the reserve cannot absorb a large move in one name |
| **Levered loop positions** (all) | ~69.9% | A collateral ratio measured on a levered book is not that ratio on spot |
| **`yzPRIME`** (Yuzu's own) | 4.8% | ⚠️ **Recursive** — the issuer's product inside the issuer's reserve |
| **`yzPP`** (junior tranche) | ~90% of the surplus | ⚠️ **Circular** — first-loss capital whose own value is a claim on the book it cushions, and third-party money redeemable on a 30-day window |

⚠️ **The axis is scored WORSE than the underlying's, at 2.5 against yzUSD's 3.0, and that is deliberate.** This vault carries every dependency above **and adds a single point of failure of its own.** Concentration on top of concentration is not the same risk as concentration alone.

**The deployments are not deterministic across chains** — Sei's syzUSD is `0xB98b14d3…`, unrelated to the Monad or Plasma addresses — so probing with a known address finds nothing and proves nothing. ⚠️ **A failed lookup here reads as absence and is not.**

## 5 · Contract & Admin

**Three layers, three different owners. The weak one is not the one holding the value.**

| layer | owner | |
|---|---|---|
| **syzUSD vault + ProxyAdmin** (Plasma) | `0xa2a97004…` | **4-of-5 Safe** — `getThreshold` = 4, five owners, verified live |
| **syzUSD bridge** (Monad) | `0x4ea00dc0…4a89ae` | **bare EOA**, no code, no delay |
| **yzUSD token** (Plasma) | OZ `TimelockController` | **2-day delay** |

⚠️ **The single-key exposure is real, and its blast radius is the roughly 10.9M mirrored shares rather than the 53.7M in the vault** — material on the Monad side, smaller system-wide. **The axis is 2.0**, and it reflects two things rather than one: the single-key exposure above **and** the backing chain one layer down, which cannot be verified independently because the attestation channel is related-party. **The Monad override is lower because the mirror is precisely where the bare key sits.**

**Mirrored supply reconciles exactly.** Balances read live across seven chains:

```
Monad      10,210,297.16      Ethereum      698,725.76
Sei         9,190,234.55      Berachain     129,781.69
Pharos      2,861,652.65      HyperEVM            0.21
                    (legs shown rounded to 2dp)
----------------------------------------------------
satellites   23,090,692.029661   =   locked   23,090,692.029661
at wei precision:   23,090,692,029,660,641,890,153,643  both sides
margin: 0 wei
```

⚠️ **Margin is exactly zero, not merely close** — worth more than a comfortable surplus would be, because it shows the lockbox backs **precisely** what is mirrored, **and that this chain list is complete: a single missing satellite would break the equality.** The legs are rounded for reading; the equality is on the unrounded integers.

**Bridge: CCIP is live.** `TokenAdminRegistry.getPool(syzUSD)` returns pools on all three chains, verified directly. ⚠️ **`getCCIPAdmin()` reverts here, which is easily read as "no CCIP" — the registry answers the question, the accessor does not.** ⚠️ **The general form is worth carrying to any contract: absence of one interface is not absence of the system.** A reverting accessor says that this contract does not implement that method, and nothing at all about whether the system it belongs to is live.

The LayerZero OFT surface runs alongside it. Because an OFT mints and burns per chain rather than locking against a home deployment, **there is no lockbox whose balance bounds mirrored supply**: whoever controls the peer set can mint on any chain where a peer is configured. ⚠️ **The peer set is not established and this report will not imply it is.** A scan returned zero peers for four endpoint IDs (30101 / 30110 / 30184, plus a guess), **but Plasma's LayerZero eid was not among them because it is not known to us.** *"No peers on four eids we chose"* is not *"the peer set is empty."*

## 6 · Issuer

**Yuzu Money.** ⚠️ **This axis is editorial and subjective** — it is not a measurement, and it is kept separate from axis 5 for that reason. A reputable issuer can hold a bare key; a weak one can run a clean timelock.

**What the issuer discloses, and what it does not:**

- **Reserve look-through is published and reproducible** — a full composition by strategy and chain, refreshed continuously. That is more than most issuers at this size publish, and it is why axis 2 is not lower.
- ⚠️ **The attestation channel is related-party.** Accountable's founder is an investor in Yuzu.
- ⚠️ **Governance is disclosed with its denominator missing.** The published policy states a quorum of **4 of an unstated total** — 4-of-5 and 4-of-25 are indistinguishable from what is published — alongside a default action of `block` that does not say what is blocked, and a verifiability figure carrying no declared scale. **Establishing the denominator needs the signer set, which the disclosure does not carry.**
- **No attachment or detachment point is published for `yzPP`**, the junior tranche the surplus depends on.

## Who should avoid this

- **Anyone reading the underlying's 108.98% CR as a spot cushion.** About 70% of that reserve is levered (axes 2 and 4).
- **Anyone who needs to exit to dollars rather than to yzUSD.** ⚠️ **The unwrap itself is open** — the gate is one layer down, where yzUSD's primary redemption is KYC-gated and best-effort (axis 3).
- **Holders who assume one authority governs the stack.** Three layers, three owners (axis 5).
- **Holders on Sei or Pharos.** Together 52% of mirrored supply, with no local venue to sell into (axis 3).
- **Holders on Monad specifically.** The mirror adds bridge risk with no lockbox bounding supply, on top of the bare upgrade key (axes 4 and 5).

## What to watch

- **Whether the bridge's bare key is ever replaced by a multisig or timelock.** Unchanged for 82 days and the single highest-leverage improvement available (axis 5).
- **The real peer set**, once Plasma's eid is known (axis 5).
- **NAV continuity across the bridge** — whether Monad-held shares track the Plasma vault's 1.078123 (axis 1).
- **Ethena's share of the underlying reserve against the surplus.** It is the concentration most able to move the whole stack (axis 4).
- **Whether an attachment or detachment point is ever published for `yzPP`** (axes 4 and 6).
---

*Revision history: 2026-08-29 — **first publication of this asset, staged.** syzUSD had no coverage on this site. ⚠️ **`last_verified` stays 2026-06-08:** only the on-chain layer was measured in this pass — the canonical ERC-4626 vault on Plasma, NAV per share, mirrored supply and its wei-exact conservation across seven chains, the three-layer authority split, and the CCIP and OFT bridge surfaces. **The strategy and redemption material has not been re-read**, and the peer set is recorded as **not established** rather than empty.*
