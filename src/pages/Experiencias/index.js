import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ExpImg from "./../../images/experience/ezattaLogo.jpg";

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

      <Row className="row">
        <Col md={1}></Col>

        <Col md={2}>
          <img src={ExpImg} className="ExpImg" alt="Logo da empresa Ezatta" />
        </Col>

        <Col md={9}>
          <h4 className="title">Local</h4>
          <h5 className="subtitle">20** - 20**</h5>
          <p className="paragrafo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            sodales justo ultrices lacus mollis hendrerit. Quisque vitae
            suscipit quam, ut pellentesque quam.
          </p>
        </Col>
      </Row>
    </div>
  );
}
