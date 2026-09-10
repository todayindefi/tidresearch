# Contract & Admin (axis 5) — evidence requirements

Owner rule, 2026-09-11. Applies to every new Contract & Admin score and to every
refresh of one. **riskAnalyst authors the number; this specifies the evidence that
must exist before it can be published here.**

## Why this exists

Axis 5 is the axis where on-chain reads look most conclusive and are most easily
over-read. Three failures inside two days produced it:

- A walk supplied **four fabricated addresses** across two assets. Each preserved the
  first ten characters and last four of a real address, with an invented middle — the
  exact shape a **truncated display string** leaves behind.
- `eth_getCode` returning `0x` was written up as **"necessarily one private key."** It
  is not. An MPC or HSM arrangement produces one address from a distributed key and is
  invisible to chain state.
- A separate asset's "single EOA" turned out to be a **Fireblocks 2-of-3**.

The chain says what the *contract* permits. It cannot say who holds the key. Both
halves are needed, and the second one lives in documents.

## 1 · Every address must be derived from the subject

**Never from a display string, a handoff, a prior report, or a pattern.** Derive from a
call that RETURNS the address: `minter()`, `owner()`, `coins()`, `hasRole`, the admin
storage slot. Then:

- **Confirm the slot is the one that contract type actually uses.** USDC and PYUSD keep
  the admin in the **legacy ZeppelinOS** slot, `keccak256("org.zeppelinos.proxy.admin")`;
  both EIP-1967 slots read zero. A reader probing EIP-1967 then `admin()` finds nothing
  twice and concludes there is no upgrade path. There is one.
- **Read role IDs off the contract, not from the role name.** RLUSD's `MINTER_ROLE()`
  returns `0xf0887ba6…2dc9`; `keccak256("MINTER_ROLE")` is `0x9f2df0fe…56a6`. Using the
  guessed id returns `false` for every candidate — which reads as "no minter exists."
- **Run a fabricated-address control in the same pass.** If the control cannot come back
  different from the subject, the run proves nothing.
- **Check every chain the asset is deployed on.** frxUSD's OFT address is silent on
  Ethereum and live on six other chains; single-chain checking calls it fabricated.

## 2 · Reconcile the walk against the issuer's own documentation

**Before the score publishes, check the issuer's docs and public repositories for what
they say about access control, and reconcile it against what was measured.** Look for:

- the roles the contract defines, and who the issuer says holds them;
- any statement about **key custody** — single key, multisig contract, MPC, HSM,
  threshold signing, named custodian;
- any statement about **timelocks, quorums or notice periods**;
- the **deployment/upgrade runbook**, which often describes the admin's nature in passing.

**Then record which of three cases applies:**

| case | how to write it |
|---|---|
| docs **agree** with the measurement | state both; the claim is corroborated |
| docs **disagree** with the measurement | ⚠️ a finding in its own right — the measurement governs, and the divergence is published |
| docs are **silent** | say so explicitly: *custody is undisclosed*, not *custody is a single key* |

⚠️ **Silence is the common case and must not be written as the adverse case.** As of
2026-09-11, Circle's `stablecoin-evm` docs specify permissions only and say nothing about
custody or signer counts; Paxos's `pyusd-contract` repo makes no multisig claim; Agora's
docs describe no upgrade authority at all. **None of the three documents how the key is
held.** That is publishable as an absence of disclosure — and it is a different sentence
from "one private key."

⚠️ **Do not import an issuer's custody marketing.** Paxos Custody's HSM/cold-storage/
multisig material describes **customer asset custody**, not the token contract's upgrade
key. Circle's MPC material describes **Circle Wallets**, a separate product. Neither
speaks to the proxy admin, and citing them as if they do manufactures a control that was
never claimed.

## 3 · Check audits and bug bounties for this axis specifically

An audit is evidence about **what was examined**, not a general assurance.

- **Does any audit cover the upgrade path and the admin roles**, or only token logic?
  An audit that never looked at the admin surface says nothing about it.
- **Name the firm and the date**, and whether the audited version is the deployed one.
- **Is there a bug bounty, and does its scope include the privileged-role surface?**
  Many exclude "centralization risk" and "admin key compromise" by definition — which is
  precisely this axis. **A bounty that excludes the admin surface is not coverage of it.**
- ⚠️ **Record the count as carried, not counted,** unless it was independently verified.

## 4 · Coverage is part of the score

State the chains read and the chains not read. **Unread is not clean.** Non-EVM legs that
cannot carry the proxy shape are outside the measurement and must be named as such, not
folded into a per-asset conclusion.

## 5 · What may not be claimed

- **"One private key"** from `eth_getCode` = `0x`. Say **"no on-chain quorum"** and, if
  the docs are silent, **"custody undisclosed."**
- **A complete holder set** from a role enumeration that the contract does not support.
  RLUSD returns `AccessControlEnumerable` false and reverts on `getRoleMemberCount`; an
  empty list there means *unsupported question*, not *no holders*.
- **A delay** that the delayed party can shorten. frxUSD's `delay()` is 86,400s with
  `MINIMUM_DELAY()` 7,200s and `Timelock.admin()` being the same Safe the delay
  constrains — that is a setting, not a constraint.
- **Containment as holder safety.** USDC's six distinct per-chain keys mean no single key
  reaches the whole asset. An Ethereum holder still faces one undelayed key over $49.86B.
  That is a **systemic** property wearing a holder frame if written the other way.
