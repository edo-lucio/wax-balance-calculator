/* eslint-disable require-jsdoc */
const { getMarketData } = require("../get_market_data");
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


        const zeroAmount = "0.".padEnd(parseInt(holdedTokens[i].decimals)+2 , "0")
        if(holdedTokens[i].amount ===  zeroAmount) continue;
        const waxPrice = await getMarketData(holdedTokens[i].currency) || 0;
        stillBalance += holdedTokens[i].amount * waxPrice;
        
    }

    return stillBalance;
}

module.exports = { getStillBalance };
