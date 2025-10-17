import React from "react";
import NavBar from "../components/NavBar";

function Actors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>

        <article>
          <h2>Leonardo DiCaprio</h2>
          <ul>
            <li>Inception</li>
            <li>Titanic</li>
            <li>The Revenant</li>
          </ul>
        </article>

        <article>
          <h2>Scarlett Johansson</h2>
          <ul>
            <li>Lucy</li>
            <li>Black Widow</li>
            <li>Marriage Story</li>
          </ul>
        </article>

        <article>
          <h2>Benedict Cumberbatch</h2>
          <ul>
            <li>Doctor Strange</li>
            <li>The Imitation Game</li>
          </ul>
        </article>

        <article>
          <h2>Justin Timberlake</h2>
          <ul>
            <li>In Time</li>
            <li>Friends with Benefits</li>
            <li>Black Mass</li>
            <li>The Social Network</li>
          </ul>
        </article>

        <article>
          <h2>Anna Kendrick</h2>
          <ul>
            <li>Pitch Perfect</li>
            <li>Up in the Air</li>
            <li>Trolls</li>
            <li>Into The Woods</li>
          </ul>
        </article>
<article>
  <h2>Tom Cruise</h2>
  <ul>
    <li>Top Gun</li>
    <li>Mission Impossible</li>
    <li>Mission Impossible 4</li>
    <li>Jack Reacher: Never Go Back</li>
    <li>War of the Worlds</li>
  </ul>
</article>


        
      </main>
    </>
  );
}

export default Actors;
