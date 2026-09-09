---
asset: "USDG"
slug: "usdg"
aliases: ["USDG", "Global Dollar"]
# ⚠️ ALL SIX DEPLOYMENTS. `chains` is a JOIN KEY, so an unlisted chain reads as
# absent — this listed two of six while the LARGEST (X Layer, 49% of supply) was
# missing and the body discussed it three times. Slugs agreed with riskAnalyst
# 2026-09-08; `xlayer` and `ink` were new to the corpus and are established here.
# ⚠️ Display and filtering only on this side: adding a chain here emits no score.
# `chain_overrides` is separate and explicit, so nothing inherits a default.
# ⚠️ SEVEN, not six. `mantle` was added 2026-09-09 after Paxos' own published
# deployment set showed a chain NEITHER repo tracked. It is listed here only
# because its supply has been READ (501,103.50) — a declared-but-unmeasured
# chain enters every chain-keyed join as a zero, which is the failure this list
# exists to avoid.
chains: ["eth", "solana", "hood", "xlayer", "ink", "arb", "mantle"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
date: "2026-07-08"
last_verified: "2026-07-08"
# ⚠️ 2026-09-08 re-measured the six-chain supply distribution and the chains
# list.  HOLDS at 2026-07-08 — the backing, issuer and structural
# material was not re-read.
# ⚠️ REFRESH IN PROGRESS — usdg is first in the 2026-09-09 walk and is NOT DONE.
# ⚠️ Backing 7.5 and Issuer 7.5 were RE-MEASURED 2026-09-09 and both HELD — but
# held is not the same as settled. Backing: the attestor moved Enrome -> KPMG on
# 2026-02-27, a real improvement, not moved UP on one favourable fact. Issuer:
# TWO OPEN QUESTIONS, both unresolved rather than adverse — which Paxos
# Singapore entity holds the MPI licence, and whether the MAS stablecoin
# framework is in force over USDG. A score should not move on the average of two
# unresolved possibilities.
# ⚠️ Price on the entity question: one lookup each in MAS' Financial Institutions
# Directory. A third-party register returned HTTP 403 on riskAnalyst's attempt —
# a REFUSED read, not an absence, and it must not settle the question by default.
# ⚠️ `last_verified` HOLDS at 2026-07-08 DELIBERATELY. Backing 7.5 and Issuer 7.5
# are still 63 days unverified, and Liquidity 6.5 is explicitly NOT re-derived —
# a fresh stamp over an unmeasured axis is the false-fresh signal the field
# exists to prevent. Do not bump it until those three are measured.
# ⚠️ MIGRATED to axis_frame: six on 2026-09-09, during this refresh — on policy
# (existing assets migrate at their next refresh, not in a separate pass).
# Both missing axes are BLOCKED rather than skipped, and both blockers have
# CHANGED rather than cleared, so re-read the reasons before assuming staleness:
#   axis 4 Dependencies — the old blocker (is X Layer USDG Paxos-issued or
#     bridged?) IS ANSWERED: all six EVM legs are upgradeable proxies, one
#     timelock template, no supplyController. What blocks it now is SOLANA at
#     17.8% of supply, which is where the dependency graph actually differs
#     (SPL mint authority vs an EVM timelock), plus two open MAS entity
#     questions that feed Issuer and this axis together.
#   axis 5 Contract & Admin — the six-chain EVM walk IS DONE (2026-09-09): one
#     signing address holds proposer/executor/canceller on all six timelocks
#     AND pause + asset-protection directly on all six tokens. riskAnalyst
#     scored 4.0 EVM-scoped on the timelock finding alone; that was returned
#     for re-derivation because the pause/freeze legs carry NO delay, which is
#     a different finding from the one the 4.0 priced. ⚠️ SOLANA IS NOW READ TOO
#     (2026-09-09) and is the WORST leg, not the missing one: permanentDelegate
#     and freeze on a bare keypair that is also a signer on a ONE-of-four mint
#     multisig, so that key reaches minting as well. Any number predating that
#     read is scoped to six chains and must not be published as if it were seven.
last_revised: "2026-09-09"
featured: false
production: true
issuer: "Paxos Digital Singapore"
market_cap_approx: 3320823580
peg_mechanism_score: 8.0
backing_score: 7.5
liquidity_score: 5.5
issuer_score: 7.5
overall_score: 6.5
structural_score: 2.0
axis_frame: six
axis_exemptions:
  - axis: "4 Dependencies"
    reason: "⚠️ The Solana blocker CLEARED 2026-09-09 — all seven chains are now read, and Solana proved to be the strongest authority set rather than an unknown. What remains open on this axis is the two MAS entity questions (which Paxos Singapore entity holds the MPI licence, and whether the MAS stablecoin framework is in force), which feed Issuer and Dependencies together. Expect a number."
---

# USDG — Risk Report

**Moderate risk · 6.5/10**

> **A high-quality dollar from a supervised issuer, with a smaller-but-growing footprint.** USDG (Global Dollar) is issued by Paxos — the same regulated issuer behind PYUSD and USDP — through its Singapore entity, and it's backed 1:1 by cash and short-term US Treasuries held in segregated, bankruptcy-remote accounts at DBS Bank and Standard Chartered, with monthly attestations. On backing and issuer quality it sits in the top tier. What holds it to a 7.0 is liquidity: it has grown fast to a top-30 asset (roughly 3x in its first stretch, now around $3B-plus), but its secondary-market and DeFi depth still sit well below USDC and USDT. The other thing that makes USDG distinctive is its business model — it shares its reserve income with the platforms that drive its adoption, the "Global Dollar Network."

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None to holders (reserve income is shared with Global Dollar Network partners, not token holders) | Sell on a supporting CEX/DEX at peg; institutional 1:1 redemption via Paxos | Mint/redeem 1:1 with Paxos (institutional); retail exits via secondary market | Since Nov 2024 | Ethereum + Solana |

## Summary

USDG is a US-dollar stablecoin issued by **Paxos Digital Singapore Pte. Ltd.**, a MAS-supervised entity within the Paxos group. It is fully redeemable 1:1 from Paxos, backed by cash, cash-equivalents, and short-duration US government securities held in segregated, bankruptcy-remote accounts — custody split between DBS Bank and Standard Chartered — with **monthly Paxos reserve reports and attestations**.

It launched in November 2024 and has grown quickly to become a top-30 asset (currently around $3B-plus; check a live source such as [CoinGecko](https://www.coingecko.com/en/coins/global-dollar) for the up-to-date figure). **That is a cross-chain aggregate, and USDG is unusually concentrated away from Ethereum** — the Ethereum leg read 447,300,985 on 2026-08-23, only about 15% of the asset. An Ethereum-only figure is not a usable proxy for USDG's size — **Ethereum is 15% of it.**

**The 6.5 reflects top-tier regulated backing and issuer quality, an adoption/liquidity discount, and — from 2026-09-09 — the operational-control finding set out below.** ⚠️ **It no longer lands at the same headline as USDT.** The contrast with USDT still holds on the axes it was written about: USDG has stronger issuer transparency and backing disclosure, and thinner liquidity. **What separates them now is a different axis entirely** — USDG's backing and issuer remain the stronger of the two, and its on-chain control structure is the weakest in this band.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 8.0 | Direct Paxos 1:1 mint/redeem with a regulated reserve model; institution-gated redemption backfilled by partner-exchange liquidity plus arbitrage. |
| Backing | 7.5 | Cash + short-duration US government securities + cash-equivalents in segregated, bankruptcy-remote accounts at DBS Bank and Standard Chartered. ⚠️ **Monthly attestations, and the attestor is now named rather than implied: KPMG LLP since 2026-02-27, Enrome LLP before it — under ISCA standards, which is an attestation and not a PCAOB or AICPA audit.** Top-tier reserve quality; a notch below USDC only for monthly (vs more frequent) transparency and the Singapore-entity structure. |
| Liquidity | **5.5** | **Scored on measured executable depth, not on size.** 2% down-depth is **$18,506,051 — 0.557% of supply** across 98 venues, with the entry side 3× deeper than the exit side. ⚠️ **A single pair, OKX USDG/USDT, is 61.4% of all down-depth, and OKX's own chain carries 47.98% of supply** — the dominant exit and the dominant host are one counterparty, which moving chains does not diversify. Argued under [3 · Liquidity & Exit](#3--liquidity--exit--55) |
| Issuer | 7.5 | **Examined 2026-09-09 and held — but held as a priced concession rather than an unexamined match, which is worth stating.** ⚠️ **The issuer of USDG is Paxos Digital Singapore, a MAJOR PAYMENT INSTITUTION supervised by MAS. It is not the entity behind PYUSD and USDP** — those come from **Paxos Trust Company**, which holds an **NYDFS limited-purpose trust charter.** Same group, different company, different regulator. ✅ **PDS's licence was verified in MAS' own Financial Institutions Directory in its own right** rather than inferred from the affiliate, alongside reserves at two named banks and **monthly KPMG attestation under ISCA standards since 2026-02-27**. ⚠️ **Every other issuer at 7.5 on this site holds a trust charter, and a payments licence is a class below one** — so 7.5 sits at the top of what this entity's regime supports rather than comfortably inside it. **It is not cut to 7.0 because that rung is occupied by an essentially unregulated issuer, and flattening a licensed, supervised, examined entity into that band would assert something more wrong than the half-notch it corrects.** Standard centralized-issuer controls (freeze, compliance) and a short USDG-specific history |
| Contract & Admin | **2.0** | **Set 2026-09-09 across all seven chains, and this axis is the reason the overall moved.** ⚠️ **One signing address holds propose, execute and cancel on all six EVM timelocks, plus pause and asset-protection directly on all six tokens, plus — on Solana — freeze, permanent delegate, mint-close and transfer-hook authority while sitting as a signer on a mint multisig whose threshold is one.** There is **no on-chain quorum anywhere across seven chains**, and the Solana leg adds minting, which no EVM leg grants. ✅ **Not lower, and this matters as much as the finding: these capabilities are category-normal.** USDC's masterMinter can mint and its blacklister can freeze; every regulated fiat stablecoin has a mint path and a seize path. **The capability is not the finding — its custody is.** ✅ **Also holding the score up:** the EVM upgrade path does carry a real 24-hour floor, `DEFAULT_ADMIN` genuinely sits at the timelock so role grants are delayed, and off-chain custody of these keys is **unverifiable rather than absent** |
| **Overall** | **6.5** | **Set on operational control rather than on backing or issuer.** A high-quality, regulated, well-reserved centralized dollar, held back by an adoption/liquidity discount versus USDC and USDT **and now by the weakest on-chain control structure of any asset in this band.** ⚠️ **Neither Backing nor Issuer moved** — the reserves are real, bank-held and attested, and Paxos remains an established issuer. **What moved is the gap between those two facts and what the contracts actually enforce.** ✅ **Held at 6.5 rather than cut further, against our own anchors:** USDG holds attested cash and short-duration government securities at named banks, and scoring it below a synthetic basis-trade asset would tell a reader something false about the two |

## 1 · Stability — 8.0

**USDG is redeemed 1:1 by Paxos against a regulated reserve**, and that direct mint-and-redeem path is what holds the peg rather than any on-chain mechanism — there is no algorithmic stabiliser, no collateral auction and no rebasing. ⚠️ **Primary redemption is institution-gated**, so a retail holder does not use it directly; the peg reaches retail through partner-exchange liquidity and arbitrage against that redeemable floor. ✅ **That is a strong design, and the 8.0 reflects it** — the mechanism's weak point is not the peg but the *access* to it, which is priced on Liquidity & Exit below rather than here.

## 2 · Backing — 7.5

USDG is backed 1:1 by **cash, cash-equivalents, and short-duration US Treasuries**, held in **segregated, bankruptcy-remote accounts** at DBS Bank and Standard Chartered — two reputable global custodians. Paxos publishes **monthly attestations** of the reserves.

This is a genuinely high-quality reserve profile.

✅ **The attestor changed, and it is an upgrade: reports posted on or after 2026-02-27 are issued by KPMG LLP.** Everything before that was **Enrome LLP**, a small Singapore practice — so the only third-party check that exists for these reserves moved to a Big Four firm.

⚠️ **Read that with its limit attached, because "KPMG" invites a stronger reading than the engagement supports.** Both the Enrome and the KPMG examinations are conducted under **ISCA standards** (Institute of Singapore Chartered Accountants) — **not PCAOB, not AICPA.** ⚠️ **An attestation is not an audit under any of those regimes**, and the change of firm does not import a US audit standard the engagement never carried.

⚠️ **Worth naming why this report could not have told you any of that until now: it said "monthly attestations" and never said by whom.** That sentence was equally true before and after the change. **A rationale that stays true across a material event is not a robust rationale — it is one that cannot report.**

The knock relative to USDC is narrow and specific: attestation is *monthly* rather than USDC's more frequent reserve-fund reporting, and USDG runs through Paxos's **Singapore (MAS) entity** rather than a US trust. Neither is a reserve-quality concern — the assets behind USDG are conservative and well-custodied. They're transparency-cadence and jurisdiction points, not composition risks.

The "bankruptcy-remote" and "segregated" language matters more than it looks. It means the reserves are legally structured to be held apart from Paxos's own corporate balance sheet, so in a Paxos insolvency they are intended to belong to USDG holders rather than to Paxos's general creditors. This is the same reserve-protection posture Paxos uses across its regulated products, and it's a meaningful step above stablecoins that simply hold reserves as an ordinary corporate asset. The residual dependency is on the custodians themselves — DBS Bank and Standard Chartered are both large, well-rated global banks, which is about as strong as bank-custody counterparty risk gets for a stablecoin.

## 3 · Liquidity & Exit — 5.5

**This axis is scored on measured executable depth**, read across 98 venues reporting a usable two-percent book on 2026-09-09.

⚠️ **Not higher, and the reason is not the size of the book but what fails together.** A $18.5M two-percent book across 98 venues is real breadth, and a holder at retail or low-institutional size exits without difficulty. **But the single deepest pair is 61.4% of all down-depth, and it sits at OKX — whose own chain, X Layer, carries 47.98% of supply.** ✅ **The depth figure answers how much can leave at two percent; it cannot express what fails together.** **Capacity and correlation are different quantities, and this concentration is not diversifiable by moving chains**, because moving chains does not move the counterparty.

✅ **Not lower**, because the book is genuine, the venue count is real breadth, and nothing here describes a market a normal holder cannot exit.

⚠️ **One thing to know before comparing this number to others on this site.** **Only five of thirty-three published Liquidity scores rest on a measured depth figure** — this one, syrupUSDC, syrupUSDT, ZCHF and reUSDe. **USDT at 9.5, USDC at 9.5, USDS at 8.5 and USDe at 7.0 are size proxies or unstated bases.** ✅ **So the distance between this 5.5 and USDC's 9.5 is not evidence that USDG is four points worse at exit — it is evidence that one of the two was actually measured.** **That is a defect in the ladder rather than in either asset**, and the rest of the ladder is being reworked onto the same basis.

| | measured | share of the $3.32B supply |
|---|---:|---:|
| **2% down-depth (the exit side)** | **$18,506,051** | **0.557%** |
| 2% up-depth | $55,464,129 | 1.670% |
| — of which centralized venues (22) | $14,650,780 | |
| — of which on-chain venues (76) | $3,855,271 | |

⚠️ **Three things in that table matter more than the headline number.**

**Exit depth is thin against the float.** About **half a percent** of supply can leave within two percent of par. **That is a real constraint at size**, and it is invisible in a market-cap reading — which is precisely why the old basis flattered this axis.

⚠️ **The book is asymmetric, and it leans the wrong way for a holder.** Up-depth is **three times** down-depth. **Buying USDG is materially easier than selling it**, and an exit score should be written on the side that is thinner.

⚠️ **And the exit is concentrated in the same counterparty that hosts the asset.** **A single pair — OKX's USDG/USDT — is 61.4% of all measured down-depth.** Set that beside the distribution above: **X Layer, OKX's own chain, carries 47.98% of supply.** ✅ **Neither figure alone says anything alarming.** **Together they say that the largest host of USDG and the dominant route out of it are the same party** — so a venue problem and a chain problem would not be independent events.

✅ **One venue was excluded and the exclusion is stated rather than made silently.** A Uniswap V4 pool on Robinhood Chain reported a two-percent depth of roughly **$3.03 × 10²³** — some nine quadrillion percent of the asset's entire supply. **It is excluded on the principle that two-percent depth cannot exceed the supply of the thing being quoted.** ⚠️ **Aggregating it would have produced a confident figure to four significant digits that was nonsense**, and the aggregate above is the only one on this page that a reader should use.

**What the qualitative picture below still gets right** is the mechanism: institutions mint and redeem 1:1 with Paxos, retail exits on secondary venues, and arbitrage between the two is what holds the peg for holders without a redemption line. **The measurement does not contradict that. It prices how much of it is available at once.**

### How exit works in practice

Institutions mint and redeem USDG 1:1 directly with Paxos. Retail holders exit through the **secondary market** on supporting venues — the major exchanges that list it. Because direct redemption is institution-gated, retail peg stability leans on partner-exchange liquidity plus arbitrage: when the token drifts from a dollar, institutions with a redemption line have the incentive to close the gap.

In practice that's a solid mechanism — tighter than a thin, unknown stablecoin — but looser than USDC or USDT, where secondary depth is enormous almost everywhere. Your practical exit quality with USDG depends more on *which* venue you're on and whether it's an active Global Dollar Network participant.

## What you actually earn

**Nothing as a plain holder.** USDG pays no yield to token holders. Its distinguishing economic feature is that reserve income is **shared with Global Dollar Network partner platforms** — exchanges and wallets that integrate and promote it — rather than with the person holding the token. If you want yield on USDG, you'd lend it or use a partner incentive program, not simply hold it. Treat the token itself as a cash instrument, not a savings product.

## 4 · Dependencies — not rated

⚠️ **This axis carries no number, and the reason is set out under the Score breakdown above.** What follows is the measurement it would be scored on.

**Measured across the full deployment set 2026-08-23.** Paxos publishes the complete list of USDG mainnet deployments, which is what makes this measurable rather than estimable. Every row below returned `symbol() = "USDG"` and `decimals() = 6`, so these are the right tokens rather than addresses that merely answered, with USDC controls passing in the same batch:

⚠️ **All seven deployments, every one read on 2026-09-09** — a single as-of date, so no share below is the product of comparing chains measured on different days.

| chain | supply | share |
|---|---:|---:|
| **X Layer** | **1,593,188,137.00** | **47.98%** |
| Robinhood Chain | 699,787,565.23 | 21.07% |
| Solana | 589,775,089.71 | 17.76% |
| Ethereum | 376,228,399.62 | 11.33% |
| Ink | 60,742,042.65 | 1.83% |
| Arbitrum | 601,242.52 | 0.02% |
| Mantle | 501,103.50 | 0.02% |
| **total** | **3,320,823,580.23** | 100% |

**Paxos publishes a canonical deployment list, and this table is measured against that list rather than against the chains any one source happens to surface.** ⚠️ **That matters more than it sounds: a chain list grown by discovery is complete only by luck, and an unlisted deployment reads as a zero in every chain-keyed comparison rather than as a gap.**

✅ **Mantle is 0.02% of supply, so no conclusion on this page turns on it.** The point is not the half-million dollars; it is that **the total was published as a total when it was a floor.**

**All six deployments are read, so this is a complete measurement rather than a floor** — $3.387B against a published "around $3B-plus". **Read it as corroboration of the headline figure, with the bonus of knowing where the supply actually lives.**

**The distribution is the finding, and it is worth stating plainly.** **X Layer — OKX's chain — carries 47.98% of USDG**, short of an outright majority though close to it, and down from a reading above 55% a fortnight ago. ⚠️ **Robinhood Chain is now second at 21.07%**, having roughly doubled its share in that window. ⚠️ **Ethereum — the chain most readers assume this asset lives on — is FOURTH at 11.33%**, behind Solana's 17.76% as well.

**The structural discussion in this report is written as though Ethereum were USDG's centre of gravity, and it is not.** Roughly **seven dollars in ten sit on X Layer or Robinhood Chain**, so most holders carry those chains' liveness, sequencer and bridge assumptions rather than Ethereum's. ⚠️ **That is a factual property of where the token sits, not evidence of a problem with it** — but it is a materially different picture from an Ethereum-centred one, and it is the picture the rest of this page has not yet been rewritten around. USDG also still sits behind USDC and USDT on secondary-market liquidity and DeFi integration, and its distribution is consortium-led: the Global Dollar Network shares reserve yield with the exchanges and wallets that drive adoption.

### The Global Dollar Network model

This is the distinctive structural point, and worth understanding before you hold USDG. The token is built around **sharing reserve economics with adoption partners** — the exchanges and wallets that integrate it.

- **The upside:** partners have a direct financial incentive to list USDG, provide liquidity, and promote it. That's what's fueling the fast growth.
- **The trade-off:** adoption is **partner-led and uneven**. Depth concentrates where partners are active, and the health of the network is a genuine variable for USDG's liquidity — more so than for an issuer-funded distribution model like USDC's, where the issuer bears the cost of ubiquity directly.

So USDG's liquidity isn't just "how big is it" — it's "how healthy and broad is the partner network." That's the swing factor for the score. It also means USDG's growth story and its risk story are the same story: the consortium model is what has taken it to a top-30 asset in well under two years, and it's also the thing that could stall or concentrate the token's liquidity if partner incentives change. Watch the network, not just the market cap.

## 5 · Contract & Admin — 2.0

**Every USDG deployment is an upgradeable proxy, and Paxos' issuance path is not in any of them.**

### The architecture, measured on all six EVM chains

⚠️ **Read on-chain 2026-09-09 across all six EVM deployments — 82.2% of supply — and they are architecturally identical.** This is not a quirk of one chain.

| chain | upgradeable proxy | `supplyController()` | owner | delay |
|---|---|---|---|---:|
| X Layer | yes | **reverts** | contract | 24h |
| Robinhood Chain | yes | **reverts** | contract | 24h |
| Ethereum | yes | **reverts** | contract | 24h |
| Ink | yes | **reverts** | contract | 24h |
| Arbitrum | yes | **reverts** | contract | 24h |
| Mantle | yes | **reverts** | contract | 24h |

**On every one of them:** the token is an **EIP-1967 upgradeable proxy** — its code can be replaced; **`supplyController()` reverts**, so the function Paxos uses to issue its own tokens is absent; the standard bridge accessors (`l1Token`, `remoteToken`, `bridge`, `l2Bridge`) also revert, so these are not conventional bridge-minted tokens either; and `owner()` is **a contract rather than a plain key**, holding a **24-hour timelock**.

⚠️ **Each chain has a different owner contract — and all six share one identical codehash**, `e616a4f6…c554b`, verified 2026-09-09 by hashing each chain's deployed runtime. ✅ **That is the strong form of the claim and it matters: identical byte-count would prove nothing** (unrelated contracts can share a length), **whereas an identical codehash across six chains is one template deployed six times, not six independent implementations.**

**Each is a standard OpenZeppelin `TimelockController`** — the `PROPOSER_ROLE`, `EXECUTOR_ROLE` and `CANCELLER_ROLE` identifiers match OZ's exactly.

### Who holds the keys

⚠️ **The codehash narrowed the question to "one deployer, occupants unknown" — because roles inside a `TimelockController` are per-deployment state, not code. A direct role read has now answered it, and the answer is one address.**

⚠️ **`0x3af3e85f…024b` holds `PROPOSER_ROLE`, `EXECUTOR_ROLE` and `CANCELLER_ROLE` on all six EVM timelocks.** Each role was queried against each chain's own timelock on 2026-09-09: **eighteen checks, eighteen true.** ✅ **Every one was paired with a control address that should not hold the role, and every control returned false** — so the check discriminates rather than answering true to anything put in front of it. On Ethereum the timelock's creation transaction agrees: the constructor granted all three roles to that same address at deployment.

⚠️ **The same party proposes, executes and cancels — so there is no independent veto.** Those three roles are the entire separation of duties in this design: a proposer who cannot execute has to persuade someone else, and a canceller held elsewhere can stop a queued action before it lands. **Held together, they collapse the compromise threshold to one.** The six chains beneath that address carry **$2.73B — 82.24% of all USDG.**

⚠️ **What that address actually is — and this genuinely cuts both ways.** It has **zero code on all six chains**, which establishes one thing precisely: **there is no on-chain multisig.** Nothing on any of these chains requires a second signature. ✅ **But zero code does not mean one person with one seed phrase.** An externally-owned address can be driven by threshold signing — **MPC, or an HSM quorum at a custodian** — where several people must approve before a signature is ever produced. **That machinery lives off-chain, and a chain cannot see it.** It is also the normal arrangement at a regulated issuer, so it is a live possibility here rather than a courtesy caveat. **The accurate statement is therefore: a single signing address with no on-chain quorum, whose off-chain key custody is unpublished and cannot be verified from outside.** ⚠️ **Do not read that as "one employee could do it" — and do not read it as safe.** What is measurable is that the on-chain protection is absent; whether an off-chain one exists is a question only Paxos can answer.

### What that authority reaches — and what it does not

**What the key reaches, and what it does not.** These are upgradeable proxies, so replacing an implementation changes what the token does for every holder on that chain. ✅ **It does not reach the reserves.** Paxos holds those off-chain and this authority does not touch them. **On the EVM legs this is an upgrade path, not a reserve path** — the holder does not carry `SUPPLY_CONTROLLER_ROLE`, so it cannot mint.

⚠️ **That statement is true of the EVM chains and must not be generalised to the asset**, because the Solana leg below breaks it: **the key that holds the emergency powers there can also mint.** ✅ **The reserves themselves are unaffected either way** — they are real, bank-held and attested, and the Backing score stands on that. **But backing integrity is not only a question of reserves that exist; it is also a question of supply that should not.** Unbacked issuance is detectable after the fact rather than prevented, so the custody of that key is part of the backing picture even though it never touches a bank account.

⚠️ **It is also not only an upgrade path.** The same address holds two roles **directly on the token itself, outside the timelock entirely**: `PAUSE_ROLE` and `ASSET_PROTECTION_ROLE`. **Measured on all six EVM chains, unanimous.** ✅ **The controls were run on both dimensions this time** — a fabricated role name returns false, and a control address returns false, on every chain — so neither the role nor the holder is being waved through. The machinery is live on the deployed implementation: `isFrozen` answers, and `paused()` answers and currently reads false.

### The emergency powers include seizure, not only a halt

⚠️ **And the emergency powers include seizure, not only a halt.** `wipeFrozenAddress` is present on the live implementation and gated on the role this address holds, so the sequence **freeze an address, then wipe its balance** is available to it — **immediately, with no timelock and no second party.**

✅ **How that was established, because the raw result reads as the opposite.** Simulated calls were run with the sender set to the role holder and to a control address; nothing was signed and no state was changed. From the control, `wipeFrozenAddress` returns an **`AccessControl`** error. From the holder it does not — it fails the *next* check instead, because the address supplied was not frozen. ⚠️ **The control that makes this conclusive is a function that cannot exist:** invented selectors revert with **no reason string at all**, so an `AccessControl` error is only reachable on a function that is really there. **A bare revert from the holder is the access check passing, not the function being absent** — and read without that control it would have looked like an absence. `freeze` succeeds from the holder outright.

✅ **Being able to freeze and seize is not itself the finding, and it should not be read as one.** Every major regulated dollar stablecoin has this power, and an issuer that could not freeze stolen or sanctioned funds would be a worse counterparty, not a better one. **The finding is the control structure around it:** the power sits at **one signing address**, with **no delay**, **no second party**, and **no separation from the upgrade key** — the same address on both sides.

### What the 24-hour delay does and does not cover

⚠️ **So the 24-hour delay does not cover the fastest powers.** The timelock governs **upgrades**. Pause and asset protection are **immediate**, they are held by **the same single signing address**, and a pause stops transfers for everyone on that chain in one transaction. **The holder of an upgrade key and the holder of the emergency key are not separated here; they are the same address.**

✅ **The 24 hours is a real floor — for what it actually covers.** Because these are stock OpenZeppelin, `updateDelay` is `onlySelf`: **shortening the delay must itself wait out the current delay**, so it cannot be dropped to zero on the way to doing something else. **An implementation change is therefore visible on-chain for a day before it can take effect.** That protection is genuine and it is worth having. ⚠️ **But state its scope exactly: it applies to the upgrade path and not to pause or asset protection**, which need no proposal and no wait.

⚠️ **One limit on all of the above, stated rather than buried: this is current state, not history.** The role holders were read live on the day. **Whether these roles have ever moved could not be established** — the contracts are not `AccessControlEnumerable`, so members cannot be enumerated, and an attempt to scan role-change events across the deployment range **was refused on every chunk requested.** ✅ **A refused read is not a clean history.** Nothing here says the roles have never changed hands; only that today's holder is measured.

✅ **Those reverts are measured absences, not silence.** On each chain, symbol, name, decimals, total supply, owner and the delay all answered in the same pass. **A function that reverts while its neighbours answer is evidence; a contract that answers nothing is unreachable, and none of these was.**

⚠️ **What this does and does not say.** It does **not** say USDG is unbacked or that Paxos is not the issuer. ✅ **Paxos publishes every one of these addresses as canonical USDG in its own developer documentation**, including the X Layer deployment, so these tokens sit inside the perimeter the issuer claims and attests against. **What it says is narrower and still worth knowing: the on-chain issuance and upgrade path is not the one a reader infers from "issued by Paxos", and the fastest powers over a holder's balance answer to a single signing address with no delay in front of them.**

### Paxos' own documentation names different addresses

⚠️ **One further mismatch, reported as a fact and not as an accusation.** Paxos' own USDG contract repository publishes a role table naming `DEFAULT_ADMIN_ROLE` at `0x137Dcd97…0713` and `PAUSE_ROLE` and `ASSET_PROTECTION_ROLE` at `0x0644Bd02…5D33`, with the assurance that *"the addresses above utilize multisignature contracts"* requiring *"a quorum of signers in the same physical location."* ✅ **That assurance is not empty, and it is stronger than it needed to be.** Both addresses were read on-chain on 2026-09-09: each reports `threshold()` of **3** over **8 distinct signers** — genuine **3-of-8 quorums**, deployed and working, exactly as described. ⚠️ **Neither holds any role on USDG.** Every role query against both returns false, while the same queries identify the timelock as `DEFAULT_ADMIN_ROLE` and the single signing address as the pause and asset-protection holder. ✅ **The benign reading is that the table predates a migration and was not updated** — plausible, and we cannot exclude it.

⚠️ **This is also as far as the issuer's published material takes the custody question, and it is worth saying exactly where it stops.** Paxos' documented mechanism for these roles is an **on-chain multisig taking a threshold of detached signatures**, with signers required to be in the same physical location. **Multi-party computation is not a variant of that** — it produces a single signature from a single address, which would make an on-chain quorum redundant — and nothing Paxos publishes describes any arrangement in which one address holds this authority alone. ✅ **So off-chain MPC or HSM custody of the live key remains possible and is not supported by anything the issuer publishes.** ⚠️ **That is not evidence it is absent.** Firms do not publish operational key custody, and treating silence as an answer would be the same error as reading a failed lookup as a finding. **It moves the benign reading from an equal alternative to an unsupported possibility, and no further.** **Either way, a reader who checks the issuer's own repository today is told these powers sit behind an in-person multisig quorum, and on-chain they do not.**

### Solana was read on 2026-09-09, and it is the strongest set of powers on any USDG chain

⚠️ **The EVM pattern does not carry onto Solana, and the difference runs against the holder: Solana is not similar, it is worse.**

**The mint is `2u1tszSe…jGWH`, on Token-2022 rather than the classic SPL token program.** ✅ **Identity established by what it points back to** rather than by trusting an address: it reports metadata name **"Global Dollar"**, symbol **USDG**, six decimals, and a supply of **589,224,349.94** — matching the 589,775,089.71 in the distribution table above, read minutes apart.

| authority | holder | shape |
|---|---|---|
| `mintAuthority` | `3YJL8ses…bhxR` | a Token-2022 multisig account — **but see below** |
| `freezeAuthority` | `2apBGMsS…YJjk` | plain account, no code |
| **`permanentDelegate`** | `2apBGMsS…YJjk` | plain account, no code |
| `mintCloseAuthority` | `2apBGMsS…YJjk` | plain account, no code |
| `transferHook` authority | `2apBGMsS…YJjk` | plain account, no code (no hook set today) |

⚠️ **The mint authority is a multisig that requires one signature.** The account really is of type `multisig` and really does list four signers, so nearly every surface will render it as multisig-protected. **Its `numRequiredSigners` is 1** — confirmed in the parsed account and again in the raw layout, where the threshold and signer-count bytes read **1 and 4**. ✅ **A four-signer multisig requiring one signature is a true description and a misleading one**, and it is worth stating in full rather than in summary.

⚠️ **And the holder of the emergency powers is one of those four signers.** So `2apBGMsS…YJjk` can **mint**, and it already holds freeze, permanent delegate, mint-close and transfer-hook authority. ✅ **The control that makes the shape claim meaningful:** that address is owned by the System Program with **zero bytes of data**, while the mint authority queried the same way is owned by Token-2022 with **355 bytes**. Same query, two shapes — the emergency holder is the bare one.

⚠️ **A permanent delegate is a stronger power than anything on the EVM legs.** On the six EVM chains, seizure takes two steps — freeze, then wipe — and the address holding them **cannot mint**, because `SUPPLY_CONTROLLER_ROLE` returns false for it. **A Solana permanent delegate can move any holder's balance in a single instruction with no freeze step**, and through the one-of-four this key reaches minting as well. **The EVM key is the constrained one.**

✅ **The same limit applies here as everywhere on this page:** a plain Solana account can be operated by off-chain MPC or an HSM quorum exactly as an EOA can. **Zero data proves there is no on-chain quorum and nothing whatever about off-chain custody.**

**Coverage is now seven of seven chains for both supply and authority.**

### Why this is 2.0

**Contract & Admin is now scored at 2.0, across all seven chains rather than scoped to some of them.** ⚠️ **The number was deliberately withheld until every chain was read**, because the authority picture moved three times in one day — a timelocked upgrade path, then undelayed pause and seizure, then a Solana leg holding more than any EVM leg — and each intermediate number would have been set against a finding that was superseded within the hour. ⚠️ **A scope qualifier naming an unmeasured remainder implicitly invites a reader to treat it as average, and here the unmeasured part was the worst leg** — which is why this axis waited rather than shipping at 82% coverage with a footnote.

## 6 · Issuer — 7.5

Paxos is one of the more established regulated stablecoin issuers, also behind **PYUSD (PayPal USD)** and **USDP (Pax Dollar)**. The USDG issuer specifically is **Paxos Digital Singapore**, supervised by the Monetary Authority of Singapore. Paxos has a solid regulatory track record and mature operations.

Standard centralized-issuer controls apply: compliance and onboarding processes, and the ability to **freeze addresses**. USDG is a freezable, centralized token — that's a deliberate design of a regulated dollar, not a defect, but it's the opposite of a censorship-resistant asset. USDG's own track record is short (launched November 2024) but clean, and it inherits the operational maturity of Paxos's longer-running products.

### Audits & security

Reserves are attested monthly through Paxos's process. On the contract and operations side, Paxos's stack across PYUSD and USDP is mature and battle-tested, and USDG runs on the same operational foundation. The residual risk here is **liquidity and adoption** plus standard centralized-issuer control — not reserve opacity and not contract immaturity.

## How it compares to USDC and USDT

If you already hold the two market leaders, here's where USDG fits. Against **USDC**, USDG is close on reserve quality and issuer regulation — both are conservative, well-custodied, regulated dollars — but USDC reports its reserves more frequently and runs through a US structure, and USDC's liquidity is in another league. Against **USDT**, USDG is the higher-transparency, more-clearly-regulated option, with reserves you can actually see attested monthly and a bankruptcy-remote custody structure; Tether's edge is raw ubiquity and depth, which no other dollar matches. The practical read: USDG is a credible third regulated dollar to diversify *issuer* risk away from Circle and Tether, provided you don't need each holding to be equally liquid everywhere.

## Who it's for

Holders who want a regulated, high-quality-reserve dollar from an established issuer and don't need the very deepest liquidity — especially users already on platforms in the Global Dollar Network, where USDG is well-integrated and often incentivized. If your venue is an active partner, you get top-tier backing with the practical liquidity you actually need.

## Who should avoid

- Anyone who needs maximum, everywhere-liquidity — USDC and USDT are deeper across more venues.
- Anyone who needs a censorship-resistant dollar — USDG is a freezable, centralized-issuer token.
- Anyone wanting yield from simply holding — reserve income goes to network partners, not to holders.

## What to watch

- **Liquidity and adoption trajectory.** USDG's growth and its DeFi/exchange depth are the swing factor for the score; continued growth in genuinely deep venues would support a higher liquidity mark over time.
- **Global Dollar Network health.** Partner participation drives USDG's liquidity; concentration or partner churn is the key structural risk.
- **Reserve attestations.** Published monthly — watch for any composition drift.
- ✅ **RESOLVED 2026-09-09 — Paxos Digital Singapore holds its own licence.** The lookup this report prescribed was run against **MAS' Financial Institutions Directory**, and **PAXOS DIGITAL SINGAPORE PTE. LTD. appears there in its own right as a Major Payment Institution**, licensed for **Digital Payment Token Service**, with the entry last updated **25 August 2026**. ✅ **So "MAS-supervised entity" is accurate for the entity that actually issues USDG**, and not inherited from the affiliate that took the widely-cited November 2022 licence (**Paxos Global Pte Ltd**). ⚠️ **The distinction was worth the check rather than the assumption** — a shared name is not a shared identity, the same trap as the two reUSDs and the two tokens presenting as USDG on Robinhood Chain — **and here the check came back in the issuer's favour.**
- ✅ **RESOLVED 2026-09-10 — Singapore's stablecoin framework is NOT in force, and that is now a positive finding rather than an absence.** **MAS published a Consultation Paper on proposed amendments to the Payment Services Act 2019 on 1 September 2026**, setting out the draft legislation that would implement its single-currency stablecoin regime. **That consultation closes on 16 October 2026, subsidiary legislation is to be consulted on separately afterwards, and no commencement date has been set.** ⚠️ **So the framework is at draft-legislation stage as of this writing, nine days after publication** — not in force, and not close to it. ✅ **This replaces a weaker reading.** The earlier position rested on a stablecoin-issuer authorisation not appearing in MAS' directory, which is an absence in one lookup and the weakest form of evidence; **the consultation paper is direct evidence of the framework's actual stage.** ⚠️ **Read the consequence precisely, because it cuts both ways.** **Paxos' own language — that USDG is compliant with the *upcoming* framework — is accurate, and 'upcoming' is doing real work in it.** USDG is issued under a **Digital Payment Token Service** licence, which is a real licence and a live obligation. **What does not yet exist is the stablecoin-specific regime** — reserve, redemption-timing and no-interest requirements that would bind an issuer as an issuer. **This report's claim has always been that the ENTITY is MAS-supervised, which is verified, rather than that the TOKEN is regulated as a stablecoin, which is not yet possible for anyone.**

---

*Revision history: 2026-09-09 — **all seven deployments measured on one date; a seventh chain found; the architecture read on all six EVM legs.** ⚠️ **Paxos publishes seven canonical USDG deployments and this report tracked six** — **Mantle** (0.02% of supply) had never been measured by anyone. Robinhood Chain was missing until 09-06 and X Layer until 09-07: **three misses on one asset, all from growing a chain list by discovery instead of enumerating the issuer's published set.** Supply restated to **$3,320,823,580.23** across seven chains at a **single as-of date**, replacing a six-chain figure assembled from readings taken days apart; X Layer is **47.98%**, not 49.0%. ⚠️ **Architecturally every EVM deployment is an upgradeable proxy with no Paxos `supplyController` and a 24-hour timelock under a distinct owner contract per chain** — measured, not inferred. ✅ **Paxos publishes all of these addresses as canonical, so they sit inside the attested perimeter**; that resolves scope and not the numeric reconciliation, which is still owed at a matched attestation date. ⚠️ **The upgrade authority on all six EVM chains was then identified: a single address holds propose, execute and cancel on every one of the six timelocks** — eighteen role checks, each with a control that returned false — **covering 82.24% of supply with a compromise threshold of one and no independent veto.** ✅ **It carries no code on any chain, so there is no on-chain multisig; that does not exclude off-chain MPC or HSM threshold custody, which is unpublished and unverifiable from outside.** The 24-hour delay is confirmed as a genuine first-action floor (`updateDelay` is `onlySelf`), and this authority reaches the implementation, **not the reserves.** ⚠️ **Current state only — role-change history could not be read, as every event-scan chunk was refused.** ⚠️ **The same address also holds `PAUSE_ROLE` and `ASSET_PROTECTION_ROLE` directly on the token on all six chains, outside the timelock** — measured with controls on both the role and the holder — **so pause and freeze carry no delay at all**, and the 24-hour floor is confirmed to cover the upgrade path only. ⚠️ **The emergency roles include seizure: `wipeFrozenAddress` is role-gated to that same address and `freeze` succeeds from it, so freeze-then-wipe is available with no delay and no second party** — established by simulation against a control proving the function exists, since a bare revert from the holder is the access check passing rather than an absent function. ✅ **Freeze and seizure powers are normal for a regulated dollar stablecoin and are not the finding; the control structure around them is.** ⚠️ **Paxos' own contract repository publishes a role table placing both of those roles at a multisig address that holds neither**, alongside an in-person-quorum assurance; the addresses it names are real multisigs but hold no USDG role, which may be an un-updated table. ⚠️ **Solana was then read the same day and is the strongest authority set on any USDG chain, not the missing one:** the Token-2022 mint carries a **`permanentDelegate`** and `freezeAuthority` on a **bare keypair account**, and that account is **a signer on a mint multisig whose threshold is ONE of four** — so it reaches minting, which the EVM holder cannot. ✅ **A permanent delegate moves any balance in one instruction with no freeze step**, making the EVM freeze-then-wipe path the more constrained of the two. ⚠️ **The mint authority will be described elsewhere as a four-signer multisig; `numRequiredSigners` is 1.** Coverage is now seven of seven chains for supply and authority. **Contract & Admin is set at 2.0 on the full seven-chain picture and Overall cut 7.0 → 6.5**, on operational control alone — **Backing 7.5 and Issuer 7.5 are unchanged**, because the reserves and the issuer are not what moved. ✅ **Held at 6.5 rather than lower against this corpus's own anchors:** USDG holds attested cash and short-duration government securities at named banks, and ranking it beneath a synthetic basis-trade asset would misdescribe both. ⚠️ **The capabilities themselves are category-normal for a regulated fiat stablecoin — the finding is their custody, not their existence.**

*Revision history: 2026-08-23 — supply measured across **all six** mainnet deployments; no score change. Paxos publishes the complete USDG deployment list, which is what made this measurable rather than estimable — the denominator was never unknowable, it simply had not been looked for. Read 2026-08-23 with USDC controls passing and every row confirming `symbol()` and `decimals()`: **X Layer 1,868,197,490.62 (55.2%), Solana 608,899,270.33 (18.0%), Ethereum 447,158,857.86 (13.2%), Robinhood Chain 398,736,130.25 (11.8%), Ink 63,548,230.10 (1.9%), Arbitrum 601,207.02** — **$3,387,141,186.18 in total**, against a published "around $3B-plus". **This corroborates the headline figure rather than challenging it**, and replaces a hedge pointing readers at a third-party aggregator with a complete answer. **The finding is the distribution:** X Layer — OKX's chain — carries an outright majority at 55.2%, where this report's structural discussion assumed Ethereum was the centre of gravity; Ethereum is 13.2%. Stated as a factual property of where the token sits, not as an adverse finding.  **When a total is a floor, every share derived from it is provisional too**; shares are now published only over a complete denominator. `last_verified` is **not** bumped; only supply was read. *

*This report is based on Paxos's public documentation, monthly attestations, and market data through 2026-07-08. USDG is a centralized, freezable issuer token, and its liquidity depends on Global Dollar Network adoption, which shifts over time. Corrections or attestation links welcome at info@tidresearch.com.*
