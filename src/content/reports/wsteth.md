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
featured: false
production: false
issuer: "Lido DAO"
yield_bearing: true
# PARKED: Monad Liquidity and Redemption are UNMEASURED — no venue enumeration and no depth ladder exists for that chain. Both commissioned 2026-10-03, neither returned. Do not inherit the Ethereum values [owner: riskAnalyst] [since: 2026-10-03]
# PARKED: promotion to production is gated on those two measurements landing — a reader sizing a Monad position needs a measured exit, not an absent one [owner: owner] [since: 2026-10-03]
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

wstETH is Lido's wrapped, non-rebasing form of **stETH**. Deposit ETH with Lido and it is staked across Lido's validator set; stETH is the receipt, and its *balance* grows as rewards accrue. wstETH is the same claim expressed the other way round: the **quantity stays fixed and the value rises**, which is the form lending markets, AMMs and most DeFi integrations can actually handle.

If the category is new to you: a **liquid staking token** is a receipt for ETH that somebody else is running validators with. You keep a tradeable token, they run the infrastructure, and you earn Ethereum's consensus yield minus a fee. There is no peg to defend — wstETH is *supposed* to trade at a rising multiple of ETH, and on 2026-10-03 that multiple read **1.2454018786985979 stETH per wstETH** against a total supply of **3,668,624.12 wstETH**, both read directly from the mainnet contract. So the questions worth asking are whether the stake is really there, whether you can get out, and **who can change the contracts** — which is where the two chains stop being the same asset.

⚠️ **This report scores Ethereum at 8.0 and Monad at 7.0, and the gap is not a rounding of the same analysis.** Four of the six axes differ by chain. The Monad deployment has a different administrator, a backing claim it does not ring-fence, and two axes that **have never been measured there at all**.

## 1 · Stability — 9.0

Both chains: **9.0**.

wstETH has no peg. It is value-accruing against ETH through an exchange rate readable on-chain as `stEthPerToken()`, so the correct expectation is a rising multiple rather than parity with anything. The rate is **monotonic** in normal operation — it accrues and does not step down — and the mechanism is the longest-running of its kind, live since 2021.

The risk this axis prices is **secondary-market detachment**, not the rate. A large redemption wave can open a discount between the market price and the underlying value while the primary exit runs at the speed of Ethereum's validator exit queue. That mechanism is inherent to the category and is not removed by scale.

## 2 · Backing — 9.0

**Ethereum: 9.0.** Each wstETH is a claim on stETH, which is a claim on ETH staked by Lido's validator set. There is no off-chain custodian in the backing path and nothing to attest to — the collateral is validator stake, and the claim on it is expressed as a rate rather than a balance.

⚠️ **Monad: 6.5, and the reason is that a verifiable reserve is not the same as a reserve that is yours.** The mainnet lock pool behind the bridged supply holds **32,358.118 wstETH**, read twice on separate RPC providers. That figure is real and checkable. But **Monad's leg is not siloed** — `isSiloed` reads **false** — so it draws on a **32,320 wstETH unsiloed portion shared with five other chains**, and **Monad's mint is 97.7% of that shared portion.**

⚠️ **What that means for a holder.** The reserve can be verified and is still **not ring-fenced to your chain**. Monad's claim and five other chains' claims sit against one pool, and Monad's share of it is almost the whole thing. Being able to see the collateral and having an exclusive claim on it are different properties, and only the first is established here.

## 3 · Liquidity & Exit — 9.0

This axis covers **both** exit paths — secondary venue depth and primary redemption — and is scored on whichever binds.

**Ethereum: 9.0.** wstETH is the deepest liquid-staking token by secondary depth and the default collateral across major lending markets, and the primary route is Lido's own withdrawal queue: unwrap wstETH to stETH, request withdrawal, wait for a validator to exit. That wait is congestion-dependent and outside Lido's control, which is what keeps the primary leg from scoring higher.

⚠️⚠️ **Monad: UNMEASURED, and it is published that way deliberately.** The 9.0 above is an Ethereum figure. **No venue enumeration and no depth ladder has ever been run for wstETH on Monad** — both were commissioned on 2026-10-03 and neither has returned. The usual sentence about wstETH — *deepest LST liquidity, the DeFi-standard collateral* — is **true of Ethereum and is an assumption about Monad.**

⚠️ **Do not read the absence as thin, and do not read it as deep.** It is not known. An unmeasured leg is a third state, distinct from "measured and good" and from "measured and bad", and treating it as inheriting Ethereum's number is the specific error this section exists to avoid.

### Redemption — 8.5 (retained, folded into Liquidity & Exit)

Primary redemption is **permissionless and ungated**: no KYC, no allowlist, no minimum. Unwrap to stETH, join Lido's withdrawal queue, and the binding wait is Ethereum's validator exit queue, which is congestion-dependent. ⚠️ **From Monad you must bridge to Ethereum before you can redeem at all**, and that leg is likewise unmeasured.

## 4 · Dependencies — 6.0

This axis prices **the counterparty set** — who the asset relies on to exist and stay redeemable — not the quality of what sits underneath.

**Ethereum: 6.0.** The counterparty is Lido: its validator set, its node-operator curation, and the DAO that governs both. The diversification beneath it is real — many node operators, and the beacon chain under them — but ⚠️ **the asset is diversified while the counterparty is not.** A holder cannot change issuer while continuing to hold the claim.

⚠️ **Monad: 4.0**, because the Monad deployment adds a second counterparty that the Ethereum one does not have: **the bridge and its administrator**, discussed below. The claim passes through Chainlink's CCIP infrastructure and a Chainlink-controlled admin before it reaches anything Lido operates.

## 5 · Contract & Admin — 8.0

**Ethereum: 8.0.** The mainnet wstETH contract is a long-lived, heavily integrated wrapper around stETH, live since 2021 with no exploit, under Lido DAO governance.

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
- Anyone who needs a reserve ring-fenced to their own chain. Monad's claim shares an unsiloed pool with five other chains and is 97.7% of it.

## What to watch

- **The Monad venue enumeration and depth ladder**, both commissioned 2026-10-03 and unreturned. They are what would turn two inherited numbers into measured ones.
- **The `RBACTimelock` on Monad** — whether its role set changes, and whether Lido ever acquires on-chain authority over the deployment.
- **`isSiloed` on Monad's leg, and Monad's share of the unsiloed pool.** At 97.7% there is very little room between "shared in principle" and "shared in practice".
- **`stEthPerToken()`.** It is the honest read on accrual, and it should only ever rise.
- **Ethereum's validator exit queue**, which sets the real time-to-cash on the primary route.

---

*This report is based on direct reads of the mainnet wstETH contract on 2026-10-03 (`symbol()`, `stEthPerToken()`, `totalSupply()`), and on riskAnalyst's 2026-10-03 authority walk of the Monad deployment and its backing reconciliation. ⚠️ Liquidity and Redemption on Monad are **not measured** and are published as such rather than inherited from Ethereum. Corrections, primary sources, or additional disclosures welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-03 — first publication, staged.** Six axes authored across two chains. ⚠️ **Four of the six differ by chain:** Backing 9.0 / 6.5, Dependencies 6.0 / 4.0, Contract & Admin 8.0 / 6.5, Issuer 7.0 / 6.0, giving Overall **8.0 on Ethereum and 7.0 on Monad**. The driving finding is that **every privileged path on Monad terminates at a Chainlink `RBACTimelock`** that also owns CCIP's Router there and predates the token by about 19 million blocks, so **Lido DAO holds no on-chain authority over the Monad deployment**. Backing on Monad is verifiable but **not ring-fenced**: the mainnet lock pool holds **32,358.118 wstETH**, Monad's leg reads `isSiloed = false`, and its mint is **97.7%** of a **32,320 wstETH** portion shared with five other chains. ⚠️ **Liquidity and Redemption are published as UNMEASURED on Monad** rather than carried over from Ethereum — no venue enumeration and no depth ladder exists for that chain; both were commissioned on this date and neither has returned.
