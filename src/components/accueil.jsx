import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Accueil.css";

function Accueil({ searchTerm }) {
const [allArtists, setAllArtists] = useState([]);
const [featuredArtists, setFeaturedArtists] = useState([]);
const [popularAlbums, setPopularAlbums] = useState([]);
const [genres, setGenres] = useState([]);
const [displayedArtists, setDisplayedArtists] = useState([]);
const [loading, setLoading] = useState({
artists: true,
albums: true,
genres: true
});
const [error, setError] = useState(null);
const navigate = useNavigate();

// Fonction pour mélanger un tableau
const shuffleArray = (array) => {
const shuffled = [...array];
for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}
return shuffled;
};

// Charger tous les artistes
useEffect(() => {
fetch("http://localhost:8000/artists")
    .then((response) => {
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des artistes");
    }
    return response.json();
    })
    .then((data) => {
    setAllArtists(data);
    
    // Sélectionner 5 artistes aléatoires pour la section "Artistes à découvrir"
    const shuffledArtists = shuffleArray(data).slice(0, 5);
    setFeaturedArtists(shuffledArtists);
    
    // Pour la recherche ou l'affichage complet
    if (!searchTerm) {
        setDisplayedArtists(shuffledArtists);
    } else {
        const filtered = data.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDisplayedArtists(filtered);
    }
    setLoading(prev => ({ ...prev, artists: false }));
    })
    .catch((err) => {
    console.error("Erreur artistes:", err);
    setError("Impossible de charger les artistes");
    setLoading(prev => ({ ...prev, artists: false }));
    });
}, []);

// Charger les albums populaires
useEffect(() => {
fetch("http://localhost:8000/albums")
    .then((response) => {
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des albums");
    }
    return response.json();
    })
    .then((data) => {
    // Sélectionner 5 albums aléatoires pour "Albums populaires"
    const shuffledAlbums = shuffleArray(data).slice(0, 5);
    setPopularAlbums(shuffledAlbums);
    setLoading(prev => ({ ...prev, albums: false }));
    })
    .catch((err) => {
    console.error("Erreur albums:", err);
    setError("Impossible de charger les albums");
    setLoading(prev => ({ ...prev, albums: false }));
    });
}, []);

// Charger les genres
useEffect(() => {
fetch("http://localhost:8000/genres")
    .then((response) => {
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des genres");
    }
    return response.json();
    })
    .then((data) => {
    // Sélectionner des genres aléatoires
    const shuffledGenres = shuffleArray(data).slice(0, 5);
    setGenres(shuffledGenres);
    setLoading(prev => ({ ...prev, genres: false }));
    })
    .catch((err) => {
    console.error("Erreur genres:", err);
    setError("Impossible de charger les genres");
    setLoading(prev => ({ ...prev, genres: false }));
    });
}, []);

// Mise à jour des artistes affichés lors de la recherche
useEffect(() => {
if (!searchTerm) {
    if (allArtists.length > 0) {
    const shuffled = shuffleArray(allArtists).slice(0, 5);
    setDisplayedArtists(shuffled);
    }
} else {
    const filtered = allArtists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedArtists(filtered);
}
}, [searchTerm, allArtists]);

// Si un terme de recherche est présent, n'affiche que les résultats
if (searchTerm) {
return (
    <div className="accueil-container">
    <div className="content">
        <h1>Résultats de recherche pour "{searchTerm}"</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="cards-container">
        {displayedArtists.length > 0 ? (
            displayedArtists.map((artist) => (
            <div key={artist.id} className="card" onClick={() => navigate(`/DetailsArtiste/${artist.id}`)}>
                <img 
                src={artist.photo} 
                alt={artist.name} 
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placeholder.pics/svg/300x300/DEDEDE/555555/Artist";
                }}
                />
                <h2>{artist.name}</h2>
                <p className="card-description">{artist.description}</p>
            </div>
            ))
        ) : (
            <p className="no-results">Aucun artiste trouvé pour "{searchTerm}"</p>
        )}
        </div>
    </div>
    </div>
);
}

// Affichage normal de l'accueil avec plusieurs sections
return (
<div className="accueil-container">
    <div className="content">
    <h1>Bienvenue sur MusiFlow</h1>
    {error && <p className="error-message">{error}</p>}

    {/* Section Artistes à découvrir */}
    <section className="content-section">
        <div className="section-header">
        <h2>Artistes à découvrir</h2>
        <button className="view-all" onClick={() => navigate("/Artiste")}>
            Voir tout
        </button>
        </div>
        <div className="cards-container">
        {loading.artists ? (
            <p className="loading">Chargement des artistes...</p>
        ) : featuredArtists.length > 0 ? (
            featuredArtists.map((artist) => (
            <div key={artist.id} className="card" onClick={() => navigate(`/DetailsArtiste/${artist.id}`)}>
                <img 
                src={artist.photo} 
                alt={artist.name}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placeholder.pics/svg/300x300/DEDEDE/555555/Artist";
                }}
                />
                <h2>{artist.name}</h2>
                <p className="card-description">{artist.description}</p>
            </div>
            ))
        ) : (
            <p className="no-results">Aucun artiste disponible</p>
        )}
        </div>
    </section>

    {/* Section Albums populaires */}
    <section className="content-section">
        <div className="section-header">
        <h2>Albums populaires</h2>
        <button className="view-all" onClick={() => navigate("/Album")}>
            Voir tout
        </button>
        </div>
        <div className="cards-container">
        {loading.albums ? (
            <p className="loading">Chargement des albums...</p>
        ) : popularAlbums.length > 0 ? (
            popularAlbums.map((album) => (
            <div key={album.id} className="card" onClick={() => navigate(`/DetailsAlbum/${album.id}`)}>
                <img 
                src={album.cover} 
                alt={album.name}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placeholder.pics/svg/300x300/DEDEDE/555555/Album";
                }}
                />
                <h2>{album.name}</h2>
                <p className="card-description">{album.artist}</p>
            </div>
            ))
        ) : (
            <p className="no-results">Aucun album disponible</p>
        )}
        </div>
    </section>

    {/* Section Genres */}
    <section className="content-section">
        <div className="section-header">
        <h2>Genres musicaux</h2>
        <button className="view-all" onClick={() => navigate("/Genres")}>
            Voir tout
        </button>
        </div>
        <div className="cards-container">
        {loading.genres ? (
            <p className="loading">Chargement des genres...</p>
        ) : genres.length > 0 ? (
            genres.map((genre) => (
            <div 
                key={genre.id} 
                className="card genre-card" 
                onClick={() => navigate(`/DetailsGenre/${genre.id}`)}
                style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${getRandomGradient()})`,
                backgroundSize: 'cover'
                }}
            >
                <h2>{genre.name}</h2>
                <p className="card-description">{genre.albums ? `${genre.albums.length} albums` : ''}</p>
            </div>
            ))
        ) : (
            <p className="no-results">Aucun genre disponible</p>
        )}
        </div>
    </section>
    </div>
</div>
);
}

// Fonction pour générer un dégradé aléatoire pour les cartes de genre
function getRandomGradient() {
const colors = [
"https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=300&auto=format",
"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format",
"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=300&auto=format",
"https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=300&auto=format",
"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=300&auto=format"
];
return colors[Math.floor(Math.random() * colors.length)];
}

export default Accueil;