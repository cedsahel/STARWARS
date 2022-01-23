import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  
  return <>
    <header>
        <h1>Starwars Api</h1>
        <input type="text" />
    </header>
    <nav style={{display:"flex", justifyContent:"space-around"}}>
        <Link to="/characters">personnages</Link>
        <Link to="/films">film</Link>
        <Link to="/starships">vaisseaux</Link>
        <Link to="/vehicles">vehicules</Link>
        <Link to="/species">especes</Link>
        <Link to="/planets">planetes</Link>
    </nav>
  </> 
}

export default Navbar;
