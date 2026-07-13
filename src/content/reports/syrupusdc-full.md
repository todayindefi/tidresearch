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
last_verified: "2026-07-02"
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
    notes: "Permissionless USDC → syrupUSDC deposit on Ethereum canonical pool. No KYC, no allowlist. Standard 4626 share-mint at NAV. Subject to liquidityCap=$2.5B (governance parameter; current utilization well below cap — live headroom on the dashboard)."
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
    notes: "Permissionless redemption submitted to WithdrawalManager (0x1bc4...fE3). Processed at NAV from free pool USDC. Queue state and free-USDC buffer are point-in-time (queue typically empty in steady state) — live on the dashboard."
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

*Live pool backing, peg deviation, and exit-liquidity tiers are on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc).*

> *What's pinned in this report is structural risk — architecture, the issuer menu, the risk axes, and the scores. Current magnitudes (pool split, per-issuer allocation, collateral ratio, concentration, exit tiers) drift weekly and are live on the [dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc). This report is written to stay correct across that drift.*

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
| **Total assets** | ~$1B+ USDC; live TVL on the dashboard |
| **Active loans** | A few dozen; live count + principal on the dashboard |
| **NAV** | Slowly accruing above 1.00 USDC (upward NAV grind from interest); live on the dashboard |
| **Deposit cap** | liquidityCap = $2.5B governance parameter; utilization well below cap — live headroom on the dashboard (see §I.5) |
| **Sibling pool** | syrupUSDT — materially smaller; shared Pool Delegate firm (live size/counts on its dashboard) |

> *Overall score (6.75) is a weighted composite over five axes (Contract / Credit / Liquidity / Operational + Supply Integrity callout) — see §V for category weights.*

---

## Protocol Summary

syrupUSDC is Maple Finance's flagship retail-accessible institutional-credit product: an ERC-4626 vault that takes USDC deposits and deploys them as loans to vetted institutional borrowers (centralized lenders, market makers, trading desks). It launched in August 2024 and has scaled to $1B+ Ethereum-pool TVL, with cross-chain expansion to Solana, Arbitrum, Base, and Plasma via Chainlink CCIP's CCT standard during 2025–2026.

The product sits at the intersection of two risk categories that don't normally combine: **discretionary institutional credit** (Pool Delegate model — humans make the underwriting calls) and **permissionless DeFi rails** (no KYC at the vault layer, ERC-4626 standard, redemption queue + DEX-aggregator dual exit). The Pool Delegate's underwriting judgment is the binding human factor; the active credit-monitoring infrastructure (call right with 24h notice + 48h grace) is the primary on-chain enforcement mechanism. **Collateral itself is held off-chain** by custodians under Pool Delegate policy — this is verified on-chain (the MapleLoan contract has no `collateral()` getter; the call reverts) and via Maple's GraphQL.

The Syrup product runs on Maple's v2 architecture and has reported zero principal losses across ~3 years of operation through May 2026, with on-chain `unrealizedLosses = 0` confirmed at the PoolManager and primary LoanManager layers. The clean record is real, though it covers a single (favorable) credit cycle. (For institutional readers tracking entity track record across product generations: Maple v1's 2022 undercollateralized-lending bad-debt event (~$50M+ LP losses across Orthogonal Trading and M11 Credit / Babel Finance defaults) is documented in §IV; Syrup's overcollateralized-only structure was the explicit response.)

**Pool composition has two structurally distinct components — verified 2026-05-04 against Maple's own AUM Details page** (`app.maple.finance/earn/details`):

- **Loans (~75–80% of pool)**: third-party institutional credit. BTC at 125–333%, XRP at 150%, smaller cbBTC and HYPE positions. This is the "overcollateralized institutional lending" the marketing describes. Maple's headline pool collateral ratio (Loans-only, typically ~150–170%) is computed against the loan book only; live split and CR on the dashboard.
- **Liquidity (~20–25% of pool)**: pool-owned positions in yield-generating strategies. The Pool Delegate rotates this layer across a menu of issuers — Paxos (PYUSD), Superstate (USTB, a NAV-accruing tokenized T-bill), Circle/Tether (USDC/USDT AMM-LP) — and the mix drifts under discretion within days, with no governance gate. Through 2026 the layer rotated substantially out of USTB into PYUSD; **any single issuer can come to dominate the layer** (recently ~90%+ Paxos PYUSD). Current per-issuer allocation is live on the dashboard. Routed through Strategy 0's OpenTermLoanManager as accounting wrapper, but functionally NOT third-party credit — these are pool-owned strategies parked in yield-generating positions while remaining nominally redeemable.

The "overcollateralized at all times" framing in Maple's marketing applies to the Loans bucket. The Liquidity bucket is intentionally at par with the underlying asset — risk axis is **issuer/RWA/AMM, not borrower default**. The earlier "Set A overcollateralized + Set B at-par loans" framing collapsed both into a single mixed-collateral loan book; that framing was incorrect — the at-par positions aren't loans at all, they're Liquidity-layer strategies. Earlier-flagged "Maple data anomaly" of `syrupGlobals.loansValue` not reconciling to the per-pool TVL sum was NOT a Maple bug — it's their Loans-only field, and we were aggregating Loans + Liquidity.

Five findings from the 2026-04-26 → 2026-05-01 verification cycle shape the institutional read:

1. **24h timelock on protocol governance** (`MIN_DELAY = 86400`s on the governor Timelock) — materially stronger than peer products with no upgrade delay.
2. **Zero Pool Delegate first-loss cover required** (`Globals.minCoverAmount[PM] = 0`; PoolDelegateCover balance = 0) — depositors are first-loss; the v1-era MPL-bond model has been dropped for Syrup. No on-chain skin-in-game absorbs losses before depositors.
3. **Pool deployment fluctuates** ~80–98% across deployment cycles — new deposits arrive faster than the delegate redeploys, so the free-USDC buffer swings materially day-to-day (live on the dashboard). Stress-case redemption depth is loan-repayment-bound past the free-USDC buffer.
4. **Loan-buffer health is measured by distance to par (absolute collateralization), not drift off funding-time levels.** A loan can sit below its own init level and still be wildly overcollateralized — "below init" is a near-continuous, almost information-free feature of the book. What matters is how close a Set A loan's *current* collateral level sits to **par (100%)**, where collateral stops covering principal; a loan below 100% is the acute case (the delegate is holding an undercollateralized position by choice). On-chain status flags read "healthy" regardless because the contract doesn't auto-trigger — the binding control is the Pool Delegate's right, but not obligation, to call (24h notice + 48h grace = 72h max default lag). The two signals to monitor — the tightest Set A loan approaching par, and many Set A loans compressing into the par-proximity band together (correlated-drawdown early warning) — are point-in-time figures the dashboard surfaces live.
5. **Per-loan collateral data is partly verifiable, partly attestation-only.** Maple's GraphQL exposes per-loan asset and required level for all loans, but `currentAssetAmount` periodically returns anomalous values for a subset of at-par Liquidity positions (historically the USTB and certain at-par USDC positions). On-chain custody-balance reads cross-validate the magnitudes, so the affected positions remain verifiable even when GraphQL is not. Which positions are affected drifts with composition.

Overall profile: strong audit posture (Spearbit + Trail of Bits + 6 others, $1M+ Immunefi bounty), clean v2 contract architecture with explicit timelock-gated upgrade path, real organic yield, and empirically excellent base-case exit liquidity via DEX aggregator routing — offset by Pool Delegate discretion as the binding credit-judgment layer, consolidated Maple operational control of all custody (5 EOA-shaped addresses control the family's entire capital base — per Maple's response 2026-05-04 these are MPC wallets + strict policy controls, an institutional-grade primitive but on-chain unverifiable), the absence of on-chain delegate first-loss capital, and the gap between base-case aggregator-route exit (good) and stress-case pool-depth-bound exit (queue-bound). Maple Labs' v1 bad-debt history is documented in §IV for institutional-frame readers but carries small score weight given the clean ~3-year v2 record.

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
| Strategy 0 (primary LoanManager) | `0x6ACEb4cAbA81Fa6a8065059f3A944fb066A10fAc` | **OpenTermLoanManager** — ~80–97% of pool TVL across the period (verified 2026-04-30 by probing the Loan impl `0xeeadb6...` ABI, which exposes open-term-only fields like `noticePeriod`, `gracePeriod`, `dateCalled`). Earlier audit labeled this FixedTerm; corrected. |
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
- **Controls:** `liquidityCap` = $2.5B (governance parameter; current utilization well below cap — live on the dashboard; see "Liquidity cap mechanics" below); Security Admin pause capability
- **Asymmetry:** Symmetric — depositor receives shares worth their USDC at NAV

#### Liquidity cap mechanics

`liquidityCap` is a `PoolManager` parameter (governance-controlled, 24h timelock to change) that caps total pool deposits at a dollar maximum. Once TVL hits the cap, new deposits are rejected at the contract layer. Three operational reasons Maple uses one:

1. **Discretionary credit capacity management.** The Pool Delegate (Maven 11) can only originate so much credit to vetted institutional borrowers per unit time. If deposits flood in faster than borrower onboarding, the pool's free-USDC ratio rises and dilutes yield. The cap is a brake on inflows that would outpace credit demand.
2. **Risk-based scaling.** Keeping pool size within what the delegate can responsibly underwrite + monitor. A delegate operating at $1B+ has different bandwidth than at $5B.
3. **Protocol-level circuit breaker.** Provides a non-contract-upgrade lever to slow or stop new inflows under stress (counterparty incident, regulatory action, etc.), separate from the Security Admin pause path.

**For institutional sizing**: at current utilization (well below cap) the cap isn't a binding constraint — large deposits route through cleanly. Worth tracking as a leading indicator: utilization climbing past ~80% suggests either an upcoming cap raise (capacity expansion signal) or rejection of new deposits (which would push secondary-market price above NAV as primary entry becomes constrained). Cap reductions, while rare, would signal active de-risking and warrant scrutiny. Confirm `setLiquidityCap` authority lies with governor (24h timelock) before institutional sizing.

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
- **Asymmetry:** *Stress-case asymmetry covered in §III — Liquidity & Redemption.* Queue empty in steady state (live queue state on the dashboard).

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

**The binding risk axis for syrupUSDC.** Credit underwriting is delegate-discretionary; smart contracts handle loan accounting and time-based default triggering, NOT credit quality. **Collateral is held off-chain** — the MapleLoan contract has no `collateral()` getter (verified 2026-04-30 — the call reverts on the live reference loan). Per-loan collateral data comes from Maple's GraphQL (`api.maple.finance/v2/graphql`); on-chain enforcement is the lender's call right with 24h notice + 48h grace before default. With zero on-chain first-loss cover required, depositors absorb credit losses directly. This section does the heaviest work for institutional readers.

### Loan-book composition (verified via on-chain reads + Maple GraphQL, 2026-05-01)

| Field | Value | Notes |
|---|---|---|
| Primary LoanManager | `0x6ACE...0fAc` | Strategy 0; **OpenTermLoanManager** (corrected from earlier "Fixed-term") |
| Loan factory (enumeration source) | `0x6Fad515Fc046DD17166453A79725f50b917b7cF6` | OpenTermLoanFactory — `InstanceDeployed` events scanned via dRPC |
| AUM (Loans) | live on dashboard | ~75–80% of pool TVL (varies as deposits arrive) |
| principalOut | live on dashboard | Outstanding loan principal |
| accountedInterest | live on dashboard | Accrued but unpaid interest |
| unrealizedLosses | 0 | Clean book — primary credit alarm signal |
| Pool deployment ratio | ~80–98% range | Varies materially across deployment cycles; free-USDC buffer swings within days — live on dashboard |
| Free USDC | live on dashboard | Fluctuates with deposit/deployment cadence; can compress to <2% of supply within a single day after a deployment cycle |
| Pool Delegate fee | 3.33% | `delegateManagementFeeRate = 33,300 / 1e6` |
| Pool-level collateralization | ~150–170% (live) | Loans-only Pool CR via GraphQL `poolV2.collateralRatio`; live on dashboard |
| Active loans | a few dozen | varies snapshot-to-snapshot as loans fund/repay — live count on dashboard |
| Borrowers | small set | top-1 well above the 10%/counterparty norm; top-3 a majority of book — live on dashboard |
| Weighted-avg interest rate | ~5.5% | Across the active book |
| Avg loan payment interval | ~67 days | Open-Term cadence; varies per loan (30–180d range) |
| **Collateral mix — Set A (crypto-overcollateralized)** | ~70% of book | BTC (125–250%), XRP (150%), cbBTC (143%), HYPE (200%) — per-asset $ live on dashboard |
| **Collateral mix — Set B (at-par stablecoin/RWA)** | ~30% of book | Delegate-rotated issuer menu: Paxos (PYUSD), Superstate (USTB @ 100%, NAV-accruing security), Circle/Tether (USDC/USDT AMM-LP); mix drifts under discretion, any one can dominate (recently ~90%+ PYUSD). Per-issuer $ live on dashboard |
| Loan-buffer health metric | Distance to par | Each Set A loan's *current* collateralization vs par (100%), not drift off init; tightest-loan-near-par and par-band clustering are the live signals — current counts on the dashboard |
| GraphQL data anomaly | persistent, composition-dependent | A subset of at-par Liquidity positions periodically return broken `currentAssetAmount` (historically USTB + certain at-par USDC); on-chain custody reads cross-validate. Which positions are affected drifts with composition |

### Pool Delegate as the binding credit-judgment layer

The on-chain PoolDelegate role for syrupUSDC is held by a single EOA: `0xC1e18FFD8825FfB286D177DDEbeba345EC70B49f`. This address has authority to fund loans within the protocol's PoolManager-enforced constraints (collateral whitelist, overcollateralization rules, asset whitelists). The delegate role's authority is bounded by those constraints — but within them, funding any loan to any whitelisted borrower at any compliant LTV is at the delegate's discretion.

**Two distinct risks stack at this layer:**

1. **Operational compromise risk** — single-key EOA. If the key is compromised, attackers can fund loans to whitelisted borrowers at compliant LTVs against accepted collateral. Realistic damage: drain the free-USDC buffer (live on dashboard) into attacker-favorable loans, then either repay later (no-op carry exfiltration) or walk if borrower identity gating is weak. *Bounded* attack — not "attacker mints arbitrary syrupUSDC" — but bounded only by the borrower/collateral whitelists, which are themselves PoolManager-configurable. Mitigants: protocol-enforced overcollateralization, borrower whitelist (verify enforcement), Security Admin pause capability.

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

**Concentrated borrower default during stress** is the dominant tail risk: the primary LoanManager (Strategy 0) holds the bulk of pool principal-out across what's likely a small number of large institutional positions. A single major borrower default during a market stress event (collateral falls faster than margin calls can liquidate) produces a hit to NAV with no on-chain delegate cover to absorb it (`Globals.minCoverAmount[PM] = 0`).

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

| Stress scenario | Set A (~70% of book) | Set B (~30% of book) |
|---|---|---|
| Crypto-cycle drawdown (BTC/ETH 30%+) | Buffer compresses; tightest loans go negative; delegate must act | Unaffected (collateral is stable-value) |
| Dominant-issuer depeg (e.g. Paxos/PYUSD) | Unaffected | The dominant issuer's position underwater (live size on dashboard) |
| USTB regulatory / NAV-attestation event (whenever the delegate is rotated into USTB) | Unaffected | Any USTB slice illiquid or impaired (size drifts; live on dashboard) |
| USDC depeg | Unaffected directly | Any USDC AMM-LP slice underwater AND the pool's denomination is also USDC (depositor pays twice) |
| Borrower default (operational) | Liquidate crypto collateral via off-chain custodian | Liquidate stablecoin/RWA collateral — same custodial mechanism, different asset |
| Custodian failure (counterparty) | Equally affects both — custodian holds both classes |

**Set B introduces named-issuer risk** to the depositor's surface — Paxos for PYUSD, Superstate for USTB, Circle for USDC. These were not in the report's prior risk frame but now need to be priced explicitly. Set B's "overcollateralization" is functionally **trust in the collateral asset's peg/issuer holding**, not a buffer against asset price volatility.

**Set B has a Maple-affiliated character** worth flagging: Maple's GraphQL classifies the at-par loans with `loanMeta.type` = `"amm"` (the USDC-against-USDC borrower) or `"strategy"` (the PYUSD/USTB borrower). The largest USDC at-par borrower (`0x2570fa...c8a0`) interacts directly with Maple's LoanManager and PoolManager contracts — depositing into and withdrawing from Maple's own pool infrastructure. Combined with the economic non-sense of third-party at-par credit, this strongly suggests **the at-par fraction is Maple-affiliated liquidity facilities or market-maker funding rather than external institutional credit.** The exact relationship (protocol treasury, partner MM firm, internal credit strategy) is not publicly disclosed by Maple. For depositors, this means the Set B 30% of the book carries **Maple-counterparty-aligned risk rather than diversified third-party borrower risk** — a structurally different axis from the BTC-collateralized loans to crypto-trading firms in Set A.

For Set B specifically, the depositor's effective overcollateralization buffer is *zero* — at-par means no cushion. The trust stack collapses to: Pool Delegate's policy + collateral-asset issuer's solvency + Maple's custodial framework + the lender's call right (which is a 72h-to-default mechanism, not an instant liquidation).

### Cross-pool concentration with sibling syrupUSDT pool (verified 2026-05-02)

syrupUSDC is part of a "Syrup family" with sibling pool **syrupUSDT** (`0x356b8d89c1e1239cbbb9de4815c39a1474d5ba7d`, materially smaller — live size/counts on its dashboard). Both pools run under the same Maple Labs legal entity, the same MapleGlobals governance contract (governor / ops Safe / security Safe), and the same Pool Delegate firm — though with different operational EOAs per pool (`0xC1e1...49f` for syrupUSDC vs `0x93aA...501A` for syrupUSDT).

**Cross-pool borrower overlap is significant.** A handful of borrowers carry positions in BOTH pools — including `0x1fcc47ee...`, `0x8669f3...f1e9`, and `0xb62446...d505` — so the same credit event damages both pools simultaneously. On a Loans-only basis the top-3 cross-pool borrowers persistently run well above the 10%-per-counterparty institutional norm, with the single largest near ~1/5 of the family loan book. Exact per-borrower exposures drift as loans mature and originate and are live on the dashboard. **An allocator holding syrupUSDC AND syrupUSDT is NOT diversified at the borrower level** for these positions — a structural fact invisible from either pool's standalone view but material for combined sizing decisions.

Note also that **Maple's own `syrupGlobals.loansValue` field returns the Loans-only total, which doesn't reconcile to the per-pool sum of Loans + Liquidity** — not a Maple bug but a field-scope difference. Family-aggregate analysis should compute from per-pool Loans data, not trust the global field. (Documented further in §VIII Methodology.)

### Loan-buffer health: distance to par, not distance to init

The right yardstick for loan-book health is **distance to par (absolute collateralization)** — how close a loan's *current* collateral level sits to 100%, where collateral stops covering principal. It is **not** distance to init. Each Set A loan funds at some initial level (BTC at 125%, some positions up to 333%) and its current level moves with live collateral price. A loan drifting from 333% to 270% is "below init" yet still wildly overcollateralized, so "below init" on its own is a near-continuous, almost information-free feature of the book. A loan **below 100%** — collateral worth less than principal — is the acute case: the delegate is holding an undercollateralized position by choice, and the on-chain status flag still reads "healthy" because the contract doesn't auto-trigger. The binding control either way is the Pool Delegate's **right, but not obligation**, to call (24h notice + 48h grace = 72h max default lag).

This axis applies to the third-party **Loans share (Set A) only**. The Liquidity layer's pool-owned positions sit at par (~100%) by construction and aren't credit collateral — a par-proximity floor there would alarm permanently and reveal nothing.

Two live signals, both surfaced on the dashboard:

- **The tightest Set A loan approaching par.** Once a loan's current level falls toward 100%, the collateral buffer is substantially consumed and the only thing between the position and a default lag is delegate discretion. The dashboard surfaces the worst buffer in the book.
- **Many Set A loans compressing into the par-proximity band together** (current levels drifting toward roughly 120% and below). A correlated crypto-cycle drawdown produces this even before any single loan is at par — the early warning for the correlated-drawdown tail scenario. This re-anchors the old "many loans below init" signal onto distance-to-par: clustering near *init* is noise, clustering near *par* is the signal.

In normal cycles, par-ward drift well above 100% is benign — collateral recovers, borrowers top up, and delegate restraint avoids unnecessary friction. The report intentionally does not embed current values — how many Set A loans sit in the par-proximity band and how tight the tightest is are point-in-time figures surfaced live on the dashboard's Loan Book Health panel, not fixed report facts.

### GraphQL data anomaly (verified 2026-05-01 → 2026-05-02)

Maple's GraphQL exposes per-loan `currentAssetAmount` for verification. A subset of at-par Liquidity positions periodically return anomalous values — historically the USTB position (`currentAssetAmount = 0`, implying a clearly-wrong 100% loss) and certain at-par USDC positions (sub-$50 raw values) — while the PYUSD position has returned correctly. The `openTermLoan(id:)` single-loan query returns `null` entirely for the affected loans; data only comes through the listing query and is wrong there. This is a Maple-side index gap, not a parsing bug in PegTracker's analyzer, and which positions are affected drifts with composition.

**Correlated quality issue in `aumTimeSeries` (verified 2026-05-02):** the same root cause appears to affect Maple's pool-level `poolV2.aumTimeSeries` aggregations. Pulling 30 daily points showed a 3-week window (April 2–19) where reported `loansUsd` and `collateralUsd` swung by hundreds of millions day-over-day in patterns that don't match real loan funding/repayment cadence. `unrealizedLosses` remained at 0 throughout this window — meaning the apparent AUM-coverage dips were *not* real undercollateralization events but rather Maple's aggregation including/excluding the at-par stablecoin/RWA positions inconsistently across days. The dashboard's AUM Coverage chart surfaces this raw — an explicit footnote on the chart notes the data-quality variance and points readers to `unrealizedLosses` (which stayed at 0) as the on-chain credit alarm.

**Extension to per-loan current-collateralization (observed 2026-07-02):** the same collateral-amount data issue also surfaces in the per-loan *current collateralization* view. Under a single uniform BTC price feed, individual BTC loans have reported current levels spanning a healthy ≈125% down to phantom sub-50%, with implied collateral amounts that would require physically implausible uncalled withdrawals (e.g. an ≈80% collateral drop on a loan Maple still flags "healthy," uncalled, not in default). This can drive the dashboard's loan-level view to show a double-digit percentage of the book "below 100%" while the on-chain solvency state is clean. As of 2026-07-02, `unrealizedLosses` = 0 and Pool Coverage Ratio = 100% across 490 consecutive hourly snapshots back to 2026-06-02. **The rule is the same: a sub-100% loan-level count that isn't corroborated by non-zero `unrealizedLosses` (and by the specific loans' impaired/called/default flags) is a Maple-side data artifact, not a recognized credit event.** PCR remains the authoritative loss-recognition alarm.

**Institutional implication:** a composition-dependent subset of Liquidity-layer positions has **attestation-only** verification of current collateral state via Maple's API. We can see the loans exist, their borrowers, and their required initial collateral level — but we cannot independently verify what's currently posted through GraphQL, and the pool-level historical coverage series carries enough day-to-day noise that institutional readers should treat AUM-CR fluctuations >10pp as data-quality variance rather than real composition shifts unless cross-validated against `unrealizedLosses` and per-loan status flags. On-chain custody-balance reads cross-validate the affected positions' magnitudes.

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

- **At-par stablecoin/RWA loans (Set B):** Rates are lower — the largest Liquidity position (currently PYUSD) pays around 3.25%; USDC at-par loans run ~5–6%. These are essentially institutional carry trades or stablecoin liquidity facilities.
- **Crypto-overcollateralized loans (Set A):** Rates run higher (5–9%+), reflecting the credit and operational complexity of crypto-collateral management.

Weighted-average rate across the active book is ~5.5%. The pool aggregates loan interest, takes Maple's protocol fee (`platformManagementFeeRate` per Globals; verify) plus the Pool Delegate's 3.33% management fee, and distributes the remainder to syrupUSDC holders as NAV accrual.

This is **organic yield** — derived from real borrower interest payments, not from emissions, recursive leverage, or external incentive subsidies at the underlying-yield layer.

#### APY profile

| Component | APY (live, May 2026) | Notes |
|---|---|---|
| **`coreApy` (organic loan interest)** | **~4.5–5%** | Verified from Maple GraphQL `syrupGlobals.apyTimeSeries` (range:WEEK), 7-day avg. Per-loan rates 3-9% across the book; weighted-avg lands ~4.5–5% net of Maple protocol fee and 3.33% delegate fee |
| `apy` (blended) | ~4.5–5% | = `coreApy + boostApy`; `boostApy = 0` (no programmatic incentive overlay since Feb 18, 2026 — see historical note below) |
| 3-mo T-bill reference (live) | ~3.7–4.0% | US Treasury fiscal data, avg outstanding T-bill rate 3.70% as of 2026-03-31. **syrupUSDC at ~4.5–5% sits ~70–100 bp above the T-bill benchmark** — appropriate spread for institutional credit risk. |
| Comparable onchain USD yields | ~3.5–4.5% | Aave V3 USDC supply, Morpho USDC vaults, comparable lending markets. syrupUSDC at ~4.5–5% is competitive with or above this set, with a structural advantage: it's accepted as collateral on Morpho / Euler, so the yield can be levered via collateralized borrowing. |
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

**Credit Risk Score: 6.0/10** — Two-bucket pool composition: ~75–80% Loans (third-party institutional credit, BTC/XRP/cbBTC/HYPE collateral at 125–333% init level) + ~20–25% Liquidity (pool-owned strategies across the Paxos/Superstate/Circle-Tether issuer menu, at par), measured against zero unrealized losses across the entire ~3-year Syrup product line. Maple's headline Pool Collateral Ratio (Loans-only, typically ~150–170%) is surfaced live on the dashboard as the headline metric; on a combined basis (Loans + Liquidity) the weighted-avg init level runs lower because Liquidity at 100% drags the average down. Real organic yield from institutional borrowers (~3–9% base on Loans, weighted ~5.4%). Bumped from prior 5.5 to 6.0 — the Pool Delegate discretion concern was leaking into the Credit score and is now properly weighted in Operational, leaving Credit to reflect the actual loan-book quality + Liquidity-layer issuer mix. Deductions for: $0 first-loss cover required by protocol (depositors directly absorb losses, v1-era MPL-bond model dropped for Syrup); **no on-chain collateral data** (collateral held off-chain, contract-level overcollateralization is a policy claim not an invariant); **Liquidity-layer issuer exposure** to the Paxos (PYUSD)/Superstate (USTB)/Circle/Tether issuer menu — the mix is delegate-discretionary and single-issuer concentration inside the layer can run high (recently ~90%+ PYUSD); issuer quality overall decent but USTB is a NAV-accruing security worth flagging (named axis), USDT named for disclosure-rigor gap; **GraphQL data anomaly** periodically affecting current-state verification for a composition-dependent subset of Liquidity positions (root cause documented; on-chain custody balances cross-validate the magnitudes); **delegate discretion on the loan-buffer-health axis** — measured by distance to par (absolute collateralization), where the tightest Set A loan approaching par is the leading indicator and current magnitudes live on the dashboard; borrower identity non-public; credit-judgment is delegate-discretionary; Maple Labs v1 bad-debt history is documented context (§IV) but small score weight given the v2 clean ~3-year record; no protocol-level insurance attestation publicly verified.

---

## III. Liquidity & Redemption — 7.5/10

### Two exit paths

**Path 1 — DEX aggregator routing (preferred for retail and low-institutional).**
- Aggregators (KyberSwap, 1inch, etc.) route across **Uniswap v3/v4, Balancer, and other listed venues**
- Verified Balancer pool ID: `0x0195538979e579d49999f780c04fc4bf68778b6f0000000000000000000006d9`
- Empirical exit slippage (PegTracker probe): **single-digit-to-low-double-digit bps** at retail-to-low-institutional notional — live tiered slippage on the dashboard
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
| Steady state | free-USDC buffer (live) | Sub-minute via aggregator + queue | Low-single-digit % of supply available immediately |
| ~3% correlated outflow | Buffer consumed | Minutes-to-hours via queue | Approaches the buffer limit |
| 10% correlated outflow | Insufficient buffer | **Days**, function of loan repayment cadence | Shortfall must come from loan repayments / margin calls |
| 25% correlated outflow | Deeply insufficient | **Weeks**, function of loan termination + collateral liquidation throughput | Forced delegate-side calls of open-term loans (24h notice + 48h grace before default per loan) |
| 50%+ correlated outflow | Deeply insufficient | **Indeterminate** — collateral DEX depth becomes binding | Collateral liquidation paths thin during stress; queue extends until borrowers repay or collateral clears |

**Monitoring leading indicators (PegTracker live):**
- `peg.premium_discount_pct` widening beyond ~50 bps → instant-liquidity buffer depleting
- `liquidity.quotes.{1000,10000,50000,100000}.slippage_bps` increasing materially across the standard tiers → aggregator routing depth deteriorating

### Redemption liquidity risk

**Normal markets:** Aggregator routing handles retail-to-low-institutional sizes (≤~$100K) at low-bps slippage with sub-minute settlement. The "instant liquidity is broken because pool TVL is only 1%" concern doesn't bind in base-case markets — aggregators route across more venues than Maple's original Uniswap+Balancer launch pools.

**Correlated-outflow stress:** Binding constraint reverts to underlying pool depth (free USDC + loan repayment cadence), not aggregator efficiency. Late exits face the queue; queue speed depends on free USDC vs outstanding loan principal — when the pool is heavily deployed (deployment ratio has been observed at 80–98% across the past month), queue extends until loan repayments or delegate-initiated calls free USDC. In a severe stress event (correlated borrower distress + DEX slippage widening + queue lengthening), exit timeline could extend from sub-minute (steady state) to weeks.

**Liquidity & Redemption Score: 7.5/10** — Empirically excellent base-case exit liquidity (single-digit-to-low-double-digit bps to ~$100K via DEX aggregator routing; live tiers on the dashboard) AND **permissionless mint/redeem at the vault layer** (no KYC gating, anyone retail or institutional can deposit USDC at NAV and submit redemption requests at NAV) — a meaningful institutional-accessibility advantage over KYC-gated RWA peers (thBILL T+4, $1M institutional-only primary). Both primary paths (queue + DEX secondary) are permissionless. Queue currently empty with zero current redemption pressure. Multi-chain via CCIP+CCT (5 chains). Bumped from prior 6.5 to fold in the permissionless mint/redeem advantage explicitly — this access pattern was under-priced in the prior framework. Deductions for: deployment ratio operates in the 80–98% range with free USDC buffer fluctuating from <2% to ~18% of supply across deposit/deployment cycles; stress-case exit is loan-repayment-bound whenever the buffer is compressed; "instant liquidity" pool TVL is only ~1% of supply (binding during stress even though aggregator routing covers base case); DEX depth on non-Ethereum venues thinner.

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

**Operational & Governance Score: 7.0/10** — 24h Timelock on protocol upgrades is well above peer baseline, multisig role separation between Operational Admin (3-of-5) and Security Admin (3-of-6) with non-overlapping signer sets is real institutional hygiene, doxxed Cayman Labs entity with sustained operations across v1 → v2 transition, strong external partner integrations (Chainlink CCIP, Aave V3 listings). **Custody primitive (per Maple's response 2026-05-04)**: all 5 EOA-shaped addresses (2 Pool Delegate + 3 Liquidity custody) are MPC wallets under Maple Labs operational control with strict transaction policies — institutional-grade custody (peer to Coinbase Prime / Fireblocks). Bumped from prior 6.0 to 7.0 reflecting (i) the MPC + policy attestation reducing single-key custody concern materially, (ii) cleaner separation: Pool Delegate discretion now properly weighted here rather than leaking into Credit. Deductions remain for: consolidated Maple operational control (a firm-level event affects all family-wide capital simultaneously); MPC + policy claim is off-chain attestation, not on-chain-verifiable; Pool Delegate firm identity not transparently disclosed in public materials; multisig signer-to-firm attribution not publicly verified; Timelock proposer set not directly readable via standard calls; v1 bad-debt history under same legal entity (small weight); no bankruptcy remoteness; dependency on Chainlink CCIP governance for cross-chain integrity; ~3-year Syrup-product Lindy unproven through a multi-cycle bear market.

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

**Score interpretation:** **Moderate-to-low institutional risk** — among the higher-quality assets in our coverage. Suitable for retail and institutional sizing in normal markets via aggregator-route exit OR permissionless primary mint/redeem at NAV. Headline APY today equals `coreApy` (~4.5–5%, organic loan interest) — the durable return is the base-yield credit-quality-vs-benchmark thesis. Larger positions, or any institutional sizer expecting to exit during stress, should price queue latency and the discretionary-credit-judgment layer (with zero on-chain first-loss cover) into entry decisions.

**What changed in this scoring update (2026-05-04):** prior framework was 6.2/10. Bumped to 6.75/10 reflecting (i) Maple's MPC + policy custody attestation correctly contained in Operational rather than triggering single-key custody discount in Credit, (ii) explicit reweighting of Credit to reflect actual loan-book quality (~150–170% Loans CR + Liquidity-layer issuer mix) without leaking Pool Delegate concerns, (iii) fold of permissionless mint/redeem advantage into Liquidity & Redemption — this access pattern materially differentiates syrupUSDC from KYC-gated peers (thBILL T+4) and matters for both retail and institutional users who want to enter/exit at NAV without slippage. Net: same underlying asset, better-calibrated framework.

---

## VI. Key Recommendations

1. **For sizing decisions, use empirical aggregator-route slippage — not strict pool TVL.** PegTracker's probe shows low-bps slippage at retail-to-low-institutional notional via KyberSwap routing; live tiers on the dashboard. The headline "~1% of supply" pool-TVL view is overly conservative for normal markets. *However*, this only describes base-case exit — in correlated-outflow stress, depth shrinks to underlying pool TVL + loan-repayment cadence (see §III stress quantification table).

2. **Monitor PegTracker fields as leading stress indicators.** Set alerts on:
   - `peg.premium_discount_pct` > 50 bps → instant-liquidity buffer depleting
   - `liquidity.quotes.<notional>.slippage_bps` materially rising across standard tiers ($1K/$10K/$50K/$100K) → aggregator routing depth deteriorating
   - WithdrawalManager queue length growing (currently empty as of 2026-04-26)

3. **Evaluate sizing on credit-quality-vs-benchmark, not historical headline APY.** Plain syrupUSDC holding pays ~4.5–5% organic (`coreApy`) — around or below the 3-month USD benchmark on most days. The historical "16-20% headline APY" framing from the Drips/Seasons era (2024–Feb 2026, now ended) is no longer applicable. Holders deploying syrupUSDC into Merkl-eligible partner integrations (`app.merkl.xyz/?search=syrup`) can capture additional partner-distributed rewards, but those belong to the partner integration's risk surface, not to syrupUSDC itself.

4. **Verify Pool Delegate firm identity before institutional sizing.** The on-chain PoolDelegate EOA is `0xC1e1...49f`; the operational firm behind it is not publicly attested in Maple's user-facing documentation as of 2026-04-26. Confirm via Maple IR or `app.maple.finance/v2/lend/pools/eth-syrupusdc` directly.

5. **Treat zero-on-chain-first-loss-cover as a structural risk feature.** Maple v1's MPL-bond model has been dropped for Syrup; depositors are first-loss. Institutional risk frameworks that rely on "delegate has skin in the game" should verify whether Maple Labs holds protocol-level cover at the Globals layer (off-chain disclosure) or whether the only delegate alignment is reputational.

6. **Per-chain due diligence for non-Ethereum deployments.** Cross-chain via Chainlink CCIP/CCT — burn-and-mint native deployments. Materially different attack class from LayerZero OFT exploits (rsETH/Drift/Volo). Still warrants per-chain checks: verify CCT pool addresses on Chainlink's CCIP directory, check per-chain rate limits, verify pool depth on each chain (non-Ethereum venues have shallower secondary liquidity).

7. **Monitor Governor Timelock `ScheduledOperation` events** as a leading indicator of upgrade activity. The 24h delay provides an exit window if a malicious or contentious upgrade is scheduled.

8. **Treat zero-losses-to-date as a feature, not a guarantee.** Syrup product has clean credit performance over ~21 months but has not been stress-tested through a multi-cycle bear market under the v2 model. Credit-cycle-correlation tail risk is real.

9. **Compare wrapper-layer track record with Maple Labs entity track record.** v1 bad debt happened under the same legal/operational entity. Decide explicitly whether your framework treats the entity or the product as the relevant unit.

10. **Treat the Liquidity layer as a distinct risk axis from third-party credit.** ~20–25% of the pool is the Liquidity layer — pool-owned positions in stablecoin/RWA/AMM yield strategies, NOT third-party credit. Risk axis: issuer (Paxos for PYUSD, Superstate for USTB, Circle/Tether for AMM), RWA wrapper (USTB), AMM venue (Solana + Ethereum DEX pools). The delegate rotates the mix under discretion and any one issuer can come to dominate (recently ~90%+ PYUSD). A PYUSD depeg, a USTB regulatory action, or an AMM venue compromise impairs Liquidity without any change to the Loan book and vice versa. **The dashboard's Liquidity Layer panel surfaces this distinctly**: per-position rows with custody addresses, EOA badges, and issuer labels. Loan Book panel separately shows third-party-credit health (Loans-only pool CR ~150–170%, buffer health, tightest loan).

11. **Monitor loan-buffer health as distance to par, not distance to init.** The health yardstick is how close a Set A loan's *current* collateral level sits to par (100%), not its drift off funding-time level — a loan below its own init is often still wildly overcollateralized, so "below init" carries almost no information. The delegate-discretion signals to watch are the tightest Set A loan approaching par and many Set A loans compressing into the par-proximity band together (correlated-drawdown early warning). On-chain status flags read healthy regardless because the contract doesn't auto-trigger; the delegate has the right but not the obligation to call. Current counts and the tightest buffer are point-in-time figures on the dashboard's Loan Book Health panel.

12. **Treat a composition-dependent subset of Liquidity-layer positions as data-anomaly-affected in Maple's GraphQL** but cross-validated on-chain. Maple's `currentAssetAmount` field periodically returns broken values for at-par positions (historically the USTB position and certain USDC at-par positions). On-chain custody-balance reads at the known custody addresses cross-validate the magnitudes against Maple's UI — USTB/PYUSD custody at `0x1FcC47Ee0F19...` and `0xe7F0...657b`, USDC/USDT AMM-LP custody at the Solana + Ethereum venues. So while GraphQL's `currentAssetAmount` is unreliable for the affected positions, the underlying balance state is verifiable through Maple's UI + on-chain custody reads. Which positions are affected drifts with composition.

13. **Surface the centralized-Maple-controlled custody topology before institutional sizing.** Five EOA-shaped addresses control effectively all family-wide capital — 2 Pool Delegate addresses (loan-funding authority) + 3 Liquidity-layer custody addresses (direct asset custody / AMM operations). Per Maple's response 2026-05-04, all five are **MPC wallets with strict policy controls** (modern institutional treasury custody primitive, peer to Coinbase Prime / Fireblocks / Copper / Anchorage). The MPC + policy claim is off-chain attestation, not on-chain-verifiable — `eth_getCode == 0x` rules out smart-contract multi-sigs but cannot distinguish MPC from single-key. The binding axis is consolidated Maple-internal operational control, largely already priced via Pool Delegate discretion + Maple Labs entity risk. Questions for Maple before sizing: MPC provider, threshold structure, policy whitelist, insurance, audit scope of off-chain MPC setup.

13. **For combined Syrup-family sizing, account for cross-pool borrower concentration explicitly.** syrupUSDC + syrupUSDT share borrowers: on a Loans-only basis the top-3 cross-pool borrowers persistently run well above standard 10% institutional single-counterparty limits, with the single largest (`0x1fcc47ee...`) near ~1/5 of the family loan book (live figures on the dashboard). Holding both syrupUSDC and syrupUSDT does NOT diversify credit risk for these specific borrowers — it concentrates it. Anyone sizing across both pools should compute combined exposure to each borrower individually rather than treating the two pools as independent products.

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

**The architectural framing verified against Maple's own AUM Details page:** the pool's $1B+ TVL is composed of **~75–80% Loans (third-party institutional credit, BTC/XRP/cbBTC/HYPE collateral at 125–333% — "overcollateralized at all times" applies here)** plus **~20–25% Liquidity (pool-owned positions across the Paxos/Superstate/Circle-Tether issuer menu, intentionally at par with the underlying asset, NOT third-party credit)**. The earlier "Set A overcollateralized + Set B at-par loans" framing collapsed both into a single mixed-collateral loan book — that framing was incorrect; the at-par positions aren't loans at all. Loans's binding stress is crypto-cycle volatility on the collateral; Liquidity's binding stress is the issuer/peg/AMM-venue event. Different stress scenarios bind the two buckets differently.

The 6.75/10 score reflects seven persistent concerns: (a) the **Pool Delegate model adds discretionary credit risk** beyond what a purely algorithmic protocol carries, with the operator role MPC-controlled but Maple-internal — credit underwriting is the binding axis for this product (35% of the composite weight); (b) **consolidated Maple operational control of all custody** — 5 EOA-shaped addresses control effectively all family-wide capital. Per Maple 2026-05-04 these are MPC wallets + strict policy controls (institutional-grade primitive); on-chain reads cannot independently verify MPC vs single-key, so framing rests on Maple's attestation; binding axis is centralization under Maple Labs operations, largely already priced via concerns (a) and (g); (c) **no on-chain first-loss cover absorbs losses before depositors** — depositors are first-loss; (d) the **deployment ratio creates a structural stress-case redemption gap** — base-case aggregator-route exit is empirically low-bps to ~$100K, stress-case exit is queue-bound with loan-repayment-cadence-dependent clearing time; (e) **Liquidity layer's exposure to a delegate-rotated issuer menu** (Paxos/Superstate/Circle/Tether — the mix is delegate-discretionary and single-issuer concentration inside the layer can run high, recently ~90%+ PYUSD; issuer quality is overall decent but USTB is a NAV-accruing security worth flagging as a security not a stablecoin, USDT named for disclosure-rigor gap); (f) **cross-pool borrower concentration with sibling syrupUSDT pool** — top-3 cross-pool borrowers persistently run well above standard institutional single-counterparty (10%) limits, with the largest single near ~1/5 of family loan exposure (live figures on the dashboard); (g) **Maple Labs' v1 bad-debt history** is documented context (§IV) — same legal entity as Syrup, but v2 is a structurally different product with a clean ~3-year record. Small score weight, not a leading risk factor.

For sizing: plain syrupUSDC holding pays ~4.5–5% organic (`coreApy`) — around or *below* the 3-month USD benchmark on most days. The product is an institutional credit yield product priced near or below T-bills, evaluated on the credit-quality-vs-benchmark axis with the structural complexities described above (Pool Delegate discretion, consolidated Maple-controlled custody, two-bucket Loans/Liquidity composition, dormant DeFi sleeves, GraphQL data anomalies on Liquidity-layer positions). The historical Drips/Seasons incentive layer that pushed 2024–early 2026 headline APY to 16-20% ended Feb 18, 2026 and is no longer applicable. Larger positions, or any institutional sizer expecting to exit during stress, should price queue latency into entry decisions, verify Pool Delegate firm identity before sizing, verify per-chain CCT bridge surface for any non-Ethereum allocation, AND review the custody topology (Trust Stack panel on the live dashboard) — five MPC-controlled addresses under Maple's operational control hold effectively all family-wide capital.

**Live dashboard:** [tidresearch.com/dashboards/?asset=syrupusdc](https://tidresearch.com/dashboards/?asset=syrupusdc) — refreshed hourly from on-chain reads + Maple GraphQL. Headline metric above the fold is **Pool Collateral Ratio (Loans-only)** (Maple's own headline, typically ~150–170% measured against the loan book only; combined Loans+Liquidity weighted-avg init level runs lower) with PCR (`(totalAssets − unrealizedLosses) / totalAssets`) demoted to a small status pill ("PCR 100% · no losses recognized"; turns red on any non-zero `unrealizedLosses`). Treat PCR as a binary loss-recognition alarm, not a leading indicator. The dashboard now splits into two distinct sections: **Loan Book** (a few dozen third-party loans, BTC/XRP-collateralized) and **Liquidity Layer** (a handful of pool-owned positions, with custody addresses + EOA badges + issuer labels). Borrower Concentration computed Loans-only basis. **Trust Stack panel** surfaces the full custody-address inventory (5 addresses family-wide controlling effectively all family capital; per Maple all are MPC + policy controls). Pool Coverage 7d chart at top (window narrowed from 30d to focus on the post-anomaly clean window). Cross-Pool Family panel reconciles concentration with [syrupUSDT](syrupusdt) on a Loans-only basis (top-3 persistently well above the 10%/counterparty norm; live figures on the dashboard).

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
- **Per-loan current collateral state for most of the active book** (via the same GraphQL field — periodically broken for a composition-dependent subset of at-par Liquidity positions, see below)
- **Loan-book aggregates** — Set A vs Set B split, per-loan distance to par (absolute collateralization) and par-proximity-band distribution, named-issuer rollup

**What this report explicitly cannot directly verify:**
- **Per-chain CCT pool addresses and rate limits** for Solana / Arbitrum / Base / Plasma — Chainlink CCIP directory is SPA-rendered and not extractable via automated fetch. Cross-chain architecture (CCIP + CCT, burn-and-mint) is independently confirmed via published sources but per-chain specifics require direct browse to `docs.chain.link/ccip/directory/mainnet/token/syrupUSDC`. **[Open verification item.]**
- **Pool Delegate firm identity** behind EOA `0xC1e1...49f` — not disclosed in Maple's user-facing public documentation as of 2026-05-01. Verify via Maple IR or the syrupUSDC pool page on `app.maple.finance`. **[Open verification item.]**
- **Borrower firm identity** for individual loans — Maple's `borrowerMeta(ethereumAddress:)` GraphQL endpoint returns `contactName: "N/A"` for the largest borrower. Maintained as a static lookup in the dashboard analyzer.
- **Current collateral state for a composition-dependent subset of at-par Liquidity positions** — Maple's GraphQL `currentAssetAmount` field periodically returns broken values for at-par positions (historically the USTB position and certain USDC at-par loans); the PYUSD position has returned correctly. The single-loan `openTermLoan(id:)` query returns `null` entirely for the affected loans. This is a Maple-side data-pipeline gap, not a parsing issue; on-chain custody reads cross-validate the magnitudes, but current-state collateral for the affected loans is **attestation-only** via Maple's API. **[Open verification item, blocked on Maple-side fix.]**
- **Pool-level AUM history accuracy** — the same Maple-side aggregation issue affects `poolV2.aumTimeSeries` (`loansUsd`, `collateralUsd`). 30-day pulls show day-over-day swings of hundreds of millions that don't match real funding/repayment cadence on a $1B+ book. The dashboard's AUM Coverage chart surfaces this raw with an explicit data-quality footnote. **For history beyond `unrealizedLosses` and per-loan status, treat day-over-day swings >10pp as data-quality variance unless cross-validated.** **[Open verification item, blocked on Maple-side fix.]**
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
- Strategy 0 OpenTermLoanManager classification — verified by probing the Loan implementation contract `0xeeadb6...` via Sourcify ABI + live cast reads against the reference loan (`0x820eF0...`); the impl exposes `noticePeriod` / `gracePeriod` / `dateCalled` (open-term-only fields) and lacks `principalRequested` / `paymentsRemaining` (fixed-term fields)
- Per-loan enumeration via `InstanceDeployed` events on OpenTermLoanFactory `0x6Fad515F...` — scanned via dRPC in 10k-block chunks
- Raw audit data: `~/riskAnalyst/reports/data/syrupusdc-onchain-audit-2026-04-26.md` (corrected 2026-04-30 for Strategy 0 OpenTerm classification)

**Maple GraphQL verification:**
- Endpoint: `https://api.maple.finance/v2/graphql` (no auth, introspection disabled)
- Per-loan collateral data via `poolV2.openTermLoans[].collateral` query — verified working for most of the book; periodically broken for a composition-dependent subset of at-par Liquidity positions (USTB + certain USDC at-par positions; Maple-side data-pipeline gap; details in §VIII)
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
- [Live syrupUSDC Risk Dashboard](https://tidresearch.com/dashboards/?asset=syrupusdc) — refreshed hourly from on-chain reads + Maple GraphQL; surfaces Set A/B mix, buffer-health, named-issuer roster, deployment ratio, exit-liquidity tiers, governance topology
- PegTracker live monitoring data: `data/syrupusdc_backing.json` and `data/syrupusdc_backing_history.json`
