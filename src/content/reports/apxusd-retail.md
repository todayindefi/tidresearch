---
asset: "apxUSD"
slug: "apxusd"
aliases: ["apxUSD", "Apyx USD", "apxusd-retail"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "rwa-synthetic"
assessment_type: "light"
audience: "retail"
live_dashboard_url: "https://todayindefi.github.io/backing-monitor/?asset=apxusd"
trust_disclaimer: true
date: "2026-04-10"
last_verified: "2026-05-11"
featured: false
production: false
issuer: "Apyx (DFDV-affiliated)"
peg_mechanism_score: 4.5
backing_score: 4.5
liquidity_score: 4.5
issuer_score: 6.0
overall_score: 4.7
audited: true
audit_count: 3
audit_firms: ["Quantstamp", "Zellic", "Certora"]
audited_reserves: false
bug_bounty: false
team_doxxed: false
incident_history: false
is_fork: false
---

# apxUSD — Retail Risk Report

**Moderate-elevated risk · 4.7/10**

apxUSD is a $1-pegged stablecoin from Apyx, a young protocol (live since Feb 2026) backed primarily by **cash & equivalents + Strategy's STRC perpetual preferred shares**. The yield from the backing flows to Apyx's sibling token apyUSD; apxUSD holders forgo yield in exchange for stablecoin functionality. Supply has grown rapidly into the hundreds of millions since launch.

| Peg | Yield | Exit | Age | Chains |
|---|---|---|---|---|
| $1, RWA-backed synthetic | None (yield routes to apyUSD) | DEX (Curve) or Apyx USDC settlement (opaque) | ~3 months | Ethereum, Base |

## Backing & solvency

**Backing is real and verifiable in real time.** Apyx publishes a continuous proof-of-solvency feed at [`accountable.apyx.fi`](https://accountable.apyx.fi) — a third-party cryptographic attestation that signs each snapshot from a secure enclave with a key registered on-chain. The dashboard linked at the bottom of this report shows live reserves, supply, and collateralization (currently just above 100% — small but positive buffer).

Composition is roughly **half-to-two-thirds Cash & Equivalents + one-third-to-half STRC + a small SATA sleeve**. STRC is the largest single-issuer concentration but not the totality — a 50% STRC writedown would still leave most of the backing intact.

**The qualifiers worth knowing:**
- The "Cash & Equivalents" line is not itemized — could be bank deposits, T-bills, USDC, or some mix. Not disclosed publicly.
- STRC is held off-chain by an unnamed custodian/broker. The Accountable feed proves what Apyx feeds the enclave; it does not audit the custodian itself.
- No PCAOB-firm financial audit has appeared yet (Apyx promised monthly attestations; ~3 months into operations, none has materialized).

## Exit liquidity

**Entry:** Mint at Apyx (manual, EIP-712 signed order workflow) or buy on the Curve apxUSD/USDC pool on Ethereum. The Curve pool is the realistic retail entry and exit venue.

**Exit:**
- **Retail size (sub-$100K):** Sell on Curve apxUSD/USDC. Depth runs in the tens of millions of USDC (live on the dashboard's Secondary Liquidity panel). Slippage is small at retail size in normal markets.
- **Larger size:** Apyx offers redemption in USDC, but the mechanism isn't publicly documented — no published timeline, no PSM, no on-chain guarantee. Effectively trusts Apyx to liquidate STRC into USDC and pay out when requested.

In a stress event (STRC selloff, Apyx solvency event, MSTR equity crash), the secondary market is the binding exit — and it remains a small fraction of total supply at any given moment. Would not absorb a coordinated run.

## Peg & yield dynamics

**apxUSD is designed to trade at $1.** Peg integrity depends on three things:

1. **STRC + cash backing maintains its value.** STRC dividends keep pace with Apyx's liabilities. STRC has existed ~1 year; not yet tested through a prolonged BTC drawdown, an MSTR equity-raise pause, or a dividend suspension.
2. **The custodian holds what's reported.** This is the trust root; the Accountable feed proves the data Apyx feeds it but not what's actually in the brokerage account.
3. **Secondary market depth absorbs normal flows.** Curve depth has been growing — enough for retail-scale exits at small slippage. Stress event would test this.

**What could break the peg:** a severe BTC crash that compresses MSTR equity → threatens STRC dividends and par pricing → forces Apyx to liquidate STRC at a loss → buffer consumed → apxUSD trades below par. The buffer absorbs ~5% STRC writedowns; 10% puts the system underwater on the on-attestation accounting.

## Audits, admin & team

**Backers + audits are solid; the offshore structure is the qualifier:**

- **Backed by DeFi Development Corp (DFDV)**, a Nasdaq-listed company. Joseph Onorati (DFDV CEO) is publicly named. Investors include ParaFi, Pantera, Kraken Ventures, Wintermute Ventures, GSR.
- **Three audits:** Quantstamp (Feb 2026), Certora (Mar 2026 — formal verification, 1 high-severity finding fixed), Zellic (Mar 2026). Solid stack.
- **Admin posture (verified on-chain):** A 4-of-6 Gnosis Safe controls the protocol, with a **72-hour timelock** on sensitive actions and a distributed guardian role that can cancel scheduled operations. Token-side admin is materially better than typical young-protocol baseline.

**Caveats:**
- Apyx as a legal entity appears separate from DFDV (US/EU/EEA users are geo-blocked, which wouldn't apply if Apyx were simply a DFDV product). In a solvency event, holders' claims may route through an unnamed offshore entity rather than the Nasdaq-listed DFDV. Standard offshore-RWA-protocol structure but worth understanding.
- No Apyx team members are individually doxxed beyond DFDV's CEO. The custodian is also unnamed.
- The cross-chain bridge (Ethereum ↔ Base, audited Chainlink CCIP) is governed by a **smaller 3-of-6 multisig with no time-delay** — weaker than the token governance. Worth noting but not disqualifying for retail-scale exposure; the underlying CCIP architecture is sound and rate-limited.
- No bug bounty program.

## Who it's for · Who should avoid

**For:** Risk-tolerant DeFi users who want exposure to MSTR/STRC dividend yield via a stablecoin wrapper and accept that they're effectively making a leveraged bet on Strategy's continued ability to pay STRC dividends. Comfortable with off-chain RWA custody, opaque redemption mechanics, and a ~3-month-old protocol.

**Avoid if:**
- Treating this as a "core" stablecoin allocation. apxUSD is a thin wrapper around a single off-chain security; concentration risk doesn't go away because the on-chain ticker reads $1.
- Needing instant guaranteed exit at $1 — the documented redemption mechanism is opaque and Curve depth is a small fraction of supply.
- Needing an audited reserve report — none has been published.

## What to watch

- **First PCAOB-firm attestation** (still missing). When it lands, it materially upgrades the issuer-trust axis.
- **Curve apxUSD/USDC pool depth** (live on dashboard's Secondary Liquidity panel). Depth growing = healthier exit; depth shrinking = stress signal.
- **STRC ex-dividend dates** (~mid-month). Watch apyUSD NAV behavior around those dates; if STRC's monthly reset materially drops, yield to apyUSD compresses.
- **MSTR / BTC drawdowns.** A severe BTC crash compresses MSTR equity → threatens STRC dividends → degrades apxUSD backing.

## A note on the apyUSD sibling

If you're considering the yield-bearing apyUSD wrapper, see the [apyUSD retail report](/reports/apyusd/). apyUSD captures the dividend stream (~13% APY ongoing) in exchange for a 30-day exit cooldown for institutional sizing — retail can exit faster via a two-hop DEX route.

---

*This report describes Apyx as of mid-2026. Live values for supply, reserves, collateralization, Curve depth, and bridge conservation are on the [live dashboard](https://todayindefi.github.io/backing-monitor/?asset=apxusd). Some information depends on issuer disclosures (custody arrangements, attestations, redemption mechanics) that are not yet independently verified. Corrections, attestation links, or additional disclosures welcome at info@tidresearch.com.*
