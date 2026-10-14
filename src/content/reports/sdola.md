---
asset: "sDOLA"
slug: "sdola"
aliases: ["sDOLA", "Staked DOLA", "Inverse sDOLA"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["DOLA"]
assessment_type: "light"
companion_report: "dola"
date: "2026-07-01"
last_verified: "2026-07-01"
last_revised: "2026-10-14"
# October 14 companion: documentation/source review and inherited conversion read.
# Source assessment: riskAnalyst a4c6a03; no deployed-identity or exit execution verification.
# Current issuer docs describe CCIP shutdown; remote labels are historical deployments.
# PARKED: wrapper/DSA source match, live roles, asset reconciliation and redemption simulation [owner: riskAnalyst] [since: 2026-10-14]
# Redemption folds into axis 3; legacy field remains required by vault-share schema.
featured: false
production: true
issuer: "Inverse Finance DAO"
yield_bearing: true
axis_frame: six
volatility_score: 5.5
backing_score: 4.5
liquidity_score: 4.5
underlying_score: 4.5
structural_score: 5.5
redemption_score: 5.0
issuer_score: 5.0
overall_score: 4.5
---

# sDOLA — Risk Report

**Moderate-elevated risk · 4.5/10** · Provisional

DOLA-denominated savings share · FiRM lending revenue · Inverse Finance DAO.

## Summary

sDOLA is an ERC-4626 wrapper over the DOLA Savings Account (DSA). Users deposit [DOLA](/reports/dola/) and receive shares. Borrowing revenue is converted into DOLA and distributed through the share exchange rate. Yield varies with revenue and supply; it does not repair DOLA's credit shortfalls or guarantee dollar proceeds.

This companion adds wrapper and exit risks to DOLA's provisional **4.5/10** assessment. Overall is **below the six-axis mean of 4.92** because the underlying and practical dollar exit constrain the savings product. Ordinary sDOLA is distinct from [jrDOLA](https://docs.inverse.finance/inverse-finance/inverse-finance/products/tokens/dola/jrdola), the separate first-loss product.

**⚠️ Closed bridge lanes.** The issuer states that sDOLA's CCIP lanes were shut down on August 11. Do not initiate CCIP transfers to historical remote deployments. [Current sDOLA documentation](https://docs.inverse.finance/inverse-finance/inverse-finance/products/tokens/dola/sdola)

## 1 · Stability — 5.5

sDOLA's exchange rate is denominated in DOLA, so dollar value depends on both DOLA's market price and the share conversion. The retained October 14 read at Ethereum block **26,188,001** converts approximately **128,937 sDOLA into 183,455 DOLA**, or **1.4228 DOLA per share**. It establishes accounting conversion, not successful redemption or dollar proceeds. [Pinned read](/evidence/dola/dola-admin-coverage-2026-10-14.json)

**Risks and limitations.** Revenue and donations can change the rate, including atomically. No guaranteed APY, smooth price path or monotonically rising dollar value is established. Stability 5.5 is a retained provisional judgment.

## 2 · Backing — 4.5

The economic backing is DOLA. Its October 14 assessment reports **2.765M DOLA known bad debt**, **96.37% of FiRM debt from DOLA/sDOLA LP markets**, and **76.52% from Ethena-linked markets**. These are debt-source shares, not external reserve weights. The measured PSM collateral reserves were zero. [DOLA backing assessment](/reports/dola/#2--backing--45)

**Risks and limitations.** DOLA or sDOLA in collateral cannot also count as independent dollar backing. Complete noncircular DOLA coverage and wrapper share-to-DSA reconciliation remain unresolved. Backing 4.5 inherits recovery-dependent DOLA exposure.

## 3 · Liquidity & Exit — 4.5

The intended Ethereum exit has two legs: redeem sDOLA into DOLA, then sell DOLA. The issuer describes no lock-up. Reviewed upstream source requires at least **one sDOLA share** and **0.01 DOLA** to remain in the vault after withdrawal; these are system residual minima, not a one-share minimum ticket. [Source review](/evidence/dola/sdola-wrapper-review-2026-10-14.json)

DOLA's indicative USDC ladder supports near-par proceeds through 3M DOLA, followed by a poor 5M quote. It does not establish sDOLA redemption or a combined route. The DOLA-to-cash leg constrains the provisional 4.5 exit assessment.

**Risks and limitations.** Live withdrawals, a direct sDOLA quote ladder and stressed combined exits were not simulated. Remote balances and recovery routes remain unverified. Documented no-lock-up mechanics are not verified unlimited instant liquidity.

## 4 · Dependencies — 4.5

The path is **sDOLA → DSA-accounted DOLA → DOLA's lending and recovery system**, with additional DBR auction and revenue-distribution dependencies. FiRM borrowing demand and auction execution affect income. [Revenue mechanics](https://docs.inverse.finance/inverse-finance/inverse-finance/products/tokens/dola/sdola)

Issuer documentation identifies Ethereum as the current product and Base, Optimism, Arbitrum and Berachain as historical CCIP deployments. The [shutdown proposal](https://forum.inverse.finance/t/shut-down-the-sdola-ccip-bridge-lanes/670) describes removal of lanes and remote minter permissions; current documentation records execution on August 11.

**Risks and limitations.** The shutdown was not independently reread on every chain, and residual remote balances were not reconciled. Historical receipt contracts are not evidence of active destinations or equivalent exits. Dependencies 4.5 remains provisional.

## 5 · Contract & Admin — 5.5

The documented Ethereum wrapper is `0xb45ad160634c528cc3d2926d9807104fa3157305`; the incident analysis identifies DSA `0xe5f24791e273cb96a1f8e5b67bc2397f0ad9b8b4`. Reviewed source stakes deposits into DSA accounting. Governance appoints the operator and changes through pending/accept calls; governance or the operator can adjust auction parameters. Governance can sweep directly held tokens except DBR, which alone does not establish access to DSA-accounted principal. [Reviewed source and commit](/evidence/dola/sdola-wrapper-review-2026-10-14.json)

The issuer lists a January 2024 yAudit review covering the savings, wrapper and helper contracts. Current deployed-code parity, privileged-role coverage and bug-bounty coverage are unverified. Documentation agrees with the savings design; live authority and identity were not established. [Audit registry](https://docs.inverse.finance/inverse-finance/inverse-finance/technical/audits)

On March 2, an external LlamaLend attack combined LLAMMA trading, share redemption and DSA stake-on-behalf donation to inflate an unsmoothed oracle input. A plain token transfer would not update DSA accounting. Twenty-seven borrowers were liquidated: the postmortem estimates **about $245K attacker profit** and **822,475 crvUSD borrower losses**. These are different measures; neither establishes an equivalent vault-principal loss. [Collaborative postmortem](https://www.llamarisk.com/research/llamalend-sdola-long2-post-mortem)

**Risks and limitations.** Deployed wrapper/DSA identity and live roles remain open; DOLA's delays and signer thresholds cannot be assumed for the wrapper. Integrators must handle atomic share-rate increases. Contract & Admin 5.5 is a legacy provisional judgment, not newly verified assurance.

## 6 · Issuer — 5.0

Inverse Finance DAO is the disclosed governing organization. The [DOLA issuer assessment](/reports/dola/#6--issuer--50) describes public debt reporting, repayments and legacy loss history.

**Risks and limitations.** Legal entity, jurisdiction, accountable principals, governing law, dispute terms and a direct holder reserve claim remain unverified. A financial audit of an operating entity was not established. Issuer 5.0 is inherited, not newly derived from complete entity-and-recourse inputs.

## What to watch

- DOLA debt recovery, collateral composition, PSM reserves and dollar exit quotes.
- Wrapper/DSA source identity, governance/operator roles and executable withdrawals.
- DBR auction revenue and how any collateral venue prices share-rate jumps.
- Historical remote balances and recovery options; closed CCIP lanes are not an exit route.

## Evidence and scope

October 14 documentation, upstream source and incident analysis were reviewed; the pinned conversion was reused. Deployed bytecode, live roles, redemption execution and remote recovery remain unverified. This is a partial refresh, not a whole-deployment verification. [Committed evidence provenance](/evidence/dola/provenance-2026-10-14.json)

## Revision history

- **2026-10-14 — provisional companion refreshed.** Added six-axis Backing and Dependencies at 4.5; Liquidity & Exit 5.0 → 4.5; Overall 4.5. Updated debt-source figures, residual minima and incident loss measures. Restricted current chain scope to Ethereum following issuer-reported CCIP closure.
- **2026-07-01 — initial assessment.**
