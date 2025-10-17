import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Fantasy"],
    image: "https://example.com/doctor-strange.jpg",
  },
  {
    id: 2,
    title: "Black Panther",
    time: 134,
    genres: ["Action", "Adventure"],
    image: "https://example.com/black-panther.jpg",
  },
  {
    id: 3,
    title: "Captain Marvel",
    time: 123,
    genres: ["Action", "Sci-Fi"],
    image: "https://example.com/captain-marvel.jpg",
  },
  {
    id: 4,
    title: "Sky High",
    time: 100,
    genres: ["Action", "Comedy"],
    image: "https://example.com/sky-high.jpg",
  },
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h1>Movie not found!</h1>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} min</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <img src={movie.image} alt={movie.title} />
    </div>
  );
}

export default Movie;
