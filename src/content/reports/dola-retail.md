---
asset: "DOLA"
slug: "dola"
aliases: ["DOLA", "Dola USD", "Inverse Finance DOLA"]
chains: ["eth", "base", "arb", "optimism", "bsc", "fantom"]
category: "stablecoin"
peg_mechanism: "Debt-backed CDP (FiRM) + Peg Stability Module"
assessment_type: "light"
audience: "retail"
date: "2026-07-01"
last_verified: "2026-07-01"
featured: false
issuer: "Inverse Finance DAO"
audited_reserves: false
market_cap_approx: 39000000
peg_mechanism_score: 5.5
backing_score: 4.5
liquidity_score: 4.5
issuer_score: 5.0
overall_score: 4.5
---

# DOLA — Retail Risk Report

**Moderate risk · 4.5/10**

> **A small, DeFi-native dollar with one concentrated dependency.** DOLA is Inverse Finance's decentralized stablecoin. It isn't backed by a bank account — it's *borrowed into existence*: people post crypto collateral and mint DOLA against it. It has held its dollar peg through past crises, including the 2023 USDC scare. But two things keep it in the middle of the range: about half of everything backing DOLA is a single asset — Ethena's sUSDe — and that same sUSDe pool is also the main place you'd sell DOLA, so your backing and your exit are the same bet. On top of that, the protocol still carries about $3.4M of old bad debt from 2022 exploits. It trades slightly under a dollar (around $0.995) most of the time.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None on DOLA (stake to sDOLA for yield) | Sell on a DEX (mostly Curve DOLA/sUSDe or Uniswap DOLA/USDC) | No direct fiat redemption; peg held by a Peg Stability Module + DAO operations | Live since 2021 | Ethereum + Base / Arbitrum / Optimism / BSC / Fantom |

## Summary

DOLA is the stablecoin of **Inverse Finance**, a long-running DeFi DAO. Unlike USDC or USDT, no company holds dollars in a bank for it. Instead, more than 97% of DOLA is created through **FiRM**, Inverse's fixed-rate lending market: a borrower locks up crypto collateral (Ethena's sUSDe, Sky's sUSDS, staked ETH, wrapped BTC, and others) and mints DOLA against it — always worth less than the collateral behind it. The clever part is how the "interest" works: instead of paying a rate that ticks up every block, borrowers hold a separate token called **DBR** ("DOLA Borrowing Rights"), where one DBR lets you borrow one DOLA for a year. A smaller slice of DOLA comes from a Peg Stability Module that swaps it against other stablecoins.

DOLA is small — about $39M in circulation, with light daily trading volume — and it typically sits a touch below $1 (around $0.995). It has a real track record of holding the peg through stress, but its size and its collateral concentration are what put it at 4.5/10.

## What you actually earn

**Nothing on DOLA itself.** Plain DOLA pays no yield. To earn Inverse's savings rate, you stake DOLA into **sDOLA**, the yield-bearing version — see the companion [sDOLA retail report](/reports/sdola/). Holding DOLA is for people who want the DeFi-native dollar, not the yield.

## How exit works

There is **no "give it back for a dollar" redemption** the way Circle redeems USDC. Your exit is the open market:

- **Sell on a DEX.** The deepest pools are **Curve DOLA/sUSDe** (the single largest, around 44% of volume) and **Uniswap DOLA/USDC**, with smaller Curve DOLA/sUSDS and some liquidity on Arbitrum, Optimism, Base, BSC and Fantom.
- The peg itself is defended behind the scenes by a **Peg Stability Module** and Inverse's DAO "Fed" operations — automated and governance-run minting/swapping that leans against the peg. That keeps DOLA near $1 in normal conditions, but it is a protocol mechanism, not a personal redemption right.

**The catch worth understanding:** DOLA's deepest exit pool is DOLA/sUSDe — the *same* asset that backs most of DOLA. If sUSDe were ever under stress, the thing backing DOLA and the main pool you'd escape through would be stressed at the same moment.

## What backs it — and the sUSDe question

Every DOLA in circulation is backed by an overcollateralized crypto loan on FiRM. That's a genuinely solid design — positions are always worth more than the DOLA borrowed against them. But the *mix* is heavily concentrated:

- **About 51% of all DOLA is backed by a single collateral: Ethena's sUSDe** (the sUSDe-DOLA market). That is the dominant risk. sUSDe is itself a yield-bearing synthetic dollar with its own backing and its own risks; DOLA effectively carries a large, direct dose of Ethena exposure.
- The next largest is **Sky's sUSDS**, then staked ETH, wrapped BTC, and a tail of others.
- **INV**, Inverse's own governance token, is also accepted collateral — so a slice of DOLA is backed by the value of the protocol that issues it (a reflexive loop that can amplify a downturn).

Separately, the protocol carries roughly **$3.4M of legacy bad debt** — unbacked DOLA left over from 2022 oracle-manipulation exploits on Inverse's now-retired "Frontier" product. That's about 9% of current supply. It's walled off in a winding-down legacy contract and is being paid down out of DAO revenue, and it does **not** sit inside the healthy overcollateralized FiRM loans — but it is real structural slack the protocol is still working off. DOLA also took roughly $340K of indirect damage from the March 2026 USR stablecoin depeg, which the team pledged to cover.

There is no third-party audited proof-of-reserves in the traditional sense; instead, Inverse runs a public **transparency portal** showing FiRM markets, backing sources, and bad-debt repayment in real time. That's good on-chain transparency — but it's self-published protocol data, not an independent attestation.

## Track record

Two things pull in opposite directions here. On the plus side, DOLA **held its $1 peg through the March 2023 USDC depeg** while USDC itself fell toward $0.87 — a genuine stress test passed. On the minus side, Inverse Finance was **exploited twice in 2022** (a roughly $15.6M price-oracle manipulation in April and about $5.8M in June), and had to raise capital to plug the hole. FiRM was rebuilt afterward with simplicity and safety as the explicit goal, and there's been no repeat on the core protocol — but the history includes real losses, and the bad debt above is the residue.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 5.5 | Overcollateralized borrow-to-mint (CDP) plus a Peg Stability Module; held peg through prior stress. Held back by small scale, a mild persistent discount (around −0.5%), and an unusual DBR interest model. |
| Backing | 4.5 | Always overcollateralized, but about 51% of backing is a single asset (sUSDe), plus a reflexive INV slice and roughly $3.4M (≈9% of supply) of legacy bad debt still being repaid. |
| Liquidity | 4.5 | About $39M supply and light daily volume; the deepest exit pool (DOLA/sUSDe) is correlated with the dominant collateral, so exit and backing can stress together. |
| Issuer | 5.0 | Long-running, transparent DAO with a solid public transparency portal — but exploit-scarred (two 2022 hacks) and still servicing old bad debt. |
| **Overall** | **4.5** | A small, well-designed, overcollateralized DeFi dollar that has earned some peg credibility — but the sUSDe collateral-and-exit double-dependency and the legacy bad debt are the binding constraints. Fine as a modest DeFi-native position for users who understand the Ethena coupling; not a place to park size expecting a deep, independent exit. |

## Who it's for

DeFi-native users who want a decentralized, overcollateralized dollar and understand that they're taking on a large, concentrated dose of Ethena/sUSDe risk plus Inverse's protocol risk. It's also the on-ramp to sDOLA if you want the savings yield.

## Who should avoid

- Anyone wanting a deep, independent exit — DOLA is small and its main exit pool overlaps with its main collateral.
- Anyone trying to avoid Ethena/sUSDe exposure — about half of DOLA's backing *is* sUSDe.
- Anyone who wants an independently attested, off-chain-reserve dollar — DOLA is a crypto-collateralized CDP with self-published (if transparent) reporting.
- Anyone wanting yield from holding the token itself — that's sDOLA, not DOLA.

## What to watch

- **Ethena / sUSDe.** This is the main channel to a DOLA problem. A sUSDe wobble is your early-warning signal — it would hit DOLA's backing and its deepest exit pool at once.
- **The sUSDe share of backing.** Track it on Inverse's transparency portal; a further rise means rising concentration.
- **Bad-debt repayment.** Watch the legacy bad-debt figure trend down (or not) on the transparency portal.
- **The peg discount.** A mild sub-$1 discount is normal for DOLA; a widening one is the signal to pay attention.

---

*This report is based on Inverse Finance's public documentation and transparency portal, CoinGecko market data, and public on-chain information, through 2026-07-01. DOLA is a crypto-collateralized stablecoin whose backing mix and bad-debt balance shift over time; figures here are point-in-time. Corrections, attestations, or additional disclosures welcome at info@tidresearch.com.*
