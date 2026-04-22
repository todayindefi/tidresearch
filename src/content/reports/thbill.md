---
asset: "thBILL"
slug: "thbill"
aliases: ["thBILL", "Theo thBILL", "Theo Short Duration US Treasury Fund"]
chains: ["eth", "arb", "base", "avax", "hyperevm", "sol"]
category: "tokenized-treasury"
assessment_type: "full"
date: "2026-04-21"
last_verified: "2026-04-21"
featured: true
live_dashboard_url: "https://todayindefi.github.io/thbill-risk-info/"
pdf_coming_soon: true
issuer: "Theo Protocol Corporation"
market_cap_approx: 134000000
tvl_gross: 134000000
contract_score: 5.5
economic_score: 6.0
project_score: 4.5
overall_score: 5.5
supply_integrity_score: 5.5
score_weights:
  contract: 0.4
  economic: 0.3
  project: 0.3
audited: true
audit_count: 1
audit_firms: ["Zenith Audits"]
bug_bounty: false
team_doxxed: true
incident_history: false
is_fork: false
live_since: "2025-07"
legal_jurisdiction: "Panama"
bankruptcy_remote: false
credit_rating_equiv: "BB+"
optimistic_minting: true
settlement_lag_days: 4
multisig_configs:
  owner: "3-of-5"
  whitelist: "3-of-5"
  emergency: "2-of-4"
underlying_managers:
  - "Libeara (Standard Chartered)"
  - "FundBridge (MAS-regulated Singapore)"
  - "Wellington Management (sub-advisor)"
asset_symbols: ["thBILL"]
mint_paths:
  - id: "kyc_mint"
    mechanism: "admin-mint"
    trust_set: "off-chain-operator"
    trust_size: null
    pausable: true
    timelock_seconds: null
    notes: "KYC-gated optimistic mint on canonical chain (Ethereum). Theo MPC treasury accepts USDC, mints thBILL immediately as 'pending asset.' Settlement with underlying issuer (tULTRA) completes within ~4 business days."
  - id: "l2_oft_mint_major"
    mechanism: "bridge-oft"
    trust_set: "dvn-N"
    trust_size: 2
    pausable: null
    timelock_seconds: null
    notes: "LayerZero OFT between Ethereum <-> Arbitrum / Base / Avalanche / Polygon / BSC / Optimism / Mantle/Linea: requires 2-3 DVNs per pathway. Verified on-chain 2026-04-21. Meaningfully stronger than the single-DVN config that broke rsETH."
  - id: "l2_oft_mint_obscure"
    mechanism: "bridge-oft"
    trust_set: "dvn-N"
    trust_size: 1
    pausable: null
    timelock_seconds: null
    notes: "Inbound pathways from Sei (30214), Shimmer (30230), Bitlayer (30320), Sonic (30367 -- Ethereum only) require only 1 DVN. These appear to be LayerZero defaults rather than explicitly configured pathways. Exploitable ONLY if Theo has setPeer configured for those EIDs; peer config not verified in this pilot. Theo does not publicly deploy thBILL on those chains."
  - id: "basket_composition"
    mechanism: "admin-mint"
    trust_set: "off-chain-operator"
    trust_size: null
    pausable: true
    timelock_seconds: null
    notes: "iToken standard enforces composition, but composition itself is admin-set. Currently 100% tULTRA. Diversification roadmap exists but not yet implemented."
  - id: "tultra_upstream"
    mechanism: "custody-upstream"
    trust_set: "tradfi-custodian"
    trust_size: null
    pausable: false
    timelock_seconds: null
    notes: "tULTRA = wrapped Standard Chartered Libeara fund unit. Wellington Management sub-advisor, FundBridge MAS-regulated intermediary. Underlying T-Bill custody is TradFi. Off-chain trust; no bankruptcy-remote claim for token holders."
  - id: "admin_upgrade"
    mechanism: "admin-mint"
    trust_set: "multisig-3-of-5"
    trust_size: 3
    pausable: true
    timelock_seconds: null
    notes: "Core contracts upgradeable via Theo 3-of-5 owner multisig. Signers undisclosed. No public timelock."
supply_integrity_flags:
  - "off-chain-custody-dependency"
  - "permissioned-mint"
  - "no-bankruptcy-remoteness"
  - "no-timelock-disclosed"
  - "default-dvn-on-unused-pathways"
---

# thBILL — Risk Assessment Report

| | |
|---|---|
| **Asset** | thBILL (Theo Short Duration US Treasury Fund) |
| **Issuer** | Theo Protocol Corporation (Panama) |
| **Launch** | Q3 2025 (July 2025) |
| **Jurisdiction** | Panama (registered entity); underlying fund MAS-regulated (Singapore) |
| **Underlying exposure** | 100% tULTRA (Libeara × FundBridge × Wellington Management) |
| **Type** | Tokenized US T-bill basket (RWA) |
| **Primary access** | KYC-gated; USDC in, USDC out (T+4 business days) |
| **Secondary access** | Uniswap v3 on Ethereum / Arbitrum / Base (no KYC) |
| **Deployed chains** | Ethereum (canonical), Arbitrum, Base, Avalanche, HyperEVM, Solana |
| **Cross-chain mechanism** | LayerZero OFT |
| **Market cap (2026-04-21)** | ~$134M |
| **Price (2026-04-21)** | $1.02 |

> *Overall score (5.5) is a weighted composite — see §IV for category weights.*

---

## Protocol Summary

thBILL is Theo Protocol's flagship tokenized Treasury basket — an on-chain money-market product providing exposure to short-duration US T-bills through a regulated TradFi fund stack (Standard Chartered's Libeara issuer, FundBridge as MAS-regulated fund manager, Wellington Management as sub-advisor). Launched July 2025 on Ethereum and expanded via LayerZero OFT to Arbitrum, Base, Avalanche, HyperEVM, and Solana, thBILL sits at the intersection of two risk categories: off-chain TradFi custody and on-chain cross-chain bridge security.

The post-incident context matters: the rsETH ($292M) LayerZero-OFT exploit of 2026-04-18 is directly relevant to thBILL because thBILL uses the same architectural class. On-chain audit (2026-04-21) confirms thBILL's OFT is configured with 2-3 required DVNs on all active pathways, **structurally different** from the single-DVN config that broke Kelp.

Overall profile: strong asset quality (US T-bills via regulated institutions), competent technical implementation (single Zenith audit, multi-DVN bridge), offset by centralized governance (fully Theo-controlled multisigs, no DAO, no timelock), non-atomic redemption (4-day USDC settlement), limited operating history (~9 months), and no bankruptcy-remote claim on underlying T-bills.

---

## I. Smart Contract Risk — 5.5/10

### Audit Coverage

| Audit | Firm | Scope | Date |
|---|---|---|---|
| Full contract suite | Zenith Audits | Vaults, TheoWhitelist, IToken, TToken, TTokenRouter, escrow | 07-2025 |

**Findings summary:** 0 Critical / 0 High / 8 Medium / 3 Low / 2 Informational (13 total). Majority of Medium items resolved (deposit-ratio imbalances, pause-logic omissions, share-mint edge cases); minor items acknowledged with no fix (parameter flexibility, low-likelihood edge cases).

**Gaps vs peer RWAs:**
- **Single audit firm** — BUIDL / USYC / USTB typically carry 2-3 audits from independent firms.
- **OFT adapter scope unclear.** thBILL expanded to 5+ chains via LayerZero OFT after the July 2025 audit; the July audit likely predates the OFT expansion and may not cover the bridge adapter contracts.
- **No bug bounty** — no Immunefi / HackerOne program.
- **No recurring audit cycle** disclosed.

### Code Complexity

- **tToken / iToken standards.** Theo's proprietary token architecture: `tToken` is an ERC-4626 vault representing a single product (tULTRA), `iToken` is an index-of-tTokens basket. Both upgradeable via proxy.
- **Optimistic minting via MPC.** Theo's multi-party computation wallet fulfills pending mints/redemptions; on-chain `pendingAssets` accounting bridges the 4-day off-chain settlement lag.
- **LayerZero OFT adapters** on every destination chain — this is where cross-chain risk lives (covered in §I.5).
- **On-chain enforcement** of basket composition and whitelist (verified in Zenith audit).

### Admin / Upgrade Risk

| Role | Threshold | Authority |
|---|---|---|
| **Owner / Admin** | 3-of-5 multisig | Upgrade implementations, assign roles, configure parameters |
| **Whitelist Manager** | 3-of-5 multisig | Add/remove KYC-approved addresses |
| **Emergency** | 2-of-4 multisig | Pause/unpause mint, redeem, transfer |
| **MPC treasury** | Theo internal | Execute pending mints / redemptions |

- **Signers undisclosed** publicly (team-internal).
- **No timelock** on upgrades or parameter changes.
- **No independent / external signers** in any role.

### Incident History

Clean through 2026-04-21. No reported exploits, forced pauses, or redemption failures. The rsETH incident on 2026-04-18 did not affect thBILL directly — DVN audit (§I.5) shows thBILL's bridge configuration is materially different from Kelp's.

### Lindy

~9 months live as of this assessment (launch July 2025). Modest by DeFi standards; short by traditional financial-product standards. No incidents but also limited stress-test history. The rsETH event was the first major adversarial test of the LayerZero OFT category thBILL depends on — thBILL's bridge held through the aftermath (no depeg, no contagion mint).

**Contract Risk Score: 5.5/10** — Single audit with clean findings (no Crit/High), competent architecture, 3-of-5 multisig structure with transparent roles. Deductions for: single audit firm, no bug bounty, OFT adapter likely post-audit, no timelock, upgradeable core, short Lindy.

---

## I.5 Supply Integrity — 5.5/10

Two distinct risk shapes stack here:
1. **Off-chain trust** — backing lives in a TradFi custody/fund structure (permissioned mint + custodian risk — see §III).
2. **Cross-chain bridge** — LayerZero OFT across 5+ destinations. **Verified on-chain 2026-04-21:** the major pathways all require 2-3 DVNs per message, meaningfully stronger than rsETH's single-DVN config. Residual concern is the default 1-DVN config inherited on obscure pathways (Sei / Shimmer / Bitlayer / Sonic), exploitable only if Theo has `setPeer` configured for those EIDs.

### Mint paths

#### kyc_mint — admin-mint (Ethereum, canonical)
- **Trust assumption:** Theo issuance operator (KYC-gated permissioned role)
- **Capture cost estimate:** Compromise of the issuance signer / operator keys
- **Value secured:** Entire thBILL supply (~$134M as of 2026-04-21)
- **Asymmetry:** Depends on operator key management (EOA vs multisig not public for the issuance role specifically)
- **Controls:** KYC bottleneck on counterparties; Emergency 2-of-4 can pause

#### l2_oft_mint_major — bridge-oft (Ethereum ↔ Arbitrum, Base, Avalanche, Polygon, BSC, Optimism, Mantle/Linea)
- **Trust assumption:** 2-3 LayerZero DVNs required per pathway (verified on-chain 2026-04-21)
- **Capture cost estimate:** Compromise ≥2 independent DVN providers simultaneously (meaningful economic barrier; the rsETH failure mode requires only 1)
- **Value secured:** Bulk of thBILL supply (these are the chains Theo actively deploys on)
- **Asymmetry:** Acceptable for a ~$134M-TVL asset at present size
- **Controls:** Multi-DVN quorum; LayerZero pauser (OApp-level pause capability not independently verified)

#### l2_oft_mint_obscure — bridge-oft (inbound from Sei, Shimmer, Bitlayer; Sonic on Ethereum only)
- **Trust assumption:** 1 DVN (default LayerZero config, not an explicitly configured hardening)
- **Capture cost estimate:** Same as rsETH's failure mode — low six figures
- **Value secured:** Any thBILL that can be minted via the pathway
- **Asymmetry:** HIGH if exploitable, ZERO if peer not configured
- **Exploitability gate:** Requires Theo to have `setPeer(eid, address)` configured for those EIDs on the receive-side contract. Theo does not publicly deploy thBILL on Sei / Shimmer / Bitlayer / Sonic, so peers are most likely unset — making this a theoretical exposure rather than an active one. **This is the remaining unverified item.**
- **How we verified:** Ran `getUlnConfig(thBILL, srcEID)` on the ReceiveUln302 library of each chain (Ethereum, Arbitrum, Base) using the Blockaid script. Raw output at `data/thbill-dvn-audit-2026-04-21.txt`.

#### basket_composition — admin-mint (Ethereum)
- **Trust assumption:** Theo admin role (3-of-5 owner multisig) can add/remove basket constituents
- **Risk shape:** A malicious composition change could substitute high-quality tULTRA with a lower-quality instrument without changing supply, effectively diluting backing.
- **Controls:** 3-of-5 quorum; no timelock

#### tultra_upstream — custody-upstream
- **Trust assumption:** Standard Chartered Libeara (custodian) + Wellington Management (adviser) + FundBridge (intermediary)
- **Failure shape:** TradFi operational failure, regulatory seizure, fund restructuring, or custodian insolvency. Not subvertible by a single compromised key, but also not recoverable by any on-chain mechanism.
- **Controls:** MAS regulatory regime for FundBridge; Wellington Management's institutional record
- **No bankruptcy remoteness for token holders** — this is a structural risk ceiling

#### admin_upgrade — admin-mint
- **Trust assumption:** Theo 3-of-5 owner multisig (signers undisclosed)
- **Controls:** Multisig quorum only. No timelock, no independent signers.

### Failure mode analysis

**l2_oft_mint_major — NOT rsETH-shaped.** On-chain audit (2026-04-21) confirmed 2-3 required DVNs on all pathways between Ethereum and the chains Theo actively deploys to. A forged `lzReceive` requires compromising a quorum of independent DVNs, not a single verifier. This is the configuration LayerZero recommended post-rsETH.

**l2_oft_mint_obscure — latent default.** The Ethereum receive lib accepts packets from Sei / Shimmer / Bitlayer / Sonic with only 1 required DVN; Arbitrum/Base similarly for Sei/Shimmer/Bitlayer. Almost certainly the LayerZero default config inherited without explicit override. Exploitable ONLY if Theo's OApp has `setPeer` configured for those EIDs; without peer config, a forged message is rejected at the OApp layer regardless of DVN approval.

**kyc_mint compromise.** If the issuance operator's signing key is compromised, an attacker can mint thBILL against no off-chain USD deposit. The KYC gate applies to mint/redeem against the canonical contract, not to on-chain transfer or use-as-collateral — forged mints would be usable as DeFi collateral (Pendle, Euler) before the protocol can pause.

**tULTRA / SC Libeara upstream failure.** Off-chain custody is the ultimate backstop. Failure upstream cannot be compensated by any on-chain mechanism no matter how well-audited the contracts are.

### Red flags

- **default-dvn-on-unused-pathways** — Ethereum, Arbitrum, and Base all accept single-DVN packets on 3-4 obscure inbound pathways (Sei / Shimmer / Bitlayer / Sonic). Exploitable only if peer is configured for those EIDs; peer config is the remaining unknown.
- **off-chain-custody-dependency** — Backing lives in TradFi. Correct for an RWA and unavoidable.
- **permissioned-mint** — Mint requires a permissioned operator role. Key management practices and signer identity not public.
- **no-bankruptcy-remoteness** — Token holders hold a contractual claim against Theo Protocol Corporation, not a direct interest in underlying T-bills.
- **no-timelock-disclosed** — Upgrades and parameter changes can execute immediately upon multisig approval.

### DVN audit results (2026-04-21)

| Chain | thBILL address | ReceiveUln302 | Pathways OK | Pathways exposed |
|---|---|---|---|---|
| Ethereum | `0x5FA487BCa6158c64046B2813623e20755091DA0b` | `0xc02Ab410f0734EFa3F14628780e6e695156024C2` | 8 (2 DVNs each) | 4 (Sei, Shimmer, Bitlayer, Sonic — 1 DVN default) |
| Arbitrum | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | `0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6` | 9 (2-3 DVNs, Eth→Arb at 3) | 3 (Sei, Shimmer, Bitlayer) |
| Base | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | `0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf` | 9 (2-3 DVNs, Eth→Base at 3) | 3 (Sei, Shimmer, Bitlayer) |

Raw audit output: `~/riskAnalyst/reports/data/thbill-dvn-audit-2026-04-21.txt`

**Supply Integrity Score: 5.5/10** — Bridge verified multi-DVN (strong); off-chain custody + permissioned mint + no bankruptcy remoteness + unverified peer config on obscure EIDs keep the ceiling off higher scores.

---

## II. Economic / Market Risk — 6.0/10

### II.a Collateral & Backing

**Composition:** 100% tULTRA as of 2026-04-21. tULTRA is a wrapped representation of Standard Chartered Libeara's tokenized Treasury fund, operated in collaboration with Wellington Management (sub-advisor) and FundBridge (MAS-regulated Singapore fund manager).

**Asset class:** Short-duration US Treasury bills. Lowest sovereign credit risk globally. Exposure is to interest-rate and duration risk (minimal for ultra-short T-bills), not default risk.

**Structural model:** thBILL's vault contract tracks `totalAssets = on-chain holdings + pendingAssets`. The "pendingAssets" value represents optimistically-minted balance not yet settled with the upstream issuer. This is transparent on-chain but represents a short unsecured counterparty exposure to Theo's operations during the 4-day settlement window.

**Collateral sufficiency:** 1:1 NAV representation. No over-collateralization, no junior tranche, no first-loss buffer.

**Concentration:** Single underlying (tULTRA). Theo has stated a diversification roadmap (adding other regulated T-bill tokens) but it is not yet active as of 2026-04-21.

**Liquidity of underlying:** US T-bills are among the most liquid fixed-income instruments globally. Conversion from fund share to USDC depends on Theo's settlement rails (up to 4 business days).

**Bankruptcy remoteness:** None. Token holders have a contractual redemption claim against Theo Protocol Corporation, not direct legal ownership of fund shares. In issuer insolvency, recovery would depend on Panamanian corporate proceedings.

### II.b Minting & Redemption

**Optimistic minting model:**
1. User (KYC-approved) transfers USDC to Theo's whitelisted treasury address
2. Theo's MPC mints thBILL immediately to the user's address as a "pending asset"
3. Off-chain settlement: underlying issuer (tULTRA) confirms receipt of funds and issues corresponding tTokens; Theo reconciles pending → finalized backing assets
4. `totalAssets = on-chain + pendingAssets` formula keeps NAV consistent during the settlement lag

**Settlement risk:** Until reconciliation completes, users hold short-term unsecured exposure to Theo's settlement operations. Typically resolves within 4 business days.

**Redemption path:**
- User submits redemption request via Theo interface (KYC-gated)
- Theo's MPC treasury processes payout in **USDC**, generally within 4 business days
- thBILL tokens are burned; corresponding assets are unwound from underlying fund at fund redemption windows
- **Holders do NOT have direct claim on T-bills** — redemption is USDC-equivalent, not asset delivery

**Controls:**
- KYC required for primary mint/redeem (compliance)
- Whitelisting may apply to transfers (limits secondary market fungibility in some deployments)
- Emergency 2-of-4 multisig can pause
- No disclosed timelock on parameter changes

### II.c Secondary Market Liquidity & Peg

**Market cap (2026-04-21):** ~$134M (down from ~$162M earlier in April — some outflow likely associated with rsETH-driven risk-off across RWAs on LayerZero).

**Current price:** $1.02 USD. 7-day range $1.01-$1.02 (tight peg). 24h volume ~$681K (substantially lower than the ~$5M daily turnover reported in the Nov 2025 assessment — consistent with the mcap decline).

**Secondary market venues (Nov 2025 snapshot, not re-verified live for this report):**
| Network | Pool | Liquidity (Nov 2025) | 24h Vol (Nov 2025) | Age |
|---|---|---|---|---|
| Arbitrum | Uniswap v3 thBILL/USDC | $4.5M | $4.1M | 3 mo |
| Ethereum | Uniswap v3 thBILL/USDC | $1.9M | $0.93M | 3 mo |
| Base (Project-X) | thBILL/WHY-Pe | $53.7K | $34.8K | 2 mo |
| Base (Project-X) | thBILL/WHY-Pe | $8.1K | $6.5K | 1 mo |

**Note:** These pool figures are from the Nov 2025 manual assessment. Given the ~15% market-cap drawdown since that window and the ~7x decline in daily volume, on-chain pool depths are almost certainly lower now. Worth re-querying from DexScreener before any sizing decision.

**Peg stability (Nov 2025 window, 2025-11-05 → 2025-11-06, 23 intraday points):**
- Average premium/discount: −0.19% (slight discount)
- Max premium: +0.17%
- Max discount: −0.62%
- Range: ~0.8% peak-to-trough

**Peg stability (2026-04-18 to 2026-04-21 rsETH-incident window):** Public price data shows thBILL trading $1.01-$1.02 through the rsETH contagion. **No contagion depeg.** The bridge holding (see §I.5) and the fundamentally different asset class insulated thBILL from rsETH-driven outflows aside from the modest mcap decline.

**Lock-ups:** None for secondary trading. Primary redemption carries soft 4-business-day notice period. Whitelisting requirements can narrow the arbitrage participant base on some deployments.

**Economic Risk Score: 6.0/10** — High-quality sovereign underlying, tight peg discipline, functional primary redemption with settlement lag. Deductions for: non-atomic redemption (USDC-only, T+4), single-underlying concentration, no first-loss buffer, no bankruptcy remoteness, declining secondary liquidity post-rsETH.

---

## III. Project / Counterparty Risk — 4.5/10

### Team

- **Identity:** Theo Protocol Corporation — registered in Panama (San Francisco District, Panama City)
- **Founders:** ex-Optiver and IMC Trading quantitative traders. Public / doxxed.
- **Funding:** $20M raise April 2025. Lead: Hack VC. Co-investors: Anthos Capital, angel investors from Citadel, Jane Street, JPMorgan.
- **Regulatory status:** Theo itself is **not a licensed financial institution**. Underlying tULTRA is managed by MAS-regulated FundBridge (Singapore) and sub-advised by Wellington Management. Institutional controls exist at the asset level, not the issuer level.
- **Recourse:** No legal segregation or bankruptcy-remote language in Terms & Conditions. Issuer insolvency recovery would depend on contractual enforcement through Panamanian corporate proceedings.

### Governance

- **Structure:** Fully centralized. **No DAO, no governance token, no public voting system, no community forum.**
- **Control:** All decisions — smart contract upgrades, whitelist management, basket composition, emergency actions — executed by Theo's internal multisigs and MPC.
- **Transparency:** Role definitions and quorums are public (3-of-5 owner, 3-of-5 whitelist, 2-of-4 emergency). Signers are not. No timelock on parameter or code changes.
- **Change communication:** No formal on-chain governance portal, snapshot, or proposal pipeline. Updates announced via Theo's operational releases.
- **Reporting:** Public dashboard for NAV per share and weekly performance updates. Granular composition breakdown (cash / invested / pending), independent reserve attestation, and detailed historical NAV reporting are limited.

### Institutional Partners

| Partner | Role | Regulatory status |
|---|---|---|
| Standard Chartered Libeara | Tokenized fund issuer | Major global bank; tokenization venture |
| FundBridge | Fund manager | MAS-regulated (Singapore) |
| Wellington Management | Sub-advisor | SEC-registered investment adviser (US) |

The institutional partner set is a meaningful mitigant. FundBridge being MAS-regulated imposes real compliance discipline at the asset level, even if Theo itself is unregulated.

### Governance Dependencies

- **Basket composition changes** determined by Theo's internal investment/risk committee (not public).
- **Emergency interventions** — the 2-of-4 emergency multisig can pause mints / transfers globally at discretion.
- **Custodian integration decisions** handled internally without third-party ratification.

### TVL Trajectory

- **July 2025:** Launch
- **Peak (Oct 2025):** $1.11 price, market cap at historical high
- **Nov 2025:** ~$6.5M DEX liquidity, ~$5M daily turnover, price slightly below NAV
- **April 2026:** ~$134M mcap (down from ~$162M earlier April). ~$681K daily vol. Modest risk-off post-rsETH but no structural impairment.

**Project Risk Score: 4.5/10** — Strong team (ex-Optiver/IMC, $20M raise from credible investors), strong underlying partner set (Libeara/FundBridge/Wellington imposes institutional discipline at the asset level). Deductions for: fully centralized governance with no independent oversight, no legal bankruptcy remoteness, Panama jurisdiction with weak regulatory supervision of issuer entity, no timelock, undisclosed multisig signers, no governance forum.

---

## IV. Overall Risk Score — 5.5/10

| Category | Score (0-10) | Weight | Key Points |
|---|---|---|---|
| Smart Contract | 5.5 | 40% | Single Zenith audit clean (0C/0H); no bug bounty; OFT expansion likely post-audit; 9-month Lindy |
| Economic / Market | 6.0 | 30% | High-quality UST underlying; tight peg; 4-day redemption lag; single-underlying concentration; no bankruptcy remoteness |
| Project / Counterparty | 4.5 | 30% | Strong team and regulated institutional partners; fully centralized governance; Panama jurisdiction; no timelock |
| **Overall** | **5.5** | | **Moderate risk — a high-quality asset (US T-bills) wrapped in an early-stage issuer with centralized governance and limited legal remoteness. BB+ credit equivalent.** |

**Blended credit equivalent:** Manual assessment assigned **BB+ equivalent** based on A-range sovereign asset quality combined with BB-range unsecured-issuer structure. This remains consistent with 2026-04-21 findings.

---

## V. Comparison vs Peers

| Asset | Issuer | TVL (2026) | Redemption | KYC | Bankruptcy Remote | Cross-chain mechanism | Score est. |
|---|---|---|---|---|---|---|---|
| **thBILL** | Theo (Panama) | $134M | USDC, T+4 | Yes | No | LayerZero OFT (multi-DVN) | **5.5** |
| **USYC** | Circle / Hashnote | $2.2B | USDC, ~instant | Qualified only | Yes (Cayman fund structure) | Native multi-chain via Circle | ~7.0 |
| **BUIDL** | BlackRock / Securitize | $2.0B | USDC via Circle, instant | Qualified only | Yes (3(c)(7) fund) | Securitize rails | ~8.0 |
| **OUSG** | Ondo | ~$1.5B (with USDY) | USDC, instant or T+1 | Qualified only | Yes | Native + LayerZero | ~7.0 |
| **USTB** | Superstate | $523M | USDC, T+1 | Qualified only | Yes | Native multi-chain | ~7.0 |
| **USDY** | Ondo | (incl. OUSG) | USDC, T+1 | Retail (ex-US) | Yes (Cayman structure) | Native + LayerZero | ~7.0 |

**Read:** thBILL is materially smaller than every peer and structurally weaker on the two dimensions that matter most for RWA credit quality: **bankruptcy remoteness** and **redemption atomicity**. Peers operate through 3(c)(7) or Cayman fund structures giving token holders direct legal claim on assets; thBILL's contractual-claim-against-Theo model is a BB-range structure wrapped around A-range collateral. Peers also use instant or T+1 redemption; thBILL's T+4 is the longest in the set. Theo's institutional partners (Libeara/Wellington) narrow the gap at the asset level but don't close it at the issuer level.

On the bridge dimension, thBILL's LayerZero OFT multi-DVN config is comparable to OUSG/USDY (also multi-DVN via LayerZero since the rsETH event). BUIDL/USTB/USYC avoid LayerZero entirely, using native multi-chain deployment via their compliance infrastructure — which is a different risk category (regulated rails vs cryptographic bridge quorum) but structurally stronger against the rsETH-class threat model.

---

## VI. Key Recommendations

**Highest priority — unverified items:**

1. **Verify `setPeer` status** for EIDs 30214 (Sei), 30230 (Shimmer), 30320 (Bitlayer), 30367 (Sonic) on the Ethereum, Arbitrum, and Base thBILL contracts. If any peer is configured, the 1-DVN default on that inbound pathway becomes live exploit surface. Peer config check requires resolving the thBILL proxy's actual OFT interface (peers(uint32) reverted in the 2026-04-21 session — likely a non-standard iToken shape).
2. **Confirm OFT adapter was in Zenith audit scope.** The July 2025 audit predates the cross-chain expansion to Avalanche / HyperEVM / Solana. If the adapter is unaudited, a fresh audit on the bridge surface is the single highest-value remediation.
3. **Disclose multisig signer composition** for Owner, Whitelist, and Emergency roles. Currently opaque; meaningful for risk modeling.

**Medium priority — ongoing monitoring:**

4. Re-query Uniswap v3 pool depths across Ethereum / Arbitrum / Base. Nov 2025 pool data is 5 months old and likely decayed given 7x volume decline.
5. Monitor secondary-market peg weekly through the post-rsETH risk-off window. Any sustained >0.5% discount signals structural concerns.
6. Watch for basket diversification beyond tULTRA. Single-issuer concentration is the largest un-mitigated economic risk.
7. Track settlement latency. 4-day baseline is longest in peer set; any drift higher is a liquidity-management signal.
8. Look for bug bounty program launch.

**Lower priority — structural limits:**

9. Bankruptcy remoteness would require legal restructuring (e.g., creating a bankruptcy-remote issuer SPV). Unlikely to happen absent regulatory pressure or major allocator demand.
10. Panama jurisdiction is a known concern; peer RWAs use Cayman or Delaware 3(c)(7) structures for a reason.

---

## VII. Chain Deployments

| Chain | thBILL address | Bridge mechanism |
|---|---|---|
| Ethereum (canonical) | `0x5FA487BCa6158c64046B2813623e20755091DA0b` | Native — KYC mint/redeem against tULTRA |
| Arbitrum | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | LayerZero OFT (2-3 DVNs verified) |
| Base | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | LayerZero OFT (2-3 DVNs verified) |
| HyperEVM | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | LayerZero OFT (DVN config not audited in this report) |
| Avalanche | address TBD | LayerZero OFT (DVN config not audited in this report) |
| Solana | address TBD | LayerZero OFT (Solana-side DVN config not audited in this report) |

**FarmTracker exposure** (as of 2026-04-21): Pendle PT-thBILL on Arbitrum (+ Euler collateral use). Lives behind the Arbitrum receive path, which is verified multi-DVN.

---

## Bottom Line

thBILL is a moderate-risk tokenized T-bill product with high-quality sovereign underlying assets (delivered via Standard Chartered's Libeara issuer, FundBridge as MAS-regulated fund manager, and Wellington Management as sub-advisor) wrapped in an early-stage issuer with centralized governance. Overall score **5.5/10 (BB+ credit equivalent)**.

The three dimensions defining the risk:
- **Asset quality (strong):** US T-bills with institutional-grade fund management.
- **Bridge security (verified strong post-rsETH):** LayerZero OFT with 2-3 DVNs on major pathways. Materially different from the single-DVN config that broke Kelp rsETH on 2026-04-18. The bridge held cleanly through the incident and contagion.
- **Issuer structure (weak):** No bankruptcy remoteness, fully centralized governance, no timelocks, undisclosed multisig signers, Panama jurisdiction without regulatory supervision of the issuer entity, single underlying (tULTRA), 4-day redemption lag.

For a DeFi user holding PT-thBILL or using thBILL as collateral, the pragmatic read is: the on-chain layer (contract + bridge) is adequately diligenced and passed the rsETH stress test; the off-chain layer (issuer solvency, legal recourse) remains the binding constraint. Sizing should reflect unsecured-counterparty exposure to Theo, not direct exposure to US T-bills.

---

## Sources

- Theo Network docs: https://docs.theo.xyz/thbill
- Zenith Audits (July 2025) — Theo tToken/iToken contract suite
- CoinGecko — thBILL live price & metrics: https://www.coingecko.com/en/coins/theo-short-duration-us-treasury-fund
- Etherscan — thBILL token: https://etherscan.io/token/0x5FA487BCa6158c64046B2813623e20755091DA0b
- Arbiscan — thBILL token: https://arbiscan.io/token/0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a
- LayerZero OFT DVN audit script (Blockaid): https://gist.github.com/IdoBn/7753f16fdb6810b11c5c87cdf11f8aa0
- 2026-04-21 on-chain DVN audit results: `data/thbill-dvn-audit-2026-04-21.txt`
- Theo $20M raise announcement (April 2025) — Hack VC / Anthos Capital / angels
- Archived prior assessment (Nov 2025 manual): `archive/thbill-manual-2025-11.md`
- RootData Theo profile: https://www.rootdata.com/Projects/detail/Theo
- Cryptowisser — thBILL on Base/Arbitrum/HyperEVM via LayerZero: https://www.cryptowisser.com/news/thbill-now-live-on-base-arbitrum-and-hyperevm-powered-by-layerzero/
- CoinDesk — rsETH $292M Kelp DAO exploit: https://www.coindesk.com/tech/2026/04/19/2026-s-biggest-crypto-exploit-kelp-dao-hit-for-usd292-million
