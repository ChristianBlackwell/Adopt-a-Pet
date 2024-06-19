import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* Route for HomePage at root path */}
      <Route index element={<HomePage />} />

      {/* Route for dynamic paths */}
      <Route path="/:type" element={<HomePage />} />

      {/* Nested Route for PetDetailsPage */}
      <Route path="/:type/:id" element={<PetDetailsPage />} />

      {/* Nested Route for SearchPage */}
      <Route path="/search" element={<SearchPage />} />

      {/* Nested Route for PetDetailsNotFound */}
      <Route path="pet-details-not-found" element={<PetDetailsNotFound />} />
    </Route>
  )
);

function App() {
  return (
    // Replace below with a Router Provider
    <RouterProvider router={appRouter} />
  );
}

export default App;
