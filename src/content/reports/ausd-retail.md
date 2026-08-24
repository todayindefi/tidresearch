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
last_verified: "2026-08-24"
featured: false
production: true
issuer: "Agora Finance (Agora Bermuda Limited)"
market_cap_approx: 181000000
peg_mechanism_score: 8.5
backing_score: 8.0
liquidity_score: 6.5
issuer_score: 6.0
overall_score: 6.0
---

# AUSD — Risk Report

**Moderate risk · 6.0/10**

> **A small dollar with big-league backing and unusually good transparency.** AUSD is Agora's fiat-backed stablecoin — reserves managed by VanEck and custodied at State Street, held in a bankruptcy-remote structure, backed only by cash, overnight repos and short-term US Treasuries, with monthly PwC attestations *and* real-time on-chain proof-of-reserves from Chaos Labs. On backing quality and transparency it punches well above its weight. What holds it to a 6.0 rather than higher: it's small (~$180M), young (~2 years), regulated in Bermuda rather than under a US regime like NYDFS, and its reserves run through a single manager and a single custodian — a concentration real enough that one institutional custodian, Anchorage, delisted it. There's also a structural nuance worth knowing: the plain AUSD you hold has no cross-chain bridge risk, but its cross-chain wrapper (AUSD0) does route through LayerZero.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None | Zero-fee instant swap AUSD ↔ USDC/USDT on Agora; sell on a supporting CEX/DEX; institutional 1:1 fiat redemption | Instant atomic swap to USDC/USDT (everyone) + direct fiat redemption (whitelisted institutions) | Since mid-2024 | Native-minted on 17+ chains (Ethereum, Solana, Arbitrum, Avalanche, Base, Polygon, BNB, Sui, Monad…) |

## Summary

AUSD is a fully fiat-backed stablecoin issued by **Agora Bermuda Limited**, backed 1:1 by cash, overnight reverse repos and short-term US Treasuries. Reserves are **managed by VanEck** and **custodied by State Street** in a bankruptcy-remote, segregated structure, with **monthly PwC attestations** and **on-chain proof-of-reserves via Chaos Labs**. It launched in mid-2024 and sits at roughly $181M across 17+ chains.

The 6.0/10 reflects genuinely strong, transparent backing offset by small scale, a roughly two-year record, Bermuda (non-US) regulation, single-manager / single-custodian concentration, and an upgrade path with no notice period on any measured chain. It's worth stating the anchor plainly: AUSD sits a full notch below USDT's 7.0, and it gets there from the opposite direction. USDT earns its number on deep, everywhere liquidity despite weak issuer transparency; AUSD's case is strong backing transparency against thin liquidity. **The shapes are still mirror images and the gap is now a notch rather than a rounding** — the contrast is measured, not rhetorical: AUSD backing 8.0 against USDT's 6.0, USDT liquidity 9.5 against AUSD's 6.5.

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

⚠️ **Correction, 2026-08-24 — this report published the opposite of the truth on the containment question, and the correction is not in Agora's favour.**

Until today this section said Agora used *"a different key per chain, which is genuine containment: a single compromise reaches one deployment rather than all nine."* **That is false.** Read across every chain reachable in one batch on 2026-08-24, **six of six return the same ProxyAdmin (`0xb8fcc66d…dedee`) and the same owner (`0x68898B77…30e2`), with zero bytes of code at the owner**: Ethereum, Arbitrum, Base, Polygon, Fraxtal **and Avalanche**.

⚠️ **Scope that precisely: six chains measured on one key, not nine.** Gnosis, BNB and Monad were not reached in that batch, so their owner is not confirmed to be the same key — the separate finding that *every* measured chain lacks a timelock rests on the earlier nine-chain read and is unaffected.

⚠️ **And for an externally-owned account, the same address across chains is not a coincidence — it is necessarily the same private key.** An EOA's address is derived from its public key, so it cannot be independently deployed the way a contract can. (This is the reverse of the situation with contracts: the same *contract* address on two chains is two separate deployments with potentially different owners, which is why this coverage checks them per-chain. For a plain key, one address means one key, full stop.)

**So the containment credit is withdrawn. A single compromise reaches at least six chains, not one.**

⚠️ **One trap worth naming, because it is what nearly kept a softened version of this alive: the Avalanche ProxyAdmin's *bytecode* genuinely does differ from its siblings.** That is true and it is irrelevant. **A distinct contract can be owned by an identical key** — distinct deployment, single key. Codehash and ownership are separate variables, and reading a differing codehash as evidence of a differing key is the same conflation in miniature as reading a shared address as evidence of a shared owner.

**What the Ethereum leg alone looks like, measured:** the token holds **$68.19M** of supply behind an OpenZeppelin **v5** ProxyAdmin whose `owner()` is that bare key, with `pendingOwner()` at the zero address. ⚠️ **`Ownable2Step` is present and does not help** — it makes *transferring* ownership a two-step process; it does nothing to constrain *using* it.

⚠️ **State the quantifier before the count: this is any-of-one, not one-of-n.** There is no quorum here that a single key happens to be a member of. There is one unilateral power, exercisable in a single signature, with no queued-action window.

**The comparison that makes this legible is [USDC](/reports/usdc/), which has the identical shape and the opposite topology.** Circle's upgrade authority is also a bare externally-owned key in a legacy admin slot with no delay — this coverage docked it half a notch for exactly that. **But Circle uses three different keys across three chains, so one compromise reaches one chain. Agora is the inverse: one key, five chains.** Same primitive, opposite blast radius.

**One limit belongs with all of it, and it cuts the other way.** A key with no code is a statement about *the chain*, not about Agora. Off-chain controls around that key — an HSM, an MPC scheme, a policy engine requiring multiple approvals before it signs — are invisible from here and would change the picture materially. **The key is single on-chain.** That should not be softened on the strength of Agora's reputation, and it should not be hardened past what a chain read supports.

⚠️ **Why the score does not move again on this.** The Issuer axis was cut to 6.0 earlier on 2026-08-23 for *"a bare externally-owned key owning the ProxyAdmin on all nine chains measured, with no timelock anywhere in it"* — the axis already priced nine-chain reach. **It was the body that contradicted the axis, by crediting a containment the axis had never assumed.** Correcting the prose brings the two into line rather than establishing a new drag. What would move it further is the reverse: Agora demonstrating that the key sits behind a real approval scheme, or routing the path through a timelock.

**This finding is now priced.** When first published on 2026-08-23 it was documented but deliberately left out of the score, pending a pass that could rank it against comparable findings elsewhere in this coverage rather than scoring it on the one report we happened to measure first. That pass has since run, and the Issuer axis moved **6.5 → 6.0** on it. The discriminating question turned out not to be how many signatures an upgrade needs, but **whether a holder gets a reaction window**: [USDS](/reports/usds/) has the same upgrade capability and is *not* docked, because its path carries a verified 48-hour delay with a cancellation window — though ⚠️ **as of 2026-08-25 that window is known not to be independent**, since schedule and cancel there share one authority, making it notice a holder can act on rather than an interruption a third party can apply; [thBILL](/reports/thbill/) has a 3-of-5 quorum and *is* docked, because it has no notice period at all. AUSD has no delay on any of the nine chains measured, so it falls on the docked side regardless of how the key is held.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 8.5 | Direct 1:1 institutional fiat redemption plus a zero-fee, atomic AUSD↔USDC/USDT instant swap open to everyone — a very strong arbitrage leash. AUSD's peg does not depend on the AUSD0 bridge. |
| Backing | 8.0 | Cash + reverse repo + short-term Treasuries only; VanEck-managed, State Street-custodied, bankruptcy-remote; monthly PwC attestations plus real-time on-chain PoR (Chaos Labs). Top-tier transparency for its size; docked for single-manager / single-custodian concentration and Bermuda jurisdiction. |
| Liquidity | 6.5 | ~$181M cap; CEX presence (Kraken/Bybit/MEXC) but not Coinbase/Binance; DEX depth moderate on Ethereum, thin elsewhere. The zero-fee instant swap backfills materially, but observed secondary depth is limited and would strain under a stressed large exit. |
| Issuer | 6.0 | Doxxed, well-capitalized (Paradigm Series A; VanEck/State Street partners), ~26-month clean record. Below the NYDFS-regulated cohort (Paxos/Ripple): Bermuda-SAC regulation, short track record, single-manager / single-custodian concentration (Anchorage delisted over it), and AUSD0 documentation opacity. **Cut from 6.5 on 2026-08-23**, pricing the upgrade path documented above: a bare externally-owned key owning the ProxyAdmin on all nine chains measured, with no timelock anywhere in it. See the cohort note below the table. |
| **Overall** | **6.0** | **Cut from 6.5 on 2026-08-23, following the Issuer axis.** Genuinely strong, transparent backing (on-chain PoR, cash + T-bills, VanEck/State Street) for a newcomer, with a clean record and a bridge-exploit class structurally avoided on canonical AUSD — offset by small scale, ~2-year history, Bermuda (non-US) regulation, reserve-manager concentration, thin secondary liquidity, and now an undelayed upgrade path. **Overall follows Issuer here because on this report Overall tracks the weakest axis** — it sat at 6.5 when Issuer and Liquidity were both 6.5, and Issuer is now the floor at 6.0. (Contrast [USDT](/reports/usdt/), where Overall is liquidity-weighted and sits above several of its own axes, so an Issuer move there does not carry the composite.) Sits a notch below USDT's 7.0, from the opposite direction: strong backing transparency / thin liquidity, versus Tether's deep liquidity / weak issuer transparency. |

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

*Revision history: 2026-08-24 — ⚠️ **a containment claim published here on 2026-08-23 was the opposite of the truth, and has been withdrawn. No score change.** This report said Agora used *"a different key per chain, which is genuine containment: a single compromise reaches one deployment rather than all nine."* **Measured across every reachable chain in one batch on 2026-08-24, six of six return the same ProxyAdmin and the same owner `0x68898B77…30e2`, with zero bytes of code at the owner** — Ethereum, Arbitrum, Base, Polygon, Fraxtal and Avalanche. **For an externally-owned account the same address across chains is necessarily the same private key**, since an EOA's address derives from its public key and cannot be independently deployed the way a contract can. **So a single compromise reaches at least six chains, not one, and the credit is withdrawn.** ⚠️ **An intermediate version of this correction, live for a few minutes, said five chains with Avalanche separately keyed.** That came from a source note asserting a distinct key on the strength of a **differing codehash** — true, and irrelevant: a distinct contract can be owned by an identical key. **Codehash and ownership are independent variables**, and the batch read settles it at six. Scope held to what was reached: **Gnosis, BNB and Monad were not in that batch**, so their owner is unconfirmed; the separate nine-chain finding that no measured chain carries a timelock is unaffected. ⚠️ **This was the worst class of error on the page: a safety property, stated in Agora's favour, that a reader had no way to check.** It also contradicted this report's own axis, which had priced *"a bare externally-owned key owning the ProxyAdmin on all nine chains measured"* — the body was crediting a containment the score never assumed. Added with it, measured on the Ethereum leg: **$68.19M** of supply behind an OpenZeppelin **v5** ProxyAdmin, `pendingOwner()` at zero, and the note that **`Ownable2Step` makes *transferring* ownership two-step while doing nothing to constrain *using* it**. Stated as **any-of-one rather than one-of-n** — there is no quorum here that a key is one member of. **The contrast with [USDC](/reports/usdc/) is published because it makes the shape legible:** identical primitive — a bare key in a legacy admin slot with no delay, which cost Circle half a notch in this coverage — but **Circle runs three different keys across three chains and Agora runs one across five.** Same construction, opposite blast radius. **The limit is carried in both directions:** off-chain controls around that key are invisible from the chain and would change the picture materially, so the finding is that the key is single *on-chain* — not softened on reputation, not hardened past what a chain read supports. **Scores unchanged** (Issuer 6.0, Overall 6.0): the axis already priced nine-chain reach, so correcting the body brings it into line rather than establishing a new drag. `last_verified` moves to 2026-08-24 for the admin topology, which was re-read; **the reserve, attestation and liquidity material on this page still dates from the 2026-07-08 pass** and is the older half of it. 2026-08-23 (second pass) — **Issuer 6.5 → 6.0, Overall 6.5 → 6.0, pricing the upgrade-path finding this report published unpriced earlier the same day.** A **recalibration, not a new adverse finding**: nothing about Agora changed, the measurement was already on the page, and only its scoring status moved. **The cohort pass that decided it:** six reports in this coverage now have a measured upgrade path. [USDC](/reports/usdc/) (single key, no delay) and [thBILL](/reports/thbill/) (**3-of-5**, no delay, signers undisclosed) are both docked. [USDS and sUSDS](/reports/usds/) hold the *same upgrade capability* and are **not** docked, because their path carries a verified 48-hour delay, no owner backdoor and no bypass role. ⚠️ **Qualified 2026-08-25:** the cancel power on that path is not independent — schedule and cancel share one authority — so the 48 hours is notice rather than interruption. The distinction still holds, because the test was whether a *holder* gets a reaction window, and USDS gives one where the docked cases give none. **So the discriminating variable is the reaction window, not the capability and not the signing threshold** — USDS is the control that proves it, and thBILL shows a real quorum does not offset a missing delay. AUSD has no delay on any of the nine chains measured, so it falls on the docked side. **Overall follows Issuer here** because on this report Overall tracks the weakest axis — it sat at 6.5 when Issuer and Liquidity were both 6.5, and Issuer is now the floor; on [USDT](/reports/usdt/), whose Overall is liquidity-weighted and sits above several of its own axes, the same finding moved Issuer without moving Overall. The USDT comparison is restated once more: the gap is now a full notch rather than a rounding, but the mirror-image shape is unchanged and still measured — AUSD backing 8.0 against USDT's 6.0, USDT liquidity 9.5 against AUSD's 6.5. `last_verified` is **not** bumped; no new measurement was taken. 2026-08-23 — Issuer 7.0 → 6.5, overall 7.0 → 6.5. **This is a recalibration, not a new adverse finding: nothing about AUSD deteriorated.** The 2026-07-08 pass had already moved 7.5 → 7.0 to anchor AUSD against the NYDFS-regulated cohort (USDT, USDG, PYUSD, RLUSD, all 7.0); this continues that same anchoring, because tying that cohort outright was still too generous for a roughly two-year-old Bermuda-SAC issuer carrying single-manager and single-custodian concentration. The drags are exactly the ones this report already named — correctly identified, under-priced relative to the cohort. **Backing 8.0 and peg 8.5 are untouched**, and the reserve arrangement described here (on-chain proof-of-reserves, cash and short-dated Treasuries, VanEck as manager, State Street as custodian) remains AUSD's genuine edge and reads better than several assets scoring above it. The USDT comparison is retained rather than removed: it was always load-bearing on the *shape* rather than on the digit, and the shape is unchanged and measured — AUSD backing 8.0 against USDT's 6.0, USDT liquidity 9.5 against AUSD's 6.5. **Separately documented and explicitly not priced into this score:** on all nine chains measured, AUSD's OpenZeppelin v5 ProxyAdmin is owned by a single externally-owned key with no timelock anywhere in the upgrade path. That read is new and has not been through a scoring pass; it is a candidate for the Issuer axis at the next revision. `last_verified` is deliberately **not** bumped — the body still carries its 2026-07-08 figures. 2026-07-08 — Issuer and overall 7.5 → 7.0 on cohort anchoring. Initial production publish.*
