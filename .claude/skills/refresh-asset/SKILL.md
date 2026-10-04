---
name: refresh-asset
description: Refresh or check a published report against riskAnalyst's internal report. Use when asked to "refresh", "check", "update" or "sync" an asset or report — e.g. "refresh reUSD", "check wstETH", "is susde up to date". Reads the internal report as the source of substance, publishes it onto the six-axis frame, and requests a riskAnalyst pass when the internal itself is stale.
---

# Refresh / check an asset

⚠️ **You are the publisher, not the primary source.** riskAnalyst sets every score and finds
every fact. You sync, format, publish, and verify on-chain. **Never go to an issuer's
primary sources to find new risk facts** — that is risk analysis and it is theirs, however
good the find turns out to be. Verifying a claim they made, by reading a contract or a
document they cited, is in scope and expected.

**Every update to our page is sourced from the internal report and shaped to the six-axis
spec.** The internal is the substance; `axis_frame: six` plus `docs/report-format.md` is the
form. Those are different documents for different readers and the transform is the work.

## 1 · Read the internal report

```
~/riskAnalyst/assets/<slug>.md
```

⚠️ **Read-only. Never write to `assets/` — it is riskAnalyst's and not ours to change.**
Slugs differ from ours (`reusd-re`, `reusde-re`, `reusd-resupply` all exist) — list the
directory rather than guessing.

Pull four things: `last_verified`, `last_revised`, the score block, and the file's **mtime**.

## 2 · Decide, on two independent tests

Both can fire at once. On reUSD (2026-10-04) both did.

| test | measure | if true |
|---|---|---|
| **Is it newer than our page reflects?** | their `last_revised` vs what our page has absorbed | diff and fold — §3 |
| **Is the internal itself stale?** | **their `last_verified`**, > 7 days old | request a riskAnalyst pass — §6 |

⚠️ **The staleness test runs on `last_verified`, never `last_revised`.** A targeted pass
moves only the second, so a report revised yesterday can have a body six weeks old —
testing the wrong field reports it fresh. reUSD read `last_revised` 2 days, `last_verified`
**38 days**.

⚠️ **Check mtime against their own `last_revised`.** If the file was touched after the date
it claims, there may be unstamped changes. reUSD: mtime 2026-10-03 15:36, `last_revised`
2026-10-02.

## 3 · Diff by revision history, not by line

⚠️ **A line diff is useless** — the internal and published reports are different documents
with different structures, audiences and lengths. All four allowlisted slugs differ by
hundreds of lines *while being in sync*.

✅ **Read their revision-history entries newer than our last sync.** That tells you what
changed and why, in their words, in minutes. Then:

- **Compare the score blocks first** — it is seconds and it catches divergence immediately.
- ⚠️ **Matching scores do not mean matching reports.** reUSD matched on all eight axes while
  our page justified Backing with an attachment ratio they had retired two weeks earlier.
  **A score can be right while its stated reason is wrong, and the reason is what a reader
  acts on.** Check the *basis*, not just the number.

## 4 · Map onto the six-axis frame

The internal carries the substance; our page carries the published shape.

- Six axes: Stability · Backing · Liquidity & Exit · Dependencies · Contract & Admin · Issuer.
  Headings are `## N · Label — S` exactly, or `check-axis-headings` cannot verify the score.
- `redemption_score` is a **legacy supplemental field** that renders nowhere. If axis 3
  folded it, say so in frontmatter; if it did not, say that. Do not restore it as an axis.
- ⚠️ **`chain_overrides` has NO consumer in this repo.** Per-chain scores reach a reader
  only through prose. Write them out.
- Strip anything internal: riskAnalyst citations, our position, internal filenames.
  `check-internal-leaks` fails the build on these.

## 5 · Apply the publishing gates before writing a score

- **Axis 5** — `docs/contract-admin-axis.md`. No Contract & Admin score publishes without
  the documentation outcome, audit/bounty scope, coverage, and full addresses. "Unread" is
  not an outcome and a peer cannot waive it.
- **Axis 6** — `docs/issuer-axis.md`. Entity outcome is three-state; recourse usually
  outranks the name; nothing from axis 5 may appear here.
- **§4 of `docs/report-format.md`** — no self-reference, no score deltas, no
  cross-page scoring comparisons. ⚠️ riskAnalyst's rationales frequently place a score
  *relative to another asset*. **Take the substance, drop the comparison** — our page can
  say why, never "below X".
- An axis with no basis is an `axis_exemptions` entry with a reason, not a placeholder number.

## 6 · Request a pass when the internal is stale

Message riskAnalyst with the asset, their `last_verified`, the gap in days, and **what
specifically you need re-measured**. Their owner sets their queue — you are supplying
information, not assigning work, and "not now" is a complete answer.

✅ **Ask before sweeping if they may already be mid-pass** — one message costs less than two
sweeps. But if they confirm the asset is *not* in their queue, **start cold**: an unheld
asset in their tier 3 may never be reached, and then our sweep is the only one that happens.

## 7 · Dates and figures

- `last_verified` moves **only** on a whole-body re-read. A targeted pass moves `last_revised`.
- ⚠️ **Date the figure, not just the document.** An undated figure inherits the page's stamp,
  so a correct stamp launders a stale number — and no stamp check catches it. ✅ Put moved
  figures in a **dated comparison table**; the comparison is the provenance *and* usually the
  finding.
- Never place figures of different vintages where a reader can divide them.

## 8 · Check the surfaces our page points at

⚠️ **A refresh is not finished when our page agrees with the internal. Our page also makes
claims about surfaces we do not control**, and those age silently — nothing in our build
sees them.

**If the report carries `live_dashboard_url` or links a monitor, check what that surface
actually says against our published axes.**

⚠️ **The reUSD case, 2026-10-02: backing-monitor's public tile rendered `Healthy · 10/10`
for an axis riskAnalyst and we both score 4.5** — a 5.5-point gap, on a page we link to
from a report on a held asset. The band is computed from **venue depth alone**, and depth is
not the binding leg; redemption is, because a U.S. person has no primary channel. **So the
tile accurately measures the non-binding leg and renders it as the axis rating.**

⚠️⚠️ **Note the direction, because the usual caution inverts here.** Overstating risk is
normally the error to guard against. **A linked surface that is more flattering than our own
score is the dangerous one** — a reader sees Healthy on an axis we rate below the midpoint,
and our link lends it our credibility.

**Also check the pointer still points at something that renders.** Both Re reports claimed a
monitor was *"awaiting its producer feed"* for a month after the feed had landed. ⚠️ **And
do not take a file listing as proof a page renders** — the serving directory having payloads
is not a reader seeing them. Confirm with the producer, or publish the honest intermediate
state ("feed landed, rendering unconfirmed") rather than either "awaiting" or "live".

✅ **Raise it as a CLASS, not as an instance.** The reUSD tile was one asset, but the
mechanism — *a band computed from venue depth alone reads high on every asset whose
binding leg is redemption* — names the population to sweep. Framed that way, the owner
fixed our tile **and found a second unfiled instance (fxusd, identical 5.5-point gap)**.
An instance gets one tile corrected; the mechanism gets the backlog found.

⚠️ **Renders ≠ reachable.** backing-monitor's pages render but are not on their index
grid — visibility there is a separate flag. "The page works" and "a reader will find it"
are two claims; our pointer has to be honest about which one it is making.

✅ **Outcomes, in order of preference:** get the surface corrected by its owner; or state the
divergence and why on our page; or drop the pointer. **What is not acceptable is linking a
surface that contradicts us and saying nothing** — see `feedback_a_pointer_is_a_claim_about_another_surface`.

## Traps that have actually bitten

- ⚠️ **Check the exit code, never a grep of build output.** `npm run build`, then `$?`.
- ⚠️ **Never complete a truncated address to test it** — head-plus-tail is what a forger
  preserves. Derive from the subject, then compare.
- ⚠️ **A superlative is a claim about the whole axis set.** Changing one score can falsify
  "strongest/best" elsewhere on the page. Grep them on every score move.
- ⚠️ **Don't propagate findings across tranches.** Shared implementation argues for
  propagating *contract* findings; seniority argues against propagating *exit* findings.
- ⚠️ **Clear the asset's `# PARKED:` items** — `npm run parked` — **before** starting, and
  re-park anything still open with its **original** `since` date.

## Finish

`npm run build` must exit 0. Verify the claim on the rendered page or the live URL, not in
the frontmatter you just wrote.

⚠️ **Resolve the URL from the file's `slug:`, never from its filename** — five reports
override it (`syrupusdc-retail.md` → `/reports/syrupusdc/`). A poll built from the filename
404s forever and reads exactly like a slow deploy. ✅ Print `%{http_code}`; `curl -s | grep -q`
makes a 404 and a stale page the same observation. Report what moved, what did not, and what you declined to
publish and why.
