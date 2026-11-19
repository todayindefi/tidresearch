---
asset: XAUT
slug: xaut
aliases:
- XAUT
- XAUt
- Tether Gold
chains:
- eth
- bnb
category: commodity-backed-token
underlying_assets:
- physical gold
assessment_type: full
date: '2026-06-07'
last_verified: '2026-11-17'
volatility_score: 5.5
liquidity_score: 5.5
structural_score: 4.5
issuer_score: 5.5
overall_score: 5.5
yield_bearing: false
issuer: TG Commodities, S.A. de C.V.
audited_reserves: true
last_revised: '2026-11-17'
score_status: assessed
score_assessed: '2026-11-17'
evidence_version: BM:bm-material-collateral-financial-primary-v3;DA:xaut-usdtb-terms-v1;Security:material-collateral-security-2026-11-17-v2
backing_score: 7.0
underlying_score: 5.5
denomination: XAU
assessment_version: xaut-six-axis-2026-11-17-v1
production: true
trust_disclaimer: false
selected_evidence_sha256: 59ded5db239c15a265bac480c1da9cf68a02027c76d77af52ae6734cb938324f
token_address: '0x68749665ff8d2d112fa859aa293f07a622782f38'
axis_frame: six
assessment_status: complete
axis_assessment_status:
  volatility_score: assessed
  backing_score: assessed
  liquidity_score: assessed
  underlying_score: assessed
  structural_score: assessed
  issuer_score: assessed
chain_overrides:
  bnb:
    volatility_score: null
    backing_score: null
    liquidity_score: null
    underlying_score: null
    structural_score: null
    issuer_score: null
    overall_score: null
unassessed_chains:
- bnb
---

<div class="[overflow-wrap:anywhere] [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_th]:min-w-[8rem] [&_td:not(:first-child)]:whitespace-nowrap" data-selected-report="lending-closure-2026-11-17">

# XAUt — Risk Report

**Moderate risk · 5.5/10**

## Summary

Ethereum XAUt is an issuer-controlled token representing a documented allocated-gold interest. Dated BDO reserve assurance and finite secondary quotes support its backing and tradability. Physical redemption requires approved customers and whole bars; title/enforcement, current custody and complete stressed recovery are not independently established. A source-bound 3-of-6 controller can mint, block, burn blocked balances and upgrade without an established on-chain notice delay. These are current assessed risks, not a finding of missing gold.

## 1 · Stability — 5.5

The reference is **one fine troy ounce of gold**, not one dollar. Gold/USD investment exposure is unscored here; it remains material when a lender accepts XAUt against a dollar debt. No independent contemporaneous gold reference or maintained gold-relative trading history was established, so a current XAUt/XAU premium or discount is **unknown**. This score credits the allocated-gold mechanism while reflecting imperfect arbitrage access and measurement uncertainty; it does not turn gold's historical USD volatility into peg safety.

At November 17 07:25:47–49 UTC, the indicative one-token sale returned **3,860.167613 USDC**. The native reference claim remains one fine ounce; USDC=$1 is a comparison assumption. This is a dated token bid, not an independently measured gold benchmark or proof of parity. No gold/USD return or gold-relative deviation is inferred. Any peg check must compare XAUt/XAU with an independently clocked gold reference, never XAUt against a fixed USD target; that maintained check is not established here.

## 2 · Backing — 7.0

The [September 30 reserve report](https://gold.tether.to/docs/reports/attestations/ISAE_3000R_-_Opinion_TGRR_30.09.2026_RC187322026DV0235.pdf), signed October 30, records **827,417.630 fine troy ounces** against **827,417.630000 minted tokens**, at September 30 11:59 PM UTC. Sold tokens were 709,323.660000; the other 118,093.970000 were available for sale through related Alpha Group Commodities, S.A. de C.V. Unsold minted inventory is not additional gold or a separate holder liability to add twice.

The report describes Swiss-held London Good Delivery gold. BDO performed reasonable assurance under ISAE 3000 (Revised), including inventory existence and sampled quality work within the report criteria. This is meaningful dated evidence, not a continuous reserve guarantee, full IFRS financial statements or independent proof of every holder's legal priority.

At Ethereum block **26,433,254 / November 17 07:24:47 UTC**, native supply was **827,417.63 XAUt**, six decimals, exact token `0x68749665ff8d2d112fa859aa293f07a622782f38`. Numerical equality with September supply does not establish November gold custody or a current reserve ratio. The November 12 issuer announcement of a KPMG FY2025 financial audit concerns December 31, 2025; its full signed opinion was not inspected and is not substituted for current reserve evidence.

## 3 · Liquidity & Exit — 5.5

Ethereum holders can sell XAUt in secondary markets. Primary redemption is a separate, eligible-customer process for whole gold bars, with delivery or dealer-sale conditions. The quoted token sales below measure only the secondary route.

| XAUt input | Gross USDC quote | Provider gas estimate, USD |
|---|---:|---:|
| 1 | 3,860.167613 | 0.23 |
| 10 | 38,600.820456 | 0.28 |
| 100 | 385,291.865045 | 2.39 |

These Ethereum requests completed November 17 07:25:47–49 UTC. Inputs are **token sizes**, not a dollar-size ladder. Outputs are USDC; no actual settlement, firm bid, independent gold reference, two-percent depth or comprehensive approval/exit cost is established. Provider route state may be cached. Gas estimates and USDC/USD parity are not independently guaranteed.

[Issuer terms and fees](https://gold.tether.to/legal/) require verification and eligibility. Direct purchase minimum is 50 tokens; purchase and redemption service charges are 0.25% plus applicable costs, and verification costs 150 USDt. Physical redemption is for a whole London Good Delivery bar, generally requiring 430 tokens adjusted for actual weight/purity. Delivery is in Switzerland, or the issuer attempts a dealer sale. Shipping, dealer costs, delays and legal/compliance restrictions matter. Neither fractional DeFi holdings nor a contract method named redeem gives an unconditional primary cash exit.

## 4 · Dependencies — 5.5

The risk chain is token → issuer allocation records → physical custodian/bar inventory → legal title/enforcement → eligible bar delivery or dealer sale. Secondary realization additionally depends on venues, USDC and Ethereum execution. The reserve report and documentary bar interest improve visibility without making these dependencies independent. An Euler lending receipt adds separate lending liquidity, governance and oracle dependencies; that receipt is not the gold token itself and is not extra reserve backing.

## 5 · Contract & Admin — 4.5

At **Ethereum 26,433,242 / November 17 07:22:23 UTC**, the source review bound runtime records for the proxy, installed TetherToken implementation `0x4c0d2c74a8d26f1e4f5653021c521f5471f9e566`, ProxyAdmin `0x856fcc085290ac1e40392442211e6a333afb873e`, and controller `0xc6cde7c39eb2f0f0095f41570af89efc2c1ea828`.

Token owner and ProxyAdmin owner are the same source-bound **3-of-6 custom MultiSigWallet**. It is not a Safe; failing Safe-specific getters does not erase its quorum. Signer human/key independence is unverified. Confirmation-driven execution has no notice delay established in inspected source.

The owner can mint to arbitrary destinations, block/unblock addresses and destroy a blocked account's balance. Owner-only redeem burns the owner's tokens; it is not permissionless holder redemption for gold. Transfer checks differ between direct and delegated calls, so blocked-recipient immunity is not claimed. The inspected ABI has no global pause method, while blocklist/burn and upgrade powers remain. No independently reproduced audited build, complete incident/role/upgrade history or custody certification is credited from source matching.

## 6 · Issuer — 5.5

Issuer disclosures identify **TG Commodities, S.A. de C.V.**, formerly BVI TG Commodities Limited, redomiciled to El Salvador effective January 27, 2025. USDT entities and redemption rights are not substituted. Terms describe an undivided specific gold interest and changing bar allocations; these are documentary rights, not an independent opinion on liens, insolvency priority, segregation or practical enforcement.

Direct services are subject to customer approval, jurisdictional restrictions and delay/discretion provisions. The issuer's operating history and dated external assurance are positives; they do not supply unrestricted cash redemption, deposit insurance or independent current custody assurance.

## Confidence, coverage and triggers

Financial/source identity confidence is medium within the named pins; current custody/title, gold-relative history and stressed physical/cash recovery confidence is lower. These limits are incorporated into the completed assessment. Ethereum is assessed; the legacy BNB declaration has no accepted exact current evidence and receives no inherited numeric grade.

Reassess on a genuine gold/liability mismatch, adverse assurance opinion, allocation/title or custody dispute, sustained independently measured gold-relative discount, redemption restrictions/failures, controller/quorum/code changes or impaired secondary execution. Gold's dollar decline alone is not a token peg failure, although it can impair dollar lending collateral.

## Sources and clocks

Canonical researched [Tether/xaut context](../../documentary/data/projects/tether.yaml) was checked before judgment. BM material financial-primary v3 binds dated assurance, current native supply, finite quotes, DA terms and approved public control fields; Security's finite supplement supplies detailed source/control scope. These clocks differ. Control header time was about ten seconds ahead of the local receipt; unchanged hash rechecks do not turn this into universal finality assurance.

- [XAUt legal terms and fee schedule](https://gold.tether.to/legal/)
- [September reserve assurance](https://gold.tether.to/docs/reports/attestations/ISAE_3000R_-_Opinion_TGRR_30.09.2026_RC187322026DV0235.pdf)
- [FY2025 audit announcement](https://tether.io/news/tether-gold-xaut-becomes-tethers-second-stablecoin-to-complete-a-big-four-audit/)

## Revision history

2026-11-17: replaced the June light assessment with a completed exact Ethereum six-axis report, denomination XAU, dated reserve evidence, current controls and measured token-size exits. Overall 6.0 → 5.5 reflects fuller risk characterization rather than a confirmed new gold shortfall. Creation date preserved; unverified BNB grades explicitly withheld.

</div>
