import React from "react";
import "./AutreOffres.css";
import HorizontalBox from "../Box/HorizontalBox";
import Buttons from "../buttons/Buttons";

const AutreOffres = () => {
  return (
    <div className="autreOffre_container">
      <div className="title">
        <h3>Decouvez plus d'offres</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          dignissimos ut ea. At fuga unde ab aliquam, reprehenderit, non tempore
          excepturi nam consectetur numquam inventore quaerat quod suscipit quia
          reiciendis.
        </p>
      </div>
      <div className="autreoffres">
        <HorizontalBox />
        <HorizontalBox />
        <HorizontalBox />
        <HorizontalBox />
        <HorizontalBox />
        <HorizontalBox />
      </div>
      <Buttons size={"sizeS"} color={"colorF"} text={"Voir plus"} />
    </div>
  );
};

export default AutreOffres;
