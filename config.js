const dotenv = require("dotenv");
dotenv.config();

const config = {
    SERVER_ENDPOINT: "https://wax.eos.barcelona",

    addresses: ["badpollastro", "marcantonio4", "d3s3ijoe1c3w"], // for donations :)
};

module.exports = { config };
