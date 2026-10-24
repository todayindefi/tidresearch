---
protocol: "gTrade (Gains Network)"
slug: "gtrade"
aliases: ["gTrade", "Gains Network", "Gains", "GNS"]
chains: ["arbitrum"]
category: "protocol"
protocol_category: "perps/trading"
assessment_type: "full"
date: "2026-10-25"
last_verified: "2026-10-24"
last_revised: "2026-10-25"
featured: false
production: false
contract_score: 5.5
economic_score: 4.0
project_score: 4.5
overall_score: 4.5
tvl_gross: 8076778
audited: true
audit_firms: ["CertiK", "Halborn", "Pashov Audit Group"]
team_doxxed: false
incident_history: true
is_fork: false
live_since: "2022-01"
# Source: riskAnalyst/reports/gtrade.md; October 24 business/Arbitrum review,
# October 25 vault audit-scope correction and implementation identity recheck.
# Broader deployment footprint is described in the body, not scored by analogy.
# Audit count and bounty availability are unverified, so neither is asserted.
---

# gTrade (Gains Network) — Risk Report

**Elevated risk · 4.5/10**

Leveraged trading protocol · Arbitrum authority assessment · business data through October 24, 2026

## Summary

gTrade lets traders take leveraged positions while liquidity vaults fund their net profits and receive losses and allocated fees. Its business can generate revenue while an individual vault loses money: protocol usage, operator income and LP returns are different outcomes.

The business remains active, with approximately **$8.08m TVL** and **$522,237 in trailing-30-day fees**. Its capital base has contracted, however, and Arbitrum gUSDC experienced a **12.36% observed share-value drawdown** during September's concentrated trader payouts. The October 24 vault read showed **98.25% protocol collateralization** and a three-epoch withdrawal lock. Positive recent returns do not establish that recurring fees adequately compensate LPs for this risk.

Historical audits explicitly cover shared vault and settlement-feed code. Sensitive changes have real delays, but an emergency trading upgrade can take **10 hours**, and either of two Safes can initiate delayed actions, including a **2-of-4 emergency Safe**. Exact audited-version binding and current price-facet logic remain unresolved. Overall is **4.5/10**, with medium confidence.

**Scope.** Business conclusions concern the shared protocol; Contract and Overall cover the assessed Arbitrum path. Polygon, Base, MegaETH and ApeChain authority paths remain unverified. Arbitrum reads are pinned to block **517,782,312**, October 24 at **08:11:38 UTC**. Audit scope and vault implementation identity were rechecked October 25. The separate [gUSDC asset report](/reports/gusdc/) retains its October 3 assessment and its own scores.

## 1 · Smart Contract — 5.5

gTrade combines a vault proxy with a modular trading diamond, price feeds and epoch settlement. The [official Arbitrum deployment registry](https://docs.gains.trade/what-is-gains-network/contract-addresses/arbitrum-mainnet) supplied address discovery; the assessment independently read the authority relationships below.

| Control path | Verified Arbitrum control | Delay |
|---|---|---:|
| Vault proxy upgrade | ProxyAdmin owned by vault-owner timelock | 14 days |
| Normal trading facet replacement | Diamond governance timelock | 3 days |
| Emergency trading facet replacement | Diamond emergency timelock | **10 hours** |
| Propose and execute delayed actions | Governance 4-of-7 Safe **or emergency 2-of-4 Safe** | Relevant path's delay |

The governance Safe is [0xc07eed650ab255190ca9766162cfb47cfdf72f3a](https://arbiscan.io/address/0xc07eed650ab255190ca9766162cfb47cfdf72f3a); the emergency Safe is [0xe8997c502fcd0729b462fca19a50cf0daea0cab5](https://arbiscan.io/address/0xe8997c502fcd0729b462fca19a50cf0daea0cab5). Three signers overlap. Their beneficial ownership and custody independence are unknown. Delay-change calls from the governance Safe reverted with “caller must be timelock”; an external administrator role did not establish an immediate bypass. Candidate role probes are not a complete historical holder census.

The vault emergency admin can reset in-flight settlement requests. The owner controls feed replacement and settlement configuration. Captured feed source provides a permissionless elapsed-time settlement fallback; resetting requests does not indefinitely reset that time gate. The source permits configured cycles up to 17 days, so current timing is changeable.

**Audit coverage.** [Pashov's May–June 2025 review](https://github.com/pashov/audits/blob/master/team/md/GainsNetwork-security-review_2025-05-26.md) explicitly scopes `GToken`, `Timelock` and v10 trading/PnL components. Its findings summary marks the critical and four high findings resolved; two medium findings are acknowledged. [Halborn's 2022 report](https://github.com/HalbornSecurity/PublicReports/blob/master/Solidity%20Smart%20Contract%20Audits/Gains_Trade_Smart_Contract_Security_Audit_Report_Halborn_Final.pdf) explicitly scopes `GToken` and `GTokenOpenPnlFeed`, while excluding economic attacks and external libraries. Shared vault and historical feed audits are established.

**Risks and limitations.** The live vault implementation [0xeb754588eff264793bb80be65866d11bc8d6cbdd](https://sourcify.dev/server/v2/contract/42161/0xeb754588eff264793bb80be65866d11bc8d6cbdd?fields=all) has exact-match verified source. That proves source identity, not equality with audited fixes: the audited source commit could not be retrieved for comparison. The current price facet differs from the older reviewed configuration, and its source retrieval failed. Current freshness/sequencer behavior, oracle-setter reach and exact-version audit binding remain open. A current bounty's availability and scope were not established. Neither a resolved audit finding nor September's economic losses establish that a known bug was exploited.

## 2 · Economic — 4.0

Vault LPs underwrite trader outcomes. Their return combines allocated fees, trader losses received, trader profits paid, recapitalization and open-PnL valuation changes across a changing share base. Funding transferred between traders is not independent vault income.

### Business activity and LP income

The [DefiLlama protocol series](https://api.llama.fi/protocol/gains-network) showed **$8.08m TVL**, excluding staking and Pool2, down **50.7% over 30 days** and **29.3% over 90 days**. This is a valuation series; losses, prices, deposits, migrations and methodology changes have not been reconciled into net flows.

| Complete window through October 23 | Fees | Change versus preceding equal window | Protocol/token revenue |
|---|---:|---:|---:|
| 7 days | $62,561 | +4.5% | $46,224 |
| 30 days | $522,237 | −27.3% | $378,632 |
| 90 days | $1,642,942 | +27.2% | $1,259,027 |
| 180 days | $2,934,617 | −36.8% | $2,183,839 |

The public [protocol dashboard](https://defillama.com/protocol/gains-network) reported $1.147bn of 30-day volume, about 93% on Arbitrum. Fees show a September rebound followed by slower activity. Neither volume nor reported revenue establishes operating profitability, customer retention or a diversified trader base.

The [documented trading-fee split](https://docs.gains.trade/gtrade-leveraged-trading/fees-and-spread) is 76% governance, 15% vaults, 5% referrals and 4% keepers, with borrowing fees supporting vault buffers. This is documented policy, not a fresh verification of every market. Applying 15% to aggregate fees would misstate LP income because the [fee adapter](https://github.com/DefiLlama/dimension-adapters/blob/master/fees/gains-network.ts) combines multiple fee categories, chains and collaterals.

Observed gUSDC share returns were approximately **+7.35% over 30 days** and **+2.67% over 90 days**, before wrapper fees or USDC/USD movement. The 30-day window starts between September's losses. Returns do not show how much recovery came from fees, trader outcomes, refills or PnL releases; that bridge remains unreconciled.

### Demonstrated loss and remaining capital

September 21 and 24 settlement observations showed share-rate declines of **7.59% and 5.52%**. Across the peak-to-trough interval, the rate fell from 1.343250 to 1.177219 USDC per share, a **12.36% drawdown** with intervening fees. Existing investigation attributes dominant gross payouts to one trader; the wallet/event reconstruction was not independently re-decoded in this refresh.

The [v10 profit-withdrawal mechanism](https://docs.gains.trade/developer/technical-reference/contracts/changelogs/v10-update) permits withdrawing positive PnL without fully closing a position. A trader can subsequently lose remaining collateral without returning profit already paid out. Approximately balanced aggregate long/short OI does not neutralize different entry prices, payout timing or limited recoveries. This is a **demonstrated concentrated economic loss; an exploit is not established**. No reviewed evidence establishes a targeted subsequent remediation.

| Arbitrum gUSDC, October 24 | Observation |
|---|---:|
| USDC cash / total assets | $4,109,311 |
| Outstanding shares | 3,097,630.68 |
| Accounting share price | 1.33748972 USDC |
| Protocol collateralization | **98.2461%** |
| Withdrawal-request lock | **3 epochs** |

Protocol collateralization compares snapshotted PnL accounting with a fee-adjusted reference. It is not an audited assets/liabilities solvency ratio. The used PnL already affects share price; subtracting an additional 1.75% would double-count it. A partial open-position snapshot omitted five unpriced markets and cannot prove solvency.

### Exits and backstop

The measured settlement cycle is configured as 48 hours followed by four six-hour intervals, about 72 hours. At current collateralization, requests lock for three epochs and must be manually redeemed in their designated eligible window. Missing it requires a new request; requesting does not freeze price exposure. Three epochs specify eligibility, **not guaranteed nine-day settlement**. See the [staker FAQ](https://docs.gains.trade/liquidity-farming-pools/gtoken-vaults/staker-faq).

A matured request may sometimes exit before a negative repricing, concentrating losses among remaining LPs. A new request cannot mature before the current rollover under these rules. Smaller remaining capital also increases exposure to unchanged dollar payouts: a $346,000 additional net payout equals 8.42% of the observed cash, or 11.23% after a hypothetical 25% cash outflow. These are denominator stresses, not predicted NAV losses; withdrawals alone do not destroy remaining share value.

GNS refill requires an external participant to supply USDC in exchange for newly minted GNS, while the vault is undercollateralized and within a live **0.05% daily supply cap**. It depends on willing buyers and GNS valuation, rather than prefunded insurance.

**Risks and limitations.** A complete LP cash-flow bridge, trader/depositor concentration analysis and proof of exposure limits scaling with vault capital remain open. Recovered share value and business revenue do not independently establish an adequate underwriting margin or a funded loss guarantee.

## 3 · Project — 4.5

gTrade has operated since 2022, continues generating fees and has public maintenance activity. [API SDK commits](https://github.com/GainsNetwork-org/gains-api-sdk/commits) show September deployment and signature-check work. They do not prove the staffing or maintenance of the private trading-contract repository.

The [site terms](https://gains.trade/terms-of-service), dated November 2023, name **Ingenium Labs Foundation, Panama**, as site operator, with confidential binding arbitration in Panama and class-action restrictions. They also disclaim operating or controlling the protocol. The named site counterparty does not guarantee depositor recovery; enforceability and licensing were not independently assessed. The current personnel roster and succession plan remain unverified.

The [staking documentation](https://docs.gains.trade/liquidity-farming-pools/gns-staking) says rewards and buybacks are paused under a June 2026 growth policy, redirecting funds toward growth/marketing. Its later phase references a $20 GNS 30-day TWAP condition and DAO discretion. Nonzero holder-revenue reporting conflicts with this documentation and requires onchain reconciliation. Governance execution and spending controls were not independently verified.

The tracked treasury was roughly $166,700, about 80% GNS, with $33,400 excluding GNS. Coverage may omit a growth treasury, the linked adapter was unavailable, and operating expenses were not established. **Runway is unknown.** These figures cannot support a burn-rate estimate or a conclusion that all available funds have been enumerated.

**Risks and limitations.** Continuing usage and maintenance support business continuity, while concentrated control, incomplete funding visibility and shrinking capital limit confidence. Reinvestment needs measurable retention and net fee growth to establish its benefit.

## Who bears the risk

- **gUSDC depositors:** trader payouts and repricing can reduce share value while withdrawal windows limit reaction. The separate asset assessment adds USDC and Arbitrum dependencies.
- **GNS holders:** paused distributions, discretionary growth spending and refill dilution affect returns; weaker GNS demand can reduce recapitalization capacity.
- **Wrappers and integrators:** additional fees and controls cannot guarantee faster underlying redemption.

## Scores and monitoring

| Protocol axis | Score |
|---|---:|
| Smart Contract | 5.5 |
| Economic | 4.0 |
| Project | 4.5 |
| **Overall** | **4.5** |

The equal-weight axis mean is **4.67**, rounded to the nearest half-point. Scores are ordinal judgements, not loss probabilities. The gUSDC asset scores are unchanged.

Prioritize current price-facet source and audit binding; payout/OI limits and their scaling with capital; a September–October LP recovery bridge; customer and depositor concentration; and growth-treasury coverage and expenditure controls. Assess other chains separately before extending the Arbitrum control conclusions.

Proposed review triggers include collateralization below 100% (escalating below 95%), material single-wallet payouts, failed eligible redemptions, capital contraction without exposure adjustment, and any facet, role, signer, delay or feed change. These are analyst review proposals, **not newly installed alerts or contract limits**. Sustained buffers, reconciled positive LP economics across diverse traders, successful stress exits and exact-version assurance would improve confidence.

## Revision history

*2026-10-25 — First staged protocol page from the October 24 assessment and October 25 audit-scope recheck. Contract 5.5, Economic 4.0, Project 4.5 and Overall 4.5. Vault and historical feed audit coverage is established; live audited-version binding remains open. Business/authority observations retain their October 24 dates. No gUSDC asset rescore, alert installation or production promotion.*
