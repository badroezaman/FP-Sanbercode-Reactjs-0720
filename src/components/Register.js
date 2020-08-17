import React, { useContext, useState } from "react";
import { RegisterContext } from "../context/RegisterContext";
import { RegisterProvider } from "../context/RegisterContext";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useContext(RegisterContext);
  const [input, setInput] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    let username = input.username;
    let password = input.password;

    if (
      username.replace(/\s/g, "") !== "" &&
      password.replace(/\s/g, "") !== ""
    ) {
      if (user.statusForm === "create") {
        axios
          .post(`https://backendexample.sanbersy.com/api/users`, {
            username: input.username,
            password: input.password,
          })
          .then((res) => {
            console.log(res);
            setUser({
              statusForm: "create",
              selectedId: 0,
              lists: [
                {
                  id: res.data.id,
                  username: input.username,
                  password: input.password,
                },
              ],
            });
          });
      }

      setInput({ username: "", password: "" });
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
            <Card.Header>Register</Card.Header>
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

const Registered = () => {
  return (
    <>
      <RegisterProvider>
        <Register />
      </RegisterProvider>
    </>
  );
};

export default Registered;
