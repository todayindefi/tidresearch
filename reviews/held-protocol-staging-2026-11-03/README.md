# Held protocol reports — staging, November 3, 2026

Dedicated staging site: https://staging.tidresearch.com/protocols/
Deploy: 6ae9ee82bd8b4e1a97e91d87, Netlify site 2da6f038-beda-46a5-bcbb-497156b816e4 (tidresearch-staging).

## Sources and scope

Consumed riskAnalyst's held-protocol-risk-staging-tidresearch-2026-11-03 handoff and all 12 current authored reports. Every report hash matched report-delivery.json. Filled prerequisite profile snapshots were parsed and SHA-256 matched against profile-prerequisite.json before authoring. Boros uses the researched Pendle component, with a separate report and grades. No TID Capital content was added, changed or deleted.

Source validation and the exact score/date contract are recorded in source-validation.json and content-contract.json. Root scores and verification dates match the delivery contract. Assessment depth and original source assessment dates are retained. November 2 verification fields for Aave/Morpho/Euler are expressly documentary/news scope, not new whole-report audits. Six older reports retain their older whole-review dates and provisional scores; the three initial reports retain bounded provisional scope.

## Changed implementation paths

- src/content/protocols/lighter.md — new
- src/content/protocols/zama.md — new
- src/content/protocols/boros.md — new
- src/content/protocols/beefy.md — new
- src/content/protocols/convex.md — new
- src/content/protocols/ipor.md — new
- src/content/protocols/superform.md — new
- src/content/protocols/neverland-money.md — new
- src/content/protocols/pendle-v2.md — new
- src/content/protocols/aave-v3.md — updated existing page
- src/content/protocols/morpho.md — new
- src/content/protocols/euler.md — new
- src/lib/chains.ts — display names for Lighter and Metis already in source chain scope; no additional assessed deployments inferred.

The existing collection, Protocols index, aliases, detail layout and production gates are reused. No dashboard, scraper, producer, score recomputation or section gate change. Optional live TVL/audit booleans and internal topology metadata are omitted rather than promoted from old or documentary flags. Beefy's unsupported protocol-axis chain override is preserved as explicitly historical/provisional prose (Contract5.0/Economic4.5/Project5.0/Overall4.5), rather than an incompatible asset-axis override.

Public prose is reader-first, with three explanatory protocol axes, dated figures, source/scope notes and short revision history at the end. Internal paths/worklists, personal position values and raw wallet/signing addresses are excluded. Public deployment/register URLs retain primary evidence. No routine warning icons or alert blocks were added. Material unassessed-deployment warnings remain in the relevant Aave/Morpho/Euler/Pendle reports and those chains are not added to scored badges.

## Validation

- Required prebuild checks and Astro schema/build pass: 108 staging pages.
- Production-mode build passes: 56 pages. All 12 routes, the Protocols index and protocol sitemap entries are absent. Every report remains production:false. See build-gates.json.
- All four scores and source verification/revision dates match the delivery contract. Original assessment depth is retained; authored Overall is displayed without imported weights.
- All 70 unique source links returned HTTP200; see source-links.json. Provider endpoints support the explicitly dated observations, not an assertion of live numeric parity.
- Local Chromium: all 12 reports at1440px and390px; 24 report renders and24 index-card checks passed. Correct scores, November3 review date, provisional status, exact built-content match, no page overflow/iframes/private raw addresses/browser errors; internal report cross-links resolve. Screenshots and local-browser-checks.json retained.
- Source bodies are standalone public adaptations, not a claim of fresh security/financial diligence. In particular LLP/ADL and bridge authority, confidential wrapper/decryption layers, Boros2-of-3/version gaps, Superform Ethereum/Base/PT distinctions, Neverland's historical timelock and net/gross accounting, and remote deployment gaps remain explicit.

## URLs

- https://staging.tidresearch.com/protocols/lighter/
- https://staging.tidresearch.com/protocols/zama/
- https://staging.tidresearch.com/protocols/boros/
- https://staging.tidresearch.com/protocols/beefy/
- https://staging.tidresearch.com/protocols/convex/
- https://staging.tidresearch.com/protocols/ipor/
- https://staging.tidresearch.com/protocols/superform/
- https://staging.tidresearch.com/protocols/neverland-money/
- https://staging.tidresearch.com/protocols/pendle-v2/
- https://staging.tidresearch.com/protocols/aave-v3/
- https://staging.tidresearch.com/protocols/morpho/
- https://staging.tidresearch.com/protocols/euler/

## Isolation

Deployment artifact: /tmp/held-protocol-staging-build/dist, built from a clean HEAD archive plus these12 reports and chain-display labels. Unrelated local sfrxUSD/dashboard edits and the pending frxUSD shared-evidence drafts are excluded. The already staged Royco report is preserved from HEAD. No production deployment, commit or push is made by this task.

Served staging acceptance completed: all12 URLs returned HTTP200; Chromium passed24 report renders and24 index-card checks at1440px/390px, including exact built-content match, four score displays, review date, provisional label, cross-links and no overflow/browser errors. See staging-browser-checks.json and staging screenshots. All70 source URLs returned HTTP200. This return supplies the staging URLs and evidence for downstream handoff review.
