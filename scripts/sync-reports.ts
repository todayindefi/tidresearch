#!/usr/bin/env tsx
/**
 * Copies approved reports from ~/riskAnalyst/assets into src/content/reports.
 * Reads slugs from reports.allowlist.json.
 *
 * Run locally before committing — Netlify builds from what's checked in.
 *
 * ⚠️ PRUNING IS OPT-IN AND GUARDED, and it did not used to be. Until 2026-10-04 this
 * script unconditionally `unlink`ed every .md in src/content/reports that was not on
 * the allowlist. The corpus moved to independent authoring; the allowlist did not
 * follow and still lists 4 slugs. ⚠️ So a bare `npm run sync-reports` would have
 * DELETED 61 OF 65 PUBLISHED REPORTS — recoverable from git, but a large silent
 * destructive diff behind a command whose own instruction is "run locally before
 * committing", and wired into no check that would have caught it.
 *
 * ⚠️ The deeper point: bulk sync is contrary to standing policy. Reports are approved
 * and published ONE AT A TIME; there is no mode in which deleting the corpus to match
 * a 4-slug list is the intended outcome. Retiring this script entirely is the open
 * question — the guard below makes it safe meanwhile.
 */
import { readFile, writeFile, mkdir, readdir, unlink, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { homedir } from "node:os";

const REPO_ROOT = resolve(import.meta.dirname, "..");
const SOURCE_DIR = join(homedir(), "riskAnalyst", "assets");
const TARGET_DIR = join(REPO_ROOT, "src", "content", "reports");
const ALLOWLIST = join(REPO_ROOT, "reports.allowlist.json");
/** Blast-radius cap. A prune larger than this is a stale allowlist, not an intent. */
const MAX_PRUNE = 3;

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`Source not found: ${SOURCE_DIR}`);
    process.exit(1);
  }
  const allowlist: string[] = JSON.parse(await readFile(ALLOWLIST, "utf8"));
  if (!Array.isArray(allowlist)) {
    console.error("reports.allowlist.json must be a JSON array of slugs");
    process.exit(1);
  }

  await mkdir(TARGET_DIR, { recursive: true });

  let copied = 0;
  let skipped = 0;

  // ⚠️ COPYING IS ALSO OPT-IN, and for the same reason as pruning. The four allowlisted
  // slugs are all LIVE, INDEPENDENTLY AUTHORED published reports, and the sources are
  // riskAnalyst's INTERNAL assets — a different document for a different audience.
  // Copying silently replaced 1,148 lines across crvusd, frax, ousd and usdd when this
  // was run once on 2026-10-04 to test the prune guard. Reverted from git.
  // ⚠️ Bulk sync is contrary to standing policy either way: reports are approved and
  // published one at a time.
  if (!process.argv.includes("--copy")) {
    console.log(
      `\n⚠️  ${allowlist.length} allowlisted slug(s) were NOT copied.\n` +
        `    Copying is opt-in: re-run with --copy if overwriting published reports with\n` +
        `    riskAnalyst's internal versions is genuinely what you want. It usually is not —\n` +
        `    these reports are authored here, and the internal files are a different document.`,
    );
  } else
  for (const slug of allowlist) {
    const src = join(SOURCE_DIR, `${slug}.md`);
    if (!existsSync(src)) {
      console.error(`  ✗ ${slug}: source missing (${src})`);
      process.exit(1);
    }
    const body = await readFile(src, "utf8");
    if (!body.startsWith("---")) {
      console.error(`  ✗ ${slug}: missing frontmatter`);
      process.exit(1);
    }
    // ⚠️ REFUSE TO OVERWRITE A DIVERGED TARGET. Measured 2026-10-04: NONE of the four
    // allowlisted slugs is in verbatim sync — crvusd differs by 779 lines, frax 506,
    // usdd 116, ousd 88. So a copy here never refreshes; it always REPLACES authored
    // work with a document written for a different audience.
    // ⚠️ Divergence means the ALLOWLIST is wrong, not that the published report is.
    // Same reasoning as MAX_PRUNE: a large destructive diff is evidence of a stale
    // config, never an instruction. --force is the deliberate override.
    const dst = join(TARGET_DIR, `${slug}.md`);
    if (existsSync(dst) && (await readFile(dst, "utf8")) !== body) {
      if (!process.argv.includes("--force")) {
        console.error(
          `  ✗ ${slug}: target has DIVERGED from source — refusing to overwrite.\n` +
            `      The published report is independently authored; the source is an internal\n` +
            `      document. Remove ${slug} from reports.allowlist.json, or pass --force if you\n` +
            `      genuinely mean to discard the authored version.`,
        );
        skipped++;
        continue;
      }
      console.warn(`  ! ${slug}: overwriting a diverged target under --force`);
    }
    await writeFile(dst, body);
    console.log(`  ✓ ${slug}`);
    copied++;
  }

  // Prune anything not on the allowlist — OPT-IN, and refuses a large blast radius.
  const existing = (await readdir(TARGET_DIR)).filter((f) => f.endsWith(".md"));
  const allow = new Set(allowlist.map((s) => `${s}.md`));
  const doomed = existing.filter((f) => !allow.has(f));
  let pruned = 0;

  if (doomed.length === 0) {
    // nothing to do
  } else if (!process.argv.includes("--prune")) {
    console.log(
      `\n⚠️  ${doomed.length} report(s) are not on the allowlist and were NOT deleted.\n` +
        `    Pruning is opt-in: re-run with --prune if deletion is genuinely what you want.\n` +
        `    ⚠️ The allowlist has ${allowlist.length} slug(s) and the corpus has ${existing.length} ` +
        `report(s); that gap is almost certainly the allowlist being stale, not the corpus being wrong.`,
    );
  } else if (doomed.length > MAX_PRUNE) {
    console.error(
      `\n✗ Refusing to prune ${doomed.length} report(s) — the cap is ${MAX_PRUNE}.\n` +
        `  A prune this large means the allowlist is stale, not that the corpus should be deleted.\n` +
        `  Fix reports.allowlist.json, or raise MAX_PRUNE deliberately if you truly mean it.`,
    );
    process.exit(1);
  } else {
    for (const f of doomed) {
      await unlink(join(TARGET_DIR, f));
      console.log(`  - pruned ${f}`);
      pruned++;
    }
  }

  console.log(
    `\nSynced ${copied} report(s)` +
      (skipped ? `, SKIPPED ${skipped} diverged` : "") +
      (pruned ? `, pruned ${pruned}` : "") +
      `.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
