import React from "react";
import "./DashboardWiget.css";
import { MdOutlineVerified } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import { CgMoveRight } from "react-icons/cg";

const DashboardWiget = () => {
  return (
    <div className="dashboardWiget_container">
      <div className="offre_approuve">
        <MdOutlineVerified className="wiget_icon" />
        <h5>0</h5>
        <p>Offres approuvées</p>
      </div>
      <div className="offre_attente">
        <VscUnverified className="wiget_icon" />
        <h5>0</h5>
        <p>Offres en attentes</p>
      </div>
      <div className="offre_rejete">
        <CgMoveRight className="wiget_icon" />
        <h5>0</h5>
        <p>Offres rejetées</p>
      </div>
    </div>
  );
};

export default DashboardWiget;
