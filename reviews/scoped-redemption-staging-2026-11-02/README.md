# Scoped report corrections — November 2, 2026

Staging-only updates: `/reports/apxusd/`, `/reports/apyusd/`, `/reports/usdat/`, `/reports/susdat/`, `/reports/dusd-alto/` at https://staging.tidresearch.com.

Source intake: riskAnalyst assets apxusd/apyusd, report apyx, and the November 2 six-portfolio acceptance receipts: bm-followup, apyx-receipt-release, apyx-primary-redemption, apyx-conditional-simulation, srusdat-secondary-cash and stakedao-retirement-scope. Stake DAO full handback was used instead of the truncated governance tracker body. Private account amounts, ownership, calldata and raw account simulations were not published.

Changes:
- Active new-redemption receipt NFT; 0.1% non-refundable upfront vault fee separately from the 2.5% receipt fee through day 3, nonlinear decline to zero at day 20; measured Ethereum block/time and mutable configuration retained. Claims pay apxUSD, not USDC.
- Official documentation adoption of Redemption Value supersedes blog-only claims. No executable permissionless primary cash route or holder eligibility inferred.
- PT accounting unit versus vault share, settlement steps and absence of an established mandatory pre-maturity roll/exit deadline for reviewed Apyx PT explained.
- Saturn USDat positive secondary quotes kept distinct from conditional upstream senior-share/bridge/queue path; srUSDat not conflated with sUSDat or token CCIP migration.
- Existing DUSD Stake DAO discussion extended with qualified non-match for reviewed Curve V2 DUSD/frxUSD and USD3/scrvUSD wrappers; incomplete inventory, active-at-check vote and separate principal/reward deadlines retained. No standalone Stake DAO report exists. USD3 report has no existing Stake DAO discussion and was not expanded.

All scores, last_verified and production flags match HEAD for the five reports. Only last_revised advances to November 2. The isolated staging build preserves the earlier staged Fluid report and excludes unrelated working-tree edits. No production site deployment, git commit or push.

Validation artifacts: browser-checks.json, desktop/mobile screenshots, source-links.json, deploy.json. Required prebuild checks and Astro build pass, 96 pages. git diff --check passes. Nine new/used source URLs return HTTP 200; Etherscan blocks the automated client with HTTP 403. Snapshot HTTP reachability does not establish vote outcome or execution. An initial obsolete Pendle documentation path returned 404 and was replaced with the verified official PT documentation URL before final deployment.

Mobile QA caught pre-existing wide tables and address strings in the five affected reports. A per-report content wrapper now confines table scrolling and allows long strings to wrap, without changing shared layout CSS. Local Chromium verification confirms no page overflow at 390px for all five. Final served checks are retained separately.

Final served Chromium results: all five pages HTTP 200 at 1440px and 390px, no horizontal page overflow, no JavaScript errors, November 2 text present and obsolete current blog-only conclusions absent. Served main content matches the final isolated build for every report. Final deploy: 6ae87540fb3b42494b2a0830.
