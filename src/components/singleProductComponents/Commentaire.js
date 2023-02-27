import React from "react";
import "./Commentaire.css";
import pic from "../../assets/homme.jpg";

const Commentaire = () => {
  return (
    <div className="commentaire_container">
      <div className="title">
        <h5>Commentaires</h5>
      </div>
      <div className="commentaire">
        <div className="pic">
          <img src={pic} alt="" />
        </div>
        <div className="note_nom_date_comm">
          <div className="note_nom_date">
            <h5>Delphia Conn</h5>
            <p>26 Fev 2023</p>
          </div>
          <div className="comm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              corrupti esse exercitationem obcaecati praesentium quod,
              repudiandae reprehenderit perferendis eius delectus, nulla neque
              rem hic officia suscipit porro odio dicta ullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentaire;
