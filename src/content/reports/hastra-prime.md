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
last_verified: "2026-07-30"
featured: false
production: true
issuer: "Hastra (Figure / Provenance)"
yield_bearing: true
volatility_score: 6.0
structural_score: 5.5
redemption_score: 5.5
underlying_score: 6.0
liquidity_score: 6.0
issuer_score: 6.5
overall_score: 5.5
market_cap_approx: 457000000
---

# Hastra PRIME — Risk Report
**Moderate risk · 5.5 / 10**
*Vault share · Ethereum + Solana · Issuer: Hastra (Signum Ltd.), with Figure/YLDS backing · ~$457M · verified 2026-07-30*

*Live independent backing, reserve segregation, cross-chain supply, redemption-buffer health, warehouse turnover, and liquidity are on the [dashboard](https://todayindefi.github.io/backing-monitor/?asset=hastra-prime).*

## Summary

PRIME is a yield-bearing token issued by Hastra. You get it by staking
[wYLDS](/reports/wylds) — a dollar token backed by US Treasuries — and PRIME pays
you by rising in price rather than by sending you extra tokens. One PRIME is worth
about $1.05, up from $1.00 at launch, and the reference yield is around 7.5% a
year. Total size is roughly $457M, split between Ethereum (about 279M tokens) and
Solana (about 156M).

The most important thing to understand is that the 7.5% does not come from the
Treasuries. Hastra lends those dollars out again, into a Figure-run facility called
Democratized Prime that finances home-equity lines of credit — loans US homeowners
take against their houses. Hastra's claim is senior and collateralized by HELOCs
that Figure Lending owns, so it ranks ahead of Figure's own money. But the return
still depends on those homeowners paying and on Figure being able to keep bundling
and selling the loans. The Treasury layer pays overnight SOFR minus 0.35% — about
3.3% at present — so **roughly 4.2 percentage points of PRIME's yield is payment
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
no HELOC credit: that exposure enters at the PRIME layer. On PRIME itself,
independent chain reads show the Solana staking vault holding about 164.26M wYLDS
against 156.31M PRIME at accrued value — fully backed, and checkable without taking
Hastra's word for it.

The weak points are exit and concentration. The practical way out is selling on
Ethereum's Uniswap V3 pool, where about $5.99M can be sold within 10 basis points
of fair value — but roughly $6.03M is a hard wall, past which extra selling returns
no extra dollars. The official redemption route means unstaking PRIME into wYLDS,
then asking Hastra to sell YLDS off-chain for USDC, and the wrapper's instant USDC
buffer is about five cents. Nearly everything in the stack also reduces to one
company: Figure issues the underlying, runs the lending facility, and licenses the
software Hastra's protocol runs on. And the SEC registration attaches to the
Treasury certificate underneath, not to Hastra's wrapper — the claim a holder
actually owns is unregulated.

## At a glance

| | |
|---|---|
| **Backing** | PRIME reconciles to staked wYLDS. At the base layer, FCC reported $601.524M of qualified assets against a $599.706M YLDS reserve, independently matching the roughly 100.3% on-chain ratio. |
| **How to exit** | Sell near NAV on Ethereum Uniswap V3, or unbond PRIME→wYLDS and request wYLDS→USDC. The primary path is admin-fulfilled and depends on off-chain YLDS sales. |
| **Liquidity** | About $5.99M can be sold within 10 bp of fair value on Ethereum, with a hard wall at roughly $6.03M. Good execution below that, campaign-supported, and no gradual warning as you approach the ceiling. |
| **Yield** | About 7.5% through NAV growth, sourced from a senior facility collateralized by Figure-owned HELOCs—not from the Treasury/repo assets backing YLDS. The Treasury layer pays SOFR minus 0.35%, about 3.3%, so roughly 4.2 points of the 7.5% is payment for HELOC credit risk. |
| **Admin & custody** | Hastra controls fulfillment and freeze functions; the token stack spans Ethereum, Solana, and Provenance. Hastra is a disclosed Figure related party and uses licensed Figure software. |
| **Regulated?** | FCC/YLDS is SEC-registered and KPMG-audited. Hastra and PRIME are not, so holders rely on an unregulated wrapper and staking stack above the regulated certificate. |
| **Biggest risk** | Private-credit performance, imperfect reserve segregation, and an admin-mediated primary exit with virtually no instant USDC buffer. |

## Risk by axis

**Volatility — 6.0.** PRIME accrues through its NAV rather than targeting a fixed $1 market price. Its meaningful observed secondary-market drawdown was about 4.4%; the quoted $1.50 all-time high appears to be a seed-pool artifact and is not useful evidence of volatility. A rising NAV and active liquidity incentives can keep market pricing orderly in normal conditions, but neither removes credit risk from the asset accumulating underneath.

Figure's filings disclose Democratized Prime as a **senior** lending facility **collateralized by** HELOCs owned by Figure Lending, not direct ownership of a miscellaneous loan pool. Seniority and collateralization should reduce loss severity relative to a junior or unsecured position. They do not eliminate the exposure. Falling home values, borrower delinquency, funding costs, or a frozen securitization market can still slow repayment or impair returns. Figure's broader loans-held-for-sale delinquency rose from 3.91% to 5.46% year over year, while the PRIME-specific warehouse loan tape remains private.

The stronger legal description is balanced by limited history and concentration in one origination/securitization channel. The live [warehouse monitor](https://todayindefi.github.io/backing-monitor/?asset=hastra-prime) tracks inventory and EDGAR ABS-15G securitization cadence. A longer stress record and facility-level delinquency would support a higher mark; stalled turnover or rising losses would move it down.

**Liquidity — 6.0.** Ethereum Uniswap V3 has recently shown roughly $9M of pool liquidity and about $23M of daily volume, with Solana venues alongside it. That gives holders a practical immediate exit for ordinary size and is materially better than wYLDS's standalone market. It also creates a price-discovery path independent of Hastra's primary redemption process.

Pool size is not the same as tradeable size, so the exit was measured directly by quoting actual sale sizes against the pool. Selling PRIME for USDC costs under 1 basis point up to $100K, about 2 bp at $1M, about 9 bp at $5M, and about 10 bp at $5.99M. Then it stops: at roughly $6.03M the pool's entire USDC side is consumed, and beyond that point additional PRIME returns no additional dollars at all. Execution is excellent right up to a cliff, with no gradual worsening to warn a seller they are approaching it. In practical terms about 1.3% of PRIME's market value can leave at a good price and the rest structurally cannot, so $5M is the sensible ceiling for a single exit.

The limitation is durability. The deepest Ethereum market is supported by the PRIME Roots campaign, so current volume should not be assumed to persist after incentives. The quote ladder is also a single-block snapshot, not guaranteed capacity. The pool was roughly 67/33 skewed toward USDC when measured, and that USDC-heavy balance is what funded the quoted exits; the ratio matters more than headline TVL, because capacity will shrink proportionally if the pool rebalances toward PRIME. Ethereum now holds about 278.6M PRIME against 156.3M on Solana, making the newer implementation the majority venue. Larger exits can therefore face both pool-slippage risk and the operational risk of a market whose depth was built during a growth campaign.

Primary liquidity ultimately bottoms out in YLDS. FCC reported $263.4M of certificate surrenders during Q1 2026 against a roughly $600M book, evidence that the **YLDS layer** can clear substantial volume at face plus accrued interest. It is not evidence that PRIME can redeem the same amount on demand: PRIME must first unbond into wYLDS, Hastra must process the wrapper request, and off-chain funds must travel back to the redeeming chain. Better sustained, non-incentivized DEX depth and a funded wrapper-level buffer would improve this axis.

**Structural — 5.5.** Two independent audits are meaningful positives. [Informal Systems](https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf) found a critical Solana vault-account validation flaw and a share-inflation issue; both were remediated, and all findings were closed. [Sherlock](https://hastra.io/sherlock-hastra-audit.pdf) subsequently reviewed the Solana and Ethereum stack and reported no critical or high-severity findings. A serious bug found before deployment is double-edged evidence, but detection, repair, and a clean second review are substantially better than relying on an unaudited codebase.

Independent reads reconcile PRIME supply with wYLDS in the staking vault, and FCC's audited §28 disclosure independently corroborates the YLDS coverage ratio. The caveat is legal and operational segregation. Provenance balances show much of the identified reserve YLDS in Figure operational accounts containing loan assets rather than a clean, named, bankruptcy-remote wrapper reserve. Hastra's [proof of reserves](https://hastra.io/proof-of-reserves) is directionally supported, but the mapping from those accounts to wYLDS claims still depends on Hastra and Figure.

The related-party disclosure cuts both ways. Hastra is not a Figure subsidiary, yet it is not fully arm's-length: its YLDS is booked as current debt to a related party, it pays Figure a 50-basis-point revenue royalty, and its protocol runs on a nontransferable Figure software licence whose initial term runs to December 2028 and renews annually thereafter. This makes the operating relationship more legible and reduces the “unknown offshore wrapper” concern. It also correlates failures that would otherwise be independent, and introduces termination and breach risk. Live mint and freeze controls, unproven bankruptcy remoteness, and majority-Ethereum implementation exposure keep the score at 5.5.

**Redemption — 5.5.** The primary route is real but layered. A holder requests to unbond PRIME, waits, completes the conversion to wYLDS, then submits a wYLDS-to-USDC request. Pending shares stop earning, and Hastra must fulfill the wrapper request after selling YLDS through Figure Markets. Recent requests cleared 1:1 with a median around 49 minutes, with most completed within an hour. That is useful evidence of normal operation, while the DEX provides a separate immediate route.

Stress capacity is much weaker than the calm-market median suggests. The redeem vault held about $0.05 of USDC, alongside roughly 1.04M YLDS and visible pending-sale balances. Every material primary exit therefore depends on an administrator, off-chain YLDS liquidity, market-hour processing, and movement of USDC back on-chain. PRIME's extra unbonding step means it does not inherit the base certificate's redemption quality.

FCC's Q1 filing provides strong—but carefully bounded—evidence below this bottleneck. Certificate reserve activity included $530.5M of issuance and $263.4M of surrender during one quarter, and YLDS certificates are surrenderable at face plus accrued interest. That demonstrates throughput at the **YLDS/FCC layer only**. It does not establish $263.4M of wYLDS or PRIME redemption capacity. A standing USDC buffer, multiple fulfillers, explicit service levels, and stress-period data would be needed for a higher PRIME redemption score.

**Underlying — 6.0.** PRIME's proximate underlying is wYLDS, which wraps FCC-issued YLDS. Audited FY2025 statements and an unaudited Q1 interim filing show that at March 31, qualified assets were $601.524M against a $599.706M certificate reserve. Fair-value disclosure showed $211.3M of Level 1 Treasuries and money-market funds, $389.6M of Level 2 Treasury-collateralized repo, and no Level 3 assets; cash held outside the investment portfolio was just $0.7M, at a single bank. A clean KPMG opinion on the annual statements and ICA §28 reporting make this more than an issuer dashboard claim.

One structural point deserves more weight than the coverage ratio. The certificates are explicitly unsecured obligations of Figure Certificate Company, backed solely by its assets. The qualified assets sit on deposit at a custodian because the Investment Company Act requires it, but that is a regulatory asset test, not a security interest — a certificate holder is an unsecured creditor of FCC, not the beneficiary of a bankruptcy-remote trust. Read together with the co-mingled reserve accounts on Provenance, this means there is no bankruptcy-remote ring-fence at either layer of the stack. Coverage can be 100.3% and that still be true.

About 65% of qualified assets were repo rather than outright Treasuries. The repo was overnight and Treasury-collateralized, so its quality remains high, but it adds counterparty and settlement exposure that is concentrated in one name: the entire repo book — 65% of qualified assets — faces UMB Bank N.A., which is also the custodian holding the securities. A second repo facility is documented but was unused at quarter-end. The collateral is overnight Treasuries, so quality is high; the concentration is nonetheless a single point of failure rather than a diversified book. The filings arrive with roughly a 45-day lag—the March 31 view was filed May 15—so they should confirm live chain data rather than replace it. They also show 79% certificate concentration among Figure's parent and parent-controlled affiliates and dependence on Figure's parent to pay FCC operating costs. The latter is a pass-through operating model, not evidence of balance-sheet distress, but it is a dependency in a parent failure.

Above that high-quality base, PRIME adds the senior HELOC-collateralized facility. Hastra reports average LTV around 59%, FICO around 742, and cumulative loss below 1.25%; these figures resemble independently rated FIGRE Trust securitizations, which is encouraging. The warehouse's loan-level performance remains unavailable, and the facility has expanded rapidly to $352.0M of certificates. YLDS contains no HELOC exposure — the credit risk enters at the PRIME layer, and that sleeve needs monitoring on its own terms.

**Issuer — 6.5.** Figure Certificate Company is a full SEC reporting registrant, not just the issuer of a token described as registered. FCC files 10-K and 10-Q reports with officer certifications; KPMG has audited it since 2024 and issued a clean opinion without a going-concern qualification or material weakness. That opinion covers the annual statements. FCC's own interim filing carries a liquidity and going-concern note in which it concludes it has twelve months of funding specifically because its parent has committed, by letter, to pay its invoices directly and periodically forgive intercompany balances. This is a conditional conclusion resting on parent support, not an independent one. ICA §28 requires qualified assets above the certificate reserve plus minimum capital, and the disclosed 100.3% coverage independently matches on-chain and Hastra-reported figures. Figure Technology Solutions itself trades on Nasdaq under FIGR.

The filings also make the limitations measurable. $472.990M of $598.047M in certificates—79%—was held by Figure's parent and entities controlled by the parent. Hastra's own YLDS cannot be assigned to that bucket: the filings never place Signum Ltd. inside the “affiliate entities controlled by the Parent” set, so this report does not count its holdings there. Board and executive holdings were only about $15,700, so this is entity concentration, not insider ownership. FCC reported just $292K of equity on a $601.8M balance sheet because its parent pays operating expenses directly, including $471K during Q1, and records them as capital contributions. That structure is designed to pass assets and obligations through; it should not be misread as immediate distress. The risk is continued parent dependence.

Skepticism remains warranted above the certificate layer. Figure's loans-held-for-sale delinquency rose from 3.91% to 5.46% year over year, and a contested 2025 exchange with DefiLlama raised questions about whether Figure's claimed Provenance scale was independently reproducible. These are not evidence of fraud, but facility-level credit and chain-scale claims still require cross-checking. Strong regulated reporting alongside incomplete warehouse transparency supports 6.5.

## Bottom line

PRIME's backing is real and independently documented. FCC's audited FY2025 statements and unaudited Q1 interim filing independently confirm the roughly 100.3% YLDS coverage ratio and show a high-quality asset pool of Treasuries, money-market funds, and Treasury-collateralized repo with no Level 3 exposure. They also prove that YLDS itself contains no HELOC credit. PRIME deliberately adds that risk through a senior lending facility collateralized by Figure-owned HELOCs.

The senior facility description is safer than direct HELOC ownership, and its $352.0M scale provides an external warehouse check. It does not make PRIME Treasury-like: facility-level delinquency remains unavailable, securitization turnover matters, and the wrapper has almost no immediate USDC buffer. Regulation attaches to FCC and YLDS; PRIME holders depend on Hastra above it.

Hastra's related-party status is similarly two-sided. It is not a Figure subsidiary, and its holdings cannot be assigned to the $473M parent-controlled bucket. Licensed software, a 50-basis-point royalty, related-party accounting, and a contract that renews annually after its initial term make the counterparty less mysterious but failures more correlated.

The 5.5 score reflects that balance: well-documented backing, a thin exit, and no diversification anywhere in the stack. PRIME can fit a small private-credit allocation for a holder who understands the HELOC facility, administrator-mediated redemption, and multichain implementation. It is not a cash equivalent, a direct Treasury claim, or an instant trustless redemption product.

**Watch items:** reserve-account segregation; the USDC buffer and pending redemption queue; facility inventory and securitization cadence on the [live monitor](https://todayindefi.github.io/backing-monitor/?asset=hastra-prime); Figure loan delinquency and any facility-level disclosure; Ethereum pool depth after incentives; the Q2 FCC filing expected around mid-August; and termination or breach of the Figure software licence the protocol runs on.

*This report uses public documentation, market data, two published audits, independent Solana, Ethereum, and Provenance reads, and FCC filings available through [EDGAR](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001974395). Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-23 — initial publish at 5.0. 2026-07-24 — 5.0 → 5.5 after named audits and live PoR. 2026-07-25 — 5.5 → 6.0 after measured Ethereum liquidity and verified calm-market redemption. 2026-07-27 — independent on-chain verification: backing confirmed 1:1, but reserve found co-mingled rather than segregated, liquid redemption buffer approximately nil, Ethereum now the majority deployment, and adverse independent Figure signals surfaced; structural 6.0 → 5.5, redemption 6.0 → 5.5, overall 6.0 → 5.5. 2026-07-28 — expanded to full-length format; added Figure Certificate Company's KPMG-audited SEC filings and ICA §28 disclosure as independent corroboration of backing; corrected Democratized Prime to a senior facility collateralized by HELOCs; disclosed Hastra as a Figure related party with a software-licence dependency. Scores unchanged. 2026-07-30 — summary rewritten for clarity; corrected the March 2026 FCC figures from audited to unaudited interim, softened the going-concern statement to reflect its dependence on a parent commitment letter, corrected the Figure software licence to auto-renewing, corrected cash-at-bank to $0.7M; added the unsecured-certificate structure, the 65% single-counterparty repo concentration, and measured exit depth with its ~$6.03M ceiling. Scores unchanged.*
