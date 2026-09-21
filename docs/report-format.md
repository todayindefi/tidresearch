# Report format

The house shape for every asset report on tidresearch. Owner-set, 2026-09-10;
descriptive-first axis style added 2026-09-15.

Applies to **new reports, refreshes, reviews and revisions**. Any substantive edit
brings the report onto this shape; it does not preserve an older structure or voice
because the page began under an earlier standard. Staging is part of the publishing
workflow, not an exemption from it.

`scripts/check-report-format.ts` enforces the mechanical parts at build time. The
editorial parts are not machine-checkable and are the writer's job.

---

## 1. Title

```
# <Asset> — Risk Report
```

Nothing else. **No "Full", "Light", "Retail", "Counterparty" or "Asset Risk
Assessment".** Those were distinctions against nothing — there is no other
assessment, and the retail/institutional split was retired on 2026-09-10.

## 2. Order

```
# <Asset> — Risk Report
**<Band> risk · <overall>/10**          headline, matching overall_score
<one-line category / mechanism / issuer>
<dashboard link, if any>

## Summary            ← what the asset IS, before any warning
## 1 · Stability — N
## 2 · Backing — N
## 3 · Liquidity & Exit — N
## 4 · Dependencies — N
## 5 · Contract & Admin — N
## 6 · Issuer — N
<supporting sections: who it's for, comparisons, what to watch>
## Revision history   ← last
```

The axis score in the heading must equal its frontmatter field. Which field feeds
which axis is in `src/lib/…` and enforced by `check-axis-headings.ts`.

**A reader must learn what the asset is before being warned about it.** Keep the
preamble short — a label, a headline, a sentence of orientation. If it runs past
~200 words before the first `##`, something in it belongs in a section.

## 3. Flags live in the axis they belong to

⚠️ and ✅ callouts go **inside the axis section that argues them**, apart from the
critical-warning exception below, and are never stacked in the lede. A finding
about custody belongs under Contract & Admin; a concentration figure belongs
under whichever axis prices it.

**A wall of warnings above the summary tells a reader the report is alarmed
without telling them what about.**

### Each axis is descriptive first

Every scored axis uses this reading order:

1. **Description or summary.** Start by explaining how this part of the asset
   works and what the current condition is. The opening must make sense to a
   reader who has not seen the score, methodology or an earlier version.
2. **Supporting details.** Give the measurements, mechanisms, comparisons and
   evidence that support the description.
3. **Risks and limitations.** Put ordinary caveats, adverse trends, missing
   measurements and monitoring qualifications at the end of the axis.

The final part may be a paragraph beginning **“Risks and limitations.”** or a
short list when several independent items need separation. It is not required
when the axis genuinely has no material qualification.

Do not open an axis with a warning, verdict, score defence or rhetorical line
such as “this is the binding constraint.” Describe the exit paths first; then
show why one binds. Describe the backing first; then explain its concentration.
Describe the authority structure first; then explain what can fail.

### Warnings are exceptional

Most risks should be written as clear prose, without an icon. Use `⚠️` only for
an immediate and severe condition that a reader may need to act on before
continuing, such as:

- a material current depeg;
- an active reserve shortfall or loss of redemption;
- a known live exploit or imminent irreversible control action; or
- a token, address or chain-identification hazard that could cause a reader to
  acquire or send the wrong asset.

A critical warning may appear immediately after the Summary when delaying it
would expose the reader to harm. Keep it short, factual and actionable. Otherwise
warnings and flags belong at the end of their axis. Never stack icons (`⚠️⚠️`),
use warning symbols as paragraph furniture, or add a positive icon merely to
balance a negative one.

## 4. No self-reference

**The reader is assumed to be reading for the first time.** They have no memory of
what this page said last month, so a correction addressed to that memory is noise
that makes them doubt a page they have no history with.

Never write:

- "this report previously said…", "corrected here", "an earlier version"
- "Cut from 6.5", "Raised from 5.5", "Restored from 4.5", "scores HELD"
- "one lesson about this report's own format"
- dated update blocks stacked in the lede
- “on this site”, “in this coverage”, “we cover”, or comparisons to how other
  pages are scored
- “the honest way to read this”, “the point is”, “a reader deserves”, or other
  narration of the writer's reasoning process
- “not established, and stated rather than implied” or similar methodology
  commentary when the direct statement (“voter concentration was not measured”)
  carries the information

State the asset fact directly. “The core has no upgrade authority” is useful;
“this report gives Contract & Admin the highest score on the site” is not. “The
measured curve turns over near $8 million” is useful; “this is why the ladder is
the figure to quote” is instruction about the analysis rather than description
of the asset.

**The distinction that matters:**

| belongs in the body | belongs in Revision history |
|---|---|
| "the Safe moved from 3-of-6 to 4-of-7 on 2026-08-31" — the ASSET changed | "this report previously called it 3-of-6" — the REPORT changed |

Where a correction carries real content, **keep the content and drop the
back-reference.** State the current fact.

## 5. Dashboards are linked, never embedded

A sidebar link and an in-body link are both fine. **No iframe.** A report is an
authored judgement at a stated date; an embedded live surface silently changes
what the page says and can contradict the prose beside it.

## 6. Figures

- **State the basis** where a figure is a product or a ratio — which denominator,
  measured or carried, and as of when.
- **Three outcomes, not two**, when reading a set: measured, measured-at-zero, and
  **refused**. A failed read is not an absence.
- **Sweep the value, then read each hit.** A number usually appears in more than
  one place; a search is a candidate generator, never a decision.

## 7 · Contract & Admin carries its own evidence rules

Axis 5 has requirements the other axes do not, because it is the axis where an on-chain read looks most conclusive and is most easily over-read. **See [contract-admin-axis.md](contract-admin-axis.md).**

In short: derive every address from a call that returns it rather than from a display string; read slots and role IDs off the contract rather than from their names; **reconcile the measurement against the issuer's own docs and repositories, and record whether they agree, disagree, or are silent**; check whether any audit or bug bounty actually covers the privileged-role surface; and state the chains not read. **`eth_getCode` returning `0x` proves there is no on-chain quorum — it never proves one private key.**
