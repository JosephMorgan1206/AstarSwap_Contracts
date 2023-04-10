import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

const Private_Key1 = ""  //your first wallet private key
const Private_Key2 = ""  //your second wallet private key
const Api_Key = ""  // your etherscan api key

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
    // mumbai: {
    //   url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // polygon: {
    //   url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // bnb: {
    //   url: `https://bsc-dataseed.binance.org/`,
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: Api_Key
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
