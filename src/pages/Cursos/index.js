import React, { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./styles.css";

import CursosImg from "./../../images/_certificados.gif";

export default function Cursos() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Lista de cursos
    const cursos = [
      {
        id: 1,
        title: "Universidade de Uberaba",
        platform:
          "Graduação em Sistemas de Informação, Tecnologia da Informação",
        description: "",
      },

      {
        id: 2,
        title: "Web Design com Adobe XD, Bootstrap, GIMP, HTML e PHOTOSHOP",
        platform: "Udemy",
        description: "",
      },
      {
        id: 3,
        title: "React vs. Angular vs. Vue",
        platform: "Udemy",
        description: "",
      },
      {
        id: 4,
        title: "Curso React.js Ninja: Módulo React + Webpack",
        platform: "Udemy",
        description: "",
      },
      {
        id: 5,
        title: "Programador Angular 1",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 6,
        title: "Angular CLI - Masering the Basics",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 7,
        title: "Ionic 1 parte 1: Desenvolvimento de aplicações híbridas mobile",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 8,
        title: "Entendendo o ECMAScript 6",
        platform: "Udemy",
        description: "",
      },
      {
        id: 9,
        title: "Entendendo o ECMAScript 6",
        platform: "Udemy",
        description: "",
      },
      {
        id: 10,
        title: "Javascript Essentials",
        platform: "Udemy",
        description: "",
      },
      {
        id: 11,
        title: "Desenvolvedor JAVASCRIPT",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 12,
        title: "Programação para internet com JavaScript",
        platform: "Digital Innovation One Inc.",
        description: "",
      },
      {
        id: 13,
        title: "Desenvolvedor Front-end",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 14,
        title: "javascript - programando na linguagem da web",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 15,
        title: "Desenvolvedor Wordpress",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 16,
        title: "Wordpress para Iniciantes",
        platform: "Udemy",
        description: "",
      },
      {
        id: 17,
        title: "Bootstrap: criação de uma single-page responsiva",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 18,
        title: "Certificate of Completion: SQL Fundamentals",
        platform: "SoloLearn",
        description: "",
      },
      {
        id: 19,
        title: "Certificate of Completion: PHP Course",
        platform: "SoloLearn",
        description: "",
      },
      {
        id: 20,
        title: "Certificate of Completion: Javascript Fundamentals",
        platform: "SoloLearn",
        description: "",
      },
      {
        id: 21,
        title: "Certificate of Completion: CSS Fundamentals",
        platform: "SoloLearn",
        description: "",
      },
      {
        id: 22,
        title: "Certificate of Completion: HTML Fundamentals",
        platform: "SoloLearn",
        description: "",
      },
      {
        id: 23,
        title: "HTML5 e CSS3 II: Turbinando as suas páginas",
        platform: "SoloLearn",
        description: "",
      },
      {
        id: 24,
        title: "HTML5 e CSS3 I: Suas primeiras páginas da web",
        platform: "SoloLearn",
        description: "",
      },
      {
        id: 25,
        title: "HTTP: Entendendo a web por baixo dos panos",
        platform: "SoloLearn",
        description: "",
      },

      {
        id: 26,
        title: "Android III: Aprimore sua APP com fragments, google maps e GPS",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 27,
        title: "Android II: Integração com APPS e recursos do device",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 28,
        title: "Android I: Crie sua APP fantástica com android studio",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 29,
        title: "Desenvolvedor Android",
        platform: "Alura cursos Online",
        description: "",
      },

      {
        id: 30,
        title: "Java III: Principais APIs e bibliotecas",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 31,
        title: "Java II: Orientação a Objetos",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 32,
        title: "Java I: Primeiros passos",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 33,
        title: "Java: Dominando as Collections",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 34,
        title: "Certificate of Completion: Java Course",
        platform: "SoloLearn",
        description: "",
      },
      {
        id: 35,
        title: "Desenvolvedor java",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 36,
        title: "C++ - Orientação a Objetos",
        platform: "Udemy",
        description: "",
      },
      {
        id: 37,
        title: "Eclipse: Produtividade extrema na IDE com Java",
        platform: "Alura cursos Online",
        description: "",
      },

      {
        id: 38,
        title: "Introdução ao Git e Controle de Versões",
        platform: "Digital Innovation One Inc.",
        description: "",
      },
      {
        id: 39,
        title:
          "Lógica de programação II: pratique com desenhos, animações e um jogo",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 40,
        title:
          "Maratona de programação: Introdução e boas práticas de um programador maratonista",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 41,
        title:
          "Algoritmos II: Mergesort, quicksort, busca binária e análise de algoritmo",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 42,
        title: "Algoritmos I: Selection, Insertion e introdução a análise",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 43,
        title: "Iniciante em programação",
        platform: "Alura cursos Online",
        description: "",
      },
      {
        id: 44,
        title: "Arquitetura de Sistemas Avançado",
        platform: "Digital Innovation One Inc.",
        description: "",
      },
      {
        id: 45,
        title: "Fundamentos de Arquitetura de Sistemas",
        platform: "Digital Innovation One Inc.",
        description: "",
      },

      {
        id: 46,
        title: "Desenvolvimento de games",
        platform: "Microway, Inc.",
        description: "",
      },

      {
        id: 47,
        title: "Robótica Open Source",
        platform: "Faculdades Associadas de Uberaba - FAZU",
        description: "",
      },
      {
        id: 48,
        title: "Linux II: Programas, processos e pacotes",
        platform: "Alura Cursos Online",
        description: "",
      },
      {
        id: 49,
        title: "Linux I: Conhecendo e utilizando o terminal",
        platform: "Alura Cursos Online",
        description: "",
      },
      {
        id: 50,
        title: "Windows: Introdução ao prompt",
        platform: "Alura Cursos Online",
        description: "",
      },
      {
        id: 51,
        title: "Informática Básica",
        platform: "Sindicato do comércio",
        description: "",
      },
      {
        id: 52,
        title: "Inglês: Candidate-se a vagas no exterior",
        platform: "Alura Cursos Online",
        description: "",
      },
      {
        id: 53,
        title: "Inglês: nível intermediário II",
        platform: "WiseUp Uberaba",
        description: "",
      },
      {
        id: 54,
        title: "Projetos ágeis com SCRUM",
        platform: "Digital Innovation One Inc.",
        description: "",
      },
    ];

    setCourses(cursos);
  }, []);

  return (
    <div>
      <Row className="row">
        <Col className="content" md={1}></Col>
        <Col md={6}>
          <h1 className="title">Cursos e certificações</h1>
        </Col>
      </Row>

      <div style={{ minHeight: "70px" }}></div>

      <Row>
        <Col md={1}>
          <img
            className="img"
            style={{ width: "300px" }}
            src={CursosImg}
            alt="imagem ilustrativa para cursos e certificações"
          />
        </Col>
        <Col md={3}></Col>
        <Col md={8}>
          {courses.map((course) => (
            <div key={course.id} className="item">
              <Row>
                <Col md={12}>
                  <p style={{ fontSize: "20px" }}>{course.title}</p>
                </Col>
                <Col md={4}></Col>
                <Col md={8}>
                  <p style={{ fontSize: "14px", textAlign: "right" }}>
                    {course.platform}
                  </p>
                </Col>
              </Row>

              <hr />
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}
