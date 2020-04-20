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
        <Col sm={12} md={6}>
          <h1 className="title">Experiências</h1>
          <div style={{ marginBottom: "50px" }}></div>
        </Col>
      </Row>

      {/* TBA Digital */}
      <Row className="cardExp">
        <Col sm={12} md={1}></Col>

        <Col sm={2} md={2}>
          <img
            src={Exp5Img}
            className="ExpImg"
            alt="Logo da empresa TBA digital"
          />
        </Col>

        <Col sm={12} md={1}></Col>

        <Col sm={4} md={6} className="exp">
          <h4 className="titleExp">Tba digital</h4>
          <h5 className="subtitleExp">2019 - o momento</h5>
          <p className="paragrafoExp">Desenvolvedor full stack</p>
        </Col>
      </Row>

      <hr />

      {/* Ingressolive */}
      <Row className="cardExp">
        <Col sm={12} md={1}></Col>

        <Col sm={2} md={2}>
          <img
            src={Exp4Img}
            className="ExpImg"
            alt="Logo da empresa Ingressolive"
          />
        </Col>

        <Col sm={12} md={1}></Col>

        <Col sm={4} md={6} className="exp">
          <h4 className="titleExp">Ingressolive</h4>
          <h5 className="subtitleExp">2018 - o momento</h5>
          <p className="paragrafoExp">Desenvolvedor front-end</p>
        </Col>
      </Row>

      <hr />

      {/* Trackage */}
      <Row className="cardExp">
        <Col sm={12} md={1}></Col>

        <Col sm={2} md={2}>
          <img
            src={Exp3Img}
            className="ExpImg"
            alt="Logo da empresa Trackage"
          />
        </Col>

        <Col sm={12} md={1}></Col>

        <Col sm={4} md={6} className="exp">
          <h4 className="titleExp">Trackage</h4>
          <h5 className="subtitleExp">2017 - 2018</h5>
          <p className="paragrafoExp">Desenvolvedor front-end</p>
        </Col>
      </Row>

      <hr />

      {/* Trackage */}
      <Row className="cardExp">
        <Col sm={12} md={1}></Col>

        <Col sm={2} md={2}>
          <img
            src={Exp3Img}
            className="ExpImg"
            alt="Logo da empresa Trackage"
          />
        </Col>

        <Col sm={12} md={1}></Col>

        <Col sm={4} md={6} className="exp">
          <h4 className="titleExp">Trackage</h4>
          <h5 className="subtitleExp">2017 - 2018</h5>
          <p className="paragrafoExp">Desenvolvedor mobile - Estagiário</p>
        </Col>
      </Row>

      <hr />

      {/* Moblearn */}
      <Row className="cardExp">
        <Col sm={12} md={1}></Col>

        <Col sm={2} md={2}>
          <img
            src={Exp2Img}
            className="ExpImg"
            alt="Logo da empresa Moblearn"
          />
        </Col>

        <Col sm={12} md={1}></Col>

        <Col sm={4} md={6} className="exp">
          <h4 className="titleExp">Moblearn</h4>
          <h5 className="subtitleExp">2016 - 2018</h5>
          <p className="paragrafoExp">Desenvolvedor mobile</p>
        </Col>
      </Row>

      <hr />

      {/* Ezatta */}
      <Row className="cardExp" style={{ marginBottom: "140px" }}>
        <Col sm={12} md={1}></Col>

        <Col sm={2} md={2}>
          <img src={Exp1Img} className="ExpImg" alt="Logo da empresa Ezatta" />
        </Col>

        <Col sm={12} md={1}></Col>

        <Col sm={4} md={6} className="exp">
          <h4 className="titleExp">Ezatta</h4>
          <h5 className="subtitleExp">2016 - 2017</h5>
          <p className="paragrafoExp">Desenvolvedor wordpress</p>
        </Col>
      </Row>
    </div>
  );
}
