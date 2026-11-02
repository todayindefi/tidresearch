---
asset: "crvUSD"
slug: "crvusd"
aliases: ["crvUSD", "CRVUSD"]
chains: ["eth", "arb", "op", "fraxtal", "bsc", "avax", "fantom"]
category: "stablecoin"
peg_mechanism: "algorithmic"
assessment_type: "full"
date: "2026-03-28"
# ⚠️ BUMPED to 2026-09-10 after a whole-body pass. What was re-read, so the
# next sweep knows what this date does and does not cover:
#   RE-MEASURED ON-CHAIN: crvUSD totalSupply, minter and EIP-1967 slots; all
#   nine ControllerFactory ceilings and total_debt; all fifteen PegKeeper debts;
#   the YieldBasis factory ceiling, residual and idle balance; every PegKeeper
#   and YieldBasis pool's coins() and token balances; both collateral ratios.
#   NOT RE-DERIVABLE IN THIS PASS: the 2,985-hourly-sample peg series behind the
#   Stability rationale is a historical series, not a spot read — the current
#   quote (0.9996) was checked and is consistent, but the distribution was not
#   rebuilt. The ten-plus audit-firm count is carried from Curve's own
#   disclosures and was not independently re-counted.
last_verified: "2026-09-10"
last_revised: "2026-11-02"
peg_mechanism_score: 6.0
backing_score: 5.0
liquidity_score: 8.0
issuer_score: 6.0
overall_score: 5.0
underlying_score: 4.5
structural_score: 5.5
axis_frame: six
issuer: "Curve Finance"
market_cap_approx: 225000000
production: true
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto" data-crvusd-report-layout>

# crvUSD — Risk Report

**Moderate risk · 5.0/10**

Dollar-targeting stablecoin · LLAMMA lending and authorized issuance · Curve DAO

[Live dashboard](https://tidresearch.com/dashboards/?asset=crvusd)

## Summary

crvUSD is Curve's dollar-targeting stablecoin. Borrowers mint it against crypto collateral through LLAMMA, an automated market maker that gradually converts collateral into crvUSD as prices fall. YieldBasis credit facilities, PegKeepers and a DAO-authorized lending operator provide additional issuance routes. These routes have different collateral, accounting and control risks.

The main exposures are concentration in YieldBasis, collateral prices and liquidation performance, and the authorities that can change lending and pricing behavior. Curve's Ethereum emergency wallet requires five of nine signatures. Its permissions include restricted lending-policy and callback replacement and conditional oracle repair without a proxy-level delay. An immutable token does not remove these controls over the surrounding system.

## 1 · Stability — 6.0

crvUSD targets one dollar through borrowing incentives, debt repayment and PegKeeper activity in stablecoin pools. LLAMMA gradually trades a borrower's collateral into crvUSD across price bands during a decline. A recovery can reverse those trades; sufficiently impaired positions can still require hard liquidation. This reduces reliance on a single liquidation threshold but exposes borrowers to trading losses, fees and market conditions while their positions are in the liquidation range.

PegKeepers mint crvUSD into pools when it trades above target and withdraw and burn their existing positions when it trades below target. Their ability to reduce supply therefore depends on outstanding PegKeeper debt. **Zero debt means no existing PegKeeper-issued position to withdraw and burn**, rather than the failure of every peg-support mechanism. The November 2 10:36 UTC source snapshot measured zero aggregate PegKeeper debt. Pool trading, debt repayment and other arbitrage routes remain separate mechanisms.

Historical market observations show a comparatively tight peg: thirty daily last-observation marks from September 16 to October 16 ranged from **$0.998543 to $1.000412**, averaging **$0.999495**. Daily samples do not establish intraday extremes. YieldBasis rebalancing can create correlated demand for, or selling of, crvUSD as BTC and ETH prices move. Earlier near-zero-to-12% rate swings are historical stress evidence, not a measured current rate regime.

The peg is an economic target, not a contractual right for every holder to exchange crvUSD for one dollar. PegKeeper capacity, oracle behavior, borrower repayment and secondary liquidity all matter during stress.

## 2 · Backing — 5.0

Backing depends on the issuance route. LLAMMA loans hold crypto collateral; YieldBasis borrowing is supported by its leveraged pool positions; the Resupply sreUSD lending operator supplies freshly minted crvUSD to a lending vault. PegKeeper issuance has no borrower collateral: the other stablecoins in its trading pools are paired market liquidity, not segregated reserves owed to holders.

Ordinary LlamaLend deposits and scrvUSD savings generally recirculate existing crvUSD. Adding their balances or all downstream borrowing to origin issuance would count the same tokens more than once. ERC-20 supply also includes pre-minted idle allocations. A useful exposure measure must identify deployed debt, minted-but-idle tokens and re-lending separately; neither a token balance nor an authorized ceiling alone measures borrowing.

**Resupply's allocation is executed issuance.** On October 29, vote 1509 minted and deposited an additional **30 million crvUSD**, taking the operator's mint limit and minted amount to **60 million**. At the November 2 10:36 UTC accounting snapshot, the producer attributed approximately **$25.351 million** to deployed borrowing and **$34.649 million** to excluded idle operator supply. The 60 million allocation is not 60 million of borrower debt. This is Resupply's **sreUSD**, distinct from Re Protocol reUSD. [Execution receipt](https://etherscan.io/tx/0x567e9b7264c0a6f8397648482778dd7dce742aecd96745da576f799871abca53), [allocation specification](https://gov.curve.finance/t/raise-lending-limit-of-crvusd-to-the-sreusd-lending-market-to-60m/11187).

The denominator changes the apparent collateral coverage. At that same source snapshot, the deployed-basis collateral ratio was **114.78%**, while the sensitivity counting all operator minting was **96.36%**. The latter adds idle issued tokens as liabilities without equivalent deployed collateral. It identifies an accounting exposure; it is not by itself evidence of realized bad debt or holder insolvency. Neither ratio establishes executable liquidation proceeds or independent realizability of every asset.

The standing assessment also monitors PegKeeper debt as a share of consistently defined supply. Its historical reassessment trigger is a share above 25% for more than five consecutive daily readings. That trigger addresses one component of backing risk; it does not certify the safety of YieldBasis, lending collateral or oracle valuations.

## 3 · Liquidity & Exit — 8.0

Holders normally exit by selling crvUSD on secondary markets. Curve stablecoin pools provide direct routes into dollar stablecoins; YieldBasis cryptopools provide routes through BTC or ETH that require another trade to reach dollars. Repaying a crvUSD debt is a separate use of the token and does not give an ordinary holder a reserve-redemption right.

A September 10 pool-balance review found approximately **$27.16 million** on the stablecoin side of the measured PegKeeper pools and **$144.79 million crvUSD** resident in the measured YieldBasis cryptopools. Those quantities describe different assets and routes, not interchangeable cash depth. YieldBasis debt, resident token balances and pool notionals must not be substituted for each other.

The historical USDC exit ladder supporting the rating was quoted September 12:

| Trade size | Quoted total cost before gas |
|---:|---:|
| $100,000 | 2.7 basis points |
| $1 million | 3.3 basis points |
| $10 million | 16.0 basis points |
| $25 million | approximately 1,078 basis points |

These are dated routed quotes, not current offers or executed fills. Proceeds include routing spread and fees; the router's price-impact field alone is a different measure. A November 2 review still placed its routed 2% total-impact crossing in a coarse **$10 million–$25 million** bracket. The last passing rung does not locate an exact maximum exit size.

Depth can change quickly, especially when BTC/ETH volatility affects YieldBasis and borrowers at the same time. Gas, route availability, stablecoin counterparty risk and fresh minimum-output protection remain relevant. The dashboard supplies changing quote ladders; the historical rating does not guarantee their continued availability.

## 4 · Dependencies — 4.5

crvUSD depends on the collateral assets, their oracles and LLAMMA's trading and liquidation behavior. YieldBasis adds a large shared exposure to BTC/ETH market conditions and leveraged rebalancing. Its recorded debt was approximately **$98.833 million**, or **54.54% of the $181.224 million deployed-basis measure**, at the November 2 10:36 UTC snapshot. This concentration uses deployed debt over deployed supply, not a facility ceiling over raw ERC-20 supply.

The YieldBasis **WETH/crvUSD pool has an attached external pricing policy**. Its deployed reserved-profit fraction is **43%**. The official forum specification says 42.2%; the executed payload and pinned getters support 43%. The policy governs swap pricing, fees and leveraged-token deposit checks. It does not grant direct crvUSD minting authority or establish rollout to every YieldBasis market. [Policy execution](https://etherscan.io/tx/0x81f0fd5865f685a277de75b05f097538a49ab9b695c882b9425983f221a64fc3), [forum specification](https://gov.curve.finance/t/curve-part-of-turning-weth-crvusd-yieldbasis-pool-into-a-permissionless-propamm/11194).

YieldBasis DAO configures this policy and its verifier settings. Its voting mode permits early execution, so a seven-day voting duration is not a guaranteed seven-day update delay. Curve's emergency authority can **kill and revive the policy**. Killing it returns behavior to the pool's native fee/target logic and refuses reports; it is not a frozen-price guarantee. Policy replacement or removal through Curve's AMM owner proxy requires the ordinary DAO route.

Signed Pyth reports add verifier, signer and delivery dependencies. The verifier is upgradeable and its owner can change trusted signers. The ultimate governance threshold and delay behind that owner's contract remain unresolved. The policy treats crvUSD as one dollar rather than independently converting crvUSD/USD, so an authenticated ETH price does not eliminate crvUSD peg risk.

Cross-chain holdings add the relevant native-bridge or LayerZero transport and chain-governance exposure. Earlier bridge reviews retain their original dates. The November child-gauge migration establishes gauge administration, not a refreshed token-bridge audit or complete cross-chain delivery history. Holding crvUSD alongside scrvUSD or leveraged claims backed by it preserves substantial common exposure.

## 5 · Contract & Admin — 5.5

Ethereum crvUSD has no measured token-upgrade surface. Its surrounding factories, policies, oracles and lending operators remain governed contracts. At Ethereum block **26,327,058**, November 2 **12:20:23 UTC**, the ControllerFactory and lending factories used LendingOwnerProxy **`0xeda020b067872717901916a3b8c724c21f6080d1`**; the checked AMM factories used AmmOwnerProxy **`0xeda0108d5bb8cde2ba4a59e22f3ed5d211c77187`**. Their DAO is Curve's Ownership Agent **`0x40907540d8a6c65c637785e8f8b742ae6b0b9968`**. These are immutable forwarding/access-control programs, not token implementation-upgrade proxies.

The Ethereum emergency Safe **`0x467947ee34af926cf1dcac093870f613c96b1e0c`** remains **5-of-9**. Its restricted lending functions have no proxy-level execution delay. They include LLv2 monetary-policy and callback replacement, reducing debt ceilings, zeroing specified exposure limits, pausing deployment and conditional oracle repair. Oracle repair requires the existing oracle to fail bounded probes or return zero and the replacement to return nonzero values. Those checks test availability, not economic correctness. The permitted Chainlink-path toggle can operate in both directions.

Arbitrary `execute` and debt-ceiling increases remain DAO-only. Curve Ownership Voting retains its seven-day execution floor; this is separate from YieldBasis's early-execution voting mode. The DAO or current emergency Safe can revoke the proxy's emergency address. Revocation does not undo earlier calls or revoke the WETH policy's separate emergency authority. The additional permissions mean an unchanged signature threshold does not establish unchanged control risk. [Migration specification](https://gov.curve.finance/t/emergency-dao-proxy-upgrade/11193), [executed migration](https://etherscan.io/tx/0x52b52f633eaef7cb05bdd29b3386b69e3c5f3368be20f3d113e6c21f837ff163).

The separate Resupply mint factory remains owned by the Curve Ownership Agent. Moving the upstream crvUSD factory to a new lending proxy does not transfer that separate ownership. Emergency ceiling reduction alone does not withdraw the operator's deposited balance or change its mint limit.

Current child-gauge bindings were checked on Arbitrum, Optimism, Sonic and Taiko. Their emergency Safes read 5-of-9 with the same owners as Ethereum; common membership does not prove signer independence. Optimism's destination receipt is verified. Exact destination execution chronology for Arbitrum, Sonic and Taiko remains unresolved, and their child-gauge proxies do not inherit the union of Ethereum lending permissions.

The source/runtime review supports the checked proxy restrictions and WETH policy attachment. The migration specification agrees with the restricted lending scope; the policy forum's reserved-profit value differs from deployed state as described above. No complete current audit-to-deployment or bounty-scope mapping for these new privileged surfaces was established. Curve's historical audit disclosures and the July 2023 ecosystem Vyper exploit do not substitute for that check. Safe guards/fallback routes, complete Kernel/Voting upgrade history, all LLv2 oracle economics, other bridge chains and scrvUSD's separate vault authority were not fully refreshed.

## 6 · Issuer — 6.0

Curve is a long-running DeFi protocol governed through veCRV voting. Michael Egorov is a publicly identified founder and also a central figure in YieldBasis. This shared involvement concentrates influence over the protocol and its largest supply dependency; it does not establish wrongdoing or independent decision-making between them.

A public governance grant identifies **Swiss Stake AG**, Switzerland, as a developer and grant recipient. That role does not establish a corporate obligation to repay crvUSD holders. Its registry details, directors and a token-specific repayment obligor were not independently verified in this refresh. The grant's Swiss-law/Zug provisions apply to the grant, not automatically to token-holder claims. [Developer grant](https://gov.curve.finance/t/funding-proposal-for-swiss-stake-ag-grant-proposal-2026/10953).

Token-specific governing law, dispute mechanism, enforceable holder recourse and a current consolidated financial audit remain unestablished here. Public governance records support visibility into decisions, while practical accountability and voter concentration require separate assessment. The issuer rating is carried from the historical assessment, rather than re-derived from a complete current legal and financial review.

## What to watch

- PegKeeper debt and paired stablecoin liquidity, using consistent supply definitions and multi-day observations.
- YieldBasis deployed debt, collateral values, policy/verifier changes and performance during correlated BTC/ETH stress.
- Resupply operator minting, actual borrower debt, idle balances and the liquidity required to unwind them.
- Lending-policy, callback and oracle changes, emergency revocation, and evidence completing cross-chain destination execution.
- Fresh USDC exit quotes at the intended size, including fees, gas and executable route conditions.

## Sources, methodology and review scope

The report combines a historical six-axis assessment with a bounded November 2 authority and issuance review. The source block for current Ethereum controls is **26,327,058 at 12:20:23 UTC**. The accepted source review checked receipts, target events, getter bindings and verified-source runtime correspondence; those RPC investigations were not repeated during website publication. The November 2 financial observations above come from the **10:36 UTC** dashboard snapshot, not the later authority block.

The [dashboard](https://tidresearch.com/dashboards/?asset=crvusd) provides changing balances, rates, allocations and exit quotes. Its generated timestamp is not a substitute for a source observation clock. Historical measurements in this report retain their dates. Deployed and minted accounting bases are presented separately; downstream recirculation and bridge representations are not added as independent origin issuance. Paired PegKeeper debt and stablecoin assets must be included or excluded symmetrically in collateral ratios.

Primary execution evidence is linked in the relevant sections. The accepted October 29 Ethereum executions are vote 1508 at block **26,298,152**, vote 1509 at **26,299,424**, and vote 1510 at **26,300,155**. Vote 1507 was closed and unexecuted. Ethereum message dispatch alone is not proof of destination execution. The current verifier-owner governance and parts of the cross-chain execution history remain open.

**Scores are unchanged**, on a 1–10 scale where higher is safer. Contract & Admin **5.5** is a retained historical rating pending explicit reassessment of the expanded permissions, not a new endorsement. Overall remains **5.0**; it is an authored assessment rather than an arithmetic mean. Full verification remains **September 10, 2026**; the scoped revision date is **November 2, 2026**. The historical audit-firm count was inherited from Curve disclosures and was not independently recounted or bound to every current implementation.

## Revision history

- **2026-11-02:** Incorporated the restricted eDAO migration, attached WETH policy and deployed 43% fraction, executed Resupply mint/deposit and outstanding governance/execution limits. Reorganized the report into the current reader-first format. Scores and full-verification date unchanged.
- **2026-09-12:** Liquidity assessment adopted the dated routed USDC exit ladder; Liquidity 8.0 is retained.
- **2026-09-08–10:** Backing and Overall returned to 5.0 following the multi-day PegKeeper-share review; authority and supply observations were reviewed with the recorded coverage limits.
- **2026-08-23:** Backing and Overall temporarily reduced to 4.5 during the PegKeeper issuance excursion. The historical sequence remains part of the assessment record.

</div>
