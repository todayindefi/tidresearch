---
asset: "ONyc"
slug: "onyc"
aliases: ["ONyc", "Onyx", "OnRe Tokenized Reinsurance", "Onchain Yield Coin"]
chains: ["solana"]
category: "vault-share"
underlying_assets: ["sUSDe", "reinsurance premium float"]
assessment_type: "light"
audience: "retail"
date: "2026-07-23"
last_verified: "2026-07-23"
featured: false
production: true
issuer: "OnRe (Bermuda SAC)"
yield_bearing: true
volatility_score: 5.0
structural_score: 4.0
redemption_score: 3.5
underlying_score: 4.5
liquidity_score: 3.5
issuer_score: 5.0
overall_score: 4.0
---

# ONyc — Retail Risk Report

**High risk · 4.0/10**

ONyc is OnRe's tokenized reinsurance yield coin on Solana. It represents a proportional claim on a Bermuda-regulated segregated account that underwrites short-duration insurance and reinsurance contracts. The reported yield, around 11% APY, comes from real reinsurance premium income plus collateral yield on an sUSDe float. That makes the return source genuinely less correlated to crypto than most DeFi yield products.

The catch is equally important: **ONyc holders are the first-loss insurance capital.** If catastrophe claims or underwriting losses exceed premiums and reserves, ONyc's NAV falls directly. There is no senior tranche sitting above holders. The book is roughly one year old, has not been tested through a major loss year, and the collateral float is **sUSDe from Ethena**, so ONyc stacks Ethena basis / peg risk underneath the insurance risk.

One more issue belongs at the top: **on-chain control is single-key.** Solana reads from 2026-07-22 show the program upgrade authority and freeze authority are each a single plain wallet, with no multisig and no timelock. One key can redeploy the mint / redemption logic or freeze holder tokens. The Bermuda regulated wrapper is a real legal backstop, but it is off-chain; it does not remove the on-chain key risk.

## Disambiguation

"Onyx" is spelled **ONyc** and reads like "onyx." The OnRe sibling token **ONe** is a legacy structured-LP product and is not being published as a separate tidresearch report here. If you hold something labeled "ONe," confirm its current status directly with OnRe. This report covers **ONyc**.

## What you're actually holding

ONyc is not a stablecoin and should not be evaluated as a fixed $1 peg. It is a NAV-tracking vault share over a regulated reinsurance account. NAV has moved from about $1.00 to about $1.13, and the token has recently traded close to NAV, but that smooth history reflects a young, calm period rather than a tested loss cycle.

The economic exposure has two layers:

- **Reinsurance underwriting:** premiums are earned up front, but large claims can hit NAV. That is the core risk and the source of the yield.
- **Collateral float:** idle or reserve capital earns through sUSDe, which adds Ethena's basis-trade, funding, and peg risks beneath the insurance book.

The positive case is real: reinsurance is a large, established market, OnRe uses a Bermuda segregated-account structure, Coinbase Prime custody, and major reinsurance brokers including Guy Carpenter and Howden. The negative case is also direct: retail holders sit in a first-loss, operator-marked, gated-exit position.

## How you actually exit

Primary redemption is constrained. OnRe documents a redemption queue that requires KYC and accredited-investor status, processes only about 2.5% of NAV per period, settles in USDC or USDG when liquidity is available, and fills at the prevailing NAV at fulfilment. If NAV moves while you are pending, you still bear that movement. The protocol does not force-unwind live reinsurance contracts to meet withdrawals.

The permissionless alternative is secondary-market liquidity on Solana DEXs. That liquidity is thin: roughly $2.7M across Kamino, Orca, Raydium, and Loopscale against roughly $240M outstanding, with no centralized-exchange listing. Under stress, the primary queue and secondary depth can both tighten at the same time.

This is severe exit asymmetry. Treat ONyc as an illiquid, long-hold credit / insurance position, not a cash-equivalent yield token.

## Governance & transparency

The legal and institutional wrapper is stronger than typical early DeFi credit products: OnRe operates through a Bermuda Segregated Accounts Company, cites Class IIGB insurance and Class F digital-asset business licensing, uses Coinbase Prime custody, and works with top-tier reinsurance brokers. A Quantstamp audit also exists for the OnRe Solana implementation.

The on-chain side is weaker. The token is a classic Solana SPL mint with 9 decimals and roughly 213.5M supply as of the July verification. Minting is mediated by an OnRe program PDA, but the program itself is upgradeable by a single wallet. Freeze authority is also a single wallet. There is no on-chain multisig, no timelock, and NAV is operator-posted.

That combination explains the score: institutional legal wrapper, but centralized on-chain trust.

## Who Should Avoid

Avoid ONyc if you need redeemable-at-par liquidity, a permissionless primary exit, or deep secondary markets. The practical retail exit is thin DEX liquidity unless you can satisfy OnRe's KYC and accreditation requirements.

Avoid it if you require multisig or timelock governance before taking token risk. The current on-chain upgrade and freeze authorities are single-key controls.

Avoid it if you do not want first-loss insurance exposure or stacked Ethena exposure. The yield is compensation for catastrophe / underwriting risk, sUSDe collateral risk, a redemption gate, and single-key trust. It is not a savings rate.

ONyc is best sized, if at all, as a small long-hold sleeve for investors who explicitly want reinsurance-premium exposure and can tolerate delayed or impaired exit.

## Score rationale

| Axis | Score | Why |
|---|---:|---|
| Volatility | 5.0 | NAV has been smooth and the token recently tracked NAV, but holders are first-loss underwriting capital and the book is untested through a major claims year. |
| Structural | 4.0 | Strong Bermuda legal wrapper, Coinbase Prime custody, major brokers, and Quantstamp audit; offset by single-EOA upgrade and freeze authorities, operator-posted NAV, and Solana single-program dependence. |
| Redemption | 3.5 | KYC and accredited-investor gated, about 2.5% of NAV per period into a pending queue, no forced unwind, and settlement at prevailing NAV. |
| Underlying | 4.5 | Reinsurance premium income is a real uncorrelated yield source, but holders bear first-loss claims and the collateral stack includes sUSDe. |
| Liquidity | 3.5 | Roughly $2.7M secondary liquidity against about $240M outstanding, no CEX, and primary exit is gated. |
| Issuer | 5.0 | Institutional wrapper and partners are meaningful positives, but single-key on-chain control materially weakens the issuer/trust profile. |

---

*This report is built from publicly available documentation, third-party market data, and independent Solana RPC reads dated 2026-07-22. We hold no privileged information about OnRe, its contracts, or its insurance book. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-23 — initial retail publish: new ONyc report; overall 4.0 with six-axis vault-share scoring; first-loss reinsurance exposure, sUSDe collateral stacking, single-key upgrade/freeze control, KYC/accredited redemption gate, and thin secondary liquidity are the binding risks.*
