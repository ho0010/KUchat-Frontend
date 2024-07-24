import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import User from "./User/User";
import App from "./App";
import Chat from "./Chat/Chat";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <Home /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/user", element: <User /> },
        { path: "/chat", element: <Chat /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default Router;
