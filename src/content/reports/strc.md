---
asset: "STRC"
slug: "strc"
aliases: ["STRC", "Stretch", "Strategy Variable Rate Preferred", "Series A Perpetual Strategy Preferred Stock"]
chains: []
category: "tradfi-equity"
assessment_type: "light"
date: "2026-08-24"
last_verified: "2026-08-24"
# Scope-limited pass on the 2026-08-31 Strategy 8-K. ⚠️ `last_verified` is
# deliberately NOT bumped — it stamps a whole-body re-read and this was the
# buyback/runway material only.
last_revised: "2026-08-31"
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
| Perpetual preferred stock, no maturity | 12.00% annual, paid semi-monthly, **variable and discretionary** | $100 stated amount | About **$96.18**, roughly 3.8% below par (2026-08-24) | Strategy Inc. |

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

A **perpetual preferred stock**: no maturity date, no repayment obligation, and a dividend Strategy declares rather than owes in the way it owes bond interest. The stated amount is $100 and the current rate is **12.00% annually, paid semi-monthly**, on **102,541,907 shares** — about **$10.25B** of par.

That makes STRC's annual dividend obligation roughly **$1.23B**, which is **about 71% of Strategy's entire $1.74B annual preferred-and-interest bill**. STRC is not one instrument among several; it is the dominant claim.

## ⚠️ The dividend is a discretionary soft floor, not a peg

**This is the single most misread feature of the instrument, and getting it wrong changes what you think you own.**

Strategy's June 2026 "Digital Credit Capital Framework" replaced what had looked like a mechanical par defence. The earlier reflex — if STRC drifts below par, raise the dividend until buyers return — is gone. Strategy states explicitly that it **will not necessarily increase the rate solely because STRC trades below its stated amount**, and our monitoring records the regime as a **discretionary soft floor with automatic hiking on sub-par trading set to false**.

**What defends the price instead is discretionary and finite:** a buyback programme, and a cash reserve. Both are real. Neither is a commitment.

**In practice the discretion has now been exercised in both directions**, which is what makes it legible rather than theoretical:

- The **August rate was held at 12.00%** despite mid-$80s trading that would mechanically have implied an increase — and management stated it will not recommend a change **until STRC demonstrates sustained trading at or near $100**. That is the ratchet being *declined*, and then forward-disclaimed.
- The **buyback was used**, at increasing scale, for four consecutive weeks.

**Read the rate as a budget rather than a promise.** Holding it preserves ceiling headroom, which matters for the reason in the next section but one.

## The buyback: real, finite, and getting less effective

Strategy authorised **$1.0B** for repurchasing its digital-credit securities, with **STRC as the explicit initial priority**. The programme has been used hard:

| week ending | repurchased | approx. average price |
|---|---:|---:|
| 2026-07-26 | $25.0M | ~$86.50 |
| 2026-08-02 | $81.2M | ~$89.00 |
| 2026-08-09 | $108.6M | ~$94.30 |
| 2026-08-16 | $132.2M | ~$95.19 |
| 2026-08-23 | $136.4M | +$0.11 on the week |
| **2026-08-30** | **$151.8M** | **~$97.48** |

**Cumulatively $635.2M spent, with $364.8M remaining** as at the 2026-08-31 filing. *(Share counts for the last two weeks: 1,431,212 and 1,557,177.)*

⚠️ **The last two rows are stated as a weekly move rather than an absolute average, because that is what the filings support.** The 8-K gives an implied repurchase price of **$97.48** for the most recent week; the intermediate figure is a delta from the week before it.

⚠️ **Three things about that table matter more than the total.**

⚠️ **The per-dollar efficacy of the bid has run both ways, and the honest conclusion is that this metric cannot settle the question.** Through mid-August the pattern looked one-way: $25M moved STRC from about $86.50 toward $88.90, while $132.2M — five times the spend — moved it barely at all. **The next two weeks ran the other way.** $136.4M moved the average execution price **$0.11**; $151.8M moved it **$2.18**.

⚠️ **State that narrowly, because an average repurchase price is not a market print.** It is the mean of whatever the programme filled at over a week, and **it cannot distinguish a secondary re-rating that the buyback merely bought into from more aggressive bidding that moved the price itself.** A rising average is consistent with both, and this page is not able to say which.

⚠️ **The runway is now short enough that the choice of basis barely matters. At the most recent week's $151.8M, the remaining $364.8M is about 2.4 weeks — roughly MID-SEPTEMBER.**

**The spread between the two bases has collapsed.** At $653.0M remaining, a most-recent-week pace put the end in late September and a four-week average in early-to-mid October — three weeks apart, wide enough that the choice of basis mattered. **At $364.8M against a still-rising pace, both land inside September.** ⚠️ **An early-to-mid-October end date is no longer supportable on either basis.**

**The programme is finite by construction, and it is now visibly close to the end.** ⚠️ **A price recovery riding an expiring issuer bid is not a re-rating** — and the closer the bid gets to exhaustion, the more that distinction decides what happens next.

⚠️ **And the funding source changed.** Through early August the buybacks were funded by **selling Bitcoin** — the 2026-08-10 filing earmarked the entire net proceeds of a $108.6M BTC sale for STRC repurchases. In the week to 2026-08-16, **no Bitcoin was sold at all**; the $132.2M of buybacks and $52.4M of dividends came from about **$333.7M of common-stock issuance**. **Common-equity funding has held through the two weeks since**, and holdings stand at **845,050 BTC**.

⚠️ **And a question this page cannot answer, which is the most interesting thing in the 2026-08-31 filing: STRC sold ZERO on its own ATM, for a third consecutive week, against $17,510.8M of available capacity — while common equity funded the buyback.**

**That is not shelf exhaustion.** The capacity is there and unused. **It is either a choice not to issue the preferred, or an absence of demand for it at current terms, and the filing does not say which.** ⚠️ **The two readings point in opposite directions** — a deliberate pause is a funding decision, while an absent bid on a $17.5B shelf is a demand signal about the instrument this report is about. **It is filed here as an open question rather than resolved in either direction**, and what the next filings show on that line is worth more than another week of buyback totals.

**That is an improvement and a substitution at the same time.** It stops the floor consuming the collateral — but it makes the floor depend on Strategy's ability and willingness to issue *common equity* to defend the *preferred*, which is a transfer of value between classes.

⚠️ **And it swapped which constraint binds, which matters more than the improvement.** These are two different gates:

| | the old gate | the new gate |
|---|---|---|
| what runs out | Bitcoin available to sell | the market's appetite to absorb common issuance |
| what you watch | the BTC stack shrinking | **mNAV**, and whether ATM issuance stays accretive |
| how it arrives | gradually, and visibly on the balance sheet | can close quickly, and is a market condition rather than a company one |

**A downstream holder who was watching the Bitcoin stack for early warning is now watching the wrong thing.** The stack stands at **845,050 BTC** as at 2026-08-31, up from 840,447 — ⚠️ **and it is now growing while the buyback runs, because common equity rather than Bitcoin sales is funding it.** Under the old framing a rising stack read as reassurance; under the current one it carries no information about the floor at all. The signal that matters is **mNAV**: at 0.9952 on 2026-08-24 it sits at parity, where equity issuance is roughly neutral rather than accretive. Read that as a level, not a trend — it has oscillated within about 2% of 1.0 for weeks, and the week-to-week direction is noise.

**This is the fact that gates the downstream assets**, because apxUSD, apyUSD and sUSDat all mark STRC to market — but the gate is now equity absorption, not collateral depletion.

## Ability to pay, and what it rests on

**The near-term picture is strong.** The USD reserve reached about **$4.80B** at 2026-08-16, its sixth consecutive weekly build, under a Board policy requiring a minimum twelve months of forward preferred-dividend and interest coverage, restricted to that use.

On the reserve balance recorded at 2026-08-09 ($4.65B), and assuming **zero new issuance inflow**, that is roughly **45 months** of STRC dividends alone, or about **32 months** of the entire preferred-and-interest bill. Those are stress-scenario watermarks rather than forecasts — in practice Strategy continuously refills cash through issuance — but they establish that the dividend is not close to being unfundable.

**Beneath the cash sits the Bitcoin.** At current prices the total preferred-and-interest obligation consumes roughly **2.7% of the stack per year**, and STRC alone about **1.9%**. On frozen assumptions that is decades of runway.

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
| Volatility | 5.0 | Traded from $76.16 at the June 2026 low to about $96 today — a 26% range in ten weeks on an instrument with a $100 stated amount. Perpetual preferreds with discretionary dividends are not low-volatility instruments, and this one has demonstrated it. |
| Liquidity | 7.0 | NASDAQ-listed with real secondary depth — the strongest axis, and the reason a downstream holder can mark it at all. Note this is the *instrument's* liquidity, not the wrapper's: the on-chain STRCx venue is thin, covered in [that report](/reports/strcx/). |
| Counterparty | 4.5 | The binding axis. The dividend is discretionary, the price support is finite and depleting, and the whole instrument depends on a single issuer whose funding model is itself reflexive. Offset by a record cash reserve, a stated coverage policy, and a demonstrated willingness to spend real money defending the price. |
| Redemption | 5.0 | **Perpetual — there is no redemption right.** A holder's only exit is the secondary market at whatever price prevails. The mitigation is that the market is liquid and the issuer is buying; neither is a contractual claim. |
| **Overall** | **4.0** | **Elevated.** A real, dividend-paying, exchange-listed instrument with genuine ability to pay in the near term — sitting on discretionary terms, a finite price floor, and one issuer. Appropriate as a *disclosed* backing asset; not appropriate as an assumed-stable one. |

## Who should care about this report

- **Holders of [apxUSD](/reports/apxusd/), [apyUSD](/reports/apyusd/) or [sUSDat](/reports/susdat/)** — this is what is underneath your position, at 60% and 98.55% of those reserves respectively. Mark it to market, not to par.
- **Anyone reading the [STRCx report](/reports/strcx/)** — that covers the wrapper, which is about a quarter of the family exposure. This is the other three-quarters.

## Who should avoid

- Anyone treating a 12% dividend as a fixed income. It is discretionary, it is variable, and the issuer has said in terms that it will not raise it merely because the price is below par.
- Anyone reading "perpetual" as "safe." It means there is no maturity at which you get $100 back — only a market price and a dividend the issuer may revisit.

## What to watch

- ⚠️ **The buyback authorisation running out — now roughly mid-September.** $364.8M remaining as at 2026-08-31, about **2.4 weeks** at the most recent week's $151.8M. **What STRC does after the bid stops is the real test**, and it is the single event most likely to move the downstream assets. **It is now weeks away rather than months.**
- ⚠️ **Whether STRC issues anything on its own ATM.** Zero sold for three consecutive weeks against **$17,510.8M** of capacity, while common equity funds the buyback. **A resumption reads as a funding choice; continued zeroes read as a demand signal**, and the filings do not distinguish them.
- **⚠️ mNAV, which is now the floor's binding constraint.** With the buyback funded by common issuance rather than Bitcoin sales, the gate is whether the market keeps absorbing that issuance — not whether Bitcoin remains to sell. At 0.9952 (2026-08-24) mNAV sits at parity, where issuance is roughly neutral. **Watching the Bitcoin stack for early warning now watches the wrong thing.**
- **Whether the funding stays on common equity or returns to Bitcoin sales.** The first preserves the collateral but spends dilution capacity; the second does the reverse. The week to 2026-08-16 was the first on common.
- **The dividend rate.** Held at 12.00% and forward-disclaimed until sustained trading near $100. A rise signals the discretion being spent; a suspension is the tail.
- **STRC's discount to par.** About 3.8% at 2026-08-24, against roughly 24% at the June low.
- **The reserve direction.** Six consecutive weekly builds to about $4.80B. A sustained drawdown alongside sub-par trading is the combination that matters, not either alone.

## Live dashboard

Instrument price, dividend-rate history, the cash-service waterfall, and the downstream exposure reconciliation: [tidresearch.com/dashboards/?asset=strc](https://tidresearch.com/dashboards/?asset=strc).

## Related

- [MSTR](/reports/mstr/) — the issuer beneath this instrument
- [STRCx](/reports/strcx/) — the on-chain wrapper, about a quarter of the family exposure
- [apxUSD](/reports/apxusd/) · [apyUSD](/reports/apyusd/) · [sUSDat](/reports/susdat/) — the assets that hold it

---

*This report is based on Strategy Inc. SEC filings, most recently the 2026-08-17 weekly 8-K (accession 0001193125-26-353240), together with the Q2 2026 Form 10-Q (accession 0001050446-26-000044) and the 2026-06-29 Digital Credit Capital Framework 8-K (accession 0001193125-26-286871). **Quarterly filings are unaudited** — reviewed, not audited. Instrument price, mNAV and downstream exposure are live reads at 2026-08-24; the buyback, reserve and Bitcoin figures are dated to the filing that disclosed them, which is up to a week older. This is dependency-analysis scope: it explains STRC's mechanics for holders of downstream assets, and is not investment guidance on STRC. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-08-24 — initial publication at Overall 4.0** (Volatility 5.0 / Liquidity 7.0 / Counterparty 4.5 / Redemption 5.0). ⚠️ **Exposure splits into $66.63M measured on-chain as STRCx and about $197.8M inferred by subtraction** — the roughly 75% that is raw and the roughly 75% that is unmeasured are the same 75%. The 2026-08-17 filing shows **no Bitcoin sold** and STRC repurchases funded from common-stock issuance, so **the binding constraint moved from the depth of the Bitcoin stack to the market's appetite for common issuance**.
