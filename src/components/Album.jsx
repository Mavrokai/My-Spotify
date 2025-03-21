import React, { useState, useEffect } from "react";
import "../Accueil.css";
import { Link } from "react-router-dom";




function Album() {

    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage] = useState(18);



    useEffect(() => {
        fetch("http://localhost:8000/albums")
            .then((response) => {
                if (!response.ok) throw new Error("Erreur lors de la récupération des données");
                return response.json();
            })
            .then((data) => {
                const shuffled = [...data].sort(() => 0.5 - Math.random());
                setAlbums(shuffled);
            })
            .catch((err) => setError(err.message));
    }, []);





    const totalPages = Math.ceil(albums.length / albumsPerPage);
    const maxVisiblePages = 4;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;
    
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }





    const handleImageError = (e) => {
        e.target.src = 'https://i.pinimg.com/736x/e9/d0/3e/e9d03e1c07ca7fa3e81b17f6740e7bc5.jpg';
    };

    const currentAlbums = albums.slice(
        (currentPage - 1) * albumsPerPage,
        currentPage * albumsPerPage
    );

    return (
        <div className="container">


            <h1>Liste des Albums</h1>

            {error && <p className="error-message">{error}</p>}

            <div className="cards-container">
                {currentAlbums.length > 0 ? (
                    currentAlbums.map((album) => (
                        <Link 
                            to={`/album/${album.id}`} 
                            className="card" 
                            key={album.id}
                        >
                            <img 
                                src={album.cover || 'https://i.pinimg.com/736x/e9/d0/3e/e9d03e1c07ca7fa3e81b17f6740e7bc5.jpg'} 
                                alt={album.name} 
                                onError={handleImageError}
                            />
                            <h2>{album.name}</h2>
                        </Link>
                    ))
                ) : (
                    <p className="loading">Chargement...</p>
                )}
            </div>

            <div className="pagination">
                <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
                    disabled={currentPage === 1}
                >
                    Précédent
                </button>
                
                {pageNumbers.map(number => (
                    <button 
                        key={number} 
                        onClick={() => setCurrentPage(number)}
                        className={currentPage === number ? "active" : ""}
                    >
                        {number}
                    </button>
                ))}
                

                <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
                    disabled={currentPage === totalPages}
                >
                    Suivant
                </button>
            </div>
        </div> 
    );
}

export default Album;