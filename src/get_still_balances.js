/* eslint-disable require-jsdoc */
const axios = require("axios");

async function getStillBalances(walletAddress) {
    const URL = "https://wax.light-api.net/api/balances/wax/" + walletAddress;

    const balances = await axios.get(URL);
    return balances.data.balances;
}

getStillBalances();

module.exports = { getStillBalances };
