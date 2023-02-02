import React, { useContext } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserRoleContext from "@components/context/UserRoleContext";

import Header from "@components/Header";

import logoNuage from "@assets/logoNuage.png";

function Details() {
  const { role } = useContext(UserRoleContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  const { idDream, nom, image, espece, lieu, prix, temps, description } = data;

  const handleCommander = () => {
    navigate("/search");
  };

  const handleSupprimer = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/dream/deleteOne/${idDream}`)
      .then(() => navigate("/search"));
  };

  return (
    <div className="details">
      <Header />

      <Link className="top-retour" to="/search">
        {`< Retour à la recherche`}
      </Link>

      <main>
        <h4 className="nom">{nom}</h4>
        <div className="info-container">
          {image ? (
            <img src={image} alt={nom} />
          ) : (
            <img src={logoNuage} alt={nom} />
          )}
          <div className="text-container">
            <p className="lieu">
              <span>Lieu du rêve : </span>
              {lieu}
            </p>
            <p className="espece">
              <span> Espèce qui vous accompagneras :</span>{" "}
              {espece || "personne, à pars vous et vos pensées"}
            </p>
            <p className="temps">
              <span>Temps passé dans ce rêve :</span> {temps} h
            </p>
            <p className="prix">
              <span>Le prix :</span>{" "}
              {`(franchement ça vaut le coup) (on a plus une thune et on a faim) : `}
              {prix}€
            </p>
            <p className="description">
              <span>Description : </span>
              {description}
            </p>
            <div className="butts-du-bas">
              <button
                className="button-bas"
                type="button"
                onClick={() => handleCommander()}
              >
                <Link to="/search">Commander</Link>
              </button>
              {role === "admin" && (
                <button
                  className="button-bas"
                  type="button"
                  onClick={() => handleSupprimer()}
                >
                  Supprimer
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Details;
