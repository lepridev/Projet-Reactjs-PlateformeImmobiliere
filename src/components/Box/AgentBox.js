import React from "react";
import Buttons from "../buttons/Buttons";
import "./AgentBox.css";
import agentImg from "../../assets/homme.jpg";
import { BsEnvelope } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const AgentBox = () => {
  return (
    <div className="agentBox_container">
      <div className="agent_box_img">
        <img className="agent_img" src={agentImg} alt="home's key" />
      </div>
      <div className="agent_details_button">
        <div className="agent_name_message">
          <h5>Agent Burg</h5>
          <div className="message">
            <BsEnvelope className="messag_icon" />
          </div>
          {/* */}
        </div>

        <div className="agent_phone_email">
          <div className="phone">
            <h5>Téléphone:</h5>
            <p>+225 05 02 21 05 07</p>
          </div>
          <div className="email">
            <h5>Email:</h5>
            <p>agent_burg@gmail.com</p>
          </div>
        </div>

        <div className="agent_offre_button">
          <div className="location">
            <span>
              <AiFillHome className="home_icon" /> 0 Offre
            </span>
          </div>
          <div className="button">
            <Buttons text={"Voir"} color={"colorF"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentBox;
