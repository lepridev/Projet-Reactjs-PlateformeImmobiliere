import React from "react";
import "./PackPrix.css";
import PriceBox from "../Box/PriceBox";

const PackPrix = () => {
  return (
    <div className="packprix_container">
      <div className="title">
        <h3>Comment ça marche ?</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          dignissimos ut ea. At fuga unde ab aliquam, reprehenderit, non tempore
          excepturi nam consectetur numquam inventore quaerat quod suscipit quia
          reiciendis.
        </p>
      </div>
      <div className="pack">
        <PriceBox />
        <PriceBox />
        <PriceBox />
      </div>
    </div>
  );
};

export default PackPrix;
