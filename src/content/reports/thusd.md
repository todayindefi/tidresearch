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
last_verified: "2026-05-04"
production: false
issuer: "Theo Network (Panama)"
market_cap_approx: 96280000
tvl_gross: 96280000
peg_mechanism_score: 4.0
backing_score: 4.0
liquidity_score: 3.5
issuer_score: 6.5
overall_score: 4.5
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

**Elevated risk · 4.5/10**

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~6% APR run-rate (sthUSD only) | Sell on DEX at NAV discount | KYC-gated, $200K-per-tx cap | ~7 days | Ethereum, Arbitrum, Stable |

## Read this first — there are at least three "thUSDs"

Before anything else: make sure the token you're looking at is the right one. There are at least three on-chain assets named thUSD, two of them unrelated, and one of them a phantom token on Arbitrum that public price feeds and DEX aggregators have been mis-labeling as canonical Theo thUSD.

- **Theo thUSD (this report)** — `0xa3fE5c7596024E6811E14F029937D5bd8Ae485b3` on Ethereum. Yield-bearing two-token system (thUSD + sthUSD), 6 decimals, 96.28M supply, launched 2026-04-27. The Arbitrum and Stable versions live at the OFT Adapter address `0x9AA9Aa0530a6AF70EE7BC47cF1240100f514b065` (same address on both chains).
- **Threshold Network thUSD** — `0xCFC5bD99915aAa815401C5a41A927aB7a38d29cf` on Ethereum. Unrelated CDP stablecoin minted against tBTC/ETH, live since 2024.
- **Arbitrum phantom "thUSD"** — an 18-decimal token with ~$300K supply paired in Uniswap V3 pool `0x45aa23530f8e48417496b7a1b9e395fad64c87ca`. Different decimals (18 vs 6), different supply scale ($300K vs $96M), different deployment. The DEX Screener pair that surfaces as "Theo USD / USDC on Arbitrum" tracks the phantom, not Theo's thUSD.

Always verify the contract address against `docs.theo.xyz/resources/addresses` before any allocation.

## Summary

thUSD is Theo Network's onchain yield-bearing stablecoin. Architecturally it's a near-clone of Ethena's USDe/sUSDe — a two-token system where you hold thUSD as a $1-pegged base token, then stake into sthUSD to actually capture yield. Holding thUSD without staking earns nothing.

The yield comes from a **delta-neutral gold strategy** plus a T-Bill float: physical gold is custodied by FundBridge Capital (tokenized via Standard Chartered's Libeara) and lent out for interest, while a short position in CME gold futures hedges the spot exposure. A T-Bill reserve provides liquidity. Target APR is 6–10% — and after seven days live, the realized signal is on-target: sthUSD's share price has moved from $1.000 to $1.004067, which annualizes to ~6%.

The institutional pieces are genuinely strong. Wellington Management, Standard Chartered's Libeara, FundBridge, SIG, Flowdesk, Amber, and Concrete (which ran the $100M Genesis pre-deposit vault) are all real names. The founders are ex-Optiver and IMC quant traders — directly relevant experience for the gold-futures basis trade. Theo's prior product, thBILL, has run for nine months without a public incident.

The catch for retail is the same as thBILL's: **you do not have a primary redemption path.** Mint and redeem are KYC-whitelisted, so non-institutional users can only enter and exit via DEX. Secondary liquidity is currently very thin (about $55K aggregate across nine Arbitrum pools), and the primary rail itself has a hard $200,000-per-transaction redemption cap. The product is best read as opt-in early access for institutional capital — retail can hold it, but the structural exit story is meaningfully worse than crvUSD, OUSD, or even thBILL.

Appropriate for: DeFi-comfortable users who already understand Ethena-style synthetic dollars, are sizing well below DEX depth, and want exposure to the gold-basis trade. Not appropriate for: anyone who needs instant or sized liquidity, anyone who wants direct legal claim on the underlying gold or Treasuries, or anyone uncomfortable with a 7-day-old product running an off-chain strategy with zero proof-of-reserves.

## I. Smart Contract Risk

**One audit, narrow scope.** The Zenith audit (publicly published at github.com/zenith-security/reports) covers exactly **one file** — the sthUSD staking vault. The thUSD token itself, the Minter (which handles mint and redeem), the OFT Adapters (which handle cross-chain), and the off-chain strategy adapter are **not in any public audit**. Roughly one of five on-chain surfaces has audit coverage. Theo describes this as "the thUSD audit," which is technically accurate but materially overstates breadth. Findings on the file that *was* audited are clean — zero Critical, zero High, zero Medium — so what's audited looks fine. The risk is in what isn't.

**No bug bounty.**

**Admin chain on the main contracts is real.** A 3-of-5 Gnosis Safe controls a Timelock controller, which controls the thUSD token, the sthUSD vault, and the Minter. That's the right shape for an institutional product. The catch is the **timelock delay is 60 seconds.** That's shorter than typical block-explorer indexing latency — a scheduled change would not reliably be visible to monitoring tools before the corresponding execution arrives. As a real defense it's a checkbox. Users have no meaningful exit window.

**Cross-chain layer is the weak spot.** The OFT Adapters (the contracts that hold ~66M thUSD locked on Ethereum and mirror the supply on Arbitrum and Stable) are owned by **externally-owned addresses with no timelock**. Re-verified 2026-05-04: ownership is unchanged from 2026-04-30. These could be MPC-managed wallets or could be single private keys — there's no way to tell on-chain. Either way, there's no on-chain quorum, no timelock, and no public proposal phase on the cross-chain layer.

That matters because the OFT owner controls peer config — the function that determines which contract on Arbitrum and Stable is allowed to issue mint/burn messages. In the worst case, a compromised OFT owner can set a malicious peer in a single transaction and either (a) mint arbitrary thUSD on Arbitrum or Stable, or (b) drain the 66M-thUSD Ethereum lockbox via fake "burn" messages. There is no exit window. **This is a regression from Theo's own thBILL, where the equivalent OFT layer is owned by a 3-of-5 Safe.** Same issuer, same architecture team, but a less-protected setup on the newer product.

**EMERGENCY_ROLE is a single externally-owned address.** It's pause-only (cannot mint or upgrade), so a compromise can grief the protocol but not drain it. **MINTER_ROLE is also a single externally-owned backend signer.** Same pattern as Ethena's mint key: the off-chain key is the only thing standing between an attacker and unbounded mint authority.

**Live for seven days.** No incidents. Theo's prior product (thBILL) has nine months of clean operation, which transfers some operational confidence to the team but does not transfer code coverage to thUSD's unaudited surfaces.

The single biggest watch-item is whether OFT Adapter ownership gets transferred to the Safe (which is what Theo already did for thBILL's equivalent layer). Until that happens, the cross-chain layer is the highest concentrated-key risk in the system.

## II. Economic / Backing Risk

**The backing is structurally off-chain with zero independent verification.** Theo publishes no proof-of-reserves, no disclosed treasury address, and no third-party attestation. Every backing claim — gold ounces held, futures notional, T-Bill float, the 20% first-loss buffer — is self-reported. This is materially less transparent than thBILL (where at least the T-Bill leg is observable on-chain), despite thUSD being the more complex product.

**The strategy itself is principled.** Long physical gold (custodied at FundBridge, lent to retail/wholesale gold borrowers including Mustafa Gold for interest) hedged short on CME gold futures (capturing the contango/roll-yield basis), with a thBILL reserve. A 20% first-loss buffer sits over the gold inventory. None of this is novel in TradFi — it's the same kind of basis trade prop desks have run for decades. The novel part is running it as backing for an onchain stablecoin with a 7-day track record.

**Yield is real and on-target.** Seven days in, sthUSD's share price ticked from $1.000 to $1.004067 — about 6% annualized, squarely in the 6–10% target band. That's the first observable signal that the strategy actually generates the published yield. Whether it sustains across a stress event (a sharp gold move, a basis compression, a borrower default) is the open question. Gold curves *can* flatten or even invert in stress (briefly happened during COVID 2020), and at $1B target size on a $50B-notional CME open-interest market the strategy starts to be a price-taker on its own roll.

**Retail has no primary redemption.** Mint and redeem at $1 are KYC-whitelisted and execute via EIP712-signed orders constructed by Theo's backend. Without KYC you cannot redeem at par. Your practical exit is selling on a DEX.

**The primary rail also has a $200,000-per-transaction cap.** This was discovered by reading the on-chain redemption pattern: of 93 burns in the most recent 7-day window, **64 are exactly $200,000.00 to two-decimal precision.** One redeemer chunked $12.55M out in seven days, all in $200K tranches. The cap exists somewhere in the stack — it could be enforced in the Minter contract, in the backend signer, or as a USDC-reserve throttle. Theo has not publicly disclosed which. For a retail user, the practical implication is mostly indirect: even institutional redeemers have to chunk their exits, which means in a sized run you'd be stuck behind a queue of $200K tranches.

**Aggregate-redemption stress has been partially tested, single-tx cannot be.** $24M of redemption volume has cleared. One actor took $12.55M out in seven days at the per-tx ceiling without anything breaking. The unanswered test is what happens if redemption demand exceeds the Minter's USDC float — whether the cap re-arms, throttles harder, or simply blocks.

**Genesis unwind has plateaued.** Seven-day net flow flipped from −$20M (the early Genesis-allocator exit) to +$5M after a fresh $20M institutional mint on 2026-05-01. That mint went to a Safe-shaped contract whose identity has not been confirmed against Theo's own treasury — it could be a genuinely external new allocator, or it could be a Theo-internal address that we'd want to net out before reading the +$5M as organic demand. Worth flagging until the recipient is identified.

**Not all chains are equal.** About 67% of total thUSD supply (and 97% of *bridged* supply) lives on Stable, a chain that's itself only a few months old. Any Stable-side incident — a chain halt, a sequencer fault, a bridge anomaly — affects nearly all bridged thUSD. Concentrated chain-level liveness risk for cross-chain holders.

**NAV oracle architecture is undisclosed.** The share price that determines sthUSD redemption combines on-chain thBILL NAV, an off-chain CME futures mark, off-chain gold spot, and off-chain lending interest. Whoever publishes that share price is the most-trusted contract in the system, and Theo has not publicly documented who it is. The thBILL pattern suggests it's an MPC-attested value from Theo's own infrastructure.

## III. Liquidity (Retail Exit)

**Secondary venues are extremely thin.** Aggregate DEX TVL across nine pools on Arbitrum is approximately $55,000. A $10K market sell would crater price by more than 10%. There is no meaningful Ethereum DEX liquidity for canonical thUSD. There is no Uniswap V4, Pendle, or Curve presence at the size you'd want to see for a $96M-supply stablecoin. The thBILL retail exit picture (~$1.6M aggregate DEX) was thin; thUSD is roughly 30× thinner on a comparable base.

**The DEX Screener pair you may have seen is the wrong token.** As noted up top, the Arbitrum Uniswap V3 pool that public aggregators surfaced as "Theo USD / USDC on Arbitrum" is paired with the unrelated 18-decimal phantom token, not canonical thUSD. Don't size off that pool's depth or its reported price.

**Practical exit cost for retail is unknown.** With this little secondary depth, even small sells will print at a discount, and there is no observed daily volume to anchor a discount estimate against. **The practical answer for sized retail allocations is: there is currently no meaningful retail exit at scale.**

## IV. Project / Issuer Risk

**The institutional roster is one of the strongest in DeFi-adjacent stablecoins.** Standard Chartered's Libeara handles tokenization. Wellington Management is the sub-advisor on the underlying T-Bill fund. FundBridge Capital is the gold custodian and runs the 20% first-loss buffer. SIG (Susquehanna) provides prime brokerage. Flowdesk and Amber are secondary-market makers. Concrete (Blueprint Finance) ran the Genesis pre-deposit vault. Mustafa Gold — one of Asia's largest gold retailers — is named as a borrower on the gold-lending side. Underlying T-Bill custody is MAS-regulated (Singapore) via Standard Chartered's local subsidiary.

**The team is semi-doxxed and credentialed.** Founders are ex-Optiver and IMC quant traders — derivatives execution experience that's directly relevant to running a CME gold-futures basis trade. Hack VC led a $20M raise in April 2025.

**The issuer is the weak part.** Theo Network is Panama-domiciled and not licensed as a financial institution anywhere. When you hold thUSD, you do not own gold, T-bills, or futures positions — you own a token that represents a contractual claim against Theo for a USDC-equivalent amount. There is no bankruptcy remoteness. If Theo becomes insolvent, recovery runs through Panamanian corporate proceedings against an unlicensed entity. This is the same legal-claim gap as thBILL, applied to a more complex strategy.

**Disclosure quality on the things that *are* disclosed is competent.** Contract addresses are public. The Zenith audit is public. The strategy and partner stack are documented at `docs.theo.xyz`. The gaps are: NAV oracle architecture, fee schedule, FCM identity, gold custody location, MPC signer composition, and the per-tx redemption cap mechanism — none of which are publicly disclosed.

**No public Theo token, no on-chain DAO.** Governance is corporate, executed through the 3-of-5 Safe and the 60-second timelock. Same pattern as thBILL.

Strong partner stack and a credentialed team, undermined by a young, unlicensed, non-bankruptcy-remote issuer and material disclosure gaps on the off-chain layer.

## Bottom Line

| | |
|---|---|
| **Overall Risk** | **4.5/10 — Elevated** |
| Peg Mechanism | 4.0/10 |
| Backing | 4.0/10 |
| Liquidity | 3.5/10 |
| Issuer | 6.5/10 |

**On the scoring rubric.** This report scores on peg / backing / liquidity / issuer — the same axes used for stablecoins like crvUSD and OUSD — because the question a retail user actually faces is *"is this onchain dollar safe and how do I get out?"* Liquidity gets its own dial here precisely because retail can't redeem at par and must exit on-DEX, and current DEX depth is very thin.

**Who it's for:** DeFi-comfortable users who already understand Ethena-style synthetic dollar mechanics, want exposure to the gold-basis trade, and are sizing well below current DEX depth. Genuinely opt-in early access — best read alongside an awareness that institutional allocators get a redemption rail you don't.

**Who should avoid:** Anyone who needs sized or instant liquidity. Anyone uncomfortable with off-chain backing and zero proof-of-reserves. Anyone who wants direct legal claim on the underlying gold or Treasuries. Anyone who would size larger than ~$5–10K on the current secondary market.

**A note on what this report doesn't cover.** This analysis combines what we can verify on-chain with what's publicly documented. The off-chain leg of the strategy — CME futures positions, physical gold inventory, lending counterparties, MPC custody composition, NAV-oracle source — is opaque to us and may carry risk this report cannot enumerate. Theo's prior product (thBILL) has demonstrated nine months of clean operations on a similar trust model; that is encouraging but does not constitute proof for thUSD's more complex strategy. Sized positions should leave room for residual unknowns this analysis cannot enumerate.

## Corrections

This report is based on publicly available documentation (`docs.theo.xyz`, theo.xyz articles, partner press releases), the public Zenith audit report, on-chain verification via Ethereum mainnet RPC, and prior on-chain analysis of Theo's thBILL infrastructure. It does not incorporate any private disclosures from Theo, FundBridge, Libeara, Wellington, or other named partners. If anything here is wrong — including cases where Theo or its partners have non-public information that contradicts a claim in this report — please reach us at **info@tidresearch.com** and we'll correct the next revision.
