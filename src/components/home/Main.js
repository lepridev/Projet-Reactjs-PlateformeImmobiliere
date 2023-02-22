import React from "react";
import "./Main.css";
import { CiLocationOn } from "react-icons/ci";

const Main = () => {
  return (
    <div className="main_container">
      <div className="title-form">
        <h3>
          Nouvelle plateforme immobilière <span>Côte d'Ivoire</span>
        </h3>
        <h1>Trouver la maison de vos rêves...</h1>
        <form className="main_form">
          <div className="form_radio">
            <div>
              <input
                type="radio"
                id="louer"
                name="drone"
                value="louer"
                checked
              />
              <label for="huey">Louer</label>
            </div>

            <div>
              <input type="radio" id="vendre" name="drone" value="vendre" />
              <label for="dewey">Vendre</label>
            </div>
          </div>

          <div className="form_input">
            <CiLocationOn className="input_icon" />
            <input
              type="text"
              id="name"
              name="name"
              required
              size="16"
              placeholder="Ville Commune Quartier"
            />
          </div>
          <div className="form_submit">
            <input type="submit" value={"Rechercher"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
