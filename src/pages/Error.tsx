import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-screen">
      <h1 className="font-bold text-5xl">404 Not Found</h1>
      <div className="flex flex-col items-center gap-4">
        <p>The page you are looking for <b className="font-bold text-red">does not</b> exist.</p>
        <Link to={"/"}
          type="button"
          title="Go back"
          aria-label="Go back"
          className="bg-blue text-white text-base font-bold 
                rounded-lg 
                px-[1.875rem] py-[0.375rem] 
                hover:brightness-90
                hover:duration-200
                ease-in-out
                transition" 
        >
          Go back
        </Link>
      </div>
    </div>
  )
}