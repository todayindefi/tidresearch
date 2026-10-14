---
asset: "DOLA"
slug: "dola"
aliases: ["DOLA", "Dola USD", "Inverse Finance DOLA"]
chains: ["eth", "base", "arb", "op", "bsc", "fantom", "polygon", "avax", "mode", "blast"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "full"
date: "2026-07-01"
last_revised: "2026-10-14"
last_verified: "2026-10-14"
peg_mechanism_score: 5.0
backing_score: 4.5
liquidity_score: 4.5
underlying_score: 4.5
structural_score: 5.0
issuer_score: 5.0
overall_score: 4.5
issuer: "Inverse Finance DAO"
audited_reserves: false
market_cap_approx: 72573072
axis_frame: six
production: true
featured: false
# Source: /home/danger/riskAnalyst/assets/dola.md, 2026-10-14.
# Issuer inputs and remote topology remain incomplete; published provisionally.
---

# DOLA — Risk Report

**Moderate-elevated risk · 4.5/10** · Provisional

Debt-backed USD stablecoin · FiRM lending and Fed supply management · Inverse Finance DAO. Scores run from 1 to 10, with higher scores indicating greater safety.

## Summary

DOLA pays no yield; [sDOLA](/reports/sdola/) is its separate savings wrapper. DOLA is principally backed by loans on Inverse Finance's FiRM. It has useful current Ethereum trading liquidity, but the lending book is dominated by collateral containing DOLA or sDOLA itself, known bad debt remains, and the PSM has no collateral reserves at the verified snapshot. Holding DOLA depends on loan recovery, secondary-market demand and governance rather than a presently funded near-par redemption facility.

The judgment is **a specialized DeFi stablecoin with material concerns, suitable for controlled transactional use more readily than a core cash holding**. For sUSDe or ysyBOLD leverage, borrowing DOLA and converting it promptly differs from holding a large DOLA balance. A discount can help repayment; a premium or disappearing routes can make closing the loan expensive.

**Overall 4.5 is below the six-axis mean of 4.75.** The overall judgment is provisional and reflects recovery and exit constraints; it is not an arithmetic average. Backing, exit-score derivation, remote controls and issuer recourse remain incomplete.

## 1 · Stability — 5.0

DOLA targets $1 through borrowing, repayment and supply management. Below par, borrowers can buy discounted DOLA to repay DOLA-denominated debt. Above par, borrowing or PSM purchases can increase supply, subject to capacity and costs. These incentives support a soft peg; they do not give every holder a right to redeem against FiRM collateral. [Issuer's mechanism description](https://docs.inverse.finance/inverse-finance/inverse-finance/products/tokens/dola/dola-peg-mechanism)

### PSM design and current capacity

The documented mechanism swaps USDS for DOLA with no buy fee and DOLA for USDS with a 20-basis-point sell fee. Reserves are invested in sUSDS. The current app uses `0x1d02f2841afa3cc20435a8c804c24deac5f30dfa`; documentation still identifies `0x4dfd662622d766304cb539e66f893c4defa19398`. [PSM documentation](https://docs.inverse.finance/inverse-finance/inverse-finance/products/peg-stability-module)

Both contracts return `supply() = 0` and `getTotalReserves() = 0`. The current PSM holds 200,000 DOLA but no invested USDS reserve. A one-DOLA sale from an ordinary test address reverts with arithmetic underflow. The bytecode-matched source subtracts the sale from supplied collateral before token-transfer checks, so this failure identifies the empty reserve rather than the test address's missing allowance. [Simulations](/evidence/dola/dola-admin-coverage-2026-10-14.json), [verified source](/evidence/dola/dola-source-verification-2026-10-14.json)

The deployed controller returns true for tested ordinary-address buy and sell hooks. Eligibility is not the binding constraint in that test; capacity is. Governance can replace the controller, alter fees or migrate the vault. A nominal fee quote therefore does not prove redemption succeeds. No universal DOLA holder shutdown-and-settlement right was verified.

The latest observations put DOLA about 30–48 basis points below $1. A complete historical peg series was not reconstructed, so no fresh claim is made about worst-depeg duration or uninterrupted par through past crises. The 5.0 stability score reflects repayment incentives alongside the absence of funded PSM support.

## 2 · Backing — 4.5

DOLA is supported mainly by collateralized FiRM loans. The October 14 official API snapshot reports 69.688M DOLA of FiRM debt against $87.379M of oracle-valued collateral. Most loans are secured by liquidity-pool shares containing DOLA or sDOLA, so the headline collateral value does not measure independent dollar backing.

### Loan sources and concentration

| FiRM debt source | DOLA debt | Share of FiRM debt |
| --- | ---: | ---: |
| Convex DOLA/sUSDe | 41.565M | 59.64% |
| Yearn DOLA/sUSDe | 11.323M | 16.25% |
| Convex DOLA/sUSDS | 4.907M | 7.04% |
| Stake DAO scrvUSD/sDOLA | 4.133M | 5.93% |
| reUSD/sDOLA and Yearn version | 4.282M | 6.14% |
| Yearn DOLA/sUSDS | 0.945M | 1.36% |
| All remaining markets | 2.532M | 3.64% |
| **Total** | **69.688M** | **100%, before displayed rounding** |

DOLA/sDOLA-containing LP markets account for **96.37% of FiRM debt**. This is a share of loan sources, not a reserve-asset partition. The full API list sums to reported FiRM debt. Including standalone sUSDe yields 53.326M DOLA debt in Ethena-linked markets, or 76.52%. This measures shared issuer/pool dependencies, not ultimate reserve weights. [Market snapshot](/evidence/dola/dola-api-snapshot-2026-10-14.json)

### LP look through and internal claims

The largest DOLA/sUSDe pool is reported at $59.974M: approximately $44.870M DOLA equivalent and $15.104M sUSDe, or 74.82% DOLA. DOLA/sUSDS is about 77.05% DOLA by its reported valuation. These compositions change with trading.

DOLA inside its own collateral is not independent dollar backing. Recovered DOLA can extinguish debt, but cannot also be counted as an external reserve. sDOLA is a wrapper over the same liability. Conversely, these loops do not prove insolvency: liability cancellation matters. Proper coverage requires netting internal claims, attributing external collateral to loans and accounting for realization costs.

Displayed FiRM TVL/debt is approximately 125.39%. That is **not an independently verified DOLA collateralization ratio**: it includes self-referential collateral and excess value in individual positions that cannot simply be moved to cover another borrower's loss.

### Bad debt and junior capital

The official API reports **2,764,795 DOLA** bad debt: 2,764,707 Frontier and 88 FiRM. It also records about 766,052 DOLA of historical FiRM bad-debt repayments. Separate escrows do not remove realized shortfalls from the common stablecoin's economic backing. The API's debt calculation was not independently rebuilt borrower by borrower.

The junior vault's assets are denominated in **sDOLA**, not DOLA. Converting its verified 128,937 sDOLA through the actual sDOLA contract gives about **183,455 DOLA**, approximately 0.26% of FiRM debt. The module is authorized by the vault and sampled established markets are enabled. ysyBOLD coverage activates **October 19, 2026 at 21:37:59 UTC**, after this snapshot. [Coverage and capacity reads](/evidence/dola/dola-admin-coverage-2026-10-14.json)

The module's 100-DOLA `maxCollateralValue` refers to **remaining collateral when slashing is attempted**, not the original position size. Deployed source requires largely completed liquidation, residual debt above collateral, and at least 5 DOLA debt. Coverage remains bounded by capital and eligibility. [Slashing implementation](https://github.com/InverseFinance/JuniorDola/blob/main/src/FiRMSlashingModule.sol)

**Risks and limitations.** Backing remains provisionally scored at 4.5 because external collateral has not been reconciled after netting internal DOLA and sDOLA claims. Recovery-dependent receivables, known shortfalls and endogenous collateral prevent a verified reserve-quality calculation. A smaller bad-debt percentage caused by supply growth does not repair a shortfall.

## 3 · Liquidity & Exit — 4.5

Ethereum holders can sell DOLA through secondary markets. The primary PSM route offers DOLA-to-USDS swaps when reserves are available, but both inspected PSMs had zero reserves and a one-DOLA sale simulation failed. **Primary redemption is the binding exit constraint**; the 4.5 score is carried from the source assessment and remains provisional pending a derivation under the combined exit rubric. Borrowers can use DOLA to repay their own debt; ordinary holders cannot redeem directly against other borrowers' collateral.

### Ethereum DOLA to USDC estimates

These read-only KyberSwap router estimates include route swap effects and fees, exclude gas from the output comparison, and measure proceeds against one-dollar face value. They are not executed trades, guaranteed fills or proof of the globally optimal route.

| DOLA sold | Quoted USDC received | Proceeds / face value | Discount to $1 |
| --- | ---: | ---: | ---: |
| 10,000 | 9,970.06 | 99.7006% | 0.2994% |
| 100,000 | 99,695.84 | 99.6958% | 0.3042% |
| 1,000,000 | 996,629.36 | 99.6629% | 0.3371% |
| 1,500,000 | 1,494,541.28 | 99.6361% | 0.3639% |
| 2,000,000 | 1,991,968.45 | 99.5984% | 0.4016% |
| 3,000,000 | 2,983,522.92 | 99.4508% | 0.5492% |
| 5,000,000 | 3,867,850.20 | 77.3570% | 22.6430% |

The ladder supports usable current mainnet exits through 3M DOLA. The poor 5M quote is not a hard market ceiling; routing and depth need independent simulation before sizing near that amount. A 2% crossing was not located. Existing discount to par is included, so these discounts are not entirely incremental price impact. [Raw estimates](/evidence/dola/dola-usdc-quotes-2026-10-14.json)

Larger routes use DOLA/sUSDe and DOLA/sUSDS before reaching USDC through additional venues or wrapper redemption. This is stronger evidence than valuing received sUSDe at an assumed dollar, but depends on multiple exits functioning together. Mainnet estimates establish no equivalent capacity on other chains.

### Inventory and source quality

The largest pool's $15.10M non-DOLA inventory is not guaranteed USDC exit capacity: sellers first receive sUSDe and need a further route. Total pool TVL includes the DOLA being sold, so it cannot all absorb sellers.

The issuer's liquidity endpoint contains an unrelated INV/WETH row with a field named `dolaBalance`. The report therefore does not add every endpoint balance or pairing-depth field into a global total. Membership must be verified against token addresses, and sDOLA routes must include its wrapper step. **Liquidity score: 4.5**, recognizing useful present estimates alongside concentration and untested stressed execution.

## 4 · Dependencies — 4.5

DOLA's value depends on FiRM escrows, prices, liquidation execution and governance. The largest markets add Ethena, Curve, Convex and Yearn; other collateral adds Sky, Stake DAO, Curve savings assets, reUSD, and crypto custody/staking exposure. Multiple wrappers of one pool do not diversify its underlying failure mode.

A verified 1-of-4 Safe can change sUSDe LP pricing with zero switch delay. Prices held too high can delay recovery; switching can create sudden liquidations. This applies to the LP configuration, not automatically to standalone sUSDe. [FiRM documentation](https://docs.inverse.finance/inverse-finance/inverse-finance/products/firm)

The PSM adds USDS/sUSDS and controller risk when funded. Remote DOLA adds local token, bridge custody, messaging and upgrade authority. **Dependencies score: 4.5.** Correlated collateral recovery and market exit matter more than simply counting integrations. Metadata lists major dependencies, not a complete graph or reserve partition.

## 5 · Contract & Admin — 5.0

Ethereum DOLA is an immutable token whose operator can mint and appoint minters. Core authority passes through a 48-hour governance timelock, while separate working-group Safes operate supply and market controls without an established operational delay. State was read at block **26,188,001, October 14, 2026 at 03:18:35 UTC**; separate API observations are dated 03:14–03:15 UTC and remote-chain reads use their own recorded blocks.

### Intrinsic contract risk

Mainnet DOLA is a simple ERC20 with permit, operator and minter functions. Its deployed bytecode matches explorer-verified source. That source has no proxy upgrade, blacklist or transfer-pause mechanism. The operator can mint directly and appoint minters; token-level minting does **not** enforce collateralization or Fed ceilings. Those checks live in issuing contracts and governance. [Source and bytecode matches](/evidence/dola/dola-source-verification-2026-10-14.json)

The current PSM and slashing module also match verified bytecode. Matching source establishes identity, not absence of bugs. Published FiRM audits concern the lending core and cannot be treated as blanket coverage of all collateral, bridges or helpers. [Audit registry](https://docs.inverse.finance/inverse-finance/inverse-finance/technical/audits)

PSM governance can migrate the reserve vault, replace the controller, set swap fees as high as 100%, and sweep ERC20 balances, including reserve-vault shares. These are reserve and exit controls under the verified governance path, not merely maintenance settings. The current zero reserve limits the amount exposed there today. [PSM source](/evidence/dola/dola-source-verification-2026-10-14.json)

### Verified authority topology

| Address | Role | Type | Threshold or delay | Signers |
| --- | --- | --- | --- | --- |
| `0x926df14a23be491164dcf93f4c468a50ef659d5b` | Token operator; sampled Fed/PSM/module governance | Treasury timelock | 48 hours | Admin is Governor Mills |
| `0xbeccb6bb0aa4ab551966a7e4b97cec74bb359bf6` | Timelock admin | Token governor | Voting threshold | Concentration not fully quantified |
| `0x8f97cca30dbe80e7a8b462f1dd1a51c32accdfc8` | FiRM, Frontier and PSM Fed chair | Safe | 2-of-6 | Six owners listed below |
| `0x9d5df30f475cea915b1ed4c0cca59255c897b61b` | Junior operator / treasury working group | Safe | 3-of-6 | Same six owners |
| `0xe3ed95e130ad9e15643f5a5f232a3dae980784cd` | Market pause and sUSDe LP switch | Safe | 1-of-4; switch delay zero | Four-owner subset of Fed chair |
| `0x4b6c63e6a94ef26e2df60b89372db2d8e211f1b7` | Slashing guardian / governance guardian RWG role | Safe | 4-of-7 | Includes all six Fed-chair owners |

The main path is **Governor Mills → 48-hour treasury timelock → token operator and issuing-contract governance**. **Timelock present: yes, 172,800 seconds.** No intervening delay was established for operational Fed expansion/contraction or authorized oracle switching. After the governance process, the token operator can bypass Fed-specific ceilings through its direct mint function.

The Fed-chair owners are:

- `0x2723723fdd3db8ba2d6f0e1b333e90a7e60a0411`
- `0x9f3614afb3df9f899cadbffaa05c6c908059f726`
- `0x962228a90eac69238c7d1f216d80037e61ea9255`
- `0x3fcb35a1cbfb6007f9bc638d388958bc4550cb28`
- `0x6535020cceb810bdb3f3ca5e93de2460ff7989bb`
- `0x52f63971afd2a32524c859c29943f9bea38ca907`

Safe owners are decoded in the [admin evidence](/evidence/dola/dola-admin-coverage-2026-10-14.json). The 2-of-6 chair can act with two approvals, and its six owners also control the treasury working-group Safe. Its constrained Fed functions matter, but overlapping owners do not constitute independent oversight. Safe modules/guards and every upstream authority remain incompletely inspected.

### Documentation, audits and coverage

The issuer's peg documentation agrees with the borrowing/repayment design and Fed supply management. Its PSM documentation disagrees with the current app on the active PSM address: the documented and app contracts are identified in Stability above, and both were measured with empty reserves. Full reconciliation of the published governance model with every deployed privilege remains incomplete. No audit-to-deployment mapping establishes coverage of all privileged roles, and current bug-bounty coverage of admin-key compromise was not verified.

### Cross chain deployment and authority

Positive local supply was verified on ten chains. These supplies cannot be summed without bridge-custody reconciliation.

| Chain | Local supply | Authority or token observation |
| --- | ---: | --- |
| Ethereum | 113,058,118 | Operator is the 48-hour timelock |
| Arbitrum | 1,924,094 | Supply verified; full bridge/admin chain unresolved |
| BNB Chain | 1,793,864 | Owner/vault `0xf7da4bc9b7a6bb3653221ae333a9d2a2c2d5bda7` is a 3-of-6 Safe |
| Fantom | 463,779 | Owner/vault/MPC `0xc564ee9f21ed8a2d8e7e76c085740d5e4c5fafbe` has zero EVM code; off-chain quorum and recovery unresolved |
| Base | 419,728 | Remote token is Ethereum DOLA; bridge `0x4200000000000000000000000000000000000010` |
| Optimism | 110,001 | `l1Token()` identifies Ethereum DOLA; full bridge/admin chain unresolved |
| Avalanche | 62,152 | Owner/vault `0x1a927b237a57421c414eb511a33c4b82c2718677` is a 3-of-4 Safe |
| Polygon | 3,558 | Supply verified; full bridge/admin chain unresolved |
| Blast | 1,871 | Remote token is Ethereum DOLA; bridge `0x4200000000000000000000000000000000000010` |
| Mode | 397 | Remote token is Ethereum DOLA; bridge `0x4200000000000000000000000000000000000010` |

BNB Chain and Avalanche Safe classification used separately labelled later `latest` reads because public RPCs did not retain the initial state. Bridge proxy admins, custody and exit status remain partial. **Remote admin topology not fully on-chain verified — high uncertainty.** A matching token name is insufficient to extend mainnet safety to a bridge. [Chain reads](/evidence/dola/dola-chain-supply-admin-2026-10-14.json)

The Fantom EOA-format role is a critical chain-specific concern. An MPC address need not mean one human key, but no signing quorum is inspectable as a Safe on this chain. The exact mint powers, custody coverage and bridge exit require source and backing verification.

**Structural score: provisional 5.0.** Immutable token simplicity and delayed core governance are positives. Mint authority, immediate economic controls, common signers and incomplete bridge topology constrain the combined contract/admin assessment.

## 6 · Issuer — 5.0

Inverse publishes detailed debt and Fed data and has made substantial repayments. These are positive disclosures. Data definitions still need checking: supply measures differ, liquidity includes unrelated rows, and PSM documentation identifies an older contract. Successful reads at current addresses take precedence over labels.

The issuer's adverse history includes the April 2022 Anchor/Frontier oracle attack and the June 2022 incident causing a reported 5.83M DOLA loss. These were deprecated-system incidents, not evidence that the sampled FiRM contracts were exploited. Continuing bad debt and FiRM shortfall repayments remain economically relevant. [Issuer incident history](https://docs.inverse.finance/inverse-finance/inverse-finance/legacy-products/frontier-anchor)

**Issuer inputs and recourse.** Inverse Finance DAO is the disclosed governance organization. A legal operating entity, its jurisdiction and accountable legal principals were not verified in the available evidence. Governing law, dispute-resolution terms and an enforceable holder claim against an identified counterparty were not established. This is incomplete entity diligence, rather than a finding that no entity exists. No independently verified holder right gives direct access to FiRM collateral, and revenue-funded repayment remains a plan rather than funded redemption cash.

**Risks and limitations.** Public debt disclosures, reported repayments and the legacy loss history are inherited from the dated source assessment. A financial audit of an operating entity and the identities of accountable principals remain unverified. Disclosure quality is mixed: data is extensive, but supply definitions differ, the liquidity endpoint includes an unrelated pool, and PSM documentation names an older address. **Issuer 5.0 is carried from the source assessment, not derived from a complete current entity-and-recourse input set.** Contract audits and Safe thresholds contribute to Contract & Admin rather than issuer accountability.

## Implications for Direct Stablecoin Leverage

For direct sUSDe or ysyBOLD collateral, DOLA is the debt and settlement asset. Prompt conversion avoids a large long DOLA balance but leaves future repayment exposure. A 3% dollar premium in DOLA would add about 6% of initial equity to repayment cost at 3× leverage, where debt is twice equity, before other position changes or costs.

Liquidators still need DOLA and must recover the posted asset. Lending-market availability does not guarantee affordable exits. The empty PSM cannot be counted as funded lower-peg support; its 200,000 DOLA inventory offers only finite capacity in the opposite direction.

Size a DOLA holding against chain-specific exits and assess sDOLA/jrDOLA separately. For borrowing, test the entry and repayment routes at the intended size, maintain external repayment liquidity, and monitor DBR, governance and price premiums. Temporary collateral incentives do not improve DOLA's asset safety.

## What to watch

The binding unresolved measurement is a complete economic balance sheet netting internal DOLA/sDOLA claims and bridge custody, assigning recoverable external collateral to loans and reconciling supply with shortfalls. The conservative backing score remains provisional pending that calculation.

An upgrade would require materially lower known shortfalls, funded and successfully simulated redemption, less correlated recovery and exit dependence, and stronger operational controls. Higher circulation or a larger LP TVL alone would not qualify.

Further diligence should independently simulate large router quotes, reconstruct historical peg behavior, complete remote bridge walks, map deployed components to audits and monitor junior capital and activation. The [FiRM app](https://firm.inverse.finance/) provides borrowing interfaces; this assessment concerns holding DOLA itself.

## Evidence

[Committed snapshot provenance](/evidence/dola/provenance-2026-10-14.json).

- [Ethereum state and PSM reserves](/evidence/dola/dola-onchain-2026-10-14.json)
- [Admin reads, redemption simulations and junior coverage](/evidence/dola/dola-admin-coverage-2026-10-14.json)
- [Verified source and deployed bytecode](/evidence/dola/dola-source-verification-2026-10-14.json)
- [Official API snapshots](/evidence/dola/dola-api-snapshot-2026-10-14.json)
- [DOLA to USDC router estimates](/evidence/dola/dola-usdc-quotes-2026-10-14.json)
- [Remote supply and authority reads](/evidence/dola/dola-chain-supply-admin-2026-10-14.json)

Evidence consists of read-only contract calls, source comparisons, official API snapshots and indicative router estimates collected October 14. The retained evidence has not been independently rerun for this adaptation. Historical peg reconstruction, complete reserve reconciliation, remote bridge exits and entity recourse remain incomplete.

## Revision history

- **2026-10-14 — production refresh.** Provisional six-axis assessment based on dated Ethereum state, ten-chain supply observations, official debt data and Ethereum USDC exit estimates.
