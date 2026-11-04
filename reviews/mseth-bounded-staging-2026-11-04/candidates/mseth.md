---
asset: "msETH"
slug: "mseth"
aliases: ["msETH", "MSETH", "Metronome Synth ETH"]
chains: ["eth"]
category: "wrapped-token"
assessment_type: "light"
date: "2026-03-27"
last_verified: "2026-04-09"
last_revised: "2026-11-04"
production: false
issuer: "Metronome Synth"
yield_bearing: false
volatility_score: 2.5
liquidity_score: 3.5
structural_score: 4.0
redemption_score: 2.0
overall_score: 2.5
---

# msETH — Risk Report

**High risk · 2.5/10 · Provisional, Ethereum only**

## Summary

msETH is Metronome’s ETH-referencing synthetic liability. Holders can seek a market sale into WETH or a conditional synth swap into msUSD. Neither route provides an unconditional right to native ETH. The asset trades materially below its nominal ETH reference, while the net backing and recovery position remain unresolved.

The bounded assessment covers Ethereum [msETH](https://etherscan.io/token/0x64351fC9810aDAd17A690E4e1717Df5e7e085160). Other-chain asset deployments are unassessed. The four displayed scores are provisional judgments; no separate Backing, Dependencies or Issuer grades have been authored.

## Stability — 2.5

msETH references ETH, but its market conversion depends on available demand and confidence in recovery. November 4 quotes returned about 0.875 WETH for one msETH at the sampled small sizes, substantially below a nominal one-for-one ETH value. That market discount does not measure a collateral-loss percentage.

Saved producer history through November 4 at 02:25:33 UTC reported 0.875487 ETH per msETH. All 720 retained thirty-day observations were more than 10% below ETH, with an 11.7255% mean discount. Upstream market timestamps are absent, so producer write times do not establish mark freshness, repeated observations are not independent trades, and comparison with the later quotes does not establish a trend.

Metronome’s [July 30 postmortem](https://paragraph.com/@metronomedao/post-mortem-msethmsusd-underbacking) acknowledged historical underbacking and attributed it to swap/oracle-latency arbitrage. Its [September 16 recovery update](https://paragraph.com/@metronomedao/metronome-recovery-update) claimed restoration through buybacks, treasury loops and borrowing. These are first-party accounts. Current net external circulation, financing, encumbrance and AMO exclusions remain unreconciled; gross supply minus registered borrower debt is not an established shortfall. Neither restored solvency nor current insolvency is established.

## Liquidity — 3.5

The sampled secondary exit converts msETH into WETH. Exact-token route estimates from the existing quote producer were captured November 4 at 03:38:31–36 UTC, reporting pool block 26,338,803 and the same Curve pool. These were sequential indicative quotes, without fills or execution simulations.

<div role="region" aria-label="Dated msETH quote table" tabindex="0" style="max-width:100%;overflow-x:auto;">

| msETH input | WETH quoted out | Discount to nominal ETH | Added average-rate impact |
|---:|---:|---:|---:|
| 0.1 | 0.087500699960480434 | 1,249.93 bps | 0 bps |
| 1 | 0.874794249806015002 | 1,252.06 bps | 2.43 bps |
| 10 | 8.726323587273574087 | 1,273.68 bps | 27.14 bps |

</div>

The ETH discount uses nominal one-for-one ETH as its reference. Added impact measures deterioration from the small-trade average rate; it does not include that starting discount. These measures use different denominators and must not be added as equivalent costs.

The three estimates do not establish a maximum capacity or depth crossing. Provider-estimated gas of approximately 0.000015874 ETH is separate from output. Minimum-out and expiry were unavailable; approval/unwrap costs, actual inclusion costs and independently itemized AMM fees were unmeasured. Provider timestamps led local receipt by 2.4–3 seconds. A later transaction requires a fresh quote and execution checks.

## Contract & Admin — 4.0

The bounded November 4 review matched Ethereum core and fee implementation runtimes to the pinned [official source artifacts](https://github.com/autonomoussoftware/metronome-synth-public/tree/1852ce00751499beccf302d324687be3ad9bd27f). The nominal governor is a 3-of-5 Safe, with direct upgrade, administrator-replacement, oracle-pointer, fee, cap, swap, shutdown and trusted-remote powers. Positive and unrelated-sender negative simulations corroborated the tested permissions. No separate minimum wait or independent cancellation was identified on those paths.

The measured governors on Ethereum, OP, Base, Hemi and Plasma share the same owner-address set. These remote controls do not provide signer diversification or establish independent human operators. The remote authority findings do not assign asset scores to those chains.

Generalized burn capability is deployed and was exercised in a positive read-only holder simulation. Executed recovery burns and their economic effect remain unknown. Runtime identity is not a full vulnerability audit. Inner oracle sources/freshness, complete bridge receive-library configuration, Plasma pool/debt coverage and Swell remain unresolved. An outbound bridge flag or pool pause does not establish that inbound minting has stopped.

## Redemption — 2.0

The measured primary conversion is a synth swap into msUSD. At Ethereum block **26,338,813**, November 4 at **03:39:11 UTC**, funded-holder read-only simulations of 0.01, 1 and 10 msETH into msUSD succeeded, while an unfunded control rejected. The measured fee was **10% in both synth-swap directions**. No transaction was signed or sent.

The September statement that synth swaps would remain closed indefinitely is historical. The November simulations establish conditional callability at the observed state, without establishing a reopening date. They do not provide native ETH redemption, an actual fill or a universal holder claim. msUSD value and disposal are additional exit risks. Borrower repayment and collateral-withdrawal rights do not transfer to an arbitrary msETH buyer.

## Evidence, score scope and remaining work

The legacy light rubric preserves **Stability 2.5, Liquidity 3.5, Contract & Admin 4.0, Redemption 2.0 and Overall 2.5**. Redemption remains a separate displayed axis; it is not averaged into or substituted for Liquidity. Overall is an authored synthesis below the four-axis mean of 3.0 because impaired ETH-reference support and primary holder-right weaknesses compound. Missing backing evidence is not zero backing.

The original whole-verification date remains **April 9, 2026**. November 4 is a bounded financial, quote and deployed-control assessment, not a complete financial or security certification. The source clocks remain separate:

- Supply/debt observation: Ethereum block 26,338,807, **03:37:59 UTC**.
- Indicative DEX quotes: **03:38:31–36 UTC**, provider pool block 26,338,803; provider/local clock difference noted above.
- Authority and funded synth-swap simulations: Ethereum block 26,338,813, **03:39:11 UTC**.

The assessment applies only to the identified Ethereum token. OP, Base, Hemi and Plasma are unassessed as assets; Swell remains a lead. Remaining work includes net external backing/circulation, treasury financing and encumbrance, AMO exclusions, executed burn history, broader exit/settlement evidence and the oracle/bridge boundaries. USG’s msETH-linked collateral exposure needs its own debt, oracle and exit analysis; no USG score change follows automatically.

## Revision history

- **2026-11-04 — bounded staging candidate.** Adopted the authored provisional Ethereum assessment and dated producer evidence. Retained the April 9 whole-verification clock and the separate legacy Redemption axis.
