import { Network, NetworkProps } from "./shared.d"

export function getExplorerURL(
  txOrAddrr: string,
  chainId: string | number
): string | null

export const NetworkList: Array<NetworkProps>

// Networks
export const Mainnet: Network
export const Ropsten: Network
export const Rinkeby: Network
export const Goerli: Network
export const Kovan: Network
export const Polygon: Network
export const Matic: Network
export const Celo: Network
export const Fantom: Network
export const Avalanche: Network
export const Binance: Network
export const Aurora: Network
export const IoTeX: Network
export const Gnosis: Network
export const Moonriver: Network
export const Fuse: Network
