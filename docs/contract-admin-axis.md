# Contract & Admin (axis 5) — what tidresearch requires before publishing

⚠️ **The scoring process for this axis is riskAnalyst's, not ours.** How the score is
derived — address derivation, the documentation reconciliation, audit and bounty
coverage — is specified in their repo. This file records only what must be true of a
rationale before it goes on a page here.

**We do not set the number.** We publish it, and we decline to publish it without these.

## 1 · The rationale states the documentation outcome

Owner rule, 2026-09-11: an axis-5 score is reconciled against the issuer's own docs and
public repositories before it publishes. The rationale must say which of three happened:

| case | how the page reads |
|---|---|
| docs **agree** with the measurement | state both; the claim is corroborated |
| docs **disagree** | ⚠️ a finding in its own right — the measurement governs, the divergence is published |
| docs are **silent** | *custody is undisclosed* — never *custody is a single key* |

⚠️ **Silence is the common case and is not the adverse case.** Checked 2026-09-11: Circle's
`stablecoin-evm` docs specify permissions only; Paxos's `pyusd-contract` repo makes no
multisig claim about the proxy admin; Agora's docs describe no upgrade authority at all.
**None of the three documents how the key is held.**

⚠️ **An issuer's custody marketing is not a statement about the upgrade key.** Paxos
Custody's HSM/cold-storage material covers customer assets; Circle's MPC material covers
Circle Wallets. Neither speaks to the proxy admin, and a page citing them as if they did
would manufacture a control nobody claimed.

## 2 · Audit and bounty coverage is stated, not implied

An audit is evidence about **what was examined**. If the rationale cites audits, the page
says whether any of them covered the **upgrade path and admin roles** rather than token
logic, and whether the audited version is the deployed one. A bug bounty that excludes
"centralization risk" or "admin key compromise" **is not coverage of this axis** and is
not written as though it were. Counts carried from an issuer's own disclosure are marked
as carried, not counted.

## 3 · Coverage is on the page

Chains read and chains not read. **Unread is not clean.** Non-EVM legs that cannot carry
the proxy shape are named as outside the measurement.

## 4 · Four claims that may not appear on a page here

- **"One private key"** from `eth_getCode` = `0x`. It proves **no on-chain quorum** only;
  MPC and HSM produce one address from a distributed key and are invisible to chain state.
  A separate asset's "single EOA" turned out to be a Fireblocks 2-of-3.
- **A complete holder set** from an enumeration the contract does not support. RLUSD
  returns `AccessControlEnumerable` false and reverts on `getRoleMemberCount`; an empty
  list there means *unsupported question*, not *no holders*.
- **A delay the delayed party can shorten.** frxUSD's `delay()` is 86,400s with
  `MINIMUM_DELAY()` 7,200s and `Timelock.admin()` being the same Safe it constrains.
- **Containment written as holder safety.** USDC's six distinct per-chain keys mean no
  single key reaches the whole asset; an Ethereum holder still faces one undelayed key
  over $49.86B. Systemic property, not a holder benefit.

## 5 · Addresses on the page are full, never truncated

A truncated address is a template, not an identifier. `0xbb8a939e…18a3` matches the real
Optimism admin **and** the fabricated one that reached two walks. See
`check-internal-leaks.ts` and the orphan-truncation sweep.
