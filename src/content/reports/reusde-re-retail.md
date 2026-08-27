---
asset: "reUSDe (Re Protocol)"
slug: "reusde-re"
aliases: ["reUSDe (Re Protocol)", "Resilience reUSDe", "REUSDE"]
chains: ["eth"]
category: "vault-share"
assessment_type: "full"
audience: "retail"
date: "2026-05-18"
last_verified: "2026-05-18"
last_revised: "2026-08-27"
featured: false
production: true
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

> **Issuer-published dashboard:** [app.re.xyz/reusde](https://app.re.xyz/reusde) — this is **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, historical charts, capital tranching diagram, and Chainlink Proof of Reserves links. It is the canonical source for live metrics on this asset. tidresearch does not currently run an independent dashboard for reUSDe.

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

⚠️ **The number a holder should carry from this is capacity, not fill rate: $1.5M against a $19.85M tranche is about 7.6% per quarter.** Held flat, **fully exiting this tranche through the primary channel would take about 3.3 years** — and the cap is set by surplus released under regulatory approval, so **it does not scale with demand.** Re's documentation anticipates "expected 100% fill" in a normal year; **the first window, under benign conditions, cleared under 8% of the tranche.** ⚠️ **An earlier version of this entry claimed roughly 4.7% of the tranche left through this window. That rested on a supply figure since measured as wrong, and is withdrawn.**

**2. Secondary market (the only path for U.S. persons, and thin for everyone):**
- Single Curve REUSDE/sUSDe pool on Ethereum
- **Curve REUSDE/sUSDe twocrypto pool** [`0x43b98EEA…3734`](https://etherscan.io/address/0x43b98EEA5C689F0036918f590a4B55f22D853734) — **TVL $559,165**, measured 2026-08-27
- ⚠️ **24h volume $7,209 — down about 88% from the ~$59K/day this report previously carried.** That is the single largest change in this refresh.
- The pool holds reUSDe **$197,234** against sUSDe **$362,438**. ⚠️ **Do not read the 35/65 split as imbalance — this is a cross-currency twocrypto pool and the ratio is the FX rate, not skew.**
- **The venue is 2.82% of the tranche, and the reUSDe side alone is 0.99% of it.**
- **No CEX listing. Ethereum only — and that is now measured rather than asserted:** twelve chains were probed and code exists on Ethereum alone.
- **Holder count: roughly 520**, measured 2026-08-27 — Ethplorer reports 517 and Blockscout 519, both against a `totalSupply` matching the on-chain read exactly. ⚠️ **Quoted as a range, not a unit: indexers count holders differently** (zero balances, contracts, LP positions), which is why two were used. **The 327 this report carried from May is superseded — the holder base has grown by roughly 60%.**

⚠️ **Read those two figures as dated, not current.** The 2026-08-24 pass re-measured supply, NAV and the tranche ratios and **did not reach Curve depth, volume or holder count.** They are published here because a stale liquidity picture on an asset this thin is still more useful to a reader than silence — **but a figure that has not been re-checked is not evidence about today**, and the Liquidity axis below rests on them.

⚠️ **Measured exit cost is much better than the pool alone implies, and the two facts pull opposite ways.** Routed through an aggregator to USDC on 2026-08-27: **$10K costs −0.161%, $50K −0.482%, $100K −0.677%** — because the route spreads across Uniswap v4, Curve twocrypto-ng, Balancer v3 and Ekubo rather than draining the one Curve pool. **A $100K exit is now roughly fourteen days of that pool's volume, and still clears under 0.7%.** ⚠️ **And the route contains no ERC-4626 leg — it does not pass through a gated instrument**, which is the failure mode that makes some wrappers unexitable in stress. **Secondary price sits at $1.40907 against NAV 1.408519 — a premium of 0.04%, essentially at NAV.** **Pricing has shown wide variance not tied to NAV.** Over the twelve months to 2026-08-27 the daily series bottoms at **$1.049009 (2026-06-26)**, against a reported all-time high of **$1.64 (2025-08-23)** — a peak-to-trough spread of about **56%**. Current price **$1.41**. ⚠️ **Two provenance notes, because this passage has been wrong once already.** The **$1.64 high is aggregator-reported and unverified**: the daily series available to us begins 2025-08-28, five days after that date, so it cannot see the print — the highest value the series itself contains is **$1.411855**. **The 56% spread inherits that caveat.** ⚠️ **And the low has NOT gone below par: there are zero daily closes under $1.00 in the full year.** An earlier version of this section said the token had priced beneath its $1.00 issue price and that the worst discount to NAV exceeded 30%. **Both statements were false**, drawn from an aggregator text field that its own daily chart contradicts, and both are withdrawn. This is reflexive thin-market pricing, both directions. Forward, the same illiquidity that drove that variance is what defines stress-exit pricing.

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

*Revision history: 2026-08-27 (fifth pass) — ⚠️ **The NAV down-step published an hour earlier is WITHDRAWN: it is a data artifact, not an event. No score change.** Re's `/price` series around it reads 06-29 **1.202895**, 06-30 **1.203409**, 07-01 **1.184704**, **07-02 1.205224** — **the day after the "step" is HIGHER than the day before it and resumes the prior accrual exactly.** ⚠️ **An actuarial write-down does not recover in twenty-four hours; the reduced NAV becomes the new base.** This one leaves no trace after a single day, which is the signature of a bad print. **So the claim that this NAV steps down at quarter close is not supported and is removed** — not re-cut, removed. ⚠️ **It was caught by a coherence check, not a re-measurement:** the step's date implied roughly +20% appreciation inside the token's first weeks on a 12%-APY instrument, which is not physically plausible. **A figure can be arithmetically fine and still describe something that cannot happen.** **And the same check disposed of a second claim: the series begins 2025-04-01 at 1.165906, one day after contract creation, so it is not indexed from par.** The long-standing *"grown from $1.00 at inception, about 41% lifetime"* framing has no support in the issuer's own data and **is withdrawn rather than restated.** Track record corrected to about 17 months from the 2025-03-31 creation, against the ~11 months previously carried. ⚠️ **Holder count is now measured and the old figure was badly stale: roughly 520** — Ethplorer 517, Blockscout 519, both reconciling to the exact on-chain `totalSupply` — **against 327 carried since May, a growth of about 60%.** Published as a range because indexers count holders differently. **Both withdrawn claims were harsher than the truth**, and both came from source artifacts that pointed the alarming way. **The cheap structural test — can this shape physically occur — would have caught each one, and was not run.** 2026-08-27 (fourth pass) — **two items move out of "unmeasured"; no score change.** ⚠️ **The July redemption window was capped and rationed, and filled its ceiling exactly:** the `WindowRedemption` contract burned **1,077,727 reUSDe across 72 claims** (2026-07-23 to 08-05) which at the window-close NAV of $1.391887 is **$1,500,074 against a $1.5M pool — the cap to within 0.005%.** **The precise fill percentage remains unrecoverable** (unfilled reUSDe returns in the same transaction) and is not invented — **"capped and rationed" is the finding.** **The durable number is capacity: $1.5M per quarter against a $19.85M tranche is about 7.6%, or roughly 3.3 years for a full primary exit**, with a cap set by regulator-approved surplus that does not scale with demand — against Re's documented expectation of "100% fill" in a normal year. ⚠️ **Also now on the page: a single NAV down-step of −1.55% across the 2025-06-30/07-01 quarter boundary, the only down-day in 485 observations.** Published as **unexplained, not as a confirmed loss** — the shape suggests an actuarial restatement rather than a claim reaching the mezzanine — but it is direct evidence that **this NAV does step down at quarter close.** **Only the holder count remains unmeasured.** ⚠️ **Both figures existed in internal records since 2026-08-12 and were reported to this coverage as unmeasurable, because the sibling file holding them was never opened.** Recorded because it is the fifth time this week an answer was already written one file over — **and the first time that produced a false absence rather than a stale figure.** An empty result from the wrong file is not evidence that a thing is unmeasurable. **Housekeeping: a duplicated sentence introduced by an earlier edit in this series has been removed** — the TVL paragraph had carried both a 40% and a 41% lifetime-appreciation clause. 2026-08-27 (third pass) — ⚠️ **A false statement published earlier today is withdrawn. No score change.** This report briefly said the all-time low was **$0.968123**, that the peak-to-trough spread was **69%**, and that **the market had priced the token below its $1.00 issue price** with a worst-case discount to NAV **above 30%**. ⚠️ **None of that happened. There are zero daily closes below $1.00 in the past twelve months.** The daily series bottoms at **$1.049009 on 2026-06-26**, so the report's original **$1.05 / ~56%** was right and the replacement was the error. **The bad figure came from an aggregator's `atl` text field, which its own daily chart contradicts on a date the chart covers** — and it arrived labelled *measured*, which is what made it credible enough to publish. ⚠️ **Recorded because the direction matters: the withdrawn claim was harsher than the truth.** It told a holder this asset had broken par when it never has. **A wrong number that overstates risk still misinforms** — and on a thin private-credit tranche it could push someone out of a position on a fact that does not exist. ⚠️ **Correcting a second thing in the same breath, this time toward less certainty: the $1.64 high is aggregator-reported and unverified.** The daily series begins 2025-08-28, five days after the claimed date, so it cannot see that print; the highest value the series contains is **$1.411855**. **The 56% spread inherits that caveat and is now labelled accordingly** rather than presented as measured. **How it was caught:** the source message asserted both the new low and that the old 56% spread still stood — **two claims that cannot both be true**, since the arithmetic of one disproves the other. The contradiction was visible without any new measurement. 2026-08-27 (second pass) — **liquidity, yield and chain footprint measured; one claim withdrawn; no score change.** ⚠️ **Withdrawn: this report briefly stated that roughly 4.7% of the tranche left through the July redemption window. It rested on a supply reading since measured as wrong, and no fill rate is inferable from supply in either direction** — mints and redemptions both move it. Supply is now **14,094,070, above every intermediate reading**, so the tranche has grown on net; that is equally uninformative about fills. ⚠️ **Largest measured change: Curve 24h volume is $7,209, down about 88% from the ~$59K/day carried since May.** The pool holds $559K, of which the reUSDe side is **0.99% of the tranche**. ⚠️ **And the opposite measurement, which a reader needs beside it: a $100K exit routes across four venues for −0.677%, with no ERC-4626 leg in the path.** **A thin venue is not a closed exit** — the aggregator does not drain the one pool. Liquidity is **held at 2.5** because those two findings point in opposite directions and neither dominates. **Ethereum-only is now measured rather than asserted:** twelve chains probed, code on Ethereum alone; the contract is a 133-byte minimal proxy. Secondary price sits **0.04% above NAV**. ⚠️ **Yield carries a basis trap and is published with it: Re's 12.27% is a SIMPLE annualisation of a 7-day NAV move; compounding the same data gives 13.03%** — +0.27pp versus +1.03pp against the 12% target, which is the difference between *slightly* and *comfortably* above it. **No long-run realized yield is claimed**, because the available price history returns 67/26/70/14% over 30/90/180/365 days, which is noise on a $7K/day token. Recorded alongside: **the mezzanine-to-senior spread is 5.85pp (12.27% vs 6.42%)**, which is the compensation for standing in front of the loss. **Still unmeasured:** holder count, the July fill rate, and whether any claim event has touched the mezzanine — nothing readable on-chain separates a claim payment from ordinary NAV movement. 2026-08-27 — **first publication, after a refresh that held once and then resolved.** ⚠️ **The refresh surfaced two figures contradicting the live [reUSD report](/reports/reusd-re/) — senior-tranche size and this token's own supply — and publication was held rather than settled by picking the newer file.** **That was the right call: the newer file was the wrong one, by 23.5%.** Both legs were then re-measured on-chain on 2026-08-27 and the contradiction resolved in favour of the reading this coverage already carried. ⚠️ **The lesson is worth more than the numbers: a contradiction is not resolvable by timestamp.** The stale figure sat in the file with the *later* stamp, because a date records when a file was touched, not when its contents were measured. Written 2026-05-18 and held unpublished since. ⚠️ **It is published now because the live [reUSD report](/reports/reusd-re/) describes this tranche as its loss buffer and had five links to a page that returned 404** — a reader checking whether the buffer beneath them was real could not reach it. Those links were removed on 2026-08-26 as a stopgap; this restores them properly. **Refreshed rather than date-bumped.** Measured 2026-08-24: TVL **$19.00M** across **13,568,423 tokens** at NAV **$1.400**; **10.83% of the senior tranche**, with senior reUSD at **$175.5M on Ethereum** and **$96.00M of subordinated capital** beneath both. ⚠️ **The headline barely moved and the tranche did.** May read $19.11M across 14.24M tokens at about $1.34; supply fell about 4.7% while NAV rose about 4.5%, so the product held near $19M. **An unchanged number is not evidence of a checked number** — and the composition change is the finding, because **the July redemption window executed and roughly 4.7% of the tranche left through it.** ⚠️ **Published as unmeasured rather than estimated:** the July window's **pro-rata fill rate** (a sub-100% fill is a scoring event, and it cannot be inferred from the supply drop, since mints move supply too), Curve pool depth and daily volume, holder count, realized APY against the 12% contractual target, whether the ATH/ATL extremes still stand, and any claim event touching the mezzanine. **The Liquidity axis rests on the May inputs and is held rather than re-derived.** **Also resolved and carried in:** an apparent $77M-versus-$20M contradiction in the junior layer was not competing snapshots but two different quantities — non-tokenised capital has never been below $55.1M, and the conservative reading is correct. **Provenance, since it is scoring-relevant on a private-credit asset with no third-party monitor:** supply, NAV and the tranche ratios are independent on-chain reads; Re's `/tvl` endpoint is the source for the all-chain senior figure and is labelled where used. **Scores unchanged from the staged draft** (Volatility 3.5 / Liquidity 2.5 / Structural 4.5 / Redemption 2.5 / Overall 3.5) — nothing measured moved an axis. `last_verified` stays **2026-05-18** because the liquidity layer was not re-read; `last_revised` is 2026-08-27. **The card will show both, which is the honest summary of this page: a solvency picture measured three days ago and a liquidity picture measured in May.** *
