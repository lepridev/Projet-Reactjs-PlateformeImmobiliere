import React from "react";
import "./Louer.css";
import { Outlet } from "react-router-dom";

const Louer = () => {
  return (
    <div className="louer_container">
      <Outlet />
    </div>
  );
};

export default Louer;
