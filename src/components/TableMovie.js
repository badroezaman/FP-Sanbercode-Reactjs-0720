import React, { useContext, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

import axios from "axios";

import { MovieContext } from "../context/MovieContext";
import { MovieProvider } from "../context/MovieContext";
import { Link } from "react-router-dom";

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

const TableMovie = () => {
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

  const handleDelete = (event) => {
    let idMovie = parseInt(event.target.value);
    let newData = movie.lists.filter((el) => el.id !== idMovie);

    axios
      .delete(`https://backendexample.sanbersy.com/api/movies/${idMovie}`)
      .then((res) => {
        console.log(res);
      });
    setMovie({ ...movie, lists: [...newData] });
  };

  const handleEdit = (event) => {
    let idMovie = parseInt(event.target.value);
    setMovie({
      ...movie,
      selectedId: idMovie,
      statusForm: "changeToEdit",
    });
  };

  return (
    <>
      <Row>
        <Col className="mb-2">
          <Link to="/movie/create">
            <Button variant="success" size="sm">
              Add Movie
            </Button>
          </Link>
        </Col>
        <Table responsive>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Genre</th>
              <th>Durasi</th>
              <th>Tahun</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {movie.lists !== null &&
              movie.lists.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.genre}</td>
                      <td>{minuteToHours(item.duration)}</td>
                      <td>{item.year}</td>
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
                          to={`/movie/edit/${item.id}`}
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

const TbMovies = () => {
  return (
    <MovieProvider>
      <TableMovie />
    </MovieProvider>
  );
};

export default TbMovies;
