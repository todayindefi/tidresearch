# msETH bounded staging adoption — November 4, 2026

Accepted candidates are deployed to the dedicated staging site. No production deployment, push, collector, schedule or transaction. Prior staged issuer updates are preserved.

## Paths and preview

- [msETH candidate](candidates/mseth.md) → `src/content/reports/mseth.md` in `/tmp/mseth-bounded-staging-build`.
- [USG dependency wording candidate](candidates/usg.md) → isolated `src/content/reports/usg.md`. Canonical USG source and every numeric score remain unchanged. This overlays the previously validated issuer-batch candidate, preserving that work.
- Staging: [msETH](https://staging.tidresearch.com/reports/mseth/) and [USG](https://staging.tidresearch.com/reports/usg/). Localhost evidence below records the earlier local review, not public adoption.

## Scores and scope

Exact Ethereum token identity checked against the authored consumer packet. Volatility (displayed as Stability) 2.5 / Liquidity 3.5 / Contract & Admin 4.0 / Redemption 2.0 / Overall 2.5. All are provisional November 4 judgments. Full-verification date remains April 9; original report date March 27. Backing, Dependencies and Issuer grades are absent, never zero or borrowed from msUSD.

The legacy four-axis rubric is retained. Redemption remains separately displayed and is not averaged into Liquidity. `wrapped-token` is the existing schema/rendering adapter; prose identifies an ETH-referencing synthetic liability rather than claiming underlying ownership. Standard asset layout renders a sidebar and headline, not ScoreHero; the visible sidebar contains all four authored axes and Overall.

## Evidence distinctions and clocks

- Supply/debt: November 4, block 26,338,807, 03:37:59 UTC. Net backing unresolved; supply minus registered debt is not a measured shortfall.
- DEX estimates: 03:38:31–36 UTC; provider pool block 26,338,803. WETH outputs preserve supplied precision. Nominal ETH discounts 1,249.93/1,252.06/1,273.68 bps remain separate from added average-rate impact 0/2.43/27.14 bps. Gas is separate; minimum-out/expiry unavailable; provider clock leads receipt 2.4–3 seconds. No capacity ceiling or executed fills inferred.
- Security/synth swaps: block 26,338,813, 03:39:11 UTC. Funded-holder simulations succeed at a 10% fee into msUSD, not native ETH. September closure is historical. Burn capability is deployed; executed recovery burns remain unknown.
- Nominal 3-of-5 direct governor powers and shared remote owners remain material. Code identity does not establish a full security audit. Other-chain assets remain unassessed.

USG's paused borrowing-market permissions are distinguished from the callable synth-swap route. Archived public producer payloads retain their October clocks and contain no msETH asset-grade field to overwrite. No USG score or private holding claim was propagated.

## Validation and residuals

Required build/schema/format/shared-evidence checks pass: 109 staging pages. Production-mode build excludes the msETH page. Desktop/mobile at 1440/390 pass for msETH and USG; searchable index, scores, dates, identity, privacy, no page errors and no viewport overflow checked. All three public-primary source links return HTTP 200.

[Browser checks](local-checks.json), [source links](source-links.json). Screenshots: [mobile](local-mseth-390.png), [desktop](local-mseth-1440.png).

Remaining gaps: net external backing/circulation and treasury financing/encumbrance/AMO exclusions; executed recovery burns; full inner oracle and bridge receive-library assurance; complete Plasma perimeter and Swell; broader fresh execution/settlement evidence. The local private adoption receipt contains input hashes, but no private YAML, hashes, dossier or account evidence is copied into the report or static public payload.

## Served staging acceptance

Deploy `6aeab300f419f624490ab219`, dedicated site `2da6f038-beda-46a5-bcbb-497156b816e4` (`tidresearch-staging`). msETH and USG match the validated build at 1440/390 pixels; body/sidebar scores, index entry, USG link and paused-market distinction, identity, provisional scope and all separate source clocks pass. No page errors, privacy findings or horizontal viewport overflow. All 71 unchanged prior report pages match the preceding staged content; USG is the only modified existing report. Production msETH/USG URL/status/main fingerprints are unchanged.

[Deployment receipt](deploy.json), [served browser checks](staging-checks.json), [preservation checks](served-preservation.json), [complete acceptance return](acceptance-return.json).

## Repository adoption

The accepted msETH candidate is also stored at `src/content/reports/mseth.md`, with `production: false`, so normal staging builds include it. The accepted USG revision remains a staging overlay in `candidates/usg.md`; the canonical production USG source is unchanged. The local commit contains only this msETH adoption, the USG staging candidate and validation artifacts. Earlier uncommitted issuer/shared-code changes remain separate.
