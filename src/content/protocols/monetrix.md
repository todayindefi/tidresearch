---
protocol: "Monetrix"
slug: "monetrix"
aliases: ["Monetrix", "monetrix", "Monetrix Finance", "sUSDM"]
chains: ["hyperevm"]
category: "protocol"
protocol_category: "synthetic-dollar"
assessment_type: "full"
audience: "retail"
date: "2026-07-28"
last_verified: "2026-07-28"
featured: false
production: false
built_on: ["Hyperliquid"]
contract_score: 4.5
economic_score: 3.0
project_score: 3.5
overall_score: 3.5
tvl_gross: 2670000
live_since: "2026-05"
audited: true
audit_count: 1
audit_firms: ["Code4rena"]
bug_bounty: false
team_doxxed: false
incident_history: false
is_fork: false
---

# Monetrix — Risk Report
**Significant risk · 3.5 / 10**
*Synthetic dollar · HyperEVM · built on Hyperliquid · live since May 2026 · assessed 2026-07-28*

> **Note on the name.** Monetrix's stablecoin is called USDM. Two unrelated products share that ticker — Mento's USDm on Celo and Mountain Protocol's USDM. This report covers only Monetrix's, on HyperEVM.

*This report pins structure: the design, where the collateral sits, who controls it, and the shape of the buffers. Live magnitudes move daily and are readable on-chain — figures below are bands as at the assessment date, and the analysis is written to stay correct as they drift. Where a number is the whole point, the report says how to check it yourself.*

## Summary

Monetrix is a delta-neutral synthetic dollar native to Hyperliquid. You deposit USDC and receive USDM one-for-one; stake USDM into sUSDM and its exchange rate rises as yield accrues. The yield comes from a basis trade — spot collateral hedged with short perpetuals — plus funding capture, maker rebates and equity in Hyperliquid's HLP vault.

The genuine innovation is where the trade runs. Ethena and similar products execute on centralised exchanges, so holders ultimately trust an issuer's attestation that the collateral exists. Monetrix runs on Hyperliquid's own on-chain orderbook, which means the positions are readable by anyone rather than asserted by someone. That is a real structural improvement on the dominant model, and it is the reason this protocol is worth taking seriously despite its size. The settlement design reinforces it: yield cannot be declared without passing a four-gate pipeline that checks initialisation, a minimum interval, a cap on distributable surplus, and a cap on the implied annualised rate. Those gates exist precisely to stop a synthetic dollar printing yield it has not earned, which is the way this product category usually fails.

What the design does not do is hold much back for when it goes wrong. Backing runs only fractionally above supply — a margin measured in basis points rather than percent — and the insurance fund is sized at roughly a tenth of a percent of backing. Neither is a buffer in any meaningful sense; they are rounding. The overwhelming majority of collateral also sits outside the contracts' own execution environment, reachable only through a translation layer that has been reviewed once, and in which that single review found a bug that overstated backing. None of this makes the protocol dishonest. It makes it thin, early, and dependent on nothing going wrong at a stage when things usually do.

## At a glance

| | |
|---|---|
| **What it does** | Deposit USDC, mint USDM 1:1, stake into sUSDM for yield from a delta-neutral basis trade run on Hyperliquid's orderbook rather than a centralised exchange. |
| **Backing** | Overcollateralisation is negligible by construction — backing tracks supply within basis points. Verify live by comparing `Accountant.totalBackingSigned()` against `USDM.totalSupply()`; anything below 1:1 is the signal that matters. |
| **Where the backing sits** | Only a low single-digit percentage is held in the EVM contracts. The rest — roughly 95%+ — lives on HyperCore as spot, portfolio margin, the perp hedge and HLP equity, visible to the contracts only through precompile reads. |
| **Insurance fund** | On the order of **0.1% of backing**. The documentation describes it as "sized to absorb black-swan funding events." At that scale it cannot absorb an ordinary bad week. |
| **How to redeem** | Primary redemption to USDC. Staked holders must clear an unstaking cooldown first. The large majority of supply (~85%) is staked, while liquid USDC on the EVM side is a low single-digit percentage of supply. |
| **Audits** | One Code4rena public contest, April 2026: **0 High, 1 Medium**. No bug bounty. |
| **Who controls it** | 24-hour timelock on governance, 48-hour on upgrades — both verified and correctly configured. The operator role, which moves funds, acts instantly, and its holder could not be identified. |
| **Biggest risk** | Almost no loss-absorbing buffer, so a modest adverse move in funding is enough to put backing below supply. |

## Risk by axis

**Smart Contract — 4.5.** One engagement: a [Code4rena](https://code4rena.com/reports/2026-04-monetrix) public contest in April 2026 across roughly 1,700 lines of in-scope code. It returned zero High-severity findings from 36-plus participating researchers, which is a respectable result for a novel codebase and should be credited rather than waved past.

The qualifiers are structural rather than incidental. It is a single engagement with a $22,000 prize pool, which is small by contest standards and directly limits how much senior researcher attention the code attracted. There is no formal verification, and — more importantly for an operating protocol — no bug bounty, so there is no standing incentive for anyone to keep looking now that the contest has closed. For a product holding user deposits, an ongoing bounty is the cheapest continuous security available, and its absence is a live gap rather than a historical one.

The single Medium finding landed squarely on the critical path, and understanding it explains the score better than the count does. The contract that reads backing out of Hyperliquid's portfolio-margin state decoded only the supply side and discarded borrow liabilities, so reported backing was overstated. That inflated figure then fed the settlement pipeline, allowing yield to be declared — and fresh USDM minted — against collateral that did not exist. The four gates did not catch it, because the error was upstream of them: the gates validated a number that was already wrong. It was found and fixed, which is the process working as intended. But the entire safety argument for this protocol is that it reads backing correctly across the boundary between two execution environments, and the one review of that boundary found a bug in it. Every contract is upgradeable, and the team's own disclosures note that a single upgrader role can replace all of them, with the 48-hour timelock as the only thing in front of that key.

**Economic — 3.0.** The weak axis, and the reason for the overall score. The protocol operates with essentially no overcollateralisation: backing is designed to track supply closely, and in practice runs above it by a margin in the basis points. That is not a bug — a delta-neutral dollar aims to be fully, not over, collateralised — but it means there is no absorption layer between an adverse move and a shortfall. The insurance fund is the layer that is supposed to provide it, and it holds on the order of a tenth of a percent of backing. A single sustained stretch of negative funding across the book would exhaust it. The gap between what the documentation claims for that fund ("sized to absorb black-swan funding events") and what it can actually absorb is the clearest single finding in this report.

The structural exposures are the familiar basis-trade set, and each interacts badly with a thin buffer. Sustained negative perpetual funding turns the carry into a cost that erodes backing directly, with nothing meaningful to absorb it. Auto-deleveraging can force-close profitable hedges under exactly the stressed conditions where the hedge is most needed; Monetrix markets an anti-ADL mechanism, but it has not been tested by a live stress event and should be treated as unproven rather than absent. Part of the backing is equity in Hyperliquid's HLP vault, which embeds a second protocol's risk inside this one's collateral — a dependency worth pricing separately from the basis trade itself. And everything runs on a single venue: the product thesis and the concentration risk are the same fact, which is an honest trade-off rather than an oversight, but it means a Hyperliquid-level failure is a Monetrix-level failure.

Exit is the other half of the picture. The large majority of supply sits staked in sUSDM behind a cooldown, while liquid USDC held on the EVM side is a low single-digit percentage of supply. Anything beyond that requires unwinding HyperCore positions — which is most expensive precisely when the most people want out. There is no meaningful secondary market to absorb sellers, so primary redemption is the only real exit, and it is rate-limited by design. The protocol's own surplus gate can also decline to declare yield when the strategy has not earned above its reserve floor; that is the design working correctly, and a reader checking the live value should treat a negative reading as informative about carry conditions rather than as a fault.

**Project — 3.5.** The team is pseudonymous — three people identified by first name and social handle, credited as the "Hybra team". No legal entity, jurisdiction, or backers are disclosed anywhere in the documentation. A share of protocol yield routes to an entity called "the Foundation", which is named in the architecture but never described or identified. For a product that holds deposits and runs a discretionary trading strategy, an undisclosed fee recipient and an unnamed operating entity are material gaps, independent of whether the individuals are competent.

Governance does not yet exist; control is roles plus timelocks, with the documentation stating parameters will migrate to governance over time. For a protocol at this stage that is a defensible choice, and the timelocks are genuinely well built — 24 hours on governance, 48 on upgrades, both verified on-chain as standard, correctly-administered contracts with no shortcut execution path. That is better than a good number of larger protocols manage, and it deserves saying plainly.

The unresolved question is who holds the rest of the roles. The operator — which bridges funds, manages the hedge and drives the yield pipeline, with no timelock at all — could not be identified, because public Hyperliquid endpoints do not retain the historical data required to enumerate role holders. Whether that operator is a multisig or a single hot key is therefore unknown, and it is the most consequential open question about this protocol: it is the role that moves money, it acts instantly, and the team's own materials describe it as trusted rather than trust-minimised, with compromise "mitigated off-chain" — a control no outside reader can verify.

## Bottom line

Monetrix is a thoughtful design at an early and thinly-capitalised stage. Running the basis trade on a transparent on-chain orderbook instead of a centralised exchange is a real improvement on the incumbent model, and the settlement gates show a team that has thought carefully about how these products actually fail. Neither of those things is marketing.

But a synthetic dollar is a promise about backing, and the structures standing behind that promise here are slight: overcollateralisation measured in basis points, an insurance fund at roughly a tenth of a percent, the overwhelming majority of collateral behind a translation layer with one audit and one found bug, and an unidentified operator who can move funds without delay. The distance between what the documentation describes and what the chain supports is itself the finding — not because anything appears dishonest, but because a product of this type is worth exactly the accuracy of its backing claims.

At this size it is something to watch rather than something to hold. Usefully, the things that would change the assessment are specific and cheap to observe: a materially larger insurance fund, a collateral ratio with real room above par, disclosure that the operator key is a multisig rather than a single signer, and the appearance of a bug bounty. Any of those would move a score.

**Watch items:** backing against supply — compare `Accountant.totalBackingSigned()` with `USDM.totalSupply()`, and treat anything at or below par as the primary signal; the insurance fund as a *share* of backing rather than its dollar balance; whether the operator and guardian keys are ever disclosed; sustained negative funding, which erodes backing directly and has almost nothing to absorb it; how much of the backing is HLP equity; and the appearance of any bug bounty.

*Assessment based on public documentation, the published Code4rena report, and independent on-chain verification of token supplies, backing, balances, access-control roles and timelock configuration. The holders of the admin, guardian and operator roles could **not** be verified on-chain, because public HyperEVM endpoints do not serve the historical data required — this is stated as a gap rather than an inference. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-28 — first publication at 3.5 (contract 4.5, economic 3.0, project 3.5).*
