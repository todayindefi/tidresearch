---
asset: siUSD
slug: siusd
aliases:
- siUSD
- staked iUSD
- InfiniFi siUSD
chains:
- eth
category: vault-share
underlying_assets:
- iUSD
yield_bearing: true
assessment_type: light
axis_frame: six
date: '2026-06-07'
last_verified: '2026-06-07'
last_revised: '2026-11-05'
issuer: InfiniFi
volatility_score: 4.5
backing_score: 3.5
liquidity_score: 3.0
underlying_score: 3.5
structural_score: 4.0
issuer_score: 3.5
overall_score: 3.5
production: true
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-evidence-snapshot="sha256:b3601f1159904b30d297b9e0aa9c4f325844a6853285c7a871d1058387d91fdd" data-assessment-snapshot="sha256:c88c39edc94e803ad5f6660365446b870fc44b4bc2026ba27ad7b84b4505aa96" data-assessment-status="provisional" data-score-assessed="2026-11-05" data-source-commit="bc9ca9d8f1c23dda155991a7da040be921a67c64" data-canonical-project="infinifi" data-canonical-component="siusd">

# siUSD — Risk Report

**High risk · 3.5/10 · Provisional, Ethereum only**

Yield-accruing iUSD receipt · InfiniFi

## Summary

siUSD earns yield through iUSD held by InfiniFi’s StakedToken. Its value depends on the underlying investment portfolio and protocol accounting. Converting siUSD to iUSD and receiving final USDC are separate steps; limited liquid funding can create FIFO redemption claims.

The ordinary coded loss branch places locked and unwinding claims before siUSD-held receipts, providing a conditional junior layer. It is not immutable protection, legal insolvency priority or independently verified dollar recovery. Underlying credit valuation, remote claims and actual holder cash access remain material uncertainties.

The assessed Ethereum token is [siUSD](https://etherscan.io/token/0xdbdc1ef57537e34680b898e1febd3d68c7389bcb), `0xdbdc1ef57537e34680b898e1febd3d68c7389bcb`. Direct underlying: iUSD. Other chains, separate PT/SY routes and lending-vault positions are outside the grade.

## 1 · Stability — 4.5

siUSD is a variable-value iUSD claim rather than fixed-dollar principal. Yield accrues through its underlying receipt exposure; losses and access conditions can affect conversion and final cash realization. Gateway entry and exit are documented after the June 2025 interface change, so generic ERC4626 previews do not establish a directly available holder route. [StakedToken](https://docs.infinifi.xyz/dev-docs/tokens/staked-token)

At the retained November 4 quote-collection clock, **14:29:22–50 UTC**, a $100,000 market-sized Gateway estimate returned **100,108.677294 USDC**. This is conversion-route evidence, not pure secondary-market depth, negative fees, an enforceable minimum, a fill or completed primary redemption. Sparse dated marks do not establish continuous dollar tracking under stress.

## 2 · Backing — 3.5

All **18 registered Ethereum farm adapters** were read at block **26,342,715**, November 4 **16:42:23 UTC**. Their protocol-oracle-valued positions total **$70,038,935.876406**, matching Accounting. Ethereum iUSD supply was **70,036,912.594478**. The marked **$2,023.281928** difference is reported positive unaccrued yield, not independently verified surplus. [Protocol data](https://api.infinifi.xyz/api/protocol/data)

Queue receipts remain in supply until funded and burned; adding them again would duplicate liabilities. siUSD-held and locked receipts are subsets of iUSD liabilities, not additional external cash. Internal bookkeeping closure does not independently value credit assets, custody, title or recoveries.

### Ordinary loss ordering

The source-matched YieldSharingV3 branch at security block **26,342,017**, November 4 **14:22:23 UTC**, burns the actual buffer and returns if it fully covers the loss. Otherwise the ordinary branch applies losses to locking-module users, including unwinding balances, then siUSD-held receipts, then circulating iUSD through receipt-price reduction. In that latter branch an insufficient buffer is not first partially subtracted. The negative branch was inactive at both reported pins.

At the financial pin, locked/unwinding claims were **15,301,797.021839533004517822 iUSD**, or **28.2460% of siUSD-held receipts** on the same token-unit basis. The actual YieldSharing buffer was **25,000 iUSD**, separate from vesting escrow and not automatically added to that cushion. The `1e18` protocol price is an accounting mark, not independent dollar recovery value. A **−0.000000000000020256 iUSD** internal-versus-physical receipt residual remains a reconciliation difference, not a measured loss or a forced zero.

Role-gated loss calls, governance/proxy changes and incomplete descendant authority qualify this receipt-layer protection. Code ordering does not establish bankruptcy ranking. Conflicting FAQ and slashing-page descriptions remain unresolved rather than being treated as identical protection.

### Registered book and valuation boundary

| Adapter label, where address-matched | Protocol-marked USD | Share of registered book |
|---|---:|---:|
| Redeem Controller | 0.001693 | 0.0000% |
| Liquid Cap stcUSD | 5,398,577.673421 | 7.7080% |
| New Silver 2 Senior | 10,224,864.318952 | 14.5988% |
| New Silver | 5,250,317.210709 | 7.4963% |
| FalconX Institutional | 2,035,121.930775 | 2.9057% |
| Aave USDC | 3,915,654.789391 | 5.5907% |
| Spark sUSDC | 4,470,944.925564 | 6.3835% |
| Unlabeled `0xa7c1daeaa5d97e1319b4ff6cdf658f5c4582a27e` | 4,759,014.420126 | 6.7948% |
| Fasanara Genesis Fund | 2,626,009.933212 | 3.7494% |
| Fasanara mGLO (GDADF) | 13,846,618.597760 | 19.7699% |
| f(x) fxSAVE | 8,118,824.192700 | 11.5919% |
| Unlabeled `0xbd6c2d1c4809a5d8847fba3a3cf7d6bdf6b6c3ba` | 334,800.510503 | 0.4780% |
| Pendle PT-reUSD-10DEC2026 | 9,058,186.371600 | 12.9331% |
| JetStream | 1.000000 | 0.0000% |

These are adapter-level book values, not beneficial borrower diversification or independently recovered NAV. The full registered book reconciles to 100% within arithmetic precision; small displayed percentages can round to zero. The largest claim, about **19.77%**, is app-labeled Fasanara GDAF; a matched label does not establish private borrower rights.

The separate public **25-row app catalogue** includes remote, disabled and unregistered rows. Its rows exceed its headline by **242.878528 USDC**, while its headline differs from the pinned book by **7.834223 USD-equivalent** across clocks. Neither residual is measured loss or extra cash. Configured maturity buckets do not independently verify private-loan maturities.

Backing 3.5 is a provisional uncertainty-constrained judgment. A complete upstream-score-weighted basket cannot be derived without adequate credit, remote recovery and beneficial-exposure valuation; no missing valuation is replaced with a fabricated grade or zero.

## 3 · Liquidity & Exit — 3.0

The holder route separates Gateway/share conversion, iUSD claims and final funding through RedeemController. Its FIFO queue is a claim-processing mechanism, not a promise of immediate USDC. [Redemption controller](https://docs.infinifi.xyz/dev-docs/funding/redeem-controller)

At the financial pin, direct USDC across registered farms totaled **0.001699 USDC**, and RedeemController net unreserved cash was **0.001693 USDC**. Adapter liquidity views totaled **13,785,179.298371 USDC**, representing conditional venue-withdrawal claims. They are not additive cash or guaranteed simultaneous holder capacity. Zero direct cash in a farm does not prove its investments cannot be unwound.

Successful getters returned queue length **0**, queued iUSD **0** and funded-unclaimed USDC **0**. Those are measured zeros. An empty queue and unpaused controller do not prove instant cash: a nonzero `beforeRedeemHook`, entry conditions and funding still matter. Configured minimum redemption was **1 wei iUSD**. The **5% yield performance fee** is not an all-in redemption fee, and the configured `0.999999` maximum-slippage fraction is not recommended user tolerance.

The earlier direct-entry flag was false at its security pin. A later getter attempt for the financial pin failed because provider/archive state was unavailable; the later value remains unknown. Neither the old flag nor the indicative Gateway estimate establishes current executable access or completed cash delivery.

## 4 · Dependencies — 3.5

siUSD depends on iUSD’s farms, offchain credit, stablecoin and yield-vault layers, and remote representations. The adapter inventory identifies current book entries at that level, without identifying every beneficial borrower or independently validating every upstream recovery value.

OutlandFarm claims do not independently reconcile Monad/Base debt, custody or bridge conservation. Protocol/module adapters and remote representations are not assumed economically independent. Correlated credit losses, maturity mismatch, custody and bridge failures can transmit through the same receipt structure. Historical provider lists are not a substitute for the dated registered book, and a PT position does not confer a separate PT/SY approval.

## 5 · Contract & Admin — 4.0

The original source/runtime-matched StakedToken and control observations retain the November 4 **14:22:23 UTC** security pin. Core and yieldSharing references are mutable, governor emergency-call powers exist, and a named governance path has a **seven-day** delay. A role-gated helper provides another authority path. [Contract registry](https://docs.infinifi.xyz/dev-docs/contracts)

The seven-day path does not close finance-manager, core, helper, proxy or descendant overrides, nor all oracle and unwinding authority. Helper-origin simulations do not establish outsider exploitation. Ordinary loss sequencing is conditional code behavior, not an immutable or legal protection guarantee.

## 6 · Issuer — 3.5

**InfiniFi Labs, Inc.** is documented as the interface provider. That role does not establish a universal reserve-repayment guarantee for siUSD or iUSD holders.

Reviewed terms do not establish complete holder title, segregation, insolvency priority or enforceable reserve recovery. Farm catalogue disclosure adds visibility but does not replace independent credit/default, encumbrance or financial assurance. Conflicting loss disclosures and incomplete remedies constrain accountability; missing assurance does not itself establish default or prove no legal rights exist.

## Sources, score date and evidence scope

Scores were authored **November 5, 2026**: Stability **4.5**, Backing **3.5**, Liquidity & Exit **3.0**, Dependencies **3.5**, Contract & Admin **4.0**, Issuer **3.5**, Overall **3.5**, all provisional and higher-is-safer. Overall is holistic rather than a required arithmetic average. Redemption is included in Liquidity & Exit, without a seventh score.

Financial observations use Ethereum block **26,342,715**, **November 4 16:42:23 UTC**; security observations use **26,342,017**, **November 4 14:22:23 UTC**. The retained quote collection ran **14:29:22–50 UTC** that day; individual provider, pool, offchain and document clocks remain distinct. Publication does not refresh those observations. The maintained documentary captures remain the baseline where fresh `.md` retrieval failed; a later successful link check is not a new financial observation.

**June 7, 2026 is retained as historical whole-review context**, not the date of the new score or current full assurance. The historical overall was 4.0; the current provisional overall is 3.5 dated November 5. Independent full net NAV, all liabilities, credit recovery, title/encumbrances, remote conservation, complete authority closure, holder cash execution and continuous stress history remain unresolved. Reassessment depends on material new financial, control or settlement evidence. No remote-chain or PT/SY grade is inherited.

## Revision history

- **November 5, 2026:** Provisional Ethereum six-axis assessment using the selected financial and security evidence.
- **June 7, 2026:** Historical assessment and whole-review verification context.

</div>
