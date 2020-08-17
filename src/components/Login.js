import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Login = () => {
  const [, setUser] = useContext(UserContext);
  const [input, setInput] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.username === "badru" && input.password === "badru") {
      setUser({ username: input.username });
      localStorage.setItem(
        "user",
        JSON.stringify({ username: "badru", password: "badru" })
      );
    } else {
      alert("username dan password gagal");
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    switch (name) {
      case "username": {
        setInput({ ...input, username: value });
        break;
      }
      case "password": {
        setInput({ ...input, password: value });
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={input.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={input.genre}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Button variant="success" type="submit" block className="mt-2">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
