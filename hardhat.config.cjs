require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.24" },
      { version: "0.8.28" }
    ]
  },
  networks: {
    coretestnet: {
      url: process.env.CORE_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
