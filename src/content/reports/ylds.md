---
asset: "YLDS"
slug: "ylds"
aliases: ["YLDS", "Figure YLDS", "Figure Certificate"]
chains: ["provenance", "stellar", "sui"]
category: "stablecoin"
assessment_type: "light"
audience: "retail"
date: "2026-07-24"
last_verified: "2026-07-24"
featured: false
production: true
peg_mechanism: "fiat-backed"
issuer: "Figure Certificate Company (Figure Technology Solutions, Nasdaq: FIGR)"
audited_reserves: true
market_cap_approx: 561900000
peg_mechanism_score: 8.0
backing_score: 8.0
liquidity_score: 5.0
issuer_score: 8.0
overall_score: 7.0
companion_report: "hastra-prime"
---

# YLDS — Retail Risk Report

**Lower-to-moderate risk · 7.0/10**

YLDS is the SEC-registered, Treasury-backed base that sits underneath wYLDS and [Hastra PRIME](/reports/hastra-prime). Most retail readers will never hold it directly — access is gated to accredited and qualified investors — but if you hold PRIME, you are holding YLDS one layer down. This report covers that base on its own, so the PRIME report doesn't have to re-derive it.

## What it is

YLDS is the first SEC-registered, yield-bearing stablecoin. Legally it isn't a payment stablecoin at all: it is a **face-amount certificate** issued by Figure Certificate Company, a subsidiary registered under Section 28 of the Investment Company Act of 1940. In plain terms, that makes it a regulated security sold with prospectus-level disclosure (Form 497 filings on SEC EDGAR), not a privately attested token like USDT or USDC.

It is redeemable 1:1 for U.S. dollars plus accrued interest, and it is backed by short-dated U.S. Treasuries and Treasury repurchase agreements. The yield is SOFR minus 35 basis points — roughly 3.3% to 3.85% depending on rates — accruing daily and paying monthly. Reserves are managed by Figure Investment Advisors (a registered investment advisor) and custodied at UMB Bank, with Figure Equity Solutions as transfer agent. About $562M is outstanding, native on Provenance and Stellar, with a Sui deployment announced. The parent, Figure Technology Solutions, is publicly listed as Nasdaq: FIGR.

## The catch

The honest trade-off is written into the legal structure. Because YLDS is a **security** rather than an open payment stablecoin, you can't just buy it on the open market. Access is gated to accredited and qualified investors who complete KYC onboarding through Figure Markets, and KYC is required to earn interest at all. Open-market secondary liquidity is thin and permissioned — a regulated Figure Markets ATS plus thin on-chain depth.

That strong 1:1 redemption is real, but it exists only for eligible, onboarded holders. Anyone holding YLDS indirectly through wYLDS or PRIME **can't use it** — they exit through the wrapper's own thinner, admin-mediated path instead. And reserve assurance comes from periodic SEC filings and Investment Company Act audited financials, not a continuous, crypto-style proof-of-reserves refreshed every few minutes.

## Why it still scores well

The backing regime is genuinely strong: pristine Treasury collateral, a registered and publicly listed issuer, a registered investment advisor managing the reserves, a bank custodian, and a disclosure standard that exceeds most payment stablecoins. The constraints that keep YLDS below the top of the range are practical, not solvency-related — restricted access, thin open liquidity, and a short track record since its 2025 approval.

That lands YLDS at roughly the same tier as high-quality payment stablecoins like AUSD, PYUSD, or USDT, but by a different route: a stronger backing and disclosure regime traded against weaker open-market liquidity.

## Where it sits in the stack

Think of the ladder as **YLDS → wYLDS → PRIME**. YLDS is the clean, regulated Treasury base. wYLDS is the on-chain wrapper. PRIME stakes that wrapper into Figure's HELOC-warehouse facility for extra yield. The point for a retail reader: the extra yield — and the extra risk — in PRIME comes from that HELOC-warehouse layer, not from YLDS. YLDS itself is the safest rung, and the wrapper-layer risk is analyzed in the [Hastra PRIME report](/reports/hastra-prime).

## Who this is for

Directly, YLDS is only for accredited and qualified investors who can onboard through Figure Markets and want a regulated, Treasury-backed, yield-bearing instrument with real 1:1 redemption. For everyone else the relevance is indirect: it is the base you're relying on when you hold PRIME, and its quality is a large part of why PRIME's underlying is sound even though PRIME's own yield comes from somewhere riskier.

## Score rationale

| Category | Score | Notes |
|----------|------:|-------|
| Peg Mechanism | 8.0 | Redeemable 1:1 USD + interest, Treasury/repo-backed registered security. Below 9: permissioned redemption, not open-market arbitrageable. |
| Backing | 8.0 | Short-dated Treasuries + repo, RIA-managed, UMB-custodied, Investment Company Act audited financials plus prospectus disclosure. Below 9: periodic filings rather than continuous third-party proof-of-reserves; single-custodian concentration. |
| Liquidity | 5.0 | Weakest axis. Access-gated (accredited / qualified / KYC); thin, permissioned secondary. Strong 1:1 primary — but only for eligible holders. |
| Issuer | 8.0 | Figure Certificate Company / Figure Technology Solutions (Nasdaq: FIGR) — SEC-registered '40 Act issuer, RIA manager, bank custodian, regulated ATS. Below 9: short track record (2025), single-issuer concentration. |
| **Overall** | **7.0** | High-quality SEC-registered, Treasury-backed base; the constraints are access, liquidity, and newness, not solvency. The clean regulated root under wYLDS and PRIME. |

---

*This report is built from public documentation and SEC filings (EDGAR CIK 1974395), plus third-party RWA market data. We did not perform independent on-chain reads in this pass. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-24 — initial publish. Dependency-tier report: the SEC-registered YLDS base under Hastra wYLDS/PRIME. Overall 7.0.*
