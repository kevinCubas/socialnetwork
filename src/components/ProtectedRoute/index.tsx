import { Navigate, useLocation } from "react-router-dom";
import { selectAuthUser } from "../../redux/Features/authUserSlice";
import { useSelector } from "react-redux";

export function ProtectedFeedRoute({children}: {children: JSX.Element}) {
  const { isLoggedIn } = useSelector(selectAuthUser);
  const location = useLocation();

  if(!isLoggedIn) return <Navigate to="/login" state={{from: location}} replace />
  return children
}