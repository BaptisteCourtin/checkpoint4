import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import logoNuage from "@assets/logoNuage.png";

function Ajout() {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { idDream } = state;

  const [nom, setNom] = useState("");
  const [espece, setEspece] = useState("aucune");
  const [lieu, setLieu] = useState("chateau");
  const [prix, setPrix] = useState("");
  const [temps, setTemps] = useState("2");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");
  const docImg = useRef(null);

  const handleAjout = (e) => {
    e.preventDefault();
    if (nom !== "" && prix !== "") {
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/dream/put/${idDream}`, {
        nom,
        espece,
        lieu,
        prix,
        temps,
        description,
      });
    }
    navigate("/search");
  };

  // --- pour l'image ---

  const SubmitPhoto = () => {};

  // --- annuler création ---
  const handleAnnuler = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/dream/deleteOne/${idDream}`)
      .then(() => navigate("/search"));
  };

  return (
    <div className="ajout">
      <button
        type="button"
        className="top-retour"
        onClick={() => handleAnnuler()}
      >
        {`< Annuler`}
      </button>

      <main>
        <h3>Ajouter un rêve</h3>
        <form className="form-ajout">
          <div className="champs">
            <label htmlFor="nom">
              <input
                required
                type="text"
                name="nom"
                id="nom"
                onChange={(event) => {
                  setNom(event.target.value);
                }}
              />
              <p>Nom du rêve</p>
            </label>

            <div className="option">
              <p>Espèce :</p>
              <select onChange={(event) => setEspece(event.target.value)}>
                <option value="aucun">Aucune espece</option>
                <option value="dragon">Dragon</option>
                <option value="licorne">Licorne</option>
                <option value="phoenix">Phoenix</option>
              </select>
            </div>

            <div className="option">
              <p>Lieu :</p>
              <select onChange={(event) => setLieu(event.target.value)}>
                <option value="chateau">Château</option>
                <option value="desert">Désert</option>
                <option value="espace">Espace</option>
                <option value="montagne">Montagne</option>
                <option value="ocean">Ocean</option>
                <option value="prairie">Prairie</option>
              </select>
            </div>

            <label htmlFor="prix">
              <input
                required
                type="number"
                name="prix"
                id="prix"
                min="0"
                onChange={(event) => {
                  setPrix(event.target.value);
                }}
              />
              <p>Prix</p>
            </label>

            <div className="option">
              <p>Heures de repos :</p>
              <select onChange={(event) => setTemps(event.target.value)}>
                <option value="2">2</option>
                <option value="3:30">3:30</option>
                <option value="5">5</option>
                <option value="6:30">6:30</option>
                <option value="8">8</option>
                <option value="9:30">9:30</option>
                <option value="11">11</option>
              </select>
            </div>

            <div className="textarea">
              <p>Description du rêve :</p>
              <textarea
                placeholder="une description ici svp"
                type="text"
                name="description"
                id="description"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>

          <label htmlFor="image" className="forImage">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              name="image"
              id="image"
              ref={docImg}
              onChange={(e) => SubmitPhoto(e)}
            />
            {image ? (
              <img className="photo" src={image} alt="image de présentation" />
            ) : (
              <img src={logoNuage} alt="image de présentation" />
            )}
          </label>
        </form>
        <div className="butts-du-bas">
          <button
            type="button"
            className="button-bas"
            onClick={(e) => handleAjout(e)}
          >
            Ajouter un rêve
          </button>
          <button
            type="button"
            className="button-bas"
            onClick={() => handleAnnuler()}
          >
            Annuler
          </button>
        </div>
      </main>
    </div>
  );
}

export default Ajout;
