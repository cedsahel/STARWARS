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
        <Link to="/characters">Personnages</Link>
        <Link to="/films">films</Link>
        <Link to="/starships">starship</Link>
        <Link to="/vehicles">vehicules</Link>
        <Link to="/species">species</Link>
        <Link to="/planets">planetes</Link>
    </nav>
  </> 
}

export default Navbar;
