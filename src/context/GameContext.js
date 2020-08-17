import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [game, setGame] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create",
  });

  return (
    <GameContext.Provider value={[game, setGame]}>
      {props.children}
    </GameContext.Provider>
  );
};
