---
asset: "USDat"
slug: "usdat"
aliases: ["USDat", "Saturn USDat"]
chains: ["eth", "bsc"]
category: "stablecoin"
peg_mechanism: "PYUSDx reserves (MoonPay/M0/PYUSD)"
assessment_type: "light"
companion_report: "susdat"
date: "2026-05-20"
last_verified: "2026-08-23"
last_revised: "2026-10-14"
# Partial refresh: dated dashboard observations and current public documentation.
# Full role enumeration, reserve look-through and redemption simulations outstanding.
# PARKED: liquidity 5.5 carried; current secondary-only calculation is 5.0 and primary access remains unmeasured [owner: riskAnalyst] [since: 2026-10-14]
# PARKED: issuer 5.0 carried; re-derive against current BVI terms and updated migration disclosures [owner: riskAnalyst] [since: 2026-10-14]
featured: false
production: true
issuer: "Saturn Labs"
axis_frame: six
peg_mechanism_score: 6.5
backing_score: 5.5
underlying_score: 5.0
structural_score: 4.0
liquidity_score: 5.5
issuer_score: 5.0
overall_score: 4.5
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usdat"
---

# USDat — Risk Report

**Moderate-elevated risk · 4.5/10**

Non-yield USD stablecoin · PYUSDx reserves · Saturn Labs.

[Live backing and liquidity dashboard](https://tidresearch.com/dashboards/?asset=usdat)

## Summary

USDat is Saturn's dollar stablecoin for settlement and liquidity. Its Ethereum contract holds PYUSDx, a reserve token issued by MoonPay on M0 infrastructure and backed by PYUSD by design. PYUSD is the separate Paxos-issued stablecoin. USDat holders receive no reserve yield; [sUSDat](/reports/susdat/) is Saturn's yield-bearing product with a predominantly STRC reserve.

At **2026-10-14 03:45 UTC**, Ethereum supply and PYUSDx holdings both measured **97.32M units**. The Curve price was **$0.999832**, and indicative USDC exit quotes remained close to face value through $2M. The principal concerns are the unverified PYUSDx reserve look-through, a legacy accounting accessor that excludes the actual reserve, permissioned access and dependence on one main secondary venue.

The **4.5 overall score is below the six-axis mean of 5.25**. It reflects reserve-verification and access constraints. The authored scores are carried; current liquidity and issuer inputs require further assessment, as specified below.

## 1 · Stability — 6.5

USDat targets one dollar through reserve conversion and market arbitrage. Saturn describes minting and USDC redemption through its interface for onboarded users. Holding the token produces no yield; reserve income belongs to the protocol. [USDat overview](https://saturncredit.gitbook.io/saturn-docs/solution/usdat-overview)

The October 14 Curve observation was **1.68 basis points below $1**. The dashboard's completed 30-day peg-band measurement was **9.38 basis points**. These observations describe the quoted market band, rather than uninterrupted redemption at par. [Dated observations](/evidence/saturn/usdat-2026-10-14.json)

**Risks and limitations.** A close secondary price does not establish current primary-redemption availability. Access restrictions, reserve conversion and operational interruptions can prevent an individual holder from realizing the displayed peg. The 6.5 is a carried qualitative assessment.

## 2 · Backing — 5.5

The Ethereum token contract holds **97,317,230.63 PYUSDx against 97,317,230.63 USDat**. USDC and the former M reserve both measured zero. The **1.000000 holdings-to-supply ratio** values PYUSDx at one dollar; it verifies reserve-token units, not the ultimate dollars or Treasuries behind them. [Reserve observations](/evidence/saturn/usdat-2026-10-14.json)

The reserve chain is **USDat → PYUSDx → PYUSD → cash and short-dated Treasuries**. MoonPay identifies **MoonPay Digital Assets Limited** as PYUSDx's issuer and reserve manager. PYUSDx conversion adds an intermediary between USDat and the regulated PYUSD reserve. [MoonPay's framework description](https://www.moonpay.com/enterprise/pyusdx)

Saturn's current repository documents the migration from M to PYUSDx. The older product overview still describes M-backed reserves. The observed composition agrees with the current repository, while the overview is stale. [Migration repository](https://github.com/saturn-organization/saturn-dollar), [product overview](https://saturncredit.gitbook.io/saturn-docs/solution/usdat-overview)

Ethereum supply includes **54,289,416.96 USDat in CCIP bridge custody**, or **55.79% of Ethereum supply**. BNB Chain separately reports **189,631.00 local tokens**, with no backing accessor. Ethereum locks while the destination mints, so adding these supplies would double-count bridged claims. Other destinations and the locked balance have not been fully reconciled; global supply and a global reserve ratio remain unresolved.

**Risks and limitations.** No independently verified PYUSDx reserve allocation or token-specific attestation establishes the full look-through for these holdings. BNB backing is unread, rather than measured at zero. The carried 5.5 depends on PYUSDx retaining its value and convertibility.

## 3 · Liquidity & Exit — 5.5

Holders have two potential exits: sell on a secondary market, or use Saturn's primary conversion interface if eligible. The main measured secondary venue is Ethereum Curve USDat/USDC, holding **$6.67M**, or **6.85% of Ethereum supply**. Its 24-hour turnover was **$533,087**, approximately **7.99% of pool value**.

Indicative USDC router quotes at **2026-10-14 03:45 UTC** were:

| Dollar notional offered | Quoted USDC proceeds | Proceeds / notional |
|---|---:|---:|
| $10,000 | $9,998.26 | 99.9826% |
| $100,000 | $99,977.18 | 99.9772% |
| $500,000 | $499,760.82 | 99.9522% |
| $1,000,000 | $999,157.42 | 99.9157% |
| $2,000,000 | $1,995,722.83 | 99.7861% |
| $5,000,000 | $3,291,161.93 | 65.8232% |

These are the dashboard's dollar-notional quotes, not token quantities or executed fills. Proceeds include route swap effects and spread; gas is additional. The 2% price-impact crossing is bracketed between $2M and $5M. The last passing rung does not locate an exact maximum exit size. [Quote snapshot](/evidence/saturn/usdat-2026-10-14.json)

Historical router activity demonstrates that an eligible holder redeemed substantial size in August. A current arbitrary-holder redemption simulation was not performed. Product documentation describes onboarding restrictions, while the interface terms condition primary minting on verification and distinguish access to other functions. Actual redemption eligibility must be established for the selected address. [Product overview](https://saturncredit.gitbook.io/saturn-docs/solution/usdat-overview), [interface terms](https://saturn.credit/legal/terms-conditions)

**Risks and limitations.** For a holder without a proven primary route, secondary depth and single-venue concentration bind the exit. Primary settlement remains incompletely measured. The authored **5.5 is carried**, whereas the current secondary-only dashboard calculation is **5.0**; that calculation does not establish the merged Liquidity & Exit score. Neither a past redemption nor a near-par quote guarantees a present fill.

## 4 · Dependencies — 5.0

USDat relies on **Saturn, MoonPay/PYUSDx, M0 infrastructure and Paxos/PYUSD**. Its reserve passes through one PYUSDx intermediary, with no independent reserve path. The USDC trading venue adds Circle and Curve exposure. Bridged holdings add CCIP messaging, remote controls and reconciliation of locked versus minted supply.

USDat and sUSDat share Saturn's administrative timelock. Holding both retains common issuer and governance exposure, although their reserves differ: USDat holds PYUSDx; sUSDat mainly carries a claim on STRC.

**Risks and limitations.** A sound terminal reserve cannot remove conversion or administrative failures in intervening layers. The complete bridge destination set and remote authority paths are unassessed. The carried 5.0 reflects concentration in one intermediary and common operational dependencies.

## 5 · Contract & Admin — 4.0

USDat's Ethereum deployment is a transparent proxy. Its ProxyAdmin owner and token admin role resolve to SaturnTimelock. Retained reads show a **432,000-second, five-day delay**, self-administration and permissionless execution after an operation matures. The timelock provides public notice before governed upgrades and role changes.

| Component | Ethereum address |
|---|---|
| USDat token | `0x23238f20b894f29041f48D88eE91131C395Aaa71` |
| Live implementation | `0x496a4A33b6181F4536203488d9a05AC1429E702c` |
| ProxyAdmin | `0xcf1072da5f0d127aef99136489bad08bfa3d1a7d` |
| SaturnTimelock | `0xfD5782E3BFF366601da3973aE30C583dE4F08A67` |
| Observed proposer and canceller | `0x610182581C93687Ca03F4a8E7f124f8cEC616820` |

The current issuer repository names the same implementation, ProxyAdmin and timelock as the measured deployment, and documents whitelist, freeze and forced-transfer functions. **Implementation identity agrees with that repository**; an older address baseline still used by the dashboard differs. Independent deployed-bytecode matching was not established in this pass. [Issuer repository](https://github.com/saturn-organization/saturn-dollar), [authority observations](/evidence/saturn/usdat-2026-10-14.json)

The same observed address holds proposer and canceller permissions, with no visible on-chain signing quorum. Saturn's Fireblocks 2-of-3 custody representation is inherited and not independently attested. Zero code cannot distinguish an ordinary private key from MPC custody. Candidate role checks also do not enumerate every possible holder. The delay can be changed through a delayed action, so five days is the current setting rather than a permanent floor.

The legacy `totalAssets()` accessor reports **zero** despite the measured PYUSDx holdings. The dashboard also reports `isAllowedAsset(PYUSDx) = false`. This is an accounting-interface divergence; compatibility with the new implementation's accounting requires checking before treating those legacy calls as a complete reserve calculation. An accessor's zero result does not establish a reserve shortfall.

**Risks and limitations.** Current forced-transfer and freeze authorizations were not fully enumerated; a delay on appointing a role does not establish a delay on its use. Published audit materials include migration reports, but exact deployed-code and privileged-role coverage has not been mapped. Current bug-bounty coverage is unverified. Ethereum observations and partial BNB supply reads establish no complete remote control assessment. The notice period only permits exit if that holder's exit remains available. These gaps constrain the carried 4.0.

## 6 · Issuer — 5.0

Saturn Labs is the project name. The interface operator is **Saturn Global Capital Investments Ltd., a British Virgin Islands limited company**. BVI law applies; disputes generally require a 60-day informal process then confidential, single-arbitrator BVI IAC arbitration. Class actions are waived and a six-month filing limit applies, subject to exceptions. [Terms, §§21–22](https://saturn.credit/legal/terms-conditions)

The repository explains the PYUSDx migration while the product overview still describes M reserves. This is inconsistent disclosure across issuer sources; it does not establish an unannounced migration. Historical redemptions demonstrate fulfilled transactions rather than a reserve claim for every holder.

**Risks and limitations.** Legal principals, beneficial ownership, entity financial audit and a direct holder reserve claim remain unverified. Team and funding claims are inherited, not independently re-established. **Issuer 5.0 is carried, not re-derived against the current terms and disclosures.** Contract assurance belongs under Contract & Admin.

## Who this is for

Eligible users seeking a non-yield settlement token who can verify conversion access and size secondary exits against actual quotes. USDat is less suited to unrestricted DeFi use, reserve transparency through every intermediary, or large exits dependent on one pool.

## What to watch

- PYUSDx holdings against Ethereum supply, and evidence of the PYUSD reserves allocated behind them.
- Primary redemption eligibility and settlement for the actual holder address.
- Pool inventory, dollar-notional exit quotes and turnover; TVL alone is not sellable capacity.
- Bridge custody and destination supply reconciliation. Structural bridge and wrapper balances are not individual beneficial owners.
- Timelock operations, compliance-role holders and changes to the delay.
- Agreement between product documentation, current repository and deployed accounting interfaces.

## Evidence and scope

Numerical observations are frozen at **2026-10-14 03:45:41 UTC**, with Ethereum state recorded at block **26,188,131** in the [retained snapshot](/evidence/saturn/usdat-2026-10-14.json). They were read from the public dashboard; contract calls, bytecode verification and redemption simulations were not independently rerun. This partial refresh covers measurements and public documentation. Historical transaction findings and authored scores are inherited. Full reserve look-through, remote controls and primary access remain incomplete.

## Revision history

- **2026-10-14 — measurements and presentation refreshed.** Updated holdings, supply, bridge scope, peg and exit quotes; reconciled the live implementation with the current issuer repository; added the BVI operator and recourse terms. Removed obsolete global-supply arithmetic and consolidated qualifications. Scores unchanged.
- **2026-10-04 — turnover assessment refreshed.** Recorded lower pool turnover; Liquidity & Exit remained 5.5.
- **2026-09-09 — six-axis assessment adopted.** Dependencies 5.0 and Contract & Admin 4.0; Overall 4.5.
- **2026-08-29 — reserve and redemption observations refreshed.** Recorded Ethereum reserve-token coverage and partial BNB scope.
- **2026-08-23 — PYUSDx reserve migration assessed.** Backing 5.5, Issuer 5.0 and Overall 4.5.
