import { useSelector } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { selectAuthUser } from "../../redux/Features/authUserSlice";
import { openDeleteModal, openEditModal } from "../../redux/Features/modalSlice";

import { getTimeDifference } from "../../util/getTimeDifference";
import { dispatchAction } from "../../util/dispatchAction";

interface IPostProps {
  data: IPost,
}
export function Post({ data }: IPostProps) {
  const { user } = useSelector(selectAuthUser)
  const { title, content, username, created_datetime, id } = data
  const timeDifference = getTimeDifference(new Date(created_datetime))

  const handleOpenDeleteModal = (id: number) => {
    dispatchAction(openDeleteModal(id))
  }

  const handleOpenEditModal = (post: IPost) => {
    dispatchAction(openEditModal(post))
  }
  return (
      <article
        className="border border-gray-400 rounded-2xl min-w-full overflow-hidden h-fit">
        <header className="flex justify-between w-full p-6 bg-blue text-white font-bold text-xl break-all">
          <h3>{title}</h3>
          {user === username && (
            <div className="flex gap-7">
              <button
                title="Delete"
                type="button"
                aria-label="Delete"
                onClick={() => handleOpenDeleteModal(id)}>
                <FaTrashAlt />
              </button>
              <button
                title="Edit"
                type="button"
                aria-label="Edit"
                onClick={() => handleOpenEditModal(data)}>
                <FaEdit />
              </button>
            </div>
          )}
        </header>
        <div className="flex flex-col p-6 gap-4">
          <div className="flex justify-between text-gray-500">
            <p className="font-bold">@{username}</p>
            <span>{timeDifference}</span>
          </div>
          <div>
            <p className="break-words">
              {content}
            </p>
          </div>
        </div>
      </article>
  )
}