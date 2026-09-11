---
asset: "PYUSD"
slug: "pyusd"
aliases: ["PYUSD", "PayPal USD"]
chains: ["eth", "sol", "arb", "stellar"]
category: "stablecoin"
peg_mechanism: "fiat-backed"
assessment_type: "light"
date: "2026-07-08"
last_verified: "2026-07-09"
last_revised: "2026-09-11"
featured: false
production: true
issuer: "Paxos Trust Company (on behalf of PayPal)"
market_cap_approx: 2452034067
peg_mechanism_score: 7.5
backing_score: 8.0
liquidity_score: 6.5
underlying_score: 7.0
structural_score: 2.5
axis_frame: six
issuer_score: 7.5
overall_score: 7.0
---

# PYUSD — Risk Report

**Moderate risk · 7.0/10**

> **PayPal's dollar, run by one of the most-regulated issuers in crypto.** PYUSD is issued by **Paxos** — a New York (NYDFS)-supervised trust company — on behalf of **PayPal**, backed 1:1 by cash, short-dated US Treasuries and reverse repos held in bankruptcy-remote trust, with monthly attestations. On issuer and backing quality it sits near the top of the table. It has grown roughly 4x over the past year to a multi-billion-dollar supply and now dominates the Solana stablecoin market. Two things keep it at a 7.0: on-chain liquidity, while much improved, is still a step behind USDC and USDT; and PYUSD's 2026 multichain expansion added a **LayerZero cross-chain bridge layer** — a surface its deep, native Ethereum and Solana form doesn't carry.

| Yield | Exit method | Primary redemption | Age | Chains |
|---|---|---|---|---|
| None (PayPal has at times run promotional rewards, not a native yield) | Sell on a supporting CEX/DEX at peg; redeem 1:1 via Paxos | Mint/redeem 1:1 with Paxos; retail exits via market | Since Aug 2023 | Native on Ethereum, Solana, Arbitrum, Stellar; LayerZero transport to more |

## Summary

PYUSD is PayPal's fiat-backed stablecoin, issued and managed by **Paxos Trust Company** under **NYDFS** supervision — one of the most rigorous US stablecoin regimes. It is backed 1:1 by cash, short-dated US Treasuries and Treasury reverse repos held in bankruptcy-remote trust accounts, with **monthly attestations by Withum**.

Supply is **$2.452 billion across its two native chains, measured 2026-09-11** — **$1,715,817,167** on Ethereum and **736,216,900** on Solana — off a **peak above $4 billion** in March 2026. ⚠️ **The two legs are moving in opposite directions:** Ethereum has fallen from **1,969,119,192** on 2026-08-23, while Solana has risen from **688,176,370**. **That is a cross-chain total and is not reproducible from an Ethereum read** — PYUSD is native on both Ethereum and Solana, Solana is not an EVM chain, and the Ethereum leg alone read 1,969,119,192 on 2026-08-23, roughly 70% of the total. **We have now read the Solana leg directly: 688,176,370.75 on 2026-08-23**, against the mint Paxos publishes at paxos.com/pyusd. Added to the Ethereum leg that is **2,657,295,563 — about 96% of the published ~$2.77B accounted for across the two native chains**, with the Arbitrum and Stellar deployments plus the LayerZero-reachable float making up the rest. **Read that as corroboration of the headline figure, not as a challenge to it.** It remains the fastest growth among the major stablecoins, and it now leads the Solana stablecoin market. PYUSD is native on **Ethereum, Solana, Arbitrum and Stellar**, with a **LayerZero OFT** layer extending its reach to further chains.

The 7.0/10 reflects a top-tier regulated issuer and reserve posture, held back by two things: liquidity that is still below USDC and USDT, and a newly-added cross-chain bridge surface. On the qualities that matter most for a fiat dollar — who stands behind it and what actually backs it — PYUSD is among the strongest in the set. It sits a step below the biggest names purely on market depth and on the newness of its multichain surface — whose main bridge we have now verified is strongly configured.

## 1 · Stability — 7.5

This is the new structural point, and it deserves to be framed honestly rather than alarmingly.

PYUSD's 2026 expansion added native **Arbitrum** and **Stellar** deployments plus a **LayerZero OFT** (Omnichain Fungible Token) cross-chain transport layer reaching additional chains. An OFT bridge introduces a specific exploit class: a compromised cross-chain verifier could, in principle, mint unbacked tokens on a destination chain. That is the class of failure that drained KelpDAO's rsETH in April 2026 — a bridge-layer compromise, not a reserve failure.

Here is the part that matters for most readers: **your deep, canonical PYUSD lives on the native chains — Ethereum and Solana — and is not exposed to that class.** The exposure, to whatever extent it exists, would sit on the long-tail bridged chains, where balances are far smaller. We verified the main (Paxos-run) bridge configuration on-chain: **every active route requires three independent verifiers to agree — LayerZero Labs, Paxos's own verifier, and a third (Canary) — with no single-point exposure.** That is a genuinely strong setup, stronger than several peers, and it means no one compromised verifier can forge a cross-chain mint. There is also a *separate*, permissionless bridge layer (a Stargate-based deployment sometimes labelled PYUSD0); we resolved and checked that too — it is its own three-of-three-verifier mesh with no weak route, and, importantly, **it has no bridge link back to the native PYUSD reserve on Ethereum**, so even in the worst case it could not unlock the real backing. We treat the bridge as a **watch item, not a downgrade** — no live incident, nothing suggesting an imminent depeg. The simple practical rule still holds: for size, hold and transact on the native chains.

The practical takeaway for retail is simple: **hold and transact PYUSD on Ethereum or Solana** unless you specifically need one of the newer chains, in which case treat bridged PYUSD as not yet proven equivalent to native.

## 2 · Backing — 8.0

PYUSD is backed 1:1 by **cash, short-dated US Treasuries and Treasury reverse repos**, held in a **bankruptcy-remote, NYDFS-regulated trust**, with **monthly attestations by Withum**. This is a top-tier reserve profile — the same cash-and-Treasuries playbook as USDC, under one of the strongest US regulatory regimes.

Bankruptcy-remote structure matters: it means reserve assets are held for the benefit of PYUSD holders and are meant to be insulated from Paxos's own creditors if Paxos failed. The reserve is short-dated and high-quality, which minimizes duration and credit risk on the assets themselves. Backing quality is simply not the limiting factor for PYUSD's score — liquidity and the new bridge surface are.
## 3 · Liquidity & Exit — 6.5

Institutions mint and redeem 1:1 with Paxos; retail exits happen through the secondary market, plus in-app conversion for PayPal users. Native Ethereum and Solana liquidity is genuinely deep now — PYUSD is the leading Solana stablecoin — with real DeFi integration across Morpho, Aave and Curve.

The caveat is *where* that depth lives. It is concentrated on the native chains. The long-tail LayerZero-reachable chains exist for transport and reach, not for deep local markets, so exiting a large position on one of those is a bridge-back-then-sell operation rather than a local one. For retail size on Ethereum or Solana, exit at the peg is straightforward; for large size on a bridged chain, plan the route back to a native chain first.

## 4 · Dependencies — 7.0

**Level with USDC, by a different route: less breadth, better ring-fencing, and no realized failure.**

✅ **Reserves sit in a bankruptcy-remote trust structure under NYDFS supervision**, which is a genuinely different arrangement from a commercial bank deposit — it is the specific mechanism whose absence broke USDC in March 2023. ✅ **Paxos has issued regulated stablecoins since 2018 without a depeg**, so this is a track record rather than a design claim.

⚠️ **PayPal's 400 million users are distribution, not backing.** They are the reason the asset has reach; they are not a counterparty standing behind it, and nothing about that user base makes a reserve more recoverable.

⚠️ **Bridged PYUSD is not native PYUSD and carries dependencies native does not.** A LayerZero deployment adds an endpoint, a peer configuration and a verifier set to the counterparty list. **PYUSD0 / Stargate representations must be authenticated by a pointer back to the canonical token before they are treated as the same asset.**

⚠️ **Not priced here: Paxos's regulatory standing and its attestor's identity.** Those are Issuer, and crediting them twice would price one comfort on two axes.

## 5 · Contract & Admin — 2.5

⚠️ **Upgrade authority is a single address with no on-chain quorum and no delay, over $1.716B.** Measured 2026-09-11 from the token's own storage:

- Token `0x6c3ea9036406852006290770BEdFcAbA0e23A0e8` — `symbol()` returns **PYUSD**, `totalSupply()` **$1,715,817,167**
- **Both EIP-1967 slots read zero**; the admin lives in the **legacy ZeppelinOS slot**, `keccak256("org.zeppelinos.proxy.admin")`
- Admin `0xc94bcf6e1d8b3558e3b62e743630d50497e3851c` — **empty code, nonce 5**, `getThreshold()` reverts

⚠️ **The zeros are evidence here rather than absence, and that distinction is what makes this readable.** Both modern slots read zero *while* `symbol`, `decimals` and `totalSupply` answer normally — so the contract is live and the modern slots are genuinely unused, not merely unreached by a failed probe.

⚠️ **Any-of-1, not 1-of-n.** One signature replaces the implementation and it takes effect immediately. **The nonce moved from 4 to 5 during the period this was being assessed**, so the key is in active use rather than dormant.

⚠️ **Custody is undisclosed.** Empty code proves there is **no on-chain quorum**; it cannot distinguish a single private key from an off-chain MPC or HSM quorum. **Paxos's published contract repository makes no multisig claim about this admin.** *(Paxos Custody's HSM and cold-storage material describes customer asset custody, which is a different thing from the token's upgrade key.)* **So this is "no verifiable quorum", not "one private key".**

### The Solana leg, which the Ethereum reading does not cover

⚠️ **PYUSD's Solana deployment carries a power its Ethereum contract has no equivalent of.** Measured 2026-09-11 on the mint itself:

| authority | holder |
|---|---|
| `freezeAuthority` | `2apBGMsS6ti9RyF5TwQTDswXBWskiJP2LD4cUEDqYJjk` |
| **`permanentDelegate`** | `2apBGMsS6ti9RyF5TwQTDswXBWskiJP2LD4cUEDqYJjk` |
| `mintCloseAuthority` | `2apBGMsS6ti9RyF5TwQTDswXBWskiJP2LD4cUEDqYJjk` |
| `transferHook` authority | `2apBGMsS6ti9RyF5TwQTDswXBWskiJP2LD4cUEDqYJjk` |
| `mintAuthority` | `8Jornc27vtAYPkwDzsZVgLQchAYyC8nD7aCNPCDV8Qk2` *(different)* |

Mint `2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo`, Token-2022, supply **736,216,899.87**.

⚠️ **`permanentDelegate` is not a freeze.** A freeze immobilises a balance where it sits. A permanent delegate can **move any holder's tokens, to anywhere, without that holder's signature or consent** — and it is set at the mint, so it applies to every account that has ever held the token. **There is no equivalent power in PYUSD's Ethereum contract.**

⚠️⚠️ **The same address holds those four authorities on USDG, Paxos's other stablecoin.** Verified by reading USDG's mint (`2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH`, supply **598,539,708.22**) directly. **Mint authorities differ between the two assets; the seize surface does not.** So one address carries move-anyone's-balance authority over roughly **$1.335 billion** of Solana-side supply across two tokens — see [USDG](/reports/usdg/).

✅ **Read this as disclosed capability, not as evidence of misuse.** Paxos is a regulated issuer and a permanent delegate is a plausible compliance instrument — the comparable power on Ethereum is why `destroyBlackFunds` exists on USDT. ⚠️ **And whether `2apBGMsS…` is a single key or a multisig cannot be read from a Solana address**, and Paxos's contract repository does not say. **So this is "one address holds seize authority over both assets", not "one person can do this."**

⚠️ **A holder cannot easily discover this.** It is a Token-2022 mint extension, not a function on a contract page — you have to know the extension exists and go and read the mint.


## 6 · Issuer — 7.5

This is a genuine strength, and it's worth being specific about why.

**Paxos** is an NYDFS-regulated trust company that has issued regulated stablecoins since 2018 (USDP). Critically, when regulators directed Paxos to stop minting BUSD in 2023, Paxos ran that issuance through an **orderly, NYDFS-supervised wind-down** — holders were made whole and redemptions continued cleanly. That episode is often mis-remembered as a black mark; in practice it *reinforced* confidence in Paxos's operational competence, because it demonstrated exactly the behavior you want from a regulated issuer under stress.

On top of Paxos sits **PayPal** — a public company with 400M+ users. That brings two things: distribution reach that few crypto-native issuers can match, and strong reputational alignment. A PYUSD reserve failure would be existential for PayPal's fintech credibility, which aligns the sponsor's incentives tightly with holders'.

Standard centralized controls apply — Paxos can freeze, mint and burn — which is expected for a regulated fiat-backed model and is the price of the regulatory wrapper. PYUSD is not a censorship-resistant dollar, and it does not pretend to be.

## What you actually earn

**Nothing native** — plain PYUSD pays no yield. PayPal has run promotional reward programs at various times, and you can put PYUSD to work in DeFi (lending on Morpho or Aave) or simply hold it inside the PayPal app, but the token itself is not yield-bearing. If you hold PYUSD, you hold it for the dollar, the distribution reach, and the issuer quality — not for a rate.

## Audits & security

PYUSD sits under NYDFS oversight with **monthly Withum attestations** on reserves. Paxos's contract and operational track record — across PYUSD, USDP and the earlier BUSD — is mature, with **no depeg or exploit on PYUSD since its August 2023 launch**. The residual risks are, in order: liquidity depth relative to the biggest names, the new cross-chain surface, and standard centralized-issuer control. Reserve opacity is not on that list — the attestation cadence and reserve composition are among the clearer ones in the market.

## Score breakdown

| Dimension | Score | Notes |
|---|---|---|
| Peg Mechanism | 7.5 | Standard fiat-backed 1:1 mint/redeem via an NYDFS-regulated trust company; clean peg history since 2023; centralized controls (freeze/mint/burn) expected for the model. |
| Backing | 8.0 | High-quality reserves — cash, short-dated Treasuries, reverse repo — in bankruptcy-remote NYDFS trust, with monthly Withum attestations. Top-tier, the same playbook as USDC. |
| Liquidity | 6.5 | Grown ~4x to a multi-billion supply and now dominates the Solana stablecoin market, with deep DeFi integration on native ETH/SOL. Still thinner than USDC/USDT and concentrated on native chains — the long-tail LayerZero chains are transport-only. |
| Issuer | 7.5 | Paxos — NYDFS-regulated, multi-year track record — issuing for PayPal (public company, huge distribution, strong reputational alignment). One of the strongest issuer profiles in the set. |
| **Overall** | **7.0** | Top-tier regulated issuer and reserve posture, held back by liquidity still below USDC/USDT and a newly-added cross-chain bridge surface. Best held on its native Ethereum/Solana rails. ⚠️ **Held, and it sits +0.50 above its own axis mean of 6.50** — against the at-or-below convention applied elsewhere in this coverage. **Held by decision on 2026-09-11** rather than left unresolved — the axis work that lowered the mean did not change any reserve, peg, liquidity or issuer fact. |

## Who it's for

Holders who want a top-tier regulated dollar with strong reserve transparency and a public-company sponsor — primarily on Ethereum or Solana — and PayPal-ecosystem users who value in-app access to the same token. If your priority is a clean, well-attested, well-regulated dollar and you can live with centralized controls, PYUSD is a strong choice.

## Who should avoid

- Anyone needing the deepest everywhere-liquidity — that remains USDC and USDT.
- Anyone planning to hold **large size on PYUSD's long-tail bridged chains** before the cross-chain security configuration is independently verified. Stay native (ETH/SOL) for size.
- Anyone needing a **censorship-resistant** dollar — PYUSD is a freezable, centralized-issuer token by design.

## What to watch

- **Cross-chain (LayerZero OFT) security config** — both bridge layers are verified strong (three independent required verifiers each, no single-point exposure), and the separate permissionless layer has no path back to the native reserve. The residual watch is simply that these configs are issuer-changeable, and that a couple of non-EVM legs (e.g. Tron/Aptos) couldn't be checked directly. Native ETH/SOL is unaffected in all cases.
- **Liquidity trajectory** — PYUSD's growth and DeFi depth are the swing factor for its score. Continued deepening supports a higher liquidity mark over time.
- **Market-cap volatility** — supply is off its 2026 peak (from above $4B toward ~$2.77B). Large mint/burn swings are normal for a distribution-driven stablecoin and are not, by themselves, a red flag.
- **PayPal strategic commitment** — PYUSD's distribution edge depends on PayPal's continued push. A pullback would blunt the growth story that underpins the liquidity trajectory.

---

## Revision history

- **2026-08-23 — Solana leg read directly; no score change.** Supply measured across deployments rather than inferred from a single chain.
