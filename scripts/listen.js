const GAME_ADDRESS = "0x71A1D4F3C56E786F09c14E6A3fA0Ec006C4677ff";

async function main() {
  const game = await hre.ethers.getContractAt("Game1", GAME_ADDRESS);

  game.on('Winner', (addr) => {
    console.log(addr + ' won!');
  });
}

main();
