import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import routes from "../routes";

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


test("renders a list item for each genre", async () => {
  renderMovieRoute();
  const genres = ["Action", "Fantasy"]; 
  
  
  const genrePromises = genres.map(async (genre) => {
    const li = await screen.findByText(genre); 
    expect(li).toBeInTheDocument();
    expect(li.tagName).toBe("LI"); 
  });

  await Promise.all(genrePromises);
});

test("renders the movie image with correct alt text", async () => {
  renderMovieRoute();
  const movieImage = await screen.findByRole("img", { name: /Doctor Strange/i }); 
  expect(movieImage).toBeInTheDocument();
});

test("renders the <NavBar /> component", async () => {
  renderMovieRoute();
  expect(await screen.findByRole("navigation")).toBeInTheDocument();
});