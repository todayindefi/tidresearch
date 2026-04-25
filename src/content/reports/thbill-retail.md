---
asset: "thBILL"
slug: "thbill"
aliases: ["thBILL", "Theo thBILL", "thbill-retail"]
chains: ["eth", "arb", "base", "avax", "hyperevm", "sol"]
category: "tokenized-treasury"
assessment_type: "light"
audience: "retail"
companion_report: "thbill-full"
date: "2026-04-22"
last_verified: "2026-04-23"
featured: true
issuer: "Theo Protocol Corporation"
market_cap_approx: 134000000
tvl_gross: 134000000
contract_score: 5.5
economic_score: 6.0
project_score: 4.5
overall_score: 5.5
audited: true
audit_count: 1
audit_firms: ["Zenith Audits"]
bug_bounty: false
team_doxxed: true
incident_history: false
is_fork: false
live_since: "2025-07"
---

# thBILL — Retail Risk Report

**Medium risk · 5.5/10**

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~3% APY | Sell on DEX at NAV discount | KYC-gated, 4-day settlement | ~9 months | Ethereum, Arbitrum, Base, Avalanche, HyperEVM, Solana |

## Summary

thBILL is Theo Protocol's onchain wrapper around a regulated US Treasury bill fund. You buy the token, hold it, and the price slowly goes up — around 3% a year — because the underlying T-bills accrue interest. There are no rewards to claim, no rebases, no vesting. On paper, it's one of the cleanest "onchain savings account" products available in DeFi today.

The structure is three layers deep: thBILL (the token you hold) → tULTRA → a Singapore-regulated T-bill fund run by **Wellington Management** and **Standard Chartered's Libeara**. Wellington and Standard Chartered are the strong part — household-name institutional players. Theo, the Panama-registered entity that issues thBILL, is the weak part: young (July 2025 launch), unlicensed, and your legal claim in the worst case is against a Panama corporation, not against the underlying T-bills directly.

Appropriate for: DeFi-comfortable users sizing up to roughly $100K who want T-bill yield onchain and can absorb a ~30–100 bp exit haircut. Not appropriate if you need instant liquidity, want direct legal claim on the underlying Treasuries, or are uncomfortable with a young single issuer standing between you and your assets.

## I. Smart Contract Risk

One audit from **Zenith Audits** covering the vault and bridge contracts. No bug bounty program. Nine months of live operation with no reported exploits, forced pauses, or redemption failures — clean track record, but short.

The vault itself uses the standard ERC-4626 pattern (the common DeFi savings-vault interface), which is well-understood. Theo layers a proprietary "iToken" standard on top to handle pending-assets accounting across the 4-day off-chain settlement window. This is the novel part — it's not battle-tested outside Theo's own deployment.

**Cross-chain model.** thBILL uses LayerZero's OFT (Omnichain Fungible Token) standard to move between Ethereum, Arbitrum, Base, Avalanche, HyperEVM, and Solana. Bridges are where recent attacks have concentrated — the rsETH exploit on 2026-04-18 ($292M loss) was a LayerZero OFT failure, the same architectural class thBILL uses. Worth looking at closely.

**The good news:** an on-chain audit (2026-04-21) confirmed thBILL's active bridge pathways require **2–3 independent DVNs** per message — DVNs are the verifiers that sign off on cross-chain messages. rsETH's exploit hit a pathway that required only **1 DVN**, so compromising a single verifier was enough. thBILL's configuration means an attacker would need to compromise a quorum of independent providers, not just one. Structurally, thBILL is *not* vulnerable to the specific class of attack that broke rsETH — this is the configuration LayerZero recommended post-incident.

**The caveats:** (1) the destination-chain adapter contracts — the code that actually mints thBILL when a cross-chain message arrives — were likely deployed after the single Zenith audit was completed, so that code surface is probably unaudited. A correct DVN config doesn't protect against a buggy adapter. (2) There are some residual default 1-DVN paths on inbound routes from obscure chains (Sei, Shimmer, Bitlayer, Sonic), exploitable only if Theo has explicitly configured the OApp for those chains — publicly it hasn't, but this couldn't be independently verified. (3) No publicly confirmed kill-switch on the bridge if something goes wrong.

**Admin powers.** A 2-of-4 multisig can pause the contract in emergencies. A 3-of-5 owner multisig controls upgrades and parameter changes. There is **no timelock** on admin actions — changes can take effect immediately. Signer identities are not publicly disclosed. Practically: if Theo decides to change how the protocol works tomorrow, there's no notice period and no way for a holder to exit first.

**What to watch:** the Zenith audit report (publicly available) and any announcements of contract upgrades, parameter changes, or redemption-policy changes. Read them carefully before they take effect.

**Score: 5.5/10** — clean so far, but single audit + no bug bounty + no timelock + novel iToken component + likely-unaudited bridge adapter = limited margin of safety.

## II. Economic / Market Risk

### How yield works

thBILL's price goes up over time. At launch ($1.00), today (~$1.023), roughly +3% annualized. You pay nothing and claim nothing — yield is the difference between buy price and sell price. The underlying T-bills pay interest to the fund; the fund's NAV ticks up; thBILL's NAV ticks up with it.

### Getting in and out

**Getting in** is easy — buy on a DEX (Uniswap V3 on Ethereum, Arbitrum, or Base). The current market price runs about 30–50 bps *below* NAV on average, which means you're buying at a small discount. That's a good thing for the buyer.

**Getting out is the catch.** Primary redemption (the official swap-back-to-USDC path) requires KYC and accredited-investor status. For most retail DeFi users, this isn't available. Your practical exit = selling on a DEX.

The secondary market prices thBILL at a persistent 30–50 bp discount to NAV. This discount is not a bug — it's structural. The only participants who can close the discount via arbitrage are KYC'd institutions, and they only arbitrage when the spread exceeds their own costs (redemption fees at the underlying fund, gas, 4-day settlement carry). So the discount has a floor, and **that floor is your real exit cost as a retail user.**

Exit sizing matters. DEX pool depth is around $1.4M on the main Arbitrum pool against a $134M fund — a 2% slippage tolerance clears roughly $225K buy / $875K sell before you eat materially more discount. For positions under ~$100K you'll likely exit at the normal 30–50 bp discount. Above that, expect worse.

**Fee note.** The underlying fund's fee schedule isn't publicly disclosed with confidence — public sources (rwa.xyz, stomarket.com) actually disagree on whether a 0.45% figure is a redemption fee or a management fee. Net: the underlying layer takes somewhere between 30 and 100 bps annually, and part of that probably comes out on redemption. This matters mostly for KYC'd holders; for retail it's baked into the DEX discount floor.

### Farming it

Three paths most retail users consider:

**1. Hold for yield.** Buy, sit, accrue NAV. The simplest path, with the least stacking risk. Net yield is ~3% after the DEX buy-side discount amortizes over your holding period. No gas after purchase, no rewards to claim, no maintenance.

**2. Pendle PT-thBILL.** Pendle offers a fixed-yield version — you buy PT-thBILL (the Principal Token) and it redeems to 1 thBILL at maturity. You lock in a rate today, and miss upside if T-bill yields rise before maturity. PT markets are on Arbitrum only. What stacks: Pendle's own smart-contract risk on top of thBILL's. Pendle is well-audited and battle-tested, but you're now trusting two protocols instead of one. The fixed-rate mechanic also means you don't benefit if the thBILL NAV-vs-DEX discount narrows during your holding period — that upside goes to the YT buyer.

**3. Lending collateral (Euler).** You can supply thBILL to an Euler market to borrow stablecoins, giving you leverage on the T-bill yield. This is **advanced, and the oracle model is everything**: if the market uses a DEX-priced oracle, a temporary DEX dislocation (thin liquidity + a forced seller) can liquidate you even when the fund is perfectly healthy. If it uses a NAV-priced oracle, you're materially safer. Read the oracle config for the specific Euler market before supplying, and size assuming the oracle can and will misbehave during stress. Not recommended unless you understand the liquidation engine at the market you're using.

**Score: 6.0/10** — high-quality underlying with a tight peg and a working (if slow and gated) redemption path, deducted for the exit-path asymmetry and fee opacity at the underlying layer.

## III. Project / Issuer Risk

thBILL sits on top of two very different counterparties, and the risk is concentrated in one of them.

**The strong part: Wellington Management + Libeara (Standard Chartered).** The fund underneath everything — the Delta Wellington Ultra Short Treasury On-Chain Fund — is sub-managed by Wellington Management, one of the largest asset managers in the world (~$1.2T AUM). It's tokenized by Libeara, Standard Chartered's incubated RWA platform, and operated through FundBridge Capital, a MAS-regulated (Singapore) fund manager. Custody and regulatory oversight on the actual T-bills is institutional-grade.

**The weak part: Theo Protocol Corporation.** Theo is the Panama-registered entity that issues thBILL and wraps tULTRA. Theo is **not a licensed financial institution anywhere.** The founders are public (ex-Optiver and IMC quant traders) and the protocol is backed by Hack VC with $20M raised in April 2025. Audits beyond the Zenith report are not publicly disclosed. The project is about nine months old.

**What this means for your legal claim.** When you hold thBILL, you do not own T-bills. You own a token issued by Theo that represents a contractual claim against Theo for a USDC-equivalent amount. If Theo becomes insolvent, your recovery depends on Panamanian corporate proceedings against a non-regulated issuer. There is **no bankruptcy remoteness** — no legal firewall between Theo's other obligations and the assets backing thBILL. This is the structural gap between thBILL and its institutional peers (BUIDL, USTB, USYC), which use Cayman or 3(c)(7) fund structures that give holders direct legal claim on the fund's assets.

The practical read: the T-bills backing thBILL are extremely safe, but the wrapper isn't. Your risk is mostly about whether Theo (the Panama company) continues to exist and operate competently, not about whether US Treasuries default.

**Score: 4.5/10** — strong asset quality undermined by a young, unlicensed, non-bankruptcy-remote issuer.

## Bottom Line

| | |
|---|---|
| **Overall Risk** | **5.5/10 — Medium** |
| Smart Contract | 5.5/10 |
| Economic / Market | 6.0/10 |
| Project / Issuer | 4.5/10 |

**Who it's for:** DeFi-comfortable users who want T-bill yield onchain, are sizing under ~$100K, and are OK absorbing 30–100 bps of exit friction. Good fit for "idle stablecoin parking" with a yield premium over holding USDC directly.

**Who should avoid:** Anyone who needs instant redemption, wants direct legal ownership of the underlying Treasuries, is risk-averse to issuers under one year old, or is sizing positions larger than DEX depth can clear without material slippage.

**For deeper detail** — full audit findings, bridge architecture, DVN configuration, peer comparison, governance, and primary-redemption mechanics — see the [full institutional report](/reports/thbill-full/request) (email-gated, ~13,500 words).
