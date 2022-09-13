/* eslint-disable camelcase */
const { getStillBalance } = require("./StillBalances/get_still_balance");
const { getLiveBalance } = require("./LiveBalances/get_live_balances");

/* eslint-disable require-jsdoc */
async function getBalance(walletAddress) {
    const balances = await Promise.all([
        getStillBalance(walletAddress),
        getLiveBalance(walletAddress),
    ]);

    const balance = balances[0] + balances[1];

    console.log("WAX holded", balances[0]);
    console.log("WAX in Alcor orders", balances[1]);
    console.log(balance);

    return balance;
}

module.exports = { getBalance };
