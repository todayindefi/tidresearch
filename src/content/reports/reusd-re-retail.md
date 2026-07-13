---
asset: "reUSD (Re Protocol)"
slug: "reusd-re"
aliases: ["reUSD (Re Protocol)", "Resilience reUSD"]
chains: ["eth", "arb", "base", "avax"]
category: "vault-share"
assessment_type: "full"
audience: "retail"
date: "2026-05-19"
last_verified: "2026-07-13"
featured: false
production: true
issuer: "Resilience BVI Ltd."
audited_reserves: true
market_cap_approx: 162000000
volatility_score: 7.0
liquidity_score: 5.0
structural_score: 5.5
redemption_score: 4.5
overall_score: 5.5
live_dashboard_url: "https://app.re.xyz/reusd"
---

# reUSD (Re Protocol) — Retail Risk Report

**Moderate risk · 5.5/10**

> **Issuer-published dashboard:** [app.re.xyz/reusd](https://app.re.xyz/reusd) — this is **Re Protocol's own** real-time dashboard (not a third-party monitor), with current APY, TVL, supply, yield/price/TVL history charts, capital tranching diagram, and links to Chainlink Proof of Reserves. It is the canonical source for live metrics on this asset. tidresearch does not currently run an independent dashboard for reUSD.

| Yield (current) | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| ~6.1% APY | DEX-only (Curve, Fluid) | Tiered (50%+ instant buffer, queue beyond) | ~11 months | Ethereum, Arbitrum, Base, Avalanche |

## Summary

reUSD is the **senior tranche** of Re Protocol's reinsurance capital structure. Capital is deployed into fully-collateralized reinsurance contracts via licensed insurers, with funds held in a U.S. §114 Reinsurance Trust Account. The on-chain liquid sleeve runs an Ethena sUSDe basis trade or T-Bill strategy.

The senior tranche earns the risk-free rate plus a **2.5% (250 bps) spread** — currently around 6.1% APY. Below reUSD sits its junior sibling [reUSDe](/reports/reusde-re/) (Mezzanine) and below that Re Protocol's own equity capital. Losses are absorbed bottom-up, so reUSD only takes a hit if a catastrophic underwriting event exhausts both junior layers.

As of 2026-07-13, reUSD has a **~$162M market cap** (down from ~$176M in May), with multi-chain deployments on Ethereum, Arbitrum, Base, and Avalanche. NAV currently ~$1.09, up ~9% from June 2025 inception. The market-cap dip is **rotation into the higher-yield [reUSDe](/reports/reusde-re/) mezzanine tranche following the June 2026 $RE token launch, not distress** — Re Protocol's total protocol TVL actually *rose* to ~$600M around the token launch (from ~$465M), so reUSD's slice shrinking is a mix shift, not a contraction.

The 5.5/10 score reflects a credibly-engineered RWA exposure offset by two structural realities: (1) **U.S. persons cannot use primary redemption** under the BVI securities exemption, leaving DEX-only exit for U.S. holders, and (2) **Mainnet primary redemption pays out in sUSDe, not USDC** — so even non-U.S. Mainnet holders inherit Ethena impairment at exit. Across 11 months of trading, secondary price has tracked the smooth NAV curve closely — early-launch dips (Jul–Aug 2025) imply ~1–3% discount-to-NAV at the worst, with near-zero deviation from late 2025 onward. The structural exit-asymmetry that has produced -5% to -15% detachments on other tokenized RWAs has **not** materialized for reUSD to date, but the setup that produces it (gated cohort + DEX-only exit + ~$28M/month DEX depth against a ~$162M cap) is unchanged.

**Frame check:** reUSD is a vault share — its target price grows with NAV, not a $1 peg. The right metric for stress is *discount-to-NAV* `(NAV − market price) / NAV`, not absolute price vs $1.00. NAV today is about $1.09; the absolute-price ATL on the rendered chart (~$0.99, early launch) implies a ~1–3% discount-to-NAV given accrued NAV at that time.

## What you actually earn

Senior-tranche reinsurance yield, calculated daily as a **deployment-weighted blend**:

- **Deployed capital** earns the risk-free rate + 2.5% spread
- **Undeployed capital** earns the trailing 7-day sUSDe basis trade + 2.5% spread

Each day at 00:00 UTC the protocol computes the current deployment mix and converts the blended rate into daily price appreciation (no rebasing). As of 2026-05-18 the dashboard shows ~6.1% APY. Effective rate moves with both the basis level and the deployment mix.

Compared to its sibling reUSDe (~12% APY, mezzanine tranche): reUSD earns roughly half the yield in exchange for the protection of having reUSDe absorb losses first.

## How exit works

reUSD has a deeper Ethena dependency than the yield headline suggests. Re Protocol's docs confirm that on Ethereum, when you redeem reUSD, the protocol pays you back in **sUSDe — not USD**. To get clean dollars you need a second step: wait out Ethena's 7-day cooldown (sUSDe → USDe → USDC) or swap on a DEX, where stress conditions can mean meaningful slippage. On Avalanche, redemptions pay USDC directly and are exempt from this. The practical consequence: a Mainnet holder of reUSD inherits Ethena impairment risk on the *exit asset itself*, not just on the on-chain reserve buffer. A sUSDe depeg would propagate to reUSD via three channels at once — the yield formula (which references sUSDe basis), the on-chain reserve buffer (which holds sUSDe basis-trade positions), and the redemption payout itself — so even non-U.S. holders going through primary redemption are not insulated from Ethena on Mainnet.

Two paths, very different profiles depending on whether you can KYC as a non-U.S. person:

**1. Primary redemption (non-U.S. KYC only):** Tiered — an actuarially determined instant buffer (typically 50%+ of deposits) settles immediately at NAV. Requests beyond the buffer queue and settle as trust assets mature. 0.18% subscription / 0.18% redemption fees; minimum deposit **250 USDC** per the current dashboard. **Payout asset depends on chain:** on Mainnet (Ethereum), the instant redemption tier pays out in **sUSDe**, the staked-USDe yield-bearing token issued by Ethena. On Avalanche, redemptions pay out in USDC. A Mainnet redeemer wanting a clean dollar at exit must follow up with a sUSDe → USDC unwrap (Ethena 7-day cooldown queue or DEX swap), and any sUSDe price weakness propagates directly to the dollar value of that exit.

**2. DEX secondary market (the only path for U.S. persons):** reUSD trades on Curve and Fluid pools across the four supported chains. There is **no CEX listing**: per CoinGecko Markets (May 2026), the four trading venues are Fluid REUSD/USDT (~63% of 24h DEX volume), Curve REUSD/sUSDe (~37%), Curve REUSD/USDC (<1%), and a stale Blackhole V2 pool. Aggregate DEX exit liquidity is **≈$28M/month** (about $946K/24h across the four pools). The often-cited "$511M monthly volume" from RWA.xyz is *transfer* volume — it conflates mints, redemptions, wallet-to-wallet transfers, and DEX trades. Only the DEX share is realizable exit for a holder. Against a ~$162M market cap, $28M/month of real DEX exit liquidity is functional for retail-size exits but thin for institutional-size.

**For U.S. holders specifically:** the primary path is unavailable. Treat reUSD as a hold-the-NAV-trajectory position rather than a redeem-at-par stablecoin.

**On the $0.8734 all-time-low aggregator print:** an aggregator text field shows an ATL of $0.8734, not visible on the rendered CoinGecko chart. This print is now **resolved as an early-launch (July 2025) thin-seed-pool artifact — not a sUSDe-redemption event.** The hypothesis that Mainnet's sUSDe redemption payout could have mechanically produced a ~$0.85 print is **disproven**: sUSDe has never sustained a sub-$1 price (its own all-time-low is about $1.01), and the $0.8734 reUSD print (dated July 17, 2025, roughly one month after inception) occurred when sUSDe's NAV was already ~$1.13+ — so a redeem-then-dump of a sUSDe payout could not have marked reUSD at $0.87. Across its full history reUSD's market price has tracked NAV to within a few basis points; the clean NAV-tracking record stands and no downward volatility revision fires.

## What the contracts are doing

- **Token contract:** ERC-1967 upgradeable proxy at `0x5086bf358635b81d8c47c66d1c8b9e567db70c72` (Ethereum). NAV is set via off-chain feed; this is not an ERC-4626 vault.
- **Custody:** Crypto leg on **Fireblocks MPC** multisig; off-chain leg in an independent U.S. trust bank's §114 Reinsurance Trust Account
- **Attestations:** Daily reserve attestations by The Network Firm; **Chainlink Proof of Funds** publishes 24/7 hashed trust balances + premium/claim flow on-chain
- **Annual audit:** Grant Thornton (Cayman) — Big-6 accounting firm
- **Upgrade authority:** Gated by AccessControl roles managed via Fireblocks MPC multisig. On-chain timelock not visible on the proxy interface; verify with Re Protocol before sizing significant positions
- **Cross-chain bridge:** As of July 2026, reUSD's cross-chain distribution migrated from a **LayerZero OFT to Chainlink CCIP as the exclusive bridge**. For a holder this modestly reduces bridge-configuration attack surface but concentrates cross-chain liveness on a single provider. Supported chains are unchanged (Ethereum, Arbitrum, Base, Avalanche), and tradable liquidity remains Ethereum-concentrated.

The thing to internalize: **the smart contract doesn't hold the reinsurance.** Reinsurance contracts and trust-account assets are off-chain instruments held by a U.S. trust bank for the BVI issuer. On-chain reads tell you the token supply and the Chainlink-attested NAV — the underlying credit exposure is a TradFi reinsurance program.

## Audits & security

- **Hacken (Aug 2024):** 0 Critical, 0 High, 4 Medium, 7 Low, 18 Observations on the version audited
- **Current implementation `0xb5276c43...DEb4a21D4` is NOT associated with a published audit on Etherscan.** The Hacken audit is ~21 months stale relative to the live logic. Treat the current contract as effectively unaudited until Re Protocol publishes a re-audit.
- **No bug bounty disclosed publicly** — gap relative to mature DeFi protocols. The off-chain auditing posture (Grant Thornton annual + Network Firm daily) compensates partially for the asset-class but not the contract-layer.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 7.0 | NAV path smooth ($1.00 → $1.08 over 11 months, consistent with the target rate). Vault-share peg (read as discount-to-NAV, not absolute price vs $1): early-launch dips imply ~1–3% discount-to-NAV at the worst, near-zero deviation from late 2025 onward. Capped below "very tight" because (a) the 11-month history is short, (b) insurance loss patterns are back-loaded, and (c) the structural setup that could produce a deeper detachment remains in place. |
| Liquidity | 5.0 | DEX-only (no CEX listing), Ethereum-concentrated — Fluid + Curve carry effectively all meaningful depth across the four supported chains. Real DEX exit liquidity is ~$28M/month against a ~$162M market cap — functional for retail-size, thin for institutional-size. Primary redemption at NAV works for non-U.S. holders (moots the question for that cohort). |
| Structural | 5.5 | ERC-1967 upgradeable proxy with Fireblocks MPC admin; 21-month-stale Hacken audit on current implementation; substantial off-chain dependency stack (trust bank, insurance carriers, Network Firm, Chainlink, Fireblocks, Grant Thornton). |
| Redemption | 4.5 | **Binding constraint for U.S. holders.** Non-U.S. persons get tiered NAV redemption (50%+ instant buffer), but on Mainnet the payout asset is **sUSDe, not USD** — a clean-dollar exit requires a second-leg sUSDe → USDC swap. U.S. persons get DEX exit only. Only Avalanche primary-redemption holders get a clean USDC payout. The §II.4 asymmetry remains structural and unmitigated; has not produced an observable detachment in 11 months of trading. |
| **Overall** | **5.5** | Moderate risk — credibly built for the asset class, with three structural caveats that cap the score: U.S.-cohort exit asymmetry, Mainnet sUSDe-payout exit-asset risk, and a stale audit relative to the live implementation. |

## Who it's for

- **Non-U.S. yield-seekers** comfortable with regulated RWA exposure who want tokenized senior reinsurance with on-chain composability. Treat as a 5-10% portfolio sleeve, not a stablecoin substitute.
- DeFi users who specifically want **multi-chain availability** for an RWA position and are comfortable with DEX-only secondary exit (no CEX listing).

## Who should avoid

- **U.S. persons looking for a redeem-at-par stablecoin substitute.** Primary redemption is unavailable; exit is DEX-only. The structural exit-asymmetry that has produced -5% to -15% detachments on other tokenized RWAs has not yet materialized for reUSD, but the setup is unchanged and 11 months without a real stress event is not the same as resilience to one.
- **Anyone leveraging on a venue using a market-priced oracle.** A secondary-market detachment would trigger liquidations even if Re Protocol's NAV is unimpaired. NAV-priced oracle is the only defensible configuration.
- Anyone who needs a fully on-chain trustless instrument. reUSD has substantial off-chain dependencies (U.S. trust bank, reinsurance carriers, Chainlink feed liveness, Fireblocks operational continuity).

## What to watch

- **[Re Protocol's issuer dashboard](https://app.re.xyz/reusd)** is the primary source. Current APY, TVL, supply, and historical yield/price/TVL charts are all updated in real time by the issuer. Chainlink Proof of Reserves feed is linked from there.
- **NAV vs market price spread.** Target <50bps in calm conditions; >200bps is a stress signal worth attention.
- **Ethena sUSDe basis trade health.** reUSD's on-chain sleeve depends on this; an Ethena depeg or basis collapse hits the asset side directly.
- **Audit publication for the current implementation.** The Hacken audit is ~21 months stale. Re-audit publication closes a meaningful gap.
- **reUSDe (sibling) capacity.** reUSDe is the mezzanine layer that protects reUSD from underwriting losses. If reUSDe TVL contracts significantly relative to total underwriting, reUSD's loss buffer thins. [reUSDe](/reports/reusde-re/) opened its **first-ever redemption window (July 9–22, 2026)** — the first live test of the second-loss layer's redemption machinery. Orderly settlement there is a leading indicator for senior-tranche liquidity; a stressed mezzanine redemption would be an early warning.

## A note on the tranche structure

reUSD is the **senior** layer in a three-tier waterfall: Re Protocol's own equity (Re calls this "junior tranche capital") absorbs losses first, then the [reUSDe mezzanine tranche](/reports/reusde-re/), and only then reUSD. The relative sizing of these layers vs. the size of the underlying reinsurance book is what matters for solvency — and that ratio is not publicly disclosed in granular form. The structure says reUSD is well-protected; the structure has not been stress-tested by a real underwriting loss yet (Re Protocol launched June 2025).

## A note on Re Points and the $RE token

Re Protocol runs a loyalty points program prominently surfaced on the asset dashboard. Current multipliers for reUSD strategies: Pendle YT 30x, Pendle LP 30x, Fluid 5x–20x. On **June 18, 2026 the program monetized: Re Protocol launched $RE**, a governance token (fixed 1B supply, no emissions) that governs the protocol's policy, upgrade, and transparency layer, with Season-1 points holders claiming at the token generation event. That resolves the earlier "points have no token" caveat — Season-1 accrual is now a realized, liquid asset rather than pure optionality. Forward multipliers (Season-2 terms and continued value) are still not guaranteed, so **treat ongoing points as marketing optionality, not yield** — net APY estimates should not include unrealized points absent a published valuation.

---

*This report is based on Re Protocol's public documentation, on-chain reads, and the live transparency dashboard at [app.re.xyz](https://app.re.xyz) through 2026-07-13. Some information depends on issuer disclosures (specific trust bank counterparty, individual reinsurance carriers, reUSDe vs reUSD layer sizing) that are not yet independently verified. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
