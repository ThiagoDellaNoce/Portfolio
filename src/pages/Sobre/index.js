import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ComputerImg from "./../../images/_computer.png";

import "./styles.css";

export default function Sobre() {
  return (
    <div>
      
      <Row className="row">
        <Col className="content" md={1}>
        </Col>
        <Col md={6}>
          <h1>Sobre</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque sodales justo ultrices lacus mollis hendrerit. 
            Quisque vitae suscipit quam, ut pellentesque quam. Ut 
            vitae ipsum sed tellus porta cursus sit amet et urna. 
            Nullam vel ex nec eros commodo ornare. Ut viverra neque 
            vitae elementum vulputate. Donec eros neque, fermentum 
            sit amet egestas vel, bibendum eget ex. Nam venenatis 
            lacinia sem, nec ornare libero molestie non.
          </p>
          
        </Col>
      </Row>
      
      <img className="imgComputer" src={ ComputerImg } alt="Imagem de icone - rapaz no computador" />
    </div>
  );
}
