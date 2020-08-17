// import React, { useContext, useState, useEffect } from "react";
import React, { useContext, useState } from "react";
import axios from "axios";
import { GameContext } from "../context/GameContext";
import { GameProvider } from "../context/GameContext";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
// import { RadioGroup, RadioButton } from "react-radio-buttons";

const AddGame = () => {
  const [game, setGame] = useContext(GameContext);
  const [input, setInput] = useState({
    name: "",
    genre: "",
    singlePlayer: 1,
    multiplayer: 2,
    // player: "singlePlayer",
    platform: "",
    release: 2020,
    image_url: "",
  });

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
      // case "player": {
      //   setInput({ ...input, player: event.target.value });
      //   break;
      // }
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
    event.preventDefault();

    let name = input.name;
    let genre = input.genre;
    // let singlePlayer = input.singlePlayer.toString();
    // let multiplayer = input.multiplayer.toString();
    // let player = input.player;
    let platform = input.platform;
    let release = input.release.toString();
    let image_url = input.image_url;

    if (
      name.replace(/\s/g, "") !== "" &&
      genre.replace(/\s/g, "") !== "" &&
      //   player.replace(/\s/g, "") !== "" &&
      // singlePlayer.replace(/\s/g, "") !== "" &&
      // multiplayer.replace(/\s/g, "") !== "" &&
      platform.replace(/\s/g, "") !== "" &&
      release.replace(/\s/g, "") !== "" &&
      image_url.replace(/\s/g, "") !== ""
    ) {
      if (game.statusForm === "create") {
        axios
          .post(`https://backendexample.sanbersy.com/api/games`, {
            name: input.name,
            genre: input.genre,
            // player: input.player,
            singlePlayer: input.singlePlayer,
            multiplayer: input.multiplayer,
            platform: input.platform,
            release: input.release,
            image_url: input.image_url,
          })
          .then((res) => {
            console.log(res);
            setGame({
              statusForm: "create",
              selectedID: 0,
              lists: [
                {
                  id: res.data.id,
                  name: input.name,
                  genre: input.genre,
                  // player: input.player,
                  singlePlayer: input.singlePlayer,
                  multiplayer: input.multiplayer,
                  platform: input.platform,
                  release: input.release,
                  image_url: input.image_url,
                },
              ],
            });
          });
      }

      setInput({
        name: "",
        genre: "",
        // player: "",
        singlePlayer: 1,
        multiplayer: 2,
        platform: "",
        release: 2020,
        image_url: "",
      });
    }
  };

  return (
    <Card>
      <Card.Header>Add Game</Card.Header>
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Player</FormLabel>
              <RadioGroup
                row
                aria-label="Player"
                name="player"
                value={input.player}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="singlePlayer"
                  control={<Radio />}
                  label="Single Player"
                />
                <FormControlLabel
                  value="multiplayer"
                  control={<Radio />}
                  label="Multi Player"
                />
              </RadioGroup>
            </FormControl>
            {/* <Form.Label>Single Player</Form.Label>
            <Form.Control
              type="radio"
              name="singlePlayer"
              value={input.singlePlayer}
              onChange={handleChange}
              required
            />
            <Form.Label>Multi Player</Form.Label>
            <Form.Control
              type="radio"
              name="multiPlayer"
              value={input.multiPlayer}
              onChange={handleChange}
              required
            /> */}
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

const CreateGame = () => {
  return (
    <>
      <GameProvider>
        <AddGame />
      </GameProvider>
    </>
  );
};

export default CreateGame;
