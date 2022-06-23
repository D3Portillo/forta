import { Rinkeby, Mainnet, NetworkList, getExplorerURL } from "../lib"

const URL = getExplorerURL(
  "0x6635F83421Bf059cd8111f180f0727128685BaE4",
  Rinkeby.chainId
)
console.log({ URL, Rinkeby, Mainnet, NetworkList })
