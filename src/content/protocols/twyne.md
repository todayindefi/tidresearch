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
---

# Twyne — Risk Report
**Elevated risk · 4.5 / 10**
*Credit-delegation layer · Ethereum · built on Aave V3 + Euler V2 · live since Aug 2025 · assessed 2026-07-28*

*This report pins structure: how the protocol is built, who controls it, and the properties that generate its risk. The book itself — which markets are active, who the borrowers are, how large the positions run — changes continuously and is readable on-chain. Figures below are bands as at the assessment date; the analysis is written to stay correct as the book turns over.*

## Summary

Twyne rents out unused borrowing power. Lenders deposit a receipt token — a wrapped Aave aToken or a Euler eToken — into a Twyne credit vault. Borrowers pull that idle capacity into their own position, so the combined balance goes into Aave or Euler and the borrower can run a higher loan-to-value against their own capital than the base market would permit. The lender earns a delegation fee on top of the ordinary supply rate. It is a genuinely clever piece of mechanism design: credit that would otherwise sit idle is routed to someone who values it, without either party leaving the underlying market.

The engineering is better than the protocol's size would predict. Twyne is built on Euler's audited EVC/EVK stack rather than a fresh lending implementation, and the Aave-side wrapper is a fork of Aave's own static aToken rather than a bespoke one. Four independent firms have reviewed it across nine engagements, including invariant fuzzing, and each upgrade has been re-audited rather than relying on a single launch review. Code upgrades sit behind a correctly configured 48-hour timelock, and Euler Labs incubated the project. This is real security investment for a team of this scale.

The book is a different matter, and it is where the score comes from. Twyne's documentation describes a general credit market across several assets; in practice the protocol has run as one concentrated position at a time, with the advertised secondary markets holding negligible amounts. The reason is structural rather than incidental: **there is no per-borrower cap, so the protocol's risk is whatever its largest borrower happens to be doing.** At the time of assessment that was a levered carry trade in Pendle principal tokens over Strata's senior USDe tranche, with a single borrower accounting for the large majority of all collateral. The specific trade will change. The property that let one borrower become the protocol will not, unless the design does.

## At a glance

| | |
|---|---|
| **What it does** | Lets lenders delegate unused borrowing capacity on Aave V3 and Euler V2 to borrowers seeking higher leverage against their own collateral. |
| **Concentration** | **No per-borrower cap exists.** In practice the large majority of collateral has sat with a single borrower, and the top two have accounted for nearly all of it. Concentration is bounded only by per-market supply caps. |
| **The dominant position** | A levered principal-token carry trade: borrow the same asset the collateral eventually redeems into, so the position is near delta-neutral and pulls toward par at maturity. That is why health factors barely above the liquidation line are survivable here and would be reckless in a volatile market. |
| **Maturity risk** | Principal-token markets expire on a fixed date. Nothing in the design compels a borrower to unwind afterwards — a small already-matured market has sat effectively fully utilised, leaving its lenders unable to withdraw. |
| **Who controls it** | A 4-of-6 multisig, with a 48-hour timelock on upgrades only. A separate 4-of-6 multisig can pause. No DAO, no token, no on-chain voting. |
| **Audits** | Nine engagements across Electisec (yAudit), Enigma Dark and SecEureka, including fuzzing and per-upgrade reviews. Immunefi bounty capped at $50,000. |
| **Oracle** | Twyne deliberately inherits Aave's own price, so the two layers can never disagree. For principal-token markets that price is a capped stablecoin feed plus a fixed discount curve — smooth by design, and blind to credit impairment by the same design. |
| **Biggest risk** | A June 2026 change moved arbitrary-call and all risk-parameter powers out from behind the timelock, and no audit appears to cover it. |

## Risk by axis

**Smart Contract — 6.0.** Twyne reuses rather than reinvents. The credit vaults are Euler EVK vaults; the Aave aToken wrapper forks Aave's own ERC-4626 static aToken. The genuinely novel surface is on the order of three thousand lines, and it has been well covered for its size — [Electisec/yAudit](https://reports.electisec.com/2025-04-Twyne) five times, Enigma Dark three invariant-fuzzing engagements, and SecEureka (Josselin Feist, formerly Trail of Bits' head of security research) three times. Crucially, each upgrade was re-reviewed rather than the protocol resting on a launch audit, which is a discipline many larger projects skip.

The deduction is governance-shaped rather than bug-shaped, and it is worth stating precisely because it is the kind of change that is easy to make and hard to notice. At the commit that SecEureka's most recent review names, the protocol's arbitrary-call function and every risk-parameter setter sat behind the 48-hour timelock. A commit dated 18 June 2026 introduced an "admin" role and moved all of them to the multisig, executing instantly. On-chain reads confirm the post-change version is what is deployed, and no audit dated after that commit could be found.

Why it matters more than a parameter tweak: the contract holding those powers is also the governor of every credit vault and both oracle routers. So the multisig can repoint an oracle in a single transaction with no delay — which is the one path that could take lenders to zero, since a mispriced collateral asset lets a position borrow against value that does not exist. The 48-hour timelock still protects code upgrades, so the *code* cannot be swapped without warning; it is the *parameters and the arbitrary-call escape hatch* that lost their delay. The bug bounty caps at $50,000, which is thin against the value the protocol secures and well below what exploiting this path would be worth.

**Economic — 3.5.** The weak axis. Aggregate loan-to-value has run in the high 80s against a liquidation threshold in the low 90s, with individual health factors bunched barely above the line. In most lending contexts that would be alarming. Here it is deliberate, and understanding why is essential to reading the risk correctly: the collateral is a principal token that redeems into the same asset being borrowed, so the position is close to delta-neutral and mechanically converges toward par as maturity approaches. Thin margins are survivable in that structure in a way they would never be against volatile collateral.

The collateral is nonetheless deep — Ethena's USDe, tranched by Strata into a senior claim, stripped by Pendle into a principal token, deposited into Aave, wrapped by Twyne, then held in a per-borrower vault. Six layers, each with its own failure mode, and the price feed sees none of them. Aave prices both legs off a capped stablecoin feed plus a fixed annual discount curve, and Twyne inherits that price by construction rather than running its own oracle. This is a genuine risk *reduction* in one direction: the position cannot be liquidated by principal-token market illiquidity or a transient wobble, and the two layers can never disagree about price, which removes an entire class of cross-protocol failure. But the same property means the oracle is structurally incapable of registering credit impairment. If the senior tranche or the underlying stablecoin deteriorated, the feed would keep quoting close to par, nothing would liquidate, and the loss would surface at redemption as bad debt rather than as a liquidation anyone could act on.

Two further design points compound this. Twyne's external safety buffer is set to its maximum on the Aave markets, meaning its own early-warning trips at exactly the health factor at which Aave itself liquidates — leaving no head-room for Twyne's preferred "liquidation by inheritance" to run first. The Euler wstETH market sets a real buffer; the Aave markets do not. And maturity is an unmanaged edge: principal-token markets expire on a fixed date, but nothing in the design compels a borrower to unwind afterwards. A small already-matured market has sat effectively fully utilised, its lenders unable to withdraw. The amount involved is a rounding error, so it is not a loss event — it is a working demonstration of the mechanism, at a scale where it does not hurt yet.

**Project — 5.0.** Twyne was incubated by Euler Labs, which both led its round and supplies the stack it runs on. That is the strongest single endorsement available to a protocol this size, and it is not merely reputational — building on EVK means the hardest parts of the lending logic are inherited from audited code rather than written fresh. Operational transparency is well above average for the scale: open-source contracts with genuine commit history, a public liquidation bot, a public CLI, a risk dashboard, and a security page that links every audit including those that found things.

Against that, the team is pseudonymous. The main contributor is a recognised name in the audit community, which counts for something, but no legal entity or real names are published and there is no disclosed accountable counterparty. Funding is a single pre-seed round of a few hundred thousand dollars from mid-2025 — a small fraction of the value the protocol now secures, with no insurance fund and no treasury of consequence. There is no governance at all: no token, no DAO, no voting. Every parameter and every upgrade rests with the same handful of pseudonymous keyholders, which is defensible at this stage but should be understood plainly rather than assumed away.

The growth pattern deserves its own caution. TVL multiplied several-fold in a matter of weeks, which reads like traction but is not — it was essentially one depositor arriving. The same concentration that makes the risk profile sharp also makes the growth figure meaningless as a signal of adoption, and it can reverse just as quickly and for the same reason.

## Bottom line

Twyne is a well-built protocol carrying a badly concentrated book, and the two deserve to be judged separately. The code, the audit discipline and the timelock on upgrades are all genuinely good. Nothing was broken at assessment: no bad debt, no liquidatable position, and the carry structure is considerably more stable than the raw leverage figures suggest.

But the risks here do not arrive gradually. They are two discrete jumps. The first is a governance-key event, now that arbitrary-call and parameter powers sit outside the timelock with no audit covering the change. The second is a credit event somewhere in the collateral stack — which the oracle is specifically designed not to register, so the first signal would be a failed redemption rather than a liquidation. Lenders should also note where losses land: if a position falls through to the underlying protocol's own liquidation, it is the credit-LPs who absorb the shortfall, and Twyne's documentation says so plainly.

The durable summary is this: **as long as there is no per-borrower cap, Twyne's risk is the risk of its largest position, whatever that position happens to be.** Judge it by checking what the biggest borrower is currently doing, not by the protocol's description of itself. Size small, and treat each dominant market's maturity date as a hard review point.

**Watch items:** whether the June 2026 access-control change is ever audited, and whether the arbitrary-call function is re-gated behind the timelock; whether a per-borrower cap is introduced; what the largest borrower is doing and how much of the book it represents; the credit quality of whatever sits under the dominant collateral, tracked independently of the Aave feed, which will not move on impairment; the external safety buffer on Aave markets, if it is ever lowered from maximum; and the unwind behaviour around each maturity date.

*Assessment based on public documentation, published audit metadata, and independent on-chain verification of admin topology, risk parameters, oracle configuration, and every position in the protocol at the assessment date. Audit firms, dates and scope were confirmed; finding-level severity and resolution detail could not be read, as the report bodies are not publicly retrievable. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-28 — first publication at 4.5 (contract 6.0, economic 3.5, project 5.0).*
