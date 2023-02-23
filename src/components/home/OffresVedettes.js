import React from "react";
import VerticalBox from "../Box/VerticalBox";
import "./OffresVedettes.css";

const OffresVedettes = () => {
  return (
    <div className="vedettes_container">
      <div className="title">
        <h3>Les ofrres à louer nouvellement publiées</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          dignissimos ut ea. At fuga unde ab aliquam, reprehenderit, non tempore
          excepturi nam consectetur numquam inventore quaerat quod suscipit quia
          reiciendis.
        </p>
      </div>
      <div className="offres_vedettes">
        <VerticalBox />
        <VerticalBox />
        <VerticalBox />
      </div>
    </div>
  );
};

export default OffresVedettes;
