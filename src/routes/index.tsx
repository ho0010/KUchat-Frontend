import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./Signin/Signup";
import Login from "./Login/Login";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}
export default Router;
