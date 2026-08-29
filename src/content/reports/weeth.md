---
asset: "weETH"
slug: "weeth"
aliases: ["weETH", "Wrapped eETH", "ether.fi weETH", "etherfi weETH"]
chains: ["eth", "base", "arbitrum", "optimism"]
category: "wrapped-token"
underlying_assets: ["ETH"]
assessment_type: "full"
date: "2026-08-13"
last_revised: "2026-08-27"
last_verified: "2026-08-23"
featured: false
production: true
issuer: "ether.fi"
yield_bearing: true
volatility_score: 7.5
liquidity_score: 6.5
structural_score: 7.0
redemption_score: 7.0
overall_score: 7.0
chain_overrides:
  base:
    liquidity_score: 5.0
    structural_score: 6.0
    redemption_score: 6.0
    overall_score: 6.0
  arbitrum:
    liquidity_score: 5.5
    structural_score: 6.0
    overall_score: 6.0
  optimism:
    liquidity_score: 5.0
    structural_score: 6.0
    redemption_score: 6.0
    overall_score: 6.0
---

# weETH — Risk Report

**Moderate risk · 7.0/10**

> **Read this first: weETH stopped being a restaking token on 2026-08-06.** ether.fi removed restaking from weETH. Restaking exposure now lives in a separate, opt-in token — **weETHs**, built on Symbiotic — and holders were **not** automatically migrated. If you hold plain weETH, you hold a plain liquid staking token: Ethereum consensus rewards, and no AVS slashing surface. That is a genuine reduction in risk, and it is why this report scores weETH at 7.0 rather than the 6.5 our internal assessment carried while it was a restaking token.

| Backing | What it earns | Exit methods | Age | Chains |
|---|---|---|---|---|
| ETH staked on the beacon chain by ether.fi (1.102072 eETH per weETH, verified 2026-08-23) | Ethereum consensus rewards only, accrued into the exchange rate | Unwrap to eETH then withdraw (validator exit queue), or sell on Curve / Balancer / Uniswap / Pendle | Live since 2023, no major exploit | Ethereum (canonical) plus Base, Arbitrum, Optimism and other L2s (bridged) |

## Summary

weETH is ether.fi's wrapped, non-rebasing form of eETH. Deposit ETH with ether.fi, it stakes that ETH on the beacon chain, and you get a token whose *quantity* stays fixed while its *value* grows — the opposite of a rebasing token, which grows your balance and keeps the price near parity. This makes weETH the form DeFi actually uses: **95.8% of all eETH is wrapped into weETH** as of 2026-08-13, because lending markets, AMMs and Pendle handle a rising exchange rate far more gracefully than a changing balance.

If you have not looked at this category before: a **liquid staking token (LST)** is a receipt for ETH that someone else is running validators with. You keep a tradeable token, they run the infrastructure, and you earn Ethereum's consensus yield minus a fee. The risks are not the risks of a stablecoin. There is no peg to defend — an LST is *supposed* to trade at a rising multiple of ETH — so the questions that matter are whether the underlying stake is really there, whether you can get out, who can change the contracts, and what happens if validators are penalised.

Until 2026-08-06 weETH answered a harder set of questions than that, because ether.fi also **restaked** the pooled ETH on EigenLayer, which added the risk that a third-party service (an AVS) misbehaved and the penalty was socialised back to depositors. That layer has been removed from weETH. Under 1% of ether.fi's assets remain restaked with EigenLayer, down from about half in early 2026, with the residual reported to hit zero in Q3 2026 and EigenPod withdrawal credentials to be removed from validators by Q4 2026.

What is left is ordinary LST risk plus a thin wrapping layer, and one genuine standout: ether.fi's admin setup is the strongest of any protocol in this database. Every privileged action **on the mainnet contracts** — including contract upgrades — runs through a **6-of-10 Gnosis Safe into a 10-day timelock**, re-verified on-chain for this report. ⚠️ **That verification stopped at the bridge layer, as this report's own Structural rationale says: the multi-chain bridge exposure is untouched and unverified.** So "every privileged action" describes **the set that was measured**, not every action that can affect a holder. Against that sit three things: the EigenLayer unwind is **not finished**, the restaking removal is **press-reported rather than proven on-chain by us**, and weETH on L2s is a bridged token carrying bridge trust that mainnet weETH does not.

## The number that misleads people: use ETH, not dollars

This is the trap most weETH commentary falls into right now. Between 2026-05-26 and 2026-08-13:

- ETH-equivalent supply **grew 9.3%**, from about 1.61M to **1,933,335 ETH-equivalent** (1,755,436 weETH at a rate of 1.101341).
- ✅ **Re-measured 2026-08-23, and it kept going: ETH-equivalent has crossed 2,000,000 — now 2,009,656** (1,823,525 weETH at a rate of 1.102072), a further **+3.95%** in ten days. The wrapped share of eETH rose again, 95.8% → **96.15%**.
- The dollar figure **fell**, from the $5–6B recorded in May to roughly **$3.6B** at an ETH price near $1,882 — **both as at 2026-08-13; the USD line has not been re-measured since**, and per this section's own argument it is the figure least worth chasing.

Both are true. The dollar decline is the ETH price, not people leaving. If you read weETH's risk off a USD chart you will conclude there was a large outflow through a period of structural change, and you will be wrong — more ETH is in this token than there was in May, and the share of eETH that is wrapped rose from roughly 93% to 95.8%, and again to 96.15% by 2026-08-23. **Denominate this position in ETH.** A USD-framed narrative on an ETH-denominated asset invents an event that did not happen.

## What you actually earn

weETH accrues value through its exchange rate, readable on-chain as `getRate()`. It does not rebase, and it does not pay anything out.

- **Rate on 2026-08-23: 1.102072 eETH per weETH** (1.101341 on 08-13). Accrual now measures **consistent across two independent, non-overlapping windows**: the 79 days from 2026-05-26 to 08-13 annualise to about **2.5%**, and the 10 days from 08-13 to 08-23 annualise to **2.45%** — agreement within 5 basis points, net of ether.fi's fee. **Two windows is better evidence than one, and it is still two windows:** this is a rate that can change with validator performance, fee policy or network conditions, so treat it as an observed range rather than a yield the token promises.
- That is consensus yield only now. Restaking rewards moved to weETHs, so post-2026-08-06 the return is Ethereum staking and nothing else. Anyone quoting a weETH yield that includes restaking or points incentives is describing the old product.
- Staking yield is not fixed. It moves with validator counts and network activity, so treat the figure above as an observed window, not a quote.

**Do not follow this asset into weETHs looking for the missing yield.** We have not assessed weETHs, and it is not simply "weETH plus slashing risk." Its collateral reportedly routes through Cap Protocol into M11 Credit and a Pareto vault supplying FalconX's prime brokerage — that is a **credit chain**, a different risk class entirely from validator slashing, and it needs its own analysis before anyone sizes it. Adoption so far has been thin: roughly 9,000 weETHs, on the order of half a percent of ether.fi's staking base, in the first days after the split. This report covers plain weETH.

## How exit works

Three steps, and one of them is out of anyone's hands:

1. **Unwrap weETH to eETH.** Instant, trustless, on-chain.
2. **Request withdrawal from ether.fi.** Permissionless, no KYC, no gating.
3. **Wait for a validator to exit the beacon chain.** Normally days; longer whenever Ethereum's exit queue is congested.

The improvement this period is real but narrow: the restaking-withdrawal delay — where restaked ETH could not be freed until its restaking commitments unwound — **no longer applies** to weETH. The beacon-chain queue is untouched by that and remains the binding constraint.

The faster exit is the secondary market: Curve, Balancer and Uniswap pools plus an unusually large Pendle PT/YT market. In calm conditions that trades close to the underlying value. In a redemption wave it does not, which is the next section.

## The discount that can still happen

In April 2024, after the EIGEN airdrop, weETH traded roughly 2–3% below ETH-parity for a stretch as points farmers unwound. Nothing was broken — the underlying stake was intact and holders who waited redeemed at full value. It was a secondary-market event: more people wanting out quickly than the pools could absorb at par, while the primary exit ran at the speed of the validator queue.

Removing restaking removes one *cause* of that kind of repricing. It does not remove the *mechanism*. Any large redemption wave can reopen a discount, and the weETH-to-weETHs split is itself a plausible trigger for unwind flow. If you need to exit inside a day during stress, expect to pay for it.

Liquidity is deep by any standard except the very top of the category — weETH is still thinner than Lido's stETH and wstETH, more limited on centralised exchanges, and materially shallower on L2s. That is why liquidity scores 6.5 and did not move this period: the restaking removal changed the risk model, not the order book.

## Who can change the contracts

This is weETH's strongest feature, and it was re-verified directly on-chain for this report rather than taken from ether.fi's documentation. At block 25,743,010 (2026-08-13):

| Contract | Address | Verified |
|---|---|---|
| weETH (Ethereum) | `0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee` | UUPS proxy, `getRate()` = 1.102072 (2026-08-23) |
| eETH (rebasing underlying) | `0x35fA164735182de50811E8e2E824cFb9B6118ac2` | totalSupply 2,018,015 eETH |
| RoleRegistry | `0x62247D29B4B9BECf4BB73E0c722cf6445cfC7cE9` | `owner()` is the timelock below |
| TimelockController | `0x9f26d4C958fD811A1F59B01B86Be7dFFc9d20761` | `getMinDelay()` = 864000s (**10 days**) |
| Proposer Safe | `0xcdd57d11476c22d265722F68390b036f3DA48c21` | **6 of 10** signers; holds `PROPOSER_ROLE` |
| weETH (Base) | `0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A` | upgradeable proxy, bridged |

What that means in plain terms: six of ten named signers must agree to propose any privileged change, and then **everyone gets ten days' notice before it can execute**. Ten days is a long exit window — long enough to unwrap, withdraw and leave if you dislike what has been queued. ⚠️ **That window covers upgrades. The bridge does not run through it — it has its own, and it is five times shorter.** Measured 2026-08-27.

weETH is a LayerZero OFT across **fifteen** deployments. On Ethereum the adapter is a **lockbox holding real weETH**, and its owner is a **separate `TimelockController` with a 172,800-second delay — two days, not ten.** The ten-day timelock this report describes is **a different contract entirely.** Gate-tested: `setPeer` **succeeds** from the two-day timelock and **reverts** from the 6-of-10 upgrade Safe. **The Safe a reader has been told to trust cannot touch the bridge; another one can.**

⚠️ **And the people differ. The bridge proposer is a 4-of-7 Safe that shares exactly one owner of seven with the 6-of-10 Safe named above** — effectively a different party, unnamed in this report until now. **So the number of keys standing behind the bridge path is four, not six.**

⚠️ **This is the path that matters for the failure mode described further down.** The roughly $292M rsETH loss was a **LayerZero configuration failure, not an upgrade** — so **the ten days govern the route that did not fail at Kelp, and the two days govern the one that did.**

**What is genuinely good here, and it belongs in the same breath rather than after it.** ⚠️ **There is a real delay — two days of notice, not zero** — and it is **self-administered, so it cannot be shortened**, the same property that makes the ten-day claim creditable. ⚠️ **And there is a genuine independent veto: a second 4-of-6 Safe holds `CANCELLER` and shares zero owners with the 4-of-7 proposer.** That is stronger separation than several assets in this database, where canceller and proposer are the same signers. **The honest sentence is that the protection is real, it is five times shorter than advertised, and it is held by people this report did not name.**

⚠️ **One asymmetry a reader should not invert:** the L2 legs (Base, Optimism, BSC, Scroll) run on a **three-day** timelock that **also governs upgrades there**, so bridge and upgrade share one authority — while on Ethereum they are separate contracts with different delays. **"The Ethereum leg is strongest" is true for upgrades and false for the bridge.**

⚠️ **And the second door was checked, and it is bolted to the same lock.** A LayerZero *delegate* can change DVN and verification settings **without `setPeer` at all** — a separate path, and the one closest in shape to what actually happened at Kelp. **Measured on all five walked legs, the delegate is the same address as the owner:** Ethereum's delegate is the two-day timelock, and Base, Optimism, BSC and Scroll all point at their three-day one. **So on every leg measured there is no undelayed configuration path** — both routes into bridge configuration run through the same timelock. ⚠️ **That is a negative result and it counts: it is the exact failure shape that cost Kelp about $292M, checked and absent.** A holder learning that the notice window is two days rather than ten should learn in the same breath that **the door beside it is not open.**

**Still unmeasured: the remaining ten of fifteen deployments — both `setPeer` owners and delegates.** That is breadth rather than a new path: on every leg walked so far both routes are timelocked. For comparison, Lido's equivalent delay is four days, and several LSTs and wrappers in this database have no timelock at all.

weETH is upgradeable rather than immutable, which is the trade-off that buys you that governance. The mainnet implementation **did change** since our May pass (now `0xA6Ca0607190d03CF16fe6F2865Cf40c3D160ccf3`, previously `0x2d10…fd6b`). A bounded scan of the roughly 63,000 blocks up to 25,743,010 found **no `Upgraded` event**, so that upgrade happened earlier in the window and is a **different event from the restaking removal** — do not read them as connected. We could not date it precisely: free-tier RPCs cap log scans at 10,000 blocks and reject archive reads. The practical lesson is to re-read the implementation each pass rather than assume it is static.

The code has been audited by Certora (formal verification) and Nethermind, there is an active Immunefi bounty, and about three years at multi-billion scale have passed without an exploit.

## L2 weETH is a different asset

weETH on Base, Arbitrum and Optimism is a bridged, upgradeable proxy (the Base admin is `0x2f6f…fb68`). Your claim on staked ETH runs through a bridge before it reaches mainnet, and that is not a theoretical concern: in April 2026 a peer LST — Kelp's rsETH — lost roughly $292M when a 1-of-1 LayerZero DVN configuration let an attacker mint unbacked tokens on destination chains.

ether.fi published a post on 2026-05-29 describing bridge hardening in direct response to that failure mode: message libraries pinned via `setSendLibrary` / `setReceiveLibrary` across all 20 weETH chains, verification raised to a **4-of-4 DVN threshold** (Canary, Horizen, Nethermind, LayerZero Labs), pair-wise rate limits on ether.fi's own bridge contracts, and the claim that the LayerZero multisig no longer has an on-chain path to change how weETH messages are verified. If accurate, that addresses precisely what went wrong for rsETH.

**We have not verified any of it on-chain.** It is an issuer statement, and this report does not give it score credit — the L2 scores (6.0 overall, versus 7.0 on mainnet) still treat bridged weETH as carrying trust that mainnet weETH does not. Hold size on Ethereum; treat L2 balances as the convenience position.

## What we could not verify

Being specific about this matters more than usual here, because the reclassification that drives the whole report rests on secondary sourcing.

- **The restaking removal is press-reported, not proven on-chain by us.** Two independent outlets ([The Defiant](https://thedefiant.io/news/defi/etherfi-removes-restaking-from-weeth-nearing-full-eigenlayer-exit), [CoinDesk](https://www.coindesk.com/tech/2026/08/07/ethereum-staking-token-weeth-splits-from-restaking-as-rewards-debate-heats-up)) reported it, and The Defiant attributes the "under 1%" and Q3/Q4 timeline to ether.fi's own slashing-risk documentation. **We retrieved no primary ether.fi document confirming it.** ether.fi's [blog post of 2026-08-06](https://ether.fi/blog/hardening-weeth-creating-the-market-standard) is about a security review and does not mention the change; its published whitepaper documentation, retrieved 2026-08-13, still describes the protocol restaking pooled ETH on EigenLayer with slashing socialised across depositors. The only direct issuer statement we could find is a brief post on X, quoted by CoinDesk. Our on-chain reads are consistent with the change but do not prove it.
- **The EigenLayer unwind is in progress, not complete.** EigenPod withdrawal credentials remain on validators until Q4 2026, so a residual EigenLayer contract dependency sits at the validator layer today. This is the reason structural is 7.0 and not higher.
- **The implementation upgrade is undated** (above).
- **The L2 bridge configuration is unverified by us** (above).

If a confirmed on-chain reading shows EigenLayer exposure at "under 1% and falling," structural moves up. If material restaking turns out to still be in place, this update reverses.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 7.5 | Value-accruing against ETH via `getRate()`; tracks ETH plus yield and stays tight in calm markets. Raised half a point because the AVS-slashing tail — a slashing event socialising into the token's value — is being retired. Held below where we would put stETH/wstETH because of the documented April 2024 discount episode and the redemption-wave mechanism that outlives restaking. |
| Liquidity | 6.5 | Deep on Curve, Balancer and Pendle at roughly 1.93M ETH-equivalent scale, but thinner than the Lido pair, limited on centralised venues, shallow on L2s. **Unchanged** — the restaking removal changed the risk model, not the order book. (Base 5.0, Arbitrum 5.5, Optimism 5.0.) |
| Structural | 7.0 | 6-of-10 Safe into a 10-day timelock on upgrades, `PROPOSER_ROLE` confirmed on-chain, Certora formal verification, about three years clean at multi-billion scale. Capped because the unwind is unfinished (EigenPod credentials until Q4 2026) and because **the bridge layer is a separate 4-of-7 into a two-day timelock, measured 2026-08-27.** ⚠️ **Held at 7.0, and the reason for the cap has changed from unverified to measured:** the bridge exposure this axis was already discounting is now quantified and lands roughly where the cap anticipated — real delay, self-administered, with an independent canceller, but shorter and thinner than the headline. ⚠️ **The delegate path is now measured and clean on all five walked legs — delegate equals owner, so no undelayed configuration route exists there.** Ten of fifteen deployments remain unmeasured, which is breadth rather than an open door. (L2s 6.0.) |
| Redemption | 7.0 | Permissionless and ungated: unwrap to eETH, request withdrawal, wait for a validator exit; or sell into deep DEX and Pendle markets. Raised half a point because the restaking-withdrawal delay no longer applies. Still slower and less battle-tested than stETH's queue. (L2s 6.0 — you must bridge to mainnet to redeem.) |
| **Overall** | **7.0** | Moderate risk, materially improved — and improved for a structural reason rather than a market one. Deliberately kept a notch below where we would place Rocket Pool's rETH: the EigenLayer exit is press-reported rather than verified, and the bridge configuration is unaudited by us. |

## Who it's for

Holders who want ETH staking exposure in the form DeFi is built around, who value a long, enforced notice period on contract changes above almost every other governance feature, and who can size positions on mainnet rather than L2s. It suits anyone who wanted ether.fi's scale and execution but was avoiding the token specifically because of restaking — that objection is being retired.

## Who should avoid

- Anyone who needs a guaranteed same-day exit at full value. The fast exit is the secondary market, and the secondary market is exactly where a discount appears under stress.
- Anyone holding primarily on Base, Arbitrum or Optimism who has not accepted the bridge trust. That is a 6.0 position, not a 7.0 one.
- Anyone who bought weETH *for* restaking yield. That product is now weETHs, it carries an unassessed credit chain rather than a slashing risk, and it is not covered here.
- Anyone who needs issuer-confirmed, primary-sourced facts before acting. The central claim in this report is currently secondary-sourced.

## What to watch

- **EigenPod withdrawal credentials.** The clean end of the unwind, expected by Q4 2026. Until then the EigenLayer dependency is reduced, not gone.
- **Primary confirmation from ether.fi.** A documentation rewrite or a proper post describing the 2026-08-06 change would close the largest open item in this report.
- **`getRate()` and the implementation address.** The rate is the honest read on yield. The implementation changed once this period without an event we could date — re-check both each time you re-size.
- **Pendle PT/YT weETH depth and the Curve pools.** Where a redemption wave would show up first, as a widening discount.
- **weETHs adoption.** A large migration into weETHs is unwind flow through weETH's secondary markets before it is anything else.
- **The Ethereum exit queue.** It sets your real time-to-cash on primary redemption, and it is congestion-dependent.

---

*This report is based on ether.fi's public documentation and blog, contemporaneous reporting from The Defiant and CoinDesk, and direct on-chain reads of the weETH, eETH, RoleRegistry, timelock and Safe contracts at Ethereum block 25,743,010 on 2026-08-13. The 2026-08-06 removal of restaking from weETH is press-reported and attributed by those outlets to ether.fi's own slashing-risk documentation; we retrieved no primary ether.fi document confirming it, and our on-chain reads are consistent with but do not prove the change. Supply, rate and price figures are point-in-time reads at that block. weETHs, ether.fi's separate restaking token, is not assessed here. Corrections, primary sources, or additional disclosures welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-08-27 — bridge layer measured; Structural held at 7.0.** The **10-day timelock governs upgrades**. The Ethereum OFT adapter — a lockbox holding real weETH — is owned by a **different `TimelockController` at two days**, with a **4-of-7 Safe** as proposer that shares exactly one owner of seven with the 6-of-10 upgrade Safe. Gate-tested: `setPeer` succeeds from the two-day timelock and reverts from the 6-of-10 Safe. ⚠️ **The delay is real, self-administered so it cannot be shortened, and there is a genuine independent veto — a 4-of-6 canceller sharing zero owners with the proposer.** **The LayerZero delegate equals the owner on all five walked legs**, so no undelayed configuration path exists there. **L2 legs run a three-day timelock that also governs upgrades**, so bridge and upgrade share one authority on Base, Optimism, BSC and Scroll while remaining separate on Ethereum. Ten of fifteen deployments remain unwalked.
- **2026-08-13 — initial publication.** Reflects the 2026-08-06 removal of restaking from weETH.
