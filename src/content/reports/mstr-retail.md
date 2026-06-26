---
asset: "MSTR"
slug: "mstr"
aliases: ["MSTR", "Strategy", "Strategy Inc", "MicroStrategy"]
chains: []
category: "tradfi-equity"
assessment_type: "light"
audience: "retail"
date: "2026-06-02"
last_verified: "2026-06-26"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=mstr"
featured: false
production: true
issuer: "Strategy Inc."
yield_bearing: false
underlying_assets: ["btc"]
overall_score: 4.5
---

# MSTR (Strategy Inc.) — Retail Risk Report

> **Scope: dependency analysis.** This report analyzes Strategy as an upstream issuer for STRC, STRCx, and downstream-asset holders (apxUSD, apyUSD, sUSDat, etc.).
> It is **NOT an equity investment analysis** of MSTR common stock. No buy or sell guidance on MSTR is intended or implied.
> MSTR-vs-spot-ETF comparisons, convert-strike arithmetic, dividend-discount comparisons, and peer DAT analysis are out of scope.
> The score axes describe Strategy's upstream solvency posture for downstream holders, not its attractiveness as an equity allocation.

**Moderate-high risk · 4.5/10** | Listed: NASDAQ: MSTR | Issuer-level dependency analysis

> **June 2026 update (2026-06-26) — mNAV crossed premium → PARITY; Funding 5.0 → 4.5, Refinancing 5.5 → 5.0, Overall 5.0 → 4.5.** STRC fell further to a regular-session **~$76 (a fresh all-time low, about −24% to par)** and Strategy's **mNAV (EV/BTC) crossed from premium (~1.05) into PARITY (~1.02)** — the regime crossing the prior pass was watching for. At parity the accretive common-ATM-to-BTC flywheel is roughly **neutral**, so both the funding engine and the refinancing legs weaken: the ATM-equity leg no longer reliably compounds per-share BTC NAV, and the fresh-STRC-near-par and accretive-ATM refi legs degrade together. **Why the cut is capped at one notch:** mNAV is at **low-parity, not discount/distress** (just below the 1.05 boundary), the **$1.4B reserve** extends runway to **~9.8 months**, **issuance is paused by choice, not forced** (4th consecutive week), and **net BTC accumulation continues** (+520 BTC → ~847,362 BTC, common ATM only). So this is the funding model at its inflection, not broken. Balance sheet 5.0 and Governance 4.5 **held**. The underlying STRC instrument was cut a further notch in parallel (see [STRCx report](/reports/strcx/)). **Reversion note:** a durable mNAV bounce back above ~1.05 reverts these notches. *(Prior same-day pass — pre-market: a constructive 8-K (reserve $1.1B → $1.4B, coverage to ~9.8mo) against MSTR at 52-week lows ~$94 and STRC at an all-time low ~$80; mNAV sat right on the ~1.05 floor and scores HELD pending the crossing — which then occurred intraday. Earlier — 2026-06-07: a ~16% BTC drawdown took MSTR about −21% and STRC sub-par to ~$93.40; overall moved 5.5 → 5.0 then, capped at one notch because mNAV stayed premium.)*

MSTR is the common stock of **Strategy Inc.** (formerly MicroStrategy), the publicly listed treasury company holding **~847,362 Bitcoin** (≈$51.9B at ≈$61.3K) on its balance sheet. Strategy's legacy enterprise-software business is operationally immaterial; the entire investment thesis and risk profile is the BTC stack + the capital-structure machinery that funds the dividends on a growing preferred-stock obligation.

This report is the **issuer-level analysis** that Strategy's preferred-stock holders (STRC, STRF, STRD, STRK) and any DeFi assets dependent on those preferreds (STRCx wrapper, apxUSD / apyUSD reserves, sUSDat backing) need to understand. It is NOT an equity-investment recommendation on MSTR common — that would require a different analytical lens (peer comparison vs IBIT spot ETF, conversion math, dividend-discount-model alternatives). The scope here is dependency analysis: how solvent is Strategy as an issuer, what drives the funding model, what's the runway, what could break.

| Holdings | Funding model | Cash buffer | Preferred outstanding | Convert debt |
|---|---|---|---|---|
| ~847,362 BTC (≈$51.9B at ≈$61.3K) | ATM equity + BTC sales (since 2026-05) | $1.4B (06-21) | $15.5B | $6.7B |

**Live monitoring** of mNAV regime, balance sheet, capital structure, per-share BTC NAV trajectory, and SEC 8-K event log is on the [live MSTR dashboard](https://tidresearch.com/dashboards/?asset=mstr) — values in this report are point-in-time anchors; the dashboard reflects current readings.

## What Strategy actually is

**A levered Bitcoin bet wrapped in a public-company shell.** Strategy adopted Bitcoin as its primary treasury asset in August 2020 under the direction of Executive Chairman Michael Saylor. Since then it has accumulated BTC through three funding sources, in roughly this evolution:

1. **Common equity issuance** via at-the-market (ATM) programs — works when MSTR trades at a premium to its underlying BTC NAV (mNAV > 1), dilutes per-share BTC NAV when mNAV < 1
2. **Senior convertible notes** — 0% to 2.25% coupon debt that converts to MSTR shares at strike prices well above current MSTR levels. Cheap leverage, but bullet maturities create refinancing walls.
3. **Variable-rate perpetual preferred stock** (STRC since mid-2025) — 11.5% perpetual dividend, no maturity, the "all-weather" funding source because demand doesn't depend on MSTR-equity NAV multiples.

The legacy software business (BI tools, on-premise + cloud analytics) generates roughly break-even cash flow. **Treat software cash flow as zero** for risk-analysis purposes — the entire financial story is BTC + capital markets.

**Governance is concentrated.** Saylor holds majority voting control via a dual-class share structure. There's effectively no risk of activist intervention, and no realistic risk of shareholder-vote-driven strategic shift. But there's also no external check on his decisions — the 2026-05-05 pivot to BTC sales for preferred dividend funding (see below) happened on a single executive call. Future strategic shifts can happen with similar speed and similar lack of external check.

## The mNAV mechanism — the binding signal

The single most important number for understanding Strategy is **mNAV** — Strategy's own published metric, visible on the strategy.com landing page:

```
mNAV = Enterprise Value ÷ BTC Reserve
EV   = MSTR market cap + senior convertible debt + perpetual preferred − cash
```

As of 2026-06-03 (strategy.com): EV ≈ $67.2B, BTC Reserve ≈ $55.3B, **mNAV ≈ 1.21 — premium**. **Update 2026-06-26:** the late-June selloff (MSTR to 52-week lows, BTC ~$61.3K, STRC to ~$76) has compressed mNAV from ~1.05 (pre-market) to **~1.02 — into PARITY**. At parity ATM equity issuance is no longer reliably accretive — the compounding engine is roughly neutral. This is the regime crossing the prior pass was watching for, and it drove this pass's Funding / Refinancing / Overall cuts. A durable bounce back above ~1.05 would revert them.

*Correction note: an earlier version of this report computed mNAV as MktCap / BTC ≈ 0.86 and read this as "discount." That ratio is a useful **leverage indicator** for the common claim, but it is not Strategy's published mNAV and it is not the ATM-accretion test. With $22B of senior claims (debt + preferred) sitting ahead of common, MktCap/BTC being mechanically less than 1 is normal capital-structure arithmetic — it would only equal mNAV in a debt-free pure-BTC structure (a spot ETF).*

| mNAV range (EV/BTC) | Regime | What it means |
|---|---|---|
| > 1.05 | **Premium (current)** | ATM equity issuance accretive — every $1 raised buys $1 of BTC that accrues to common above the senior wedge. Per-share BTC NAV grows on each issuance. BTC-bid flywheel intact. |
| 0.95 - 1.05 | Parity | Marginal — ATM neither accretive nor dilutive in per-share BTC terms. |
| 0.85 - 0.95 | Discount | ATM dilutive to per-share BTC. BTC-accumulation funding leg compressed. |
| < 0.85 | Distress | Funding model under acute stress. |

**Why mNAV would matter if it inverted:** the Strategy investment thesis is centrally a per-share BTC NAV compounding story. If mNAV ever sustains < 1, the compounding mechanism inverts — new equity issuance dilutes per-share BTC NAV rather than growing it. That self-reinforcing loop (weaker thesis → weaker equity → lower mNAV) is the **forward stress case** to monitor; it is not the operating regime as of 2026-06-03.

## The 2026-05-05 disclosure — funding-mix optimization

On Strategy's Q1 2026 earnings call (2026-05-05), Saylor publicly committed for the first time to using **BTC sales** as one funding leg for preferred-dividend obligations. He stated current annual preferred payments require selling ~18,500-19,000 BTC per year (~2.2% of the 843K BTC stack) if funded entirely from the stack.

**The disclosure was a funding-mix decision, not a forced response to a broken ATM.** Annual preferred dividend obligation is ~$1.7B. Funding that via incremental ATM at MSTR ≈ $130 requires issuing ~13M new shares per year (~4% basic-float dilution annually); funding via BTC sales requires liquidating ~26K BTC/yr (~3% of stack annually). Both are economically feasible at mNAV ≈ 1.21. Saylor's preference is a **mix** — ATM for liability management plus opportunistic BTC sales for dividend service — rather than open-ended ATM dilution. The "pivot" is a portfolio choice between two viable funding legs, not an admission that the equity-issuance leg is closed.

**For preferred holders (STRC, STRF, etc.):** Strategy now operates a three-leg funding stack — ATM equity issuance, ongoing preferred issuance, and opportunistic BTC sales. Phase 1 is the cash buffer, which has *built* from $871M (5/25) → $1.0B → $1.1B → **≈$1.4B (06-21)** across four weeks of common-ATM-funded BTC buys with zero preferred issuance and no forced BTC sales — easing Phase-1 coverage to **≈9.8 months** at current obligation with zero issuance refill. The buffer is building even as STRC's price falls to an all-time low; that is the key offset to the late-June drawdown, and it is why this stays instrument-price stress rather than a regime change. Phase 2 is the BTC stack itself — ~31 years of runway at flat BTC and flat preferred outstanding. The three-leg structure is more robust than a single-leg model would be; residual stress vectors are STRC issuance demand absorption, rate-ceiling headroom, and a future mNAV inversion under sustained BTC weakness.

> **From 2026-06-30, STRC pays its dividend twice a month instead of once.** The annual rate (11.5%) and total payout are unchanged — Strategy just splits the monthly dividend into two payments. (Approved at the June 8 annual meeting; first semi-monthly payment July 15, 2026.) Note this is a *payment-cadence* change only; the rate itself is still reset monthly off prior-month VWAP.

## The 2026-05-26 transaction — the new playbook in action

Two weeks after the Saylor pivot, Strategy executed a paradigm transaction (2026-05-11 to 2026-05-25):

- **Repurchased** $1.50B face of 0% 2029 convertible notes for ~$1.38B cash (8% discount to par)
- **Funded by** cash reserves + MSTR ATM + STRC ATM
- **Zero BTC sales** for this transaction
- **Result:** convert debt $8.2B → $6.7B; total preferred notional grew by $5.7B (mostly new STRC); BTC holdings unchanged

**Why Strategy did this:**
1. Captured the 8% discount (~$120M of free economic value retiring face below par)
2. Reduced conversion overhang on 2029 notes (eliminates future per-share BTC NAV dilution if MSTR ever rallies above the conversion strike)
3. Maturity-wall management (defends the bigger 2030 maturity wall for later)

**Why it's structurally negative for preferred holders:** Strategy traded $1.5B of near-term cash exposure for ~$345-575M/yr in perpetual cash obligation (the new STRC tranches at 11.5%). At any reasonable discount rate, that's ~$5-8B in present-value terms given up to gain ~$1.6B in present-value terms. The trade only makes sense if STRC issuance is treated as "free" — i.e., the dividend can be perpetually rolled by issuing more STRC. That's the Ponzi-structure risk explicit in the new regime.

**Why MSTR equity reacted -7.9% on the news:** Markets read the transaction as net negative for common holders despite Strategy's positive framing ("BTC Gain of 4,391 BTC, $333M BTC $ Gain"). The convert buyback pressured liquidity, and the new STRC issuance added permanent obligation. Market vote on Saylor's framing: not buying it.

## Capital structure and the 2030 wall

```
~$6.7B Senior Convertible Notes (multiple tranches, 2027-2032 maturities)
~$1.28B STRF (10% fixed perpetual preferred)
~$12-13B STRC (11.5% variable monthly perpetual preferred)  ← dominant
~$0.7B STRK (8% convertible) + STRD (10% fixed)
~$46.5B MSTR Common Equity (market cap)
```

The convertible debt is mostly **deep out-of-the-money** at current MSTR $163. Conversion strikes range from ~$210 (2027 tranche) to ~$2,000 (2032 tranche). At maturity, if MSTR is below the strike, Strategy pays face value in CASH. If MSTR is above, the notes convert to shares (dilutive but no cash drain).

**The 2030 maturity wall is the dominant single-year exposure**: ~$2.7B of converts due in March 2030. At current MSTR price, all 2030 tranches would cash-settle — Strategy would need ~37,000 BTC equivalent that year just for the convert wall, on top of the ongoing ~22,000 BTC/yr preferred service. Total 2030 stack drain could be ~6.9% of the stack in one year if Strategy can't refinance through ATM/preferred issuance.

The 5/26 transaction is the playbook for handling this: retire near-term maturities at discount using ATM + new preferred issuance. The 2030 wall will face the same playbook ~12-18 months ahead of March 2030. Whether the playbook still works at that point depends on (a) STRC issuance demand remaining absorptive, (b) the rate-ceiling headroom not being exhausted, and (c) MSTR ATM still being functional.

## How Strategy reports its progress — the BTC metrics

Strategy publishes three custom metrics:
- **BTC Yield** = BTC count growth ÷ share count growth (per-share BTC NAV change %)
- **BTC Gain** = BTC count equivalent of any accretive-to-per-share transaction
- **BTC $ Gain** = USD value of BTC Gain

For the 2026-05-26 transaction: BTC Yield 0.7%, BTC Gain 4,391 BTC, BTC $ Gain $333M. Strategy didn't actually gain 4,391 BTC — the count was unchanged. The framing communicates that the transaction was "equivalent to gaining 4,391 BTC per share" because of conversion-overhang elimination + discount capture.

**Useful but somewhat self-serving framing.** It ignores the perpetual STRC obligation cost that funded the trade. Read with awareness of this bias.

## Score breakdown — issuer-entity axes

These are scores for Strategy as an **issuer entity** affecting downstream-asset (preferred, wrapper) analysis, NOT for MSTR as a potential equity investment.

| Dimension | Score | Notes |
|---|---|---|
| Balance sheet quality | 5.0 | **Held (cut from 5.5 in the June 2026 drawdown).** BTC stack ~$51.9B at ~$61.3K spot; cost-basis ($75,651/BTC avg) deeper underwater at 52-week-low MSTR. But the cash buffer **built to ≈$1.4B (06-21)** — the largest weekly build in the series — lifting coverage to **≈9.8 months** against the ~$1.5B+/yr preferred dividend service. Buffer building into the stress is the offset; cash alone still covers under a year, and debt + preferred remain meaningful ($22B+ combined). Quality is BTC-correlated; this week the issuer's near-term position arguably improved, so the axis holds. |
| Funding model durability | 4.5 | **Cut from 5.0 — mNAV crossed into parity.** mNAV (EV/BTC) has fallen from ~1.21 through the ~1.05 floor into **PARITY (~1.02)**, so the equity ATM leg — the core of this axis — is no longer reliably accretive; the compounding engine is roughly neutral. The cut is capped at one notch by the offsets: issuance stayed **paused (4th week, not forced)**, net BTC accumulation continued, and the **$1.4B reserve** extends runway to ~9.8 months. STRC at a fresh all-time low (~$76) while paying 11.5% near its ~14% practical ceiling is the parallel preferred-leg absorption stress. **A durable bounce back above ~1.05 mNAV reverts this.** |
| Refinancing capacity | 5.0 | **Cut from 5.5 — both refi legs weaken at parity.** Demonstrated capacity to retire $1.5B converts at discount (5/26 transaction) shows the rolling-refinancing playbook works at scale, but at parity the two legs that fund it weaken together: the accretive-ATM leg is now neutral, and the fresh-STRC-near-par leg is impaired with STRC at an all-time low. The 2030-wall-via-STRC assumption is a notch less safe. The reserve build extending runway is the offset that caps this to one notch. **A durable bounce back above ~1.05 mNAV reverts this.** |
| Governance | 4.5 | Saylor majority voting via dual-class. Strength (consistent BTC thesis) AND single-point-of-decision risk (the 5/05 pivot was a unilateral call reshaping the company's risk profile). Held — no new governance event. |
| **Overall** | **4.5** | **Functional, levered, at the mNAV inflection.** **Cut from 5.0** as mNAV crossed premium → parity (~1.02): the accretive equity leg is now neutral and both Funding and Refinancing stepped down. Capped at one notch because this is **low-parity, not discount/distress** — the issuer's near-term position actually improved this week (cash built to $1.4B, ~9.8 months coverage, issuance paused not forced, BTC accumulation continued), so the funding model is at its inflection, not broken. The underlying STRC (the instrument, not the issuer) is at a fresh all-time low and was rescored down separately. A durable mNAV bounce above ~1.05 reverts these notches; a sustained move into discount would force more. Acceptable as upstream dependency for assets sized appropriately; not investment-grade-equivalent backing for any holding that needs that. |

## How to use this analysis

- **Preferred-stock holders** (STRC, STRCx, downstream) who want to understand the upstream issuer's solvency mechanics
- **DeFi investors with STRC-dependent positions** (apxUSD, apyUSD, sUSDat, STRCx) who want the upstream view rather than only the wrapper-side analysis
- **Researchers tracking the Digital Asset Treasury company category** — Strategy is the canonical example, and the framework here transfers to peer DAT issuers (MetaPlanet, etc.)

## What this analysis does NOT cover

- **Equity-investment analysis of MSTR common.** Peer comparison versus spot BTC ETFs (IBIT, FBTC), convert-strike arithmetic at maturity, and dividend-discount-model alternatives are out of scope; those require an equity-research framework.
- **Personal-portfolio sizing for MSTR common.** This dependency analysis does not produce buy or sell signals.
- **Bitcoin-exposure substitution analysis.** Spot ETFs are the relevant simple-BTC products, but comparing them with MSTR is not covered by this report.
- **Saylor governance as a personal-risk gate.** His voting concentration is relevant here as a structural issuer fact, not as individualized investment guidance.

## What to watch

Each of these signals has a live panel on the [MSTR dashboard](https://tidresearch.com/dashboards/?asset=mstr) (and most also on the [STRC dashboard](https://tidresearch.com/dashboards/?asset=strc) for the preferred-side view):

- **mNAV (EV/BTC, currently ~1.02 — PARITY).** This is the live signal: it has crossed from premium through the ~1.05 floor into parity, where the ATM funding model is no longer reliably accretive (the cut this pass). A durable bounce back above ~1.05 reverts the parity notch; a sustained move into discount (< 0.95) deepens the BTC-bid-flywheel inversion; sustained < 0.85 = distress. Use strategy.com's landing-page mNAV as the authoritative reading.
- **BTC price and Strategy's BTC count.** Quarterly purchase/sale cadence; ANY BTC sale execution (not just intent) is regime confirmation.
- **Per-share BTC NAV trajectory.** The headline equity metric. Compresses with dilution (ATM issuance) even when BTC count grows.
- **STRC outstanding tranche cadence.** Currently ~$12-13B; sustained > $2B/month issuance = Ponzi-structure risk operational.
- **Aggregate-preferred runway.** Currently ~31 years; meaningful compression below 30 years.
- **BTC-sale window date.** Currently ≈2027-04 at zero issuance refill (pushed out by the $1.4B reserve build); drift inward to within ~3 months = acute short-term stress. Extension through successful STRC or ATM cash refill = de-risking.
- **Cash balance.** Currently ≈$1.4B (06-21; built from $871M over four weeks); drops below $500M = stress signal (~3-4 months of cash runway at current obligation).
- **2030 convertible wall as it approaches.** ~12-18 months ahead (mid-2029), market will start pricing cash-vs-conversion outcome. Refinancing capacity will be visible.
- **Saylor governance events.** Voting structure changes, succession plans, health events — material risk vectors.

## Related reports

- [STRC + STRCx retail report](/reports/strcx/) — the variable-rate perpetual preferred that is Strategy's primary funding instrument, and Backed Finance's on-chain wrapper. **The most direct retail exposure to Strategy's preferred-dividend stream.**
- [apxUSD retail report](/reports/apxusd/) — Apyx's $1 stablecoin backed partly by STRC family (~30-40% of reserves).
- [apyUSD retail report](/reports/apyusd/) — Apyx's yield-bearing sibling, captures the STRC dividend stream as NAV growth.
- [sUSDat retail report](/reports/susdat/) — Saturn's yield wrapper, ~81% backed by raw STRC at steady state.

---

*This report is based on Strategy Inc. SEC filings (most recent: 2026-06-22 weekly 8-K, Q1 2026 10-Q), third-party data (bitcoin-treasuries.net, Coindesk, Blockworks), and Strategy's own investor communications through 2026-06-26. Live values for MSTR price, mNAV, BTC NAV, balance sheet snapshot, capital structure, per-share BTC NAV trajectory, and SEC 8-K event log are on the [live dashboard](https://tidresearch.com/dashboards/?asset=mstr). This report is dependency-analysis scope: it explains Strategy's structural mechanics for downstream-asset-analysis purposes (STRC family wrappers, sUSDat, apxUSD/apyUSD). It is intended for upstream-dependency analysis by STRC, STRCx, and derivative-asset holders; it is not equity investment guidance on MSTR common, and no buy or sell recommendation is implied or should be inferred. Equity-investment questions require different scope including peer comparison, dividend-discount-model alternatives, and forward-looking price targets. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
