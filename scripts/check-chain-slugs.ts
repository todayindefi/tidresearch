/**
 * Build gate for `chains:` frontmatter slugs.
 *
 * WHY THIS EXISTS. `chains` is a JOIN KEY, and it can be wrong in three
 * directions — all three were hit on 2026-09-09 in a single day:
 *   MISSING   a real deployment absent from the key (usdg / Mantle) -> reads as zero
 *   PHANTOM   a key entry with no deployment behind it (usdm / Ethereum)
 *   UNMAPPED  a slug chains.ts does not know -> chainLabel() falls through to the
 *             raw lowercase string, so the page renders "Ethereum · xrpl" and the
 *             value groups on a key nothing else shares.
 *
 * Only the third is mechanically detectable, so it is the one gated here. The
 * other two need measurement against the issuer's published deployment set and
 * cannot be checked from inside the repo.
 *
 * A near-miss worth recording: an alias table that normalizes for DISPLAY makes
 * this class invisible to a reader-facing review, because the site looks fine
 * for every slug that happens to be mapped. It was found by counting slugs, not
 * by reading pages.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { isKnownChain } from "../src/lib/chains.ts";

const DIR = "src/content/reports";
const errors: string[] = [];

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const text = readFileSync(join(DIR, file), "utf8");
  const end = text.indexOf("\n---", 4);
  const fm = end === -1 ? text.slice(0, 6000) : text.slice(0, end);
  const m = fm.match(/^chains: (\[.*\])$/m);
  if (!m) continue;
  let slugs: string[];
  try {
    slugs = JSON.parse(m[1]);
  } catch {
    errors.push(`${file}: chains is not valid JSON — ${m[1]}`);
    continue;
  }
  for (const s of slugs) {
    if (!isKnownChain(s)) {
      errors.push(
        `${file}: chain slug "${s}" is not in src/lib/chains.ts. It will render as the raw ` +
          `lowercase string beside properly-labelled chains, and it groups on its own key. ` +
          `Add it to ALIASES and LABELS.`,
      );
    }
  }
}

if (errors.length) {
  console.error("\n✗ chain-slug check failed:\n");
  for (const e of errors) console.error("  " + e);
  console.error("");
  process.exit(1);
}
console.log("✓ chain-slug check: every chains: slug resolves in src/lib/chains.ts");
