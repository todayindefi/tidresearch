---
asset: "frxUSD"
slug: "frxusd"
aliases: ["frxUSD", "Frax USD", "FRXUSD"]
chains: ["eth", "fraxtal", "sonic", "arbitrum", "optimism", "base", "bsc", "avax", "polygon", "linea", "solana"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
audience: "retail"
date: "2026-06-10"
last_verified: "2026-08-23"
last_revised: "2026-08-29"
peg_mechanism_score: 6.5
backing_score: 6.5
liquidity_score: 5.5
issuer_score: 5.0
overall_score: 5.5
issuer: "Frax Finance"
market_cap_approx: 105500000
featured: false
production: true
---

# Frax USD (frxUSD) — Risk Report

**Moderate risk · 5.5/10 · Strong Treasury backing, undercut by unaudited upgradeable contracts**

> **This report covers frxUSD (`0xCAcd6fd2…586E29`), Frax Finance's current flagship stablecoin — NOT Legacy FRAX (`0x853d955a…1b99e`).** They are separate assets with separate balance sheets and separate contracts. The 1:1 FRAX→frxUSD migration was closed in April 2025 (FIP-430). If you're looking at the deprecated, under-collateralized predecessor, see the Legacy FRAX report instead.

frxUSD is Frax Finance's flagship payment stablecoin, launched April 2025 as part of the "North Star" upgrade. It is backed 1:1 by tokenized US Treasuries held with regulated custodians, and it replaced legacy FRAX as the primary Frax dollar. The asset itself has performed well — the peg has held tightly since launch — but the structural risks sit on the contract and exit side, not the backing.

| Peg | Yield | Exit | Status | Chains |
|---|---|---|---|---|
| $1.00 (trades ≈$0.9993) | None (stake to sfrxUSD for yield) | Per-custodian redemption; USDC exit gated by a ≈$10M buffer | Active flagship, float contracting | Ethereum + 10 chains (LayerZero OFT) |

⚠️ **One thing this report has never said about its own supply: better than a third of it sits in a single vault.** Measured 2026-08-29, **sfrxUSD — the staked form — holds 36,232,343.43 frxUSD against a total supply of 101,827,130.47, or 35.58%.** **So a reader treating frxUSD's float as broadly distributed is reading a number that is substantially one contract's balance**, and the concentration is between the two assets rather than across holders. ⚠️ **And the vault's governance is weaker than its interface suggests: its `timelockAddress()` accessor resolves to a 3-of-6 Safe with no execution delay**, while `owner()` reverts — so the accessor's name is the only governance signal the interface offers, and it asserts a delay that does not exist. See the **[sfrxUSD report](/reports/sfrxusd/)** for the vault's own assessment, including the accessor finding above and the contract-enforced yield ceiling.

## Backing & reserves

**The backing is genuinely high-quality — tokenized US Treasuries — but concentrated and not independently audited at the token level.**

frxUSD is collateralized by a basket of tokenized Treasury products: **BlackRock BUIDL** (via Securitize), **Superstate USTB and USCC**, **WisdomTree WTGXX**, plus USDC (Circle), AUSD (Agora), and JTRSY (Centrifuge). Per LlamaRisk's July 2025 review the collateral ratio was about **103.7%**, and despite the BlackRock-forward marketing, **Superstate funds (USTB + USCC) represented over 90% of backing in aggregate** at that time. T-bill quality is excellent; the concentration in a single fund manager is the risk vector. The current public framing emphasizes custodian diversification, but the live split could not be independently re-verified on this pass — treat the ≈90% Superstate figure as the last confirmed reading, not a guarantee of today's mix.

**A consolidated proof-of-reserves feed now exists, but we still have not been able to read it.** frxUSD integrated **Chaos Labs Proof of Reserves** in late 2025 to publish on-chain collateralization attestations as the token expands cross-chain. This is a real transparency improvement over launch — but it has now failed verification on two consecutive passes, by two different failure modes: on 2026-06-08 the frxUSD PoR card rendered empty ("—") while sibling feeds (USDe, AUSD, USDT0) populated normally, and on 2026-08-13 `oracles.chaoslabs.xyz` did not resolve at all from our environment. That second failure may well be transient or local to us — but the practical status is unchanged, and it has been unchanged for two months: the PoR "exists but is unverified." The fallback remains the underlying-fund attestations (EY for USTB/WTGXX, PwC for BUIDL). **There is no third-party audit of the frxUSD stablecoin contracts themselves** (see Contracts below) — the audits cover the underlying funds, not the token.

## Exit liquidity & redemption

**This is the most underappreciated risk: redemption is fragmented, and clean USDC exit at scale is shallower than the headline suggests.**

Redemptions run through Frax's deposit/redemption coordinator, and they are **non-fungible across custodians** — each custodian redeems into its own asset (BUIDL → BUIDL, USTB → USTB, and so on). A retail holder who wants to exit to **USDC** is funneled through a **≈$10M Superstate USDC buffer**. Beyond that buffer, large redemptions push you into BUIDL/USTB shares and a separate institutional off-ramp. In practice, USDC-at-par exit liquidity is much thinner than the ≈$105.5M float implies.

On the secondary market, liquidity has improved but is still mid-tier:

| Venue | Notes |
|---|---|
| Curve (Ethereum) | The DEX center of gravity, but paired more against FRAX / sUSDS than USDC — so deep USDC-exit-at-scale is the residual constraint. |
| Aave V4 | frxUSD became a **default borrowable asset on Aave V4 on 2026-04-06**, adding a major lending venue and on-chain depth. |
| Cross-chain (LayerZero OFT) | ⚠️ **Restated 2026-08-23 — this was framed as a liquidity point and it is an authority point.** Expanding across 10+ chains broadens reach and fragments depth, but the material fact is that **six chains run at a lower signing threshold than Ethereum**, and one small set of keys reaches all of them. See below. |
| Tier-1 CEX | **None yet.** No major centralized listing. |

Daily volume is now about **$10.8M** (roughly 3.7× the ≈$2.9M seen in April), so the trajectory is improving — but for a sized exit, the binding constraint is still the USDC-pairing depth, not the headline TVL.

## Peg performance

**frxUSD has held its peg tightly since launch — this is the strongest part of the picture.** Per LlamaRisk, the maximum deviation has been about **$0.00985**, with only one wick beyond 0.5% (June 26, 2025) that recovered within hours. Hourly volatility has been tighter than USDe. Current price is about **$0.9993** (roughly 7bps below par, 2026-08-13). The risks in this report are structural (contracts, redemption), not operational — the token has done what a stablecoin should so far.

## Contracts & admin

**This is where the score is lost.** Three things compound:

- **No third-party audit of the frxUSD stablecoin contracts.** LlamaRisk states this explicitly. The contracts are **upgradeable proxies**. Frax's in-house "Security Cartel" reviewed the FIP-430 upgrade path, and ChainSecurity audited the FXB-side upgrade — but the frxUSD ERC-20 itself has no public third-party audit report. For an upgradeable stablecoin, that is the single biggest contract-level risk.
- ⚠️ **Corrected 2026-08-23: there IS a timelock on upgrades, it is 24 hours, and it does not cover the powers that matter most.** This report previously said upgrades execute with zero delay and that no timelock existed. Both were wrong. Read at Ethereum head with a USDC control passing: the frxUSD proxy's admin is a ProxyAdmin at `0x0b2c3df0…`, whose owner is a **Compound-style Timelock** at `0xb898ad29…` with `delay()` = **86,400 seconds, 24 hours**.

  **But the correction cuts the other way too, and on balance the picture is not better.** The timelock's own `admin()` is `0xffFFfF4F…3937` — **the same address as `frxUSD.owner()`**, an equality checked directly rather than assumed. That Safe is **threshold 4 of 7 owners, all seven of them plain externally-owned accounts.** So one holder controls three powers at three different speeds:

  | power | route | delay |
  |---|---|---|
  | Upgrade the implementation | ProxyAdmin → Timelock | **24 hours** |
  | **Mint** | owner-gated directly | **none** |
  | **Freeze / pause** | owner-gated directly | **none** |

  **The powers that can seize or halt a holder's balance are the ones with no delay on them.** These are not three independent failure paths — it is one signer set with three routes out, and threshold 4 governs all of them.

  ⚠️ **And the delay is only as deep as its floor.** The timelock reports `MINIMUM_DELAY()` = **7,200 seconds — two hours.** The same Safe that the delay constrains is the body that can call `setDelay` on it, so the practical protection is 24 hours of notice **once**, and two hours thereafter. A gate whose depth is set by the party it gates is a different instrument from one with a hard floor beneath it.
- **An unconfirmed December 2025 "stealth patch" allegation.** A single-source Medium post (Donnyoregon) claims Frax silently deployed a contract patch between Dec 5–16, 2025 to fix a zero-value-ticket vulnerability without crediting the bounty submitter, with on-chain bytecode reportedly diverging from the verified Etherscan source; Token Sniffer flagged it. No Frax public response has surfaced. **We can't confirm the specific claim** — but the 4-of-7 / no-timelock / upgradeable / unaudited setup is exactly what would *enable* such an action silently, which is why it's worth flagging.

### The owner address changed, and we found it by re-reading the chain

**A previous version of this report named `0xB174…3f27`, a 3-of-5 Safe, as the controlling multisig. That is no longer true.** Verified on-chain 2026-08-13:

| | Previously published | Verified 2026-08-13 |
|---|---|---|
| Owner | `0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27` | **`0xfFFffF4F3baC444b2C0ecf2A1840d018bE783937`** |
| Configuration | 3-of-5 Safe | **4-of-7 Safe (v1.3.0)** |
| Timelock | none | **none** — unchanged |
| Signer overlap | — | **zero** (`isOwner()` on the new Safe returns false for the old one) |

The old Safe still exists and is still 3-of-5; it simply no longer controls frxUSD.

There are two honest readings here and you should hold both.

**The direction is better.** Four independent keys out of seven is a higher bar to compromise than three out of five, and key compromise is the most likely failure mode for an upgradeable, unaudited stablecoin contract. That is a real improvement, and it is why the Issuer score moves from 5.0 to 5.5.

**The manner is not reassuring.** This was a complete, zero-overlap replacement of the controlling signer set, on a contract that is an upgradeable proxy with no public third-party audit and no execution delay — and we found it by routinely re-reading the chain, not from any announcement or governance record. **We could not locate the record authorising the handover.** That absence does not mean no such record exists; it means we cannot distinguish "a maturing issuer widening its multisig through proper process" from "a signer set replaced quietly" using on-chain state alone. Both are consistent with what we can see. Treat the improvement as provisional until the authorising record surfaces.

### ⚠️ Four keys reach all seven chains, and the OFT path does not need an upgrade

**The L2 Safes are not merely similar — they are the same owner set.** On **arbitrum, bnb, polygon and optimism**, the Safe holds an **identical six-owner set at threshold 3**, compared as sets rather than by overlap. Ethereum's Safe is **4-of-7** and shares **exactly three** of those six. So **three shared owners carry every L2 leg, and one Ethereum-exclusive signature completes Ethereum's four: four keys reach all seven chains.** (Base and linea did not answer on public RPC — **four of six L2 legs confirmed**, not all six.)

⚠️ **Do not read the chain count as independent risk.** The surfaces differ in every visible way — two token addresses, three distinct codehashes, six Safe addresses — while **the authority behind them is one**. Twenty-two internal rows describe **one authority expressed twenty-one times**, not twenty-one authorities. That is the exact inverse of the AUSD case, where one address wore nine different codehashes, and it lands in the same place: **address-sameness and code-sameness tell you nothing about authority-sameness, in either direction.**

⚠️ **And on the OFT legs, the dangerous call is not an upgrade.** This report says elsewhere that upgradeability is the single biggest contract-level risk. On an omnichain token that is the wrong thing to watch: **`setPeer` points the token at a peer address, and inbound messages from a peer credit balances.** Pointing it at a peer you control mints — **no upgrade, no proxy interaction, no delay, and nothing for a proxy-watcher to see.** A holder monitoring the implementation slot on those chains is monitoring the wrong surface.

⚠️ **The binding criticism is unchanged, but this report had the fix wrong.** It previously said that a timelock, rather than a wider signer set, is what would actually fix this configuration. **A timelock already exists — and it did not fix it**, for two reasons now visible: it covers upgrade only, leaving mint, freeze and pause on a direct owner-gated path with no delay at all; and its own floor is two hours, set by the same Safe it constrains.

**So the honest restatement of what would fix this:** a delay over the *balance-affecting* powers, not only over upgrade; a floor that the governed party cannot lower; and a signer set that is not seven externally-owned accounts. Every property that made the December 2025 stealth-patch allegation credible is still present today — the allegation concerned a silent change to contract behaviour, and 24 hours of notice on the upgrade path is a real but partial answer to it.

Frax Finance itself is an established team (Sam Kazemian, 5+ years, active development on frxUSD, Fraxtal L2, and frxETH) — the issuer-level track record is real. The contract-trust profile is the offsetting concern.

## Growth & adoption

**The float is now contracting, not flat.** ≈$65M (Jul 2025) → ≈$125M (Apr 2026) → ≈$124M (Jun 2026) → **≈$105.5M (Aug 2026)** circulating — down roughly **15% in nine weeks**. A previous version of this report called this "plateaued"; that framing is now too kind.

What makes it worth a second look is the combination: the float is shrinking *while* integrations keep broadening (Aave V4 as a default borrowable asset, more OFT chains). A stablecoin adding venues and losing float usually means the new venues are not where the demand is. More than a year after launch it remains a sub-top-50 stablecoin, well behind newer entrants like USDS and USDe.

(Circulating figures are DefiLlama's **Frax USD** series — the one to watch is frxUSD, id 235. Legacy FRAX is a different token with a different balance sheet under id 6; the two are frequently confused.)

## Who it's for · Who should avoid

**Reasonable for:**
- Frax-ecosystem users who want Treasury-backed dollar exposure and value the tight peg, sized to the ≈$10M USDC-buffer reality (i.e. not relying on instant at-par USDC exit for a large position).
- Holders comfortable with the contract-trust trade-off in exchange for high-quality T-bill backing.

**Avoid / size down if:**
- You need deep, instant, at-par **USDC** exit for a sized position — the redemption fragmentation and ≈$10M buffer are the binding constraint.
- You weight unaudited upgradeable contracts under a thinly-timelocked multisig heavily — 4-of-7 is better than the 3-of-5 that preceded it, and upgrades now carry 24 hours' notice, but **mint, freeze and pause still execute instantly** and the delay's floor is two hours, set by the Safe it governs here, and that has not changed.
- You're confusing it with Legacy FRAX — they are different assets (see the disambiguation note at the top).

## What to watch

- **Chaos PoR feed.** If the frxUSD card on the Chaos dashboard starts populating with live numbers, that closes the current "exists but unverified" gap and is a genuine backing-transparency uplift.
- **Backing concentration.** The ≈90% Superstate exposure (USTB + USCC) vs the "diversified custodians" marketing — watch for the live split to be re-confirmed either way.
- **Multisig / upgrades.** The 4-of-7 owner (`0xfFFf…3937`, in place as of 2026-08-13) can upgrade behind a **24-hour timelock it also administers**, and can mint, freeze and pause **with no delay at all**. Watch for a `setDelay` call — the floor is two hours. Any implementation upgrade, another owner change, or resolution of the Dec 2025 patch allegation would be material — as would a timelock, which is the change that would actually move this score.
- **The authorising record for the August 2026 owner migration.** A Frax governance post or vote documenting the handover to the 4-of-7 Safe would resolve the open question above. Its appearance would firm up the Issuer score; continued absence keeps the improvement provisional.
- **USDC-exit depth.** The Superstate USDC buffer and Curve USDC-pairing depth are the real exit constraint — more than headline float.
- **FXB redemption asset.** Note that Frax Bonds (FXBs) currently redeem to *Legacy FRAX* on mainnet, not frxUSD — the Fraxtal upgrade making frxUSD the FXB underlying was still being audited at last check. Verify before relying on it.

---

*This report describes frxUSD as of August 2026, based on public Frax/LlamaRisk documentation and direct on-chain reads (owner, threshold, signer overlap and supply re-verified 2026-08-13). Frax Finance has not engaged on this report. The backing sits partly off-chain with regulated custodians and tokenized-fund issuers; figures rely on those issuers' attestations plus on-chain data. The Chaos Labs PoR feed could not be retrieved on either of the last two passes. Corrections welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

*Revision history: 2026-08-29 — **a supply-concentration fact added; no score change.** ⚠️ **This report described frxUSD's supply without ever noting that 35.58% of it sits inside one vault:** sfrxUSD holds **36,232,343.43** against a total supply of **101,827,130.47**, measured 2026-08-29. **A reader treating the float as broadly distributed was reading substantially one contract's balance.** ⚠️ **Recorded with it: that vault's `timelockAddress()` accessor resolves to a 3-of-6 Gnosis Safe with no execution delay** — `getMinDelay()` and `MINIMUM_DELAY()` both revert — while `owner()` reverts too, so **the accessor's name is the only governance signal the interface gives, and it asserts a protection that is not there.** Written as review being defeated rather than concealment; the shape fits an accessor kept for compatibility after the address behind it changed. **No link is added to the sfrxUSD report, which is written but staged** and would 404 from this page. **Scores unchanged** — this is a disclosure gap on an existing page rather than new evidence about frxUSD's backing. 2026-08-23 (second pass) — **Issuer 5.5 → 5.0 on cross-chain authority; Overall held at 5.5.** This report's only cross-chain framing was a liquidity sentence — expansion "broadens reach but fragments depth" — while **six chains run at a lower signing threshold than Ethereum**. Measured: **arbitrum, bnb, polygon and optimism hold an identical six-owner Safe at threshold 3**, compared as sets rather than by overlap, and Ethereum's 4-of-7 shares **exactly three** of those six. **So three shared owners take every L2 leg and one Ethereum-exclusive signature completes Ethereum's four — four keys reach all seven chains.** Base and linea did not answer on public RPC, so this is **four of six L2 legs confirmed**, not all six. ⚠️ **Explicitly not a second dock for the earlier pass**, which proposed no change because the published picture already matched reality on Ethereum. This prices a distinct surface the report had characterised as a liquidity matter. ⚠️ **And the chain count is not independent risk:** twenty-two internal rows are **one authority expressed twenty-one times**. Every visible feature differs — two token addresses, three codehashes, six Safe addresses — while the owner set is one. The inverse of AUSD, where one address wore nine codehashes, and it lands in the same place: **address-sameness and code-sameness are independent of authority-sameness, in both directions.** Also recorded: on the OFT legs the dangerous call is **`setPeer`, not an upgrade** — pointing the token at a peer you control credits balances on inbound messages, with no proxy interaction and no delay, so a reader following this report's own advice to watch upgradeability is watching the wrong surface there. **Overall held at 5.5** because Backing 6.5 and the redemption mechanics are untouched and this is one axis moving on one surface. 2026-08-23 — **admin topology corrected in both directions; no score change.** This report stated that frxUSD upgrades execute with **zero delay** and that **no timelock** existed, and that a timelock *"is what would actually fix this configuration"*. All three were wrong. Read at Ethereum head with a USDC control passing: the proxy's admin is a ProxyAdmin at `0x0b2c3df0…` owned by a **Compound-style Timelock** at `0xb898ad29…`, `delay()` **86,400 seconds — 24 hours**. **So the fix this report called for had already been implemented, and it did not resolve the concern.** Two reasons, both now on the page. **First, it covers upgrade only:** the timelock's `admin()` is `0xffFFfF4F…3937`, verified as **the same address** as `frxUSD.owner()` — a Safe at **threshold 4 of 7, all seven owners plain EOAs** — and **mint, freeze and pause are owner-gated directly with no delay at all.** The powers that can seize or halt a holder's balance are precisely the undelayed ones. These are not three independent failures: one signer set, three routes, threshold 4 on each. **Second, the delay has a two-hour floor:** `MINIMUM_DELAY()` is 7,200 seconds and the Safe the timelock constrains is the body that can call `setDelay` on it — so the protection is 24 hours' notice once and two hours thereafter. **A gate whose depth is set by the party it gates is a different instrument from one with a hard floor.** ⚠️ **This should not be read as frxUSD having improved.** Correcting only the upgrade half would leave a materially rosier page than the facts support; the balance-affecting powers are exactly where the delay is absent. **No score change (Issuer 5.5, Overall 5.5):** the prior rationale was worse than reality on the upgrade path and equal to it on everything else, so the net does not move — but it was wrong in both directions and is restated rather than patched. Found by grepping the claim across the whole file rather than re-reading the admin section, which surfaced instances in the who-should-avoid list and the watch items as well. `last_verified` **is** bumped to 2026-08-23; the admin chain was read end to end. 2026-08-13 — admin migration found on-chain: the frxUSD owner moved from the 3-of-5 Safe `0xB174…3f27` to a 4-of-7 Safe `0xfFFf…3937` with zero signer overlap and still no timelock; no authorising governance record located. Issuer 5.0 → 5.5, overall held at 5.5. Circulating restated ≈$124M → ≈$105.5M (down about 15% in nine weeks), reframing "plateaued" as contracting. Price ≈$0.9997 → ≈$0.9993. Chaos PoR unverified for a second consecutive pass, this time unreachable rather than empty. 2026-06-10 — initial publication (multisig verified 3-of-5 on 2026-06-08; liquidity 5.0 → 5.5 on the Aave V4 listing).*
