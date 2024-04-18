import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Courseview from "../pages/Courseview";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Blogs from "../pages/Blogs";
import Youtube from "../pages/Youtube";

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
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/courses',
        element:<Courses/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/youtube',
        element:<Youtube/>
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
