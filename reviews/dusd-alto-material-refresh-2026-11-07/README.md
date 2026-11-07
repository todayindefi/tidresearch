# DUSD / Alto material staging refresh — November 7, 2026

Updated existing `src/content/reports/dusd-alto-retail.md` and retained slug `/reports/dusd-alto/`, exact Ethereum token `0x63d74d22e689c715a04f2c13962b1f77f443d35b` and canonical `alto/dusd-alto`. No duplicate asset/protocol report. The current source SHA is **3f0294f5968e30a9122f0a7eef73bd8b887235a6594fea0e6086dc9248f113af**; assessment **dusd-alto-2026-11-07-v2**; evidence **sha256:7032ea7b8faccd3f34a8a367cc9c662ab8c4d252ffbd868cd2ff32a943c214b1**. Authored source and immutable evidence byte hashes were checked.

Scores: Stability **5.5**, Backing **5.0**, Liquidity & Exit **5.5**, Dependencies **4.5**, Contract & Admin **5.0**, Issuer **4.5**, Overall **4.5**. Backing and Overall fall by 0.5, all others retained. Issuer remains provisionally retained from September 21; November 7 is the factual/interpretive review. Report creation remains the existing TIDR **September 21**, rather than copying the source's September 20 creation metadata. Assessment/review is November 7 within its stated bounds.

The risk narrative is now treasury LP credit rather than historical predominant USM reserves. The selected issuance anchor is approximately 83% treasury credit, 12.4% USM and 4.6% other. Convex stake reconciles LP custody; zero direct LP was a reader artifact, not a loss. Own DUSD is circular, fixed one-LP/one-nominal-DUSD marks are not external USD NAV, and no aggregate external coverage ratio is established. Single-account credit, nominal LTV/foreclosure limits, governance recovery and conditional fee-mint-before-burn headroom risk are explained without claiming currently blocked repayment, realized loss, public liquidation failure or funded bailout.

Current 24-hour delay, no enforced positive floor, correlated Safe owners and individual-owner gated halt/freeze versus separate quorum actions remain distinct. Non-proxy token does not imply immutable USM/credit modules. Permissioned USM settings do not establish ordinary-holder access or an exhaustive sole-swapper census. Quotes are supply-bounded sampled-size floors, not public float or funded settlement. Saved onward hops, all-in/own-rate/gas measures, mutable route permissions and custody/holder legal limits remain explicit. Foundation Cayman software-provider and Mesh Panama interface roles do not establish a corporate cash obligor or legal priority.

Clocks: selected backing **November 7 03:54:25 UTC**, Ethereum **26,360,414**; Security **02:39:35 UTC / 26,360,048**; retained quote output **November 6 23:47:05 UTC**, separate provider/mixed-pool clocks; venue census **November 7 02:40:31 UTC**. Earlier LP observations are not mixed into the selected anchor. BM dashboard delivery/conformance remains a separate state; this report does not certify its deployment or modify BM grades.

## Validation

- Full schema/prebuild/build: **116 pages**, no new route. Only DUSD plus its homepage/report-index listing cards change; all other main content preserved.
- Source SHA, immutable BM snapshot, seven grades, exact token, retained aliases, creation date, review date and no-production flag pass. No stale market-cap/float/old ratio/current one-hour claim or private source material is carried into public HTML.
- Local and served browser checks at **1440 / 390 pixels** verify body/sidebar/index grades, version IDs, clocks, credit/recovery/oracle/authority/legal/quote limits, no warning stack, privacy, no document overflow and exact served-build parity.
- Seven primary URLs checked: terms/risk disclosure/audit repository HTTP **200**; four Etherscan token/contract-source URLs block automated checks with HTTP **403**. Address identity and retained source evidence remain pinned; successful links do not refresh observations.
- Local browser QA uses a temporary localhost-only server and closes it in `finally`; no persistent preview is retained.
- No private profiles/packages/messages/holdings are exported; no BM dashboard/job/transaction or production deployment is performed.

See [source adoption](source-adoption.json), [release boundary](release-boundary.json), [local checks](local-checks.json) and [sources](source-links.json). Deployment/served acceptance follows. Changes remain uncommitted.

## Served acceptance

Deploy `6aeeb5fb2c7362dd1a9a1edd` serves [DUSD staging](https://staging.tidresearch.com/reports/dusd-alto/). Both live viewport cases pass; all 99 asset/protocol report bodies match the build. Only DUSD and its listing cards change, with 98 other report bodies preserved. Source SHA still matches; production deploy is unchanged and DUSD remains HTTP 404 there. See [acceptance and versions](acceptance.json), [live checks](staging-checks.json), [preservation](served-preservation.json) and [deploy receipt](staging-deploy.json). Changes remain uncommitted.

## Scoped Git handoff

Commit/push statements in the acceptance receipts describe their deployment-time state. The completed report and these validation records are included in the dedicated `staging/fluid-dusd-refresh-2026-11-07` branch based on `origin/main`; unrelated local commits and working-tree changes are excluded. Both reports retain `production: false`. No deployment is performed by this Git handoff.
