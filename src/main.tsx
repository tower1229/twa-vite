import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import WebApp from "@twa-dev/sdk";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

import Create from "./pages/create.tsx";
import Iframe from "./pages/iframe.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/iframe",
    element: <Iframe />,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
]);

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
