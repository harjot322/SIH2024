import Navbar from "./components/navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/homePage/homePage"
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Register from "./routes/register/register";
import Login from "./routes/login/login";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { singlePageLoader } from "./lib/loaders";

function App() {



  const isAuthenticated = useSelector(state => state.users.user)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/list/:id",
          element: isAuthenticated ? <SinglePage /> : <Navigate to="/login" />,
          loader: singlePageLoader,
        },
        {
          path: "/profile",
          element: isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ]
    },
  ]);

  return (
    // <div className="layout">
    //   <div className="navbar">
    //   <Navbar />
    //   </div>
    //   <div className="content">
    //   <HomePage/>
    //   </div>
    // </div>
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>


      );
}

      export default App