import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import homeImg from "./images/_planet.png";
import ProfileImg from "./images/profile.jpeg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Row className="row">
        <Col className="content" md={10}>
          <img
            className="homeImg"
            src={homeImg}
            alt="imagem da página inicial"
          />
        </Col>

        <Col className="sidebar" md={2}>
          <div className="sidebar-head">
            <img className="profileImg" src={ProfileImg} alt="Foto de perfil" />

            <h4>Thiago Della Noce</h4>
            <h5>Desenvolvedor</h5>
          </div>
          <div className="sidebar-content">
            <ListGroup className="menu">
              <a href=""><ListGroup.Item className="menu-item">Página inicial</ListGroup.Item></a>
              <a href=""><ListGroup.Item className="menu-item">Sobre</ListGroup.Item></a>
              <a href=""><ListGroup.Item className="menu-item">Cursos</ListGroup.Item></a>
              <a href=""><ListGroup.Item className="menu-item">Experiências</ListGroup.Item></a>
              <a href=""><ListGroup.Item className="menu-item">Contato</ListGroup.Item></a>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
