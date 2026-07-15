---
asset: "USDe"
slug: "usde"
aliases: ["USDe", "Ethena USDe", "Ethena Synthetic Dollar"]
chains: ["eth", "arbitrum", "base", "optimism", "bsc", "mantle", "blast", "fraxtal"]
category: "stablecoin"
peg_mechanism: "Hybrid (institutional credit + RWA + 11% residual basis trade)"
assessment_type: "full"
audience: "retail"
date: "2026-06-10"
last_verified: "2026-07-15"
featured: false
production: true
issuer: "Ethena Labs"
audited_reserves: true
market_cap_approx: 4480000000
peg_mechanism_score: 6.5
backing_score: 6.5
liquidity_score: 7.0
issuer_score: 7.0
overall_score: 6.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usde"
---

# USDe — Retail Risk Report

**Moderate risk · 6.5/10**

> **Issuer-published dashboard:** [app.ethena.fi/dashboards/transparency](https://app.ethena.fi/dashboards/transparency) — Ethena's own real-time transparency page, with backing composition, custodian breakdown, supply, and Reserve Fund. Verified by **Chaos Labs Edge Proof of Reserves**, **LlamaRisk**, **Chainlink Proof of Reserves**, and **HT Digital** (monthly attestation). For independent risk monitoring, see [LlamaRisk's Ethena portal](https://portal.llamarisk.com/ethena/overview). **tidresearch also runs an independent on-chain tracker of Ethena's reserve wallets** ([live dashboard](https://tidresearch.com/dashboards/?asset=usde)) — the issuer transparency page and Risk Committee feeds above remain the backing source of record.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None (stake to sUSDe for yield) | Deep DEX/CEX secondary at $1 | Mint/burn at $1 NAV (whitelisted institutions only) | ~28 months | Ethereum + 7 L2s/sidechains |

## Summary

USDe is Ethena's USD-pegged stablecoin. It launched in February 2024 as a **pure delta-neutral basis trade** — long crypto collateral, short CEX perpetuals, with the funding-rate spread paying yield to stakers of the sister token sUSDe. That framing is now about 90% out of date.

Following the **October 10, 2025 flash crash** — when a Binance internal oracle error briefly wicked USDe to $0.97 and triggered $5.7B of redemptions in a single month — Ethena materially restructured the backing portfolio. As of Q1 2026, **perpetual futures account for only ~11% of USDe backing (down from ~93% at the start of 2025)**, with the remaining ~89% allocated to liquid stablecoin reserves, institutional overcollateralized loans (Anchorage Digital, Maple Institutional, Coinbase Asset Management), and tokenized real-world assets (BlackRock's BUIDL fund via the USDtb wrapper, plus — new in June 2026 — Janus Henderson's JAAA AAA-rated CLO fund).

USDe total supply has contracted from a $14.7B September 2025 peak to **~$4.5B** (June 2026), reflecting the post-stress risk-off rotation. The **Reserve Fund** (the loss-absorption buffer that sits between adverse events and USDe holders) currently holds $62M — and the independent Risk Committee (LlamaRisk + Blockworks Advisory + Chaos Labs) considers it **~9× overcapitalized** versus current tail-risk requirements, because the dramatic reduction in funding-rate exposure has removed the dominant source of historical volatility.

The 6.5/10 score reflects (a) the legitimate de-risking from the pivot, (b) successful navigation of the October 2025 stress event (the system absorbed $1.5B+ in single-event outflows without operational losses, peg pauses, or redemption gates), and (c) genuinely deep DEX and CEX secondary liquidity. It is counterbalanced by (a) limited operating history of the new institutional credit layer (~6 months), (b) ongoing CEX and perpetuals exposure on the residual 11%, and (c) the Aave-Ethena loop concentration, which structurally exceeds 100% of USDe's float on a leveraged basis and remains a systemic spillover risk for the broader DeFi ecosystem.

If you held a "USDe is a synthetic dollar / unproven basis trade" mental model from 2024 or early 2025, this is the right time to refresh it. The system as of Q1 2026 behaves more like a managed credit portfolio with a derivatives overlay than its original design.

## What you actually earn

**Nothing on USDe itself** — yield is intentionally diverted to the staked sibling token, **sUSDe**. USDe holders accept zero yield in exchange for the $1 peg and broader DeFi compatibility. If you want yield exposure to Ethena's reserve portfolio, sUSDe is the relevant product — see the companion [sUSDe retail report](/reports/susde/) (separate cooldown risk on exit — a dynamic 1–7-day wait, 1 day as of 2026-07-15; ~3.72% APY as of Q1 2026, materially lower than the 8–40% range of the pre-pivot era).

For USDe specifically: this is a $1-peg stablecoin you hold for the peg and DeFi composability, not for yield.

## How exit works

Two paths:

**1. Secondary market (the path for retail and most institutions).** USDe is among the deepest-liquidity non-fiat-backed stablecoins in DeFi:

- **Curve** USDe/USDC and USDe/USDT pools
- **Uniswap V3** and **Balancer**
- **CEX listings:** Binance, Bybit, OKX
- Typical daily volume: $100M+ in calm conditions
- Retail-size exits clear at sub-10bps slippage in normal markets

The catch: supply has contracted about 70% from the $14.7B September 2025 peak to ~$4.5B current. Absolute liquidity depth has shrunk in lockstep. Still genuinely deep — but the cushion has thinned.

**2. Primary mint/burn at $1 NAV (whitelisted institutions only).** Ethena operates a direct mint/burn flow against the reserve portfolio for KYC'd institutional counterparties. Retail and non-whitelisted holders cannot access this path directly. Critically, **this is not a §II.4 access-asymmetry penalty in the framework sense** — the arbitrage mechanism (institutions buying discounted USDe on DEX, redeeming at $1 with Ethena) is what keeps the secondary peg tight. Retail benefits from the same peg pressure even without direct primary access.

This is the same pattern used by USDC (Circle's primary is institutional; retail uses Coinbase or DEX).

**Update (July 9, 2026):** Ethena made this primary mint/redeem **free (0bps) and settled in USDC** for its onboarded institutional counterparties. This doesn't open the door any wider — retail still can't redeem directly, and it's still whitelisted/KYC'd counterparties only — but it makes the arbitrage that holds the peg *frictionless*: a market maker can now buy discounted USDe and redeem it at $1 for essentially just gas, instead of eating fees plus slippage. In practice that means the peg should hold a little tighter in normal conditions. The caveats: it only helps while those market makers are willing and capitalized, it runs specifically through USDC (so a USDC disruption would degrade this rail), and Ethena can pause it — so it doesn't add protection in a genuine stress event.

## What October 10, 2025 actually proved

The defining stress event in USDe's history. Sequence:

1. **Trigger.** Binance internal oracle error during a broader crypto-market flash crash
2. **Wick.** USDe briefly traded to **$0.97** on Binance specifically — secondary venues less affected
3. **Redemptions.** $1B+ within hours, eventually $5.7B across October, $8.3B over two months
4. **Reserve Fund response.** $1.5B+ in single-event outflows serviced; no operational losses, no peg pause, no redemption gate
5. **Recovery.** USDe back to $1.00 within hours on all venues
6. **Post-mortem (LlamaRisk + Blockworks).** The $0.97 print was venue-specific oracle artifact, not a structural redemption-mechanism break. Backing held; the issue was Binance-internal.

This is the strongest single empirical signal in USDe's favor since launch. The system absorbed a real $1.5B+ single-event run without any of the failure modes that have brought down algorithmic or hybrid stables in the past.

## June 2026 institutional adoption

Two June 2026 developments brought meaningful TradFi and CeFi credibility — though neither changes the score, and the most consumer-facing pieces are not yet live:

- **Janus Henderson** (about $480B AUM) took a strategic ENA stake, will hold USDe as treasury cash, and supplied the JAAA AAA-CLO fund now sitting in USDe's reserves (see "What the contracts are doing"). Janus Henderson and Ethena are also co-developing **USDe/ENA ETFs and ETPs targeted for H2 2026** — these are not yet live, and a regulated product on the horizon is not the same as a regulated product in hand.
- **Coinbase** (via Coinbase Ventures) bought ENA and is rolling out a **Base savings product that distributes USDe/sUSDe yield to Coinbase's 100M+ users**. For retail this is the largest distribution channel USDe has had.

The retail takeaway: these expand distribution reach and lend institutional credibility, and the JAAA sleeve diversifies the credit book. **None of it moves the risk score** — the issuer axis already reflected Ethena's maturity, the ETFs/ETPs are still ahead, and adoption headlines are not a substitute for backing quality. One caveat worth holding: Coinbase now spans **custody, perpetuals venue, and yield distribution** for Ethena — a single-counterparty concentration to watch as that relationship deepens.

## What the contracts are doing

USDe is a standard ERC-20 token with mint/burn primitives at `0x4c9EDD5852cd905f086C759E8383e09bff1E68B3` on Ethereum, with LayerZero OFT (Omnichain Fungible Token) deployments on Arbitrum, Base, Optimism, BSC, Mantle, Blast, and Fraxtal. The token contract itself is intentionally simple — the complexity lives in Ethena's reserve management contracts and the off-chain operational stack.

What sits behind the token:

- **Liquid stablecoin reserves** — USDC at Coinbase and OES-custodied stables
- **Institutional overcollateralized loans** (new April 2026) — Ethena lends stables from USDe reserves to Anchorage Digital, Maple Institutional (the OTC institutional desk, not the Syrup retail pools), and Coinbase Asset Management. Borrowers post BTC/ETH collateral in secured triparty custody.
- **Tokenized RWAs** — BlackRock's BUIDL via the USDtb wrapper, and — new in June 2026 — **JAAA**, Janus Henderson's AAA-rated CLO fund, tokenized via Centrifuge on Solana and approved by Ethena's Risk Committee with a position cap of roughly $310M (about $200M live initially). JAAA is USDe's **first corporate-credit exposure** — it adds two new vectors: corporate-credit cyclicality and a Centrifuge/Solana tokenization layer (the token is on-chain readable on Solana; the underlying CLO NAV is fund-attested off-chain). Still planned beyond these: investment-grade corporate bond funds, short-duration and structured credit, gold futures.
- **Residual basis trade (~11%)** — BTC/ETH perpetual short positions on Binance, Bybit, OKX, Deribit, Bitfinex, executed via Off-Exchange Settlement (OES) custody through Copper, Ceffu, Cobo, Anchorage, and (since January 2026) Kraken.

The Reserve Fund — a separate $62M loss-absorption buffer — is held entirely in USDtb (about $41.98M) and a USDtb/USDC liquidity pool position (about $20.02M). Because USDtb is >90% BUIDL-backed, the Reserve Fund's stability now depends on BlackRock BUIDL's continued health. This is a structural improvement over the pre-pivot setup (which held the fund in a USDe/USDT Uniswap V3 LP — a circular dependency that LlamaRisk's pre-pivot addendum flagged as a material risk).

## Audits & security

Among the most thoroughly audited token contracts in DeFi:

| Firm | Tier |
|---|---|
| Spearbit | Top-tier |
| Cantina | Top-tier |
| Quantstamp | Mid-tier |
| Pashov Audit Group | Mid-tier |
| ChainSecurity | Mid-tier |

Plus multiple competitive audits. No known exploits across 27+ months in production. The smart-contract layer is not where the risk lives — risk lives in counterparty + RWA + residual basis layers.

**Live monitoring infrastructure** (this is the unusual strength):

- **Chaos Labs Edge Proof of Reserves** — oracle that continuously verifies total reserve $, coverage ratio, delta-neutral positioning, and governance approval. Automated threshold alerts. Published to Ethena's transparency page.
- **LlamaRisk Risk Monitor Portal** — independent real-time dashboard; LlamaRisk has been a Risk Committee member since day 1
- **Chainlink Proof of Reserves** — reserve totals as an on-chain feed
- **HT Digital (Harris & Trotter Digital)** — monthly attestation
- **Kraken Custody PoR** — weekly on-chain proof of reserves from a US state-chartered bank (added January 2026)
- **Reserve Fund Subcommittee** — monthly governance posts on Reserve Fund size, composition, recommended floor

The Risk Committee structure (LlamaRisk + Blockworks Advisory + Chaos Labs + Chainlink) provides ongoing independent governance review. ENA-token voting on protocol parameters remains absent, which LlamaRisk's pre-pivot addendum flagged as a gap — the Risk Committee mechanism is the de facto governance even without it.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg mechanism | 6.5 | Hybrid backing — 89% conventional credit-style assets + 11% residual perps. Mint/burn primary path with arb-driven secondary peg, similar to USDC/USDT; mint/redeem for whitelisted counterparties moved to 0bps in USDC on 2026-07-09, tightening the normal-conditions arb band (score unchanged — MM-only, USDC-specific, pausable). Survived October 2025 ($1.5B+ single-event outflow) without peg failure. The $0.97 wick was venue-specific oracle artifact, not redemption-mechanism break. |
| Backing | 6.5 | Reserve Fund ~9× overcapitalized vs Risk Committee floor (LlamaRisk $5–7M / Blockworks $6.3M / actual $62M). Chaos Labs Edge PoR continuously verifies reserves; Kraken Custody added weekly PoR Jan 2026. Counter-pressure: institutional loan book is new and not operationally seasoned through stress; the June 2026 JAAA AAA-CLO sleeve (first realized non-BUIDL RWA, ~$310M cap) adds credit diversification but also corporate-credit cyclicality + a Centrifuge/Solana tokenization layer — net score-neutral at current size. |
| Liquidity | 7.0 | Still genuinely deep — Curve, Uniswap V3, Balancer on DEX; Binance, Bybit, OKX on CEX; $100M+ daily volume. About 70% supply contraction from $14.7B peak to ~$4.5B current has compressed absolute depth in lockstep. Retail and mid-institutional exit at fair value remains unproblematic. |
| Issuer | 7.0 | Doxxed team (Guy Young, ex-Cerberus Capital), top-tier investors (Dragonfly, Wintermute, Maelstrom, Bybit, Deribit, OKX), regulatory engagement via Ethena GmbH (Germany), **proven through October 2025 stress**. Mature Risk Committee (LlamaRisk + Blockworks + Chaos Labs + Chainlink) + monthly Reserve Fund subcommittee posts. |
| **Overall** | **6.5** | Moderate risk |

## Who it's for

DeFi users who want a high-quality non-fiat-backed stablecoin and have refreshed their mental model to the post-pivot system. Comfortable with (a) reading external dashboards (Ethena transparency, LlamaRisk portal, Chaos Labs Edge PoR) rather than direct on-chain reserve verification, (b) institutional credit risk on the new Anchorage / Maple / Coinbase AM loan book, (c) BlackRock BUIDL dependency through the Reserve Fund, and (d) the systemic spillover dimension via the $6.4B+ Aave-Ethena loop concentration.

For yield exposure, the relevant product is sUSDe (separate report), not USDe.

## Who should avoid

- Anyone who treats "the original delta-neutral basis trade" as the binding risk frame — that's ~10% of the system now and is no longer the dominant concern
- Anyone who needs atomic, retail-accessible primary redemption at $1 NAV — that's institution-only; retail uses secondary
- Anyone whose tolerance for "off-chain credit + RWA + residual perps" is below what the post-pivot architecture actually contains
- Anyone uncomfortable with the systemic exposure that USDe stress would cascade through Aave / Morpho / Pendle loops

## What to watch

- **Reserve Fund composition.** Currently $62M = $41.98M USDtb + $20.02M USDtb/USDC LP. Any draw, composition change, or restructuring (especially the active proposal to redirect USDtb interest earnings to sUSDe holders) is a material signal. Tracked monthly on the [Ethena governance forum](https://gov.ethenafoundation.com).
- **Institutional loan book seasoning.** Anchorage Digital / Maple Institutional / Coinbase Asset Management loans are new. A borrower default or triparty custodian event would test the new structure. Per-borrower detail isn't publicly disclosed; the Risk Committee monthly posts are the lens.
- **RWA expansion.** BUIDL plus the now-live JAAA AAA-CLO sleeve (first realized step) — track its growth against the ~$310M position cap. Still planned beyond it: IG corporate bond funds, short-duration credit, structured credit, gold futures. Each addition is a new verification surface.
- **Aave / Morpho / Pendle concentration.** $6.4B+ exposure against ~$4.5B USDe float — the gap widening as supply contracts (more than 100% of supply on a leveraged basis, mostly via Pendle PT-sUSDe loops). Chaos Labs publishes ongoing analysis on Aave governance forums.
- **Funding regime on the residual 11% basis trade.** Sustained negative funding regimes would draw down the Reserve Fund — though at 9× overcapitalization the buffer is currently very large relative to plausible draws.

## A note on the architecture pivot

USDe is one of the few major stablecoins to **substantively change its backing architecture in production**, in response to a real stress event. Most stables either survive incidents with their original model intact (USDC's SVB recovery in March 2023) or fail entirely (UST in May 2022). The October 10, 2025 event triggered a different response: Ethena kept the mint/burn primary path and the broad design, but rebalanced the reserve portfolio away from its original basis-trade dominance toward conventional credit-style assets.

Whether this is more or less risky than the original design is genuinely debatable. The pivot reduces tail risk from funding-rate stress and CEX failure but expands the verification surface into institutional credit, off-chain triparty custody, and a growing RWA layer. The Risk Committee floors collapsed by ~70% (LlamaRisk $23M → $7M conservative, Feb → Mar 2026) because the math on the dominant historical tail risk genuinely changed.

The retail framing: **the system has been stress-tested at $1.5B+ single-event scale and held, with a Reserve Fund now 9× overcapitalized vs that experience**. That's a stronger empirical position than most stables of comparable scale can claim.

## A note on sUSDe

If you're reading this and considering the staked sibling sUSDe: it's the yield-bearing wrapper (~3.72% APY as of Q1 2026, down from 8–40% in the basis-trade era but with much lower variance). Exit to the primary path runs through a **cooldown silo** — there is no instant primary exit. Ethena has since shipped a **dynamic cooldown** (proposal #759) keyed on liquid backing coverage: the old fixed 7-day wait is now a coverage-tiered **1 / 3 / 5 / 7 days**, verified on-chain at **1 day** as of 2026-07-15, with an auto-extend safeguard under stress. Secondary markets are deep (Curve, Pendle) with historical mean discount of just -17bps and max -127bps. See the companion [sUSDe retail report](/reports/susde/) for the wrapper-specific risk profile.

---

*This report is based on Ethena Labs' public documentation, the Ethena transparency dashboard, third-party Risk Committee analysis (LlamaRisk, Blockworks Advisory, Chaos Labs), on-chain reads, and reporting through 2026-07-14. Some information depends on Ethena's self-disclosures (institutional loan book composition, OES margining state, off-chain trade execution) that are continuously verified by the Risk Committee but not atomically reconcilable on-chain. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*

*Revision history: 2026-07-15 — updated the sUSDe cross-references for Ethena's shipped dynamic cooldown (1–7-day coverage-tiered, 1 day on-chain); USDe scores unchanged. 2026-07-14 — synced the 2026-07-09 0bps USDC mint/redeem change (frictionless peg arbitrage, still whitelisted-only); scores unchanged. Initial production publish.*
