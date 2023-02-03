import React from "react";
import Buttons from "../buttons/Buttons";
import "./PriceBox.css";

const PriceBox = () => {
	return (
		<div className="box_price_container">
			<div className="box_price_prices">
				<h3>4900FCFA</h3>
				<h5>30 JOURS DE POST</h5>
			</div>
			<div className="box_price_details">
				<h6>Acheter du credits pour poster vos offres</h6>
				<div>1 semaine de poste</div>
				<div>Expiration dans la semaine en cours</div>
				<div>Assistance spécilisé</div>
				<div>Obtenez plus de visites</div>
			</div>
			<div className="box_price_button">
				<Buttons color={"colorB"} size={"sizeS"} text={"CHOISIR CE PLAN"} />
			</div>
		</div>
	);
};

export default PriceBox;
