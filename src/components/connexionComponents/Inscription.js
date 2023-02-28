import React from "react";
import "./Inscription.css";

const Inscription = () => {
  return (
    <div className="inscription_container">
      <div className="title">
        <h5>Inscrivez-vous...</h5>
      </div>
      <form className="inscription_form">
        <div className="email">
          <label htmlFor="inscription">Votre email</label>
          <input type="text" placeholder="Email" className="email_username" />
        </div>
        <div className="password">
          <label htmlFor="inscription">Votre mot de passe</label>
          <input
            type="password"
            placeholder="Mot de Passe"
            className="mot_de_passe"
          />
          <label htmlFor="inscription">Confirmez votre mot de passe</label>
          <input
            type="password"
            placeholder="Mot de Passe"
            className="mot_de_passe"
          />
        </div>
        <div className="inscription_button">
          <button>Connexion</button>
        </div>
      </form>
      <div className="lien_connexion">
        <p>
          vous avez un compte ? <span> Connectez-vous</span>
        </p>
      </div>
    </div>
  );
};

export default Inscription;
