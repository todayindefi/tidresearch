---
asset: "frxUSD"
slug: "frxusd"
aliases: ["frxUSD", "Frax USD", "FRXUSD"]
chains: ["eth", "fraxtal", "abstract", "aptos", "arbitrum", "avalanche", "base", "berachain", "blast", "bsc", "hyperliquid", "ink", "katana", "linea", "mode", "monad", "movement", "optimism", "plume", "polygon", "polygon_zkevm", "robinhood", "scroll", "sei", "solana", "somnia", "sonic", "stable", "tempo", "unichain", "worldchain", "xlayer", "zksync"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "full"
date: "2026-06-10"
last_verified: "2026-10-12"
last_revised: "2026-10-12"
peg_mechanism_score: 6.5
backing_score: 6.5
liquidity_score: 5.5
underlying_score: 4.5
structural_score: 3.5
axis_frame: six
issuer_score: 5.0
overall_score: 5.5
issuer: "Frax Finance / Frax Inc"
market_cap_approx: 105479359
featured: false
production: true
---

# Frax USD (frxUSD) — Risk Report

**Moderate risk · 5.5/10**

| Peg | Backing | Exit methods | Yield | Networks |
|---|---|---|---|---|
| $1 | Tokenized Treasury funds and bank cash | Secondary markets, custodian redemption or FraxNet | None; stake to sfrxUSD | More than 30 reported |

## Summary

frxUSD is Frax's current dollar stablecoin, distinct from [Legacy FRAX](/reports/frax/). Frax Inc manages its custodians and reserve composition under authority delegated by the Frax DAO.

At **2026-10-11T16:03:47Z**, Frax Facts reported **$108.46 million of assets** against **$105.48 million of circulating liabilities**, equal to **102.82% coverage**. The reserve comprised **62.22% WTGXX**, **21.32% USTB**, **14.61% BUIDL** and **1.85% cash at Erebor Bank**; AUSD, USDC and USDB were immaterial.

The peg is tight and the measured Ethereum market exit is efficient through $100,000. The main constraints are reserve concentration in WTGXX, asset-selective redemption, incomplete dependency coverage and administrative powers that can affect balances without enforced delay.

## 1 · Stability — 6.5

frxUSD targets one dollar through overcollateralized cash-equivalent reserves and 1:1 custodian mint/redeem contracts. The canonical successor price series contained 617 hourly observations from September 16 through October 11. Its latest mark was **$0.999669**, with a range of **$0.999669 to $1.000083** and a mean of $0.999906.

The price series is a Chainlink observation rather than an executable quote. Fraxtal uses the same canonical mark, so it does not independently establish a Fraxtal market price. Redemption is also asset-selective: holders may use custodian contracts with available collateral, but Frax does not guarantee a particular reserve asset or custodian will remain available. Tight observed pricing supports 6.5; fragmented redemption prevents a higher score.

## 2 · Backing — 6.5

The latest issuer balance sheet reported:

| Reserve | Value | Share |
|---|---:|---:|
| WisdomTree WTGXX | $67.49m | 62.22% |
| Superstate USTB | $23.12m | 21.32% |
| BlackRock BUIDL | $15.84m | 14.61% |
| Erebor Bank segregated cash | $2.00m | 1.85% |
| AUSD, USDC and USDB | $38 | <0.01% |
| **Total** | **$108.46m** | **100%** |

Reported assets exceeded circulating liabilities by **$2.98 million**. The reserve consists primarily of high-quality Treasury products, but WTGXX alone represents almost two-thirds of the total.

Frax produces the consolidated balance sheet. This report has not independently reconciled every line to its fund statement, and the bank-cash balance remains off-chain. The machine-readable composition and reported surplus support 6.5; issuer-controlled aggregation, concentration and limited independent reserve assurance cap the score.

## 3 · Liquidity & Exit — 5.5

Holders can sell frxUSD, redeem through a custodian contract into an available reserve asset, or use a FraxNet cross-chain route that returns USDC through CCTP. Custodian contracts may impose fees, caps, eligibility requirements and inventory limits, so primary redemption is not one uniform USDC promise.

The measured Ethereum frxUSD→USDC ladder showed:

| Sell size | USDC out | All-in shortfall |
|---:|---:|---:|
| $1,000 | $999.81 | 1.9 bps |
| $10,000 | $9,998.21 | 1.8 bps |
| $50,000 | $49,989.83 | 2.0 bps |
| $100,000 | $99,978.09 | 2.2 bps |

The result demonstrates efficient execution through $100,000. It does not locate the -50-bps crossing, establish seven-figure capacity, measure redemption timing or prove liquidity on remote networks. Those limits keep Liquidity & Exit at 5.5.

## 4 · Dependencies — 4.5

frxUSD depends directly on WTGXX, USTB, BUIDL, the Erebor reserve account and immaterial AUSD, USDC and USDB balances. WTGXX is the binding dependency at 62.22%; Superstate and BlackRock add manager diversification but cannot substitute for WisdomTree during a fund or custodian impairment.

The 4.5 score is explicitly unanchored because **five of the seven reserve legs lack internal TIDR reports**, including dominant WTGXX. Only AUSD and USDC currently resolve to internal assessments, and their combined balance is economically immaterial. The dependency set is known, but internal coverage is insufficient to derive this score mechanically.

## 5 · Contract & Admin — 3.5

Ethereum frxUSD is an upgradeable proxy owned by a **4-of-7 Safe**. That Safe can mint, administer freezers, freeze, thaw, pause and unpause without delay. Proxy upgrades pass through a Compound-style timelock configured to 24 hours, but the same Safe administers it and can reduce the delay to the contract's two-hour floor.

Zellic published a July 2025 review covering the original frxUSD and custodian system and a February 2026 review covering newer frxUSD infrastructure and cross-chain components. These reviews improve code assurance, but audited-commit-to-deployed-code identity has not been established for every live network.

Frax reports supply on more than 30 networks. The accepted authority walk covers only a subset. Six walked remote deployments use distinct 3-of-6 Safes with the same owner population, and three owners overlap Ethereum. Unwalked deployments remain unmeasured rather than assumed to share the same controls.

⚠️ **Critical:** several balance-affecting powers can execute without enforced delay, including OFT peer changes on walked remote deployments. A changed peer can authorize inbound messages that credit balances without upgrading the proxy. Monitoring only implementation changes would miss this path. This undelayed reach is the main reason Contract & Admin remains 3.5.

## 6 · Issuer — 5.0

Frax has a multi-year operating history, public governance, maintained documentation, machine-readable balance-sheet reporting and named third-party reviews. FIP-432 delegates compliance and collateral management to Frax Inc while leaving ultimate control with the DAO.

The 5.0 score reflects gaps in governance transparency. The August 2026 zero-overlap owner migration still lacks a located authorizing record, signer custody and independence are not publicly established, and deployment growth has outpaced the accepted authority walk. These issuer-level disclosure limits are separate from the contract powers scored above.

## Who it's for

- Frax users seeking a tightly priced stablecoin backed primarily by tokenized Treasuries.
- Holders whose position fits within the measured Ethereum liquidity range.
- Users comfortable receiving available reserve assets rather than guaranteed USDC on redemption.

## Who should avoid

- Anyone requiring a permissionless, uniform USDC redemption promise.
- Anyone unwilling to accept dominant exposure to WTGXX or other tokenized-fund dependencies.
- Holders requiring delayed administration for every balance-affecting action.
- Users relying on remote-chain liquidity or authority that has not been independently measured.

## What to watch

- **WTGXX concentration.** Its 62.22% reserve share is the dominant backing dependency.
- **Reported coverage.** A decline toward 100% would reduce the current $2.98 million cushion.
- **Ethereum exit depth above $100,000.** The present ladder has not located the 50-bps boundary.
- **Mint, freeze, pause and OFT-peer events.** These matter even when the proxy implementation is unchanged.
- **Remote-network authority.** New deployments should not inherit a clean assessment without a walk.
- **Dependency coverage.** Internal assessments for WTGXX, USTB, BUIDL, Erebor cash and USDB would anchor Axis 4.

## Related

- [Legacy FRAX](/reports/frax/) — the deprecated predecessor with a separate contract and balance sheet
- [sfrxUSD](/reports/sfrxusd/) — the yield-bearing frxUSD vault

---

*Based on Frax Facts at 2026-10-11T16:03:47Z, Frax redemption and deployment documentation, the canonical peg series and Ethereum exit ladder through October 11, Zellic reviews, and direct authority measurements. Frax Facts is issuer-produced, and unwalked networks remain unmeasured. Corrections or additional primary evidence are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-12 — whole-body refresh.** Replaced the revision-led report with a six-axis current-state assessment; refreshed peg, backing, supply, liquidity, network scope, audit coverage and authority evidence. Scores held.
- **2026-10-12 — reserve and audit claims corrected.** Replaced incompatible legacy reserve shares with the live 62.22% WTGXX / 21.32% USTB / 14.61% BUIDL / 1.85% cash composition, and retired the claim that no public third-party contract review existed.
- **2026-09-21 — authority path measured.** Established the 24-hour configured upgrade delay, two-hour floor and undelayed mint, freeze, pause and peer paths; scores held.
