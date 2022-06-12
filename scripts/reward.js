// The Reward contract holding ETH for you to win has been deployed to this address,
// run this script after you have won all the games, do not change any of the values.

const REWARD_ADDRESS = "0xa724a699d3afF35ea92B321134e20A439655C63e";

async function main() {
    const reward = await hre.ethers.getContractAt("Reward", REWARD_ADDRESS);

    const tx = await reward.rewardMe()

    const receipt = await tx.wait();

    console.log(receipt);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });