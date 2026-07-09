---
asset: "sUSDS"
slug: "susds"
aliases: ["sUSDS", "Savings USDS", "Sky Savings USDS"]
chains: ["eth", "base", "arb", "optimism"]
category: "vault-share"
underlying_assets: ["USDS"]
assessment_type: "full"
audience: "retail"
production: true
date: "2026-05-27"
last_verified: "2026-05-27"
featured: false
issuer: "Sky Protocol (formerly MakerDAO)"
yield_bearing: true
volatility_score: 9.0
liquidity_score: 8.5
structural_score: 7.0
redemption_score: 8.5
underlying_score: 7.5
issuer_score: 7.0
overall_score: 8.0
---

# sUSDS — Retail Risk Report

**Lower risk · 8.0/10**

> **The permissionless one.** Of the on-chain ways to earn a Treasury-style yield on dollars, sUSDS is the one with no KYC, no geographic gate, no minimum, and no lockup — anyone can hold, transfer, and redeem it instantly. That accessibility, deep liquidity, and a battle-tested codebase are why it scores highest in this category. Two caveats keep it from scoring higher: the USDS dollar it's built on is upgradeable (with a freeze function Sky could switch on by governance vote), and about a third of USDS's backing is USDC, so sUSDS carries real USDC depeg correlation.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| around 3.75% APY (variable) | Sell on a DEX, or redeem | Instant, atomic: sUSDS → USDS → USDC | sUSDS since Sept 2024; mechanism battle-tested since 2019 | Ethereum + Base / Optimism / Arbitrum (+ Solana) |

## Summary

sUSDS is the savings token of **Sky Protocol** — the rebranded MakerDAO, the team behind DAI. You deposit **[USDS](/reports/usds/)** (Sky's stablecoin, a successor to DAI that converts 1:1 with it) and receive sUSDS, an ERC-4626 vault share whose redemption value rises over time as it accrues the **Sky Savings Rate (SSR)**. The current SSR is around **3.75% APY**, and it is **variable — set by Sky governance**, paid out of the same revenue that backs USDS (Treasury-bill yield from Sky's real-world-asset allocations, interest on crypto-collateralized loans, and returns on cash reserves). A protocol surplus buffer absorbs the gap when revenue runs below the rate being paid.

The reason sUSDS matters for a retail holder is **access**. It is a DeFi savings position, not a securities wrapper, so there's no KYC, no allowlist, no non-US restriction, no minimum, and no waiting period. You can mint it, buy it on a DEX, transfer it, and redeem it at any time — and redemption is instant and atomic: sUSDS converts back to USDS in the vault, and USDS converts 1:1 to USDC through Sky's Peg Stability Module (PSM). At around $6 billion in size with deep on-chain liquidity, exiting at fair value is essentially frictionless under normal conditions. That's the opposite of tokenized money-market tokens like USYC (allowlisted, non-US, $100k minimum — retail can't hold it at all) or Ondo's USDY (non-US only, a 40-50 day lockup on fresh mints, and fiat-wire-only primary redemption).

The 8.0/10 score is the highest among comparable tokenized-yield products, reflecting that accessibility plus deep liquidity, instant exit, and the lowest smart-contract risk in the category (the savings, PSM, and vault contracts descend from MakerDAO's heavily audited, multi-year codebase). What holds it back from a stablecoin-grade score are two real, retail-relevant caveats covered below: USDS is upgradeable with a latent freeze function, and it carries meaningful USDC correlation.

## What you actually earn

sUSDS pays yield by appreciating against USDS — there's no rebasing and nothing to claim. Your balance stays constant while each sUSDS becomes redeemable for slightly more USDS over time. The headline rate is the **Sky Savings Rate, around 3.75% APY**.

Two things to understand about that rate:

- **It's variable and governance-set.** The SSR is not a market rate or a fixed contract term — Sky (SKY-token) governance sets it and can raise or cut it. It broadly tracks prevailing short-term dollar rates and Sky's own revenue, but it can change. Don't underwrite a position on the current number persisting.
- **It's funded by diversified backing, not a single fund.** As of mid-2026, USDS is minted mostly through Sky's three "Star" allocators — **Spark, Grove, and Obex (~52% combined)** — which deploy into a broad book: tokenized short-term T-bills, other stablecoins (Sky holds USDT, PYUSD, and RLUSD, not just USDC), on-chain crypto lending, OTC crypto lending, private credit, and AAA-rated corporate debt (Grove routes into a Janus Henderson CLO). Alongside that sits a large raw-USDC reserve in the PSM (~33%) and a now-small overcollateralized crypto-vault sleeve (~7%, once a co-equal pillar, now a tail). Surplus revenue above the SSR flows to a buffer that cushions shortfalls. This diversification is a strength versus any product backed by one off-chain fund, but it now includes a newer, less-transparent credit sleeve (OTC lending + private credit + CLO ≈ 14% combined) and is still where the USDC correlation enters (below).

## How you get in and out

This is sUSDS's strongest dimension, and the whole reason it's the retail-usable option.

**Getting in.** Fully permissionless and open to US holders. Deposit USDS at [sky.money](https://sky.money/susds) (or through Spark) to mint sUSDS, or simply buy sUSDS directly on a DEX — no KYC, no minimum, no lockup. If you're starting from USDC, you can swap USDC → USDS 1:1 through the PSM, then deposit.

**Getting out.** Redeem sUSDS → USDS in the vault at any time (instant), then USDS → USDC 1:1 through the PSM — or just sell sUSDS on a DEX. There's no cooldown, no redemption fee, no gatekeeper, and no fiat rails involved. In normal conditions you exit at fair value immediately.

**The one thing to watch on exit** is the PSM's USDC liquidity in an extreme stress scenario. The 1:1 USDS↔USDC swap depends on USDC sitting in the module; in a severe, USDC-specific crisis that liquidity could be drawn down, and the clean 1:1 exit would lean on the DEX market instead. This is a tail consideration, not a normal-conditions concern — but it's the reason the exit isn't scored a perfect 10.

## The two caveats that matter

**1. USDS is not the unfreezable DAI.** When MakerDAO rebranded to Sky, it introduced USDS as an *upgradeable* stablecoin. At launch USDS shipped without a freeze function, but with the upgrade machinery that would let Sky governance add an address-level **freeze / blacklist** later by vote. DAI, by contrast, remains immutable and unfreezable, and Sky has discussed an immutable "PureDai" fork. The practical takeaway for an sUSDS holder: you're exposed to USDS's upgradeable admin surface and the standing possibility that a future governance decision could freeze specific addresses — a censorship and centralization risk that simply doesn't exist for DAI or for trust-minimized stablecoins. It is governance-gated (it would take a public vote and a timelock delay, not a unilateral flip), and as of this writing no freeze function is enabled. But if you specifically need a censorship-resistant position, hold DAI instead.

**2. About a third of USDS backing is USDC → real USDC correlation.** Sky holds roughly a third of USDS backing as **raw USDC** — about $4.3 billion sitting in the PSM at a fixed 1:1 swap — with further USDC-denominated exposure inside the allocator deployments on top of that. That's great for redemption liquidity, but it means USDS — and therefore sUSDS — is **correlated to USDC**, not diversified away from it. The precedent is March 2023: when USDC briefly depegged during the Silicon Valley Bank failure, DAI followed it down because of heavy USDC backing through the same kind of module. So treat sUSDS as roughly "two-thirds diversified collateral + one-third USDC," not as something safer than USDC. If you already hold a lot of USDC elsewhere, sUSDS adds to that exposure rather than diversifying it. This collateral mix — now minted largely through Sky's Star allocators (Spark/Grove/Obex), diversified and high-grade but carrying a meaningful USDC concentration plus a newer allocator credit sleeve (OTC lending, private credit, and a AAA CLO, ≈14% combined) — is what the **Underlying axis (7.5)** captures: better than the STRC-backed yield wrappers, short of a Treasury-pure product. See the [USDS retail report](/reports/usds/) for the base-asset risk detail.

## What the contracts are doing

sUSDS is a standard ERC-4626 vault on Ethereum at `0xa3931d71877c0e7a3148cb7eb4463524fec27fbd`, with native deployments on Base (`0x5875eee1…`), Optimism (`0xb5b2dc7f…`), and Arbitrum (`0xddb46999…`), plus Solana — reached via the Spark PSM and bridging. The vault accepts USDS, mints sUSDS at the current redemption ratio, and pays yield by letting that ratio climb. Conversion between USDS and sUSDS on the non-Ethereum chains runs through the Spark PSM at no slippage beyond gas.

For sizing, prefer the canonical Ethereum deployment. Balances on Base / Optimism / Arbitrum / Solana add a bridging and cross-chain-PSM dependency on top of the base vault — fine for everyday amounts, worth keeping in mind for large positions.

The contracts themselves are the lowest-risk part of the story: the savings module, PSM, and vault all descend from MakerDAO's codebase, which has been live and heavily audited since 2017 (the savings-rate mechanism specifically since 2019, as the DAI Savings Rate and sDAI). The offsetting structural risk is governance: Sky's SKY-token governance — operating through the multi-"Star"/subDAO "Endgame" structure, which includes Spark — can adjust the savings rate, change collateral parameters, and execute upgrades (including, potentially, the freeze function) through governance "spells" that pass through a security-module timelock delay. A malicious or captured governance spell is the tail risk; the timelock and long track record are the mitigants. The **issuer surface here is identical to USDS's** — sUSDS and USDS are the same legal entity (Sky Protocol), so a holder's ultimate claim is against Sky either way; that's why the Issuer axis below carries the same 7.0 as the [USDS report](/reports/usds/).

## Audits & security

sUSDS inherits one of the longest and most-scrutinized track records in DeFi. The MakerDAO/Sky codebase has been audited across many engagements over the years and battle-tested through multiple market crises (including the March 2020 "Black Thursday" liquidation stress and the March 2023 USDC depeg). The savings-rate mechanism has operated continuously since 2019. There are no known unresolved contract vulnerabilities in the savings/PSM/vault path.

The relevant residual risks are not contract bugs but design choices: the upgradeable USDS dollar, the governance powers above, and the USDC backing correlation — all covered above.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 9.0 | NAV-accruing share over USDS, a deep and mature stablecoin. No meaningful price volatility; the redemption value only climbs. The one path to a drawdown is a USDS depeg — driven by collateral quality, which is scored separately under Underlying. |
| Underlying | 7.5 | USDS's collateral is diversified and high-grade: short-term US Treasuries, heavily overcollateralized crypto-collateralized loans, and cash held largely in USDC. Well above STRC-backed peers. Held below a Treasury-pure score by the ≈33% USDC concentration (a correlation/centralization exposure) and the crypto-loan sleeve's liquidation tail. This is the collateral-quality view; the *wrapper* mechanics are scored under Volatility/Structural. |
| Liquidity | 8.5 | Deepest in its category — around $6B in size, deep permissionless DEX liquidity, plus 1:1 PSM convertibility to USDC and 1:1 USDS↔DAI. No KYC or geographic gate on either the primary or secondary path. Small reservation for cross-chain reliance on the Spark PSM off Ethereum and for PSM liquidity under extreme USDC stress. |
| Structural | 7.0 | Battle-tested MakerDAO-derived ERC-4626 / PSM / vault code — the lowest contract risk in the category — offset by USDS being upgradeable with a governance-addable freeze function, broad Sky-governance powers over rate/collateral/upgrades (timelock-gated), Endgame structural complexity, and a cross-chain bridge surface. The upgrade/freeze capability is the binding structural concern. |
| Redemption | 8.5 | Atomic, permissionless, instant: sUSDS → USDS in the vault and USDS → USDC 1:1 via the PSM, with no KYC, no minimum, no lockup, and no fees. Best-in-class exit. Held just below the top only for the theoretical PSM-liquidity limit under a severe USDC-specific crisis. |
| Issuer | 7.0 | Sky Protocol (ex-MakerDAO) — same entity as USDS; DAO-governed, 48h GSM timelock, broad audits, $10M bounty; docked for the upgradeable/freezable contract, Endgame governance complexity, and governance-capture tail. See the [USDS report](/reports/usds/). |
| **Overall** | **8.0** | Lower risk — the most usable and most liquid tokenized-yield option for retail, on the most battle-tested codebase. Held below a stablecoin-grade score by the upgradeable/freezable USDS dollar and the ≈33% USDC backing correlation, plus a governance-set (not fixed) yield. |

## Who it's for

Holders who want a simple, liquid, permissionless way to earn a roughly money-market-style yield on dollars on-chain, who value instant no-questions-asked exit, and who accept (a) that the underlying USDS dollar is governed and upgradeable rather than immutable, and (b) that they're taking on USDC correlation in exchange for that liquidity. It's the natural choice when access or jurisdiction rules out the gated tokenized-fund products.

## Who should avoid

- Anyone who needs a censorship-resistant, immutable dollar — USDS is upgradeable and a freeze function is governance-addable; hold DAI instead.
- Anyone trying to diversify away from USDC — sUSDS is correlated to USDC, not independent of it.
- Anyone underwriting a fixed return — the Sky Savings Rate is variable and can be cut by governance.

## What to watch

- **Sky governance: freeze-function activation.** USDS is upgradeable; a future governance spell could enable address-level freezing. If that ships, the structural/censorship picture changes. Track the [Sky governance forum](https://forum.sky.money) and active votes.
- **The Sky Savings Rate.** Around 3.75% now and governance-set — watch for rate-change votes.
- **USDC.** Because USDS holds significant USDC backing, a USDC depeg is the main path to an sUSDS depeg. A USDC wobble is your early-warning signal.
- **USDS backing composition.** The share of backing held in USDC versus Treasuries and crypto collateral shifts over time; a rising USDC share means rising correlation.
- **Cross-chain PSM health** if you hold sUSDS on Base / Optimism / Arbitrum / Solana rather than Ethereum.

---

*This report is based on Sky Protocol's public documentation, Spark documentation, public reporting on the USDS freeze-function debate, and on-chain reads of the sUSDS vault, through 2026-05-27. The Sky Savings Rate is governance-set and subject to change, and USDS's upgrade/freeze capability is a governance decision, not a fixed contract guarantee. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

*Revision history: 2026-07-09 — refreshed collateral model (Star-allocator system now ~52%, crypto CDPs ~7%; added credit-sleeve + non-USDC-stable detail); sUSDS issuer axis added (7.0). Overall and other scores unchanged.*
