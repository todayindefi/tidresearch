# Parked items — the per-asset refresh backlog

A **parked item** is work on one asset that was deliberately deferred: an undecided
score relationship, an unmeasured quantity, a ruling waiting on the owner. It is not
a defect. It is a decision someone chose not to make yet, and **it is supposed to be
cleared when that asset is next refreshed.**

## Why the convention exists

On 2026-10-03 the owner asked whether the per-asset backlog was clear, after three
assets had been refreshed that week. **Nothing could answer the question.** Parked
items lived in frontmatter comments, in body prose and in session memory, with no
shared marker and no list.

⚠️ **A grep of report bodies came back nearly empty and read as "clear".** It was
not clear — it was looking in the wrong place. A check blind to a class reports that
class clean.

⚠️ **And a refresh is both when these should be cleared and when nobody remembers
them.** On 2026-10-02 weETH took a full six-axis migration and syrupUSDC an axis-3
refresh; neither surfaced its own parked items. One was found only because someone
was editing that frontmatter for an unrelated reason.

## The marker

One line, in the report's frontmatter comments:

```yaml
# PARKED: <what is undecided> [owner: tidr|riskAnalyst|owner] [since: YYYY-MM-DD]
```

- **owner** — who must act, not who noticed. Most are `riskAnalyst` (scores and
  measurement are theirs); `tidr` for rendering and publishing-gate questions;
  `owner` for rulings only the owner can make.
- **since** — when it was parked, so **age is visible**. A parked item nobody has
  looked at in three months has become a decision by default, which is exactly the
  failure in `feedback_deliberate_states_decay_into_defects`.

Write what is undecided and what would settle it. "Needs review" tells the next
reader nothing; "needs a `coins()`/`balances()` read to establish which leg carries
the pool" tells them what to do.

## Reading the list

```
npm run parked        # the full list, grouped by asset
```

The build prints a one-line summary. ⚠️ **That is deliberate** — a twenty-line dump
on every build is how a check teaches people to scroll past it, the same reason
`check-axis-frame` reports migration progress as a quiet status line rather than a
warning.

## What the scanner cannot do

It finds **tagged** items exactly, and **guesses** at untagged ones from legacy
phrasings (`OPEN`, `deferred`, `awaiting`). ⚠️ **The guess is lossy in both
directions:** it missed `it is the open item` in lower case, and it flags
`the deferral was correct`, which describes a deferral that was *resolved*.

✅ **So the untagged list is a triage queue, never an inventory.** Read each line,
then either tag it or leave it. Only the tagged list is worth trusting, and it is
only as complete as the tagging.

⚠️ **A file with tagged items may still show legacy lines describing those same
items.** That is intended — the original comment usually carries the reasoning, and
the `PARKED:` line is a short handle for it, not a replacement.

## On a refresh

1. `npm run parked` and read that asset's items **before** starting.
2. Clear what the refresh settles; **delete the line** when it is settled.
3. Re-park anything still open with its original `since` date — ⚠️ **do not reset
   the clock**, or an item that has been open for months reads as new.
4. Park anything the refresh newly defers.
