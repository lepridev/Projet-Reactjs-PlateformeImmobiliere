import React from "react";
import "./UserBox.css";
import userPic from "../../assets/homme.jpg";

const UserBox = () => {
  return (
    <div className="userbox_container">
      <div className="user_pic">
        <img src={userPic} alt="homme" />
        <span>99</span>
      </div>
      <div className="user_descp">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="user_name">
        <h4>Agent Burg</h4>
        <p>Agent Immobilier Vridi Cité</p>
      </div>
    </div>
  );
};

export default UserBox;
