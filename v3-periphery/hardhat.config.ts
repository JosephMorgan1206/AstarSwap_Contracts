import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-watcher'

const Private_Key1 = ""  //your first wallet private key
const Private_Key2 = ""  //your second wallet private key
const Api_Key = ""  // your etherscan api key

const LOW_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'default',
    optimizer: {
      enabled: true,
      runs: 21_000,
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
      runs: 1_100_000,
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
      url: `https://astar.public.blastapi.io`,
      accounts: [`0x${Private_Key2}`]
    },
  },
  etherscan: {
    apiKey: Api_Key,
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
    // overrides: {
    //   'contracts/NonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
    //   'contracts/test/MockTimeNonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
    //   'contracts/test/NFTDescriptorTest.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
    //   'contracts/NonfungibleTokenPositionDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
    //   'contracts/libraries/NFTDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
    // },
  },
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
    },
  },
}
