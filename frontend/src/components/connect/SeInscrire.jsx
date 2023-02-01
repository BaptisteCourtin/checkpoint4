import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const seInscrire = ({ setCompo }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [typePwd, setTypePwd] = useState(true);
  const [typePwd2, setTypePwd2] = useState(true);

  const handleInscription = (e) => {
    e.preventDefault();
    navigate("/search");
    // if (email && password === password2) {
    //   axios
    //     .post(`${import.meta.env.VITE_PATH}/inscriptionAppFamille`, {
    //       email,
    //       password,
    //     })
    //     .then((ret) => {
    //       const { token, familleId } = ret.data;

    //       setFamilleId(familleId);
    //       sessionStorage.setItem("BabyPlacefamilleId", familleId);

    //       navigate("/appli/search", {
    //         state: {
    //           token,
    //         },
    //       });
    //     })
    //     .catch((err) => {
    //       if (err.response.data.errno === 1062) {
    //         setOtherPassword(true);
    //       } else {
    //         console.error(err);
    //       }
    //     });
    // }
  };

  return (
    <main className="seInscrire">
      <button
        type="button"
        className="butt-top-connect"
        onClick={() => setCompo(1)}
      >
        Se connecter
      </button>

      <h3>Création de compte</h3>
      <p>
        Nous vous déconseillons d'utiliser un mot de passe que vous utilisez
        réellement au vu du fait que ce site n'est pas sécurisé. Merci😘
      </p>

      <form>
        <div>
          <label htmlFor="email">
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <p>E mail</p>
          </label>

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
            <p>Nom</p>
          </label>

          <label htmlFor="prenom">
            <input
              required
              type="text"
              name="prenom"
              id="prenom"
              onChange={(event) => {
                setPrenom(event.target.value);
              }}
            />
            <p>Prenom</p>
          </label>

          <label htmlFor="mdp">
            <input
              required
              type={typePwd ? "password" : "text"}
              name="mdp"
              id="mdp"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <p>Mot de passe</p>
            <button
              type="button"
              className="view-password"
              onClick={() => setTypePwd(!typePwd)}
            >
              {typePwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </label>

          <label htmlFor="mdp2">
            <input
              required
              type={typePwd2 ? "password" : "text"}
              name="mdp2"
              id="mdp2"
              onChange={(event) => {
                setPassword2(event.target.value);
              }}
            />
            <p>Réécrir Mot de passe</p>
            <button
              type="button"
              className="view-password"
              onClick={() => setTypePwd2(!typePwd2)}
            >
              {typePwd2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </label>
        </div>
        <button
          type="button"
          className="button-bas"
          onClick={(e) => handleInscription(e)}
        >
          Créer un compte
        </button>
      </form>
    </main>
  );
};

export default seInscrire;
