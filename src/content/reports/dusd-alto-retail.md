---
axis_frame: six
asset: "DUSD (Alto)"
slug: "dusd-alto"
aliases: ["Alto DUSD", "Alto Money DUSD", "Alto Protocol DUSD"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "Hybrid: treasury-operated 1:1 frxUSD stability module plus over-collateralized CDP mint markets"
assessment_type: "full"
audience: "retail"
date: "2026-09-21"
last_verified: "2026-09-20"
last_revised: "2026-09-21"
issuer: "Alto Foundation"
audited_reserves: false
market_cap_approx: 822000
peg_mechanism_score: 5.5
backing_score: 5.5
underlying_score: 4.5
liquidity_score: 5.5
structural_score: 5.0
issuer_score: 4.5
overall_score: 5.0
featured: false
production: false
---

# DUSD (Alto) — Risk Report

**Moderate risk · 5.0/10**

**Category:** Stablecoin | **Peg Mechanism:** Treasury-operated 1:1 frxUSD stability module (88% of supply) plus over-collateralized CDP mint markets (12%) | **Issuer:** Alto Foundation

## Summary

DUSD is the dollar-denominated unit of Alto, a Frax-aligned lending protocol that launched on Ethereum mainnet on 2025-12-10. It is issued in two ways. About 12% of supply is borrower debt from isolated "mint markets", where a user posts WETH, wstETH, rETH, frxUSD or another approved collateral and mints DUSD against it, over-collateralized and liquidatable. The other 88% is protocol issuance from a Universal Stability Module — an adapted fork of Aave's GHO stability module — that holds frxUSD one-for-one against the DUSD it has minted.

That stability module is permissioned. Its swap functions are open only to the Alto treasury Safe, which has been the sole counterparty since the module was initialised, so no DUSD holder has a redemption right against the reserve. A holder's only exit is the secondary market, and the secondary market is one Curve pool quoted in frxUSD; the onward step to dollars is cheap, but it runs through Frax's redemption inventory rather than anything Alto controls. Of 821,855 DUSD outstanding on 2026-09-20, 797,920 (97.09%) sat in that pool; genuine third-party holdings totalled roughly 1,000 DUSD across about 110 addresses.

The protocol is better built than most of its size: the token contract is not upgradeable, ten external audit engagements are published, a bug bounty is live, and reserves can be verified by anyone with a single balance query. The **5.0/10** overall score reflects a well-constructed system wrapped around a stablecoin that no holder can redeem, whose reserve and exit venue are the same asset, and whose governance, treasury and emergency powers resolve to one set of seven keys at a 4-of-7 threshold behind a one-hour timelock.

> **Critical token-identification warning:** this report covers Alto Protocol's DUSD at Ethereum address `0x63d74d22E689C715a04F2C13962b1f77F443d35b`, whose on-chain `name()` is the bare string `DUSD`. Three other live Ethereum tokens answer to the same ticker: Dialectic USD (`0x1e33E98aF620F1D563fcD3cfd3C75acE841204ef`, symbol `DUSD`), dTRINITY USD (`0x07fFf99e1664d9B116fbC158c0E99785F81cA236`, symbol `dUSD`) and the dormant 2020 DeFi Dollar (`0x8DC3c42fA99E36636b33E40d7949ba434c946511`). Neither supply nor venue shape separates them: dTRINITY's supply was 848,325 on 2026-09-20 against Alto's 821,855, and both hold Curve pools against a Frax asset. Curve's `DUSDUSDC` pool at `0x32E616F4f17d43f9A5cd9Be0e294727187064cb3` is Dialectic's, not Alto's — Alto DUSD has no live USDC venue. A DefiLlama query by the ticker alone returned 42 pools on 2026-09-21, 38 of them belonging to other assets. Resolve every price, pool and balance by contract address, never by ticker.

## 1 · Stability — 5.5

DUSD targets one dollar through two arrangements that work differently. The 12% CDP tranche behaves like a conventional over-collateralized stablecoin: borrowers who see DUSD trade below par can buy it cheaply and repay debt, a real but small arbitrage channel bounded by outstanding CDP debt. The 88% stability-module tranche is anchored at exactly one frxUSD per DUSD by a fixed-price strategy with zero fee in either direction — but only the treasury can use it. Peg support on the dominant tranche is therefore discretionary: it happens when, and at the size, the treasury chooses, not when an arbitrageur finds it profitable.

The realised record is strong. Reconstructed daily prices across the token's entire life to 2026-09-20 — 283 samples with no gaps — cover both venues DUSD has ever had. The UniV3 DUSD/USDC 0.01% pool (`0x206239406abccF730493e4b133b30DF546f9ff43`), live from 2025-12-11 to 2026-06-16, never read below **0.9998 USDC**. The Curve DUSD/frxUSD pool (`0x104d6a1b97A6CEf88D905d7b865A378d90be932A`), live from 2026-05-14, has a lowest reading of **0.999673 frxUSD**, on 2026-06-30. Across the 23 sampled days when both venues were live they agreed within about 2 bps. The worst reading in DUSD's history is about 3 bps below par; on 2026-09-21 the Curve pool quoted 1,000 DUSD at a premium of about 18 bps, because the pool is frxUSD-heavy.

CoinGecko lists an all-time low of **$0.9717 on 2026-03-12**. That figure is not reproducible on-chain: at block 24,637,909 on that date the UniV3 pool quoted 0.999998 with unchanged liquidity, and neighbouring days read the same. The listed low is a bad tick, not a depeg.

**Risks and limitations.** The record is bounded in three ways: sampling is daily, so an intraday excursion would not appear; a UniV3 spot price is a marginal quote rather than executable depth; and the Curve leg is quoted in frxUSD, whose own small deviations from the dollar are not corrected out. More fundamentally, a clean record on a discretionary mechanism is evidence about the operator's conduct to date, not about what the mechanism would do under stress — and no part of the period since 2025-12-10 has been stressed. Alto's own lending prices DUSD at a hardcoded $1, which insulates the protocol from a depeg but also means it never reacts to one.

## 2 · Backing — 5.5

Every DUSD in existence is attributable to a named minter with an on-chain ceiling; the sum of each minter's recorded issuance equals total supply to the wei (821,855.160989103709962351 on 2026-09-20). Backing splits into two tranches that should be read separately:

| Tranche | DUSD | Collateral | Ratio |
|---|---:|---|---:|
| Stability module (frxUSD) | 722,605 | 722,604.611770924639631386 frxUSD | **100.00%** |
| CDP mint markets | 99,251 | about $186,806 in wstETH, WETH, frxUSD, rETH, sUSDe and syrupUSDC | **188%** |
| **Total** | **821,855** | **about $909,388** | **110.7%** |

Collateral is valued with the markets' own oracles at block 26,017,854. The CDP book is mostly wstETH ($101,114 against 45,434 DUSD), WETH ($40,541 against 21,227 DUSD) and frxUSD ($37,270 against 29,199 DUSD); the other markets held dust.

Transparency here is a genuine strength. The stability module's reserve matches its issuance exactly, to the wei — re-verified unchanged on 2026-09-21 — and confirming it needs no attestation, auditor or issuer statement, just a `balanceOf` call. Few stablecoins of any size offer that.

**Risks and limitations.** The 110.7% aggregate is a blend of two unlike things and is not a system-wide margin. The 88% tranche is backed at exactly 100% by construction, with zero cushion: every cent of frxUSD impairment is a cent of DUSD impairment, and there is no insurance fund, surplus buffer or backstop anywhere in the system. The 188% on the CDP tranche is claimable by those markets' own borrowers and liquidators, not by DUSD holders generally, so it cannot cover a shortfall in the stability module. The frxUSD mint market is levered frxUSD rather than diversification. Across both tranches, **92.5% of collateral value is frxUSD**.

## 3 · Liquidity & Exit — 5.5

A DUSD holder has two conceivable exits: primary redemption against the stability module, and sale on a secondary venue. The first does not exist for holders. The module's `buyAsset` and `sellAsset` functions require a swapper role, the only address that has ever held that role is the Alto treasury Safe (`0xA1148A1b94262540994Cf9Aa431A13ad39764228`), and every one of the 16 swaps ever executed across Alto's three stability modules — eight buys and eight sells — originated from that Safe. The frxUSD module has been permissioned since its initialisation at block 25,030,679; the earlier USDC module was permissioned from launch. Zero third-party swaps have ever occurred.

The second exit is one Curve StableSwap-NG pool, DUSD/frxUSD (A = 1000, 0.01% fee), holding 797,920 DUSD and 2,502,131 frxUSD on 2026-09-21. A sweep by contract address across every Curve registry, the Uniswap V2/V3 and SushiSwap factories, Balancer, GeckoTerminal's indexes and aggregator route discovery found three other pools, all dead: the original UniV3 DUSD/USDC pool at zero liquidity, a UniV3 DUSD/frxUSD pool holding 2.55 DUSD, and a Curve twin holding 44 DUSD. There is no centralised-exchange listing, and 24-hour volume was $2,116 on 2026-09-20 and $201 on 2026-09-21 against a market cap of about $823,000.

From frxUSD the path to dollars is short and, at present, free. Frax operates an ERC-4626 redemption contract at `0x4f95c5ba0c7c69fb2f9340e190ccee890b3bd87c` whose `asset()` is USDC and which redeems frxUSD one-for-one at zero fee (`previewRedeem` of 1,000 frxUSD returned exactly 1,000.000000 USDC on 2026-09-21), bounded by the USDC it happens to hold; beyond that pocket the Curve frxUSD/crvUSD and crvUSD/USDC pools cost about 1 bp per hop. Measured end to end at block 26,022,595 and reproduced by a live aggregator to 0.00 bps at every size up to $1 million:

| DUSD sold | USDC received | vs par | Cost of the dollar leg vs stopping at frxUSD |
|---:|---:|---:|---:|
| 1,000 | 1,001.79 | +17.88 bps | 0.00 bps |
| 25,000 | 25,043.11 | +17.25 bps | 0.00 bps |
| 100,000 | 100,152.29 | +15.23 bps | −0.25 bps |
| 500,000 | 500,400.57 | +8.01 bps | −1.28 bps |
| 1,000,000 | 1,000,274.28 | +2.74 bps | −2.08 bps |

The curve's 2% crossing was bisected to between 2,515,625 and 2,531,250 DUSD — 3.06 times the entire supply of the asset. That number describes the pool, not what can be sold: 797,920 of the 821,855 DUSD in existence are inside the pool being quoted, so **23,935 DUSD is the most that could reach the market today**, and selling all of it returned 23,976.70 USDC, a premium of +17.27 bps. The depth figure for this asset is the float, not the crossing.

The stress case was measured too. On-chain, the treasury holds 61.91% of the pool's LP (2,042,222 of 3,298,835 LP tokens, staked through Convex, StakeDAO and Yearn rather than held directly), with no lockup. If it withdraws, both sides of the pool shrink by that share, the treasury's 493,971 DUSD joins the float to make 517,907, and the 2% crossing falls to about 961,000 DUSD. Even then, selling that entire enlarged float returned 517,949 USDC, a premium of +0.82 bps.

**What binds this axis is therefore not exit cost, which is excellent in both regimes, but the exit market itself.** There is no redemption right; one live venue and three dead ones; no exchange listing; daily volume in the hundreds or low thousands of dollars; and 62% of the depth is the issuer's own capital, withdrawable without notice. The asset is cheap to leave partly because there is almost nothing to leave — the 2% crossing sits so far above supply that the only meaningful depth number is the 23,935 DUSD float, and roughly 1,000 of that is in third-party hands.

**Risks and limitations.** The frxUSD-quoted venue is a recent condition, not the original design. A direct UniV3 DUSD/USDC pool was created on 2025-12-11, the day after the token, and carried real liquidity for six months; its liquidity reached zero at block 25,329,865 (2026-06-16 11:44 UTC), after which the Curve pool became the only venue. The pool's current premium to par is a property of its frxUSD-heavy balance and inverts into a discount as soon as the pool turns DUSD-heavy. The free dollar leg is Frax's inventory, not a property of DUSD: the redemption contract's USDC pocket moved from 59,196 to 72,836 USDC within ten minutes on 2026-09-21 and read 32,920 later that day, and with it empty the dollar exit costs 0.86–2.4 bps more than the frxUSD exit — immaterial to the verdict, but not Alto's to guarantee. Uniswap V4 has no factory to enumerate and was covered only through an index and route discovery; CoW Protocol and limit-order books were not enumerated; the redemption pocket and the crvUSD pools were read at a single block with no history.

## 4 · Dependencies — 4.5

DUSD's value passes almost entirely through frxUSD. The stability module holds 722,605 frxUSD, the frxUSD mint market holds a further 37,270, and together they are 92.5% of all collateral value. frxUSD is also the quote asset of the only venue on which DUSD trades. A frxUSD stress event would therefore impair the backing and the exit simultaneously and with perfect correlation; there is no leg of the system that survives it independently. DUSD cannot be worth more than frxUSD, and its price on the only venue is denominated in frxUSD.

Beyond frxUSD the dependency set is ordinary: about $149,000 of wstETH, WETH and rETH in isolated, over-collateralized CDP markets priced by Chainlink-based and ERC-4626 ratio oracles; one Curve StableSwap-NG pool carrying 100% of holder exit, whose non-treasury LP persists only while Convex and Yearn emissions do; and demand driven by Alto Reward Options paid to borrowers, suppliers and minters rather than by transactional use.

**Risks and limitations.** frxUSD carries its own administrative exposure: its Ethereum token owner is a 4-of-7 Safe whose mint, freeze and pause powers execute without delay, with only upgrades behind a timelock — see the [frxUSD report](/reports/frxusd/). DUSD's one-hour delay sits on top of a reserve asset whose most consequential powers have none. The dollar exit adds a second Frax dependency: the frxUSD-to-USDC leg is free only while Frax's redemption contract (`0x4f95c5ba0c7c69fb2f9340e190ccee890b3bd87c`) holds USDC, and that pocket swung 23% within ten minutes on 2026-09-21; when it is empty the leg costs 0.86–2.4 bps through Curve instead. Neither the pocket nor the crvUSD pools are Alto's to maintain. The CDP oracles were not reviewed.

## 5 · Contract & Admin — 5.0

The DUSD token contract is immutable: it is not a proxy, all three EIP-1967 slots read zero, and there is no upgrade path for the token itself. It inherits LayerZero's OFT standard through endpoint `0x1a44076050125825900e736c501f859c50fe728c`, but no peer has ever been set, so DUSD is Ethereum-only and the cross-chain mint surface is inert. Minting is restricted to allowlisted addresses, each with a ceiling; 19 minters have been authorised since launch and 17 are live. Pausing affects `mint()` and `burn()` only — transfers continue while paused, but primary issuance, stability-module swaps and CDP repayment all stop.

Ten external audit engagements are published in Alto's security-review repository — four by Cantina (2025-11 through 2026-06), two by Bailsec (2025-11) and three by Enigma Dark (2025-07 through 2025-11) — with both the DUSD token and the stability module in scope. A bug bounty has been live since 2025-12-11 paying up to $100,000 for critical findings. The stability module is an acknowledged adaptation of Aave's GHO GSM, a codebase with far more adversarial exposure than Alto's own. The audit reports themselves were not read, so whether every finding was resolved is not established.

Ownership of the token and of every stability-module role runs through an `AltoTimelockController` at `0xfAe841679dc1A93D225ECc827E4BbF3e8d703F86`, which hardens the stock OpenZeppelin design by forcing role changes through its own queue and blocking renunciation of the admin role. Its proposer, executor, canceller and admin roles are held by the governance Safe `0xc49bf619cc9A68F84A6c9Ab88506f2627565a4D0`. The deployer EOAs handed the roles to that Safe and revoked their own at block 23,989,753; no EOA holds any timelock role today. The treasury Safe `0xA1148A1b94262540994Cf9Aa431A13ad39764228` holds the stability module's swapper role, and the emergency Safe `0x1c11d2d42929bd17Ab7212b79c91862ADFa8bBE4` holds pause rights alongside an EmergencyController contract.

**Risks and limitations.** Two facts undercut that structure. First, the timelock's `minDelay` is **3,600 seconds**. One hour is not a window in which a holder can observe a queued action and react. Second, the governance, treasury and emergency Safes have the **identical seven owner addresses at the identical 4-of-7 threshold** — read from `getOwners()` and `getThreshold()` on each, all seven owners being externally-owned accounts. There is no separation of duties: governance, the sole stability-module counterparty that also owns 62% of the exit pool, and the emergency pause all resolve to one quorum of four signatures. Four signatures plus one hour can authorise a new minter at an arbitrary ceiling, upgrade the stability modules (which are UUPS-upgradeable even though the token is not), repoint the module's price, fee or access mode, enable cross-chain minting via `setPeer`, or call `seize()`, which transfers the module's entire underlying balance — 722,605 frxUSD, 88% of all backing — to the treasury Safe while leaving the DUSD outstanding. That is a description of the authority as deployed; there is no evidence it has been misused, and the role history is orderly. A flash minter also offers up to 500,000 DUSD at zero fee; Alto's own markets are insulated because they price DUSD at $1, and the Curve pool absorbs a sale of that size with the executed price moving only from 1.0018 to 1.0009, but an external integrator pricing DUSD from a thinner source would not be.

## 6 · Issuer — 4.5

Alto Foundation operates the protocol, publishing at altofoundation.org and docs.alto.money and reachable at security@altofoundation.org. Its public conduct matches its contracts: the Frax partnership under which frxUSD was whitelisted into the permissioned stability module and the DUSD/frxUSD Curve pool was launched jointly is described accurately in Alto's later material, and the on-chain state agrees with it. Growth since launch has been orderly — the market set expanded from 8 minters to 17, a second-generation mint-market implementation replaced the first, and ceilings are actively managed. No pause has ever fired on the token, and no incident was found in the period from 2025-12-10 to 2026-09-20. The audit and bounty programme is a real credit: three independent firms, the token and the stability module both in scope, and reports published rather than merely claimed.

**Risks and limitations.** No team members, legal entity or jurisdiction are disclosed on the website, documentation or launch post, and the seven Safe signers are unidentified. The 2025-12-10 launch post still describes a Peg Stability Module "allowing 1:1 swaps with USDC (minus a 0.20% fee)"; on-chain, that USDC module holds $0.01 with zero available liquidity, and the live module is frxUSD, zero-fee and treasury-only. Alto's Frax-partnership material does describe the module as permissioned, so this is a stale public surface rather than a misrepresentation — but the launch post is the page a new holder is most likely to find, and it implies an exit that has never existed for third parties. The source of the treasury's frxUSD — whether Frax-supplied, purchased or raised — is not established.

## Who this is for

- Frax-ecosystem participants who understand DUSD as a frxUSD-denominated instrument, expect to exit through the Curve pool and Frax's own redemption inventory, and check the treasury's LP position and the pool balance before sizing.
- Liquidity providers and borrowers in Alto's markets, for whom DUSD is a protocol unit rather than a savings asset.

## Who should avoid it

- Anyone who needs a redemption right against the reserve. None exists for holders; the exit is a market, and a very thin one.
- Anyone unwilling to take frxUSD risk on both the reserve and the exit at once.
- Anyone who reads a market cap as evidence of an organic holder base. Third-party holdings were roughly 1,000 DUSD on 2026-09-20.

## What to watch

- Any `Seized` event on a stability module: a single call that separates the reserve from the token.
- New `SetMinterStatus` or `SetMinterCeiling` events, and `PeerSet` on the DUSD token — new issuance authority on one hour's notice.
- The Curve pool's DUSD share (24.3% on 2026-09-20). A move toward DUSD-heavy turns the premium into a discount and is the earliest peg signal available.
- The treasury Safe's LP balance (2,036,225 LP, never reduced). Any burn is the issuer withdrawing the depth the exit depends on.
- `MinDelayChange` on the timelock, and any change to the three Safes' owner sets or thresholds.
- Every trigger in the [frxUSD report](/reports/frxusd/), at 92.5% pass-through.
- The USDC balance of Frax's frxUSD redemption contract, which is what makes the dollar leg free, and the appearance of any DUSD/USDC venue with real liquidity.

## Revision history

*2026-09-21 — dollar exit measured end to end at block 26,022,595; Liquidity & Exit 4.5 → 5.5, overall 4.75 → 5.0. Frax's ERC-4626 redemption contract converts frxUSD to USDC one-for-one at zero fee, so the dollar exit costs nothing over the frxUSD exit at any size the float can produce; 2% crossing bisected at 2,515,625–2,531,250 DUSD, 3.06 times supply, so depth is reported as the 23,935 DUSD float; treasury LP share verified on-chain at 61.91% and the withdrawal case measured at +0.82 bps for the enlarged float. Venue sweep by contract address found one live pool and three dead ones. A ticker-only aggregator lookup returned 38 other assets among 42 rows.*

*2026-09-21 — first staged publication. Supply, stability-module reserve, holder set, Curve pool balances and quotes, Safe owners and thresholds, timelock delay and the full minter and role histories read on-chain at block 26,017,854 (2026-09-20) and re-confirmed on 2026-09-21. Peg history reconstructed from archive state across 283 daily samples over both venues the token has ever had.*
