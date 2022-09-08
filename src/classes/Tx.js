/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

const { sendTx } = require("wax-bot-lib");

/* tx functions for situation*/
class Tx {
    constructor(wallet) {
        this.wallet = wallet;
        this.api = wallet.api;
        this.rpc = wallet.rpc;
    }

    /* general template for an action*/
    async mine() {
        const contract = {
            name: "marinebattle", // example
            action: "startmining", // example
            params: { miner: this.wallet.executorAddress }, // example
        };

        const [response, error] = await sendTx(this.wallet, contract);
        if (response) await this.claim();
    }

    async claim() {
        const contract = {
            name: "marinebattle", // example
            action: "mineclaim", // example
            params: { player: this.wallet.executorAddress }, // example
        };

        const [response, error] = await sendTx(this.wallet, contract);
        if (response) return;
    }
}

module.exports = { Tx };
