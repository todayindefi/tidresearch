---
protocol: "Twyne"
slug: "twyne"
aliases: ["Twyne", "twyne", "Twyne Finance", "Twyne Credit Delegation"]
chains: ["ethereum"]
category: "protocol"
protocol_category: "lending"
assessment_type: "full"
audience: "retail"
date: "2026-07-28"
last_verified: "2026-07-28"
featured: false
production: false
built_on: ["Aave V3", "Euler V2"]
contract_score: 6.0
economic_score: 3.5
project_score: 5.0
overall_score: 4.5
tvl_gross: 13670000
tvl_borrowed: 11860000
live_since: "2025-08"
audited: true
audit_count: 9
audit_firms: ["Electisec (yAudit)", "Enigma Dark", "SecEureka"]
bug_bounty: true
bug_bounty_amount: 50000
bug_bounty_platform: "Immunefi"
team_doxxed: false
incident_history: false
is_fork: false
---

# Twyne — Risk Report
**Elevated risk · 4.5 / 10**
*Credit-delegation layer · Ethereum · Built on Aave V3 + Euler V2 · ~$13.7M TVL · live since Aug 2025 · verified 2026-07-28*

## Summary

Twyne rents out unused borrowing power. Lenders deposit a receipt token — a wrapped Aave aToken or a Euler eToken — into a Twyne credit vault. Borrowers pull that idle capacity into their own position, so the combined balance goes into Aave or Euler and the borrower can run a higher loan-to-value against their own capital than the base market would allow. The lender earns a delegation fee on top of the normal supply rate.

The engineering is better than the size suggests. Twyne is built on Euler's audited EVC/EVK stack rather than a fresh lending implementation, it has been reviewed by four independent firms across nine engagements including invariant fuzzing, it re-audits each upgrade, and it runs an Immunefi bug bounty. Upgrades sit behind a correctly configured 48-hour timelock. Euler Labs incubated the project.

The book is a different story. Despite documentation that describes a general credit market across several assets, 95% of Twyne's value sits in one Aave market — Pendle principal tokens of Strata's senior USDe tranche — and a single borrower holds roughly 81% of the collateral in it, at a health factor near 1.05. The wstETH and Euler markets the docs foreground are, by comparison, dust. Twyne's risk today is not really the risk of a credit-delegation protocol; it is the risk of one large leveraged carry trade with a protocol wrapped around it.

## At a glance

| | |
|---|---|
| **What it does** | Lets lenders delegate unused borrowing capacity on Aave V3 and Euler V2 to borrowers who want higher leverage against their own collateral. |
| **Where the money is** | ~95% of TVL is one market: Aave PT-srUSDe maturing 22 Oct 2026, borrowing USDe against it. The advertised wstETH and Euler markets hold negligible amounts. |
| **Concentration** | One borrower holds ~81% of protocol collateral; the top two hold ~99%. Health factors cluster between 1.02 and 1.05. There is no per-borrower cap. |
| **Who controls it** | A 4-of-6 multisig, with a 48-hour timelock on upgrades only. A separate 4-of-6 multisig can pause. No DAO, no token, no on-chain voting. |
| **Audits** | Nine engagements across Electisec (yAudit), Enigma Dark and SecEureka, including fuzzing and per-upgrade reviews. Immunefi bounty capped at $50,000. |
| **Oracle** | Twyne deliberately uses Aave's own price, so the two layers can never disagree. For the dominant market that price is a capped USDT/USD feed on both the collateral and the debt. |
| **Biggest risk** | A June 2026 change moved arbitrary-call and all risk-parameter powers out from behind the timelock, and no audit appears to cover it. |

## Risk by axis

**Smart Contract — 6.0.** Twyne reuses rather than reinvents: the credit vaults are Euler EVK vaults, and the Aave aToken wrapper is a fork of Aave's own ERC-4626 static aToken. The genuinely new surface is roughly 3,000 lines, and it has been well covered — [Electisec/yAudit](https://reports.electisec.com/2025-04-Twyne) five times, Enigma Dark three invariant-fuzzing engagements, and SecEureka (Josselin Feist, formerly Trail of Bits' head of security research) three times, with each upgrade re-reviewed rather than a single launch audit. That is real security spend for a team of this size.

The deduction is governance-shaped, not bug-shaped. At the commit SecEureka's most recent review names, the protocol's arbitrary-call function and every risk-parameter setter were behind the 48-hour timelock. A commit dated 18 June 2026 introduced an "admin" role and moved all of them to the 4-of-6 multisig, executing instantly. On-chain reads confirm the post-change version is what is deployed, and we can find no audit dated after that commit. Because the contract holding those powers also governs all six credit vaults and both oracle routers, the multisig can repoint an oracle in a single transaction with no delay — the one path that could take Credit-LPs to zero. The timelock still protects code upgrades, and the bounty is only $50,000 against $13.7M, which is thin.

**Economic — 3.5.** The weak axis, and the reason for the overall score. Aggregate loan-to-value against Aave is about 88% versus a 93.26% liquidation threshold, with health factors bunched between 1.02 and 1.05 — very little room. The collateral is six wrappers deep: Ethena USDe, tranched by Strata into a senior claim, stripped by Pendle into a principal token, deposited into Aave, wrapped by Twyne, then held in a per-borrower vault. The borrowed asset is USDe itself, so the trade is close to delta-neutral and pulls toward par at the October maturity, which is genuinely why such thin health factors are survivable here and would be reckless elsewhere.

Two design details deserve attention. Aave prices both the collateral and the debt off a capped USDT/USD feed plus a fixed 3.77%-per-year discount curve, and Twyne inherits that price by construction. That makes the position immune to principal-token market illiquidity — a real risk reduction — but it also means the oracle cannot see credit impairment. If the Strata senior tranche or USDe were to deteriorate, the feed would keep quoting about $0.99, nothing would liquidate, and the loss would surface at maturity as bad debt rather than as a liquidation. Separately, Twyne's external safety buffer is set to 100% on every Aave market, so its own early-warning trips at exactly the health factor where Aave itself liquidates, leaving no head-room for Twyne's preferred "liquidation by inheritance" to run first. The Euler wstETH market uses 99%; the Aave markets do not.

A smaller signal worth reading: an already-matured principal-token market sits at 99.99% utilisation, meaning its lenders cannot withdraw. It holds only about $1,300, so it is not a loss event — but it is a live demonstration that nothing compels a borrower to unwind after maturity, and the dominant market matures on 22 October 2026.

**Project — 5.0.** Twyne was incubated by Euler Labs, which both led the round and supplies the codebase it runs on — the strongest single endorsement available to it. Operational transparency is above average for the size: open-source contracts with real commit history, a public liquidation bot, a public CLI, a risk dashboard, and a security page that links every audit.

Against that, the team is pseudonymous — the main contributor is a recognised name in the audit community, but no legal entity or real names are published. Funding is a single $450,000 pre-seed from June 2025, less than 3.5% of current TVL, with no insurance fund and no meaningful treasury. There is no governance at all: no token, no DAO, no voting. Every parameter and upgrade is six pseudonymous keyholders. And TVL going from roughly $2.9M to $13.7M in six weeks is not adoption — it is one depositor, and it can leave the same way.

## Bottom line

Twyne is a well-built protocol carrying a badly concentrated book, and the two should be judged separately. Nothing is broken today: there is no bad debt, no position is liquidatable, and the principal-token-versus-USDe structure is more stable than the raw leverage numbers imply.

But the risks here are not the kind that show up gradually. They are two discrete jumps — a governance-key event, now that arbitrary-call powers sit outside the timelock unaudited; or a credit event at Strata or Ethena, which the oracle is specifically designed not to register. Lenders should note they are the ones who absorb losses if a position falls through to Aave's own liquidation; the protocol's documentation says so plainly. Size small, and treat the 22 October 2026 maturity as a hard review date.

**Watch items:** whether the June 2026 access-control change was ever audited; whether the arbitrary-call function is re-gated behind the timelock; the largest borrower's health factor and any move to exit; srUSDe and USDe credit quality tracked independently of the Aave feed, which will not move on impairment; the external safety buffer, if it is ever lowered from 100%; and the October maturity unwind.

*Assessment based on public documentation, published audit metadata, and independent on-chain verification of admin topology, risk parameters, oracle configuration, and every position in the protocol. Audit firms, dates and scope were confirmed; finding-level severity and resolution detail could not be read, as the report bodies are not publicly retrievable. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-28 — first publication at 4.5 (contract 6.0, economic 3.5, project 5.0).*
