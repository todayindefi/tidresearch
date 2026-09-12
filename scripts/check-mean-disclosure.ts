/**
 * Build gate for Overall-row above/below-mean disclosures.
 *
 * WHY THIS EXISTS: the spec permits an overall_score above the mean of its own
 * axes ONLY IF the Overall row states the gap. Two ways that has failed here,
 * both on 2026-09-12, and neither was visible in the markdown:
 *
 *   1. usdg's disclosure was authored as a FOURTH cell in a THREE-column
 *      table. GFM drops the extra cell, so the page claimed to disclose a gap
 *      no reader could see. Source looked compliant for as long as it existed.
 *   2. susdat's disclosure said "ABOVE the mean — 3.5 against 3.25" and was
 *      correct when written. An analyst-side cut to 3.0 inverted it within
 *      HOURS. It did not age into vagueness; it aged into a confident wrong
 *      claim that still reads like a careful caveat.
 *
 * So this checks three things: the claimed DIRECTION matches the arithmetic,
 * the claimed FIGURES match the arithmetic, and the claim is not sitting in a
 * table cell that will be dropped at render.
 *
 * SELF-TEST: `--self-test` injects a known inversion and FAILS if the detector
 * stays quiet, then injects a correct claim and fails on a false positive. A
 * sweep of this shape prints "0 inverted" both when the corpus is clean and
 * when the pattern matched nothing, and those are indistinguishable from the
 * output alone. Run it before trusting a clean result.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/reports";

/** Mirrors SIX_AXES in src/components/report/RiskSidebar.astro. Stability is
 *  satisfied by either key, so it must be counted ONCE, not twice. */
const SIX: string[][] = [
  ["peg_mechanism_score", "volatility_score"],
  ["backing_score"],
  ["liquidity_score"],
  ["underlying_score"],
  ["structural_score"],
  ["issuer_score"],
];

/** Mirrors AXES_BY_CATEGORY. Same one-label-one-count rule. */
const BY_CATEGORY: Record<string, string[][]> = {
  stablecoin: [
    ["peg_mechanism_score"],
    ["backing_score"],
    ["underlying_score"],
    ["liquidity_score"],
    ["issuer_score"],
  ],
  "wrapped-token": [
    ["volatility_score"],
    ["structural_score"],
    ["redemption_score"],
    ["underlying_score"],
    ["liquidity_score"],
    ["issuer_score"],
  ],
  "vault-share": [
    ["volatility_score"],
    ["structural_score"],
    ["redemption_score"],
    ["underlying_score"],
    ["liquidity_score"],
    ["issuer_score"],
  ],
};

const num = (fm: string, key: string): number | null => {
  const m = fm.match(new RegExp(`^${key}:\\s*([\\d.]+)`, "m"));
  return m ? Number(m[1]) : null;
};

/** Any phrasing that asserts a direction against the axis mean. Deliberately
 *  broad on wording and strict on the two numbers, because the wording is what
 *  varies between authors and the numbers are what goes wrong. */
const CLAIM =
  /(ABOVE|BELOW|above|below)\s+(?:the\s+)?mean(?:\s+of\s+its\s+own\s+axes)?[^.\n]{0,60}?(\d\.\d{1,2})\s*(?:against|vs\.?|versus|of)\s*(\d\.\d{1,2})|(\d\.\d{1,2})\s+is\s+\*{0,2}(\d\.\d{1,2})\s+(above|below)\s+the\s+mean(?:\s+of\s+(\d\.\d{1,2}))?/g;

type Finding = { file: string; msg: string };

function axisMean(fm: string): number | null {
  const six = /^axis_frame:\s*six\s*$/m.test(fm);
  const cat = (fm.match(/^category:\s*"?([\w-]+)/m) ?? [])[1] ?? "";
  const groups = six ? SIX : BY_CATEGORY[cat];
  if (!groups) return null;
  const vals: number[] = [];
  for (const keys of groups) {
    for (const k of keys) {
      const v = num(fm, k);
      if (v !== null) {
        vals.push(v);
        break; // one label, one count
      }
    }
  }
  if (vals.length < 3) return null;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

/** A row with more cells than its header loses the surplus at render. This is
 *  how usdg's disclosure vanished, so a disclosure inside one is unpublished
 *  however correct it reads in source. */
function droppedCells(raw: string): number[] {
  const lines = raw.split("\n");
  const bad: number[] = [];
  let header: number | null = null;
  const cells = (l: string) => {
    let s = l.trim();
    if (s.startsWith("|")) s = s.slice(1);
    if (s.endsWith("|")) s = s.slice(0, -1);
    return s.split("|").length;
  };
  lines.forEach((l, i) => {
    const s = l.trim();
    if (!s.startsWith("|")) {
      header = null;
      return;
    }
    if (/^\|[\s:|-]+\|?$/.test(s)) return;
    if (header === null) {
      header = cells(l);
      return;
    }
    if (cells(l) > header) bad.push(i + 1);
  });
  return bad;
}

function audit(file: string, raw: string): { findings: Finding[]; claims: number } {
  const findings: Finding[] = [];
  const fm = raw.split(/^---$/m)[1] ?? "";
  if (!/^production:\s*true/m.test(fm)) return { findings, claims: 0 };

  const overall = num(fm, "overall_score");
  const mean = axisMean(fm);
  let claims = 0;

  for (const m of raw.matchAll(CLAIM)) {
    claims++;
    if (overall === null || mean === null) continue;
    // Branch A groups: 1=dir 2=overall 3=mean
    // Branch B groups: 4=overall 5=gap 6=dir 7=mean   (5 is the GAP, not the mean —
    // reading it as the mean is an off-by-one that made this check report a
    // confident false positive on its first real run.)
    const dir = (m[1] ?? m[6] ?? "").toLowerCase();
    const a = Number(m[2] ?? m[4]);
    const b = Number(m[3] ?? m[7]);
    const realDir = overall > mean ? "above" : overall < mean ? "below" : "equal";
    if (dir && realDir !== "equal" && dir !== realDir) {
      findings.push({
        file,
        msg:
          `claims the composite is ${dir.toUpperCase()} its axis mean, but ` +
          `overall ${overall} vs mean ${mean.toFixed(2)} is ${realDir.toUpperCase()}. ` +
          `A disclosure that inverts reads like a careful caveat while being wrong.`,
      });
      continue;
    }
    if (!Number.isNaN(a) && Math.abs(a - overall) > 0.005) {
      findings.push({
        file,
        msg: `disclosure quotes the composite as ${a}, frontmatter says ${overall}.`,
      });
    }
    if (!Number.isNaN(b) && Math.abs(b - mean) > 0.02) {
      findings.push({
        file,
        msg: `disclosure quotes the axis mean as ${b}, computed mean is ${mean.toFixed(2)}.`,
      });
    }
  }

  if (claims > 0) {
    const bad = droppedCells(raw);
    if (bad.length)
      findings.push({
        file,
        msg:
          `carries a mean disclosure AND a table row with more cells than its ` +
          `header (line ${bad.join(", ")}). GFM drops the surplus cell — check the ` +
          `disclosure is not inside it, or it is unpublished however correct it reads.`,
      });
  }
  return { findings, claims };
}

// ---- self-test -------------------------------------------------------------
if (process.argv.includes("--self-test")) {
  const base = [
    "---",
    "production: true",
    'category: "stablecoin"',
    "axis_frame: six",
    "peg_mechanism_score: 8.0",
    "backing_score: 8.0",
    "liquidity_score: 2.0",
    "underlying_score: 2.0",
    "structural_score: 2.0",
    "issuer_score: 2.0",
    "overall_score: 4.0",
    "---",
    "",
  ].join("\n");
  // mean = 4.0; overall 4.0 -> equal. Shift overall so direction is testable.
  const above = base.replace("overall_score: 4.0", "overall_score: 6.0");

  const inverted =
    above + "\nThis composite sits BELOW the mean of its own axes — 6.0 against 4.00.\n";
  const t1 = audit("SELFTEST-inverted.md", inverted).findings;
  if (!t1.some((f) => /inverts|ABOVE|BELOW/i.test(f.msg))) {
    console.error(
      "\n✗ SELF-TEST FAILED: an injected inverted disclosure was NOT detected.\n" +
        "  A clean corpus report from this script cannot be trusted.\n"
    );
    process.exit(1);
  }

  const correct =
    above + "\nThis composite sits ABOVE the mean of its own axes — 6.0 against 4.00.\n";
  const t2 = audit("SELFTEST-correct.md", correct).findings;
  if (t2.length) {
    console.error("\n✗ SELF-TEST FAILED: a correct disclosure was flagged.\n");
    for (const f of t2) console.error("  " + f.msg);
    process.exit(1);
  }

  const wrongFig =
    above + "\nThis composite sits ABOVE the mean of its own axes — 6.0 against 3.10.\n";
  if (!audit("SELFTEST-figure.md", wrongFig).findings.length) {
    console.error("\n✗ SELF-TEST FAILED: a wrong quoted mean was NOT detected.\n");
    process.exit(1);
  }

  // BRANCH B. The first real run of this script reported a confident false
  // positive because only branch A was ever exercised here: a self-test that
  // covers one phrasing certifies one phrasing. Both are now tested in both
  // directions.
  const below = base.replace("overall_score: 4.0", "overall_score: 3.0");
  const bOk = below + "\n3.0 is **1.00 below the mean of 4.00**, which is deliberate.\n";
  const t4 = audit("SELFTEST-branchB-correct.md", bOk);
  if (t4.claims === 0) {
    console.error("\n✗ SELF-TEST FAILED: branch-B phrasing was not matched at all.\n");
    process.exit(1);
  }
  if (t4.findings.length) {
    console.error("\n✗ SELF-TEST FAILED: a correct branch-B disclosure was flagged.\n");
    for (const f of t4.findings) console.error("  " + f.msg);
    process.exit(1);
  }
  const bBad = above + "\n6.0 is **2.00 below the mean of 4.00**, which is deliberate.\n";
  if (!audit("SELFTEST-branchB-inverted.md", bBad).findings.length) {
    console.error("\n✗ SELF-TEST FAILED: an inverted branch-B disclosure was NOT detected.\n");
    process.exit(1);
  }

  console.log(
    "✓ mean-disclosure self-test: both phrasings matched; inversion detected in each, " +
      "correct claims not flagged, wrong figure detected"
  );
  process.exit(0);
}

// ---- corpus sweep ----------------------------------------------------------
const findings: Finding[] = [];
let totalClaims = 0;
for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const r = audit(file, readFileSync(join(DIR, file), "utf8"));
  findings.push(...r.findings);
  totalClaims += r.claims;
}

if (findings.length) {
  console.error("\n⚠️  mean-disclosure check failed:\n");
  for (const f of findings) console.error(`  ${f.file}: ${f.msg}`);
  console.error("");
  process.exit(1);
}

if (totalClaims === 0) {
  // The silent-failure state: "0 problems" and "matched nothing" print the same.
  console.log(
    "⚠️  mean-disclosure check: NO disclosure claims matched. That is the " +
      "pattern-missed state, not a clean state — run --self-test before trusting it."
  );
} else {
  console.log(
    `✓ mean-disclosure check: ${totalClaims} above/below-mean claim(s) agree with their own arithmetic`
  );
}
