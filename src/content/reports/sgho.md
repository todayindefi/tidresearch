---
asset: "sGHO"
slug: "sgho"
aliases: ["sGHO", "Savings GHO", "Aave Savings GHO"]
chains: ["eth"]
category: "vault-share"
assessment_type: "full"
date: "2026-08-29"
last_verified: "2026-08-29"
featured: false
production: false
issuer: "Aave DAO"
underlying_assets: ["GHO"]
yield_bearing: true
market_cap_approx: 161905236
volatility_score: 6.5
liquidity_score: 5.5
structural_score: 6.5
redemption_score: 7.0
# Overall is 5.5 — EQUAL to GHO, deliberately, not below it. The wrapper is not
# what limits this score; the underlying is. Compare sfrxUSD, scored 5.0 against
# frxUSD's 5.5 the same day, where the wrapper's own admin was the problem.
overall_score: 5.5
---

# sGHO — Risk Report

**Moderate risk · 5.5/10**

sGHO is Aave's ERC-4626 savings vault over [GHO](/reports/gho/), at `0xE1753F2e00940cC31213dd92013cF019DFE4ca1d`. You deposit GHO, you receive sGHO, and the share price accrues.

⚠️ **It holds 161,905,236.04 GHO against a GHO supply of 699,000,000.00 — 23.16%.** That makes it **the largest single destination for the stablecoin**, not a peripheral product, and it means a reader looking at GHO's supply is looking at a number that is nearly a quarter this one vault.

| Yield | Underlying | Redemption | Assets vs shares | Chain |
|---|---|---|---|---|
| Accrues in share price | GHO | **Instant, ERC-4626 — no cooldown, lockup or queue** | 161.9M GHO against 159.9M sGHO | Ethereum |

## ⚠️ There is an older sGHO, and it is not this contract

**A legacy sGHO deployment exists, and reporting indicates holders were required to migrate off it.**

⚠️ **Its address has not been located, so this report cannot tell you what it is — only that it is not the contract above.** **Ticker resolution can land on the wrong one:** a search, an aggregator listing, or a wallet's token list may resolve "sGHO" to the legacy deployment.

**The contract this report covers is `0xE1753F2e00940cC31213dd92013cF019DFE4ca1d`, and that address — not the ticker — is what identifies it.** Check the address before depositing anything.

## The wrapper is good, and that is the finding

⚠️ **This report scores 5.5, the same as GHO — deliberately equal, not lower.** It is worth saying why, because a wrapper scoring level with its underlying is unusual on this site.

**Three things are genuinely strong here:**

- **Redemption is instant.** Standard ERC-4626 withdrawal, **no cooldown, no lockup, no queue.** For a savings wrapper that is the whole question, and this one answers it well.
- **Assets exceed shares** — 161.9M GHO against 159.9M sGHO. **The vault holds GHO, not a strategy book**, so what backs a share is the underlying itself rather than positions taken with it.
- **Governance is mutually locked.** Aave Governance v3's Executor (`0x5300a1a1…192a`) and PayloadsController (`0xdabad81a…aec5`) **own each other**, so neither can be changed except through a passed payload. ⚠️ **No key set can act unilaterally** — which is a materially different posture from a multisig that merely *has* a threshold.

**Compare [sfrxUSD](/reports/sfrxusd/), scored the same day at 5.0 against frxUSD's 5.5.** Same wrapper shape — ERC-4626 over a stablecoin, holding a large share of its supply — and the opposite admin quality: there, an accessor named `timelockAddress()` resolved to a 3-of-6 Safe with **no execution delay at all.** **The wrapper was what dragged that score down. Here the wrapper is not the constraint.**

## What you actually inherit

**A savings wrapper improves none of the underlying's problems, and GHO's are open.** Holding sGHO means holding [GHO](/reports/gho/) with a yield accrual on top, so its findings pass through undiluted:

- **44.3% of GHO supply is minted by a role-gated contract whose authorised callers cannot be enumerated on-chain**, and whose "GSM" label describes machinery it does not implement.
- **Supply has been exactly flat for sixteen days**, with 65.8% sitting at hard caps.
- **Both mainnet GHO Stability Modules are seized** — verified 2026-08-13, unchanged 2026-08-29 — and **Curve's GHO PegKeeper debt ceiling is 0**, so the peg's defence mechanism is wound down.

**That is why the score lands at 5.5 and not higher.** The vault is well built; **what it holds is the limiting factor.**

## Secondary depth — an LP finding, not a peg signal

The frxUSD/sGHO Curve pool is **68.4% sGHO against 31.6% frxUSD** and holds roughly **0.29% of supply, about $2.0M.**

⚠️ **Read that as a warning to liquidity providers, not as a peg signal.** A stableswap pool accumulates whatever is sold into it, so **an LP in that pool is long the tilted leg and gets longer as the tilt worsens** — an exposure that does not appear in a spot quote and is not visible to someone checking the price.

⚠️ **And do not read the thin pool as an exit problem.** **Primary redemption is open and instant**, so the front door is unlocked regardless of what secondary depth looks like. **The pool matters for people supplying it, not for people leaving.**

## Three things not established

⚠️ **Each is a gap in what could be read, not a property of the system.**

- **The governance execution delay.** Every delay accessor reverts. The 7-day `GRACE_PERIOD()` is the **execution window**, not the delay before execution. **"The delay could not be read" is supported; "there is no delay" is not**, and this report does not claim it.
- **The rate.** The roughly 4.25% figure in circulation is **press-reported.** Every rate accessor reverts, so **it is not presented here as measured.**
- **The legacy contract's address**, as above.

## Who should avoid this

- **Anyone who has not checked the contract address.** A legacy sGHO exists and the ticker does not distinguish them.
- **Anyone who would not hold GHO itself.** This is GHO with accrual; none of its open findings are improved by the wrapper.
- **Anyone providing liquidity to the frxUSD/sGHO pool without understanding the tilt.** You are long the heavier leg and get longer as it worsens.

## What to watch

- **Everything on the [GHO page](/reports/gho/).** The underlying is the constraint here, so its re-score trigger is effectively this report's too.
- **Whether the governance delay ever becomes readable**, which would close the largest open question about this vault's own admin.
- **The vault's share of GHO supply.** 23.16% today — a rising share makes the two assets one risk rather than two.
- **The Curve pool's tilt**, if you are supplying it.

---

*Revision history: 2026-08-29 — **first publication, staged.** sGHO holds **161,905,236.04 GHO — 23.16% of supply** — making it the largest single destination for the stablecoin. ⚠️ **Scored 5.5, deliberately EQUAL to GHO rather than below it, because the wrapper is not what limits it.** Redemption is instant ERC-4626 with no cooldown or queue; assets exceed shares (161.9M against 159.9M), so the vault holds GHO rather than a strategy book; and Aave Governance v3's Executor and PayloadsController **own each other**, so no key set can act unilaterally. **The contrast that makes the equal score legible: [sfrxUSD](/reports/sfrxusd/) was scored 5.0 against frxUSD's 5.5 the same day** — same wrapper shape, opposite admin quality, since its `timelockAddress()` resolved to a 3-of-6 Safe with no delay. **What a holder inherits is GHO's open findings**, none of which a savings wrapper improves. ⚠️ **The Curve pool is written as an LP finding rather than a peg signal:** at 68.4% sGHO it makes a provider long the tilted leg and longer as it worsens, invisible from a spot quote — **but thin secondary depth is not a gate here, because primary redemption is open and instant.** ⚠️ **Three items are recorded as not established, each a reading limit rather than a system property:** the governance execution delay (all delay accessors revert; the 7-day `GRACE_PERIOD()` is the execution window, so "unread" is supported and "none" is not), the ~4.25% rate (press-reported, every rate accessor reverts), and **the address of a legacy sGHO contract that is not this one** — carried prominently because ticker resolution can land on the wrong deployment.*
