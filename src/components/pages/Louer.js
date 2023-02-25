import React from "react";
import "./Louer.css";
import { Outlet } from "react-router-dom";
import ListeDesOffres from "./ListeDesOffres";

const Louer = () => {
  return (
    <div className="louer_container">
      <ListeDesOffres />
    </div>
  );
};

export default Louer;
