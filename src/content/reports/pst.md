---
asset: "PST"
slug: "pst"
aliases: ["PST", "PayFi Strategy Token", "Huma PST"]
chains: ["ethereum", "solana", "arc"]
category: "vault-share"
underlying_assets: ["cross-border payment receivables", "licensed payment institution credit lines", "market-neutral liquid assets"]
yield_bearing: true
assessment_type: "full"
date: "2026-10-13"
last_verified: "2026-10-13"
featured: false
production: false
issuer: "Huma Global Ltd. (BVI); Arf Financial GmbH and Arf Capital Ltd. originate credit under common parent 00 Holdings Inc."
market_cap_approx: 651150000
axis_frame: six
volatility_score: 5.0
backing_score: 4.0
liquidity_score: 6.0
underlying_score: 3.0
structural_score: 5.0
issuer_score: 5.0
# Retained for the vault-share schema but folded into Liquidity & Exit under the
# six-axis frame. The public row is liquidity_score, judged across both exits.
redemption_score: 6.0
chain_overrides:
  ethereum:
    structural_score: 6.0
  arc:
    structural_score: 6.0
  solana:
    structural_score: 3.0
    overall_score: 4.0
overall_score: 4.5
---

# PST — Risk Report

**Moderate-to-elevated risk · 4.5/10**

> **PST is a NAV-accruing private-credit token, not a $1 stablecoin.** Its $1.138619 exchange-rate reading on 2026-10-12 was neither a premium nor a depeg. The relevant question is whether market prices track a credible NAV—not whether PST trades at par.

| What it earns | Backing | Exit methods | Asset tenor | Chains |
|---|---|---|---|---|
| Interest on payment-finance credit | Short-duration receivables plus a roughly 10–20% liquid sleeve | Huma redemption queue or thin secondary venues | Mostly 1–5 days, rolling | Ethereum, Solana, Arc |

## Summary

PST is Huma Finance's yield-bearing claim on credit lines used by licensed cross-border payment institutions to pre-fund settlement. Its strongest features are very short asset tenors, an open redemption route that reportedly usually settles within one business day, mature Chainlink infrastructure, and a multi-year operating record. Its central weakness is not the token wrapper. It is the absence of an independent party between origination, valuation, and performance reporting.

Huma Global Ltd. operates the product and publishes the exchange rate. Arf, the dominant originator, belongs to the same corporate group. Ultimate borrowers remain unnamed and uncounted; the loan tape, current concentrations, defaults, and valuations have no located independent audit, trustee, or rating. The result is a technically credible wrapper around a structurally circular private-credit business.

The measured token supply on 2026-10-13 was **571,876,771.20 PST**, worth about **$651.1M** at the prior day's exchange-rate reading. This is token supply, **not verified AUM**. It conflicts with third-party Huma TVL near $155M by roughly four times. The cause is unresolved, so this report does not silently turn one measure into the other.

| Axis | Score | What sets it |
|---|---:|---|
| Stability | 5.0 | Sound OCR delivery, but the underlying NAV appears issuer-calculated and lacks an independent history or meaningful circuit breaker |
| Backing | 4.0 | Short-tenor receivables and a liquid sleeve, offset by weak independent verification and roughly 2% first loss |
| Liquidity & Exit | 6.0 | Working primary redemption, but queue and liquid-sleeve limits at scale; thin secondary depth |
| Dependencies | 3.0 | Operator, dominant originator, valuation, and reporting sit inside one group |
| Contract & Admin | 5.0 | Strong Ethereum and Arc deployments; single-key Solana mint authority where most supply sits |
| Issuer | 5.0 | Credible operating record, but a BVI operator and related-party structure without published audited financials or loan tape |
| **Overall** | **4.5** | Below the 4.67 axis mean because related-party concentration and weak independent verification are load-bearing |

## 1 · Stability — 5.0

PST's reference is NAV. The Ethereum Chainlink proxy at `0x4be50be32db1510240d542f77c5b36ca0d0965e6` described itself as **“PST-USDC Exchange Rate (Calculated)”** and returned **1.138619** on 2026-10-12. Its OCR2 aggregator had ten transmitters and a 4-of-N Safe owner. That is strong delivery infrastructure and a useful audit trail.

It is not independent proof of the value being delivered. Chainlink exchange-rate feeds may transmit a protocol-published redemption rate from one authoritative source, and the exact input and calculation path for PST have not been confirmed. Ten transmitters can decentralize transport without independently valuing the receivables.

There is also no meaningful on-chain sanity band. The feed's minimum is effectively zero and its maximum effectively unbounded. Fluid's Ethereum PST/USDC pool derives its center price from the same feed and permits an approximately $0.01–$10 range. A near-NAV Fluid quote is therefore the oracle agreeing with itself, not market corroboration. Orca was the only located ordinary market, with about $205K TVL and 94 trades in the measured day.

Huma's published generic credit-pool architecture can mark NAV down after a default, but the PST-specific valuation path was not located. This report therefore does not claim those generic write-down contracts produce PST's NAV. Whether a recognized borrower loss mechanically lowers this exchange rate remains open.

## 2 · Backing — 4.0

PST is backed by short-duration payment receivables plus a market-neutral liquid sleeve. Huma targets roughly 85% PayFi assets and 15% liquid assets. The receivables reportedly turn over in **one to five days**, an important mitigant: a halted origination channel can run off much faster than a conventional multi-year private-credit book.

Huma reports more than **$17B of cumulative volume with zero credit defaults**. That is a meaningful operating record, but it is self-reported and anonymized. Cumulative flow is also not outstanding exposure: paper that turns every few days can generate a very large volume denominator from a much smaller book.

The missing evidence is what holds this axis at 4.0. Borrowers are described only by category, current concentrations are undisclosed, and no independent loan-tape audit, trustee evidence, credit rating, or audited valuation was located. First-loss protection is reported at only “a couple of percent.” None of this shows a loss or misstatement; it shows that a loss would not be independently visible from the published record.

## 3 · Liquidity & Exit — 6.0

Primary redemption is the stronger exit. Huma documents a no-lockup option with first-come-first-served processing, typical settlement within one business day, and up to seven days. Three- and six-month variants also exist, and each new deposit resets the relevant lockup.

At scale, redemption is rationed rather than instant. The roughly 15% liquid sleeve serves the queue first; requests beyond it depend on receivables maturing. The short loan tenor makes this arrangement more credible, but a holder behind a large queue still waits for cash to return.

Secondary liquidity is usable only at modest size. The measured Ethereum route sold $2.0M for about 9.6 bps and $2.25M for about 10.7 bps, then exhausted available USDC near **$2.39M**. That route is NAV-pinned, so it measures inventory available at the published mark rather than independent price discovery. Solana had roughly $5.2M of standing venue TVL in the inventory, but no completed executable ladder; Arc had no located pool.

The 6.0 reflects a working primary path with a real liquid sleeve. It stays below a stronger score because queue position matters, the documented ceiling is seven days, Ethereum has a hard secondary wall, and Solana's executable depth remains unmeasured.

## 4 · Dependencies — 3.0

The value path is concentrated:

```text
PST holder
  -> Huma Global Ltd. (operator and exchange-rate publisher)
      -> Arf / Arf Capital (dominant affiliated originator and SPV)
          -> unnamed licensed payment-institution borrowers
      -> roughly 10–20% liquid sleeve
  -> Chainlink OCR2 (published mark)
  -> Chainlink CCIP (cross-chain supply)
```

Huma and Arf combined under parent 00 Holdings Inc. in 2024. A dated observation put Arf at 98% of originated credit; more recent third-party language says the large majority of pool capital remains Arf-originated. The exact current share is not established, so this report treats 98% as dated rather than timeless.

This creates the report's lowest-scoring dependency: the dominant originator, operator, valuation source, and reporter of the default record are affiliated. Beneath Arf, borrower identities and count remain undisclosed, and payment institutions can share correlated corridor, banking-rail, and regulatory risks. Ultra-short tenor and established infrastructure mitigate the exposure, but do not diversify it.

## 5 · Contract & Admin — 5.0

The asset-level score blends sharply different deployments and must not be read as a score for every chain.

| Chain | Contract & Admin | Control finding |
|---|---:|---|
| Ethereum | 6.0 | Immutable BurnMintERC20; no pause, blacklist, or freeze; CCIP pool minters behind a 3-hour timelock, but a 4-of-5 Safe can grant uncapped minting without that delay |
| Arc | 6.0 | Byte-for-byte Ethereum token construction; sole pool minter behind a 3-hour timelock; same 4-of-5 Safe and therefore the same shared compromise domain |
| Solana | 3.0 | Standard SPL mint with no freeze authority, but one plain keypair controls minting without a multisig or timelock |

Ethereum's token at `0x22aE3D9a738471f405169Af055d31c687087d4c7` is immutable. Its authorized minters are CCIP token pools, and the full measured history contained 1,075 mints with no non-pool exception. The weakness is a separate path: the sole 4-of-5 `DEFAULT_ADMIN_ROLE` Safe can grant mint and burn roles directly, with no delay and no supply cap. The timelock protects the pools, not the token's own access-control grant.

Arc reproduces that design and shares the same five Safe signers, so Ethereum and Arc are not independent security domains. Solana is materially weaker: mint `59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw` had a plain-keypair mint authority and no freeze authority. A configured CCIP pool exists, but its relationship to that key was not resolved.

This split is economically important because **358.46M of 571.88M PST—about 62.7%—sat on Solana** at the measured time. Solana therefore carries a chain-level overall score of **4.0**, while Ethereum and Arc retain the cross-chain 4.5 overall.

## 6 · Issuer — 5.0

Huma has operated since roughly 2022, reports more than $17B of cumulative payment volume, and uses established Chainlink infrastructure rather than bespoke bridge and oracle systems. Its redemption route has a real operating record, and its collateral integrations show meaningful adoption.

The legal and verification structure limits the credit. Huma Global Ltd., the operator, is a BVI entity. Arf Financial GmbH in Switzerland and Arf Capital Ltd. in Liechtenstein originate most of the credit under the same parent. No published audited financials or loan tape were located, and the entity that owes holders is not shown to sit under a prudential regime comparable to a bank or regulated fund.

The score recognizes operating history and competent infrastructure without treating them as substitutes for independent underwriting evidence.

## What to watch

- Any independent loan-tape audit, trustee evidence, or credit rating.
- Current Arf origination share and ultimate-borrower concentration.
- The exact source and calculation path for the PST-USDC exchange-rate feed.
- Evidence that PST-specific NAV mechanics recognize and publish credit markdowns.
- Migration of Solana mint authority to a multisig or timelock.
- Reconciliation of measured token supply with reported Huma TVL.
- Feed staleness, any Ethereum `RoleGranted`, any unmatched Solana mint, or redemption settlement slipping beyond seven days.

## Revision history

- **2026-10-13 — Initial report.** Established the NAV-not-$1 framing; measured the Ethereum, Solana, and Arc deployment set; disclosed the unresolved $651.1M supply-derived value versus roughly $155M reported TVL; and published chain-specific Contract & Admin scores. Future corrections belong here rather than as research-log notes throughout the narrative.

---

*Based on Huma product documentation, third-party institutional risk review, Chainlink documentation, contract and role-history reads, Solana authority reads, and measured venue quotes through 2026-10-13. Contract addresses and supply readings are chain-specific snapshots. The report assesses PST itself; lending-market curators, parameters, and LLTVs are outside scope.*
