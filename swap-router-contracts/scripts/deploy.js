async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Target = await ethers.getContractFactory("SwapRouter02");
    // const Target = await ethers.getContractFactory("NonfungiblePositionManager", {
    //     libraries: {
    //         "NFTDescriptor": "0x68C03182F67F0CCEa45a187A4b4824CCED655a2C"
    //     }
    // });
    const contract = await Target.deploy("0xA9473608514457b4bF083f9045fA63ae5810A03E", "0x0110AcD40b5729e2d859A8ef8494a8383f23A54C", "0x38CABaaB2CDF7bC57851A7910512B5c252f0dbE5", "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720");
  
    console.log("Contract address:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });