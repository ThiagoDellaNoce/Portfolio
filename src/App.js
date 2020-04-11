import React from "react";

import "./App.css";

import Routes from "./routes";
import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Toolbar/>

      <Row className="row">
        <Col className="content" md={10}>
          <Routes />
        </Col>

        <Col className="sidebar" md={2}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default App;
