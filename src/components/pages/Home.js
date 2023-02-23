import React from "react";
import AutreOffres from "../home/AutreOffres";
import AvisUtilisateur from "../home/AvisUtilisateur";
import CallToBeUser from "../home/CallToBeUser";
import CommentCaMarche from "../home/CommentCaMarche";
import Main from "../home/Main";
import OffresVedettes from "../home/OffresVedettes";
import PackPrix from "../home/PackPrix";
import Recapitulatif from "../home/Recapitulatif";
import TelechargementApp from "../home/TelechargementApp";

const Home = () => {
  return (
    <div>
      <Main />
      <Recapitulatif />
      <OffresVedettes />
      <AutreOffres />
      <CommentCaMarche />
      <AvisUtilisateur />
      <PackPrix />
      <TelechargementApp />
      <CallToBeUser />
    </div>
  );
};

export default Home;
