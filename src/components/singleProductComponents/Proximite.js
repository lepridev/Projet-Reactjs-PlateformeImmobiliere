import React from "react";
import "./Proximite.css";
import { GiHealthNormal } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";

const Proximite = () => {
  return (
    <div className="proximite_container">
      <div className="title">
        <h5>A Proximité</h5>
      </div>
      <div className="proximite">
        <div className="first">
          <div>
            <GiHealthNormal />
            <h5>Pharmacie</h5>
          </div>
        </div>
        <div>
          <div>
            <FaSchool />
            <h5>Ecole</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proximite;
