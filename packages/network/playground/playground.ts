import { Rinkeby, Mainnet, Kovan, getExplorerURL, NetworkList } from "../lib"

console.log({ Rinkeby, Mainnet, NetworkList })
console.log(
  Rinkeby.getExplorerURL("0x3c0e20fca6d2e084127d056377a5f35294503447"),
  Kovan.getExplorerURL(
    "0x04c5dafc308dd8956fae87eb878e691bdc7afa866784e9ba7ecd5b4d7ef90f2f"
  ),
  getExplorerURL(
    "0x3c0e20fca6d2e084127d056377a5f35294503447",
    Rinkeby.chainDecimalId
  )
)
export {}
