#!/usr/bin/env tsx
/**
 * Flags places where two records name the SAME on-chain entity and describe it
 * DIFFERENTLY.
 *
 * WHY THIS EXISTS: every other check in this repo verifies a claim against
 * itself — does the frontmatter parse, does the page build, do the dates agree.
 * None of them can see the failure that has cost the most: a claim that is
 * internally fine and contradicts what we already say somewhere else.
 *
 * Four instances in a single day (2026-08-26), all in production copy:
 *
 *   - apyusd-retail said the two Apyx Safes "share only 3 of 6 owners" while
 *     apxusd-retail said, correctly, "the same six owners as Apyx's other admin
 *     Safes". Same issuer, adjacent pages, opposite claims. The published one
 *     was wrong in the direction that flattered the subject.
 *   - The correction that replaced it then labelled 0x37b0779a…a555 the "bridge
 *     Safe" when apxusd-retail already called it the STRCx custodian. One
 *     address, two roles, two pages, one repo.
 *   - apyusd's bridge bullet said "Ethereum <-> Base" while apxusd already
 *     carried the BNB Chain deployment.
 *   - about.astro promised every report links to a dashboard; the same claim sat
 *     unexamined in the services copy one file over.
 *
 * None of these is findable by search, because nothing in either record looks
 * wrong on its own. They are only visible in the comparison, and the comparison
 * has to be keyed on the ENTITY — an address — not on the asset or the file.
 * Keying on the asset would see both Apyx pages, note that both cover Apyx, and
 * report agreement.
 *
 * WHAT IT CANNOT DO — stated plainly, because a check that oversells its own
 * coverage is the exact failure this repo keeps hitting:
 *
 *   - It does not know which side is right. A conflict is a prompt to go and
 *     measure, not a verdict. Never resolve one by editing whichever line looks
 *     more convenient.
 *   - Threshold conflicts are caught reliably. Verified against commit 0c3c23c,
 *     where it independently found a live 3-of-5 / 4-of-6 contradiction in
 *     thbill-full that two human correction passes had missed.
 *   - ROLE conflicts are BEST-EFFORT and vocabulary-bound. Verified against the
 *     same commit, it did NOT catch the 0x37b0779a…a555 mislabel — apyusd called
 *     it "the bridge Safe" while apxusd said STRCx "sits in" it, and "sits in"
 *     is not a role word. Adding vocabulary narrows this gap; it cannot close
 *     it. A clean run is not evidence that no role contradiction exists.
 *   - It only sees claims attached to an ADDRESS. The original apyUSD bug
 *     ("share only 3 of 6 owners") named no address at all, so nothing keyed on
 *     addresses could have found it.
 *   - Chains are advisory: one address legitimately appears on many, and one
 *     Safe address legitimately has different thresholds per chain.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, resolve, relative } from "node:path";

/**
 * Threshold conflicts are hard errors: two different M-of-N readings of one
 * address cannot both be true, and that is exactly the shape of the apyUSD bug.
 * Role and chain divergence are advisory — see the note above.
 */
const WARN_ONLY = process.argv.includes("--warn-only");
const SHOW_REVIEW = !process.argv.includes("--errors-only");

const REPO_ROOT = resolve(import.meta.dirname, "..");
const SCAN_DIRS = ["src/content/reports", "src/pages", "src/lib", "src/components"];
const SCAN_EXT = /\.(md|astro|ts|tsx)$/;

/** Full 40-hex address, or a truncated display form like 0xABdd8c8e…65e96. */
const ADDR_RE =
  /0x[0-9a-fA-F]{40}|0x[0-9a-fA-F]{4,}\s*(?:…|\.\.\.|&hellip;)\s*[0-9a-fA-F]{2,}/g;

/**
 * "4-of-6", "4 of 6". Deliberately NOT "4/6" — apxusd-retail contains "the 4/30
 * balance matches the Wolf attestation", a date that would parse as 4-of-30.
 */
const THRESHOLD_RE = /\b(\d{1,2})\s*[-‑–]?\s*of\s*[-‑–]?\s*(\d{1,3})\b/gi;

const ROLE_PATTERNS: [RegExp, string][] = [
  [/\bbridge\b/i, "bridge"],
  [/\bcustod(?:y|ian)\b/i, "custody"],
  [/\bproxy\s*admin\b/i, "proxyadmin"],
  [/\btimelock\b/i, "timelock"],
  [/\btreasur(?:y|ies)\b/i, "treasury"],
  [/\bgovernor|governance\b/i, "governance"],
  [/\bminter|\bmint\b/i, "minter"],
  [/\bpauser\b/i, "pauser"],
  [/\bguardian\b/i, "guardian"],
  [/\bclawback\w*\b/i, "clawback"],
  [/\breserve\b/i, "reserve"],
  [/\boracle\b/i, "oracle"],
  [/\bsilo\b/i, "silo"],
  [/\bdeployer\b/i, "deployer"],
];

const CHAIN_PATTERNS: [RegExp, string][] = [
  [/\bethereum\b|\bmainnet\b/i, "ethereum"],
  [/\bbase\b/i, "base"],
  [/\barbitrum\b/i, "arbitrum"],
  [/\boptimism\b/i, "optimism"],
  [/\bpolygon\b/i, "polygon"],
  [/\bbnb\b|\bbsc\b/i, "bnb"],
  [/\bavalanche\b/i, "avalanche"],
  [/\bgnosis\s+chain\b/i, "gnosis-chain"],
  [/\bmonad\b/i, "monad"],
  [/\bsolana\b/i, "solana"],
  [/\bplasma\b/i, "plasma"],
  [/\bsonic\b/i, "sonic"],
  [/\bmantle\b/i, "mantle"],
];

type Mention = {
  file: string;
  line: number;
  raw: string;
  full?: string;
  thresholds: string[];
  roles: string[];
  chains: string[];
  snippet: string;
};

/** leading hex run, lowercased — enough to join a truncated form to its full one */
function keyOf(addr: string): string {
  const hex = /^0x([0-9a-fA-F]+)/.exec(addr);
  return (hex ? hex[1] : addr).toLowerCase().slice(0, 6);
}

/**
 * A conjunction between a fact and an address means the fact probably belongs to
 * a DIFFERENT entity in the same sentence. Without this, syrupusdt-full's
 * "ROLE_ADMIN is held by a 4-of-7 Safe (0xd6d4…) plus a bare EOA, and
 * EXECUTOR_ROLE by a 3-of-5 Safe" hands the 3-of-5 to the 4-of-7 Safe and
 * manufactures a threshold conflict out of two correct statements.
 */
const BOUNDARY_RE = /\band\b|\bwhile\b|\bplus\b|;/i;

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (SCAN_EXT.test(e.name)) out.push(p);
  }
  return out;
}

/**
 * Attribute a nearby fact to the address it is actually about.
 *
 * A single markdown paragraph is one line and can name several Safes with
 * several thresholds. Assigning every threshold on the line to every address on
 * the line manufactures conflicts. So each fact goes to its NEAREST address, and
 * only if it is close enough to plausibly be describing it.
 */
const NEAR = 90;
function nearestOwner(factIdx: number, addrIdxs: number[]): number | null {
  let best: number | null = null;
  let bestD = Infinity;
  for (const a of addrIdxs) {
    const d = Math.abs(a - factIdx);
    if (d < bestD) {
      bestD = d;
      best = a;
    }
  }
  return best !== null && bestD <= NEAR ? best : null;
}

async function main() {
  const files: string[] = [];
  for (const d of SCAN_DIRS) files.push(...(await walk(join(REPO_ROOT, d))));

  const byKey = new Map<string, Mention[]>();

  for (const file of files) {
    const text = await readFile(file, "utf8");
    const lines = text.split("\n");
    /**
     * Revision history is where superseded values legitimately live. A
     * correction entry says "it is 4-of-6, not 3-of-5" and quotes the wrong
     * figure on purpose; counting that as a contradiction makes every honest
     * correction look like a defect, and would punish exactly the behaviour
     * this repo wants. Everything from the revision heading onward is skipped.
     */
    let inRevisionHistory = false;
    lines.forEach((line, i) => {
      if (/^#+\s*revision history|\*?\s*Revision history:/i.test(line))
        inRevisionHistory = true;
      if (inRevisionHistory) return;
      const addrs = [...line.matchAll(ADDR_RE)];
      if (addrs.length === 0) return;
      const addrIdxs = addrs.map((m) => m.index!);

      // bucket each fact onto its nearest address
      const facts = new Map<number, { t: string[]; r: string[]; c: string[] }>();
      for (const a of addrIdxs) facts.set(a, { t: [], r: [], c: [] });

      for (const m of line.matchAll(THRESHOLD_RE)) {
        const n = Number(m[1]);
        const d = Number(m[2]);
        // n-of-n is not a threshold claim ("six of six owners"); big
        // denominators are percentages, counts, and dates.
        if (n === d || d > 50 || n > d) continue;
        const owner = nearestOwner(m.index!, addrIdxs);
        if (owner === null) continue;
        const lo = Math.min(owner, m.index!);
        const hi = Math.max(owner, m.index!);
        if (BOUNDARY_RE.test(line.slice(lo, hi))) continue;
        // A Safe at the same address on a different chain legitimately has a
        // different threshold — thbill-full states three for one address and is
        // right. So a threshold is qualified by the chain named next to it, and
        // only conflicts with another reading of the SAME chain.
        // Address-sameness does not imply authority-sameness.
        // NEAREST chain mention, not the first pattern in list order. Picking by
        // list order tagged "3-of-5 on Arbitrum, 3-of-4 on Base" as @base,
        // because `base` sits earlier in CHAIN_PATTERNS than `arbitrum`.
        // The corpus writes chain-qualified thresholds two ways, and they need
        // opposite lookups:
        //   "4-of-6 on Ethereum"        -> chain AFTER, introduced by "on"
        //   "on Ethereum (**4-of-6**)"  -> chain BEFORE, threshold in parens
        // Requiring the connector for the forward case is what stops
        // "(4-of-6), Arbitrum (3-of-5)" tagging the Ethereum figure @arbitrum.
        const end = m.index! + m[0].length;
        const tagFor = (txt: string) =>
          CHAIN_PATTERNS.find(([re]) => re.test(txt))?.[1];
        const after = line.slice(end, end + 30);
        const before = line.slice(Math.max(0, m.index! - 30), m.index!);
        let chain: string | undefined;
        const fwd = /^[\s*)\]:,]*\b(?:on|for|across|@)\b\s*[([]?\s*([A-Za-z][A-Za-z ]{2,12})/.exec(after);
        if (fwd) chain = tagFor(fwd[1]);
        if (!chain) {
          const back = /([A-Za-z][A-Za-z ]{2,12})\s*[([]?[\s*]*$/.exec(before);
          if (back) chain = tagFor(back[1]);
        }
        facts.get(owner)!.t.push(chain ? `${n}-of-${d} @${chain}` : `${n}-of-${d}`);
      }
      for (const [re, tag] of ROLE_PATTERNS) {
        const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
        for (const m of line.matchAll(g)) {
          const owner = nearestOwner(m.index!, addrIdxs);
          if (owner !== null) facts.get(owner)!.r.push(tag);
        }
      }
      for (const [re, tag] of CHAIN_PATTERNS) {
        const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
        for (const m of line.matchAll(g)) {
          const owner = nearestOwner(m.index!, addrIdxs);
          if (owner !== null) facts.get(owner)!.c.push(tag);
        }
      }

      for (const m of addrs) {
        const raw = m[0].replace(/\s+/g, "");
        const f = facts.get(m.index!)!;
        const rec: Mention = {
          file: relative(REPO_ROOT, file),
          line: i + 1,
          raw,
          full: /^0x[0-9a-fA-F]{40}$/.test(raw) ? raw.toLowerCase() : undefined,
          thresholds: [...new Set(f.t)],
          roles: [...new Set(f.r)],
          chains: [...new Set(f.c)],
          snippet: line.slice(Math.max(0, m.index! - 70), m.index! + 90).trim(),
        };
        const k = keyOf(raw);
        if (!byKey.has(k)) byKey.set(k, []);
        byKey.get(k)!.push(rec);
      }
    });
  }

  let errors = 0;
  let reviews = 0;

  for (const [key, ms] of [...byKey.entries()].sort()) {
    const files = new Set(ms.map((m) => m.file));
    if (files.size < 2 && ms.length < 2) continue;

    const report = (
      severity: "CONFLICT" | "REVIEW",
      title: string,
      groups: Map<string, Mention[]>,
    ) => {
      const full = ms.find((m) => m.full)?.full ?? `0x${key}…`;
      console.log(`\n${severity === "CONFLICT" ? "✗ CONFLICT" : "· REVIEW  "}  ${full}`);
      console.log(`            ${title}`);
      for (const [val, list] of groups) {
        console.log(`            [${val}]`);
        for (const m of list) console.log(`              ${m.file}:${m.line}  ${m.snippet}`);
      }
    };

    // --- hard conflict: one address, two thresholds
    const thr = new Map<string, Mention[]>();
    for (const m of ms)
      for (const t of m.thresholds) {
        if (!thr.has(t)) thr.set(t, []);
        thr.get(t)!.push(m);
      }
    // Group by chain: two thresholds only contradict if they describe the same
    // chain (or neither names one).
    const byChain = new Map<string, Set<string>>();
    for (const t of thr.keys()) {
      const [val, chain = "(unqualified)"] = t.split(" @");
      if (!byChain.has(chain)) byChain.set(chain, new Set());
      byChain.get(chain)!.add(val);
    }
    const conflictingChains = [...byChain.entries()].filter(([, v]) => v.size > 1);
    if (conflictingChains.length > 0) {
      errors++;
      const where = conflictingChains.map(([c, v]) => `${c}: ${[...v].join(" vs ")}`).join("; ");
      report("CONFLICT", `contradictory thresholds on the same chain — ${where}`, thr);
    }

    // --- hard conflict: a truncated form that matches two different full addresses
    const fulls = new Set(ms.map((m) => m.full).filter(Boolean) as string[]);
    if (fulls.size > 1) {
      errors++;
      const g = new Map<string, Mention[]>();
      for (const m of ms) {
        const v = m.full ?? "(truncated)";
        if (!g.has(v)) g.set(v, []);
        g.get(v)!.push(m);
      }
      report("CONFLICT", `prefix resolves to ${fulls.size} different addresses`, g);
    }

    if (!SHOW_REVIEW) continue;

    // --- advisory: role divergence between files
    const roleByFile = new Map<string, Set<string>>();
    for (const m of ms) {
      if (m.roles.length === 0) continue;
      if (!roleByFile.has(m.file)) roleByFile.set(m.file, new Set());
      for (const r of m.roles) roleByFile.get(m.file)!.add(r);
    }
    if (roleByFile.size > 1) {
      const sets = [...roleByFile.values()].map((s) => [...s].sort().join(","));
      if (new Set(sets).size > 1) {
        reviews++;
        const g = new Map<string, Mention[]>();
        for (const m of ms) {
          if (m.roles.length === 0) continue;
          const v = [...m.roles].sort().join(",");
          if (!g.has(v)) g.set(v, []);
          g.get(v)!.push(m);
        }
        report("REVIEW", "described with different roles — verify which is correct", g);
      }
    }
  }

  const scanned = files.length;
  const entities = [...byKey.values()].filter((v) => v.length > 1).length;
  console.log(
    `\nentity-contradiction sweep: ${scanned} files, ${byKey.size} addresses ` +
      `(${entities} with more than one mention), ${errors} conflict(s), ${reviews} for review.`,
  );

  if (errors > 0 && !WARN_ONLY) {
    console.error(
      "\nA conflict means two records describe one address differently. " +
        "Go and measure which is right — do not make them agree by picking one.",
    );
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
