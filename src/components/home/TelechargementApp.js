import React from "react";
import "./TelechargementApp.css";
import appplay from "../../assets/appplay.png";
import media from "../../assets/media.png";

const TelechargementApp = () => {
  return (
    <div className="telechargementapp_container">
      <div className="left">
        <h3>Téléchargez gratuitement pour Android et Iphone</h3>
        <img src={appplay} alt="play and app store" />
      </div>
      <div className="right">
        <img src={media} alt="media social" />
      </div>
    </div>
  );
};

export default TelechargementApp;
