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
*Synthetic dollar · HyperEVM · built on Hyperliquid · ~$2.67M · live since May 2026 · verified 2026-07-28*

> **Note on the name.** Monetrix's stablecoin is called USDM. Two unrelated products share that ticker — Mento's USDm on Celo and Mountain Protocol's USDM. This report covers only Monetrix's, on HyperEVM.

## Summary

Monetrix is a delta-neutral synthetic dollar native to Hyperliquid. You deposit USDC and receive USDM one-for-one; stake USDM into sUSDM and its exchange rate rises as yield accrues. The yield comes from a basis trade — spot collateral hedged with short perpetuals — plus funding capture, maker rebates and equity in Hyperliquid's HLP vault.

The genuine innovation is where the trade runs. Ethena and similar products execute on centralised exchanges, so holders trust an issuer's attestation that the collateral exists. Monetrix runs on Hyperliquid's own on-chain orderbook, meaning the positions are readable on-chain rather than asserted. That is a real structural improvement, and the protocol's four-gate settlement pipeline — which caps how much yield can be declared and at what annualised rate — shows the team thought carefully about the failure mode where a synthetic dollar prints yield it has not earned.

The problem is the buffers. Backing exceeds supply by 15 basis points, the insurance fund holds a tenth of one percent of backing, and roughly 97% of the collateral sits outside the Ethereum-compatible layer where the contracts can only see it through a translation layer that has been reviewed once — and in which that one review found a bug that overstated backing. This is an early-stage protocol whose documentation describes a more robust product than the chain currently shows.

## At a glance

| | |
|---|---|
| **What it does** | Deposit USDC, mint USDM 1:1, stake into sUSDM for yield from a delta-neutral basis trade run on Hyperliquid's orderbook. |
| **Backing** | $2,670,652 against $2,666,553 of USDM — a collateral ratio of **100.15%**, a buffer of about $4,100. |
| **Where the backing is** | Only 3.1% sits in the EVM contracts. The other ~97% is on HyperCore — spot, portfolio margin, the perp hedge and HLP equity — visible to the contracts only through precompile reads. |
| **Insurance fund** | **$2,736 — 0.10% of backing.** The documentation describes it as "sized to absorb black-swan funding events." |
| **How to redeem** | Primary redemption to USDC. Staked holders must wait out an unstaking cooldown first. Liquid USDC on the EVM side is about 3% of supply; 85% of all USDM is staked. |
| **Audits** | One Code4rena public contest, April 2026: **0 High, 1 Medium**. No bug bounty. |
| **Who controls it** | 24-hour timelock on governance, 48-hour on upgrades — both verified and correctly configured. But the operator role, which moves funds, acts instantly, and its holder could not be identified. |
| **Biggest risk** | Almost no loss-absorbing buffer. A small adverse move in funding puts backing below supply. |

## Risk by axis

**Smart Contract — 4.5.** One audit: a [Code4rena](https://code4rena.com/reports/2026-04-monetrix) public contest in April 2026 across roughly 1,700 lines. It returned zero High-severity findings from 36-plus participating researchers, which is a respectable result for a novel codebase and deserves credit.

The qualifiers matter, though. The prize pool was $22,000 — small by contest standards, which limits how much senior attention the code attracted. There is no formal verification and no ongoing bug bounty, so there is no continuous incentive for anyone to keep looking. And the single Medium finding landed on the critical path: the contract that reads backing out of Hyperliquid's portfolio-margin state decoded only the supply side and discarded borrow liabilities, so reported backing was overstated. That inflated figure fed the settlement pipeline, allowing yield to be declared — and USDM minted — against collateral that did not exist. It was found and fixed, which is the process working. But the entire safety argument rests on reading backing correctly across the boundary between two execution environments, and the one review of that layer found a bug in it.

All nine core contracts are upgradeable, and the team's own disclosures note that a single upgrader role can replace every implementation. The 48-hour timelock is the only thing standing in front of that.

**Economic — 3.0.** The weak axis and the reason for the score. Backing was $2,670,652 against $2,666,553 of USDM outstanding — solvent, but a buffer of roughly $4,100 on $2.67M. There is essentially no overcollateralisation; a 0.2% adverse move puts reported backing under liabilities.

The insurance fund is the clearest illustration. Documentation describes it as sized for black-swan funding events. On-chain it holds $2,736 — one tenth of one percent of backing. A single day of sharply negative funding across the book would exhaust it. Meanwhile the protocol's own surplus measure was negative at the time of writing, meaning the settlement pipeline would not currently declare any yield. That is the design working as intended, and worth crediting — but it also indicates the strategy is not presently earning above its reserve floor.

The structural exposures are the familiar basis-trade set: sustained negative funding erodes backing directly, and auto-deleveraging can force-close profitable hedges under stress. Monetrix markets an anti-ADL mechanism, but it has not been tested by a live stress event. Part of the backing is equity in Hyperliquid's HLP vault, which embeds a second protocol's risk inside this one's collateral. And everything is on one venue — the product thesis and the concentration risk are the same fact.

On exit: 85% of supply is staked behind a cooldown, and liquid USDC on the EVM side is about 3% of supply. Anything larger requires unwinding HyperCore positions, which is most expensive precisely when people most want out.

**Project — 3.5.** The team is pseudonymous — three people identified by first name and social handle, credited as the "Hybra team". No legal entity, jurisdiction or backers are disclosed anywhere in the documentation. A share of yield routes to an entity called "the Foundation" which is named in the architecture but never described.

Governance does not exist yet; control is roles plus timelocks, with the documentation stating parameters will migrate to governance over time. For a three-month-old protocol that is a defensible stage-appropriate choice, and the timelocks are genuinely well configured — 24 hours on governance, 48 on upgrades, both verified on-chain as standard, correctly-administered contracts with no shortcut path. That is better than many peers of this size manage.

What could not be verified is who holds the remaining roles, including the operator that bridges funds, manages the hedge and drives the yield pipeline with no timelock at all. Public Hyperliquid RPC endpoints do not retain the historical data needed to identify them. Whether that operator is a multisig or a single key is therefore unknown, and it is the most important open question about this protocol.

## Bottom line

Monetrix is a thoughtful design at an early and thinly-capitalised stage. Running the basis trade on a transparent on-chain orderbook rather than a centralised exchange is a real improvement on the incumbent model, and the settlement gates show genuine care about the way these products usually fail.

But a synthetic dollar is a promise about backing, and the buffers behind that promise are very small: fifteen basis points of overcollateralisation, an insurance fund at a tenth of a percent, 97% of collateral behind a translation layer with one audit and one found bug, and an unidentified operator who can move funds without delay. The gap between what the documentation describes and what the chain shows is itself the finding — not because anything appears dishonest, but because a product of this type is only as good as the accuracy of its backing claims.

At this size it is something to watch rather than something to hold. The things that would change the assessment are cheap to observe and specific: a materially larger insurance fund, a collateral ratio with real room above 100%, disclosure that the operator key is a multisig, and a bug bounty.

**Watch items:** the collateral ratio against 100% — at 100.15% there is no room; the insurance fund as a share of backing; whether the operator and guardian keys are ever disclosed; sustained negative funding, which erodes backing directly; how much of the backing is HLP equity; and the appearance of any bug bounty.

*Assessment based on public documentation, the published Code4rena report, and independent on-chain verification of token supplies, backing, balances, access-control roles and timelock configuration. The holders of the admin, guardian and operator roles could **not** be verified on-chain, because public HyperEVM endpoints do not serve the historical data required — this is stated as a gap rather than an inference. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-28 — first publication at 3.5 (contract 4.5, economic 3.0, project 3.5).*
