# fxSAVE and Ethereum weETH dashboards — production integration

The approved production reports now link to their corresponding Backing Monitor dashboards through the existing TIDR proxy. The dashboard hub and asset index expose the same two dashboard destinations. Report bodies, six-axis grades, evidence IDs, score dates and full-verification dates are unchanged.

- fxSAVE: `fxsave-six-axis-2026-11-17-v2`, overall 4.5. Wrapper accounting is distinct from independent dollar backing. Direct quotes, the variable fxUSD/USDC basket and actual funded settlement remain distinct.
- weETH: `weeth-six-axis-2026-11-17-v1`, overall 6.5. Ethereum-only scope and ETH/eETH units; no inherited remote grades or dollar coverage. The dashboard remains a manually refreshed snapshot with original financial, market, venue and dated-control clocks.

The public dashboard registry preserves all 36 previous consumer entries and adds only these two approved entries. All 22 Maple pins remain unchanged. The existing proxy configuration and live Strategy producer path are unchanged; no fxSAVE or weETH financial snapshots are frozen into the TIDR public tree.

Acceptance requires Backing Monitor's deployed registry and rendered normal routes, not an SPA HTTP 200 alone. Final checks cover both dashboards in actual light/dark on desktop/mobile; report links, index and hub; source/grade/date parity; missing/null/stale/last-good behavior; public export privacy; unrelated-page/static preservation and served artifact hashes. Validation receipts are maintained separately from public report prose.

Production authorization was the user's November 19 instruction to proceed after final review. This release does not authorize transactions, new recurring jobs, unrelated report/dashboard promotion or publication of private packets.
