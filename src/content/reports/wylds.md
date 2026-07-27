---
asset: "wYLDS"
slug: "wylds"
aliases: ["wYLDS", "Wrapped YLDS", "Hastra Wrapped YLDS"]
chains: ["solana", "ethereum"]
category: "wrapped-token"
assessment_type: "light"
audience: "retail"
date: "2026-07-24"
last_verified: "2026-07-27"
featured: false
production: true
yield_bearing: true
underlying_assets: ["YLDS"]
issuer: "Hastra (wrapper) / Figure Certificate Company (backing)"
market_cap_approx: 459000000
volatility_score: 7.0
liquidity_score: 4.0
structural_score: 6.0
redemption_score: 6.5
underlying_score: 7.5
overall_score: 6.0
companion_report: "hastra-prime"
---

# wYLDS — Risk Report
**Lower-to-moderate risk · 6.0 / 10**
*Wrapped token · Ethereum + Solana · Issuer: Hastra (Signum Ltd.), backed by Figure's YLDS · ~$459M · verified 2026-07-27*

## Summary

wYLDS is Hastra's 1:1 wrapper of YLDS, Figure Certificate Company's SEC-registered, Treasury-backed yield product. Retail users mint wYLDS with USDC without KYC; Hastra buys and holds YLDS. Yield of roughly 3.27% is paid as extra wYLDS tokens, so its price targets about $1. It is also the layer [Hastra PRIME](/reports/hastra-prime) returns when a holder unstakes.

Independent public-chain reads confirm that the backing exists. Roughly $479M of YLDS was visible against about $460M of wYLDS, consistent with a fully backed wrapper. That is the most important positive: this re-score does not mean the YLDS is missing.

The reserve is less tidy than the proof-of-reserves headline suggests. Most YLDS was found in two Figure operational accounts, including a warehouse account holding tokenized loan assets, rather than in a clearly ring-fenced wYLDS reserve. An outside reader can verify the balances but must trust Hastra's mapping of those balances to wYLDS. Ethereum is also now the majority deployment—about 292.7M wYLDS versus 166.9M on Solana—while nearly all Solana wYLDS is locked inside PRIME. wYLDS is therefore a staking substrate with a thin standalone market, not a broadly liquid Treasury token.

## At a glance

| | |
|---|---|
| **Backing** | YLDS reserves exist on Provenance and exceed wYLDS roughly 1:1, but are co-mingled in Figure operational accounts rather than demonstrably segregated. |
| **How to redeem** | Request wYLDS→USDC and wait for Hastra to sell YLDS, or use a thin Solana DEX. Recent requests cleared 1:1 with a median near 49 minutes. |
| **Liquidity** | Thin standalone DEX market. About 98.4% of Solana wYLDS was locked in PRIME, leaving roughly 2.67M unstaked. |
| **Yield** | About 3.27%, paid monthly as additional tokens from the underlying YLDS return. |
| **Admin & custody** | Hastra runs redemption and retains freeze controls; Figure manages the YLDS reserve relationship. |
| **Regulated?** | YLDS/Figure is SEC-registered. Hastra and wYLDS are not, so retail recourse still runs through the wrapper operator. |
| **Biggest risk** | No clean reserve segregation and essentially no ready USDC redemption buffer. |

## Risk by axis

**Underlying — 7.5.** YLDS is a face-amount certificate backed by short-dated US Treasuries and repo, managed by a registered investment adviser and custodied at UMB Bank. Public Provenance balances show enough YLDS to cover wYLDS. This remains the strongest layer, though wYLDS holders do not directly own or redeem YLDS and the reserve's bankruptcy-remoteness is unproven.

**Volatility — 7.0.** wYLDS targets $1 and distributes yield as more tokens rather than through price appreciation. It has generally held close to par, with the realistic 2–3% drawdowns attributable mainly to thin markets. That is strong price behavior, but not deep-liquidity stablecoin behavior.

**Liquidity — 4.0.** The weak axis. Standalone DEX volume has been roughly $27K–$80K a day, and independent Solana reads found about 164.26M of 166.93M wYLDS locked in PRIME—around 98.4%. The genuine unstaked Solana float was only about 2.67M. A primary redemption helps in calm markets, but there is no deep trustless market exit for size.

**Structural — 6.0.** The vault is open-source and has two audits: [Informal Systems](https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf) found and fixed a critical issue, and [Sherlock](https://hastra.io/sherlock-hastra-audit.pdf) later reported no critical or high findings across both chains. The negative is reserve architecture. Hastra's [proof-of-reserves](https://hastra.io/proof-of-reserves) “pool” labels do not map cleanly to the accounts holding most YLDS; the backing is co-mingled with Figure's operational loan assets, so segregation and the wYLDS claim cannot be proven from balances alone. Ethereum now holds most supply, increasing the weight of multichain implementation risk, while issuer freeze and mint controls remain.

**Redemption — 6.5.** Minting is instant and permissionless. The reverse path is admin-mediated: a user requests USDC, then Hastra sells YLDS off-chain and fulfills the request. An eight-day sample showed about six redemptions a day, 1:1 to the cent, with a median near 49 minutes—good evidence that the process works normally. But the redeem vault held only about $0.05 USDC. There is no standing liquid buffer for a rush, and off-hours or stressed requests depend entirely on Figure-market liquidity and a single fulfiller.

## Bottom line

wYLDS is fully backed on the numbers we can independently read, and normal redemptions have worked quickly. It scores 6.0 because “backed” is not the same as “segregated and liquid”: most reserves sit in Figure operating accounts, the instant USDC buffer is effectively zero, and secondary depth is thin. It can fit holders comfortable with an operator-run Treasury wrapper. It does not offer direct regulated recourse, deep instant liquidity, or a stress-proven redemption reserve.

Figure's own HELOC quality figures also deserve measured treatment. Reported LTV, FICO and loss metrics are consistent with independently rated FIGRE Trust securitizations, but the warehouse loan tape is not public. Figure's loans-held-for-sale delinquency rose from 3.91% to 5.46% year over year in SEC filings, while a separate, contested DefiLlama dispute over Figure's claimed on-chain scale reinforces the case for treating issuer metrics as claims unless independently reproducible.

**Watch items:** reserve segregation and legal claim; standing USDC and redemption-queue growth; Ethereum/Solana supply reconciliation; post-incentive liquidity; and third-party credit reporting.

*This report uses public documentation, market data, two published audits, and independent Solana, Ethereum, and Provenance reads. YLDS is folded in as wYLDS's backing. Corrections welcome to info@tidresearch.com.*

*Revision history: 2026-07-25 — published at 6.5, replacing the standalone YLDS report. 2026-07-27 — independent on-chain verification: backing confirmed 1:1, but reserve found co-mingled rather than segregated, liquid redemption buffer approximately nil, Ethereum now the majority deployment, and adverse independent Figure signals surfaced; structural 6.5 → 6.0, overall 6.5 → 6.0.*
