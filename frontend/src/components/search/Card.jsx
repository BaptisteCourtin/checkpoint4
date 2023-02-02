import React from "react";
import { Link } from "react-router-dom";

import logoNuage from "@assets/logoNuage.png";

function Card({ data }) {
  const { nom, image, lieu, prix, temps } = data;

  return (
    <div className="card-container">
      <Link to="/details" state={{ data }}>
        <div className="card">
          <p className="nom">{nom}</p>

          {image ? (
            <img src={image} alt={nom} />
          ) : (
            <img src={logoNuage} alt={nom} />
          )}

          <p className="lieu-temps">
            {temps}h dans {lieu}
          </p>
          <p className="prix">{prix}€</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
