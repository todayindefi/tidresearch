/**
 * Build gate for the house report shape. Spec: docs/report-format.md
 *
 * WHY THIS EXISTS. The format rules were set after a sweep found reports opening
 * with up to 3,569 words of stacked changelog before any explanation of what the
 * asset was, titles carrying distinctions against nothing ("Full", "Retail"), and
 * 39 instances of prose addressed to a reader's memory of an earlier version.
 * Written rules decay; this checks the parts a machine can see.
 *
 * WHAT IT CANNOT SEE, stated so nobody reads a pass as a format review: whether a
 * flag sits in the RIGHT axis, whether an axis genuinely opens with a useful
 * description, whether the summary actually explains the asset, and whether a
 * figure's basis is stated. Those are the writer's job. Current-standard staged
 * reports are checked here because staging is part of publication, not an
 * exemption from the house format.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/reports";
// Staged drafts created before the descriptive-first standard remain migration
// work. New staged reports, and older staged reports whose `last_verified` date
// shows a substantive refresh, enter the gate from this date forward.
const STAGED_FORMAT_REQUIRED_FROM = "2026-09-15";
const errors: string[] = [];
let checked = 0;
const progress: string[] = [];

// Phrases addressed to a reader's memory of an earlier version of the page.
const SELF_REF: [RegExp, string][] = [
  [/\bthis report previously\b/i, "this report previously…"],
  // Must be the REPORT that previously said it. "the ERC-20 that previously carried
  // the cUSD ticker" is the ASSET's history and is allowed by §4.
  [/\b(this|our) (report|page|coverage|analysis)[^.]{0,40}\bprevious(ly)?\b/i, "this report previously…"],
  [/\bprevious(ly)? (said|described|called|stated|argued)\b/i, "previously said/described…"],
  [/\bis corrected here\b/i, "is corrected here"],
  [/\bthis (report|page|coverage) (has carried|carried|had|never)\b/i, "this report carried/had…"],
  [/\bearlier version(s)? of this (report|page)\b/i, "earlier version of this report"],
  [/\*\*(Raised|Cut|Lowered|Restored) from [\d.]/i, "**Cut from N.N**"],
  [/\bscores? HELD\b/, "scores HELD"],
  [/\bevery prior revision\b/i, "every prior revision"],
];

/**
 * §4, SECOND TRANCHE — added 2026-10-02, and the reason matters more than the list.
 *
 * A weETH spec audit found SIXTEEN body violations of §4 that the block above let
 * through: "Raised half a point" twice, "in this database" three times, "Held at
 * 7.0", "the honest sentence is…", "where we would place Rocket Pool's rETH". The
 * existing patterns caught none of them, because they were written against the
 * exact phrasings of one earlier sweep. ⚠️ A guard built from the instances it was
 * born from covers those instances and not the class — the same lesson as
 * check-headline-score, which passed crvUSD clean because crvUSD had no headline.
 *
 * Three classes the spec names and nothing checked:
 *   score deltas    — "Raised half a point", "Held at 7.0" (the "scores HELD" family)
 *   site-relative   — "in this database", "on this site", "in this coverage", and
 *                     comparisons to how OTHER pages are scored
 *   reasoning       — "the honest sentence is", narration of the writer's process
 */
const SELF_REF_RATCHET: [RegExp, string][] = [
  // ⚠️ The digit binds to from/by ONLY. The first draft read
  // `(half a point|from|by) [\d.]` and silently passed an injected
  // "Raised half a point because…", because that phrase has no number after it —
  // caught by the negative control, which is the only reason it is right now.
  [/\braised (half a point|(from|by) [\d.])/i, "score delta — state the fact, not the move (§4)"],
  [/\b(cut|lowered|restored) (half a point|(from|by) [\d.])/i, "score delta — state the fact, not the move (§4)"],
  [/\bheld at \*{0,2}[\d.]/i, "\"Held at N.N\" — the scores HELD family (§4)"],
  [/\bscores? held\b/i, "\"scores held\" (§4)"],
  [/\bin this database\b/i, "\"in this database\" — site-relative (§4)"],
  [/\bon this site\b/i, "\"on this site\" — site-relative (§4)"],
  [/\bin this coverage\b/i, "\"in this coverage\" — site-relative (§4)"],
  [/\bwhere we would (put|place)\b/i, "comparison to how other pages are scored (§4)"],
  [/\bthe honest (sentence|way to read)\b/i, "narration of the writer's reasoning (§4)"],
  [/\bsince our \w+ pass\b/i, "back-reference to an earlier pass (§4)"],
  // Found while rebuilding susde's score table: "this report's Contract & Admin row,
  // which moved 7.0 → 5.5" and "This score's stated basis previously held that…".
  // Both are the REPORT changing, not the ASSET, and both slipped the first tranche
  // AND the second. The arrow form is the one worth having — it reads like data.
  [/\bmoved \*{0,2}[\d.]+\*{0,2} (→|->|to) \*{0,2}[\d.]/i, "score move narrated in the body — belongs in Revision history (§4)"],
  [/\bprevious(ly)? (held|carried|read)\b/i, "\"previously held/carried/read\" (§4)"],
  // susde's Summary carried BOTH of these in one sentence — "The big change since
  // this report's last revision" and "the Redemption score moves from 5.5 to 6.5 in
  // this revision" — pointing at a table row the six-axis frame does not render.
  // ⚠️ Each new pattern here was found by reading a page, not by the patterns above.
  // That is the honest status of this list: it is a ratchet, never a proof of clean.
  [/\bmove[sd]? from \*{0,2}[\d.]+\*{0,2} to \*{0,2}[\d.]/i, "score move narrated in the body (§4)"],
  [/\b(this|our) (report|page)'s (last|previous|earlier) revision\b/i, "back-reference to our own last revision (§4)"],
  [/\bin this revision\b/i, "\"in this revision\" (§4)"],
];

/**
 * ⚠️ A BURN-DOWN LIST, NOT AN EXEMPTION. Counted 2026-10-02: 61 violations across
 * 26 in-scope reports. Failing the build on all of them would have forced a
 * 26-file sweep nobody asked for, and a bulk pass is itself a source of error —
 * the syzUSD self-reference regression came from a restructure, not from drafting.
 * So the patterns above are a RATCHET: a file may carry up to its listed count
 * and no more, and any file absent from this map must be clean.
 *
 * ✅ Lower a number whenever you touch a report and fix one. Delete the entry at
 * zero. The count going UP is a build failure, which is the whole point — the
 * class is closed going forward while the backlog drains.
 *
 * ⚠️ REGENERATE, NEVER HAND-EDIT, after changing SELF_REF_RATCHET:
 *     RECOUNT=1 npx tsx scripts/check-report-format.ts
 * Adding a pattern silently invalidates every count here, and a stale allowance is
 * indistinguishable from a deliberate one.
 *
 * weeth.md and susde.md are deliberately ABSENT — both were brought to zero on
 * 2026-10-02, which is what made them safe to leave off. Do not re-add them.
 */
const SELF_REF_BACKLOG: Record<string, number> = {
  "apxusd.md": 1,
  "apyusd.md": 1,
  "ausd.md": 2,
  "crvusd.md": 1,
  "frxusd.md": 2,
  "mstr.md": 5,
  "onyc.md": 1,
  "pyusd.md": 2,
  "rlusd.md": 3,
  "strc.md": 5,
  "strcx.md": 3,
  "susdai.md": 1,
  "susdat.md": 1,
  "syrupusdc-retail.md": 3,
  "syrupusdt-retail.md": 1,
  "thbill-retail.md": 1,
  "usdai.md": 1,
  "usdat.md": 3,
  "usdc.md": 7,
  "usde.md": 1,
  "usdg.md": 3,
  "usdm.md": 3,
  "usds.md": 3,
  "usdt.md": 5,
  "wylds.md": 1,
  "zchf.md": 1,
};

/**
 * §5 of docs/report-format.md: dashboards are LINKED, never embedded.
 *
 * ⚠️ THIS RULE CAN GO STALE IN A DIRECTION THE PROSE DOES NOT NOTICE. When the
 * embeds were removed on 2026-09-09 the iframes went, but two production reports
 * kept telling readers the data was "on the embedded dashboard below" — a promise
 * pointing at a surface that no longer existed on the page. The build stayed green
 * because nothing checks prose against layout.
 *
 * Found the same week as a sibling case: crvUSD told readers to check the dashboard
 * for per-keeper PegKeeper debt, which that dashboard has never rendered. A pointer
 * is a claim about another surface, and it ages without anyone editing it.
 */
const STALE_SURFACE: [RegExp, string][] = [
  [/\bembedded dashboard\b/i, "\"embedded dashboard\" — dashboards are linked, not embedded (§5)"],
  [/\bdashboard (embedded )?below\b/i, "\"dashboard below\" — the page links out; there is nothing below"],
  [/\bembed(ded)? (below|here|above)\b/i, "promises an embed that no longer renders"],
];

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const text = readFileSync(join(DIR, file), "utf8");
  const end = text.indexOf("\n---", 4);
  if (end === -1) continue;
  const fm = text.slice(0, end);
  const created = fm.match(/^date:\s*"?(\d{4}-\d{2}-\d{2})/m)?.[1];
  const verified = fm.match(/^last_verified:\s*"?(\d{4}-\d{2}-\d{2})/m)?.[1];
  const production = /^production:\s*true/m.test(fm);
  const stagedOnNewStandard =
    (created !== undefined && created >= STAGED_FORMAT_REQUIRED_FROM) ||
    (verified !== undefined && verified >= STAGED_FORMAT_REQUIRED_FROM);
  if (!production && !stagedOnNewStandard) continue;
  const body = text.slice(end);
  checked++;

  // 1. title
  const h1 = body.match(/^# (.+)$/m);
  if (!h1) errors.push(`${file}: no H1 title.`);
  else if (!/ — Risk Report$/.test(h1[1]))
    errors.push(`${file}: title "${h1[1]}" — must end "— Risk Report" (docs/report-format.md §1).`);

  // 2. revision history last, if present
  const heads = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1]);
  const rev = heads.findIndex((h) => /^Revision history/i.test(h));
  if (rev !== -1 && rev !== heads.length - 1)
    errors.push(`${file}: "## Revision history" is not the last section (docs/report-format.md §2).`);

  // 4. no self-reference outside revision history
  const cut = body.search(/^(## Revision history|\*Revision history)/im); // case-insensitive: one report spells it "History"
  const main = cut === -1 ? body : body.slice(0, cut);
  for (const [re, label] of SELF_REF) {
    const m = main.match(re);
    if (m) {
      const at = main.slice(Math.max(0, m.index! - 60), m.index! + 80).replace(/\s+/g, " ");
      errors.push(`${file}: self-reference "${label}" outside Revision history — …${at}… (docs/report-format.md §4).`);
    }
  }

  // 4b. ratchet: the second tranche of §4 patterns, against a draining backlog.
  // RECOUNT=1 npx tsx scripts/check-report-format.ts prints a fresh map instead of
  // failing — the only safe way to re-baseline after adding a pattern, since a
  // hand-maintained count drifts the moment the pattern list changes.
  const allowed = process.env.RECOUNT ? Infinity : SELF_REF_BACKLOG[file] ?? 0;
  const found: string[] = [];
  for (const [re, label] of SELF_REF_RATCHET) {
    for (const m of main.matchAll(new RegExp(re.source, re.flags.replace("g", "") + "g"))) {
      const at = main.slice(Math.max(0, m.index! - 55), m.index! + 70).replace(/\s+/g, " ");
      found.push(`${label} — …${at}…`);
    }
  }
  if (found.length > allowed) {
    const over = found.length - allowed;
    errors.push(
      `${file}: ${found.length} §4 self-reference(s), ${allowed} allowed by the burn-down list ` +
        `(+${over}). Fix the new one(s), or if you removed others, lower the count in ` +
        `SELF_REF_BACKLOG. Do not raise it.`,
    );
    for (const f of found) errors.push(`    ${f}`);
  } else if (process.env.RECOUNT) {
    if (found.length) progress.push(`  "${file}": ${found.length},`);
  } else if (found.length < allowed) {
    progress.push(`${file}: ${found.length} of ${allowed} §4 backlog hits left — lower SELF_REF_BACKLOG to ${found.length}.`);
  }

  for (const [re, label] of STALE_SURFACE) {
    const hit = body.match(re);
    if (hit) errors.push(`${file}: ${label} — "${hit[0]}"`);
  }
}

if (errors.length) {
  console.error("\n✗ report-format check failed:\n");
  for (const e of errors) console.error("  " + e);
  console.error("");
  process.exit(1);
}
for (const p of progress) console.log(`check-report-format: ${p}`);
const backlog = Object.values(SELF_REF_BACKLOG).reduce((a, b) => a + b, 0);
console.log(
  `✓ report-format check: ${checked} production or current-standard staged report(s) ` +
    `match docs/report-format.md` +
    (backlog ? ` (§4 burn-down: ${backlog} known self-reference(s) across ${Object.keys(SELF_REF_BACKLOG).length} report(s), ratcheted)` : "")
);
