const express = require("express");
const router = express.Router();
const database = require("../database"); // si besoin

const dreams = require("./controllers/dreams.controllers");
// ajouter les controllers ICI

// inscription
router.post("/inscriptionUser", async (req, res) => {
  const { email, password, nom, prenom } = req.body;
  database
    .query(
      "INSERT INTO user(email, password, nom, prenom) VALUES (?, ?, ?, ?)",
      [email, password, nom, prenom]
    )
    .then(() => {
      res.status(200).send({ role: "user" });
    })
    .catch((err) => {
      console.error(err.errno);
      if (err.errno === 1062) {
        res.status(400).send(err);
      } else {
        res.status(500).send("Création de compte impossible");
      }
    });
});

// authentification
router.post("/authUser", (req, res) => {
  database
    .query("SELECT password, role FROM user WHERE email = ?", [req.body.email])
    .then(([[user]]) => {
      if (user.password === req.body.password) {
        res.status(200).send({ role: user.role });
      } else {
        res.status(401).send("Email ou mot de passe incorrect");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion");
    });
});

router.get("/dream/getAll", dreams.getAllDreams); // get all dreams
router.post("/dream/postOne", dreams.postOne); // post one dream
router.put("/dream/put/:id", dreams.updateDreamById); // update le dream (qui vient d'être créé)
router.delete("/dream/deleteOne/:id", dreams.deleteOneById); // delete one dream by id

module.exports = router;
