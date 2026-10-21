---
asset: "USDe"
slug: "usde"
aliases: ["USDe", "Ethena USDe", "Ethena Synthetic Dollar"]
chains: ["eth", "arbitrum", "optimism", "bsc", "avalanche", "solana", "mantle", "base", "blast", "fraxtal", "xlayer", "zircuit", "morph", "ink", "ton", "berachain", "hyperevm", "plasma", "monad", "megaeth", "aptos", "ethereal"]
category: "stablecoin"
peg_mechanism: "Hybrid managed reserve with derivatives overlay"
assessment_type: "full"
date: "2026-06-10"
last_revised: "2026-10-21"
last_verified: "2026-10-11"
featured: false
production: true
issuer: "Ethena Labs"
peg_mechanism_score: 6.5
backing_score: 6.5
liquidity_score: 7.0
underlying_score: 6.0
structural_score: 5.5
axis_frame: six
issuer_score: 7.0
overall_score: 6.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usde"
---

# USDe — Risk Report

**Moderate risk · 6.5/10**

| Yield | Exit methods | Primary redemption | Reserve model | Chains |
|---|---|---|---|---|
| None; stake to sUSDe for yield | Secondary markets or institutional mint/redeem | Onboarded counterparties only | Managed liquid, credit and RWA portfolio with CEX hedge collateral | Ethereum plus 21 peers |

## Summary

USDe is Ethena's dollar-pegged claim on a managed reserve portfolio combining liquid assets, institutional custody and credit, real-world assets and a derivatives overlay. The [Risk Committee's quarterly update](https://gov.ethenafoundation.com/t/ethena-s-july-september-2026-governance-update/857) reports hedged BTC/ETH positions at **17% of backing on September 30**, alongside **74% liquid cash** and **6% JAAA/STAC RWAs**. Rounded categories do not sum to 100%; borrower-level and current instrument weights remain incomplete.

The **September 27 attestation** reconciled $4.953bn backing against $4.949bn supply, plus a $62.095m Reserve Fund. Separately, the **October 12 Risk Committee snapshot** reported **101.43% coverage including a $62.57m fund**. These are dated snapshots with different sources and scopes. **Live supply, backing, coverage and Reserve Fund values are unmeasured while the hourly LlamaRisk overview returns HTTP 404.** An unavailable source does not establish a reserve loss.

The 6.5 overall score reflects a stable peg, active institutional arbitrage and measured secondary liquidity. It is limited by permissioned primary redemption, incomplete portfolio look-through, overlapping counterparties and concentrated administrative authority.

## 1 · Stability — 6.5

USDe targets one dollar through institutional minting and redemption supported by its reserve portfolio. In the October 19 30-day Chainlink window, it ranged from **-6.51 to +0.22 basis points**, with no observation below -50 basis points. The series updates roughly daily, so it measures price stability rather than executable intraday depth.

EthenaMintingV2 supports multiple settlement assets and uses signed RFQ terms. The October measurement found 611 whitelisted benefactors and 20 minter and 20 redeemer role holders. Thirty-day executed USDC orders had a median mint spread of **+0.03 bps** and median redemption spread of **-0.09 bps**. Retail holders cannot use this primary rail directly and rely on secondary markets and institutional arbitrage.

The [Risk Committee postmortem](https://gov.ethenafoundation.com/t/usde-analysis-during-the-oct-10th-11th-volatility-event/706) records a brief USDe low near **$0.65 on Binance** during October 10–11, 2025, versus about $0.92 on Bybit and $0.99 in onchain pools. This was a severe venue dislocation even though no smart-contract loss was established in the evidence reviewed.

**Risks and limitations.** Oracle observations are not executable prices, and the institutional arbitrage rail depends on eligible counterparties and operational access.

## 2 · Backing — 6.5

The September attestation reconciled the following custody-level totals:

| Component | Amount |
|---|---:|
| Copper | $668.0m |
| Ceffu | $675.0m |
| Anchorage Digital Bank | $657.0m |
| Kraken Custody | $0.042m |
| Ethena × FalconX SPV | $236.0m |
| Ethena onchain-wallet bucket | $2.620bn |
| Ripple Prime FCM margin | $7.9m |
| Mint/redeem inventory | $89.23m |
| **Total backing** | **$4.953bn** |
| Reserve Fund | $62.095m |

These **September 27 snapshot** totals establish custody reconciliation, not every underlying instrument or today's coverage. The subsequent Risk Committee disclosure identifies a combined JAAA/STAC sleeve; an approved cap alone does not establish a holding. Institutional-credit terms, borrower concentrations and current derivatives notional remain incomplete.

At **October 12**, the committee reported a **$62.57m Reserve Fund against a $45.7m recommended size: approximately 1.4×**. The recommendation reflects added RWA and peg-stability-module buffers and a larger perpetual book. This is a dated sizing comparison, not a live reserve multiple or a guarantee against losses.

The October 11 reserve-account inventory covered **13 of 13 disclosed accounts**. Seven accounts still lack reconstructed September 27 balances, limiting historical comparisons. Account enumeration and status-gated asset marks are distinct from the integrated hourly supply/backing reconciliation; completing wallet tracking does not repair the LlamaRisk overview's **HTTP 404**.

**Risks and limitations.** Live coverage remains unmeasured. Neither the September attestation nor October 12 committee snapshot substitutes for a restored, reconciled live source. Backing stays **6.5**; no new score is inferred from the outage.

## 3 · Liquidity & Exit — 7.0

USDe has permissionless secondary markets and a permissioned institutional mint/redeem rail. The primary path is enabled, and realized USDC orders have priced close to zero cost.

On Ethereum, the October 11 measured USDe→USDC ladder cleared the full tested **$5 million** inside 50 basis points. At $5 million, it returned **$4,995,181.58**. Because the test ended before locating the 50-bps crossing, $5 million is a floor rather than a depth limit.

The venue inventory identified 55 dollar-exit pools across ten chains. Venue TVL is not executable depth, and only Ethereum has a measured executable ladder in this assessment. The 7.0 score rests on that Ethereum result and the functioning institutional rail, not an assumption of equal liquidity across every deployment.

## 4 · Dependencies — 6.0

USDe relies on stablecoin settlement assets, institutional custodians, off-exchange settlement providers, credit managers, tokenization platforms and CEX venues. Several firms occupy more than one role, reducing effective diversification even where the list of counterparties is long.

The September attestation identifies the custody set. The September 30 committee snapshot reports Binance exposure at 12% of total backing, versus OKX 4% and Bybit 2%; these are exposure weights, not failure-loss estimates. Institutional lending was 8% of liquid cash, with borrower-level weights still undisclosed. USDe also has 21 configured LayerZero peers beyond Ethereum. Some remote supplies and in-flight balances remain unmeasured rather than assumed to be zero. The named but overlapping and only partly substitutable dependency set supports 6.0.

## 5 · Contract & Admin — 5.5

Ethereum USDe is immutable: its implementation, admin and beacon slots are zero, and verified code exposes no upgrade path. Full-reach ownership and EthenaMintingV2 administration pass through a **24-hour TimelockController**.

The same **5-of-10 Dev Safe** is both proposer and sole canceller. The delay provides notice but no independent veto. The Safe also has an immediate execution route limited to specified operational selectors, while minting roles act within supported collateral, signed orders, tolerances and caps. The immutable token and bounded immediate paths support the score; concentrated governance and control over the reserve operation cap it at 5.5.

**Risks and limitations.** The October authority assessment establishes these Ethereum paths; new peers are not assigned the same controls by analogy. The [published audit library](https://docs.ethena.fi/resources/audits) supports code-review activity, but exact privileged-role/deployed-version and bounty-exclusion coverage was not re-established in this editorial pass. Full path-by-path documentation reconciliation remains incomplete.

## 6 · Issuer — 7.0

Ethena's public team, institutional counterparties, repeated attestations and stress-response record support the inherited Issuer **7.0**. The [USDe terms](https://docs.ethena.fi/resources/usde-terms-and-conditions) name **Ethena BVI Limited** as issuer and distinguish onboarded Mint Users from ordinary Holding Users. The latter have no direct issuer-redemption right.

The [ENA fee-switch schedule](https://gov.ethenafoundation.com/t/ena-fee-switch-activation/830) passed but remains below its first **$7.5bn 14-day-average supply milestone**. The dated October 19 measurement was **$4.848bn**. The first tier allocates 5% of gross protocol revenue to buybacks, rising to 20% at $20bn; 95% refers to the destination of the Foundation's net share, not 95% of gross protocol revenue. The adopted schedule has no Reserve-Fund-first condition. USDe holders do not vote in ENA governance.

**Risks and limitations.** Issuer 7.0 is carried from the updated asset assessment, not re-derived here. Entity and redemption eligibility are established by the terms; current principals, financial audit coverage, governing-law/dispute provisions and comprehensive conduct history were not freshly investigated in this pass. Protocol attestations are not a corporate financial audit. Concentrated ENA voting creates revenue-allocation risk for holders who have no vote.

## Who it's for

- Users seeking a liquid dollar asset backed by a diversified managed portfolio rather than a bank deposit.
- DeFi users comfortable relying on institutional custodians, credit managers and CEX hedging.
- Holders who can use secondary markets rather than requiring direct issuer redemption.

## Who should avoid

- Anyone requiring direct, permissionless redemption at one dollar.
- Anyone requiring complete current look-through into every loan, RWA and derivatives position.
- Anyone unwilling to accept off-chain custody, credit and exchange-counterparty exposure.

## What to watch

- **Coverage before and after the Reserve Fund.** Restore the hourly source before asserting current coverage; retain the September and October committee observations as dated snapshots.
- **The asset-level reserve split.** Current loan, RWA, cash and derivatives weights remain incomplete.
- **Ethereum and chain-local exit depth.** The measured Ethereum floor is $5 million; other deployments lack executable ladders.
- **The $7.5 billion fee-switch threshold.** Activation changes how protocol revenue is allocated.
- **Administrative roles and LayerZero peers.** New deployments or role changes can alter the control surface.

## Related

- [sUSDe](/reports/susde/) — the yield-bearing vault share, including cooldown, NAV and wrapper-liquidity risks

---

*Evidence refresh dated October 21; full asset verification remains October 11. Portfolio, oracle, execution and authority observations retain their stated measurement dates. The [USDe dashboard](https://tidresearch.com/dashboards/?asset=usde) is linked for monitoring; the hourly backing source is unavailable.*

## Revision history

- **2026-10-21 — evidence and editorial refresh; all scores unchanged.** The Q1 11% hedge weight is historical; September 30 hedged BTC/ETH was 17%. Replaced the obsolete roughly 9× fund-sizing claim with October 12's $62.57m / $45.7m, or 1.4×. October 11 coverage of 99.1682% before / 100.4590% after the fund and the 79.55% liquid/unallocated / 20.45% CEX-collateral classification are historical, with collateral distinct from hedge notional; account balances are also dated; the LlamaRisk overview returns HTTP 404. September attestation and October 12 committee coverage remain distinct dated snapshots. The October 2025 Binance low was about $0.65, not $0.97. Ethereum full-reach administration has a 24-hour delay, not no timelock. Fee-switch approval remains distinct from activation below $7.5bn. Overall remains 6.5.

- **2026-10-11 — live account coverage completed.** Added the Solana reserve wallet and moved current monitoring from 12 of 13 to 13 of 13 disclosed accounts. Its JAAA, STAC and USDG positions total approximately $261.21 million; the September 27 historical comparison remains incomplete. Scores held.
- **2026-10-11 — reserve monitoring correction.** Expanded live account coverage from 6 of 13 to 12 of 13 and restored Aave Horizon RLUSD and Aave V4 positions. Live coverage replaced 99.4781% / 100.7690% with 99.1682% / 100.4590%; scores held.
- **2026-10-11 — comprehensive refresh.** Added the September attestation, October live coverage, current peg and liquidity measurements, multichain scope, mint/redeem state and authority topology. Scores held.
- **2026-10-11 — reserve classification corrected.** JAAA's approved cap is no longer presented as a USDe holding, and the former 11% derivatives figure is retained only as a historical measurement rather than a current allocation.
- **2026-09-10 — fee-switch review.** Verified the adopted supply milestones and gross-revenue basis; Issuer held at 7.0.
