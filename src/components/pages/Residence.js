import React from "react";
import "./Residence.css";
import BarreRecherche from "../layoutComponents/BarreRecherche";
import AdressAndPrice from "../singleProductComponents/AdressAndPrice";

const Residence = () => {
  return (
    <div className="residence_caontainer">
      <AdressAndPrice />
    </div>
  );
};

export default Residence;
