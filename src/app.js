//ToDo  importar un paquete common js
const express = require("express");

const repairsRouter = require("./repairs/repairs.route")
const usersRouter = require("./users/users.route")

const app = express(); //! app tiene todas las funcionalidades de express

//ToDo middleware
const calculateDate = (req, res, next) => {
    const date = new Date().toISOString();

    req.requestTime = date; // creo una nueva propiedad para req

    next();
};

//ToDo middleware para permitir obtener el body en :
app.use(express.json()); //! en formato json
app.use(express.urlencoded({ extended: true })); //! en formato url-encoded
app.use(calculateDate);

app.use("/api/v1/users", usersRouter)
app.use("/api/v1/repairs", repairsRouter)


module.exports = app
