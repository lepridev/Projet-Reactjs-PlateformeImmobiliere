import React from "react";
import "./DashboardSidebar.css";
import profilPic from "../../assets/homme.jpg";
import { AiFillDashboard } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiCreditCard } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

const DashboardSidebar = () => {
  return (
    <div className="dashboardSidebar_container">
      <div className="profil_pic">
        <img src={profilPic} alt="homme" />
      </div>
      <div className="profil_name">
        <h5>Agent Burg</h5>
        <p>+225 05 02 21 05 07</p>
      </div>
      <div className="sidebar_links">
        <ul>
          <li className="link">
            <AiFillDashboard className="dash_icon" /> Tableau de Bord
          </li>
          <li className="link">
            <FiSettings className="dash_icon" /> Configuration
          </li>
          <li className="link">
            <BiCreditCard className="dash_icon" /> Achat de Credit
          </li>
          <li className="link">
            <BsNewspaper className="dash_icon" /> Mes Offres
          </li>
          <li className="link">
            <BsUpload className="dash_icon" /> Deposer une Offre
          </li>
          <li className="link">
            <MdSecurity className="dash_icon" /> Sécurité
          </li>
          <li className="link">
            <BiLogOut className="dash_icon" /> Déconnexion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
