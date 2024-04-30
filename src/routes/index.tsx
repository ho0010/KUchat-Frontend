import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import App from "./App";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <Home /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default Router;
