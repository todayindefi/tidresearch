---
asset: "RLUSD"
slug: "rlusd"
aliases: ["RLUSD", "Ripple USD"]
chains: ["eth", "xrpl"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
audience: "retail"
date: "2026-07-08"
last_verified: "2026-07-08"
featured: false
production: true
issuer: "Standard Custody & Trust Company (Ripple)"
audited_reserves: true
market_cap_approx: 1780000000
peg_mechanism_score: 7.0
backing_score: 7.0
liquidity_score: 7.0
issuer_score: 7.5
overall_score: 7.0
---

# RLUSD — Retail Risk Report

**Moderate risk · 7.0/10**

> **Ripple's regulated dollar, scaling into the banks.** RLUSD is issued under a New York (NYDFS) trust charter, backed 1:1 by cash, US Treasuries and cash equivalents held in segregated accounts at BNY Mellon, with monthly attestations. In its first roughly 18 months it scaled about 4x to a multi-billion-dollar supply while holding its peg cleanly, picked up a Binance listing, went live in Japan under JFSA approval, and started landing serious institutional integrations — Deutsche Bank, a Mastercard pilot. What keeps it at 7.0 rather than higher: it's still young. It hasn't been through a severe redemption run or a multi-cycle stress, and like its regulated peers it publishes monthly attestations rather than real-time proof-of-reserves.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None | Sell on a CEX (Binance-listed) or DEX at peg; redeem 1:1 via the issuer | Mint/redeem 1:1 through Ripple's regulated trust issuer; retail exits via market | Since Dec 2024 (~18 months) | Ethereum (~82% of supply) + XRP Ledger; L2s via Wormhole in progress |

## Summary

RLUSD is Ripple's fiat-backed stablecoin, issued through **Standard Custody & Trust Company**, an **NYDFS-regulated** trust entity. It is backed 1:1 by USD deposits, US Treasuries and cash equivalents held in segregated accounts at **BNY Mellon**, with monthly third-party attestations on the reserve.

Launched in December 2024, RLUSD has scaled roughly 4x to about **$1.78 billion** (approaching $2 billion) while holding its peg, and it now sits inside the regulated dollar cluster alongside PYUSD and GUSD. Along the way it picked up a Binance listing and began expanding institutionally: a JFSA-approved Japan launch via SBI, Deutsche Bank adopting Ripple's payment infrastructure, and a Mastercard/Gemini card pilot.

The 7.0/10 reflects a well-regulated, increasingly liquid stablecoin whose main residual risks are a still-short multi-cycle track record and attestation-versus-real-time-PoR transparency — not reserve quality or issuer strength. It's worth noting that RLUSD, USDT, USDG and PYUSD all cluster around 7.0 for *different* reasons. RLUSD's profile is issuer-strong and liquidity-solid but multi-cycle-record-short — close to the mirror image of USDT's liquidity-strong, issuer-opaque profile.

## What you actually earn

**Nothing native** — plain RLUSD pays no yield. You'd earn by lending it or putting it to work in DeFi and payments rails, not by holding the token. If you want a dollar that accrues yield in your wallet, RLUSD is not that product; it's a settlement and reserve dollar.

## How exit works

This is materially better than a year ago. RLUSD now carries a **Binance** Tier-1 listing plus other venues, with daily volume in the **$100M+** range, so large exits no longer hinge solely on issuer redemption — deep CEX liquidity is available at the peg. Institutions can mint and redeem 1:1 directly with the regulated issuer.

The remaining caveat is on-chain depth. DEX-native liquidity still trails USDC and USDT and is fragmented across XRP Ledger, Ethereum and the newer L2 deployments, so very large **on-chain-only** exits still benefit from routing through a CEX. For DeFi composability specifically, the Ethereum-side liquidity is what matters, and that's where the bulk of supply lives (~82%).

## What backs it

1:1 USD cash + US Treasuries + cash equivalents, held in **segregated accounts at BNY Mellon** under NYDFS oversight, with **monthly attestations**. This is a conservative, high-quality composition — the same regulatory regime that governs PYUSD and GUSD, and a genuine strength of the asset.

The knock relative to USDC is twofold and modest: attestations are **monthly and point-in-time** rather than continuous real-time proof-of-reserves, and RLUSD has a **shorter operating history** than the incumbents. Neither is a red flag on reserve quality — the composition itself is exactly what you want in a fiat-backed dollar — but both are reasons the backing score is 7.0 rather than higher.

## The issuer — Ripple

The issuer is the clearest strength here. Ripple is well-capitalized, with substantial corporate reserves and an institutional/payments orientation that aligns its incentives toward stablecoin reliability — a stablecoin failure would damage the far larger cross-border-payments business it's built around.

Two things reinforce the picture. First, the **SEC legal overhang resolved in 2024**, removing a regulatory tail risk that had hung over the company for years. Second, RLUSD's regulated reach has expanded fast since launch: a **JFSA-approved Japan launch** via SBI VC Trade, **Deutsche Bank** adopting Ripple's payment infrastructure, and a **Mastercard pilot** through the Gemini Credit Card. Standard centralized-issuer controls apply — freeze, mint and burn — which is expected for a regulated model, not a negative surprise. There are no governance red flags. That combination of capitalization, resolved regulatory status, and institutional traction is what earns the issuer axis a 7.5.

## The "still young" caveat

This is the honest limiter, and it's the single biggest reason RLUSD sits at 7.0 rather than higher despite a clean record and strong regulation. RLUSD is **about 18 months old**.

Scaling roughly 4x to a multi-billion supply while holding peg is a real, positive signal — it says the reserve and redemption operations work *at scale*, not just at launch size. But it is **not** the same thing as being tested through a severe redemption run or a genuine market crisis. USDC has been through one (the March 2023 Silicon Valley Bank scare, when it briefly depegged and then recovered); USDT has been through a decade of stress episodes. RLUSD has been through neither. How it handles its first genuine redemption run is a real, open question — and the answer isn't in the data yet.

## Multi-chain expansion

Beyond Ethereum and the XRP Ledger, RLUSD is expanding to Ethereum L2s — Optimism, Base — via **Wormhole NTT**. This broadens reach and usefulness, but it comes with the usual trade-off: it adds cross-chain and bridge surface, and it continues to fragment DEX depth across more venues.

As with any bridged stablecoin, the deepest and canonical form of RLUSD lives on the **native chains** (Ethereum and XRPL). If you're holding a bridged L2 balance, you're taking on the bridge's integrity as an additional dependency on top of the underlying token risk. This is a "know what you hold" note, not a reason to avoid the asset.

## Audits & security

RLUSD sits under NYDFS oversight with monthly attestations on reserves and BNY Mellon custody. There has been **no depeg and no exploit** since the December 2024 launch.

The residual risks are structural rather than reserve-quality problems: the short multi-cycle history, attestation-versus-real-time transparency, the cross-chain expansion surface, and the standard centralized-issuer control set (freeze/mint/burn). None of these is reserve opacity — this is a transparent, well-regulated reserve. They're the reasons a well-run young regulated dollar lands at 7.0 rather than at the top of the band.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 7.0 | Standard fiat-backed 1:1 mint/redeem via a regulated trust company; has held peg cleanly through roughly 4x scaling, but still untested under a severe redemption run. |
| Backing | 7.0 | USD cash + Treasuries + cash equivalents at an NYDFS-regulated trust, segregated at BNY Mellon, monthly attestations; conservative composition, but attestation-based rather than real-time PoR and a shorter history. |
| Liquidity | 7.0 | ~$1.78B cap with a Binance Tier-1 listing and ~$100M+ daily volume — exit no longer hinges on issuer redemption. Held at 7.0 (not higher) because DEX-native depth still trails USDC/USDT and liquidity is fragmented across XRPL, Ethereum and the new L2s. |
| Issuer | 7.5 | Ripple — well-capitalized, institutional focus, NYDFS-regulated, SEC overhang resolved, and expanding regulated/institutional reach (Japan/JFSA, Deutsche Bank, Mastercard). No governance red flags. |
| **Overall** | **7.0** | A solid, increasingly liquid regulated stablecoin appropriate for a core position; residual watch items are the still-short multi-cycle track record and attestation-versus-real-time-PoR transparency. |

## Who it's for

Holders who want a **regulated (NYDFS) dollar** from a well-capitalized institutional issuer, who value the Binance liquidity and the expanding payments and bank integrations, and who are comfortable holding a stablecoin that is only about 18 months old. If you're building around Ripple's payments rails or want a regulated dollar that isn't USDC, RLUSD is a reasonable core position.

## Who should avoid

- Anyone who requires a **multi-cycle-proven** dollar — USDC and USDT have longer, stress-tested histories, and RLUSD simply hasn't been through a severe run yet.
- Anyone who needs the **deepest DeFi-native liquidity** — on-chain depth still trails USDC/USDT and is fragmented across chains.
- Anyone who needs a **censorship-resistant** dollar — RLUSD is a freezable, centralized-issuer token by design.

## What to watch

- **First severe stress test.** RLUSD hasn't been through a genuine redemption run; how it handles the first one is the key open question for the whole thesis.
- **Real-time proof-of-reserves.** A move from monthly attestation to continuous PoR would strengthen the backing score.
- **Cross-chain (Wormhole NTT) rollout.** New L2 deployments add bridge surface; native Ethereum/XRPL remains the canonical form.
- **Institutional integrations.** Continued bank and payments adoption — Deutsche Bank, Mastercard, SBI/Japan — supports the issuer score and the liquidity trajectory.

---

*This report is based on Ripple's public documentation, NYDFS disclosures, monthly attestations (BNY Mellon custody), and market data through 2026-07-08. RLUSD is a young, centralized, freezable issuer token; its supply and multichain footprint shift over time, and it has not yet been tested through a severe redemption run. Corrections or attestation links welcome at info@tidresearch.com.*
