import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";

import MenuImg from "./../../images/icons/menu.png";
import ProfileImg from "./../../images/profile.jpeg";

export default function Toolbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="icone de menu"
            src={MenuImg}
            width="30"
            height="30"
            className="d-inline-block align-top"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          />{" "}
          Thiago Della Noce
        </Navbar.Brand>
      </Navbar>

      <Collapse in={open}>
        <div>
          <div className="sidebar-head">
            <img className="profileImg" src={ProfileImg} alt="Foto de perfil" />

            <h4>Thiago Della Noce</h4>
            <h5>Desenvolvedor</h5>
          </div>
          <div className="sidebar-content">
            <ListGroup className="menu">
              <ListGroup.Item className="menu-item">Página inicial</ListGroup.Item>
              <ListGroup.Item className="menu-item">Sobre</ListGroup.Item>
              <ListGroup.Item className="menu-item">Cursos</ListGroup.Item>
              <ListGroup.Item className="menu-item">Experiências</ListGroup.Item>
              <ListGroup.Item className="menu-item">Contato</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
