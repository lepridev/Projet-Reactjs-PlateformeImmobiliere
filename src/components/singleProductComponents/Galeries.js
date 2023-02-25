import React from "react";
import "./Galeries.css";
import pic11 from "../../assets/galeries/11.jpg";
import pic12 from "../../assets/galeries/12.jpg";
import pic13 from "../../assets/galeries/13.jpg";
import pic14 from "../../assets/galeries/14.jpg";
import pic15 from "../../assets/galeries/15.jpg";

const picImg = [pic11, pic12, pic13, pic14, pic15, pic11];

const Galeries = () => {
  return (
    <div className="galeries_container">
      <div className="title">
        <h5>Galeries</h5>
      </div>
      <div className="galeries">
        {picImg.map((pic) => (
          <img key={pic} src={pic} alt="galerie" />
        ))}
      </div>
    </div>
  );
};

export default Galeries;
