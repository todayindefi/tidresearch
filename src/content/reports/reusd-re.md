---
asset: "reUSD (Re Protocol)"
slug: "reusd-re"
aliases: ["reUSD (Re Protocol)", "Resilience reUSD"]
chains: ["eth", "arb", "base", "avax"]
category: "vault-share"
assessment_type: "full"
date: "2026-05-19"
last_verified: "2026-08-25"
# Scope-limited pass 2026-09-06: sleeve composition re-measured from Re's
# metrics endpoint and the report re-framed onto the six-axis core. The
# structural material was re-scoped, not re-read, so `last_verified` HOLDS at
# 2026-08-25 deliberately — do not bump it on a sweep.
last_revised: "2026-09-06"
featured: false
# MOVED BACK TO STAGING 2026-08-31, deliberately — do not re-promote on a
# freshness or completeness sweep. ⚠️ The site owner's rule is that THIS REPORT
# AND ITS DASHBOARD PROMOTE TOGETHER, gated on a puppeteer verification pass.
# Status 2026-09-06: one blocker CLEARED — axis 5 (Contract & Admin) now
# renders on backing-monitor for `?asset=reusd-re`. The other has not and
# largely CANNOT: Re publishes combined reUSD + reUSDe reserves with no
# asset-attributed denominator, so no collateral ratio is derivable for reUSD
# alone. ⚠️ That is an honest PERMANENT blank, not a pending measurement, so
# the gate stays shut and this report stays staged.
# `?asset=reusde-re` is registered but still awaiting its producer feed.
# TO PROMOTE: both dashboards complete and verified IN A BROWSER, then flip
# both reports together. Checked before demoting: no `production: true` report
# links here, so nothing 404s on prod (only frax.md links in, and it is staged).
production: false
issuer: "Resilience BVI Ltd."
market_cap_approx: 181000000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#   ⚠️ `structural_score` 6.0 -> 4.0 and `overall_score` 6.0 -> 5.0 are a
#     RE-SCOPING, NOT A DETERIORATION. No adverse evidence arrived. The old
#     "Structural 6.0" was silently pricing THREE of the six axes — legal
#     structure (now Issuer 5.5) and the off-chain dependency stack (now
#     Dependencies 5.0) alongside contract and authority. Axis 5 is Contract &
#     Admin ONLY, and what remains there scores 4.0. The overall was set
#     against four axes and the report now has six.
#   ⚠️ NOT recorded in the revision history, deliberately: a re-scoping of
#     which axis carries a fact is a change to US, not to the asset. The body
#     states the six axes as current method; it does not diff itself.
#   backing_score 5.0 is NEW. Collateral is good in QUALITY and NOT
#     diversified — measured 99.05% sUSDe, T-Bills $0. The concentration is
#     priced on axis 4, not here, or it would be double-counted.
#     ⚠️ 5.0 rather than 5.5 on the attachment point, which is 7.94% measured
#     2026-09-06 against 11.06% on 08-11, both all-chain. ⚠️ The 08-24 9.66%
#     is NOT in that series: it divided by the ETHEREUM LEG alone, which
#     overstates attachment. DILUTION BY GROWTH, NOT A WORSE BOOK:
#     no claim event, combined ratio still 92%, and the junior layer is
#     measurably FLAT (+0.4%) while the senior grew. It is now basis-
#     INDEPENDENT — the point falls on the $20M waterfall basis AND on the
#     $72.97M balance-sheet basis — which is why it moves a score where three
#     earlier readings of the same finding did not.
#   underlying_score 5.0 is NEW and renders as DEPENDENCIES: three-channel
#     Ethena exposure plus the off-chain stack.
#   issuer_score 5.5 is NEW and is SHARED WITH reusde-re — same entity, so two
#     pages showing 5.5 is correct, not duplication.
# ⚠️ AXIS 3 IS THE WORSE OF THE TWO LEGS, NEVER THE AVERAGE. Venue depth is
# 5.0 and primary redemption is 4.5, so the axis is 4.5 — redemption is the
# worse leg because a U.S. person has no primary channel at all.
# `redemption_score: 4.5` is RETAINED but no longer rendered; it is the
# evidence for axis 3, and both legs are named in prose under that heading.
axis_frame: six
volatility_score: 7.0
backing_score: 5.0
liquidity_score: 4.5
underlying_score: 5.0
structural_score: 4.0
issuer_score: 5.5
redemption_score: 4.5
overall_score: 5.0
# ⚠️ POINTS AT OUR OWN MONITOR, not the issuer's. This field drives the
# "Open dashboard" CTA, and the CTA should send a reader to the independent
# read rather than to Re's page — Re's dashboard is still cited in the body as
# the canonical source for live metrics, which is the right place for it.
# ⚠️ The target is STAGED and has no collateral ratio by design. That is
# acceptable only because THIS REPORT IS ALSO STAGED and the two promote
# together; if this report is ever promoted while the monitor is not, this
# field must go back to the issuer URL or be removed.
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=reusd-re"
---

# reUSD (Re Protocol) — Retail Risk Report

**Moderate risk · 5.0/10**

> **Issuer-published dashboard:** [app.re.xyz/reusd](https://app.re.xyz/reusd) — this is **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, yield/price/TVL history charts, capital tranching diagram, and links to Chainlink Proof of Reserves. It is the canonical source for live metrics on this asset.
>
> **Independent monitor (staged, unfinished):** [tidresearch backing monitor — reUSD](https://todayindefi.github.io/backing-monitor/?asset=reusd-re) — our own read of the same asset, on the six-axis frame, built to sit **beside** the issuer's page rather than replace it. ⚠️ **It is not finished and should not be cited.** One gap is worth knowing before you open it, and it is permanent rather than pending: **there is no collateral ratio at all** — Re publishes combined reUSD + reUSDe reserves with **no asset-attributed denominator**, so no CR can honestly be derived for reUSD alone. ⚠️ **A blank there is an honest blank, not a missing number.**

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| about 6.1% APY | DEX-only (Curve, Fluid) | Tiered (50%+ instant buffer, queue beyond) | about 14 months | Ethereum, Arbitrum, Base, Avalanche |

## Summary

reUSD is the **senior tranche** of Re Protocol's reinsurance capital structure. Capital is deployed into fully-collateralised reinsurance contracts via licensed insurers, with funds held in a U.S. §114 Reinsurance Trust Account. The senior tranche earns the risk-free rate plus a **250bps spread** — currently around 6.1% APY. Below it sits its junior sibling [reUSDe](/reports/reusde-re/) (mezzanine), and below that Re Protocol's own equity capital. Losses are absorbed bottom-up, so reUSD is impaired only if an underwriting event exhausts both junior layers.

**Sized on-chain 2026-08-27:** the Ethereum leg alone is **$217.2M** — 198,103,604 reUSD at a NAV of 1.096411, both measured on-chain ([`0x5086bf35…0c72`](https://etherscan.io/address/0x5086bf358635b81d8c47c66d1c8b9e567db70c72)). Re's `/tvl` endpoint reports **$233.7M all-chain**, which is issuer-reported and labelled as such. **Measured again 2026-09-06, the senior tranche stands at $251.8M** — it dipped to about $162M in mid-July, when capital rotated into the higher-yield mezzanine after the June 2026 $RE launch, and has grown hard since. ⚠️ **That growth is what has thinned the subordination beneath it**, which is the Backing axis below rather than anything that happened to the reinsurance book. Deployments cover Ethereum, Arbitrum, Base and Avalanche; tradable liquidity is Ethereum-concentrated.

One number to treat carefully: Re's headline protocol TVL (about $591M) is **not** a capital base. It adds roughly $319M of *premium receivables* — the reinsurance book itself — on top of about $272M of actual capital. The capital figure is the one that matters for solvency, and it is what DefiLlama reports. **Do not read the headline as investor capital standing behind the tranches.**

**This report scores on six axes** — Stability, Backing, Liquidity & Exit, Dependencies, Contract & Admin, Issuer. Contract & Admin covers upgrade authority, key custody and the NAV write path *only*. The legal and entity questions sit on Issuer, and the off-chain and Ethena stack on Dependencies.

**What sets the overall is that the two weakest axes compound rather than sit side by side.** You exit through a queue — secondary-only if you are a U.S. person, because the BVI securities exemption excludes U.S. residents from primary redemption — and the price you exit at is **a mark the issuer writes**, on a path that sits outside the 48-hour timelock. Slow or restricted exit, at a price set by a key. What holds the score up is broad rather than one strong axis: high-grade collateral, a regulated operator, a current audit stack on unchanged code, and a reinsurance book running a 92% combined ratio. **reUSD's problem is control over a good book, not the book.**

## 1 · Stability

reUSD is a **vault share**: its target price grows with NAV, not a $1 peg. The right metric for stress is **discount-to-NAV** — `(NAV − market price) / NAV` — not absolute price against $1.00.

NAV has run from $1.00 at the June 2025 inception to about **$1.096**, consistent with the target rate, and it cross-checks two ways: the on-chain Fluid oracle and CoinGecko agree to the third decimal. Across 14 months of trading, secondary price has tracked that smooth curve closely. Early-launch dips in July–August 2025 imply roughly **1–3% discount-to-NAV at the worst**, with near-zero deviation from late 2025 onward.

**On the $0.8734 all-time-low print:** an aggregator text field shows it; the rendered chart does not. It is an early-launch thin-seed-pool artifact from July 2025, about a month after inception — not a redemption event. sUSDe, the Mainnet payout asset, has never sustained a sub-$1 price and stood above $1.13 on that date, so a redeem-then-dump could not have marked reUSD at $0.87.

**Held at 7.0**, and capped there rather than higher because 14 months is a short history, insurance losses are back-loaded, and the setup that has produced -5% to -15% detachments on other tokenised RWAs — a gated cohort with DEX-only exit — remains in place even though it has not fired here.

## 2 · Backing

Two pools sit behind the token. The **off-chain leg** is fully-collateralised reinsurance contracts written through licensed insurers, with assets held in a U.S. §114 Reinsurance Trust Account at an independent trust bank. The **on-chain leg** is a liquid sleeve, sized to hold at least a 50% reserve buffer against redemptions.

⚠️ **The sleeve's mandate and the sleeve's holdings are different things, and the difference is the whole point.** Re is *permitted* to run the sleeve as an Ethena sUSDe basis trade **or** a T-Bill strategy. **Measured from Re's own metrics endpoint on 2026-09-06, it is 99.05% sUSDe**, plus 0.87% reUSD/sUSDe LP, 0.06% USDe and 0.01% USDC — and **$0 of T-Bills.** That is **99.98% Ethena-derived.** The T-Bill leg is a permitted rotation that has not occurred, and it is the one allowed asset that would diversify *away* from Ethena. ⚠️ **The collateral is good in quality and it is not diversified: it is one synthetic dollar, not four assets.** That concentration is priced on axis 4, where the dependency lives, rather than twice.

**What you actually earn** is a **deployment-weighted blend**, not the better of two rates. Off-chain (deployed) capital earns SOFR + 250bps; on-chain (idle sleeve) capital earns the trailing 7-day sUSDe rate + 250bps. Each day at 00:00 UTC the protocol computes the deployment mix and converts the blended rate into NAV appreciation — there is no rebasing. ⚠️ **A blend matters here in a way a maximum would not: a max-of formula would floor a holder at whichever leg was performing, and a blend passes an Ethena basis collapse straight through at the deployment weight.** Re annualises **simple** (× 365/7); quote that convention or none, because compounding the same data produces a visibly different headline. Compared with sibling reUSDe (about 12% APY), reUSD earns roughly half the yield in exchange for having the mezzanine absorb losses first.

**Verification of the off-chain leg is genuine but is attestation, not proof.** The Network Firm publishes daily reserve attestations; **Chainlink Proof of Funds** publishes hashed trust balances and premium/claim flow on-chain 24/7; Grant Thornton (Cayman) audits annually.

⚠️ **The subordination beneath the senior tranche has thinned, and the reason is growth rather than loss.** On the sizing basis this report recommends — the smaller of Re's two published junior-capital figures — **the first-loss layer is 7.94% of the senior tranche, measured 2026-09-06**, against the 10% level conventionally treated as the institutional norm. Both operands are measured the same day: the senior tranche at **$251.8M**, and a live junior proxy of **$72.97M** from Re's own reserve arithmetic.

⚠️ **This is dilution by growth, and it is not a deterioration in the reinsurance book.** There has been no claim event; the combined ratio is still 92%, no treaty has finished above 99%, and collateral quality is unchanged. **The junior layer is measurably flat — about +0.4% — while the senior tranche grew.** What got thinner is the cushion relative to a tranche that outgrew it. **Re raising more senior money than junior is the ordinary consequence of selling the senior product well**, which is exactly why it goes unnoticed: growth reads as health. **When a ratio moves, check which side moved.**

✅ **Two things make this worth acting on rather than watching.** It is now **basis-independent** — the attachment point falls on the conservative **$20M waterfall basis (7.94%)** *and* on the **$72.97M balance-sheet basis (28.98%)** — so it no longer depends on resolving Re's own $77M-versus-$20M ambiguity. And the junior layer is now **measured rather than assumed**: earlier readings of this finding divided a June junior figure by an August senior read and had to be flagged indicative.

**5.0** on that attachment point and on the NAV being issuer-written, against collateral that is otherwise high-grade.

## 3 · Liquidity & Exit

This axis covers **both** exit paths and is scored on the **worse** one. Which leg binds depends entirely on where you live.

**Primary redemption — non-U.S. KYC only.** Tiered: an actuarially determined instant buffer, typically 50%+ of deposits, settles immediately at NAV. Requests beyond it queue and settle as trust assets mature. Re disclosed throughput caps in August 2026: instant redemptions are limited to 20% of available redemption capacity per day, with a per-wallet cap of 10% of that daily pool — so a single wallet can pull at most about 2% of the pool per day — and if the buffer falls below 1% of total supply the contract switches to quarterly-window-only mode. Fees are 0.18% on subscription and 0.18% on redemption; the minimum deposit is 250 USDC. Against roughly $44M of on-chain redemption liquidity observed in August, that is ample at retail size and a real constraint at institutional size.

⚠️ **The payout asset depends on the chain.** On Mainnet the instant tier pays out in **sUSDe, not USD**. A clean dollar requires a second leg — Ethena's dynamic 1-to-7-day cooldown, currently 1 day, or a DEX swap with stress slippage. **On Avalanche, redemptions pay USDC and are exempt.** So even a non-U.S. holder redeeming on Mainnet inherits Ethena exposure at the moment of exit.

**Secondary market — the only path for U.S. persons.** reUSD trades on Curve and Fluid across the four supported chains with **no CEX listing**: Fluid REUSD/USDT carries about 63% of 24h DEX volume, Curve REUSD/sUSDe about 37%, Curve REUSD/USDC under 1%, plus a stale Blackhole V2 pool. Aggregate DEX exit liquidity is about **$28M/month** (roughly $946K/24h). ⚠️ **The often-cited "$511M monthly volume" is *transfer* volume** — it conflates mints, redemptions and wallet-to-wallet transfers with DEX trades, and only the DEX share is realisable exit. Against a market cap above $205M, $28M/month is functional at retail size and thin at institutional size.

⚠️ **This axis is the worse of the two legs, never the average, and the binding leg is redemption.** Venue depth alone would score 5.0: for a non-U.S. holder the primary path works at NAV and moots the depth question at retail size. **Redemption scores 4.5, and it is the worse leg because for a U.S. person there is no primary channel at all** — the secondary market is not the worse of two paths, it is the only path. **4.5 is that leg, not a blend of the two.** ⚠️ **Averaging would hide it**, and a gated cohort sitting behind deep-looking venues is precisely the case where the gate is invisible on-chain.

## 4 · Dependencies

**Ethena is the dependency a reader would not expect from a reinsurance product, and it enters through three channels at once:** the yield formula, which references the sUSDe rate on the idle leg; the on-chain sleeve, measured at 99.98% Ethena-derived; and the Mainnet redemption payout asset itself. ⚠️ **A sUSDe depeg therefore propagates to the yield, the reserve buffer and the exit asset simultaneously.** The redemption channel is the tightest of the three: sleeve composition *can* rotate to T-Bills, but the protocol must hold operational sUSDe to service the Mainnet instant-redemption queue regardless of strategy. Only Avalanche primary redeemers are outside it.

**Cross-chain liveness runs through one provider.** As of July 2026 reUSD's cross-chain distribution moved from a LayerZero OFT to **Chainlink CCIP as the exclusive bridge**. That modestly reduces bridge-configuration attack surface and concentrates liveness on a single provider.

**And the substance of the asset is off-chain.** The smart contract does not hold the reinsurance. On-chain reads tell you supply and the attested NAV; the credit exposure is a TradFi reinsurance programme, and the stack it depends on is a U.S. trust bank, the underwriting carriers, The Network Firm, Chainlink feed liveness, Fireblocks operational continuity and Grant Thornton. **None of that is verifiable from Ethereum state.**

## 5 · Contract & Admin

- **Token contract:** ERC-1967 upgradeable proxy at `0x5086bf358635b81d8c47c66d1c8b9e567db70c72` (Ethereum). NAV is set from an off-chain feed; this is **not** an ERC-4626 vault, so there is no `convertToAssets` to check the mark against.
- **Upgrade authority:** gated by AccessControl roles. Verified on-chain: the admin role on both the reUSD and reUSDe proxies is held by an OpenZeppelin `TimelockController` at [`0x69dDEa33…7FCA93`](https://etherscan.io/address/0x69dDEa332723cF5407151aAF68B9b076557FCA93) with a minimum delay of 172,800 seconds — **a real 48-hour delay.** ⚠️ **Read it accurately: a single Safe holds the proposer, executor and canceller roles, so the 48 hours is a public notice window, not an independent second approval.** Nobody else has to agree; you get two days' warning.
- **Day-to-day operations** run through four Fireblocks MPC controller wallets — 3-of-5 for oracle config, redemptions config and custodian manager; 5-of-8 for the access manager.
- **Custody:** crypto leg on Fireblocks MPC; off-chain leg in the §114 trust account.

⚠️ **The NAV write path is the weak point, and it is not covered by the timelock.** The price used to mark reUSD — including as collateral on Fluid — traces back to a **single admin-written share price** on Re's `SharePriceCalculator`. A `forceNAVUpdate` path held by a 3-of-5 Safe sits **outside** the 48-hour delay and **skips the ±10% deviation guard**.

⚠️ **And the bypass is not a separate emergency lever sitting beside the writer — it is inside it.** The routine daily NAV write and the deviation-guard bypass are the same undocumented 632-byte contract, `0xe888DF32`, which answers no standard interface and is absent from Re's published controller table. **That changes what the guard is worth:** a bypass held elsewhere is a second decision by a second component; a bypass in the same contract is a different argument to the same call, made by the same keys that write the price every day.

⚠️ **The limit on that measurement, stated: selector presence in bytecode does not distinguish implements-from-calls, and no disassembly was done.** The selectors are established to be present; whether that contract implements the logic or forwards it is not. **Do not read this as a full account of the write path.** The feed's stress behaviour is also worth knowing: a markdown larger than 10% submitted through the normal path **pauses the feed rather than publishing the lower price** — the one scenario in which the mark matters most is the one in which it stops updating. If you are using reUSD as leveraged collateral anywhere, this is the thing to underwrite.

**The audit position is current.** Re publishes a **Sherlock** collaborative audit (July 2026) against the live logic, a **Certora** formal verification (September 2025), and three **Hacken** engagements — NAV Oracle (April 2025), Core Contracts (December 2024) and DeFi Contracts (September 2024: 0 Critical, 0 High, 4 Medium, 7 Low, 18 Observations). The implementation is unchanged at `0xb5276c43…DEb4a21D4` and is shared with reUSDe, so the Sherlock engagement covers the code you are actually holding. **Still no publicly disclosed bug bounty** — a gap relative to mature DeFi protocols, and one the off-chain audit posture does not compensate for at the contract layer.

**4.0 is the sum of those:** a real but single-key timelock, an issuer-written mark with an in-place guard bypass outside that timelock, and a current audit stack on unchanged code.

## 6 · Issuer

Resilience BVI Ltd. is a named, licensed entity operating under a **BVI securities exemption** — which is also the reason **U.S. persons are excluded from primary redemption**, the single most consequential fact on this page for a U.S. holder. The control quality is genuine: Grant Thornton (Cayman) as annual auditor, The Network Firm on daily attestations, Fireblocks MPC for custody, and a Chainlink Proof-of-Funds feed. **But the model is trust-the-operator rather than trust-the-code**, and the issuer writes the NAV its own holders are marked against.

**Three disclosure gaps are worth carrying.** The **trust bank custodian is not publicly named**. The **reinsurance carrier and cedent counterparties are not disclosed** — industry-standard, and still a real gap, because a holder cannot know whose book they are backing. And ⚠️ **Re publishes two different junior-capital figures without saying which governs the attachment schedule** (see the tranche note below).

**14 months in market with no solvency incident, no exploit and no material discount-to-NAV event** is a genuine positive. ⚠️ **It also carries less information here than it would in most categories, because insurance losses are back-loaded** — they surface quarters or years after the policies are written. **5.5** reflects a credible, named, regulated operator in an offshore regime, with disclosure gaps that a holder cannot close from outside.

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
- **Sleeve composition.** ⚠️ **A rotation into T-Bills would be the single most meaningful de-risking event available to this asset**, because it is the only permitted holding that reduces Ethena concentration. It has not happened.
- **Ethena sUSDe basis health.** It reaches the yield, the reserve and the Mainnet exit asset at once.
- **Whether Re reconciles its two junior-capital figures**, and attests the junior layer. A Grant Thornton confirmation, a Chainlink proof-of-funds line item or a BVI filing would turn the $77M from an assertion into evidence. Until then, size to the smaller number. **This is the single most useful question to put to the issuer.**
- **Mezzanine capacity.** [reUSDe](/reports/reusde-re/) stands at **$19.85M**, or **9.14% of the senior tranche** (14,094,070 tokens at NAV 1.408519, measured 2026-08-27). It came through its first-ever redemption window in July 2026 in an orderly way. If it contracts relative to the underwriting book, reUSD's loss buffer thins.

## A note on the tranche structure

reUSD is the **senior** layer in a three-tier waterfall: Re Protocol's own equity absorbs losses first, then the [reUSDe mezzanine tranche](/reports/reusde-re/), and only then reUSD.

| Layer | Size | Source |
|---|---:|---|
| Junior — Re's own equity (first loss) | about **$73M** | live proxy from Re's reserve arithmetic, measured 2026-09-06; Re's product docs say about $77M "as of June 2026" |
| Mezzanine — [reUSDe](/reports/reusde-re/) (second loss) | **$19.85M** | 14,094,070 × NAV 1.408519, measured on-chain 2026-08-27 |
| Senior — reUSD (last loss) | **$251.8M** | measured 2026-09-06; the Ethereum leg alone read $217.2M on-chain at 2026-08-27 |

Taken at face value that is roughly **$96M sitting beneath the senior tranche**. But **Re publishes two different junior-capital numbers.** The product pages say $77M; a page walking through loss scenarios says "about $20M of Re capital and $15M of reUSDe." **These are not competing snapshots** — Re's own published history rules that out, since its non-tokenised capital has never been below $55.1M and no date in the record pairs those two figures. The reading that fits is that **the $77M is Re's balance-sheet depth, while about $20M of it is contractually subordinated ahead of reUSDe in the attachment schedule.** Balance-sheet depth and waterfall thickness are not the same number.

**Size to the smaller one.** Loss absorption follows what the reinsurance treaties subordinate, not what the balance sheet happens to hold. Equity above the attachment point may well absorb losses — Re has every commercial incentive to protect its tokens — but nothing published *obliges* it to before reUSDe is impaired.

In the unit reinsurance actually uses: a **combined ratio** is claims plus expenses as a percentage of premiums collected, so below 100% the book is profitable. Re's book is about **$358M of premium**, and premiums plus buffer absorb claims up to a **105%** combined ratio before any capital layer is touched. From there:

- **105–110%** — Re's own capital absorbs the loss
- **110–115%** — reUSDe, the mezzanine, absorbs it
- **above 115%** — reUSD, your layer, starts taking losses

For scale: Re's realised combined ratio is **92% to date**, it reports sub-100% in every underwriting year since inception, no individual treaty has ever finished above 99%, and its own November 2025 stress model used a 135% environment as the extreme case. The book is all frequency lines — small-business commercial, commercial auto, workers' comp, homeowners — with **no property-catastrophe exposure**, which is the line most likely to produce a sudden, correlated, book-wide loss.

**Two things this does not settle.** The $77M is a docs assertion, not an attested figure, and equity is exactly the layer that moves after a bad year. And the structure has never been stress-tested by a real underwriting loss. **A clean record on a book this young is encouraging, not conclusive.**

## A note on Re Points and the $RE token

Re Protocol runs a loyalty points program surfaced on the asset dashboard; current reUSD multipliers are Pendle YT 30x, Pendle LP 30x and Fluid 5x–20x. On **18 June 2026 the program monetised: Re launched $RE**, a governance token with a fixed 1B supply and no emissions, governing the protocol's policy, upgrade and transparency layer, with Season-1 points holders claiming at the token generation event. Season-1 accrual is therefore a realised, liquid asset rather than optionality. Season-2 terms are not guaranteed, so **treat ongoing points as marketing optionality, not yield** — net APY estimates should not include unrealised points absent a published valuation.

## Revision history

- **2026-09-06 — Backing 5.5 → 5.0. The first-loss attachment point is 7.94% of the senior tranche, against 11.06% on 08-11** — both readings on the same all-chain basis, and both with operands measured on their own date. Today's: senior **$251.8M**, junior proxy **$72.97M**. ⚠️ **Dilution by growth, not a worse book** — no claim event, combined ratio still 92%, and the junior layer is flat at about +0.4% while the senior grew 39.3% in 26 days. The finding is now **basis-independent**, falling below norm on the $20M waterfall basis and on the balance-sheet basis alike.
- **2026-09-06 — the on-chain sleeve is 99.05% sUSDe and holds no T-Bills.** Measured from Re's metrics endpoint: sUSDe 99.05%, reUSD/sUSDe LP 0.87%, USDe 0.06%, USDC 0.01%, T-Bills $0 — **99.98% Ethena-derived.** The T-Bill strategy is a permitted rotation that has not occurred, so the sleeve is one synthetic dollar rather than a diversified book.
- **2026-08-27 — senior and mezzanine re-measured.** The Ethereum leg reads **198,103,604 reUSD at NAV 1.096411, about $217.2M**; Re's `/tvl` reports **$233.7M all-chain**, issuer-reported. The mezzanine is **14,094,070 reUSDe at NAV 1.408519 = $19.85M, or 9.14% of the senior** — NAV corroborated by Re's endpoint and CoinGecko to 0.03%.
- **2026-08-24 — a first-loss attachment reading of 9.66%**, on a June junior figure over the **Ethereum leg alone**. ⚠️ **Not comparable to the all-chain readings above and deliberately left out of that series:** the Ethereum leg is 93.6% of the all-chain total today and was 97.1% on 08-11, so an Ethereum-only denominator **overstates** attachment, and by a widening margin. On a clean basis this point was already below 9.66%.
- **2026-08-18 — three disclosure gaps closed.** Re published the sizing of the layers beneath reUSD; the audit position on the live implementation became current (**Sherlock** July 2026 and **Certora** September 2025, on an unchanged implementation); and a **48-hour OpenZeppelin `TimelockController`** at `0x69dDEa33…7FCA93` was verified on-chain holding the admin role on both the reUSD and reUSDe proxies.
- **2026-07 — cross-chain distribution migrated** from a LayerZero OFT to **Chainlink CCIP as the exclusive bridge**. Supported chains unchanged.
- **2026-06-18 — $RE launched**, monetising the Season-1 points program.
