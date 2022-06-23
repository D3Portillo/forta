export type NetworkType = "Mainnet" | "Testnet"

export interface NetworkProps {
  chainName: string
  shortName: string
  chainId: string
  chainDecimalId: number
  currency: string
  rpcUrl: string
  blockExplorerUrl: string
  type: NetworkType
}

export interface Network extends NetworkProps {
  getExplorerURL(txOrAddrr: string): string
}
