---
asset: USDtb
slug: usdtb
aliases:
- USDtb
- USDTB
- Ethena USDtb
chains:
- eth
- solana
category: stablecoin
assessment_type: full
date: '2026-06-07'
last_verified: '2026-11-17'
underlying_assets:
- BlackRock BUIDL
- cash
yield_bearing: false
peg_mechanism_score: 7.0
backing_score: 8.0
liquidity_score: 6.0
issuer_score: 7.0
overall_score: 6.0
issuer: Anchorage Digital Bank, N.A.
audited_reserves: true
last_revised: '2026-11-17'
score_status: assessed
score_assessed: '2026-11-17'
evidence_version: BM:bm-material-collateral-financial-primary-v3;DA:xaut-usdtb-terms-v1;Security:material-collateral-security-2026-11-17-v2
assessment_version: usdtb-six-axis-2026-11-17-v1
denomination: USD
underlying_score: 6.0
structural_score: 3.5
production: true
trust_disclaimer: false
selected_evidence_sha256: 59ded5db239c15a265bac480c1da9cf68a02027c76d77af52ae6734cb938324f
token_address: '0xc139190f447e929f090edeb554d95abb8b18ac1c'
axis_frame: six
assessment_status: complete
axis_assessment_status:
  volatility_score: assessed
  backing_score: assessed
  liquidity_score: assessed
  underlying_score: assessed
  structural_score: assessed
  issuer_score: assessed
chain_overrides:
  solana:
    peg_mechanism_score: null
    backing_score: null
    liquidity_score: null
    underlying_score: null
    structural_score: null
    issuer_score: null
    overall_score: null
unassessed_chains:
- solana
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_th]:min-w-[8rem] [&_td:not(:first-child)]:whitespace-nowrap" data-selected-report="lending-closure-2026-11-17">

# USDtb — Risk Report

**Moderate risk · 6.0/10**

## Summary

Ethereum USDtb is a reserve-backed dollar token whose sole issuer/obligor is **Anchorage Digital Bank, N.A.** Dated Deloitte reserve examination supports high-quality BUIDL/cash backing, and finite Ethereum quotes show near-dollar secondary realization at the measured sizes. Primary redemption is restricted to bank Clients. Concentrated token/upgrade authority without a verified on-chain multisig/timelock, concentrated fund dependencies and unmeasured current global coverage limit the grade. No new material reserve shortfall is established.

## 1 · Stability — 7.0

The economic target is one USD per token, supported by reserve valuation and eligible Client issuance/redemption. Secondary arbitrage depends on access to those Clients and bank processing, not permissionless conversion for every holder. At November 17 07:25:49–50 UTC, indicative USDC outputs were close to the input token count at 1,000/10,000/100,000 sizes. USDC=$1 is an assumption, not independently verified dollar parity. These are finite executable-route indications, not settled transactions or a maintained full peg/stress history.

## 2 · Backing — 8.0

The [September 30 reserve examination](https://learn.anchorage.com/09.30.26_USDtb-Stablecoin-Attestation-Report-signed.pdf), signed October 26, reports **$538,401,872 reserves** against **537,487,768 redeemable tokens**, a dated **$914,104 surplus / approximately 100.1701% coverage** at September 30 23:59:59 UTC. Reserve composition was **$532,696,711 BUIDL** and **$5,705,161 cash**—approximately 98.94% and 1.06%, respectively. Cash included $5,455,161 uninsured; no blanket deposit-insurance protection is inferred.

Deloitte & Touche's reasonable-assurance examination applies to management's assertion at that date, not internal-control effectiveness, legal compliance or continuous collateralization. The report describes segregated, unencumbered fiduciary trust accounts and BUIDL wallets. These are meaningful point-in-time assurance findings, not an independent all-date custody or holder-priority opinion.

The liabilities span Ethereum **496,571,142** and Solana **40,916,626** tokens. Current Ethereum native supply was **318,164,251.456182572 USDtb** at block **26,433,254 / November 17 07:24:47 UTC**, exact token `0xc139190f447e929f090edeb554d95abb8b18ac1c`, 18 decimals. Current one-chain supply and dated two-chain liabilities have different dates and perimeters; dividing old reserves by current Ethereum supply would invent a current backing ratio. No same-time global ratio is established.

Ethena's whitelabel dashboard disclaims being Anchorage-maintained or representative of Anchorage collateralization. It is not substituted for the bank reserve report. USDtb backing is not USDe's derivatives-hedging portfolio.

## 3 · Liquidity & Exit — 6.0

Holders can sell USDtb on Ethereum; primary bank redemption requires Client eligibility and processing. BUIDL reserve redemption and a token-holder’s cash payout are separate stages. The sampled secondary quotes below do not establish bank redemption access.

| USDtb input | Gross USDC quote | Illustrative gas-net USD, assuming USDC=$1 |
|---|---:|---:|
| 1,000 | 999.900930 | 999.81038 |
| 10,000 | 9,998.998118 | 9,998.90768 |
| 100,000 | 99,988.861778 | 99,988.77134 |

Requests completed November 17 07:25:49–50 UTC. Provider gas estimates were approximately $0.09 per route; approvals, independent USDC/USD valuation and complete settlement costs are not established. These finite quotes do not prove million-dollar depth, firm liquidity, bank eligibility or successful funded payout. Router state may be independently cached.

[Covered Stablecoin terms](https://www.anchorage.com/anchorage-digital-bank-n-a-covered-stablecoin-terms), dated October 13, 2025, restrict issuance/redemption to Clients; non-Clients do not gain contractual redemption rights under those terms except applicable law. The bank can refuse, restrict, suspend or delay for verification, compliance, operations and liquidity management. No fixed SLA or exact public numeric redemption minimum was established. The August 25, 2026 [fee schedule](https://www.anchorage.com/anchorage-digital-bank-n-a-covered-stablecoin-service-fee-schedule) lists no USDtb Covered Stablecoin Service Fees; network, trading, wire and other account costs are not thereby zero.

BUIDL is a private unregistered BVI fund with daily-NAV redemption through Securitize and no secondary market according to the reserve report. Reserve quality therefore does not imply instant token-holder cash at all times. An Euler USDtb lending receipt's zero cash is a separate lending-market constraint, not proof of issuer illiquidity or insolvency.

## 4 · Dependencies — 6.0

Holders depend on Anchorage issuance, reserve trust/account operations and compliance; BUIDL adds BlackRock, fund administration/tokenization, Securitize and redemption timing. BUIDL wallet balances across chains are reserve locations, not four independent credit protections. Ethereum contract execution, USDC/market liquidity and any lending-receipt wrappers add separate paths. Reserves are not the sum of USDtb circulation plus BUIDL backing counted again.

There is no separate Ethena repayment guarantee or automatic exposure to USDe's hedge positions solely from the USDtb name. Integration into an additional strategy can create its own credit and correlation risk, which must be assessed at that layer.

## 5 · Contract & Admin — 3.5

At **Ethereum 26,433,242 / November 17 07:22:23 UTC**, the source review bound the proxy, installed AnchorageTokenUSDtb implementation `0x9d6d77a21702b9afcf924983fbfb84aaaae79589` and ProxyAdmin `0x3c405f68d5c6ece868e5646cac926679839acd68`. Token DEFAULT_ADMIN and ProxyAdmin owner both resolve to **`0xd93826bb299765c87d13aeba2a7e5d9b27a03956`**, which had empty runtime at the pin. No on-chain multisig or timelock was established there; empty code does not establish one human, one key or absence of off-chain MPC.

The admin can grant/revoke operational roles. MINTER_BURNER can mint and burn specified holder balances without holder allowance in the inspected burn function; BLOCKLISTER can block/unblock; PAUSER can pause transfers/mint/burn. Native paused=false is a point observation. Admin's current lack of those operational roles does not remove its grant power. Member-count probes reverted, so a complete operational-role census is unavailable. Admin transfer is request/accept with no built-in notice delay identified; a reverted pending-admin getter does not prove no pending change.

Both supply/compliance and code-upgrade paths therefore remain consequential. Exact source/runtime correspondence narrows code identity, but older audit links were not bound to this installed Anchorage implementation, build or remediation state. Full role/upgrade history, signing-custody policy and independent reproducible audit-build assurance remain unverified.

## 6 · Issuer — 7.0

Issuer disclosures identify Anchorage Digital Bank, National Association as sole issuer/obligor, with Ethena providing infrastructure/support. Bank-regulated issuance, published terms and reserve examination improve organizational/accountability evidence. They do not give token holders FDIC/NCUA/SIPC coverage or a government guarantee.

The terms describe a South Dakota express Covered Stablecoin Reserve Trust and bank fiduciary duties. Excess reserve income compensates the bank; holding USDtb does not give a direct BUIDL share or entitlement to fund yield. Contractual Client rights, non-Client access, Master Account Agreement precedence and legal restrictions materially affect recourse. Independent court-tested priority, all-date segregation and unrestricted redemption are not established by documentary language alone.

## Confidence, coverage and triggers

Confidence is medium in dated reserve examination, exact source identity and finite quotes, lower in current global custody/coverage, complete role policies and stressed settlement.  The exact Ethereum token is assessed; Solana's presence in a reserve report does not establish its live controls, and its deployment grade remains null.

Reassess on reserve/liability mismatch, adverse examination, material cash/fund restrictions, bank redemption or transfer failures, sustained independently measured discount, changed issuer/terms, role/admin/code changes, or new audit/build evidence. A lending receipt's empty cash balance alone is not an issuer-level escalation.

## Sources and clocks

The evidence combines dated bank reserve assurance, native Ethereum supply, finite quotes, issuer terms and source/runtime control observations. September assurance, November native/quote/control and earlier legal clocks stay separate; the control header was approximately ten seconds ahead of local receipt and rechecked unchanged.

- [September reserve examination](https://learn.anchorage.com/09.30.26_USDtb-Stablecoin-Attestation-Report-signed.pdf)
- [Covered Stablecoin terms](https://www.anchorage.com/anchorage-digital-bank-n-a-covered-stablecoin-terms)
- [Service fee schedule](https://www.anchorage.com/anchorage-digital-bank-n-a-covered-stablecoin-service-fee-schedule)
- [Anchorage issuer statement](https://www.anchorage.com/press-room/anchorage-digital-offers-rewards-usdtb-usde)

## Revision history

2026-11-17: full six-axis Ethereum assessment replaces the June light report. Current sole bank issuer, installed Anchorage implementation, dated external reserve examination and measured exits checked. Overall 6.5 → 6.0 incorporates concentrated live admin/upgrade authority and execution/perimeter limits; no new reserve loss is asserted. Creation date preserved, stale dust-only refresh exemption removed, Solana grades explicitly withheld.

</div>
