async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Target = await ethers.getContractFactory("SwapRouter");
    // const Target = await ethers.getContractFactory("NonfungiblePositionManager", {
    //     libraries: {
    //         "NFTDescriptor": "0xEA9D349EF5fb535F64776aDaEd5432976822B641"
    //     }
    // });
    const contract = await Target.deploy("0x79429Bd112Bb173030e899293D46A6be2a2202fA", "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720");  //constructor parameters
  
    console.log("Contract address:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });