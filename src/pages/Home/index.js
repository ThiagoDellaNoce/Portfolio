import React from "react";

import homeImg from "./../../images/_planet.png";

export default function Home() {
  return (
    <div>
      <img className="homeImg" src={homeImg} alt="imagem da página inicial" />
    </div>
  );
}
