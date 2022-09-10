/* eslint-disable camelcase */
const { getStillBalance } = require("./get_still_balance");
const { getLiveBalance } = require("./get_live_balances");

const { config } = require("../config");

/* eslint-disable require-jsdoc */
async function main(walletAddress) {
    console.time("balance");
    // const stillBalance = await getStillBalance(walletAddress);
    // const liveOrders = await getLiveBalance(walletAddress);

    const promises = [
        getStillBalance(walletAddress),
        getLiveBalance(walletAddress),
    ];
    const promise = await Promise.all(promises);

    console.log(promise);

    // const balance = stillBalance + liveOrders;
    // console.log(balance);
    console.timeEnd("balance");

    // return balance;
}

main(config.address);
