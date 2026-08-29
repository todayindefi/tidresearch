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
};

export function normalizeChain(c: string): string {
  return ALIASES[c.toLowerCase()] ?? c.toLowerCase();
}

export function chainLabel(c: string): string {
  const k = normalizeChain(c);
  return LABELS[k] ?? k;
}
