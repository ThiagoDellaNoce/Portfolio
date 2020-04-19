import React, { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./styles.css";

import CursosImg from "./../../images/_certificados.png";

export default function Cursos() {
  const [courses, setCourses] = useState([]);

  // Lista de cursos
  let cursos = [
    {
      title: "Universidade de Uberaba",
      platform: "Graduação em Sistemas de Informação, Tecnologia da Informação",
      description: "",
    },

    {
      title: "Web Design com Adobe XD, Bootstrap, GIMP, HTML e PHOTOSHOP",
      platform: "Udemy",
      description: "",
    },
    {
      title: "React vs. Angular vs. Vue",
      platform: "Udemy",
      description: "",
    },
    {
      title: "Curso React.js Ninja: Módulo React + Webpack",
      platform: "Udemy",
      description: "",
    },
    {
      title: "Programador Angular 1",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Angular CLI - Masering the Basics",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Ionic 1 parte 1: Desenvolvimento de aplicações híbridas mobile",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Entendendo o ECMAScript 6",
      platform: "Udemy",
      description: "",
    },
    {
      title: "Entendendo o ECMAScript 6",
      platform: "Udemy",
      description: "",
    },
    {
      title: "Javascript Essentials",
      platform: "Udemy",
      description: "",
    },
    {
      title: "Desenvolvedor JAVASCRIPT",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Programação para internet com JavaScript",
      platform: "Digital Innovation One Inc.",
      description: "",
    },
    {
      title: "Desenvolvedor Front-end",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Javascript: programando na linguagem da web",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Desenvolvedor Wordpress",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Wordpress para Iniciantes",
      platform: "Udemy",
      description: "",
    },
    {
      title: "Bootstrap: criação de uma single-page responsiva",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Certificate of Completion: SQL Fundamentals",
      platform: "SoloLearn",
      description: "",
    },
    {
      title: "Certificate of Completion: PHP Course",
      platform: "SoloLearn",
      description: "",
    },
    {
      title: "Certificate of Completion: Javascript Fundamentals",
      platform: "SoloLearn",
      description: "",
    },
    {
      title: "Certificate of Completion: CSS Fundamentals",
      platform: "SoloLearn",
      description: "",
    },
    {
      title: "Certificate of Completion: HTML Fundamentals",
      platform: "SoloLearn",
      description: "",
    },
    {
      title: "HTML5 e CSS3 II: Turbinando as suas páginas",
      platform: "SoloLearn",
      description: "",
    },
    {
      title: "HTML5 e CSS3 I: Suas primeiras páginas da web",
      platform: "SoloLearn",
      description: "",
    },
    {
      title: "HTTP: Entendendo a web por baixo dos panos",
      platform: "SoloLearn",
      description: "",
    },

    {
      title: "Android III: Aprimore sua APP com fragments, google maps e GPS",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Android II: Integração com APPS e recursos do device",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Android I: Crie sua APP fantástica com android studio",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Desenvolvedor Android",
      platform: "Alura cursos Online",
      description: "",
    },

    {
      title: "Java III: Principais APIs e bibliotecas",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Java II: Orientação a Objetos",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Java I: Primeiros passos",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Java: Dominando as Collections",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Certificate of Completion: Java Course",
      platform: "SoloLearn",
      description: "",
    },
    {
      title: "Desenvolvedor java",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "C++ - Orientação a Objetos",
      platform: "Udemy",
      description: "",
    },
    {
      title: "Eclipse: Produtividade extrema na IDE com Java",
      platform: "Alura cursos Online",
      description: "",
    },

    {
      title: "Introdução ao Git e Controle de Versões",
      platform: "Digital Innovation One Inc.",
      description: "",
    },
    {
      title:
        "Lógica de programação II: pratique com desenhos, animações e um jogo",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title:
        "Maratona de programação: Introdução e boas práticas de um programador maratonista",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title:
        "Algoritmos II: Mergesort, quicksort, busca binária e análise de algoritmo",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Algoritmos I: Selection, Insertion e introdução a análise",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Iniciante em programação",
      platform: "Alura cursos Online",
      description: "",
    },
    {
      title: "Arquitetura de Sistemas Avançado",
      platform: "Digital Innovation One Inc.",
      description: "",
    },
    {
      title: "Fundamentos de Arquitetura de Sistemas",
      platform: "Digital Innovation One Inc.",
      description: "",
    },

    {
      title: "Desenvolvimento de games",
      platform: "Microway, Inc.",
      description: "",
    },

    {
      title: "Robótica Open Source",
      platform: "Faculdades Associadas de Uberaba - FAZU",
      description: "",
    },
    {
      title: "Linux II: Programas, processos e pacotes",
      platform: "Alura Cursos Online",
      description: "",
    },
    {
      title: "Linux I: Conhecendo e utilizando o terminal",
      platform: "Alura Cursos Online",
      description: "",
    },
    {
      title: "Windows: Introdução ao prompt",
      platform: "Alura Cursos Online",
      description: "",
    },
    {
      title: "Informática Básica",
      platform: "Sindicato do comércio",
      description: "",
    },
    {
      title: "Inglês: Candidate-se a vagas no exterior",
      platform: "Alura Cursos Online",
      description: "",
    },
    {
      title: "Inglês: nível intermediário II",
      platform: "WiseUp Uberaba",
      description: "",
    },
    {
      title: "Projetos ágeis com SCRUM",
      platform: "Digital Innovation One Inc.",
      description: "",
    },
  ];

  useEffect(() => {
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
              {/* <Row>
                <Col md={12}>
                  <p>{course.description}</p>
                </Col>
              </Row> */}

              <hr />
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}
