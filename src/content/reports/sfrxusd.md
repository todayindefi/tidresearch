---
asset: "sfrxUSD"
slug: "sfrxusd"
aliases: ["sfrxUSD", "Staked frxUSD", "Staked Frax USD"]
chains: ["eth", "fraxtal", "arbitrum", "avalanche", "base", "bnb", "katana", "optimism", "polygon", "sei", "sonic"]
category: "vault-share"
assessment_type: "full"
date: "2026-08-29"
last_verified: "2026-10-15"
last_revised: "2026-10-16"
featured: false
production: true
issuer: "Frax Finance / Frax Inc"
underlying_assets: ["frxUSD"]
yield_bearing: true
market_cap_approx: 37968538
axis_frame: six
volatility_score: 6.5
backing_score: 5.0
liquidity_score: 5.0
underlying_score: 4.0
structural_score: 3.5
issuer_score: 5.0
# Legacy schema field; primary redemption is discussed within Liquidity & Exit.
redemption_score: 5.0
overall_score: 4.5
---

# sfrxUSD — Risk Report

**Elevated risk · 4.5/10**

A strategy-backed savings token from Frax, with an administered share price denominated in [frxUSD](/reports/frxusd/).

## Summary

sfrxUSD earns through lending and liquidity strategies while its quoted frxUSD value accrues at a configured rate. Holding it combines frxUSD's reserve exposure with the performance, liquidity and administration of those strategies. The displayed share price is not an independently calculated liquidation value.

Ethereum holders can use a cross-chain primary route through Fraxtal or sell on a secondary market. Direct Ethereum `deposit`, `mint`, `withdraw` and `redeem` entrypoints are disabled. At the measured block, a Curve sale returned frxUSD close to the administered price through $5M; continuing into USDT became materially more expensive around $1M.

The October 15 issuer balance sheet reports **$38.026M assets against $37.969M net circulating claims**, leaving **$57,119**, or **15.04 basis points**, of surplus. Most assets are deployed rather than held as readily available redemption cash. Three signatures can exercise several important pricing, minting, upgrade and asset-recovery powers without an intervening execution delay.

The overall **4.5** sits below the six-axis arithmetic mean of **4.83** because correlated administration and conditional exits constrain the benefit of stronger individual axes. No exploit, default or realized strategy loss is established by these observations.

**Evidence basis.** The issuer snapshot is **October 15, 2026, 06:23:47 UTC**, with Ethereum block **26,196,098** and Fraxtal block **42,617,358**. Strategy and exit quotes use that Ethereum block; nearby token, authority and remote-chain checks retain their own blocks and retrieval times in the [archived evidence](/data/sfrxusd/2026-10-15/manifest.json). Dollar figures use issuer marks, including frxUSD at $1, unless another mark is specified. These are dated observations rather than live quotes.

## 1 · Stability — 6.5

sfrxUSD is referenced to an accruing frxUSD share price rather than a fixed $1 peg. At the common strategy block, that price was **1.2155106428 frxUSD per share**. The configured exponential accrual parameter implies approximately **5.10% APY** if held constant; the issuer's nearby summary showed 5.1035% under its estimation convention.

The price advances according to administered parameters. A controller can reset the share price and accrual rate, and the implementation does not enforce a monotonically increasing price. The accessor named `maxDistributionPerSecondPerAsset` supplies a pricing parameter; it does not provide an immutable ceiling on achievable yield. Configured accrual does not establish that strategies have earned the corresponding amount.

The Ethereum token's displayed `totalAssets()` was approximately **41.273M frxUSD**, calculated from Ethereum supply and the administered price. The token contract itself held **zero frxUSD** at the checked block: backing is deployed elsewhere, so that display is not a count of cash inside a conventional vault.

**Risks and limitations.** Market price can diverge from administered value when exits become expensive or confidence changes. A complete historical market-price series and sustained off-NAV stress analysis were not completed. Current implementation observations do not establish when the architecture changed.

## 2 · Backing — 5.0

Backing consists of strategy claims and frxUSD cash. The issuer's balance sheet nets protocol-held, unissued and legacy bridge holdings out of circulating liabilities; its own sfrxUSD sides of liquidity positions offset liabilities rather than providing independent collateral.

| October 15 issuer measure | Value |
|---|---:|
| Reported assets | $38.026M |
| Net circulating claims at administered price | $37.969M |
| Reported surplus | $57,119 |
| Asset coverage | 100.15044% |
| Surplus / net circulating claims | 15.04bp |

Gross global supply was approximately 48.449M shares in nearby reads, compared with approximately 31.240M net circulating shares. Gross supply multiplied by price is therefore a different denominator from the issuer's net circulating claim measure.

| Allocation | Issuer value | Share of reported assets |
|---|---:|---:|
| Aave V4 supplied frxUSD | $16.275M | 42.80% |
| Five Fraxlend pairs | $5.603M | 14.73% |
| External legs of Convex-staked Curve positions | $6.430M | 16.91% |
| External legs of unstaked Curve positions | $1.128M | 2.97% |
| Gearbox institutional RWA market | $1.001M | 2.63% |
| Fraxtal mint/redeemer frxUSD cash | $7.306M | 19.21% |
| Controller frxUSD cash across Ethereum and Fraxtal | $0.282M | 0.74% |

Pinned reads checked the listed lending balances and reconstructed the external sides of liquidity positions. The asset and liability rows reconcile to published totals within a cent. The issuer also counts about $123 of self-held sfrxUSD among assets; that amount supplies no independent loss cushion.

There is a favorable but unresolved valuation difference: converting the scrvUSD shares in one LP position into underlying crvUSD produces approximately **$136,859**, compared with the issuer's **$123,320**. Total reconstructed LP value is approximately **$13,539 higher** than reported. The coverage ratio above retains the issuer's valuation basis.

The underlying frxUSD balance sheet separately reports **$106.809M reserves / $103.850M circulating liabilities**, or **102.8497% coverage**. WTGXX represents **63.19%** of those reserves; USTB and BUIDL are other major positions. Six Ethereum reserve-token quantities matched pinned reads. sfrxUSD adds strategy loss and illiquidity exposure to this underlying reserve layer.

**Risks and limitations.** A 15bp reported cushion leaves little room for valuation error or loss. Verification covered disclosed positions, not an independent discovery of every asset and liability. Off-chain beneficial ownership, fund NAVs and reported bank cash remain unverified. Gearbox's actual position is approximately $1M; authorization limits do not measure exposure. No Royco position appears in this snapshot, which does not exclude undisclosed positions elsewhere.

## 3 · Liquidity & Exit — 5.0

Primary redemption converts sfrxUSD into frxUSD through Fraxtal. [Frax's Ethereum quickstart](https://docs.frax.com/frxusd/stake-and-unstake-quickstart-ethereum) uses Hop and cross-chain messaging; the destination mint/redeemer is `0xBFc4D34Db83553725eC6c768da71D2D9c1456B55`. Ethereum's local ERC-4626-shaped entrypoints revert with `MintRedeemsDisabled()`. The route depends on message delivery, destination execution, pricing inputs and available cash.

The Fraxtal mint/redeemer held approximately **7.306M frxUSD**, enough for around **6.011M shares** at the nearby price before fees and rounding. Its approximately 10.114M protocol-held sfrxUSD is inventory, not additional redemption cash. A holder has no reserved entitlement to the full cash balance. The configured redemption fee was approximately **0.001bp**, subject to owner changes.

The redemption oracle extrapolates stored pricing parameters. Although `latestRoundData()` stamps the current block time, its last parameter synchronization was **September 24, 2026, 19:50:59 UTC**. A recent returned timestamp does not independently verify fresh strategy NAV. The underlying-price feed is unset and the getter assumes frxUSD equals $1.

### Secondary sale into frxUSD

At Ethereum block 26,196,098, Curve pool `0xF292eB6c5dcb693Eaaf392D0562a01C3710E5978` quoted the following exits. Inputs are sized at the administered share price and frxUSD is marked at $1. Pool fees are included; gas and approvals are excluded.

| Input at administered NAV | frxUSD received | Cost below administered NAV |
|---|---:|---:|
| $1,000 | 999.90 | 1.01bp |
| $100,000 | 99,989.72 | 1.03bp |
| $1,000,000 | 999,881.53 | 1.18bp |
| $3,000,000 | 2,999,491.24 | 1.70bp |
| $5,000,000 | 4,998,008.38 | 3.98bp |
| $7,000,000 | 5,915,871.16 | 1,548.76bp |
| $10,000,000 | 5,917,045.37 | 4,082.95bp |

The low-cost route reaches $5M, approximately **13.2% of net circulating NAV claims**, then approaches an inventory wall around 5.918M frxUSD. The controller's Convex stake owns approximately **99.9998%** of this pool's LP supply.

### Continuing into USDT

Adding the frxUSD/USDT pool `0xD6937eA8D33B0C21348F36F7895FdE3054bA4927` gives a materially smaller dollar exit. A $100K NAV-sized input returns **100,040.04 USDT**, worth approximately **$99,931** at the snapshot mark of $0.99891, a **6.90bp** cost. A $1M input returns **894,058.08 USDT**, approximately **10.69% below** input value after that mark. Larger inputs flatten near 894K USDT. The controller directly holds LP tokens representing approximately **99.9948%** of this pool's LP supply; this position is not Convex-staked. [Archived route quotes](/data/sfrxusd/2026-10-15/ethereum-exit-ladder.json).

Strategy balances are not equivalent to immediately withdrawable cash. The largest Fraxlend position showed approximately **$4.348M** of claims but **$1.195M** withdrawable; Gearbox showed **$1.001M** versus **$0.234M**. Aave's approximately **$16.275M** supplied position faced a **$4.059M shared-hub liquidity bound**, not a reserved withdrawal allocation. These values and treasury-owned pool liquidity cannot simply be added as independent exit capacity.

**Risks and limitations.** Treasury-owned depth can be withdrawn and can be needed by the same strategies supporting the token. A cheap frxUSD sale still leaves frxUSD's own dollar redemption and eligibility requirements. End-to-end primary-route latency and failure recovery were not tested. Sequential read-only pool quotes are not global router optimization; remote-chain exit ladders were not measured.

## 4 · Dependencies — 4.0

The product relies on frxUSD reserves, lending protocols, liquidity pools, price administration and cross-chain settlement. Lending through Aave, Fraxlend and Gearbox accounts for approximately **60.17% of reported assets**; external liquidity-pool legs add approximately **19.88%**. Aave alone represents 42.80%.

The **4.0 Dependencies score** reflects concentrated strategy, custody and settlement dependencies beyond frxUSD's reserve chain. A pass-through wrapper that holds only its underlying can share the parent's dependency score; sfrxUSD deploys capital into additional lending and pool venues, so that equal-score convention does not apply. Its 4.0 sits below frxUSD's 4.5 dependency score. Partly substitutable strategies limit the penalty. Strategy loss and valuation risk remain in Backing, while mutable pricing and privileged powers remain in Contract & Admin.

Fraxlend collateral includes sfrxETH, sfrxUSD, WBTC, WFRAX and sUSDe. Lending against sfrxUSD creates a reflexive link between the token's own exit quality and the collateral securing part of its strategy. WFRAX adds Frax-correlated exposure; reUSD and scrvUSD introduce additional issuer and protocol dependencies. The checked Aave custody positions held supplied frxUSD without active frxUSD debt at those addresses.

Ethereum and Fraxtal form the directly examined token and redemption path. Positive remote supplies and owner-Safe checks also cover Arbitrum, Avalanche, Base, BNB Chain, Katana, Optimism, Polygon, Sei and Sonic. Among these remote samples, Katana held approximately 101,184 shares, Sei 23,336 and Sonic 7,462. Fraxtal's gross supply was approximately **14.358M shares** in nearby reads.

**Risks and limitations.** These exposures share collateral, governance and exit infrastructure. Frax's [deployment registry](https://docs.frax.com/frxusd/stake-and-unstake-supported-networks) lists 26 networks, including Solana; the sampled chains do not constitute complete coverage. Peer, DVN and executor configurations, global bridge conservation and every downstream protocol's risk were not fully verified. Ethereum's measured liquidity does not establish another chain's exit capacity.

## 5 · Contract & Admin — 3.5

Pricing, minting, upgrades and redemption assets sit behind overlapping multisignature authorities. The observed direct paths have no enforced execution delay between the Safe and its action.

| Authority | Observed control |
|---|---|
| Ethereum and Fraxtal controller `0x4b45d73b83686e69d08e61105fdb7f7b51f41bc1` | 3-of-6 Safe; pricing and minting authority, and Fraxtal redeemer ownership |
| Ethereum token ProxyAdmin `0xea0a6ec8114a0af6cf74ca0036ab31d892df13cb` | Owner `0xb1748c79709f4ba2dd82834b8c82d4a505003f27`, a 3-of-5 Safe |
| Fraxtal token ProxyAdmin `0xfc0000000000000000000000000000000000000a` | Owner `0xc4eb45d80dc1f079045e75d5d55de8ed1c1090e6`, a 3-of-5 Safe also directly administering the redeemer proxy |

All five Ethereum upgrade owners overlap the controller's six owners; four Fraxtal upgrade owners overlap that population. The accessor `timelockAddress()` resolves to the controller Safe, not a delaying contract. Controller-appointed minters can mint without proving reserve receipt in that function. The redeemer owner can change fees and oracles and recover underlying tokens to itself.

The approximately $2.519M Aave custody address is a 1-of-1 Safe whose owner is the controller Safe: effective control requires three controller signatures. The seven main root Safes and nested Aave Safe queried returned no enabled modules, without establishing complete guard, fallback-handler or signer-custody assurance. Remote owner paths read in the nine sampled networks terminate in 3-of-6 Safes; complete upgrade paths were not uniformly resolved.

**Code and documentation.** Ethereum token `0xcf62F905562626CfcDD2261162a51fd02Fc9c5b6` uses implementation `0xaad4a1d92053a62ce7a787641d8b4e5883e96700`. Fraxtal token `0xfc00000000000000000000000000000000000008` uses `0xba026e978eb1b11d72adabf33b7cf6f3e321ca83`; the Fraxtal redeemer uses `0xc13d8e8668f5b54d492f5c3e37cf772206f7d0a6`. Verified-source runtime bytes matched the three implementation codes at the checked blocks. [Verification records](/data/sfrxusd/2026-10-15/verification.json).

[Frax's product documentation](https://docs.frax.com/protocol/assets/frxusd/sfrxusd) describes an ERC-4626-like strategy token and Fraxtal mint/redeemer; its separate Ethereum guide agrees with the cross-chain route. That broad description does not establish immediate local Ethereum withdrawals or an enforced timelock. Full audit parity for deployed changes, including Ethereum v3 signature extensions, remains unresolved.

The [ChainSecurity July 17, 2025 upgrade audit](https://github.com/FraxFinance/frax-solidity/blob/master/src/audits/ChainSecurity_Frax_FXB_sfrxUSD_Upgrade_Audit.pdf) covers quasi-ERC-4626, Fraxtal mint/redeemer and pricing-oracle components. It reports zero critical, high or medium findings and ten low findings, with fixes, specification changes and accepted risks. Financial modeling is excluded and the audit relies on a Fraxtal sequencer assumption. Frax's [bounty terms](https://docs.frax.com/protocol/security/bugbounty) state a maximum of $10M or 10% of the potential exploit, whichever is lower, and exclude privileged-key and governance scenarios.

**Risks and limitations.** Overlapping signers can change both claim accounting and access to assets without a waiting period. Source identity establishes the code interpreted, not comprehensive audit coverage. The external lending, pool and messaging contracts require their own assurance; unexamined registry deployments and incomplete remote upgrade paths remain outside this coverage.

## 6 · Issuer — 5.0

Frax Finance operates the product; the supplied assessment names Frax Inc alongside it. Public documentation, governance proposals and itemized asset/liability reporting provide observable disclosure. The **5.0 issuer score is carried from the shared frxUSD issuer assessment**, rather than independently re-derived from a new legal review of sfrxUSD.

The current evidence establishes the product's public identity, strategy disclosures and published governance process. It does not establish which legal entity owes an sfrxUSD holder a redeemable debt, that entity's jurisdiction, beneficial owners or principals, governing law, dispute forum, or enforceable creditor priority. A token holder's operational route returns frxUSD; any subsequent claim on reserve custodians remains subject to their terms and eligibility requirements.

**Risks and limitations.** The current refresh does not independently verify financial-statement audits, a complete conduct history, insolvency treatment or a holder's direct off-chain recovery rights. Those inputs are unverified rather than findings that no rights or accountable parties exist. Public reserve reporting alone does not establish recourse against a named company or fund.

## What to watch

- Reported surplus relative to net circulating claims, and resolution of the scrvUSD valuation difference.
- Realized strategy earnings compared with configured accrual, plus lending withdrawal availability.
- Fraxtal redemption cash, oracle parameter synchronization and cross-chain execution reliability.
- Changes in overlapping admin roots, enforced delays and independently sustained pool liquidity.
- Executed exit quotes into the desired final asset, rather than frxUSD-only depth or aggregate TVL.

## Revision history

- **2026-10-16 — Editorial reconciliation.** Dependencies 4.5 → 4.0 for the additional concentrated strategy, custody and settlement layer beyond frxUSD; the equal-score convention for pure pass-through wrappers does not apply. Overall remains 4.5; the six-axis mean is 4.83. Clarified approximately 99.9998% ownership of sfrxUSD/frxUSD through Convex and 99.9948% of frxUSD/USDT through directly held LP tokens. October 15 observation clocks and verification date are unchanged; no fresh verification or dashboard/feed promotion is implied.

- **2026-10-15 — Staging refresh.** Adopted the updated strategy, redemption, authority and multichain evidence. Overall 5.0 → 4.5; Stability 7.0 → 6.5; Backing 6.5 → 5.0; Contract & Admin 5.0 → 3.5. Liquidity & Exit remains 5.0, Dependencies 4.5 and Issuer 5.0. Replaced the hard-yield-ceiling and frxUSD-only vault rationale, incorporated actual lending/LP balances and measured exits, and replaced direct Ethereum redemption assumptions with the Fraxtal route. These are corrections to the assessment, not a dated exploit or loss event. Primary redemption is incorporated within Liquidity & Exit; its legacy field changes 6.5 → 5.0. Issuer remains explicitly carried with legal verification gaps stated.
- **2026-08-29 — Initial publication.** First assessment of sfrxUSD; superseded assumptions are replaced in the current body.
