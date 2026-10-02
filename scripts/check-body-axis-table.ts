/**
 * Every score in a report's BODY TABLES must match the frontmatter field it names.
 *
 * WHY THIS EXISTS. thBILL's "Bottom Line" table rendered **Contract & Admin 4.5/10**
 * while the same file's frontmatter carried `structural_score: 3.5` — a full point,
 * live on production, in the GENEROUS direction. The body said 3.5 twice elsewhere
 * ("moves 4.5 → 3.5", "cut a full notch"), so the table was simply left behind by a
 * re-rate. Found by a peer, not by us.
 *
 * ⚠️ NOTHING CAUGHT IT, and the near-misses are the point:
 *   - check-headline-score compares the HEADLINE and the Overall row to
 *     `overall_score`. It does not look at the other axis rows.
 *   - check-axis-headings compares `## N · Name — S` HEADINGS to frontmatter. thBILL
 *     has no axis headings; its scores live in a prose table.
 *   So two checks sat either side of this defect and neither covered it — the
 *   "guard covers the instance, not the class" shape again.
 *
 * ⚠️ THE BODY IS WHERE A PASS RUNS OUT. Frontmatter is one edit; the body is several.
 * Sidebars re-render from data and stay right, while authored tables drift — which is
 * why susde shipped a four-row pre-frame table under a six-axis sidebar for weeks.
 *
 * WHAT IT CANNOT SEE: a row whose label matches no known axis, a score stated in
 * prose rather than a table, and any table whose second column is not the score
 * (strcx carries `| Category | Raw STRC | STRCx | Δ |`, and reading column 2 blind
 * once produced four false findings on a consistent report).
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/reports";

/** Body label → frontmatter field. Labels differ by rubric for the same key. */
const LABELS: Record<string, string> = {
  stability: "volatility_score",
  volatility: "volatility_score",
  "peg mechanism": "peg_mechanism_score",
  backing: "backing_score",
  "liquidity & exit": "liquidity_score",
  liquidity: "liquidity_score",
  dependencies: "underlying_score",
  underlying: "underlying_score",
  "contract & admin": "structural_score",
  structural: "structural_score",
  "smart contract": "contract_score",
  redemption: "redemption_score",
  issuer: "issuer_score",
  overall: "overall_score",
};

const errors: string[] = [];
let checked = 0;
let rows = 0;

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const text = readFileSync(join(DIR, file), "utf8");
  const end = text.indexOf("\n---", 4);
  if (end === -1) continue;
  const fm = text.slice(0, end);
  if (!/^production:\s*true/m.test(fm)) continue;
  checked++;

  // Frontmatter values, top level only — chain_overrides are nested and legitimately differ.
  const front: Record<string, number> = {};
  for (const m of fm.matchAll(/^([a-z_]+_score):\s*([\d.]+)\s*$/gm)) front[m[1]] = parseFloat(m[2]);

  const body = text.slice(end);
  const cut = body.search(/^(## Revision history|\*Revision history)/im);
  const main = cut === -1 ? body : body.slice(0, cut);

  for (const line of main.split("\n")) {
    // | Label | 4.5 | ... |  or  | **Overall** | **4.5** | ... |  or  | Label | 4.5/10 | ... |
    const m = line.match(/^\|\s*\*{0,2}([A-Za-z &]+?)\*{0,2}\s*\|\s*\*{0,2}([\d.]+)(?:\/10)?\*{0,2}\s*\|/);
    if (!m) continue;
    const key = LABELS[m[1].trim().toLowerCase()];
    if (!key) continue;
    const want = front[key];
    if (want === undefined) continue; // absent field: check-axis-frame's job, not this one
    rows++;
    const got = parseFloat(m[2]);
    if (got !== want) {
      errors.push(
        `${file}: body table row "${m[1].trim()}" reads ${got}, frontmatter ${key} is ${want}. ` +
          `⚠️ A divergence is a stop signal — do NOT edit the frontmatter to match the table ` +
          `without re-deriving the score.`,
      );
    }
  }
}

if (errors.length) {
  console.error("\n✗ body-axis-table check failed:\n");
  for (const e of errors) console.error("  " + e);
  console.error("");
  process.exit(1);
}
console.log(`✓ body-axis-table check: ${rows} body score row(s) across ${checked} production report(s) match frontmatter`);
