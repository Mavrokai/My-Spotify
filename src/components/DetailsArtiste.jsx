import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ArtistDetails.css";

function ArtistDetails() {
const { id } = useParams(); // Récupérer l'ID dans l'URL
const [artist, setArtist] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
fetch(`http://localhost:8000/artists/${id}`)
    .then((response) => {
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des détails");
    }
    return response.json();
    })
    .then((data) => {
    setArtist(data);
    console.log(data);
    
    })
    .catch((err) => {
    setError(err.message);
    });
}, [id]); // Exécuter à chaque changement d'ID

if (error) return <p className="error-message">{error}</p>;
if (!artist) return <p className="loading">Chargement...</p>;

return (
<div className="artist-details">
    <img src={artist.photo} alt={artist.name} />
    <h1>{artist.name}</h1>
    <p>{artist.bio}</p>
</div>
);
}

export default ArtistDetails;
