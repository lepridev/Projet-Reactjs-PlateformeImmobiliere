import React from "react";
import "./WriteReview.css";
import { AiFillStar } from "react-icons/ai";

const WriteReview = () => {
  return (
    <div className="writeReview_container">
      <div className="title">
        <h5>Laisser un Commentaire</h5>
        <p>Connectez-vous pour laisser un commentaire...</p>
      </div>
      <div className="review_container">
        <div className="review">
          <div className="service_location">
            <div className="service">
              <p>Service</p>
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
            </div>
            <div className="location">
              <p>Localisation</p>
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
            </div>
          </div>
          <div className="value_clean">
            <div className="value">
              <p>Coût</p>
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
            </div>
            <div className="clean">
              <p>Hygène</p>
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
              <AiFillStar className="review_icon" />
            </div>
          </div>
          <div className="average">
            <h5>5</h5>
            <p>Moyenne</p>
          </div>
        </div>
        <div className="message_button">
          <form>
            <div className="message">
              <textarea
                name="review_message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="button">
              <button>Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
