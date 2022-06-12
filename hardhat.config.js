require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.3",
      },
      {
        version: "0.8.4",
      },
    ],
  },
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY]
    }
  }
};
