import React from "react";
import "./VerticalBox.css";
import imgBox from "../../assets/appart.jpg";
import Buttons from "../buttons/Buttons";

const VerticalBox = () => {
	return (
		<div className="horizontal_box_container">
			<div className="horizontal_box_imag">
				<img className="box_imag" src={imgBox} alt="home's key" />
			</div>
			<div className="horizontal_box_details">
				<div className="horizontal_box_detail_offer_title">
					<h5>Appartement 3 pièces Neuf</h5>
				</div>
				<div className="horizontal_box_detail_review_price">
					<div className="review_star">
						<p>(6 Vues)</p>
					</div>
					<div className="review_price">
						<h5>150 000 CFA</h5>
					</div>
				</div>
				<div className="horizontal_box_detail_sale_rante_meubl">
					<div className="rante">A vendre</div>
				</div>
				<div className="horizontal_box_detail_options">
					<div className="chambre">
						<p>3 Pièces</p>
					</div>
					<div className="toillette">
						<p>2 Toillettes</p>
					</div>
					<div className="superficie">
						<p>90m2</p>
					</div>
				</div>
				<div className="location_button_view">
					<div className="location">
						<p>Riviéra, Palmeraie Rue Ministre</p>
					</div>
					<div className="button">
						<Buttons text={"Voir"} color={"colorF"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerticalBox;
