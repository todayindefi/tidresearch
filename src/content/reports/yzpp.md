---
asset: "yzPP"
slug: "yzpp"
aliases: ["yzPP", "Yuzu Protection Pool", "Yuzu PP"]
chains: ["plasma"]
category: "vault-share"
assessment_type: "light"
date: "2026-08-29"
last_verified: "2026-08-29"
last_revised: "2026-08-29"
featured: false
# HELD IN STAGING DELIBERATELY — do not promote on a freshness or
# completeness sweep. yzPP belongs to the Yuzu set (yzUSD, syzUSD), which the
# site owner has held until every dashboard tile is filled (ruled 2026-08-29;
# the earlier "pending a working dashboard" reason is spent — the dashboards
# render, they are incomplete). yzPP has no dashboard of its own and, on
# riskAnalyst's own assessment, probably does not warrant one at $4.73M / 133
# holders — so a strict reading of the set condition holds this page
# indefinitely. ⚠️ That is an OPEN QUESTION referred to the owner and still
# unanswered, not an oversight and not a decision anyone else may take.
production: false
issuer: "Yuzu Money"
underlying_assets: ["USDT0"]
yield_bearing: true
market_cap_approx: 4729857
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
# ⚠️ What moved, and what only changed name:
#   backing_score 4.5 is NEW. yzPP had no backing axis. Its claim is on the SAME
#     Yuzu strategy book as yzUSD, so the composition is inherited unchanged.
#     ⚠️ The subordination is deliberately NOT scored here — being first in the
#     waterfall is a fact about position, not about what the reserve holds, and
#     it is scored on axis 4 where the circularity already lives. Scoring it in
#     both places would count it twice.
#   underlying_score 2.0 is NEW and renders as DEPENDENCIES. ⚠️ The worst
#     Dependencies score in the family, below syzUSD's 2.5, and the ordering is
#     the point: syzUSD passes through to the book, yzPP is FIRST-LOSS on it.
#     Same exposures — Ethena at 34.7%, ~70% levered, recursive yzPRIME — but
#     absorbed before anyone else. ⚠️ Circular: its value is a claim on the very
#     book it cushions, so it stops being a cushion exactly when the book fails.
#   liquidity_score 2.0 is unchanged and already the worse leg. Both are bad:
#     primary is accredited-only on a 30-day window with exposure running
#     THROUGH the window; secondary is open but 133 holders deep.
#   structural_score 4.0 is Contract & Admin already — the STRONGEST in the
#     family, and left alone. `owner()` and ProxyAdmin both behind the 48-hour
#     timelock, and the syzUSD bridge EOA holds no role here.
#   volatility_score is the Stability key for a NAV-referenced share.
# ⚠️ `redemption_score` is RETAINED but no longer rendered: it is the evidence
# for axis 3, and both legs are stated in prose under that heading.
axis_frame: six
volatility_score: 3.0
backing_score: 4.5
liquidity_score: 2.0
underlying_score: 2.0
structural_score: 4.0
issuer_score: 4.0
redemption_score: 2.0
overall_score: 2.5
---

# yzPP — Risk Report

**High risk · 2.5/10**

## What this actually is

**yzPP — the Yuzu Protection Pool — is a first-loss junior tranche.** An ERC-4626 vault on Plasma, denominated in **USDT0**, whose function is to absorb losses **before** the collateral pool behind Yuzu's stablecoin does.

⚠️ **It is designed to lose money before anyone else does. That is not a flaw in the product; it is the product.** Losses hit yzPP first, and that is what allows [yzUSD](/reports/yzusd/) to hold a collateralization ratio above 100%.

**So the figures below do not read the way the same figures would read on a stablecoin.** ⚠️ **A drawdown here is evidence the structure functioned** — the senior was protected, which is precisely what the junior is paid 29% to do. **If you take one thing from this page before the numbers start, take that.**

**Do not confuse yzPP with `yzPRIME`.** They are different books with different ratios, and Yuzu runs three products with adjacent tickers.

| Yield | Denomination | Primary exit | Secondary exit | Chain |
|---|---|---|---|---|
| 29% headline, discretionary | USDT0 (not yzUSD) | 30-day window, 5,000 yzPP minimum, **accreditation required** | **Open to anyone** | Plasma |

## 1 · Stability

**Reference: NAV.** yzPP accrues; it has no peg. **Live NAV is 1.184000**, read as `totalAssets/totalSupply` on chain against the feed's 1.183954 — a gap explained by its 15-minute cycle.

**The loss absorption has been observed once.** Per Yuzu's published history, drawn from Accountable's timeline:

```
2026-04-23   NAV 1.137380   TVL 4,029,415      <- peak
2026-04-30                                     <- deepest drawdown, -3.74% from peak
2026-05-01   NAV 1.095482   TVL 3,275,693      -3.68% vs 04-23
syzUSD APY   7.0% on 04-25 · 7.0% on 05-01 · 7.0% on 05-07   UNCHANGED
recovery above the prior peak: early July 2026, roughly two months
```

**The junior absorbed and the senior's yield did not move. That is the waterfall doing what it says.**

⚠️ **Sourcing, stated plainly: the current NAV is chain-confirmed and the April event is not.** The drawdown comes from the issuer's published history, and verifying it independently needs historical vault reads that Plasma's 10,000-block `eth_getLogs` cap makes expensive. **We have not measured it, and this report does not claim to have.**

⚠️ **And −3.74% is not a bound.** It is one observation of a mechanism with **no documented floor**, on a claim against a book that is roughly 70% levered with Ethena at 34.7%. **A holder who reads it as a worst case has read a sample as a limit.**

## 2 · Backing

**The claim is on the same Yuzu strategy book that backs [yzUSD](/reports/yzusd/)** — the composition, the coverage and the attestation channel are identical, and they are treated in full there. **The reserve is not different at this layer; the position in it is.**

⚠️ **The subordination is deliberately not scored here.** Being first in the waterfall is a fact about position rather than about what the reserve holds, and it is scored under axis 4 where the circularity already sits. **Scoring it in both places would count it twice.**

⚠️ **One figure from that book governs this page: the surplus is $4,049,785, and yzPP is $4,729,857 — 116.8% of it.**

## 3 · Liquidity & Exit

**Both exit paths, and the axis takes the worse one. Here both are bad.**

**Primary — accredited-only, and the term is the sharpest thing on this page.** A **30-day redemption window** with a **5,000 yzPP minimum** and accreditation required. ⚠️ **First-loss exposure continues for the entire 30 days.** **An exit request is not an exit: you carry the risk you are trying to leave, for a month.**

**Secondary — open to anyone, and shallow.** ⚠️ **133 holders on Plasmascan.** That is the route a retail buyer would actually take, and **it carries no gating and no disclosure at all** — the instrument's own eligibility rules do not reach the venue where it is most likely to be bought.

⚠️ **The two legs fail in opposite directions and that is why this axis is 2.0.** The gated leg is slow; the open leg is thin. **Neither is a way out at size, and the gate that makes the primary leg respectable is exactly the one the secondary route removes.**

## 4 · Dependencies

⚠️ **This is the worst axis in the Yuzu family, at 2.0 against syzUSD's 2.5 and yzUSD's 3.0, and the ordering is the finding.** All three depend on one strategy book. **syzUSD passes through to it. yzUSD is it. yzPP absorbs its losses first.**

**So every exposure below arrives here before it arrives anywhere else:**

| Exposure in the underlying book | Share | Reaches yzPP |
|---|---|---|
| **Levered loop positions** | ~70% | First |
| **Ethena** (USDe + sUSDe) | **34.7%** | First |
| **`yzPRIME`** (Yuzu's own product) | 4.8% | First |

⚠️ **And the position is circular.** yzPP's value is a claim on the very book it cushions, **so it stops being a cushion precisely when the book takes losses** — the moment the protection is needed is the moment the protection is impaired.

⚠️ **Read the other way, this is a risk to the SENIOR asset, and that is the more important direction.** yzUSD's 6.92% overcollateralization is **not retained earnings — it is redeemable third-party capital.** yzPP is 116.8% of the entire surplus, so the cushion a yzUSD holder relies on is money belonging to yzPP holders, **subject to their redemption rights rather than locked in place.** Ex-junior, the senior's ratio is **100.87%, not 108.96%.**

⚠️ **No cap, attachment point or detachment point is documented anywhere.** The protocol describes the waterfall qualitatively and states no threshold at which absorption stops. **So 8.09% is an observation about today's balances, not a disclosed parameter** — nothing commits Yuzu to maintaining it, and nothing tells a holder how thin it may become.

```
yzPP                $4,729,857    = 8.09% of yzUSD supply   (first-loss thickness)
yzUSD surplus       $4,049,785    -> yzPP is 116.8% OF THE ENTIRE SURPLUS
+ Reserve Fund        $503,429    -> junior + reserve = 8.95% of yzUSD supply
```

## 5 · Contract & Admin

⚠️ **This is where yzPP is the strongest of the Yuzu products, and a reader comparing the three pages would otherwise assume the reverse.**

**Both `owner()` and the ProxyAdmin sit behind the 48-hour timelock**, and **the bare EOA that controls the syzUSD bridge holds no role here.** That is why this axis scores **4.0 against syzUSD's 2.0.**

**Both assets land at 2.5 overall, for opposite reasons.** ⚠️ **syzUSD's is a bare-key problem; yzPP's is subordination plus a gated exit.** **The contracts here are better run and the position is worse.**

## 6 · Issuer

**The issuer is a named entity — YUZU FINTECH LLC, a registered Virtual Asset Service Provider in the Republic of Georgia** — which makes an accreditation gate coherent rather than anomalous.

⚠️ **But registration is not prudential supervision, and the operators are not named.** No disclosed CEO or founders, **so the accreditation gate is enforced by people a holder cannot identify.**

⚠️ **The attestation channel is related-party: Accountable's founder is a Yuzu investor.** The April loss-absorption event above rests entirely on that source.

⚠️ **The headline yield is not underwritable.** 29% is syzUSD's base rate plus a **discretionary supplement set daily at 04:00 UTC under an unpublished risk-premiums policy**, part-funded by a Reserve Fund holding **$503,429 — 0.86% of yzUSD supply.** **A rate set under a policy nobody outside can read is not a rate a holder can model.**

## Who should avoid this

- **Anyone who wants yield without being the first to absorb losses.** That is the entire function of this position (axis 4).
- **Anyone who might need the money inside a month.** The window is 30 days and the exposure runs through all of it (axis 3).
- **Anyone buying on secondary because primary was gated.** The gate exists for a reason the secondary route does not remove (axes 3 and 6).
- **Anyone relying on the −3.74% drawdown as a worst case.** There is no documented floor (axis 1).
- **Holders of yzUSD who have not read this page.** The senior's cushion is this tranche's redeemable capital (axis 4).

## What to watch

- **The first-loss thickness as a share of senior supply.** 8.09% today, undisclosed as a target, and nothing commits the protocol to it (axis 4).
- **Whether an attachment or detachment point is ever published.** Its absence is the single largest disclosure gap here (axes 4 and 6).
- **The daily supplement.** A discretionary rate set under an unpublished policy is the first thing to move under stress (axis 6).
- **Secondary depth on Plasma.** 133 holders is the exit for anyone who did not come through the primary gate (axis 3).
---

*Revision history: 2026-08-29 — **first publication of this asset, staged.** yzPP is Yuzu's third product and this coverage had none. ⚠️ **Written so the tranche's purpose lands before any figure**, because every number here reads as deterioration if the reader does not already know that absorbing losses first is what the instrument does — a −3.68% NAV move on a first-loss tranche is the structure functioning, not failing. **The finding worth leading on is about the senior asset:** yzPP is **116.8% of yzUSD's entire surplus**, so **yzUSD's 6.92% overcollateralization is redeemable third-party capital rather than retained earnings** — a liability to holders who can ask for it back — and **no cap, attachment or detachment point is documented**, making 8.09% an observation rather than a commitment. **The April 2026 loss-absorption event is attributed to the issuer's published history and is explicitly not chain-confirmed**; the live NAV of 1.184 is. **Structural is 4.0 — better than syzUSD's 2.0** — because `owner()` and the ProxyAdmin both sit behind the 48-hour timelock and the syzUSD bridge EOA holds no role here; the identical 2.5 overall reflects subordination and a gated exit rather than a key problem. **Held at `production: false`** pending the site owner's decision on whether this page shares the Yuzu dashboard gate.*
