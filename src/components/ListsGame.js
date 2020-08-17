import React, { useContext, useEffect } from "react";
import axios from "axios";
import { GameContext } from "../context/GameContext";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ListsGame = () => {
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
              image_url: el.image_url,
            };
          }),
        });
      });
    }
  });

  const handleClick = (event) => {
    let idGame = parseInt(event.target.value);
    axios
      .get(`https://backendexample.sanbersy.com/api/games/${idGame}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <Row>
        {game.lists !== null &&
          game.lists.map((item, index) => {
            return (
              <>
                <Col xs={12} sm={6} md={4}>
                  <Card
                    border="light"
                    style={{ marginBottom: "2rem" }}
                    key={index}
                  >
                    <Card.Img variant="top" src={item.image_url} alt="images" />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        Genre: {item.genre} <br />
                        Platform : {item.platform} <br />
                        Release: {item.release} <br />
                        <div className="mt-2">
                          <Link
                            to={`/detail-game/${item.id}`}
                            style={{ color: "#fff" }}
                          >
                            <Button
                              variant="info"
                              size="sm"
                              onClick={handleClick}
                            >
                              Detail
                            </Button>
                          </Link>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default ListsGame;
