import React, { useState, useEffect } from "react";
import "../Accueil.css";

function Accueil() {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/artists")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        // Mélanger les artistes et en prendre 5 au hasard
        const shuffled = [...data].sort(() => 0.5 - Math.random()).slice(0, 5);
        setArtists(shuffled);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="container">
      <h1>Liste des artistes</h1>

      {error && <p className="error-message">{error}</p>}

      <div className="cards-container">
        {artists.length > 0 ? (
          artists.map((artist) => (
            <div key={artist.id} className="card">
              <img src={artist.photo} alt={artist.name} />
              <h2>{artist.name}</h2>
              <h2>{artist.id}</h2>
            </div>
          ))
        ) : (
          <p className="loading">Chargement...</p>
        )}
      </div>
    </div>
  );
}

export default Accueil;
