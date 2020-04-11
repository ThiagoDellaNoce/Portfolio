import React, { useState } from "react";

import { Link } from "react-router-dom";

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
        <Navbar.Brand>
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
              <Link className="back-link" to="/home">
                <ListGroup.Item className="menu-item">
                  Página inicial
                </ListGroup.Item>
              </Link>
              <Link className="back-link" to="/sobre">
                <ListGroup.Item className="menu-item">Sobre</ListGroup.Item>
              </Link>
              <Link className="back-link" to="/cursos">
                <ListGroup.Item className="menu-item">Cursos</ListGroup.Item>
              </Link>
              <Link className="back-link" to="/experiencias">
                <ListGroup.Item className="menu-item">Experiências</ListGroup.Item>
              </Link>
              <Link className="back-link" to="/contato">
                <ListGroup.Item className="menu-item">Contato</ListGroup.Item>
              </Link>
            </ListGroup>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
