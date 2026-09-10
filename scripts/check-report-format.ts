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
 * flag sits in the RIGHT axis, whether the summary actually explains the asset,
 * and whether a figure's basis is stated. Those are the writer's job.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/reports";
const errors: string[] = [];
let checked = 0;

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

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const text = readFileSync(join(DIR, file), "utf8");
  const end = text.indexOf("\n---", 4);
  if (end === -1) continue;
  const fm = text.slice(0, end);
  if (!/^production: true/m.test(fm)) continue;
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
}

if (errors.length) {
  console.error("\n✗ report-format check failed:\n");
  for (const e of errors) console.error("  " + e);
  console.error("");
  process.exit(1);
}
console.log(`✓ report-format check: ${checked} production report(s) match docs/report-format.md`);
