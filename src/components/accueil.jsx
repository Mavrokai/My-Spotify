import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Accueil.css";

function Accueil({ searchTerm }) {
const [allArtists, setAllArtists] = useState([]);
const [displayedArtists, setDisplayedArtists] = useState([]);
const [error, setError] = useState(null);
const navigate = useNavigate();

useEffect(() => {
fetch("http://localhost:8000/artists")
    .then((response) => {
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
    }
    return response.json();
    })
    .then((data) => {
    setAllArtists(data);

    // Mélanger les artistes et en prendre 5 au hasard
    if (!searchTerm) {
        const shuffled = [...data].sort(() => 0.5 - Math.random()).slice(0, 5);
        setDisplayedArtists(shuffled);
    } else {
        setDisplayedArtists(data);
    }
    })
    .catch((err) => {
    setError(err.message);
    });
}, []);

useEffect(() => {
if (!searchTerm) {
    if (allArtists.length > 0) {
    const shuffled = [...allArtists].sort(() => 0.5 - Math.random()).slice(0, 5);
    setDisplayedArtists(shuffled);
    }
} else {
    const filtered = allArtists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedArtists(filtered);
}
}, [searchTerm, allArtists]);

return (
<div className="accueil-container">
    {/* Contenu principal à droite */}
    <div className="content">
    <h1>Liste des artistes</h1>

    {error && <p className="error-message">{error}</p>}

    <div className="cards-container">
        {displayedArtists.length > 0 ? (
        displayedArtists.map((artist) => (
            <div key={artist.id} className="card" onClick={() => navigate(`/DetailsArtiste/${artist.id}`)}>
            <img src={artist.photo} alt={artist.name} />
            <h2>{artist.name}</h2>
            <p style={{ opacity: 0.5 }}>{artist.description}</p>
            </div>
        ))
        ) : (
        <p className="loading">{searchTerm ? "Aucun artiste trouvé" : "Chargement..."}</p>
        )}
    </div>
    </div>
</div>
);
}

export default Accueil;
