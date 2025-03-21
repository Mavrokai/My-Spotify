import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Genres.css";

function Genres() {
const [genres, setGenres] = useState([]);
const [error, setError] = useState(null);
const navigate = useNavigate();

useEffect(() => {
fetch("http://localhost:8000/genres")
    .then((response) => {
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des genres");
    }
    return response.json();
    })
    .then((data) => setGenres(data))
    .catch((err) => setError(err.message));
}, []);

return (
<div className="content">
    <h1>Genres</h1>

    {error && <p className="error-message">{error}</p>}

    <div className="genres-container">
    {genres.length > 0 ? (
        genres.map((genre) => (
        <div
            key={genre.id}
            className="genre-card"
            onClick={() => navigate(`/DetailsGenre/${genre.id}`)}
        >
            <h2>{genre.name}</h2>
        </div>
        ))
    ) : (
        <p className="loading">Chargement...</p>
    )}
    </div>
</div>
);
}

export default Genres;
