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
last_verified: "2026-07-27"
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
*Vault share · Ethereum + Solana · Issuer: Hastra (Signum Ltd.), with Figure/YLDS backing · ~$457M · verified 2026-07-27*

## Summary

PRIME is a non-rebasing yield token: you stake [wYLDS](/reports/wylds), receive PRIME, and earn through a rising PRIME price rather than extra tokens. Its roughly 7.5% headline yield does **not** come only from the Treasuries behind YLDS. Hastra deploys into Figure's “Democratized Prime” warehouse, which finances home-equity loans between origination and securitization. PRIME is therefore closer to a tokenized private-credit sleeve than cash.

Independent chain reads confirm the good news plainly. PRIME is fully backed by staked wYLDS: on Solana, the staking vault held about 164.26M wYLDS against roughly 156.31M PRIME at its accrued NAV. Across the next layer, about $479M of YLDS existed against roughly $460M of wYLDS. The backing exists; this re-score is not a backing-shortfall call.

The weaker finding is how that backing and exit actually work. Most reserve YLDS sits inside Figure operational loan-warehouse accounts, alongside tokenized loans, rather than in a clearly segregated reserve. The redemption vault held only about $0.05 of USDC, so a calm-market redemption record does not prove rush-hour capacity. Ethereum has also become the larger deployment—about 278.6M PRIME versus 156.3M on Solana—making multichain implementation risk a majority exposure, not a small new tail.

## At a glance

| | |
|---|---|
| **Backing** | PRIME is independently confirmed 1:1 against staked wYLDS; YLDS supply also exceeds total wYLDS. The reserve is co-mingled in Figure operational accounts, not demonstrably ring-fenced. |
| **How to exit** | Sell near NAV on Ethereum Uniswap V3, or unbond PRIME→wYLDS and request wYLDS→USDC. The primary path is admin-fulfilled and depends on off-chain YLDS sales. |
| **Liquidity** | Ethereum pool roughly $9M TVL / $23M 24h volume, plus Solana venues. Useful depth, but campaign-supported. |
| **Yield** | About 7.5% through NAV growth, sourced from HELOC-warehouse credit—not simply Treasury yield. |
| **Admin & custody** | Hastra controls fulfillment and freeze functions; upgrades use a multisig. The token stack spans Ethereum, Solana, and Provenance. |
| **Regulated?** | Figure's underlying YLDS is SEC-registered. Hastra and PRIME are not; holders rely on an unregulated wrapper/vault stack. |
| **Biggest risk** | The reserve is not cleanly segregated and the primary exit has virtually no instant USDC buffer. |

## Risk by axis

**Volatility — 6.0.** PRIME accrues around NAV and has so far shown only a modest real secondary drawdown, but its value is exposed to HELOC defaults and securitization-market liquidity. The roughly 4.4% early drawdown is more useful than a likely seed-pool all-time-high artifact.

**Liquidity — 6.0.** Ethereum Uniswap V3 provides roughly $9M of pool liquidity and about $23M of daily volume, with Solana venues alongside it, so retail holders can sell meaningful size near NAV. The constraint is durability: the deepest pool is supported by the PRIME Roots campaign, and wYLDS's own DEX backstop remains thin.

**Structural — 5.5.** Two independent audits remain meaningful positives: [Informal Systems](https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf) found and closed a critical Solana vault flaw, while [Sherlock](https://hastra.io/sherlock-hastra-audit.pdf) later found no critical or high issues across Solana and Ethereum. Independent reads also reconcile PRIME to the wYLDS held in its vault. The score falls because the deeper YLDS reserve is co-mingled with Figure's operating loan accounts, bankruptcy-remoteness is unproven, live mint/freeze controls remain, and Ethereum now represents most supply. Hastra's [proof-of-reserves](https://hastra.io/proof-of-reserves) headline is directionally true, but not independently reconstructable as a clean segregated reserve.

**Redemption — 5.5.** The primary route works in calm conditions: unbond PRIME to wYLDS, then submit an admin-fulfilled wYLDS→USDC request. Recent requests cleared 1:1 with a median near 49 minutes, and the DEX offers a separate immediate exit. But the redemption vault held about $0.05 USDC; every primary exit effectively relies on Figure selling YLDS off-chain during market hours. The extra PRIME unbonding step and near-zero liquid buffer make stress performance materially weaker than the calm-market average.

**Underlying — 6.0.** The proximate underlying is wYLDS, whose YLDS backing exists on-chain and ultimately references short-dated Treasuries and repo. PRIME then adds HELOC-warehouse credit. Hastra reports average LTV around 59%, FICO around 742 and cumulative loss below 1.25%; those figures resemble independently rated FIGRE Trust deals, which is encouraging, but the warehouse loan tape is not public and the PRIME-specific credit metrics cannot be independently checked.

**Issuer — 6.5.** Figure is a large, regulated issuer at the YLDS layer, but that does not remove the need for skepticism about issuer-reported data. Figure's SEC filings show loans-held-for-sale delinquency rising from 3.91% to 5.46% year over year. In a separate, contested 2025 dispute, DefiLlama declined to accept Figure's roughly $12–13B “on-chain TVL” claim as verifiable and now shows about $1.2B for Provenance. These are reasons to treat Figure's self-reported HELOC and chain-scale figures as issuer claims—not proof of fraud—and to rely on independently checkable data where possible.

## Bottom line

PRIME's backing is real and its DEX liquidity is useful. The 5.5 score reflects what sits behind that headline: a non-segregated reserve mapping, essentially no instant redemption buffer, a majority-Ethereum multichain footprint, and credit metrics that remain issuer-reported. The yield can suit a small private-credit allocation for holders comfortable with those dependencies. It is not a cash equivalent or an instant, trustless Treasury redemption.

**Watch items:** reserve-account segregation; the USDC buffer and pending redemption queue; Figure loan delinquency and securitization cadence; Ethereum pool depth after incentives; and independently reported credit data.

*This report uses public documentation, market data, two published audits, and independent Solana, Ethereum, and Provenance reads. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-23 — initial publish at 5.0. 2026-07-24 — 5.0 → 5.5 after named audits and live PoR. 2026-07-25 — 5.5 → 6.0 after measured Ethereum liquidity and verified calm-market redemption. 2026-07-27 — independent on-chain verification: backing confirmed 1:1, but reserve found co-mingled rather than segregated, liquid redemption buffer approximately nil, Ethereum now the majority deployment, and adverse independent Figure signals surfaced; structural 6.0 → 5.5, redemption 6.0 → 5.5, overall 6.0 → 5.5.*
