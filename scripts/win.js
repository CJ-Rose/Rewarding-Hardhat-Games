const GAME_ADDRESS = "0x71A1D4F3C56E786F09c14E6A3fA0Ec006C4677ff";

async function main() {
  const game = await hre.ethers.getContractAt("Game1", GAME_ADDRESS);

  const tx = await game.win()

  const receipt = await tx.wait();

  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
