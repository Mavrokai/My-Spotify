import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Accueil from "./components/accueil";
import Navbar from "./components/Navbar";
import ArtistDetails from "./components/detailsArtiste";
import Albums from "./components/Album";
import Sidebar from "./components/Sidebar";
import DetailsAlbum from "./components/detailsAlbum";
import Genres from "./components/Genres";
import DetailsGenre from "./components/DetailsGenre";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;