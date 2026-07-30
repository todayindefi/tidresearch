---
asset: "Figure"
slug: "figure"
aliases: ["Figure", "FIGR", "Figure Technology Solutions", "Figure Lending", "Figure Certificate Company", "FCC"]
chains: []
category: "tradfi-equity"
assessment_type: "light"
audience: "retail"
date: "2026-07-31"
last_verified: "2026-07-31"
featured: false
production: true
issuer: "Figure Technology Solutions, Inc. (Nasdaq: FIGR)"
yield_bearing: false
underlying_assets: []
companion_report: "hastra-prime"
overall_score: 5.0
---

# Figure — Counterparty Risk Report
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
loans Figure holds for sale has now risen three periods running — from about 3.9% to about 5.5% to roughly
6.6% — and the earliest-stage bucket, the one that feeds the later ones, grew fastest. The loan book itself
also grew, so this is not a shrinking-denominator effect: the overdue balances grew more than twice as fast as
the book.

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
| **Loan quality trend** | Adverse. Delinquency on loans held for sale has risen three periods running, and the earliest-stage bucket is growing fastest. |
| **The regulated part** | Figure Certificate Company files with the SEC, is KPMG-audited annually, and holds Treasuries, money-market funds and Treasury-backed repo. Genuinely strong, and separate from the lending risk. |
| **Lender's cushion** | The facility advances up to 95% against pledged loan balances, so the cushion protecting lenders is around 5% — not the ~40% homeowner equity figure the loan-to-value stats might suggest. |
| **Governance** | The weakest area. A multi-entity group, a regulated subsidiary whose twelve-month liquidity rests on a written parent commitment, and a related company running a public protocol on licensed Figure software with no disclosure obligations of its own. |
| **Biggest risk** | That the loan book keeps deteriorating while the parts of it that matter most to token holders remain the hardest to see. |

## The two halves of Figure

The Figure name covers several legal entities. Figure Technology Solutions, Inc. is the Nasdaq-listed parent. Figure Lending, LLC originates and services loans. Figure Certificate Company, or FCC, is a separate SEC reporting registrant that issues YLDS, the certificate underneath wYLDS.

That distinction determines which risks flow into which token. A wYLDS holder depends mainly on FCC: Hastra holds YLDS and wraps it for retail use. A PRIME holder depends on FCC **and** Figure Lending because the certificates behind staked PRIME are lent into Democratized Prime, a senior facility secured by loans Figure Lending owns. The regulated Treasury-reserve node is relevant to both, but it does not turn the lending exposure above it into a Treasury claim.

Signum Ltd., doing business as Hastra, is a disclosed Figure related party, but it is not a subsidiary and Figure does not consolidate it. Hastra issues wYLDS and PRIME and runs their redemption process; its closeness to Figure does not give token holders direct reporting rights against FCC.

FCC's filing uses “Parent” for more than one group entity, so a parent commitment cannot always be assigned to one named company. The practical rule is to keep the certificate issuer, lender and wrapper operator separate.

## The loan book

The most useful credit series is Figure's loans held for sale: loans still on its balance sheet awaiting a whole-loan transfer, securitization or another funding exit. On a consistent basis — loans at least 30 days late plus loans in forbearance, divided by total unpaid principal — delinquency rose from **3.91% at the end of 2024 to 5.46% at 31 December 2025 and 6.61% at 31 March 2026**.

The deterioration is not an artifact of a smaller book. Between year-end and 31 March, unpaid principal grew from $396.475M to $492.725M, or 24.3%, while delinquent dollars grew 54.2%. The 30–59 day bucket rose from $2.308M to $10.724M — **365% in one quarter**. That earliest bucket matters because it feeds the 60–89 and 90-plus day buckets over the next few quarters. The 90-plus bucket had already risen 34% and represented 3.90% of the book on its own.

Those figures cover all loans held for sale, not the exact collateral pledged to PRIME's facility. They are a proxy. But Figure highlights its reliance on HELOCs, and the proxy has moved adversely for three periods. With no public facility-level tape, it is the closest recurring filing measure.

Borrower statistics look reassuring: credit scores around 741 and combined loan-to-value around 59%. But they do not show Figure's recovery position. The facility collateral is about **40% first lien and roughly 58% second lien**, with a small third-lien remainder. Second liens are paid after the first mortgage, so loss severity can exceed what the property-equity figure suggests.

The facility's contractual advance rate is up to **95%** of pledged balances, leaving about a 5% lender-level haircut. Property equity absorbs losses first, then this haircut protects the senior facility. A severe event would generally be needed to impair principal, but “59% loan-to-value” is not a 41% cushion belonging directly to PRIME holders.

## Why the two delinquency numbers disagree

Figure's securitized pools reported weighted-average delinquency of **0.8% at both 31 December 2025 and 31 March 2026**. That looks inconsistent with a held-for-sale book moving from 5.46% to 6.61%. It is not inconsistent; the two groups are selected differently.

Democratized Prime requires loans more than 60 days delinquent to leave its collateral pool. The troubled loan does not vanish: it moves out of the clean pool and back toward Figure's balance sheet, where Figure must substitute collateral, repay funding or absorb the problem.

This creates selection bias. The sub-1% statistic describes loans remaining inside securitized pools; the higher held-for-sale statistic includes weaker loans returned to Figure. The clean number shows that trust protections work. It does not show that Figure's whole originated book is equally clean.

For PRIME holders, Figure's ability to replace or finance removed collateral is part of the protection. The held-for-sale trend is not a map of PRIME's pool, but it is closer to the balance-sheet risk supporting that promise than the securitized statistic.

## How Figure funds itself

Figure can hold loans, transfer them to institutional buyers, securitize them, or pledge them into Democratized Prime. Four exits diversify funding, but at least one must remain open for new originations to keep moving.

Collateral in unconsolidated securitization vehicles rose from **$4.596B at 31 December 2025 to $6.766B at 31 March 2026**. The trusts are isolated from Figure's creditors. A third-party special servicer handles delinquent and defaulted loans and cannot be removed without cause—a meaningful independent protection.

Democratized Prime is another outlet. Its home-equity pool has recently lent roughly $350M, with utilization at **roughly two-thirds** and idle funds earning the YLDS-linked rate. Growth can signal a functioning market, or greater reliance on the facility if other buyers pull back.

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
