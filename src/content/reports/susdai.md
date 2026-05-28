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
last_verified: "2026-05-28"
featured: false
issuer: "Permian Labs"
yield_bearing: true
volatility_score: 6.0
structural_score: 5.5
redemption_score: 4.0
liquidity_score: 4.5
underlying_score: 4.5
issuer_score: 6.0
overall_score: 5.0
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=susdai"
---

# sUSDai — Retail Risk Report

**Moderate-to-elevated risk · 5.0/10**

sUSDai is the yield-bearing, credit-risk-bearing leg of USD.AI. You stake USDai into an ERC-7540 async vault that lends to neoclouds and AI-infrastructure operators against installed GPU hardware (run on the MetaStreet lending engine). The advertised ≈7% realized 30-day yield, and all the GPU-collateral exposure, lives here — **not in USDai**. This is, in plain terms, a **tokenized private-credit fund collateralized by AI compute hardware**, not a stablecoin.

## What's actually backing your sUSDai

We verified this on-chain. The vault's reported total assets close cleanly against four locatable components: idle USDai in the vault, a small PYUSD buffer, USDai escrowed in the DepositTimelock (committed to specific loans but not yet drawn by the borrower), and the drawn GPU loans themselves. The reconciliation closes to under 1% — meaning the dollars are real and locatable, not a "trust the totalAssets number" situation.

The reframing that matters for risk: most of sUSDai's TVL is **loan-destined**. About a third of the assets are committed-undrawn escrow that converts to live credit as borrowers draw, plus about a third already drawn as loans, with the remaining third as the idle redemption buffer. This isn't a vault with ample idle reserves — it's a credit fund with most capital deployed or earmarked.

## Why GPU collateral isn't like other RWA collateral

This is the heaviest discount on the rating, and it's worth understanding clearly:

- **Hardware depreciates on a technology cycle.** Each AI hardware generation (think H100 → H200 → B-series) devalues the prior one. Loans are typically 36-month amortizations against hardware that has a useful economic life on the order of three to five years. The collateral is racing against the loan.
- **GPUs are illiquid to repossess and remarket.** A T-bill or a piece of crypto collateral can be sold in minutes. Recovering value from data-center-installed compute hardware involves physical de-installation, legal enforcement through Delaware LLC SPVs and UCC bailment, and a thin secondary market for used AI hardware.
- **The collateral denominator is off-chain.** The chain shows loan principal; it does not show the appraised value of the underlying hardware. So **you cannot independently compute LTV** — the stated 70–80% LTV figure is a trust input from the protocol, not a verifiable number.
- **Delinquency rates aren't disclosed.** The loan book is young and has not run through a default cycle. The protocol publishes aggregate active-loan totals but not numeric delinquency or default rates.

The structural mitigants are real but not unlimited: 70–80% stated LTV, a roughly 10% debt-service reserve held against each loan, a staked-CHIP first-loss-ish backstop, and a Cantina audit covering the vault and the redemption queue.

## How you actually exit

Two paths, both with friction:

- **Primary redemption** runs a 30-day epoch FIFO queue: requests queue for about 29 days, process on day 30, filled in order until available USDai is exhausted. The protocol explicitly **does not force-liquidate GPU loans to meet redemptions**, which protects remaining holders but means under redemption pressure your withdrawal can partially fill and roll to the next epoch — possibly more than once. A planned priority-exit auction (QEV) is not live as of mid-2026.
- **Secondary market:** Fluid sUSDai/USDC is the deepest venue at about $15M, with Curve sUSDai/USDC adding roughly another $2M. Thin against a $300M vault. No centralized-exchange listing.

Treat sUSDai as an illiquid credit position with a multi-week exit, not as a cash-equivalent yield token.

## Governance

Same authority chain as USDai — 48-hour timelock plus 3-of-3 Safe multisig, no role revocations, Cantina-audited vault contract. This is a relative strength in the cohort and shouldn't be held against the rating. The live dashboard surfaces any pending timelock operation with its 48-hour countdown.

## Who this is for

A small, illiquid sleeve for someone explicitly underwriting GPU-credit risk and a multi-week exit. **Not** a stablecoin substitute, **not** a cash-equivalent yield product, and **not** suitable as high-LTV collateral on another protocol — the same exit-asymmetry mechanics that affect retail holders apply to a forced unwind. The ≈7% yield is compensation for credit risk plus a redemption gate, not for taking dollar duration.

## Live dashboard

The signature panel — a stacked-bar decomposition of total assets (idle / committed-undrawn escrow / drawn loans / implied), the credit-pipeline framing, NAV trajectory, secondary-market depth, and the same 48-hour timelock pending-upgrade watch — is on the embedded dashboard below.

---

*This report is built from publicly available documentation and on-chain reads only. We hold no privileged information about the issuer or borrowers. Per-loan financial detail is theoretically reconstructable from chain (loan IDs, principal, repayment cadence, lender attribution) but borrower identity, GPU specifications, and appraised collateral values are off-chain and not independently verifiable. Corrections welcome to info@tidresearch.com.*
