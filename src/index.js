/* eslint-disable require-jsdoc */
const { config } = require("../config");
const { getBalance } = require("./get_wallet_balance");

async function main() {
    for (let i = 0; i < config.addresses.length; i++) {
        console.log(config.addresses[i]);
        await getBalance(config.addresses[i]);
    }
}

main();
