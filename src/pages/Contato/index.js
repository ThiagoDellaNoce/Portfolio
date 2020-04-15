import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ComunicacaoImg from "./../../images/_comunicacao.png";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./styles.css";

export default function Contato() {
  return (
    <div>
      <Row className="row">
        <Col className="content" md={1}></Col>
        <Col md={4}>
          <h1>Contato</h1>

          <form>
            <TextField className="text" label="Nome" variant="outlined" />
            <TextField className="text" label="E-mail" variant="outlined" />
            <TextField className="text" label="Assunto" variant="outlined" />
            <TextField className="text" label="Mensagem" variant="outlined" />
            <Button variant="contained" style={{ backgroundColor: "#1ed45f", color: "#FFFFFF" }}>Enviar</Button>
          </form>
        </Col>
      </Row>

      <img src={ComunicacaoImg} className="ComunicacaoImg" alt="icone de comunicação" />

    </div>
  )
}