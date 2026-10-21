---
protocol: "Ethena"
slug: "ethena"
aliases: ["Ethena", "Ethena Labs"]
chains: ["eth", "arbitrum", "optimism", "bsc", "avalanche", "solana", "mantle", "base", "blast", "fraxtal", "xlayer", "zircuit", "morph", "ink", "ton", "berachain", "hyperevm", "plasma", "monad", "megaeth", "aptos", "ethereal"]
category: "protocol"
protocol_category: "synthetic-dollar"
assessment_type: "full"
date: "2026-06-10"
last_verified: "2026-10-21"
last_revised: "2026-10-21"
featured: false
production: false
issuer: "Ethena Labs"
contract_score: 6.5
economic_score: 6.0
project_score: 7.0
overall_score: 6.5
audited: true
audit_firms: ["Zellic", "Spearbit", "Cantina", "Quantstamp", "Pashov Audit Group", "Code4rena"]
bug_bounty: true
team_doxxed: true
incident_history: true
is_fork: false
live_since: "2024-02"
---

# Ethena — Risk Report

**Moderate risk · 6.5/10**

Managed synthetic-dollar protocol behind [USDe](/reports/usde/) and the [sUSDe savings share](/reports/susde/).

## Summary

Ethena issues USDe against a managed portfolio and distributes part of the portfolio's earnings to sUSDe holders. The system combines institutional custody, credit, tokenized assets and crypto hedging. The two asset reviews cover holder-specific reserves, withdrawal routes and chain authority; this protocol review assesses their shared operating model.

The [Risk Committee's October 13 quarterly update](https://gov.ethenafoundation.com/t/ethena-s-july-september-2026-governance-update/857) reports **17% hedged BTC/ETH backing at September 30**. Its **October 12 snapshot** places the Reserve Fund at **$62.57m**, approximately **1.4× its $45.7m recommended size**. Those observations describe dated portfolio and reserve conditions, not continuous coverage.

The hourly LlamaRisk backing overview still returns **HTTP 404**. Current integrated supply, backing, coverage and fund values remain unmeasured. This prevents a live coverage claim without itself establishing a loss. Overall remains **6.5**.

## 1 · Contract and Operational Risk — 6.5

Ethena operates a token, institutional mint/redeem contracts, a savings vault and cross-chain deployments. Its [audit library](https://docs.ethena.fi/resources/audits) documents several core and economic reviews. Contract review cannot establish loan collectability, custody recoverability or RWA valuations.

Ethereum USDe has no upgrade path in the completed authority assessment. Full-reach token and minting administration uses a **24-hour TimelockController**, whose proposer and canceller are the same **5-of-10 Dev Safe**. It provides notice without an independent veto. Bounded operational and address-restriction roles can act immediately.

sUSDe shares the delayed Ethereum owner path. Its measured cooldown is **one day**, while the contract allows **90 days** after an administrative change. That maximum is distinct from routine operating policy. The October 21 vault read at block **26,237,485** showed approximately **958.365m shares**, **1.201831bn USDe assets** and **1.254042993 USDe/share**; the underlying accounting ratio matched conversion at that block.

The [October 2025 postmortem](https://gov.ethenafoundation.com/t/usde-analysis-during-the-oct-10th-11th-volatility-event/706) records a Binance low near **$0.65**, compared with about $0.92 on Bybit and $0.99 in onchain pools. The venue dislocation was substantially worse than ordinary peg noise; no smart-contract loss was established in the reviewed evidence.

**Risks and limitations.** Blast and Fraxtal have undelayed 5-of-10 OFT owner paths. Unread deployments cannot inherit Ethereum's controls by analogy. Exact audit coverage of every current privileged path and bounty exclusion was not re-established in this pass. The protocol Contract score is **6.5**; the assets' Contract & Admin **5.5** uses a different framework and is not interchangeable.

## 2 · Economic and Market Risk — 6.0

USDe combines liquid settlement assets, credit and collateral with a derivatives overlay. September 30's rounded committee categories were **74% liquid cash, 17% hedged BTC/ETH and 6% JAAA/STAC RWAs**. They do not fully enumerate current loans or risk exposures. Off-exchange settlement reduces direct exchange custody exposure while leaving margin, execution and settlement dependencies.

The **September 27 custodian attestation** reported $4.953bn backing against $4.949bn supply, plus a $62.095m fund. The separate **October 12 committee snapshot** reported **101.43% coverage including the fund**. Their timestamps and sources differ. Neither supplies today's coverage during the hourly-source outage.

Fund sizing is a loss-absorption judgment, not free surplus. The committee's recommended size rose as RWA, peg-module and perpetual-book risks grew; the 1.4× margin over that recommendation remains a finite buffer against the modeled risks.

Primary USDe redemption requires onboarding. Ordinary holders rely on secondary markets and eligible arbitrageurs; sUSDe holders can withdraw permissionlessly into USDe after cooldown. October 11 Ethereum ladders cleared at least **$5m USDe→USDC inside 50 bps**, while sUSDe→USDe crossed around **$3.30m**. These dated, non-atomic quotes require renewal before execution.

**Risks and limitations.** Borrower-level weights remain incomplete. Venue inventory is not executable depth; non-Ethereum ladders remain unmeasured. The October 11 concentration study found **52.1% of sUSDe** in measured Aave, Morpho and Pendle contracts, potential correlated sellers rather than reserve assets. Pending October 22 maturities require a new read. Economic **6.0** retains these limits and the coverage outage without a rescore.

## 3 · Issuer and Governance Risk — 7.0

Ethena has a public team, recurring attestations, institutional counterparties and an operating record since February 2024. The [USDe terms](https://docs.ethena.fi/resources/usde-terms-and-conditions) identify Ethena BVI Limited as issuer and distinguish onboarded Mint Users from Holding Users who cannot redeem directly with it.

The [ENA fee switch](https://gov.ethenafoundation.com/t/ena-fee-switch-activation/830) passed but remains below its first **$7.5bn 14-day-average supply milestone**. The October 20 measurement was **$4.848bn**. The ratified tiers start at 5% of gross protocol revenue and rise to 20% at $20bn; the 95% figure concerns the Foundation's net share. No Reserve-Fund-first condition appears in the ratified schedule.

**Risks and limitations.** ENA voters benefit from buybacks while dollar-token holders lack a direct vote over those allocations. One account exceeded quorum in the passed vote. Issuer/governance **7.0** is retained from the updated assessment. Current corporate principals, financial audit, governing-law/dispute terms and complete conduct history were not separately re-investigated here; token custody attestations are not a corporate financial audit.

## Scores and monitoring

| Protocol axis | Score |
|---|---:|
| Contract and operational | 6.5 |
| Economic and market | 6.0 |
| Issuer and governance | 7.0 |
| **Overall** | **6.5** |

Overall is the mean of the three protocol axes. Restore and reconcile the hourly backing source before publishing current coverage. Continue borrower-level disclosure work, renew chain-local exit quotes and revisit sUSDe concentration after the October 22 maturities. Snapshot evidence and valid vault observations remain useful with their dates even while integrated coverage is unavailable.

## Revision history

- **2026-10-21 — external protocol page added from the updated assessment; scores unchanged.** Superseded protocol descriptions are retained here: 11% was a historical Q1 hedge allocation, not September 30's 17%; roughly 9× fund sizing no longer applies against October 12's 1.4× recommendation multiple; seven days is neither the measured cooldown nor the contract maximum; Ethereum full-reach administration has a 24-hour timelock; the October 2025 Binance low was about $0.65, not $0.97. Fee-switch passage does not imply activation. September attestation and October 12 committee coverage are snapshots, and the hourly HTTP 404 leaves live coverage unmeasured. Overall remains 6.5.
