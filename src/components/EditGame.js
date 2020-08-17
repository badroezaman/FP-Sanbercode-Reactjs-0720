// import React, { useContext, useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { GameContext } from "../context/GameContext";
// import { GameProvider } from "../context/GameContext";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditGame = () => {
  let { id } = useParams();
  const [game, setGame] = useState(null);
  //   const [movie, setMovie] = useContext(GameContext);
  const [input, setInput] = useState({
    name: "",
    genre: "",
    singlePlayer: 0,
    multiPlayer: 0,
    platform: "",
    release: 2020,
    image_url: "",
  });
  const [selectedId, setSelectedId] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

  useEffect(() => {
    if (game === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/games/${id}`)
        .then((res) => {
          console.log(res.data);
          setInput(res.data);
        });
      setGame({ ...game });
    }
  }, [game]);

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "name": {
        setInput({ ...input, name: event.target.value });
        break;
      }
      case "genre": {
        setInput({ ...input, genre: event.target.value });
        break;
      }
      case "singlePlayer": {
        setInput({ ...input, singlePlayer: event.target.value });
        break;
      }
      case "multiPlayer": {
        setInput({ ...input, multiPlayer: event.target.value });
        break;
      }
      case "platform": {
        setInput({ ...input, platform: event.target.value });
        break;
      }
      case "release": {
        setInput({ ...input, release: event.target.value });
        break;
      }
      case "image_url": {
        setInput({ ...input, image_url: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    // menahan submit
    event.preventDefault();

    let name = input.name;
    let genre = input.genre;
    let singlePlayer = input.singlePlayer.toString();
    let multiPlayer = input.multiPlayer.toString();
    let platform = input.platform;
    let release = input.release.toString();
    let image_url = input.image_url;

    if (
      name.replace(/\s/g, "") !== "" &&
      genre.replace(/\s/g, "") !== "" &&
      singlePlayer.replace(/\s/g, "") !== "" &&
      multiPlayer.replace(/\s/g, "") !== "" &&
      platform.replace(/\s/g, "") !== "" &&
      release.replace(/\s/g, "") !== "" &&
      image_url.replace(/\s/g, "") !== ""
    ) {
      if (statusForm === "edit") {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/games/${selectedId}`,
            {
              name: input.name,
              genre: input.genre,
              singlePlayer: input.singlePlayer,
              multiPlayer: input.multiPlayer,
              platform: input.platform,
              release: input.release,
              image_url: input.image_url,
            }
          )
          .then(() => {
            let dataGame = game.find((el) => el.id === selectedId);
            dataGame.name = input.name;
            dataGame.genre = input.genre;
            dataGame.singlePlayer = input.singlePlayer;
            dataGame.multiPlayer = input.multiPlayer;
            dataGame.platform = input.platform;
            dataGame.release = input.release;
            dataGame = input.image_url;
            setGame([...game]);
          });
      }

      setStatusForm("create");
      setSelectedId(0);
      setInput({
        name: "",
        genre: "",
        singlePlayer: 0,
        multiPlayer: 0,
        platform: "",
        release: 2020,
        image_url: "",
      });
    }
  };

  return (
    <Card>
      <Card.Header>Edit Game</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              placeholder="Nama Game"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              value={input.genre}
              onChange={handleChange}
              placeholder="RPG, FPS, Racing"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Player</Form.Label>
            <Form.Control
              type="number"
              name="player"
              value={input.player}
              onChange={handleChange}
              placeholder="1 or 2"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Release</Form.Label>
            <Form.Control
              type="number"
              name="release"
              value={input.release}
              onChange={handleChange}
              placeholder="2020"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Plaform</Form.Label>
            <Form.Control
              type="text"
              name="platform"
              value={input.platform}
              onChange={handleChange}
              placeholder="PC, Mobile"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image_url"
              value={input.image_url}
              onChange={handleChange}
              placeholder="http://url.image"
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

// const UpdateGame = () => {
//   return (
//     <>
//       <GameProvider>
//         <EditGame />
//       </GameProvider>
//     </>
//   );
// };

export default EditGame;
