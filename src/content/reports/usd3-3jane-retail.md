---
asset: "USD3 (3Jane)"
slug: "usd3-3jane"
aliases: ["USD3 3Jane", "3Jane USD3", "USD3 senior tranche", "3Jane senior"]
chains: ["eth"]
category: "vault-share"
assessment_type: "light"
audience: "retail"
date: "2026-06-25"
last_verified: "2026-06-25"
featured: false
production: false
issuer: "3Jane"
yield_bearing: true
underlying_assets: ["USDC"]
market_cap_approx: 58100000
volatility_score: 4.5
liquidity_score: 3.0
structural_score: 3.5
redemption_score: 3.5
underlying_score: 4.0
issuer_score: 4.5
overall_score: 3.5
---

# USD3 (3Jane) — Retail Risk Report

**Speculative · 3.5/10**

> **DISAMBIGUATION — this is NOT Reserve's USD3.** Two unrelated tokens share the symbol **USD3**. This report covers **3Jane's** USD3, a credit-backed "yieldcoin" at `0x056B269Eb1f75477a8666ae8C7fE01b64dD55eCc`. The *other* USD3 is Reserve Protocol's RToken (`0x0d86883F…b6f378`), a basket stablecoin — different issuer, different contract, different mechanism. Always confirm the contract address.

> **A NAV-accruing senior claim on an uncollateralized consumer/SMB credit book that went live 2026-06-10.** USD3 is **not a $1 stablecoin** — it is the senior tranche of a two-tranche credit waterfall, a vault share whose value rises with credit yield (≈$1.16 today) and that can be **marked down** if loans default. The structure is genuinely sensible (senior position, ≈13% junior first-loss buffer, bankruptcy-remote SPVs), which keeps it above an unsecured-credit floor. But the risks compound: a book that is weeks old with no loss history, two originators carrying essentially the whole book, off-chain servicing and admin-driven NAV markdowns, no public audit of the credit-specific code, and redemption that is liquidity-gated — with **zero idle liquidity right now**. Size this as a speculative yield position, not a dollar substitute.

| Yield (target) | Exit method | Redemption | NAV | Age | Chain |
|---|---|---|---|---|---|
| ≈8.5% (credit-risk compensation, not stable yield) | No secondary market — redemption only | Burn-for-USDC at NAV, capped to tranche ratio + idle liquidity | ≈$1.16/share (accruing) | ≈2 weeks public | Ethereum |

## Summary

3Jane is a Paradigm-backed credit money market on Ethereum — a modified fork of Morpho Blue (the team calls it "MorphoCredit") that funds **uncollateralized USDC credit** to cryptonatives and U.S. fintech lenders. You deposit USDC and mint **USD3**, the **senior tranche** of a two-tranche waterfall; **sUSD3** is the junior, first-loss tranche that absorbs losses before USD3 does.

USD3 is *not* pegged to $1. It is a NAV-accruing vault share: as of 2026-06-25 the senior tranche holds ≈$58.1M of assets against ≈50.1M shares, so **NAV is ≈$1.16 per share** and rises with credit yield (≈8.5% target). The flip side of "rises with yield" is "**falls with defaults**" — if underlying loans go bad, an off-chain controller marks NAV down.

The book is backed by two sleeves: **Crypto Credit Lines** (uncollateralized crypto credit underwritten on a "Jane Score" + risk-adjusted LTV) and **Fintech Credit Conduits** (warehouse loans and forward-flow purchases of consumer/SMB receivables held in bankruptcy-remote SPVs). At launch — and still the only publicly-named originators despite the book roughly tripling since launch — that is a **$10M warehouse line to LendSwift** (≈15,000 short-duration consumer-installment loans) and **≈$8.5M forward-flow from Slope** (SMB/BNPL), inside a stated $50M forward-flow program.

The **3.5/10** is sized to what an on-chain holder actually bears: brand-new unsecured credit, originator concentration, a thin-ish (≈13%) first-loss buffer, and an exit that gates exactly when you'd want it. The tranching and SPV structure are real risk mitigants — they are why this isn't lower — but they do not make the senior tranche unimpairable.

## What you actually earn (and can lose)

USD3 targets ≈8.5%. Treat that as **compensation for credit and liquidity-mismatch risk, not a stable yield** — check 3Jane's own product page for the current live figure rather than anchoring on this number.

Yield accrues into NAV (the ≈$1.16 share price), so you earn by the share appreciating, not by a rebase or a $1 redemption. The same NAV mechanism runs in reverse: loan losses are applied on-chain through an **off-chain-operated MarkdownController**, so a default event — or a delayed/under-aggressive markdown — moves your NAV. You are trusting 3Jane's off-chain servicing data and markdown discipline.

**Your loss protection, in order:** the **sUSD3 junior tranche** (≈13% of senior supply today, ≈$7.5M behind ≈$58M of senior), a **$1M insurance fund** (crypto-credit-line losses only), and originator equity / structural enhancement on the fintech sleeve. A correlated delinquency wave that chews through the ≈13% junior buffer starts impairing senior NAV. ≈13% is a real buffer — more than a flat "thin" read, and comparable to other senior-tranche structures — but it is still subordination on **unsecured consumer/SMB paper with zero realized-loss history through a credit cycle**, the asset class that decays fastest in a downturn. Stated recoveries on defaults run **2 months to 2 years**.

## How exit works

There is **one path, and it is gated.** USD3 redeems to USDC at NAV with no fee — but only **up to the tranche ratio** and only against **undeployed pool liquidity**. Deployed credit is illiquid; loans don't recall on demand.

The binding fact today: **idle USDC in the senior vault is $0 (≈100% utilization, verified 2026-06-25).** At this instant there is *zero* immediate at-NAV redemption capacity — an exit waits on loan amortization or fresh deposits arriving behind you. The book is actively growing, so inflows do provide some rolling exit liquidity, but you cannot count on it under stress, and there is **no secondary market** (the token is weeks old) to fall back on. When the redemption window is tight, there is no alternative exit at par.

## What the contracts are doing

- **USD3 (senior tranche):** `0x056B269Eb1f75477a8666ae8C7fE01b64dD55eCc` — `3Jane: USD3 Token`, 6 decimals, ERC-4626, TransparentUpgradeableProxy. `asset()` = USDC. Deployed 2025-08-25; **public launch with live credit facilities 2026-06-10.**
- **sUSD3 (junior / first-loss tranche):** `0xf689555121e529ff0463e191f9bd9d1e496164a7` — stakes USD3, absorbs losses first.
- **Admin (verified on-chain 2026-06-25):** a **TimelockController** (`0x1dCcD…f8C2`) with **`getMinDelay() = 24 hours`**, owned by a **3-of-5 multisig** (`0x3333…fB5EF`). That is a reasonable admin posture — meaningfully better than a single key.
- **Credit engine:** MorphoCredit (`0xDe6e08…EcBc`), CreditLine (`0x26389b…c6A9`), and the **MarkdownController** (`0xF0eaE7…6214`) that applies default markdowns to NAV. This is a **fork/augmentation of Morpho Blue**, so Morpho's audit pedigree does **not** transfer to the credit-specific code.

The thing to internalize: **the smart contract doesn't hold collateral** — it holds claims on off-chain loans serviced by third-party originators (LendSwift, Slope). Solvency rests on those loans performing and on 3Jane marking them honestly.

## Audits & security

- **No public audit** of the credit-specific code (MorphoCredit / CreditLine / MarkdownController) was disclosed at launch or since (re-checked 2026-06-25). That is the single biggest disclosure gap, and it sits on exactly the contracts that matter — the credit and markdown logic, which vanilla Morpho audits do not cover.
- Upgradeable proxy behind a 24h timelock + 3-of-5 multisig — upgrade authority can change vault/strategy logic with 24h notice.
- Backed by Paradigm ($5.2M seed, 2025-06), but venture backing is not an audit.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility (NAV stability) | 4.5 | Senior tranche with junior + insurance + SPV first-loss makes the *expected* NAV path stable and upward (≈8.5%). Held below 5 because NAV is subject to off-chain default markdowns on an unsecured consumer/SMB book with no loss history. |
| Liquidity | 3.0 | **Binding constraint.** No secondary market; only exit is redemption against undeployed USDC — **idle = $0 / ≈100% utilization today**, so immediate at-NAV capacity is nil. Held at 3.0 (not lower) only because deposit inflow provides rolling exit while the book grows. |
| Structural | 3.5 | Upgradeable proxy via 24h timelock + 3-of-5 multisig (verified) — reasonable, but the binding risk is the code: modified Morpho core (audit pedigree doesn't transfer) + **no public audit** + heavy off-chain dependency (SPV servicing, originator collections, admin-driven markdowns). Sound *design*, unproven *implementation*. |
| Redemption | 3.5 | Permissionless burn-for-USDC at NAV (no KYC gate on the token — a genuine plus), but capped to tranche ratio + available liquidity, which degrades exactly under stress. |
| Underlying (credit quality) | 4.0 | Unsecured consumer/SMB + crypto credit — structurally the weak point, far from cash/Treasuries. Lifted off the floor by senior positioning, bankruptcy-remote SPVs, and the ≈13% junior buffer; capped low by no loss history and two-originator concentration. |
| Issuer | 4.5 | 3Jane: Paradigm-backed, credible team, sensible structure — but ≈2 weeks of public operating history, no public audit, off-chain servicing/markdown discretion, and the whole book on two originators. |
| **Overall** | **3.5** | Speculative. The tranching + bankruptcy-remote structure is a real, sensible credit design and keeps this above a flat unsecured-credit floor — but newness, two-originator concentration, a ≈13% buffer, $0-idle gated redemption with no secondary market, off-chain markdown dependence, a modified (unproven) Morpho core, and undisclosed audits all compound. |

## Who it's for

- Yield-seekers who **understand they are buying unsecured credit risk plus a liquidity mismatch**, want exposure to a novel on-chain credit primitive, and are sizing accordingly small.

## Who should avoid

- **Anyone wanting a redeem-at-par stablecoin.** USD3 is a NAV share (≈$1.16), not a dollar; redemption is gated and idle liquidity is currently $0.
- **Anyone who needs reliable exit at size.** No secondary market; the only door narrows exactly under stress.
- **Anyone leveraging on a market-priced oracle** — though note the binding risk here is NAV markdown, not a secondary-market detachment.
- **Anyone who needs audited, on-chain-trustless backing.** The credit-specific code is publicly un-audited and the backing is off-chain unsecured loans.

## What to watch

- **Junior:senior buffer ratio** (sUSD3 vs USD3) and the $1M insurance fund vs. deployed credit — this is your live first-loss coverage (≈13% today) and the single most important solvency metric as the book scales.
- **Utilization / idle liquidity** — pinned at ≈100% / $0 today; this is the leading indicator of whether you can actually exit at par.
- **Originator concentration** — still just LendSwift + Slope despite the book roughly tripling to ≈$58M; watch for diversification and for any delinquency/performance-trigger disclosures.
- **Audit publication** — a credible audit of the MorphoCredit / CreditLine / MarkdownController code would close the biggest disclosure gap and is the clearest path to a re-rate.

---

*This report is based on 3Jane public materials and on-chain reads through 2026-06-25. Several material items — a public audit of the credit-specific contracts, detailed loan-tape performance, and the full originator roster behind the ≈$58M book — are not publicly available and would need to be obtained directly from 3Jane. Corrections, audit links, or additional disclosures welcome at info@tidresearch.com.*
