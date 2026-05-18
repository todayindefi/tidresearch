---
asset: "reUSD (Re Protocol)"
slug: "reusd-re"
aliases: ["reUSD (Re Protocol)", "Resilience reUSD"]
chains: ["eth", "arb", "base", "avax"]
category: "vault-share"
assessment_type: "full"
audience: "retail"
date: "2026-05-18"
last_verified: "2026-05-18"
featured: false
issuer: "Resilience BVI Ltd."
audited_reserves: true
market_cap_approx: 175280000
volatility_score: 5.5
liquidity_score: 5.0
structural_score: 5.5
redemption_score: 4.5
overall_score: 5.0
live_dashboard_url: "https://app.re.xyz/reusd"
---

# reUSD (Re Protocol) — Retail Risk Report

**Moderate risk · 5.0/10**

> **Issuer-published dashboard:** [app.re.xyz/reusd](https://app.re.xyz/reusd) — this is **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, yield/price/TVL history charts, capital tranching diagram, and links to Chainlink Proof of Reserves. It is the canonical source for live metrics on this asset. tidresearch does not currently run an independent dashboard for reUSD.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~6.1% APY | Curve + Coinbase + on-chain bridge | Tiered (50%+ instant buffer, queue beyond) | ~11 months | Ethereum, Arbitrum, Base, Avalanche |

## Summary

reUSD is the **senior tranche** of Re Protocol's reinsurance capital structure. Capital is deployed into fully-collateralized reinsurance contracts via licensed insurers, with funds held in a U.S. §114 Reinsurance Trust Account. The on-chain liquid sleeve runs an Ethena sUSDe basis trade or T-Bill strategy.

The senior tranche earns the risk-free rate plus a **2.5% (250 bps) spread** — currently around 6.1% APY. Below reUSD sits its junior sibling [reUSDe](/reports/reusde-re/) (Mezzanine) and below that Re Protocol's own equity capital. Losses are absorbed bottom-up, so reUSD only takes a hit if a catastrophic underwriting event exhausts both junior layers.

As of 2026-05-18, reUSD has **$175.28M TVL** across 162.55M tokens, listed on Coinbase, with multi-chain deployments on Ethereum, Arbitrum, Base, and Avalanche. NAV currently $1.08, up ~8% from June 2025 inception.

The 5.0/10 score reflects a credibly-engineered RWA exposure offset by two structural realities: (1) **U.S. persons cannot use primary redemption** under the BVI securities exemption, leaving secondary-market-only exit for U.S. holders, and (2) the secondary market has demonstrated a 13% NAV detachment (ATL $0.8734) under stress.

## What you actually earn

Senior-tranche reinsurance yield, calculated daily as a **deployment-weighted blend**:

- **Deployed capital** earns the risk-free rate + 2.5% spread
- **Undeployed capital** earns the trailing 7-day sUSDe basis trade + 2.5% spread

Each day at 00:00 UTC the protocol computes the current deployment mix and converts the blended rate into daily price appreciation (no rebasing). As of 2026-05-18 the dashboard shows ~6.1% APY. Effective rate moves with both the basis level and the deployment mix.

Compared to its sibling reUSDe (~12% APY, mezzanine tranche): reUSD earns roughly half the yield in exchange for the protection of having reUSDe absorb losses first.

## How exit works

Two paths, very different profiles depending on whether you can KYC as a non-U.S. person:

**1. Primary redemption (non-U.S. KYC only):** Tiered — an actuarially determined instant buffer (typically 50%+ of deposits) settles immediately at NAV. Requests beyond the buffer queue and settle as trust assets mature. 0.18% subscription / 0.18% redemption fees; minimum deposit **250 USDC** per the current dashboard.

**2. Secondary market (the only path for U.S. persons):** reUSD trades on Curve pools across all four supported chains and is listed on Coinbase. Aggregate monthly volume is around $511M (per RWA.xyz). Decent liquidity overall, but **secondary price can detach from NAV during stress.** The recorded all-time low is $0.8734 — ~13% below NAV at the time — which is the canonical risk for any tokenized RWA: gated cohorts can only exit via the secondary market, and pressure can push price well below the NAV that primary redeemers receive.

**For U.S. holders specifically:** the primary path is unavailable. Treat reUSD as a hold-the-NAV-trajectory position rather than a redeem-at-par stablecoin.

## What the contracts are doing

- **Token contract:** ERC-1967 upgradeable proxy at `0x5086bf358635b81d8c47c66d1c8b9e567db70c72` (Ethereum). NAV is set via off-chain feed; this is not an ERC-4626 vault.
- **Custody:** Crypto leg on **Fireblocks MPC** multisig; off-chain leg in an independent U.S. trust bank's §114 Reinsurance Trust Account
- **Attestations:** Daily reserve attestations by The Network Firm; **Chainlink Proof of Funds** publishes 24/7 hashed trust balances + premium/claim flow on-chain
- **Annual audit:** Grant Thornton (Cayman) — Big-6 accounting firm
- **Upgrade authority:** Gated by AccessControl roles managed via Fireblocks MPC multisig. On-chain timelock not visible on the proxy interface; verify with Re Protocol before sizing significant positions

The thing to internalize: **the smart contract doesn't hold the reinsurance.** Reinsurance contracts and trust-account assets are off-chain instruments held by a U.S. trust bank for the BVI issuer. On-chain reads tell you the token supply and the Chainlink-attested NAV — the underlying credit exposure is a TradFi reinsurance program.

## Audits & security

- **Hacken (Aug 2024):** 0 Critical, 0 High, 4 Medium, 7 Low, 18 Observations on the version audited
- **Current implementation `0xb5276c43...DEb4a21D4` is NOT associated with a published audit on Etherscan.** The Hacken audit is ~21 months stale relative to the live logic. Treat the current contract as effectively unaudited until Re Protocol publishes a re-audit.
- **No bug bounty disclosed publicly** — gap relative to mature DeFi protocols. The off-chain auditing posture (Grant Thornton annual + Network Firm daily) compensates partially for the asset-class but not the contract-layer.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 5.5 | NAV path smooth ($1.00 → $1.08 over 11 months). Secondary market has detached to $0.8734 (13% below NAV) under stress. |
| Liquidity | 5.0 | Multi-chain (Eth/Arb/Base/Avax), Coinbase-listed, ~$511M monthly volume. Solid aggregate; multi-chain split fragments depth. |
| Structural | 5.5 | ERC-1967 upgradeable proxy with Fireblocks MPC admin; 21-month-stale Hacken audit on current implementation; substantial off-chain dependency stack (trust bank, insurance carriers, Network Firm, Chainlink, Fireblocks, Grant Thornton). |
| Redemption | 4.5 | **Binding constraint for U.S. holders.** Non-U.S. persons get tiered NAV redemption (50%+ instant buffer); U.S. persons get secondary-market only. The §II.4 asymmetry has materialized once (13% detachment). |
| **Overall** | **5.0** | Moderate risk — credibly built for the asset class, with two structural caveats that cap the score. |

## Who it's for

- **Non-U.S. yield-seekers** comfortable with regulated RWA exposure who want tokenized senior reinsurance with on-chain composability. Treat as a 5-10% portfolio sleeve, not a stablecoin substitute.
- DeFi users who specifically want **multi-chain availability** and CEX exit optionality alongside on-chain DEX liquidity.

## Who should avoid

- **U.S. persons looking for a redeem-at-par stablecoin substitute.** Primary redemption is unavailable; exit is secondary-market only, and the 13% historical detachment under stress is the receipt for that asymmetry.
- **Anyone leveraging on a venue using a market-priced oracle.** A secondary-market detachment to $0.87 would trigger liquidations even if Re Protocol's NAV is unimpaired. NAV-priced oracle is the only defensible configuration.
- Anyone who needs a fully on-chain trustless instrument. reUSD has substantial off-chain dependencies (U.S. trust bank, reinsurance carriers, Chainlink feed liveness, Fireblocks operational continuity).

## What to watch

- **[Re Protocol's issuer dashboard](https://app.re.xyz/reusd)** is the primary source. Current APY, TVL, supply, and historical yield/price/TVL charts are all updated in real time by the issuer. Chainlink Proof of Reserves feed is linked from there.
- **NAV vs market price spread.** Target <50bps in calm conditions; >200bps is a stress signal worth attention.
- **Ethena sUSDe basis trade health.** reUSD's on-chain sleeve depends on this; an Ethena depeg or basis collapse hits the asset side directly.
- **Audit publication for the current implementation.** The Hacken audit is ~21 months stale. Re-audit publication closes a meaningful gap.
- **reUSDe (sibling) capacity.** reUSDe is the mezzanine layer that protects reUSD from underwriting losses. If reUSDe TVL contracts significantly relative to total underwriting, reUSD's loss buffer thins.

## A note on the tranche structure

reUSD is the **senior** layer in a three-tier waterfall: Re Protocol's own equity (Re calls this "junior tranche capital") absorbs losses first, then the [reUSDe mezzanine tranche](/reports/reusde-re/), and only then reUSD. The relative sizing of these layers vs. the size of the underlying reinsurance book is what matters for solvency — and that ratio is not publicly disclosed in granular form. The structure says reUSD is well-protected; the structure has not been stress-tested by a real underwriting loss yet (Re Protocol launched June 2025).

## A note on Re Points

Re Protocol runs a loyalty points program prominently surfaced on the asset dashboard. Current multipliers for reUSD strategies: Pendle YT 30x, Pendle LP 30x, Fluid 5x–20x. Points have no current token, no published conversion mechanism, and no expiry disclosure. **Treat as marketing optionality, not yield** — points may convert to value (airdrop precedent in DeFi) or may not. Net APY estimates should not include points absent a published valuation.

---

*This report is based on Re Protocol's public documentation, on-chain reads, and the live transparency dashboard at [app.re.xyz](https://app.re.xyz) through 2026-05-18. Some information depends on issuer disclosures (specific trust bank counterparty, individual reinsurance carriers, reUSDe vs reUSD layer sizing) that are not yet independently verified. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
