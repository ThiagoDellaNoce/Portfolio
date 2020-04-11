import React from "react";

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
          <ListGroup.Item className="menu-item">Inicial</ListGroup.Item>
          <ListGroup.Item className="menu-item">Sobre</ListGroup.Item>
          <ListGroup.Item className="menu-item">Cursos</ListGroup.Item>
          <ListGroup.Item className="menu-item">Experiências</ListGroup.Item>
          <ListGroup.Item className="menu-item">Contato</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
