import React from "react";
import "./CommentCaMarche.css";
import { BsFillFileRichtextFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";

const CommentCaMarche = () => {
  return (
    <div className="commentcamarche_container">
      <div className="title">
        <h3>Comment ça marche ?</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          dignissimos ut ea. At fuga unde ab aliquam, reprehenderit, non tempore
          excepturi nam consectetur numquam inventore quaerat quod suscipit quia
          reiciendis.
        </p>
      </div>
      <div className="etapes">
        <div>
          <div className="icon_container eval">
            <BsFillFileRichtextFill className="paper_icon" />
          </div>
          <h3>Evaluer l'offre</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam, asperiores eveniet nisi inventore debitis distinctio, maxime
            labore numquam vel amet natus!
          </p>
        </div>

        <div>
          <div className="icon_container meet">
            <FaUsers className="user_icon" />
          </div>
          <h3>Rencontrer l'agent</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam, asperiores eveniet nisi inventore debitis distinctio, maxime
            labore numquam vel amet natus!
          </p>
        </div>

        <div>
          <div className="icon_container val">
            <GrValidate className="valid_icon" />
          </div>
          <h3>Finaliser</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam, asperiores eveniet nisi inventore debitis distinctio, maxime
            labore numquam vel amet natus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCaMarche;
