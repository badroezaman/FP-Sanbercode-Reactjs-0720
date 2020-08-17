import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Section from "./Section";
import Footer from "./Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Main = () => {
  return (
    <>
      <Router>
        <Header />
        <Container
          fluid
          style={{ paddingTop: "7.5rem", paddingBottom: "7.5rem" }}
        >
          <Row className="justify-content-md-center">
            <Sidebar />
            <Section />
          </Row>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
// style={{ padding: "7.5rem 0" }}  className="justify-content-md-center"
