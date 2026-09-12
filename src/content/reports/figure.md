---
# ⚠️ PARTIAL REFRESH 2026-09-12, and last_verified is NOT bumped. What was
# added: Q2 2026 results (10-Q, 2026-08-14), the $600M 8.500% senior notes due
# 2031 (closed 2026-07-14), and the Kiavi acquisition (closed 2026-09-01,
# $717M, ~$590M cash). Sources are the company's own releases and 8-K.
# ⚠️ NOT RE-DERIVED: every delinquency, securitization and FCC figure below is
# still Q1 2026 (31 March). The loan-book analysis that drives the score has
# NOT been re-run against Q2, and a quarter with 132% volume growth moves the
# denominator of every ratio in it. Bumping last_verified would claim that
# work was done.
asset: "Figure"
slug: "figure"
aliases: ["Figure", "FIGR", "Figure Technology Solutions", "Figure Lending", "Figure Certificate Company", "FCC"]
chains: []
category: "tradfi-equity"
assessment_type: "light"
date: "2026-07-31"
last_verified: "2026-07-31"
# ⚠️ 2026-09-08 re-based the Q2 delinquency table (three rows were comparing to
# 31 Dec 2025, not 31 Mar) and refreshed the lien mix. `last_verified` HOLDS —
# the filing was not re-read end to end.
last_revised: "2026-09-13"
featured: false
production: true
issuer: "Figure Technology Solutions, Inc. (Nasdaq: FIGR)"
yield_bearing: false
underlying_assets: []
companion_report: "hastra-prime"
overall_score: 5.0
---

# Figure — Risk Report
**Moderate-elevated risk · 5.0 / 10**
*TradFi dependency · Nasdaq: FIGR · Upstream of PRIME and wYLDS · verified 2026-07-31*

> **Scope: counterparty analysis.** This report assesses Figure as the company upstream of [PRIME](/reports/hastra-prime) and [wYLDS](/reports/wylds). It is not equity investment research and makes no recommendation about FIGR shares.

## Summary

If you hold [PRIME](/reports/hastra-prime) or [wYLDS](/reports/wylds), Figure is the company underneath both.
This report covers Figure itself rather than any token, so that the token reports can point here instead of
re-explaining it.

Figure does two quite different things, and keeping them apart is the whole point of reading this. One part,
**Figure Certificate Company**, is an SEC-registered issuer whose annual accounts are audited by KPMG; it issues
the certificate that ultimately backs wYLDS, and it holds Treasuries, money-market funds and overnight
Treasury-backed repo against it. That part is genuinely solid. The other part, **Figure Lending**, is the
largest non-bank originator of home-equity credit in the United States — over $25bn originated since 2018 — and
it is the part with the risk. It writes loans, then sells them, securitizes them, or pledges them into the
lending facility that PRIME's backing is lent into.

The direction of travel on that loan book is the reason this report is not scored higher. Delinquency on the
loans Figure holds for sale rose three periods running — from about 3.9% to about 5.5% to roughly 6.6% — and
then **fell to 5.05% in Q2 2026**. ⚠️ **That fall is not the reversal it looks like.** Across the same quarter
**nonaccrual UPB rose from $2.4M to $14.1M** — roughly 17% to 72% of the 90-plus bucket — and the securitized
60-plus line broke flat at **0.8% → 1.1%**. **The rate and its composition moved in opposite directions**, and
composition is the half that describes what is actually in the book. The book grew throughout, so the earlier
rises were not a shrinking-denominator effect — and the later fall is partly the same arithmetic running the
other way.

There is a second figure that looks far better, and understanding why they differ matters more than either
number. Loans that Figure has already securitized show delinquency under 1%. But the lending facility's own
rules require any loan more than 60 days late to be **removed** from the collateral pool — so late loans are
pulled out of the clean pools and land back on Figure's own balance sheet. The flattering number and the
unflattering number are measuring different populations, and the rules actively move loans from one to the
other. The unflattering one is closer to what actually secures the facility.

Set against that, Figure is a real and unusually well-documented business: Nasdaq-listed, an audited subsidiary,
an active and rapidly growing securitization programme, and institutional buyers for its loans. Its own filings
also disclose a history of losses and no guarantee of profitability, and its group structure is more tangled
than its regulatory standing suggests.

## At a glance

| | |
|---|---|
| **What it is** | The largest US non-bank home-equity lender, listed on Nasdaq, plus a separate SEC-registered subsidiary that issues the certificate backing wYLDS. |
| **Why it matters to you** | It originates and services the loans behind PRIME's yield, and its subsidiary issues the certificate behind wYLDS. |
| **Loan quality trend** | ⚠️ **Mixed, and the headline is the flattering half.** Delinquency on loans held for sale **fell 6.61% → 5.05%** in Q2 2026 — but **nonaccrual UPB rose $2.4M → $14.1M** and the securitized 60-plus line broke flat at **0.8% → 1.1%**. **The rate improved while the composition worsened**, and the two are argued separately under [credit quality](#why-the-two-delinquency-numbers-disagree). |
| **The regulated part** | Figure Certificate Company files with the SEC, is KPMG-audited annually, and holds Treasuries, money-market funds and Treasury-backed repo. Genuinely strong, and separate from the lending risk. |
| **Lender's cushion** | The facility advances up to 95% against pledged loan balances, so the cushion protecting lenders is around 5% — not the ~40% homeowner equity figure the loan-to-value stats might suggest. |
| **Governance** | The weakest area. A multi-entity group, a regulated subsidiary whose twelve-month liquidity rests on a written parent commitment, and a related company running a public protocol on licensed Figure software with no disclosure obligations of its own. |
| **Biggest risk** | That the loan book keeps deteriorating while the parts of it that matter most to token holders remain the hardest to see. |

## Score breakdown

**The four axes beneath the overall, so the composite can be argued with rather than taken on trust.** Each points at the section that carries its evidence.

| Axis | Score | What it rests on |
|---|---|---|
| Balance sheet | **5.5** | Loans that cannot be sold or pledged **accumulate on the balance sheet**, which is why the securitized-pool statistics are the flattering proxy and the held-for-sale book is the honest one. See [the loan book](#the-loan-book). |
| Credit quality | **5.0** | ⚠️ **Re-based to evidence rather than proxy, and one good quarter does not un-base it.** Headline delinquency improved 6.61% → 5.05%, but **nonaccrual UPB went $2.4M → $14.1M** — roughly 17% to 72% of the 90-plus bucket — and the securitized 60-plus line broke flat at 0.8% → 1.1%. **The direction of the headline and the direction of the composition disagree.** |
| Funding model | **5.5** | Four exits — hold, whole-loan sale, securitization, Democratized Prime — genuinely diversify funding, **but at least one must stay open for originations to keep moving.** ⚠️ **Held through the Kiavi close rather than cut:** $600M of term leverage replaced originate-to-distribute, which pulls the axis down, but retiring a margin-callable repo line and a credit agreement — **with all liens released** — removes a stress-correlated run channel and leaves the acquired book unencumbered. **A swap of acute risk for chronic cost, not a deterioration.** ⚠️ **Magnitude undeclared:** the filing does not state either retired facility's size. See [how Figure funds itself](#how-figure-funds-itself). |
| **Governance** | **4.5** | **The weakest axis, and deliberately so.** Dependencies overlap across a listed parent, a lender, a regulated certificate issuer, advisers and transfer agents, and interchangeable use of "Parent" can assign an obligation to the wrong entity. Hastra is a **related party rather than a subsidiary**, with no public-company disclosure obligation. |
| **Overall** | **5.0** | Sits at the mean of the four and below the two stronger ones, because **governance and credit quality are the axes that would transmit a problem to anything downstream** — and this report exists as a dependency for [wYLDS](/reports/wylds) and [PRIME](/reports/hastra-prime), not as an equity view. |

## The two halves of Figure

The Figure name covers several legal entities. Figure Technology Solutions, Inc. is the Nasdaq-listed parent. Figure Lending, LLC originates and services loans. Figure Certificate Company, or FCC, is a separate SEC reporting registrant that issues YLDS, the certificate underneath wYLDS.

That distinction determines which risks flow into which token. A wYLDS holder depends mainly on FCC: Hastra holds YLDS and wraps it for retail use. A PRIME holder depends on FCC **and** Figure Lending because the certificates behind staked PRIME are lent into Democratized Prime, a senior facility secured by loans Figure Lending owns. The regulated Treasury-reserve node is relevant to both, but it does not turn the lending exposure above it into a Treasury claim.

Signum Ltd., doing business as Hastra, is a disclosed Figure related party, but it is not a subsidiary and Figure does not consolidate it. Hastra issues wYLDS and PRIME and runs their redemption process; its closeness to Figure does not give token holders direct reporting rights against FCC.

FCC's filing uses “Parent” for more than one group entity, so a parent commitment cannot always be assigned to one named company. The practical rule is to keep the certificate issuer, lender and wrapper operator separate.

## The loan book

The most useful credit series is Figure's loans held for sale: loans still on its balance sheet awaiting a whole-loan transfer, securitization or another funding exit. On a consistent basis — loans at least 30 days late plus loans in forbearance, divided by total unpaid principal — delinquency rose from **3.91% at the end of 2024 to 5.46% at 31 December 2025 and 6.61% at 31 March 2026** — and then **fell to 5.05% at 30 June 2026**, per Figure's Q2 10-Q filed 2026-08-14 (unaudited interim, like the quarters before it).

⚠️ **The headline improved, the improvement is real, and this report is holding its score anyway. All three of those need saying together.**

**It is real, and we checked the obvious reason it might not be.** A book growing fast can flatter a delinquency *rate* without anything improving, and this book grew **17.8%** over the quarter — exactly the shape that manufactures a fake recovery. So the numerator was tested separately: **delinquent dollars fell 9.9%** while unpaid principal rose 17.8%. **Both legs moved favourably**, which a denominator artifact cannot produce. The **30–59 day bucket fell 53%**, reversing the 365% spike recorded below. (Reconstructing 31 December 2025 from the new filing's comparative column returns **5.457%** against the 5.46% published here, so these figures sit on the basis used here rather than merely near it.)

⚠️ **But the trend did not reverse. It matured, by the mechanism set out in the paragraph below**, which says the 30–59 spike "matters because it feeds the 60–89 and 90-plus day buckets over the next few quarters." That is what the quarter shows:

⚠️ **Each row states its own prior date, because a 10-Q's comparative column is not one basis.** Income-statement style measures compare to the prior quarter; balance-sheet items compare to the **prior year-end**. Reading the filing's comparative column as a single "31 Mar" would mis-date three of these six rows.

| | prior read | 30 Jun 2026 | |
|---|---:|---:|---|
| Headline delinquency | 6.61% (31 Mar 2026) | **5.05%** | improved |
| 30–59 day bucket | $10.724M (31 Mar 2026) | — | **−53%** |
| **90-plus day bucket** | $19.216M (31 Mar 2026) | **$19.543M** | **+1.7% — essentially flat** |
| **60–89 day loans** | 2,285 (31 Mar 2026) | **4,267** | ⚠️ **+87%** |
| **Nonaccrual UPB** | $2.4M (31 Dec 2025) | **$14.1M** | ⚠️ share of 90-plus on nonaccrual, about 17% → about 72% |
| **Securitized w-avg 60+** | 0.8% | **1.1%** | ⚠️ broke a flat line |

*The 31 Mar 90-plus figure is derived from the reading below — 3.90% of the $492.725M book — rather than lifted from the comparative column.*

⚠️ **The wave is in the middle bucket, and it has not landed yet.** 90-plus was essentially flat across the quarter (+1.7%) while **60–89 nearly doubled, 2,285 → 4,267 loans**. So the 30–59 collapse is not loans curing — **the early bucket emptied because its contents aged into the next one**, which is now carrying them. **The 90-plus bucket is flat because the wave has not reached it, not because it has passed.** On this reading the headline improvement and the forward risk are the same event seen at two points in the pipeline. And the nonaccrual move is the sharper read: the 90-plus dollars are not merely larger, a much larger share of them have been reclassified as loans Figure no longer expects to accrue interest on.

⚠️ **The securitized line is the one that matters most, because it is that selection-bias mechanism turning.** The section below explains that Democratized Prime forces loans more than 60 days delinquent *out* of the collateral pool, which is why the securitized statistic stayed clean at 0.8% at both December and March. **It is now 1.1%.** The clean pool is less clean, and that is the number the selection-bias argument said should stay flat.

**So the score holds at 5.0, and the reason it holds is the same reason it was 5.0 before.** This report says the direction of travel on the loan book is why Figure is not scored higher. At the 90-plus, nonaccrual and securitized ends that direction is still adverse — the improvement is at the front of the pipeline, the deterioration is at the back, and the back is where losses are realised.

**What would change it, stated so the hold is falsifiable:** a **second consecutive quarter** of falling headline delinquency, **with 90-plus dollars flat or falling and securitized 60+ back at or below 0.8%.** One quarter of a front-bucket improvement while the back buckets fill is not that. The Q3 10-Q is due around **2026-11-14**.

⚠️ **And a reading habit worth carrying off this page.** A favourable headline can move for reasons that do not mean what they look like — here a delinquency rate fell partly because its denominator grew and its worst dollars aged into a slower bucket. [wYLDS](/reports/wylds/) shows the same shape from the other side, where a coverage ratio *improved* because its denominator shrank, and [thUSD](/reports/thusd/) shows it again where matched dollars flattered a sub-100% ratio. **When a ratio moves in your favour, check which side of it moved.**

The quarter-by-quarter detail below is retained on the March basis.

The deterioration is not an artifact of a smaller book. Between year-end and 31 March, unpaid principal grew from $396.475M to $492.725M, or 24.3%, while delinquent dollars grew 54.2%. The 30–59 day bucket rose from $2.308M to $10.724M — **365% in one quarter**. That earliest bucket matters because it feeds the 60–89 and 90-plus day buckets over the next few quarters. The 90-plus bucket had already risen 34% and represented 3.90% of the book on its own.

Those figures cover all loans held for sale, not the exact collateral pledged to PRIME's facility. They are a proxy. But Figure highlights its reliance on HELOCs, and the proxy moved adversely for three periods before improving at the headline in Q2 — with the back buckets continuing to fill, as set out above. With no public facility-level tape, it is the closest recurring filing measure.

Borrower statistics look reassuring: credit scores around 741 and combined loan-to-value around 59%. But they do not show Figure's recovery position. The facility collateral is **46.31% first lien, 51.68% second and 2.01% third** (read 2026-09-08 — first-lien share has risen from about 40%). ⚠️ **Name the third lien rather than leaving it as a remainder: subordinate liens are 53.69% combined, and that figure is easy to meet elsewhere labelled as "second lien" when it is second plus third.** with a small third-lien remainder. Second liens are paid after the first mortgage, so loss severity can exceed what the property-equity figure suggests.

The facility's contractual advance rate is up to **95%** of pledged balances, leaving about a 5% lender-level haircut. Property equity absorbs losses first, then this haircut protects the senior facility. A severe event would generally be needed to impair principal, but “59% loan-to-value” is not a 41% cushion belonging directly to PRIME holders.

## Why the two delinquency numbers disagree

Figure's securitized pools reported weighted-average delinquency of **0.8% at both 31 December 2025 and 31 March 2026** — and ⚠️ **1.1% at 30 June 2026, the first break in that flat line.** That looks inconsistent with a held-for-sale book moving from 5.46% to 6.61%. It is not inconsistent; the two groups are selected differently.

Democratized Prime requires loans more than 60 days delinquent to leave its collateral pool. The troubled loan does not vanish: it moves out of the clean pool and back toward Figure's balance sheet, where Figure must substitute collateral, repay funding or absorb the problem.

This creates selection bias. The sub-1% statistic describes loans remaining inside securitized pools; the higher held-for-sale statistic includes weaker loans returned to Figure. The clean number shows that trust protections work. It does not show that Figure's whole originated book is equally clean.

For PRIME holders, Figure's ability to replace or finance removed collateral is part of the protection. The held-for-sale trend is not a map of PRIME's pool, but it is closer to the balance-sheet risk supporting that promise than the securitized statistic.

## What changed after Q1, and it is structural

⚠️ **Most of this report is built on Q1 2026 figures (31 March). Three things have happened since, and two of them change the shape of the company rather than its numbers.**

**Q2 2026, reported 2026-08-13 and filed on Form 10-Q 2026-08-14:**

| | Q2 2026 | change |
|---|---:|---|
| Net revenue | **$226M** | +113% YoY |
| Net income | **$87M** | +192%, margin 38.8% |
| Diluted EPS | **$0.35** | +338% |
| Adjusted EBITDA | **$119M** | +126%, margin 54.6% |
| Consumer Loan Marketplace volume | **$4.3B** | +132% |
| Figure Connect volume | **$2.8B** | 65% of total, from 56% |
| Loan servicing assets | **$155M** | on $17.3B of underlying loans |

**Q3 guidance is $4.8–5.2B of marketplace volume.** ✅ **On growth and margin this is a strong quarter, and the shift toward Figure Connect is a shift toward capital-light fee revenue** — volume that earns a fee rather than volume that has to be funded.

⚠️ **Figure has taken on $600M of senior debt at 8.500%.** The notes were priced **2026-07-09** and closed **2026-07-14** — `$600,000,000` aggregate principal, **8.500% Senior Notes due 2031**, sold at par to qualified institutional buyers, net proceeds about **$587.5M**. **This is a funding layer the rest of this report does not describe**, and at 8.5% it is expensive money against a loan book whose delinquency trend is the reason this page is not scored higher.

⚠️ **And the Kiavi acquisition has closed — it is not pending.** Announced **2026-06-10** at a **$717M** total purchase price and **closed 2026-09-01** per the Form 8-K. Figure paid **approximately $590M in cash, net of cash acquired**, funded primarily from the notes above, and at closing **repaid Kiavi's existing credit facilities and terminated a Master Repurchase Agreement with Deutsche Bank**.

**What Figure bought is a different lending business from its own.** Kiavi lends to **residential real estate investors** — short-term **Residential Transition Loans** and longer-term **DSCR** rental-property loans. ⚠️ **That is investor-property credit, not owner-occupied home equity**, and it behaves differently in a downturn: an investor with a vacant rental and a borrower with a home they live in do not default at the same time or for the same reasons. **The loan book this report analyses is now not the whole loan book.**

⚠️ **Two flow figures, and they go to two different places — do not merge them.** Figure's and Kiavi's own announcements say the acquisition adds **over $7B in new annual first-lien volume to the Figure Connect marketplace**, and **more than $100M monthly to Democratized Prime**. ✅ **The second one is the one that reaches a token holder**: Democratized Prime is the facility PRIME's backing is lent into, so this changes that pipeline's composition — see [PRIME](/reports/hastra-prime/) and [wYLDS](/reports/wylds/).

⚠️ **A joint venture between Figure and Sixth Street is reported to be buying loans off Kiavi's balance sheet.** ✅ **That appears in the companies' announcements and not in the closing 8-K, so it is reported rather than filed** — recorded here at that standing.

⚠️ **None of the delinquency analysis below has been re-derived against Q2.** The three-period trend, the two disagreeing delinquency numbers and the securitization figures are all Q1-based. **A quarter in which volume grew 132% is exactly the quarter in which a delinquency ratio's denominator moves**, so those figures should be read as dated rather than current.

## How Figure funds itself

Figure can hold loans, transfer them to institutional buyers, securitize them, or pledge them into Democratized Prime. Four exits diversify funding, but at least one must remain open for new originations to keep moving. ⚠️ **Since 2026-07-14 there is also a fifth source that is not an exit at all: $600M of 8.500% senior notes due 2031.** **That is balance-sheet leverage rather than a way of moving loans off it**, and it services at a fixed 8.5% whether or not any of the four exits stays open. **The figures in this section are Q1 and predate it.**

Collateral in unconsolidated securitization vehicles rose from **$4.596B at 31 December 2025 to $6.766B at 31 March 2026**. The trusts are isolated from Figure's creditors. A third-party special servicer handles delinquent and defaulted loans and cannot be removed without cause—a meaningful independent protection.

Democratized Prime is another outlet. Its home-equity pool has recently lent roughly $350M, with utilization at **roughly two-thirds** and idle funds earning the YLDS-linked rate. Growth can signal a functioning market, or greater reliance on the facility if other buyers pull back.

⚠️ **At the Kiavi close, two of Kiavi's funding lines were retired rather than inherited.** Per the **2026-09-01 Form 8-K (Item 2.01)**, Figure **repaid in full** all outstanding obligations under the **Third Amended and Restated Credit Agreement** dated 2024-12-19, with U.S. Bank Trust Company, National Association as paying agent; and **Kiavi Funding, Inc. and Kiavi Funding Trust 2 terminated** their **Master Repurchase Agreement** with **Deutsche Bank AG, New York Branch**, dated 2025-09-19.

⚠️ **Read the entity, because this is the exact substitution this report marks down elsewhere:** the credit agreement is *"among Kiavi, U.S. Bank Trust Company … and the lenders party thereto"* — **these were Kiavi's facilities, not Figure's**, and at least one secondary account has already described the first as Figure's own. ✅ **What it means for funding is the same either way:** the warehouse and repo leverage that had carried Kiavi's originations is gone, and the book behind it now sits on Figure's side of the house, funded by **unsecured notes at 8.500%** rather than by secured lines against the loans themselves.

✅ **And the same filing says what happened to the collateral:** *"Upon such repayment and termination, all related financing documents were terminated and **all liens securing the obligations thereunder were released**."* **The acquired book is unencumbered** — it can be pledged or securitized again rather than arriving already committed.

⚠️ **The honest characterisation is a swap rather than a deterioration.** A master repurchase agreement is **margin-callable and collateral-dependent** — it is the kind of funding that gets re-margined or pulled precisely when asset values fall. Retiring it removes a run-risk channel that is correlated with stress. **The notes run to 2031 with no rollover**, against a repo line that rolls constantly. What Figure has taken on instead is chronic and predictable: roughly **$51M a year** of coupon, payable in good conditions and bad.

⚠️ **What is NOT established, stated rather than glossed: the 8-K does not disclose the SIZE of either retired facility.** So the direction of the swap is known and its magnitude is not — settling that needs Kiavi's pre-merger warehouse and repo capacity, which the filing does not carry. **The offset is real; whether it is large enough to matter is unmeasured.**

Two smaller details from the same filing. The notes closed **2026-07-14** and the merger **2026-09-01**, so Figure **carried the 8.500% coupon for about seven weeks before the money was deployed**. And the consideration was funded *"primarily"* from the note proceeds — **primarily, not solely**, so some other source contributed and the filing does not say what.

Two contingent obligations matter. Figure may have to repurchase loans defaulting within 30 to 90 days of origination, an early underwriting signal. It also commits to replenish securitization reserves; the filings call that obligation **“not limited”**, although management does not expect material funding.

The group also discloses a history of losses and warns that it may not maintain profitability. This is not a near-term insolvency claim: it means volume alone does not prove durable earnings once funding costs, repurchases and reserve calls are counted.

## The regulated subsidiary

FCC is the strongest node in the stack. It is a full SEC reporting registrant, and KPMG has audited its annual statements since 2024. The FY2025 opinion was clean. At **31 March 2026**, FCC reported $601.524M of qualified assets against a $599.706M certificate reserve, about 100.3% coverage. The assets were $211.3M of Treasuries and money-market funds plus $389.556M of overnight Treasury-collateralized repo, with no Level 3 holdings.

That quarterly information is unaudited. FCC's Q1 filing explicitly says its interim financial information has not been audited; the KPMG opinion applies to the annual statements. The distinction matters because “SEC-filed” and “audited” are not interchangeable.

Three less obvious facts qualify the strong reserve. First, the certificates are explicitly **unsecured obligations of FCC**, backed solely by FCC's assets. The Investment Company Act deposit rule is a regulatory asset test, not a security interest or bankruptcy-remote trust for certificate holders.

Second, at 31 March UMB Bank N.A. was both counterparty to the entire $389.556M repo book—64.8% of qualified assets—and securities custodian. A second repo arrangement was unused. Treasury collateral is strong, but one institution spans execution and custody.

Third, FCC's interim “Liquidity and Going Concern” note concludes it has twelve months of funding because its parent committed to pay invoices and periodically forgive intercompany balances. This is **management's conditional interim assessment, not an auditor's going-concern qualification**; the annual opinion is clean.

FCC gives wYLDS high-quality assets and recurring disclosure. The wrapper remains one legal layer removed: Hastra controls account mapping and redemption, without a demonstrated bankruptcy-remote retail reserve. For PRIME, FCC is only the first step before certificates enter Figure Lending's facility.

## Governance and related parties

Governance is weakest because dependencies overlap across a listed parent, lender, regulated certificate issuer, advisers and transfer agents. Interchangeable use of “Parent” can assign an obligation to the wrong entity.

Hastra is a related party, not a subsidiary, with no public-company disclosure obligation. It licenses nontransferable Figure software and pays a **0.50% royalty** on transaction revenue. The initial term runs to December 2028 and renews annually. Figure records Hastra's YLDS as “Debt, current to related parties,” but the specific filing remains unresolved.

At 31 March 2026, $472.990M of $598.047M in certificates—79%—was held by Figure's parent and controlled entities. The filings do not put Hastra in that set. This is entity concentration, not director or executive ownership.

Figure issues the certificate, originates and services loans, runs the facility, supports FCC and licenses Hastra's software. That reduces unknown-party risk but correlates failures. The 5.0 score reflects an unusually analyzable company whose integration makes legal boundaries and independent checks essential.

## Bottom line

Figure is a real lender with real institutional plumbing, and by the standards of anything else backing a
crypto token it is remarkably well documented. Most of what this report says comes from its own SEC filings
rather than from marketing material, which is not something that can be said of most issuers in this space.

The concern is direction rather than solvency. The loan book is deteriorating, it has done so for three periods
running, and the earliest-stage arrears are growing fastest — which usually means the trend continues before it
turns. At the same time, the clean statistics that are easiest to find describe the pools that had their
problem loans removed, so the reassuring number and the worrying number are not measuring the same thing.

For a token holder the practical reading is this. The certificate side, which backs wYLDS, is the strong part
and is largely insulated from the lending risk. The lending side, which is where PRIME's yield and much of its
backing sit, is exposed to how these loans perform — and the protection at that layer is thinner than the
headline loan-to-value figures imply. Neither is a reason to avoid the stack, and neither is a reason to treat
it as a cash equivalent.

*This report uses Figure Technology Solutions and Figure Certificate Company filings available through [EDGAR](https://www.sec.gov/edgar/browse/?CIK=2064124&owner=exclude), Figure's published facility terms, and public protocol and account records. It is counterparty analysis for downstream token holders, not equity investment research. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-09-09 — **the four axes beneath the overall are published for the first time; no score changed.** ⚠️ **This report had carried an Overall of 5.0 with no breakdown at all**, so the composite could not be argued with — the reader saw a number and no way to test it. **Balance sheet 5.5 · Credit quality 5.0 · Funding model 5.5 · Governance 4.5** are the marks the analysis has been carrying, now shown against the sections that argue them, matching the convention the companion [MSTR](/reports/mstr) report has always followed. ✅ **The Q2-2026 content was already current** and was checked rather than assumed: headline delinquency 6.61% → 5.05%, the 90-plus bucket essentially flat at +1.7%, the 60–89 bucket at 2,285 → 4,267, and nonaccrual UPB $2.4M → $14.1M all present and correctly based. **Overall holds at 5.0.**

*Revision history: 2026-08-23 — **refreshed to Figure Technology Solutions' Q2-2026 10-Q (filed 2026-08-14; unaudited interim); Overall held at 5.0.** The delinquency series this report's thesis rests on gained its fourth data point. **Headline held-for-sale delinquency fell 6.61% → 5.05%**, and the improvement is genuine rather than a denominator effect: the book grew **17.8%** — the exact shape that manufactures a false recovery — so the numerator was tested separately and **delinquent dollars fell 9.9%**. Both legs moved favourably, and the 30–59 day bucket fell 53%, reversing the 365% spike recorded for Q1. Method control: reconstructing 31 December 2025 from the new filing's comparative column returns 5.457% against the 5.46% published here, so the new figure sits on the basis used here.

⚠️ **The score is held anyway, and the reasoning is on the page rather than implied — a held score against a favourable headline reads as refusing to update unless the argument is shown.** The trend did not reverse, it **matured**, exactly as the 30–59 spike implied — it "feeds the 60–89 and 90-plus day buckets over the next few quarters": **90-plus dollars were essentially flat, $19.216M → $19.543M (+1.7%)**, while the 60–89 bucket **nearly doubled, 2,285 → 4,267 loans** — a wave that has aged out of the earliest bucket and is now sitting one step short of 90-plus — and **nonaccrual UPB went $2.4M → $14.1M**, taking the share of 90-plus loans on nonaccrual from about 17% to about 72%. **Most importantly, the securitized weighted-average 60+ figure broke its flat line at 0.8% (December and March) and printed 1.1%.** That is the selection-bias mechanism turning: Democratized Prime forces 60+ loans out of the collateral pool, which is why that number had stayed clean — and the clean pool is now less clean. The improvement is at the front of the pipeline and the deterioration is at the back, where losses are realised.

**The hold is made falsifiable rather than left as judgement:** what would move it is a **second consecutive quarter** of falling headline delinquency **with 90-plus dollars flat or falling and securitized 60+ back at or below 0.8%**. Q3 10-Q due around 2026-11-14.

**Also added, as a reading habit rather than a per-report caveat:** a favourable headline can move for reasons that do not mean what they look like. Here a rate fell partly because its denominator grew and its worst dollars aged into a slower bucket; [wYLDS](/reports/wylds/) shows the inverse, a coverage ratio improving because its denominator shrank; [thUSD](/reports/thusd/) shows matched dollars flattering a sub-100% ratio. **When a ratio moves in your favour, check which side of it moved.** `last_verified` is **not** bumped — only the Figure filing layer was refreshed, and the facility terms and on-chain material in this body still date from the earlier pass.*
