# Report format

The house shape for every asset report on tidresearch. Owner-set, 2026-09-10.
Applies to **new reports and to every refresh** — a refresh brings the report onto
this shape, it does not leave it as found.

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

⚠️ and ✅ callouts go **inside the axis section that argues them**, never stacked
in the lede. A finding about custody belongs under Contract & Admin; a
concentration figure belongs under whichever axis prices it.

**A wall of warnings above the summary tells a reader the report is alarmed
without telling them what about.**

## 4. No self-reference

**The reader is assumed to be reading for the first time.** They have no memory of
what this page said last month, so a correction addressed to that memory is noise
that makes them doubt a page they have no history with.

Never write:

- "this report previously said…", "corrected here", "an earlier version"
- "Cut from 6.5", "Raised from 5.5", "Restored from 4.5", "scores HELD"
- "one lesson about this report's own format"
- dated update blocks stacked in the lede

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
