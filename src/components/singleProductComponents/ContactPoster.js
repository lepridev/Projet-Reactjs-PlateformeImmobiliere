import React from "react";
import "./ContactPoster.css";
import Buttons from "../buttons/Buttons";

const ContactPoster = () => {
  return (
    <div className="contactPoster_container">
      <div className="pic_contact">
        <img src="" alt="" />
        <div className="name_and_phone">
          <h5>Agent Burg</h5>
          <p>+225 0502210507</p>
        </div>
      </div>
      <form className="contact_poster">
        <div className="name">
          <input type="text" placeholder="Name *" />
        </div>
        <div className="phone">
          <input type="text" placeholder="Phone *" />
        </div>
        <div className="Email">
          <input type="text" placeholder="Email" />
        </div>
        <div className="adress">
          <input type="text" placeholder="6007 Applegate Lane" />
        </div>
        <div className="message">
          <textarea
            name="massage"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="submit_btn">
          <button>Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPoster;
