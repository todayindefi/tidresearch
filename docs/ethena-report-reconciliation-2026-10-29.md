# Ethena report reconciliation — October 29, 2026

Completed report reconciliation following BM's verified source repair and dashboard publication. This supersedes pending-repair and pending-display statements in the earlier report-sync record; the original evidence records remain historical.

## Evidence and publication

Acceptance: RiskAnalyst `specs/handoffs/ethena-repair-publication-2026-10-29.md`; BM `specs/reviews/ethena-repair-publication-2026-10-29/result.json` and `served-sources.json` (25-response manifest).

BM published commit abbf893bff1c9b1d2cbbc1abe1354039bc460701, Pages deployment 40838784648, and verified public JavaScript/source-generated HTML at 2026-10-29T08:00:03.667Z. This was not visual browser QA. Renderer SHA-256: 1275bc3f4ff6e857756d762bbe45100726aec6250abf19885faaca00deb7986b. Index SHA-256: b6852c93517a223159b28779c87d3af29bd3518ab5c75c8a590d0a084a3302a4.

Final TIDR production deploy: 6ae303e4f612ba22548101bf. Actual live https://tidresearch.com/reports/usde/ and https://tidresearch.com/reports/susde/ main content and sidebars exactly match the isolated production build. Prebuild and Astro build pass. Parsed public frontmatter exactly matches its pre-reconciliation baseline, including all dates, scores, overrides and production status.

## Shared interpretation and canonical coordination

RiskAnalyst task 01a181d0-a5b1-7e01-b74d-f9fadae7b191 updated canonical assets/usde.md and assets/susde.md at TIDR's request and reported unchanged frontmatter and passing consistency checks, apart from the existing overdue sUSDe rounding-review exception. TIDR independently compared canonical/public repair status, source clocks, issuer attribution, fee status and later vault quantities.

- Repaired generation 07:02:10 UTC, issuer observation 05:59:28 UTC, retrieval 07:01:31.868228 UTC; successful later canonical/vault block 26,296,767 at 07:01:23 UTC is separate from the archived failed BM supply probe and older supply comparison.
- Canonical and public sUSDe summary/table now use the later shares/assets/NAV. Cooldown silo remains explicitly at earlier block 26,296,428; no same-block assertion for that balance.
- Original 2,180-row prefixes and October 14 endpoints remain historical; two prospective rows preserve the October 14–29 acquisition/definition gap.
- Issuer reporting is not independent custody/asset-allocation assurance. Canonical USDe tokens, issuer USD denominator, USDe vault assets and sUSDe shares are separately labelled.
- Fee switch is insufficient_history, two samples, no current average or milestone verdict; governance activation unverified. The old 340-sample average remains explicitly historical.
- Selected USDe quote clock 00:10:21 UTC, legacy 200bps ≥$5m floor and separate nested 50bps ≥$5m floor. Selected sUSDe quote 23:49:20 UTC October 28, sUSDe→USDe 50bps $1m–$10m bracket, $9m width and false precision; legacy ~$3.32m result is 200bps. No route substitution or liquidity trend inferred.

## Remaining limits

Source-level route ownership/cost-convention and precision metadata clarification remain open, including non-monotonic refinement refusal versus monotonic_in_bracket metadata. Full stablecoin execution, simulation, fills, settlement, primary latency, chain-local ladders, independent offchain custody/allocation and a complete current 14-day fee window remain unproved. Scores/chain overrides and October 11 full-verification dates remain unchanged. The issuer-envelope delivery/consumer follow-up is separately coordinated by BM and RiskAnalyst; this report reconciliation does not certify that separate rollout.

## Canonical reports checked

| Report | SHA-256 at semantic comparison |
|---|---|
| usde | `8f1a0cb80afe9686ffc6d53e0361b0f80c55ad82fe53c8d3c65d560968e3bebf` |
| susde | `16a0b1d9bab2a2e9b22d44e58785aecc01a65aae7dbe1185010f39457c2b8abd` |
