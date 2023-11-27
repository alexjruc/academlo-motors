const express = require("express");

const {
    findAllMotos,
    createMotos,
    findOneMoto,
    updateMoto,
    deleteMoto,
} = require("./repairs.controller");

const router = express.Router();

router.get("/", findAllMotos);

router.post("/", createMotos);

router.get("/:id", findOneMoto);

router.patch("/:id", updateMoto);

router.delete("/:id", deleteMoto);

module.exports = router;
