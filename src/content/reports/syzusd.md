---
asset: "syzUSD"
slug: "syzusd"
aliases: ["syzUSD", "Staked Yuzu USD", "Staked Yuzu Money", "sYuzu USD"]
chains: ["eth", "plasma", "monad"]
category: "vault-share"
assessment_type: "light"
audience: "retail"
date: "2026-06-08"
last_verified: "2026-06-08"
last_revised: "2026-08-29"
featured: false
# HELD IN STAGING DELIBERATELY — do not promote on a freshness or
# completeness sweep. The site owner's condition (2026-08-29) is that yzUSD
# and syzUSD ship as a report+dashboard set, and the dashboard half does not
# exist yet. Promote only once a working dashboard is reachable for this
# asset; until then `production: false` is the correct state, not an oversight.
production: false
issuer: "Yuzu Money"
underlying_assets: ["yzUSD"]
yield_bearing: true
volatility_score: 3.0
liquidity_score: 3.0
structural_score: 2.0
redemption_score: 2.5
overall_score: 2.5
chain_overrides:
  monad:
    volatility_score: 3.0
    liquidity_score: 3.0
    structural_score: 1.5
    redemption_score: 2.0
    overall_score: 2.0
---

# syzUSD — Risk Report

**High risk · 2.5/10** (2.0/10 on Monad)

> ⚠️ **What is current and what is not.** The vault identification, NAV, supply and authority findings below were measured **2026-08-29**. The rest of the body dates from **2026-06-08** and has not been re-read. The card shows both dates.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| Accrues in NAV — 1.078123 per share, measured 2026-08-29 | Secondary only for retail | KYC-gated, best-effort, via [yzUSD](/reports/yzusd/) | ~12 months | Plasma (canonical vault), Monad (OFT mirror) |

## The vault exists, and this coverage did not have it

⚠️ **The most important correction in this pass is that syzUSD's canonical vault was located, and earlier coverage had been querying a mirror.**

```
syzUSD vault (Plasma)   0xC8A8DF9B210243c55D31c73090F06787aD0A1Bf6   793 bytes, ERC-4626
  totalAssets            57,919,341.98 yzUSD
  totalSupply            53,722,377.33 syzUSD
  NAV per share                1.078123      <- never previously recorded
  holds                  57,990,876.97 yzUSD = 99.1% of ALL yzUSD supply
```

**Until now there was no readable NAV for this asset, and the reason was a wrong target.** Earlier work queried the **Monad proxy** `0x484be054…`, where `asset()` and `convertToAssets()` both revert — and read those reverts as evidence that syzUSD was not a vault at all.

⚠️ **They are not. The Monad deployment is an OFT mirror, and a mirror is expected to have no `asset()`.** Its `token()` returns its own address, which is the signature of an OFT rather than an OFTAdapter: **mint-and-burn on each chain, not lock-and-mirror against a home lockbox.** The reverts were a correct reading of the wrong contract.

**So the structure is: a real ERC-4626 vault on Plasma holding yzUSD, with 10,210,297 shares — 19.0% of the total — bridged out to Monad as a mirrored OFT.**

## The risk at this layer is pass-through, not leverage

⚠️ **The vault is not looping.** `totalAssets` is the yzUSD it directly holds, and it holds it one-for-one rather than borrowing against it.

**That matters for where the risk actually lives.** A syzUSD share is a claim on yzUSD, and **whatever risk attaches to yzUSD's own backing passes straight through** — it is not amplified here. **The leverage concern, if there is one, belongs one layer down**, in what backs yzUSD itself, and that is [covered separately](/reports/yzusd/).

⚠️ **And it is the layer that cannot be verified.** yzUSD's own collateral could not be located on-chain: the proof-of-reserve endpoints do not resolve, the reserve address holds zero yzUSD, and mint tracing is capped by the public RPC. **So the vault's assets are readable and what stands behind them is not.** A NAV of 1.078123 is a real measurement of a claim whose ultimate backing is unlocated.

## The upgrade path is a single key, and it is the one that matters

The syzUSD proxy owner is `0x4ea00dc0…4a89ae` — **a bare EOA, no code, no delay** — and the same address is both implementation owner and ProxyAdmin owner. **One private key can point the proxy at arbitrary logic.** Re-verified 2026-08-29; **unchanged across 82 days.**

⚠️ **Read that against the layer beneath it, because the asymmetry is the finding.** yzUSD's token owner is an OZ `TimelockController` with a **two-day delay**. **The stablecoin is timelocked; the wrapper holding 99% of the value is not.** An attacker takes the wrapper.

**This is why the Structural axis sits at 2.0**, and why the Monad override is lower still: the mirrored deployment adds a bridge surface on top of the same single key.

## Bridge topology

The Monad deployment has **not** migrated to CCIP — `getCCIPAdmin()` reverts, which a CCIP-enabled token implements. **The LayerZero OFT surface is the live one.** Because it is an OFT rather than an adapter, **there is no lockbox whose balance bounds the mirrored supply**: whoever controls the peer set can mint on any chain where a peer is configured.

⚠️ **The peer set itself is not established, and this report will not imply it is.** A scan returned zero peers for four endpoint IDs (30101 / 30110 / 30184, plus a guess), **but Plasma's LayerZero eid was not among them because it is not known to us.** *"No peers on four eids we chose"* is not *"the peer set is empty"* — establishing it needs the eid list, which is the next measurement.

## Who should avoid this

- **Anyone who needs to verify the backing chain end to end.** The vault is readable; what stands behind its assets is not.
- **Anyone relying on the two-day timelock they may have read about.** It governs yzUSD, not this wrapper.
- **Holders on Monad specifically.** The mirror adds bridge risk with no lockbox bounding supply, on top of the same single upgrade key.

## What to watch

- **Whether the proxy owner is ever replaced by a multisig or timelock.** Unchanged for 82 days and the single highest-leverage improvement available.
- **NAV continuity across the bridge** — whether Monad-held shares track the Plasma vault's 1.078123.
- **The real peer set**, once Plasma's eid is known.
- **Anything that locates yzUSD's collateral**, since this vault's value is a claim on it.

---

*Revision history: 2026-08-29 — **first measurement pass since 2026-06-08; no score change.** ⚠️ **The canonical vault was located and this coverage did not have it:** an ERC-4626 at `0xC8A8DF9B…` on Plasma, `totalAssets` 57,919,342 against `totalSupply` 53,722,377, giving a **NAV of 1.078123 — never previously recorded.** ⚠️ **Earlier work read `asset()` and `convertToAssets()` reverting on the Monad proxy as evidence syzUSD was not a vault. It was querying the OFT mirror**, where those reverts are expected; `token()` returning its own address confirms an OFT rather than an OFTAdapter, so **there is no lockbox bounding mirrored supply.** **The vault is not looping** — `totalAssets` is yzUSD held directly, so risk at this layer is pass-through and the leverage question belongs one layer down. ⚠️ **Authority is split and the weak half holds the value:** this wrapper's proxy owner is a bare EOA with no delay and is both implementation owner and ProxyAdmin owner, while yzUSD's token owner is a 2-day `TimelockController` — **the timelocked layer is not the one where 99% of the value sits.** The peer set is recorded as **not established**: zero peers returned for four eids we chose, which is not evidence of an empty set, since Plasma's eid is unknown to us. **Scores held**, because the backing basis one layer down remains unreadable and a re-score needs it. `last_verified` stays **2026-06-08**: only the on-chain layer was re-measured.*
