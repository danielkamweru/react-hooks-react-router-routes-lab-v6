import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Fantasy"] },
  { id: 2, title: "Black Panther", time: 134, genres: ["Action", "Adventure"] },
  { id: 3, title: "Captain Marvel", time: 123, genres: ["Action", "Sci-Fi"] },
  { id: 4, title: "Sky High", time: 100, genres: ["Action", "Comedy"] },
];

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <article key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.time} min</p>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Home;
