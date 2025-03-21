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
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 10;




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
                setFilteredResults([...enrichedAlbums, ...enrichedArtists]);

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

        setFilteredResults(filtered);
        setCurrentPage(1);
    }, [searchTerm, albums, artists]);



    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);
    const totalPages = Math.ceil(filteredResults.length / resultsPerPage);




    const getPagination = () => {
        const pages = [];
        const maxVisiblePages = 3;

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > maxVisiblePages + 1) pages.push("...");

            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) pages.push(i);

            if (currentPage < totalPages - maxVisiblePages) pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

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

            {currentResults.length > 0 ? (
                <>
                    <div className="cards-container">
                        {currentResults.map((item) => (
                            <div className="card" key={item.id + item.type}>
                                {item.type === 'artist' ? (
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

                    {totalPages > 1 && (
                        <div className="pagination">
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                ◀
                            </button>

                            {getPagination().map((page, index) =>
                                page === "..." ? (
                                    <span key={index} className="dots">...</span>
                                ) : (
                                    <button
                                        key={index}

                                        className={page === currentPage ? "active" : ""}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </button>
                                )
                            )}

                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}

                                disabled={currentPage === totalPages}
                            >
                                ▶
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="no-results">
                    <p>Aucun résultat trouvé pour "{searchTerm}"</p>
                </div>
            )}
            
        </div>
    );
}

export default Search;