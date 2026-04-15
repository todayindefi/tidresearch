import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const riskScore = z.number().min(0).max(10);

const chainOverride = z
  .object({
    peg_mechanism_risk: riskScore.optional(),
    backing_risk: riskScore.optional(),
    issuer_risk: riskScore.optional(),
    volatility_risk: riskScore.optional(),
    structural_risk: riskScore.optional(),
    redemption_risk: riskScore.optional(),
    liquidity_risk: riskScore.optional(),
    overall_risk: riskScore.optional(),
  })
  .partial();

// Common across every report.
const common = {
  asset: z.string(),
  slug: z.string(),
  aliases: z.array(z.string()).default([]),
  chains: z.array(z.string()),
  // Editorial depth — independent of which risk axes are used.
  assessment_type: z.enum(["full", "light"]),
  date: z.coerce.date(),
  last_verified: z.coerce.date(),
  overall_risk: riskScore,
  liquidity_risk: riskScore,
  chain_overrides: z.record(z.string(), chainOverride).optional(),
};

// Stablecoin axes
const stablecoin = z.object({
  ...common,
  category: z.literal("stablecoin"),
  peg_mechanism_risk: riskScore,
  backing_risk: riskScore,
  issuer_risk: riskScore,
  peg_mechanism: z.string().optional(),
  issuer: z.string().optional(),
  audited_reserves: z.boolean().optional(),
  market_cap_approx: z.number().optional(),
});

// Wrapped-token / vault-share share the same axes
const wrappedAxes = {
  volatility_risk: riskScore,
  structural_risk: riskScore,
  redemption_risk: riskScore,
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
