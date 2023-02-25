import React from "react";
import "./Comodites.css";

const Comodites = () => {
  return (
    <div className="comodites_container">
      <div className="title">
        <h5>Détails et Autres</h5>
      </div>
      <div className="comodites">
        <h5>
          Chambres : <span>1</span>
        </h5>
        <h5>
          Douches : <span>2</span>
        </h5>
      </div>
    </div>
  );
};

export default Comodites;
