import React from "react";

// Tuomme Bootstrapin, jotta voimme parantaa sovelluksemme ulkoasua.
import "bootstrap/dist/css/bootstrap.css";

// Tuomme NavLinkin, jotta voimme käyttää React Routeria.
import { NavLink } from "react-router-dom";

// Tässä näytämme navigaatiopalkkimme.
export default function Navbar() {
  return (
    <div>
      {/* Luomme Bootstrapin navigaatiopalkin */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Luomme navigaatiopalkin brändilinkin, joka vie takaisin etusivulle */}
        <NavLink className="navbar-brand" to="/">
          <img
            style={{ width: 25 + "%" }}
            src="https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt2b77e23f4c2a60c2/640a9ddcdc8f6f554555e75e/d4-logo-002-SM.webp"
          ></img>
        </NavLink>
        {/* Luomme navigaatiopalkin "toggler" -painikkeen mobiilinäkymää varten */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Luomme navigaatiopalkin valikot */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* Luomme navigaatiopalkin linkin "Luo tietue" -sivulle */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create new
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
