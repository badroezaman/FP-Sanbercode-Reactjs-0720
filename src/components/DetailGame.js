import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";

// https://backendexample.sanbersy.com/api/games

const DetailGame = () => {
  let { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (game === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/games/${id}`)
        .then((res) => {
          //   console.log(res.data);
          setGame(res.data);
        });
    }
  });

  return (
    <>
      {game !== null && (
        <Card>
          <Card.Img variant="top" src={game.image_url} />
          <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>
              <strong>Genre :</strong> {game.genre} <br />
              <strong>Player :</strong> {game.singlePlayer} <br />
              <strong>Player :</strong> {game.multiPlayer} <br />
              <strong>Release :</strong> {game.release} <br />
              <strong>Platform :</strong> {game.platform}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default DetailGame;
