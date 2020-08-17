import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
  const [user, ,] = useContext(UserContext);
  //   const handleLogout = () => {
  //     setUser(null);
  //     localStorage.removeItem("user");
  //   };

  return (
    <>
      {user && (
        <Col md={2}>
          <Nav defaultActiveKey="/" className="flex-column">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
            {/* <Nav style={{ padding: "1em" }}>
              <Link to="/movies">Movies</Link>
            </Nav>
            <Nav style={{ padding: "1em" }}>
              <Link to="/games">Games</Link>
            </Nav> */}
          </Nav>

          {/* <ListGroup>
            <ListGroupItem>
              <Link to="/movies">Movies </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/games">Games </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/moviesss">Movie -- </Link>
            </ListGroupItem>
          </ListGroup> */}
        </Col>
      )}
    </>
  );
};

export default Sidebar;
