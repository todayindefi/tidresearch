---
asset: "USDD"
slug: "usdd"
aliases: ["USDD", "Decentralized USD", "USDD 2.0"]
chains: ["tron", "eth", "bsc"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "full"
date: "2026-03-31"
last_verified: "2026-04-01"
peg_mechanism_risk: 4.0
backing_risk: 3.0
liquidity_risk: 3.0
issuer_risk: 2.0
overall_risk: 3.5
issuer: "TRON DAO Reserve"
audited_reserves: false
market_cap_approx: 1344000000
chain_overrides:
  eth:
    liquidity_risk: 4.0
    overall_risk: 4.0
  bsc:
    liquidity_risk: 2.5
    overall_risk: 3.0
---

# USDD — Asset Risk Assessment (Full)

**Category:** Stablecoin | **Peg Mechanism:** Hybrid (overcollateralized vaults + PSM + legacy TRX burn) | **Issuer:** TRON DAO Reserve (Justin Sun)

> **Note:** This report covers **USDD 2.0** (launched January 25, 2025), the current live version. USDD 1.0 (May 2022 - January 2025) is documented in the [Historical Context](#usdd-10-historical-context-may-2022--january-2025) section for background. The two versions have different architectures, different contracts, and different risk profiles — though the issuer and many structural concerns carry over.

## Summary

USDD 2.0 is an overcollateralized stablecoin on TRON, forking MakerDAO's smart contract architecture. Users deposit TRX, sTRX, or USDT into vaults to mint USDD. On Ethereum and BNB Chain, a Peg Stability Module (PSM) allows 1:1 swaps against USDT/USDC.

Total circulating supply is **$1.344B** across all chains (Tron: $1.091B, Ethereum: $124M, BNB: $111M), with total backing of **$1.544B** (114.8% headline CR). On-chain analysis shows **69.8% of collateral originates from HTX** (Justin Sun's exchange) via the Smart Allocator ($913M) and PSM ($164M). Independent user vaults contribute $466M (34.7% independent CR). On-chain overlap verification confirmed no double-counting — the SA uses Spark on Ethereum (not Aave), and JustLend positions are separate from HTX's. However, the admin multisig can access all user funds instantly (zero timelock) per the protocol's own ChainSecurity audit — contradicting marketing claims of "no admin keys." PSM reserves have declined significantly: from $236M to $164M (-$72M, -30%) in 24 hours as of April 1, 2026.

**Live data:** [Backing Monitor](https://todayindefi.github.io/backing-monitor/?asset=usdd) (hourly on-chain updates)

**Contracts:** Tron: `TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn` | Ethereum: `0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6` | BNB Chain: `0xd17479997f34dd9156deef8f95a52d81d265be9c`

## Key Risk Notes (USDD 2.0 — Current)

- **Centralized control under Justin Sun** — No functional DAO exists despite "TRON DAO Reserve" branding. The governance portal was removed. All major decisions made unilaterally. The admin multisig (unknown signers) has full system control with zero governance delay.
- **Admin can access user funds** — ChainSecurity audit (Jan 2025) confirms the admin can "access the funds of users" via `customExec()` and `execSpell()` with no timelock. This directly contradicts USDD's "no admin keys" marketing.
- **69.8% of collateral sourced from HTX** — The Smart Allocator ($913M, 59%) and PSM ($164M, 11%) are both funded from HTX addresses. Independent user vaults contribute $466M (30%). Improving trend (was 75.6% on March 31) but still heavily concentrated.
- **No double-counting detected (verified on-chain)** — The SA deploys to **Spark** on Ethereum (not Aave) and has separate JustLend positions on Tron. HTX uses Aave on Ethereum. Different protocols = different positions. Verified by querying all 27 HTX PoR addresses live. Funds are same-source (HTX) but not same-position. See [HTX Overlap Analysis](#htx-overlap-analysis-confirmed-vs-suspected).
- **Circular TRX backing** — TRX vaults hold $466M in user collateral. A 50% TRX drop pushes headline CR **below 100%** (97.5% per stress test). A 70% drop → 90.6% CR.
- **Thin, concentrated liquidity** — 24h volume ~$4-5M. Concentrated on Sun-controlled venues (HTX, Poloniex, SunSwap).
- **PSM draining rapidly** — PSM reserves dropped from $236M to $164M (-$72M, -30.4%) in 24 hours as of April 1. Coverage now 12.2% of supply. Tron PSM: $70M (6.5% of Tron supply). Ethereum PSM: $58M (46.5%). BNB PSM: $17.5M (15.8%).
- **Unsustainable yield subsidies** — Launched at 20% APY, now 8-12%. Justin Sun: "fully subsidized" because "we have plenty of money."
- **Terra/Anchor parallel** — 61% of USDD 2.0 supply on JustLend at subsidized yield mirrors Anchor holding 75% of UST before collapse.
- **SEC fraud charges settled** — Market manipulation, unregistered securities. $10M penalty (March 2026). Congressional analysis: 58% of illicit crypto finance on TRON.

## USDD 2.0 Architecture (Current)

### Peg Mechanism

USDD 2.0 operates differently across chains:

**On TRON (primary issuance):**
- Overcollateralized vault model, forked from MakerDAO. Users deposit TRX, sTRX, or USDT as collateral to mint USDD.
- Automated liquidations enforce solvency at per-vault minimum collateralization ratios.
- Stability fees: 0.5% for TRX vaults, 1.0% for USDT and sTRX vaults.
- Legacy: whitelisted institutions can also mint USDD by burning TRX through the authorized burning contract (retained from 1.0).

**On Ethereum and BNB Chain:**
- Peg Stability Module (PSM): Fixed-rate 1:1 minting/redemption against USDT and USDC with zero fees and zero slippage.
- This provides a hard price floor/ceiling on these chains — but only as deep as the PSM's USDT/USDC reserves.

**PSM reserves (on-chain, April 1, 2026):**

| Chain | PSM USDT | USDD Supply | PSM Coverage |
|-------|----------|-------------|-------------|
| Tron | $70M | $1.091B | 6.5% |
| Ethereum | $58M | $124M | 46.5% |
| BNB Chain | $17.5M | $111M | 15.8% |
| **Total** | **$164M** | **$1.344B** | **12.2%** |

**PSM drain alert:** Reserves dropped from $236M to $164M (-$72M, -30.4%) in 24 hours. Tron PSM fell from $106M to $70M. Ethereum PSM fell from $111M to $58M. This is the largest observed PSM outflow since monitoring began.

### PSM Limitations (Why It Doesn't Mitigate Core Risk)

The PSM is the strongest mechanical feature of USDD 2.0, but it does not meaningfully offset the HTX concentration and circular backing risks:

1. **Scale mismatch:** $164M in PSM reserves vs $1.344B in outstanding USDD. The PSM covers only 12.2% of supply — and declining rapidly (was 19.6% just 24 hours prior).

2. **Tron PSM is critically thin.** Tron PSM has $70M USDT covering $1.091B in supply (6.5%). Ethereum PSM at $58M covers 46.5% of its smaller $124M supply.

3. **Replenishment is opaque and discretionary.** No documented mechanism exists for PSM refills. Presumably TRON DAO Reserve (Justin Sun) tops it up at their discretion — making it a discretionary backstop, not a mechanical guarantee.

4. **Same-source risk.** Both the PSM reserves and the Smart Allocator originate from HTX-controlled addresses. If HTX has a solvency issue, both the PSM and the collateral behind it are compromised simultaneously.

5. **Death spiral drain sequence.** If TRX crashes and Tron-side collateralization deteriorates, rational actors drain the PSMs for clean USDT. Ethereum PSM ($111M) gets drained first as the best exit. Once empty, the remaining ~$1B+ in USDD has no stable exit.

**sUSDD (yield-bearing wrapper):**
- Launched October 2025 on Ethereum and BNB Chain.
- Accrues yield through increasing sUSDD-to-USDD redemption rate (similar to sDAI).
- "Smart Allocator" deploys reserves into Aave and JustLend — introduces indirect protocol risk.
- Current rates: 8% APY on Ethereum ($314.5M TVL), 6% on BNB Chain ($8.8M TVL).

### USDD 2.0 Collateral — What's Real

**On-chain collateral breakdown (live, April 1, 2026):**

| Component | Value | % of Backing | Source | Independent? |
|-----------|-------|-------------|--------|-------------|
| Smart Allocator (HTX) | **$913M** | 59.2% | HTX addresses | **No** |
| PSM Reserves (HTX) | **$164M** | 10.7% | HTX addresses | **No** |
| TRX Vaults (User) | **$457M** | 29.6% | Open market | **Yes** |
| sTRX Vaults (User) | **$8.9M** | 0.6% | Open market | **Yes** |
| USDT Vaults (User) | **$559K** | 0.0% | Open market | **Yes** |
| **Total Backing** | **$1.544B** | | | |

Data source: On-chain VAT queries across Tron (`TH5dhX...`), Ethereum (`0xff77...`), and BNB Chain (`0x41f1...`). Live dashboard: [Backing Monitor](https://todayindefi.github.io/backing-monitor/?asset=usdd).

The collateral resides in MakerDAO-fork smart contracts (Vat), not in HTX wallets directly. The Smart Allocator deploys to **Spark** on Ethereum and **JustLend** on Tron (verified on-chain — not Aave as previously reported). This provides structural protection against third-party attacks. **However**, the admin multisig can access these funds at any time (see [Admin Control](#admin-control-vs-no-admin-keys-claim-audit-contradiction)).

| Metric | Value | Trend (vs Mar 31) |
|--------|-------|-------------------|
| Headline CR | 114.8% | ↓ from 117.7% |
| Independent CR (user vaults only) | **34.7%** | ↑ from 28.7% |
| HTX share of backing | 69.8% | ↓ from 75.6% (improving) |
| Surplus over supply | $199M | ↓ from $214M |
| PSM reserves | $164M | ↓↓ from $236M (-30.4% in 24h) |

The independent CR (34.7%) continues to improve — $466M in user vaults is real, independent collateral, up from $346M a day earlier. The HTX share is declining as user vaults grow faster. However, PSM reserves are draining significantly, and the headline CR has tightened.

**Per-ilk detail (on-chain):**

| Ilk | Chain | Debt | Ceiling | Utilization | HTX? |
|-----|-------|------|---------|-------------|------|
| SA001-A | Tron | $520M | $1.0B | 52% | Yes |
| SA001-A | Ethereum | $318M | $620M | 51% | Yes |
| TRX-A | Tron | $170M | $200M | 85% | No |
| PSM-USDT-A | Ethereum | $111M | $500M | 22% | Yes |
| PSM-USDT-A | Tron | $106M | $600M | 18% | Yes |
| TRX-B | Tron | $80M | $200M | 40% | No |
| TRX-C | Tron | $61M | $100M | 61% | No |
| TRX-D | Tron | $17M | $50M | 34% | No |
| PSM-USDT-A | BNB | $18.5M | $200M | 9% | Yes |
| STRX-A | Tron | $8.9M | $50M | 18% | No |

### HTX Overlap Analysis (Confirmed vs Suspected)

This section distinguishes between what is confirmed by on-chain evidence and what is suspected but unverifiable.

**Data sources:**
- HTX PoR wallet addresses: [github.com/huobiapi/Tool-Node.js-VerifyAddress](https://github.com/huobiapi/Tool-Node.js-VerifyAddress/tree/main/snapshot) (27 addresses across ETH, TRX, BTC)
- Live on-chain verification: [Backing Monitor HTX Overlap panel](https://todayindefi.github.io/backing-monitor/?asset=usdd) queries all 27 HTX PoR addresses hourly

### Double-Counting: Resolved — No Overlap Detected

On-chain verification (April 1, 2026) confirmed that USDD Smart Allocator positions and HTX exchange positions are **separate**:

| Chain | HTX Position | SA (USDD) Position | Overlap? |
|-------|-------------|-------------------|----------|
| Ethereum | $276.5M in **Aave** aUSDT (1 address) | $0 in Aave — uses **Spark** instead | **No** — different protocols |
| Tron | $17.4M in **JustLend** (1 address) | $105.1M in **JustLend** (separate contract) | **No** — separate positions |

The SA on Ethereum deploys to **Spark** (not Aave as previously reported based on Protos June 2025 tracing). This means HTX's Aave positions and USDD's Spark positions cannot be the same funds — they are on different lending protocols entirely. On Tron, both HTX and the SA use JustLend, but the positions are held in separate contracts with separate balances.

**Verdict:** Funds are same-source (HTX) but not same-position. No double-counting of lending protocol positions.

### HTX PoR Addresses Still Active

All three previously flagged addresses remain in HTX's PoR (verified live against all 27 addresses):

1. **`0x18709E89BD403F470088aBDAcEbE86CC60dda12e`** (Ethereum) — $276.5M in Aave aUSDT. This address funded the SA's Ethereum deployment ([Protos June 2025](https://protos.com/usdd-assets-htx-justin-sun-justlend/)). The SA subsequently deployed to Spark, not Aave.

2. **`TDToUxX8sH4z6moQpK3ZLAN24eupu2ivA4`** (Tron) — $17.4M in JustLend + $19.7M in USDD tokens. This address funded the SA's Tron deployment. It also holds $19.7M in USDD directly — not included in HTX's PoR (HTX excludes USDD from PoR).

3. **`TZ1SsapyhKNWaVLca6P2qgVzkHTdk6nkXa`** (Tron) — 118M TRX (~$37M). The original USDD 1.0 double-counted address. Live balance has decreased from 1.064B TRX (March PoR CSV) to 118M TRX — approximately 946M TRX moved out, likely redistributed across other HTX wallets.

**Additional finding:** HTX addresses collectively hold **3.38B TRX (~$1.065B)** across 11 Tron addresses, plus **$413.8M in stablecoins** and **$276.5M in Aave lending positions** across 10 Ethereum addresses. All monitored live via the [Backing Monitor](https://todayindefi.github.io/backing-monitor/?asset=usdd).

### Structural Risk Remains

Even without double-counting, the counterparty concentration risk is unchanged. One entity (Justin Sun) controls:
- The collateral source (HTX)
- The collateral contracts (admin multisig, zero timelock)
- The primary lending deployment (JustLend, Sun-founded)
- The primary trading venues (HTX, Poloniex, SunSwap)

A single event (regulatory action, hack, insolvency) compromises both sides simultaneously.

### Circular Backing Risk

The heavy reliance on TRX as collateral creates a reflexive risk loop:
1. TRX price drops → reserve value falls → collateralization ratio declines
2. USDD confidence drops → sell pressure → USDD depegs
3. Depeg erodes confidence in TRON ecosystem → further TRX selling
4. Return to step 1

This is the same dynamic that destroyed UST/LUNA in May 2022 — the very event that occurred weeks after USDD first launched.

### Terra/Anchor Parallel

This structure mirrors Terra/UST before its collapse:
- **Anchor held ~75% of UST supply** at ~20% subsidized yield → **JustLend holds ~61% of USDD 2.0 supply** at ~20% subsidized yield
- Both yields were explicitly subsidized by the issuer rather than generated organically
- Both had circular backing (UST backed by LUNA; USDD backed by TRX)
- Both had single points of control despite "decentralized" branding

### USDD Supply by Chain (On-Chain, April 1, 2026)

| Chain | Supply | % of Total | VAT Debt | PSM Coverage |
|-------|--------|-----------|----------|-------------|
| Tron | $1.091B | 81.2% | $1.092B | 6.5% |
| Ethereum | $124M | 9.2% | $430M | 46.5% |
| BNB Chain | $111M | 8.3% | $18.5M | 15.8% |
| **Total** | **$1.344B** | | **$1.544B** | **12.2%** |

Note: Ethereum VAT debt ($430M) exceeds Ethereum token supply ($124M) because the Smart Allocator on Ethereum mints USDD that may be bridged or held elsewhere. Tron supply increased from $971M to $1.091B since March 31.

## Issuer & Governance Risk

### Justin Sun / TRON DAO Reserve

USDD is **de facto controlled by Justin Sun**. Despite "DAO" branding:
- No functional DAO governance exists — the governance portal was removed
- Only one governance vote has ever been held (May 2023, regarding burned TRX usage)
- USDD 2.0 launch and all parameter changes decided unilaterally
- Admin multisig signers are unknown

Justin Sun also controls HTX (formerly Huobi), Poloniex, and is a major investor in World Liberty Financial (Trump-linked). The concentration of control across the exchange, protocol, and stablecoin creates compounding counterparty risk.

### Regulatory History

- **SEC charges (March 2023):** Unregistered offer/sale of TRX and BTT, market manipulation ($31M in wash trading), undisclosed celebrity promoter payments. Settled March 2026 for $10M penalty.
- **Congressional scrutiny:** Senator Warren and House members alleged preferential SEC treatment due to Sun's $75M investment in Trump-linked crypto project. Congressional analysis cited 58% of illicit crypto finance occurring on TRON.
- **Dominica "authorized digital currency"** status (October 2022) provides minimal practical regulatory protection.

## Audit & Transparency

### Smart Contract Audits

Five audits completed as of October 2025:
- **ChainSecurity** — USDD v2 contracts on TRON (January 2025)
- **CertiK** — USDD on Ethereum (September 2025), awarded AA score (87.5/100)
- **ChainSecurity** — Ethereum and BNB Chain deployments (October 2025)
- Two additional audits (details not fully public)

No critical vulnerabilities reported. However, the audit explicitly notes the **economic model is out of scope**, and that "there are many ways in which the governance can cause the system to break or lead to losses for its users."

### Admin Control vs "No Admin Keys" Claim (Audit Contradiction)

USDD marketing claims "no administrative keys" and "immutable contracts." The ChainSecurity audit (January 2025) directly contradicts this. From the [Roles & Trust Model](https://usdd.io/USDD-V2-audit-report.pdf) (Section 2.2.10):

> "The admin oversees the entire USDD V2 system and hence is fully trusted. The admin is able to trigger the execution of any privileged functions in the system through the DSPauseProxy (i.e. with customExec() and execSpell() defined in GovActionsProxy) **and access the funds of users.**"

The governance architecture, per the audit:
```
Admin Multisig → owns → GovActionsProxy → authority → DSPauseProxy → all system contracts
```

Key findings from the audit's trust model:
- The **admin multisig** (unknown signers) has full control over the entire system
- `customExec()` and `execSpell()` allow the admin to execute **arbitrary calls** through `DSPauseProxy`
- The admin can access user funds directly
- **Governance delay is set to 0** — meaning changes execute instantly with no timelock for users to react
- Oracle signers are "fully trusted" and can manipulate prices within deviation bounds
- The `Flop` operator can withdraw all auction collateral

This means: while collateral does reside in MakerDAO-fork smart contracts (not in HTX wallets directly), the admin multisig can move those funds at any time, instantly, without warning. The contracts provide structural protection against third-party attacks but **no protection against the admin itself**. The "no admin keys" marketing claim is false per the protocol's own audit.

### Reserve Attestations

**None.** No independent third-party reserve attestations from accounting firms exist. This is a significant gap compared to peers:
- USDC has Deloitte attestations (monthly)
- USDT has BDO attestations (quarterly)
- USDD has only self-reported on-chain data from the protocol itself

## Liquidity Analysis

### Exchange Presence

| Venue | Type | Notes |
|-------|------|-------|
| HTX (Huobi) | CEX | Sun-controlled — primary venue |
| Poloniex | CEX | Sun-controlled |
| KuCoin, Bybit, Gate.io | CEX | Independent but thin volume |
| SunSwap | DEX (Tron) | Sun-controlled |
| Uniswap V3 | DEX (Ethereum) | Limited pools |
| PancakeSwap V2 | DEX (BNB Chain) | Limited pools |

**Volume is extremely thin.** The most active independent pair (USDD/TRX on KuCoin) shows only ~$59K in daily volume. Liquidity is heavily concentrated on Sun-controlled platforms, which means exit liquidity in a crisis may be unreliable — the same entity controlling the stablecoin controls the primary trading venues.

### Cross-Chain Considerations

- **Tron:** Primary chain, deepest liquidity (such as it is) via SunSwap and JustLend
- **Ethereum:** PSM provides 1:1 exit to USDT/USDC, but PSM reserves are limited (~$87M)
- **BNB Chain:** Smallest deployment (~$12.5M supply), thinnest liquidity
- **Defunct bridges:** Previously bridged to Fantom, Avalanche, Arbitrum, Optimism via Multichain (collapsed 2023) — those bridged versions are likely stranded

## Scoring Rationale

| Category | Score | Notes |
|----------|-------|-------|
| Peg Mechanism | 4.0 | MakerDAO-fork vault model is a real structural improvement. PSM provides clean exit but coverage has dropped to 12.2% (was 19.6%) with $72M drained in 24h. TRX burn mechanism retained. System untested under severe market stress. |
| Backing | 3.0 | 69.8% of collateral from one counterparty (HTX) — improving trend but still dominant. Independent CR is 34.7% (improving). **On-chain verification confirmed no double-counting** (SA uses Spark, HTX uses Aave — different protocols). Collateral is real and in separate positions. No third-party attestations. Admin can access funds with zero delay. TRX -50% pushes CR below 100% (97.5%). Score improved from 2.5 → 3.0 based on verified position separation and growing independent collateral. |
| Liquidity | 3.0 | 24h volume ~$4-5M. Concentrated on Sun-controlled venues. PSM exit on Ethereum is moderate (46.5% of ETH supply), but Tron PSM is critically thin (6.5% of $1.091B). PSM draining rapidly. |
| Issuer | 2.0 | De facto single-person control (Justin Sun). No functional DAO. SEC fraud charges (settled). Unknown admin multisig signers. "No admin keys" claim contradicted by own audit. Congressional allegations of TRON enabling illicit finance. |
| **Overall** | **3.5** | **High risk, improving — USDD 2.0's architecture is a genuine mechanical improvement. On-chain verification confirmed no double-counting (positions are separate). Independent user vaults growing ($466M, 34.7% CR) and HTX share declining (69.8%). But the admin can access all funds instantly, TRX -50% breaks solvency, and PSM reserves are draining rapidly (-30% in 24h). Score improved from 3.0 → 3.5 based on verified position separation; would improve further if HTX share drops below 50% and admin timelock is enabled.** |

## Chain-Specific Notes

| Chain | Adjusted Overall | Notes |
|-------|-----------------|-------|
| **Tron** | 3.5 (default) | Primary chain, deepest (relative) liquidity, but fully within Sun-controlled ecosystem. PSM thin at 6.5% coverage. |
| **Ethereum** | 4.0 | PSM provides 1:1 exit to USDT/USDC at 46.5% coverage. Verified no overlap with HTX Aave positions. |
| **BNB Chain** | 3.0 | Smallest deployment, thinnest liquidity, but PSM provides 15.8% coverage. |

## Comparison to Peers

| | USDD | FRAX (Legacy) | crvUSD | USDC |
|---|---|---|---|---|
| Market Cap | $1.344B | ~$153M | ~$60M | ~$52B |
| Collateral Ratio | 114.8% headline / 34.7% independent | 91.4% (under-collateralized) | >100% (algorithmic) | ~100% (fiat) |
| Reserve Verification | Self-reported; admin has full access | On-chain, auditable | On-chain, transparent | Deloitte attested |
| Governance | None (admin multisig, unknown signers) | DAO (active) | DAO (active) | Corporate (regulated) |
| Depeg History | Multiple under 1.0 (worst: 8%); untested under 2.0 | Mild (~$0.99) | Mild | One major (SVB) |
| Overall Score | **3.5** | 2.5 | 5.0 | 9.0 |

USDD 2.0 scores higher than Legacy FRAX on headline collateralization, but FRAX's risks are primarily mechanical (wind-down mode, frozen AMOs) rather than counterparty/trust risks. USDD's risks are fundamentally about trust in a single individual and unverifiable claims — a qualitatively different and arguably more dangerous risk profile.

---

## USDD 1.0 Historical Context (May 2022 – January 2025)

> This section documents the deprecated USDD 1.0 for historical context. USDD 1.0 still has ~$262M in circulating supply across chains (Tron: ~28M, Ethereum: ~124M, BSC: ~111M) but is no longer the active system. The risks documented here informed the design of 2.0 but are distinct from current 2.0 risks.

### USDD 1.0 Architecture

USDD 1.0 launched May 5, 2022 as an **algorithmic stablecoin** using a UST-style TRX burn/mint mechanism. The TRON DAO Reserve held collateral (TRX, BTC, USDT, USDC) in multi-sig wallets as an additional backstop.

### USDD 1.0 Depeg History

| Date | Trigger | Low Price | Duration |
|------|---------|-----------|----------|
| June 2022 | 3AC/Celsius/Voyager collapses | ~$0.96 | Weeks |
| Nov 2022 | FTX collapse; Alameda USDD selling | ~$0.985 | Days |
| Dec 2022 | Continued post-FTX pressure | ~$0.9695 (ATL) | Weeks |
| Mar 2023 | SVB crisis, broad stablecoin contagion | ~$0.92 | Days |

### USDD 1.0 HTX Double-Counting (Confirmed, January 2024)

Address **TZ1SsapyhKNWaVLca6P2qgVzkHTdk6nkXa** held ~972 million TRX (~$120M), nearly all staked. This address was simultaneously:
- Listed as USDD 1.0 collateral by the TRON DAO Reserve
- Included in HTX's proof-of-reserves as exchange assets

The same tokens were counted twice — once as collateral backing USDD, once as reserves backing HTX exchange user deposits. First reported by Protos ([January 2024](https://protos.com/justin-sun-stored-usdd-reserves-at-htx-for-proof-of-reserves/)), originally discovered by Twitter user @NoCryptFish cross-referencing HTX's PoR snapshot (December 2023) against USDD's reserve page. HTX never responded to press inquiries. No governance vote authorized storing USDD collateral at HTX.

The USDD 1.0 BTC reserves were also stored in wallet `1KVpuCfhftkzJ67ZUegaMuaYey7qni7pPj`, which HTX claimed as their own. Those 12,000 BTC (~$726M) were later removed from USDD reserves entirely (mid-2024) without a governance vote.

**Bluechip** (stablecoin rating agency, backed by MakerDAO's Rune Christensen) rated USDD 1.0 an **F** and estimated effective collateralization at just **53%** due to the HTX overlap. Their recommendation: do not use USDD.

### USDD 1.0 Concentration

| Chain | USDD 1.0 Supply | Concentration |
|-------|----------------|---------------|
| Tron | ~28M | 56% in single address |
| Ethereum | ~124M | ~99% in bridge contract |
| BSC | ~111M | ~99.5% in bridge contract |

### USDD 1.0 Whitelisted Minters (Defunct Partners)

Authorized minting institutions included several now-defunct or compromised entities:
- **Alameda Research** — bankrupt, embezzled billions from FTX
- **Multichain** — bridge hacked, CEO arrested, team lost web access
- **TPS Capital** — connected to Three Arrows Capital, website down
- **FalconX** — settled with CFTC for failure to register
- Other partners (Mirana, Amber Group, Ankr, Wintermute) did not respond to Protos inquiries

### Status Under USDD 2.0

The original double-counted address (`TZ1Ss...`) is not referenced in post-2.0 Protos investigations (June/September 2025). It is unclear whether the USDD 2.0 restructuring retired this address from USDD's side. **However, as of the March 2026 HTX PoR snapshot, this address is still listed in HTX's proof-of-reserves with 1,064,078,456 TRX (~$336M).** HTX never removed it. Whether USDD still claims it as collateral is unconfirmed — but HTX is still counting it as exchange reserves.

## Monitoring Recommendations

To properly monitor USDD 2.0, the following would be needed:

1. **Tron chain support** — Current backing monitor only covers EVM chains. Need TronGrid API integration to read reserve wallet balances and USDD supply on Tron.
2. **Smart Allocator position tracing** — Trace the Smart Allocator's Aave and JustLend positions and cross-reference against HTX's published PoR wallet addresses to determine whether positions overlap (confirming or ruling out double-counting under 2.0).
3. **PSM depth monitoring** — Track USDT/USDC reserves in Ethereum and BNB Chain PSMs. Alert if PSM reserves drop below meaningful exit thresholds.
4. **TRX price sensitivity** — Calculate "stress collateral ratio" at TRX -30%, -50%, -70% to quantify death spiral risk.
5. **Admin multisig activity** — Monitor the admin multisig for `customExec()` / `execSpell()` calls through GovActionsProxy, which could signal fund movements or parameter changes.
6. **Cross-chain supply reconciliation** — Sum USDD supply across Tron, Ethereum, and BNB Chain (both 1.0 and 2.0) to verify total supply matches claims.

## Sources

### USDD 2.0 Investigations (Current)
- [Protos: 61% of USDD collateral now in one vault — funded entirely by HTX (June 2025)](https://protos.com/usdd-assets-htx-justin-sun-justlend/)
- [Protos: Justin Sun's USDD has problems (September 2025)](https://protos.com/justin-sun-usdd-problems/)
- [Protos: Justin Sun defends HTX while it lends 92% of its USDT on Aave (September 2025)](https://protos.com/justin-sun-defends-htx-while-it-lends-92-percent-of-its-usdt-on-aave-1/)
- [Protos: 'Someone' is taking advantage of HTX's reserves (December 2025)](https://protos.com/someone-is-taking-advantage-of-htxs-reserves/)
- [Protos: USDD 2.0 has no whitepaper, no governance, and 20% yield](https://protos.com/usdd-2-0-has-no-whitepaper-no-governance-and-20-yield/)
- [ChainSecurity: USDD V2 Audit Report (January 2025)](https://usdd.io/USDD-V2-audit-report.pdf)
- [Messari: USDD One Year After 2.0](https://messari.io/report/usdd-one-year-after-2-0)

### USDD 1.0 Investigations (Historical)
- [Protos: Justin Sun stored USDD reserves at HTX for proof-of-reserves (January 2024)](https://protos.com/justin-sun-stored-usdd-reserves-at-htx-for-proof-of-reserves/)
- [Protos: USDD partners ignore HTX danger](https://protos.com/usdd-partners-ignore-htx-danger/)
- [Protos: USDD removes 12,000 BTC without DAO approval](https://protos.com/justin-suns-usdd-removes-12000-btc-without-dao-approval/)
- [Protos: TRON DAO Reserve shuts down its DAO](https://protos.com/usdds-tron-dao-reserve-shuts-down-its-dao/)
- [Bluechip: USDD Rating (F)](https://bluechip.org/coins/usdd)
- [The Block: Bluechip launches stablecoin ratings, USDD gets an F](https://www.theblock.co/post/239417/rune-christensen-bluechip-stablecoin-ratings-usdd-gets-an-f)

### HTX Proof-of-Reserves
- [HTX PoR Wallet Addresses (CSV/XLSX, monthly)](https://github.com/huobiapi/Tool-Node.js-VerifyAddress/tree/main/snapshot) — March 2026 snapshot cross-referenced against USDD addresses
- [HTX PoR Verification Tool](https://github.com/huobiapi/Tool-Node.js-VerifyAddress)

### General
- [USDD Official Docs](https://docs.usdd.io/)
- [CoinMarketCap: USDD](https://coinmarketcap.com/currencies/usdd/)
- [SEC v. Sun settlement (March 2026)](https://www.coindesk.com/policy/2026/03/05/sec-justin-sun-reach-settlement-over-tron-lawsuit)
- [ChainSecurity fifth audit announcement](https://medium.com/@usddio/chainsecurity-completes-fifth-usdd-audit-report-affirming-high-safety-standards-49b60cb1bb6c)
