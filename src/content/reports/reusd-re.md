---
asset: "reUSD (Re Protocol)"
slug: "reusd-re"
aliases: ["reUSD (Re Protocol)", "Resilience reUSD"]
chains: ["eth", "avax", "arb", "base", "megaeth", "katana", "bnb", "ink", "plasma", "bera", "monad", "tempo", "sol", "sei"]
# Sei added 2026-10-13: Re's current official smart-contract registry now
# explicitly declares the deployment. This is a declared footprint, not a
# claim that authority or executable exit has been verified on every chain.
category: "vault-share"
assessment_type: "full"
date: "2026-05-19"
last_verified: "2026-08-25"
# Scope-limited pass 2026-09-06: sleeve composition re-measured from Re's
# metrics endpoint and the report re-framed onto the six-axis core. The
# structural material was re-scoped, not re-read, so `last_verified` HOLDS at
# 2026-08-25 deliberately — do not bump it on a sweep.
last_revised: "2026-10-13"
featured: false
# MOVED BACK TO STAGING 2026-08-31, deliberately — do not re-promote on a
# freshness or completeness sweep.  The site owner's rule is that THIS REPORT
# AND ITS DASHBOARD PROMOTE TOGETHER, gated on a puppeteer verification pass.
# Status 2026-09-06: one blocker CLEARED — axis 5 (Contract & Admin) now
# renders on backing-monitor for `?asset=reusd-re`. The other has not and
# largely CANNOT: Re publishes combined reUSD + reUSDe reserves with no
# asset-attributed denominator, so no collateral ratio is derivable for reUSD
# alone.  That is an honest PERMANENT blank, not a pending measurement, so
# the gate stays shut and this report stays staged.
#  `?asset=reusde-re` renders (bm confirmed in-browser 2026-10-04). Reachable
# by direct link only — not on their index grid, which needs `published: true`.
# TO PROMOTE: both dashboards complete and verified IN A BROWSER, then flip
# both reports together. Checked before demoting: no `production: true` report
# links here, so nothing 404s on prod (only frax.md links in, and it is staged).
production: false
issuer: "Resilience BVI Ltd."
market_cap_approx: 299720000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Order matches the dashboards exactly.
#  `structural_score` 6.0 -> 4.0 and `overall_score` 6.0 -> 5.0 are a
# RE-SCOPING, NOT A DETERIORATION. No adverse evidence arrived. The old
# "Structural 6.0" was silently pricing THREE of the six axes — legal
# structure (now Issuer 5.5) and the off-chain dependency stack (now
# Dependencies 5.0) alongside contract and authority. Axis 5 is Contract &
# Admin ONLY, and what remains there scores 4.0. The overall was set
# against four axes and the report now has six.
#  NOT recorded in the revision history, deliberately: a re-scoping of
# which axis carries a fact is a change to US, not to the asset. The body
# states the six axes as current method; it does not diff itself.
# backing_score 5.0 is NEW. Collateral is good in QUALITY and NOT
# diversified — measured 99.05% sUSDe, T-Bills $0. The concentration is
# priced on axis 4, not here, or it would be double-counted.
#  THE ATTACHMENT-POINT BASIS FOR THIS SCORE IS WITHDRAWN (2026-10-04,
# riskAnalyst retirement of 2026-09-20). The 9.66% / 7.94% / 11.06% ratios
# are RETIRED as current metrics: Re publishes NO current contractual
# numerator for capital subordinated ahead of the senior tranche, so no
# attachment percentage is computable today.
#  AND THE TWO JUNIOR FIGURES ARE NON-INTERCHANGEABLE, not merely
# unreconciled: ~$77M is a JUNE 2026 BALANCE-SHEET figure, ~$20M is a
# LOSS-WATERFALL SCENARIO LAYER. They measure different quantities, so
# "size to the smaller one" is a CATEGORY ERROR rather than conservatism —
# it yields a precise number for a quantity nobody publishes.
#  5.0 is therefore a PROVISIONAL HOLD, not a derivation. What survives
# is the DIRECTION through 2026-09-06 — the cushion thinned on both bases
# — and the cause: DILUTION BY GROWTH, NOT A WORSE BOOK. No claim event,
# combined ratio still 92%, junior layer measurably FLAT (+0.4%) while the
# senior grew.  Our 5.0 and riskAnalyst's 5.0 agree; the published BASIS
# was what diverged, which a score-sync check cannot see.
# underlying_score 5.0 is NEW and renders as DEPENDENCIES: three-channel
# Ethena exposure plus the off-chain stack.
# issuer_score 5.5 is NEW and is SHARED WITH reusde-re — same entity, so two
# pages showing 5.5 is correct, not duplication.
#  AXIS 3 IS THE WORSE OF THE TWO LEGS, NEVER THE AVERAGE. Venue depth is
# 5.0 and primary redemption is 4.5, so the axis is 4.5 — redemption is the
# worse leg because a U.S. person has no primary channel at all.
# `redemption_score: 4.5` is RETAINED but no longer rendered; it is the
# evidence for axis 3, and both legs are named in prose under that heading.
axis_frame: six
# PARKED: riskAnalyst's last_verified is HELD at 2026-08-27 by their own deliberate
# note — the 2026-09-20 pass did not close authority across all declared networks and did not
# establish a current contractual Re-capital numerator.  Those two gaps, not elapsed
# time, are what a whole-body verification needs [owner: riskAnalyst] [since: 2026-09-20]
# PARKED: the EOA holding CANCELLER_ROLE is published WITHOUT its address — only a
# 10-char stub exists and this TimelockController is not AccessControlEnumerable, so the
# holder set cannot be derived on-chain either. Needs the full address re-sourced
# [owner: riskAnalyst] [since: 2026-10-04]
volatility_score: 7.0
backing_score: 5.0
liquidity_score: 4.5
underlying_score: 5.0
structural_score: 4.0
issuer_score: 5.5
redemption_score: 4.5
overall_score: 5.0
#  POINTS AT OUR OWN MONITOR, not the issuer's. This field drives the
# "Open dashboard" CTA, and the CTA should send a reader to the independent
# read rather than to Re's page — Re's dashboard is still cited in the body as
# the canonical source for live metrics, which is the right place for it.
#  The target is STAGED and has no collateral ratio by design. That is
# acceptable only because THIS REPORT IS ALSO STAGED and the two promote
# together; if this report is ever promoted while the monitor is not, this
# field must go back to the issuer URL or be removed.
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=reusd-re"
---

# reUSD (Re Protocol) — Risk Report

**Moderate risk · 5.0/10**

Senior NAV-accruing reinsurance tranche issued by Resilience BVI Ltd.

[Issuer dashboard](https://app.re.xyz/reusd) · [Independent backing monitor](https://todayindefi.github.io/backing-monitor/?asset=reusd-re)

## Summary

reUSD is Re Protocol's senior reinsurance tranche. Re capital and the [reUSDe mezzanine tranche](/reports/reusde-re/) absorb underwriting losses before reUSD. Capital supports fully collateralised reinsurance contracts through licensed insurers and a U.S. §114 Reinsurance Trust Account. Yield accrues through NAV appreciation.

At Ethereum block **26,181,031**, October 13 03:58:23 UTC, measured NAV was **$1.1067874545** and Ethereum claims were **$299.720M**. Re's issuer TVL was **$321.291M**, dated October 12 00:00 UTC. The approximately $21.571M difference mixes timestamps and Ethereum claims with issuer TVL whose supply scope is uncertain. It does not establish a reserve deficit or a confirmed API error. Published seven-day simple APY was **7.01%**.

Re declares deployments on **14 chains, including Sei**. The principal constraints are incomplete contractual cushion evidence, primary-redemption exclusion for U.S. holders, and administrative paths beyond the token-upgrade timelock.

## 1 · Stability — 7.0

reUSD accrues against NAV rather than targeting a $1 peg. Its relevant market measure is discount to NAV. The measured NAV history has been monotonic, and secondary pricing generally tracked NAV closely after early-launch discounts.

The October 13 on-chain NAV was **$1.1067874545**. Re annualises seven-day NAV changes linearly; the published **7.01%** simple APY is not directly comparable with a compounded recomputation.

**Risks and limitations.** NAV is sourced from issuer-controlled valuation infrastructure. A smooth series does not establish an independently reproducible or executable mark. Insurance losses can emerge long after policies are written, and restricted redemption can allow market prices to detach from NAV.

## 2 · Backing — 5.0

The loss waterfall runs through reinsurance premiums, Re capital, reUSDe and finally reUSD. Off-chain assets sit within the reinsurance and trust structure, alongside capital available on-chain. The Network Firm provides daily attestations, Chainlink carries Proof-of-Funds information, and Grant Thornton (Cayman) performs the financial audit.

| Issuer measure | October 12 value |
|---|---:|
| On-chain capital | $233.248M |
| Off-chain capital | $183.122M |
| reUSD TVL | $321.291M |
| reUSDe TVL | $21.169M |
| Residual non-tokenised capital | $73.909M |

The residual is the two capital measures less the two token TVLs. It is **23.00% of reported reUSD TVL**; reUSDe is **6.59%** on that same senior-TVL denominator. Residual capital has remained broadly flat as senior TVL grew, thinning the relative layers beneath reUSD.

Re's approximately $77M June 2026 product-page figure describes balance-sheet equity. Historical scenario material used approximately $20M for a narrower waterfall layer. Neither establishes today's contractual amount subordinated ahead of reUSD.

**Risks and limitations.** No current attachment percentage or tranche-specific collateral ratio is supportable from the published data. Combined-program assets are not allocated between the tranches, and attestation does not make off-chain treaties independently observable.

## 3 · Liquidity & Exit — 4.5

Eligible non-U.S. holders can use primary redemption; U.S. holders depend on secondary markets. Current policy permits instant redemption while a chain's buffer exceeds 1% of supply, with a quarterly queue below that trigger. Documented limits include a 1,000,000 reUSD transaction maximum and a 6bp fee.

At Ethereum block **26,181,136** on October 13, InstantRedemption was **unpaused**, paid **sUSDe**, and reported **22,180,337.768096 sUSDe** of remaining daily gross-payout capacity. Total contract-reported capacity was **106,223,711.406236 sUSDe**. Daily/user limits were **20%/10%**, and the fee was **6bp**. Capacity is denominated in the payout token; KYC, wallet usage, transaction limits and execution guards still determine whether a particular wallet can redeem.

The October 12 23:48:30 UTC routed reUSD→native-USDC ladders measured execution-rate deterioration from each chain's $100 baseline:

| Chain | 2% marginal-impact depth |
|---|---|
| Ethereum | **≥$10M tested**; the grid ended without a crossing |
| Arbitrum | **$2.336M–$2.354M** crossing bracket |
| Avalanche | **$5.605K–$5.641K** crossing bracket |
| Base | Invalid quotes; usable depth unestablished |

**Risks and limitations.** These indicative router measurements describe marginal deterioration, not total loss against NAV. They cannot be summed into global exit capacity. Arbitrum's independently computed 50bp and 200bp brackets are inconsistently nested and require producer review. Other deployments remain unmeasured. Ethereum primary redemption adds an sUSDe→USD leg, and measured capacity does not establish access for an arbitrary wallet.

## 4 · Dependencies — 5.0

reUSD depends on Re's reinsurance book, custody and attestation stack, valuation infrastructure, bridge liveness, and the assets used for capital and settlement. Ethena reaches the asset through reserve holdings, the idle-capital yield reference and the measured Ethereum sUSDe redemption payout. Cross-chain distribution uses Chainlink CCIP.

DefiLlama's combined Re program TVL was **$414.963M** at October 13 02:37:59 UTC: **sUSDe 51.96%**, **USDC-labelled assets 46.55%**, **USDT 1.14%**, and **USDe 0.35%**. The adapter records the Avalanche off-chain-assets oracle value under USDC. The USDC-labelled category therefore includes off-chain assets and cannot be read as an on-chain cash allocation.

**Risks and limitations.** These program-wide categories have no tranche allocation and establish no reUSD-only coverage ratio. An Ethena impairment can affect capital, yield and Ethereum settlement together. Off-chain custody, underwriting counterparties and financial attestations cannot be verified solely from Ethereum state.

## 5 · Contract & Admin — 4.0

The canonical Ethereum token is [`0x5086bf358635b81d8c47c66d1c8b9e567db70c72`](https://etherscan.io/address/0x5086bf358635b81d8c47c66d1c8b9e567db70c72). Its token-upgrade path uses a **3-of-5 Safe** through a **48-hour OpenZeppelin TimelockController** at [`0x69dDEa332723cF5407151aAF68B9b076557FCA93`](https://etherscan.io/address/0x69dDEa332723cF5407151aAF68B9b076557FCA93). An independent canceller EOA can veto queued actions; its custody and readiness remain unverified. Role enumeration is unsupported, so the complete holder set is not established.

The current Ethereum NAV oracle is [`0xb45AC37Cc7fF7ec317e7D8C308781ECe431639f6`](https://eth.blockscout.com/address/0xb45AC37Cc7fF7ec317e7D8C308781ECe431639f6). At block **26,181,136**, it returned normal/force bands of **50/150bp**, a **200bp cumulative budget over 14 days**, **36-hour staleness**, a **four-hour minimum force interval**, and a **hard 24-hour markdown delay** with a matching floor. Protection mode was off. These measured guardrails substantially agree with Re's current documented oracle architecture.

Re's registry also describes replacement oracles, CRE/CCIP feed pairs, redemption modules, per-chain controllers and timelocks. The Safe reaches undelayed mint authority, can grant itself ICL upgrade authority without delay, and owns CCIP pools whose configuration is not timelocked. The token-upgrade delay therefore covers only part of the administrative surface.

Re's audit registry lists **Sherlock's July 2026 collaborative review**, **Certora's September 2025 formal verification**, and **Hacken engagements covering NAV Oracle (March 2025), core contracts (November 2024) and DeFi contracts (August 2024)**. Engagement scope is documented.

**Risks and limitations.** Audited-commit correspondence to every deployed implementation and new oracle component remains unverified, including coverage of privileged roles and upgrade paths. Public bug-bounty coverage of these authorities is unestablished. The Ethereum oracle and redemption reads do not close role/selector delays, alternative writers or authority across all 14 deployments. Audits do not constrain immediate administrative reach.

## 6 · Issuer — 5.5

Re's product and legal disclosures identify **Resilience BVI Ltd.**, a BVI FSC-regulated issuer using institutional custody, bank accounts and daily attestation. Holders have limited direct claims on trust assets; the offshore legal structure and restricted redemption access materially affect recourse.

**Risks and limitations.** The trust bank, carrier and cedent counterparties are not publicly identified. Current contractual subordination, accountable principals, governing-law details and dispute procedures were not independently refreshed in this follow-up. Issuer 5.5 is carried from the existing assessment rather than re-derived from a new legal review.

## Suitability

reUSD suits an eligible holder seeking senior reinsurance yield who can tolerate restricted exit and reliance on off-chain institutions. It is unsuitable as a cash substitute or as a position whose plan depends on immediate redemption. For a U.S. holder, chain-local secondary depth is decisive. Leveraged use adds liquidation risk to an issuer-defined mark.

## What to watch

- Contractual capital subordinated ahead of each tranche and changes in the reUSDe/reUSD TVL relationship.
- Wallet-specific primary eligibility, remaining capacity and the complete sUSDe→USD exit.
- Chain-local executable depth, including resolution of Arbitrum's threshold inconsistency.
- Implementation changes, oracle guardrails and authority on every declared deployment.
- Tranche-attributed reserves and reserve-category definitions.
- Browser-rendered confirmation of the backing monitor's current liquidity rating.

## Revision history

- **2026-10-13 — targeted follow-up; scores unchanged.** Adopted the $1.1067874545 on-chain NAV and $299.720M Ethereum claims, with explicit timestamp/scope limits against October 12 issuer TVL. Added October 12 chain-local ladders, pinned Ethereum redemption and oracle controls at block 26,181,136, corrected DefiLlama category interpretation, and restored audit engagement dates and coverage limits. Replaced unrestricted-writer and stale global-liquidity descriptions. The October 2 Healthy 10/10 discrepancy is historical; current rendered verification remains pending. Withdrawn 9.66%/7.94% attachment ratios and historical $20M scenario capital are not current cushion measures. Overall remains 5.0; whole-body verification remains 2026-08-25.
- **2026-10-13 — content-first refresh.** Updated supply, APY, issuer TVL, residual capital and declared Sei deployment; moved revision commentary to history.
- **2026-10-04 — attachment basis withdrawn.** Retired unsupported current attachment percentages and expanded the declared chain list.
- **2026-09-06 — Backing 5.5→5.0 and Liquidity & Exit 5.0→4.5.** Recorded dilution through senior growth and primary-redemption exclusion as the binding exit constraint.
- **2026-08-31 — six-axis migration.** Contract & Admin 4.0, Issuer 5.5 and Overall 5.0.
- **2026-08-27 — supply, NAV and tranche sizes re-measured.** Ethereum-only and issuer-wide quantities were recorded separately.
- **2026-08-18 — audit and upgrade-delay evidence added.**
- **2026-07 — cross-chain distribution moved to Chainlink CCIP.**
- **2026-06-18 — $RE launched and Season-1 points became claimable.**
