import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Homepage from "./Components/Homepage.jsx";
import Destination from "./Components/Destination.jsx";
import Technology from "./Components/Technology.jsx";
import Crew from "./Components/Crew.jsx";
import Selected from "./Components/Selected.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/space-website",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/space-website/",
        element: <Homepage />,
      },
      {
        path: "/space-website/destination",
        element: <Destination />,
        children: [
          {
            path: "/space-website/destination/:id",
            element: <Selected />,
          },
        ],
      },
      {
        path: "/space-website/crew",
        element: <Crew />,
      },
      {
        path: "/space-website/technology",
        element: <Technology />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
