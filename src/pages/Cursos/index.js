import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./styles.css";

import CursosImg from "./../../images/_certificados.png";

export default function Cursos() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("courses", {}).then((Response) => {
      setCourses(Response.data);
    });
  }, []);

  return (
    <div>
      <Row className="row">
        <Col className="content" md={1}></Col>
        <Col md={6}>
          <h1>Cursos e certificações</h1>
        </Col>
      </Row>

      <Row>
        <Col md={1}></Col>
        <Col md={3}></Col>
        <Col md={8}>
          {courses.map((course) => (
            <div key={course.id}>
              <Row>
                <Col md={6}>
                  <h4>{course.title}</h4>
                </Col>
                <Col md={6} style={{ float: "left" }}>
                  <h5>{course.platform}</h5>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p>{course.description}</p>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
      </Row>

      <img
        className="img"
        style={{ width: "300px" }}
        src={CursosImg}
        alt="imagem ilustrativa para cursos e certificações"
      />
    </div>
  );
}
