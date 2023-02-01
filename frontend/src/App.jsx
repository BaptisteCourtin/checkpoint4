import { Route, Routes } from "react-router-dom";

import Connexion from "@pages/Connexion";
import Search from "@pages/Search";
import Details from "@pages/Details";
import Ajout from "@pages/Ajout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<Details />} />
        <Route path="/ajout" element={<Ajout />} />
      </Routes>
    </div>
  );
}

export default App;
