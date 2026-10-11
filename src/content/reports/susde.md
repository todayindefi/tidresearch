---
asset: "sUSDe"
slug: "susde"
aliases: ["sUSDe", "Staked USDe", "Ethena Staked USDe"]
chains: ["eth", "arbitrum", "base", "optimism", "bsc", "mantle", "blast", "fraxtal", "monad", "plasma"]
category: "vault-share"
underlying_assets: ["USDe"]
assessment_type: "full"
date: "2026-05-22"
last_revised: "2026-10-11"
last_verified: "2026-10-11"
featured: false
production: true
issuer: "Ethena Labs"
yield_bearing: true
volatility_score: 6.5
backing_score: 6.5
liquidity_score: 7.0
underlying_score: 6.0
structural_score: 5.5
axis_frame: six
issuer_score: 7.0
# Legacy supplemental field; its substance is folded into Liquidity & Exit.
redemption_score: 6.5
overall_score: 6.5
chain_overrides:
  arbitrum:
    liquidity_score: 5.0
  plasma:
    liquidity_score: 5.0
  blast:
    liquidity_score: 4.0
  base:
    liquidity_score: 2.5
  bsc:
    liquidity_score: 2.5
  fraxtal:
    liquidity_score: 2.0
  optimism:
    liquidity_score: 2.0
  mantle:
    liquidity_score: 2.0
  monad:
    liquidity_score: 2.0
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=susde"
---

# sUSDe — Risk Report

**Moderate risk · 6.5/10**

| Backing | Yield mechanism | Primary exit | Live cooldown | Chains |
|---|---|---|---|---|
| 100% USDe | Rising USDe per share | Permissionless cooldown then redeem | 1 day; contract maximum 90 days | Ethereum plus nine bridged deployments |

## Summary

sUSDe is Ethena's yield-bearing vault share over [USDe](/reports/usde/). It has no independent reserve portfolio: Backing, Dependencies and Issuer inherit from USDe. The wrapper adds an accruing exchange rate, a cooldown before primary redemption, secondary-market liquidity and its own administrative surface.

At Ethereum block **26,163,612**, the vault held **1,213,757,391.95 USDe** against **969,157,238.36 shares**, producing a NAV of **1.2523843850 USDe per share**. `totalAssets / totalSupply` reconciled exactly with `convertToAssets(1e18)`.

The live cooldown is one day, while the contract permits governance to set as much as **90 days**. Ethereum secondary liquidity reaches roughly $3.30 million inside 50 basis points, but other chains have venue-derived scores rather than executable ladders. Measured Aave, Morpho and Pendle contracts hold **52.1% of supply**, creating a concentrated forced-seller channel during deleveraging.

## 1 · Stability — 6.5

sUSDe should track its accruing USDe NAV rather than one dollar. Over 30 days, the Chainlink market mark ranged from **2.00 to 12.60 basis points below NAV**, with a mean discount of **5.45 basis points** and no observation below -50 basis points. The series updates roughly daily and therefore describes tracking rather than intraday execution quality.

The 6.5 score reflects consistent accrual and close NAV tracking. It remains bounded by the underlying USDe portfolio and by the possibility that a long cooldown and forced selling widen the market discount during stress.

## 2 · Backing — 6.5

sUSDe's vault accounting reconciles exactly, but that is share coverage rather than an independent solvency cushion. Every asset in the vault is USDe. Economic coverage therefore inherits USDe's latest **99.1682% before** and **100.4590% after** its Reserve Fund.

USDe's current reserve-account monitoring is complete at 13 of 13 disclosed accounts. Its September 27 historical comparison remains incomplete for six added EVM accounts and the Solana wallet; sUSDe inherits that historical monitoring limit, not a live coverage gap.

The wrapper cannot diversify or improve the underlying reserve. Backing remains equal to USDe at 6.5.

## 3 · Liquidity & Exit — 7.0

Primary redemption is permissionless but delayed: holders initiate cooldown and later redeem shares for USDe. The live duration is **one day**, and governance can change it after the 24-hour timelock up to the contract maximum of **90 days**. The cooldown silo held **15,250,161.41 USDe** at the latest read.

The Ethereum sUSDe→USDe ladder located the 50-bps marginal crossing:

| Point | Size | Marginal cost |
|---|---:|---:|
| Last clearing | $3,302,734.38 | -44.59 bps |
| First crossing | $3,320,312.50 | -56.62 bps |

USDe→USDC separately cleared at least $5 million inside 50 basis points, making the wrapper leg the binding measured step. The readings were not atomic and should be requoted before execution.

Pool balances provide concentration context, not depth. Across the major pools measured directly, only **$0.68 million** of counter inventory was independently fiat-backed, while **$44.0 million** was circular, primarily DOLA whose own backing materially includes sUSDe. The 7.0 score rests on the routed ladder and permissionless primary path, not aggregate pool TVL.

Only Ethereum has an executable ladder. The other chain overrides are conservative venue-derived judgments: Arbitrum and Plasma 5.0, Blast 4.0, Base and BNB Chain 2.5, and Fraxtal, Optimism, Mantle and Monad 2.0.

### Redemption — 6.5 (supplemental, folded into Liquidity & Exit)

The supplemental score reflects open holder eligibility and a one-day current wait, balanced against governance's ability to extend the cooldown to 90 days and bounded address-restriction authority.

## 4 · Dependencies — 6.0

sUSDe's sole economic upstream is USDe. Its custodians, settlement assets, credit managers, tokenization platforms and exchange exposures pass through unchanged, so Dependencies equals USDe at 6.0.

Aave, Morpho and Pendle are downstream users rather than reserve assets. Their measured contracts hold **504.97 million sUSDe**, or **52.1% of supply**. This concentration can create correlated sellers during liquidations even though it does not change what backs each share.

## 5 · Contract & Admin — 5.5

The Ethereum vault owner is the same **24-hour TimelockController** used by USDe. Its proposer and sole canceller are the same **5-of-10 Dev Safe**, leaving no independent veto. The timelock controls full administration and cooldown changes.

The Dev Safe also holds immediate but bounded blacklist and restriction authority. Rewarder roles are divided between the Dev Safe and a separate 3-of-10 Payout Fund Safe.

Cross-chain control differs. Arbitrum, Base, Optimism, BNB Chain, Mantle and Monad have measured 24-hour owner timelocks. Blast and Fraxtal have direct, undelayed 5-of-10 owner paths. Monad's proposer remains unresolved. The delayed Ethereum route supports the score, while role concentration, immediate restrictions and weaker bridged deployments cap it at 5.5.

## 6 · Issuer — 7.0

Issuer risk is identical to USDe because the same Ethena entity, governance process and operating record stand behind both assets. Wrapper administration is scored separately under Contract & Admin. The 7.0 score therefore inherits directly from USDe.

## Yield

Yield appears as growth in USDe per share:

| Window | Realized NAV growth | Annualized |
|---|---:|---:|
| 7 days | 0.0930% | 4.95% |
| 30 days | 0.3987% | 4.94% |
| 90 days | 1.0880% | 4.47% |

These are realized exchange-rate changes, not an advertised forward APY. Returns come from USDe's managed portfolio after protocol allocations and Reserve Fund policy.

## Who it's for

- USDe holders seeking portfolio yield through an accruing vault share.
- Users comfortable with a delayed primary exit and secondary-market execution.
- DeFi participants who understand the inherited USDe and lending-loop risks.

## Who should avoid

- Anyone requiring guaranteed instant redemption at NAV.
- Anyone unwilling to accept a cooldown that governance can extend to 90 days.
- Holders relying on non-Ethereum deployments without independently checking local liquidity and administration.
- Anyone seeking a wrapper that diversifies USDe's underlying portfolio.

## What to watch

- **Cooldown duration and silo balance.** A longer delay or growing silo changes the exit profile.
- **The sUSDe→USDe ladder.** Approximately $3.30 million currently marks the measured 50-bps boundary.
- **Aave, Morpho and Pendle holdings.** Concentration can turn leveraged unwinds into correlated selling.
- **Pendle maturities.** Monad and Plasma markets mature on October 22; Ethereum follows on November 26.
- **Bridged authority.** Blast and Fraxtal lack Ethereum's delay, while Monad's proposer remains unresolved.
- **USDe coverage and Reserve Fund.** Every sUSDe share inherits changes in the underlying asset.

## Related

- [USDe](/reports/usde/) — the underlying reserve portfolio, peg mechanism and issuer assessment

---

*Based on the completed USDe assessment, direct sUSDe vault reads at block 26,163,612, NAV history, liquidity and concentration measurements, and the multichain authority walk. Live readings are available on the [sUSDe dashboard](https://tidresearch.com/dashboards/?asset=susde). Corrections or additional primary evidence are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-11 — inherited monitoring scope synchronized.** USDe live reserve-account coverage moved from 12 of 13 to 13 of 13; the incomplete September 27 historical comparison remains explicitly inherited. Scores held.
- **2026-10-11 — inherited coverage synchronized.** Updated the USDe coverage pair from 99.4781% / 100.7690% to 99.1682% / 100.4590% after reserve-account monitoring expanded; scores held.
- **2026-10-11 — comprehensive refresh.** Added exact vault reconciliation, realized NAV growth, the 90-day contract maximum, the located $3.30 million Ethereum exit boundary, Plasma coverage, current DeFi concentration and multichain authority. Scores held.
- **2026-10-11 — exit descriptions corrected.** Replaced the former seven-day-cap description with the contract's 90-day maximum and replaced pool-TVL-as-depth language with executable ladder and counter-inventory measurements.
- **2026-10-02 — liquidity and chain pass.** Added Ethereum measurements and chain-specific liquidity overrides.
