# Issuer (axis 6) — what tidresearch requires before publishing

⚠️ **The scoring process for this axis is riskAnalyst's, not ours.** How the score is
derived — entity work, jurisdiction, conduct history, disclosure quality — is specified
in their `axis6-issuer-block-spec.md`. This file records only what must be true of a
rationale before it goes on a page here.

**We do not set the number.** We publish it, and we decline to publish it without these.

⚠️ **Why this file exists, 2026-10-03.** Axis 5 had a gate and axis 6 had nothing, so a
gUSDC Issuer score shipped as an **admitted placeholder** — authored because the
six-axis frame is all-or-nothing — with no statement of what was missing and nothing for
an owner to override. It then moved **5.5 → 5.0 → 4.5 in one day** as inputs arrived that
had been available the whole time. ⚠️ **The number was never the problem. The absence of
a required statement was.**

## 1 · The entity outcome is three-state, and the states are not interchangeable

| case | how the page reads |
|---|---|
| entity **named** | name it, with the jurisdiction and the source it was read from |
| **looked for, not identifiable** | ✅ a RESULT, and scoreable — say that it was looked for |
| **not looked for** | ⚠️ *unverified* — never *there is no entity* |

⚠️ **The third row is the one that bites.** On gUSDC the brief said every Issuer input
was unverified, and "no identifiable legal entity" was offered as a publishable result.
Nobody had looked. When someone did, the operator was named in the terms of service in
one fetch. **An unexamined absence is not a measured one**, and only the measured one can
carry a score.

## 2 · Recourse is on the page, and it usually outranks the name

The rationale states **governing law, the dispute mechanism, and what a holder could
actually do.** Not the entity alone.

⚠️ **gUSDC is the worked case.** The operator is named — a Panamanian foundation — but
the decision-relevant fact is that a holder is bound to **confidential, binding
arbitration, single arbitrator, Panamanian seat, AAA Commercial Rules, appeal rights
expressly waived.** No court, no class action, no public record. ⚠️ **The appeal waiver
was absent from the brief and surfaced only on reading the terms directly**, and it is
what moved the score. **A named counterparty with no practical recourse is not a
better-governed asset than an unnamed one; it is a differently-described one.**

## 3 · Principals and vehicle type, stated rather than implied

**"Not doxxed" is a finding. "We did not check" is not.** Say which.

⚠️ **And name the vehicle where it bears on disclosure.** A Panamanian *foundation of
private interests* has a founder, a council and beneficiaries rather than shareholders,
and the beneficiaries are not public. ⚠️ **So the entity question can resolve without the
accountability question resolving** — a named counterparty existed and an accountable
principal still did not. A page that reports the name without the vehicle reads as a gap
closing when it has not.

## 4 · Coverage is per input, named individually

List which inputs are **established** and which are **unverified**, by name — entity,
jurisdiction, principals, financial audit, governance path, conduct history, disclosure
quality. ⚠️ **Not a blanket hedge.** "Thinly sourced" concealed that two gUSDC inputs
were already established, one of them **adverse**: filing "team not doxxed" as unknown
let a reader assume neutral where a settled negative existed.

✅ **Mark which inputs were measured by us rather than inherited.** gUSDC's documentation
matching chain behaviour to 21 seconds was the only directly measured input on the axis,
and it belonged in a different weight class from the rest.

## 5 · Nothing from axis 5 may appear here — the anti-halo rule

**Audits, bug bounties, formal verification and test coverage belong to Contract & Admin.**
A Certora-verified contract says nothing about whether an issuer honours a redemption.

⚠️ **The canonical failure is relabelling, not citing.** On 2026-10-03 a bounty withdrawn
from axis 5 was re-offered as axis-6 evidence of "entity investment in security" — same
artifact, new label, credit retained. It was retracted. **If a fact was withdrawn from
axis 5 for lack of basis, it does not re-enter here wearing a different question.**

⚠️ **And listing is not neutral.** A fact marked "present but not scored" still rendered
behind a **✅** in a collapsed issuer panel on a live page. **A tick is a credit however
the prose around it is qualified** — so do not list axis-5 material here at all.

## 6 · Claims that may not appear on a page here

- **"No legal entity"** where nobody looked. See §1.
- **An identifiable entity written as accountability.** A name is not a principal, and a
  jurisdiction is not recourse.
- **A ruled-out collision, named.** `GAINS Ventures LLC` (St Vincent, reg. 3663,
  `gains-associates.com`) is a different company from Gains Network's operator.
  ⚠️ **Record it in frontmatter, never in the body**: naming a wrong company to say
  "not this one" gives it a mention it did not have, and **naming the correct entity
  precisely is the better defence.** Distinct from a *ticker* collision — `dusd-alto`
  carries its warning in the body because a reader could buy the wrong token.
- **A score described as held when it was never derived.** See §7.

## 7 · Held is not derived, and the rationale must say which

⚠️ **gUSDC's 5.0 was held on the reasoning that "the pseudonymity is already priced, so
cutting again would double-charge."** That is a reason **not to cut** — not a derivation
from the inputs. Re-derived against the full input set the same day, it moved to 4.5.

**So the rationale states whether the number was derived from the current inputs or
carried across a change.** ✅ A carried number is publishable when the page says it was
carried; it is not publishable described as a derivation.

## 8 · What a check of this can and cannot be

⚠️ **The test is semantic: does the rationale cite a source a reader could check?**
Nothing structural finds the failures. Measured 2026-10-03, the three reports known to
carry an underived Issuer score — `syrupusdc`, `syrupusdt`, `gusdc` — all had **long,
articulate, confident rows** and fell outside every structural bucket: not missing, not
short, not obviously thin. One was exposed only because withdrawing an audit credit left
nothing underneath it.

**So row length, row presence and overlay presence are all blind here.** A sweep against
this file is worth running; a sweep against those proxies is not.

**Our own outstanding set at creation:** 8 production reports carry `issuer_score` with
no Issuer row or section at all — `aveth`, `avusd`, `frax`, `saveth`, `savusd`, `susdai`,
`susdp`, `usdp-parallel` — plus `thbill-retail` with a row under 80 characters. ⚠️ **That
count is a floor, not an estimate**, for the reason above.
