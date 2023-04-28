import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/Features/authUserSlice";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface IPostProps {
  data: IPost
}

const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;
const WEEKS = 7 * DAYS;

const getTimeDifference = (createdAt: Date): string => {
  const now = new Date();
  const diff = Math.abs(now.getTime() - createdAt.getTime());

  if (diff < MINUTES) {
    return `${Math.floor(diff / SECONDS)} seconds ago`;
  } else if (diff < HOURS) {
    return `${Math.floor(diff / MINUTES)} minutes ago`;
  } else if (diff < DAYS) {
    return `${Math.floor(diff / HOURS)} hours ago`;
  } else if (diff < WEEKS) {
    return `${Math.floor(diff / DAYS)} days ago`;
  } else {
    return createdAt.toLocaleDateString();
  }
};

export function Post({ data }: IPostProps) {
  const { user } = useSelector(selectAuthUser)
  const { title, content, username, created_datetime } = data
  const timeDifference = getTimeDifference(new Date(created_datetime))

  console.log(user)
  return (
    <article
      className="border border-gray-400 rounded-2xl min-w-full overflow-hidden h-fit">
      <header className="flex justify-between w-full p-6 bg-blue text-white font-bold text-xl">
        <h3>{title}</h3>
        {user === username && (
          <div className="flex gap-7">
            <button><FaTrashAlt /></button>
            <button><FaEdit /></button>
          </div>
        )}
      </header>
      <div className="flex flex-col p-6 gap-4">
        <div className="flex justify-between text-gray-500">
          <p className="font-bold">@{username}</p>
          <span>{timeDifference}</span>
        </div>
        <div className="">
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}