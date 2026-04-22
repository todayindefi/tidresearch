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
};

const stablecoin = z.object({
  ...common,
  category: z.literal("stablecoin"),
  peg_mechanism_score: score,
  backing_score: score,
  issuer_score: score,
  liquidity_score: score,
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

// RWA / tokenized-treasury: three weighted axes (contract 40 / economic 30 / project 30 by default).
// Overall is intended to be a weighted composite; older categories use editorial synthesis.
// TODO: migrate stablecoin / wrapped-token / vault-share reports to the weighted rubric once the
// editorial pass is agreed. Until then, cross-category score comparisons are approximate.
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
  contract_score: score,
  economic_score: score,
  project_score: score,
  supply_integrity_score: score.optional(),
  score_weights: z
    .object({
      contract: z.number(),
      economic: z.number(),
      project: z.number(),
    })
    .optional(),
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

export const collections = {
  reports: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/reports" }),
    schema: z.discriminatedUnion("category", [
      stablecoin,
      wrappedToken,
      vaultShare,
      tokenizedTreasury,
    ]),
  }),
};
