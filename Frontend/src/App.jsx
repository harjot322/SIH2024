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
import { chatUserLoader, listPageLoader, singlePageLoader } from "./lib/loaders.js";
import Ask from "./components/ask/Ask";
import Sidebar from "./components/sidebar/Sidebar";
import Wiki from "./routes/wiki/Wiki";
import Contact from "./routes/contact/Contact";
import Retail from "./routes/retail/Retail";
import Wholesale from "./routes/wholesale/Wholesale";
import Preorder from "./routes/preorder/Preorder";

import PdfPage from "./routes/PdfPage/PdfPage";

import Retailpage from "./routes/retailpage/Retailpage";
import Wholesalepage from "./routes/wholesalepage/Wholesalepage";

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
          element:   <ListPage /> ,
          loader : listPageLoader

        },
        {
          path: "/list/:id",
          element: isAuthenticated ? <SinglePage /> : <Navigate to="/login" />,
          loader: singlePageLoader,
        },
        {
          path: "/profile",
          element: isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />,
          loader: chatUserLoader,
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
        {
          path: "/wiki",
          element: <Wiki />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/retail",
          element: <Retail />,
        },
        {
          path: "/wholesale",
          element: <Wholesale />,
        },
        {
          path: "/preorder",
          element: <Preorder />,
        },
        {

          path : '/pdf',
          element : <PdfPage />,
        },
        {
          path: "/retail/:id",
          element: <Retailpage />,
        },
        {
          path: "/wholesale/:id",
          element: <Wholesalepage />,
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