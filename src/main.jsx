import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./Components/MainRoot";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
