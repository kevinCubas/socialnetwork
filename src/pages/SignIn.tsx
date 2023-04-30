import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../redux/Features/authUserSlice";
import { SignInForm } from "../components/SignInForm";
import {motion} from "framer-motion";

export default function SignIn() {
  const { isLoggedIn } = useSelector(selectAuthUser);

  if (isLoggedIn) return <Navigate to="/" replace />
  return (
    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0, transition: { ease: "easeIn" , duration: 0.5 }}} exit={{ opacity: 0 }}>
      <SignInForm />
    </motion.div>
  )
}