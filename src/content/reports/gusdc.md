---
asset: "gUSDC"
slug: "gusdc"
aliases: ["gUSDC", "gToken USDC", "Gains Network gUSDC", "gTrade USDC vault"]
chains: ["arb"]
category: "vault-share"
underlying_assets: ["USDC"]
assessment_type: "full"
date: "2026-10-03"
last_verified: "2026-10-03"
featured: false
production: false
issuer: "Gains Network"
yield_bearing: true
axis_frame: six
# PARKED: "Arbitrum ONLY" is declared, not measured — nobody has swept for a gUSDC on
# another chain. The address and its Arbitrum deployment are verified; the exclusivity
# is a field value [owner: riskAnalyst] [since: 2026-10-03]
# ⚠️ PARKED: Contract & Admin 5.0 is UNANCHORED and publishes anyway. No
# security_analyst walk exists for this asset (no topology file at all), so none of
# the six Contract-half items is established. docs/contract-admin-axis.md says we
# decline to publish without them; the owner overrode that on 2026-10-03 and the page
# states the gap in terms. The walk is the unblocker [owner: owner] [since: 2026-10-03]
# PARKED: Issuer 5.0 — TWO inputs still unverified: any financial audit of Ingenium
# Labs Foundation, and the governance path over this vault. Entity and jurisdiction
# are established from the terms of service, read 2026-10-03. ⚠️ Audits belong to
# axis 5 and must not lift this when the walk returns [owner: riskAnalyst] [since: 2026-10-03]
# ⚠️ RULED OUT, do not re-file: "GAINS Ventures LLC" (St Vincent and the Grenadines,
# reg. 3663, gains-associates.com) is a DIFFERENT COMPANY — a separate crypto
# fundraising platform on a separate domain, not Gains Network's entity.
# PARKED: "no meaningful secondary market" is INHERITED from the 2026-06-30 pass and
# has never been re-established. ⚠️ It is the one input that could LIFT axis 3, and
# nobody has enumerated gUSDC venues [owner: riskAnalyst] [since: 2026-10-03]
# `redemption_score` is RETAINED as superseded-not-deleted: the owner folded redemption
# into axis 3 under the worse-link rule, and five consumers read the field. SIX_AXES has
# no Redemption row, so it renders nowhere here. Do not restore it as its own axis.
volatility_score: 6.0
backing_score: 5.5
liquidity_score: 3.5
underlying_score: 4.0
structural_score: 5.0
issuer_score: 5.0
redemption_score: 4.5
overall_score: 5.0
---

# gUSDC — Risk Report

**Moderate risk · 5.0/10**

> ⚠️ **Read this first: getting out is a queue, and the queue lengthens exactly when you most want to leave.** gUSDC redemption runs on 72-hour epochs. You may only *request* in an epoch's first 48 hours, and your request matures **one, two or three epochs later depending on how well collateralized the vault is** — the weaker it is, the longer you wait. At the collateralization read on 2026-10-03 that is the slowest setting. ✅ **What you do not pay is a price penalty:** redemption is at the full share price with **no haircut**, measured at zero basis points. The gate is on **quantity and timing, never price.**

| Backing | What it earns | Exit methods | Age | Chains |
|---|---|---|---|---|
| USDC deposited as counterparty capital to gTrade's perpetual traders | Trading fees and trader losses, net of trader wins | Epoch-gated redemption at full share price; no liquid secondary established | Live since 2023 | Arbitrum |

> ⚠️ **This report covers one vault: `0xd3443ee1e91aF28e5FB858Fbd0D72A63bA8046E0` on Arbitrum.** Read directly on 2026-10-03: `symbol()` returns **gUSDC**, `name()` returns **Gains Network USDC**, and `asset()` returns `0xaf88d065e77c8cc2239327c5edb3a432268e5831` — native Arbitrum USDC.
>
> ⚠️⚠️ **gToken is a family, not a single product — one vault per collateral — and these scores transfer to none of the others.** gDAI was the original; a GNS-collateral vault is also live on Arbitrum. **Every axis below describes the USDC vault at the address above.** A sibling vault has a different collateral, a different book and a different score, and carrying this one's number across would be the error the shared "gToken" label invites.
>
> ⚠️ **"Arbitrum" is verified for this address; "Arbitrum only" is not.** No sweep for a gUSDC deployment on another chain has been run.

## Summary

gUSDC is the USDC vault behind **gTrade**, Gains Network's perpetuals exchange. Depositors supply USDC that acts as **the counterparty to every trade on the platform**: when traders lose, the vault gains; when traders win, the vault pays. The share price rises with fees and trader losses and falls when traders win.

That makes it a fundamentally different proposition from a lending vault or a staking wrapper. You are not lending to a borrower who owes you back — **you are taking the other side of a book of leveraged positions.** The return is real and so is the exposure, and the two cannot be separated.

⚠️ **The thing most worth understanding before depositing is not the yield. It is the exit.** Redemption is gated by an epoch cycle whose length is set by the vault's own health, so the wait and the reason you want to leave move together. That mechanism is the subject of the Liquidity & Exit axis below and is the binding constraint on this asset.

## 1 · Stability — 6.0

gUSDC is a **NAV share, not a pegged token.** Its price is the vault's assets divided by its shares, and it is *supposed* to move — up with fees and trader losses, down when traders win. There is no peg to defend and no arbitrage band to hold.

What this axis prices is how violently that NAV can move. The vault's counterparty exposure is to leveraged perpetual traders, so the share price absorbs trading outcomes directly. ⚠️ **Drawdowns are a normal feature of the design rather than a malfunction**, which is why this sits in the middle of the range rather than near the top: the instrument works correctly and still loses value when the book goes against it.

## 2 · Backing — 5.5

The vault is backed by **USDC held as counterparty capital**, and the honest description is that the backing is real but **not fully collateralized against its obligations at present**. Collateralization read **96.57% on 2026-10-03** — below par, which is a normal operating state for this design rather than a default, because the vault's liabilities are to its own shareholders rather than to an external creditor.

⚠️ **Sub-100% collateralization is what sets the exit queue's length** — see the next axis. It does **not** reduce what a redeeming holder is paid per share.

## 3 · Liquidity & Exit — 3.5

⚠️ **This is the binding axis and the lowest score on the page.** It covers both exit routes — the redemption gate and the secondary market — and is scored on the worse of the two.

### The redemption gate, and why it is a band rather than a number

Redemption runs on **72-hour epochs**:

1. **Request** — only in an epoch's **first 48 hours**. The final 24 hours are a dead window; arrive then and you wait up to a day before you may even ask.
2. **Wait** — your request matures **1, 2 or 3 epochs later, set by collateralization at the time:**

| `collateralizationP()` | timelock | worst-case wait |
|---|---|---|
| above 120% | 1 epoch | about 3 days |
| 110–120% | 2 epochs | about 6 days |
| below 110% | 3 epochs | about 9 days |

3. **Redeem** — only in the **first 48 hours of the unlock epoch.** Miss that window and the request dies; you start again.

⚠️⚠️ **The band is the finding, not any single figure.** The wait **triples — three days to nine — exactly as the buffer fails.** The queue reaches its maximum precisely when a holder most wants out, and recovery shortens it again: back above 110% and it is six days, above 120% and it is three.

⚠️ **At the 96.57% read on 2026-10-03 the vault is in the slowest band**, so the effective wait is about nine days, **plus up to 24 hours** of waiting for a request window to open — roughly **ten days** end to end. **That is a reading, not a property of the asset.** ✅ **Anyone sizing an exit should read `collateralizationP()` directly**: the band is stable, the figure is not.

✅ **Two behaviours confirmed from the contract rather than the documentation:** `maxRedeem` returns **0 globally** once settlement begins, and epoch 327's measured close landed **21 seconds** after `epoch_start + 48h`.

### What the gate does not do

✅ **There is no price haircut.** `previewRedeem` returns `floor(shares × shareToAssetsPrice)` **exactly**, measured at three sizes, for a deviation of **0 basis points**. Sub-100% collateralization gates **quantity and timing, never price**. ⚠️ **The 5% figure in Gains' documentation is GNS replenishment and is not a redemption haircut** — it is easy to read as one.

### The secondary market

⚠️ **Treat this as unestablished rather than as measured.** The working assumption is that there is **no meaningful secondary market** for gUSDC, which would make the gate unavoidable at any collateralization — but **that input dates from 2026-06-30 and has never been re-established, and nobody has enumerated gUSDC venues.** It is also the one input that could **raise** this score: a liquid secondary would make the queue optional.

## 4 · Dependencies — 4.0

This axis prices the counterparty set — who gUSDC relies on to exist and stay redeemable.

The vault's value passes through **Gains Network's own protocol contracts** and, beneath them, the **gTrade trading book itself**. There is no substitution path: a holder cannot change operator while holding the claim, and the vault's performance is not diversifiable away from the exchange it backstops. ⚠️ **The asset's health and the operator's commercial performance are the same variable**, which is a tighter coupling than a lending vault whose borrowers are external.

## 5 · Contract & Admin — 5.0

⚠️⚠️ **State of the evidence first, because it governs how this number should be read: no authority walk exists for this asset.** There is no topology file, and consequently **none of the six items this axis normally requires is established** — the upgrade path, the admin roles, the timelock depth, the pause surface, the documentation reconciliation, and the audit and bounty scope are all **unread**. ⚠️ **So 5.0 is a number without a measured basis, and it is the score on this page most likely to move.** It is published here as an interim figure, not as a finding.

**What is known comes from contract behaviour rather than from an authority read**, and it is one structural property worth a reader's attention:

⚠️ **The payout rule has a two-sided lookback asymmetry.** Traders withdraw their running **maximum** profit via `TradePositivePnlWithdrawn`, while the vault recovers only capped collateral on the other side. And because the share price is **stale until rollover**, a holder who redeems before a known loss settles shifts that loss onto the holders who stay.

⚠️ **It is the same mechanism in both directions, and it is not an exploit.** Closing at the peak is simply better than withdrawing and being liquidated, and **no intent is established on either side** — this is a property of how the payout rule is written. ✅ **The consequence a reader can act on is that the vault structurally advantages monitored positions over unmonitored ones.** Someone watching epochs and rollovers is better placed than someone who deposited and left.

## 6 · Issuer — 5.0

⚠️⚠️ **Start with what you could actually do if something went wrong, because it is the sharpest fact on this axis.** The terms of service bind a user to **confidential, binding arbitration, seated in Panama, in English, before a single arbitrator**, under the AAA's Commercial Arbitration Rules, with the award final and **appeal rights expressly waived**. **No court, no class action, and no public record of the proceeding.** That is close to the least recourse a named counterparty can offer.

**There is a named counterparty, and it is a non-disclosure vehicle.** The site's operator is **"Ingenium Labs Foundation, a foundation of private interests formed under the laws of the Republic of Panama"**, and a user contracts with it as the Site Operator under Panamanian governing law. ⚠️ **A Panamanian foundation of private interests has a founder, a council and beneficiaries rather than shareholders, and the beneficiaries are not public.** ⚠️ **No registration number and no registered address appear in the terms.**

⚠️ **So the entity question resolves without resolving the accountability question.** A named party now exists; an accountable principal still does not — which is consistent with the pseudonymous team rather than a correction to it:

- ⚠️ **The team is not doxxed.** The lead developer is pseudonymous and the team is small — a settled finding, and adverse.
- ✅ **About four years of live operation with no major exploit.** For a perpetuals venue carrying leveraged flow continuously that is a substantive record, and it is the strongest thing supporting this score.
- ✅ **The published withdrawal rules reconcile with on-chain behaviour to 21 seconds** — the same epoch-close measurement cited under Liquidity & Exit, read here for a different question: **the documentation describes what the contract actually does.** It is the only input on this axis measured directly rather than inherited.

⚠️ **Two inputs remain unverified: any financial audit of the foundation, and the governance path over this vault** — who can change its parameters, and by what process.

**Against the adverse findings: no conduct event, no regulatory action, and no loss of principal on the gToken line.**

⚠️ **Audits and the audit bench belong to Contract & Admin and are deliberately not counted here** — a reviewed contract says nothing about whether the operator behaves well.

## Managing a position

The mechanics are easy to get wrong in ways that cost time rather than money:

- **The request window is not the whole epoch.** It is the first 48 of 72 hours. One day in three, you cannot ask.
- **The redemption window is also 48 hours**, in the unlock epoch. Miss it and the request is dead — you re-request and wait the full term again.
- **Your wait is set when your request matures, by collateralization.** It is not fixed at deposit and not fixed at request.
- **Read `collateralizationP()`, not a quoted number of days.** The band is the durable fact.

## Who it's for

Depositors who understand they are **taking the other side of a leveraged trading book**, who can leave capital in place for a redemption cycle measured in days to weeks, and who will actually watch the epoch calendar. The no-haircut redemption is a genuine and unusual strength: the exit is slow, not expensive.

## Who should avoid

- ⚠️ **Anyone who may need the capital on short notice.** At the current band the exit is roughly ten days, and the queue lengthens as the vault weakens.
- Anyone expecting a lending-style yield. This is counterparty capital to leveraged traders, and the share price falls when they win.
- ⚠️ **Anyone who will not monitor.** The payout rule structurally favours holders who watch rollovers over holders who do not.
- Anyone who needs the contract-authority question answered before depositing. It has not been read.

## What to watch

- **`collateralizationP()`** — it sets the exit band, and it is the single most decision-relevant field on the asset.
- **The epoch calendar** — which 48 hours you may request in, and which you may redeem in.
- **`shareToAssetsPrice` across rollovers**, since the price is stale until a rollover lands.
- **Whether a liquid secondary market appears.** It is the one development that would make the queue optional.
- **An authority walk.** It is the unblocker for the Contract & Admin score above.

---

*This report is based on contract-behaviour measurements of the redemption path taken on 2026-10-03 — `previewRedeem` at three sizes, `maxRedeem` through settlement, and the epoch-327 close — together with the collateralization read of the same date. ⚠️ **Contract & Admin is published without an established basis**, as stated in that section. **The Issuer section additionally draws on the Gains terms of service, retrieved 2026-10-03, for the operating entity, the governing law and the dispute-resolution terms; two inputs to that axis — a financial audit and the vault's governance path — remain unverified.** The secondary-market input is inherited from 2026-06-30 and has not been re-established. The deployment set shown is unconfirmed. Corrections, primary sources, or additional disclosures welcome at [info@tidresearch.com](mailto:info@tidresearch.com).*

## Revision history

- **2026-10-03 — first publication, staged.** Six axes. ⚠️ **Liquidity & Exit is 3.5 and absorbs the former separate Redemption axis**, which had scored a 6.0 secondary against a 4.5 primary and reported the better of the two; under the worse-link rule the primary governs. The exit is a **72-hour epoch cycle with a 48-hour request window**, maturing **1–3 epochs later by collateralization** — about 3 days above 120%, 6 days at 110–120%, 9 days below 110% — **plus up to 24 hours** before a request window opens. ⚠️ **The wait triples exactly as the buffer fails**, which is the finding; at the **96.57%** read of this date the effective exit is about ten days. ✅ **No price haircut: `previewRedeem` is exact at three sizes, 0 bps** — collateralization below par gates quantity and timing, not price. ✅ `maxRedeem` returns 0 globally once settlement begins; epoch 327 closed 21 seconds after `epoch_start + 48h`. ⚠️ **Contract & Admin 5.0 is published without an established basis** — no authority walk exists — and says so on the page. **Issuer is 5.0.** The operator is **Ingenium Labs Foundation, a Panamanian foundation of private interests**, read from the terms of service on 2026-10-03 — ⚠️ **a non-disclosure vehicle whose beneficiaries are not public, with no registration number or registered address given.** Recourse is **confidential single-arbitrator arbitration seated in Panama, AAA Commercial Rules, appeal waived.** Set against a pseudonymous team, about four years with no major exploit, and documentation matching chain behaviour to 21 seconds. ⚠️ **A named counterparty exists; an accountable principal does not.** The two unverified inputs are a financial audit and the vault's governance path.
