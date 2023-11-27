const express = require("express");

//controladores
const {
    findAllUsers,
    findOneUser,
    createUsers,
    updateUser,
    deleteUser,
} = require("./users.controller");

const router = express.Router(); // rutas

//ToDo definir endpoint
//? para buscar todos los usuarios
router.get("/", findAllUsers);

//? para crear usuarios
router.post("/", createUsers);

//? para buscar un usuario en especifico
router.get("/:id", findOneUser);

//? para actualizar un usuario
router.patch("/:id", updateUser);

//? para eliminar un usuario
router.delete("/:id", deleteUser);

module.exports = router;
