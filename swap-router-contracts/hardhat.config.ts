import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-watcher'

const Private_Key1 = ""  //your first wallet private key
const Private_Key2 = ""  //your second wallet private key
const Api_Key = ""  // ehterscan apiKey or your deploy explorer apiKey

const LOW_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'default',
    optimizer: {
      enabled: true,
      runs: 2_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'default',
    optimizer: {
      enabled: true,
      runs: 1_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
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
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // goerli: {
    //   url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // kovan: {
    //   url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // arbitrumRinkeby: {
    //   url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // arbitrum: {
    //   url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // optimismKovan: {
    //   url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // optimism: {
    //   url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
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
  },
}
