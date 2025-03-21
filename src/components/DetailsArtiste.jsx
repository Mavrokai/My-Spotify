import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../ArtistDetails.css";



function ArtistDetails() {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadArtistData = async () => {
            try {
                setIsLoading(true);

                // Fetch artist details
                const artistResponse = await fetch(`http://localhost:8000/artists/${id}`);
                if (!artistResponse.ok) throw new Error("Artiste non trouvé");
                const artistData = await artistResponse.json();

                // Fetch artist albums
                const albumsResponse = await fetch(`http://localhost:8000/albums/artist/${id}`);
                if (!albumsResponse.ok) throw new Error("Erreur lors du chargement des albums");
                const albumsData = await albumsResponse.json();

                setArtist(artistData);
                setAlbums(albumsData);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        loadArtistData();
    }, [id]);

    const handleImageError = (e) => {
        e.target.src = 'https://i.pinimg.com/736x/48/4b/d9/484bd9fcdbda9c95ac4871d0ba57bef7.jpg';
    };

    if (isLoading) return <p className="loading">Chargement...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="artist-details">
            <div className="artist-header">
                <img
                    src={artist.photo}
                    alt={artist.name}
                    onError={handleImageError}
                />
                <div className="artist-info">
                    <h1>{artist.name}</h1>
                    <p className="artist-bio">{artist.bio}</p>
                </div>
            </div>
            <h2>Albums de {artist.name}</h2>
            <div className="cards-container-2">
                {albums.length > 0 ? (
                    albums.map((albums) => (
                        <Link
                            to={`/DetailsAlbum/${albums.id}`}
                            className="card"
                            key={albums.id}
                        >
                            <img
                                src={albums.cover || 'https://i.pinimg.com/736x/48/4b/d9/484bd9fcdbda9c95ac4871d0ba57bef7.jpg'}
                                alt={albums.name}
                                onError={handleImageError}
                            />
                            <h3>{albums.name}</h3>
                        </Link>
                    ))
                ) : (
                    <p className="no-albums">Aucun album disponible pour cet artiste</p>
                )}
            </div>

        </div>
    );
}

export default ArtistDetails;