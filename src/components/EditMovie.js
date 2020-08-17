// import React, { useContext, useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { MovieContext } from "../context/MovieContext";
// import { MovieProvider } from "../context/MovieContext";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditMovie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);
  //   const [movie, setMovie] = useContext(MovieContext);
  const [input, setInput] = useState({
    title: "",
    description: "",
    year: 2020,
    duration: 120,
    genre: "",
    rating: 0,
    review: "",
    image_url: "",
  });
  const [selectedId, setSelectedId] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

  useEffect(() => {
    if (movie === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/movies/${id}`)
        .then((res) => {
          console.log(res.data);
          setInput(res.data);
        });
      setMovie({ ...movie });
    }
  }, [movie]);

  //   useEffect(() => {
  //     if (movie.statusForm === "changeToEdit") {
  //       let dataMovie = movie.lists.find((x) => x.id === movie.selectedId);
  //       setInput({
  //         title: dataMovie.title,
  //         rating: dataMovie.rating,
  //         duration: dataMovie.duration,
  //         genre: dataMovie.genre,
  //         year: dataMovie.year,
  //         description: dataMovie.description,
  //         review: dataMovie.review,
  //         image_url: dataMovie.image_url,
  //       });
  //       setMovie({ ...movie, statusForm: "edit" });
  //     }
  //   }, [movie]);

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "title": {
        setInput({ ...input, title: event.target.value });
        break;
      }
      case "year": {
        setInput({ ...input, year: event.target.value });
        break;
      }
      case "duration": {
        setInput({ ...input, duration: event.target.value });
        break;
      }
      case "genre": {
        setInput({ ...input, genre: event.target.value });
        break;
      }
      case "rating": {
        setInput({ ...input, rating: event.target.value });
        break;
      }
      case "description": {
        setInput({ ...input, description: event.target.value });
        break;
      }
      case "review": {
        setInput({ ...input, review: event.target.value });
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

    let title = input.title;
    let rating = input.rating.toString();
    let duration = input.duration.toString();
    let genre = input.genre;
    let year = input.year.toString();
    let description = input.description;
    let review = input.review;
    let image_url = input.image_url;

    if (
      title.replace(/\s/g, "") !== "" &&
      rating.replace(/\s/g, "") !== "" &&
      duration.replace(/\s/g, "") !== "" &&
      genre.replace(/\s/g, "") !== "" &&
      year.replace(/\s/g, "") !== "" &&
      description.replace(/\s/g, "") !== "" &&
      review.replace(/\s/g, "") !== "" &&
      image_url.replace(/\s/g, "") !== ""
    ) {
      if (statusForm === "edit") {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/movies/${selectedId}`,
            {
              title: input.title,
              rating: input.rating,
              duration: input.duration,
              genre: input.genre,
              year: input.year,
              description: input.description,
              review: input.review,
              image_url: input.image_url,
            }
          )
          .then(() => {
            let dataMovie = movie.find((el) => el.id === selectedId);
            dataMovie.title = input.title;
            dataMovie.rating = input.rating;
            dataMovie.duration = input.duration;
            dataMovie.genre = input.genre;
            dataMovie.year = input.year;
            dataMovie.description = input.description;
            dataMovie = input.review;
            dataMovie = input.image_url;
            setMovie([...movie]);
          });
      }

      setStatusForm("create");
      setSelectedId(0);
      setInput({
        title: "",
        description: "",
        year: 2020,
        duration: 120,
        genre: "",
        rating: 0,
        review: "",
        image_url: "",
      });
    }
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     let title = input.title;
  //     let rating = input.rating.toString();
  //     let duration = input.duration.toString();
  //     let genre = input.genre;
  //     let year = input.year.toString();
  //     let description = input.description;
  //     let review = input.review;
  //     let image_url = input.image_url;

  //     if (
  //       title.replace(/\s/g, "") !== "" &&
  //       rating.replace(/\s/g, "") !== "" &&
  //       duration.replace(/\s/g, "") !== "" &&
  //       genre.replace(/\s/g, "") !== "" &&
  //       year.replace(/\s/g, "") !== "" &&
  //       description.replace(/\s/g, "") !== "" &&
  //       review.replace(/\s/g, "") !== "" &&
  //       image_url.replace(/\s/g, "") !== ""
  //     ) {
  //       if (statusForm === "edit") {
  //         axios
  //           .put(`https://backendexample.sanbersy.com/api/movies/${selectedId}`, {
  //             title: input.title,
  //             rating: input.rating,
  //             duration: input.duration,
  //             genre: input.genre,
  //             year: input.year,
  //             description: input.description,
  //             review: input.review,
  //             image_url: input.image_url,
  //           })
  //           .then(() => {
  //             let dataMovie = movie.find((el) => el.id === selectedId);
  //             dataMovie = input.title;
  //             dataMovie = input.rating;
  //             dataMovie = input.duration;
  //             dataMovie = input.genre;
  //             dataMovie = input.year;
  //             dataMovie = input.description;
  //             dataMovie = input.review;
  //             dataMovie = input.image_url;
  //             setMovie([...movie]);
  //           });
  //       }
  //       setStatusForm("create");
  //       setSelectedId(0);
  //       setInput({
  //         title: "",
  //         description: "",
  //         year: 2020,
  //         duration: 120,
  //         genre: "",
  //         rating: 0,
  //         review: "",
  //         image_url: "",
  //       });
  //     }
  //   };

  return (
    <Card>
      <Card.Header>Edit Movie</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Judul</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
              placeholder="Judul Movie"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              value={input.rating}
              onChange={handleChange}
              placeholder="Pilih angka 1 - 10"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Durasi</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              value={input.duration}
              onChange={handleChange}
              placeholder="dalam menit"
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
              placeholder="Aksi, Drama, Komedi"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tahun</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={input.year}
              onChange={handleChange}
              placeholder="2020"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="description"
              value={input.description}
              onChange={handleChange}
              placeholder="Tuliskan deskripsi Movie disini"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="review"
              value={input.review}
              onChange={handleChange}
              placeholder="Tuliskan Review Movie disini"
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

// const UpdateMovie = () => {
//   return (
//     <>
//       <MovieProvider>
//         <EditMovie />
//       </MovieProvider>
//     </>
//   );
// };

export default EditMovie;
