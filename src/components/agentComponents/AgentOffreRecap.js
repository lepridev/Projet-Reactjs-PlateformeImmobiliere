import React from "react";
import "./AgentOffreRecap.css";

const AgentOffreRecap = () => {
  return (
    <div className="AgentOffreRecap_container">
      <div className="header_container">
        <ul className="entete">
          <li className="link active">
            <a href="#">A LOUER</a>
          </li>
          <li className="link">
            <a href="#">A VENDRE</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <p>0 Offre</p>
      </div>
    </div>
  );
};

export default AgentOffreRecap;
