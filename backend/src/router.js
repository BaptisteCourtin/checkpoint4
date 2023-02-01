const express = require("express");

const router = express.Router();
// const database = require("../database"); // si besoin

const structure = require("./controllers/structure.controllers");
// ajouter les controllers ICI

router.get("/structure", structure.getAllStructures);
router.get("/structure/:id", structure.getStructureById);

router.post("/structure", structure.postStructure);

router.put("/structure/:id", structure.updateStructureById);

router.delete("/structure/:id", structure.deleteStructureById);

module.exports = router;
