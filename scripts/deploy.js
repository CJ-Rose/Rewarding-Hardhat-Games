require('dotenv').config();

async function main() {
  const Game = await hre.ethers.getContractFactory("Game1");
  // if you need to add constructor arguments for the game, add them here:
  const game = await Game.deploy();
  console.log(`contract deployed to address: `, game.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });