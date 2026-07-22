---
asset: "Hastra PRIME"
slug: "hastra-prime"
aliases: ["PRIME", "Hastra PRIME", "Staked wYLDS"]
chains: ["solana"]
category: "vault-share"
underlying_assets: ["wYLDS", "YLDS"]
assessment_type: "light"
audience: "retail"
date: "2026-07-23"
last_verified: "2026-07-23"
featured: false
production: true
issuer: "Hastra (Figure / Provenance)"
yield_bearing: true
volatility_score: 6.0
structural_score: 5.5
redemption_score: 5.0
underlying_score: 5.5
liquidity_score: 4.0
issuer_score: 6.0
overall_score: 5.0
---

# Hastra PRIME — Retail Risk Report

**Moderate-to-elevated risk · 5.0/10**

Hastra PRIME is a non-rebasing liquid staking token on Solana. You stake wYLDS into PRIME, and PRIME accrues yield through price appreciation rather than by rebasing balances. The headline yield is about 7.5% APY, versus roughly 3.3% on wYLDS itself.

The important distinction is where that extra yield comes from: **PRIME's yield is HELOC-warehouse consumer credit, not the Treasuries backing YLDS.** wYLDS is a wrapper around Figure Certificate Company's SEC-registered, Treasury-backed YLDS stablecoin. PRIME takes that wYLDS and lends into Figure's "Democratized Prime" warehouse facility, which finances home-equity loans between origination and securitization. A PRIME holder is therefore taking consumer-credit risk and securitization-market liquidity risk, not just short-duration Treasury exposure.

## What you're actually holding

PRIME sits on a three-layer stack: YLDS, then wYLDS, then PRIME. The YLDS layer is the higher-quality piece: SEC-registered, Figure-issued, and backed by short-dated Treasuries and overnight repo. The PRIME layer is where the risk profile changes. Its incremental yield depends on the performance and liquidity of a HELOC warehouse, which is better-understood collateral than GPU hardware or crypto tail collateral, but still materially riskier than pure Treasuries.

That makes PRIME closer to a tokenized private-credit sleeve than a cash substitute. The trade is simple: you accept consumer-credit exposure, a multi-step exit path, and thin secondary liquidity in exchange for the spread above wYLDS.

## How you actually exit

There are two exit paths.

- **Primary redemption:** a documented async Request/Fulfill path exists. The flow is PRIME to wYLDS, then a `request_redeem` ticket for wYLDS to USDC, then `complete_redeem` once the redeem vault is liquid. This is a real primary path, and it is better than DEX-only exit. But it is not instant and not a hard same-block 1:1 guarantee: pending shares stop earning yield and remain pending until off-chain liquidity reaches the redeem vault.
- **Secondary market:** Raydium and Manifest provide the faster exit route, but observed depth is thin at roughly $200-300K within 2% against a roughly $284M market cap, with heavy single-pool dependence. Refresh live depth before sizing a large exit.

The practical retail framing: PRIME has a primary redemption route, but it is liquidity-gated. If you need cash immediately, you are relying on thin Solana secondary markets.

## Governance & transparency

Hastra's Solana vault is open-source, which is a real transparency positive. The disclosed architecture routes mint and freeze authorities through program PDAs after initialization, and program upgrades through a Squads multisig. The oracle dependency is Chainlink.

The main structural caveat is audit assurance. No named audit firm, report, or scope is published for the PRIME vault in the materials reviewed. Open-source code is useful, but it is not the same as a disclosed third-party audit. The issuer also retains freeze capability through the RWA compliance design, which is expected for this kind of product but still a control retail holders should understand.

Market-history caveat: CoinGecko's $1.50 all-time-high print looks like a seed-pool artifact, not a real economic high for a token designed to accrue around 7.5% annually. The more useful early-life stress datapoint is the $0.9564 all-time low, about 4.4% below par.

## Who this is for

PRIME can make sense as a small yield sleeve for holders who understand that the risk is Figure-linked HELOC warehouse credit and who are comfortable with an async, liquidity-gated redemption process.

Avoid it if you need instant 1:1 redemption, deep secondary liquidity, a pure Treasury-backed exposure, or a named published audit before taking smart-contract risk. The extra yield over wYLDS is compensation for consumer-credit exposure and exit friction, not a free spread on Treasuries.

## Score rationale

| Axis | Score | Why |
|---|---:|---|
| Volatility | 6.0 | NAV-like accrual and only a modest real secondary drawdown so far, but exposed to HELOC defaults and securitization-market liquidity. |
| Structural | 5.5 | Open-source Solana vault, Squads multisig upgrade authority, Chainlink oracle, and strong Figure / Provenance parent; held below 6 by no named audit, the three-layer wrapper, and freeze capability. |
| Redemption | 5.0 | Permissionless mint and a real async primary redemption to USDC, but settlement is off-chain-funded and liquidity-gated. |
| Underlying | 5.5 | YLDS is high-quality Treasury-backed collateral, while PRIME's actual incremental risk is HELOC warehouse consumer credit. |
| Liquidity | 4.0 | Secondary market depth is thin for a roughly $284M asset, even though primary redemption reduces pure DEX dependence. |
| Issuer | 6.0 | Figure is a strong regulated parent with YLDS and a large origination history; Hastra's newer layer, missing named audit, and unclear PRIME-layer creditor claim hold it mid-band. |

---

*This report is built from publicly available documentation, third-party market data, and the open-source Hastra vault repo. We did not perform independent Solana on-chain reads in this pass. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-23 — initial retail publish: new Hastra PRIME report; overall 5.0 with six-axis vault-share scoring; primary async Request/Fulfill redemption recognized, but HELOC-warehouse yield source, thin secondary liquidity, and no named audit keep the score mid-band.*
