# Syrup pair — October 31 structural report update

Source: RiskAnalyst `specs/handoffs/syrup-durable-report-update-2026-10-31-tidresearch.md` and the two “Structural changes reviewed” sections in `assets/syrupusdc.md` / `assets/syrupusdt.md`. Exact excerpts, the source handoff, review notes, source manifest and verification limitations are retained here. `*-before.md` archives the prior public copy including the daily October 30 bulletin; it is historical, not the current report.

## Change and source boundaries

Added strategy mandate/risk analysis under Backing, Zodia/IRACE dependency analysis under Dependencies, and CCIP replacement-pool gaps under Contract & Admin. USDT explicitly has a funded basis sleeve, with source-reported position notice rather than a holder lock/SLA. Its CME/Coinbase description is issuer/metadata attribution, not independently verified broker, custody or margin coverage. The launch policy is 5% per new strategy against overall Maple deposits; enforcement is not established as immutable, and announced securities/receivables strategies are not assumed funded.

Removed the daily bulletin, standalone cash/queue statements and snapshot cash rows. Current figures remain on the linked dashboards and in dated research evidence. Prior principal/classification/coverage and retained quote/history windows remain explicitly dated baselines supporting existing assessments; no new daily allocation values were added. A historical thin-buffer distribution supports the liquidity limitation without claiming present-day funding stress, incident or measured settlement deterioration.

Scores and all frontmatter except last_revised are preserved, including production status and public September 6 verification. The revision date is October 31. Authority September 6 and assurance October 3 are unchanged; the existing November 1 overall-review dates are not extended. No new independent custody audit, role walk, replacement-pool authority verification, redemption/swap execution or settlement proof is claimed.

Fourteen retained source files matched the RiskAnalyst source manifest. Failed/unavailable forum and independent RPC attempts remain explicitly limited. This verifies archival integrity, not independent financial assurance. Do not treat the MPL-conversion discussion or SYRUP buyback topics as pool withdrawal failures or changed depositor controls.

## Validation

`python3 reviews/syrup-structural-2026-10-31/validate.py` checks metadata preservation, six body axes, authored risk coverage, daily-bulletin removal and historical-window labels. Results: validation.json. The full standard report prebuild checks and production-mode Astro build passed in `/tmp/tidresearch-syrup-structural-prod`, an isolated HEAD snapshot with only the two report edits. No producer or dashboard files, scores or schedules were changed by this task.

Remaining gaps include precise broker/counterparty and margin custody, enforceable position unwind/notice terms, per-loan pledged-collateral enforceability and custody, per-pool bank exposure, active CCIP registration/owners/bypasses/delays/security settings and matched lock/liability/in-flight reconciliation, and measured primary/secondary execution and settlement. Partnership announcements receive no automatic safety or score credit.
