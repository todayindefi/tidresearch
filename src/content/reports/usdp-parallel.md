---
asset: "USDp"
slug: "usdp-parallel"
aliases: ["USDp", "Parallel USDp", "Parallelizer Dollar", "usdp-parallel"]
chains: ["sonic", "hyperevm", "avax", "eth", "base", "polygon", "arbitrum", "optimism", "sei", "bsc"]
category: "stablecoin"
peg_mechanism: "crypto-overcollateralized"
assessment_type: "light"
audience: "retail"
date: "2026-06-17"
last_verified: "2026-06-17"
featured: false
production: false
issuer: "Parallel Protocol DAO"
peg_mechanism_score: 6.0
backing_score: 5.0
liquidity_score: 4.0
issuer_score: 5.0
overall_score: 5.0
market_cap_approx: 3250000
audited: true
audit_count: 2
audit_firms: ["Certora", "Bail Security"]
audited_reserves: false
bug_bounty: false
team_doxxed: false
incident_history: false
is_fork: false
---

# USDp (Parallel) — Retail Risk Report

**Elevated risk · 5.0/10**

USDp is the US-dollar stablecoin of **Parallel V3** — the protocol formerly known as Mimo (the team behind the PAR euro stablecoin). It is a decentralized, crypto-overcollateralized dollar backed by a basket of other stablecoins and yield-bearing stable assets. **This is not Paxos USDP** — different issuer, different design; always check the contract address.

It is a genuinely small asset (about **$3.25M** in circulation) deployed across 20+ chains, originally on Sonic and now also on HyperEVM and Avalanche. Treat it as a niche, competently-built basket-dollar — not a blue-chip stablecoin.

| Yield | Exit method | Primary redemption | Age | Chains | Market cap |
|---|---|---|---|---|---|
| None (yield goes to sUSDp) | Redeem to collateral, or thin DEX | Swap back to any reserve asset at oracle value | Mimo since 2021; V3 USDp newer | Sonic, HyperEVM, Avalanche + ~7 more | ≈ $3.25M |

## Summary

USDp keeps its $1 peg through a module called the **Parallelizer** — a swapper that mints USDp against approved collateral and lets you redeem USDp back into *any* reserve asset at oracle value, backstopped by a protocol insurance fund. Because redemption is into the underlying collateral (not a market sell), the redemption path — not the small secondary market — is the real exit. The peg has held tightly in practice: it currently trades around **$0.9995**, and its lowest-ever close was $0.9837.

> One data note: some price trackers show a "$2.25 all-time high" dated 4 November 2025. That is a thin-pool junk print from the day of the broader Stream Finance crisis, **not** a real premium — ignore it.

The whole stack is **audited by Certora (formal verification) and Bail Security**, with live Hypernative monitoring — a stronger security posture than most assets this size.

## What actually backs it — and the one risk that matters

USDp's reserves are a basket of stablecoins and yield-bearing stables: frxUSD/sfrxUSD, USDe/sUSDe, USDS/sUSDS, and USDC. That keeps price volatility low but imports the risk of each underlying issuer.

**The binding risk is that the reserve whitelist also includes third-party *curated lending vaults*** — for example Silo's mevUSDC vault (run by MEV Capital) and scUSD / gami_scUSD vaults (Gami Capital). When you hold USDp you are indirectly trusting those curators' allocation decisions, and **the whitelist differs from chain to chain**. The headline "basket of stables" framing understates this; the real question is *which vaults are approved on the chain you hold on.*

## This risk already fired once — and the response worked

In **November 2025**, Stream Finance's xUSD collapsed (down to ≈ $0.26), triggering a roughly $285M contagion across DeFi. USDp had **no direct xUSD exposure**, but the Silo mevUSDC vault — an approved USDp reserve on Avalanche — had lent heavily into xUSD. Parallel's response:

- the **Emergency Guardians** multisig paused minting of USDp against mevUSDC, and
- **Keepers** withdrew all mevUSDC from the backing and replaced it with plain USDC.

**USDp took zero loss and the peg held.** Read it both ways: the curated-vault contagion vector is real and has been tested, *and* the emergency machinery did its job exactly as designed.

## Cross-chain: LayerZero, configured well

USDp bridges via **LayerZero's OFT** standard (not Chainlink CCIP or Wormhole), using a native mint/burn design — there's no single locked-collateral honeypot. On the HyperEVM↔Ethereum route the security is set to **two required independent verifiers (Nethermind + LayerZero Labs) plus one of two optional (Canary / Horizen)** — three independent verifiers in total, meaningfully stronger than LayerZero's single-verifier default. The remaining open question is governance-side: the bridge's admin contract should be confirmed as the team multisig.

## Liquidity

At about **$3.25M** supply with very thin daily secondary volume, USDp is a micro-cap. Do not plan to exit a meaningful position by selling on a DEX — the redeem-to-collateral path is what you rely on, and it depends on the protocol's modules and oracle being live.

## Bottom line

A well-audited, thoughtfully-engineered niche basket-dollar from a seasoned team, with proven incident response — but small, module-dependent, and carrying a curated-vault contagion vector that has already been stress-tested once. If you're considering holding USDp (or its yield version, [sUSDp](/reports/susdp/)), the single most important thing to check is the **live reserve whitelist on your specific chain**, since the Avalanche, HyperEVM and Sonic deployments do not back identically.

---

*This report is based on public documentation and on-chain data only. Corrections welcome: info@tidresearch.com*
