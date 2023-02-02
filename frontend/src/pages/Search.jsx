import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserRoleContext from "@components/context/UserRoleContext";

import Header from "@components/Header";
import Card from "@components/search/Card";

import Stars from "@assets/parallax/stars.png";
import Moon from "@assets/parallax/moon.png";
import MountainsBehind from "@assets/parallax/mountains_behind.png";
import MountainsFront from "@assets/parallax/mountains_front.png";

function Search() {
  const navigate = useNavigate();
  const { role } = useContext(UserRoleContext);

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

  // --- get des card ---

  const [dreams, setDreams] = useState([]);
  const getAllDreams = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/dream/getAll`)
      .then((res) => {
        setDreams(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getAllDreams();
  }, []);

  // --- new dream ---

  const handleNewDream = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/dream/postOne`, {
        espece: "a changer",
        lieu: "a changer",
        prix: 0,
        temps: "a changer",
      })
      .then((res) => {
        console.log("in Search :", res.data.insertId);
        navigate("/ajout", { state: { idDream: res.data.insertId } });
      })
      .catch((err) => {
        if (err.response.data.errno === 1062) {
          toast.error("cet email est déjà utilisé");
        } else {
          console.error(err);
          toast.error("le mot de passe ou l'email est faux");
        }
      });
  };

  return (
    dreams.length !== 0 && (
      <div className="search">
        <Header />

        <section className="parallax">
          <img
            src={Stars}
            alt=""
            id="stars"
            style={{
              transform: `translateY( -${offsetY * 0.5}px) translateX( ${
                offsetX * 0.5
              }px)`,
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
                <option value="aucun">Aucune especes</option>
                <option value="dragon">Dragon</option>
                <option value="licorne">Licorne</option>
                <option value="phoenix">Phoenix</option>
              </select>
            </div>

            <div>
              <p>Lieu :</p>
              <select onChange={(event) => setLieu(event.target.value)}>
                <option value="">Tous les lieux</option>
                <option value="chateau">Château</option>
                <option value="desert">Désert</option>
                <option value="espace">Espace</option>
                <option value="montagne">Montagne</option>
                <option value="ocean">Ocean</option>
                <option value="prairie">Prairie</option>
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

            <div>
              <p>Ordre de tri :</p>
              <select onChange={(event) => setTri(event.target.value)}>
                <option value="Recent">Recent</option>
                <option value="Ancien">Ancien</option>
                <option value="Prix croissant">Prix croissant</option>
                <option value="Prix decroissant">Prix décroissant</option>
              </select>
            </div>
          </div>
        </section>

        {role === "admin" && (
          <button
            type="button"
            className="butt-ajout"
            onClick={() => handleNewDream()}
          >
            <p> Ajouter un rêve</p>
          </button>
        )}

        <main className="cards">
          {dreams
            .filter((each) => each.nom !== null) // mettre seulement si user
            .filter((each) => each.espece.includes(espece))
            .filter((each) => each.lieu.includes(lieu))
            .filter((each) => each.temps.includes(temps))
            .sort(function compare(a, b) {
              if (tri === "Prix croissant") {
                if (a.prix < b.prix) return -1;
                if (a.prix > b.prix) return 1;
                return 0;
              } else if (tri === "Prix decroissant") {
                if (a.prix > b.prix) return -1;
                if (a.prix < b.prix) return 1;
                return 0;
              } else if (tri === "Recent") {
                if (a.idDream > b.idDream) return -1;
                if (a.idDream < b.idDream) return 1;
                return 0;
              } else if (tri === "Ancien") {
                if (a.idDream < b.idDream) return -1;
                if (a.idDream > b.idDream) return 1;
                return 0;
              }
              return 0;
            })
            .map((each) => (
              <Card data={each} key={each.idDream} />
            ))}
        </main>
      </div>
    )
  );
}

export default Search;
