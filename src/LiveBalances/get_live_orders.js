/* eslint-disable require-jsdoc */
const { RpcWrapper } = require("wax-bot-lib");
const { config } = require("../../config");

const rpc = new RpcWrapper(config.SERVER_ENDPOINT);

async function getLiveOrders(walletAddress) {
    const orders = await rpc.fetchTable({
        code: "alcordexmain",
        scope: "alcordexmain",
        table: "account",
        lower_bound: walletAddress,
        upper_bound: walletAddress,
        limit: 1000,
    });

    return orders.rows[0];
}

module.exports = { getLiveOrders };
