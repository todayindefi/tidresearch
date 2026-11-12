---
asset: DUSD (Alto)
slug: dusd-alto
aliases:
- Alto DUSD
- Alto Money DUSD
- Alto Protocol DUSD
chains:
- eth
category: stablecoin
peg_mechanism: Treasury credit-line issuance against Convex-staked DUSD/frxUSD LP,
  permissioned frxUSD stability module and smaller isolated mint markets
assessment_type: full
last_verified: '2026-11-07'
last_revised: '2026-11-11'
peg_mechanism_score: 5.5
backing_score: 5.0
underlying_score: 4.5
liquidity_score: 5.5
structural_score: 5.0
issuer_score: 4.5
overall_score: 4.5
issuer: DUSD corporate issuer/repayment obligor unestablished; Alto Foundation is
  disclosed software provider
audited_reserves: false
axis_frame: six
audience: retail
date: '2026-09-21'
production: false
featured: false
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-source-report="3f0294f5968e30a9122f0a7eef73bd8b887235a6594fea0e6086dc9248f113af" data-assessment-version="dusd-alto-2026-11-07-v2" data-evidence-snapshot="sha256:7032ea7b8faccd3f34a8a367cc9c662ab8c4d252ffbd868cd2ff32a943c214b1" data-assessment-date="2026-11-07" data-canonical-project="alto" data-canonical-component="dusd-alto">

# DUSD (Alto) — Risk Report

**High risk · 4.5/10 · Bounded Ethereum assessment**

Dollar-denominated Alto token · Treasury credit line, permissioned stability module and smaller mint markets

## Summary

Alto DUSD targets one dollar through treasury support, secondary liquidity and several issuance modules. The selected November 7 backing observation shows issuance dominated by one treasury credit line against Convex-staked Curve DUSD/frxUSD LP, with a smaller permissioned frxUSD stability module and other mint markets.

The staked LP position reconciles, but part of its underlying is DUSD itself. A fixed nominal LP oracle is not independent USD net asset value, and recovery depends on governance rather than ordinary public liquidation. Concentrated credit, circular collateral, discretionary recovery and conditional cash access are the central risks.

The assessed token is Ethereum [Alto DUSD](https://etherscan.io/token/0x63d74d22e689c715a04f2c13962b1f77f443d35b), `0x63d74d22e689c715a04f2c13962b1f77f443d35b`, canonical **alto/dusd-alto**. Dialectic DUSD, dTRINITY dUSD and legacy DeFi Dollar are different assets. sDUSD is a separate share product, and ALTO is not assessed here. Resolve venues and balances by exact address rather than ticker.

## 1 · Stability — 5.5

DUSD is denominated against $1, but the observed operational anchor remains treasury action and secondary-market liquidity rather than a verified public par-redemption promise. The frxUSD stability module is permissioned. Security verified enabled/unfrozen/unseized state and the treasury candidate's access at its pin; that does not give ordinary holders access or prove exhaustive current swapper membership.

The active USM price ratio was 1:1 against frxUSD, with zero fee strategy at the selected observation. The current strategy has configuration roles: the ratio is a measured setting, not an immutable guarantee. Historical evidence that the treasury was the only swapper must retain its original date; it is not a fresh universal holder census.

Issued DUSD also comes from the designated treasury LP credit line and smaller mint markets. Alto's internal nominal DUSD valuation is not an independent market-price check. Historical narrow peg deviations support the observed record but cannot prove stress redemption or loss protection.

## 2 · Backing — 5.0

Most DUSD issuance is a treasury credit line secured by staked DUSD/frxUSD LP. The smaller frxUSD stability module and other mint markets have separate collateral and access conditions. Own DUSD inside the pledged LP makes part of the collateral circular.

### Dated issuance mix

Backing output timestamp November 7 **03:54:25 UTC**, reported Ethereum block **26,360,414**, is distinct from Security's block **26,360,048 /02:39:35 UTC** and retained quote clocks. At the backing anchor:

| DUSD issuance source | Rounded amount | Share of measured supply |
|---|---:|---:|
| Permissioned frxUSD USM | 223,113 | 12.4% |
| Treasury Convex LP credit line | 1,497,105 | 83.0% |
| Other non-USM modules, including unreadable collateral | 82,764 | 4.6% |
| **Supply** | **1,802,983** | **100%** |

The discovered minter minted amounts and the USM/non-USM liability partition reconcile to supply to the wei. Approximately 1,941 DUSD of that liability has unknown collateral. Zero liability residual verifies that specific accounting identity; it does not establish exhaustive issuance-path security, collectible collateral or a global reserve ratio.

### The credit line is not a generic overcollateralized CDP

Market `0x6b3458c87cd38aefa6a5d059eb19f609420dd852` is a single-account **AltoConvexCreditLineMarket**. Its credit account, fee recipient and reward recipient are the treasury Safe. The position's roughly 2.385M LP shares reconcile to the market's Convex reward-pool balance. A zero direct LP balance reflects staking, not missing collateral. Credit-limit accounting does not represent deposits supplied by third-party lenders.

The oracle fixes **one LP unit at one nominal DUSD**. It does not read the Curve pool's independently realizable NAV, frxUSD/USD price or an executable cash recovery. The configured 80% maximum LTV and 90% foreclosure threshold use that nominal mark. Comfortable marked headroom is therefore not equivalent to independently valued external coverage.

Look-through at the backing anchor allocates approximately **1.549M frxUSD and 0.836M own DUSD** to the pledged LP. These are pro-rata stored pool balances, not executed withdrawals. Own DUSD is circular and excluded from external backing. Adding underlying balances to the LP mark would double-count collateral, and treasury LP is not automatically unencumbered cash. No reliable current aggregate external collateral ratio is established.

### Recovery, encumbrance and conditional repayment

Ordinary collateral removal must preserve solvency at the configured mark. The matched credit-line implementation does not provide ordinary public liquidation; its liquidation-engine address is zero. Governance can foreclose above the nominal threshold, transfer collateral into its recovery process and record bad debt; later settlement burns recovered DUSD. Administrative power is not proof of realized collateral recovery, holder legal priority or a guaranteed bailout.

Repayment accrues fees and can mint claimable fees **before burning repaid DUSD**. If those fees exceed available minter-ceiling headroom, the repayment can revert before its burn frees headroom. September audits acknowledge headroom-related conditions, but audit-commit-to-live-build equivalence and current financial blockage/headroom are not established. Current repayment headroom and blockage remain unverified. Public-liquidation failure conditions do not transfer automatically to this credit line; governance foreclosure follows a different path.

The USM itself still holds frxUSD corresponding to its issued DUSD at the selected observation, but that is only one tranche. CDP collateral, staked treasury LP and issuer-reported treasury assets are not a common freely claimable reserve. Seizure rights and separate burning remain material controls.

Public source references: [credit-line contract](https://etherscan.io/address/0x6b3458c87cd38aefa6a5d059eb19f609420dd852#code), [fixed LP oracle](https://etherscan.io/address/0x6ed6f809abede70a2f13a828ec59effe2d197bb7#code), [frxUSD USM](https://etherscan.io/address/0x1bd08b43d1579881cfad0a35aeea5b547dbe4c91#code). The selected producer/Security observations bind the reported current state; a source listing by itself does not certify financial recovery or audit correspondence.

## 3 · Liquidity & Exit — 5.5

Ordinary holders principally exit through secondary markets because the frxUSD stability module is permissioned. The meaningful observed venue remains Curve DUSD/frxUSD `0x104d6a1b97a6cef88d905d7b865a378d90be932a`. A current exact-token venue census does not establish a complete economic-holder or wrapper-ownership census. Pool TVL is not sellable public float, available cash or independent backing. Credit-line encumbrance affects LP withdrawal and recovery.

Retained quote output is dated **November 6 23:47:05 UTC**, with per-rung/provider and mixed pool clocks. The separate venue census is **November 7 02:40:31 UTC**. The existing indicative DUSD-to-USDC ladder includes an observed 1M-DUSD request yielding about 998,996 USDC before gas, assuming nominal DUSD and USDC reference values. This is a modeled route quote, not a funded settlement or a promise that 1M is freely circulating. Nominal-reference all-in cost, added rate impact versus the route's own small-size baseline, and gas are different measures; the before-gas output does not combine them into an executed all-in fee.

The retained depth observation is an **observed quote-size floor bounded below recorded supply**. Mathematical crossings above total minted supply remain separate curve context. The residual of supply outside one pool is not current economic public float: protocol balances, lending claims, treasury ownership and pledged/staked LP require look-through. Exact public float remains unavailable.

The onward cash route must follow current quoted hops, which can vary by size. The saved example uses frxUSD→USDS→USDC after the first Curve hop. A historical direct-Frax conversion route does not establish current eligibility, free conversion or available cash. Current custodian eligibility, cash, fee/minimum and redemption limits are unestablished; some route models have mixed underlying pool clocks. A quote does not close converter permissions, minimum-out, funding or settlement.

## 4 · Dependencies — 4.5

frxUSD remains both an important external asset and the observed exit venue's other leg. The LP credit line adds a material custody and recovery dependence on Curve and Convex, with Alto treasury/governance as designated credit-account and recovery actors. Smaller mint markets have their own collateral/oracle dependencies. Isolated assets cannot automatically absorb another module's shortfall.

The main correlated stress path is clear: frxUSD or pool stress can weaken both collateral recovery and the secondary exit while own-DUSD marks remain nominal. Pool look-through describes exposure; it does not establish an additional independent reserve. Existing frxUSD asset research retains its own source clocks and is not refreshed merely by this report. No independent diversification protection is established by overlapping representations.

## 5 · Contract & Admin — 5.0

The base DUSD token is non-proxy at the checked pin, but this does not make the whole system immutable. The credit-line and USM implementations are upgradeable and controlled by the timelock. Security matched selected explorer-verified source/runtime and the linked custody library; this is narrower than independently reproducing audited builds or closing every implementation/control path.

At the November 7 Security pin, the minimum timelock delay is **86,400 seconds (24 hours)**, superseding the historical one-hour setting. The delay-update logic has no enforced positive floor. Governance and treasury are 4-of-7 Safes; the pauser Safe has the same owner set. Shared owners do not provide independent governance layers.

The effective emergency gate remains one current pauser-Safe owner for permitted controller actions, subject to registry/target gates. It is a halt/freeze surface, not arbitrary token movement; the controller has no unpause or seizure entry point. Separate direct Safe roles can have quorum-based actions. An enabled emergency mechanism does not guarantee recovery or a usable holder exit.

The USM is permissioned and was not seized/frozen at the Security pin. Matched `seize` can move underlying to the treasury while issued DUSD remains until a separate burn. Configuration and role candidates were checked, with index throttling and incomplete enumeration explicit. The full OFT peer/global issuance graph, credit delegates and upstream Curve/Convex control graphs were not closed.

The longer current delay improves notice, but upgradeable credit/custody surfaces, correlated operators, emergency gates, mutable configuration and unresolved alternate paths prevent a broad safety upgrade. It is not a claim that any one key can seize funds.

The [audit repository](https://github.com/altomoney/security-review-engagements) lists twelve engagements. Its broad statement that all findings are addressed must be read alongside the reports' acknowledged conditions. Audit count is not a clean-finding attestation, a financial audit or proof that every current runtime matches the reviewed version.

## 6 · Issuer — 4.5

[Foundation terms](https://www.altofoundation.org/legal/terms), revised October 22, identify Alto Foundation as a Cayman software provider and Mesh Interface Corp. as the separately operated Panamanian interface. These are disclosed roles, not independently verified registrations, identified directors/signers or a product-specific corporate repayment undertaking. Current Foundation and interface terms have different legal/access scopes; neither should be replaced by underlying frxUSD holder rights.

The [risk disclosure](https://www.altofoundation.org/legal/risk-disclosure), revised October 19, expressly declines a required refund, repurchase or redemption undertaking. That declined undertaking does not establish that no legal remedies exist elsewhere; the unresolved gap is an established unconditional DUSD cash obligor and enforceable holder priority. sDUSD's technical redemption into DUSD does not close it.

Corrected party/jurisdiction disclosure improves transparency, but principals, registration, contractual repayment and financial assurance remain unresolved. Audits, peg stability and access exclusions do not determine issuer credit quality. No current comprehensive incident-free record is asserted. The transparency report is historical issuer reporting, not an independent current reserve/solvency opinion.

## What to watch

Reassess on material issuance/collateral shifts, independent external LP valuation and recoverability, a verified repayment-headroom failure, changed foreclosure or USM access, seized/frozen state, changed timelock/authority, actual stressed cash exits or new enforceable issuer obligations. Routine supply, pool and quote changes do not automatically change the grade.

## Sources, scores and review scope

The report was created **September 21, 2026** and received a **bounded November 7 assessment**. Selected backing output is **November 7 03:54:25 UTC**, Ethereum block **26,360,414**. Security uses **November 7 02:39:35 UTC**, block **26,360,048**. Retained quote output is **November 6 23:47:05 UTC**; provider and mixed pool clocks remain separate. Venue census is **November 7 02:40:31 UTC**. Earlier 01:52/02:53 LP readings are not mixed into the selected backing anchor. Publication and assessment dates do not refresh those observations.

Scores are higher-is-safer: **Stability 5.5, Backing 5.0, Liquidity & Exit 5.5, Dependencies 4.5, Contract & Admin 5.0, Issuer 4.5, Overall 4.5**. Overall is a holistic assessment below the **5.0** axis mean. The earlier Backing/Overall judgments were **5.5/5.0**; their November 7 values reflect the changed concentrated credit/recovery structure, without assuming a measured loss. Other grades are retained. Issuer 4.5 retains the September 21 judgment provisionally after the November 7 factual/interpretive review, without an audit or peg-stability credit uplift. Redemption is included in Liquidity & Exit, not an extra scored axis.

No independent aggregate external backing ratio, current economic public float, current minter-headroom blockage, complete OFT/global-control graph, all-market audit-build equivalence or actual repayment/cash-exit execution is established. Current headroom and blockage are unverified. Audit acknowledgments do not establish that all findings are fixed in the deployed build. The underlying token's non-proxy form does not make the credit line or USM immutable.

## Revision history

- **November 11, 2026:** Editorial simplification; November 7 assessment, evidence dates and scores retained.

- **November 7, 2026:** Bounded material backing, recovery, authority, legal and exit-route refresh; Backing 5.0 and Overall 4.5.
- **September 21, 2026:** Report creation and original issuer-score judgment.

</div>
