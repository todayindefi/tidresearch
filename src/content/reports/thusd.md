---
asset: "thUSD"
slug: "thusd"
aliases: ["thUSD", "Theo thUSD", "Theo USD", "sthUSD", "Staked thUSD", "Theo Network thUSD"]
chains: ["eth", "arb", "stable"]
category: "stablecoin"
peg_mechanism: "delta-neutral synthetic"
assessment_type: "light"
date: "2026-07-13"
last_verified: "2026-08-23"
production: true
issuer: "Theo Network (Panama)"
peg_mechanism_score: 4.0
backing_score: 2.5
underlying_score: 3.0
liquidity_score: 3.5
issuer_score: 5.5
overall_score: 3.5
# audited: withheld — a boolean cannot carry this claim and gets it backwards.
# §I: the Zenith audit covers exactly one file (the sthUSD vault); the token, the
# Minter, the OFT adapters and the strategy adapter are "not in any public audit";
# "roughly one of five on-chain surfaces has audit coverage"; Theo calling it "the
# thUSD audit" "materially overstates breadth". `audited: true` publishes precisely
# the overstatement this report exists to correct. Needs a scoped string, not a flag.
# team_doxxed: withheld — §IV says the team is "semi-doxxed and credentialed".
# True/false has no way to express "semi", and the true branch is the wrong one.
---

# thUSD — Retail Risk Report

**Elevated risk · 3.5/10**

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| Lower end of 6–10% APY target band (sthUSD only) | Sell on DEX at NAV discount | KYC-gated, $200K-per-tx cap | About 4 months since launch | Ethereum, Arbitrum, Stable |

> **2026-08-18 update — Backing 3.5 → 3.0. Overall holds at 4.0.** Two developments pull in opposite directions and this update explains both, because the headline number moved the *helpful* way while the thing underneath it got worse.
>
> ⚠️ **Superseded on 2026-08-23 — the slide did not stop, and the answer it produced was wrong.** This report said coverage had stabilised at 62.30% and that the open question resolved toward *designed scaling*. **Three days later, on 2026-08-21, on-chain coverage fell from 61.22% to 42.86% in a single day** — $24.99M of reserves left the safe with thUSD supply unchanged **to the dollar**. That is the exact inverse of the matched-mint evidence the designed-scaling conclusion rested on, and **42.86% is well below the 53.21% this report called the trough**, so the bottom identified here is no longer the bottom. See "Where the backing actually sits" below. Backing is cut 3.0 → 2.5.
>
> **But a rising coverage percentage is not by itself good news, and it is worth understanding why.** Coverage is on-chain reserves divided by supply. When that ratio sits below 100%, *adding equal dollars to the top and bottom pushes the percentage up* — $10M of new supply matched by $10M of new reserves raises a 60% ratio even though nothing about the shortfall improved. So the percentage alone tells you very little. What matters is whether the new dollars arrived matched. **Here they did:** between 2026-08-12 and 08-13, supply rose $109.89M → $136.18M (+$26.29M) while on-chain reserves rose $58.50M → $84.82M (+$26.32M) — matched to within about $30,000. That is issuance arriving *with* its reserves, the inverse of the May–July pattern, and it is genuine issuance discipline. The improvement is real; the metric that reports it is just a poor witness.
>
> **What got worse: the on-chain cash buffer is gone.** USDT went **$2.0M → $0** and USDC **$0.4M → about $22**. On-chain reserves are now **100% thBILL** — not "mostly," there is no other component. Two consequences. There is no on-chain cash to meet a redemption without unwinding thBILL through the Libeara T+1→T+7 settlement rail; and the reserve is now entirely concentrated in **Theo's own product**, so the collateral is not independent of the issuer.
>
> **And the collateral itself was re-rated.** [thBILL](/reports/thbill) was cut to **4.0 overall** on 2026-08-18. Since thUSD's reserve is now 100% thBILL, that input flows straight into this report's Backing axis. Netting all of it — the matched mint against the drained buffer and a weaker look-through — **Backing moves to 3.0 and Overall holds at 4.0.**

## Read this first — there are at least three "thUSDs"

Before anything else: make sure the token you're looking at is the right one. There are at least three on-chain assets named thUSD, two of them unrelated, and one of them a phantom token on Arbitrum that public price feeds and DEX aggregators have been mis-labeling as canonical Theo thUSD.

- **Theo thUSD (this report)** — `0xa3fE5c7596024E6811E14F029937D5bd8Ae485b3` on Ethereum. Yield-bearing two-token system (thUSD + sthUSD), 6 decimals, launched 2026-04-27. The Arbitrum and Stable versions live at the OFT Adapter address `0x9AA9Aa0530a6AF70EE7BC47cF1240100f514b065` (same address on both chains).
- **Threshold Network thUSD** — `0xCFC5bD99915aAa815401C5a41A927aB7a38d29cf` on Ethereum. Unrelated CDP stablecoin minted against tBTC/ETH, live since 2024.
- **Arbitrum phantom "thUSD"** — an 18-decimal token with small-six-figure supply paired in Uniswap V3 pool `0x45aa23530f8e48417496b7a1b9e395fad64c87ca`. Different decimals (18 vs 6), different supply scale (orders of magnitude smaller than canonical), different deployment. The DEX Screener pair that surfaces as "Theo USD / USDC on Arbitrum" tracks the phantom, not Theo's thUSD.

Always verify the contract address against `docs.theo.xyz/resources/addresses` before any allocation.

## Summary

thUSD is Theo Network's onchain yield-bearing stablecoin. Architecturally it's a near-clone of Ethena's USDe/sUSDe — a two-token system where you hold thUSD as a $1-pegged base token, then stake into sthUSD to actually capture yield. Holding thUSD without staking earns nothing.

The yield comes from a **delta-neutral gold strategy** plus a T-Bill float: physical gold is custodied by FundBridge Capital (tokenized via Standard Chartered's Libeara) and lent out for interest, while a short position in CME gold futures hedges the spot exposure. A T-Bill reserve provides liquidity. Target APY is 6–10%, and realized sthUSD share-price accrual has tracked the lower end of that band since launch.

The institutional pieces are genuinely strong. Wellington Management, Standard Chartered's Libeara, FundBridge, SIG, Flowdesk, Amber, and Concrete (which ran the $100M Genesis pre-deposit vault) are all real names. The founders are ex-Optiver and IMC quant traders — directly relevant experience for the gold-futures basis trade. Theo's prior product, thBILL, has run since July 2025 without a public incident.

⚠️ **The headline, restated 2026-08-23: on-chain coverage collapsed to 42.86% on 08-21 and the composition of what remains on-chain has got worse.** Coverage fell from about 92% in mid-May to 59.5% in mid-July as the off-chain gold-carry leg scaled, dropped to about 53% in early August, recovered to 62.30% on a matched mint — and then **fell to 42.86% in a single day on 2026-08-21, a new low, with supply unchanged.** Read the level correctly. For this product, on-chain coverage below 100% is the **expected operating state** as the strategy deploys capital off-chain — it is **not** a depeg or an undercollateralization alarm on its own, and thUSD has held about $1.00 throughout. The fast-deterioration framing this report carried in July no longer describes the present state.

Two things nevertheless remain true and one is new. Still true: about **38% of backing sits in an off-chain book with no proof-of-reserves**, no disclosed gold custody address, and no third-party attestation, and coverage remains below our backing monitor's 70% floor. Note also that although the off-chain *share* fell, the **absolute** unattested book still grew, from roughly $43M to about **$51M** — supply outgrew it, which is not the same as the exposure shrinking. New: the on-chain leg is now **100% thBILL**, with the USDT and USDC buffers drained to zero, so there is no on-chain cash and the reserve is entirely one asset that Theo itself issues.

The catch for retail is the same as thBILL's: **you do not have a primary redemption path.** Mint and redeem are KYC-whitelisted, so non-institutional users can only enter and exit via DEX. Secondary liquidity is structurally thin — the real price-discovery venue is a roughly $4.75M Uniswap V4 pool on Ethereum (Arbitrum is dust, and the pair public aggregators surface there is a different token; see below), modest against a supply that has now grown past $136M — and the primary rail itself has a hard $200,000-per-transaction redemption cap. The product is best read as opt-in early access for institutional capital — retail can hold it, but the structural exit story is meaningfully worse than crvUSD, OUSD, or even thBILL.

Appropriate for: DeFi-comfortable users who already understand Ethena-style synthetic dollars, are sizing well below DEX depth, and want exposure to the gold-basis trade. Not appropriate for: anyone who needs instant or sized liquidity, anyone who wants direct legal claim on the underlying gold or Treasuries, or anyone uncomfortable with a very young product running an off-chain strategy with zero proof-of-reserves.

## I. Smart Contract Risk

**One audit, narrow scope.** The Zenith audit (publicly published at github.com/zenith-security/reports) covers exactly **one file** — the sthUSD staking vault. The thUSD token itself, the Minter (which handles mint and redeem), the OFT Adapters (which handle cross-chain), and the off-chain strategy adapter are **not in any public audit**. Roughly one of five on-chain surfaces has audit coverage. Theo describes this as "the thUSD audit," which is technically accurate but materially overstates breadth. Findings on the file that *was* audited are clean — zero Critical, zero High, zero Medium — so what's audited looks fine. The risk is in what isn't.

**No bug bounty.**

**Admin chain has been hardened over the last two weeks.** Through 2026-05-14 to 2026-05-17, Theo migrated ownership of thUSD, sthUSD, and the thUSD OFT adapter on all three chains (Ethereum + Arbitrum + Stable) to a **new OpenZeppelin TimelockController at `0x2bb4b7e6e83fa6b77d0143dad631843cb73dca02`**. On-chain reads confirm `getMinDelay() = 172,800 seconds = 48 hours`. PROPOSER_ROLE and EXECUTOR_ROLE on the new Timelock are held by the disclosed Safe `0x94877640dd9e6f1e3cb56bf7b5665b7152601295`, which is now **4-of-6** (one additional signer and threshold bump versus the originally-disclosed 3-of-5). This is the right shape for an institutional product — and 48 hours is a real exit window, not a checkbox.

⚠️ **thUSD's own admin posture is genuinely good, and it is not the posture of the reserve beneath it.** At the product layer the Safe runs at **threshold 4** on v1.4.1, and the token owner is a **48-hour TimelockController** (`min_delay` 172,800) — the same shape this coverage credits on [USDS](/reports/usds/), and the reason it is not docked there. **But the reserve asset underneath, thBILL's ULTRA leg, has no multisig at any position**: a single plain key holds sole admin over the token and has replaced its logic twice this year (see the [thBILL report](/reports/thbill/)). **Same issuer, two very different postures, and a reader should not infer either from the other** — a 48-hour timelock over thUSD's contracts does not reach the thing the reserve is made of.

Flagged and not asserted: the sthUSD OFT owner is `0xf5b0bf09…`, **not** the timelock that owns the other three contracts. This report does not characterise it.

**Cross-chain layer is now under the same admin chain as the token contracts.** As of 2026-05-17 the thUSD OFT adapter on all three chains is owned by the same 48-hour TimelockController described above. A malicious peer-config change can no longer ship in a single transaction — proposals are scheduled on the Timelock, surface on-chain for 48 hours, and require the 4-of-6 Safe to execute. This closes what was previously the highest concentrated-key risk in the system.

**The one remaining EOA-owned contract is the sthUSD OFT adapter** (`0xc2D07082120Cbd0E75B5F12D6c5d41fC2600dd39`), still owned by the original signer `0xf5b0bf09acc504f0d470134f05fe776d1f90cae0`. The stakes are materially lower — bridged sthUSD supply is essentially zero today (sub-$1 across Arbitrum + Stable) — so the worst-case attack is a future-state concern rather than a current-balance risk. Watch-item: completion of this last migration would close out the OFT-EOA story entirely.

**EMERGENCY_ROLE is a single externally-owned address (`0xf936df06d35a2f82f26083f32ff2ab72f3ebdd8f`).** It's pause-only (cannot mint or upgrade), so a compromise can grief the protocol but not drain it. **MINTER_ROLE is also a single externally-owned backend signer (`0x09ec7c2d4955525237b843f5338dd7982b5553b6`).** Same pattern as Ethena's mint key: the off-chain key is the only thing standing between an attacker and unbounded mint authority.

**Very young product.** No incidents to date. Theo's prior product (thBILL) has months of clean operation, which transfers some operational confidence to the team but does not transfer code coverage to thUSD's unaudited surfaces.

The single biggest watch-item used to be whether OFT Adapter ownership would get transferred under the Safe-and-Timelock structure (which is what Theo had already done for thBILL). That's now happened for three of the four OFT contracts. The remaining piece — sthUSD OFT — would close the story. The new highest-concentration risk in the system is whichever single key holds the MINTER_ROLE on the Minter contract (still an EOA per disclosed baseline); the OFT-EOA concern that previously dominated this section has been materially reduced.

## II. Economic / Backing Risk

⚠️ **Where the backing actually sits, as at 2026-08-23 — restated after a single-day collapse.** On-chain visible coverage is **42.86%** of thUSD supply: **$58.35M of on-chain reserves against $136.14M outstanding**, at the reserve safe `0xec417ccb…3c2f`. The implied off-chain backing is about **$77.8M (57.14% of supply)**, inferred from the coverage gap rather than from any attestation.

**What happened, from our own hourly series:**

| date | on-chain coverage | on-chain reserves | thUSD supply |
|---|---:|---:|---:|
| 2026-08-18 | 62.30% | $84,821,887 | $136,140,058 |
| 2026-08-19 | 61.21% | $83,331,581 | $136,140,058 |
| 2026-08-20 | 61.22% | $83,340,674 | $136,140,058 |
| **2026-08-21** | **42.86%** | **$58,353,235** | **$136,140,058** |
| 2026-08-23 | 42.86% | $58,353,235 | $136,140,058 |

**$24.99M of reserves left the safe in one day, and supply did not move by a dollar.**

⚠️ **The threshold crossed here matters more than the percentage.** Implied off-chain backing went **37.70% → 57.14%**. This report has always been explicit that the off-chain leg is *inferred from the coverage gap and is not direct proof-of-reserves* — so **the majority of thUSD's backing is now a residual derived by subtraction rather than anything anyone has observed.** Until 08-21 the observable share was the larger one. That is a change in kind, not only in degree.

**And the paragraph below is what makes this unambiguous.** This report already teaches that a *rising* coverage ratio can be an artifact — matched dollars added to both sides lift a sub-100% ratio without improving the shortfall. **The inverse has no such escape route:** reserves fell alone. There is no arithmetic reading under which $25M leaving one side of the ratio is a presentational effect.

**Where it went is established as to mechanism, and not as to destination.** The same day, thBILL's supply fell by 24,131,274 tokens; at a NAV of 1.035792 that is **$24,994,981**, against thUSD's **$24,987,439** reserve decline — a match within **about $7,500 on $25M**. **thBILL was burned out of the thUSD reserve safe**, which is why no user-facing redemption appears anywhere in the record. That answers the mechanism question the [thBILL reports](/reports/thbill/) had left open. **It does not establish where the $25M of value went, or what — if anything — now stands behind that share of thUSD instead**, and this report does not claim to know either.

| | 2026-07-13 | 2026-08-17 |
|---|---|---|
| On-chain coverage | about 59.5% | **42.86%** (2026-08-23; was 62.30% on 08-18, before the 08-21 collapse) |
| Supply | about $106.7M | **$136.14M** (+27.6%) |
| On-chain reserves | about $63.5M | **$84.82M** |
| — of which thBILL | about $61.1M | **$84.82M (100%)** |
| — of which USDT | about $2.0M | **$0** |
| — of which USDC | about $0.4M | **about $22** |
| Implied off-chain (unattested) | about $43.2M | **about $51.3M** |

⚠️ **Superseded — see the update below this paragraph.** The reasoning here was sound on the evidence available at 2026-08-18 and is retained because the framework it sets out is what makes the 08-21 move unambiguous. **The slide stopped, and the recovery is a single matched mint.** Coverage troughed at **53.21%** in early August. Between 2026-08-12 and 08-13, supply rose $109.89M → $136.18M and on-chain reserves rose $58.50M → $84.82M — **+$26.29M against +$26.32M, matched within about $30,000.** That is the inverse of the May–July pattern, where supply grew and reserves lagged. It answers the judgment call the last revision left open — designed scaling versus the strategy outgrowing its buffer — in favour of **designed scaling**.

**But be careful how you read the percentage, because it flatters this kind of event.** Coverage is reserves ÷ supply. Below 100%, adding *equal* dollars to both sides mechanically pushes the ratio up: put $26M on top of $58.5M of reserves and $26M on top of $109.9M of supply, and 53% becomes 62% without a cent of the pre-existing shortfall being filled. The gap in absolute terms barely moved. So the rising percentage is not itself the good news — the good news is narrower and more specific: **the new dollars arrived with their reserves attached.** That is a statement about issuance discipline, not about the shortfall closing.

**Against that, the on-chain cash buffer is gone, and this is what holds Backing down.** USDT went from about $2.0M to **$0** and USDC from about $0.4M to **about $22**. On-chain reserves are now **100.0% thBILL** — there is no non-thBILL component left. Two consequences, both material:

- **No on-chain cash to meet a redemption.** Any on-chain redemption pressure now has to be met by unwinding thBILL through the Libeara T+1→T+7 settlement rail. There is no liquid dollar sitting at the safe to absorb the first wave.
- **The collateral is no longer independent of the issuer.** thBILL is Theo's own product. A reserve composed entirely of it means thUSD's backing and thUSD's issuer fail together, not separately — the recursive dependency described below is now the *whole* on-chain story rather than most of it.

Coverage also remains below our monitor's **70% floor**, which it first breached in July and is now roughly 27 points beneath. ⚠️ **And the off-chain share has inverted: it is now 57.14%, up from 37.70%, with the absolute unattested book at about $77.8M against $51.3M before.** The exposure did not merely fail to shrink — it grew by half in a day, and it is now the majority of the backing.

**The strategy itself is principled.** Long physical gold (custodied at FundBridge, lent to retail/wholesale gold borrowers including Mustafa Gold for interest) hedged short on CME gold futures (capturing the contango/roll-yield basis), with a thBILL reserve. A 20% first-loss buffer sits over the gold inventory. None of this is novel in TradFi — it's the same kind of basis trade prop desks have run for decades. The novel part is running it as backing for an onchain stablecoin with a 7-day track record.

**Yield is running modestly below the target band.** 19.7 days of sthUSD share-price history (2026-04-29 → 2026-05-19) shows accrual from 1.003378 to 1.006291 — annualized this is **≈5.5% APY**, about 50 bps below the 6% floor of the 6–10% target band. The strategy is generating real yield, just less than the published range so far; this could narrow with more data (the sample is short and the gold-carry deployment only began mid-May), but at present the realized rate does not yet land inside the target range. Whether it sustains across a stress event (a sharp gold move, a basis compression, a borrower default) is the open question. Gold curves *can* flatten or even invert in stress (briefly happened during COVID 2020), and at $1B target size on a $50B-notional CME open-interest market the strategy starts to be a price-taker on its own roll.

**Retail has no primary redemption.** Mint and redeem at $1 are KYC-whitelisted and execute via EIP712-signed orders constructed by Theo's backend. Without KYC you cannot redeem at par. Your practical exit is selling on a DEX.

**The primary rail has a $200,000-per-transaction cap by design.** Visible in the on-chain redemption pattern: when the rail is busy, the great majority of burns land at exactly $200,000.00 to two-decimal precision — that's the per-tx ceiling. The cap exists somewhere in the stack — it could be enforced in the Minter contract, in the backend signer, or as a USDC-reserve throttle. Theo has not publicly disclosed which. For a retail user, the practical implication is mostly indirect: even institutional redeemers have to chunk their exits, so a sized run would queue many $200K tranches behind each other.

**Aggregate-redemption stress has been partially tested.** Single-actor multi-$M-per-week chunked redemption has been absorbed without failure (one redeemer chunked >$12M in a single 7-day window during the post-Genesis-launch unwind, all in $200K tranches). The unanswered test is what happens if redemption demand exceeds the Minter's USDC float — whether the cap re-arms, throttles harder, or simply blocks.

**Mint-rail capacity is real.** The mint path has absorbed multi-tens-of-millions single-tx institutional inflows without incident — the EIP712 mint rail is validated up to large-allocator scale. Recipient-side attribution (Theo-internal vs external new allocator) is sometimes unclear without off-chain confirmation.

**Reserve composition — now entirely thBILL on-chain.** Theo's transparency dashboard at `app.theo.xyz/transparency` discloses a single Safe holding all of thUSD's *on-chain* reserves at `0xec417ccb6dd26868cca993a92f37217b1d4b3c2f`. Through mid-2026 that safe held thBILL plus small USDT and USDC liquidity buffers. **As of August 2026 the buffers are gone and the safe holds thBILL and nothing else** — 81.92M thBILL shares at a NAV of about 1.0355, which is $84.82M, reconciling against $84.82M of total on-chain reserves to within the roughly $22 of USDC dust that remains.

One measurement note worth carrying, because it is an easy error: the reserve figure is reported in **thBILL shares, not dollars** — you have to multiply by the thBILL NAV per share to get a dollar value. Reading it as dollars understates the reserve by about 3.5% and makes the composition look like it has a non-thBILL remainder when it does not.

On-chain coverage has stepped down through 2026 — low-90s% in mid-May, 59.5% in mid-July, about 53% in early August, a recovery to 62.30% on a matched mint, and then **a fall to 42.86% on 2026-08-21**, a new low reached in a single day with supply unchanged. **On-chain coverage below 100% is expected operating state here, not a solvency signal**, as long as the off-chain gold/futures backing is intact. What deserves attention is not the level but the composition: at 100% thBILL there is no liquid on-chain asset, and the reserve's credit quality is now a single look-through to [thBILL](/reports/thbill), which was itself re-rated down to 4.0 overall in August. Live coverage on [the dashboard](/dashboards/?asset=thusd) and `app.theo.xyz/transparency`. The reserve's sole component has its own [retail risk report](/reports/thbill) covering the recursive backing chain from this layer down to Libeara/Wellington and Fidelity.

**The thBILL-anchored reserve creates a recursive trust chain.** thBILL itself has its own backing structure (off-chain T-Bills via Libeara, with synthetic intermediate wrappers — see `tidresearch.com/reports/thbill`), and its on-chain backing ratio fluctuates within a Libeara settlement window (T+1 to T+7) — periodic dips during Stage A windows when Theo has minted new thBILL but the corresponding ULTRA hasn't yet arrived from Libeara. **During those windows, thUSD's thBILL reserves are technically backed by Theo's promise to Libeara, not by ULTRA-equivalent collateral.** Theo's "100% backed" attestation remains formally correct (thUSD-supply ÷ thBILL-at-NAV-plus-stables ≥ 100%) but the next layer down is where the periodic gap lives. Practically — the gap closes within the historical T+1 to T+7 envelope and the chain works as designed; the structural point is just that "100% backed" rests on attestations at multiple layers.

**thUSD growth drives thBILL primary minting, not secondary buying.** Each new dollar of thUSD demand produces a corresponding silent thBILL mint at the reserve (the thBILL contract emits **zero on-chain events** during the supply mutation — same silent-mint pattern documented for the underlying tULTRA layer), with backing reconciled later via Libeara settlement. Standard ERC-20 indexers (Etherscan, Dune, The Graph) cannot track these mints; only direct `totalSupply()` polling captures them.

**Not all chains are equal.** The great majority of bridged thUSD lives on Stable (recently ≈95%+ of bridged supply), a chain that's itself only a few months old. Any Stable-side incident — a chain halt, a sequencer fault, a bridge anomaly — affects nearly all bridged thUSD. Concentrated chain-level liveness risk for cross-chain holders.

**NAV oracle architecture is undisclosed.** The share price that determines sthUSD redemption combines on-chain thBILL NAV, an off-chain CME futures mark, off-chain gold spot, and off-chain lending interest. Whoever publishes that share price is the most-trusted contract in the system, and Theo has not publicly documented who it is. The thBILL pattern suggests it's an MPC-attested value from Theo's own infrastructure.

## III. Liquidity (Retail Exit)

**The real price-discovery venue is on Ethereum — a correction to our earlier read.** Secondary liquidity centers on a **≈$4.75M Uniswap V4 thUSD/USDC 0.01% pool on Ethereum** (`0xb30bf32e…5b5a0d`), trading at ≈$1.001 with ≈$110K/day volume (GeckoTerminal, 2026-07-02). Our prior report centered Arbitrum and stated there was "no meaningful Ethereum DEX liquidity" — **that was wrong**; the Ethereum pool is the venue that matters. Arbitrum is ≈$30K of dust across ≈17 pools with negligible volume — ignore it. CoinGecko lists no thUSD tickers (this asset is DEX-only).

**But "real venue" still means "modest venue," and it has got relatively thinner.** About $4.75M of depth is thin against a supply that grew **27.6% over the five weeks to 2026-08-18, from about $106.7M to $136.14M, while the venue did not grow with it.** Depth-per-dollar-of-supply is therefore materially worse than at the last review even though the pool itself is unchanged. A sized retail sell still prints at a discount, and there is no Pendle or Curve presence at the scale you would expect for a stablecoin this size. The pool being near-peg (about $1.001) is not, by itself, evidence of deep peg discipline at size — it reflects light two-way flow, not a guarantee you can exit a large position at par. **The Liquidity axis holds at 3.5**: the venue's absolute depth and the absent primary path for retail are what set that score, and neither changed; the dilution is a real deterioration but not yet a notch of one.

**The DEX Screener pair you may have seen is the wrong token.** As noted up top, the Arbitrum Uniswap V3 pool that public aggregators surfaced as "Theo USD / USDC on Arbitrum" is paired with the unrelated 18-decimal phantom token, not canonical thUSD. Don't size off that pool's depth or its reported price.

**Practical exit cost for sized retail is still adverse.** There is now some observable volume to anchor against (≈$110K/day on the Ethereum pool), but at ≈$4.75M depth a large sell moves the price, and there is no Pendle/Curve backstop. **The practical answer for sized retail allocations remains: no meaningful retail exit at scale.** The peg is structurally underwritten by the gated KYC arb (Minter `redeem()` at $1 par), not by deep secondary liquidity.

## IV. Project / Issuer Risk

**The institutional roster is one of the strongest in DeFi-adjacent stablecoins.** Standard Chartered's Libeara handles tokenization. Wellington Management is the sub-advisor on the underlying T-Bill fund. FundBridge Capital is the gold custodian and runs the 20% first-loss buffer. SIG (Susquehanna) provides prime brokerage. Flowdesk and Amber are secondary-market makers. Concrete (Blueprint Finance) ran the Genesis pre-deposit vault. Mustafa Gold — one of Asia's largest gold retailers — is named as a borrower on the gold-lending side. Underlying T-Bill custody is MAS-regulated (Singapore) via Standard Chartered's local subsidiary.

**The team is semi-doxxed and credentialed.** Founders are ex-Optiver and IMC quant traders — derivatives execution experience that's directly relevant to running a CME gold-futures basis trade. Hack VC led the $20M raise in April 2025.

**The issuer is the weak part — and it's the same issuer as [thBILL](/reports/thbill).** Theo Network is Panama-domiciled and not licensed as a financial institution anywhere. When you hold thUSD, you do not own gold, T-bills, or futures positions — you own a token that represents a contractual claim against Theo for a USDC-equivalent amount. There is no bankruptcy remoteness. If Theo becomes insolvent, recovery runs through Panamanian corporate proceedings against an unlicensed entity. This is the same legal-claim gap as thBILL, applied to a more complex strategy. The team's directly-relevant operating experience (ex-Optiver/IMC derivatives execution) does meaningfully matter for an active gold-basis strategy — more than it would for a passive T-Bill wrapper — and that's reflected in scoring this **Issuer** axis a half-point above the thBILL retail report. But the legal claim is the same Panama claim, and the score reflects that as the binding floor.

**Disclosure quality on the things that *are* disclosed is competent.** Contract addresses are public. The Zenith audit is public. The strategy and partner stack are documented at `docs.theo.xyz`. The gaps are: NAV oracle architecture, fee schedule, FCM identity, gold custody location, MPC signer composition, and the per-tx redemption cap mechanism — none of which are publicly disclosed.

**No public Theo token, no on-chain DAO.** Governance is corporate, executed through the 4-of-6 Safe and the 48-hour TimelockController (post-migration; see §I). Same pattern as thBILL, now under a more defensive admin configuration than thBILL has on its equivalent layer.

Strong partner stack and a credentialed team, undermined by a young, unlicensed, non-bankruptcy-remote issuer and material disclosure gaps on the off-chain layer.

## Bottom Line

| | |
|---|---|
| **Overall Risk** | **3.5/10 — Elevated** | was 4.0 |
| Peg Mechanism | 4.0/10 | held |
| Backing | **2.5/10** | was 3.0 |
| Underlying | 3.0/10 | held |
| Liquidity | 3.5/10 | held |
| Issuer | 5.5/10 | held |

**On the scoring rubric.** This report scores on peg / backing / underlying / liquidity / issuer because the question a retail user actually faces is *"is this onchain dollar safe and how do I get out?"* Liquidity gets its own dial precisely because retail cannot redeem at par and must exit on-DEX.

**Why Backing moved to 3.0.** Start from what actually backs a thUSD: **62.3% thBILL** and **37.7% off-chain gold-carry**. Judged on asset quality alone, that is a decent blend — thBILL looks through to institutional T-Bills, and the gold leg is physical metal at a custodian hedged with exchange-traded futures, which is a conventional trade. A quality-only read of the basket lands around the low fives.

The Backing axis then marks that down for everything about *how the backing is held*, and the list is long: roughly 38% of it is unattested with no proof-of-reserves, no disclosed gold custody address and no third-party opinion; there is now **zero on-chain cash buffer**; the on-chain leg is **100% concentrated in a single asset that Theo itself issues**, so the collateral is not independent of the issuer; there is no atomic redemption; settlement leans on the Libeara T+1→T+7 rail; the issuer is an unlicensed, non-bankruptcy-remote Panama entity; and MINTER_ROLE is a single key. That combination is what takes the score to the low threes.

**Three things stopped it going lower**, and they are worth naming because they are genuine: the coverage slide has stopped, and the August mint arrived *matched* — issuance discipline, not dilution; thBILL's own downgrade was specifically about **exit**, and thUSD holders do not exit *through* thBILL (they redeem against Theo), so the wrapper's redemption defect does not pass through one-for-one; and the ultimate underlying — Libeara/Wellington T-Bills, Fidelity FILQ, physical gold — is genuinely high quality. **3.0 is a judgement at the top of the range this reasoning supports, not a computed point**; a slightly harsher read of the same facts gives 2.5.

**Why Underlying holds at 3.0 even though thBILL was downgraded.** This axis scores collateral *quality*, separately from how it is held. thBILL's August re-rate cut its Redemption and Liquidity axes — its **Underlying axis was unchanged at 5.0**, because nothing about the T-Bills behind it deteriorated; what broke was access to them. Since this axis asks about quality rather than exit, the correct input from thBILL did not move, and neither does this score. The blend is now about 62% thBILL chain (institutional T-Bills via Libeara/Wellington, plus Fidelity's FILQ) and about 38% off-chain gold-carry with no attestation. The T-Bill portion is still bluechip; the gold-carry sleeve is structurally weaker because it cannot be independently verified. Net read: weaker than a pure-T-Bill underlying, stronger than a pure-algorithmic-stable underlying.

**Who it's for:** DeFi-comfortable users who already understand Ethena-style synthetic dollar mechanics, want exposure to the gold-basis trade, and are sizing well below current DEX depth. Genuinely opt-in early access — best read alongside an awareness that institutional allocators get a redemption rail you don't.

**Who should avoid:** Anyone who needs sized or instant liquidity. Anyone uncomfortable with off-chain backing and zero proof-of-reserves. Anyone who wants direct legal claim on the underlying gold or Treasuries. Anyone who would size larger than ≈$5–10K on the current secondary market.

**A note on what this report doesn't cover.** This analysis combines what we can verify on-chain with what's publicly documented. The off-chain leg of the strategy — CME futures positions, physical gold inventory, lending counterparties, MPC custody composition, NAV-oracle source — is opaque to us and may carry risk this report cannot enumerate. Theo's prior product (thBILL) has demonstrated a multi-month clean operating track record on a similar trust model; that is encouraging but does not constitute proof for thUSD's more complex strategy. Sized positions should leave room for residual unknowns this analysis cannot enumerate.

## Revision history

- **2026-08-23 — on-chain coverage collapsed 61.22% → 42.86% in one day; Backing 3.0 → 2.5, Overall cut.** The coverage series, supply and reserve balances were all re-read.
- **2026-08-18 — coverage stabilised, cash buffer drained, look-through re-rated. Backing 3.5 → 3.0.**
- **2026-07-13 — coverage escalation, liquidity correction and score refresh.**
