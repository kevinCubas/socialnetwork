import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../redux/Features/authUserSlice";
import { SignInForm } from "../components/SignInForm";

export default function SignIn() {
  const { isLoggedIn } = useSelector(selectAuthUser);

  if(isLoggedIn) return <Navigate to="/" replace />
  return (
    <SignInForm />
  )
}