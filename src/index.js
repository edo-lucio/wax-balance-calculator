/* eslint-disable camelcase */
const { getStillBalance } = require("./StillBalances/get_still_balance");
const { getLiveBalance } = require("./LiveBalances/get_live_balances");

const { config } = require("../config");

/* eslint-disable require-jsdoc */
async function main(walletAddress) {
    const stillBalance = await getStillBalance(walletAddress);
    const liveOrders = await getLiveBalance(walletAddress);

    const balance = stillBalance + liveOrders;
    console.log(balance);

    return balance;
}

main(config.address);
