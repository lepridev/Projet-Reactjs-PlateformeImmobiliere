import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-immo.png";
import Buttons from "../buttons/Buttons";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/louer",
    name: "louer",
  },
  {
    path: "/vendre",
    name: "vendre",
  },
  {
    path: "/residence",
    name: "residence",
  },
  {
    path: "/terrain",
    name: "terrain",
  },
];

const Navbar = ({ children }) => {
  return (
    <div className="navbar_container">
      <nav>
        <div className="navbar_brand">
          <img className="navbar_brand_img" src={logo} alt="deuclic logo" />
        </div>
        <div className="navbar_main">
          <ul className="navbar_links">
            {links.map((link) => (
              <NavLink to={link.path} key={link.name}>
                {link.name}{" "}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar_acompte">
          <a href="#" className="navbar_upload">
            Deposer une offre
          </a>
          <a href="#" className="personal_acompte">
            Armand Lepri
          </a>
          <Buttons color={"colorS"} size={"sizeB"} text={"Connexion"} />
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
