import React from "react";
import "./ListeDesOffres.css";
import BarreTitre from "../layoutComponents/BarreTitre";
import BarreRecherche from "../layoutComponents/BarreRecherche";
import VerticalBox from "../Box/VerticalBox";

const ListeDesOffres = () => {
  return (
    <div className="ListesDesOffres">
      <BarreTitre titre={"Liste des Offres"} />
      <div className="liste_et_barre">
        <div className="barre">
          <BarreRecherche />
        </div>
        <div className="liste">
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
          <VerticalBox />
        </div>
      </div>
    </div>
  );
};

export default ListeDesOffres;
