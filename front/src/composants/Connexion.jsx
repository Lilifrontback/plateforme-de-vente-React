import React, { useState } from "react";
import "./Connexion.css";


function Connexion() {
  // Déclaration d'un état pour le login avec useState
  const [login, setLogin] = useState("");
  // Déclaration d'un état pour le mot de passe avec useState
  const [password, setPassword] = useState("");
  return (
    <div className="container">
    <div className="card">
    <h2>Connexion</h2>
    <form className="login-form">
    <label>Se connecter</label>
    {/* Champ de login */}
    <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Se connecter"/>
    <label>Mot de passe</label>
    {/* Champ de mot de passe */}
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe"/>
    </form>
    {/* Bouton pour soumettre le formulaire */}
    <button className="btn" onClick={() => console.log("Login:", login, "Password:", password)}>Se connecter</button>
    
    </div>

    <div className="card">
    <h2>Créer un compte</h2>
    <p>Vous n'avez pas de compte ?</p>
    {/* Lien pour créer un compte */}
    <p><a href="#">Créer un compte</a></p>
    </div>
    </div>
  );
}
// Exportation du composant Connexion
export default Connexion;
