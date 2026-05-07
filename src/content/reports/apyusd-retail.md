---
asset: "apyUSD"
slug: "apyusd"
aliases: ["apyUSD", "Apyx USD Yield"]
chains: ["eth", "base"]
category: "vault-share"
underlying_assets: ["apxUSD"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
companion_report: "apxusd-retail"
date: "2026-05-07"
last_verified: "2026-05-07"
featured: false
volatility_score: 7.0
structural_score: 5.5
redemption_score: 3.0
liquidity_score: 3.5
overall_score: 4.0
---

# apyUSD — Retail Risk Report

**Moderate-elevated risk · 4.0/10**

| Yield | Exit method | Time to cash | Age | Chains |
|---|---|---|---|---|
| ~13% APY ongoing (real STRC dividends) | UnlockToken cooldown → apxUSD → DEX or settlement | 30+ days minimum | ~2.5 months | Ethereum, Base |

## Summary

apyUSD is the yield-bearing ERC-4626 vault wrapper for [apxUSD](/reports/apxusd-retail/). Deposit apxUSD, receive apyUSD shares; the vault holds the apxUSD and accrues the underlying STRC dividend stream into share value (NAV grows). Where apxUSD holders forgo yield in exchange for stablecoin functionality, apyUSD holders accept a **30-day UnlockToken cooldown** on exits in exchange for the dividend pass-through.

As of 2026-05-07: vault holds ~$103.5M apxUSD (~34% of total apxUSD supply), 75.94M apyUSD shares outstanding, NAV 1.363 apxUSD per share. The protocol launched in February 2026 at NAV 1.0 — about 2.5 months ago.

The 4.0/10 score reflects two binding risk axes for this product specifically: a long mandatory exit cooldown (30 days), and the asymmetric structure where apyUSD captures all yield while apxUSD bears residual collateral risk uncompensated. Plus apyUSD inherits everything that drives the apxUSD score: single-issuer STRC concentration, off-chain RWA custody, no published independent attestation through 2026-05-07.

## What you actually earn

**~13% APY ongoing**, paid in NAV growth (your shares are worth more apxUSD over time, not paid out as separate income).

This needs unpacking because the headline number is misleading:

- The vault's NAV has gone from 1.000 to 1.363 over ~2.5 months, which is roughly 36% — at first glance that looks way higher than STRC's ~11-15% indicated dividend rate
- The actual structure: **week 1 of operations saw a one-time ~33% NAV jump** (Feb 20-27, 2026) caused by donation-pattern inflows of apxUSD into the vault — most plausibly Apyx loading pre-launch STRC dividends or strategic seed capital. From week 2 onwards, NAV has grown smoothly at **~13% annualized**, which IS within STRC's indicated-rate range
- **For new buyers today: you earn the ~13% ongoing rate going forward.** You do not capture the week-1 launch jump — that benefited only addresses present during the first week of operations

So apyUSD's recurring yield is roughly twice T-bill yields and competitive with curated DeFi credit products like syrupUSDC. The trade-off is a 30-day exit lock, materially worse exit liquidity than syrupUSDC's permissionless DEX-route (~12 bps slippage to $100K), and dependence on a young (~2.5 months) RWA protocol with no published attestation.

## How exit works

This is the binding constraint for apyUSD. Exit is **not instant**:

1. **Burn apyUSD shares → enter the UnlockToken cooldown vault.** This converts your apyUSD position into a "locked apxUSD" claim
2. **Wait 30 days.** The UnlockToken contract enforces a cooldown duration — based on contract source review, 30 days. (Apyx's public docs say 20 days; the contract code is authoritative, and the duration getter is not externally exposed, so this gets verified through source-level review rather than a direct on-chain read. Worth requesting clarification from Apyx if sizing materially.)
3. **Claim apxUSD.** After cooldown, your locked claim becomes redeemable as apxUSD
4. **Then exit apxUSD** via either Curve apxUSD/USDC (~$14.5M USDC depth) or Apyx's USDC settlement (mechanism not publicly documented)

So your effective time-to-cash is **30 days minimum + apxUSD's own settlement window**. There's no documented secondary market for apyUSD itself (no Curve apyUSD/USDC pool, etc.), so the cooldown is essentially mandatory.

UnlockToken currently holds ~$1.13M apxUSD across all positions in cooldown — the pipe is small but not stress-tested at scale.

## What the contracts are doing

apyUSD is a standard ERC-4626 vault on Ethereum (with a Base deployment), upgradeable proxy. The Ethereum implementation was upgraded once on 2026-03-30 (~30 days post-launch). Three audits cover the contract layer (more on those below).

What sits behind the scenes:
- The vault holds apxUSD; apxUSD itself is backed by Apyx's STRC (Strategy Perpetual Preferred Stock) holdings
- STRC pays a variable-rate monthly dividend (around 11.25% indicated rate, monthly reset)
- Apyx accrues STRC dividends into apxUSD that flows back to the apyUSD vault, which is what produces NAV growth for apyUSD holders
- The smart contract handles ERC-4626 standard mechanics; the dividend collection, custody, and STRC management are off-chain at Apyx

The thing that matters for a retail holder: **you're holding a yield-bearing wrapper around a synthetic stablecoin that's backed off-chain by a single TradFi security.** Two layers of "trust Apyx to liquidate things at the right time" on the exit path.

## Audits & security

Same audit + admin layer as apxUSD (the protocol is shared):

- **3 audits** — Quantstamp (Feb 2026), Zellic (March 2026), Certora (March 2026, including formal verification). Certora found 11 issues including 1 high-severity (fixed and confirmed). Zellic is top-tier; Certora is best-in-class for formal verification.
- **Admin posture (verified on-chain 2026-04-30):** OpenZeppelin AccessManager root admin is a 4-of-6 Gnosis Safe v1.4.1 (`0xabdd8c...`); 72-hour `targetAdminDelay` on apxUSD/apyUSD/UnlockToken/AddressList; distributed guardian role can cancel scheduled operations during the window
- **No bug bounty** — gap relative to mature protocols
- **One observable post-launch implementation upgrade** for the apyUSD wrapper itself (March 2026, ~30 days into production)

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 7.0 | NAV-tracking ERC-4626, accruing. Ongoing yield ~13% APY (verified on-chain via week-by-week NAV sampling), within STRC's 11-15% indicated-rate range. Inherits apxUSD's $1 peg risk indirectly via the asset side. |
| Structural | 5.5 | ERC-4626 standard. Three audits incl. formal verification. 4-of-6 Safe admin + 72h target delay (verified 2026-04-30). Offset by: one observable post-launch upgrade 2026-03-30; cooldown duration code-vs-docs mismatch (30d source / 20d docs) — duration getter not externally exposed; ~2.5 months in production. |
| Redemption | 3.0 | **30-day mandatory cooldown** + apxUSD's own opaque USDC settlement = compound illiquidity. No documented secondary market for apyUSD itself. |
| Liquidity | 3.5 | The 30-day cooldown is the binding liquidity constraint. Ongoing yield is real, but you're locked for a month minimum to access it. Materially worse than apxUSD's same-day exit options. |
| **Overall** | **4.0** | Moderate-elevated risk |

## Who it's for

Retail or institutional users who want the dividend pass-through from Apyx's STRC backing AND can commit capital for at least 30 days at a time. Comfortable with the same off-chain RWA risks that drive apxUSD's score — single-issuer STRC concentration, opaque redemption, no published attestation — plus the additional cooldown lock.

## Who should avoid

- **Anyone who might need exit within 30 days under any scenario.** This is the disqualifying constraint. The cooldown is mandatory and there's no documented secondary market for apyUSD itself
- Anyone who treats this as a "stablecoin substitute" — apyUSD is a yield-bearing vault share, not a stablecoin, and its exit lock makes it functionally illiquid for short-term positions
- Anyone uncomfortable with the launch-NAV-jump structure — early holders captured a one-time ~33% bump that new buyers do not. This is disclosed and explained but is unusual relative to standard ERC-4626 launches

## What to watch

- **First independent attestation.** Apyx has committed to monthly third-party attestations. None has surfaced through 2026-05-07. If/when one appears (PCAOB-firm preferred), that closes the largest information gap for both apxUSD and apyUSD holders
- **STRC ex-dividend dates** (~mid-month). The next ones land around May 15 and June 15. STRC's reset mechanism interacts with how apyUSD's NAV behaves around those dates; smooth growth vs visible step-changes is the test of whether Apyx is passing through dividends consistently
- **Cooldown duration verification.** Apyx docs cite 20 days; contract source review concluded 30. The duration getter isn't externally exposed, so this can't be independently verified by a public on-chain read. Apyx publishing clarification (or the team exposing the getter) would close this
- **MSTR / BTC drawdown.** STRC sits junior to MSTR's $10B+ in convertible debt. A severe BTC crash would compress MSTR equity and could threaten STRC dividends or par pricing — apxUSD backing degrades and apyUSD yield compresses or pauses
- **apyUSD/apxUSD ratio.** Currently ~34% (apyUSD vault holds ~$103.5M of ~$307M apxUSD supply). A sharp drop in this ratio signals flight from yield-bearing into the stablecoin form (potentially indicating stress); a sharp rise signals yield-chasing into a still-young product
- **Implementation upgrade events.** The 72-hour AccessManager delay is a meaningful safety property, but only useful if you watch for scheduled operations. apyUSD has had one observable upgrade (2026-03-30); future ones should be visible 3 days in advance

## A note on the apxUSD companion

If you're not comfortable with the 30-day cooldown, the [apxUSD retail report](/reports/apxusd-retail/) covers the non-yield-bearing sibling. apxUSD has same-day exit options (Curve DEX or USDC settlement) but earns no yield. The two products are structurally linked: apxUSD bears residual collateral risk; apyUSD captures the dividend stream. Holding both does not diversify, since both are claims against the same Apyx + STRC backing.

## A note on Apyx's structure

Apyx is backed by the team behind DeFi Development Corp (DFDV, Nasdaq-listed). DFDV provides reputational accountability at the parent level — publicly traded, SEC-reporting, audited financials. However, Apyx itself appears to be a separate legal entity (geographic restrictions on US/EU/EEA users wouldn't apply if it were simply a DFDV product). For retail holders this matters mainly in a worst-case scenario: if Apyx has a solvency event, claims would route to whichever entity holds the protocol risk, not necessarily DFDV.

Investor lineup is solid (ParaFi, Pantera, Kraken Ventures, Wintermute Ventures, GSR via 2023 seed; $300M valuation strategic round Feb 2026).

---

*This report is based on public Apyx documentation, on-chain reads (verified 2026-05-07), and Apyx team correspondence through 2026-05-07. Some information depends on issuer disclosures (custody arrangements, attestations, redemption mechanics) that are not yet independently verified. The week-1 launch NAV trajectory was reconstructed from on-chain Transfer events; Apyx has not publicly explained the source of the donation-pattern inflows during that window. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
