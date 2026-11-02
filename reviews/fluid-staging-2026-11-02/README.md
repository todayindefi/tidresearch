# Fluid staging review — November 2, 2026

URL: https://staging.tidresearch.com/protocols/fluid/

Created from the November 2 riskAnalyst report and handoff. DeFiAnalyst was used for provenance comparison: imported older incident/control facts were not treated as independent corroboration. Internal paths, workflow instructions and private research records were omitted from the public page. Current verified Ethereum observations, dated historical incidents and unresolved questions remain distinct.

Scores: Contract 7.5; Economic 6.5; Project 6.5; Overall 6.5. All are higher-is-safer. Explicit production:false. The protocols section is also disabled in production by src/lib/stage.ts.

Changed implementation paths:
- src/content/protocols/fluid.md
- src/pages/protocols/[...index].astro (pass aliases to search)
- src/components/islands/ReportsFilter.tsx (search optional aliases)

Deployment uses an isolated git-archive of HEAD plus these three files, excluding unrelated local edits. Only Netlify site 2da6f038-beda-46a5-bcbb-497156b816e4 (tidresearch-staging) was targeted. No commit or push performed.

Validation: required prebuild checks and Astro build passed (96 pages). git diff --check passed. Optional npm run check found five existing type errors: three implicit-any errors in RiskSidebar, and two assessment_type dependency union mismatches in report/protocol index props. None is introduced by alias search.

Served Chromium checks and screenshots are retained here. Desktop 1440px and mobile 390px; all four scores agree between hero, sidebar and body. Fluid and Instadapp searches each find the report. No browser JavaScript errors. Mobile authority table is contained in an accessible horizontally scrollable region.

Source links: 12 HTTP 200 responses, including the MiCA URL redirect to its PDF; four Etherscan links returned HTTP 403 to the automated client and remain unverified by that check. Snapshot HTTP 200 checks establish application reachability, not a replay of the underlying vote. See source-links.json. No current incident reconciliation or complete authority/audit mapping is claimed.
