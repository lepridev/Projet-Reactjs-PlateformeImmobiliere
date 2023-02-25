import React from "react";
import "./Residence.css";
import BarreRecherche from "../layoutComponents/BarreRecherche";
import AdressAndPrice from "../singleProductComponents/AdressAndPrice";
import SharingButtons from "../singleProductComponents/SharingButtons";
import ContactPoster from "../singleProductComponents/ContactPoster";
import DetailAndFeature from "../singleProductComponents/DetailAndFeature";

const Residence = () => {
  return (
    <div className="residence_container">
      <div className="left">
        <AdressAndPrice />
        <DetailAndFeature />
      </div>
      <div className="rigth">
        <SharingButtons />
        <ContactPoster />
      </div>
    </div>
  );
};

export default Residence;
