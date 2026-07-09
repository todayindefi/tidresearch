---
asset: "USDS"
slug: "usds"
aliases: ["USDS", "Sky USDS", "Sky Dollar"]
chains: ["eth", "solana", "base", "arb"]
category: "stablecoin"
peg_mechanism: "Hybrid (USDC PSM + DAI parity + crypto/RWA CDP)"
assessment_type: "full"
audience: "retail"
date: "2026-05-27"
last_verified: "2026-05-27"
featured: false
issuer: "Sky Protocol (formerly MakerDAO)"
audited_reserves: true
market_cap_approx: 8411000000
peg_mechanism_score: 7.5
backing_score: 7.0
liquidity_score: 8.5
issuer_score: 7.0
overall_score: 7.5
---

# USDS — Retail Risk Report

**Moderate-low risk · 7.5/10**

> **The DAI successor, with one asterisk.** USDS is Sky's flagship dollar — Sky is the rebranded MakerDAO, the team behind DAI — and it converts 1:1 with DAI in both directions. It's deeply liquid, overcollateralized, on-chain transparent, and built on a codebase that has run since 2017. Two things keep it below a top-tier score: about a third of its backing is USDC, so it carries genuine USDC depeg correlation; and unlike DAI, USDS is an *upgradeable* contract — Sky governance could add an address-freeze function by vote (it hasn't, and none is live today). If you want an unfreezable dollar, you can convert USDS to DAI 1:1 at any time.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None on USDS (stake to sUSDS for yield) | Sell on a DEX, swap 1:1 to USDC, or convert 1:1 to DAI | Instant, atomic: USDS → USDC 1:1 via the PSM | USDS since Sept 2024; codebase battle-tested since 2017 | Ethereum + Solana + Base / Arbitrum / Optimism (via SkyLink) |

## Summary

USDS is the main stablecoin of **Sky Protocol**, the protocol that operated as MakerDAO until its 2024 rebrand and still runs the system behind DAI. USDS launched in September 2024 as the designated DAI successor, and the two are fully interchangeable: you can upgrade DAI to USDS or downgrade USDS to DAI at par, any time. They are claims on the **same collateral system** — so "what backs USDS" is really "what backs the combined Sky dollar system," about $12.8 billion across the two tokens.

USDS is fully permissionless and US-accessible: no KYC, no allowlist, no geographic gate on the token itself. It holds its dollar peg through three mechanisms inherited from MakerDAO: a 1:1 swap to USDC through the Peg Stability Module (PSM), 1:1 convertibility with DAI, and overcollateralized crypto vaults. At roughly $8.4 billion in supply with deep on-chain liquidity, exiting at the peg is essentially frictionless under normal conditions.

The 7.5/10 reflects a genuinely robust, systemically important stablecoin — clearly stronger than opaque or thinly-collateralized peers, a notch below fully-regulated USDC — held back by the two retail-relevant caveats below.

## What you actually earn

**Nothing on USDS itself** — like DAI, plain USDS pays no yield. To earn Sky's savings rate (around 3.75% APY, variable and set by governance), you stake USDS into **sUSDS**, the yield-bearing savings token. If you want yield, see the companion [sUSDS retail report](/reports/susds/). Holding USDS is for people who want a liquid, DeFi-native dollar rather than yield.

## How exit works

This is one of USDS's strongest dimensions. There are three permissionless exits, all instant and atomic:

- **Swap USDS → USDC 1:1** through the Peg Stability Module (no fee in normal conditions).
- **Convert USDS → DAI 1:1** if you'd rather hold the immutable dollar.
- **Sell on a DEX**, where USDS has deep liquidity.

No KYC, no minimum, no lockup, no gatekeeper. The one tail consideration is the PSM's USDC inventory in an extreme, USDC-specific crisis — if that drained, the clean 1:1 swap would lean on the DEX market instead. That's a stress-scenario caveat, not a normal-conditions concern.

## What backs it — and the USDC question

USDS and DAI share one collateral pool, about $12.8 billion combined. As of mid-2026 the mix looks quite different from the classic MakerDAO picture, and it's worth understanding how the system actually mints dollars today:

- **A large raw-USDC reserve (~33%)** — roughly $4.3 billion of actual USDC sitting in the Peg Stability Module. This is the single largest asset and the direct 1:1 swap inventory.
- **The Star-allocator system (~52%)** — the dominant mechanism now. Most USDS is minted by three "Star" allocators — **Spark (~26%), Grove (~21%), and Obex (~5%)** — that then deploy that liquidity downstream into a diversified book: tokenized short-term T-bills, other stablecoins, on-chain crypto lending, over-the-counter (OTC) crypto lending, private credit, and AAA-rated corporate debt (Grove routes into a Janus Henderson CLO). This allocator layer, not the old crypto-vault sleeve, is the centerpiece of Sky's backing in 2026.
- **Overcollateralized crypto vaults (~7%)** — ETH, staked ETH, WBTC and similar, posted well above the value borrowed. Once a co-equal pillar of MakerDAO, this is now a small tail sleeve.
- **A small slice of direct real-world-asset vaults** (<1%).

Two things a retail holder should take from this.

**First, the USDC concentration.** About a third of the system's backing is **raw USDC held** — roughly $4.3 billion in the PSM pocket, verified directly on-chain — and that's before counting broader **USDC-denominated** exposure sitting inside the allocator deployments (a wider, softer correlation on top of the direct one). USDC is still the largest single asset. The practical takeaway is unchanged: **USDS is not safer than USDC; it carries roughly a third of USDC's risk directly**, on top of its own. If a USDC depeg happened, USDS would feel it. The precedent is March 2023, when DAI briefly followed USDC down during the Silicon Valley Bank scare because of heavy USDC backing through the same kind of module. (USDS itself didn't exist yet, and has never depegged in its own roughly 20-month history — but the channel is the same.) If you already hold a lot of USDC elsewhere, USDS adds to that exposure rather than diversifying it. Note too that Sky's cash reserve is no longer USDC-only — it also holds meaningful balances of **USDT, PYUSD, and RLUSD** — so the stablecoin basket is broader than a single issuer.

**Second, a newer credit sleeve.** Routing through the Star allocators, Sky now carries credit and counterparty exposures that go beyond the old "T-bills + overcollateralized crypto" story: **OTC crypto lending (~10% of look-through backing), AAA corporate debt via the Grove/Janus Henderson CLO (~3.5%), and some private credit.** Combined, this less-transparent credit sleeve is on the order of ~14%. It is still diversified, still largely reported through Sky's on-chain risk dashboards, and small relative to the whole — but it is a genuinely newer, less-visible risk than a pure Treasury-and-crypto book, and it's the thing to watch if it grows or if one of the Star allocators hits trouble.

The rest of the backing remains diversified, overcollateralized where it's crypto-backed, and largely on-chain transparent — a stronger posture than a single off-chain fund. The T-bill and credit sleeves do carry off-chain manager, custody, and counterparty dependence.

## The upgrade and freeze caveat

Unlike DAI — which is an immutable, unfreezable contract — **USDS is upgradeable**. It launched without an address-freeze function and **does not have one today**. But the upgrade machinery means Sky governance could add an address-level freeze or blacklist later through a governance vote. So the risk is a *latent capability*, not a live feature: a censorship/centralization surface that simply doesn't exist for DAI.

The mitigant is the process: any such change would require a public SKY-governance vote and then sit behind a **48-hour delay** before it could take effect (and can be cancelled during that window). And there's a clean escape hatch — **if you specifically need a censorship-resistant dollar, hold DAI** (convert USDS to DAI 1:1), or watch for "PureDai," Sky's proposed immutable fork (still unlaunched as of 2026).

## What the contracts are doing

The USDS token (`0xdC03…384F`) is an upgradeable proxy. Changes — upgrades, new minters, parameter changes — route through **Sky (SKY-token) governance → a 48-hour Governance Security Module delay → the Pause Proxy**, which is the only authorized controller. We verified on-chain (May 2026) that the delay is a full 48 hours, that no single key can bypass it, and that the controller has no owner backdoor. A malicious governance action can be cancelled during the 48-hour window. The savings, PSM, and vault contracts all descend from MakerDAO's multi-year, heavily-audited, battle-tested codebase.

## Audits & security

USDS inherits one of the most-scrutinized track records in DeFi. The MakerDAO/Sky codebase has been audited across many firms (ChainSecurity, Cantina, Trail of Bits, Sherlock, ABDK, and others), with USDS and sUSDS specifically among the audited components, plus an Immunefi bug bounty of up to $10 million. There are no known unresolved vulnerabilities in the USDS path and no USDS-specific incident since launch. The residual risks here are design choices — the upgradeable contract, the USDC concentration, governance powers — not contract bugs.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 7.5 | Three-layer, battle-tested peg — USDC PSM 1:1, DAI parity, and overcollateralized vaults — with a clean roughly-20-month history. Strong partly *because* it's USDC-anchored, which is also its main transmission risk. |
| Backing | 7.0 | Overcollateralized, diversified, on-chain transparent, with a growing surplus reserve — well above opaque peers. Held down by the ≈33% USDC concentration (the largest single asset, and rising) and off-chain Treasury-manager exposure. |
| Liquidity | 8.5 | About $8.4B in size, deep permissionless DEX liquidity, plus 1:1 convertibility to both USDC (via the PSM) and DAI. Exit at peg is near-frictionless. No KYC or geographic gate. |
| Issuer | 7.0 | Sky/MakerDAO — among the most established, longest-running issuers in DeFi; DAO-governed with a 48-hour timelock, broad audits, and a $10M bounty. Docked for the upgradeable contract with a governance-addable freeze, governance complexity (the Endgame "Stars"/subDAO structure), and governance-capture tail risk. |
| **Overall** | **7.5** | A systemically important, deeply liquid, battle-tested, overcollateralized and transparent dollar — stronger than opaque or thin peers, a notch below fully-regulated USDC. The two caveats that keep it here: about a third of backing is USDC (real correlation, not diversification), and USDS is upgradeable with a governance-addable freeze that DAI lacks. Strong for holders who accept Sky's governance/upgrade surface and the USDC coupling; those who need an unfreezable, USDC-decorrelated dollar should convert to DAI. |

## Who it's for

Holders who want a deep, liquid, permissionless, DeFi-native dollar from the most established team in the space, who value instant 1:1 exit to USDC or DAI, and who accept (a) the USDC correlation and (b) that USDS is a governed, upgradeable contract rather than an immutable one. It's also the on-ramp to sUSDS if you later want yield.

## Who should avoid

- Anyone who needs a censorship-resistant, immutable dollar — USDS is upgradeable and a freeze is governance-addable; hold DAI instead (convert 1:1).
- Anyone trying to diversify away from USDC — USDS is correlated to it, not independent of it.
- Anyone wanting yield from holding the token itself — that's sUSDS, not USDS.

## What to watch

- **Sky governance: freeze-function activation.** A future governance spell could enable address-level freezing (48-hour delay gives warning). If it ships, the censorship picture changes — track the [Sky governance forum](https://forum.sky.money) and active votes.
- **USDC.** Because roughly a third of backing is USDC, a USDC depeg is the main path to a USDS depeg. A USDC wobble is your early-warning signal.
- **The USDC share of backing.** It has risen to about a third; a further rise means rising correlation.
- **Cross-chain (SkyLink)** if you hold USDS on Solana or an L2 rather than Ethereum.

## A note on sUSDS

If you want yield on USDS, the relevant product is **sUSDS** — the ERC-4626 savings token that accrues Sky's savings rate (around 3.75% APY, governance-set). It carries all of the above at the underlying level, plus the wrapper and the variable rate. See the companion [sUSDS retail report](/reports/susds/).

---

*This report is based on Sky Protocol's public documentation, governance materials, and on-chain reads of the USDS token, the USDC Peg Stability Module, and the governance/timelock contracts, through 2026-05-27. USDS's upgrade/freeze capability is a governance decision, not a fixed contract guarantee, and the backing composition shifts over time. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

*Revision history: 2026-07-09 — refreshed collateral model (Star-allocator system now ~52%, crypto CDPs ~7%; added credit-sleeve + non-USDC-stable detail). Scores unchanged.*
</content>
</invoke>
