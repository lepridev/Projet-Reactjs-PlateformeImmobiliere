import React from "react";
import "./AgentInfo.css";

const AgentInfo = () => {
  return (
    <div className="agentInfo_container">
      <div className="title">
        <h5>Agent Info</h5>
      </div>
      <div className="infos">
        <div>
          <h5>Ceo</h5>
          <p>Agent Burg</p>
        </div>
        <div>
          <h5>Email</h5>
          <p>agent_burg@gmail.com</p>
        </div>
        <div>
          <h5>Téléphone</h5>
          <p>+225 05 02 21 05 07</p>
        </div>
        <div>
          <h5>Inscrit depuis</h5>
          <p>25 Fevrier 2023</p>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
