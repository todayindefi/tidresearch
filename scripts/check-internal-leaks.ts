#!/usr/bin/env tsx
/**
 * Fails the build when a report body names internal tooling, an internal repo,
 * or our own working process.
 *
 * WHY THIS EXISTS: crvUSD shipped to PRODUCTION citing "TID PegTracker",
 * "PegTracker `oft_audit.py`" and "our feed" as sources, and carried a revision
 * history that critiqued its own methodology — "One lesson about this report's
 * own format", "The Backing rationale's own reasoning also broke". An analyst
 * reading the public page found it (2026-09-10). Four more reports carried the
 * same class, including an engineering to-do list on usdd: "Current backing
 * monitor only covers EVM chains. Need TronGrid API integration."
 *
 * Two separate rules are being enforced, and they fail for different reasons:
 *
 *   1. INTERNAL TOOLING IS NOT ADVERTISED. Naming PegTracker or a script file
 *      tells readers what we run internally. Use the FACT, not the citation:
 *      "2,985 hourly multi-DEX samples", never "TID PegTracker (2,985 samples)".
 *      A published measurement stands on being measured, not on our tool's name.
 *
 *   2. THE READER IS ASSUMED TO BE READING FOR THE FIRST TIME. A report states
 *      current facts. Revision history records what changed about the ASSET —
 *      not what changed about the report, and not our own errors or methodology
 *      shifts, which belong nowhere on a public page.
 *
 * ⚠️ `backing-monitor` IS DELIBERATELY NOT ON THIS LIST. It is the PUBLIC
 * dashboard product — its name is in the URL readers click
 * (todayindefi.github.io/backing-monitor). Banning it would strip working links
 * from reports. The distinction is public surface vs internal process, not
 * "sounds internal".
 */
import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const REPORTS = resolve(import.meta.dirname, "..", "src", "content", "reports");

/** Internal repos, sessions and tooling that must never appear in a body. */
const INTERNAL: [RegExp, string][] = [
  [/\bPegTracker\b/i, "PegTracker (internal)"],
  [/\bDexTracker\b/i, "DexTracker (internal)"],
  [/\briskAnalyst\b/i, "riskAnalyst (internal)"],
  [/\bsecurity[_ ]analyst\b/i, "security_analyst (internal)"],
  [/\bfarm(Analyst|Tracker)\b/i, "farm* (internal)"],
  [/\btxDecoder\b/i, "txDecoder (internal)"],
  [/\brisk[- ]feed\b/i, "risk-feed (internal)"],
  [/\bour (own )?feed\b/i, "\"our feed\" — name the measurement, not the pipeline"],
  [/\b\w+\.py\b/, "a .py script name"],
  [/(^|\s)~\//, "a local filesystem path"],
  [/\bcodex\b/i, "codex (internal worker)"],
  [/\bhandoff\b/i, "handoff (internal process)"],
];

/** Report-about-the-report language. Checked OUTSIDE revision history. */
const SELF: [RegExp, string][] = [
  [/\bthis (report|page|coverage|analysis) (previously|warns|called|said|takes|owes)\b/i, "report referring to itself"],
  [/\bafter publication\b/i, "\"after publication\""],
  [/\bthis report was last verified\b/i, "\"this report was last verified\""],
  [/\bprevious verification\b/i, "\"previous verification\""],
  [/lesson about this report/i, "methodology self-critique"],
  [/\breasoning also broke\b/i, "methodology self-critique"],
];

const files = (await readdir(REPORTS)).filter((f) => f.endsWith(".md"));
if (files.length < 10) {
  console.error(`check-internal-leaks: found only ${files.length} reports — refusing to pass blind.`);
  process.exit(1);
}

const problems: string[] = [];
for (const file of files) {
  const text = await readFile(join(REPORTS, file), "utf8");
  const parts = text.split("\n---");
  // Frontmatter `#` comments are YAML and never render; only the body ships.
  const body = parts.length > 1 ? parts.slice(1).join("\n---") : text;

  for (const [re, label] of INTERNAL) {
    const m = body.match(re);
    if (m) problems.push(`${file}: names ${label} — "${m[0]}"`);
  }
  // Asset history in the revision block may legitimately say "previously".
  const cut = body.search(/^(## Revision history|\*Revision history)/im);
  const main = cut > 0 ? body.slice(0, cut) : body;
  for (const [re, label] of SELF) {
    const m = main.match(re);
    if (m) problems.push(`${file}: ${label} — "${m[0]}"`);
  }
}

if (problems.length) {
  console.error(`check-internal-leaks: ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  ${p}`);
  console.error(
    `\nUse the fact, not the citation — a measurement stands on being measured.\n` +
      `And the reader is assumed to be reading for the first time.`,
  );
  process.exit(1);
}
console.log(`check-internal-leaks: ${files.length} reports, no internal references in bodies.`);
