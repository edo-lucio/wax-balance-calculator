/* eslint-disable require-jsdoc */
function sumBids(walletAddress, orders, side, price) {
    let orderBookSum = 0;

    // prettier-ignore
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].account === walletAddress) {
            const waxAmount = parseFloat(orders[i].bid.replace(/[A-Za-z]+/g, ""));
            orderBookSum += waxAmount;
        }
    }

    if (side === "sell") orderBookSum = orderBookSum * price;
    return orderBookSum;
}

module.exports = { sumBids };
