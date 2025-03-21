import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Accueil from "./components/accueil";
import Navbar from "./components/Navbar";
import ArtistDetails from "./components/DetailsArtiste";
import Albums from "./components/Album";
import Sidebar from "./components/Sidebar";
import DetailsAlbum from "./components/DetailsAlbum";
import Genres from "./components/Genres";
import DetailsGenre from "./components/DetailsGenre";
import Artistes from "./components/Artistes";
import Recherche from "./components/Recherche.jsx";


import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} /> {/* Passez la fonction handleSearch */}
      <Sidebar /> 
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Accueil searchTerm={searchTerm} />} />
          <Route path="/detailsArtiste/:id" element={<ArtistDetails />} />
          <Route path="/Album" element={<Albums />} />
          <Route path="/detailsAlbum/:id" element={<DetailsAlbum />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/DetailsGenre/:id" element={<DetailsGenre />} />
          <Route path="/Artiste" element={<Artistes />} />
          <Route path="/Recherche" element={<Recherche />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;