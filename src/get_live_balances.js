const { getLiveOrders } = require("./get_live_orders");
const { fetchOrderBook } = require("./fetch_orderbook");
const { sumBids } = require("./calculateSum");

/* eslint-disable require-jsdoc */
async function getLiveBalance(address) {
    const liveOrders = await getLiveOrders(address);

    const buys = liveOrders.buyorders;
    const sales = liveOrders.sellorders;

    let sum = 0;

    for (let i = 0; i < buys.length; i++) {
        const orderbook = await fetchOrderBook(buys[i].key, "buy");
        sum += sumBids(address, orderbook, "buy");
    }

    for (let i = 0; i < sales.length; i++) {
        const orderbook = await fetchOrderBook(sales[i].key, "sell");
        sum += sumBids(address, orderbook, "sell");
    }

    console.log("live", sum);

    return sum;
}

module.exports = { getLiveBalance };
