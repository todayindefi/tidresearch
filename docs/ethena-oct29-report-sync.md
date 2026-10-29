# USDe / sUSDe October 29 report propagation

Scope: targeted report evidence and rationale revision from RiskAnalyst assets/usde.md and assets/susde.md. All existing frontmatter except last_revised is preserved, including scores, chain overrides, production status and October 11 verification date. last_revised is October 29. No new full verification or score reassessment.

## Coordination status

BM task 01a182d1-e487-77c3-ba0c-7fc4d31f4fa2 received the report alignment request and observed serving hashes. BM producer-repair acceptance, current consumer selection and display verification remain pending. Do not mark the producer repair or end-to-end report/dashboard synchronization complete from this document. BM was active and awaiting approval when last checked.

RiskAnalyst's source text describes the pre-repair archive. The public reports scope null headlines and October 14 endpoints to that archive, and separately describe the now-served 07:02:10 generation. This avoids retaining stale current-null statements. Both generations preserve their observation clocks. Issuer backing uses the unchanged 05:59:28 source timestamp; the newer canonical/vault read is block 26,296,767 at 07:01:23 UTC. These are not one simultaneous balance sheet.

## Checks

- Production prebuild checks and Astro build pass in an isolated HEAD snapshot containing only these two report edits.
- Parsed frontmatter matches the baseline in every field except revision date.
- Actual public backing and daily-file hashes match PegTracker's reviewed after hashes. Both public histories preserve the original 2,180-row prefix exactly, have two prospective rows, and retain the October 14–29 acquisition gap.
- Saved CommonRenderer replay against newly fetched backing and liquidity files still selects the sUSDe→USDe overlay, primary 50bps, last clear $1m / first fail $10m, non-monotonic, unresolved precision. USDe retains the base USDC ladder: legacy 200bps and nested 50bps total-impact floors, not a marginal crossing. This is a saved-consumer replay, not BM acceptance of the live browser/display.
- The fee-switch payload has insufficient_history, two samples, null mean and null milestone. Governance activation is separately unverified.

## Remaining discrepancies and evidence limits

BM must confirm the actual current browser consumer and displayed route/threshold labels, the authored axis-envelope propagation, and source provenance/unit mapping. RiskAnalyst's pre-repair current-null prose needs separate dating when reused in dashboard rationale; report wording now scopes it correctly. USDe 200bps versus 50bps headline selection remains unresolved; sUSDe $9m bracket width still fails precision and is not a complete stablecoin exit. Independent custody/allocation, full fee-window coverage, chain-local ladders, execution, fills and settlement remain unproved. The sUSDe rounding-review exception due October 22 is not extended.

## Public serving manifest

Retrieved 2026-10-29T07:31:56.422452+00:00 from https://todayindefi.github.io/backing-monitor/data/ . Later producer observations may legitimately advance; compare matching clocks.

| File | SHA-256 |
|---|---|
| ethena_measurements_daily.json | `356fd0204fb3dc27df72f874866d55f355ef1bcb25d653e6d047666ebe1b0a15` |
| susde_backing.json | `60f7b7b0c586db6e0c3528c55b5be30ca1d96a20422e431f2d0c37c848762fb4` |
| susde_backing_history.json | `717a111d6deb17f4d8eef2111e79d8d65d94c574008251663b94b60c5d1906b2` |
| susde_liquidity.json | `bc314eb2ed5f9264c3452256b7a6a2ae28cce3bc4e0dcf3cc30683cf315c0dcf` |
| usde_backing.json | `02cb2a909b3a7c3b47f5067fef72a508ee67e60ebbc75716a2c75c7cb4ea0fb5` |
| usde_backing_history.json | `a0726174749120d585362138e4a66c50061eb92584bc9d3ab36e0dba7a3a40a7` |
| usde_liquidity.json | `addf6e0abea21f5c32f224a19f8a1e8982b80c2b85b80cc24e877ff688829cb4` |

## Report publication verification

Published to https://tidresearch.com/reports/usde/ and https://tidresearch.com/reports/susde/ in Netlify production deploy `6ae2f6778430fcfb54236654`. Both live main elements and sidebars exactly match the production artifacts; all six axis headings, October 11 verification scope, October 29 revision date, issuer attribution, fee-switch unavailability and dated source observations were checked. CDN footer email protection is outside the report comparison. This verifies report publication only, not BM repair acceptance or end-to-end synchronization.
