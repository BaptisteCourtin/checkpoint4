import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import UserRoleContext from "@components/context/UserRoleContext";

import Connexion from "@pages/Connexion";
import Search from "@pages/Search";
import Details from "@pages/Details";
import Ajout from "@pages/Ajout";

function App() {
  const [role, setRole] = useState("user");
  useEffect(() => {
    setRole(sessionStorage.getItem("catchADreamRole"));
  }, []);

  return (
    <div className="app">
      <UserRoleContext.Provider value={{ role, setRole }}>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
          <Route path="/ajout" element={<Ajout />} />
        </Routes>
      </UserRoleContext.Provider>
    </div>
  );
}

export default App;
