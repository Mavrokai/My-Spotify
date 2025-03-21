import React from "react";
import "../Navbar.css";

function Navbar({ onSearch }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>🎵 MusiFlow</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un artiste..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
