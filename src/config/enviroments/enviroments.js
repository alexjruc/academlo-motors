require("dotenv").config(); //para utilizar los envs
const env = require("env-var"); // para validar los env

// console.log(process.env.PORT);

exports.envs = {
    PORT: env.get("PUERTO").required().asPortNumber(),
    DB_URL: env.get("DB_URL").required().asString(),
};
