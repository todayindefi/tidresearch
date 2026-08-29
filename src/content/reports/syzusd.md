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
# FIVE-AXIS FRAME — Stability · Backing · Liquidity & Exit · Contract & Admin · Issuer.
# ⚠️ What moved, and what only changed name:
#   underlying_score 4.5 is NEW and renders as BACKING. This report had no backing
#     axis at all, which was a real hole: a syzUSD share is a claim on yzUSD, so
#     the reserve IS the risk. Inherited from yzUSD's `backing_score` because the
#     vault is pass-through — it holds yzUSD directly and does not lever it.
#     ⚠️ Inherited, NOT independently judged: if yzUSD's backing moves, this must.
#   liquidity_score 3.0 -> 2.5. Axis 3 is scored on the WORSE exit leg. The venue
#     leg is better than this coverage once said (a routed $100k clears inside
#     10 bps on Monad); the redemption leg is KYC-gated and best-effort THROUGH
#     yzUSD, so it binds, and 2.5 is the old `redemption_score` carried onto the
#     merged axis unchanged.
#   structural_score 2.0 is Contract & Admin already — no change, no re-judging.
#   volatility_score is the Stability key for a NAV-referenced share.
# ⚠️ `redemption_score` is RETAINED in frontmatter but no longer rendered: it is
# the input to the worse-leg rule above, and deleting it would erase the evidence
# for why Liquidity & Exit is 2.5 rather than 3.0.
axis_frame: five
volatility_score: 3.0
underlying_score: 4.5
liquidity_score: 2.5
structural_score: 2.0
issuer_score: 4.0
redemption_score: 2.5
overall_score: 2.5
chain_overrides:
  monad:
    volatility_score: 3.0
    liquidity_score: 2.0
    structural_score: 1.5
    redemption_score: 2.0
    overall_score: 2.0
---

# syzUSD — Risk Report

**High risk · 2.5/10** (2.0/10 on Monad)

> ⚠️ **What is current and what is not.** The vault identification, NAV, supply and authority findings below were measured **2026-08-29**. The rest of the body dates from **2026-06-08** and has not been re-read. The card shows both dates.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| Accrues in NAV — 1.078123 per share, measured 2026-08-29 | Secondary only for retail | KYC-gated, best-effort, via [yzUSD](/reports/yzusd/) | ~12 months | Plasma (canonical vault), Monad (OFT mirror) |

## The vault exists, and this coverage did not have it

⚠️ **The most important correction in this pass is that syzUSD's canonical vault was located, and earlier coverage had been querying a mirror.**

```
syzUSD vault (Plasma)   0xC8A8DF9B210243c55D31c73090F06787aD0A1Bf6   793 bytes, ERC-4626
  totalAssets            57,919,341.98 yzUSD
  totalSupply            53,722,377.33 syzUSD
  NAV per share                1.078123      <- never previously recorded
  holds                  57,990,876.97 yzUSD = 99.1% of ALL yzUSD supply
```

**Until now there was no readable NAV for this asset, and the reason was a wrong target.** Earlier work queried the **Monad proxy** `0x484be054…`, where `asset()` and `convertToAssets()` both revert — and read those reverts as evidence that syzUSD was not a vault at all.

⚠️ **They are not. The Monad deployment is an OFT mirror, and a mirror is expected to have no `asset()`.** Its `token()` returns its own address, which is the signature of an OFT rather than an OFTAdapter: **mint-and-burn on each chain, not lock-and-mirror against a home lockbox.** The reverts were a correct reading of the wrong contract.

**So the structure is: a real ERC-4626 vault on Plasma holding yzUSD, with shares mirrored outward as an OFT.**

⚠️ **And the footprint is wider than the vault suggests — seven chains, not three.** Mirrored balances, read live:

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

⚠️ **The lockbox and the mirrors are equal to the wei — margin exactly zero, not merely close.** That is worth more than a comfortable surplus would be: it shows the lockbox backs **precisely** what is mirrored, **and it shows this chain list is complete, because a single missing satellite would break the equality.** **The legs above are rounded for reading; the equality is on the unrounded integers.**

**Monad's exit is deeper than its pool list suggests.** Routed across every venue an aggregator can reach, **$100,000 of syzUSD sells into csUSDC inside 10 bps**, and the 2% crossing falls between $100k and $250k:

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

**What survives is where the claims sit relative to the venues, and it deserves stating without severity attached:** $11.0M of issuer vault sits on Monad, while **Sei ($9.9M) and Ethereum ($753K) hold vault TVL with no local swap venue at all.** ⚠️ **That is a distance between a claim and a place to sell it — not a bottleneck.** Retail and mid-size exits clear in single-digit bps; the cost is a large-holder problem that begins past $100k and becomes severe past $250k.

⚠️ **The Plasma leg of the underlying still clears $250,000 inside 13 bps**, so beyond about $100k the constraint does sit with **this wrapper** rather than with [yzUSD](/reports/yzusd/) — but below that size neither leg is binding.

⚠️ **Where this asset actually lives is the finding: Sei ($9.19M) and Pharos ($2.86M) together hold 52% of all mirrored supply.** Neither has a CEX presence or mature tooling, and Sei carries the highest-yielding syzUSD venue anywhere — a Feather loop at 28.44% APY. **A reader told "Plasma, Monad and Ethereum" would badly misjudge this.** The deployments are **not deterministic across chains** — Sei's syzUSD is `0xB98b14d3…`, unrelated to the Monad or Plasma addresses — so probing with a known address finds nothing and proves nothing.

⚠️ **One thing to know before reading the live dashboard: its BACKING tile shows yzUSD's collateral ratio, not syzUSD's.** This vault has no coverage ratio of its own — what it publishes is share supply, NAV per share and yield — **so the percentage on that tile is the underlying's.** That is the right number to care about, since a syzUSD share is a claim on yzUSD, but **it is not a measure of this contract**, and the dashboard's own dependency note says the same: syzUSD's risk is yzUSD's risk plus the vault contract.

## The risk at this layer is pass-through, not leverage

⚠️ **The vault is not looping.** `totalAssets` is the yzUSD it directly holds, and it holds it one-for-one rather than borrowing against it.

**That matters for where the risk actually lives.** A syzUSD share is a claim on yzUSD, and **whatever risk attaches to yzUSD's own backing passes straight through** — it is not amplified here. **The leverage concern, if there is one, belongs one layer down**, in what backs yzUSD itself, and that is [covered separately](/reports/yzusd/).

⚠️ **One sourcing note that applies to every backing figure here and on the underlying: Accountable's founder is an investor in Yuzu**, so that feed is a related-party disclosure channel rather than independent verification. On-chain reads — supply, NAV, the wei-exact conservation above — stand on their own. ⚠️ **And the layer beneath is where the risk concentrates.** yzUSD's backing **is** published and verifiable — a first draft of this report said otherwise and was wrong, having tried two dead hostnames and missed the live one. On its own basis it runs **CR 106.92%**. ⚠️ **But roughly 70% of that reserve sits in levered loop positions, Ethena exposure is about five times the surplus, and 4.8% is the issuer's own `yzPRIME`.** **So a syzUSD share is a claim on yzUSD at a readable NAV, and yzUSD is a claim on a levered book with a thin cushion.** See the [yzUSD report](/reports/yzusd/).

## Authority: a Safe over the vault, a single key over the bridge



| layer | owner | |
|---|---|---|
| **syzUSD vault + ProxyAdmin** (Plasma) | `0xa2a97004…` | **4-of-5 Safe** — `getThreshold` = 4, five owners, verified live |
| **syzUSD bridge** (Monad) | `0x4ea00dc0…4a89ae` | **bare EOA**, no code, no delay |
| **yzUSD token** (Plasma) | OZ `TimelockController` | **2-day delay** |

**The vault sits behind a 4-of-5 Safe; the bare key owns the bridge.**

⚠️ **The single-key exposure is real, and its blast radius is the roughly 10.9M mirrored shares rather than the 53.7M in the vault** — a material risk on the Monad side, and a smaller one system-wide.

**The Structural axis stays at 2.0** — the corrected topology is better than the draft described, but the axis was set in June against the single-key finding *and* the unverifiable backing chain, and only the first of those has moved. **The Monad override remains lower because the mirror is precisely where the bare key sits.**

## Bridge topology

**CCIP is live: `TokenAdminRegistry.getPool(syzUSD)` returns pools on all three chains, verified directly.** ⚠️ **Note that `getCCIPAdmin()` reverts here, which is easily read as "no CCIP" — the registry answers the question, the accessor does not.**

The LayerZero OFT surface remains live alongside it. Because an OFT mints and burns per chain rather than locking against a home deployment, **there is no lockbox whose balance bounds the mirrored supply**: whoever controls the peer set can mint on any chain where a peer is configured.

⚠️ **The peer set itself is not established, and this report will not imply it is.** A scan returned zero peers for four endpoint IDs (30101 / 30110 / 30184, plus a guess), **but Plasma's LayerZero eid was not among them because it is not known to us.** *"No peers on four eids we chose"* is not *"the peer set is empty"* — establishing it needs the eid list, which is the next measurement.

## Who should avoid this

- **Anyone reading the underlying's 106.92% CR as a spot cushion.** About 70% of that reserve is levered.
- **Holders who assume one authority governs the whole stack.** Three layers, three different owners: a Safe over the vault, a bare key over the bridge, a timelock over the token.
- **Holders on Monad specifically.** The mirror adds bridge risk with no lockbox bounding supply, on top of the same single upgrade key.

## What to watch

- **Whether the proxy owner is ever replaced by a multisig or timelock.** Unchanged for 82 days and the single highest-leverage improvement available.
- **NAV continuity across the bridge** — whether Monad-held shares track the Plasma vault's 1.078123.
- **The real peer set**, once Plasma's eid is known.
- **Anything that locates yzUSD's collateral**, since this vault's value is a claim on it.

---

*Revision history: 2026-08-29 (second pass, pre-publication) — ⚠️ **Three claims from the first draft are withdrawn, all of them harsher than reality. Scores unchanged; this report remains staged.** **(1) The single-key finding was attributed to the wrong contract.** The vault and its ProxyAdmin are owned by `0xa2a97004…`, verified live as a **4-of-5 Safe**; the bare EOA `0x4ea00dc0…` owns the **bridge**. **The draft's headline — that an attacker takes the wrapper holding 99% of the value — pointed at the wrong layer.** The exposure is real and its blast radius is the ~10.9M mirrored shares, not the 53.7M in the vault. **(2) "Not migrated to CCIP" was false.** `TokenAdminRegistry.getPool()` returns live pools on all three chains. `getCCIPAdmin()` reverting answered a different question than the registry does — **absence of one interface is not absence of the system.** **(3) The underlying's backing is not unlocated.** A first draft said it could not be found; the cause was a wrong hostname, and the live Accountable feed publishes a full look-through at **CR 106.92%**. ⚠️ **What replaces them is a better criticism: about 70% of that reserve is in levered loop positions, Ethena is roughly five times the surplus, and 4.8% is the issuer's own yzPRIME.** **A syzUSD share is a claim on yzUSD at a readable NAV, and yzUSD is a claim on a levered book with a thin cushion.** **Structural is held at 2.0 rather than raised:** the corrected topology is better than the draft described, but the axis was set against the single-key finding *and* the backing chain, and only one of those has moved. **first measurement pass since 2026-06-08; no score change.** ⚠️ **The canonical vault was located and this coverage did not have it:** an ERC-4626 at `0xC8A8DF9B…` on Plasma, `totalAssets` 57,919,342 against `totalSupply` 53,722,377, giving a **NAV of 1.078123 — never previously recorded.** ⚠️ **Earlier work read `asset()` and `convertToAssets()` reverting on the Monad proxy as evidence syzUSD was not a vault. It was querying the OFT mirror**, where those reverts are expected; `token()` returning its own address confirms an OFT rather than an OFTAdapter, so **there is no lockbox bounding mirrored supply.** **The vault is not looping** — `totalAssets` is yzUSD held directly, so risk at this layer is pass-through and the leverage question belongs one layer down. ⚠️ **Authority is split and the weak half holds the value:** this wrapper's proxy owner is a bare EOA with no delay and is both implementation owner and ProxyAdmin owner, while yzUSD's token owner is a 2-day `TimelockController` — **the timelocked layer is not the one where 99% of the value sits.** The peer set is recorded as **not established**: zero peers returned for four eids we chose, which is not evidence of an empty set, since Plasma's eid is unknown to us. **Scores held**, because the backing basis one layer down remains unreadable and a re-score needs it. `last_verified` stays **2026-06-08**: only the on-chain layer was re-measured.*
