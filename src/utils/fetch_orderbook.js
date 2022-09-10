/* eslint-disable require-jsdoc */
const { RpcWrapper } = require("wax-bot-lib");
const { config } = require("../../config");

const rpc = new RpcWrapper(config.SERVER_ENDPOINT);

async function fetchOrderBook(tokenSymbol) {
    const orders = await rpc.fetchTable({
        code: "alcordexmain",
        scope: "alcordexmain",
        table: "buyorders",
    });
}
