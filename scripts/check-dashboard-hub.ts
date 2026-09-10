#!/usr/bin/env tsx
/**
 * Keeps the dashboard hub honest about the two legs of the production join.
 *
 * WHY THIS EXISTS: the hub used to embed iframes, so a wrong entry was VISIBLE —
 * a reader saw a broken frame on our page. It now links out, and a wrong entry is
 * INVISIBLE until someone clicks it. The list drifted badly while it was still
 * embedding (19 entries against backing-monitor's 25 live, 7 live dashboards
 * missing entirely, 9 more gated off production for no recorded reason), so
 * hand-maintenance has already been shown not to hold.
 *
 * The owner's rule (2026-09-10): a tile ships to production only when BOTH
 *   (a) the asset has a production report here, and
 *   (b) backing-monitor serves a live dashboard for it.
 *
 * Leg (a) is checkable in CI and is enforced hard. Leg (b) needs
 * ~/backing-monitor, which does not exist on the Netlify builder.
 *
 * ⚠️ SO LEG (b) IS CHECKED ONLY WHEN THE REGISTRY IS PRESENT, AND SAYS SO OUT
 * LOUD WHEN IT IS NOT. A check that silently skips the half it cannot see
 * reports the hub clean and means "I did not look" — that is the failure this
 * repo keeps hitting, most recently a feed sweep that read the wrong nesting
 * level and reported 0 of 126 when the answer was 86.
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { homedir } from "node:os";

const REPO_ROOT = resolve(import.meta.dirname, "..");
const HUB = join(REPO_ROOT, "src", "pages", "dashboards", "index.astro");
const REPORTS = join(REPO_ROOT, "src", "content", "reports");
const REGISTRY = join(homedir(), "backing-monitor", "data", "assets.json");

const src = await readFile(HUB, "utf8");
const start = src.indexOf("const allDashboards");
const body = src.slice(start, src.indexOf("\n];", start));

// Split on object boundaries so each entry's fields stay together.
const entries = body
  .split(/\n  \{/)
  .slice(1)
  .map((chunk) => ({
    slug: chunk.match(/\n?\s*slug:\s*"([^"]+)"/)?.[1],
    asset: chunk.match(/\n?\s*asset:\s*"([^"]+)"/)?.[1],
    name: chunk.match(/\n?\s*name:\s*"([^"]+)"/)?.[1] ?? "?",
    production: /production:\s*true/.test(chunk),
    hasUrl: /\n\s*url:\s*"/.test(chunk),
  }));

if (entries.length < 5) {
  console.error(
    `check-dashboard-hub: parsed only ${entries.length} entries from the hub — ` +
      `the parse has drifted, not the data. Failing rather than passing blind.`,
  );
  process.exit(1);
}

const errors: string[] = [];

// ---- leg (a): a production tile needs a production report -------------------
for (const e of entries) {
  if (!e.asset) errors.push(`${e.name}: entry has no \`asset\` (the ?asset= slug)`);
  if (!e.slug) {
    if (e.production) errors.push(`${e.name}: production tile with no report slug`);
    continue; // staging tile with no report (cusd) is deliberate
  }
  const file = join(REPORTS, `${e.slug}.md`);
  if (!existsSync(file)) {
    errors.push(`${e.name}: report slug "${e.slug}" has no file — the link would 404`);
    continue;
  }
  if (e.production) {
    const fm = (await readFile(file, "utf8")).split("\n---")[0];
    if (!/^production: true/m.test(fm)) {
      errors.push(
        `${e.name}: tile is production but report "${e.slug}" is not — ` +
          `fails leg (a) of the join`,
      );
    }
  }
}

// ---- leg (b): the dashboard must actually be live ---------------------------
if (existsSync(REGISTRY)) {
  const reg = JSON.parse(await readFile(REGISTRY, "utf8"));
  const rowsRaw = Array.isArray(reg) ? reg : (reg.assets ?? reg);
  const rows = Array.isArray(rowsRaw) ? rowsRaw : Object.values(rowsRaw);
  const live = new Set(
    rows.filter((r: any) => r?.published === true).map((r: any) => r.slug),
  );
  if (live.size === 0) {
    console.error("check-dashboard-hub: registry parsed to ZERO live slugs — refusing to pass.");
    process.exit(1);
  }
  for (const e of entries) {
    // thBILL is its own repo with its own proxy rule; not in this registry.
    if (e.hasUrl || !e.asset) continue;
    if (!live.has(e.asset)) {
      errors.push(`${e.name}: ?asset=${e.asset} is not published by backing-monitor`);
    }
  }
  console.log(`check-dashboard-hub: leg (b) checked against ${live.size} live slugs.`);
} else {
  console.log(
    `check-dashboard-hub: ⚠️ leg (b) NOT CHECKED — no registry at ${REGISTRY}. ` +
      `Liveness of each ?asset= link is unverified in this run (expected on CI).`,
  );
}

if (errors.length) {
  console.error(`\ncheck-dashboard-hub: ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`check-dashboard-hub: ${entries.length} tiles, join intact.`);
