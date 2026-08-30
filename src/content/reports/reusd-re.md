---
asset: "reUSD (Re Protocol)"
slug: "reusd-re"
aliases: ["reUSD (Re Protocol)", "Resilience reUSD"]
chains: ["eth", "arb", "base", "avax"]
category: "vault-share"
assessment_type: "full"
date: "2026-05-19"
last_verified: "2026-08-25"
last_revised: "2026-08-27"
featured: false
# MOVED BACK TO STAGING 2026-08-31, deliberately — do not re-promote on a
# freshness or completeness sweep. ⚠️ The site owner's rule is that THIS REPORT
# AND ITS DASHBOARD PROMOTE TOGETHER, gated on a puppeteer verification pass.
# backing-monitor's page is staged and unfinished — `?asset=reusd-re` renders
# with axis 5 (Contract & Admin) UNRATED because no topology walk has been
# emitted, and no collateral ratio at all, because Re publishes combined
# reUSD + reUSDe reserves with no asset-attributed denominator, so no CR can
# honestly be derived. `?asset=reusde-re` is registered but still awaiting its
# producer feed. ⚠️ A published report pointing at an unfinished monitor is the
# pairing this rule exists to prevent.
# TO PROMOTE: both dashboards complete and verified IN A BROWSER, then flip
# both reports together. Checked before demoting: no `production: true` report
# links here, so nothing 404s on prod (only frax.md links in, and it is staged).
production: false
issuer: "Resilience BVI Ltd."
market_cap_approx: 181000000
volatility_score: 7.0
liquidity_score: 5.0
structural_score: 6.0
redemption_score: 4.5
overall_score: 6.0
live_dashboard_url: "https://app.re.xyz/reusd"
---

# reUSD (Re Protocol) — Retail Risk Report

**Moderate risk · 6.0/10**

> **2026-08-18 update — Overall 5.5 → 6.0, Structural 5.5 → 6.0.** Three open gaps have closed, and the upgrade is those three answers rather than a change in the underlying business. (1) **The layers beneath reUSD are now sized.** Re publishes them: the mezzanine reUSDe tranche at about $19M and Re's own junior capital at about $77M as of June 2026 — against a senior tranche of roughly $181M across chains. ⚠️ **On a current read the Ethereum leg alone is about $207.0M at 2026-08-23; see the subordination note below.** The "not publicly disclosed in granular form" caveat this report ran since May is retired, with an important asterisk covered in *A note on the tranche structure* below. (2) **The audit gap is closed.** Re now publishes a **Sherlock** collaborative audit (July 2026) and a **Certora** formal verification (Sept 2025) alongside the three Hacken engagements — the "current implementation is effectively unaudited" finding no longer stands. (3) **A real 48-hour timelock is verified on-chain**. Redemption stays 4.5 and Liquidity stays 5.0: nothing here changes the U.S.-person exit asymmetry or the sUSDe payout asset, which remain the binding constraints.

> **Issuer-published dashboard:** [app.re.xyz/reusd](https://app.re.xyz/reusd) — this is **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, yield/price/TVL history charts, capital tranching diagram, and links to Chainlink Proof of Reserves. It is the canonical source for live metrics on this asset.
>
> **Independent monitor (staged, unfinished):** [tidresearch backing monitor — reUSD](https://todayindefi.github.io/backing-monitor/?asset=reusd-re) — our own read of the same asset, on the six-axis frame, built to sit **beside** the issuer's page rather than replace it. ⚠️ **It is not finished and should not be cited.** Two gaps are deliberate and worth knowing before you open it: **axis 5 (Contract & Admin) renders UNRATED** because no topology walk has been emitted for this asset, and **there is no collateral ratio at all** — Re publishes combined reUSD + reUSDe reserves with **no asset-attributed denominator**, so no CR can honestly be derived for reUSD alone. ⚠️ **A blank there is an honest blank, not a missing number.**

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| about 6.1% APY | DEX-only (Curve, Fluid) | Tiered (50%+ instant buffer, queue beyond) | about 14 months | Ethereum, Arbitrum, Base, Avalanche |

## Summary

reUSD is the **senior tranche** of Re Protocol's reinsurance capital structure. Capital is deployed into fully-collateralized reinsurance contracts via licensed insurers, with funds held in a U.S. §114 Reinsurance Trust Account. The on-chain liquid sleeve runs an Ethena sUSDe basis trade or T-Bill strategy.

The senior tranche earns the risk-free rate plus a **2.5% (250 bps) spread** — currently around 6.1% APY. Below reUSD sits its junior sibling [reUSDe](/reports/reusde-re/) (Mezzanine) and below that Re Protocol's own equity capital. Losses are absorbed bottom-up, so reUSD only takes a hit if a catastrophic underwriting event exhausts both junior layers.

⚠️ **Updated 2026-08-27: the Ethereum leg alone is about $217.2M** — 198,103,604 reUSD at a NAV of 1.096411, both re-measured on-chain ([`0x5086bf35…0c72`](https://etherscan.io/address/0x5086bf358635b81d8c47c66d1c8b9e567db70c72)). Re's `/tvl` endpoint reports **$233.7M all-chain**, which is issuer-reported and labelled as such. **The 08-25 read of $207.0M across 188.8M tokens is superseded**, and the leg has kept growing. Roughly **$181M across all chains** with about $175M on Ethereum was the mid-August position; the Ethereum leg has grown roughly 17% past that figure. Deployments run on Ethereum, Arbitrum, Base, and Avalanche. NAV is about **$1.096**, up roughly 9% from the June 2025 inception, and cross-checks two ways: the on-chain Fluid oracle and CoinGecko agree to the third decimal. The senior tranche has been *growing* again since the mid-July dip to about $162M — the earlier shrinkage was rotation into the higher-yield reUSDe mezzanine tranche after the June 2026 $RE token launch, not distress.

One number worth treating carefully: Re's headline protocol TVL (about $591M) is **not** a capital base. It adds roughly $319M of *premium receivables* — the reinsurance book itself — on top of about $272M of actual capital. The capital figure is the one that matters for solvency, and it is what DefiLlama reports. Do not read the headline as investor capital standing behind the tranches.

The 6.0/10 score reflects a credibly-engineered RWA exposure offset by two structural realities that have not changed: (1) **U.S. persons cannot use primary redemption** under the BVI securities exemption, leaving DEX-only exit for U.S. holders, and (2) **Mainnet primary redemption pays out in sUSDe, not USDC** — so even non-U.S. Mainnet holders inherit Ethena impairment at exit. Across 14 months of trading, secondary price has tracked the smooth NAV curve closely — early-launch dips (Jul–Aug 2025) imply roughly 1–3% discount-to-NAV at the worst, with near-zero deviation from late 2025 onward. The structural exit-asymmetry that has produced -5% to -15% detachments on other tokenized RWAs has **not** materialized for reUSD to date, but the setup that produces it (gated cohort + DEX-only exit + about $28M/month of DEX depth against a $181M cap) is unchanged.

**Frame check:** reUSD is a vault share — its target price grows with NAV, not a $1 peg. The right metric for stress is *discount-to-NAV* `(NAV − market price) / NAV`, not absolute price vs $1.00. NAV today is about $1.094; the absolute-price ATL on the rendered chart (about $0.99, early launch) implies a 1–3% discount-to-NAV given accrued NAV at that time.

## What you actually earn

Senior-tranche reinsurance yield, calculated daily as a **deployment-weighted blend**:

- **Deployed capital** earns the risk-free rate + 2.5% spread
- **Undeployed capital** earns the trailing 7-day sUSDe basis trade + 2.5% spread

Each day at 00:00 UTC the protocol computes the current deployment mix and converts the blended rate into daily price appreciation (no rebasing). As of 2026-05-18 the dashboard shows ~6.1% APY. Effective rate moves with both the basis level and the deployment mix.

Compared to its sibling reUSDe (~12% APY, mezzanine tranche): reUSD earns roughly half the yield in exchange for the protection of having reUSDe absorb losses first.

## How exit works

reUSD has a deeper Ethena dependency than the yield headline suggests. Re Protocol's docs confirm that on Ethereum, when you redeem reUSD, the protocol pays you back in **sUSDe — not USD**. To get clean dollars you need a second step: wait out Ethena's cooldown (sUSDe → USDe → USDC — the cooldown is now dynamic, 1 to 7 days, and currently sits at 1 day) or swap on a DEX, where stress conditions can mean meaningful slippage. On Avalanche, redemptions pay USDC directly and are exempt from this. The practical consequence: a Mainnet holder of reUSD inherits Ethena impairment risk on the *exit asset itself*, not just on the on-chain reserve buffer. A sUSDe depeg would propagate to reUSD via three channels at once — the yield formula (which references sUSDe basis), the on-chain reserve buffer (which holds sUSDe basis-trade positions), and the redemption payout itself — so even non-U.S. holders going through primary redemption are not insulated from Ethena on Mainnet.

Two paths, very different profiles depending on whether you can KYC as a non-U.S. person:

**1. Primary redemption (non-U.S. KYC only):** Tiered — an actuarially determined instant buffer (typically 50%+ of deposits) settles immediately at NAV. Requests beyond the buffer queue and settle as trust assets mature. Re disclosed **throughput caps** in August 2026: instant redemptions are limited to 20% of available redemption capacity per day, with a per-wallet cap of 10% of that daily pool — so a single wallet can pull at most about 2% of the pool per day, and if the buffer falls below 1% of total supply the contract switches to quarterly-window-only mode. Against the roughly $44M of on-chain redemption liquidity observed in August, that is ample at retail size and a real constraint at institutional size. 0.18% subscription / 0.18% redemption fees; minimum deposit **250 USDC** per the current dashboard. **Payout asset depends on chain:** on Mainnet (Ethereum), the instant redemption tier pays out in **sUSDe**, the staked-USDe yield-bearing token issued by Ethena. On Avalanche, redemptions pay out in USDC. A Mainnet redeemer wanting a clean dollar at exit must follow up with a sUSDe → USDC unwrap (Ethena's dynamic 1-to-7-day cooldown queue, currently 1 day, or a DEX swap), and any sUSDe price weakness propagates directly to the dollar value of that exit.

**2. DEX secondary market (the only path for U.S. persons):** reUSD trades on Curve and Fluid pools across the four supported chains. There is **no CEX listing**: per CoinGecko Markets (May 2026), the four trading venues are Fluid REUSD/USDT (~63% of 24h DEX volume), Curve REUSD/sUSDe (~37%), Curve REUSD/USDC (<1%), and a stale Blackhole V2 pool. Aggregate DEX exit liquidity is **about $28M/month** (roughly $946K/24h across the four pools). The often-cited "$511M monthly volume" from RWA.xyz is *transfer* volume — it conflates mints, redemptions, wallet-to-wallet transfers, and DEX trades. Only the DEX share is realizable exit for a holder. Against a market cap of at least $205M (Ethereum alone, 2026-08-23), $28M/month of real DEX exit liquidity is functional for retail-size exits but thin for institutional-size.

**For U.S. holders specifically:** the primary path is unavailable. Treat reUSD as a hold-the-NAV-trajectory position rather than a redeem-at-par stablecoin.

**On the $0.8734 all-time-low aggregator print:** an aggregator text field shows an ATL of $0.8734, not visible on the rendered CoinGecko chart. This print is now **resolved as an early-launch (July 2025) thin-seed-pool artifact — not a sUSDe-redemption event.** The hypothesis that Mainnet's sUSDe redemption payout could have mechanically produced a ~$0.85 print is **disproven**: sUSDe has never sustained a sub-$1 price (its own all-time-low is about $1.01), and the $0.8734 reUSD print (dated July 17, 2025, roughly one month after inception) occurred when sUSDe's NAV was already ~$1.13+ — so a redeem-then-dump of a sUSDe payout could not have marked reUSD at $0.87. Across its full history reUSD's market price has tracked NAV to within a few basis points; the clean NAV-tracking record stands and no downward volatility revision fires.

## What the contracts are doing

- **Token contract:** ERC-1967 upgradeable proxy at `0x5086bf358635b81d8c47c66d1c8b9e567db70c72` (Ethereum). NAV is set via off-chain feed; this is not an ERC-4626 vault.
- **Custody:** Crypto leg on **Fireblocks MPC** multisig; off-chain leg in an independent U.S. trust bank's §114 Reinsurance Trust Account
- **Attestations:** Daily reserve attestations by The Network Firm; **Chainlink Proof of Funds** publishes 24/7 hashed trust balances + premium/claim flow on-chain
- **Annual audit:** Grant Thornton (Cayman) — Big-6 accounting firm
- **Upgrade authority:** Gated by AccessControl roles. **Verified on-chain (August 2026): the admin role on both the reUSD and reUSDe proxies is held by an OpenZeppelin `TimelockController` at [`0x69dDEa33…7FCA93`](https://etherscan.io/address/0x69dDEa332723cF5407151aAF68B9b076557FCA93) with a minimum delay of 172,800 seconds — a real 48-hour delay.** Read it accurately, though: a single Safe holds the proposer, executor, and canceller roles, so the 48 hours is a **public notice window, not an independent second approval** — nobody else has to agree, you just get two days' warning. Day-to-day operations run through four Fireblocks MPC controller wallets (3-of-5 for oracle config, redemptions config, and custodian manager; 5-of-8 for the access manager). **The NAV/share-price path is not covered by the timelock** — see the note on the oracle below
- **Cross-chain bridge:** As of July 2026, reUSD's cross-chain distribution migrated from a **LayerZero OFT to Chainlink CCIP as the exclusive bridge**. For a holder this modestly reduces bridge-configuration attack surface but concentrates cross-chain liveness on a single provider. Supported chains are unchanged (Ethereum, Arbitrum, Base, Avalanche), and tradable liquidity remains Ethereum-concentrated.

**The NAV feed is the weak point in that admin story.** The price used to mark reUSD — including as collateral on Fluid — traces back to a **single admin-written share price** on Re's `SharePriceCalculator`, not to an on-chain redemption calculation (reUSD is a plain ERC-20, not an ERC-4626 vault, so there is no `convertToAssets` to check it against). There is also a `forceNAVUpdate` path held by a 3-of-5 Safe, which sits **outside** the 48-hour timelock described above.

⚠️ **And the bypass is not a separate emergency lever sitting beside the writer — it is inside it.** The routine daily NAV write and the deviation-guard bypass are **the same undocumented 632-byte contract**, `0xe888DF32`. `forceNAVUpdate` skips the ±10% guard, and it lives in the thing performing the ordinary daily updates rather than in a distinct break-glass contract. **That changes what the guard is worth:** a bypass held elsewhere is a second decision by a second component, while a bypass in the same contract is a different argument to the same call, made by the same keys that write the price every day.

⚠️ **The limit, carried verbatim from the measurement: selector presence in bytecode does not distinguish implements-from-calls, and no disassembly was done.** So the selectors are established to be *present*; whether that contract implements the logic or forwards to something else is not. **Do not read this as a full account of the write path.** And the feed's own behaviour under stress is worth knowing: a markdown larger than 10% submitted through the normal path *pauses* the feed rather than publishing the lower price. In other words, the single scenario in which the mark matters most is the one in which it stops updating. If you are using reUSD as leveraged collateral anywhere, this — not the tranche math — is the thing to underwrite.

The thing to internalize: **the smart contract doesn't hold the reinsurance.** Reinsurance contracts and trust-account assets are off-chain instruments held by a U.S. trust bank for the BVI issuer. On-chain reads tell you the token supply and the Chainlink-attested NAV — the underlying credit exposure is a TradFi reinsurance program.

## Audits & security

**The audit position is current.** Re publishes an engagement stack covering the live implementation:

- **Sherlock collaborative audit, July 2026** — the current engagement against the live logic
- **Certora formal verification, September 2025** — previously named in Re's docs but undated
- **Hacken, three engagements:** NAV Oracle (Apr 2025), Core Contracts (Dec 2024), DeFi Contracts (Sept 2024 — 0 Critical, 0 High, 4 Medium, 7 Low, 18 Observations)

The implementation itself is unchanged at `0xb5276c43…DEb4a21D4` (verified on-chain August 2026, and shared by reUSD and reUSDe), so the July 2026 Sherlock engagement covers the code you are actually holding. Together with the verified 48-hour timelock, this is the bulk of the August 2026 upgrade from 5.5 to 6.0.

- **Still no bug bounty disclosed publicly** — a gap relative to mature DeFi protocols. The off-chain auditing posture (Grant Thornton annual + Network Firm daily) compensates partially for the asset class, but not for the contract layer.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 7.0 | NAV path smooth ($1.00 → about $1.094 over 14 months, consistent with the target rate). Vault-share peg (read as discount-to-NAV, not absolute price vs $1): early-launch dips imply 1–3% discount-to-NAV at the worst, near-zero deviation from late 2025 onward. Capped below "very tight" because (a) the 14-month history is short, (b) insurance loss patterns are back-loaded, and (c) the structural setup that could produce a deeper detachment remains in place. |
| Liquidity | 5.0 | DEX-only (no CEX listing), Ethereum-concentrated — Fluid + Curve carry effectively all meaningful depth across the four supported chains. Real DEX exit liquidity is about $28M/month against a market cap of at least $205M (Ethereum alone, 2026-08-23; the $181M all-chain figure above is superseded) — functional for retail-size, thin for institutional-size. Primary redemption at NAV works for non-U.S. holders (moots the question for that cohort). |
| Structural | 6.0 | **Raised from 5.5 (August 2026).** Two of the three findings that set 5.5 are resolved: the audit gap is closed (Sherlock July 2026 + Certora Sept 2025 on an unchanged implementation), and a **48-hour OpenZeppelin timelock is verified on-chain**. What keeps it from rising further: the timelock is a notice window with a single Safe as sole proposer rather than a second approval; the NAV/share-price path sits outside it and is a single admin-written figure; and the off-chain dependency stack (trust bank, insurance carriers, Network Firm, Chainlink, Fireblocks, Grant Thornton) is unchanged. |
| Redemption | 4.5 | **Binding constraint for U.S. holders.** Non-U.S. persons get tiered NAV redemption (50%+ instant buffer), but on Mainnet the payout asset is **sUSDe, not USD** — a clean-dollar exit requires a second-leg sUSDe → USDC swap. U.S. persons get DEX exit only. Only Avalanche primary-redemption holders get a clean USDC payout. The §II.4 asymmetry remains structural and unmitigated; has not produced an observable detachment in 14 months of trading. |
| **Overall** | **6.0** | **Raised from 5.5 (August 2026)** on evidence, not on a changed view of the business: the tranche layers beneath reUSD are now disclosed and sized, the audit gap on the live implementation is closed, and a 48-hour on-chain timelock is verified. Still moderate risk, and still capped by the two caveats that did *not* move — U.S.-cohort exit asymmetry and the Mainnet sUSDe payout asset — plus a NAV feed that is a single admin-written price outside the timelock. |

## Who it's for

- **Non-U.S. yield-seekers** comfortable with regulated RWA exposure who want tokenized senior reinsurance with on-chain composability. Treat as a 5-10% portfolio sleeve, not a stablecoin substitute.
- DeFi users who specifically want **multi-chain availability** for an RWA position and are comfortable with DEX-only secondary exit (no CEX listing).

## Who should avoid

- **U.S. persons looking for a redeem-at-par stablecoin substitute.** Primary redemption is unavailable; exit is DEX-only. The structural exit-asymmetry that has produced -5% to -15% detachments on other tokenized RWAs has not yet materialized for reUSD, but the setup is unchanged and 14 months without a real stress event is not the same as resilience to one.
- **Anyone leveraging on a venue using a market-priced oracle.** A secondary-market detachment would trigger liquidations even if Re Protocol's NAV is unimpaired. NAV-priced oracle is the only defensible configuration.
- Anyone who needs a fully on-chain trustless instrument. reUSD has substantial off-chain dependencies (U.S. trust bank, reinsurance carriers, Chainlink feed liveness, Fireblocks operational continuity).

## What to watch

- **[Re Protocol's issuer dashboard](https://app.re.xyz/reusd)** is the primary source. Current APY, TVL, supply, and historical yield/price/TVL charts are all updated in real time by the issuer. Chainlink Proof of Reserves feed is linked from there.
- **NAV vs market price spread.** Target <50bps in calm conditions; >200bps is a stress signal worth attention.
- **Ethena sUSDe basis trade health.** reUSD's on-chain sleeve depends on this; an Ethena depeg or basis collapse hits the asset side directly.
⚠️ **The senior tranche has grown past the figure this report publishes, and the subordination has thinned as a result.** Read on 2026-08-23, the **Ethereum leg alone** is 188,824,946 reUSD at a NAV of 1.096411 — about **$207.0M** — against the **$181M all-chain** figure in the update above. All-chain is therefore higher still; this is a floor, not a total.

**Held against the junior sizes Re publishes, that moves the attachment point:**

| junior basis | vs $181M published | vs $207.0M (Ethereum alone) |
|---|---:|---:|
| $77M — product pages | 42.5% | **37.19%** |
| $20M — implied by the loss-scenario page | 11.0% | ⚠️ **9.66%** |

**On the sizing basis this report itself recommends — the smaller number — junior capital now sits below 10% of the senior tranche**, the same threshold the page invokes elsewhere as the institutional norm.

⚠️ **Read it as capacity outpacing subordination, not as deterioration.** No loss occurred and the junior layer did not shrink. **Deposits into the senior tranche grew — roughly 13% — and the ratio thinned because the denominator rose.** Re raising more senior money than junior is the ordinary consequence of selling the senior product well, and growth reads as demand and health, which is exactly why this would go unnoticed. It is the same arithmetic that appears in [Figure](/reports/figure/), where a growing denominator made a delinquency rate *improve*, and in [wYLDS](/reports/wylds/), where a shrinking one made a coverage ratio improve. **When a ratio moves, check which side moved.**

⚠️ **And treat the 9.66% as indicative rather than measured, for a reason worth stating.** The junior figures are Re's, **as of June 2026**; the senior figure is an on-chain read from **2026-08-23**. That ratio therefore divides a two-month-old numerator by a current denominator — the same basis-mixing this coverage has been correcting elsewhere. Re's junior capital has not been re-measured here and there is no on-chain handle on it. **The direction is solid and the threshold crossing is not precisely dated.**

**This sharpens the question below rather than replacing it.** At $20M it is now a sub-10% first-loss layer beneath a senior tranche of at least $205M — which makes reconciling the two junior figures more consequential, not less.

**No score changes**, and the reason is specific: this report's 2026-08-18 upgrade was explicitly for **disclosure** — "the upgrade is those three answers, not a change in the underlying business" — and that basis is untouched, since Re still publishes the sizing. Checking the axis rationales directly: **Structural 6.0 rests on the closed audit gap, the verified 48-hour timelock, the NAV admin write path and the off-chain dependency stack — it does not cite depth of subordination at all**, and the only mention of tranches in any rationale is Overall's "disclosed and sized", which is the fact of disclosure rather than the ratio. **What would change that, so the hold is checkable:** junior-to-senior below 9% on the scenario basis, a confirmed contraction in the mezzanine layer, or Re confirming that $20M rather than $77M governs the attachment schedule.

⚠️ **Measured 2026-08-27: 14,094,070 reUSDe at a NAV of 1.408519 = $19.85M** — and the NAV is corroborated two independent ways, Re's `/tvl` implying 1.408519 against measured supply and CoinGecko printing $1.41, 0.03% apart. **That is 9.14% of the senior tranche.** See the [reUSDe report](/reports/reusde-re/) for the full assessment.

- **Whether Re reconciles its two junior-capital figures.** The product pages say about $77M; the loss-scenario page implies about $20M is actually subordinated. Until Re states which number governs the attachment schedule — ideally attested rather than asserted — size to the smaller one. This is the single most useful question to put to the issuer.
- **Attestation of the junior layer.** The $77M is a docs figure dated June 2026. Grant Thornton confirmation, a Chainlink proof-of-funds line item, or a BVI filing would turn it from an assertion into evidence.
- **reUSDe (sibling) capacity.** reUSDe is the mezzanine layer that protects reUSD from underwriting losses. If it contracts significantly relative to total underwriting, reUSD's loss buffer thins. reUSDe came through its **first-ever redemption window (July 9–22, 2026)** without incident — supply fell from about 14.4M to 13.57M while NAV rose from $1.33 to $1.40, so the mezzanine's *value* held roughly flat at about $19M as the senior tranche grew. That is an orderly first test of the second-loss layer's redemption machinery. Keep watching the mezzanine-to-senior ratio, currently about 10.8% and drifting slowly down.

## A note on the tranche structure

reUSD is the **senior** layer in a three-tier waterfall: Re Protocol's own equity (Re calls this "junior tranche capital") absorbs losses first, then the [reUSDe mezzanine tranche](/reports/reusde-re/), and only then reUSD. How much protection that actually buys depends on how big those lower layers are relative to the insurance book — the question this report has flagged since May as the key open item, on the grounds that Re did not disclose it granularly.

**Re now discloses it.** As of August 2026:

| Layer | Size | Source |
|---|---:|---|
| Junior — Re's own equity (first loss) | about **$77M** | Re's product docs, "as of June 2026" |
| Mezzanine — [reUSDe](/reports/reusde-re/) (second loss) | **$19.85M** | 14,094,070 × NAV 1.408519, both measured on-chain 2026-08-27 |
| Senior — reUSD (last loss) | **at least $207.0M** (Ethereum alone, 2026-08-23; was about $181M all-chain per Re's TVL API) | on-chain read; all-chain is higher |

Taken at face value that is roughly **$96M sitting beneath the senior tranche, or a little over half of it** — reUSD is not thinly protected. But there is a complication you should know about, because it changes how much of that cushion you can actually count on.

**Re publishes two different junior-capital numbers.** The product pages say $77M. A different page, walking through loss scenarios, says "about $20M of Re capital and $15M of reUSDe." These are not competing snapshots of the same thing — Re's own published history rules that out, since its non-tokenized capital has never been near $20M and no date in the record pairs those two figures. The reading that fits is that **the $77M is Re's balance-sheet depth, while only about $20M of it is contractually subordinated ahead of reUSDe in the attachment schedule.** Balance-sheet depth and waterfall thickness are not the same number, and Re publishes both without distinguishing them.

**Size to the smaller number.** Loss absorption follows what the reinsurance treaties subordinate, not what the balance sheet happens to hold. Equity above the attachment point may well absorb losses — Re has every commercial incentive to protect its tokens — but nothing published *obliges* it to before reUSDe is impaired.

Here is what that means in the unit reinsurance actually uses. A **combined ratio** is claims plus expenses as a percentage of premiums collected: below 100% the book is profitable, above 100% it is losing money. Re's book is about **$358M of premium**, and premiums plus buffer absorb claims up to a **105%** combined ratio before any capital layer is touched. From there:

- **105–110%** — Re's own capital absorbs the loss
- **110–115%** — reUSDe (the mezzanine) absorbs it
- **above 115%** — reUSD, your layer, starts taking losses

For context on how far away that is: Re's realized combined ratio is **92% to date**, it reports sub-100% in every underwriting year since inception, and no individual treaty has ever finished above 99%. Its own November 2025 stress model used a 135% environment as the extreme case. The book is all frequency lines — small-business commercial, commercial auto, workers' comp, homeowners — with **no property-catastrophe exposure**, which is the line most likely to produce a sudden, correlated, book-wide loss.

**Two things this still doesn't settle.** The $77M figure is a docs assertion dated June 2026, not an attested one — it has not been verified against Grant Thornton, the Chainlink proof-of-funds feed, or BVI filings, and equity is exactly the layer that moves after a bad year. And Re's structure has still never been stress-tested by a real underwriting loss; the protocol launched in June 2025, and insurance losses are back-loaded, surfacing quarters or years after the policies are written. A clean record on a book this young is encouraging, not conclusive.

## A note on Re Points and the $RE token

Re Protocol runs a loyalty points program prominently surfaced on the asset dashboard. Current multipliers for reUSD strategies: Pendle YT 30x, Pendle LP 30x, Fluid 5x–20x. On **June 18, 2026 the program monetized: Re Protocol launched $RE**, a governance token (fixed 1B supply, no emissions) that governs the protocol's policy, upgrade, and transparency layer, with Season-1 points holders claiming at the token generation event. That resolves the earlier "points have no token" caveat — Season-1 accrual is now a realized, liquid asset rather than pure optionality. Forward multipliers (Season-2 terms and continued value) are still not guaranteed, so **treat ongoing points as marketing optionality, not yield** — net APY estimates should not include unrealized points absent a published valuation.

## Revision history

- **2026-08-27 — senior and mezzanine re-measured; no score change.** The Ethereum leg reads **198,103,604 reUSD at NAV 1.096411, about $217.2M**; Re's `/tvl` reports **$233.7M all-chain**, issuer-reported. The mezzanine is **14,094,070 reUSDe at NAV 1.408519 = $19.85M, or 9.14% of the senior** — NAV corroborated by Re's endpoint and CoinGecko to 0.03%.
- **2026-08-23 — subordination has thinned on both sides.**
- **2026-08-18 — Overall 5.5 → 6.0, Structural 5.5 → 6.0.** Three gaps closed: the layers beneath reUSD are sized and published; the audit position is current (Sherlock July 2026, Certora September 2025, on an unchanged implementation); and a **48-hour OpenZeppelin `TimelockController`** at `0x69dDEa33…7FCA93` holds the admin role on both the reUSD and reUSDe proxies. **What keeps it from rising further:** the timelock is a notice window with a single Safe as sole proposer, and the NAV/share-price path sits outside it as a single admin-written figure.
