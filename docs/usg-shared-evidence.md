# USG: shared six-axis evidence, longer-term report

The dashboard and report consume the same source series and definitions. The
dashboard presents current conditions; the report assesses trends, persistence,
stress behavior and structural risk. This contract applies to the USG pilot.
Other asset reports have not yet been migrated.

## Source map

All dashboard URLs below are under
`https://todayindefi.github.io/backing-monitor/data/`. The saved files, their URLs,
timestamps and SHA-256 hashes are in
`public/data/usg/2026-10-28/sources.json`.

| Axis | Shared dashboard inputs | Report interpretation |
|---|---|---|
| 1 Peg | `usg_backing.json`: `peg.market_price`, `nav`, `premium_discount_pct`, source and observation time; `peg.history_ref` and `history_field` identify `usg_backing_history.json` / `peg` | Sample means, frequency of below-par observations, reported stress and mechanism response. Use the same price series and reference; no replacement provider. |
| 2 Backing | Base feed `backing`, `backing_breakdown`, market data; shared history `collateral_ratio`, `total_bad_debt`, `real_supply` | Conservative CR averages and observed losses. Do not label inclusive CR as borrower coverage. No market-headroom average without a market-level history. |
| 3 Liquidity | `usg_liquidity.json` from DexTracker; this takes precedence over the base feed's embedded liquidity | Same rungs, allocation, anchor, impact and depth brackets. Discuss repeated comparable observations when available. No independent replacement quotes or par-based liquidity cost. |
| 4 Dependencies | `usg_dependencies.json`, axis basis and base feed market composition | Persistent layering and correlated constituents. Snapshot weights are dated examples, not invented long-term averages. |
| 5 Contract & Admin | `usg_contract.json` authority topology plus `usg_contract_overlay.json` authored assessment | Structural powers, execution delays and verified changes over time. Preserve the original walk dates and uncertainty. |
| 6 Issuer | `usg_issuer.json` plus authored issuer score in `usg_axis_basis.json` | Operating record, governance maturity and verified disclosures. A retrieval failure is not evidence of no governance or no audits. |

Scores remain authored in the canonical internal `assets/usg.md`; TIDR consumes them in `src/content/reports/usg.md` frontmatter, propagated to overlays by
the existing score-sync mechanism. Both views use those scores. A dashboard's
computed current-condition band is a different labelled measure, not a competing
authored score. Narrative basis must describe the same scope and evidence.

## Definitions that must remain aligned

- Peg discount uses the shared market price versus the peg block's reference NAV.
- USD liquidity sizes use the producer's dated market anchor.
- The displayed ladder uses `slippage_bps_debiased` when present, as the dashboard
  does: added execution-rate deterioration relative to the small-trade baseline.
- Total cost versus market value uses `slippage_bps` and is separately labelled.
  The report displays positive costs by reversing the producer's signed-return
  convention. It does not mix in USG's standing discount to par.
- Depth is the producer's bracket and last-clearing lower bound, not an exact
  crossing or a fitted/interpolated replacement.
- The current producer uses the word "marginal" for baseline-relative impact.
  This is the average execution-rate change of the quoted trade, not a numerical
  derivative of the curve.
- Use real circulating supply; idle PegKeeper token buffers are not float.
- Conservative borrower CR excludes LP-owned keeper-pool stable inventory.
- Market aggregate headroom is not an individual borrower's liquidation buffer.

## Time horizon and limits

Use 7-day and 30-day shared history, and 90-day evidence when actually available.
State coverage, observation count, gaps and the averaging method. The pilot uses
arithmetic sample means of nearly hourly observations, not time-weighted values.
Never turn sample counts into exact time at a price or infer intrahour behavior.

The current review has approximately 30 days of peg/aggregate backing history,
but only one snapshot of the current DexTracker ladder and no continuous
market-composition/headroom history. Those limits are explicit in the report.
Earlier ladders with different conventions are not joined into a comparable
series. Archive future canonical observations before claiming depth trends.

A temporary movement changes the dashboard's current condition. A lasting or
structural change can change the report's assessment. Bad debt, a new exploit or
an authority change can warrant immediate reassessment without waiting for an
averaging window.

## Refresh and verification

1. Archive the actual served base feed, referenced history and all registered
   overlays together. Preserve each source's own observation time; separate cron
   jobs do not imply simultaneous observations. Record URLs and hashes.
2. Validate identities, source fields, reference values and metric definitions.
   A changed definition requires explicit review, not a silent fallback.
3. Generate report quantitative evidence from these saved inputs with
   `python3 scripts/check-usg-evidence.py --write`.
4. Review all six narratives against the generated evidence and structural
   records. Change scores only on reasoned reassessment, then sync score overlays.
5. Run `python3 scripts/check-usg-evidence.py --check`,
   then `npm run build`. The build runs the shared-evidence check before the standard report gates. Internal report and overlay checks remain owned by the upstream repository.

The evidence checker verifies archived-source hashes/URLs, peg history selection,
market-based liquidity sizing, baseline convention, six authored score values
against archived dashboard overlays, and the generated report block. It does not
prove all free prose correct, verify the live deployment, or automatically
refresh sources. Source refresh/publication and review scheduling are not added
by this pilot. The snapshot directory is an explicit dated review input, not a
claim that its contents are perpetually current.

## Next adoption steps

For other assets, first declare the dashboard's actual source precedence and
metric definitions. Then archive comparable canonical histories and generate
report evidence from those histories. Extend this pilot's checks per asset;
avoid assuming that every asset shares USG's history shape or liquidity baseline.

## TIDR publication

The public report adapts the canonical assessment to `docs/report-format.md` without changing authored scores or quantitative definitions. Keep technical audit coverage on Contract & Admin, with entity and recourse uncertainty on Issuer. The generated evidence block is identical apart from the public-facing source label. Existing unrelated workspace edits must not be included in a USG-only publication.
