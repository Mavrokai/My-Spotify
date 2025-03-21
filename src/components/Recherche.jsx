import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Recherche.css";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [albumsRes, artistsRes] = await Promise.all([
                    fetch("http://localhost:8000/albums"),
                    fetch("http://localhost:8000/artists/")
                ]);

                if (!albumsRes.ok || !artistsRes.ok) throw new Error("Erreur de chargement");

                const albumsData = await albumsRes.json();
                const artistsData = await artistsRes.json();



                const enrichedAlbums = albumsData.map(album => {
                    const artist = artistsData.find(a => a.id === album.artist_id);
                    return {
                        ...album,
                        artistName: artist ? artist.name : '',
                        type: 'album'
                    };
                });



                const enrichedArtists = artistsData.map(artist => ({
                    ...artist,
                    type: 'artist'
                }));

                setAlbums(enrichedAlbums);
                setArtists(enrichedArtists);
                setFilteredResults([...enrichedAlbums, ...enrichedArtists].slice(0, 20));

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);



    useEffect(() => {
        const lowerSearch = searchTerm.toLowerCase();

        const filtered = [...albums, ...artists].filter(item => {
            const lowerItemName = item.name?.toLowerCase() || '';


            if (lowerItemName.includes(lowerSearch)) return true;


            if (item.type === 'album') {
                return item.artistName?.toLowerCase().includes(lowerSearch);
            }
            if (item.type === 'artist') {
                return item.genre?.toLowerCase().includes(lowerSearch);
            }

            return false;
        });

        setFilteredResults(filtered.slice(0, 20));
    }, [searchTerm, albums, artists]);

    const handleImageError = (e) => {
        e.target.src = 'https://i.pinimg.com/736x/48/4b/d9/484bd9fcdbda9c95ac4871d0ba57bef7.jpg';
    };




    if (isLoading) return <div className="loading">Chargement...</div>;
    if (error) return <div className="error-message">{error}</div>;





    return (
        <div className="search-container">
            <div className="search-header">
                <h1>Rechercher</h1>
                <input
                    type="text"
                    placeholder="Artistes, albums, genres..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {filteredResults.length > 0 ? (
                <div className="cards-container">
                    {filteredResults.map((item) => (
                        <div className="card" key={item.id + item.type}>
                            {item.type === 'artist' ? (


                                // Carte Artiste
                                <Link to={`/DetailsArtiste/${item.id}`}>
                                    <img
                                        src={item.photo || 'https://i.pinimg.com/736x/48/4b/d9/484bd9fcdbda9c95ac4871d0ba57bef7.jpg'}
                                        alt={item.name}
                                        onError={handleImageError}
                                    />
                                    <div className="card-info">
                                        <h3>{item.name}</h3>
                                        <p className="genre">{item.genre}</p>
                                    </div>
                                </Link>
                            ) : (
                                // Carte Album
                                <Link to={`/DetailsAlbum/${item.id}`}>
                                    <img
                                        src={item.cover || 'https://i.pinimg.com/736x/48/4b/d9/484bd9fcdbda9c95ac4871d0ba57bef7.jpg'}
                                        alt={item.name}
                                        onError={handleImageError}
                                    />
                                    <div className="card-info">
                                        <h3>{item.name}</h3>
                                        {item.artistName && <p className="artist-name">{item.artistName}</p>}
                                    </div>
                                </Link>
                            )}



                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <p>Aucun résultat trouvé pour "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
}



export default Search;