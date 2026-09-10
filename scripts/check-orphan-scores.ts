#!/usr/bin/env tsx
/**
 * Fails the build on a frontmatter *_score that renders nowhere and is not
 * declared as a deliberate cross-surface field.
 *
 * WHY THIS EXISTS, and why it is NOT a "strip the dead fields" script:
 *
 * check-frontmatter-keys.ts catches keys the zod schema DROPS. This is the other
 * half: keys the schema KEEPS, that parse cleanly, that a reader never sees —
 * because the active rubric has no row for them. A score can be correct, current,
 * schema-valid, agreed with riskAnalyst, and still be invisible on the page.
 *
 * The case that produced this (2026-09-10): 15 six-frame reports carry a
 * `redemption_score`. The six-axis frame folds redemption into axis 3 on the
 * worse-leg rule, so SIX_AXES has no Redemption row and the value renders nowhere.
 * It looked exactly like 15 stray fields left over from the pre-six rubric.
 *
 * ⚠️ IT IS NOT. Stripping them would have broken two things outside this repo:
 *   - riskAnalyst/scripts/publish_feed.py publishes `redemption_score` to the
 *     PUBLIC feed (todayindefi.github.io/risk-feed) under the reader-facing
 *     description "Ability to redeem to underlying at par" — 86 of 126 assets in
 *     the live 2026-07-22 snapshot carry it;
 *   - riskAnalyst/scripts/portfolio_risk.py:561 applies a -0.5 adjustment from it
 *     when days_to_maturity < 14.
 *
 * So the rule is: an orphan score must be EXPLAINED, not removed. Add it to
 * CROSS_SURFACE with the consumer and the reason, or delete it deliberately.
 * The point is that the next sweep finds the reason where it looks for the defect.
 *
 * WHAT THIS CANNOT SEE: whether the downstream consumer still consumes it. The
 * CROSS_SURFACE reasons carry a `verified` date for that — they are assertions
 * about another repo, and they decay. Re-check them, do not trust them.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const REPO_ROOT = resolve(import.meta.dirname, "..");
const REPORTS = join(REPO_ROOT, "src", "content", "reports");
const SIDEBAR = join(REPO_ROOT, "src", "components", "report", "RiskSidebar.astro");
const HERO = join(REPO_ROOT, "src", "components", "report", "ScoreHero.astro");

/**
 * Score fields that legitimately render nowhere on a page because another PUBLIC
 * surface publishes them. Keyed by field; the reason is the whole point of the entry.
 */
const CROSS_SURFACE: Record<string, { consumer: string; why: string; verified: string }> = {
  redemption_score: {
    consumer: "riskAnalyst publish_feed.py (public risk-feed) + portfolio_risk.py:561",
    why:
      "The six-axis frame folds redemption into axis 3 (Liquidity & Exit, worse-leg rule), " +
      "so it has no row here. The feed still publishes it as a standalone scored axis. " +
      "Values agreed across both surfaces when last checked; only the FRAMING diverges, " +
      "and that reconciliation needs both owners. Do not strip to make this gate quiet.",
    verified: "2026-09-10",
  },
};

/**
 * Renderable keys, PER FRAME — because the union is a lie.
 *
 * ⚠️ The first version of this gate harvested every `key:` in both components into
 * one set and passed vacuously on the exact case it was written for: ScoreHero's
 * wrapped-token rubric has a Redemption row, so `redemption_score` looked renderable
 * everywhere, including on six-frame reports where SIX_AXES has no such row. A gate
 * that unions mutually-exclusive rubrics cannot see a field that is live in one and
 * dead in another. Resolve the frame first, then ask what it renders.
 */
async function renderableKeys(): Promise<{ six: Set<string>; any: Set<string> }> {
  const sidebar = await readFile(SIDEBAR, "utf8");
  const src = sidebar + (await readFile(HERO, "utf8"));
  const any = new Set<string>();
  for (const m of src.matchAll(/key:\s*"(\w+_score)"/g)) any.add(m[1]);

  const block = sidebar.match(/const SIX_AXES: Axis\[\] = \[([\s\S]*?)\];/);
  if (!block) {
    console.error("check-orphan-scores: could not locate SIX_AXES in RiskSidebar.astro.");
    process.exit(1);
  }
  const six = new Set<string>();
  for (const m of block[1].matchAll(/key:\s*"(\w+_score)"/g)) six.add(m[1]);
  return { six, any };
}

const files = (await readdir(REPORTS)).filter((f) => f.endsWith(".md"));
const { six: sixKeys, any: anyKeys } = await renderableKeys();

// Refuse to pass vacuously: if the harvest found nothing, the components moved.
if (anyKeys.size < 6 || sixKeys.size < 6) {
  console.error(
    `check-orphan-scores: harvested ${anyKeys.size} rubric keys / ${sixKeys.size} SIX_AXES keys from the ` +
      `components — the parse has drifted, not the reports. Failing rather than passing blind.`,
  );
  process.exit(1);
}

const orphans: string[] = [];
const explained = new Map<string, number>();

for (const file of files) {
  const text = await readFile(join(REPORTS, file), "utf8");
  const fm = text.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!fm) continue;
  // A six-frame report renders SIX_AXES and nothing else, whatever its category
  // rubric would otherwise allow. This is the distinction the union erased.
  const isSix = /^axis_frame:\s*six\s*$/m.test(fm[1]);
  const renderable = isSix ? sixKeys : anyKeys;
  // overall_score is the headline and is rendered by a different path than the axis rows.
  for (const m of fm[1].matchAll(/^(\w+_score):\s*[\d.]+/gm)) {
    const key = m[1];
    if (key === "overall_score" || renderable.has(key)) continue;
    if (CROSS_SURFACE[key]) {
      explained.set(key, (explained.get(key) ?? 0) + 1);
      continue;
    }
    orphans.push(`${file}: ${key} renders nowhere and is not declared in CROSS_SURFACE`);
  }
}

for (const [key, n] of explained) {
  const e = CROSS_SURFACE[key];
  console.log(`check-orphan-scores: ${key} — ${n} report(s), cross-surface via ${e.consumer} (verified ${e.verified})`);
}

if (orphans.length) {
  console.error(`\ncheck-orphan-scores: ${orphans.length} orphan score(s):`);
  for (const o of orphans) console.error(`  ${o}`);
  console.error(
    `\nAn orphan score is a number you believe you published and a reader cannot see.\n` +
      `Fix it by giving it a rubric row, declaring it in CROSS_SURFACE with the consumer\n` +
      `and reason, or removing it deliberately. Do not remove it just to pass this gate.`,
  );
  process.exit(1);
}
console.log(`check-orphan-scores: ${files.length} reports, no unexplained orphan scores.`);
