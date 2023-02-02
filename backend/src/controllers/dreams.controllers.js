const dreamsModels = require("../models/dreams.models");

const getAllDreams = async (req, res) => {
  const result = await dreamsModels.getAllDreams(req);
  if (result.length === 0) {
    res.sendStatus(500);
  }
  return res.json(result);
};

const postOne = async (req, res) => {
  const result = await dreamsModels.postOne(req);
  return res.json(result);
};

const updateDreamById = async (req, res) => {
  const result = await dreamsModels.updateDreamById(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const deleteOneById = async (req, res) => {
  const result = await dreamsModels.deleteOneById(req);
  if (result.affectedRows === 0) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  getAllDreams,
  postOne,
  updateDreamById,
  deleteOneById,
};
