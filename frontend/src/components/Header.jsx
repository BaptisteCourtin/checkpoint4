import React from "react";
import { Link } from "react-router-dom";
import logoNuageRemoveBG from "@assets/logoNuageRemoveBG.png";

function Header() {
  return (
    <header>
      <Link to="/search">
        <img src={logoNuageRemoveBG} alt="logo" />
        <h3>Catch A Dream</h3>
      </Link>
    </header>
  );
}

export default Header;
