---
axis_frame: six
asset: "pufETH"
slug: "pufeth"
aliases: ["pufETH", "Puffer Staked ETH", "Puffer pufETH"]
chains: ["ethereum"]
category: "vault-share"
underlying_assets: ["ETH", "stETH"]
assessment_type: "light"
date: "2026-10-27"
last_verified: "2026-10-27"
last_revised: "2026-10-27"
backing_score: 6.0
liquidity_score: 6.0
underlying_score: 5.0
issuer_score: 5.5
overall_score: 5.5
axis_exemptions:
  - axis: "1 Stability"
    reason: "No continuous market history adjusted for time-matched ETH conversion NAV was established; missing history is not evidence of stability or depeg."
  - axis: "5 Contract & Admin"
    reason: "The required independent authority walk is missing; current roles, thresholds, signer overlap, delays and community bypass powers remain unverified."
yield_bearing: true
issuer: "Puffer protocol"
featured: false
production: true
# Source: riskAnalyst/assets/pufeth.md, October 27 initial assessment.
# Evidence: data/reviews/pufeth-2026-10-27/; follow-up handoff:
# specs/handoffs/pufeth-initial-assessment-followups-2026-10-27.md.
# Canonical Ethereum only. No scores or aliases for bridged representations.
---

# pufETH — Risk Report

**Moderate risk · 5.5/10 — provisional**

**Category:** ETH-denominated vault share | **Issuer:** Puffer protocol | **Scope:** Canonical Ethereum pufETH only

## Summary

pufETH is a non-rebasing share in Puffer's Ethereum staking/restaking vault. Its ETH conversion rate can rise with rewards and fall if losses reach holders. This assessment concerns the receipt's accounting, dependencies and exits, rather than the underlying ETH price.

At Ethereum block **26,280,780**, October 27, 2026 at **01:33:47 UTC**, the vault accounted for **11,385.4002 ETH** against **10,481.2290 pufETH**, or **1.0862657622 ETH per share**. Only **146.8421 ETH**, 1.2897% of accounted assets, was immediately available as native cash. Tested instant redemptions within that buffer worked with a **1% fee**. Larger exits depend on market routes or a queued withdrawal process whose duration is not guaranteed.

The provisional **5.5/10** overall covers four assessed axes. **Stability and Contract & Admin are unscored** because NAV-adjusted history and the required authority walk are missing. Neither blank is a zero-risk finding or an inherited peer score.

These scores apply only to [canonical Ethereum pufETH](https://etherscan.io/address/0xD9A442856C234a39a81a089C06451EBAa4306a72). Bridged representations require separate contract, bridge and local-exit assessments. No dashboard coverage is implied by this report.

## 1 · Stability — Not separately scored

pufETH targets an accruing ETH claim, not $1 or a fixed 1 ETH per token. The correct reference is time-matched `convertToAssets`, which returned **1.086265762228422026 ETH** for one share at the snapshot. Instant `previewRedeem` returned **1.075403104606137805 WETH**, exactly 1% less.

The sampled $10,000 routed quote was 11.47 basis points below conversion NAV before gas. That is a dated exit observation, not a historical peg band.

**Risks and limitations.** No matching history key was found in either checked history registry, and no continuous NAV-adjusted pufETH/ETH series was established. Stability remains unscored because history is missing; this establishes neither stable trading nor a depeg.

## 2 · Backing — 6.0

[PufferVault V5](https://github.com/PufferFinance/puffer-contracts/blob/master/mainnet-contracts/src/PufferVaultV5.sol) accounts for native ETH, WETH, stETH, pending Lido withdrawals, oracle-reported locked ETH and reward-accounting adjustments. The snapshot reconciles arithmetically to `totalAssets()`:

| Component at block 26,280,780 | ETH | Interpretation |
|---|---:|---|
| Native ETH | 146.842097 | Shared immediate withdrawal cash |
| WETH | 0 | No additional WETH buffer |
| stETH | 0.382958 | Lido exposure, not native cash |
| Pending Lido withdrawals | 0 | Getter measured at zero |
| Oracle locked ETH | **11,200.000000** | **98.3716%** of accounted assets |
| Rewards minted less deposited | 38.175123 | Accounting receivable/reconciliation item |
| Pending reward distribution deducted | 0 | Getter measured at zero |
| **Total accounted assets** | **11,385.400178** | Matches reported vault accounting |

The conversion NAV is derived from these assets and supply. Computing assets divided by shares times that same NAV would produce an identity, not independent 100% solvency assurance or excess coverage. Oracle locked ETH was not independently reconciled against all validators and withdrawal credentials. Reward receivables are not cash already deposited.

**Risks and limitations.** Reproducible accounting supports Backing 6.0, while the large oracle-dependent component limits assurance. No aggregate verified junior cushion was established. The documented node-operator bond is validator-level protection, not additional liquid cash or proof that all correlated restaking losses are covered. Independent validator and reward-claim reconciliation remains open. See the [protocol design](https://docs.puffer.fi/yield/protocol/overview).

## 3 · Liquidity & Exit — 6.0

Holders can redeem instantly against shared vault cash, request a standard queued withdrawal, or sell through market routes. Each has different costs and capacity constraints.

### Instant redemption

At the snapshot, the base fee was **0 basis points** and the treasury fee **100 basis points**: the total **1%** fee is a treasury component, not an amount entirely burned. AccessManager allowed the tested arbitrary caller to invoke redemption without execution delay.

Read-only calls from a funded pufETH holder, without state overrides, succeeded at **$10,000 and $100,000 of NAV notional** and reverted at **$500,000 and $1m** for exceeding `maxRedeem`. The holder had enough shares for all four tests, so its token balance did not explain the larger failures.

The measured holder's `maxRedeem` was **135.180636 pufETH**, representing approximately **146.8421 ETH gross / $341,360** at the valuation reference. This was the shared native-cash constraint, not a reserved allocation for that holder. Other transactions can consume it first. Simulations are evidence of the code path, not settled redemptions or guaranteed future capacity.

### Queued withdrawal

[Withdrawal documentation](https://docs.puffer.fi/yield/stakers/withdraw) describes zero-fee standard withdrawals, periodic backend processing and potentially around **14 days** when validator/EigenLayer steps are needed. The live manager confirmed a **0.01 pufETH minimum** and **10,000 pufETH maximum request**. Fourteen days is not a contractual upper bound.

The snapshot had 15,000 historical requests, batches of 10 and finalized batch index 1492. Seven full batches, **1493–1499**, contained **70 unfinalized requests** totaling **1,068.597368 pufETH**, with recorded requested payouts of **1,159.586895 ETH**—about **7.90 times** current native cash. Historical request count is not current unpaid demand; finalized-but-unclaimed requests are a separate category. Queue age and clearance time were not established.

The [withdrawal manager](https://github.com/PufferFinance/puffer-contracts/blob/master/mainnet-contracts/src/PufferWithdrawalManager.sol) settles at the **lower of the request-time conversion rate and batch-finalization rate**. A queued holder may forgo subsequent upside while retaining downside. Finalization requires a privileged actor and sufficient released liquidity. The pending demand is not independently measured reserve insolvency: validator ETH may be released, and final payouts can adjust down.

### Dated market quotes

Sizes below are USD-equivalent pufETH amounts valued at conversion NAV. WETH outputs use the same **$2,324.68418576/ETH** Chainlink reference, whose update preceded the block by about 46 minutes. USD is a sizing aid. Costs include the starting NAV discount and exclude gas.

| NAV notional | Instant simulation | Direct Curve output | Kyber routed output | Routed cost versus NAV |
|---|---:|---:|---:|---:|
| $10,000 | $9,900 | $9,985.98 | $9,988.53 | 11.47 bps |
| $100,000 | $99,000 | $94,015.96 | $99,861.15 | 13.88 bps |
| $500,000 | Exceeds cash capacity | $96,407.26 | $498,182.94 | 36.34 bps |
| $1,000,000 | Exceeds cash capacity | $96,410.26 | $979,706.48 | 202.94 bps |

Direct [Curve pool](https://etherscan.io/address/0x39F5b252dE249790fAEd0C2F05aBead56D2088e1) `get_dy` calls were pinned to block 26,280,780, with measured WETH/pufETH coin order and selling direction 1→0. The roughly $96,400 output plateau reflects counter-asset exhaustion, not large-ticket depth.

Routed quotes were fetched separately during the October 27 review; their returned route timestamp was **01:35:41 UTC**. They are **not block-pinned** and do not create a simultaneous executable comparison with primary simulations. No route was executed. The sampled routed **2% all-in cost crossing is bracketed between $500,000 and $1m**; the direct pool crosses between $10,000 and $100,000. No interpolated crossing is claimed.

**Risks and limitations.** Routing at $100,000–$500,000 and a working small primary exit support Liquidity 6.0. Shared cash is limited, larger primary exits depend on operational finalization, and queue payouts retain loss exposure. Routes and inventory can change quickly; repeat quotes before a trade rather than treating this ladder as current capacity.

## 4 · Dependencies — 5.0

The claim passes through Puffer's vault, oracle and validators, with native restaking, selected operators/AVSs, reward accounting and withdrawal processing. The measured stETH balance adds Lido exposure; a DEX exit adds its actual routing dependencies. EigenLayer, operators and AVSs are loss/execution dependencies, not additional independent reserve assets.

**Risks and limitations.** Current operator/AVS allocations and slashing caps were not enumerated. No diversified portfolio or absence of slashable exposure is asserted. The concentrated validator/oracle/restaking path supports Dependencies 5.0; stronger assurance needs measured exposure, loss limits and validator reconciliation. See the [native-restaking design](https://docs.puffer.fi/yield/protocol/nlrt).

### Bridged representations are outside scope

The [deployment registry](https://github.com/PufferFinance/Deployments-and-ACL/blob/main/docs/deployments/mainnet.md) describes CCIP, LayerZero and legacy representations, including multiple Base instruments. These are registry statements, not verified local supplies or route health. Match **chain and contract address**. Bridge authority, lockboxes, rate limits and local liquidity require separate assessment; canonical Ethereum scores do not transfer to a familiar ticker. xPufETH aliases are not assigned to this report.

## 5 · Contract & Admin — Not separately scored

The required independent authority walk has not been completed. Current effective selector roles, role administrators, signer sets and overlap, ordinary and bypass paths, reward/oracle powers and queue-finalizer control remain unverified. No Contract/Admin score is fabricated from partial code evidence.

Puffer's [governance description](https://docs.puffer.fi/yield/deployments/multisig) states operations **3-of-6**, community **3-of-6** and pauser **1-of-9**, with a seven-day ordinary operations timelock, community veto **and community power to bypass the delay**. These are issuer representations, not a verified universal seven-day protection. Permissionless instant redemption does not resolve privileged upgrade authority.

The [audit directory](https://github.com/PufferFinance/puffer-contracts/tree/master/audits) includes Cantina's April 2025 Vault V5 review and BlockSec reviews of two-step withdrawals, the July 2025 treasury-fee rework and October 2026 reward-claim migration. The latest review explicitly discusses privileged upgrade, reward and parameter roles; it is not a fresh audit of the entire vault, AVS and bridge system. Cantina's reviewed version had one low and two informational findings, with one informational acknowledged and the others fixed.

The measured implementation address `0x3b2fdfdefe919dbcce0bc5ac426097d5523b8afa` agrees with the issuer registry. End-to-end audited-commit/compiler/bytecode equality was not established. Published tests were not reproduced against deployment; current numeric coverage and scoped formal verification remain unestablished. A tested bounty-information URL returned 404, leaving active scope, rewards and privileged-action exclusions unverified—not proof of absence.

**Risks and limitations.** Axis 5 remains unscored until the authority walk resolves actual reach and bypass powers. The canonical vault, [withdrawal manager](https://etherscan.io/address/0xDdA0483184E75a5579ef9635ED14BacCf9d50283), reward processing and each bridge are separate surfaces. Missing authority evidence does not make their risks zero.

## 6 · Issuer — 5.5

Puffer publishes documentation, source, deployment/ACL records and governance procedures. This supports protocol-level operational transparency, while execution depends on operators and withdrawal/reward processing. Documentation labels alone do not prove that an independent token vote constrains every administrative action.

**Risks and limitations.** Issuer 5.5 is the initial authored assessment, not a claim of a regulated redemption guarantee. A guarantor legal entity, jurisdiction, accountable principals, governing law, holder dispute/recourse terms, financial audit and organizational/signer independence were not established here. Public code and operating documentation are established; enforceable reimbursement rights are unverified. Contract audits do not provide an issuer-quality uplift.

## Scores and next checks

| Axis | Score | Basis |
|---|---:|---|
| Stability | Unscored | Missing continuous history adjusted for time-matched conversion NAV |
| Backing | 6.0 | Reproducible accounting; locked validators and reward claims need independent reconciliation |
| Liquidity & Exit | 6.0 | Measured capped primary route, market quotes and constrained operational queue |
| Dependencies | 5.0 | Concentrated validator/oracle/restaking path |
| Contract & Admin | Unscored | Missing authority walk and unresolved effective bypass powers |
| Issuer | 5.5 | Operational transparency without verified holder recourse |
| **Overall** | **5.5 — provisional** | Four assessed axes average **5.625**; initial judgement below that mean, not a complete six-axis rating |

Priorities are validator/withdrawal-credential/EigenPod and AVS allocation reconciliation; reward mint/deposit/claim reconciliation; instant cash and queue progress; NAV-adjusted market history and fresh quotes; and the complete authority walk. A shrinking cash buffer or stopped batch finalization warrants a new exit assessment even while conversion NAV accrues. Bridged exposures require their own assessment.

## Revision history

*2026-10-27 — Initial limited-scope assessment published for canonical Ethereum pufETH. Overall 5.5 provisional; Backing 6.0, Liquidity 6.0, Dependencies 5.0 and Issuer 5.5. Stability and Contract/Admin explicitly unscored. Measurements, quote clocks and pending evidence retained; no bridge scores, dashboard coverage or automatic alerts implied.*
