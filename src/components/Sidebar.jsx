
import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Spotify Clone</h2>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/Album">Albums</Link></li>
          <li><Link to="/Genres">Genres</Link></li>
          <li><Link to="/Artiste">Artiste</Link></li>
          <li><Link to="/playlists">Playlists</Link></li>
          <li><Link to="/Recherche">Recherche</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
