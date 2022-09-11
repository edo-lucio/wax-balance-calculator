/* eslint-disable require-jsdoc */
const axios = require("axios");

async function getMarketData(target) {
    try {
        const URL = "https://alcor.exchange/api/markets";
        const markets = await axios.get(URL);

        // prettier-ignore
        for (let i = 0; i < markets.data.length; i++) {
            if (typeof target === "string") {
                if (markets.data[i].volume24 === 0) continue;
                if (markets.data[i].base_token.symbol.name != "WAX") continue;
                if (markets.data[i].quote_token.symbol.name != target) continue;
    
                return markets.data[i].last_price;
            }

            if (typeof target === "number") {
                if (markets.data[i].volume24 === 0) continue;
                if (markets.data[i].base_token.symbol.name != "WAX") continue;
                if (markets.data[i].id != target) continue;
    
                return markets.data[i].last_price;
            }

        }
    } catch (error) {
        return getMarketData(target);
    }
}

module.exports = { getMarketData };
