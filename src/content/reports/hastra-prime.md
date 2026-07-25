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
last_verified: "2026-07-25"
featured: false
production: true
issuer: "Hastra (Figure / Provenance)"
yield_bearing: true
volatility_score: 6.0
structural_score: 6.0
redemption_score: 6.0
underlying_score: 6.0
liquidity_score: 6.0
issuer_score: 6.5
overall_score: 6.0
---

# Hastra PRIME — Retail Risk Report

**Moderate risk · 6.0/10**

Hastra PRIME is a non-rebasing liquid staking token, live on Solana and now also on Ethereum. You stake wYLDS into PRIME, and PRIME accrues yield through price appreciation rather than by rebasing balances. The headline yield is about 7.5% APY, versus roughly 3.3% on wYLDS itself.

The important distinction is where that extra yield comes from: **PRIME's yield is HELOC-warehouse consumer credit, not the Treasuries backing YLDS.** wYLDS is a wrapper around Figure Certificate Company's SEC-registered, Treasury-backed YLDS stablecoin. PRIME takes that wYLDS and lends into Figure's "Democratized Prime" warehouse facility, which finances home-equity loans between origination and securitization. A PRIME holder is therefore taking consumer-credit risk and securitization-market liquidity risk, not just short-duration Treasury exposure.

## What you're actually holding

PRIME sits on a three-layer stack: YLDS, then [wYLDS](/reports/wylds), then PRIME. The proximate layer beneath PRIME is wYLDS — Hastra's on-chain 1:1 wrapper — and when you unstake PRIME you land in wYLDS, not the raw YLDS. That wYLDS layer is the higher-quality piece: SEC-registered, Figure-issued, and backed by short-dated Treasuries and overnight repo, with the Treasury-backed YLDS base folded into its own [wYLDS report](/reports/wylds). The PRIME layer is where the risk profile changes. Its incremental yield depends on the performance and liquidity of a HELOC warehouse, which is better-understood collateral than GPU hardware or crypto tail collateral, but still materially riskier than pure Treasuries.

That makes PRIME closer to a tokenized private-credit sleeve than a cash substitute. The trade is simple: you accept consumer-credit exposure and a multi-step exit path in exchange for the spread above wYLDS.

## How you actually exit

There are two exit paths.

- **Primary redemption:** a documented async Request/Fulfill path exists. The flow is PRIME to wYLDS, then a `request_redeem` ticket for wYLDS to USDC, then `complete_redeem`. The wYLDS-to-USDC leg is no longer an opaque queue: on-chain data shows it running actively and 1:1 to the cent, with a median turnaround near 49 minutes. The step that keeps this below instant is the PRIME-to-wYLDS unbonding on top — pending shares stop earning yield while they wait, and settlement is still admin-fulfilled rather than a same-block 1:1 guarantee.
- **Secondary market:** PRIME's deepest venue is now Ethereum, where a Uniswap V3 PRIME/USDC pool holds roughly $9M of liquidity on roughly $23M of 24h volume and trades tight to NAV, with a Solana Orca pool (about $2.5M of 24h volume) alongside it. You can exit real size near NAV without waiting on the queue. The one caveat to state plainly: that Ethereum depth is supported by the PRIME Roots campaign (a raffle incentivizing TVL), so its durability needs re-verifying once the campaign ends.

The practical retail framing: PRIME now gives you two workable exits — a near-NAV DEX sale on Ethereum for size, and a primary redemption whose wYLDS leg clears fast and 1:1 — so you are not hostage to a single liquidity-gated queue the way you were before.

## Governance & transparency

Hastra's Solana vault is open-source, which is a real transparency positive. The disclosed architecture routes mint and freeze authorities through program PDAs after initialization, and program upgrades through a Squads multisig. The oracle dependency is Chainlink.

Transparency is now a strength rather than the weakest leg. The PRIME vault has two published independent audits. [Informal Systems](https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf) reviewed the Solana vault in November 2025, found and got fixed a critical vault-ownership bug, and closed all findings; [Sherlock](https://hastra.io/sherlock-hastra-audit.pdf) then covered both the Solana and Ethereum implementations in April 2026 with no critical or high findings. Hastra also publishes a [live Proof-of-Reserves dashboard](https://hastra.io/proof-of-reserves) showing the wYLDS backing (just above 100%), the on-chain reserve wallets, and the redemption queue, refreshed every few minutes.

Two caveats remain. The issuer retains freeze capability through the RWA compliance design, which is expected for this kind of product but still a control retail holders should understand. And running the same protocol on both Solana and Ethereum adds surface area — Sherlock flagged minor implementation-divergence items between the two versions, and the Ethereum footprint is newer surface area to watch. The residual risks that keep PRIME mid-band are now the async, admin-mediated exit (an unbonding step on top of wYLDS), the campaign-supported durability of the deeper Ethereum liquidity, and the HELOC-credit yield source — not audits or reserves.

Market-history caveat: CoinGecko's $1.50 all-time-high print looks like a seed-pool artifact, not a real economic high for a token designed to accrue around 7.5% annually. The more useful early-life stress datapoint is the $0.9564 all-time low, about 4.4% below par.

## Who this is for

PRIME can make sense as a small yield sleeve for holders who understand that the risk is Figure-linked HELOC warehouse credit and who are comfortable with an async, liquidity-gated redemption process.

Avoid it if you need instant, trustless 1:1 redemption or a pure Treasury-backed exposure. The extra yield over wYLDS is compensation for consumer-credit exposure and exit friction, not a free spread on Treasuries.

## Score rationale

| Axis | Score | Why |
|---|---:|---|
| Volatility | 6.0 | NAV-like accrual and only a modest real secondary drawdown so far, but exposed to HELOC defaults and securitization-market liquidity. |
| Structural | 6.0 | Two published independent audits (Informal Systems — a critical bug found and fixed; Sherlock — no critical or high, covering both chains), a live on-chain Proof-of-Reserves dashboard (wYLDS just above 100%), an open-source Solana vault, Squads multisig upgrade authority, and a Chainlink oracle; held here by the three-layer wrapper, freeze capability, and new multichain (Solana / Ethereum) surface. |
| Redemption | 6.0 | Permissionless mint and a real async primary redemption to USDC, whose wYLDS-to-USDC leg is now on-chain-verified as active and 1:1 with a median near 49 minutes; a deep Uniswap V3 exit at about NAV means holders aren't hostage to the queue. Held just below wYLDS by the extra PRIME-to-wYLDS unbonding step and admin-fulfilled settlement. |
| Underlying | 6.0 | The proximate underlying is [wYLDS](/reports/wylds) — Figure's SEC-registered, Treasury-backed YLDS folded into an on-chain wrapper — which is high-quality collateral; PRIME's actual incremental risk is the HELOC warehouse consumer credit layered on top. |
| Liquidity | 6.0 | Real primary liquidity now: Ethereum Uniswap V3 PRIME/USDC (about $9M TVL, about $23M 24h, tight to NAV) plus Solana Orca (about $2.5M 24h), so size can exit near NAV. Held below higher by the Ethereum depth being PRIME Roots campaign-supported (durability to be re-verified post-campaign). |
| Issuer | 6.5 | Figure is a strong regulated parent with SEC-registered YLDS and a large origination history, now with two named audits of Hastra's vault; the newer Hastra layer and an unclear PRIME-layer creditor claim hold it just above mid-band. |

---

*This report is built from publicly available documentation, third-party market data, and the open-source Hastra vault repo. We did not perform independent Solana on-chain reads in this pass. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-23 — initial retail publish: new Hastra PRIME report; overall 5.0 with six-axis vault-share scoring; primary async Request/Fulfill redemption recognized, but HELOC-warehouse yield source, thin secondary liquidity, and no named audit keep the score mid-band.*

*Revision history: 2026-07-24 — re-eval on new disclosures: overall 5.0 → 5.5 (structural 5.5 → 6.0, redemption 5.0 → 5.5, issuer 6.0 → 6.5). Two independent audits now published (Informal Systems, Nov 2025 — one critical found and resolved; Sherlock, Apr 2026 — Solana + Ethereum, no critical/high), plus a live on-chain Proof-of-Reserves dashboard (wYLDS just above 100% backed) and confirmed 1:1 KYC redemption of the underlying YLDS via Figure Markets. PRIME also went live on Ethereum (Morpho). Volatility, liquidity, and underlying held; residual risks are the async/admin-mediated exit, thin secondary liquidity, and HELOC-warehouse credit as the yield source.*

*Revision history: 2026-07-25 — re-score on new data: overall 5.5 → 6.0 (liquidity 4.0 → 6.0, redemption 5.5 → 6.0, underlying 5.5 → 6.0). Measured Ethereum Uniswap V3 liquidity (about $9M TVL / $23M 24h, tight to NAV — PRIME Roots campaign-supported) and on-chain-verified wYLDS-to-USDC redemption (active, 1:1, median near 49 minutes). Underlying report re-pointed from YLDS to wYLDS (YLDS now folded into the wYLDS report as backing).*
