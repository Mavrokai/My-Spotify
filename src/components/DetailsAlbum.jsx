import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../styles/DetailsAlbum.css";

function DetailsAlbum() {
const { id } = useParams(); // ID de l'album depuis l'URL
const [albumData, setAlbumData] = useState(null);
const [error, setError] = useState(null);
const [playingTrack, setPlayingTrack] = useState(null);
const audioRef = useRef(null);

useEffect(() => {
fetch(`http://localhost:8000/albums/${id}`)
    .then((response) => {
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
    }
    return response.json();
    })
    .then((data) => setAlbumData(data))
    
    .catch((err) => setError(err.message));
}, [id]);

// Fonction pour formater la durée en mm:ss
const formatDuration = (seconds) => {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;
return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

// Lecture unique de la piste
const playTrack = (trackUrl) => {
if (playingTrack === trackUrl) {
    audioRef.current.pause();
    setPlayingTrack(null);
} else {
    setPlayingTrack(trackUrl);
    if (audioRef.current) {
    audioRef.current.src = trackUrl;
    audioRef.current.play();
    }
}
};

return (
<div className="album-container">
    {error && <p className="error-message">{error}</p>}

    {albumData ? (
    <>
        <div className="album-header">
        <img src={albumData.album.cover} alt={albumData.album.name} className="album-cover" />
        <div className="album-info">
            <h1>{albumData.album.name}</h1>
            <h2>Artiste ID: {albumData.album.artist_id}</h2>
            <p className="album-description">{albumData.album.description}</p>
        </div>
        </div>

        <h3 className="tracklist-title">Pistes</h3>
        <div className="track-cards-container">
        {albumData.tracks.length > 0 ? (
            albumData.tracks.map((track) => (
            <div key={track.id} className="track-card">
                <img src={albumData.album.cover_small} alt={track.name} className="track-cover" />
                <div className="track-info">
                <h4>{track.track_no}. {track.name}</h4>
                <p>Durée: {formatDuration(track.duration)}</p>
                <button
                    className={`play-button ${playingTrack === track.mp3 ? "playing" : ""}`}
                    onClick={() => playTrack(track.mp3)}
                >
                    {playingTrack === track.mp3 ? "⏸ Pause" : "▶ Play"}
                </button>
                </div>
            </div>
            ))
        ) : (
            <p>Aucune piste disponible.</p>
        )}
        </div>

        {/* Lecteur audio unique */}
        <audio ref={audioRef} onEnded={() => setPlayingTrack(null)} />
    </>
    ) : (
    <p className="loading">Chargement...</p>
    )}
</div>
);
}

export default DetailsAlbum;
