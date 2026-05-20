---
asset: "apxUSD"
slug: "apxusd"
aliases: ["apxUSD", "Apyx USD", "apxusd-retail"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "rwa-synthetic"
assessment_type: "light"
audience: "retail"
live_dashboard_url: "https://tidresearch.com/dashboards/?asset=apxusd"
trust_disclaimer: true
date: "2026-04-10"
last_verified: "2026-05-20"
featured: false
production: true
issuer: "Apyx (DFDV-affiliated)"
peg_mechanism_score: 4.5
backing_score: 4.5
liquidity_score: 4.5
issuer_score: 5.5
underlying_score: 5.5
overall_score: 4.6
audited: true
audit_count: 3
audit_firms: ["Quantstamp", "Zellic", "Certora"]
audited_reserves: true
bug_bounty: false
team_doxxed: false
incident_history: false
is_fork: false
---

# apxUSD — Retail Risk Report

**Moderate-elevated risk · 4.6/10**

apxUSD is a $1-pegged stablecoin from Apyx, a young protocol (live since Feb 2026) backed primarily by **cash & equivalents + Strategy's STRC perpetual preferred shares**. The yield from the backing flows to Apyx's sibling token apyUSD; apxUSD holders forgo yield in exchange for stablecoin functionality. Supply has grown rapidly into the hundreds of millions since launch.

| Peg | Yield | Exit | Age | Chains |
|---|---|---|---|---|
| $1, RWA-backed synthetic | None (yield routes to apyUSD) | DEX (Curve) or Apyx USDC settlement (opaque) | ~3 months | Ethereum, Base |

## Backing & solvency

**Backing is verifiable through two layers.** (a) A continuous TEE-attested proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi) signs each snapshot from a secure enclave with a key registered on-chain. (b) Monthly third-party CPA-firm attestations by **Wolf & Company, P.C.** (Boston; AICPA examination standards) published at [`docs.apyx.fi`](https://docs.apyx.fi/collateral-and-custody/third-party-attestation) — March 2026 and April 2026 reports both signed. The live dashboard shows reserves, supply, and collateralization (currently just above 100% — small but positive buffer).

Composition is roughly **half-to-two-thirds Cash & Equivalents + one-third-to-half STRC family + a small SATA sleeve** (~56% cash + ~42% STRC + ~2% SATA per the most recent disclosed snapshot). The STRC family now has two forms: brokerage-held STRC at **Alpaca** plus a newly disclosed on-chain tokenized form **STRCx** ($51.5M as of 2026-04-30 per the April Wolf attestation, up from zero on 2026-04-09). STRC family is the largest single-issuer concentration but not the totality — a 50% STRC writedown would still leave most of the backing intact. That cash-majority composition is reflected in the **Underlying axis at 5.5** — meaningfully diversified versus the apyUSD wrapper (4.5, which carries the same backing minus a wrapper-recursion discount) and well above pure-STRC products like [sUSDat](/reports/susdat/) (4.0).

**The qualifiers worth knowing:**
- The "Cash & Equivalents" line is not itemized in the Accountable feed — could be bank deposits, T-bills, USDC, or some mix. Not disclosed publicly.
- **Wolf is mid-tier, not Big-4.** Solid AICPA examination engagement (named auditor, professional liability) but a tier below Deloitte / PwC / EY / KPMG.
- **The April Wolf engagement narrowed scope to securities only** — cash, stablecoin, and dividends-in-motion (covered in March) all dropped out. The largest reserve component (cash) has no CPA-firm attestation for any date after 2026-03-31. Whether this is a transitional re-scope or a permanent restriction will be visible in the May 2026 report (expected mid-to-late June 2026).
- STRC + SATA are held at Alpaca brokerage in the name of Preference Foundation (or a subsidiary). STRCx is in [`0x37b0779a…323a555`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555), a 3-of-6 Gnosis Safe with the same six owners as Apyx's other admin Safes (identified on-chain; the 4/30 balance matches the Wolf attestation within 1%). The Safe has no time-delay on transactions — same admin gap as the cross-chain bridge layer.
- The Accountable TEE feed proves what Apyx feeds the enclave; it does not audit the custodian or the wallet keys themselves. Wolf's monthly examinations close part of that gap by providing an independent CPA opinion on the securities balances, but no examination opines on the on-chain wallet's key-management posture.

## Exit liquidity

**Entry:** Mint at Apyx (manual, EIP-712 signed order workflow) or buy on the Curve apxUSD/USDC pool on Ethereum. The Curve pool is the realistic retail entry and exit venue.

**Exit:**
- **Retail size (sub-$100K):** Sell on Curve apxUSD/USDC. Depth runs in the tens of millions of USDC (live on the dashboard's Secondary Liquidity panel). Slippage is small at retail size in normal markets.
- **Larger size:** Apyx offers redemption in USDC, but the mechanism isn't publicly documented — no published timeline, no PSM, no on-chain guarantee. Effectively trusts Apyx to liquidate STRC into USDC and pay out when requested.

In a stress event (STRC selloff, Apyx solvency event, MSTR equity crash), the secondary market is the binding exit — and it remains a small fraction of total supply at any given moment. Would not absorb a coordinated run.

## Peg & yield dynamics

**apxUSD is designed to trade at $1.** Peg integrity depends on three things:

1. **STRC + cash backing maintains its value.** STRC dividends keep pace with Apyx's liabilities. STRC has existed ~1 year; not yet tested through a prolonged BTC drawdown, an MSTR equity-raise pause, or a dividend suspension.
2. **The Alpaca brokerage holds what's reported, and the STRCx Safe holds what's claimed.** The trust root is split: Wolf's monthly CPA examinations provide independent verification of the securities sleeve at two snapshot dates per month (and the STRCx Safe at [`0x37b0779a…`](https://etherscan.io/address/0x37b0779a66edc491df83e59a56d485835323a555) is independently verifiable on-chain in real time — the 4/30 balance reconciles to Wolf's figure within 1%), but Wolf does not opine on the cash sleeve after the April scope narrowing, and no examination opines on the Safe's key-management posture beyond what's observable on-chain.
3. **Secondary market depth absorbs normal flows.** Curve depth has been growing — enough for retail-scale exits at small slippage. Stress event would test this.

**What could break the peg:** a severe BTC crash that compresses MSTR equity → threatens STRC dividends and par pricing → forces Apyx to liquidate STRC at a loss → buffer consumed → apxUSD trades below par. The buffer absorbs ~5% STRC writedowns; 10% puts the system underwater on the on-attestation accounting.

## Audits, admin & team

**Backers + audits are solid; the offshore structure is the qualifier:**

- **Backed by DeFi Development Corp (DFDV)**, a Nasdaq-listed company. Joseph Onorati (DFDV CEO) is publicly named. Investors include ParaFi, Pantera, Kraken Ventures, Wintermute Ventures, GSR.
- **Three audits:** Quantstamp (Feb 2026), Certora (Mar 2026 — formal verification, 1 high-severity finding fixed), Zellic (Mar 2026). Solid stack.
- **Admin posture (verified on-chain):** A 4-of-6 Gnosis Safe controls the protocol, with a **72-hour timelock** on sensitive actions and a distributed guardian role that can cancel scheduled operations. Token-side admin is materially better than typical young-protocol baseline.

**Caveats:**
- Apyx as a legal entity appears separate from DFDV (US/EU/EEA users are geo-blocked, which wouldn't apply if Apyx were simply a DFDV product). In a solvency event, holders' claims may route through an unnamed offshore entity rather than the Nasdaq-listed DFDV. Standard offshore-RWA-protocol structure but worth understanding.
- No Apyx team members are individually doxxed beyond DFDV's CEO. The issuer entity is Preference Foundation (named on the Wolf attestation; Director Carolyn Kelly signs). Brokerage is Alpaca (per the April Wolf attestation); the bank(s) holding cash are not named.
- The cross-chain bridge (Ethereum ↔ Base, audited Chainlink CCIP) is governed by a **smaller 3-of-6 multisig with no time-delay** — weaker than the token governance. Worth noting but not disqualifying for retail-scale exposure; the underlying CCIP architecture is sound and rate-limited.
- No bug bounty program.

## Who it's for · Who should avoid

**For:** Risk-tolerant DeFi users who want exposure to MSTR/STRC dividend yield via a stablecoin wrapper and accept that they're effectively making a leveraged bet on Strategy's continued ability to pay STRC dividends. Comfortable with off-chain RWA custody, opaque redemption mechanics, and a ~3-month-old protocol.

**Avoid if:**
- Treating this as a "core" stablecoin allocation. apxUSD is a thin wrapper around a single off-chain security; concentration risk doesn't go away because the on-chain ticker reads $1.
- Needing instant guaranteed exit at $1 — the documented redemption mechanism is opaque and Curve depth is a small fraction of supply.
- Needing a Big-4 audited financial statement — what's published is a monthly Wolf & Company AICPA examination (real CPA-firm opinion, but mid-tier and currently scoped to securities only after the April scope narrowing), not a full financial-statement audit.

## What to watch

- **Wolf May 2026 attestation — cash scope re-inclusion.** Expected mid-to-late June 2026. If cash returns to scope, the disclosure stack is back at the March-level high-water mark; if cash stays out, the largest reserve component has no CPA-firm coverage for the foreseeable future.
- **Curve apxUSD/USDC pool depth** (live on dashboard's Secondary Liquidity panel). Depth growing = healthier exit; depth shrinking = stress signal.
- **STRC ex-dividend dates** (~mid-month). Watch apyUSD NAV behavior around those dates; if STRC's monthly reset materially drops, yield to apyUSD compresses.
- **MSTR / BTC drawdowns.** A severe BTC crash compresses MSTR equity → threatens STRC dividends → degrades apxUSD backing.

## A note on the apyUSD sibling

If you're considering the yield-bearing apyUSD wrapper, see the [apyUSD retail report](/reports/apyusd/). apyUSD captures the dividend stream (~13% APY ongoing) in exchange for a 30-day exit cooldown for institutional sizing — retail can exit faster via a two-hop DEX route.

---

*This report describes Apyx as of mid-2026. Live values for supply, reserves, collateralization, Curve depth, and bridge conservation are on the [live dashboard](https://tidresearch.com/dashboards/?asset=apxusd). Some information (cash composition, redemption mechanics, on-chain wallet keys) remains issuer-attested only. Securities balances and brokerage are CPA-attested by Wolf & Company under AICPA standards. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
