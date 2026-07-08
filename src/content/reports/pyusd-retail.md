---
asset: "PYUSD"
slug: "pyusd"
aliases: ["PYUSD", "PayPal USD"]
chains: ["eth", "sol", "arb", "stellar"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
audience: "retail"
date: "2026-07-08"
last_verified: "2026-07-08"
featured: false
production: true
issuer: "Paxos Trust Company (on behalf of PayPal)"
audited_reserves: true
market_cap_approx: 2770000000
peg_mechanism_score: 7.5
backing_score: 8.0
liquidity_score: 6.5
issuer_score: 7.5
overall_score: 7.0
---

# PYUSD — Retail Risk Report

**Moderate risk · 7.0/10**

> **PayPal's dollar, run by one of the most-regulated issuers in crypto.** PYUSD is issued by **Paxos** — a New York (NYDFS)-supervised trust company — on behalf of **PayPal**, backed 1:1 by cash, short-dated US Treasuries and reverse repos held in bankruptcy-remote trust, with monthly attestations. On issuer and backing quality it sits near the top of the table. It has grown roughly 4x over the past year to a multi-billion-dollar supply and now dominates the Solana stablecoin market. Two things keep it at a 7.0: on-chain liquidity, while much improved, is still a step behind USDC and USDT; and PYUSD's 2026 multichain expansion added a **LayerZero cross-chain bridge layer** — a surface its deep, native Ethereum and Solana form doesn't carry.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None (PayPal has at times run promotional rewards, not a native yield) | Sell on a supporting CEX/DEX at peg; redeem 1:1 via Paxos | Mint/redeem 1:1 with Paxos; retail exits via market | Since Aug 2023 | Native on Ethereum, Solana, Arbitrum, Stellar; LayerZero transport to more |

## Summary

PYUSD is PayPal's fiat-backed stablecoin, issued and managed by **Paxos Trust Company** under **NYDFS** supervision — one of the most rigorous US stablecoin regimes. It is backed 1:1 by cash, short-dated US Treasuries and Treasury reverse repos held in bankruptcy-remote trust accounts, with **monthly attestations by Withum**.

It has grown roughly 4x over the past year to a multi-billion supply — around **$2.77 billion**, off a **peak above $4 billion** in March 2026 — the fastest growth among the major stablecoins, and it now leads the Solana stablecoin market. PYUSD is native on **Ethereum, Solana, Arbitrum and Stellar**, with a **LayerZero OFT** layer extending its reach to further chains.

The 7.0/10 reflects a top-tier regulated issuer and reserve posture, held back by two things: liquidity that is still below USDC and USDT, and a newly-added cross-chain bridge surface. On the qualities that matter most for a fiat dollar — who stands behind it and what actually backs it — PYUSD is among the strongest in the set. It sits a step below the biggest names purely on market depth and on the honesty of flagging the new multichain surface as an unverified watch item.

## What you actually earn

**Nothing native** — plain PYUSD pays no yield. PayPal has run promotional reward programs at various times, and you can put PYUSD to work in DeFi (lending on Morpho or Aave) or simply hold it inside the PayPal app, but the token itself is not yield-bearing. If you hold PYUSD, you hold it for the dollar, the distribution reach, and the issuer quality — not for a rate.

## How exit works

Institutions mint and redeem 1:1 with Paxos; retail exits happen through the secondary market, plus in-app conversion for PayPal users. Native Ethereum and Solana liquidity is genuinely deep now — PYUSD is the leading Solana stablecoin — with real DeFi integration across Morpho, Aave and Curve.

The caveat is *where* that depth lives. It is concentrated on the native chains. The long-tail LayerZero-reachable chains exist for transport and reach, not for deep local markets, so exiting a large position on one of those is a bridge-back-then-sell operation rather than a local one. For retail size on Ethereum or Solana, exit at the peg is straightforward; for large size on a bridged chain, plan the route back to a native chain first.

## What backs it

PYUSD is backed 1:1 by **cash, short-dated US Treasuries and Treasury reverse repos**, held in a **bankruptcy-remote, NYDFS-regulated trust**, with **monthly attestations by Withum**. This is a top-tier reserve profile — the same cash-and-Treasuries playbook as USDC, under one of the strongest US regulatory regimes.

Bankruptcy-remote structure matters: it means reserve assets are held for the benefit of PYUSD holders and are meant to be insulated from Paxos's own creditors if Paxos failed. The reserve is short-dated and high-quality, which minimizes duration and credit risk on the assets themselves. Backing quality is simply not the limiting factor for PYUSD's score — liquidity and the new bridge surface are.

## The issuer — Paxos + PayPal

This is a genuine strength, and it's worth being specific about why.

**Paxos** is an NYDFS-regulated trust company that has issued regulated stablecoins since 2018 (USDP). Critically, when regulators directed Paxos to stop minting BUSD in 2023, Paxos ran that issuance through an **orderly, NYDFS-supervised wind-down** — holders were made whole and redemptions continued cleanly. That episode is often mis-remembered as a black mark; in practice it *reinforced* confidence in Paxos's operational competence, because it demonstrated exactly the behavior you want from a regulated issuer under stress.

On top of Paxos sits **PayPal** — a public company with 400M+ users. That brings two things: distribution reach that few crypto-native issuers can match, and strong reputational alignment. A PYUSD reserve failure would be existential for PayPal's fintech credibility, which aligns the sponsor's incentives tightly with holders'.

Standard centralized controls apply — Paxos can freeze, mint and burn — which is expected for a regulated fiat-backed model and is the price of the regulatory wrapper. PYUSD is not a censorship-resistant dollar, and it does not pretend to be.

## The multichain / LayerZero caveat

This is the new structural point, and it deserves to be framed honestly rather than alarmingly.

PYUSD's 2026 expansion added native **Arbitrum** and **Stellar** deployments plus a **LayerZero OFT** (Omnichain Fungible Token) cross-chain transport layer reaching additional chains. An OFT bridge introduces a specific exploit class: a compromised cross-chain verifier could, in principle, mint unbacked tokens on a destination chain. That is the class of failure that drained KelpDAO's rsETH in April 2026 — a bridge-layer compromise, not a reserve failure.

Here is the part that matters for most readers: **your deep, canonical PYUSD lives on the native chains — Ethereum and Solana — and is not exposed to that class.** The exposure, to whatever extent it exists, would sit on the long-tail bridged chains, where balances are far smaller. We have flagged verifying the specific bridge security configuration (the verifier / DVN setup) as an open item, and we treat this as a **watch item, not a downgrade, today**. There is no live incident, and nothing here suggests a depeg is imminent.

The practical takeaway for retail is simple: **hold and transact PYUSD on Ethereum or Solana** unless you specifically need one of the newer chains, in which case treat bridged PYUSD as not yet proven equivalent to native.

## Audits & security

PYUSD sits under NYDFS oversight with **monthly Withum attestations** on reserves. Paxos's contract and operational track record — across PYUSD, USDP and the earlier BUSD — is mature, with **no depeg or exploit on PYUSD since its August 2023 launch**. The residual risks are, in order: liquidity depth relative to the biggest names, the new cross-chain surface, and standard centralized-issuer control. Reserve opacity is not on that list — the attestation cadence and reserve composition are among the clearer ones in the market.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 7.5 | Standard fiat-backed 1:1 mint/redeem via an NYDFS-regulated trust company; clean peg history since 2023; centralized controls (freeze/mint/burn) expected for the model. |
| Backing | 8.0 | High-quality reserves — cash, short-dated Treasuries, reverse repo — in bankruptcy-remote NYDFS trust, with monthly Withum attestations. Top-tier, the same playbook as USDC. |
| Liquidity | 6.5 | Grown ~4x to a multi-billion supply and now dominates the Solana stablecoin market, with deep DeFi integration on native ETH/SOL. Still thinner than USDC/USDT and concentrated on native chains — the long-tail LayerZero chains are transport-only. |
| Issuer | 7.5 | Paxos — NYDFS-regulated, multi-year track record — issuing for PayPal (public company, huge distribution, strong reputational alignment). One of the strongest issuer profiles in the set. |
| **Overall** | **7.0** | Top-tier regulated issuer and reserve posture, held back by liquidity still below USDC/USDT and a newly-added cross-chain bridge surface. Best held on its native Ethereum/Solana rails. |

## Who it's for

Holders who want a top-tier regulated dollar with strong reserve transparency and a public-company sponsor — primarily on Ethereum or Solana — and PayPal-ecosystem users who value in-app access to the same token. If your priority is a clean, well-attested, well-regulated dollar and you can live with centralized controls, PYUSD is a strong choice.

## Who should avoid

- Anyone needing the deepest everywhere-liquidity — that remains USDC and USDT.
- Anyone planning to hold **large size on PYUSD's long-tail bridged chains** before the cross-chain security configuration is independently verified. Stay native (ETH/SOL) for size.
- Anyone needing a **censorship-resistant** dollar — PYUSD is a freezable, centralized-issuer token by design.

## What to watch

- **Cross-chain (LayerZero OFT) security config** — the key new item. Verify the bridge's verifier / DVN setup before treating bridged PYUSD as equivalent to native. Native ETH/SOL is unaffected.
- **Liquidity trajectory** — PYUSD's growth and DeFi depth are the swing factor for its score. Continued deepening supports a higher liquidity mark over time.
- **Market-cap volatility** — supply is off its 2026 peak (from above $4B toward ~$2.77B). Large mint/burn swings are normal for a distribution-driven stablecoin and are not, by themselves, a red flag.
- **PayPal strategic commitment** — PYUSD's distribution edge depends on PayPal's continued push. A pullback would blunt the growth story that underpins the liquidity trajectory.

---

*This report is based on Paxos/PayPal public documentation, monthly Withum reserve attestations, and market data through 2026-07-08. PYUSD's supply and multichain footprint shift over time, and its cross-chain (LayerZero) bridge security configuration has not been independently verified in this report. Corrections or attestation links welcome at info@tidresearch.com.*
