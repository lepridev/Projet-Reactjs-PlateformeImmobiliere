import React from "react";
import Main from "../home/Main";
import OffresVedettes from "../home/OffresVedettes";
import Recapitulatif from "../home/Recapitulatif";

const Home = () => {
  return (
    <div>
      <Main />
      <Recapitulatif />
      <OffresVedettes />
    </div>
  );
};

export default Home;
