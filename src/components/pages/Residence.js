import React from "react";
import "./Residence.css";
import BarreRecherche from "../layoutComponents/BarreRecherche";
import AdressAndPrice from "../singleProductComponents/AdressAndPrice";
import SharingButtons from "../singleProductComponents/SharingButtons";

const Residence = () => {
  return (
    <div className="residence_caontainer">
      <AdressAndPrice />
      <SharingButtons />
    </div>
  );
};

export default Residence;
