---
asset: "AUSD"
slug: "ausd"
aliases: ["AUSD", "Agora Dollar", "Agora USD"]
chains: ["eth", "arb", "avax", "base", "polygon", "bnb", "sol", "sui", "monad"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "full"
audience: "retail"
date: "2026-07-08"
last_verified: "2026-07-08"
featured: false
production: true
issuer: "Agora Finance (Agora Bermuda Limited)"
market_cap_approx: 181000000
peg_mechanism_score: 8.5
backing_score: 8.0
liquidity_score: 6.5
issuer_score: 6.5
overall_score: 6.5
---

# AUSD — Risk Report

**Moderate risk · 6.5/10**

> **A small dollar with big-league backing and unusually good transparency.** AUSD is Agora's fiat-backed stablecoin — reserves managed by VanEck and custodied at State Street, held in a bankruptcy-remote structure, backed only by cash, overnight repos and short-term US Treasuries, with monthly PwC attestations *and* real-time on-chain proof-of-reserves from Chaos Labs. On backing quality and transparency it punches well above its weight. What holds it to a 6.5 rather than higher: it's small (~$180M), young (~2 years), regulated in Bermuda rather than under a US regime like NYDFS, and its reserves run through a single manager and a single custodian — a concentration real enough that one institutional custodian, Anchorage, delisted it. There's also a structural nuance worth knowing: the plain AUSD you hold has no cross-chain bridge risk, but its cross-chain wrapper (AUSD0) does route through LayerZero.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None | Zero-fee instant swap AUSD ↔ USDC/USDT on Agora; sell on a supporting CEX/DEX; institutional 1:1 fiat redemption | Instant atomic swap to USDC/USDT (everyone) + direct fiat redemption (whitelisted institutions) | Since mid-2024 | Native-minted on 17+ chains (Ethereum, Solana, Arbitrum, Avalanche, Base, Polygon, BNB, Sui, Monad…) |

## Summary

AUSD is a fully fiat-backed stablecoin issued by **Agora Bermuda Limited**, backed 1:1 by cash, overnight reverse repos and short-term US Treasuries. Reserves are **managed by VanEck** and **custodied by State Street** in a bankruptcy-remote, segregated structure, with **monthly PwC attestations** and **on-chain proof-of-reserves via Chaos Labs**. It launched in mid-2024 and sits at roughly $181M across 17+ chains.

The 6.5/10 reflects genuinely strong, transparent backing offset by small scale, a roughly two-year record, Bermuda (non-US) regulation, and single-manager / single-custodian concentration. It's worth stating the anchor plainly: AUSD lands just below USDT's 7.0, and from the opposite direction. USDT gets there on deep, everywhere liquidity despite weak issuer transparency; AUSD gets close on strong backing transparency despite thin liquidity. Nearly the same score, opposite shape.

## What you actually earn

**Nothing native** — plain AUSD pays no yield. You can earn on it through DeFi (for example, AUSD Pendle pools on Monad), but that's a separate venue decision with its own risks, not a property of the token itself. Holding AUSD is for people who want a clean, transparent dollar, not a yield instrument.

## What backs it — and why the transparency is a real strength

AUSD is backed 1:1 by **cash, overnight reverse repos, and short-term US Treasuries** — and nothing else. No unsecured commercial paper, no money-market fund shares, no long-duration bonds. This is about as conservative as a fiat-reserve mix gets, and it means the reserves don't carry meaningful interest-rate or credit risk of their own.

The reserves are **managed by VanEck** (a >$100B asset manager) and **custodied by State Street** ($4T+ under custody), in a bankruptcy-remote, segregated account. That structure is designed so AUSD holders' claim on the reserves survives even if Agora itself failed.

What sets AUSD apart from most stablecoins its size is two layers of transparency, not one: **monthly PwC attestations** *and* **real-time on-chain proof-of-reserves via Chaos Labs**. The on-chain PoR is the standout — it's a live, verifiable feed rather than a point-in-time PDF. That's a step beyond USDT (which publishes no on-chain PoR) and even beyond USDC (attestations, but not real-time on-chain proof). This is why AUSD's **backing axis scores 8.0** — the reserves are clean and the proof is genuinely good.

## The concentration caveat

Here's the reason strong backing doesn't carry the score higher. AUSD's reserves depend on a **single manager (VanEck)** and a **single custodian (State Street)**. There is no diversification: if either firm had an operational failure, a legal freeze, or lost access, *all* of AUSD's backing would be affected at once. There's no second manager or second custodian to fall back on.

This isn't a hypothetical concern that only analysts raise. **Anchorage Digital delisted AUSD in June 2025**, citing exactly this concentration. Anchorage is a conservative, regulated custodian, so that's an independent counterparty signal worth weighing — not proof that anything is wrong with the reserves, but a real institution deciding the concentration was more than it wanted to hold.

## How exit works

AUSD's headline exit is a **zero-fee, atomic instant swap to USDC or USDT** on Agora's Stable Swap protocol. This is a very strong peg mechanism: anyone can swap AUSD for USDC/USDT at 1:1 with no fee, instantly, on-chain. That's the tightest peg-arbitrage leash of any sub-$1B stablecoin, and it's what backfills the token's otherwise modest DEX depth — if AUSD ever traded below a dollar, arbitrageurs can swap it back to par all day.

On top of that, **whitelisted institutions can redeem 1:1 directly to fiat**.

The caveat: secondary market depth on DEXes is **thin on most chains** (moderate on Ethereum). So in a stress scenario where the instant-swap mechanism were paused, secondary liquidity would *not* absorb large forced sellers cleanly. The practical rule is to size your position against the assumption that the swap mechanism is live — because when it's live, exit is excellent, and when it isn't, the open market is shallow.

## The two-token structure — AUSD vs AUSD0

This is the one structural nuance every holder should understand, and it's simpler than it sounds. There are two forms of the token:

- **Plain AUSD** — the one you normally hold. It is **native-minted on each chain**, meaning it's issued directly on Ethereum, on Solana, on Arbitrum, and so on. It has **zero cross-chain bridge exposure**: it doesn't connect to any bridge, so no bridge exploit can forge it. This is the cleaner, safer thing to hold.
- **AUSD0** — a separate **LayerZero cross-chain wrapper** used for programmatic bridging between chains. AUSD0's bridge security has been measured and it passes the current bar for what a bridge should require (multiple independent verifiers, using its strongest configuration on its highest-supply routes). It's acceptable — but it is still a bridge, and bridges are a distinct risk class.

**Retail takeaway: hold plain AUSD, not AUSD0, unless you specifically need to move value cross-chain programmatically.** Most holders never need AUSD0 at all.

## A note on chain concentration

A large and growing share of AUSD now lives on **Monad** — roughly 40% of supply as at this report's 2026-07-08 pass, where AUSD is the largest stablecoin, boosted by Pendle yield pools. Treat that share as indicative rather than current: it is a ratio of two figures that both move, Monad is among the AUSD deployments this coverage cannot read directly, and a chain share can drift materially without either underlying number looking unusual. Monad is a young chain. The relevant risk there isn't a bridge exploit (that route rides AUSD0's strongest-secured configuration) but **chain liveness**: if Monad halted, bridging that supply back to Ethereum could be delayed. It's a "how young is the chain" consideration, not a "can the bridge be hacked" one.

## The issuer — Agora

Agora is **doxxed and well-capitalized**: a Paradigm-led $50M Series A, VanEck and State Street as strategic partners, and a team that includes ex-MakerDAO engineers. That's a credible foundation.

The offsets are real, though. Agora is **only about two years old**, and it's regulated under **Bermuda's Segregated Accounts Companies (SAC) Act** rather than a US regime like NYDFS. The Bermuda structure is genuinely bankruptcy-remote, but it's a less-tested enforcement pathway than the US trust structures behind USDC or PYUSD. Standard centralized controls apply — Agora can mint, burn, and freeze the token. For these reasons AUSD scores **below** NYDFS-regulated peers like Paxos (PYUSD) and Ripple (RLUSD) on the issuer axis.

## Track record

Roughly 26 months, and clean: **no depegs, no exploits** on AUSD, AUSD0, or the mint/redeem path, and **no regulatory actions**. That's a reassuring record.

The honest caveat is that this record was built in a **calm regime**. AUSD has not yet been tested through a major stress event — a USDC-style banking crisis, or a problem specific to VanEck or State Street. A clean two-year run in good conditions is a positive signal, but it's not the same as multi-cycle, tested-under-fire proof.

## Audits & security

AUSD's canonical token has been audited by top-tier firms — Cantina/Spearbit, with Certora formal verification, plus Zellic/MoveBit for the Sui build — and carries an Immunefi bug bounty. The AUSD0 wrapper inherits LayerZero's audited reference implementation; Agora's AUSD0-specific audit scope is less clearly documented. The residual risks here are **issuer, concentration and scale — not contract bugs in the canonical token.** But "not a contract bug" is not the same as "not a contract risk," and the upgrade path is worth reading separately.

**The upgrade path has no timelock, on every chain measured.** AUSD is an OpenZeppelin v5 transparent proxy, and on all **nine** chains checked — Ethereum, Arbitrum, Avalanche, Base, BNB, Fraxtal, Gnosis, Monad and Polygon — the ProxyAdmin is owned by a single externally-owned key with no delay anywhere in the path. Signing threshold on-chain is one, and there is no queued-action window: an upgrade can replace the token's logic immediately, with no notice a holder could act on.

**Two limits belong with that, in both directions.** A key with no code is a statement about *the chain*, not about Agora — their off-chain key management is not visible from here, so the on-chain "1" should neither be softened on the strength of Agora's reputation nor presented as proof that one person can act alone. And Agora uses a **different key per chain**, which is genuine containment: a single compromise reaches one deployment rather than all nine. That containment is real and worth crediting, but it is *systemic* rather than *per-holder* — if you hold on Ethereum, the Polygon key being separate does nothing for you.

**This finding is not priced into the 6.5 in this revision.** The score change here is a cohort recalibration of drags the report already named, and the upgrade-path read is new work that has not yet been through a scoring pass. It is published because it is material and verifiable, and it is a live candidate for the Issuer axis at the next revision rather than something already reflected in the number above.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 8.5 | Direct 1:1 institutional fiat redemption plus a zero-fee, atomic AUSD↔USDC/USDT instant swap open to everyone — a very strong arbitrage leash. AUSD's peg does not depend on the AUSD0 bridge. |
| Backing | 8.0 | Cash + reverse repo + short-term Treasuries only; VanEck-managed, State Street-custodied, bankruptcy-remote; monthly PwC attestations plus real-time on-chain PoR (Chaos Labs). Top-tier transparency for its size; docked for single-manager / single-custodian concentration and Bermuda jurisdiction. |
| Liquidity | 6.5 | ~$181M cap; CEX presence (Kraken/Bybit/MEXC) but not Coinbase/Binance; DEX depth moderate on Ethereum, thin elsewhere. The zero-fee instant swap backfills materially, but observed secondary depth is limited and would strain under a stressed large exit. |
| Issuer | 6.5 | Doxxed, well-capitalized (Paradigm Series A; VanEck/State Street partners), ~26-month clean record. Below the NYDFS-regulated cohort (Paxos/Ripple): Bermuda-SAC regulation, short track record, single-manager / single-custodian concentration (Anchorage delisted over it), and AUSD0 documentation opacity. |
| **Overall** | **6.5** | Genuinely strong, transparent backing (on-chain PoR, cash + T-bills, VanEck/State Street) for a newcomer, with a clean record and a bridge-exploit class structurally avoided on canonical AUSD — offset by small scale, ~2-year history, Bermuda (non-US) regulation, reserve-manager concentration, and thin secondary liquidity. Lands just below USDT's 7.0, from the opposite direction: strong backing transparency / thin liquidity, vs Tether's deep liquidity / weak issuer transparency. |

## Who it's for

Holders who value backing transparency — on-chain PoR, clean cash + T-bills reserves, VanEck/State Street — and the zero-fee instant swap, who are comfortable with a smaller, younger, Bermuda-regulated issuer, and who hold **plain AUSD** on a major chain rather than the AUSD0 bridge wrapper.

## Who should avoid

- Anyone needing deep, everywhere liquidity — that's USDC or USDT, not AUSD.
- Anyone who requires US (NYDFS-style) regulation, or diversified reserve managers and custodians — the single-manager / single-custodian setup is a real concentration.
- Anyone needing a censorship-resistant dollar — AUSD is a freezable, centralized-issuer token.

## What to watch

- **Reserve-manager / custodian diversification.** The single-VanEck / single-State-Street concentration is the core structural risk. Diversification, or a re-list by Anchorage, would be a positive signal; further conservative delistings, a negative one.
- **The AUSD↔AUSD0 swap and AUSD0 bridge config.** Hold plain AUSD; if you do use AUSD0, its cross-chain security configuration is the thing to track.
- **Monad concentration.** A large, growing share of supply sits on a young chain.
- **The first real stress test.** AUSD hasn't been through a banking-crisis-style event; how the instant swap and redemption hold up under one is the open question.
- **Regulatory progress.** Agora pursuing US money-transmitter licenses would strengthen the issuer picture.
- **A timelock appearing on the upgrade path.** Today the ProxyAdmin is owned by a plain key with no delay on all nine chains measured. Agora routing that through a timelock or a verifiable multisig would be visible on-chain, and it is the change that would most improve the admin picture described above.

---

*This report is based on Agora's public documentation, PwC attestations, Chaos Labs on-chain proof-of-reserves, and on-chain data through 2026-07-08, with the upgrade-path read taken 2026-08-23. AUSD is a smaller, younger, Bermuda-regulated, centralized and freezable issuer token with single-manager / single-custodian reserve concentration; its supply, chain distribution, and the AUSD0 bridge configuration all shift over time. Corrections or attestation links welcome at info@tidresearch.com.*

*Revision history: 2026-08-23 — Issuer 7.0 → 6.5, overall 7.0 → 6.5. **This is a recalibration, not a new adverse finding: nothing about AUSD deteriorated.** The 2026-07-08 pass had already moved 7.5 → 7.0 to anchor AUSD against the NYDFS-regulated cohort (USDT, USDG, PYUSD, RLUSD, all 7.0); this continues that same anchoring, because tying that cohort outright was still too generous for a roughly two-year-old Bermuda-SAC issuer carrying single-manager and single-custodian concentration. The drags are exactly the ones this report already named — correctly identified, under-priced relative to the cohort. **Backing 8.0 and peg 8.5 are untouched**, and the reserve arrangement described here (on-chain proof-of-reserves, cash and short-dated Treasuries, VanEck as manager, State Street as custodian) remains AUSD's genuine edge and reads better than several assets scoring above it. The USDT comparison is retained rather than removed: it was always load-bearing on the *shape* rather than on the digit, and the shape is unchanged and measured — AUSD backing 8.0 against USDT's 6.0, USDT liquidity 9.5 against AUSD's 6.5. **Separately documented and explicitly not priced into this score:** on all nine chains measured, AUSD's OpenZeppelin v5 ProxyAdmin is owned by a single externally-owned key with no timelock anywhere in the upgrade path. That read is new and has not been through a scoring pass; it is a candidate for the Issuer axis at the next revision. `last_verified` is deliberately **not** bumped — the body still carries its 2026-07-08 figures. 2026-07-08 — Issuer and overall 7.5 → 7.0 on cohort anchoring. Initial production publish.*
