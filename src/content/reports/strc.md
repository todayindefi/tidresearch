---
asset: "STRC"
slug: "strc"
aliases: ["STRC", "Stretch", "Strategy Variable Rate Preferred", "Series A Perpetual Strategy Preferred Stock"]
chains: []
category: "tradfi-equity"
assessment_type: "light"
date: "2026-08-24"
last_verified: "2026-10-12"
# 2026-10-12 issuer disclosure (period 10-05 -> 10-11): STRC buyback $192.4M /
# 1,932,145 shares at ~$99.58; $354.8M remaining; Reserve held $4.88B; Cash
# fell $833.4M -> $640.5M. EDGAR still ended at the 10-05 8-K, so no 10-12
# accession is asserted. Scores HELD per owner ruling.
last_revised: "2026-10-13"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=strc"
featured: false
production: true
issuer: "Strategy Inc."
yield_bearing: true
underlying_assets: ["mstr"]
liquidity_score: 7.0
overall_score: 4.0
---

# STRC (Strategy Series A Perpetual Preferred) — Risk Report

> **Scope: dependency analysis.** This report covers STRC as the instrument sitting underneath several assets in this coverage — apxUSD, apyUSD and sUSDat all depend on it.
> It is **NOT an equity investment analysis** of STRC as a security. No buy or sell guidance is intended or implied, and yield-versus-peer, call-schedule and preferred-market relative-value questions are out of scope.
> The score axes describe STRC's reliability *as a backing asset for something else*, not its attractiveness as a holding.
> For the issuer beneath it see the [MSTR report](/reports/mstr/); for the on-chain wrapper see [STRCx](/reports/strcx/).

**Elevated risk · 4.0/10** | Listed: NASDAQ: STRC | Instrument-level dependency analysis

| Instrument | Dividend | Par | Trading | Issuer |
|---|---|---|---|---|
| Perpetual preferred stock, no maturity | 12.00% annual, paid semi-monthly, **variable and discretionary** | $100 stated amount | **$99.88**, 0.12% below par (2026-10-12) | Strategy Inc. |

## Why this report exists

**STRC is the convergence point under three separate assets in this coverage**, and until now its only published treatment sat inside the report on its *wrapper*. That is backwards — the wrapper inherits the instrument's risk, not the other way round.

⚠️ **How big is the exposure? The honest answer has two halves, and only one of them is measured.**

**Measured — an on-chain balance times a market price:**

| | | |
|---|---:|---|
| STRCx held by Apyx | **$66.63M** | 691,404.60 tokens, read on-chain |

**Inferred — derived by subtraction from issuer disclosures, not observed:**

| | | how it is arrived at |
|---|---:|---|
| Apyx raw STRC | **$119.05M** | the issuer's STRC bucket *minus* the on-chain STRCx above; custodied off-chain at a brokerage |
| Saturn raw STRC | **$78.72M** | total assets *minus* the on-chain buffer; our monitoring flags it `oracle_unverified` and the field is literally named *implied* |
| **inferred subtotal** | **$197.77M** | |

**Adding those gives about $264.4M of STRC-family exposure across the three assets — but that total is two issuer attestations plus one on-chain balance, not a measurement.** Roughly **60% of Apyx's reserves** and **98.55% of Saturn's** are attributed to STRC on that basis.

⚠️ **And there is a coincidence in those numbers worth pointing out, because it changes what the headline means.** The share that is *raw STRC rather than the wrapper* is about **75%**. The share that is *inferred rather than measured* is also about **75%**. **They are the same 75%** — raw STRC is precisely what both issuers derive by subtraction, because it is the part that sits off-chain. So "three-quarters of the exposure is the raw instrument" and "three-quarters of the exposure is a residual" are not two facts. They are one fact stated two ways.

✅ **What is solid regardless: Saturn holds no STRCx at all.** That is a direct on-chain read of zero, not a residual — so sUSDat's dependency really is on the raw instrument, and a reader who has only seen the [STRCx report](/reports/strcx/) has not seen it.

**None of this is an allegation that the STRC is not there.** Both issuers disclose it, Apyx publishes a continuous attestation feed, and nothing contradicts either figure. It is a statement about **what can be checked from outside**: one balance can, and about three-quarters of the exposure cannot.

## What STRC actually is

A **perpetual preferred stock**: no maturity date, no repayment obligation, and a dividend Strategy declares rather than owes in the way it owes bond interest. The stated amount is $100 and the current rate is **12.00% annually, paid semi-monthly**, on roughly **88,954,899 shares — about $8.90B of par** at 2026-10-11. That count is derived, not disclosed: 104,895,000 shares on Strategy's STRC dashboard at 2026-06-08, less 15,940,101 cumulative repurchases, with no preferred issued over that span. Strategy has not published a post-buyback count.

That makes STRC's annual dividend obligation roughly **$1.07B**, about **68% of Strategy's entire ~$1.57B annual preferred-and-interest bill** (both derived on the count above). The latest 1,932,145-share repurchase alone removes about **$23.2M a year** of STRC dividends at 12%. STRC is not one instrument among several; it is the dominant claim.

## ⚠️ The dividend is a discretionary soft floor, not a peg

**This is the single most misread feature of the instrument, and getting it wrong changes what you think you own.**

Strategy's June 2026 "Digital Credit Capital Framework" replaced what had looked like a mechanical par defence. The earlier reflex — if STRC drifts below par, raise the dividend until buyers return — is gone. Strategy states explicitly that it **will not necessarily increase the rate solely because STRC trades below its stated amount**, and our monitoring records the regime as a **discretionary soft floor with automatic hiking on sub-par trading set to false**.

**What defends the price instead is discretionary and finite:** a buyback programme, and a cash reserve. Both are real. Neither is a commitment.

**In practice the discretion has now been exercised in both directions**, which is what makes it legible rather than theoretical:

- The **August rate was held at 12.00%** despite mid-$80s trading that would mechanically have implied an increase — and management stated it will not recommend a change **until STRC demonstrates sustained trading at or near $100**. That is the ratchet being *declined*, and then forward-disclaimed.
- The **buyback was used**, at increasing scale, for four consecutive weeks.

**Read the rate as a budget rather than a promise.** Holding it preserves ceiling headroom, which matters for the reason in the next section but one.

## The buyback: real, finite, and getting less effective

Strategy authorised **$1.0B** for repurchasing its digital-credit securities, with **STRC as the explicit initial priority**, and ⚠️ **doubled that authorisation to $2.0B on 2026-09-08** (8-K accession `0001193125-26-384402`, period 08-31→09-07). The programme has been used hard:

| week ending | repurchased | approx. average price |
|---|---:|---:|
| 2026-07-26 | $25.0M | ~$86.50 |
| 2026-08-02 | $81.2M | ~$89.00 |
| 2026-08-09 | $108.6M | ~$94.30 |
| 2026-08-16 | $132.2M | ~$95.19 |
| 2026-08-23 | $136.4M | +$0.11 on the week |
| **2026-08-30** | **$151.8M** | **~$97.48** |
| 2026-09-07 | $176.3M | ~$97.36 |
| 2026-09-13 | $139.3M | ~$98.07 |
| **2026-09-20** | **$174.0M** | **~$98.24** |
| **2026-10-04 filing periods** | **$176.3M** | **~$99.39** |
| **2026-10-11** | **$192.4M** | **~$99.58** |

⚠️ **$354.8M remained at 2026-10-11** under the doubled $2.0B authorisation. Strategy repurchased **1,932,145 shares for $192.4M**, about **$99.58/share**. STRC itself closed at **$99.88 on October 12**, so the direct instrument evidence improved. But the issuer bid is demonstrably large, discretionary and finite—not a contractual floor, redemption right, or peg—and is now being funded against a rapidly declining USD Cash balance.

⚠️ **The last two rows are stated as a weekly move rather than an absolute average, because that is what the filings support.** The 8-K gives an implied repurchase price of **$97.48** for the most recent week; the intermediate figure is a delta from the week before it.

⚠️ **Three things about that table matter more than the total.**

⚠️ **The per-dollar efficacy of the bid has run both ways, and the honest conclusion is that this metric cannot settle the question.** Through mid-August the pattern looked one-way: $25M moved STRC from about $86.50 toward $88.90, while $132.2M — five times the spend — moved it barely at all. **The next two weeks ran the other way.** $136.4M moved the average execution price **$0.11**; $151.8M moved it **$2.18**.

⚠️ **State that narrowly, because an average repurchase price is not a market print.** It is the mean of whatever the programme filled at over a week, and **it cannot distinguish a secondary re-rating that the buyback merely bought into from more aggressive bidding that moved the price itself.** A rising average is consistent with both, and this page is not able to say which.

⚠️ **The exhaustion question this report was tracking is VOID, not answered — the denominator was replaced.** This page put the remaining $364.8M at about 2.4 weeks of spend, landing **mid-September**, and named that as the decision point. ⚠️ **On 2026-09-08 Strategy re-authorised the programme from $1.0B to $2.0B** and bought its largest week yet, **$176.3M for 1,810,885 shares at about $97.36**. So the runway did not run out and the forecast was not missed: **the arithmetic stopped applying.**

⚠️ **A re-authorisation is two-sided and should not be read as pure reassurance.** It removes the near-term exhaustion that this report identified as the thing to watch, and it is also evidence that the issuer intends to keep bidding — which is the same fact seen from the holder's side and from the funding side. **The bid is no longer finite on the horizon this page was measuring**, but it remains discretionary, and nothing about the doubling is contractual.

**What survives unchanged is the shape of the question, only on a longer horizon:** the programme is still finite by construction, and ⚠️ **a price recovery riding an issuer bid is still not a re-rating.** The distinction simply stops being decided in September.

⚠️ **And the funding source changed again.** Through early August the buybacks were funded by Bitcoin sales; common equity then funded them before USD Cash took over. In the week to 10-11, Strategy sold **125,183 MSTR shares for $21.0M**, bought **250 BTC for $21.5M**, and spent **$192.4M** repurchasing STRC. USD Reserve held at **$4.88B**, but separate USD Cash fell **$833.4M → $640.5M**. The bid works near par while its most immediate funding pocket shrinks.

⚠️ **And a question this page cannot answer, first exposed by the 2026-08-31 filing: STRC sold ZERO on its own ATM against $17,510.8M of available capacity — while common equity funded the buyback.** No preferred issuance occurred in the 2026-10-05 filing either, while the common ATM resumed. That is not shelf exhaustion: capacity exists and remains unused. It is either a choice not to issue preferred stock or an absence of demand at current terms, and the filing does not distinguish them.

**That is not shelf exhaustion.** The capacity is there and unused. **It is either a choice not to issue the preferred, or an absence of demand for it at current terms, and the filing does not say which.** ⚠️ **The two readings point in opposite directions** — a deliberate pause is a funding decision, while an absent bid on a $17.5B shelf is a demand signal about the instrument this report is about. **It is filed here as an open question rather than resolved in either direction**, and what the next filings show on that line is worth more than another week of buyback totals.

**That is an improvement and a substitution at the same time.** It stops the floor consuming the collateral — but it makes the floor depend on Strategy's ability and willingness to issue *common equity* to defend the *preferred*, which is a transfer of value between classes.

⚠️ **And it swapped which constraint binds, which matters more than the improvement.** These are two different gates:

| | the old gate | the new gate |
|---|---|---|
| what runs out | Bitcoin available to sell | the market's appetite to absorb common issuance |
| what you watch | the BTC stack shrinking | **mNAV**, and whether ATM issuance stays accretive |
| how it arrives | gradually, and visibly on the balance sheet | can close quickly, and is a market condition rather than a company one |

**A downstream holder who was watching the Bitcoin stack for early warning is now watching the wrong thing.** The stack stood at **845,050 BTC** from 2026-08-31 through 09-13, then rose to **846,000** in the week to 09-20 (accession `0001193125-26-396093`, read directly): 950 BTC for $75.7M, bought from USD Cash rather than from any new capital, with the common ATM idle for a third week. ⚠️ **The funding has moved twice since the stack last grew on capital formation.** **The bid has run on three different mechanisms in six weeks — Bitcoin sales, then common equity, and now USD cash**, which fell **$1.44B → $1.30B → $1.05B** across the last two weeks. ⚠️ **And in the week to 09-20 the restricted USD Reserve fell for the first time, $5.10B → $5.04B**, with the filing stating that $57.4M of it was used to pay preferred dividends and interest — the first reserve-draw sentence in any of these filings. That is one payment week and 1.1% of the reserve, a first observed net draw rather than a burn rate; but with the ATM idle nothing is topping the reserve up, so the dividend is now paid from the reserve rather than through it. Under the old framing a rising stack read as reassurance; under the current one it carries no information about the floor at all. The signal that matters is **mNAV**: at 0.9952 on 2026-08-24 it sits at parity, where equity issuance is roughly neutral rather than accretive. Read that as a level, not a trend — it has oscillated within about 2% of 1.0 for weeks, and the week-to-week direction is noise.

**This is the fact that gates the downstream assets**, because apxUSD, apyUSD and sUSDat all mark STRC to market — but the gate is now equity absorption, not collateral depletion.

## Ability to pay, and what it rests on

**The restricted Reserve remains substantial at $4.88B, but the liquid direction is adverse.** USD Cash has fallen to **$640.5M**, only **$140.5M above the report's $500M trigger**, while the issuer continues spending close to $200M a week on the near-par STRC bid.

On the $4.88B Reserve at 2026-10-11, and assuming **zero new issuance inflow**, that is roughly **55 months** of STRC dividends alone, or about **37 months** of the entire preferred-and-interest bill—on the derived ~$1.57B obligation above. Those are stress-scenario watermarks rather than forecasts, but they establish that the dividend is not close to being unfundable even as unrestricted Cash approaches its trigger.

**Beneath the cash sits the Bitcoin.** At the roughly $79,670 Strategy paid for bitcoin in the week to 09-20, the ~$1.63B preferred-and-interest obligation is about **2.4% of the 846,000-BTC stack per year**, and STRC alone about **1.7%**. On frozen assumptions that is decades of runway.

⚠️ **The runway numbers are the least robust figures in this report and should be read as such.** They assume a frozen BTC price, frozen share counts and frozen dividend rates — and all three move together in exactly the wrong direction under stress. A Bitcoin drawdown, continued preferred issuance and a rising STRC rate compound rather than offset.

## ⚠️ The rate ceiling is the mechanism to watch

STRC's rate ratchets **monotonically upward** over multi-year horizons and is sticky on the way back down. That creates a ceiling problem that the runway arithmetic conceals.

At the current **12.00%**, total obligation runway is around 37 years on frozen assumptions. At a **14%** rate it is about 33; at **16%**, about 30. **Each stress cycle of roughly 125bp consumes ceiling headroom permanently**, and there are only about two such cycles to 14% and four to 16%.

**The practical read: at 14–16% Strategy plausibly elects to suspend the dividend rather than hike further.** That is the tail a downstream holder is actually exposed to — not a default, but a discretionary suspension on an instrument with no maturity and no repayment claim. Holding the rate at 12.00% while the price sits below par is, in that light, the issuer conserving its own optionality.

## What sits above STRC in a squeeze

Preferred dividends rank behind debt service. Strategy's convertible notes therefore matter to a STRC holder even though they are a different instrument.

⚠️ **Do not read the 2030 maturity as the binding date.** Every convertible tranche carries a **noncontingent holder put at 100% of principal in cash**, well before stated maturity — which puts **about $4.90B inside calendar 2028** and **$5.91B, 88% of the stack, by 2028-09-15**, with the first $1.01B in September 2027. The lowest conversion price in the stack is $149.77 against a common price near $119, so the puts are the rational path rather than a tail case. The [MSTR report](/reports/mstr/) carries the full schedule.

**Why this is in a STRC report:** those are cash claims that rank ahead of the preferred, and they cluster eighteen months earlier than the headline maturity suggests.

## Score breakdown

| Axis | Score | Why |
|---|---:|---|
| Volatility | 5.0 | Traded from $76.16 at the June 2026 low to **$99.88 on October 12**—a large recovery, but still a roughly 31% range on an instrument with a $100 stated amount. The direct evidence improved; the demonstrated volatility remains. |
| Liquidity | 7.0 | NASDAQ-listed with real secondary depth — the strongest axis, and the reason a downstream holder can mark it at all. Note this is the *instrument's* liquidity, not the wrapper's: the on-chain STRCx venue is thin, covered in [that report](/reports/strcx/). |
| Counterparty | 4.0 | The binding axis. The dividend is discretionary, price support is finite, and the instrument depends on one issuer. Direct evidence improved—STRC closed at **$99.88**—but Strategy spent **$192.4M** on the weekly bid while USD Cash fell to **$640.5M**. The Reserve still covers about three years of the preferred-and-interest obligation, but Cash is only **$140.5M above** the nearest trigger. |
| Redemption | 5.0 | **Perpetual — there is no redemption right.** A holder's only exit is the secondary market at whatever price prevails. The mitigation is that the market is liquid and the issuer is buying; neither is a contractual claim. |
| **Overall** | **4.0** | **Held.** The $99.88 market price is stronger direct instrument evidence, but the near-par price coincides with a **$192.4M issuer bid**, only **$354.8M** of authorization remaining, and USD Cash at **$640.5M**. The recovery offsets rather than erases the finite-support risk. Appropriate as a *disclosed* backing asset; not as an assumed-stable one. |

## Who should care about this report

- **Holders of [apxUSD](/reports/apxusd/), [apyUSD](/reports/apyusd/) or [sUSDat](/reports/susdat/)** — this is what is underneath your position, at 60% and 98.55% of those reserves respectively. Mark it to market, not to par.
- **Anyone reading the [STRCx report](/reports/strcx/)** — that covers the wrapper, which is about a quarter of the family exposure. This is the other three-quarters.

## Who should avoid

- Anyone treating a 12% dividend as a fixed income. It is discretionary, it is variable, and the issuer has said in terms that it will not raise it merely because the price is below par.
- Anyone reading "perpetual" as "safe." It means there is no maturity at which you get $100 back — only a market price and a dividend the issuer may revisit.

## What to watch

- ⚠️ **USD Cash below $500M—the nearest live trigger.** Cash is **$640.5M**, only **$140.5M away**. The $4.88B restricted Reserve is a different pocket and must not be merged with it.
- **Buyback capacity: $354.8M remaining.** Exhaustion alone is not an automatic score trigger, because the board can re-authorize as it did before. What STRC does without—or after renewal of—the bid is still the clean test of organic support.
- ⚠️ **Whether STRC issues anything on its own ATM.** Zero preferred sold in all 17 weekly filings since 2026-05-26 against roughly **$17.5B** of frozen capacity; the common ATM went idle much later, in the last three filings. USD Cash now funds the buyback. **A resumption reads as a funding choice; continued zeroes read as a demand signal**, and the filings do not distinguish them.
- **⚠️ mNAV, which is now the floor's binding constraint.** With the buyback funded by common issuance rather than Bitcoin sales, the gate is whether the market keeps absorbing that issuance — not whether Bitcoin remains to sell. At 0.9952 (2026-08-24) mNAV sits at parity, where issuance is roughly neutral. **Watching the Bitcoin stack for early warning now watches the wrong thing.**
- **Which pocket funds the bid.** Bitcoin sales through early August, common equity next, and USD Cash most recently. The 10-05 filing assigns $154.1M of Cash to repurchases while the common ATM resumed separately. The first spends collateral, the second dilution capacity, and the third a finite balance; none is free.
- **The dividend rate.** Held at 12.00% and forward-disclaimed until sustained trading near $100. A rise signals the discretion being spent; a suspension is the tail.
- **STRC's discount to par.** Just **0.12% at the October 12 close ($99.88)**, against roughly 24% at the June low. Read that improvement beside the size of the issuer bid.
- **The two cash pockets.** Reserve held at **$4.88B** while USD Cash fell **$833.4M → $640.5M**. The stable Reserve is constructive for dividend service; declining Cash is the immediate constraint on continued buybacks.

## Live dashboard

Instrument price, dividend-rate history, the cash-service waterfall, and the downstream exposure reconciliation: [tidresearch.com/dashboards/?asset=strc](https://tidresearch.com/dashboards/?asset=strc).

## Related

- [MSTR](/reports/mstr/) — the issuer beneath this instrument
- [STRCx](/reports/strcx/) — the on-chain wrapper, about a quarter of the family exposure
- [apxUSD](/reports/apxusd/) · [apyUSD](/reports/apyusd/) · [sUSDat](/reports/susdat/) — the assets that hold it

---

*This report uses Strategy's 2026-10-12 issuer disclosure for the 10-05→10-11 period, the 2026-10-05 Form 8-K (accession 0001193125-26-413164), the Q2 2026 Form 10-Q (accession 0001050446-26-000044), and the 2026-06-29 Digital Credit Capital Framework 8-K (accession 0001193125-26-286871). ⚠️ **EDGAR's CIK feed still ended at the October 5 8-K when checked, so no October 12 accession is cited or implied.** Quarterly filings are unaudited—reviewed, not audited. This is dependency-analysis scope, not investment guidance on STRC. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-13 — October 12 issuer disclosure synced; scores held.** Strategy repurchased **1,932,145 STRC shares for $192.4M at ~$99.58**, leaving **$354.8M** authorized; STRC closed at **$99.88**. USD Reserve held at **$4.88B**, while USD Cash fell **$833.4M → $640.5M**, leaving **$140.5M** to the below-$500M trigger. Volatility 5.0 / Liquidity 7.0 / Counterparty 4.0 / Redemption 5.0 / Overall 4.0 held. The issuer release is live; EDGAR still ends at the October 5 8-K, so no October 12 accession is cited.
- **2026-10-06 — 10-05 8-K synced; scores held.** Strategy repurchased **1,773,802 STRC shares for $176.3M at about $99.39**, leaving **$547.2M** under the $2.0B authorization. At 12%, those shares remove about **$21.3M/year** of dividends. USD Reserve fell **$5.02B → $4.88B**, USD Cash ended at **$833.4M**, and common issuance resumed while preferred issuance remained zero. The bid works near par, but remains discretionary and finite.
- **2026-09-22 — Counterparty 4.5 → 4.0; Overall held at 4.0.** The condition set for the axis on 09-08 — the USD Reserve falling while buybacks continue — printed on the 09-21 filing: $57.4M drawn from the reserve for dividends and interest in the same week as $174.0M of STRC repurchases. One axis, not the headline: STRC executed at ~$98.24 in the same week, and the recovery offsets the issuer notch. Volatility 5.0 / Liquidity 7.0 / Redemption 5.0 unchanged.
- **2026-09-22 — 09-21 weekly 8-K synced (accession 0001193125-26-396093, read at source); upstream issuer's Funding axis cut 4.5 → 4.0 on the [MSTR report](/reports/mstr/), MSTR Overall held 4.5.** STRC par and the dividend obligation restated on a derived 93,162,208-share count (104,895,000 at 06-08 less 11,732,792 repurchased): about **$9.32B par and $1.12B/yr**, replacing $10.25B and $1.23B, which had overstated the burden by about 6.5%; coverage on the $5.04B reserve about 54 months on STRC alone and 37 on the whole preferred bill. STRC buyback **$174.0M for 1,771,238 shares at ~$98.24 (1.76% below par)**, a sixth consecutive week and the highest price yet; **$875.1M remains** of the $2.0B programme. **The USD Reserve fell for the first time, $5.10B → $5.04B**, with $57.4M used to pay preferred dividends and interest; USD Cash **$1.30B → $1.05B**; 950 BTC bought from cash (holdings 846,000); common ATM idle for a third filing; preferred ATM untouched in all 17 weekly filings since 2026-05-26. Watch-list item on the mid-September buyback exhaustion restated on the doubled programme.
- **2026-08-24 — initial publication at Overall 4.0** (Volatility 5.0 / Liquidity 7.0 / Counterparty 4.5 / Redemption 5.0). ⚠️ **Exposure splits into $66.63M measured on-chain as STRCx and about $197.8M inferred by subtraction** — the roughly 75% that is raw and the roughly 75% that is unmeasured are the same 75%. The 2026-08-17 filing shows **no Bitcoin sold** and STRC repurchases funded from common-stock issuance, so **the binding constraint moved from the depth of the Bitcoin stack to the market's appetite for common issuance**.
