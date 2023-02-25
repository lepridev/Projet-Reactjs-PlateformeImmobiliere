import React from "react";
import "./BarreRecherche.css";
import { MdLocationOn } from "react-icons/md";

const BarreRecherche = () => {
  return (
    <div className="barreRecherche_container">
      <form className="barreRecherche_form">
        <div className="standart_option">
          <div className="input_with_icon">
            <input type="text" placeholder="Trouver une offre" />
            <MdLocationOn className="location_icon" />
          </div>
          <div className="ville">
            <select name="ville" id="ville">
              <option selected>Ville...</option>
              <option value="abidjan">Abidjan</option>
              <option value="bassam">Bassam</option>
              <option value="bonoua">Bonoua</option>
              <option value="bingerville">Bingerville</option>
              <option value="dabou">Dabou</option>
            </select>
          </div>
          <div className="categories">
            <select name="categorie" id="categorie">
              <option selected>Categorie...</option>
              <option value="villa">Villa</option>
              <option value="appartement">Appartement</option>
              <option value="studio">Studio</option>
              <option value="residence">Residence meublée</option>
              <option value="bureau">Bureau</option>
            </select>
          </div>
          <div className="type">
            <select name="type" id="type">
              <option selected>Pour...</option>
              <option value="louer">Louer</option>
              <option value="vendre">Vendre</option>
              <option value="meublé">Résidence</option>
            </select>
          </div>
          <div className="prix">
            <select name="prix" id="prix">
              <option selected>Fouchette...</option>
              <option value="tranche1">0 - 50 000</option>
              <option value="tranche2">60 000 - 150 000</option>
              <option value="tranche3">200 000+</option>
            </select>
          </div>
          <div className="toilettes">
            <select name="toilette" id="toilette">
              <option selected>Toilette...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="advance_option">
          <div className="parking">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
            />
            <label class="custom-control-label" for="customCheck1">
              Avec Jardin
            </label>
          </div>
          <div className="balcon">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
            />
            <label class="custom-control-label" for="customCheck1">
              Avec Balcon
            </label>
          </div>
          <div className="ecole">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
            />
            <label class="custom-control-label" for="customCheck1">
              A proximité d'écoles
            </label>
          </div>
          <div className="wifi">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
            />
            <label class="custom-control-label" for="customCheck1">
              Accès internet
            </label>
          </div>
        </div>
        <div className="submit_btn">
          <input type="submit" value={"Rechercher"} />
        </div>
      </form>
    </div>
  );
};

export default BarreRecherche;
