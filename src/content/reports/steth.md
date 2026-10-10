---
asset: "stETH"
slug: "steth"
aliases: ["stETH", "Lido Staked ETH"]
chains: ["eth"]
category: "wrapped-token"
underlying_assets: ["ETH"]
assessment_type: "light"
date: "2026-10-10"
last_verified: "2026-08-13"
last_revised: "2026-10-11"
featured: false
production: false
issuer: "Lido DAO"
yield_bearing: true
axis_frame: six
volatility_score: 9.0
backing_score: 9.0
liquidity_score: 9.0
underlying_score: 6.0
structural_score: 8.5
issuer_score: 7.0
# Retained as a legacy supplemental field. Under the six-axis frame it renders
# nowhere separately; its substance is folded into Liquidity & Exit.
redemption_score: 8.5
overall_score: 8.0
---

# stETH — Risk Report

**Low risk · 8.0/10**

| Backing | What it earns | Exit methods | Age | Chain |
|---|---|---|---|---|
| ETH staked through Lido's validator modules | Ethereum staking rewards, reflected through a rebasing balance | Lido withdrawal queue or secondary market | Live since December 2020 | Ethereum |

## Summary

stETH is Lido's rebasing receipt for staked ETH. Its balance increases as validator rewards accrue. [wstETH](/reports/wsteth/) represents the same claim with a fixed token balance and a rising exchange rate; its separate report covers wrapper and bridge risks.

At block **26,155,953**, Lido reported **9,685,990.16 ETH pooled**, with **99.904%** held as beacon-chain validator balance. The withdrawal queue was active, bunker mode was off, and available liquid ETH covered the live queue **1.007×**. The principal risk is concentration at the protocol level: node operators are distributed, but every holder still depends on Lido's contracts, oracle process and DAO.

## 1 · Stability — 9.0

stETH tracks ETH plus accrued staking rewards rather than a fixed currency value. Its secondary-market price can trade below the underlying claim when sellers need immediate liquidity or Ethereum's validator-exit queue is congested. The 9.0 score reflects a liquid, directly redeemable ETH claim while retaining the market-discount risk inherent to liquid staking tokens.

## 2 · Backing — 9.0

stETH represents ETH controlled through Lido's staking system, with no off-chain custodian or reserve attestation between the holder and the observable stake.

At Ethereum block **26,155,953**:

| Component | ETH | Share of pooled ETH |
|---|---:|---:|
| Beacon balance | 9,676,652.7052 | **99.904%** |
| Buffered ETH | 2,464.3990 | 0.0254% |
| Withdrawal vault | 343.4984 | 0.0035% |
| Execution-layer rewards vault | 3.9689 | 0.00004% |

The measured components left **6,525.59 ETH**, or about **0.0674%**, outside the four listed buckets. Its cause was not established. The small residual does not move the 9.0 score, but a sustained increase above roughly 0.5% would require a fresh reconciliation.

## 3 · Liquidity & Exit — 9.0

Holders can sell stETH on secondary markets or submit it to Lido's permissionless withdrawal queue for ETH. Normal queue completion has typically taken 1–5 days, but the duration expands when liquid ETH is insufficient and validators must exit.

At the latest read, **2,464.3990 buffered ETH** covered **2,447.6222 stETH** across 37 open requests. A **3-of-6 CircuitBreaker Committee** can pause new requests and finalization for up to **21 days**. It cannot seize balances or alter code, and finalized claims remain claimable. Deep secondary liquidity and open redemption support the 9.0 score; variable queue time and the bounded pause keep the route from being continuously available.

### Redemption — 8.5 (supplemental, folded into Liquidity & Exit)

The supplemental 8.5 score reflects permissionless holder eligibility, variable settlement time and the bounded CircuitBreaker authority described above.

## 4 · Dependencies — 6.0

stETH depends on Lido's staking modules, oracle process and node operators before it reaches Ethereum. The Curated Module contained **39 operators**, 35 active and four exited, with **212,918 live validators**. Its largest operator held **3.72%**, the top ten held 37.20%, and the HHI was **345**.

The operator set is distributed and replaceable, but the protocol is not: a holder cannot substitute another staking protocol while retaining the same claim. That single-protocol dependency sets the 6.0 score. The distribution figures cover the Curated Module rather than every Lido module.

## 5 · Contract & Admin — 8.5

Full-reach changes pass through a five-day Aragon vote and at least a three-day timelock minimum. Dual Governance allows stETH holders to signal a veto and, at higher participation, delay governance while objecting holders exit.

Immediate authority is narrower. A **5-of-9 Accounting HashConsensus** can approve reports only within protocol constraints, while the **3-of-6 CircuitBreaker Committee** can impose the bounded withdrawal pause. Conditional emergency execution has not been reduced to a complete enforceable delay bound. The combination of delayed ordinary governance, holder protections and bounded immediate paths supports 8.5; upgradeability and the unresolved emergency route prevent a higher score.

## 6 · Issuer — 7.0

Lido DAO has operated the largest liquid-staking protocol since 2020 without a principal loss from its core staking contracts. Governance activity and operator disclosures are public, and withdrawal credentials point to the protocol rather than individual operators.

The 7.0 score reflects that operating record and transparency. It remains below a conventional regulated issuer because accountability is token-weighted and reputational, without a single licensed entity, audited corporate balance sheet or ordinary legal claim for holders.

## Who this is for

- ETH holders who want staking exposure with the category's deepest secondary liquidity.
- DeFi users who need the rebasing form rather than the fixed-balance wstETH wrapper.
- Holders comfortable with an asynchronous primary exit and a single-protocol dependency.

## Who should avoid

- Anyone requiring guaranteed same-day conversion to ETH at full value.
- Anyone unwilling to accept validator slashing, oracle-reporting and DAO-governance risk.
- Anyone who needs a conventional legal issuer or direct claim against an identifiable company.

## What to watch

- **The withdrawal queue, CircuitBreaker state and bunker-mode flag.** A growing or paused queue would change the exit analysis.
- **The 0.0674% reconciliation residual.** A move above roughly 0.5% reopens Backing.
- **Curated Module v2 migration.** Execution risk remains until the legacy module is fully wound down.
- **Per-module stake distribution.** StakingRouter summaries are needed before claiming what share of Lido stake the measured Curated Module represents.
- **Operator incidents and realized slashing.** Disclosure volume alone is not evidence that incidents are increasing.

## Related

- [wstETH](/reports/wsteth/) — the fixed-balance wrapper, including DeFi use and Monad-specific bridge and administration risk

---

*Based on Lido documentation and direct Ethereum reads, including backing composition at block 26,155,953, the Curated Module operator walk and the governance authority walk. Corrections or additional primary evidence are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-11 — authority and exit update.** Contract & Admin moved 8.0 → 8.5; added the eight-day ordinary governance route, bounded reporting and CircuitBreaker authorities, and the 21-day withdrawal pause.
- **2026-10-10 — first staged publication.** Added backing composition, withdrawal-queue state and Curated Module operator distribution. Removed an unverified claim that 6,750 stETH was a designated disruption reserve.
