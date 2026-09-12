---
asset: "USDS"
slug: "usds"
aliases: ["USDS", "Sky USDS", "Sky Dollar"]
chains: ["eth", "solana", "base", "arb"]
category: "stablecoin"
peg_mechanism: "Hybrid (USDC PSM + DAI parity + crypto/RWA CDP)"
assessment_type: "full"
production: true
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usds"
date: "2026-05-27"
last_verified: "2026-08-25"
last_revised: "2026-09-07"
featured: false
issuer: "Sky Protocol (formerly MakerDAO)"
market_cap_approx: 8411000000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Migrated at this refresh. ⚠️ structural_score
# CANNOT RENDER without the frame — the historical stablecoin rubric has no
# Contract & Admin row, so the field alone would be schema-legal and invisible.
#   underlying_score 7.0 is NEW and renders as DEPENDENCIES: passthrough and
#     concentration, not collateral quality. ~35% of backing is USDC, so USDS is
#     CORRELATED to USDC rather than diversified from it.
#   structural_score 7.0 is NEW. ⚠️ HELD at 7.0 on the cohort rubric rather than
#     leniency: what earns a dock is the ABSENCE OF A REACTION WINDOW, and USDS
#     still gives one where USDT and thBILL give none.
#   ⚠️ USDS IS THE CONTROL CASE THE COHORT RUBRIC IS PINNED TO. Changing this
#     row propagates to every asset scored against it — see usdt.md, which cites
#     USDS by name on its Issuer dock.
#   ⚠️ Both axes are set EQUAL to sUSDS's, not below: a wrapper's contract
#     surface is its own PLUS the underlying's, so the parent cannot score worse
#     than the wrapper on a surface they share. susds.md already published both.
# ⚠️ OVERALL 7.5 IS HELD AND SITS +0.17 ABOVE ITS AXIS MEAN (7.33), against the
# at-or-below convention. It was already +0.10 above on five axes, so the sixth
# widened a gap it did not cause. Deferred deliberately: the vow-deficit trigger
# on Backing fires or clears around 2026-09-20/22 and will force a re-derivation
# of the whole set, and sUSDS is equalised to USDS so any move propagates to a
# second asset. Stated on the page rather than carried silently.
# ⚠️ `last_verified` HOLDS at 2026-08-25 — this pass authored two axes from a
# hand-walk observed 2026-08-23; it did not re-read the peg, backing or issuer
# material.
axis_frame: six
peg_mechanism_score: 7.5
backing_score: 7.0
liquidity_score: 8.5
underlying_score: 7.0
structural_score: 7.0
issuer_score: 7.0
overall_score: 7.5
---

# USDS — Risk Report

**Moderate-low risk · 7.5/10**

**Live data:** [USDS Backing Dashboard](https://tidresearch.com/dashboards/?asset=usds) — hourly peg, liquidity depth, issuer and dependency reads, and **the collateral look-through behind the reserve** (USDC, JTRSY, BUIDL, cbBTC, wstETH, JAAA, PYUSD and the rest, each as a share). ⚠️ **That breakdown answers "what actually backs this" and exists nowhere else** — this report describes the mechanism; the dashboard shows the current composition.

> **The DAI successor, with one asterisk.** USDS is Sky's flagship dollar — Sky is the rebranded MakerDAO, the team behind DAI — and it converts 1:1 with DAI in both directions. It's deeply liquid, overcollateralized, on-chain transparent, and built on a codebase that has run since 2017. Two things keep it below a top-tier score: about a third of its backing is USDC, so it carries genuine USDC depeg correlation; and unlike DAI, USDS is an *upgradeable* contract — Sky governance could add an address-freeze function by vote (it hasn't, and none is live today). If you want an unfreezable dollar, you can convert USDS to DAI 1:1 at any time.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None on USDS (stake to sUSDS for yield) | Sell on a DEX, swap 1:1 to USDC, or convert 1:1 to DAI | Instant, atomic: USDS → USDC 1:1 via the PSM | USDS since Sept 2024; codebase battle-tested since 2017 | Ethereum + Solana + Base / Arbitrum / Optimism (via SkyLink) |

## Summary

USDS is the main stablecoin of **Sky Protocol**, the protocol that operated as MakerDAO until its 2024 rebrand and still runs the system behind DAI. USDS launched in September 2024 as the designated DAI successor, and the two are fully interchangeable: you can upgrade DAI to USDS or downgrade USDS to DAI at par, any time. They are claims on the **same collateral system** — so "what backs USDS" is really "what backs the combined Sky dollar system," about $12.8 billion across the two tokens.

USDS is fully permissionless and US-accessible: no KYC, no allowlist, no geographic gate on the token itself. It holds its dollar peg through three mechanisms inherited from MakerDAO: a 1:1 swap to USDC through the Peg Stability Module (PSM), 1:1 convertibility with DAI, and overcollateralized crypto vaults. At roughly $8.4 billion in supply with deep on-chain liquidity, exiting at the peg is essentially frictionless under normal conditions.

The 7.5/10 reflects a genuinely robust, systemically important stablecoin — clearly stronger than opaque or thinly-collateralized peers, a notch below fully-regulated USDC — held back by the two retail-relevant caveats below.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 7.5 | Three-layer, battle-tested peg — USDC PSM 1:1, DAI parity, and overcollateralized vaults — with a clean roughly-20-month history. Strong partly *because* it's USDC-anchored, which is also its main transmission risk. |
| Backing | 7.0 | Overcollateralized, diversified, on-chain transparent, with a growing surplus reserve — well above opaque peers. Held down by the ≈33% USDC concentration (the largest single asset, and rising) and off-chain Treasury-manager exposure. |
| Liquidity & Exit | 8.5 | About $8.4B in size, deep permissionless DEX liquidity, plus 1:1 convertibility to both USDC (via the PSM) and DAI. Exit at peg is near-frictionless. No KYC or geographic gate. |
| Dependencies | 7.0 | **Prices passthrough and concentration, not collateral quality.** ⚠️ **About 35% of backing is USDC**, range-bound between roughly 33% and 40% across the last 59 days — so **USDS is correlated to USDC rather than diversified from it.** The March 2023 precedent is the point rather than an analogy: DAI followed USDC down through this same module. A less-transparent credit sleeve runs about **14.8%** (OTC crypto lending 9.64%, AAA corporate 4.99%, private credit 0.21%). ⚠️ **And the mix is drifting the wrong way** — crypto lending 29.18% → 30.66% while T-bills fell 15.78% → 13.85%. |
| Contract & Admin | 7.0 | Both walked layers — contract-upgrade and asset-permission on Ethereum — terminate at **DSPause with a 2-day timelock**. ⚠️ **The 2 days does not cover everything: the UsdsJoin path on both layers reads no timelock at all.** ⚠️ **And the delay is notice rather than protection.** `plot()` and `drop()` share **one DSAuth authority**, so there is no independent canceller — against a compromised proposer, the power to cancel belongs to the compromised party. `MIN_DELAY()` and `MINIMUM_DELAY()` both revert and `setDelay()` executes through the pause proxy, so **2 days is a current setting, not a floor.** ✅ **Held at 7.0 rather than docked, and on the rubric rather than on leniency: what earns a dock is the absence of a reaction window, and USDS still gives one where [USDT](/reports/usdt/) and [thBILL](/reports/thbill/) give none.** ⚠️ **The delay is established; the compromise cost is not** — the walk records no signer threshold, so this row makes no claim about how many keys it would take. |
| Issuer | 7.0 | Sky/MakerDAO — among the most established, longest-running issuers in DeFi; DAO-governed with a 48-hour timelock, broad audits, and a $10M bounty. Docked for the upgradeable contract with a governance-addable freeze, governance complexity (the Endgame "Stars"/subDAO structure), and governance-capture tail risk. |
| **Overall** | **7.5** | A systemically important, deeply liquid, battle-tested, overcollateralized and transparent dollar — stronger than opaque or thin peers, a notch below fully-regulated USDC. The two caveats that keep it here: about a third of backing is USDC (real correlation, not diversification), and USDS is upgradeable with a governance-addable freeze that DAI lacks. Strong for holders who accept Sky's governance/upgrade surface and the USDC coupling; those who need an unfreezable, USDC-decorrelated dollar should convert to DAI. ⚠️ **Held, and it sits +0.17 above its own axis mean of 7.33** — against the at-or-below convention applied elsewhere in this coverage. It was already above the mean on five axes, so authoring the sixth widened a gap it did not cause. **It is held rather than adjusted for two reasons:** a vow-deficit trigger on Backing fires or clears around 2026-09-20 and will force a re-derivation of the whole set, and **[sUSDS](/reports/susds/) is equalised to this number under the wrapper rule**, so moving it moves a second asset. **Moving it now would move it twice in two weeks.** |

## 1 · Stability — 7.5

**The peg is defended in three layers rather than one:** a **USDC PSM convertible 1:1**, **parity with DAI**, and **overcollateralized vaults** behind both. ✅ **It has held across roughly twenty months with a clean record**, and the layering is why — a single mechanism failing does not leave the peg undefended.

⚠️ **It is strong partly *because* of the USDC leg, which is the same fact that docks Backing and Dependencies below.** A PSM that converts 1:1 on demand is the most reliable peg mechanism available and it works by holding the asset it converts into. **The stability this buys and the concentration it creates are the same arrangement seen from two sides**, and this report scores them separately rather than counting the benefit twice.

## 2 · Backing — 7.0

USDS and DAI share one collateral pool, about $12.8 billion combined. As of mid-2026 the mix looks quite different from the classic MakerDAO picture, and it's worth understanding how the system actually mints dollars today:

- **A large raw-USDC reserve (~33%)** — roughly $4.3 billion of actual USDC sitting in the Peg Stability Module. This is the single largest asset and the direct 1:1 swap inventory.
- **The Star-allocator system (~52%)** — the dominant mechanism now. Most USDS is minted by three "Star" allocators — **Spark (~26%), Grove (~21%), and Obex (~5%)** — that then deploy that liquidity downstream into a diversified book: tokenized short-term T-bills, other stablecoins, on-chain crypto lending, over-the-counter (OTC) crypto lending, private credit, and AAA-rated corporate debt (Grove routes into a Janus Henderson CLO). This allocator layer, not the old crypto-vault sleeve, is the centerpiece of Sky's backing in 2026.
- **Overcollateralized crypto vaults (~7%)** — ETH, staked ETH, WBTC and similar, posted well above the value borrowed. Once a co-equal pillar of MakerDAO, this is now a small tail sleeve.
- **A small slice of direct real-world-asset vaults** (<1%).

The rest of the backing remains diversified, overcollateralized where it's crypto-backed, and largely on-chain transparent — a stronger posture than a single off-chain fund. The T-bill and credit sleeves do carry off-chain manager, custody, and counterparty dependence.

## 3 · Liquidity & Exit — 8.5

This is one of USDS's strongest dimensions. There are three permissionless exits, all instant and atomic:

- **Swap USDS → USDC 1:1** through the Peg Stability Module (no fee in normal conditions).
- **Convert USDS → DAI 1:1** if you'd rather hold the immutable dollar.
- **Sell on a DEX**, where USDS has deep liquidity.

No KYC, no minimum, no lockup, no gatekeeper. The one tail consideration is the PSM's USDC inventory in an extreme, USDC-specific crisis — if that drained, the clean 1:1 swap would lean on the DEX market instead. That's a stress-scenario caveat, not a normal-conditions concern.

## 4 · Dependencies — 7.0

**What USDS passes through to, as distinct from the quality of what backs it.**

Two dependencies matter to a retail holder, and the first is much the larger.

**First, the USDC concentration.** About a third of the system's backing is **raw USDC held** — roughly $4.3 billion in the PSM pocket, verified directly on-chain — and that's before counting broader **USDC-denominated** exposure sitting inside the allocator deployments (a wider, softer correlation on top of the direct one). USDC is still the largest single asset. The practical takeaway is unchanged: **USDS is not safer than USDC; it carries roughly a third of USDC's risk directly**, on top of its own. If a USDC depeg happened, USDS would feel it. The precedent is March 2023, when DAI briefly followed USDC down during the Silicon Valley Bank scare because of heavy USDC backing through the same kind of module. (USDS itself didn't exist yet, and has never depegged in its own roughly 20-month history — but the channel is the same.) If you already hold a lot of USDC elsewhere, USDS adds to that exposure rather than diversifying it. Note too that Sky's cash reserve is no longer USDC-only — it also holds meaningful balances of **USDT, PYUSD, and RLUSD** — so the stablecoin basket is broader than a single issuer.

**Second, a newer credit sleeve.** Routing through the Star allocators, Sky now carries credit and counterparty exposures that go beyond the old "T-bills + overcollateralized crypto" story: **OTC crypto lending (~10% of look-through backing), AAA corporate debt via the Grove/Janus Henderson CLO (~3.5%), and some private credit.** Combined, this less-transparent credit sleeve is on the order of ~14%. It is still diversified, still largely reported through Sky's on-chain risk dashboards, and small relative to the whole — but it is a genuinely newer, less-visible risk than a pure Treasury-and-crypto book, and it's the thing to watch if it grows or if one of the Star allocators hits trouble.

## 5 · Contract & Admin — 7.0

### The upgrade and freeze caveat

Unlike DAI — which is an immutable, unfreezable contract — **USDS is upgradeable**. It launched without an address-freeze function and **does not have one today**. But the upgrade machinery means Sky governance could add an address-level freeze or blacklist later through a governance vote. So the risk is a *latent capability*, not a live feature: a censorship/centralization surface that simply doesn't exist for DAI.

The mitigant is the process: any such change would require a public SKY-governance vote and then sit behind a **48-hour delay** before it could take effect. ⚠️ **Read that delay as notice rather than as a veto.** Measured on the same DSPause: `plot()` and `drop()` share **one DSAuth authority**, so there is no independent canceller — **against a compromised proposer, the power to cancel belongs to the compromised party.** `MIN_DELAY()` and `MINIMUM_DELAY()` both revert and `setDelay()` executes through the pause proxy, so **48 hours is the current setting rather than an enforced floor.** ⚠️ **And it does not cover every path: the UsdsJoin route reads no timelock on either walked layer.** ✅ **What the window still buys is real and is why this does not carry a dock — two days is two days of public warning, which several comparable assets do not give at all.** And there's a clean escape hatch — **if you specifically need a censorship-resistant dollar, hold DAI** (convert USDS to DAI 1:1), or watch for "PureDai," Sky's proposed immutable fork (still unlaunched as of 2026).

### What the contracts are doing

The USDS token (`0xdC035D45d973E3EC169d2276DDab16f1e407384F`) is an upgradeable proxy. Changes — upgrades, new minters, parameter changes — route through **Sky (SKY-token) governance → a 48-hour Governance Security Module delay → the Pause Proxy**, which is the only *governance* controller. Re-verified on-chain 2026-08-23: the delay reads **exactly 48 hours** (172,800 seconds), the pause contract's `owner()` is the zero address so there is no owner backdoor, its authority is the governance Chief, and **no bypass role exists inside the pause contract itself** — its surface is limited to scheduling, executing and cancelling. ⚠️ **Read the scope of that claim carefully, because it is narrower than it sounds.** It says nothing about paths that never enter the pause contract, and the authority walk finds one: **the UsdsJoin route carries no timelock on either walked layer.** ⚠️ **Nor is the cancelling half independent** — `plot()` and `drop()` share one DSAuth authority, so a compromised proposer holds the cancel power too. **"No bypass role" is a true statement about the pause contract and not a statement that there is no route around the delay.**

⚠️ **But the cancel power is not independent.** `plot()` (schedule) and `drop()` (cancel) answer to the **same DSAuth authority**. There is no distinct canceller role held by anyone else — so **whoever can schedule an action can also cancel one, and nobody else can do either.** Against the scenario the delay is meant to protect against — a compromised or captured proposer — **the cancel power belongs to the attacker.** ⚠️ **So state what the 48 hours actually buys: notice, not interruption.** A holder gets two days of public warning in which to exit, and that is real and worth having. What a holder does *not* get is an independent party who can stop the action inside that window. **Forty-eight hours of notice that nobody independent can act on is notice, not protection**, and the cancellation is easily read as though it were the second of those.

Two refinements a careful reader should have. **The Pause Proxy is not the only holder of write authority** — there is a second, the USDS join adapter (`0x3C0f895007CA717Aa01c8693e59DF1e8C3777FEB`), whose entire function surface is `join` and `exit`. It can mint and burn USDS on conversion and holds no governance power, no ability to upgrade, and no ability to grant authority to anything else. It is mechanically constrained rather than trusted, but "only authorized controller" was the wrong phrase and this report used it until now. **And 48 hours is a current setting rather than a hard floor** — the pause exposes a `setDelay` and carries no minimum or maximum in its bytecode, so governance could lower it. That does not weaken the warning window: any change to the delay must itself pass through the delay in force, so the first notice you get is still 48 hours. Read it as *48 hours today, changeable only through the same 48-hour path.*

The savings, PSM, and vault contracts all descend from MakerDAO's multi-year, heavily-audited, battle-tested codebase.

## 6 · Issuer — 7.0

### Audits & security

USDS inherits one of the most-scrutinized track records in DeFi. The MakerDAO/Sky codebase has been audited across many firms (ChainSecurity, Cantina, Trail of Bits, Sherlock, ABDK, and others), with USDS and sUSDS specifically among the audited components, plus an Immunefi bug bounty of up to $10 million. There are no known unresolved vulnerabilities in the USDS path and no USDS-specific incident since launch. The residual risks here are design choices — the upgradeable contract, the USDC concentration, governance powers — not contract bugs.

Worth separating those two, because "not a contract bug" is not the same as "not a contract risk," and an upgradeable token's admin path is the second kind. Here that path has actually been measured rather than assumed: as set out above, the upgrade authority is governance-gated behind a full 48-hour delay with no owner backdoor, re-verified on-chain 2026-08-23, and the pause contract carries no bypass role of its own. ⚠️ **Two things qualify that and are set out above: the UsdsJoin path does not route through the delay at all, and the cancel power is not independent of the propose power.** ✅ **What survives is still a genuinely strong result — most upgradeable tokens in this coverage cannot show a verified delay at all — and it remains the reason the upgradeable contract sits here as an accepted design choice.** But it is a reaction window rather than a guarantee, and the page should not have been read as claiming more than that.

## What you actually earn

**Nothing on USDS itself** — like DAI, plain USDS pays no yield. To earn Sky's savings rate (around 3.75% APY, variable and set by governance), you stake USDS into **sUSDS**, the yield-bearing savings token. If you want yield, see the companion [sUSDS report](/reports/susds/). Holding USDS is for people who want a liquid, DeFi-native dollar rather than yield.

## Who it's for

Holders who want a deep, liquid, permissionless, DeFi-native dollar from the most established team in the space, who value instant 1:1 exit to USDC or DAI, and who accept (a) the USDC correlation and (b) that USDS is a governed, upgradeable contract rather than an immutable one. It's also the on-ramp to sUSDS if you later want yield.

## Who should avoid

- Anyone who needs a censorship-resistant, immutable dollar — USDS is upgradeable and a freeze is governance-addable; hold DAI instead (convert 1:1).
- Anyone trying to diversify away from USDC — USDS is correlated to it, not independent of it.
- Anyone wanting yield from holding the token itself — that's sUSDS, not USDS.

## What to watch

- **Sky governance: freeze-function activation.** A future governance spell could enable address-level freezing (48-hour delay gives warning). If it ships, the censorship picture changes — track the [Sky governance forum](https://forum.sky.money) and active votes.
- **A spell that lowers the GSM delay.** 48 hours is a setting, not a floor. Lowering it would itself take 48 hours to land, so the first one is still visible — but a shortened delay narrows every warning after it, and it would be the change that most weakens the mitigant this report leans on.
- **USDC.** Because roughly a third of backing is USDC, a USDC depeg is the main path to a USDS depeg. A USDC wobble is your early-warning signal.
- **The USDC share of backing.** It has risen to about a third; a further rise means rising correlation.
- **Cross-chain (SkyLink)** if you hold USDS on Solana or an L2 rather than Ethereum.

## A note on sUSDS

If you want yield on USDS, the relevant product is **sUSDS** — the ERC-4626 savings token that accrues Sky's savings rate (around 3.75% APY, governance-set). It carries all of the above at the underlying level, plus the wrapper and the variable rate. See the companion [sUSDS report](/reports/susds/).

---

*This report is based on Sky Protocol's public documentation, governance materials, and on-chain reads of the USDS token, the USDC Peg Stability Module, and the governance/timelock contracts, through 2026-05-27. USDS's upgrade/freeze capability is a governance decision, not a fixed contract guarantee, and the backing composition shifts over time. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

## Revision history

- **2026-09-07 — Dependencies 7.0 and Contract & Admin 7.0 added; nothing re-scored.** The authority topology was hand-walked on Ethereum (observed 2026-08-23): both layers — contract-upgrade and asset-permission — terminate at **DSPause with a 2-day timelock**. ⚠️ **The 2 days does not cover the UsdsJoin path, which reads no timelock on either layer**, and the delay is notice rather than veto: `plot()` and `drop()` share one DSAuth authority, so there is **no independent canceller**, and `setDelay()` executes through the pause proxy with `MIN_DELAY()` and `MINIMUM_DELAY()` both reverting — **2 days is a current setting, not a floor.** ✅ **Held at 7.0: the dock prices the absence of a reaction window and USDS still gives one.** ⚠️ **The delay is established; the compromise cost is not** — the walk records no signer threshold, so no claim is made about how many keys are involved. Dependencies prices USDC correlation (about 35% of backing) and a credit sleeve near 14.8% that is drifting toward crypto lending and away from T-bills.

- **2026-08-25 — admin path re-verified on-chain; no score change.** The GSM delay reads **172,800 seconds — 48 hours** — with `owner()` at zero. ⚠️ **`plot()` and `drop()` answer to the same DSAuth authority**, so there is no independent canceller: the 48 hours are notice rather than a control anyone else can act on.
- **2026-07-09 — collateral model refreshed.** Star-allocator system about 52%; crypto CDP share restated.
