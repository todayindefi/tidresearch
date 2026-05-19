import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Scores are 1–10 where 10 = safest, 1 = riskiest (credit-rating direction).
const score = z.number().min(0).max(10);

const chainOverride = z
  .object({
    peg_mechanism_score: score.optional(),
    backing_score: score.optional(),
    issuer_score: score.optional(),
    volatility_score: score.optional(),
    structural_score: score.optional(),
    redemption_score: score.optional(),
    liquidity_score: score.optional(),
    overall_score: score.optional(),
  })
  .partial();

// Common across every report.
const common = {
  asset: z.string(),
  slug: z.string(),
  aliases: z.array(z.string()).default([]),
  chains: z.array(z.string()),
  // Editorial depth — independent of which score axes are used.
  assessment_type: z.enum(["full", "light"]),
  // Tiering for paired reports. "retail" is public; "institutional" is gated.
  // Two reports in a pair cross-link via companion_report (slug of the other).
  audience: z.enum(["retail", "institutional"]).optional(),
  companion_report: z.string().optional(),
  date: z.coerce.date(),
  last_verified: z.coerce.date(),
  overall_score: score,
  // Optional: not every category uses a liquidity axis (e.g. RWAs score liquidity inside economic risk).
  liquidity_score: score.optional(),
  chain_overrides: z.record(z.string(), chainOverride).optional(),
  // Display hints (used by index + layout, no effect on scoring).
  featured: z.boolean().optional(),
  live_dashboard_url: z.string().url().optional(),
  pdf_coming_soon: z.boolean().optional(),
  trust_disclaimer: z.boolean().optional(),
  // Set to false to hide a report from listings and direct routing while the
  // analysis is being revised. The markdown stays in the repo.
  published: z.boolean().default(true),
  // Stage gate: defaults to false (staging-only). Flip to true when a report
  // is approved for the public production site. Staging shows reports
  // regardless of this flag; production filters to production: true only.
  // The PUBLIC_STAGE=production env var on the prod Netlify site is what
  // activates the filter at build time.
  production: z.boolean().default(false),
};

const stablecoin = z.object({
  ...common,
  category: z.literal("stablecoin"),
  peg_mechanism_score: score,
  backing_score: score,
  issuer_score: score,
  liquidity_score: score,
  // Optional 5th axis: collateral quality (e.g. T-Bills) independent of wrapper-layer risk.
  underlying_score: score.optional(),
  peg_mechanism: z.string().optional(),
  issuer: z.string().optional(),
  audited_reserves: z.boolean().optional(),
  market_cap_approx: z.number().optional(),
});

const wrappedAxes = {
  volatility_score: score,
  structural_score: score,
  redemption_score: score,
  liquidity_score: score,
  issuer_score: score.optional(),
  yield_bearing: z.boolean().optional(),
  underlying_assets: z.array(z.string()).default([]),
};

const wrappedToken = z.object({
  ...common,
  category: z.literal("wrapped-token"),
  ...wrappedAxes,
});

const vaultShare = z.object({
  ...common,
  category: z.literal("vault-share"),
  ...wrappedAxes,
});

// Institutional-grade rubrics differ by product shape:
// - tokenized-treasury (RWA): contract / economic / project + supply_integrity callout
// - lending-vault (curated credit, e.g. syrupUSDC, mEDGE, Morpho vaults): contract / credit /
//   liquidity / operational + supply_integrity callout. Credit gets first-class billing because
//   delegate/curator underwriting is the binding risk surface — not a sub-component of economic.
// Older asset-shape categories (stablecoin, wrapped-token, vault-share) use editorial synthesis.
// Cross-category score comparisons are approximate — same scale (1–10, higher = safer) but
// different axis sets reflect what's actually load-bearing for each product type.
const mintPath = z.object({
  id: z.string(),
  mechanism: z.string(),
  trust_set: z.string(),
  trust_size: z.number().nullable().optional(),
  pausable: z.boolean().nullable().optional(),
  timelock_seconds: z.number().nullable().optional(),
  notes: z.string(),
});

const tokenizedTreasury = z.object({
  ...common,
  category: z.literal("tokenized-treasury"),
  // Institutional axes — used by full reports.
  contract_score: score.optional(),
  economic_score: score.optional(),
  project_score: score.optional(),
  supply_integrity_score: score.optional(),
  score_weights: z
    .object({
      contract: z.number(),
      economic: z.number(),
      project: z.number(),
    })
    .optional(),
  // Retail axes — when an RWA report is framed for retail (no primary-redemption path),
  // peg/backing/liquidity/issuer is the more useful rubric. Sidebar prefers these when present.
  peg_mechanism_score: score.optional(),
  backing_score: score.optional(),
  issuer_score: score.optional(),
  // Optional 5th retail axis: collateral quality (used by RWA-framed-retail reports).
  underlying_score: score.optional(),
  peg_mechanism: z.string().optional(),
  issuer: z.string().optional(),
  market_cap_approx: z.number().optional(),
  tvl_gross: z.number().optional(),
  legal_jurisdiction: z.string().optional(),
  credit_rating_equiv: z.string().optional(),
  live_since: z.string().optional(),
  bankruptcy_remote: z.boolean().optional(),
  optimistic_minting: z.boolean().optional(),
  settlement_lag_days: z.number().optional(),
  multisig_configs: z.record(z.string(), z.string()).optional(),
  underlying_managers: z.array(z.string()).default([]),
  asset_symbols: z.array(z.string()).default([]),
  mint_paths: z.array(mintPath).default([]),
  supply_integrity_flags: z.array(z.string()).default([]),
  audited: z.boolean().optional(),
  audit_count: z.number().optional(),
  audit_firms: z.array(z.string()).default([]),
  bug_bounty: z.boolean().optional(),
  team_doxxed: z.boolean().optional(),
  incident_history: z.boolean().optional(),
  is_fork: z.boolean().optional(),
});

// Lending vaults / curated credit (syrupUSDC, mEDGE, Morpho vaults, future Centrifuge etc.).
// Credit is its own axis because delegate/curator underwriting is the binding risk and doesn't
// compress cleanly into "economic" or "structural." Operational covers multisig hygiene,
// curator key management, and governance.
const lendingVault = z.object({
  ...common,
  category: z.literal("lending-vault"),
  contract_score: score,
  credit_score: score,
  liquidity_score: score,
  operational_score: score,
  supply_integrity_score: score.optional(),
  score_weights: z
    .object({
      contract: z.number(),
      credit: z.number(),
      liquidity: z.number(),
      operational: z.number(),
    })
    .optional(),
  // Institutional frontmatter (mirrors tokenized-treasury — same shape, different axes)
  issuer: z.string().optional(),
  market_cap_approx: z.number().optional(),
  tvl_gross: z.number().optional(),
  legal_jurisdiction: z.string().optional(),
  live_since: z.string().optional(),
  bankruptcy_remote: z.boolean().optional(),
  yield_bearing: z.boolean().optional(),
  underlying_assets: z.array(z.string()).default([]),
  underlying_managers: z.array(z.string()).default([]),
  multisig_configs: z.record(z.string(), z.string()).optional(),
  mint_paths: z.array(mintPath).default([]),
  supply_integrity_flags: z.array(z.string()).default([]),
  audited: z.boolean().optional(),
  audit_count: z.number().optional(),
  audit_firms: z.array(z.string()).default([]),
  bug_bounty: z.boolean().optional(),
  bug_bounty_amount: z.number().optional(),
  bug_bounty_platform: z.string().optional(),
  team_doxxed: z.boolean().optional(),
  incident_history: z.boolean().optional(),
  is_fork: z.boolean().optional(),
});

export const collections = {
  reports: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/reports" }),
    schema: z.discriminatedUnion("category", [
      stablecoin,
      wrappedToken,
      vaultShare,
      tokenizedTreasury,
      lendingVault,
    ]),
  }),
};
