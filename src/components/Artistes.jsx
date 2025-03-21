import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Artiste.css";

function Artiste() {
    const [allArtiste, setAllArtiste] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const artistePerPage = 20; // Nombre d'albums par page
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/artists")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des albums");
                }
                return response.json();
            })
            .then((data) => setAllArtiste(data))
            .catch((err) => setError(err.message));
    }, []);

    // Calcul de la pagination
    const totalPages = Math.ceil(allArtiste.length / artistePerPage);
    const indexOfLastAlbum = currentPage * artistePerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - artistePerPage;
    const currentArtiste = allArtiste.slice(indexOfFirstAlbum, indexOfLastAlbum);

    // Fonction pour changer de page
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Générer la pagination avec "..." entre les pages
    const getPagination = () => {
        const pages = [];
        const maxVisiblePages = 3; // Nombre de pages visibles avant "..."

        if (totalPages <= 7) {
            // Afficher toutes les pages si elles sont peu nombreuses
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Toujours afficher la première, la dernière et quelques pages autour de la page actuelle
            pages.push(1);

            if (currentPage > maxVisiblePages + 1) {
                pages.push("...");
            }

            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - maxVisiblePages) {
                pages.push("...");
            }

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="content">
            <h1>Liste des Artiste</h1>

            {error && <p className="error-message">{error}</p>}

            <div className="cards-container">
                {currentArtiste.length > 0 ? (
                    currentArtiste.map((artists) => (
                        <div
                            key={artists.id}
                            className="card"
                            onClick={() => navigate(`/DetailsArtiste/${artists.id}`)}
                        >
                            <img src={artists.photo} alt={artists.name} />
                            <h2>{artists.name}</h2>
                        </div>
                    ))
                ) : (
                    <p className="loading">Chargement...</p>
                )}
            </div>

            {/* Pagination */}
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
                                onClick={() => goToPage(page)}
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
        </div>
    );
}

export default Artiste;