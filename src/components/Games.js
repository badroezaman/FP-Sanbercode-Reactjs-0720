import React from "react";
import { GameProvider } from "../context/GameContext";
import ListsGame from "./ListsGame";

const Games = () => {
  return (
    <>
      <h1 className="text-bold text-primary mb-4">Index Game</h1>
      <GameProvider>
        <ListsGame />
      </GameProvider>
    </>
  );
};

export default Games;
