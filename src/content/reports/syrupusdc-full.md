---
asset: "syrupUSDC"
slug: "syrupusdc-full"
aliases: ["syrupUSDC", "SYRUPUSDC", "syrupUSD", "Syrup USDC", "Maple Syrup", "msyrupUSDp underlying"]
chains: ["eth", "sol", "arb", "base", "plasma"]
category: "lending-vault"
assessment_type: "full"
audience: "institutional"
companion_report: "syrupusdc"
date: "2026-04-26"
last_verified: "2026-04-26"
issuer: "Maple Labs (Cayman Islands)"
market_cap_approx: 1073570000
tvl_gross: 1073570000
legal_jurisdiction: "Cayman Islands"
live_since: "2024-08"
bankruptcy_remote: false
yield_bearing: true
underlying_assets: ["USDC"]
underlying_managers:
  - "Maple Labs (protocol operator)"
  - "Pool Delegate (operator EOA 0xC1e1...49f — firm identity TBD via Maple docs)"

contract_score: 7.0
credit_score: 5.5
liquidity_score: 6.5
operational_score: 6.0
supply_integrity_score: 6.5
overall_score: 6.2
score_weights:
  contract: 0.25
  credit: 0.35
  liquidity: 0.20
  operational: 0.20

multisig_configs:
  governor: "OZ-style Timelock, 24h MIN_DELAY (0x2eFFf887...426b)"
  operationalAdmin: "Safe v1.3.0, 3-of-5"
  securityAdmin: "Safe v1.3.0, 3-of-6"
  poolDelegate: "EOA (single-key)"

audited: true
audit_count: 8
audit_firms: ["Spearbit", "Trail of Bits", "Three Sigma", "Peckshield"]
bug_bounty: true
bug_bounty_amount: 1000000
bug_bounty_platform: "Immunefi"
team_doxxed: true
incident_history: true
is_fork: false

mint_paths:
  - id: "permissionless_deposit"
    mechanism: "erc4626-deposit"
    trust_set: "open"
    trust_size: null
    pausable: true
    timelock_seconds: null
    notes: "Permissionless USDC → syrupUSDC deposit on Ethereum canonical pool. No KYC, no allowlist. Standard 4626 share-mint at NAV. Subject to liquidityCap=$2.5B (current TVL ~$1.07B leaves $1.43B headroom)."
  - id: "cct_bridge_mint"
    mechanism: "bridge-cct"
    trust_set: "ccip-don-rmn"
    trust_size: null
    pausable: true
    timelock_seconds: null
    notes: "Chainlink CCIP with CCT (Cross-Chain Token) standard. Burn-and-mint between Ethereum (canonical) and Solana / Arbitrum / Base / Plasma. Trust = Chainlink DON quorum + RMN backstop. Per-chain rate limits enforced by CCT pool contracts."
  - id: "delegate_loan_origination"
    mechanism: "discretionary-lending"
    trust_set: "pool-delegate-eoa"
    trust_size: 1
    pausable: false
    timelock_seconds: null
    notes: "PoolDelegate EOA (0xC1e1...49f) funds loans within protocol-enforced overcollateralization rules. Smart contracts enforce overcollateralization + margin-call execution; borrower selection, terms, and credit underwriting are delegate-discretionary. Single-key operational role — credit judgment ultimately sits with the off-chain delegate firm."
  - id: "withdrawal_queue"
    mechanism: "queue-redemption"
    trust_set: "open"
    trust_size: null
    pausable: true
    timelock_seconds: null
    notes: "Permissionless redemption submitted to WithdrawalManager (0x1bc4...fE3). Processed at NAV from free pool USDC. As of 2026-04-26: queue empty (cycle 14077, head=tail), free USDC ~$31M (~3% of supply)."
  - id: "admin_upgrade"
    mechanism: "admin-mint"
    trust_set: "timelock-then-multisig"
    trust_size: null
    pausable: true
    timelock_seconds: 86400
    notes: "Maple Globals governor is a custom Timelock with MIN_DELAY=86400s (24h). Upgrades via PoolManager factory require Timelock execution. Operational changes via 3-of-5 Operational Admin Safe. Emergency pause via 3-of-6 Security Admin Safe."

supply_integrity_flags:
  - "pool-delegate-credit-discretion"
  - "lending-vault-rehypothecation"
  - "withdrawal-queue-pool-depth-bound"
  - "ccip-shared-dependency"
  - "no-bankruptcy-remoteness"
  - "permissioned-pool-delegate-role"
  - "pool-delegate-eoa-not-multisig"
  - "zero-pool-delegate-first-loss-cover"
  - "v1-bad-debt-history-2022"
  - "season-incentive-yield-non-durable"
  - "borrower-identity-non-public"
  - "high-deployment-ratio-97pct"
---

# syrupUSDC — Risk Assessment Report

| | |
|---|---|
| **Asset** | syrupUSDC (Maple Finance Syrup product line) |
| **Issuer** | Maple Labs (Cayman Islands) |
| **Launch** | August 2024 |
| **Jurisdiction** | Cayman Islands (Maple Labs entity); no bankruptcy remoteness for token holders |
| **Underlying exposure** | Overcollateralized institutional loans, USDC-denominated |
| **Type** | Yield-bearing ERC-4626 lending vault share |
| **Primary access** | Permissionless deposit/redeem; no KYC at the vault layer |
| **Secondary access** | DEX aggregator routing (Uniswap v3/v4, Balancer, others via KyberSwap/1inch) |
| **Deployed chains** | Ethereum (canonical), Solana, Arbitrum, Base, Plasma |
| **Cross-chain mechanism** | Chainlink CCIP with CCT (burn-and-mint) |
| **Total assets (2026-04-26, on-chain)** | $1,073,570,496 USDC |
| **Total supply (2026-04-26, on-chain)** | 924,449,983 syrupUSDC shares |
| **NAV** | 1.1613 USDC per syrupUSDC |
| **Deposit cap headroom** | ~$1.43B (liquidityCap = $2.5B) |

> *Overall score (6.2) is a weighted composite over five axes (Contract / Credit / Liquidity / Operational + Supply Integrity callout) — see §V for category weights.*

---

## Protocol Summary

syrupUSDC is Maple Finance's flagship retail-accessible institutional-credit product: an ERC-4626 vault that takes USDC deposits and deploys them into overcollateralized loans to vetted institutional borrowers (centralized lenders, market makers, trading desks). It launched in August 2024 and has reached ~$1.07B Ethereum-pool TVL by April 2026, with cross-chain expansion to Solana, Arbitrum, Base, and Plasma via Chainlink CCIP's CCT standard during 2025–2026.

The product sits at the intersection of two risk categories that don't normally combine: **discretionary institutional credit** (Pool Delegate model — humans make the underwriting calls) and **permissionless DeFi rails** (no KYC at the vault layer, ERC-4626 standard, redemption queue + DEX-aggregator dual exit). The overcollateralization model and active margin-call infrastructure are the primary structural defenses against credit loss; the Pool Delegate's underwriting judgment is the binding human factor.

The defining context for institutional readers is Maple v1's 2022 bad-debt event: ~$50M+ LP losses across Orthogonal Trading and M11 Credit / Babel Finance defaults, driven by undercollateralized lending in the prior product cycle. Maple's response was a structural reset — overcollateralized only, vetted Pool Delegates, active margin calls — implemented as the v2 architecture that the Syrup product line runs on. v2 has reported zero principal losses across ~21 months of operation through April 2026, with on-chain `unrealizedLosses = 0` confirmed at the PoolManager and primary LoanManager layers. The clean record is real, but covers a single (favorable) credit cycle.

Three findings from the 2026-04-26 on-chain audit shape the institutional read:

1. **24h timelock on protocol governance** (`MIN_DELAY = 86400`s on the governor Timelock) — materially stronger than peer products with no upgrade delay.
2. **Zero Pool Delegate first-loss cover required** (`Globals.minCoverAmount[PM] = 0`; PoolDelegateCover balance = 0) — depositors are first-loss; the v1-era MPL-bond model has been dropped for Syrup. No on-chain skin-in-game absorbs losses before depositors.
3. **97% pool deployment ratio** — only ~$31M of USDC sits free against ~$1.07B in supply, with $1.04B deployed into the primary fixed-term LoanManager. Stress-case redemption depth is loan-repayment-bound past a ~3%-of-supply outflow.

Overall profile: strong audit posture (Spearbit + Trail of Bits + 6 others, $1M+ Immunefi bounty), clean v2 contract architecture with explicit timelock-gated upgrade path, real organic yield from overcollateralized institutional loans, and empirically excellent base-case exit liquidity via DEX aggregator routing — offset by Pool Delegate discretion as the binding credit-judgment layer (with the operator role as a single-key EOA), the absence of on-chain delegate first-loss capital, the gap between base-case aggregator-route exit (good) and stress-case pool-depth-bound exit (queue-bound), and Maple Labs' v1 bad-debt history under the same legal entity.

---

## I. Smart Contract Risk — 7.0/10

### Audit Coverage

| Audit | Firm | Tier | Scope |
|---|---|---|---|
| Maple v2 / Syrup contracts | Spearbit | Top-tier | Pool, PoolManager, LoanManager, WithdrawalManager |
| Maple v2 / Syrup contracts | Trail of Bits | Top-tier | Pool, PoolManager, LoanManager, WithdrawalManager |
| Maple v2 contracts | Three Sigma | Mid-tier | v2 contracts |
| Maple v2 contracts | Peckshield | Mid-tier | v2 contracts |
| Additional audits | (4 more across v1 + v2 lifecycle) | Mixed | Per Maple's published audit list |

**8+ total audits across the v1 → v2 lifecycle.** Both Spearbit and Trail of Bits engaged on the v2/Syrup contracts is the audit profile of a well-funded, security-conscious protocol — significantly stronger than peer yield-bearing stablecoins (thBILL: 1 audit firm; mEDGE / Midas: limited public disclosure). Findings reports are publicly published.

**Gaps vs ideal:**
- The 4 strategy contracts (LoanManager + 3 yield-strategy wrappers) registered to the syrupUSDC PoolManager may post-date some of the audit work; verify per-contract audit attestation before treating individual contracts as audited.
- Cross-chain CCT pool contracts on each non-Ethereum chain inherit Chainlink's audit posture (Chainlink Labs + 3rd party reviews of CCT pool contracts) but warrant individual verification per chain.

### Code Architecture (Maple v2)

The verified topology on Ethereum:

| Role | Address | Pattern |
|---|---|---|
| Pool (ERC-4626 share token) | `0x80ac24aA929eaF5013f6436cdA2a7ba190f5Cc0b` | Plain ERC-4626 (not a Maple proxy) |
| PoolManager | `0x7aD5fFa5fdF509E30186F4609c2f6269f4B6158F` | Maple proxy (impl `0xfE02...58B8`, factory `0xE463...8339`) |
| WithdrawalManager (Queue) | `0x1bc47a0Dd0FdaB96E9eF982fdf1F34DC6207cfE3` | Maple proxy (impl `0xF95E...e967`) |
| PoolDelegate | `0xC1e18FFD8825FfB286D177DDEbeba345EC70B49f` | **EOA** (no contract code) |
| PoolDelegateCover | `0x9e62FE15d0E99cE2b30CE0D256e9Ab7b6893AfF5` | First-loss capital slot (currently empty) |
| MapleGlobals | `0x804a6F5F667170F545Bf14e5DDB48C70B788390C` | Maple proxy (impl `0x9BeA...4956`) |
| Strategy 0 (primary LoanManager) | `0x6ACEb4cAbA81Fa6a8065059f3A944fb066A10fAc` | Fixed-term loan manager — **97% of pool TVL** |
| Strategy 1 (idle) | `0x4A1c3F0D9aD0b3f9dA085bEBfc22dEA54263371b` | Likely OpenTermLoanManager — zero deployment |
| Strategy 2 (Aave V3 wrapper) | `0x560B3A85Af1cEF113BB60105d0Cf21e1d05F91d4` | Wraps Aave V3 USDC pool (`0x8787...4E2`) — 10 wei AUM (effectively unused) |
| Strategy 3 | `0x859C9980931fa0A63765fD8EF2e29918Af5b038C` | Strategy abstraction — type unidentified, AUM ~0 |

The architecture is consistent with Maple v2's public design: the PoolManager orchestrates a list of Strategies (LoanManagers + yield-strategy wrappers); the Pool is the user-facing ERC-4626 share token; the WithdrawalManager processes queue-based redemptions; PoolDelegate is the operational role with discretionary authority to fund loans within the Globals-set constraints.

**Cross-contract surface is non-trivial** — the redemption flow alone touches Pool → PoolManager → WithdrawalManager → multiple Strategies (to free USDC if needed) → asset transfer back. Each interface boundary is an attack-surface seam, which is why the audit profile matters.

### Admin / Upgrade Risk

| Role | Address | Type | Authority |
|---|---|---|---|
| **governor** | `0x2eFFf88747EB5a3FF00d4d8d0f0800E306C0426b` | **OZ-style Timelock** with `MIN_DELAY = 86400` (24h) | Highest authority. Owns MapleGlobals; can upgrade implementations through the factory; can change Globals parameters. Has standard `PROPOSER_ROLE` / `EXECUTOR_ROLE` / `CANCELLER_ROLE` constants. |
| **operationalAdmin** | `0xCe1cE7c7F436DCc4E28Bc8bf86115514d3DC34E8` | Safe v1.3.0, **3-of-5** | Operational parameter changes (delegate appointments, fee rates, etc.). Signers: `0x57d1...c7c`, `0x8be3...736`, `0x4024...07b`, `0xF570...827`, `0x7371...7AF`. |
| **securityAdmin** | `0x6b1A78C1943b03086F7Ee53360f9b0672bD60818` | Safe v1.3.0, **3-of-6** | Emergency pause/unpause across protocol functions. Signers: `0x4E10...E4b`, `0x8Ce4...624`, `0x4109...ED1`, `0x54cC...B74`, `0x44A6...3CA`, `0x0630...4FF8`. |
| mapleTreasury | `0xa9466EaBd096449d650D5AEB0dD3dA6F52FD0B19` | Contract (not a standard Safe) | Receives protocol fees; identity TBD verify via Etherscan. |
| poolDelegate | `0xC1e18FFD8825FfB286D177DDEbeba345EC70B49f` | **EOA (single-key)** | Operational role for loan funding within Globals/PoolManager-set constraints. |

**Three observations that materially shape the governance read:**

1. **24h timelock on governance is a meaningful protection.** The Maple governor is an OZ-style TimelockController with a 24-hour minimum delay, meaning any upgrade to Pool / PoolManager / WithdrawalManager / LoanManager implementations has a one-day on-chain visibility window before execution. This is materially stronger than peer products with no timelock (thBILL is explicitly "no timelock disclosed" in its v1 audit). The role-membership of the Timelock (who can `schedule()` proposals) is not directly readable via standard `hasRole()` calls — Maple's variant appears to use a custom storage pattern. Verify proposers via Etherscan AccessControl event logs before institutional sizing.

2. **Role separation is real, not nominal.** The Operational Admin (3-of-5) and Security Admin (3-of-6) are *separate* Safes with *non-overlapping* signer sets — confirmed via on-chain `getOwners()`. This means a compromise of one Safe does not automatically compromise the other, and the emergency-pause path is structurally separate from the parameter-change path. Above-average governance hygiene.

3. **PoolDelegate is a single-key EOA.** The address Globals registers as the syrupUSDC pool delegate (`0xC1e1...49f`) is an externally-owned account, not a multisig. The delegate role's authority is bounded by the protocol's enforced constraints (overcollateralization rules, asset whitelists set by PoolManager), but within those constraints — funding any loan to any whitelisted borrower at any compliant LTV — the EOA's single key is the only thing standing between operational integrity and an off-script loan. The operational firm behind the EOA almost certainly manages the key with institutional custody (Fireblocks / Copper / similar), but this is not publicly attested. Compromise scenario: an attacker with the EOA key could fund maximum loans to attacker-controlled borrowers (subject to whitelist constraints), drain the pool's free USDC into those loans, then either (a) repay them later for a no-op exfiltration of yield carry, or (b) walk away if the borrower whitelist permits anonymous-to-Maple borrowers. Mitigants: whitelist gating (verify what's enforced on-chain), collateral asset whitelist, the 24h timelock blocking emergency parameter changes that could expand attack scope, and Security Admin's pause capability.

### Incident History

**v2 (Syrup product line, August 2024 → April 2026):** Clean. Zero reported credit losses, zero forced pauses, zero exploits. `unrealizedLosses = 0` at both PoolManager and primary LoanManager layers as of 2026-04-26.

**v1 (deprecated, 2021–2022):** ~$50M+ LP losses across two major incidents — Orthogonal Trading default ($36M) and M11 Credit / Babel Finance defaults — under an *undercollateralized* lending model. These were credit-risk failures, not smart-contract exploits; Maple's contracts functioned as designed but the credit-underwriting framework was inadequate for the 2022 stress event. The Syrup product (v2) is Maple's structural response — overcollateralized only, vetted delegates, active margin calls. Treated as credit-context (§II) and operational-context (§IV), not contract risk.

### Lindy

- **Maple Labs as an entity:** ~5 years (v1 launched 2021, v2 launched 2023, Syrup product 2024).
- **Syrup product line specifically:** ~21 months as of April 2026.
- **v2 contract architecture:** ~3 years.

Modest by traditional financial-product standards; meaningful by DeFi standards. Has not been stress-tested through a multi-cycle bear market under the v2 model — the credit-cycle correlation tail risk is real.

**Contract Risk Score: 7.0/10** — Strong audit profile (Spearbit + Trail of Bits + 6 others), $1M+ Immunefi bounty, ERC-4626 standard with thoughtful Maple v2 modular extension, 24h timelock on governance, non-overlapping multisig signer sets across Operational/Security Admins, clean v2 incident history. Deductions for: PoolDelegate single-key EOA (not a multisig), Strategy contracts may post-date some audits, cross-contract surface is non-trivial, Lindy under v2 is moderate.

---

## I.5 Supply Integrity — 6.5/10

Scope of this section: paths that change the supply or location of syrupUSDC tokens (deposit/mint, cross-chain bridge, redemption/burn, admin upgrade). Credit risk and operational discretion are covered in §II and §IV; this section is the wrapper-layer integrity story specifically.

The defining cross-chain context: syrupUSDC bridges via **Chainlink CCIP with the CCT (Cross-Chain Token) standard**. Burn-and-mint native deployments on each supported chain (Ethereum canonical + Solana / Arbitrum / Base / Plasma). Trust = Chainlink DON quorum committing/executing cross-chain messages, with Risk Management Network (RMN) as an anti-fraud backstop. **Materially different attack class from LayerZero OFT** — the April 2026 incidents (rsETH $292M, Drift $285M, Volo $3.5M) hit single-DVN OFT configs and admin-key compromises that don't map to CCIP's architecture. CCIP has a clean track record at scale through April 2026 (no public exploits since 2023 launch).

### Supply-changing paths

#### permissionless_deposit — erc4626-deposit (Ethereum canonical)
- **Trust assumption:** Open / permissionless. Anyone can deposit USDC; standard ERC-4626 share-mint at NAV.
- **Capture cost estimate:** N/A (not subvertible — minting consumes USDC at NAV)
- **Value secured:** Pool's accounting integrity (NAV cannot be manipulated by deposit alone)
- **Controls:** liquidityCap = $2.5B (current TVL ~$1.07B); Security Admin pause capability
- **Asymmetry:** Symmetric — depositor receives shares worth their USDC at NAV

#### cct_bridge_mint — bridge-cct (Ethereum ↔ Solana / Arbitrum / Base / Plasma)
- **Trust assumption:** Chainlink DON quorum + RMN backstop per CCIP message commit/execute
- **Capture cost estimate:** Compromise quorum of Chainlink-operated DON nodes; bypass RMN anomaly detection. Materially harder than the rsETH (single-DVN) attack class.
- **Value secured:** Aggregate cross-chain syrupUSDC supply on non-Ethereum chains. Per-chain CCT pool rate limits bound the per-message + per-window blast radius.
- **Controls:** DON quorum; RMN; per-chain rate limits; CCT pool contract pause capability
- **Asymmetry:** Acceptable for the asset's current cross-chain footprint, calibrated to CCIP's track record

#### withdrawal_queue — queue-redemption (Ethereum)
- **Trust assumption:** Open / permissionless. Any holder can submit a redemption request; processed at NAV from free pool USDC.
- **Capture cost estimate:** N/A — queue is permissionless and rule-enforced
- **Value secured:** Holder ability to exit at NAV in steady-state
- **Controls:** Cycle-based queue; processing speed = function of free USDC vs outstanding loan principal
- **Asymmetry:** *Stress-case asymmetry covered in §III — Liquidity & Redemption.* Queue currently empty (cycle 14077, head=tail) as of 2026-04-26.

#### admin_upgrade — admin-mint (Ethereum)
- **Trust assumption:** Governor Timelock (MIN_DELAY 24h) → upgrade execution
- **Capture cost estimate:** Compromise of the Timelock proposer set (TBD verify membership), then wait 24h for execution.
- **Value secured:** Entire syrupUSDC architecture (Pool implementation, PoolManager implementation, LoanManager implementation, etc.).
- **Controls:** **24h timelock** ✓; on-chain visibility of scheduled proposals; Security Admin pause capability during the window; community ability to exit during the 24h window if a malicious upgrade is scheduled.
- **Asymmetry:** Bounded by timelock visibility — institutional readers should monitor `ScheduledOperation` events on the Governor address as a leading indicator.

### Cross-chain failure modes

**cct_bridge_mint exploit.** A successful CCIP DON-quorum compromise would let attackers mint forged syrupUSDC on a destination chain without the Ethereum origin burn. This is the same attack class as rsETH/LayerZero OFT compromises but against a different verifier set (Chainlink DON instead of LayerZero DVNs). CCIP has a clean track record at scale since 2023; the RMN provides anti-fraud monitoring that LayerZero's stack does not have. Per-chain CCT pool rate limits cap the per-window damage (specific values TBD verify per chain).

**admin_upgrade malicious schedule.** A compromised Timelock proposer schedules a malicious implementation upgrade to Pool / PoolManager / LoanManager. The 24h delay window provides on-chain visibility before execution; Security Admin can pause; community can exit. The protection is meaningful but only as good as monitoring.

### Cross-chain deployment (CCIP / CCT)

| Chain | Role | Token address | CCT pool address | Rate limit |
|---|---|---|---|---|
| Ethereum | Canonical | `0x80ac24aA929eaF5013f6436cdA2a7ba190f5Cc0b` | [VERIFY: Chainlink CCIP directory] | [VERIFY] |
| Arbitrum | Bridged | [VERIFY] | [VERIFY] | [VERIFY] |
| Base | Bridged | [VERIFY] | [VERIFY] | [VERIFY] |
| Solana | Bridged | [VERIFY] | [VERIFY] | [VERIFY] |
| Plasma | Bridged | [VERIFY] | [VERIFY] | [VERIFY] |

> **Verification note:** Chainlink CCIP directory (`docs.chain.link/ccip/directory/mainnet/token/syrupUSDC`) is SPA-rendered and not extractable via automated fetch. Per-chain CCT pool addresses and rate limits should be pulled by direct browse before institutional sizing. Architecture (CCIP + CCT, burn-and-mint) is independently confirmed via Maple's Solana launch announcements (2026) and Chainlink's CCIP v1.6 release post — see Sources.

**Supply Integrity Score: 6.5/10** — CCIP+CCT bridge architecture is materially stronger than LayerZero OFT (clean track record, RMN backstop, no DVN-collusion attack surface), 24h timelock on protocol upgrades is well above peer baseline. Deductions for: per-chain CCT addresses and rate limits not auto-verified pending directory browse, CCIP governance shared-dependency exposure (inherited by every CCIP-bridged asset, not syrupUSDC-specific), Timelock proposer membership not directly readable.

---

## II. Credit & Counterparty — 5.5/10

**The binding risk axis for syrupUSDC.** Credit underwriting is delegate-discretionary; smart contracts enforce overcollateralization parameters but not credit quality. With zero on-chain first-loss cover required, depositors absorb credit losses directly. This section does the heaviest work for institutional readers.

### Loan-book composition (on-chain verified)

| Field | Value | Notes |
|---|---|---|
| Primary LoanManager | `0x6ACE...0fAc` | Strategy 0; fixed-term loans |
| AUM | $1,042,673,202 | 97% of pool TVL |
| principalOut | $1,040,386,790 | Outstanding loan principal |
| accountedInterest | $2,156,461 | Accrued but unpaid interest |
| unrealizedLosses | 0 | Clean book |
| Pool deployment ratio | 97% | $1.04B deployed / $1.07B TVL |
| Free USDC | ~$31M | ~3% of supply |
| Pool Delegate fee | 3.33% | `delegateManagementFeeRate = 33,300 / 1e6` |
| Borrower count | [VERIFY: LoanManager event scan or Maple transparency report] | |
| Top-N concentration | [VERIFY] | |
| Average loan duration | [VERIFY] | Fixed-term LoanManager |
| Average LTV | [VERIFY] | |
| Collateral mix | [VERIFY] — likely BTC/ETH/other liquid crypto per Maple docs | |

### Pool Delegate as the binding credit-judgment layer

The on-chain PoolDelegate role for syrupUSDC is held by a single EOA: `0xC1e18FFD8825FfB286D177DDEbeba345EC70B49f`. This address has authority to fund loans within the protocol's PoolManager-enforced constraints (collateral whitelist, overcollateralization rules, asset whitelists). The delegate role's authority is bounded by those constraints — but within them, funding any loan to any whitelisted borrower at any compliant LTV is at the delegate's discretion.

**Two distinct risks stack at this layer:**

1. **Operational compromise risk** — single-key EOA. If the key is compromised, attackers can fund loans to whitelisted borrowers at compliant LTVs against accepted collateral. Realistic damage: drain free USDC (~$31M as of 2026-04-26) into attacker-favorable loans, then either repay later (no-op carry exfiltration) or walk if borrower identity gating is weak. *Bounded* attack — not "attacker mints arbitrary syrupUSDC" — but bounded only by the borrower/collateral whitelists, which are themselves PoolManager-configurable. Mitigants: protocol-enforced overcollateralization, borrower whitelist (verify enforcement), Security Admin pause capability.

2. **Credit-judgment risk** — distinct from key compromise. The delegate makes a bad credit call (under-priced collateral, weak counterparty, over-concentration). Smart contracts don't see credit judgment; they only enforce that the loan satisfies the on-chain rules. A bad call recognizes as `unrealizedLosses` on the LoanManager, eventually as NAV drag if the position can't recover. Currently zero across the entire pool.

**Off-chain delegate firm identity:** [VERIFY — not disclosed in Maple's user-facing public documentation as of 2026-04-26 fetch attempts. Likely candidates include Maple Direct (Maple Labs' in-house credit team) given the absence of external delegate attribution in app/docs, or a previously-active credit firm such as Maven 11. Resolve before institutional sizing by checking `app.maple.finance/v2/lend/pools/eth-syrupusdc` directly or contacting Maple's IR.] The delegate firm's institutional credit-underwriting capability is the binding off-chain trust assumption for syrupUSDC's credit quality. Without confirmed firm identity, institutional readers cannot independently validate the credit framework.

### Borrower set

Maple's published model: **vetted institutional crypto firms** — centralized lenders, market makers, trading desks. Borrower selection is gated through Pool Delegate underwriting:

- Vet borrower KYC, financial statements, operational track record
- Set loan-specific terms (rate, duration, LTV, accepted collateral)
- Manage active margin calls as collateral values move
- Liquidate non-responsive borrowers per pre-agreed terms

**Borrower identity is not on-chain readable.** The LoanManager stores loan parameters (principal, term, collateral) but borrower identity is encoded as opaque addresses associated off-chain with the actual borrower firm. Institutional readers cannot independently verify borrower quality without delegate firm cooperation; reliance is on Maple's vetting process and the delegate's reputation.

**Concentration risk** is structurally elevated for institutional lending vaults — "vetted institutional borrower" implies a relatively small set of qualified counterparties, which means high per-borrower concentration vs. an algorithmic protocol that lends to anyone meeting on-chain rules. Without per-borrower data, the conservative read is to assume the top 5 borrowers represent >50% of outstanding principal (typical for institutional credit pools); verify against Maple's transparency reports before institutional sizing.

**Concentrated borrower default during stress** is the dominant tail risk: the primary LoanManager (Strategy 0) holds $1.04B in principal-out across what's likely a small number of large institutional positions. A single major borrower default during a market stress event (collateral falls faster than margin calls can liquidate) produces a hit to NAV with no on-chain delegate cover to absorb it (`Globals.minCoverAmount[PM] = 0`).

### Collateral & margin call infrastructure

- **Overcollateralized at all times** (key structural change from Maple v1)
- **Active margin calls** triggered as collateral values approach pre-defined liquidation thresholds
- **Smart contracts enforce** the overcollateralization parameter; the Pool Delegate executes margin calls and liquidations via the LoanManager interface

The overcollateralization model means the binding risk is **not** "borrower defaults and depositors lose money" but rather "collateral cannot be liquidated fast enough during a market dislocation." This shifts the risk profile from pure credit risk to liquidity-during-stress risk — and stress events are exactly when collateral DEX depth thins.

Accepted collateral types are configured by PoolManager; institutional readers should verify the current whitelist on-chain (`PoolManager.isCollateralAsset(address)` per asset of interest) before sizing. Typical collateral per Maple's published materials: BTC (WBTC), ETH (WETH), and other liquid digital assets.

### Loss waterfall

**Critical finding (verified on-chain 2026-04-26):** **No Pool Delegate first-loss capital is required.** `Globals.minCoverAmount[PoolManager] = 0`, and the PoolDelegateCover contract (`0x9e62...AfF5`) holds zero USDC.

This is materially different from Maple v1, where Pool Delegates were required to post MPL tokens as a first-loss bond. Under the current Syrup configuration, the loss waterfall is:

1. **Borrower default** triggers liquidation of overcollateralization
2. **Collateral liquidation proceeds** are applied to outstanding principal + interest
3. **If liquidation produces a shortfall** (collateral fell faster than liquidation cleared), the shortfall hits `unrealizedLosses` on the LoanManager
4. **`unrealizedLosses` reduces NAV** for all syrupUSDC holders pro-rata
5. *(Historical Maple v1: pool delegate's MPL bond would absorb losses in a junior tranche before depositors)*
6. *(Currently: no junior tranche)*

**Institutional implication:** Depositors are the first-loss class. The delegate firm's financial alignment with depositors is purely reputational + equity in Maple Labs (if any) + future fee income — not on-chain capital at risk. This is a structural change worth flagging in any institutional sizing memo.

**Whether Maple Labs holds protocol-level cover elsewhere** (e.g., as a shared insurance fund denominated in MPL/SYRUP at the Globals layer) is TBD verify via off-chain Maple disclosures. The on-chain pool-level cover slot is empty.

### Yield mechanics (organic vs incentive)

#### Revenue source

syrupUSDC yield is sourced from **interest on overcollateralized institutional loans**. Borrowers pay 5–9% interest on short-duration loans secured by overcollateralized BTC/ETH/other liquid digital asset collateral. The pool aggregates loan interest, takes Maple's protocol fee (`platformManagementFeeRate` per Globals; verify) plus the Pool Delegate's 3.33% management fee, and distributes the remainder to syrupUSDC holders as NAV accrual.

This is **organic yield** — derived from real borrower interest payments, not from emissions, recursive leverage, or external incentive subsidies at the underlying-yield layer.

#### APY profile

| Component | APY | Notes |
|---|---|---|
| Base institutional yield | 5–9% | Set by borrower interest minus Maple protocol fee minus 3.33% delegate fee |
| Syrup Season programs (incentive overlay) | +5–10% | Programmatic point/incentive overlay; varies by season |
| Blended (Seasons 1–7 average) | ~20.5% | Per Maple's published figures |
| Season 7 (recent) | ~16.4% | Latest declared average |

**Sustainability framing:** Holders should distinguish between **base yield** (sustainable from organic loan interest, durable as long as Syrup is operating) and **incentive yield** (programmatic, subject to season schedule changes). When Syrup Seasons end or restructure, headline APY can drop sharply without any change in underlying loan health. **Plan around base yield (5–9%), not headline yield (16–20%).**

Yield volatility is lower than typical DeFi yield-bearing assets — the underlying is institutional lending at relatively stable rates, not algorithmic borrow markets. Rate movements track institutional credit demand and fed-rate proxies more than crypto market dynamics.

### v1 incident history (decision-relevant context)

Maple v1 (2021–2022) operated under an **undercollateralized** lending model. The 2022 credit cycle produced two major losses:
- **Orthogonal Trading default:** ~$36M (December 2022)
- **M11 Credit / Babel Finance:** additional losses
- **Total LP impact:** $50M+

These were credit-risk failures, not smart-contract exploits — borrowers defaulted during a systemic event. Maple's contracts functioned as designed; the issue was inadequate credit underwriting in an undercollateralized framework.

The Syrup product line is Maple's structural response: overcollateralized only, vetted Pool Delegates, active margin calls. The team published transparent post-mortems and rebuilt v2 with explicitly different risk parameters. **Institutional memory of v1 losses remains a legitimate concern about historical risk-management judgment under the same legal entity, even though the product model has fundamentally changed.** Operational/governance implications covered in §IV.

**Credit Risk Score: 5.5/10** — Overcollateralized loan book with active margin-call infrastructure, $1.04B principal-out cleanly serviced, zero unrealized losses, real organic yield from institutional borrowers (5–9% base). Deductions for: Pool Delegate single-key EOA controlling loan funding, **zero on-chain first-loss cover** (depositors directly absorb losses, materially different from Maple v1's MPL-bond model), borrower identity non-public (cannot independently verify concentration; conservative read is top-5 borrowers >50% of book), credit-judgment is delegate-discretionary with no smart-contract enforcement of credit quality, headline APY blends incentive yield with base yield (not durable), v1 bad-debt history under the same Maple Labs legal entity is a legitimate institutional-memory mark, no protocol-level insurance attestation publicly verified.

---

## III. Liquidity & Redemption — 6.5/10

### Two exit paths

**Path 1 — DEX aggregator routing (preferred for retail and low-institutional).**
- Aggregators (KyberSwap, 1inch, etc.) route across **Uniswap v3/v4, Balancer, and other listed venues**
- Verified Balancer pool ID: `0x0195538979e579d49999f780c04fc4bf68778b6f0000000000000000000006d9`
- Empirical exit slippage (PegTracker probe, 2026-04-25): **~12 bps flat from $1K to $100K notional**
- Trades syrupUSDC → USDC near NAV; permissionless; sub-minute settlement
- **Pool TVL view alone is misleading.** The "$10M Uniswap+Balancer = ~1% of $1B+ supply" framing implies a tighter constraint than empirical aggregator routing actually faces in normal market conditions. *However*, the strict view becomes the binding constraint during correlated-outflow stress — at that point, pool depth, not aggregator efficiency, sets the floor.

**Path 2 — Direct redemption via WithdrawalManager queue.**
- Submit redemption request to WithdrawalManager (`0x1bc4...fE3`)
- Cycle-based queue; processed at NAV from free pool USDC
- "Average withdrawal time under 5 minutes" claimed by Maple as of April 2025; should be re-verified during stress windows
- For sizes exceeding aggregator-route depth (low-MM range and above), this is the path institutional sizers will use
- **Current state (2026-04-26):** Queue empty (cycle 14077, head=tail); zero current redemption pressure

#### Stress quantification

The on-chain anchor for stress-case sizing:

| Scenario | Free USDC available | Time to clear | Notes |
|---|---|---|---|
| Steady state (current) | ~$31M | Sub-minute via aggregator + queue | ~3% of supply available immediately |
| 3% correlated outflow | $31M consumed | Minutes-to-hours via queue | Approaches the buffer limit |
| 10% correlated outflow ($107M) | Insufficient buffer | **Days**, function of loan repayment cadence | $76M shortfall must come from loan repayments / margin calls |
| 25% correlated outflow ($268M) | Deeply insufficient | **Weeks**, function of loan termination + collateral liquidation throughput | Forced delegate-side termination of fixed-term loans |
| 50%+ correlated outflow | Deeply insufficient | **Indeterminate** — collateral DEX depth becomes binding | Collateral liquidation paths thin during stress; queue extends until borrowers repay or collateral clears |

**Monitoring leading indicators (PegTracker live):**
- `peg.premium_discount_pct` widening beyond ~50 bps → instant-liquidity buffer depleting
- `liquidity.quotes.{1000,10000,50000,100000}.slippage_bps` increasing materially across the standard tiers → aggregator routing depth deteriorating

### Redemption liquidity risk

**Normal markets:** Aggregator routing handles retail-to-low-institutional sizes (≤$100K) at ~12 bps slippage with sub-minute settlement. The "instant liquidity is broken because pool TVL is only 1%" concern doesn't bind in base-case markets — aggregators route across more venues than Maple's original Uniswap+Balancer launch pools.

**Correlated-outflow stress:** Binding constraint reverts to underlying pool depth (free USDC + loan repayment cadence), not aggregator efficiency. Late exits face the queue; queue speed depends on free USDC vs outstanding loan principal — if loans are fully deployed (97% currently), queue extends until loan repayments or borrower margin-call liquidations free USDC. In a severe stress event (correlated borrower distress + DEX slippage widening + queue lengthening), exit timeline could extend from sub-minute (steady state) to weeks.

**Liquidity & Redemption Score: 6.5/10** — Empirically excellent base-case exit liquidity (~12 bps slippage to $100K via DEX aggregator routing), permissionless dual-path redemption (queue + secondary), queue currently empty with zero current redemption pressure. Deductions for: 97% deployment ratio leaves only ~3% free USDC buffer (~$31M), stress-case exit is loan-repayment-bound past a 3%-of-supply outflow, "instant liquidity" pool TVL is only ~1% of supply (binding during stress even though aggregator routing covers base case), DEX depth on non-Ethereum venues thinner.

---

## IV. Operational & Governance — 6.0/10

This axis covers what *operates* and *governs* the protocol — multisig hygiene, key management, delegate operational practices, team continuity, and external governance dependencies. Distinct from §I (smart-contract code) and §II (credit underwriting); this is the human and procedural layer.

### Governance topology (on-chain verified 2026-04-26)

| Role | Address | Type | Signer set |
|---|---|---|---|
| **Governor (Timelock)** | `0x2eFFf887...426b` | OZ-style Timelock, **24h MIN_DELAY** | Custom variant — proposer membership not directly readable via `hasRole()`. Verify via Etherscan AccessControl events. |
| **Operational Admin** | `0xCe1cE7c7...4E8` | Safe v1.3.0, **3-of-5** | `0x57d1...c7c`, `0x8be3...736`, `0x4024...07b`, `0xF570...827`, `0x7371...7AF` |
| **Security Admin** | `0x6b1A78C1...818` | Safe v1.3.0, **3-of-6** | `0x4E10...E4b`, `0x8Ce4...624`, `0x4109...ED1`, `0x54cC...B74`, `0x44A6...3CA`, `0x0630...4FF8` |
| **PoolDelegate** | `0xC1e1...49f` | **EOA (single-key)** | n/a — single signing key |
| mapleTreasury | `0xa9466EaB...19` | Contract (not standard Safe) | Receives protocol fees; identity TBD verify via Etherscan |

**Three structural observations:**

1. **24h timelock provides a meaningful upgrade-visibility window** — significantly above peer protocols that have no upgrade delay (e.g., thBILL's "no timelock disclosed"). Institutional readers should monitor `ScheduledOperation` events on the Governor as a leading indicator of upgrade activity.
2. **Role separation is real, not nominal** — Operational Admin (3-of-5) and Security Admin (3-of-6) are *separate* Safes with *non-overlapping* signer sets. Compromise of one Safe does not automatically compromise the other; emergency-pause path is structurally separate from the parameter-change path. Above-average governance hygiene.
3. **Pool Delegate is a single-key EOA** — operational layer for loan funding. Off-chain custody practices for that key are the binding security; not publicly attested. Operational risk covered in §II Credit (the same EOA is the credit-judgment binding).

Signer identity for the Safes is on-chain readable; the firms or individuals behind those addresses are not publicly attested to specific roles. Acceptable for protocol-level admins (signers are typically Maple Labs internal staff + possibly external advisory members) but warrants verification before institutional sizing.

### Team

Maple Labs (Cayman Islands entity). Co-founder Sid Powell remains CEO; the team is doxxed and publicly active in the institutional DeFi credit space. Sustained operations across the v1 → v2 transition under the same legal entity.

[VERIFY: Current team size, key personnel, any departures or governance changes since v2 launch]

### v1 Incident History (operational/governance read)

Covered in §II Credit for the credit-decision context. The operational/governance read:

- **2021–2022:** Maple v1 lent on an undercollateralized basis; ~$50M+ LP losses across Orthogonal Trading and M11 Credit / Babel defaults
- **2023–2024:** Architectural reset to v2 — overcollateralized only, vetted delegates, active margin calls, transparent post-mortems published
- **2024–2026:** Syrup product line launched; ~21 months of clean operations, zero credit losses on-chain

The legal entity (Maple Labs Cayman) and the operational team are continuous across both periods. This is a real institutional-memory mark that some risk frameworks will dock Maple for regardless of v2's clean record. The honest framing: v2 is a structurally different product, but operates under the same governance and management that led to v1's risk acceptance.

### Governance Dependencies

External dependencies that could affect syrupUSDC unilaterally:

- **Chainlink CCIP / CCT governance** — Chainlink Labs + Foundation control DON node operator set, RMN configuration, CCT pool implementation upgrades. An adverse change at the CCIP layer affects every CCT-bridged asset.
- **USDC issuer (Circle)** — syrupUSDC is denominated in USDC; Circle policy decisions on freezes, redemptions, or regulatory compliance flow through to syrupUSDC indirectly.
- **Aave V3** — Strategy 2 routes idle USDC into Aave V3 (currently 10 wei AUM, effectively unused, but the integration exists). Adverse Aave V3 governance changes could affect this strategy if it scales.

### TVL Trajectory

- **September 2025:** Crossed $1B Ethereum pool TVL (per Maple's published figures)
- **April 2026:** ~$1.07B Ethereum pool, with cross-chain expansion to Solana, Arbitrum, Base, Plasma during 2025–2026
- **Aave–Maple partnership (2026-01):** syrupUSDC onboarded to Aave V3 on Base shortly after Base deployment; expanded use as DeFi collateral

[VERIFY: Current cross-chain TVL distribution; Season-driven inflows vs organic; retention through Season transitions]

**Operational & Governance Score: 6.0/10** — 24h Timelock on protocol upgrades is well above peer baseline, multisig role separation between Operational Admin (3-of-5) and Security Admin (3-of-6) with non-overlapping signer sets is real institutional hygiene, doxxed Cayman Labs entity with sustained operations across v1 → v2 transition, transparent v1 post-mortems, strong external partner integrations (Chainlink CCIP, Aave V3 listings). Deductions for: PoolDelegate single-key EOA (the binding operational surface — both for credit and for key compromise), Pool Delegate firm identity not transparently disclosed in public materials, multisig signer-to-firm attribution not publicly verified, Timelock proposer set not directly readable via standard calls, v1 bad-debt history under the same legal entity, no bankruptcy remoteness for token holders, dependency on Chainlink CCIP governance for cross-chain integrity, limited Lindy under v2 architecture (~21 months Syrup), unproven through a multi-cycle bear market under v2.

---

## V. Overall Risk Score — 6.2/10

Weighted composite over four primary axes (Supply Integrity reported as separate callout):

| Axis | Score | Weight | Contribution |
|---|---|---|---|
| Smart Contract | 7.0 | 0.25 | 1.75 |
| Credit & Counterparty | 5.5 | 0.35 | 1.93 |
| Liquidity & Redemption | 6.5 | 0.20 | 1.30 |
| Operational & Governance | 6.0 | 0.20 | 1.20 |
| **Composite** | **6.2** | 1.0 | **6.18** |
| *Supply Integrity (callout)* | *6.5* | — | *— (not in composite)* |

**Why these weights:** Credit gets the heaviest weight (0.35) because it is the binding axis for a discretionary-credit lending vault — both the credit-judgment quality and the loss waterfall sit here, and there is no on-chain first-loss buffer to absorb credit failures. Smart Contract gets a meaningful but smaller weight (0.25) because the audit profile is strong and the architecture is well-established, so contract risk is bounded. Liquidity (0.20) and Operational (0.20) are the equal-weighted secondary axes — both matter for sizing decisions, neither is the dominant constraint in a base-case scenario. Supply Integrity sits as a callout rather than a composite component — it's the cross-chain bridge dimension that doesn't fit cleanly into the four primary axes for a credit-focused product.

**Score interpretation:** **Moderate institutional risk.** Suitable for retail and low-institutional sizing in normal markets via aggregator-route exit, with explicit understanding that base yield (5–9%) is the durable return and headline yield (16–20%) is augmented by Season incentives. Larger positions, or any institutional sizer expecting to exit during stress, should price queue latency and the discretionary-credit-judgment layer (with zero on-chain first-loss cover) into entry decisions.

---

## VI. Key Recommendations

1. **For sizing decisions, use empirical aggregator-route slippage — not strict pool TVL.** PegTracker's 2026-04-25 probe shows ~12 bps flat slippage at $1K–$100K via KyberSwap routing. The headline "$10M / ~1% of supply" pool-TVL view is overly conservative for normal markets. *However*, this only describes base-case exit — in correlated-outflow stress, depth shrinks to underlying pool TVL + loan-repayment cadence (see §III stress quantification table).

2. **Monitor PegTracker fields as leading stress indicators.** Set alerts on:
   - `peg.premium_discount_pct` > 50 bps → instant-liquidity buffer depleting
   - `liquidity.quotes.<notional>.slippage_bps` materially rising across standard tiers ($1K/$10K/$50K/$100K) → aggregator routing depth deteriorating
   - WithdrawalManager queue length growing (currently empty as of 2026-04-26)

3. **Distinguish base yield from Season-incentive yield.** Headline 16–20% APY blends ~5–9% organic loan interest with SYRUP-token incentives. Base yield is what remains after seasons end or restructure; size around that.

4. **Verify Pool Delegate firm identity before institutional sizing.** The on-chain PoolDelegate EOA is `0xC1e1...49f`; the operational firm behind it is not publicly attested in Maple's user-facing documentation as of 2026-04-26. Confirm via Maple IR or `app.maple.finance/v2/lend/pools/eth-syrupusdc` directly.

5. **Treat zero-on-chain-first-loss-cover as a structural risk feature.** Maple v1's MPL-bond model has been dropped for Syrup; depositors are first-loss. Institutional risk frameworks that rely on "delegate has skin in the game" should verify whether Maple Labs holds protocol-level cover at the Globals layer (off-chain disclosure) or whether the only delegate alignment is reputational.

6. **Per-chain due diligence for non-Ethereum deployments.** Cross-chain via Chainlink CCIP/CCT — burn-and-mint native deployments. Materially different attack class from LayerZero OFT exploits (rsETH/Drift/Volo). Still warrants per-chain checks: verify CCT pool addresses on Chainlink's CCIP directory, check per-chain rate limits, verify pool depth on each chain (non-Ethereum venues have shallower secondary liquidity).

7. **Monitor Governor Timelock `ScheduledOperation` events** as a leading indicator of upgrade activity. The 24h delay provides an exit window if a malicious or contentious upgrade is scheduled.

8. **Treat zero-losses-to-date as a feature, not a guarantee.** Syrup product has clean credit performance over ~21 months but has not been stress-tested through a multi-cycle bear market under the v2 model. Credit-cycle-correlation tail risk is real.

9. **Compare wrapper-layer track record with Maple Labs entity track record.** v1 bad debt happened under the same legal/operational entity. Decide explicitly whether your framework treats the entity or the product as the relevant unit.

---

## VII. Chain Deployments

| Chain | Pool / Token Address | PoolManager | WithdrawalManager | LoanManager | CCT Pool | Verified |
|---|---|---|---|---|---|---|
| Ethereum (canonical) | `0x80ac24aA929eaF5013f6436cdA2a7ba190f5Cc0b` | `0x7aD5fFa5fdF509E30186F4609c2f6269f4B6158F` | `0x1bc47a0Dd0FdaB96E9eF982fdf1F34DC6207cfE3` | `0x6ACEb4cAbA81Fa6a8065059f3A944fb066A10fAc` (primary) | n/a (canonical) | ✓ 2026-04-26 |
| Arbitrum | [VERIFY] | n/a (bridged only) | n/a | n/a | [VERIFY: Chainlink CCIP directory] | — |
| Base | [VERIFY] | n/a | n/a | n/a | [VERIFY] | — |
| Solana | [VERIFY] | n/a | n/a | n/a | [VERIFY] | — |
| Plasma | [VERIFY] | n/a | n/a | n/a | [VERIFY] | — |

**Per-chain DEX depth, listed venues, and Aave/lending integrations:** [VERIFY per chain — non-Ethereum venues have materially shallower secondary liquidity]

---

## Bottom Line

syrupUSDC is one of the better-designed institutional yield-bearing stablecoins available to retail: real organic yield from overcollateralized institutional loans, strong audit profile (Spearbit + Trail of Bits + 6 others), $1M+ Immunefi bounty, and a 24h-timelock-gated upgrade path with multisig role separation between operational and security admin functions. The Syrup product line's clean credit record over ~21 months and $1B+ scale per pool is meaningful evidence of a working risk-management framework.

The 6.2/10 score reflects four persistent concerns: (a) the **Pool Delegate model adds discretionary credit risk** beyond what a purely algorithmic protocol carries, with the operator role implemented as a single-key EOA — and credit underwriting is the binding axis for this product (35% of the composite weight); (b) **no on-chain first-loss cover absorbs losses before depositors** — Maple v1's MPL-bond model has been dropped for Syrup, putting depositors directly in the first-loss tranche; (c) the **97% deployment ratio creates a structural stress-case redemption gap** — base-case aggregator-route exit is empirically ~12 bps to $100K, but stress-case exit is queue-bound with loan-repayment-cadence-dependent clearing time; (d) **Maple Labs' v1 bad-debt history is a legitimate institutional-memory dock** even though the v2 product is structurally different.

For sizing: comfortable for retail and low-institutional positions exiting via aggregator routing in normal markets, with explicit understanding that base yield (5–9%) is the durable return, not the Season-headline (16–20%). Larger positions, or any institutional sizer expecting to exit during stress, should price queue latency into entry decisions, verify Pool Delegate firm identity before sizing, and verify per-chain CCT bridge surface for any non-Ethereum allocation.

---

## VIII. Methodology & Disclosure Limits

This report is based on direct on-chain reads against Ethereum mainnet (RPC: Alchemy) on 2026-04-26, plus published Maple Finance documentation, audit reports, and third-party reporting on the cross-chain CCIP/CCT integration.

**What this report can directly verify:**
- All Ethereum core contract addresses, storage state, and verified topology (§I)
- Multisig threshold and signer composition for Operational Admin and Security Admin Safes
- Governor Timelock MIN_DELAY (24h) and OZ-style role-ID layout
- Pool state (totalAssets, totalSupply, NAV, deployment ratio, free USDC, queue state)
- Strategy contract identification and AUM per strategy
- Loss waterfall configuration (zero pool delegate first-loss cover required and posted)

**What this report explicitly cannot directly verify:**
- **Per-chain CCT pool addresses and rate limits** for Solana / Arbitrum / Base / Plasma — Chainlink CCIP directory is SPA-rendered and not extractable via automated fetch. Cross-chain architecture (CCIP + CCT, burn-and-mint) is independently confirmed via published sources but per-chain specifics require direct browse to `docs.chain.link/ccip/directory/mainnet/token/syrupUSDC`. **[Open verification item.]**
- **Pool Delegate firm identity** behind EOA `0xC1e1...49f` — not disclosed in Maple's user-facing public documentation as of 2026-04-26. Verify via Maple IR or the syrupUSDC pool page on `app.maple.finance`. **[Open verification item.]**
- **Loan-book composition** — borrower count, top-N borrower concentration, average duration, average LTV, collateral mix. The LoanManager stores per-loan parameters but borrower identity is opaque on-chain; institutional readers should consult Maple's transparency reports or delegate disclosures. **[Open verification item.]**
- **Off-chain delegate firm key-management practices** — the PoolDelegate EOA is single-key on-chain; the operational custody of that key (Fireblocks / Copper / similar institutional MPC vs cold storage vs hot wallet) is not publicly attested.
- **Borrower whitelist enforcement** — whether PoolManager enforces a hard-coded list of acceptable borrower addresses, and the scope of the collateral asset whitelist. **[Open verification item — cast-readable on PoolManager.]**
- **Maple Labs protocol-level cover** — whether the protocol holds shared insurance / reserve capital at the Globals layer (off-chain disclosure required).
- **Governor Timelock proposer set** — `hasRole()` calls revert against the custom Timelock variant. Resolve via Etherscan AccessControl event logs.
- **Per-Strategy audit attestation** — the four strategy contracts may post-date some of the audit work; per-contract verification recommended before treating individual strategies as audited.
- **Comparison vs peers** — deferred from this v1 report due to limited current peer set in syrupUSDC's specific category (overcollateralized institutional credit lending vault). Worth adding when the peer set grows (Centrifuge, future Sky/Maker delegated-credit products, etc.).

**Reading the open verification items:** None of the open items are blockers for the headline assessment. The verified on-chain findings (24h timelock, zero first-loss cover, 97% deployment ratio, multisig topology, primary LoanManager AUM and clean book) are the load-bearing facts for the 6.2/10 score. The open items refine specific section depth (cross-chain table, delegate roster, loan-book composition) but do not change the structural read.

---

## IX. Sources

**Direct on-chain verification (Ethereum mainnet):**
- Pool, PoolManager, WithdrawalManager, PoolDelegate, MapleGlobals, all 4 Strategies — verified via `cast call` against Alchemy RPC on 2026-04-26
- Governance Safes (Operational Admin, Security Admin) — verified via `getThreshold()` and `getOwners()` calls
- Timelock — verified via `MIN_DELAY()` and standard role-ID constants
- Raw audit data: `~/riskAnalyst/reports/data/syrupusdc-onchain-audit-2026-04-26.md`

**Maple Finance published materials:**
- [Instant Liquidity for SyrupUSDC — Maple Finance Insights](https://maple.finance/insights/instant-liquidity-for-syrupusdc) — Balancer/Uniswap pool architecture
- [Discussing the Pool Delegate Role — Maple Governance Forum](https://community.maple.finance/t/discussing-the-pool-delegate-role-and-strengthening-pool-delegate-alignment/278) — context on delegate alignment evolution
- Maple's published v2 audit reports (Spearbit, Trail of Bits, Three Sigma, Peckshield)
- Maple v1 post-mortems on Orthogonal Trading and M11 Credit defaults

**Cross-chain (CCIP / CCT) confirmation:**
- [Maple Launches syrupUSDC on Solana with Chainlink Support — Bitget News](https://www.bitget.com/news/detail/12560604800835)
- [CCIP v1.6 Is Now Live — Chainlink Blog](https://blog.chain.link/ccip-v1-6-is-now-live/)
- [syrupUSDC CCIP Directory Entry — Chainlink Documentation](https://docs.chain.link/ccip/directory/mainnet/token/syrupUSDC) (SPA, addresses not auto-extractable)

**Companion materials:**
- [syrupUSDC — Retail Risk Report](/reports/syrupusdc-retail) — companion retail-audience version
- PegTracker live monitoring data: `data/peg_tracker_latest_usd.json` under `syrupUSDC` key
