import React from "react";
import "./Buttons.css";

const sizeStyle = ["sizeB", "sizeF", "sizeS"];
const colorStyle = ["colorB", "colorS", "colorF", "colorT"];

const Buttons = ({ color, size, text }) => {
	const checkSize = sizeStyle.includes(size) ? size : sizeStyle[0];

	const checkColor = colorStyle.includes(color) ? color : colorStyle[0];

	return (
		<div>
			<button className={`${checkSize} ${checkColor}`}>{text}</button>
		</div>
	);
};

export default Buttons;
