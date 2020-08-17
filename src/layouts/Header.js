import React, { useContext } from "react";
import "../assets/css/theme.css";
import logo from "../assets/img/logo.png";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Container from "react-bootstrap/esm/Container";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light" fixed="top">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="auto"
            height="30"
            className="d-inline-block align-top"
            alt="Sanbercode Reactjs"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lists-movie">Lists Movie</Nav.Link>
            <Nav.Link href="/lists-game">Lists Game</Nav.Link>
          </Nav>
          <Nav style={{ padding: "1em" }}>
            {user === null && <Nav.Link href="/login">Login</Nav.Link>}
            {user === null && <Nav.Link href="/register">Register</Nav.Link>}
            {user && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
