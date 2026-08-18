#!/usr/bin/env tsx
/**
 * Warns when a report declares a frontmatter key its category schema does not define.
 *
 * WHY THIS EXISTS: zod's z.object() strips unknown keys SILENTLY. Every category
 * schema in src/content.config.ts is a plain z.object(), so any frontmatter key the
 * schema does not name is discarded at parse time — no error, no warning, nothing in
 * the build log. The key is simply gone before any component can read it.
 *
 * That gap shipped three bugs in a single day (2026-08-18):
 *   - `issuer` was declared per-category and forgotten in wrappedAxes, so 21
 *     vault-share and wrapped-token reports named a legal counterparty that was
 *     thrown away at parse time and never rendered to a reader.
 *   - Both Syrup retail pages were filed as `stablecoin` while being vault shares,
 *     so their volatility/structural/redemption axes had nowhere to land.
 *   - thbill-retail, same cause.
 *
 * None of them failed a build. All three were found by accident.
 *
 * The schemas cannot be imported here: content.config.ts imports "astro:content" and
 * "astro/loaders", which are Astro-virtual modules and do not resolve under plain tsx.
 * So we parse the config text instead. That means this check can drift from the real
 * schema if the config's formatting changes radically — if the parse finds no
 * categories at all it exits non-zero rather than passing vacuously.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

/**
 * Gate, not a warning. The backlog it was staged behind is clear: as of 2026-08-18
 * the repo reports 0 dropped keys of 54 files, so any new one is a regression
 * introduced by the commit under test, and failing is cheaper than discovering it
 * the way the `issuer` bug was found — by accident, 21 reports later.
 */
const WARN_ONLY = false;

const REPO_ROOT = resolve(import.meta.dirname, "..");
const CONFIG = join(REPO_ROOT, "src", "content.config.ts");

/** Grab `const <name> = ...{ ... }` up to the first closing brace at column 0. */
function namedBlock(src: string, name: string): string | null {
  const start = src.search(new RegExp(`^const ${name} = `, "m"));
  if (start === -1) return null;
  const rest = src.slice(start);
  const end = rest.search(/^\}/m);
  return end === -1 ? null : rest.slice(0, end);
}

/** Property names declared directly in a block (2-space indent, not nested deeper). */
function propNames(block: string): string[] {
  return [...block.matchAll(/^ {2}([A-Za-z_]\w*):/gm)].map((m) => m[1]);
}

/** Top-level frontmatter keys only — column 0, so list items and nested maps are excluded. */
function frontmatterKeys(md: string): string[] {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return [];
  return [...m[1].matchAll(/^([A-Za-z_]\w*):/gm)].map((x) => x[1]);
}

type Schema = { name: string; category: string; keys: Set<string> };

function buildSchemaMap(src: string): Schema[] {
  const common = propNames(namedBlock(src, "common") ?? "");
  const wrapped = propNames(namedBlock(src, "wrappedAxes") ?? "");
  const names = [...src.matchAll(/^const (\w+) = z\.object\(\{/gm)].map((m) => m[1]);

  const out: Schema[] = [];
  for (const name of names) {
    const block = namedBlock(src, name);
    if (!block) continue;
    const cat = block.match(/category: z\.literal\("([\w-]+)"\)/);
    if (!cat) continue; // not a category schema (mintPath, chainOverride, ...)
    const keys = new Set(propNames(block));
    if (block.includes("...common")) common.forEach((k) => keys.add(k));
    if (block.includes("...wrappedAxes")) wrapped.forEach((k) => keys.add(k));
    out.push({ name, category: cat[1], keys });
  }
  return out;
}

async function main() {
  const src = await readFile(CONFIG, "utf8");
  const schemas = buildSchemaMap(src);

  if (schemas.length === 0) {
    console.error(
      "[frontmatter] could not parse any category schemas from content.config.ts.\n" +
        "              The parser has drifted from the config's shape — fix this script\n" +
        "              rather than letting the check pass without inspecting anything."
    );
    process.exit(1);
  }

  const byCategory = new Map(schemas.map((s) => [s.category, s]));
  let offenders = 0;
  let scanned = 0;

  for (const dir of ["reports", "protocols"]) {
    const base = join(REPO_ROOT, "src", "content", dir);
    let files: string[];
    try {
      files = (await readdir(base)).filter((f) => f.endsWith(".md"));
    } catch {
      continue;
    }

    for (const file of files) {
      const md = await readFile(join(base, file), "utf8");
      const keys = frontmatterKeys(md);
      const category = md.match(/^category:\s*"?([\w-]+)"?/m)?.[1];
      if (!category) continue;
      scanned++;

      const schema = byCategory.get(category);
      if (!schema) {
        offenders++;
        console.warn(`[frontmatter] ${dir}/${file}: unknown category "${category}"`);
        continue;
      }

      const dropped = keys.filter((k) => !schema.keys.has(k));
      if (dropped.length) {
        offenders++;
        console.warn(
          `[frontmatter] ${dir}/${file} (${category}) declares ${dropped.length} key(s) ` +
            `the ${schema.name} schema drops: ${dropped.join(", ")}\n` +
            `              These are discarded at parse time and will never render. ` +
            `Add them to the schema, or delete them.`
        );
      }
    }
  }

  const verdict = `[frontmatter] ${scanned} file(s) checked, ${offenders} with dropped keys.`;
  if (offenders && !WARN_ONLY) {
    console.error(`${verdict} Failing the build (WARN_ONLY is off).`);
    process.exit(1);
  }
  console.log(verdict);
}

main().catch((err) => {
  console.error("[frontmatter] check failed to run:", err);
  process.exit(1);
});
