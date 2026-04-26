#!/usr/bin/env tsx
/**
 * Writes netlify/edge-functions/gated-slugs.json listing slugs of reports with
 * audience: "institutional". The edge-function gate reads this to know what to
 * protect. Run as part of prebuild so the file is current every deploy.
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";

const REPO_ROOT = resolve(import.meta.dirname, "..");
const REPORTS_DIR = join(REPO_ROOT, "src", "content", "reports");
const OUT_FILE = join(REPO_ROOT, "netlify", "edge-functions", "gated-slugs.json");

function pickFrontmatter(md: string): Record<string, string> {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const out: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-z_]+):\s*"?([^"\n]+?)"?\s*$/i);
    if (kv) out[kv[1]] = kv[2];
  }
  return out;
}

async function main() {
  // Match the [slug].astro filter: on production builds, only institutional
  // reports flagged production: true are accessible; the gate must match.
  const isProductionStage = process.env.PUBLIC_STAGE === "production";
  const files = (await readdir(REPORTS_DIR)).filter((f) => f.endsWith(".md"));
  const gated: string[] = [];
  for (const f of files) {
    const body = await readFile(join(REPORTS_DIR, f), "utf8");
    const fm = pickFrontmatter(body);
    if (fm.audience !== "institutional" || !fm.slug) continue;
    if (fm.published === "false") continue;
    if (isProductionStage && fm.production !== "true") continue;
    gated.push(fm.slug);
  }
  gated.sort();
  await mkdir(join(REPO_ROOT, "netlify", "edge-functions"), { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(gated, null, 2) + "\n");
  console.log(`gated-slugs.json: ${gated.length} slug(s) — ${gated.join(", ") || "(none)"}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
