import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Scores are 1–10 where 10 = safest, 1 = riskiest (credit-rating direction).
const score = z.number().min(0).max(10);

// Optional `underlying_score` — collateral-quality axis, independent of wrapper/peg
// risk. Permitted on every category below; apply it on this rule, not ad hoc:
//   INCLUDE when a DISTINCT collateral pool sits beneath the token as its own asset
//   class (tokenized T-bills / RWA, or a yield-bearing / credit collateral), so
//   collateral quality is separable from the wrapper or peg mechanism.
//     e.g. thBILL / usdat / thusd / apxUSD (RWA); sUSDS (USDS's T-bill + crypto + USDC pool).
//   OMIT when the collateral IS the backing analysis and a separate score would
//   double-count backing_score:
//     - fiat-stable-basket stablecoins (usdm: USDC/AUSD/USDT0 — already graded in backing)
//     - crypto-collateralized stablecoins (crvUSD / frax — collateral == backing)

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

// ⚠️ Consumption depends on `audience`, not just `category`. Institutional reports
// render via ScoreHero (ReportLayout's isInstitutional branch) and get NO RiskSidebar,
// so any field only RiskSidebar reads is inert on them however legal it is here:
// `tvl_gross`, `underlying_managers`, `underlying_assets`, `peg_mechanism`.
// ScoreHero does read issuer / legal_jurisdiction / credit_rating_equiv /
// market_cap_approx / settlement_lag_days, so those are fine on both.
// Before adding a display field to an institutional report, check which component
// reads it — schema-legal is not the same as rendered.

// Opt-in to the consolidated SIX-AXIS core:
//   Stability · Backing · Liquidity & Exit · Dependencies · Contract & Admin · Issuer
// Absent, a report renders on its category's historical rubric. This is a
// per-report switch ON PURPOSE — the corpus ran six rubrics with a long dead
// tail, and flipping AXES_BY_CATEGORY wholesale would re-frame 51 reports whose
// scores were judged under the old axes without anyone re-judging them.
// ⚠️ AXIS 3 ALSO CARRIES A REPORTING OBLIGATION, learned the expensive way:
// NAME THE BINDING LEG IN THE PROSE. A merged axis hides which half set the
// number, so a wrong input silently sets the whole axis and nothing in the
// output shows it. syzUSD was scored 2.5 on the belief that its redemption was
// gated; the ERC-4626 unwrap is permissionless (maxRedeem == balanceOf on an
// arbitrary address), the worse leg was actually venue depth at 3.0, and the
// page told readers the opposite of the truth about getting out.
// ⚠️ AXIS 3 CARRIES A RULE: "Liquidity & Exit" covers BOTH exit paths —
// secondary venue depth AND primary redemption — and is scored on the WORSE
// leg, never the average. Averaging hides which path failed, and the dangerous
// case is a gated or KYC'd redemption sitting behind deep-looking venues,
// because the gate is invisible on-chain. State both legs in prose, always.
// ⚠️ Both ScoreHero AND RiskSidebar must honour this flag or a report renders
// one rubric to institutional readers and another to retail ones.
// ⚠️ AXIS 4 (Dependencies) READS `underlying_score`, AND THAT CHANGES WHAT THE
// FIELD MEANS. Off the frame it is "collateral quality of the underlying" per
// the rule above. On the frame it is "what this asset's value passes through
// to". For a vault share those coincide — syzUSD's underlying IS its whole
// dependency — which is why ~26 reports can SEED axis 4 instead of authoring
// it. ⚠️ Seeded is not the same as judged: a carried-over number still has to
// be re-read against concentration and circularity before it is trusted.
// The earlier five-axis draft merged `underlying_score` INTO Backing, which
// would have deleted the dependency axis exactly where the dependency IS the
// risk (syzUSD -> yzUSD, sUSDe -> USDe, apyUSD -> apxUSD). That is why six.
const AXIS_FRAME = z.enum(["six"]).optional();

// Common across every report.
const common = {
  axis_frame: AXIS_FRAME,
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
  // Date of the most recent substantive pass, when only PART of the body was
  // re-read. last_verified stays the date the WHOLE body was verified through,
  // so a scope-limited refresh no longer has to choose between a false-fresh
  // stamp and a card that looks 46 days stale.
  last_revised: z.coerce.date().optional(),
  overall_score: score,
  // Every asset has an issuer, whatever its category. This lives in `common` on
  // purpose: it used to be declared per-category, and the categories that forgot
  // it (vault-share, wrapped-token) silently DROPPED the field at parse time, so
  // 21 reports declared an issuer that never rendered. Do not move it back.
  issuer: z.string().optional(),
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
  // Contract & Admin. Optional here and REQUIRED under `axis_frame: six` —
  // the historical stablecoin rubric had no home for upgrade authority at all,
  // which is why a token behind a 2-day timelock and one behind a bare EOA
  // scored identically on this category.
  structural_score: score.optional(),
  peg_mechanism: z.string().optional(),
  audited_reserves: z.boolean().optional(),
  market_cap_approx: z.number().optional(),
});

const wrappedAxes = {
  volatility_score: score,
  // Backing (axis 2) under `axis_frame: six`. Optional because the historical
  // wrapped/vault rubric had no reserve axis at all — a share whose entire
  // risk is a claim on someone else's reserve was scored on everything except
  // that reserve.
  backing_score: score.optional(),
  structural_score: score,
  redemption_score: score,
  liquidity_score: score,
  issuer_score: score.optional(),
  // Optional 5th axis: collateral quality of the underlying asset(s), independent
  // of wrapper-layer risk. Matches the stablecoin/tokenized-treasury 5-axis schema.
  underlying_score: score.optional(),
  yield_bearing: z.boolean().optional(),
  underlying_assets: z.array(z.string()).default([]),
  market_cap_approx: z.number().optional(),
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
  // the institutional contract/economic/project rubric is the wrong lens. Two retail
  // rubrics are permitted; the sidebar and hero prefer whichever is present:
  //   (a) vault-share axes (volatility/structural/redemption/underlying/liquidity/issuer)
  //       — correct when the asset IS a vault share and redemption is the binding retail
  //       question. The stablecoin rubric has no redemption axis, so a gated or closed
  //       primary path has nowhere to land. e.g. thbill-retail.
  //   (b) stablecoin axes (peg/backing/underlying/liquidity/issuer) — for RWA-framed
  //       tokens that a retail holder reads as a dollar rather than as a fund share.
  // Match the axis set to the internal `category` for the asset; do not mix the two.
  volatility_score: score.optional(),
  structural_score: score.optional(),
  redemption_score: score.optional(),
  peg_mechanism_score: score.optional(),
  backing_score: score.optional(),
  issuer_score: score.optional(),
  // Optional 5th retail axis: collateral quality (used by RWA-framed-retail reports).
  underlying_score: score.optional(),
  peg_mechanism: z.string().optional(),
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

// Issuer-entity / treasury-company analyses (e.g. MSTR/Strategy Inc.). Body markdown
// carries per-axis issuer scores (balance_sheet / funding_model / refinancing /
// governance); frontmatter only carries overall_score. Used for dependency-analysis
// reports — the upstream issuer behind a preferred or wrapper, not an equity buy-sell.
const tradfiEquity = z.object({
  ...common,
  category: z.literal("tradfi-equity"),
  yield_bearing: z.boolean().optional(),
  underlying_assets: z.array(z.string()).default([]),
});

// Protocol-level risk reports (lending markets, DEXs, aggregators, leverage layers).
// These use the protocol framework's contract / economic / project axes and deliberately
// replace the asset field with protocol so future reports do not blur the two collections.
const protocolReport = z.object({
  ...common,
  asset: z.never().optional(),
  protocol: z.string(),
  category: z.literal("protocol"),
  protocol_category: z.string().optional(),
  contract_score: score,
  economic_score: score,
  project_score: score,
  score_weights: z
    .object({
      contract: z.number(),
      economic: z.number(),
      project: z.number(),
    })
    .optional(),
  built_on: z.array(z.string()).default([]),
  tvl_gross: z.number().optional(),
  tvl_borrowed: z.number().optional(),
  live_since: z.string().optional(),
  audited: z.boolean().optional(),
  audit_count: z.number().optional(),
  audit_firms: z.array(z.string()).default([]),
  bug_bounty: z.boolean().optional(),
  bug_bounty_amount: z.number().optional(),
  bug_bounty_platform: z.string().optional(),
  team_doxxed: z.boolean().optional(),
  incident_history: z.boolean().optional(),
  is_fork: z.boolean().optional(),
  fork_of: z.string().optional(),
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
      tradfiEquity,
    ]),
  }),
  protocols: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/protocols" }),
    schema: protocolReport,
  }),
};
