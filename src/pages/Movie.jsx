import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Fantasy"] },
  { id: 2, title: "Black Panther", time: 134, genres: ["Action", "Adventure"] },
  { id: 3, title: "Captain Marvel", time: 123, genres: ["Action", "Sci-Fi"] },
  { id: 4, title: "Sky High", time: 100, genres: ["Action", "Comedy"] },
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
    </div>
  );
}

export default Movie;
