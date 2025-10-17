import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie/:id", element: <Movie /> },
  { path: "/actors", element: <Actors /> },
  { path: "/directors", element: <Directors /> },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

export { router };
