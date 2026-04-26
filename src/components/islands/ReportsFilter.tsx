import { useMemo, useState } from "react";

export interface ReportRow {
  slug: string;
  asset: string;
  category: string;
  assessment_type: "full" | "light";
  audience?: "retail" | "institutional";
  chains: string[];
  chain_labels: string[];
  overall_score: number;
  last_verified: string;
  featured?: boolean;
}

const CATEGORY_LABELS: Record<string, string> = {
  stablecoin: "Stablecoin",
  "wrapped-token": "Wrapped Token",
  "vault-share": "Vault Share",
  "lending-vault": "Lending Vault",
  "tokenized-treasury": "RWA",
};

const categoryLabel = (c: string) => CATEGORY_LABELS[c] ?? c.replace("-", " ");

// Score direction: 10 = safest, 1 = riskiest.
const SCORE_BANDS: Array<[string, (s: number) => boolean]> = [
  ["any", () => true],
  ["safe (≥7)", (s) => s >= 7],
  ["medium (4–7)", (s) => s >= 4 && s < 7],
  ["risky (<4)", (s) => s < 4],
];

function tone(s: number) {
  if (s >= 9) return "bg-emerald-500/15 text-emerald-400 border-emerald-500/50";
  if (s >= 7) return "bg-lime-500/15 text-lime-400 border-lime-500/45";
  if (s >= 5) return "bg-amber-500/15 text-amber-400 border-amber-500/45";
  if (s >= 3) return "bg-orange-500/15 text-orange-400 border-orange-500/45";
  return "bg-primary/20 text-primary border-primary/50";
}

export default function ReportsFilter({ reports }: { reports: ReportRow[] }) {
  const [category, setCategory] = useState<string>("all");
  const [chain, setChain] = useState<string>("all");
  const [band, setBand] = useState<string>("any");
  const [q, setQ] = useState<string>("");

  const allCategories = useMemo(
    () => Array.from(new Set(reports.map((r) => r.category))).sort(),
    [reports],
  );
  const allChains = useMemo(
    () => Array.from(new Set(reports.flatMap((r) => r.chain_labels))).sort(),
    [reports],
  );

  const filtered = useMemo(() => {
    const bandFn = SCORE_BANDS.find(([k]) => k === band)?.[1] ?? (() => true);
    const qq = q.trim().toLowerCase();
    return reports.filter((r) => {
      if (category !== "all" && r.category !== category) return false;
      if (chain !== "all" && !r.chain_labels.includes(chain)) return false;
      if (!bandFn(r.overall_score)) return false;
      if (qq && !r.asset.toLowerCase().includes(qq)) return false;
      return true;
    });
  }, [reports, category, chain, band, q]);

  const selectClass =
    "bg-card border border-border focus:border-primary px-3 py-2 outline-none text-sm font-mono";

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
        <input
          type="search"
          placeholder="Search assets…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className={selectClass + " col-span-2 md:col-span-1"}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={selectClass}
        >
          <option value="all">All categories</option>
          {allCategories.map((c) => (
            <option key={c} value={c}>
              {categoryLabel(c)}
            </option>
          ))}
        </select>
        <select value={chain} onChange={(e) => setChain(e.target.value)} className={selectClass}>
          <option value="all">All chains</option>
          {allChains.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select value={band} onChange={(e) => setBand(e.target.value)} className={selectClass}>
          {SCORE_BANDS.map(([k]) => (
            <option key={k} value={k}>
              Score: {k}
            </option>
          ))}
        </select>
      </div>

      <p className="text-xs text-muted-foreground font-mono mb-6">
        {filtered.length} of {reports.length} report{reports.length === 1 ? "" : "s"} · score 1–10 (higher = safer)
      </p>

      {filtered.length === 0 ? (
        <div className="border border-border bg-card p-12 text-center text-muted-foreground">
          No reports match the current filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((r) => {
            const isInstitutional = r.audience === "institutional";
            const href = isInstitutional
              ? `/reports/${r.slug}/request`
              : `/reports/${r.slug}`;
            return (
            <a
              key={r.slug}
              href={href}
              className="block bg-card border border-border/60 hover:border-primary/60 transition-colors p-6 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {r.featured && (
                      <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border border-primary/60 bg-primary/10 text-primary font-semibold">
                        New
                      </span>
                    )}
                    {isInstitutional && (
                      <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border border-amber-500/60 bg-amber-500/10 text-amber-400 font-semibold">
                        Request access
                      </span>
                    )}
                    <span className="uppercase tracking-widest text-xs text-muted-foreground/80 font-semibold">
                      {categoryLabel(r.category)}
                    </span>
                    {r.assessment_type === "full" && (
                      <span className="uppercase tracking-widest text-xs text-muted-foreground/40 font-semibold">
                        · Full
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors truncate">
                    {r.asset}
                  </h3>
                </div>
                <span
                  className={`inline-flex items-center gap-1 font-mono font-bold border px-2.5 py-1 text-sm shrink-0 ${tone(r.overall_score)}`}
                >
                  <span className="opacity-70 font-normal mr-1">Score</span>
                  {r.overall_score.toFixed(1)}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {r.chain_labels.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center px-2 py-0.5 text-xs font-mono uppercase tracking-wider border border-border text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Last verified {r.last_verified}
              </p>
            </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
