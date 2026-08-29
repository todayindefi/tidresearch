/**
 * Build gate for `axis_frame: six`.
 *
 * WHY THIS EXISTS: a report on the six-axis core renders whatever axes it
 * happens to carry. A missing field does not error — it silently renders five
 * rows, and five rows look exactly like a deliberate five-axis report. That
 * defect shipped twice on 2026-08-29/30 before a human caught it by eye, which
 * is the wrong detector for a thing a script can prove.
 *
 * The six axes and the keys that satisfy each. Order matches
 * ScoreHero/RiskSidebar `SIX_AXES` and the dashboards (backinmonitor
 * c0a5ec270) — if you reorder one, reorder all three.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/reports";

const AXES: { axis: string; keys: string[] }[] = [
  { axis: "1 Stability", keys: ["peg_mechanism_score", "volatility_score"] },
  { axis: "2 Backing", keys: ["backing_score"] },
  { axis: "3 Liquidity & Exit", keys: ["liquidity_score"] },
  { axis: "4 Dependencies", keys: ["underlying_score"] },
  { axis: "5 Contract & Admin", keys: ["structural_score"] },
  { axis: "6 Issuer", keys: ["issuer_score"] },
];

/**
 * An axis may be deliberately absent. It must SAY SO, in frontmatter, with a
 * reason — an unexplained blank is indistinguishable from an oversight, which
 * is the whole failure mode this file exists to stop. Same rule the dashboards
 * apply when they render an axis unrated with the reason on the page.
 *   axis_exemptions:
 *     - axis: "5 Contract & Admin"
 *       reason: "handed to securityAnalyst 2026-08-30; no score authored yet"
 */
type Exemption = { axis: string; reason: string };

const errors: string[] = [];

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const raw = readFileSync(join(DIR, file), "utf8");
  const fm = raw.split(/^---$/m)[1];
  if (!fm || !/^axis_frame:\s*six\s*$/m.test(fm)) continue;

  // Cheap frontmatter reads — no YAML dep in prebuild, and the shapes here are flat.
  const has = (k: string) => new RegExp(`^${k}:\\s*[0-9]`, "m").test(fm);
  const exempt = new Set<string>();
  for (const m of fm.matchAll(/^\s*-\s*axis:\s*"([^"]+)"/gm)) exempt.add(m[1]);
  const reasons = [...fm.matchAll(/^\s*reason:\s*"([^"]*)"/gm)].map((m) => m[1]);
  if (exempt.size !== reasons.filter(Boolean).length) {
    errors.push(`${file}: every axis_exemptions entry needs a non-empty reason`);
  }

  for (const { axis, keys } of AXES) {
    if (keys.some(has) || exempt.has(axis)) continue;
    errors.push(
      `${file}: axis_frame is six but "${axis}" has no score ` +
        `(expected one of: ${keys.join(", ")}). Either score it, or declare it ` +
        `under axis_exemptions with a reason.`
    );
  }
}

if (errors.length) {
  console.error("\n⚠️  six-axis frame check failed:\n");
  for (const e of errors) console.error("  " + e);
  console.error("");
  process.exit(1);
}
console.log("✓ axis-frame check: all six-axis reports carry six axes");
