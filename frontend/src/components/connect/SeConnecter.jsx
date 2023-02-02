import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";

import UserRoleContext from "@components/context/UserRoleContext";

const seConnecter = ({ setCompo }) => {
  const navigate = useNavigate();
  const { setRole } = useContext(UserRoleContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [typePwd, setTypePwd] = useState(true);

  const handleConnection = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/authUser`, {
          email,
          password,
        })
        .then((ret) => {
          setRole(ret.data.role);
          sessionStorage.setItem("catchADreamRole", ret.data.role);
          navigate("/search");
        })
        .catch((err) => {
          console.error(err);
          toast.error("le mot de passe ou l'email est faux");
        });
    }
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
      <form onSubmit={(e) => handleConnection(e)}>
        <div className="champs">
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
        <button type="submit" className="button-bas">
          Se connecter
        </button>
      </form>
    </main>
  );
};

export default seConnecter;
