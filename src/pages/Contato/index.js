import React, { useState, useEffect } from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import ComunicacaoImg from "./../../images/_comunicacao.png";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./styles.css";

export default function Contato() {
  // api
  const api = axios.create({
    baseURL: "https://thiagodellanoce.com.br/backend",
  });

  // variáveis
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // inicialização das variáveis
  const [mailSended, setMailSended] = useState("");

  useEffect(() => {
    setMailSended(false);
  }, []);

  async function sendEmail(event) {
    event.preventDefault();

    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      await api
        .get(
          `sendMail.php?name=${name}&email=${email}&subject=${subject}&message=${message}`
        )
        .then(
          (res) => {
            setMailSended(true);
          },
          (err) => {}
        );
      setMailSended(true);
    } catch (err) {}
  }

  return (
    <div>
      <Row className="row">
        <Col className="content" md={1}></Col>
        <Col md={4}>
          <h1 className="title">Contato</h1>

          <form onSubmit={sendEmail}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text"
              label="Nome"
              variant="outlined"
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text"
              label="E-mail"
              variant="outlined"
            />
            <TextField
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="text"
              label="Assunto"
              variant="outlined"
            />
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text"
              label="Mensagem"
              variant="outlined"
            />

            {mailSended ? (
              <Alert variant="success" style={{ margin: "0px 0px 15px" }}>
                E-mail enviado com sucesso.
                <br />
                Logo, logo entro em contato com você! ;)
              </Alert>
            ) : null}

            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#1ed45f", color: "#FFFFFF" }}
            >
              Enviar
            </Button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col md={7}></Col>
        <Col md={5}>
          <img
            src={ComunicacaoImg}
            className="ComunicacaoImg"
            alt="icone de comunicação"
          />
        </Col>
      </Row>
    </div>
  );
}
