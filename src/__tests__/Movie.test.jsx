import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import routes from "../routes";

// Assuming a movie ID is used to test the Movie component route
const id = 1; 

const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`],
    initialIndex: 0
});

const renderMovieRoute = () => render(<RouterProvider router={router} />);


test("renders without any errors", () => {
  const errorSpy = vi.spyOn(global.console, "error");
  renderMovieRoute();
  expect(errorSpy).not.toHaveBeenCalled();
  errorSpy.mockRestore();
});

test("renders movie's title in an h1", async () => {
  renderMovieRoute();
  const h1 = await screen.findByText(/Doctor Strange/i);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders movie's time within a p tag", async () => {
  renderMovieRoute();
  const p = await screen.findByText(/115/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

// Checks the correct structure found in your debug output: <ul><li>Genre</li>...</ul>
test("renders a list item for each genre", async () => {
  renderMovieRoute();
  const genres = ["Action", "Fantasy"]; 
  
  // Wait for all genre list items to appear
  const genrePromises = genres.map(async (genre) => {
    const li = await screen.findByText(genre); 
    expect(li).toBeInTheDocument();
    expect(li.tagName).toBe("LI"); // Ensures it's an LI, not a SPAN
  });

  await Promise.all(genrePromises);
});


// 🎯 The fixed test looking for the new <img> tag with the correct alt text
test("renders the movie image with correct alt text", async () => {
  renderMovieRoute();
  // findByRole looks for an element by its ARIA role (img for <img>) 
  // and its accessible name (which comes from the 'alt' text).
  const movieImage = await screen.findByRole("img", { name: /Doctor Strange/i }); 
  expect(movieImage).toBeInTheDocument();
});

test("renders the <NavBar /> component", async () => {
  renderMovieRoute();
  expect(await screen.findByRole("navigation")).toBeInTheDocument();
});