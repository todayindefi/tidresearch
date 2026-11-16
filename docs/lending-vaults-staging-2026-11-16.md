# Lending vault reports — staging release

- /vaults/re7-weth-optimism/:5.5, exact Optimism direct vault.
- /vaults/steakhouse-prime-eth-monad/:5.0, exact Monad direct vault.
- /vaults/beefy-steakhouse-prime-weth-monad/:4.5, exact Monad Beefy wrapper.

Dedicated six-question vault layout; no asset-axis grades. Original financial, control, API and documentary clocks retained, with code/oracle/control and stressed-exit assurance limits. Revision history remains last. Wrapper exit simulations are not transactions or future liquidity guarantees. Shared market cash and overlapping direct/wrapper NAV are not additive.

The wrapper binds bm-beefy-monad-public-evidence-2026-11-16-v2 alongside unchanged assessment and owner-source versions. Its two public JSON projections are copied byte-exact; evidence SHA256089edcf299138309c3deed9273002b89797a1d29ce9e1317f8780d930e6850c4. No private custody, account or full-holder evidence, raw traces or internal provenance is included.

Deployed staging127-route build passed six local and six served browser cases at1440/390 with light/dark browser preferences (fixed-dark report theme), identity/score/clock/version checks, minimum sampled text contrast4.5, no page overflow or JS errors, Vaults index checks and direct/Re7 regressions.115 prior report/index contents and74 static dashboard/eUSD files preserved. Public source APIs respond200; explorer automation403 limits page-content verification. Production remains unchanged. This source branch contains only the three lending reports and supporting schema/layout/index/public evidence; it is not a replacement for the full maintained staging artifact.
