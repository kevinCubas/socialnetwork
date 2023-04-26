import { Feed } from "./components/Feed"
import { SignInForm } from "./components/SignInForm"
import { useSelector } from "react-redux"
import { selectAuthUser } from "./redux/Features/authUserSlice"

function App() {
  const { isLoggedIn } = useSelector(selectAuthUser);
  return (
    <>
      {isLoggedIn ? <Feed /> : <SignInForm />}
    </>
  )
}

export default App
