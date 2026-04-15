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
  liquidity_score: score,
  chain_overrides: z.record(z.string(), chainOverride).optional(),
};

const stablecoin = z.object({
  ...common,
  category: z.literal("stablecoin"),
  peg_mechanism_score: score,
  backing_score: score,
  issuer_score: score,
  peg_mechanism: z.string().optional(),
  issuer: z.string().optional(),
  audited_reserves: z.boolean().optional(),
  market_cap_approx: z.number().optional(),
});

const wrappedAxes = {
  volatility_score: score,
  structural_score: score,
  redemption_score: score,
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

export const collections = {
  reports: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/reports" }),
    schema: z.discriminatedUnion("category", [stablecoin, wrappedToken, vaultShare]),
  }),
};
