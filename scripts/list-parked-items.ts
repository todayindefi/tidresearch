/**
 * Per-asset PARKED ITEMS — the work deliberately deferred to an asset's next refresh.
 *
 * WHY THIS EXISTS. On 2026-10-03 the owner asked whether the per-asset backlog was
 * clear after three assets had been refreshed that week. It was not, and nothing
 * could answer the question: parked items lived in frontmatter comments, in body
 * prose and in session memory, with no shared marker. A grep of report BODIES came
 * back nearly empty and looked like "clear" — ⚠️ the same shape as a check blind to
 * a class reporting clean.
 *
 * ⚠️ A refresh is exactly when these should be cleared, and exactly when nobody
 * remembers them: weETH took a full frame migration and syrupUSDC an axis-3 refresh
 * on 2026-10-02, and neither surfaced its own parked items. One was found only
 * because someone happened to be editing the frontmatter for an unrelated reason.
 *
 * THE CONVENTION. One line in the report's frontmatter comments:
 *
 *   # PARKED: <what is undecided> [owner: tidr|riskAnalyst|owner] [since: YYYY-MM-DD]
 *
 * Owner is who must act, not who noticed. `since` is when it was parked, so age is
 * visible — a parked item nobody has looked at for three months is a decision by
 * default, which is the failure mode in feedback_deliberate_states_decay.
 *
 * WHAT THIS CANNOT SEE, stated so a clean run is not over-read: it finds TAGGED
 * items exactly, and guesses at untagged ones from legacy phrasings. The guess is
 * lossy in both directions — it misses `the open item` in lower case and flags
 * `the deferral was correct`, which describes a deferral that was RESOLVED. ⚠️ So
 * the untagged list is a triage queue, never an inventory. Tag an item and it moves
 * to the real list; the real list is the only one worth trusting.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/reports";
/** The build passes --summary: one line, because a 20-line dump on every build is
 *  how a check teaches people to scroll past it. Run with no flag for the list. */
const SUMMARY = process.argv.includes("--summary");

/**
 * Explicit, zero-ambiguity marker. Everything else is a guess.
 *
 * ⚠️ THE GLYPH PREFIX IS PART OF THE MARKER, AND LEAVING IT OUT HID THREE REAL ITEMS.
 * The first version required `PARKED:` immediately after `#`, so every item written as
 * `# ⚠️ PARKED: …` — the natural form when the item is a warning, which is most of them —
 * was silently skipped. Measured 2026-10-04: 23 matched, 3 invisible, and the three had
 * been written that same day by someone who believed they were tracked.
 * ⚠️ A backlog scanner that misses items reports a SHORTER backlog, which reads as
 * progress. That is the failure direction to design against.
 */
const TAGGED = /^#\s*(?:[⚠✅🚧❗️]|\uFE0F|\s)*PARKED:\s*(.+)$/u;

/**
 * Legacy phrasings that USUALLY mean a parked item, matched in frontmatter comments
 * only — body prose uses "open" constantly ("open market", "open to anyone", "open
 * source") and scanning it produced 99 candidates at roughly 10% precision.
 */
const LEGACY = /\bOPEN QUESTION|⚠️\s*\*{0,2}OPEN\b|\bOPEN\.|\bOPEN,|[Dd]eferred|[Aa]waiting|\bundecided\b|referred to the owner|still unresolved|it is the open item/;

type Item = { file: string; text: string; owner?: string; since?: string };
const tagged: Item[] = [];
const untagged: Item[] = [];

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const text = readFileSync(join(DIR, file), "utf8");
  const end = text.indexOf("\n---", 4);
  if (end === -1) continue;
  for (const raw of text.slice(0, end).split("\n")) {
    const line = raw.trim();
    if (!line.startsWith("#")) continue;
    const t = line.match(TAGGED);
    if (t) {
      tagged.push({
        file,
        text: t[1].replace(/\s*\[(owner|since):[^\]]*\]/g, "").trim(),
        owner: t[1].match(/\[owner:\s*([^\]]+)\]/)?.[1]?.trim(),
        since: t[1].match(/\[since:\s*([^\]]+)\]/)?.[1]?.trim(),
      });
    } else if (LEGACY.test(line)) {
      untagged.push({ file, text: line.replace(/^#+\s*/, "") });
    }
  }
}

const byFile = (rows: Item[]) =>
  [...new Set(rows.map((r) => r.file))].sort().map((f) => [f, rows.filter((r) => r.file === f)] as const);

if (!SUMMARY && tagged.length) {
  console.log(`\nPARKED ITEMS — ${tagged.length} across ${new Set(tagged.map((t) => t.file)).size} report(s)\n`);
  for (const [file, rows] of byFile(tagged)) {
    console.log(`  ${file}`);
    for (const r of rows) {
      const age = r.since ? Math.max(0, Math.floor((Date.now() - Date.parse(r.since)) / 86400000)) : undefined;
      const meta = [r.owner && `owner ${r.owner}`, r.since && `parked ${r.since}${age !== undefined ? ` · ${age}d` : ""}`]
        .filter(Boolean)
        .join(" · ");
      console.log(`    - ${r.text}${meta ? `\n      (${meta})` : ""}`);
    }
  }
} else if (!SUMMARY) {
  console.log("\nPARKED ITEMS — none tagged.\n");
}

if (!SUMMARY && untagged.length) {
  console.log(
    `\n⚠️  UNTAGGED CANDIDATES — ${untagged.length} line(s) in ${new Set(untagged.map((t) => t.file)).size} report(s).`,
  );
  console.log("    A TRIAGE QUEUE, NOT AN INVENTORY: lossy both ways. Read each, then tag it or leave it.\n");
  for (const [file, rows] of byFile(untagged)) {
    console.log(`  ${file}`);
    for (const r of rows) console.log(`    ? ${r.text.slice(0, 140)}`);
  }
}

const oldest = tagged
  .filter((t) => t.since)
  .sort((a, b) => Date.parse(a.since!) - Date.parse(b.since!))[0];
console.log(
  `check-parked-items: ${tagged.length} parked item(s) across ` +
    `${new Set(tagged.map((t) => t.file)).size} report(s)` +
    (oldest ? `, oldest ${oldest.since} (${oldest.file})` : "") +
    (untagged.length ? `; ${untagged.length} untagged candidate(s) to triage` : "") +
    (SUMMARY ? ` — \`npx tsx scripts/list-parked-items.ts\` for the list` : ""),
);
