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
last_revised: "2026-10-10"
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

stETH is Lido's rebasing receipt for staked ETH. Its token balance grows as validator rewards accrue, while [wstETH](/reports/wsteth/) wraps the same claim into a fixed-balance token whose exchange rate rises instead. They share the same underlying Lido, validator and withdrawal risks; the separate wstETH report covers wrapper mechanics, DeFi use and chain-specific bridge arrangements. This page stays focused on the underlying Ethereum claim.

Direct reads on 2026-10-10 showed **9,685,990.16 ETH pooled**, of which **99.904% was beacon-chain balance**. The withdrawal queue was active, bunker mode was off, and the liquid buffer covered the live queue **1.007×** at that moment. That last figure is a snapshot rather than a promised floor: a larger withdrawal wave can still require validator exits.

The six-axis composite is **8.0**, slightly below its 8.08 axis mean. The principal constraint is not the operator distribution, which is broad inside the measured Curated Module; it is that every stETH remains a claim on one protocol and one DAO.

## 1 · Stability — 9.0

stETH targets the value of ETH plus accrued staking rewards, not one US dollar. Since Ethereum withdrawals became available, secondary-market deviations have generally been tight, but the fast market exit can still detach from the underlying claim during forced selling or a congested validator-exit queue. The 2022 discount reached roughly 5–6% before withdrawals existed; that history is the reason this is not treated as a hard peg.

The score is shared with Ethereum wstETH because wrapping changes how rewards appear, not the underlying economic claim. The remaining measurement caveat is that TIDR's long peg-history series is keyed to wstETH rather than stETH itself.

## 2 · Backing — 9.0

The backing path is unusually direct: stETH represents ETH controlled through Lido's staking system, with no off-chain custodian or reserve attestation between the holder and the observable stake.

At Ethereum block **26,155,953**:

| Component | ETH | Share of pooled ETH |
|---|---:|---:|
| Beacon balance | 9,676,652.7052 | **99.904%** |
| Buffered ETH | 2,464.3990 | 0.0254% |
| Withdrawal vault | 343.4984 | 0.0035% |
| Execution-layer rewards vault | 3.9689 | 0.00004% |

⚠️ **`totalSupply()` equalling `getTotalPooledEther()` is an accounting identity, not independent proof of coverage.** stETH rebases supply to pooled ether by construction. The useful evidence is the underlying composition and system state.

The measured components did not fully reconcile to pooled ether: buffered ETH plus beacon balance left **6,873.05 ETH, or 0.0710%, unexplained**; adding the two vault balances reduced the residual to 0.0674%. Oracle timing is a plausible explanation but was not tested, so this report does not assign a cause. The residual is too small to move the score, but a rise above roughly 0.5% would require a fresh derivation.

This residual must not be described as Lido's previously cited “6,750 stETH disruption reserve.” The Locator-resolved DAO treasury held **22,735.5123 stETH**, which does not verify a separately designated 6,750-stETH reserve.

## 3 · Liquidity & Exit — 9.0

stETH has two exits. The fast route is the secondary market, where it is the dominant ETH liquid-staking token with deep DEX and centralized-exchange access. The primary route is permissionless: submit stETH to Lido's withdrawal queue and receive ETH once liquidity or validator exits are available. There is no KYC gate or institutional-only path.

At the 2026-10-10 read, buffered ETH of **2,464.3990** covered **2,447.6222 stETH** in the live queue, across 37 open requests. The queue was not paused and bunker mode—the mass-slashing state that can halt normal finalization—was inactive. This does not guarantee a one-day exit under stress; queue time ultimately depends on Ethereum's validator-exit capacity.

### Redemption — 8.5 (supplemental, folded into Liquidity & Exit)

Direct redemption is open and structurally strong, but it is asynchronous. Typical waits have been roughly 1–5 days in normal conditions and can lengthen materially when many validators are leaving. That congestion-dependent leg, rather than access control, is what caps the supplemental score.

## 4 · Dependencies — 6.0

stETH depends on Lido's staking modules and node operators before it reaches Ethereum itself. A 2026-10-09 walk of the Curated Module found **39 operators**, 35 active and four fully exited, with **212,918 live validators**. Within that measured module, the largest operator held **3.72%**, the top ten 37.20%, and the HHI was **345**—a broadly distributed set rather than a dominant operator.

That measurement does not cover the Community Staking Module or Simple DVT, and it does not establish what percentage of all Lido stake sits in the Curated Module. Those modules use separate registries. The score therefore rests on what was established—the broad spread inside the Curated Module—without inventing a whole-protocol denominator.

⚠️ **The real concentration is Lido itself.** Operators can be replaced and have exited without holder action, but a stETH holder cannot substitute another protocol while keeping the same claim. The asset is diversified beneath one non-substitutable protocol counterparty.

## 5 · Contract & Admin — 8.0

Lido routes governance through an EmergencyProtectedTimelock and Dual Governance. Verified on-chain in the underlying analysis, the system was in its normal state with emergency mode inactive. The governance path includes delayed execution, while stETH holders can block motions through veto signalling and, at higher participation, pause governance until objecting holders exit through rage quit.

Those protections are materially stronger than a bare multisig or ordinary timelock. The score remains 8.0 because the system is DAO-upgradeable, Lido's scale makes its governance systemically important, and its Curated Module v2 validator migration remains in progress. The staged wstETH report uses the same Ethereum score; any future 8.5 re-rating should be made across both pages rather than allowing the shared governance layer to diverge.

## 6 · Issuer — 7.0

Lido DAO has operated the largest liquid-staking protocol since 2020 without a loss of principal from the core staking contracts. Governance votes and operator incident disclosures are public, and the protocol has demonstrated that an operator can exit without gaining access to holder principal because withdrawal credentials point to the protocol rather than the operator.

The limit is institutional accountability: there is no single licensed issuer with audited financials or conventional legal recourse. Accountability is reputational and token-weighted. Dual Governance is not credited again here because its holder protections are already priced under Contract & Admin.

## Who this is for

- ETH holders who want staking exposure with the category's deepest secondary liquidity.
- DeFi users who need the rebasing form rather than the fixed-balance wstETH wrapper.
- Holders comfortable with an asynchronous primary exit and a single-protocol dependency.

## Who should avoid

- Anyone requiring guaranteed same-day conversion to ETH at full value.
- Anyone unwilling to accept validator slashing, oracle-reporting and DAO-governance risk.
- Anyone who needs a conventional legal issuer or direct claim against an identifiable company.

## What to watch

- **The withdrawal queue and bunker-mode flag.** A growing queue alongside bunker mode would change the exit analysis.
- **The 0.0710% reconciliation residual.** A move above roughly 0.5%, or evidence that it is not timing-related, reopens Backing.
- **Curated Module v2 migration.** Execution risk remains until the legacy module is fully wound down.
- **Per-module stake distribution.** StakingRouter summaries are needed before claiming what share of Lido stake the measured Curated Module represents.
- **Operator incidents and realized slashing.** Disclosure volume alone is not evidence that incidents are increasing.

## Related

- [wstETH](/reports/wsteth/) — the fixed-balance wrapper, including DeFi use and Monad-specific bridge and administration risk

---

*This staged companion report is based on Lido documentation and direct Ethereum reads preserved in the internal stETH assessment, including backing composition at block 26,155,953 and the Curated Module operator walk on 2026-10-09. `last_verified` remains 2026-08-13 because the October work was targeted axis authoring rather than a complete reread of every inherited claim. Corrections or additional primary evidence are welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-10 — first staged publication; Overall 8.0.** Added the compact canonical-underlying companion to the full wstETH report. Backing 9.0 records 99.904% beacon balance, a liquid buffer covering the live queue 1.007× and an unexplained 0.0710% residual. Dependencies 6.0 records 39 Curated Module operators, top-one share 3.72% and HHI 345, while naming Lido itself as the binding concentration. The unsupported 6,750-stETH reserve claim is not retained.
