# eUSD maintained staging cutover — November 13, 2026

URL: https://staging.tidresearch.com/previews/eusd/?asset=eusd
Deployment: `6af69bdb7cb4c805d82b8855`.

The frozen v2 static manifest is
`90f12f6491d0981edcad68f1a45646584bffd197730549438f72a6753db121b5`.
All 50 static files match their served SHA-256 hashes. The loader obtains
`data/current.json`, verifies its immutable generation manifest, then verifies
exactly four JSON documents by hash and byte count before application rendering:
assets, backing, product and peg history. Static data fallback is disabled.

Only the /previews/eusd/ static prefix and one forced 200 staging rewrite changed:
/previews/eusd/data/* proxies the public BM staging/eusd-canonical branch data
folder. The rewrite overrides any stale static data shadow. Existing report and
dashboard routes, 215 outside-prefix Netlify hashes and generated edge artifacts
are preserved. The staging configuration input is the old input plus exactly the
recorded route snippet. Root netlify.toml and production remain unchanged.

First verified generation:
`58ba68c2af76dbc3d31af974ce445f4b2590d4bcd6d914779fa56b1c5b6fc8ba`.
Source: Ethereum block 26403702, November 13 04:38:47 UTC; observation clock
04:56:11.032836 UTC. Initial schedule_installed is false. The report does not
claim a two-hour runtime is active from this first generation alone.

Local and served acceptance each pass six cases: desktop, mobile, missing
pointer, tampered generation document, failed latest collection retaining the
same last-good generation, and stale source observation. Dark header contrast,
six sections/cards, five basket rows, privacy and no page overflow/errors are
checked. Failure injections are browser-local tests and do not alter public data.
Temporary local serving was closed.

The second producer commit `86f0f8daf823fd636a38e692e52aa8788cfe25dc` is now verified
through the same site deployment. Generation
`5e7f6c332401cc2dde8283c9f84e0913ba5572d4ccc1b222c6c00826ae07b364`
passes all four document hashes and is visible in desktop/mobile browsers. Its
source is block 26403766, November 13 04:51:35 UTC, observed at
05:07:27.636663 UTC. schedule_installed is now true. This confirms data updates
without redeploy; it does not independently observe a full elapsed two-hour job
interval. The pointer response advertises max-age=300; actual cache/query behavior
and source clocks are recorded in second-feed-check.json. No quotes were commissioned, retried or fabricated here;
Peg's separate approval boundary remains. Other documentary/security/quote clocks
and unmeasured fields are not refreshed by the data-route cutover.

The deployment payload and its staging-only configuration are retained at
/tmp/eusd-maintained-v2-staging-2026-11-13/. Accepted static source is retained in
public/previews/eusd/. Future staging deployments must carry BOTH that prefix and
the staging-only data-route overlay; never apply this overlay to production.
The v2 prefix and bounded route-overlay/validation records are being retained
on the existing scoped staging source branch. This is not a production release.

See first-generation-acceptance.json, first-feed-check.json, served-hashes.json,
local-browser.json, served-browser.json, and release-boundary.json. Raw GitHub
JSON arrives with text/plain MIME; the loader validates and parses JSON explicitly.
Cache response headers are recorded rather than inferring freshness from the
browser cache-busting query.
