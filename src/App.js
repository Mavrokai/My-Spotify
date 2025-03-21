import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importation des composants de React Router
import { useState } from "react"; // Importation du hook useState pour gérer l'état local
import Accueil from "./components/accueil"; // Composant Accueil
import Navbar from "./components/Navbar"; // Composant Navbar
import ArtistDetails from "./components/DetailsArtiste"; // Composant des détails de l'artiste
import Albums from "./components/Album"; // Composant Albums
import Sidebar from "./components/Sidebar"; // Composant Sidebar
import "./App.css"; // Importation du fichier CSS

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Hook d'état pour la recherche

  const handleSearch = (term) => {
    setSearchTerm(term); // Met à jour le terme de recherche
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />{" "}
      {/* Passe la fonction de recherche à Navbar */}
      <Sidebar /> {/* Composant Sidebar */}
      <div className="page-content">
        <Routes>
          {/* Définition des différentes routes de l'application */}
          <Route path="/" element={<Accueil searchTerm={searchTerm} />} />
          <Route path="/detailsArtiste/:id" element={<ArtistDetails />} />
          <Route path="/Album" element={<Albums />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exporte le composant App
