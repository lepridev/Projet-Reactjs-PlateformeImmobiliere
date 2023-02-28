import React from "react";
import "./Connexion.css";

const Connexion = () => {
  return (
    <div className="connexion_container">
      <div className="title">
        <h5>Connectez-vous...</h5>
      </div>
      <form className="connexion_form">
        <div className="email">
          <label htmlFor="connexion">Votre email ou pseudo</label>
          <input
            type="text"
            placeholder="Email/Pseudo"
            className="email_username"
          />
        </div>
        <div className="password">
          <label htmlFor="connexion">Votre mot de passe</label>
          <input
            type="password"
            placeholder="Mot de Passe"
            className="mot_de_passe"
          />
          <p>Mot de passe oublié ?</p>
        </div>
        <div className="connexion_button">
          <button>Connexion</button>
        </div>
      </form>
      <div className="lien_inscription">
        <p>
          vous avez pas de compte ? <span> Inscrivez-vous</span>
        </p>
      </div>
    </div>
  );
};

export default Connexion;
