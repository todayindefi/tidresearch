// Build-time stage detection. Set PUBLIC_STAGE=production on the production
// Netlify site to filter content to only `production: true` entries.
// Staging (and any other build) leaves the env unset and shows everything.

export const STAGE: "production" | "staging" =
  import.meta.env.PUBLIC_STAGE === "production" ? "production" : "staging";

export const isProductionStage = STAGE === "production";

// Sections not yet public. Delete the entry to launch the section.
const HIDDEN_IN_PRODUCTION = new Set(["protocols"]);

export function sectionEnabled(name: string): boolean {
  return !(isProductionStage && HIDDEN_IN_PRODUCTION.has(name));
}

// Single predicate used by every place that lists reports / dashboards.
// On staging: anything not explicitly hidden via published: false.
// On production: also requires production: true.
export function visibleAtCurrentStage(item: {
  published?: boolean;
  production?: boolean;
}): boolean {
  if (item.published === false) return false;
  if (isProductionStage && item.production !== true) return false;
  return true;
}
