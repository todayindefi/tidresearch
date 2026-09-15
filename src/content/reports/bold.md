---
asset: "BOLD"
slug: "bold"
aliases: ["BOLD", "Liquity BOLD", "Liquity v2"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "overcollateralized CDP with permissionless redemption"
assessment_type: "full"
date: "2026-09-15"
last_verified: "2026-09-15"
peg_mechanism_score: 7.0
backing_score: 7.5
liquidity_score: 5.5
underlying_score: 7.0
structural_score: 8.5
issuer_score: 8.0
overall_score: 6.5
axis_frame: six
issuer: "Liquity (immutable protocol, no issuer counterparty)"
market_cap_approx: 34464706
production: false
---

# BOLD — Risk Report

**Moderate risk · 6.5/10**

**Category:** Stablecoin | **Peg Mechanism:** Overcollateralized CDP with permissionless redemption | **Issuer:** Liquity — an immutable protocol with no issuer counterparty

## Summary

BOLD is the stablecoin of Liquity v2. You mint it by depositing ETH, wstETH or rETH into a trove and borrowing against it; you can always get dollars back by redeeming BOLD against the system's own collateral, at any time, without asking anyone.

**What makes it unusual is what is missing.** There is no admin key. `owner()` on the token returns the zero address, both EIP-1967 proxy slots read zero, and the collateral set is closed — `getToken(3)` on the registry returns the zero address, so no fourth collateral can ever be added. Nobody can pause it, upgrade it, change a parameter, or add an asset. **Verified on-chain 2026-09-15, and reproducible by anyone in four calls.**

That property is the reason this report scores Contract & Admin at **8.5**, the highest on this site. It is also the reason the Liquidity axis sits at **5.5** and drags the composite down: an asset nobody can intervene in is an asset nobody can rescue, and the exit is thinner than the supply it has to serve.

## 1 · Stability — 7.0

**The peg is defended by arbitrage against the protocol's own collateral, not by a treasury or a market maker.** If BOLD trades below a dollar, anyone can buy it cheaply and redeem it against troves for collateral worth more — a mechanism that needs no permission and has no off switch.

✅ **The redemption route is genuinely un-gateable.** There is no KYC, no allowlist, no queue and no counterparty who can close it. On this site that is rare: most redemption paths we cover are gated to onboarded participants, and several are gated in practice by a discretionary window.

⚠️ **But the fee is size-dependent, and it rises roughly one-for-one with the share of supply being redeemed.** Measured across sizes: **0.94% at $100,000, 3.54% at $1,000,000, and 29.6% at $10,000,000.** **So redemption is always available and never cheap at scale.** The honest way to hold both facts at once: **a BOLD holder is never trapped; they are priced.**

⚠️ **All three collateral types are ETH-beta.** WETH, wstETH and rETH move together, so the branches are correlated rather than independent, and a sharp ETH drawdown stresses every branch at once rather than rotating between them.

## 2 · Backing — 7.5

**The reconciliation is the strongest single fact on this asset.** Read on-chain 2026-09-15, BOLD's `totalSupply` is **34,464,705.66** against summed branch debt of **34,465,713.32** — a divergence of **$1,008, or 0.0029%**.

| branch | debt (BOLD) | collateral (units) | shutdown |
|---|---:|---:|---|
| WETH | 11,314,751.96 | 10,493.68 WETH | none |
| wstETH | 18,972,630.47 | 16,953.87 wstETH | none |
| rETH | 4,178,330.89 | 5,769.65 rETH | none |
| **total** | **34,465,713.32** | | |

✅ **Almost nothing in this coverage reconciles to three decimal places**, and this one does so against figures the protocol publishes itself rather than against an attestation. ⚠️ **Collateral is stated in units rather than dollars on purpose:** wstETH's exchange rate against ETH rises over time, so a decline in wstETH units is not the same as a decline in value, and reporting it in dollars would mix a market price into the protocol's own accounting.

**System collateralisation is about 279.8%, on roughly $96.8M of collateral, with Stability Pool coverage near 53% of outstanding debt.** ⚠️ **That ratio is the protocol's own, computed on its own oracle inputs.** ✅ **`shutdownTime()` returns zero on all three branches** — none has been retired, verified directly.

⚠️ **The growth is concentrated where the margin is thinnest.** Supply has risen about 14.9% over 55 days, and the growth sits in the **WETH branch, which carries the lowest minimum collateral ratio at 110%.** ⚠️ **And on wstETH — the largest branch — debt rose about 6.9% while collateral fell about 19.1% in units.** **That is a leverage increase on the branch that matters most, and it is the fact to watch on this axis.**

## 3 · Liquidity & Exit — 5.5

**This is the binding constraint, and it moved the wrong way.**

⚠️ **The 2% depth crossing sits at roughly $4.3–4.4M**, and the ladder does something worth understanding rather than just noting: **output peaks near $8M and then turns over.** **Past that peak, selling more BOLD returns fewer dollars in total** — not merely a worse price per unit, but a smaller absolute payout. A seller who does not know where the peak is can cross it without any signal.

✅ **Small exits are fine.** $100,000 moves the price by roughly **0.8 basis points**. **The problem is not retail-scale selling; it is the shape of the curve above seven figures.**

⚠️⚠️ **The executable ceiling fell about 34% over 55 days while supply grew 14.9% — and aggregate DEX TVL rose over the same window.** **So every TVL-based reading of this asset moved in the opposite direction to the thing a seller actually experiences.** ⚠️ **This is why the figure to quote is the ladder, not the pool size.**

⚠️ **And published depth for BOLD is easy to overstate by roughly three times.** Convex, StakeDAO, Yearn and Beefy "BOLD-USDC" entries are **LP-token wrappers over the same underlying Curve pool** — counting them adds the same liquidity several times. Separately, the `liquity-v2` "BOLD" entries on aggregators are **Stability Pool deposits, which are not tradeable depth at all.**

**Redemption is the floor under all of this** — always open, never gated — but as set out above it is never the cheaper exit at any size the AMM can serve. ⚠️ **Figures here are a live router read and move intraday; quote the shape rather than the constants.** *(Ladder read 2026-09-15.)*

## 4 · Dependencies — 7.0

**What BOLD depends on is short, which is the point.** Three collateral assets, all ETH-beta; price feeds; and the solvency of its own troves. **There is no issuer treasury, no off-chain custodian, no attestation and no bridge in the core.**

⚠️ **The oracle is the dependency with teeth, and it is outside the authority walk.** A failed Chainlink feed does not pause a branch pending a fix — **it permanently retires that branch.** **The protocol's own immutability means a feed failure is not a recoverable incident; it is a one-way door for the collateral type behind it.**

⚠️⚠️ **And there is one place where the admin key comes back.** **sBOLD** (`0x50bd66d59911f5e086ec87ae43c811e0d059dd11`) is an ERC-4626 wrapper that routes BOLD into the Stability Pools. Verified 2026-09-15 by reading `asset()` back to BOLD: it holds **4,535,649.05 BOLD — 13.16% of all BOLD supply**, and roughly a quarter of Stability Pool deposits.

⚠️ **sBOLD is not immutable.** Its `owner()` is a **2-of-3 Gnosis Safe** (`0x2dF68EA583B8394A8Cc71EeBcd4fA7c6746027D5`, threshold 2 of 3 signers read directly), and it exposes a pause. **An eighth of BOLD sits inside a wrapper with a two-signature admin.** ✅ **Not a defect in BOLD** — sBOLD is a third-party product, separately audited, and nobody is obliged to use it — **but a reader told that BOLD has no admin key deserves this in the same breath.**

## 5 · Contract & Admin — 8.5

**The highest score on this site, and it is checkable in four calls.**

```
BOLD.owner()              0x0000…0000   renounced
EIP-1967 impl slot        0x0           not a proxy
EIP-1967 admin slot       0x0           no upgrade admin
CollateralRegistry.getToken(3)  0x0     the collateral set is permanently closed
```

**No EOA, no Safe, no timelock, no upgrade path, no pause and no parameter setter exists anywhere in the core.** Five authority layers and thirty contracts were walked; the registry's own `boldToken()` returns the token address above, so the registry being examined is demonstrably BOLD's own rather than one that merely looks like it.

⚠️⚠️ **Immutability cuts both ways, and this is the half a reader is usually not told. Nothing can be changed by an attacker — and nothing can be fixed either.** **A bug in a live branch has no patch path.** The only remediation is permanent shutdown of that branch, after which `lastGoodPrice` drives urgent redemptions at a 0% fee with a 2% collateral bonus. **That is an orderly wind-down, not a repair.**

⚠️⚠️ **And Liquity has already paid this price once.** In **February 2025**, three weeks after launch, a critical bug was found in the Stability Pool — **in base code that had cleared six audit firms plus formal verification.** **There was no patch available, because there is never a patch available.** The only remediation was abandoning the deployment and asking users to migrate to a fresh one.

⚠️ **Two things about that episode still stand.** **The root cause has never been published.** And **202,029.51 BOLD never made the migration** — it sits in the legacy token to this day, verified on-chain. ⚠️ **The standing bug bounty caps critical findings at $125,000**, which is the counter-incentive a researcher weighs against the value of what they have found.

## 6 · Issuer — 8.0

**There is no issuer counterparty, and that is a measured property rather than a claim.** No company holds reserves, no entity can freeze a balance, no treasury is standing behind the peg. The score is high because the category of risk that dominates most of this site — *what if the issuer does something* — largely does not apply.

⚠️ **The one live authority is LQTY governance**, which directs protocol incentives rather than the protocol's mechanics. It runs on **seven-day epochs with a six-day voting cutoff**, and a payout can arrive no earlier than the following epoch. **It cannot upgrade contracts, change collateral, or pause anything.**

⚠️ **Not established, and stated rather than implied: what a governance majority costs.** **LQTY voter concentration has not been measured here**, so the price of directing that allocator is unknown. **Chainlink feed governance is likewise outside the authority walk** — which matters more than usual given that a failed feed permanently retires a branch. **And cumulative redemption volume beyond roughly 82 days needs an archive node we do not have.**

## Two tokens, and the symbols differ only by case

⚠️⚠️ **This is the trap most likely to cost a reader money.**

| | address | `symbol()` | supply |
|---|---|---|---:|
| **live** | `0x6440f144b7e50D6a8439336510312d2F54beB01D` | `BOLD` | 34,464,705.66 |
| legacy | `0xb01dd87B29d187F3E3a4Bf6cdAebfb97F3D9aB98` | `Bold` | 202,029.51 |

**Any case-insensitive ticker match resolves both.** ⚠️ **Resolve BOLD by address, never by symbol.** The legacy token is the abandoned February 2025 deployment; its supply is the stranded remainder that never migrated. On CoinGecko the live asset is `liquity-bold-2`.

## Who this is for

- **Holders who want a dollar with no issuer**, and who value that enough to accept a thinner exit than a centralised stablecoin offers.
- **Anyone who wants to verify rather than trust.** The immutability, the collateral set, the branch debts and the reconciliation are all readable directly, without an attestation.

## Who this is NOT for

- **Anyone who may need to exit above seven figures quickly.** The ladder turns over near $8M and redemption at $10M costs 29.6%.
- **Anyone who wants a recoverable failure mode.** There is no patch path, by design.
- **Anyone relying on published TVL** as a measure of how much can be sold.

## What to watch

- ⚠️ **The wstETH branch's leverage** — debt rising against falling collateral units is the live adverse trend.
- ⚠️ **Where the ladder peak sits**, not the size of the pools. Depth readings and the executable ceiling have moved in opposite directions.
- **Growth concentrating in the 110% MCR branch.**
- **sBOLD's share of supply**, and any change to what its 2-of-3 Safe can do.
- **Any branch `shutdownTime()` moving off zero** — that is one-way.

## Revision history

*2026-09-15 — first publication. Immutability verified on-chain: `owner()` zero, both EIP-1967 slots zero, `getToken(3)` zero against a registry whose `boldToken()` returns the token itself. Branch debts read per-branch and reconciled against `totalSupply` at 0.0029%. sBOLD identified by `asset()` and its owner read as a 2-of-3 Safe. Both token addresses confirmed by `symbol()` and supply.*
