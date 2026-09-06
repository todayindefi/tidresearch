---
asset: "TSM (Robinhood Stock Token)"
slug: "tsm-rh"
# ⚠️ THIS FILE OWNS THE BARE "TSM" ALIAS, and the reason is mechanical.
# The token's on-chain symbol() is literally "TSM", identical to the NYSE
# ticker — unlike TSLAon/TSLA or STRCx/STRC there is NO DISAMBIGUATOR IN THE
# SYMBOL ITSELF. On a public site readers arrive BY SEARCHING A TICKER, and
# what a token holder actually holds is THIS, not the ADR. So the bare alias
# resolves here and tsm-adr.md deliberately declines it. Both pages carry a
# disambiguation line above everything else. Join on the contract address,
# never the ticker. Cf. the two reUSDs.
aliases: ["TSM (Robinhood)", "Robinhood TSM", "Taiwan Semiconductor Manufacturing • Robinhood Token", "TSM"]
chains: ["robinhood"]
# `wrapped-token` is the strcx analogue: a wrapper whose underlying is assessed
# separately as a dependency report. riskAnalyst files this as
# `tokenized-equity`, which is not a category in this schema.
category: "wrapped-token"
assessment_type: "light"
date: "2026-09-06"
last_verified: "2026-09-06"
featured: false
trust_disclaimer: true
# ⚠️ STAGING ONLY. New import 2026-09-06, never published anywhere. ⚠️ DO NOT
# PROMOTE WITHOUT THE SITE OWNER: the findings are adverse and section-scale
# about a named, listed third party with an active legal posture (the AMC
# dispute over exactly these products). Same class as the usg axis-5 finding.
# ⚠️ ALSO: the whole tokenized-equity class is internal-only on this site (no
# tslaon, spyon, qqqon), so promoting the TSM pair would break that pattern for
# a single asset. Editorial call, not a consequence of shipping.
production: false
issuer: "Robinhood Assets (Jersey) Limited"
underlying_assets: ["TSM ADR (NYSE)"]
yield_bearing: false
market_cap_approx: 1470000
# SIX-AXIS CORE — Stability · Backing · Liquidity & Exit · Dependencies ·
# Contract & Admin · Issuer. Born on the frame (date >= 2026-08-30).
#   volatility_score 4.0 is INHERITED from tsm-adr and identical by
#     construction — a wrapper cannot be less volatile than its reference.
#   backing_score 4.5: custodian NAMED (Alpaca Securities LLC), holders are
#     SECURED creditors, per-Series ring-fencing, Verification Agent required
#     to verify 100% collateralisation. ⚠️ Held to 4.5 and no higher because
#     SECURITIES LENDING IS ACTIVE for this Series and no Verification Agent
#     output is published anywhere readable.
#   liquidity_score 3.5: the 2% crossing brackets $233,496–$233,594, measured
#     2026-09-06. ⚠️ A measurement removed a tail; it did not add depth.
#   underlying_score 3.0 renders as DEPENDENCIES: five layers, three
#     jurisdictions, two counterparties unnamed, plus a young L2.
#   structural_score 2.5 is Contract & Admin. ⚠️ Anchored against syzUSD 2.0
#     (bare EOA, no delay) and yzPP 4.0 (48h timelock).
#   issuer_score 3.5: "The Issuer is not regulated" — the issuer's own words.
# ⚠️ `redemption_score: 3.0` is RETAINED but no longer rendered: it is the
# evidence for axis 3, and both legs are named in prose under that heading.
axis_frame: six
volatility_score: 4.0
backing_score: 4.5
liquidity_score: 3.5
underlying_score: 3.0
structural_score: 2.5
issuer_score: 3.5
redemption_score: 3.0
overall_score: 3.0
---

# TSM (Robinhood Stock Token) — Retail Risk Report

**Significant risk · 3.0/10**

> ⚠️ **If you arrived here searching the ticker "TSM", read this line first.** This page is about a **tokenized debt security issued by Robinhood Assets (Jersey) Limited**, whose on-chain symbol is literally `TSM` — the same three letters as the NYSE ticker, with no disambiguator. **It is not Taiwan Semiconductor stock and it is not the NYSE ADR.** The ADR is a different instrument, assessed separately at **[TSM (Taiwan Semiconductor ADR)](/reports/tsm-adr/), which scores 5.5**. ⚠️ **The score on this page is about the wrapper, not about TSMC.**

| What it is | Backing | Exit | Chain | Float |
|---|---|---|---|---|
| Tokenized debt security referencing the TSM ADR | Asserted 1:1, shares at a named US broker-dealer | DEX-only, stock-to-stock pairs | Robinhood Chain (id 4663) | about **$1.47M** |

## Summary

**The reference asset is excellent and almost none of that quality reaches the holder.** TSMC is a $1.98T franchise and its ADR is among the most liquid listed instruments in the world. This token is a **$1.47M float on a single young chain**, whose code can be replaced by one key with no notice. **The gap between those two sentences is the entire assessment.**

What you hold, in the issuer's own framing, is a **tokenized debt security**. It gives *"economic exposure to the price performance"* of the reference stock **without** *"conveying legal ownership or shareholder rights"*, and *"ownership of a token does not give its holder legal or beneficial rights against the referenced company."* ⚠️ **You do not own TSM stock, and you have no claim on TSMC.**

✅ **But the structure underneath is genuinely solid, and it would be wrong to read this page as saying otherwise.** Holders are **secured creditors** — *"The Products are secured, limited recourse obligations of the Issuer"* — with a Security Agent holding security as their direct representative, **per-Series ring-fencing**, a named custodian (**Alpaca Securities LLC**), a **Verification Agent** contractually required to verify the products remain *"100% collateralised and ring-fenced"*, Swiss *Registerwertrechte* form, and a JPMorgan London paying account. **This is a real securitisation programme, not a shell.**

**The story is not that this is a scam.** It is that **a well-built instrument is not what its ticker implies**, and that its recovery conditions bite hardest on exactly the holders least equipped for them.

Measured on-chain 2026-09-06 at block 55,700,951: token `0x58ffe4a942d3885baa22d7520691f611ef09e7aa`, `symbol()` **TSM**, `totalSupply()` **3,449.9167**, a beacon proxy, `terms()` resolving to Robinhood's published documentation, nothing paused.

## 1 · Stability

**Inherited from the reference asset and identical by construction — a wrapper cannot be less volatile than what it references.** The ADR's 52-week range is **$241.62–$479.00**, about a 98% spread on the low.

⚠️ **Scored on the discrete geopolitical tail rather than the trailing tape.** Essentially all of TSMC's leading-edge capacity sits on one island under an unresolved sovereignty dispute. That risk does not appear in trailing volatility and will not be priced smoothly if it arrives. See [the ADR page](/reports/tsm-adr/) for the full reasoning; **4.0 here is that number carried across, not a separate judgement.**

## 2 · Backing

**Asserted:** every token backed 1:1 by the corresponding equity, held at a US broker-dealer custody partner.

✅ **And the assertion is established rather than bare.** The custodian is **named — Alpaca Securities LLC** (LEI `9845006BZ9782C600323`) — holders are secured creditors, the ring-fencing is per-Series, and a **Verification Agent** is contractually required to verify *"the reserve assets… to ensure that the Products remain 100% collateralised and ring-fenced."*

⚠️ **Held at 4.5 and no higher, for two specific reasons.**

**Securities lending is active for this Series.** The Final Terms state that *"The Underlying may be lent out to the Prime Borrower, who is permitted to **further lend the Underlying to End Borrowers**."* Collateral may then comprise *"(a) the relevant Underlying; (b) cash; (c) … Eligible Financial Instruments."* ⚠️ **So "backed 1:1 by the underlying shares" is conditional: at any moment the backing may be cash or listed instruments rather than TSM stock, through a rehypothecation chain, and the live split is not published.** Lending revenue accrues to the Issuer and is allocated *"in the manner specified on the Issuer Website, which may be updated from time to time."*

**And no Verification Agent output is published anywhere readable.** The mechanism exists; its result does not. **100% collateralisation is contractually promised rather than independently checkable, and a published attestation is the cheapest available uplift on this asset.**

⚠️ **One thing a holder should understand about the unit of the claim.** Corporate actions are handled by an on-chain **multiplier** that adjusts the shares represented by each token without changing the holder's raw balance — so **`balanceOf` is not a share count.** The current state is readable and clean (`uiMultiplier()` = 1e18, no corporate action pending or applied, and this token has never had one), but **`updateMultiplier` is structurally as powerful as `mint`: it rewrites what every holder's balance is worth without moving a single balance.** Total supply of 3,449.9167 is **tokens, not shares.**

## 3 · Liquidity & Exit

This axis covers both exit paths and is scored on the worse one. ⚠️ **The binding constraint here is not depth — it is eligibility, and it is covered under Issuer below.**

**Secondary market — the only path.** About **$1.47M float** against roughly $2.72M of 24h volume, which is **1.85× turnover of the entire float.** ⚠️ **That is not a normal figure for a tokenized equity and there is no established explanation for it.** It is consistent with incentivised or market-maker-recycled flow rather than genuine two-sided demand, and it is **recorded as an anomaly rather than scored as depth** — volume and depth are different quantities.

⚠️ **The top two venues are stock-to-stock pairs.** SPY/TSM and AU/TSM. **Exiting to a dollar requires a second hop through another tokenized asset**; the only stable pair in the top three is TSM/USDG at about 11.5% of volume, routed through USDG rather than USDC. **An exit is therefore multi-leg, and every leg is on the same young venue.**

✅ **2% depth is measured, not estimated (2026-09-06).** The 2% crossing brackets **$233,496.09 – $233,593.75** — published as a bracket rather than a point estimate. **That is the decision-relevant number and it is better than a $1.47M float suggests.** ⚠️ **A measurement removed a tail; it did not add depth.** $233K executable against a $1.47M float is about 16% — proportionally respectable, absolutely small, and fragmented across 20 pools.

**There is no primary redemption.** No holder redemption mechanism is established in the published material; the exit is the secondary market above.

**Single chain.** Robinhood Chain (id 4663) is a young L2 whose public RPC is documented as rate-limited, and which **timed out on a routine full-range log query during this assessment.** That is a liveness observation about the venue the exit depends on.

## 4 · Dependencies

```
holder ─▶ Robinhood Chain (new L2)         liveness, sequencer, RPC
       ─▶ token contract                    beacon-upgradeable
       ─▶ Robinhood Assets (Jersey) Ltd     unregulated, tokenized debt
       ─▶ Alpaca Securities LLC             US broker-dealer custodian
       ─▶ TSM ADR (NYSE)                    depositary bank — UNNAMED
       ─▶ TSMC 2330.TW ordinary             Taiwan jurisdiction, TWD/USD
```

**Five layers and three jurisdictions — Jersey, the United States and Taiwan — with the depositary bank unnamed and a young L2 underneath all of it.** Each layer is individually ordinary; the count is the finding. ⚠️ **A tokenized US common share carries neither the Jersey debt layer nor the ADR/depositary layer**, which is why scores from those comparables do not transfer to this one.

## 5 · Contract & Admin

**Enumerated from bytecode.** The beacon exposes `upgradeTo(address)`, `pause`/`unpause`, **`blockAccounts(address[])`** / `unblockAccounts`, and OpenZeppelin AccessControl. The implementation exposes `mint`, `burn`, **`adminBurn`**, `pause`/`unpause`, `pauseOracle`/`unpauseOracle`, and `updateMultiplier`.

⚠️ **Upgrade authority is a single externally-owned account with one prior transaction.** It sits on a distinct `BEACON_UPGRADER_ROLE` rather than on the default admin — ✅ **a genuine separation** — but **the default admin can grant itself that role immediately and undelayed.** So the honest statement is **two single-signature EOAs, either of which reaches upgrade in one or two transactions, with no reaction window at either step.** Not one key, but not a meaningful separation either.

⚠️ **And the blocklist is not theoretical. It has been used extensively: 246 `Blocked` emissions across 177 unique accounts, against 4 `Unblocked` covering 2 — about 175 addresses currently blocked.** This is a live, routinely-exercised power to freeze holders.

✅ **Genuinely to the issuer's credit, and it is why this is 2.5 rather than lower.** The **deployer rotated itself out** — it granted itself the admin role at block 7662 and revoked it at block 8695. **Role separation is real**, with 16 grants spreading about 13 distinct roles across about 13 distinct addresses. **The implementation has never actually changed** (two `Upgraded` events, both to the same address), and **the pause has never been used.**

⚠️ **What earns the dock is the absence of a holder reaction window.** A 48-hour notice period would offset a great deal; a quorum would offset some. **Here there is neither a delay nor a quorum.** Anchored against [syzUSD](/reports/syzusd/) at 2.0 — a bare EOA with no delay — this scores above it for the rotated deployer, real role separation and unused pause, and below [yzPP](/reports/yzpp/) at 4.0, which has a 48-hour timelock.

## 6 · Issuer

**Robinhood Assets (Jersey) Limited**, a Jersey private limited company. ⚠️ **The issuer's own documentation states: *"The Issuer is not regulated."*** It has *"obtained certain consents in Jersey"* and nothing more.

⚠️ **Regulation S excludes U.S. Persons:** the products *"may not be offered, sold or delivered within the United States to, or for the account or benefit of, U.S. Persons."* **This is an eligibility condition on the holder, not a disclaimer** — the same structural shape as [reUSD's](/reports/reusd-re/) U.S.-person exclusion, and stated more sharply. **Whether it binds in a given case is a question for the holder, and this page does not attempt to answer it.**

✅ **Why 3.5 and not lower.** Robinhood Markets is a large, listed, SEC-reporting parent with real operations and real reputational exposure. This is not an anonymous issuer, the terms are published, and `terms()` is committed on-chain and resolves. **Why not higher:** the entity that owes you money is explicitly unregulated, the instrument is debt rather than ownership, and there is a live public dispute with at least one referenced issuer over whether these products should exist — **which is legal and reputational risk to the wrapper, not to TSMC.**

## What recovery actually looks like

This is the part of the documentation most worth reading before sizing a position, because **the plain-language version is true and materially incomplete.** The FAQ says an independent security agent will sell the underlying shares and arrange for cash proceeds to be paid to token holders. **It omits the condition that decides whether you are among those holders.**

Under Condition 26.3, proceeds go only to investors who satisfy **"Distribution Requirements"** — determined and published **after an Event of Default** — by a stated Application Date. **Failing them means the claim *"will lapse and be extinguished, resulting in a total loss of their investment"***, with *"no residual claim against the assets or income of the Issuer, nor any claim against any service providers."*

✅ **These requirements are bounded and legitimate, and it would be wrong to describe them as arbitrary.** 26.3(B) permits them *"solely to the extent required to"* do four enumerated things: verify identity and run KYC, AML and sanctions screening; identify the investor's financial intermediary and account; verify the investor actually holds the products; and ensure compliance with the issuer's policies and applicable law. **There is also a cure path** — on incomplete information the Issuer *"shall use reasonable endeavours to liaise with the relevant Investor to correct or complete"* it.

⚠️ **Three concrete gates follow from that, and they bite hardest on self-custody holders who bought on a DEX.**

1. **Proceeds are paid to an "Authorised Financial Intermediary", not to you.** A self-custody holder with no such relationship **needs to obtain one to be paid at all.**
2. ⚠️ **You may be required to hand your tokens over.** 26.3(B)(3) permits requiring *"the transfer of the Products controlled by the Investor to a specified wallet held by the Issuer… or a designated third party"* to demonstrate control. **Surrendering custody, mid-insolvency, to prove you own the thing you are claiming on.**
3. **The eligibility process is paid for out of your recovery.** 26.3(F) puts the administrator and participant fees for running it on the realization proceeds.

⚠️ **And the fourth limb — compliance with applicable law — is where Regulation S re-enters.** A holder outside the eligible cohort can fail it **not through issuer caprice but because their holding was never permitted.** The structural fact worth stating plainly: **an ineligible holder can be a secured creditor who cannot collect, which is worse than being unsecured, because an unsecured creditor at least retains a claim.**

⚠️ **The per-Series ring-fence is also not absolute.** Condition 26.4 applies proceeds **first** to taxes *"apportioned rateably amongst the Products and all other products issued under the Programme"* — **a cross-series claim ranking ahead of holders.** The ring-fence holds against *credit* from other series; it does not hold against *tax*. The Base Prospectus additionally concedes that certain transaction documents *"may not include limited recourse provisions"*, so claims may be asserted outside the structure.

## This is implicitly a report about 193 other tokens

⚠️ **The scope of the contract findings is not this asset.** The token is a beacon proxy, and **all 194 registered Robinhood stock tokens read the same beacon** — measured rather than inferred: the official registry was enumerated and the EIP-1967 beacon slot read on every one. **A single `upgradeTo` changes the code behind all 194 simultaneously.** The blocklist lives on that same shared beacon, so **the roughly 175 currently-blocked addresses are blocked family-wide, not from TSM alone.**

**So the admin findings above are not a per-asset contract risk. They are a single-key dependency shared by every Robinhood stock token**, and anything concluded here applies to a holder of any of them.

## Who should avoid

- **Anyone who believes they are buying TSMC stock.** You are buying debt of an unregulated Jersey SPV that references an ADR. No ownership, no shareholder rights, no claim on TSMC.
- **Anyone who cannot establish they are outside the Regulation S exclusion.** Eligibility binds before liquidity does, and it binds at exactly the moment recovery matters.
- **Anyone self-custodying at size who has not read Condition 26.3.** The recovery gates assume an intermediary relationship most DEX buyers do not have.
- **Anyone using this as collateral.** A $1.47M float, stock-to-stock exit pairs and an undelayed family-wide blocklist are not a foundation for a leveraged position.

## What to watch

- **Any published Verification Agent output.** It is the cheapest available uplift on the backing axis and would move it materially.
- **The securities-lending split.** *"Backed 1:1 by shares"* is conditional while lending is active, and the live composition is unpublished.
- ⚠️ **`Upgraded` events on the shared beacon.** Two so far, both to the same address — the implementation has never actually changed. **A third would change 194 tokens at once.**
- **`Blocked` emissions.** The count is the honest measure of how routinely this power is used.
- **The multiplier.** `uiMultiplier()` is clean today; it is the one power whose effect a holder cannot see in their own balance.

## Revision history

- **2026-09-06 — first assessment.** Measured on-chain at block 55,700,951: `symbol()` **TSM**, `totalSupply()` **3,449.9167** tokens, beacon proxy, nothing paused. Float about **$1.47M** against roughly $2.72M of 24h volume — **1.85× turnover of the float**, recorded as an anomaly rather than as depth. **2% crossing brackets $233,496.09–$233,593.75.** Custodian **Alpaca Securities LLC**; holders are **secured** creditors under Swiss *Registerwertrechte* form. **Securities lending is active for this Series.** Upgrade authority is a single EOA with **no execution delay**, on a beacon **shared by all 194 registered Robinhood stock tokens**; the family-wide blocklist carries **246 `Blocked` emissions across 177 accounts**, about 175 currently blocked. **No multiplier has ever been applied to this token**, established against a positive control across all 194 assets.
