# Syrup pair: October 31 targeted report refresh

This review updates internal report interpretation of Backing, Liquidity & Exit and Dependencies, and checks the strategy mandate, custody/banking and governance news. All scores remain held: syrupUSDC 6.5 overall, syrupUSDT 6.0 overall. It is not a whole-body verification, publication, fresh authority audit or executed exit. `last_revised` moves to October 31; `last_verified` remains October 13. September 6 authority and October 3 assurance dates remain unchanged.

## Report editorial boundary

User direction adopted October 31: keep reports focused on material durable changes. The daily October 30/31 financial update blocks were moved to the per-asset `*-dated-update-archive.md` files. Reports retain the strategy mandate, observed funded strategy type, exit-term implications, CCIP and custody/banking analysis. Current queue/cash readings remain dashboard and evidence material; only persistent stress, measured settlement deterioration or a verified incident warrants an incident narrative. This preference is recorded in both shared-evidence contracts. The user confirmed sending the TIDR structural-publication handoff on October 31; publication remains unverified.

## Selected inputs

The archived `syrupusdc_backing.json` and `syrupusdt_backing.json` are the public backing-monitor feeds used by the dashboard. `sources.json` records URLs, retrieval times, hashes and unavailable direct requests. `derived.json` separates backing, quote and supplemental redemption clocks. The supplemental monetary queue observation supersedes the old slot-only field's monetary null; the old field was not rewritten or represented as newly measured.

- USDC backing: October 31 06:44:31 UTC; quote: 04:31:27 UTC.
- USDT backing: October 31 06:45:07 UTC; quote: 04:31:36 UTC.
- Both supplemental redemption observations: Ethereum block 26,311,168, timestamp 07:11:23 UTC. Producer retrievals differ by seconds.

`producer-redemptions.py` is a retained copy of backing-monitor's collector, inspected to establish that monetary reads use one block. Its queue mark is `convertToAssets(totalShares)` at accounting NAV, not an executed settlement value. The processed-event search covers at most 7,200 blocks and is not a request-level latency series.

Independent pinned RPC replay was attempted but failed: PublicNode endpoints returned HTTP 403, and LlamaRPC returned HTTP 525. These endpoint errors are not Maple contract reverts. No independent on-chain confirmation is claimed. Source arithmetic and collection logic were checked; reported observations remain attributed to the producer. `verification-limitations.json` records these distinctions and the forum-reading scope.

## Financial interpretation

| Item | syrupUSDC | syrupUSDT |
|---|---:|---:|
| Pool cash at supplemental queue block | 10,660,664.30 USDC | 178,331.37 USDT |
| Queue at current accounting NAV | 2,478,351.33 USDC | 10,616,376.10 USDT |
| Cash / queue | 430.15% | 1.68% |
| Additional funding needed | 0 USDC | 10,438,044.73 USDT |

The USDT gap is material funding dependence, not a quantified loss, proof of insolvency, measured excessive wait or evidence of a frozen queue. USDC cash covers this sampled queue without establishing lasting buffer quality or a new holder's priority.

Exact-address snapshot comparisons isolate the USDC non-credit contraction to `0xc638Be14409fFb09B1b8542B6dE5c7F30AdbAB8a` (16.15M principal to 5). USDT's basis strategy increased from 4.2M to 7.6M; its DeFi position fell from 18.5M to 5. These reconcile principal changes, not cash-flow destinations or P&L. The basis position's 720-hour notice metadata requires operational/contract confirmation and is not a holder withdrawal SLA.

`derive.py` recomputes position sums, strategy totals, queue coverage, the cash funding gap, collateral numeric availability and historical principal differences. Run it from this repository with `python3 data/reviews/syrup-governance-refresh-2026-10-31/derive.py`. Historical input paths and hashes are in `derived.json`; their original archives are preserved. Numeric collateral availability does not prove custody, liquidation value or complete credit coverage.

## Policy and control interpretation

The official allocation announcement states a launch cap per new strategy against overall Maple deposits, beginning in USDT. It is not a 5% per-pool or combined non-credit limit, nor independently verified contract enforcement. Announced securities/receivables strategies are not treated as funded exposure without position-level evidence.

Zodia's segregated-custody mechanism does not identify which current loans use it. IRACE's banking announcement does not establish per-pool balances or deposit-insurance protection. Both add review questions; neither automatically changes scores.

The CCIP announcement and archived current registry identify a migration and documented addresses, not verified active registration, replacement-pool authority, message security settings or matched lock/liability reconciliation. A listed mint/redeem receiver is not evidence that off-Ethereum primary redemption is operational. Older authority findings cannot be promoted to fresh verification.

The official insights list, October memo, latest forum list, MIP-021 and its team clarification, and the redemption-titled conversion discussion were reviewed. Token buyback and MPL migration topics do not establish changed pool authority or pool withdrawal failures. Forum JSON requests were unavailable; readable forum pages were reviewed with the web tool. No separate governance ingestion or monitoring was installed.

## Remaining work and publication status

1. Independently replay supplemental redemption reads and measure request-level processing, funding sources and actual settlement. Observe persistence before treating a spot queue ratio as a duration finding.
2. Confirm the funded basis position's counterparties, leverage, margin custody, maturity/notice and unwind rights; reconcile actual proceeds for reduced positions.
3. Refresh asset/chain-specific active CCIP pools, mint/burn permissions, owners, bypasses, delays, rate limits, verification/finality settings and matched liabilities/locks/in-flight amounts.
4. Obtain loan-level custody allocation and legal-enforcement evidence for Zodia or other channels; bank account entities and balances remain unestablished.
5. Propagate the authored updates to public reports through their publication owner and verify actual served content. The user confirmed dispatch of the structural-publication handoff; no report deployment is claimed.

All original historical statistics retain their observation windows. No score overlays or producer financial files were edited. The existing overall-score exception reviews remain due November 1; this update does not silently extend them.
