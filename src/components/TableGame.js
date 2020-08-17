import React, { useContext, useEffect } from "react";
import axios from "axios";
import { GameContext } from "../context/GameContext";
import { GameProvider } from "../context/GameContext";
// import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const TableGame = () => {
  const [game, setGame] = useContext(GameContext);

  useEffect(() => {
    if (game.lists === null) {
      axios.get(`https://backendexample.sanbersy.com/api/games`).then((res) => {
        setGame({
          ...game,
          lists: res.data.map((el) => {
            return {
              id: el.id,
              name: el.name,
              genre: el.genre,
              singlePlayer: el.singlePlayer,
              multiPlayer: el.multiPlayer,
              platform: el.platform,
              release: el.release,
            };
          }),
        });
      });
    }
  });

  const handleDelete = (event) => {
    let idGame = parseInt(event.target.value);
    let newData = game.lists.filter((el) => el.id !== idGame);

    axios
      .delete(`https://backendexample.sanbersy.com/api/games/${idGame}`)
      .then((res) => {
        console.log(res);
      });
    setGame({ ...game, lists: [...newData] });
  };

  const handleEdit = (event) => {
    let idGame = parseInt(event.target.value);
    setGame({
      ...game,
      selectedId: idGame,
      statusForm: "changeToEdit",
    });
  };

  return (
    <>
      <Row>
        <Col className="mb-2">
          <Link to="/game/create">
            <Button variant="success" size="sm">
              Add Game
            </Button>
          </Link>
        </Col>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Player</th>
              <th>Platform</th>
              <th>Release</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {game.lists !== null &&
              game.lists.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.genre}</td>
                      <td>{item.singlePlayer}</td>
                      <td>{item.platform}</td>
                      <td>{item.release}</td>
                      <td>
                        <Button
                          onClick={handleDelete}
                          value={item.id}
                          variant="outline-danger"
                          size="sm"
                        >
                          Delete
                        </Button>
                        &nbsp;
                        <Link
                          to={`/game/edit/${item.id}`}
                          style={{ color: "#fff" }}
                        >
                          <Button
                            onClick={handleEdit}
                            value={item.id}
                            variant="warning"
                            size="sm"
                          >
                            Edit
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

const TbGames = () => {
  return (
    <GameProvider>
      <TableGame />
    </GameProvider>
  );
};

export default TbGames;
