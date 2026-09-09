/**
 * Build gate: an axis heading's score must match its frontmatter field.
 *
 * WHY THIS EXISTS. Reports on the six-axis frame carry the score twice — once
 * in frontmatter (which the sidebar renders) and once in the section heading
 * (`## 5 · Contract & Admin — 4.5`, which a reader quotes). Those are two
 * values for one fact, and every such pair in this repo has drifted at least
 * once: the headline vs overall_score, a score-table row vs frontmatter, and a
 * rationale vs its own digit.
 *
 * The drift has a shape rather than a cause: a score change is made in the
 * frontmatter and in the prose, and the number in the HEADING is missed because
 * it sits above the paragraph being edited. This gate is the value-to-value
 * check for that pair; it cannot see a rationale that disagrees with its own
 * score, which remains uncovered by any check here.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/reports";
const LABELS: Record<string, string[]> = {
  Stability: ["peg_mechanism_score", "volatility_score"],
  Backing: ["backing_score"],
  "Liquidity & Exit": ["liquidity_score"],
  Dependencies: ["underlying_score"],
  "Contract & Admin": ["structural_score"],
  Issuer: ["issuer_score"],
  Redemption: ["redemption_score"],
};
const errors: string[] = [];
let checked = 0;

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const text = readFileSync(join(DIR, file), "utf8");
  const end = text.indexOf("\n---", 4);
  if (end === -1) continue;
  const fm = text.slice(0, end);
  const body = text.slice(end);
  for (const m of body.matchAll(/^## \d · ([A-Za-z &]+?) — ([\d.]+)\s*$/gm)) {
    const label = m[1].trim();
    const shown = m[2];
    const keys = LABELS[label];
    if (!keys) continue;
    checked++;
    const vals = keys
      .map((k) => fm.match(new RegExp(`^${k}: ([\\d.]+)$`, "m")))
      .filter(Boolean)
      .map((x) => x![1]);
    if (vals.length === 0) {
      errors.push(`${file}: heading "${label} — ${shown}" has no matching frontmatter field (${keys.join(" or ")}).`);
    } else if (!vals.includes(shown)) {
      errors.push(`${file}: heading "${label} — ${shown}" disagrees with frontmatter ${vals.join("/")}. A score change has to move both.`);
    }
  }
}

if (errors.length) {
  console.error("\n✗ axis-heading check failed:\n");
  for (const e of errors) console.error("  " + e);
  console.error("");
  process.exit(1);
}
console.log(`✓ axis-heading check: ${checked} axis heading(s) match their frontmatter score`);
