---
asset: "USDat"
slug: "usdat"
aliases: ["USDat", "Saturn USDat"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "fiat-backed via tokenized T-bills"
assessment_type: "light"
audience: "retail"
companion_report: "susdat"
date: "2026-05-20"
last_verified: "2026-08-11"
featured: false
production: true
issuer: "Saturn Labs"
audited_reserves: true
market_cap_approx: 96323000
peg_mechanism_score: 6.5
backing_score: 7.0
underlying_score: 5.5
liquidity_score: 5.5
issuer_score: 5.5
overall_score: 5.0
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usdat"
---

# USDat — Retail Risk Report

**Moderate risk · 5.0/10**

| Backing | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| About 100% $M (T-bills via M0), 100% on-chain verifiable | 1:1 USDC redemption (onboarded only) or Curve USDat/USDC (anyone) | Same-day for onboarded; minutes via Curve for retail | About 6 months | Ethereum |

## Summary

USDat is Saturn Labs' permissioned, non-yield stablecoin. Reserves are held directly in the USDat smart contract itself — effectively all of it as **$M** (M0's federated tokenized US Treasuries), alongside a USDC float that the redemption gateway draws down and refills on demand. Onboarded users mint and redeem 1:1 against either USDC or $M through Saturn's app; non-onboarded holders are restricted to secondary-market exit, in practice the single Curve USDat/USDC pool.

The 5.0/10 score reflects the strongest backing story in our coverage — **every dollar of USDat supply is matched by tokens you can verify with three on-chain calls, no oracle required** — set against a narrower set of drags than the asset had at launch. The **admin now sits behind a 5-day on-chain timelock** that also gates contract upgrades, which is a real improvement and is why the issuer axis carries a higher number than the rest of this report's tone might suggest. Working the other way: the **holder universe is restricted to onboarded addresses** by issuer design, which limits general DeFi composability and concentrates secondary depth in one venue; **supply has contracted about 35% from its June peak to around $96M**; and Saturn's roadmap still discloses a future rotation toward digital-credit (STRC) exposure that would change the risk profile if it happens.

The important nuance on that supply contraction is that the **backing ratio never moved**. Roughly a third of the float redeemed out over ten weeks and the reserve tracked it down almost exactly, holding just above 100% the whole way. That is the closest thing to a live stress test this asset has, and it passed.

## Backing & solvency

USDat's distinguishing claim — and verifiably so — is that **all capital sits directly in the USDat smart contract address**. There is no off-chain treasury, no custodian wallet, no separate reserve manager contract; just the token contract holding $M and USDC. At an independent read on 2026-08-11 (block 25,730,645) the contract held **96,428,762 $M against 96,323,351 USDat outstanding — a backing ratio of 100.11%**, with a USDC float of about $29. That last figure is not a deficit and should not be read as one: the USDC leg is a redemption-gateway buffer that Saturn refills on demand from $M, so a drained float means recent redemptions cleared, not that reserves are short.

The composition claim is therefore best stated as **effectively 100% $M**. The only other ERC-20s in the contract are nine spam airdrop tokens with names like `AIFreeUse.cc` and `WorldCupAI.pro` — unsolicited dust, correctly excluded from the backing calculation, and worth nothing. There is no STRC, no SATA, and no digital-credit exposure of any kind.

**The redemption path has now been tested at scale.** Supply peaked at **$149.3M on 2026-06-03** and has fallen steadily since — through roughly $128M in early June, $117M mid-June, $111M in early July, $102M mid-July, to about **$96M in August**. That is a sustained bleed rather than a single exit event, and across all of it the backing ratio held around 100.1%. Every holder who left was paid at par against $M, on an asset that had never previously seen sustained outflow. For a stablecoin this is the evidence that matters most, and it is the reason the backing axis holds at 7.0 despite a materially smaller franchise.

The other side of that: **a permissioned stablecoin that sheds a third of its float in ten weeks is telling you something about demand**, not about solvency. It does not damage the claim of any remaining holder, but it does mean the addressable market for an onboarding-gated cryptodollar is proving thinner than the launch trajectory implied, and a shrinking base makes the single-venue liquidity picture below harder to improve.

The **two-layer wrapping** caveat is unchanged: USDat is on-chain-verifiable down to $M, but $M itself is backed by US Treasury bills held by M0's federation of authorized minters. That second layer is not directly on-chain-verifiable; it depends on M0's protocol and minter posting. M0 is a reputable tokenized-RWA product, but the trust chain stops at $M, not at the T-bill itself.

**Forward risk worth tracking:** Saturn's documentation describes possible future allocations toward digital-credit exposure — most plausibly STRC, Strategy's variable-rate perpetual preferred; see the [sUSDat report](/reports/susdat/) for what that backing class looks like under stress. **As of 2026-08-11 that rotation has not started.** The yield-and-credit leg of the Saturn stack is contained inside sUSDat's dynamic reserve, and USDat remains the clean residual asset. The live dashboard's drift-probe panel watches for any non-allowlist token appearing in the treasury — the day that flips, the backing-risk profile steps up materially and this report needs re-rating.

## Exit liquidity

Two paths, very different audiences:

**For onboarded users:** mint and redeem 1:1 against USDC through Saturn's web app. This is the canonical strong exit — same-day, no slippage, no AMM tax — and the ten-week outflow described above demonstrates it clears under load. But it requires completing Saturn's KYC/onboarding, which makes USDat effectively an institutional/whitelisted instrument from the issuer side.

**For non-onboarded users:** secondary market only, dominated by the Curve USDat/USDC pool. That pool holds roughly $10M against a supply near $96M — call it a tenth of the float — and turns over about half its own depth in a normal day. Retail-size exits are cheap: sizes up to around $1M price inside single-digit basis points. The number that governs the score, though, is not the retail clip but the **realistic single-shot exit, which is capped at about 5% of pool depth — roughly half a million dollars**. Beyond that you are moving the pool against yourself, and a multi-million-dollar clip through the same route prices hundreds of basis points wide. The live dashboard carries the current slippage ladder at $1K / $10K / $100K / $500K.

Daily volume on that pool runs into the millions, but **volume is not depth** — it measures how often the pool is used, not how much you can take out of it at once. The exit ladder is the honest measure, and it is the one the Liquidity axis uses.

The peg itself is the strong part of the picture: USDat has traded inside a band of well under 10 basis points over the last 30 days, and the current Curve-implied price sits a fraction of a basis point below the dollar.

**What the Liquidity 5.5 reflects:** measured exit depth of roughly half a million dollars in a single clip, a tight peg band, healthy turnover, **one deep venue and only one**, and a pool that holds about a tenth of supply. The single-venue concentration is the binding constraint, and it is structural rather than cyclical — most DeFi smart contracts cannot hold a permissioned token, which truncates the universe of venues that can host it in the first place.

That permissioning penalty is scored on the **Issuer** axis (5.5), not here, so the two are not double-counted: Liquidity scores the depth that actually exists for someone already inside the addressable universe.

## Peg & yield dynamics

**Peg.** USDat has held a tight band against USDC since launch, and that band has tightened rather than loosened as supply contracted. Brief launch-day prints outside it were seed-pool noise, not stress. The live dashboard renders the current Curve-implied price and deviation from the dollar peg.

**Yield.** USDat is **non-yield-bearing by design.** The $M reserves accrue T-bill yield, but that yield is captured by Saturn's protocol revenue vault, not passed to USDat holders. Users seeking yield stake into [sUSDat](/reports/susdat/), Saturn's sibling vault that carries the STRC-dividend pass-through — a materially riskier instrument.

This makes USDat structurally analogous to USDC or USDT on the holder side: a stable unit of account, no yield, with the protocol monetizing the float. The trade-off is that USDat's float is institutional-permissioned rather than general-purpose.

## Audits, admin & team

**Audits:** three reports published — Three Sigma (Audit #1) and Certora (Audits #2 and #3). Certora is a top-tier formal-verification shop; two Certora reports plus one Three Sigma is a real audit package for a protocol under a year old. Individual finding severities are not surfaced in this review. No new audits have been published since April 2026.

**Admin control sits behind a 5-day on-chain timelock.** USDat is a TransparentUpgradeableProxy whose upgrade path routes through an OZ ProxyAdmin. Both `DEFAULT_ADMIN_ROLE` on the token and ownership of that ProxyAdmin are held by a **`TimelockController` at `0xfD5782E3BFF366601da3973aE30C583dE4F08A67` with a minimum delay of 432,000 seconds — exactly five days.** Verified independently on-chain on 2026-08-11. Practically, this means: **if Saturn wants to change the contract or upgrade its logic, the action becomes publicly visible five days before it can take effect, and you can redeem or sell in the meantime.** For a token that is redeemable 1:1 at par, five days of notice is a meaningful protection rather than a formality.

The wiring is what makes it real rather than decorative, and each leg was checked:

- **Proposer** — Saturn's operational address. Only Saturn decides what gets queued.
- **Executor** — the zero address, meaning **anyone can execute** a queued action once the delay elapses. Saturn cannot quietly let a scheduled action expire on a technicality or hold it hostage.
- **Canceller** — Saturn's operational address.
- **The timelock administers itself.** Its own admin role is held by the timelock contract, not by Saturn — so the delay cannot be shortened, and no new role can be granted, without first passing through the five days.

The migration happened **between 2026-06-08 and 2026-06-10** — during the sharpest week of the June crypto drawdown, not comfortably after it, which is the harder time to do governance work.

Three residual risks remain, and they are the reason this is a 5.5 rather than something higher:

- **Saturn is both sole proposer and sole canceller.** It alone decides what enters the queue and can withdraw anything it queued. The timelock constrains *speed and surprise*, not *authority*.
- **The proposer key is represented as a Fireblocks 2-of-3 MPC wallet, and that representation cannot be verified on-chain.** An MPC wallet and an ordinary single-key address look identical from the outside. Taken at face value it means no single compromised device can queue an action; taken skeptically it is an issuer claim with no independent attestation behind it. Fireblocks does not publish per-customer proofs. This is load-bearing for the issuer score and is stated here rather than assumed.
- **The holder universe is KYC-permissioned**, which is an issuer design choice with real consequences for composability and venue diversity, as described above.

The same timelock now holds the admin role on **sUSDat** as well, so the two assets continue to share an admin surface — but that shared surface is now delay-gated rather than immediate. See the [sibling report](/reports/susdat/).

**Team and backers:** named team with prior experience at Artemis and M31 Capital. $800K raised January 2026 from YZi Labs and Sora Ventures. Named institutional depositors disclosed (Flowdesk, Galaxy — around $10M aggregate). Operational partners include Galaxy, Securitize, and Clear Street.

## Who this is for

- **Onboarded institutional desks** wanting an on-chain T-bill-equivalent cryptodollar with direct 1:1 USDC redemption and verifiable backing — USDat does this well, and the redemption path has now cleared a third of the float without breaking par.
- **DeFi users who specifically want the cleanest on-chain backing claim available**, and who don't need general DeFi composability — USDat is usable as a passive holding via the Curve pool, but not as collateral in most lending markets.

## Who this is NOT for

- Anyone needing general-purpose DeFi composability (lending collateral, LP-paired assets across many venues) — the permissioned holder universe is the wrong shape.
- Anyone exiting size on the secondary market. Around half a million dollars leaves cleanly in one clip; several million does not, and there is only one venue to try it on.
- Anyone who needs the strongest possible admin posture. The 5-day self-administered timelock is a genuine upgrade, but Saturn remains sole proposer and sole canceller, and the custody claim on that key is an issuer representation rather than a verified fact.
- Yield-seekers — USDat is non-yield by design; [sUSDat](/reports/susdat/) is the yield-bearing sibling, with a materially different risk profile.

## What to watch

- **Anything queued in the timelock.** Scheduled operations are visible on-chain for five days before they can execute. This is now the single most useful thing to monitor, and it is the practical benefit of the migration: the warning arrives before the change, not after.
- **A non-{$M, USDC} token in the treasury.** The disclosed-but-unstarted rotation toward STRC or other digital credit. The drift-probe panel on the live dashboard fires the moment any new token appears; that is a backing re-rate, not a routine update.
- **Backing ratio drift below 100%.** It has sat around 100.1% through a 35% supply contraction; sustained drift below 99.5% would be a tier-1 signal.
- **Whether the supply bleed stops.** A stabilizing float would argue the June-to-August contraction was a repricing of demand rather than a trend; continued decline compounds the single-venue liquidity problem.
- **Changes to timelock roles.** A new proposer, a new canceller, or any move to alter the delay would itself have to pass through the delay — so watch for it being scheduled.

## Live dashboard

Live backing composition, peg, slippage tiers, admin status, and drift-probe results: [tidresearch.com/dashboards/?asset=usdat](https://tidresearch.com/dashboards/?asset=usdat) — refreshed hourly.

## Sibling

- [sUSDat](/reports/susdat/) — Saturn's yield-bearing wrapper for USDat, carrying the STRC-dividend pass-through and a materially different risk profile

---

*This report is based on public Saturn documentation and independent on-chain reads, most recently at block 25,730,645 on 2026-08-11. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).*

*Revision history: 2026-08-11 — Liquidity 7.5 → 5.5, Issuer 4.5 → 5.5, overall 5.5 → 5.0. **The liquidity move is a measurement correction, not a deterioration**: observed depth was flat over the period ($500,000 to $479,957 clearing inside 25 bps) and the 30-day peg band improved from 10.51 bps to 6.44 bps, but the model that produced the earlier 7.5 measured slippage against a stale reference, allowed a truncated quote ladder to report itself healthy, and stopped short of the sizes that actually break. Restated on the corrected derivation. **The issuer move follows a verified admin migration**: between 2026-06-08 and 06-10 both `DEFAULT_ADMIN_ROLE` and ProxyAdmin ownership moved from a single externally-owned address to a self-administered `TimelockController` with a 5-day minimum delay and permissionless execution, so the earlier statement that admin actions land immediately with no observation window no longer holds. Also corrected: market cap to around $96M following a 35% supply contraction from the June peak (backing ratio held around 100.1% throughout), age to about 6 months, and the reserve mix to effectively 100% $M with the USDC gateway float drawn down. The disclosed STRC rotation is confirmed as still not started. Initial publish 2026-05-20.*
