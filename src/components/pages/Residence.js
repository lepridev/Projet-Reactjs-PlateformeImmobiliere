import React from "react";
import "./Residence.css";
import AdressAndPrice from "../singleProductComponents/AdressAndPrice";
import SharingButtons from "../singleProductComponents/SharingButtons";
import ContactPoster from "../singleProductComponents/ContactPoster";
import DetailAndFeature from "../singleProductComponents/DetailAndFeature";
import Description from "../singleProductComponents/Description";
import Comodites from "../singleProductComponents/Comodites";
import Localisation from "../singleProductComponents/Localisation";
import Galeries from "../singleProductComponents/Galeries";

const Residence = () => {
  return (
    <div className="residence_container">
      <div className="left">
        <AdressAndPrice />
        <DetailAndFeature />
        <Description />
        <Comodites />
        <Localisation />
        <Galeries />
      </div>
      <div className="rigth">
        <SharingButtons />
        <ContactPoster />
      </div>
    </div>
  );
};

export default Residence;
