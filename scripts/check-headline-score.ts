#!/usr/bin/env tsx
/**
 * Build gate: the body's AUTHORED SCORES must match frontmatter — both the
 * headline risk score and every row of the Scoring Rationale table.
 *
 * WHY THIS EXISTS. The headline — `**Moderate risk · 5.0/10**` — is AUTHORED
 * BODY MARKDOWN, not a component reading frontmatter. So a score change that
 * updates frontmatter leaves the headline behind, and nothing errors: the
 * sidebar renders the new number from data while the largest number on the page
 * still shows the old one. It is the figure a reader actually quotes.
 *
 * Three instances surfaced in a single day (2026-09-07/08), all found by eye:
 *   usdm    body 4.5 / frontmatter 5.0   (also 4.0 vs 4.5 on the Monad override)
 *   usdt    Issuer cell 5.5 / frontmatter 5.0, above prose reading "cut from 5.5"
 *   usdai   body 6.5 / frontmatter 5.5, after TWO documented cuts moved the data
 *           and not the prose — a reader saw a score a full point safer than
 *           every machine-readable surface published.
 *
 * ⚠️ Reports with NO headline line are NOT an error. Nine carry none, and that
 * is an editorial convention gap rather than a defect — this check has no
 * opinion on whether they should have one.
 *
 * ⚠️ The `·` separator is load-bearing in the pattern. `thbill-full` opens with
 * `**Contract Risk Score: 5.5/10**`, which is an AXIS line, not an overall
 * headline; matching on "risk" plus a number alone reports it as a mismatch
 * against its 4.4 overall. Requiring the separator distinguishes the two.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";


/**
 * ⚠️ THE SCORE TABLE IS THE SECOND HALF, ADDED 2026-09-08 AFTER THE HEADLINE
 * CHECK ALONE LET ONE THROUGH. On crvUSD a careful multi-place pass updated
 * frontmatter, three PegKeeper figures, the keeper table, the burn-buffer line,
 * the Backing row and a revision entry — and left `| **Overall** | **4.5** |`
 * against a frontmatter of 5.0. The headline check passed it, because crvUSD
 * has no headline line at all.
 *
 * The shape of the failure: FRONTMATTER IS ONE EDIT AND THE BODY IS SEVERAL, so
 * the body is where a pass runs out. riskAnalyst hit the same thing at scale —
 * nine rows across six reports.
 *
 * ⚠️ VERIFY THE COLUMN SHAPE BEFORE READING A COLUMN. Only tables whose header
 * names column 2 as "Score" are read. `strcx` carries
 * `| Category | Raw STRC | STRCx | Δ | notes |`, and reading column 2 blind
 * produced four false findings on a report that was perfectly consistent.
 */
const LABEL_TO_FIELD: Record<string, string> = {
  "peg mechanism": "peg_mechanism_score",
  stability: "volatility_score",
  volatility: "volatility_score",
  backing: "backing_score",
  liquidity: "liquidity_score",
  "liquidity & exit": "liquidity_score",
  underlying: "underlying_score",
  dependencies: "underlying_score",
  "contract & admin": "structural_score",
  structural: "structural_score",
  redemption: "redemption_score",
  issuer: "issuer_score",
  credit: "credit_score",
  operational: "operational_score",
  overall: "overall_score",
};

function checkScoreTable(file: string, fm: string, body: string, errors: string[]) {
  const lines = body.split("\n");
  let inScoreTable = false;
  for (const line of lines) {
    const cells = line.split("|").map((c) => c.trim());
    if (cells.length < 4 || cells[0] !== "") {
      if (!line.trim().startsWith("|")) inScoreTable = false;
      continue;
    }
    // Header row: column 2 must literally be a score column.
    if (/^score\b/i.test(cells[2].replace(/\*/g, ""))) {
      inScoreTable = true;
      continue;
    }
    if (!inScoreTable) continue;
    const label = cells[1].replace(/\*|`/g, "").trim().toLowerCase();
    const field = LABEL_TO_FIELD[label];
    if (!field) continue;
    // Chain overrides annotate the cell: "4.5 (Monad: 3.0)" — the base is first.
    const shown = cells[2].replace(/\*/g, "").match(/^([0-9]+(?:\.[0-9]+)?)/);
    if (!shown) continue;
    const declared = fm.match(new RegExp(`^${field}:\\s*([0-9.]+)`, "m"))?.[1];
    if (!declared) continue;
    if (Math.abs(Number(shown[1]) - Number(declared)) > 0.001) {
      errors.push(
        `${file}: score table row "${cells[1]}" reads ${shown[1]} but ` +
          `${field} is ${declared}. Frontmatter is one edit and the body is several.`
      );
    }
  }
}

const DIR = "src/content/reports";
const errors: string[] = [];
let checked = 0;
let noHeadline = 0;

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const raw = readFileSync(join(DIR, file), "utf8");
  const parts = raw.split(/^---$/m);
  if (parts.length < 3) continue;
  const fm = parts[1];
  const body = parts.slice(2).join("---");

  const declared = fm.match(/^overall_score:\s*([0-9.]+)/m)?.[1];
  if (!declared) continue;

  // `**<band> risk · N/10**` — the separator is what tells a headline from an axis line.
  checkScoreTable(file, fm, body, errors);

  const headline = body.match(
    /^\*\*[^*\n]*?risk\s*[·|-]\s*([0-9]+(?:\.[0-9]+)?)\s*\/\s*10/im
  );
  if (!headline) {
    noHeadline++;
    continue;
  }
  checked++;
  if (Math.abs(Number(headline[1]) - Number(declared)) > 0.001) {
    errors.push(
      `${file}: headline reads ${headline[1]}/10 but overall_score is ${declared}. ` +
        `The headline is the number a reader quotes — a score change has to move both.`
    );
  }
}

if (errors.length) {
  console.error("\n⚠️  authored-score check failed:\n");
  for (const e of errors) console.error("  " + e);
  console.error("");
  process.exit(1);
}
console.log(
  `✓ headline-score check: ${checked} headline(s) match overall_score ` +
    `(${noHeadline} report(s) carry no headline line, which is not an error)`
);
