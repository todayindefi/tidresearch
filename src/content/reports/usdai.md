---
asset: "USDai"
slug: "usdai"
aliases: ["USDai", "USD.AI", "USD AI", "Permian USDai"]
chains: ["arb", "plasma", "eth", "base"]
category: "stablecoin"
peg_mechanism: "fiat-backed via PYUSD on M0's PYUSDx rails"
assessment_type: "light"
audience: "retail"
companion_report: "susdai"
date: "2026-05-28"
last_verified: "2026-08-25"
last_revised: "2026-08-27"
featured: false
production: true
issuer: "Permian Labs"
market_cap_approx: 174400973
peg_mechanism_score: 7.0
backing_score: 7.0
underlying_score: 7.5
liquidity_score: 4.5
issuer_score: 5.0
overall_score: 5.5
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=usdai"
---

# USDai — Retail Risk Report

**Moderate risk · 6.5/10**

| Backing | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| 100% PYUSD held in the token contract, verifiable in two on-chain reads | 1:1 PYUSD redemption (onboarded market makers and institutions only) or Curve USDai/USDC (anyone) | Same-day for onboarded; minutes via Curve at retail size | About 10 months | Arbitrum, where effectively all supply sits; small bridged floats on Plasma, Base and Ethereum |

## Summary

USDai is the synthetic-dollar peg leg of the USD.AI protocol by Permian Labs, issued on M0's PYUSDx platform. Every USDai is backed 1-for-1 by **PYUSD** — PayPal's regulated, Paxos-issued, T-bill-backed stablecoin — held directly in the USDai contract on Arbitrum. The yield-bearing, credit-risk-bearing leg is **sUSDai**, covered [separately](/reports/susdai/). If you are here for the headline yield on GPU loans, that is the other report. **USDai itself carries no GPU-loan exposure.**

The 6.5/10 is driven by an unusually strong backing story set against an unusually weak exit story. On the strong side: reserves are not attested monthly, they are **visible on demand in two RPC reads**, and the protocol's own reported reserve figure agrees with the on-chain balance exactly. The underlying is a regulated, NYDFS-supervised, T-bill-backed instrument rather than something the issuer manufactured. On the weak side: **secondary depth is under $2M against a supply near $173M**, there is no centralized-exchange listing, and contract-level redemption is gated to onboarded market makers and institutions — so a retail holder's practical exit is the thin pool, not the redemption window.

Supply has moved a lot and is worth reading correctly. It fell from about $283M in May to about $155M in late July as holders rotated into the staked sUSDai leg for yield, and has since **recovered to $172.63M**. Coverage held above par through all of it. This is capital moving between the two legs of one protocol, not redemption stress.

## Backing & solvency

USDai's distinguishing property is that the reserve is not somewhere else. There is no custodian wallet, no off-chain treasury, no reserve-manager contract — the **USDai token contract holds the PYUSD itself**. Verified on-chain on 2026-08-12, the contract held **174,318,300 PYUSD against 172,630,798 USDai outstanding on Arbitrum**. ⚠️ **That 100.98% was never a cushion. It was a denominator missing three chains.** Re-measured across all four deployments on 2026-08-26, supply is **173,113,349.09** against a PYUSD reserve of **173,113,349.10** — the two sides reconcile to **about a cent on $173M**. **Coverage sits at par by construction**: USDai mints one-for-one against PYUSD held in the token contract, so the ratio is not a margin that could erode. It is an identity.

Two details make that number stronger than a bare ratio. First, **it is reproducible by anyone in two reads**: query `baseToken()` to confirm the reserve asset is PYUSD, then read the contract's PYUSD balance against total supply. No oracle, no attestation, no waiting for a quarterly report. That class of verifiability is rare in our coverage — the only close peer is [Saturn's USDat](/reports/usdat/), whose reserve is a claim on PYUSDx, a token whose own backing layer this coverage has had to discount. Second, **Permian's published reserve figure matches the on-chain balance exactly** — zero divergence at the last read, which is the check that catches an issuer reporting a number its own contract does not support.

The 101.4% recorded in July and the 100.98% above are **both Arbitrum-only**, and the apparent easing between them is movement in a partial denominator rather than in the backing. **On the full four-chain basis neither was a surplus.** What holds for a holder is the part that does not depend on the counting convention: the reserve has never fallen below supply, across both a 45% supply contraction and the subsequent recovery.

**The residual risk is not reserve quality — it is contract authority.** The PYUSD sits in an upgradeable contract. "Your PYUSD is in the contract today" is a real-time on-chain fact, not a trustless guarantee against a future privileged withdrawal. What converts that from a serious concern into a manageable one is the admin posture described below, which gives 48 hours of visible notice before any upgrade can land. There is also **no formal third-party reserve attestation at the USDai level** — the frontmatter records `audited_reserves: false` deliberately — but for this asset the on-chain proof is strictly better evidence than an attestation would be.

**One commercial dependency worth naming:** PayPal pays 4.5% a year on PYUSD held in the protocol and has guided up to $1B in loan backing for 2026. That is a tailwind, but it means the reserve relationship is an incentivized commercial arrangement rather than a neutral custody one, and reserve composition responds to incentive economics as well as to peg defense.

**A note on where the token lives, for anyone doing the two-read check themselves.** USDai is deployed on four chains — Arbitrum, Plasma, Base and Ethereum — but **effectively all of it is on Arbitrum**: as of 2026-08-18 the off-Arbitrum floats were roughly 790,000 on Plasma, 176,000 on Base and under 6,000 on Ethereum, against about 175M on Arbitrum. ⚠️ **It is tempting to reason that, being well under one percent of supply, the bridged float does not move the coverage picture. That reasoning fails here, and the conclusion it reaches happens to survive, which is exactly why it is worth spelling out.** Coverage is above par on either convention. But on Arbitrum alone it reads **100.55%**; across all four deployments it reads **100.0000000%**. **Counting the bridged tokens does not nudge the ratio. It consumes the entire apparent cushion.** When the surplus is itself half a percent, a sub-one-percent change in the denominator is not a rounding detail — it is the whole quantity. **A small share of supply is immaterial only relative to the margin it is being measured against.** **The live dashboard below now computes on the same four-chain basis** — it reads coverage at par, on `all_chain_supply`, and reports the per-chain split that sums to it. ⚠️ **It also raises a "coverage thin" warning, and that is correct rather than alarming: at par there is no cushion, which is exactly what the phantom 0.548% surplus used to suppress.** A flag appearing here is the monitor describing the mechanism properly, not backing deteriorating. **The reserve, the mint-and-redeem path and the coverage check all live on Arbitrum**, which is the contract to read. One practical trap: **the token has the same address on every chain** (`0x0A1a1A10…82EF`), a deterministic deployment, so an address-only check cannot tell you which chain you are looking at — pair the address with the chain id. One use the Plasma float does serve: USDai is accepted as lending collateral on Fluid there, where it marks at about $0.9993.

## The underlying: PYUSD, and what USDai is not exposed to

**A note on how the two backing-related axes divide, because they are not measuring the same thing.** On this rubric **Backing scores whether the reserve can be *verified*** — here, a `baseToken()` call and a `balanceOf` against supply, which is about as good as that gets. **Underlying scores what the reserve *is*.** A reader comparing this report against one that folds both into a single number should expect the split to produce different-looking figures for the same book; it is a difference in what is being asked, not in what was found.

The **Underlying axis sits at 7.5** because PYUSD is high-quality collateral by any reasonable standard: a Paxos Trust Company stablecoin under New York Department of Financial Services supervision, fully reserved in US Treasury bills, overnight repo and cash, with monthly Paxos attestations. Holding USDai is a 1:1 claim on that. It is capped below 8 only because of the one-layer indirection — you hold a token that holds PYUSD, which holds T-bills, rather than holding the bills.

**A clarification that matters for anyone reading across our coverage: USDai is not backed by `$M`.** It was widely described that way, and that description is the thing to discard — the reserve is PYUSD, and the verification above reads the actual token balance rather than trusting any description of it.

**The comparison with Saturn's [USDat](/reports/usdat/) has changed shape, and it is worth being precise about how.** Until recently the two assets differed in *what* backed them: USDat held `$M`, M^0's tokenized-Treasury token, and USDai held PYUSD. **That distinction is gone.** On 2026-08-19 USDat's reserve rotated out of `$M` and into PYUSDx, the PayPal / MoonPay / M^0 framework token — which is itself PYUSD-backed. Read on 2026-08-23, USDat's remaining `$M` balance was 0.000671 against a reserve that is effectively all PYUSDx. **Both assets now terminate in the same collateral.**

**What separates them is no longer which asset backs the token — it is where that asset sits and whether you can read it.** USDai holds its PYUSD *directly, at its own address*: one `balanceOf` call against total supply, which is the check performed above. USDat holds PYUSDx, and PYUSDx's own PYUSD reserves sit a framework layer further down — checked on 2026-08-23, neither the PYUSDx token, nor its implementation, nor its proxy admin, nor its `earnerManager` holds any PYUSD. **That is a statement about verifiability, not about solvency.** PYUSDx is a real PYUSD-backed framework, USDat's units reconcile 1:1, and nothing here says either is unbacked — the reserves exist by design at a layer these reads cannot reach. The difference is that USDai's reserve is one call away and USDat's is not.

This framing also survives the next rotation, which the previous one did not: it turns on the *shape* of the custody arrangement rather than on which token happens to be in the contract this month.

The confusion is understandable and worth resolving explicitly. USD.AI's **original 2025 design did back USDai with `$M`**, and M0's research post announcing that integration still circulates widely. The protocol **migrated to PYUSD reserves in February 2026** with the launch of PYUSDx — a framework in which **PayPal supplies the reserves, MoonPay supplies infrastructure, and M0 supplies the issuance rails**. USD.AI is its flagship implementation. Permian does not run an independent mint of base `$M`, and the reserve asset in the contract today is PYUSD, which is what the two-read verification above actually confirms.

**Using M0's rails is not holding M0's collateral.** No ceiling from the `$M` assessment applies here, and USDai's backing score is unaffected by it.

## Exit liquidity

This is the weakest dimension by a distance, and the reason a strong backing score does not produce a strong overall one.

**For onboarded market makers and institutional depositors:** direct 1:1 PYUSD mint and redemption at the contract. This is the clean exit — no slippage, no AMM tax. It requires completing Permian's KYC onboarding, and since Q2 2026 contract-level mint and redeem have been **restricted to that group**.

**For everyone else:** the secondary market, dominated by the Curve USDai/USDC pool, with a Uniswap V4 pool alongside it. That pool sits **below about $2M against a supply near $173M** — roughly one percent of the float — and there is **no centralized-exchange listing**. Retail-size exits price fine; in calm conditions arbitrageurs hold USDai close to par, and it has traded around $1.0007. But the depth that carries you in a stress event is not there, and a holder of any size cannot exit through secondary without moving the price against themselves.

**The asymmetry between those two paths is the single biggest retail-relevant risk on this asset.** It is not a solvency risk — the reserve is there and verifiable — it is a risk that the mechanism which guarantees par is unavailable to you specifically. Holding, transferring and staking remain fully permissionless; only the redemption window is gated.

The third path in practice is to **stake into sUSDai** rather than exit, which trades a liquidity problem for a credit-and-queue problem. Different risk profile, [different report](/reports/susdai/).

## Peg & yield dynamics

**Peg.** USDai has held close to par since launch, with the Curve-implied price sitting a fraction above the dollar at the last read. The **Peg axis sits at 7.0**: the 1:1 PYUSD redemption available to onboarded participants is a genuine par-enforcement mechanism, and the arbitrage that transmits it to the secondary market has worked in calm conditions. What holds it there rather than higher is that the enforcement mechanism runs through a gated participant set, so the peg's defense in a stress event depends on onboarded market makers choosing to arbitrage into a thin pool. Extreme historical depeg prints on data aggregators are seed-pool artifacts and should be disregarded.

**Yield.** USDai is **non-yield-bearing.** The reserve economics are captured at the protocol level, and holders seeking yield stake into sUSDai, which is where NAV growth, GPU credit exposure and the 30-day redemption queue all live. On the holder side this makes USDai structurally comparable to holding USDC — a stable unit of account, no yield — with the difference that its float is considerably smaller and its secondary market considerably thinner.

## Audits, admin & team

**Admin control over UPGRADES sits behind a 48-hour on-chain timelock, and for that path the delay is binding rather than decorative.** ⚠️ **Read the scope of that sentence carefully: minting never touches the timelock at all.** See below. USDai's ProxyAdmin (`0x2ddf39c7…`) is owned by a **`TimelockController` at `0x0EEA1EE0…639b` with a minimum delay of 172,800 seconds — exactly 48 hours** — re-verified independently on-chain on 2026-08-12. The detail that makes it real: **the timelock holds its own admin role**, so the delay cannot be shortened, and no new role can be granted, without first passing through the full 48 hours. Proposal authority sits with a **3-of-3 Safe multisig** with three known signers; operational permissions on the token sit with a **second 3-of-3 Safe at a different address — but walked per chain on 2026-08-26, the two hold the identical three owners on all four deployments.** ⚠️ **Two addresses, one body.** Describing the second as a *sibling* multisig would be literally true and would imply a separation of duties that does not exist. ⚠️ **And the canceller role sits with the proposer**, so nothing inside the system can stop a queued upgrade: **the 48 hours are a notice window for holders, not a control.** That does not weaken the point above — the delay is real and cannot be shortened — but it buys time to react rather than a veto anyone can exercise. **Note what this is not:** 3-of-3 has zero redundancy, so every key is load-bearing. This is not a thin-threshold finding. No role revocations have occurred since deployment.

⚠️ **And the timelock governs upgrades, not issuance. Those same three keys can mint USDai without any delay, by two independent routes.**

Walked on 2026-08-26 by bytecode extraction and call simulation rather than by reading role names: `mint(address,uint256)` is present on every implementation and gated by AccessControl, and **the revert names the role it wants** — calls from the operations Safe and from a burn address both return OZ v5 `AccessControlUnauthorizedAccount`, carrying `0x751b795d…` = **`BRIDGE_ADMIN_ROLE`**. Two routes reach it:

1. **The operations Safe holds `DEFAULT_ADMIN_ROLE` on the token on all four chains** — measured per chain — and `BRIDGE_ADMIN_ROLE` is administered by `DEFAULT_ADMIN`. **It can grant mint authority to any address in a single transaction, with no delay.**
2. **It also owns the OFT adapter**, so it can call `setPeer`. ⚠️ **`setPeer` is itself a mint**: point the bridge at a peer you control and inbound messages credit balances. **No role grant and no upgrade are needed for this one.**

**Three keys, one transaction, no timelock, and no veto** — the canceller is the proposer, and the two Safes are the same three people. **The 48-hour window that this report has emphasised protects the path an attacker would not need to use.**

⚠️ **What this does and does not mean, because it is easy to over-read.** It does **not** touch the reserve: an off-Arbitrum mint creates a claim without moving the PYUSD, and coverage remains verifiable by the same two reads. The backing and peg findings above are unaffected. **What changed is the ceiling on how far the operator's discretion can be trusted, not any evidence about the assets.** Against that: the threshold is a genuine 3-of-3 with **zero redundancy**, the protocol has run about ten months with no incidents and no evidence of misuse, and the upgrade timelock remains real and self-administered. **The Issuer axis moves 6.0 → 5.0 and Overall 6.5 → 6.0** — a rescore on a disproved claim, not a re-rating of the reserve.

⚠️ **Coverage limit of this walk, stated so it is not read as broader than it is:** the *capability* was measured on all four chains, but the adapter **address** was identified on Plasma only — free RPC endpoints cap `eth_getLogs` at 10,000 blocks, so Base and Ethereum were not enumerated. **Do not assume the adapter shares an address across chains**; the proxies already differ between Plasma and Base.

**This also answers a question the report left open: the four-chain deployment is LayerZero OFT**, and the adapter is a **separate contract from the token** — which is why probing the token alone shows no bridge surface at all. Anyone doing the two-read check will not find it on the token.

That distinction — a timelock that governs itself versus one an admin can shorten at will — is the same test applied in the [Saturn reports](/reports/usdat/), and it lets you compare admin posture across issuers on like terms. USDai passes it. In practice it means a malicious or buggy upgrade is publicly visible for two days before it can take effect, and for a holder whose realistic exit is a secondary pool that clears in minutes, **two days is a usable window**. The same timelock owns the ProxyAdmin on sUSDai, so both legs of the protocol share one authority chain.

The upgrade posture is still meaningfully stronger than the single-key setups common among stablecoins of the same age. **But it is one path of two, and the faster one is unguarded**, which is why the Issuer axis sits at 5.0.

**Audits:** one security review, by Cantina (Spearbit), covering USDai and sUSDai together — 0 critical, 0 high, 1 medium since fixed. A live bug bounty is running. One audit is thin by the standards of a mature issuer, adequate for a protocol under a year old.

**Team and backers:** Permian Labs carries MetaStreet lineage and raised a $13.4M Series A from Framework, Dragonfly, Coinbase Ventures and Arbitrum. Roughly ten months live, single operator, no incidents to date — and no stress event either.

## Who this is for

- **Holders who want a PYUSD-backed dollar with reserve verifiability they can check themselves**, at retail size, and who value that over depth.
- **Anyone moving in and out of sUSDai**, or settling flows inside the USD.AI ecosystem on Arbitrum, where USDai is the natural transactional unit.
- **Onboarded market makers and institutional depositors**, for whom the 1:1 PYUSD redemption path makes this a clean instrument.

## Who this is NOT for

- Anyone substituting it for USDC or USDT at size. Secondary depth under $2M against a $173M float means the exit is fragile above retail scale, and there is no CEX listing to fall back on.
- Anyone who needs a redemption guarantee they can personally exercise. Without onboarding, par redemption is not available to you.
- Yield-seekers — USDai pays nothing; [sUSDai](/reports/susdai/) is the yield leg, with a materially different and considerably riskier profile.
- Anyone requiring a formal third-party reserve attestation as a matter of policy. The on-chain proof is better evidence, but it is not the same document.

## What to watch

- **Coverage drifting below 100%.** It has held above par across a 45% contraction and the subsequent recovery; sustained drift below par would be a tier-1 signal. The dashboard tracks it hourly.
- **Divergence between the protocol's reported reserve and the on-chain balance.** They currently match exactly. Any gap opening between them matters more than the ratio itself.
- **Anything queued in the timelock.** Scheduled operations are visible for 48 hours before execution — this is the practical benefit of the admin posture, and the dashboard surfaces pending operations with their countdown.
- **Any change in the reserve asset.** The backing thesis is specifically PYUSD. A migration to a different reserve — including back toward `$M` — would require re-rating both backing and underlying.
- **Secondary depth and any CEX listing.** Liquidity at 4.5 is the binding constraint on the overall score; it is also the one most easily fixed.
- **Whether retail redemption ever reopens.** The Q2 2026 gating is what creates the exit asymmetry. Reversing it would move the peg and liquidity axes together.

## Live dashboard

Live PYUSD coverage, the on-chain proof-of-reserves panel with the exact commands to reproduce the reads yourself, peg behavior, secondary depth and slippage tiers, and the 48-hour pending-upgrade watch are on the embedded dashboard below. ⚠️ **One scope note on that last panel, because it is the one a holder would rely on: the pending-upgrade watch covers scheduled upgrades only.** It reads `CallScheduled` on the timelock — and **the mint path never touches the timelock**, so an undelayed issuance will not appear there and gives no advance warning. The dashboard itself now says so; this sentence previously did not.

## Sibling

- [sUSDai](/reports/susdai/) — the staked leg, carrying the GPU-loan credit exposure, NAV growth and a 30-day redemption queue

---

*This report is built from publicly available documentation and independent on-chain reads, most recently on 2026-08-12, with the per-chain deployments and supplies verified 2026-08-18. We hold no privileged information about the issuer. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).*

*Revision history: **2026-08-27 — Backing 7.5 → 7.0, Overall 6.0 → 5.5.** Measured across all four chains, coverage is **exactly 100.00%** with a surplus of **$0.01 on $174.4M**: USDai mints one-for-one against PYUSD held in the token contract, so coverage sits at par by construction rather than carrying a cushion. `market_cap_approx` 174,400,973. **2026-08-26 — Issuer 6.0 → 5.0, Overall 6.5 → 6.0.** The 48-hour timelock governs the **upgrade path only**. `mint()` is gated by `BRIDGE_ADMIN_ROLE` (`0x751b795d…`), and the operations Safe holds `DEFAULT_ADMIN` on the token on all four chains, so it can grant that role in one undelayed transaction; it also owns the LayerZero OFT adapter, where `setPeer` is itself a mint. **Three keys, one transaction, no delay, and no veto** — the canceller is the proposer, and the governance and operations Safes hold the identical three owners. Established in internal coverage on **2026-08-18**; the gate's identity and the `setPeer` route were measured 08-26. **Capability measured on all four chains; the adapter address identified on Plasma only.** The pending-upgrade watch covers scheduled upgrades and will not show a mint. **2026-08-25 — coverage restated on a four-chain basis.** Earlier figures of 100.98% and 101.4% were Arbitrum-only denominators. `last_verified` 2026-08-25 for the whole body; `last_revised` records the later on-chain passes.*