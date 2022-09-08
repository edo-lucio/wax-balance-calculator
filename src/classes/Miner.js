/* eslint-disable require-jsdoc */

const { Tx } = require("./Tx");
const { Utils } = require("../utils/Utils");

/* class that will execute the code*/
class Miner {
    constructor(wallet, lookUp) {
        this.wallet = wallet;
        this.lookUp = lookUp;

        this.tx = new Tx(wallet);
    }

    async work() {
        console.log("Good News");
        while (true) {
            await this.tx.mine();
            await Utils.sleep(this.lookUp);
        }
    }
}

module.exports = { Miner };
