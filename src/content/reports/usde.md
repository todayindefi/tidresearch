---
asset: "USDe"
slug: "usde"
aliases: ["USDe", "Ethena USDe", "Ethena Synthetic Dollar"]
chains: ["eth", "arbitrum", "optimism", "bsc", "avalanche", "solana", "mantle", "base", "blast", "fraxtal", "xlayer", "zircuit", "morph", "ink", "ton", "berachain", "hyperevm", "plasma", "monad", "megaeth", "aptos", "ethereal"]
category: "stablecoin"
peg_mechanism: "Hybrid managed reserve with derivatives overlay"
assessment_type: "full"
date: "2026-06-10"
last_revised: "2026-10-11"
last_verified: "2026-10-11"
featured: false
production: true
issuer: "Ethena Labs"
market_cap_approx: 4809000000
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

USDe is Ethena's dollar-pegged claim on a managed reserve portfolio. The current structure combines liquid assets, institutional custody and credit, tokenized real-world assets and a derivatives overlay. The live feed classifies **79.61%** of backing as liquid or unallocated and **20.39%** as CEX delta-hedge collateral. That split does not reveal the current allocation among loans, individual RWAs and cash, or equate hedge collateral with derivatives notional.

The September 27 attestation reported **$4.953 billion of backing** against **$4.949 billion of USDe**, plus a **$62.095 million Reserve Fund**. The October 11 live feed measured **99.4781% coverage before** and **100.7690% after** the Reserve Fund. USDe therefore remains above full coverage only after including its loss-absorption fund.

The 6.5 overall score reflects a stable peg, active institutional arbitrage and measured secondary liquidity. It is limited by permissioned primary redemption, incomplete portfolio look-through, overlapping counterparties and concentrated administrative authority.

## 1 · Stability — 6.5

USDe targets one dollar through institutional minting and redemption supported by its reserve portfolio. Over the latest 30-day Chainlink window, it ranged from **-7.79 to +0.22 basis points**, with no observation below -50 basis points. The series updates roughly daily, so it measures price stability rather than executable intraday depth.

EthenaMintingV2 supports multiple settlement assets and uses signed RFQ terms. The October measurement found 611 whitelisted benefactors and 20 minter and 20 redeemer role holders. Thirty-day executed USDC orders had a median mint spread of **+0.03 bps** and median redemption spread of **-0.09 bps**. Retail holders cannot use this primary rail directly and rely on secondary markets and institutional arbitrage.

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

These figures establish custody totals but not the complete current instrument mix. Institutional-credit terms, borrower concentrations, actual JAAA holdings and current derivatives notional are not fully disclosed in the integrated feed. JAAA's approved position cap is not treated as an asset holding.

The seven disclosed wallets not yet covered by TIDR's wallet tracker are a monitoring-coverage gap, not missing backing. Current coverage and the reconciled attestation support 6.5; reliance on the Reserve Fund and incomplete asset-level transparency prevent a higher score.

## 3 · Liquidity & Exit — 7.0

USDe has permissionless secondary markets and a permissioned institutional mint/redeem rail. The primary path is enabled, and realized USDC orders have priced close to zero cost.

On Ethereum, the measured USDe→USDC ladder cleared the full tested **$5 million** inside 50 basis points. At $5 million, it returned **$4,995,181.58**. Because the test ended before locating the 50-bps crossing, $5 million is a floor rather than a depth limit.

The venue inventory identified 55 dollar-exit pools across ten chains. Venue TVL is not executable depth, and only Ethereum has the current measured ladder. The 7.0 score rests on that Ethereum result and the functioning institutional rail, not an assumption of equal liquidity across every deployment.

## 4 · Dependencies — 6.0

USDe relies on stablecoin settlement assets, institutional custodians, off-exchange settlement providers, credit managers, tokenization platforms and CEX venues. Several firms occupy more than one role, reducing effective diversification even where the list of counterparties is long.

The September attestation identifies the custody set, but current exposure weights within loans, RWAs, cash and derivatives remain incomplete. USDe also has 21 configured LayerZero peers beyond Ethereum. Some remote supplies and in-flight balances remain unmeasured rather than assumed to be zero. The named but overlapping and only partly substitutable dependency set supports 6.0.

## 5 · Contract & Admin — 5.5

Ethereum USDe is immutable: its implementation, admin and beacon slots are zero, and verified code exposes no upgrade path. Full-reach ownership and EthenaMintingV2 administration pass through a **24-hour TimelockController**.

The same **5-of-10 Dev Safe** is both proposer and sole canceller. The delay provides notice but no independent veto. The Safe also has an immediate execution route limited to specified operational selectors, while minting roles act within supported collateral, signed orders, tolerances and caps. The immutable token and bounded immediate paths support the score; concentrated governance and control over the reserve operation cap it at 5.5.

## 6 · Issuer — 7.0

Ethena has a public team, institutional partners, repeated attestations and independent monitoring through LlamaRisk, Chaos Labs and Chainlink. Its operating record includes servicing major redemptions during the October 2025 market disruption without a reserve loss or prolonged peg failure.

ENA governance approved a fee-switch schedule that begins at a **$7.5 billion** USDe supply threshold. The measured 14-day average was **$4.890 billion**, so it remains dormant. The schedule starts by directing 5% of gross protocol revenue to ENA buybacks and contains no Reserve-Fund-first condition. USDe holders do not vote directly in this governance process. The operating record supports 7.0; concentrated token voting and holder/governance misalignment prevent a higher score.

## Who it's for

- Users seeking a liquid dollar asset backed by a diversified managed portfolio rather than a bank deposit.
- DeFi users comfortable relying on institutional custodians, credit managers and CEX hedging.
- Holders who can use secondary markets rather than requiring direct issuer redemption.

## Who should avoid

- Anyone requiring direct, permissionless redemption at one dollar.
- Anyone requiring complete current look-through into every loan, RWA and derivatives position.
- Anyone unwilling to accept off-chain custody, credit and exchange-counterparty exposure.

## What to watch

- **Coverage before and after the Reserve Fund.** The fund currently converts a sub-100% live ratio into an above-par result.
- **The asset-level reserve split.** Current loan, RWA, cash and derivatives weights remain incomplete.
- **Ethereum and chain-local exit depth.** The measured Ethereum floor is $5 million; other deployments lack executable ladders.
- **The $7.5 billion fee-switch threshold.** Activation changes how protocol revenue is allocated.
- **Administrative roles and LayerZero peers.** New deployments or role changes can alter the control surface.

## Related

- [sUSDe](/reports/susde/) — the yield-bearing vault share, including cooldown, NAV and wrapper-liquidity risks

---

*Based on Ethena's September 2026 custodian attestation, the October 11 live backing feed, market and on-chain measurements, venue and ladder data, and the Ethereum authority walk. Live readings are available on the [USDe dashboard](https://tidresearch.com/dashboards/?asset=usde). Corrections or additional primary evidence are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-11 — comprehensive refresh.** Added the September attestation, October live coverage, current peg and liquidity measurements, multichain scope, mint/redeem state and authority topology. Scores held.
- **2026-10-11 — reserve classification corrected.** JAAA's approved cap is no longer presented as a USDe holding, and the former 11% derivatives figure is retained only as a historical measurement rather than a current allocation.
- **2026-09-10 — fee-switch review.** Verified the adopted supply milestones and gross-revenue basis; Issuer held at 7.0.
