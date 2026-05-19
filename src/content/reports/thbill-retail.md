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
last_verified: "2026-05-19"
live_dashboard_url: "https://todayindefi.github.io/thbill-risk-info/"
production: true
issuer: "Theo Protocol Corporation"
peg_mechanism_score: 3.0
backing_score: 5.0
liquidity_score: 3.5
issuer_score: 4.5
overall_score: 4.0
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

**Elevated risk · 4.0/10**

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| \~3% APY | Sell on DEX at NAV discount | KYC-gated, 4-day settlement | \~9 months | Ethereum, Arbitrum, Base, HyperEVM |

> Deeper analysis in the **[full institutional report →](/reports/thbill-full/request)** — free, email-gated.

## What this asset is now (read first)

thBILL has been repositioned as a **backing asset for Theo's stablecoin product [thUSD](/reports/thusd)** rather than a consumer-facing T-Bill wrapper. **The majority of thBILL is held intra-protocol by the thUSD reserve** (typically running in the 55-70% range); the external float — the portion accessible to retail and secondary markets — is materially smaller than the headline supply implies. The dedicated `theo.xyz/thbill` page redirects to docs only and `app.theo.xyz` has migrated its primary mint and transparency UI to thUSD-first. Live holder-attribution split on the dashboard.

**If you're a new retail allocator looking for Theo yield, see the [thUSD report](/reports/thusd) instead.** thBILL is now best read as either (a) a backing asset for thUSD, useful to understand if you hold thUSD; or (b) institutional T-Bill exposure for KYC'd allocators with primary-redemption access.

## Summary

thBILL is Theo Protocol's onchain wrapper around a regulated US Treasury bill fund. You buy the token, hold it, and the price slowly goes up — around 3% a year — because the underlying T-bills accrue interest. There are no rewards to claim, no rebases, no vesting. On paper, it's one of the cleanest "onchain savings account" products available in DeFi today.

The structure is three layers deep: thBILL (the token you hold) → tULTRA → a Singapore-regulated T-bill fund run by **Wellington Management** and **Standard Chartered's Libeara**. Wellington and Standard Chartered are the strong part — household-name institutional players. Theo, the Panama-registered entity that issues thBILL, is the weak part: under a year old (launched July 2025), unlicensed, and your legal claim in the worst case is against a Panama corporation, not against the underlying T-bills directly.

**Most retail allocators looking for Theo yield should look at [thUSD](/reports/thusd) instead.** thBILL is now primarily a backing asset for thUSD; new retail mint flows have effectively migrated. This report remains useful for existing thBILL holders and KYC'd allocators evaluating institutional-grade T-Bill exposure.

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

thBILL's price goes up over time. At launch ($1.00), today (\~$1.023), roughly +3% annualized. You pay nothing and claim nothing — yield is the difference between buy price and sell price. The underlying T-bills pay interest to the fund; the fund's NAV ticks up; thBILL's NAV ticks up with it.

### Getting in and out

**Getting in** is easy — buy on a DEX. The deepest venues are typically Project X on HyperEVM (thBILL/USDT0) and Uniswap V3 on Arbitrum (thBILL/USDC); concentration between them shifts over time. The Ethereum Uniswap V3 pool exists but is thin; Base is a deployment chain with no live liquidity. The market price trades **persistently below NAV by single bps to low hundreds of bps**. The pre-Apr-2026 baseline ran around −20 bps; through April the discount widened to the −80 to −150 bps band following the April 27 stress event, then tightened back to a −20 to −60 bps daily-average regime by mid-May 2026 with intra-day prints crossing back to flat. The range and direction are not stable: a stress event can re-widen it materially, and recovery typically takes weeks rather than days because there is no competitive arbitrage market enforcing the peg. Live discount + per-chain peg history on [the live dashboard](#live-dashboard).

**Silent-supply mutation.** thBILL's contract emits **zero on-chain events** during mints and burns — direct polling of `totalSupply()` is the only way to see supply changes (same architectural pattern documented for tULTRA at the underlying layer). Practical implication: standard ERC-20 indexers (Etherscan, Dune, The Graph) cannot track thBILL flows. [The live dashboard](#live-dashboard)'s redemption-pulse panel surfaces these silent supply mutations directly.

**Getting out is the catch.** Primary redemption (the official swap-back-to-USDC path) requires KYC and accredited-investor status. For most retail DeFi users, this isn't available. Your practical exit = selling on a DEX.

The secondary market prices thBILL at a persistent discount to NAV. This discount is not a bug — it's structural. The only participants who can close it via arbitrage are KYC'd institutions, and they only arbitrage when the spread exceeds their own costs (redemption fees at the underlying fund, gas, 4-day settlement carry). So the discount has a floor, and **that floor is your real exit cost as a retail user.** Empirically, primary redemption was historically dominated by a single Theo operator address; in May 2026 a recurring small-cadence redeemer (`0x5e6f5946…`, ~50K-thBILL bursts roughly weekly) became active alongside it — provenance not on-chain-disclosed. Even with a second burn-side participant, there is no competitive arbitrage market enforcing the peg, so the discount is not mechanically pulled back.

Exit sizing matters. Aggregate DEX TVL has been running in the low-single-digit-million range against a fund TVL on the order of $130M+ — a low-single-digit-% ratio. The two-deepest-pools structure typically holds more stablecoin than thBILL, so trading thBILL → stable has more depth than the reverse: 2% sell-side depth runs deeper than buy-side, often by a factor of several. For sized retail exits the binding constraint is buy-side depth (when KYC arbs need to close the spread) rather than sell-side. Live 2% buy/sell depth per venue on [the live dashboard](#live-dashboard).

**Stress-event data point (positive — April 27, 2026).** The fund processed a single $65.3M redemption (~33% of supply at the time, the largest on record) cleanly via Theo's primary path — no contract failure, no bridge incident, no backing-ratio break. The structural plumbing held under the largest stress test thBILL has seen. The cost paid was on the secondary peg, not on the redemption rails. The secondary discount did widen materially in the weeks following (peaks in the −80 to −150 bps band) before tightening back to a −20 to −60 bps daily-average regime by mid-May — i.e. the post-stress repricing wasn't permanent, but it took roughly three weeks to normalize. The multi-week recovery window is itself the exit-cost signal — anyone forced to exit during the dislocation paid materially more than baseline. The underlying mechanics held throughout.

**Fee note.** The underlying fund's fee schedule isn't publicly disclosed with confidence — public sources (rwa.xyz, stomarket.com) actually disagree on whether a 0.45% figure is a redemption fee or a management fee. Net: the underlying layer takes somewhere between 30 and 100 bps annually, and part of that probably comes out on redemption. This matters mostly for KYC'd holders; for retail it's baked into the DEX discount floor.

### Farming it

Three paths most retail users consider:

**1. Hold for yield.** Buy, sit, accrue NAV. The simplest path, with the least stacking risk. Net yield is \~3% after the DEX buy-side discount amortizes over your holding period. No gas after purchase, no rewards to claim, no maintenance.

**2. Pendle PT-thBILL.** Pendle offers a fixed-yield version — you buy PT-thBILL (the Principal Token) and at maturity (18-Jun-2026) it redeems to thBILL worth $1 USDC at NAV — *not* 1 whole thBILL, and *not* USDC. Pendle's accounting unit on this market is USDC, but settlement is in thBILL: you receive an amount of thBILL whose NAV equals $1 (slightly less than 1 token, since thBILL's NAV accrues against USDC over the term). So PT fixes a USDC-denominated yield, but you exit holding thBILL and still face thBILL's retail exit path (DEX, with the structural discount) to actually convert that into USDC. The Pendle UI shows this as "1 USDC in thBILL" — that framing is correct. PT markets are on Arbitrum only. What stacks: Pendle's own smart-contract risk on top of thBILL's. Pendle is well-audited and battle-tested, but you're now trusting two protocols instead of one. The fixed-rate mechanic also means you don't benefit if the thBILL NAV-vs-DEX discount narrows during your holding period — that upside goes to the YT buyer.

**3. Lending collateral (Euler).** You can supply thBILL to an Euler market to borrow stablecoins, giving you leverage on the T-bill yield. This is **advanced, and the oracle model is everything**: if the market uses a DEX-priced oracle, a temporary DEX dislocation (thin liquidity + a forced seller) can liquidate you even when the fund is perfectly healthy. If it uses a NAV-priced oracle, you're materially safer. Read the oracle config for the specific Euler market before supplying, and size assuming the oracle can and will misbehave during stress. Not recommended unless you understand the liquidation engine at the market you're using.

High-quality underlying with a working (if slow and gated) redemption path *for KYC'd holders*. For retail the picture is structurally worse: no primary access, DEX-only exit, and a market price that sits persistently below NAV. By the numbers, thBILL's retail-facing peg is materially looser than crvUSD or OUSD — the average gap to fair value is roughly an order of magnitude larger and, unlike those, it doesn't mean-revert. That structural gap is why **Peg Mechanism** scores 3.0 here and the exit dynamics drag **Liquidity** to 3.5 alongside it.

### thBILL as backing for thUSD — practical implications

The repositioning covered at the top of this report (majority of thBILL held intra-protocol by the thUSD reserve, typically 55-70% range; consumer-facing front-end migrated to thUSD; the relevant external float is materially smaller than the headline supply implies) has two retail-facing implications worth surfacing in the risk discussion specifically:

- The headline backing ratio surfaced on [the live dashboard](#live-dashboard) will periodically dip below 100% on the on-chain-only tier as Theo mints new thBILL ahead of the corresponding ULTRA arrival from Libeara (cyclic Stage A pattern, T+1 to T+7 settlement window). The economic tier (which credits the in-flight Libeara receivable) stays near 100%. This is structural, not a stress signal — escalation thresholds are a persistent dip past T+7 (warn) and past T+14 (escalate). The validator surfaces `stage_a_warn` / `stage_a_escalate` flags directly.
- A stress event in thUSD (e.g., a sized thUSD redemption rush) would propagate into thBILL via the reserve. thUSD's "100% backed" claim relies on thBILL coverage at NAV, which itself relies on Libeara's settlement infrastructure. Each layer attests honestly to the layer above, but the chain is only as resilient as its weakest link. For most use cases this works; in stress it's a coupled system.

## Live dashboard

A live monitoring view is available at [todayindefi.github.io/thbill-risk-info](https://todayindefi.github.io/thbill-risk-info/) — refreshed hourly from on-chain RPC reads, Libeara NAV attestation, and DEX depth probes. It surfaces the signals discussed above as standalone panels:

- **Backing ratio** (three tiers: physical / on-chain-only / economic — only the economic tier credits in-flight Libeara settlement, so the on-chain-only tier is the one that periodically dips during Stage A windows).
- **Holder attribution** (External float vs thUSD reserve vs OFT-adapter-locked) — answers *"how much thBILL is actually accessible to retail vs intra-protocol?"*
- **Per-chain peg** (VWAP vs NAV with 7-day premium/discount history, by chain).
- **Pool depth and 2% buy/sell depth** (the numbers you'd actually exit against).
- **Redemption pulse** (24h supply delta + days since last on-chain burn — catches the silent supply mutations that standard ERC-20 indexers miss).

For sizing decisions, the holder-attribution and per-chain peg panels are the two that bind first.

## III. Project / Issuer Risk

thBILL sits on top of two very different counterparties, and the risk is concentrated in one of them.

**The strong part: Wellington Management + Libeara (Standard Chartered).** The fund underneath everything — the Delta Wellington Ultra Short Treasury On-Chain Fund — is sub-managed by Wellington Management, one of the largest asset managers in the world (\~$1.2T AUM). It's tokenized by Libeara, Standard Chartered's incubated RWA platform, and operated through FundBridge Capital, a MAS-regulated (Singapore) fund manager. Custody and regulatory oversight on the actual T-bills is institutional-grade.

**The weak part: Theo Protocol Corporation.** Theo is the Panama-registered entity that issues thBILL and wraps tULTRA. Theo is **not a licensed financial institution anywhere.** The founders are public (ex-Optiver and IMC quant traders) and the protocol is backed by Hack VC with $20M raised in April 2025. Audits beyond the Zenith report are not publicly disclosed. The project is about nine months old.

**What this means for your legal claim.** When you hold thBILL, you do not own T-bills. You own a token issued by Theo that represents a contractual claim against Theo for a USDC-equivalent amount. If Theo becomes insolvent, your recovery depends on Panamanian corporate proceedings against a non-regulated issuer. There is **no bankruptcy remoteness** — no legal firewall between Theo's other obligations and the assets backing thBILL. This is the structural gap between thBILL and its institutional peers (BUIDL, USTB, USYC), which use Cayman or 3(c)(7) fund structures that give holders direct legal claim on the fund's assets.

The practical read: the T-bills backing thBILL are extremely safe, but the wrapper isn't. Your risk is mostly about whether Theo (the Panama company) continues to exist and operate competently, not about whether US Treasuries default.

Strong asset quality undermined by a young, unlicensed, non-bankruptcy-remote issuer.

## Bottom Line

| | |
|---|---|
| **Overall Risk** | **4.0/10 — Elevated** |
| Peg Mechanism | 3.0/10 |
| Backing | 5.0/10 |
| Liquidity | 3.5/10 |
| Issuer | 4.5/10 |

**On the scoring rubric.** This retail report scores on peg / backing / liquidity / issuer — the same axes used for stablecoins like crvUSD and OUSD — because the question a retail user actually faces is *"is this onchain dollar safe and how do I get out?"* The institutional companion report scores on contract / economic / project, which is more useful when you have primary-redemption access. **Liquidity** gets its own dial here precisely because retail can't redeem and must exit on-DEX at the structural discount floor.

**Who it's for:** Existing thBILL holders who want to understand current backing and exit dynamics. KYC'd allocators evaluating institutional-grade T-Bill exposure with primary-redemption access. Holders of thUSD who want to inspect the largest reserve component of that product. **New retail allocators seeking Theo yield should look at [thUSD](/reports/thusd) instead — the consumer-facing front-end has migrated.**

**Who should avoid:** Anyone who needs instant redemption, wants direct legal ownership of the underlying Treasuries, is risk-averse to issuers under one year old, or is sizing positions larger than DEX depth can clear without material slippage.

**For deeper detail** — full audit findings, bridge architecture, DVN configuration, peer comparison, governance, and primary-redemption mechanics — see the [full institutional report](/reports/thbill-full/request) (email-gated, \~13,500 words).

**A note on what this report doesn't cover.** This analysis combines what we can verify on-chain with what's publicly documented. Some attack classes — a recent example: the rsETH single-DVN bridge exploit in April 2026 — only become visible after they manifest in production; our methodology is retrospective on novel risks. We also cannot fully audit the underlying T-bill custody chain at Standard Chartered, Wellington Management's portfolio composition, the MPC operator's signer composition, or the Zenith audit report (acknowledged by Theo's docs but not publicly linked). Sized positions should leave room for residual unknowns this analysis cannot enumerate.

## Corrections

This report is based on publicly available documentation and on-chain analysis only — we don't have access to any private information Theo or Libeara may hold. If anything here is wrong, reach us at **info@tidresearch.com** and we'll correct the next revision.
