// Reports use inconsistent chain identifiers ("eth" vs "ethereum", "arb" vs "arbitrum").
// Normalize on read so filtering and display are consistent.

const ALIASES: Record<string, string> = {
  eth: "ethereum",
  ethereum: "ethereum",
  arb: "arbitrum",
  arbitrum: "arbitrum",
  op: "optimism",
  optimism: "optimism",
  base: "base",
  bsc: "bnb",
  bnb: "bnb",
  tron: "tron",
  solana: "solana",
  sol: "solana",
  fraxtal: "fraxtal",
  linea: "linea",
  scroll: "scroll",
  blast: "blast",
  hyperevm: "hyperevm",
  avax: "avalanche",
  avalanche: "avalanche",
  polygon: "polygon",
  matic: "polygon",
  mantle: "mantle",
  stable: "stable",
  plasma: "plasma",
  monad: "monad",
  sei: "sei",
  seievm: "sei",
  pharos: "pharos",
  berachain: "berachain",
  gnosis: "gnosis",
  sonic: "sonic",
  robinhood: "robinhood",
  hood: "robinhood",
  xlayer: "xlayer",
  ink: "ink",
  // Added 2026-09-09. These five were present in report frontmatter and absent
  // here, so chainLabel() fell through to the raw lowercase slug and rendered
  // "Ethereum · xrpl" on rlusd and "…Solana · sui" on ausd. check-chain-slugs.ts
  // now fails the build on any unmapped slug so this cannot recur silently.
  celo: "celo",
  fantom: "fantom",
  stellar: "stellar",
  sui: "sui",
  xrpl: "xrpl",
};

const LABELS: Record<string, string> = {
  monad: "Monad",
  sei: "Sei",
  pharos: "Pharos",
  berachain: "Berachain",
  ethereum: "Ethereum",
  arbitrum: "Arbitrum",
  optimism: "Optimism",
  base: "Base",
  bnb: "BNB Chain",
  tron: "Tron",
  solana: "Solana",
  fraxtal: "Fraxtal",
  linea: "Linea",
  scroll: "Scroll",
  blast: "Blast",
  hyperevm: "HyperEVM",
  avalanche: "Avalanche",
  polygon: "Polygon",
  mantle: "Mantle",
  stable: "Stable",
  plasma: "Plasma",
  gnosis: "Gnosis",
  sonic: "Sonic",
  robinhood: "Robinhood Chain",
  xlayer: "X Layer",
  ink: "Ink",
  celo: "Celo",
  // ⚠️ Fantom is NOT aliased to Sonic even though the network rebranded, because
  // `sonic` already exists here as its own slug and silently merging two keys
  // would be the "spelled two ways" defect in reverse — collapsing chains that
  // may both be referenced. Left distinct pending a deliberate decision.
  fantom: "Fantom",
  stellar: "Stellar",
  sui: "Sui",
  xrpl: "XRP Ledger",
};

export function normalizeChain(c: string): string {
  return ALIASES[c.toLowerCase()] ?? c.toLowerCase();
}

/** True if the slug is known to ALIASES. Used by the build gate: an unknown slug
 *  is not a display bug alone — it also renders raw and groups on its own key. */
export function isKnownChain(c: string): boolean {
  return Object.prototype.hasOwnProperty.call(ALIASES, c.toLowerCase());
}

export function chainLabel(c: string): string {
  const k = normalizeChain(c);
  return LABELS[k] ?? k;
}
