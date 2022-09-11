const { getLiveOrders } = require("./get_live_orders");
const { fetchOrderBook } = require("./fetch_orderbook");
const { sumBids } = require("./calculateSum");
const { getMarketData } = require("../get_market_data");

/* eslint-disable require-jsdoc */
async function getLiveBalance(address) {
    const liveOrders = await getLiveOrders(address);

    let sum = 0;

    if (!liveOrders) return sum;

    const buys = liveOrders.buyorders;
    const sales = liveOrders.sellorders;

    for (let i = 0; i < buys.length; i++) {
        const orderbook = await fetchOrderBook(buys[i].key, "buy");
        sum += sumBids(address, orderbook, "buy");
    }

    for (let i = 0; i < sales.length; i++) {
        const orderbook = await fetchOrderBook(sales[i].key, "sell");
        const price = await getMarketData(sales[i].key);
        sum += sumBids(address, orderbook, "sell", price);
    }

    return sum;
}

module.exports = { getLiveBalance };
