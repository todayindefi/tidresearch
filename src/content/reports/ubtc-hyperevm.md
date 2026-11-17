---
asset: Unit Bitcoin (uBTC)
slug: ubtc-hyperevm
aliases:
- UBTC
- uBTC
- Unit Bitcoin
- Hyperunit BTC
chains:
- hyperevm
category: wrapped-token
underlying_assets:
- btc
denomination: BTC
assessment_type: full
axis_frame: six
assessment_status: complete
score_status: assessed
date: '2026-11-17'
last_verified: '2026-11-17'
last_revised: '2026-11-17'
score_assessed: '2026-11-17'
yield_bearing: false
volatility_score: 6.0
backing_score: 4.5
liquidity_score: 5.0
underlying_score: 4.0
structural_score: 3.5
issuer_score: 4.0
overall_score: 4.0
evidence_version: UBTC-BM-six-axis-2026-11-17-v2
selected_evidence_sha256: 84b33f687451bec1b946856697630af3f0ffe20642faa33ec167e3a699ba9c30
assessment_version: ubtc-hyperevm-2026-11-17-v1
production: false
token_address: '0x9FDBdA0A5e284c32744D2f17Ee5c74B284993463'
trust_disclaimer: false
axis_assessment_status:
  volatility_score: assessed
  backing_score: assessed
  liquidity_score: assessed
  underlying_score: assessed
  structural_score: assessed
  issuer_score: assessed
axis_confidence:
  volatility_score: medium
  backing_score: low
  liquidity_score: medium
  underlying_score: medium
  structural_score: medium
  issuer_score: low
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:overflow-x-auto [&_th]:min-w-[7rem] [&_td:not(:first-child)]:whitespace-nowrap" data-evidence-version="UBTC-BM-six-axis-2026-11-17-v2" data-assessment-version="ubtc-hyperevm-2026-11-17-v1">

# Unit Bitcoin (uBTC) — Risk Report

**High risk · 4.0/10**

Bitcoin representation on HyperEVM through Unit and HyperCore.

## Summary

uBTC represents native Bitcoin through Unit custody, HyperCore accounting and a HyperEVM token. It has broadly BTC-relative provider pricing and measured local sale routes. Its safety is constrained by guardian-controlled native custody, unreconciled global reserve/claim coverage, immediate EVM upgrade and transfer-restriction powers, and conditional native-BTC recovery. The evidence does not establish a material current loan loss or confirmed reserve deficit. Confidence is stronger for exact token identity and sampled accounting than for stressed settlement, custody completeness and legal recovery.

This assessment covers HyperEVM chain 999 token **`0x9FDBdA0A5e284c32744D2f17Ee5c74B284993463`**, linked to HyperCore Unit Bitcoin token 197, token ID `0x8f254b963e8468305d409b33aa137c67`. It does not cover similarly named BTC wrappers. The economic reference is **one native BTC**, not one dollar. BTC's dollar volatility is outside the asset tracking score, but remains important to a stablecoin lender's collateral risk. No intrinsic staking or lending yield is established for uBTC itself.

## 1 · Stability — 6.0

A one-off CoinGecko **unit-bitcoin** series, matched to the exact HyperEVM contract, has **721 BTC-denominated observations from October 18 to November 17**. The reported range is **0.99700232–1.00544369 BTC per uBTC**, with median **1.00037922**: approximately −30 to +54 basis points around BTC parity. This supports bounded tracking evidence. It is provider-aggregate history, not an independently executed exact-venue series or a maintained exact-pair history; the maintained comparable-pair count is zero.

A separate exact-contract metadata snapshot, provider-updated **November 17 03:12:52 UTC**, reports approximately **0.99917374 BTC**, while the historical point at **03:16:40 UTC** is about **1.00348 BTC**. Their clocks and provider snapshots differ and are not forced into one current mark. A separate Core observation around **03:17:53 UTC** places the UBTC/USDC mid at 64,666.5 against a BTC oracle reference of 64,723, about −8.73bps **assuming USDC=$1**. The mid is not a sized executable quote, and the stablecoin dollar basis is not independently established by that comparison.

Native redemption can anchor tracking when guardians, custody, access and both settlement layers work. A price series close to BTC does not establish the reserve perimeter or prove that arbitrage will remain available during impairment. [Unit mechanism](https://docs.hyperunit.xyz/architecture/components.md)

## 2 · Backing — 4.5

The documented mechanism places native BTC under a guardian MPC/TSS design and represents the asset on HyperCore, with linked inventory on HyperEVM. Official docs label the Bitcoin treasury **`bc1pdwu79dady576y3fupmm82m3g7p2p9f6hgyeqy0tdg7ztxg7xrayqlkl8j9`** and Core treasury **`0x574bAFCe69d9411f662a433896e74e4F153096FA`**. Labels do not prove legal title, spendability, completeness or freedom from encumbrance. [Published addresses](https://docs.hyperunit.xyz/developers/key-addresses/mainnet.md)

The November 17 observations distinguish the following:

| Measurement | Amount and boundary |
|---|---:|
| Confirmed BTC at the one published Bitcoin address, retrieved around 03:13:38 UTC | 8,627.23951169 BTC |
| Core reported gross token supply | 20,999,999.996730987 UBTC |
| UBTC at the published Core treasury, separately retrieved around 03:13:38 UTC | 20,991,311.622790549 UBTC |
| Conditional Core supply outside that treasury | 8,688.373940438 UBTC |
| Conditional outside-treasury amount less the one BTC balance | 61.134428748 BTC |

The last row is **an unresolved perimeter difference, not a verified reserve shortfall**. Outside one Core treasury is not an independently established liability count; one Bitcoin treasury is not proved to contain all custody assets. Pending operations, deposit addresses, other custody locations and legal/encumbrance boundaries remain unresolved. Cross-chain observations are non-atomic. **Verified global reserve coverage remains unavailable**, without a fabricated ratio or haircut estimate.

At **HyperEVM block 51471964, 03:11:58 UTC**, gross EVM supply is preallocated at 21m UBTC, of which the system address holds 20,999,495.15312352 and other EVM addresses hold 504.84687648. Separately observed Core system inventory is 504.84715628, a 0.00027980 difference across clocks with no cause assigned. EVM claims are already represented through Core system inventory; adding them again would double count. Neither gross supply nor a market-data provider's roughly 504.5 supply figure measures total native-BTC liabilities.

The treasury arithmetic is reproducible, but full custody/claim reconciliation, reserve assurance and encumbrance status are not established. That uncertainty constrains the grade without proving missing BTC. [Bitcoin address data](https://mempool.space/address/bc1pdwu79dady576y3fupmm82m3g7p2p9f6hgyeqy0tdg7ztxg7xrayqlkl8j9)

## 3 · Liquidity & Exit — 5.0

Local HyperEVM sale liquidity and native BTC redemption are different routes. At approximately **03:19:17–03:19:18 UTC on November 17**, isolated chain 999 KyberSwap queries return the following **uBTC→USDT0** quotes, using 8 input and 6 output decimals:

| Input reference size | uBTC input | Quoted USDT0 output | Rate deterioration vs smallest rung, bps |
|---|---:|---:|---:|
| $1,000 | 0.01548494 | 1,002.637207 | 0.00 |
| $10,000 | 0.15484945 | 10,024.355822 | 2.01 |
| $50,000 | 0.77424729 | 50,065.913888 | 13.16 |
| $100,000 | 1.54849459 | 100,067.110789 | 19.61 |
| $1,000,000 | 15.48494592 | 977,069.757459 | 255.01 |

Input reference sizes use a separately observed Kraken BTC/USD midpoint of **$64,578.85**. Outputs are USDT0 units, not verified dollars. The last column compares output-per-uBTC rates within this countertoken; it is **not total BTC/dollar discount or all-in recovery cost**. The $1m rung deteriorates about 2.55% against the smallest rate. Gas, oracle timing, pool state, countertoken basis and execution can change results. No trade or fill occurred; successful samples establish neither a maximum capacity nor stressed liquidation proceeds.

Core's @142 spot book is a separate UBTC/Core-USDC venue. Its 20 bid/ask levels do not automatically become EVM liquidity: Core/EVM movement, system inventory and quote-token conversion must also work. Quotes to the **current Core-linked EVM USDC** returned HTTP400; that is not proof of zero liquidity and does not measure the distinct legacy HyperEVM USDC loan-token route.

Native exit requires **EVM→Core transfer, a Unit withdrawal address tied to the BTC destination, source confirmation, guardian screening/queue/batching, Bitcoin broadcast and finality**. Official docs list a 0.0003 BTC minimum, 2,000 Hyperliquid confirmations, and 3+ Bitcoin confirmations/approximately 30 minutes at the BTC layer. Additional screening, queueing and congestion are excluded; these are not an end-to-end delivery SLA. Current dynamic fees, actual queue state and delivered native proceeds were not measured. [Withdrawal flow](https://docs.hyperunit.xyz/how-to/withdraw.md), [API timing](https://docs.hyperunit.xyz/developers/api.md)

Eligible failed withdrawals have a separate documented mainnet revert process after **73 hours**, with applicable HyperEVM fee/gas; submission does not guarantee recovery. BTC-deposit recovery has different conditions, including 20 confirmations and an unspent output. Ordinary confirmations and recovery eligibility must not be conflated. Screening and legal eligibility can restrict access even when token transfers work. [Recovery rules](https://docs.hyperunit.xyz/how-to/revert/reverting-hyperliquid-withdrawals.md)

## 4 · Dependencies — 4.0

Value passes through **native Bitcoin custody → Unit guardians/processors → HyperCore claims → the Core/EVM system link and inventory → the HyperEVM token**. These layers are required together for native recovery. Selling locally adds venue, intermediate-token and stablecoin dependencies; lending adds the market's own oracle and liquidation path.

Published initial participants are **Unit, Hyperliquid and Infinite Field**, under a documented **2-of-3 MPC/TSS** design. Operator and legal independence, current custody-share roster, enclave software measurements and replacement procedures are not independently verified. Published P-256 keys and a two-signature address-attestation example are a distinct address-integrity mechanism, not proof of the live BTC custody threshold. Hyperliquid participation also creates shared operational reliance across custody services and the chain; three named participants are not three proved independent failure domains. [Security design](https://docs.hyperunit.xyz/architecture/security.md)

Core raw units use 10 wei decimals; EVM uses 8. Decimal conversion and inventory availability matter. Native system addresses must not be classified as ordinary EOA-controlled wallets merely because standard EVM code reads are empty. The token's dependency assessment does not automatically grade every lending market or stablecoin used against it.

## 5 · Contract & Admin — 3.5

The finite control observation is **HyperEVM block 51471770, timestamp 03:08:47 UTC**. The installed implementation **`0x1a7689c3b783eb37550efbb9c81e7f468f7034fc`** matches verified **UnitBitcoin** runtime/source, Solidity 0.8.28. Complete proxy compilation and audited-release/remediation equivalence remain unestablished. Zero proxy-admin and beacon slots do not eliminate UUPS authority. [Verified implementation](https://sourcify.dev/server/v2/contract/999/0x1a7689c3b783eb37550efbb9c81e7f468f7034fc?fields=all)

Current owner and compliance authority are **`0xb4fc973924a91362d301e583e839cdaf4f19cdf8`**, with no EVM code at the pin. `_authorizeUpgrade` is owner-only without a method-level timelock. This identifies the authorized address and immediate code path, not one human or a proved off-chain signing threshold. The native guardian design must not be substituted for the EVM owner's unmeasured key policy.

The compliance authority can blacklist senders without a method-level delay. The current update logic checks **from**, so a restricted address can receive but cannot send normally. Restricting a collateral-holding contract or the system link could prevent liquidation or exit while an oracle continues returning a price. The system address was unrestricted at the pin; a complete all-contract clearance was not performed.

Current implementation ABI has no ordinary public post-initialization mint, burn, wipe or global pause function. Initial preallocation is explicit; an authorized upgrade can change those properties. The official audit FAQ states publication intent, but the bounded review establishes no individual current audit report, exact audited commit/admin review/remediation match, formal verification, test-coverage metric or applicable bounty scope/exclusions. Verified source is useful evidence, not an audit. These assurance gaps do not offset the immediate root path.

## 6 · Issuer — 4.0

Unit provides named operational participants, public procedures and address disclosures, supporting more accountability than an unidentified bridge. The reviewed documents do not establish a registered native-BTC repayment obligor, enforceable reserve segregation, holder insolvency priority or independent custody/title assurance. Hyperliquid association is not a repayment guarantee.

The accessible terms are labeled **November 2024**. They restrict eligible persons/jurisdictions, permit service interruptions and contain warranty/liability limitations and individual-arbitration provisions. Guardian screening may decline consensus. These terms clarify access and recourse limits without proving that all legal remedies are absent. [Terms](https://docs.hyperunit.xyz/legal/terms-of-service), [Compliance](https://docs.hyperunit.xyz/legal/regulatory-compliance)

An October 30 Unit statement describes additional variable screening delays after the Binance incident; current extra-delay length or removal is not verified. A November 5 Unit statement attributes a documentation incident to GitBook and reports its investigation found no Unit infrastructure compromise. Those are dated operator statements, not independent bridge clearance or proof of a BTC loss. Documentation availability on November 17 does not establish a complete clean incident history. [Unit delay statement](https://x.com/unitxyz/status/2116098065262334073), [Unit investigation statement](https://x.com/unitxyz/status/2118217727978488252)

## Lending-collateral implications

The selected public USDT0/uBTC Morpho market is **`0x707dddc200e95dc984feb185abf1321cabec8486dca5a9a96fb5202184106e54`**, singleton `0x68e37de8d93d3496ae143f2e900490f6280c57cd`, loan token `0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb`, LLTV 77%. This is one market illustration, not a whole-vault approval or a claim that every uBTC lending market has these settings.

At **block 51472083, 03:13:55 UTC**, stored supply is **1,191,278.550618 USDT0**, debt **1,001,172.612084**, and supply-minus-debt cash **190,105.938534**, with **84.04% utilization**. Cash is shared, not reserved for an individual vault/holder or guaranteed future withdrawal. Borrower debt uses stored state last updated 02:47:33; interest since then is excluded.

All **170 positive borrower positions reconcile to 100% of native borrow shares**. The largest two borrower addresses account for 59.45% of debt; 38.63% lies in the review bin HF<1.1. Two HF<1 positions owe only 0.008421 USDT0 combined. The lowest material pinned stored-state HF is **1.06905**, approximately 72.03% oracle LTV on 215,431.86 USDT0 debt. A prompt proportional 6.46% collateral-price markdown would bring that position to its liquidation threshold with debt fixed; it is not a current principal-loss forecast. A separately clocked API snapshot reports zero bad debt/realized bad debt, not a lifetime loss guarantee.

The oracle `0xce5b111739b8b6a10fd7e9dd6a1c7df9b653317f` composes RedStone feed IDs **UBTC/USDT**, not a proved generic BTC-only feed. Its pinned output reproduces the getter-based ratio at about 64,692.73 USDT0 per uBTC. However the UBTC feed timestamp is **00:14:35 UTC**, **10,760 seconds** before the pin; the USDT feed timestamp is 03:06:14. `price()` still returned. Permitted age, upstream peg measurement, fallback and pause policies remain unverified; neither the label nor a successful read proves freshness or native recoverability. USDT reference pricing also does not independently prove the USDT0 wrapper's parity.

The deployment-bound liquidation incentive is approximately **1.074114**. The 23% nominal LLTV margin is not a guaranteed recoverable haircut. At 77% starting LTV, a prompt mark-down leaves enough static collateral for full debt plus that incentive only up to roughly **17.29%**, before costs. If an impairment is omitted by the oracle, a healthy position can remain non-liquidatable; for an otherwise liquidatable position, a **6.9% market discount to the unchanged oracle mark** erases the gross incentive before slippage and gas. These are different conditional scenarios, not estimates of current loss. [Morpho liquidation mechanics](https://docs.morpho.org/learn/concepts/blue/liquidation/)

With balances fixed and immediate proportional oracle repricing, a 10% collateral markdown would make about **386,792 USDT0** of debt liquidatable; 20% would make about **888,818 USDT0** liquidatable. These quantities require liquidation, not an assumed haircut to lenders. Actual repayments, price timing, market impact, transfer restrictions and available proceeds determine outcomes. The uBTC custody/control risk can impair that process independently of ordinary BTC-price volatility.

## Assessment and evidence scope

Scores are out of 10; higher means safer. Overall 4.0 is below the 4.5 arithmetic axis mean because custody, immediate controls and conditional recovery are shared loss paths. Confidence is medium for Stability, Liquidity & Exit, Dependencies and Contract & Admin, and low for Backing and Issuer.

[Public assessment and source selection](/evidence/ubtc-2026-11-17/public-assessment-v1.json). Assessment date and full-verification date: November 17, 2026; underlying observations retain their separate clocks.

## Evidence limits and reassessment

Separate financial, control, API, oracle and quote clocks are retained. Native block hashes were rechecked without finality assurance. Some RPC block timestamps run about 14–15 seconds ahead of local retrieval; that skew is not converted into fabricated common observation times. The canonical Unit profile has a November 5 full-family clock and November 17 bounded documentary updates. Older terms/audit coverage are not refreshed by fetching them today.

Reassess on an attributable reserve/claim mismatch after the perimeter is reconciled; material BTC-relative executable discount; native withdrawal halt or unexplained sustained delay; adverse upgrade/owner/compliance change; transfer restriction affecting collateral custody; oracle age or peg-response failure against a verified policy; growing near-threshold debt with insufficient liquidation proceeds; or recognized impairment. Better custody/legal assurance, enforced upgrade delay and demonstrably resilient exits could improve the judgment. No recurring UBTC monitor or new schedule is claimed by this one-off review.

## Revision history

- **2026-11-17:** Created the exact HyperEVM six-axis asset assessment using selected source evidence, canonical Unit documentary refresh, finite Security control evidence and the public lending-market look-through.

</div>
