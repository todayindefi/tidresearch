---
asset: "thBILL"
slug: "thbill"
aliases: ["thBILL", "Theo thBILL", "thbill-retail"]
chains: ["eth", "arb", "base", "hyperevm"]
category: "tokenized-treasury"
peg_mechanism: "nav-accruing"
assessment_type: "light"
audience: "retail"
companion_report: "thbill-full"
date: "2026-04-28"
last_verified: "2026-04-28"
featured: true
production: true
issuer: "Theo Protocol Corporation"
market_cap_approx: 133000000
tvl_gross: 133000000
peg_mechanism_score: 4.0
backing_score: 5.5
liquidity_score: 4.0
issuer_score: 4.5
overall_score: 4.5
audited: true
audit_count: 1
audit_firms: ["Zenith Audits"]
bug_bounty: false
team_doxxed: true
incident_history: false
is_fork: false
live_since: "2025-07"
legal_jurisdiction: "Panama"
credit_rating_equiv: "BB+"
settlement_lag_days: 4
underlying_managers:
  - "Libeara (Standard Chartered)"
  - "FundBridge (MAS-regulated Singapore)"
  - "Wellington Management (sub-advisor)"
---

# thBILL — Retail Risk Report

**Elevated risk · 4.5/10**

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~3% APY | Sell on DEX at NAV discount | KYC-gated, 4-day settlement | ~9 months | Ethereum, Arbitrum, Base, HyperEVM |

## Summary

thBILL is Theo Protocol's onchain wrapper around a regulated US Treasury bill fund. You buy the token, hold it, and the price slowly goes up — around 3% a year — because the underlying T-bills accrue interest. There are no rewards to claim, no rebases, no vesting. On paper, it's one of the cleanest "onchain savings account" products available in DeFi today.

The structure is three layers deep: thBILL (the token you hold) → tULTRA → a Singapore-regulated T-bill fund run by **Wellington Management** and **Standard Chartered's Libeara**. Wellington and Standard Chartered are the strong part — household-name institutional players. Theo, the Panama-registered entity that issues thBILL, is the weak part: young (July 2025 launch), unlicensed, and your legal claim in the worst case is against a Panama corporation, not against the underlying T-bills directly.

Appropriate for: DeFi-comfortable users sizing up to roughly $100K who want T-bill yield onchain and can absorb a ~30–100 bp exit haircut. Not appropriate if you need instant liquidity, want direct legal claim on the underlying Treasuries, or are uncomfortable with a young single issuer standing between you and your assets.

## I. Smart Contract Risk

One audit from **Zenith Audits** covering the vault and bridge contracts. No bug bounty program. Nine months of live operation with no reported exploits, forced pauses, or redemption failures — clean track record, but short.

The vault itself uses the standard ERC-4626 pattern (the common DeFi savings-vault interface), which is well-understood. Theo layers a proprietary "iToken" standard on top to handle pending-assets accounting across the 4-day off-chain settlement window. This is the novel part — it's not battle-tested outside Theo's own deployment.

**Cross-chain model.** thBILL uses LayerZero's OFT (Omnichain Fungible Token) standard to move between Ethereum, Arbitrum, Base, and HyperEVM. Bridges are where recent attacks have concentrated — the rsETH exploit on 2026-04-18 ($292M loss) was a LayerZero OFT failure, the same architectural class thBILL uses. An on-chain audit across all four EVM deployments confirms thBILL is **not** structurally exposed to the same attack class. Every peered pathway across all four chains requires **3 independent DVNs** — LayerZero Labs + Polyhedra/Google Cloud + Horizen Labs — an explicit upgrade above the 2-DVN default. rsETH's exploit hit a pathway that only required 1 DVN; thBILL's configuration would require compromising a quorum of independent providers across multiple operators, with no single-operator concentration. **Zero exposed-and-peered pathways across all four chains.** The admin Safe is the same Theo address on every chain (3-of-5 on Ethereum and Arbitrum, 3-of-4 on Base and HyperEVM). On Ethereum specifically, thBILL is structured as two contracts: the user-facing token vault (`0x5FA487…DA0b`, which is Pausable as an emergency lever) and a separate LayerZero OFTAdapter (`0xfDD22Ce6…F55A5a`) that handles cross-chain messaging.

**The caveats:** (1) Destination-chain adapter contracts were likely deployed after the single Zenith audit was completed, so that code surface is probably unaudited. A correct DVN config doesn't protect against a buggy adapter. (2) No publicly confirmed kill-switch on the OFTAdapter itself (it's not Pausable); pause control runs through the underlying token vault. The pauser identity on the vault is not publicly disclosed. (3) The Theo admin Safe at the same address operates with different thresholds across chains — 3-of-5 on Ethereum and Arbitrum, 3-of-4 on Base and HyperEVM. Small inconsistency worth confirming with Theo. (4) Several unpeered pathways have burn-address DVN defaults — not exploitable today (no peer set), but if Theo ever activates one of those chains the burn DVN would block message delivery until receive config is replaced.

**Admin powers.** A 2-of-4 multisig can pause the contract in emergencies. A 3-of-5 owner multisig controls upgrades and parameter changes. There is **no timelock** on admin actions — changes can take effect immediately. Signer identities are not publicly disclosed. Practically: if Theo decides to change how the protocol works tomorrow, there's no notice period and no way for a holder to exit first.

**What to watch:** the Zenith audit report (publicly available) and any announcements of contract upgrades, parameter changes, or redemption-policy changes. Read them carefully before they take effect.

Clean track record so far, but single audit + no bug bounty + no timelock + novel iToken component + likely-unaudited bridge adapter = limited margin of safety.

## II. Economic / Market Risk

### How yield works

thBILL's price goes up over time. At launch ($1.00), today (~$1.023), roughly +3% annualized. You pay nothing and claim nothing — yield is the difference between buy price and sell price. The underlying T-bills pay interest to the fund; the fund's NAV ticks up; thBILL's NAV ticks up with it.

### Getting in and out

**Getting in** is easy — buy on a DEX. The deepest venues today are Project X on HyperEVM (thBILL/USDT0, ~$740K reserves) and Uniswap V3 on Arbitrum (thBILL/USDC, ~$555K). Uniswap V3 on Ethereum exists but is now thin (~$12K). Base is technically a deployment chain but has no live liquidity (~$300 across three abandoned pools). The current market price runs about 30–50 bps *below* NAV on average, which means you're buying at a small discount. That's a good thing for the buyer.

**Getting out is the catch.** Primary redemption (the official swap-back-to-USDC path) requires KYC and accredited-investor status. For most retail DeFi users, this isn't available. Your practical exit = selling on a DEX.

The secondary market prices thBILL at a persistent 30–50 bp discount to NAV. This discount is not a bug — it's structural. The only participants who can close the discount via arbitrage are KYC'd institutions, and they only arbitrage when the spread exceeds their own costs (redemption fees at the underlying fund, gas, 4-day settlement carry). So the discount has a floor, and **that floor is your real exit cost as a retail user.**

Exit sizing matters, and the picture has gotten thinner over the last six months. Total tracked DEX liquidity across all chains is now ~$1.6M against a $133M fund (down from ~$6.5M in Nov 2025). On the two deepest pools — Uniswap V3 thBILL/USDC on Arbitrum and Project X thBILL/USDT0 on HyperEVM — a 2% slippage budget clears roughly **$58K on the buy side / $196K on the sell side** on Arbitrum, and **$64K buy / $679K sell** on HyperEVM. The asymmetry is because both pools currently hold more stablecoin than thBILL, so trading thBILL → stable has more depth than the reverse. For *sells* under ~$50K on either chain you'll likely exit at the normal 30–50 bp discount. For *buys* above ~$25K, or sells above ~$200K (Arbitrum) / ~$500K (HyperEVM), expect to eat noticeably more.

**Fee note.** The underlying fund's fee schedule isn't publicly disclosed with confidence — public sources (rwa.xyz, stomarket.com) actually disagree on whether a 0.45% figure is a redemption fee or a management fee. Net: the underlying layer takes somewhere between 30 and 100 bps annually, and part of that probably comes out on redemption. This matters mostly for KYC'd holders; for retail it's baked into the DEX discount floor.

### Farming it

Three paths most retail users consider:

**1. Hold for yield.** Buy, sit, accrue NAV. The simplest path, with the least stacking risk. Net yield is ~3% after the DEX buy-side discount amortizes over your holding period. No gas after purchase, no rewards to claim, no maintenance.

**2. Pendle PT-thBILL.** Pendle offers a fixed-yield version — you buy PT-thBILL (the Principal Token) and at maturity (18-Jun-2026) it redeems to thBILL worth $1 USDC at NAV — *not* 1 whole thBILL, and *not* USDC. Pendle's accounting unit on this market is USDC, but settlement is in thBILL: you receive an amount of thBILL whose NAV equals $1 (slightly less than 1 token, since thBILL's NAV accrues against USDC over the term). So PT fixes a USDC-denominated yield, but you exit holding thBILL and still face thBILL's retail exit path (DEX, with the structural discount) to actually convert that into USDC. The Pendle UI shows this as "1 USDC in thBILL" — that framing is correct. PT markets are on Arbitrum only. What stacks: Pendle's own smart-contract risk on top of thBILL's. Pendle is well-audited and battle-tested, but you're now trusting two protocols instead of one. The fixed-rate mechanic also means you don't benefit if the thBILL NAV-vs-DEX discount narrows during your holding period — that upside goes to the YT buyer.

**3. Lending collateral (Euler).** You can supply thBILL to an Euler market to borrow stablecoins, giving you leverage on the T-bill yield. This is **advanced, and the oracle model is everything**: if the market uses a DEX-priced oracle, a temporary DEX dislocation (thin liquidity + a forced seller) can liquidate you even when the fund is perfectly healthy. If it uses a NAV-priced oracle, you're materially safer. Read the oracle config for the specific Euler market before supplying, and size assuming the oracle can and will misbehave during stress. Not recommended unless you understand the liquidation engine at the market you're using.

High-quality underlying with a working (if slow and gated) redemption path *for KYC'd holders*. For retail the picture is structurally worse: no primary access, DEX-only exit, and a market price that sits 30–50 bp below NAV almost every day. By the numbers, thBILL's retail-facing peg is materially looser than crvUSD or OUSD — the average gap to fair value is 6–15× larger and, unlike those, it doesn't mean-revert. That structural gap is why **Peg Mechanism** scores 4.0 here and the exit dynamics drag **Liquidity** to 4.0 alongside it.

## III. Project / Issuer Risk

thBILL sits on top of two very different counterparties, and the risk is concentrated in one of them.

**The strong part: Wellington Management + Libeara (Standard Chartered).** The fund underneath everything — the Delta Wellington Ultra Short Treasury On-Chain Fund — is sub-managed by Wellington Management, one of the largest asset managers in the world (~$1.2T AUM). It's tokenized by Libeara, Standard Chartered's incubated RWA platform, and operated through FundBridge Capital, a MAS-regulated (Singapore) fund manager. Custody and regulatory oversight on the actual T-bills is institutional-grade.

**The weak part: Theo Protocol Corporation.** Theo is the Panama-registered entity that issues thBILL and wraps tULTRA. Theo is **not a licensed financial institution anywhere.** The founders are public (ex-Optiver and IMC quant traders) and the protocol is backed by Hack VC with $20M raised in April 2025. Audits beyond the Zenith report are not publicly disclosed. The project is about nine months old.

**What this means for your legal claim.** When you hold thBILL, you do not own T-bills. You own a token issued by Theo that represents a contractual claim against Theo for a USDC-equivalent amount. If Theo becomes insolvent, your recovery depends on Panamanian corporate proceedings against a non-regulated issuer. There is **no bankruptcy remoteness** — no legal firewall between Theo's other obligations and the assets backing thBILL. This is the structural gap between thBILL and its institutional peers (BUIDL, USTB, USYC), which use Cayman or 3(c)(7) fund structures that give holders direct legal claim on the fund's assets.

The practical read: the T-bills backing thBILL are extremely safe, but the wrapper isn't. Your risk is mostly about whether Theo (the Panama company) continues to exist and operate competently, not about whether US Treasuries default.

Strong asset quality undermined by a young, unlicensed, non-bankruptcy-remote issuer.

## Bottom Line

| | |
|---|---|
| **Overall Risk** | **4.5/10 — Elevated** |
| Peg Mechanism | 4.0/10 |
| Backing | 5.5/10 |
| Liquidity | 4.0/10 |
| Issuer | 4.5/10 |

**On the scoring rubric.** This retail report scores on peg / backing / liquidity / issuer — the same axes used for stablecoins like crvUSD and OUSD — because the question a retail user actually faces is *"is this onchain dollar safe and how do I get out?"* The institutional companion report scores on contract / economic / project, which is more useful when you have primary-redemption access. **Liquidity** gets its own dial here precisely because retail can't redeem and must exit on-DEX at the structural discount floor.

**Who it's for:** DeFi-comfortable users who want T-bill yield onchain, are sizing under ~$100K, and are OK absorbing 30–100 bps of exit friction. Good fit for "idle stablecoin parking" with a yield premium over holding USDC directly.

**Who should avoid:** Anyone who needs instant redemption, wants direct legal ownership of the underlying Treasuries, is risk-averse to issuers under one year old, or is sizing positions larger than DEX depth can clear without material slippage.

**For deeper detail** — full audit findings, bridge architecture, DVN configuration, peer comparison, governance, and primary-redemption mechanics — see the [full institutional report](/reports/thbill-full/request) (email-gated, ~13,500 words).

**A note on what this report doesn't cover.** This analysis combines what we can verify on-chain with what's publicly documented. Some attack classes — a recent example: the rsETH single-DVN bridge exploit in April 2026 — only become visible after they manifest in production; our methodology is retrospective on novel risks. We also cannot fully audit the underlying T-bill custody chain at Standard Chartered, Wellington Management's portfolio composition, the MPC operator's signer composition, or the Zenith audit report (acknowledged by Theo's docs but not publicly linked). Sized positions should leave room for residual unknowns this analysis cannot enumerate.

## Corrections

This report is based on publicly available documentation and on-chain analysis only — we don't have access to any private information Theo or Libeara may hold. If anything here is wrong, reach us at **info@tidresearch.com** and we'll correct the next revision.
