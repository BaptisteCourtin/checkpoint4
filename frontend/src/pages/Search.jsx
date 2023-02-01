import React, { useState, useEffect } from "react";

import Header from "@components/Header";
import Card from "@components/search/Card";

import Stars from "@assets/parallax/stars.png";
import Moon from "@assets/parallax/moon.png";
import MountainsBehind from "@assets/parallax/mountains_behind.png";
import MountainsFront from "@assets/parallax/mountains_front.png";

function Search() {
  const [espece, setEspece] = useState("");
  const [lieu, setLieu] = useState("");
  const [tri, setTri] = useState("Recent");
  const [temps, setTemps] = useState("");

  // --- parallax ---
  const [offsetY, setOffsetY] = useState(0);
  const handleScrollY = () => setOffsetY(window.pageYOffset);
  const [offsetX, setOffsetX] = useState(0);
  const handleScrollX = () => setOffsetX(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollX);
    return () => window.removeEventListener("scroll", handleScrollX);
  }, []);

  return (
    <div className="search">
      <Header />

      <section className="parallax">
        <img
          src={Stars}
          alt=""
          id="stars"
          style={{
            transform: `translateY( -${offsetY * 0.5}px)`,
            transform: `translateX( ${offsetX * 0.5}px)`,
          }}
        />
        <img
          src={Moon}
          alt=""
          id="moon"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
        <img
          src={MountainsBehind}
          alt=""
          id="montain_behind"
          style={{ transform: `translateY(${offsetY * 0.6}px)` }}
        />
        <h1 style={{ transform: `translateX(${offsetX * -0.2}px)` }}>
          CATCH A DREAM
        </h1>
        <img src={MountainsFront} alt="" id="montain_front" />
      </section>

      <section>
        <div className="filtres">
          <div>
            <p>Espèce :</p>
            <select onChange={(event) => setEspece(event.target.value)}>
              <option value="">Toutes les especes</option>
              <option value="">Aucune especes</option>
              <option value="Dragon">Dragon</option>
              <option value="Licorne">Licorne</option>
              <option value="Phoenix">Phoenix</option>
            </select>
          </div>

          <div>
            <p>Espèce :</p>
            <select onChange={(event) => setTri(event.target.value)}>
              <option value="Recent">Recent</option>
              <option value="Ancien">Ancien</option>
              <option value="Prix croissant">Prix croissant</option>
              <option value="Prix decroissant">Prix décroissant</option>
            </select>
          </div>

          <div>
            <p>Lieu :</p>
            <select onChange={(event) => setLieu(event.target.value)}>
              <option value="Recent">Tous les lieux</option>
              <option value="Prix decroissant">Château</option>
              <option value="Prix croissant">Désert</option>
              <option value="Prix decroissant">Montagne</option>
              <option value="Prix decroissant">Ocean</option>
              <option value="Ancien">Prairie</option>
            </select>
          </div>

          <div>
            <p>Heures de repos :</p>
            <select onChange={(event) => setTemps(event.target.value)}>
              <option value="">Toutes les heures</option>
              <option value="2">2</option>
              <option value="3:30">3:30</option>
              <option value="5">5</option>
              <option value="6:30">6:30</option>
              <option value="8">8</option>
              <option value="9:30">9:30</option>
              <option value="11">11</option>
            </select>
          </div>
        </div>
      </section>

      <main className="cards">
        <Card />
      </main>
    </div>
  );
}

export default Search;
