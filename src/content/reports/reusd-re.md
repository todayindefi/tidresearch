---
asset: "reUSD (Re Protocol)"
slug: "reusd-re"
aliases: ["reUSD (Re Protocol)", "Resilience reUSD"]
chains: ["eth", "avax", "arb", "base", "megaeth", "katana", "bnb", "ink", "plasma", "bera", "monad", "tempo", "sol", "sei"]
# Sei added 2026-10-13: Re's current official smart-contract registry now
# explicitly declares the deployment. This is a declared footprint, not a
# claim that authority or executable exit has been verified on every chain.
category: "vault-share"
assessment_type: "full"
date: "2026-05-19"
last_verified: "2026-08-25"
# Scope-limited pass 2026-09-06: sleeve composition re-measured from Re's
# metrics endpoint and the report re-framed onto the six-axis core. The
# structural material was re-scoped, not re-read, so `last_verified` HOLDS at
# 2026-08-25 deliberately — do not bump it on a sweep.
last_revised: "2026-10-13"
featured: false
# MOVED BACK TO STAGING 2026-08-31, deliberately — do not re-promote on a
# freshness or completeness sweep.  The site owner's rule is that THIS REPORT
# AND ITS DASHBOARD PROMOTE TOGETHER, gated on a puppeteer verification pass.
# Status 2026-09-06: one blocker CLEARED — axis 5 (Contract & Admin) now
# renders on backing-monitor for `?asset=reusd-re`. The other has not and
# largely CANNOT: Re publishes combined reUSD + reUSDe reserves with no
# asset-attributed denominator, so no collateral ratio is derivable for reUSD
# alone.  That is an honest PERMANENT blank, not a pending measurement, so
# the gate stays shut and this report stays staged.
#  `?asset=reusde-re` renders (bm confirmed in-browser 2026-10-04). Reachable
# by direct link only — not on their index grid, which needs `published: true`.
# TO PROMOTE: both dashboards complete and verified IN A BROWSER, then flip
# both reports together. Checked before demoting: no `production: true` report
# links here, so nothing 404s on prod (only frax.md links in, and it is staged).
production: false
issuer: "Resilience BVI Ltd."
market_cap_approx: 299663000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#  `structural_score` 6.0 -> 4.0 and `overall_score` 6.0 -> 5.0 are a
# RE-SCOPING, NOT A DETERIORATION. No adverse evidence arrived. The old
# "Structural 6.0" was silently pricing THREE of the six axes — legal
# structure (now Issuer 5.5) and the off-chain dependency stack (now
# Dependencies 5.0) alongside contract and authority. Axis 5 is Contract &
# Admin ONLY, and what remains there scores 4.0. The overall was set
# against four axes and the report now has six.
#  NOT recorded in the revision history, deliberately: a re-scoping of
# which axis carries a fact is a change to US, not to the asset. The body
# states the six axes as current method; it does not diff itself.
# backing_score 5.0 is NEW. Collateral is good in QUALITY and NOT
# diversified — measured 99.05% sUSDe, T-Bills $0. The concentration is
# priced on axis 4, not here, or it would be double-counted.
#  THE ATTACHMENT-POINT BASIS FOR THIS SCORE IS WITHDRAWN (2026-10-04,
# riskAnalyst retirement of 2026-09-20). The 9.66% / 7.94% / 11.06% ratios
# are RETIRED as current metrics: Re publishes NO current contractual
# numerator for capital subordinated ahead of the senior tranche, so no
# attachment percentage is computable today.
#  AND THE TWO JUNIOR FIGURES ARE NON-INTERCHANGEABLE, not merely
# unreconciled: ~$77M is a JUNE 2026 BALANCE-SHEET figure, ~$20M is a
# LOSS-WATERFALL SCENARIO LAYER. They measure different quantities, so
# "size to the smaller one" is a CATEGORY ERROR rather than conservatism —
# it yields a precise number for a quantity nobody publishes.
#  5.0 is therefore a PROVISIONAL HOLD, not a derivation. What survives
# is the DIRECTION through 2026-09-06 — the cushion thinned on both bases
# — and the cause: DILUTION BY GROWTH, NOT A WORSE BOOK. No claim event,
# combined ratio still 92%, junior layer measurably FLAT (+0.4%) while the
# senior grew.  Our 5.0 and riskAnalyst's 5.0 agree; the published BASIS
# was what diverged, which a score-sync check cannot see.
# underlying_score 5.0 is NEW and renders as DEPENDENCIES: three-channel
# Ethena exposure plus the off-chain stack.
# issuer_score 5.5 is NEW and is SHARED WITH reusde-re — same entity, so two
# pages showing 5.5 is correct, not duplication.
#  AXIS 3 IS THE WORSE OF THE TWO LEGS, NEVER THE AVERAGE. Venue depth is
# 5.0 and primary redemption is 4.5, so the axis is 4.5 — redemption is the
# worse leg because a U.S. person has no primary channel at all.
# `redemption_score: 4.5` is RETAINED but no longer rendered; it is the
# evidence for axis 3, and both legs are named in prose under that heading.
axis_frame: six
# PARKED: riskAnalyst's last_verified is HELD at 2026-08-27 by their own deliberate
# note — the 2026-09-20 pass did not close authority across all declared networks and did not
# establish a current contractual Re-capital numerator.  Those two gaps, not elapsed
# time, are what a whole-body verification needs [owner: riskAnalyst] [since: 2026-09-20]
# PARKED: the EOA holding CANCELLER_ROLE is published WITHOUT its address — only a
# 10-char stub exists and this TimelockController is not AccessControlEnumerable, so the
# holder set cannot be derived on-chain either. Needs the full address re-sourced
# [owner: riskAnalyst] [since: 2026-10-04]
volatility_score: 7.0
backing_score: 5.0
liquidity_score: 4.5
underlying_score: 5.0
structural_score: 4.0
issuer_score: 5.5
redemption_score: 4.5
overall_score: 5.0
#  POINTS AT OUR OWN MONITOR, not the issuer's. This field drives the
# "Open dashboard" CTA, and the CTA should send a reader to the independent
# read rather than to Re's page — Re's dashboard is still cited in the body as
# the canonical source for live metrics, which is the right place for it.
#  The target is STAGED and has no collateral ratio by design. That is
# acceptable only because THIS REPORT IS ALSO STAGED and the two promote
# together; if this report is ever promoted while the monitor is not, this
# field must go back to the issuer URL or be removed.
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=reusd-re"
---

# reUSD (Re Protocol) — Risk Report

**Moderate risk · 5.0/10**

Senior NAV-accruing reinsurance tranche issued by Resilience BVI Ltd.

> **Issuer-published dashboard:** [app.re.xyz/reusd](https://app.re.xyz/reusd) — this is **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, yield/price/TVL history charts, capital tranching diagram, and links to Chainlink Proof of Reserves. It is the canonical source for live metrics on this asset.
>
> **Independent monitor:** [reUSD backing monitor](https://todayindefi.github.io/backing-monitor/?asset=reusd-re) — six-axis monitoring with current market and backing data. Re publishes combined reUSD and reUSDe reserves without an asset-attributed denominator, so the monitor does not display a reUSD-only collateral ratio.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| 7.01% APY (7-day simple, 2026-10-13) | DEX-only (Curve, Fluid) | Instant while buffer permits; gated beyond it | about 16 months | Fourteen declared, led by Ethereum |

## Summary

reUSD is the **senior tranche** of Re Protocol's reinsurance capital structure. Capital is deployed into fully-collateralised reinsurance contracts via licensed insurers, with funds held in a U.S. §114 Reinsurance Trust Account. The senior tranche earns the risk-free rate plus a **250bps spread** — currently around 6.1% APY. Below it sits its junior sibling [reUSDe](/reports/reusde-re/) (mezzanine), and below that Re Protocol's own equity capital. Losses are absorbed bottom-up, so reUSD is impaired only if an underwriting event exhausts both junior layers.

As of 2026-10-13, Re reports **270,801,799 reUSD** at NAV **$1.106575**, giving **$299.663M supply at NAV**, and a **7.01%** seven-day simple APY. Issuer TVL is **$321.291M**, $21.629M higher than supply at NAV; Re does not document what creates the difference. The token is declared on 14 chains, including Sei, while tradable liquidity remains concentrated on Ethereum. The canonical Ethereum contract is [`0x5086bf35…0c72`](https://etherscan.io/address/0x5086bf358635b81d8c47c66d1c8b9e567db70c72).

The central trade-off is seniority against control and exit. High-grade collateral, a regulated operator and a current audit stack support the asset, but U.S. persons cannot redeem directly and NAV is written through privileged infrastructure outside the upgrade timelock.

## 1 · Stability — 7.0

reUSD is a **vault share**: its target price grows with NAV, not a $1 peg. The right metric for stress is **discount-to-NAV** — `(NAV − market price) / NAV` — not absolute price against $1.00.

NAV has run from $1.00 at the June 2025 inception to about **$1.096**, consistent with the target rate, and it cross-checks two ways: the on-chain Fluid oracle and CoinGecko agree to the third decimal. Across 14 months of trading, secondary price has tracked that smooth curve closely. Early-launch dips in July–August 2025 imply roughly **1–3% discount-to-NAV at the worst**, with near-zero deviation from late 2025 onward.

**On the $0.8734 all-time-low print:** an aggregator text field shows it; the rendered chart does not. It is an early-launch thin-seed-pool artifact from July 2025, about a month after inception — not a redemption event. sUSDe, the Mainnet payout asset, has never sustained a sub-$1 price and stood above $1.13 on that date, so a redeem-then-dump could not have marked reUSD at $0.87.

The 7.0 score reflects close historical tracking to NAV, tempered by a short operating history and back-loaded insurance losses. A cohort restricted to DEX exit can still detach from NAV under stress even when the underlying book remains unimpaired.

## 2 · Backing — 5.0

Two pools sit behind the token. The **off-chain leg** is fully-collateralised reinsurance contracts written through licensed insurers, with assets held in a U.S. §114 Reinsurance Trust Account at an independent trust bank. The **on-chain leg** is a liquid sleeve, sized to hold at least a 50% reserve buffer against redemptions.

Re may run the on-chain sleeve as an Ethena sUSDe basis trade or a T-Bill strategy. The tranche-level sleeve measured on 2026-09-06 was **99.05% sUSDe**, 0.87% reUSD/sUSDe LP, 0.06% USDe, 0.01% USDC and **$0 of T-Bills**: 99.98% Ethena-derived. A later combined-program read showed roughly 51% sUSDe and 49% USDC, but Re does not attribute that program-wide mix between reUSD and reUSDe. The measured tranche sleeve was high-quality but concentrated in one synthetic-dollar complex.

Yield is a **deployment-weighted blend**. Off-chain capital earns SOFR plus 250bps; idle on-chain capital earns the trailing seven-day sUSDe rate plus 250bps. The protocol converts that blend into daily NAV appreciation without rebasing. A decline in the Ethena basis therefore reaches returns in proportion to the idle sleeve. Re reports the rate using simple annualisation (×365/7).

The Network Firm publishes daily reserve attestations; **Chainlink Proof of Funds** publishes hashed trust balances and premium/claim flow on-chain; Grant Thornton (Cayman) audits annually. These controls attest to the off-chain leg but do not make the underlying reinsurance contracts independently observable on-chain.

Re does not publish a current contractual amount subordinated ahead of reUSD, so no present attachment percentage is supportable. Its approximately $77M June 2026 balance-sheet figure and approximately $20M loss-waterfall scenario layer measure different quantities. Residual non-tokenised capital calculated from the 2026-10-13 TVL payload is **$73.909M**, or 23.00% of reported reUSD TVL, but this is a balance-sheet residual rather than contractual waterfall thickness.

The measurable direction is adverse: reUSDe is now **6.59% of reported reUSD TVL**, while residual non-tokenised capital has remained broadly flat as the senior tranche grew. No claim event has occurred, the reported combined ratio remains 92%, and collateral quality has not deteriorated. The weaker cushion comes from growth in the senior denominator.

**Risks and limitations.** Backing quality is supported by attestations and audits, but tranche attribution, reserve composition as of October and the contractual attachment point remain unverified. NAV is issuer-written.

## 3 · Liquidity & Exit — 4.5

reUSD has primary redemption for eligible non-U.S. holders and secondary DEX liquidity for everyone. Access to the primary route determines which path binds.

**Primary redemption — non-U.S. KYC only.** Tiered: an actuarially determined instant buffer, typically 50%+ of deposits, settles immediately at NAV. Requests beyond it queue and settle as trust assets mature. Re disclosed throughput caps in August 2026: instant redemptions are limited to 20% of available redemption capacity per day, with a per-wallet cap of 10% of that daily pool — so a single wallet can pull at most about 2% of the pool per day — and if the buffer falls below 1% of total supply the contract switches to quarterly-window-only mode. Fees are 0.18% on subscription and 0.18% on redemption; the minimum deposit is 250 USDC. Against roughly $44M of on-chain redemption liquidity observed in August, that is ample at retail size and a real constraint at institutional size.

**The payout asset depends on the chain.** On Mainnet the instant tier pays out in **sUSDe, not USD**. A clean dollar requires a second leg — Ethena's dynamic 1-to-7-day cooldown, currently 1 day, or a DEX swap with stress slippage. **On Avalanche, redemptions pay USDC and are exempt.** So even a non-U.S. holder redeeming on Mainnet inherits Ethena exposure at the moment of exit.

**Secondary market — the only path for U.S. persons.** reUSD trades on Curve and Fluid with **no CEX listing**, and  **venue depth is highly chain-dependent — thirteen deployments is not thirteen markets**: Fluid REUSD/USDT carries about 63% of 24h DEX volume, Curve REUSD/sUSDe about 37%, Curve REUSD/USDC under 1%, plus a stale Blackhole V2 pool. Aggregate DEX exit liquidity is about **$28M/month** (roughly $946K/24h).  **The often-cited "$511M monthly volume" is *transfer* volume** — it conflates mints, redemptions and wallet-to-wallet transfers with DEX trades, and only the DEX share is realisable exit. Against a market cap above $205M, $28M/month is functional at retail size and thin at institutional size.

**Risks and limitations.** U.S. persons have no primary channel and must use DEX liquidity. Mainnet redemption pays sUSDe rather than dollars, adding another conversion step. Live redemption capacity and executable depth across all 14 declared chains were not re-measured in October.

## 4 · Dependencies — 5.0

**Ethena enters through three channels at once:** the yield formula, the on-chain sleeve measured at 99.98% Ethena-derived, and the Mainnet redemption payout asset. A sUSDe depeg therefore propagates to yield, the reserve buffer and the exit asset simultaneously. Sleeve composition can rotate to T-Bills, but operational sUSDe is still needed for the Mainnet instant-redemption queue. Avalanche primary redemption pays USDC instead.

**Cross-chain liveness runs through one provider.** As of July 2026 reUSD's cross-chain distribution moved from a LayerZero OFT to **Chainlink CCIP as the exclusive bridge**. That modestly reduces bridge-configuration attack surface and concentrates liveness on a single provider.

**And the substance of the asset is off-chain.** The smart contract does not hold the reinsurance. On-chain reads tell you supply and the attested NAV; the credit exposure is a TradFi reinsurance programme, and the stack it depends on is a U.S. trust bank, the underwriting carriers, The Network Firm, Chainlink feed liveness, Fireblocks operational continuity and Grant Thornton. **None of that is verifiable from Ethereum state.**

## 5 · Contract & Admin — 4.0

- **Token contract:** ERC-1967 upgradeable proxy at `0x5086bf358635b81d8c47c66d1c8b9e567db70c72` (Ethereum). NAV is set from an off-chain feed; this is **not** an ERC-4626 vault, so there is no `convertToAssets` to check the mark against.
- **Upgrade authority:** gated by AccessControl roles. Verified on-chain: the admin role on both the reUSD and reUSDe proxies is held by an OpenZeppelin `TimelockController` at [`0x69dDEa33…7FCA93`](https://etherscan.io/address/0x69dDEa332723cF5407151aAF68B9b076557FCA93) with a minimum delay of 172,800 seconds — **a real 48-hour delay.**  **Read it accurately: a single Safe holds the proposer, executor and canceller roles, so the 48 hours is a public notice window, not an independent second approval.** Nobody else has to agree; you get two days' warning.
- **Day-to-day operations** run through four Fireblocks MPC controller wallets — 3-of-5 for oracle config, redemptions config and custodian manager; 5-of-8 for the access manager.
- **Custody:** crypto leg on Fireblocks MPC; off-chain leg in the §114 trust account.

`getMinDelay()` returns **172,800 seconds**, the emergency-updater Safe is **3-of-5**, and the timelock holds `DEFAULT_ADMIN_ROLE` over itself, so removing a canceller must itself be scheduled and wait two days. An externally-owned account also holds `CANCELLER_ROLE` alongside the Safe and can veto a queued action scheduled by the multisig.

The `TimelockController` implements `AccessControl` but not `AccessControlEnumerable`: `supportsInterface` returns false and `getRoleMemberCount` does not answer. The complete canceller set therefore cannot be derived from enumeration calls. The independently identified canceller EOA is not published here because only a truncated address was available.

**The NAV write path is the weak point, and it is not covered by the timelock.** The price used to mark reUSD — including as collateral on Fluid — traces back to a **single admin-written share price** on Re's `SharePriceCalculator`. A `forceNAVUpdate` path held by a 3-of-5 Safe sits **outside** the 48-hour delay and **skips the ±10% deviation guard**.

**And the bypass is not a separate emergency lever sitting beside the writer — it is inside it.** The routine daily NAV write and the deviation-guard bypass are the same undocumented 632-byte contract, `0xe888DF32`, which answers no standard interface and is absent from Re's published controller table. **That changes what the guard is worth:** a bypass held elsewhere is a second decision by a second component; a bypass in the same contract is a different argument to the same call, made by the same keys that write the price every day.

**Risks and limitations.** Selector presence in bytecode does not distinguish implementation from forwarding, and the contract was not disassembled. A markdown larger than 10% submitted through the normal path pauses the feed instead of publishing the lower price, so the mark can stop updating during the stress state in which it matters most.

Re's current registry documents replacement NAV oracles, CRE/CCIP feed pairs, redemption modules, per-chain timelocks and controller wallets. It also describes an ICL path through which the Safe can grant itself `UPGRADER_ROLE` without delay and CCIP-pool ownership/configuration outside a timelock. These documented paths were not independently re-read across all 14 declared chains.

**The audit position is current.** Re publishes a **Sherlock** collaborative audit (July 2026) against the live logic, a **Certora** formal verification (September 2025), and three **Hacken** engagements — NAV Oracle (April 2025), Core Contracts (December 2024) and DeFi Contracts (September 2024: 0 Critical, 0 High, 4 Medium, 7 Low, 18 Observations). The implementation is unchanged at `0xb5276c436f65913cd5332de745d04fedeb4a21d4` and is shared with reUSDe, so the Sherlock engagement covers the code you are actually holding. **Still no publicly disclosed bug bounty** — a gap relative to mature DeFi protocols, and one the off-chain audit posture does not compensate for at the contract layer.

The 4.0 score reflects a genuine upgrade timelock and current audits, offset by an issuer-written mark, an undelayed guard-bypass path, and authority surfaces that are not fully closed across every declared chain.

## 6 · Issuer — 5.5

Resilience BVI Ltd. is a named, licensed entity operating under a **BVI securities exemption** — which is also the reason **U.S. persons are excluded from primary redemption**, the single most consequential fact on this page for a U.S. holder. The control quality is genuine: Grant Thornton (Cayman) as annual auditor, The Network Firm on daily attestations, Fireblocks MPC for custody, and a Chainlink Proof-of-Funds feed. **But the model is trust-the-operator rather than trust-the-code**, and the issuer writes the NAV its own holders are marked against.

**Three disclosure gaps are worth carrying.** The **trust bank custodian is not publicly named**. The **reinsurance carrier and cedent counterparties are not disclosed** — industry-standard, and still a real gap, because a holder cannot know whose book they are backing. And  **Re publishes two different junior-capital figures without saying which governs the attachment schedule** (see the tranche note below).

**14 months in market with no solvency incident, no exploit and no material discount-to-NAV event** is a genuine positive.  **It also carries less information here than it would in most categories, because insurance losses are back-loaded** — they surface quarters or years after the policies are written. **5.5** reflects a credible, named, regulated operator in an offshore regime, with disclosure gaps that a holder cannot close from outside.

## Who it's for

- **Non-U.S. yield-seekers** comfortable with regulated RWA exposure who want tokenised senior reinsurance with on-chain composability. Treat as a 5-10% portfolio sleeve, not a stablecoin substitute.
- DeFi users who specifically want **multi-chain availability** for an RWA position and are comfortable with DEX-only secondary exit.

## Who should avoid

- **U.S. persons looking for a redeem-at-par stablecoin substitute.** Primary redemption is unavailable and exit is DEX-only. The exit-asymmetry setup that has produced -5% to -15% detachments elsewhere has not fired here, but it is unchanged, and 14 months without a real stress event is not the same as resilience to one.
- **Anyone leveraging on a venue that uses a market-priced oracle.** A secondary detachment would trigger liquidations even with Re's NAV unimpaired; a NAV-priced oracle is the only defensible configuration — and even then, the mark itself is issuer-written.
- **Anyone who needs a fully on-chain trustless instrument.** The substantive dependencies are off-chain and unverifiable from Ethereum state.

## What to watch

- **[Re Protocol's issuer dashboard](https://app.re.xyz/reusd)** — current APY, TVL, supply and historical charts, updated in real time by the issuer, with the Chainlink Proof of Reserves feed linked from there.
- **NAV vs market price spread.** Target under 50bps in calm conditions; over 200bps is a stress signal.
- **Sleeve composition.**  **A rotation into T-Bills would be the single most meaningful de-risking event available to this asset**, because it is the only permitted holding that reduces Ethena concentration. It has not happened.
- **Ethena sUSDe basis health.** It reaches the yield, the reserve and the Mainnet exit asset at once.
-  **Whether Re publishes a current contractual subordination figure at all.** Not a reconciliation of the two it already publishes — those measure different things — but **a stated amount contractually subordinated ahead of the senior tranche, as of a date.** That single number would restore the attachment point. **It is the most useful question to put to the issuer**, and until it is answered no cushion percentage for this tranche is computable.
- **Mezzanine capacity.** [reUSDe](/reports/reusde-re/) stands at **$19.85M**, or **9.14% of the senior tranche** (14,094,070 tokens at NAV 1.408519, measured 2026-08-27). It came through its first-ever redemption window in July 2026 in an orderly way. If it contracts relative to the underwriting book, reUSD's loss buffer thins.

## A note on the tranche structure

reUSD is the **senior** layer in a three-tier waterfall: Re Protocol's own equity absorbs losses first, then the [reUSDe mezzanine tranche](/reports/reusde-re/), and only then reUSD.

| Layer | Size | Source |
|---|---:|---|
| Re residual capital | **$73.909M** | 2026-10-13 balance-sheet residual; not contractual subordination |
| Mezzanine — [reUSDe](/reports/reusde-re/) (second loss) | **$21.162M** | 14,799,533 × NAV 1.429924, 2026-10-13 |
| Senior — reUSD (last loss) | **$299.663M** | 270,801,799 × NAV 1.106575, 2026-10-13 |

The three rows are not additive proof of a cushion. Re's approximately $77M June 2026 product-page figure describes balance-sheet depth, while a loss-scenario page uses about $20M of Re capital as a waterfall layer. Balance-sheet depth and contractual subordination are different quantities. No current attachment point is published; the measurable direction is downward because the senior tranche has grown faster than the layers beneath it.

**And the distinction that remains true regardless:** loss absorption follows what the reinsurance treaties subordinate, not what the balance sheet happens to hold. Equity above the attachment point may well absorb losses — Re has every commercial incentive to protect its tokens — but nothing published *obliges* it to before reUSDe is impaired.

In the unit reinsurance actually uses: a **combined ratio** is claims plus expenses as a percentage of premiums collected, so below 100% the book is profitable. Re's book is about **$358M of premium**, and premiums plus buffer absorb claims up to a **105%** combined ratio before any capital layer is touched. From there:

- **105–110%** — Re's own capital absorbs the loss
- **110–115%** — reUSDe, the mezzanine, absorbs it
- **above 115%** — reUSD, your layer, starts taking losses

For scale: Re's realised combined ratio is **92% to date**, it reports sub-100% in every underwriting year since inception, no individual treaty has ever finished above 99%, and its own November 2025 stress model used a 135% environment as the extreme case. The book is all frequency lines — small-business commercial, commercial auto, workers' comp, homeowners — with **no property-catastrophe exposure**, which is the line most likely to produce a sudden, correlated, book-wide loss.

**Two things this does not settle.** The $77M is a docs assertion, not an attested figure, and equity is exactly the layer that moves after a bad year. And the structure has never been stress-tested by a real underwriting loss. **A clean record on a book this young is encouraging, not conclusive.**

## A note on Re Points and the $RE token

Re Protocol runs a loyalty points program with current reUSD multipliers of Pendle YT 30x, Pendle LP 30x and Fluid 5x–20x. Re launched the fixed-supply $RE governance token on 18 June 2026 and Season-1 points became claimable. Season-2 conversion terms are not guaranteed, so ongoing points are marketing optionality rather than measured yield.

## Revision history

- **2026-10-13 — current quantities and issuer architecture refreshed; scores held.** Re reports **270.802M reUSD**, NAV **$1.106575**, **7.01%** seven-day simple APY and **$321.291M** issuer TVL versus **$299.663M supply × NAV**. Residual non-tokenised capital is **$73.909M**; reUSDe has diluted to **6.59%** of senior TVL. Sei is now officially declared, taking the footprint to 14 chains. Re's registry now documents replacement NAV oracles, CRE/CCIP feeds, redemption modules, per-chain timelocks/controllers, plus untimelocked ICL upgrade-grant and CCIP-pool configuration paths. `last_verified` holds because mutable roles, executable liquidity, reserve composition and all-chain state were not independently re-measured.

- **2026-10-04 — refreshed against the internal report; no score moves.**  **The chain footprint was wrong by nine: thirteen deployments, not four** — adding megaeth, katana, bnb, ink, plasma, bera, monad, tempo and sol to the published list.  **A fourteenth, Sei, is deliberately withheld**: Re's own contract table lists it and an on-chain `symbol()` read confirms it, but no Re announcement has been read and "declared" is a stronger claim than "exists". **Supply and NAV restated with dates: 239,825,467.86 at NAV 1.1019832119, supply × NAV $264.284M at 2026-09-20**, against the Ethereum-leg-only read of 2026-08-27 —  **not a like-for-like delta.**  **Re's `/tvl` reports $283.610M, $19.327M above supply × NAV and unexplained in Re's documentation; token value is supply × NAV.** APY restated at **6.82%**.  **Two reserve figures now exist and are not the same quantity:** the tranche sleeve is **99.05% sUSDe at 2026-09-06**, while a **combined-program** read gives roughly 51% sUSDe / 49% USDC at 2026-09-20 — **program-wide and not attributable to this tranche.**  **An EOA holds `CANCELLER_ROLE` alongside the 3-of-5 Safe**, so one key can veto an action the multisig scheduled; the 48-hour delay, the 3-of-5 threshold and the timelock's admin authority over itself were all re-read on-chain, and **the holder set is not enumerable** because this contract implements `AccessControl` without `AccessControlEnumerable`.
- **2026-10-04 — the attachment-point basis is withdrawn; Backing held at 5.0.**  **The 9.66% / 7.94% / 11.06% ratios are retired as current metrics.** Re publishes **no current contractual figure** for capital subordinated ahead of the senior tranche, so **no attachment percentage is computable for this tranche today** — the numerator does not exist as a published quantity.  **And the two junior-capital figures are non-interchangeable rather than unreconciled:** ~$77M is a **June 2026 balance-sheet** figure, ~$20M is a **loss-waterfall scenario layer**. They measure different quantities, so the previous instruction to size to the smaller one is withdrawn — it produces a precise number for something nobody measures, which reads as measured.  **What survives is the direction and its cause:** through 2026-09-06 the cushion thinned on both of Re's bases, by **dilution through growth rather than any loss** — no claim event, combined ratio still 92%, junior layer flat at +0.4% while the senior grew. **Backing 5.0 is a provisional hold resting on the issuer-written NAV against otherwise high-grade collateral, explicitly not on an attachment percentage.**
- **2026-09-06 — Backing 5.5 → 5.0. The first-loss attachment point is 7.94% of the senior tranche, against 11.06% on 08-11** — both readings on the same all-chain basis, and both with operands measured on their own date. Today's: senior **$251.8M**, junior proxy **$72.97M**.  **Dilution by growth, not a worse book** — no claim event, combined ratio still 92%, and the junior layer is flat at about +0.4% while the senior grew 39.3% in 26 days. The finding is now **basis-independent**, falling below norm on the $20M waterfall basis and on the balance-sheet basis alike.
- **2026-09-06 — the on-chain sleeve is 99.05% sUSDe and holds no T-Bills.** Measured from Re's metrics endpoint: sUSDe 99.05%, reUSD/sUSDe LP 0.87%, USDe 0.06%, USDC 0.01%, T-Bills $0 — **99.98% Ethena-derived.** The T-Bill strategy is a permitted rotation that has not occurred, so the sleeve is one synthetic dollar rather than a diversified book.
- **2026-08-27 — senior and mezzanine re-measured.** The Ethereum leg reads **198,103,604 reUSD at NAV 1.096411, about $217.2M**; Re's `/tvl` reports **$233.7M all-chain**, issuer-reported. The mezzanine is **14,094,070 reUSDe at NAV 1.408519 = $19.85M, or 9.14% of the senior** — NAV corroborated by Re's endpoint and CoinGecko to 0.03%.
- **2026-08-24 — a first-loss attachment reading of 9.66%**, on a June junior figure over the **Ethereum leg alone**.  **Not comparable to the all-chain readings above and deliberately left out of that series:** the Ethereum leg is 93.6% of the all-chain total today and was 97.1% on 08-11, so an Ethereum-only denominator **overstates** attachment, and by a widening margin. On a clean basis this point was already below 9.66%.
- **2026-08-18 — three disclosure gaps closed.** Re published the sizing of the layers beneath reUSD; the audit position on the live implementation became current (**Sherlock** July 2026 and **Certora** September 2025, on an unchanged implementation); and a **48-hour OpenZeppelin `TimelockController`** at `0x69dDEa33…7FCA93` was verified on-chain holding the admin role on both the reUSD and reUSDe proxies.
- **2026-07 — cross-chain distribution migrated** from a LayerZero OFT to **Chainlink CCIP as the exclusive bridge**. Supported chains unchanged.
- **2026-06-18 — $RE launched**, monetising the Season-1 points program.
