const database = require("../../database");

const getAllDreams = async () => {
  const [result] = await database.query("SELECT * FROM dream");
  return result;
};

const postOne = async (req) => {
  const { espece, lieu, prix, temps } = req.body;
  const [result] = await database.query(
    "INSERT INTO dream(espece, lieu, prix, temps) VALUES (?, ?, ?, ?)",
    [espece, lieu, prix, temps]
  );
  return result;
};

const updateDreamById = async (req) => {
  const { nom, espece, lieu, prix, temps, description } = req.body;
  const [result] = await database.query(
    `UPDATE dream SET nom = ?, espece = ?, lieu = ?, prix = ?, temps = ?, description = ?  WHERE idDream = ?`,
    [nom, espece, lieu, prix, temps, description, req.params.id]
  );
  return result;
};

const deleteOneById = async (req) => {
  const [result] = await database.query("DELETE FROM dream WHERE idDream=?", [
    req.params.id,
  ]);
  return result;
};

module.exports = {
  getAllDreams,
  postOne,
  updateDreamById,
  deleteOneById,
};
