---
asset: "STRCx"
slug: "strcx"
aliases: ["STRCx", "STRC.x", "Backed STRC", "Strategy PP Variable xStock"]
chains: ["eth", "solana", "arbitrum", "bnb", "mantle"]
category: "wrapped-token"
assessment_type: "light"
audience: "retail"
date: "2026-06-02"
last_verified: "2026-06-30"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=strc"
featured: false
production: true
issuer: "Backed Finance (Backed Assets JE Ltd.)"
yield_bearing: true
underlying_assets: ["STRC"]
volatility_score: 4.5
liquidity_score: 2.5
structural_score: 6.0
redemption_score: 3.0
underlying_score: 3.0
issuer_score: 6.0
overall_score: 3.0
---

# STRC + STRCx — Retail Risk Report

**Significant risk · 3.0/10**

> **June 2026 update (2026-06-29 8-K — STRC's par defense is now a discretionary soft floor; Volatility held 4.5, Underlying 2.5 → 3.0, Overall 2.0 → 3.0) — reconciled to canonical scoring.** Strategy's 06-29 "Digital Credit Capital Framework" 8-K materially changes how STRC defends its value, and it voided a worse-case scenario the prior pass was bracing for. The over-the-weekend "mNAV below 1.0" scare (which had armed a further STRC cut) reversed: mNAV recovered to **~1.01 (low-parity, back above the 1.0 line)**, and the 8-K supplied a coordinated funding-resilience package — so the armed further cut on the underlying STRC is **voided, not fired**. Two things flow through to STRCx 1:1:
> - **STRC's par mechanism is now a discretionary soft floor, not a rate-ratchet.** The framework explicitly states Strategy **"will not necessarily increase the STRC dividend rate solely because STRC trades below its stated amount."** The old reflex — *if STRC drifts below ~$95 par, hike the dividend until buyers return at $100* — is gone. Instead Strategy may defend STRC by **buying it back** (a $1.0B program with STRC the first priority, funded by selling bitcoin) or by drawing a near-doubled **$2.55B cash reserve** (under a 12-month-minimum policy). That is a **soft floor under the price, not a peg**: downside is genuinely cushioned by a discretionary issuer bid + a much larger reserve, but there is no contractual floor, no put, and no commitment to return STRC to $100 — and the buyback bid appears *because* STRC is cheap, then fades as it nears par. Mark STRC (and STRCx 1:1) to its market price **with that soft floor beneath it**, not to a par recovery.
> - **July STRC rate confirmed at 12.00%** (+50bp), now paid semi-monthly.
> - **Why the scores reconcile up to canonical:** this report's prior pass had cut the STRCx composite to 2.0 (Underlying 2.5) on the 06-26 mNAV-parity crossing — a notch below our internal canonical STRCx score, which held at 3.0 throughout (the 06-26 parity cut on the underlying *stands*, but the further 06-28 cut was voided by this 8-K). Reconciling to canon plus the genuine stabilization from the soft floor + reserve-doubling brings Underlying to 3.0 and Overall to **3.0** — still correctly below raw STRC (internal Overall 4.0) by the wrapper's −1.0 cost, and still "significant risk." Volatility holds at 4.5; the wrapper-specific layers (Liquidity / Structural / Redemption / Issuer) are unchanged. **Live watch:** a *sustained* mNAV re-break below 1.0 with the reserve drawing down would re-open the downgrade.
>
> ---
>
> **June 2026 update (2026-06-26) — mNAV crossed into PARITY; STRC look-through deepened, another half-notch down.** STRC fell further to a regular-session **~$76 (a fresh all-time low, about −24% to par)** and Strategy's **mNAV (EV/BTC) crossed from premium (~1.05) into PARITY (~1.02)** — the regime crossing. STRC's upstream funding engine (Strategy's accretive common-ATM flywheel) is now roughly neutral, so STRC's counterparty/credit look-through worsened — the internal raw-STRC score stepped to **4.0 overall** (counterparty cut). The July dividend reset is a **locked +50bp hike (→12.0%)**. STRCx tracks STRC ~1:1, so the **Underlying / STRC-look-through axis (3.0 → 2.5)** steps down to mirror STRC, and overall follows (**2.5 → 2.0**). Volatility stays 4.5 (STRC's volatility axis didn't move this round). The wrapper-specific layers (Liquidity / Structural / Redemption / Issuer) are unchanged. **What keeps this from dropping further:** the *issuer's* near-term ability to pay actually **improved** this week — Strategy's USD cash reserve jumped **$1.1B → $1.4B (06-21)**, extending runway to ~9.8 months, issuance stayed paused (4th week, not forced), and net BTC accumulation continued. This is **instrument-price stress with the funding model at its inflection**, not a Strategy credit event. **Reversion note:** a durable mNAV bounce back above ~1.05 reverts this notch.
>
> *Prior same-day pass (2026-06-26, pre-market):* STRC printed an **all-time low — $79.85 intraday 06-24, ~$80.84 (about −19% to par)** — roughly 2.4× the ~8% sub-par stress the earlier downgrade absorbed; mNAV sat right on the ~1.05 premium floor. Volatility 5.0 → 4.5 and Underlying 3.5 → 3.0, overall 3.0 → 2.5, then the parity crossing occurred intraday and drove this further half-notch.
>
> *Prior — June 2026 drawdown update (2026-06-07):* a ~16% BTC drawdown since late May (about $73.6K → $61.7K) propagated down the Strategy stack — MSTR about −21%, and the underlying STRC de-anchored about −5.2% to ~$93.40, breaking its $95 dividend-bump trigger around 6/2. The price-anchor (Volatility 6.0 → 5.0) and the Underlying axis (4.5 → 3.5) dropped and overall followed (4.0 → 3.0). The wrapper-specific layers — thin Solana DEX depth, Backed issuer counterparty, AP-gated redemption — were and remain unchanged. The cut is the underlying STRC credit deteriorating, not the wrapper breaking.

STRCx is **Backed Finance's tokenized form of STRC** — Strategy's (formerly MicroStrategy) Variable-Rate Series A Perpetual "Stretch" Preferred Stock (Nasdaq: STRC). It is one of Backed's "xStocks," issued 1:1 against a real STRC share held with Backed's qualified custodian. You are not buying a stablecoin and you are not buying common stock — you are buying an on-chain claim on a novel, high-yield preferred share whose price is engineered to sit near its $100 par value, with the dividend accruing into your token balance automatically.

**Who this report is for.** Two audiences:

1. **Direct STRCx holders or candidates** — a narrow set. Non-US holders willing to bridge to Solana and accept thin pool depth can use STRCx as an illiquid, single-name credit allocation. US persons and Ethereum-only holders have no working exit at retail size.
2. **Holders of stablecoins or vaults with upstream STRC family exposure** — the larger audience by dollar size. Holders of [apxUSD](/reports/apxusd/), [apyUSD](/reports/apyusd/), [sUSDat](/reports/susdat/), and [usdat](/reports/usdat/) all carry STRC or STRCx exposure through their backing baskets; this report is the canonical analysis of that underlying.

**Important context:** As of late June 2026, Strategy's canonical mNAV (EV/BTC, the metric Strategy publishes) sits at **low-parity (~1.01)** — it briefly dipped below 1.0 over the 06-28 weekend and recovered on the 06-29 8-K — so its equity ATM leg is no longer reliably accretive; the compounding engine is roughly neutral. (The "0.86 discount" figure that circulated earlier is the *common-equity coverage* ratio, MktCap/BTC — a leverage lens, not mNAV; with about $22B of debt + preferred sitting ahead of common, that ratio is mechanically below 1 and is not the funding-model signal.) On 2026-05-05 Saylor committed to a **funding mix** — cash on hand first, then opportunistic BTC sales alongside ongoing ATM — for preferred-dividend obligations like STRC; the 06-29 framework formalized that into a standing BTC Monetization Program plus a near-doubled $2.55B reserve and a $1.0B STRC-priority buyback. **Critically, the 06-29 framework also changed how STRC defends par** — from a reflexive "hike the dividend if STRC trades sub-$95" ratchet to a **discretionary soft floor** (buy STRC back when cheap, or draw the reserve), with no commitment to return STRC to $100. A durable bounce back above ~1.05 mNAV reverts the parity notch; a sustained re-break below 1.0 with the reserve drawing down would re-open the downgrade. See [MSTR retail report](/reports/mstr/) for the upstream Strategy issuer analysis.

| Tracks | Yield | Exit | Age | Chains |
|---|---|---|---|---|
| STRC (≈$100-par preferred) | ≈12% via rebasing (July rate, net of US withholding) | Non-US AP redemption, or Solana DEX | ≈4 months (live early 2026) | Ethereum + 4 (Solana, Arbitrum, BNB, Mantle) |

**Live monitoring** of mNAV regime, STRC instrument state, STRCx wrapper supply/multiplier, cash-service runway, and SEC 8-K event log is on the [live dashboard](https://tidresearch.com/dashboards/?asset=strc) — values in this report are static; the dashboard reflects current readings.

## What you actually hold

The underlying STRC is a **variable-rate perpetual preferred stock**. Three features define its risk:

- **It used to target $100 par via a monthly dividend reset — but as of 06-29 that defense is now a discretionary soft floor.** Through mid-2026 Strategy adjusted STRC's dividend rate each month to nudge the secondary price back toward $100, ratcheting it from 9.0% to 11.5%. That par-anchor was already visibly failing — STRC printed an **all-time low (~$74.57 intraday, before recovering to ~$82 on the rate confirmation)** and traded sub-$95 the entire month of June. Then the **06-29 "Digital Credit Capital Framework" removed the automatic up-ratchet**: Strategy now states it **"will not necessarily increase the STRC dividend rate solely because STRC trades below its stated amount."** The defense pivots to a **discretionary soft floor** — Strategy may buy STRC back (a $1.0B program, STRC first priority, BTC-funded) or draw a near-doubled **$2.55B reserve**, but it makes no commitment to return STRC to $100. The **July rate is confirmed at 12.00%** (+50bp). Bottom line: there is now a discretionary issuer bid *under* STRC, but it is a soft floor, not a peg or a put.
- **It is perpetual.** STRC has no fixed redemption date, and Strategy is under no obligation to ever return your principal. Strategy can redeem partially only while at least $250M of STRC remains outstanding, or in full on certain corporate/tax events.
- **Its dividend funding now leans on a cash → BTC-stack sequence, not only equity issuance.** Strategy's ATM equity leg has weakened — canonical mNAV (EV/BTC) sits at **low-parity (~1.01)**, so issuance is no longer reliably accretive — and the 06-29 framework formalized a funding mix that draws cash on hand first and then **opportunistic BTC sales** for preferred-dividend service. The practical effect for STRC holders: dividend sustainability increasingly depends on the BTC stack size + price after the cash buffer, on top of capital-markets access. Strategy holds **~847,363 BTC** and — importantly — its **USD cash reserve has built to ≈$2.55B (06-28)** under a 12-month-minimum policy, extending near-term coverage to ~17.3 months; see "How much runway?" below for the math. STRC remains barely a year old and the BTC-sale funding leg is similarly new — neither has been tested through a sustained BTC bear, and June 2026 became the first real stress on the new regime: STRC fell to a **fresh all-time low (~$74.57, before recovering to ~$82 on the rate confirmation)**, sustained sub-$95 for weeks, with mNAV briefly dipping below 1.0. That novelty plus the live, deep de-anchoring is the core of the **Underlying score (3.0)** — reconciled up this pass as the 06-29 soft floor put a discretionary issuer bid under STRC and the issuer's cash position roughly doubled into the stress, which is why this is instrument-price stress, not a credit event.

> **From 2026-06-30, STRC pays its dividend twice a month instead of once, and the July rate is confirmed at 12.00%** (+50bp). The payout splits into two semi-monthly payments (approved at the June 8 annual meeting; first semi-monthly payment July 15, 2026). Note the *rate-setting* logic changed on 06-29: under the revised policy the rate is no longer a reflexive sub-par ratchet — Strategy weighs it against a basket of factors and **"will not necessarily increase the STRC dividend rate solely because STRC trades below its stated amount,"** defending STRC value via the soft floor (buyback / reserve) instead. See the soft-floor reframe at the top.

STRCx the wrapper does nothing to soften any of this. Whatever happens to STRC happens 1:1 to STRCx.

## The Strategy funding regime — what changed in 2026

STRC's risk profile depends materially on HOW Strategy funds the dividend. The funding model has evolved through three distinct phases:

**Phase 1 (2020-2024): Equity ATM into BTC accumulation.** Strategy issued common stock at a premium to BTC NAV, used proceeds to buy more BTC. The "BTC bid flywheel" worked because mNAV stayed > 1 — every new share added BTC NAV per share for existing holders. Dividend obligations were small and easily funded from incoming capital.

**Phase 2 (mid-2025 to early 2026): Preferred issuance + ATM.** STRC introduced as a higher-coupon perpetual preferred designed to keep issuance windows open even when equity markets weakened. STRC's monthly rate-reset mechanism ratcheted from 9.0% (Aug 2025) → 11.5% (Mar 2026) as STRC traded below $100 par, defending the issuance window. ATM equity continued in parallel.

**Phase 3 (May 2026 onwards): BTC-sale funding added alongside ATM.** With mNAV (EV/BTC) compressing through the ~1.05 floor into parity (~1.02) as the BTC-bid thesis came under pressure, Strategy broadened the funding mix rather than abandoning the equity leg. On 2026-05-05 Saylor publicly committed to using BTC sales to fund preferred dividends (~18,500-19,000 BTC/yr at current rates, ~2.2% of the 843K BTC stack), operationally after cash on hand is consumed. Two weeks later (2026-05-11 to 2026-05-25), Strategy executed a paradigm-case transaction: bought back $1.5B of 2029 convertible notes at an 8% discount, funded by MSTR ATM + STRC ATM + cash reserves (zero BTC sales for that transaction). Net effect: convertible debt down $1.5B, preferred notional UP by ~$5.7B (mostly new STRC), aggregate annual dividend obligation rose from ~$1.16B to ~$1.55-1.70B.

For STRC holders, the Phase 3 regime means three things:

1. **STRC issuance window stays open.** New STRC tranches keep printing because STRC investors care about credit quality + yield, not equity-NAV multiple. The all-weather property is real.
2. **Each new STRC tranche adds perpetual dividend obligation.** The 2026-05-26 transaction added ~$345-575M/yr in perpetual cash obligation in exchange for retiring $1.5B of one-time near-term debt. Structurally net-negative for STRC holders unless the rolling-issuance assumption holds indefinitely.
3. **The "BTC stack runway" is finite.** See next section.

## How much runway?

Strategy's aggregate annual cash service across all senior debt + preferred is currently **~$1.55-1.70B**. STRC alone is ~$1.40-1.55B (~85% of the total). Funding sequence: cash on hand first, then the ~847K BTC stack via sales.

Strategy held **≈$2.55B cash** as of the 06-28 8-K — a buffer that has *built* from $871M (5/25) → $1.0B → $1.1B → $1.4B → $2.55B, the last leg under the 06-29 framework's **12-month-minimum reserve policy**, funded by common-stock issuance with zero forced BTC sales. Against the current ~$130-140M/month obligation, that is roughly **17.3 months until BTC sales operationally begin** if Strategy does not refill cash through STRC or ATM issuance. The buffer is building even as STRC's price falls — that is the key offset to the late-June drawdown, and it is why this stays instrument-price stress rather than a credit event. The 06-29 framework also formalized **BTC sales** (a standing Monetization Program, armed but unused — BTC flat at 847,363) and a **$1.0B STRC-priority buyback** as additional defenses. The zero-refill assumption makes the cash-exhaustion date a worst-case watermark, and once the buffer runs out, the BTC stack picks up.

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

Current state: STRC's July rate is **12.00%** (confirmed +50bp). That's **~1.5-2 stress cycles away from the 14% mid-ceiling** (one "stress cycle" ≈ 125bp ratchet, observed Oct 2025 → Mar 2026). **Important nuance as of 06-29:** the up-ratchet is no longer automatic — Strategy's revised dividend policy says it *won't necessarily* hike just because STRC is sub-par, and may instead defend STRC via the soft floor (buyback / reserve). So sub-par no longer mechanically consumes ceiling headroom; the ceiling binds only if Strategy *chooses* the rate-hike tool over the others. Either way, beyond ~14-16% suspension becomes a credible option rather than a theoretical one.

The rate-ceiling headroom IS the binding signal for long-term STRC holders. Track it on the live dashboard's "Cash Service Waterfall + Rate-Ceiling Overlay" panel.

Note that historically the rate has been **monotonically upward**: Strategy ratcheted up under stress but rarely cut even when STRC traded above par. The current 12.00% (July) is sticky, and any future stress-driven hike adds permanently to Strategy's cash obligation — though, per the 06-29 policy, Strategy now has explicit license to leave the rate flat and defend STRC via buyback/reserve instead.

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
| Volatility | 4.5 | **Held (cut from 5.0 in June 2026 on STRC's all-time low; was 6.0 pre-June).** STRC was engineered near $100 par via monthly resets — more stable than a normal equity wrapper but not pegged. STRC printed an **all-time low (~$74.57 intraday, recovering to ~$82 on the rate confirmation)**, sustained sub-$95 all month — well beyond the ~8% sub-par stress the earlier 5.0 absorbed. As of 06-29 the par defense is a **discretionary soft floor** (buyback / reserve), no longer a reflexive rate-ratchet — a bid *under* the price, not a peg. Now paying a confirmed **12.00%** (July, +50bp); increasingly sensitive to rate-cap or suspension events from here. |
| Liquidity | 2.5 | Tradeable depth lives on Solana — about $807K aggregate TVL across four pools, verified 2026-06-02 via GeckoTerminal. The primary Raydium CLMM pool is heavily asymmetric (about 87% STRCx / 13% USDC; only about $84K USDC inventory against about $539K STRCx), capping practical clean exits around $30–50K per trade. A 5.4:1 sell-to-buy transaction ratio is currently eroding the dollar side. Ethereum DEX depth is effectively zero, with about 68% of the ETH float in two addresses. Below average. |
| Structural | 6.0 | Mature Backed wrapper (Swiss DLT-regulated since 2021). Rebasing ERC-20, whitelist-gated mint/burn. Held back by issuer mint/burn + multiplier authority, off-chain custodian dependency, and no continuous per-token on-chain PoR. |
| Redemption | 3.0 | **Binding constraint.** Primary redemption is non-US, accredited-AP-only. A non-US holder has a working Solana secondary exit; a US person or Ethereum-only holder faces worst-case exit asymmetry. Underlying STRC is perpetual with no obligation to return principal. |
| Underlying | 3.0 | **Reconciled up from 2.5 (06-29 soft floor + reconciliation to canonical scoring); raw STRC internal Overall is 4.0.** STRC is a real Nasdaq/SEC-registered preferred with a functioning ~12% dividend — and June 2026 was the first live stress test of the new funding mix: STRC fell to a **fresh all-time low (~$74.57, recovering to ~$82)**, sustained sub-$95 for weeks. Strategy's **mNAV (EV/BTC)** briefly dipped below 1.0 over the 06-28 weekend, which had armed a further look-through cut — but the **06-29 8-K voided it** (mNAV recovered to ~1.01) and changed STRC's par defense into a **discretionary soft floor** (a $1.0B STRC-priority buyback + a near-doubled $2.55B reserve sit under the price). The internal raw-STRC Overall is 4.0; the prior pass had over-cut this look-through to 2.5, a notch below canon, so it reconciles to 3.0 here. The STRC credit / mNAV / BTC-bid risk flows through 1:1. A durable mNAV bounce above ~1.05 firms this; a sustained re-break below 1.0 with the reserve drawing down would drop it. |
| Issuer | 6.0 | Backed Finance — established Swiss DLT issuer, multiple live xStocks, established custody + attestation cadence. Single-issuer dependency, off-chain custodian, and issuer-level (not per-token) PoR keep it from scoring higher. |
| **Overall** | **3.0** | **Significant risk.** **Reconciled up from 2.5/2.0 (06-29 soft floor + reconciliation to canonical scoring).** The prior pass had cut the composite to 2.0 on the 06-26 mNAV-parity crossing — a notch below our internal canonical STRCx score, which held at 3.0 throughout. The 06-26 parity cut on the underlying *stands*, but the further 06-28 cut (armed when mNAV dipped below 1.0) was **voided** by the 06-29 8-K, and that framework genuinely stabilized STRC's defense: a **discretionary $1.0B STRC-priority buyback + a near-doubled $2.55B reserve** now sit under the price as a soft floor. Reconciling to canon plus that stabilization lands Overall at **3.0** — still correctly **below raw STRC** (internal Overall 4.0) by the wrapper's −1.0 cost (Backed counterparty + custodian + DEX-pool-grade liquidity + US-person/Ethereum-only exit asymmetry). For a non-US holder sizing around the verified Solana depth (clean-exit ceiling ~$30–50K per trade) STRCx is a thin but functioning yield-capturing on-chain proxy for STRC; for a US person or Ethereum-only holder it remains a near one-way trade. A durable mNAV bounce above ~1.05 firms this; a sustained re-break below 1.0 with the reserve drawing down, or an accelerated forced-BTC-sale regime, would drop it. |

## Who it's for

- **Non-US holders who want STRC's ≈11.5% preferred yield on-chain** and can trade on Solana, treating STRCx as an illiquid, single-name credit allocation rather than a cash equivalent.
- Holders specifically seeking **Strategy/Bitcoin-linked preferred income** with the convenience of a composable, auto-accruing token.

## Who should avoid

- **US persons at any meaningful size.** No primary redemption + thin secondary = no realistic exit at NAV.
- **Anyone holding only on Ethereum.** The Ethereum float is concentrated and has no DEX depth; exit is near one-way.
- **Anyone treating this as a stablecoin.** It tracks a $100 preferred, not $1, and the par-anchor is a soft mechanism, not a guarantee.
- **Anyone using STRCx as leveraged collateral.** Thin secondary depth makes market-priced oracles unsafe for this asset.
- **Anyone sizing without a runway view.** Strategy's BTC-stack runway is currently ~31 years (aggregate preferred service), comfortable at first glance — but the near-term cash-exhaustion date is ≈17.3 months out at zero issuance refill (eased by the reserve build to $2.55B), and the long-term anchor compresses fast under BTC drawdowns or continued preferred issuance growth. Size as if your STRC exposure can recur indefinitely, but also as if the BTC stack is the binding constraint that could halve in BTC bear markets.
- **Anyone assuming today's 12.00% rate is the long-run yield.** STRC's rate has trended upward — sticky under stress, rarely cut — but as of 06-29 Strategy may also hold the rate flat and defend STRC via buyback/reserve instead. Don't model the current rate as a permanent floor in either direction; the yield-to-you can drift up (further hikes) or be capped (Strategy choosing the soft-floor tools over the coupon).

## What to watch

Each of these signals has a live panel on the [STRC dashboard](https://tidresearch.com/dashboards/?asset=strc):

- **mNAV (EV/BTC, currently ~1.01 — low-parity).** This is Strategy's published mNAV; ATM equity issuance is accretive while it stays comfortably above 1.0. It briefly dipped below 1.0 over the 06-28 weekend and recovered to ~1.01 on the 06-29 8-K (voiding the armed further cut). The binding threshold now is a **durable bounce back above ~1.05** (reverts the 06-26 parity notch) versus a **sustained re-break below 1.0** with the reserve drawing down (re-opens the downgrade); sustained < 0.85 = distress. (Note: the MktCap/BTC "coverage" ratio of ~0.86 that circulated earlier is a leverage lens, not mNAV — don't read it as discount.)
- **How STRC's value is defended (soft floor, not par-ratchet).** As of 06-29 a sub-$95 price no longer auto-triggers a dividend hike — Strategy may instead bid for STRC via the **$1.0B STRC-priority buyback** or draw the **$2.55B reserve**. Watch buyback execution + reserve coverage as the live soft-floor signals, not the old "$95 → +50bp" reflex. A dividend *cut* (rate down while STRC is well below par) would signal Strategy leaning fully on buyback/reserve instead of the coupon.
- **Aggregate-preferred runway (currently ~31 years).** Drops below 30 years = coverage materially compressing. Drops below 15 years = acute stress. Compression vectors: BTC drawdown, new STRC issuance, rate hikes.
- **BTC-sale window (currently ≈17.3 months / ≈2027-12 at zero issuance refill).** Drift toward ~3 months = acute short-term stress. Extension through successful STRC or ATM cash refill (the reserve build to $2.55B pushed it out) = de-risking. The BTC Monetization Program is now armed (BTC flat at 847,363); a weekly print of holdings *below* 847,363 is the first live BTC sale into the reserve.
- **Rate-ceiling headroom (currently ~250bp to 14% mid-ceiling).** Drops below 150bp = ~1.5 stress cycles to practical ceiling. Below 50bp = next stress cycle may force suspension decision.
- **STRC outstanding tranche cadence.** Currently ~$12-13B; per-month issuance > $2B sustained = Ponzi-structure risk operational (STRC issuance funding STRC dividends).
- **MSTR + BTC price drawdowns.** A severe drawdown compresses Strategy's BTC stack value (the funding source) AND eliminates the equity-ATM optionality. Both legs of the funding model squeeze.
- **Solana pool depth for STRCx.** The only realistic non-AP exit; drainage = wrapper-layer exit deteriorating regardless of underlying. Baseline (verified 2026-06-02): about $807K aggregate across four pools; primary Raydium CLMM is about 87% STRCx / 13% USDC, capping practical clean exits around $30–50K per trade.
  - **Sell-to-buy transaction ratio in the primary pool** (currently 5.4:1 over 24h). A sustained sell-pressure regime against the asymmetric composition is how this secondary degrades from "working with slippage" to "no functional exit."
- **The rebasing multiplier's cadence.** Issuer-updated; track whether it keeps pace with the ~11.5% net dividend. From 06-30 the multiplier should reflect a *twice-monthly* dividend accrual (STRC's payment cadence goes semi-monthly) rather than a single monthly step — watch that it keeps pace with the semi-monthly net dividend.

## Related reports

The upstream Strategy issuer is analyzed in the [MSTR retail report](/reports/mstr/) — that's the entity behind STRC, and the place to understand the mNAV regime, capital structure, and BTC stack dependency in depth. **Read MSTR for the upstream funding-model context.**

STRCx sits upstream of multiple downstream wrappers across the STRC family. Holders of any of these should read STRCx for the underlying analysis:

- [apxUSD](/reports/apxusd/) — Apyx's $1-pegged stablecoin wrapper; STRC-backed reserves, yield routed away.
- [apyUSD](/reports/apyusd/) — Apyx's yield-bearing sibling; captures the STRC dividend as NAV growth.
- [sUSDat](/reports/susdat/) — Saturn's yield-bearing wrapper; STRC dividend pass-through into NAV.
- [usdat](/reports/usdat/) — Saturn's permissioned non-yield stablecoin (sUSDat's underlying).

All four carry STRC family exposure indirectly through their backing baskets; STRCx is the direct, undiluted version.

---

*This report is based on Backed Finance's public documentation, Strategy Inc. SEC filings (most recent: 2026-06-29 8-K "Digital Credit Capital Framework", accession 0001193125-26-286871), on-chain reads, and third-party data (rwa.xyz, CoinDesk) through 2026-06-30. Live values for mNAV regime, MSTR/BTC inputs, STRC instrument state (price, dividend rate, par drift), STRCx wrapper supply across five chains, rebasing multiplier, cash-service waterfall, rate-ceiling headroom, and SEC EDGAR 8-K event log are on the [live dashboard](https://tidresearch.com/dashboards/?asset=strc). STRCx is an off-chain-backed real-world asset: backing is verified via Backed's issuer-level reports and qualified-custodian arrangement, not a continuous on-chain feed, and some details (named custodian for STRC) are not independently verified here. Strategy issuer analysis is in the companion [MSTR report](/reports/mstr/). Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
