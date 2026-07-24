---
asset: "Hastra PRIME"
slug: "hastra-prime"
aliases: ["PRIME", "Hastra PRIME", "Staked wYLDS"]
chains: ["solana", "ethereum"]
category: "vault-share"
underlying_assets: ["wYLDS", "YLDS"]
assessment_type: "light"
audience: "retail"
companion_report: "ylds"
date: "2026-07-24"
last_verified: "2026-07-24"
featured: false
production: true
issuer: "Hastra (Figure / Provenance)"
yield_bearing: true
volatility_score: 6.0
structural_score: 6.0
redemption_score: 5.5
underlying_score: 5.5
liquidity_score: 4.0
issuer_score: 6.5
overall_score: 5.5
---

# Hastra PRIME — Retail Risk Report

**Moderate-to-elevated risk · 5.5/10**

Hastra PRIME is a non-rebasing liquid staking token, live on Solana and now also on Ethereum. You stake wYLDS into PRIME, and PRIME accrues yield through price appreciation rather than by rebasing balances. The headline yield is about 7.5% APY, versus roughly 3.3% on wYLDS itself.

The important distinction is where that extra yield comes from: **PRIME's yield is HELOC-warehouse consumer credit, not the Treasuries backing YLDS.** wYLDS is a wrapper around Figure Certificate Company's SEC-registered, Treasury-backed YLDS stablecoin. PRIME takes that wYLDS and lends into Figure's "Democratized Prime" warehouse facility, which finances home-equity loans between origination and securitization. A PRIME holder is therefore taking consumer-credit risk and securitization-market liquidity risk, not just short-duration Treasury exposure.

## What you're actually holding

PRIME sits on a three-layer stack: [YLDS](/reports/ylds), then wYLDS, then PRIME. The YLDS layer is the higher-quality piece: SEC-registered, Figure-issued, and backed by short-dated Treasuries and overnight repo, and the SEC-registered, Treasury-backed base is analyzed in its own [YLDS report](/reports/ylds). The PRIME layer is where the risk profile changes. Its incremental yield depends on the performance and liquidity of a HELOC warehouse, which is better-understood collateral than GPU hardware or crypto tail collateral, but still materially riskier than pure Treasuries.

That makes PRIME closer to a tokenized private-credit sleeve than a cash substitute. The trade is simple: you accept consumer-credit exposure, a multi-step exit path, and thin secondary liquidity in exchange for the spread above wYLDS.

## How you actually exit

There are two exit paths.

- **Primary redemption:** a documented async Request/Fulfill path exists. The flow is PRIME to wYLDS, then a `request_redeem` ticket for wYLDS to USDC, then `complete_redeem` once the redeem vault is liquid. This is a real primary path, and it is better than DEX-only exit. But it is not instant and not a hard same-block 1:1 guarantee: pending shares stop earning yield and remain pending until off-chain liquidity reaches the redeem vault.
- **Secondary market:** Raydium and Manifest provide the faster exit route, but observed depth is thin at roughly $200-300K within 2% against a roughly $284M market cap, with heavy single-pool dependence. Refresh live depth before sizing a large exit.

The practical retail framing: PRIME has a primary redemption route, but it is liquidity-gated. If you need cash immediately, you are relying on thin Solana secondary markets.

## Governance & transparency

Hastra's Solana vault is open-source, which is a real transparency positive. The disclosed architecture routes mint and freeze authorities through program PDAs after initialization, and program upgrades through a Squads multisig. The oracle dependency is Chainlink.

Transparency is now a strength rather than the weakest leg. The PRIME vault has two published independent audits. [Informal Systems](https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf) reviewed the Solana vault in November 2025, found and got fixed a critical vault-ownership bug, and closed all findings; [Sherlock](https://hastra.io/sherlock-hastra-audit.pdf) then covered both the Solana and Ethereum implementations in April 2026 with no critical or high findings. Hastra also publishes a [live Proof-of-Reserves dashboard](https://hastra.io/proof-of-reserves) showing the wYLDS backing (just above 100%), the on-chain reserve wallets, and the redemption queue, refreshed every few minutes.

Two caveats remain. The issuer retains freeze capability through the RWA compliance design, which is expected for this kind of product but still a control retail holders should understand. And running the same protocol on both Solana and Ethereum adds surface area — Sherlock flagged minor implementation-divergence items between the two versions, and the Ethereum venue (deposits via a Morpho vault) is new and thin, so it is not yet a liquidity win. The residual risks that keep PRIME mid-band are now the async, admin-mediated exit, thin secondary liquidity, and the HELOC-credit yield source — not audits or reserves.

Market-history caveat: CoinGecko's $1.50 all-time-high print looks like a seed-pool artifact, not a real economic high for a token designed to accrue around 7.5% annually. The more useful early-life stress datapoint is the $0.9564 all-time low, about 4.4% below par.

## Who this is for

PRIME can make sense as a small yield sleeve for holders who understand that the risk is Figure-linked HELOC warehouse credit and who are comfortable with an async, liquidity-gated redemption process.

Avoid it if you need instant 1:1 redemption, deep secondary liquidity, or a pure Treasury-backed exposure. The extra yield over wYLDS is compensation for consumer-credit exposure and exit friction, not a free spread on Treasuries.

## Score rationale

| Axis | Score | Why |
|---|---:|---|
| Volatility | 6.0 | NAV-like accrual and only a modest real secondary drawdown so far, but exposed to HELOC defaults and securitization-market liquidity. |
| Structural | 6.0 | Two published independent audits (Informal Systems — a critical bug found and fixed; Sherlock — no critical or high, covering both chains), a live on-chain Proof-of-Reserves dashboard (wYLDS just above 100%), an open-source Solana vault, Squads multisig upgrade authority, and a Chainlink oracle; held here by the three-layer wrapper, freeze capability, and new multichain (Solana / Ethereum) surface. |
| Redemption | 5.5 | Permissionless mint and a real async primary redemption to USDC, with the redemption queue now visible on-chain; the underlying YLDS redeems 1:1 plus interest via Figure Markets after KYC. Still not instant — settlement is off-chain-funded and liquidity-gated. |
| Underlying | 5.5 | YLDS is high-quality Treasury-backed collateral, while PRIME's actual incremental risk is HELOC warehouse consumer credit. |
| Liquidity | 4.0 | Secondary market depth is thin for a roughly $284M asset, even though primary redemption reduces pure DEX dependence. |
| Issuer | 6.5 | Figure is a strong regulated parent with SEC-registered YLDS and a large origination history, now with two named audits of Hastra's vault; the newer Hastra layer and an unclear PRIME-layer creditor claim hold it just above mid-band. |

---

*This report is built from publicly available documentation, third-party market data, and the open-source Hastra vault repo. We did not perform independent Solana on-chain reads in this pass. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-23 — initial retail publish: new Hastra PRIME report; overall 5.0 with six-axis vault-share scoring; primary async Request/Fulfill redemption recognized, but HELOC-warehouse yield source, thin secondary liquidity, and no named audit keep the score mid-band.*

*Revision history: 2026-07-24 — re-eval on new disclosures: overall 5.0 → 5.5 (structural 5.5 → 6.0, redemption 5.0 → 5.5, issuer 6.0 → 6.5). Two independent audits now published (Informal Systems, Nov 2025 — one critical found and resolved; Sherlock, Apr 2026 — Solana + Ethereum, no critical/high), plus a live on-chain Proof-of-Reserves dashboard (wYLDS just above 100% backed) and confirmed 1:1 KYC redemption of the underlying YLDS via Figure Markets. PRIME also went live on Ethereum (Morpho). Volatility, liquidity, and underlying held; residual risks are the async/admin-mediated exit, thin secondary liquidity, and HELOC-warehouse credit as the yield source.*
