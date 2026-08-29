---
asset: "yzUSD"
slug: "yzusd"
aliases: ["yzUSD", "Yuzu USD", "Yuzu Money USD"]
chains: ["plasma"]
category: "stablecoin"
peg_mechanism: "active-strategy"
assessment_type: "light"
date: "2026-06-08"
last_verified: "2026-06-08"
last_revised: "2026-08-29"
featured: false
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=yzusd"
# HELD IN STAGING DELIBERATELY — do not promote on a freshness or
# completeness sweep. The site owner's condition (2026-08-29) is that yzUSD
# and syzUSD ship as a report+dashboard set, and the dashboard half does not
# exist yet. Promote only once a working dashboard is reachable for this
# asset; until then `production: false` is the correct state, not an oversight.
production: false
issuer: "Yuzu Money"
audited_reserves: false
market_cap_approx: 58497074
peg_mechanism_score: 4.5
backing_score: 4.5
liquidity_score: 4.0
issuer_score: 4.0
overall_score: 4.0
chain_overrides:
  monad:
    peg_mechanism_score: 3.5
    backing_score: 4.5
    liquidity_score: 2.5
    issuer_score: 3.5
    overall_score: 3.0
---

# yzUSD — Risk Report

**Significant risk · 4.0/10** (3.0/10 on Monad)

> ⚠️ **What is current and what is not.** The on-chain figures below — supply, the vault relationship, the authority split and the reserve address — were measured **2026-08-29**. The rest of the body, including the strategy description and the redemption mechanics, dates from **2026-06-08** and has not been re-read. The card shows both dates.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None on yzUSD itself — yield accrues only inside the syzUSD wrapper | Secondary DEX only for retail | KYC-gated, best-effort | ~12 months | Plasma (canonical), Monad, Ethereum |

## What this actually is

yzUSD is the base unit of Yuzu Money, a yield-bearing stablecoin protocol. **The issuer is a named legal entity — YUZU FINTECH LLC, a Virtual Asset Service Provider registered under the Kutaisi Free Industrial Zone rules in the Republic of Georgia**, named as contracting party in its own terms. ⚠️ **That is an accountability anchor rather than prudential supervision, and the operators are still unnamed:** there is no disclosed CEO or founder, and **the people running a roughly 70%-levered book day to day remain anonymous.** The seed round was $30M FDV with backers including Sam Kazemian (Frax), Michael Bentley (Euler), Wintermute and Hypernative — **backers are not operators.** **yzUSD does not itself pay yield.** It is the unit you hold; the yield accrues only when it sits inside the syzUSD wrapper. The peg is maintained by overcollateralization against an actively managed basket of curated DeFi yield strategies, with a junior tranche restricted to accredited investors and a Reserve Fund behind it.

⚠️ **The single most important thing measured on 2026-08-29 is that yzUSD is barely a circulating stablecoin at all.** Of 58,497,074 tokens on Plasma, **57,990,877 — 99.1% — sit inside one syzUSD vault.** Float outside the wrapper is roughly 506,000 tokens, under one percent.

**That changes what "supply" means for every ratio computed against it.** yzUSD is best read as a **wrapper input**, not as a dollar in circulation, and any depth or coverage figure quoted against total supply is describing a quantity that is almost entirely locked in a single contract.

⚠️ **yzUSD is a Plasma asset, not a multi-chain one.** Yuzu's own key-addresses documentation records *"Not deployed"* on every chain but Plasma; the balances that appear elsewhere — **23.77 tokens on Monad, 0.10 on Ethereum** — are stubs the issuer does not list as deployments. **What travels is the [syzUSD](/reports/syzusd/) wrapper, not this token.**

Supply grew sharply over the measurement gap:

| chain | supply | since 2026-06-08 |
|---|---|---|
| **Plasma (canonical)** | **58,497,074.10** | **+38.9%** (was ~42.1M) |
| Monad | 23.77 | unchanged — a stub |
| Ethereum | 0.10 | unchanged — a placeholder |

**The multi-chain framing is not meaningful.** Two of the three deployments hold a rounding error between them.

## The authority is split, and the weaker half holds the value

⚠️ **This is the finding that most changes how the asset reads.**

| layer | owner | delay |
|---|---|---|
| **yzUSD token** (Plasma) | `0x21304575…b7cfbc` — an OZ `TimelockController` | **2 days** (`getMinDelay()` = 172,800) |
| **syzUSD vault + ProxyAdmin** (Plasma) | `0xa2a97004…` — a **4-of-5 Safe** | none stated |
| **syzUSD bridge** (Monad) | `0x4ea00dc0…4a89ae` — a **bare EOA** | **none** |

**The syzUSD vault and its ProxyAdmin are both owned by `0xa2a97004…`, verified live as a 4-of-5 Safe — not a bare key. The bare EOA `0x4ea00dc0…` owns the bridge.** ⚠️ **So the single-key exposure is real, and its blast radius is the roughly 10.9M mirrored shares rather than the 99.1% of value sitting in the vault.**

**The two-day delay is real and worth stating plainly**, and it is not the protection a holder needs, because it guards the layer where almost none of the value sits. Whether that delay has a floor, and who can propose through it, is **not established** — two days is a setting until the proposer set and any `MINIMUM_DELAY` are read.

## The backing is located — and the composition is the problem

**The backing is published.** Accountable's feed at **`yuzu.accountable.capital`** carries a full look-through on a 15-minute verification interval. ⚠️ **Read it as a disclosure channel, not as independent verification: Accountable's founder is an investor in Yuzu.** Every backing figure on this page — the ratio, the composition, the reserve fund, the chain split — comes from that one related-party source. **It does not make the numbers wrong**, and `totalSupply` reconciles exactly against chain while the satellite conservation is wei-exact. **But an attestation from a related party is a different object from an independent one, however good the cryptography**, and nothing here is a second pair of eyes. ⚠️ **Two other Accountable hostnames fail DNS, so a check that stops at those returns nothing** — the live host is the one above.

```
backing    $62,546,859.02
supply     $58,497,074.10
CR            106.92%
```

**So the asset is overcollateralized on its own published basis.**

⚠️ **The defensible criticism is not that the backing is missing. It is what the backing consists of.**

- **About 70% sits in leveraged loop positions** — roughly **$44.5M across 12 `_Loop` strategies**.
- **Ethena exposure is 34.7% of the reserve** — roughly **five times the entire $4.05M surplus.** A move that impairs Ethena by a fifth erases the cushion.
- **4.8% of the reserve is `yzPRIME`, Yuzu's own product.** ⚠️ **The reserve is partly backed by the issuer's other liability** — and that product's own book runs a collateralization of **1.000601**, a **$4,557 surplus on $7,577,108**. It has no cushion of its own to lend.

⚠️ **A 106.92% CR computed over a book that is roughly 70% levered is not a 106.92% cushion in spot terms.** The ratio is real; what it is a ratio *of* is the thing to read.

⚠️ **And expect the live dashboard to show a different number from the one above.** The reserve moves in **steps rather than drifts** — five discrete steps in the last thirty days — so a page figure and a tile figure taken hours apart can differ by around **two percentage points against a 30-day range of under four.** **Neither is stale; they are separate moments in a series that jumps.** Read the tile for the current value and this page for the composition behind it.

**One measurement caution, and this report follows it: the composition table carries its own timestamp, roughly 26 hours staler than the headline, and sums to about $63.61M against the $62.55M headline.** ⚠️ **So the shares above are quoted as shares and no CR is re-derived from them** — mixing the two bases would produce a number neither source published.

## The reserve is thin, not empty

⚠️ **The Reserve Fund holds $503,428.89 — thin, but not empty.**

Almost all of it is **502,675.95 `aMonUSDT0` on Monad**. ⚠️ **A check for yzUSD on Plasma or ETH on Ethereum returns zero and looks like an empty reserve** — the balance sits on a different chain in a different token. Enumerating the address's transfer history finds it; guessing token contracts does not.

**Thin is the supportable criticism: $503K is 0.86% of supply.** The address is an ordinary account rather than a contract, holding a few hundred dollars of gas alongside the balance, and **it has not grown with issuance** — supply added roughly $16.4M over the same window. ⚠️ **A reserve that does not scale with what it is meant to protect is not functioning as one**, which is why `audited_reserves: false` remains correct.

## Liquidity and movement

**The token barely moves: 2 Transfer events in 80,000 blocks.** For an asset where 99% of supply is locked inside a wrapper, that is coherent rather than surprising — but it means secondary depth is thin and the retail exit path is a DEX, since primary redemption is KYC-gated and best-effort.

## Who should avoid this

- **Anyone who reads a 106.92% CR as a 6.92% cushion.** About 70% of the reserve is in levered loop positions, and Ethena exposure alone is roughly five times the surplus.
- **Anyone uncomfortable with an issuer's reserve holding the issuer's own product.** 4.8% is `yzPRIME`, which runs a $4,557 surplus on $7.58M of its own liabilities.
- **Anyone treating the two-day timelock as protection.** It governs the token, not the wrapper where the value sits.
- **Anyone reading the three-chain deployment as diversification.** Two of the three are empty.

## What to watch

- **Whether the Reserve Fund grows with issuance.** It holds $503K against $58.5M of supply — 0.86% — and that ratio is the thing to track, not the balance alone.
- **The timelock's proposer set and delay floor**, which would establish whether the two days is structural or a setting.
- **Whether the wrapper's EOA owner is ever replaced by a multisig or timelock.** Unchanged across 82 days.
- **The loop share and the Ethena concentration.** Those two, not the headline CR, are what would move this score.

---

*Revision history: 2026-08-29 — **first measurement pass since 2026-06-08; no score change.** Supply on Plasma is **58,497,074, up 38.9%** over the gap, while Monad (23.77) and Ethereum (0.10) remain a stub and a placeholder. ⚠️ **99.1% of all yzUSD sits inside a single syzUSD vault**, so this is a wrapper input rather than a circulating stablecoin, and every ratio quoted against supply describes a locked quantity. **Backing is published and verifiable at CR 106.92%** — $62,546,859.02 against $58,497,074.10 — with **about 70% of the reserve in levered loop positions, Ethena at 34.7% (roughly five times the $4.05M surplus), and 4.8% in the issuer's own yzPRIME**, whose book runs a $4,557 surplus on $7.58M. **The Reserve Fund holds $503,428.89, 0.86% of supply**, almost all `aMonUSDT0` on Monad. **Authority is split across three layers:** the yzUSD token owner is an OZ `TimelockController` with a 2-day delay, the syzUSD vault and its ProxyAdmin are a 4-of-5 Safe, and the bridge is a bare EOA with no delay. **Scores held at 4.0**, because the observations point in both directions and a re-score needs a basis the composition figures do not settle. `last_verified` stays **2026-06-08**: only the on-chain layer was re-measured, and the strategy and redemption material has not been re-read.*
