import {
  ShieldCheck,
  Activity,
  Scale,
  TrendingUp,
  LayoutDashboard,
} from "lucide-react";

/**
 * Single source of truth for the service lines.
 *
 * The homepage cards, the /services/[kind] pages, and the footer all read from
 * here. They used to hold three independent copies, which had already drifted:
 * the footer was missing Continuous Monitoring entirely, and the Risk Analysis
 * blurb and tagline described different scopes (one covered protocols, the
 * other only assets).
 *
 * `blurb` is the short card line; `tagline` is the page hero line. They are
 * deliberately different lengths for different surfaces — but they must not
 * make different claims. Keep the scope of the two in agreement.
 *
 * `footerLabel` exists only because the footer column is narrow.
 */
export type Service = {
  slug: string;
  title: string;
  footerLabel: string;
  blurb: string;
  tagline: string;
  Icon: any;
  bullets: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "risk",
    title: "Risk Analysis",
    footerLabel: "Risk Analysis",
    blurb:
      "Asset and protocol risk assessment and due diligence to support DeFi projects and institutions.",
    tagline:
      "Independent, on-chain-first risk assessment of assets and the protocols behind them — stablecoins, wrapped tokens, and yield-bearing assets.",
    Icon: ShieldCheck,
    bullets: [
      "Two standardized frameworks — asset risk (volatility, liquidity, structural, redemption, issuer) and protocol risk (smart contract, economic design, project counterparty).",
      "A scored universe of 130+ assets and 60+ protocols, maintained continuously rather than rebuilt per engagement.",
      "Per-chain risk overrides where deployment context materially changes exposure.",
      "Live backing dashboards paired with each full assessment so risk can be re-verified continuously.",
      "Diligence reports for protocols evaluating which assets to list, integrate, or accept as collateral.",
      "Scores maintained as a machine-readable feed, available to partners integrating risk data directly into their own systems.",
    ],
    cta: "Commission a risk report",
  },
  {
    slug: "monitoring",
    title: "Continuous Monitoring",
    footerLabel: "Monitoring",
    blurb:
      "Hourly on-chain surveillance of backing, peg, and governance surface — with alerts when the risk picture changes.",
    tagline:
      "Ongoing surveillance of the assets and protocols you hold — with alerts when the risk picture actually changes.",
    Icon: Activity,
    bullets: [
      "Hourly on-chain backing dashboards tracking supply, collateral composition, and peg health across 20+ assets.",
      "Per-asset risk alerters that fire on backing shortfalls, collateral drift, and peg deviation — not on a fixed schedule.",
      "Governance and permission surveillance: timelock changes, admin actions, and protocol topology shifts.",
      "Position-level exit triggers, so a thesis that breaks reaches you before the exit window closes.",
      "Off-chain source monitoring where it matters — including SEC filing watches on public-company issuers.",
      "Every alert carries its own evidence: severity and reason, previous and current values, when the condition was first observed and last seen, the source and freshness of the data behind it, and the condition that resolves it.",
      "Observed facts are kept separate from inference and from suggested action, so you can act on the measurement without inheriting our interpretation of it.",
      "Alerts delivered to Telegram, email, or your own systems; underlying data available as JSON.",
    ],
    cta: "Set up monitoring",
  },
  {
    slug: "governance",
    title: "Governance Services",
    footerLabel: "Governance",
    blurb:
      "Arbitrum DAO delegates since 2024 — proposal tracking, analysis, and voting recommendations.",
    tagline:
      "Professional DAO governance support — proposal tracking, analysis, and voting recommendations.",
    Icon: Scale,
    bullets: [
      "Daily tracking across the full governance stack — Discourse forums, Snapshot, Tally, on-chain Aragon votes, and initiative-based systems.",
      "Proposal-by-proposal analysis with explicit voting recommendations and published rationale.",
      "Vote-incentive market coverage: Votemarket and Votium campaign budgets, renewal signals, and gauge-level attribution.",
      "Active Arbitrum DAO delegates since October 2024 — 140+ contributions to forum debate and published vote rationales, not silent delegation.",
      "Custom governance briefings for funds and treasuries managing significant voting power.",
    ],
    cta: "Discuss governance support",
  },
  {
    slug: "investment",
    title: "Investment Analysis",
    footerLabel: "Investment",
    blurb:
      "Token economics and yield-market analysis grounded in on-chain supply, demand, and rate data.",
    tagline:
      "Token economics and yield-market analysis grounded in on-chain data — what drives supply, demand, and price formation.",
    Icon: TrendingUp,
    bullets: [
      "Token economic models: what makes float grow or shrink, what creates holding demand, and what bounds price or peg.",
      "Historical backtesting of stress scenarios, depeg mechanics, and buyback or burn programs against real on-chain history.",
      "Yield-market coverage across 17 lending protocols, plus Pendle, Curve, Balancer, and major DEX venues — rates, TVL, and utilization tracked hourly.",
      "Opportunity screening that scores farming and lending positions on risk-adjusted terms, not headline APY.",
      "Custom analysis for funds and family offices building DeFi exposure.",
    ],
    cta: "Request an investment briefing",
  },
  {
    slug: "portfolio",
    title: "Portfolio Tracking",
    footerLabel: "Portfolio",
    blurb:
      "Daily position reconciliation, yield attribution, and reporting for on-chain portfolios.",
    tagline:
      "A daily reconciliation pipeline for on-chain portfolios — positions, yield attribution, and reporting you can actually audit.",
    Icon: LayoutDashboard,
    bullets: [
      "Daily multi-wallet tracking across lending, LP, PT, vault, and spot positions on every major chain.",
      "Capital-events accounting that separates deposits and withdrawals from genuine performance, so returns are real rather than flow-inflated.",
      "USD- and ETH-denominated reporting side by side, for mandates measured in either.",
      "Reward attribution across native emissions and incentive programs, with realized vs. expected yield broken out.",
      "Automated daily validation that flags stale, missing, or misclassified positions before they reach a report.",
      "Delivery into your own dashboards, spreadsheets, or a daily briefing — whichever fits the mandate.",
    ],
    cta: "Set up portfolio tracking",
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s]),
) as Record<string, Service>;
