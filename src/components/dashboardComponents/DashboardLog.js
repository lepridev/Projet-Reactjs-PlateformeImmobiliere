import React from "react";
import "./DashboardLog.css";

const DashboardLog = () => {
  return (
    <div className="dashboardLog_container">
      <div className="title">
        <h5>Historique d'activités</h5>
      </div>
      <div className="historique">
        <ul>
          <li>Ajout d'Offre</li>
          <li>Date d'ajout</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLog;
