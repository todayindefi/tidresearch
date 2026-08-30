---
asset: "sUSDS"
slug: "susds"
aliases: ["sUSDS", "Savings USDS", "Sky Savings USDS"]
chains: ["eth", "base", "arb", "optimism"]
category: "vault-share"
underlying_assets: ["USDS"]
assessment_type: "full"
production: true
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susds"
date: "2026-05-27"
last_verified: "2026-08-25"
featured: false
issuer: "Sky Protocol (formerly MakerDAO)"
yield_bearing: true
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
# ⚠️ ONE SCORE MOVED, and it is a correction the frame exposed rather than a
# re-judgement of the asset:
#   backing_score 7.0 is NEW and renders as BACKING. This report previously
#     carried the collateral view as `underlying_score: 7.5` — HALF A POINT
#     ABOVE USDS's own `backing_score: 7.0`, on a reserve that IS USDS's
#     reserve. That contradicted this report's own stated rule that a wrapper
#     cannot outrank the asset it wraps, which was already applied to the
#     overall score in August 2026 but never to the axis beneath it. Backing is
#     now inherited from USDS at 7.0. ⚠️ Inherited, NOT independently judged:
#     if USDS's backing moves, this must.
#   underlying_score 7.0 is RETAINED and now renders as DEPENDENCIES — a
#     different question from Backing. Backing asks what the reserve holds;
#     Dependencies asks how concentrated it is and what it passes through to.
#     100% through USDS, about a third of that in raw USDC (correlated, not
#     diversified — the March 2023 DAI/USDC precedent), and a newer ≈14% credit
#     sleeve. Level with Backing rather than below: the dependencies are high
#     quality, they are simply not diverse.
#   liquidity_score 8.5 is unchanged and both legs agree — instant atomic
#     primary redemption AND deep permissionless secondary. Worse-leg scoring
#     does not bite here.
#   structural_score 7.0 is Contract & Admin already. volatility_score is the
#     Stability key for a NAV-referenced share. issuer_score unchanged at 7.0.
# ⚠️ `redemption_score: 8.5` is RETAINED but no longer rendered: it is the
# evidence for axis 3, and both legs are stated in prose under that heading.
axis_frame: six
volatility_score: 9.0
backing_score: 7.0
liquidity_score: 8.5
underlying_score: 7.0
structural_score: 7.0
issuer_score: 7.0
redemption_score: 8.5
overall_score: 7.5
---

# sUSDS — Risk Report

**Moderate-low risk · 7.5/10**

**Live data:** [sUSDS Backing Dashboard](https://tidresearch.com/dashboards/?asset=susds) — hourly peg, liquidity depth, NAV accrual, and sUSDS/USDS coverage from two independent reads, with the dependency chain through to [USDS](/reports/usds/) shown alongside. **The collateral look-through behind that USDS layer is on its dashboard** — this report covers the wrapper; what ultimately backs it sits one link upstream.

> **The permissionless one.** Of the on-chain ways to earn a Treasury-style yield on dollars, sUSDS is the one with no KYC, no geographic gate, no minimum, and no lockup — anyone can hold, transfer, and redeem it instantly. That accessibility, deep liquidity, and a battle-tested codebase are what make it the most usable option in its category. Two caveats keep it from scoring higher: the USDS dollar it's built on is upgradeable (with a freeze function Sky could switch on by governance vote), and about a third of USDS's backing is USDC, so sUSDS carries real USDC depeg correlation. Its score is now set **equal to** the [USDS](/reports/usds/) dollar it wraps, not above it — see the note below.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| around 3.75% APY (variable) | Sell on a DEX, or redeem | Instant, atomic: sUSDS → USDS → USDC | sUSDS since Sept 2024; mechanism battle-tested since 2019 | Ethereum + Base / Optimism / Arbitrum (+ Solana) |

## Summary

sUSDS is the savings token of **Sky Protocol** — the rebranded MakerDAO, the team behind DAI. You deposit **[USDS](/reports/usds/)** (Sky's stablecoin, a successor to DAI that converts 1:1 with it) and receive sUSDS, an ERC-4626 vault share whose redemption value rises over time as it accrues the **Sky Savings Rate (SSR)**, currently around **3.75% APY**.

**The reason sUSDS matters for a retail holder is access.** It is a DeFi savings position, not a securities wrapper: no KYC, no allowlist, no non-US restriction, no minimum, no waiting period. At around $6 billion in size with deep on-chain liquidity, exiting at fair value is essentially frictionless under normal conditions. That is the opposite of tokenized money-market tokens like USYC (allowlisted, non-US, $100k minimum — retail cannot hold it at all) or Ondo's USDY (non-US only, a 40-50 day lockup on fresh mints, fiat-wire-only primary redemption).

**Two things hold the score at 7.5 rather than higher**, and both are covered under the axes below: **USDS is upgradeable with a governance-addable freeze function** (axis 5), and **about a third of its backing is USDC**, so this is correlated to USDC rather than diversified away from it (axis 4).

**A note on why this is 7.5 and not higher.** sUSDS cannot rank above the **7.5** we publish for [USDS](/reports/usds/), the dollar it wraps: its entire value is a claim on USDS, so every risk in that report is also a risk here. The correct treatment is **equal, not lower** — the ERC-4626 wrapper sits on the same battle-tested codebase and adds no material risk of its own. If USDS re-rates in either direction, expect this to move with it.

## 1 · Stability

**Reference: NAV.** sUSDS pays yield by appreciating against USDS — there is no rebasing and nothing to claim. Your balance stays constant while each sUSDS becomes redeemable for slightly more USDS. **The redemption value only climbs**, so there is no meaningful price volatility at this layer.

**The one path to a drawdown here is a USDS depeg**, which is a question about collateral rather than about this vault — axes 2 and 4.

**What you actually earn, and the two things to understand about the rate:**

- ⚠️ **It is variable and governance-set.** The SSR is not a market rate or a fixed contract term — Sky (SKY-token) governance sets it and can raise or cut it. It broadly tracks prevailing short-term dollar rates and Sky's own revenue. **Do not underwrite a position on the current number persisting.**
- **It is funded by diversified backing, not a single fund**, with a protocol surplus buffer absorbing the gap when revenue runs below the rate being paid. What that backing consists of is axis 2; how concentrated it is, axis 4.

## 2 · Backing

**The reserve is USDS's, inherited whole.** sUSDS holds USDS and nothing else, so a claim here is worth what USDS is backed by. As of mid-2026 that book is:

| Component | Share | |
|---|---|---|
| **Star allocators** — Spark, Grove, Obex | ≈52% | Tokenized short-term T-bills, other stablecoins (USDT, PYUSD, RLUSD), on-chain crypto lending, OTC lending, private credit, AAA-rated corporate debt (Grove routes into a Janus Henderson CLO) |
| **Raw USDC in the PSM** | ≈33% | Fixed 1:1 swap liquidity — about $4.3 billion |
| **Overcollateralized crypto vaults** | ≈7% | Once a co-equal pillar, now a tail |

**This diversification is a genuine strength versus any product backed by one off-chain fund.** Short-term Treasuries, heavily overcollateralized crypto loans, and cash — well above the STRC-backed yield wrappers.

⚠️ **The axis is 7.0, inherited from [USDS](/reports/usds/) rather than judged separately** — the same reserve, so the same score. **A wrapper cannot hold better collateral than the asset whose collateral it is.** What holds it below a Treasury-pure score is the USDC concentration and the newer, less-transparent credit sleeve (OTC lending + private credit + CLO, ≈14% combined) — both of which are scored as concentration under axis 4.

## 3 · Liquidity & Exit

**Both exit paths, and the axis takes the worse one. Here they agree, and this is the asset's strongest dimension.**

**Primary redemption — instant, atomic, permissionless.** Redeem sUSDS → USDS in the vault at any time, then USDS → USDC 1:1 through the Peg Stability Module. **No cooldown, no redemption fee, no gatekeeper, no fiat rails, no KYC, no minimum.** Getting in is the same: deposit USDS at [sky.money](https://sky.money/susds) or through Spark, or swap USDC → USDS 1:1 through the PSM first.

**Secondary — deepest in its category.** Around $6B in size with deep permissionless DEX liquidity, plus 1:1 USDS↔DAI convertibility. **No KYC or geographic gate on either path.**

⚠️ **The one thing to watch on exit is PSM USDC liquidity under extreme stress.** The 1:1 USDS↔USDC swap depends on USDC sitting in the module; in a severe USDC-specific crisis that liquidity could be drawn down and the clean 1:1 exit would lean on the DEX market instead. **A tail consideration, not a normal-conditions concern** — and the reason this is 8.5 rather than a perfect score, alongside a small reservation for cross-chain reliance on the Spark PSM off Ethereum.

## 4 · Dependencies

⚠️ **100% of this asset's value passes through one other asset**, and within that asset a third sits in a single name.

**Two concentrations, and the second is the one most readers get wrong:**

**1. The whole position depends on [USDS](/reports/usds/).** There is no diversification at this layer and none is possible. Every risk in the USDS report is a risk here.

**2. ⚠️ About a third of USDS backing is raw USDC, so sUSDS is correlated to USDC — not diversified away from it.** Roughly $4.3 billion sits in the PSM at a fixed 1:1 swap, with further USDC-denominated exposure inside the allocator deployments on top. **That is excellent for redemption liquidity and it is exactly what makes axis 3 strong** — the two are the same fact read from opposite ends.

**The precedent is March 2023:** when USDC briefly depegged during the Silicon Valley Bank failure, **DAI followed it down** because of heavy USDC backing through the same kind of module. ⚠️ **So treat sUSDS as roughly "two-thirds diversified collateral plus one-third USDC", not as something safer than USDC.** If you already hold a lot of USDC elsewhere, **this adds to that exposure rather than diversifying it.**

**3. A newer, less-transparent credit sleeve.** OTC lending, private credit and a AAA CLO now total ≈14% of backing. High-grade on paper, and materially harder to look through than a T-bill.

**The axis sits at 7.0 — level with Backing, not below it.** The dependencies are high quality; what the axis records is that they are **concentrated rather than diverse**, and that the concentration is in the one name whose failure mode has already been observed once.

## 5 · Contract & Admin

**The contracts are the lowest-risk part of the story.** sUSDS is a standard ERC-4626 vault on Ethereum at `0xa3931d71877c0e7a3148cb7eb4463524fec27fbd`, with native deployments on Base (`0x5875eee1…`), Optimism (`0xb5b2dc7f…`) and Arbitrum (`0xddb46999…`), plus Solana. The savings module, PSM and vault all descend from **MakerDAO's codebase, live and heavily audited since 2017**, with the savings-rate mechanism specifically running since 2019 as the DAI Savings Rate and sDAI. It has been battle-tested through Black Thursday in March 2020 and the March 2023 USDC depeg. **There are no known unresolved contract vulnerabilities in the savings / PSM / vault path.**

⚠️ **The binding concern is not code — it is that USDS is upgradeable, and a freeze function is governance-addable.** When MakerDAO rebranded to Sky, USDS shipped *without* a freeze function but *with* the upgrade machinery that would let governance add an address-level **freeze / blacklist** later by vote. **DAI, by contrast, remains immutable and unfreezable.** It is governance-gated — a public vote and a timelock delay, not a unilateral flip — and **no freeze function is enabled as of this writing.** But **if you specifically need a censorship-resistant position, hold DAI instead.**

**Sky governance also sets the savings rate, changes collateral parameters and executes upgrades** through spells passing a security-module timelock. ⚠️ **Re-verified 2026-08-25: the GSM delay reads 172,800 seconds — 48 hours — with `owner()` at zero, and `plot()` and `drop()` answer to the same DSAuth authority.** **That is notice, not interruption: no independent party can cancel a queued action inside the window.** A malicious or captured governance spell is the tail risk; the delay and the track record are the mitigants.

**For sizing, prefer the canonical Ethereum deployment.** Balances on Base / Optimism / Arbitrum / Solana add a bridging and cross-chain-PSM dependency on top of the base vault.

## 6 · Issuer

**Sky Protocol (formerly MakerDAO)** — and ⚠️ **the issuer surface here is identical to USDS's**, because sUSDS and USDS are the same legal entity. A holder's ultimate claim is against Sky either way, which is why this axis carries the same **7.0** as the [USDS report](/reports/usds/).

**In its favour:** DAO-governed with a public forum and on-chain votes, one of the longest track records in DeFi, audits across many engagements, and a $10M bug bounty.

**Against, and these are what dock it from higher:**

- ⚠️ **The 48-hour GSM timelock is notice rather than interruption** — schedule and cancel answer to the same authority (axis 5).
- **The upgradeable, freezable contract** is a governance decision rather than a fixed guarantee.
- **"Endgame" structural complexity** — the multi-Star / subDAO structure, which includes Spark, is materially harder for a holder to reason about than a single governance body.
- **Governance-capture tail risk**, mitigated by the timelock and the track record but not eliminated.

## Who it's for

Holders who want a simple, liquid, permissionless way to earn a roughly money-market-style yield on dollars on-chain, who value instant no-questions-asked exit, and who accept **(a)** that the underlying USDS dollar is governed and upgradeable rather than immutable, and **(b)** that they are taking on USDC correlation in exchange for that liquidity. It is the natural choice when access or jurisdiction rules out the gated tokenized-fund products.

## Who should avoid

- **Anyone who needs a censorship-resistant, immutable dollar** — USDS is upgradeable and a freeze function is governance-addable; hold DAI instead (axis 5).
- **Anyone trying to diversify away from USDC** — sUSDS is correlated to USDC, not independent of it (axis 4).
- **Anyone underwriting a fixed return** — the Sky Savings Rate is variable and can be cut by governance (axis 1).

## What to watch

- **Sky governance: freeze-function activation.** A future spell could enable address-level freezing; if that ships, the structural and censorship picture changes. Track the [Sky governance forum](https://forum.sky.money) (axis 5).
- **The Sky Savings Rate.** Around 3.75% now and governance-set — watch for rate-change votes (axis 1).
- **USDC.** Because USDS holds significant USDC backing, a USDC depeg is the main path to an sUSDS depeg. **A USDC wobble is your early-warning signal** (axis 4).
- **USDS backing composition.** The share held in USDC versus Treasuries and crypto collateral shifts over time; **a rising USDC share means rising correlation** (axes 2 and 4).
- **Cross-chain PSM health** if you hold sUSDS on Base / Optimism / Arbitrum / Solana rather than Ethereum (axis 5).
---

*This report is based on Sky Protocol's public documentation, Spark documentation, public reporting on the USDS freeze-function debate, and on-chain reads of the sUSDS vault, through 2026-05-27. The Sky Savings Rate is governance-set and subject to change, and USDS's upgrade/freeze capability is a governance decision, not a fixed contract guarantee. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

## Revision history

- **2026-08-25 — admin path re-verified; no score change.** The GSM delay reads **172,800 seconds — 48 hours** — with `owner()` at zero, and ⚠️ **`plot()` and `drop()` answer to the same DSAuth authority**, so there is no independent canceller.
- **2026-08-18 — Overall held at 7.5**, level with [USDS](/reports/usds/) rather than above it, since a wrapper cannot outrank the dollar it wraps.
- **2026-07-09 — collateral model refreshed.** Star-allocator system about 52%, crypto CDPs about 7%.
