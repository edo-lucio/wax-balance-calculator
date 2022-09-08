const dotenv = require("dotenv");
dotenv.config();

const config = {
    SERVER_ENDPOINT: "https://wax.eos.barcelona",

    // array of wallets that performs transactions
    WORKERS: [
        {
            wallet: {
                address: process.env.WORKER_ADDRESS,
                private_key: process.env.WORKER_PRIVATE_KEY,
            },
            look_up: 1000, // example
        },
    ],

    // wallet that pays for transactions resources when needed
    PAYER: {
        address: process.env.ADDRESS,
        private_key: process.env.PRIVATE_KEY,
    },
};

module.exports = { config };
