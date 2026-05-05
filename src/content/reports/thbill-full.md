---
asset: "thBILL"
slug: "thbill-full"
aliases: ["thBILL", "Theo thBILL", "Theo Short Duration US Treasury Fund"]
chains: ["eth", "arb", "base", "hyperevm"]
category: "tokenized-treasury"
assessment_type: "full"
audience: "institutional"
companion_report: "thbill"
date: "2026-04-28"
last_verified: "2026-05-05"
live_dashboard_url: "https://todayindefi.github.io/thbill-risk-info/"
production: true
issuer: "Theo Protocol Corporation"
market_cap_approx: 138000000
tvl_gross: 138000000
contract_score: 5.5
economic_score: 5.3
project_score: 4.5
overall_score: 5.1
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
    notes: "LayerZero OFT between Ethereum <-> Arbitrum / Base / HyperEVM: 3 DVNs per peered pathway (LayerZero Labs + Polyhedra/Google Cloud + Horizen Labs). Meaningfully stronger than the single-DVN config that broke rsETH. Active deployment chains: Ethereum, Arbitrum, Base, HyperEVM."
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
  - "default-dvn-on-unused-pathways-inert"
  - "oft-adapter-code-likely-unaudited"
  - "no-oftadapter-pause-function"
  - "lz-endpoint-shared-dependency"
  - "mpc-scheme-undocumented"
  - "uups-upgrade-authority-on-itoken"
  - "pending-assets-self-reported-oracle"
  - "synthetic-tultra-wrapper"
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
| **Secondary access** | Uniswap V3 on Ethereum / Arbitrum, Uniswap V4 on Arbitrum, Project X on HyperEVM, plus smaller venues — all permissionless (no KYC). HyperEVM is the deepest single pool today; Base is a deployment chain but has no live liquidity. |
| **Deployed chains** | Ethereum (canonical), Arbitrum, Base, HyperEVM |
| **Cross-chain mechanism** | LayerZero OFT |
| **Market cap** | \~$138M (supply \~138.26M × NAV $1.0251); \~$117M after netting out thUSD's intra-protocol holding (66% of supply held at thUSD reserve, see §II.c) |
| **Price** | $1.019 (DEX VWAP, \~0.52% discount to NAV) |

> *Overall score (5.0) is a weighted composite — see §IV for category weights.*

---

## Protocol Summary

thBILL is Theo Protocol's flagship tokenized Treasury basket — an on-chain money-market product providing exposure to short-duration US T-bills through a regulated TradFi fund stack (Standard Chartered's Libeara issuer, FundBridge as MAS-regulated fund manager, Wellington Management as sub-advisor). Launched July 2025 on Ethereum and expanded via LayerZero OFT to Arbitrum, Base, and HyperEVM, thBILL sits at the intersection of two risk categories: off-chain TradFi custody and on-chain cross-chain bridge security.

The post-incident context matters: the rsETH ($292M) LayerZero-OFT exploit of 2026-04-18 is directly relevant to thBILL because thBILL uses the same architectural class. thBILL's OFTAdapter on Ethereum (`0xfDD22Ce6D1F66bc0Ec89b20BF16CcB6670F55A5a` — separate from the iToken vault at `0x5FA487…DA0b`) is configured with **3 required DVNs** on every peered pathway (Arbitrum, Base, HyperEVM, BSC, Mantle, Monad) — an explicit upgrade above the 2-DVN MIN-PASS default and a meaningfully stronger posture than the single-DVN config that broke Kelp. **Zero exposed-AND-peered pathways across all four EVM deployments** — the bridge layer is verified clean.

Overall profile: strong asset quality (US T-bills via regulated institutions), competent technical implementation (single Zenith audit, multi-DVN bridge), offset by centralized governance (fully Theo-controlled multisigs, no DAO, no timelock), non-atomic redemption (4-day USDC settlement), limited operating history (\~9 months), and no bankruptcy-remote claim on underlying T-bills.

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

**MPC treasury — trust unpacked.** The "MPC treasury" row above is a significant trust surface that deserves decomposition. Publicly documented: *that* an MPC scheme is used to co-sign mint/redeem transactions. Not publicly documented: the threshold scheme (t-of-n), the identity of co-signing parties (internal Theo staff only vs a managed custodian like Fireblocks / Copper / Fordefi), the geographic distribution of co-signers (single-jurisdiction subpoena risk), or the key-generation ceremony attestation. "MPC" is often perceived as stronger than "multisig," but a managed-service MPC introduces a third-party infrastructure dependency (see the 2023 Fireblocks key-exposure disclosure for precedent). Without these details confirmed, the MPC should be treated as functionally equivalent to an opaque multisig of unknown composition.

**Proxy admin role — UUPS pattern, no separate admin key.** EIP-1967 slot reads on the iToken vault (`0x5FA487…DA0b`) return: implementation = `0x325478a069b0DbBdfbEe909FA3741F84259Ba519`, admin slot **empty** — confirming UUPS upgradeable, where upgrade authority lives in the implementation's `_authorizeUpgrade` modifier (typically owner-gated) rather than a separate proxy-admin role. The Theo 3-of-5 owner multisig (`0x94877640…01295`) holds full upgrade authority via this path; there is no undocumented separate-admin-key risk surface. The OFTAdapter at `0xfDD22Ce6…F55A5a` is **not a proxy at all** — both EIP-1967 admin and implementation slots are empty, and the contract has 11 KB of direct bytecode, indicating an immutable deployment. Bridge logic cannot be upgraded; only `setPeer`, `setConfig`, and similar OApp parameter changes are owner-gated.

### Incident History

Clean since launch. No reported exploits, forced pauses, or redemption failures. The rsETH incident on 2026-04-18 did not affect thBILL directly — DVN audit (§I.5) shows thBILL's bridge configuration is materially different from Kelp's.

### Lindy

\~9 months live as of this assessment (launch July 2025). Modest by DeFi standards; short by traditional financial-product standards. No incidents but also limited stress-test history. The rsETH event was the first major adversarial test of the LayerZero OFT category thBILL depends on — thBILL's bridge held through the aftermath (no depeg, no contagion mint).

**Contract Risk Score: 5.5/10** — Single audit with clean findings (no Crit/High), competent architecture, 3-of-5 multisig structure with transparent roles, and proper 3-DVN custom config across every peered cross-chain pathway. Deductions for: single audit firm, no bug bounty, OFT adapter likely post-audit, no timelock, upgradeable core, short Lindy. Trust holes: the MPC scheme (threshold, co-signers, ceremony) is undocumented and should be treated as opaque multisig of unknown composition; the distinct EIP-1967 proxy-admin role is not verifiable via on-chain reads — worst case is an undocumented proxy-admin key independent of the 3-of-5 multisig.

---

## I.5 Supply Integrity — 5.5/10

Two distinct risk shapes stack here:
1. **Off-chain trust** — backing lives in a TradFi custody/fund structure (permissioned mint + custodian risk — see §III). At the wrapper layer specifically: the tULTRA wrapper is **synthetic** — `ULTRA.balanceOf(tULTRA wrapper) = 0` and the underlying ERC-4626 contract is **dormant** (zero `EscrowBegin`/`EscrowEnd`, zero `depositOptimistic`, zero `Transfer` events, zero mints/burns over a 70-day observation window). The current 129.46M tULTRA supply was set under a prior implementation and carried through a UUPS upgrade. `totalAssets()` is fully attested via `totalAssetsPending`, not derived from held tokens. The 4626 interface at the tULTRA layer is **effectively ceremonial** — all real mint/redemption flows happen off-contract via Theo's MPC and Libeara's `UltraManagerFiat`. ULTRA functions as a reference unit for NAV accounting, not a claimable on-chain asset. Coverage is verified by reconciling Theo's treasury custody against `tULTRA.totalSupply()` (cross-check), not by reading ULTRA from the wrapper (contract invariant).
2. **Cross-chain bridge** — LayerZero OFT across 4 EVM chains. Bridge security has three separable layers: (a) **DVN configuration** (who validates cross-chain messages), (b) **adapter contract code** (what executes on receipt), and (c) **LayerZero Endpoint contracts themselves** (shared infrastructure admin-controlled by LayerZero's own governance — an issue pushed at the Endpoint layer, e.g., adversarial MessageLibrary swap or endpoint upgrade, affects every OFT including thBILL). For (a), every peered pathway on the Ethereum OFTAdapter (`0xfDD22Ce6D1F66bc0Ec89b20BF16CcB6670F55A5a`) and the L2 OFTs requires **3 DVNs** (LayerZero Labs + Polyhedra/Google Cloud + Horizen Labs) — an explicit upgrade above the 2-DVN MIN-PASS default. **Zero exposed-AND-peered pathways across all four EVM deployments** — peer config and DVN config are aligned on the Ethereum OFTAdapter just as on the L2s. The admin Safe is the same Theo `0x94877640…01295` on Ethereum (3-of-5), Arbitrum (3-of-5), Base, and HyperEVM (3-of-4 on the latter two — a small asymmetry worth noting). Adapter contracts (b) were most likely deployed after the single Zenith audit closed (the cross-chain expansion post-dates the July 2025 audit per §I) and are therefore probably unaudited code. **A correct DVN config does not protect against a buggy adapter.** Endpoint-layer risk (c) is a shared-dependency trust assumption inherited by every LayerZero project, not thBILL-specific, but worth naming. Residual concerns: 7 inbound EIDs on Ethereum's OFTAdapter receive lib are at the 1-DVN default (Sei, Shimmer, Blast, Fraxtal, Etherlink, Bitlayer, Katana) and 1 EID at 2-DVN MIN-PASS default (Sonic), but **all have `peers()` UNSET** — they are inert and exploitable only if Theo were to call `setPeer` for those EIDs without first upgrading the corresponding receive-lib config; this is a forward-looking operational concern, not a current exposure. The OFTAdapter has no `paused()` function (it's not Pausable), so emergency pause control on the bridge layer relies on either (i) Endpoint-level controls or (ii) pausing the underlying iToken (which the adapter must transferFrom/transfer through, indirectly halting bridge flows).

### Mint paths

#### kyc_mint — admin-mint (Ethereum, canonical)
- **Trust assumption:** Theo issuance operator (KYC-gated permissioned role)
- **Capture cost estimate:** Compromise of the issuance signer / operator keys
- **Value secured:** Entire thBILL supply (\~$133M)
- **Asymmetry:** Depends on operator key management (EOA vs multisig not public for the issuance role specifically)
- **Controls:** KYC bottleneck on counterparties; Emergency 2-of-4 can pause

#### l2_oft_mint_major — bridge-oft (Ethereum ↔ Arbitrum, Base, HyperEVM)
- **Trust assumption:** 3 LayerZero DVNs required per peered pathway (verified on-chain)
- **Capture cost estimate:** Compromise ≥2 independent DVN providers simultaneously (meaningful economic barrier; the rsETH failure mode requires only 1)
- **Value secured:** Bulk of thBILL supply (these are the chains Theo actively deploys on)
- **Asymmetry:** Acceptable for a \~$133M-TVL asset at present size
- **Controls:** Multi-DVN quorum; LayerZero pauser (OApp-level pause capability not independently verified)

#### l2_oft_mint_unpeered — forward-looking note, no active exposure
- **Current state:** All four chains' OFTAdapters have `peers()` returning zero for every EID where the receive-lib config is at LayerZero defaults (1-DVN or 2-DVN). With no peer set, no inbound message from those sources can reach the OApp regardless of DVN config — the OApp peer-check rejects forged sender addresses one layer above the DVN layer. **No active exposure today.**
- **Forward-looking concern:** If Theo expands to a new chain in future, operational ordering matters. The receive-lib DVN config for the new source EID should be upgraded to ≥2 DVNs (ideally 3, matching the current posture) *before* `setPeer` is called. A `setPeer` call without a prior `setConfig` would create a 1-DVN-exposure window for the duration of the gap.

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

**l2_oft_mint_major — NOT rsETH-shaped.** Every peered cross-chain pathway requires 3 DVNs (LayerZero Labs + Polyhedra/Google Cloud + Horizen Labs) on the L2 OFTs and the Ethereum OFTAdapter alike. A forged `lzReceive` requires compromising 3 independent DVN providers simultaneously, not a single verifier. This is the configuration LayerZero recommended post-rsETH.

**l2_oft_mint_obscure — latent default, all currently inert.** The Ethereum OFTAdapter receive lib accepts 1-DVN packets from 7 source EIDs and 2-DVN packets from 1 EID (Sei, Shimmer, Blast, Fraxtal, Etherlink, Bitlayer, Katana, Sonic), with similar long-tail defaults on the L2s — all LayerZero default config inherited without explicit override. **`peers()` returns zero for every one of those EIDs across every chain — all unset, all inert.** A forged message from any of those EIDs would fail at the OApp peer-check step regardless of DVN count, because there's no configured peer to validate against. **Forward-looking note:** if Theo expands to a new chain in future, they should set the corresponding receive-lib DVN config to ≥2 *before* calling `setPeer` for that chain — operational ordering matters because peer-set without DVN-upgrade would create a live exposure for the duration of the gap.

**kyc_mint compromise.** If the issuance operator's signing key is compromised, an attacker can mint thBILL against no off-chain USD deposit. The KYC gate applies to mint/redeem against the canonical contract, not to on-chain transfer or use-as-collateral — forged mints would be usable as DeFi collateral (Pendle, Euler) before the protocol can pause.

**tULTRA / SC Libeara upstream failure.** Off-chain custody is the ultimate backstop. Failure upstream cannot be compensated by any on-chain mechanism no matter how well-audited the contracts are.

### Red flags

- **synthetic-tultra-wrapper** — The tULTRA contract holds zero ULTRA despite declaring ULTRA as its `asset()`. The 4626 contract has been dormant over a 70-day observation window (zero mint/burn/escrow events); the current 129.46M supply was set under a prior implementation and carried through a UUPS upgrade. `totalAssets()` is fully attested via `totalAssetsPending`. The 4626 interface is effectively ceremonial — institutional readers should not interpret "ERC-4626 vault" with the implicit trust assumptions that label normally carries.
- **oft-adapter-code-likely-unaudited** — the destination-chain OFT adapter contracts that execute `lzReceive` mints were probably deployed after the single July 2025 Zenith audit closed. Adapter bugs are a separate risk surface from DVN config; a correct DVN quorum does not defend against an adapter implementation bug. Highest residual bridge-layer concern.
- **default-dvn-on-unused-pathways-inert** — On the Ethereum OFTAdapter (`0xfDD22Ce6…F55A5a`): 7 inbound EIDs at 1-DVN default + 1 at 2-DVN MIN-PASS default (Sei, Shimmer, Blast, Fraxtal, Etherlink, Bitlayer, Katana, Sonic); similar long-tail defaults on the L2s. **All currently inert — `peers()` returns zero for every such EID across every chain.** Forward-looking concern: if Theo expands to a new chain, the receive-lib DVN config for that source EID should be upgraded to ≥2 *before* `setPeer` is called, otherwise the bridge would be live at 1-DVN for the duration of any gap.
- **no-oftadapter-pause-function** — The Ethereum OFTAdapter (`0xfDD22Ce6…F55A5a`) does NOT expose a `paused()` function — it's not Pausable. L2 OFTs likewise don't have it. Pause control on the bridge layer relies on (i) Endpoint-level pause controls held by LayerZero governance, or (ii) pausing the underlying iToken vault (which IS Pausable; the OFTAdapter must `transferFrom`/`transfer` through it, indirectly halting bridge activity). Worth confirming with Theo whether the iToken's pause modifier covers transfer hooks specifically.
- **off-chain-custody-dependency** — Backing lives in TradFi. Correct for an RWA and unavoidable.
- **permissioned-mint** — Mint requires a permissioned operator role. Key management practices and signer identity not public.
- **no-bankruptcy-remoteness** — Token holders hold a contractual claim against Theo Protocol Corporation, not a direct interest in underlying T-bills.
- **no-timelock-disclosed** — Upgrades and parameter changes can execute immediately upon multisig approval.
- **lz-endpoint-shared-dependency** — LayerZero Endpoint contracts are admin-controlled by LayerZero's own governance. An adverse upgrade or MessageLibrary swap at the Endpoint layer affects every OFT on the chain, thBILL included. Shared-infrastructure risk, not thBILL-specific.
- **mpc-scheme-undocumented** — The MPC treasury's threshold (t-of-n), co-signer composition (internal vs managed custodian), geographic distribution, and ceremony attestation are not publicly documented. MPC is often *perceived* as stronger than multisig, but without these details should be treated as an opaque multisig of unknown composition.
- **proxy-admin-role-unverified** — Owner multisig has upgrade authority per Theo docs, but a distinct proxy-admin role (per EIP-1967) has not been explicitly confirmed via on-chain reads. Worst case: an undocumented proxy-admin key can push implementation changes independently.
- **pending-assets-self-reported-oracle** — `pendingAssets` in the vault's `totalAssets` formula is set by Theo off-chain without on-chain proof of underlying deposit receipt. Functionally a centralized oracle with NAV-setting authority — detailed in §II.a.

### DVN audit results

Per-chain pathway summary against each chain's OFTAdapter:

| Chain | OFTAdapter address | Peered pathways (3 DVNs OK) | Unpeered + 1-DVN default (inert) | Exposed AND peered |
|---|---|---|---|---|
| Ethereum | `0xfDD22Ce6D1F66bc0Ec89b20BF16CcB6670F55A5a` | BSC, Arbitrum, Mantle, Base, **HyperEVM**, Monad — all 3 DVNs custom | Sei, Shimmer, Blast, Fraxtal, Etherlink, Bitlayer, Katana (1-DVN), Sonic (2-DVN) — all peers UNSET | **0** |
| Arbitrum | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | Ethereum, BSC, Mantle, Base — 3 DVNs custom | Sei, Shimmer, Blast, Fraxtal, Etherlink, Bitlayer, Sonic, Katana — 1-DVN default, peers UNSET | **0** |
| Base | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | Ethereum, BSC — 3 DVNs custom | Sei, Fraxtal, Etherlink, Katana — 1-DVN default, peers UNSET | **0** |
| HyperEVM | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | All peered routes at 3 DVNs custom (HyperEVM-specific LZ deployment) | No exposed inbound pathways found | **0** |

**Verified clean across all four EVM chains.** Every peered cross-chain pathway has 3-DVN custom config (LayerZero Labs + Polyhedra/Google Cloud + Horizen Labs); every 1-DVN-default pathway has `peers()` unset and is therefore inert. There is no rsETH-class exposure on thBILL's bridge layer.

### On-chain audit findings

Bridge layer audit covers seven dimensions (DVN count, DVN identity, MessageLibrary version, peer config, OApp pause, Endpoint identity, OApp admin) across all four EVM deployments. Headline: clean across all four chains.

**Deployment scope.** thBILL is deployed as an EVM token on **Ethereum, Arbitrum, Base, and HyperEVM** (the four chains returned by CoinGecko `detail_platforms`). The underlying ULTRA token is also issued on Solana — Theo's treasury holds \~25M ULTRA there as part of the basket backing (see §II) — but the thBILL OFT itself does not extend to Solana, and Solana is therefore out of scope for the bridge audit below.

**Bridge contract topology:**

| Chain | Token contract (iToken / OFT) | Bridge contract (OFTAdapter) | LZ Endpoint |
|---|---|---|---|
| Ethereum | `0x5FA487BCa6158c64046B2813623e20755091DA0b` (iToken vault, proxy) | `0xfDD22Ce6D1F66bc0Ec89b20BF16CcB6670F55A5a` (separate OFTAdapter wrapping the iToken; `approvalRequired=true`) | `0x1a44…728c` (canonical LZ V2) |
| Arbitrum | (same address as bridge) | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` (deterministic OFT — token and bridge in one contract) | canonical |
| Base | (same address as bridge) | same deterministic | canonical |
| HyperEVM | (same address as bridge) | same deterministic | `0x3A73033C…4a9AA9` (HyperEVM-specific LZ V2 deployment) |

**Architectural distinction.** On Ethereum (the canonical chain), thBILL uses a **two-contract pattern**: the iToken vault (`0x5FA487…DA0b`) holds the token logic and ERC-4626 multi-asset accounting; a separate **OFTAdapter** (`0xfDD22Ce6…F55A5a`) wraps it for cross-chain messaging — the adapter holds locked thBILL when bridging out and unlocks it when bridging in. On the L2s, thBILL uses the **single-contract OFT pattern** (token = bridge in one deployment, mints/burns instead of locks/unlocks). LayerZero peer/DVN reads on Ethereum target the OFTAdapter, not the iToken vault.

**Layer-by-layer audit matrix:**

| Layer | Status |
|---|---|
| 1. DVN count per peered pathway | **3 DVNs OK** on every peered route across all four EVM chains (LayerZero Labs + Polyhedra/Google Cloud + Horizen Labs by DVN address suffix). Explicit upgrade above the 2-DVN MIN-PASS default. |
| 2. DVN identity / collusion | Checked — multi-operator splits, no single-operator pathways. |
| 3. MessageLibrary version | Checked — DEFAULT UlnV302 on Eth/Arb/Base; CUSTOM library `0x7cacBe43…` on HyperEVM (HyperEVM-specific LZ deployment, not a security concern). |
| 4. Peer config | Verified across all four EVM chains. Ethereum OFTAdapter `peers()` reads cleanly: BSC, Arbitrum, Mantle, Base, HyperEVM, Monad are all peered (each returning the deterministic CREATE2 address of the L2 OFT); all other EIDs (including the 1-DVN-default and 2-DVN-default chains) return zero. |
| 5. OApp pause | The Ethereum OFTAdapter does NOT expose `paused()` — it's not Pausable. L2 OFTs likewise don't have it. The underlying iToken vault IS Pausable. Effective bridge-pause options: (i) LayerZero Endpoint-level controls held by LZ governance, or (ii) pausing the iToken vault (which the OFTAdapter must transferFrom/transfer through, indirectly halting bridge flows). Worth confirming with Theo whether the iToken's pause modifier covers transfer hooks. |
| 6. Endpoint trust | Checked — endpoint owner readable across all four chains; OApp delegate set on L2s, zero on Ethereum. |
| 7. OApp admin | `owner()` returns the same Theo Safe `0x94877640dD9E6F1e3Cb56Bf7b5665b7152601295` on the Ethereum OFTAdapter as on Arb/Base/HyperEVM. The Safe is **3-of-5 on Ethereum and Arbitrum** (signers `12eB20B2…`, `895F7c37…`, `7afb1D33…`, `5c1EA222…`, `b7cc3051…`); **3-of-4 on Base and HyperEVM** (small asymmetry — same address but different per-chain Safe configurations). Signer identities undisclosed — opaque-multisig framing applies. |

**Out-of-scope gaps** consistent across any LayerZero OFT audit: DVN RPC infrastructure, formal adapter contract audit coverage, real-world signer identity, per-pathway rate limits.

**New finding — multisig threshold inconsistency across L2s.** The same Theo admin Safe `0x94877640dD9E6F1e3Cb56Bf7b5665b7152601295` is deployed on Arbitrum, Base, and HyperEVM, but per-chain Safe configurations differ:

- **Arbitrum:** 3-of-5 (four shared signers + one Arbitrum-only signer `0x12eB20B24DAFaA2c832E414540256a192DAD9396`)
- **Base:** 3-of-4 (the four shared signers; no extra)
- **HyperEVM:** 3-of-4 (same four signers as Base)

Four shared signers across all three Safes: `0x895F7c37…`, `0x7afb1D33…`, `0x5c1EA222…`, `0xb7cc3051…`.

Same-address-different-deployment Safes are independent at each chain even at the same address. The Arbitrum-extra-signer pattern could be intentional (Arbitrum was deployed first; the extra signer might be a deprecated rotation never removed) or unintentional (config drift). Worth confirming with Theo. Signer key compromise scenarios differ if the 3-of-5-vs-3-of-4 split isn't deliberate.

**Operational-hygiene footnote — burn-address DVNs on unpeered pathways.** Same `0x000000000000000000000000000000000000dEaD` placeholder pattern observed on crvUSD-Fraxtal shows up on thBILL too:

- **Ethereum:** Shimmer (30230), Blast (30243), Fraxtal (30255), Etherlink (30292) — all unpeered or unverifiable due to proxy
- **Arbitrum:** Shimmer, Fraxtal, Etherlink — all unpeered
- **Base:** Fraxtal, Etherlink — all unpeered

Not exploitable today (no peers configured on these EIDs as far as readable). Becomes a 1-DVN hole in any cycle where Theo activates one of these chains; the burn-address DVN means cross-chain control messages can't deliver until receive config is replaced. Same operational risk class as the crvUSD-Fraxtal note.

**Endpoint dependency.** Ethereum/Arbitrum/Base all use the canonical LayerZero V2 endpoint (`0x1a44…728c`). HyperEVM uses a separate LZ deployment (`0x3A73…4a9AA9`). Two distinct trust roots, not one — HyperEVM's LZ governance is separate from canonical-LZ governance, so an adverse upgrade at the LayerZero level affects different chain subsets differently.

**Ethereum bridge introspection.** All standard OApp reads succeed on the OFTAdapter `0xfDD22Ce6D1F66bc0Ec89b20BF16CcB6670F55A5a`: `peers(eid)`, `owner()`, `endpoint()`, `oftVersion()`, `approvalRequired()` all return cleanly. Peer config is fully readable — the EIDs at 1-DVN default (Sei/Shimmer/Blast/Fraxtal/Etherlink/Bitlayer/Katana, plus 2-DVN Sonic) are confirmed UNSET. The iToken vault has a non-standard ABI shape that blocks generic OApp introspection, but it isn't an OApp — the OFTAdapter is the canonical bridge contract, and that one reads cleanly.

**Supply Integrity Score: 5.5/10** — Bridge verified multi-DVN with 3-DVN custom config on every peered pathway across all four EVM chains; peer config and DVN config aligned; zero exposed-AND-peered pathways. Admin Safe is the same Theo `0x94877640…01295` across all four chains (3-of-5 on Ethereum and Arbitrum; 3-of-4 on Base and HyperEVM — small asymmetry). One residual gap: OFTAdapter contract code is likely post-Zenith-audit and not independently audit-covered. Deductions for: off-chain custody + permissioned mint + no bankruptcy remoteness + likely-unaudited OFTAdapter code + LZ Endpoint shared dependency + undocumented MPC scheme + pending-assets self-reported oracle + no OFTAdapter pause function. The synthetic tULTRA wrapper finding (wrapper holds zero ULTRA, dormant 4626, fully attested `totalAssets`) adds a structural concern: the "ERC-4626" label normally implies more contract-enforced behavior than is actually present at the underlying layer.

---

## II. Economic / Market Risk — 5.3/10

### II.a Collateral & Backing

**Composition:** 100% tULTRA. tULTRA is a wrapped representation of Standard Chartered Libeara's tokenized Treasury fund, operated in collaboration with Wellington Management (sub-advisor) and FundBridge (MAS-regulated Singapore fund manager).

**Asset class:** Short-duration US Treasury bills. Lowest sovereign credit risk globally. Exposure is to interest-rate and duration risk (minimal for ultra-short T-bills), not default risk.

**Structural model:** thBILL's vault contract tracks `totalAssets = on-chain holdings + pendingAssets`. The "pendingAssets" value represents optimistically-minted balance not yet settled with the upstream issuer. This is transparent on-chain but represents a short unsecured counterparty exposure to Theo's operations during the 4-day settlement window.

**Pending-assets as a trusted oracle.** The `pendingAssets` value is **set by Theo off-chain with no on-chain proof of underlying deposit receipt** — it is functionally a centralized oracle with NAV-setting authority. A misreported `pendingAssets` (whether through operational error, accounting drift, or deliberate misstatement) would overstate NAV until manually reconciled. There is no independent verification mechanism (e.g., Chainlink proof-of-reserves feed, auditor-signed attestation, or on-chain bridge from the Libeara fund). For buyers during any given settlement window, the reported NAV is only as trustworthy as Theo's off-chain operations. This is a distinct trust surface from the custody chain itself and is separable from the bridge and audit concerns.

**Collateral sufficiency:** 1:1 NAV representation. No over-collateralization, no junior tranche, no first-loss buffer.

**Concentration:** Single underlying (tULTRA). Theo has stated a diversification roadmap (adding other regulated T-bill tokens) but it is not yet active.

**Liquidity of underlying:** US T-bills are among the most liquid fixed-income instruments globally. Conversion from fund share to USDC depends on Theo's settlement rails (up to 4 business days).

**Bankruptcy remoteness:** None. Token holders have a contractual redemption claim against Theo Protocol Corporation, not direct legal ownership of fund shares. In issuer insolvency, recovery would depend on Panamanian corporate proceedings.

**Backing-ratio semantics — three tiers.** Because the redemption pipeline runs partly on-chain and partly as an off-chain receivable from Libeara (see §II.b), a single ratio cannot honestly answer every risk question. Three tiers are tracked:

- **Economic backing** (`usd_backing_ratio`) — Treasury ULTRA + queue ULTRA + treasury USDC + any in-flight Libeara receivable, divided by thBILL liabilities. Answers *"does Theo have the money, on-chain or predictably incoming?"* Headline figure for general purposes; this is what the dashboard surfaces on the Live Metrics card.
- **On-chain verified** (`usd_backing_ratio_on_chain`) — same numerator minus the in-flight receivable. Answers *"what can be proven directly from chain state right now?"* Strict honesty check; dips 10–15 percentage points during Stage B cycles for 1–7 days at a time, a predictable cyclical artifact rather than a solvency signal.
- **Post-settlement floor** (`usd_backing_ratio_floor`) — Treasury ULTRA + treasury USDC only, excluding both the in-flight queue and the receivable. Answers *"if every off-chain counterparty vanished and all in-flight claims went to zero, what would remain?"* Tail-risk stress view.

The three tiers converge to identical values during steady state; they diverge only during Stage B windows. Escalation during delayed or failed settlement is carried by the Flow B banner and Reconciliation Activity widgets on the dashboard, not by mechanically hair-cutting the headline ratio — the empirical T+1 to T+7 envelope is tight enough that face-value accounting is appropriate until a cycle actually runs past T+14.

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

**Fee schedule — opaque at underlying layer:**
- **thBILL wrapper:** zero management, performance, subscription, and redemption fees per Theo's public materials. Favorable but unproven sustainability given \~9-month operating history.
- **ULTRA underlying (Delta Wellington Ultra Short Treasury On-Chain Fund):** fee schedule is not publicly disclosed with confidence. Two public data sources exist and they disagree:
  - `app.rwa.xyz/assets/ULTRA` lists 0.32% management (range 0.09–0.32%), 0.45% redemption, 0% subscription, 0% performance — sourced via rwa.xyz's direct issuer-partnership data feed.
  - `stomarket.com` lists a single 0.45% management fee with no redemption fee.
  - Libeara's site, FundBridge's public pages, hydrax.io, Particula's AAA rating report (Feb 2025), and S&P Global's rating page all omit fee figures entirely.
- **Authoritative source is gated:** the Trust Deed / Information Memorandum is distributed only to accredited investors under Singapore private-placement rules. FundBridge's DApp FAQ portal (fundbridge.sg) is password-protected. The Arbitrum STEP 2 application references a fee summary table embedded as an image, referring readers to the Trust Deed for specifics.
- **Net read:** ULTRA charges non-zero fees at the underlying layer, likely totaling 30–100 bps annually with a possible redemption component, but the precise split is not verifiable from public sources. This opacity is itself a transparency knock versus peers like BUIDL, USYC, and USTB which disclose fee schedules openly.
- **Implications:**
  - Retail non-KYC holders never touch ULTRA fees directly (primary exit is unavailable to them) but any redemption-side fee sets an economic floor on the secondary-market NAV discount — KYC'd arbitrageurs must clear the fee + gas + T+4 settlement carry to close the spread.
  - KYC'd institutional holders redeeming through the primary path bear the full underlying-layer fee schedule. Before institutional sizing, obtain the schedule directly from FundBridge (`DeltaMasterTrust@fundbridge.sg`) — this also doubles as an operational-responsiveness check on the redemption path.

**Empirical redemption pattern (structural observations):**

A full-lifetime on-chain scan of thBILL's burn / Withdraw / operator-inbound events confirms several structural properties of the redemption flow that are time-invariant and worth surfacing for institutional sizing decisions.

**Two-stage redemption pipeline.** thBILL redemption is not a single on-chain event. It runs through two sequential stages, both gated behind the same Theo MPC operator but with very different cadences — and conflating them produces misleading risk signals:

- *Stage A — user-to-operator (continuous).* The holder transfers thBILL to Theo's redemption operator address. Theo's MPC pays USDC to the holder within a few hours from a pre-funded USDC float (held partly as spot USDC in TREASURY, partly deposited to Aave V3 Ethereum for yield). The thBILL is *not burned in Stage A* — it accumulates on the operator's balance. User-side redemption throughput runs continuously; this is what actual holders experience as "redeeming."
- *Stage B — batch burn and fund reconciliation (30–100 day cadence).* Periodically, Theo batches the accumulated thBILL and burns it in a single on-chain transaction, simultaneously moving the corresponding ULTRA from TREASURY into Libeara's `UltraManagerFiat` queue (`0x257062cb4ca916299fc49cb8fde1e34b43033c93`) to settle the underlying fund redemption. Mechanically: the ULTRA sits on the queue contract's own balance for 5–27 hours (per the three historical cycles observed), then is burned to the zero address — no interim custody transfer to any off-queue address. Libeara then processes the fiat side off-chain, and USDC returns to Theo's `TREASURY` wallet directly (never to an untracked intermediary) on a **T+1 to T+7 day timeline** empirically, from one of two known settlement sources: Libeara's operational Safe multisig (`0x7ee29373f0…`) or the `UltraManager` contract itself (`0x9056777ad…`, which has a dual role as NAV oracle *and* USDC settlement router). Between Stage B events, thBILL supply on-chain is flat even while Stage A is active.

**Custody-gap window during Stage B.** Between the queue-ULTRA burn and the USDC arrival from Libeara (1–7 days empirically), the value backing thBILL is genuinely off-chain — it exists as a receivable from Libeara, not as any on-chain token at any Theo- or Libeara-visible address. Under the three-tier backing semantics (§II.a), the *on-chain verified* ratio (`usd_backing_ratio_on_chain`) and the *post-settlement floor* (`usd_backing_ratio_floor`) both dip 10–15 percentage points during the window; the *economic backing* ratio (`usd_backing_ratio`) remains close to steady state because it counts the receivable at face value. This is an expected artifact of the settlement cadence, not evidence of undercollateralization — but in on-chain-only terms it is indistinguishable from undercollateralization. Risk posture during a Stage B window is therefore: *trust Libeara's off-chain settlement to arrive within the historical T+1 to T+7 envelope*. If USDC has not arrived at `TREASURY` by the end of the T+7 window, that is a new anomaly worth escalating; past T+14 the economic ratio's use of the receivable at face value becomes questionable and discounting the claim is appropriate.

**Measurement consequence.** The naive signal "days since last `Transfer → 0x0`" measures *burn* cadence (Stage B), not user redemption activity (Stage A), and systematically understates how active the redemption path is. During extended Stage B gaps the on-chain supply is static, but user redemptions can be running continuously against Theo's USDC float. Two distinct signals should be separated:
- *User-side pulse* — days since last `thBILL → operator` transfer; reflects actual holder redemption activity. Exposed as `redemption_flow.days_since_last_user_redemption`.
- *Reconciliation pulse* — days since last batch burn; reflects operator cycle timing. Exposed as `redemption_flow.days_since_last_redemption` (the pre-existing field, now correctly understood as batch-burn cadence rather than total redemption activity).

A reader wanting to know "is anyone actually exiting thBILL?" should read the user-side pulse; a reader wanting to know "when does Theo next settle accumulated redemptions with Libeara?" should read the reconciliation pulse.

**Single-operator redemption.** Both stages run through a single Theo-controlled operator address. The permissionless on-chain `redeem()` function, which returns tULTRA to the caller, has no empirical history of use by any non-Theo address, and its output (tULTRA) has no secondary market — so it is not a practical value-extraction route regardless of its permissionless interface.

**Peg arbitrage is weak and discretionary — separate from redemption activity itself.** These two signals are frequently conflated. *Primary-only redemption* (institutional holders exiting positions at NAV through the Stage A path) runs continuously. *Closed-loop peg arbitrage* (DEX buy at discount + primary redeem at NAV, pocketing the spread) is intermittent and dormant for extended periods. The persistent \~30–50 bp DEX discount reflects the second, not the first — the discount floor is set by the cost an arb-eligible entity must clear to round-trip (underlying-layer fees + T+4 settlement carry + gas + principal tie-up), and empirically no one is consistently clearing that cost to close the spread. Redemption activity being high does not imply arb activity is high; they are different behaviors with different economic drivers.

**Institutional implication — KYC primary-redemption access is load-bearing, not optional.** Any institutional holder intending to deploy meaningful capital into thBILL should establish KYC primary-redemption access with both Theo and Libeara/FundBridge **before sizing up**. The consequences of not doing so:

- DEX secondary markets are the only alternative exit, and current 2% depth is asymmetric and venue-dependent: roughly $58K buy / $196K sell on Arbitrum (Uniswap V3 thBILL/USDC), and $64K buy / $679K sell on HyperEVM (Project X thBILL/USDT0). Exits above those thresholds compound additional slippage on top of the standing peg discount; entries above the buy-side numbers eat slippage immediately.
- Non-KYC holders' sells cannot close the peg spread — there is no arbitrage incentive for them to sell at a discount only to be unable to redeem at NAV. The peg discount is therefore a permanent exit cost for non-KYC capital, not a transient mispricing.
- The NAV-vs-market differential compounds against target returns at rates (empirically 30–100 bp) that are material for any allocation where sub-1% tracking error matters.

In short: for institutional sizing, the primary path delivers NAV (minus any underlying-layer fee); the secondary path does not. KYC with Theo *and* with Libeara/FundBridge is the load-bearing operational prerequisite, and operational responsiveness of those onboarding flows is itself a risk factor that should be tested before capital is committed.

### II.c Secondary Market Liquidity & Peg

**Market cap (2026-05-05):** \~$138M (supply 138.26M × NAV $1.0251). Supply has churned meaningfully since the prior assessment: 130M (Apr 28) → 125M (Apr 30) → 144M (May 1, mint cycle) → 138M (May 5, post-redemption). Net 24h flow at this snapshot: −$6.2M (−4.3%).

**Important framing — most thBILL is intra-protocol, not externally held.** As of 2026-05-05, **66% of all thBILL outstanding (88.85M of 138.26M tokens) is held at the thUSD reserve `0xec417ccb6dd26868cca993a92f37217b1d4b3c2f`** — Theo's own stablecoin product uses thBILL as its primary reserve asset (96% of thUSD reserves, per `app.theo.xyz/transparency`, verified on-chain). The **external float** — the portion accessible to retail and secondary markets — is only \~49.4M tokens (\~$51M at NAV). Sizing decisions and DEX liquidity ratios should be made against the external float, not the headline supply. See "thBILL ↔ thUSD recursive backing" subsection below for the full picture.

**Current price (2026-05-05):** $1.0172 USD (DEX VWAP). NAV $1.0251. **7-day average premium/discount: −0.72%, range −0.39% to −0.95%.** This is materially wider than the prior regime (Apr 18–21: avg −0.19%, max −0.62%; Nov 2025: avg −0.19%, max −0.62%) — the discount floor has roughly **tripled**. Driver mix: April 27 $65.3M redemption (single largest on record, ~33% of supply at the time) consumed primary-side capacity and reset secondary expectations; halved buy-side depth weakened the arb closure mechanism; elevated turnover ($1.02M 24h vs prior \~$170–681K) reads as forced exits at the haircut, not healthy two-sided trading.

**Secondary market venues (live PegTracker data, 2026-05-05).** Total tracked DEX liquidity is **\~$1.53M across all chains**. The deepest single venue is on HyperEVM:

| Chain | DEX | Pair | Reserve | 24h Vol | 2% Depth (buy / sell) |
|---|---|---|---|---|---|
| HyperEVM | Project X | thBILL/USDT0 | $713K | $555K | $35K / $598K |
| Arbitrum | Uniswap V3 | thBILL/USDC | $530K | $455K | $69K / $167K |
| Arbitrum | Uniswap V4 | thBILL/USDC | $128K | $5K | n/a |
| HyperEVM | HyperBrick | thBILL/USDT0 | $51K | $0 | n/a |
| HyperEVM | Upheaval | thBILL/USDT0 | $49K | $1K | n/a |
| Ethereum | Uniswap V3 | thBILL/USDC | $13K | $0 | $1K / $0.4K |
| (long tail, all <$10K) | | | \~$48K | \~$13K | — |
| **Total** | | | **\~$1,532K** | **\~$1,023K** | **$107K / $768K** |

**Key observations vs. prior snapshots:**
- **Pool concentration shifted** from Arbitrum-centric (Uniswap V3 thBILL/USDC was the dominant venue) to HyperEVM-centric (Project X overtook it on both TVL and volume).
- **Aggregate buy-side 2% depth roughly halved** ($225K → $107K). Sell-side held near $768K. This asymmetry sharpens the structural problem — KYC arbs need to *buy* at the discount to close it, and the buy-side has thinned just as the discount widened.
- **Volume up but composition is concerning.** 24h volume \~$1.02M (up from prior $170–681K) — but this is happening into a *widening* discount, which is the signature of forced exits at the haircut, not healthy two-sided trading.
- **Ethereum pool** continues to be effectively dead (\~$13K, $0 volume).
- **Base** remains a deployment chain only; no live liquidity.

**2% depth is computed on-chain via Uniswap V3 / Project X QuoterV2** for pools where (a) the DEX exposes a Uniswap V3-compatible quoter we can call, and (b) the non-thBILL side is a recognized stablecoin. Pools without depth instrumentation (Uniswap V4, Aerodrome, HyperBrick, Upheaval, UltraSolid, Hybra) show "n/a" — the reserve figure still indicates whether the pool *has* liquidity, but exit slippage at size on those venues is not measured here.

**Peg stability (PegTracker 7-day rolling window, 2026-04-28 → 2026-05-05, 168 samples at 1h cadence):**
- Average premium/discount: **−0.72%** (sustained discount)
- Max discount: **−0.95%**
- Max premium / least-deep discount: **−0.39%** (no premiums observed)
- Per-chain VWAP: HyperEVM $1.0174, Arbitrum $1.0169 (against NAV $1.0251)

**Stress event — 2026-04-27 $65.3M redemption.** Largest single redemption observed: $65,269,542 plus a co-cycle $4,994,011 from the same address, totaling \~$70M / 33% of supply burned through the standard primary path. **Mechanically clean** — no contract failure, no bridge incident, no backing-ratio break. The post-event picture is mixed: contract-side resilience confirmed; secondary-market discount widened \~40 bps and has stayed wide for the seven days following. This is the first stress test of the primary redemption path at this magnitude and it passed; the cost paid was on the secondary peg, not on plumbing.

**Peg stability through the rsETH incident window (historical, 2026-04-18 to 2026-04-21):** Public price data showed thBILL trading $1.01–$1.02 across the days surrounding the rsETH exploit and its contagion. No contagion depeg. The bridge holding (see §I.5) and the fundamentally different asset class insulated thBILL from rsETH-driven outflows aside from the modest mcap decline.

**Lock-ups:** None for secondary trading. Primary redemption carries soft 4-business-day notice period. Whitelisting requirements can narrow the arbitrage participant base on some deployments.

**Economic Risk Score: 5.3/10** — High-quality sovereign underlying, functional primary redemption with settlement lag, and a clean structural pass of the largest redemption on record (April 27 $65M, ~33% of supply). Deductions for: non-atomic redemption (USDC-only, T+4), single-underlying concentration, no first-loss buffer, no bankruptcy remoteness, **secondary discount floor stepped up ~40 bps post-Apr-27 and has persisted** (7d avg −0.72%, vs prior regime ~−0.19%; buy-side 2% depth halved), non-transparent fee schedule at the ULTRA underlying layer. Additionally — `pendingAssets` operates as a centralized off-chain oracle with NAV-setting authority during every 4-day settlement window, with no Chainlink PoR / auditor attestation / on-chain bridge from Libeara to verify the reported value. The "tight peg discipline" headline obscures that the NAV claim is attestation-based, not contract-derived, at both the thBILL and tULTRA layers. Two-tenths drop from 5.5 reflects the post-event discount widening, partially offset by the positive structural data point that the system mechanically passed the largest stress event on record.

### II.d thBILL ↔ thUSD recursive backing (new finding 2026-05-05)

A structural development since the prior assessment: **thBILL is now Theo's stablecoin reserve asset**. Theo's stablecoin product thUSD launched 2026-04-27 and uses thBILL as its primary backing. Per Theo's transparency dashboard at `app.theo.xyz/transparency` (cross-verified on-chain 2026-05-05), the thUSD reserve at `0xec417ccb6dd26868cca993a92f37217b1d4b3c2f` holds:

- **88,849,591 thBILL** (\~$91.07M at NAV) — 96.46% of thUSD's "Actively Deployed" reserves
- $3,126,265 USDT — 3.31%
- $219,406 USDC — 0.23%
- Total reserves: \~$94.4M backing \~$96M of thUSD liabilities

Three implications:

1. **thBILL liabilities now grow with thUSD demand, not retail thBILL demand.** Each new dollar deposited into thUSD triggers a primary thBILL mint allocated to the thUSD reserve — verified via supply trace (thBILL Ethereum total supply jumped +14.52M between 2026-04-29 and 2026-05-01, coinciding with thUSD's documented +$20M institutional mint). The thBILL contract emitted **zero on-chain events** during the supply mutation — same silent-mint pattern documented for the underlying tULTRA layer (see §II.a). Standard ERC-20 indexers cannot track this; only direct `totalSupply()` polling captures it.
2. **The on-chain backing-ratio dashboard will dip cyclically.** When Theo silently mints new thBILL into the thUSD reserve, the corresponding ULTRA hasn't yet arrived from Libeara. During the Stage A settlement window (T+1 to T+7), the on-chain-only backing ratio will read 92–95% rather than 100%, with the gap explicitly tracked as `mint_cycle_receivable_usd_estimate` in the dashboard's data feed. This is **structural and expected**, not undercollateralization. Verified: a $11.25M Stage A receivable was visible on 2026-05-05 — closed within historical envelope. The economic-tier ratio (which credits the in-flight Libeara receivable) stays near 100% throughout. Escalation threshold: a single Stage A receivable persisting past T+14 without close.
3. **thUSD's "100% backed" claim rests on thBILL's variable on-chain backing.** A failure or delay at any layer (Libeara delivers ULTRA late, thBILL can't reconcile, etc.) propagates upward but is masked by the attestation-only nature of inter-layer accounting. Each layer attests honestly to the layer above; the chain is only as resilient as its weakest link. For most use cases this works as designed; in stress it's a coupled system.

**Sizing implication for institutional readers.** "thBILL TVL" in headline form ($138M) over-counts — \~$91M of that is intra-protocol. Effective external float for retail/institutional sizing decisions is \~$51M at NAV. The ratio that matters for retail exit is `DEX TVL / external float` (\~$1.53M / \~$51M = \~3.0%) rather than `DEX TVL / total supply` (~1.1%). The retail-accessible market is structurally smaller than the headline ratio implies, and a stress event in thUSD (e.g., a sized thUSD redemption) would propagate as redemption pressure on thBILL via the reserve.

The dashboard at `todayindefi.github.io/thbill-risk-info/` surfaces the holder attribution split (External float vs thUSD reserve vs OFT-adapter-locked), the in-flight Stage A receivable, and the recursive backing chain explicitly — recommended live-reading for institutional sizing during periods of thUSD growth.

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
- **Nov 2025:** \~$6.5M DEX liquidity, \~$5M daily turnover, price slightly below NAV
- **April 2026 (early):** \~$162M mcap, then declined toward \~$134M by mid-month — modest risk-off post-rsETH, no structural impairment.
- **April 2026 (late) — May 2026:** Largest single redemption on record on Apr 27 ($65M / ~33% of supply, mechanically clean through Theo operator). Supply rebuilt to 144M by May 1 then trimmed to 138M by May 5. Secondary discount widened from \~28 bps avg to \~72 bps avg over the same window and has persisted; secondary TVL roughly flat at \~$1.5M but pool composition shifted from Arbitrum-centric to HyperEVM-centric (Project X is now the leading venue). **Late April also brought thUSD's launch (2026-04-27)** — Theo's stablecoin product with thBILL as primary reserve (96% of thUSD reserves; see §II.d). Subsequent thBILL supply growth has been driven primarily by thUSD growth rather than retail thBILL demand: 66% of all thBILL outstanding is now held intra-protocol at the thUSD reserve.

**Positioning shift signal.** Theo's product surfaces have repositioned thBILL toward a backing/reserve role. Indicators (2026-05-05): (1) `theo.xyz/thbill` 308-redirects to `docs.theo.xyz/thbill` — no dedicated marketing page on the main site; (2) the consumer app at `app.theo.xyz` surfaces only thUSD (Earn, Transparency, Referrals, Swap), with no thBILL primary mint/redeem interface — the only place thBILL appears is as a reserve component on the thUSD transparency page; (3) Theo's docs language for thBILL emphasizes its role as backing for thUSD, while thUSD is positioned as the consumer-facing yield-bearing stablecoin. The marketing homepage still gives all three products equal billing, but the operational front-end has migrated to thUSD-first. **Implication for institutional sizing:** future thBILL supply growth will plausibly be primarily thUSD-driven; retail thBILL secondary liquidity is unlikely to recover meaningfully given the product surface is moving away from direct retail mint of thBILL. Retail thBILL holders are increasingly in a "leftover" cohort relative to Theo's go-forward product focus.

**Project Risk Score: 4.5/10** — Strong team (ex-Optiver/IMC, $20M raise from credible investors), strong underlying partner set (Libeara/FundBridge/Wellington imposes institutional discipline at the asset level). Deductions for: fully centralized governance with no independent oversight, no legal bankruptcy remoteness, Panama jurisdiction with weak regulatory supervision of issuer entity, no timelock, undisclosed multisig signers, no governance forum.

---

## IV. Overall Risk Score — 5.1/10

| Category | Score (0-10) | Weight | Key Points |
|---|---|---|---|
| Smart Contract | 5.5 | 40% | Single Zenith audit clean (0C/0H); no bug bounty; OFT expansion likely post-audit; 9-month Lindy. Bridge config verified clean across all four EVM chains — every peered pathway at 3 DVNs OK, zero exposed-AND-peered. Trust holes: undocumented MPC scheme, no pause function on the OFTAdapter |
| Economic / Market | 5.3 | 30% | High-quality UST underlying; functional primary redemption (T+4) and **mechanically clean handling of the Apr 27 $65M / ~33%-of-supply stress redemption**; single-underlying concentration; no bankruptcy remoteness; pending-assets centralized oracle with NAV-setting authority; opaque ULTRA-layer fee schedule. **Two-tenths drop from prior 5.5 reflects post-event secondary-discount widening** (7d avg −0.72% vs prior regime ~−0.19%; buy-side 2% depth halved to ~$107K), partially offset by the positive structural data point. |
| Project / Counterparty | 4.5 | 30% | Strong team and regulated institutional partners; fully centralized governance; Panama jurisdiction; no timelock |
| **Overall** | **5.1** | | **Moderate-to-elevated risk — a high-quality asset (US T-bills) wrapped in an early-stage issuer with centralized governance, limited legal remoteness, and a synthetic tULTRA wrapper layer whose 4626 interface is effectively ceremonial. Bridge layer verified clean. BB+ credit equivalent at the middle of the band. 2026-05-05 revision drops 0.1 on overall reflecting the economic-score adjustment for post-Apr-27 secondary discount widening.** |

**Blended credit equivalent:** **BB+** based on A-range sovereign asset quality combined with BB-range unsecured-issuer structure. Synthetic tULTRA wrapper, MPC trust gaps, and the pending-assets oracle keep the rating in the middle of the BB+ band; another rung of disclosure or structural fix would be needed to support a higher score.

---

## V. Comparison vs Peers

| Asset | Issuer | TVL (2026) | Redemption | KYC | Bankruptcy Remote | Cross-chain mechanism | Score est. |
|---|---|---|---|---|---|---|---|
| **thBILL** | Theo (Panama) | $138M | USDC, T+4 | Yes | No | LayerZero OFT (3-DVN custom) | **5.1** |
| **USYC** | Circle / Hashnote | $2.2B | USDC, ~instant | Qualified only | Yes (Cayman fund structure) | Native multi-chain via Circle | \~7.0 |
| **BUIDL** | BlackRock / Securitize | $2.0B | USDC via Circle, instant | Qualified only | Yes (3(c)(7) fund) | Securitize rails | \~8.0 |
| **OUSG** | Ondo | \~$1.5B (with USDY) | USDC, instant or T+1 | Qualified only | Yes | Native + LayerZero | \~7.0 |
| **USTB** | Superstate | $523M | USDC, T+1 | Qualified only | Yes | Native multi-chain | \~7.0 |
| **USDY** | Ondo | (incl. OUSG) | USDC, T+1 | Retail (ex-US) | Yes (Cayman structure) | Native + LayerZero | \~7.0 |

**Read:** thBILL is materially smaller than every peer and structurally weaker on the two dimensions that matter most for RWA credit quality: **bankruptcy remoteness** and **redemption atomicity**. Peers operate through 3(c)(7) or Cayman fund structures giving token holders direct legal claim on assets; thBILL's contractual-claim-against-Theo model is a BB-range structure wrapped around A-range collateral. Peers also use instant or T+1 redemption; thBILL's T+4 is the longest in the set. Theo's institutional partners (Libeara/Wellington) narrow the gap at the asset level but don't close it at the issuer level.

On the bridge dimension, thBILL's LayerZero OFT multi-DVN config is comparable to OUSG/USDY (also multi-DVN via LayerZero since the rsETH event). BUIDL/USTB/USYC avoid LayerZero entirely, using native multi-chain deployment via their compliance infrastructure — which is a different risk category (regulated rails vs cryptographic bridge quorum) but structurally stronger against the rsETH-class threat model.

---

## VI. Key Recommendations

**Highest priority — unverified items:**

1. **Watch for `setPeer` events on the Ethereum OFTAdapter** (`0xfDD22Ce6D1F66bc0Ec89b20BF16CcB6670F55A5a`) and the L2 OFTs. Bridge expansion to a new chain should set the receive-lib DVN config first (≥2 DVNs, ideally 3) before `setPeer` is called. A `setPeer(eid, address)` call without a corresponding prior `setConfig` to upgrade the receive lib for that EID would create a temporary 1-DVN exposure for the duration of the gap. All currently-peered EIDs (BSC, Arbitrum, Mantle, Base, HyperEVM, Monad on the Ethereum side) are at 3-DVN custom config — operationally clean. Recommendation is forward-looking: monitor for ordering during future expansions.
2. **Confirm OFT adapter was in Zenith audit scope.** The July 2025 audit predates the cross-chain expansion to HyperEVM. If the adapter is unaudited, a fresh audit on the bridge surface is the single highest-value remediation.
3. **Disclose multisig signer composition** for Owner, Whitelist, and Emergency roles. Currently opaque; meaningful for risk modeling.

**Medium priority — ongoing monitoring:**

4. **Continue to re-query DEX pool depths before any sizing decision.** Total tracked DEX liquidity is currently \~$1.64M; deepest single venue is HyperEVM Project X (see §II.c). The long tail of HyperEVM pools (most with no flow) should be watched for activation around any Theo product launch.
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
| Arbitrum | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | LayerZero OFT (3 DVNs custom config) |
| Base | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | LayerZero OFT (3 DVNs custom config) |
| HyperEVM | `0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a` | LayerZero OFT (3 DVNs custom config; HyperEVM-specific LZ deployment) |

**DeFi exposure paths:** Pendle PT-thBILL on Arbitrum (with Euler collateral usage). Lives behind the Arbitrum receive path, which is verified multi-DVN.

**PT-thBILL settlement mechanic.** The Pendle SY wrapper for thBILL on Arbitrum (`0xc32e96b4…6ed3D4`) reports its accounting asset (`assetInfo().asset`) as native USDC (`0xaf88…5831`), not thBILL. But `getTokensOut()` returns only thBILL, and `yieldToken()` is thBILL. So 1 PT-thBILL redeems at maturity (18-Jun-2026) to thBILL worth $1 USDC at Theo's attested NAV — not 1 whole thBILL, and not USDC. **Implication for sizing:** PT-thBILL fixes a *USDC-denominated* yield but settles in thBILL — holders never receive USDC at expiry and still bear thBILL's exit-path risk (KYC-gated primary redemption, thin secondary liquidity — see §II.4) to actually realize the USDC value. The path is two hops (PT → thBILL → USDC), not one. The Pendle UI's "1 USDC in thBILL" framing is mechanically correct.

---

## Bottom Line

thBILL is a moderate-to-elevated-risk tokenized T-bill product with high-quality sovereign underlying assets (delivered via Standard Chartered's Libeara issuer, FundBridge as MAS-regulated fund manager, and Wellington Management as sub-advisor) wrapped in an early-stage issuer with centralized governance and a synthetic tULTRA wrapper layer. Overall score **5.1/10 (BB+ credit equivalent, middle of band)** — 2026-05-05 revision reflects two structural developments since the prior assessment: (1) the secondary-market discount widened from \~28 bps avg to \~72 bps avg post-Apr-27, with buy-side 2% depth halving alongside; (2) thBILL has been repositioned by Theo as the reserve asset for thUSD (96% of thUSD reserves; 66% of all thBILL outstanding now intra-protocol), with the operational front-end (app.theo.xyz, /thbill redirect, docs framing) shifting from thBILL-direct to thUSD-mediated retail access. The system mechanically passed its largest stress test on record (Apr 27 $65M / 33%-of-supply redemption, processed cleanly) but the secondary peg has not recovered.

The three dimensions defining the risk:
- **Asset quality (strong):** US T-bills with institutional-grade fund management.
- **Bridge security (verified clean across all four EVM chains):** LayerZero OFT with 3 DVNs custom config on every peered pathway, including the Ethereum OFTAdapter (`0xfDD22Ce6…F55A5a` — separate from the iToken vault). Zero exposed-AND-peered pathways. Materially stronger than the single-DVN config that broke Kelp rsETH on 2026-04-18. The bridge held cleanly through the incident and contagion.
- **Issuer structure (weak):** No bankruptcy remoteness, fully centralized governance, no timelocks, undisclosed multisig signers, Panama jurisdiction without regulatory supervision of the issuer entity, single underlying (tULTRA), 4-day redemption lag.

For a DeFi user holding PT-thBILL or using thBILL as collateral, the pragmatic read is: the on-chain layer (contract + bridge) is adequately diligenced and passed the rsETH stress test; the off-chain layer (issuer solvency, legal recourse) remains the binding constraint. Sizing should reflect unsecured-counterparty exposure to Theo, not direct exposure to US T-bills.

---

## VIII. Methodology & Disclosure Limits

This assessment combines on-chain verification (chain reads, event scans, contract source review where public) with issuer-published documentation (Theo's docs at docs.theo.xyz, Libeara's product pages, FundBridge regulatory filings, S&P / Particula AAA-rating reports). Several classes of dependency are not directly verified — either because they are off-chain and undisclosed, or because the methodology cannot enumerate them by construction. Institutional readers should weight the analysis accordingly.

**Trust-required dependencies (acknowledged, not independently verified):**

- LayerZero infrastructure (Endpoint contracts, MessageLibrary, LayerZero governance multisig). DVN config audited at the time of this assessment, not continuously monitored.
- MPC operator composition (threshold scheme, co-signer identities, key-generation ceremony, geographic distribution). Theo publicly discloses "MPC"; no further detail. See §I MPC-treasury trust unpacked.
- Underlying T-bill custody chain (Standard Chartered Singapore, broker-dealers, repo counterparties).
- Wellington Management's actual portfolio holdings.
- Zenith Audits' report on thBILL/tULTRA contracts (referenced by Theo as "Complete" but not publicly linked at time of writing).
- Singapore regulatory regime stability for FundBridge.
- Circle's USDC reserve composition and admin keys.
- Third-party DEX-pool aggregators (CoinGecko / DefiLlama) used to surface secondary-market liquidity figures.

**Wallet-provenance ambiguities:**

- The Libeara settlement Safe (`0x7ee29373f075ee1d83b1b93b4fe94ae242df5178`) — provenance ambiguous between Libeara-operational and Theo MPC; behavior pattern matches a settlement facilitator but is not definitively labeled on Etherscan or in any public attribution.
- Whether `TREASURY` is the complete set of Theo-held ULTRA — confirmed across 3 historical Stage B cycles via inbound-USDC tracing (all settlements landed at TREASURY, never at an alternate Theo address), but cannot be guaranteed by structural inference alone.

**Retrospective-class limitation (the rsETH lesson):**

Novel attack classes are typically enumerated only after they manifest in production. The April 2026 rsETH OFT exploit ($292M) hinged on single-DVN bridge configurations — a risk class not surfaced by mainstream contract-audit methodology before the incident, including the methodology applied to thBILL pre-incident. DVN-config audits were added to thBILL's analysis post-rsETH (per §I.5), not prospectively. Future novel attack classes — at the cross-chain layer, the wrapper-contract layer, or in adjacent infrastructure (RPC, oracle, key management) — may produce comparable gaps. This report cannot guarantee enumeration of attack surfaces that have not yet been demonstrated in production.

**Point-in-time vs continuous monitoring:**

Contract source code, DVN configuration, and custody balances are verified at the dates indicated in this report. The companion live dashboard (link in frontmatter) continuously monitors the backing ratios (three-tier), redemption-pulse signals (user-side and batch-burn separately), Stage B reconciliation cycles, and on-chain token positions for the addresses enumerated in the tracker config. It does not continuously verify all upstream dependencies — LayerZero Endpoint contract code, third-party DVN identity sets, UltraManager admin keys, audit-report contents — those are point-in-time checks only. Where continuous monitoring is in place, the relevant fields are exposed in the dashboard's live data feed; where it is not, the date of last verification is the boundary of confidence.

**Sizing implication:**

Any institutional position should account for residual unknowns in proportion to the trust placed in the categories above. The on-chain backing ratio (in its three-tier form) and the KYC-gated primary redemption path are the strongest verifiable claims; everything upstream — custody, fund administration, audit, MPC operator composition, regulatory regime, novel attack classes — is verified at the level of transparency the issuer and counterparties choose to provide. The analysis is most useful when its limits are explicit; an unhedged "AAA"-style verdict would be epistemically overstated.

**Corrections welcome:**

This report is built from publicly available documentation (Theo docs, Libeara/FundBridge product pages, regulatory filings, rating-agency reports) and on-chain analysis. It does not draw on any private disclosures from Theo, Libeara, FundBridge, or Wellington. If anything here is wrong — including cases where Theo or Libeara have non-public information that contradicts a claim in this report — please reach out at **info@tidresearch.com** and we will correct the next revision and credit the source where appropriate.

---

## Sources

- Theo Network docs: https://docs.theo.xyz/thbill
- Zenith Audits (July 2025) — Theo tToken/iToken contract suite
- CoinGecko — thBILL live price & metrics: https://www.coingecko.com/en/coins/theo-short-duration-us-treasury-fund
- Etherscan — thBILL token: https://etherscan.io/token/0x5FA487BCa6158c64046B2813623e20755091DA0b
- Arbiscan — thBILL token: https://arbiscan.io/token/0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a
- LayerZero OFT DVN audit reference (Blockaid gist): https://gist.github.com/IdoBn/7753f16fdb6810b11c5c87cdf11f8aa0
- Theo $20M raise announcement (April 2025) — Hack VC / Anthos Capital / angels
- RootData Theo profile: https://www.rootdata.com/Projects/detail/Theo
- Cryptowisser — thBILL on Base/Arbitrum/HyperEVM via LayerZero: https://www.cryptowisser.com/news/thbill-now-live-on-base-arbitrum-and-hyperevm-powered-by-layerzero/
- CoinDesk — rsETH $292M Kelp DAO exploit: https://www.coindesk.com/tech/2026/04/19/2026-s-biggest-crypto-exploit-kelp-dao-hit-for-usd292-million
