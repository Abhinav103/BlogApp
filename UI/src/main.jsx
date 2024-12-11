import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.jsx"
import Login from "./pages/LoginPage.jsx"
import Register from "./pages/RegisterPage.jsx"
import PostLists from "./pages/PostListPage.jsx"
import SinglePost from "./pages/SinglePostPage.jsx"
import Write from "./pages/Write.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import MainLayout from "./layouts/MainLayout.jsx"
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
 {
  element:<MainLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path: "/",
      element: <HomePage />,
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
      path: "/posts",
      element: <PostLists />,
    },
    {
      path: "/posts/:PostId",
      element: <SinglePost />,
    },
    {
      path: "/write",
      element: <Write />,
    },
  ]
 }
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router}/>
  </ClerkProvider>
);
