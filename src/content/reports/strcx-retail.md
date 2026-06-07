---
asset: "STRCx"
slug: "strcx"
aliases: ["STRCx", "STRC.x", "Backed STRC", "Strategy PP Variable xStock"]
chains: ["eth", "solana", "arbitrum", "bnb", "mantle"]
category: "wrapped-token"
assessment_type: "light"
audience: "retail"
date: "2026-06-02"
last_verified: "2026-06-07"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=strc"
featured: false
production: true
issuer: "Backed Finance (Backed Assets JE Ltd.)"
yield_bearing: true
underlying_assets: ["STRC"]
volatility_score: 5.0
liquidity_score: 2.5
structural_score: 6.0
redemption_score: 3.0
underlying_score: 3.5
issuer_score: 6.0
overall_score: 3.0
---

# STRC + STRCx — Retail Risk Report

**Significant risk · 3.0/10**

> **June 2026 drawdown update (2026-06-07) — downgrade, not collapse.** A ~16% BTC drawdown since late May (about $73.6K → $61.7K) propagated down the Strategy stack — MSTR about −21%, and the underlying STRC de-anchored about −5.2% to ~$93.40, breaking its $95 dividend-bump trigger around 6/2. STRCx tracks STRC ~1:1, so the price-anchor (**Volatility 6.0 → 5.0**) and the **Underlying axis (4.5 → 3.5)** both drop and overall follows (**4.0 → 3.0**). The wrapper-specific layers are unchanged — thin Solana DEX depth, Backed issuer counterparty, and AP-gated redemption are no better or worse than before. The cut is the underlying STRC credit deteriorating, not the wrapper breaking. Strategy's mNAV (EV/BTC) is still ~1.20 premium, so this is a move toward the stress case, not a regime collapse — but the STRC credit / mNAV / BTC-bid risk flows through 1:1, and a sustained mNAV inversion would drop this further.

STRCx is **Backed Finance's tokenized form of STRC** — Strategy's (formerly MicroStrategy) Variable-Rate Series A Perpetual "Stretch" Preferred Stock (Nasdaq: STRC). It is one of Backed's "xStocks," issued 1:1 against a real STRC share held with Backed's qualified custodian. You are not buying a stablecoin and you are not buying common stock — you are buying an on-chain claim on a novel, high-yield preferred share whose price is engineered to sit near its $100 par value, with the dividend accruing into your token balance automatically.

**Who this report is for.** Two audiences:

1. **Direct STRCx holders or candidates** — a narrow set. Non-US holders willing to bridge to Solana and accept thin pool depth can use STRCx as an illiquid, single-name credit allocation. US persons and Ethereum-only holders have no working exit at retail size.
2. **Holders of stablecoins or vaults with upstream STRC family exposure** — the larger audience by dollar size. Holders of [apxUSD](/reports/apxusd/), [apyUSD](/reports/apyusd/), [sUSDat](/reports/susdat/), and [usdat](/reports/usdat/) all carry STRC or STRCx exposure through their backing baskets; this report is the canonical analysis of that underlying.

**Important context:** As of June 2026, Strategy's canonical mNAV (EV/BTC, the metric Strategy publishes) is **about 1.20 — a premium**, so its equity ATM leg remains accretive. (The "0.86 discount" figure that circulated earlier is the *common-equity coverage* ratio, MktCap/BTC — a leverage lens, not mNAV; with about $22B of debt + preferred sitting ahead of common, that ratio is mechanically below 1 and is not the funding-model signal.) On 2026-05-05 Saylor committed to a **funding mix** — cash on hand first, then opportunistic BTC sales alongside ongoing ATM — for preferred-dividend obligations like STRC; this is a funding-mix shift, not a forced replacement of a broken equity leg. The load-bearing watch item is a *future* sustained mNAV inversion (EV/BTC < 1), which would close the accretive ATM leg. The June drawdown (BTC −16%, premium compressing) is a move toward that case, not a crossing of it. See [MSTR retail report](/reports/mstr/) for the upstream Strategy issuer analysis.

| Tracks | Yield | Exit | Age | Chains |
|---|---|---|---|---|
| STRC (≈$100-par preferred) | ≈11.5% via rebasing (net of US withholding) | Non-US AP redemption, or Solana DEX | ≈4 months (live early 2026) | Ethereum + 4 (Solana, Arbitrum, BNB, Mantle) |

**Live monitoring** of mNAV regime, STRC instrument state, STRCx wrapper supply/multiplier, cash-service runway, and SEC 8-K event log is on the [live dashboard](https://tidresearch.com/dashboards/?asset=strc) — values in this report are static; the dashboard reflects current readings.

## What you actually hold

The underlying STRC is a **variable-rate perpetual preferred stock**. Three features define its risk:

- **It targets $100 par via a monthly dividend reset.** Strategy adjusts STRC's dividend rate each month to nudge the secondary price back toward $100. As of May 2026 the rate is **11.5%**, held flat for the third consecutive month, and STRC has traded slightly **below par (≈$99.75) since mid-April**. The anchor mostly holds, but it is not a hard peg — Strategy chose to let STRC drift just under par rather than ratchet the rate up to defend it.
- **It is perpetual.** STRC has no fixed redemption date, and Strategy is under no obligation to ever return your principal. Strategy can redeem partially only while at least $250M of STRC remains outstanding, or in full on certain corporate/tax events.
- **Its dividend funding now leans on a cash → BTC-stack sequence, not only equity issuance.** Strategy's ATM equity leg still works — canonical mNAV (EV/BTC) is ≈1.20, a premium, so issuance remains accretive — but on 2026-05-05 Saylor committed to a funding mix that draws cash on hand first and then **opportunistic BTC sales** for preferred-dividend service. The practical effect for STRC holders: dividend sustainability increasingly depends on the BTC stack size + price after the cash buffer, on top of capital-markets access. Strategy holds 843,738 BTC (about $53B after the June drawdown, down from $62B); see "How much runway?" below for the math. STRC remains barely a year old and the BTC-sale funding leg is similarly new — neither has been tested through a sustained BTC bear, and the June 2026 drawdown is the first real stress on the new regime (STRC de-anchored to ~$93.40). That novelty plus the live de-anchoring is the core of the **Underlying score (3.5)**.

STRCx the wrapper does nothing to soften any of this. Whatever happens to STRC happens 1:1 to STRCx.

## The Strategy funding regime — what changed in 2026

STRC's risk profile depends materially on HOW Strategy funds the dividend. The funding model has evolved through three distinct phases:

**Phase 1 (2020-2024): Equity ATM into BTC accumulation.** Strategy issued common stock at a premium to BTC NAV, used proceeds to buy more BTC. The "BTC bid flywheel" worked because mNAV stayed > 1 — every new share added BTC NAV per share for existing holders. Dividend obligations were small and easily funded from incoming capital.

**Phase 2 (mid-2025 to early 2026): Preferred issuance + ATM.** STRC introduced as a higher-coupon perpetual preferred designed to keep issuance windows open even when equity markets weakened. STRC's monthly rate-reset mechanism ratcheted from 9.0% (Aug 2025) → 11.5% (Mar 2026) as STRC traded below $100 par, defending the issuance window. ATM equity continued in parallel.

**Phase 3 (May 2026 onwards): BTC-sale funding added alongside ATM.** With mNAV (EV/BTC) still a premium (~1.20) but the BTC-bid thesis under pressure, Strategy broadened the funding mix rather than abandoning the equity leg. On 2026-05-05 Saylor publicly committed to using BTC sales to fund preferred dividends (~18,500-19,000 BTC/yr at current rates, ~2.2% of the 843K BTC stack), operationally after cash on hand is consumed. Two weeks later (2026-05-11 to 2026-05-25), Strategy executed a paradigm-case transaction: bought back $1.5B of 2029 convertible notes at an 8% discount, funded by MSTR ATM + STRC ATM + cash reserves (zero BTC sales for that transaction). Net effect: convertible debt down $1.5B, preferred notional UP by ~$5.7B (mostly new STRC), aggregate annual dividend obligation rose from ~$1.16B to ~$1.55-1.70B.

For STRC holders, the Phase 3 regime means three things:

1. **STRC issuance window stays open.** New STRC tranches keep printing because STRC investors care about credit quality + yield, not equity-NAV multiple. The all-weather property is real.
2. **Each new STRC tranche adds perpetual dividend obligation.** The 2026-05-26 transaction added ~$345-575M/yr in perpetual cash obligation in exchange for retiring $1.5B of one-time near-term debt. Structurally net-negative for STRC holders unless the rolling-issuance assumption holds indefinitely.
3. **The "BTC stack runway" is finite.** See next section.

## How much runway?

Strategy's aggregate annual cash service across all senior debt + preferred is currently **~$1.55-1.70B**. STRC alone is ~$1.40-1.55B (~85% of the total). Funding sequence: cash on hand first, then the 843K BTC stack via sales.

Strategy held **$871M cash** as of the 2026-05-25 8-K. Against the current ~$130-140M/month obligation, that is roughly **6-7 months until BTC sales operationally begin** if Strategy does not refill cash through STRC or ATM issuance. That zero-refill assumption makes the cash-exhaustion date a worst-case watermark; once the buffer runs out, the BTC stack picks up.

At flat BTC ($73K), flat preferred outstanding, current rates:

| Stack-consumption rate | Runway |
|---|---|
| STRC alone: ~19,100-21,200 BTC/yr (~2.3-2.5% of stack) | ~40-44 years |
| All preferred + senior interest: ~21,600-23,700 BTC/yr (~2.6-2.8% of stack) | ~36-39 years |

**~37 years aggregate runway is the long-horizon solvency anchor.** It's a long buffer at face value, but the framework anchors it to three fragile assumptions:

- **Flat BTC price.** A 50% BTC drop doubles the % of stack consumed per year. Runway compresses dramatically.
- **Flat preferred outstanding.** Each new STRC tranche shortens runway. A single transaction cycle (5/26) compressed runway from ~51yr to ~37yr — that's ~30% erosion from one event.
- **Flat STRC rate.** Each 25bp rate hike adds ~$30-32M/yr to the obligation on current outstanding.

The cash-exhaustion date is the binding near-term signal; the ~37-year stack runway is the long-horizon solvency anchor. The live dashboard updates both as inputs move. If the aggregate runway crosses below ~25 years (yellow threshold), it's a meaningful coverage-deterioration signal. Below 15 years (red threshold), acute stress.

## The rate ceiling — STRC's hidden constraint

STRC's monthly rate-reset has no contractual ceiling, but there's a **practical ceiling** set by Strategy's funding economics. At roughly 14-16%, STRC crosses into risky-debt yield territory:

- BTC would need to compound at > 16%/yr long-term for new STRC issuance math to remain accretive
- Beyond that, Strategy may elect **dividend suspension** over further rate hikes — at which point STRC re-rates to distressed yield and Strategy loses market access

Current state: STRC is at 11.5%. That's **~2 stress cycles away from the 14% mid-ceiling** (one "stress cycle" ≈ 125bp ratchet, observed Oct 2025 → Mar 2026). If STRC trades sub-par for another six months, Strategy ratchets to ~13.75%; another stress cycle, ~15%. Beyond that, suspension becomes a credible Strategy option rather than a theoretical one.

The rate-ceiling headroom IS the binding signal for long-term STRC holders. Track it on the live dashboard's "Cash Service Waterfall + Rate-Ceiling Overlay" panel.

Note that the rate is also **monotonically upward**: Strategy ratchets up under stress but rarely cuts even when STRC trades above par. The current 11.5% is sticky, and any future stress cycle adds permanently to Strategy's cash obligation.

## What you earn

STRCx is a **rebasing token.** The contract carries a multiplier (currently **≈1.0413**) that grows your balance to reflect the accrued STRC dividend, **net of US withholding tax**. So the ≈11.5% yield reaches you as a slowly rising token count rather than a cash payment — no claim step, no separate yield token. (Your wallet balance already reflects the multiplier.)

One caveat: the multiplier is **updated by the issuer**, so its accuracy depends on Backed's accrual process rather than an on-chain formula. This is standard for Backed's yield-bearing xStocks, but it is a trust point, not a trustless mechanism.

## How exit works

This is where most of the risk sits, and it depends heavily on **who you are and which chain you're on.**

**Primary redemption (mint/burn at Backed):** restricted to whitelisted **Authorized Participants** — accredited, KYC'd institutions, **non-US persons only**. Retail buyers and US persons have no primary path. This is the single biggest constraint and drives the **Redemption score (3.0)**.

**Secondary market:** Like Backed's other xStocks (TSLAx, COINx, NVDAx), STRCx's tradeable depth lives on **Solana** (Raydium), where xStocks trade 24/7. Verified 2026-06-02 via GeckoTerminal on the Solana mint: aggregate Solana TVL is about $807K across four pools, with the primary Raydium CLMM pool (27 days old) holding $621K TVL on $458K of 24h volume. That headline TVL overstates practical depth. The primary pool is heavily asymmetric — roughly 87% STRCx / 13% USDC, or about $539K STRCx against only $84K USDC inventory — so a single $50K USDC-out trade meaningfully drains the dollar side, and clean exits much above $30–50K per trade route through secondary pools at materially higher slippage. The pool is also currently net-servicing exits: 24h transaction count is 971 sells against 180 buys, a 5.4:1 ratio that is the mechanism eroding the dollar side. On **Ethereum** there is effectively no DEX depth, and the on-chain float is highly concentrated (two addresses hold about 68% of the Ethereum supply).

**Bottom line on exit:**
- A **non-US holder trading on Solana** has a working, if thin, secondary market.
- A **US person, or anyone holding on Ethereum only**, should treat STRCx as **near one-way liquidity** — easy to get into, hard to get out of at size.

## What the contract is doing

- **Ethereum contract:** `0x1aad217b8f78dba5e6693460e8470f8b1a3977f3` — rebasing ERC-20, 18 decimals, "Strategy PP Variable xStock."
- **Multi-chain:** live on five chains (Ethereum primary, plus Solana, Arbitrum, BNB Chain, Mantle), ≈1,072 holders, roughly $132–205M total notional (rwa.xyz, May 2026).
- **Admin:** on-chain `owner()` and `minter()` are Backed-controlled addresses with mint/burn and multiplier-update authority. This is a single point of issuer trust — standard for the Backed model, but it means Backed (not code) ultimately governs supply and the accrual multiplier.
- **Backing & attestation:** 1:1 against STRC shares at Backed's qualified custodian. Backed publishes NAV/proof-of-reserves at the **issuer level**, not as a continuous per-token on-chain feed — so backing verification leans on Backed's reports plus the custodian arrangement.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 5.0 | **Cut from 6.0 (June 2026 drawdown).** STRC is engineered near $100 par via monthly resets — more stable than a normal equity wrapper but not pegged. The ~16% BTC drawdown pushed STRC off its anchor to ~$93.40, breaking the $95 dividend-bump trigger around 6/2 — direct evidence the par-anchor bends under Strategy credit / BTC stress rather than holding. Still paying 11.5%; sensitive to rate-cap or suspension events from here. |
| Liquidity | 2.5 | Tradeable depth lives on Solana — about $807K aggregate TVL across four pools, verified 2026-06-02 via GeckoTerminal. The primary Raydium CLMM pool is heavily asymmetric (about 87% STRCx / 13% USDC; only about $84K USDC inventory against about $539K STRCx), capping practical clean exits around $30–50K per trade. A 5.4:1 sell-to-buy transaction ratio is currently eroding the dollar side. Ethereum DEX depth is effectively zero, with about 68% of the ETH float in two addresses. Below average. |
| Structural | 6.0 | Mature Backed wrapper (Swiss DLT-regulated since 2021). Rebasing ERC-20, whitelist-gated mint/burn. Held back by issuer mint/burn + multiplier authority, off-chain custodian dependency, and no continuous per-token on-chain PoR. |
| Redemption | 3.0 | **Binding constraint.** Primary redemption is non-US, accredited-AP-only. A non-US holder has a working Solana secondary exit; a US person or Ethereum-only holder faces worst-case exit asymmetry. Underlying STRC is perpetual with no obligation to return principal. |
| Underlying | 3.5 | **Cut from 4.5 (June 2026 drawdown; raw STRC 6.0 → 5.0, root-traced to MSTR 5.0 / a ~16% BTC move).** STRC is a real Nasdaq/SEC-registered preferred with a functioning ≈11.5% dividend and par-anchor — but the June drawdown is the first live test of the new funding mix, and STRC de-anchored to ~$93.40 under a routine BTC move, breaking its $95 bump trigger. Strategy's mNAV (EV/BTC) is still ~1.20 premium, capping the cut, but the STRC credit / mNAV / BTC-bid risk flows through 1:1. Rate-ceiling headroom (~2 stress cycles to 14%) is a finite budget Strategy can draw a few more times before dividend-suspension becomes a credible option; a sustained mNAV inversion would drop this further. |
| Issuer | 6.0 | Backed Finance — established Swiss DLT issuer, multiple live xStocks, established custody + attestation cadence. Single-issuer dependency, off-chain custodian, and issuer-level (not per-token) PoR keep it from scoring higher. |
| **Overall** | **3.0** | **Significant risk.** **Cut from 4.0 (June 2026 drawdown)** as the underlying STRC dropped (Volatility + Underlying), root-traced to MSTR 5.0 and a ~16% BTC move — the wrapper-specific layers are unchanged. For a non-US holder willing to size around the verified Solana depth (clean-exit ceiling around $30–50K per trade, eroding pool composition), STRCx is a thin but functioning yield-capturing on-chain proxy for STRC, now carrying a visibly de-anchoring underlying on top of Backed counterparty + custodian risk. For a US person or Ethereum-only holder, it remains a near one-way trade. This is a downgrade on underlying credit, not a wrapper failure; a sustained mNAV inversion or accelerated BTC-sale regime would drop it further. |

## Who it's for

- **Non-US holders who want STRC's ≈11.5% preferred yield on-chain** and can trade on Solana, treating STRCx as an illiquid, single-name credit allocation rather than a cash equivalent.
- Holders specifically seeking **Strategy/Bitcoin-linked preferred income** with the convenience of a composable, auto-accruing token.

## Who should avoid

- **US persons at any meaningful size.** No primary redemption + thin secondary = no realistic exit at NAV.
- **Anyone holding only on Ethereum.** The Ethereum float is concentrated and has no DEX depth; exit is near one-way.
- **Anyone treating this as a stablecoin.** It tracks a $100 preferred, not $1, and the par-anchor is a soft mechanism, not a guarantee.
- **Anyone using STRCx as leveraged collateral.** Thin secondary depth makes market-priced oracles unsafe for this asset.
- **Anyone sizing without a runway view.** Strategy's BTC-stack runway is currently ~37 years (aggregate preferred service), comfortable at first glance — but the near-term cash-exhaustion date is only ~6-7 months out at zero issuance refill, and the long-term anchor compresses fast under BTC drawdowns or continued preferred issuance growth. Size as if your STRC exposure can recur indefinitely, but also as if the BTC stack is the binding constraint that could halve in BTC bear markets.
- **Anyone assuming the 11.5% rate is the long-run yield.** STRC rate is monotonically upward — sticky under stress, rarely cuts. Realistic long-run cost-to-Strategy (and yield-to-you) is probably higher than 11.5% over a multi-year horizon. Don't model 11.5% as a permanent floor.

## What to watch

Each of these signals has a live panel on the [STRC dashboard](https://tidresearch.com/dashboards/?asset=strc):

- **mNAV (EV/BTC, currently ~1.20, premium — compressing).** This is Strategy's published mNAV; ATM equity issuance is accretive while it stays above 1.0. The binding threshold is a **sustained crossing below 1.0**, which inverts the BTC-bid flywheel and closes the accretive equity leg; sustained < 0.85 = distress. The June drawdown is compressing the premium toward that 1.0 line, not across it. (Note: the MktCap/BTC "coverage" ratio of ~0.86 that circulated earlier is a leverage lens, not mNAV — don't read it as discount.)
- **STRC's price vs par + monthly rate trajectory.** Sustained drift below $95 triggers +50bp+ rate hike (consumes ceiling headroom). Rate cut at sub-$101 price = anchor mechanism deviating from expected behavior (rare; watch).
- **Aggregate-preferred runway (currently ~37 years).** Drops below 30 years = coverage materially compressing. Drops below 15 years = acute stress. Compression vectors: BTC drawdown, new STRC issuance, rate hikes.
- **BTC-sale window (currently ~6-7 months at zero issuance refill).** Drift toward ~3 months = acute short-term stress. Extension through successful STRC or ATM cash refill = de-risking.
- **Rate-ceiling headroom (currently ~250bp to 14% mid-ceiling).** Drops below 150bp = ~1.5 stress cycles to practical ceiling. Below 50bp = next stress cycle may force suspension decision.
- **STRC outstanding tranche cadence.** Currently ~$12-13B; per-month issuance > $2B sustained = Ponzi-structure risk operational (STRC issuance funding STRC dividends).
- **MSTR + BTC price drawdowns.** A severe drawdown compresses Strategy's BTC stack value (the funding source) AND eliminates the equity-ATM optionality. Both legs of the funding model squeeze.
- **Solana pool depth for STRCx.** The only realistic non-AP exit; drainage = wrapper-layer exit deteriorating regardless of underlying. Baseline (verified 2026-06-02): about $807K aggregate across four pools; primary Raydium CLMM is about 87% STRCx / 13% USDC, capping practical clean exits around $30–50K per trade.
  - **Sell-to-buy transaction ratio in the primary pool** (currently 5.4:1 over 24h). A sustained sell-pressure regime against the asymmetric composition is how this secondary degrades from "working with slippage" to "no functional exit."
- **The rebasing multiplier's cadence.** Issuer-updated; track whether it keeps pace with the ~11.5% net dividend.

## Related reports

The upstream Strategy issuer is analyzed in the [MSTR retail report](/reports/mstr/) — that's the entity behind STRC, and the place to understand the mNAV regime, capital structure, and BTC stack dependency in depth. **Read MSTR for the upstream funding-model context.**

STRCx sits upstream of multiple downstream wrappers across the STRC family. Holders of any of these should read STRCx for the underlying analysis:

- [apxUSD](/reports/apxusd/) — Apyx's $1-pegged stablecoin wrapper; STRC-backed reserves, yield routed away.
- [apyUSD](/reports/apyusd/) — Apyx's yield-bearing sibling; captures the STRC dividend as NAV growth.
- [sUSDat](/reports/susdat/) — Saturn's yield-bearing wrapper; STRC dividend pass-through into NAV.
- [usdat](/reports/usdat/) — Saturn's permissioned non-yield stablecoin (sUSDat's underlying).

All four carry STRC family exposure indirectly through their backing baskets; STRCx is the direct, undiluted version.

---

*This report is based on Backed Finance's public documentation, Strategy Inc. SEC filings, on-chain reads, and third-party data (rwa.xyz, CoinDesk) through 2026-06-02. Live values for mNAV regime, MSTR/BTC inputs, STRC instrument state (price, dividend rate, par drift), STRCx wrapper supply across five chains, rebasing multiplier, cash-service waterfall, rate-ceiling headroom, and SEC EDGAR 8-K event log are on the [live dashboard](https://tidresearch.com/dashboards/?asset=strc). STRCx is an off-chain-backed real-world asset: backing is verified via Backed's issuer-level reports and qualified-custodian arrangement, not a continuous on-chain feed, and some details (named custodian for STRC) are not independently verified here. Strategy issuer analysis is in the companion [MSTR report](/reports/mstr/). Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
