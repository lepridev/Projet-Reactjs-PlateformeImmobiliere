import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-immo.png";
import appplay from "../../assets/appplay.jpeg";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="adresses">
        <img src={logo} alt="logo deuclic" />
        <p>Abidjan Riviéra Palmeraire</p>
        <p>00225 0502210507</p>
        <p>info@deuclic.com</p>
      </div>
      <div className="liens">
        <h5>A Propos</h5>
        <p>A propos de nous</p>
        <p>Nous contacter</p>
        <p>Termes et conditions</p>
      </div>
      <div className="plusInfos">
        <h5>Plus d'informations</h5>
        <p>Toutes les offres</p>
        <p>Offres à louer</p>
        <p>Offres à vendre</p>
        <p>Offres résidences meublées</p>
      </div>
      <div className="nouveautes">
        <h5>Nouveautés</h5>
        <p>Offres récentes</p>
        <p>Decoration intérieur</p>
        <p>Matériels de construction</p>
      </div>
      <div className="telechargement">
        <h5>Téléchargements</h5>
        <img src={appplay} alt="app play store" />
      </div>
    </div>
  );
};

export default Footer;
