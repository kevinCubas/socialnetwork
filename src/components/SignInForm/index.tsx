import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Features/authUserSlice";

export function SignInForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if(!username) throw new Error("Username is required");
      dispatch(login({username}));
    } catch (error) {
      console.log(error)
    } finally {
      setUsername("");
    }
  };

  return (
    <main
      className="flex justify-center items-center min-h-screen"
    >
      <div
        className="bg-white p-6 w-[500px] border border-gray-300 rounded-2xl"
      >
        <header className="mb-6">
          <h1 className="font-bold text-[1.375rem]">
            Welcome to CodeLeap network!
          </h1>
        </header>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            className="text-base"
            aria-label="Username"
          >
            Please enter your username:
          </label>
          <input
            id="username"
            className="border border-gray-500 rounded-lg p-2 w-full"
            type="text"
            required
            aria-required="true"
            placeholder="John Doe"
            aria-placeholder="John Doe"
            title="username input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            title="Enter"
            disabled={!username}
            className="
              bg-blue 
              text-white text-base font-bold 
              rounded-lg 
              px-[1.875rem] py-[0.375rem] 
              ml-auto mt-2
              hover:brightness-90
              hover:duration-200
              ease-in-out
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
              "
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  )
}