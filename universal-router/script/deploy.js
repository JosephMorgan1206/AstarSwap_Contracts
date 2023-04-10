async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Target = await ethers.getContractFactory("UniversalRouter");
    // const Target = await ethers.getContractFactory("NonfungiblePositionManager", {
    //     libraries: {
    //         "NFTDescriptor": "0x68C03182F67F0CCEa45a187A4b4824CCED655a2C"
    //     }
    // });
    const contract = await Target.deploy();
  
    console.log("Contract address:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });