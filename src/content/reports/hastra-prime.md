---
asset: "Hastra PRIME"
slug: "hastra-prime"
aliases: ["PRIME", "Hastra PRIME", "Staked wYLDS"]
chains: ["solana", "ethereum"]
category: "vault-share"
underlying_assets: ["wYLDS", "YLDS"]
assessment_type: "light"
audience: "retail"
companion_report: "wylds"
date: "2026-07-25"
last_verified: "2026-07-31"
featured: false
production: true
issuer: "Hastra (Figure / Provenance)"
yield_bearing: true
volatility_score: 6.0
structural_score: 5.5
redemption_score: 6.0
underlying_score: 5.5
liquidity_score: 6.0
issuer_score: 6.5
overall_score: 5.0
market_cap_approx: 480000000
---

# Hastra PRIME — Risk Report
**Moderate-elevated risk · 5.0 / 10**
*Vault share · Ethereum + Solana · Issuer: Hastra (Signum Ltd.), with Figure/YLDS backing · ~half a billion dollars · verified 2026-07-30*

*Independent backing, reserve segregation, cross-chain supply, redemption-buffer health, warehouse turnover, and liquidity are on the [dashboard](https://todayindefi.github.io/backing-monitor/?asset=hastra-prime), updated hourly.*

## Summary

PRIME is a yield-bearing token issued by Hastra. You get it by staking
[wYLDS](/reports/wylds) — a dollar token backed by US Treasuries — and PRIME pays
you by rising in price rather than by sending you extra tokens. One PRIME is worth
a little over $1 and rising, and the reference yield is around 7% a year. The rate
floats with how much of the facility is lent out and is published by the issuer.
Total size is roughly half a billion dollars, most of it on Ethereum and the rest
on Solana.

The most important thing to understand is that the yield does not come from the
Treasuries. Hastra lends those dollars out again, into a Figure-run facility called
Democratized Prime that finances home-equity lines of credit — loans US homeowners
take against their houses. Hastra's claim is senior and collateralized by HELOCs
that Figure Lending owns, so it ranks ahead of Figure's own money. But this is
where the money actually sits, not just where the yield comes from: getting paid
back — not only getting paid — depends on those homeowners performing and on
Figure being able to keep bundling and selling the loans. What protects a holder
is that the claim ranks first and is over-collateralized, not that there are
Treasuries behind it. The Treasury layer pays overnight SOFR minus 0.35% — around
3% at present — so **roughly 3 to 4 percentage points of PRIME's yield is payment
for taking HELOC credit risk. That spread is the entire product.** PRIME is a
private-credit position stacked on a Treasury-backed token: riskier than the token
you stake to get it, and not a cash equivalent.

Both layers hold up on the evidence. The Treasury layer is unusually well
documented: YLDS is issued by Figure Certificate Company, a full SEC reporting
registrant ([CIK 0001974395](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001974395)),
whose audited FY2025 statements and unaudited Q1 interim filing show $601.5M of
qualified assets against a $599.7M certificate reserve at 31 March 2026 — about
100.3% — held in Treasuries, money-market funds, and Treasury-collateralized
overnight repo, with no hard-to-value assets. Those filings also confirm YLDS holds
no HELOC credit of its own — the exposure comes from those certificates being lent
into the facility once wYLDS is staked. On PRIME itself,
independent chain reads show the staking vault holds slightly more wYLDS than the
PRIME it backs, at accrued value — fully backed, and checkable without taking
Hastra's word for it.

The weak points are exit and concentration. The practical way out is selling on
Ethereum's Uniswap V3 pool, where around $5M can be sold within a few basis points
before a hard wall set by the pool's USDC side. The official redemption route means
unstaking PRIME into wYLDS, then asking Hastra to sell YLDS off-chain for USDC. The
wrapper holds a large claim on the lending pool that comfortably covers the current
queue, but turning that claim into dollars still requires an administrator
and an off-chain sale. Nearly everything in the stack also
reduces to one company: Figure issues the underlying, runs the lending facility,
and licenses the software Hastra's protocol runs on. And the SEC registration
attaches to the Treasury certificate underneath, not to Hastra's wrapper — the
claim a holder actually owns is unregulated.

## At a glance

| | |
|---|---|
| **Backing** | PRIME reconciles to staked wYLDS, but the certificates behind that wYLDS are lent into the Democratized Prime facility rather than held as Treasuries — so a holder's claim runs through senior, HELOC-collateralized lending. Separately, FCC reported $601.524M of qualified assets against a $599.706M YLDS reserve at 31 March 2026, and chain reads independently show wrapper coverage above 100%. Those measures describe the certificate issuer, on different dates and denominators, not where a PRIME holder's certificates sit. |
| **How to exit** | Sell near NAV on Ethereum Uniswap V3, or unbond PRIME→wYLDS and request wYLDS→USDC. The primary path is admin-fulfilled and depends on off-chain YLDS sales. |
| **Liquidity** | Around $5M can be sold on Ethereum within a few basis points, then a hard ceiling set by the pool's USDC side — a little over 1% of market value, and it moves daily. Good execution below it, campaign-supported, no gradual warning as you approach it. |
| **Yield** | Around 7% through NAV growth, sourced from a senior facility collateralized by Figure-owned HELOCs—not from the Treasury/repo assets backing YLDS. The rate floats with facility use and is published by the issuer. The Treasury layer pays SOFR minus 0.35%, around 3%, so roughly 3 to 4 points of PRIME's yield is payment for HELOC credit risk. |
| **Used as collateral** | Heavily. Over half the supply is posted against borrowing on Morpho and Kamino at 86–88% LTV. Priced by an accrued-value oracle, so market dips don't trigger liquidations — but the mark can exceed what the collateral would sell for. |
| **Admin & custody** | Hastra controls fulfillment and freeze functions; the token stack spans Ethereum, Solana, and Provenance. Hastra is a disclosed Figure related party and uses licensed Figure software. |
| **Regulated?** | FCC/YLDS is SEC-registered and KPMG-audited. Hastra and PRIME are not, so holders rely on an unregulated wrapper and staking stack above the regulated certificate. |
| **Biggest risk** | Deteriorating private-credit performance inside an opaque facility, imperfect reserve segregation, and an admin-mediated primary exit with virtually no instant USDC buffer. |

## Risk by axis

**Volatility — 6.0.** PRIME accrues through its NAV rather than targeting a fixed $1 market price. Its meaningful observed secondary-market drawdown was about 4.4%; the quoted $1.50 all-time high appears to be a seed-pool artifact and is not useful evidence of volatility. A rising NAV and active liquidity incentives can keep market pricing orderly in normal conditions, but neither removes credit risk from the asset accumulating underneath.

Figure's filings disclose Democratized Prime as a **senior** lending facility **collateralized by** HELOCs owned by Figure Lending, not direct ownership of a miscellaneous loan pool. Seniority and collateralization should reduce loss severity relative to a junior or unsecured position. They do not eliminate the exposure. Falling home values, borrower delinquency, funding costs, or a frozen securitization market can still slow repayment or impair returns. Figure's broader loans-held-for-sale delinquency rose from 3.91% to 5.46% and then 6.61%, while the PRIME-specific warehouse loan tape remains private.

The stronger legal description is balanced by limited history and concentration in one origination/securitization channel. The [warehouse monitor](https://todayindefi.github.io/backing-monitor/?asset=hastra-prime), updated hourly, tracks inventory and EDGAR ABS-15G securitization cadence. A longer stress record and facility-level delinquency would support a higher mark; stalled turnover or rising losses would move it down.

**Liquidity — 6.0.** Ethereum Uniswap V3 has recently shown under $10M of pool liquidity. That gives holders a practical immediate exit for ordinary size and is materially better than wYLDS's standalone market. It also creates a price-discovery path independent of Hastra's primary redemption process.

Both venues have now been measured directly, and both turn out to be capped the same way: by how much of the other side of the pool there is to sell into. On Ethereum that is roughly $6.4M of USDC; on Solana, measured from the pool's own liquidity rather than estimated from a router, it is roughly $5.9M of PYUSD. Together that is about 2.7% of PRIME's market value — but the two are separate exits in different currencies, so reaching both means splitting the position across two chains rather than selling once.

Pool size is not the same as tradeable size, so the Ethereum exit was measured by quoting actual sale sizes against that pool. Selling PRIME for USDC costs under a basis point for ordinary size and only a few basis points at $5M. Then it stops: once the pool's USDC side is consumed — roughly $6.4M when measured, and it moves day to day — additional PRIME returns no additional dollars at all. Execution is excellent right up to a cliff, with no gradual worsening to warn a seller they are approaching it. Around $5M remains the sensible ceiling for a single low-slippage exit on that venue, and that ceiling shrinks whenever the pool rotates toward PRIME. The current figure is on the dashboard, updated hourly.

The limitation is durability. The deepest Ethereum market is supported by the PRIME Roots campaign, so observed volume should not be assumed to persist after incentives. The quote ladder is also a single-block snapshot, not guaranteed capacity. The pool was noticeably USDC-heavy when measured, and that balance is what funded the quoted exits; the ratio matters more than headline TVL, because capacity will shrink proportionally if the pool rebalances toward PRIME. Ethereum is now the larger of the two deployments. Larger exits can therefore face both pool-slippage risk and the operational risk of a market whose depth was built during a growth campaign.

Primary liquidity ultimately bottoms out in YLDS. FCC reported $263.4M of certificate surrenders during Q1 2026 against a roughly $600M book, evidence that the **YLDS layer** can clear substantial volume at face plus accrued interest. It is not evidence that PRIME can redeem the same amount on demand: PRIME must first unbond into wYLDS, Hastra must process the wrapper request, and off-chain funds must travel back to the redeeming chain. Better sustained, non-incentivized DEX depth and a funded wrapper-level buffer would improve this axis.

**Structural — 5.5.** Two independent audits are meaningful positives. [Informal Systems](https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf) found a critical Solana vault-account validation flaw and a share-inflation issue; both were remediated, and all findings were closed. [Sherlock](https://hastra.io/sherlock-hastra-audit.pdf) subsequently reviewed the Solana and Ethereum stack and reported no critical or high-severity findings. A serious bug found before deployment is double-edged evidence, but detection, repair, and a clean second review are substantially better than relying on an unaudited codebase.

Independent reads reconcile PRIME supply with wYLDS in the staking vault, and FCC's audited §28 disclosure independently corroborates the YLDS coverage ratio. The caveat is legal and operational segregation. Provenance balances show much of the identified reserve YLDS in Figure operational accounts containing loan assets rather than a clean, named, bankruptcy-remote wrapper reserve. Hastra's [proof of reserves](https://hastra.io/proof-of-reserves) is directionally supported, but the mapping from those accounts to wYLDS claims still depends on Hastra and Figure.

The related-party disclosure cuts both ways. Hastra is not a Figure subsidiary, yet it is not fully arm's-length: its YLDS is booked as current debt to a related party, it pays Figure a 50-basis-point revenue royalty, and its protocol runs on a nontransferable Figure software licence whose initial term runs to December 2028 and renews annually thereafter. This makes the operating relationship more legible and reduces the “unknown offshore wrapper” concern. It also correlates failures that would otherwise be independent, and introduces termination and breach risk. Live mint and freeze controls, unproven bankruptcy remoteness, and majority-Ethereum implementation exposure keep the score at 5.5.

One thing a holder should know that the token's own documentation does not emphasise: PRIME is used far more as collateral than as a holding. Across Morpho on Ethereum and Kamino on Solana, well over $200M has been borrowed against posted PRIME — more than half the token's total value — at loan-to-value ceilings of 86% and 88%, the latter allowing roughly eight times leverage. There is currently no bad debt in any of those markets.

That matters less than it first appears, for a reason worth understanding. Lending venues price PRIME from a Chainlink exchange-rate feed that tracks its accrued value, not from its market price. So a fall in the secondary market cannot by itself trigger liquidations, and the reflexive spiral you would otherwise expect from a thinly traded asset at 88% LTV is structurally absent. That is a genuine design strength.

The cost is the mirror image. The value the venues mark against is set by Hastra's own reward accrual, so Hastra now effectively determines the collateral value underpinning that borrowing — not merely the yield paid to holders. And the mark can sit above what the collateral would actually fetch: PRIME has traded several percent below its accrued value before, while the value itself was unaffected. The scenario that binds is not a market dislocation but a genuine decline in the accrued value — a credit problem in the HELOC facility — because that is what would force liquidators to sell into the same shallow market described above, at precisely the moment the incentive-funded liquidity would also be leaving.

**Redemption — 6.0.** The picture behind the redemption queue is better than an earlier reading suggested. The wrapper's own account holds a large claim on the lending pool its certificates are deployed into — enough to cover the current redemption queue comfortably, with a substantial further claim on the pool's un-lent portion behind that. Requests in normal conditions have cleared one-for-one, typically well inside an hour.

What has not changed is the part that actually binds. Getting dollars still requires selling certificates off-chain, during market hours, through a single administrator, and PRIME holders must first unstake into wYLDS before joining that queue at all. Depth determines whether the money is there; none of it makes the exit faster. And in a genuine rush for the exit the pool's own mechanics work against a holder: as the wrapper draws down the un-lent portion to meet redemptions, less remains available, so the route narrows exactly when it is most wanted.

So this is a redemption process that is well resourced for an ordinary queue and still administratively gated under stress — which is why the secondary market, not the redemption queue, remains the route that matters if you need out quickly.

**Underlying — 5.5.** PRIME's proximate underlying is wYLDS, which wraps FCC-issued YLDS. Audited FY2025 statements and an unaudited Q1 interim filing show that at March 31, qualified assets were $601.524M against a $599.706M certificate reserve. Fair-value disclosure showed $211.3M of Level 1 Treasuries and money-market funds, $389.6M of Level 2 Treasury-collateralized repo, and no Level 3 assets; cash held outside the investment portfolio was just $0.7M, at a single bank. A clean KPMG opinion on the annual statements and ICA §28 reporting make this more than an issuer dashboard claim. One distinction matters more than any of those figures. They describe the certificate issuer's own balance sheet. They do not describe where the certificates backing staked PRIME are held — those have been lent into the Democratized Prime facility, so the Treasury quality above is the quality of the *borrower's* reserve requirement, not of a PRIME holder's direct claim.

One structural point deserves more weight than the coverage ratio. The certificates are explicitly unsecured obligations of Figure Certificate Company, backed solely by its assets. The qualified assets sit on deposit at a custodian because the Investment Company Act requires it, but that is a regulatory asset test, not a security interest — a certificate holder is an unsecured creditor of FCC, not the beneficiary of a bankruptcy-remote trust. Read together with the co-mingled reserve accounts on Provenance, this means there is no bankruptcy-remote ring-fence at either layer of the stack. Coverage can be 100.3% and that still be true.

About 65% of qualified assets were repo rather than outright Treasuries. The repo was overnight and Treasury-collateralized, so its quality remains high, but it adds counterparty and settlement exposure that is concentrated in one name: the entire repo book — 65% of qualified assets — faces UMB Bank N.A., which is also the custodian holding the securities. A second repo facility is documented but was unused at quarter-end. The collateral is overnight Treasuries, so quality is high; the concentration is nonetheless a single point of failure rather than a diversified book. The filings arrive with roughly a 45-day lag—the March 31 view was filed May 15—so they should confirm live chain data rather than replace it. They also show 79% certificate concentration among Figure's parent and parent-controlled affiliates and dependence on Figure's parent to pay FCC operating costs. The latter is a pass-through operating model, not evidence of balance-sheet distress, but it is a dependency in a parent failure.

The certificates behind staked PRIME are then lent into the senior, HELOC-collateralized facility, which is where a holder's exposure actually lies. Hastra reports average LTV around 59%, FICO around 742, and cumulative loss below 1.25%; these figures resemble independently rated FIGRE Trust securitizations, which is encouraging. The warehouse's loan-level performance remains unavailable, and the facility had expanded rapidly to $352.0M of certificates by March 31. YLDS has no HELOC exposure of its own; staking is what routes the underlying certificates into the facility, and that facility needs monitoring on its own terms.

It is worth being precise about how much protection that seniority actually provides: the facility lends against pledged loan balances at an advance rate of about 95%, so the cushion standing between it and a loss is roughly 5% of those balances — not the forty-odd percent that the loans' 59% loan-to-value might suggest. Those are two different cushions and they apply in sequence: house prices have to fall far enough to erode the homeowner's equity before the loans themselves take losses, so a severe housing event is still required; only then does the facility's much thinner margin start absorbing them. At the facility layer, a holder relies on the claim ranking first, its over-collateralization, and [Figure](/reports/figure) continuing to swap out loans that go bad; the Figure report covers that lender-level structure in more detail.

Two things have moved against this axis. Figure's delinquency on loans held for sale has risen for a third consecutive period — 3.91%, then 5.46%, now 6.61% — and the earliest-stage bucket grew fastest, which usually means the later buckets follow. Securitized pools stayed clean at 0.8% over the same period, and that gap is the uncomfortable part: it suggests the loans that cannot be sold are accumulating where they are, which is the same balance sheet that collateralizes this facility. Separately, the facility itself has stopped growing, sitting at roughly the same size as at the end of March while PRIME has continued to expand.

**Issuer — 6.5.** Figure Certificate Company is a full SEC reporting registrant, not just the issuer of a token described as registered. FCC files 10-K and 10-Q reports with officer certifications; KPMG has audited it since 2024 and issued a clean opinion without a going-concern qualification or material weakness. That opinion covers the annual statements. FCC's own interim filing carries a liquidity and going-concern note in which it concludes it has twelve months of funding specifically because its parent has committed, by letter, to pay its invoices directly and periodically forgive intercompany balances. This is a conditional conclusion resting on parent support, not an independent one. ICA §28 requires qualified assets above the certificate reserve plus minimum capital, and FCC's disclosed 100.3% coverage at 31 March 2026 is distinct from the wrapper's live on-chain ratio; separate sources show that both layers are covered above 100%, not that they share one measure. Figure Technology Solutions itself trades on Nasdaq under FIGR.

Figure, the company behind this token, is covered separately in [Figure](/reports/figure).

The filings also make the limitations measurable. $472.990M of $598.047M in certificates—79%—was held by Figure's parent and entities controlled by the parent. Hastra's own YLDS cannot be assigned to that bucket: the filings never place Signum Ltd. inside the “affiliate entities controlled by the Parent” set, so this report does not count its holdings there. Board and executive holdings were only about $15,700, so this is entity concentration, not insider ownership. FCC reported just $292K of equity on a $601.8M balance sheet because its parent pays operating expenses directly, including $471K during Q1, and records them as capital contributions. That structure is designed to pass assets and obligations through; it should not be misread as immediate distress. The risk is continued parent dependence.

Skepticism remains warranted above the certificate layer. Figure's loans-held-for-sale delinquency rose from 3.91% to 5.46% year over year, and a contested 2025 exchange with DefiLlama raised questions about whether Figure's claimed Provenance scale was independently reproducible. These are not evidence of fraud, but facility-level credit and chain-scale claims still require cross-checking. Strong regulated reporting alongside incomplete warehouse transparency supports 6.5.

## Bottom line

PRIME's backing is real and independently documented. FCC's audited FY2025 statements and unaudited Q1 interim filing independently confirm the roughly 100.3% YLDS coverage ratio and show a high-quality asset pool of Treasuries, money-market funds, and Treasury-collateralized repo with no Level 3 exposure. They also show that YLDS itself contains no HELOC credit. PRIME's exposure comes from what happens next: the certificates behind staked PRIME are lent into the HELOC-collateralized facility, so the backing is deployed into consumer credit rather than held in Treasuries. Seniority and over-collateralization, not Treasury backing, are what stand between a holder and a loss.

The senior facility description is safer than direct HELOC ownership, but the accumulated credit evidence has moved adversely. Figure's delinquency on loans held for sale rose from 3.91% to 5.46% and then 6.61%, with the 30–59 day bucket up 365%, while securitized pools stayed flat at 0.8%. That gap suggests weaker loans are accumulating on the same balance sheet that collateralizes the facility. The facility itself has also stopped growing at roughly its March size while PRIME has continued to expand, and the reference yield is now lower than previously reported — less compensation for the same risk.

Hastra's related-party status is similarly two-sided. It is not a Figure subsidiary, and its holdings cannot be assigned to the $473M parent-controlled bucket. Licensed software, a 50-basis-point royalty, related-party accounting, and a contract that renews annually after its initial term make the counterparty less mysterious but failures more correlated.

The 5.0 score reflects how those risks compound. Well over $200M has been borrowed against PRIME while a clean market exit is only around $5M, and the HELOC exposure sits inside the backing chain rather than beside it. Most importantly, the risks that bind are partly unobservable by design: per-loan performance in the facility is not public, the wrapper issuer files nothing, and reserve account-to-claim mapping depends on the issuer's own labels. The deterioration that is visible is showing up in exactly the area that cannot be watched directly. A risk that cannot be monitored deserves a wider margin than one that can.

That is why the mark falls to 5.0, but not lower. Backing still reconciles roughly 1:1, two audits closed their findings, no lending market has bad debt, and the base certificate issuer is SEC-registered with KPMG-audited annual statements. PRIME can fit a small private-credit allocation for a holder who understands the HELOC facility, administrator-mediated redemption, and multichain implementation. It is not a cash equivalent, a direct Treasury claim, or an instant trustless redemption product.

**Watch items:** reserve-account segregation; the USDC buffer and pending redemption queue; facility inventory and securitization cadence on the [monitor](https://todayindefi.github.io/backing-monitor/?asset=hastra-prime), updated hourly; Figure loan delinquency and any facility-level disclosure; Ethereum pool depth after incentives; the Q2 FCC filing expected around mid-August; and termination or breach of the Figure software licence the protocol runs on.

*This report uses public documentation, market data, two published audits, independent Solana, Ethereum, and Provenance reads, and FCC filings available through [EDGAR](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001974395). Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-23 — initial publish at 5.0. 2026-07-24 — 5.0 → 5.5 after named audits and live PoR. 2026-07-25 — 5.5 → 6.0 after measured Ethereum liquidity and verified calm-market redemption. 2026-07-27 — independent on-chain verification: backing confirmed 1:1, but reserve found co-mingled rather than segregated, liquid redemption buffer approximately nil, Ethereum now the majority deployment, and adverse independent Figure signals surfaced; structural 6.0 → 5.5, redemption 6.0 → 5.5, overall 6.0 → 5.5. 2026-07-28 — expanded to full-length format; added Figure Certificate Company's KPMG-audited SEC filings and ICA §28 disclosure as independent corroboration of backing; corrected Democratized Prime to a senior facility collateralized by HELOCs; disclosed Hastra as a Figure related party with a software-licence dependency. Scores unchanged. 2026-07-30 — rewrote the summary for clarity and corrected the filing evidence: the March 2026 FCC figures are unaudited interim rather than audited, the going-concern conclusion depends on a parent commitment letter, the Figure software licence renews annually after its initial term, and cash at bank is $0.7M; added the unsecured-certificate structure and the 65% single-counterparty repo concentration. Corrected the reference yield, which floats and had fallen below the figure previously quoted, and the exit-capacity figures, which had moved adversely within a day; live market figures are now given as ranges rather than point-in-time precision, with daily volume left to the dashboard. Added the systemic-leverage note covering borrowing secured against PRIME on Morpho and Kamino and the accrued-value oracle those venues price against. Clarified that the HELOC facility sits inside the backing chain rather than beside it — the certificates behind staked PRIME are lent into it — and that seniority and over-collateralization, not Treasury backing, are what protect a holder. Overall 5.5 → 5.0 and underlying 6.0 → 5.5 on accumulated evidence: Figure's delinquency on loans held for sale rose for a third consecutive period to 6.61% with the earliest-stage bucket growing fastest, the lending facility has stopped growing while PRIME has not, the yield is lower than previously reported, and the risks that bind are largely ones that cannot be observed directly. 2026-07-31 — redemption 5.5 → 6.0. Direct on-chain queries showed the wrapper holds a large claim on the lending pool its certificates are deployed into, rather than the near-empty buffer an earlier reading reported; the current redemption queue is comfortably covered. The constraint that binds is unchanged — dollars still require an off-chain sale in market hours through a single administrator — so the improvement is to an ordinary queue rather than to a stressed one. Overall unchanged at 5.0.*
