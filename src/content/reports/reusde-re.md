---
asset: "reUSDe (Re Protocol)"
slug: "reusde-re"
aliases: ["reUSDe (Re Protocol)", "Resilience reUSDe", "REUSDE"]
chains: ["eth"]
category: "vault-share"
assessment_type: "full"
date: "2026-05-18"
last_verified: "2026-05-18"
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
market_cap_approx: 19852000
volatility_score: 3.5
liquidity_score: 2.5
structural_score: 4.5
redemption_score: 2.5
overall_score: 3.5
live_dashboard_url: "https://app.re.xyz/reusde"
---

# reUSDe (Re Protocol) — Retail Risk Report

**Significant risk · 3.5/10**

> ⚠️ **What is current and what is not, because this page carries two dates.** Everything numeric was measured on **2026-08-27**: supply, NAV, TVL, chain footprint, Curve depth and volume, the exit ladder, price-versus-NAV, APY, holder count, and the July redemption window. **The structural material — contract architecture, audit posture, custody, and the redemption mechanics themselves — still dates from 2026-05-18 and was not re-read.** That is why the card shows *revised 2026-08-27, verified through 2026-05-18*: **the figures are today's; the description of how the thing works is May's.**

> **Issuer-published dashboard:** [app.re.xyz/reusde](https://app.re.xyz/reusde) — this is **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, historical charts, capital tranching diagram, and Chainlink Proof of Reserves links. It is the canonical source for live metrics on this asset.
>
> **Independent monitor (staged, no data yet):** [tidresearch backing monitor — reUSDe](https://todayindefi.github.io/backing-monitor/?asset=reusde-re) — the page is registered and reachable but is **awaiting its producer feed**, so it currently renders a staged placeholder rather than figures. ⚠️ **There is nothing to read there yet.** It is linked because this report and that monitor promote together, and the link is the thing that makes the pairing checkable while both are unfinished. The sibling [reUSD monitor](https://todayindefi.github.io/backing-monitor/?asset=reusd-re) does carry data, with its own stated gaps.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| 12.27% APY (Re's own simple annualisation, 7d to 2026-08-27) | Curve REUSDE/sUSDe pool | Quarterly windows (72h), 40-day min hold, pro-rata | about 17 months (contract created 2025-03-31) | Ethereum (measured: 12 chains probed, code on Ethereum only) |

## Summary

reUSDe is the **mezzanine tranche** of Re Protocol's reinsurance capital structure — the junior sibling of [reUSD](/reports/reusd-re/). It earns a higher spread (8.5% over the risk-free rate, currently ~12% APY) in exchange for absorbing reinsurance losses **before reUSD does**.

In the three-tier waterfall: Re Protocol's own equity is the first loss, **reUSDe is the second loss**, and reUSD is protected until reUSDe is fully depleted. The structural premise is that reUSDe holders are paid to be contingent capital in a real insurance program.

**Sized as at 2026-08-27, both legs measured on-chain:** reUSDe is **9.14% of the senior tranche** — senior reUSD stands at **$217.2M on Ethereum** (198,103,604 tokens at NAV 1.096411, contract [`0x5086bf35…0c72`](https://etherscan.io/address/0x5086bf358635b81d8c47c66d1c8b9e567db70c72)). Re's `/tvl` endpoint reports **$233.7M all-chain**, which is **issuer-reported** and labelled as such. **The ordering is what a holder should carry:** Re Protocol's equity absorbs losses first, this tranche second, and the senior is protected until this one is exhausted. **Beneath both sits about $96.00M of subordinated capital** — and an apparent $77M-versus-$20M contradiction in that layer is resolved: those are **two different quantities, not competing snapshots**, and the non-tokenised capital has never been below **$55.1M**, so the conservative reading is the correct one. ⚠️ **An earlier reading of Re's disclosures appeared to put the junior layer at either about $77M or about $20M, and that looked like competing snapshots. It was not — they are different quantities**, resolved against Re's own TVL history: **the non-tokenised capital has never been below $55.1M.** **The conservative reading is the correct one, and it is what the loss-buffer story rests on** — so the figures above are the ones to carry, not the $20M reading.

Re-measured on-chain **2026-08-27**: reUSDe has **$19.85M TVL** across **14,094,070 tokens** at a NAV of **1.408519**, on Ethereum only (no multi-chain deployment, no CEX listing) — contract [`0xddc0f880…cc5a`](https://etherscan.io/address/0xddc0f880ff6e4e22e4b74632fbb43ce4df6ccc5a). **The NAV is not issuer-reported:** Re's own `/tvl` implies 1.408519 against measured supply and **CoinGecko independently prints $1.41**, 0.03% apart. ⚠️ **This report has carried a "grown from $1.00 at inception, about 41% lifetime" framing, and it is not supported by the issuer's own series.** Re's `/price` history begins **2025-04-01 at 1.165906**, one day after the contract was created — **so it is not indexed from par, and no lifetime appreciation figure can be derived from it.** Either the token did not start at $1.00 or the series measures something other than par-relative NAV. **The claim is withdrawn rather than restated**; what is measured is the current NAV of **1.408519** and the accrual mechanism below.

⚠️ **The headline moved little since the May read and the tranche did grow.** In May this was $19.11M across 14.24M tokens at about $1.34; it is now $19.85M across 14,094,070 at 1.408519. **Supply is slightly below the May count and above every reading taken in between, so the tranche has been growing recently rather than shrinking.** **An unchanged headline is still not evidence of an unchanged instrument** — the dollar total moved 3.9% while NAV moved about 5%, so the two are not tracking each other, and supply is doing the work in between.

The 3.5/10 score is **1.5 points below sibling reUSD** for structural reasons that are not preferences:

1. **Junior position** — reUSDe absorbs losses before reUSD
2. **Quarterly-gated redemption** — request windows open only in the first 72 hours of each fiscal quarter, with a 40-day minimum hold before any redemption eligibility, and pro-rata gating if requests exceed available surplus
3. **Thin secondary liquidity** — one Curve pool, no CEX listing, and a small holder base. Worst-case time-to-exit can extend across multiple quarters under stress. ⚠️ **The depth and holder figures behind this point are from 2026-05-18 and were not re-measured in the 08-24 pass — see the liquidity section, where they are labelled.**

This is not a yield-bump variant of reUSD. It is a different risk-class instrument — closer to a tokenized private credit position than a yield-bearing stable.

## What you actually earn

Mezzanine-tranche reinsurance yield, calculated daily as a **deployment-weighted blend**:

- **Deployed capital** earns reinsurance program premiums + an 8.5% fixed spread
- **Undeployed capital** earns the sUSDe rate + the same 8.5% spread

Per Re's published yield model: "reUSDe accrues daily from blended deployed and undeployed capital returns, plus a fixed spread." **Measured 2026-08-27, Re reports 12.27% for reUSDe** against a NAV move of 1.405028 → 1.408333 over seven days. ⚠️ **Quote that number with its convention, because the convention changes the sentence.** Re annualises **simple** (× 365/7); their arithmetic reproduces to within 0.005pp on that basis. **Compounding the same seven days gives 13.03% instead.** Against the 12% contractual target that is **+0.27pp on Re's basis and +1.03pp on a compounded one** — **"slightly above target" and "comfortably above target", from identical data.** Neither is wrong; only one is Re's. ⚠️ **It is also a seven-day window annualised, so it amplifies whatever that week did.** A longer realized series could not be derived: price history over 30/90/180/365 days returns 67% / 26% / 70% / 14%, which is **noise on a token trading $7K a day, not yield.** **The 7-day figure is published with its window, and no long-run realized yield is claimed.**

**The cleanest risk statement here is the spread between the tranches, not either number alone: 12.27% mezzanine against 6.42% senior is 5.85pp** — that gap is the compensation for standing in front of the loss.

For context on the older framing: Re publishes a historical realized band of 16–25% — yield can run materially higher than current spot when reinsurance deployment is well-priced. Yield accrues via NAV growth; no rebasing.

**Important:** the 12% is contractual / target yield. Realized yield CAN go negative if a reinsurance loss event exhausts Re Protocol's equity buffer and hits the mezzanine. That has not happened yet — but the design says it can, and 11 months in market is not long enough to draw conclusions either way about underwriting outcomes.

## How exit works

The redemption profile is the binding constraint on the assessment:

**1. Primary redemption (non-U.S. KYC only):**
- **Request window:** First **72 hours** of each fiscal quarter
- **Minimum hold:** **40 days** from mint before any redemption eligibility
- **Gate:** End-of-quarter actuarial review + regulator approval before settlement
- **Settlement:** Up to 5 business days post-approval, **pro-rata** if requests exceed surplus
- **Rollover:** Unfilled balance queues for the next quarter
- **Worst case:** A non-U.S. holder who narrowly misses a quarter-open window AND faces a pro-rata gate could wait multiple quarters — potentially 6–9 months — for full capital return

⚠️ **Quarterly windows have run since this report was written, and nothing about their outcome is measurable from supply.** Measured 2026-08-27, supply stands at **14,094,070 — above every intermediate reading**, so the tranche has grown on net. ⚠️ **Supply cannot answer this, in either direction — mints and redemptions both move it.** But the redemption contract can, and it has been read.

⚠️ **The July window was capped, and it filled its cap exactly.** The `WindowRedemption` contract [`0xD2e077d9…A389A`](https://etherscan.io/address/0xD2e077d945Ec77B45Fbe4622E01F4C79e4bA389A) burned **1,077,727 reUSDe across 72 claims** between 2026-07-23 and 2026-08-05. At the window-close NAV of $1.391887 that is **$1,500,074 against Re's announced $1.5M pool — the ceiling to within 0.005%.**

**Landing exactly on the cap means the window was rationed: requests met or exceeded the pool.** ⚠️ **The precise fill percentage is still not recoverable** — unfilled reUSDe is returned in the same transaction, so burns cannot separate requested from filled. **"Capped and rationed" is the finding; a percentage would be an invention.** What it does answer is whether the first window settled in an orderly way: **it opened, it paid, and it hit its ceiling.**

⚠️ **The number a holder should carry from this is capacity, not fill rate: $1.5M against a $19.85M tranche is about 7.6% per quarter.** Held flat, **fully exiting this tranche through the primary channel would take about 3.3 years** — and the cap is set by surplus released under regulatory approval, so **it does not scale with demand.** Re's documentation anticipates "expected 100% fill" in a normal year; **the first window, under benign conditions, cleared under 8% of the tranche.**

**2. Secondary market (the only path for U.S. persons, and thin for everyone):**
- Single Curve REUSDE/sUSDe pool on Ethereum
- **Curve REUSDE/sUSDe twocrypto pool** [`0x43b98EEA…3734`](https://etherscan.io/address/0x43b98EEA5C689F0036918f590a4B55f22D853734) — **TVL $559,165**, measured 2026-08-27
- ⚠️ **24h volume $7,209**, against roughly $59K/day in May — **down about 88%.**
- The pool holds reUSDe **$197,234** against sUSDe **$362,438**. ⚠️ **Do not read the 35/65 split as imbalance — this is a cross-currency twocrypto pool and the ratio is the FX rate, not skew.**
- **The venue is 2.82% of the tranche, and the reUSDe side alone is 0.99% of it.**
- **No CEX listing. Ethereum only — and that is now measured rather than asserted:** twelve chains were probed and code exists on Ethereum alone.
- **Holder count: roughly 520**, measured 2026-08-27 — Ethplorer reports 517 and Blockscout 519, both against a `totalSupply` matching the on-chain read exactly. ⚠️ **Quoted as a range, not a unit: indexers count holders differently** (zero balances, contracts, LP positions), which is why two were used. **The 327 this report carried from May is superseded — the holder base has grown by roughly 60%.**

⚠️ **Read those two figures as dated, not current.** The 2026-08-24 pass re-measured supply, NAV and the tranche ratios and **did not reach Curve depth, volume or holder count.** They are published here because a stale liquidity picture on an asset this thin is still more useful to a reader than silence — **but a figure that has not been re-checked is not evidence about today**, and the Liquidity axis below rests on them.

⚠️ **Measured exit cost is much better than the pool alone implies, and the two facts pull opposite ways.** Routed through an aggregator to USDC on 2026-08-27: **$10K costs −0.161%, $50K −0.482%, $100K −0.677%** — because the route spreads across Uniswap v4, Curve twocrypto-ng, Balancer v3 and Ekubo rather than draining the one Curve pool. **A $100K exit is now roughly fourteen days of that pool's volume, and still clears under 0.7%.** ⚠️ **And the route contains no ERC-4626 leg — it does not pass through a gated instrument**, which is the failure mode that makes some wrappers unexitable in stress. **Secondary price sits at $1.40907 against NAV 1.408519 — a premium of 0.04%, essentially at NAV.** **Pricing has shown wide variance not tied to NAV.** Over the twelve months to 2026-08-27 the daily series bottoms at **$1.049009 (2026-06-26)**, against a reported all-time high of **$1.64 (2025-08-23)** — a peak-to-trough spread of about **56%**. Current price **$1.41**. ⚠️ **Two provenance notes, because this passage has been wrong once already.** The **$1.64 high is aggregator-reported and unverified**: the daily series available to us begins 2025-08-28, five days after that date, so it cannot see the print — the highest value the series itself contains is **$1.411855**. **The 56% spread inherits that caveat.** ⚠️ **And the low has NOT gone below par: there are zero daily closes under $1.00 in the full year.** ⚠️ **An aggregator's `atl` text field reports $0.968123, which its own daily chart contradicts — a check that stops at that field will conclude the token has broken par.** This is reflexive thin-market pricing, both directions. Forward, the same illiquidity that drove that variance is what defines stress-exit pricing.

## What the contracts are doing

- **Token contract:** ERC-1967 upgradeable proxy at `0xdDC0f880ff6e4e22E4B74632fBb43Ce4DF6cCC5a` (Ethereum only)
- **Same implementation logic as reUSD** (`0xb5276c43...DEb4a21D4`) — shared codebase, shared risk surface
- **Custody:** Fireblocks MPC multisig + U.S. trust bank §114 Reinsurance Trust Account (same stack as reUSD)
- **Attestations:** Daily off-chain reserve attestations by The Network Firm; **Chainlink Proof of Funds** feed published 24/7
- **Annual audit:** Grant Thornton (Cayman) — same as reUSD

## Audits & security

- **Hacken (Aug 2024)** is the only published audit, covering an earlier version of the shared implementation. ~21 months stale on current logic.
- **No reUSDe-specific audit** has been published. reUSDe and reUSD share implementation logic but differ materially in redemption mechanics and tranche accounting, so a shared audit may not cover the divergent reUSDe-specific code paths.
- **No Etherscan-submitted audit** for the current implementation
- **Upgrade authority** gated by AccessControl roles managed through Fireblocks MPC multisig; on-chain timelock not visible on the proxy interface

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 3.5 | NAV is structurally exposed to underwriting losses (drawdowns are designed, not anomalous). Peak-to-trough spread about **56%** — high $1.64 (**aggregator-reported, unverified**) against a chart-confirmed low of **$1.049009** — on thin volume. **No daily close has gone below par in the past year.** Held at 3.5. | |
| Liquidity | 2.5 | One Curve pool ($559K TVL, **24h volume $7,209 — down about 88%**), single chain (measured), no CEX listing. Primary redemption is quarterly-gated with a 40-day minimum hold. ⚠️ **Held at 2.5, and the two measurements pull opposite ways:** venue volume collapsed, but a measured $100K exit routes across four venues for **−0.677%** and touches no ERC-4626 gate. **A thin pool is not the same as a closed exit**, and at retail size the exit is better than the pool implies while the venue is worse. Holder count remains unmeasured. |
| Structural | 4.5 | Same ERC-1967 proxy + Fireblocks MPC + stale Hacken audit as reUSD. Junior-tranche position adds asymmetric risk. No reUSDe-specific audit despite divergent code paths. |
| Redemption | 2.5 | **Binding constraint.** Measured: the July window was **capped and rationed**, filling its $1.5M ceiling to within 0.005% — about **7.6% of the tranche per quarter**, roughly **3.3 years** for a full exit at that rate, and the cap does not scale with demand. Quarterly windows + 40-day minimum hold + pro-rata gating + U.S.-person exclusion + thin secondary venue. Worst-case time-to-full-exit measured in quarters. |
| **Overall** | **3.5** | Significant risk — credibly engineered for the asset class, but a tokenized mezzanine reinsurance tranche with quarterly liquidity is structurally different from a yield-bearing stablecoin. |

## Who it's for

- **Non-U.S. yield-seekers** comfortable with multi-quarter exit horizons who treat this as an illiquid private-credit allocation, not a cash equivalent. Size as 2–5% portfolio sleeve maximum.
- Investors specifically seeking **reinsurance underwriting yield** as portfolio diversification (low correlation to crypto / equity drawdowns, high correlation to insurance loss events).

## Who should avoid

- **U.S. persons at any meaningful size.** No primary redemption + thin secondary pool = no realistic exit at NAV. Exploratory amounts only.
- **Anyone using this as collateral in a leveraged position.** A $50K secondary sell can move the Curve pool meaningfully; market-priced oracles are structurally unsafe for this asset.
- **Anyone needing predictable quarterly liquidity.** Pro-rata gating + 40-day minimum hold + rollover means worst-case scenarios involve multiple quarters of waiting.
- **Anyone who wants the senior reinsurance exposure with better liquidity.** [reUSD](/reports/reusd-re/) (the senior sibling) is the appropriate product if you want Re Protocol exposure without the mezzanine constraints.

## What to watch

- **[Re Protocol's issuer dashboard](https://app.re.xyz/reusde)** for current APY, TVL, supply. Yield chart is essentially flat at the contractual rate (12% as of 2026-05-18); meaningful deviations would signal an underwriting event.
- **NAV trajectory.** A real claim event will show here first. Sudden NAV drawdown is the bottom-up signal that the equity buffer has been exhausted and the mezzanine is absorbing losses.
- **Curve REUSDE/sUSDe pool depth.** ~$59K daily is thin; pool drainage or sustained imbalance is the leading signal that secondary exit is deteriorating.
- **Primary redemption fill rates** after each quarterly window. Pro-rata fills <100% indicate stress on the surplus capital pool.
- **Carrier counterparty disclosures.** Specific reinsurance carriers are not publicly named. Any disclosure (or independent identification) is a material risk-information upgrade.

## A note on the tranche structure

reUSDe sits between Re Protocol's own equity (which Re labels "junior tranche capital", first loss) and reUSD (senior, last loss). The structure means:
- "Normal" underwriting losses are absorbed by Re Protocol equity — reUSDe is untouched
- "Moderate" losses hit reUSDe — NAV drops, reUSD is still protected
- "Catastrophic" losses exhausting reUSDe then hit reUSD

The relative sizing of equity, reUSDe, and reUSD vs the underlying reinsurance book is the key solvency question, and it is **not publicly disclosed in granular form**. The mezzanine premium exists because reUSDe holders accept this layered exposure with imperfect visibility into the layer thicknesses.

If you want senior protection at lower yield: see [reUSD](/reports/reusd-re/).

## A note on Re Points

Re Protocol runs a loyalty points program surfaced on the reUSDe asset dashboard. Current multipliers for reUSDe strategies: Pendle YT 30x, Pendle LP 30x, **Curve LP (reUSDe/sUSDe) 20x**. Points have no current token, no published conversion mechanism, and no expiry disclosure. **Treat as marketing optionality, not yield.** For reUSDe specifically, the Curve LP multiplier creates incentive for liquidity provision, which marginally improves secondary depth — worth tracking, since thin Curve liquidity is reUSDe's largest exit-side risk.

---

*This report is based on Re Protocol's public documentation, on-chain reads, and the live transparency dashboard at [app.re.xyz](https://app.re.xyz) through 2026-05-18. Some information depends on issuer disclosures (specific trust bank counterparty, individual reinsurance carriers, tranche sizing relative to underwriting book) that are not yet independently verified. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

---

## Revision history

- **2026-08-27 — first publication.** TVL **$19.85M** across **14,094,070 tokens** at NAV **1.408519**, Ethereum only — twelve chains probed, code on one — with the contract a 133-byte minimal proxy. The tranche is **9.14% of the senior**, which stands at **$217.2M on Ethereum** (198,103,604 reUSD at NAV 1.096411); Re's `/tvl` reports **$233.7M all-chain**, issuer-reported. Beneath both sits about **$96.00M of subordinated capital**, with non-tokenised capital never below **$55.1M**.
- **Redemption capacity is the binding figure.** The July window **filled its $1.5M cap exactly** — 1,077,727 reUSDe burned across 72 claims between 07-23 and 08-05, $1,500,074 at the window-close NAV — so it was **capped and rationed**. That is **about 7.6% of the tranche per quarter, roughly 3.3 years for a full primary exit**, on a cap set by regulator-approved surplus that does not scale with demand. The exact fill percentage is not recoverable, since unfilled reUSDe returns in the same transaction.
- **Secondary is thin and the exit is not.** The Curve pool holds **$559K** on **24h volume of $7,209**, against about $59K/day in May; the reUSDe side is **0.99% of the tranche**. But a measured **$100K exit routes across four venues for −0.677%** with no ERC-4626 leg in the path. Price sits **0.04% above NAV**; holders number roughly **520** (Ethplorer 517, Blockscout 519).
- **Yield: Re reports 12.27%**, a **simple** annualisation of a 7-day NAV move — compounding the same data gives 13.03%, against a 12% contractual target. The **mezzanine-to-senior spread is 5.85pp** (12.27% against 6.42%). No long-run realized yield is claimed. Price extremes: high **$1.64 (2025-08-23), aggregator-reported and unverified**; chart-confirmed low **$1.049009**, with **no daily close below par in the past year**.
- **Not established:** whether any claim event has touched the mezzanine. Re's `/price` series begins 2025-04-01 at 1.165906, one day after contract creation, so it is **not par-indexed** and no lifetime-appreciation figure derives from it.
