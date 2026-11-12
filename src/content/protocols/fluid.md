---
protocol: Fluid
slug: fluid
aliases:
- Instadapp
- Fluid
- Fluid Protocol
- Instadapp Fluid
- Fluid Vault
- Fluid Lending
- Fluid DEX
chains:
- eth
- arbitrum
- base
- polygon
- bnb
- plasma
assessment_type: full
date: '2026-11-02'
last_verified: '2026-11-07'
last_revised: '2026-11-07'
contract_score: 7.5
economic_score: 6.0
project_score: 6.5
overall_score: 6.0
audited: true
audit_count: 7
audit_firms:
- MixBytes
- PeckShield
- StateMind
- Cantina
bug_bounty: true
team_doxxed: true
incident_history: true
is_fork: false
live_since: 2024-02
category: protocol
protocol_category: lending
audience: retail
production: false
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-source-report="929be1bc40735a7a7bbf127b32bb252ee226ae4d519cbcfb881666b88c85c748" data-assessment-version="fluid-protocol-2026-11-07-v2" data-evidence-snapshot="sha256:732236904d9d874357cd4ff277fd392bd4af8d19db4b0460be159155e0b77fb5" data-assessment-date="2026-11-07" data-assessment-scope="bounded-ethereum-plasma">

# Fluid — Risk Report

**Moderate risk · 6.0/10 · Bounded assessment**

Shared-liquidity lending and trading · Instadapp

## Summary

Fluid combines ERC4626 lending fTokens, collateralized borrowing and DEX liquidity over a shared Liquidity Layer. Vaults support normal or smart collateral/debt across T1–T4 designs. Capital efficiency links lender liquidity to borrower repayment, collateral marks and liquidation execution. [Architecture and limits](https://github.com/Instadapp/fluid-contracts-public/blob/404d73f91e6806f881f8dabeb30494f93f9e99b7/docs/docs.md) · [Rate and product definitions](https://docs.fluid.instadapp.io/integrate/lend-borrow-yield-rates.html)

The November 6 Ethereum and Plasma GHO observations show concentrated credit-bearing collateral. Plasma also had severe funding pressure and a recorded absorption whose final recovery and loss allocation remain unresolved. Administrative and oracle paths differ by chain. Strong source/runtime correspondence and historical response support confidence, while those economic and execution uncertainties constrain the assessment.

An unlevered fGHO lender has no personal collateral-liquidation threshold. Its risks include borrower repayment and collateral recovery, contracts, administrative powers, the token and withdrawal access. No individual deposit or product-wide cash guarantee follows from the protocol score.

## 1 · Smart Contract — 7.5

Fluid’s core factories, lending wrappers and administrative modules coordinate shared liquidity and privileged operations. The reviewed implementation paths and exact oracle leaves differ by chain.

Eighteen targeted builds were reproduced, binding only compiler-declared immutable fields to pinned values; selected live runtimes match. Coverage includes core factories/wrappers/admin modules and the relevant Plasma absorption secondary. It is **not deployed audit-commit/remediation equivalence**, nor a full new code audit. Full Plasma fGHO build equivalence and every relevant vault/DEX body remain incomplete.

At the November 6 security pins, the team wallet reports **6-of-12** on both chains, replacing the historical 5-of-10. These are custom-wallet getters; failed Safe getters do not prove absence of custom forwarders or other policy. Independent signer custody remains unknown.

Named Liquidity/LendingFactory administration is behind a current **24-hour delay** on both chains. Effective permissions differ: on Ethereum the checked team is VaultFactory deployer but not global-auth, while on Plasma it is **both deployer and global-auth**. A false vault-specific auth does not remove global authorization. Source-matched owner wrappers route specified factory control changes through governance, while allowing separate constrained distressed/dust operations. Not all operations are universally delayed.

Rates/limits/withdraw-limit auth contracts and guardian candidates have current privileges. Matched RatesAuth allows team changes within per-call bounds and a one-second cooldown; that is not a cumulative limit across many calls. Withdraw limits and pause powers can affect liquidity independently of an implementation upgrade. Holder enumeration remains incomplete.

Ethereum has an installed rollback facility subject to prior governance registration and eligibility rules; queried entries do not establish a currently usable arbitrary-upgrade bypass. Plasma's checked rollback selectors are absent. Neither observation proves a universal delay floor or cross-chain policy parity.

### Exact oracle coverage

Ethereum162 reads a capped Re source connected to Re's SharePriceCalculator. Ethereum179 reads a capped SUSDAI/USDAI source. The checked generic paths each have one un-inverted hop and **no separate GHO/USD market-price leg**. Ethereum's verified source helper checks positivity without using source timestamps; a 25-hour minimum heartbeat is not a maximum age rejection. Re's source-data clock must remain distinct from a later delivery timestamp.

Plasma38 has its own generic oracle, cap and SUSDAI-USDAI feed; it is not Ethereum179's implementation by assumption. At the Security pin, its source timestamp is approximately **21 hours old**. Raw heartbeat/configuration getters are known, but exact deployed source/compiler correspondence, cap-setter permissions and source-age rejection semantics are unsupported after retained source-fetch failures. Ethereum's verified behavior must not be inherited to Plasma. A positive displayed rate is not evidence of freshness enforcement or a market-realizable liquidation price.

The official index lists seven EVM audit reports; nine separate Sui reports do not clear EVM lending. Current DEX v2, Money Market and Lite scope must be checked separately. The historical advertised $500k Immunefi maximum remains program/scope dependent; it is not coverage of every product. [Audit index](https://docs.fluid.instadapp.io/audits-and-security.html), [bounty program](https://immunefi.com/bug-bounty/instadapp/information/).

## 2 · Economic — 6.0

Lenders supply tokens into a chain-local Liquidity Layer used by borrowing vaults and DEX users. Lender exits depend on physical cash, protocol-user limits and competing flows; available cash is not reserved separately for every depositor. Borrower repayment and collateral recovery transmit credit and liquidation risks into that shared funding.

Financial observations below are **November 6**: Ethereum block **26,356,922, 16:11:35 UTC**, and Plasma **37,038,203, 16:11:43 UTC**. Security observations use the earlier Ethereum **26,356,906, 16:08:23 UTC**, and Plasma **37,038,008, 16:08:28 UTC**.

### Dated GHO funding and concentration

| Same-pin native observation | Ethereum | Plasma |
|---|---:|---:|
| Liquidity Layer supply, GHO | 28,902,745 | 7,492,211 |
| Liquidity Layer borrowing, GHO | 25,566,762 | 7,417,816 |
| Computed utilization | 88.46% | 99.01% |
| Physical GHO / fGHO protocol-user withdrawable | 3,380,522 | 94,189 |
| fGHO nominal totalAssets, GHO | 21,410,831 | 7,457,349 |
| Stored supply APR, excluding external incentives | 6.20% | 31.43% |
| Largest relevant GHO borrowing exposure | reUSD vault162: 89.37% | sUSDai vault38: 73.95% |

High Plasma interest reflects scarcity of funding; it is not a risk-free premium or a forecast. Figures are historical pinned observations and variable rates, not a continuing monitoring guarantee. The sampled Ethereum GHO pool avoids the direct AI-loan collateral exposure identified on Plasma and had more cash at these pins, but is heavily dependent on Re Protocol reUSD. This is not a diversified low-risk collateral book merely because it runs on Ethereum.

Deduplicated observed borrower users leave 442.720681 GHO unattributed on Ethereum and 0.013686 GHO on Plasma. Neither residual is assigned to loss or rounding without evidence. DEX v2/Money Market/Lite user enumeration is not proven exhaustive.

Physical cash minus supply-plus-debt accounting differences equal the resolver's available-revenue figure, but that revenue is defined from the same balance surplus. The zero-wei identity is true by construction, not independent proof of earned fees, reserve segregation, insurance or funded first-loss capital.

### Collateral marks, ticks and exits

Ethereum vault162 is **Re Protocol reUSD**, not Resupply reUSD. Its marked aggregate LTV is about 83.40% against a 90% liquidation threshold. Plasma vault38 is sUSDai/GHO, with about 84.93% aggregate LTV against 90%. Aggregate mark declines to threshold are about 7.34% and 5.63%, respectively.

Those averages conceal closer debt buckets. The bounded 20-tick view covers 67.63% of Ethereum162 debt and 89.32% of Plasma38 debt. The closest visible buckets reach threshold after approximately **3.41% and 2.13%** conditional oracle-mark declines. These are tick aggregates, not the full position distribution, executable liquidation results or guarantees that oracle marks track sale prices.

Re's issuer-written NAV and legal/insurance waterfall remain distinct from independently recoverable cash. reUSDe is junior to reUSD, but its marked value is not automatically a verified contractual protection amount. Current tranche-attributed reserves and contractual first-loss thickness remain unknown. Re's accepted November 6 authority improvement does not certify insurance collectability. ReUSDe exits remain periodic and incomplete in dollar-route evidence.

sUSDai adds GPU-credit and loan-collection uncertainty. Its partial public schedules do not reconcile the complete loan population or verify scheduled-versus-received payments. Liquidation-event counts do not establish zero arrears, and public always-true hardware flags do not verify operating health. Current GPU liquidation values, funded DSRA and enforceable recovery protection remain unestablished. A conditional warranty is not a guarantee against correlated market stress.

### Plasma vault30: absorption established, final loss unresolved

Vault30 uses GHO/syrupUSDT DEX shares as collateral against GHO debt; it is separate from sUSDai/GHO vault38. The current episode begins at **Plasma block 37,015,256, November 6 09:49:16 UTC**, with zero absorbed storage in the preceding block. [Creation transaction](https://plasmascan.to/tx/0x81aa34ae36bf2e73c5dbccf2b53a49d79095d35368b016ce54f888bf0ceea7ad).

The event records 46,938.735939 collateral shares and 96,236.136269 debt-index units. Applying the current debt exchange price yields approximately **100,728.781930 GHO gross absorbed debt**. Debt-index units are not proven original cash principal. The raw bucket is unchanged through the financial pin, and a bounded event scan finds no subsequent liquidation/rebalance in that episode. This does not establish all-time first occurrence or exclude every possible external funding path.

Indicative collateral valuations suggest a shortfall, but have different bases. The native oracle/share mark is about 6,615 GHO below gross debt; an allocation of pool claims valued with separately clocked component prices is about $97,542, approximately $3,044 below the debt's USD mark before execution costs. Neither is an executed recovery, an independently established net bad debt or a realized depositor haircut. Do not combine or average those marks. The gross absorbed view also exceeds the vault total-borrow view by about 59.346 GHO; do not add the bucket to recorded Liquidity Layer borrowing.

Security's matched absorption code records the debt/collateral bucket; it does **not itself repay the debt or write a fGHO haircut**. Later rebalance operations require authorized execution and actual asset transfers. Reserve/rebalancer permissions do not establish funds or a mandatory bailout. Automatic pro-rata socialization, final deficit allocation, funded clearing and realized lender losses remain unsupported. Source: [frozen secondary implementation](https://github.com/Instadapp/fluid-contracts-public/blob/404d73f91e6806f881f8dabeb30494f93f9e99b7/contracts/protocols/vault/vaultTypesCommon/coreModule/main2.sol).

## 3 · Project — 6.5

Fluid is developed by the Instadapp team led by Sowmay and Samyak Jain. The FLUID MiCA document identifies Interop Labs Ltd., BVI company 2063557, for token admission; this is not a banking license, insurance for fGHO or a depositor repayment covenant. Current Foundation registry/director details, exact interface operator and substantive depositor legal terms remain incomplete. FLUID token-holder rights must not substitute for lender rights. [MiCA disclosure](https://instadapp.io/mica-whitepaper).

**Rewards compromise:** Fluid's **May 31 statement expressly acknowledged an off-chain Merkle rewards compromise**. A later complete root-cause/remediation and recovery record was not established in the bounded current search; that is not proof none exists. The reward-distributor incident is not evidence of a core Liquidity Layer exploit. [Original acknowledgment](https://x.com/0xfluid/status/2061124908277538827).

**Resolv:** the official August 5 recap says about $9.7M shortfall was treasury-covered and lenders made whole. An older imported investigation describes $19.3M and a multi-party split. The accounting scopes remain unreconciled; neither is a new independent transfer audit. Historical support is a positive conduct signal, not proof that Plasma30 is cleared or future compensation is guaranteed. [Official recap](https://fluid.io/blog/general-fluid-h1-2026-recap).

Governance proposal #142 was queued in the owner's November 7 primary UI observation, with no executed entry observed. Its proposed oracle upgrades, market closures and cleanup are not asserted as current runtime changes. A frozen deployment registry is an inventory of publisher entries, including historical/deprecated products, not proof that every listed row is live. Current buyback execution, compensation reserve capacity and institutional partnership execution are not established by recap or proposal language. [Proposal #142](https://www.tally.xyz/gov/instadapp/proposal/142).

## What to watch

Reassess on a cleared or growing absorbed bucket; funded recovery/deficit allocation; persistent severe GHO utilization or a material cash change; a reUSD/sUSDai impairment, redemption interruption or loan-collection deterioration; oracle-age/cap behavior or a market-value mismatch; changed auth/upgrade paths; and a current audit/remediation/incident return. A lower gross bucket alone is not proof of repayment without reconciling units and transactions.

Exact net loss, future compensation, independent issuer capital, complete all-chain controls and a guaranteed cash exit remain unknown. Those unknowns constrain the grade.

## Scope, sources and assessment date

This **November 7, 2026 bounded assessment** covers selected Ethereum/Plasma Liquidity Layer, factory/fGHO dependencies, delegated controls, exact reUSD/GHO and sUSDai/GHO oracle paths, and Plasma vault30 absorption. Arbitrum, Base, Polygon and BNB badges represent documentary deployment inventory; current controls, cash and markets there were not refreshed. Same-address deployments on different chains are distinct contracts, and Ethereum cash is not automatically available to Plasma withdrawals.

DEX v2, Money Market, Lite/Lite USD and partner integrations have separate implementations and boundaries. Documentary addresses and audits do not automatically transfer this core-lending grade to those products. Sui and Solana work is outside this EVM assessment. Bounded tick views are not full or individual-position coverage. Underlying Re/USDai observations keep their own earlier dates.

The report was created **November 2** and substantively reviewed **November 7** within that bounded scope. Financial pins are Ethereum **26,356,922 / November 6 16:11:35 UTC**, Plasma **37,038,203 / 16:11:43 UTC**. Security pins are Ethereum **26,356,906 / 16:08:23 UTC**, Plasma **37,038,008 / 16:08:28 UTC**. The Plasma38 addendum uses the same earlier security pin. The later assessment and publication dates do not refresh measurements or certify current issuer solvency or every deployment.

Scores are higher-is-safer: **Smart Contract 7.5, Economic 6.0, Project 6.5, Overall 6.0**. Overall is a holistic assessment below the **6.67** three-axis mean. The Economic and Overall assessments were 6.5 on November 2; the November 7 grades reflect funding pressure, concentrated credit, marked-oracle versus cash-exit risk and unresolved absorption. No realized lender haircut is assumed. Stronger runtime correspondence and corrected incident acknowledgment do not turn those economic findings into an upgrade. This is a protocol assessment, not fGHO insurance, an asset-specific grade or an all-chain clearance.

Examined source repository pin: `404d73f91e6806f881f8dabeb30494f93f9e99b7`. Selected evidence and assessment versions are retained as page provenance. Detailed source captures and canonical research are not exported.

## Revision history

- **November 7, 2026:** Bounded Ethereum/Plasma assessment; Economic and Overall 6.0, dated absorption and control/oracle evidence, corrected incident acknowledgment.
- **November 2, 2026:** Initial protocol report.

</div>
