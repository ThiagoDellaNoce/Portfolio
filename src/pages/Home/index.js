import React from "react";

import homeImg from "./../../images/_planet.png";
import nameTagImg from "./../../images/nameTag.png";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <img className="homeImg" src={homeImg} alt="imagem da página inicial" />
      <img className="nameTag" src={nameTagImg} alt="nameTag - Thiago Della Noce coder" />
    </div>
  );
}
