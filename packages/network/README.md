# @forta/network 🦍

<p align="center">
  <img src="https://raw.githubusercontent.com/D3Portillo/usemetamask/master/assets/logo.png">
</p>

<p align="center">An ether blockchain goodie to fetch network's common metadata.</p>

<p align="center">
  <a
    href="https://www.npmjs.com/package/@forta/network"
  >
    <img src="https://badgen.net/npm/v/@forta/network" />
  </a>
  <a
    href="https://bundlephobia.com/result?p=@forta/network"
  >
    <img src="https://badgen.net/bundlephobia/minzip/@forta/network" />
  </a>
  <a
    href="https://github.com/D3Portillo/forta/blob/master/LICENSE"
  >
    <img src="https://badgen.net/npm/license/@forta/network" />
  </a>
</p>

## Install

```bash
npm i @forta/network
```

## Get Started

```js
import { Rinkeby } from "@forta/network"

const ADDRR = "0x6635f83421bf059cd8111f180f0727128685bae4"
console.log(Rinkeby.getExplorerURL(ADDRR))
// https://rinkeby.etherscan.io/address/0x6635f83421bf059cd8111f180f0727128685bae4
```

## Networks

Each exported network(Mainnet or Testnet) follows the model bellow:

```ts
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
```

**Example for Polygon:**

```js
import { Rinkeby } from "@forta/network"

console.log(Rinkeby)
/**
{
  chainName: "Matic Mainnet"
  shortName: "Matic"
  chainId: "0x89"
  chainDecimalId: 137
  currency: "MATIC"
  rpcUrl: "https://rpc-mainnet.maticvigil.com"
  blockExplorerUrl: "https://polygonscan.com"
  type: "Mainnet"
}
*/
```

---

**[READ THE DOCS 🌟](https://forta.vercel.app/network)** | **[FOLLOW ME 🐦](https://twitter.com/d3portillo)**
