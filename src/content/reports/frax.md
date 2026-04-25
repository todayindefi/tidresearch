---
asset: "FRAX"
slug: "frax"
aliases: ["FRAX", "Legacy Frax Dollar", "Legacy FRAX"]
chains: ["eth", "fraxtal", "arbitrum", "optimism", "avax", "bsc", "polygon"]
category: "stablecoin"
peg_mechanism: "hybrid"
assessment_type: "full"
date: "2026-03-29"
last_verified: "2026-03-29"
peg_mechanism_score: 4.0
backing_score: 2.0
liquidity_score: 3.0
issuer_score: 5.0
overall_score: 2.5
issuer: "Frax Finance"
audited_reserves: false
market_cap_approx: 153000000
published: false
---

# Legacy Frax Dollar (FRAX) — Asset Risk Assessment (Full)

**Category:** Stablecoin | **Peg Mechanism:** Hybrid (formerly fractional-algorithmic, now 100% CR via AMOs) | **Issuer:** Frax Finance

> **⚠ This report covers Legacy Frax Dollar (FRAX), NOT frxUSD.**
> These are separate assets with separate balance sheets, separate backing, and separate contracts.
> frxUSD (`0xCAcd6fd266aF91b8AeD52aCCc382b4e165586E29`) is Frax Finance's current flagship stablecoin backed by tokenized Treasuries.
> Legacy FRAX (`0x853d955acef822db058eb8505911ed77f175b99e`) is the deprecated predecessor backed by USDC + AMOs.
> The 1:1 swap between them was closed in April 2025 (FIP-430).

## Summary

FRAX is the original stablecoin from Frax Finance, launched December 2020 as the first fractional-algorithmic stablecoin. It moved to 100% collateral ratio in February 2023 (post-Terra). As of the North Star Upgrade (April 2025), FRAX has been officially designated "Legacy Frax Dollar" (L-FRAX) and superseded by **frxUSD**, which is backed by tokenized Treasuries (BlackRock BUIDL, Superstate USTB, WisdomTree WTGXX). The 1:1 migration path from FRAX to frxUSD has been closed per FIP-430 — the balance sheets are now separated. FRAX is effectively in wind-down mode with ~$153M circulating supply.

**Peg mechanism:** FRAX has no hard redemption mechanism. The peg is maintained by **passive AMO liquidity positions** in Curve/Convex pools — not by active market operations. The AMO Minter contract has been dormant since February 2023, and there is no evidence of active peg defense by the team. The ~$0.991 price reflects a passive equilibrium where existing LP positions absorb marginal trading, not a defended peg. See [AMO Activity Status](#amo-activity-status-key-finding) for evidence.

**Contract (Ethereum):** `0x853d955acef822db058eb8505911ed77f175b99e`

**Live data:** [Backing Monitor](https://todayindefi.github.io/backing-monitor/?asset=frax) | [Frax Facts L-FRAX Balance Sheet](https://facts.frax.finance/frxusd/lfrax-balance-sheet)

## Balance Sheet (as of March 29, 2026)

Data cross-referenced from [Frax Facts L-FRAX](https://facts.frax.finance/frxusd/lfrax-balance-sheet) and [Backing Monitor](https://todayindefi.github.io/backing-monitor/?asset=frax).

### Assets ($165.7M total)

| Category | Value | % of Total | Notes |
|----------|-------|-----------|-------|
| Owned L-FRAX | $77.6M | 46.8% | **Circular** — protocol holds its own token |
| Owned L-FRAX/USD | $68.8M | 41.5% | **Circular** — FRAX in LP positions |
| Owned Volatile | $7.6M | 4.6% | Non-stablecoin assets (volatile) |
| Owned L-FRAX/Volatile | $6.7M | 4.0% | FRAX paired with volatile assets |
| Owned L-FRAX/FRAX-prev-FXS | $1.7M | 1.0% | FRAX/FXS LP positions |
| Owned Other | $1.7M | 1.0% | Miscellaneous |
| Owned USD | $372K | 0.2% | **Actual USD stablecoins** |
| Lent assets | $1.1M | 0.7% | Lent L-FRAX + USD |

### Liabilities ($181.3M total)

| Category | Value |
|----------|-------|
| L-FRAX circulating supply | $152.2M |
| Borrowed USD stablecoins | $20.0M |
| FXB circulating supply (bonds) | $9.1M |

### Key Ratios

| Metric | Value | Assessment |
|--------|-------|-----------|
| **Headline CR** | **91.4%** | **Under-collateralized** — assets < liabilities |
| **Balance (deficit)** | **-$15.7M** | Net negative |
| **External-only CR** | **15.8%** | **Critically low** — only $28.6M of $166M backing is non-FRAX |
| Circular backing | 73.8% ($122.3M) | Treasury FRAX/sFRAX/LFRAX — protocol holding its own token |
| Locked liquidity | $30.7M | Balance after locked liquidity: +$15.0M |
| On-chain CR (frozen) | 94.5% | **Paused since Feb 22, 2026** — not being refreshed |

### Four-Tier Asset Classification

The backing monitor classifies L-FRAX backing into tiers. **Only "External" represents real, non-FRAX backing:**

| Tier | Value | What It Means |
|------|-------|--------------|
| Circular (Treasury) | $122.3M | Protocol holds its own FRAX/sFRAX/LFRAX — not real backing |
| Ecosystem | $14.3M | frxUSD/sfrxUSD/FPI — Frax ecosystem tokens, not independent |
| **External** | **$28.6M** | **Real non-FRAX assets (USD, volatile, FRAX/USD LPs)** |
| frxUSD-sys (excluded) | $165.2M | frxUSD system positions — excluded from L-FRAX balance sheet |

## Key Risk Notes

- **Under-collateralized at 91.4% CR, with -$15.7M deficit.** The Feb 2023 vote to move to "100% CR" is no longer reflected in reality. The headline CR is below 100%, and the on-chain CR oracle has been **frozen/paused since Feb 22, 2026** at a stale 94.5%.
- **External-only CR is 15.8% — critically low.** Of the $166M in "backing," only $28.6M is non-FRAX external assets. The remaining 74% is the protocol holding its own token (circular) or ecosystem tokens (frxUSD, FPI). This is not real backing.
- **$20M in borrowed USD stablecoins as a liability.** The protocol has borrowed against the legacy balance sheet.
- **$9.7M in FXB bond liabilities** — outstanding Frax Bonds that mature to 1 Legacy FRAX each.
- **Wind-down asset with no migration path.** The 1:1 FRAX→frxUSD swap was ended in April 2025 (FIP-430). Legacy holders are stranded on a deprecated, under-collateralized balance sheet.
- **Liquidity is critically thin.** The primary Curve frxUSD/FRAX pool holds only $4.2M total ($3.9M frxUSD, $260K FRAX). This is the main exit route.
- **No active peg defense.** The AMO Minter contract has been dormant since February 2023 (3+ years). The ~$0.991 peg is maintained entirely by passive LP inertia from legacy Curve/Convex positions, not by active market operations. Zero governance proposals since mid-2025 address legacy FRAX peg management. If a large exit or Compound liquidation occurs, there is nobody at the controls to respond.
- **On-chain CR oracle is frozen.** The protocol stopped refreshing the on-chain collateral ratio on Feb 22, 2026 — silently, with no governance proposal or public explanation. The stale value (94.5%) overstates the actual CR (91.3%) by 3.2 percentage points. Any on-chain integrator reading this oracle is consuming misleading data.
- **S&P rated 5/5 (Weak) in December 2023** — worst among eight assessed stablecoins. The under-collateralization concerns S&P flagged have since been confirmed by the balance sheet data.
- **Naming confusion.** The ticker "FRAX" now also refers to the rebranded FXS ecosystem/governance token (gas token for Fraxtal L2).

## Peg Performance

### Current Peg (Feb 4 – Mar 29, 2026, hourly data from PegTracker)

FRAX trades **structurally below peg** at ~$0.991, reflecting the undercollateralization:

| Metric | Value |
|--------|-------|
| Average price | $0.9914 |
| Average deviation | **-0.86% below peg** |
| Worst depeg | $0.9759 (-2.41%) |
| Best price | $1.0090 |
| Time below $0.995 | **95.8%** |
| Time below $0.990 | 22.2% |
| Time below $0.980 | 0.2% (2 readings) |

For comparison: USDC deviates <0.05%, crvUSD averages $0.9997. FRAX's persistent -0.86% discount is an order of magnitude worse.

### Weekly Trend

| Week | Avg Price | Min Price |
|------|-----------|-----------|
| W05 (Feb 3) | $0.9916 | $0.9759 |
| W06 (Feb 10) | $0.9913 | $0.9875 |
| W07 (Feb 17) | $0.9911 | $0.9779 |
| W08 (Feb 24) | $0.9909 | $0.9822 |
| W09 (Mar 3) | $0.9903 | $0.9830 |
| W10 (Mar 10) | $0.9926 | $0.9896 |
| W11 (Mar 17) | $0.9924 | $0.9899 |
| W12 (Mar 24) | $0.9915 | $0.9884 |

**No recovery trend.** The price has been flat at $0.990–$0.993 for 8 consecutive weeks. The market is pricing in the structural deficit — this is not a temporary depeg but a stable discount reflecting the 91.4% CR.

### Historical Events

| Event | Date | Impact |
|-------|------|--------|
| Launch (fractional-algo) | Dec 2020 | Initial CR ~85%, algorithmically adjusted |
| Terra/UST collapse | May 2022 | Peg pressure, survived intact |
| Vote to 100% CR | Feb 2023 | Removed algorithmic component entirely |
| SVB / USDC depeg | Mar 2023 | FRAX depegged to ~$0.87 (USDC contagion) |
| Multichain bridge exploit | Jul 2023 | Affected FRAX on non-Ethereum chains |
| North Star Upgrade (frxUSD launch) | Apr 2025 | FRAX designated "legacy", migration path closed |

## Supply Breakdown

| Component | Amount |
|-----------|--------|
| FRAX + LFRAX supply (CSV) | 190,963,373 |
| + sFRAX supply (on-chain) | 56,471,746 |
| + sfrxUSD supply (on-chain) | 22,481,978 |
| - Protocol-held | -115,498,139 |
| **Net circulating** | **154,418,958** |

Note: sfrxUSD supply is included because legacy FRAX backs some sfrxUSD positions. Protocol-held deduction removes FRAX the protocol owns in its own treasury.

## Curve frxUSD/FRAX Pool (AMO Peg Health)

| Metric | Value |
|--------|-------|
| frxUSD balance | $3.9M |
| FRAX balance | $259.7K |
| FRAX % of pool | 6.3% |
| Pool health | **Balanced** |

FRAX is 6.3% of the pool (slight premium to frxUSD), but **total pool depth is only $4.2M**. This is the primary market exit route for legacy FRAX holders. A $1M+ sell would move the pool significantly.

## AMO Architecture (KEY RISK)

### What Are AMOs?

Algorithmic Market Operations (AMOs) are smart contracts authorized to mint FRAX and deploy it into DeFi strategies. They operate within governance-approved caps and are coordinated through the central **AMO Minter** (`0xcf37B62109b537fa0Cb9A90Af4CA72f6fb85E241`). The **comptroller multisig** (`0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27`) executes most operations.

### AMO Status

| AMO | Contract | Status | Capital | Risk Notes |
|-----|----------|--------|---------|------------|
| **Curve/Convex** (via comptroller) | `0xB174...` | **Active — largest position** | $49.3M FRAX in Convex FRAX/USDe, $3.8M in Curve frxUSD/FRAX, plus smaller LPs | Deprecated as standalone contract; operations run through comptroller multisig. Bulk of the L-FRAX/USD balance sheet category ($68.8M). |
| **Compound AMO** | `0xB174...` | **Active** | $37.4M sFRAX supplied as collateral; **$20M USDT borrowed** | **Source of the $20M borrowed USD liability.** Leveraging an under-collateralized balance sheet. |
| **Fraxlend AMO V1** | `0x0Ed8...` | Active | Small — FPI lending | Ethereum only |
| **Fraxlend AMO V3** | `0xf6E6...` (Eth) `0xCDeE...` (Arb) `0x58C4...` (Fraxtal) | Active | ~$1.1M lent across Fraxlend pairs (MKR, UNI, frxETH, FXB, FPI, sfrxETH, WBTC, ezETH) | Multi-chain deployment |
| **Aave AMO V3** | `0x0F2a...` | Active | FRAX supplied to Aave V3 + V3 EtherFi; small idle USDC | FIP-378 authorized **100M FRAX minting cap** (Jul 2024). Small actual deployment. |
| **Uniswap V3 AMO V2** | `0xc91B...` | Active | Several LP positions: FRAX/USDC, FPI/FRAX, stkAAVE/FRAX, frxETH/FRAX | Concentrated liquidity positions |
| **FXB AMO** | Fraxtal `0xfC9f...`, `0xE6ed...` | Active | $9.1M in outstanding bonds across maturities (2025–2055) | Bonds mature to 1 L-FRAX each. Includes FXB20261231, FXB20271231, FXB20291231, FXB20551231. |
| **Borrow AMO** | (FIP-415) | Active | $50M authorized cap (Dec 2024) | Can mint FRAX and/or use treasury to borrow stablecoins. Likely contributes to the borrowed USD position. |
| **Fraxswap TWAMM** | Various | Active | Small positions across chains (Eth, Fraxtal, Avalanche, BSC, Polygon, Optimism) | Time-weighted AMM orders for collateral operations |
| **FraxFerry** | Multiple bridges | Active | FRAX locked in bridge contracts across ~10 chains | Cross-chain bridge infrastructure. $1.3M FRAX in ethereum→moonriver ferry alone. |

### Critical AMO Risk Factors

**1. AMO minting is NOT disabled.**

No FIP has formally frozen legacy FRAX minting at the contract level. The AMO Minter contract has no pause function — minting can only be blocked by:
- Setting mint caps to zero
- Removing AMOs from the authorized list
- Setting the minimum CR threshold impossibly high

None of these actions have been taken. The FIP-378 (Aave AMO, Jul 2024) authorized a **100M FRAX minting cap** and it has not been rescinded. In theory, the multisig could mint additional legacy FRAX at any time.

**2. Active borrowing against a deficit balance sheet.**

The Compound AMO has $37.4M sFRAX supplied as collateral and **$20M USDT borrowed** against it. This is the source of the `Borrowed USD stablecoins: $19,992,616` liability on the balance sheet. Borrowing against an already under-collateralized balance sheet (91.4% CR) increases risk for legacy holders. If sFRAX collateral value drops or the USDT loan is called, the deficit worsens.

**3. No formal wind-down plan.**

There is no published roadmap for unwinding legacy AMO positions. The only wind-down governance action is **FIP-442** (Feb 2026, passed), which allows early exit from a specific locked Convex vault at a 4% fee. The $77.2M in LP positions and $37.4M in Compound have no announced exit strategy.

**4. Zombie governance.**

All new AMO governance proposals since mid-2025 are exclusively frxUSD/sfrxUSD:
- FIP-434 (Sep 2025): sfrxUSD AMO strategies
- FIP-437 (Oct 2025): Predeposit Vault AMO (frxUSD)
- FIP-439 (Nov 2025): sfrxUSD new strategies
- FIP-4XX (Mar 2026, in discussion): Aave V4 + Morpho for sfrxUSD

Legacy FRAX is not being dismantled — it is being **ignored**.

**5. Concentrated multisig control.**

The comptroller multisig (`0xB174...`) controls the majority of AMO-deployed capital. It holds the largest Convex positions, executes the Compound AMO, and manages directly-held tokens. Legacy FRAX holders have no practical governance recourse — veFXS governance is focused on frxUSD.

### Top AMO Positions (from Frax Facts API, March 29 2026)

| Position | Value | Location |
|----------|-------|----------|
| FRAX staked in Convex FRAX/USDe | $49.3M | Ethereum comptroller |
| sFRAX collateral (Compound AMO) | $37.4M | Ethereum comptroller |
| FRAX held directly | $17.5M | Ethereum comptroller |
| USDe staked in Convex FRAX/USDe | $16.4M | Ethereum comptroller |
| sfrxUSD held directly | $5.0M | Fraxtal treasury |
| FRAX in Curve frxUSD/FRAX LP | $3.8M | Ethereum comptroller |
| CVX locked in vlCVX | $2.0M | Ethereum comptroller |
| LFRAX held directly | $1.9M | Fraxtal treasury |

## Frax Bonds (FXBs)

### Mechanism

FXBs are **zero-coupon bond ERC20 tokens** that redeem 1:1 for **Legacy FRAX** (not frxUSD) at maturity. They are sold at a discount via a continuous Gradual Dutch Auction (GDA) — the discount is the buyer's yield. The L-FRAX collateral is locked inside the FXB contract itself, making redemption trustless: holders call `burn()` after maturity to receive L-FRAX.

**Key contracts:**
- FXB AMO (Fraxtal): `0xE6ed07952dC9993DD52c6d991Fa809C00eBE58a3`
- FXB Factory (Ethereum): `0x7a07D606c87b7251c2953A30Fa445d8c5F856C7A`
- FXB Factory (Fraxtal): `0xaFa1705021f65418e746D8664f4B8A58271f6De4`
- Auction Factory (Fraxtal, permissionless): `0x2606C2BbE377EDa9e38FFf300D422Ca7cCAB1e5d`

### Outstanding FXBs

| FXB | Chain | Total Supply | Protocol-held | External | Price (FRAX) | Ext Value | Maturity |
|-----|-------|-------------|--------------|----------|-------------|-----------|----------|
| FXB_20261231 | Ethereum | 6,046,781 | 1,999,230 | 4,047,551 | 0.9334 | $3.7M | Dec 31, 2026 |
| FXB20271231 | Fraxtal | 4,338,435 | 3,431,224 | 907,211 | 0.8252 | $0.7M | Dec 31, 2027 |
| FXB20291231 | Fraxtal | 12,652,837 | 8,144,985 | 4,507,852 | 0.7031 | $3.1M | Dec 31, 2029 |
| FXB20551231 | Fraxtal | 13,553,959 | 832,137 | 12,721,822 | 0.0870 | $1.1M | Dec 31, 2055 |
| **Total** | | | | | | **$9.0M** | |

Matured FXBs (FXB_20240630, FXB_20241231, FXB20251231) have ~$340K still unredeemed.

### FXB as Farming Asset — Yield Analysis

FXBs can be used as a fixed-income strategy: buy at a discount, hold to maturity, redeem for 1 L-FRAX. The yield depends on how far L-FRAX depegs between now and maturity.

| FXB | Price | Days Left | FRAX Yield | APY (FRAX) | Break-even L-FRAX Price |
|-----|-------|-----------|-----------|------------|------------------------|
| FXB_20261231 | 0.9334 | 277 | 7.1% | 9.5% | $0.93 |
| FXB20271231 | 0.8252 | 642 | 21.2% | 11.6% | $0.83 |
| FXB20291231 | 0.7031 | 1,373 | 42.2% | 9.8% | $0.70 |
| FXB20551231 | 0.0870 | 10,869 | 1,049% | 8.6% | $0.09 |

**Scenario analysis for FXB_20261231** (the shortest-dated active bond):

| L-FRAX at maturity | USD return | Assessment |
|---------------------|-----------|-----------|
| $1.00 (full repeg) | +7.1% | Best case — 9.5% APY |
| $0.992 (current) | +6.3% | Status quo — 8.4% APY |
| $0.95 | +1.8% | Mild further depeg — still positive |
| $0.93 (break-even) | 0% | Break-even |
| $0.80 (severe depeg) | -14.3% | Loss — L-FRAX backing collapses |

**FXB_20261231 assessment:** At 0.9334 FRAX, you're getting ~9.5% APY in FRAX terms for 9 months of maturity risk. The break-even is L-FRAX at $0.93 — a further 6% depeg from current $0.992. Given that L-FRAX has traded in a tight $0.976–$1.009 range for 8 weeks and the AMOs are still maintaining the peg (albeit at a discount), a 6% further depeg would require a significant catalyst (Compound AMO liquidation, major volatile asset crash, or protocol abandonment). The risk-reward is **reasonable for the 2026 maturity** — short enough that the wind-down risk is manageable and the yield compensates for the depeg risk.

**Longer-dated FXBs are much riskier:**
- FXB20291231 (3.75 years): L-FRAX must stay above $0.70 — plausible but a long time for a deprecated asset
- FXB20551231 (29 years): Essentially a bet that Frax Finance will still exist and maintain L-FRAX in 2055. At 8.6% APY this barely compensates for the existential risk. The break-even ($0.09) is generous, but collecting at maturity requires the protocol to function for three decades.

### FXB Risk Factors

**1. FXBs redeem into L-FRAX, not USD.** The docs explicitly state FXBs *"do not guarantee FRAX peg, FRAX value, or yield/interest denominated in any other asset except FRAX."* Your FXB is only as good as L-FRAX's value at maturity.

**2. Fraxtal FXBs have operational/counterparty risk.** Post-FIP-430, Fraxtal FXBs are being upgraded from frxUSD-backed to L-FRAX-backed (new contract: `FXB_LFRAX.sol` v1.2.0). After the upgrade, the team must **manually transfer L-FRAX** to each FXB contract before maturity. If they fail to fund it, `burn()` reverts with `InsufficientCollateral`.

**3. Secondary market liquidity is terrible.** FIP-379 discussion revealed ~$671K liquidity in Curve FXB pools with 800 bps slippage. Pre-maturity exit is costly.

**4. FXBs add to L-FRAX liabilities.** The $9.0M in externally-held FXBs represents future L-FRAX obligations on an already under-collateralized balance sheet.

**5. Quit Creditor positions.** FXB20291231 and FXB20271231 have large protocol-held quantities in "L1 Quit Creditor Receiver" contracts (for UniV3 FRAX/DAI and FRAX/USDC). These are from FIP-379's locked liquidity exit mechanism — LP holders who exited locked positions received FXBs at auction price.

**6. Timelock can redeem early.** The `isRedeemable()` function allows the factory timelock to call `burn()` before maturity — an admin privilege.

### FXB Governance

| FIP | Date | Description |
|-----|------|-------------|
| FIP-355/356/357 | Apr–May 2024 | Launched FXB20251231, FXB20291231, FXB20551231 (30M cap each) + Fraxlend pairs |
| FIP-379 | Jul 2024 | Locked Liquidity Standard Exit — LPs exit locked positions into FXB2029 at auction price |
| FIP-384 | Jul 2024 | Launched FXB20271231 (30M cap) + Fraxlend pair |
| FIP-430 | Apr 2025 | Balance sheet separation — FXBs must redeem L-FRAX, not frxUSD. Fraxtal FXBs being upgraded. |

### AMO Audit History

| Audit | Firm | Date | Scope |
|-------|------|------|-------|
| Initial protocol | CertiK | Oct–Nov 2020 | Found 39 issues (3 critical, 8 major). Addressed. |
| BAMM contracts | ChainSecurity | — | Borrow AMM component |

No comprehensive recent audit of AMO contracts or the legacy balance sheet has been publicly disclosed. The initial CertiK audit predates most current AMO deployments.

## AMO Activity Status (KEY FINDING)

### Evidence: No Active Peg Defense

Investigation of on-chain data (March 29, 2026) reveals that **no entity is actively managing the legacy FRAX peg**. The ~$0.991 price is sustained entirely by passive liquidity from old AMO positions, not by active market operations.

| Evidence | Detail | Source |
|----------|--------|--------|
| **AMO Minter dormant** | Last transaction: **February 9, 2023** — over 3 years ago. No new FRAX has been minted through the AMO system since then. Last operations were `syncDollarBalances` calls; last `mintFraxForAMO` dates to mid-2022. | [Etherscan](https://etherscan.io/address/0xcf37B62109b537fa0Cb9A90Af4CA72f6fb85E241) |
| **Comptroller active but opaque** | Multisig (`0xB174...`) last tx March 27, 2026. Regular `execTransaction` calls through Jan–Mar 2026. However, this multisig controls **both** legacy FRAX and frxUSD positions — activity does not prove legacy peg defense. | [Etherscan](https://etherscan.io/address/0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27) |
| **Zero governance proposals for peg defense** | Every AMO-related proposal since mid-2025 is exclusively frxUSD/sfrxUSD (FIP-434, 437, 439, 443). Legacy FRAX governance is limited to exit/unlock proposals for trapped users (FIP-442). No proposal proposes injecting collateral, rebalancing positions, or defending the peg. | [Frax Governance Forum](https://gov.frax.finance/) |
| **CR slowly drifting** | 91.06% → 90.86% → 91.34% with fluctuation over recent weeks. Consistent with passive positions drifting, not active management. | [Backing Monitor](https://todayindefi.github.io/backing-monitor/?asset=frax) |
| **Persistent discount, not defended par** | FRAX trades at $0.991 avg (below $0.995 for 95.8% of readings over 8 weeks). An actively managed peg would target closer to $1.00. | PegTracker data |

### How the Passive Peg Works

The peg holds at ~$0.991 through **inertia from legacy LP positions**:

1. **Curve/Convex FRAX/USDe position ($49.3M)** — deployed historically, auto-compounding rewards. Creates a large liquidity wall but is not being rebalanced.
2. **Curve frxUSD/FRAX pool ($3.8M FRAX side)** — the primary price-setting venue. FRAX is only 6.3% of the pool, meaning most FRAX has been drained to the buy side, which pushes price toward peg.
3. **Comptroller FRAX holdings ($17.5M)** — could theoretically be deployed to defend the peg, but no evidence this is happening.

The peg does not require 100% redeemability or active management — it only needs enough passive liquidity to absorb marginal selling. Since only a small fraction of the $153M circulating supply trades at any given time, the existing LP positions absorb that flow. The market prices the 91% CR as a stable ~0.9% discount rather than a 9% discount.

### Why This Is Fragile

- **No active responder.** If a large holder exits ($5M+), or if the Compound position ($37.4M sFRAX collateral, $20M borrowed USDT) faces liquidation pressure, there is nobody at the controls to rebalance.
- **LP positions can be withdrawn.** The comptroller multisig could withdraw legacy LP positions at any time for frxUSD purposes. There is no governance lock preventing this.
- **Incentives are declining.** Curve/Convex rewards for FRAX pools are being redirected to frxUSD. As rewards decline, third-party LPs exit, reducing depth further.
- **FIP-442 enables exits.** The recent proposal allowing early exit from locked Convex FRAX vaults (at 4% fee) will reduce LP depth as locked participants leave.

### On-Chain CR Oracle Freeze

The on-chain collateral ratio oracle **stopped refreshing on approximately February 22, 2026** with no public explanation.

| Metric | Value |
|--------|-------|
| Stale on-chain CR | **94.5%** |
| Live computed CR | **91.3%** |
| Discrepancy | **3.2 percentage points** |
| Days since last refresh | **~35 days** (as of March 29, 2026) |

**No governance proposal, forum post, or public communication explains the freeze.** It happened silently. The timing roughly corresponds to a gap in comptroller multisig activity in late February.

**Impact:** Any on-chain protocol reading the Frax CR oracle for risk parameters (collateral factors, liquidation thresholds) is consuming a stale value that **overstates collateralization by 3.2%**. This is a systemic risk for integrators.

## Scoring Rationale

| Category | Score | Notes |
|----------|-------|-------|
| Peg Mechanism | 4.0 | **No active peg defense** — AMO Minter dormant since Feb 2023, zero governance proposals for peg management. Peg holds at ~$0.991 purely via passive LP inertia from legacy Curve/Convex positions. Trades below $0.995 for 95.8% of readings. On-chain CR oracle frozen since Feb 22, 2026 (stale 94.5% vs actual 91.3%). Fragile: no responder if a large exit or liquidation occurs. |
| Backing | 2.0 | **Under-collateralized at 91.4% CR with -$15.7M deficit.** External-only CR is 15.8% — 74% of backing is circular (protocol holding its own token). $20M borrowed USD and $9.1M FXB bonds as additional liabilities. Far worse than "nominally 100% CR." |
| Liquidity | 3.0 | Primary Curve pool is only $4.2M. Still functional for small exits, but a $153M stablecoin with $4.2M of DEX liquidity is a serious mismatch. Liquidity will continue declining as incentives go to frxUSD. |
| Issuer | 5.0 | Frax Finance is an established DeFi team (Sam Kazemian, 5+ years). Active development on frxUSD, Fraxtal L2, frxETH. However, attention has shifted entirely away from legacy FRAX — the frozen on-chain CR oracle confirms deprioritization. |
| **Overall** | **2.5** | **Very high risk — under-collateralized, mostly circular backing, thin liquidity, frozen monitoring, and no migration path. Not suitable for any position. Existing holders should exit.** |

## Comparison

| Factor | FRAX (legacy) | frxUSD (successor) | crvUSD | USDC |
|--------|--------------|-------------------|--------|------|
| Status | Wind-down | Active flagship | Active | Active |
| Circulating | ~$153M | ~$125M | ~$264M | $40B+ |
| CR | 91.4% (below 100%) | ~100% (Treasury-backed) | ~140% inclusive | 100%+ (attested) |
| External-only CR | **15.8%** | ~100% | Varies | 100%+ |
| Backing | 72% circular + USDC + AMOs | Tokenized Treasuries (BUIDL, USTB) | CDP + YB + PK | USD reserves (attested) |
| Primary DEX depth | $4.2M (Curve) | Growing | Deep (Curve native) | Deep |
| Reserves audit | None, CR oracle frozen | Fiat-redeemable, named custodians | None (on-chain verifiable) | Monthly attestations |
| Score | **2.5** | Not yet assessed | **5.0** | **9.0** |

## Recommendations

1. **Do not take new positions in legacy FRAX.** Use frxUSD for Frax ecosystem stablecoin exposure.
2. **Existing holders should exit.** The primary Curve pool is only $4.2M — exit in small tranches to avoid slippage. The pool is already below the $5M threshold where exit risk is material.
3. **Watch for governance proposals** affecting legacy FRAX redemption, backing changes, or further balance sheet separation.
4. **If holding FRAX in protocols:** Verify the protocol distinguishes between FRAX and frxUSD in risk parameters and oracles. Alert risk teams that the on-chain CR oracle is frozen (stale 94.5% vs actual 91.3%) and has not been refreshed since Feb 22, 2026.
5. **Monitor the deficit trajectory** — the -$15.7M deficit and 91.4% CR could worsen if volatile assets ($8.3M, 25.7% of external backing) decline.
6. **Watch for AMO position withdrawals.** The comptroller multisig could withdraw legacy LP positions (currently providing passive peg support) at any time. No governance lock prevents reallocation to frxUSD. Track the Curve frxUSD/FRAX pool balance and Convex FRAX/USDe position for sudden declines.

## Data Sources

- **Live dashboards:** [Backing Monitor (L-FRAX)](https://todayindefi.github.io/backing-monitor/?asset=frax) | [Frax Facts L-FRAX Balance Sheet](https://facts.frax.finance/frxusd/lfrax-balance-sheet)
- **Frax Facts API:** `https://api.frax.finance/v2/lfrax/balance-sheet/latest` — returns all 202 asset positions + 50 liabilities with current values, updated hourly
- **On-chain contracts:** FRAX token (`0x853d...`), AMO Minter (`0xcf37...`), Comptroller multisig (`0xB174...`), Curve frxUSD/FRAX pool (`0xBBaf...`)
- [CoinMarketCap — Legacy Frax Dollar](https://coinmarketcap.com/currencies/frax/)
- [DefiLlama — Frax USD](https://defillama.com/stablecoin/frax-usd)
- [Frax Finance Docs](https://docs.frax.finance/)
- [Frax Governance Forum](https://gov.frax.finance/) — FIP-378, FIP-415, FIP-430, FIP-442
- [S&P Global — FRAX Stability Assessment (Dec 2023)](https://www.spglobal.com/ratings/en/research/pdf-articles/231212-stablecoin-stability-assessment-frax-101590842)
- [CertiK — FRAX Audit (Oct 2020)](https://www.certik.com/resources/blog/frax-finance-audits-its-stablecoin-protocol-with-certik)

## Bottom Line

Legacy FRAX is worse than deprecated — it is **under-collateralized**. The balance sheet shows a -$15.7M deficit, 91.4% CR, and only 15.8% external-only CR (74% of "backing" is the protocol holding its own token). The on-chain CR oracle has been frozen since February 2026. Primary DEX liquidity is down to $4.2M for a $153M stablecoin. Frax Finance has moved on to frxUSD with Treasury-backed reserves, fiat redeemability, and active development. The 2.5/10 score reflects an under-collateralized, illiquid, deprecated stablecoin with circular backing and no exit plan for legacy holders.
