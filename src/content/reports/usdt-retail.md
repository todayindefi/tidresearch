---
asset: "USDT"
slug: "usdt"
aliases: ["USDT", "Tether", "Tether USD"]
chains: ["eth", "tron", "bsc", "solana", "arb", "avalanche", "optimism", "polygon"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
audience: "retail"
date: "2026-07-08"
last_verified: "2026-08-04"
featured: false
production: true
issuer: "Tether Limited (BVI) / iFinex"
market_cap_approx: 183500000000
peg_mechanism_score: 7.5
backing_score: 6.0
liquidity_score: 9.5
issuer_score: 5.0
overall_score: 7.0
---

# USDT — Risk Report

**Moderate risk · 7.0/10**

> **The most-used dollar in crypto, held back by the least transparent issuer.** USDT is the deepest, most liquid stablecoin on Earth — you can move billions in and out at peg on any chain, on any exchange — and it has held its dollar through every stress event of the last decade, including the TerraUST collapse. The catch is the issuer. Tether has never completed a full audit (a first one, by KPMG, is underway in 2026), publishes point-in-time attestations rather than continuous verification, and carries a regulatory-settlement history. Holding USDT means trusting unmatched liquidity and a ten-year track record over institutional-grade transparency.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None | Sell on any CEX/DEX at peg; direct redeem is qualified-customer only ($100k+ mins) | Mint/redeem 1:1 with Tether for verified customers; retail exits via secondary market | Since 2014 — the longest-running major stablecoin | Ethereum, Tron, BSC, Solana, Arbitrum, Avalanche, Optimism, Polygon + more |

## Summary

USDT is the largest stablecoin in existence — roughly **$183.5 billion** in circulation — issued by **Tether Limited**, a BVI-domiciled company affiliated with iFinex, the parent of the Bitfinex exchange. It is backed primarily by short-term US Treasuries (around 77% of reserves), alongside cash equivalents, Bitcoin and gold, and it is verified by quarterly reserve *attestations* from BDO Italia. A first full audit — engaged with KPMG in early 2026 — is in progress but not yet delivered.

Two things define USDT's risk. First, it has the deepest liquidity of any crypto asset, on every major venue and virtually every chain, and it has held its peg through a decade of FUD cycles, regulatory actions and market crashes. Second, its issuer is the least transparent among the blue-chip stablecoins: attestations rather than a completed audit, no on-chain proof of reserves, a complex corporate structure, and two resolved regulatory settlements in the record.

The **7.0/10** reflects that balance — unmatched liquidity and a proven peg against issuer transparency as the dominant residual risk. It lands one notch below fully-audited, US-regulated USDC, and the gap is driven by issuer and backing transparency, not by any weakness in the peg itself.

Tether's **Q2 2026 attestation**, published 2026-07-31, moved one part of that picture. USDT is still over-collateralized and the peg did not budge, but the cushion of reserves above what Tether owes holders **halved in a single quarter**, from a record $8.23 billion to $4.11 billion. We have cut the Backing score from 6.5 to **6.0** on that. The overall score **holds at 7.0** — liquidity and peg resilience are untouched, and one quarter of evidence on one axis does not re-price a decade-proven asset. The detail is in "What backs it" below.

## What you actually earn

**Nothing** — plain USDT pays no yield. It is a settlement and trading dollar, not an income product. If you want yield on a Tether-adjacent dollar, that lives in separate staked or lending products, not in USDT itself.

## How exit works

For retail, exit is the secondary market — and it is the best exit in all of crypto. USDT trades at near-zero slippage at any realistic size, on every major CEX and DEX, on every chain. Direct redemption with Tether does exist, but it is gated to verified, qualified customers, typically with $100k+ minimums; ordinary holders never touch it directly.

What keeps the peg tight is that those qualified redeemers *do* arbitrage. Any discount to $1 gets bought up and redeemed at par, which has reliably pulled USDT back to peg through every historical wobble. You don't need access to the redemption window yourself — you benefit from the people who have it.

## What backs it — and the transparency question

**Start with what did not happen.** USDT is over-collateralized. Tether holds more assets than it owes to holders, the Q2 2026 attestation confirms it, and the peg never moved — not by a basis point that mattered. Nothing below is a shortfall, and none of it is a reason to expect one tomorrow.

What changed is the size of the margin, and how fast it changed.

Reserves are majority short-term US Treasuries — around **77%** of what Tether owes, counting T-bills and reverse repo together. That is a major improvement over the 2021 commercial-paper era and it is the load-bearing part of the book. (This report previously said around 82%. That figure was overstated; see the revision note at the foot.) Around the Treasury core sit cash equivalents, secured loans, physical gold and bitcoin — and that outer ring is where the Q2 story is.

### The cushion halved in one quarter

The **excess reserve** is the buffer: total assets minus everything owed to USDT holders. It is the only thing standing between a loss on Tether's investments and the dollar you are holding. Here is what one quarter did to it:

| | Q1 2026 (Mar 31) | Q2 2026 (Jun 30) |
|---|---|---|
| **Excess reserves** | **$8.23B** — a record | **$4.11B** |
| **Collateralization** | about 104.5% | **about 102.2%** |
| Physical gold | $19.84B / 132.2 tonnes | $18.84B / 146.2 tonnes |
| Bitcoin | $6.62B / 97,137 BTC | $5.80B / 98,933 BTC |
| Secured loans | about $15.9B | about $13.5B (down 15%) |
| Owed to holders | about $183.5B | $183.64B (flat) |

Liabilities were flat. The buffer fell by half anyway, because the assets fell — mostly gold and bitcoin, which had a bad quarter. Gold dropped about 15%; bitcoin fell from $68,200 to $58,600.

**That is the structural point worth taking away: the cushion is roughly 6× levered to two volatile assets.** Gold and bitcoin together are worth about $24.6 billion, sitting on top of a $4.11 billion buffer — so a combined drawdown of a bit under a fifth in those two positions would, on paper, consume the entire surplus. Q2 was that arithmetic running in slow motion. Not a crisis; a demonstration.

Two things make it worth a score change rather than a shrug:

- **Tether grew the volatile book in the same quarter the cushion halved.** It *bought* 14 tonnes of gold and 1,796 BTC — **$1.91 billion of buying** — while the buffer was falling. Prices went down; the position sizes went up. That is a deliberate choice about risk posture, not something the market did to them. It may well be a good long-term bet. It is still the opposite of what a conservative reserve manager does when the margin is thinning.
- **About $1.9 billion left the reserve and nobody has said where it went.** Run the arithmetic on prices alone: Tether earned $1.5 billion in operating profit, and gold and bitcoin were marked down $3.74 billion, so the buffer should have landed near $5.99 billion. It came in at $4.11 billion. The gap is around $1.9 billion. The likely explanation is mundane — distributions to shareholders, or transfers into Tether's separate investment arm — but "likely" is doing real work in that sentence, because no one has confirmed it.

### Why that gap is the best argument in this report

Look at the two numbers moving in opposite directions. Gold and bitcoin were marked **down $3.74 billion** on price, and Tether **bought $1.91 billion** more of them. That purchase is the same money as the "growing the volatile book" point above, seen from the other side of the ledger — and it is exactly what makes the leftover impossible to pin down.

The size of the unexplained gap depends on where the cash for those purchases came from, and an attestation cannot tell you:

- **Funded from inside the reserve** — Tether shifted existing reserve assets into gold and bitcoin — then the unexplained outflow is about **$1.9 billion**.
- **Funded by new capital** put in from outside, the purchases are not an outflow at all, and the unexplained amount is about **$3.8 billion**.

The evidence favours the first, which is why $1.9 billion is our central estimate: the $1.80 billion of gold buying alone exceeds the entire quarter's $1.5 billion of operating profit, secured loans fell $2.38 billion and freed up cash, and the Treasury book barely moved (down $0.42 billion).

But "favours" is the whole problem. **Nothing in the attestation lets you distinguish "Tether moved $1.9 billion of reserve into gold" from "$1.9 billion left the reserve" — and that is a sharper illustration of what "attestation, not audit" costs you than any bare missing sum.** One of those is a risk-posture decision you might disagree with; the other is money out the door. A full audit would have to say which. So the two durable caveats below are not abstract:

- **Attestations, not a full audit.** Tether publishes quarterly reserve *attestations* through BDO Italia — point-in-time snapshots confirming that assets were at least equal to liabilities on a given date. That is not a continuous Big-Four audit of reserve quality, encumbrance, or intra-quarter availability — and, crucially, it carries no obligation to explain movements. An attestation confirms the numbers added up on June 30th. It does not have to trace how they got there, so it does not have to say whether that $1.9 billion was reallocated or withdrawn — and it didn't. A full audit would have to. A first one (KPMG) is underway in 2026 but has not been delivered.
- **No on-chain proof of reserves.** Unlike newer stablecoins that publish a Chainlink proof-of-reserves feed, USDT's reserves are verified only by the periodic report. You are trusting the attestor, not the chain.

### The other side of the ledger

Three genuine positives in the same report, and they are why this is a 0.5 move on one axis rather than something louder:

- **Treasury exposure held flat** at about $140.6 billion. The safe core of the reserve did not shrink; the volatile ring around it did.
- **Secured lending was cut 15%**, from about $15.9 billion to about $13.5 billion. That is real de-risking of the least transparent asset class in the book.
- **USDT kept growing** — issuance was up $446 million into a quarter when the stablecoin market overall contracted. Demand for the product is not the problem here.

Since June 30th both gold and bitcoin have partly recovered, which on a mark-to-market basis puts the cushion back near $4.8 billion. That recovery is a reason not to over-read a single quarterly snapshot — and also a reminder of the underlying point, since a buffer that moves that much on price alone is a buffer that depends on prices.

## The issuer

Tether Limited is BVI-domiciled, sits inside a complex iFinex/Bitfinex corporate structure, and holds no US banking license. Two resolved regulatory matters are in the record, and they are worth stating cleanly:

- The **2019 NYAG finding** — commingled funds and an undisclosed credit facility to Bitfinex — settled for $18.5 million.
- The **2021 CFTC fine** — $41 million, for reserve misrepresentation over the 2016–2019 period.

Both are settled, and both reflect a historical pattern of opacity that improved transparency has since narrowed but not erased.

USDT also sits **outside the US GENIUS Act framework**, and that timetable is now firm rather than speculative:

- Implementing rules were due **2026-07-18**.
- The broad provisions take effect on the earlier of **2027-01-18** or 120 days after final rules.
- From **2028-07-18**, US exchanges and custodians may generally offer only *permitted* stablecoins. For USDT to still be on a US venue that day, Tether would need to qualify through the foreign-issuer comparability pathway.

**For a US retail holder this is a two-year horizon, not a today problem.** Nothing about your access changes this year, and the 2028 date is the one to diarize. But it is worth understanding Tether's actual strategy, because it is not "get USDT compliant". Tether's US-regulated product is a *separate* token: **USA₮/USAT**, launched 2026-01-28, issued by Anchorage Digital Bank (OCC-chartered) with Cantor Fitzgerald as reserve custodian, and expanded to Celo on 2026-07-29. The read is that USAT exists so that USDT does not have to comply — USDT is being positioned for offshore and emerging-market demand, where most of its use already is. That is a coherent business plan. It also means USDT itself is unlikely to ever pick up a US regulatory wrapper.

## Peg resilience

The reassuring counterweight to all of the above is the track record. Despite a decade of FUD cycles, regulatory actions and one brief dip to about **$0.9975** during the May 2022 TerraUST collapse, USDT has always returned to peg. Massive secondary liquidity plus arbitrage redemption is a robust peg defense, and it has never suffered a sustained loss of peg. When the rest of the market was on fire, USDT held.

## Audits & security

No full financial audit has ever been *completed*. The KPMG engagement (2026, with PwC assisting on internal-systems readiness) would be the first, and it is the single biggest forward catalyst for this score. Today the verification layer is BDO Italia's quarterly attestations — useful, but not the same thing.

The token contracts themselves are simple, long-lived and heavily battle-tested. This report previously added that the residual risk is "reserve and issuer transparency, not contract bugs" — true as far as it goes, and misleading, because **issuer control over the contract is a third thing that is neither a bug nor a disclosure question.** It was measured for the first time on 2026-08-23.

**On Ethereum, USDT's owner is a 3-of-6 multisig with no delay of any kind.** The owner address `0xC6CDE7C3…Ea828` is a contract, and its selector set identifies it as the **2016-era Gnosis MultiSigWallet rather than a modern Safe** (`required()`, `getOwners()`, `confirmations()` and `MAX_OWNER_COUNT()` present; `getThreshold()`, `VERSION()` and `masterCopy()` absent). It returns `required() = 3` against six owners, and **all six are plain externally-owned accounts**. There is **no delay surface anywhere in its bytecode** — no `executionDelay`, `delay`, `MINIMUM_DELAY`, `GRACE_PERIOD` or `timelock`. It submits, confirms, executes and revokes, and nothing else, so **execution fires inside the transaction that lands the third confirmation.** This is not a short delay; it is no delay, by construction.

**What those three signatures can do** — all owner-gated, all present in the token's own bytecode, against an **$88.3B** Ethereum leg: `pause()`, `issue()`, `redeem()`, `setParams()`, `addBlackList()`, **`destroyBlackFunds(address)`**, which permanently destroys a blacklisted balance rather than merely freezing it, and **`deprecate(address)`**, which sets a deprecation flag and forwards every ERC-20 entry point to an arbitrary new contract.

**`deprecate()` deserves singling out, because it is stronger than a proxy upgrade in one specific respect.** A proxy at least separates the admin from the implementation, and those can be different parties under different constraints. Here there is no separation to exploit and no admin role that could be held by someone else — three signatures replace the behaviour of the token itself, in one call, immediately.

**Keep this in proportion, in both directions.** A 3-of-6 of independent keys is a materially harder set to compromise than a single key, these powers have existed since 2017, and their use has been narrow and overwhelmingly law-enforcement blacklisting. Nothing here is a bug and nothing suggests misuse. But a reader told that contract risk reduces to "not bugs, and otherwise a transparency question" would not know any of it exists, and on an $88.3B position that is the wrong impression to leave.

**Two comparisons place it fairly, and they cut opposite ways.** In Tether's favour: **this multisig is better evidenced than most.** All six owners are known addresses, individually verified as independent externally-owned accounts — where [thBILL](/reports/thbill/), which carries a 3-of-5 and is docked for the same missing delay, does not disclose its signers at all. A quorum you can enumerate is worth more than one you are asked to take on trust. Against Tether: **the powers are broader than [USDC](/reports/usdc/)'s**, over a larger book. USDC's freeze immobilises a balance; `destroyBlackFunds` permanently destroys it, and `deprecate` replaces the token's behaviour outright.

⚠️ **Scope this carefully: the above is Ethereum only.** The earlier claim that the contracts are battle-tested "across every chain USDT lives on" was never evidenced, and this pass does not evidence it either. **Tron carries the larger USDT float and runs a different contract that this coverage has not read.** Treat the admin posture on Tron and other non-EVM deployments as unmeasured rather than as either better or worse than Ethereum's.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 7.5 | Standard fiat mint/redeem, proven across a decade including TerraUST contagion. High redemption minimums are offset by the deepest arbitrage network in crypto. |
| Backing | 6.0 | **Down from 6.5 (2026-08-03).** Reserves remain majority US Treasuries (about 77%), but the Q2 2026 attestation halved the surplus from $8.23B to $4.11B (104.5% to 102.2% collateralization) while the issuer bought a further $1.91B of gold and bitcoin into a book now roughly 6× the cushion, and about $1.9B left the reserve unexplained. Still attestations only (BDO Italia, not Big Four), no on-chain proof of reserves, and a history of misrepresentation settlements. |
| Liquidity | 9.5 | Best-in-class — deepest stablecoin liquidity on every major CEX and DEX, the highest trading volume of any crypto asset, on virtually every chain. Near-zero slippage at any realistic size. |
| Issuer | 5.5 | Two resolved regulatory settlements (NYAG + CFTC), BVI domicile with a complex iFinex/Bitfinex structure, no completed full audit, and USDT sits outside the US GENIUS Act framework. Offset by 10+ years operating, improved transparency, and no sustained depeg. ⚠️ **Cut from 5.5 on 2026-08-23.** Every item above is regulatory, structural or disclosure-related; none of them priced the on-chain control surface — an undelayed 3-of-6 of plain keys holding `deprecate`, `destroyBlackFunds` and blacklist authority over the Ethereum leg. A drag this axis had never counted. The cut prices the **absence of a reaction window**, not the quorum size; see the note below the table. |
| **Overall** | **7.0** | **Held at 7.0 (2026-08-03).** Unmatched liquidity and a decade of peg resilience carry real weight, and neither was touched by the Q2 print — peg and liquidity scores are unchanged, and the drawdown that halved the surplus was substantially a gold and bitcoin move that has since partly reversed. Backing comes down one notch on a single quarter of evidence, which is documented here rather than compounded into the headline score. Issuer transparency and regulatory history remain the dominant residual risks. A second consecutive quarter of surplus erosion in Q3 would take this to 6.5. **⚠️ Held at 7.0 on 2026-08-23 despite the Issuer cut, and the reason should not be left to inference.** This composite is liquidity-weighted rather than floor-tracking — it already sits above Backing 6.0 and well above Issuer, because Liquidity 9.5 and Peg 7.5 carry it, and neither was touched by the admin finding. The Issuer move is also a recalibration on a drag that axis never counted, not a deterioration in Tether's conduct. And the one trigger already allocated to this number is a *backing* trigger; collapsing an unrelated issuer half-notch into it would blur the signal a reader is being told to watch. (Contrast [AUSD](/reports/ausd/), whose Overall tracks its weakest axis and therefore did follow its Issuer cut.) |

> **How the Issuer cut was decided, and why it is not about quorum size.** When this finding was first published on 2026-08-23 it was documented but left unpriced, pending a pass across every report in this coverage with a measured upgrade path. That pass has run, and the discriminating variable is **not** the signing threshold — it is **whether a holder gets a reaction window**. [USDS](/reports/usds/) holds the same upgrade capability and is **not** docked, because its path carries a verified 48-hour delay, no owner backdoor and no bypass role, with a cancellation window inside it. [thBILL](/reports/thbill/) has a **3-of-5** quorum and **is** docked, on an axis rationale that names "no timelock on admin actions" outright. So a quorum does not offset the absence of a delay; USDS is the control that shows what does. USDT has no delay at all, which places it on the same side as USDC and thBILL despite a harder signer set. **The quorum credit is real and is paid in the prose above rather than in the number** — three independent, individually verified keys is a better posture than one key or than five undisclosed ones, but it does not hand a holder time to act.

## Who it's for

Anyone who needs maximum liquidity and cross-chain reach, values a decade-proven peg, and accepts issuer-transparency risk in exchange. USDT is the default settlement dollar of crypto for a reason — if your priority is moving size at par, anywhere, this is the deepest market there is.

## Who should avoid

- Anyone who requires audited, on-chain-verifiable reserves or a regulated US issuer — prefer USDC.
- Anyone who needs an EU-MiCA-compliant stablecoin. Tether has declined to seek MiCA authorization, and EU venues are acting on it: **Revolut delists USDT for EU users on 2026-08-31**, with a staged wind-down that converts residual balances to fiat. If you hold USDT on an EU platform, check your venue's timeline now rather than later.
- Anyone uncomfortable holding the single most systemically concentrated asset in crypto.

## What to watch

- **The Q3 2026 attestation, due around the end of October.** This is now the decisive datapoint. A second consecutive decline in the surplus — or a surplus under about $3 billion, or collateralization under about 101.5% — would take the overall score from 7.0 to 6.5. A rebuild toward $8 billion would argue Q2 was a drawdown artifact and nothing more.
- **Whether the missing $1.9 billion repeats,** and whether Tether ever publishes a distribution policy. A one-off transfer is unremarkable. A recurring, undisclosed drain would be an *issuer* problem rather than just a backing one, and would hit a second axis. It would also swamp the post-quarter price recovery described above.
- **Gold and bitcoin prices.** Unusually for a stablecoin, these are worth watching directly: the two positions are roughly 6× the cushion, so a large drawdown in either is the actual mechanism by which USDT's buffer erodes. As of 2026-08-03 both had partly recovered (bitcoin around $63,000, gold around $4,063/oz), putting the marked cushion near $4.8 billion.
- **The KPMG full audit.** Still the biggest forward-positive. It was engaged in March 2026, has no delivery date, and Tether describes it as a multi-year initiative — so do not expect it soon. A clean first audit would plausibly lift Backing to 7.0+ and Issuer to 6.5; the scores are held until it lands.
- **Any change to the Ethereum owner multisig, or a delay appearing on it.** Today it is an undelayed 3-of-6 of plain keys with total authority over the token's behaviour. Owner changes are visible on-chain, and a timelock or a larger/harder signer set appearing would be the single change that most improves the contract-authority picture. A `deprecate()` call would be the most consequential single transaction in USDT's history and would be immediately visible.
- **Further EU delistings** after Revolut, and any sign Tether pursues the GENIUS foreign-issuer pathway for USDT itself rather than ceding the US market to USAT.

---

*This report is based on Tether's public attestations — most recently the **Q2 2026 Consolidated Reserves Report (BDO Italia, published 2026-07-31, as of 2026-06-30)** — plus reserve reports and on-chain data through 2026-08-03. USDT's reserves are attested, not fully audited (a KPMG audit is in progress), and the reserve composition shifts over time. Corrections or attestation links welcome at info@tidresearch.com.*

*Revision history: 2026-08-23 (second pass) — **Issuer 5.5 → 5.0; Overall HELD at 7.0.** This prices the admin finding published unpriced earlier the same day, and it **reverses the reasoning given for holding it**. That reasoning was that USDC had been cut for an *undelayed single key* while USDT runs a 3-of-6, so docking USDT would be inconsistent. **The cohort pass that decided it:** six reports in this coverage now have a measured upgrade path. [USDC](/reports/usdc/) (single key, no delay) and [thBILL](/reports/thbill/) (**3-of-5**, no delay, signers undisclosed) are both docked. [USDS and sUSDS](/reports/usds/) hold the *same upgrade capability* and are **not** docked, because their path carries a verified 48-hour delay, no owner backdoor, no bypass role and a cancellation window. **So the discriminating variable is the reaction window, not the capability and not the signing threshold** — USDS is the control that proves it, and thBILL shows a real quorum does not offset a missing delay. **thBILL is the closer precedent and it was missing from that comparison** — a real 3-of-5 quorum, docked anyway, on a rationale naming "no timelock on admin actions" outright. Against the full set, holding USDT at 5.5 is what made the corpus inconsistent. The cut therefore prices the **absence of a reaction window**: three signatures with zero notice and one signature with zero notice give a holder the same thing. **A recalibration, not a deterioration** — nothing about Tether changed, and this axis had simply never counted any admin drag, every item in its rationale being regulatory, structural or disclosure-related. **Overall held at 7.0, stated rather than inferred:** this composite is liquidity-weighted rather than floor-tracking, already sitting above Backing 6.0 and well above Issuer; Liquidity 9.5 and Peg 7.5 are untouched; and the trigger already allocated to Overall is a *backing* trigger, which an unrelated issuer half-notch would blur. **The quorum credit is paid in the prose rather than the number**, and it is real: all six owners are known addresses verified as independent EOAs, where thBILL's five are undisclosed. Set against it, USDT's powers are broader than USDC's over a larger book — `destroyBlackFunds` permanently destroys a balance where a freeze immobilises one. `last_verified` is **not** bumped; no new measurement was taken. 2026-08-23 — **admin topology measured for the first time; no score change, and the reason the score did not move is stated on the page.** This report said contract risk reduced to "reserve and issuer transparency, not contract bugs." True, and misleading — **issuer control over the contract is neither a bug nor a disclosure question.** Measured on Ethereum at block 25,816,421: USDT's owner is a contract, identified by selector presence as the **2016-era Gnosis MultiSigWallet rather than a Safe**, returning `required() = 3` against six owners, **all six plain externally-owned accounts**. **No delay surface exists anywhere in its bytecode** — no `executionDelay`, `delay`, `MINIMUM_DELAY`, `GRACE_PERIOD` or `timelock` — so execution fires inside the transaction landing the third confirmation. Those three signatures hold `pause`, `issue`, `redeem`, `setParams`, `addBlackList`, **`destroyBlackFunds`** (which permanently destroys a blacklisted balance rather than freezing it) and **`deprecate`** (which forwards every ERC-20 entry point to an arbitrary new contract), against an $88.3B Ethereum leg. `deprecate` is noted as **stronger than a proxy upgrade in one respect**: a proxy separates admin from implementation and those can be different parties, whereas here there is no separation and no admin role to be held by anyone else. **Kept in proportion:** a 3-of-6 of independent keys is far harder to compromise than a single key, the powers date to 2017, and their use has been narrow and overwhelmingly law-enforcement blacklisting — nothing here is a bug or evidence of misuse. **Scope corrected too:** the claim that the contracts are battle-tested "across every chain USDT lives on" was never evidenced and is not evidenced now — **Tron carries the larger float on a contract this coverage has not read**, so non-EVM admin posture is stated as unmeasured rather than assumed either way. **Issuer held at 5.5 despite the rationale never having counted any admin drag**, because USDC was cut half a notch for an *undelayed single key* and pricing USDT for a materially harder 3-of-6 would leave the two pages inconsistent; the same finding is published-and-unpriced on AUSD, and all three will be scored together in a cohort pass so the ordering is set once on a common basis. `last_verified` is **not** bumped — only the admin path was read, and the reserve figures still date from the 2026-08-04 pass. 2026-08-04 — **Corrected the unexplained-outflow figure from about $3.8 billion to about $1.9 billion.** The earlier number conflated $1.91B of disclosed gold and bitcoin purchases with the undisclosed outflow: the two legs were marked down $3.74B on price while Tether bought $1.91B more of them, netting to −$1.83B, and treating that net as if it were all mark-downs charged disclosed buying to an unexplained drain. Restated on price effects only ($8.23B + $1.50B profit − $3.74B marks = $5.99B expected against $4.11B attested), with the funding range stated: about $1.9B unexplained if the purchases were funded from inside the reserve, about $3.8B if funded by new capital, with the evidence favouring internal. **No score change** — Backing 6.0 and overall 7.0 rest on collateralization falling from 104.5% to 102.2%, which this does not touch. 2026-08-03 — Backing 6.5 → 6.0 following Tether's Q2 2026 attestation; overall held at 7.0. **Corrected the reserve Treasury share from around 82% to around 77%** — the earlier figure was overstated. Direct plus indirect US Treasury exposure was about $140.6B ($114.96B T-bills plus $25.62B reverse repo) against $183.64B in liabilities, which is 76.6%; the Q1 figure was 76.8% on the same basis, so this was never 82% and the correction applies retroactively rather than reflecting a change in composition. Also added the Q2 reserve deterioration, firmed up the Revolut/MiCA and GENIUS Act dates, and rewrote "What to watch". Initial production publish 2026-07-08.*
