import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";

// https://backendexample.sanbersy.com/api/movies

function minuteToHours(num) {
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return (
    (rhours === 0 ? "" : rhours + " Jam") +
    (rminutes === 0 ? "" : " " + rminutes + " Menit")
  );
}

const DetailMovie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movie === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/movies/${id}`)
        .then((res) => {
          console.log(res.data);
          setMovie(res.data);
        });
    }
  });

  return (
    <>
      {movie !== null && (
        <Card>
          <Card.Img variant="top" src={movie.image_url} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              <strong>Rating :</strong> {movie.rating}
              <strong>Durasi :</strong> {minuteToHours(movie.duration)} <br />
              <strong>Genre :</strong> {movie.genre} <br />
              <strong>Tahun :</strong> {movie.year} <br />
              <strong>Deskripsi :</strong> <br />
              {movie.description} <br /> <hr />
              <strong>Review :</strong> <br />
              {movie.review} <br />
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default DetailMovie;
