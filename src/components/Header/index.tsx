import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "../../redux/Features/authUserSlice";
import { handleAddToast } from "../../util/handleAddToast";
import { dispatchAction } from "../../util/dispatchAction";

export function Header() {

  const handleLogout = () => {
    dispatchAction(logout());
    handleAddToast({ message: "Input the same username to login again!", type: "info" });
  }

  return (
    <header className="w-full p-6 bg-blue text-white flex justify-between items-center">
      <h1 className="font-bold text-xl">Codeleap Network</h1>
      <button
        onClick={handleLogout}
        className="flex justify-center text-xs items-center gap-1 opacity-70 hover:opacity-100 hover:duration-200 ease-in-out"
      >
          Log Out <FaSignOutAlt />
      </button>
    </header>
  )
}