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
# ⚠️ NOT MIGRATED to axis_frame: six, and both missing axes are BLOCKED rather
# than skipped:
#   axis 4 Dependencies — blocked on ONE contract read: is X Layer USDG natively
#     issued by Paxos (supplyController) or bridged (OptimismMintable-style gate)?
#     Those are different dependency graphs over 49% of supply, so no number can
#     exist before it is answered.
#   axis 5 Contract & Admin — DECLINED at 0 OF 6 CHAINS WALKED. No usdg walk
#     exists in security_analyst's store at all. Ethereum alone is 10.9% of
#     supply, so the tempting partial would score a tenth of the asset. Price: a
#     six-chain authority walk. ⚠️ X Layer and Robinhood Chain reachability is
#     the SAME open question as the liquidity item — answer it once.
last_revised: "2026-09-09"
featured: false
production: true
issuer: "Paxos Digital Singapore"
market_cap_approx: 3150000000
peg_mechanism_score: 8.0
backing_score: 7.5
liquidity_score: 6.5
issuer_score: 7.5
overall_score: 7.0
---

# USDG — Risk Report

**Moderate risk · 7.0/10**

> **A high-quality dollar from a supervised issuer, with a smaller-but-growing footprint.** USDG (Global Dollar) is issued by Paxos — the same regulated issuer behind PYUSD and USDP — through its Singapore entity, and it's backed 1:1 by cash and short-term US Treasuries held in segregated, bankruptcy-remote accounts at DBS Bank and Standard Chartered, with monthly attestations. On backing and issuer quality it sits in the top tier. What holds it to a 7.0 is liquidity: it has grown fast to a top-30 asset (roughly 3x in its first stretch, now around $3B-plus), but its secondary-market and DeFi depth still sit well below USDC and USDT. The other thing that makes USDG distinctive is its business model — it shares its reserve income with the platforms that drive its adoption, the "Global Dollar Network."

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None to holders (reserve income is shared with Global Dollar Network partners, not token holders) | Sell on a supporting CEX/DEX at peg; institutional 1:1 redemption via Paxos | Mint/redeem 1:1 with Paxos (institutional); retail exits via secondary market | Since Nov 2024 | Ethereum + Solana |

## Summary

USDG is a US-dollar stablecoin issued by **Paxos Digital Singapore Pte. Ltd.**, a MAS-supervised entity within the Paxos group. It is fully redeemable 1:1 from Paxos, backed by cash, cash-equivalents, and short-duration US government securities held in segregated, bankruptcy-remote accounts — custody split between DBS Bank and Standard Chartered — with **monthly Paxos reserve reports and attestations**.

It launched in November 2024 and has grown quickly to become a top-30 asset (currently around $3B-plus; check a live source such as [CoinGecko](https://www.coingecko.com/en/coins/global-dollar) for the up-to-date figure). **That is a cross-chain aggregate, and USDG is unusually concentrated away from Ethereum** — the Ethereum leg read 447,300,985 on 2026-08-23, only about 15% of the asset. An Ethereum-only figure is not a usable proxy for USDG's size — **Ethereum is 15% of it.**

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

⚠️ **Mantle is new to this table and was never measured by anyone until today.** Paxos publishes a canonical deployment list; this report had been assembling one from accumulated observation instead, **and a list grown by discovery can only ever contain what someone already happened to find.** Robinhood Chain was missing until 2026-09-06, X Layer until 09-07, Mantle until today — **three misses on one asset, all the same defect.** The fix is to enumerate from the issuer's published set, which takes one read.

✅ **Mantle is 0.02% of supply, so no conclusion on this page turns on it.** The point is not the half-million dollars; it is that **the total was published as a total when it was a floor.**

**All six deployments are read, so this is a complete measurement rather than a floor** — $3.387B against a published "around $3B-plus". **Read it as corroboration of the headline figure, with the bonus of knowing where the supply actually lives.**

**The distribution is the finding, and it is worth stating plainly.** **X Layer — OKX's chain — carries 47.98% of USDG**, short of an outright majority though close to it, and down from a reading above 55% a fortnight ago. ⚠️ **Robinhood Chain is now second at 21.07%**, having roughly doubled its share in that window. ⚠️ **Ethereum — the chain most readers assume this asset lives on — is FOURTH at 11.33%**, behind Solana's 17.76% as well.

**The structural discussion in this report is written as though Ethereum were USDG's centre of gravity, and it is not.** Roughly **seven dollars in ten sit on X Layer or Robinhood Chain**, so most holders carry those chains' liveness, sequencer and bridge assumptions rather than Ethereum's. ⚠️ **That is a factual property of where the token sits, not evidence of a problem with it** — but it is a materially different picture from an Ethereum-centred one, and it is the picture the rest of this page has not yet been rewritten around. USDG also still sits behind USDC and USDT on secondary-market liquidity and DeFi integration, and its distribution is consortium-led: the Global Dollar Network shares reserve yield with the exchanges and wallets that drive adoption.

The 7.0 reflects top-tier regulated backing and issuer quality with an adoption/liquidity discount. It's a useful contrast with USDT, which lands at the same headline score for the opposite reasons — USDG has stronger issuer transparency and backing disclosure, but thinner liquidity. Read that way, a 7.0 isn't a single quality of "good enough"; it's a balance of strengths and weaknesses, and USDG's are almost the exact inverse of Tether's. If your priority is knowing precisely what backs your dollar and who is regulated to hold it, USDG scores better than its market-cap rank might suggest. If your priority is being able to move size at the peg on any venue at any hour, it scores worse.

## Every USDG deployment is an upgradeable proxy, and Paxos' issuance path is not in any of them

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

⚠️ **The codehash narrowed the question to "one deployer, occupants unknown" — because roles inside a `TimelockController` are per-deployment state, not code. A direct role read has now answered it, and the answer is one address.**

⚠️ **`0x3af3e85f…024b` holds `PROPOSER_ROLE`, `EXECUTOR_ROLE` and `CANCELLER_ROLE` on all six EVM timelocks.** Each role was queried against each chain's own timelock on 2026-09-09: **eighteen checks, eighteen true.** ✅ **Every one was paired with a control address that should not hold the role, and every control returned false** — so the check discriminates rather than answering true to anything put in front of it. On Ethereum the timelock's creation transaction agrees: the constructor granted all three roles to that same address at deployment.

⚠️ **The same party proposes, executes and cancels — so there is no independent veto.** Those three roles are the entire separation of duties in this design: a proposer who cannot execute has to persuade someone else, and a canceller held elsewhere can stop a queued action before it lands. **Held together, they collapse the compromise threshold to one.** The six chains beneath that address carry **$2.73B — 82.24% of all USDG.**

⚠️ **What that address actually is — and this genuinely cuts both ways.** It has **zero code on all six chains**, which establishes one thing precisely: **there is no on-chain multisig.** Nothing on any of these chains requires a second signature. ✅ **But zero code does not mean one person with one seed phrase.** An externally-owned address can be driven by threshold signing — **MPC, or an HSM quorum at a custodian** — where several people must approve before a signature is ever produced. **That machinery lives off-chain, and a chain cannot see it.** It is also the normal arrangement at a regulated issuer, so it is a live possibility here rather than a courtesy caveat. **The accurate statement is therefore: a single signing address with no on-chain quorum, whose off-chain key custody is unpublished and cannot be verified from outside.** ⚠️ **Do not read that as "one employee could do it" — and do not read it as safe.** What is measurable is that the on-chain protection is absent; whether an off-chain one exists is a question only Paxos can answer.

**What the key reaches, and what it does not.** These are upgradeable proxies, so replacing an implementation changes what the token does for every holder on that chain. ✅ **It does not reach the reserves.** Paxos holds those off-chain and this authority does not touch them — the backing assessment above stands unaltered. **This is an upgrade path, not a reserve path.** On a token whose entire proposition is that it behaves like a dollar, though, control of the implementation is not a small residual power.

✅ **The 24 hours is a real floor, and that matters more now than it did before.** Because these are stock OpenZeppelin, `updateDelay` is `onlySelf` — **shortening the delay must itself wait out the current delay.** It cannot be dropped to zero on the way to doing something else. **So whoever holds the roles, a change to these tokens is visible on-chain for a day before it can take effect.** That is the one structural protection here, and it is genuine.

⚠️ **One limit on all of the above, stated rather than buried: this is current state, not history.** The role holders were read live on the day. **Whether these roles have ever moved could not be established** — the contracts are not `AccessControlEnumerable`, so members cannot be enumerated, and an attempt to scan role-change events across the deployment range **was refused on every chunk requested.** ✅ **A refused read is not a clean history.** Nothing here says the roles have never changed hands; only that today's holder is measured.

✅ **Those reverts are measured absences, not silence.** On each chain, symbol, name, decimals, total supply, owner and the delay all answered in the same pass. **A function that reverts while its neighbours answer is evidence; a contract that answers nothing is unreachable, and none of these was.**

⚠️ **What this does and does not say.** It does **not** say USDG is unbacked or that Paxos is not the issuer. ✅ **Paxos publishes every one of these addresses as canonical USDG in its own developer documentation**, including the X Layer deployment, so these tokens sit inside the perimeter the issuer claims and attests against. **What it says is narrower and still worth knowing: the on-chain issuance and upgrade path is not the one a reader infers from "issued by Paxos", and a contract with a 24-hour delay stands between a governance decision and every holder's token.**

**The remaining gap is Solana, and it is a real one.** The controller question is now answered on the six EVM chains. **Solana carries 17.8% of supply and its authority model is not read here** — a different chain needs a different method, not the same call, and this report does not extrapolate the EVM pattern onto it.

**Coverage: six of seven chains for architecture; seven of seven for supply.** Solana carries 17.8% and **its authority model is not read here** — it is not an EVM chain, so it needs a different method rather than the same call, and this report does not extrapolate the pattern onto it.

**No score is attached to this yet, and the reason has changed.** Until 2026-09-09 the Dependencies and Contract & Admin axes were unscored because the controllers were unidentified. **That blocker is gone** — the EVM upgrade authority is now measured. What remains open is **Solana's authority model at 17.8% of supply**, and a score set on the EVM legs alone would be quoting six-sevenths of the asset as though it were all of it. ⚠️ **A refusal to score is a statement about our confidence and never a reason to withhold a measurement we hold** — so the finding is published now, and the number follows when Solana is read.

## What you actually earn

**Nothing as a plain holder.** USDG pays no yield to token holders. Its distinguishing economic feature is that reserve income is **shared with Global Dollar Network partner platforms** — exchanges and wallets that integrate and promote it — rather than with the person holding the token. If you want yield on USDG, you'd lend it or use a partner incentive program, not simply hold it. Treat the token itself as a cash instrument, not a savings product.

## How exit works

Institutions mint and redeem USDG 1:1 directly with Paxos. Retail holders exit through the **secondary market** on supporting venues — the major exchanges that list it. Because direct redemption is institution-gated, retail peg stability leans on partner-exchange liquidity plus arbitrage: when the token drifts from a dollar, institutions with a redemption line have the incentive to close the gap.

In practice that's a solid mechanism — tighter than a thin, unknown stablecoin — but looser than USDC or USDT, where secondary depth is enormous almost everywhere. Your practical exit quality with USDG depends more on *which* venue you're on and whether it's an active Global Dollar Network participant.

## What backs it

USDG is backed 1:1 by **cash, cash-equivalents, and short-duration US Treasuries**, held in **segregated, bankruptcy-remote accounts** at DBS Bank and Standard Chartered — two reputable global custodians. Paxos publishes **monthly attestations** of the reserves.

This is a genuinely high-quality reserve profile.

✅ **The attestor changed, and it is an upgrade: reports posted on or after 2026-02-27 are issued by KPMG LLP.** Everything before that was **Enrome LLP**, a small Singapore practice — so the only third-party check that exists for these reserves moved to a Big Four firm.

⚠️ **Read that with its limit attached, because "KPMG" invites a stronger reading than the engagement supports.** Both the Enrome and the KPMG examinations are conducted under **ISCA standards** (Institute of Singapore Chartered Accountants) — **not PCAOB, not AICPA.** ⚠️ **An attestation is not an audit under any of those regimes**, and the change of firm does not import a US audit standard the engagement never carried.

⚠️ **Worth naming why this report could not have told you any of that until now: it said "monthly attestations" and never said by whom.** That sentence was equally true before and after the change. **A rationale that stays true across a material event is not a robust rationale — it is one that cannot report.**

The knock relative to USDC is narrow and specific: attestation is *monthly* rather than USDC's more frequent reserve-fund reporting, and USDG runs through Paxos's **Singapore (MAS) entity** rather than a US trust. Neither is a reserve-quality concern — the assets behind USDG are conservative and well-custodied. They're transparency-cadence and jurisdiction points, not composition risks.

The "bankruptcy-remote" and "segregated" language matters more than it looks. It means the reserves are legally structured to be held apart from Paxos's own corporate balance sheet, so in a Paxos insolvency they are intended to belong to USDG holders rather than to Paxos's general creditors. This is the same reserve-protection posture Paxos uses across its regulated products, and it's a meaningful step above stablecoins that simply hold reserves as an ordinary corporate asset. The residual dependency is on the custodians themselves — DBS Bank and Standard Chartered are both large, well-rated global banks, which is about as strong as bank-custody counterparty risk gets for a stablecoin.

## The issuer — Paxos

Paxos is one of the more established regulated stablecoin issuers, also behind **PYUSD (PayPal USD)** and **USDP (Pax Dollar)**. The USDG issuer specifically is **Paxos Digital Singapore**, supervised by the Monetary Authority of Singapore. Paxos has a solid regulatory track record and mature operations.

Standard centralized-issuer controls apply: compliance and onboarding processes, and the ability to **freeze addresses**. USDG is a freezable, centralized token — that's a deliberate design of a regulated dollar, not a defect, but it's the opposite of a censorship-resistant asset. USDG's own track record is short (launched November 2024) but clean, and it inherits the operational maturity of Paxos's longer-running products.

## The Global Dollar Network model

This is the distinctive structural point, and worth understanding before you hold USDG. The token is built around **sharing reserve economics with adoption partners** — the exchanges and wallets that integrate it.

- **The upside:** partners have a direct financial incentive to list USDG, provide liquidity, and promote it. That's what's fueling the fast growth.
- **The trade-off:** adoption is **partner-led and uneven**. Depth concentrates where partners are active, and the health of the network is a genuine variable for USDG's liquidity — more so than for an issuer-funded distribution model like USDC's, where the issuer bears the cost of ubiquity directly.

So USDG's liquidity isn't just "how big is it" — it's "how healthy and broad is the partner network." That's the swing factor for the score. It also means USDG's growth story and its risk story are the same story: the consortium model is what has taken it to a top-30 asset in well under two years, and it's also the thing that could stall or concentrate the token's liquidity if partner incentives change. Watch the network, not just the market cap.

## How it compares to USDC and USDT

If you already hold the two market leaders, here's where USDG fits. Against **USDC**, USDG is close on reserve quality and issuer regulation — both are conservative, well-custodied, regulated dollars — but USDC reports its reserves more frequently and runs through a US structure, and USDC's liquidity is in another league. Against **USDT**, USDG is the higher-transparency, more-clearly-regulated option, with reserves you can actually see attested monthly and a bankruptcy-remote custody structure; Tether's edge is raw ubiquity and depth, which no other dollar matches. The practical read: USDG is a credible third regulated dollar to diversify *issuer* risk away from Circle and Tether, provided you don't need each holding to be equally liquid everywhere.

## Audits & security

Reserves are attested monthly through Paxos's process. On the contract and operations side, Paxos's stack across PYUSD and USDP is mature and battle-tested, and USDG runs on the same operational foundation. The residual risk here is **liquidity and adoption** plus standard centralized-issuer control — not reserve opacity and not contract immaturity.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 8.0 | Direct Paxos 1:1 mint/redeem with a regulated reserve model; institution-gated redemption backfilled by partner-exchange liquidity plus arbitrage. |
| Backing | 7.5 | Cash + short-duration US government securities + cash-equivalents in segregated, bankruptcy-remote accounts at DBS Bank and Standard Chartered. ⚠️ **Monthly attestations, and the attestor is now named rather than implied: KPMG LLP since 2026-02-27, Enrome LLP before it — under ISCA standards, which is an attestation and not a PCAOB or AICPA audit.** Top-tier reserve quality; a notch below USDC only for monthly (vs more frequent) transparency and the Singapore-entity structure. |
| Liquidity | 6.5 | ⚠️ **Held, and explicitly NOT depth-measured — read this axis as an estimate rather than a reading.** The 6.5 was set against **size**: growth to a top-30 asset at about $3.26B. **Size is a proxy for depth that moves in the same direction often enough to look right, and is not the same quantity** — a $3.26B asset with thin two-sided books would score badly here, and market cap does not say which this is. ⚠️ **And the exit analysis above is venue-based and predates the six-chain correction:** it describes exchange venues and Global Dollar Network partners, while **69.1% of supply sits on X Layer (47.98%) and Robinhood Chain (21.07%)**, neither of which it mentions. **What would settle it:** a depth ladder on the Robinhood Chain USDG leg, which is one run away — the chain is reachable and USDG already appears as a quote token in measured pools — and, for X Layer, an RPC reachability check first, because **no tooling on either side currently reads that chain at all.** ⚠️ **It is not docked: cutting a score because we have not measured it would manufacture severity out of our own missing measurement**, and a Paxos-issued top-30 asset gives an Ethereum holder a genuinely fine exit. |
| Issuer | 7.5 | Paxos — established, MAS-supervised issuer also behind PYUSD and USDP; solid regulatory track record. Standard centralized-issuer controls (freeze, compliance) and a short USDG-specific history. |
| **Overall** | **7.0** | A high-quality, regulated, well-reserved centralized dollar held back by an adoption/liquidity discount versus USDC and USDT. Same headline as USDT but the mirror image — stronger issuer and backing transparency, weaker liquidity. |

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
- ⚠️ **Which Paxos Singapore entity actually holds the licence, because there are two and the names are close.** The widely-cited November 2022 Major Payment Institution licence went to **Paxos Global Pte Ltd**; USDG's issuer is **Paxos Digital Singapore Pte Ltd**. **Whether PDS holds its own MPI licence or operates under an affiliate's is not established here**, and that question is the entire content of "MAS-supervised entity". ⚠️ **A shared name is not a shared identity** — the same trap as the two reUSDs, and as the two tokens presenting as USDG on Robinhood Chain. Settled by one lookup per entity in MAS' own Financial Institutions Directory.
- ⚠️ **Whether Singapore's stablecoin framework is actually in force over USDG.** Secondary sources describe USDG as issued under it while also recording that the framework MAS finalised in August 2023 was *expected* to commence in mid-2026. **A dated expectation about a future commencement is not a measurement of today's legal status**, and this report asserts it in neither direction. ✅ **Note what is claimed and what is not: "MAS-supervised entity" is a claim about the ENTITY, not that the token is regulated under the single-currency-stablecoin regime.** That distinction is deliberate and should not be tidied away.

---

*Revision history: 2026-09-09 — **all seven deployments measured on one date; a seventh chain found; the architecture read on all six EVM legs.** ⚠️ **Paxos publishes seven canonical USDG deployments and this report tracked six** — **Mantle** (0.02% of supply) had never been measured by anyone. Robinhood Chain was missing until 09-06 and X Layer until 09-07: **three misses on one asset, all from growing a chain list by discovery instead of enumerating the issuer's published set.** Supply restated to **$3,320,823,580.23** across seven chains at a **single as-of date**, replacing a six-chain figure assembled from readings taken days apart; X Layer is **47.98%**, not 49.0%. ⚠️ **Architecturally every EVM deployment is an upgradeable proxy with no Paxos `supplyController` and a 24-hour timelock under a distinct owner contract per chain** — measured, not inferred. ✅ **Paxos publishes all of these addresses as canonical, so they sit inside the attested perimeter**; that resolves scope and not the numeric reconciliation, which is still owed at a matched attestation date. ⚠️ **The upgrade authority on all six EVM chains was then identified: a single address holds propose, execute and cancel on every one of the six timelocks** — eighteen role checks, each with a control that returned false — **covering 82.24% of supply with a compromise threshold of one and no independent veto.** ✅ **It carries no code on any chain, so there is no on-chain multisig; that does not exclude off-chain MPC or HSM threshold custody, which is unpublished and unverifiable from outside.** The 24-hour delay is confirmed as a genuine first-action floor (`updateDelay` is `onlySelf`), and this authority reaches the implementation, **not the reserves.** ⚠️ **Current state only — role-change history could not be read, as every event-scan chunk was refused.** Contract & Admin is now scoreable and awaits a score; Solana's authority model (17.8% of supply) remains unread.*

*Revision history: 2026-08-23 — supply measured across **all six** mainnet deployments; no score change. Paxos publishes the complete USDG deployment list, which is what made this measurable rather than estimable — the denominator was never unknowable, it simply had not been looked for. Read 2026-08-23 with USDC controls passing and every row confirming `symbol()` and `decimals()`: **X Layer 1,868,197,490.62 (55.2%), Solana 608,899,270.33 (18.0%), Ethereum 447,158,857.86 (13.2%), Robinhood Chain 398,736,130.25 (11.8%), Ink 63,548,230.10 (1.9%), Arbitrum 601,207.02** — **$3,387,141,186.18 in total**, against a published "around $3B-plus". **This corroborates the headline figure rather than challenging it**, and replaces a hedge pointing readers at a third-party aggregator with a complete answer. **The finding is the distribution:** X Layer — OKX's chain — carries an outright majority at 55.2%, where this report's structural discussion assumed Ethereum was the centre of gravity; Ethereum is 13.2%. Stated as a factual property of where the token sits, not as an adverse finding.  **When a total is a floor, every share derived from it is provisional too**; shares are now published only over a complete denominator. `last_verified` is **not** bumped; only supply was read. *

*This report is based on Paxos's public documentation, monthly attestations, and market data through 2026-07-08. USDG is a centralized, freezable issuer token, and its liquidity depends on Global Dollar Network adoption, which shifts over time. Corrections or attestation links welcome at info@tidresearch.com.*
