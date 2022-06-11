# Hardhat-Games-Reward 

Requirements:
MetaMask: Browser extension wallet that provides key storage and secure account log-in as well as acts as a JSON-RPC gateway.
Alchemy: Alchemy is a blockchain development platform from which we will use some APIs to help query the Ethereum blockchain.

Instructions
In this activity, you will need to interact with deployed smart contracts (on the Rinkeby blockchain) in order to trigger certain win conditions, more specifically: you will need to find ways to call smart contracts so that they emit the Winner event.
This activity can be challenging - stick through it, you can do it!

Setup
1. Project Setup
Clone this repo, open in IDE of your choice.
Run npm install
Run npm install dotenv @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers ethereum-waffle
Run touch .env and copy-paste a RINKEBY_URL from Alchemy and a Rinkeby PRIVATE_KEY from a test account on MetaMask - remember to name them the same as what your hardhat.config.js uses!

Games 🎮
This is the general flow you need to follow for solving a game per game:

1. Deploy Game

Open your deploy.js file and input the relevant contract file that you want to deploy into line 9 - the default value right now is "Game1" - so as you move through the games, you'll need to update this value to "Game2" and so on...
Run npx hardhat run scripts/deploy.js --network rinkeby
You will see the deployed game contract in your terminal output
Go to Rinkeby Etherscan and input the deployed contract address to see the verified code in the 'Code' tab
2. Edit the listen.js file

Copy-paste the deployed Rinkeby contract address of the game contract you are trying to communicate with in the GAME_ADDRESS variable on line 1
3. Open up a new terminal window

Run npx hardhat run scripts/listen.js --network rinkeby
The script will wait, listening for events as they occur and print them to terminal window.
4. Edit the win.js file

Copy-paste the deployed Rinkeby contract address of the game contract you are trying to communicate with in the GAME_ADDRESS variable on line 1
Make the necessary logic edits to win.js based on the current contract you are trying to get to emit the Winner event
5. Open up another new terminal window

Run npx hardhat run scripts/win.js --network rinkeby to call the contract's win() function and see if you have won the game!
6. Have you won the game?

If you have won the game you will see the Winner event and its parameters printed in the terminal window where the listen.js script is running.
Follow the above flow in order to run into the least amount of errors!

If you get Cannot estimate gas errors, it is likely that means you either

did not update the GAME_ADDRESS to point to the correct contract, or;
you are calling the win function with the wrong arguments.
Game 1 Walkthrough 🛣️
The first game is a nice warmup! Listen to the Game1 contract and call its win() function, no arguments, just straight-up call it - that's it! :)

Let's run through this one together (following the flow described above):

In your deploy.js file, make sure that the following line looks like this:
// replace argument with the name of the contract you want to deploy!
const Game = await hre.ethers.getContractFactory("Game1");
// if you need to add constructor arguments for the game, add them here:
const game = await Game.deploy();
☝️ Since we are going to start with Game #1 first, this looks right!

Save the file.

Run npx hardhat run scripts/deploy.js --network rinkeby

The Game 1 Rinkeby address will show up in your terminal output. Copy-paste it into https://rinkeby.etherscan.io/ and check out the verified source code in the 'Code' tab

Why is the source code already verified? 🤔 It could be that some of your peers have already played this exact game before and thus have deployed the same contract, using the same compiler which produces the same bytecode - and they went through the process of verifying that bytecode! When you deploy your own Game contract, Etherscan is smart enough to recognize the bytecode is equal to one that is already deployed and verified and will show your contract in verified form as well.

In your listen.js file, update the GAME_ADDRESS variable to point to the address of the smart contract you just deployed onto Rinkeby.

In your win.js file, update the GAME_ADDRESS variable to point to the address of the smart contract you just deployed onto Rinkeby

Open up a new terminal window to run the listen.js script in.

Run npx hardhat run scripts/listen.js --network rinkeby
Look at the Game1.sol source code either on your local or on the verified format on Etherscan - what do we need to do in order to emit the Winner event? This one is really straightforward: just call the win() function - no other logic needed.

In another terminal try calling the contract's win() function in order to emit the Winner event! The default win.js script is enough for you to win Game 1! Run it with npx hardhat run scripts/win.js --network rinkeby

If everything is successful and you have won the game you should see the Winner event and its parameters printed in the terminal where your listen.js script is running.

Games 2, 3, 4 🕹️
These games are challenges, so put on your puzzle-solving hats!

Some quick hints for each game, in case you might need them:

Game 2:

uint8 has a range of 0-255, if you add 255+1 you get 0 - this is an overflow of uint8
No negative numbers, since uint only accepts positive numbers
This is the first game you need to pass in a number to win() in your win.js file
Notice: This Game is using Solidity 0.7.3 instead of 0.8.4. Why is that?
Game 3:

You can override the value of your transaction like this to send ether to the contract:
 const tx = await game.win({
    value: ethers.utils.parseUnits("1", "gwei"),
  });
Game 4:

For this game, have someone else in your group deploy the contract. Ask them to deploy the contract with a secret uint without telling you what it is! When they have deployed the contract, get the address from them. Then, you will need to figure out what you need to pass into the win function in order to trigger the event!

Here's some hints:

Use https://emn178.github.io/online-tools/keccak_256.html
Use https://docs.ethers.io/v5/api/providers/provider/#Provider-getStorageAt
Remember to deploy each contract as you go and update the scripts with the new contract addresses! Good luck!
