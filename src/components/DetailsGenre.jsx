import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DetailsGenre() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [genreName, setGenreName] = useState("");
  const [albumIds, setAlbumIds] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  // 1️⃣ Récupérer le genre et la liste d'albums
  useEffect(() => {
    fetch(`http://localhost:8000/genres/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGenreName(data.genre.name);
        setAlbumIds(data.albums || []);
      })
      .catch((err) => setError(err.message));
  }, [id]);

  // 2️⃣ Récupérer les détails des albums après avoir obtenu les IDs
  useEffect(() => {
    if (albumIds.length > 0) {
      Promise.all(
        albumIds.map((albumId) =>
          fetch(`http://localhost:8000/albums/${albumId}`)
            .then((response) => response.json())
        )
      )
        .then((albumDetails) => setAlbums(albumDetails))
        .catch((err) => setError(err.message));
    }
  }, [albumIds]);

  return (
    <div className="container">
      <h1>{genreName}</h1>

      {error && <p className="error-message">{error}</p>}

      <div className="cards-container">
        {albums.length > 0 ? (
          albums.map((album) => (
            <div key={album.id} className="card" onClick={() => navigate(`/DetailsAlbum/${album.id}`)}>
              <img src={album.cover} alt={album.name} />
              <h2>{album.name}</h2>
              <p style={{ opacity: 0.5 }}>{album.artist}</p>
            </div>
          ))
        ) : (
          <p className="loading">Chargement...</p>
        )}
      </div>
    </div>
  );
}

export default DetailsGenre;
