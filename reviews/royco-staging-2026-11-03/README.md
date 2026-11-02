# Royco protocol report — staging creation, November 3, 2026

Report: https://staging.tidresearch.com/protocols/royco/
Index: https://staging.tidresearch.com/protocols/

Canonical inputs: riskAnalyst/reports/royco.md and its November 3 review/decision record; DeFiAnalyst's November 3 Royco profile and primary-document register. Twelve retained DeFiAnalyst source files independently matched the recorded SHA-256 values. Source hashes are in source-manifest.json. The private profile was used for selected public-source facts; internal workflow instructions, source paths, speculative incident claims and private notes are not published in the report.

Scores: Contract5.0, Economic3.5, Project3.5, Overall4.0, all retained provisionally. Original assessment and full verification date August14 retained; last_revised November3. No new on-chain audit or quantitative risk assessment is implied. Source report full-chain follow-up remains open and its security handoff was not dispatched by this task.

Public presentation follows the reader-first style: short summary, product scope, three protocol risk axes, monitoring priorities, sources/scope/score methodology at the end and a short Revision history. It does not impose the six-axis asset rubric. No routine warning icons, embedded dashboard or repeated internal correction commentary. Managed-vault withdrawal-only status is distinguished from direct Day markets, with observation/effective dates separate. Documentary 3-of-5/72h claims and audit counts are not treated as verified deployed controls. First-loss, oracle/market-price and affiliated-Junior-capital distinctions are retained.

Implementation paths:
- src/content/protocols/royco.md
- src/pages/protocols/[...index].astro

The existing Protocols collection automatically indexes the new page. Aliases support Royco, Royco Day, Boyco, srRoyUSDC and related product searches. A discovered index omission is repaired: pass last_revised and sort on the later of revision/verification dates, matching existing asset-index/card behavior. Last reviewed now consistently displays November3, while full verification remains August14 in source and scope prose. Other protocol score/verification values are unchanged.

Chain adaptation: current badges name the four chains in Day scaffolding documentation (Ethereum/Arbitrum/Base/Avalanche), expressly not verified active deployments. The source's wider historical coverage (Berachain/Sonic/Plume/Corn) and its prior Berachain5.0/3.0/3.5/overall3.5 assessment are retained in dated prose. They are not silently converted into current chain overrides. Corn has no existing chain-label mapping; no unrelated registry expansion or current deployment claim is introduced. No unsupported verification_scope/score_status metadata is sent to a schema that would drop it; these qualifications are visible prose. No current TVL, APY, team/incident assertions or audit coverage is fabricated from old flags.

Validation: required prebuild and Astro build pass (97 staging pages). Production-mode build passes (56 pages) and excludes Royco, the Protocols index and Royco sitemap entry. Scores and all three source dates match riskAnalyst. git diff --check passes. Eight direct source URLs return HTTP200. Local Chromium checks pass at1440px and390px: all four scores, provisional status, dates, no page overflow/iframe/JavaScript errors; four index search variants each find exactly one Royco card. Screenshot and browser-result artifacts are retained here.

Deployment uses an isolated git archive of HEAD plus the two implementation files. Unrelated working-tree content, including the pending sfrxUSD/dashboard changes, is excluded. Dedicated Netlify staging site only:2da6f038-beda-46a5-bcbb-497156b816e4. production:false and the existing production section gate both remain. No production deployment, git commit or push is performed.

Remaining evidence gaps: wind-down effective date/remaining assets/debt and completed withdrawals; current Day/vault authority and delays; market-specific coverage/oracles/liquidity; legal entity/terms and holder remedies. The unchanged provisional scores are not a certification of unchanged conditions.

Served staging validation passed after deploy 6ae8c0ba9497b5724c432937: report HTTP 200, exact main-content match to the isolated build, desktop/mobile scores and dates, all four index searches, no page overflow or JavaScript errors. See staging-browser-checks.json and staging screenshots. Deployment metadata is retained in deploy.json.
