---
asset: "yzUSD"
slug: "yzusd"
aliases: ["yzUSD", "Yuzu USD", "Yuzu Money USD"]
chains: ["plasma"]
category: "stablecoin"
peg_mechanism: "active-strategy"
assessment_type: "light"
date: "2026-06-08"
last_verified: "2026-06-08"
last_revised: "2026-08-29"
featured: false
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=yzusd"
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
audited_reserves: false
market_cap_approx: 58497074
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
# ⚠️ Two of these five numbers MOVED when the frame was applied; they are not a
# relabelling of the old four:
#   liquidity_score 4.0 -> 3.0. Axis 3 is scored on the WORSE exit leg, never the
#     average. The venue leg is strong — Plasma clears $250k inside 13 bps — but
#     primary redemption is KYC-gated and best-effort, and that is the leg that
#     binds. 3.0 sits just above syzUSD's 2.5 because this is the same gate
#     WITHOUT the wrapper hop, not a different gate.
#   structural_score 5.0 is NEW. The old stablecoin rubric had no Contract & Admin
#     axis, so yzUSD's 2-day OZ TimelockController on the token owner was scored
#     nowhere. It is the better half of a split authority and rates above every
#     other axis here — held to 5.0, not higher, because the timelock's proposer
#     and executor set is NOT established in this coverage.
# Stability, Backing and Issuer carry over unchanged; `peg_mechanism_score` is the
# Stability key for a $1-referenced asset. See content.config.ts for the frame.
axis_frame: six
peg_mechanism_score: 4.5
backing_score: 4.5
liquidity_score: 3.0
# DEPENDENCIES (axis 4) — authored, not seeded: this report had no
# `underlying_score`. 3.0 is the lowest axis here and the reserve's own risk
# flags are why. Ethena is ~34.6% of backing at roughly 4.2x the surplus,
# ~69.9% sits in levered loop positions, 4.8% is the issuer's OWN yzPRIME
# (recursive), and yzPP — third-party junior capital redeemable on a 30-day
# window — is ~90% of the surplus. ⚠️ It is not lower because none of these
# has failed and the look-through is published and reproducible; it is a
# concentration and circularity finding, not an opacity one.
underlying_score: 3.0
structural_score: 5.0
issuer_score: 4.0
overall_score: 4.0
chain_overrides:
  monad:
    peg_mechanism_score: 3.5
    backing_score: 4.5
    liquidity_score: 2.5
    # Dependencies do not vary by chain: the reserve is one book wherever the
    # token is mirrored. Deliberately absent rather than repeated.
    # The mirror's authority is the bare EOA bridge with no delay — the opposite
    # half of the split from the timelocked token owner above.
    structural_score: 2.0
    issuer_score: 3.5
    overall_score: 3.0
---

# yzUSD — Risk Report

**Significant risk · 4.0/10** (3.0/10 on Monad)

> ⚠️ **What is current and what is not.** The on-chain figures below — supply, the vault relationship, the authority split and the reserve address — were measured **2026-08-29**. The rest of the body, including the strategy description and the redemption mechanics, dates from **2026-06-08** and has not been re-read. The card shows both dates.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None on yzUSD itself — yield accrues only inside the syzUSD wrapper | Secondary DEX only for retail | KYC-gated, best-effort | ~12 months | Plasma (canonical), Monad, Ethereum |

## What this actually is

yzUSD is the base unit of Yuzu Money, a yield-bearing stablecoin protocol. **yzUSD does not itself pay yield** — it is the unit you hold, and yield accrues only when it sits inside the [syzUSD](/reports/syzusd/) wrapper. The peg is held by overcollateralization against an actively managed basket of curated DeFi yield strategies, with a junior tranche restricted to accredited investors and a Reserve Fund behind it.

⚠️ **The single most important thing measured on 2026-08-29 is that yzUSD is barely a circulating stablecoin at all.** Of 58,497,074 tokens on Plasma, **57,990,877 — 99.1% — sit inside one syzUSD vault.** Float outside the wrapper is roughly 506,000 tokens, under one percent. **That changes what "supply" means for every ratio computed against it:** yzUSD is best read as a **wrapper input**, and any depth or coverage figure quoted against total supply describes a quantity almost entirely locked in a single contract.

⚠️ **It is also a Plasma asset, not a multi-chain one.** Yuzu's own key-addresses documentation records *"Not deployed"* on every chain but Plasma:

| chain | supply | since 2026-06-08 |
|---|---|---|
| **Plasma (canonical)** | **58,497,074.10** | **+38.9%** (was ~42.1M) |
| Monad | 23.77 | unchanged — a stub |
| Ethereum | 0.10 | unchanged — a placeholder |

**Two of the three deployments hold a rounding error between them.** What travels is the syzUSD wrapper, not this token.

## 1 · Stability

**Reference: a $1 par target.** yzUSD is not yield-bearing at this layer, so unlike its wrapper it has a peg to hold rather than a NAV to accrue.

**It is holding it.** Market **0.9999** against par, a **−0.009% deviation**.

⚠️ **But the mark is thin and it is old.** 24h volume is **$24.74**, and the price carries an **11.5-hour age** against a wrapper priced off a live pool. **A deviation struck on that little turnover is weak evidence about fair value and strong evidence about exit cost.** The peg is not the interesting axis on this asset; axes 2 and 4 are.

**The token barely moves — 2 Transfer events in 80,000 blocks** — which is coherent for an asset where 99% of supply is locked inside a wrapper.

## 2 · Backing

**The backing is published, and it reconciles.** Accountable's feed at **`yuzu.accountable.capital`** carries a full look-through on a 15-minute verification interval. `totalSupply` reconciles exactly against chain, and the satellite conservation is wei-exact.

```
backing    $63,747,863.77
supply     $58,497,074.10
CR            108.98%          <- read 2026-08-30 01:51 UTC
surplus     $5,250,789.67
```

**So the asset is overcollateralized on its own published basis.** ⚠️ **The defensible criticism is not that the backing is missing — it is what the backing consists of**, and that belongs to axis 4.

⚠️ **A 108.98% CR computed over a book that is roughly 70% levered is not an 8.98% cushion in spot terms.** The ratio is real; what it is a ratio *of* is the thing to read.

**The Reserve Fund is thin, not empty: $503,428.89, or 0.86% of supply.** Almost all of it is **502,675.95 `aMonUSDT0` on Monad**. ⚠️ **A check for yzUSD on Plasma or ETH on Ethereum returns zero and looks like an empty reserve** — the balance sits on a different chain in a different token, and enumerating the address's transfer history finds it where guessing token contracts does not. **The supportable criticism is that it has not grown with issuance:** supply added roughly $16.4M over the same window. ⚠️ **A reserve that does not scale with what it protects is not functioning as one**, which is why `audited_reserves: false` remains correct.

⚠️ **Expect the live dashboard to show a different CR from the one above.** The reserve moves in **steps rather than drifts** — five discrete steps in the last thirty days — so a page figure and a tile figure taken hours apart can differ by around **two percentage points against a 30-day range of under four.** **Neither is stale; they are separate moments in a series that jumps.**

**One measurement caution this report follows:** the composition table carries its own timestamp, roughly 26 hours staler than the headline, and sums to about $63.61M against the $62.55M headline. ⚠️ **So shares are quoted as shares and no CR is re-derived from them** — mixing the two bases would produce a number neither source published.

## 3 · Liquidity & Exit

**Both exit paths, and the axis takes the worse one.**

**Primary redemption — the binding leg.** KYC-gated and best-effort. ⚠️ **Reachability has never been probed, and unmeasured is not open.** This is why axis 3 sits at 3.0 rather than at the 4.0 the venue leg alone would support.

**Secondary — the better leg, and healthy.** ⚠️ **Do not read low turnover as thin depth.** The Curve yzUSD/USDT0 pool on Plasma clears **$250,000 inside 13 basis points**:

```
$1k     −1.33 bps
$10k    −1.56 bps
$250k  −12.13 bps
```

**Turnover and depth are different quantities.** Low volume means nobody is trading it, not that you cannot get out — and on this leg you can, at retail size and well beyond it.

⚠️ **The constraint sits one layer up, on the wrapper — and further out than the chain sizes suggest.** See [syzUSD](/reports/syzusd/): **$11.0M of issuer vault stands on Monad against an enumerated $483K of swap TVL**, but **a routed $100k exit there still clears inside 10 bps**, and the enumeration misses venues the router actually uses. The gap is real and it is a large-holder problem past $100k, **not a retail one.**

## 4 · Dependencies

⚠️ **This is the axis that carries this asset's risk, and the old rubric had nowhere to put it.** The CR is fine; what stands behind it is the finding.

| Exposure | Share of backing | Why it is a dependency and not just an asset |
|---|---|---|
| **Levered loop positions** | ~70% — about **$44.5M across 12 `_Loop` strategies** | A ratio measured on a levered book is not that ratio on spot |
| **Ethena** (USDe + sUSDe) | **34.6%** — $22,046,996 | ⚠️ Roughly **4.2× the entire $5,250,790 surplus** — a move impairing Ethena by a quarter erases the cushion |
| **`yzPRIME`** (Yuzu's own) | **4.8%** | ⚠️ **Recursive** — the reserve is partly backed by the issuer's other liability, and that product runs a **$4,557 surplus on $7,577,108**. It has no cushion of its own to lend |
| **`yzPP`** (junior tranche) | ~90% of the surplus | ⚠️ **Circular** — first-loss capital whose value is a claim on the book it cushions, and third-party money redeemable on a 30-day window |

**Read the last two rows together and the cushion looks different from 8.98%.** ⚠️ **Ex-junior the ratio is 100.89%, not 108.98%** on the underlying's own published alternative basis — because the surplus is largely capital that can ask to leave.

**Diversification is real but shallow:** roughly a dozen strategies across nine chains, with the top name at more than a third. **A reserve spread across many venues that all lend against the same few assets is one exposure wearing several names.**

## 5 · Contract & Admin

⚠️ **The authority is split, and the weaker half holds the value.**

| layer | owner | delay |
|---|---|---|
| **yzUSD token** (Plasma) | `0x21304575…b7cfbc` — an OZ `TimelockController` | **2 days** (`getMinDelay()` = 172,800) |
| **syzUSD vault + ProxyAdmin** (Plasma) | `0xa2a97004…` — a **4-of-5 Safe** | none stated |
| **syzUSD bridge** (Monad) | `0x4ea00dc0…4a89ae` — a **bare EOA** | **none** |

**The syzUSD vault and its ProxyAdmin are both owned by `0xa2a97004…`, verified live as a 4-of-5 Safe — not a bare key. The bare EOA `0x4ea00dc0…` owns the bridge.** ⚠️ **So the single-key exposure is real, and its blast radius is the roughly 10.9M mirrored shares rather than the 99.1% of value sitting in the vault.**

**This axis scores 5.0 — the highest on this report — and the two-day delay is why.** ⚠️ **It is also why the score is not higher: whether that delay has a floor, and who can propose through it, is not established.** Two days is a setting until the proposer set and any `MINIMUM_DELAY` are read. **And on Monad the axis drops to 2.0**, because the mirror's authority is the bare key with no delay.

## 6 · Issuer

**The issuer is a named legal entity — YUZU FINTECH LLC, a Virtual Asset Service Provider registered under the Kutaisi Free Industrial Zone rules in the Republic of Georgia**, named as contracting party in its own terms. ⚠️ **That is an accountability anchor rather than prudential supervision.**

⚠️ **The operators are unnamed.** There is no disclosed CEO or founder, and **the people running a roughly 70%-levered book day to day remain anonymous.** The seed round was $30M FDV with backers including Sam Kazemian (Frax), Michael Bentley (Euler), Wintermute and Hypernative — **backers are not operators.**

⚠️ **The attestation channel is related-party: Accountable's founder is an investor in Yuzu.** Every backing figure on this page comes from that one source. **It does not make the numbers wrong** — and nothing here is a second pair of eyes. ⚠️ **Two other Accountable hostnames fail DNS, so a check that stops at those returns nothing**; the live host is the one under axis 2.

⚠️ **Governance is disclosed with its denominator missing.** The published policy states a quorum of **4 of an unstated total** — 4-of-5 and 4-of-25 are indistinguishable from what is published — alongside a default action of `block` that does not say what is blocked. **Establishing the denominator needs the signer set, which the disclosure does not carry.**

## Who should avoid this

- **Anyone who reads a 108.98% CR as an 8.98% cushion.** About 70% of the reserve is levered, Ethena alone is roughly 4.2× the surplus, and ex-junior the ratio is 100.89% (axes 2 and 4).
- **Anyone uncomfortable with an issuer's reserve holding the issuer's own product.** 4.8% is `yzPRIME`, which runs a $4,557 surplus on $7.58M of its own liabilities (axis 4).
- **Anyone treating the two-day timelock as protection.** It governs the token, not the wrapper where the value sits (axis 5).
- **Anyone who needs a primary exit.** Redemption is KYC-gated and best-effort, and has never been probed (axis 3).
- **Anyone reading the three-chain deployment as diversification.** Two of the three are empty.

## What to watch

- **Whether the Reserve Fund grows with issuance.** $503K against $58.5M — 0.86% — and the ratio is what to track, not the balance (axis 2).
- **The loop share and the Ethena concentration.** Those two, not the headline CR, are what would move this score (axis 4).
- **The timelock's proposer set and delay floor**, which would establish whether the two days is structural or a setting (axis 5).
- **Whether the wrapper's bare EOA is ever replaced by a multisig or timelock.** Unchanged across 82 days (axis 5).
- **Whether the operators are ever named** (axis 6).
---

*Revision history: 2026-08-29 — **first measurement pass since 2026-06-08; no score change.** Supply on Plasma is **58,497,074, up 38.9%** over the gap, while Monad (23.77) and Ethereum (0.10) remain a stub and a placeholder. ⚠️ **99.1% of all yzUSD sits inside a single syzUSD vault**, so this is a wrapper input rather than a circulating stablecoin, and every ratio quoted against supply describes a locked quantity. **Backing is published and verifiable — CR 106.92% as measured 2026-08-29**, $62,546,859.02 against $58,497,074.10 (⚠️ **the reserve moves in steps; the body carries the current read**) — with **about 70% of the reserve in levered loop positions, Ethena at 34.7% of backing, then roughly five times a $4.05M surplus, and 4.8% in the issuer's own yzPRIME**, whose book runs a $4,557 surplus on $7.58M. **The Reserve Fund holds $503,428.89, 0.86% of supply**, almost all `aMonUSDT0` on Monad. **Authority is split across three layers:** the yzUSD token owner is an OZ `TimelockController` with a 2-day delay, the syzUSD vault and its ProxyAdmin are a 4-of-5 Safe, and the bridge is a bare EOA with no delay. **Scores held at 4.0**, because the observations point in both directions and a re-score needs a basis the composition figures do not settle. `last_verified` stays **2026-06-08**: only the on-chain layer was re-measured, and the strategy and redemption material has not been re-read.*
