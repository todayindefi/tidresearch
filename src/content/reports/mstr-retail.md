---
asset: "MSTR"
slug: "mstr"
aliases: ["MSTR", "Strategy", "Strategy Inc", "MicroStrategy"]
chains: []
category: "tradfi-equity"
assessment_type: "light"
audience: "retail"
date: "2026-05-30"
last_verified: "2026-05-30"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=mstr"
featured: false
production: false
issuer: "Strategy Inc."
yield_bearing: false
underlying_assets: ["btc"]
overall_score: 5.0
---

# MSTR (Strategy Inc.) — Retail Risk Report

**Moderate-high risk · 5.0/10** | Listed: NASDAQ: MSTR | Issuer-level analysis (NOT an equity buy/sell recommendation)

MSTR is the common stock of **Strategy Inc.** (formerly MicroStrategy), the publicly listed treasury company holding **843,738 Bitcoin** (~$62B at spot) on its balance sheet. Strategy's legacy enterprise-software business is operationally immaterial; the entire investment thesis and risk profile is the BTC stack + the capital-structure machinery that funds the dividends on a growing preferred-stock obligation.

This report is the **issuer-level analysis** that Strategy's preferred-stock holders (STRC, STRF, STRD, STRK) and any DeFi assets dependent on those preferreds (STRCx wrapper, apxUSD / apyUSD reserves, sUSDat backing) need to understand. It is NOT an equity-investment recommendation on MSTR common — that would require a different analytical lens (peer comparison vs IBIT spot ETF, conversion math, dividend-discount-model alternatives). The scope here is dependency analysis: how solvent is Strategy as an issuer, what drives the funding model, what's the runway, what could break.

| Holdings | Funding model | Cash buffer | Preferred outstanding | Convert debt |
|---|---|---|---|---|
| 843,738 BTC ($62B) | BTC sales (since 2026-05) | $871M | $15.5B | $6.7B |

**Live monitoring** of mNAV regime, balance sheet, capital structure, per-share BTC NAV trajectory, and SEC 8-K event log is on the [live MSTR dashboard](https://tidresearch.com/dashboards/?asset=mstr) — values in this report are point-in-time anchors; the dashboard reflects current readings.

## What Strategy actually is

**A levered Bitcoin bet wrapped in a public-company shell.** Strategy adopted Bitcoin as its primary treasury asset in August 2020 under the direction of Executive Chairman Michael Saylor. Since then it has accumulated BTC through three funding sources, in roughly this evolution:

1. **Common equity issuance** via at-the-market (ATM) programs — works when MSTR trades at a premium to its underlying BTC NAV (mNAV > 1), dilutes per-share BTC NAV when mNAV < 1
2. **Senior convertible notes** — 0% to 2.25% coupon debt that converts to MSTR shares at strike prices well above current MSTR levels. Cheap leverage, but bullet maturities create refinancing walls.
3. **Variable-rate perpetual preferred stock** (STRC since mid-2025) — 11.5% perpetual dividend, no maturity, the "all-weather" funding source because demand doesn't depend on MSTR-equity NAV multiples.

The legacy software business (BI tools, on-premise + cloud analytics) generates roughly break-even cash flow. **Treat software cash flow as zero** for risk-analysis purposes — the entire financial story is BTC + capital markets.

**Governance is concentrated.** Saylor holds majority voting control via a dual-class share structure. There's effectively no risk of activist intervention, and no realistic risk of shareholder-vote-driven strategic shift. But there's also no external check on his decisions — the 2026-05-05 pivot to BTC sales for preferred dividend funding (see below) happened on a single executive call. Future strategic shifts can happen with similar speed and similar lack of external check.

## The mNAV mechanism — the binding signal

The single most important number for understanding Strategy is **mNAV**:

```
mNAV = MSTR market cap ÷ BTC NAV

where BTC NAV = (BTC count) × (BTC spot price)
```

Currently (late May 2026): MSTR market cap ~$46.5B / BTC NAV ~$62B ≈ **0.86 — a discount, not a premium**.

| mNAV range | Regime | What it means |
|---|---|---|
| > 1.05 | Premium | ATM equity issuance accretive — every $1 raised buys >$1 of per-share BTC. BTC-bid flywheel intact. |
| 0.95 - 1.05 | Parity | Marginal — ATM neither accretive nor dilutive in per-share BTC terms. |
| 0.85 - 0.95 | **Discount (current)** | ATM dilutive to per-share BTC. Strategy CAN still issue equity but only for liability management (e.g., paying off convertible debt at a discount) — not for accretive BTC accumulation. |
| < 0.85 | Distress | Funding model under acute stress. Capital markets pricing meaningful execution doubt. |

**Why mNAV inversion matters:** The Strategy investment thesis is centrally a per-share BTC NAV compounding story. When mNAV stays < 1, the compounding mechanism inverts — new equity issuance dilutes per-share BTC NAV rather than growing it. The discount becomes self-reinforcing because the growth thesis weakens, which compresses MSTR equity further, which deepens the discount.

The 2026-05-05 pivot (next section) was Strategy's explicit acknowledgment that the historical mNAV>1 flywheel is no longer operative.

## The 2026-05-05 funding-regime change

On Strategy's Q1 2026 earnings call (2026-05-05), Saylor publicly committed for the first time to using **BTC sales** to fund preferred-dividend obligations. He stated current annual preferred payments require selling ~18,500-19,000 BTC per year (~2.2% of the 843K BTC stack).

This is a regime change. The previous covenant — "we never sell" — has been replaced with "we sell ≤ 2.2%/yr if needed."

**For MSTR equity holders, this is structurally bearish on two timeframes:**
- **Near term:** Strategy is now a marginal net BTC seller, not a net buyer. The historical "BTC bid" via Strategy's ATM cadence is significantly diminished.
- **Multi-year:** The growth thesis around MSTR has weakened. If BTC compounds at < ~6%/yr long-term (the rough breakeven for per-share BTC NAV growth under the new model), MSTR equity has no fundamental upside lever.

**For preferred holders (STRC, STRF, etc.), this is a mixed signal:**
- **Positive:** Strategy explicitly funded the preferred-dividend stream from the BTC stack. ~36-39 years of runway at flat BTC and flat preferred outstanding.
- **Negative:** The funding source flipped from incoming capital (renewable) to the BTC stack (finite, depleted by sales). The model assumes BTC compounds faster than the dividend-burn rate; if BTC stagnates or drops, runway compresses fast.

## The 2026-05-26 transaction — the new playbook in action

Two weeks after the Saylor pivot, Strategy executed a paradigm transaction (2026-05-11 to 2026-05-25):

- **Repurchased** $1.50B face of 0% 2029 convertible notes for ~$1.38B cash (8% discount to par)
- **Funded by** cash reserves + MSTR ATM (yes, even at mNAV ~0.86) + STRC ATM
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
| Balance sheet quality | 5.5 | Large BTC stack ($62B) is real but cost-basis underwater ($75,699/BTC avg vs ~$73K spot). Cash buffer thin ($871M = ~6 months coverage). Debt + preferred meaningful ($22B+ combined). Quality is BTC-correlated. |
| Funding model durability | 4.5 | mNAV at 0.86 (discount) compresses the BTC-accumulation model. ATM redirected to liability management. New funding source = BTC sales + continued preferred issuance demand. Both fragile under stress. |
| Refinancing capacity | 6.0 | Demonstrated capacity to retire $1.5B converts at discount (5/26 transaction). The rolling-refinancing playbook works at current scale. 2030 wall ($2.7B) is the unproven test. |
| Governance | 4.5 | Saylor majority voting via dual-class. Strength (consistent BTC thesis) AND single-point-of-decision risk (the 5/05 pivot was a unilateral call reshaping the company's risk profile). |
| **Overall** | **5.0** | **Functional but stressed.** A leveraged BTC bet with capital-structure complexity. Survivable at current BTC price + current preferred outstanding; runway compresses under any of BTC weakness, continued STRC growth, or rate-ceiling stress. Acceptable as upstream dependency for assets sized appropriately; not investment-grade-equivalent backing for any holding that needs that. |

## Who it's for

- **Sophisticated retail interested in BTC-leveraged equity exposure** who understand they're buying a treasury company, not a software business
- **Preferred-stock holders** (STRC, STRCx, downstream) who want to understand the upstream issuer's solvency mechanics
- **DeFi investors with STRC-dependent positions** (apxUSD, apyUSD, sUSDat, STRCx) who want the upstream view rather than only the wrapper-side analysis
- **Researchers tracking the Digital Asset Treasury company category** — Strategy is the canonical example, and the framework here transfers to peer DAT issuers (MetaPlanet, etc.)

## Who should avoid

- **Anyone wanting simple BTC exposure.** Spot Bitcoin ETFs (IBIT, FBTC) deliver BTC price exposure with much less capital-structure risk. MSTR is leveraged-BTC + capital-structure complexity; don't conflate it with spot.
- **Anyone uncomfortable with single-CEO decision-making.** Saylor's voting concentration means strategic shifts happen unilaterally and quickly. If that's an issue, MSTR is not the right vehicle.
- **Anyone treating MSTR as a software company.** The software business doesn't matter to the valuation or risk profile. Don't model it with software-company multiples.
- **Anyone assuming the Bitcoin treasury thesis = Bitcoin exposure.** The thesis depends on Strategy's continued ability to compound per-share BTC NAV via cheap capital. In the post-2026-05 regime that mechanism is compressed; the per-share BTC NAV trajectory can compress even when BTC price rises.

## What to watch

Each of these signals has a live panel on the [MSTR dashboard](https://tidresearch.com/dashboards/?asset=mstr) (and most also on the [STRC dashboard](https://tidresearch.com/dashboards/?asset=strc) for the preferred-side view):

- **mNAV (currently ~0.86).** Sustained < 0.85 = distress; ATM offline for any productive use. Recovery > 1.0 = ATM accretive again, regime reverses.
- **BTC price and Strategy's BTC count.** Quarterly purchase/sale cadence; ANY BTC sale execution (not just intent) is regime confirmation.
- **Per-share BTC NAV trajectory.** The headline equity metric. Compresses with dilution (ATM issuance) even when BTC count grows.
- **STRC outstanding tranche cadence.** Currently ~$12-13B; sustained > $2B/month issuance = Ponzi-structure risk operational.
- **Aggregate-preferred runway.** Currently ~37 years; meaningful compression below 30 years.
- **Cash balance.** Currently $871M; drops below $500M = stress signal.
- **2030 convertible wall as it approaches.** ~12-18 months ahead (mid-2029), market will start pricing cash-vs-conversion outcome. Refinancing capacity will be visible.
- **Saylor governance events.** Voting structure changes, succession plans, health events — material risk vectors.

## Related reports

- [STRC + STRCx retail report](/reports/strcx/) — the variable-rate perpetual preferred that is Strategy's primary funding instrument, and Backed Finance's on-chain wrapper. **The most direct retail exposure to Strategy's preferred-dividend stream.**
- [apxUSD retail report](/reports/apxusd/) — Apyx's $1 stablecoin backed partly by STRC family (~30-40% of reserves).
- [apyUSD retail report](/reports/apyusd/) — Apyx's yield-bearing sibling, captures the STRC dividend stream as NAV growth.
- [sUSDat retail report](/reports/susdat/) — Saturn's yield wrapper, ~81% backed by raw STRC at steady state.

---

*This report is based on Strategy Inc. SEC filings (most recent: 2026-05-26 8-K, Q1 2026 10-Q), third-party data (bitcoin-treasuries.net, Coindesk, Blockworks), and Strategy's own investor communications through 2026-05-30. Live values for MSTR price, mNAV, BTC NAV, balance sheet snapshot, capital structure, per-share BTC NAV trajectory, and SEC 8-K event log are on the [live dashboard](https://tidresearch.com/dashboards/?asset=mstr). This report is dependency-analysis scope: it explains Strategy's structural mechanics for downstream-asset-analysis purposes (STRC family wrappers, sUSDat, apxUSD/apyUSD). It is not an equity-investment recommendation on MSTR — that would require different scope including peer comparison, dividend-discount-model alternatives, and forward-looking price targets. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
