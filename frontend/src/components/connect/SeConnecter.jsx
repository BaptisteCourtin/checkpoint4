import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const seConnecter = ({ setCompo }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [typePwd, setTypePwd] = useState(true);

  const handleConnection = (e) => {
    e.preventDefault();
    navigate("/search");
    // if (email && password) {
    //   axios
    //     .post(`${import.meta.env.VITE_PATH}/authFamille`, {
    //       email,
    //       password,
    //     })
    //     .then((ret) => {
    //       const { familleId, token } = ret.data;

    //       setFamilleId(familleId);
    //       sessionStorage.setItem("BabyPlacefamilleId", familleId);

    //       updateToNote(ret.data.familleId);
    //       deleteAncienResa(ret.data.familleId);

    //       navigate("/appli/search", {
    //         state: {
    //           token,
    //         },
    //       });
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //       toast.error("le mot de passe ou l'email est faux");
    //     });
    // }
  };

  return (
    <main className="seConnecter">
      <button
        type="button"
        className="butt-top-connect"
        onClick={() => setCompo(0)}
      >
        S'inscrire
      </button>

      <h3>Se connecter</h3>
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
        </div>
        <button
          type="submit"
          className="button-bas"
          onClick={(e) => {
            handleConnection(e);
          }}
        >
          Se connecter
        </button>
      </form>
    </main>
  );
};

export default seConnecter;
