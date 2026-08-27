/**
 * Single source of truth for "does this asset have a live backing dashboard".
 *
 * WHY THIS EXISTS: this fact was previously derivable only inside
 * `src/pages/reports/[slug].astro`, so the reports index could not see it and
 * had no way to tell a reader which assets we actually monitor. Lifting it here
 * is the same fix as `src/lib/services.ts` — one definition, several surfaces,
 * no drift.
 *
 * ⚠️ TWO DIFFERENT QUESTIONS, DELIBERATELY KEPT APART:
 *
 *   hasDashboardEmbed(slug)  — should THIS PAGE embed the dashboard?
 *   assetHasDashboard(data)  — does a dashboard exist for this ASSET at all?
 *
 * They differ on purpose. `thbill-full` embeds and the retail thBILL summary
 * does not, because the retail page is deliberately kept clean — that decision
 * predates this file and is not a bug. The syrup pair runs the other way:
 * `syrupusdc`/`syrupusdt` (retail) embed while the `-full` reports do not.
 *
 * The index badge and filter use the ASSET question, because a reader asking
 * "what do you monitor" is asking about the asset, not about which audience
 * variant renders an iframe.
 */

/**
 * Reports whose page embeds the dashboard. Carried over verbatim from
 * reports/[slug].astro — do not "tidy" the retail/-full asymmetries into
 * consistency without checking whether each was chosen. See the note above.
 */
export const DASHBOARD_EMBED_SLUGS = new Set<string>([
  "crvusd",
  "usdd",
  "ousd",
  "thusd",
  "thbill-full",
  "syrupusdc",
  "syrupusdt",
  "hastra-prime",
  "apxusd",
  "apyusd",
  "usdat",
  "susdat",
  "strcx",
  "mstr",
  "bmnr",
  "usde",
  "susde",
  "usdai",
  "susdai",
]);

export function hasDashboardEmbed(slug: string): boolean {
  return DASHBOARD_EMBED_SLUGS.has(slug);
}

/**
 * Does a live dashboard exist for this asset? True when the report either
 * declares an explicit `live_dashboard_url` or is on the embed list. This is
 * the question the index badge and filter answer.
 */
export function assetHasDashboard(data: {
  slug: string;
  live_dashboard_url?: string;
}): boolean {
  return Boolean(data.live_dashboard_url) || hasDashboardEmbed(data.slug);
}

/**
 * The link surface: an explicit `live_dashboard_url` wins (thBILL has its own
 * standalone dashboard repo); otherwise fall back to the internal
 * backing-monitor view for any embed-listed slug.
 */
export function dashboardUrlFor(data: {
  slug: string;
  live_dashboard_url?: string;
}): string | undefined {
  return (
    data.live_dashboard_url ??
    (hasDashboardEmbed(data.slug) ? `/dashboards/?asset=${data.slug}` : undefined)
  );
}

/**
 * Categories covering things that are NOT on-chain assets a reader can hold.
 * We publish on them because assets we cover depend on them: STRC backs apxUSD,
 * MSTR backs STRC, Figure sits behind wYLDS and Hastra PRIME.
 *
 * Derived from `category` rather than a separate frontmatter flag, so there is
 * no second field to forget — the distinction is already encoded in the schema.
 */
const DEPENDENCY_CATEGORIES = new Set<string>(["tradfi-equity", "protocol"]);

export function isDependency(data: { category?: string }): boolean {
  return Boolean(data.category && DEPENDENCY_CATEGORIES.has(data.category));
}

/** One-line scope note shown under the title on dependency reports. */
export const DEPENDENCY_NOTE =
  "This covers a company or security that assets in this database depend on — not a token you can hold.";
