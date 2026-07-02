---
asset: "thUSD"
slug: "thusd"
aliases: ["thUSD", "Theo thUSD", "Theo USD", "sthUSD", "Staked thUSD", "Theo Network thUSD"]
chains: ["eth", "arb", "stable"]
category: "stablecoin"
peg_mechanism: "delta-neutral synthetic"
assessment_type: "light"
audience: "retail"
date: "2026-05-04"
last_verified: "2026-07-02"
production: true
issuer: "Theo Network (Panama)"
peg_mechanism_score: 4.0
backing_score: 4.0
underlying_score: 3.5
liquidity_score: 3.5
issuer_score: 5.5
overall_score: 4.1
audited: true
audit_count: 1
audit_firms: ["Zenith"]
bug_bounty: false
team_doxxed: true
incident_history: false
is_fork: false
live_since: "2026-04"
underlying_managers:
  - "FundBridge Capital (gold custody)"
  - "Standard Chartered Libeara (T-Bill leg via thBILL)"
  - "Wellington Management (T-Bill sub-advisor)"
---

# thUSD — Retail Risk Report

**Elevated risk · 4.1/10**

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| Lower end of 6–10% APY target band (sthUSD only) | Sell on DEX at NAV discount | KYC-gated, $200K-per-tx cap | Under a month since launch | Ethereum, Arbitrum, Stable |

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

The catch for retail is the same as thBILL's: **you do not have a primary redemption path.** Mint and redeem are KYC-whitelisted, so non-institutional users can only enter and exit via DEX. Secondary liquidity is structurally thin (aggregate DEX TVL on Arbitrum is ~$32K across the live pools with effectively zero meaningful volume), and the primary rail itself has a hard $200,000-per-transaction redemption cap. The product is best read as opt-in early access for institutional capital — retail can hold it, but the structural exit story is meaningfully worse than crvUSD, OUSD, or even thBILL.

Appropriate for: DeFi-comfortable users who already understand Ethena-style synthetic dollars, are sizing well below DEX depth, and want exposure to the gold-basis trade. Not appropriate for: anyone who needs instant or sized liquidity, anyone who wants direct legal claim on the underlying gold or Treasuries, or anyone uncomfortable with a very young product running an off-chain strategy with zero proof-of-reserves.

## I. Smart Contract Risk

**One audit, narrow scope.** The Zenith audit (publicly published at github.com/zenith-security/reports) covers exactly **one file** — the sthUSD staking vault. The thUSD token itself, the Minter (which handles mint and redeem), the OFT Adapters (which handle cross-chain), and the off-chain strategy adapter are **not in any public audit**. Roughly one of five on-chain surfaces has audit coverage. Theo describes this as "the thUSD audit," which is technically accurate but materially overstates breadth. Findings on the file that *was* audited are clean — zero Critical, zero High, zero Medium — so what's audited looks fine. The risk is in what isn't.

**No bug bounty.**

**Admin chain has been hardened over the last two weeks.** Through 2026-05-14 to 2026-05-17, Theo migrated ownership of thUSD, sthUSD, and the thUSD OFT adapter on all three chains (Ethereum + Arbitrum + Stable) to a **new OpenZeppelin TimelockController at `0x2bb4b7e6e83fa6b77d0143dad631843cb73dca02`**. On-chain reads confirm `getMinDelay() = 172,800 seconds = 48 hours`. PROPOSER_ROLE and EXECUTOR_ROLE on the new Timelock are held by the disclosed Safe `0x94877640dd9e6f1e3cb56bf7b5665b7152601295`, which is now **4-of-6** (one additional signer and threshold bump versus the originally-disclosed 3-of-5). This is the right shape for an institutional product — and 48 hours is a real exit window, not a checkbox.

**Cross-chain layer is now under the same admin chain as the token contracts.** As of 2026-05-17 the thUSD OFT adapter on all three chains is owned by the same 48-hour TimelockController described above. A malicious peer-config change can no longer ship in a single transaction — proposals are scheduled on the Timelock, surface on-chain for 48 hours, and require the 4-of-6 Safe to execute. This closes what was previously the highest concentrated-key risk in the system.

**The one remaining EOA-owned contract is the sthUSD OFT adapter** (`0xc2D07082120Cbd0E75B5F12D6c5d41fC2600dd39`), still owned by the original signer `0xf5b0bf09acc504f0d470134f05fe776d1f90cae0`. The stakes are materially lower — bridged sthUSD supply is essentially zero today (sub-$1 across Arbitrum + Stable) — so the worst-case attack is a future-state concern rather than a current-balance risk. Watch-item: completion of this last migration would close out the OFT-EOA story entirely.

**EMERGENCY_ROLE is a single externally-owned address (`0xf936df06d35a2f82f26083f32ff2ab72f3ebdd8f`).** It's pause-only (cannot mint or upgrade), so a compromise can grief the protocol but not drain it. **MINTER_ROLE is also a single externally-owned backend signer (`0x09ec7c2d4955525237b843f5338dd7982b5553b6`).** Same pattern as Ethena's mint key: the off-chain key is the only thing standing between an attacker and unbounded mint authority.

**Very young product.** No incidents to date. Theo's prior product (thBILL) has months of clean operation, which transfers some operational confidence to the team but does not transfer code coverage to thUSD's unaudited surfaces.

The single biggest watch-item used to be whether OFT Adapter ownership would get transferred under the Safe-and-Timelock structure (which is what Theo had already done for thBILL). That's now happened for three of the four OFT contracts. The remaining piece — sthUSD OFT — would close the story. The new highest-concentration risk in the system is whichever single key holds the MINTER_ROLE on the Minter contract (still an EOA per disclosed baseline); the OFT-EOA concern that previously dominated this section has been materially reduced.

## II. Economic / Backing Risk

**A meaningful portion of backing is now off-chain, with no proof-of-reserves on the off-chain leg.** As of 2026-05-19 the on-chain visible coverage is **91.93%** of thUSD supply (~$85.4M of on-chain reserves against $92.9M outstanding) — composed primarily of thBILL at NAV ($83.3M), plus USDT ($1.72M) and USDC ($0.36M) at the reserve safe `0xec417ccb…3c2f`. The implied off-chain backing is **~$7.49M (~8% of supply)** — inferred from the coverage gap, *not* from any direct attestation. This gap appeared on 2026-05-13 when $2.75M USDC moved from the reserve safe to a new destination (`0x021bc771…ae4`), consistent with the gold-carry strategy starting to deploy capital off-chain. Coverage was 94.85% before that date and has been stable at 91.93% since. The on-chain ratio dropping is by design for this product — but the off-chain leg has no proof-of-reserves, no disclosed gold custody address, no third-party attestation. The product is becoming structurally less on-chain-verifiable over time. This is materially less transparent than thBILL (where at least the T-Bill leg is observable via Libeara on-chain).

**The strategy itself is principled.** Long physical gold (custodied at FundBridge, lent to retail/wholesale gold borrowers including Mustafa Gold for interest) hedged short on CME gold futures (capturing the contango/roll-yield basis), with a thBILL reserve. A 20% first-loss buffer sits over the gold inventory. None of this is novel in TradFi — it's the same kind of basis trade prop desks have run for decades. The novel part is running it as backing for an onchain stablecoin with a 7-day track record.

**Yield is running modestly below the target band.** 19.7 days of sthUSD share-price history (2026-04-29 → 2026-05-19) shows accrual from 1.003378 to 1.006291 — annualized this is **~5.5% APY**, about 50 bps below the 6% floor of the 6–10% target band. The strategy is generating real yield, just less than the published range so far; this could narrow with more data (the sample is short and the gold-carry deployment only began mid-May), but at present the realized rate does not yet land inside the target range. Whether it sustains across a stress event (a sharp gold move, a basis compression, a borrower default) is the open question. Gold curves *can* flatten or even invert in stress (briefly happened during COVID 2020), and at $1B target size on a $50B-notional CME open-interest market the strategy starts to be a price-taker on its own roll.

**Retail has no primary redemption.** Mint and redeem at $1 are KYC-whitelisted and execute via EIP712-signed orders constructed by Theo's backend. Without KYC you cannot redeem at par. Your practical exit is selling on a DEX.

**The primary rail has a $200,000-per-transaction cap by design.** Visible in the on-chain redemption pattern: when the rail is busy, the great majority of burns land at exactly $200,000.00 to two-decimal precision — that's the per-tx ceiling. The cap exists somewhere in the stack — it could be enforced in the Minter contract, in the backend signer, or as a USDC-reserve throttle. Theo has not publicly disclosed which. For a retail user, the practical implication is mostly indirect: even institutional redeemers have to chunk their exits, so a sized run would queue many $200K tranches behind each other.

**Aggregate-redemption stress has been partially tested.** Single-actor multi-$M-per-week chunked redemption has been absorbed without failure (one redeemer chunked >$12M in a single 7-day window during the post-Genesis-launch unwind, all in $200K tranches). The unanswered test is what happens if redemption demand exceeds the Minter's USDC float — whether the cap re-arms, throttles harder, or simply blocks.

**Mint-rail capacity is real.** The mint path has absorbed multi-tens-of-millions single-tx institutional inflows without incident — the EIP712 mint rail is validated up to large-allocator scale. Recipient-side attribution (Theo-internal vs external new allocator) is sometimes unclear without off-chain confirmation.

**Reserve composition — thBILL-anchored, with a growing off-chain leg.** Theo's transparency dashboard at `app.theo.xyz/transparency` discloses a single Safe holding all of thUSD's *on-chain* reserves at `0xec417ccb6dd26868cca993a92f37217b1d4b3c2f` — dominated by thBILL (~95%+ of on-chain reserves at NAV) plus small USDT/USDC liquidity buffers. On-chain coverage has stepped down through 2026 — from the low-90s% in mid-May toward the mid-70s% by mid-year — as Theo scales the off-chain gold-carry leg, with the implied off-chain backing growing correspondingly into the tens of millions. **On-chain coverage below 100% is expected operating state here, not a solvency signal**, as long as the off-chain gold/futures backing is intact. Live coverage on [the dashboard](/dashboards/?asset=thusd) and `app.theo.xyz/transparency`. The largest reserve component (thBILL) has its own [retail risk report](/reports/thbill) covering the recursive backing chain from this layer down to Libeara/Wellington.

**The thBILL-anchored reserve creates a recursive trust chain.** thBILL itself has its own backing structure (off-chain T-Bills via Libeara, with synthetic intermediate wrappers — see `tidresearch.com/reports/thbill`), and its on-chain backing ratio fluctuates within a Libeara settlement window (T+1 to T+7) — periodic dips during Stage A windows when Theo has minted new thBILL but the corresponding ULTRA hasn't yet arrived from Libeara. **During those windows, thUSD's thBILL reserves are technically backed by Theo's promise to Libeara, not by ULTRA-equivalent collateral.** Theo's "100% backed" attestation remains formally correct (thUSD-supply ÷ thBILL-at-NAV-plus-stables ≥ 100%) but the next layer down is where the periodic gap lives. Practically — the gap closes within the historical T+1 to T+7 envelope and the chain works as designed; the structural point is just that "100% backed" rests on attestations at multiple layers.

**thUSD growth drives thBILL primary minting, not secondary buying.** Each new dollar of thUSD demand produces a corresponding silent thBILL mint at the reserve (the thBILL contract emits **zero on-chain events** during the supply mutation — same silent-mint pattern documented for the underlying tULTRA layer), with backing reconciled later via Libeara settlement. Standard ERC-20 indexers (Etherscan, Dune, The Graph) cannot track these mints; only direct `totalSupply()` polling captures them.

**Not all chains are equal.** The great majority of bridged thUSD lives on Stable (recently ~95%+ of bridged supply), a chain that's itself only a few months old. Any Stable-side incident — a chain halt, a sequencer fault, a bridge anomaly — affects nearly all bridged thUSD. Concentrated chain-level liveness risk for cross-chain holders.

**NAV oracle architecture is undisclosed.** The share price that determines sthUSD redemption combines on-chain thBILL NAV, an off-chain CME futures mark, off-chain gold spot, and off-chain lending interest. Whoever publishes that share price is the most-trusted contract in the system, and Theo has not publicly documented who it is. The thBILL pattern suggests it's an MPC-attested value from Theo's own infrastructure.

## III. Liquidity (Retail Exit)

**Secondary venues are extremely thin.** Aggregate Arbitrum DEX TVL is **~$32K across 17 live pools** with effectively zero meaningful volume (~$2.5K 24h) — a small market sell would crater price by orders of magnitude more than thBILL's secondary. The live venues are entirely Uniswap V4 thUSD/USDC and thUSD/USDT pools (the long tail is mostly sub-$1K). There is no meaningful Ethereum DEX liquidity for canonical thUSD. There is no Pendle or Curve presence at the size you'd expect for a stablecoin of this supply scale. Absence of peg pressure on these pools is not evidence of peg discipline; the pools exist for accounting/listing reasons rather than as a real exit path. (For context: weighted DEX price is currently 0.999, an 8 bp discount vs $1 — but on $32K TVL that's noise, not a signal about the canonical peg.)

**The DEX Screener pair you may have seen is the wrong token.** As noted up top, the Arbitrum Uniswap V3 pool that public aggregators surfaced as "Theo USD / USDC on Arbitrum" is paired with the unrelated 18-decimal phantom token, not canonical thUSD. Don't size off that pool's depth or its reported price.

**Practical exit cost for retail is unknown.** With this little secondary depth, even small sells will print at a discount, and there is no observed daily volume to anchor a discount estimate against. **The practical answer for sized retail allocations is: there is currently no meaningful retail exit at scale.** The peg is structurally underwritten by the gated KYC arb (Minter `redeem()` at $1 par), not by deep secondary liquidity.

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
| **Overall Risk** | **4.1/10 — Elevated** |
| Peg Mechanism | 4.0/10 |
| Backing | 4.0/10 |
| Underlying | 3.5/10 |
| Liquidity | 3.5/10 |
| Issuer | 5.5/10 |

**On the scoring rubric.** This report scores on peg / backing / underlying / liquidity / issuer because the question a retail user actually faces is *"is this onchain dollar safe and how do I get out?"* Liquidity gets its own dial here precisely because retail can't redeem at par and must exit on-DEX, and current DEX depth is very thin. **Underlying** scores the collateral quality independently of wrapper-layer risk: thUSD's reserve splits ~92% thBILL chain (institutional T-Bills via Libeara/Wellington/FundBridge — bluechip standalone, scored 5.0 in the [thBILL retail report](/reports/thbill)) and ~8% off-chain gold-carry positions (long physical gold + short CME futures) with no proof-of-reserves attestation. The thBILL portion is bluechip; the gold-carry sleeve is structurally weaker because it cannot be independently verified on-chain, and any thBILL-layer stress propagates upward. Net read: weaker than a pure-T-Bill underlying, stronger than a pure-algorithmic-stable underlying.

**Who it's for:** DeFi-comfortable users who already understand Ethena-style synthetic dollar mechanics, want exposure to the gold-basis trade, and are sizing well below current DEX depth. Genuinely opt-in early access — best read alongside an awareness that institutional allocators get a redemption rail you don't.

**Who should avoid:** Anyone who needs sized or instant liquidity. Anyone uncomfortable with off-chain backing and zero proof-of-reserves. Anyone who wants direct legal claim on the underlying gold or Treasuries. Anyone who would size larger than ~$5–10K on the current secondary market.

**A note on what this report doesn't cover.** This analysis combines what we can verify on-chain with what's publicly documented. The off-chain leg of the strategy — CME futures positions, physical gold inventory, lending counterparties, MPC custody composition, NAV-oracle source — is opaque to us and may carry risk this report cannot enumerate. Theo's prior product (thBILL) has demonstrated a multi-month clean operating track record on a similar trust model; that is encouraging but does not constitute proof for thUSD's more complex strategy. Sized positions should leave room for residual unknowns this analysis cannot enumerate.

## Corrections

This report is based on publicly available documentation (`docs.theo.xyz`, theo.xyz articles, partner press releases), the public Zenith audit report, on-chain verification via Ethereum mainnet RPC, and prior on-chain analysis of Theo's thBILL infrastructure. It does not incorporate any private disclosures from Theo, FundBridge, Libeara, Wellington, or other named partners. If anything here is wrong — including cases where Theo or its partners have non-public information that contradicts a claim in this report — please reach us at **info@tidresearch.com** and we'll correct the next revision.
