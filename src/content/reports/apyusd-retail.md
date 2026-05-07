---
asset: "apyUSD"
slug: "apyusd"
aliases: ["apyUSD", "Apyx USD Yield"]
chains: ["eth", "base"]
category: "vault-share"
underlying_assets: ["apxUSD"]
yield_bearing: true
assessment_type: "light"
audience: "retail"
companion_report: "apxusd-retail"
date: "2026-05-07"
last_verified: "2026-05-07"
featured: false
volatility_score: 7.0
structural_score: 5.5
redemption_score: 4.5
liquidity_score: 5.5
overall_score: 4.5
---

# apyUSD — Retail Risk Report

**Moderate-elevated risk · 4.5/10**

| Yield | Exit methods | Effective time-to-cash | Age | Chains |
|---|---|---|---|---|
| ~13% APY ongoing (real STRC dividends) | DEX two-hop (retail) or 30-day UnlockToken cooldown (institutional) | Minutes (sub-$1M via DEX) or 30+ days (canonical) | ~2.5 months | Ethereum, Base |

## Summary

apyUSD is the yield-bearing ERC-4626 vault wrapper for [apxUSD](/reports/apxusd-retail/). Deposit apxUSD, receive apyUSD shares; the vault holds the apxUSD and accrues the underlying STRC dividend stream into share value (NAV grows). Where apxUSD holders forgo yield in exchange for stablecoin functionality, apyUSD holders accept a **30-day UnlockToken cooldown** on exits in exchange for the dividend pass-through.

As of 2026-05-07: vault holds ~$103.5M apxUSD (~34% of total apxUSD supply), 75.94M apyUSD shares outstanding, NAV 1.363 apxUSD per share. The protocol launched in February 2026 at NAV 1.0 — about 2.5 months ago.

The 4.5/10 score reflects: real ~13% ongoing yield + meaningful secondary-market depth for retail-scale exits (the cooldown isn't the only path), offset by inheriting the full apxUSD risk stack — STRC is the largest single-issuer component (~42% of reserves, with ~56% cash & equivalents per Apyx's Accountable proof-of-solvency feed), off-chain RWA custody at an unnamed broker, no PCAOB-firm sign-off (a TEE-attested feed exists — see [the apxUSD retail report](/reports/apxusd-retail/) for details) — plus the asymmetric structure where apyUSD captures all yield while apxUSD bears residual collateral risk uncompensated.

## What you actually earn

**~13% APY ongoing**, paid in NAV growth (your shares are worth more apxUSD over time, not paid out as separate income).

This needs unpacking because the headline number is misleading:

- The vault's NAV has gone from 1.000 to 1.363 over ~2.5 months, which is roughly 36% — at first glance that looks way higher than STRC's ~11-15% indicated dividend rate
- The actual structure: **week 1 of operations saw a one-time ~33% NAV jump** (Feb 20-27, 2026) caused by donation-pattern inflows of apxUSD into the vault — most plausibly Apyx loading pre-launch STRC dividends or strategic seed capital. From week 2 onwards, NAV has grown smoothly at **~13% annualized**, which IS within STRC's indicated-rate range
- **For new buyers today: you earn the ~13% ongoing rate going forward.** You do not capture the week-1 launch jump — that benefited only addresses present during the first week of operations

So apyUSD's recurring yield is roughly twice T-bill yields and competitive with curated DeFi credit products like syrupUSDC. The trade-off is a 30-day exit lock, materially worse exit liquidity than syrupUSDC's permissionless DEX-route (~12 bps slippage to $100K), and dependence on a young (~2.5 months) RWA protocol with no PCAOB-firm sign-off (a TEE-attested PoR feed exists — see the apxUSD retail report's "Backing & attestation" section for details).

## How exit works

apyUSD has two viable exit paths, with very different time profiles:

**Path 1 — DEX two-hop (preferred for retail).** Sub-minute exit via:
- Step 1: apyUSD → apxUSD on a DEX. Main venue is the **Curve apyUSD/apxUSD pool** (`0xe41be7b3...`) with **~$14.9M of total depth** (~$7.5M apyUSD + $7.4M apxUSD as of 2026-05-07). Pricing is NAV-aware (the pool tracks the 1.363 NAV ratio). Backup pools include PancakeSwap V3 apyUSD/apxUSD (~$1.4M Ethereum + ~$1M Base) and several smaller Uniswap V4 pools. Total apyUSD secondary depth across all pools: **~$17M on Ethereum + $1M on Base**
- Step 2: apxUSD → USDC via Curve apxUSD/USDC (~$14.5M USDC depth)

Both legs have material depth. For retail-scale exits (sub-$100K, probably workable up to low-mid six figures), this route works in minutes with manageable slippage. Trading activity on the secondary pools is sporadic — bursts of 100+ swaps over a few hours, then quiet days — which suggests the flow is mostly market-maker / arbitrage rather than continuous retail. Slippage at any given moment depends on pool balance state.

**Path 2 — Canonical UnlockToken cooldown (required for institutional sizing).** For positions large enough to exhaust DEX depth (above ~$1M, depending on slippage tolerance), the canonical path is:

1. Burn apyUSD shares → enter the UnlockToken cooldown vault (converts your position into a "locked apxUSD" claim)
2. Wait the cooldown duration. Apyx's public docs say 20 days; contract source review concluded 30 days. The duration getter isn't externally exposed, so this gets verified through source-level review rather than a direct on-chain read. Worth requesting clarification from Apyx if sizing materially
3. Claim apxUSD after cooldown completes
4. Then exit apxUSD via Curve apxUSD/USDC or Apyx's USDC settlement (mechanism not publicly documented)

So effective time-to-cash for institutional sizing is **30 days minimum + apxUSD's own settlement window**. UnlockToken currently holds ~$1.13M apxUSD across all positions in cooldown — the pipe is small but not stress-tested at scale.

**Practical guidance:** for retail-sized positions you'll almost always use the DEX route. The cooldown becomes relevant only if (a) you're sizing above what DEX depth can absorb at acceptable slippage, or (b) the secondary pools are temporarily quiet/imbalanced and you don't want to wait for MM activity.

## What the contracts are doing

apyUSD is a standard ERC-4626 vault on Ethereum (with a Base deployment), upgradeable proxy. The Ethereum implementation was upgraded once on 2026-03-30 (~30 days post-launch). Three audits cover the contract layer (more on those below).

What sits behind the scenes:
- The vault holds apxUSD; apxUSD itself is backed by a mix of cash & equivalents (~56%), STRC (Strategy Perpetual Preferred Stock, ~42%), and a small SATA position — verified via Apyx's [Accountable proof-of-solvency feed](https://accountable.apyx.fi/) on 2026-05-07. STRC is the largest single-issuer concentration, but not the totality.
- STRC pays a variable-rate monthly dividend (around 11.25% indicated rate, monthly reset)
- Apyx accrues STRC dividends into apxUSD that flows back to the apyUSD vault, which is what produces NAV growth for apyUSD holders
- The smart contract handles ERC-4626 standard mechanics; the dividend collection, custody, and STRC management are off-chain at Apyx

The thing that matters for a retail holder: **you're holding a yield-bearing wrapper around a synthetic stablecoin that's backed off-chain by a single TradFi security.** Two layers of "trust Apyx to liquidate things at the right time" on the exit path.

## Cross-chain bridge (Ethereum ↔ Base)

apyUSD bridges between Ethereum and Base via **Chainlink CCIP v1.6.1** (LockRelease pool on Ethereum, BurnMint on Base). Verified on-chain 2026-05-07:

- **Mass conservation holds.** apyUSD locked on Ethereum (748,518.43) = Base totalSupply (748,518.43) — exact match. The bridge is not silently issuing more Base supply than is locked
- **Architecture is bilateral and clean.** Strictly Ethereum ↔ Base; no third-chain peers configured, no inert pathways. Different attack class from the multi-chain LayerZero OFT exploits of April 2026 (rsETH, Drift, Volo) — those hit single-DVN configurations and admin compromises that don't map to CCIP's architecture. The Risk Management Network (RMN) is Chainlink's circuit-breaker layer; standard single-vendor dependency
- **Rate limits are real.** apyUSD: 1.6M tokens/day cap per direction (~$2.18M at NAV $1.363; ~9% of secondary float). Both directions enabled; the cap refills over 24 hours. Real circuit-breakers, not configured-as-checkbox
- **LockRelease rebalancer is unset.** Locked inventory on the Ethereum side cannot be moved off-pool by the owner — flows are strictly through CCIP message paths. Good operational hygiene

**The caveat worth knowing:** the bridge admin posture is one tier weaker than the token admin. The token contracts (apxUSD, apyUSD, UnlockToken, AddressList) sit behind a 4-of-6 admin Safe with a 72-hour timelock and a distributed guardian role that can cancel scheduled operations. The CCIP pools are owned by a separate **3-of-6 Safe with no timelock**, owned via standard `Ownable`. Same six signers as the token-admin Safe but a lower threshold and instant execution. A 3-signer quorum on this Safe can re-configure the entire bridge in one transaction with no exit window — raise rate limits, add new chain peers, swap router or RMN proxy, set the rebalancer to drain locked inventory. For retail-scale Base exposure, this is worth knowing but not disqualifying; the rate limits and conservation checks are real protections at the operational layer, but the governance layer is materially weaker than the token layer.

## Audits & security

Same audit + admin layer as apxUSD (the protocol is shared):

- **3 audits** — Quantstamp (Feb 2026), Zellic (March 2026), Certora (March 2026, including formal verification). Certora found 11 issues including 1 high-severity (fixed and confirmed). Zellic is top-tier; Certora is best-in-class for formal verification. The CCIP bridge layer was audited by tidresearch internally (on-chain 2026-05-07) but does not appear in any of the three external audits' scopes
- **Token admin posture (verified on-chain 2026-04-30):** OpenZeppelin AccessManager root admin is a 4-of-6 Gnosis Safe v1.4.1 (`0xabdd8c...`); 72-hour `targetAdminDelay` on apxUSD/apyUSD/UnlockToken/AddressList; distributed guardian role can cancel scheduled operations during the window
- **Bridge admin posture (verified on-chain 2026-05-07):** all four CCIP pools (apxUSD + apyUSD on both Ethereum + Base) owned by a 3-of-6 MAINTAINER Safe (`0xf9862efc...`, same six signers as the ADMIN Safe but lower threshold + no timelock). See "Cross-chain bridge" section above for the implications
- **No bug bounty** — gap relative to mature protocols
- **One observable post-launch implementation upgrade** for the apyUSD wrapper itself (March 2026, ~30 days into production)

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Volatility | 7.0 | NAV-tracking ERC-4626, accruing. Ongoing yield ~13% APY (verified on-chain via week-by-week NAV sampling), within STRC's 11-15% indicated-rate range. Inherits apxUSD's $1 peg risk indirectly via the asset side. |
| Structural | 5.5 | ERC-4626 standard. Three audits incl. formal verification. 4-of-6 Safe admin + 72h target delay (verified 2026-04-30). Offset by: one observable post-launch upgrade 2026-03-30; cooldown duration code-vs-docs mismatch (30d source / 20d docs) — duration getter not externally exposed; ~2.5 months in production. |
| Redemption | 4.5 | Two viable paths: (a) DEX two-hop apyUSD → apxUSD → USDC for retail-sized exits in minutes; (b) 30-day UnlockToken cooldown for institutional sizing that exhausts DEX depth. Plus apxUSD's own opaque USDC settlement on the second leg. |
| Liquidity | 5.5 | ~$17M Ethereum + $1M Base secondary depth across ~10 pools (Curve $14.9M dominant; PancakeSwap V3 + Uniswap V4 supporting). Trading sporadic but real depth exists. Materially better than the cooldown-only framing the protocol's docs imply. Still depth-constrained at institutional sizing. |
| **Overall** | **4.5** | Moderate-elevated risk |

## Who it's for

Retail or institutional users who want the dividend pass-through from Apyx's STRC backing. At retail scale (sub-$100K), exit speed is comparable to apxUSD's via the secondary DEX route. Comfortable with the same off-chain RWA risks that drive apxUSD's score — STRC as the largest single-issuer component (~42% of reserves), opaque redemption, no PCAOB-firm sign-off (a TEE-attested PoR feed exists) — plus dependence on the secondary-pool MM/arb activity for fast exit, with the 30-day cooldown as fallback.

## Who should avoid

- **Anyone sizing above what secondary DEX depth can absorb without invoking the cooldown.** Above ~$1M, slippage on the two-hop route may force the 30-day cooldown path; build that into your exit plan if sizing institutionally
- Anyone who treats this as a "stablecoin substitute" — apyUSD is a yield-bearing vault share, not a stablecoin
- Anyone uncomfortable with the launch-NAV-jump structure — early holders captured a one-time ~33% bump that new buyers do not. This is disclosed and explained but is unusual relative to standard ERC-4626 launches
- Anyone whose exit window depends on continuously-active MM flow — secondary trading is sporadic; if the pool is quiet at the moment you need to exit, the cooldown becomes the path

## What to watch

- **First PCAOB-firm attestation.** Apyx publishes a continuous TEE-attested proof-of-solvency feed via Accountable, but has separately committed to monthly third-party PCAOB-firm attestation reports. None of those has surfaced through 2026-05-07. If/when a PCAOB-firm attestation appears, that closes the largest remaining information gap for both apxUSD and apyUSD holders (the Accountable feed is a real attestation but does not audit the custodian itself).
- **STRC ex-dividend dates** (~mid-month). The next ones land around May 15 and June 15. STRC's reset mechanism interacts with how apyUSD's NAV behaves around those dates; smooth growth vs visible step-changes is the test of whether Apyx is passing through dividends consistently
- **Cooldown duration verification.** Apyx docs cite 20 days; contract source review concluded 30. The duration getter isn't externally exposed, so this can't be independently verified by a public on-chain read. Apyx publishing clarification (or the team exposing the getter) would close this
- **Curve apyUSD/apxUSD pool depth and activity.** The ~$14.9M pool is the dominant secondary exit. A drop in depth or persistent imbalance (one side draining without rebalance) signals MM withdrawal; secondary exit becomes harder and the cooldown becomes more binding. Current pool: `0xe41be7b340f7c2eda4da1e99b42ee1b228b526b7`
- **MSTR / BTC drawdown.** STRC sits junior to MSTR's $10B+ in convertible debt. A severe BTC crash would compress MSTR equity and could threaten STRC dividends or par pricing — apxUSD backing degrades and apyUSD yield compresses or pauses
- **apyUSD/apxUSD ratio.** Currently ~34% (apyUSD vault holds ~$103.5M of ~$307M apxUSD supply). A sharp drop in this ratio signals flight from yield-bearing into the stablecoin form (potentially indicating stress); a sharp rise signals yield-chasing into a still-young product
- **Implementation upgrade events.** The 72-hour AccessManager delay is a meaningful safety property, but only useful if you watch for scheduled operations. apyUSD has had one observable upgrade (2026-03-30); future ones should be visible 3 days in advance
- **CCIP bridge configuration changes.** Bridge admin (3-of-6 MAINTAINER Safe) can change rate limits, add chain peers, swap RMN/router, or set the rebalancer instantly with no timelock. Watch for transactions on the four CCIP pool contracts (`0x0F1BAc2e...9f73`, `0xEd23Fc18...f21d`, `0x0e9cA42B...5BB5`, `0x49b577E7...24B2`) if you hold material Base-side exposure. The mass-conservation check (locked-on-ETH = totalSupply-on-Base) is the integrity backstop and was satisfied as of 2026-05-07

## A note on the apxUSD companion

The [apxUSD retail report](/reports/apxusd-retail/) covers the non-yield-bearing sibling. apxUSD has same-day exit options (Curve DEX or USDC settlement) but earns no yield. apyUSD has comparable retail-exit speed via the two-hop DEX route but adds the dividend pass-through; the cooldown becomes binding only at institutional sizing. The two products are structurally linked: apxUSD bears residual collateral risk; apyUSD captures the dividend stream. Holding both does not diversify, since both are claims against the same Apyx + STRC backing.

## A note on Apyx's structure

Apyx is backed by the team behind DeFi Development Corp (DFDV, Nasdaq-listed). DFDV provides reputational accountability at the parent level — publicly traded, SEC-reporting, audited financials. However, Apyx itself appears to be a separate legal entity (geographic restrictions on US/EU/EEA users wouldn't apply if it were simply a DFDV product). For retail holders this matters mainly in a worst-case scenario: if Apyx has a solvency event, claims would route to whichever entity holds the protocol risk, not necessarily DFDV.

Investor lineup is solid (ParaFi, Pantera, Kraken Ventures, Wintermute Ventures, GSR via 2023 seed; $300M valuation strategic round Feb 2026).

---

*This report is based on public Apyx documentation, on-chain reads (verified 2026-05-07), GeckoTerminal pool indexing, and Apyx team correspondence through 2026-05-07. Some information depends on issuer disclosures (custody arrangements, attestations, redemption mechanics) that are not yet independently verified. The week-1 launch NAV trajectory was reconstructed from on-chain Transfer events; Apyx has not publicly explained the source of the donation-pattern inflows during that window. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
