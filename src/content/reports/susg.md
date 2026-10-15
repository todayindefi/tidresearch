---
asset: "sUSG (Tangent)"
slug: "susg"
aliases: ["sUSG", "Savings USG", "Staked Tangent USG", "Staked Tangent USD"]
chains: ["eth"]
category: "vault-share"
assessment_type: "full"
date: "2026-10-15"
last_verified: "2026-10-15"
featured: false
production: false
issuer: "Tangent Finance"
underlying_assets: ["USG"]
yield_bearing: true
market_cap_approx: 1241636
axis_frame: six
volatility_score: 5.0
backing_score: 5.0
liquidity_score: 3.5
underlying_score: 4.0
structural_score: 3.5
issuer_score: 4.0
# Legacy schema field: local unwrapping only; discussed within Liquidity & Exit.
redemption_score: 6.5
overall_score: 4.0
---

# sUSG (Tangent) — Risk Report

**Elevated risk · 4.0/10**

Tangent Finance's Ethereum savings wrapper over [USG](/reports/usg/), distributing protocol revenue through an accruing share price.

## Summary

sUSG is a Yearn V3 vault that currently holds USG directly. Its **1,246,382.72 USG** balance matches total assets and idle assets, with **zero strategy debt**. A holder's full-balance redemption succeeded in a read-only simulation, returning USG without a current withdrawal fee or cooldown.

Income comes from funded USG distributions. Historical share-price growth annualizes to approximately **9.54% over a 30-day observation window**, measured in USG rather than dollars. Neither the wrapper nor its yield removes USG's collateral, peg or secondary-market risk.

The main exit constraint follows unwrapping: USG has no direct redemption right into collateral or guaranteed dollars. Selling 100K USG through the tested two-pool route costs approximately **0.49%** against face value; 1M USG costs approximately **12.47%**. A 3-of-5 role-manager Safe can also change the vault's future allocation and withdrawal policy without an enforced execution delay.

The overall **4.0** equals the underlying USG assessment and sits below the six-axis mean of **4.17**. Direct inventory and working local redemption support the wrapper, while final-asset liquidity and shared underlying controls constrain the overall judgment.

**Evidence basis.** Core observations are from Ethereum block **26,196,257** on **October 15, 2026**. Redemption, historical pricing and control checks use separately recorded blocks. The parent monitoring snapshot is **October 15, 05:36:46 UTC**; its collateral figures are downstream evidence rather than a fresh loan-by-loan re-query. [Archived evidence and checksums](/data/susg/2026-10-15/manifest.json).

## 1 · Stability — 5.0

A share represents an increasing quantity of USG as funded profits are distributed. At the core snapshot, **1 sUSG converted to 1.050177974676 USG**. Its dollar value also depends on USG's market price; the parent feed marked USG at approximately **$0.996192**.

[Tangent's revenue policy](https://docs.tangent.finance/docs/usg/financial_flows) allocates 25% of protocol revenues to savers. Sources include borrower interest, collateral-reward deductions, wrapped-stable yield, keeper profits and liquidation-related income. The vault currently makes no loans itself: treasury distributions arrive as USG and are recognized as profit.

Twenty-three observed profit-report events refer to the vault itself. The October 8 receipt confirms **2,250 USG transferred from the fee treasury into sUSG**, followed by reporting. The latest six gains ranged from 2,000 to 2,300 USG. These establish funded receipts without proving every upstream revenue source or exact delivery of the policy percentage.

| Historical observation | USG per share | Actual window | Annualized compounded growth |
|---|---:|---:|---:|
| October 15, 07:01:23 UTC | 1.0501790297 | — | — |
| Approximately 7 days earlier | 1.0482826731 | 7.0232 days | 9.85% |
| Approximately 30 days earlier | 1.0423115913 | 30.1324 days | 9.54% |

The seven-day profit-unlock setting smooths distribution and does not lock user principal for seven days. The latest funded stream's scheduled unlock ends **October 15, 16:37:59 UTC**; continuing accrual then depends on further profit recognition. [Historical observations](/data/susg/2026-10-15/pps-history.json).

**Risks and limitations.** These endpoint returns are in USG units, not dollars or guaranteed future APY. They do not establish intraperiod drawdowns. Verified Yearn code can recognize losses, despite the product documentation describing an always-growing ratio. Complete treasury revenue attribution and immutable enforcement of the 25% split were not established; upstream collateral rewards can depend on third-party emissions.

## 2 · Backing — 5.0

The vault's sole current asset is USG, held directly at the vault address. Its balance, `totalIdle()` and `totalAssets()` agree at full integer precision. Effective share supply is approximately **1,186,829.99 sUSG**.

| Core observation | Value |
|---|---:|
| USG inventory / total assets | 1,246,382.715503 USG |
| Idle allocation | 100% |
| Strategy debt | 0 USG |
| Default strategy queue | Empty |
| Auto-allocation / shutdown | False / false |
| Accountant and withdrawal-limit module | Both unset |

Self-held vault shares of approximately 123.96 sUSG reflect profit-lock accounting rather than extra reserves. A full-range event query returned no strategy-change events while successfully returning role and profit-report events, consistent with the current idle-only configuration.

The **5.0 backing score is inherited from USG** because the current inventory is entirely USG. The parent monitoring snapshot reports **3.774552M real circulating USG**, entirely CDP debt, against **$4.874544M of oracle-valued collateral**: **129.14% conservative coverage** and approximately **$1.100M surplus**. It reports 17 markets, 14 with debt, and zero recorded bad debt. Approximately **25.18% of debt** lies in markets with less than 5% reported price headroom to liquidation.

Raw USG token supply of approximately 43.774M includes protocol minting buffers. The vault's 1.246M USG is **33.02% of real circulating supply**, a subset rather than additional issuance. Approximately $911K of pool counter-side stablecoins is exit inventory, separate from CDP collateral.

**Risks and limitations.** Directly verified USG quantity does not guarantee dollar recoverability. Parent collateral, oracle and loan quality were not independently re-audited in this wrapper assessment; aggregate coverage does not make each position safe. New strategy debt, a different asset mix or a parent backing-score change invalidates automatic inheritance. Indicative capitalization of approximately **$1.242M** uses held USG times the feed mark, rather than an independently measured sUSG market capitalization.

## 3 · Liquidity & Exit — 3.5

Local redemption returns USG. At block **26,196,273**, a holder's **158,644.686786 sUSG** balance produced **166,605.251504 USG** in both `previewRedeem` and a simulated `redeem` call from that holder. The simulation exercised the deployed transfer path; no transaction was broadcast. Current inventory covers the vault's asset claims, with no observed withdrawal fee, cooldown, strategy debt or withdrawal-limit module.

Final-asset conversion is the binding leg. USG holders generally need secondary markets unless they can repay an existing USG borrowing position. The tested Curve venues were:

| Pool | Counter-side inventory |
|---|---:|
| USG/USDC — `0x97ba10115da528c113462ede9c20d7adc806d93f` | 422,859.57 USDC |
| USG/frxUSD — `0xefc056790bb19702b2164ec6ea6ba3ae01d81195` | 488,153.53 frxUSD |

An equal split between these pools produced the following read-only quotes. Inputs are **USG after unwrapping**, not sUSG share counts. Outputs combine USDC and frxUSD at $1 face value; pool fees and the standing USG discount are included. Gas, stablecoin mark deviations and further frxUSD conversion are excluded.

| USG sold | Combined stablecoin output at face | Total cost vs USG at $1 |
|---|---:|---:|
| 1,000 | 995.71 | 42.92bp |
| 100,000 | 99,510.54 | 48.95bp |
| 250,000 | 248,469.34 | 61.23bp |
| 500,000 | 494,981.81 | 100.36bp |
| 750,000 | 731,274.31 | 249.68bp |
| 1,000,000 | 875,336.80 | 1,246.63bp |
| 1,246,382.72 | 899,885.04 | 2,780.03bp |

The tested route stays within 50bp cost at 100K USG but exceeds it at 250K; it stays within 200bp at 500K but exceeds it at 750K. These are brackets rather than exact capacity estimates. Selling the whole current vault through these pools alone returns approximately **899,885 mixed stable units**, **27.8% below USG face value**. [Saved exit ladder](/data/susg/2026-10-15/exit-ladder.json).

A separate direct sUSG pool, `0xC6ac08424eE6D1373F03611b96f5Da849594B6D8`, holds approximately **234,364 Re Protocol reUSD** on its other side. Selling shares representing 100K USG NAV quotes approximately **89,751 reUSD units**. This is the NAV-accreting [Re Protocol token](/reports/reusd-re/), not a $1 stablecoin; without a measured dollar mark and onward exit, that unit count does not establish a dollar discount.

**Risks and limitations.** Working local unwrapping does not provide dollar redemption. Pool inventory is LP-owned and block-specific. The equal split is not globally optimized execution, and mixed stablecoin output is not final cash. Concurrent withdrawals, role changes, future strategies and underlying-token failures can alter redemption. The whole-vault sale is a constrained-route scenario, not a prediction of loss.

## 4 · Dependencies — 4.0

Every share depends on USG's CDP collateral, oracles, liquidation process and peg liquidity, plus Yearn's vault accounting. There is currently no separate wrapper lending book or required bridge leg. Direct USG PegKeeper `debt()` reads were zero for both pools, consistent with no previously minted keeper debt available to withdraw and burn to support a discount.

USG's collateral stack includes external pools and wrappers whose performance and pricing feed into loan health. The parent dependency assessment remains **4.0**; this wrapper review does not repeat every underlying market and oracle check.

The largest observed sUSG holder is the direct Curve pool, holding approximately **714,544 sUSG**, or **60.2% of effective supply**. That measures LP custody rather than one person's beneficial ownership. Another approximately **157,132 sUSG** sits in an on-chain wrapper named **SY Savings USG**, introducing a Pendle-related dependency for users who choose that route. Direct sales into reUSD add Re credit and exit exposure.

**Risks and limitations.** A wrapper does not diversify USG's collateral or peg. Large pool custody can concentrate exits without revealing underlying LP ownership. Other-chain deployment discovery was not comprehensive: Ethereum is positively verified, and no absence is inferred elsewhere. Any new strategy allocation requires a fresh dependency assessment.

## 5 · Contract & Admin — 3.5

Ethereum vault **`0xf17d6f98a5c6eaa99d149079984119e0a4ef6900`** is a 45-byte EIP-1167 clone with a fixed implementation target, **`0xd8063123BBA3B480569244AE66BFE72B6c84b00d`**. It reports Yearn V3 **3.0.4** and has no mutable proxy upgrade slot. The implementation's bytecode matches the verification provider's deployed-code record; its address and factory match [Yearn's deployment registry](https://github.com/yearn/yearn-devdocs/blob/master/src/ethereum/constants.ts).

Configuration remains changeable. The role manager can assign strategy, debt, accountant, withdrawal-limit and profit-unlock permissions without an intervening timelock.

| Authority | Observed role and reach |
|---|---|
| `0x461B62CB3A7e9Df8f800aE058AE92F855F2c27Ca` | 3-of-5 Safe; vault role manager and owner of USG and ControlTower. Current operational mask 256 is deposit-limit management; it can assign other roles. |
| `0x536d4e9C0944dE2aC6657d610Aa99fA5e97Ce493` | 2-of-3 Safe; fee treasury and reporting manager, mask 32. Current reporting permission is not general custody or withdrawal authority. |

The reporter's three signers are among the role manager's five. Both Safes returned no enabled modules. An authorized reporting simulation succeeded with zero gain and loss; the same call from an unrelated address reverted. In the current zero-debt, zero-accountant state, the reporter cannot simply withdraw principal through that role.

[Tangent's documentation](https://docs.tangent.finance/docs/usg/susg) agrees with the observed Yearn design and current fee-free local redemption. Its always-increasing exchange-ratio description is stronger than the implementation's loss-capable accounting. The product description does not establish an enforced governance delay or immutable future withdrawal policy.

The [May 4, 2023 ChainSecurity Yearn V3 audit](https://reports.chainsecurity.com/Yearn/ChainSecurity_Yearn_V3Vaults_Audit.pdf) covers the generic vault design, reporting no critical/high findings and two corrected medium issues. Exact coverage of every deployed 3.0.4 difference remains unresolved. The [December 8, 2025 Pashov Tangent review](https://github.com/pashov/audits/blob/master/team/pdf/Tangent-security-review_2025-12-08.pdf) covers lending and infrastructure contracts, not this savings vault. Yearn's bounty is not assumed to cover this third-party integration automatically.

**Risks and limitations.** Fixed code does not prevent role-authorized movement into strategies or restrictive withdrawal modules. Shared underlying and wrapper control remains priced at 3.5. Complete signer independence, EIP-7702 behavior and every guard/fallback path were not established. No end-to-end audit tying this clone, current configuration and revenue pipeline to one review was verified. Only Ethereum is directly covered.

## 6 · Issuer — 4.0

Tangent Finance is the named protocol operator in the product and financial-flow documentation. Funded treasury transfers and public protocol reporting provide evidence of revenue delivery and disclosure. The **4.0 issuer score is carried from USG's shared issuer assessment**, with no independent uplift from adding the savings wrapper.

The current evidence establishes the public product identity, revenue policy and observed distributions. It does not establish a legal entity owing sUSG holders a debt, that entity's jurisdiction, beneficial owners or principals, governing law, dispute forum, insolvency priority or enforceable claim on collateral. Operational redemption returns USG; it does not create a separate legal dollar claim.

**Risks and limitations.** Exact revenue-policy enforcement, complete conduct history and audited issuer financial statements were not verified in this assessment. Missing legal inputs are unverified, rather than findings that no entity or rights exist. The carried score is not a fresh legal or financial-accountability derivation.

## What to watch

- Nonzero strategy debt, new strategy queues, accountant changes or withdrawal-limit modules.
- Role-manager changes and the introduction of an enforced execution delay.
- Continued funded profit reports after existing profit unlocks end.
- USG discounts, pool counter-side inventory, collateral headroom and recognized bad debt.
- Parent backing or issuer changes, which must propagate to the inherited axes.

## Revision history

- **2026-10-15 — Initial assessment.** Six-axis report based on the Ethereum wrapper, role and redemption checks, funded profit history, historical USG-denominated returns and measured secondary exits. Backing 5.0 and Issuer 4.0 are explicitly inherited from USG. The legacy redemption field records local sUSG-to-USG unwrapping at 6.5; final-asset liquidity sets the combined Liquidity & Exit axis at 3.5.
