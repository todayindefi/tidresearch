---
asset: "USD3"
slug: "usd3"
aliases: ["Reserve USD3", "Web 3 Dollar", "Web3 Dollar", "3USD"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "basket"
assessment_type: "light"
axis_frame: six
axis_exemptions:
  - axis: "4 Dependencies"
    reason: "No separate dependency score supplied by the source assessment; lending wrappers and RSR remain unresolved."
  - axis: "5 Contract & Admin"
    reason: "August authority observations have not received a current documentation and audit-scope reconciliation; no separate score supplied."
date: "2026-10-17"
last_verified: "2026-10-17"
production: false
issuer: "Reserve Protocol"
audited_reserves: false
market_cap_approx: 1756000
peg_mechanism_score: 6.5
backing_score: 5.5
liquidity_score: 5.0
issuer_score: 6.5
overall_score: 5.5
---

# USD3 — Risk Report

**Moderate risk · 5.5/10**

An appreciating basket-backed RToken from Reserve Protocol on Ethereum.

## Summary

USD3, or Web 3 Dollar, holds a basket of yield-bearing dollar assets. Yield increases the basket claim per token rather than the number of tokens held. Its Ethereum address is [`0x0d86883FAf4FfD7aEb116390af37746F45b6f378`](https://etherscan.io/token/0x0d86883FAf4FfD7aEb116390af37746F45b6f378).

⚠️ **Confirm the issuer and address:** [3Jane's USD3](/reports/usd3-3jane/) is an unrelated credit product with the same symbol.

At the October 17 snapshot, the basket is SOUND and fully collateralized, supply is **1,570,684.89 USD3**, and the basket-unit NAV proxy is **$1.118011 per token**, implying approximately **$1.756 million** of capitalization. One watched Safe holds **66.37%** of supply. Current quotes support ordinary exits, while concentrated ownership and layered lending exposures constrain resilience under stress.

An active governance RFC proposes replacing parts of the basket and discusses a possible future wind-down. The existing basket remains live; no wind-down decision or redemption deadline is established.

## 1 · Stability — 6.5

USD3 targets a growing claim on a dollar-denominated basket. Permissionless issuance and redemption connect its market price to that basket. On October 17, `basketsNeeded / totalSupply` was **1.118011 basket units per token**, compared with 1.0988 on August 4, an increase of approximately 1.75%.

The snapshot at Ethereum block **26,209,324**, collected at **02:36 UTC**, reports basket status SOUND, all four collateral plugins SOUND, and `fullyCollateralized = true`. Basket nonce **7** is unchanged from August. Frozen, trading-paused and issuance-paused flags are all false.

**Risks and limitations.** The basket-unit ratio is a NAV proxy assuming each basket unit remains worth one dollar. It is not independently measured realizable cash NAV. USD3's price should be assessed against its appreciating claim rather than a fixed $1 reference; no historical market-price stability series was supplied for this refresh.

## 2 · Backing — 5.5

The live basket comprises **sUSDS (Sky), saEthUSDC (Aave V3), wcUSDCv3 (Compound V3), and steakUSDC (Morpho Steakhouse V1)**. Policy allocation remains approximately equal quarters. Wrapper quantities from a basket quote are not portfolio weights.

Staked RSR provides market-sensitive first-loss capital. The monitor values this backstop at approximately **$848,134**, or **48.43%** of its **$1.751 million** RToken oracle valuation. That denominator differs slightly from the basket-unit capitalization proxy.

**Risks and limitations.** RSR is volatile capital, without a guaranteed dollar recovery. Three lending legs share USDC exposure. Lending losses, wrapper faults and withdrawal constraints can affect the basket despite a healthy current collateral ratio. The Steakhouse holding remains a V1 position pending any executed migration.

## 3 · Liquidity & Exit — 5.0

Holders can sell USD3 in secondary markets or redeem it for basket collateral. At the snapshot, **100% of supply** was available within the redemption allowance. The throttle parameters are **7.5 million tokens per hour** absolute and **12.5%** proportional; the absolute parameter makes it non-binding at current supply.

Indicative KyberSwap sell quotes into USDC, collected **October 17 at 01:33:29 UTC**, show:

| Quoted dollar input | USDC output value | Output/input deviation |
|---|---:|---:|
| $1,000 | $1,000.20 | +2.00 bps |
| $10,000 | $9,998.61 | −1.39 bps |
| $50,000 | $49,969.75 | −6.05 bps |
| $100,000 | $99,888.08 | −11.19 bps |

Input conversion uses market fair value **1.117446**, rather than independently measured NAV. The quote and basket snapshots have different timestamps and do not establish a simultaneous discount to NAV. Quotes exclude gas and LP withdrawal costs.

Curve's Ethereum stable-ng API reports approximately **$983,000** of aggregate pool TVL, dominated by approximately **$906,000** in USD3/scrvUSD. USD3/sUSDe and USD3/sUSDS contribute about $47,600 and $24,900 respectively. API dollar values are indicative and are not pinned to the balance-read block.

The watched Safe holds **1,042,536.12 USD3**, or **66.37%** of supply. Its balance matches the August 24/26 observations; endpoint equality does not rule out intervening transfers. Seven stable-ng pools hold **399,306.60 USD3**, representing **75.61%** of supply excluding that Safe. This denominator measures concentration, not freely available liquidity.

**Risks and limitations.** Primary redemption delivers collateral wrappers, requiring further withdrawals or sales to reach USDC. Full throttle availability does not prove stress cash-out capacity. Depth depends heavily on one pool, its paired asset, and a single large holder's decisions. Spot quotes do not establish execution for a complete LP exit.

## 4 · Dependencies — Not separately scored

USD3 depends on Sky, Aave V3, Compound V3, Morpho, their collateral wrappers, and Reserve's RToken infrastructure. USDC is the common terminal asset beneath all three lending legs, so venue diversification leaves substantial issuer concentration.

Separate assessments of saEthUSDC, wcUSDCv3, Steakhouse USDC and RSR are unresolved. No independent Dependencies score accompanies the source assessment.

The [October 7 governance RFC, with replies through October 15](https://forum.reserve.org/t/rfc-adoption-of-the-eusd-methodology-for-usd3-and-collateral-basket-change/1662), proposes adopting eUSD's basket methodology and this allocation: **25% Aave USDT, 25% Compound USDC V3, 30% Gauntlet USDC Prime V2, 10% Gauntlet USDC Frontier and 10% Sentora PYUSD V2**. It would remove sUSDS, replace Steakhouse V1, add USDT/PYUSD, and increase Morpho exposure from 25% to 50%.

**Risks and limitations.** This allocation is a proposal, not the live basket. Its replacement vaults, curators and withdrawal capacity require assessment before execution. Shared vaults with eUSD would create correlated exposure across the two products.

## 5 · Contract & Admin — Not separately scored

The inherited Ethereum observations from **August 20–22** describe an OpenZeppelin Governor controlling a self-administered **three-day TimelockController**. The observed two-day voting delay and three-day voting period imply approximately eight days from proposal through execution. An independent **2-of-5 Safe** can cancel scheduled actions, including its own removal.

The same guardian also has pause and freeze powers. Five additional addresses with no on-chain quorum can each exercise their assigned halt role immediately. This is a liveness exposure; it does not establish authority to transfer assets or upgrade the token. Owner-driven unfreezing follows the timelock path.

**Risks and limitations.** Authorities were not reverified on October 17. Current issuer-documentation agreement, deployed-version audit coverage of privileged roles, bounty coverage, and detailed freeze-duration semantics remain unverified. This report covers Ethereum only. These historical observations do not support a separately published Contract & Admin score.

## 6 · Issuer — 6.5

Reserve Protocol supplies the RToken infrastructure, with USD3 managed through its own governance process. The current forum discussion provides evidence of active basket management while the product's longer-term role remains uncertain.

The RFC discusses a possible short-to-medium-term wind-down as USD Index DTFs develop. It explicitly says the decision has not been made. Holders should distinguish that discussion from an announced closure or redemption deadline.

**Risks and limitations.** The **6.5** Issuer score is carried from the source assessment across this governance update, rather than re-derived from a new legal-accountability review. A responsible legal entity, jurisdiction, principals, governing law, dispute mechanism, financial audit and enforceable holder recourse were not verified in this refresh. The established inputs here are protocol identity, the public governance discussion and its unresolved product roadmap.

## What to watch

- An on-chain proposal, final allocations, execution and any basket nonce change.
- Withdrawal capacity of the existing Steakhouse V1 position and replacement vaults.
- Large-holder balances, USD3/scrvUSD depth and executable exit quotes.
- Official decisions about product continuity, including any actual wind-down timetable.
- A fresh authority review and resolution of the unscored dependency wrappers.

## Revision history

- **2026-10-17:** Prepared the Reserve USD3 report from the October 17 assessment and pinned Ethereum snapshot. Overall 5.5/10; Dependencies and Contract & Admin remain separately unrated. Governance proposal checked against the public forum; August admin observations retain their original verification scope.
