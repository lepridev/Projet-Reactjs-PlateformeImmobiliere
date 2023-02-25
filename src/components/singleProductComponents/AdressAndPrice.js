import React from "react";
import "./AdressAndPrice.css";
import { BiBed } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { TbArrowAutofitWidth } from "react-icons/tb";

const AdressAndPrice = () => {
  return (
    <div className="adressAndPrice_container">
      <div className="type">A louer</div>
      <div className="adressAndPrice">
        <h5>6007 Riviéra Palmeraire</h5>
        <p>827 Bogan Path North Desireestad, ME 07907-5063, Hampton</p>
        <h5>150 000</h5>
      </div>
      <div className="caracteristics">
        <div>
          <BiBed className="caracteristic_icon" /> 1 Chambre
        </div>
        <div>
          <GiBathtub className="caracteristic_icon" /> 2 Douches
        </div>
        <div>
          <TbArrowAutofitWidth className="caracteristic_icon" /> 90m²
        </div>
      </div>
    </div>
  );
};

export default AdressAndPrice;
