import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/theme.css";
import Main from "./layouts/Main";
import { UserProvider } from "./context/UserContext";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Movie from "./components/Movie";
// import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <div className="App">
        <section>
          <Home />
        </section>
      </div> */}
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
