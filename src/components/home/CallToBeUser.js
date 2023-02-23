import React from "react";
import "./CallToBeUser.css";
import Buttons from "../buttons/Buttons";

const CallToBeUser = () => {
  return (
    <div className="calltobeuser_container">
      <div className="cta_title">
        <h3>Voulez vous être un Agent ?</h3>
        <p>Nous vous aidons a réaliser votre rêve</p>
      </div>
      <div className="cta_btn">
        <Buttons size={"sizeS"} color={"colorS"} text={"Ouvrez un compte"} />
      </div>
    </div>
  );
};

export default CallToBeUser;
