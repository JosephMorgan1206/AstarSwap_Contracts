import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-watcher'

const Private_Key1 = ""  //your first wallet private key
const Private_Key2 = ""  //your second wallet private key
const Api_Key = ""  // your etherscan api key

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.8.17',
  settings: {
    viaIR: true,
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

export default {
  defaultNetwork: "mainnet",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://astar.api.onfinality.io/public`,
      accounts: [`0x${Private_Key2}`]
    },
  },
  etherscan: {
    apiKey: Api_Key,
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
    },
  }
}
