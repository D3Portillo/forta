type NetworkType = "Mainnet" | "Testnet"
interface NetworkProps {
  chainName: string
  shortName: string
  chainId: string
  chainDecimalId: number
  currency: string
  rpcUrl: string
  blockExplorerUrl: string
  type: NetworkType
}
type URL_RPC = "URL_RPC"
type URL_EXPLORER = "URL_EXPLORER"

export const MAINNET = "Mainnet" as const
export const TESTNET = "Testnet" as const
const NetworkList = [] as Array<NetworkProps>
const rpc = (path: string) => `https://${path}` as URL_RPC
const exp = (path: string) => rpc(path) as URL_EXPLORER
const internalGetExplorerURL = (explorer: string, txOrAddrr: string) => {
  if (txOrAddrr.length <= 42) {
    return `${explorer}/address/${txOrAddrr}`
  }
  return `${explorer}/tx/${txOrAddrr}`
}

class Network implements NetworkProps {
  chainName = ""
  chainDecimalId = 0
  chainId = ""
  rpcUrl = ""
  blockExplorerUrl = ""
  shortName = ""
  type = TESTNET
  currency = "ETH"
  constructor(
    chainDecimalId: number,
    chainId: string,
    shortName: string,
    chainName: string,
    rpcUrl: URL_RPC,
    blockExplorerUrl: URL_EXPLORER,
    /** Defaults to "Testnet" */
    type: NetworkType = TESTNET,
    /** Defaults to "ETH" */
    currency: string = "ETH"
  ) {
    const props: NetworkProps = {
      chainId,
      chainDecimalId,
      shortName,
      chainName,
      rpcUrl,
      blockExplorerUrl,
      currency,
      type,
    }
    Object.assign(this, props)
    NetworkList.push(props)
  }
  getExplorerURL = (txOrAddrr: string): string => {
    return internalGetExplorerURL(this.rpcUrl, txOrAddrr)
  }
}

export const Mainnet = new Network(
  1,
  "0x1",
  "Mainnet",
  "Ethereum Main Network (Mainnet)",
  rpc("mainnet.infura.io/v3"),
  exp("etherscan.io"),
  MAINNET
)

export const Ropsten = new Network(
  3,
  "0x3",
  "Ropsten",
  "Ropsten Test Network",
  rpc("ropsten.infura.io/v3"),
  exp("ropsten.etherscan.io")
)

export const Rinkeby = new Network(
  4,
  "0x4",
  "Rinkeby",
  "Rinkeby Test Network",
  rpc("rinkeby.infura.io/v3"),
  exp("rinkeby.etherscan.io")
)

export const Goerli = new Network(
  5,
  "0x5",
  "Goerli",
  "Goerli Test Network",
  rpc("goerli.infura.io/v3"),
  exp("goerli.etherscan.io")
)

export const Kovan = new Network(
  42,
  "0x2a",
  "Kovan",
  "Kovan Test Network",
  rpc("kovan.infura.io/v3"),
  exp("kovan.etherscan.io")
)

export const Polygon = new Network(
  137,
  "0x89",
  "Matic",
  "Matic Mainnet",
  rpc("rpc-mainnet.maticvigil.com"),
  exp("polygonscan.com"),
  MAINNET,
  "MATIC"
)

export const Matic = Polygon

export const Celo = new Network(
  42220,
  "0xa4ec",
  "Celo",
  "Celo Mainnet",
  rpc("forno.celo.org"),
  exp("explorer.celo.org"),
  MAINNET,
  "CELO"
)

export const Fantom = new Network(
  250,
  "0xfa",
  "Fantom",
  "Fantom Mainnet",
  rpc("rpc.fantom.network"),
  exp("ftmscan.com"),
  MAINNET,
  "FTM"
)

export const Avalanche = new Network(
  43114,
  "0xa86a",
  "Avalanche",
  "Avalanche C-Chain",
  rpc("rpc.ankr.com/avalanche"),
  exp("explorer.avax.network"),
  MAINNET,
  "AVAX"
)

export const Binance = new Network(
  56,
  "0x38",
  "Binance",
  "Binance Smart Chain Mainnet",
  rpc("rpc.ankr.com/bsc"),
  exp("bscscan.com"),
  MAINNET,
  "BNB"
)

export const Aurora = new Network(
  1313161554,
  "0x4e454152",
  "Aurora",
  "Aurora Mainnet",
  rpc("mainnet.aurora.dev"),
  exp("aurorascan.dev"),
  MAINNET,
  "AURORA"
)

export const IoTeX = new Network(
  4689,
  "0x1251",
  "IoTeX",
  "IoTeX Network Mainnet",
  rpc("rpc.ankr.com/iotex"),
  exp("iotexscan.io"),
  MAINNET,
  "IOTX"
)

export { NetworkList }
export function getExplorerURL(
  txOrAddrr: string,
  networkOrChainId: string | number | Network
): string | null {
  if (["number", "string"].includes(typeof networkOrChainId)) {
    const chain = NetworkList.find(
      (network) =>
        network.chainDecimalId === parseInt(networkOrChainId as string)
    )
    return chain
      ? internalGetExplorerURL(chain.blockExplorerUrl, txOrAddrr)
      : null
  }
  return (networkOrChainId as Network).getExplorerURL(txOrAddrr)
}
