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
last_verified: "2026-08-12"
featured: false
production: true
issuer: "Permian Labs"
market_cap_approx: 172630000
peg_mechanism_score: 7.0
backing_score: 7.5
underlying_score: 7.5
liquidity_score: 4.5
issuer_score: 6.0
overall_score: 6.5
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

USDai's distinguishing property is that the reserve is not somewhere else. There is no custodian wallet, no off-chain treasury, no reserve-manager contract — the **USDai token contract holds the PYUSD itself**. Verified on-chain on 2026-08-12, the contract held **174,318,300 PYUSD against 172,630,798 USDai outstanding — coverage of 100.98%**.

Two details make that number stronger than a bare ratio. First, **it is reproducible by anyone in two reads**: query `baseToken()` to confirm the reserve asset is PYUSD, then read the contract's PYUSD balance against total supply. No oracle, no attestation, no waiting for a quarterly report. That class of verifiability is rare in our coverage — the only close peer is [Saturn's USDat](/reports/usdat/), whose reserve is a claim on PYUSDx, a token whose own backing layer this coverage has had to discount. Second, **Permian's published reserve figure matches the on-chain balance exactly** — zero divergence at the last read, which is the check that catches an issuer reporting a number its own contract does not support.

Coverage eased slightly from the 101.4% recorded in July, and the reason is benign: supply grew faster than reserves over three weeks while staying above par throughout. What matters for a holder is that the ratio has never gone below 100%, across both a 45% supply contraction and the subsequent recovery.

**The residual risk is not reserve quality — it is contract authority.** The PYUSD sits in an upgradeable contract. "Your PYUSD is in the contract today" is a real-time on-chain fact, not a trustless guarantee against a future privileged withdrawal. What converts that from a serious concern into a manageable one is the admin posture described below, which gives 48 hours of visible notice before any upgrade can land. There is also **no formal third-party reserve attestation at the USDai level** — the frontmatter records `audited_reserves: false` deliberately — but for this asset the on-chain proof is strictly better evidence than an attestation would be.

**One commercial dependency worth naming:** PayPal pays 4.5% a year on PYUSD held in the protocol and has guided up to $1B in loan backing for 2026. That is a tailwind, but it means the reserve relationship is an incentivized commercial arrangement rather than a neutral custody one, and reserve composition responds to incentive economics as well as to peg defense.

**A note on where the token lives, for anyone doing the two-read check themselves.** USDai is deployed on four chains — Arbitrum, Plasma, Base and Ethereum — but **effectively all of it is on Arbitrum**: as of 2026-08-18 the off-Arbitrum floats were roughly 790,000 on Plasma, 176,000 on Base and under 6,000 on Ethereum, against about 175M on Arbitrum. Well under one percent of the supply, so it does not move the coverage picture — the ratio stays above par whether or not those bridged tokens are counted in the Arbitrum supply figure. **The reserve, the mint-and-redeem path and the coverage check all live on Arbitrum**, which is the contract to read. One practical trap: **the token has the same address on every chain** (`0x0A1a1A10…82EF`), a deterministic deployment, so an address-only check cannot tell you which chain you are looking at — pair the address with the chain id. One use the Plasma float does serve: USDai is accepted as lending collateral on Fluid there, where it marks at about $0.9993.

## The underlying: PYUSD, and what USDai is not exposed to

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

**Admin control sits behind a 48-hour on-chain timelock, and the delay is binding rather than decorative.** USDai's ProxyAdmin (`0x2ddf39c7…`) is owned by a **`TimelockController` at `0x0EEA1EE0…639b` with a minimum delay of 172,800 seconds — exactly 48 hours** — re-verified independently on-chain on 2026-08-12. The detail that makes it real: **the timelock holds its own admin role**, so the delay cannot be shortened, and no new role can be granted, without first passing through the full 48 hours. Proposal authority sits with a **3-of-3 Safe multisig** with three known signers; operational permissions on the token sit with a sibling 3-of-3 multisig, and no role revocations have occurred since deployment.

That distinction — a timelock that governs itself versus one an admin can shorten at will — is the same test applied in the [Saturn reports](/reports/usdat/), and it lets you compare admin posture across issuers on like terms. USDai passes it. In practice it means a malicious or buggy upgrade is publicly visible for two days before it can take effect, and for a holder whose realistic exit is a secondary pool that clears in minutes, **two days is a usable window**. The same timelock owns the ProxyAdmin on sUSDai, so both legs of the protocol share one authority chain.

This is meaningfully stronger than the single-key setups common among stablecoins of the same age, and it is why the Issuer axis holds at 6.0 despite a short track record.

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

Live PYUSD coverage, the on-chain proof-of-reserves panel with the exact commands to reproduce the reads yourself, peg behavior, secondary depth and slippage tiers, and the 48-hour pending-upgrade watch are on the embedded dashboard below.

## Sibling

- [sUSDai](/reports/susdai/) — the staked leg, carrying the GPU-loan credit exposure, NAV growth and a 30-day redemption queue

---

*This report is built from publicly available documentation and independent on-chain reads, most recently on 2026-08-12, with the per-chain deployments and supplies verified 2026-08-18. We hold no privileged information about the issuer. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).*

*Revision history: 2026-08-23 — cross-reference correction, no score changes. **This report's comparison against Saturn's USDat went stale because USDat changed, not because anything here did.** The passage stated that `$M` "is the reserve asset behind Saturn's USDat, and it is the reason that report's backing axis carries a discount." Both clauses were true when written and both became false on 2026-08-19, when USDat's reserve rotated out of `$M` into PYUSDx; read 2026-08-23, USDat's residual `$M` balance was 0.000671, and its backing discount now prices a three-hop chain, an unassessed intermediary, and its own contract rejecting its collateral. **The facts were the easy part; the argument needed rebuilding.** The passage existed to differentiate USDai on the grounds that its reserve is PYUSD — and USDat now reaches PYUSD too, through PYUSDx, so a straight substitution would have argued a distinction that no longer exists. Restated on the durable difference: not *which* asset backs the token, since both terminate in PYUSD, but *where* it sits and whether a reader can reach it. USDai holds PYUSD directly at its own address, one `balanceOf` against supply; USDat holds PYUSDx, whose own PYUSD reserves sit a framework layer down and were not present at the token, its implementation, its proxy admin or its `earnerManager` on a 2026-08-23 check. **Stated explicitly as a verifiability difference and not a solvency one** — PYUSDx is a genuine PYUSD-backed framework, USDat reconciles 1:1 in units, and nothing here asserts that either is unbacked. USDai's own claims were re-verified in the same pass and hold: `baseToken()` returns PYUSD, and 171,420,599.41 PYUSD against 170,461,416.77 supply is coverage of 100.56%, above par. `last_verified` is not bumped — the USDat re-read is dated inline, and this report's own figures still carry their earlier pass. 2026-08-18 — chain-footprint correction, no score changes. This report listed USDai as Arbitrum-only; it is deployed on Arbitrum, Plasma, Base and Ethereum, at the same address on each. Verified on-chain 2026-08-18, with off-Arbitrum supply of roughly 790,000 on Plasma, 176,000 on Base and under 6,000 on Ethereum against about 175M on Arbitrum — well under one percent, and coverage stays above par on either counting convention. Governance is uniform across the four: the same ProxyAdmin owned by the same 48-hour timelock, verified per chain. No axis moved; the reserve, the redemption path and the coverage check were always on Arbitrum, and the correction is to what the page declared rather than to what it scored. The same pass corrected the [sUSDai report](/reports/susdai/), where the omission was material — just over a third of those shares sit off Arbitrum. 2026-08-12 — all scores held (Peg 7.0 / Backing 7.5 / Underlying 7.5 / Liquidity 4.5 / Issuer 6.0 / Overall 6.5). Figures restated on a fresh on-chain read: PYUSD coverage 100.98% (174.32M PYUSD against 172.63M supply, with the protocol's reported reserve matching the on-chain balance exactly), and supply recovered to $172.63M from the $154.8M July trough after the earlier rotation out of the unstaked leg. **Two substantive additions rather than corrections.** The admin posture is stated more precisely than before: the 48-hour TimelockController holds its own admin role, so the delay cannot be shortened without passing through it — verified on-chain, and the same binding-versus-decorative test used in the Saturn reports. And USDai is stated explicitly as **not** exposed to `$M`, the reserve asset that constrains the backing axis on Saturn's USDat: USD.AI migrated from `$M` to PYUSD reserves in February 2026 and uses M0 for issuance rails only, so none of that dependency reaches this asset. 2026-07-23 — freshness re-verify: coverage re-confirmed at 101.4%; supply roughly halved since May as capital rotated into staked sUSDai; all scores unchanged. Initial production publish 2026-05-28.*
