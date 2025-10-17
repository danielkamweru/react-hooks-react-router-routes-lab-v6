import React from "react";
import NavBar from "../components/NavBar";

function Directors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>

        <article>
          <h2>Christopher Nolan</h2>
          <ul>
            <li>Inception</li>
            <li>Dunkirk</li>
            <li>Interstellar</li>
          </ul>
        </article>

        <article>
          <h2>Ryan Coogler</h2>
          <ul>
            <li>Black Panther</li>
            <li>Creed</li>
          </ul>
        </article>

        <article>
          <h2>Scott Derrickson</h2>
          <ul>
            <li>Doctor Strange</li>
            <li>Sinister</li>
            <li>The Exorcism of Emily Rose</li>
          </ul>
        </article>

        <article>
          <h2>Anna Boden</h2>
          <ul>
            <li>Captain Marvel</li>
            <li>Mississippi Grind</li>
          </ul>
        </article>

        <article>
          <h2>Mike Mitchell</h2>
          <ul>
            <li>Sky High</li>
            <li>Trolls</li>
            <li>Alvin and the Chipmunks: Chipwrecked</li>
          </ul>
        </article>

        <article>
          <h2>Edward Zwick</h2>
          <ul>
            <li>Blood Diamond</li>
            <li>The Last Samurai</li>
            <li>The Siege</li> 
            <li>Jack Reacher: Never Go Back</li>
          </ul>
        </article>
      </main>
    </>
  );
}

export default Directors;
