import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import Recharge from "./pages/Recharge.jsx";
import Details from "./components/homepage/Details.jsx";
import Statement from "./pages/Statement.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
    children: [
      {
        path: "/homepage",
        element: <Details />,
      },
      {
        path: "/homepage/recharge",
        element: <Recharge />,
      },
      {
        path: "/homepage/statement",
        element: <Statement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
