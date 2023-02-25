import React from "react";
import "./DetailAndFeature.css";

const DetailAndFeature = () => {
  return (
    <div className="detailAndFeature">
      <div className="title">
        <h5>Détails et Autres</h5>
      </div>
      <div className="informations">
        <h5>
          Chambres : <span>1</span>
        </h5>
        <h5>
          Douches : <span>2</span>
        </h5>
        <h5>
          Superficie : <span>90m³</span>
        </h5>
        <h5>
          Type d'Offre : <span>Appartement</span>
        </h5>
      </div>
    </div>
  );
};

export default DetailAndFeature;
