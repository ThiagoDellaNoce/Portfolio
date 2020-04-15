import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./styles.css";

import CursosImg from "./../../images/_certificados.png";

export default function Cursos() {
  return (
    <div>
      <Row className="row">
        <Col className="content" md={1}>
        </Col>
        <Col md={6}>
          <h1>Cursos e certificações</h1>
        </Col>
      </Row>
      
      <Row>
        <Col md={1}></Col>
        <Col md={3}></Col>
        <Col md={8}>
          <div>
            <Row>
              <Col md={6}>
                <h4>Título do Curso</h4>
              </Col>
              <Col md={6} style={{ float: "left" }}>
                <h5>Plataforma</h5>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Cras molestie sed lorem eu volutpat. Donec id risus nec nisl 
                  accumsan hendrerit. Nam vel ipsum quis lorem auctor congue id eu risus.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
          
      <img className="img" style={{ width: "300px" }} src={ CursosImg } alt="imagem ilustrativa para cursos e certificações"/>

    </div>
  )
}