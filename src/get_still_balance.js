/* eslint-disable require-jsdoc */
const { getMarketData } = require("./get_market_data");
const { getTokens } = require("./get_tokens");

async function getStillBalance(walletAddress) {
    const holdedTokens = await getTokens(walletAddress);
    let stillBalance = 0;

    // prettier-ignore
    for (let i = 0; i < holdedTokens.length; i++) {
        if(holdedTokens[i].currency === "WAX") {
            stillBalance += parseFloat(holdedTokens[i].amount)
            continue
        }

        const waxPrice = await getMarketData(holdedTokens[i].currency) || 0;
        console.log(holdedTokens[i].amount)
        
        stillBalance += holdedTokens[i].amount * waxPrice;
    }

    console.log("still", stillBalance);

    return stillBalance;
}

module.exports = { getStillBalance };
