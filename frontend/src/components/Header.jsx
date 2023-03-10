import React from "react";
import { Link } from "react-router-dom";
import logoNuageRemoveBG from "@assets/logoNuageRemoveBG.png";
import { GiExitDoor } from "react-icons/gi";

function Header() {
  return (
    <header>
      <Link to="/search">
        <img src={logoNuageRemoveBG} alt="logo" />
        <h3>Catch A Dream</h3>
      </Link>
      <Link to="/">
        <div className="col">
          <GiExitDoor />
          <p>exit</p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
