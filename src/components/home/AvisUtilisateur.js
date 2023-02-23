import React from "react";
import "./AvisUtilisateur.css";
import UserBox from "../Box/UserBox";

const AvisUtilisateur = () => {
  return (
    <div className="avisutilisateur_container">
      <div className="title">
        <h3>Comment ça marche ?</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          dignissimos ut ea. At fuga unde ab aliquam, reprehenderit, non tempore
          excepturi nam consectetur numquam inventore quaerat quod suscipit quia
          reiciendis.
        </p>
      </div>
      <div className="avis">
        <UserBox />
        <UserBox />
        <UserBox />
      </div>
    </div>
  );
};

export default AvisUtilisateur;
