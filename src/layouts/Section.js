import React, { useContext } from "react";

// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { Switch, Route, Redirect } from "react-router-dom";

// import About from "../components/About";
import Home from "../components/Home";
// import Movies from "../components/Movie";
import ListsMovie from "../components/Movies";
import DetailMovie from "../components/DetailMovie";
import TableMovie from "../components/TableMovie";
import AddMovie from "../components/AddMovie";
import EditMovie from "../components/EditMovie";

import ListsGame from "../components/Games";
import DetailGame from "../components/DetailGame";
import TableGame from "../components/TableGame";
import AddGame from "../components/AddGame";
import EditGame from "../components/EditGame";

import Login from "../components/Login";
import Register from "../components/Register";
import { UserContext } from "../context/UserContext";
import { RegisterContext } from "../context/RegisterContext";

const Section = () => {
  const [user] = useContext(UserContext, RegisterContext);

  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({ user, ...props }) =>
    user ? <Redirect to="/" /> : <Route {...props} />;

  return (
    <>
      {/* <Container style={{ padding: "7.5rem 0" }}> */}
      <Col md={10}>
        <Switch>
          <Route exact path="/" user={user} component={Home} />
          <Route exact path="/lists-movie" user={user} component={ListsMovie} />
          <Route path="/detail-movie/:id" component={DetailMovie} />
          <PrivateRoute
            exact
            path="/movies"
            user={user}
            component={TableMovie}
          />
          <PrivateRoute
            exact
            path="/movie/create"
            user={user}
            component={AddMovie}
          />
          <PrivateRoute
            exact
            path="/movie/edit/:id"
            user={user}
            component={EditMovie}
          />

          <Route exact path="/lists-game" user={user} component={ListsGame} />
          <Route path="/detail-game/:id" component={DetailGame} />
          <PrivateRoute exact path="/games" user={user} component={TableGame} />
          <PrivateRoute
            exact
            path="/game/create"
            user={user}
            component={AddGame}
          />
          <PrivateRoute
            exact
            path="/game/edit/:id"
            user={user}
            component={EditGame}
            component={EditGame}
          />

          <LoginRoute exact path="/register" user={user} component={Register} />
          <LoginRoute exact path="/login" user={user} component={Login} />
          {/* <PrivateRoute exact path="/moviesss" user={user} component={Movies} /> */}
        </Switch>
      </Col>
      {/* </Container> */}
    </>
  );
};

export default Section;
