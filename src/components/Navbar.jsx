import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ onSearch }) {
return (
<nav className="navbar">
    <div className="logo">
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
<h1>🎵 MySpotify</h1>
</Link>
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