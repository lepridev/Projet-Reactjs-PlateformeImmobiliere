import React from "react";
import "./Recapitulatif.css";

const Recapitulatif = () => {
  return (
    <div className="recap_container">
      <div className="title">
        <h3>Nous avons rassemblés des offres pour vous</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          dignissimos ut ea. At fuga unde ab aliquam, reprehenderit, non tempore
          excepturi nam consectetur numquam inventore quaerat quod suscipit quia
          reiciendis.
        </p>
      </div>
      <div className="stat">
        <div>
          <h3>20500+</h3>
          <p>Appartement prêt</p>
        </div>
        <div>
          <h3>7600+ </h3>
          <p>Maisons à vendre</p>
        </div>
        <div>
          <h3>12300+</h3>
          <p>Maison à louer</p>
        </div>
        <div>
          <h3>15200+</h3>
          <p>Utilisateurs satisfaits</p>
        </div>
      </div>
    </div>
  );
};

export default Recapitulatif;
