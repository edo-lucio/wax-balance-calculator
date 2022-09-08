const { Wallet } = require("wax-bot-lib");
const { Miner } = require("./libs/classes/miner");
const { config } = require("../config");

const workers = JSON.parse(config.WORKERS);
const payer = JSON.parse(config.PAYER);
const serverEndpoint = config.SERVER_ENDPOINT;

console.log(workers);

const main = async () => {
    const promises = [];

    for (let i = 0; i < workers.length; i++) {
        const wallet = new Wallet(serverEndpoint, workers[i].wallet, payer);
        wallet.init();

        const miner = new Miner(wallet, workers[i].look_up);
        promises.push(miner.work());
    }

    await Promise.all(promises);
};

main();
