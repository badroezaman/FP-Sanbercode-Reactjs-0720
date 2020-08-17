import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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

const ListsMovie = () => {
  const [movie, setMovie] = useContext(MovieContext);

  useEffect(() => {
    if (movie.lists === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/movies`)
        .then((res) => {
          setMovie({
            ...movie,
            lists: res.data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating,
                review: el.review,
                image_url: el.image_url,
              };
            }),
          });
        });
    }
  });

  // const handleClick = (event) => {
  //   let idMovie = parseInt(event.target.value);
  //   setMovie({
  //     ...movie,
  //     selectedId: idMovie,
  //     statusForm: "changeToEdit",
  //   });
  //   // axios
  //   //   .get(`https://backendexample.sanbersy.com/api/movies/${idMovie}`)
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   });
  // };

  return (
    <>
      <Row>
        {movie.lists !== null &&
          movie.lists.map((item, index) => {
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
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        Rating : {item.rating} <br />
                        Durasi: {minuteToHours(item.duration)} <br />
                        Genre: {item.genre} <br />
                        Tahun: {item.year} <br />
                        <div className="mt-2">
                          <Link
                            to={`/detail-movie/${item.id}`}
                            style={{ color: "#fff" }}
                          >
                            <Button variant="info" size="sm">
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

export default ListsMovie;
