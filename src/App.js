import React from "react";
import "./App.css";
import PriceBox from "./components/Box/PriceBox";
import Header from "./components/layoutComponents/Header";
import Navbar from "./components/layoutComponents/Navbar";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function App() {
	return (
		<div className="App">
			<Navbar />
			<AiFillStar className="icon" />
			<FaStarHalfAlt className="icon" />
			<AiOutlineStar className="icon" />
		</div>
	);
}

export default App;
