---
protocol: "Royco"
slug: "royco"
aliases: ["Royco Protocol", "Royco Day", "Royco Dawn", "Royco V1", "Royco V2", "Boyco", "srRoyUSDC", "Senior Royco USDC", "roywstETH", "Royco ETH"]
chains: ["eth", "arbitrum", "base", "avalanche"]
category: "protocol"
protocol_category: "structured-product"
assessment_type: "full"
audience: "retail"
date: "2026-08-14"
last_verified: "2026-08-14"
last_revised: "2026-11-03"
production: false
published: true
featured: false
contract_score: 5.0
economic_score: 3.5
project_score: 3.5
overall_score: 4.0
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-royco-report>

# Royco — Risk Report

**Elevated risk · 4.0/10 · provisional**

Structured-yield protocol · Senior, Junior and liquidity-provider tranches

## Summary

Royco separates exposure to yield sources into tranches with different loss and liquidity roles. In Royco Day, Junior capital provides finite first-loss coverage for Senior positions, while the Senior Liquidity Provider (SLP) tranche supplies secondary exit liquidity. Protection depends on the specific market's collateral, accounting, posted capital and withdrawal rules.

The managed **srRoyUSDC and roywstETH vaults are documented as winding down and withdrawal-only, with deposits closed**, as observed November 3. The notice does not establish its effective date, remaining assets or completed returns. It applies to those managed vaults, rather than every direct Royco Day market. [Official vault notice](https://docs.royco.org/vault-products).

The main risks are the limits of first-loss protection, liquidity restrictions and dependence on administrative and curator-controlled processes. Current deployment controls and wind-down completion remain unverified; the ratings are provisional.

## Product scope

Royco Day's three-tranche markets are a different generation from Dawn's two-tranche system and the legacy Incentivized Action Marketplace (IAM), associated with Boyco incentive programs. The official IAM repository describes that software as no longer maintained. Live legacy contracts do not establish an available migration or ongoing software maintenance. [IAM repository](https://github.com/roycoprotocol/royco-iam).

The managed **srRoyUSDC** vault allocates USDC to Senior tranches. **roywstETH** posts wstETH collateral, borrows USDC and deploys it into srRoyUSDC. The ETH product therefore adds borrowing costs and collateral-liquidation risk to the underlying vault and tranche exposures. A portfolio of Senior positions is not necessarily a portfolio of independent risks. [Vault operations](https://docs.royco.org/how-the-vaults-work), [ETH vault mechanism](https://docs.royco.org/royco-eth-roywst-eth).

## 1 · Smart Contract — 5.0

Royco uses shared administration and per-market contracts to define tranche accounting, yield allocation and access to underlying assets. Managed vaults add curator and infrastructure permissions. The contract risk depends on the deployed generation and actual authority paths, not just the token's name or published market design.

The official Day address page identifies these scaffolding contracts across Ethereum, Arbitrum, Base and Avalanche:

| Component | Documented address |
|---|---|
| AccessManager | `0x82EecE4a736db0767370d2DfFdE9BDF6e38AaeB8` |
| Factory | `0xaAAaaAAAaE46cA12Bf3810DF8C13c5E8A4400812` |
| EntryPoint | `0xaf55a0c251690d9322b5F94b7e50EE895750262c` |

These are documentary pointers. Current bytecode, proxy targets, active-market bindings and migration of older positions were not independently verified. Chain badges describe this documented Day scope, not a completed authority audit. [Key addresses](https://docs.royco.org/key-addresses).

The security page lists **20 engagements**, including Day audits, formal-verification work and other reviews. It advertises a **$250,000 bounty**, monitoring, and **3-of-5 / 72-hour controls**, while qualifying that some features may remain in the pipeline. Published engagement counts and advertised controls do not establish current implementation coverage or effective enforcement. Individual reports, fixes, deployed-code correspondence and current bounty scope were not re-reviewed. [Security disclosures](https://www.royco.org/security).

Historical August observations found a 3-of-4 root, an undelayed conversion-rate setter and a possible delay-rerouting path in the deployment then examined. Those observations neither establish today's Day configuration nor become resolved by different advertised controls. Current AccessManager roles, selector permissions, admin delays, role-change paths, signer arrangements and third-party vault powers require a deployment-specific walk. An administrative delay shorter than a usable withdrawal path is not assured depositor protection.

## 2 · Economic — 3.5

Senior protection comes from the amount and accessibility of Junior capital under the market's loss-allocation rules. Losses beyond that buffer can impair Senior. Junior absorbs risk in exchange for potential yield; SLP supports secondary liquidity rather than guaranteeing principal. First-loss coverage is not legal insurance or a promise to return a dollar amount.

Posted Junior capital can absorb contractual losses even when its owner is affiliated with an underlying issuer. Affiliation and concentration can affect withdrawals, replenishment, control and incentives, but do not justify mechanically subtracting already posted capital from loss protection. A current buffer estimate requires current balances, marks and enforceable withdrawal rules.

Market prices and accounting values can diverge. A fundamental-value or exchange-rate oracle may recognize reported impairment without following a secondary discount. Equally, a market sell-off need not trigger protection under that accounting mark. Smooth historical rates do not establish that impairment is impossible. Pricing inputs, write permissions, stale-data handling and loss-finalization conditions remain market-specific checks.

### Tranche exits

Published mechanics restrict Junior withdrawals when its full balance backs Senior exposure. During an observation period, Senior and Junior deposits/redemptions and SLP redemptions are blocked; permitted SLP deposits are a separate operation. Senior and Junior redemption delivers assets in kind. SLP routes can deliver an LP position, underlying constituents or an optimized combination. These are asset-conversion paths, not necessarily immediate cash settlement. A suggested AMM route does not establish liquidity at a holder's required size. [Deposit and withdrawal mechanics](https://docs.royco.org/deposits-and-withdrawals).

### Managed-vault withdrawals

The specific withdrawal-only notices take precedence over generic descriptions of accepting deposits. The documented process uses **30-day withdrawal epochs followed by approximately two days of liquidity processing**, while an overview also describes withdrawals as taking up to 30 days. Neither description is a tested maximum during wind-down. Requesting, processing and claiming are separate stages, and direct vault withdrawals require KYC/KYB. A queue entry is not completed payment.

The documentation prioritizes Royco's own vaults, then priority partners, then remaining withdrawals. Dialectic processes liquidity through Makina and Concrete infrastructure. That introduces operational, priority and third-party risks; an infrastructure description does not establish legal segregation or insolvency protection. Current remaining assets/debt, claim completion rates and actual timing were not measured. The wind-down alone is not evidence of default or loss. [Withdrawal mechanics](https://docs.royco.org/deposits-and-withdrawals), [vault operations and priority](https://docs.royco.org/how-the-vaults-work).

## 3 · Project — 3.5

The documentation assigns protocol and infrastructure governance to **Royco Foundation** and vault allocation and processing to **Dialectic**. The Foundation can revoke curator access, while the curator makes investment decisions within described permissions. Governor, curator and infrastructure provider are distinct roles; they are not one established legal obligor. [Governance and fees](https://docs.royco.org/governance-and-fees).

The reviewed vault access policy requires KYC/KYB and excludes U.S. persons. Documentary fees are 0% management and 10% vault performance fees, rather than freshly measured contract parameters. Vault-specific restrictions should not be extended automatically to every direct market or secondary transaction.

The Foundation's registered legal identity and jurisdiction, the exact curator contracting entity, vault-share obligor, governing law, enforceable holder remedies and insolvency treatment remain unresolved. The vault page's unfilled Terms link is a documentation gap, not proof that no agreement exists elsewhere. Code audits do not establish independent financial or reserve assurance.

Foundation and curator administration constitute governance even without an established depositor voting token or veto. A related Frax proposal concerning Royco SLP is governance of the allocating protocol, not Royco governance or proof of deployed allocation. No comprehensive incident, enforcement or tokenomics review was completed in this refresh. Historical incidents at other protocols and scheduled incentive-program outflows do not by themselves establish a Royco exploit, stranded funds or insolvency.

## What to watch

- Remaining managed-vault assets, debt, request queues and completed payments, including priority handling and the effective wind-down date.
- Current Day and vault administrative paths, practical delays, oracle-write authority and any permission changes during wind-down.
- Market-specific Senior/Junior/SLP values, loss recognition, restrictions and executable exit routes.
- Legal entities, applicable terms, holder claims and independent reserve assurance.

## Sources, scores and review scope

The assessment uses a November 3 documentary refresh of official product, withdrawal, governance, address and security pages, supported by the retained research records. It is not a fresh RPC investigation, audit-PDF review, market-balance measurement, withdrawal simulation or complete incident-history search. The date the wind-down notice was observed is not its effective date. Where a generic deposit description conflicts with a specific withdrawal-only notice, the specific notice governs the product description.

**Full verification remains August 14, 2026; the scoped revision date is November 3, 2026.** All scores are retained provisionally pending current deployment and wind-down evidence, not newly certified by the additional documentation. Higher scores mean safer on a 1–10 scale:

| Dimension | Score | Principal considerations |
|---|---:|---|
| Smart Contract | 5.0 | Published security work, with current authority enforcement and audit-to-deployment coverage unresolved |
| Economic | 3.5 | Finite first-loss protection, accounting/oracle dependence, restricted exits and unmeasured wind-down completion |
| Project | 3.5 | Documented governance/curator roles, with legal accountability and return-of-capital evidence incomplete |
| Overall | 4.0 | Provisional protocol assessment; equal to the three-axis mean |

The original assessment's wider chain coverage included Berachain, Sonic, Plume and Corn alongside the four chains shown above. That is historical product-family scope, not a current deployment census. The historical Berachain-specific assessment was Contract **5.0**, Economic **3.0**, Project **3.5**, Overall **3.5** for its earlier scope; it is not a current Day-chain rating or an automatic grade for a new position.

August buffer percentages, idle balances, utilization, concentration and APYs are historical observations. They are not current protection or exit capacity and are not carried into headline TVL, live yield or market recommendations. No new chain override, token-level rating or unsupported current TVL is inferred. The provisional ratings require reassessment when current control, loss, protection or completed-return evidence becomes available.

## Revision history

- **2026-11-03:** Documentary product, wind-down, access and security-disclosure refresh. Staging presentation preserves the provisional scores and August full-verification date, with product-generation and evidence limits separated.
- **2026-08-14:** Original full assessment and dated chain/market observations.

</div>
