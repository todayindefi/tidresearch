---
asset: "weETH"
slug: "weeth"
aliases: ["weETH", "Wrapped eETH", "ether.fi weETH", "etherfi weETH"]
chains: ["eth", "base", "arbitrum", "optimism"]
category: "wrapped-token"
underlying_assets: ["ETH"]
assessment_type: "full"
date: "2026-08-13"
last_revised: "2026-10-02"
last_verified: "2026-08-23"
featured: false
production: true
issuer: "ether.fi"
yield_bearing: true
axis_frame: six
# redemption_score is RETAINED as a legacy supplemental field: it renders nowhere
# under the frame (SIX_AXES has no Redemption row) but is read by riskAnalyst's
# publish_feed / portfolio_risk. Its content is folded into Liquidity & Exit as
# an H3, per the wylds pattern. Do not delete it.
volatility_score: 7.5
liquidity_score: 6.5
backing_score: 8.0
underlying_score: 5.5
issuer_score: 7.5
structural_score: 6.5
redemption_score: 7.0
overall_score: 7.0
chain_overrides:
  base:
    liquidity_score: 5.0
    structural_score: 6.0
    redemption_score: 6.0
    overall_score: 6.0
  arbitrum:
    liquidity_score: 4.0
    structural_score: 6.0
    overall_score: 6.0
  optimism:
    liquidity_score: 2.0
    structural_score: 6.0
    redemption_score: 6.0
    overall_score: 6.0
---

# weETH — Risk Report

**Moderate risk · 7.0/10**

> **Read this first: weETH stopped being a restaking token on 2026-08-06.** ether.fi removed restaking from weETH. Restaking exposure now lives in a separate, opt-in token — **weETHs**, built on Symbiotic — and holders were **not** automatically migrated. If you hold plain weETH, you hold a plain liquid staking token: Ethereum consensus rewards, and no AVS slashing surface. That is a genuine reduction in risk, and it is the most important thing to know about this token today.

| Backing | What it earns | Exit methods | Age | Chains |
|---|---|---|---|---|
| ETH staked on the beacon chain by ether.fi (1.102072 eETH per weETH, verified 2026-08-23) | Ethereum consensus rewards only, accrued into the exchange rate | Unwrap to eETH then withdraw (validator exit queue), or sell on Curve / Balancer / Uniswap | Live since 2023, no major exploit | Ethereum (canonical) plus Base, Arbitrum, Optimism and other L2s (bridged) |

## Summary

weETH is ether.fi's wrapped, non-rebasing form of eETH. Deposit ETH with ether.fi, it stakes that ETH on the beacon chain, and you get a token whose *quantity* stays fixed while its *value* grows — the opposite of a rebasing token, which grows your balance and keeps the price near parity. This makes weETH the form DeFi actually uses: **96.485% of all eETH is wrapped into weETH** as of 2026-10-02, because lending markets, AMMs and Pendle handle a rising exchange rate far more gracefully than a changing balance.

If you have not looked at this category before: a **liquid staking token (LST)** is a receipt for ETH that someone else is running validators with. You keep a tradeable token, they run the infrastructure, and you earn Ethereum's consensus yield minus a fee. The risks are not the risks of a stablecoin. There is no peg to defend — an LST is *supposed* to trade at a rising multiple of ETH — so the questions that matter are whether the underlying stake is really there, whether you can get out, who can change the contracts, and what happens if validators are penalised.

Until 2026-08-06 weETH answered a harder set of questions than that, because ether.fi also **restaked** the pooled ETH on EigenLayer, which added the risk that a third-party service (an AVS) misbehaved and the penalty was socialised back to depositors. That layer has been removed from weETH. Under 1% of ether.fi's assets remain restaked with EigenLayer, down from about half in early 2026, with the residual reported to hit zero in Q3 2026 and EigenPod withdrawal credentials to be removed from validators by Q4 2026. ⚠️ **Q3 2026 has now ended, and whether the residual actually reached zero cannot be settled from contract state** — see *What we could not verify*.

What is left is ordinary LST risk plus a thin wrapping layer, and a mainnet admin arrangement worth describing precisely. Every privileged action **on the mainnet contracts** — including contract upgrades — runs through a **6-of-10 Gnosis Safe into a 10-day timelock**, re-verified on-chain for this report. ⚠️ **That is the mainnet set, and it is not the whole asset.** The L2 upgrade paths have now been measured and they are weaker and, on Arbitrum, not ether.fi's at all — see **L2 weETH is a different asset** below. So "every privileged action" describes **the set that was measured on Ethereum**, and an L2 holder is not covered by it. Against that sit three things: the EigenLayer unwind is **not finished**, the restaking removal is **press-reported rather than proven on-chain by us**, and weETH on L2s is a bridged token carrying bridge trust that mainnet weETH does not.

## 1 · Stability — 7.5

weETH has no peg to defend. It is **value-accruing against ETH** through an exchange rate readable on-chain as `getRate()`, so it is *supposed* to trade at a rising multiple of ETH rather than at parity with anything. In calm markets it tracks ETH plus accrued yield and stays tight.

⚠️ **The AVS-slashing tail is retired.** While weETH was a restaking token, a slashing event at a third-party service could socialise back into the token's value. That path no longer exists in plain weETH.

What remains is a secondary-market mechanism, and it has fired once. In April 2024, after the EIGEN airdrop, weETH traded roughly 2–3% below ETH-parity for a stretch as points farmers unwound. Nothing was broken — the underlying stake was intact and holders who waited redeemed at full value. It was more people wanting out quickly than the pools could absorb at par, while the primary exit ran at the speed of the validator queue. ⚠️ **Removing restaking removes one *cause* of that repricing; it does not remove the *mechanism*.** Any large redemption wave can reopen a discount, and the weETH-to-weETHs split is itself a plausible trigger for unwind flow.

⚠️ **That episode is weETH's own measured history, and it is not a ranking.** No comparable discount series has been run for stETH or wstETH here, so this report does not place weETH above or below them on deviation — it reports that weETH has detached once, by 2–3%, and that the mechanism which did it is still present.

## 2 · Backing — 8.0

Each weETH is a claim on **ETH staked on the beacon chain by ether.fi**. There is no reserve to attest to and no off-chain custodian in the backing path: the collateral is validator stake, and the claim on it is expressed as a rate rather than a balance.

- **`getRate()` was 1.102072 eETH per weETH on 2026-08-23** (1.101341 on 08-13), and the rate is **monotonic** — it accrues and does not step down.
- ✅ **Read 2026-10-02: eETH `totalSupply()` 2,299,047.62, weETH `totalSupply()` 2,007,622.69, wrapped share 96.485%** — the share computed on unit-matched operands rather than by mixing wrapped units with ETH-equivalent ones.
- The wrapped share has risen steadily: roughly 93% in May, 95.8% at 2026-08-13, 96.15% at 08-23, 96.485% at 2026-10-02. ⚠️ **It is a live quantity, not a constant** — it moved within 2026-10-02 itself — so treat any single reading as of its own moment.

⚠️ **What this axis does not cover.** Whether any of that stake is still restaked with EigenLayer is **not establishable from contract state** — see *What we could not verify*. That is recorded on Dependencies as an unmeasured residual, not discounted here, so the same fact is not charged twice.

## 3 · Liquidity & Exit — 6.5

This axis covers **both** exit paths — the secondary order book and primary redemption — and is scored on whichever binds. ⚠️ **On all four chains the binding leg is the market, not the gate:** primary redemption is permissionless and ungated, while each L2's order book is worse than simply bridging to mainnet and redeeming there.

### How exit works

Three steps, and one of them is out of anyone's hands:

1. **Unwrap weETH to eETH.** Instant, trustless, on-chain.
2. **Request withdrawal from ether.fi.** Permissionless, no KYC, no gating.
3. **Wait for a validator to exit the beacon chain.** Normally days; longer whenever Ethereum's exit queue is congested.

The improvement this period is real but narrow: the restaking-withdrawal delay — where restaked ETH could not be freed until its restaking commitments unwound — **no longer applies** to weETH. The beacon-chain queue is untouched by that and remains the binding constraint.

The faster exit is the secondary market: Curve, Balancer and Uniswap pools. In calm conditions that trades close to the underlying value. In a redemption wave it does not.

⚠️ **Pendle is not part of that.** All eight weETH Pendle markets had matured before 2026-10-02. Redeeming a matured PT is a different mechanism from selling into a pool — it belongs with the redemption steps above, not in the depth you can hit on the way out.

### How deep the exit is, chain by chain

Measured 2026-10-02. The figures are **ETH-denominated** and **marginal** — the cost of the next ETH sold, with the first rung subtracted — because this is an ETH-denominated asset and an average struck across a whole trade hides the point where it breaks.

| Chain | Depth | Standing cost | Pools | Pool TVL |
|---|---|---|---|---|
| Ethereum | **floor of ≥5,000 ETH** (~$13.5M) | −6.9bp | 70 | $50.29M |
| Base | crossing between **500 and 1,000 ETH** | −6.2bp | 93 | $6.61M |
| Arbitrum | crossing between **50 and 100 ETH** | −16.6bp | 66 | $0.58M |
| Optimism | crossing between **1 and 5 ETH** (~$3–14K) | −10.7bp | 43 | $20.9K |

⚠️ **Ethereum's number is a floor, not a limit.** 5,000 ETH is the largest size the measurement reached and cleared; the depth above it was not located. Read it as *at least this much*, never as *this is where it runs out*. The three L2 rows are the opposite kind of figure — a bracket the crossing sits inside, and so a real ceiling on what that chain absorbs.

⚠️ **Standing cost is the cost at the smallest quoted size, before any size impact** — the price of the asset, not the price of your trade. It is measured separately from the depth beside it, and the two do not add. Base is where the gap shows: standing cost is 6.2bp, but **500 ETH costs about 11bp and 1,000 ETH costs about 1,598bp.** That is a cliff rather than a slope — size that looks affordable right up to the point it is not.

So the shape is a deep mainnet book and L2 books running from thin to negligible. Mainnet liquidity scores **6.5** on the measure above. ⚠️ **Two comparisons a reader might expect here have not been made.** No ladder has been run against Lido's stETH or wstETH, so this report does not rank weETH against them. And **centralised-venue depth is not measured at all** — a deliberate scope choice, not an oversight, since the DEX ladder answers the question the score rests on. Both are therefore floors on coverage: real tradeable depth is at least what is shown, and nothing here says where weETH sits against the largest LSTs. The L2s score on their own depth — **Base 5.0**, **Arbitrum 4.0** at roughly a tenth of Base's depth and 2.7 times its standing cost, and **Optimism 2.0**, where the whole book crosses between one and five ETH.

### What the depth above costs you under stress

Those figures are calm-market figures. A redemption wave is the condition under which a discount opens — the mechanism is described under **Stability** above, where it is priced — and the practical consequence for exiting is simple: **if you need out inside a day during stress, expect to pay for it.** The primary path runs at the speed of the validator queue regardless of what the book is doing, so the two exits do not rescue each other on the same timescale.

### Redemption — 7.0 (retained, folded into Liquidity & Exit)

Permissionless and ungated: unwrap to eETH, request withdrawal, wait for a validator exit. No KYC and no gating at any step. The restaking-withdrawal delay no longer applies. The binding wait is Ethereum's validator exit queue, which is congestion-dependent and outside ether.fi's control, and on an L2 you must bridge to mainnet before you can redeem at all.

## 4 · Dependencies — 5.5

This axis prices **the counterparty set** — who weETH relies on to exist and stay redeemable — not the quality of what sits underneath.

⚠️ **ether.fi is the sole counterparty and there is no substitution path.** It operates the staking protocol, the withdrawal queue and the eETH→weETH wrapper. A holder cannot change issuer while continuing to hold the claim: exiting ether.fi and exiting the position are the same action.

⚠️ **The diversification that exists is the wrong kind.** Many node operators sit under ether.fi, and the whole beacon chain sits under them. So the **asset** is diversified while the **counterparty** is not — and a good counterparty at 100% is still 100%. Quality is an argument for that counterparty's own standing, never for the dependent's.

⚠️ **The EigenLayer residual is recorded as UNMEASURED, not as small.** Under 1% of ether.fi's assets were reported restaked, with the residual reaching zero in Q3 2026 — but Q3 has passed, the milestone is unverified, and today's walk established that the fraction is not readable from contract state at all. **Missing, unmeasured and zero are three different states**, and this axis holds the second.

✅ **The upstream leg is clean:** the chain weETH's value ultimately passes through is Ethereum itself.

⚠️ **weETH is not a pure wrapper**, so the convention that a wrapper scores equal to its underlying does not reach it: staking transforms the claim and inserts an operator between the holder and the ETH.

## 5 · Contract & Admin — 6.5

The mainnet arrangement was read directly on-chain rather than taken from ether.fi's documentation. At block 25,743,010 (2026-08-13):

| Contract | Address | Verified |
|---|---|---|
| weETH (Ethereum) | `0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee` | UUPS proxy, `getRate()` = 1.102072 (2026-08-23) |
| eETH (rebasing underlying) | `0x35fA164735182de50811E8e2E824cFb9B6118ac2` | `totalSupply()` 2,299,047.62 eETH (2026-10-02) |
| RoleRegistry | `0x62247D29B4B9BECf4BB73E0c722cf6445cfC7cE9` | `owner()` is the timelock below |
| TimelockController | `0x9f26d4C958fD811A1F59B01B86Be7dFFc9d20761` | `getMinDelay()` = 864000s (**10 days**) |
| Upgrade Safe | `0xcdd57d11476c22d265722F68390b036f3DA48c21` | `getThreshold()` **6**, `getOwners()` **10** — read directly, not inferred. Holds proposer, executor **and** canceller on this layer |
| weETH (Base) | `0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A` | upgradeable proxy, bridged |

What that means in plain terms: six of ten named signers must agree to propose any privileged change, and then **everyone gets ten days' notice before it can execute**. Ten days is a long exit window — long enough to unwrap, withdraw and leave if you dislike what has been queued. ⚠️ **That window covers upgrades. The bridge does not run through it — it has its own, and it is five times shorter.** Measured 2026-08-27.

weETH is a LayerZero OFT across **fifteen** deployments. On Ethereum the adapter is a **lockbox holding real weETH**, and its owner is a **separate `TimelockController` with a 172,800-second delay — two days, not ten.** The ten-day timelock this report describes is **a different contract entirely.** Gate-tested: `setPeer` **succeeds** from the two-day timelock and **reverts** from the 6-of-10 upgrade Safe. **The Safe a reader has been told to trust cannot touch the bridge; another one can.**

⚠️ **And the two layers are less separate than they look. The bridge proposer is a 4-of-7 Safe, `0x2aca71020de61bb532008049e1bd41e451ae8adc`, and it shares TWO of its owners with the 6-of-10 upgrade Safe above** — `0xde3bf1fa3b3829342bc4356592bb7cf3baad8264` and `0x5c8c76f2e990f194462dc5f8a8c76ba16966ed42`, confirmed by reading `getOwners()` on **both** Safes and intersecting the two sets. **So the number of keys standing behind the bridge path is four, not six**, and the two sets overlap rather than being distinct parties. ⚠️ **This is address-set overlap and nothing more.** It says nothing about organisational independence, custody arrangements or where keys physically sit, so it is a floor on how dependent the two layers are — not proof that they are concentrated.

⚠️ **This is the path that matters for the failure mode described further down.** The roughly $292M rsETH loss was a **LayerZero configuration failure, not an upgrade** — so **the ten days govern the route that did not fail at Kelp, and the two days govern the one that did.**

**What is genuinely good here, and it belongs in the same breath rather than after it.** ⚠️ **There is a real delay — two days of notice, not zero** — and it is **self-administered, so it cannot be shortened**, the same property that makes the ten-day claim creditable. ⚠️ **And there is a real veto: a second 4-of-6 Safe, `0x055a8b2b65d0ab4e0c17a0168d032464b7e97bdf`, holds `CANCELLER` and shares zero owners with the 4-of-7 bridge proposer** — the two owner sets were read and intersected, and the intersection is empty. That separation is not universal; in many timelock setups canceller and proposer are the same signers. ⚠️ **It is not fully independent of the Ethereum upgrade Safe, though: those two share one owner, `0xa195d4a57c4802651f67fb56349e10a7addadd82`.** A 4-of-6 veto still needs three signatures from outside the upgrade set, so the separation is real but not total. **The protection is real, it is five times shorter than the headline ten days, and the keys behind it are a different set from the ones the upgrade path runs through.**

⚠️ **One asymmetry a reader should not invert:** the L2 legs (Base, Optimism, BSC, Scroll) run on a **three-day** timelock that **also governs upgrades there**, so bridge and upgrade share one authority — while on Ethereum they are separate contracts with different delays. **"The Ethereum leg is strongest" is true for upgrades and false for the bridge.**

⚠️ **And the second door was checked, and it is bolted to the same lock.** A LayerZero *delegate* can change DVN and verification settings **without `setPeer` at all** — a separate path, and the one closest in shape to what actually happened at Kelp. **Measured on all five walked legs, the delegate is the same address as the owner:** Ethereum's delegate is the two-day timelock, and Base, Optimism, BSC and Scroll all point at their three-day one. **So on every leg measured there is no undelayed configuration path** — both routes into bridge configuration run through the same timelock. ⚠️ **That is a negative result and it counts: it is the exact failure shape that cost Kelp about $292M, checked and absent.** A holder learning that the notice window is two days rather than ten should learn in the same breath that **the door beside it is not open.**

**Still unmeasured: the remaining ten of fifteen deployments — both `setPeer` owners and delegates.** That is breadth rather than a new path: on every leg walked so far both routes are timelocked. For comparison, Lido's equivalent delay is four days, and many LSTs and wrappers have no timelock at all.

weETH is upgradeable rather than immutable, which is the trade-off that buys you that governance. The mainnet implementation is `0xA6Ca0607190d03CF16fe6F2865Cf40c3D160ccf3`, and it **replaced an earlier one** at some point before block 25,743,010. A bounded scan of the roughly 63,000 blocks up to that height found **no `Upgraded` event**, so the replacement sits further back than that window and is a **different event from the restaking removal** — do not read the two as connected. It could not be dated: free-tier RPCs cap log scans at 10,000 blocks and reject archive reads. ⚠️ **Re-read the implementation address each time you re-size**, rather than assuming it is static.

The code has been audited by Certora (formal verification) and Nethermind, there is an active Immunefi bounty, and about three years at multi-billion scale have passed without an exploit.

### L2 weETH is a different asset

⚠️⚠️ **weETH is not one asset with a bridge attached — it is four separate upgrade arrangements, and one of them is not ether.fi's at all.** Measured on each chain 2026-09-12, with a fabricated address as control:

| chain | token | upgrade path | delay |
|---|---|---|---|
| Ethereum | `0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee` | 6-of-10 Safe → timelock | **10 days** |
| Base | `0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A` | ProxyAdmin `0x2f6f3cc4a275c7951fb79199f01ed82421edfb68` → timelock `0x851Dd540f4D2Ec78120De0a0cc87B21EdE5Df5C6` | **3 days** |
| Optimism | `0x5A7fACB970D094B6C7FF1df0eA68D99E6e73CBFF` | ProxyAdmin `0x632304edc891afed1a7bde9a40b19f1c393ad5f3` → timelock **`0x851Dd540f4D2Ec78120De0a0cc87B21EdE5Df5C6`** | **3 days** |
| **Arbitrum** | `0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe` | ⚠️ **BeaconProxy → shared beacon `0xe72ba9418b5f2ce0a6a40501fe77c6839aa37333`** | ⚠️ **none found** |

⚠️ **Base and Optimism are one arrangement rendered twice, not two independent ones.** Their ProxyAdmins differ, but both answer to **the same timelock address**, `0x851Dd540f4D2Ec78120De0a0cc87B21EdE5Df5C6`, with an identical `getMinDelay()` of **259,200 seconds — 3 days**, against Ethereum's 10. **Two legs, one failure point, and a delay less than a third as deep.** Behind that timelock sits a **4-of-7 Safe, `0x7a00657a45420044bc526b90ad667affaee0a868`**, holding proposer, executor and canceller — the same address, with the same threshold and the same owner count, deployed on both chains.

⚠️⚠️ **On Arbitrum the upgrade authority is not ether.fi.** The token is a **BeaconProxy** — no implementation or admin in its own slots — sitting behind beacon `0xe72ba9418b5f2ce0a6a40501fe77c6839aa37333`. ✅ **That beacon is shared: WBTC on Arbitrum sits behind the same one**, checked directly. Its owner is `0xcf57572261c7c2bcf21ffd220ea7d1a27d40a827`, itself a proxy. **So whoever can upgrade that beacon changes the code behind every token using it, and an Arbitrum weETH holder's upgrade counterparty is the bridge operator whose beacon it is — not the issuer whose name is on the token.**

✅ **Identity is established by the pointer back rather than by ticker:** the Arbitrum token's `l1Address()` returns `0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee`, which is mainnet weETH.

**Arbitrum supply is 49,584 weETH; Base 19,079; Optimism 10,281.**

Your claim on staked ETH runs through a bridge before it reaches mainnet, and that is not a theoretical concern: in April 2026 a peer LST — Kelp's rsETH — lost roughly $292M when a 1-of-1 LayerZero DVN configuration let an attacker mint unbacked tokens on destination chains.

ether.fi published a post on 2026-05-29 describing bridge hardening in direct response to that failure mode: message libraries pinned via `setSendLibrary` / `setReceiveLibrary` across all 20 weETH chains, verification raised to a **4-of-4 DVN threshold** (Canary, Horizen, Nethermind, LayerZero Labs), pair-wise rate limits on ether.fi's own bridge contracts, and the claim that the LayerZero multisig no longer has an on-chain path to change how weETH messages are verified. If accurate, that addresses precisely what went wrong for rsETH.

**We have not verified any of it on-chain.** It is an issuer statement and carries no score credit — the L2 scores (6.0 overall, versus 7.0 on mainnet) still treat bridged weETH as carrying trust that mainnet weETH does not. Hold size on Ethereum; treat L2 balances as the convenience position.

## 6 · Issuer — 7.5

✅ **ether.fi removed restaking from weETH on 2026-08-06**, moving it to a separate opt-in token — an issuer deleting a yield source in order to shrink a risk surface its holders were carrying, which is rare enough to credit.

Behind that: about three years at multi-billion scale with no exploit, Certora formal verification and a Nethermind audit, and an active Immunefi bounty.

⚠️ **Capped at 7.5** because the removal is **press-reported rather than proven on-chain by us**, and because the L2 deployments are administered to a weaker standard than the mainnet contracts.

## The number that misleads people: use ETH, not dollars

This is the trap most weETH commentary falls into right now. Between 2026-05-26 and 2026-08-13:

- ETH-equivalent supply **grew 9.3%**, from about 1.61M to **1,933,335 ETH-equivalent** (1,755,436 weETH at a rate of 1.101341).
- ✅ **Re-measured 2026-08-23, and it kept going: ETH-equivalent crossed 2,000,000 to 2,009,656 at that date** (1,823,525 weETH at a rate of 1.102072), a further **+3.95%** in ten days. The wrapped share of eETH rose again, 95.8% → **96.15%**.
- The dollar figure **fell**, from the $5–6B recorded in May to roughly **$3.6B** at an ETH price near $1,882 — **both as at 2026-08-13; the USD line has not been re-measured since**, and per this section's own argument it is the figure least worth chasing.

Both are true. The dollar decline is the ETH price, not people leaving. If you read weETH's risk off a USD chart you will conclude there was a large outflow through a period of structural change, and you will be wrong — more ETH is in this token than there was in May, and the share of eETH that is wrapped rose from roughly 93% to 95.8%, and again to 96.15% by 2026-08-23. **Denominate this position in ETH.** A USD-framed narrative on an ETH-denominated asset invents an event that did not happen.

## What you actually earn

weETH accrues value through its exchange rate, readable on-chain as `getRate()`. It does not rebase, and it does not pay anything out.

- **Rate on 2026-08-23: 1.102072 eETH per weETH** (1.101341 on 08-13). Accrual now measures **consistent across two independent, non-overlapping windows**: the 79 days from 2026-05-26 to 08-13 annualise to about **2.5%**, and the 10 days from 08-13 to 08-23 annualise to **2.45%** — agreement within 5 basis points, net of ether.fi's fee. **Two windows is better evidence than one, and it is still two windows:** this is a rate that can change with validator performance, fee policy or network conditions, so treat it as an observed range rather than a yield the token promises.
- That is consensus yield only now. Restaking rewards moved to weETHs, so post-2026-08-06 the return is Ethereum staking and nothing else. Anyone quoting a weETH yield that includes restaking or points incentives is describing the old product.
- Staking yield is not fixed. It moves with validator counts and network activity, so treat the figure above as an observed window, not a quote.

**Do not follow this asset into weETHs looking for the missing yield.** We have not assessed weETHs, and it is not simply "weETH plus slashing risk." Its collateral reportedly routes through Cap Protocol into M11 Credit and a Pareto vault supplying FalconX's prime brokerage — that is a **credit chain**, a different risk class entirely from validator slashing, and it needs its own analysis before anyone sizes it. Adoption so far has been thin: roughly 9,000 weETHs, on the order of half a percent of ether.fi's staking base, in the first days after the split. This report covers plain weETH.

## What we could not verify

Being specific about this matters more than usual here, because the reclassification that drives the whole report rests on secondary sourcing.

- **The restaking removal is press-reported, not proven on-chain by us.** Two independent outlets ([The Defiant](https://thedefiant.io/news/defi/etherfi-removes-restaking-from-weeth-nearing-full-eigenlayer-exit), [CoinDesk](https://www.coindesk.com/tech/2026/08/07/ethereum-staking-token-weeth-splits-from-restaking-as-rewards-debate-heats-up)) reported it, and The Defiant attributes the "under 1%" and Q3/Q4 timeline to ether.fi's own slashing-risk documentation. **We retrieved no primary ether.fi document confirming it.** ether.fi's [blog post of 2026-08-06](https://ether.fi/blog/hardening-weeth-creating-the-market-standard) is about a security review and does not mention the change; its published whitepaper documentation, retrieved 2026-08-13, still describes the protocol restaking pooled ETH on EigenLayer with slashing socialised across depositors. The only direct issuer statement we could find is a brief post on X, quoted by CoinDesk. Our on-chain reads are consistent with the change but do not prove it.
- **The EigenLayer unwind is in progress, not complete.** EigenPod withdrawal credentials remain on validators until Q4 2026, so a residual EigenLayer contract dependency sits at the validator layer today.
- ⚠️ **And the unwind is not settleable from contract state at all — that is a result, not a gap in our effort.** The weETH and eETH contracts **expose no authoritative enumeration** of validator withdrawal credentials, EigenPods, AVS registrations, or the fraction of backing still restaked. An EigenLayer address absent from a proxy slot would **not** show that validators no longer carry EigenPod credentials, because the credentials do not live there. Settling it requires a **validator and EigenPod inventory reconciled against withdrawal credentials** — a different kind of measurement from reading contracts, and the same one the expired Q3 2026 milestone needs.
- **The implementation upgrade is undated** (above).
- **The L2 bridge configuration is unverified by us** (above).

If a validator-level inventory shows EigenLayer exposure at "under 1% and falling," structural moves up. If material restaking turns out to still be in place, this update reverses.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Stability | 7.5 | Value-accruing against ETH via `getRate()`; tracks ETH plus yield and stays tight in calm markets. ⚠️ **The AVS-slashing tail is retired** — no path remains for a slashing event to socialise into the token's value. weETH has detached once, by 2–3% in April 2024, and the redemption-wave mechanism that did it outlives restaking. ⚠️ No comparable discount series was run for stETH or wstETH, so this is weETH's own history rather than a ranking against them. |
| Backing | 8.0 | Claim on ETH staked on the beacon chain — validator stake, not a reserve, so there is nothing to attest. `getRate()` is **monotonic** and read 1.102072 on 2026-08-23. ✅ **Read 2026-10-02: eETH supply 2,299,047.62, weETH supply 2,007,622.69, wrapped share 96.485%** on unit-matched operands — a live quantity, carried with its own as-of. Whether any stake remains restaked is not establishable from contract state and is carried on Dependencies as unmeasured, so it is not charged twice. |
| Liquidity & Exit | 6.5 | Mainnet depth measured 2026-10-02 at a **floor of ≥5,000 ETH (~$13.5M)**, −6.9bp standing, across 70 pools holding $50.29M — a floor, not a located limit. Thin to negligible on L2s, where the crossing runs from 500–1,000 ETH on Base down to 1–5 ETH on Optimism. (Base 5.0, Arbitrum 4.0, Optimism 2.0.) ⚠️ **Scored on the binding leg, and on all four chains that is the market rather than the gate** — primary redemption is permissionless and ungated, and each L2's book is worse than bridging to mainnet to redeem. |
| Dependencies | 5.5 | ⚠️ **ether.fi is the sole counterparty and there is no substitution path** — it runs the staking protocol, the withdrawal queue and the wrapper, and a holder cannot change issuer while holding the claim. The diversification beneath it is the wrong kind: many node operators and the whole beacon chain sit under ether.fi, so the **asset** is diversified while the **counterparty** is not, and a good counterparty at 100% is still 100%. ⚠️ **The EigenLayer residual is recorded UNMEASURED rather than small** — Q3 2026 passed unverified and the fraction is not readable from contract state. ✅ The upstream chain is Ethereum itself. |
| Contract & Admin | 6.5 | 6-of-10 Safe into a 10-day timelock on upgrades — threshold and owner set read directly, not inferred — plus Certora formal verification and about three years clean at multi-billion scale. ⚠️ **Signer independence is now measured rather than assumed, and it is partly adverse.** The upgrade Safe and the 4-of-7 bridge proposer **share two owners**, and the 4-of-6 canceller shares one with the upgrade Safe, so the layers this report describes separately overlap in practice — and the bridge layer is a lockbox holding **111,251.67 weETH**. ⚠️ **Address-set overlap only:** organisational independence, custody and key co-location are unmeasured, so this is a floor on dependence rather than proven concentration. **The cap is discounted, not withdrawn** — a 4-of-6 veto still needs three owners from outside the upgrade set, and both delays are real and self-administered. ⚠️ **The delegate path is clean on all five walked legs — delegate equals owner, so no undelayed configuration route exists there.** Ten of fifteen deployments remain unmeasured and are named as such. (L2s 6.0.) |
| Issuer | 7.5 | ✅ **ether.fi removed restaking from weETH on 2026-08-06**, moving it to a separate opt-in token — an issuer deleting a yield source to shrink a risk surface its holders were carrying, which is rare enough to credit. About three years at multi-billion scale with no incident, Certora formal verification, and a mainnet admin path that runs through a 6-of-10 Safe into a 10-day timelock. ⚠️ **Capped at 7.5 because the removal is press-reported rather than proven on-chain by us**, and because the L2 deployments are administered to a weaker standard than the mainnet contracts. |
| **Overall** | **7.0** | Moderate risk, materially improved — and improved for a structural reason rather than a market one. Two things hold it here: the EigenLayer exit is press-reported rather than verified, and the bridge configuration is unaudited by us. |

## Who it's for

Holders who want ETH staking exposure in the form DeFi is built around, who value a long, enforced notice period on contract changes above almost every other governance feature, and who can size positions on mainnet rather than L2s. It suits anyone who wanted ether.fi's scale and execution but was avoiding the token specifically because of restaking — that objection is being retired.

## Who should avoid

- Anyone who needs a guaranteed same-day exit at full value. The fast exit is the secondary market, and the secondary market is exactly where a discount appears under stress.
- Anyone holding primarily on Base, Arbitrum or Optimism who has not accepted the bridge trust. That is a 6.0 position, not a 7.0 one — and on Optimism the book crosses between one and five ETH, so beyond a few thousand dollars your exit on that chain is the bridge, not the order book.
- Anyone who bought weETH *for* restaking yield. That product is now weETHs, it carries an unassessed credit chain rather than a slashing risk, and it is not covered here.
- Anyone who needs issuer-confirmed, primary-sourced facts before acting. The central claim in this report is currently secondary-sourced.

## What to watch

- **EigenPod withdrawal credentials.** The clean end of the unwind, expected by Q4 2026. Until then the EigenLayer dependency is reduced, not gone.
- **Primary confirmation from ether.fi.** A documentation rewrite or a proper post describing the 2026-08-06 change would close the largest open item in this report.
- **`getRate()` and the implementation address.** The rate is the honest read on yield. The implementation changed once this period without an event we could date — re-check both each time you re-size.
- **The Curve and Balancer pools.** Where a redemption wave would show up first, as a widening discount. Pendle is no longer one of these places — its weETH markets have matured.
- **weETHs adoption.** A large migration into weETHs is unwind flow through weETH's secondary markets before it is anything else.
- **The Ethereum exit queue.** It sets your real time-to-cash on primary redemption, and it is congestion-dependent.

---

*This report is based on ether.fi's public documentation and blog, contemporaneous reporting from The Defiant and CoinDesk, and direct on-chain reads of the weETH, eETH, RoleRegistry, timelock and Safe contracts at Ethereum block 25,743,010 on 2026-08-13. The 2026-08-06 removal of restaking from weETH is press-reported and attributed by those outlets to ether.fi's own slashing-risk documentation; we retrieved no primary ether.fi document confirming it, and our on-chain reads are consistent with but do not prove the change. Supply, rate and price figures are point-in-time reads at that block. weETHs, ether.fi's separate restaking token, is not assessed here. Corrections, primary sources, or additional disclosures welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-02 — exit ladder measured; Arbitrum Liquidity 5.5 → 4.0, Optimism 5.0 → 2.0.** Ethereum depth is a **floor of ≥5,000 ETH (~$13.5M)** at −6.9bp standing, 70 pools holding $50.29M. Base crosses between **500 and 1,000 ETH** — −6.2bp standing, but about 11bp at 500 ETH against about 1,598bp at 1,000, a cliff rather than a slope — 93 pools, $6.61M. Arbitrum crosses between **50 and 100 ETH** at −16.6bp, 66 pools, $0.58M: roughly a tenth of Base's depth at 2.7 times the standing cost. Optimism crosses between **1 and 5 ETH** at −10.7bp, 43 pools, $20.9K. Mainnet Liquidity held at 6.5. ⚠️ **All eight weETH Pendle markets had matured before this date**, so Pendle is no longer a live venue on either the depth or the exit-method leg. Ethereum depth was published as roughly 1.93M ETH-equivalent until 2026-10-02; that figure is the token's own supply, and the measured floor is ≥5,000 ETH.
- **2026-10-02 — migrated to the six-axis frame; Backing published at 8.0, Dependencies re-based 6.0 → 5.5.** ⚠️ **The asset did not get worse.** Under the previous rubric the Underlying row argued five things, and **three of them were upgrade-authority facts** — Arbitrum's beacon, the shared Base/Optimism timelock, the strength of the Ethereum leg. Contract & Admin already prices those, so the same three facts were being charged on two axes at once. Dependencies is now argued on counterparty-set content alone: ether.fi is the sole counterparty with **no substitution path**, the diversification beneath it is the wrong kind, and the EigenLayer residual is carried as **unmeasured** rather than small. **Backing appears for the first time at 8.0** — a claim on beacon-chain validator stake, `getRate()` monotonic, wrapped share **96.485%** at 2026-10-02 on unit-matched operands. **Redemption 7.0 is retained but no longer rendered as its own axis**, since the frame folds exit into Liquidity & Exit; its content remains there as that axis's evidence. Liquidity & Exit holds at 6.5, scored on the binding leg — **the market, not the gate, on all four chains**. Overall held at 7.0.
- **2026-10-02 — signer independence measured; Structural 7.0 → 6.5.** Thresholds and owner sets were read directly with `getThreshold()` and `getOwners()` rather than inferred from owner counts, at block 26,103,414. ⚠️ **The upgrade layer and the bridge layer share owners.** The 6-of-10 upgrade Safe and the 4-of-7 OFT proposer have **two owners in common** — `0xde3bf1fa3b3829342bc4356592bb7cf3baad8264` and `0x5c8c76f2e990f194462dc5f8a8c76ba16966ed42` — and the bridge layer is a lockbox holding **111,251.67 weETH**. The 4-of-6 canceller `0x055a8b2b65d0ab4e0c17a0168d032464b7e97bdf` shares **one** owner with the upgrade Safe, `0xa195d4a57c4802651f67fb56349e10a7addadd82`, while remaining address-disjoint from the OFT proposer `0x2aca71020de61bb532008049e1bd41e451ae8adc` and the Base/Optimism proposer `0x7a00657a45420044bc526b90ad667affaee0a868`. Every threshold and owner set above was re-read and the sets intersected independently. ⚠️ **Address-set overlap only** — organisational independence, shared custody and key co-location are unmeasured, so this is a floor on dependence rather than proven concentration. Half a point rather than more because a 4-of-6 veto still needs three owners outside the upgrade set and both delays remain real and self-administered. Overall held at 7.0. The OFT gate test reproduces: `setPeer` returns `0x` from the two-day timelock and reverts `OwnableUnauthorizedAccount` from the upgrade Safe and from a burn address used as a negative control.
- **2026-08-27 — bridge layer measured; Structural held at 7.0.** The **10-day timelock governs upgrades**. The Ethereum OFT adapter — a lockbox holding real weETH — is owned by a **different `TimelockController` at two days**, with a **4-of-7 Safe** as proposer. Gate-tested: `setPeer` succeeds from the two-day timelock and reverts from the 6-of-10 Safe. ⚠️ **The delay is real and self-administered so it cannot be shortened, and a separate 4-of-6 Safe holds the canceller role.** (Owner sets were inferred at this pass; they were read directly on 2026-10-02 — see above.) **The LayerZero delegate equals the owner on all five walked legs**, so no undelayed configuration path exists there. **L2 legs run a three-day timelock that also governs upgrades**, so bridge and upgrade share one authority on Base, Optimism, BSC and Scroll while remaining separate on Ethereum. Ten of fifteen deployments remain unwalked.
- **2026-08-13 — initial publication.** Reflects the 2026-08-06 removal of restaking from weETH.
