/* eslint-disable camelcase */
const { getStillBalance } = require("./get_still_balance");
const { getLiveBalance } = require("./get_live_balances");

/* eslint-disable require-jsdoc */
async function calculateStillBalances(walletAddress) {
    const stillBalance = await getStillBalance(walletAddress);
    const liveOrders = await getLiveBalance(walletAddress);

    const balance = stillBalance + liveOrders;
    console.log(balance);

    return balance;
}

calculateStillBalances("marcantonio4");
