---
asset: "USDC"
slug: "usdc"
aliases: ["USDC", "USD Coin", "USDC.e"]
chains: ["eth", "arb", "base", "solana", "polygon", "avalanche", "optimism", "monad"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
date: "2026-07-08"
last_verified: "2026-08-24"
featured: false
last_revised: "2026-09-11"
production: true
issuer: "Circle"
market_cap_approx: 75500000000
peg_mechanism_score: 9.0
backing_score: 9.0
liquidity_score: 9.5
underlying_score: 7.0
structural_score: 3.0
axis_frame: six
issuer_score: 8.0
overall_score: 8.5
---

# USDC — Risk Report

**Low risk · 8.5/10**

> **The regulated dollar that sets the bar.** USDC is the fiat-backed stablecoin every other stablecoin gets measured against — fully reserved in cash and short-dated US Treasuries, attested monthly by a Big-Four firm, backed by an SEC-registered reserve fund with *daily* public portfolio reporting, and now formally compliant under the US GENIUS Act stablecoin law. It's deeply liquid on every major chain and redeemable 1:1 with a regulated issuer. Three things keep it short of a perfect score: Circle can freeze addresses on-chain — a compliance feature that is also a centralization vector; USDC briefly broke its peg in March 2023 when $3.3 billion of reserves were stuck at the failing Silicon Valley Bank, recovering only after a federal backstop; and the mainnet upgrade key carries no timelock and no on-chain quorum over roughly $49.9B, the largest single-key exposure in this coverage.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None | Sell on any CEX/DEX at peg; institutional 1:1 redemption via Circle Mint | Mint/redeem 1:1 with Circle (business accounts); retail exits via the secondary market | Since 2018 | Ethereum, Arbitrum, Base, Solana, Polygon, Avalanche, Optimism + more (native issuance) |

## Summary

USDC is Circle's fully fiat-backed stablecoin, roughly $75.5 billion in supply. Its reserves are cash plus short-dated US Treasuries, with the majority held in the **Circle Reserve Fund (USDXX) — an SEC-registered 2a-7 government money-market fund** with daily independent portfolio reporting, administered by BlackRock — plus **monthly Deloitte attestations**. USDC is **GENIUS Act-compliant**: fully reserved, Big-Four attested, and operating under a federal framework.

It is also the most widely integrated regulated stablecoin in DeFi. In Q2 2026, USDC overtook USDT in adjusted on-chain transaction volume, cementing its role as the default settlement and collateral dollar. The 8.5 is the ceiling of our stablecoin set — nothing else in this coverage scores above 7.5 — held short of a perfect score by the freeze capability, the SVB precedent, and the undelayed mainnet upgrade key, all covered below.

## 1 · Stability — 9.0

This is the one historical stress event worth knowing. In March 2023, USDC briefly depegged to about $0.87 when roughly $3.3 billion of reserves were trapped at the collapsing Silicon Valley Bank. It recovered within days, once the FDIC backstopped SVB deposits. The lesson Circle took from it: reserves are now concentrated in the SEC-registered money-market fund and Treasuries rather than uninsured bank deposits, materially reducing — though not eliminating — single-bank exposure. It is the one time USDC has broken peg, it was a dated event rather than a live state, and it recovered fully.

## 2 · Backing — 9.0

USDC is backed 100% by cash plus short-dated US Treasuries, with no unsecured credit exposure. The majority sits in the SEC-registered Circle Reserve Fund, which publishes its portfolio **daily** — a more granular disclosure regime than any monthly-attestation-only peer, and well above USDT, which has no on-chain proof of reserves and only quarterly attestations. This is the cleanest reserve profile of any major stablecoin: you can see, day by day, exactly what stands behind the token.
## 3 · Liquidity & Exit — 9.5

This is one of USDC's strongest dimensions — best-in-class for a regulated dollar. Retail holders exit through the secondary market at near-zero slippage on every major chain. Businesses with Circle Mint accounts redeem 1:1 directly with Circle. The combination of regulated 1:1 redemption and deep secondary liquidity gives USDC an extremely tight arbitrage leash: any meaningful discount gets bought up and redeemed at $1, which is why the peg holds so reliably under normal conditions.

## 4 · Dependencies — 7.0

**The counterparty set is genuinely broad** — multiple banking partners, multiple custodians, a major attestor — and breadth of that kind is real. ⚠️ **But USDC is the one asset in this coverage that has *demonstrated* its dependency risk rather than been assessed for it.**

⚠️ **March 2023: $3.3B of reserves sat at a single bank, Silicon Valley Bank, and USDC traded to about $0.87.** Reserves were high-quality **throughout** — the assets were not the problem. **The peg broke anyway, because access to them did.** Recovery came from an **FDIC backstop**, which is **outside the arrangement**: it was not substitution within the counterparty set, it was a third party stepping in.

⚠️ **Bank substitutability is a post-hoc fact.** Circle re-banked afterwards, and that is genuine — **but a holder mid-run cannot invoke a bank Circle has not yet moved to.** The set is substitutable over weeks, not over the hours in which a depeg resolves.

**Held three points below Backing's 9.0, and the gap is the whole reason these are two axes.** Backing asks what the reserves are; Dependencies asks what stands between a holder and them. **In March 2023 the first answer was excellent and the second one failed.**

⚠️ **Not priced here: the attestor's identity and Circle's regulatory standing.** Those belong to Issuer, and importing them would credit one comfort on two axes.

## 5 · Contract & Admin — 3.0

⚠️ **Every USDC deployment is upgradeable by a single address with no on-chain quorum and no delay.** Measured 2026-09-11 by reading each chain's own proxy storage:

| chain | upgrade authority | code |
|---|---|---|
| Ethereum | `0x807a96288a1a408dbc13de2b1d087d10356395d2` | none |
| Arbitrum | `0x2e0a67588cfbcad40f9e4dd76052436190a77a68` | none |
| Base | `0x4fc7850364958d97b4d3f5a08f79db2493f8ca44` | none |
| Optimism | `0xbb8a939e2b1923d248ac4c2f6aed0a4d71cb18a3` | none |
| Polygon | `0x9238e612387ebba4d4fa0d76dbfba99b453417b3` | none |
| Monad | `0xc66bf3ef02d30e942bbab7f871d07b14d0ccc619` | none |

⚠️ **The admin lives in the legacy ZeppelinOS slot, and both EIP-1967 slots read zero on every chain.** `keccak256("org.zeppelinos.proxy.admin")`. **A reader probing the modern slot and then `admin()` finds nothing twice and concludes there is no upgrade path. There is one.**

✅ **Six distinct keys across six chains, so no single key reaches the whole asset.** ⚠️ **That containment is a property of the asset, not a benefit to any holder.** An Ethereum holder gains nothing from the Arbitrum key being separate and still faces **one undelayed key over $49.86B**. Anything reasoning from "six separate keys" toward holder safety is a systemic claim wearing a holder frame.

⚠️ **What cannot be read on-chain, and is therefore not claimed:** whether those addresses are backed by a single private key or by an off-chain MPC or HSM quorum. Empty code proves there is **no on-chain quorum** — nothing more. ⚠️ **Circle's published contract documentation specifies the permissions and says nothing about custody, signer counts, or the nature of the admin account.** *(Circle's MPC material describes Circle Wallets, a separate product, and does not speak to this admin.)* **So custody here is undisclosed, not known to be a single key.**

**Coverage: six EVM chains read. Solana and other non-EVM deployments cannot carry this proxy shape and were not assessed — unread, not clean.**


## 6 · Issuer — 8.0

This is the one durable knock. Circle, as a regulated issuer, can **freeze USDC held at specific addresses** in response to law-enforcement orders. It is a compliance feature — it protects the issuer and can help recover stolen funds — but it is also a censorship and centralization surface: your USDC is freezable by the issuer in a way that an immutable, permissionless dollar is not. In practice the capability has been used sparingly and only under legal process, but it is a real property to understand before holding at size.

## What you actually earn

**Nothing** — plain USDC pays no yield. Any return comes from lending it or holding a wrapped or savings product built on top of it, not from the token itself. Holding USDC is for people who want a liquid, regulated, DeFi-native dollar rather than yield.

## Audits & security

Reserves are attested **monthly by Deloitte**, a Big-Four firm, with **daily** Circle Reserve Fund portfolio reporting layered on top — the strongest transparency stack in the category. The token contracts are mature, heavily audited, and battle-tested since 2018, with no reserve-opacity or contract-bug issues of note. The residual risk here is not smart-contract bugs or hidden reserves — it is **contract authority**, which is a different thing and is the item most readers miss.

**The mainnet upgrade key has no delay and no quorum.** USDC on Ethereum is an upgradeable proxy, and its upgrade authority sits in the legacy Zeppelin OS admin slot at `0x807a9628…95d2` — an address with no code, no timelock, and no on-chain multisig. Whoever can sign for it can replace the token's logic immediately, with no queued action for holders to see coming and no window to exit. That authority reaches **roughly $49.9B** of mainnet USDC, the largest single-key exposure in this coverage.

**Two things stop that from being worse than it sounds, and both have limits.** First, "no code at that address" is a statement about the *chain*, not about Circle. Their key management is off-chain, the real signing threshold is plausibly well above one person, and none of that is visible or verifiable from here — so this is an absence of on-chain protection, not evidence of a careless key. Second, Circle uses **separate admin keys per chain** — three distinct keys across three chains, re-confirmed 2026-08-24 — so a single compromise reaches one deployment rather than all of them. ✅ **That containment is worth more than it may look, because the same primitive without it is materially worse.** [AUSD](/reports/ausd/) runs the identical construction — a bare externally-owned key, no delay, full upgrade reach — but **one key across five chains rather than three across three.** For a plain key the same address on multiple chains is necessarily the same private key, so that is one signature reaching five deployments. **Circle's topology is the mitigated version of the thing this section is docking.** That containment is real and worth crediting, but it is a *systemic* protection rather than a *per-holder* one: if you hold on Ethereum, the Arbitrum key being separate does nothing for you.

Keep this in proportion. It is why the Issuer axis is 8.0 rather than 8.5 and the overall 8.5 rather than 9.0 — a 9.0 asserts essentially no structural concern, and an undelayed single-key upgrade path over $49.9B is a structural concern. It is **not** a reason to prefer a less-reserved dollar: it does not touch backing, redemption or peg, and it does not make a USDC holder worse off than the holder of a smaller stablecoin with a similar or weaker admin posture. USDC remains the top score in this coverage.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 9.0 | Direct 1:1 fiat redemption with a regulated issuer; the tightest arbitrage leash in the category. One historical depeg (SVB, 2023), fully recovered. |
| Backing | 9.0 | 100% cash + short-dated Treasuries via an SEC-registered 2a-7 money-market fund; Deloitte monthly attestations plus daily public portfolio reporting. Cleanest reserve profile of any major stablecoin. |
| Liquidity | 9.5 | Deepest regulated-stablecoin liquidity across every major chain; the default DeFi settlement and collateral asset. Near-zero slippage at any realistic size. |
| Issuer | 8.0 | Circle — regulated, GENIUS Act-compliant, transparent, publicly listed. Docked for the on-chain address-freeze capability (compliance-driven, but a centralization vector), regulated-entity dependence, and a no-delay, no-quorum single-key upgrade path over the largest balance in the set. |
| **Overall** | **8.5** | The gold standard for fiat-backed stablecoins — fully reserved, Big-Four attested, federally regulated, deeply liquid. Held short of the top of the scale by the freeze capability, the SVB depeg precedent, and the undelayed mainnet upgrade key. This is still the reference point the rest of the stablecoin set is scored against; nothing else in this coverage scores above 7.5. ⚠️ **Held, and it sits +0.92 above its own axis mean of 7.58** — against the at-or-below convention applied elsewhere in this coverage. ⚠️ **A lower figure is settled upstream and awaiting publication here**, so treat this cell as the stale one — the axes above are current. |

## Who it's for

Anyone who wants the most regulated, transparent, deeply liquid dollar in crypto and is comfortable with a regulated issuer that can freeze addresses under legal process. USDC is the default choice for most holders and the DeFi settlement standard — if you're not sure which dollar to hold, this is the benchmark.

## Who should avoid

- Anyone who needs a censorship-resistant, unfreezable dollar — USDC is freezable by the issuer; prefer an overcollateralized or immutable alternative.
- Anyone who wants zero single-issuer dependence — that is Circle, a regulated but centralized counterparty.

## What to watch

- **GENIUS Act implementation.** US rules are due 2026-07-18. USDC is already compliant in substance, so this is a positive-to-neutral catalyst, but track the formal designation.
- **Reserve composition.** The daily Circle Reserve Fund reporting is the live transparency layer; watch for any drift away from the money-market-fund and Treasury concentration.
- **Banking exposure.** Post-SVB, watch which banks hold the cash sleeve — concentration at any single institution is the historical failure channel.
- **Freeze activity.** Usage remains rare and legal-process-driven; a change in that posture would matter for censorship-sensitive holders.
- **Any timelock or on-chain multisig appearing on the mainnet upgrade key.** Today `0x807a9628…95d2` is a plain address with no delay and no quorum. Circle moving that authority behind a timelock or a verifiable multisig would be the single change that most improves this report's Issuer axis, and it would be visible on-chain.

## A note on chains

USDC is natively issued across Ethereum, Arbitrum, Base, Solana, Polygon, Avalanche, Optimism and more, with liquidity that is deep on all of the major deployments. Newer or smaller-footprint chains — for example Monad — carry thinner secondary liquidity than the established networks, so exit slippage there can be wider even though the underlying token and redemption path are the same. If you hold size on a newer chain, size your exits to that chain's local depth rather than the aggregate.

---

*This report is based on Circle's public attestations, GENIUS Act disclosures, the Circle Reserve Fund daily reporting, and on-chain data through 2026-07-08. USDC's freeze capability is a live issuer feature and reserve composition shifts over time. Corrections and attestation links welcome at info@tidresearch.com.*

*Revision history: 2026-08-24 — **admin topology re-confirmed; no score change, and the re-read found nothing moved.** The upgrade key is still a bare externally-owned account in the legacy admin slot with no timelock and no on-chain quorum, and Circle still runs **three distinct keys across three chains**. Recording that as a result rather than a silent date bump: **re-reading and finding nothing changed is an outcome, and the alternative — bumping a date without re-reading — converts an honest staleness signal into a false freshness one.** Added: the contrast with [AUSD](/reports/ausd/), which runs the **identical construction with one key across five chains** rather than three across three. Published because it shows what Circle's per-chain separation is actually worth — same primitive, materially different blast radius — and because AUSD's report had until today credited itself with a containment it does not have. `last_verified` moves to 2026-08-24 **for the admin material only**; the reserve composition, attestation cadence and supply figures on this page still date from the 2026-07-08 pass. 2026-08-23 — Issuer 8.5 → 8.0, overall 9.0 → 8.5, carrying a scoring revision recorded internally on 2026-08-22 onto this page, together with the finding behind it. **This is a specific new finding, not a recalibration of the top of the scale.** USDC on Ethereum is an upgradeable proxy whose upgrade authority sits in the legacy Zeppelin OS admin slot at `0x807a9628…95d2` — no code at that address, no timelock, no on-chain quorum — with immediate upgrade reach over roughly $49.9B of mainnet supply, the largest single-key exposure in this coverage. A 9.0 asserts essentially no structural concern, and an undelayed single-key upgrade path over that balance is a structural concern. **Two limits travel with the finding and are stated in the body:** an address with no code is a fact about the chain rather than about Circle, whose off-chain key management is not visible or verifiable from here and whose real signing threshold is plausibly well above one; and Circle's use of separate admin keys per chain genuinely contains a single compromise to one deployment, but that is a systemic protection rather than a per-holder one. **This does not touch backing, redemption or peg**, and USDC remains the top score in this coverage with nothing else above 7.5. Also reworded: the lede and the Audits section, which previously named two drags and directed readers away from contract authority as a risk surface. `last_verified` is deliberately **not** bumped — the upgrade-key finding is dated 2026-08-22 in its own right, while the rest of this body still carries its 2026-07-08 reads including the supply figure. 2026-07-08 — initial production publish.*
