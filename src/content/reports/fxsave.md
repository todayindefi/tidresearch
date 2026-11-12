---
axis_frame: six
asset: "fxSAVE"
slug: "fxsave"
aliases: ["fxSAVE", "f(x) USD Saving", "fxSave", "fx Save"]
chains: ["eth"]
category: "vault-share"
underlying_assets: ["fxSP", "fxUSD", "USDC"]
yield_bearing: true
assessment_type: "light"
date: "2026-09-22"
last_verified: "2026-09-22"
last_revised: "2026-11-10"
issuer: "f(x) Protocol (AladdinDAO)"
volatility_score: 5.0
backing_score: 4.5
liquidity_score: 3.5
underlying_score: 4.5
structural_score: 4.0
issuer_score: 5.5
redemption_score: 7.0
overall_score: 4.5
featured: false
production: false
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-assessment-version="fxsave-targeted-six-axis-2026-11-10-v1" data-evidence-snapshot="sha256:621d12c6c3543660d165613464149028a3dd031c08ec97c6a9ccf96788139689" data-canonical-project="fx-protocol" data-canonical-component="fxsave">

# fxSAVE — Risk Report

**Elevated risk · 4.5/10 · Provisional**

Ethereum vault share · fxSP liquidation backstop · Mixed fxUSD and USDC redemption

## Summary

fxSAVE is an ERC-4626 vault share over fxSP, the f(x) Stability Pool token. The pool earns income for absorbing liquidated collateral in exchange for burning fxUSD. Holders therefore own a claim on a loss-absorbing pool rather than an ordinary stablecoin savings reserve. Redemption passes through fxSP and pays **both fxUSD and USDC**.

At the November 10 financial observation, wrapper custody reconciled exactly and Morpho Blue held **45.132% of fxSAVE supply**, up from 37.38% on October 21. Concentrated exits, liquidation exposure, coarse cash-exit quotes and shared control dependencies constrain the assessment. The increased concentration has been reviewed; Overall remains provisionally 4.5.

The exact assessed token is Ethereum [fxSAVE](https://etherscan.io/token/0x7743e50F534a7f9F1791DdE7dCD89F7783Eefc39), `0x7743e50F534a7f9F1791DdE7dCD89F7783Eefc39`. fxUSD, fxSP and deployments on other chains are distinct products.

## 1 · Stability — 5.0

fxSAVE accrues value through its fxSP claim rather than targeting a fixed dollar price. At Ethereum block **26,383,107, November 10 07:46:59 UTC**, one share converted to **1.118125877 fxSP**, and contract NAV was **$1.129915688 per share**. Contract NAV describes the protocol's accounting value, not a firm market bid.

The Stability Pool earns rewards while taking liquidation risk. In stress, its exposure can shift into the volatile collateral of liquidated borrowers. Share-price accrual does not protect against losses in that underlying pool or discounts during a rushed exit.

An independently synchronized market price and discount to NAV are unavailable: the retained market fields have mismatched clocks and remain **null**. The separate route quotes below do not renew those fields. No new long-window return or stress-loss series establishes improved stability.

## 2 · Backing — 4.5

The wrapper held approximately **61.094 million fxSP against 54.640 million fxSAVE shares** at the November 10 financial pin. Assets pass through a segregated custody contract and fxSP gauge. The custody gauge claim minus wrapper `totalAssets()` was **zero in raw units**; the gauge's fxSP balance also equaled its share supply. Those equalities support accounting consistency, not independent economic solvency.

fxSP is the liquidation backstop. Its redemption basket contains fxUSD and USDC, while fxUSD depends on leveraged positions collateralized with WBTC and wstETH. This places volatile collateral and liquidation mechanics beneath the apparent dollar-denominated payout.

Separately timed fxUSD context at block **26,383,142, November 10 07:53:59 UTC** reported **134.67% aggregate marked collateral/debt**, with **85.80% of pool debt on WBTC at 130.11%**. These are underlying fxUSD CDP measurements, **not fxSAVE's collateral ratio**. Original upstream collateral-oracle update times are unknown. Accounting reconciliation does not remove collateral-price, valuation or liquidation-loss risk.

## 3 · Liquidity & Exit — 3.5

Holders can sell fxSAVE directly for USDC or redeem through fxSP. The configured fxSP cooldown is **one hour**; its instant route charges **1%**, already reflected in both output legs below. The [integration documentation](https://fxprotocol.gitbook.io/fx-docs/developers/integrating-fxsave) describes these separate paths.

At the November 10 financial pin, the per-share payouts were:

| Path | fxUSD | USDC |
|---|---:|---:|
| Queued preview | 0.824018961 | 0.305644 |
| Instant output after the 1% fee | 0.815778771 | 0.302588 |

The USDC leg is paid directly. Converting the fxUSD leg into cash requires a separate market exit; see [fxUSD](/reports/fxusd/). The retained producer's funded public-contract calls succeeded and its burn-address negative control reverted at the financial pin. These are simulations of their specific calls and block, not settled transactions, universal holder access or completed queue settlement. Exact wrapper/fxSP pause mapping remains **unknown**: reverting candidate getters do not prove that either contract is unpaused.

### Direct and composite cash routes

The quote block is **26,383,221, November 10 08:09:47 UTC**, separate from the financial pin. Inputs are sized by fxSAVE NAV. All-in quoted costs and incremental deterioration from each route's small-size baseline are different measures.

| Route | NAV-sized input | All-in quoted cost |
|---|---:|---:|
| Direct fxSAVE → USDC | $1,000 | 17.15 bps |
| Direct | $10,000 | 27.77 bps |
| Direct | $100,000 | 80.88 bps |
| Direct | $1 million | 3,364.01 bps |
| Instant basket plus fxUSD swap | $1,000 | 100.78 bps |
| Composite | $100,000 | 100.94 bps |
| Composite | $1 million | 102.13 bps |
| Composite | $10 million | 652.14 bps |

The direct route's **50-bps incremental** deterioration lies in the coarse **$10,000–$100,000** bracket; its **200-bps incremental** bracket is **$100,000–$1 million**. Both composite incremental brackets are **$1 million–$10 million**. These are decade-wide bounds, not located capacity thresholds: **`precision_obligation_met=false`**. In particular, the composite's roughly 1% standing cost does not imply a 50-bps all-in exit.

Composite inputs use fxSAVE NAV and its actual fxUSD basket component, not a standalone fxUSD-notional grid. Direct USDC is added **once**, and the instant fee is included **once**. Gas and complete approval/redemption costs are excluded. No atomic funded end-to-end cash execution is demonstrated. The older standalone fxUSD ladder is not comparable enough to support a quantified October-to-November capacity trend.

Morpho Blue's approximately **24.660 million shares, 45.132% of supply**, represent aggregate holdings at one venue, not necessarily one borrower. Concentration rose about **7.75 percentage points** as total supply fell. The 30% review trigger was explicitly assessed November 10. Potential simultaneous exits remain material; the holding does not itself establish withdrawal requests, bad debt or a full-position executable cash exit.

## 4 · Dependencies — 4.5

The claim passes through fxSAVE, its custody contract, the fxSP gauge and Stability Pool, then the fxUSD and USDC payout legs. The custody contract is `0x4bFc5292DA18e32ED2354350e07e417cE4796f9C`; the gauge is `0xEd92dDe3214c24Ae04F5f96927E3bE8f8DbC3289`; fxSP is `0x65C9A641afCEB9C0E6034e558A319488FA0FA3be`.

fxUSD adds WBTC custody, Lido wstETH, borrower leverage, collateral pricing and its market-exit dependencies. USDC adds issuer, transfer-control and cash-conversion dependencies. A larger direct USDC payout reduces the amount requiring an fxUSD swap at this observation; it does not eliminate those risks.

fxSAVE and fxUSD share protocol administration and pricing infrastructure. Their exposures are correlated rather than independent diversification. Other chains and distinct deployments are outside this assessment.

## 5 · Contract & Admin — 4.0

fxSAVE is an upgradeable proxy with segregated custody and downstream gauge/pool contracts. The retained authority baseline uses the shared ProxyAdmin `0x9b54b7703551d9d0ced177a78367560a8b2edda4`, controlled by TimelockController `0x68863fb8855b04509a835082478D6E3D0bE4E61a`. September's role review identified a 72-hour delay and a 6-of-9 proposer/canceller Safe; a delay reduction was itself subject to the delay, without an immutable positive floor.

The **October 24** shared-control assessment verified both collateral-oracle ownership transfers to that timelock and revocation of the old WBTC deployer emergency role. The main 6-of-9 and emergency 3-of-4 Safes nevertheless retained **undelayed oracle-pointer authority**. Ownership of an oracle and authority to change the pool's oracle pointer are separate controls. A delayed upgrade does not delay every consequential price-path change.

The historical wrapper review also identified a separate 6-of-9 Safe, with the same owners, holding bounded fxSAVE administration over treasury, harvester, expense ratio and claim-for settings. Those dated findings do not establish newly enumerated owners, modules, guards or complete current authority.

Historical deployed-code comparison matched the fxSAVE implementation to the OpenZeppelin-reviewed code but did not establish a public audit matching the later Ethereum pool rework. Published work on a different chain and a router engagement do not close that specific build/scope gap. ChainSecurity's April 2025 router vulnerability was responsibly disclosed and fixed; it is not evidence of exploited collateral loss. The issuer's retained deployment manifest agreed on the ProxyAdmin and base pool but was silent on the timelock, proposer Safe and fxSAVE governance entries.

The November 10 refresh does not renew comprehensive runtime/audit correspondence, current authority enumeration or exact pause-state assurance. The retained controls constrain the grade despite the historical hardening.

## 6 · Issuer — 5.5

f(x) Protocol's contributors and interface disclosures provide the operating context for fxSAVE, while this component has its own mixed redemption mechanics. [Interface terms effective March 5, 2026](https://fx.aladdin.club/terms-of-use), reviewed alongside the exact component's documentation on November 8, do not identify an incorporated token-repayment obligor. They disclaim fiduciary duties and insurance rather than providing an unconditional cash repayment undertaking.

Public sources and the bounded historical disclosure response support some operational accountability. They do not establish current named corporate principals, comprehensive conduct assurance or enforceable token-specific recourse. No blanket conclusion about contributor liability follows from an unidentified corporate obligor.

Issuer 5.5 is retained **provisionally on this accountability and recourse basis**. TVL, audit counts, peg performance and timelock thresholds are not issuer-credit evidence. No new full incident-history or legal-assurance investigation was completed.

## What to watch

Reassess on impaired payout value, failure of either output leg, changed pause/access conditions, further concentration or materially changed comparable route quotes. Changed oracle pointers, emergency roles, implementations or a public audit matching the later Ethereum rework also warrant review. Contract NAV, custody accounting and a quoted route should remain separate from actual cash delivery.

## Sources, scores and review scope

The **September 22, 2026 full-verification date is unchanged**. November 10 is a targeted six-axis financial and documentary assessment, not a comprehensive renewal of all historical security or legal findings. Overall **4.5** and Issuer **5.5** remain provisional. All existing numerical fields are retained, including the displayed Dependencies **4.5**; the upstream assessment does not author a new dependency grade. Historical Redemption **7.0** remains folded into Liquidity & Exit rather than displayed as a seventh axis. Overall is holistic, not the arithmetic mean of displayed grades.

Financial observations use **November 10 07:46:59 UTC / block 26,383,107**. Underlying fxUSD context uses **07:53:59 UTC / block 26,383,142**. Quote state uses **08:09:47 UTC / block 26,383,221**, with individual router requests around **08:09:48–08:10:21 UTC**. The USDC/USD reference is **0.99977704**, last updated **05:53:23 UTC**; that source clock is not the quote time. Collateral-oracle source update times remain unknown. Financial, quote, oracle, documentary and control clocks are not interchangeable.

Exact pause state, synchronized market price/discount and located liquidity crossings remain unavailable. Coarse quotes, retained simulations and successful accounting checks do not establish future claimant access, full-size atomic cash settlement or a comprehensive solvency opinion. The official integration page and interface terms provide documentary context; visiting them does not refresh the dated observations.

## Revision history

- **November 10, 2026:** Targeted concentration, mixed-payout, direct/composite route and issuer-basis review; existing scores and September 22 full-verification date retained. October 24 shared-control findings incorporated with their original scope.
- **October 21, 2026:** Partial financial refresh and two-output fxSP payout decoding; historical figures retain that date.
- **September 22, 2026:** Initial assessment and subsequent exit-depth and control review.

</div>
