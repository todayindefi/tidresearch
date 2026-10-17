---
asset: "USDm"
slug: "usdm"
aliases: ["USDm", "Mento USD"]
chains: ["celo", "monad"]
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usdm"
category: "stablecoin"
peg_mechanism: "Reserve-backed (shared multi-asset reserve)"
assessment_type: "full"
date: "2026-05-29"
last_verified: "2026-10-17"
last_revised: "2026-10-17"
featured: false
production: true
issuer: "Mento Labs (Germany)"
market_cap_approx: 16072117
axis_frame: six
peg_mechanism_score: 7.0
backing_score: 4.5
liquidity_score: 5.0
underlying_score: 4.0
structural_score: 4.0
issuer_score: 6.5
overall_score: 5.0
chain_overrides:
  monad:
    backing_score: 3.0
    liquidity_score: 5.0
    overall_score: 4.5
  celo:
    backing_score: 6.0
    liquidity_score: 5.0
    overall_score: 5.0
---

# USDm — Risk Report

**Moderate-elevated risk · 5.0/10** (4.5/10 on Monad, 5.0/10 on Celo)

Reserve-backed dollar stablecoin from Mento, deployed on Celo and Monad.

[Live backing dashboard](https://tidresearch.com/dashboards/?asset=usdm)

## Summary

USDm is Mento's dollar-pegged stablecoin, supported by a shared reserve of other stablecoins, yield-bearing assets and volatile crypto collateral. Users can exchange it through public, oracle-priced FPMM pools; direct reserve minting and burning are reserved for authorized strategies. USDm itself pays no yield.

The October 17 snapshot puts USDm supply at approximately **$16.072M**, including **2.252M USDm on Monad**. Celo USDm is the former cUSD contract, with continuity of address and operating history. Ethereum holds reserve assets but is not a USDm deployment covered here.

Stable-only reserve coverage is **98.23% of all-Mento debt** on a repaired narrow measurement, or **98.94%** using the issuer's broader collateral scope. Gross coverage, including volatile assets, is above par. Exits depend on actual pool inventory and remaining trading allowances: a near-par quote alone does not establish that a large sale can execute.

## 1 · Stability — 7.0

USDm targets $1 through reserve-backed issuance, oracle-priced swaps and keeper rebalancing. FPMM pools quote around the oracle rate rather than using a conventional constant-product price curve. Circuit breakers and trading limits constrain activity when configured conditions are breached.

Public FPMM swaps are distinct from the reserve's strategy-only mint/burn route. A holder can use a public pool without being an authorized reserve strategy, but cannot demand an unconditional dollar payment directly from the reserve.

[Mento's V3 description](https://www.mento.org/blog/mento-v3-is-here-onchain-fx-built-to-scale-across-chains) distinguishes reserve-backed USDm from FX currencies issued against user collateral, with CDPs anchored on Celo. USDm's Celo contract is `0x765DE816845861e75A25fCA122bb6898B8B1282a`; its Monad contract is `0xBC69212B8E4d445b2307C9D32dD68E2A4Df00115`.

**Risks and limitations.** Oracle pricing can diverge from market value, and keeper rebalancing requires available collateral and operational execution. The inherited mechanism assessment identifies Chainlink dependence; oracle fallback configuration was not freshly audited on October 17. Current Monad CDP deployment and USDm bridge-route liveness were not established. Static deployment flags do not resolve either question.

## 2 · Backing — 4.5

The Mento Reserve supports shared liabilities rather than segregating dollar cash for each USDm. Its assets include USDC, AUSD, USDT, euro stablecoins, sUSDS and volatile CELO/ETH/stETH. Euro assets carry EUR/USD risk; stable-only coverage therefore does not mean dollar-only collateral.

The October 17 review pinned Ethereum wallet reads to block **26,210,959**, Monad pool reads to **114,131,227** and Celo pool reads to **80,323,487**. The following reserve scopes retain different timestamps and asset coverage:

| Scope | Stable-only reserve | Gross reserve | All-Mento debt | Stable-only / debt | Gross / debt |
|---|---:|---:|---:|---:|---:|
| Narrow analyzer scope, repaired for verified EUROP and native ETH omissions | $14.345M | $16.735M | $14.603M | **98.23%** | **114.60%** |
| Issuer full collateral scope, including LP and operational holdings | $14.448M | $16.829M | $14.603M | **98.94%** | **115.25%** |

The narrow row repairs two omissions; it is not a synchronous full reserve audit. The broader row retains issuer-reported Celo/LP valuation. These are different scopes, not two interchangeable independent measurements. The debt denominator follows the API convention excluding reserve-held and “lost” classifications; legal extinguishment of lost-token claims was not established. USDm supply of $16.072M and total Mento stablecoin supply of $18.801M are different denominators.

Ethereum wallets independently held **1,000,000 EUROP** and **85.835708 native ETH**, valued at **$1.123M** and **$208.6K** at pinned oracle marks. Including them gives approximately **$12.951M** for the Ethereum wallets, close to the issuer's leg. EUROP's contract is confirmed by [Schuman's contract list](https://schuman.io/smart-contracts/). Native ETH and stETH are separate holdings. An enumeration that skips an asset can report no unclassified assets while still understating collateral.

### Monad local reserve

Monad ReserveV2 contains **$982,524.58** of USDC/AUSD/USDT0 against **2,251,816.97 USDm**: **43.63% wallet-only coverage of full local supply**. Composition is **18.40% USDC / 57.28% AUSD / 24.33% USDT0**. The issuer's broader local collateral scope is approximately **$1.087M**, including LP-owned collateral and smaller wallets.

The analyzer attributes **1.980M USDm (87.94% of local supply)** to protocol-owned pools, leaving approximately **271,657 USDm** outside them. ReserveV2 divided by that remainder is approximately **3.62×**. Excluding pool-held liabilities does not extinguish their claims or establish retail priority; this ratio cannot replace full-supply coverage.

**Risks and limitations.** Stable-only coverage remains slightly below debt, and gross coverage depends partly on volatile collateral. Wallet-only Monad coverage is a narrower asset inventory, not a proven legal recovery ceiling. No cross-chain reserve transfer is assumed available until the token-specific bridge route is verified. The chain backing scores remain **3.0 on Monad / 6.0 on Celo**; Celo's score is a retained access/track-record judgment, not a freshly derived segregated reserve ratio. Historical coverage triggers require complete asset enumeration and a restated series before use.

## 3 · Liquidity & Exit — 5.0

Public FPMM pools provide the measured exit routes. October 17 pool reserves matched actual counter-token balances in six pools. Those balances bound what a pool can pay without replenishment, while configured trading limits and consumed net flows impose additional constraints.

| Chain / counter asset | Counter-asset inventory | Quote for 1,000 USDm |
|---|---:|---:|
| Celo / USDC | 24,434.27 USDC | 999.9330 USDC |
| Celo / USDT | 37,007.13 USDT | 1,001.2618 USDT |
| Celo / axlUSDC | 30,704.23 axlUSDC | 999.9330 axlUSDC |
| Monad / USDC | 116,968.34 USDC | 999.6344 USDC |
| Monad / AUSD | 1,274,763.86 AUSD | 999.6713 AUSD |
| Monad / USDT0 | 13,428.76 USDT0 | 1,000.9414 USDT0 |

Measured counter-asset inventory totals approximately **$92.1K on Celo / $1.405M on Monad**, valuing dollar tokens at par. These sums are inventory bounds, not guaranteed immediate capacity, and cannot be pooled across chains. Most measured Monad inventory is AUSD rather than USDC.

The Celo USDC pool quotes approximately **$99,993 for 100K USDm** despite holding only **$24,434 USDC**. That quote cannot establish an executable $100K sale without replenishment. Flat quote ladders are pricing evidence rather than conventional slippage depth.

[TradingLimitsV2](https://github.com/mento-protocol/mento-core/blob/main/contracts/libraries/TradingLimitsV2.sol) uses **15 internal decimals**. Configured USDm short/long ceilings are **500K / 1M on Celo** and **2.5M / 5M on Monad**, for reference windows of five minutes and one day. These are configured ceilings, not remaining headroom; both tokens' signed net flows, resets and balances constrain a transaction.

**Risks and limitations.** No actual swap was submitted and no at-size execution was demonstrated. Current 24-hour volume, CEX coverage and every alternative route were not remeasured. Outputs in AUSD, USDT0 or axlUSDC add conversion and issuer/bridge exposure. Both chain liquidity scores are **5.0**.

## 4 · Dependencies — 4.0

USDm combines reserve-asset issuer exposure with transport, oracle and keeper dependencies. The shared reserve includes substantial Sky/sUSDS and Agora/AUSD exposure alongside Tether, Circle and euro stablecoins. USDT0, axlUSDC and axlEUROC add bridge or administrator dependencies. sUSDS introduces yield-strategy exposure beyond holding an uninvested dollar stablecoin.

Mento's FX/CDP design also uses USDm as collateral. An impairment of USDm can propagate into products issued against it. Reserve-backed liabilities and CDP-backed liabilities have different claim structures; the all-Mento debt denominator is a system-wide lens, not proof that every FX token has an identical direct reserve claim.

**Risks and limitations.** A reserve asset's impairment can weaken USDm and transmit downstream. Protocol-owned LP tokens must be decomposed into underlying assets without counting reserve-held USDm as fresh capital. The [Mento bridge frontend](https://app.mento.org/bridge) exists, but token managers, peers, pauses, rate limits and a working USDm route were not verified in this review. Bridge and Monad CDP availability remain unverified rather than established absent.

## 5 · Contract & Admin — 4.0

Mento uses multisigs, contract permissions and selected governance timelocks. The detailed September 7 authority review covered nine layers across Celo, Monad and Ethereum reserve custody. It found undelayed reserve-spend paths across all three chains; Celo's two-day timelock covered governance and reserve configuration, two of the nine layers, rather than every path capable of moving assets.

October 17 accessor reads found the published admin Safe to be **4-of-6 on both Celo and Monad**. The Monad admin address is `0x58099b74f4acd642da77b4b7966b4138ec5ba458`. The earlier Monad proxy inspection found token ownership and upgrade control converging on that Safe through separate paths. Common authority over configuration and token upgrades limits the independence of those controls.

Mento publishes [audit materials](https://www.mento.org/blog/mento-v3-is-here-onchain-fx-built-to-scale-across-chains), including ChainSecurity reviews of Core V3 and the Liquity V2 adaptation. Those reviews establish code-review activity; coverage of each privileged role, the exact deployed version and any relevant bug-bounty exclusions was not freshly matched here.

**Risks and limitations.** Structural 4.0 relies on the September authority walk. October's Safe reads do not re-verify every spender, upgrade, veto or recovery route. Ethereum reserve-custody roles were not freshly re-walked. Mento's public site describes community governance, but that broad description does not establish a delay over the measured spending paths; detailed documentation reconciliation for every path remains incomplete. An undelayed spend quorum can move collateral regardless of pool pricing or reserve transparency.

## 6 · Issuer — 6.5

Mento Labs is the development organization associated with Mento's public protocol and reserve reporting. The inherited entity assessment identifies a German company spun out of cLabs in 2022 and names Markus Franke as chief executive. These entity, jurisdiction and principal details were carried into October's assessment rather than freshly established from corporate records.

[Mento's public site](https://www.mento.org/) and [reserve portal](https://reserve.mento.org) provide protocol and collateral disclosures. The October review independently checked specified reserve holdings and pool balances; issuer-reported LP valuation remains a separate input. Public reporting supports observability but does not establish a holder's legal entitlement to reserve assets.

**Risks and limitations.** Issuer **6.5 is carried from the prior assessment**, not newly derived from a complete October input set. The precise contracting entity, registration details, holder terms, governing law, dispute mechanism and enforceable reserve recourse were not established in this refresh. A direct legal claim or bankruptcy-remote structure should not be assumed. Current financial audit coverage and a comprehensive issuer conduct review were not established; the named principals and jurisdiction remain inherited inputs requiring source confirmation.

## Yield and monitoring

USDm itself has no yield accrual. LP returns may come from swap fees and incentive campaigns; no current Merkl rate or renewal schedule was verified. Oracle-priced LPs remain exposed to collateral impairment, inventory changes, oracle/market divergence and withdrawal conditions.

Monitor complete reserve enumeration, consistent wallet/LP reconciliation, stable-only coverage on an unchanged debt basis, remaining pool allowances, USDC inventory, reserve-spend controls and token-specific bridge verification. A backing cut requires a verified same-basis close below **0.98×**; restoration to 5.0 requires at least **1.02× for two weeks** and improved Monad USDC composition. Neither condition is established by the incomplete historical series.

## Revision history

**2026-10-17 — reserve and exit correction; format refresh.** Overall remains **5.0**, backing **4.5**. Celo liquidity **6.0 → 5.0**, Celo overall **5.5 → 5.0**; Monad liquidity **4.5 → 5.0**, overall **4.5**. Ethereum EUROP and native ETH were omitted from the fixed-token sweep, so the prior API-overstatement interpretation is withdrawn. Repaired narrow coverage is **98.23% stable-only / 114.60% gross**, distinct from issuer full scope **98.94% / 115.25%**. Quote ladders are replaced with inventory bounds; 15-decimal limit precision, 4-of-6 admin reads and unverified bridge/CDP status are recorded. Today's verification covers reserve quantities, pool custody/quotes, configured limits and admin Safe accessors; the mechanism, full authority walk and issuer judgment retain the limits stated in their axes. Historical coverage observations require restatement before trigger use.


*Superseded by the 2026-10-17 enumeration review: the API-overstatement conclusion below is withdrawn; retained as the historical publication record.*

*⚠️ **2026-09-07 — the reserve total was being read from the issuer's API, and the API overstated it. Stable-only coverage 0.9955 → 0.9120; backing HELD at 4.5.** The analyzer measured both an on-chain balance sweep and Mento's API total, published the divergence, and then used the API anyway — its correction was `max(api_total, candidate)`, and a max() can only ever raise, so with the API reading high the correction was a **silent no-op** and every corrected field equalled its uncorrected twin. Swept on-chain the reserve is **$18,618,906, not $20,094,988** — the API overstated the Ethereum leg by **$1,377,289 (about 11.8%)** and Monad by a further 8%. ⚠️ **0.912 is essentially the 0.909 that drove the July cut to 4.5, so this restores the basis the score was set on rather than changing the score** — but the page had been saying "just below par" for a figure that is at the downgrade level. ⚠️ **This is not a reversal of the 2026-08-28 EUROP retraction**, which stands: that was a classifier excluding a real holding, and this is a total read from the wrong source.*

*⚠️ **2026-09-07 — Dependencies 4.0 and Contract & Admin 4.0 added; Celo override 6.0 → 5.5, liquidity 5.5 → 6.0.** The authority topology was hand-walked across nine layers on Celo, Monad and Ethereum, replacing a generator file that carried one. ⚠️ **Three signatures and no delay sit on the reserve-spend path of every chain** — one Safe holds reserve-v2-spend on Celo and Monad and reserve-custody on Ethereum, and that path moves the assets rather than pausing them. **Two Safes govern all three legs, so the chain spread buys no authority independence**, and the 2-day timelock covers 2 of the 9 layers. **Celo's premium was stated as "2-day Timelock + Watchdog Veto"; three of its five layers are undelayed, including the spend path** — cut half a point, not more, because the rest of the premium is real: 5+ years of chain age and a USDm contract that is the rebranded cUSD with a clean multi-year record. Celo backing held at 6.0, which prices the reserve this walk does not touch; Monad held at 4.5 with three of its four legs re-verified from chain.*

*Updated 2026-05-18: corrections applied per a full on-chain authority and supply audit. The V3 CDP system and Wormhole NTT cross-chain backing are both announced-not-operational on Monad as of report date. Scores adjusted accordingly (overall 6.0 → 5.5; Monad 5.5 → 5.0).*

*Updated 2026-05-19: POL-aware coverage. The 18.5% Monad gross "gap" is Protocol-Owned Liquidity in Mento-controlled FPMM pools, not operational under-collateralization. Ex-POL coverage is ≈272% on Monad / ≈1.35× aggregate. Scores unchanged — the 5.0 backing score is binding on structural factors (no atomic redemption, single-oracle, seed-stage, third-party credit pass-through), not on coverage shortfall.*

*⚠️ **2026-08-28 — RETRACTION. Backing 4.0 → 4.5, Overall 4.5 → 5.0, Monad Overall 4.0 → 4.5. Yesterday's cut is reversed and the finding beneath it is withdrawn.** This report published that **$1,200,803 of stable collateral left the Ethereum leg and had not returned.** **It never left.** It was converted into **EUROP**, a euro stablecoin — 1,000,000 units at $1.1647, in the Reserve Safe in cold custody — and **the reserve reader's bucket map did not know the ticker.** It knew EURC, AXLEUROC and EUROC; EUROP fell through to `other`, and `other` was not counted as backing. Measured against 08-24: the Ethereum leg is down **$1,190,902**, EUROP sits outside that leg at **$1,164,727**, residual **$26,175**. **The money moved between assets, not out of the reserve.** ⚠️ **The trigger therefore fired on a classification gap.** EUROP is worth **7.55pp of coverage**; restated, the closes read **0.9877 (08-25)** and **0.9846 (08-26)**, **both above the 0.98 line the cut was conditioned on**, and corrected stable-only coverage is **99.27%, not 91.73%.** ⚠️ **Recorded prominently rather than quietly amended, because a reader may have acted on it.** A published score cut, on a stated trigger, on a specific dollar figure, is the kind of claim someone sizes a position against — **and both halves were wrong for about a day.** **The reasoning that produced it was sound in general and wrong here: `other` named the classifier's ignorance, not the asset's quality.** Two readers independently concluded an unclassified bucket should not count as backing. **A good prior, and the failure mode of a good prior is that nobody re-examines it.** **Deliberately not overshooting:** CELO reflexivity, no liquidation mechanism, no user-direct redemption, Monad's ≈61.6% local coverage and ≈19.6% Tier-1 USDC share are all unchanged. **Backing returns to its pre-trigger 4.5, not higher**, and the restore condition to 5.0 remains unmet. **Also corrected: `last_verified` was bumped to 2026-08-27 in that pass and should not have been** — only the reserve and coverage layers were re-read. It is restored to **2026-07-23**, with `last_revised` carrying **2026-08-28**.*

*⚠️ **RETRACTED 2026-08-28 — the cut described in this entry was reversed and the finding under it withdrawn. See the entry above. Retained for the record rather than deleted.** Updated 2026-08-27: **Backing 4.5 → 4.0, Overall 5.0 → 4.5, Monad Overall 4.5 → 4.0. A pre-committed trigger firing, not a re-judgement** — this coverage had stated it would cut to 4.0 if stable-only coverage closed below 0.98× again, and it closed 0.9122 and 0.9091 on 08-25 and 08-26 against 0.9860 at the last review. ⚠️ **Total backing fell $1,128,385 (−5.64%) while supply rose 0.54%, and the Ethereum leg alone accounts for 100.9% of the drop.** It was stable collateral rather than a mark-to-market swing — stable-only excludes the volatile bucket — and the API-versus-on-chain delta held steady at about −$212K across the step, so both sources moved together and it is not a reconciliation artifact. ⚠️ **Where the money went is NOT established: redemption, rebalance into the volatile bucket and a custody move are all consistent with what is observable, and the prior collateral split is not in the available history. The movement is measured; the cause is not.** ⚠️ **Also corrected, and it matters more than the prose: the dashboard's headline `collateral_ratio` of 1.2237 is not USDm's ratio** — it divides the reserve by *all* Mento stablecoin debt ($15.43M) rather than USDm supply ($16.58M). **Reserve-to-USDm-supply is 1.1388×, about 8.5pp lower**, and a ≈1.16× reading uses a different denominator. Both figures are published by the dashboard; only one answers "how well is USDm covered". **Monad's Backing is deliberately held at 3.0:** its own coverage improved across the step (0.6064 → 0.6157) and its reserve rose, so cutting it would attribute Ethereum's deterioration to the wrong chain. Its Overall moves because the aggregate it partly depends on weakened. **Celo's Backing override of 6.0 is carried unchanged and flagged as the least-supported number on the page** — Celo draws on the joint Reserve that lost the $1.2M, so the case for it sitting two points above the headline is weaker than when it was set. It was not re-derived this pass.*

*Updated 2026-05-29: Reserve composition re-verified on-chain via direct RPC reads (Celo + Ethereum + Monad). **Stable-only coverage framing added alongside gross coverage** to reflect the volatile-bucket question raised by readers — the joint Mento Reserve covers all-stablecoin debt at ≈1.21× gross / ≈1.01× stable-only / ≈0.80× against gross supply ($14.36M USD-stable + $3.05M EUR-stable + $3.40M Volatile + $0 Other against ≈$17.2M aggregate stablecoin debt / ≈$26M gross supply). **Corrected** the prior "USDm insulated from CELO volatility" framing — that applies to USDm-on-Monad only; USDm-on-Celo shares the joint Reserve which includes ≈$3.4M of CELO + stETH (≈16% of Reserve). **Also corrected** the V1/V3-mechanism framing in Track Record: USDm-on-Celo IS the rebranded cUSD contract (Nov 2025 `symbol()` change), so the 6-year cUSD V1/V2 track record at the same address generalizes directly. **Supply figures also corrected** as a downstream consequence of the cUSD-rebrand finding: the prior published USDm-on-Celo figure (≈$0.8M) was the small fresh V3-USDm contract from before the rebrand; post-rebrand the Celo USDm balance is the rebranded cUSD supply (≈$16.0M), making aggregate USDm circulation ≈$17.65M rather than ≈$2.5M. Scores unchanged — the 5.0 backing remains binding on structural factors, and the corrected coverage framing is tighter than the prior "1.35× ex-POL" claim but doesn't change the structural read.*

*2026-07-23 — backing deterioration: overall 5.5 → 5.0 (Monad 5.0 → 4.5, Celo 6.5 → 6.0; backing 5.0 → 4.5). Over ≈7 weeks, aggregate stable-only Reserve coverage slipped below par (≈1.01× → low-0.90s×), Monad reserve coverage roughly halved (gross ≈81% → ≈42%; ex-POL ≈272% → ≈65%, so retail-held USDm now exceeds the Monad Reserve), and the Monad reserve composition inverted to majority Agora AUSD (≈61%) from ≈90% Circle USDC. On-chain peg held at par throughout; peg-mechanism, liquidity, and issuer scores unchanged. Mento's API reserve undercount (Ethereum AUSD) resolved upstream; dashboard renderer dual-display shipped.*
