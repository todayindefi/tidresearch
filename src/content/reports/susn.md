---
asset: sUSN
slug: susn
aliases:
- sUSN
- Staked USN
- Noon sUSN
chains:
- eth
category: vault-share
underlying_assets:
- USN
yield_bearing: true
assessment_type: light
axis_frame: six
date: '2026-06-07'
last_verified: '2026-06-07'
last_revised: '2026-11-05'
issuer: Noon
volatility_score: 4.5
backing_score: 3.0
liquidity_score: 3.5
underlying_score: 3.0
structural_score: 4.0
issuer_score: 3.5
overall_score: 3.5
production: true
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-evidence-snapshot="sha256:be2640713db149befe058f25baf0eee5ffb63b8760451f25dcce4398d4247363" data-assessment-snapshot="sha256:e856487b18b6b4a0ad1d6f06677e05b67e0bd4735f1079322b6b54210d0af9a9" data-assessment-status="provisional" data-score-assessed="2026-11-05" data-source-commit="bc9ca9d8f1c23dda155991a7da040be921a67c64" data-canonical-project="noon" data-canonical-component="susn">

# sUSN — Risk Report

**High risk · 3.5/10 · Provisional, Ethereum only**

Yield-accruing USN share · Noon

## Summary

sUSN accrues yield through USN and is not fixed-dollar principal. Unstaking to USN, selling the shares and redeeming eligible USN for supported stablecoins are separate exit paths. The staking and issuer terms permit restrictions and losses that matter alongside the reported reserve portfolio.

The reserve portal reports concentrated FTAC credit exposure and a thin excess of gross reserves over circulation. Those disclosures improve visibility without independently establishing net asset value, unencumbered equity or holder-accessible cash. Primary settlement remains unverified.

The assessed Ethereum token is [sUSN](https://etherscan.io/token/0xe24a3dc889621612422a64e6388927901608b91d), `0xe24a3dc889621612422a64e6388927901608b91d`. Direct underlying: USN. Base sUSN, other remote receipts, PT/SY products and lending-vault positions do not inherit this grade.

## 1 · Stability — 4.5

sUSN is a USN-denominated yield share whose conversion value and final dollar realization depend on underlying assets, access conditions and settlement. Staking terms permit freezes and proportional principal reduction after treasury exchange, custody or strategy failures. [Staking terms](https://docs.noon.capital/7.-terms-and-policies/asset-terms-susn-staking-terms)

The retained November 4 secondary quote collection, **14:29:22–50 UTC**, included a $100,000 market-sized route returning **99,627.421594 USDC** before gas. Added average-rate deterioration was **32.9353 bps** versus the small sample. This indicative route is not a fill, a maximum capacity measurement or continuous evidence of dollar tracking under stress.

## 2 · Backing — 3.0

The Accountable portal snapshot dated **November 4 16:31:05.049 UTC** reports **$39,214,985.68 gross reserves** against **38,759,417.09 USN** at a fixed-dollar circulation basis. The **$455,568.59 arithmetic excess** is **1.1754% of reported circulation**. It is not independently established unencumbered equity or complete net NAV. [Reserve portal](https://noon.accountable.capital:10443/dashboard)

Source buckets reconcile exactly; displayed instrument rows differ by **−$0.01**. Reserve, instrument and deployment views overlap and must not be added as separate backing.

| Selected portal instrument/grouping | Reported USD | Interpretation |
|---|---:|---|
| Fasanara FTAC | 25,105,583.40 | About 64.02% of reported reserves; underlying source last updated November 2 |
| Hyperliquid-related lending/perp/other positions | 9,521,739.50 | Strategy grouping, not independently verified hedge or net risk |
| JAAA | 1,793,074.09 | CLO credit, custody and settlement dependencies |
| Morpho lending | 981,757.74 | Vault, collateral and withdrawal dependencies |
| Euler lending | 461,692.28 | Vault, collateral and withdrawal dependencies |
| Stablecoin-named USDC/USDT balances | 1,345,239.58 | Reported marks, not independently mapped unrestricted holder cash |

This selected summary is not a complete partition; smaller assets and rounding remain outside the displayed rows. About **1.81% impairment of the reported FTAC position alone** would equal the reported excess, holding everything else unchanged. That sensitivity is arithmetic, not a forecast, expected default or verified capital requirement. Other liabilities, valuation changes and legal recoveries can change the outcome.

Proof objects and enclave/Merkle timestamps were retained but not independently cryptographically or attestation-validated. A newer portal retrieval does not refresh older credit marks. Separate **November 3** capital data has a **$99,391.779276710441 category/TVL residual**, while `undeployed.total` is **null**. It is not merged with the portal to create a newer NAV. A separate yield-vault catalogue is excluded because reserve ownership and perimeter are unproven. [Capital data](https://back.noon.capital/api/v1/capital)

Backing 3.0 is a provisional concentration- and valuation-limited judgment. Complete upstream grades and risk-adjusted basket values are unavailable, so no fully derived weighted score is fabricated. Insurance receives no quantitative protection uplift without verified beneficiary, exclusions, limits and recoverability.

## 3 · Liquidity & Exit — 3.5

Primary unstaking produces USN before any final stablecoin delivery. At Ethereum block **26,342,715**, November 4 **16:42:23 UTC**, the handler held **302,992.75533839045571458 USN** and **0 USDC**, with a **604,800-second / seven-day** period. Those are handler balances, not aggregate pending obligations or external cash. [Contract and oracle registry](https://docs.noon.capital/6.-resources/contract-addresses-and-oracles)

The handler implementation pointer matched its historical source namespace, but replacement and configuration remain possible. Its public request interface is user-specific; no private holder requests, eligibility or global institutional queue were queried. Aggregate primary capacity remains unavailable.

Seven-day unstaking is not seven-day final cash. Onboarded primary access, **five-Business-Day** legal terms, extraordinary delays and advertised **T+0/T+5** reserve-unwind capacity have different conditions. They do not establish one blanket delivery deadline. Secondary sale through the indicative route above carries separate execution and gas risks.

The portal’s **$1,345,239.58 stablecoin-named balances** are not proven unrestricted holder liquidity. Its **$1,346,107.72 undeployed classification** overlaps rather than adding more cash. The separately reported **$2,609,008.375291 insurance amount** is neither reserves nor unrestricted liquidity. Custody/title, pledges, policy validity and holder eligibility remain unverified.

## 4 · Dependencies — 3.0

sUSN depends on USN’s concentrated private credit, custody accounts, lending and funding/leveraged strategy exposures, underlying collateral protocols and settlement infrastructure. Portal strategy labels do not independently verify hedging or net loss exposure.

Ethereum USN supply, global circulation and sUSN-held USN have different accounting perimeters and are not additive liabilities. Enabled remote messaging adds defaultISM, rate-limit and representation risks. Insurance eligibility and independent hedge coverage remain unverified; neither a policy label nor named custody establishes broad protection. Remote receipts and Base sUSN require their own assessment.

## 5 · Contract & Admin — 4.0

At the original security pin, Ethereum block **26,342,017**, November 4 **14:22:23 UTC**, the nominal **3-of-5 application owner** could directly change pause, handler and peer settings. Proxy upgrades had a measured **two-day** delay with a configurable **one-day floor**. Immediate application powers and upgrade delay are different control paths.

The handler, Hyperlane/defaultISM, remote, rate-limit and meta-authority branches remain incomplete. Source/runtime matching does not verify every signer, oracle or settlement path, and the delayed proxy path does not make all application changes delayed. The Ethereum grade does not certify another chain’s configuration.

## 6 · Issuer — 3.5

**Noon YBS Issuer Ltd.**, the underlying USN issuer, differs from **Noon Holdco Ltd.**, the staking operator. A valid eligible Verified User redemption creates conditional unsecured USN debt; merely holding sUSN does not establish the same claim. Reviewed BVI/Panama organizational descriptions conflict.

Staking terms permit freezes and proportional principal loss and do not establish direct holder reserve title or a fiduciary relationship. Published BVI arbitration and governing-law terms do not independently establish enforcement or insolvency priority. Issuer/operator separation and conditional unsecured redemption qualify advertised segregation and protection. Named custodians, strategies and insurance policies are not blanket guarantees.

## Sources, score date and evidence scope

Scores were authored **November 5, 2026**: Stability **4.5**, Backing **3.0**, Liquidity & Exit **3.5**, Dependencies **3.0**, Contract & Admin **4.0**, Issuer **3.5**, Overall **3.5**, all provisional and higher-is-safer. Overall is holistic rather than a required arithmetic average; there is no separately counted seventh Redemption score.

Financial observations use Ethereum block **26,342,715**, **November 4 16:42:23 UTC**; security observations use **26,342,017**, **November 4 14:22:23 UTC**. The portal snapshot is **16:31:05.049 UTC** that day, its FTAC source is dated **November 2**, and separate capital data is dated **November 3**. The retained quote collection ran **November 4 14:29:22–50 UTC**. These source, provider, document and retrieval clocks are not interchangeable. Publication does not refresh them. Maintained documentary captures remain the baseline where fresh `.md` retrieval failed.

**June 7, 2026 is historical whole-review context**, not the new score date or complete current assurance. The historical overall was 4.0; the current provisional overall is 3.5 dated November 5. Independent full net NAV, all liabilities, credit/default/title/encumbrance assurance, complete remote and privileged-control closure, holder cash execution and continuous price/NAV stress history remain unresolved. No impairment or insolvency is established by these reporting limits. Reassessment depends on material new financial, control or settlement evidence, not an unchanged portal fetch.

## Revision history

- **November 5, 2026:** Provisional Ethereum six-axis assessment using the selected financial and security evidence.
- **June 7, 2026:** Historical assessment and whole-review verification context.

</div>
