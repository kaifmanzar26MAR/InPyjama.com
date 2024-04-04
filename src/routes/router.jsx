import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Courseview from "../pages/Courseview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:`/courseview/:id`,
        element:<Courseview/>
      }
    ],
  },
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router
