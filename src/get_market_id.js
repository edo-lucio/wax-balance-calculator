/* eslint-disable require-jsdoc */
const axios = require("axios");

async function getPrice(tokenSymbol) {
    const URL = "https://alcor.exchange/api/markets";
    const markets = await axios.get(URL);

    for (let i = 0; i < markets.data.length; i++) {
        if (markets.data[i].base_token.symbol.name != "WAX") continue;
        if (markets.data[i].quote_token.symbol.name != tokenSymbol) continue;

        return markets.data[i].bid;
    }
}

module.exports = { getPrice };
