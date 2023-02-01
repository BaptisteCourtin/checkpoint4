import React, { useState } from "react";

import SeConnecter from "@components/connect/SeConnecter";
import SeInscrire from "@components/connect/SeInscrire";

function Connexion() {
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return <SeConnecter setCompo={setCompo} />;
    }
    return <SeInscrire setCompo={setCompo} />;
  };

  return <div className="connexion">{choixComposant()}</div>;
}

export default Connexion;
