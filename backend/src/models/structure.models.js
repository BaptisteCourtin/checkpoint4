const database = require("../../database");

const getAllStructures = async () => {
  const [result] = await database.query("SELECT * FROM structure");
  return result;
};

const getStructureById = async (req) => {
  const [result] = await database.query(
    "SELECT * FROM structure WHERE structureId = ?",
    [req.params.id]
  );
  return result;
};

const updateStructureById = async (req) => {
  const [result] = await database.query(
    `UPDATE structure SET trucAChanger = ?, autreTruc = ? WHERE structureId = ?`,
    [req.trucAChanger, req.autreTruc, req.params.id]
  );
  return result;
};

const postStructure = async (req) => {
  const { title, director, year, color } = req.body;

  const [result] = await database.query(
    "INSERT INTO structure(title, director, year, color) VALUES (?, ?, ?, ?)",
    [title, director, year, color]
  );
  return result;
};

const deleteStructureById = async (req) => {
  const { id } = req.params;

  const [result] = await database.query("DELETE FROM movies WHERE id=?", [id]);
  return result;
};

module.exports = {
  getAllStructures,
  getStructureById,
  updateStructureById,
  postStructure,
  deleteStructureById,
};
