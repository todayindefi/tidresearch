---
asset: "wstETH"
slug: "wsteth"
aliases: ["wstETH", "Wrapped stETH", "Lido wstETH", "Wrapped liquid staked Ether 2.0"]
chains: ["eth", "base", "monad"]
category: "wrapped-token"
underlying_assets: ["ETH"]
assessment_type: "full"
date: "2026-10-03"
last_verified: "2026-10-10"
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
structural_score: 8.0
issuer_score: 7.0
# Legacy supplemental field; its substance is folded into Liquidity & Exit.
redemption_score: 8.5
overall_score: 8.0
chain_overrides:
  monad:
    backing_score: 6.5
    underlying_score: 4.0
    structural_score: 6.5
    issuer_score: 6.0
    overall_score: 7.0
---

# wstETH — Risk Report

**Low risk · 8.0/10 on Ethereum · 7.0/10 on Monad**

| Backing | What it earns | Exit methods | Age | Chains |
|---|---|---|---|---|
| stETH, representing ETH staked through Lido | Ethereum staking rewards through a rising exchange rate | Unwrap to stETH, withdraw through Lido, sell, or bridge back from supported chains | Live since 2021 | Ethereum, Base and Monad |

## Summary

wstETH is the fixed-balance form of [stETH](/reports/steth/). Rewards accrue through a rising `stEthPerToken()` exchange rate rather than an increasing token balance, making wstETH easier to use as collateral and in automated markets.

Canonical Ethereum wstETH is an immutable wrapper around stETH. Base and Monad are bridged deployments with separate administrative and backing arrangements, so the same ticker does not imply the same control surface. Ethereum scores **8.0 overall**. Monad scores **7.0**, principally because its backing is held in a shared unsiloed bridge pool and its privileged paths terminate at Chainlink-controlled CCIP administration rather than Lido governance. Base is covered as a distinct authority surface but does not yet have a complete separate six-axis score.

## 1 · Stability — 9.0

wstETH has no fixed peg: one token represents a growing amount of stETH. The exchange rate is expected to rise as staking rewards accrue, while its market price can temporarily detach from underlying value during forced selling or withdrawal congestion.

Ethereum and bridged wstETH inherit the same underlying value mechanism. The 9.0 score reflects a mature, transparent exchange-rate design with deep canonical liquidity, while retaining market-discount and staking-loss risk.

## 2 · Backing — 9.0

**Ethereum: 9.0.** At block **26,155,944**, the wrapper held **4,579,032.9408 stETH** against a represented claim of **4,579,032.9397 stETH**, equal to **100.0000000245% wrapper coverage**. This confirms that issued wstETH reconciles to the wrapper's credited stETH shares. The [stETH report](/reports/steth/) separately assesses the pooled ETH beneath those shares.

**Monad: 6.5.** Monad wstETH is backed through an Ethereum CCIP lock pool shared with other chains rather than a reserve ring-fenced for Monad. On 2026-10-03, the unsiloed pool held **21,305.268 wstETH** against **21,305.145 wstETH** of shared minted claims, leaving **0.1227 wstETH** of excess collateral. Monad represented **99.45%** of those claims. Coverage was complete at the measurement point, but holders depend on a shared pool whose collateral can serve multiple connected chains.

## 3 · Liquidity & Exit — 9.0

**Ethereum: 9.0.** Holders can unwrap wstETH to stETH without issuer approval, then use Lido's withdrawal queue, or sell directly into secondary markets. A simulated unwrap call reached the balance check rather than an access-control check, supporting the absence of a holder whitelist or investor-status gate.

The measured Ethereum WETH-exit venue set held at least **$116.8M**, and every tested trade from $1,000 through $1,000,000 returned more than **99.95% fill**. The primary withdrawal route has typically taken 1–5 days, depending on available ETH and Ethereum's validator-exit queue. A **3-of-6 CircuitBreaker Committee** can pause new requests and finalization for up to **21 days**; it cannot seize balances or alter code, and finalized claims remain claimable.

**Monad.** The local DEX book reached its 2% crossing at roughly **$1,000** and is not suitable for material exits. The practical route is CCIP back to Ethereum. Its outbound bucket holds **2,000 wstETH** and refills at **0.023148 wstETH per second**, reaching full capacity in 24 hours. Liquidity and Redemption do not yet carry separate Monad scores, but both exit paths are measured.

### Redemption — 8.5 (supplemental, folded into Liquidity & Exit)

The supplemental score reflects permissionless unwrap and withdrawal eligibility, balanced against variable queue settlement and the bounded CircuitBreaker pause. Bridged holders must first return through their bridge route before using Lido's withdrawal queue.

## 4 · Dependencies — 6.0

**Ethereum: 6.0.** The wrapper depends entirely on stETH, Lido's oracle and staking stack, its node operators and Ethereum. Lido's Curated Module is distributed across 39 operators, but a wstETH holder cannot replace Lido while retaining the same claim. Protocol concentration, rather than operator concentration, sets the score.

**Monad: 4.0.** Monad adds Chainlink CCIP, its rate limits and its administrator to the canonical dependency chain. Redemption therefore requires both the bridge system and Lido to remain available.

## 5 · Contract & Admin — 8.0

**Ethereum: 8.0.** The canonical wrapper is immutable direct-deployed code with a fixed stETH dependency and no local upgrade, pause, freeze, confiscation, arbitrary-mint or rescue authority. The mutable risk sits upstream in Lido.

Full-reach Lido changes follow a measured ordinary route of at least eight days: a five-day Aragon vote followed by a three-day timelock minimum. A **5-of-9 Accounting HashConsensus** can approve constrained reports immediately, and the **3-of-6 CircuitBreaker Committee** can impose the bounded queue pause. Conditional emergency execution has not been reduced to a complete enforceable delay bound. The immutable wrapper and delayed ordinary governance support 8.0; upstream upgradeability and the unresolved emergency route cap the score.

**Base.** Base wstETH is an upgradeable proxy. Its token admin and L2 bridge admin resolve to the same `OptimismBridgeExecutor`, whose measured delay is zero and maximum configurable delay is one second; no guardian was configured. Base therefore does not inherit Ethereum wrapper immutability.

**Monad: 6.5.** The proxy admin, token owner, default administrator, CCIP administrator and the sole minter's owner all terminate at one Chainlink `RBACTimelock`. That contract also administers CCIP's Router on Monad. Lido DAO has no on-chain authority over this deployment, so control rests with the bridge administrator rather than the canonical issuer.

## 6 · Issuer — 7.0

**Ethereum: 7.0.** Lido has operated the largest liquid-staking protocol since 2020 without a principal loss from the core staking or wrapper contracts. Governance and operator disclosures are public, but holders rely on a token-governed protocol rather than a licensed issuer with a conventional legal claim.

**Monad: 6.0.** Holders depend on both Lido's underlying system and Chainlink's CCIP administration. The additional operational counterparty lowers the score even though no misuse of that authority was observed.

## Who it's for

- ETH holders seeking staking exposure in a fixed-balance token widely used by DeFi.
- Ethereum users who value deep secondary liquidity and permissionless unwrap.
- Bridged holders who understand that Base and Monad add separate bridge and administrator risks.

## Who should avoid

- Anyone requiring guaranteed same-day conversion to ETH at full underlying value.
- Anyone unwilling to depend on Lido's governance, oracle and validator infrastructure.
- Monad holders who require a chain-specific reserve or expect Lido DAO to control the local token.
- Base holders who require the canonical wrapper's immutable control surface.

## What to watch

- **Lido's withdrawal queue and CircuitBreaker state.** Congestion or a pause changes time-to-cash.
- **Canonical wrapper coverage.** The stETH held should continue to reconcile with represented claims.
- **Monad's shared pool and CCIP bucket.** Track collateral coverage, `isSiloed` status and outbound capacity.
- **Base administration.** Changes to the bridge executor, proxy implementation or delay configuration alter its control profile.
- **Conditional emergency governance.** A complete authority walk could establish a different minimum delay under emergency conditions.

## Related

- [stETH](/reports/steth/) — pooled-ETH composition, withdrawal-queue state and node-operator distribution

---

*Based on direct Ethereum wrapper and Lido reads through 2026-10-10, the Base authority walk, and Monad authority, backing, liquidity and CCIP measurements from 2026-10-03. Corrections or additional primary evidence are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-11 — canonical and multichain update.** Added wrapper reconciliation, Ethereum depth, permissionless unwrap evidence, current Lido authority paths, Base administration and measured Monad exits.
- **2026-10-10 — underlying reconciliation.** Linked the stETH assessment and removed an unverified claim that 6,750 stETH was a designated disruption reserve.
- **2026-10-04 — Monad backing and exit update.** Reconciled the shared pool, measured the local DEX ladder and CCIP capacity, and incorporated the disclosed node-operator incident.
- **2026-10-03 — first staged publication.** Published Ethereum and Monad assessments with chain-specific Backing, Dependencies, Contract & Admin and Issuer scores.
