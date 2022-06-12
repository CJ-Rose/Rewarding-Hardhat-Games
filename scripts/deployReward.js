const { ethers } = require('hardhat');

require('dotenv').config();

async function main() {
    const Reward = await hre.ethers.getContractFactory("Reward");
    // if you need to add constructor arguments for the game, add them here:
    const reward = await Reward.deploy({ value: ethers.utils.parseEther("2.0") });
    console.log(`contract deployed to address: `, reward.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });