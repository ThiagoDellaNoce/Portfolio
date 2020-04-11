import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cursos from "./pages/Cursos";
import Experiencias from "./pages/Experiencias";
import Contato from "./pages/Contato";

import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Row className="row">
            <Col className="toolbar" md={12}>
              <Toolbar/>
            </Col>

            <Col className="content" md={10}>

              <Route path="/home" component={ Home } />
              <Route path="/sobre" component={ Sobre } />
              <Route path="/cursos" component={ Cursos } />
              <Route path="/experiencias" component={ Experiencias } />
              <Route path="/contato" component={ Contato } />
              <Route path="/" exact component={ Home } />
            </Col>

            <Col className="sidebar" md={2}>
              <Sidebar />
            </Col>
          </Row>

        </Switch>
      </BrowserRouter>
    </div>
  );
}
