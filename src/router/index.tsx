import { createBrowserRouter } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedPage />,
  },
  {
    path: "/login",
    element: <SignIn />,
  }
])