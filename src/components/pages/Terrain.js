import React from "react";
import "./Terrain.css";
import AgentCard from "../agentComponents/AgentCard";
import AgentInfo from "../agentComponents/AgentInfo";
import AgentOffreRecap from "../agentComponents/AgentOffreRecap";
import AgentBox from "../Box/AgentBox";
import Connexion from "../connexionComponents/Connexion";
import Inscription from "../connexionComponents/Inscription";
import DashboardSidebar from "../dashboardComponents/DashboardSidebar";
import DashboardWiget from "../dashboardComponents/DashboardWiget";
import DashboardLog from "../dashboardComponents/DashboardLog";

const Terrain = () => {
  return (
    <div className="terrain_container">
      {/* <AgentCard />
      <AgentInfo />
      <AgentOffreRecap /> */}
      {/* 
      <AgentBox /> */}

      {/* <Inscription /> */}
      <div className="sidebar">
        <DashboardSidebar />
      </div>
      <div className="contents">
        <DashboardWiget />
        <DashboardLog />
      </div>
    </div>
  );
};

export default Terrain;
