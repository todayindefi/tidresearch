---
asset: "TSM (Taiwan Semiconductor ADR)"
slug: "tsm-adr"
# ⚠️ DELIBERATELY DOES NOT CLAIM THE BARE "TSM" ALIAS, and this is mechanical
# rather than aesthetic. The Robinhood token's on-chain symbol() is literally
# "TSM", identical to this NYSE ticker, and readers arrive at a public site BY
# SEARCHING A TICKER. The bare alias belongs to tsm-rh, because that is what a
# token holder actually holds. If this file claimed it, someone holding the
# token would land on the ADR and read a 5.5 about a $1.98T franchise instead
# of a 3.0 about a Jersey debt security. Join on the instrument, never the
# ticker. Cf. the two reUSDs, where a symbol join produced a full liquidation
# analysis against the wrong asset.
aliases: ["TSM ADR", "Taiwan Semiconductor ADR", "TSMC", "Taiwan Semiconductor Manufacturing Company", "2330.TW", "TSM-N"]
chains: []
category: "tradfi-equity"
assessment_type: "light"
date: "2026-09-06"
last_verified: "2026-09-06"
featured: false
# ⚠️ STAGING ONLY. New import 2026-09-06, never published anywhere. Promotion
# needs the site owner: this pairs with tsm-rh, whose findings are adverse and
# section-scale about a named listed third party with an active legal posture.
# ⚠️ ALSO NOTE: the whole tokenized-equity class is internal-only on this site
# (no tslaon, spyon, qqqon), so promoting the TSM pair would break that pattern
# for a single asset. That is an editorial call, not a consequence of shipping.
production: false
issuer: "Taiwan Semiconductor Manufacturing Company Limited"
underlying_assets: ["2330.TW ordinary shares (TWSE)"]
yield_bearing: true
# tradfi-equity carries ONLY overall_score and liquidity_score in frontmatter;
# the per-axis scores live in the body, same as strc.md and mstr.md. Volatility
# 4.0 · Liquidity 9.0 · Counterparty 6.5 · Redemption 6.5.
# ⚠️ Exempt from the six-axis frame by design — an issuer-entity analysis has no
# peg, no reserve and no contract to score.
liquidity_score: 9.0
overall_score: 5.5
---

# TSM (Taiwan Semiconductor ADR) — Dependency Report

**Moderate risk · 5.5/10**

> ⚠️ **If you arrived here searching the ticker "TSM", check which instrument you hold.** This page is about the **NYSE-listed American Depositary Receipt** issued against Taiwan Semiconductor's ordinary shares. There is also a **Robinhood stock token whose on-chain symbol is literally `TSM`** — same three letters, entirely different instrument, and it is assessed separately at **[TSM (Robinhood Stock Token)](/reports/tsm-rh/), which scores 3.0**. The token is a Jersey debt security that *references* this ADR; holding it is not holding this. **Never join these two on the ticker.**

| Listing | Underlying | Ratio | Type | Market cap |
|---|---|---|---|---|
| NYSE: TSM, since 1997-10-08 | TWSE 2330, listed 1994-09-05 | **1 ADS = 5 ordinary shares** | Sponsored ADR | about **$1.98T** |

## Why this page exists

This is a **dependency report**. It exists because the [Robinhood TSM token](/reports/tsm-rh/) is not a report about Taiwan Semiconductor — it is a report about a Jersey debt security whose reference asset is this ADR. **The two fail in completely different ways and on completely different timescales**, and collapsing them would let a sound underlying launder a weak wrapper. It is the same split as [STRC](/reports/strc/) and [STRCx](/reports/strcx/).

⚠️ **The chain is three deep, and the middle layer is the one readers skip:**

```
Robinhood token  ──▶  TSM ADR (NYSE)  ──▶  depositary bank  ──▶  2330.TW ordinary (TWSE)
   tsm-rh              THIS PAGE                                   Taiwan jurisdiction
```

**The terminal asset is a Taiwanese security, and the ADR is a depositary construct sitting on top of it.** That is not the usual shape for a tokenized-equity reference — a wrapper over a US common share settles in one jurisdiction, and this does not.

⚠️ **The 5:1 ratio is the first thing any wrapper analysis gets wrong.** A per-token "share count" that does not say whether it means ADS or ordinary shares is ambiguous by a factor of five.

## Volatility — 4.0

Measured 2026-09-04: last close **$428.91**, 52-week range **$241.62–$479.00** — about a 98% spread on the low.

**Why 4.0 and not higher on a franchise this strong.** TSMC's competitive position is close to unique: leading-edge foundry capacity with no substitutable second source at scale. **Ordinary equity risk here is *lower* than most single names that score the same.**

⚠️ **It lands at 4.0 for the opposite reason to a volatile growth stock.** TSM carries a **discrete geopolitical tail** — essentially all leading-edge capacity sits on one island subject to an unresolved sovereignty dispute. **That risk does not appear in trailing volatility and will not be priced smoothly if it arrives.** A holder is short a binary, and trailing-vol measures understate it precisely *because* it has not happened. A quiet recent tape is evidence about the distribution, not about the tail.

## Liquidity — 9.0

Among the most liquid ADRs listed: about $1.98T market cap, continuous NYSE two-sided markets, a deep options chain, index membership.

✅ **This is the axis where the underlying is genuinely excellent — and it is exactly the strength a wrapper does not inherit.** The Robinhood token referencing this instrument trades on a float around $1.47M.

## Counterparty — 6.5

**An ADR is a claim on a depositary bank** that holds the ordinary shares. It is not a direct holding of 2330.TW. In normal conditions the distinction is invisible: institutional holders convert ADS to ordinary and back, and arbitrage holds the two books together.

⚠️ **The depositary bank is not established here.** The ADR is sponsored, but the institution is not named in what has been read, **and guessing at it would be worse than a blank** — the identity of the counterparty is exactly the fact a dependency report exists to state. **It is recoverable from TSMC's Form 20-F, which names the depositary and the deposit agreement.** Held at 6.5 rather than higher for that reason: an unresolved counterparty cannot score as though it were resolved.

**Two further layers sit underneath.** **FX** — the ordinary shares are TWD-denominated and the ADR is USD, so a holder is long TWD/USD whether they intended to be. And **Taiwan market structure** — conversion depends on Taiwanese settlement and on foreign-ownership rules remaining as they are.

## Redemption — 6.5

Institutional holders convert ADS to ordinary and back via the depositary; **retail generally cannot, and exits by selling on NYSE.** Cross-book arbitrage keeps the ADR and 2330.TW aligned in normal conditions, and it is the mechanism that would break first.

⚠️ **Conversion depends on Taiwanese settlement continuing to function — so this channel closes on a jurisdiction rather than on a counterparty.** That is a different failure mode from the depositary itself failing, and a more likely one.

## Scores

| axis | score | reasoning |
|---|---:|---|
| Volatility | 4.0 | 52-week range $241.62–$479.00. ⚠️ Scored on the **discrete geopolitical tail**, not the trailing tape — leading-edge capacity concentrated in one jurisdiction under an unresolved sovereignty dispute |
| Liquidity | 9.0 | Among the most liquid ADRs listed. About $1.98T cap, continuous NYSE markets, deep options, index membership |
| Counterparty | 6.5 | A claim on a depositary bank, not on 2330.TW directly. Decades-old, sponsored, routinely arbitraged. ⚠️ Held here rather than higher because **the depositary is unnamed**; lifts on reading the 20-F |
| Redemption | 6.5 | Institutional ADS↔ordinary conversion; retail exits by selling. ⚠️ Depends on Taiwanese settlement continuing to function — the channel most likely to close, and it closes on a jurisdiction |
| **Overall** | **5.5** | A high-quality, deeply liquid instrument carrying **one concentrated risk that is neither diversifiable nor distributional.** Mean 6.5, min 4.0 — ⚠️ **5.5 sits a full point below the mean, deliberately: a 9.0 liquidity score cannot offset a binary that would impair the asset outright, because liquidity is precisely what disappears in that scenario.** The min is the more honest anchor here. ✅ Not lower: TSMC is a real, profitable, dominant operating business, and the base case is that none of this binds |

## How to use this page

- **This is a dependency report, not a recommendation to hold TSM**, and it does not score any tokenized wrapper. For the token, read [TSM (Robinhood Stock Token)](/reports/tsm-rh/).
- ⚠️ **Never join on the ticker.** The Robinhood token's `symbol()` is `TSM`, identical to this NYSE ticker. This page deliberately does not claim the bare alias.
- **A wrapper cannot score better than this page on the axes it inherits** — volatility, and the geopolitical tail. It can and does score worse on everything else.
- ⚠️ **Before computing any premium or discount of a token against this ADR, check the weekday and the quote timestamp.** The ADR trades NYSE hours; a token trades continuously. **A gap measured against a stale close is weekend basis, not a discount.**

## What to watch

- **TSMC's Form 20-F** — it names the depositary bank and the deposit agreement, which is the one open counterparty question on this page.
- **ADS/ordinary conversion continuing to function.** It is the alignment mechanism between the two books, and it depends on Taiwanese settlement rather than on the depositary.
- **Taiwan foreign-ownership rules.** A change there closes the conversion channel without anything happening to TSMC.

## Revision history

- **2026-09-06 — first assessment.** NYSE-listed since 1997-10-08 against TWSE 2330; **1 ADS = 5 ordinary shares**; market cap about **$1.98T**; last close **$428.91** on a 52-week range of **$241.62–$479.00**. Depositary bank **not established** in this pass and deliberately not guessed.
