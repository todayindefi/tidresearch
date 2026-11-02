---
protocol: "Fluid"
slug: "fluid"
aliases: ["Instadapp", "Fluid", "Fluid Protocol", "Instadapp Fluid", "Fluid Vault", "Fluid Lending", "Fluid DEX"]
chains: ["eth", "arbitrum", "base", "polygon", "bnb", "plasma"]
category: "protocol"
protocol_category: "lending"
audience: "retail"
production: false
assessment_type: "full"
date: "2026-11-02"
last_verified: "2026-11-02"
contract_score: 7.5
economic_score: 6.5
project_score: 6.5
overall_score: 6.5
audited: true
audit_count: 7
audit_firms: ["MixBytes", "PeckShield", "StateMind", "Cantina"]
bug_bounty: true
team_doxxed: true
incident_history: true
is_fork: false
live_since: "2024-02"
---

# Fluid Risk Assessment Report

**Updated:** November 2, 2026. **Overall: 6.5/10** (10 = safest).

Fluid combines lending, collateralized borrowing and trading over a shared Liquidity Layer. Its capital efficiency comes with linked liquidity, liquidation and oracle risks: a collateral or pricing failure can affect lenders beyond the originating leveraged position. The Instadapp team's operating history and published audits support the assessment; aggressive leverage, complex accounting and operational-key incidents constrain it.

| Dimension | Score | Principal drivers |
|---|---:|---|
| Smart contracts | 7.5 | Seven listed audit reports; complex shared architecture; direct team deployment permission persists alongside DAO controls; newer products require separate scope checks |
| Economic / market | 6.5 | High permitted LTV, correlated collateral and shared liquidity; historical Resolv bad debt; oracle quality and realizable exit liquidity matter per market |
| Project / operations | 6.5 | Identified founders and legal disclosures; positive historical loss handling offset by rewards-key compromise and disclosure concerns |
| **Overall** | **6.5** | Retained assessment; no score uplift from additional legal identification or an extra audit listing |

**Verification scope:** current Ethereum control reads at block **26,321,165**, official audit index, FLUID white paper, legal-entity record, official DEX v2 architecture article and governance payload sources. Historical incident and market evidence remains dated below. This is not a fresh audit of every deployment, oracle or incident transaction. Historical incident evidence was not independently reverified in this refresh.

## Protocol and product scope

Fluid was developed by the Instadapp team led by Sowmay Jain and Samyak Jain. The core products include ERC-4626 lending fTokens, borrowing vaults, DEX liquidity and Smart Collateral / Smart Debt: trading positions can also represent collateral or borrowing obligations. Tick-based liquidation aggregates positions into debt/collateral-ratio buckets.

The report covers the Fluid protocol family, with current authority checks limited to Ethereum. Existing deployment coverage includes Ethereum, Arbitrum, Base, Polygon, BNB and Plasma; this does not assert equal current activity or verified controls on every chain. The February 2024 launch-era governance record is a better anchor than the previous unsupported January date.

Separate product risks matter:

- **DEX v2:** the official architecture describes a singleton, modular DEX types, range orders, hooks, dynamic fees and flash accounting. These add accounting, integration and permission risks. Legacy audit counts do not establish coverage of v2 deployed implementations. The November review treats DEX v2 as newer/beta scope. Proposal #141 was reported executed in a November 1 governance snapshot, but execution and resulting state were not independently verified here. The official #141 payload sets initial $50k base withdrawal limits and borrowing ceilings for specified DexV2/Money Market token configurations. These are configuration parameters, not a verified current aggregate TVL cap. Execution effects and current limits were not independently replayed here.
- **Fluid Lite:** leveraged strategies using other lending venues introduce strategy and external-protocol dependencies. Historical Lite loss compensation is separate from core lending safety.
- **Jupiter Lend:** a Fluid technology integration on Solana does not inherit this report's Ethereum authority verification or scores automatically.

Sources: [DEX v2 architecture](https://fluid.io/blog/protocol-introducing-fluid-dex-v2), [proposal #141 payload](https://github.com/Instadapp/fluid-governance/blob/main/contracts/payloads/IGP141/PayloadIGP141.sol), [launch-era vote](https://snapshot.box/#/s:instadapp-gov.eth/proposal/0x804215890929a22190a53e97aacf41b326c9d85ef5b8021fc56b7e0848baa0e3) (not independently replayed in this refresh).

## I. Smart Contract Risk — 7.5/10

### Audit and bounty coverage

The official security index currently lists **seven reports**, correcting the earlier count of six: PeckShield pre-launch; StateMind; StateMind Liquidity Layer updates; MixBytes Vault, DEX and Liquidity Layer; and Cantina DEX. The extra StateMind listing is not evidence of a new engagement since the prior assessment. The index alone does not establish audited commit-to-live-bytecode equivalence, current implementation coverage or resolution of all findings. Audit-firm branding is not a substitute for those checks.

The current Immunefi program advertises a **$500,000 maximum smart-contract bounty**, subject to program rules and scope. Do not assume every new Fluid product or deployment is covered because the Instadapp program exists. This refresh did not establish formal-verification coverage.

Sources: [official security index](https://docs.fluid.instadapp.io/audits-and-security.html), [Immunefi program](https://immunefi.com/bug-bounty/instadapp/information/).

### Ethereum authority — current observations

<div class="overflow-x-auto" tabindex="0" role="region" aria-label="Ethereum authority observations">

| Read at block 26,321,165 | Result | Meaning and limit |
|---|---|---|
| LendingFactory `owner()` | `0x2386DC45AdDed673317eF068992F19421B481F4c` | Ownership remains with the historical lending timelock |
| Timelock `delay()` | 86,400 seconds | 24-hour delay; governor parameters and all alternate paths were not re-audited |
| VaultFactory `owner()` | `0xB031913cB7AD81b8A4Ba412B471c2dA69BEA410B` | Factory owner is a wrapper, not the team wallet itself |
| VaultFactory `isDeployer(0x4F6F…D49e)` | `true` | Team wallet retains direct deployment authorization |
| VaultFactory `isGlobalAuth(timelock)` | `true` | Timelock has global vault authorization; this coexists with team deployer permission |
| Team wallet `requiredSigners()` / `signers()` | **5 / 10** | Supersedes historical **7 / 14**; signers' independence and custody remain unverified |

</div>

Core addresses: LendingFactory `0x54B91A0D94cb471F37f949c60F7Fa7935b551D03`; VaultFactory `0x324c5Dc1fC42c7a4D43d92df1eBA58a54d13Bf2d`; team wallet `0x4F6F977aCDD1177DCD81aB83074855EcB9C2D49e`.

**Both governance paths matter.** Proposal #128's published payload grants the timelock global authorization; the live read confirms that permission. It does not revoke the team's deployer permission. Conversely, being a deployer does not alone confer arbitrary owner-only authorization changes. The published factory source gates deployment by `isDeployer`, whereas `setVaultAuth` is owner-only. The currently published owner-wrapper source routes factory-auth changes through governance. Its relationship to deployed runtime must be established before treating all source-level restrictions as proven live protections.

The earlier blanket statement that the team can directly modify every vault authorization without a timelock is therefore withdrawn. Direct vault deployment is verified; full current per-vault and Liquidity Layer upgrade/control reach remains an open diligence item. A 5-of-10 wallet is a changed control boundary, not proof of independent signers or an automatic score change.

Sources: Ethereum reads pinned to [block 26,321,165](https://etherscan.io/block/26321165), [LendingFactory](https://etherscan.io/address/0x54B91A0D94cb471F37f949c60F7Fa7935b551D03), [VaultFactory](https://etherscan.io/address/0x324c5Dc1fC42c7a4D43d92df1eBA58a54d13Bf2d) and [team wallet](https://etherscan.io/address/0x4F6F977aCDD1177DCD81aB83074855EcB9C2D49e); [factory source](https://github.com/Instadapp/fluid-contracts-public/blob/main/contracts/protocols/vault/factory/main.sol); [owner wrapper](https://github.com/Instadapp/fluid-contracts-public/blob/main/contracts/protocols/vault/factory/ownerWrapper.sol); [#128 payload](https://github.com/Instadapp/fluid-governance/blob/main/contracts/payloads/IGP128/PayloadIGP128.sol). GitHub main is mutable. The wrapper runtime did not exactly match the published deployment artifact before normalization of build differences and immutables; source-to-runtime correspondence remains unresolved. This mismatch alone is not evidence of malicious code.

### Historical incidents and operational boundaries

**March 2026 Resolv collateral failure:** the prior investigation records **$19.3M settled bad debt**, allocated approximately $9.7M to Resolv, $8.2M to Fluid treasury and $1.5M to the core team. Those rounded components total $19.4M; do not present them as an exact reconciliation. The historical account says users were made whole and identifies wstUSR pricing that did not promptly reflect its compromised underlying. Compensation is evidence of past conduct, not a binding guarantee for future losses. Incident amounts and remediation were not transaction-reconciled again in this refresh.

**May 27, 2026 rewards-distributor compromise:** the prior six-chain investigation found compromised proposer/approver keys used on Ethereum and Plasma, with **about $294K gross claimed value as a historical lower bound**. Root approvals permitted rapid claims; historical checks found the burned keys removed from checked distributors and outside the team-wallet signer set. That containment finding is dated June 1, not a November live-role attestation. It does not establish a Liquidity Layer or VaultFactory exploit. The historical record also identified a cross-chain response delay and public communication framed as a claims pause.

The June review made a further project-score downgrade conditional on continued silence or omission after a six-week deadline. That deadline has passed, but this refresh did not establish a complete subsequent disclosure history. The trigger is **unresolved**, not silently cleared or automatically applied. Project score remains 6.5 pending a targeted disclosure review. These incident findings come from the dated May/June investigation; the November refresh does not independently reconcile the transactions or establish a later public post-mortem.

## II. Economic / Market Risk — 6.5/10

Fluid permits high capital efficiency, historically up to 95% LTV in some correlated markets and low liquidation penalties. These are product maxima, not current settings for every vault. Liquidator profitability depends on actual realizable collateral value, depth, gas and congestion; a small penalty does not itself ensure liquidation participation. Shared capital and Smart Collateral / Debt create correlated stress paths across trading and borrowing.

**TVL and utilization:** the saved DefiLlama `/protocol/fluid` response identifies itself as `parent#fluid`. Its latest dated aggregate TVL point is **$808.0M at 2026-11-01 15:28:35 UTC**; its separately returned `currentChainTvls.borrowed` field is **$634.7M**. The fields do not provide a demonstrated common gross-supply denominator or common observation timestamp. Do not divide them into a protocol utilization figure. A separate November 1 component snapshot sums Lending/DEX/Lite to approximately $1.017B; that is a different aggregation and is not evidence of a one-day outflow. Old $984M TVL / $843M loans / 86% utilization headlines are retired from current metadata.

**Oracle protections are market-specific.** A global statement that post-Resolv deviation controls close the pricing gap is not supported for every market. Inspect actual oracle implementations, sources, bounds, freshness, market references and pause behavior. Likewise, equal borrow and liquidation oracle outputs do not prove that no market cross-check exists: equality is an observation, not a full source trace.

**Re Protocol reUSD exposure is historical, not a current position recommendation.** May evidence identifies vaults 160–164 with Re Protocol's token `0x5086bf358635b81d8c47c66d1c8b9e567db70c72`, distinct from Resupply reUSD. The prior report contradicted this by also listing Re reUSD as absent; that line is removed. The approximately $81M collateral, vault-162 balances, 87% LTV and 4.6% liquidation-buffer observations are May snapshots and are not carried as current. NAV pricing, off-chain reinsurance claims, issuer redemption eligibility and secondary liquidity remain necessary diligence topics. Re's historical US-person redemption restriction is an underlying-asset restriction, not an established Fluid-wide access rule.

The old upstream-NAV oracle path was an inference, not a complete code/configuration proof. This refresh withdraws categorical claims that all five vaults have no market cross-check or cannot benefit from any deviation protection until the full current path is traced. Conservative treatment of unverified exotic-collateral exit paths remains warranted.

Source: [DefiLlama response](https://api.llama.fi/protocol/fluid), saved with its embedded timestamp; historical market observations retain their May 2026 dates.

## III. Project / Operational Risk — 6.5/10

### Legal identity and holder rights

The FLUID MiCA white paper identifies **Interop Labs Ltd.**, BVI company **2063557**, LEI **984500F1E4E11CA2A027**, as the person seeking admission to trading; the document indicates no different issuer. It names the Jain founders and other management. Match this entity by registration/LEI rather than name alone.

This is a disclosure document for the **FLUID token**, not a banking license, regulatory approval of protocol safety or proof of the operator of every Fluid service. It states that no competent EU authority approved it. Token holders are not granted ownership, profit participation or creditor claims in the protocol or affiliates. Its FY2024 financial statements are company disclosures, not proof of consolidated Fluid reserves, present treasury liquidity or deposit insurance.

The Foundation proposal describes the Cayman Fluid Foundation and a February 2026 governance proposal moving protocol IP to it, with team-held director seats. That proposal is an issuer/governance disclosure, not an independent registry verification. The Foundation's registration details, current directors and the interface operator remain unestablished here. User governing law, disputes and access restrictions were not established by this refresh; missing terms are an information gap, not proof of unrestricted service.

Sources: [FLUID white paper](https://instadapp.io/mica-whitepaper), [GLEIF record API](https://api.gleif.org/api/v1/lei-records/984500F1E4E11CA2A027), [Foundation proposal](https://snapshot.box/#/s:instadapp-gov.eth/proposal/0xde0d55050ef945d3d756219a9ee2cf29ef97c3f5625b107a65e9fd39937d6c5e) (not independently replayed here).

### Assessment

Identified founders, an established development history and historical compensation support the score. Rewards-key custody, cross-chain response timing, incomplete current legal/operator mapping and unresolved disclosure follow-up limit it. The earlier categorical statements of healthy profitability, fully recovered TVL and no vesting concerns are withdrawn: current revenue, expenses, liquid treasury and vesting were not sufficiently established. Buybacks and discretionary compensation are not enforceable token-holder rights.

## Monitoring and reassessment priorities

1. Complete the current Ethereum authority walk, including Liquidity Layer upgrades, delegated auths, wrapper runtime correspondence and wallet signer independence; repeat per chain.
2. Bind each new DEX v2 / Money Market implementation to audit scope and live limits; separate proposed governance changes from executed state. The November 1 governance snapshot reported #142 active, not executed; this is not a current-state attestation.
3. Trace current reUSD and other off-chain/NAV collateral oracles end to end; fetch current caps, positions and executable exits before assessing a leveraged trade.
4. Resolve the rewards-incident disclosure deadline with a bounded, documented search and any subsequent public post-mortem; revisit Project 6.5 if the historical trigger is substantiated.
5. Monitor realizable withdrawal liquidity, collateral concentration, oracle divergence and actual bad debt, with consistent metric definitions and source timestamps.

## Evidence limits

Current Ethereum selector reads, official source code and governance payloads have different evidentiary reach: a permission read confirms that permission at the stated block; published source describes intended restrictions; neither alone maps every live authority path. Historical incident and market findings retain their original dates. Legal disclosures identify roles and token rights, without establishing a licensed lending operator or approved protocol.
