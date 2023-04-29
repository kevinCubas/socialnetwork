import { createBrowserRouter } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import SignIn from "../pages/SignIn";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedPage />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <SignIn />,
  }
])