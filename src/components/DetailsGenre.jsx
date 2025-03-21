import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Albums.css";

function DetailsGenre() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [genreName, setGenreName] = useState("");
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const albumsPerPage = 20;

  // Récupérer le genre et les albums associés
  useEffect(() => {
    setLoading(true);
    
    // 1. D'abord récupérer les informations sur le genre
    fetch(`http://localhost:8000/genres/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération du genre");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Données du genre:", data);
        
        // Extraire le nom du genre
        if (data && data.genre && data.genre.name) {
          setGenreName(data.genre.name);
        } else if (data && data.name) {
          setGenreName(data.name);
        }
        
        // Extraire les IDs d'albums
        if (data && data.albums && Array.isArray(data.albums)) {
          // 2. Ensuite, récupérer les détails de chaque album
          const albumPromises = data.albums.map(albumId => 
            fetch(`http://localhost:8000/albums/${albumId}`)
              .then(response => {
                if (!response.ok) {
                  console.warn(`Impossible de récupérer l'album ${albumId}`);
                  return null;
                }
                return response.json();
              })
              .catch(err => {
                console.warn(`Erreur pour l'album ${albumId}:`, err);
                return null;
              })
          );
          
          // Traiter toutes les promesses
          Promise.all(albumPromises)
            .then(albumData => {
              // Filtrer les albums valides et adapter le format si nécessaire
              const validAlbums = albumData
                .filter(album => album !== null)
                .map(album => {
                  // Vérifier si l'album est déjà dans le bon format ou s'il faut l'extraire
                  if (album && album.album) {
                    return album.album; // Format utilisé dans DetailsAlbum.jsx
                  }
                  return album; // Format utilisé dans Album.jsx
                });
              
              setAlbums(validAlbums);
              setLoading(false);
            })
            .catch(err => {
              console.error("Erreur lors du chargement des albums:", err);
              setError("Impossible de charger les albums");
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Erreur:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Calcul de la pagination
  const totalPages = Math.ceil(albums.length / albumsPerPage);
  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  // Fonction pour changer de page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Remonter en haut de la page lors du changement de page
    window.scrollTo(0, 0);
  };

  // Générer la pagination avec "..." entre les pages
  const getPagination = () => {
    const pages = [];
    const maxVisiblePages = 3;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
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

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="content">
      <h1>{genreName || "Genre"}</h1>

      {error && <p className="error-message">Erreur: {error}</p>}

      <div className="cards-container">
        {loading ? (
          <p className="loading">Chargement des albums...</p>
        ) : currentAlbums.length > 0 ? (
          currentAlbums.map((album) => (
            <div
              key={album.id}
              className="card"
              onClick={() => navigate(`/DetailsAlbum/${album.id}`)}
            >
              <img 
                src={album.cover} 
                alt={album.name} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placeholder.pics/svg/300x300/DEDEDE/555555/Album%20Cover";
                }}
              />
              <h2>{album.name || "Sans titre"}</h2>
              <p style={{ opacity: 0.5 }}>{album.artist || album.artist_id || "Artiste inconnu"}</p>
            </div>
          ))
        ) : (
          <p>Aucun album trouvé pour ce genre.</p>
        )}
      </div>

      {/* Pagination - affichée uniquement s'il y a plus d'une page */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ◀
          </button>

          {getPagination().map((page, index) =>
            page === "..." ? (
              <span key={`dots-${index}`} className="dots">...</span>
            ) : (
              <button
                key={`page-${page}`}
                className={page === currentPage ? "active" : ""}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailsGenre;