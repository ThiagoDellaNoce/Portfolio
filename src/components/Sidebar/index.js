import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";

import ProfileImg from "./../../images/profile.jpeg";

export default function Sidebar() {

  return (
    <div>
      <div className="sidebar-head">
        <img className="profileImg" src={ProfileImg} alt="Foto de perfil" />
        <h4>Thiago Della Noce</h4>
        <h5>Desenvolvedor</h5>
      </div>

      <div className="sidebar-content">
        <ListGroup className="menu">
          <Link className="back-link" to="/home">
            <ListGroup.Item className="menu-item">Inicial</ListGroup.Item>
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
  );
}
