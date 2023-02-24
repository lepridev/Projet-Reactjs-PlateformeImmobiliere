import React from "react";
import "./BarreTitre.css";

const BarreTitre = ({ titre }) => {
  return (
    <div className="barreTitre_container">
      <h2>{titre}</h2>
    </div>
  );
};

export default BarreTitre;
