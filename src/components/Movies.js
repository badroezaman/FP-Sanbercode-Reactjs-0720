import React from "react";
import { MovieProvider } from "../context/MovieContext";
import ListsMovie from "./ListsMovie";

const Movies = () => {
  return (
    <>
      <h1 className="text-bold text-primary mb-4">Index Movie</h1>
      <MovieProvider>
        <ListsMovie />
      </MovieProvider>
    </>
  );
};

export default Movies;
