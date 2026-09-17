---
asset: "msUSD (Metronome)"
slug: "msusd-metronome"
aliases: ["Metronome Synth USD", "msUSD-Metronome"]
chains: ["eth", "base", "optimism", "plasma"]
category: "stablecoin"
peg_mechanism: "Synthetic stablecoin: CDP issuance plus protocol AMO issuance"
assessment_type: "light"
audience: "retail"
date: "2026-09-17"
last_verified: "2026-09-17"
featured: false
production: false
issuer: "Metronome Synth"
audited_reserves: false
market_cap_approx: 48855271
peg_mechanism_score: 1.0
backing_score: 1.5
liquidity_score: 1.0
issuer_score: 2.0
overall_score: 1.5
axis_frame: six
axis_exemptions:
  - axis: "4 Dependencies"
    reason: "Temporary staging gap: dependency evidence is described but has not yet received a separate canonical score."
  - axis: "5 Contract & Admin"
    reason: "Temporary staging gap: authority evidence is described but has not yet received a separate canonical score."
---

# msUSD (Metronome) — Risk Report

**Very high risk · 1.5/10**

**Category:** Stablecoin | **Peg Mechanism:** CDP issuance plus protocol AMO issuance | **Issuer:** Metronome Synth

## Summary

Metronome msUSD is a synthetic stablecoin intended to track one dollar. Users can create it by borrowing against collateral in Metronome CDPs, while a protocol-controlled automated market operations contract, or AMO, can create msUSD and deploy it through Vesper strategies and decentralized-exchange pools.

The AMO path dominates the asset. On 2026-09-17, only **1.64 million of 51.70 million msUSD**, or **3.17% of supply**, corresponded to msUSD debt in user CDPs. Those CDPs appeared overcollateralized in isolation. The much larger AMO position was a claim on a Vesper vault whose underlying token is msUSD itself, not an external dollar reserve.

Ordinary holders cannot generally redeem msUSD for one dollar or for a fixed amount of USDC. Borrowers can repay their own debt and withdraw their own collateral, but tokens acquired in the market usually exit through decentralized exchanges. This combination of self-referential backing, limited primary redemption and a documented persistent depeg produces the **1.5/10** overall score.

> **Critical identification and peg warning:** this report covers Metronome Synth msUSD at Ethereum address `0xab5eb14c09d416f0ac63661e57edb7aecdb9befa`. It is unrelated to Mainstreet Finance msUSD at `0x4ba01f22827018b4772cd326c7627fb4956a7c00` and to Mento USDm. Resolve it by chain and contract address, never ticker alone. Address-qualified CoinGecko data showed Metronome msUSD at approximately **$0.945 on 2026-09-17**, after a **$0.735–$0.956** 24-hour range. The rebound does not restore a hard redemption right or change the structural assessment.

## Current position — 2026-09-17

| Metric | Value |
|---|---:|
| Total supply, four chains | 51,704,315 msUSD |
| Ethereum supply | 31,811,245 |
| Base supply | 18,951,556 |
| Optimism supply | 906,761 |
| Plasma supply | 34,753 |
| msUSD CDP debt | 1,638,796 |
| CDP-backed share | 3.17% |
| CDP collateral, protocol-oracle value | $10,579,900 |
| Ethereum AMO vamsUSD shares | 31,088,661 |
| vamsUSD price per share | 1.0265208 |
| AMO's msUSD-denominated claim | 31,913,158 msUSD |
| AMO claim / total supply | 61.72% |
| Supply net of AMO claim | 19,791,157 msUSD |
| Direct external assets held by Ethereum AMO | Zero in every probed asset |

These are point-in-time contract readings, not permanent quantities. The gross supply and net-of-AMO views answer different questions and must not be added together as separate liabilities or reserves.

## 1 · Stability — 1.0

msUSD relies on a soft market peg rather than universal redemption at one dollar. CDP borrowers can buy discounted msUSD, repay their own debt and recover collateral valued by the protocol, but this route reaches only the outstanding CDP debt. It does not give every holder a claim on collateral or compel contraction of the much larger AMO-issued float.

The first verified material peg failure began in July 2026. Address-qualified observations placed msUSD near **$0.976 on July 30**, **$0.803 on July 31**, and approximately **$0.705 by August 16**, after more than two weeks in roughly a **$0.68–$0.73** range. Supply later expanded again rather than contracting cleanly enough to restore par.

The often-repeated October 2025 and June 2026 depeg claims do not belong to this asset's history. The October readings were bad-tick metadata rather than a sustained market move, while the June event was a ticker conflation with Mainstreet Finance msUSD.

**Risks and limitations.** Address-qualified CoinGecko data showed a sharp rebound to approximately **$0.945 on 2026-09-17**, but also a 24-hour low near **$0.735**. A higher spot price is not the same as a restored peg mechanism. There remains no general hard redemption route capable of converting all circulating msUSD into one dollar of external assets.

## 2 · Backing — 1.5

msUSD has two issuance paths. Users deposit collateral into Metronome pools and borrow through overcollateralized CDPs. Separately, a protocol-controlled AMO can create msUSD and deploy it through Vesper vaults and liquidity positions. On Ethereum, `maxAmoSupply()` equals the entire **35 million** `maxTotalSupply()` ceiling, so the AMO is authorized to account for the chain's full issuance limit.

The backing should be read in four distinct categories:

- **External CDP collateral:** approximately **$10.58 million** of protocol-oracle collateral supported **1.64 million msUSD** of CDP debt. This layer appeared overcollateralized in isolation.
- **AMO-held vamsUSD:** the Ethereum AMO held **31,088,661 vamsUSD shares**, representing a **31,913,158 msUSD-denominated claim**. The vault's `token()` is msUSD, making the claim self-referential rather than an external dollar reserve.
- **Direct external AMO reserves:** the AMO held zero of every probed external asset, including USDC, USDT, DAI, WETH, frxUSD and crvUSD.
- **Assets paired in DEX pools:** non-msUSD assets in liquidity pools can fund market exits, but holders have no guaranteed claim on them and pool composition changes as selling occurs.

On the gross view, only **3.17%** of total supply corresponded to msUSD CDP debt. On a net view, subtracting the AMO's msUSD-denominated vault claim left **19.79 million msUSD**. The net view can help distinguish protocol-positioned supply from other holdings, but it does not create external reserves or a contractual one-dollar redemption right.

**Risks and limitations.** The soundness of the residual CDP book does not extend automatically to all msUSD. The dominant AMO asset is a claim denominated in the same token being assessed, and direct external AMO reserves measured zero. Gross and net-of-AMO figures therefore describe the structure without establishing full dollar backing under stress.

## 3 · Liquidity & Exit — 1.0

An ordinary holder exits primarily by selling msUSD through decentralized exchanges. Borrowers can repay their own CDP debt and withdraw collateral, but that facility is not a general redemption route for tokens purchased from another holder. There is no atomic USDC or dollar redemption for the AMO-issued portion of supply.

Liquidity pools contain both msUSD and other assets. Only the non-msUSD side provides genuine dollar-exit capacity, and that capacity falls as sellers withdraw it. Nominal pool TVL therefore overstates what all holders could realize. Pools pairing msUSD with another Metronome synth also transfer exposure between synthetic assets rather than providing an external dollar exit.

The July–August 2026 run demonstrated the limitation. The market price fell well below par and available pools could not absorb selling near one dollar. Current executable quotes and pool composition can change quickly, so they are not frozen into this report as durable figures.

**Risks and limitations.** Exit remains dependent on the depth and composition of DEX liquidity at the moment of sale. A spot-price recovery can coexist with poor execution for larger orders. Before trading, holders should obtain current **$10,000, $100,000 and $1 million** sell quotes and inspect how much genuine non-msUSD inventory remains in each route.

## 4 · Dependencies — Not separately scored

msUSD depends on the collateral assets and protocol oracles used by its CDPs, Vesper's vamsUSD vault and strategies, decentralized exchanges, and the cross-chain LayerZero ProxyOFT infrastructure. The AMO position can pass through Vesper vault accounting, Curve liquidity and Convex or Yearn staking before it appears as a claim held by the protocol.

This creates correlated operational risk. A Vesper or liquidity-venue problem can affect both the protocol's main AMO asset and the market exit available to holders. Cross-chain supply also depends on bridge authority and correct accounting across Ethereum, Base, Optimism and Plasma.

**Risks and limitations.** This axis remains temporarily unscored on staging because the supplied canonical assessment did not provide a distinct dependency score. The dependencies are economically important and require a separate scoring pass before production review.

## 5 · Contract & Admin — Not separately scored

Metronome uses 3-of-5 Safe control across its deployments. The Ethereum and layer-2 Safe addresses differ, but the assessed signer set and threshold were the same. Governors control proxy administration and can rotate the AMO and bridge or mint-authority addresses.

There is no timelock. Once the required Safe signatures are collected, an administrative action can execute without a public delay or independent veto window. Plasma is particularly unusual: it had live token supply but zero registered pools, and its `masterOracle()` pointed to the dead address. The governor Safe also held the AMO role directly there.

Audit coverage does not match the current system. The available audits date from 2022–2023 and do not cover the AMO, the later LayerZero integration, the Plasma deployment or the subsequent Ethereum implementation upgrade. Public code and governance communications have also lagged the deployed structure.

**Risks and limitations.** A compromised or malicious 3-of-5 signer majority could change upgrade, AMO and minting-related authority without advance notice. No evidence indicates that the 2026 depeg resulted from an exploit, signer compromise or administrator theft; the observed failure was structural. This axis remains temporarily unscored on staging pending a separate canonical contract-and-admin assessment.

## 6 · Issuer — 2.0

Metronome Synth operates the governance and AMO structure behind msUSD. Administration uses real multisignature control rather than a single externally owned account, and the on-chain system exposes enough state to reconstruct supply, CDP debt, collateral and AMO positions.

The issuer can nevertheless make consequential changes quickly. The 3-of-5 Safes have no timelock, governors can rotate AMO and bridge or mint authority, and the public audit record does not cover several important additions to the current architecture. Public documentation does not give retail holders a clear reserve reconciliation or a general redemption commitment.

**Risks and limitations.** Communications and public code have lagged the system's deployed structure, and the assessed record contained no adequate public explanation of the 2026 depeg or the AMO balance sheet. The absence of evidence of theft does not make the failure benign: holders still bore the market loss while supply and protocol-controlled positions remained difficult to interpret without direct contract reconstruction.

## Who this is for

- Specialists treating msUSD as a distressed, thin-liquidity synthetic position rather than cash.
- Users able to verify the correct contract, reconstruct current backing and obtain executable quotes before every trade.

## Who should avoid it

- Anyone seeking cash-like savings or dependable preservation of one dollar.
- Anyone who needs a general primary redemption route.
- Anyone unable to tolerate another prolonged depeg or sharply worse execution at size.

## What to watch

- Market price and the duration of any move below one dollar.
- Total supply on Ethereum, Base, Optimism and Plasma.
- CDP debt and the CDP-backed share of total supply.
- The AMO's vamsUSD balance, price per share and share of total msUSD supply.
- Any direct USDC, USDT, DAI, WETH, frxUSD or crvUSD reserves appearing in the AMO.
- Genuine non-msUSD exit assets and executable $10,000, $100,000 and $1 million sell quotes.
- Pool imbalance and depletion of paired external assets.
- Changes to implementations, the AMO, issuance ceilings, oracles or PoolRegistry contracts.
- Plasma remaining live with token supply, no registered pools and a dead oracle address.

## Revision history

*2026-09-17 — first staged publication. Supply, CDP debt, protocol-oracle collateral and the Ethereum AMO position re-read across the four declared chains. Current market price checked by Ethereum contract address. Dependencies and Contract & Admin remain explicitly unscored pending separate canonical assessments; no substitute scores were inferred.*
