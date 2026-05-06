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
last_verified: "2026-05-03"
production: true
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
credit_score: 6.0
liquidity_score: 7.5
operational_score: 7.0
supply_integrity_score: 6.5
overall_score: 6.75
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
    notes: "PoolDelegate EOA (0xC1e1...49f) funds Open-Term loans on Strategy 0 LoanManager (0x6ACE...0fAc). The MapleLoan contract holds NO on-chain collateral — collateral() and collateralAsset() revert. Collateral is held off-chain by Pool Delegate's custody arrangement; smart contracts handle loan accounting, payment scheduling, and time-based default triggering (noticePeriod 24h + gracePeriod 48h). Borrower selection, collateral terms, initial collateralization level, and call decisions are delegate-discretionary. Single-key operational role."
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
| **Underlying exposure** | Two-bucket per Maple's AUM Details: 79% Loans (third-party institutional credit, BTC/XRP-collateralized) + 21% Liquidity (pool-owned PYUSD/USTB/AMM strategies); USDC-denominated |
| **Type** | Yield-bearing ERC-4626 lending vault share |
| **Primary access** | Permissionless deposit/redeem; no KYC at the vault layer |
| **Secondary access** | DEX aggregator routing (Uniswap v3/v4, Balancer, others via KyberSwap/1inch) |
| **Deployed chains** | Ethereum (canonical), Solana, Arbitrum, Base, Plasma |
| **Cross-chain mechanism** | Chainlink CCIP with CCT (burn-and-mint) |
| **Total assets (2026-05-03, on-chain)** | ~$1,217M USDC (grew from $1,074M on 2026-04-26) |
| **Active loans (2026-05-03)** | 28 (loan principal $1,192M) |
| **NAV** | ~$1.16 USDC per syrupUSDC (slow upward NAV grind from interest accrual) |
| **Deposit cap headroom** | ~$1.28B (liquidityCap = $2.5B; 48.8% utilized — see §I.5 liquidity cap mechanics) |
| **Sibling pool** | syrupUSDT — ~$436M assets / 12 active loans / shared Pool Delegate firm |

> *Overall score (6.75) is a weighted composite over five axes (Contract / Credit / Liquidity / Operational + Supply Integrity callout) — see §V for category weights.*

---

## Protocol Summary

syrupUSDC is Maple Finance's flagship retail-accessible institutional-credit product: an ERC-4626 vault that takes USDC deposits and deploys them as loans to vetted institutional borrowers (centralized lenders, market makers, trading desks). It launched in August 2024 and has reached ~$1.07B–1.19B Ethereum-pool TVL through April–May 2026, with cross-chain expansion to Solana, Arbitrum, Base, and Plasma via Chainlink CCIP's CCT standard during 2025–2026.

The product sits at the intersection of two risk categories that don't normally combine: **discretionary institutional credit** (Pool Delegate model — humans make the underwriting calls) and **permissionless DeFi rails** (no KYC at the vault layer, ERC-4626 standard, redemption queue + DEX-aggregator dual exit). The Pool Delegate's underwriting judgment is the binding human factor; the active credit-monitoring infrastructure (call right with 24h notice + 48h grace) is the primary on-chain enforcement mechanism. **Collateral itself is held off-chain** by custodians under Pool Delegate policy — this is verified on-chain (the MapleLoan contract has no `collateral()` getter; the call reverts) and via Maple's GraphQL.

The Syrup product runs on Maple's v2 architecture and has reported zero principal losses across ~3 years of operation through May 2026, with on-chain `unrealizedLosses = 0` confirmed at the PoolManager and primary LoanManager layers. The clean record is real, though it covers a single (favorable) credit cycle. (For institutional readers tracking entity track record across product generations: Maple v1's 2022 undercollateralized-lending bad-debt event (~$50M+ LP losses across Orthogonal Trading and M11 Credit / Babel Finance defaults) is documented in §IV; Syrup's overcollateralized-only structure was the explicit response.)

**Pool composition has two structurally distinct components — verified 2026-05-04 against Maple's own AUM Details page** (`app.maple.finance/earn/details`):

- **Loans (79% of family AUM, $1.27B family-wide; ~$914M syrupUSDC)**: third-party institutional credit. BTC at 125–333%, XRP at 150%, smaller cbBTC and HYPE positions. This is the "overcollateralized institutional lending" the marketing describes. Maple's headline pool collateral ratio (165.5% family-wide) is computed against the loan book only.
- **Liquidity (21% of family AUM, $347M family-wide; ~$304M syrupUSDC)**: pool-owned positions in yield-generating strategies. Largest positions: $152.7M PYUSD strategy (Paxos), $105M USTB position (Superstate's tokenized T-bill, NAV-accruing), $48M USDC/USDT in DEX AMM LP positions (paired with syrupUSDC/syrupUSDT shares). Routed through Strategy 0's OpenTermLoanManager as accounting wrapper, but functionally NOT third-party credit — these are pool-owned strategies parked in yield-generating positions while remaining nominally redeemable.

The "overcollateralized at all times" framing in Maple's marketing applies to the Loans bucket. The Liquidity bucket is intentionally at par with the underlying asset — risk axis is **issuer/RWA/AMM, not borrower default**. The earlier "Set A overcollateralized + Set B at-par loans" framing collapsed both into a single mixed-collateral loan book; that framing was incorrect — the at-par positions aren't loans at all, they're Liquidity-layer strategies. Earlier-flagged "Maple data anomaly" of `syrupGlobals.loansValue` ($1.27B) not reconciling to per-pool TVL sum ($1.61B) was NOT a Maple bug — it's their Loans-only field, and we were aggregating Loans + Liquidity.

Five findings from the 2026-04-26 → 2026-05-01 verification cycle shape the institutional read:

1. **24h timelock on protocol governance** (`MIN_DELAY = 86400`s on the governor Timelock) — materially stronger than peer products with no upgrade delay.
2. **Zero Pool Delegate first-loss cover required** (`Globals.minCoverAmount[PM] = 0`; PoolDelegateCover balance = 0) — depositors are first-loss; the v1-era MPL-bond model has been dropped for Syrup. No on-chain skin-in-game absorbs losses before depositors.
3. **Pool deployment fluctuates** ~80–98% across the period — pool grew from $1.073B → $1.217B (2026-04-26 → 2026-05-03) as new deposits arrived faster than the delegate redeployed; free USDC ranged $31M → $337M and back to <$25M. Stress-case redemption depth is loan-repayment-bound past the free-USDC buffer.
4. **5 active loans (~$82M, ~8% of book) running below their funding-time required collateral level** as of 2026-05-01 — including a $37.6M BTC-collateralized loan at 102.3% vs 125% required (only 2.3pp above par). The on-chain status flags read "healthy" because the contract doesn't auto-trigger; the delegate has discretion to call but has not. This is a live signal the dashboard surfaces and institutional readers should monitor.
5. **Per-loan collateral data is partly verifiable, partly attestation-only.** Maple's GraphQL exposes per-loan asset and required level for all loans; current-state collateral amount is reliable for ~85% of the book but **broken for the USTB position ($105M) and three USDC at-par loans (~$36M)** — a Maple-side data anomaly leaves $141M / 14.4% of book unverifiable through any public Maple channel. PYUSD ($152.7M) returns correctly.

Overall profile: strong audit posture (Spearbit + Trail of Bits + 6 others, $1M+ Immunefi bounty), clean v2 contract architecture with explicit timelock-gated upgrade path, real organic yield, and empirically excellent base-case exit liquidity via DEX aggregator routing — offset by Pool Delegate discretion as the binding credit-judgment layer, consolidated Maple operational control of all custody (5 EOA-shaped addresses control $2.18B family capital — per Maple's response 2026-05-04 these are MPC wallets + strict policy controls, an institutional-grade primitive but on-chain unverifiable), the absence of on-chain delegate first-loss capital, and the gap between base-case aggregator-route exit (good) and stress-case pool-depth-bound exit (queue-bound). Maple Labs' v1 bad-debt history is documented in §IV for institutional-frame readers but carries small score weight given the clean ~3-year v2 record.

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
| Strategy 0 (primary LoanManager) | `0x6ACEb4cAbA81Fa6a8065059f3A944fb066A10fAc` | **OpenTermLoanManager** — ~80–97% of pool TVL across the period (verified 2026-04-30 by probing the Loan impl `0xeeadb6...` ABI, which exposes open-term-only fields like `noticePeriod`, `gracePeriod`, `dateCalled`). Earlier audit (2026-04-26) labeled this FixedTerm; corrected. |
| Strategy 1 (idle) | `0x4A1c3F0D9aD0b3f9dA085bEBfc22dEA54263371b` | Presumably FixedTermLoanManager (paired with the OpenTerm at Strategy 0) — zero deployment |
| Strategy 2 (MapleAaveStrategy) | `0x560B3A85Af1cEF113BB60105d0Cf21e1d05F91d4` | Wraps Aave V3 USDC pool (`0x8787...4E2`); receives `aEthUSDC`. **Active but dormant** at 10-wei placeholder. Historically deployed at $26-42M scale; wound down March 19 + April 2, 2026 |
| Strategy 3 (MapleSkyStrategy) | `0x859C9980931fa0A63765fD8EF2e29918Af5b038C` | Routes USDC → USDS via Sky `UsdsPsmWrapper`, deposits into sUSDS (`0xa3931d71...3fbD`) for DSR-equivalent yield. **Active but dormant** at 10-wei placeholder; no material funding history |

The architecture is consistent with Maple v2's public design: the PoolManager orchestrates a list of Strategies (LoanManagers + yield-strategy wrappers); the Pool is the user-facing ERC-4626 share token; the WithdrawalManager processes queue-based redemptions; PoolDelegate is the operational role with discretionary authority to fund loans within the Globals-set constraints.

**Cross-contract surface is non-trivial** — the redemption flow alone touches Pool → PoolManager → WithdrawalManager → multiple Strategies (to free USDC if needed) → asset transfer back. Each interface boundary is an attack-surface seam, which is why the audit profile matters.

### DeFi allocation sleeves (Strategy 2 + Strategy 3) — currently dormant

Two of the four registered strategies are **DeFi-yield wrappers** that the Pool Delegate could route idle USDC through for marginal yield on the redemption-buffer portion. Both currently sit at a 10-wei placeholder amount, which keeps strategy state = "active" without any real exposure.

- **Strategy 2 — MapleAaveStrategy.** Wraps Aave V3 USDC pool (`0x87870Bca...`); receives `aEthUSDC` when funded. Strategy fee: 10% of yield. **Historically used at $26-42M scale, wound down in March-April 2026** (verified via on-chain USDC/aEthUSDC asset transfers): $26.5M aEthUSDC withdrawn 2026-03-19; $41.7M USDC supplied + $42.6M aEthUSDC withdrawn within 35 minutes on 2026-04-02 (a defensive sweep pattern, not a yield deployment). Both wind-down events precede the rsETH/Kelp DAO incident of mid-April 2026 — Maple's de-risking from Aave appears to have been a deliberate posture change driven by other factors (general DeFi-counterparty caution, governance signal, or an earlier incident) rather than a Kelp-specific reaction.

- **Strategy 3 — MapleSkyStrategy** (newly identified 2026-05-02; previously labeled "type unidentified" in the 2026-04-26 audit). `STRATEGY_TYPE = "SKY"`. Routes USDC → USDS via Sky's `UsdsPsmWrapper` (`0xA188EEC8...98c`), then deposits into sUSDS (Savings USDS, `0xa3931d71...3fbD`) for DSR-equivalent yield. **No material USDC funding history** — the strategy contract was deployed but never appears to have been actively used.

**Why this matters for institutional readers:**

1. **The Pool Delegate has on-chain authority to redeploy capital into these wrappers without timelock or governance approval.** A delegate-discretionary decision to push $100M+ of free USDC into Aave or Sky/sUSDS at any time would expose depositors to *that protocol's* counterparty risk on the deployed portion (Aave V3 governance, Aave's bad-debt history, Sky's DSR/PSM mechanics, etc.). The dormant state today is a *posture choice*, not a structural limit.

2. **The active wind-down behavior is a positive delegate-management signal.** That Maple actively de-risked from Aave during a window of broader DeFi-counterparty caution — rather than passively chasing marginal yield — demonstrates discretionary risk management on the secondary-strategy layer. Worth weighting positively in the operational-judgment read.

3. **Monitoring axis to track:** if `assetsUnderManagement()` on Strategy 2 or Strategy 3 transitions from 10 wei to a material non-zero amount, the depositor risk surface has expanded into Aave or Sky. The dashboard's strategy AUM table picks this up automatically.

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
- **Controls:** `liquidityCap` = $2.5B (current TVL ~$1.22B → 48.8% utilized; see "Liquidity cap mechanics" below); Security Admin pause capability
- **Asymmetry:** Symmetric — depositor receives shares worth their USDC at NAV

#### Liquidity cap mechanics

`liquidityCap` is a `PoolManager` parameter (governance-controlled, 24h timelock to change) that caps total pool deposits at a dollar maximum. Once TVL hits the cap, new deposits are rejected at the contract layer. Three operational reasons Maple uses one:

1. **Discretionary credit capacity management.** The Pool Delegate (Maven 11) can only originate so much credit to vetted institutional borrowers per unit time. If deposits flood in faster than borrower onboarding, the pool's free-USDC ratio rises and dilutes yield. The cap is a brake on inflows that would outpace credit demand.
2. **Risk-based scaling.** Keeping pool size within what the delegate can responsibly underwrite + monitor. A delegate operating at $1.2B has different bandwidth than at $5B.
3. **Protocol-level circuit breaker.** Provides a non-contract-upgrade lever to slow or stop new inflows under stress (counterparty incident, regulatory action, etc.), separate from the Security Admin pause path.

**For institutional sizing**: at 48.8% utilization the cap isn't currently a constraint — large deposits route through cleanly. Worth tracking as a leading indicator: utilization climbing past ~80% suggests either an upcoming cap raise (capacity expansion signal) or rejection of new deposits (which would push secondary-market price above NAV as primary entry becomes constrained). Cap reductions, while rare, would signal active de-risking and warrant scrutiny. Confirm `setLiquidityCap` authority lies with governor (24h timelock) before institutional sizing.

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

## II. Credit & Counterparty — 6.0/10

**The binding risk axis for syrupUSDC.** Credit underwriting is delegate-discretionary; smart contracts handle loan accounting and time-based default triggering, NOT credit quality. **Collateral is held off-chain** — the MapleLoan contract has no `collateral()` getter (verified 2026-04-30 — the call reverts on the live $152.7M reference loan). Per-loan collateral data comes from Maple's GraphQL (`api.maple.finance/v2/graphql`); on-chain enforcement is the lender's call right with 24h notice + 48h grace before default. With zero on-chain first-loss cover required, depositors absorb credit losses directly. This section does the heaviest work for institutional readers.

### Loan-book composition (verified via on-chain reads + Maple GraphQL, 2026-05-01)

| Field | Value | Notes |
|---|---|---|
| Primary LoanManager | `0x6ACE...0fAc` | Strategy 0; **OpenTermLoanManager** (corrected from earlier "Fixed-term") |
| Loan factory (enumeration source) | `0x6Fad515Fc046DD17166453A79725f50b917b7cF6` | OpenTermLoanFactory — `InstanceDeployed` events scanned via dRPC |
| AUM (current snapshot) | ~$980M | ~82% of pool TVL (varies as deposits arrive) |
| principalOut | ~$978M | Outstanding loan principal |
| accountedInterest | ~$2.4M | Accrued but unpaid interest |
| unrealizedLosses | 0 | Clean book — primary credit alarm signal |
| Pool deployment ratio | ~80–98% range | Varies materially across deployment cycles — observed swing from 18% free (April 30) to <2% free (May 2) as the delegate redeployed fresh deposits within ~24h |
| Free USDC | ~$0–340M range | Fluctuates with deposit/deployment cadence; can compress to <2% of supply within a single day after a deployment cycle |
| Pool Delegate fee | 3.33% | `delegateManagementFeeRate = 33,300 / 1e6` |
| Pool-level collateralization | ~149.6% | GraphQL `poolV2.collateralRatio`; ~$1.47B collateral / ~$982M loans |
| Active loans | 25–27 | varies snapshot-to-snapshot as loans fund/repay |
| Borrowers | 15 | top-1 borrower concentration ~26%; top-3 likely majority of book |
| Weighted-avg interest rate | ~5.5% | Across the active book |
| Avg loan payment interval | ~67 days | Open-Term cadence; varies per loan (30–180d range) |
| **Collateral mix — Set A (crypto-overcollateralized)** | ~70% of book / ~$688M | BTC ($272M, 125–250%), XRP ($172M, 150%), cbBTC ($27M, 143%), HYPE ($7.5M, 200%) |
| **Collateral mix — Set B (at-par stablecoin/RWA)** | ~30% of book / ~$294M | PYUSD ($152.7M @ 100%, Paxos), USTB ($105M @ 100%, Superstate), USDC ($35.5M @ 100%, Circle, 3 loans) |
| Loans below init level | 5 | ~$82M, all BTC-collateralized; tightest is $37.6M loan at 102.3% vs 125% required |
| GraphQL data anomaly | $141M unverifiable | USTB ($105M) + 3 USDC at-par loans (~$36M) return broken `currentAssetAmount` from Maple's GraphQL — current-state collateral is attestation-only for these specific loans |

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

**Critical correction vs the prior framing:** The smart contract does NOT enforce ongoing overcollateralization. The MapleLoan contract has no `collateral()` getter (verified 2026-04-30 — the call reverts on the live reference loan). Collateral is held off-chain by the Pool Delegate's custodial arrangement. What the contract enforces:

- **Loan accounting** — principal, accrued interest, payment schedule, status flags
- **Time-based default trigger** — if the borrower misses a payment AND `gracePeriod` (typically 48h) elapses, OR if the lender calls the loan AND `noticePeriod` (typically 24h) elapses without repayment → `isInDefault()` becomes true
- **Lender's call right** — the LoanManager (acting on the Pool Delegate's instructions) can recall any loan with `noticePeriod` notice; this is the on-chain enforcement mechanism for collateral degradation

**What is NOT contract-enforced:**
- Continuous collateralization ratio
- Auto-liquidation when collateral falls below a threshold
- Oracle-driven margin-call triggers

The "overcollateralized at all times + active margin calls" framing is therefore a **Pool Delegate policy** plus the legal/custodial framework with off-chain custodians, not a smart-contract invariant. It's enforced by:
1. Borrower's contractual obligation to maintain collateral (legal)
2. Off-chain custodian holding the collateral under Maple's framework
3. Pool Delegate monitoring borrower health and exercising the on-chain call right when collateral degrades

**This distinction matters for institutional readers** because:
- A delegate-side failure to monitor (operational risk) leaves a degraded loan running indefinitely with no automatic correction
- A custodian-side failure (counterparty risk on the custody arrangement) is a separate failure mode from borrower default
- The `isImpaired` flag is set at delegate discretion — meaning the on-chain "credit alarm" trails the actual credit state by however long it takes the delegate to act

**Accepted collateral types** are policy-set per loan, not whitelist-set on-chain (the MapleLoan contract doesn't even have a collateral asset field). Verified collateral types in the active book: BTC, cbBTC, ETH, XRP, HYPE (Set A — crypto, overcollateralized at 125–250%) plus PYUSD, USTB, USDC (Set B — stablecoin/RWA, at par).

### Set A vs Set B — the structurally distinct collateral classes

The 2026-05-01 GraphQL probe revealed the loan book is meaningfully bifurcated. The two sets have different stress-binding scenarios:

| Stress scenario | Set A (~70%, ~$688M) | Set B (~30%, ~$294M) |
|---|---|---|
| Crypto-cycle drawdown (BTC/ETH 30%+) | Buffer compresses; tightest loans go negative; delegate must act | Unaffected (collateral is stable-value) |
| PYUSD depeg (Paxos issuer event) | Unaffected | $152.7M position underwater |
| USTB regulatory / NAV-attestation event | Unaffected | $105M position illiquid or impaired |
| USDC depeg | Unaffected directly | $35.5M position underwater AND the pool's denomination is also USDC (depositor pays twice) |
| Borrower default (operational) | Liquidate crypto collateral via off-chain custodian | Liquidate stablecoin/RWA collateral — same custodial mechanism, different asset |
| Custodian failure (counterparty) | Equally affects both — custodian holds both classes |

**Set B introduces named-issuer risk** to the depositor's surface — Paxos for PYUSD, Superstate for USTB, Circle for USDC. These were not in the report's prior risk frame but now need to be priced explicitly. Set B's "overcollateralization" is functionally **trust in the collateral asset's peg/issuer holding**, not a buffer against asset price volatility.

**Set B has a Maple-affiliated character** worth flagging: Maple's GraphQL classifies the at-par loans with `loanMeta.type` = `"amm"` (the USDC-against-USDC borrower) or `"strategy"` (the PYUSD/USTB borrower). The largest USDC at-par borrower (`0x2570fa...c8a0`) interacts directly with Maple's LoanManager and PoolManager contracts — depositing into and withdrawing from Maple's own pool infrastructure. Combined with the economic non-sense of third-party at-par credit, this strongly suggests **the at-par fraction is Maple-affiliated liquidity facilities or market-maker funding rather than external institutional credit.** The exact relationship (protocol treasury, partner MM firm, internal credit strategy) is not publicly disclosed by Maple. For depositors, this means the Set B 30% of the book carries **Maple-counterparty-aligned risk rather than diversified third-party borrower risk** — a structurally different axis from the BTC-collateralized loans to crypto-trading firms in Set A.

For Set B specifically, the depositor's effective overcollateralization buffer is *zero* — at-par means no cushion. The trust stack collapses to: Pool Delegate's policy + collateral-asset issuer's solvency + Maple's custodial framework + the lender's call right (which is a 72h-to-default mechanism, not an instant liquidation).

### Cross-pool concentration with sibling syrupUSDT pool (verified 2026-05-02)

syrupUSDC is part of a "Syrup family" with sibling pool **syrupUSDT** (`0x356b8d89c1e1239cbbb9de4815c39a1474d5ba7d`, $441M total assets, 12 active loans / $422M principal). Both pools run under the same Maple Labs legal entity, the same MapleGlobals governance contract (governor / ops Safe / security Safe), and the same Pool Delegate firm — though with different operational EOAs per pool (`0xC1e1...49f` for syrupUSDC vs `0x93aA...501A` for syrupUSDT).

**Cross-pool borrower overlap is significant.** Three borrowers carry positions in BOTH pools:

| Borrower | syrupUSDC exposure | syrupUSDT exposure | Combined | % of family |
|---|---|---|---|---|
| `0x1fcc47ee...` | $267.7M (PYUSD + USTB) | $29.5M (PYUSD) | **$297.2M** | **18.4%** |
| `0x8669f3...f1e9` | $181.9M (XRP + BTC) | $62.1M (XRP) | **$244.0M** | **15.1%** |
| `0xb62446...d505` | $67.6M (BTC) | $62.0M (BTC) | **$129.6M** | **8.0%** |
| `0x2570fa...c8a0` | $36.5M (USDC at-par) | $12.2M (USDC + USDT at-par) | $48.7M | 3.0% |

**Top three cross-pool borrowers control ~42% of the combined family book ($1.61B).** A credit event at any of these entities damages BOTH pools simultaneously. **An allocator holding syrupUSDC AND syrupUSDT is NOT diversified at the borrower level** for these positions — a structural fact invisible from either pool's standalone view but material for combined sizing decisions.

The single largest cross-pool exposure (`0x1fcc47ee...` at 18.4% of family) is materially above standard institutional credit framework limits, where single-counterparty exposure typically caps at 10%. The next two cross-pool borrowers add another 23pp of family concentration to that.

Note also that **Maple's own `syrupGlobals.loansValue` field returns $1,267M, which doesn't reconcile to the per-pool sum of $1,614M** — Maple-side data inconsistency. Family-aggregate analysis should compute from per-pool data, not trust the global field. (Documented further in §VIII Methodology.)

### Loans currently below initial collateral level (verified 2026-05-01)

5 BTC-collateralized loans (~$82M / ~8% of book) are running below their funding-time required collateral level. The on-chain status flags read "healthy" because the contract doesn't auto-trigger when current collateral drops below init — that's a delegate-discretionary call. Notable cases:

| Loan size | Asset | Init level | Current level | Buffer | Notes |
|---|---|---|---|---|---|
| $37.6M | BTC | 125% | 102.3% | −22.7pp | **Tightest position** — only 2.3pp above par; a ~2.5% BTC drop from this level puts the loan underwater |
| $30.0M | BTC | 125% | 120.0% | −5.0pp | Marginal underperformance |
| $7.2M | BTC | 333% | 314.5% | −18.8pp | Buffer still very large despite drift |
| $5.0M | BTC | 200% | 189.3% | −10.7pp | Marginal underperformance |
| $2.0M | BTC | 200% | 191.5% | −8.5pp | Marginal underperformance |

**These loans are out of compliance with their funding-time terms but the delegate has discretion not to call.** Acceptable pattern in normal markets (delegate is making a credit-management judgment about each borrower's ability to top up); becomes a concern if the count rises or if the tightest position gets meaningfully tighter. The dashboard surfaces this as a live signal under "Loans below init level" in the Loan Book Health panel.

### GraphQL data anomaly (verified 2026-05-01 → 2026-05-02)

Maple's GraphQL exposes per-loan `currentAssetAmount` for verification. **The field is broken for 4 specific loans:**

- **USTB ($105M, Superstate):** GraphQL returns `currentAssetAmount = 0` (would imply 100% loss; clearly wrong)
- **USDC at-par × 3 ($20M / $15M / $1M):** GraphQL returns `sub-$50` raw values for all three
- **PYUSD ($152.7M):** Returns correctly

The `openTermLoan(id:)` single-loan query returns `null` entirely for the broken loans; data only comes through the listing query and is wrong there. Maple-side index gap, not a parsing bug in PegTracker's analyzer.

**Correlated quality issue in `aumTimeSeries` (verified 2026-05-02):** the same root cause appears to affect Maple's pool-level `poolV2.aumTimeSeries` aggregations. Pulling 30 daily points showed a 3-week window (April 2–19) where reported `loansUsd` and `collateralUsd` swung $300–500M day-over-day in patterns that don't match real loan funding/repayment cadence (e.g., +$530M loans overnight on April 6, then −$196M the next day on a $1B book). `unrealizedLosses` remained at 0 throughout this window — meaning the apparent dips to ~59% AUM coverage were *not* real undercollateralization events but rather Maple's aggregation including/excluding the at-par stablecoin/RWA positions inconsistently across days. The dashboard's AUM Coverage chart surfaces this raw — an explicit footnote on the chart notes the data-quality variance and points readers to `unrealizedLosses` (which stayed at 0) as the on-chain credit alarm.

**Institutional implication:** $141M / 14.4% of active book has **attestation-only** verification of current collateral state via Maple's API. We can see the loans exist, their borrowers, and their required initial collateral level — but we cannot independently verify what's currently posted, and the pool-level historical coverage series carries enough day-to-day noise that institutional readers should treat AUM-CR fluctuations >10pp as data-quality variance rather than real composition shifts unless cross-validated against `unrealizedLosses` and per-loan status flags. The PYUSD position remains the only Set B exposure with full GraphQL verifiability.

### Loss waterfall

**Critical finding (verified on-chain 2026-04-26):** **No Pool Delegate first-loss capital is required.** `Globals.minCoverAmount[PoolManager] = 0`, and the PoolDelegateCover contract (`0x9e62...AfF5`) holds zero USDC.

This is materially different from Maple v1, where Pool Delegates were required to post MPL tokens as a first-loss bond. Under the current Syrup configuration, the loss waterfall depends on which collateral set the defaulting loan is in:

**Set A (crypto-overcollateralized):**
1. Borrower default triggers Pool Delegate's call (24h notice + 48h grace before contractual default)
2. Off-chain custodian liquidates the BTC/XRP/etc. collateral per delegate instructions
3. Liquidation proceeds applied to outstanding principal + interest
4. If liquidation produces a shortfall (collateral fell faster than liquidation cleared), the shortfall hits `unrealizedLosses` on the LoanManager → reduces NAV pro-rata for all syrupUSDC holders

**Set B (at-par stablecoin/RWA):**
1. Borrower default OR collateral asset depeg/issuer event triggers Pool Delegate's call
2. Off-chain custodian seizes the PYUSD/USTB/USDC collateral
3. If collateral asset is liquid at par: full recovery, no NAV impact
4. If collateral asset has depegged or is stuck (USTB redemption queue, Paxos freeze, etc.): partial recovery, shortfall hits `unrealizedLosses` → NAV reduction

5. *(Historical Maple v1: pool delegate's MPL bond would absorb losses in a junior tranche before depositors)*
6. *(Currently: no junior tranche)*

**Institutional implication:** Depositors are the first-loss class. The delegate firm's financial alignment with depositors is purely reputational + equity in Maple Labs (if any) + future fee income — not on-chain capital at risk. This is a structural change worth flagging in any institutional sizing memo.

**Whether Maple Labs holds protocol-level cover elsewhere** (e.g., as a shared insurance fund denominated in MPL/SYRUP at the Globals layer) is TBD verify via off-chain Maple disclosures. The on-chain pool-level cover slot is empty.

### Yield mechanics (organic vs incentive)

#### Revenue source

syrupUSDC yield is sourced from **interest on institutional loans** — a mix of crypto-overcollateralized (Set A) and at-par stablecoin/RWA-collateralized (Set B) positions. Rates vary materially by collateral type and borrower:

- **At-par stablecoin/RWA loans (Set B):** Rates are lower — the largest position, $152.7M PYUSD-collateralized, pays just 3.25%. USDC at-par loans run 5–6%. These are essentially institutional carry trades or stablecoin liquidity facilities.
- **Crypto-overcollateralized loans (Set A):** Rates run higher (5–9%+), reflecting the credit and operational complexity of crypto-collateral management.

Weighted-average rate across the active book is ~5.5%. The pool aggregates loan interest, takes Maple's protocol fee (`platformManagementFeeRate` per Globals; verify) plus the Pool Delegate's 3.33% management fee, and distributes the remainder to syrupUSDC holders as NAV accrual.

This is **organic yield** — derived from real borrower interest payments, not from emissions, recursive leverage, or external incentive subsidies at the underlying-yield layer.

#### APY profile

| Component | APY (live, May 2026) | Notes |
|---|---|---|
| **`coreApy` (organic loan interest)** | **~4.7%** | Verified from Maple GraphQL `syrupGlobals.apyTimeSeries` (range:WEEK), 7-day avg through 2026-04-30. Per-loan rates 3-9% across the book; weighted-avg lands ~4.7-5% net of Maple protocol fee and 3.33% delegate fee |
| `apy` (blended) | ~4.7% | = `coreApy + boostApy`; `boostApy = 0` (no programmatic incentive overlay since Feb 18, 2026 — see historical note below) |
| 3-mo T-bill reference (live) | ~3.7–4.0% | US Treasury fiscal data, avg outstanding T-bill rate 3.70% as of 2026-03-31. **syrupUSDC at 4.78% sits ~70–100 bp above the T-bill benchmark** — appropriate spread for institutional credit risk. |
| Comparable onchain USD yields | ~3.5–4.5% | Aave V3 USDC supply, Morpho USDC vaults, comparable lending markets (May 2026). syrupUSDC at ~4.7% is competitive with or above this set, with a structural advantage: it's accepted as collateral on Morpho / Euler, so the yield can be levered via collateralized borrowing. |
| Comparable tokenized T-bills (net) | ~3.5–4.0% | BUIDL, USTB, USYC after management fees. syrupUSDC's spread above this set reflects the credit-risk premium of institutional lending vs sovereign exposure. |

**Historical note — Drips / Seasons incentive program (2024 → Feb 18, 2026):** During 2024 and early 2026, syrupUSDC holders received programmatic SYRUP token rewards via Maple's "Drips / Syrup Seasons" campaign that pushed headline APY to ~16-20%. The final claim window for Season 12 (the last season) closed February 18, 2026; no further Drips accrue. Merkl-distributed partner rewards exist for specific deployments but those belong to the partner integration, not to syrupUSDC itself. Today's headline APY equals base APY (`coreApy`); the historical "16-20% headline" framing common in 2024–early 2026 retail materials is no longer applicable. Sizing decisions made under that framing need to be evaluated against the credit-quality-vs-benchmark thesis currently in effect.

The on-chain data feed for live yield is `syrupGlobals.apyTimeSeries(range:WEEK)` from Maple's GraphQL. Both `coreApy` and `boostApy` are 30-decimal-scaled fields; analyzer reads pull both and surface them separately. Yield volatility is lower than typical DeFi yield-bearing assets — the underlying is institutional lending at relatively stable rates, not algorithmic borrow markets. Rate movements track institutional credit demand and fed-rate proxies more than crypto market dynamics.

### v1 incident history (decision-relevant context)

Maple v1 (2021–2022) operated under an **undercollateralized** lending model. The 2022 credit cycle produced two major losses:
- **Orthogonal Trading default:** ~$36M (December 2022)
- **M11 Credit / Babel Finance:** additional losses
- **Total LP impact:** $50M+

These were credit-risk failures, not smart-contract exploits — borrowers defaulted during a systemic event. Maple's contracts functioned as designed; the issue was inadequate credit underwriting in an undercollateralized framework.

The Syrup product line is Maple's structural response: overcollateralized only, vetted Pool Delegates, active margin calls. The team published transparent post-mortems and rebuilt v2 with explicitly different risk parameters. **Institutional memory of v1 losses remains a legitimate concern about historical risk-management judgment under the same legal entity, even though the product model has fundamentally changed.** Operational/governance implications covered in §IV.

### Delegate behavioral signals (positive)

While the Pool Delegate's discretionary authority is the binding risk surface, the on-chain record of recent operational decisions provides some reassurance about *how* that discretion is being exercised:

- **Aave wind-down (March 19 + April 2, 2026):** Strategy 2 (MapleAaveStrategy) was historically deployed at $26-42M scale; the delegate actively unwound this exposure in March-April 2026 — verified via on-chain `aEthUSDC` and USDC asset transfers. Both wind-down events precede the rsETH/Kelp DAO incident of mid-April, suggesting deliberate de-risking from Aave V3 driven by general DeFi-counterparty caution rather than a reactive response to a specific incident. This is the kind of pre-emptive risk management institutional readers should expect from a credit-judgment delegate but cannot always observe.
- **Strategy 3 (MapleSkyStrategy) never funded:** The Sky integration was set up as a future option but has not had material USDC routed through it. Dormant strategy slots maintained at 10-wei placeholder rather than active deployment.
- **No yield-chasing behavior observed** at the secondary-strategy level over the verified period — capital remains in primary credit (Strategy 0 OpenTermLoanManager) or as free pool USDC for redemptions, not optimized for marginal DeFi yield.

**Caveat:** these are observations of past delegate behavior, not constraints on future behavior. The on-chain authority to redeploy into Aave / Sky / future strategies remains; the dashboard's strategy AUM table is the live monitoring surface for any change.

**Credit Risk Score: 6.0/10** — Two-bucket pool composition: $914M Loans (third-party institutional credit, BTC/XRP/cbBTC/HYPE collateral at 125–333% init level) + $304M Liquidity (pool-owned PYUSD/USTB/AMM strategies at par), measured against zero unrealized losses across the entire ~3-year Syrup product line. Maple's headline Pool Collateral Ratio of 165.5% is computed Loans-only (the live dashboard surfaces this as the headline metric); on a combined basis (Loans + Liquidity) the weighted-avg init level is ~152% because Liquidity at 100% drags the average down. Real organic yield from institutional borrowers (~3–9% base on Loans, weighted ~5.4%). Bumped from prior 5.5 to 6.0 — the Pool Delegate discretion concern was leaking into the Credit score and is now properly weighted in Operational, leaving Credit to reflect the actual loan-book quality + Liquidity-layer issuer mix. Deductions for: $0 first-loss cover required by protocol (depositors directly absorb losses, v1-era MPL-bond model dropped for Syrup); **no on-chain collateral data** (collateral held off-chain, contract-level overcollateralization is a policy claim not an invariant); **Liquidity-layer issuer exposure** to Paxos (PYUSD)/Superstate (USTB)/Circle/Tether — issuer quality overall decent but USTB is a NAV-accruing security worth flagging (named axis), USDT named for disclosure-rigor gap; **GraphQL data anomaly** affecting current-state verification for $141M of Liquidity positions (root cause documented; on-chain custody balances confirm magnitudes match Maple UI); **5 active loans (~$82M) currently below funding-time required collateral level** with delegate discretion not yet exercised; borrower identity non-public; credit-judgment is delegate-discretionary; Maple Labs v1 bad-debt history is documented context (§IV) but small score weight given the v2 clean ~3-year record; no protocol-level insurance attestation publicly verified.

---

## III. Liquidity & Redemption — 7.5/10

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
| 25% correlated outflow ($268M) | Deeply insufficient | **Weeks**, function of loan termination + collateral liquidation throughput | Forced delegate-side calls of open-term loans (24h notice + 48h grace before default per loan) |
| 50%+ correlated outflow | Deeply insufficient | **Indeterminate** — collateral DEX depth becomes binding | Collateral liquidation paths thin during stress; queue extends until borrowers repay or collateral clears |

**Monitoring leading indicators (PegTracker live):**
- `peg.premium_discount_pct` widening beyond ~50 bps → instant-liquidity buffer depleting
- `liquidity.quotes.{1000,10000,50000,100000}.slippage_bps` increasing materially across the standard tiers → aggregator routing depth deteriorating

### Redemption liquidity risk

**Normal markets:** Aggregator routing handles retail-to-low-institutional sizes (≤$100K) at ~12 bps slippage with sub-minute settlement. The "instant liquidity is broken because pool TVL is only 1%" concern doesn't bind in base-case markets — aggregators route across more venues than Maple's original Uniswap+Balancer launch pools.

**Correlated-outflow stress:** Binding constraint reverts to underlying pool depth (free USDC + loan repayment cadence), not aggregator efficiency. Late exits face the queue; queue speed depends on free USDC vs outstanding loan principal — when the pool is heavily deployed (deployment ratio has been observed at 80–98% across the past month), queue extends until loan repayments or delegate-initiated calls free USDC. In a severe stress event (correlated borrower distress + DEX slippage widening + queue lengthening), exit timeline could extend from sub-minute (steady state) to weeks.

**Liquidity & Redemption Score: 7.5/10** — Empirically excellent base-case exit liquidity (~12 bps slippage to $100K via DEX aggregator routing) AND **permissionless mint/redeem at the vault layer** (no KYC gating, anyone retail or institutional can deposit USDC at NAV and submit redemption requests at NAV) — a meaningful institutional-accessibility advantage over KYC-gated RWA peers (thBILL T+4, $1M institutional-only primary). Both primary paths (queue + DEX secondary) are permissionless. Queue currently empty with zero current redemption pressure. Multi-chain via CCIP+CCT (5 chains). Bumped from prior 6.5 to fold in the permissionless mint/redeem advantage explicitly — this access pattern was under-priced in the prior framework. Deductions for: deployment ratio operates in the 80–98% range with free USDC buffer fluctuating from <2% to ~18% of supply across deposit/deployment cycles; stress-case exit is loan-repayment-bound whenever the buffer is compressed; "instant liquidity" pool TVL is only ~1% of supply (binding during stress even though aggregator routing covers base case); DEX depth on non-Ethereum venues thinner.

---

## IV. Operational & Governance — 7.0/10

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
- **Aave V3** — Strategy 2 (MapleAaveStrategy) was historically deployed at $26-42M scale; wound down to 10-wei placeholder during March-April 2026. Currently dormant. Reactivation by the Pool Delegate (no timelock required) would re-introduce Aave V3 counterparty risk on the deployed portion.
- **Sky Protocol (Maker)** — Strategy 3 (MapleSkyStrategy, newly identified) routes USDC → USDS → sUSDS for DSR-equivalent yield. Currently 10-wei placeholder; no material funding history. Reactivation would introduce Sky governance, USDS peg, and PSM-mechanics dependencies.

### TVL Trajectory

- **September 2025:** Crossed $1B Ethereum pool TVL (per Maple's published figures)
- **April 2026:** ~$1.07B Ethereum pool, with cross-chain expansion to Solana, Arbitrum, Base, Plasma during 2025–2026
- **Aave–Maple partnership (2026-01):** syrupUSDC onboarded to Aave V3 on Base shortly after Base deployment; expanded use as DeFi collateral

[VERIFY: Current cross-chain TVL distribution; retention since Drips/Seasons program ended Feb 2026]

**Operational & Governance Score: 7.0/10** — 24h Timelock on protocol upgrades is well above peer baseline, multisig role separation between Operational Admin (3-of-5) and Security Admin (3-of-6) with non-overlapping signer sets is real institutional hygiene, doxxed Cayman Labs entity with sustained operations across v1 → v2 transition, strong external partner integrations (Chainlink CCIP, Aave V3 listings). **Custody primitive (per Maple's response 2026-05-04)**: all 5 EOA-shaped addresses (2 Pool Delegate + 3 Liquidity custody) are MPC wallets under Maple Labs operational control with strict transaction policies — institutional-grade custody (peer to Coinbase Prime / Fireblocks). Bumped from prior 6.0 to 7.0 reflecting (i) the MPC + policy attestation reducing single-key custody concern materially, (ii) cleaner separation: Pool Delegate discretion now properly weighted here rather than leaking into Credit. Deductions remain for: consolidated Maple operational control (a firm-level event affects all $2.18B family capital simultaneously); MPC + policy claim is off-chain attestation, not on-chain-verifiable; Pool Delegate firm identity not transparently disclosed in public materials; multisig signer-to-firm attribution not publicly verified; Timelock proposer set not directly readable via standard calls; v1 bad-debt history under same legal entity (small weight); no bankruptcy remoteness; dependency on Chainlink CCIP governance for cross-chain integrity; ~3-year Syrup-product Lindy unproven through a multi-cycle bear market.

---

## V. Overall Risk Score — 6.75/10

Weighted composite over four primary axes (Supply Integrity reported as separate callout):

| Axis | Score | Weight | Contribution |
|---|---|---|---|
| Smart Contract | 7.0 | 0.25 | 1.75 |
| Credit & Counterparty | 6.0 | 0.35 | 2.10 |
| Liquidity & Redemption | 7.5 | 0.20 | 1.50 |
| Operational & Governance | 7.0 | 0.20 | 1.40 |
| **Composite** | **6.75** | 1.0 | **6.75** |
| *Supply Integrity (callout)* | *6.5* | — | *— (not in composite)* |

**Why these weights:** Credit gets the heaviest weight (0.35) because it is the binding axis for a discretionary-credit lending vault — both the credit-judgment quality and the loss waterfall sit here, and there is no on-chain first-loss buffer to absorb credit failures. Smart Contract gets a meaningful but smaller weight (0.25) because the audit profile is strong and the architecture is well-established, so contract risk is bounded. Liquidity (0.20) and Operational (0.20) are the equal-weighted secondary axes — both matter for sizing decisions, neither is the dominant constraint in a base-case scenario. Supply Integrity sits as a callout rather than a composite component — it's the cross-chain bridge dimension that doesn't fit cleanly into the four primary axes for a credit-focused product.

**Score interpretation:** **Moderate-to-low institutional risk** — among the higher-quality assets in our coverage. Suitable for retail and institutional sizing in normal markets via aggregator-route exit OR permissionless primary mint/redeem at NAV. Headline APY today equals `coreApy` (~4.7%, organic loan interest) — the durable return is the base-yield credit-quality-vs-benchmark thesis. Larger positions, or any institutional sizer expecting to exit during stress, should price queue latency and the discretionary-credit-judgment layer (with zero on-chain first-loss cover) into entry decisions.

**What changed in this scoring update (2026-05-04):** prior framework was 6.2/10. Bumped to 6.75/10 reflecting (i) Maple's MPC + policy custody attestation correctly contained in Operational rather than triggering single-key custody discount in Credit, (ii) explicit reweighting of Credit to reflect actual loan-book quality (165% Loans CR + Liquidity-layer issuer mix) without leaking Pool Delegate concerns, (iii) fold of permissionless mint/redeem advantage into Liquidity & Redemption — this access pattern materially differentiates syrupUSDC from KYC-gated peers (thBILL T+4) and matters for both retail and institutional users who want to enter/exit at NAV without slippage. Net: same underlying asset, better-calibrated framework.

---

## VI. Key Recommendations

1. **For sizing decisions, use empirical aggregator-route slippage — not strict pool TVL.** PegTracker's 2026-04-25 probe shows ~12 bps flat slippage at $1K–$100K via KyberSwap routing. The headline "$10M / ~1% of supply" pool-TVL view is overly conservative for normal markets. *However*, this only describes base-case exit — in correlated-outflow stress, depth shrinks to underlying pool TVL + loan-repayment cadence (see §III stress quantification table).

2. **Monitor PegTracker fields as leading stress indicators.** Set alerts on:
   - `peg.premium_discount_pct` > 50 bps → instant-liquidity buffer depleting
   - `liquidity.quotes.<notional>.slippage_bps` materially rising across standard tiers ($1K/$10K/$50K/$100K) → aggregator routing depth deteriorating
   - WithdrawalManager queue length growing (currently empty as of 2026-04-26)

3. **Evaluate sizing on credit-quality-vs-benchmark, not historical headline APY.** Plain syrupUSDC holding pays ~4.7% organic (`coreApy`) — currently below the 3-month USD benchmark on most days. The historical "16-20% headline APY" framing from the Drips/Seasons era (2024–Feb 2026, now ended) is no longer applicable. Holders deploying syrupUSDC into Merkl-eligible partner integrations (`app.merkl.xyz/?search=syrup`) can capture additional partner-distributed rewards, but those belong to the partner integration's risk surface, not to syrupUSDC itself.

4. **Verify Pool Delegate firm identity before institutional sizing.** The on-chain PoolDelegate EOA is `0xC1e1...49f`; the operational firm behind it is not publicly attested in Maple's user-facing documentation as of 2026-04-26. Confirm via Maple IR or `app.maple.finance/v2/lend/pools/eth-syrupusdc` directly.

5. **Treat zero-on-chain-first-loss-cover as a structural risk feature.** Maple v1's MPL-bond model has been dropped for Syrup; depositors are first-loss. Institutional risk frameworks that rely on "delegate has skin in the game" should verify whether Maple Labs holds protocol-level cover at the Globals layer (off-chain disclosure) or whether the only delegate alignment is reputational.

6. **Per-chain due diligence for non-Ethereum deployments.** Cross-chain via Chainlink CCIP/CCT — burn-and-mint native deployments. Materially different attack class from LayerZero OFT exploits (rsETH/Drift/Volo). Still warrants per-chain checks: verify CCT pool addresses on Chainlink's CCIP directory, check per-chain rate limits, verify pool depth on each chain (non-Ethereum venues have shallower secondary liquidity).

7. **Monitor Governor Timelock `ScheduledOperation` events** as a leading indicator of upgrade activity. The 24h delay provides an exit window if a malicious or contentious upgrade is scheduled.

8. **Treat zero-losses-to-date as a feature, not a guarantee.** Syrup product has clean credit performance over ~21 months but has not been stress-tested through a multi-cycle bear market under the v2 model. Credit-cycle-correlation tail risk is real.

9. **Compare wrapper-layer track record with Maple Labs entity track record.** v1 bad debt happened under the same legal/operational entity. Decide explicitly whether your framework treats the entity or the product as the relevant unit.

10. **Treat the Liquidity layer as a distinct risk axis from third-party credit.** ~21% of family AUM ($304M syrupUSDC + $43M syrupUSDT) is pool-owned positions in stablecoin/RWA/AMM yield strategies — NOT third-party credit. Risk axis: issuer (Paxos for PYUSD, Superstate for USTB, Circle/Tether for AMM), RWA wrapper (USTB), AMM venue (Solana + Ethereum DEX pools). A PYUSD depeg, a USTB regulatory action, or an AMM venue compromise impairs Liquidity without any change to the Loan book and vice versa. **The dashboard's Liquidity Layer panel surfaces this distinctly**: per-position rows with custody addresses, EOA badges, and issuer labels. Loan Book panel separately shows third-party-credit health (loans-only pool CR 165.5%, buffer health, tightest loan).

11. **Monitor "loans below init level" as a delegate-discretion signal.** As of 2026-05-01, 5 active loans (~$82M, ~8% of book) are running below their funding-time required collateral level — the largest is a $37.6M BTC loan at 102.3% vs 125% required. The on-chain status flags read healthy because the contract doesn't auto-trigger; the delegate has the right to call but has not. Rising count or tightening of the worst position is the early-warning signal that delegate-side credit management is being passively rather than actively exercised.

12. **Treat $141M of Liquidity-layer positions as data-anomaly-affected in Maple's GraphQL** but cross-validated on-chain. Maple's `currentAssetAmount` field returns broken values for the USTB position and three USDC at-par positions. For USTB: on-chain balance check at custody address `0x1FcC47Ee0F19...` confirms 10.39M USTB tokens × ~$10.10 NAV = ~$104.9M (matches Maple UI's $115M Liquidity row). For USDC at-par positions: capital is in DEX AMM LP venues (Solana + Ethereum), not in raw custody — verified $20M Solana custody + $15M Ethereum custody match Maple UI's USDC/syrupUSDC LP rows. PYUSD ($152.7M) returns correctly via both GraphQL and on-chain at custody `0xe7F0...657b`. So while GraphQL's `currentAssetAmount` is unreliable for these positions, the underlying balance state is verifiable through Maple's UI + on-chain custody reads.

13. **Surface the centralized-Maple-controlled custody topology before institutional sizing.** Five EOA-shaped addresses control ~$2.18B of family capital — 2 Pool Delegate addresses (loan-funding authority) + 3 Liquidity-layer custody addresses ($335M direct asset custody / AMM operations). Per Maple's response 2026-05-04, all five are **MPC wallets with strict policy controls** (modern institutional treasury custody primitive, peer to Coinbase Prime / Fireblocks / Copper / Anchorage). The MPC + policy claim is off-chain attestation, not on-chain-verifiable — `eth_getCode == 0x` rules out smart-contract multi-sigs but cannot distinguish MPC from single-key. The binding axis is consolidated Maple-internal operational control, largely already priced via Pool Delegate discretion + Maple Labs entity risk. Questions for Maple before sizing: MPC provider, threshold structure, policy whitelist, insurance, audit scope of off-chain MPC setup.

13. **For combined Syrup-family sizing, account for cross-pool borrower concentration explicitly.** syrupUSDC + syrupUSDT share borrowers: the top three cross-pool borrowers carry ~42% of the combined family book ($1.61B). The single largest (`0x1fcc47ee...`) is 18.4% of family exposure across both pools, materially above standard 10% institutional credit limits. Holding both syrupUSDC and syrupUSDT does NOT diversify credit risk for these specific borrowers — it concentrates it. Anyone sizing across both pools should compute combined exposure to each borrower individually rather than treating the two pools as independent products.

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

syrupUSDC is one of the better-designed institutional yield-bearing stablecoins available to retail: real organic yield from a mixed institutional loan book, strong audit profile (Spearbit + Trail of Bits + 6 others), $1M+ Immunefi bounty, and a 24h-timelock-gated upgrade path with multisig role separation between operational and security admin functions. The Syrup product line's clean credit record over ~21 months and $1B+ scale per pool is meaningful evidence of a working risk-management framework.

**The architectural framing verified 2026-05-04 against Maple's own AUM Details page:** the pool's $1.22B TVL is composed of **$914M Loans (third-party institutional credit, BTC/XRP/cbBTC/HYPE collateral at 125–333% — "overcollateralized at all times" applies here)** plus **$304M Liquidity (pool-owned positions in PYUSD/USTB/AMM yield strategies, intentionally at par with the underlying asset, NOT third-party credit)**. The earlier "Set A overcollateralized + Set B at-par loans" framing collapsed both into a single mixed-collateral loan book — that framing was incorrect; the at-par positions aren't loans at all. Loans's binding stress is crypto-cycle volatility on the collateral; Liquidity's binding stress is the issuer/peg/AMM-venue event. Different stress scenarios bind the two buckets differently.

The 6.75/10 score reflects seven persistent concerns: (a) the **Pool Delegate model adds discretionary credit risk** beyond what a purely algorithmic protocol carries, with the operator role MPC-controlled but Maple-internal — credit underwriting is the binding axis for this product (35% of the composite weight); (b) **consolidated Maple operational control of all custody** — 5 EOA-shaped addresses control $2.18B family capital. Per Maple 2026-05-04 these are MPC wallets + strict policy controls (institutional-grade primitive); on-chain reads cannot independently verify MPC vs single-key, so framing rests on Maple's attestation; binding axis is centralization under Maple Labs operations, largely already priced via concerns (a) and (g); (c) **no on-chain first-loss cover absorbs losses before depositors** — depositors are first-loss; (d) the **deployment ratio creates a structural stress-case redemption gap** — base-case aggregator-route exit is empirically ~12 bps to $100K, stress-case exit is queue-bound with loan-repayment-cadence-dependent clearing time; (e) **Liquidity layer's exposure to specific named issuers** (Paxos/Superstate/Circle/Tether — issuer quality is overall decent but USTB is a NAV-accruing security worth flagging as a security not a stablecoin, USDT named for disclosure-rigor gap); (f) **cross-pool borrower concentration with sibling syrupUSDT pool** — top three cross-pool borrowers control ~48.8% of the family loan book; the largest single carries ~19.3% of family loan exposure, materially above standard institutional credit limits; (g) **Maple Labs' v1 bad-debt history** is documented context (§IV) — same legal entity as Syrup, but v2 is a structurally different product with a clean ~3-year record. Small score weight, not a leading risk factor.

For sizing: plain syrupUSDC holding pays ~4.7% organic (`coreApy`) — *below* the 3-month USD benchmark on most days. The product is an institutional credit yield product priced near or below T-bills, evaluated on the credit-quality-vs-benchmark axis with the structural complexities described above (Pool Delegate discretion, consolidated Maple-controlled custody, two-bucket Loans/Liquidity composition, dormant DeFi sleeves, GraphQL data anomalies on Liquidity-layer positions). The historical Drips/Seasons incentive layer that pushed 2024–early 2026 headline APY to 16-20% ended Feb 18, 2026 and is no longer applicable. Larger positions, or any institutional sizer expecting to exit during stress, should price queue latency into entry decisions, verify Pool Delegate firm identity before sizing, verify per-chain CCT bridge surface for any non-Ethereum allocation, AND review the custody topology (Trust Stack panel on the live dashboard) — five MPC-controlled addresses under Maple's operational control hold $2.18B family-wide.

**Live dashboard:** [todayindefi.github.io/backing-monitor/?asset=syrupusdc](https://todayindefi.github.io/backing-monitor/?asset=syrupusdc) — refreshed hourly from on-chain reads + Maple GraphQL. Headline metric above the fold is **Pool Collateral Ratio (Loans-only)** (Maple's own headline at 165.5% measured against the loan book only; combined Loans+Liquidity weighted-avg init level is ~152%) with PCR (`(totalAssets − unrealizedLosses) / totalAssets`) demoted to a small status pill ("PCR 100% · no losses recognized"; turns red on any non-zero `unrealizedLosses`). Treat PCR as a binary loss-recognition alarm, not a leading indicator. The dashboard now splits into two distinct sections: **Loan Book** (21 third-party loans, $888M, BTC/XRP-collateralized) and **Liquidity Layer** (7 pool-owned positions, $304M, with custody addresses + EOA badges + issuer labels). Borrower Concentration computed Loans-only basis. **Trust Stack panel** surfaces the full custody-address inventory (5 addresses family-wide controlling $2.18B; per Maple all are MPC + policy controls). Pool Coverage 7d chart at top (window narrowed from 30d to focus on the post-anomaly clean window). Cross-Pool Family panel reconciles concentration with [syrupUSDT](syrupusdt) on a Loans-only basis (top-3 ~48.8% of family loan book; family TVL $1.27B Loans + $347M Liquidity).

---

## VIII. Methodology & Disclosure Limits

This report is based on direct on-chain reads against Ethereum mainnet (RPC: Alchemy + dRPC) on 2026-04-26 → 2026-05-01, plus per-loan enrichment via Maple's public GraphQL endpoint (`api.maple.finance/v2/graphql`), plus published Maple Finance documentation, audit reports, and third-party reporting on the cross-chain CCIP/CCT integration.

**What this report can directly verify:**
- All Ethereum core contract addresses, storage state, and verified topology (§I)
- Multisig threshold and signer composition for Operational Admin and Security Admin Safes
- Governor Timelock MIN_DELAY (24h) and OZ-style role-ID layout
- Pool state (totalAssets, totalSupply, NAV, deployment ratio, free USDC, queue state)
- Strategy contract identification and AUM per strategy
- Loss waterfall configuration (zero pool delegate first-loss cover required and posted)
- **Per-loan basics for all active loans** (borrower address, principal, rate, payment schedule, status flags, dates) — readable from MapleLoan contracts on-chain
- **Per-loan collateral asset and required initial level** (via Maple GraphQL `poolV2.openTermLoans[].collateral`)
- **Per-loan current collateral state for ~85% of the active book** (via the same GraphQL field — broken for the USTB position and three USDC at-par loans, see below)
- **Loan-book aggregates** — Set A vs Set B split, weighted-avg buffer to init level, loans-below-init count, named-issuer rollup

**What this report explicitly cannot directly verify:**
- **Per-chain CCT pool addresses and rate limits** for Solana / Arbitrum / Base / Plasma — Chainlink CCIP directory is SPA-rendered and not extractable via automated fetch. Cross-chain architecture (CCIP + CCT, burn-and-mint) is independently confirmed via published sources but per-chain specifics require direct browse to `docs.chain.link/ccip/directory/mainnet/token/syrupUSDC`. **[Open verification item.]**
- **Pool Delegate firm identity** behind EOA `0xC1e1...49f` — not disclosed in Maple's user-facing public documentation as of 2026-05-01. Verify via Maple IR or the syrupUSDC pool page on `app.maple.finance`. **[Open verification item.]**
- **Borrower firm identity** for individual loans — Maple's `borrowerMeta(ethereumAddress:)` GraphQL endpoint returns `contactName: "N/A"` for the largest borrower. Maintained as a static lookup in the dashboard analyzer.
- **Current collateral state for $141M / 14.4% of active book** — Maple's GraphQL `currentAssetAmount` field is broken for the USTB position ($105M) and three USDC at-par loans (~$36M total). The single-loan `openTermLoan(id:)` query returns `null` entirely for these specific loans. PYUSD ($152.7M) returns correctly. This is a Maple-side data-pipeline gap, not a parsing issue; until Maple fixes it, current-state collateral for these loans is **attestation-only**. **[Open verification item, blocked on Maple-side fix.]**
- **Pool-level AUM history accuracy** — the same Maple-side aggregation issue affects `poolV2.aumTimeSeries` (`loansUsd`, `collateralUsd`). 30-day pulls show day-over-day swings of $300–500M that don't match real funding/repayment cadence on a $1B+ book. The dashboard's AUM Coverage chart surfaces this raw with an explicit data-quality footnote. **For history beyond `unrealizedLosses` and per-loan status, treat day-over-day swings >10pp as data-quality variance unless cross-validated.** **[Open verification item, blocked on Maple-side fix.]**
- **Off-chain delegate firm key-management practices** — the PoolDelegate EOA is single-key on-chain; the operational custody of that key (Fireblocks / Copper / similar institutional MPC vs cold storage vs hot wallet) is not publicly attested.
- **Off-chain custodian arrangements** — borrower collateral is held off-chain. The custodian (which firm holds the BTC/PYUSD/etc.) is not disclosed in any public Maple channel. Counterparty risk on the custody arrangement is a separate failure mode from borrower default.
- **Borrower whitelist enforcement** — whether PoolManager enforces a hard-coded list of acceptable borrower addresses. **[Open verification item — cast-readable on PoolManager.]**
- **Maple Labs protocol-level cover** — whether the protocol holds shared insurance / reserve capital at the Globals layer (off-chain disclosure required).
- **Governor Timelock proposer set** — `hasRole()` calls revert against the custom Timelock variant. Resolve via Etherscan AccessControl event logs.
- **Per-Strategy audit attestation** — the four strategy contracts may post-date some of the audit work; per-contract verification recommended before treating individual strategies as audited.
- **Comparison vs peers** — deferred from this v1 report due to limited current peer set in syrupUSDC's specific category (mixed crypto-overcollateralized + at-par stablecoin/RWA institutional credit lending vault). Worth adding when the peer set grows (Centrifuge, future Sky/Maker delegated-credit products, etc.).

**Reading the open verification items:** None of the open items are blockers for the headline assessment. The verified on-chain findings (24h timelock, zero first-loss cover, high deployment ratio (recently 80–98% range), multisig topology, primary LoanManager AUM and clean book) are the load-bearing facts for the 6.75/10 score. The open items refine specific section depth (cross-chain table, delegate roster, loan-book composition) but do not change the structural read.

---

## IX. Sources

**Direct on-chain verification (Ethereum mainnet):**
- Pool, PoolManager, WithdrawalManager, PoolDelegate, MapleGlobals, all 4 Strategies — verified via `cast call` against Alchemy RPC on 2026-04-26 → 2026-05-01
- Governance Safes (Operational Admin, Security Admin) — verified via `getThreshold()` and `getOwners()` calls
- Timelock — verified via `MIN_DELAY()` and standard role-ID constants
- Strategy 0 OpenTermLoanManager classification — verified by probing the Loan implementation contract `0xeeadb6...` via Sourcify ABI + live cast reads against the reference $152.7M loan (`0x820eF0...`); the impl exposes `noticePeriod` / `gracePeriod` / `dateCalled` (open-term-only fields) and lacks `principalRequested` / `paymentsRemaining` (fixed-term fields)
- Per-loan enumeration via `InstanceDeployed` events on OpenTermLoanFactory `0x6Fad515F...` — scanned via dRPC in 10k-block chunks
- Raw audit data: `~/riskAnalyst/reports/data/syrupusdc-onchain-audit-2026-04-26.md` (corrected 2026-04-30 for Strategy 0 OpenTerm classification)

**Maple GraphQL verification:**
- Endpoint: `https://api.maple.finance/v2/graphql` (no auth, introspection disabled)
- Per-loan collateral data via `poolV2.openTermLoans[].collateral` query — verified working for ~85% of the book; broken for USTB + USDC at-par loans (Maple-side data-pipeline gap; details in §VIII)
- Per-loan APY rate validation cross-checked against on-chain `interestRate()` reads
- Borrower metadata via `borrowerMeta(ethereumAddress:)` — `contactName` field returns "N/A" for largest borrower; Maple does not publish identities through this endpoint

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
- [syrupUSDC — Retail Risk Report](/reports/syrupusdc) — companion retail-audience version
- [Live syrupUSDC Risk Dashboard](https://todayindefi.github.io/backing-monitor/?asset=syrupusdc) — refreshed hourly from on-chain reads + Maple GraphQL; surfaces Set A/B mix, buffer-health, named-issuer roster, deployment ratio, exit-liquidity tiers, governance topology
- PegTracker live monitoring data: `data/syrupusdc_backing.json` and `data/syrupusdc_backing_history.json`
