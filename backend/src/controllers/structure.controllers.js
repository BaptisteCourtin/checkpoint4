const structureModels = require("../models/structure.models");

const getAllStructures = async (req, res) => {
  const result = await structureModels.getAllStructures(req);
  if (result.length === 0) {
    res.sendStatus(500);
  }
  return res.json(result);
};

const getStructureById = async (req, res) => {
  const result = await structureModels.getStructureById(req);
  if (result.length === 0) {
    res.sendStatus(500);
  }
  return res.json(result);
};

const updateStructureById = async (req, res) => {
  const result = await structureModels.updateStructureById(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const postStructure = async (req, res) => {
  const result = await structureModels.postStructure(req);
  return res.json(result);
};

const deleteStructureById = async (req, res) => {
  const result = await structureModels.deleteStructureById(req);
  if (result.affectedRows === 0) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  getAllStructures,
  getStructureById,
  updateStructureById,
  postStructure,
  deleteStructureById,
};
