import React from "react";
import "./Louer.css";
import ListeDesOffres from "./ListeDesOffres";

const Vendre = () => {
  return (
    <div>
      {/* Faire un map pour afficher les offres a vendre depuis la BD */}
      <ListeDesOffres />
    </div>
  );
};

export default Vendre;
