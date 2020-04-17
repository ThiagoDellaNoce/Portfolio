import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Exp1Img from "./../../images/experience/ezattaLogo.jpg";
import Exp2Img from "./../../images/experience/moblearnLogo.png";
import Exp3Img from "./../../images/experience/trackageLogo.png";
import Exp4Img from "./../../images/experience/ingressoliveLogo.png";
import Exp5Img from "./../../images/experience/tbaLogo.png";

import "./styles.css";

export default function Experiencias() {
  return (
    <div>
      <Row className="row">
        <Col className="content" md={1}></Col>
        <Col md={6}>
          <h1>Experiências</h1>
        </Col>
      </Row>

      {/* TBA Digital */}
      <Row className="row">
        <Col md={1}></Col>

        <Col md={2}>
          <img
            src={Exp5Img}
            className="ExpImg"
            alt="Logo da empresa TBA digital"
          />
        </Col>

        <Col md={9}>
          <h4 className="title">Tba digital</h4>
          <h5 className="subtitle">2019 - o momento</h5>
          <p className="paragrafo">Desenvolvedor full stack</p>
        </Col>
      </Row>
      {/* Ingressolive */}
      <Row className="row">
        <Col md={1}></Col>

        <Col md={2}>
          <img
            src={Exp4Img}
            className="ExpImg"
            alt="Logo da empresa Ingressolive"
          />
        </Col>

        <Col md={9}>
          <h4 className="title">Ingressolive</h4>
          <h5 className="subtitle">2018 - o momento</h5>
          <p className="paragrafo">Desenvolvedor front-end</p>
        </Col>
      </Row>
      {/* Trackage */}
      <Row className="row">
        <Col md={1}></Col>

        <Col md={2}>
          <img
            src={Exp3Img}
            className="ExpImg"
            alt="Logo da empresa Trackage"
          />
        </Col>

        <Col md={9}>
          <h4 className="title">Trackage</h4>
          <h5 className="subtitle">2017 - 2018</h5>
          <p className="paragrafo">Desenvolvedor front-end</p>
        </Col>
      </Row>
      {/* Trackage */}
      <Row className="row">
        <Col md={1}></Col>

        <Col md={2}>
          <img
            src={Exp3Img}
            className="ExpImg"
            alt="Logo da empresa Trackage"
          />
        </Col>

        <Col md={9}>
          <h4 className="title">Trackage</h4>
          <h5 className="subtitle">2017 - 2018</h5>
          <p className="paragrafo">Desenvolvedor mobile - Estagiário</p>
        </Col>
      </Row>
      {/* Moblearn */}
      <Row className="row">
        <Col md={1}></Col>

        <Col md={2}>
          <img
            src={Exp2Img}
            className="ExpImg"
            alt="Logo da empresa Moblearn"
          />
        </Col>

        <Col md={9}>
          <h4 className="title">Moblearn</h4>
          <h5 className="subtitle">2016 - 2018</h5>
          <p className="paragrafo">Desenvolvedor mobile</p>
        </Col>
      </Row>
      {/* Ezatta */}
      <Row className="row">
        <Col md={1}></Col>

        <Col md={2}>
          <img src={Exp1Img} className="ExpImg" alt="Logo da empresa Ezatta" />
        </Col>

        <Col md={9}>
          <h4 className="title">Ezatta</h4>
          <h5 className="subtitle">2016 - 2017</h5>
          <p className="paragrafo">Desenvolvedor wordpress</p>
        </Col>
      </Row>
    </div>
  );
}
