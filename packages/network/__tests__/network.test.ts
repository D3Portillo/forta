import { NetworkList } from "../lib/index"

const NETWORK_IDS = NetworkList.map((network) => network.chainId)
const NETWORK_DECIMAL_IDS = NetworkList.map((network) => network.chainDecimalId)
const foundSimilar = (arr: Array<any>) => {
  return arr.find((elem, idx, readOnlyArr) => readOnlyArr.indexOf(elem) !== idx)
}

describe("network", () => {
  it("No same Network IDs", () => {
    expect(foundSimilar(NETWORK_IDS)).toBeFalsy()
    expect(foundSimilar(NETWORK_DECIMAL_IDS)).toBeFalsy()
    expect(NETWORK_DECIMAL_IDS.length).toBe(12)
  })
})
