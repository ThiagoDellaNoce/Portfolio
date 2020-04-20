import React from "react";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ComputerImg from "./../../images/_computer.png";
import PongGameImg from "./../../images/games/ponggame.jpg";
import PongGame2Img from "./../../images/games/ponggame2.jpg";
import TronImg from "./../../images/games/tron.jpg";
import FlapChickenImg from "./../../images/games/flapchicken.png";

import FormaturaImg from "./../../images/formatura.jpg";

import About1Img from "./../../images/about1.jpg";
import About2Img from "./../../images/about2.jpg";

import PalestraImg from "./../../images/games/Palestra_games_1.jpg";
import Palestra2Img from "./../../images/games/Palestra_games_2.png";

import "./styles.css";

export default function Sobre() {
  return (
    <div>
      <Row className="row">
        <Col className="content" sm={12} md={1}></Col>
        <Col sm={12} md={6}>
          <h1 className="title">Sobre</h1>

          <div style={{ minHeight: "50px" }}></div>

          <p>
            Desde que comecei minha jornada como desenvolvedor há quase 4 anos,
            trabalhei para empresas, startups, projetos como freelancer e
            colaborei com diversos tipos de projetos.
            <br />
            <br />
            <label style={{ textAlign: "center" }}>
              Com ajuda da minha curiosidade confio que serei rápido para
              aprender a maneira mais eficaz de como te ajudar.
            </label>
          </p>

          <div style={{ minHeight: "70px" }}></div>

          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Let me{" "}
            <b>
              <span style={{ color: "#4285f4" }}>G</span>
              <span style={{ color: "#ea4335" }}>o</span>
              <span style={{ color: "#fbbc05" }}>o</span>
              <span style={{ color: "#4285f4" }}>g</span>
              <span style={{ color: "#34a853" }}>l</span>
              <span style={{ color: "#ea4335" }}>e</span>
            </b>{" "}
            it for you!
          </p>

          <div style={{ minHeight: "70px" }}></div>

          <p>
            Bacharel em Sistemas de informação, pela Universidade de Uberaba, e
            atualmente desenvolvedor front-end. Comecei a desenvolver cedo,
            quando quis entender como eram feitos os jogos que eu via pela
            internet.
          </p>

          <Row style={{ margin: "0px" }}>
            <Col md={6} style={{ padding: "5px 5px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={PongGameImg}
                alt="Imagem do primeiro jogo que desenvolvi, um ping pong onde o jogador jogava contra a máquina, controlada por inteligencia artificial."
              />
            </Col>

            <Col md={6} style={{ padding: "5px 5px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={PongGame2Img}
                alt="Imagem do primeiro jogo que desenvolvi, um ping pong onde o jogador jogava contra a máquina, controlada por inteligencia artificial."
              />
            </Col>
            <label style={{ fontSize: "12px" }}>
              Imagem do primeiro jogo que desenvolvi, um ping pong onde o
              jogador jogava contra a máquina, controlada por inteligencia
              artificial.
            </label>
          </Row>

          <div style={{ minHeight: "70px" }}></div>

          <p>
            Com auxiliação de{" "}
            <Link style={{ color: "#1ed45f" }} to={`/portfolio/cursos`}>
              muitos cursos, tanto presenciais quanto online.
            </Link>{" "}
            Dei meus primeiros passos com o Flash fazendo jogos para navegador e
            fui avançando até o C# com o unity fazendo até jogos mobile.
          </p>

          <Row style={{ margin: "0px" }}>
            <Col md={6} style={{ float: "left", padding: "5px 5px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={TronImg}
                alt="Imagem do primeiro jogo que desenvolvi, um ping pong onde o jogador jogava contra a máquina, controlada por inteligencia artificial."
              />
            </Col>

            <Col md={6} style={{ padding: "5px 5px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={FlapChickenImg}
                alt="Imagem do primeiro jogo que desenvolvi, um ping pong onde o jogador jogava contra a máquina, controlada por inteligencia artificial."
              />
            </Col>
            <label style={{ fontSize: "12px" }}>
              Imagem do primeiro jogo que desenvolvi, um ping pong onde o
              jogador jogava contra a máquina, controlada por inteligencia
              artificial.
            </label>
          </Row>

          <div style={{ minHeight: "140px" }}></div>

          <p>
            Logo depois entrei na faculdade, e descobri o fabuloso mundo da
            programação. E começei a trabalhar em alguns projetos, você consegue{" "}
            <Link style={{ color: "#1ed45f" }} to={`/portfolio/experiencias`}>
              encontrá-los aqui!
            </Link>
          </p>

          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <img
                style={{ maxWidth: "100%" }}
                src={FormaturaImg}
                alt="Foto da colação de grau."
              />
              <label style={{ fontSize: "12px" }}>
                Foto da minha colação de grau.
              </label>
            </Col>
            <Col md={3}></Col>
          </Row>

          <div style={{ minHeight: "130px" }}></div>

          <p>
            Além disso, venho ajudado a comunidade a crescer, participando e
            desenvolvendo eventos. Fui organizador do GDG Uberaba (Google
            Developer Group), organizando e fazendo palestras, sobre games,
            desenvolvimento android, desenvolvimento Angular e Material Design.
          </p>

          <Row style={{ margin: "0px" }}>
            <Col md={6} style={{ float: "left", padding: "5px 5px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={PalestraImg}
                alt="Foto de palestras dadas por Thiago Della Noce."
              />
            </Col>
            <Col md={6} style={{ padding: "5px 5px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={Palestra2Img}
                alt="Foto de palestras dadas por Thiago Della Noce."
              />
            </Col>
            <label style={{ fontSize: "12px" }}>
              Foto de algumas palestras.
            </label>
          </Row>

          <div style={{ minHeight: "50px" }}></div>

          <p>
            E ajudei também alguns eventos, como Startup Wekeend e TedXUFTM.
          </p>

          <Row style={{ margin: "0px" }}>
            <Col md={6} style={{ float: "left", padding: "5px 5px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={About1Img}
                alt="Foto de palestras dadas por Thiago Della Noce."
              />
            </Col>
            <Col md={6} style={{ padding: "5px 5px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={About2Img}
                alt="Foto de palestras dadas por Thiago Della Noce."
              />
            </Col>
          </Row>

          <div style={{ minHeight: "50px" }}></div>
          {/* fim */}
        </Col>
        <Col sm={12} md={5}>
          <img
            className="imgComputer"
            src={ComputerImg}
            style={{ bottom: "0px" }}
            alt="Imagem de icone - rapaz no computador"
          />
        </Col>
      </Row>
    </div>
  );
}
