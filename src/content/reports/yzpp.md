---
asset: "yzPP"
slug: "yzpp"
aliases: ["yzPP", "Yuzu Protection Pool", "Yuzu PP"]
chains: ["plasma"]
category: "vault-share"
assessment_type: "light"
date: "2026-08-29"
last_verified: "2026-08-29"
featured: false
# HELD IN STAGING DELIBERATELY — do not promote on a freshness or
# completeness sweep. yzPP belongs to the Yuzu set (yzUSD, syzUSD), which the
# site owner has held pending a working dashboard. Promotion of this page is an
# open question referred to the owner, not an oversight.
production: false
issuer: "Yuzu Money"
underlying_assets: ["USDT0"]
yield_bearing: true
market_cap_approx: 4729857
# issuer_score is DELIBERATELY ABSENT, not forgotten. The rest of the Yuzu
# family (syzUSD) omits it, and consistency within the set a reader compares
# matters more than matching the wider vault-share population, where 26 of 64
# carry one and 38 do not. Issuer risk is covered in the body.
volatility_score: 3.0
liquidity_score: 2.0
structural_score: 4.0
redemption_score: 2.0
overall_score: 2.5
---

# yzPP — Risk Report

**High risk · 2.5/10**

## Read this before any number below

**yzPP — the Yuzu Protection Pool — is a first-loss junior tranche.** It is an ERC-4626 vault on Plasma, denominated in **USDT0**, and its function is to absorb losses **before** the collateral pool behind Yuzu's stablecoin does.

⚠️ **It is designed to lose money before anyone else does.** That is not a flaw in the product; it is the product. Losses hit yzPP first, and that is what allows yzUSD to hold a collateralization ratio above 100%.

**Which means the figures in this report do not read the way the same figures would read on a stablecoin.** ⚠️ **A drawdown here is evidence the structure functioned** — the senior was protected, which is precisely what the junior is paid 29% to do. **If you take one thing from this page before the numbers start, take that.**

**Do not confuse yzPP with `yzPRIME`.** They are different books with different ratios, and Yuzu runs three products with adjacent tickers.

| Yield | Denomination | Primary exit | Secondary exit | Chain |
|---|---|---|---|---|
| 29% headline, discretionary | USDT0 (not yzUSD) | 30-day window, 5,000 yzPP minimum, **accreditation required** | **Open to anyone** | Plasma |

## The number that matters is about the senior, not the junior

```
yzPP                $4,729,857    = 8.09% of yzUSD supply   (first-loss thickness)
yzUSD surplus       $4,049,785    -> yzPP is 116.8% OF THE ENTIRE SURPLUS
+ Reserve Fund        $503,429    -> junior + reserve = 8.95% of yzUSD supply
```

⚠️ **yzUSD's 6.92% overcollateralization is not retained earnings. It is redeemable third-party capital.**

The senior tranche's protection is, in substance, **a liability to a different set of holders who can ask for it back.** yzPP is 116.8% of the entire surplus — so the cushion a yzUSD holder relies on is money belonging to yzPP holders, subject to their redemption rights rather than locked in place.

**That is a risk to holders of the senior asset at least as much as to holders of this one**, and it is the kind of fact that only appears when the two are read together.

⚠️ **And no cap, attachment point or detachment point is documented anywhere.** The protocol describes the waterfall qualitatively and states no threshold at which absorption stops. **So 8.09% is an observation about today's balances, not a disclosed parameter — nothing commits Yuzu to maintaining it, and nothing tells a holder how thin it may become.**

## The loss absorption has been observed once

**Per Yuzu's published history**, drawn from Accountable's timeline:

```
2026-04-23   NAV 1.137380   TVL 4,029,415      <- peak
2026-04-30                                     <- deepest drawdown, -3.74% from peak
2026-05-01   NAV 1.095482   TVL 3,275,693      -3.68% vs 04-23
syzUSD APY   7.0% on 04-25 · 7.0% on 05-01 · 7.0% on 05-07   UNCHANGED
recovery above the prior peak: early July 2026, roughly two months
```

**The junior absorbed and the senior's yield did not move.** That is the waterfall doing what it says.

⚠️ **Sourcing, stated plainly: the current NAV is chain-confirmed and the April event is not.** `totalAssets/totalSupply` reads **1.184000** against the feed's 1.183954 — a gap explained by its 15-minute cycle. **The 2026-04-30 drawdown comes from the issuer's published history**, and verifying it independently needs historical vault reads that Plasma's 10,000-block `eth_getLogs` cap makes expensive. **We have not measured it, and this report does not claim to have.**

⚠️ **And −3.74% is not a bound.** It is one observation of a mechanism with no documented floor, on a claim against a book that is roughly 70% levered with Ethena at 34.7%.

## Where it is structurally better than its sibling

⚠️ **This is worth stating because a reader comparing the Yuzu pages would otherwise assume the reverse.**

**yzPP's admin topology is the strongest of the Yuzu products.** Both `owner()` and the ProxyAdmin sit behind the **48-hour timelock**, and the bare EOA that controls the syzUSD bridge **holds no role here.** That is why Structural scores **4.0** against syzUSD's 2.0.

**Both land at 2.5 overall, for opposite reasons.** syzUSD's is a bare-key problem. **yzPP's is subordination plus a gated exit** — the contracts are better run and the position is worse.

## What a retail reader actually faces

⚠️ **Primary access is accredited-only. Secondary is open to anyone** — 133 holders on Plasmascan. **That is the route a retail buyer would actually take, and it carries no gating and no disclosure at all.** The instrument's own eligibility rules do not reach the venue where it is most likely to be bought.

**The exit is the sharpest term.** A 30-day redemption window with a 5,000 yzPP minimum, accreditation required — and ⚠️ **first-loss exposure continues for the entire 30 days.** **An exit request is not an exit: you carry the risk you are trying to leave, for a month**, and the practical alternative is a shallow secondary book on a young chain.

**The 29% is not underwritable.** It is syzUSD's base rate plus a **discretionary supplement set daily at 04:00 UTC** under an unpublished risk-premiums policy, part-funded by a Reserve Fund holding **$503,429 — 0.86% of yzUSD supply.**

⚠️ **And the issuer is anonymous with no legal entity, which sits oddly against an accreditation gate.** **The gating implies a compliance posture the disclosure does not match** — a reader should notice that the instrument asks more of them than its issuer discloses about itself.

## Who should avoid this

- **Anyone who wants yield without being the first to absorb losses.** That is the entire function of this position.
- **Anyone who might need the money inside a month.** The window is 30 days and the exposure runs through all of it.
- **Anyone buying on secondary because primary was gated.** The gate exists for a reason the secondary route does not remove.
- **Anyone relying on the −3.74% drawdown as a worst case.** There is no documented floor.

## What to watch

- **The first-loss thickness as a share of senior supply.** 8.09% today, undisclosed as a target, and nothing commits the protocol to it.
- **Whether an attachment or detachment point is ever published.** Its absence is the single largest disclosure gap here.
- **The daily supplement.** A discretionary rate set under an unpublished policy is the first thing to move under stress.
- **Secondary depth on Plasma.** 133 holders is the exit for anyone who did not come through the primary gate.

---

*Revision history: 2026-08-29 — **first publication of this asset, staged.** yzPP is Yuzu's third product and this coverage had none. ⚠️ **Written so the tranche's purpose lands before any figure**, because every number here reads as deterioration if the reader does not already know that absorbing losses first is what the instrument does — a −3.68% NAV move on a first-loss tranche is the structure functioning, not failing. **The finding worth leading on is about the senior asset:** yzPP is **116.8% of yzUSD's entire surplus**, so **yzUSD's 6.92% overcollateralization is redeemable third-party capital rather than retained earnings** — a liability to holders who can ask for it back — and **no cap, attachment or detachment point is documented**, making 8.09% an observation rather than a commitment. **The April 2026 loss-absorption event is attributed to the issuer's published history and is explicitly not chain-confirmed**; the live NAV of 1.184 is. **Structural is 4.0 — better than syzUSD's 2.0** — because `owner()` and the ProxyAdmin both sit behind the 48-hour timelock and the syzUSD bridge EOA holds no role here; the identical 2.5 overall reflects subordination and a gated exit rather than a key problem. **`issuer_score` is deliberately omitted** to match the rest of the Yuzu family. **Held at `production: false`** pending the site owner's decision on whether this page shares the Yuzu dashboard gate.*
