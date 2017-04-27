// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      migrations_directory: "./migrations"
    },
    build_directory: ".truffle-solidity-loader"
  },
  mocha: {
    useColors: true
  }
}
