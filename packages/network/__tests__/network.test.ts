import { NetworkList, Polygon, Matic, MAINNET, getExplorerURL } from "../lib"

const NETWORK_IDS = NetworkList.map((network) => network.chainId)
const NETWORK_DECIMAL_IDS = NetworkList.map((network) => network.chainDecimalId)
const foundSimilar = (arr: Array<any>) => {
  return arr.find((elem, idx, readOnlyArr) => readOnlyArr.indexOf(elem) !== idx)
}

describe("network", () => {
  it("No same Network IDs", () => {
    expect(foundSimilar(NETWORK_IDS)).toBeFalsy()
    expect(foundSimilar(NETWORK_DECIMAL_IDS)).toBeFalsy()
    expect(NETWORK_DECIMAL_IDS.length).toBe(15)
  })

  it("[Polygon,Matic].getExplorerURL -eq polygonscan.com", () => {
    const expectedURL = "https://polygonscan.com/address/lol"
    expect(Polygon.getExplorerURL("lol")).toBe(expectedURL)
    expect(Matic.getExplorerURL("lol")).toBe(expectedURL)
    expect(Matic.type).toBe(MAINNET)
  })

  it("getExplorerURL:: chainId = Mainnet", () => {
    const expectedURL = "https://etherscan.io/address/"
    expect(getExplorerURL("", "1234567")).toBe(null)
    expect(getExplorerURL("", 1234567)).toBe(null)
    expect(getExplorerURL("", "0x1")).toBe(expectedURL)
    expect(getExplorerURL("", 1)).toBe(expectedURL)
    expect(getExplorerURL("", 0x1)).toBe(expectedURL)
  })

  it("getExplorerURL:: chainId = Rinkeby", () => {
    const expectedURL = "https://rinkeby.etherscan.io/address/"
    expect(getExplorerURL("", "1234567")).toBe(null)
    expect(getExplorerURL("", 1234567)).toBe(null)
    expect(getExplorerURL("", "0x4")).toBe(expectedURL)
    expect(getExplorerURL("", 4)).toBe(expectedURL)
    expect(getExplorerURL("", 0x4)).toBe(expectedURL)
  })
})
