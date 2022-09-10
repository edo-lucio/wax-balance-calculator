const { getStillBalances } = require("./get_still_balances");
const { getPrice } = require("./get_price");

/* eslint-disable require-jsdoc */
async function calculateStillBalances(walletAddress) {
    const stillBalances = await getStillBalances(walletAddress);

    let waxTotal = 0;
    const promises = [];

    for (let i = 0; i < stillBalances.length; i++) {
        console.log(stillBalances[i].currency);
        promises.push(getPrice(stillBalances[i].currency));
    }

    const prices = await Promise.all(promises);
    console.log(prices);

    // const waxConversion = price * parseFloat(stillBalances[i].amount);
    // waxTotal += waxConversion;

    return waxTotal;
}

calculateStillBalances("badpollastro");
