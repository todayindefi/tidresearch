---
asset: "USDat"
slug: "usdat"
aliases: ["USDat", "Saturn USDat"]
chains: ["eth", "bsc", "monad"]
category: "stablecoin"
peg_mechanism: "PYUSDx reserves (MoonPay/M0/PYUSD)"
assessment_type: "light"
companion_report: "susdat"
date: "2026-05-20"
last_verified: "2026-08-23"
last_revised: "2026-10-14"
# Partial refresh: dated dashboard observations and current public documentation.
# Source and main-file audit parity verified in the October 14 reassessment.
# Full dependency parity, custody, bridge powers and eligible-holder exit remain outstanding.
# Ruling: /home/danger/riskAnalyst/specs/usdat-score-reassessment-2026-10-14.md
# PARKED: complete PYUSDx audit parity, custody/redemption and bridge bypass verification [owner: riskAnalyst] [since: 2026-10-14]
# PARKED: issuer 5.0 carried; re-derive against current BVI terms and updated migration disclosures [owner: riskAnalyst] [since: 2026-10-14]
featured: false
production: true
issuer: "Saturn Labs"
axis_frame: six
peg_mechanism_score: 6.5
backing_score: 5.5
underlying_score: 5.0
structural_score: 4.5
liquidity_score: 5.0
issuer_score: 5.0
overall_score: 4.5
audited_reserves: false
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=usdat"
---

# USDat — Risk Report

**Moderate-elevated risk · 4.5/10** · Provisional

Non-yield USD stablecoin · PYUSDx reserves · Saturn Labs.

[Live backing and liquidity dashboard](https://tidresearch.com/dashboards/?asset=usdat)

## Summary

USDat is Saturn's dollar stablecoin for settlement and liquidity. Its Ethereum contract holds PYUSDx, a reserve token issued by MoonPay on M0 infrastructure and backed by PYUSD by design. PYUSD is the separate Paxos-issued stablecoin. USDat holders receive no reserve yield; [sUSDat](/reports/susdat/) is Saturn's yield-bearing product with a predominantly STRC reserve.

At **2026-10-14 03:45 UTC**, Ethereum supply and PYUSDx holdings both measured **97.32M units**. The Curve price was **$0.999832**, and indicative USDC exit quotes remained close to face value through $2M. The current implementation matches verified source and Saturn's published address. The principal constraints are upstream custody, eligible-holder primary settlement, dependence on one main secondary venue and material remote bridge controls. Ordinary holding and transfers are not whitelist gated; primary wrap/unwrap eligibility and compliance powers are separate controls.

The **4.5 overall score is below the six-axis mean of 5.25**. The provisional judgment reflects serial custody, conversion and settlement dependencies rather than a reserve shortfall. Tight trading and direct reserve-token coverage do not establish a dependable end-to-end exit for every holder. The six axes incorporate the October 14 reassessment; issuer and remaining verification limits are specified below.

## 1 · Stability — 6.5

USDat targets one dollar through reserve conversion and market arbitrage. Saturn describes minting and USDC redemption through its interface for onboarded users. Holding the token produces no yield; reserve income belongs to the protocol. [USDat overview](https://saturncredit.gitbook.io/saturn-docs/solution/usdat-overview)

The October 14 Curve observation was **1.68 basis points below $1**. The dashboard's completed 30-day peg-band measurement was **9.38 basis points**. These observations describe the quoted market band, rather than uninterrupted redemption at par. [Dated observations](/evidence/saturn/usdat-2026-10-14.json)

**Risks and limitations.** A close secondary price does not establish current primary-redemption availability. Access restrictions, reserve conversion and operational interruptions can prevent an individual holder from realizing the displayed peg. The 6.5 reflects current peg tightness alongside eligibility-dependent primary arbitrage.

## 2 · Backing — 5.5

The Ethereum token contract holds **97,317,230.63 PYUSDx against 97,317,230.63 USDat**. The independently pinned reassessment at Ethereum block **26,188,755** matched supply and PYUSDx to **97,317,230.625410 units** each, with zero alternative assets. The earlier market snapshot also measured USDC and M balances at zero. The **1.000000 holdings-to-supply ratio** values PYUSDx at one dollar; it verifies reserve-token units, not the ultimate dollars or Treasuries behind them. [Pinned coverage and technical findings](/evidence/saturn/usdat-reassessment-2026-10-14.json)

The reserve chain is **USDat → PYUSDx → PYUSD → cash and short-dated Treasuries**. MoonPay identifies **MoonPay Digital Assets Limited** as PYUSDx's issuer and reserve manager. PYUSDx conversion adds an intermediary between USDat and the regulated PYUSD reserve. [MoonPay's framework description](https://www.moonpay.com/enterprise/pyusdx)

Saturn's current repository documents the migration from M to PYUSDx. The older product overview still describes M-backed reserves. The observed composition agrees with the current repository, while the overview is stale. [Migration repository](https://github.com/saturn-organization/saturn-dollar), [product overview](https://saturncredit.gitbook.io/saturn-docs/solution/usdat-overview)

Ethereum supply includes **54,289,416.96 USDat in CCIP bridge custody**, or **55.79% of Ethereum supply**. Asynchronous remote reads found **54,103,498.04 USDat on Monad** and **189,631.00 on BNB Chain**. Monad alone represents approximately **55.6% of canonical Ethereum gross issuance**, making its transport controls material. Ethereum locks while destinations mint, so adding remote supply to Ethereum issuance would double-count bridged claims.

The combined remote reads exceed the lockbox read by **3,712.09 USDat, approximately 0.0068% of the locked balance**. Different read times and messages in transit require reconciliation; the difference is not a proved backing deficit. No aligned global circulating-supply or reserve calculation is established. [Bridge and coverage observations](/evidence/saturn/usdat-reassessment-2026-10-14.json)

**Risks and limitations.** MoonPay custody is outside the PYUSDx token address. A zero PYUSD balance at that token does not establish missing reserves. Reserve/liability reconciliation, segregation and a token-specific attestation remain independently unverified. The 5.5 reflects verified direct token coverage with incomplete upstream assurance; smart-contract audits and PYUSD attestations do not establish USDat reserve attestation.

## 3 · Liquidity & Exit — 5.0

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

Historical router activity demonstrates that an eligible holder redeemed substantial size in August. A current arbitrary-holder redemption simulation was not performed. Product documentation describes onboarding restrictions, while the interface terms condition primary minting on verification and distinguish access to other functions. Ordinary token holding and transfers do not require whitelisting, but the deployed primary wrap/unwrap path retains eligibility checks. Actual redemption eligibility must be established for the selected address. [Product overview](https://saturncredit.gitbook.io/saturn-docs/solution/usdat-overview), [interface terms](https://saturn.credit/legal/terms-conditions)

The reassessment's **2026-10-14 04:45:42 UTC** venue snapshot sets **Liquidity & Exit at 5.0**: its venue rubric combines a depth tier of 6.0, peg adjustment +0.5, single-venue adjustment −1.0, zero turnover adjustment and pool/supply adjustment −0.5. Its effective under-25-basis-point capacity input is **$333,505**; this rubric input is distinct from the broader router ladder above. These are Ethereum measurements, not measured Monad depth.

**Risks and limitations.** For a holder without a proven primary route, secondary depth and single-venue concentration bind the exit. Primary settlement remains incompletely measured. MoonPay accepts direct PYUSDx minting and redemption only from eligible counterparties; indirect holders have no direct issuer-redemption right. A full USDat → PYUSDx → PYUSD/USDC exit still needs eligibility, fees, inventory and timing verification. Neither historical transactions nor indicative quotes guarantee a present fill. [MoonPay terms](https://www.moonpay.com/legal/pyusdx_terms)

## 4 · Dependencies — 5.0

USDat relies on **Saturn, MoonPay/PYUSDx, M0 infrastructure and Paxos/PYUSD**. Its reserve passes through one PYUSDx intermediary, with no independent reserve path. The USDC trading venue adds Circle and Curve exposure. Bridged holdings add CCIP messaging, remote controls and reconciliation of locked versus minted supply.

USDat and sUSDat share Saturn's administrative timelock. Holding both retains common issuer and governance exposure, although their reserves differ: USDat holds PYUSDx; sUSDat mainly carries a claim on STRC.

**Risks and limitations.** A sound terminal reserve cannot remove conversion or administrative failures in intervening layers. Monad holds a material share of the transported supply. Its token and bridge pool have different authorities and delays; Ethereum's five-day upgrade window does not protect every remote surface. The 5.0 reflects reserve-token concentration, shared operations and incomplete mapping of upstream settlement and transport controls.

## 5 · Contract & Admin — 4.5

USDat's Ethereum deployment is a transparent proxy. Its ProxyAdmin owner and token admin role resolve to SaturnTimelock. Retained reads show a **432,000-second, five-day delay**, self-administration and permissionless execution after an operation matures. The timelock provides public notice before governed upgrades and role changes.

| Component | Ethereum address |
|---|---|
| USDat token | `0x23238f20b894f29041f48D88eE91131C395Aaa71` |
| Live implementation | `0x496a4A33b6181F4536203488d9a05AC1429E702c` |
| ProxyAdmin | `0xcf1072da5f0d127aef99136489bad08bfa3d1a7d` |
| SaturnTimelock | `0xfD5782E3BFF366601da3973aE30C583dE4F08A67` |
| Observed proposer and canceller | `0x610182581C93687Ca03F4a8E7f124f8cEC616820` |

The deployed implementation matches Saturn's current published address and verified source. The reassessment independently matched live runtime bytes to Sourcify's exact match and found the main `USDat` source identical to Adevar's audit-final commit. July migration audits from Adevar and Halborn are published. Full audit parity of inherited PYUSDx dependencies remains unresolved; main-file agreement does not establish the entire dependency tree or all privileged-role coverage. [Published deployment](https://github.com/saturn-organization/saturn-dollar), [Adevar audit](https://github.com/saturn-organization/saturn-dollar/blob/main/audits/Adevar-PYUSDx-migration-audit-report.pdf), [verification findings](/evidence/saturn/usdat-reassessment-2026-10-14.json)

The same observed address holds proposer and canceller permissions, with no visible on-chain signing quorum. Saturn's Fireblocks 2-of-3 custody representation is inherited and not independently attested. Zero code cannot distinguish an ordinary private key from MPC custody. Candidate role checks also do not enumerate every possible holder. The delay can be changed through a delayed action, so five days is the current setting rather than a permanent floor.

`totalAssets()` measures **non-PYUSDx alternative assets**. Primary PYUSDx backing is accounted separately, so **zero is valid for an all-PYUSDx reserve**. `isAllowedAsset(PYUSDx) = false` is also expected for the primary asset. These values do not imply rejected collateral, a reserve shortfall or a failed redemption denominator. The implementation disables both inherited version pin/unpin selectors; generic extension behavior does not establish an upgrade bypass here.

Remote token administration and bridge governance are separate surfaces:

| Surface | Verified delay | Scope and limits |
|---|---|---|
| Ethereum proxy administration | Five days | Governs token upgrades and relevant role changes |
| BNB token administration | Two days | Does not establish BNB bridge-pool protection |
| Monad token administration | Two days | Distinct from its pool owner |
| Monad bridge-pool owner | Three hours | RBACTimelock with two verified bypass-role members; not unconditional delay protection |

The Monad pool is `0x8ab40e2dabcd24dcff0a06a68eb59990405270f0`; its owner is `0x0c43bb1a15a1ff1cbddff2b8f9518c1b0d3b17e2`. Its two enumerated `BYPASSER_ROLE` members are `0xfb8c97bd8a6bc3646a478ba9b8dba5c923a0f225` and `0xfa546248c54939aa6c48279cdc1eaf9a1125c411`. Role existence and membership are verified; exact bypass methods, blocked selectors and controller signing thresholds remain unresolved. The separate Monad token timelock is `0xf0237a1cb794ea830129966049ef99243082ff0c`. [Role and delay evidence](/evidence/saturn/usdat-reassessment-2026-10-14.json)

**Risks and limitations.** Current compliance powers, upstream SwapFacility/issuer-gateway authority, complete dependency audit parity and bridge lane limits require further verification. Current bug-bounty coverage is unverified. The role enumeration is complete only for Monad's pool owner, not every chain's controls. The notice period only permits exit if the holder's settlement path remains available. **Contract & Admin 4.5 is provisional**, reflecting verified Ethereum implementation and main-file audit agreement alongside unresolved remote and upstream powers.

## 6 · Issuer — 5.0

Saturn Labs is the project name. The interface operator is **Saturn Global Capital Investments Ltd., a British Virgin Islands limited company**. BVI law applies; disputes generally require a 60-day informal process then confidential, single-arbitrator BVI IAC arbitration. Class actions are waived and a six-month filing limit applies, subject to exceptions. [Terms, §§21–22](https://saturn.credit/legal/terms-conditions)

The repository explains the PYUSDx migration while the product overview still describes M reserves. This is inconsistent disclosure across issuer sources; it does not establish an unannounced migration. Historical redemptions demonstrate fulfilled transactions rather than a reserve claim for every holder.

**Risks and limitations.** Legal principals, beneficial ownership, entity financial audit and a direct holder reserve claim remain unverified. Team and funding claims are inherited, not independently re-established. **Issuer 5.0 is carried, not re-derived against the current terms and disclosures.** Contract assurance belongs under Contract & Admin.

## Who this is for

Eligible users seeking a non-yield settlement token who can verify conversion access and size secondary exits against actual quotes. Ordinary holding is open to non-whitelisted addresses subject to compliance controls; this does not grant primary redemption access. USDat is less suited to holders needing reserve transparency through every intermediary or large exits dependent on one pool.

## What to watch

- PYUSDx holdings against Ethereum supply, and evidence of the PYUSD reserves allocated behind them.
- Primary redemption eligibility and settlement for the actual holder address.
- Pool inventory, dollar-notional exit quotes and turnover; TVL alone is not sellable capacity.
- Bridge custody and destination supply reconciliation. Structural bridge and wrapper balances are not individual beneficial owners.
- Timelock operations, compliance-role holders and changes to the delay.
- Upstream custody segregation, complete dependency audit parity and the powers of remote bridge bypass-role holders.

## Evidence and scope

Numerical observations are frozen at **2026-10-14 03:45:41 UTC**, with Ethereum state recorded at block **26,188,131** in the [retained snapshot](/evidence/saturn/usdat-2026-10-14.json). The market ladder is retained from the public dashboard. The separate [October 14 technical reassessment](/evidence/saturn/usdat-reassessment-2026-10-14.json) pins Ethereum coverage at block **26,188,755** and supplies runtime/source comparison, main-file audit parity, transfer/accounting semantics and remote authority observations. These retained research findings were reviewed for this update; calls and simulations were not rerun here. Cross-chain balances are asynchronous. Full dependency parity, upstream custody and eligible-holder settlement remain incomplete; this is not a whole-report verification stamp.

## Revision history

- **2026-10-14 — score reassessment incorporated.** Withdrawn the alleged accounting defect and obsolete implementation-drift finding; zero alternative assets is valid and the implementation matches source and the published deployment. Liquidity & Exit 5.5 → 5.0; Contract & Admin 4.0 → 4.5 provisional; Overall 4.5 provisional. Added material Monad bridge exposure, separate token/pool delays and bypass-role uncertainty.

- **2026-10-14 — measurements and presentation refreshed.** Updated holdings, supply, bridge scope, peg and exit quotes; reconciled the live implementation with the current issuer repository; added the BVI operator and recourse terms. Removed obsolete global-supply arithmetic and consolidated qualifications. Scores unchanged.
- **2026-10-04 — turnover assessment refreshed.** Recorded lower pool turnover; Liquidity & Exit remained 5.5.
- **2026-09-09 — six-axis assessment adopted.** Dependencies 5.0 and Contract & Admin 4.0; Overall 4.5.
- **2026-08-29 — reserve and redemption observations refreshed.** Recorded Ethereum reserve-token coverage and partial BNB scope.
- **2026-08-23 — PYUSDx reserve migration assessed.** Backing 5.5, Issuer 5.0 and Overall 4.5.
