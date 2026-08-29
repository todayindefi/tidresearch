---
asset: "yzUSD"
slug: "yzusd"
aliases: ["yzUSD", "Yuzu USD", "Yuzu Money USD"]
chains: ["eth", "plasma", "monad"]
category: "stablecoin"
peg_mechanism: "active-strategy"
assessment_type: "light"
audience: "retail"
date: "2026-06-08"
last_verified: "2026-06-08"
last_revised: "2026-08-29"
featured: false
production: false
issuer: "Yuzu Money"
audited_reserves: false
market_cap_approx: 58497074
peg_mechanism_score: 4.5
backing_score: 4.5
liquidity_score: 4.0
issuer_score: 3.0
overall_score: 4.0
chain_overrides:
  monad:
    peg_mechanism_score: 3.5
    backing_score: 4.5
    liquidity_score: 2.5
    issuer_score: 2.5
    overall_score: 3.0
---

# yzUSD — Risk Report

**Significant risk · 4.0/10** (3.0/10 on Monad)

> ⚠️ **What is current and what is not.** The on-chain figures below — supply, the vault relationship, the authority split and the reserve address — were measured **2026-08-29**. The rest of the body, including the strategy description and the redemption mechanics, dates from **2026-06-08** and has not been re-read. The card shows both dates.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None on yzUSD itself — yield accrues only inside the syzUSD wrapper | Secondary DEX only for retail | KYC-gated, best-effort | ~12 months | Plasma (canonical), Monad, Ethereum |

## What this actually is

yzUSD is the base unit of Yuzu Money, a yield-bearing stablecoin protocol run by an anonymous team. **yzUSD does not itself pay yield.** It is the unit you hold; the yield accrues only when it sits inside the syzUSD wrapper. The peg is maintained by overcollateralization against an actively managed basket of curated DeFi yield strategies, with a junior tranche restricted to accredited investors and a Reserve Fund behind it.

⚠️ **The single most important thing measured on 2026-08-29 is that yzUSD is barely a circulating stablecoin at all.** Of 58,497,074 tokens on Plasma, **57,990,877 — 99.1% — sit inside one syzUSD vault.** Float outside the wrapper is roughly 506,000 tokens, under one percent.

**That changes what "supply" means for every ratio computed against it.** yzUSD is best read as a **wrapper input**, not as a dollar in circulation, and any depth or coverage figure quoted against total supply is describing a quantity that is almost entirely locked in a single contract.

Supply grew sharply over the measurement gap:

| chain | supply | since 2026-06-08 |
|---|---|---|
| **Plasma (canonical)** | **58,497,074.10** | **+38.9%** (was ~42.1M) |
| Monad | 23.77 | unchanged — a stub |
| Ethereum | 0.10 | unchanged — a placeholder |

**The multi-chain framing is not meaningful.** Two of the three deployments hold a rounding error between them.

## The authority is split, and the weaker half holds the value

⚠️ **This is the finding that most changes how the asset reads, and an earlier version of this coverage recorded only half of it.**

| layer | owner | delay |
|---|---|---|
| **yzUSD token** (Plasma) | `0x21304575…b7cfbc` — an OZ `TimelockController` | **2 days** (`getMinDelay()` = 172,800) |
| **syzUSD wrapper** (Monad proxy) | `0x4ea00dc0…4a89ae` — a **bare EOA** | **none** |

**So the stablecoin sits behind a two-day timelock while the wrapper holding 99% of the value has an upgrade path controlled by a single key with no delay.** ⚠️ **An attacker does not need the timelocked layer.** The same EOA is both implementation owner and ProxyAdmin owner, so one private key can point the proxy at arbitrary logic — re-verified 2026-08-29, not carried forward.

**The two-day delay is real and worth stating plainly**, and it is not the protection a holder needs, because it guards the layer where almost none of the value sits. Whether that delay has a floor, and who can propose through it, is **not established** — two days is a setting until the proposer set and any `MINIMUM_DELAY` are read.

## The reserve does not grow with issuance

The Reserve Fund address cited by the protocol, `0xdaef005a…684f68`, was recorded in June as holding nothing. Re-measured 2026-08-29:

```
plasma     code 0 bytes (EOA)   native XPL 262.32   yzUSD balance 0.00
ethereum   code 0 bytes (EOA)   native ETH 0.0176
```

⚠️ **It holds zero yzUSD, against a supply that grew by roughly $16.4M over the same window.** It is an ordinary account, not a contract, and it has gone from holding nothing to holding a few hundred dollars of gas.

**A reserve that does not grow with issuance is not functioning as a reserve.** `audited_reserves: false` remains correct.

## What backs it is unlocated — which is not the same as absent

⚠️ **This report states the limit rather than the conclusion, because the conclusion is not supported.**

The collateral behind yzUSD **could not be located on-chain**. Accountable's proof-of-reserve endpoints do not resolve for Yuzu (`api.accountable.capital` and `api.accountable.yuzu.money` both fail DNS; `app.yuzu.money/api/transparency` returns 404). The addresses the protocol names hold nothing on Plasma. Mint tracing is blocked because `eth_getLogs` on the public Plasma RPC caps at 10,000 blocks, and no mints appear in the most recent 2,000.

**"We could not locate the collateral" is the accurate statement. "There is no collateral" is not, and this report does not make it.** The distinction matters: the first is a coverage gap on our side, the second would be a solvency claim, and only one of them is measured.

**Scores are unchanged on this pass, deliberately.** The supply growth and the empty reserve both point the same way, but **a re-score needs the backing basis, and the backing basis is exactly what is not readable.** Recording a measurement without moving a number is the honest outcome when the measurement does not reach the axis.

## Liquidity and movement

**The token barely moves: 2 Transfer events in 80,000 blocks.** For an asset where 99% of supply is locked inside a wrapper, that is coherent rather than surprising — but it means secondary depth is thin and the retail exit path is a DEX, since primary redemption is KYC-gated and best-effort.

## Who should avoid this

- **Anyone who needs to verify what backs their position.** The backing is not locatable from chain today, and no working proof-of-reserve endpoint exists.
- **Anyone treating the two-day timelock as protection.** It governs the token, not the wrapper where the value sits.
- **Anyone reading the three-chain deployment as diversification.** Two of the three are empty.

## What to watch

- **Whether the Reserve Fund address ever holds yzUSD.** It is the cheapest single check on this asset, and it has failed twice.
- **The timelock's proposer set and delay floor**, which would establish whether the two days is structural or a setting.
- **Whether the wrapper's EOA owner is ever replaced by a multisig or timelock.** Unchanged across 82 days.
- **Mint destinations**, once a paged log walk in 10k-block windows becomes practical — that is the route to locating the collateral.

---

*Revision history: 2026-08-29 — **first measurement pass since 2026-06-08; no score change.** Supply on Plasma is **58,497,074, up 38.9%**, while Monad (23.77) and Ethereum (0.10) remain a stub and a placeholder. ⚠️ **99.1% of all yzUSD sits inside a single syzUSD vault**, so this is a wrapper input rather than a circulating stablecoin, and every ratio quoted against supply describes a locked quantity. ⚠️ **The authority is split and this coverage previously recorded only the weak half:** the yzUSD token owner is an OZ `TimelockController` with a 2-day delay, while the syzUSD wrapper's owner is a bare EOA with none — **the timelock guards the layer where almost none of the value sits.** ⚠️ **The Reserve Fund address holds zero yzUSD against $16.4M of new issuance** and is an ordinary account holding gas dust. **Backing is recorded as unlocated, not as absent** — the PoR endpoints do not resolve, the named addresses hold nothing, and log-based mint tracing is capped by the public RPC. That distinction is deliberate: one is a gap in our coverage, the other would be a solvency claim, and only the first is measured. **Scores held**, because the observations point one way and a re-score needs the backing basis that is precisely what cannot be read. `last_verified` stays **2026-06-08**: only the on-chain layer was re-measured, and the strategy and redemption material has not been re-read.*
