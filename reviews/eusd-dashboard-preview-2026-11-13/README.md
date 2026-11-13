# eUSD isolated staging preview — November 13, 2026

URL: https://staging.tidresearch.com/previews/eusd/?asset=eusd

The final frozen BM candidate manifest is
`2d0a66c54d62fe7252ba26739c025d04f890e1074cc4c094c762b7983c46fccd`.
The earlier dispatched manifest was withdrawn and deployment waited for explicit
final confirmation. Only the 51 confirmed public candidate files were copied.

This is an incomplete, unassessed review shell, not a completed risk report or a
promotion decision. Measured backing and selected issuer facts are separate from
unavailable market/history, quotes and security evidence. Two-hour collection is
not activated; no external quotes were requested or retried.

All 51 public served SHA-256 hashes match the accepted manifest. All 216 original
Netlify file SHA-1 hashes are unchanged, including netlify.toml and generated edge
artifacts. Exactly 51 files were added under /previews/eusd/. No reports, global
dashboard files, configuration, jobs or production deployment were changed.
The original Aave staging deployment remains the baseline for all existing files.

Local and served browser checks cover desktop 1440/mobile 390 and light/dark
screenshots, six visible sections, six populated cards and five basket rows.
No uncaught JavaScript errors or page overflow occurred; the mobile basket table
scrolls within its container. The normal BM app probes optional unavailable data
paths and receives 404s; these are documented in acceptance.json rather than
claimed to be successful data loads. Public data and displayed text were checked
for private path/holder-field leakage. Temporary local serving was closed.

Source copies are retained under public/previews/eusd/ for reproducibility; these
and the review receipts were uncommitted at deployment acceptance. They are now
retained on the scoped staging/eusd-preview-source-2026-11-13 source branch.
No site rebuild was performed. The
release payload is /tmp/eusd-prefix-staging-2026-11-13/dist. Future staging work
must preserve this prefix in addition to the prior Aave baseline.

See acceptance.json, served-hashes.json, baseline-site-files.json,
served-site-files.json, local-browser.json and served-browser.json.
