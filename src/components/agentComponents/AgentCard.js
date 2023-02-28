import React from "react";
import "./AgentCard.css";
import picHomme from "../../assets/homme.jpg";

const AgentCard = () => {
  return (
    <div className="agentCard_container">
      <div className="agent_pic">
        <img src={picHomme} alt="homme" />
      </div>
      <div className="agent_details">
        <h5>Agent Burg</h5>
        <p>+225 05 02 21 05 07</p>
        <p>Toujours Possible</p>
        <p>0 Offres</p>
      </div>
    </div>
  );
};

export default AgentCard;
