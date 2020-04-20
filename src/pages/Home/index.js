import React from "react";

import homeImg from "./../../images/_planet.gif";
import nameTagImg from "./../../images/nameTag.gif";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <img className="homeImg" src={homeImg} alt="imagem da página inicial" />
      <img className="nameTag" src={nameTagImg} alt="nameTag - Thiago Della Noce coder" />
    </div>
  );
}
