# DOLA dashboard integration — TIDR response, October 14

Source handoff: `/home/danger/backing-monitor/specs/handoffs/DOLA-tidresearch-2026-10-14.md`.
Read alongside `dola-dashboard-plan.md` and `dola-feed-contract.md` in that repository.

## Report state and publication authority

DOLA and sDOLA were explicitly approved by the owner and published together in
TIDR commit `83edb86`, before this integration handoff. Both remain
`production: true`. The handoff's assumption that DOLA is still a July staged draft
is superseded by that approval and deployment. This review does not withdraw the
published reports, register a dashboard, or authorize another publication.
Changes prepared in this review are local; no deployment is performed through the
integration handoff.

- Existing staging report: https://staging.tidresearch.com/reports/dola/
- Existing production report: https://tidresearch.com/reports/dola/
- Companion: https://staging.tidresearch.com/reports/sdola/
- Written DOLA assessment: provisional 4.5/10; axes 5.0 / 4.5 / 4.5 / 4.5 / 5.0 / 5.0.
- `live_dashboard_url` is absent. DOLA is absent from the TIDR dashboard-link set
  and from the inspected local and deployed backing-monitor registries.

## Implementation

Outputs in this commit:

- `src/content/reports/dola.md`: canonical Ethereum identity, independent supply
  and API clocks, explicit October 14 quote basis and conditional junior activation.
- `src/content/reports/sdola.md`: inherited DOLA ladder explicitly dated October 14.
- `docs/dola-dashboard-integration.md`: this review and integration checklist.

Evidence remains in `public/evidence/dola/` with committed source hashes in
`provenance-2026-10-14.json`. Historical files are frozen reproduction artifacts,
not scheduled feeds. No collector or cadence is installed by TIDR; editorial
refreshes occur on reviewed evidence or issuer changes.

Checked the canonical October 14 DOLA assessment and six evidence artifacts:
source scores agree; oracle TVL/debt is not independent collateral coverage;
96.37% and 76.52% describe debt-source/dependency shares; primary PSM reserves,
DOLA inventory, simulations and failures are distinct. Current implementation
does not change any producer files, registration or schedules.

sDOLA's inherited values agree with the DOLA snapshot. Its wrapper identity,
roles, execution and remote recovery remain unverified. Current issuer docs
state its CCIP lanes closed in August; its chain scope is Ethereum. This review
does not create another wrapper assessment or add a wrapper dashboard.

## Remaining integration work

1. Receive the actual verified dashboard URL and its deployment/feed evidence.
   An HTTP 200 at a generic dashboard shell is insufficient: require a DOLA
   registry entry, rendered canonical identity, six axis sections and explicit
   missing/partial/stale states.
2. Check independent peg, backing, PSM, ladder and venue clocks; unresolved
   independent backing remains null with a basis. Preserve measured zero,
   missing read and failed simulation as distinct outcomes. Do not convert
   historical research into a live feed.
3. Confirm junior capital units/rate, market activation and current eligibility
   from fresh producer state. Keep research scores distinct from measured
   dashboard bands and its unscored Dependencies convention.
4. After verified route delivery, add `live_dashboard_url` to DOLA and check
   report → dashboard and dashboard → report in staging. No iframe and no
   guessed route. Keep report and dashboard publication states separate.
5. Return visible-state checks before requesting any new dashboard promotion.

No handoff was dispatched and no outside repository was modified.

## Validation

- `npm run build`: passed, including schema, six-axis, score/heading, format,
  chain, dashboard-join, internal-reference and mean-disclosure checks.
- `PUBLIC_STAGE=production npm run build`: passed; both approved reports remain
  in the production output.
- Evidence paths, rendered cross-links, canonical identity and no iframe/dashboard
  claim checked. `git diff --check` passed.
- Existing staging DOLA and sDOLA URLs returned HTTP 200 with provisional 4.5/10.
  These confirm previously deployed pages, not deployment of this local commit.
- No verified DOLA dashboard route exists in the inspected registry; the two-way
  dashboard integration check remains pending producer/consumer readiness.
