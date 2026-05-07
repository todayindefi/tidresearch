---
asset: "apxUSD"
slug: "apxusd"
aliases: ["apxUSD", "Apyx USD", "apxusd-retail"]
chains: ["eth"]
category: "stablecoin"
peg_mechanism: "rwa-synthetic"
assessment_type: "light"
audience: "retail"
companion_report: "apyusd-retail"
date: "2026-05-07"
last_verified: "2026-05-07"
featured: false
production: false
issuer: "Apyx (DFDV-affiliated)"
market_cap_approx: 306860000
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
live_since: "2026-02"
---

# apxUSD — Retail Risk Report

**Elevated risk · 4.7/10**

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None (yield routes to apyUSD sibling) | Curve apxUSD/USDC (~$14.5M depth) | "USDC settlement" — mechanism opaque | ~3 months | Ethereum |

## Summary

apxUSD is the non-yield-bearing stablecoin from **Apyx**, a roughly 3-month-old protocol affiliated with DeFi Development Corp (DFDV, Nasdaq-listed). It tries to do something genuinely new: back a $1 stablecoin with **STRC**, Strategy's (formerly MicroStrategy / MSTR) variable-rate perpetual preferred stock. Dividends from STRC flow to a sibling token, **apyUSD**; apxUSD holders carry the same collateral risk but receive no yield in exchange.

Supply has scaled fast — verified on-chain 2026-05-07 at **~$306.86M**, up from ~$50M in early April (~6× in a month, ~50% in the trailing 10 days alone). The protocol has a credible audit stack (Quantstamp, Zellic, Certora with formal verification) and a properly-built admin (4-of-6 Safe, 72-hour timelock, distributed guardian role with cancel rights — verified on-chain 2026-04-30). Where this report still lands at **4.7/10 — elevated risk** is the **economic structure**: the backing is more diversified than originally framed (about 56% cash & equivalents, 42% STRC, 2.4% SATA per Apyx's [Accountable proof-of-solvency feed](https://accountable.apyx.fi/) on 2026-05-07), but the absolute over-collateralization buffer is thin (~78 bps, $2.4M against $307M supply), the redemption mechanism is documented as "USDC settlement" without a clear specification, secondary-market depth is thin relative to supply, and there is no PCAOB-firm financial-statement audit yet — only a TEE-attested cryptographic feed that we describe in detail below.

This is a stablecoin label wrapped around what is structurally an MSTR-preferred-plus-cash wrapper. It can work — but at ~3 months in production with no PCAOB-firm sign-off, it is speculative-only sizing. Not a core stable.

## What you actually earn

**Nothing.** apxUSD is intentionally non-yield-bearing. All STRC dividend income (cited at ~11.25% indicated rate, with monthly resets) is captured by the sibling vault token **apyUSD**, which trades the yield for a 30-day exit cooldown.

The intended retail framing is "use apxUSD if you want $1 stability, use apyUSD if you want the dividend." The catch — and it's significant — is that apxUSD holders carry **the same collateral risk as apyUSD holders** without ever being compensated for it. If apyUSD holders exit first during stress (via cooldown or any future secondary market), apxUSD holders are left absorbing residual collateral risk uncompensated. This is an asymmetric structure that's worth understanding before sizing.

apyUSD's NAV has grown from 1.0 at launch to ~1.363 apxUSD/share in roughly 2.5 months. The headline figure is partly a one-time launch-week NAV jump (about 33% in week 1, from donation-pattern apxUSD inflows into the vault) and partly the ongoing ~13% annualized accrual from STRC dividends — within STRC's indicated-rate range. The full breakdown is in the [apyUSD retail report](/reports/apyusd-retail/).

## How retail enters and exits

**Bottom line up front: retail can't mint apxUSD and can't redeem apxUSD. Both directions go through the secondary market — specifically the Curve apxUSD/USDC pool.**

This is structurally different from a permissionless stablecoin (DAI, crvUSD, OUSD) where any wallet can mint at the contract. It's also different from a KYC-gated tokenized T-bill (thBILL, BUIDL) where retail can at least *sell* on a DEX while institutions handle primary flows. With apxUSD, the primary rails are Apyx-only on both sides:

- **Primary mint** runs through Apyx's manual multi-signature EIP-712 signed-order workflow, with per-tx, daily, and total-supply caps. That's an onboarded-counterparty flow, not a public mint a retail wallet can call. Apyx's product also explicitly excludes **US, EU, and EEA users** — the geographic restrictions are stricter than DFDV's regulated-parent footprint, which is one of the signals that Apyx is a separate offshore entity.
- **Primary redemption** is documented only as "settled in USDC" — *not* atomic on-chain redemption against the STRC collateral. The mechanism, timeline, gating, and minimum size are not publicly specified. There's also an `AddressList` admin power (constructor name "DenyList", governed by Apyx's AccessManager) that lets Apyx selectively block redemptions for specific addresses. Until Apyx publishes the spec, treat it as opaque and not part of the retail toolkit.

Which leaves the **Curve apxUSD/USDC pool** on Ethereum as the realistic retail entry and exit. As of 2026-05-07 the pool holds about **~$14.50M apxUSD and ~$14.57M USDC** (~$29M total, ~$14.5M of USDC depth — up ~38% from $10.5M ten days earlier). It's growing, but **it's still ~5% of the $307M apxUSD supply**. That's fine for normal-sized retail tickets and clears in seconds at whatever the standing peg deviation is. It would not absorb a run, and meaningful single sales (high-five-figure or larger) will eat slippage above the standing deviation.

The honest read: in normal markets, retail enters and exits via Curve at the standing peg with sub-minute settlement. In any stress scenario — a peg event, a sized redemption queue at the Apyx layer, a Strategy/MSTR-correlated drawdown that pulls STRC below par — that ~5% of supply on Curve becomes the binding constraint, and there is no retail-accessible primary path to fall back to. Aggregator routing (1inch, KyberSwap) can extend the depth a bit by routing across other venues, but Curve is by far the largest pool and the floor on aggregator routing in stress.

## What the contracts are doing

apxUSD on Ethereum is an **ERC1967 upgradeable proxy** at `0x98A878b1Cd98131B271883B390f68D2c90674665` (impl `0xDd71Fd677fde2ed2579a3c45204f41a11016ccb4`). There's also a Base deployment at `0xD993935E13851dd7517af10687EC7e5022127228`, bridged via Chainlink CCIP — the same bridging stack used by syrupUSDC and others, with a clean public track record at scale through April 2026.

What sits behind the token:

- **Minting** uses an EIP-712 signed-order workflow with a manual multi-signature workflow and three-layer constraints (per-tx cap, total supply cap, daily limit). Mint governance is separated from mint execution — different multi-sigs sign each — which is a positive design choice.
- **STRC collateral** is held off-chain by an unnamed prime broker / MPC custodian. The smart contract does not hold or price the collateral. Apyx has stated MPC keys are co-managed between Apyx and a custody partner, but neither the broker nor the MPC provider is publicly identified.
- **Redemption** is described in docs as "settled in USDC." How STRC is liquidated to fund settlement, what the timeline is, whether there are gates or minimums, and what happens if STRC liquidity is thin during stress — none of this is publicly specified.
- **An AddressList contract** (constructor name "DenyList") at `0x2c271ddF484aC0386d216eB7eB9Ff02D4Dc0F6AA` is governed by the AccessManager. Apyx retains the ability to selectively block redemptions via this list. Worth knowing if you care about counterparty censorship risk.

The structural difference from purely algorithmic stablecoins (DAI, crvUSD): apxUSD is collateralized by **off-chain securities held in a tradfi custody arrangement**. The on-chain contracts are properly built, but the substance of the backing — and your ability to recover value in stress — depends on Apyx's ability to liquidate STRC into USDC and on the legal posture of the custody arrangement, neither of which is something the contracts can attest to on their own.

## Cross-chain bridge (Ethereum ↔ Base)

apxUSD bridges between Ethereum and Base via **Chainlink CCIP v1.6.1** (LockRelease pool on Ethereum, BurnMint on Base). Verified on-chain 2026-05-07:

- **Mass conservation holds.** apxUSD locked on Ethereum (14,336,153.13) = Base totalSupply (14,336,153.13) — exact match. The bridge is not silently issuing more Base supply than is locked
- **Architecture is bilateral and clean.** Strictly Ethereum ↔ Base; no third-chain peers configured, no inert pathways. Different attack class from the multi-chain LayerZero OFT exploits of April 2026 — those hit single-DVN configurations and admin compromises that don't map to CCIP's architecture. The Risk Management Network (RMN) is Chainlink's circuit-breaker layer; standard single-vendor dependency
- **Rate limits are real.** apxUSD: 5M tokens/day cap per direction (~1.6% of $307M supply). Both directions enabled; the cap refills over 24 hours
- **LockRelease rebalancer is unset.** Locked inventory on the Ethereum side cannot be moved off-pool by the owner — flows are strictly through CCIP message paths

**The caveat worth knowing:** the bridge admin posture is one tier weaker than the token admin. The token contracts (apxUSD, apyUSD, UnlockToken, AddressList) sit behind a 4-of-6 admin Safe with a 72-hour timelock and a distributed guardian role that can cancel scheduled operations. The CCIP pools are owned by a separate **3-of-6 Safe with no timelock**, owned via standard `Ownable`. Same six signers as the token-admin Safe but a lower threshold and instant execution. A 3-signer quorum on this Safe can re-configure the entire bridge in one transaction with no exit window — raise rate limits, add new chain peers, swap router or RMN proxy, set the rebalancer to drain locked inventory. For retail-scale Base exposure, this is worth knowing but not disqualifying; the rate limits and conservation checks are real protections at the operational layer, but the governance layer is materially weaker than the token layer.

## Audits & security

**Strong by RWA-stablecoin standards** — and the admin posture is materially better than first appearance suggests:

- **Three audits.** [Quantstamp](https://certificate.quantstamp.com/full/apx-usd-stablecoin/2a5be074-3d9f-49e7-aa08-46fb5f1e5bd6/index.html) (Feb 2026), [Zellic](https://github.com/Zellic/publications/blob/master/Apyx%20Stablecoin%20-%20Zellic%20Audit%20Report.pdf) (Mar 2026), and [Certora](https://www.certora.com/reports/apyx-apxusd) (Mar 2026) with formal verification. Certora found 11 issues including 1 high-severity, fixed and confirmed. Zellic and Certora are top-tier.
- **AccessManager admin posture (verified on-chain 2026-04-30):** ADMIN_ROLE is held by a single 4-of-6 Gnosis Safe (`0xabdd8c...`, v1.4.1, six owner keys). The deployer EOA held ADMIN_ROLE for ~2 minutes at deployment in February and not since.
- **72-hour timelock** on all four protocol target contracts (apxUSD, apyUSD, UnlockToken, AddressList). Sensitive admin operations must be scheduled and cannot execute for 3 days.
- **Distributed guardian role** that can cancel scheduled operations during the 72-hour window. Guardians include the six Safe owner keys individually plus the deployer EOAs — meaningful protection against a compromised admin Safe.
- An earlier version of our protocol report scored the contract layer lower on the false premise of a single-EOA admin; on-chain re-verification corrected that picture.

**Caveats, in order of importance:**

- **No bug bounty program.** Standard for RWA-stablecoin peers (Ethena has one, Apyx does not). Material gap.
- **Multiple upgradeable proxies in the critical path.** apxUSD itself is upgradeable. The 72-hour delay caps the speed at which a bad upgrade can reach production, but it's a delay, not a permanent firewall.
- **One observable post-launch implementation upgrade** on apyUSD on 2026-03-30, ~30 days after launch. The 72-hour delay was not yet observable at that point. Treat the upgrade path as a live risk surface, not a closed one.
- **~3 months in production.** Short clean record. No hacks, no depeg events, no forced pauses to date — but this is a very short observation window for a novel collateral structure.

## Backing & attestation

Apyx publishes a real-time **proof-of-solvency feed** at [accountable.apyx.fi](https://accountable.apyx.fi/), powered by Accountable — a third-party attestation infrastructure provider. The feed shows reserves vs liabilities updated continuously, signed by code running inside an AWS Nitro Enclave (a tamper-resistant computing environment). The enclave's signing key is registered on-chain at a known address, so anyone can verify the feed's signature chain.

As of the 2026-05-07 snapshot, the feed shows:

- **Total reserves:** $309.26M
- **Total supply:** $306.86M
- **Net excess:** $2.40M
- **Collateralization:** 100.78%

Composition: ~56% cash & equivalents, ~42% STRC, ~2.4% SATA (Strategy Class A), and a sliver of other holdings.

**What this attestation does:** continuously and cryptographically signs the data Apyx feeds it, so the reported reserves and composition are signed by a known infrastructure provider rather than self-reported.

**What it doesn't do:** audit the custodian itself. The custodian (unnamed) tells the enclave what it's holding; the enclave attests to what it's told. There's no PCAOB-firm review of internal controls, no opinion on whether the cash balances and STRC shares actually exist outside the custodian's reports, and no protection against substitution of the enclave code by a compromised Accountable deployment pipeline (though the on-chain key registration mitigates that).

For retail sizing, the feed is a real upgrade vs "no attestation at all" but it's not a substitute for a financial-statement audit. The "Cash & Equivalents" line is also unitemized — we can't tell from the public feed whether the cash is in a single bank deposit, in T-bills, or in USDC. Worth flagging: a single-bank-deposit composition would be a hidden second concentration axis.

Apyx has separately committed to monthly third-party PCAOB-firm attestation reports; none have surfaced through 2026-05-07.

## What's actually risky

This is the part the audit stack and admin posture **don't** cover.

- **STRC is the largest single-issuer concentration but not the totality.** Per Apyx's Accountable feed (2026-05-07), STRC is ~42% of reserves; cash & equivalents are ~56%. STRC stress is contained, not catastrophic — a hypothetical 50% STRC writedown would cut backing from $309M to about $244M against $307M liabilities (still ~80% covered) rather than being a system-wide event. STRC is still a Strategy (MSTR) preferred share, so MSTR/BTC stress flows through, but the apxUSD wrapper has a meaningful cash buffer that the original framing missed.
- **STRC is novel.** Variable-rate perpetual preferred with monthly-reset dividends, ~1 year old as an instrument. Untested through a prolonged BTC drawdown, an MSTR equity-raise pause, or a dividend suspension.
- **STRC sits behind Strategy's convertible debt.** In the capital structure, MSTR convertible holders ($10B+) are senior to STRC preferred holders. In a severe BTC crash, conversion-debt obligations get paid before preferred dividends.
- **No PCAOB-firm financial-statement audit yet, but a TEE-attested PoR feed exists.** Apyx publishes a continuous proof-of-solvency feed at accountable.apyx.fi (see the "Backing & attestation" section above) — a real third-party cryptographic attestation, but not a PCAOB-firm sign-off. Apyx has separately committed to monthly third-party PCAOB-firm attestation reports; none have surfaced through 2026-05-07. The relationship between supply ($306.86M) and reserves ($309.26M) is now visible via the Accountable feed (100.78% CR, $2.4M net excess) but the underlying custodian is not audited — Accountable attests to the data Apyx feeds it.
- **Off-chain custody is unidentified.** "Third-party prime brokerage accounts with MPC keys" — no broker named, no MPC provider named. You're trusting Apyx's representation that the arrangement is sound.
- **Opaque corporate structure.** DFDV (Nasdaq) provides reputational backing and team. But geographic restrictions on Apyx's product (no US/EU/EEA users) suggest Apyx is a separate offshore legal entity from DFDV. In a solvency event, retail holders' legal claim is likely against an unnamed offshore Apyx entity, not against DFDV directly. Worth understanding before sizing.
- **No oracle disclosed for STRC pricing.** STRC is an off-chain equity. How the protocol prices it for OC calculations — centralized feed, manual NAV entry — has not been documented.
- **AddressList control.** Apyx retains the ability to selectively block redemptions. Not unique to apxUSD (USDT, USDC have similar admin powers), but worth knowing.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg mechanism | 4.5 | RWA-collateralized synthetic with no atomic redemption against collateral; settlement-in-USDC is opaque; secondary peg relies on a thin-but-deepening Curve pool. |
| Backing | 4.5 | Mixed Cash & Equivalents 56% + STRC 42% + SATA 2.4% per the Accountable TEE-attested PoR feed (2026-05-07: $309.26M reserves vs $306.86M supply, 100.78% CR, $2.4M net excess). Bumped from prior 4.0 reflecting (a) corrected reserve composition — not "overwhelmingly STRC" — and (b) a real third-party cryptographic attestation. Held back by: thin absolute buffer (~78 bps); cash composition unitemized; no PCAOB-firm sign-off; STRC remains the largest single-issuer component. |
| Liquidity | 4.5 | ~$14.5M USDC depth on Curve apxUSD/USDC (~5% of supply). Up ~38% in 10 days but still would not absorb a run. No CEX listings of note. USDC-settlement path exists but is not publicly specified. |
| Issuer | 6.0 | Three audits incl. formal verification; 4-of-6 Safe admin + 72h timelock + distributed guardian (verified 2026-04-30); DFDV/Nasdaq reputational backing; ParaFi/Pantera/Kraken Ventures investor lineup; Accountable TEE-attested PoR feed lifts disclosure quality above peers like Theo. Bumped from prior 5.5. Held back by: no bug bounty, opaque DFDV-vs-Apyx legal structure, unnamed custody partner, no PCAOB-firm sign-off, ~2.5 months in production. |
| **Overall** | **4.7** | Elevated risk — well-audited and properly governed at the contract layer; backing is more diversified and more transparent than the original report indicated; binding constraint remains thin absolute buffer + opaque redemption + young attestation-light operating history (no PCAOB-firm sign-off yet). |

## Who it's for

DeFi-comfortable users with a thesis on Strategy / MSTR / BTC who specifically want a $1-wrapper expression of that exposure on-chain, are willing to size **as a speculative position rather than as core stablecoin holdings**, and can tolerate the ~5% of supply on Curve as the realistic exit path during stress.

## Who should avoid

- Anyone allocating apxUSD as a core stablecoin (replacement for USDC, USDT, savings parking). The risk profile is fundamentally different.
- Anyone needing instant redemption at NAV regardless of conditions — secondary-market discount can widen during stress and the USDC-settlement path is not publicly specified.
- Anyone unwilling to monitor STRC, MSTR, and BTC as part of their stable position. apxUSD is correlated to all three; treating it as uncorrelated stablecoin exposure misreads the structure.
- Position sizing above ~low-six-figure tickets without explicit comfort with a thin secondary market. For larger sizes, the lack of a documented primary-redemption path is the binding constraint.

## What to watch

- **First PCAOB-firm attestation report.** Apyx promised monthly attestations. The first one was due roughly a month ago and has not appeared. Its publication (or continued absence) is the most important pending data point for the protocol's credibility.
- **Curve apxUSD/USDC pool depth and peg.** A widening discount (>50–100 bps) on apxUSD vs $1 is the leading indicator of stress on the secondary path. Pool depth is growing (+38% in 10 days through 2026-05-07) but remains ~5% of supply.
- **STRC ex-dividend dates.** Monthly. Around mid-month. Watch for any dividend miss, rate cut, or suspension by Strategy — that's the most likely path to apxUSD backing stress.
- **MSTR equity behavior under BTC drawdowns.** A 50%+ BTC crash would compress MSTR equity, potentially threatening STRC dividends and par pricing. Stress-test your position assuming this scenario.
- **apxUSD supply trajectory.** ~6× growth in one month without independently verified OC tracking is itself a risk signal. Keep an eye on whether supply continues to scale ahead of attestation publication.
- **apyUSD/apxUSD ratio.** Currently ~34% (apyUSD vault holds ~$103.5M of $307M apxUSD supply). A sharp drop in the ratio signals flight from the yield product (bad sign for residual apxUSD risk-bearers). A sharp rise signals yield-chasing — potentially overheating the STRC capacity.
- **Diversification away from STRC.** Apyx has signaled plans to add other "Digital Asset Treasury" preferred shares (e.g., SATA). Material diversification would meaningfully lower concentration risk; until it lands, treat the backing as a single-name MSTR-preferred wrapper.
- **CCIP bridge configuration changes.** Bridge admin (3-of-6 MAINTAINER Safe) can change rate limits, add chain peers, swap RMN/router, or set the rebalancer instantly with no timelock. Watch for transactions on the apxUSD CCIP pool contracts (`0x0e9cA42B...5BB5` Ethereum LockRelease, `0x49b577E7...24B2` Base BurnMint) if you hold material Base-side exposure. The mass-conservation check (locked-on-ETH = totalSupply-on-Base) is the integrity backstop and was satisfied as of 2026-05-07.

## A note on the apyUSD sibling

The yield-bearing sibling now has its own [apyUSD retail report](/reports/apyusd-retail/). Short version of the relationship:

- apxUSD = $1-pegged stablecoin form, no yield, exit via Curve apxUSD/USDC in minutes
- apyUSD = ERC-4626 vault that captures STRC dividends (~13% APY ongoing); retail-scale exits run in minutes via the Curve apyUSD/apxUSD pool, with a 30-day UnlockToken cooldown as the institutional fallback path
- The two share the same audit stack, same token admin (4-of-6 Safe + 72h), and the same CCIP bridge layer (3-of-6 MAINTAINER Safe, no timelock — see "Cross-chain bridge" section above for details)
- Holding both does **not** diversify — both are claims against the same Apyx + STRC backing. apxUSD bears residual collateral risk uncompensated; apyUSD captures the dividend stream

The week-1 NAV-trajectory anomaly previously flagged here as "investigate before sizing" was resolved by an on-chain investigation 2026-05-07: a one-time ~33% jump from donation-pattern inflows in the first week of operations, then a smooth ~13% APY ongoing — within STRC's indicated-rate range. Detail in the apyUSD retail report.

## Live dashboard

A protocol-level monitoring view is not yet live for Apyx — the backing-monitor stack currently supports crvUSD, OUSD, USDD, FRAX, and the Syrup family. We're tracking Curve pool depth, on-chain supply, and the apyUSD vault NAV manually for now.

## Corrections

This report is based on publicly available documentation and on-chain analysis only — we don't have access to any private information Apyx, DFDV, or the underlying STRC custodian may hold. If anything here is wrong, reach us at **info@tidresearch.com** and we'll correct the next revision.
