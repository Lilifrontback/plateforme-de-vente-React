import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="logo.png" alt="Logo" className="logo" />
      {/* Utilisez Link pour rediriger vers le composant Connexion */}
      <button><Link to={"/connexion"} className="connexion-btn">Connexion</Link></button>
      <button className="panier-btn">Panier</button>
    </div>
  );
};

export default NavBar;
