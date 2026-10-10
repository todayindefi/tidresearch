---
asset: "wstETH"
slug: "wsteth"
aliases: ["wstETH", "Wrapped stETH", "Lido wstETH", "Wrapped liquid staked Ether 2.0"]
chains: ["eth", "monad"]
category: "wrapped-token"
underlying_assets: ["ETH"]
assessment_type: "full"
date: "2026-10-03"
last_verified: "2026-10-03"
last_revised: "2026-10-10"
featured: false
production: false
issuer: "Lido DAO"
yield_bearing: true
# ⚠️ PARKED: Monad's measured DEX ladder describes a path nobody uses — wstETH is
# bridged in, not traded in locally — so it is published explicitly NOT as an exit
# cost. The real exit is the CCIP bucket (2,000 wstETH, 0.02315/s). Liquidity 9.0 and
# Redemption 8.5 still carry no Monad-specific derivation [owner: riskAnalyst] [since: 2026-10-03]
# PARKED: promotion to production — a reader sizing a Monad position now has the
# bridge capacity, which was the gap. Remaining question is whether axis 3 should
# carry a Monad-specific number at all given the local book is not the exit
# [owner: owner] [since: 2026-10-03]
axis_frame: six
volatility_score: 9.0
backing_score: 9.0
liquidity_score: 9.0
underlying_score: 6.0
structural_score: 8.0
issuer_score: 7.0
# redemption_score is RETAINED as a legacy supplemental field — it renders nowhere
# under the frame (SIX_AXES has no Redemption row) but is read by riskAnalyst's
# publish_feed / portfolio_risk. Its content is folded into Liquidity & Exit.
redemption_score: 8.5
overall_score: 8.0
# ⚠️ Ethereum values above. Monad differs on FOUR axes, and that is the report's
# subject rather than a footnote. These render NOWHERE in this repo, so every
# per-chain number is also carried in §prose — do not rely on this block to
# reach a reader.
# ⚠️ Liquidity and Redemption are DELIBERATELY ABSENT from the monad override.
# Their ethereum values were inherited, never measured on monad: no DexTracker
# enumeration and no PegTracker ladder exists. Publishing 9.0/8.5 there would
# state an assumption as a measurement. Both are commissioned and unreturned.
chain_overrides:
  monad:
    backing_score: 6.5
    underlying_score: 4.0
    structural_score: 6.5
    issuer_score: 6.0
    overall_score: 7.0
---

# wstETH — Risk Report

**Low risk · 8.0/10 on Ethereum · 7.0/10 on Monad**

> ⚠️ **Read this first: on Monad, the issuer is not Lido.** The same ticker on the two chains is not the same arrangement. Every privileged path on Monad's wstETH — the proxy admin, `owner()`, `defaultAdmin()`, `getCCIPAdmin()` and the sole minter's owner — terminates at a single Chainlink `RBACTimelock`, which also owns CCIP's Router on that chain and predates the wstETH token there by about 19 million blocks. It is **Chainlink's chain-wide CCIP administrator, not a wstETH governance contract**, and **Lido DAO holds no on-chain authority over it.** If you hold wstETH on Monad believing you hold Lido's token under Lido's governance, the ticker has misled you.

| Backing | What it earns | Exit methods | Age | Chains |
|---|---|---|---|---|
| stETH, which is ETH staked on the beacon chain by Lido's validator set (1.2454018786985979 stETH per wstETH, read 2026-10-03) | Ethereum consensus rewards, accrued into the exchange rate | Unwrap to stETH and withdraw through Lido's queue, or sell on the secondary market | Live since 2021 | Ethereum (canonical) and Monad (bridged) |

## Summary

wstETH is Lido's wrapped, non-rebasing form of **[stETH](/reports/steth/)**. Deposit ETH with Lido and it is staked across Lido's validator set; stETH is the receipt, and its *balance* grows as rewards accrue. wstETH is the same claim expressed the other way round: the **quantity stays fixed and the value rises**, which is the form lending markets, AMMs and most DeFi integrations can actually handle. The companion stETH report is the canonical page for pooled-ETH composition, the direct withdrawal queue and the measured operator distribution; this page covers what wrapping and bridging add.

If the category is new to you: a **liquid staking token** is a receipt for ETH that somebody else is running validators with. You keep a tradeable token, they run the infrastructure, and you earn Ethereum's consensus yield minus a fee. There is no peg to defend — wstETH is *supposed* to trade at a rising multiple of ETH, and on 2026-10-03 that multiple read **1.2454018786985979 stETH per wstETH** against a total supply of **3,668,624.12 wstETH**, both read directly from the mainnet contract. So the questions worth asking are whether the stake is really there, whether you can get out, and **who can change the contracts** — which is where the two chains stop being the same asset.

⚠️ **This report scores Ethereum at 8.0 and Monad at 7.0, and the gap is not a rounding of the same analysis.** Four of the six axes differ by chain. The Monad deployment has a different administrator, a backing claim it does not ring-fence, and two axes that **have never been measured there at all**.

## 1 · Stability — 9.0

Both chains: **9.0**.

wstETH has no peg. It is value-accruing against ETH through an exchange rate readable on-chain as `stEthPerToken()`, so the correct expectation is a rising multiple rather than parity with anything. The rate is **monotonic** in normal operation — it accrues and does not step down — and the mechanism is the longest-running of its kind, live since 2021.

The risk this axis prices is **secondary-market detachment**, not the rate. A large redemption wave can open a discount between the market price and the underlying value while the primary exit runs at the speed of Ethereum's validator exit queue. That mechanism is inherent to the category and is not removed by scale.

## 2 · Backing — 9.0

**Ethereum: 9.0.** Each wstETH is a claim on [stETH](/reports/steth/), which is a claim on ETH staked by Lido's validator set. There is no off-chain custodian in the backing path and nothing to attest to — the collateral is validator stake, and the claim on it is expressed as a rate rather than a balance. The underlying report carries the direct composition read: 99.904% beacon balance at block 26,155,953, with a 0.0710% residual named but not assigned a cause.

⚠️ **Monad: 6.5, and the reason is that a verifiable reserve is not the same as a reserve that is yours.** Both figures below carry their own read date, and the movement between them is the point:

| | 2026-08-22 | 2026-10-03 |
|---|---:|---:|
| mainnet lock pool | 32,358 wstETH | **21,353.231** |
| Monad's share of the shared unsiloed claim | 97.7% | **99.45%** |

⚠️ **The pool shrank about 34% while Monad's share of it rose**, so the gap between "shared in principle" and "shared in practice" narrowed rather than widened — the opposite of what a reader would guess from either figure alone.

✅ **The reconciliation is exact, not a bound.** Unsiloed balance **21,305.268** against a shared mint total of **21,305.145** at 2026-10-03, a residual of **0.1227 wstETH**. The collateral is there and it is countable.

⚠️ **But Monad's leg is not siloed** — `isSiloed` reads **false** — so it draws on that shared claim rather than on a reserve of its own. The other legs on it are **megaeth at 117.126 wstETH** and four chains holding dust (abstract, ink, plasma, jovay). Three of the nine deployments *are* siloed: bitlayer, 0g and robinhood.

⚠️ **What that means for a holder.** The reserve can be verified and is still **not ring-fenced to your chain**. Monad's claim and five other chains' claims sit against one pool, and Monad's share of it is almost the whole thing. Being able to see the collateral and having an exclusive claim on it are different properties, and only the first is established here.

## 3 · Liquidity & Exit — 9.0

This axis covers **both** exit paths — secondary venue depth and primary redemption — and is scored on whichever binds.

**Ethereum: 9.0.** wstETH is the deepest liquid-staking token by secondary depth and the default collateral across major lending markets, and the primary route is Lido's own withdrawal queue: unwrap wstETH to stETH, request withdrawal, wait for a validator to exit. That wait is congestion-dependent and outside Lido's control, which is what keeps the primary leg from scoring higher.

⚠️⚠️ **Monad has a local DEX ladder now, and it is not the exit.** Measured 2026-10-03, local depth is about **$1,000** at the 2% crossing, bracketed between $1,000 and $10,000, and the cost curve collapses from −69 bps at $1,000 to **−9,984 bps at $500,000** — half a million dollars in returns roughly eight hundred out.

⚠️ **Published as a figure a reader must not use as an exit cost.** wstETH has never had local Monad liquidity: holders bridge it in from elsewhere, so a venue ladder there measures **a path essentially nobody takes.** Quoting it as the cost of leaving would describe a route that is not how anyone arrives or departs.

✅ **The real Monad exit is the CCIP bridge, and it has a measured capacity.** Binding outbound capacity is **2,000 wstETH**, refilling at **0.02315 per second**. That was negative-controlled — an invalid chain selector returns a disabled, all-zero bucket at both ends — with every selector confirmed present in the deployed bytecode.

⚠️ **So size a Monad position against the bridge bucket, not against the order book.** Beyond 2,000 wstETH in flight you are waiting on a refill, and the local market cannot absorb the difference.

### Redemption — 8.5 (retained, folded into Liquidity & Exit)

Primary redemption is **permissionless and ungated**: no KYC, no allowlist, no minimum. Unwrap to stETH, join Lido's withdrawal queue, and the binding wait is Ethereum's validator exit queue, which is congestion-dependent. ⚠️ **From Monad you must bridge to Ethereum before you can redeem at all**, and that leg is likewise unmeasured.

## 4 · Dependencies — 6.0

This axis prices **the counterparty set** — who the asset relies on to exist and stay redeemable — not the quality of what sits underneath.

**Ethereum: 6.0.** The counterparty is Lido: its validator set, its node-operator curation, and the DAO that governs both. The diversification beneath it is real — many node operators, and the beacon chain under them — but ⚠️ **the asset is diversified while the counterparty is not.** A holder cannot change issuer while continuing to hold the claim.

⚠️ **Monad: 4.0**, because the Monad deployment adds a second counterparty that the Ethereum one does not have: **the bridge and its administrator**, discussed below. The claim passes through Chainlink's CCIP infrastructure and a Chainlink-controlled admin before it reaches anything Lido operates.

### An operator was compromised, and the design absorbed it

On **2026-09-30** Lido disclosed that **MetaMask Staking** suffered an infrastructure compromise and is precautionarily exiting its entire Lido validator set, with final exits by **2026-10-07**.

⚠️⚠️ **Three figures are in circulation and only one of them is stETH's. The headline overstates the exposure by roughly 2.3×.** MetaMask Staking's whole business is 33,000+ validators and about 1M ETH. Its whole exit is about **17,000 validators and ~523,000 ETH — roughly $1.4 billion**, and that is the number most coverage carries. ✅ **But only about 7,204 validators and ~230,000 ETH sit in Lido's registry — around 2.3–2.5% of Lido's ~9.79M stETH.** If you take one thing from this, take the distinction.

✅ **No principal was reachable, and the reason is structural.** Staking here is non-custodial: withdrawal credentials point at the protocol, not at the operator. The cost is foregone rewards plus possible downtime penalties on about 2.4% of the stake. **No slashing is alleged**, and Lido's own statement is that **no action is required from stETH holders**. The stake re-enters over roughly 45 days through the extended entry queue. ⚠️ **An earlier version also claimed Lido held an ad hoc reserve of more than 6,750 stETH for disruptions of this kind. That figure is withdrawn as unverified.** The Locator-resolved DAO treasury held 22,735.5123 stETH at block 26,155,953, which does not establish a separately designated 6,750-stETH reserve; the nearby 0.0710% backing residual is likewise not evidence of one.

⚠️ **This reads as the Dependencies thesis confirmed rather than threatened.** The axis sits where it does because operator entry is permissionless and the set is replaceable from below — **an operator lost and absorbed with no holder action required is that design working**, not a warning about it.

## 5 · Contract & Admin — 8.0

**Ethereum: 8.0.** The mainnet wstETH contract is a long-lived, heavily integrated wrapper around stETH, live since 2021 with no exploit, under Lido DAO governance. Lido's delayed governance path, holder veto signalling and rage-quit protection are shared with stETH and materially stronger than a bare multisig or ordinary timelock. The score remains 8.0 on both public pages because the system is DAO-upgradeable, systemically concentrated and still completing its Curated Module v2 migration; any future re-rating should move both Ethereum claims together.

⚠️⚠️ **Monad: 6.5, and this is the finding that should change how a holder reads the ticker.** Five separate authority layers were walked on Monad, and **they all terminate at the same place**:

| layer | where it terminates |
|---|---|
| proxy admin | the Chainlink `RBACTimelock` |
| `owner()` | the same `RBACTimelock` |
| `defaultAdmin()` | the same `RBACTimelock` |
| `getCCIPAdmin()` | the same `RBACTimelock` |
| the sole minter's `owner()` | the same `RBACTimelock` |

⚠️ **That contract is not a wstETH governance contract.** It **also owns CCIP's Router on Monad**, and it **predates the wstETH token there by roughly 19 million blocks** — it is Chainlink's chain-wide CCIP administrator, which wstETH was deployed underneath rather than a thing created to govern wstETH.

⚠️ **So on Monad, Lido DAO holds no on-chain authority over the token bearing its name.** A governance vote in the Lido DAO cannot change the Monad deployment. The party that can is Chainlink, through infrastructure it operates for every CCIP asset on that chain.

✅ **Stated fairly: this is not evidence of anything going wrong.** A chain-wide CCIP admin is an ordinary arrangement for a CCIP-bridged token, and nothing here says the authority has been misused. **The finding is about who it is, not about what they have done** — and a holder who believed Lido governed this token was wrong about the counterparty before any question of conduct arises.

## 6 · Issuer — 7.0

**Ethereum: 7.0.** Lido is the longest-running liquid-staking protocol, DAO-governed, operating at multi-billion scale since 2021 without an exploit of the staking or wrapper contracts.

⚠️ **Monad: 6.0**, and the reason follows directly from the axis above: **the entity a Monad holder is actually exposed to is not only Lido.** The issuer axis scores who stands behind the asset, and on Monad that set includes the operator of the CCIP administrator that holds every privileged path.

## Who it's for

Holders who want ETH staking exposure in the form DeFi is built around, and who size the position **on Ethereum**. On mainnet this is the category's reference asset: deepest secondary market, default collateral status, a permissionless primary exit, and the longest clean operating record.

## Who should avoid

- ⚠️ **Anyone holding on Monad who believes Lido governs their token.** It does not. Every privileged path there runs to a Chainlink CCIP administrator, and a Lido DAO vote cannot reach it.
- Anyone who needs a guaranteed same-day exit at full value. The primary route runs at the speed of Ethereum's validator exit queue, and the fast route is the secondary market, where a redemption wave opens a discount.
- ⚠️ **Anyone sizing a Monad position off wstETH's reputation for depth.** That reputation is an Ethereum fact. Monad's secondary depth has never been measured.
- Anyone who needs a reserve ring-fenced to their own chain. Monad's claim shares an unsiloed pool and is **99.45%** of it.

## What to watch

- **The Monad venue enumeration and depth ladder**, both commissioned 2026-10-03 and unreturned. They are what would turn two inherited numbers into measured ones.
- **The `RBACTimelock` on Monad** — whether its role set changes, and whether Lido ever acquires on-chain authority over the deployment.
- **`isSiloed` on Monad's leg, and Monad's share of the unsiloed pool.** At **99.45%** there is almost no room left between "shared in principle" and "shared in practice", and the share rose as the pool shrank.
- **The CCIP outbound bucket — 2,000 wstETH and a 0.02315/s refill.** It is the real constraint on leaving Monad, and it is a capacity rather than a price.
- ⚠️ **The rate of node-operator incident disclosures, not any single one.** Three appeared on Lido's forum in two months: the MetaMask compromise (2026-09-30), a Stakefish connectivity-loss post-mortem (09-20) and a Gateway.fm network incident (09-21). ⚠️ **Treat that as something to watch and not as a trend** — two are voluntary retrospectives on months-old events, and **a rise in disclosures is not a rise in incidents.** Reading it the other way charges Lido for its own transparency.
- **`stEthPerToken()`.** It is the honest read on accrual, and it should only ever rise.
- **Ethereum's validator exit queue**, which sets the real time-to-cash on the primary route.

## Related

- [stETH](/reports/steth/) — the rebasing underlying, including pooled-ETH composition, direct withdrawal-queue state and Curated Module operator distribution

---

*This report is based on direct reads of the mainnet wstETH contract on 2026-10-03 (`symbol()`, `stEthPerToken()`, `totalSupply()`), and on a 2026-10-03 authority walk of the Monad deployment and a reconciliation of the mainnet lock pool behind it. ⚠️ Liquidity and Redemption on Monad are **not measured** and are published as such rather than inherited from Ethereum. Corrections, primary sources, or additional disclosures welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-10 — canonical stETH companion linked; shared Ethereum scores held.** The new [stETH report](/reports/steth/) now carries the underlying pooled-ETH composition, direct queue state and operator-distribution evidence. Ethereum wstETH remains 9.0 / 9.0 / 9.0 / 6.0 / 8.0 / 7.0, Overall 8.0. ⚠️ The previously repeated claim that Lido held an ad hoc reserve of more than 6,750 stETH is withdrawn as unverified: the DAO treasury held 22,735.5123 stETH, and neither that balance nor the underlying report's 0.0710% reconciliation residual establishes a separately designated reserve.
- **2026-10-04 — backing re-read, Monad exit reframed, an operator compromise absorbed. No score moves.** ⚠️ **The mainnet lock pool fell about 34%, 32,358 → 21,353.231 wstETH**, while **Monad's share of the shared unsiloed claim rose 97.7% → 99.45%** — the pool shrank and the concentration tightened. ✅ **Backing 9.0 is confirmed by an exact reconciliation**, not a bound: unsiloed balance 21,305.268 against a shared mint total of 21,305.145, residual 0.1227 wstETH. The other legs on that claim are megaeth at 117.126 wstETH and four dust chains; three of nine deployments are siloed. ⚠️ **Monad now has a measured local DEX ladder and it is published as NOT the exit** — about $1,000 at the 2% crossing, collapsing to −9,984 bps at $500,000. wstETH has never had local Monad liquidity; holders bridge in, so that ladder measures a path essentially nobody takes. ✅ **The real constraint is the CCIP outbound bucket: 2,000 wstETH, refilling 0.02315/s**, negative-controlled against an invalid chain selector at both ends. ⚠️ **An operator compromise was disclosed 2026-09-30** — MetaMask Staking exiting its Lido set by 2026-10-07. ⚠️ **The widely-quoted ~$1.4B is its whole business exit, not its Lido exposure: about 7,204 validators and ~230,000 ETH are in Lido's registry, roughly 2.3–2.5% of stETH.** ✅ **Non-custodial staking meant no principal was reachable** and Lido states no holder action is required. Dependencies holds at 6.0 — an operator absorbed without holder action is the thesis working.
- **2026-10-03 — first publication, staged.** Six axes authored across two chains. ⚠️ **Four of the six differ by chain:** Backing 9.0 / 6.5, Dependencies 6.0 / 4.0, Contract & Admin 8.0 / 6.5, Issuer 7.0 / 6.0, giving Overall **8.0 on Ethereum and 7.0 on Monad**. The driving finding is that **every privileged path on Monad terminates at a Chainlink `RBACTimelock`** that also owns CCIP's Router there and predates the token by about 19 million blocks, so **Lido DAO holds no on-chain authority over the Monad deployment**. Backing on Monad is verifiable but **not ring-fenced**: the mainnet lock pool holds **32,358.118 wstETH**, Monad's leg reads `isSiloed = false`, and its mint is **97.7%** of a **32,320 wstETH** portion shared with five other chains. ⚠️ **Liquidity and Redemption are published as UNMEASURED on Monad** rather than carried over from Ethereum — no venue enumeration and no depth ladder exists for that chain; both were commissioned on this date and neither has returned.
