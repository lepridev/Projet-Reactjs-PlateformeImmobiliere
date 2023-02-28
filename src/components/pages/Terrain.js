import React from "react";
import "./Terrain.css";
import AgentCard from "../agentComponents/AgentCard";
import AgentInfo from "../agentComponents/AgentInfo";
import AgentOffreRecap from "../agentComponents/AgentOffreRecap";
import AgentBox from "../Box/AgentBox";

const Terrain = () => {
  return (
    <div className="terrain_container">
      {/* <AgentCard />
      <AgentInfo />
      <AgentOffreRecap /> */}

      <AgentBox />
    </div>
  );
};

export default Terrain;
