import React from "react";
import AutreOffres from "../home/AutreOffres";
import CommentCaMarche from "../home/CommentCaMarche";
import Main from "../home/Main";
import OffresVedettes from "../home/OffresVedettes";
import Recapitulatif from "../home/Recapitulatif";

const Home = () => {
  return (
    <div>
      <Main />
      <Recapitulatif />
      <OffresVedettes />
      <AutreOffres />
      <CommentCaMarche />
    </div>
  );
};

export default Home;
