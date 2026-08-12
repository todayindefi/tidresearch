---
asset: "sUSDai"
slug: "susdai"
aliases: ["sUSDai", "Staked USDai", "Staked USD.AI"]
chains: ["arb"]
category: "vault-share"
underlying_assets: ["USDai", "PYUSD", "GPU-backed equipment loans"]
assessment_type: "light"
audience: "retail"
companion_report: "usdai"
date: "2026-05-28"
last_verified: "2026-08-12"
featured: false
production: true
issuer: "Permian Labs"
yield_bearing: true
volatility_score: 5.5
structural_score: 5.5
redemption_score: 4.0
liquidity_score: 5.0
underlying_score: 4.5
issuer_score: 6.0
overall_score: 5.0
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=susdai"
---

# sUSDai — Retail Risk Report

**Moderate-to-elevated risk · 5.0/10**

| Yield | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| NAV growth from GPU-loan interest — about 7.8% annualised over the last 76 days; live figure on the dashboard | 30-day epoch FIFO redemption queue, or two Fluid pools plus Curve on the secondary | Up to 30 days on the queue and longer if it rolls; minutes on secondary at retail size | About 10 months | Arbitrum |

## Summary

sUSDai is the yield-bearing, credit-risk-bearing leg of USD.AI. You stake USDai into an ERC-7540 async vault that lends to neoclouds and AI-infrastructure operators against installed GPU hardware, run on the MetaStreet lending engine. All of the yield and all of the collateral exposure live here — **not in USDai**, which is the clean PYUSD reserve leg covered in its [own report](/reports/usdai/). In plain terms this is a **tokenized private-credit fund collateralized by AI compute hardware**, not a stablecoin, and it should be sized like one.

The 5.0/10 reflects a genuinely-structured credit product carrying genuinely exotic collateral. On the supportive side: real overcollateralization at a stated 70–80% LTV, a debt-service reserve funded at each loan's close, a warrantied collateral-value schedule with an institutional reinsurance layer above it, a Cantina audit with no critical or high findings, and an admin chain whose 48-hour delay is binding rather than decorative. Working against it: the collateral depreciates on a technology cycle and cannot be marked from chain, **two borrowers represent close to the entire loan book**, delinquency and default rates are not disclosed anywhere public, and the primary exit is a 30-day queue that the protocol will let roll rather than force-liquidate loans to meet.

The vault grew materially over the summer — **total assets of $354.99M as of 2026-08-12, up about 18% in three weeks** — and secondary depth grew faster, which is what moved the liquidity axis this cycle. What did not change is the binding constraint. Concentration, disclosure and the redemption gate are where this asset's risk actually sits, and none of them improved.

## What's backing sUSDai

We verify this on-chain rather than taking the protocol's number. As of 2026-08-12, `totalAssets` reports **$354.99M**, and it decomposes exactly: **$92.37M of idle USDai** sitting in the vault as the redemption buffer, plus **$262.62M of drawn GPU loans**. Those two add to the reported total with nothing left over, which is the check that matters — the dollars are locatable, not a "trust the number" situation. The protocol's own API reports the loan leg about 2.9% lower than the implied figure, a modest discrepancy for a book that services and amortizes continuously, but one worth noting rather than smoothing over.

**The shape of the book has changed since this report was first published.** In May, a large slice of capital sat in a DepositTimelock escrow — committed to specific loans but not yet drawn by the borrower. That escrow is now **empty**: the pipeline drew down in full, drawn loans rose to $262.62M, and there is no committed-undrawn dry powder left in it. That is an operational fact rather than a problem, but it is informative. The book is now fully deployed, and the idle buffer — a little over a quarter of assets — is the only liquidity standing between a redemption request and a loan repayment schedule.

Loan terms, from protocol documentation rather than chain: **70–80% stated LTV**, interest tiers running from 7–9% on investment-grade offtake up to 12–15% on on-demand compute, **36-month amortizations with 30-day payment cadence** and a single 30-day grace period at an accelerated rate before default. A **debt-service reserve of roughly 10% of each loan** is funded at close. Collateral is represented on-chain as loan NFTs, with legal enforcement running through Delaware LLC SPVs and off-chain UCC bailment.

## Why GPU collateral is scored at 4.5

This is the heaviest discount on the rating and the reason the underlying axis sits well below the vault's structural marks.

**Hardware depreciates on a technology cycle.** Each AI hardware generation devalues the one before it. These are 36-month amortizations against hardware with a useful economic life on the order of three to five years, so the collateral is racing the loan. That is a fundamentally different profile from a T-bill or a liquid crypto collateral pool, and it is not something a higher LTV cushion fixes.

**You cannot compute LTV yourself.** The chain shows loan principal; it does not show the appraised value of the hardware behind it. The 70–80% figure is a trust input from the protocol and its appraisers, not a verifiable on-chain ratio. Recovery, if it is ever needed, means physically de-installing hardware from a data center, enforcing through an SPV, and selling into a thin secondary market for used AI compute.

**Concentration and disclosure are the live problems.** Public risk write-ups state that **two borrowers account for very nearly the entire pipeline** — one of them duosEdgeAI, a subsidiary of Nasdaq-listed duostech, on a loan around $98M. A single borrower default would therefore be a protocol-level NAV event, not a diversified loss absorbed by the spread. And **no numeric delinquency or default rate is published**. The protocol reports aggregate active-loan totals; it does not report what share of them are paying late. For a credit product that is a material diligence gap, and it is the single thing whose disclosure would most change this report.

The mitigants are real but bounded: the debt-service reserve, a staked-CHIP first-loss layer whose capacity relative to the book is not disclosed in granular form, and a **Barkr warrantied collateral-value schedule set at origination with an institutional reinsurance layer covering liquidation shortfalls up to 80% below that warrantied value**. That reinsurance is a genuine loss-*severity* mitigant. It does not reduce default *probability*, and it covers collateral shortfall rather than borrower default as such.

## NAV, yield, and a trap on the block explorer

sUSDai is a vault share, so the metric is **discount to net asset value**, not price against a dollar. NAV read on-chain at **$1.1046** on 2026-08-12, against $1.0875 on 2026-05-28 — 76 days apart, which works out to roughly **7.8% annualised**, smooth, with no jumps. That is modest for a loan book grossing more than that, and the gap is explained by fees plus the drag of holding a quarter of assets idle as the redemption buffer. Secondary prices have tracked NAV closely in calm conditions.

**If you check this vault on a block explorer, do not compute NAV as `totalAssets / totalSupply`.** That gives about **$1.745** and it is wrong — it reads the share price roughly 58% high. The correct getter is **`convertToAssets`**, which returns $1.1046. This matters precisely for the reader doing their own homework: the naive division is the obvious thing to try, it returns a plausible-looking number, and it is badly misleading.

The reason the two differ is that **203.42M shares represent only about $224.70M of a $355M pool** — a gap of roughly $130M between assets held and claims outstanding. To be clear about what is and is not known here: the **assets side reconciles completely**, as set out above, so nothing is missing or overstated. What is unexplained is the claims side. The most likely reading involves deposits that have been received but whose shares have not yet been minted under the vault's async settlement model, which would fit an 18% AUM increase in three weeks — **but the vault exposes no getter that confirms it**, and we do not assert a cause we cannot verify. We state the trap and the correct getter; the cause is an open item, tracked and not resolved.

## Exit liquidity

Two paths, both with friction, and they tighten together under stress.

**Primary redemption is a 30-day epoch FIFO queue.** Requests queue through roughly 29 days, process on day 30, and fill in order until available USDai is exhausted. The protocol **explicitly does not force-liquidate GPU loans to meet redemptions**. That protects remaining holders and the loan book, at the cost of exit certainty for the holder leaving: under pressure your withdrawal can partially fill and roll into the next epoch, possibly more than once. The planned QEV priority-exit auction is **still not live**. The idle buffer is the only on-demand liquidity behind the queue.

**Secondary depth roughly doubled this cycle, and that is what moved the Liquidity axis from 4.5 to 5.0.** Measured against the same venues this report previously listed: Fluid sUSDai/USDC now holds about **$17.93M**, a **new Fluid sUSDai/USDT pool** adds about **$17.66M**, Curve sUSDai/USDC holds about **$1.55M**, and a long tail across Uniswap v4 and Maverick adds roughly $0.32M — **about $37.5M total against $17.05M three weeks earlier**. Depth as a share of assets improved from 5.68% to 10.55% *despite* the vault growing 18%. The previous 4.5 rested on the argument that liquidity was thin for the size on either path; with two Fluid pools of comparable depth, the single-venue leg of that argument no longer holds.

**It does not go above 5.0, for four reasons.** There is **no centralized-exchange listing**. Pool TVL is two-sided, so executable depth is roughly half the headline figure. Exiting even 5% of the vault would move the market against you. And the primary exit is still the 30-day queue. The figures above are pool TVL — the same basis used previously, which is what makes the comparison honest — not a measured slippage ladder.

One consequence worth stating for anyone using sUSDai as collateral elsewhere: **check what oracle the venue prices it with**. If a lending market marks sUSDai at market price and the secondary detaches under stress, leveraged positions can liquidate even while the loan book's NAV is intact.

## Admin, audit and issuer

**The 48-hour delay on this asset is binding, not theatre**, and that distinction is worth making explicitly because plenty of protocols have a timelock that can be shortened at will. sUSDai's ProxyAdmin (`0x0b3296b6…`) is owned by a **`TimelockController` at `0x0EEA1EE0…639b` with a minimum delay of 172,800 seconds — exactly 48 hours** — re-verified on-chain 2026-08-12. Critically, **the timelock holds its own admin role**, so the delay cannot be shortened and no new role can be granted without first passing through 48 hours. Proposal authority sits with a 3-of-3 Safe multisig with three known signers, and no role revocations have occurred since deployment. USDai's ProxyAdmin (`0x2ddf39c7…`) is owned by the same timelock, so the two legs share one authority chain — this is the same test the [Saturn reports](/reports/usdat/) apply, and sUSDai passes it.

Practically: a malicious or buggy upgrade is visible on-chain for two days before it can land. Two days is a real observation window, though it is shorter than the 30-day redemption queue — so for a holder relying on primary redemption, the window lets you see the change coming, not necessarily exit ahead of it. The secondary market is the exit that fits inside 48 hours.

**Structural surface is scored at 5.5** and the vault is more complex than a plain ERC-4626: async request-and-fulfill deposits and redemptions, a redemption queue, blacklist and freeze capability, and a Chainlink oracle dependency. Cantina (Spearbit) reviewed the vault, the redemption queue, blacklisting, the oracle integration and MetaStreet yield harvesting, reporting **0 critical, 0 high, 1 medium since fixed**, with a live bug bounty. Against that sits a substantial off-chain dependency stack — loan servicing, GPU appraisal, SPV and UCC enforcement, KYC/KYB, and the MetaStreet engine itself. Appropriate for a credit fund; not "trustless on-chain."

**Issuer sits at 6.0**, matching USDai, since it is the same entity, the same governance and the same audit. Permian Labs carries MetaStreet lineage and a $13.4M Series A from Framework, Dragonfly, Coinbase Ventures and Arbitrum. It is held down by a roughly ten-month track record, single-operator concentration, and no stress event to date.

## Who this is for

- **Someone explicitly underwriting GPU-credit risk** who wants that exposure tokenized, and who is sizing it as a small, illiquid sleeve rather than a yield allocation.
- **Holders comfortable with a multi-week exit** and with the possibility that the exit rolls to a second epoch under stress.

## Who this is NOT for

- Anyone treating this as a stablecoin substitute or a cash-equivalent yield token. It is neither. The [USDai report](/reports/usdai/) covers the leg that actually is a dollar.
- Anyone who needs to exit size quickly. About $37M of two-sided pool depth against a $355M vault means executable size is a fraction of that, and the alternative is a 30-day queue.
- Anyone using it as high-LTV collateral on another protocol. The same exit asymmetry that affects a retail holder applies to a forced unwind, and the oracle question above decides whether a NAV-intact position can still be liquidated.
- Anyone who needs to see delinquency data before underwriting credit. It is not published.

## What to watch

- **Any disclosure of delinquency or default rates.** The single most score-relevant thing that could appear. The book has not yet run through a default cycle.
- **Borrower concentration.** New borrowers diversifying the pipeline would ease the volatility axis; further concentration into the existing two would tighten it.
- **Whether redemptions ever roll.** An epoch that partially fills is the practical test of the redemption gate, and it has not happened yet under observable conditions.
- **The claims-side gap.** If the protocol exposes a getter for pending deposits, or the gap closes on its own, the accounting picture resolves. If it widens without explanation, that is a structural re-rate.
- **Anything queued in the timelock.** Scheduled operations are visible for 48 hours before they can execute; the live dashboard surfaces pending operations with their countdown.
- **Secondary depth holding.** The new Fluid USDT pool is what carried the liquidity upgrade. If it drains back toward single-venue concentration, the 5.0 does not hold.

## Live dashboard

A stacked-bar decomposition of total assets, the credit-pipeline framing, NAV trajectory, secondary-market depth across venues, and the 48-hour pending-upgrade watch are on the embedded dashboard below.

## Sibling

- [USDai](/reports/usdai/) — the PYUSD-backed reserve leg, carrying no GPU-loan exposure and a materially different risk profile

---

*This report is built from publicly available documentation and independent on-chain reads, most recently on 2026-08-12. We hold no privileged information about the issuer or borrowers. Per-loan detail is partly reconstructable from chain, but borrower identity, GPU specifications and appraised collateral values are off-chain and not independently verifiable. Corrections welcome: [info@tidresearch.com](mailto:info@tidresearch.com).*

*Revision history: 2026-08-12 — Liquidity 4.5 → 5.0, overall held at 5.0. **The liquidity move is an observed improvement, not a change of method**: measured against the same venues on the same pool-TVL basis, depth rose from $17.05M to $37.46M as a second Fluid pool (sUSDai/USDT, about $17.66M) joined the existing USDC pool, taking depth-to-assets from 5.68% to 10.55% despite assets growing about 18% to $354.99M. The "thin on either path" single-venue argument no longer holds; the score stops at 5.0 because there is still no CEX listing, pool TVL is two-sided, and the primary exit remains a 30-day FIFO queue. Overall holds because the improvement landed on an axis that was never the binding constraint — borrower concentration, undisclosed delinquency and the redemption gate are unchanged. Also corrected: the DepositTimelock escrow that this report previously described as holding committed-undrawn capital is now empty, with the pipeline fully drawn into loans of $262.62M; NAV restated at $1.1046 with the `convertToAssets` / `totalAssets ÷ totalSupply` explorer trap now stated explicitly; and the assets-versus-claims gap recorded as an open item with no cause asserted. 2026-07-23 — re-eval: loan book roughly doubled; surfaced borrower concentration (two borrowers close to the entire pipeline, so a single default is a protocol-level event) → volatility 6.0 → 5.5; added the Barkr warrantied-value plus institutional reinsurance collateral backstop; overall held 5.0. Initial production publish 2026-05-28.*
