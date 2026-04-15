#!/usr/bin/env tsx
/**
 * Copies approved reports from ~/riskAnalyst/assets into src/content/reports.
 * Reads slugs from reports.allowlist.json. Removes any synced report not on the list.
 *
 * Run locally before committing — Netlify builds from what's checked in.
 */
import { readFile, writeFile, mkdir, readdir, unlink, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { homedir } from "node:os";

const REPO_ROOT = resolve(import.meta.dirname, "..");
const SOURCE_DIR = join(homedir(), "riskAnalyst", "assets");
const TARGET_DIR = join(REPO_ROOT, "src", "content", "reports");
const ALLOWLIST = join(REPO_ROOT, "reports.allowlist.json");

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
    await writeFile(join(TARGET_DIR, `${slug}.md`), body);
    console.log(`  ✓ ${slug}`);
    copied++;
  }

  // Prune anything not on the allowlist
  const existing = (await readdir(TARGET_DIR)).filter((f) => f.endsWith(".md"));
  const allow = new Set(allowlist.map((s) => `${s}.md`));
  let pruned = 0;
  for (const f of existing) {
    if (!allow.has(f)) {
      await unlink(join(TARGET_DIR, f));
      console.log(`  - pruned ${f}`);
      pruned++;
    }
  }

  console.log(`\nSynced ${copied} report(s)${pruned ? `, pruned ${pruned}` : ""}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
