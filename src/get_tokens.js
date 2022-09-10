/* eslint-disable require-jsdoc */
const axios = require("axios");

async function getTokens(walletAddress) {
    const URL = "https://wax.light-api.net/api/balances/wax/" + walletAddress;

    const balances = await axios.get(URL);
    return balances.data.balances;
}

getTokens("badpollastro");

module.exports = { getTokens };
