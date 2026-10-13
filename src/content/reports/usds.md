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
last_verified: "2026-10-13"
last_revised: "2026-10-13"
featured: false
issuer: "Sky Protocol (formerly MakerDAO)"
market_cap_approx: 11498820833
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
# Overall 7.0 is below the six-axis mean of 7.08. sUSDS is equalised to USDS
# under the wrapper rule, so any future move here propagates to the wrapper.
axis_frame: six
peg_mechanism_score: 7.5
backing_score: 6.0
liquidity_score: 8.5
underlying_score: 6.5
structural_score: 7.0
issuer_score: 7.0
overall_score: 7.0
---

# USDS — Risk Report

**Moderate-low risk · 7.0/10**

**Live data:** [USDS Backing Dashboard](https://tidresearch.com/dashboards/?asset=usds) — hourly peg, liquidity depth, issuer and dependency reads, and **the collateral look-through behind the reserve** (USDC, JTRSY, BUIDL, cbBTC, wstETH, JAAA, PYUSD and the rest, each as a share). ⚠️ **That breakdown answers "what actually backs this" and exists nowhere else** — this report describes the mechanism; the dashboard shows the current composition.

> **The DAI successor, with one asterisk.** USDS is Sky's flagship dollar — Sky is the rebranded MakerDAO, the team behind DAI — and it converts 1:1 with DAI in both directions. It's deeply liquid, overcollateralized, on-chain transparent, and built on a codebase that has run since 2017. Two things keep it below a top-tier score: about a third of its backing is USDC, so it carries genuine USDC depeg correlation; and unlike DAI, USDS is an *upgradeable* contract — Sky governance could add an address-freeze function by vote (it hasn't, and none is live today). If you want an unfreezable dollar, you can convert USDS to DAI 1:1 at any time.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None on USDS (stake to sUSDS for yield) | Sell on a DEX, swap 1:1 to USDC, or convert 1:1 to DAI | Instant, atomic: USDS → USDC 1:1 via the PSM | USDS since Sept 2024; codebase battle-tested since 2017 | Ethereum + Solana + Base / Arbitrum / Optimism (via SkyLink) |

## Summary

USDS is the main stablecoin of **Sky Protocol**, the protocol that operated as MakerDAO until its 2024 rebrand and still runs the system behind DAI. USDS launched in September 2024 as the designated DAI successor, and the two are fully interchangeable: you can upgrade DAI to USDS or downgrade USDS to DAI at par, any time. They are claims on the **same collateral system** — so "what backs USDS" is really "what backs the combined Sky dollar system," currently **$11.499 billion** across the two tokens.

USDS is fully permissionless and US-accessible: no KYC, no allowlist, no geographic gate on the token itself. It holds its dollar peg through three mechanisms inherited from MakerDAO: a 1:1 swap to USDC through the Peg Stability Module (PSM), 1:1 convertibility with DAI, and overcollateralized crypto vaults. The LitePSM currently holds **$4.134 billion of USDC**, supporting a deep, near-frictionless exit at the peg under normal conditions.

The **7.0/10** reflects a genuinely robust, systemically important stablecoin — clearly stronger than opaque or thinly-collateralized peers, but held back by USDC concentration, allocator concentration and a governed, upgradeable contract.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 7.5 | Three-layer, battle-tested peg — USDC PSM 1:1, DAI parity, and overcollateralized vaults — with a clean roughly-20-month history. Strong partly *because* it's USDC-anchored, which is also its main transmission risk. |
| Backing | 6.0 | Reported backing is **$11.586B** against **$11.499B** of USDS+DAI supply, but the Vow buffer remains **negative by $41.7M (-0.36%)**. Raw USDC is 35.95%, and Spark's $1.050B direct sUSDS holding is a reflexive claim—not independent backing. |
| Liquidity & Exit | 8.5 | Deep permissionless DEX liquidity, **$4.134B of USDC in the LitePSM**, plus 1:1 convertibility to both USDC and DAI. Exit at peg is near-frictionless. No KYC or geographic gate. |
| Dependencies | 6.5 | **Pass-through and concentration, not collateral quality.** Raw USDC is **35.95%** of supply, so USDS is correlated to USDC rather than diversified from it. Spark and Grove account for **33.51% and 14.91%** of vat debt—**48.41% combined**—and Spark's large direct sUSDS position makes part of that allocation explicitly recursive. |
| Contract & Admin | 7.0 | Both walked layers — contract-upgrade and asset-permission on Ethereum — terminate at **DSPause with a 2-day timelock**. ⚠️ **The 2 days does not cover everything: the UsdsJoin path on both layers reads no timelock at all.** ⚠️ **And the delay is notice rather than protection.** `plot()` and `drop()` share **one DSAuth authority**, so there is no independent canceller — against a compromised proposer, the power to cancel belongs to the compromised party. `MIN_DELAY()` and `MINIMUM_DELAY()` both revert and `setDelay()` executes through the pause proxy, so **2 days is a current setting, not a floor.** ✅ **Held at 7.0 rather than docked, and on the rubric rather than on leniency: what earns a dock is the absence of a reaction window, and USDS still gives one where [USDT](/reports/usdt/) and [thBILL](/reports/thbill/) give none.** ⚠️ **The delay is established; the compromise cost is not** — the walk records no signer threshold, so this row makes no claim about how many keys it would take. |
| Issuer | 7.0 | Sky/MakerDAO — among the most established, longest-running issuers in DeFi; DAO-governed with a 48-hour timelock, broad audits, and a $10M bounty. Docked for the upgradeable contract with a governance-addable freeze, governance complexity (the Endgame "Stars"/subDAO structure), and governance-capture tail risk. |
| **Overall** | **7.0** | A systemically important, deeply liquid and transparent dollar, held below the top tier by USDC concentration, allocator concentration, Spark reflexivity, and the governed upgrade surface. The score is below the six-axis mean of **7.08** and remains equal to [sUSDS](/reports/susds/) under the wrapper rule. |

## 1 · Stability — 7.5

**The peg is defended in three layers rather than one:** a **USDC PSM convertible 1:1**, **parity with DAI**, and **overcollateralized vaults** behind both. ✅ **It has held across roughly twenty months with a clean record**, and the layering is why — a single mechanism failing does not leave the peg undefended.

⚠️ **It is strong partly *because* of the USDC leg, which is the same fact that docks Backing and Dependencies below.** A PSM that converts 1:1 on demand is the most reliable peg mechanism available and it works by holding the asset it converts into. **The stability this buys and the concentration it creates are the same arrangement seen from two sides**, and this report scores them separately rather than counting the benefit twice.

## 2 · Backing — 6.0

USDS and DAI share one collateral pool. The latest snapshot shows **$11.499B of combined supply** and **$11.586B of reported backing**. The look-through composition is:

| Component | Current value |
|---|---:|
| Stablecoins | $5.105B / 51.04% |
| On-chain crypto lending | $2.824B / 28.23% |
| OTC crypto lending | $1.025B / 10.25% |
| AAA corporate debt | $497.9M / 4.98% |
| Treasury bills | $429.3M / 4.29% |
| Other, private credit and basis trade | $120.9M / 1.21% |

⚠️ **The critical Spark adjustment:** Spark's Ethereum ALM proxy separately holds **943.3M sUSDS shares, worth about $1.050B USDS at NAV**. BlockAnalitica's **$3.094B external-principal** look-through excludes that direct sUSDS balance, which explains the prior apparent gap versus Spark's **$3.853B allocator debt**. But sUSDS is a claim on this same USDS system: **it is reflexive exposure, not independent collateral, and must not be added to backing.** External principal plus the direct sUSDS position leaves a **positive $290.5M reconciliation residual**. That residual is unattributed and is **not profit, surplus or additional backing**.

The system's dedicated health signal is the Vow buffer, which remains **negative by $41.7M, or 0.36% of supply**, despite improving. Reported backing above supply and a negative Vow buffer can coexist because they measure different things; the headline backing figure does not turn the residual—or the recursive sUSDS position—into fresh collateral.

## 3 · Liquidity & Exit — 8.5

This is one of USDS's strongest dimensions. There are three permissionless exits, all instant and atomic:

- **Swap USDS → USDC 1:1** through the Peg Stability Module (no fee in normal conditions).
- **Convert USDS → DAI 1:1** if you'd rather hold the immutable dollar.
- **Sell on a DEX**, where USDS has deep liquidity.

No KYC, no minimum, no lockup, no gatekeeper. The one tail consideration is the PSM's USDC inventory in an extreme, USDC-specific crisis — if that drained, the clean 1:1 swap would lean on the DEX market instead. That's a stress-scenario caveat, not a normal-conditions concern.

## 4 · Dependencies — 6.5

**What USDS passes through to, as distinct from the quality of what backs it.**

Two dependencies matter to a retail holder, and the first is much the larger.

**First, the USDC concentration.** Raw USDC is **35.95% of supply**, including **$4.134B in the LitePSM**, and that's before counting broader USDC-denominated exposure inside allocator deployments. The practical takeaway is unchanged: **USDS is not independent of USDC.** If USDC depegged, USDS would feel it; DAI did in March 2023 through the same transmission channel.

**Second, allocator concentration and reflexivity.** Spark and Grove are **33.51% and 14.91% of Sky vat debt**, or **48.41% combined**. More importantly, Spark holds about **$1.050B of sUSDS directly**. That position may reconcile Spark's accounting, but it does not diversify USDS: it is the system holding a claim on itself. Retail holders should read Spark's external assets as backing look-through and the sUSDS balance as recursive exposure, never add both as independent collateral.

**Third, a newer credit sleeve.** Routing through the Star allocators, Sky now carries credit and counterparty exposures that go beyond the old "T-bills + overcollateralized crypto" story: **OTC crypto lending (~10% of look-through backing), AAA corporate debt via the Grove/Janus Henderson CLO (~5%), and some private credit.** Combined, this less-transparent credit sleeve is materially harder to assess than a pure Treasury-and-crypto book.

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

*This report is based on Sky Protocol's public documentation, governance materials, BlockAnalitica look-through data, and on-chain reads of the USDS token, LitePSM, Spark ALM proxy, and governance/timelock contracts, through 2026-10-13. USDS's upgrade/freeze capability is a governance decision, not a fixed contract guarantee, and the backing composition shifts over time. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

## Revision history

- **2026-10-13 — backing and allocator snapshot refreshed; scores unchanged.** USDS+DAI supply is **$11.499B**, reported backing **$11.586B**, the Vow buffer **-$41.7M (-0.36%)**, and LitePSM USDC **$4.134B**. Spark/Grove debt shares are **33.51% / 14.91%**. Spark's ALM proxy holds **943.3M sUSDS worth ~$1.050B**, which reconciles the prior external-principal gap but is reflexive exposure, not independent backing. The remaining **+$290.5M residual is unattributed** and is not described as profit, surplus or additional backing.
- **2026-09-07 — Dependencies 7.0 and Contract & Admin 7.0 added; nothing re-scored.** The authority topology was hand-walked on Ethereum (observed 2026-08-23): both layers — contract-upgrade and asset-permission — terminate at **DSPause with a 2-day timelock**. ⚠️ **The 2 days does not cover the UsdsJoin path, which reads no timelock on either layer**, and the delay is notice rather than veto: `plot()` and `drop()` share one DSAuth authority, so there is **no independent canceller**, and `setDelay()` executes through the pause proxy with `MIN_DELAY()` and `MINIMUM_DELAY()` both reverting — **2 days is a current setting, not a floor.** ✅ **Held at 7.0: the dock prices the absence of a reaction window and USDS still gives one.** ⚠️ **The delay is established; the compromise cost is not** — the walk records no signer threshold, so no claim is made about how many keys are involved. Dependencies prices USDC correlation (about 35% of backing) and a credit sleeve near 14.8% that is drifting toward crypto lending and away from T-bills.

- **2026-08-25 — admin path re-verified on-chain; no score change.** The GSM delay reads **172,800 seconds — 48 hours** — with `owner()` at zero. ⚠️ **`plot()` and `drop()` answer to the same DSAuth authority**, so there is no independent canceller: the 48 hours are notice rather than a control anyone else can act on.
- **2026-07-09 — collateral model refreshed.** Star-allocator system about 52%; crypto CDP share restated.

> **2026-09-24 (later) — Backing 6.5 → 6.0.** A condition set earlier the same day has been met, on
> our own reading of Block Analitica's public Sky endpoint rather than a second-hand figure (150 items,
> as-of 2026-09-24T02:20). **Spark — the allocator that has grown fastest and now holds a third of the
> book — is 61.2% on-chain crypto lending, 30.7% stablecoins, 7.4% over-the-counter lending, and holds
> no tokenized-treasury sleeve at all.**
>
> Two corrections to the earlier note are worth making rather than quietly dropping. **Grove is less
> treasury-weighted than it first appeared** — 29.3% AAA corporate debt and 25.3% short-duration
> T-bills, but also 24.3% OTC and 16.5% on-chain lending — so the shift between the two allocators is
> milder than stated, and this change rests on Spark's own composition rather than on that contrast.
> And **Obex, a smaller allocator, is 99.2% OTC crypto lending**, a concentration not previously
> described here.
>
> A note on arithmetic for anyone checking: Block Analitica's "backed" figure and the protocol's
> on-chain vault debt are **23.7% apart for Spark**, so the percentages above and the 33% share are on
> different bases and must not be multiplied together.
>
> **2026-09-24 — Backing 7.0 → 6.5, Dependencies 7.0 → 6.5, Overall 7.5 → 7.0.** Sky's allocator mix
> has concentrated. Measured from the protocol's own ilk registry on 2026-09-24 against the same
> reading on 2026-08-01: **Spark has gone from 21.66% to 33.01% of Sky's total vault debt and has
> overtaken Grove**, which fell from 25.05% to 15.34%. Obex was flat to within $4 million across both
> dates, which is what establishes the two readings are comparable. So **roughly 48% of the backing now
> sits with two Star allocators** rather than being spread across three, and the largest of them has
> grown by more than half in seven weeks.
>
> Two further things are worth stating plainly. Grove operates **two** allocator vaults, and the larger
> one is named `ALLOCATOR-BLOOM-A` — sizing Grove by the vault that carries its own name understates it
> by about 24 times, which is a trap for anyone reading the registry directly. And the largest single
> holding inside Spark's allocation is **$647 million of sUSDS**, while Grove lends against sUSDS at up
> to 96.5% loan-to-value — meaning part of what backs USDS is a claim on USDS. The positions and their
> sizes are measured; whether the protocol's published backing figures net that circularity out is not
> established here, and the score change does not depend on it.
>
> Stability, Liquidity & Exit, Contract & Admin and Issuer are unchanged — this review did not
> re-examine them.
