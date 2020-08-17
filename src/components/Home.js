import React from "react";
import { MovieProvider } from "../context/MovieContext";
import { GameProvider } from "../context/GameContext";

import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ListsMovie from "./ListsMovie";
import ListsGame from "./ListsGame";

function Home() {
  return (
    <>
      <Jumbotron>
        <h1 className="header">Selamat Datang di Website Kami</h1>
      </Jumbotron>
      <Row style={{ marginTop: "5rem" }}>
        <Col>
          <h1 className="text-bold text-primary mb-4">Featured Film</h1>
          <MovieProvider>
            <ListsMovie />
          </MovieProvider>
        </Col>
      </Row>
      <Row style={{ marginTop: "5rem" }}>
        <Col>
          <h1 className="text-bold text-primary mb-4">Featured Game</h1>
          <GameProvider>
            <ListsGame />
          </GameProvider>
        </Col>
      </Row>
    </>
  );
}

export default Home;
