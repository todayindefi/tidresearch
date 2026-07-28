---
protocol: "Aave V3"
slug: "aave-v3"
aliases: ["Aave", "aave", "Aave v3", "AaveV3", "Aave Protocol"]
chains: ["ethereum", "arbitrum", "optimism", "polygon", "avalanche", "base", "gnosis", "scroll", "bnb", "zksync"]
category: "protocol"
protocol_category: "lending"
assessment_type: "full"
audience: "retail"
date: "2026-07-28"
last_verified: "2026-07-28"
featured: true
production: false
contract_score: 9.0
economic_score: 8.0
project_score: 8.0
overall_score: 8.0
tvl_gross: 24590000000
tvl_borrowed: 10840000000
live_since: "2022-03"
audited: true
audit_count: 25
audit_firms: ["Certora", "Trail of Bits", "SigmaPrime", "OpenZeppelin", "PeckShield", "ABDK", "MixBytes"]
bug_bounty: true
bug_bounty_amount: 10000000
bug_bounty_platform: "Immunefi"
team_doxxed: true
incident_history: true
is_fork: false
---

# Aave V3 — Risk Report
**Low risk · 8.0 / 10**
*Lending protocol · 10+ chains · ~$24.6B supplied / ~$10.8B borrowed · live since Mar 2022 · verified 2026-07-28*

## Summary

Aave V3 is the largest lending protocol in DeFi and the benchmark others are measured against. Suppliers deposit assets to earn yield; borrowers take overcollateralised loans against them. V3 added efficiency mode for correlated pairs, isolation mode with debt ceilings for newer assets, per-asset supply and borrow caps, and the Capo oracle system that caps how fast a derivative's exchange rate may grow.

Its defining strength is process rather than any single feature. Continuous formal verification runs against every code change, risk parameters are set by a dedicated firm publishing its methodology in public, upgrades require a governance vote plus a multi-day timelock, and there is no admin function that can withdraw user funds. Across four years and peak TVL above $20B, no Aave V3 contract has been exploited.

Its defining weakness is what it accepts as collateral. In April 2026 an attacker exploited a bridge belonging to KelpDAO — not Aave — to mint unbacked rsETH, deposited it on Aave, and borrowed roughly $200M against it. Aave's code worked exactly as designed; the collateral simply stopped being real. Depositors were made whole, but the resolution depended on a discretionary rescue rather than the protocol's own backstop, and that distinction is the honest reason this scores 8.0 rather than higher.

## At a glance

| | |
|---|---|
| **What it does** | Pooled overcollateralised lending. Supply assets to earn interest, borrow against collateral, with per-asset caps and correlated-pair efficiency mode. |
| **Size** | ~$24.6B supplied, ~$10.8B borrowed, ~44% utilisation. Ethereum is ~83% of it; the rest is spread across ten-plus chains. |
| **Who controls it** | AAVE holders via on-chain votes. ~1-day timelock for routine parameters, ~7-day for upgrades and listings. A guardian multisig can pause but cannot upgrade or change parameters. |
| **Audits** | 25+ engagements including Certora, Trail of Bits, SigmaPrime and OpenZeppelin, plus continuous formal verification. $10M+ Immunefi bounty, among the largest in DeFi. |
| **Track record** | Zero V3 contract exploits in four years. One ~$200M bad-debt event in April 2026, caused by an external asset, fully resolved with no depositor loss. |
| **Oracles** | Chainlink with staleness checks, Capo rate-growth caps on derivatives, and sequencer uptime feeds on L2s. |
| **Biggest risk** | Collateral it doesn't control — liquid staking and restaking tokens whose backing can fail upstream. |

## Risk by axis

**Smart Contract — 9.0.** This is as strong as DeFi gets. Over 25 audit engagements across V1, V2 and V3, with reports published openly in the Aave repo. The differentiator is Certora's continuous formal verification: core invariants such as solvency and interest accrual are mathematically proven against every change, not merely tested. The Immunefi bounty exceeds $10M, which is a genuine deterrent rather than a gesture.

The admin model is equally disciplined. Upgrades need a passed vote plus a roughly seven-day timelock. The emergency guardian can freeze or pause but cannot upgrade contracts or move parameters. Chaos Labs holds a delegated Risk Steward role for routine adjustments, but it is bounded on-chain — it cannot set an LTV to 100% or remove caps. There is no admin withdrawal function anywhere.

Four years with zero V3 exploits at this size is the strongest empirical safety signal available in this sector. It is not 10.0 only because the proxy pattern remains upgradeable, so a governance capture or a flaw in the governance contracts is a non-zero, if remote, path.

**Economic — 8.0.** The risk architecture is the most mature in lending: efficiency mode captures capital efficiency without blending correlated and uncorrelated exposure, isolation mode bounds the damage a bad listing can do, and per-asset caps are actively managed against real on-chain liquidity. Liquidation is permissionless with the deepest bot ecosystem in DeFi, and it has cleared multiple violent market-wide drawdowns without systemic failure.

The deduction is the April 2026 KelpDAO event, and it is worth understanding precisely because it is the failure mode most likely to recur. An attacker minted about 116,500 unbacked rsETH through a bridge exploit, supplied it to Aave, and borrowed roughly $190–236M of WETH against collateral that no longer existed. Realised bad debt reached roughly $200M — around 170 times the previous worst incident. Markets were frozen within hours and by June 2026 rsETH backing was fully restored with no supplier taking a haircut.

But read how it was closed. The Umbrella backstop was slashed first and covered only about $50M of a ~$200M hole. The remainder came from Kelp recovering over 95% of the unbacked tokens and a coalition of other DAOs contributing roughly $314M in loans and donations. That is a good outcome achieved through goodwill and coordination, not through the protocol's own capital. The lesson is not that Aave is fragile — it absorbed a nine-figure hit and paid everyone — but that its formal backstop is smaller than its tail risk, and that every liquid staking or restaking token it lists is a dependency on somebody else's security.

**Project — 8.0.** Aave is run by a doxxed founder with a nine-year track record, a substantial engineering organisation, and one of the largest treasuries in DeFi. Governance is fully on-chain with hundreds of executed proposals — no Snapshot-plus-trusted-executor arrangement. Responsibilities are split across independent service providers for risk, development, security and treasury, which avoids single-entity dependency.

AAVE's tokenomics are mature: fixed 16M supply, no inflation, distribution settled since 2020, no pending unlock cliffs. Deductions are modest and structural — UK entity exposure, governance that is deliberately slow enough that a guardian can pause but cannot proactively steer during a black swan, cross-chain governance bridges adding trust assumptions on non-Ethereum deployments, and residual key-person association with the founder.

## Bottom line

Aave V3 is the reference point for lending risk. If you are comfortable with any DeFi lending protocol, it should be this one first — the audit depth, formal verification, timelocked governance, bounded admin powers and four-year clean contract record are unmatched, and it is the benchmark the rest of this section is scored against.

The realistic risk is not that Aave's code breaks. It is that something Aave accepts as collateral turns out not to be backed, which happened at scale in April 2026 and was resolved by a rescue rather than by design. Depositors in blue-chip markets — ETH, WBTC, and major stablecoins — carry very little of this. Depositors in markets exposed to liquid restaking tokens carry more, and should size accordingly.

**Watch items:** the post-rsETH collateral framework for restaking tokens, which was still being finalised; whether the Umbrella backstop is resized toward the scale of a realistic tail event; per-chain concentration on thinner L2 deployments, where the same shortfall bites far harder than on Ethereum; and supply-cap changes on any newly listed LST or LRT.

*Assessment based on public documentation, published audits, on-chain governance records and market data. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-28 — first publication at 8.0 (contract 9.0, economic 8.0, project 8.0), reflecting the April 2026 rsETH bad-debt event and its June 2026 resolution.*
