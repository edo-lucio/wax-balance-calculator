/* eslint-disable require-jsdoc */
const { RpcWrapper } = require("wax-bot-lib");
const { config } = require("../config");

const rpc = new RpcWrapper(config.SERVER_ENDPOINT);

async function fetchOrderBook(marketId, side) {
    const { rows } = await rpc.fetchTable({
        code: "alcordexmain",
        scope: marketId,
        table: side + "order",
        limit: 1000,
        index_position: "secondary",
        key_type: "i128",
    });

    return rows;
}

module.exports = { fetchOrderBook };
