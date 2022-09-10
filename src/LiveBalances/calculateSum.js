/* eslint-disable require-jsdoc */
function sumBids(walletAddress, orders, side) {
    const offer = side === "buy" ? "bid" : "ask";

    let orderBookSum = 0;

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].account === walletAddress)
            orderBookSum += parseFloat(
                orders[i][offer].replace(/[A-Za-z]+/g, "")
            );
    }

    return orderBookSum;
}

module.exports = { sumBids };
